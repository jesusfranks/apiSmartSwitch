'use strict'

const User = use('App/Models/User')

class UserController {

    async test({ response }){
        return response.send({message: 'Route test was a success'}) 
    }

    async getUser({ auth, response }){
        const user = await auth.getUser();
        const usr = {
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email
        }
        return response.json(usr);
    }

    async register({ request }){
        const {first_name, last_name, email, password} = request.all()
        const user = await User.create({
            first_name,
            last_name,
            email,
            password
        })    
        return user; 
    }

    async login({request, auth}){
        const {email, password} = request.only(['email', 'password']);
        const token = await auth
                                .withRefreshToken()
                                .attempt(email, password);
        return token;
    }

    async show({params, response}){
        const user = await User.find(params.id)
        const res = {
            first_name: user.first_name,
            last_name: user.last_name
            // email: user.email
        }
        return response.json(res)
    }


}

module.exports = UserController

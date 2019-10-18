
const accessProhibited = use('App/Exceptions/AccessProhibitedException')
const notfound = use('App/Exceptions/NotFoundException')

class AuthService {
    checkPermission(resource, user){
        if (!resource) {
            throw new notfound()
        }
        if(resource.user_id !== user.id){
            throw new accessProhibited()
        }         
    }
}

module.exports = new AuthService()
'use strict'

const Device = use('App/Models/Device')
const authService =use('App/Services/AuthService')

class DeviceController {

    async index({ auth }){
        const user = await auth.getUser()
        return await user.devices().fetch()
    }

    async create({ auth, request }){
        const user = await auth.getUser()
        const { name, type, description} = request.all()
        const device = new Device()
        device.fill({
            name, 
            type, 
            description
        })
        await user.devices().save(device)
        return device
    }

    async destroy({ auth, params}){
        const user = await auth.getUser()
        const { id } = params
        const device = await Device.find(id)
        authService.checkPermission(device.user_id, user.id)
        await device.delete()
        return device
    }

    async update ({ auth, params, request}){
        const user = await auth.getUser()
        const { id } = params
        const device = await Device.find(id)
        authService.checkPermission(device.user_id, user.id)
        device.merge(request.only(['name', 'type', 'description']))
        await device.save()
        return device
    }

    async updateStatus ({ auth, params, request}){
        const user = await auth.getUser()
        const { id } = params
        const device = await Device.find(id)
        authService.checkPermission(device.user_id, user.id)
        device.merge(request.only(['state', 'value']))
        await device.save()

        return device
    }
    

}

module.exports = DeviceController

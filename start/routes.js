'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(function(){

  Route.post('users/login', 'UserController.login')
  Route.post('users/register', 'UserController.register')
  Route.get('users/getUser/:id', 'Usercontroller.show')
  Route.get('users/getUser', 'Usercontroller.getUser').middleware('auth')
  Route.get('users/test', 'Usercontroller.test')

  Route.get('device/index', 'DeviceController.index').middleware('auth')
  Route.post('device/create', 'DeviceController.create').middleware('auth')
  Route.delete('device/destroy/:id', 'DeviceController.destroy').middleware('auth')
  Route.patch('device/update/:id', 'DeviceController.update').middleware('auth')
  Route.patch('device/updateStatus/:id', 'DeviceController.updateStatus').middleware('auth')
  
}).prefix('api/v1')
'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class NotFoundException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle ({ response }) {
    return response.status(404).json({
      menssage: 'The resource does not exixt'
    })
}
}

module.exports = NotFoundException

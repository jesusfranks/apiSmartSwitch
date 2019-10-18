'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class AccessProhibitedException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle ({ response }) {
      return response.status(403).json({
        menssage: 'you are not allowed to execute this action'
      })
  }
}

module.exports = AccessProhibitedException

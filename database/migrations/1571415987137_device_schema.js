'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DeviceSchema extends Schema {
  up () {
    this.create('devices', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('name', 80).notNullable().unique()
      table.string('type', 80).notNullable()
      table.string('description', 300).notNullable()
      table.boolean('state').defaultTo(false)
      table.string('value', 80).notNullable().defaultTo('OFF')
      table.timestamps()
    })
  }

  down () {
    this.drop('devices')
  }
}

module.exports = DeviceSchema

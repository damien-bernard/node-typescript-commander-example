#!/usr/bin/env node

import * as commander from 'commander'
import { version } from '../version.js'

function print(username: string, password?: string): void {
  console.log(`username is '%s' and password is '%s'`, username, password)
}

const program = new commander.Command()
program
  .version(version)
  .argument('[username]', 'username to login', 'admin') // <username> is required
  .argument('[password]', 'password to login', '123456') // [password] is optional
  .action(print)

program.parse(process.argv)

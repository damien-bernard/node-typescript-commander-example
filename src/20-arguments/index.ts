#!/usr/bin/env node

import * as commander from 'commander'
import { version } from '../version.js'

function print(username: string, password?: string): void {
  if (password !== undefined) {
    console.log(`username is '%s' and password is '%s'`, username, password)
  } else {
    console.log(`username is '%s'`, username)
  }
}

const program = new commander.Command()
program
  .version(version)
  .argument('<username>', 'username to login') // <username> is required
  .argument('[password]', 'password to login') // [password] is optional
  .action(print)

program.parse(process.argv)

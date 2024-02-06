#!/usr/bin/env node

import * as commander from 'commander'
import { version } from '../version.js'

interface Options {
  username: string
  password: string
}

function print(options: Options): void {
  console.log(
    `username is '%s' and password is '%s'`,
    options.username,
    options.password,
  )
}

const program = new commander.Command()
program
  .version(version)
  .option('-u, --username <username>', 'username to login', 'admin')
  .option('-p, --password [password]', 'password to login', '123456')
  .action(print)

program.parse(process.argv)

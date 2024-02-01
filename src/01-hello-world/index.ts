#!/usr/bin/env node

import * as commander from 'commander'

function print(): void {
  console.log('Hello World from Commander')
}

const program = new commander.Command()
program.version('0.0.1').action(print)

program.parse(process.argv)

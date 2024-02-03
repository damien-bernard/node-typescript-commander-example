#!/usr/bin/env node

import * as commander from 'commander'
import { version } from '../version.js'

function firstCommand(): void {
  console.log(`Hello World from first`)
}

function secondCommand(): void {
  console.log(`Hello World from second`)
}

const program = new commander.Command()
program.version(version).command('first').action(firstCommand)

program.version(version).command('second').action(secondCommand)

program.parse(process.argv)

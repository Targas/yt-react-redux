import { compose, pipe } from 'lodash/fp'

let input = '     Javascript     '
let output = '<div>' + input.trim() + '</div>'

const trim = str => str.trim()
const wrap = type => str => `<${type}> ${str} </${type}>`
const lc = str => str.toLowerCase()

const transform = pipe(trim, lc, wrap('div'))
console.log(transform(input))

// const result = wrapInDiv(lc(trim(input)))
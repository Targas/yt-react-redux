import { compose, pipe } from 'lodash/fp'

let input = '     Javascript     '
let output = '<div>' + input.trim() + '</div>'

const trim = str => str.trim()
const wrap = str => `<div> ${str} </div>`
const lc = str => str.toLowerCase()

const transform = pipe(trim, lc, wrap)
transform(input)

// const result = wrap(lc(trim(input)))
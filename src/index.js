let input = '     Javascript     '
let output = '<div>' + input.trim() + '</div>'

const trim = str => str.trim()
const wrap = str => `<div> ${str} </div>`
const lc = str => str.toLowerCase()

const result = wrap(lc(trim(input)))
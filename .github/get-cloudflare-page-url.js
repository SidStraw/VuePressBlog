/* eslint-disable no-console */
const JSDOM = require('jsdom').JSDOM

const [html] = process.argv.slice(2)
const { document } = new JSDOM(html).window

console.log(document.querySelector('a').href)

/* eslint-disable no-console */
const JSDOM = require('jsdom').JSDOM

const [html] = process.argv.slice(2)
const { document } = new JSDOM(html).window

const linkElement = document.querySelector('a')
console.log(linkElement?.href ? linkElement.href.replace(/[/]$/, '') : '')

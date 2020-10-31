const fs = require('fs')
const YAML = require('yaml')

const defaultColor = { $accentColor: '#99B7A3', $secondaryColor: '#84969C' }
const fileStylus = fs.readFileSync('./.vuepress/styles/palette.styl', 'utf8')
const file = fs.readFileSync('./.vuepress/config.yml', 'utf8')
const { themeConfig } = YAML.parse(file)
const { color } = themeConfig
if (color && Object.keys(color).some(key => !!color[key])) {
  const stylusContent = Object.keys(color)
    .map(key => `${key} = ${color[key] || defaultColor[key]};`)
    .join('\n')
  const filteredStylus = fileStylus.replace(/^\$accentColor.*$|^\$secondaryColor.*$/gm, '').replace(/^\s$/gm, '')
  fs.writeFileSync('./.vuepress/styles/palette.styl', stylusContent + '\n' + filteredStylus)
}

console.log('palette.styl 更新完成')

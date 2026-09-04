const { spawnSync } = require('child_process')

const env = Object.assign({}, process.env)
const nodeMajor = parseInt(process.versions.node, 10)
const command = process.argv[2]
const allowedCommands = ['build', 'dev']

if (!allowedCommands.includes(command)) {
  console.error('Usage: yarn vuepress:compat <build|dev>')
  process.exit(1)
}

if (nodeMajor >= 17) {
  env.NODE_OPTIONS = env.NODE_OPTIONS ? `${env.NODE_OPTIONS} --openssl-legacy-provider` : '--openssl-legacy-provider'
}

let vuepressCliPath

try {
  vuepressCliPath = require.resolve('vuepress/cli.js', { paths: [process.cwd()] })
} catch (error) {
  console.error('Cannot find vuepress. Run `yarn install` first.')
  process.exit(1)
}

const result = spawnSync(process.execPath, [vuepressCliPath, command], {
  stdio: 'inherit',
  env,
})

process.exit(result.status === null ? 1 : result.status)

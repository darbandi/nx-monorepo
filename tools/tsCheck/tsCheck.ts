import { ExecutorContext } from '@nrwl/devkit'
import { detectPackageManager } from '@nrwl/tao/src/shared/package-manager'
import { spawn } from 'child_process'

const { log } = console

export default async function tscExecutor(_, context: ExecutorContext) {
  const packageManager = detectPackageManager()
  const packageManagerCmd =
    packageManager === 'pnpm' ? 'pnpx' : packageManager === 'yarn' ? 'yarn' : 'npx'
  //@ts-ignore
  const libRoot = context.workspace.projects[context.projectName].root

  const executionCode = await new Promise((resolve) => {
    const child = spawn(packageManagerCmd, ['tsc', '-p', libRoot, '--noEmit'], {
      stdio: 'inherit',
      shell: true, // Windows fix "Error: spawn npx ENOENT"
    })
    child.on('data', (args) => log(args))
    child.on('close', (code) => resolve(code))
  })

  return { success: executionCode === 0 }
}

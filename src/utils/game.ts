import { getConfig } from './configuration'

export async function getGameExecutable() {
  const config = await getConfig()

  if(!config.game_install_path) {
    return null
  }

  const pathArr = config.game_executable.replace(/\\/g, '/').split('/')
  return pathArr[pathArr.length - 1].replace('.exe', '')
}
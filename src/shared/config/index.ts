function getEnvVar (key: string): string | undefined {
  const value = process.env[key]
  if (typeof value === 'undefined') {
    console.warn(`Environment variable ${key} is not defined`)
  }
  return value
}

export const API_URL = getEnvVar('REACT_APP_API_URL')
export const NODE_ENV = getEnvVar('REACT_APP_NODE_ENV')

export const isDevEnv = NODE_ENV === 'development'
export const isProdEnv = NODE_ENV === 'production'

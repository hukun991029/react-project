const Env = import.meta.env.MODE || 'production'
const config = {
  development: {
    baseUrl: '',
    mockUrl: false
  },
  test: { baseUrl: '', mockUrl: '' },
  production: { baseUrl: '', mockUrl: '' }
}
export default {
  ...config[Env],
  mock: false,
  Env
}

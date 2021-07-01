const production = process.env.NODE_ENV === 'production'

function babelOptions() {
  return {
    plugins: production 
    ? ['transform-remove-console'] 
    : []
  }
}

module.exports = {
  mount: {
    public: '/', // 프로그램의 루트 경로로 동작하게 하겠다는 의미, 정적 파일 디렉토리
    src: '/_dist_', // src 내용을 해당 경로로 빌드하겠다는 의미, 
  },
  plugins: [
    '@snowpack/plugin-svelte',
    ['@snowpack/plugin-babel', {
      transformOptions: babelOptions()
    }],
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-optimize'
  ],
  alias: {
    '~': './src'
  },
  devOptions: {
    port: 8079
  }
}
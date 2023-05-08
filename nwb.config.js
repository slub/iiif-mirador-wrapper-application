module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ApplicationDemo',
      externals: {
        react: 'React'
      }
    }
  }
}

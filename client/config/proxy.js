module.exports = {
    proxyList: {
        '/api': {
            target: 'http://localhost:3001',
            changeOrigin: true
        }
    }
}
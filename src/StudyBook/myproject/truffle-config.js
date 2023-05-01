module.exports = {
  compilers: {
    solc: {
      version: "0.8.0", 
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        },
        evmVersion: "byzantium"
      }
    }
  },
  networks: {
      development: {
          host: '127.0.0.1',
          port: 8545,
          network_id: 15,
          gas: 4700000
      },
      ganache: {
          host: '127.0.0.1',
          port: 7545,
          network_id: '*'
      }
  }
}
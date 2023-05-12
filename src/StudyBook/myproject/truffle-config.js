require("dotenv").config();
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
        host: 'local.geth',
        port: 8545,
        network_id: 22,
        gas: 4700000,
        from: process.env.DEPLOY_ADDRESS,
      },
      ganache: {
          host: '127.0.0.1',
          port: 7545,
          network_id: '*'
      }
  }
}
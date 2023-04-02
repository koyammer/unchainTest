//truffle-config.js
module.exports = {
  networks: {
    development: {
      host: "local.ganache",
      port: 8545,
      network_id: "*",
    },
  },
  contracts_directory: "./contracts",
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },

  db: {
    enabled: false,
  },
};
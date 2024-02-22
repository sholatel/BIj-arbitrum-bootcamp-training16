require("dotenv").config()
require("@nomicfoundation/hardhat-toolbox");

const INFURA_API_KEY = process.env.INFURA_API_KEY
const ACCOUNT1_KEY = process.env.ACCOUNT_PRIVATE_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    arbitrumGoerli: {
      url:`https://arbitrum-goerli.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [ACCOUNT1_KEY]
    },

    arbitrumSepolia: {
      url:`https://arbitrum-sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [ACCOUNT1_KEY]
    }
  }
};

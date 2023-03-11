# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

```run 
npx hardhat run scripts/run.js
```


## run 
```
cd projectRoot/ETH-NFT-collection/epic-nfts
npx hardhat run scripts/run.js
```


## deploy 
```
cd projectRoot/ETH-NFT-collection/epic-nfts
npx hardhat node

## goerli へのデプロイ
npx hardhat run scripts/deploy.js --network goerli

## local へのデプロイ
npx hardhat run scripts/deploy.js --network localhost

```
##set param  hardhat.config.js 
YOUR_ALCHEMY_API_URL 
https://dashboard.alchemy.com/ のAPP > View Key > httpsの値

YOUR_PRIVATE_GOERLI_ACCOUNT_KEY 自分自信の秘密鍵


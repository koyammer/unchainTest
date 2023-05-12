docker exec -it unchaintest_geth_1 /bin/ash
cd /geth
## プライベートネットの起動
geth --datadir /geth/private_net/ init /geth/private_net/genesis.json


## gethの起動


geth --networkid "22" --nodiscover --datadir /geth/private_net \
--http --http.addr '0.0.0.0' --http.vhosts 'local.geth'  --http.port "8545" --http.corsdomain "*" \
--http.api "eth,net,web3,personal,miner" --miner.gaslimit "20000000" \
--mine --miner.etherbase '58efd6a479eb9aa7eb5624ef352fb095e597f7bb' \
--unlock '58efd6a479eb9aa7eb5624ef352fb095e597f7bb' --password '/geth/password_file.txt' \
--allow-insecure-unlock \
console 2>> /geth/private_net/error.log


## attach 
geth attach http://local.geth:8545

## attach 
web3.eth.blockNumber
web3.eth.accounts
web3.version.node

## アカウント作成
geth --datadir /geth/private_net/ account new

## 作成したアカウントのパスワードを以下に保存
touch /geth/password_file.txt

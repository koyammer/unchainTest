docker exec -it unchaintest_geth_1 /bin/ash
cd /root/.ethereum
## プライベートネットの起動
geth --datadir /geth/private_net/ init /geth/private_net/genesis.json


## gethの起動
geth --networkid "22" --nodiscover --datadir /geth/private_net \
--http --http.addr "localhost" --http.port "8545" --http.corsdomain "*" \
--http.api "eth,net,web3,personal" --miner.gaslimit "20000000" \
console 2>> /geth/private_net/error.log


## attach 
geth attach http://localhost:8545
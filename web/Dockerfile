FROM node:16.19.1-alpine

ENV APP_PATH="/app/ETH-dApp/my-wave-portal"
RUN mkdir -p ${APP_PATH} 

COPY  ./package/* $APP_PATH/
WORKDIR $APP_PATH

#RUN cd /home/workspace/ETH-dApp/my-wave-portal && npm install --save-dev 
RUN npm install --save-dev 
#RUN npx hardhat


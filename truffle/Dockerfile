FROM node:16.19.1-alpine

# Python3とその依存関係をインストール
RUN apk add --update --no-cache \
    python3 py3-pip \
    libc6-compat \
    build-base

# 必要に応じて、アプリケーションの依存関係をインストール
COPY requirements.txt /app/requirements.txt
WORKDIR /app
RUN pip3 install -r requirements.txt

RUN npm install -g truffle


ENV APP_PATH="/home/workspace"
WORKDIR $APP_PATH

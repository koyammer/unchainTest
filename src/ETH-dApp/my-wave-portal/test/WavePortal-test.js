const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("WavePortal", function () {
  it("Should return the new greeting once it's changed", async function () {
    // コントラクトのデプロイ
    const waveContractFactory = await ethers.getContractFactory("WavePortal");    
    const [owner, randomPerson] = await ethers.getSigners();

    /*
      * 0.1ETHをコントラクトに提供してデプロイする
      */
    let addErher = "0.1";
    const waveContract = await waveContractFactory.deploy({
        value: hre.ethers.utils.parseEther(addErher),
      });
    const wavePortal = await waveContract.deployed();
   
    /*
      *コントラクトの残高を取得し、結果を出力（0.1ETHであることを確認）
      */
    let contractBalance = await hre.ethers.provider.getBalance(
        waveContract.address
      );
    let confirmErher = "0.1";
    expect(confirmErher).to.equal(hre.ethers.utils.formatEther(contractBalance));  

    /*
      *TotalWaves数が0である事を確認
      */
    let startTotalWaves = 0 ;
    expect(await wavePortal.getTotalWaves()).to.equal(startTotalWaves);
    
    /*
      * wave関数の実行テスト
      */
    let waveMessage = "wave test ";
    const waveTxn = await waveContract.connect(randomPerson).wave(waveMessage);
    await waveTxn.wait();

    /*
      * waveの内容を確認
      */
    let waves =  await wavePortal.getAllWaves();
    expect(randomPerson.address).to.equal(waves[0].waver);  
    expect(waveMessage).to.equal(waves[0].message);  

    /*
      * wave関数の実行後のコントラクトの残高を取得し、結果を出力（0.009ETHであることを確認）
      */
    let endBalance = await hre.ethers.provider.getBalance(
        waveContract.address
    );
    let confirmEndErher = "0.0999";
    expect(confirmEndErher).to.equal(hre.ethers.utils.formatEther(endBalance));  

    /*
      *TotalWaves数が1である事を確認
      */
      let endTotalWaves = 1 ;
      expect(await wavePortal.getTotalWaves()).to.equal(endTotalWaves);

  });
});
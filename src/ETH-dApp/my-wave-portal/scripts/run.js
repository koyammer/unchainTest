// run.js
const main = async () => {
    const [owner, randomPerson1, randomPerson2]  = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    
    /*
      * 0.1ETHをコントラクトに提供してデプロイする
      */
    const waveContract = await waveContractFactory.deploy({
      value: hre.ethers.utils.parseEther("0.1"),
    });
    const wavePortal = await waveContract.deployed();
  
    /*
    * コントラクトの残高を取得し、結果を出力（0.1ETHであることを確認）
    */
    let contractBalance = await hre.ethers.provider.getBalance(
      waveContract.address
    );
    console.log(
      "Contract balance:",
      hre.ethers.utils.formatEther(contractBalance)
    );
    console.log("Contract deployed to:", wavePortal.address);
    console.log("Contract deployed by:", owner.address);
  
    let waveCount;
    waveCount = await waveContract.getTotalWaves();
  
    let waveMessage = "wave test b";
    let waveTxn = await waveContract.wave(waveMessage);
    await waveTxn.wait();
  
    /*
    * Waveした後のコントラクトの残高を取得し、結果を出力（0.0001ETH引かれていることを確認）
    */
    contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
    console.log(
      "Contract balance:",
      hre.ethers.utils.formatEther(contractBalance)
    );

    waveCount = await waveContract.getTotalWaves();
    console.log("waveCount:::::",waveCount);

    let waveData = await waveContract.getAllWaves();
    console.log("WAVE:::::",waveData);

  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();
// run.js
const main = async () => {
    const [owner, randomPerson1, randomPerson2]  = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    const wavePortal = await waveContract.deployed();
  
    console.log("Contract deployed to:", wavePortal.address);
    console.log("Contract deployed by:", owner.address);
  
    let waveCount;
    waveCount = await waveContract.getTotalWaves();
  
    let waveMessage = "wave test b";
    let waveTxn = await waveContract.wave(waveMessage);
    await waveTxn.wait();
  
    waveCount = await waveContract.getTotalWaves();

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
// run.js
const main = async () => {
    // コントラクトがコンパイルします
    // コントラクトを扱うために必要なファイルが `artifacts` ディレクトリの直下に生成されます。
    const nftContractFactory = await hre.ethers.getContractFactory("MyEpicNFT");
    // Hardhat がローカルの Ethereum ネットワークを作成します。
    const nftContract = await nftContractFactory.deploy();
    // コントラクトが Mint され、ローカルのブロックチェーンにデプロイされるまで待ちます。
    await nftContract.deployed();

    // makeAnEpicNFT 関数を呼び出す。NFT が Mint される。
    let txn = await nftContract.makeAnEpicNFT();
    // Minting が仮想マイナーにより、承認されるのを待つ。
    await txn.wait();
    // makeAnEpicNFT 関数をもう一度呼び出す。NFT がまた Mint される。
    txn = await nftContract.makeAnEpicNFT();
    // Minting が仮想マイナーにより、承認されるのを待つ。
    await txn.wait();


    nftContract.makeAn
    console.log("Contract deployed to:", nftContract.address);
  };
  // エラー処理を行っています。
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
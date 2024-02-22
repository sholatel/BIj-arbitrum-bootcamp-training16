const {
    loadFixture,
  } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
  const { expect } = require("chai");
  const { ethers } = require("hardhat");

  const DECIMAL = 8;
  const INITIAL_ANSWER = 100000000000

  describe ("Constructor", function (){
    it (" price feed parameter should be set correctly", async ()=>{
        const [deployer] = await ethers.getSigners();



        const mockAggregator = await ethers.getContractFactory("MockV3Aggregator")
        const deployment = await mockAggregator.deploy(DECIMAL, INITIAL_ANSWER)
        
        const deploymentAddress = await  deployment.getAddress();
      
        const priceFeed = await ethers.getContractFactory("PriceFeed");
       
        const feedDeployment = await priceFeed.deploy(deploymentAddress);

        
        const reserveFeedAddr  = await feedDeployment.getPriceFeed();

        expect(deploymentAddress).to.equal(reserveFeedAddr);
       
     
        expect()
    })
   })
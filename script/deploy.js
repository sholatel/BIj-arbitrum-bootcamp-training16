const { ethers } = require("hardhat");

const DECIMAL = 8;
const INITIAL_ANSWER = 100000000000
async function main() {

    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const mockAggregator = await ethers.getContractFactory("MockV3Aggregator")
    const deployment = await mockAggregator.deploy(DECIMAL, INITIAL_ANSWER)
    
    const deploymentAddress = await  deployment.getAddress();
    console.log("MockV3Interface contract  deployed at:", deploymentAddress );

    const priceFeed = await ethers.getContractFactory("PriceFeed");
    const feedDeployment = await priceFeed.deploy(deploymentAddress);

    const feedDeploymentAddress = await feedDeployment.getAddress();
    console.log("Price feed contract  deployed at:", feedDeploymentAddress)

}

main()
    .then(res => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    })
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract PriceFeed {
    AggregatorV3Interface internal reserveFeed;
    

    constructor(address priceFeedAddr) {
        reserveFeed = AggregatorV3Interface(
            priceFeedAddr
        );
    }

    //getPriceFeed
    function getPriceFeed () public view returns(AggregatorV3Interface) {
        return reserveFeed;
    }

}
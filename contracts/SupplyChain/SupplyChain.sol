// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

import '../Roles/Farmer.sol';
import '../Roles/Distributor.sol';
import '../Roles/Retailer.sol';
import '../Roles/Consumer.sol';

contract SupplyChain{

    enum State{
        withFarmer,
        withDistributor,
        withRetailer,
        withConsumer
    }

    struct Product{
        uint product_code;
        uint impurity;
        uint price;
        address payable farmer;
        address payable distributor;
        address payable retailer;
        address payable consumer;
        address payable Current_owner;
        uint state;
    }

}
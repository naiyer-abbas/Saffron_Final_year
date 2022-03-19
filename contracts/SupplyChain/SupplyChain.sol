// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

import '../Roles/Farmer.sol';
import '../Roles/Distributor.sol';
import '../Roles/Retailer.sol';
import '../Roles/Consumer.sol';

contract SupplyChain{

    enum State{
        withFarmer,
    }

    struct Product{
        uint product_code;
        uint impurity;
        uint price;

    }
}
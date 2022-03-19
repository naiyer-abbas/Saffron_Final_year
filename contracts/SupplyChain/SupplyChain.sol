// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

import '../Roles/Farmer.sol';
import '../Roles/Distributor.sol';
import '../Roles/Retailer.sol';
import '../Roles/Consumer.sol';

contract SupplyChain is Farmer, Distributor, Retailer, Consumer{

    enum State{
        Harvested,
        Dried,
        Graded,
        Packed,
        For_Sale
    }

    struct Product{
        uint id;
        uint safranal_content;
        uint price;
        address payable farmer;
        address payable distributor;
        address payable retailer;
        address payable consumer;
        address payable Current_owner;
        uint state;
        string grade;
    }

    mapping (uint => Product) product_list;
    mapping (uint => bool) existing;

    modifier harvested(uint _id){
        require(product_list[_id].state == 0, "Saffron is not harvested");
        _;
    }

     modifier exist(uint _id){
        require(existing[_id] == true, "Product doesn't exist");
        _;
    }

    modifier confirm_farmer(uint _id){
        require(product_list[_id].farmer == msg.sender, "Not authorized");
        _;
    }

    function harvest_product(uint _id) public  {
        require(isFarmer(msg.sender));
        Product memory product;
        product.id = _id;
        product.farmer = payable(msg.sender);
        product.Current_owner = product.farmer;
        product.distributor = payable(address(0));
        product.retailer = product.distributor;
        product.consumer = product.distributor;
        product.state = 0;
        product_list[_id] = product;
        existing[_id] = true;
    }

    function dry_product(uint _id) exist(_id) harvested(_id) confirm_farmer(_id) public view {
        require(product_list[_id].farmer == msg.sender, "Not authorized");
        require(product_list[_id].state == 0, "Saffron is not harvested");
        Product memory product = product_list[_id];
        product.state = 1;
    }

    function grading(uint _id) public{
        require(existing[_id], "P");
    }

}
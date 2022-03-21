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
        For_Sale,
        with_distributor,
        with_retailer,
        with_consumer
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
        State state;
        string grade;
    }

    mapping (uint => Product) product_list;
    mapping (uint => bool) existing;

    modifier harvested(uint _id){
        require(product_list[_id].state == State.Harvested, "Saffron is not harvested");
        _;
    }
    
    modifier dried(uint _id){
        require(product_list[_id].state == State.Dried, "Saffron is not dried");
        _;
    }
    
    modifier graded(uint _id){
        require(product_list[_id].state == State.Graded, "Saffron is not graded");
        _;
    }

    modifier packed(uint _id){
        require(product_list[_id].state == State.Packed, "Saffron is not packed");
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

     modifier forSale(uint _id){
        require(product_list[_id].state == State.For_Sale, "Not for sale");
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
        product.state = State.Harvested;
        product_list[_id] = product;
        existing[_id] = true;
    }

    function dry_product(uint _id) exist(_id) harvested(_id) confirm_farmer(_id) public{
        product_list[_id].state = State.Dried;
    }

    function grading(uint _id) exist(_id) dried(_id) confirm_farmer(_id) public{
        if(product_list[_id].safranal_content >= 80 && product_list[_id].safranal_content <=100)
        {
            product_list[_id].grade = "A";
            product_list[_id].price = 100;
        }
        else if(product_list[_id].safranal_content >= 60 && product_list[_id].safranal_content <80)
        {
            product_list[_id].grade = "B";
            product_list[_id].price = 80;
        }
        else if(product_list[_id].safranal_content >= 40 && product_list[_id].safranal_content <60)
        {
            product_list[_id].grade = "C";
            product_list[_id].price = 60;
        }
        else if(product_list[_id].safranal_content >= 20 && product_list[_id].safranal_content <40)
        {
            product_list[_id].grade = "D";
            product_list[_id].price = 40;
        }
        else
        {
            product_list[_id].grade = "E";
            product_list[_id].price = 20;
        }
        product_list[_id].state = State.Graded; 
    }
    
    function packing(uint _id) exist(_id) graded(_id) confirm_farmer(_id) public{
        product_list[_id].state = State.Packed;
    }
    
    function for_sale(uint _id) exist(_id) packed(_id) confirm_farmer(_id) public{
        product_list[_id].state = State.For_Sale;
    }

    function sell_to_distributor(uint _id) exist(_id) forSale(_id) confirm_farmer(_id) public{
        product_list[_id].state = State.with_distributor;
    }



}
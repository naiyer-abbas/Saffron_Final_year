// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract verify_random
{
    uint random_temp = 0;
    uint public random_num;
    struct person{
        uint id;
        uint safranal_cutoff;
    }
    function randMod(uint _modulus) public
    {
        random_temp++;
        random_num =  uint(keccak256(abi.encodePacked(block.timestamp,msg.sender,random_temp))) % _modulus;
        uint old_range = 100;  
        uint new_range = 20;
        random_num = (((random_num - 0) * new_range) / old_range) + 20;
    }
}
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract verify_random
{
    uint random_temp = 0;
    uint public random_num;
    struct person{
        uint id;
        uint rep_score;
    }

    person [] private v_members;

    uint global_id = 0;

    mapping (address => bool) private verifiers;


    function ver_register() public {
        require(verifiers[msg.sender] == false);
        verifiers[msg.sender] = true;
        person memory p;
        p.id = global_id ++;
        p.rep_score = 1;
        v_members.push(p);
    }

    function generate_random(uint num_max, uint num_min) public returns (uint)
    {
        random_temp++;
        random_num =  uint(keccak256(abi.encodePacked(block.timestamp,msg.sender,random_temp))) % 100;
        uint old_range = 100;  
        uint new_range = num_max - num_min;
        return (((random_num - 0) * new_range) / old_range) + num_min;
    }

    function select_5_people() internal
    {
        require(v_members.length >= 5);
        uint [] storage pred_arr;
        for(uint i = 0; i < v_members.length; i++)
        {
            
        }
    }

    
}
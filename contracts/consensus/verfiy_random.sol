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

    person [100] private people;

    constructor(){
        for(uint i = 0; i <= 79; i++)
        {
            people[i].safranal_cutoff = generate_good_person(); 
        }

        for(uint i = 80; i <= 100; i++)
        {
            people[i].safranal_cutoff = generate_bad_person(); 
        }   
    }

    function generate_good_person() public returns (uint) {
        return generate_random(40, 25);
    }

    function generate_bad_person() public returns (uint){
        return generate_random(5, 25);
    }

    function generate_random(uint num_max, uint num_min) public returns (uint)
    {
        random_temp++;
        random_num =  uint(keccak256(abi.encodePacked(block.timestamp,msg.sender,random_temp))) % 100;
        uint old_range = 100;  
        uint new_range = num_max - num_min;
        return (((random_num - 0) * new_range) / old_range) + num_min;
    }

    function verification(uint safranal_content) public returns (bool)
    {
        uint cnt_true;
        for(uint i = 0; i < 5; i++)
        {
            uint track = generate_random(0, 99);
            if(safranal_content >= people[track].safranal_cutoff)
            {
                cnt_true ++;
            }
        }
        return (cnt_true >= 3);
    }
}
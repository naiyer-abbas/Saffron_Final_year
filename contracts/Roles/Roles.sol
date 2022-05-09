// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

library Roles {
    struct Record {
        mapping(address => bool) record;
        mapping(address => uint) rep_score;
    }

    function is_member(Record storage rec, address _add)
        internal
        view
        returns (bool)
    {
        require(_add != address(0), "Address cannot be zero address");
        return rec.record[_add];
    }

    function add_member(Record storage rec, address _add) internal {
        require(_add != address(0), "Address cannot be zero");
        require(!is_member(rec, _add), "Already Registered");
        rec.record[_add] = true;
        rec.rep_score[_add] = 0;
    }

    function remove_member(Record storage rec, address _add) internal {
        require(_add != address(0), "Address cannot be zero");
        require(is_member(rec, _add), "Member does not exist");
        rec.record[_add] = false;
    }
}

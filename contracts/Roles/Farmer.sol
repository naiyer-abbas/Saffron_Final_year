// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

import "./Roles.sol";

contract Farmer{
    using Roles for Roles.Record;

    Roles.Record private farmers;

    function addFarmer(address _add) internal {
        Roles.add_member(farmers, _add);
    }

    function removeFarmer(address _add) internal {
        Roles.remove_member(farmers, _add);
    }

    function isFarmer(address _add) internal view returns (bool) {
        return Roles.is_member(farmers, _add);
    }
}
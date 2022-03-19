// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

import "./Roles.sol";

contract Retailer{
    using Roles for Roles.Record;

    Roles.Record private retailers;

    function addRetailer(address _add) internal {
        Roles.add_member(retailers, _add);
    }

    function removeRetailer(address _add) internal {
        Roles.remove_member(retailers, _add);
    }

    function isRetailer(address _add) internal view {
        Roles.is_member(retailers, _add);
    }
}
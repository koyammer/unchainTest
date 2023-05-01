// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Room.sol";

contract RoomFactory {

    function createRoom() external payable{
        //address payable sender = payable(msg.sender);
       Room newRoom = new Room();
//        newRoom.constructor();
    }
}


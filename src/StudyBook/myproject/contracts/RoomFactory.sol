// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/security/Pausable.sol";
import "./Room.sol";

contract RoomFactory is Pausable{

    event RoomCreated(
        address indexed _creator,
        address _room,
        uint256 _depositedValue
    );

    // ④
    function createRoom() external payable whenNotPaused {
        //Room newRoom = new Room();
        Room newRoom = (new Room){value: msg.value}();

       // Room インスタンスのアドレスを取得する
        address roomAddress = address(newRoom);        
        
        emit RoomCreated(msg.sender, roomAddress, msg.value);
    }

}


// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./Activatable.sol";

contract Room is Pausable,Ownable,Activatable {

    // ②
    mapping(uint256 => bool) public rewardSent;

    // address public owner;
    // constructor(address _owner) payable {
    //     owner = _owner;
    // }
    constructor() payable{
        address payable owner = payable(_msgSender());
        _transferOwnership(owner);
    }


    // ③
    event Deposited(
        address indexed _depositor,
        uint256 _depositedValue
    );

    // ④
    event RewardSent(
        address indexed _dest,
        uint256 _reward,
        uint256 _id
    );

    // ⑤
    event RefundedToOwner(
        address indexed _dest,
        uint256 _refundedBalance
    );

    function deposit() external payable whenNotPaused {
        require(msg.value > 0); 
        emit Deposited(msg.sender, msg.value);
    }


    function sendReward(uint256 _reward, address _dest, uint256 _id) external onlyOwner {

        require(!rewardSent[_id]); // ⑨
        require(_reward > 0); // ⑩
        require(address(this).balance >= _reward); // ⑪
        require(_dest != address(0)); // ⑫
        require(_dest != owner()); // ⑬

        rewardSent[_id] = true; // ⑨

        address payable destPayable = payable(_dest);
        destPayable.transfer(_reward);

        emit RewardSent(_dest, _reward, _id);
    }

    function refundToOwner() external whenNotActive onlyOwner {
        require(address(this).balance > 0); 

        uint256 refundedBalance = address(this).balance;
        address payable thisPayable = payable(address(this));
        thisPayable.transfer(refundedBalance);

        emit RefundedToOwner(msg.sender, refundedBalance);

    }
}


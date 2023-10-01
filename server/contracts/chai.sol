// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

contract chai {
    // Define a struct called "Memo" to store memo information.
    struct Memo {
        string name; // The name of the sender.
        string message; // The message content.
        uint timestamp; // Timestamp when the memo was created.
        address from; // Ethereum address of the sender.
    }

    // An array to store Memo struct instances.
    Memo[] memos;
    address payable owner;

    // Constructor function to initialize the contract.
    constructor() {
        // Set the contract creator as the owner.
        owner = payable(msg.sender);
    }

    // Function to buy "chai" with an attached payment.
    function buyChai(
        string calldata name,
        string calldata message
    ) external payable {
        // Check that the sent value is greater than 0 MATIC.
        require(msg.value > 0, "Please pay more than 0 MATIC");

        // Transfer the received MATIC to the contract owner.
        owner.transfer(msg.value);

        // Create a new Memo and add it to the memos array.
        memos.push(Memo(name, message, block.timestamp, msg.sender));
    }

    // Function to retrieve all memos stored in the contract.
    function getMemos() public view returns (Memo[] memory) {
        return memos;
    }
}

// Contract Address: 0xd3106b87463e98ADD38E6070Ca1e80B7D80ab9e9
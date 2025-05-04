// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.0;

// This file is part of a project related to blockchain and contains the implementation
// of the ERC-721 standard for non-fungible tokens (NFTs). The ERC-721 standard defines
// a set of rules for creating and managing unique digital assets on the Ethereum blockchain.
//
// Ensure that the implementation adheres to the ERC-721 specification, including functions
// for transferring tokens, querying ownership, and handling approvals.
abstract contract ERC721 {
  event Transfer(address indexed _from, address indexed _to, uint256 indexed _tokenId);
  event Approval(address indexed _owner, address indexed _approved, uint256 indexed _tokenId);

  function balanceOf(address _owner) external view virtual returns (uint256);
  function ownerOf(uint256 _tokenId) external view virtual returns (address);
  function transferFrom(address _from, address _to, uint256 _tokenId) external payable virtual;
  function approve(address _approved, uint256 _tokenId) external payable virtual;
}
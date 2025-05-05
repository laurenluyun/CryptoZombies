var cryptoZombiesABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_approved",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event",
    "signature": "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "zombieId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "dna",
        "type": "uint256"
      }
    ],
    "name": "NewZombie",
    "type": "event",
    "signature": "0x88f026aacbbecc90c18411df4b1185fd8d9be2470f1962f192bf84a27d0704b7"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event",
    "signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event",
    "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_approved",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true,
    "signature": "0x095ea7b3"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_zombieId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_targetId",
        "type": "uint256"
      }
    ],
    "name": "attack",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xe1fa7638"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true,
    "signature": "0x70a08231"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_zombieId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_newDna",
        "type": "uint256"
      }
    ],
    "name": "changeDna",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x5faf2880"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_zombieId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_newName",
        "type": "string"
      }
    ],
    "name": "changeName",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xc39cbef1"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      }
    ],
    "name": "createRandomZombie",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x7bff0a01"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_zombieId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_kittyId",
        "type": "uint256"
      }
    ],
    "name": "feedOnKitty",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x17a7f4cc"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_owner",
        "type": "address"
      }
    ],
    "name": "getZombiesByOwner",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true,
    "signature": "0x4412e104"
  },
  {
    "inputs": [],
    "name": "isOwner",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true,
    "signature": "0x8f32d59b"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_zombieId",
        "type": "uint256"
      }
    ],
    "name": "levelUp",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true,
    "signature": "0x0ce90ec2"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true,
    "signature": "0x8da5cb5b"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      }
    ],
    "name": "ownerOf",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true,
    "signature": "0x6352211e"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x715018a6"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_address",
        "type": "address"
      }
    ],
    "name": "setKittyContractAddress",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x5f4623f1"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_fee",
        "type": "uint256"
      }
    ],
    "name": "setLevelUpFee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xccf670f8"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function",
    "payable": true,
    "signature": "0x23b872dd"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xf2fde38b"
  },
  {
    "inputs": [],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x3ccfd60b"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "zombieToOwner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true,
    "signature": "0x528b7b8f"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "zombies",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "dna",
        "type": "uint256"
      },
      {
        "internalType": "uint32",
        "name": "level",
        "type": "uint32"
      },
      {
        "internalType": "uint32",
        "name": "readyTime",
        "type": "uint32"
      },
      {
        "internalType": "uint16",
        "name": "winCount",
        "type": "uint16"
      },
      {
        "internalType": "uint16",
        "name": "lossCount",
        "type": "uint16"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true,
    "signature": "0x2052465e"
  }
];

var cryptoZombiesAddress = "0xE619B59bFceF3f7aa610d4B7b3A77f3d7ecaE190";
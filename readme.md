# CryptoZombies DApp

A blockchain-based zombie game built on Ethereum where players can create, battle, level up, and trade zombies as NFTs.

This project is based on the [CryptoZombies.io](https://cryptozombies.io/) tutorial, extended with frontend web pages.

## Overview

CryptoZombies is a decentralized application (DApp) that demonstrates the power of Ethereum smart contracts and NFTs (Non-Fungible Tokens). Players can:

- Create unique zombies with randomized DNA
- Feed their zombies on CryptoKitties to create new zombies
- Battle other players' zombies
- Level up their zombies
- Change zombie names and DNA (at higher levels)
- Transfer zombies to other players

The project implements the ERC-721 standard for non-fungible tokens, making each zombie a tradable digital asset.

## Project Structure

```
CryptoZombies/
├── contracts/              # Solidity smart contracts
│   ├── CryptoZombies.sol   # Main contract
|   ├── Migrations.sol      # Migrations
│   ├── erc721.sol          # ERC-721 interface
│   ├── ownable.sol         # Ownership control
│   ├── safemath.sol        # Safe math operations
│   ├── zombieattack.sol    # Zombie battle functionality
│   ├── zombiefactory.sol   # Zombie creation logic
│   ├── zombiefeeding.sol   # Feeding on CryptoKitties
│   ├── zombiehelper.sol    # Helper functions for leveling up
│   └── zombieownership.sol # NFT ownership implementation
├── migrations/             # Truffle migration scripts
├── test/                   # Test files
│   ├── CryptoZombies.js    # Main test file
│   └── helpers/            # Test helpers
│       ├── time.js         # Time manipulation for testing
│       └── utils.js        # Utility functions for testing
├── frontend/               # Frontend DApp files
│   ├── index.html          # Main user interface
│   ├── user.html           # User profile page
│   ├── zombie.html         # Single zombie view
│   ├── admin.html          # Admin panel
│   └── style.css           # Styling
└── README.md               # This file
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v12.0.0 or higher)
- [Truffle](https://www.trufflesuite.com/truffle) (`npm install -g truffle`)
- [Ganache](https://www.trufflesuite.com/ganache) for local blockchain testing
- [MetaMask](https://metamask.io/) or another Web3 wallet

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/cryptozombies.git
   cd cryptozombies
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install test dependencies:
   ```bash
   npm install --save-dev chai
   ```

## Deployment

### Local Development

1. Start a local blockchain:
   ```bash
   # Using Ganache CLI
   npx ganache-cli
   
   # OR using Truffle's built-in blockchain
   truffle develop
   ```

2. Deploy the contracts:
   ```bash
   # From the terminal
   truffle migrate --reset
   
   # OR from the Truffle console
   migrate --reset
   ```

3. Generate the ABI file:
   ```bash
   truffle exec generate-abi.js
   ```

4. Start a local web server to serve the frontend:
   ```bash
   # Using Python's built-in server
   cd frontend
   python -m http.server
   
   # OR using Node.js
   cd frontend
   npx serve
   ```

5. Open your browser and navigate to http://localhost:8000 (Python) or http://localhost:3000 (Node.js)

### Testnet Deployment

To deploy to a testnet like Rinkeby or Loom testnet:

1. Configure your private key or mnemonic in `.env` file (never commit this file):
   ```
   PRIVATE_KEY=your_private_key_without_0x_prefix
   MNEMONIC=your twelve word mnemonic phrase here
   INFURA_API_KEY=your_infura_api_key
   ```

2. Deploy to the testnet:
   ```bash
   # For Rinkeby
   truffle migrate --network rinkeby
   
   # For Loom testnet
   truffle migrate --network loom_testnet
   ```

3. Generate the ABI file for the selected network:
   ```bash
   truffle exec generate-abi.js --network rinkeby
   ```

## Using the DApp

1. Connect your wallet (MetaMask) to the correct network
2. Create your first zombie by entering a name
3. Feed your zombie on CryptoKitties to create more zombies
4. Battle other players' zombies to level up
5. Once you reach level 2, you can rename your zombies
6. At level 20, you can change your zombie's DNA

### Administrative Functions

If you're the contract owner, you can access the admin panel to:
- Set the CryptoKitties contract address
- Change the level-up fee
- Withdraw funds from the contract

## Running Tests

To run the tests:

```bash
# Start your local blockchain first, then:
truffle test
```

## Acknowledgments

- Based on the [CryptoZombies.io](https://cryptozombies.io/) tutorial from Loom Network
- Uses the ERC-721 standard for non-fungible tokens

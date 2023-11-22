# React-Components

This repository contains template code for react components and smart contract utilities that can be re-used in other projects

## Overview
This repository provides a set of React components designed for integrating Web3 functionality into web applications. It includes components for connecting to a wallet using the Mumbai testnet, invoking smart contract functions, and converting Ethereum to USD using a smart contract.

## Components

### WalletConnect
A React component for connecting to a user's wallet using the Mumbai Testnet and displaying the connected wallet's address and balance in MATIC.

**Usage:**
```jsx
import WalletConnect from './path/to/WalletConnect';

<WalletConnect />
```

### Web3JS Initialization and Contract Function Integration
A template component for initializing Web3JS and integrating smart contract functions. It checks for a wallet connection before executing any contract function.

**Usage:**
Replace FUNC_NAME, CONTRACT_ABI, CONTRACT_ADDRESS, CONTRACT_FUNCTION, FUNCTION SUCCESS MESSAGE, and RETURN COMPONENT with your specific contract details and functionality.
```jsx
import { FUNC_NAME } from './path/to/FUNC_NAME';

<FUNC_NAME walletConnected={/* state indicating wallet connection */} />
```

### Ethereum to USD Price Converter (Smart Contract)
A Solidity library that interacts with Chainlink to fetch the latest Ethereum price and convert a given ETH amount to its equivalent in USD.

**Usage:**
Deploy this library as part of your smart contract system. Use getPrice() to fetch the latest ETH price and getConversionRate(ethAmount) to convert a given ETH amount to USD.
```sol
import { PriceConvertor } from './path/to/PriceConvertor.sol';
```

## Dependencies
- React
- Web3.js
- Chainlink Contracts

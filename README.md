# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

# Usage

## Compile
```
user@~/Udacity-Blockchain/Blockchain-Capstone/eth-contracts/test $ truffle compile
```

## Unit Test
```
user@~/Udacity-Blockchain/Blockchain-Capstone/eth-contracts/test $ truffle test ./TestERC721Mintable.js 

user@~/Udacity-Blockchain/Blockchain-Capstone/eth-contracts/test $ truffle test ./TestSquareVerifier.js

user@~/Udacity-Blockchain/Blockchain-Capstone/eth-contracts/test $ truffle test ./TestSolnSquareVerifier.js 
```

## Deployed on Rinkeby
```
2_deploy_contracts.js
=====================

   Replacing 'SquareVerifier'
   --------------------------
   > transaction hash:    0x13a9bf7253668ab81557aa13bb5e0a299571f491ef067ac2ec110d0acaa36720
   > Blocks: 1            Seconds: 12
   > contract address:    0xC69B24b3e739288BE198b1FAAFeFb72c1cE22d43
   > block number:        5504157
   > block timestamp:     1574701523
   > account:             0x1f27760D5c097aB2e4f59EC5125C10EB44c97820
   > balance:             7.225959828
   > gas used:            1408222
   > gas price:           21 gwei
   > value sent:          0 ETH
   > total cost:          0.029572662 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0x9f7bc9f2af5bd16e0441f69925ddc6b1305b2cc78b89750e4c3964526e5cfd4a
   > Blocks: 0            Seconds: 8
   > contract address:    0x658b353eA3c85E69c42aaf11025e046e6f394191
   > block number:        5504158
   > block timestamp:     1574701538
   > account:             0x1f27760D5c097aB2e4f59EC5125C10EB44c97820
   > balance:             7.145031414
   > gas used:            3853734
   > gas price:           21 gwei
   > value sent:          0 ETH
   > total cost:          0.080928414 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:         0.110501076 ETH
```

## Tokens
[Minted 11 tokens](Screenshots/tokens.png)

[Etherscan](https://rinkeby.etherscan.io/address/0x1f27760d5c097ab2e4f59ec5125c10eb44c97820)

## Openseas
[Listed tokens](https://rinkeby.opensea.io/accounts/0x1f27760d5c097ab2e4f59ec5125c10eb44c97820)

[Sold token](https://rinkeby.opensea.io/assets/0x658b353ea3c85e69c42aaf11025e046e6f394191/10?)

[Sold token Etherscan](https://rinkeby.etherscan.io/tx/0xb2f9811701c8cfadbdf03870d3ab70942867df497f90b07a4dc1d4eb99f9d06d)


# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)

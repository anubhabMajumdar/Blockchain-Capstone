// var OwnableContract = artifacts.require('Ownable');
// contract('OwnableContract', accounts => {

//     const account_one = accounts[0];
//     const account_two = accounts[1];
//     const account_three = accounts[2];

//     describe('check ownable properties', function () {
//         beforeEach(async function () { 
//             this.contract = await OwnableContract.new({from: account_one});
//         })

//         it('getOwner should work', async function () { 
//             curOwner = await this.contract.getOwner.call();
//             assert.equal(curOwner, account_one, 'Error: Owner not matched.')
//         })

//         it('getOwner should not match account two', async function () { 
//             curOwner = await this.contract.getOwner.call();
//             check = curOwner==account_two
//             assert.equal(check, false, 'Error: Owner matched.')
//         })

//         it('transferOwner should work', async function () { 
//             try {
//                 await this.contract.transferOwnership(account_two, {from: account_one});
//             } catch (error) {
                
//             }
//             curOwner = await this.contract.getOwner.call();
//             assert.equal(curOwner, account_two, 'Error: Owner not matched.')
//         })

//         it('transferOwner should fail I', async function () { 
//             try {
//                 await this.contract.transferOwnership(account_three, {from: account_two});
//             } catch (error) {
            
//             }
//             curOwner = await this.contract.getOwner.call();
//             check = curOwner == account_three;
//             assert.equal(curOwner, account_one, 'Error: Owner should not change.')
//             assert.equal(check, false, 'Error: Owner should not change.')
//         })

//         it('transferOwner should fail II', async function () { 
//             check = false;
//             try {
//                 await this.contract.transferOwnership(account_one, {from: account_one});
//             } catch (error) {
//                 check = true;
//             }
//             curOwner = await this.contract.getOwner.call();
//             assert.equal(curOwner, account_one, 'Error: Owner should not change.')
//             assert.equal(check, true, 'Error: Owner should not change.')
//         })

//     });
// })


// var PausableContract = artifacts.require('Pausable');
// contract('PausableContract', accounts => {

//     const account_one = accounts[0];
//     const account_two = accounts[1];
//     const account_three = accounts[2];

//     describe('check Pausable properties', function () {
//         beforeEach(async function () { 
//             this.contract = await PausableContract.new({from: account_one});
//         })
//         it('paused is false', async function () { 
//             val = await this.contract.getPaused.call();
//             assert.equal(val, false, "_paused should have been false")
//         })

//         it('setPaused should work', async function () { 
//             try {
//                 await this.contract.setPaused(true);
//             } catch (error) {
                
//             }
//             val = await this.contract.getPaused.call();
//             assert.equal(val, true, "_paused should have been true")
//         })
//     })
// })


var ERC721MintableComplete = artifacts.require('CustomERC721Token');
contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    const account_three = accounts[2];

    const token1 = 1;
    const token2 = 2;
    const token3 = 3;

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});

            // TODO: mint multiple tokens
            try {
                this.contract.mint(account_one, token1, "");
                this.contract.mint(account_one, token2, "");
                this.contract.mint(account_two, token3, "");
            } catch (error) {
                console.log(error);
            }
        })

        it('check owners', async function () { 
            let owner1 = await this.contract.ownerOf.call(token1);
            assert(owner1, account_one, "Address should be account one.");

            let owner2 = await this.contract.ownerOf.call(token2);
            assert(owner2, account_one, "Address should be account two.");

            let owner3 = await this.contract.ownerOf.call(token3);
            assert(owner3, account_two, "Address should be account three.");
        })

        it('should return total supply', async function () { 
            let totalSupplyRes = await this.contract.totalSupply.call();
            assert(totalSupplyRes, 3, "Total supply should be three.");
        })

        it('should get token balance', async function () { 
            let balance1 = await this.contract.balanceOf(account_one);
            assert(balance1, 2, "Account 1 should have balance 2.");

            let balance2 = await this.contract.balanceOf(account_two);
            assert(balance2, 1, "Account 2 should have balance 1.");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            let tokenURI = await this.contract.tokenURI.call(token1);
            assert(tokenURI, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1", "Wrong tokenURI.");

            tokenURI = await this.contract.tokenURI.call(token2);
            assert(tokenURI, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/2", "Wrong tokenURI.");
            
            tokenURI = await this.contract.tokenURI.call(token3);
            assert(tokenURI, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/3", "Wrong tokenURI.");
        })

        it('should transfer token from one owner to another', async function () { 
            await this.contract.transferFrom(account_one, account_three, token1);
            let owner = await this.contract.ownerOf.call(token1);
            assert(owner, account_three, "Address should be account three.");

            await this.contract.transferFrom(account_three, account_one, token1, {from: account_three});
            owner = await this.contract.ownerOf.call(token1);
            assert(owner, account_one, "Address should be account one.");
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            let flag = false;
            try {
                await this.contract.mint(account_one, token1, "", {from: account_two});
            } catch (error) {
                flag = true;
            }
            assert(flag, true, "Minting operation should fail");
        })

        it('should return contract owner', async function () { 
            let contractOwner = await this.contract.getOwner.call();
            assert(contractOwner, account_one, "Wrong contract owner");
        })
    });
})
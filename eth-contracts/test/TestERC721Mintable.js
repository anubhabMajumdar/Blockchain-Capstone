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


// var ERC721MintableComplete = artifacts.require('ERC721Enumerable');
// contract('TestERC721Mintable', accounts => {

//     const account_one = accounts[0];
//     const account_two = accounts[1];

//     describe('match erc721 spec', function () {
//         beforeEach(async function () { 
//             this.contract = await ERC721MintableComplete.new({from: account_one});

//             // TODO: mint multiple tokens
//         })

//         it('should return total supply', async function () { 
            
//         })

//         it('should get token balance', async function () { 
            
//         })

//         // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
//         it('should return token uri', async function () { 
            
//         })

//         it('should transfer token from one owner to another', async function () { 
            
//         })
//     });

//     describe('have ownership properties', function () {
//         beforeEach(async function () { 
//             this.contract = await ERC721MintableComplete.new({from: account_one});
//         })

//         it('should fail when minting when address is not contract owner', async function () { 
            
//         })

//         it('should return contract owner', async function () { 
            
//         })

//     });
// })
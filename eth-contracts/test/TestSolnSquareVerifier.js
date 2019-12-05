var fs = require('fs');
var config = JSON.parse(fs.readFileSync(__dirname + '/config.json', 'utf8'));

var obj = JSON.parse(fs.readFileSync(__dirname + '/proof.json', 'utf8'));
var a = obj['proof']['a'];
var a_p = obj['proof']['a_p'];
var b = obj['proof']['b'];
var b_p = obj['proof']['b_p'];
var c = obj['proof']['c'];
var c_p = obj['proof']['c_p'];
var h = obj['proof']['h'];
var k = obj['proof']['k'];
var input = obj['inputs'];

var obj2 = JSON.parse(fs.readFileSync(__dirname + '/proof_error.json', 'utf8'));
var a2 = obj2['proof']['a'];
var a_p2 = obj2['proof']['a_p'];
var b2 = obj2['proof']['b'];
var b_p2 = obj2['proof']['b_p'];
var c2 = obj2['proof']['c'];
var c_p2 = obj2['proof']['c_p'];
var h2 = obj2['proof']['h'];
var k2 = obj2['proof']['k'];
var input2 = obj2['inputs'];

var SolnSquareVerifierContract = artifacts.require('SolnSquareVerifier');

// Test if a new solution can be added for contract - SolnSquareVerifier

// Test if an ERC721 token can be minted for contract - SolnSquareVerifier

contract('TestSolnSquareVerifier', accounts => {

    const account_one = accounts[0];
    const token = 1;
    const token2 = 2;

    describe('Test verification', function () {
        beforeEach(async function () { 
            this.contract = await SolnSquareVerifierContract.new(config.localhost.verifierAddress);
        })

        it('No solution present on initialize', async function () { 
            assert(this.contract.getSolutionsLength.call(), 0, "Initial length should be zero");
        })

        it('ERC721 token can be minted', async function () { 
            flag = false
            try {
                flag = await this.contract.mint(a, a_p, b, b_p, c, c_p, h, k, input, token, account_one);
            } catch (error) {
                console.log(error);
            }
            assert(flag, true, "Token should be minted.");
        })

        it('ERC721 token cannot be minted with wrong proof', async function () { 
            var flag = false;
            try {
                await this.contract.mint(a2, a_p2, b2, b_p2, c2, c_p2, h2, k2, input2, token, account_one);
            } catch (error) {
                flag = true;
            }
            assert(flag, true, "Token should not be minted.");
        })


        it('Same solution cannot be used', async function () { 
            flag = true
            try {
                await this.contract.mint(a, a_p, b, b_p, c, c_p, h, k, input, token, account_one);
                await this.contract.mint(a, a_p, b, b_p, c, c_p, h, k, input, token2, account_one);
            } catch (error) {
                flag = false
            }
            assert(!flag, "Token should not be minted with same solution.");
        })
    });
})
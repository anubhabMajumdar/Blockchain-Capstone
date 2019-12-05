pragma solidity >=0.4.21 <0.6.0;
pragma experimental ABIEncoderV2;

import "./ERC721Mintable.sol";
import "./SquareVerifier.sol";

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
contract VerifierContract {
    SquareVerifier squareVerifier;

    constructor(address verifierContractAddress) public {
        squareVerifier = SquareVerifier(verifierContractAddress);
    }

    function verifyTx(
            uint[2] memory a,
            uint[2] memory a_p,
            uint[2][2] memory b,
            uint[2] memory b_p,
            uint[2] memory c,
            uint[2] memory c_p,
            uint[2] memory h,
            uint[2] memory k,
            uint[2] memory input
        ) public returns (bool r) {
            return squareVerifier.verifyTx(a, a_p, b, b_p, c, c_p, h, k, input);
        }
}

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is CustomERC721Token {

    VerifierContract verifierContract;

    constructor(address verifierContractAddress) public {
        verifierContract = VerifierContract(verifierContractAddress);
    }

    // TODO define a solutions struct that can hold an index & an address
    struct solution {
        // Proof.
        uint[2] a;
        uint[2] a_p;
        uint[2][2] b;
        uint[2] b_p;
        uint[2] c;
        uint[2] c_p;
        uint[2] h;
        uint[2] k;
        uint[2] input;
        // Token.
        uint256 index;
        address add;
    }

    // TODO define an array of the above struct
    solution[] solutions;

    // TODO define a mapping to store unique solutions submitted
    mapping(bytes32 => uint256) mapSolutions;


    // TODO Create an event to emit when a solution is added
    event SolutionAdded(uint256 index, address add);


    // TODO Create a function to add the solutions to the array and emit the event
    function addSolution(solution memory sol) public {
        solutions.push(sol);
        emit SolutionAdded(sol.index, sol.add);
    }

    function getSolutionsLength() public returns (uint256) {
        return (solutions.length);
    }

    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSuplly
    function mint(
        uint[2] memory a,
        uint[2] memory a_p,
        uint[2][2] memory b,
        uint[2] memory b_p,
        uint[2] memory c,
        uint[2] memory c_p,
        uint[2] memory h,
        uint[2] memory k,
        uint[2] memory input,
        uint256 tokenId,
        address to
    ) public returns (bool) {
        bytes32 key = keccak256(abi.encode(a, a_p, b, b_p, c, c_p, h, k, input));
        require(mapSolutions[key]==0, "Solution not unique.");
        require(verifierContract.verifyTx(a, a_p, b, b_p, c, c_p, h, k, input), "Cannot verify solution.");
        require(super.mint(to, tokenId, "ABC"), "Cannot mint token.");

        solution memory sol = solution(a, a_p, b, b_p, c, c_p, h, k, input, tokenId, to);
        addSolution(sol);
        mapSolutions[key] = 1;
        return true;
    }
}
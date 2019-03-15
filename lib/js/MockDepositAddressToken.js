"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var MockDepositAddressToken = exports.MockDepositAddressToken = 
{
  "contractName": "MockDepositAddressToken",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "bank",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "token",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_token",
          "type": "address"
        },
        {
          "name": "_bank",
          "type": "address"
        },
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "destianation",
          "type": "address"
        }
      ],
      "name": "Withdraw",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "tokenAmount",
          "type": "uint256"
        },
        {
          "name": "destination",
          "type": "address"
        }
      ],
      "name": "withdraw",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "clearBalance",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getBalance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5060405160608061053483398101604090815281516020830151919092015160018054600160a060020a03928316600160a060020a0319918216179091556000805493831693821693909317909255600280549190931691161790556104b98061007b6000396000f3006080604052600436106100765763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041662f714ce811461007b57806312065fe0146100a157806376cdb03b146100c857806384d9a4e6146100f95780638da5cb5b14610111578063fc0c546a14610126575b600080fd5b34801561008757600080fd5b5061009f600435600160a060020a036024351661013b565b005b3480156100ad57600080fd5b506100b6610277565b60408051918252519081900360200190f35b3480156100d457600080fd5b506100dd61030d565b60408051600160a060020a039092168252519081900360200190f35b34801561010557600080fd5b5061009f60043561031c565b34801561011d57600080fd5b506100dd61046f565b34801561013257600080fd5b506100dd61047e565b600154600160a060020a0316331461015257600080fd5b60008054600254604080517f9e281a98000000000000000000000000000000000000000000000000000000008152600160a060020a0392831660048201526024810187905290519190921692639e281a98926044808201939182900301818387803b1580156101c057600080fd5b505af11580156101d4573d6000803e3d6000fd5b5050600254604080517fa9059cbb000000000000000000000000000000000000000000000000000000008152600160a060020a03868116600483015260248201889052915191909216935063a9059cbb925060448083019260209291908290030181600087803b15801561024757600080fd5b505af115801561025b573d6000803e3d6000fd5b505050506040513d602081101561027157600080fd5b50505050565b600254604080517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529051600092600160a060020a0316916370a0823191602480830192602092919082900301818787803b1580156102dc57600080fd5b505af11580156102f0573d6000803e3d6000fd5b505050506040513d602081101561030657600080fd5b5051905090565b600054600160a060020a031681565b600154600160a060020a0316331461033357600080fd5b600254604080517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290518392600160a060020a0316916370a082319160248083019260209291908290030181600087803b15801561039857600080fd5b505af11580156103ac573d6000803e3d6000fd5b505050506040513d60208110156103c257600080fd5b50511061046c5760025460008054604080517fa9059cbb000000000000000000000000000000000000000000000000000000008152600160a060020a039283166004820152602481018690529051919093169263a9059cbb9260448083019360209390929083900390910190829087803b15801561043f57600080fd5b505af1158015610453573d6000803e3d6000fd5b505050506040513d602081101561046957600080fd5b50505b50565b600154600160a060020a031681565b600254600160a060020a0316815600a165627a7a7230582038a9eff1ce3dc591e50d809e46bff841c16f3eed639493190d3a9eb37385e2330029",
  "deployedBytecode": "0x6080604052600436106100765763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041662f714ce811461007b57806312065fe0146100a157806376cdb03b146100c857806384d9a4e6146100f95780638da5cb5b14610111578063fc0c546a14610126575b600080fd5b34801561008757600080fd5b5061009f600435600160a060020a036024351661013b565b005b3480156100ad57600080fd5b506100b6610277565b60408051918252519081900360200190f35b3480156100d457600080fd5b506100dd61030d565b60408051600160a060020a039092168252519081900360200190f35b34801561010557600080fd5b5061009f60043561031c565b34801561011d57600080fd5b506100dd61046f565b34801561013257600080fd5b506100dd61047e565b600154600160a060020a0316331461015257600080fd5b60008054600254604080517f9e281a98000000000000000000000000000000000000000000000000000000008152600160a060020a0392831660048201526024810187905290519190921692639e281a98926044808201939182900301818387803b1580156101c057600080fd5b505af11580156101d4573d6000803e3d6000fd5b5050600254604080517fa9059cbb000000000000000000000000000000000000000000000000000000008152600160a060020a03868116600483015260248201889052915191909216935063a9059cbb925060448083019260209291908290030181600087803b15801561024757600080fd5b505af115801561025b573d6000803e3d6000fd5b505050506040513d602081101561027157600080fd5b50505050565b600254604080517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529051600092600160a060020a0316916370a0823191602480830192602092919082900301818787803b1580156102dc57600080fd5b505af11580156102f0573d6000803e3d6000fd5b505050506040513d602081101561030657600080fd5b5051905090565b600054600160a060020a031681565b600154600160a060020a0316331461033357600080fd5b600254604080517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290518392600160a060020a0316916370a082319160248083019260209291908290030181600087803b15801561039857600080fd5b505af11580156103ac573d6000803e3d6000fd5b505050506040513d60208110156103c257600080fd5b50511061046c5760025460008054604080517fa9059cbb000000000000000000000000000000000000000000000000000000008152600160a060020a039283166004820152602481018690529051919093169263a9059cbb9260448083019360209390929083900390910190829087803b15801561043f57600080fd5b505af1158015610453573d6000803e3d6000fd5b505050506040513d602081101561046957600080fd5b50505b50565b600154600160a060020a031681565b600254600160a060020a0316815600a165627a7a7230582038a9eff1ce3dc591e50d809e46bff841c16f3eed639493190d3a9eb37385e2330029",
  "sourceMap": "300:706:55:-;;;386:157;8:9:-1;5:2;;;30:1;27;20:12;5:2;386:157:55;;;;;;;;;;;;;;;;;;;;;;;;;609:5:53;:14;;-1:-1:-1;;;;;609:14:53;;;-1:-1:-1;;;;;;609:14:53;;;;;;;:5;633:12;;;;;;;;;;;;;;;522:5:55;:14;;;;;;;;;;;300:706;;;;;;",
  "deployedSourceMap": "300:706:55:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;549:179;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;549:179:55;;;;;-1:-1:-1;;;;;549:179:55;;;;;910:94;;8:9:-1;5:2;;;30:1;27;20:12;5:2;910:94:55;;;;;;;;;;;;;;;;;;;;326:27:53;;8:9:-1;5:2;;;30:1;27;20:12;5:2;326:27:53;;;;;;;;-1:-1:-1;;;;;326:27:53;;;;;;;;;;;;;;734:170:55;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;734:170:55;;;;;359:20:53;;8:9:-1;5:2;;;30:1;27;20:12;5:2;359:20:53;;;;361:18:55;;8:9:-1;5:2;;;30:1;27;20:12;5:2;361:18:55;;;;549:179;716:5:53;;-1:-1:-1;;;;;716:5:53;702:10;:19;694:28;;;;;;633:4:55;;;652:5;;633:38;;;;;;-1:-1:-1;;;;;652:5:55;;;633:38;;;;;;;;;;;;:4;;;;;:18;;:38;;;;;;;;;;;:4;;:38;;;5:2:-1;;;;30:1;27;20:12;5:2;633:38:55;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;-1:-1;;681:5:55;;:40;;;;;;-1:-1:-1;;;;;681:40:55;;;;;;;;;;;;;;;:5;;;;;-1:-1:-1;681:14:55;;-1:-1:-1;681:40:55;;;;;;;;;;;;;;-1:-1:-1;681:5:55;:40;;;5:2:-1;;;;30:1;27;20:12;5:2;681:40:55;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;681:40:55;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;549:179:55:o;910:94::-;976:5;;:21;;;;;;992:4;976:21;;;;;;-1:-1:-1;;;;;;;976:5:55;;:15;;:21;;;;;;;;;;;;;;-1:-1:-1;976:5:55;:21;;;5:2:-1;;;;30:1;27;20:12;5:2;976:21:55;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;976:21:55;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;976:21:55;;-1:-1:-1;910:94:55;:::o;326:27:53:-;;;-1:-1:-1;;;;;326:27:53;;:::o;734:170:55:-;716:5:53;;-1:-1:-1;;;;;716:5:53;702:10;:19;694:28;;;;;;812:5:55;;:21;;;;;;828:4;812:21;;;;;;837:6;;-1:-1:-1;;;;;812:5:55;;:15;;:21;;;;;;;;;;;;;;-1:-1:-1;812:5:55;:21;;;5:2:-1;;;;30:1;27;20:12;5:2;812:21:55;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;812:21:55;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;812:21:55;:31;808:90;;859:5;;;874:4;;859:28;;;;;;-1:-1:-1;;;;;874:4:55;;;859:28;;;;;;;;;;;;:5;;;;;:14;;:28;;;;;;;;;;;;;;;;;;;:5;:28;;;5:2:-1;;;;30:1;27;20:12;5:2;859:28:55;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;859:28:55;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;808:90:55;734:170;:::o;359:20:53:-;;;-1:-1:-1;;;;;359:20:53;;:::o;361:18:55:-;;;-1:-1:-1;;;;;361:18:55;;:::o",
  "source": "pragma solidity ^0.4.24;\n\nimport \"./MockCentralBank.sol\";\nimport \"./MockDepositAddress.sol\";\n\n/// @title Mock Deposit Address for token\n/// @author Ilan Doron\n/// @dev a dummy contract that simulates a deposit address of a token on a specific exchange. allows reserve manager to deposit and withdraw\ncontract MockDepositAddressToken is MockDepositAddress{\n\n    ERC20 public token;\n\n    constructor(ERC20 _token, MockCentralBank _bank, address _owner)\n        MockDepositAddress(_bank, _owner)\n        public\n    {\n        token = _token;\n    }\n\n    function withdraw(uint tokenAmount, address destination) public onlyOwner {\n        bank.withdrawToken(token, tokenAmount);\n        token.transfer(destination, tokenAmount);\n    }\n\n    function clearBalance(uint amount) public\n        onlyOwner\n    {\n        if (token.balanceOf(this) >= amount) {\n            token.transfer(bank, amount);\n        }\n    }\n\n    function getBalance() public view returns (uint) {\n        return token.balanceOf(this);\n    }\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/MockDepositAddressToken.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/MockDepositAddressToken.sol",
    "exportedSymbols": {
      "MockDepositAddressToken": [
        15993
      ]
    },
    "id": 15994,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 15910,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:55"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/MockCentralBank.sol",
        "file": "./MockCentralBank.sol",
        "id": 15911,
        "nodeType": "ImportDirective",
        "scope": 15994,
        "sourceUnit": 15771,
        "src": "26:31:55",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/MockDepositAddress.sol",
        "file": "./MockDepositAddress.sol",
        "id": 15912,
        "nodeType": "ImportDirective",
        "scope": 15994,
        "sourceUnit": 15830,
        "src": "58:34:55",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 15913,
              "name": "MockDepositAddress",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 15829,
              "src": "336:18:55",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_MockDepositAddress_$15829",
                "typeString": "contract MockDepositAddress"
              }
            },
            "id": 15914,
            "nodeType": "InheritanceSpecifier",
            "src": "336:18:55"
          }
        ],
        "contractDependencies": [
          15829
        ],
        "contractKind": "contract",
        "documentation": "@title Mock Deposit Address for token\n @author Ilan Doron\n @dev a dummy contract that simulates a deposit address of a token on a specific exchange. allows reserve manager to deposit and withdraw",
        "fullyImplemented": true,
        "id": 15993,
        "linearizedBaseContracts": [
          15993,
          15829
        ],
        "name": "MockDepositAddressToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 15916,
            "name": "token",
            "nodeType": "VariableDeclaration",
            "scope": 15993,
            "src": "361:18:55",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_ERC20_$9533",
              "typeString": "contract ERC20"
            },
            "typeName": {
              "contractScope": null,
              "id": 15915,
              "name": "ERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9533,
              "src": "361:5:55",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20_$9533",
                "typeString": "contract ERC20"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 15933,
              "nodeType": "Block",
              "src": "512:31:55",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 15931,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 15929,
                      "name": "token",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 15916,
                      "src": "522:5:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ERC20_$9533",
                        "typeString": "contract ERC20"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 15930,
                      "name": "_token",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 15918,
                      "src": "530:6:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ERC20_$9533",
                        "typeString": "contract ERC20"
                      }
                    },
                    "src": "522:14:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9533",
                      "typeString": "contract ERC20"
                    }
                  },
                  "id": 15932,
                  "nodeType": "ExpressionStatement",
                  "src": "522:14:55"
                }
              ]
            },
            "documentation": null,
            "id": 15934,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 15925,
                    "name": "_bank",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 15920,
                    "src": "478:5:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_MockCentralBank_$15770",
                      "typeString": "contract MockCentralBank"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 15926,
                    "name": "_owner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 15922,
                    "src": "485:6:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 15927,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 15924,
                  "name": "MockDepositAddress",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 15829,
                  "src": "459:18:55",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_MockDepositAddress_$15829_$",
                    "typeString": "type(contract MockDepositAddress)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "459:33:55"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15923,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15918,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 15934,
                  "src": "398:12:55",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 15917,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "398:5:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9533",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 15920,
                  "name": "_bank",
                  "nodeType": "VariableDeclaration",
                  "scope": 15934,
                  "src": "412:21:55",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_MockCentralBank_$15770",
                    "typeString": "contract MockCentralBank"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 15919,
                    "name": "MockCentralBank",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 15770,
                    "src": "412:15:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_MockCentralBank_$15770",
                      "typeString": "contract MockCentralBank"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 15922,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 15934,
                  "src": "435:14:55",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 15921,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "435:7:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "397:53:55"
            },
            "payable": false,
            "returnParameters": {
              "id": 15928,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "512:0:55"
            },
            "scope": 15993,
            "src": "386:157:55",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 15957,
              "nodeType": "Block",
              "src": "623:105:55",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 15946,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15916,
                        "src": "652:5:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$9533",
                          "typeString": "contract ERC20"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 15947,
                        "name": "tokenAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15936,
                        "src": "659:11:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_ERC20_$9533",
                          "typeString": "contract ERC20"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 15943,
                        "name": "bank",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15776,
                        "src": "633:4:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_MockCentralBank_$15770",
                          "typeString": "contract MockCentralBank"
                        }
                      },
                      "id": 15945,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "withdrawToken",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 15744,
                      "src": "633:18:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_contract$_ERC20_$9533_$_t_uint256_$returns$__$",
                        "typeString": "function (contract ERC20,uint256) external"
                      }
                    },
                    "id": 15948,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "633:38:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 15949,
                  "nodeType": "ExpressionStatement",
                  "src": "633:38:55"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 15953,
                        "name": "destination",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15938,
                        "src": "696:11:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 15954,
                        "name": "tokenAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15936,
                        "src": "709:11:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 15950,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15916,
                        "src": "681:5:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$9533",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 15952,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9496,
                      "src": "681:14:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 15955,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "681:40:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 15956,
                  "nodeType": "ExpressionStatement",
                  "src": "681:40:55"
                }
              ]
            },
            "documentation": null,
            "id": 15958,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 15941,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 15940,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 15805,
                  "src": "613:9:55",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "613:9:55"
              }
            ],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15939,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15936,
                  "name": "tokenAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 15958,
                  "src": "567:16:55",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 15935,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "567:4:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 15938,
                  "name": "destination",
                  "nodeType": "VariableDeclaration",
                  "scope": 15958,
                  "src": "585:19:55",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 15937,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "585:7:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "566:39:55"
            },
            "payable": false,
            "returnParameters": {
              "id": 15942,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "623:0:55"
            },
            "scope": 15993,
            "src": "549:179:55",
            "stateMutability": "nonpayable",
            "superFunction": 15818,
            "visibility": "public"
          },
          {
            "body": {
              "id": 15980,
              "nodeType": "Block",
              "src": "798:106:55",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 15970,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 15967,
                          "name": "this",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 35116,
                          "src": "828:4:55",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_MockDepositAddressToken_$15993",
                            "typeString": "contract MockDepositAddressToken"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_MockDepositAddressToken_$15993",
                            "typeString": "contract MockDepositAddressToken"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 15965,
                          "name": "token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 15916,
                          "src": "812:5:55",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_ERC20_$9533",
                            "typeString": "contract ERC20"
                          }
                        },
                        "id": 15966,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balanceOf",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9478,
                        "src": "812:15:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                          "typeString": "function (address) view external returns (uint256)"
                        }
                      },
                      "id": 15968,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "812:21:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 15969,
                      "name": "amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 15960,
                      "src": "837:6:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "812:31:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 15979,
                  "nodeType": "IfStatement",
                  "src": "808:90:55",
                  "trueBody": {
                    "id": 15978,
                    "nodeType": "Block",
                    "src": "845:53:55",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 15974,
                              "name": "bank",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 15776,
                              "src": "874:4:55",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_MockCentralBank_$15770",
                                "typeString": "contract MockCentralBank"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 15975,
                              "name": "amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 15960,
                              "src": "880:6:55",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_MockCentralBank_$15770",
                                "typeString": "contract MockCentralBank"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 15971,
                              "name": "token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 15916,
                              "src": "859:5:55",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC20_$9533",
                                "typeString": "contract ERC20"
                              }
                            },
                            "id": 15973,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "transfer",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 9496,
                            "src": "859:14:55",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                              "typeString": "function (address,uint256) external returns (bool)"
                            }
                          },
                          "id": 15976,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "859:28:55",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 15977,
                        "nodeType": "ExpressionStatement",
                        "src": "859:28:55"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 15981,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 15963,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 15962,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 15805,
                  "src": "784:9:55",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "784:9:55"
              }
            ],
            "name": "clearBalance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15961,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15960,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 15981,
                  "src": "756:11:55",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 15959,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "756:4:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "755:13:55"
            },
            "payable": false,
            "returnParameters": {
              "id": 15964,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "798:0:55"
            },
            "scope": 15993,
            "src": "734:170:55",
            "stateMutability": "nonpayable",
            "superFunction": 15823,
            "visibility": "public"
          },
          {
            "body": {
              "id": 15991,
              "nodeType": "Block",
              "src": "959:45:55",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 15988,
                        "name": "this",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 35116,
                        "src": "992:4:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_MockDepositAddressToken_$15993",
                          "typeString": "contract MockDepositAddressToken"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_MockDepositAddressToken_$15993",
                          "typeString": "contract MockDepositAddressToken"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 15986,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15916,
                        "src": "976:5:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$9533",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 15987,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "balanceOf",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9478,
                      "src": "976:15:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) view external returns (uint256)"
                      }
                    },
                    "id": 15989,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "976:21:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 15985,
                  "id": 15990,
                  "nodeType": "Return",
                  "src": "969:28:55"
                }
              ]
            },
            "documentation": null,
            "id": 15992,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getBalance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15982,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "929:2:55"
            },
            "payable": false,
            "returnParameters": {
              "id": 15985,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15984,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 15992,
                  "src": "953:4:55",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 15983,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "953:4:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "952:6:55"
            },
            "scope": 15993,
            "src": "910:94:55",
            "stateMutability": "view",
            "superFunction": 15828,
            "visibility": "public"
          }
        ],
        "scope": 15994,
        "src": "300:706:55"
      }
    ],
    "src": "0:1007:55"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/MockDepositAddressToken.sol",
    "exportedSymbols": {
      "MockDepositAddressToken": [
        15993
      ]
    },
    "id": 15994,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 15910,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:55"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/MockCentralBank.sol",
        "file": "./MockCentralBank.sol",
        "id": 15911,
        "nodeType": "ImportDirective",
        "scope": 15994,
        "sourceUnit": 15771,
        "src": "26:31:55",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/MockDepositAddress.sol",
        "file": "./MockDepositAddress.sol",
        "id": 15912,
        "nodeType": "ImportDirective",
        "scope": 15994,
        "sourceUnit": 15830,
        "src": "58:34:55",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 15913,
              "name": "MockDepositAddress",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 15829,
              "src": "336:18:55",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_MockDepositAddress_$15829",
                "typeString": "contract MockDepositAddress"
              }
            },
            "id": 15914,
            "nodeType": "InheritanceSpecifier",
            "src": "336:18:55"
          }
        ],
        "contractDependencies": [
          15829
        ],
        "contractKind": "contract",
        "documentation": "@title Mock Deposit Address for token\n @author Ilan Doron\n @dev a dummy contract that simulates a deposit address of a token on a specific exchange. allows reserve manager to deposit and withdraw",
        "fullyImplemented": true,
        "id": 15993,
        "linearizedBaseContracts": [
          15993,
          15829
        ],
        "name": "MockDepositAddressToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 15916,
            "name": "token",
            "nodeType": "VariableDeclaration",
            "scope": 15993,
            "src": "361:18:55",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_ERC20_$9533",
              "typeString": "contract ERC20"
            },
            "typeName": {
              "contractScope": null,
              "id": 15915,
              "name": "ERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9533,
              "src": "361:5:55",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20_$9533",
                "typeString": "contract ERC20"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 15933,
              "nodeType": "Block",
              "src": "512:31:55",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 15931,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 15929,
                      "name": "token",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 15916,
                      "src": "522:5:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ERC20_$9533",
                        "typeString": "contract ERC20"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 15930,
                      "name": "_token",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 15918,
                      "src": "530:6:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ERC20_$9533",
                        "typeString": "contract ERC20"
                      }
                    },
                    "src": "522:14:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9533",
                      "typeString": "contract ERC20"
                    }
                  },
                  "id": 15932,
                  "nodeType": "ExpressionStatement",
                  "src": "522:14:55"
                }
              ]
            },
            "documentation": null,
            "id": 15934,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 15925,
                    "name": "_bank",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 15920,
                    "src": "478:5:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_MockCentralBank_$15770",
                      "typeString": "contract MockCentralBank"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 15926,
                    "name": "_owner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 15922,
                    "src": "485:6:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 15927,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 15924,
                  "name": "MockDepositAddress",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 15829,
                  "src": "459:18:55",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_MockDepositAddress_$15829_$",
                    "typeString": "type(contract MockDepositAddress)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "459:33:55"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15923,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15918,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 15934,
                  "src": "398:12:55",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 15917,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "398:5:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9533",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 15920,
                  "name": "_bank",
                  "nodeType": "VariableDeclaration",
                  "scope": 15934,
                  "src": "412:21:55",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_MockCentralBank_$15770",
                    "typeString": "contract MockCentralBank"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 15919,
                    "name": "MockCentralBank",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 15770,
                    "src": "412:15:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_MockCentralBank_$15770",
                      "typeString": "contract MockCentralBank"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 15922,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 15934,
                  "src": "435:14:55",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 15921,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "435:7:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "397:53:55"
            },
            "payable": false,
            "returnParameters": {
              "id": 15928,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "512:0:55"
            },
            "scope": 15993,
            "src": "386:157:55",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 15957,
              "nodeType": "Block",
              "src": "623:105:55",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 15946,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15916,
                        "src": "652:5:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$9533",
                          "typeString": "contract ERC20"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 15947,
                        "name": "tokenAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15936,
                        "src": "659:11:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_ERC20_$9533",
                          "typeString": "contract ERC20"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 15943,
                        "name": "bank",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15776,
                        "src": "633:4:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_MockCentralBank_$15770",
                          "typeString": "contract MockCentralBank"
                        }
                      },
                      "id": 15945,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "withdrawToken",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 15744,
                      "src": "633:18:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_contract$_ERC20_$9533_$_t_uint256_$returns$__$",
                        "typeString": "function (contract ERC20,uint256) external"
                      }
                    },
                    "id": 15948,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "633:38:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 15949,
                  "nodeType": "ExpressionStatement",
                  "src": "633:38:55"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 15953,
                        "name": "destination",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15938,
                        "src": "696:11:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 15954,
                        "name": "tokenAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15936,
                        "src": "709:11:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 15950,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15916,
                        "src": "681:5:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$9533",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 15952,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9496,
                      "src": "681:14:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) external returns (bool)"
                      }
                    },
                    "id": 15955,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "681:40:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 15956,
                  "nodeType": "ExpressionStatement",
                  "src": "681:40:55"
                }
              ]
            },
            "documentation": null,
            "id": 15958,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 15941,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 15940,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 15805,
                  "src": "613:9:55",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "613:9:55"
              }
            ],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15939,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15936,
                  "name": "tokenAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 15958,
                  "src": "567:16:55",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 15935,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "567:4:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 15938,
                  "name": "destination",
                  "nodeType": "VariableDeclaration",
                  "scope": 15958,
                  "src": "585:19:55",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 15937,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "585:7:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "566:39:55"
            },
            "payable": false,
            "returnParameters": {
              "id": 15942,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "623:0:55"
            },
            "scope": 15993,
            "src": "549:179:55",
            "stateMutability": "nonpayable",
            "superFunction": 15818,
            "visibility": "public"
          },
          {
            "body": {
              "id": 15980,
              "nodeType": "Block",
              "src": "798:106:55",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 15970,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 15967,
                          "name": "this",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 35116,
                          "src": "828:4:55",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_MockDepositAddressToken_$15993",
                            "typeString": "contract MockDepositAddressToken"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_MockDepositAddressToken_$15993",
                            "typeString": "contract MockDepositAddressToken"
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 15965,
                          "name": "token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 15916,
                          "src": "812:5:55",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_ERC20_$9533",
                            "typeString": "contract ERC20"
                          }
                        },
                        "id": 15966,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balanceOf",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9478,
                        "src": "812:15:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                          "typeString": "function (address) view external returns (uint256)"
                        }
                      },
                      "id": 15968,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "812:21:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 15969,
                      "name": "amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 15960,
                      "src": "837:6:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "812:31:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 15979,
                  "nodeType": "IfStatement",
                  "src": "808:90:55",
                  "trueBody": {
                    "id": 15978,
                    "nodeType": "Block",
                    "src": "845:53:55",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 15974,
                              "name": "bank",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 15776,
                              "src": "874:4:55",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_MockCentralBank_$15770",
                                "typeString": "contract MockCentralBank"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 15975,
                              "name": "amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 15960,
                              "src": "880:6:55",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_MockCentralBank_$15770",
                                "typeString": "contract MockCentralBank"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 15971,
                              "name": "token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 15916,
                              "src": "859:5:55",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC20_$9533",
                                "typeString": "contract ERC20"
                              }
                            },
                            "id": 15973,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "transfer",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 9496,
                            "src": "859:14:55",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                              "typeString": "function (address,uint256) external returns (bool)"
                            }
                          },
                          "id": 15976,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "859:28:55",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 15977,
                        "nodeType": "ExpressionStatement",
                        "src": "859:28:55"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 15981,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 15963,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 15962,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 15805,
                  "src": "784:9:55",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "784:9:55"
              }
            ],
            "name": "clearBalance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15961,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15960,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 15981,
                  "src": "756:11:55",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 15959,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "756:4:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "755:13:55"
            },
            "payable": false,
            "returnParameters": {
              "id": 15964,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "798:0:55"
            },
            "scope": 15993,
            "src": "734:170:55",
            "stateMutability": "nonpayable",
            "superFunction": 15823,
            "visibility": "public"
          },
          {
            "body": {
              "id": 15991,
              "nodeType": "Block",
              "src": "959:45:55",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 15988,
                        "name": "this",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 35116,
                        "src": "992:4:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_MockDepositAddressToken_$15993",
                          "typeString": "contract MockDepositAddressToken"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_MockDepositAddressToken_$15993",
                          "typeString": "contract MockDepositAddressToken"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 15986,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15916,
                        "src": "976:5:55",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$9533",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 15987,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "balanceOf",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9478,
                      "src": "976:15:55",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) view external returns (uint256)"
                      }
                    },
                    "id": 15989,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "976:21:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 15985,
                  "id": 15990,
                  "nodeType": "Return",
                  "src": "969:28:55"
                }
              ]
            },
            "documentation": null,
            "id": 15992,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getBalance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15982,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "929:2:55"
            },
            "payable": false,
            "returnParameters": {
              "id": 15985,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15984,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 15992,
                  "src": "953:4:55",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 15983,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "953:4:55",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "952:6:55"
            },
            "scope": 15993,
            "src": "910:94:55",
            "stateMutability": "view",
            "superFunction": 15828,
            "visibility": "public"
          }
        ],
        "scope": 15994,
        "src": "300:706:55"
      }
    ],
    "src": "0:1007:55"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.2",
  "updatedAt": "2019-03-14T21:46:28.645Z",
  "devdoc": {
    "author": "Ilan Doron",
    "methods": {},
    "title": "Mock Deposit Address for token"
  },
  "userdoc": {
    "methods": {}
  }
}
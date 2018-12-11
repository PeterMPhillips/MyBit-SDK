"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var ContractFeatures = exports.ContractFeatures = 
{
  "contractName": "ContractFeatures",
  "abi": [
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_address",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_features",
          "type": "uint256"
        }
      ],
      "name": "FeaturesAddition",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_address",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_features",
          "type": "uint256"
        }
      ],
      "name": "FeaturesRemoval",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_contract",
          "type": "address"
        },
        {
          "name": "_features",
          "type": "uint256"
        }
      ],
      "name": "isSupported",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_features",
          "type": "uint256"
        },
        {
          "name": "_enable",
          "type": "bool"
        }
      ],
      "name": "enableFeatures",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b506101d8806100206000396000f30060806040526004361061004b5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416632c7077c08114610050578063a5fbf2871461006f575b600080fd5b34801561005c57600080fd5b5061006d60043560243515156100b4565b005b34801561007b57600080fd5b506100a073ffffffffffffffffffffffffffffffffffffffff6004351660243561017e565b604080519115158252519081900360200190f35b801561011b576100c4338361017e565b156100ce5761017a565b3360008181526020818152604091829020805486179055815185815291517f461f0180592d0fa11ece082775c5b037a96f6a5418f3f23d4ee4ee063b5c1aac9281900390910190a261017a565b610125338361017e565b15156101305761017a565b336000818152602081815260409182902080548619169055815185815291517f903f96a6f8c316bb88b30f8b641bd2aa80b6e92732bab4d1accf30e1d6eba89c9281900390910190a25b5050565b73ffffffffffffffffffffffffffffffffffffffff91909116600090815260208190526040902054811614905600a165627a7a72305820024d70f6d901c85c38f5f552e4d1c774ca0ccb0dd6fd7add0eef8b5d95edf4e40029",
  "deployedBytecode": "0x60806040526004361061004b5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416632c7077c08114610050578063a5fbf2871461006f575b600080fd5b34801561005c57600080fd5b5061006d60043560243515156100b4565b005b34801561007b57600080fd5b506100a073ffffffffffffffffffffffffffffffffffffffff6004351660243561017e565b604080519115158252519081900360200190f35b801561011b576100c4338361017e565b156100ce5761017a565b3360008181526020818152604091829020805486179055815185815291517f461f0180592d0fa11ece082775c5b037a96f6a5418f3f23d4ee4ee063b5c1aac9281900390910190a261017a565b610125338361017e565b15156101305761017a565b336000818152602081815260409182902080548619169055815185815291517f903f96a6f8c316bb88b30f8b641bd2aa80b6e92732bab4d1accf30e1d6eba89c9281900390910190a25b5050565b73ffffffffffffffffffffffffffffffffffffffff91909116600090815260208190526040902054811614905600a165627a7a72305820024d70f6d901c85c38f5f552e4d1c774ca0ccb0dd6fd7add0eef8b5d95edf4e40029",
  "sourceMap": "705:1516:32:-;;;1000:28;8:9:-1;5:2;;;30:1;27;20:12;5:2;1000:28:32;705:1516;;;;;;",
  "deployedSourceMap": "705:1516:32:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;1723:496;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1723:496:32;;;;;;;;;;;1334:160;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1334:160:32;;;;;;;;;;;;;;;;;;;;;;;;;;;1723:496;1801:7;1797:416;;;1828:34;1840:10;1852:9;1828:11;:34::i;:::-;1824:63;;;1880:7;;1824:63;1914:10;1901:12;:24;;;;;;;;;;;;:37;;;;;;1958:39;;;;;;;;;;;;;;;;;1797:416;;;2033:34;2045:10;2057:9;2033:11;:34::i;:::-;2032:35;2028:64;;;2085:7;;2028:64;2119:10;2106:12;:24;;;;;;;;;;;;:38;;2134:10;;2106:38;;;2164;;;;;;;;;;;;;;;;;1797:416;1723:496;;:::o;1334:160::-;1438:23;;;;;1414:4;1438:23;;;;;;;;;;;:35;;1437:50;;1334:160::o",
  "source": "pragma solidity ^0.4.24;\nimport './interfaces/IContractFeatures.sol';\n\n/**\n    Contract Features\n\n    Generic contract that allows every contract on the blockchain to define which features it supports.\n    Other contracts can query this contract to find out whether a given contract on the\n    blockchain supports a certain feature.\n    Each contract type can define its own list of feature flags.\n    Features can be only enabled/disabled by the contract they are defined for.\n\n    Features should be defined by each contract type as bit flags, e.g. -\n    uint256 public constant FEATURE1 = 1 << 0;\n    uint256 public constant FEATURE2 = 1 << 1;\n    uint256 public constant FEATURE3 = 1 << 2;\n    ...\n*/\ncontract ContractFeatures is IContractFeatures {\n    mapping (address => uint256) private featureFlags;\n\n    event FeaturesAddition(address indexed _address, uint256 _features);\n    event FeaturesRemoval(address indexed _address, uint256 _features);\n\n    /**\n        @dev constructor\n    */\n    constructor() public {\n    }\n\n    /**\n        @dev returns true if a given contract supports the given feature(s), false if not\n\n        @param _contract    contract address to check support for\n        @param _features    feature(s) to check for\n\n        @return true if the contract supports the feature(s), false if not\n    */\n    function isSupported(address _contract, uint256 _features) public view returns (bool) {\n        return (featureFlags[_contract] & _features) == _features;\n    }\n\n    /**\n        @dev allows a contract to enable/disable certain feature(s)\n\n        @param _features    feature(s) to enable/disable\n        @param _enable      true to enable the feature(s), false to disabled them\n    */\n    function enableFeatures(uint256 _features, bool _enable) public {\n        if (_enable) {\n            if (isSupported(msg.sender, _features))\n                return;\n\n            featureFlags[msg.sender] |= _features;\n\n            emit FeaturesAddition(msg.sender, _features);\n        } else {\n            if (!isSupported(msg.sender, _features))\n                return;\n\n            featureFlags[msg.sender] &= ~_features;\n\n            emit FeaturesRemoval(msg.sender, _features);\n        }\n    }\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/ContractFeatures.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/ContractFeatures.sol",
    "exportedSymbols": {
      "ContractFeatures": [
        9052
      ]
    },
    "id": 9053,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8955,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:32"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/IContractFeatures.sol",
        "file": "./interfaces/IContractFeatures.sol",
        "id": 8956,
        "nodeType": "ImportDirective",
        "scope": 9053,
        "sourceUnit": 9854,
        "src": "25:44:32",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 8957,
              "name": "IContractFeatures",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9853,
              "src": "734:17:32",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IContractFeatures_$9853",
                "typeString": "contract IContractFeatures"
              }
            },
            "id": 8958,
            "nodeType": "InheritanceSpecifier",
            "src": "734:17:32"
          }
        ],
        "contractDependencies": [
          9853
        ],
        "contractKind": "contract",
        "documentation": "Contract Features\nGeneric contract that allows every contract on the blockchain to define which features it supports.\nOther contracts can query this contract to find out whether a given contract on the\nblockchain supports a certain feature.\nEach contract type can define its own list of feature flags.\nFeatures can be only enabled/disabled by the contract they are defined for.\nFeatures should be defined by each contract type as bit flags, e.g. -\nuint256 public constant FEATURE1 = 1 << 0;\nuint256 public constant FEATURE2 = 1 << 1;\nuint256 public constant FEATURE3 = 1 << 2;\n...",
        "fullyImplemented": true,
        "id": 9052,
        "linearizedBaseContracts": [
          9052,
          9853
        ],
        "name": "ContractFeatures",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 8962,
            "name": "featureFlags",
            "nodeType": "VariableDeclaration",
            "scope": 9052,
            "src": "758:49:32",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 8961,
              "keyType": {
                "id": 8959,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "767:7:32",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "758:28:32",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 8960,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "778:7:32",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 8968,
            "name": "FeaturesAddition",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 8967,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8964,
                  "indexed": true,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 8968,
                  "src": "837:24:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8963,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "837:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8966,
                  "indexed": false,
                  "name": "_features",
                  "nodeType": "VariableDeclaration",
                  "scope": 8968,
                  "src": "863:17:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8965,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "863:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "836:45:32"
            },
            "src": "814:68:32"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 8974,
            "name": "FeaturesRemoval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 8973,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8970,
                  "indexed": true,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 8974,
                  "src": "909:24:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8969,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "909:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8972,
                  "indexed": false,
                  "name": "_features",
                  "nodeType": "VariableDeclaration",
                  "scope": 8974,
                  "src": "935:17:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8971,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "935:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "908:45:32"
            },
            "src": "887:67:32"
          },
          {
            "body": {
              "id": 8977,
              "nodeType": "Block",
              "src": "1021:7:32",
              "statements": []
            },
            "documentation": "@dev constructor",
            "id": 8978,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8975,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1011:2:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 8976,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1021:0:32"
            },
            "scope": 9052,
            "src": "1000:28:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8996,
              "nodeType": "Block",
              "src": "1420:74:32",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 8994,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 8991,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 8987,
                              "name": "featureFlags",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8962,
                              "src": "1438:12:32",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 8989,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 8988,
                              "name": "_contract",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8980,
                              "src": "1451:9:32",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1438:23:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 8990,
                            "name": "_features",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8982,
                            "src": "1464:9:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1438:35:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 8992,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "1437:37:32",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 8993,
                      "name": "_features",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8982,
                      "src": "1478:9:32",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1437:50:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 8986,
                  "id": 8995,
                  "nodeType": "Return",
                  "src": "1430:57:32"
                }
              ]
            },
            "documentation": "@dev returns true if a given contract supports the given feature(s), false if not\n@param _contract    contract address to check support for\n@param _features    feature(s) to check for\n@return true if the contract supports the feature(s), false if not",
            "id": 8997,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isSupported",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8983,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8980,
                  "name": "_contract",
                  "nodeType": "VariableDeclaration",
                  "scope": 8997,
                  "src": "1355:17:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8979,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1355:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8982,
                  "name": "_features",
                  "nodeType": "VariableDeclaration",
                  "scope": 8997,
                  "src": "1374:17:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8981,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1374:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1354:38:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 8986,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8985,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8997,
                  "src": "1414:4:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8984,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1414:4:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1413:6:32"
            },
            "scope": 9052,
            "src": "1334:160:32",
            "stateMutability": "view",
            "superFunction": 9845,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9050,
              "nodeType": "Block",
              "src": "1787:432:32",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 9004,
                    "name": "_enable",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 9001,
                    "src": "1801:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 9048,
                    "nodeType": "Block",
                    "src": "2014:199:32",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "id": 9031,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "2032:35:32",
                          "subExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 9027,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 28038,
                                  "src": "2045:3:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 9028,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "2045:10:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 9029,
                                "name": "_features",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 8999,
                                "src": "2057:9:32",
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
                              "id": 9026,
                              "name": "isSupported",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [
                                8997
                              ],
                              "referencedDeclaration": 8997,
                              "src": "2033:11:32",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_address_$_t_uint256_$returns$_t_bool_$",
                                "typeString": "function (address,uint256) view returns (bool)"
                              }
                            },
                            "id": 9030,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2033:34:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 9033,
                        "nodeType": "IfStatement",
                        "src": "2028:64:32",
                        "trueBody": {
                          "expression": null,
                          "functionReturnParameters": 9003,
                          "id": 9032,
                          "nodeType": "Return",
                          "src": "2085:7:32"
                        }
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 9040,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 9034,
                              "name": "featureFlags",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8962,
                              "src": "2106:12:32",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 9037,
                            "indexExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 9035,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28038,
                                "src": "2119:3:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 9036,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2119:10:32",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "2106:24:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "&=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 9039,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "UnaryOperation",
                            "operator": "~",
                            "prefix": true,
                            "src": "2134:10:32",
                            "subExpression": {
                              "argumentTypes": null,
                              "id": 9038,
                              "name": "_features",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8999,
                              "src": "2135:9:32",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2106:38:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9041,
                        "nodeType": "ExpressionStatement",
                        "src": "2106:38:32"
                      },
                      {
                        "eventCall": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 9043,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28038,
                                "src": "2180:3:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 9044,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2180:10:32",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 9045,
                              "name": "_features",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8999,
                              "src": "2192:9:32",
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
                            "id": 9042,
                            "name": "FeaturesRemoval",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8974,
                            "src": "2164:15:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,uint256)"
                            }
                          },
                          "id": 9046,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2164:38:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 9047,
                        "nodeType": "EmitStatement",
                        "src": "2159:43:32"
                      }
                    ]
                  },
                  "id": 9049,
                  "nodeType": "IfStatement",
                  "src": "1797:416:32",
                  "trueBody": {
                    "id": 9025,
                    "nodeType": "Block",
                    "src": "1810:198:32",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 9006,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28038,
                                "src": "1840:3:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 9007,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1840:10:32",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 9008,
                              "name": "_features",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8999,
                              "src": "1852:9:32",
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
                            "id": 9005,
                            "name": "isSupported",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              8997
                            ],
                            "referencedDeclaration": 8997,
                            "src": "1828:11:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$_t_uint256_$returns$_t_bool_$",
                              "typeString": "function (address,uint256) view returns (bool)"
                            }
                          },
                          "id": 9009,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1828:34:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 9011,
                        "nodeType": "IfStatement",
                        "src": "1824:63:32",
                        "trueBody": {
                          "expression": null,
                          "functionReturnParameters": 9003,
                          "id": 9010,
                          "nodeType": "Return",
                          "src": "1880:7:32"
                        }
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 9017,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 9012,
                              "name": "featureFlags",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8962,
                              "src": "1901:12:32",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 9015,
                            "indexExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 9013,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28038,
                                "src": "1914:3:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 9014,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1914:10:32",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "1901:24:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "|=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 9016,
                            "name": "_features",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8999,
                            "src": "1929:9:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1901:37:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9018,
                        "nodeType": "ExpressionStatement",
                        "src": "1901:37:32"
                      },
                      {
                        "eventCall": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 9020,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28038,
                                "src": "1975:3:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 9021,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1975:10:32",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 9022,
                              "name": "_features",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8999,
                              "src": "1987:9:32",
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
                            "id": 9019,
                            "name": "FeaturesAddition",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8968,
                            "src": "1958:16:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,uint256)"
                            }
                          },
                          "id": 9023,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1958:39:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 9024,
                        "nodeType": "EmitStatement",
                        "src": "1953:44:32"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": "@dev allows a contract to enable/disable certain feature(s)\n@param _features    feature(s) to enable/disable\n@param _enable      true to enable the feature(s), false to disabled them",
            "id": 9051,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "enableFeatures",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9002,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8999,
                  "name": "_features",
                  "nodeType": "VariableDeclaration",
                  "scope": 9051,
                  "src": "1747:17:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8998,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1747:7:32",
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
                  "id": 9001,
                  "name": "_enable",
                  "nodeType": "VariableDeclaration",
                  "scope": 9051,
                  "src": "1766:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9000,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1766:4:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1746:33:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9003,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1787:0:32"
            },
            "scope": 9052,
            "src": "1723:496:32",
            "stateMutability": "nonpayable",
            "superFunction": 9852,
            "visibility": "public"
          }
        ],
        "scope": 9053,
        "src": "705:1516:32"
      }
    ],
    "src": "0:2222:32"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/ContractFeatures.sol",
    "exportedSymbols": {
      "ContractFeatures": [
        9052
      ]
    },
    "id": 9053,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8955,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:32"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/IContractFeatures.sol",
        "file": "./interfaces/IContractFeatures.sol",
        "id": 8956,
        "nodeType": "ImportDirective",
        "scope": 9053,
        "sourceUnit": 9854,
        "src": "25:44:32",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 8957,
              "name": "IContractFeatures",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9853,
              "src": "734:17:32",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IContractFeatures_$9853",
                "typeString": "contract IContractFeatures"
              }
            },
            "id": 8958,
            "nodeType": "InheritanceSpecifier",
            "src": "734:17:32"
          }
        ],
        "contractDependencies": [
          9853
        ],
        "contractKind": "contract",
        "documentation": "Contract Features\nGeneric contract that allows every contract on the blockchain to define which features it supports.\nOther contracts can query this contract to find out whether a given contract on the\nblockchain supports a certain feature.\nEach contract type can define its own list of feature flags.\nFeatures can be only enabled/disabled by the contract they are defined for.\nFeatures should be defined by each contract type as bit flags, e.g. -\nuint256 public constant FEATURE1 = 1 << 0;\nuint256 public constant FEATURE2 = 1 << 1;\nuint256 public constant FEATURE3 = 1 << 2;\n...",
        "fullyImplemented": true,
        "id": 9052,
        "linearizedBaseContracts": [
          9052,
          9853
        ],
        "name": "ContractFeatures",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 8962,
            "name": "featureFlags",
            "nodeType": "VariableDeclaration",
            "scope": 9052,
            "src": "758:49:32",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 8961,
              "keyType": {
                "id": 8959,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "767:7:32",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "758:28:32",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 8960,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "778:7:32",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 8968,
            "name": "FeaturesAddition",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 8967,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8964,
                  "indexed": true,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 8968,
                  "src": "837:24:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8963,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "837:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8966,
                  "indexed": false,
                  "name": "_features",
                  "nodeType": "VariableDeclaration",
                  "scope": 8968,
                  "src": "863:17:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8965,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "863:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "836:45:32"
            },
            "src": "814:68:32"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 8974,
            "name": "FeaturesRemoval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 8973,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8970,
                  "indexed": true,
                  "name": "_address",
                  "nodeType": "VariableDeclaration",
                  "scope": 8974,
                  "src": "909:24:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8969,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "909:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8972,
                  "indexed": false,
                  "name": "_features",
                  "nodeType": "VariableDeclaration",
                  "scope": 8974,
                  "src": "935:17:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8971,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "935:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "908:45:32"
            },
            "src": "887:67:32"
          },
          {
            "body": {
              "id": 8977,
              "nodeType": "Block",
              "src": "1021:7:32",
              "statements": []
            },
            "documentation": "@dev constructor",
            "id": 8978,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8975,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1011:2:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 8976,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1021:0:32"
            },
            "scope": 9052,
            "src": "1000:28:32",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8996,
              "nodeType": "Block",
              "src": "1420:74:32",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 8994,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 8991,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 8987,
                              "name": "featureFlags",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8962,
                              "src": "1438:12:32",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 8989,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 8988,
                              "name": "_contract",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8980,
                              "src": "1451:9:32",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1438:23:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 8990,
                            "name": "_features",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8982,
                            "src": "1464:9:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1438:35:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 8992,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "1437:37:32",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 8993,
                      "name": "_features",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8982,
                      "src": "1478:9:32",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1437:50:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 8986,
                  "id": 8995,
                  "nodeType": "Return",
                  "src": "1430:57:32"
                }
              ]
            },
            "documentation": "@dev returns true if a given contract supports the given feature(s), false if not\n@param _contract    contract address to check support for\n@param _features    feature(s) to check for\n@return true if the contract supports the feature(s), false if not",
            "id": 8997,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isSupported",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8983,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8980,
                  "name": "_contract",
                  "nodeType": "VariableDeclaration",
                  "scope": 8997,
                  "src": "1355:17:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8979,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1355:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8982,
                  "name": "_features",
                  "nodeType": "VariableDeclaration",
                  "scope": 8997,
                  "src": "1374:17:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8981,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1374:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1354:38:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 8986,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8985,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8997,
                  "src": "1414:4:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8984,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1414:4:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1413:6:32"
            },
            "scope": 9052,
            "src": "1334:160:32",
            "stateMutability": "view",
            "superFunction": 9845,
            "visibility": "public"
          },
          {
            "body": {
              "id": 9050,
              "nodeType": "Block",
              "src": "1787:432:32",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 9004,
                    "name": "_enable",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 9001,
                    "src": "1801:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 9048,
                    "nodeType": "Block",
                    "src": "2014:199:32",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "id": 9031,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "2032:35:32",
                          "subExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 9027,
                                  "name": "msg",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 28038,
                                  "src": "2045:3:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_message",
                                    "typeString": "msg"
                                  }
                                },
                                "id": 9028,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "sender",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "2045:10:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 9029,
                                "name": "_features",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 8999,
                                "src": "2057:9:32",
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
                              "id": 9026,
                              "name": "isSupported",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [
                                8997
                              ],
                              "referencedDeclaration": 8997,
                              "src": "2033:11:32",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_address_$_t_uint256_$returns$_t_bool_$",
                                "typeString": "function (address,uint256) view returns (bool)"
                              }
                            },
                            "id": 9030,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2033:34:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 9033,
                        "nodeType": "IfStatement",
                        "src": "2028:64:32",
                        "trueBody": {
                          "expression": null,
                          "functionReturnParameters": 9003,
                          "id": 9032,
                          "nodeType": "Return",
                          "src": "2085:7:32"
                        }
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 9040,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 9034,
                              "name": "featureFlags",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8962,
                              "src": "2106:12:32",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 9037,
                            "indexExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 9035,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28038,
                                "src": "2119:3:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 9036,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2119:10:32",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "2106:24:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "&=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 9039,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "UnaryOperation",
                            "operator": "~",
                            "prefix": true,
                            "src": "2134:10:32",
                            "subExpression": {
                              "argumentTypes": null,
                              "id": 9038,
                              "name": "_features",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8999,
                              "src": "2135:9:32",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2106:38:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9041,
                        "nodeType": "ExpressionStatement",
                        "src": "2106:38:32"
                      },
                      {
                        "eventCall": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 9043,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28038,
                                "src": "2180:3:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 9044,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2180:10:32",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 9045,
                              "name": "_features",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8999,
                              "src": "2192:9:32",
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
                            "id": 9042,
                            "name": "FeaturesRemoval",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8974,
                            "src": "2164:15:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,uint256)"
                            }
                          },
                          "id": 9046,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2164:38:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 9047,
                        "nodeType": "EmitStatement",
                        "src": "2159:43:32"
                      }
                    ]
                  },
                  "id": 9049,
                  "nodeType": "IfStatement",
                  "src": "1797:416:32",
                  "trueBody": {
                    "id": 9025,
                    "nodeType": "Block",
                    "src": "1810:198:32",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 9006,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28038,
                                "src": "1840:3:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 9007,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1840:10:32",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 9008,
                              "name": "_features",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8999,
                              "src": "1852:9:32",
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
                            "id": 9005,
                            "name": "isSupported",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              8997
                            ],
                            "referencedDeclaration": 8997,
                            "src": "1828:11:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_address_$_t_uint256_$returns$_t_bool_$",
                              "typeString": "function (address,uint256) view returns (bool)"
                            }
                          },
                          "id": 9009,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1828:34:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 9011,
                        "nodeType": "IfStatement",
                        "src": "1824:63:32",
                        "trueBody": {
                          "expression": null,
                          "functionReturnParameters": 9003,
                          "id": 9010,
                          "nodeType": "Return",
                          "src": "1880:7:32"
                        }
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 9017,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 9012,
                              "name": "featureFlags",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8962,
                              "src": "1901:12:32",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 9015,
                            "indexExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 9013,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28038,
                                "src": "1914:3:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 9014,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1914:10:32",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "1901:24:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "|=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 9016,
                            "name": "_features",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8999,
                            "src": "1929:9:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1901:37:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9018,
                        "nodeType": "ExpressionStatement",
                        "src": "1901:37:32"
                      },
                      {
                        "eventCall": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 9020,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28038,
                                "src": "1975:3:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 9021,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1975:10:32",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 9022,
                              "name": "_features",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8999,
                              "src": "1987:9:32",
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
                            "id": 9019,
                            "name": "FeaturesAddition",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8968,
                            "src": "1958:16:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                              "typeString": "function (address,uint256)"
                            }
                          },
                          "id": 9023,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1958:39:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 9024,
                        "nodeType": "EmitStatement",
                        "src": "1953:44:32"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": "@dev allows a contract to enable/disable certain feature(s)\n@param _features    feature(s) to enable/disable\n@param _enable      true to enable the feature(s), false to disabled them",
            "id": 9051,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "enableFeatures",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9002,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8999,
                  "name": "_features",
                  "nodeType": "VariableDeclaration",
                  "scope": 9051,
                  "src": "1747:17:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8998,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1747:7:32",
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
                  "id": 9001,
                  "name": "_enable",
                  "nodeType": "VariableDeclaration",
                  "scope": 9051,
                  "src": "1766:12:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9000,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1766:4:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1746:33:32"
            },
            "payable": false,
            "returnParameters": {
              "id": 9003,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1787:0:32"
            },
            "scope": 9052,
            "src": "1723:496:32",
            "stateMutability": "nonpayable",
            "superFunction": 9852,
            "visibility": "public"
          }
        ],
        "scope": 9053,
        "src": "705:1516:32"
      }
    ],
    "src": "0:2222:32"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-12-06T01:19:16.549Z"
}
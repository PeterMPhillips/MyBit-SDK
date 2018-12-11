"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var BurnToken = exports.BurnToken = 
{
  "contractName": "BurnToken",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "burnFrom",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.24;\n\ninterface BurnToken {  function burnFrom(address _from, uint _amount) external returns (bool success); }\ninterface LogTransaction {  function transaction(string _message, address _from, address _to, uint _amount, bytes32 _id)  external; }\ninterface DB {\n  function addressStorage(bytes32 _key) external view returns (address);\n  function bytes32Storage(bytes32 _key) external view returns (bytes32);\n  function boolStorage(bytes32 _key) external view returns (bool);\n  function setUint(bytes32 _key, uint _value) external;\n}\n\n/// @title A contract for burning ERC20 tokens as usage fee for dapps\n/// @author Kyle Dewhurst & Peter Phillips MyBit Foundation\n/// @notice Allows Dapps to call this contract to burn ERC20 tokens as a usage fee\n/// @dev This contract does not accept tokens. It only burns tokens from investors wallets to run platform functionality\ncontract ERC20Burner {\n\n  BurnToken public token;  // The instance of the ERC20 burner contract\n  DB public database;   // The datbase instance\n  LogTransaction public events; //LogTransaction contract\n\n\n  // @notice constructor: initializes database and the MYB token\n  // @param: the address for the database contract used by this platform\n  constructor(address _database, address _events)\n  public {\n    database = DB(_database);\n    events = LogTransaction(_events);\n    token = BurnToken(database.addressStorage(keccak256(abi.encodePacked(\"platformToken\"))));\n    require(address(token) != address(0));\n  }\n\n  // @notice authorized contracts can burn mybit tokens here if the investor has approved this contract to do so\n  // @param (address) _tokenHolder = the address of the mybit token holder who wishes to burn _amount of tokens\n  // @param (uint) _amount = the amount of tokens to be burnt (must include decimal places)\n  function burn(address _tokenHolder, uint _amount)\n  external\n  onlyPlatformContracts(msg.sender)\n  acceptedState(_tokenHolder)\n  returns (bool) {\n    require(token.burnFrom(_tokenHolder, _amount));\n    events.transaction('Platform Token Burnt', _tokenHolder, msg.sender, _amount, '');\n    return true;\n  }\n\n  // @notice owners can set the cost of functionality on the platform here.\n  // @dev _amount will be how many platformTokens are burned to call the method at _contractAddress\n  // @param (bytes4) _methodID: the methodID of the function which is to require a burning fee\n  // @param (address) _contractAddress: the address of the contract where this method is contained\n  function setFee(bytes4 _methodID, address _contractAddress, uint _amount)\n  external\n  onlyOwner\n  returns (bool) {\n    //Sets the price to burn per function in MyB.\n    database.setUint(keccak256(abi.encodePacked(_methodID, _contractAddress)), _amount);\n    emit LogFeeAdded(_contractAddress, _methodID, _amount);\n    return true;\n  }\n\n  // @notice platform owners can destroy contract here\n  function destroy()\n  onlyOwner\n  external {\n    events.transaction('ERC20Burner destroyed', address(this), msg.sender, address(this).balance, '');\n    selfdestruct(msg.sender);\n  }\n\n  // @notice fallback function. Rejects all ether\n  function ()\n  external\n  payable {\n    revert();\n  }\n\n  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n  //                                            Modifiers\n  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n\n  // @notice reverts if msg.sender isn't the owner\n  modifier onlyOwner {\n    require(database.boolStorage(keccak256(abi.encodePacked(\"owner\", msg.sender))));\n    _;\n  }\n\n  // @notice reverts if address isn't authorized to burn MYB\n  modifier onlyPlatformContracts(address _burner) {\n    require(database.boolStorage(keccak256(abi.encodePacked(\"contract\", _burner))));\n    _;\n  }\n\n  // @notice reverts if investor hasn't accepted current contract state or if he doesn't ignore state changes entirely\n  modifier acceptedState(address _investor) {\n    bytes32 currentState = database.bytes32Storage(keccak256(abi.encodePacked(\"currentState\")));\n    require(database.boolStorage(keccak256(abi.encodePacked(currentState, _investor))) || database.boolStorage(keccak256(abi.encodePacked(\"ignoreStateChanges\", _investor))));\n    _;\n  }\n\n  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n  //                                            Events\n  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n\n  event LogMYBBurned(address _tokenHolder, address _burningContract, uint _amount);\n  event LogFeeAdded(address indexed _contractAddress, bytes4 _methodID, uint _amount);\n  event LogTokenAddress(address tokenAddress);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/access/ERC20Burner.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/access/ERC20Burner.sol",
    "exportedSymbols": {
      "BurnToken": [
        438
      ],
      "DB": [
        481
      ],
      "ERC20Burner": [
        738
      ],
      "LogTransaction": [
        452
      ]
    },
    "id": 739,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 428,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:3"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 438,
        "linearizedBaseContracts": [
          438
        ],
        "name": "BurnToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 437,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burnFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 433,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 430,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 437,
                  "src": "67:13:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 429,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "67:7:3",
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
                  "id": 432,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 437,
                  "src": "82:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 431,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "82:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "66:29:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 436,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 435,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 437,
                  "src": "114:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 434,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "114:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "113:14:3"
            },
            "scope": 438,
            "src": "49:79:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 739,
        "src": "26:104:3"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 452,
        "linearizedBaseContracts": [
          452
        ],
        "name": "LogTransaction",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 451,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transaction",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 449,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 440,
                  "name": "_message",
                  "nodeType": "VariableDeclaration",
                  "scope": 451,
                  "src": "180:15:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 439,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "180:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 442,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 451,
                  "src": "197:13:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 441,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "197:7:3",
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
                  "id": 444,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 451,
                  "src": "212:11:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 443,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "212:7:3",
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
                  "id": 446,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 451,
                  "src": "225:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 445,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "225:4:3",
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
                  "id": 448,
                  "name": "_id",
                  "nodeType": "VariableDeclaration",
                  "scope": 451,
                  "src": "239:11:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 447,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "239:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "179:72:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 450,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "261:0:3"
            },
            "scope": 452,
            "src": "159:103:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 739,
        "src": "131:133:3"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 481,
        "linearizedBaseContracts": [
          481
        ],
        "name": "DB",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 459,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "addressStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 455,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 454,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 459,
                  "src": "306:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 453,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "306:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "305:14:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 458,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 457,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 459,
                  "src": "343:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 456,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "343:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "342:9:3"
            },
            "scope": 481,
            "src": "282:70:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 466,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "bytes32Storage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 462,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 461,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 466,
                  "src": "379:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 460,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "379:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "378:14:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 465,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 464,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 466,
                  "src": "416:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 463,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "416:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "415:9:3"
            },
            "scope": 481,
            "src": "355:70:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 473,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "boolStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 469,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 468,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 473,
                  "src": "449:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 467,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "449:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "448:14:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 472,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 471,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 473,
                  "src": "486:4:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 470,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "486:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "485:6:3"
            },
            "scope": 481,
            "src": "428:64:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 480,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setUint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 478,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 475,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 480,
                  "src": "512:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 474,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "512:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 477,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 480,
                  "src": "526:11:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 476,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "526:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "511:27:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 479,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "547:0:3"
            },
            "scope": 481,
            "src": "495:53:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 739,
        "src": "265:285:3"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title A contract for burning ERC20 tokens as usage fee for dapps\n @author Kyle Dewhurst & Peter Phillips MyBit Foundation\n @notice Allows Dapps to call this contract to burn ERC20 tokens as a usage fee\n @dev This contract does not accept tokens. It only burns tokens from investors wallets to run platform functionality",
        "fullyImplemented": true,
        "id": 738,
        "linearizedBaseContracts": [
          738
        ],
        "name": "ERC20Burner",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 483,
            "name": "token",
            "nodeType": "VariableDeclaration",
            "scope": 738,
            "src": "912:22:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_BurnToken_$438",
              "typeString": "contract BurnToken"
            },
            "typeName": {
              "contractScope": null,
              "id": 482,
              "name": "BurnToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 438,
              "src": "912:9:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_BurnToken_$438",
                "typeString": "contract BurnToken"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 485,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 738,
            "src": "984:18:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_DB_$481",
              "typeString": "contract DB"
            },
            "typeName": {
              "contractScope": null,
              "id": 484,
              "name": "DB",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 481,
              "src": "984:2:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DB_$481",
                "typeString": "contract DB"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 487,
            "name": "events",
            "nodeType": "VariableDeclaration",
            "scope": 738,
            "src": "1032:28:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_LogTransaction_$452",
              "typeString": "contract LogTransaction"
            },
            "typeName": {
              "contractScope": null,
              "id": 486,
              "name": "LogTransaction",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 452,
              "src": "1032:14:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_LogTransaction_$452",
                "typeString": "contract LogTransaction"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 530,
              "nodeType": "Block",
              "src": "1287:210:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 498,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 494,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 485,
                      "src": "1293:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DB_$481",
                        "typeString": "contract DB"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 496,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 489,
                          "src": "1307:9:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 495,
                        "name": "DB",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 481,
                        "src": "1304:2:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_DB_$481_$",
                          "typeString": "type(contract DB)"
                        }
                      },
                      "id": 497,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1304:13:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DB_$481",
                        "typeString": "contract DB"
                      }
                    },
                    "src": "1293:24:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_DB_$481",
                      "typeString": "contract DB"
                    }
                  },
                  "id": 499,
                  "nodeType": "ExpressionStatement",
                  "src": "1293:24:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 504,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 500,
                      "name": "events",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 487,
                      "src": "1323:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LogTransaction_$452",
                        "typeString": "contract LogTransaction"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 502,
                          "name": "_events",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 491,
                          "src": "1347:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 501,
                        "name": "LogTransaction",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 452,
                        "src": "1332:14:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_LogTransaction_$452_$",
                          "typeString": "type(contract LogTransaction)"
                        }
                      },
                      "id": 503,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1332:23:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LogTransaction_$452",
                        "typeString": "contract LogTransaction"
                      }
                    },
                    "src": "1323:32:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LogTransaction_$452",
                      "typeString": "contract LogTransaction"
                    }
                  },
                  "id": 505,
                  "nodeType": "ExpressionStatement",
                  "src": "1323:32:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 518,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 506,
                      "name": "token",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 483,
                      "src": "1361:5:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_BurnToken_$438",
                        "typeString": "contract BurnToken"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "hexValue": "706c6174666f726d546f6b656e",
                                      "id": 513,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "1430:15:3",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_25dfde8b83ea222001f0914cfb6680386113926d24c3ecda20b3ebd95e9007f2",
                                        "typeString": "literal_string \"platformToken\""
                                      },
                                      "value": "platformToken"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_stringliteral_25dfde8b83ea222001f0914cfb6680386113926d24c3ecda20b3ebd95e9007f2",
                                        "typeString": "literal_string \"platformToken\""
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 511,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 28025,
                                      "src": "1413:3:3",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 512,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "1413:16:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 514,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "1413:33:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                ],
                                "id": 510,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28032,
                                "src": "1403:9:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                  "typeString": "function () pure returns (bytes32)"
                                }
                              },
                              "id": 515,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1403:44:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 508,
                              "name": "database",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 485,
                              "src": "1379:8:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DB_$481",
                                "typeString": "contract DB"
                              }
                            },
                            "id": 509,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "addressStorage",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 459,
                            "src": "1379:23:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                              "typeString": "function (bytes32) view external returns (address)"
                            }
                          },
                          "id": 516,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1379:69:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 507,
                        "name": "BurnToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 438,
                        "src": "1369:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_BurnToken_$438_$",
                          "typeString": "type(contract BurnToken)"
                        }
                      },
                      "id": 517,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1369:80:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_BurnToken_$438",
                        "typeString": "contract BurnToken"
                      }
                    },
                    "src": "1361:88:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_BurnToken_$438",
                      "typeString": "contract BurnToken"
                    }
                  },
                  "id": 519,
                  "nodeType": "ExpressionStatement",
                  "src": "1361:88:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 527,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 522,
                              "name": "token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 483,
                              "src": "1471:5:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_BurnToken_$438",
                                "typeString": "contract BurnToken"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_BurnToken_$438",
                                "typeString": "contract BurnToken"
                              }
                            ],
                            "id": 521,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1463:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 523,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1463:14:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 525,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1489:1:3",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 524,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1481:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 526,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1481:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1463:28:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 520,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "1455:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 528,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1455:37:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 529,
                  "nodeType": "ExpressionStatement",
                  "src": "1455:37:3"
                }
              ]
            },
            "documentation": null,
            "id": 531,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 492,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 489,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 531,
                  "src": "1242:17:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 488,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1242:7:3",
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
                  "id": 491,
                  "name": "_events",
                  "nodeType": "VariableDeclaration",
                  "scope": 531,
                  "src": "1261:15:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 490,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1261:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1241:36:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 493,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1287:0:3"
            },
            "scope": 738,
            "src": "1230:267:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 568,
              "nodeType": "Block",
              "src": "1962:161:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 550,
                            "name": "_tokenHolder",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 533,
                            "src": "1991:12:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 551,
                            "name": "_amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 535,
                            "src": "2005:7:3",
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
                            "id": 548,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 483,
                            "src": "1976:5:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_BurnToken_$438",
                              "typeString": "contract BurnToken"
                            }
                          },
                          "id": 549,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "burnFrom",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 437,
                          "src": "1976:14:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,uint256) external returns (bool)"
                          }
                        },
                        "id": 552,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1976:37:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 547,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "1968:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 553,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1968:46:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 554,
                  "nodeType": "ExpressionStatement",
                  "src": "1968:46:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "506c6174666f726d20546f6b656e204275726e74",
                        "id": 558,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2039:22:3",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_90d2786f4d225d90a3bfa1292ef81da1ddc5a24a2fa3babf86d23b732bdb2e50",
                          "typeString": "literal_string \"Platform Token Burnt\""
                        },
                        "value": "Platform Token Burnt"
                      },
                      {
                        "argumentTypes": null,
                        "id": 559,
                        "name": "_tokenHolder",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 533,
                        "src": "2063:12:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 560,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28038,
                          "src": "2077:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 561,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2077:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 562,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 535,
                        "src": "2089:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 563,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2098:2:3",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_90d2786f4d225d90a3bfa1292ef81da1ddc5a24a2fa3babf86d23b732bdb2e50",
                          "typeString": "literal_string \"Platform Token Burnt\""
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 555,
                        "name": "events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 487,
                        "src": "2020:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_LogTransaction_$452",
                          "typeString": "contract LogTransaction"
                        }
                      },
                      "id": 557,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transaction",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 451,
                      "src": "2020:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_address_$_t_address_$_t_uint256_$_t_bytes32_$returns$__$",
                        "typeString": "function (string memory,address,address,uint256,bytes32) external"
                      }
                    },
                    "id": 564,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2020:81:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 565,
                  "nodeType": "ExpressionStatement",
                  "src": "2020:81:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 566,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2114:4:3",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 546,
                  "id": 567,
                  "nodeType": "Return",
                  "src": "2107:11:3"
                }
              ]
            },
            "documentation": null,
            "id": 569,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 538,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28038,
                      "src": "1903:3:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 539,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "sender",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "1903:10:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 540,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 537,
                  "name": "onlyPlatformContracts",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 675,
                  "src": "1881:21:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1881:33:3"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 542,
                    "name": "_tokenHolder",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 533,
                    "src": "1931:12:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 543,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 541,
                  "name": "acceptedState",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 717,
                  "src": "1917:13:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1917:27:3"
              }
            ],
            "name": "burn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 536,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 533,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 569,
                  "src": "1832:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 532,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1832:7:3",
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
                  "id": 535,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 569,
                  "src": "1854:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 534,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1854:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1831:36:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 546,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 545,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 569,
                  "src": "1956:4:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 544,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1956:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1955:6:3"
            },
            "scope": 738,
            "src": "1818:305:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 603,
              "nodeType": "Block",
              "src": "2611:221:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 588,
                                "name": "_methodID",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 571,
                                "src": "2711:9:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes4",
                                  "typeString": "bytes4"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 589,
                                "name": "_contractAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 573,
                                "src": "2722:16:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes4",
                                  "typeString": "bytes4"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 586,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28025,
                                "src": "2694:3:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 587,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2694:16:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 590,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2694:45:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 585,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28032,
                          "src": "2684:9:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 591,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2684:56:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 592,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 575,
                        "src": "2742:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 582,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 485,
                        "src": "2667:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DB_$481",
                          "typeString": "contract DB"
                        }
                      },
                      "id": 584,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 480,
                      "src": "2667:16:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_uint256_$returns$__$",
                        "typeString": "function (bytes32,uint256) external"
                      }
                    },
                    "id": 593,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2667:83:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 594,
                  "nodeType": "ExpressionStatement",
                  "src": "2667:83:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 596,
                        "name": "_contractAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 573,
                        "src": "2773:16:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 597,
                        "name": "_methodID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 571,
                        "src": "2791:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 598,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 575,
                        "src": "2802:7:3",
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
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 595,
                      "name": "LogFeeAdded",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 733,
                      "src": "2761:11:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_bytes4_$_t_uint256_$returns$__$",
                        "typeString": "function (address,bytes4,uint256)"
                      }
                    },
                    "id": 599,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2761:49:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 600,
                  "nodeType": "EmitStatement",
                  "src": "2756:54:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 601,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2823:4:3",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 581,
                  "id": 602,
                  "nodeType": "Return",
                  "src": "2816:11:3"
                }
              ]
            },
            "documentation": null,
            "id": 604,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 578,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 577,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 656,
                  "src": "2584:9:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2584:9:3"
              }
            ],
            "name": "setFee",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 576,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 571,
                  "name": "_methodID",
                  "nodeType": "VariableDeclaration",
                  "scope": 604,
                  "src": "2513:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 570,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "2513:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 573,
                  "name": "_contractAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 604,
                  "src": "2531:24:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 572,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2531:7:3",
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
                  "id": 575,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 604,
                  "src": "2557:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 574,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2557:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2512:58:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 581,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 580,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 604,
                  "src": "2605:4:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 579,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2605:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2604:6:3"
            },
            "scope": 738,
            "src": "2497:335:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 630,
              "nodeType": "Block",
              "src": "2933:138:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "45524332304275726e65722064657374726f796564",
                        "id": 612,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2958:23:3",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_8b921f6cf39e9494e76c11d0aaae4eaf3f881e8ec6fc31ded6086770cefe6010",
                          "typeString": "literal_string \"ERC20Burner destroyed\""
                        },
                        "value": "ERC20Burner destroyed"
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 614,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28071,
                            "src": "2991:4:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC20Burner_$738",
                              "typeString": "contract ERC20Burner"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_ERC20Burner_$738",
                              "typeString": "contract ERC20Burner"
                            }
                          ],
                          "id": 613,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2983:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 615,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2983:13:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 616,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28038,
                          "src": "2998:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 617,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2998:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 619,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 28071,
                              "src": "3018:4:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC20Burner_$738",
                                "typeString": "contract ERC20Burner"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_ERC20Burner_$738",
                                "typeString": "contract ERC20Burner"
                              }
                            ],
                            "id": 618,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "3010:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 620,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3010:13:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 621,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3010:21:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 622,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3033:2:3",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_8b921f6cf39e9494e76c11d0aaae4eaf3f881e8ec6fc31ded6086770cefe6010",
                          "typeString": "literal_string \"ERC20Burner destroyed\""
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 609,
                        "name": "events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 487,
                        "src": "2939:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_LogTransaction_$452",
                          "typeString": "contract LogTransaction"
                        }
                      },
                      "id": 611,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transaction",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 451,
                      "src": "2939:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_address_$_t_address_$_t_uint256_$_t_bytes32_$returns$__$",
                        "typeString": "function (string memory,address,address,uint256,bytes32) external"
                      }
                    },
                    "id": 623,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2939:97:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 624,
                  "nodeType": "ExpressionStatement",
                  "src": "2939:97:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 626,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28038,
                          "src": "3055:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 627,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3055:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 625,
                      "name": "selfdestruct",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28046,
                      "src": "3042:12:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_selfdestruct_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 628,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3042:24:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 629,
                  "nodeType": "ExpressionStatement",
                  "src": "3042:24:3"
                }
              ]
            },
            "documentation": null,
            "id": 631,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 607,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 606,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 656,
                  "src": "2912:9:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2912:9:3"
              }
            ],
            "name": "destroy",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 605,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2907:2:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 608,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2933:0:3"
            },
            "scope": 738,
            "src": "2891:180:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 637,
              "nodeType": "Block",
              "src": "3158:19:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 634,
                      "name": "revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28043,
                        28044
                      ],
                      "referencedDeclaration": 28043,
                      "src": "3164:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                        "typeString": "function () pure"
                      }
                    },
                    "id": 635,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3164:8:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 636,
                  "nodeType": "ExpressionStatement",
                  "src": "3164:8:3"
                }
              ]
            },
            "documentation": null,
            "id": 638,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 632,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3134:2:3"
            },
            "payable": true,
            "returnParameters": {
              "id": 633,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3158:0:3"
            },
            "scope": 738,
            "src": "3125:52:3",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 655,
              "nodeType": "Block",
              "src": "3544:97:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "6f776e6572",
                                    "id": 646,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "3606:7:3",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c0",
                                      "typeString": "literal_string \"owner\""
                                    },
                                    "value": "owner"
                                  },
                                  {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 647,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 28038,
                                      "src": "3615:3:3",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 648,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "3615:10:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_stringliteral_02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c0",
                                      "typeString": "literal_string \"owner\""
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 644,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 28025,
                                    "src": "3589:3:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 645,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "3589:16:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 649,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3589:37:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "id": 643,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 28032,
                              "src": "3579:9:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                "typeString": "function () pure returns (bytes32)"
                              }
                            },
                            "id": 650,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3579:48:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 641,
                            "name": "database",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 485,
                            "src": "3558:8:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_DB_$481",
                              "typeString": "contract DB"
                            }
                          },
                          "id": 642,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "boolStorage",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 473,
                          "src": "3558:20:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 651,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3558:70:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 640,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "3550:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 652,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3550:79:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 653,
                  "nodeType": "ExpressionStatement",
                  "src": "3550:79:3"
                },
                {
                  "id": 654,
                  "nodeType": "PlaceholderStatement",
                  "src": "3635:1:3"
                }
              ]
            },
            "documentation": "///////////////////////////////////////////////////////////////////////////////////////////////////////////////",
            "id": 656,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 639,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3544:0:3"
            },
            "src": "3525:116:3",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 674,
              "nodeType": "Block",
              "src": "3754:97:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "636f6e7472616374",
                                    "id": 666,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "3816:10:3",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_7f6dd79f0020bee2024a097aaa5d32ab7ca31126fa375538de047e7475fa8572",
                                      "typeString": "literal_string \"contract\""
                                    },
                                    "value": "contract"
                                  },
                                  {
                                    "argumentTypes": null,
                                    "id": 667,
                                    "name": "_burner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 658,
                                    "src": "3828:7:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_stringliteral_7f6dd79f0020bee2024a097aaa5d32ab7ca31126fa375538de047e7475fa8572",
                                      "typeString": "literal_string \"contract\""
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 664,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 28025,
                                    "src": "3799:3:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 665,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "3799:16:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 668,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3799:37:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "id": 663,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 28032,
                              "src": "3789:9:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                "typeString": "function () pure returns (bytes32)"
                              }
                            },
                            "id": 669,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3789:48:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 661,
                            "name": "database",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 485,
                            "src": "3768:8:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_DB_$481",
                              "typeString": "contract DB"
                            }
                          },
                          "id": 662,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "boolStorage",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 473,
                          "src": "3768:20:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 670,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3768:70:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 660,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "3760:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 671,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3760:79:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 672,
                  "nodeType": "ExpressionStatement",
                  "src": "3760:79:3"
                },
                {
                  "id": 673,
                  "nodeType": "PlaceholderStatement",
                  "src": "3845:1:3"
                }
              ]
            },
            "documentation": null,
            "id": 675,
            "name": "onlyPlatformContracts",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 659,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 658,
                  "name": "_burner",
                  "nodeType": "VariableDeclaration",
                  "scope": 675,
                  "src": "3737:15:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 657,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3737:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3736:17:3"
            },
            "src": "3706:145:3",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 716,
              "nodeType": "Block",
              "src": "4016:284:3",
              "statements": [
                {
                  "assignments": [
                    680
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 680,
                      "name": "currentState",
                      "nodeType": "VariableDeclaration",
                      "scope": 717,
                      "src": "4022:20:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 679,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "4022:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 690,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "63757272656e745374617465",
                                "id": 686,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "4096:14:3",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_9edba7d443a506c9abe315859abcdd5883c30f59be404e61e3ea9aa937d74dfd",
                                  "typeString": "literal_string \"currentState\""
                                },
                                "value": "currentState"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_9edba7d443a506c9abe315859abcdd5883c30f59be404e61e3ea9aa937d74dfd",
                                  "typeString": "literal_string \"currentState\""
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 684,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28025,
                                "src": "4079:3:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 685,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "4079:16:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 687,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4079:32:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 683,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28032,
                          "src": "4069:9:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 688,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4069:43:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 681,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 485,
                        "src": "4045:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DB_$481",
                          "typeString": "contract DB"
                        }
                      },
                      "id": 682,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "bytes32Storage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 466,
                      "src": "4045:23:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bytes32_$",
                        "typeString": "function (bytes32) view external returns (bytes32)"
                      }
                    },
                    "id": 689,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4045:68:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4022:91:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 712,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "id": 697,
                                      "name": "currentState",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 680,
                                      "src": "4175:12:3",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 698,
                                      "name": "_investor",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 677,
                                      "src": "4189:9:3",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      },
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 695,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 28025,
                                      "src": "4158:3:3",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 696,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "4158:16:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 699,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "4158:41:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                ],
                                "id": 694,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28032,
                                "src": "4148:9:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                  "typeString": "function () pure returns (bytes32)"
                                }
                              },
                              "id": 700,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4148:52:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 692,
                              "name": "database",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 485,
                              "src": "4127:8:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DB_$481",
                                "typeString": "contract DB"
                              }
                            },
                            "id": 693,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "boolStorage",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 473,
                            "src": "4127:20:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                              "typeString": "function (bytes32) view external returns (bool)"
                            }
                          },
                          "id": 701,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4127:74:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "||",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "hexValue": "69676e6f726553746174654368616e676573",
                                      "id": 707,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "4253:20:3",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_9c31ef3f26d7dd5e0315a0a955a8a261ec0b0cb89d9d73baf911b538c4c2589c",
                                        "typeString": "literal_string \"ignoreStateChanges\""
                                      },
                                      "value": "ignoreStateChanges"
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 708,
                                      "name": "_investor",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 677,
                                      "src": "4275:9:3",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_stringliteral_9c31ef3f26d7dd5e0315a0a955a8a261ec0b0cb89d9d73baf911b538c4c2589c",
                                        "typeString": "literal_string \"ignoreStateChanges\""
                                      },
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 705,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 28025,
                                      "src": "4236:3:3",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 706,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "4236:16:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 709,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "4236:49:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                ],
                                "id": 704,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28032,
                                "src": "4226:9:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                  "typeString": "function () pure returns (bytes32)"
                                }
                              },
                              "id": 710,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4226:60:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 702,
                              "name": "database",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 485,
                              "src": "4205:8:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DB_$481",
                                "typeString": "contract DB"
                              }
                            },
                            "id": 703,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "boolStorage",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 473,
                            "src": "4205:20:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                              "typeString": "function (bytes32) view external returns (bool)"
                            }
                          },
                          "id": 711,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4205:82:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "4127:160:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 691,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "4119:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 713,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4119:169:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 714,
                  "nodeType": "ExpressionStatement",
                  "src": "4119:169:3"
                },
                {
                  "id": 715,
                  "nodeType": "PlaceholderStatement",
                  "src": "4294:1:3"
                }
              ]
            },
            "documentation": null,
            "id": 717,
            "name": "acceptedState",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 678,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 677,
                  "name": "_investor",
                  "nodeType": "VariableDeclaration",
                  "scope": 717,
                  "src": "3997:17:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 676,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3997:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3996:19:3"
            },
            "src": "3974:326:3",
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "documentation": "///////////////////////////////////////////////////////////////////////////////////////////////////////////////",
            "id": 725,
            "name": "LogMYBBurned",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 724,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 719,
                  "indexed": false,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 725,
                  "src": "4613:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 718,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4613:7:3",
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
                  "id": 721,
                  "indexed": false,
                  "name": "_burningContract",
                  "nodeType": "VariableDeclaration",
                  "scope": 725,
                  "src": "4635:24:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 720,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4635:7:3",
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
                  "id": 723,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 725,
                  "src": "4661:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 722,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4661:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4612:62:3"
            },
            "src": "4594:81:3"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 733,
            "name": "LogFeeAdded",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 732,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 727,
                  "indexed": true,
                  "name": "_contractAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 733,
                  "src": "4696:32:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 726,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4696:7:3",
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
                  "id": 729,
                  "indexed": false,
                  "name": "_methodID",
                  "nodeType": "VariableDeclaration",
                  "scope": 733,
                  "src": "4730:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 728,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "4730:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 731,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 733,
                  "src": "4748:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 730,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4748:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4695:66:3"
            },
            "src": "4678:84:3"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 737,
            "name": "LogTokenAddress",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 736,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 735,
                  "indexed": false,
                  "name": "tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 737,
                  "src": "4787:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 734,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4787:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4786:22:3"
            },
            "src": "4765:44:3"
          }
        ],
        "scope": 739,
        "src": "886:3925:3"
      }
    ],
    "src": "0:4812:3"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/access/ERC20Burner.sol",
    "exportedSymbols": {
      "BurnToken": [
        438
      ],
      "DB": [
        481
      ],
      "ERC20Burner": [
        738
      ],
      "LogTransaction": [
        452
      ]
    },
    "id": 739,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 428,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:3"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 438,
        "linearizedBaseContracts": [
          438
        ],
        "name": "BurnToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 437,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "burnFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 433,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 430,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 437,
                  "src": "67:13:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 429,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "67:7:3",
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
                  "id": 432,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 437,
                  "src": "82:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 431,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "82:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "66:29:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 436,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 435,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 437,
                  "src": "114:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 434,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "114:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "113:14:3"
            },
            "scope": 438,
            "src": "49:79:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 739,
        "src": "26:104:3"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 452,
        "linearizedBaseContracts": [
          452
        ],
        "name": "LogTransaction",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 451,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transaction",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 449,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 440,
                  "name": "_message",
                  "nodeType": "VariableDeclaration",
                  "scope": 451,
                  "src": "180:15:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 439,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "180:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 442,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 451,
                  "src": "197:13:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 441,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "197:7:3",
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
                  "id": 444,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 451,
                  "src": "212:11:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 443,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "212:7:3",
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
                  "id": 446,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 451,
                  "src": "225:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 445,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "225:4:3",
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
                  "id": 448,
                  "name": "_id",
                  "nodeType": "VariableDeclaration",
                  "scope": 451,
                  "src": "239:11:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 447,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "239:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "179:72:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 450,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "261:0:3"
            },
            "scope": 452,
            "src": "159:103:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 739,
        "src": "131:133:3"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 481,
        "linearizedBaseContracts": [
          481
        ],
        "name": "DB",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 459,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "addressStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 455,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 454,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 459,
                  "src": "306:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 453,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "306:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "305:14:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 458,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 457,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 459,
                  "src": "343:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 456,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "343:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "342:9:3"
            },
            "scope": 481,
            "src": "282:70:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 466,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "bytes32Storage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 462,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 461,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 466,
                  "src": "379:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 460,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "379:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "378:14:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 465,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 464,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 466,
                  "src": "416:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 463,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "416:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "415:9:3"
            },
            "scope": 481,
            "src": "355:70:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 473,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "boolStorage",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 469,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 468,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 473,
                  "src": "449:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 467,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "449:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "448:14:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 472,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 471,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 473,
                  "src": "486:4:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 470,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "486:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "485:6:3"
            },
            "scope": 481,
            "src": "428:64:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 480,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setUint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 478,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 475,
                  "name": "_key",
                  "nodeType": "VariableDeclaration",
                  "scope": 480,
                  "src": "512:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 474,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "512:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 477,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 480,
                  "src": "526:11:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 476,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "526:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "511:27:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 479,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "547:0:3"
            },
            "scope": 481,
            "src": "495:53:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 739,
        "src": "265:285:3"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title A contract for burning ERC20 tokens as usage fee for dapps\n @author Kyle Dewhurst & Peter Phillips MyBit Foundation\n @notice Allows Dapps to call this contract to burn ERC20 tokens as a usage fee\n @dev This contract does not accept tokens. It only burns tokens from investors wallets to run platform functionality",
        "fullyImplemented": true,
        "id": 738,
        "linearizedBaseContracts": [
          738
        ],
        "name": "ERC20Burner",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 483,
            "name": "token",
            "nodeType": "VariableDeclaration",
            "scope": 738,
            "src": "912:22:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_BurnToken_$438",
              "typeString": "contract BurnToken"
            },
            "typeName": {
              "contractScope": null,
              "id": 482,
              "name": "BurnToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 438,
              "src": "912:9:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_BurnToken_$438",
                "typeString": "contract BurnToken"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 485,
            "name": "database",
            "nodeType": "VariableDeclaration",
            "scope": 738,
            "src": "984:18:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_DB_$481",
              "typeString": "contract DB"
            },
            "typeName": {
              "contractScope": null,
              "id": 484,
              "name": "DB",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 481,
              "src": "984:2:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DB_$481",
                "typeString": "contract DB"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 487,
            "name": "events",
            "nodeType": "VariableDeclaration",
            "scope": 738,
            "src": "1032:28:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_LogTransaction_$452",
              "typeString": "contract LogTransaction"
            },
            "typeName": {
              "contractScope": null,
              "id": 486,
              "name": "LogTransaction",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 452,
              "src": "1032:14:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_LogTransaction_$452",
                "typeString": "contract LogTransaction"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 530,
              "nodeType": "Block",
              "src": "1287:210:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 498,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 494,
                      "name": "database",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 485,
                      "src": "1293:8:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DB_$481",
                        "typeString": "contract DB"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 496,
                          "name": "_database",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 489,
                          "src": "1307:9:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 495,
                        "name": "DB",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 481,
                        "src": "1304:2:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_DB_$481_$",
                          "typeString": "type(contract DB)"
                        }
                      },
                      "id": 497,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1304:13:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DB_$481",
                        "typeString": "contract DB"
                      }
                    },
                    "src": "1293:24:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_DB_$481",
                      "typeString": "contract DB"
                    }
                  },
                  "id": 499,
                  "nodeType": "ExpressionStatement",
                  "src": "1293:24:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 504,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 500,
                      "name": "events",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 487,
                      "src": "1323:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LogTransaction_$452",
                        "typeString": "contract LogTransaction"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 502,
                          "name": "_events",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 491,
                          "src": "1347:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 501,
                        "name": "LogTransaction",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 452,
                        "src": "1332:14:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_LogTransaction_$452_$",
                          "typeString": "type(contract LogTransaction)"
                        }
                      },
                      "id": 503,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1332:23:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_LogTransaction_$452",
                        "typeString": "contract LogTransaction"
                      }
                    },
                    "src": "1323:32:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_LogTransaction_$452",
                      "typeString": "contract LogTransaction"
                    }
                  },
                  "id": 505,
                  "nodeType": "ExpressionStatement",
                  "src": "1323:32:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 518,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 506,
                      "name": "token",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 483,
                      "src": "1361:5:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_BurnToken_$438",
                        "typeString": "contract BurnToken"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "hexValue": "706c6174666f726d546f6b656e",
                                      "id": 513,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "1430:15:3",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_25dfde8b83ea222001f0914cfb6680386113926d24c3ecda20b3ebd95e9007f2",
                                        "typeString": "literal_string \"platformToken\""
                                      },
                                      "value": "platformToken"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_stringliteral_25dfde8b83ea222001f0914cfb6680386113926d24c3ecda20b3ebd95e9007f2",
                                        "typeString": "literal_string \"platformToken\""
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 511,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 28025,
                                      "src": "1413:3:3",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 512,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "1413:16:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 514,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "1413:33:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                ],
                                "id": 510,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28032,
                                "src": "1403:9:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                  "typeString": "function () pure returns (bytes32)"
                                }
                              },
                              "id": 515,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1403:44:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 508,
                              "name": "database",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 485,
                              "src": "1379:8:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DB_$481",
                                "typeString": "contract DB"
                              }
                            },
                            "id": 509,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "addressStorage",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 459,
                            "src": "1379:23:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                              "typeString": "function (bytes32) view external returns (address)"
                            }
                          },
                          "id": 516,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1379:69:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "id": 507,
                        "name": "BurnToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 438,
                        "src": "1369:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_BurnToken_$438_$",
                          "typeString": "type(contract BurnToken)"
                        }
                      },
                      "id": 517,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1369:80:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_BurnToken_$438",
                        "typeString": "contract BurnToken"
                      }
                    },
                    "src": "1361:88:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_BurnToken_$438",
                      "typeString": "contract BurnToken"
                    }
                  },
                  "id": 519,
                  "nodeType": "ExpressionStatement",
                  "src": "1361:88:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 527,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 522,
                              "name": "token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 483,
                              "src": "1471:5:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_BurnToken_$438",
                                "typeString": "contract BurnToken"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_BurnToken_$438",
                                "typeString": "contract BurnToken"
                              }
                            ],
                            "id": 521,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1463:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 523,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1463:14:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 525,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1489:1:3",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 524,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1481:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 526,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1481:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1463:28:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 520,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "1455:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 528,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1455:37:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 529,
                  "nodeType": "ExpressionStatement",
                  "src": "1455:37:3"
                }
              ]
            },
            "documentation": null,
            "id": 531,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 492,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 489,
                  "name": "_database",
                  "nodeType": "VariableDeclaration",
                  "scope": 531,
                  "src": "1242:17:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 488,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1242:7:3",
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
                  "id": 491,
                  "name": "_events",
                  "nodeType": "VariableDeclaration",
                  "scope": 531,
                  "src": "1261:15:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 490,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1261:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1241:36:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 493,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1287:0:3"
            },
            "scope": 738,
            "src": "1230:267:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 568,
              "nodeType": "Block",
              "src": "1962:161:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 550,
                            "name": "_tokenHolder",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 533,
                            "src": "1991:12:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 551,
                            "name": "_amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 535,
                            "src": "2005:7:3",
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
                            "id": 548,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 483,
                            "src": "1976:5:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_BurnToken_$438",
                              "typeString": "contract BurnToken"
                            }
                          },
                          "id": 549,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "burnFrom",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 437,
                          "src": "1976:14:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,uint256) external returns (bool)"
                          }
                        },
                        "id": 552,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1976:37:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 547,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "1968:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 553,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1968:46:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 554,
                  "nodeType": "ExpressionStatement",
                  "src": "1968:46:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "506c6174666f726d20546f6b656e204275726e74",
                        "id": 558,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2039:22:3",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_90d2786f4d225d90a3bfa1292ef81da1ddc5a24a2fa3babf86d23b732bdb2e50",
                          "typeString": "literal_string \"Platform Token Burnt\""
                        },
                        "value": "Platform Token Burnt"
                      },
                      {
                        "argumentTypes": null,
                        "id": 559,
                        "name": "_tokenHolder",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 533,
                        "src": "2063:12:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 560,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28038,
                          "src": "2077:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 561,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2077:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 562,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 535,
                        "src": "2089:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 563,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2098:2:3",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_90d2786f4d225d90a3bfa1292ef81da1ddc5a24a2fa3babf86d23b732bdb2e50",
                          "typeString": "literal_string \"Platform Token Burnt\""
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 555,
                        "name": "events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 487,
                        "src": "2020:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_LogTransaction_$452",
                          "typeString": "contract LogTransaction"
                        }
                      },
                      "id": 557,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transaction",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 451,
                      "src": "2020:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_address_$_t_address_$_t_uint256_$_t_bytes32_$returns$__$",
                        "typeString": "function (string memory,address,address,uint256,bytes32) external"
                      }
                    },
                    "id": 564,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2020:81:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 565,
                  "nodeType": "ExpressionStatement",
                  "src": "2020:81:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 566,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2114:4:3",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 546,
                  "id": 567,
                  "nodeType": "Return",
                  "src": "2107:11:3"
                }
              ]
            },
            "documentation": null,
            "id": 569,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 538,
                      "name": "msg",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28038,
                      "src": "1903:3:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_message",
                        "typeString": "msg"
                      }
                    },
                    "id": 539,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "sender",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "1903:10:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 540,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 537,
                  "name": "onlyPlatformContracts",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 675,
                  "src": "1881:21:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1881:33:3"
              },
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 542,
                    "name": "_tokenHolder",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 533,
                    "src": "1931:12:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 543,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 541,
                  "name": "acceptedState",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 717,
                  "src": "1917:13:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1917:27:3"
              }
            ],
            "name": "burn",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 536,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 533,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 569,
                  "src": "1832:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 532,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1832:7:3",
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
                  "id": 535,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 569,
                  "src": "1854:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 534,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1854:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1831:36:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 546,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 545,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 569,
                  "src": "1956:4:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 544,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1956:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1955:6:3"
            },
            "scope": 738,
            "src": "1818:305:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 603,
              "nodeType": "Block",
              "src": "2611:221:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 588,
                                "name": "_methodID",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 571,
                                "src": "2711:9:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes4",
                                  "typeString": "bytes4"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 589,
                                "name": "_contractAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 573,
                                "src": "2722:16:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes4",
                                  "typeString": "bytes4"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 586,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28025,
                                "src": "2694:3:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 587,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2694:16:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 590,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2694:45:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 585,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28032,
                          "src": "2684:9:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 591,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2684:56:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 592,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 575,
                        "src": "2742:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 582,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 485,
                        "src": "2667:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DB_$481",
                          "typeString": "contract DB"
                        }
                      },
                      "id": 584,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setUint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 480,
                      "src": "2667:16:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_uint256_$returns$__$",
                        "typeString": "function (bytes32,uint256) external"
                      }
                    },
                    "id": 593,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2667:83:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 594,
                  "nodeType": "ExpressionStatement",
                  "src": "2667:83:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 596,
                        "name": "_contractAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 573,
                        "src": "2773:16:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 597,
                        "name": "_methodID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 571,
                        "src": "2791:9:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 598,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 575,
                        "src": "2802:7:3",
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
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 595,
                      "name": "LogFeeAdded",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 733,
                      "src": "2761:11:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_bytes4_$_t_uint256_$returns$__$",
                        "typeString": "function (address,bytes4,uint256)"
                      }
                    },
                    "id": 599,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2761:49:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 600,
                  "nodeType": "EmitStatement",
                  "src": "2756:54:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 601,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2823:4:3",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 581,
                  "id": 602,
                  "nodeType": "Return",
                  "src": "2816:11:3"
                }
              ]
            },
            "documentation": null,
            "id": 604,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 578,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 577,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 656,
                  "src": "2584:9:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2584:9:3"
              }
            ],
            "name": "setFee",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 576,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 571,
                  "name": "_methodID",
                  "nodeType": "VariableDeclaration",
                  "scope": 604,
                  "src": "2513:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 570,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "2513:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 573,
                  "name": "_contractAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 604,
                  "src": "2531:24:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 572,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2531:7:3",
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
                  "id": 575,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 604,
                  "src": "2557:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 574,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2557:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2512:58:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 581,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 580,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 604,
                  "src": "2605:4:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 579,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2605:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2604:6:3"
            },
            "scope": 738,
            "src": "2497:335:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 630,
              "nodeType": "Block",
              "src": "2933:138:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "45524332304275726e65722064657374726f796564",
                        "id": 612,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2958:23:3",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_8b921f6cf39e9494e76c11d0aaae4eaf3f881e8ec6fc31ded6086770cefe6010",
                          "typeString": "literal_string \"ERC20Burner destroyed\""
                        },
                        "value": "ERC20Burner destroyed"
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 614,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 28071,
                            "src": "2991:4:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC20Burner_$738",
                              "typeString": "contract ERC20Burner"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_ERC20Burner_$738",
                              "typeString": "contract ERC20Burner"
                            }
                          ],
                          "id": 613,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "2983:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 615,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2983:13:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 616,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28038,
                          "src": "2998:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 617,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2998:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 619,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 28071,
                              "src": "3018:4:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC20Burner_$738",
                                "typeString": "contract ERC20Burner"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_ERC20Burner_$738",
                                "typeString": "contract ERC20Burner"
                              }
                            ],
                            "id": 618,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "3010:7:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 620,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3010:13:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 621,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3010:21:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 622,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3033:2:3",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_8b921f6cf39e9494e76c11d0aaae4eaf3f881e8ec6fc31ded6086770cefe6010",
                          "typeString": "literal_string \"ERC20Burner destroyed\""
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 609,
                        "name": "events",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 487,
                        "src": "2939:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_LogTransaction_$452",
                          "typeString": "contract LogTransaction"
                        }
                      },
                      "id": 611,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transaction",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 451,
                      "src": "2939:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_address_$_t_address_$_t_uint256_$_t_bytes32_$returns$__$",
                        "typeString": "function (string memory,address,address,uint256,bytes32) external"
                      }
                    },
                    "id": 623,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2939:97:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 624,
                  "nodeType": "ExpressionStatement",
                  "src": "2939:97:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 626,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28038,
                          "src": "3055:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 627,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3055:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 625,
                      "name": "selfdestruct",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28046,
                      "src": "3042:12:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_selfdestruct_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 628,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3042:24:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 629,
                  "nodeType": "ExpressionStatement",
                  "src": "3042:24:3"
                }
              ]
            },
            "documentation": null,
            "id": 631,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 607,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 606,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 656,
                  "src": "2912:9:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2912:9:3"
              }
            ],
            "name": "destroy",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 605,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2907:2:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 608,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2933:0:3"
            },
            "scope": 738,
            "src": "2891:180:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 637,
              "nodeType": "Block",
              "src": "3158:19:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 634,
                      "name": "revert",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28043,
                        28044
                      ],
                      "referencedDeclaration": 28043,
                      "src": "3164:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                        "typeString": "function () pure"
                      }
                    },
                    "id": 635,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3164:8:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 636,
                  "nodeType": "ExpressionStatement",
                  "src": "3164:8:3"
                }
              ]
            },
            "documentation": null,
            "id": 638,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 632,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3134:2:3"
            },
            "payable": true,
            "returnParameters": {
              "id": 633,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3158:0:3"
            },
            "scope": 738,
            "src": "3125:52:3",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 655,
              "nodeType": "Block",
              "src": "3544:97:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "6f776e6572",
                                    "id": 646,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "3606:7:3",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c0",
                                      "typeString": "literal_string \"owner\""
                                    },
                                    "value": "owner"
                                  },
                                  {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 647,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 28038,
                                      "src": "3615:3:3",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 648,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "3615:10:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_stringliteral_02016836a56b71f0d02689e69e326f4f4c1b9057164ef592671cf0d37c8040c0",
                                      "typeString": "literal_string \"owner\""
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 644,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 28025,
                                    "src": "3589:3:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 645,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "3589:16:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 649,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3589:37:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "id": 643,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 28032,
                              "src": "3579:9:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                "typeString": "function () pure returns (bytes32)"
                              }
                            },
                            "id": 650,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3579:48:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 641,
                            "name": "database",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 485,
                            "src": "3558:8:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_DB_$481",
                              "typeString": "contract DB"
                            }
                          },
                          "id": 642,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "boolStorage",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 473,
                          "src": "3558:20:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 651,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3558:70:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 640,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "3550:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 652,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3550:79:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 653,
                  "nodeType": "ExpressionStatement",
                  "src": "3550:79:3"
                },
                {
                  "id": 654,
                  "nodeType": "PlaceholderStatement",
                  "src": "3635:1:3"
                }
              ]
            },
            "documentation": "///////////////////////////////////////////////////////////////////////////////////////////////////////////////",
            "id": 656,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 639,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3544:0:3"
            },
            "src": "3525:116:3",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 674,
              "nodeType": "Block",
              "src": "3754:97:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "hexValue": "636f6e7472616374",
                                    "id": 666,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "string",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "3816:10:3",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_stringliteral_7f6dd79f0020bee2024a097aaa5d32ab7ca31126fa375538de047e7475fa8572",
                                      "typeString": "literal_string \"contract\""
                                    },
                                    "value": "contract"
                                  },
                                  {
                                    "argumentTypes": null,
                                    "id": 667,
                                    "name": "_burner",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 658,
                                    "src": "3828:7:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_stringliteral_7f6dd79f0020bee2024a097aaa5d32ab7ca31126fa375538de047e7475fa8572",
                                      "typeString": "literal_string \"contract\""
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 664,
                                    "name": "abi",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 28025,
                                    "src": "3799:3:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_abi",
                                      "typeString": "abi"
                                    }
                                  },
                                  "id": 665,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "encodePacked",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "3799:16:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                    "typeString": "function () pure returns (bytes memory)"
                                  }
                                },
                                "id": 668,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3799:37:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "id": 663,
                              "name": "keccak256",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 28032,
                              "src": "3789:9:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                "typeString": "function () pure returns (bytes32)"
                              }
                            },
                            "id": 669,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3789:48:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 661,
                            "name": "database",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 485,
                            "src": "3768:8:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_DB_$481",
                              "typeString": "contract DB"
                            }
                          },
                          "id": 662,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "boolStorage",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 473,
                          "src": "3768:20:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 670,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3768:70:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 660,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "3760:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 671,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3760:79:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 672,
                  "nodeType": "ExpressionStatement",
                  "src": "3760:79:3"
                },
                {
                  "id": 673,
                  "nodeType": "PlaceholderStatement",
                  "src": "3845:1:3"
                }
              ]
            },
            "documentation": null,
            "id": 675,
            "name": "onlyPlatformContracts",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 659,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 658,
                  "name": "_burner",
                  "nodeType": "VariableDeclaration",
                  "scope": 675,
                  "src": "3737:15:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 657,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3737:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3736:17:3"
            },
            "src": "3706:145:3",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 716,
              "nodeType": "Block",
              "src": "4016:284:3",
              "statements": [
                {
                  "assignments": [
                    680
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 680,
                      "name": "currentState",
                      "nodeType": "VariableDeclaration",
                      "scope": 717,
                      "src": "4022:20:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 679,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "4022:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 690,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "63757272656e745374617465",
                                "id": 686,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "4096:14:3",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_9edba7d443a506c9abe315859abcdd5883c30f59be404e61e3ea9aa937d74dfd",
                                  "typeString": "literal_string \"currentState\""
                                },
                                "value": "currentState"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_9edba7d443a506c9abe315859abcdd5883c30f59be404e61e3ea9aa937d74dfd",
                                  "typeString": "literal_string \"currentState\""
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 684,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28025,
                                "src": "4079:3:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 685,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "4079:16:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 687,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4079:32:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 683,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 28032,
                          "src": "4069:9:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                            "typeString": "function () pure returns (bytes32)"
                          }
                        },
                        "id": 688,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4069:43:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 681,
                        "name": "database",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 485,
                        "src": "4045:8:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DB_$481",
                          "typeString": "contract DB"
                        }
                      },
                      "id": 682,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "bytes32Storage",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 466,
                      "src": "4045:23:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bytes32_$",
                        "typeString": "function (bytes32) view external returns (bytes32)"
                      }
                    },
                    "id": 689,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4045:68:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4022:91:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 712,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "id": 697,
                                      "name": "currentState",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 680,
                                      "src": "4175:12:3",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 698,
                                      "name": "_investor",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 677,
                                      "src": "4189:9:3",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      },
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 695,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 28025,
                                      "src": "4158:3:3",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 696,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "4158:16:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 699,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "4158:41:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                ],
                                "id": 694,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28032,
                                "src": "4148:9:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                  "typeString": "function () pure returns (bytes32)"
                                }
                              },
                              "id": 700,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4148:52:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 692,
                              "name": "database",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 485,
                              "src": "4127:8:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DB_$481",
                                "typeString": "contract DB"
                              }
                            },
                            "id": 693,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "boolStorage",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 473,
                            "src": "4127:20:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                              "typeString": "function (bytes32) view external returns (bool)"
                            }
                          },
                          "id": 701,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4127:74:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "||",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "hexValue": "69676e6f726553746174654368616e676573",
                                      "id": 707,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "string",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "4253:20:3",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_stringliteral_9c31ef3f26d7dd5e0315a0a955a8a261ec0b0cb89d9d73baf911b538c4c2589c",
                                        "typeString": "literal_string \"ignoreStateChanges\""
                                      },
                                      "value": "ignoreStateChanges"
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 708,
                                      "name": "_investor",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 677,
                                      "src": "4275:9:3",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_stringliteral_9c31ef3f26d7dd5e0315a0a955a8a261ec0b0cb89d9d73baf911b538c4c2589c",
                                        "typeString": "literal_string \"ignoreStateChanges\""
                                      },
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 705,
                                      "name": "abi",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 28025,
                                      "src": "4236:3:3",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_abi",
                                        "typeString": "abi"
                                      }
                                    },
                                    "id": 706,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "memberName": "encodePacked",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "4236:16:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                      "typeString": "function () pure returns (bytes memory)"
                                    }
                                  },
                                  "id": 709,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "4236:49:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_bytes_memory_ptr",
                                    "typeString": "bytes memory"
                                  }
                                ],
                                "id": 704,
                                "name": "keccak256",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28032,
                                "src": "4226:9:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                                  "typeString": "function () pure returns (bytes32)"
                                }
                              },
                              "id": 710,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4226:60:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 702,
                              "name": "database",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 485,
                              "src": "4205:8:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DB_$481",
                                "typeString": "contract DB"
                              }
                            },
                            "id": 703,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "boolStorage",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 473,
                            "src": "4205:20:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                              "typeString": "function (bytes32) view external returns (bool)"
                            }
                          },
                          "id": 711,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4205:82:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "4127:160:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 691,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "4119:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 713,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4119:169:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 714,
                  "nodeType": "ExpressionStatement",
                  "src": "4119:169:3"
                },
                {
                  "id": 715,
                  "nodeType": "PlaceholderStatement",
                  "src": "4294:1:3"
                }
              ]
            },
            "documentation": null,
            "id": 717,
            "name": "acceptedState",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 678,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 677,
                  "name": "_investor",
                  "nodeType": "VariableDeclaration",
                  "scope": 717,
                  "src": "3997:17:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 676,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3997:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3996:19:3"
            },
            "src": "3974:326:3",
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "documentation": "///////////////////////////////////////////////////////////////////////////////////////////////////////////////",
            "id": 725,
            "name": "LogMYBBurned",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 724,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 719,
                  "indexed": false,
                  "name": "_tokenHolder",
                  "nodeType": "VariableDeclaration",
                  "scope": 725,
                  "src": "4613:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 718,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4613:7:3",
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
                  "id": 721,
                  "indexed": false,
                  "name": "_burningContract",
                  "nodeType": "VariableDeclaration",
                  "scope": 725,
                  "src": "4635:24:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 720,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4635:7:3",
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
                  "id": 723,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 725,
                  "src": "4661:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 722,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4661:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4612:62:3"
            },
            "src": "4594:81:3"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 733,
            "name": "LogFeeAdded",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 732,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 727,
                  "indexed": true,
                  "name": "_contractAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 733,
                  "src": "4696:32:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 726,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4696:7:3",
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
                  "id": 729,
                  "indexed": false,
                  "name": "_methodID",
                  "nodeType": "VariableDeclaration",
                  "scope": 733,
                  "src": "4730:16:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 728,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "4730:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 731,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 733,
                  "src": "4748:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 730,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4748:4:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4695:66:3"
            },
            "src": "4678:84:3"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 737,
            "name": "LogTokenAddress",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 736,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 735,
                  "indexed": false,
                  "name": "tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 737,
                  "src": "4787:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 734,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4787:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4786:22:3"
            },
            "src": "4765:44:3"
          }
        ],
        "scope": 739,
        "src": "886:3925:3"
      }
    ],
    "src": "0:4812:3"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.25+commit.59dbf8f1.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.0-beta.0",
  "updatedAt": "2018-12-06T01:19:16.424Z"
}
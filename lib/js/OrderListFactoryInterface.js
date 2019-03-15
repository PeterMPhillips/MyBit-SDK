"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var OrderListFactoryInterface = exports.OrderListFactoryInterface = 
{
  "contractName": "OrderListFactoryInterface",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "admin",
          "type": "address"
        }
      ],
      "name": "newOrdersContract",
      "outputs": [
        {
          "name": "",
          "type": "address"
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
  "source": "pragma solidity ^0.4.24;\n\n\nimport \"./OrderListInterface.sol\";\n\n\ninterface OrderListFactoryInterface {\n    function newOrdersContract(address admin) external returns(OrderListInterface);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/OrderListFactoryInterface.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/OrderListFactoryInterface.sol",
    "exportedSymbols": {
      "OrderListFactoryInterface": [
        16428
      ]
    },
    "id": 16429,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 16419,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:58"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/OrderListInterface.sol",
        "file": "./OrderListInterface.sol",
        "id": 16420,
        "nodeType": "ImportDirective",
        "scope": 16429,
        "sourceUnit": 16531,
        "src": "27:34:58",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 16428,
        "linearizedBaseContracts": [
          16428
        ],
        "name": "OrderListFactoryInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 16427,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "newOrdersContract",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16423,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16422,
                  "name": "admin",
                  "nodeType": "VariableDeclaration",
                  "scope": 16427,
                  "src": "133:13:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16421,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "133:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "132:15:58"
            },
            "payable": false,
            "returnParameters": {
              "id": 16426,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16425,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16427,
                  "src": "165:18:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_OrderListInterface_$16530",
                    "typeString": "contract OrderListInterface"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 16424,
                    "name": "OrderListInterface",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 16530,
                    "src": "165:18:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_OrderListInterface_$16530",
                      "typeString": "contract OrderListInterface"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "164:20:58"
            },
            "scope": 16428,
            "src": "106:79:58",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 16429,
        "src": "64:123:58"
      }
    ],
    "src": "0:188:58"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/OrderListFactoryInterface.sol",
    "exportedSymbols": {
      "OrderListFactoryInterface": [
        16428
      ]
    },
    "id": 16429,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 16419,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:58"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/OrderListInterface.sol",
        "file": "./OrderListInterface.sol",
        "id": 16420,
        "nodeType": "ImportDirective",
        "scope": 16429,
        "sourceUnit": 16531,
        "src": "27:34:58",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 16428,
        "linearizedBaseContracts": [
          16428
        ],
        "name": "OrderListFactoryInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 16427,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "newOrdersContract",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 16423,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16422,
                  "name": "admin",
                  "nodeType": "VariableDeclaration",
                  "scope": 16427,
                  "src": "133:13:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16421,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "133:7:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "132:15:58"
            },
            "payable": false,
            "returnParameters": {
              "id": 16426,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 16425,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 16427,
                  "src": "165:18:58",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_OrderListInterface_$16530",
                    "typeString": "contract OrderListInterface"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 16424,
                    "name": "OrderListInterface",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 16530,
                    "src": "165:18:58",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_OrderListInterface_$16530",
                      "typeString": "contract OrderListInterface"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "164:20:58"
            },
            "scope": 16428,
            "src": "106:79:58",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 16429,
        "src": "64:123:58"
      }
    ],
    "src": "0:188:58"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.2",
  "updatedAt": "2019-03-14T21:46:28.647Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}
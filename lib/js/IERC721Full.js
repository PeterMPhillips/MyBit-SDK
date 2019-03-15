"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var IERC721Full = exports.IERC721Full = 
{
  "contractName": "IERC721Full",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
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
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "name": "operator",
          "type": "address"
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
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
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
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "name": "tokenId",
          "type": "uint256"
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
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "name": "owner",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "balance",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
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
          "name": "operator",
          "type": "address"
        },
        {
          "name": "_approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
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
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.24;\n\nimport \"./IERC721.sol\";\nimport \"./IERC721Enumerable.sol\";\nimport \"./IERC721Metadata.sol\";\n\n/**\n * @title ERC-721 Non-Fungible Token Standard, full implementation interface\n * @dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md\n */\ncontract IERC721Full is IERC721, IERC721Enumerable, IERC721Metadata {\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/IERC721Full.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/IERC721Full.sol",
    "exportedSymbols": {
      "IERC721Full": [
        34869
      ]
    },
    "id": 34870,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 34859,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:116"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/IERC721.sol",
        "file": "./IERC721.sol",
        "id": 34860,
        "nodeType": "ImportDirective",
        "scope": 34870,
        "sourceUnit": 34831,
        "src": "26:23:116",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/IERC721Enumerable.sol",
        "file": "./IERC721Enumerable.sol",
        "id": 34861,
        "nodeType": "ImportDirective",
        "scope": 34870,
        "sourceUnit": 34858,
        "src": "50:33:116",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/IERC721Metadata.sol",
        "file": "./IERC721Metadata.sol",
        "id": 34862,
        "nodeType": "ImportDirective",
        "scope": 34870,
        "sourceUnit": 34893,
        "src": "84:31:116",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 34863,
              "name": "IERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 34830,
              "src": "299:7:116",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC721_$34830",
                "typeString": "contract IERC721"
              }
            },
            "id": 34864,
            "nodeType": "InheritanceSpecifier",
            "src": "299:7:116"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 34865,
              "name": "IERC721Enumerable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 34857,
              "src": "308:17:116",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC721Enumerable_$34857",
                "typeString": "contract IERC721Enumerable"
              }
            },
            "id": 34866,
            "nodeType": "InheritanceSpecifier",
            "src": "308:17:116"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 34867,
              "name": "IERC721Metadata",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 34892,
              "src": "327:15:116",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC721Metadata_$34892",
                "typeString": "contract IERC721Metadata"
              }
            },
            "id": 34868,
            "nodeType": "InheritanceSpecifier",
            "src": "327:15:116"
          }
        ],
        "contractDependencies": [
          8725,
          34830,
          34857,
          34892
        ],
        "contractKind": "contract",
        "documentation": "@title ERC-721 Non-Fungible Token Standard, full implementation interface\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": false,
        "id": 34869,
        "linearizedBaseContracts": [
          34869,
          34892,
          34857,
          34830,
          8725
        ],
        "name": "IERC721Full",
        "nodeType": "ContractDefinition",
        "nodes": [],
        "scope": 34870,
        "src": "275:71:116"
      }
    ],
    "src": "0:347:116"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/IERC721Full.sol",
    "exportedSymbols": {
      "IERC721Full": [
        34869
      ]
    },
    "id": 34870,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 34859,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:116"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/IERC721.sol",
        "file": "./IERC721.sol",
        "id": 34860,
        "nodeType": "ImportDirective",
        "scope": 34870,
        "sourceUnit": 34831,
        "src": "26:23:116",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/IERC721Enumerable.sol",
        "file": "./IERC721Enumerable.sol",
        "id": 34861,
        "nodeType": "ImportDirective",
        "scope": 34870,
        "sourceUnit": 34858,
        "src": "50:33:116",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/IERC721Metadata.sol",
        "file": "./IERC721Metadata.sol",
        "id": 34862,
        "nodeType": "ImportDirective",
        "scope": 34870,
        "sourceUnit": 34893,
        "src": "84:31:116",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 34863,
              "name": "IERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 34830,
              "src": "299:7:116",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC721_$34830",
                "typeString": "contract IERC721"
              }
            },
            "id": 34864,
            "nodeType": "InheritanceSpecifier",
            "src": "299:7:116"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 34865,
              "name": "IERC721Enumerable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 34857,
              "src": "308:17:116",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC721Enumerable_$34857",
                "typeString": "contract IERC721Enumerable"
              }
            },
            "id": 34866,
            "nodeType": "InheritanceSpecifier",
            "src": "308:17:116"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 34867,
              "name": "IERC721Metadata",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 34892,
              "src": "327:15:116",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC721Metadata_$34892",
                "typeString": "contract IERC721Metadata"
              }
            },
            "id": 34868,
            "nodeType": "InheritanceSpecifier",
            "src": "327:15:116"
          }
        ],
        "contractDependencies": [
          8725,
          34830,
          34857,
          34892
        ],
        "contractKind": "contract",
        "documentation": "@title ERC-721 Non-Fungible Token Standard, full implementation interface\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": false,
        "id": 34869,
        "linearizedBaseContracts": [
          34869,
          34892,
          34857,
          34830,
          8725
        ],
        "name": "IERC721Full",
        "nodeType": "ContractDefinition",
        "nodes": [],
        "scope": 34870,
        "src": "275:71:116"
      }
    ],
    "src": "0:347:116"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.2",
  "updatedAt": "2019-03-14T21:46:28.876Z",
  "devdoc": {
    "methods": {
      "supportsInterface(bytes4)": {
        "details": "Interface identification is specified in ERC-165. This function uses less than 30,000 gas.",
        "params": {
          "interfaceId": "The interface identifier, as specified in ERC-165"
        }
      }
    },
    "title": "ERC-721 Non-Fungible Token Standard, full implementation interface"
  },
  "userdoc": {
    "methods": {
      "supportsInterface(bytes4)": {
        "notice": "Query if a contract implements an interface"
      }
    }
  }
}
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var VolumeImbalanceRecorder = exports.VolumeImbalanceRecorder = 
{
  "contractName": "VolumeImbalanceRecorder",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "alerter",
          "type": "address"
        }
      ],
      "name": "removeAlerter",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "pendingAdmin",
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
      "name": "getOperators",
      "outputs": [
        {
          "name": "",
          "type": "address[]"
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
          "name": "token",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint256"
        },
        {
          "name": "sendTo",
          "type": "address"
        }
      ],
      "name": "withdrawToken",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newAlerter",
          "type": "address"
        }
      ],
      "name": "addAlerter",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newAdmin",
          "type": "address"
        }
      ],
      "name": "transferAdmin",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "claimAdmin",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newAdmin",
          "type": "address"
        }
      ],
      "name": "transferAdminQuickly",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getAlerters",
      "outputs": [
        {
          "name": "",
          "type": "address[]"
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
          "name": "newOperator",
          "type": "address"
        }
      ],
      "name": "addOperator",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        },
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "tokenImbalanceData",
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
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "removeOperator",
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
        },
        {
          "name": "sendTo",
          "type": "address"
        }
      ],
      "name": "withdrawEther",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "admin",
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
          "name": "_admin",
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
          "name": "token",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "sendTo",
          "type": "address"
        }
      ],
      "name": "TokenWithdraw",
      "type": "event"
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
          "name": "sendTo",
          "type": "address"
        }
      ],
      "name": "EtherWithdraw",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "pendingAdmin",
          "type": "address"
        }
      ],
      "name": "TransferAdminPending",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "newAdmin",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "previousAdmin",
          "type": "address"
        }
      ],
      "name": "AdminClaimed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "newAlerter",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "isAdd",
          "type": "bool"
        }
      ],
      "name": "AlerterAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "newOperator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "isAdd",
          "type": "bool"
        }
      ],
      "name": "OperatorAdded",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "token",
          "type": "address"
        },
        {
          "name": "minimalRecordResolution",
          "type": "uint256"
        },
        {
          "name": "maxPerBlockImbalance",
          "type": "uint256"
        },
        {
          "name": "maxTotalImbalance",
          "type": "uint256"
        }
      ],
      "name": "setTokenControlInfo",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "token",
          "type": "address"
        }
      ],
      "name": "getTokenControlInfo",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint256"
        },
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
  "bytecode": "0x608060405234801561001057600080fd5b50604051602080610e36833981016040525160008054600160a060020a03191633179055600160a060020a038116151561004957600080fd5b60008054600160a060020a03909216600160a060020a0319909216919091179055610dbd806100796000396000f3006080604052600436106100e55763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166301a12fd381146100ea578063267822471461010d57806327a099d81461013e5780633ccdbb28146101a3578063408ee7fe146101ce57806375829def146101ef57806377f50f97146102105780637acc8678146102255780637c423f54146102465780639870d7fe1461025b578063a80c609e1461027c578063ac8a584a146102b2578063bfee3569146102d3578063ce56c454146102fd578063e7d4fd9114610321578063f851a44014610360575b600080fd5b3480156100f657600080fd5b5061010b600160a060020a0360043516610375565b005b34801561011957600080fd5b506101226104de565b60408051600160a060020a039092168252519081900360200190f35b34801561014a57600080fd5b506101536104ed565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561018f578181015183820152602001610177565b505050509050019250505060405180910390f35b3480156101af57600080fd5b5061010b600160a060020a036004358116906024359060443516610550565b3480156101da57600080fd5b5061010b600160a060020a0360043516610669565b3480156101fb57600080fd5b5061010b600160a060020a036004351661075f565b34801561021c57600080fd5b5061010b6107ec565b34801561023157600080fd5b5061010b600160a060020a0360043516610876565b34801561025257600080fd5b50610153610948565b34801561026757600080fd5b5061010b600160a060020a03600435166109a8565b34801561028857600080fd5b506102a0600160a060020a0360043516602435610a9e565b60408051918252519081900360200190f35b3480156102be57600080fd5b5061010b600160a060020a0360043516610abb565b3480156102df57600080fd5b5061010b600160a060020a0360043516602435604435606435610c20565b34801561030957600080fd5b5061010b600435600160a060020a0360243516610c7e565b34801561032d57600080fd5b50610342600160a060020a0360043516610d13565b60408051938452602084019290925282820152519081900360600190f35b34801561036c57600080fd5b50610122610d3b565b60008054600160a060020a0316331461038d57600080fd5b600160a060020a03821660009081526003602052604090205460ff1615156103b457600080fd5b50600160a060020a0381166000908152600360205260408120805460ff191690555b6005548110156104da5781600160a060020a03166005828154811015156103f957fe5b600091825260209091200154600160a060020a031614156104d25760058054600019810190811061042657fe5b60009182526020909120015460058054600160a060020a03909216918390811061044c57fe5b60009182526020909120018054600160a060020a031916600160a060020a03929092169190911790556005805490610488906000198301610d4a565b5060408051600160a060020a03841681526000602082015281517f5611bf3e417d124f97bf2c788843ea8bb502b66079fbee02158ef30b172cb762929181900390910190a16104da565b6001016103d6565b5050565b600154600160a060020a031681565b6060600480548060200260200160405190810160405280929190818152602001828054801561054557602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311610527575b505050505090505b90565b600054600160a060020a0316331461056757600080fd5b82600160a060020a031663a9059cbb82846040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050602060405180830381600087803b1580156105e357600080fd5b505af11580156105f7573d6000803e3d6000fd5b505050506040513d602081101561060d57600080fd5b5051151561061a57600080fd5b60408051600160a060020a0380861682526020820185905283168183015290517f72cb8a894ddb372ceec3d2a7648d86f17d5a15caae0e986c53109b8a9a9385e69181900360600190a1505050565b600054600160a060020a0316331461068057600080fd5b600160a060020a03811660009081526003602052604090205460ff16156106a657600080fd5b6005546032116106b557600080fd5b60408051600160a060020a03831681526001602082015281517f5611bf3e417d124f97bf2c788843ea8bb502b66079fbee02158ef30b172cb762929181900390910190a1600160a060020a03166000818152600360205260408120805460ff191660019081179091556005805491820181559091527f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db0018054600160a060020a0319169091179055565b600054600160a060020a0316331461077657600080fd5b600160a060020a038116151561078b57600080fd5b60015460408051600160a060020a039092168252517f3b81caf78fa51ecbc8acb482fd7012a277b428d9b80f9d156e8a54107496cc409181900360200190a160018054600160a060020a031916600160a060020a0392909216919091179055565b600154600160a060020a0316331461080357600080fd5b60015460005460408051600160a060020a03938416815292909116602083015280517f65da1cfc2c2e81576ad96afb24a581f8e109b7a403b35cbd3243a1c99efdb9ed9281900390910190a16001805460008054600160a060020a0319908116600160a060020a03841617909155169055565b600054600160a060020a0316331461088d57600080fd5b600160a060020a03811615156108a257600080fd5b60408051600160a060020a038316815290517f3b81caf78fa51ecbc8acb482fd7012a277b428d9b80f9d156e8a54107496cc409181900360200190a160005460408051600160a060020a038085168252909216602083015280517f65da1cfc2c2e81576ad96afb24a581f8e109b7a403b35cbd3243a1c99efdb9ed9281900390910190a160008054600160a060020a031916600160a060020a0392909216919091179055565b6060600580548060200260200160405190810160405280929190818152602001828054801561054557602002820191906000526020600020908154600160a060020a03168152600190910190602001808311610527575050505050905090565b600054600160a060020a031633146109bf57600080fd5b600160a060020a03811660009081526002602052604090205460ff16156109e557600080fd5b6004546032116109f457600080fd5b60408051600160a060020a03831681526001602082015281517f091a7a4b85135fdd7e8dbc18b12fabe5cc191ea867aa3c2e1a24a102af61d58b929181900390910190a1600160a060020a03166000818152600260205260408120805460ff191660019081179091556004805491820181559091527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b018054600160a060020a0319169091179055565b600760209081526000928352604080842090915290825290205481565b60008054600160a060020a03163314610ad357600080fd5b600160a060020a03821660009081526002602052604090205460ff161515610afa57600080fd5b50600160a060020a0381166000908152600260205260408120805460ff191690555b6004548110156104da5781600160a060020a0316600482815481101515610b3f57fe5b600091825260209091200154600160a060020a03161415610c1857600480546000198101908110610b6c57fe5b60009182526020909120015460048054600160a060020a039092169183908110610b9257fe5b60009182526020909120018054600160a060020a031916600160a060020a0392909216919091179055600480546000190190610bce9082610d4a565b5060408051600160a060020a03841681526000602082015281517f091a7a4b85135fdd7e8dbc18b12fabe5cc191ea867aa3c2e1a24a102af61d58b929181900390910190a16104da565b600101610b1c565b600054600160a060020a03163314610c3757600080fd5b604080516060810182529384526020808501938452848201928352600160a060020a0390951660009081526006909552909320915182555160018201559051600290910155565b600054600160a060020a03163314610c9557600080fd5b604051600160a060020a0382169083156108fc029084906000818181858888f19350505050158015610ccb573d6000803e3d6000fd5b5060408051838152600160a060020a038316602082015281517fec47e7ed86c86774d1a72c19f35c639911393fe7c1a34031fdbd260890da90de929181900390910190a15050565b600160a060020a03166000908152600660205260409020805460018201546002909201549092565b600054600160a060020a031681565b815481835581811115610d6e57600083815260209020610d6e918101908301610d73565b505050565b61054d91905b80821115610d8d5760008155600101610d79565b50905600a165627a7a723058206b0e020df03faf3a0df46a57a9b3e2da806d59d19db9229d30b79ecc29ed93750029",
  "deployedBytecode": "0x6080604052600436106100e55763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166301a12fd381146100ea578063267822471461010d57806327a099d81461013e5780633ccdbb28146101a3578063408ee7fe146101ce57806375829def146101ef57806377f50f97146102105780637acc8678146102255780637c423f54146102465780639870d7fe1461025b578063a80c609e1461027c578063ac8a584a146102b2578063bfee3569146102d3578063ce56c454146102fd578063e7d4fd9114610321578063f851a44014610360575b600080fd5b3480156100f657600080fd5b5061010b600160a060020a0360043516610375565b005b34801561011957600080fd5b506101226104de565b60408051600160a060020a039092168252519081900360200190f35b34801561014a57600080fd5b506101536104ed565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561018f578181015183820152602001610177565b505050509050019250505060405180910390f35b3480156101af57600080fd5b5061010b600160a060020a036004358116906024359060443516610550565b3480156101da57600080fd5b5061010b600160a060020a0360043516610669565b3480156101fb57600080fd5b5061010b600160a060020a036004351661075f565b34801561021c57600080fd5b5061010b6107ec565b34801561023157600080fd5b5061010b600160a060020a0360043516610876565b34801561025257600080fd5b50610153610948565b34801561026757600080fd5b5061010b600160a060020a03600435166109a8565b34801561028857600080fd5b506102a0600160a060020a0360043516602435610a9e565b60408051918252519081900360200190f35b3480156102be57600080fd5b5061010b600160a060020a0360043516610abb565b3480156102df57600080fd5b5061010b600160a060020a0360043516602435604435606435610c20565b34801561030957600080fd5b5061010b600435600160a060020a0360243516610c7e565b34801561032d57600080fd5b50610342600160a060020a0360043516610d13565b60408051938452602084019290925282820152519081900360600190f35b34801561036c57600080fd5b50610122610d3b565b60008054600160a060020a0316331461038d57600080fd5b600160a060020a03821660009081526003602052604090205460ff1615156103b457600080fd5b50600160a060020a0381166000908152600360205260408120805460ff191690555b6005548110156104da5781600160a060020a03166005828154811015156103f957fe5b600091825260209091200154600160a060020a031614156104d25760058054600019810190811061042657fe5b60009182526020909120015460058054600160a060020a03909216918390811061044c57fe5b60009182526020909120018054600160a060020a031916600160a060020a03929092169190911790556005805490610488906000198301610d4a565b5060408051600160a060020a03841681526000602082015281517f5611bf3e417d124f97bf2c788843ea8bb502b66079fbee02158ef30b172cb762929181900390910190a16104da565b6001016103d6565b5050565b600154600160a060020a031681565b6060600480548060200260200160405190810160405280929190818152602001828054801561054557602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311610527575b505050505090505b90565b600054600160a060020a0316331461056757600080fd5b82600160a060020a031663a9059cbb82846040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050602060405180830381600087803b1580156105e357600080fd5b505af11580156105f7573d6000803e3d6000fd5b505050506040513d602081101561060d57600080fd5b5051151561061a57600080fd5b60408051600160a060020a0380861682526020820185905283168183015290517f72cb8a894ddb372ceec3d2a7648d86f17d5a15caae0e986c53109b8a9a9385e69181900360600190a1505050565b600054600160a060020a0316331461068057600080fd5b600160a060020a03811660009081526003602052604090205460ff16156106a657600080fd5b6005546032116106b557600080fd5b60408051600160a060020a03831681526001602082015281517f5611bf3e417d124f97bf2c788843ea8bb502b66079fbee02158ef30b172cb762929181900390910190a1600160a060020a03166000818152600360205260408120805460ff191660019081179091556005805491820181559091527f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db0018054600160a060020a0319169091179055565b600054600160a060020a0316331461077657600080fd5b600160a060020a038116151561078b57600080fd5b60015460408051600160a060020a039092168252517f3b81caf78fa51ecbc8acb482fd7012a277b428d9b80f9d156e8a54107496cc409181900360200190a160018054600160a060020a031916600160a060020a0392909216919091179055565b600154600160a060020a0316331461080357600080fd5b60015460005460408051600160a060020a03938416815292909116602083015280517f65da1cfc2c2e81576ad96afb24a581f8e109b7a403b35cbd3243a1c99efdb9ed9281900390910190a16001805460008054600160a060020a0319908116600160a060020a03841617909155169055565b600054600160a060020a0316331461088d57600080fd5b600160a060020a03811615156108a257600080fd5b60408051600160a060020a038316815290517f3b81caf78fa51ecbc8acb482fd7012a277b428d9b80f9d156e8a54107496cc409181900360200190a160005460408051600160a060020a038085168252909216602083015280517f65da1cfc2c2e81576ad96afb24a581f8e109b7a403b35cbd3243a1c99efdb9ed9281900390910190a160008054600160a060020a031916600160a060020a0392909216919091179055565b6060600580548060200260200160405190810160405280929190818152602001828054801561054557602002820191906000526020600020908154600160a060020a03168152600190910190602001808311610527575050505050905090565b600054600160a060020a031633146109bf57600080fd5b600160a060020a03811660009081526002602052604090205460ff16156109e557600080fd5b6004546032116109f457600080fd5b60408051600160a060020a03831681526001602082015281517f091a7a4b85135fdd7e8dbc18b12fabe5cc191ea867aa3c2e1a24a102af61d58b929181900390910190a1600160a060020a03166000818152600260205260408120805460ff191660019081179091556004805491820181559091527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b018054600160a060020a0319169091179055565b600760209081526000928352604080842090915290825290205481565b60008054600160a060020a03163314610ad357600080fd5b600160a060020a03821660009081526002602052604090205460ff161515610afa57600080fd5b50600160a060020a0381166000908152600260205260408120805460ff191690555b6004548110156104da5781600160a060020a0316600482815481101515610b3f57fe5b600091825260209091200154600160a060020a03161415610c1857600480546000198101908110610b6c57fe5b60009182526020909120015460048054600160a060020a039092169183908110610b9257fe5b60009182526020909120018054600160a060020a031916600160a060020a0392909216919091179055600480546000190190610bce9082610d4a565b5060408051600160a060020a03841681526000602082015281517f091a7a4b85135fdd7e8dbc18b12fabe5cc191ea867aa3c2e1a24a102af61d58b929181900390910190a16104da565b600101610b1c565b600054600160a060020a03163314610c3757600080fd5b604080516060810182529384526020808501938452848201928352600160a060020a0390951660009081526006909552909320915182555160018201559051600290910155565b600054600160a060020a03163314610c9557600080fd5b604051600160a060020a0382169083156108fc029084906000818181858888f19350505050158015610ccb573d6000803e3d6000fd5b5060408051838152600160a060020a038316602082015281517fec47e7ed86c86774d1a72c19f35c639911393fe7c1a34031fdbd260890da90de929181900390910190a15050565b600160a060020a03166000908152600660205260409020805460018201546002909201549092565b600054600160a060020a031681565b815481835581811115610d6e57600083815260209020610d6e918101908301610d73565b505050565b61054d91905b80821115610d8d5760008155600101610d79565b50905600a165627a7a723058206b0e020df03faf3a0df46a57a9b3e2da806d59d19db9229d30b79ecc29ed93750029",
  "sourceMap": "91:7876:67:-;;;851:105;8:9:-1;5:2;;;30:1;27;20:12;5:2;851:105:67;;;;;;;;;;;;;368:5:62;:18;;-1:-1:-1;;;;;;368:18:62;376:10;368:18;;;-1:-1:-1;;;;;904:20:67;;;;896:29;;;;;;935:5;:14;;-1:-1:-1;;;;;935:14:67;;;-1:-1:-1;;;;;;935:14:67;;;;;;;;;91:7876;;;;;;",
  "deployedSourceMap": "91:7876:67:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2392:456:62;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2392:456:62;-1:-1:-1;;;;;2392:456:62;;;;;;;85:27;;8:9:-1;5:2;;;30:1;27;20:12;5:2;85:27:62;;;;;;;;-1:-1:-1;;;;;85:27:62;;;;;;;;;;;;;;656:96;;8:9:-1;5:2;;;30:1;27;20:12;5:2;656:96:62;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;656:96:62;;;;;;;;;;;;;;;;;563:191:70;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;563:191:70;-1:-1:-1;;;;;563:191:70;;;;;;;;;;;;;2080:306:62;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2080:306:62;-1:-1:-1;;;;;2080:306:62;;;;;1060:188;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1060:188:62;-1:-1:-1;;;;;1060:188:62;;;;;1822:194;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1822:194:62;;;;1423:228;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1423:228:62;-1:-1:-1;;;;;1423:228:62;;;;;758:94;;8:9:-1;5:2;;;30:1;27;20:12;5:2;758:94:62;;;;2913:317;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2913:317:62;-1:-1:-1;;;;;2913:317:62;;;;;779:65:67;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;779:65:67;-1:-1:-1;;;;;779:65:67;;;;;;;;;;;;;;;;;;;;;;;3236:474:62;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;3236:474:62;-1:-1:-1;;;;;3236:474:62;;;;;962:397:67;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;962:397:67;-1:-1:-1;;;;;962:397:67;;;;;;;;;;;859:155:70;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;859:155:70;;;-1:-1:-1;;;;;859:155:70;;;;;1365:274:67;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1365:274:67;-1:-1:-1;;;;;1365:274:67;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;59:20:62;;8:9:-1;5:2;;;30:1;27;20:12;5:2;59:20:62;;;;2392:456;2537:6;452:5;;-1:-1:-1;;;;;452:5:62;438:10;:19;430:28;;;;;;-1:-1:-1;;;;;2468:17:62;;;;;;:8;:17;;;;;;;;2460:26;;;;;;;;-1:-1:-1;;;;;;2496:17:62;;2516:5;2496:17;;;:8;:17;;;;;:25;;-1:-1:-1;;2496:25:62;;;2532:310;2553:13;:20;2549:24;;2532:310;;;2618:7;-1:-1:-1;;;;;2598:27:62;:13;2612:1;2598:16;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2598:16:62;:27;2594:238;;;2664:13;2678:20;;-1:-1:-1;;2678:24:62;;;2664:39;;;;;;;;;;;;;;;;2645:13;:16;;-1:-1:-1;;;;;2664:39:62;;;;2659:1;;2645:16;;;;;;;;;;;;;;;:58;;-1:-1:-1;;;;;;2645:58:62;-1:-1:-1;;;;;2645:58:62;;;;;;;;;;2721:13;:22;;;;;-1:-1:-1;;2721:22:62;;;:::i;:::-;-1:-1:-1;2766:28:62;;;-1:-1:-1;;;;;2766:28:62;;;;2788:5;2766:28;;;;;;;;;;;;;;;;;2812:5;;2594:238;2575:3;;2532:310;;;2392:456;;:::o;85:27::-;;;-1:-1:-1;;;;;85:27:62;;:::o;656:96::-;703:9;731:14;724:21;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;724:21:62;;;;;;;;;;;;;;;;;;;;;;;656:96;;:::o;563:191:70:-;452:5:62;;-1:-1:-1;;;;;452:5:62;438:10;:19;430:28;;;;;;665:5:70;-1:-1:-1;;;;;665:14:70;;680:6;688;665:30;;;;;;;;;;;;;-1:-1:-1;;;;;665:30:70;-1:-1:-1;;;;;665:30:70;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;665:30:70;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;665:30:70;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;665:30:70;657:39;;;;;;;;711:36;;;-1:-1:-1;;;;;711:36:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;563:191;;;:::o;2080:306:62:-;452:5;;-1:-1:-1;;;;;452:5:62;438:10;:19;430:28;;;;;;-1:-1:-1;;;;;2156:20:62;;;;;;:8;:20;;;;;;;;2155:21;2147:30;;;;;;2218:13;:20;328:2;-1:-1:-1;2210:46:62;;;;;;2272:30;;;-1:-1:-1;;;;;2272:30:62;;;;2297:4;2272:30;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2312:20:62;;;;;:8;:20;;;;;:27;;-1:-1:-1;;2312:27:62;2335:4;2312:27;;;;;;2349:13;27:10:-1;;23:18;;;45:23;;2349:30:62;;;;;;;-1:-1:-1;;;;;;2349:30:62;;;;;;2080:306::o;1060:188::-;452:5;;-1:-1:-1;;;;;452:5:62;438:10;:19;430:28;;;;;;-1:-1:-1;;;;;1136:22:62;;;;1128:31;;;;;;1195:12;;1174:34;;;-1:-1:-1;;;;;1195:12:62;;;1174:34;;;;;;;;;;;;1218:12;:23;;-1:-1:-1;;;;;;1218:23:62;-1:-1:-1;;;;;1218:23:62;;;;;;;;;;1060:188::o;1822:194::-;1869:12;;-1:-1:-1;;;;;1869:12:62;1885:10;1869:26;1861:35;;;;;;1924:12;;;1938:5;1911:33;;;-1:-1:-1;;;;;1924:12:62;;;1911:33;;1938:5;;;;1911:33;;;;;;;;;;;;;;;;1962:12;;;;1954:20;;-1:-1:-1;;;;;;1954:20:62;;;-1:-1:-1;;;;;1962:12:62;;1954:20;;;;1984:25;;;1822:194::o;1423:228::-;452:5;;-1:-1:-1;;;;;452:5:62;438:10;:19;430:28;;;;;;-1:-1:-1;;;;;1506:22:62;;;;1498:31;;;;;;1544:30;;;-1:-1:-1;;;;;1544:30:62;;;;;;;;;;;;;;;1612:5;;1589:29;;;-1:-1:-1;;;;;1589:29:62;;;;;1612:5;;;1589:29;;;;;;;;;;;;;;;;1628:5;:16;;-1:-1:-1;;;;;;1628:16:62;-1:-1:-1;;;;;1628:16:62;;;;;;;;;;1423:228::o;758:94::-;804:9;832:13;825:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;825:20:62;;;;;;;;;;;;;;;;;;;;;;758:94;:::o;2913:317::-;452:5;;-1:-1:-1;;;;;452:5:62;438:10;:19;430:28;;;;;;-1:-1:-1;;;;;2991:22:62;;;;;;:9;:22;;;;;;;;2990:23;2982:32;;;;;;3055:14;:21;328:2;-1:-1:-1;3047:47:62;;;;;;3110:32;;;-1:-1:-1;;;;;3110:32:62;;;;3137:4;3110:32;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;3152:22:62;;;;;:9;:22;;;;;:29;;-1:-1:-1;;3152:29:62;3177:4;3152:29;;;;;;3191:14;27:10:-1;;23:18;;;45:23;;3191:32:62;;;;;;;-1:-1:-1;;;;;;3191:32:62;;;;;;2913:317::o;779:65:67:-;;;;;;;;;;;;;;;;;;;;;;;;:::o;3236:474:62:-;3387:6;452:5;;-1:-1:-1;;;;;452:5:62;438:10;:19;430:28;;;;;;-1:-1:-1;;;;;3314:19:62;;;;;;:9;:19;;;;;;;;3306:28;;;;;;;;-1:-1:-1;;;;;;3344:19:62;;3366:5;3344:19;;;:9;:19;;;;;:27;;-1:-1:-1;;3344:27:62;;;3382:322;3403:14;:21;3399:25;;3382:322;;;3470:8;-1:-1:-1;;;;;3449:29:62;:14;3464:1;3449:17;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;3449:17:62;:29;3445:249;;;3518:14;3533:21;;-1:-1:-1;;3533:25:62;;;3518:41;;;;;;;;;;;;;;;;3498:14;:17;;-1:-1:-1;;;;;3518:41:62;;;;3513:1;;3498:17;;;;;;;;;;;;;;;:61;;-1:-1:-1;;;;;;3498:61:62;-1:-1:-1;;;;;3498:61:62;;;;;;;;;;3577:14;:26;;-1:-1:-1;;3577:26:62;;;;;;:::i;:::-;-1:-1:-1;3626:30:62;;;-1:-1:-1;;;;;3626:30:62;;;;3650:5;3626:30;;;;;;;;;;;;;;;;;3674:5;;3445:249;3426:3;;3382:322;;962:397:67;452:5:62;;-1:-1:-1;;;;;452:5:62;438:10;:19;430:28;;;;;;1208:144:67;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1170:23:67;;;-1:-1:-1;1170:23:67;;;:16;:23;;;;;;:182;;;;;;;;;;;;;;;;962:397::o;859:155:70:-;452:5:62;;-1:-1:-1;;;;;452:5:62;438:10;:19;430:28;;;;;;940:23:70;;-1:-1:-1;;;;;940:15:70;;;:23;;;;;956:6;;940:23;;;;956:6;940:15;:23;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;-1:-1;978:29:70;;;;;;-1:-1:-1;;;;;978:29:70;;;;;;;;;;;;;;;;;;;859:155;;:::o;1365:274:67:-;-1:-1:-1;;;;;1463:23:67;1427:4;1463:23;;;:16;:23;;;;;:47;;1528:44;;;;1590:41;;;;;1463:47;;1365:274::o;59:20:62:-;;;-1:-1:-1;;;;;59:20:62;;:::o;91:7876:67:-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;",
  "source": "pragma solidity ^0.4.24;\n\nimport \"../interfaces/ERC20.sol\";\nimport \"./Withdrawable.sol\";\n\n\ncontract VolumeImbalanceRecorder is Withdrawable {\n\n    uint constant internal SLIDING_WINDOW_SIZE = 5;\n    uint constant internal POW_2_64 = 2 ** 64;\n\n    struct TokenControlInfo {\n        uint minimalRecordResolution; // can be roughly 1 cent\n        uint maxPerBlockImbalance; // in twei resolution\n        uint maxTotalImbalance; // max total imbalance (between rate updates)\n                            // before halting trade\n    }\n\n    mapping(address => TokenControlInfo) internal tokenControlInfo;\n\n    struct TokenImbalanceData {\n        int  lastBlockBuyUnitsImbalance;\n        uint lastBlock;\n\n        int  totalBuyUnitsImbalance;\n        uint lastRateUpdateBlock;\n    }\n\n    mapping(address => mapping(uint=>uint)) public tokenImbalanceData;\n\n    constructor(address _admin) public {\n        require(_admin != address(0));\n        admin = _admin;\n    }\n\n    function setTokenControlInfo(\n        ERC20 token,\n        uint minimalRecordResolution,\n        uint maxPerBlockImbalance,\n        uint maxTotalImbalance\n    )\n        public\n        onlyAdmin\n    {\n        tokenControlInfo[token] =\n            TokenControlInfo(\n                minimalRecordResolution,\n                maxPerBlockImbalance,\n                maxTotalImbalance\n            );\n    }\n\n    function getTokenControlInfo(ERC20 token) public view returns(uint, uint, uint) {\n        return (tokenControlInfo[token].minimalRecordResolution,\n                tokenControlInfo[token].maxPerBlockImbalance,\n                tokenControlInfo[token].maxTotalImbalance);\n    }\n\n    function addImbalance(\n        ERC20 token,\n        int buyAmount,\n        uint rateUpdateBlock,\n        uint currentBlock\n    )\n        internal\n    {\n        uint currentBlockIndex = currentBlock % SLIDING_WINDOW_SIZE;\n        int recordedBuyAmount = int(buyAmount / int(tokenControlInfo[token].minimalRecordResolution));\n\n        int prevImbalance = 0;\n\n        TokenImbalanceData memory currentBlockData =\n            decodeTokenImbalanceData(tokenImbalanceData[token][currentBlockIndex]);\n\n        // first scenario - this is not the first tx in the current block\n        if (currentBlockData.lastBlock == currentBlock) {\n            if (uint(currentBlockData.lastRateUpdateBlock) == rateUpdateBlock) {\n                // just increase imbalance\n                currentBlockData.lastBlockBuyUnitsImbalance += recordedBuyAmount;\n                currentBlockData.totalBuyUnitsImbalance += recordedBuyAmount;\n            } else {\n                // imbalance was changed in the middle of the block\n                prevImbalance = getImbalanceInRange(token, rateUpdateBlock, currentBlock);\n                currentBlockData.totalBuyUnitsImbalance = int(prevImbalance) + recordedBuyAmount;\n                currentBlockData.lastBlockBuyUnitsImbalance += recordedBuyAmount;\n                currentBlockData.lastRateUpdateBlock = uint(rateUpdateBlock);\n            }\n        } else {\n            // first tx in the current block\n            int currentBlockImbalance;\n            (prevImbalance, currentBlockImbalance) = getImbalanceSinceRateUpdate(token, rateUpdateBlock, currentBlock);\n\n            currentBlockData.lastBlockBuyUnitsImbalance = recordedBuyAmount;\n            currentBlockData.lastBlock = uint(currentBlock);\n            currentBlockData.lastRateUpdateBlock = uint(rateUpdateBlock);\n            currentBlockData.totalBuyUnitsImbalance = int(prevImbalance) + recordedBuyAmount;\n        }\n\n        tokenImbalanceData[token][currentBlockIndex] = encodeTokenImbalanceData(currentBlockData);\n    }\n\n    function setGarbageToVolumeRecorder(ERC20 token) internal {\n        for (uint i = 0; i < SLIDING_WINDOW_SIZE; i++) {\n            tokenImbalanceData[token][i] = 0x1;\n        }\n    }\n\n    function getImbalanceInRange(ERC20 token, uint startBlock, uint endBlock) internal view returns(int buyImbalance) {\n        // check the imbalance in the sliding window\n        require(startBlock <= endBlock);\n\n        buyImbalance = 0;\n\n        for (uint windowInd = 0; windowInd < SLIDING_WINDOW_SIZE; windowInd++) {\n            TokenImbalanceData memory perBlockData = decodeTokenImbalanceData(tokenImbalanceData[token][windowInd]);\n\n            if (perBlockData.lastBlock <= endBlock && perBlockData.lastBlock >= startBlock) {\n                buyImbalance += int(perBlockData.lastBlockBuyUnitsImbalance);\n            }\n        }\n    }\n\n    function getImbalanceSinceRateUpdate(ERC20 token, uint rateUpdateBlock, uint currentBlock)\n        internal view\n        returns(int buyImbalance, int currentBlockImbalance)\n    {\n        buyImbalance = 0;\n        currentBlockImbalance = 0;\n        uint latestBlock = 0;\n        int imbalanceInRange = 0;\n        uint startBlock = rateUpdateBlock;\n        uint endBlock = currentBlock;\n\n        for (uint windowInd = 0; windowInd < SLIDING_WINDOW_SIZE; windowInd++) {\n            TokenImbalanceData memory perBlockData = decodeTokenImbalanceData(tokenImbalanceData[token][windowInd]);\n\n            if (perBlockData.lastBlock <= endBlock && perBlockData.lastBlock >= startBlock) {\n                imbalanceInRange += perBlockData.lastBlockBuyUnitsImbalance;\n            }\n\n            if (perBlockData.lastRateUpdateBlock != rateUpdateBlock) continue;\n            if (perBlockData.lastBlock < latestBlock) continue;\n\n            latestBlock = perBlockData.lastBlock;\n            buyImbalance = perBlockData.totalBuyUnitsImbalance;\n            if (uint(perBlockData.lastBlock) == currentBlock) {\n                currentBlockImbalance = perBlockData.lastBlockBuyUnitsImbalance;\n            }\n        }\n\n        if (buyImbalance == 0) {\n            buyImbalance = imbalanceInRange;\n        }\n    }\n\n    function getImbalance(ERC20 token, uint rateUpdateBlock, uint currentBlock)\n        internal view\n        returns(int totalImbalance, int currentBlockImbalance)\n    {\n\n        int resolution = int(tokenControlInfo[token].minimalRecordResolution);\n\n        (totalImbalance, currentBlockImbalance) =\n            getImbalanceSinceRateUpdate(\n                token,\n                rateUpdateBlock,\n                currentBlock);\n\n        totalImbalance *= resolution;\n        currentBlockImbalance *= resolution;\n    }\n\n    function getMaxPerBlockImbalance(ERC20 token) internal view returns(uint) {\n        return tokenControlInfo[token].maxPerBlockImbalance;\n    }\n\n    function getMaxTotalImbalance(ERC20 token) internal view returns(uint) {\n        return tokenControlInfo[token].maxTotalImbalance;\n    }\n\n    function encodeTokenImbalanceData(TokenImbalanceData data) internal pure returns(uint) {\n        // check for overflows\n        require(data.lastBlockBuyUnitsImbalance < int(POW_2_64 / 2));\n        require(data.lastBlockBuyUnitsImbalance > int(-1 * int(POW_2_64) / 2));\n        require(data.lastBlock < POW_2_64);\n        require(data.totalBuyUnitsImbalance < int(POW_2_64 / 2));\n        require(data.totalBuyUnitsImbalance > int(-1 * int(POW_2_64) / 2));\n        require(data.lastRateUpdateBlock < POW_2_64);\n\n        // do encoding\n        uint result = uint(data.lastBlockBuyUnitsImbalance) & (POW_2_64 - 1);\n        result |= data.lastBlock * POW_2_64;\n        result |= (uint(data.totalBuyUnitsImbalance) & (POW_2_64 - 1)) * POW_2_64 * POW_2_64;\n        result |= data.lastRateUpdateBlock * POW_2_64 * POW_2_64 * POW_2_64;\n\n        return result;\n    }\n\n    function decodeTokenImbalanceData(uint input) internal pure returns(TokenImbalanceData) {\n        TokenImbalanceData memory data;\n\n        data.lastBlockBuyUnitsImbalance = int(int64(input & (POW_2_64 - 1)));\n        data.lastBlock = uint(uint64((input / POW_2_64) & (POW_2_64 - 1)));\n        data.totalBuyUnitsImbalance = int(int64((input / (POW_2_64 * POW_2_64)) & (POW_2_64 - 1)));\n        data.lastRateUpdateBlock = uint(uint64((input / (POW_2_64 * POW_2_64 * POW_2_64))));\n\n        return data;\n    }\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/VolumeImbalanceRecorder.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/VolumeImbalanceRecorder.sol",
    "exportedSymbols": {
      "VolumeImbalanceRecorder": [
        21515
      ]
    },
    "id": 21516,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 20763,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:67"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20.sol",
        "file": "../interfaces/ERC20.sol",
        "id": 20764,
        "nodeType": "ImportDirective",
        "scope": 21516,
        "sourceUnit": 9534,
        "src": "26:33:67",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/Withdrawable.sol",
        "file": "./Withdrawable.sol",
        "id": 20765,
        "nodeType": "ImportDirective",
        "scope": 21516,
        "sourceUnit": 21779,
        "src": "60:28:67",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 20766,
              "name": "Withdrawable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 21778,
              "src": "127:12:67",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Withdrawable_$21778",
                "typeString": "contract Withdrawable"
              }
            },
            "id": 20767,
            "nodeType": "InheritanceSpecifier",
            "src": "127:12:67"
          }
        ],
        "contractDependencies": [
          20247,
          21778
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 21515,
        "linearizedBaseContracts": [
          21515,
          21778,
          20247
        ],
        "name": "VolumeImbalanceRecorder",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 20770,
            "name": "SLIDING_WINDOW_SIZE",
            "nodeType": "VariableDeclaration",
            "scope": 21515,
            "src": "147:46:67",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 20768,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "147:4:67",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "35",
              "id": 20769,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "192:1:67",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_5_by_1",
                "typeString": "int_const 5"
              },
              "value": "5"
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 20775,
            "name": "POW_2_64",
            "nodeType": "VariableDeclaration",
            "scope": 21515,
            "src": "199:41:67",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 20771,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "199:4:67",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "commonType": {
                "typeIdentifier": "t_rational_18446744073709551616_by_1",
                "typeString": "int_const 18446744073709551616"
              },
              "id": 20774,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "argumentTypes": null,
                "hexValue": "32",
                "id": 20772,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "233:1:67",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_2_by_1",
                  "typeString": "int_const 2"
                },
                "value": "2"
              },
              "nodeType": "BinaryOperation",
              "operator": "**",
              "rightExpression": {
                "argumentTypes": null,
                "hexValue": "3634",
                "id": 20773,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "238:2:67",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_64_by_1",
                  "typeString": "int_const 64"
                },
                "value": "64"
              },
              "src": "233:7:67",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_18446744073709551616_by_1",
                "typeString": "int_const 18446744073709551616"
              }
            },
            "visibility": "internal"
          },
          {
            "canonicalName": "VolumeImbalanceRecorder.TokenControlInfo",
            "id": 20782,
            "members": [
              {
                "constant": false,
                "id": 20777,
                "name": "minimalRecordResolution",
                "nodeType": "VariableDeclaration",
                "scope": 20782,
                "src": "281:28:67",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 20776,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "281:4:67",
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
                "id": 20779,
                "name": "maxPerBlockImbalance",
                "nodeType": "VariableDeclaration",
                "scope": 20782,
                "src": "344:25:67",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 20778,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "344:4:67",
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
                "id": 20781,
                "name": "maxTotalImbalance",
                "nodeType": "VariableDeclaration",
                "scope": 20782,
                "src": "401:22:67",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 20780,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "401:4:67",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "TokenControlInfo",
            "nodeType": "StructDefinition",
            "scope": 21515,
            "src": "247:281:67",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 20786,
            "name": "tokenControlInfo",
            "nodeType": "VariableDeclaration",
            "scope": 21515,
            "src": "534:62:67",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_TokenControlInfo_$20782_storage_$",
              "typeString": "mapping(address => struct VolumeImbalanceRecorder.TokenControlInfo)"
            },
            "typeName": {
              "id": 20785,
              "keyType": {
                "id": 20783,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "542:7:67",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "534:36:67",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_TokenControlInfo_$20782_storage_$",
                "typeString": "mapping(address => struct VolumeImbalanceRecorder.TokenControlInfo)"
              },
              "valueType": {
                "contractScope": null,
                "id": 20784,
                "name": "TokenControlInfo",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 20782,
                "src": "553:16:67",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_TokenControlInfo_$20782_storage_ptr",
                  "typeString": "struct VolumeImbalanceRecorder.TokenControlInfo"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "canonicalName": "VolumeImbalanceRecorder.TokenImbalanceData",
            "id": 20795,
            "members": [
              {
                "constant": false,
                "id": 20788,
                "name": "lastBlockBuyUnitsImbalance",
                "nodeType": "VariableDeclaration",
                "scope": 20795,
                "src": "639:31:67",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_int256",
                  "typeString": "int256"
                },
                "typeName": {
                  "id": 20787,
                  "name": "int",
                  "nodeType": "ElementaryTypeName",
                  "src": "639:3:67",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 20790,
                "name": "lastBlock",
                "nodeType": "VariableDeclaration",
                "scope": 20795,
                "src": "680:14:67",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 20789,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "680:4:67",
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
                "id": 20792,
                "name": "totalBuyUnitsImbalance",
                "nodeType": "VariableDeclaration",
                "scope": 20795,
                "src": "705:27:67",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_int256",
                  "typeString": "int256"
                },
                "typeName": {
                  "id": 20791,
                  "name": "int",
                  "nodeType": "ElementaryTypeName",
                  "src": "705:3:67",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 20794,
                "name": "lastRateUpdateBlock",
                "nodeType": "VariableDeclaration",
                "scope": 20795,
                "src": "742:24:67",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 20793,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "742:4:67",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "TokenImbalanceData",
            "nodeType": "StructDefinition",
            "scope": 21515,
            "src": "603:170:67",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 20801,
            "name": "tokenImbalanceData",
            "nodeType": "VariableDeclaration",
            "scope": 21515,
            "src": "779:65:67",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
              "typeString": "mapping(address => mapping(uint256 => uint256))"
            },
            "typeName": {
              "id": 20800,
              "keyType": {
                "id": 20796,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "787:7:67",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "779:39:67",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                "typeString": "mapping(address => mapping(uint256 => uint256))"
              },
              "valueType": {
                "id": 20799,
                "keyType": {
                  "id": 20797,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "806:4:67",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "798:19:67",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                  "typeString": "mapping(uint256 => uint256)"
                },
                "valueType": {
                  "id": 20798,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "812:4:67",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 20818,
              "nodeType": "Block",
              "src": "886:70:67",
              "statements": [
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
                        "id": 20811,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 20807,
                          "name": "_admin",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20803,
                          "src": "904:6:67",
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
                              "id": 20809,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "922:1:67",
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
                            "id": 20808,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "914:7:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 20810,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "914:10:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "904:20:67",
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
                      "id": 20806,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "896:7:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 20812,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "896:29:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20813,
                  "nodeType": "ExpressionStatement",
                  "src": "896:29:67"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 20816,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 20814,
                      "name": "admin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19863,
                      "src": "935:5:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 20815,
                      "name": "_admin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20803,
                      "src": "943:6:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "935:14:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 20817,
                  "nodeType": "ExpressionStatement",
                  "src": "935:14:67"
                }
              ]
            },
            "documentation": null,
            "id": 20819,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 20804,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20803,
                  "name": "_admin",
                  "nodeType": "VariableDeclaration",
                  "scope": 20819,
                  "src": "863:14:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 20802,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "863:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "862:16:67"
            },
            "payable": false,
            "returnParameters": {
              "id": 20805,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "886:0:67"
            },
            "scope": 21515,
            "src": "851:105:67",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 20842,
              "nodeType": "Block",
              "src": "1160:199:67",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 20840,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 20832,
                        "name": "tokenControlInfo",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20786,
                        "src": "1170:16:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_struct$_TokenControlInfo_$20782_storage_$",
                          "typeString": "mapping(address => struct VolumeImbalanceRecorder.TokenControlInfo storage ref)"
                        }
                      },
                      "id": 20834,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 20833,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20821,
                        "src": "1187:5:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$9533",
                          "typeString": "contract ERC20"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1170:23:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_TokenControlInfo_$20782_storage",
                        "typeString": "struct VolumeImbalanceRecorder.TokenControlInfo storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 20836,
                          "name": "minimalRecordResolution",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20823,
                          "src": "1242:23:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 20837,
                          "name": "maxPerBlockImbalance",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20825,
                          "src": "1283:20:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 20838,
                          "name": "maxTotalImbalance",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20827,
                          "src": "1321:17:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 20835,
                        "name": "TokenControlInfo",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20782,
                        "src": "1208:16:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_TokenControlInfo_$20782_storage_ptr_$",
                          "typeString": "type(struct VolumeImbalanceRecorder.TokenControlInfo storage pointer)"
                        }
                      },
                      "id": 20839,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1208:144:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_TokenControlInfo_$20782_memory",
                        "typeString": "struct VolumeImbalanceRecorder.TokenControlInfo memory"
                      }
                    },
                    "src": "1170:182:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_TokenControlInfo_$20782_storage",
                      "typeString": "struct VolumeImbalanceRecorder.TokenControlInfo storage ref"
                    }
                  },
                  "id": 20841,
                  "nodeType": "ExpressionStatement",
                  "src": "1170:182:67"
                }
              ]
            },
            "documentation": null,
            "id": 20843,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 20830,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 20829,
                  "name": "onlyAdmin",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 19902,
                  "src": "1146:9:67",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1146:9:67"
              }
            ],
            "name": "setTokenControlInfo",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 20828,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20821,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 20843,
                  "src": "1000:11:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 20820,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "1000:5:67",
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
                  "id": 20823,
                  "name": "minimalRecordResolution",
                  "nodeType": "VariableDeclaration",
                  "scope": 20843,
                  "src": "1021:28:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20822,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1021:4:67",
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
                  "id": 20825,
                  "name": "maxPerBlockImbalance",
                  "nodeType": "VariableDeclaration",
                  "scope": 20843,
                  "src": "1059:25:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20824,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1059:4:67",
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
                  "id": 20827,
                  "name": "maxTotalImbalance",
                  "nodeType": "VariableDeclaration",
                  "scope": 20843,
                  "src": "1094:22:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20826,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1094:4:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "990:132:67"
            },
            "payable": false,
            "returnParameters": {
              "id": 20831,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1160:0:67"
            },
            "scope": 21515,
            "src": "962:397:67",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 20868,
              "nodeType": "Block",
              "src": "1445:194:67",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 20854,
                            "name": "tokenControlInfo",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20786,
                            "src": "1463:16:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_TokenControlInfo_$20782_storage_$",
                              "typeString": "mapping(address => struct VolumeImbalanceRecorder.TokenControlInfo storage ref)"
                            }
                          },
                          "id": 20856,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 20855,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20845,
                            "src": "1480:5:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC20_$9533",
                              "typeString": "contract ERC20"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1463:23:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_TokenControlInfo_$20782_storage",
                            "typeString": "struct VolumeImbalanceRecorder.TokenControlInfo storage ref"
                          }
                        },
                        "id": 20857,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "minimalRecordResolution",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 20777,
                        "src": "1463:47:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 20858,
                            "name": "tokenControlInfo",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20786,
                            "src": "1528:16:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_TokenControlInfo_$20782_storage_$",
                              "typeString": "mapping(address => struct VolumeImbalanceRecorder.TokenControlInfo storage ref)"
                            }
                          },
                          "id": 20860,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 20859,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20845,
                            "src": "1545:5:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC20_$9533",
                              "typeString": "contract ERC20"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1528:23:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_TokenControlInfo_$20782_storage",
                            "typeString": "struct VolumeImbalanceRecorder.TokenControlInfo storage ref"
                          }
                        },
                        "id": 20861,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "maxPerBlockImbalance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 20779,
                        "src": "1528:44:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 20862,
                            "name": "tokenControlInfo",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20786,
                            "src": "1590:16:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_TokenControlInfo_$20782_storage_$",
                              "typeString": "mapping(address => struct VolumeImbalanceRecorder.TokenControlInfo storage ref)"
                            }
                          },
                          "id": 20864,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 20863,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20845,
                            "src": "1607:5:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC20_$9533",
                              "typeString": "contract ERC20"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1590:23:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_TokenControlInfo_$20782_storage",
                            "typeString": "struct VolumeImbalanceRecorder.TokenControlInfo storage ref"
                          }
                        },
                        "id": 20865,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "maxTotalImbalance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 20781,
                        "src": "1590:41:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 20866,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "1462:170:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 20853,
                  "id": 20867,
                  "nodeType": "Return",
                  "src": "1455:177:67"
                }
              ]
            },
            "documentation": null,
            "id": 20869,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getTokenControlInfo",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 20846,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20845,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 20869,
                  "src": "1394:11:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 20844,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "1394:5:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9533",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1393:13:67"
            },
            "payable": false,
            "returnParameters": {
              "id": 20853,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20848,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 20869,
                  "src": "1427:4:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20847,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1427:4:67",
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
                  "id": 20850,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 20869,
                  "src": "1433:4:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20849,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1433:4:67",
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
                  "id": 20852,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 20869,
                  "src": "1439:4:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20851,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1439:4:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1426:18:67"
            },
            "scope": 21515,
            "src": "1365:274:67",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 21028,
              "nodeType": "Block",
              "src": "1795:1856:67",
              "statements": [
                {
                  "assignments": [
                    20881
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 20881,
                      "name": "currentBlockIndex",
                      "nodeType": "VariableDeclaration",
                      "scope": 21029,
                      "src": "1805:22:67",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 20880,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1805:4:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 20885,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 20884,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 20882,
                      "name": "currentBlock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20877,
                      "src": "1830:12:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "%",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 20883,
                      "name": "SLIDING_WINDOW_SIZE",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20770,
                      "src": "1845:19:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1830:34:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1805:59:67"
                },
                {
                  "assignments": [
                    20887
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 20887,
                      "name": "recordedBuyAmount",
                      "nodeType": "VariableDeclaration",
                      "scope": 21029,
                      "src": "1874:21:67",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 20886,
                        "name": "int",
                        "nodeType": "ElementaryTypeName",
                        "src": "1874:3:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 20898,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 20896,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 20889,
                          "name": "buyAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20873,
                          "src": "1902:9:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 20891,
                                  "name": "tokenControlInfo",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 20786,
                                  "src": "1918:16:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_struct$_TokenControlInfo_$20782_storage_$",
                                    "typeString": "mapping(address => struct VolumeImbalanceRecorder.TokenControlInfo storage ref)"
                                  }
                                },
                                "id": 20893,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 20892,
                                  "name": "token",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 20871,
                                  "src": "1935:5:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_ERC20_$9533",
                                    "typeString": "contract ERC20"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "1918:23:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_TokenControlInfo_$20782_storage",
                                  "typeString": "struct VolumeImbalanceRecorder.TokenControlInfo storage ref"
                                }
                              },
                              "id": 20894,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "minimalRecordResolution",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 20777,
                              "src": "1918:47:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 20890,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1914:3:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_int256_$",
                              "typeString": "type(int256)"
                            },
                            "typeName": "int"
                          },
                          "id": 20895,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1914:52:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "1902:64:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 20888,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "1898:3:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_int256_$",
                        "typeString": "type(int256)"
                      },
                      "typeName": "int"
                    },
                    "id": 20897,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1898:69:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1874:93:67"
                },
                {
                  "assignments": [
                    20900
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 20900,
                      "name": "prevImbalance",
                      "nodeType": "VariableDeclaration",
                      "scope": 21029,
                      "src": "1978:17:67",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 20899,
                        "name": "int",
                        "nodeType": "ElementaryTypeName",
                        "src": "1978:3:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 20902,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 20901,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1998:1:67",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1978:21:67"
                },
                {
                  "assignments": [
                    20904
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 20904,
                      "name": "currentBlockData",
                      "nodeType": "VariableDeclaration",
                      "scope": 21029,
                      "src": "2010:42:67",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                        "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 20903,
                        "name": "TokenImbalanceData",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 20795,
                        "src": "2010:18:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_storage_ptr",
                          "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 20912,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 20906,
                            "name": "tokenImbalanceData",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20801,
                            "src": "2092:18:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                              "typeString": "mapping(address => mapping(uint256 => uint256))"
                            }
                          },
                          "id": 20908,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 20907,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20871,
                            "src": "2111:5:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC20_$9533",
                              "typeString": "contract ERC20"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2092:25:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                            "typeString": "mapping(uint256 => uint256)"
                          }
                        },
                        "id": 20910,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 20909,
                          "name": "currentBlockIndex",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20881,
                          "src": "2118:17:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2092:44:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 20905,
                      "name": "decodeTokenImbalanceData",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21514,
                      "src": "2067:24:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_struct$_TokenImbalanceData_$20795_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (struct VolumeImbalanceRecorder.TokenImbalanceData memory)"
                      }
                    },
                    "id": 20911,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2067:70:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                      "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2010:127:67"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 20916,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 20913,
                        "name": "currentBlockData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20904,
                        "src": "2226:16:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                          "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                        }
                      },
                      "id": 20914,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "lastBlock",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 20790,
                      "src": "2226:26:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 20915,
                      "name": "currentBlock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20877,
                      "src": "2256:12:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2226:42:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 21016,
                    "nodeType": "Block",
                    "src": "3023:522:67",
                    "statements": [
                      {
                        "assignments": [],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 20972,
                            "name": "currentBlockImbalance",
                            "nodeType": "VariableDeclaration",
                            "scope": 21029,
                            "src": "3082:25:67",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "typeName": {
                              "id": 20971,
                              "name": "int",
                              "nodeType": "ElementaryTypeName",
                              "src": "3082:3:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 20973,
                        "initialValue": null,
                        "nodeType": "VariableDeclarationStatement",
                        "src": "3082:25:67"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 20982,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "components": [
                              {
                                "argumentTypes": null,
                                "id": 20974,
                                "name": "prevImbalance",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20900,
                                "src": "3122:13:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 20975,
                                "name": "currentBlockImbalance",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20972,
                                "src": "3137:21:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 20976,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "TupleExpression",
                            "src": "3121:38:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$_t_int256_$_t_int256_$",
                              "typeString": "tuple(int256,int256)"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 20978,
                                "name": "token",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20871,
                                "src": "3190:5:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_ERC20_$9533",
                                  "typeString": "contract ERC20"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 20979,
                                "name": "rateUpdateBlock",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20875,
                                "src": "3197:15:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 20980,
                                "name": "currentBlock",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20877,
                                "src": "3214:12:67",
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
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "id": 20977,
                              "name": "getImbalanceSinceRateUpdate",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21237,
                              "src": "3162:27:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_contract$_ERC20_$9533_$_t_uint256_$_t_uint256_$returns$_t_int256_$_t_int256_$",
                                "typeString": "function (contract ERC20,uint256,uint256) view returns (int256,int256)"
                              }
                            },
                            "id": 20981,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3162:65:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$_t_int256_$_t_int256_$",
                              "typeString": "tuple(int256,int256)"
                            }
                          },
                          "src": "3121:106:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 20983,
                        "nodeType": "ExpressionStatement",
                        "src": "3121:106:67"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 20988,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 20984,
                              "name": "currentBlockData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20904,
                              "src": "3242:16:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                              }
                            },
                            "id": 20986,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberName": "lastBlockBuyUnitsImbalance",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 20788,
                            "src": "3242:43:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 20987,
                            "name": "recordedBuyAmount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20887,
                            "src": "3288:17:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "3242:63:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 20989,
                        "nodeType": "ExpressionStatement",
                        "src": "3242:63:67"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 20996,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 20990,
                              "name": "currentBlockData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20904,
                              "src": "3319:16:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                              }
                            },
                            "id": 20992,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberName": "lastBlock",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 20790,
                            "src": "3319:26:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 20994,
                                "name": "currentBlock",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20877,
                                "src": "3353:12:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "id": 20993,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3348:4:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": "uint"
                            },
                            "id": 20995,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3348:18:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3319:47:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 20997,
                        "nodeType": "ExpressionStatement",
                        "src": "3319:47:67"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 21004,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 20998,
                              "name": "currentBlockData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20904,
                              "src": "3380:16:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                              }
                            },
                            "id": 21000,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberName": "lastRateUpdateBlock",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 20794,
                            "src": "3380:36:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 21002,
                                "name": "rateUpdateBlock",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20875,
                                "src": "3424:15:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "id": 21001,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3419:4:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": "uint"
                            },
                            "id": 21003,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3419:21:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3380:60:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 21005,
                        "nodeType": "ExpressionStatement",
                        "src": "3380:60:67"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 21014,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 21006,
                              "name": "currentBlockData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20904,
                              "src": "3454:16:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                              }
                            },
                            "id": 21008,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberName": "totalBuyUnitsImbalance",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 20792,
                            "src": "3454:39:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 21013,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 21010,
                                  "name": "prevImbalance",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 20900,
                                  "src": "3500:13:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                ],
                                "id": 21009,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3496:3:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_int256_$",
                                  "typeString": "type(int256)"
                                },
                                "typeName": "int"
                              },
                              "id": 21011,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3496:18:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "+",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 21012,
                              "name": "recordedBuyAmount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20887,
                              "src": "3517:17:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "3496:38:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "3454:80:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 21015,
                        "nodeType": "ExpressionStatement",
                        "src": "3454:80:67"
                      }
                    ]
                  },
                  "id": 21017,
                  "nodeType": "IfStatement",
                  "src": "2222:1323:67",
                  "trueBody": {
                    "id": 20970,
                    "nodeType": "Block",
                    "src": "2270:747:67",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 20922,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 20918,
                                  "name": "currentBlockData",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 20904,
                                  "src": "2293:16:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                    "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                                  }
                                },
                                "id": 20919,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "lastRateUpdateBlock",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 20794,
                                "src": "2293:36:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "id": 20917,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "2288:4:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": "uint"
                            },
                            "id": 20920,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2288:42:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 20921,
                            "name": "rateUpdateBlock",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20875,
                            "src": "2334:15:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2288:61:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "id": 20968,
                          "nodeType": "Block",
                          "src": "2575:432:67",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 20942,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "id": 20936,
                                  "name": "prevImbalance",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 20900,
                                  "src": "2661:13:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "id": 20938,
                                      "name": "token",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20871,
                                      "src": "2697:5:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_ERC20_$9533",
                                        "typeString": "contract ERC20"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 20939,
                                      "name": "rateUpdateBlock",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20875,
                                      "src": "2704:15:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 20940,
                                      "name": "currentBlock",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20877,
                                      "src": "2721:12:67",
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
                                      },
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "id": 20937,
                                    "name": "getImbalanceInRange",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 21117,
                                    "src": "2677:19:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_view$_t_contract$_ERC20_$9533_$_t_uint256_$_t_uint256_$returns$_t_int256_$",
                                      "typeString": "function (contract ERC20,uint256,uint256) view returns (int256)"
                                    }
                                  },
                                  "id": 20941,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2677:57:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "src": "2661:73:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "id": 20943,
                              "nodeType": "ExpressionStatement",
                              "src": "2661:73:67"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 20952,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 20944,
                                    "name": "currentBlockData",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 20904,
                                    "src": "2752:16:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                      "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                                    }
                                  },
                                  "id": 20946,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "memberName": "totalBuyUnitsImbalance",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 20792,
                                  "src": "2752:39:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  },
                                  "id": 20951,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "id": 20948,
                                        "name": "prevImbalance",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 20900,
                                        "src": "2798:13:67",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      ],
                                      "id": 20947,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "ElementaryTypeNameExpression",
                                      "src": "2794:3:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_int256_$",
                                        "typeString": "type(int256)"
                                      },
                                      "typeName": "int"
                                    },
                                    "id": 20949,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "2794:18:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "+",
                                  "rightExpression": {
                                    "argumentTypes": null,
                                    "id": 20950,
                                    "name": "recordedBuyAmount",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 20887,
                                    "src": "2815:17:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "2794:38:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "src": "2752:80:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "id": 20953,
                              "nodeType": "ExpressionStatement",
                              "src": "2752:80:67"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 20958,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 20954,
                                    "name": "currentBlockData",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 20904,
                                    "src": "2850:16:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                      "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                                    }
                                  },
                                  "id": 20956,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "memberName": "lastBlockBuyUnitsImbalance",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 20788,
                                  "src": "2850:43:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "+=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "id": 20957,
                                  "name": "recordedBuyAmount",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 20887,
                                  "src": "2897:17:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "src": "2850:64:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "id": 20959,
                              "nodeType": "ExpressionStatement",
                              "src": "2850:64:67"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 20966,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 20960,
                                    "name": "currentBlockData",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 20904,
                                    "src": "2932:16:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                      "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                                    }
                                  },
                                  "id": 20962,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "memberName": "lastRateUpdateBlock",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 20794,
                                  "src": "2932:36:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "id": 20964,
                                      "name": "rateUpdateBlock",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20875,
                                      "src": "2976:15:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "id": 20963,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "2971:4:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_uint256_$",
                                      "typeString": "type(uint256)"
                                    },
                                    "typeName": "uint"
                                  },
                                  "id": 20965,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2971:21:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "2932:60:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 20967,
                              "nodeType": "ExpressionStatement",
                              "src": "2932:60:67"
                            }
                          ]
                        },
                        "id": 20969,
                        "nodeType": "IfStatement",
                        "src": "2284:723:67",
                        "trueBody": {
                          "id": 20935,
                          "nodeType": "Block",
                          "src": "2351:218:67",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 20927,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 20923,
                                    "name": "currentBlockData",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 20904,
                                    "src": "2412:16:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                      "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                                    }
                                  },
                                  "id": 20925,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "memberName": "lastBlockBuyUnitsImbalance",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 20788,
                                  "src": "2412:43:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "+=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "id": 20926,
                                  "name": "recordedBuyAmount",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 20887,
                                  "src": "2459:17:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "src": "2412:64:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "id": 20928,
                              "nodeType": "ExpressionStatement",
                              "src": "2412:64:67"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 20933,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 20929,
                                    "name": "currentBlockData",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 20904,
                                    "src": "2494:16:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                      "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                                    }
                                  },
                                  "id": 20931,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "memberName": "totalBuyUnitsImbalance",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 20792,
                                  "src": "2494:39:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "+=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "id": 20932,
                                  "name": "recordedBuyAmount",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 20887,
                                  "src": "2537:17:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "src": "2494:60:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "id": 20934,
                              "nodeType": "ExpressionStatement",
                              "src": "2494:60:67"
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 21026,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 21018,
                          "name": "tokenImbalanceData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20801,
                          "src": "3555:18:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(uint256 => uint256))"
                          }
                        },
                        "id": 21021,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 21019,
                          "name": "token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20871,
                          "src": "3574:5:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_ERC20_$9533",
                            "typeString": "contract ERC20"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3555:25:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 21022,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 21020,
                        "name": "currentBlockIndex",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20881,
                        "src": "3581:17:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3555:44:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 21024,
                          "name": "currentBlockData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20904,
                          "src": "3627:16:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                            "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                            "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                          }
                        ],
                        "id": 21023,
                        "name": "encodeTokenImbalanceData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21429,
                        "src": "3602:24:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_struct$_TokenImbalanceData_$20795_memory_ptr_$returns$_t_uint256_$",
                          "typeString": "function (struct VolumeImbalanceRecorder.TokenImbalanceData memory) pure returns (uint256)"
                        }
                      },
                      "id": 21025,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3602:42:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3555:89:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 21027,
                  "nodeType": "ExpressionStatement",
                  "src": "3555:89:67"
                }
              ]
            },
            "documentation": null,
            "id": 21029,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "addImbalance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 20878,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20871,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 21029,
                  "src": "1676:11:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 20870,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "1676:5:67",
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
                  "id": 20873,
                  "name": "buyAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 21029,
                  "src": "1697:13:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 20872,
                    "name": "int",
                    "nodeType": "ElementaryTypeName",
                    "src": "1697:3:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20875,
                  "name": "rateUpdateBlock",
                  "nodeType": "VariableDeclaration",
                  "scope": 21029,
                  "src": "1720:20:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20874,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1720:4:67",
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
                  "id": 20877,
                  "name": "currentBlock",
                  "nodeType": "VariableDeclaration",
                  "scope": 21029,
                  "src": "1750:17:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20876,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1750:4:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1666:107:67"
            },
            "payable": false,
            "returnParameters": {
              "id": 20879,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1795:0:67"
            },
            "scope": 21515,
            "src": "1645:2006:67",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 21054,
              "nodeType": "Block",
              "src": "3715:122:67",
              "statements": [
                {
                  "body": {
                    "id": 21052,
                    "nodeType": "Block",
                    "src": "3772:59:67",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 21050,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 21044,
                                "name": "tokenImbalanceData",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20801,
                                "src": "3786:18:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                                  "typeString": "mapping(address => mapping(uint256 => uint256))"
                                }
                              },
                              "id": 21047,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 21045,
                                "name": "token",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 21031,
                                "src": "3805:5:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_ERC20_$9533",
                                  "typeString": "contract ERC20"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "3786:25:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                "typeString": "mapping(uint256 => uint256)"
                              }
                            },
                            "id": 21048,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 21046,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21035,
                              "src": "3812:1:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "3786:28:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "hexValue": "307831",
                            "id": 21049,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3817:3:67",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "0x1"
                          },
                          "src": "3786:34:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 21051,
                        "nodeType": "ExpressionStatement",
                        "src": "3786:34:67"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 21040,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 21038,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21035,
                      "src": "3742:1:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 21039,
                      "name": "SLIDING_WINDOW_SIZE",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20770,
                      "src": "3746:19:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3742:23:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 21053,
                  "initializationExpression": {
                    "assignments": [
                      21035
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 21035,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 21055,
                        "src": "3730:6:67",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 21034,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "3730:4:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 21037,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 21036,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3739:1:67",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "3730:10:67"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 21042,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "3767:3:67",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 21041,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21035,
                        "src": "3767:1:67",
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
                    "id": 21043,
                    "nodeType": "ExpressionStatement",
                    "src": "3767:3:67"
                  },
                  "nodeType": "ForStatement",
                  "src": "3725:106:67"
                }
              ]
            },
            "documentation": null,
            "id": 21055,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setGarbageToVolumeRecorder",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 21032,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21031,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 21055,
                  "src": "3693:11:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 21030,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "3693:5:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9533",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3692:13:67"
            },
            "payable": false,
            "returnParameters": {
              "id": 21033,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3715:0:67"
            },
            "scope": 21515,
            "src": "3657:180:67",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 21116,
              "nodeType": "Block",
              "src": "3957:524:67",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 21069,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 21067,
                          "name": "startBlock",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21059,
                          "src": "4028:10:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 21068,
                          "name": "endBlock",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21061,
                          "src": "4042:8:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4028:22:67",
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
                      "id": 21066,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "4020:7:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 21070,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4020:31:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 21071,
                  "nodeType": "ExpressionStatement",
                  "src": "4020:31:67"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 21074,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 21072,
                      "name": "buyImbalance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21064,
                      "src": "4062:12:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 21073,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4077:1:67",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "4062:16:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 21075,
                  "nodeType": "ExpressionStatement",
                  "src": "4062:16:67"
                },
                {
                  "body": {
                    "id": 21114,
                    "nodeType": "Block",
                    "src": "4160:315:67",
                    "statements": [
                      {
                        "assignments": [
                          21087
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 21087,
                            "name": "perBlockData",
                            "nodeType": "VariableDeclaration",
                            "scope": 21117,
                            "src": "4174:38:67",
                            "stateVariable": false,
                            "storageLocation": "memory",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                              "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData"
                            },
                            "typeName": {
                              "contractScope": null,
                              "id": 21086,
                              "name": "TokenImbalanceData",
                              "nodeType": "UserDefinedTypeName",
                              "referencedDeclaration": 20795,
                              "src": "4174:18:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_storage_ptr",
                                "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 21095,
                        "initialValue": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 21089,
                                  "name": "tokenImbalanceData",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 20801,
                                  "src": "4240:18:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                                    "typeString": "mapping(address => mapping(uint256 => uint256))"
                                  }
                                },
                                "id": 21091,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 21090,
                                  "name": "token",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 21057,
                                  "src": "4259:5:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_ERC20_$9533",
                                    "typeString": "contract ERC20"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "4240:25:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                  "typeString": "mapping(uint256 => uint256)"
                                }
                              },
                              "id": 21093,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 21092,
                                "name": "windowInd",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 21077,
                                "src": "4266:9:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "4240:36:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 21088,
                            "name": "decodeTokenImbalanceData",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21514,
                            "src": "4215:24:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_struct$_TokenImbalanceData_$20795_memory_ptr_$",
                              "typeString": "function (uint256) pure returns (struct VolumeImbalanceRecorder.TokenImbalanceData memory)"
                            }
                          },
                          "id": 21094,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4215:62:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                            "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "4174:103:67"
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 21104,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 21099,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 21096,
                                "name": "perBlockData",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 21087,
                                "src": "4296:12:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                  "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                                }
                              },
                              "id": 21097,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "lastBlock",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 20790,
                              "src": "4296:22:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "<=",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 21098,
                              "name": "endBlock",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21061,
                              "src": "4322:8:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "4296:34:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&&",
                          "rightExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 21103,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 21100,
                                "name": "perBlockData",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 21087,
                                "src": "4334:12:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                  "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                                }
                              },
                              "id": 21101,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "lastBlock",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 20790,
                              "src": "4334:22:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">=",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 21102,
                              "name": "startBlock",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21059,
                              "src": "4360:10:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "4334:36:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "4296:74:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 21113,
                        "nodeType": "IfStatement",
                        "src": "4292:173:67",
                        "trueBody": {
                          "id": 21112,
                          "nodeType": "Block",
                          "src": "4372:93:67",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 21110,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "id": 21105,
                                  "name": "buyImbalance",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 21064,
                                  "src": "4390:12:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "+=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 21107,
                                        "name": "perBlockData",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 21087,
                                        "src": "4410:12:67",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                          "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                                        }
                                      },
                                      "id": 21108,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "lastBlockBuyUnitsImbalance",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 20788,
                                      "src": "4410:39:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    ],
                                    "id": 21106,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "4406:3:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_int256_$",
                                      "typeString": "type(int256)"
                                    },
                                    "typeName": "int"
                                  },
                                  "id": 21109,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "4406:44:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "src": "4390:60:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "id": 21111,
                              "nodeType": "ExpressionStatement",
                              "src": "4390:60:67"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 21082,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 21080,
                      "name": "windowInd",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21077,
                      "src": "4114:9:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 21081,
                      "name": "SLIDING_WINDOW_SIZE",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20770,
                      "src": "4126:19:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4114:31:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 21115,
                  "initializationExpression": {
                    "assignments": [
                      21077
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 21077,
                        "name": "windowInd",
                        "nodeType": "VariableDeclaration",
                        "scope": 21117,
                        "src": "4094:14:67",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 21076,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "4094:4:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 21079,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 21078,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4111:1:67",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4094:18:67"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 21084,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "4147:11:67",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 21083,
                        "name": "windowInd",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21077,
                        "src": "4147:9:67",
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
                    "id": 21085,
                    "nodeType": "ExpressionStatement",
                    "src": "4147:11:67"
                  },
                  "nodeType": "ForStatement",
                  "src": "4089:386:67"
                }
              ]
            },
            "documentation": null,
            "id": 21117,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getImbalanceInRange",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 21062,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21057,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 21117,
                  "src": "3872:11:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 21056,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "3872:5:67",
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
                  "id": 21059,
                  "name": "startBlock",
                  "nodeType": "VariableDeclaration",
                  "scope": 21117,
                  "src": "3885:15:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 21058,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3885:4:67",
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
                  "id": 21061,
                  "name": "endBlock",
                  "nodeType": "VariableDeclaration",
                  "scope": 21117,
                  "src": "3902:13:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 21060,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3902:4:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3871:45:67"
            },
            "payable": false,
            "returnParameters": {
              "id": 21065,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21064,
                  "name": "buyImbalance",
                  "nodeType": "VariableDeclaration",
                  "scope": 21117,
                  "src": "3939:16:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 21063,
                    "name": "int",
                    "nodeType": "ElementaryTypeName",
                    "src": "3939:3:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3938:18:67"
            },
            "scope": 21515,
            "src": "3843:638:67",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 21236,
              "nodeType": "Block",
              "src": "4665:1115:67",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 21132,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 21130,
                      "name": "buyImbalance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21126,
                      "src": "4675:12:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 21131,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4690:1:67",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "4675:16:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 21133,
                  "nodeType": "ExpressionStatement",
                  "src": "4675:16:67"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 21136,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 21134,
                      "name": "currentBlockImbalance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21128,
                      "src": "4701:21:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 21135,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4725:1:67",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "4701:25:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 21137,
                  "nodeType": "ExpressionStatement",
                  "src": "4701:25:67"
                },
                {
                  "assignments": [
                    21139
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 21139,
                      "name": "latestBlock",
                      "nodeType": "VariableDeclaration",
                      "scope": 21237,
                      "src": "4736:16:67",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 21138,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "4736:4:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 21141,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 21140,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "4755:1:67",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4736:20:67"
                },
                {
                  "assignments": [
                    21143
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 21143,
                      "name": "imbalanceInRange",
                      "nodeType": "VariableDeclaration",
                      "scope": 21237,
                      "src": "4766:20:67",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 21142,
                        "name": "int",
                        "nodeType": "ElementaryTypeName",
                        "src": "4766:3:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 21145,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 21144,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "4789:1:67",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4766:24:67"
                },
                {
                  "assignments": [
                    21147
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 21147,
                      "name": "startBlock",
                      "nodeType": "VariableDeclaration",
                      "scope": 21237,
                      "src": "4800:15:67",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 21146,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "4800:4:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 21149,
                  "initialValue": {
                    "argumentTypes": null,
                    "id": 21148,
                    "name": "rateUpdateBlock",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 21121,
                    "src": "4818:15:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4800:33:67"
                },
                {
                  "assignments": [
                    21151
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 21151,
                      "name": "endBlock",
                      "nodeType": "VariableDeclaration",
                      "scope": 21237,
                      "src": "4843:13:67",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 21150,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "4843:4:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 21153,
                  "initialValue": {
                    "argumentTypes": null,
                    "id": 21152,
                    "name": "currentBlock",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 21123,
                    "src": "4859:12:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4843:28:67"
                },
                {
                  "body": {
                    "id": 21225,
                    "nodeType": "Block",
                    "src": "4953:732:67",
                    "statements": [
                      {
                        "assignments": [
                          21165
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 21165,
                            "name": "perBlockData",
                            "nodeType": "VariableDeclaration",
                            "scope": 21237,
                            "src": "4967:38:67",
                            "stateVariable": false,
                            "storageLocation": "memory",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                              "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData"
                            },
                            "typeName": {
                              "contractScope": null,
                              "id": 21164,
                              "name": "TokenImbalanceData",
                              "nodeType": "UserDefinedTypeName",
                              "referencedDeclaration": 20795,
                              "src": "4967:18:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_storage_ptr",
                                "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 21173,
                        "initialValue": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 21167,
                                  "name": "tokenImbalanceData",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 20801,
                                  "src": "5033:18:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                                    "typeString": "mapping(address => mapping(uint256 => uint256))"
                                  }
                                },
                                "id": 21169,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 21168,
                                  "name": "token",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 21119,
                                  "src": "5052:5:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_ERC20_$9533",
                                    "typeString": "contract ERC20"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "5033:25:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                  "typeString": "mapping(uint256 => uint256)"
                                }
                              },
                              "id": 21171,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 21170,
                                "name": "windowInd",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 21155,
                                "src": "5059:9:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "5033:36:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 21166,
                            "name": "decodeTokenImbalanceData",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21514,
                            "src": "5008:24:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_struct$_TokenImbalanceData_$20795_memory_ptr_$",
                              "typeString": "function (uint256) pure returns (struct VolumeImbalanceRecorder.TokenImbalanceData memory)"
                            }
                          },
                          "id": 21172,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5008:62:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                            "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "4967:103:67"
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 21182,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 21177,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 21174,
                                "name": "perBlockData",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 21165,
                                "src": "5089:12:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                  "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                                }
                              },
                              "id": 21175,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "lastBlock",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 20790,
                              "src": "5089:22:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "<=",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 21176,
                              "name": "endBlock",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21151,
                              "src": "5115:8:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "5089:34:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&&",
                          "rightExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 21181,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 21178,
                                "name": "perBlockData",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 21165,
                                "src": "5127:12:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                  "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                                }
                              },
                              "id": 21179,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "lastBlock",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 20790,
                              "src": "5127:22:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">=",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 21180,
                              "name": "startBlock",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21147,
                              "src": "5153:10:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "5127:36:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "5089:74:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 21189,
                        "nodeType": "IfStatement",
                        "src": "5085:172:67",
                        "trueBody": {
                          "id": 21188,
                          "nodeType": "Block",
                          "src": "5165:92:67",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 21186,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "id": 21183,
                                  "name": "imbalanceInRange",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 21143,
                                  "src": "5183:16:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "+=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 21184,
                                    "name": "perBlockData",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 21165,
                                    "src": "5203:12:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                      "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                                    }
                                  },
                                  "id": 21185,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "lastBlockBuyUnitsImbalance",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 20788,
                                  "src": "5203:39:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "src": "5183:59:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "id": 21187,
                              "nodeType": "ExpressionStatement",
                              "src": "5183:59:67"
                            }
                          ]
                        }
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 21193,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 21190,
                              "name": "perBlockData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21165,
                              "src": "5275:12:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                              }
                            },
                            "id": 21191,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "lastRateUpdateBlock",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 20794,
                            "src": "5275:32:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 21192,
                            "name": "rateUpdateBlock",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21121,
                            "src": "5311:15:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5275:51:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 21195,
                        "nodeType": "IfStatement",
                        "src": "5271:65:67",
                        "trueBody": {
                          "id": 21194,
                          "nodeType": "Continue",
                          "src": "5328:8:67"
                        }
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 21199,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 21196,
                              "name": "perBlockData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21165,
                              "src": "5354:12:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                              }
                            },
                            "id": 21197,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "lastBlock",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 20790,
                            "src": "5354:22:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 21198,
                            "name": "latestBlock",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21139,
                            "src": "5379:11:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5354:36:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 21201,
                        "nodeType": "IfStatement",
                        "src": "5350:50:67",
                        "trueBody": {
                          "id": 21200,
                          "nodeType": "Continue",
                          "src": "5392:8:67"
                        }
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 21205,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 21202,
                            "name": "latestBlock",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21139,
                            "src": "5415:11:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 21203,
                              "name": "perBlockData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21165,
                              "src": "5429:12:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                              }
                            },
                            "id": 21204,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "lastBlock",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 20790,
                            "src": "5429:22:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5415:36:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 21206,
                        "nodeType": "ExpressionStatement",
                        "src": "5415:36:67"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 21210,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 21207,
                            "name": "buyImbalance",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21126,
                            "src": "5465:12:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 21208,
                              "name": "perBlockData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21165,
                              "src": "5480:12:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                              }
                            },
                            "id": 21209,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "totalBuyUnitsImbalance",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 20792,
                            "src": "5480:35:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "5465:50:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 21211,
                        "nodeType": "ExpressionStatement",
                        "src": "5465:50:67"
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 21217,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 21213,
                                  "name": "perBlockData",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 21165,
                                  "src": "5538:12:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                    "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                                  }
                                },
                                "id": 21214,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "lastBlock",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 20790,
                                "src": "5538:22:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "id": 21212,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "5533:4:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": "uint"
                            },
                            "id": 21215,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5533:28:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 21216,
                            "name": "currentBlock",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21123,
                            "src": "5565:12:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5533:44:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 21224,
                        "nodeType": "IfStatement",
                        "src": "5529:146:67",
                        "trueBody": {
                          "id": 21223,
                          "nodeType": "Block",
                          "src": "5579:96:67",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 21221,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "id": 21218,
                                  "name": "currentBlockImbalance",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 21128,
                                  "src": "5597:21:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 21219,
                                    "name": "perBlockData",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 21165,
                                    "src": "5621:12:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                      "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                                    }
                                  },
                                  "id": 21220,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "lastBlockBuyUnitsImbalance",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 20788,
                                  "src": "5621:39:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "src": "5597:63:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "id": 21222,
                              "nodeType": "ExpressionStatement",
                              "src": "5597:63:67"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 21160,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 21158,
                      "name": "windowInd",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21155,
                      "src": "4907:9:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 21159,
                      "name": "SLIDING_WINDOW_SIZE",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20770,
                      "src": "4919:19:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4907:31:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 21226,
                  "initializationExpression": {
                    "assignments": [
                      21155
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 21155,
                        "name": "windowInd",
                        "nodeType": "VariableDeclaration",
                        "scope": 21237,
                        "src": "4887:14:67",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 21154,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "4887:4:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 21157,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 21156,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4904:1:67",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4887:18:67"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 21162,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "4940:11:67",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 21161,
                        "name": "windowInd",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21155,
                        "src": "4940:9:67",
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
                    "id": 21163,
                    "nodeType": "ExpressionStatement",
                    "src": "4940:11:67"
                  },
                  "nodeType": "ForStatement",
                  "src": "4882:803:67"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 21229,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 21227,
                      "name": "buyImbalance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21126,
                      "src": "5699:12:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 21228,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5715:1:67",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "5699:17:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 21235,
                  "nodeType": "IfStatement",
                  "src": "5695:79:67",
                  "trueBody": {
                    "id": 21234,
                    "nodeType": "Block",
                    "src": "5718:56:67",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 21232,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 21230,
                            "name": "buyImbalance",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21126,
                            "src": "5732:12:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 21231,
                            "name": "imbalanceInRange",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21143,
                            "src": "5747:16:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "5732:31:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 21233,
                        "nodeType": "ExpressionStatement",
                        "src": "5732:31:67"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 21237,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getImbalanceSinceRateUpdate",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 21124,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21119,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 21237,
                  "src": "4524:11:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 21118,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "4524:5:67",
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
                  "id": 21121,
                  "name": "rateUpdateBlock",
                  "nodeType": "VariableDeclaration",
                  "scope": 21237,
                  "src": "4537:20:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 21120,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4537:4:67",
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
                  "id": 21123,
                  "name": "currentBlock",
                  "nodeType": "VariableDeclaration",
                  "scope": 21237,
                  "src": "4559:17:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 21122,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4559:4:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4523:54:67"
            },
            "payable": false,
            "returnParameters": {
              "id": 21129,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21126,
                  "name": "buyImbalance",
                  "nodeType": "VariableDeclaration",
                  "scope": 21237,
                  "src": "4616:16:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 21125,
                    "name": "int",
                    "nodeType": "ElementaryTypeName",
                    "src": "4616:3:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 21128,
                  "name": "currentBlockImbalance",
                  "nodeType": "VariableDeclaration",
                  "scope": 21237,
                  "src": "4634:25:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 21127,
                    "name": "int",
                    "nodeType": "ElementaryTypeName",
                    "src": "4634:3:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4615:45:67"
            },
            "scope": 21515,
            "src": "4487:1293:67",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 21277,
              "nodeType": "Block",
              "src": "5951:350:67",
              "statements": [
                {
                  "assignments": [
                    21251
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 21251,
                      "name": "resolution",
                      "nodeType": "VariableDeclaration",
                      "scope": 21278,
                      "src": "5962:14:67",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 21250,
                        "name": "int",
                        "nodeType": "ElementaryTypeName",
                        "src": "5962:3:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 21258,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 21253,
                            "name": "tokenControlInfo",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20786,
                            "src": "5983:16:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_TokenControlInfo_$20782_storage_$",
                              "typeString": "mapping(address => struct VolumeImbalanceRecorder.TokenControlInfo storage ref)"
                            }
                          },
                          "id": 21255,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 21254,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21239,
                            "src": "6000:5:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC20_$9533",
                              "typeString": "contract ERC20"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "5983:23:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_TokenControlInfo_$20782_storage",
                            "typeString": "struct VolumeImbalanceRecorder.TokenControlInfo storage ref"
                          }
                        },
                        "id": 21256,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "minimalRecordResolution",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 20777,
                        "src": "5983:47:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 21252,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "5979:3:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_int256_$",
                        "typeString": "type(int256)"
                      },
                      "typeName": "int"
                    },
                    "id": 21257,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5979:52:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5962:69:67"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 21267,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "id": 21259,
                          "name": "totalImbalance",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21246,
                          "src": "6043:14:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 21260,
                          "name": "currentBlockImbalance",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21248,
                          "src": "6059:21:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        }
                      ],
                      "id": 21261,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "6042:39:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_int256_$_t_int256_$",
                        "typeString": "tuple(int256,int256)"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 21263,
                          "name": "token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21239,
                          "src": "6141:5:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_ERC20_$9533",
                            "typeString": "contract ERC20"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 21264,
                          "name": "rateUpdateBlock",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21241,
                          "src": "6164:15:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 21265,
                          "name": "currentBlock",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21243,
                          "src": "6197:12:67",
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
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 21262,
                        "name": "getImbalanceSinceRateUpdate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21237,
                        "src": "6096:27:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_contract$_ERC20_$9533_$_t_uint256_$_t_uint256_$returns$_t_int256_$_t_int256_$",
                          "typeString": "function (contract ERC20,uint256,uint256) view returns (int256,int256)"
                        }
                      },
                      "id": 21266,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6096:114:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_int256_$_t_int256_$",
                        "typeString": "tuple(int256,int256)"
                      }
                    },
                    "src": "6042:168:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 21268,
                  "nodeType": "ExpressionStatement",
                  "src": "6042:168:67"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 21271,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 21269,
                      "name": "totalImbalance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21246,
                      "src": "6221:14:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "*=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 21270,
                      "name": "resolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21251,
                      "src": "6239:10:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "6221:28:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 21272,
                  "nodeType": "ExpressionStatement",
                  "src": "6221:28:67"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 21275,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 21273,
                      "name": "currentBlockImbalance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21248,
                      "src": "6259:21:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "*=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 21274,
                      "name": "resolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21251,
                      "src": "6284:10:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "6259:35:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 21276,
                  "nodeType": "ExpressionStatement",
                  "src": "6259:35:67"
                }
              ]
            },
            "documentation": null,
            "id": 21278,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getImbalance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 21244,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21239,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 21278,
                  "src": "5808:11:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 21238,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "5808:5:67",
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
                  "id": 21241,
                  "name": "rateUpdateBlock",
                  "nodeType": "VariableDeclaration",
                  "scope": 21278,
                  "src": "5821:20:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 21240,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "5821:4:67",
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
                  "id": 21243,
                  "name": "currentBlock",
                  "nodeType": "VariableDeclaration",
                  "scope": 21278,
                  "src": "5843:17:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 21242,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "5843:4:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5807:54:67"
            },
            "payable": false,
            "returnParameters": {
              "id": 21249,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21246,
                  "name": "totalImbalance",
                  "nodeType": "VariableDeclaration",
                  "scope": 21278,
                  "src": "5900:18:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 21245,
                    "name": "int",
                    "nodeType": "ElementaryTypeName",
                    "src": "5900:3:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 21248,
                  "name": "currentBlockImbalance",
                  "nodeType": "VariableDeclaration",
                  "scope": 21278,
                  "src": "5920:25:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 21247,
                    "name": "int",
                    "nodeType": "ElementaryTypeName",
                    "src": "5920:3:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5899:47:67"
            },
            "scope": 21515,
            "src": "5786:515:67",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 21290,
              "nodeType": "Block",
              "src": "6381:68:67",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 21285,
                        "name": "tokenControlInfo",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20786,
                        "src": "6398:16:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_struct$_TokenControlInfo_$20782_storage_$",
                          "typeString": "mapping(address => struct VolumeImbalanceRecorder.TokenControlInfo storage ref)"
                        }
                      },
                      "id": 21287,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 21286,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21280,
                        "src": "6415:5:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$9533",
                          "typeString": "contract ERC20"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "6398:23:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_TokenControlInfo_$20782_storage",
                        "typeString": "struct VolumeImbalanceRecorder.TokenControlInfo storage ref"
                      }
                    },
                    "id": 21288,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "maxPerBlockImbalance",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 20779,
                    "src": "6398:44:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 21284,
                  "id": 21289,
                  "nodeType": "Return",
                  "src": "6391:51:67"
                }
              ]
            },
            "documentation": null,
            "id": 21291,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getMaxPerBlockImbalance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 21281,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21280,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 21291,
                  "src": "6340:11:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 21279,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "6340:5:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9533",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6339:13:67"
            },
            "payable": false,
            "returnParameters": {
              "id": 21284,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21283,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 21291,
                  "src": "6375:4:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 21282,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "6375:4:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6374:6:67"
            },
            "scope": 21515,
            "src": "6307:142:67",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 21303,
              "nodeType": "Block",
              "src": "6526:65:67",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 21298,
                        "name": "tokenControlInfo",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20786,
                        "src": "6543:16:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_struct$_TokenControlInfo_$20782_storage_$",
                          "typeString": "mapping(address => struct VolumeImbalanceRecorder.TokenControlInfo storage ref)"
                        }
                      },
                      "id": 21300,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 21299,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21293,
                        "src": "6560:5:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$9533",
                          "typeString": "contract ERC20"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "6543:23:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_TokenControlInfo_$20782_storage",
                        "typeString": "struct VolumeImbalanceRecorder.TokenControlInfo storage ref"
                      }
                    },
                    "id": 21301,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "maxTotalImbalance",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 20781,
                    "src": "6543:41:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 21297,
                  "id": 21302,
                  "nodeType": "Return",
                  "src": "6536:48:67"
                }
              ]
            },
            "documentation": null,
            "id": 21304,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getMaxTotalImbalance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 21294,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21293,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 21304,
                  "src": "6485:11:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 21292,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "6485:5:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9533",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6484:13:67"
            },
            "payable": false,
            "returnParameters": {
              "id": 21297,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21296,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 21304,
                  "src": "6520:4:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 21295,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "6520:4:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6519:6:67"
            },
            "scope": 21515,
            "src": "6455:136:67",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 21428,
              "nodeType": "Block",
              "src": "6684:770:67",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 21319,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 21312,
                            "name": "data",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21306,
                            "src": "6733:4:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                              "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                            }
                          },
                          "id": 21313,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "lastBlockBuyUnitsImbalance",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 20788,
                          "src": "6733:31:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 21317,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "id": 21315,
                                "name": "POW_2_64",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20775,
                                "src": "6771:8:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "/",
                              "rightExpression": {
                                "argumentTypes": null,
                                "hexValue": "32",
                                "id": 21316,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "6782:1:67",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_2_by_1",
                                  "typeString": "int_const 2"
                                },
                                "value": "2"
                              },
                              "src": "6771:12:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 21314,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "6767:3:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_int256_$",
                              "typeString": "type(int256)"
                            },
                            "typeName": "int"
                          },
                          "id": 21318,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6767:17:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "6733:51:67",
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
                      "id": 21311,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "6725:7:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 21320,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6725:60:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 21321,
                  "nodeType": "ExpressionStatement",
                  "src": "6725:60:67"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 21335,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 21323,
                            "name": "data",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21306,
                            "src": "6803:4:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                              "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                            }
                          },
                          "id": 21324,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "lastBlockBuyUnitsImbalance",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 20788,
                          "src": "6803:31:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              "id": 21333,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 21331,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 21327,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "UnaryOperation",
                                  "operator": "-",
                                  "prefix": true,
                                  "src": "6841:2:67",
                                  "subExpression": {
                                    "argumentTypes": null,
                                    "hexValue": "31",
                                    "id": 21326,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "6842:1:67",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_1_by_1",
                                      "typeString": "int_const 1"
                                    },
                                    "value": "1"
                                  },
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_-1_by_1",
                                    "typeString": "int_const -1"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "*",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "id": 21329,
                                      "name": "POW_2_64",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20775,
                                      "src": "6850:8:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "id": 21328,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "6846:3:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_int256_$",
                                      "typeString": "type(int256)"
                                    },
                                    "typeName": "int"
                                  },
                                  "id": 21330,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "6846:13:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "src": "6841:18:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "/",
                              "rightExpression": {
                                "argumentTypes": null,
                                "hexValue": "32",
                                "id": 21332,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "6862:1:67",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_2_by_1",
                                  "typeString": "int_const 2"
                                },
                                "value": "2"
                              },
                              "src": "6841:22:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 21325,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "6837:3:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_int256_$",
                              "typeString": "type(int256)"
                            },
                            "typeName": "int"
                          },
                          "id": 21334,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6837:27:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "6803:61:67",
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
                      "id": 21322,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "6795:7:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 21336,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6795:70:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 21337,
                  "nodeType": "ExpressionStatement",
                  "src": "6795:70:67"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 21342,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 21339,
                            "name": "data",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21306,
                            "src": "6883:4:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                              "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                            }
                          },
                          "id": 21340,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "lastBlock",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 20790,
                          "src": "6883:14:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 21341,
                          "name": "POW_2_64",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20775,
                          "src": "6900:8:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "6883:25:67",
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
                      "id": 21338,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "6875:7:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 21343,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6875:34:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 21344,
                  "nodeType": "ExpressionStatement",
                  "src": "6875:34:67"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 21353,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 21346,
                            "name": "data",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21306,
                            "src": "6927:4:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                              "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                            }
                          },
                          "id": 21347,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "totalBuyUnitsImbalance",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 20792,
                          "src": "6927:27:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 21351,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "id": 21349,
                                "name": "POW_2_64",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20775,
                                "src": "6961:8:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "/",
                              "rightExpression": {
                                "argumentTypes": null,
                                "hexValue": "32",
                                "id": 21350,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "6972:1:67",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_2_by_1",
                                  "typeString": "int_const 2"
                                },
                                "value": "2"
                              },
                              "src": "6961:12:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 21348,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "6957:3:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_int256_$",
                              "typeString": "type(int256)"
                            },
                            "typeName": "int"
                          },
                          "id": 21352,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6957:17:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "6927:47:67",
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
                      "id": 21345,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "6919:7:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 21354,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6919:56:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 21355,
                  "nodeType": "ExpressionStatement",
                  "src": "6919:56:67"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 21369,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 21357,
                            "name": "data",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21306,
                            "src": "6993:4:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                              "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                            }
                          },
                          "id": 21358,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "totalBuyUnitsImbalance",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 20792,
                          "src": "6993:27:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              "id": 21367,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 21365,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 21361,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "UnaryOperation",
                                  "operator": "-",
                                  "prefix": true,
                                  "src": "7027:2:67",
                                  "subExpression": {
                                    "argumentTypes": null,
                                    "hexValue": "31",
                                    "id": 21360,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "7028:1:67",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_1_by_1",
                                      "typeString": "int_const 1"
                                    },
                                    "value": "1"
                                  },
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_-1_by_1",
                                    "typeString": "int_const -1"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "*",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "id": 21363,
                                      "name": "POW_2_64",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20775,
                                      "src": "7036:8:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "id": 21362,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "7032:3:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_int256_$",
                                      "typeString": "type(int256)"
                                    },
                                    "typeName": "int"
                                  },
                                  "id": 21364,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "7032:13:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "src": "7027:18:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "/",
                              "rightExpression": {
                                "argumentTypes": null,
                                "hexValue": "32",
                                "id": 21366,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "7048:1:67",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_2_by_1",
                                  "typeString": "int_const 2"
                                },
                                "value": "2"
                              },
                              "src": "7027:22:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 21359,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "7023:3:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_int256_$",
                              "typeString": "type(int256)"
                            },
                            "typeName": "int"
                          },
                          "id": 21368,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7023:27:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "6993:57:67",
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
                      "id": 21356,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "6985:7:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 21370,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6985:66:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 21371,
                  "nodeType": "ExpressionStatement",
                  "src": "6985:66:67"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 21376,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 21373,
                            "name": "data",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21306,
                            "src": "7069:4:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                              "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                            }
                          },
                          "id": 21374,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "lastRateUpdateBlock",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 20794,
                          "src": "7069:24:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 21375,
                          "name": "POW_2_64",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20775,
                          "src": "7096:8:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "7069:35:67",
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
                      "id": 21372,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "7061:7:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 21377,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7061:44:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 21378,
                  "nodeType": "ExpressionStatement",
                  "src": "7061:44:67"
                },
                {
                  "assignments": [
                    21380
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 21380,
                      "name": "result",
                      "nodeType": "VariableDeclaration",
                      "scope": 21429,
                      "src": "7139:11:67",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 21379,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "7139:4:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 21390,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 21389,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 21382,
                            "name": "data",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21306,
                            "src": "7158:4:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                              "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                            }
                          },
                          "id": 21383,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "lastBlockBuyUnitsImbalance",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 20788,
                          "src": "7158:31:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        ],
                        "id": 21381,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "7153:4:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": "uint"
                      },
                      "id": 21384,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7153:37:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&",
                    "rightExpression": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 21387,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 21385,
                            "name": "POW_2_64",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20775,
                            "src": "7194:8:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "31",
                            "id": 21386,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7205:1:67",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "7194:12:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 21388,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "7193:14:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7153:54:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7139:68:67"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 21396,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 21391,
                      "name": "result",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21380,
                      "src": "7217:6:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "|=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 21395,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 21392,
                          "name": "data",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21306,
                          "src": "7227:4:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                            "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                          }
                        },
                        "id": 21393,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "lastBlock",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 20790,
                        "src": "7227:14:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 21394,
                        "name": "POW_2_64",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20775,
                        "src": "7244:8:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "7227:25:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7217:35:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 21397,
                  "nodeType": "ExpressionStatement",
                  "src": "7217:35:67"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 21413,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 21398,
                      "name": "result",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21380,
                      "src": "7262:6:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "|=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 21412,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 21410,
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
                              "id": 21407,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 21400,
                                      "name": "data",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 21306,
                                      "src": "7278:4:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                        "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                                      }
                                    },
                                    "id": 21401,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "totalBuyUnitsImbalance",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 20792,
                                    "src": "7278:27:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  ],
                                  "id": 21399,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "7273:4:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint256_$",
                                    "typeString": "type(uint256)"
                                  },
                                  "typeName": "uint"
                                },
                                "id": 21402,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "7273:33:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "&",
                              "rightExpression": {
                                "argumentTypes": null,
                                "components": [
                                  {
                                    "argumentTypes": null,
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 21405,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "argumentTypes": null,
                                      "id": 21403,
                                      "name": "POW_2_64",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20775,
                                      "src": "7310:8:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "-",
                                    "rightExpression": {
                                      "argumentTypes": null,
                                      "hexValue": "31",
                                      "id": 21404,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "7321:1:67",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_1_by_1",
                                        "typeString": "int_const 1"
                                      },
                                      "value": "1"
                                    },
                                    "src": "7310:12:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "id": 21406,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "7309:14:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "7273:50:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 21408,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "7272:52:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 21409,
                          "name": "POW_2_64",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20775,
                          "src": "7327:8:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "7272:63:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 21411,
                        "name": "POW_2_64",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20775,
                        "src": "7338:8:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "7272:74:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7262:84:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 21414,
                  "nodeType": "ExpressionStatement",
                  "src": "7262:84:67"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 21424,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 21415,
                      "name": "result",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21380,
                      "src": "7356:6:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "|=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 21423,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 21421,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 21419,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 21416,
                              "name": "data",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21306,
                              "src": "7366:4:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                              }
                            },
                            "id": 21417,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "lastRateUpdateBlock",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 20794,
                            "src": "7366:24:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 21418,
                            "name": "POW_2_64",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20775,
                            "src": "7393:8:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "7366:35:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 21420,
                          "name": "POW_2_64",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20775,
                          "src": "7404:8:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "7366:46:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 21422,
                        "name": "POW_2_64",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20775,
                        "src": "7415:8:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "7366:57:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7356:67:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 21425,
                  "nodeType": "ExpressionStatement",
                  "src": "7356:67:67"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 21426,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 21380,
                    "src": "7441:6:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 21310,
                  "id": 21427,
                  "nodeType": "Return",
                  "src": "7434:13:67"
                }
              ]
            },
            "documentation": null,
            "id": 21429,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "encodeTokenImbalanceData",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 21307,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21306,
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 21429,
                  "src": "6631:23:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                    "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 21305,
                    "name": "TokenImbalanceData",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 20795,
                    "src": "6631:18:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_storage_ptr",
                      "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6630:25:67"
            },
            "payable": false,
            "returnParameters": {
              "id": 21310,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21309,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 21429,
                  "src": "6678:4:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 21308,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "6678:4:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6677:6:67"
            },
            "scope": 21515,
            "src": "6597:857:67",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 21513,
              "nodeType": "Block",
              "src": "7548:417:67",
              "statements": [
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 21437,
                      "name": "data",
                      "nodeType": "VariableDeclaration",
                      "scope": 21514,
                      "src": "7558:30:67",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                        "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 21436,
                        "name": "TokenImbalanceData",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 20795,
                        "src": "7558:18:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_storage_ptr",
                          "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 21438,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7558:30:67"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 21452,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 21439,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21437,
                        "src": "7599:4:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                          "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                        }
                      },
                      "id": 21441,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "lastBlockBuyUnitsImbalance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 20788,
                      "src": "7599:31:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
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
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 21449,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "id": 21444,
                                "name": "input",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 21431,
                                "src": "7643:5:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "&",
                              "rightExpression": {
                                "argumentTypes": null,
                                "components": [
                                  {
                                    "argumentTypes": null,
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 21447,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "argumentTypes": null,
                                      "id": 21445,
                                      "name": "POW_2_64",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20775,
                                      "src": "7652:8:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "-",
                                    "rightExpression": {
                                      "argumentTypes": null,
                                      "hexValue": "31",
                                      "id": 21446,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "7663:1:67",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_1_by_1",
                                        "typeString": "int_const 1"
                                      },
                                      "value": "1"
                                    },
                                    "src": "7652:12:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "id": 21448,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "7651:14:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "7643:22:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 21443,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "7637:5:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_int64_$",
                              "typeString": "type(int64)"
                            },
                            "typeName": "int64"
                          },
                          "id": 21450,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7637:29:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int64",
                            "typeString": "int64"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_int64",
                            "typeString": "int64"
                          }
                        ],
                        "id": 21442,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "7633:3:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int256_$",
                          "typeString": "type(int256)"
                        },
                        "typeName": "int"
                      },
                      "id": 21451,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7633:34:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "7599:68:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 21453,
                  "nodeType": "ExpressionStatement",
                  "src": "7599:68:67"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 21470,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 21454,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21437,
                        "src": "7677:4:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                          "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                        }
                      },
                      "id": 21456,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "lastBlock",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 20790,
                      "src": "7677:14:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
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
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 21467,
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
                                    "id": 21461,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "argumentTypes": null,
                                      "id": 21459,
                                      "name": "input",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 21431,
                                      "src": "7707:5:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "/",
                                    "rightExpression": {
                                      "argumentTypes": null,
                                      "id": 21460,
                                      "name": "POW_2_64",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20775,
                                      "src": "7715:8:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "src": "7707:16:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "id": 21462,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "7706:18:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "&",
                              "rightExpression": {
                                "argumentTypes": null,
                                "components": [
                                  {
                                    "argumentTypes": null,
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 21465,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "argumentTypes": null,
                                      "id": 21463,
                                      "name": "POW_2_64",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20775,
                                      "src": "7728:8:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "-",
                                    "rightExpression": {
                                      "argumentTypes": null,
                                      "hexValue": "31",
                                      "id": 21464,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "7739:1:67",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_1_by_1",
                                        "typeString": "int_const 1"
                                      },
                                      "value": "1"
                                    },
                                    "src": "7728:12:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "id": 21466,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "7727:14:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "7706:35:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 21458,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "7699:6:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint64_$",
                              "typeString": "type(uint64)"
                            },
                            "typeName": "uint64"
                          },
                          "id": 21468,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7699:43:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
                          }
                        ],
                        "id": 21457,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "7694:4:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": "uint"
                      },
                      "id": 21469,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7694:49:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7677:66:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 21471,
                  "nodeType": "ExpressionStatement",
                  "src": "7677:66:67"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 21491,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 21472,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21437,
                        "src": "7753:4:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                          "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                        }
                      },
                      "id": 21474,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "totalBuyUnitsImbalance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 20792,
                      "src": "7753:27:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
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
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 21488,
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
                                    "id": 21482,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "argumentTypes": null,
                                      "id": 21477,
                                      "name": "input",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 21431,
                                      "src": "7794:5:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "/",
                                    "rightExpression": {
                                      "argumentTypes": null,
                                      "components": [
                                        {
                                          "argumentTypes": null,
                                          "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          },
                                          "id": 21480,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "leftExpression": {
                                            "argumentTypes": null,
                                            "id": 21478,
                                            "name": "POW_2_64",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 20775,
                                            "src": "7803:8:67",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          "nodeType": "BinaryOperation",
                                          "operator": "*",
                                          "rightExpression": {
                                            "argumentTypes": null,
                                            "id": 21479,
                                            "name": "POW_2_64",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 20775,
                                            "src": "7814:8:67",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          "src": "7803:19:67",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        }
                                      ],
                                      "id": 21481,
                                      "isConstant": false,
                                      "isInlineArray": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "TupleExpression",
                                      "src": "7802:21:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "src": "7794:29:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "id": 21483,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "7793:31:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "&",
                              "rightExpression": {
                                "argumentTypes": null,
                                "components": [
                                  {
                                    "argumentTypes": null,
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 21486,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "argumentTypes": null,
                                      "id": 21484,
                                      "name": "POW_2_64",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20775,
                                      "src": "7828:8:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "-",
                                    "rightExpression": {
                                      "argumentTypes": null,
                                      "hexValue": "31",
                                      "id": 21485,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "7839:1:67",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_1_by_1",
                                        "typeString": "int_const 1"
                                      },
                                      "value": "1"
                                    },
                                    "src": "7828:12:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "id": 21487,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "7827:14:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "7793:48:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 21476,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "7787:5:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_int64_$",
                              "typeString": "type(int64)"
                            },
                            "typeName": "int64"
                          },
                          "id": 21489,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7787:55:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int64",
                            "typeString": "int64"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_int64",
                            "typeString": "int64"
                          }
                        ],
                        "id": 21475,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "7783:3:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int256_$",
                          "typeString": "type(int256)"
                        },
                        "typeName": "int"
                      },
                      "id": 21490,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7783:60:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "7753:90:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 21492,
                  "nodeType": "ExpressionStatement",
                  "src": "7753:90:67"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 21509,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 21493,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21437,
                        "src": "7853:4:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                          "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                        }
                      },
                      "id": 21495,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "lastRateUpdateBlock",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 20794,
                      "src": "7853:24:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
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
                              "components": [
                                {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 21505,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "argumentTypes": null,
                                    "id": 21498,
                                    "name": "input",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 21431,
                                    "src": "7893:5:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "/",
                                  "rightExpression": {
                                    "argumentTypes": null,
                                    "components": [
                                      {
                                        "argumentTypes": null,
                                        "commonType": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        },
                                        "id": 21503,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                          "argumentTypes": null,
                                          "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          },
                                          "id": 21501,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "leftExpression": {
                                            "argumentTypes": null,
                                            "id": 21499,
                                            "name": "POW_2_64",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 20775,
                                            "src": "7902:8:67",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          "nodeType": "BinaryOperation",
                                          "operator": "*",
                                          "rightExpression": {
                                            "argumentTypes": null,
                                            "id": 21500,
                                            "name": "POW_2_64",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 20775,
                                            "src": "7913:8:67",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          "src": "7902:19:67",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "*",
                                        "rightExpression": {
                                          "argumentTypes": null,
                                          "id": 21502,
                                          "name": "POW_2_64",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 20775,
                                          "src": "7924:8:67",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "src": "7902:30:67",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      }
                                    ],
                                    "id": 21504,
                                    "isConstant": false,
                                    "isInlineArray": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "TupleExpression",
                                    "src": "7901:32:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "7893:40:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "id": 21506,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "7892:42:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 21497,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "7885:6:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint64_$",
                              "typeString": "type(uint64)"
                            },
                            "typeName": "uint64"
                          },
                          "id": 21507,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7885:50:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
                          }
                        ],
                        "id": 21496,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "7880:4:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": "uint"
                      },
                      "id": 21508,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7880:56:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7853:83:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 21510,
                  "nodeType": "ExpressionStatement",
                  "src": "7853:83:67"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 21511,
                    "name": "data",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 21437,
                    "src": "7954:4:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                      "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                    }
                  },
                  "functionReturnParameters": 21435,
                  "id": 21512,
                  "nodeType": "Return",
                  "src": "7947:11:67"
                }
              ]
            },
            "documentation": null,
            "id": 21514,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "decodeTokenImbalanceData",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 21432,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21431,
                  "name": "input",
                  "nodeType": "VariableDeclaration",
                  "scope": 21514,
                  "src": "7494:10:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 21430,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "7494:4:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7493:12:67"
            },
            "payable": false,
            "returnParameters": {
              "id": 21435,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21434,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 21514,
                  "src": "7528:18:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                    "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 21433,
                    "name": "TokenImbalanceData",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 20795,
                    "src": "7528:18:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_storage_ptr",
                      "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7527:20:67"
            },
            "scope": 21515,
            "src": "7460:505:67",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 21516,
        "src": "91:7876:67"
      }
    ],
    "src": "0:7968:67"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/VolumeImbalanceRecorder.sol",
    "exportedSymbols": {
      "VolumeImbalanceRecorder": [
        21515
      ]
    },
    "id": 21516,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 20763,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:67"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20.sol",
        "file": "../interfaces/ERC20.sol",
        "id": 20764,
        "nodeType": "ImportDirective",
        "scope": 21516,
        "sourceUnit": 9534,
        "src": "26:33:67",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/Withdrawable.sol",
        "file": "./Withdrawable.sol",
        "id": 20765,
        "nodeType": "ImportDirective",
        "scope": 21516,
        "sourceUnit": 21779,
        "src": "60:28:67",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 20766,
              "name": "Withdrawable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 21778,
              "src": "127:12:67",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Withdrawable_$21778",
                "typeString": "contract Withdrawable"
              }
            },
            "id": 20767,
            "nodeType": "InheritanceSpecifier",
            "src": "127:12:67"
          }
        ],
        "contractDependencies": [
          20247,
          21778
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 21515,
        "linearizedBaseContracts": [
          21515,
          21778,
          20247
        ],
        "name": "VolumeImbalanceRecorder",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 20770,
            "name": "SLIDING_WINDOW_SIZE",
            "nodeType": "VariableDeclaration",
            "scope": 21515,
            "src": "147:46:67",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 20768,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "147:4:67",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "35",
              "id": 20769,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "192:1:67",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_5_by_1",
                "typeString": "int_const 5"
              },
              "value": "5"
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 20775,
            "name": "POW_2_64",
            "nodeType": "VariableDeclaration",
            "scope": 21515,
            "src": "199:41:67",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 20771,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "199:4:67",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "commonType": {
                "typeIdentifier": "t_rational_18446744073709551616_by_1",
                "typeString": "int_const 18446744073709551616"
              },
              "id": 20774,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "argumentTypes": null,
                "hexValue": "32",
                "id": 20772,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "233:1:67",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_2_by_1",
                  "typeString": "int_const 2"
                },
                "value": "2"
              },
              "nodeType": "BinaryOperation",
              "operator": "**",
              "rightExpression": {
                "argumentTypes": null,
                "hexValue": "3634",
                "id": 20773,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "238:2:67",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_64_by_1",
                  "typeString": "int_const 64"
                },
                "value": "64"
              },
              "src": "233:7:67",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_18446744073709551616_by_1",
                "typeString": "int_const 18446744073709551616"
              }
            },
            "visibility": "internal"
          },
          {
            "canonicalName": "VolumeImbalanceRecorder.TokenControlInfo",
            "id": 20782,
            "members": [
              {
                "constant": false,
                "id": 20777,
                "name": "minimalRecordResolution",
                "nodeType": "VariableDeclaration",
                "scope": 20782,
                "src": "281:28:67",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 20776,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "281:4:67",
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
                "id": 20779,
                "name": "maxPerBlockImbalance",
                "nodeType": "VariableDeclaration",
                "scope": 20782,
                "src": "344:25:67",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 20778,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "344:4:67",
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
                "id": 20781,
                "name": "maxTotalImbalance",
                "nodeType": "VariableDeclaration",
                "scope": 20782,
                "src": "401:22:67",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 20780,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "401:4:67",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "TokenControlInfo",
            "nodeType": "StructDefinition",
            "scope": 21515,
            "src": "247:281:67",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 20786,
            "name": "tokenControlInfo",
            "nodeType": "VariableDeclaration",
            "scope": 21515,
            "src": "534:62:67",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_TokenControlInfo_$20782_storage_$",
              "typeString": "mapping(address => struct VolumeImbalanceRecorder.TokenControlInfo)"
            },
            "typeName": {
              "id": 20785,
              "keyType": {
                "id": 20783,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "542:7:67",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "534:36:67",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_TokenControlInfo_$20782_storage_$",
                "typeString": "mapping(address => struct VolumeImbalanceRecorder.TokenControlInfo)"
              },
              "valueType": {
                "contractScope": null,
                "id": 20784,
                "name": "TokenControlInfo",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 20782,
                "src": "553:16:67",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_TokenControlInfo_$20782_storage_ptr",
                  "typeString": "struct VolumeImbalanceRecorder.TokenControlInfo"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "canonicalName": "VolumeImbalanceRecorder.TokenImbalanceData",
            "id": 20795,
            "members": [
              {
                "constant": false,
                "id": 20788,
                "name": "lastBlockBuyUnitsImbalance",
                "nodeType": "VariableDeclaration",
                "scope": 20795,
                "src": "639:31:67",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_int256",
                  "typeString": "int256"
                },
                "typeName": {
                  "id": 20787,
                  "name": "int",
                  "nodeType": "ElementaryTypeName",
                  "src": "639:3:67",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 20790,
                "name": "lastBlock",
                "nodeType": "VariableDeclaration",
                "scope": 20795,
                "src": "680:14:67",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 20789,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "680:4:67",
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
                "id": 20792,
                "name": "totalBuyUnitsImbalance",
                "nodeType": "VariableDeclaration",
                "scope": 20795,
                "src": "705:27:67",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_int256",
                  "typeString": "int256"
                },
                "typeName": {
                  "id": 20791,
                  "name": "int",
                  "nodeType": "ElementaryTypeName",
                  "src": "705:3:67",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 20794,
                "name": "lastRateUpdateBlock",
                "nodeType": "VariableDeclaration",
                "scope": 20795,
                "src": "742:24:67",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 20793,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "742:4:67",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "TokenImbalanceData",
            "nodeType": "StructDefinition",
            "scope": 21515,
            "src": "603:170:67",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 20801,
            "name": "tokenImbalanceData",
            "nodeType": "VariableDeclaration",
            "scope": 21515,
            "src": "779:65:67",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
              "typeString": "mapping(address => mapping(uint256 => uint256))"
            },
            "typeName": {
              "id": 20800,
              "keyType": {
                "id": 20796,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "787:7:67",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "779:39:67",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                "typeString": "mapping(address => mapping(uint256 => uint256))"
              },
              "valueType": {
                "id": 20799,
                "keyType": {
                  "id": 20797,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "806:4:67",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "798:19:67",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                  "typeString": "mapping(uint256 => uint256)"
                },
                "valueType": {
                  "id": 20798,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "812:4:67",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 20818,
              "nodeType": "Block",
              "src": "886:70:67",
              "statements": [
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
                        "id": 20811,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 20807,
                          "name": "_admin",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20803,
                          "src": "904:6:67",
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
                              "id": 20809,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "922:1:67",
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
                            "id": 20808,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "914:7:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 20810,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "914:10:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "904:20:67",
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
                      "id": 20806,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "896:7:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 20812,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "896:29:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 20813,
                  "nodeType": "ExpressionStatement",
                  "src": "896:29:67"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 20816,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 20814,
                      "name": "admin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19863,
                      "src": "935:5:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 20815,
                      "name": "_admin",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20803,
                      "src": "943:6:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "935:14:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 20817,
                  "nodeType": "ExpressionStatement",
                  "src": "935:14:67"
                }
              ]
            },
            "documentation": null,
            "id": 20819,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 20804,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20803,
                  "name": "_admin",
                  "nodeType": "VariableDeclaration",
                  "scope": 20819,
                  "src": "863:14:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 20802,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "863:7:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "862:16:67"
            },
            "payable": false,
            "returnParameters": {
              "id": 20805,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "886:0:67"
            },
            "scope": 21515,
            "src": "851:105:67",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 20842,
              "nodeType": "Block",
              "src": "1160:199:67",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 20840,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 20832,
                        "name": "tokenControlInfo",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20786,
                        "src": "1170:16:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_struct$_TokenControlInfo_$20782_storage_$",
                          "typeString": "mapping(address => struct VolumeImbalanceRecorder.TokenControlInfo storage ref)"
                        }
                      },
                      "id": 20834,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 20833,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20821,
                        "src": "1187:5:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$9533",
                          "typeString": "contract ERC20"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1170:23:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_TokenControlInfo_$20782_storage",
                        "typeString": "struct VolumeImbalanceRecorder.TokenControlInfo storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 20836,
                          "name": "minimalRecordResolution",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20823,
                          "src": "1242:23:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 20837,
                          "name": "maxPerBlockImbalance",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20825,
                          "src": "1283:20:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 20838,
                          "name": "maxTotalImbalance",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20827,
                          "src": "1321:17:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 20835,
                        "name": "TokenControlInfo",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20782,
                        "src": "1208:16:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_TokenControlInfo_$20782_storage_ptr_$",
                          "typeString": "type(struct VolumeImbalanceRecorder.TokenControlInfo storage pointer)"
                        }
                      },
                      "id": 20839,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1208:144:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_TokenControlInfo_$20782_memory",
                        "typeString": "struct VolumeImbalanceRecorder.TokenControlInfo memory"
                      }
                    },
                    "src": "1170:182:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_TokenControlInfo_$20782_storage",
                      "typeString": "struct VolumeImbalanceRecorder.TokenControlInfo storage ref"
                    }
                  },
                  "id": 20841,
                  "nodeType": "ExpressionStatement",
                  "src": "1170:182:67"
                }
              ]
            },
            "documentation": null,
            "id": 20843,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 20830,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 20829,
                  "name": "onlyAdmin",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 19902,
                  "src": "1146:9:67",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1146:9:67"
              }
            ],
            "name": "setTokenControlInfo",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 20828,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20821,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 20843,
                  "src": "1000:11:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 20820,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "1000:5:67",
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
                  "id": 20823,
                  "name": "minimalRecordResolution",
                  "nodeType": "VariableDeclaration",
                  "scope": 20843,
                  "src": "1021:28:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20822,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1021:4:67",
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
                  "id": 20825,
                  "name": "maxPerBlockImbalance",
                  "nodeType": "VariableDeclaration",
                  "scope": 20843,
                  "src": "1059:25:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20824,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1059:4:67",
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
                  "id": 20827,
                  "name": "maxTotalImbalance",
                  "nodeType": "VariableDeclaration",
                  "scope": 20843,
                  "src": "1094:22:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20826,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1094:4:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "990:132:67"
            },
            "payable": false,
            "returnParameters": {
              "id": 20831,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1160:0:67"
            },
            "scope": 21515,
            "src": "962:397:67",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 20868,
              "nodeType": "Block",
              "src": "1445:194:67",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 20854,
                            "name": "tokenControlInfo",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20786,
                            "src": "1463:16:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_TokenControlInfo_$20782_storage_$",
                              "typeString": "mapping(address => struct VolumeImbalanceRecorder.TokenControlInfo storage ref)"
                            }
                          },
                          "id": 20856,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 20855,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20845,
                            "src": "1480:5:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC20_$9533",
                              "typeString": "contract ERC20"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1463:23:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_TokenControlInfo_$20782_storage",
                            "typeString": "struct VolumeImbalanceRecorder.TokenControlInfo storage ref"
                          }
                        },
                        "id": 20857,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "minimalRecordResolution",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 20777,
                        "src": "1463:47:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 20858,
                            "name": "tokenControlInfo",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20786,
                            "src": "1528:16:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_TokenControlInfo_$20782_storage_$",
                              "typeString": "mapping(address => struct VolumeImbalanceRecorder.TokenControlInfo storage ref)"
                            }
                          },
                          "id": 20860,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 20859,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20845,
                            "src": "1545:5:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC20_$9533",
                              "typeString": "contract ERC20"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1528:23:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_TokenControlInfo_$20782_storage",
                            "typeString": "struct VolumeImbalanceRecorder.TokenControlInfo storage ref"
                          }
                        },
                        "id": 20861,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "maxPerBlockImbalance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 20779,
                        "src": "1528:44:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 20862,
                            "name": "tokenControlInfo",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20786,
                            "src": "1590:16:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_TokenControlInfo_$20782_storage_$",
                              "typeString": "mapping(address => struct VolumeImbalanceRecorder.TokenControlInfo storage ref)"
                            }
                          },
                          "id": 20864,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 20863,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20845,
                            "src": "1607:5:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC20_$9533",
                              "typeString": "contract ERC20"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1590:23:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_TokenControlInfo_$20782_storage",
                            "typeString": "struct VolumeImbalanceRecorder.TokenControlInfo storage ref"
                          }
                        },
                        "id": 20865,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "maxTotalImbalance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 20781,
                        "src": "1590:41:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 20866,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "1462:170:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 20853,
                  "id": 20867,
                  "nodeType": "Return",
                  "src": "1455:177:67"
                }
              ]
            },
            "documentation": null,
            "id": 20869,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getTokenControlInfo",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 20846,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20845,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 20869,
                  "src": "1394:11:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 20844,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "1394:5:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9533",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1393:13:67"
            },
            "payable": false,
            "returnParameters": {
              "id": 20853,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20848,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 20869,
                  "src": "1427:4:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20847,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1427:4:67",
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
                  "id": 20850,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 20869,
                  "src": "1433:4:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20849,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1433:4:67",
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
                  "id": 20852,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 20869,
                  "src": "1439:4:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20851,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1439:4:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1426:18:67"
            },
            "scope": 21515,
            "src": "1365:274:67",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 21028,
              "nodeType": "Block",
              "src": "1795:1856:67",
              "statements": [
                {
                  "assignments": [
                    20881
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 20881,
                      "name": "currentBlockIndex",
                      "nodeType": "VariableDeclaration",
                      "scope": 21029,
                      "src": "1805:22:67",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 20880,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1805:4:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 20885,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 20884,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 20882,
                      "name": "currentBlock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20877,
                      "src": "1830:12:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "%",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 20883,
                      "name": "SLIDING_WINDOW_SIZE",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20770,
                      "src": "1845:19:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1830:34:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1805:59:67"
                },
                {
                  "assignments": [
                    20887
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 20887,
                      "name": "recordedBuyAmount",
                      "nodeType": "VariableDeclaration",
                      "scope": 21029,
                      "src": "1874:21:67",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 20886,
                        "name": "int",
                        "nodeType": "ElementaryTypeName",
                        "src": "1874:3:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 20898,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 20896,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 20889,
                          "name": "buyAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20873,
                          "src": "1902:9:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 20891,
                                  "name": "tokenControlInfo",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 20786,
                                  "src": "1918:16:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_struct$_TokenControlInfo_$20782_storage_$",
                                    "typeString": "mapping(address => struct VolumeImbalanceRecorder.TokenControlInfo storage ref)"
                                  }
                                },
                                "id": 20893,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 20892,
                                  "name": "token",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 20871,
                                  "src": "1935:5:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_ERC20_$9533",
                                    "typeString": "contract ERC20"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "1918:23:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_TokenControlInfo_$20782_storage",
                                  "typeString": "struct VolumeImbalanceRecorder.TokenControlInfo storage ref"
                                }
                              },
                              "id": 20894,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "minimalRecordResolution",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 20777,
                              "src": "1918:47:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 20890,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1914:3:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_int256_$",
                              "typeString": "type(int256)"
                            },
                            "typeName": "int"
                          },
                          "id": 20895,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1914:52:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "1902:64:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 20888,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "1898:3:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_int256_$",
                        "typeString": "type(int256)"
                      },
                      "typeName": "int"
                    },
                    "id": 20897,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1898:69:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1874:93:67"
                },
                {
                  "assignments": [
                    20900
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 20900,
                      "name": "prevImbalance",
                      "nodeType": "VariableDeclaration",
                      "scope": 21029,
                      "src": "1978:17:67",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 20899,
                        "name": "int",
                        "nodeType": "ElementaryTypeName",
                        "src": "1978:3:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 20902,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 20901,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1998:1:67",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1978:21:67"
                },
                {
                  "assignments": [
                    20904
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 20904,
                      "name": "currentBlockData",
                      "nodeType": "VariableDeclaration",
                      "scope": 21029,
                      "src": "2010:42:67",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                        "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 20903,
                        "name": "TokenImbalanceData",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 20795,
                        "src": "2010:18:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_storage_ptr",
                          "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 20912,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 20906,
                            "name": "tokenImbalanceData",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20801,
                            "src": "2092:18:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                              "typeString": "mapping(address => mapping(uint256 => uint256))"
                            }
                          },
                          "id": 20908,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 20907,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20871,
                            "src": "2111:5:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC20_$9533",
                              "typeString": "contract ERC20"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2092:25:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                            "typeString": "mapping(uint256 => uint256)"
                          }
                        },
                        "id": 20910,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 20909,
                          "name": "currentBlockIndex",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20881,
                          "src": "2118:17:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2092:44:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 20905,
                      "name": "decodeTokenImbalanceData",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21514,
                      "src": "2067:24:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_struct$_TokenImbalanceData_$20795_memory_ptr_$",
                        "typeString": "function (uint256) pure returns (struct VolumeImbalanceRecorder.TokenImbalanceData memory)"
                      }
                    },
                    "id": 20911,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2067:70:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                      "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2010:127:67"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 20916,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 20913,
                        "name": "currentBlockData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20904,
                        "src": "2226:16:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                          "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                        }
                      },
                      "id": 20914,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "lastBlock",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 20790,
                      "src": "2226:26:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 20915,
                      "name": "currentBlock",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20877,
                      "src": "2256:12:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2226:42:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 21016,
                    "nodeType": "Block",
                    "src": "3023:522:67",
                    "statements": [
                      {
                        "assignments": [],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 20972,
                            "name": "currentBlockImbalance",
                            "nodeType": "VariableDeclaration",
                            "scope": 21029,
                            "src": "3082:25:67",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "typeName": {
                              "id": 20971,
                              "name": "int",
                              "nodeType": "ElementaryTypeName",
                              "src": "3082:3:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 20973,
                        "initialValue": null,
                        "nodeType": "VariableDeclarationStatement",
                        "src": "3082:25:67"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 20982,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "components": [
                              {
                                "argumentTypes": null,
                                "id": 20974,
                                "name": "prevImbalance",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20900,
                                "src": "3122:13:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 20975,
                                "name": "currentBlockImbalance",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20972,
                                "src": "3137:21:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 20976,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "TupleExpression",
                            "src": "3121:38:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$_t_int256_$_t_int256_$",
                              "typeString": "tuple(int256,int256)"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 20978,
                                "name": "token",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20871,
                                "src": "3190:5:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_ERC20_$9533",
                                  "typeString": "contract ERC20"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 20979,
                                "name": "rateUpdateBlock",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20875,
                                "src": "3197:15:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 20980,
                                "name": "currentBlock",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20877,
                                "src": "3214:12:67",
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
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "id": 20977,
                              "name": "getImbalanceSinceRateUpdate",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21237,
                              "src": "3162:27:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_contract$_ERC20_$9533_$_t_uint256_$_t_uint256_$returns$_t_int256_$_t_int256_$",
                                "typeString": "function (contract ERC20,uint256,uint256) view returns (int256,int256)"
                              }
                            },
                            "id": 20981,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3162:65:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$_t_int256_$_t_int256_$",
                              "typeString": "tuple(int256,int256)"
                            }
                          },
                          "src": "3121:106:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 20983,
                        "nodeType": "ExpressionStatement",
                        "src": "3121:106:67"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 20988,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 20984,
                              "name": "currentBlockData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20904,
                              "src": "3242:16:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                              }
                            },
                            "id": 20986,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberName": "lastBlockBuyUnitsImbalance",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 20788,
                            "src": "3242:43:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 20987,
                            "name": "recordedBuyAmount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20887,
                            "src": "3288:17:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "3242:63:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 20989,
                        "nodeType": "ExpressionStatement",
                        "src": "3242:63:67"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 20996,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 20990,
                              "name": "currentBlockData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20904,
                              "src": "3319:16:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                              }
                            },
                            "id": 20992,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberName": "lastBlock",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 20790,
                            "src": "3319:26:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 20994,
                                "name": "currentBlock",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20877,
                                "src": "3353:12:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "id": 20993,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3348:4:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": "uint"
                            },
                            "id": 20995,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3348:18:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3319:47:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 20997,
                        "nodeType": "ExpressionStatement",
                        "src": "3319:47:67"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 21004,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 20998,
                              "name": "currentBlockData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20904,
                              "src": "3380:16:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                              }
                            },
                            "id": 21000,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberName": "lastRateUpdateBlock",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 20794,
                            "src": "3380:36:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 21002,
                                "name": "rateUpdateBlock",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20875,
                                "src": "3424:15:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "id": 21001,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3419:4:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": "uint"
                            },
                            "id": 21003,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3419:21:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3380:60:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 21005,
                        "nodeType": "ExpressionStatement",
                        "src": "3380:60:67"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 21014,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 21006,
                              "name": "currentBlockData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20904,
                              "src": "3454:16:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                              }
                            },
                            "id": 21008,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberName": "totalBuyUnitsImbalance",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 20792,
                            "src": "3454:39:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 21013,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 21010,
                                  "name": "prevImbalance",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 20900,
                                  "src": "3500:13:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                ],
                                "id": 21009,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3496:3:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_int256_$",
                                  "typeString": "type(int256)"
                                },
                                "typeName": "int"
                              },
                              "id": 21011,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3496:18:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "+",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 21012,
                              "name": "recordedBuyAmount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 20887,
                              "src": "3517:17:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "3496:38:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "3454:80:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 21015,
                        "nodeType": "ExpressionStatement",
                        "src": "3454:80:67"
                      }
                    ]
                  },
                  "id": 21017,
                  "nodeType": "IfStatement",
                  "src": "2222:1323:67",
                  "trueBody": {
                    "id": 20970,
                    "nodeType": "Block",
                    "src": "2270:747:67",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 20922,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 20918,
                                  "name": "currentBlockData",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 20904,
                                  "src": "2293:16:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                    "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                                  }
                                },
                                "id": 20919,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "lastRateUpdateBlock",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 20794,
                                "src": "2293:36:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "id": 20917,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "2288:4:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": "uint"
                            },
                            "id": 20920,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2288:42:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 20921,
                            "name": "rateUpdateBlock",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20875,
                            "src": "2334:15:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2288:61:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "id": 20968,
                          "nodeType": "Block",
                          "src": "2575:432:67",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 20942,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "id": 20936,
                                  "name": "prevImbalance",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 20900,
                                  "src": "2661:13:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "id": 20938,
                                      "name": "token",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20871,
                                      "src": "2697:5:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_ERC20_$9533",
                                        "typeString": "contract ERC20"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 20939,
                                      "name": "rateUpdateBlock",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20875,
                                      "src": "2704:15:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 20940,
                                      "name": "currentBlock",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20877,
                                      "src": "2721:12:67",
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
                                      },
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "id": 20937,
                                    "name": "getImbalanceInRange",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 21117,
                                    "src": "2677:19:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_view$_t_contract$_ERC20_$9533_$_t_uint256_$_t_uint256_$returns$_t_int256_$",
                                      "typeString": "function (contract ERC20,uint256,uint256) view returns (int256)"
                                    }
                                  },
                                  "id": 20941,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2677:57:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "src": "2661:73:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "id": 20943,
                              "nodeType": "ExpressionStatement",
                              "src": "2661:73:67"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 20952,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 20944,
                                    "name": "currentBlockData",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 20904,
                                    "src": "2752:16:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                      "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                                    }
                                  },
                                  "id": 20946,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "memberName": "totalBuyUnitsImbalance",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 20792,
                                  "src": "2752:39:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  },
                                  "id": 20951,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "id": 20948,
                                        "name": "prevImbalance",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 20900,
                                        "src": "2798:13:67",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      ],
                                      "id": 20947,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "ElementaryTypeNameExpression",
                                      "src": "2794:3:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_int256_$",
                                        "typeString": "type(int256)"
                                      },
                                      "typeName": "int"
                                    },
                                    "id": 20949,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "2794:18:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "+",
                                  "rightExpression": {
                                    "argumentTypes": null,
                                    "id": 20950,
                                    "name": "recordedBuyAmount",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 20887,
                                    "src": "2815:17:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  },
                                  "src": "2794:38:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "src": "2752:80:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "id": 20953,
                              "nodeType": "ExpressionStatement",
                              "src": "2752:80:67"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 20958,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 20954,
                                    "name": "currentBlockData",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 20904,
                                    "src": "2850:16:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                      "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                                    }
                                  },
                                  "id": 20956,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "memberName": "lastBlockBuyUnitsImbalance",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 20788,
                                  "src": "2850:43:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "+=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "id": 20957,
                                  "name": "recordedBuyAmount",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 20887,
                                  "src": "2897:17:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "src": "2850:64:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "id": 20959,
                              "nodeType": "ExpressionStatement",
                              "src": "2850:64:67"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 20966,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 20960,
                                    "name": "currentBlockData",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 20904,
                                    "src": "2932:16:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                      "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                                    }
                                  },
                                  "id": 20962,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "memberName": "lastRateUpdateBlock",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 20794,
                                  "src": "2932:36:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "id": 20964,
                                      "name": "rateUpdateBlock",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20875,
                                      "src": "2976:15:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "id": 20963,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "2971:4:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_uint256_$",
                                      "typeString": "type(uint256)"
                                    },
                                    "typeName": "uint"
                                  },
                                  "id": 20965,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2971:21:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "2932:60:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 20967,
                              "nodeType": "ExpressionStatement",
                              "src": "2932:60:67"
                            }
                          ]
                        },
                        "id": 20969,
                        "nodeType": "IfStatement",
                        "src": "2284:723:67",
                        "trueBody": {
                          "id": 20935,
                          "nodeType": "Block",
                          "src": "2351:218:67",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 20927,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 20923,
                                    "name": "currentBlockData",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 20904,
                                    "src": "2412:16:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                      "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                                    }
                                  },
                                  "id": 20925,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "memberName": "lastBlockBuyUnitsImbalance",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 20788,
                                  "src": "2412:43:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "+=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "id": 20926,
                                  "name": "recordedBuyAmount",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 20887,
                                  "src": "2459:17:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "src": "2412:64:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "id": 20928,
                              "nodeType": "ExpressionStatement",
                              "src": "2412:64:67"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 20933,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 20929,
                                    "name": "currentBlockData",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 20904,
                                    "src": "2494:16:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                      "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                                    }
                                  },
                                  "id": 20931,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "memberName": "totalBuyUnitsImbalance",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 20792,
                                  "src": "2494:39:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "+=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "id": 20932,
                                  "name": "recordedBuyAmount",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 20887,
                                  "src": "2537:17:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "src": "2494:60:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "id": 20934,
                              "nodeType": "ExpressionStatement",
                              "src": "2494:60:67"
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 21026,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 21018,
                          "name": "tokenImbalanceData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20801,
                          "src": "3555:18:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(uint256 => uint256))"
                          }
                        },
                        "id": 21021,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 21019,
                          "name": "token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20871,
                          "src": "3574:5:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_ERC20_$9533",
                            "typeString": "contract ERC20"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3555:25:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 21022,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 21020,
                        "name": "currentBlockIndex",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20881,
                        "src": "3581:17:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3555:44:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 21024,
                          "name": "currentBlockData",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20904,
                          "src": "3627:16:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                            "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                            "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                          }
                        ],
                        "id": 21023,
                        "name": "encodeTokenImbalanceData",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21429,
                        "src": "3602:24:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_struct$_TokenImbalanceData_$20795_memory_ptr_$returns$_t_uint256_$",
                          "typeString": "function (struct VolumeImbalanceRecorder.TokenImbalanceData memory) pure returns (uint256)"
                        }
                      },
                      "id": 21025,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3602:42:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3555:89:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 21027,
                  "nodeType": "ExpressionStatement",
                  "src": "3555:89:67"
                }
              ]
            },
            "documentation": null,
            "id": 21029,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "addImbalance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 20878,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 20871,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 21029,
                  "src": "1676:11:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 20870,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "1676:5:67",
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
                  "id": 20873,
                  "name": "buyAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 21029,
                  "src": "1697:13:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 20872,
                    "name": "int",
                    "nodeType": "ElementaryTypeName",
                    "src": "1697:3:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 20875,
                  "name": "rateUpdateBlock",
                  "nodeType": "VariableDeclaration",
                  "scope": 21029,
                  "src": "1720:20:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20874,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1720:4:67",
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
                  "id": 20877,
                  "name": "currentBlock",
                  "nodeType": "VariableDeclaration",
                  "scope": 21029,
                  "src": "1750:17:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20876,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1750:4:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1666:107:67"
            },
            "payable": false,
            "returnParameters": {
              "id": 20879,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1795:0:67"
            },
            "scope": 21515,
            "src": "1645:2006:67",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 21054,
              "nodeType": "Block",
              "src": "3715:122:67",
              "statements": [
                {
                  "body": {
                    "id": 21052,
                    "nodeType": "Block",
                    "src": "3772:59:67",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 21050,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "id": 21044,
                                "name": "tokenImbalanceData",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20801,
                                "src": "3786:18:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                                  "typeString": "mapping(address => mapping(uint256 => uint256))"
                                }
                              },
                              "id": 21047,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 21045,
                                "name": "token",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 21031,
                                "src": "3805:5:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_ERC20_$9533",
                                  "typeString": "contract ERC20"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "3786:25:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                "typeString": "mapping(uint256 => uint256)"
                              }
                            },
                            "id": 21048,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 21046,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21035,
                              "src": "3812:1:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "3786:28:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "hexValue": "307831",
                            "id": 21049,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3817:3:67",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "0x1"
                          },
                          "src": "3786:34:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 21051,
                        "nodeType": "ExpressionStatement",
                        "src": "3786:34:67"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 21040,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 21038,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21035,
                      "src": "3742:1:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 21039,
                      "name": "SLIDING_WINDOW_SIZE",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20770,
                      "src": "3746:19:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3742:23:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 21053,
                  "initializationExpression": {
                    "assignments": [
                      21035
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 21035,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 21055,
                        "src": "3730:6:67",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 21034,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "3730:4:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 21037,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 21036,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3739:1:67",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "3730:10:67"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 21042,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "3767:3:67",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 21041,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21035,
                        "src": "3767:1:67",
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
                    "id": 21043,
                    "nodeType": "ExpressionStatement",
                    "src": "3767:3:67"
                  },
                  "nodeType": "ForStatement",
                  "src": "3725:106:67"
                }
              ]
            },
            "documentation": null,
            "id": 21055,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setGarbageToVolumeRecorder",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 21032,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21031,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 21055,
                  "src": "3693:11:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 21030,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "3693:5:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9533",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3692:13:67"
            },
            "payable": false,
            "returnParameters": {
              "id": 21033,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3715:0:67"
            },
            "scope": 21515,
            "src": "3657:180:67",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 21116,
              "nodeType": "Block",
              "src": "3957:524:67",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 21069,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 21067,
                          "name": "startBlock",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21059,
                          "src": "4028:10:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 21068,
                          "name": "endBlock",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21061,
                          "src": "4042:8:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4028:22:67",
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
                      "id": 21066,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "4020:7:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 21070,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4020:31:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 21071,
                  "nodeType": "ExpressionStatement",
                  "src": "4020:31:67"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 21074,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 21072,
                      "name": "buyImbalance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21064,
                      "src": "4062:12:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 21073,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4077:1:67",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "4062:16:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 21075,
                  "nodeType": "ExpressionStatement",
                  "src": "4062:16:67"
                },
                {
                  "body": {
                    "id": 21114,
                    "nodeType": "Block",
                    "src": "4160:315:67",
                    "statements": [
                      {
                        "assignments": [
                          21087
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 21087,
                            "name": "perBlockData",
                            "nodeType": "VariableDeclaration",
                            "scope": 21117,
                            "src": "4174:38:67",
                            "stateVariable": false,
                            "storageLocation": "memory",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                              "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData"
                            },
                            "typeName": {
                              "contractScope": null,
                              "id": 21086,
                              "name": "TokenImbalanceData",
                              "nodeType": "UserDefinedTypeName",
                              "referencedDeclaration": 20795,
                              "src": "4174:18:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_storage_ptr",
                                "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 21095,
                        "initialValue": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 21089,
                                  "name": "tokenImbalanceData",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 20801,
                                  "src": "4240:18:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                                    "typeString": "mapping(address => mapping(uint256 => uint256))"
                                  }
                                },
                                "id": 21091,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 21090,
                                  "name": "token",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 21057,
                                  "src": "4259:5:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_ERC20_$9533",
                                    "typeString": "contract ERC20"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "4240:25:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                  "typeString": "mapping(uint256 => uint256)"
                                }
                              },
                              "id": 21093,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 21092,
                                "name": "windowInd",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 21077,
                                "src": "4266:9:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "4240:36:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 21088,
                            "name": "decodeTokenImbalanceData",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21514,
                            "src": "4215:24:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_struct$_TokenImbalanceData_$20795_memory_ptr_$",
                              "typeString": "function (uint256) pure returns (struct VolumeImbalanceRecorder.TokenImbalanceData memory)"
                            }
                          },
                          "id": 21094,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4215:62:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                            "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "4174:103:67"
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 21104,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 21099,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 21096,
                                "name": "perBlockData",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 21087,
                                "src": "4296:12:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                  "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                                }
                              },
                              "id": 21097,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "lastBlock",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 20790,
                              "src": "4296:22:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "<=",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 21098,
                              "name": "endBlock",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21061,
                              "src": "4322:8:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "4296:34:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&&",
                          "rightExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 21103,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 21100,
                                "name": "perBlockData",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 21087,
                                "src": "4334:12:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                  "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                                }
                              },
                              "id": 21101,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "lastBlock",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 20790,
                              "src": "4334:22:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">=",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 21102,
                              "name": "startBlock",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21059,
                              "src": "4360:10:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "4334:36:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "4296:74:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 21113,
                        "nodeType": "IfStatement",
                        "src": "4292:173:67",
                        "trueBody": {
                          "id": 21112,
                          "nodeType": "Block",
                          "src": "4372:93:67",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 21110,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "id": 21105,
                                  "name": "buyImbalance",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 21064,
                                  "src": "4390:12:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "+=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 21107,
                                        "name": "perBlockData",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 21087,
                                        "src": "4410:12:67",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                          "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                                        }
                                      },
                                      "id": 21108,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "lastBlockBuyUnitsImbalance",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 20788,
                                      "src": "4410:39:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    ],
                                    "id": 21106,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "4406:3:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_int256_$",
                                      "typeString": "type(int256)"
                                    },
                                    "typeName": "int"
                                  },
                                  "id": 21109,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "4406:44:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "src": "4390:60:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "id": 21111,
                              "nodeType": "ExpressionStatement",
                              "src": "4390:60:67"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 21082,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 21080,
                      "name": "windowInd",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21077,
                      "src": "4114:9:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 21081,
                      "name": "SLIDING_WINDOW_SIZE",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20770,
                      "src": "4126:19:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4114:31:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 21115,
                  "initializationExpression": {
                    "assignments": [
                      21077
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 21077,
                        "name": "windowInd",
                        "nodeType": "VariableDeclaration",
                        "scope": 21117,
                        "src": "4094:14:67",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 21076,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "4094:4:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 21079,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 21078,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4111:1:67",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4094:18:67"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 21084,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "4147:11:67",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 21083,
                        "name": "windowInd",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21077,
                        "src": "4147:9:67",
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
                    "id": 21085,
                    "nodeType": "ExpressionStatement",
                    "src": "4147:11:67"
                  },
                  "nodeType": "ForStatement",
                  "src": "4089:386:67"
                }
              ]
            },
            "documentation": null,
            "id": 21117,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getImbalanceInRange",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 21062,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21057,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 21117,
                  "src": "3872:11:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 21056,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "3872:5:67",
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
                  "id": 21059,
                  "name": "startBlock",
                  "nodeType": "VariableDeclaration",
                  "scope": 21117,
                  "src": "3885:15:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 21058,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3885:4:67",
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
                  "id": 21061,
                  "name": "endBlock",
                  "nodeType": "VariableDeclaration",
                  "scope": 21117,
                  "src": "3902:13:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 21060,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3902:4:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3871:45:67"
            },
            "payable": false,
            "returnParameters": {
              "id": 21065,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21064,
                  "name": "buyImbalance",
                  "nodeType": "VariableDeclaration",
                  "scope": 21117,
                  "src": "3939:16:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 21063,
                    "name": "int",
                    "nodeType": "ElementaryTypeName",
                    "src": "3939:3:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3938:18:67"
            },
            "scope": 21515,
            "src": "3843:638:67",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 21236,
              "nodeType": "Block",
              "src": "4665:1115:67",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 21132,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 21130,
                      "name": "buyImbalance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21126,
                      "src": "4675:12:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 21131,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4690:1:67",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "4675:16:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 21133,
                  "nodeType": "ExpressionStatement",
                  "src": "4675:16:67"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 21136,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 21134,
                      "name": "currentBlockImbalance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21128,
                      "src": "4701:21:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 21135,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4725:1:67",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "4701:25:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 21137,
                  "nodeType": "ExpressionStatement",
                  "src": "4701:25:67"
                },
                {
                  "assignments": [
                    21139
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 21139,
                      "name": "latestBlock",
                      "nodeType": "VariableDeclaration",
                      "scope": 21237,
                      "src": "4736:16:67",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 21138,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "4736:4:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 21141,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 21140,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "4755:1:67",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4736:20:67"
                },
                {
                  "assignments": [
                    21143
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 21143,
                      "name": "imbalanceInRange",
                      "nodeType": "VariableDeclaration",
                      "scope": 21237,
                      "src": "4766:20:67",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 21142,
                        "name": "int",
                        "nodeType": "ElementaryTypeName",
                        "src": "4766:3:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 21145,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 21144,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "4789:1:67",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4766:24:67"
                },
                {
                  "assignments": [
                    21147
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 21147,
                      "name": "startBlock",
                      "nodeType": "VariableDeclaration",
                      "scope": 21237,
                      "src": "4800:15:67",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 21146,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "4800:4:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 21149,
                  "initialValue": {
                    "argumentTypes": null,
                    "id": 21148,
                    "name": "rateUpdateBlock",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 21121,
                    "src": "4818:15:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4800:33:67"
                },
                {
                  "assignments": [
                    21151
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 21151,
                      "name": "endBlock",
                      "nodeType": "VariableDeclaration",
                      "scope": 21237,
                      "src": "4843:13:67",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 21150,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "4843:4:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 21153,
                  "initialValue": {
                    "argumentTypes": null,
                    "id": 21152,
                    "name": "currentBlock",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 21123,
                    "src": "4859:12:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4843:28:67"
                },
                {
                  "body": {
                    "id": 21225,
                    "nodeType": "Block",
                    "src": "4953:732:67",
                    "statements": [
                      {
                        "assignments": [
                          21165
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 21165,
                            "name": "perBlockData",
                            "nodeType": "VariableDeclaration",
                            "scope": 21237,
                            "src": "4967:38:67",
                            "stateVariable": false,
                            "storageLocation": "memory",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                              "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData"
                            },
                            "typeName": {
                              "contractScope": null,
                              "id": 21164,
                              "name": "TokenImbalanceData",
                              "nodeType": "UserDefinedTypeName",
                              "referencedDeclaration": 20795,
                              "src": "4967:18:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_storage_ptr",
                                "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 21173,
                        "initialValue": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "baseExpression": {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 21167,
                                  "name": "tokenImbalanceData",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 20801,
                                  "src": "5033:18:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_uint256_$_$",
                                    "typeString": "mapping(address => mapping(uint256 => uint256))"
                                  }
                                },
                                "id": 21169,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 21168,
                                  "name": "token",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 21119,
                                  "src": "5052:5:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_ERC20_$9533",
                                    "typeString": "contract ERC20"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "5033:25:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                                  "typeString": "mapping(uint256 => uint256)"
                                }
                              },
                              "id": 21171,
                              "indexExpression": {
                                "argumentTypes": null,
                                "id": 21170,
                                "name": "windowInd",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 21155,
                                "src": "5059:9:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "5033:36:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 21166,
                            "name": "decodeTokenImbalanceData",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21514,
                            "src": "5008:24:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_struct$_TokenImbalanceData_$20795_memory_ptr_$",
                              "typeString": "function (uint256) pure returns (struct VolumeImbalanceRecorder.TokenImbalanceData memory)"
                            }
                          },
                          "id": 21172,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5008:62:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                            "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "4967:103:67"
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "id": 21182,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 21177,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 21174,
                                "name": "perBlockData",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 21165,
                                "src": "5089:12:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                  "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                                }
                              },
                              "id": 21175,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "lastBlock",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 20790,
                              "src": "5089:22:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "<=",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 21176,
                              "name": "endBlock",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21151,
                              "src": "5115:8:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "5089:34:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "&&",
                          "rightExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 21181,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 21178,
                                "name": "perBlockData",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 21165,
                                "src": "5127:12:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                  "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                                }
                              },
                              "id": 21179,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "lastBlock",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 20790,
                              "src": "5127:22:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">=",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 21180,
                              "name": "startBlock",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21147,
                              "src": "5153:10:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "5127:36:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "5089:74:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 21189,
                        "nodeType": "IfStatement",
                        "src": "5085:172:67",
                        "trueBody": {
                          "id": 21188,
                          "nodeType": "Block",
                          "src": "5165:92:67",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 21186,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "id": 21183,
                                  "name": "imbalanceInRange",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 21143,
                                  "src": "5183:16:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "+=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 21184,
                                    "name": "perBlockData",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 21165,
                                    "src": "5203:12:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                      "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                                    }
                                  },
                                  "id": 21185,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "lastBlockBuyUnitsImbalance",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 20788,
                                  "src": "5203:39:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "src": "5183:59:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "id": 21187,
                              "nodeType": "ExpressionStatement",
                              "src": "5183:59:67"
                            }
                          ]
                        }
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 21193,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 21190,
                              "name": "perBlockData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21165,
                              "src": "5275:12:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                              }
                            },
                            "id": 21191,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "lastRateUpdateBlock",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 20794,
                            "src": "5275:32:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 21192,
                            "name": "rateUpdateBlock",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21121,
                            "src": "5311:15:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5275:51:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 21195,
                        "nodeType": "IfStatement",
                        "src": "5271:65:67",
                        "trueBody": {
                          "id": 21194,
                          "nodeType": "Continue",
                          "src": "5328:8:67"
                        }
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 21199,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 21196,
                              "name": "perBlockData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21165,
                              "src": "5354:12:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                              }
                            },
                            "id": 21197,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "lastBlock",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 20790,
                            "src": "5354:22:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 21198,
                            "name": "latestBlock",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21139,
                            "src": "5379:11:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5354:36:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 21201,
                        "nodeType": "IfStatement",
                        "src": "5350:50:67",
                        "trueBody": {
                          "id": 21200,
                          "nodeType": "Continue",
                          "src": "5392:8:67"
                        }
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 21205,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 21202,
                            "name": "latestBlock",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21139,
                            "src": "5415:11:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 21203,
                              "name": "perBlockData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21165,
                              "src": "5429:12:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                              }
                            },
                            "id": 21204,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "lastBlock",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 20790,
                            "src": "5429:22:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5415:36:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 21206,
                        "nodeType": "ExpressionStatement",
                        "src": "5415:36:67"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 21210,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 21207,
                            "name": "buyImbalance",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21126,
                            "src": "5465:12:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 21208,
                              "name": "perBlockData",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21165,
                              "src": "5480:12:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                              }
                            },
                            "id": 21209,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "totalBuyUnitsImbalance",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 20792,
                            "src": "5480:35:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "5465:50:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 21211,
                        "nodeType": "ExpressionStatement",
                        "src": "5465:50:67"
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 21217,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 21213,
                                  "name": "perBlockData",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 21165,
                                  "src": "5538:12:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                    "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                                  }
                                },
                                "id": 21214,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "lastBlock",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 20790,
                                "src": "5538:22:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "id": 21212,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "5533:4:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": "uint"
                            },
                            "id": 21215,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5533:28:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 21216,
                            "name": "currentBlock",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21123,
                            "src": "5565:12:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5533:44:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 21224,
                        "nodeType": "IfStatement",
                        "src": "5529:146:67",
                        "trueBody": {
                          "id": 21223,
                          "nodeType": "Block",
                          "src": "5579:96:67",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 21221,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "id": 21218,
                                  "name": "currentBlockImbalance",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 21128,
                                  "src": "5597:21:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 21219,
                                    "name": "perBlockData",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 21165,
                                    "src": "5621:12:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                      "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                                    }
                                  },
                                  "id": 21220,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "lastBlockBuyUnitsImbalance",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 20788,
                                  "src": "5621:39:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "src": "5597:63:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "id": 21222,
                              "nodeType": "ExpressionStatement",
                              "src": "5597:63:67"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 21160,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 21158,
                      "name": "windowInd",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21155,
                      "src": "4907:9:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 21159,
                      "name": "SLIDING_WINDOW_SIZE",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 20770,
                      "src": "4919:19:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4907:31:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 21226,
                  "initializationExpression": {
                    "assignments": [
                      21155
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 21155,
                        "name": "windowInd",
                        "nodeType": "VariableDeclaration",
                        "scope": 21237,
                        "src": "4887:14:67",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 21154,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "4887:4:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 21157,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 21156,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4904:1:67",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "4887:18:67"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 21162,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "4940:11:67",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 21161,
                        "name": "windowInd",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21155,
                        "src": "4940:9:67",
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
                    "id": 21163,
                    "nodeType": "ExpressionStatement",
                    "src": "4940:11:67"
                  },
                  "nodeType": "ForStatement",
                  "src": "4882:803:67"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 21229,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 21227,
                      "name": "buyImbalance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21126,
                      "src": "5699:12:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 21228,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5715:1:67",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "5699:17:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 21235,
                  "nodeType": "IfStatement",
                  "src": "5695:79:67",
                  "trueBody": {
                    "id": 21234,
                    "nodeType": "Block",
                    "src": "5718:56:67",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 21232,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 21230,
                            "name": "buyImbalance",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21126,
                            "src": "5732:12:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "id": 21231,
                            "name": "imbalanceInRange",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21143,
                            "src": "5747:16:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "5732:31:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 21233,
                        "nodeType": "ExpressionStatement",
                        "src": "5732:31:67"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 21237,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getImbalanceSinceRateUpdate",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 21124,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21119,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 21237,
                  "src": "4524:11:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 21118,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "4524:5:67",
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
                  "id": 21121,
                  "name": "rateUpdateBlock",
                  "nodeType": "VariableDeclaration",
                  "scope": 21237,
                  "src": "4537:20:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 21120,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4537:4:67",
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
                  "id": 21123,
                  "name": "currentBlock",
                  "nodeType": "VariableDeclaration",
                  "scope": 21237,
                  "src": "4559:17:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 21122,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4559:4:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4523:54:67"
            },
            "payable": false,
            "returnParameters": {
              "id": 21129,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21126,
                  "name": "buyImbalance",
                  "nodeType": "VariableDeclaration",
                  "scope": 21237,
                  "src": "4616:16:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 21125,
                    "name": "int",
                    "nodeType": "ElementaryTypeName",
                    "src": "4616:3:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 21128,
                  "name": "currentBlockImbalance",
                  "nodeType": "VariableDeclaration",
                  "scope": 21237,
                  "src": "4634:25:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 21127,
                    "name": "int",
                    "nodeType": "ElementaryTypeName",
                    "src": "4634:3:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4615:45:67"
            },
            "scope": 21515,
            "src": "4487:1293:67",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 21277,
              "nodeType": "Block",
              "src": "5951:350:67",
              "statements": [
                {
                  "assignments": [
                    21251
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 21251,
                      "name": "resolution",
                      "nodeType": "VariableDeclaration",
                      "scope": 21278,
                      "src": "5962:14:67",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 21250,
                        "name": "int",
                        "nodeType": "ElementaryTypeName",
                        "src": "5962:3:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 21258,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 21253,
                            "name": "tokenControlInfo",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20786,
                            "src": "5983:16:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_struct$_TokenControlInfo_$20782_storage_$",
                              "typeString": "mapping(address => struct VolumeImbalanceRecorder.TokenControlInfo storage ref)"
                            }
                          },
                          "id": 21255,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 21254,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21239,
                            "src": "6000:5:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC20_$9533",
                              "typeString": "contract ERC20"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "5983:23:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_TokenControlInfo_$20782_storage",
                            "typeString": "struct VolumeImbalanceRecorder.TokenControlInfo storage ref"
                          }
                        },
                        "id": 21256,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "minimalRecordResolution",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 20777,
                        "src": "5983:47:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 21252,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "5979:3:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_int256_$",
                        "typeString": "type(int256)"
                      },
                      "typeName": "int"
                    },
                    "id": 21257,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5979:52:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5962:69:67"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 21267,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "id": 21259,
                          "name": "totalImbalance",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21246,
                          "src": "6043:14:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 21260,
                          "name": "currentBlockImbalance",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21248,
                          "src": "6059:21:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        }
                      ],
                      "id": 21261,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "TupleExpression",
                      "src": "6042:39:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_int256_$_t_int256_$",
                        "typeString": "tuple(int256,int256)"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 21263,
                          "name": "token",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21239,
                          "src": "6141:5:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_ERC20_$9533",
                            "typeString": "contract ERC20"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 21264,
                          "name": "rateUpdateBlock",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21241,
                          "src": "6164:15:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 21265,
                          "name": "currentBlock",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21243,
                          "src": "6197:12:67",
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
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 21262,
                        "name": "getImbalanceSinceRateUpdate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21237,
                        "src": "6096:27:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_contract$_ERC20_$9533_$_t_uint256_$_t_uint256_$returns$_t_int256_$_t_int256_$",
                          "typeString": "function (contract ERC20,uint256,uint256) view returns (int256,int256)"
                        }
                      },
                      "id": 21266,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6096:114:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$_t_int256_$_t_int256_$",
                        "typeString": "tuple(int256,int256)"
                      }
                    },
                    "src": "6042:168:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 21268,
                  "nodeType": "ExpressionStatement",
                  "src": "6042:168:67"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 21271,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 21269,
                      "name": "totalImbalance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21246,
                      "src": "6221:14:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "*=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 21270,
                      "name": "resolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21251,
                      "src": "6239:10:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "6221:28:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 21272,
                  "nodeType": "ExpressionStatement",
                  "src": "6221:28:67"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 21275,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 21273,
                      "name": "currentBlockImbalance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21248,
                      "src": "6259:21:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "*=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 21274,
                      "name": "resolution",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21251,
                      "src": "6284:10:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "6259:35:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 21276,
                  "nodeType": "ExpressionStatement",
                  "src": "6259:35:67"
                }
              ]
            },
            "documentation": null,
            "id": 21278,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getImbalance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 21244,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21239,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 21278,
                  "src": "5808:11:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 21238,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "5808:5:67",
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
                  "id": 21241,
                  "name": "rateUpdateBlock",
                  "nodeType": "VariableDeclaration",
                  "scope": 21278,
                  "src": "5821:20:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 21240,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "5821:4:67",
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
                  "id": 21243,
                  "name": "currentBlock",
                  "nodeType": "VariableDeclaration",
                  "scope": 21278,
                  "src": "5843:17:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 21242,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "5843:4:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5807:54:67"
            },
            "payable": false,
            "returnParameters": {
              "id": 21249,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21246,
                  "name": "totalImbalance",
                  "nodeType": "VariableDeclaration",
                  "scope": 21278,
                  "src": "5900:18:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 21245,
                    "name": "int",
                    "nodeType": "ElementaryTypeName",
                    "src": "5900:3:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 21248,
                  "name": "currentBlockImbalance",
                  "nodeType": "VariableDeclaration",
                  "scope": 21278,
                  "src": "5920:25:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 21247,
                    "name": "int",
                    "nodeType": "ElementaryTypeName",
                    "src": "5920:3:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5899:47:67"
            },
            "scope": 21515,
            "src": "5786:515:67",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 21290,
              "nodeType": "Block",
              "src": "6381:68:67",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 21285,
                        "name": "tokenControlInfo",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20786,
                        "src": "6398:16:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_struct$_TokenControlInfo_$20782_storage_$",
                          "typeString": "mapping(address => struct VolumeImbalanceRecorder.TokenControlInfo storage ref)"
                        }
                      },
                      "id": 21287,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 21286,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21280,
                        "src": "6415:5:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$9533",
                          "typeString": "contract ERC20"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "6398:23:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_TokenControlInfo_$20782_storage",
                        "typeString": "struct VolumeImbalanceRecorder.TokenControlInfo storage ref"
                      }
                    },
                    "id": 21288,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "maxPerBlockImbalance",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 20779,
                    "src": "6398:44:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 21284,
                  "id": 21289,
                  "nodeType": "Return",
                  "src": "6391:51:67"
                }
              ]
            },
            "documentation": null,
            "id": 21291,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getMaxPerBlockImbalance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 21281,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21280,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 21291,
                  "src": "6340:11:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 21279,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "6340:5:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9533",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6339:13:67"
            },
            "payable": false,
            "returnParameters": {
              "id": 21284,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21283,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 21291,
                  "src": "6375:4:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 21282,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "6375:4:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6374:6:67"
            },
            "scope": 21515,
            "src": "6307:142:67",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 21303,
              "nodeType": "Block",
              "src": "6526:65:67",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 21298,
                        "name": "tokenControlInfo",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20786,
                        "src": "6543:16:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_struct$_TokenControlInfo_$20782_storage_$",
                          "typeString": "mapping(address => struct VolumeImbalanceRecorder.TokenControlInfo storage ref)"
                        }
                      },
                      "id": 21300,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 21299,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21293,
                        "src": "6560:5:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$9533",
                          "typeString": "contract ERC20"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "6543:23:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_TokenControlInfo_$20782_storage",
                        "typeString": "struct VolumeImbalanceRecorder.TokenControlInfo storage ref"
                      }
                    },
                    "id": 21301,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "maxTotalImbalance",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 20781,
                    "src": "6543:41:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 21297,
                  "id": 21302,
                  "nodeType": "Return",
                  "src": "6536:48:67"
                }
              ]
            },
            "documentation": null,
            "id": 21304,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getMaxTotalImbalance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 21294,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21293,
                  "name": "token",
                  "nodeType": "VariableDeclaration",
                  "scope": 21304,
                  "src": "6485:11:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 21292,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "6485:5:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9533",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6484:13:67"
            },
            "payable": false,
            "returnParameters": {
              "id": 21297,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21296,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 21304,
                  "src": "6520:4:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 21295,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "6520:4:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6519:6:67"
            },
            "scope": 21515,
            "src": "6455:136:67",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 21428,
              "nodeType": "Block",
              "src": "6684:770:67",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 21319,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 21312,
                            "name": "data",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21306,
                            "src": "6733:4:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                              "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                            }
                          },
                          "id": 21313,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "lastBlockBuyUnitsImbalance",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 20788,
                          "src": "6733:31:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 21317,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "id": 21315,
                                "name": "POW_2_64",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20775,
                                "src": "6771:8:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "/",
                              "rightExpression": {
                                "argumentTypes": null,
                                "hexValue": "32",
                                "id": 21316,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "6782:1:67",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_2_by_1",
                                  "typeString": "int_const 2"
                                },
                                "value": "2"
                              },
                              "src": "6771:12:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 21314,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "6767:3:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_int256_$",
                              "typeString": "type(int256)"
                            },
                            "typeName": "int"
                          },
                          "id": 21318,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6767:17:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "6733:51:67",
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
                      "id": 21311,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "6725:7:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 21320,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6725:60:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 21321,
                  "nodeType": "ExpressionStatement",
                  "src": "6725:60:67"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 21335,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 21323,
                            "name": "data",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21306,
                            "src": "6803:4:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                              "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                            }
                          },
                          "id": 21324,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "lastBlockBuyUnitsImbalance",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 20788,
                          "src": "6803:31:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              "id": 21333,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 21331,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 21327,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "UnaryOperation",
                                  "operator": "-",
                                  "prefix": true,
                                  "src": "6841:2:67",
                                  "subExpression": {
                                    "argumentTypes": null,
                                    "hexValue": "31",
                                    "id": 21326,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "6842:1:67",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_1_by_1",
                                      "typeString": "int_const 1"
                                    },
                                    "value": "1"
                                  },
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_-1_by_1",
                                    "typeString": "int_const -1"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "*",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "id": 21329,
                                      "name": "POW_2_64",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20775,
                                      "src": "6850:8:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "id": 21328,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "6846:3:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_int256_$",
                                      "typeString": "type(int256)"
                                    },
                                    "typeName": "int"
                                  },
                                  "id": 21330,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "6846:13:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "src": "6841:18:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "/",
                              "rightExpression": {
                                "argumentTypes": null,
                                "hexValue": "32",
                                "id": 21332,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "6862:1:67",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_2_by_1",
                                  "typeString": "int_const 2"
                                },
                                "value": "2"
                              },
                              "src": "6841:22:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 21325,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "6837:3:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_int256_$",
                              "typeString": "type(int256)"
                            },
                            "typeName": "int"
                          },
                          "id": 21334,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6837:27:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "6803:61:67",
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
                      "id": 21322,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "6795:7:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 21336,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6795:70:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 21337,
                  "nodeType": "ExpressionStatement",
                  "src": "6795:70:67"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 21342,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 21339,
                            "name": "data",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21306,
                            "src": "6883:4:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                              "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                            }
                          },
                          "id": 21340,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "lastBlock",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 20790,
                          "src": "6883:14:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 21341,
                          "name": "POW_2_64",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20775,
                          "src": "6900:8:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "6883:25:67",
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
                      "id": 21338,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "6875:7:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 21343,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6875:34:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 21344,
                  "nodeType": "ExpressionStatement",
                  "src": "6875:34:67"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 21353,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 21346,
                            "name": "data",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21306,
                            "src": "6927:4:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                              "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                            }
                          },
                          "id": 21347,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "totalBuyUnitsImbalance",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 20792,
                          "src": "6927:27:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 21351,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "id": 21349,
                                "name": "POW_2_64",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 20775,
                                "src": "6961:8:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "/",
                              "rightExpression": {
                                "argumentTypes": null,
                                "hexValue": "32",
                                "id": 21350,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "6972:1:67",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_2_by_1",
                                  "typeString": "int_const 2"
                                },
                                "value": "2"
                              },
                              "src": "6961:12:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 21348,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "6957:3:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_int256_$",
                              "typeString": "type(int256)"
                            },
                            "typeName": "int"
                          },
                          "id": 21352,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6957:17:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "6927:47:67",
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
                      "id": 21345,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "6919:7:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 21354,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6919:56:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 21355,
                  "nodeType": "ExpressionStatement",
                  "src": "6919:56:67"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 21369,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 21357,
                            "name": "data",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21306,
                            "src": "6993:4:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                              "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                            }
                          },
                          "id": 21358,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "totalBuyUnitsImbalance",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 20792,
                          "src": "6993:27:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              "id": 21367,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 21365,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 21361,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "UnaryOperation",
                                  "operator": "-",
                                  "prefix": true,
                                  "src": "7027:2:67",
                                  "subExpression": {
                                    "argumentTypes": null,
                                    "hexValue": "31",
                                    "id": 21360,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "7028:1:67",
                                    "subdenomination": null,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_1_by_1",
                                      "typeString": "int_const 1"
                                    },
                                    "value": "1"
                                  },
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_-1_by_1",
                                    "typeString": "int_const -1"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "*",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "id": 21363,
                                      "name": "POW_2_64",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20775,
                                      "src": "7036:8:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "id": 21362,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "7032:3:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_int256_$",
                                      "typeString": "type(int256)"
                                    },
                                    "typeName": "int"
                                  },
                                  "id": 21364,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "7032:13:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "src": "7027:18:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "/",
                              "rightExpression": {
                                "argumentTypes": null,
                                "hexValue": "32",
                                "id": 21366,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "7048:1:67",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_2_by_1",
                                  "typeString": "int_const 2"
                                },
                                "value": "2"
                              },
                              "src": "7027:22:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 21359,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "7023:3:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_int256_$",
                              "typeString": "type(int256)"
                            },
                            "typeName": "int"
                          },
                          "id": 21368,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7023:27:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "6993:57:67",
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
                      "id": 21356,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "6985:7:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 21370,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6985:66:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 21371,
                  "nodeType": "ExpressionStatement",
                  "src": "6985:66:67"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 21376,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 21373,
                            "name": "data",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21306,
                            "src": "7069:4:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                              "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                            }
                          },
                          "id": 21374,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "lastRateUpdateBlock",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 20794,
                          "src": "7069:24:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 21375,
                          "name": "POW_2_64",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20775,
                          "src": "7096:8:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "7069:35:67",
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
                      "id": 21372,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "7061:7:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 21377,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7061:44:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 21378,
                  "nodeType": "ExpressionStatement",
                  "src": "7061:44:67"
                },
                {
                  "assignments": [
                    21380
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 21380,
                      "name": "result",
                      "nodeType": "VariableDeclaration",
                      "scope": 21429,
                      "src": "7139:11:67",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 21379,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "7139:4:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 21390,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 21389,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 21382,
                            "name": "data",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21306,
                            "src": "7158:4:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                              "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                            }
                          },
                          "id": 21383,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "lastBlockBuyUnitsImbalance",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 20788,
                          "src": "7158:31:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        ],
                        "id": 21381,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "7153:4:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": "uint"
                      },
                      "id": 21384,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7153:37:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&",
                    "rightExpression": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 21387,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 21385,
                            "name": "POW_2_64",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20775,
                            "src": "7194:8:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "31",
                            "id": 21386,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7205:1:67",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1_by_1",
                              "typeString": "int_const 1"
                            },
                            "value": "1"
                          },
                          "src": "7194:12:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 21388,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "7193:14:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7153:54:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7139:68:67"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 21396,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 21391,
                      "name": "result",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21380,
                      "src": "7217:6:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "|=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 21395,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 21392,
                          "name": "data",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 21306,
                          "src": "7227:4:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                            "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                          }
                        },
                        "id": 21393,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "lastBlock",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 20790,
                        "src": "7227:14:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 21394,
                        "name": "POW_2_64",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20775,
                        "src": "7244:8:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "7227:25:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7217:35:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 21397,
                  "nodeType": "ExpressionStatement",
                  "src": "7217:35:67"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 21413,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 21398,
                      "name": "result",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21380,
                      "src": "7262:6:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "|=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 21412,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 21410,
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
                              "id": 21407,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 21400,
                                      "name": "data",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 21306,
                                      "src": "7278:4:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                        "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                                      }
                                    },
                                    "id": 21401,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "totalBuyUnitsImbalance",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 20792,
                                    "src": "7278:27:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  ],
                                  "id": 21399,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "7273:4:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint256_$",
                                    "typeString": "type(uint256)"
                                  },
                                  "typeName": "uint"
                                },
                                "id": 21402,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "7273:33:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "&",
                              "rightExpression": {
                                "argumentTypes": null,
                                "components": [
                                  {
                                    "argumentTypes": null,
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 21405,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "argumentTypes": null,
                                      "id": 21403,
                                      "name": "POW_2_64",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20775,
                                      "src": "7310:8:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "-",
                                    "rightExpression": {
                                      "argumentTypes": null,
                                      "hexValue": "31",
                                      "id": 21404,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "7321:1:67",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_1_by_1",
                                        "typeString": "int_const 1"
                                      },
                                      "value": "1"
                                    },
                                    "src": "7310:12:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "id": 21406,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "7309:14:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "7273:50:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 21408,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "7272:52:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 21409,
                          "name": "POW_2_64",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20775,
                          "src": "7327:8:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "7272:63:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 21411,
                        "name": "POW_2_64",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20775,
                        "src": "7338:8:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "7272:74:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7262:84:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 21414,
                  "nodeType": "ExpressionStatement",
                  "src": "7262:84:67"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 21424,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 21415,
                      "name": "result",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21380,
                      "src": "7356:6:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "|=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 21423,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 21421,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 21419,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 21416,
                              "name": "data",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 21306,
                              "src": "7366:4:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                                "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                              }
                            },
                            "id": 21417,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "lastRateUpdateBlock",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 20794,
                            "src": "7366:24:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 21418,
                            "name": "POW_2_64",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 20775,
                            "src": "7393:8:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "7366:35:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 21420,
                          "name": "POW_2_64",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 20775,
                          "src": "7404:8:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "7366:46:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 21422,
                        "name": "POW_2_64",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 20775,
                        "src": "7415:8:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "7366:57:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7356:67:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 21425,
                  "nodeType": "ExpressionStatement",
                  "src": "7356:67:67"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 21426,
                    "name": "result",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 21380,
                    "src": "7441:6:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 21310,
                  "id": 21427,
                  "nodeType": "Return",
                  "src": "7434:13:67"
                }
              ]
            },
            "documentation": null,
            "id": 21429,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "encodeTokenImbalanceData",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 21307,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21306,
                  "name": "data",
                  "nodeType": "VariableDeclaration",
                  "scope": 21429,
                  "src": "6631:23:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                    "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 21305,
                    "name": "TokenImbalanceData",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 20795,
                    "src": "6631:18:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_storage_ptr",
                      "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6630:25:67"
            },
            "payable": false,
            "returnParameters": {
              "id": 21310,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21309,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 21429,
                  "src": "6678:4:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 21308,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "6678:4:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6677:6:67"
            },
            "scope": 21515,
            "src": "6597:857:67",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 21513,
              "nodeType": "Block",
              "src": "7548:417:67",
              "statements": [
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 21437,
                      "name": "data",
                      "nodeType": "VariableDeclaration",
                      "scope": 21514,
                      "src": "7558:30:67",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                        "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 21436,
                        "name": "TokenImbalanceData",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 20795,
                        "src": "7558:18:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_storage_ptr",
                          "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 21438,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7558:30:67"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 21452,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 21439,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21437,
                        "src": "7599:4:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                          "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                        }
                      },
                      "id": 21441,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "lastBlockBuyUnitsImbalance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 20788,
                      "src": "7599:31:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
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
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 21449,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "id": 21444,
                                "name": "input",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 21431,
                                "src": "7643:5:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "&",
                              "rightExpression": {
                                "argumentTypes": null,
                                "components": [
                                  {
                                    "argumentTypes": null,
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 21447,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "argumentTypes": null,
                                      "id": 21445,
                                      "name": "POW_2_64",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20775,
                                      "src": "7652:8:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "-",
                                    "rightExpression": {
                                      "argumentTypes": null,
                                      "hexValue": "31",
                                      "id": 21446,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "7663:1:67",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_1_by_1",
                                        "typeString": "int_const 1"
                                      },
                                      "value": "1"
                                    },
                                    "src": "7652:12:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "id": 21448,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "7651:14:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "7643:22:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 21443,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "7637:5:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_int64_$",
                              "typeString": "type(int64)"
                            },
                            "typeName": "int64"
                          },
                          "id": 21450,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7637:29:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int64",
                            "typeString": "int64"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_int64",
                            "typeString": "int64"
                          }
                        ],
                        "id": 21442,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "7633:3:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int256_$",
                          "typeString": "type(int256)"
                        },
                        "typeName": "int"
                      },
                      "id": 21451,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7633:34:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "7599:68:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 21453,
                  "nodeType": "ExpressionStatement",
                  "src": "7599:68:67"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 21470,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 21454,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21437,
                        "src": "7677:4:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                          "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                        }
                      },
                      "id": 21456,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "lastBlock",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 20790,
                      "src": "7677:14:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
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
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 21467,
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
                                    "id": 21461,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "argumentTypes": null,
                                      "id": 21459,
                                      "name": "input",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 21431,
                                      "src": "7707:5:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "/",
                                    "rightExpression": {
                                      "argumentTypes": null,
                                      "id": 21460,
                                      "name": "POW_2_64",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20775,
                                      "src": "7715:8:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "src": "7707:16:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "id": 21462,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "7706:18:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "&",
                              "rightExpression": {
                                "argumentTypes": null,
                                "components": [
                                  {
                                    "argumentTypes": null,
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 21465,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "argumentTypes": null,
                                      "id": 21463,
                                      "name": "POW_2_64",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20775,
                                      "src": "7728:8:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "-",
                                    "rightExpression": {
                                      "argumentTypes": null,
                                      "hexValue": "31",
                                      "id": 21464,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "7739:1:67",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_1_by_1",
                                        "typeString": "int_const 1"
                                      },
                                      "value": "1"
                                    },
                                    "src": "7728:12:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "id": 21466,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "7727:14:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "7706:35:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 21458,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "7699:6:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint64_$",
                              "typeString": "type(uint64)"
                            },
                            "typeName": "uint64"
                          },
                          "id": 21468,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7699:43:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
                          }
                        ],
                        "id": 21457,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "7694:4:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": "uint"
                      },
                      "id": 21469,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7694:49:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7677:66:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 21471,
                  "nodeType": "ExpressionStatement",
                  "src": "7677:66:67"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 21491,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 21472,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21437,
                        "src": "7753:4:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                          "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                        }
                      },
                      "id": 21474,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "totalBuyUnitsImbalance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 20792,
                      "src": "7753:27:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
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
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 21488,
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
                                    "id": 21482,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "argumentTypes": null,
                                      "id": 21477,
                                      "name": "input",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 21431,
                                      "src": "7794:5:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "/",
                                    "rightExpression": {
                                      "argumentTypes": null,
                                      "components": [
                                        {
                                          "argumentTypes": null,
                                          "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          },
                                          "id": 21480,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "leftExpression": {
                                            "argumentTypes": null,
                                            "id": 21478,
                                            "name": "POW_2_64",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 20775,
                                            "src": "7803:8:67",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          "nodeType": "BinaryOperation",
                                          "operator": "*",
                                          "rightExpression": {
                                            "argumentTypes": null,
                                            "id": 21479,
                                            "name": "POW_2_64",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 20775,
                                            "src": "7814:8:67",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          "src": "7803:19:67",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        }
                                      ],
                                      "id": 21481,
                                      "isConstant": false,
                                      "isInlineArray": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "TupleExpression",
                                      "src": "7802:21:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "src": "7794:29:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "id": 21483,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "7793:31:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "&",
                              "rightExpression": {
                                "argumentTypes": null,
                                "components": [
                                  {
                                    "argumentTypes": null,
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 21486,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "argumentTypes": null,
                                      "id": 21484,
                                      "name": "POW_2_64",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 20775,
                                      "src": "7828:8:67",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "-",
                                    "rightExpression": {
                                      "argumentTypes": null,
                                      "hexValue": "31",
                                      "id": 21485,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "7839:1:67",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_1_by_1",
                                        "typeString": "int_const 1"
                                      },
                                      "value": "1"
                                    },
                                    "src": "7828:12:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "id": 21487,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "7827:14:67",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "7793:48:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 21476,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "7787:5:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_int64_$",
                              "typeString": "type(int64)"
                            },
                            "typeName": "int64"
                          },
                          "id": 21489,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7787:55:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int64",
                            "typeString": "int64"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_int64",
                            "typeString": "int64"
                          }
                        ],
                        "id": 21475,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "7783:3:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int256_$",
                          "typeString": "type(int256)"
                        },
                        "typeName": "int"
                      },
                      "id": 21490,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7783:60:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "7753:90:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 21492,
                  "nodeType": "ExpressionStatement",
                  "src": "7753:90:67"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 21509,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 21493,
                        "name": "data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21437,
                        "src": "7853:4:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                          "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                        }
                      },
                      "id": 21495,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "lastRateUpdateBlock",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 20794,
                      "src": "7853:24:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
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
                              "components": [
                                {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 21505,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "argumentTypes": null,
                                    "id": 21498,
                                    "name": "input",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 21431,
                                    "src": "7893:5:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "/",
                                  "rightExpression": {
                                    "argumentTypes": null,
                                    "components": [
                                      {
                                        "argumentTypes": null,
                                        "commonType": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        },
                                        "id": 21503,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                          "argumentTypes": null,
                                          "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          },
                                          "id": 21501,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "leftExpression": {
                                            "argumentTypes": null,
                                            "id": 21499,
                                            "name": "POW_2_64",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 20775,
                                            "src": "7902:8:67",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          "nodeType": "BinaryOperation",
                                          "operator": "*",
                                          "rightExpression": {
                                            "argumentTypes": null,
                                            "id": 21500,
                                            "name": "POW_2_64",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 20775,
                                            "src": "7913:8:67",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          "src": "7902:19:67",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "*",
                                        "rightExpression": {
                                          "argumentTypes": null,
                                          "id": 21502,
                                          "name": "POW_2_64",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 20775,
                                          "src": "7924:8:67",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "src": "7902:30:67",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      }
                                    ],
                                    "id": 21504,
                                    "isConstant": false,
                                    "isInlineArray": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "TupleExpression",
                                    "src": "7901:32:67",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "7893:40:67",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "id": 21506,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "7892:42:67",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 21497,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "7885:6:67",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint64_$",
                              "typeString": "type(uint64)"
                            },
                            "typeName": "uint64"
                          },
                          "id": 21507,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7885:50:67",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint64",
                            "typeString": "uint64"
                          }
                        ],
                        "id": 21496,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "7880:4:67",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": "uint"
                      },
                      "id": 21508,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7880:56:67",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7853:83:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 21510,
                  "nodeType": "ExpressionStatement",
                  "src": "7853:83:67"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 21511,
                    "name": "data",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 21437,
                    "src": "7954:4:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                      "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData memory"
                    }
                  },
                  "functionReturnParameters": 21435,
                  "id": 21512,
                  "nodeType": "Return",
                  "src": "7947:11:67"
                }
              ]
            },
            "documentation": null,
            "id": 21514,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "decodeTokenImbalanceData",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 21432,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21431,
                  "name": "input",
                  "nodeType": "VariableDeclaration",
                  "scope": 21514,
                  "src": "7494:10:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 21430,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "7494:4:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7493:12:67"
            },
            "payable": false,
            "returnParameters": {
              "id": 21435,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21434,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 21514,
                  "src": "7528:18:67",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_memory_ptr",
                    "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 21433,
                    "name": "TokenImbalanceData",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 20795,
                    "src": "7528:18:67",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_TokenImbalanceData_$20795_storage_ptr",
                      "typeString": "struct VolumeImbalanceRecorder.TokenImbalanceData"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7527:20:67"
            },
            "scope": 21515,
            "src": "7460:505:67",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 21516,
        "src": "91:7876:67"
      }
    ],
    "src": "0:7968:67"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.2",
  "updatedAt": "2019-03-14T21:46:28.712Z",
  "devdoc": {
    "methods": {
      "claimAdmin()": {
        "details": "Allows the pendingAdmin address to finalize the change admin process."
      },
      "transferAdmin(address)": {
        "details": "Allows the current admin to set the pendingAdmin address.",
        "params": {
          "newAdmin": "The address to transfer ownership to."
        }
      },
      "transferAdminQuickly(address)": {
        "details": "Allows the current admin to set the admin in one tx. Useful initial deployment.",
        "params": {
          "newAdmin": "The address to transfer ownership to."
        }
      },
      "withdrawEther(uint256,address)": {
        "details": "Withdraw Ethers"
      },
      "withdrawToken(address,uint256,address)": {
        "details": "Withdraw all ERC20 compatible tokens",
        "params": {
          "token": "ERC20 The address of the token contract"
        }
      }
    }
  },
  "userdoc": {
    "methods": {}
  }
}
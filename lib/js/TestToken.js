"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var TestToken = exports.TestToken = 
{
  "contractName": "TestToken",
  "abi": [
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
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
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
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "INITIAL_SUPPLY",
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
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
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
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseApproval",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
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
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseApproval",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
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
      "inputs": [
        {
          "name": "_name",
          "type": "string"
        },
        {
          "name": "_symbol",
          "type": "string"
        },
        {
          "name": "_decimals",
          "type": "uint8"
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
          "indexed": true,
          "name": "_spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "LogBurn",
      "type": "event"
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
          "indexed": false,
          "name": "value",
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
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    }
  ],
  "bytecode": "0x60806040527c03b58e88c75313ec9d329eaaa18fb92f75215b1710000000000000000060065534801561003157600080fd5b50604051610c25380380610c25833981016040908152815160208084015183850151600654600281905533600090815280855295909520949094559184018051909492909201929161008991600391908601906100ba565b50815161009d9060049060208501906100ba565b506005805460ff191660ff92909216919091179055506101559050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100fb57805160ff1916838001178555610128565b82800160010185558215610128579182015b8281111561012857825182559160200191906001019061010d565b50610134929150610138565b5090565b61015291905b80821115610134576000815560010161013e565b90565b610ac1806101646000396000f3006080604052600436106100cf5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde0381146100d4578063095ea7b31461015e57806318160ddd1461019657806323b872dd146101bd5780632ff2e9dc146101e7578063313ce567146101fc57806342966c6814610227578063661884631461023f57806370a082311461026357806379cc67901461028457806395d89b41146102a8578063a9059cbb146102bd578063d73dd623146102e1578063dd62ed3e14610305575b600080fd5b3480156100e057600080fd5b506100e961032c565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561012357818101518382015260200161010b565b50505050905090810190601f1680156101505780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561016a57600080fd5b50610182600160a060020a03600435166024356103ba565b604080519115158252519081900360200190f35b3480156101a257600080fd5b506101ab610420565b60408051918252519081900360200190f35b3480156101c957600080fd5b50610182600160a060020a0360043581169060243516604435610426565b3480156101f357600080fd5b506101ab610589565b34801561020857600080fd5b5061021161058f565b6040805160ff9092168252519081900360200190f35b34801561023357600080fd5b50610182600435610598565b34801561024b57600080fd5b50610182600160a060020a0360043516602435610642565b34801561026f57600080fd5b506101ab600160a060020a0360043516610731565b34801561029057600080fd5b50610182600160a060020a036004351660243561074c565b3480156102b457600080fd5b506100e9610861565b3480156102c957600080fd5b50610182600160a060020a03600435166024356108bc565b3480156102ed57600080fd5b50610182600160a060020a0360043516602435610989565b34801561031157600080fd5b506101ab600160a060020a0360043581169060243516610a22565b6003805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156103b25780601f10610387576101008083540402835291602001916103b2565b820191906000526020600020905b81548152906001019060200180831161039557829003601f168201915b505050505081565b336000818152600160209081526040808320600160a060020a038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b60025490565b600160a060020a03831660009081526020819052604081205482111561044b57600080fd5b600160a060020a038416600090815260016020908152604080832033845290915290205482111561047b57600080fd5b600160a060020a038316151561049057600080fd5b600160a060020a0384166000908152602081905260409020546104b9908363ffffffff610a4d16565b600160a060020a0380861660009081526020819052604080822093909355908516815220546104ee908363ffffffff610a5f16565b600160a060020a03808516600090815260208181526040808320949094559187168152600182528281203382529091522054610530908363ffffffff610a4d16565b600160a060020a0380861660008181526001602090815260408083203384528252918290209490945580518681529051928716939192600080516020610a76833981519152929181900390910190a35060019392505050565b60065481565b60055460ff1690565b336000908152602081905260408120546105b8908363ffffffff610a4d16565b336000908152602081905260409020556002546105db908363ffffffff610a4d16565b60025560408051838152905133917f38d762ef507761291a578e921acfe29c1af31a7331ea03e391cf16cfc4d4f581919081900360200190a26040805183815290516000913391600080516020610a768339815191529181900360200190a3506001919050565b336000908152600160209081526040808320600160a060020a038616845290915281205480831061069657336000908152600160209081526040808320600160a060020a03881684529091528120556106cb565b6106a6818463ffffffff610a4d16565b336000908152600160209081526040808320600160a060020a03891684529091529020555b336000818152600160209081526040808320600160a060020a0389168085529083529281902054815190815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060019392505050565b600160a060020a031660009081526020819052604090205490565b600160a060020a038216600090815260208190526040812054610775908363ffffffff610a4d16565b600160a060020a0384166000908152602081815260408083209390935560018152828220338352905220546107b0908363ffffffff610a4d16565b600160a060020a03841660009081526001602090815260408083203384529091529020556002546107e7908363ffffffff610a4d16565b600255604080518381529051600160a060020a038516917f38d762ef507761291a578e921acfe29c1af31a7331ea03e391cf16cfc4d4f581919081900360200190a2604080518381529051600091600160a060020a03861691600080516020610a768339815191529181900360200190a350600192915050565b6004805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156103b25780601f10610387576101008083540402835291602001916103b2565b336000908152602081905260408120548211156108d857600080fd5b600160a060020a03831615156108ed57600080fd5b3360009081526020819052604090205461090d908363ffffffff610a4d16565b3360009081526020819052604080822092909255600160a060020a0385168152205461093f908363ffffffff610a5f16565b600160a060020a03841660008181526020818152604091829020939093558051858152905191923392600080516020610a768339815191529281900390910190a350600192915050565b336000908152600160209081526040808320600160a060020a03861684529091528120546109bd908363ffffffff610a5f16565b336000818152600160209081526040808320600160a060020a0389168085529083529281902085905580519485525191937f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929081900390910190a350600192915050565b600160a060020a03918216600090815260016020908152604080832093909416825291909152205490565b600082821115610a5957fe5b50900390565b600082820183811015610a6e57fe5b93925050505600ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa165627a7a723058204b7d1541906405488f6868ef3ddc5e7e0b44924cec39a2d74230b6ca79ab74d30029",
  "deployedBytecode": "0x6080604052600436106100cf5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde0381146100d4578063095ea7b31461015e57806318160ddd1461019657806323b872dd146101bd5780632ff2e9dc146101e7578063313ce567146101fc57806342966c6814610227578063661884631461023f57806370a082311461026357806379cc67901461028457806395d89b41146102a8578063a9059cbb146102bd578063d73dd623146102e1578063dd62ed3e14610305575b600080fd5b3480156100e057600080fd5b506100e961032c565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561012357818101518382015260200161010b565b50505050905090810190601f1680156101505780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561016a57600080fd5b50610182600160a060020a03600435166024356103ba565b604080519115158252519081900360200190f35b3480156101a257600080fd5b506101ab610420565b60408051918252519081900360200190f35b3480156101c957600080fd5b50610182600160a060020a0360043581169060243516604435610426565b3480156101f357600080fd5b506101ab610589565b34801561020857600080fd5b5061021161058f565b6040805160ff9092168252519081900360200190f35b34801561023357600080fd5b50610182600435610598565b34801561024b57600080fd5b50610182600160a060020a0360043516602435610642565b34801561026f57600080fd5b506101ab600160a060020a0360043516610731565b34801561029057600080fd5b50610182600160a060020a036004351660243561074c565b3480156102b457600080fd5b506100e9610861565b3480156102c957600080fd5b50610182600160a060020a03600435166024356108bc565b3480156102ed57600080fd5b50610182600160a060020a0360043516602435610989565b34801561031157600080fd5b506101ab600160a060020a0360043581169060243516610a22565b6003805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156103b25780601f10610387576101008083540402835291602001916103b2565b820191906000526020600020905b81548152906001019060200180831161039557829003601f168201915b505050505081565b336000818152600160209081526040808320600160a060020a038716808552908352818420869055815186815291519394909390927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925928290030190a350600192915050565b60025490565b600160a060020a03831660009081526020819052604081205482111561044b57600080fd5b600160a060020a038416600090815260016020908152604080832033845290915290205482111561047b57600080fd5b600160a060020a038316151561049057600080fd5b600160a060020a0384166000908152602081905260409020546104b9908363ffffffff610a4d16565b600160a060020a0380861660009081526020819052604080822093909355908516815220546104ee908363ffffffff610a5f16565b600160a060020a03808516600090815260208181526040808320949094559187168152600182528281203382529091522054610530908363ffffffff610a4d16565b600160a060020a0380861660008181526001602090815260408083203384528252918290209490945580518681529051928716939192600080516020610a76833981519152929181900390910190a35060019392505050565b60065481565b60055460ff1690565b336000908152602081905260408120546105b8908363ffffffff610a4d16565b336000908152602081905260409020556002546105db908363ffffffff610a4d16565b60025560408051838152905133917f38d762ef507761291a578e921acfe29c1af31a7331ea03e391cf16cfc4d4f581919081900360200190a26040805183815290516000913391600080516020610a768339815191529181900360200190a3506001919050565b336000908152600160209081526040808320600160a060020a038616845290915281205480831061069657336000908152600160209081526040808320600160a060020a03881684529091528120556106cb565b6106a6818463ffffffff610a4d16565b336000908152600160209081526040808320600160a060020a03891684529091529020555b336000818152600160209081526040808320600160a060020a0389168085529083529281902054815190815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060019392505050565b600160a060020a031660009081526020819052604090205490565b600160a060020a038216600090815260208190526040812054610775908363ffffffff610a4d16565b600160a060020a0384166000908152602081815260408083209390935560018152828220338352905220546107b0908363ffffffff610a4d16565b600160a060020a03841660009081526001602090815260408083203384529091529020556002546107e7908363ffffffff610a4d16565b600255604080518381529051600160a060020a038516917f38d762ef507761291a578e921acfe29c1af31a7331ea03e391cf16cfc4d4f581919081900360200190a2604080518381529051600091600160a060020a03861691600080516020610a768339815191529181900360200190a350600192915050565b6004805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156103b25780601f10610387576101008083540402835291602001916103b2565b336000908152602081905260408120548211156108d857600080fd5b600160a060020a03831615156108ed57600080fd5b3360009081526020819052604090205461090d908363ffffffff610a4d16565b3360009081526020819052604080822092909255600160a060020a0385168152205461093f908363ffffffff610a5f16565b600160a060020a03841660008181526020818152604091829020939093558051858152905191923392600080516020610a768339815191529281900390910190a350600192915050565b336000908152600160209081526040808320600160a060020a03861684529091528120546109bd908363ffffffff610a5f16565b336000818152600160209081526040808320600160a060020a0389168085529083529281902085905580519485525191937f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929081900390910190a350600192915050565b600160a060020a03918216600090815260016020908152604080832093909416825291909152205490565b600082821115610a5957fe5b50900390565b600082820183811015610a6e57fe5b93925050505600ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa165627a7a723058204b7d1541906405488f6868ef3ddc5e7e0b44924cec39a2d74230b6ca79ab74d30029",
  "sourceMap": "211:333:106:-;;;310:8;281:37;;323:219;8:9:-1;5:2;;;30:1;27;20:12;5:2;323:219:106;;;;;;;;;;;;;;;;;;;;;;;;;;;406:14;;397:6;:23;;;437:10;-1:-1:-1;428:20:106;;;;;;;;;;:37;;;;323:219;;;473:12;;323:219;;;;;;;;473:12;;:4;;:12;;;;;:::i;:::-;-1:-1:-1;493:16:106;;;;:6;;:16;;;;;:::i;:::-;-1:-1:-1;517:8:106;:20;;-1:-1:-1;;517:20:106;;;;;;;;;;;;-1:-1:-1;211:333:106;;-1:-1:-1;211:333:106;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;211:333:106;;;-1:-1:-1;211:333:106;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "211:333:106:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;571:18:105;;8:9:-1;5:2;;;30:1;27;20:12;5:2;571:18:105;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;571:18:105;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2182:188;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2182:188:105;-1:-1:-1;;;;;2182:188:105;;;;;;;;;;;;;;;;;;;;;;;;;4776:77;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4776:77:105;;;;;;;;;;;;;;;;;;;;2645:447;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2645:447:105;-1:-1:-1;;;;;2645:447:105;;;;;;;;;;;;281:37:106;;8:9:-1;5:2;;;30:1;27;20:12;5:2;281:37:106;;;;4857:74:105;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4857:74:105;;;;;;;;;;;;;;;;;;;;;;;591:271:97;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;591:271:97;;;;;4297:418:105;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;4297:418:105;-1:-1:-1;;;;;4297:418:105;;;;;;;5133:99;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;5133:99:105;-1:-1:-1;;;;;5133:99:105;;;;;1139:504:97;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1139:504:97;-1:-1:-1;;;;;1139:504:97;;;;;;;593:20:105;;8:9:-1;5:2;;;30:1;27;20:12;5:2;593:20:105;;;;1244:320;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1244:320:105;-1:-1:-1;;;;;1244:320:105;;;;;;;3544:296;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;3544:296:105;-1:-1:-1;;;;;3544:296:105;;;;;;;958:132;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;958:132:105;-1:-1:-1;;;;;958:132:105;;;;;;;;;;571:18;;;;;;;;;;;;;;;-1:-1:-1;;571:18:105;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;2182:188::-;2269:10;2249:4;2261:19;;;:7;:19;;;;;;;;-1:-1:-1;;;;;2261:29:105;;;;;;;;;;;:38;;;2310;;;;;;;2249:4;;2261:29;;2269:10;;2310:38;;;;;;;;-1:-1:-1;2361:4:105;2182:188;;;;:::o;4776:77::-;4842:6;;4776:77;:::o;2645:447::-;-1:-1:-1;;;;;2761:15:105;;2731:4;2761:15;;;;;;;;;;;2751:25;;;2743:34;;;;;;-1:-1:-1;;;;;2801:14:105;;;;;;:7;:14;;;;;;;;2816:10;2801:26;;;;;;;;2791:36;;;2783:45;;;;;;-1:-1:-1;;;;;2842:17:105;;;;2834:26;;;;;;-1:-1:-1;;;;;2884:15:105;;:8;:15;;;;;;;;;;;:27;;2904:6;2884:27;:19;:27;:::i;:::-;-1:-1:-1;;;;;2866:15:105;;;:8;:15;;;;;;;;;;;:45;;;;2933:13;;;;;;;:25;;2951:6;2933:25;:17;:25;:::i;:::-;-1:-1:-1;;;;;2917:13:105;;;:8;:13;;;;;;;;;;;:41;;;;2993:14;;;;;:7;:14;;;;;3008:10;2993:26;;;;;;;:38;;3024:6;2993:38;:30;:38;:::i;:::-;-1:-1:-1;;;;;2964:14:105;;;;;;;:7;:14;;;;;;;;2979:10;2964:26;;;;;;;;:67;;;;3042:28;;;;;;;;;;;2964:14;;-1:-1:-1;;;;;;;;;;;3042:28:105;;;;;;;;;;-1:-1:-1;3083:4:105;2645:447;;;;;:::o;281:37:106:-;;;;:::o;4857:74:105:-;4918:8;;;;4857:74;:::o;591:271:97:-;691:10;639:12;682:20;;;;;;;;;;;:33;;707:7;682:33;:24;:33;:::i;:::-;668:10;659:8;:20;;;;;;;;;;:56;730:6;;:19;;741:7;730:19;:10;:19;:::i;:::-;721:6;:28;760;;;;;;;;768:10;;760:28;;;;;;;;;;799:41;;;;;;;;828:1;;808:10;;-1:-1:-1;;;;;;;;;;;799:41:97;;;;;;;;-1:-1:-1;853:4:97;591:271;;;:::o;4297:418:105:-;4426:10;4387:4;4418:19;;;:7;:19;;;;;;;;-1:-1:-1;;;;;4418:29:105;;;;;;;;;;4457:28;;;4453:169;;4503:10;4527:1;4495:19;;;:7;:19;;;;;;;;-1:-1:-1;;;;;4495:29:105;;;;;;;;;:33;4453:169;;;4585:30;:8;4598:16;4585:30;:12;:30;:::i;:::-;4561:10;4553:19;;;;:7;:19;;;;;;;;-1:-1:-1;;;;;4553:29:105;;;;;;;;;:62;4453:169;4641:10;4663:19;;;;:7;:19;;;;;;;;-1:-1:-1;;;;;4632:61:105;;4663:29;;;;;;;;;;;4632:61;;;;;;;;;4641:10;4632:61;;;;;;;;;;;-1:-1:-1;4706:4:105;;4297:418;-1:-1:-1;;;4297:418:105:o;5133:99::-;-1:-1:-1;;;;;5211:16:105;5189:7;5211:16;;;;;;;;;;;;5133:99::o;1139:504:97:-;-1:-1:-1;;;;;1244:15:97;;1206:12;1244:15;;;;;;;;;;;:28;;1264:7;1244:28;:19;:28;:::i;:::-;-1:-1:-1;;;;;1226:15:97;;:8;:15;;;;;;;;;;;:46;;;;1369:7;:14;;;;;1384:10;1369:26;;;;;;:39;;1400:7;1369:39;:30;:39;:::i;:::-;-1:-1:-1;;;;;1340:14:97;;;;;;:7;:14;;;;;;;;1355:10;1340:26;;;;;;;:68;1475:6;;:19;;1486:7;1475:19;:10;:19;:::i;:::-;1466:6;:28;1551:23;;;;;;;;-1:-1:-1;;;;;1551:23:97;;;;;;;;;;;;;1585:36;;;;;;;;1609:1;;-1:-1:-1;;;;;1585:36:97;;;-1:-1:-1;;;;;;;;;;;1585:36:97;;;;;;;;-1:-1:-1;1634:4:97;1139:504;;;;:::o;593:20:105:-;;;;;;;;;;;;;;;-1:-1:-1;;593:20:105;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1244:320;1346:10;1307:4;1337:20;;;;;;;;;;;1327:30;;;1319:39;;;;;;-1:-1:-1;;;;;1372:17:105;;;;1364:26;;;;;;1428:10;1419:8;:20;;;;;;;;;;;:32;;1444:6;1419:32;:24;:32;:::i;:::-;1405:10;1396:8;:20;;;;;;;;;;;:55;;;;-1:-1:-1;;;;;1473:13:105;;;;;;:25;;1491:6;1473:25;:17;:25;:::i;:::-;-1:-1:-1;;;;;1457:13:105;;:8;:13;;;;;;;;;;;;:41;;;;1509:33;;;;;;;1457:13;;1518:10;;-1:-1:-1;;;;;;;;;;;1509:33:105;;;;;;;;;-1:-1:-1;1555:4:105;1244:320;;;;:::o;3544:296::-;3707:10;3645:4;3699:19;;;:7;:19;;;;;;;;-1:-1:-1;;;;;3699:29:105;;;;;;;;;;:46;;3733:11;3699:46;:33;:46;:::i;:::-;3667:10;3659:19;;;;:7;:19;;;;;;;;-1:-1:-1;;;;;3659:29:105;;;;;;;;;;;;:87;;;3757:61;;;;;;3659:29;;3757:61;;;;;;;;;;;-1:-1:-1;3831:4:105;3544:296;;;;:::o;958:132::-;-1:-1:-1;;;;;1060:15:105;;;1038:7;1060:15;;;:7;:15;;;;;;;;:25;;;;;;;;;;;;;958:132::o;936:110:73:-;994:7;1016:6;;;;1009:14;;;;-1:-1:-1;1036:5:73;;;936:110::o;1101:129::-;1159:7;1186:5;;;1204:6;;;;1197:14;;;;1224:1;1101:129;-1:-1:-1;;;1101:129:73:o",
  "source": "pragma solidity ^0.4.24;\n\nimport \"./BurnableToken.sol\";\nimport \"../../math/SafeMath.sol\";\n\n// @title ERC20 token contract with burning capabilities\n// @notice Standard ERC20 contract with a deflationary supply.\ncontract TestToken is BurnableToken{\n  using SafeMath for uint256;\n\n  uint public INITIAL_SUPPLY = 10**(68);\n\n  constructor(string _name, string _symbol, uint8 _decimals) public {\n      supply = INITIAL_SUPPLY;\n      balances[msg.sender] = INITIAL_SUPPLY;\n      name = _name;\n      symbol = _symbol;\n      decimals = _decimals;\n  }\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc20/TestToken.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc20/TestToken.sol",
    "exportedSymbols": {
      "TestToken": [
        33541
      ]
    },
    "id": 33542,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 33494,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:106"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc20/BurnableToken.sol",
        "file": "./BurnableToken.sol",
        "id": 33495,
        "nodeType": "ImportDirective",
        "scope": 33542,
        "sourceUnit": 31666,
        "src": "26:29:106",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../../math/SafeMath.sol",
        "id": 33496,
        "nodeType": "ImportDirective",
        "scope": 33542,
        "sourceUnit": 22711,
        "src": "56:33:106",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 33497,
              "name": "BurnableToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 31665,
              "src": "233:13:106",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_BurnableToken_$31665",
                "typeString": "contract BurnableToken"
              }
            },
            "id": 33498,
            "nodeType": "InheritanceSpecifier",
            "src": "233:13:106"
          }
        ],
        "contractDependencies": [
          9100,
          9533,
          31665,
          33492
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 33541,
        "linearizedBaseContracts": [
          33541,
          31665,
          9100,
          33492,
          9533
        ],
        "name": "TestToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 33501,
            "libraryName": {
              "contractScope": null,
              "id": 33499,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 22710,
              "src": "256:8:106",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$22710",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "250:27:106",
            "typeName": {
              "id": 33500,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "269:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 33507,
            "name": "INITIAL_SUPPLY",
            "nodeType": "VariableDeclaration",
            "scope": 33541,
            "src": "281:37:106",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 33502,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "281:4:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "commonType": {
                "typeIdentifier": "t_rational_100000000000000000000000000000000000000000000000000000000000000000000_by_1",
                "typeString": "int_const 1000...(61 digits omitted)...0000"
              },
              "id": 33506,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "argumentTypes": null,
                "hexValue": "3130",
                "id": 33503,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "310:2:106",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_10_by_1",
                  "typeString": "int_const 10"
                },
                "value": "10"
              },
              "nodeType": "BinaryOperation",
              "operator": "**",
              "rightExpression": {
                "argumentTypes": null,
                "components": [
                  {
                    "argumentTypes": null,
                    "hexValue": "3638",
                    "id": 33504,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "315:2:106",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_68_by_1",
                      "typeString": "int_const 68"
                    },
                    "value": "68"
                  }
                ],
                "id": 33505,
                "isConstant": false,
                "isInlineArray": false,
                "isLValue": false,
                "isPure": true,
                "lValueRequested": false,
                "nodeType": "TupleExpression",
                "src": "314:4:106",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_68_by_1",
                  "typeString": "int_const 68"
                }
              },
              "src": "310:8:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_100000000000000000000000000000000000000000000000000000000000000000000_by_1",
                "typeString": "int_const 1000...(61 digits omitted)...0000"
              }
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 33539,
              "nodeType": "Block",
              "src": "389:153:106",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 33518,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 33516,
                      "name": "supply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33165,
                      "src": "397:6:106",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 33517,
                      "name": "INITIAL_SUPPLY",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33507,
                      "src": "406:14:106",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "397:23:106",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 33519,
                  "nodeType": "ExpressionStatement",
                  "src": "397:23:106"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 33525,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 33520,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33157,
                        "src": "428:8:106",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 33523,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 33521,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34923,
                          "src": "437:3:106",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 33522,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "437:10:106",
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
                      "src": "428:20:106",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 33524,
                      "name": "INITIAL_SUPPLY",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33507,
                      "src": "451:14:106",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "428:37:106",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 33526,
                  "nodeType": "ExpressionStatement",
                  "src": "428:37:106"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 33529,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 33527,
                      "name": "name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33167,
                      "src": "473:4:106",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 33528,
                      "name": "_name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33509,
                      "src": "480:5:106",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "473:12:106",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 33530,
                  "nodeType": "ExpressionStatement",
                  "src": "473:12:106"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 33533,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 33531,
                      "name": "symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33169,
                      "src": "493:6:106",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 33532,
                      "name": "_symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33511,
                      "src": "502:7:106",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "493:16:106",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 33534,
                  "nodeType": "ExpressionStatement",
                  "src": "493:16:106"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 33537,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 33535,
                      "name": "decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        33171
                      ],
                      "referencedDeclaration": 33171,
                      "src": "517:8:106",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 33536,
                      "name": "_decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33513,
                      "src": "528:9:106",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "src": "517:20:106",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "id": 33538,
                  "nodeType": "ExpressionStatement",
                  "src": "517:20:106"
                }
              ]
            },
            "documentation": null,
            "id": 33540,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 33514,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 33509,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 33540,
                  "src": "335:12:106",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 33508,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "335:6:106",
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
                  "id": 33511,
                  "name": "_symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 33540,
                  "src": "349:14:106",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 33510,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "349:6:106",
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
                  "id": 33513,
                  "name": "_decimals",
                  "nodeType": "VariableDeclaration",
                  "scope": 33540,
                  "src": "365:15:106",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 33512,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "365:5:106",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "334:47:106"
            },
            "payable": false,
            "returnParameters": {
              "id": 33515,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "389:0:106"
            },
            "scope": 33541,
            "src": "323:219:106",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 33542,
        "src": "211:333:106"
      }
    ],
    "src": "0:545:106"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc20/TestToken.sol",
    "exportedSymbols": {
      "TestToken": [
        33541
      ]
    },
    "id": 33542,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 33494,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:106"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc20/BurnableToken.sol",
        "file": "./BurnableToken.sol",
        "id": 33495,
        "nodeType": "ImportDirective",
        "scope": 33542,
        "sourceUnit": 31666,
        "src": "26:29:106",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/math/SafeMath.sol",
        "file": "../../math/SafeMath.sol",
        "id": 33496,
        "nodeType": "ImportDirective",
        "scope": 33542,
        "sourceUnit": 22711,
        "src": "56:33:106",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 33497,
              "name": "BurnableToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 31665,
              "src": "233:13:106",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_BurnableToken_$31665",
                "typeString": "contract BurnableToken"
              }
            },
            "id": 33498,
            "nodeType": "InheritanceSpecifier",
            "src": "233:13:106"
          }
        ],
        "contractDependencies": [
          9100,
          9533,
          31665,
          33492
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 33541,
        "linearizedBaseContracts": [
          33541,
          31665,
          9100,
          33492,
          9533
        ],
        "name": "TestToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 33501,
            "libraryName": {
              "contractScope": null,
              "id": 33499,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 22710,
              "src": "256:8:106",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$22710",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "250:27:106",
            "typeName": {
              "id": 33500,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "269:7:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 33507,
            "name": "INITIAL_SUPPLY",
            "nodeType": "VariableDeclaration",
            "scope": 33541,
            "src": "281:37:106",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 33502,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "281:4:106",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "commonType": {
                "typeIdentifier": "t_rational_100000000000000000000000000000000000000000000000000000000000000000000_by_1",
                "typeString": "int_const 1000...(61 digits omitted)...0000"
              },
              "id": 33506,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "argumentTypes": null,
                "hexValue": "3130",
                "id": 33503,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "310:2:106",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_10_by_1",
                  "typeString": "int_const 10"
                },
                "value": "10"
              },
              "nodeType": "BinaryOperation",
              "operator": "**",
              "rightExpression": {
                "argumentTypes": null,
                "components": [
                  {
                    "argumentTypes": null,
                    "hexValue": "3638",
                    "id": 33504,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "315:2:106",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_68_by_1",
                      "typeString": "int_const 68"
                    },
                    "value": "68"
                  }
                ],
                "id": 33505,
                "isConstant": false,
                "isInlineArray": false,
                "isLValue": false,
                "isPure": true,
                "lValueRequested": false,
                "nodeType": "TupleExpression",
                "src": "314:4:106",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_68_by_1",
                  "typeString": "int_const 68"
                }
              },
              "src": "310:8:106",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_100000000000000000000000000000000000000000000000000000000000000000000_by_1",
                "typeString": "int_const 1000...(61 digits omitted)...0000"
              }
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 33539,
              "nodeType": "Block",
              "src": "389:153:106",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 33518,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 33516,
                      "name": "supply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33165,
                      "src": "397:6:106",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 33517,
                      "name": "INITIAL_SUPPLY",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33507,
                      "src": "406:14:106",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "397:23:106",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 33519,
                  "nodeType": "ExpressionStatement",
                  "src": "397:23:106"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 33525,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 33520,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33157,
                        "src": "428:8:106",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 33523,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 33521,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34923,
                          "src": "437:3:106",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 33522,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "437:10:106",
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
                      "src": "428:20:106",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 33524,
                      "name": "INITIAL_SUPPLY",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33507,
                      "src": "451:14:106",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "428:37:106",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 33526,
                  "nodeType": "ExpressionStatement",
                  "src": "428:37:106"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 33529,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 33527,
                      "name": "name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33167,
                      "src": "473:4:106",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 33528,
                      "name": "_name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33509,
                      "src": "480:5:106",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "473:12:106",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 33530,
                  "nodeType": "ExpressionStatement",
                  "src": "473:12:106"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 33533,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 33531,
                      "name": "symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33169,
                      "src": "493:6:106",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 33532,
                      "name": "_symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33511,
                      "src": "502:7:106",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "493:16:106",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 33534,
                  "nodeType": "ExpressionStatement",
                  "src": "493:16:106"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 33537,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 33535,
                      "name": "decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        33171
                      ],
                      "referencedDeclaration": 33171,
                      "src": "517:8:106",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 33536,
                      "name": "_decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33513,
                      "src": "528:9:106",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "src": "517:20:106",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "id": 33538,
                  "nodeType": "ExpressionStatement",
                  "src": "517:20:106"
                }
              ]
            },
            "documentation": null,
            "id": 33540,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 33514,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 33509,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 33540,
                  "src": "335:12:106",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 33508,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "335:6:106",
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
                  "id": 33511,
                  "name": "_symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 33540,
                  "src": "349:14:106",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 33510,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "349:6:106",
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
                  "id": 33513,
                  "name": "_decimals",
                  "nodeType": "VariableDeclaration",
                  "scope": 33540,
                  "src": "365:15:106",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 33512,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "365:5:106",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "334:47:106"
            },
            "payable": false,
            "returnParameters": {
              "id": 33515,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "389:0:106"
            },
            "scope": 33541,
            "src": "323:219:106",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 33542,
        "src": "211:333:106"
      }
    ],
    "src": "0:545:106"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.2",
  "updatedAt": "2019-03-14T21:46:28.870Z",
  "devdoc": {
    "methods": {
      "allowance(address,address)": {
        "details": "Function to check the amount of tokens that an owner allowed to a spender.",
        "params": {
          "_owner": "address The address which owns the funds.",
          "_spender": "address The address which will spend the funds."
        },
        "return": "A uint256 specifying the amount of tokens still available for the spender."
      },
      "approve(address,uint256)": {
        "details": "Approve the passed address to spend the specified amount of tokens on behalf of msg.sender. Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729",
        "params": {
          "_spender": "The address which will spend the funds.",
          "_value": "The amount of tokens to be spent."
        }
      },
      "balanceOf(address)": {
        "details": "Gets the balance of the specified address.",
        "params": {
          "_owner": "The address to query the the balance of."
        },
        "return": "An uint256 representing the amount owned by the passed address."
      },
      "decreaseApproval(address,uint256)": {
        "details": "Decrease the amount of tokens that an owner allowed to a spender. approve should be called when allowed[_spender] == 0. To decrement allowed value is better to use this function to avoid 2 calls (and wait until the first transaction is mined) From MonolithDAO Token.sol",
        "params": {
          "_spender": "The address which will spend the funds.",
          "_subtractedValue": "The amount of tokens to decrease the allowance by."
        }
      },
      "increaseApproval(address,uint256)": {
        "details": "Increase the amount of tokens that an owner allowed to a spender. approve should be called when allowed[_spender] == 0. To increment allowed value is better to use this function to avoid 2 calls (and wait until the first transaction is mined) From MonolithDAO Token.sol",
        "params": {
          "_addedValue": "The amount of tokens to increase the allowance by.",
          "_spender": "The address which will spend the funds."
        }
      },
      "totalSupply()": {
        "details": "Total number of tokens in existence"
      },
      "transfer(address,uint256)": {
        "details": "Transfer token for a specified address",
        "params": {
          "_to": "The address to transfer to.",
          "_value": "The amount to be transferred."
        }
      },
      "transferFrom(address,address,uint256)": {
        "details": "Transfer tokens from one address to another",
        "params": {
          "_from": "address The address which you want to send tokens from",
          "_to": "address The address which you want to transfer to",
          "_value": "uint256 the amount of tokens to be transferred"
        }
      }
    }
  },
  "userdoc": {
    "methods": {}
  }
}
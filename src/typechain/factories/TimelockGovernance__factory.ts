/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TimelockGovernance,
  TimelockGovernanceInterface,
} from "../TimelockGovernance";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minDelay",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "proposers",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "executors",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "CallExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "CallScheduled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "Cancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldDuration",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newDuration",
        type: "uint256",
      },
    ],
    name: "MinDelayChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "EXECUTOR_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PROPOSER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TIMELOCK_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "cancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "datas",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "executeBatch",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMinDelay",
    outputs: [
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "getTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "hashOperation",
    outputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "datas",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "hashOperationBatch",
    outputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperation",
    outputs: [
      {
        internalType: "bool",
        name: "pending",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationDone",
    outputs: [
      {
        internalType: "bool",
        name: "done",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationPending",
    outputs: [
      {
        internalType: "bool",
        name: "pending",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationReady",
    outputs: [
      {
        internalType: "bool",
        name: "ready",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "schedule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "datas",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "scheduleBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newDelay",
        type: "uint256",
      },
    ],
    name: "updateDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200240c3803806200240c8339810160408190526200003491620005a6565b82828262000052600080516020620023ac83398151915280620001d8565b6200007c600080516020620023cc833981519152600080516020620023ac833981519152620001d8565b620000a6600080516020620023ec833981519152600080516020620023ac833981519152620001d8565b620000ca600080516020620023ac833981519152620000c46200022a565b6200022e565b620000e5600080516020620023ac833981519152306200022e565b60005b8251811015620001305762000127600080516020620023cc8339815191528483815181106200011357fe5b60200260200101516200022e60201b60201c565b600101620000e8565b5060005b815181101562000168576200015f600080516020620023ec8339815191528383815181106200011357fe5b60010162000134565b5060028390556040517f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d590620001a390600090869062000617565b60405180910390a1505050620001cf600080516020620023ac833981519152336200023e60201b60201c565b50505062000674565b600082815260208190526040808220600201549051839285917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a460009182526020829052604090912060020155565b3390565b6200023a828262000290565b5050565b620002486200022a565b6001600160a01b0316816001600160a01b031614620002845760405162461bcd60e51b81526004016200027b9062000625565b60405180910390fd5b6200023a828262000309565b600082815260208181526040909120620002b591839062000c7362000382821b17901c565b156200023a57620002c56200022a565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000828152602081815260409091206200032e91839062000c95620003a2821b17901c565b156200023a576200033e6200022a565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b600062000399836001600160a01b038416620003b9565b90505b92915050565b600062000399836001600160a01b03841662000408565b6000620003c78383620004d4565b620003ff575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556200039c565b5060006200039c565b60008181526001830160205260408120548015620004c957835460001980830191908101906000908790839081106200043d57fe5b90600052602060002001549050808760000184815481106200045b57fe5b6000918252602080832090910192909255828152600189810190925260409020908401905586548790806200048c57fe5b600190038181906000526020600020016000905590558660010160008781526020019081526020016000206000905560019450505050506200039c565b60009150506200039c565b60009081526001919091016020526040902054151590565b80516001600160a01b03811681146200039c57600080fd5b600082601f83011262000515578081fd5b81516001600160401b03808211156200052c578283fd5b6020808302604051828282010181811085821117156200054a578687fd5b6040528481529450818501925085820181870183018810156200056c57600080fd5b600091505b848210156200059b57620005868882620004ec565b84529282019260019190910190820162000571565b505050505092915050565b600080600060608486031215620005bb578283fd5b835160208501519093506001600160401b0380821115620005da578384fd5b620005e88783880162000504565b93506040860151915080821115620005fe578283fd5b506200060d8682870162000504565b9150509250925092565b918252602082015260400190565b6020808252602f908201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560408201526e103937b632b9903337b91039b2b63360891b606082015260800190565b611d2880620006846000396000f3fe60806040526004361061019a5760003560e01c80638065657f116100e1578063b1c5f4271161008a578063d45c443511610064578063d45c44351461043f578063d547741f1461045f578063e38335e51461047f578063f27a0c9214610492576101a1565b8063b1c5f427146103df578063c4d252f5146103ff578063ca15c8731461041f576101a1565b80639010d07c116100bb5780639010d07c1461037d57806391d14854146103aa578063a217fddf146103ca576101a1565b80638065657f146103285780638f2a0bb0146103485780638f61f4f514610368576101a1565b80632ab0f5291161014357806336568abe1161011d57806336568abe146102c8578063584b153e146102e857806364d6235314610308576101a1565b80632ab0f529146102685780632f2ff15d1461028857806331d50750146102a8576101a1565b8063134008d311610174578063134008d31461020857806313bc9f201461021b578063248a9ca314610248576101a1565b806301d5062a146101a657806307bd0265146101c85780630d3cf6fc146101f3576101a1565b366101a157005b600080fd5b3480156101b257600080fd5b506101c66101c13660046112af565b6104a7565b005b3480156101d457600080fd5b506101dd610575565b6040516101ea9190611763565b60405180910390f35b3480156101ff57600080fd5b506101dd610599565b6101c6610216366004611243565b6105bd565b34801561022757600080fd5b5061023b610236366004611476565b610655565b6040516101ea9190611758565b34801561025457600080fd5b506101dd610263366004611476565b61067a565b34801561027457600080fd5b5061023b610283366004611476565b61068f565b34801561029457600080fd5b506101c66102a336600461148e565b6106a3565b3480156102b457600080fd5b5061023b6102c3366004611476565b6106eb565b3480156102d457600080fd5b506101c66102e336600461148e565b6106fe565b3480156102f457600080fd5b5061023b610303366004611476565b61075a565b34801561031457600080fd5b506101c6610323366004611476565b610767565b34801561033457600080fd5b506101dd610343366004611243565b6107c6565b34801561035457600080fd5b506101c66103633660046113c8565b610805565b34801561037457600080fd5b506101dd61096d565b34801561038957600080fd5b5061039d6103983660046114bd565b610991565b6040516101ea91906115df565b3480156103b657600080fd5b5061023b6103c536600461148e565b6109b2565b3480156103d657600080fd5b506101dd6109ca565b3480156103eb57600080fd5b506101dd6103fa366004611323565b6109cf565b34801561040b57600080fd5b506101c661041a366004611476565b610a14565b34801561042b57600080fd5b506101dd61043a366004611476565b610acf565b34801561044b57600080fd5b506101dd61045a366004611476565b610ae6565b34801561046b57600080fd5b506101c661047a36600461148e565b610af8565b6101c661048d366004611323565b610b32565b34801561049e57600080fd5b506101dd610c6d565b7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc16104d4816103c5610cb7565b806104e557506104e58160006109b2565b61050a5760405162461bcd60e51b8152600401610501906118e0565b60405180910390fd5b600061051a8989898989896107c6565b90506105268184610cbb565b6000817f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8b8b8b8b8b8a60405161056296959493929190611640565b60405180910390a3505050505050505050565b7fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e6381565b7f5f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca581565b7fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e636105ea816103c5610cb7565b806105fb57506105fb8160006109b2565b6106175760405162461bcd60e51b8152600401610501906118e0565b60006106278888888888886107c6565b90506106338185610d28565b6106428160008a8a8a8a610d7a565b61064b81610e4f565b5050505050505050565b60008061066183610ae6565b90506001811180156106735750428111155b9392505050565b60009081526020819052604090206002015490565b6000600161069c83610ae6565b1492915050565b6000828152602081905260409020600201546106c1906103c5610cb7565b6106dd5760405162461bcd60e51b815260040161050190611826565b6106e78282610e88565b5050565b6000806106f783610ae6565b1192915050565b610706610cb7565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146107505760405162461bcd60e51b815260040161050190611ba2565b6106e78282610f0b565b600060016106f783610ae6565b3330146107865760405162461bcd60e51b815260040161050190611b45565b7f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5600254826040516107b9929190611c5c565b60405180910390a1600255565b60008686868686866040516020016107e396959493929190611640565b6040516020818303038152906040528051906020012090509695505050505050565b7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1610832816103c5610cb7565b8061084357506108438160006109b2565b61085f5760405162461bcd60e51b8152600401610501906118e0565b88871461087e5760405162461bcd60e51b815260040161050190611883565b88851461089d5760405162461bcd60e51b815260040161050190611883565b60006108af8b8b8b8b8b8b8b8b6109cf565b90506108bb8184610cbb565b60005b8a81101561095f5780827f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8e8e858181106108f557fe5b905060200201602081019061090a9190611228565b8d8d8681811061091657fe5b905060200201358c8c8781811061092957fe5b905060200281019061093b9190611c6a565b8c8b60405161094f96959493929190611640565b60405180910390a36001016108be565b505050505050505050505050565b7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc181565b60008281526020819052604081206109a99083610f8e565b90505b92915050565b60008281526020819052604081206109a99083610f9a565b600081565b600088888888888888886040516020016109f098979695949392919061168b565b60405160208183030381529060405280519060200120905098975050505050505050565b7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1610a41816103c5610cb7565b80610a525750610a528160006109b2565b610a6e5760405162461bcd60e51b8152600401610501906118e0565b610a778261075a565b610a935760405162461bcd60e51b815260040161050190611ae8565b6000828152600160205260408082208290555183917fbaa1eb22f2a492ba1a5fea61b8df4d27c6c8b5f3971e63bb58fa14ff72eedb7091a25050565b60008181526020819052604081206109ac90610fbc565b60009081526001602052604090205490565b600082815260208190526040902060020154610b16906103c5610cb7565b6107505760405162461bcd60e51b815260040161050190611974565b7fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63610b5f816103c5610cb7565b80610b705750610b708160006109b2565b610b8c5760405162461bcd60e51b8152600401610501906118e0565b878614610bab5760405162461bcd60e51b815260040161050190611883565b878414610bca5760405162461bcd60e51b815260040161050190611883565b6000610bdc8a8a8a8a8a8a8a8a6109cf565b9050610be88185610d28565b60005b89811015610c5757610c4f82828d8d85818110610c0457fe5b9050602002016020810190610c199190611228565b8c8c86818110610c2557fe5b905060200201358b8b87818110610c3857fe5b9050602002810190610c4a9190611c6a565b610d7a565b600101610beb565b50610c6181610e4f565b50505050505050505050565b60025490565b60006109a98373ffffffffffffffffffffffffffffffffffffffff8416610fc7565b60006109a98373ffffffffffffffffffffffffffffffffffffffff8416611011565b3390565b610cc4826106eb565b15610ce15760405162461bcd60e51b815260040161050190611a2e565b610ce9610c6d565b811015610d085760405162461bcd60e51b8152600401610501906119d1565b610d1242826110f5565b6000928352600160205260409092209190915550565b610d3182610655565b610d4d5760405162461bcd60e51b815260040161050190611a8b565b801580610d5e5750610d5e8161068f565b6106e75760405162461bcd60e51b8152600401610501906117c9565b60008473ffffffffffffffffffffffffffffffffffffffff16848484604051610da49291906115cf565b60006040518083038185875af1925050503d8060008114610de1576040519150601f19603f3d011682016040523d82523d6000602084013e610de6565b606091505b5050905080610e075760405162461bcd60e51b815260040161050190611bff565b85877fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b5887878787604051610e3e9493929190611600565b60405180910390a350505050505050565b610e5881610655565b610e745760405162461bcd60e51b815260040161050190611a8b565b600090815260016020819052604090912055565b6000828152602081905260409020610ea09082610c73565b156106e757610ead610cb7565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000828152602081905260409020610f239082610c95565b156106e757610f30610cb7565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b60006109a9838361111a565b60006109a98373ffffffffffffffffffffffffffffffffffffffff841661115f565b60006109ac82611177565b6000610fd3838361115f565b611009575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556109ac565b5060006109ac565b600081815260018301602052604081205480156110eb5783547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff808301919081019060009087908390811061106257fe5b906000526020600020015490508087600001848154811061107f57fe5b6000918252602080832090910192909255828152600189810190925260409020908401905586548790806110af57fe5b600190038181906000526020600020016000905590558660010160008781526020019081526020016000206000905560019450505050506109ac565b60009150506109ac565b6000828201838110156109a95760405162461bcd60e51b81526004016105019061193d565b8154600090821061113d5760405162461bcd60e51b81526004016105019061176c565b82600001828154811061114c57fe5b9060005260206000200154905092915050565b60009081526001919091016020526040902054151590565b5490565b803573ffffffffffffffffffffffffffffffffffffffff811681146109ac57600080fd5b60008083601f8401126111b0578182fd5b50813567ffffffffffffffff8111156111c7578182fd5b60208301915083602080830285010111156111e157600080fd5b9250929050565b60008083601f8401126111f9578182fd5b50813567ffffffffffffffff811115611210578182fd5b6020830191508360208285010111156111e157600080fd5b600060208284031215611239578081fd5b6109a9838361117b565b60008060008060008060a0878903121561125b578182fd5b863561126681611ccd565b955060208701359450604087013567ffffffffffffffff811115611288578283fd5b61129489828a016111e8565b979a9699509760608101359660809091013595509350505050565b600080600080600080600060c0888a0312156112c9578081fd5b6112d3898961117b565b965060208801359550604088013567ffffffffffffffff8111156112f5578182fd5b6113018a828b016111e8565b989b979a50986060810135976080820135975060a09091013595509350505050565b60008060008060008060008060a0898b03121561133e578081fd5b883567ffffffffffffffff80821115611355578283fd5b6113618c838d0161119f565b909a50985060208b0135915080821115611379578283fd5b6113858c838d0161119f565b909850965060408b013591508082111561139d578283fd5b506113aa8b828c0161119f565b999c989b509699959896976060870135966080013595509350505050565b600080600080600080600080600060c08a8c0312156113e5578081fd5b893567ffffffffffffffff808211156113fc578283fd5b6114088d838e0161119f565b909b50995060208c0135915080821115611420578283fd5b61142c8d838e0161119f565b909950975060408c0135915080821115611444578283fd5b506114518c828d0161119f565b9a9d999c50979a969997986060880135976080810135975060a0013595509350505050565b600060208284031215611487578081fd5b5035919050565b600080604083850312156114a0578182fd5b8235915060208301356114b281611ccd565b809150509250929050565b600080604083850312156114cf578182fd5b50508035926020909101359150565b818352602080840193600091908185020181018584845b8781101561157a57828403895281357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1883603018112611533578687fd5b8701803567ffffffffffffffff81111561154b578788fd5b803603891315611559578788fd5b6115668682898501611587565b9a87019a95505050908401906001016114f5565b5091979650505050505050565b600082845282826020860137806020848601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f85011685010190509392505050565b6000828483379101908152919050565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b600073ffffffffffffffffffffffffffffffffffffffff8616825284602083015260606040830152611636606083018486611587565b9695505050505050565b600073ffffffffffffffffffffffffffffffffffffffff8816825286602083015260a0604083015261167660a083018688611587565b60608301949094525060800152949350505050565b60a0808252810188905260008960c08301825b8b8110156116db57602080840173ffffffffffffffffffffffffffffffffffffffff6116ca828761117b565b16845293509091019060010161169e565b5083810360208501528881527f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff891115611713578283fd5b602089029150818a6020830137016020818101838152848303909101604085015261173f81888a6114de565b6060850196909652505050608001529695505050505050565b901515815260200190565b90815260200190565b60208082526022908201527f456e756d657261626c655365743a20696e646578206f7574206f6620626f756e60408201527f6473000000000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526026908201527f54696d656c6f636b436f6e74726f6c6c65723a206d697373696e67206465706560408201527f6e64656e63790000000000000000000000000000000000000000000000000000606082015260800190565b6020808252602f908201527f416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e60408201527f2061646d696e20746f206772616e740000000000000000000000000000000000606082015260800190565b60208082526023908201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d6160408201527f7463680000000000000000000000000000000000000000000000000000000000606082015260800190565b6020808252602e908201527f54696d656c6f636b436f6e74726f6c6c65723a2073656e64657220726571756960408201527f726573207065726d697373696f6e000000000000000000000000000000000000606082015260800190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60208082526030908201527f416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e60408201527f2061646d696e20746f207265766f6b6500000000000000000000000000000000606082015260800190565b60208082526026908201527f54696d656c6f636b436f6e74726f6c6c65723a20696e73756666696369656e7460408201527f2064656c61790000000000000000000000000000000000000000000000000000606082015260800190565b6020808252602f908201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20616c60408201527f7265616479207363686564756c65640000000000000000000000000000000000606082015260800190565b6020808252602a908201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20697360408201527f206e6f7420726561647900000000000000000000000000000000000000000000606082015260800190565b60208082526031908201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20636160408201527f6e6e6f742062652063616e63656c6c6564000000000000000000000000000000606082015260800190565b6020808252602b908201527f54696d656c6f636b436f6e74726f6c6c65723a2063616c6c6572206d7573742060408201527f62652074696d656c6f636b000000000000000000000000000000000000000000606082015260800190565b6020808252602f908201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560408201527f20726f6c657320666f722073656c660000000000000000000000000000000000606082015260800190565b60208082526033908201527f54696d656c6f636b436f6e74726f6c6c65723a20756e6465726c79696e67207460408201527f72616e73616374696f6e20726576657274656400000000000000000000000000606082015260800190565b918252602082015260400190565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611c9e578283fd5b83018035915067ffffffffffffffff821115611cb8578283fd5b6020019150368190038213156111e157600080fd5b73ffffffffffffffffffffffffffffffffffffffff81168114611cef57600080fd5b5056fea26469706673582212207f243e9e3915607acf475a6d0fcd028743a3f336caae30d3b5db202b7ac2fe6d64736f6c634300060c00335f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca5b09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1d8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63";

export class TimelockGovernance__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    minDelay: BigNumberish,
    proposers: string[],
    executors: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TimelockGovernance> {
    return super.deploy(
      minDelay,
      proposers,
      executors,
      overrides || {}
    ) as Promise<TimelockGovernance>;
  }
  getDeployTransaction(
    minDelay: BigNumberish,
    proposers: string[],
    executors: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      minDelay,
      proposers,
      executors,
      overrides || {}
    );
  }
  attach(address: string): TimelockGovernance {
    return super.attach(address) as TimelockGovernance;
  }
  connect(signer: Signer): TimelockGovernance__factory {
    return super.connect(signer) as TimelockGovernance__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimelockGovernanceInterface {
    return new utils.Interface(_abi) as TimelockGovernanceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TimelockGovernance {
    return new Contract(address, _abi, signerOrProvider) as TimelockGovernance;
  }
}

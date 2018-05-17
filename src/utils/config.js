import utf8 from 'utf8'

module.exports.SENTINEL_ABI = [
  {
    "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false,
    "stateMutability": "view", "type": "function"
  },
  {
    "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }],
    "name": "approve", "outputs": [{ "name": "success", "type": "bool" }], "payable": false,
    "stateMutability": "nonpayable", "type": "function"
  },
  {
    "constant": true, "inputs": [{ "name": "", "type": "bytes32" }], "name": "services",
    "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function"
  },
  {
    "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }],
    "payable": false, "stateMutability": "view", "type": "function"
  }, {
    "constant": false,
    "inputs": [{ "name": "_from", "type": "address" },
    { "name": "_to", "type": "address" },
    {
      "name": "_value",
      "type": "uint256"
    }],
    "name": "transferFrom", "outputs": [
      { "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint8" }], "payable": false,
    "stateMutability": "view", "type": "function"
  },
  {
    "constant": false, "inputs": [{ "name": "_value", "type": "uint256" }], "name": "burn",
    "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "balanceOf",
    "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_value", "type": "uint256" }],
    "name": "burnFrom", "outputs": [{ "name": "success", "type": "bool" }], "payable": false,
    "stateMutability": "nonpayable", "type": "function"
  }, {
    "constant": false,
    "inputs": [{ "name": "_serviceName", "type": "bytes32" },
    { "name": "_from", "type": "address" },
    { "name": "_to", "type": "address" },
    { "name": "_value", "type": "uint256" }],
    "name": "payService", "outputs": [], "payable": false,
    "stateMutability": "nonpayable", "type": "function"
  },
  {
    "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false,
    "stateMutability": "view", "type": "function"
  },
  {
    "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false,
    "stateMutability": "view", "type": "function"
  },
  {
    "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }],
    "name": "transfer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"
  },
  {
    "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" },
    { "name": "_extraData", "type": "bytes" }], "name": "approveAndCall",
    "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "address" }],
    "name": "allowance", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false, "inputs": [{ "name": "_owner", "type": "address" }], "name": "transferOwnership", "outputs": [],
    "payable": false, "stateMutability": "nonpayable", "type": "function"
  }, {
    "constant": false, "inputs": [
      { "name": "_serviceName", "type": "bytes32" }, { "name": "_serviceAddress", "type": "address" }],
    "name": "deployService", "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{ "name": "_tokenName", "type": "string" }, { "name": "_tokenSymbol", "type": "string" },
    { "name": "_decimals", "type": "uint8" }, { "name": "_totalSupply", "type": "uint256" }],
    "payable": false, "stateMutability": "nonpayable", "type": "constructor"
  }, {
    "anonymous": false, "inputs": [
      { "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" },
      { "indexed": false, "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event"
  },
  {
    "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" },
    { "indexed": false, "name": "value", "type": "uint256" }], "name": "Burn",
    "type": "event"
  }]

module.exports.SENTINEL_ADDRESS = '0xa44E5137293E855B1b7bC7E2C6f8cD796fFCB037'
module.exports.SENTINEL_NAME = 'Sentinel'
module.exports.SENTINEL_TEST_ABI = [
  {
    "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false,
    "stateMutability": "view", "type": "function"
  },
  {
    "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }],
    "name": "approve", "outputs": [{ "name": "success", "type": "bool" }], "payable": false,
    "stateMutability": "nonpayable", "type": "function"
  },
  {
    "constant": true, "inputs": [{ "name": "", "type": "bytes32" }], "name": "services",
    "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function"
  },
  {
    "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }],
    "payable": false, "stateMutability": "view", "type": "function"
  }, {
    "constant": false,
    "inputs": [{ "name": "_from", "type": "address" },
    { "name": "_to", "type": "address" },
    {
      "name": "_value",
      "type": "uint256"
    }],
    "name": "transferFrom", "outputs": [
      { "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint8" }], "payable": false,
    "stateMutability": "view", "type": "function"
  },
  {
    "constant": false, "inputs": [{ "name": "_value", "type": "uint256" }], "name": "burn",
    "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "balanceOf",
    "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_value", "type": "uint256" }],
    "name": "burnFrom", "outputs": [{ "name": "success", "type": "bool" }], "payable": false,
    "stateMutability": "nonpayable", "type": "function"
  }, {
    "constant": false,
    "inputs": [{ "name": "_serviceName", "type": "bytes32" },
    { "name": "_from", "type": "address" },
    { "name": "_to", "type": "address" },
    { "name": "_value", "type": "uint256" }],
    "name": "payService", "outputs": [], "payable": false,
    "stateMutability": "nonpayable", "type": "function"
  },
  {
    "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false,
    "stateMutability": "view", "type": "function"
  },
  {
    "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false,
    "stateMutability": "view", "type": "function"
  },
  {
    "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }],
    "name": "transfer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"
  },
  {
    "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" },
    { "name": "_extraData", "type": "bytes" }], "name": "approveAndCall",
    "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "address" }],
    "name": "allowance", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false, "inputs": [{ "name": "_owner", "type": "address" }], "name": "transferOwnership", "outputs": [],
    "payable": false, "stateMutability": "nonpayable", "type": "function"
  }, {
    "constant": false, "inputs": [
      { "name": "_serviceName", "type": "bytes32" }, { "name": "_serviceAddress", "type": "address" }],
    "name": "deployService", "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "inputs": [{ "name": "_tokenName", "type": "string" }, { "name": "_tokenSymbol", "type": "string" },
    { "name": "_decimals", "type": "uint8" }, { "name": "_totalSupply", "type": "uint256" }],
    "payable": false, "stateMutability": "nonpayable", "type": "constructor"
  }, {
    "anonymous": false, "inputs": [
      { "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" },
      { "indexed": false, "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event"
  },
  {
    "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" },
    { "indexed": false, "name": "value", "type": "uint256" }], "name": "Burn",
    "type": "event"
  }]
module.exports.SENTINEL_TEST_ADDRESS = '0x29317B796510afC25794E511e7B10659Ca18048B'
module.exports.SENTINEL_TEST_NAME = 'Sentinel Test Token'
module.exports.VPNSERVICE_ABI = [
  {
    "constant": false, "inputs": [{ "name": "_addr", "type": "address" }], "name": "addAuthorizedUser", "outputs": [],
    "payable": false, "stateMutability": "nonpayable", "type": "function"
  },
  {
    "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "authorizedUsers",
    "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function"
  },
  {
    "constant": true, "inputs": [{ "name": "_address", "type": "address" }], "name": "getDueAmountOf",
    "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function"
  },
  {
    "constant": true, "inputs": [{ "name": "_address", "type": "address" }, { "name": "_sessionId", "type": "uint256" }],
    "name": "getVpnUsageOf",
    "outputs": [{ "name": "", "type": "address" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" },
    { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "bool" }],
    "payable": false, "stateMutability": "view", "type": "function"
  },
  {
    "constant": true, "inputs": [{ "name": "_address", "type": "address" }], "name": "getVpnSessionsOf",
    "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function"
  },
  {
    "constant": false, "inputs": [{ "name": "_addr", "type": "address" }], "name": "removeAuthorizedUser", "outputs": [],
    "payable": false, "stateMutability": "nonpayable", "type": "function"
  },
  {
    "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false,
    "stateMutability": "view", "type": "function"
  }, {
    "constant": false,
    "inputs": [{ "name": "_from", "type": "address" },
    { "name": "_to", "type": "address" },
    { "name": "_receivedBytes", "type": "uint256" },
    { "name": "_sessionDuration", "type": "uint256" },
    { "name": "_amount", "type": "uint256" },
    { "name": "_timestamp", "type": "uint256" }],
    "name": "addVpnUsage", "outputs": [], "payable": false,
    "stateMutability": "nonpayable", "type": "function"
  },
  {
    "constant": false, "inputs": [{ "name": "_addr", "type": "address" }, { "name": "_isPayed", "type": "bool" }],
    "name": "setInitialPaymentOf", "outputs": [], "payable": false, "stateMutability": "nonpayable",
    "type": "function"
  }, {
    "constant": false,
    "inputs": [{ "name": "_from", "type": "address" }, { "name": "_amount", "type": "uint256" },
    { "name": "_sessionId", "type": "uint256" }], "name": "payVpnSession",
    "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"
  },
  {
    "constant": false, "inputs": [{ "name": "_owner", "type": "address" }], "name": "transferOwnership", "outputs": [],
    "payable": false, "stateMutability": "nonpayable", "type": "function"
  },
  {
    "constant": true, "inputs": [{ "name": "_addr", "type": "address" }], "name": "getInitialPaymentOf",
    "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function"
  }]

module.exports.VPNSERVICE_ADDRESS = '0x9768df18073d2Ab666cF98F953299342259EcBAa'.toLowerCase()
module.exports.VPNSERVICE_NAME = 'Vpn_service'
module.exports.COINBASE_ADDRESS = '0xA3F1592D8a09a91a7238f608620fFDe7C4B26029'.toLowerCase()
module.exports.COINBASE_PRIVATE_KEY = '81c81be18ae01e88358a48f7a5c661d567d59588490cd7cd39a89f25e37ceccb'
module.exports.DECIMALS = Math.pow(10, 8)
module.exports.CENTRAL_WALLET = ''.toString()
module.exports.CENTRAL_WALLET_PRIVATE_KEY = ''
module.exports.MAX_TX_TRY = 60
module.exports.LIMIT_10MB = 10 * 1024 * 1024
module.exports.LIMIT_100MB = 100 * 1024 * 1024
module.exports.SESSIONS_SALT = utf8.encode('')




/* if (process.env.SENT_ENV === 'PROD') {
  module.exports.SENTINEL_ABI = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "bytes32" }], "name": "services", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_value", "type": "uint256" }], "name": "burn", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "burnFrom", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_serviceName", "type": "bytes32" }, { "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "payService", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }, { "name": "_extraData", "type": "bytes" }], "name": "approveAndCall", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "address" }], "name": "allowance", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_owner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_serviceName", "type": "bytes32" }, { "name": "_serviceAddress", "type": "address" }], "name": "deployService", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "name": "_tokenName", "type": "string" }, { "name": "_tokenSymbol", "type": "string" }, { "name": "_decimals", "type": "uint8" }, { "name": "_totalSupply", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Burn", "type": "event" }]
  module.exports.SENTINEL_ADDRESS = '0xa44E5137293E855B1b7bC7E2C6f8cD796fFCB037'
  module.exports.SENTINEL_NAME = 'Sentinel'
  module.exports.VPNSERVICE_ABI = [{ "constant": false, "inputs": [{ "name": "_addr", "type": "address" }], "name": "addAuthorizedUser", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "authorizedUsers", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_address", "type": "address" }], "name": "getDueAmountOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_address", "type": "address" }, { "name": "_sessionId", "type": "uint256" }], "name": "getVpnUsageOf", "outputs": [{ "name": "", "type": "address" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_address", "type": "address" }], "name": "getVpnSessionsOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_addr", "type": "address" }], "name": "removeAuthorizedUser", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_receivedBytes", "type": "uint256" }, { "name": "_sessionDuration", "type": "uint256" }, { "name": "_amount", "type": "uint256" }, { "name": "_timestamp", "type": "uint256" }], "name": "addVpnUsage", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_amount", "type": "uint256" }, { "name": "_sessionId", "type": "uint256" }], "name": "payVpnSession", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_owner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }]
  module.exports.VPNSERVICE_ADDRESS = '0xEe94e1452bbd3a9870aF6a7642cb47721Ac41b8A'
  module.exports.VPNSERVICE_NAME = 'Vpn_service'
  module.exports.COINBASE_ADDRESS = '0x25bC7a081E03A777b2016d92eCF89d10AAb98780'
  module.exports.COINBASE_PRIVATE_KEY = new Buffer('81c81be18ae01e88358a48f7a5c661d567d59588490cd7cd39a89f25e37ceccb', 'hex')
  module.exports.DECIMALS = 100000000
  module.exports.SENT_BALANCE = 'https://api.etherscan.io/api?apikey=Y5BJ5VA3XZ59F63XQCQDDUWU2C29144MMM&module=account&action=tokenbalance&tag=latest&contractaddress=0xa44E5137293E855B1b7bC7E2C6f8cD796fFCB037&address='
} else {
  module.exports.SENTINEL_ABI = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "bytes32" }], "name": "services", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_value", "type": "uint256" }], "name": "burn", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "burnFrom", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_serviceName", "type": "bytes32" }, { "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "payService", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }, { "name": "_extraData", "type": "bytes" }], "name": "approveAndCall", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "address" }], "name": "allowance", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_owner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_serviceName", "type": "bytes32" }, { "name": "_serviceAddress", "type": "address" }], "name": "deployService", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "name": "_tokenName", "type": "string" }, { "name": "_tokenSymbol", "type": "string" }, { "name": "_decimals", "type": "uint8" }, { "name": "_totalSupply", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Burn", "type": "event" }]
  module.exports.SENTINEL_ADDRESS = '0x29317B796510afC25794E511e7B10659Ca18048B'
  module.exports.SENTINEL_NAME = 'Sentinel'
  module.exports.VPNSERVICE_ABI = [{ "constant": false, "inputs": [{ "name": "_addr", "type": "address" }], "name": "addAuthorizedUser", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "authorizedUsers", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_address", "type": "address" }], "name": "getDueAmountOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_address", "type": "address" }, { "name": "_sessionId", "type": "uint256" }], "name": "getVpnUsageOf", "outputs": [{ "name": "", "type": "address" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_address", "type": "address" }], "name": "getVpnSessionsOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_addr", "type": "address" }], "name": "removeAuthorizedUser", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_receivedBytes", "type": "uint256" }, { "name": "_sessionDuration", "type": "uint256" }, { "name": "_amount", "type": "uint256" }, { "name": "_timestamp", "type": "uint256" }], "name": "addVpnUsage", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_amount", "type": "uint256" }, { "name": "_sessionId", "type": "uint256" }], "name": "payVpnSession", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_owner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }]
  module.exports.VPNSERVICE_ADDRESS = '0x11cb41B3b9387CCfa9cbF71525fa658107D2E3FD'
  module.exports.VPNSERVICE_NAME = 'Vpn_test_service'
  module.exports.COINBASE_ADDRESS = '0x145523EB2ddAaA85334717fBb3A6B73988Fc1427'
  module.exports.COINBASE_PRIVATE_KEY = new Buffer('81c81be18ae01e88358a48f7a5c661d567d59588490cd7cd39a89f25e37ceccb', 'hex')
  module.exports.DECIMALS = 100000000
  module.exports.SENT_BALANCE = 'https://api.etherscan.io/api?apikey=Y5BJ5VA3XZ59F63XQCQDDUWU2C29144MMM&module=account&action=tokenbalance&tag=latest&contractaddress=0xa44E5137293E855B1b7bC7E2C6f8cD796fFCB037&address='
}
 */
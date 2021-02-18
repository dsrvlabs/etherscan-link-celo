module.exports = function (network) {
  var net = parseInt(network)
  var prefix;

  switch (net) {
/*
    case 1: // main net
      prefix = ''
      break
    case 3: // ropsten test net
      prefix = 'ropsten.'
      break
    case 4: // rinkeby test net
      prefix = 'rinkeby.'
      break
    case 42: // kovan test net
      prefix = 'kovan.'
      break
*/
    case 44787: 
      prefix = 'alfajores-blockscout.celo-testnet.org'
      break
    case 62320: 
      prefix = 'baklava-blockscout.celo-testnet.org'
      break
    case 42220: 
      prefix = 'explorer.celo.org'
      break
    default:
      prefix = 'explorer.celo.org'
  }
  return prefix
}

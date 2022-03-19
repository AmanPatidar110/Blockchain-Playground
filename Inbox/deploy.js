const HDWallletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const { interface, bytecode } = require('./compile')

const provider = new HDWallletProvider(
  'session journey same cloth slight rubber pave state gloom funny grass cactus',
  'https://rinkeby.infura.io/v3/6a0dbf4e93a348e8bf46922ddd51c24f'
)

const web3 = new Web3(provider)

const deploy = async () => {
  const accounts = await web3.eth.getAccounts()

  console.log('Account used: ', accounts[0])

  const contract = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: '0x' + bytecode, arguments: ['Hi there!'] })
    .send({ gas: '1000000', from: accounts[0] })

  console.log('Contract is deployed to: ', contract.options.address)
}

deploy()

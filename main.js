let Blockchain = require("./blockchain")
let Block = require("./block")


let testcoin = new Blockchain()

testcoin.addBlock(new Block(1, "26/08/2017", {amount: 50}))
testcoin.addBlock(new Block(2, "26/08/2017", {amount: 31}))
testcoin.addBlock(new Block(3, "26/08/2017", {amount: 20}))

console.log(JSON.stringify(testcoin, null, 4))
const crypto = require('crypto')
//dont need to do import now cuz crypto has been added to built in library


const input = "100xdevs"

const hash = crypto.createHash('sha256').update(input).digest('hex');

console.log(hash)
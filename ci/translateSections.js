const fs = require('fs')

const current = process.argv[2]
if(!current){
    console.error("current required as command line argument")
    process.exit(-1);
}

const translation = process.argv[3]
if(!translation){
    console.error("translation required as command line argument")
    process.exit(-1);
}

let curr_json = require(current)
let trans_json = require(translation)
for(let key of Object.keys(curr_json)){
    let message = curr_json[key].message;
    if(trans_json[message]){
        curr_json[key].message = trans_json[message]
    }
}
fs.writeFileSync(current, JSON.stringify(curr_json,null,2));
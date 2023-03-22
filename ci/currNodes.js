const fs = require('fs')
const path = require('path')
function getNodeType(file){
    let text = fs.readFileSync(file).toString()
    let type = text.match(/\w+\.type = \"(?<type>.+)\"/);
    return type?.groups?.type || "!!!!!!!!!!!!"
}
module.exports = function (nodes_dir){
    let sections = fs.readdirSync(nodes_dir).filter(dir=>{
        return fs.lstatSync(path.join(nodes_dir,dir)).isDirectory();
    });
    let curr_nodes = {}
    sections.forEach((section)=>{
        let nodes = fs.readdirSync(path.join(nodes_dir,section)).filter(node => {
            return node!='index.js'
        })
        .map(node=>(getNodeType(path.join(nodes_dir,section,node))));
        curr_nodes[section]= nodes
    })
    return curr_nodes
}
const fs = require('fs')
const path = require('path')
function getNodePosition(file){
    let lines = fs.readFileSync(file).toString().split('\n')
    let position_line = lines.filter(line=>line.includes('sidebar_position:'))[0]
    if(!position_line) return -1
    let position = parseInt(position_line.replace(/[^0-9]/g, '')) || -1;
    return position
}
function getSectionPosition(file){
    try{
        let json = JSON.parse(fs.readFileSync(file).toString());
        return json.position;
    }
    catch(e){
        return -1;
    }
}
module.exports = function (docs_dir){
    let sections = fs.readdirSync(docs_dir).filter(dir => {
        return !dir.startsWith('_')
    });
    let curr_docs = {}
    sections.forEach((section)=>{
        let nodes = fs.readdirSync(path.join(docs_dir,section)).filter(node => {
            return !node.startsWith('_')
        })
        .map(node=>({name:node, position:getNodePosition(path.join(docs_dir,section,node))}));
        curr_docs[section]={
            position: getSectionPosition(path.join(docs_dir,section,'_category_.json')),
            nodes
        }
    })
    return curr_docs
}
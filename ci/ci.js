const path = require('path')
const fs = require('fs')
const currDocs = require('./currDocs');
const currNodes = require('./currNodes');

function getMdText(position, type, translationMap){
    position = translationMap[position] || position
    type = translationMap[type] || type
    return fs.readFileSync(path.join(__dirname,'template.md')).toString().replaceAll('@type@', type).replaceAll('@position@', position)
}


const nocode_dir = process.argv[2]
if(!nocode_dir){
    console.error("nocod_dir required as command line argument")
    process.exit(-1);
}
const nodes_dir = path.join(nocode_dir, 'src/nodes');

const docs_dir = process.argv[3]
if(!docs_dir){
    console.error("docs_dir required as command line argument")
    process.exit(-2);
}

let locale = ["ru","en"].map(l=>docs_dir.includes('/'+l+'/')?l:null).filter(x=>x)[0]
if(!locale){
    console.warn("Can't get locale from doc_dir. Default locale is en");
    locale = 'en'
}
console.log("Locale: ", locale)
let translationMap = require(path.join(nocode_dir,`src/locales/${locale}.json`))
if(!translationMap){
    console.error("Can't find translation file for locale", locale)
    process.exit(-3)
}
const curr_docs = currDocs(path.join(docs_dir,'/nodes'))
const curr_nodes = currNodes(path.join(nocode_dir,'src/nodes'))
let section_position = Math.max(...Object.keys(curr_docs).map(section=>curr_docs[section].position)) + 1
if (!isFinite(section_position)){
    section_position = 1;
}
for(const section in curr_nodes){
    if(typeof curr_docs[section] === "undefined"){
        console.log("creating section", section)
        fs.mkdirSync(path.join(docs_dir,'/nodes',section))
        fs.writeFileSync(path.join(docs_dir,'/nodes',section,'_category_.json'),JSON.stringify({
            label: section,
            position: section_position++,
            link: {
                type: "generated-index",
                description: section
            }
        },null,2))
    }
    let positions = curr_docs?.[section]?.nodes?.map(node=>node.position) || []
    positions.push(0);
    let position = Math.max(...positions)+1;
    for(const node of curr_nodes[section]){
        let count = curr_docs?.[section]?.nodes?.filter(doc_node=>doc_node.name==node+'.md')?.length || 0
        if(count==0){
            fs.writeFileSync(path.join(docs_dir,'/nodes',section,node+'.md'),getMdText(position++, node, translationMap))
        }
    }
}

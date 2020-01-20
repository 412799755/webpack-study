const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const generator = require('@babel/generator').default
const t = require('@babel/types')
var utils = require('loader-utils')

module.exports = function (source) {
    const options = utils.getOptions(this)
    const ast = parser.parse(source,{sourceType:'module'});
    console.log(1,ast,typeof ast)
    traverse(ast,{
        CallExpression(path){
            if(t.isMemberExpression(path.node.callee) && t.isIdentifier(path.node.callee.object, {name: "console"})){
                path.remove()
            }
        }
    })
    const output = generator(ast,{},source)
    return output.code
}
var utils = require('loader-utils')

module.exports = function (source) {
    const options = utils.getOptions(this)
    source = source.replace(/\[name\]/g, options.name)
    return `export default ${ JSON.stringify({
        content: source,
        filename: this.resourcePath
    }) }`
}

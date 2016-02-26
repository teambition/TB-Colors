colors = require('../colors')
write  = require('write')

module.exports = function () {
  var data = {}
  for (type in colors) {
    for (name in colors[type]) {
      var hex = colors[type][name]
      data[name] = hex
    }
  }
  var json = JSON.stringify(data, null, 2)
  write('dist/colors.json', json)
}

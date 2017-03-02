var test = require('tape')
var fs = require('fs')
var addItem = require('./index').addItem

var dataFile = './data.txt' //array

test('add item to array', function(t) {
  clearDataFile()
  addItem('bread', function(err) {
    actual = JSON.parse(fs.readFileSync(dataFile, 'utf8'))
    t.deepEqual(actual, ['bread'])
    t.end()
  })
})

function clearDataFile() {
  fs.writeFileSync(dataFile, '')
}

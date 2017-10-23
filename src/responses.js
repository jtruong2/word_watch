const $ = require('jquery')

function appendWordAndCount(data) {
  for (var i in data.word) {
    $('.top-word h3').append(`${i} (${data.word[i]})`)
  }
}

module.exports = {appendWordAndCount}

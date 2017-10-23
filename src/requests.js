const $ = require('jquery')
const Response =require('./responses')
const url = 'https://wordwatch-api.herokuapp.com'

function getWord() {
  $.ajax({
    type: 'GET',
    url: `${url}/api/v1/top_word`
  }).then(function(data) {
    Response.appendWordAndCount(data)
  })
}

function postWord(word) {
  $.ajax({
    type: 'POST',
    url: 'https://wordwatch-api.herokuapp.com/api/v1/words',
    data: {word: {value: word}},
    success: console.log('Word posted')
  })
}

module.exports = {getWord, postWord}

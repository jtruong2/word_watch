const $  = require('jquery')
const Request = require('./requests')

function topWordAndCount() {
  Request.getWord()
}


function breakDown() {
  let text = $('textarea').val().toLowerCase()
  let listOfWords = text.split(' ')
  weightWords(listOfWords)
}

function weightWords(listOfWords) {
  let wordsCount = {}
  listOfWords.forEach(function(word) {
    Request.postWord(word)
    wordsCount.hasOwnProperty(word) ? wordsCount[word] += 1 : wordsCount[word] = 1
  })
  addWordsToPage(wordsCount)
}

function addWordsToPage(words) {
  for(var key in words) {
    $('article.word-count').append(`<font size="${words[key]}">${key}</font><pre>  </pre>`)
  }
}


module.exports = {topWordAndCount, breakDown}

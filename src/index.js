let $ = require('jquery')

$(document).ready(function() {
  topWordAndCount()
  $('button').on('click', breakDown)
})

function topWordAndCount() {
  $.ajax({
    type: 'GET',
    url: 'https://wordwatch-api.herokuapp.com/api/v1/top_word'
  }).then(function(data) {
    for (var i in data.word) {
      $('.top-word h3').append(`${i} (${data.word[i]})`)
    }
  })
}

function breakDown() {
  let text = $('textarea').val().toLowerCase()
  let listOfWords = text.split(' ')
  let wordsWithWeight = {}
  listOfWords.forEach(function(word) {
    postWord(word)
    if(wordsWithWeight.hasOwnProperty(word)){
      wordsWithWeight[word] += 1
    } else {
      wordsWithWeight[word] = 1
    }
  })
  for(var key in wordsWithWeight) {
    $('article.word-count').append(`<font size="${wordsWithWeight[key]}">${key}</font><pre>  </pre>`)
  }
}

function postWord(word) {
  $.ajax({
    type: 'POST',
    url: 'https://wordwatch-api.herokuapp.com/api/v1/words',
    data: {word: {value: word}},
    success: console.log('Word posted')
  })
}

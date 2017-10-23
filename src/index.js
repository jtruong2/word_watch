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
  let text = $('textarea').val()
  let listOfWords = text.split(' ')
  $('article.word-count').append(`<p>${text}</p>`)
}

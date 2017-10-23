const $ = require('jquery')
const Request = require('./requests')
const EventHandler = require('./event-handlers')

$(document).ready(function() {
  EventHandler.topWordAndCount()
  $('button').on('click', EventHandler.breakDown)
  $('textarea').keydown(function(e) {
    if(e.which == 13) {
      EventHandler.breakDown()
      $(this).val('').focus()
      return false
    }
  })
})

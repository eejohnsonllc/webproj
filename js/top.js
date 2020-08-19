$(document).ready(function () {

let $cards = $('.faqcard')

var x = $cards.length;
var interval = 100;


$cards.each(element => {
    setTimeout(function () {

        console.log($cards[element])

        // element.className += "slideleft"

        let $current=$($cards[element])
        $current.css('display','block')
        $current.addClass("slideleft")
        
        console.log('d')

    }, 800 *element)

    
});

var btn = $('#backbutton');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


})
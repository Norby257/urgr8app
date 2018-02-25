console.log("we are linked");
//  global vars 
//  array of quotes 

var arrayQuotes = ["Never give up, tomorrow will be better!", "Be free, be happy, be you"," Live in the present", "Take a deep breath and exhale"];
//  in document ready 

$(document).ready(function() {
//  function expression for picking a quote 
    var pickAQuote = function() {
        $(".quote-button").on("click", function() {
        pickedQuote = arrayQuotes[Math.floor(Math.random() * arrayQuotes.length)];
            console.log(pickedQuote);
        });
    };

    var displayQuote = function() {
        $(".quote-button").on("click", function() {
            $(".result").innerHTML = pickedQuote;

        });

    };



  pickAQuote();
  displayQuote();
});


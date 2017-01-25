$( document ).ready(function() {
  var headerSentences = ["władam słowem", "Gram w hokej", "Latam i koloryzuje", "władam słowem, Gram w hokej, Latam i koloryzuje"]

  function writeEffect(sentences, element, typeSpeed){
    var element = $(element)
    i = 0
    j = 0

    var typing = setInterval(function (){
      i++
      if(i > sentences[j].length+5){
        j++
        if(j >= sentences.length){
          clearInterval(typing)
        }
        i = 0
      }
     element.text(sentences[j].slice(0, i));
    }, typeSpeed);  
  }

  writeEffect(headerSentences, '.header-typing', 70)
});
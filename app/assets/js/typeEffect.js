// $( document ).ready(function() {
//   var headerSentences = ["Konkretny Content Doskonale gotuję władam słowem, latam i koloryzuję"]

//   writeEffect(headerSentences, '.header-typing', 70)
// });

// function writeEffect(sentences, element, typeSpeed){
//   var element = $(element)
//   i = 0
//   j = 0

//   var typing = setInterval(function (){
//     i++
//     if(i > sentences[j].length){
//       j++
//       if(j >= sentences.length){
//         return clearInterval(typing)
//       }
//       i = 0
//     }
//    element.text(sentences[j].slice(0, i));
//   }, typeSpeed);  
// }
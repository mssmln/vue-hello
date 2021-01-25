// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// // Bonus: Aggiungere un’immagine presa anch’essa da un data assieme al valore alt dell'attributo. Poi aggiungete all'immagine una classe sempre presa dal data.
// Se volete potete personalizzare l'esercizio come volete, aggiungendo altre cose viste a lezione!

var app = new Vue({
  el : '#message',
  data : {
    message: 'you are welcome Vue!',
    imgSource: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png',
    imgTitle: 'Vue\'s logo',
  }
});

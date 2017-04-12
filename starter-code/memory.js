var MemoryGame = function() {
  this.Cards = [
  		{ name: "aquaman",         img: "aquaman.jpg" },
  		{ name: "batman",          img: "batman.jpg" },
  		{ name: "captain america", img: "captain-america.jpg" },
  		{ name: "fantastic four",  img: "fantastic-four.jpg" },
  		{ name: "flash",           img: "flash.jpg" },
      { name: "green arrow",     img: "green-arrow.jpg" },
  		{ name: "green lantern",   img: "green-lantern.jpg" },
  		{ name: "ironman",         img: "ironman.jpg" },
  		{ name: "spiderman",       img: "spiderman.jpg" },
  		{ name: "superman",        img: "superman.jpg" },
  		{ name: "the avengers",    img: "the-avengers.jpg" },
  		{ name: "thor",            img: "thor.jpg" },
      { name: "aquaman",         img: "aquaman.jpg" },
  		{ name: "batman",          img: "batman.jpg" },
  		{ name: "captain america", img: "captain-america.jpg" },
      { name: "fantastic four",  img: "fantastic-four.jpg" },
  		{ name: "flash",           img: "flash.jpg" },
  		{ name: "green arrow",     img: "green-arrow.jpg" },
  		{ name: "green lantern",   img: "green-lantern.jpg" },
  		{ name: "ironman",         img: "ironman.jpg" },
  		{ name: "spiderman",       img: "spiderman.jpg" },
  		{ name: "superman",        img: "superman.jpg" },
  		{ name: "the avengers",    img: "the-avengers.jpg" },
  		{ name: "thor",            img: "thor.jpg" },
  	];
  this.picked_cards  = [];
  this.pairs_clicked = 0;
  this.pairs_guessed = 0;
  this._shuffleCard();
  this.paintCards();
};
// this function just takes the array of cards above and shuffles them into a random order
MemoryGame.prototype._shuffleCard = function() {
  var counter = this.Cards.length;

  while (counter > 0) {
    index = Math.floor(Math.random() * counter);
    counter--;
    temp = this.Cards[counter];
    this.Cards[counter] = this.Cards[index];
    this.Cards[index] = temp;
  }
  return;
};
//check if both elements in picked cards are equal
MemoryGame.prototype.checkEqual = function(card1, card2){
  if (card1 === card2) {
    this.pairs_guessed++;
    return true;
  }else {
    this.pairs_clicked++;
    return false;
  }
};

//dom manipulators
MemoryGame.prototype.paintCards = function(){
  this.Cards.forEach(function(currentValue){
    var image = $("<div></div>").css("background-image", "url(img/"+currentValue.img+")");
    var processedImage = image.attr({class: "pic", name:currentValue.name});
    $("#memory_board").append(processedImage);
  });
};
//create new game
var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  var card1, card2;

  //player clicks, game starts evaluation
  $(".pic").on("click", function (e){
    if (!card1 && !card2) {
      card1 = e.currentTarget.name;
//      $(e.currentTarget).toggleClass("background-image", "none");
    } else {
      card2 = e.currentTarget.name;
      console.log(memoryGame.checkEqual(card1,card2));
      card1 = false;
      card2 = false;
    }
  });
});

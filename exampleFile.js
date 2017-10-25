var playerTitleElement = document.getElementById("player_title")
playerTitleElement.addEventListener('click', updateName);
     function updateName (event)
     {
     var name = prompt('Enter a new name');
     event.target.textContent = 'Player 1: ' + name;
      }

$('#player_title').click(function(event) {
var color = prompt("Enter a new color");
$(this).css({'color': color});
})

$(document).ready(function() {
$('#add_tip').click(function(event){
  var tipAmount = prompt("What percent tip do you want to leave?")/100;
  var mealPrice = $('#meal_cost').val();
  var newAmount = parseInt(mealPrice) + parseInt(tipAmount * mealPrice);
  $('#total_cost').text('Your total amount is: $' + newAmount)

  })
})

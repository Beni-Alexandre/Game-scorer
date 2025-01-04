//team1
var score1 = 0;
 var scoreDisplay1 = document.getElementById("scoreDisplay1");

 function increaseScore1(points){
score1 += points;
updateScoreDisplay1();

 }
 
  function decreaseScore1(points) {
    score1 -= points;
    updateScoreDisplay1();
  }

  function resetScore1() {
    score1 = 0;
    updateScoreDisplay1();
  }
  function updateScoreDisplay1() {
    scoreDisplay1.textContent = score1;
  }
  //team2 
  var score2 = 0;
  var scoreDisplay2 =document.getElementById("scoreDisplay2");

  
 function increaseScore2(points){
  score2 += points;
  updateScoreDisplay2();
  
   }
   
    function decreaseScore2(points) {
      score2 -= points;
      updateScoreDisplay2();
    }
  
    function resetScore2() {
      score2 = 0;
      updateScoreDisplay2();
    }
    function updateScoreDisplay2() {
      scoreDisplay2.textContent = score2;
    }
     var Menu = document.getElementById("Menu");
      function hideMenu(){
        Menu.style.fontSize = "0px";
      }
      function showMenu(){
        Menu.style.fontSize = "12px";
      }
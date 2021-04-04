 var score= 0;
 
 function update_score() {
 score= score + 1;
 document.getElementById("score").innerHTML="Score: " + score;
 }

 function save_score() {
    localStorage.setItem("score", score);
 }

 function next_page() {
    window.location="activity2.html";
 }
 
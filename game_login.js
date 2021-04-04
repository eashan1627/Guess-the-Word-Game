function add_user() {
    var player_1_name= document.getElementById("player1_name_input").value;
    var player_2_name= document.getElementById("player2_name_input").value;

    localStorage.setItem("player_1_name", player_1_name);
    localStorage.setItem("player_2_name", player_2_name);

    window.location="game_page.html";
}
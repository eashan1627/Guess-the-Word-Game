var player_1_name = localStorage.getItem("player_1_name");
var player_2_name = localStorage.getItem("player_2_name");
var player_1_score = 0;
var player_2_score = 0;

document.getElementById("player1_name").innerHTML = player_1_name + " : ";
document.getElementById("player2_name").innerHTML = player_2_name + " : ";

document.getElementById("player1_score").innerHTML = player_1_score + " : ";
document.getElementById("player2_score").innerHTML = player_2_score + " : ";

document.getElementById("player_question").innerHTML = "Question turn: " + player_1_name;
document.getElementById("player_answer").innerHTML = "Answer turn: " + player_2_name;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("Word is " + word);

    CharAt1 = word.charAt(1);
    console.log(CharAt1);

    lengthBy2 = Math.floor(word.length / 2);
    CharAt2 = word.charAt(lengthBy2);
    console.log(CharAt2);

    lengthMinus1 = word.length - 1;
    CharAt3 = word.charAt(lengthMinus1);
    console.log(CharAt3);

    removeCharAt1 = word.replace(CharAt1, "_");
    removeCharAt2 = removeCharAt1.replace(CharAt2, "_");
    removeCharAt3 = removeCharAt2.replace(CharAt3, "_");

    question_word = "<h4 id='word_display'> Q. " + removeCharAt3 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("answer - " + answer);

    if (answer == word) {
        if (answer_turn == "player1") {
            player_1_score = player_1_score + 1;
            document.getElementById("player1_score").innerHTML = player_1_score;
        } else {
            player_2_score = player_2_score + 1;
            document.getElementById("player2_score").innerHTML = player_2_score;
        }
    }
    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question turn-" + player_2_name;
    }
    else {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question turn-" + player_1_name; 
    }
    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer turn-" + player_2_name;
    }
    else {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer turn-" + player_1_name; 
    }
    
    document.getElementById("output").innerHTML= "";
}
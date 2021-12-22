    function adduser(){
        player_1name = document.getElementById("player1_name").value
       player2_name = document.getElementById("player2_name").value

        localStorage.setItem("Player 1 name", player_1name);
        localStorage.setItem("Player 2 name", player2_name);

        window.location="maths_game.html";
}
player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player_1name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";
document.getElementById("player_1").innerHTML = player1_score;
document.getElementById("player_2").innerHTML = player2_score;
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
function submit(){
    number_1 = document.getElementById("number1").value;
    number_2 = document.getElementById("number2").value;
    actual_answer = parseInt(number_1) * parseInt(number_2);
   quesion_number = "<h4>" + number_1 + "X" + number_2  + "</h4>";
   input_box = "<br>Answer :<input type='text' id='input_check_box'>";
   check_button = "<br><br><button class'btn btn-info' onclick='check'>Check</button>";
   row = quesion_number + input_box + check_button;
   document.getElementById("output").innerHTML = row;
   document.getElementById("number1").value = "";
   document.getElementById("number2").value = "";
}
quesion_turn = "player1"
answer_turn = "player2"
function check(){
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer){
        if(answer_turn == "player1"){
           player1_score = player1_score + 1;
           document.getElementById("player1_score").innerHTML = player1_score;   
        }
        else{
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
        if(quesion_turn == "player1"){
            quesion_turn = "player2";
            document.getElementById("player_quesion").innerHTML = "Quesion Turn -" + player2_name;
        }
        else{
            quesion_turn = "player1"
            document.getElementById("player_quesion").innerHTML = "Quesion Turn -" + player_1name;
        }
        if(answer_turn == "player2"){
            answer_turn = "player1"
            document.getElementById("player_answer").innerHTML = "Answer Turn -" + player_1name;
        }
        else{
            answer_turn = "player2"
            document.getElementById("player_answer").innerHTML = "Answer Turn -" + player_2name;
        }
    }
}
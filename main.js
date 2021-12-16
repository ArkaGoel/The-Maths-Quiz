    function adduser(){
       var  player_1name = document.getElementById("player1_name").value
        var player2_name = document.getElementById("player2_name").value

        localStorage.setItem("Player 1 name", player_1name);
        localStorage.setItem("Player 2 name", player2_name);

        window.location="maths_game.html";
}

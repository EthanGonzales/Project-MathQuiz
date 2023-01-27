function addUser()
{
    Player1=document.getElementById("player1_name_input").value;
    localStorage.setItem("Player1", Player1);
    Player2=document.getElementById("player2_name_input").value;
    localStorage.setItem("Player2", Player2);
    window.location="quiz_page.html"
}
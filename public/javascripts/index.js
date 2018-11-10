// Makge connection
var socket = io.connect("http://localhost:3000/");

$("form").submit(function (event) {
    event.preventDefault();
    var email = $("#inputEmail").val();
    var password = $("#inputPassword").val();
    
    socket.emit('login',{
        email: email,
        password: password
    });
   
});

socket.on('login', function(data){
    if(data){
        window.location.href = "/packages.html";
    } else {
        alert("wrong email or password");
    }
})

$("form").submit(function (event) {
    event.preventDefault();
    var email = $("#inputEmail").val();
    var password = $("#inputPassword").val();
    if (email === 'reza@gmail.com' && password === '123456') {
        window.location.href = "/packages.html";
      } else {
        alert("wrong email or password");
      }
});
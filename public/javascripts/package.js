// Makge connection
var socket = io.connect("http://localhost:3000/");


$("form").submit(function (event) {
    event.preventDefault();
    var _country = $("#inputCountry").val();
    var _city = $("#inputCity").val();
    var _zip = $("#inputZip").val();
    var _address = $("#inputAddress").val();
    var _event = $("#inputEvent").val();
    var _transportation = $("#inputTransportation").val();
    var _hotel = $("#inputHotel").val();
    var _price = $("#inputPrice").val();

    socket.emit('submitPackage',{
        country: _country,
        city: _city,
        zip: _zip,
        address: _address,
        event: _event,
        transportation: _transportation,
        hotel: _hotel,
        price: _price
    });
   
});

socket.on('submitPackage', function(data){
    if(data){
        alert(data.country)
        // alert("Data Saves to Database");
    } else {
        alert("Something is wrong");
    }
})
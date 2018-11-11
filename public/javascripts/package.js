// Makge connection
var socket = io.connect("http://localhost:3000/");

$("#remove").click(function (event) {
    event.preventDefault();
    var _id = $("#inputId").val();
    if (!isNaN(_id)) {
        socket.emit('deletePacakge', {
            id: _id
        });
        $("#inputId").val("");
    }
});

$("#addNew").click(function (event) {
    event.preventDefault();
    var _country = $("#inputCountry").val();
    var _city = $("#inputCity").val();
    var _zip = $("#inputZip").val();
    var _address = $("#inputAddress").val();
    var _event = $("#inputEvent").val();
    var _transportation = $("#inputTransportation").val();
    var _hotel = $("#inputHotel").val();
    var _price = $("#inputPrice").val();

    socket.emit('submitPackage', {
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
var package = [];

socket.on('getPackage', function (data) {
    console.log(data);
    $("#here_table > table").remove();
    createTable(data);
})

function createTable(data) {
    var table = $('<table>').addClass('table');
    for (i = 0; i < data.length; i++) {
        table.append('<tr>');
        var id = $('<td>').addClass('bar').text(data[i].id);
        var country = $('<td>').addClass('bar').text(data[i].country);
        var city = $('<td>').addClass('bar').text(data[i].city);
        var zip = $('<td>').addClass('bar').text(data[i].zip);
        var address = $('<td>').addClass('bar').text(data[i].address);
        var event = $('<td>').addClass('bar').text(data[i].event);
        var transportation = $('<td>').addClass('bar').text(data[i].transportation);
        var hotel = $('<td>').addClass('bar').text(data[i].hotel);
        var price = $('<td>').addClass('bar').text(data[i].price);
        table.append(id);
        table.append(country);
        table.append(city);
        table.append(zip);
        table.append(address);
        table.append(event);
        table.append(transportation);
        table.append(hotel);
        table.append(price);
        table.append('</tr>');
    }

    $('#here_table').append(table);
}
console.log(`Warsztat zad45974`);


$(document).ready(function() {

    $('#get-data').click(function() {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php').done(function(data) {

            let dUserId = $('<div id="dane-programisty"></div>').text(`Autor: ${data.imie} ${data.nazwisko} ${data.zawod} ${data.firma}`);

            let hr = $('<hr />');

            let jqBody = $('body');


            jqBody.append(dUserId);

            jqBody.append(hr);

        })
            .fail(function(error) {
                console.log(error);
            });
    });
});
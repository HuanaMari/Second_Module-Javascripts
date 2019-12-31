var click = $('<div>').attr('class', 'click');
var body = $('body');

var sliki = pictures();
klikovi = (vizitki) => {

    search = (vizitki) => {
        $('.btn').on('click', () => {
            let inputValue = $('input').val();
            var pars = parseInt(inputValue);
            console.log(pars)
            vizitki.forEach(element => {
                if (element.amount === pars) {
                    body.html(' ');
                    zaPrikaz(element)
                }
            });
        });
    }
    search(vizitki);

    kliklak = () => {
        $('ul').on('click', (event) => {
            var cuculce = $(event.target).attr('class');
            var parsuvanje = parseInt(cuculce);
            if (parsuvanje === 100) {
                body.html(' ');
                var varijabilna = vizitki[0]
                zaPrikaz(varijabilna,sliki[0]);
            } if (parsuvanje === 200) {
                body.html(' ');
                var varijabilna = vizitki[1]
                zaPrikaz(varijabilna,sliki[1]);
            }
            if (parsuvanje === 300) {
                body.html(' ');
                var varijabilna = vizitki[2]
                zaPrikaz(varijabilna,sliki[02]);
            }
            if (parsuvanje === 400) {
                body.html(' ');
                var varijabilna = vizitki[3]
                zaPrikaz(varijabilna,sliki[3]);
            }
            if (parsuvanje === 500) {
                body.html(' ');
                var varijabilna = vizitki[4]
                zaPrikaz(varijabilna,sliki[4]);
            }
            if (parsuvanje === 1000) {
                body.html(' ');
                var varijabilna = vizitki[5]
                zaPrikaz(varijabilna,sliki[5]);
            }
            console.log(parsuvanje)
        });
    }
    kliklak();


};
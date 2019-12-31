
var body = $('body')

var sliki = pictures();

searchof = () => {
    var input = $('<input type=text>').attr('class', 'input').attr('placeholder', 'Search...');
    var btn = $('<button/>').attr('class', 'btn').text('Search');

    body.append(input)
    body.append(btn)
}

izgled = (visitki) => {
    var klasa = visitki.amount

    var lista = $('<ul>').attr('class', klasa);
    var amount = $('<li>').attr('class', klasa).text('Amount :' + visitki.amount);
    var sides = $('<ul>').attr('class', klasa);
    var oneSided = $('<li>').attr('class', klasa).text('OneSided :' + visitki.oneSided);
    var twoSided = $('<li>').attr('class', klasa).text('TwoSided :' + visitki.twoSided);
    var fullColor = $('<li>').attr('class', klasa).text('FullColor :' + visitki.fullColor);
    var lam = $('<ul>').attr('class', klasa);
    var lamGloss = $('<li>').attr('class', klasa).text('LamGloss :' + visitki.lamGloss);
    var lamMatt = $('<li>').attr('class', klasa).text('LamMatt :' + visitki.lamMatt);
    var fancyPaper = $('<li>').attr('class', klasa).text('FancyPaper :' + visitki.fancyPaper);
    var roundCorners = $('<li>').attr('class', klasa).text('RoundCorners :' + visitki.roundCorners);

    lista.append(amount);
    lista.append(sides);
    sides.append(oneSided);
    sides.append(twoSided)
    lista.append(fullColor)
    lista.append(lam);
    lam.append(lamGloss);
    lam.append(lamMatt);
    lista.append(fancyPaper);
    lista.append(roundCorners);
    body.append(lista)
    body.append($('<br>'));
};

hulahopki = (parameter) => {
    for (let i = 0; i < parameter.length; i++) {
        izgled(parameter[i]);
    }
};

zaPrikaz = (varijabilna, slikic) => {
    var divce = $('<div>').attr('class', varijabilna.amount);
    var amount = $('<ul>').attr('class', varijabilna.amount).text('Amount : ' + varijabilna.amount);
    var oneSide = $('<li>').attr('class', varijabilna.amount).text('oneSide :' + varijabilna.oneSided);
    var twoSide = $('<li>').attr('class', varijabilna.amount).text('twoSide :' + varijabilna.twoSided);
    var slikicica = $('<img/>').attr('src', slikic).css({ 'width': '150px' });


    divce.append(amount)
    divce.append(oneSide)
    divce.append(twoSide)
    divce.append(slikicica)
    click.append(divce)
    body.append(click)
}
karticki = (tintiri) => {

    var karticki = {
        amount: tintiri.amount,
        sided: [{
            oneSided: tintiri.oneSided,
            twoSided: tintiri.twoSided
        }],
        lam: [{
            lamGloss: tintiri.lamGloss,
            lamMatt: tintiri.lamMatt
        }],
        fullColor: tintiri.fullColor,
        roundCorners: tintiri.roundCorners,
        fancyPaper: tintiri.fancyPaper

    }
    return karticki
};

objPrikaz = (param) => {
    // var param = karticki();
    var objDiv = $('<div>').attr('class', 'divce').css({'background-image':'url(https://image.freepik.com/free-psd/yellow-business-card_125845-5.jpg)'});
    var amount = $('<div>').attr('class', 'amount').text('Amount: ' + param.amount);
    var strani = $('<ul>').attr('class', 'amount').text('Sided: ');
    var one = $('<li>').attr('class', 'amount').text('One Sided: '+ param.sided[0].oneSided );
    var slikickaOS = $('<img>').attr('src','https://image.freepik.com/free-vector/dynamic-natural-black-business-card-template_74869-453.jpg').css({'width':'150px'});
    var two = $('<li>').attr('class', 'amount').text('Two Sided: ' + param.sided[0].twoSided);
    var slikickaOT = $('<img>').attr('src','https://image.freepik.com/free-psd/yellow-business-card_125845-5.jpg').css({'width':'150px'});
    var lam = $('<ul>').attr('class', 'amount').text('Lam: ');
    var gloss = $('<li>').attr('class', 'amount').text('One Sided: ' + param.lam[0].lamGloss);
    var matt = $('<li>').attr('class', 'amount').text('One Sided: ' + param.lam[0].lamMatt);
    var fullColor = $('<div>').attr('class', 'amount').text('FullColor: ' + param.fullColor);
    var korneri = $('<div>').attr('class', 'amount').text('Round Corners: ' + param.roundCorners);
    var korSli = $('<img>').attr('src',' https://image.freepik.com/free-vector/abstract-business-card_23-2147740448.jpg').css({'width':'150px'});
    var fancy = $('<div>').attr('class', 'amount').text('Fancy Paper : ' + param.fancyPaper);
   
    objDiv.append(amount)
    objDiv.append(strani)
    strani.append(one)
    strani.append(slikickaOS);
    strani.append(two)
    strani.append(slikickaOT)
    objDiv.append(lam)
    lam.append(gloss)
    lam.append(matt)
    objDiv.append(fullColor)
    objDiv.append(korneri)
    objDiv.append(korSli)
    objDiv.append(fancy)
    body.append(objDiv)


}



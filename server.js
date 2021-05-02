//example http://localhost:3000/?operacja=pomnóż&number1=23&number2=3
const http = require('http');
http.createServer((req, res) => {
    const url = new URL('http://localhost' + req.url);
    var Operation = {
        'dodaj': '+',
        'odejmij': '-',
        'pomnóż': '*',
        'podziel': '/'
    }
    var operacja = url.searchParams.get('operacja');
    var number1 = parseFloat(url.searchParams.get('number1'));
    var number2 = parseFloat(url.searchParams.get('number2'));
    var result;
    switch (operacja) {
        case 'dodaj':
            result = number1 + number2;
            break;
        case 'odejmij':
            result = number1 - number2;
            break;
        case 'pomnóż':
            result = number1 * number2;
            break;
        case 'podziel':
            result = number1 / number2;
            break;
    }
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
    });
    res.write(`${number1} ${Operation[operacja]} ${number2} = ${result}`);
    res.end();
}).listen(3000);
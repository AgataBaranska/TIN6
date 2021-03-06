//example http://localhost:3000/?operacja=pomnóż&number1=23&number2=3
const http = require('http');
const Operation = {
    'dodaj': '+',
    'odejmij': '-',
    'pomnóż': '*',
    'podziel': '/'
}
http.createServer((req, res) => {
    const url = new URL('http://localhost' + req.url);

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
        default:
            res.statusMessage = 'Invalid query';
            res.statusCode = 400;
            res.end();

    }
    console.log(typeof result);
    if (typeof result !== 'undefined') {
        res.writeHead(200, {
            'Content-Type': 'text/plain; charset=utf-8'
        });
        res.write(`${number1} ${Operation[operacja]} ${number2} = ${result}`);
        res.end();

    }

}).listen(3000);
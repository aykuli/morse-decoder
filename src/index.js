const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let i = 0;
    let word = '';
    while (i < expr.length) {
        let symb = '';
        str10 = expr.slice(i, i + 10);

        if (str10 == '**********') {
            word += ' ';
        } else {

            let j = 0;
            while(j < str10.length) {
                str2 = str10.slice(j, j + 2);

                if ( str2 == '10' ) {
                    symb += '.';              
                } else if ( str2 == '11' ) {
                    symb += '-';
                }
                j += 2;
            }
        word += MORSE_TABLE[symb];
        }
        i += 10;
    }
    return word;
}

module.exports = {
    decode
}
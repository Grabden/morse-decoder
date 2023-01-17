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
    ' ': ' '
  };
  
  function decode(expr) {
    let word=[],letter='',k=expr.length%10,exp=expr.slice(k),j=0;
    if(k!=0){j=1;word[0]=expr.slice(0,k);}
    for(let i=0;i<exp.length/10;i++,j++){
      word[j]=exp.slice((i)*10,(i+1)*10);
    }
    for(let i=0;i<word.length;i++){
      letter=word[i];
      word[i]='';
      for(let s=0;s<letter.length;s=s+2){
        if(letter[s]+letter[s+1]=='10') 
          word[i]=word[i]+'.';
        else if(letter[s]+letter[s+1]=='11') 
          word[i]=word[i]+'-';
        else if(letter[s]+letter[s+1]=='**') {
          word[i]=' ';
          continue;
        }
      }
    }
    letter='';
    for(let i=0;i<word.length;i++){
      letter=letter+MORSE_TABLE[word[i]];
    }
    return letter;
  }

module.exports = {
    decode
}
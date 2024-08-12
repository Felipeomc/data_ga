
const fs = require('fs');

console.log(arrayProje)
require('./routes/index') 
//arrayProj = ['cris']
const dados = fs.readFileSync('out_file.json');
    
var datas = JSON.parse(dados.toString());
console.log(datas)



//if (typeof window !== 'undefined') {
    // Perform localStorage action
   
//pegaTeam()
//function pegaTeam(){
 //  team = localStorage.getItem('valueTexto');
 //   alert(team)
   
//   module.exports = team 
//}


//}
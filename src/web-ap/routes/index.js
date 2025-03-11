
//import {team_choice}  from '../views/teste_algo_genetic'

//"use strict";
var jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

var $ = jQuery = require('jquery')(window);

window.fill = "";

require('dotenv').config()
const  DB_USER =  process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD 
let status = 'inactive'


const axios = require('axios');
var express = require('express');
const res = require('express/lib/response');
const db = require('../db');
//let team = require('../mid');

//var myModule = require('../views/teste_algo_genetic');
const fs = require('fs');

//var ler = require('../views/projetos')
//var refreshTimeline = require('../views/simpleTimeline')


//require('../views/teste_algo_genetic');

//import  team_choice  from '../views/teste_algo_genetic';
let team_choice = '' //t //localStorage.getItem('valueTexto'); //require('../views/teste_algo_genetic');

$('fn.simpleTimeline')

const { PlaceSchema } = require('../db');
var router = express.Router();
var nome= "";
var senha = "";
var logou=false;

var nome_user = [];
var pass_user = [];
let users_all = []
let perfil = ''
let nome_usuario = ''
let profile = ''





/*acessando a Home para autenticar*/
router.get('/', async (req,res)=> {
  try {
      if (logou==true){
        res.redirect('projeto2')
         // res.render('./views/form.html');
          console.log(' logou = true')
          logou=false;
      }else{
        console.log(' logou = false')

        res.render('index');   
          //res.render({message:'Ops! This route requires a login!'}); 
      }
      
  } catch (error) {
     res.render('index');   
      // res.send({error:error.message});
  }
})

const users_data_file = fs.readFileSync('user4.json');
const users2 = JSON.parse(users_data_file);
const filteredUsers = users2.filter(user => user.contractRoleID !== "");

router.get('/users2', (req, res) => {
  res.json(filteredUsers);
  
});
const users_for_experiment = fs.readFileSync('user4.json');
const users3 = JSON.parse(users_for_experiment);

router.get('/users3', (req, res) => {
  res.json(users3);
  
});

/* oculto em 22 12 23
let pessoa2 = []
router.get('/form', function(req, res) {
  
  //em 09/07
  //pegar somente users com softskills
  let user4 = JSON.parse(fs.readFileSync('user4.json'));
  let users_auxi = [];
  const roles = ['Project Manager', 'Master', 'Middle', 'Senior', 'Junior'];
  
  // Função para filtrar usuários por função e adicionar ao array
  function filterAndAddUsers(role) {
      let filteredUsers = user4.filter(user => 
          user.hardskill.length > 0 && 
          user.methodology.length > 0 && 
          user.contractRoleName === role &&
          user.projects_id.some(projectId => projectId > 60)
      );
      
      // Pegar apenas os 6 primeiros usuários do filtro
      return filteredUsers.slice(0, 6);
  }
  
  // Filtrar usuários por cada função e adicionar ao array
  roles.forEach(role => {
      users_auxi = users_auxi.concat(filterAndAddUsers(role));
  });
  
  // Escrever o resultado final no arquivo JSON
  fs.writeFileSync('base_experimento1.json', JSON.stringify(users_auxi));



  
  let array = JSON.parse(fs.readFileSync('base_experimento1.json'));
// Função para converter objeto em formato de linha CSV
function objectToCSVRow(object) {
  let csvRow = '';
  for (const key in object) {
    if (Array.isArray(object[key])) {
      csvRow += `"${object[key].join(', ')}",`;
    } else {
      csvRow += `"${object[key]}",`;
    }
  }
  return csvRow.slice(0, -1); // Remover a última vírgula
}

// Função para converter array em formato CSV
function arrayToCSV(array) {
  let csv = '';
  array.forEach(object => {
    csv += objectToCSVRow(object) + '\n';
  });
  return csv;
}

// Converter o array em CSV
const csvData = arrayToCSV(array);

// Salvar o CSV em um arquivo
fs.writeFile('dados.csv', csvData, 'utf8', err => {
  if (err) {
    console.error('Erro ao salvar o arquivo CSV:', err);
  } else {
    console.log('Arquivo dados.csv CSV salvo com sucesso.');
  }
});




  const vazio = []
  //
  fs.writeFileSync('out_file.json', JSON.stringify(vazio));


  
 

  res.render('form', { pessoa2:pessoa2 });
});

*/


// Rota para exibir o gráfico de bolhas
router.get('/skills-chart', (req, res) => {
  const rawData = JSON.parse(fs.readFileSync('base_experimento1.json', 'utf8'));
  const skillsData = processSkills(rawData); // processSkills é uma função que você precisa definir
  res.render('skills-chart', { skillsData: JSON.stringify(skillsData) });
});

function processSkills(rawData) {
  const skillsCount = {};
  rawData.forEach(dev => {
      dev.hardskill.forEach(skill => {
          skillsCount[skill] = (skillsCount[skill] || 0) + 1;
      });
  });
  return Object.keys(skillsCount).map(skill => ({ skill, count: skillsCount[skill] }));
}

router.get('/connections', (req, res) => {
  res.render('connections'); // Renderiza a página 'connections'
});

router.get('/dados-do-grafo', (req, res) => {
  fs.readFile('caminho_para_salvar_dados_do_grafo.json', 'utf8', (err, data) => {
      if (err) {
          // Em caso de erro na leitura do arquivo, envie uma resposta de erro
          res.status(500).send('Erro ao ler o arquivo de dados');
      } else {
          // Se o arquivo for lido com sucesso, envie os dados
          res.send(data);
      }
      // Não chame res.render aqui, pois você já enviou uma resposta acima
  });
  // remova o res.render('connections') que estava aqui
});


router.get('/profiles', (req, res) => {
  
  res.render('profiles');
});

/* Aqui é o post que vai enviar as credenciaais de autenticacao a partir da tela home*/ 

router.post('/',(req,res)=>{
  users_all = []
  req.session.login = nome;
  perfil = req.body.perfil
  if (perfil == 0)  profile =  'Director'

  if (perfil == 1)  profile =  'Project Manager'

   //pega só o user e senha e não o vetor todo
   nome_user = req.body.login
   pass_user = req.body.password


  //let url = 'http://turmalina-teste.virtus.ufcg.edu.br/#/login'
  let url = 'https://turmalina.virtus.ufcg.edu.br/#/login'

  

  //vai autenticar no turmalina e retorna autenticado
  getDataPromise(nome_user,pass_user,url)
  .then(res.redirect('projeto2'))
console.log('passou do post')

//pega os user dos contratos nao nulos na turmalina teste
/*como a turmalina teste esta indisponivel esta como comentario
for(let i=1;i<56;i++){
  if((i!=54) && (i!=53) && (i!=43) && (i!=41) && (i!=27)){
    let url='http://turmalina-teste.virtus.ufcg.edu.br/contract/'+i+'/user'

    getDataUsers(nome_user,pass_user,url)
    .then()
  }
}
*/
}); 



 

  //vai autenticar no turmalina e retorna autenticado
//se perfil director ou manager

 
  // if((nome_user != DB_USER) && (pass_user != DB_PASSWORD)){ 
  //  profile =  'Director'
 //  } 





 function getDataPromise(nome_user, pass_user, url) {
  for (let i = 0; i < nome_user.length; i++) {
    if (nome_user[i].length > 1) {
      nome_user = nome_user[i];
    } else {
      //
    }
  }
  for (let i = 0; i < pass_user.length; i++) {
    if (pass_user[i].length > 1) {
      pass_user = pass_user[i];
    } else {
      //
    }
  }

  nome_usuario = nome_user;

  return axios({
    url: url,
    method: "get",
    timeout: 108000,
    headers: {
      "Content-Type": "application/json",
    },

    auth: {
      username: nome_user,
      password: pass_user,
    },
  })
    .then(function (res) {
      //console.log( res)
      logou = true;
    })
    .catch(function (error) {
      console.log(error);
      return "Erro ao acessar o servidor externo";
    });
}




/*


  
function getDataPromise(nome_user, pass_user, url) {

  for (let i = 0; i < nome_user.length; i++) {
    if (nome_user[i].length > 1) {
      nome_user = nome_user[i]
    }
    else {
      //
    }
  }
  for (let i = 0; i < pass_user.length; i++) {
    if (pass_user[i].length > 1) {
      pass_user = pass_user[i]
    }
    else {
      //
    }
  }

  nome_usuario = nome_user


  return axios({

    url: url,
    method: 'get',
    timeout: 108000,
    headers: {
      'Content-Type': 'application/json',
    },

    auth: {
      username: nome_user,
      password: pass_user
    }
  })
    .then(function (res) {
      //console.log( res)

      logou = true

    }
    )
}
*/

function getDataUsers(nome_user,pass_user,url){

  for(let i=0;i<nome_user.length; i++){
    if(nome_user[i].length>1){
      nome_user = nome_user[i]
    }
    else{
      //
    }
   }
   for(let i=0;i<pass_user.length; i++){
    if(pass_user[i].length>1){
      pass_user = pass_user[i]
    }
    else{
      //
    }
   }
  let vazio = []
  fs.writeFileSync('user.json', JSON.stringify(vazio))
  return axios({

      url: url,
      method: 'get',
      timeout: 108000,
      headers: {
          'Content-Type': 'application/json',
      },
      
          auth: { 
             username: nome_user, 
             password: pass_user 
          }
  })
  .then(function(res){
    users_all.push(res.data)
    //console.log(res.data)
     //limpando user2
    
   
    
    fs.writeFileSync('user2.json', JSON.stringify(users_all))
   
   })
    
  
}



  //.then(function(res){
   // users_all.push(res.data)
   //console.log(res.data)
    
   // logou=1
   //fs.writeFileSync('user2.json', JSON.stringify(users_all))
   // console.log('exectou a primsse')
  //})
//










/* GET exibe os users na user page. */
/*
router.get('/user', async (req, res) => {
  const db = require("../db")
  const Users = db.Mongoose.model('users2', db.PlaceSchema, 'users2')

  const docs = await Users.find({}).lean().exec() // exec executa a consulta em si, retornando um array docs, que contém os resultados da pesquisa
  res.render('user', { docs }); //aqui renderiza o arquivo docs html na view users
});
*/

router.get('/out_file', async (req, res) => {
  
  res.sendFile("C:/Users/Felipe/Works/web-ap/out_file.json") //aqui renderiza o arquivo docs html na view config
});




//exibir rota pra add softskill na base de dados ATLAS
router.get('/config', async (req, res) => {
  
  res.render('config'); //aqui renderiza o arquivo docs html na view config
});

//add softskill na base de dados
router.post('/config',(req,res)=>{

const url = 'mongodb+srv://'+DB_USER+':'+DB_PASSWORD+'@softskills.q1v44.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

 db.Mongoose.connect(url, (err, db) => { 
  //db.collection('soft').remove({})
  db.collection('soft').insertOne( {
      
      "name": req.body.name
 });  
    
   res.render('config');
});
//db.close();
});

//exibir rota pra add projetos na base de dados ATLAs
//router.get('/configProjects', async (req, res) => {
  
 // res.render('configProjects'); //aqui renderiza o arquivo docs html na view config
//});


//pegando projetos do Atlas



/* GET exibe os users na user page. */
/*
router.get('/user', async (req, res) => {
  const db = require("../db")
  const Users = db.Mongoose.model('users2', db.PlaceSchema, 'users2')

  const docs = await Users.find({}).lean().exec() // exec executa a consulta em si, retornando um array docs, que contém os resultados da pesquisa
  res.render('user', { docs }); //aqui renderiza o arquivo docs html na view users
});
*/





var tituloUpdated = ' '


//  GET PROJECTS
  router.get('/projeto2',  async (req, res, next) => {

    //console.log('entrou no get projeto2')
    
    const db = require("../db");
    const { projetoSchema } = require('../db');
   
    const projs =  db.Mongoose.model('projetos', db.projetoSchema);
    const history =  db.Mongoose.model('arquivos', db.arquivosSchema);
    const people_user4 =  db.Mongoose.model('users2', db.arquivosSchema);
    
    
    //const progetos_get  =  fs.readFileSync('projetos.json') 
    //const get_projetos = JSON.parse(progetos_get)
    //const get_people  =  JSON.parse(fs.readFileSync('user4.json')) 



   // console.log(get_projetos[1])
    //console.log(get_projetos[2])
/*
  projs.deleteMany({}, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("Todos os projetos foram removidos do banco de dados.");
    }
});
*/

/*
history.deleteMany({}, function(err) {
  if(err) {
      console.log(err);
  } else {
      console.log("Todos historio de projetos foi removido banco de dados.");
  }
});
*/
/*
    for (let i=get_projetos.length-1; i>(get_projetos.length -278); i--){
      const finishDate = new Date(get_projetos[i].finish_date);
      const beginDate = new Date(get_projetos[i].begin_date);
     
      
      if((get_projetos[i].methodology !== undefined) && (get_projetos[i].methodology.length > 0) ){ //&& (get_projetos[i].technologies.length > 0) && (get_projetos[i].softskills.length > 0)
       
        let team_nomes =[]
        for(let j=0; j< get_projetos[i].team_names.length;j++){
          team_nomes.push(get_projetos[i].team_names[j].split('.')[0])
          console.log('entrou no for')
        }
        


      var inicializapROJETOS =  new history(
        
        { 
          
          name: 'Project '+ get_projetos[i].id.toString(),
          nature: 'undefined',
          begin:beginDate.getFullYear().toString(),
          end: finishDate.getFullYear().toString(),
          team:  team_nomes.toString(),
          technologies: get_projetos[i].technologies.toString(),
          softskills: get_projetos[i].softskills.toString(),
          method_proj:JSON.stringify(get_projetos[i].methodology.toString()),
          projectId: get_projetos[i].id
        }
        )
        
        // arquiva o proj q sera atualizado
        inicializapROJETOS.save()
    }
   
  }
*/

  
  
/*
people_user4.deleteMany({}, function(err) {
  if(err) {
      console.log(err);
  } else {
      console.log("Todos os projetos foram removidos do banco de dados.");
  }
});

for (let i=0; i<get_people.length; i++) {
  const new_people = new people_user4({ 
    user_id: get_people[i].user_id,
    username: get_people[i].username,
    bio: get_people[i].bio,
    systemRole: get_people[i].systemRole,
    contractId: get_people[i].contractId,
    contractRoleID: get_people[i].contractRoleID,
    contractRoleName: get_people[i].contractRoleName,
    projects_id: Array.isArray(get_people[i].projects_id) ? get_people[i].projects_id : [],
    softskills: Array.isArray(get_people[i].softskills) ? get_people[i].softskills : [],
    hardskill: Array.isArray(get_people[i].hardskill) ? get_people[i].hardskill : [],
    nomeCompleto: get_people[i].nomeCompleto,
    methodology: Array.isArray(get_people[i].methodology) ? get_people[i].methodology : []
  });
    
  // salva o novo objeto no banco de dados
  await new_people.save();
}

people_user4.find({}, function(err, pessoas) {
  if (err) {
    console.error(err);
  } else {
    console.log(pessoas.length + ' objetos encontrados no schema.');

    // Itera sobre os objetos encontrados
    for (let i = 0; i < pessoas.length; i++) {
      const pessoa = pessoas[i];

      // Verifica se o array "softskills" tem comprimento maior que 0
      if (pessoa.softskills && pessoa.softskills.length > 0) {
        console.log(`softskills da pessoa ${pessoa._id}:`);

        // Itera sobre o array "softskills"
        for (let j = 0; j < pessoa.softskills.length; j++) {
          console.log(`- ${pessoa.softskills[j]}`);
        }
        break

      }
    }
  }
});
*/

   
    
    const saved2 =  await history.find({})
    fs.writeFileSync('out_file2.json', JSON.stringify(saved2))


 //exportando os projetos
    const docs =  await projs.find({}).lean().exec();
   fs.writeFileSync('out_file.json', JSON.stringify(docs));


   //exportando historico dos arquivos dos projetos
   const saved =  await history.find({})
   fs.writeFileSync('out_file2.json', JSON.stringify(saved));

 //lendo os dois arquivos json e juntando em um só
 let merge = [{
  profile:profile,
  username:nome_usuario,
  pessoas:[],
  proje: [],
  hist: []
}]
const his = fs.readFileSync('out_file2.json')
const proj = fs.readFileSync('out_file.json')

merge[0].proje.push(JSON.parse(proj))

merge[0].hist.push(JSON.parse(his))

  //cria arquivo outfile pra ser acessado pelas paginas,AG
  fs.writeFileSync('out_file.json', JSON.stringify(merge)) //em comentario 27/04


  res.render('projeto2');
      
  });

















/*
// LIMPA O ARQUIVO JSON
  router.get('/form',  async (req, res, next) => {
      const vazio = []
   //
   fs.writeFileSync('out_file.json', JSON.stringify(vazio));

   res.redirect('form.html');

  

  })
*/
/*
 router.delete('/projeto2', (req,res)=>{
 console.log(' entrou no metodo delete');

  const url = 'mongodb+srv://'+DB_USER+':'+DB_PASSWORD+'@softskills.q1v44.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

  db.Mongoose.connect(url, (err, db) => {
    if (err) throw err;

    db.collection('projetos').findOneAndDelete(
      { "name" : "ISABELLA " }
   )
  })
 })
*/
var id_up

/* Colocado em comentarios em 27/04
router.post('/form', async function(req, res, next) {
  //no caso de atualizar um projeto
  id_up = req.body.id_up
  console.log('==========================')
  console.log(id_up)
  
  const db = require("../db");
  
  const { projetoSchema } = require('../db');
   
  const projs =  db.Mongoose.model('projetos', db.projetoSchema);
  const salvos =  db.Mongoose.model('arquivos', db.arquivosSchema);

  const auxi  = await  projs.find({name:id_up}).lean().exec();
  fs.writeFileSync('out_file.json', JSON.stringify(auxi));

  const saved =  await salvos.find({})
   fs.writeFileSync('out_file2.json', JSON.stringify(saved));
 
  const dados = fs.readFileSync('out_file.json');
  
  var dados_out_file_update = JSON.parse(dados.toString());

  console.log('proj p update')
  console.log(dados_out_file_update)

  res.redirect('/projeto2')
 })

*/









//  DELETE
 router.post('/projeto2', async function(req, res, next) {
  var id = req.body.id
  const db = require("../db");
  const { projetoSchema } = require('../db');
  const projs =  db.Mongoose.model('projetos', db.projetoSchema);
  let auxi = await  projs.find({name:id}).lean().exec();
  projs.findByIdAndRemove(auxi[0]._id).exec();
  res.redirect('/projeto2')
 })




// rota para retornar as sugestões com base nos dados do usuário
//router.post('/suggestions', (req, res) => {
  
  
    // renderizar a página form.ejs com os dados do usuário e as sugestões geradas pelo algoritmo
    

//});
router.get('/form', async function(req, res) {
  const db = require("../db");
  const projs = db.Mongoose.model('projetos', db.projetoSchema);
  const action = req.query.action; // Captura o parâmetro 'action'
  const project_id_up = req.query.id_up;
console.log('action')
console.log(action)

  try {
      if (action === 'create') {
          // Lógica para a criação de um novo projeto
          res.render('form', { projeto: {} }); // Renderiza com um projeto vazio para criação
      } else  {
          // Lógica para atualização de um projeto existente
          if (!project_id_up) {
              return res.status(400).send('ID do Projeto não fornecido');
          }
          const project = await projs.findOne({name: project_id_up}).lean();
          if (!project) {
              return res.status(404).send('Projeto não encontrado');
          }
          project.project_id_up = project_id_up;
          fs.writeFileSync('out_file.json', JSON.stringify(project));
          
          res.render('form', { projeto: project });
      }
  } catch (error) {
      console.error('Erro:', error);
      res.status(500).send('Erro interno do servidor');
  }
});



//CREATE / UPDATE
router.post('/form', async function (req, res, next) {

  const action = req.body.action; 
  console.log('action new')
console.log(action)
console.log(JSON.stringify(action))


  

  const vazi = []
  
  const dados = JSON.parse(fs.readFileSync('out_file.json'));


  const db = require("../db");
  
  const { projetoSchema } = require('../db');

  const { arquivosSchema } = require('../db');

   
  const projs =  db.Mongoose.model('projetos', db.projetoSchema);

  const salvos =  db.Mongoose.model('arquivos', db.arquivosSchema);
  



  
  //if (dados_out_file_update.length != vazi.length){
  if (action === 'create') {
      // Lógica para criar um novo projeto
    console.log('Criando novo projeto');
    console.log('criando novo')
        let datee = new Date();
        let date = datee
        console.log('method_proj 2')
        console.log(req.body.method_proj)


        let nature = ''
      if (req.body.natureza==0) {
        nature = "Similar technology"
      }
      if (req.body.natureza==1) {
        nature = "Project already done"
      }
      if (req.body.natureza==2) {
        nature = "New technology"
      }

      var newprojs = new projs(
        { 
          name: req.body.nome,
          nature:nature,
          begin:req.body.inicio,
          end:req.body.fim,
          team:  req.body.equipeselecionada,
          percentual: req.body.percentual_da_equipe,
          technologies:req.body.tags,
          softskills:req.body.tagsSoft,
          method_proj:req.body.method_proj,
          data_proj:date 
        }
      )
      console.log('req.body.percentual_da_equipe')
      console.log(req.body.percentual_da_equipe)

      console.log(date.toString())
      newprojs.save()
      res.redirect('/projeto2')






  }else if (action === 'update') {
      // Lógica para atualizar um projeto existente
      console.log('Atualizando projeto existente');
          
      try {
        let auxi = await projs.find({name:dados.project_id_up}).lean().exec();

        if (auxi.length > 0) {
          let id_saved = auxi[0]._id.toString();
          console.log('documento encontrado com o nome ',auxi[0].name, ' e id_saved:', id_saved);
          
          console.log('auxi[0]')
          console.log(auxi[0])

          console.log('req.body')
          console.log(req.body)

        var salvarProj =  new salvos(
                
                { 
                  
                  name: auxi[0].name,
                  nature:auxi[0].nature,
                  begin:auxi[0].begin,
                  end: auxi[0].end,
                  team:  auxi[0].team,
                  percentual: auxi[0].percentual,
                  technologies:auxi[0].technologies,
                  softskills:auxi[0].softskills,
                  method_proj:auxi[0].method_proj,
                  projectId: id_saved
                }
                )
                
                // arquiva o proj q sera atualizado
              salvarProj.save()
              //ver qtd de vezes q foi atualizado
              let auxi2 = await  salvos.find({})
              let cont = 0
              for(let i=0; i<auxi2.length;i++){
                if(auxi2[i].projectId == id_saved){
                  cont = cont+1
                }
              }
              console.log('cont qt de vezes que foi atualizado')
              console.log(cont)
      
              
            
      
                
      
                let nature = ''
                if (req.body.natureza==0) {
                  nature = "Similar technology"
                }
                if (req.body.natureza==1) {
                  nature = "Project already done"
                }
                if (req.body.natureza==2) {
                  nature = "New technology"
                }
                
                
                console.log('req.body.nome')
                console.log(req.body.nome)

                console.log('nature')
                console.log(nature)

                console.log('req.body.equipeselecionada')
                console.log(req.body.equipeselecionada)

                console.log('req.body.tags')
                console.log(req.body.tags)

                console.log('req.body.method_proj')
                console.log(req.body.method_proj)

                console.log('req.body.data_do_projeto')
                console.log(req.body.data_do_projeto)


              
                await  projs.findByIdAndUpdate(id_saved, 
                  {
                    name:req.body.nome,
                    nature:nature,
                    begin:req.body.inicio,
                    end:req.body.fim,
                    team:  req.body.equipeselecionada,
                    percentual: req.body.percentual_da_equipe,
                    technologies:req.body.tags,
                    softskills:req.body.tagsSoft,
                    method_proj:req.body.method_proj,
                    data_proj:req.body.data_do_projeto  
                  })
      
                salvos.findOneAndUpdate({ name:req.body.nome , projectId: id_saved })//)
              
              
                res.redirect('/projeto2')
      } else {
          console.log('Nenhum documento encontrado com o nome:', auxi[0].name);
      }

      
    } catch (error) {
      console.error("Erro detalhado:", error);
      return res.status(500).send('Erro ao realizar a operação: ' + error.message);
  }
  }
  else {
    // Tratar caso em que a ação não é nem 'create' nem 'update'
    console.log('Ação ação não é nem  create  nem   update ');
    return res.status(400).send('Ação não especificada');
  }


  


});




/* GET New User page.*/
/*
router.get('/user', async(req, res) => {
  res.render('users', { title: 'Cadastro de Usuário' });
});
 */

/* POST new user */
/*
router.post('/user', async (req, res) => {
  const id = req.body.id;
  const sigId = req.body.sigId;
  const contractId = req.body.contractId;
  const user = req.body.user;
  const contractRole  = req.body.contractRole;
  const phone =  req.body.user.phone;
  const name = req.body.user.name;
 


  const db = require("../db");
  const Users = db.Mongoose.model('users2', db.PlaceSchema, 'users2');
  const usuario = new Users({ id , sigId, contractId, phone, contractRole });

  try {
    await usuario.save();
    res.redirect("/");
  } catch (err) {
    next(err);
  }
});
*/


//CONSULTANDO NO BANCO Turmalina os users e projetos id
//conexão com o banco
const Sequelize = require('sequelize');
const sequelize = new Sequelize('turmalinadb', 'root', '[pass]', {
  host: 'localhost',
  dialect: 'mysql',
  "dialectOptions": {
    "connectTimeout": 120000
  }
});

//pega so os id de projetos e user (quem trabalhou em cada projeto)
sequelize.query('select project_id,user_id from project_user').then(([results, metadata]) => {
  let jsonArray = JSON.parse(JSON.stringify(results));
  const jsonArray_update = JSON.stringify(jsonArray, null, 2);
  //mudei jsonArray.json para project_id_user_id.json
  let vaz = []
  fs.writeFileSync('project_id_user_id.json', JSON.stringify(vaz)); 
  fs.writeFileSync('project_id_user_id.json', jsonArray_update); 

}).catch((error) => {
  console.error(error);
});

//pega os nomes completos dos users e salva no perfil de cada um
sequelize.query('select title,user_id from day_off').then(([results, metadata]) => {
  let jsonArray = JSON.parse(JSON.stringify(results));
  let jsonArray_nomeCompleto = []
  //removendo 'apenas os nomes' 
  for (let i = 0; i < jsonArray.length; i++) {
    let titulo = jsonArray[i].title;
    if (titulo) {
      let nomeCompleto = titulo.replace('Day off [', '').replace(']', '');
      jsonArray_nomeCompleto.push({id: jsonArray[i].user_id, nomeCompleto: nomeCompleto});
    }
  }
  const nomesData = JSON.stringify(jsonArray_nomeCompleto, null, 2);
  let vaz = []
  fs.writeFileSync('nomes_id.json', JSON.stringify(vaz)); 
  fs.writeFileSync('nomes_id.json', nomesData); 
  //console.log(jsonArray);
}).catch((error) => {
  console.error(error);
});


//reorganizando o banco de usuarios
const data = fs.readFileSync('user2.json');
const users = JSON.parse(data);
let users_aux = []

for (let i = 0; i<users.length; i++){
  for (let j = 0; j<users[i].length; j++){
  // pega um novo objeto JSON de user2
    const newUser = {
      user_id: users[i][j].user.id,
      username: users[i][j].user.username,
      bio: users[i][j].user.bio,
      systemRole: users[i][j].user.systemRole,
      contractId: users[i][j].contractId,
      contractRoleID: users[i][j].contractRole.id,
      contractRoleName: users[i][j].contractRole.name,
      projects_id:[],
      softskills:[],
      hardskill:[]
    }
    if(users[i][j].contractRole.id !== "") {
        // Adiciona o novo objeto ao array de objetos
        users_aux.push(newUser)
    }
}
}
// Filtra os usuários que não possuem user_id igual a 454 felipe.cunha
const filteredUser3 = users_aux.filter(user => user.user_id !== 454 && user.contractRoleID !== "" && user.contractRoleID !== undefined);
const updatedData = JSON.stringify(filteredUser3, null, 2);


// Escreve a nova string JSON no arquivo
fs.writeFileSync('user4.json', updatedData);


//pega nomes completos e add no perfil dos user4
const data1 = fs.readFileSync('nomes_id.json');
const data2 = fs.readFileSync('user4.json');

const nomes_data1 = JSON.parse(data1);
const perfil_data1 = JSON.parse(data2);

for (let i = 0; i < perfil_data1.length; i++) {
  for (let j = 0; j < nomes_data1.length; j++) {
    if (perfil_data1[i].user_id === nomes_data1[j].id) {
      perfil_data1[i].nomeCompleto = nomes_data1[j].nomeCompleto;
      
    }
  }
}

fs.writeFileSync('user4.json', JSON.stringify(perfil_data1));


//pega os nomes completos dos users em day_off que não temno user4 salva no perfil de cada um

// Ler o conteúdo do arquivo "nomes_id.json" e armazenar os objetos em uma lista
const nomesId = JSON.parse(fs.readFileSync('nomes_id.json'));

// Ler o conteúdo do arquivo "user4.json" e armazenar os objetos em outra lista
const user4 = JSON.parse(fs.readFileSync('user4.json'));

// Criar uma lista com os IDs dos objetos em "user4.json"
const user4Ids = user4.map(obj => obj.user_id);

// Adicionar na lista de objetos do "user4.json" apenas os objetos que ainda não existem
nomesId.forEach(obj => {
  if (!user4Ids.includes(obj.id)) {

    const newUser = {
      user_id: obj.id,
      username: '',
      bio: '',
      systemRole: '',
      contractId: '',
      contractRoleID: '',
      contractRoleName: '',
      projects_id:[],
      softskills:[],
      hardskill:[],
      nomeCompleto: obj.nomeCompleto,
      methodology: []
    }

    // Adiciona o novo objeto ao array de objetos
    
    user4.push(newUser);
  }
});

// Escreve a nova string JSON no arquivo
// Salvar a lista atualizada de objetos em "user4.json"
fs.writeFileSync('user4.json', JSON.stringify(user4));


//adicionando o username pelo nome completo primeiro.ultimo dos novos users


// Ler o conteúdo do arquivo "user4.json" e armazenar os objetos em uma lista
const user4_data = JSON.parse(fs.readFileSync('user4.json'));

// Percorrer a lista de objetos e formatar o "username" para aqueles que não possuem
user4_data.forEach(obj => {
  //se nao tiver username e tiver o nome completo
  if (!obj.username && obj.nomeCompleto) {
    const nomeCompleto = obj.nomeCompleto.trim();
    const nomeParts = nomeCompleto.split(' ');
    const primeiroNome = nomeParts[0];
    const ultimoNome = nomeParts[nomeParts.length - 1];
    const username = `${primeiroNome}.${ultimoNome}`;
    obj.username = username;
  }
});

// Escreve a nova string JSON no arquivo
// Salvar a lista atualizada de objetos em "user4.json"
fs.writeFileSync('user4.json', JSON.stringify(user4_data));


//removendo objetos de user4 com user_id repetidos



// Ler o conteúdo do arquivo "user4.json" e armazenar os objetos em uma lista
const user4_data1 = JSON.parse(fs.readFileSync('user4.json'));

// Criar um objeto vazio que será usado para verificar se um "user_id" já apareceu na lista
const userIDs = {};

// Percorrer a lista de objetos e remover os objetos com "user_id" repetidos
const user4Atualizado = [];
user4_data1.forEach(obj => {
  if (!userIDs[obj.user_id]) {
    userIDs[obj.user_id] = true;
    user4Atualizado.push(obj);
  }
});

// Salvar a lista atualizada de objetos em "user4.json"
fs.writeFileSync('user4.json', JSON.stringify(user4Atualizado));




//criando um json para projetos pegando id e methodology
//pegando dados da tabela project

let data_project = [];
sequelize.query('select id,settings_id from project').then(([results, metadata]) => {
    data_project = JSON.parse(JSON.stringify(results));
   
   
    // Salvar a lista atualizada de objetos em "user4.json"
    fs.writeFileSync('projetos.json', JSON.stringify(data_project));
 

//pegando os projetos que cada user_id trabalhou
const user_aux = JSON.parse(fs.readFileSync('user4.json'));
const project_id_user_id = JSON.parse(fs.readFileSync('project_id_user_id.json'));

for (let i = 0; i<user_aux.length; i++){
  for (let j = 0; j<project_id_user_id.length; j++){ 
    if (user_aux[i].user_id === project_id_user_id[j].user_id) {
      user_aux[i].projects_id.push(project_id_user_id[j].project_id); 
    } 
  }
}


    // Salvar a lista atualizada de objetos em "user4.json"
 fs.writeFileSync('user4.json', JSON.stringify(user_aux));



const projetos_data = JSON.parse(fs.readFileSync('projetos.json'));
let user4_data_aux0 = JSON.parse(fs.readFileSync('user4.json'));
let data_project_methodology = [];
let printedIds1= []
sequelize.query('select id,agile_methodology from project_settings').then(([results, metadata]) => {
    data_project_methodology = JSON.parse(JSON.stringify(results));
    for(let g = 0; g<user4_data_aux0.length; g++){      
      if (!user4_data_aux0[g].methodology)  user4_data_aux0[g].methodology = []; // inicializa a propriedade 'methodology' como um array vazio
    }
   
    for (let i = 0; i<projetos_data.length; i++){
      
      for (let j = 0; j<data_project_methodology.length; j++){ 
        if(projetos_data[i].id === data_project_methodology[j].id){
          projetos_data[i].methodology = data_project_methodology[j].agile_methodology;
        }
        if (!printedIds1.includes(data_project_methodology[j].id)) { // verificar se o id já foi verifiedd
          printedIds1.push(data_project_methodology[j].id); 
          for(let k = 0; k<user4_data_aux0.length; k++){
              if(user4_data_aux0[k].projects_id.includes(data_project_methodology[j].id)){
                user4_data_aux0[k].methodology.push(data_project_methodology[j].agile_methodology)
            }
          }
        }     
        
      }
    }
   
    // Salvar a lista atualizada de objetos em "user4.json"
    fs.writeFileSync('projetos.json', JSON.stringify(projetos_data));

    
    // 
    fs.writeFileSync('user4.json', JSON.stringify(user4_data_aux0));
 

    //pegar datas doprojet
    let projetos_data_dates = JSON.parse(fs.readFileSync('projetos.json'));
  let printedIds_aux = []
    sequelize.query('select id,begin_date,finish_date from project').then(([results, metadata]) => {
        projects_ids_dates = JSON.parse(JSON.stringify(results));
        for (let i = 0; i<projetos_data_dates.length; i++){
          for(let g = 0; g<projects_ids_dates.length; g++){      
            if(projetos_data_dates[i].id === projects_ids_dates[g].id){
              if (!printedIds_aux.includes(projetos_data_dates[i].id)) { // verificar se o id já foi impresso            
                  projetos_data_dates[i].begin_date = projects_ids_dates[g].begin_date
                  projetos_data_dates[i].finish_date = projects_ids_dates[g].finish_date
                  printedIds_aux.push(projetos_data_dates[i].id); // adicionar o id ao array de ids impressos
              }
          }
        }
      }
       
        // Salvar a lista atualizada de objetos em "projetos.json"
        fs.writeFileSync('projetos.json', JSON.stringify(projetos_data_dates));
    
        
   
     


//pegando as plataformas de cada projeto
 const projetos_data1 = JSON.parse(fs.readFileSync('projetos.json'));

 let data_project_platforms = [];
 sequelize.query('select name,project_id from test_platform').then(([results, metadata]) => {
    data_project_platforms = JSON.parse(JSON.stringify(results));
     
 
     for (let i = 0; i<projetos_data1.length; i++){
      projetos_data1[i].platforms = []; // inicializar a propriedade platforms com um array vazio
       for (let j = 0; j<data_project_platforms.length; j++){ 
       if(projetos_data1[i].id === data_project_platforms[j].project_id){
        
        projetos_data1[i].platforms.push(data_project_platforms[j].name);
       }    
     }
     }
    
     // Salvar a lista atualizada de objetos em "user4.json"
     fs.writeFileSync('projetos.json', JSON.stringify(projetos_data1));

    //pegando id e nome da equipe de cada projeto
    const projetos_aux = JSON.parse(fs.readFileSync('projetos.json'));
    const user4_data_aux = JSON.parse(fs.readFileSync('user4.json'))
    const project_id_user_id_aux = JSON.parse(fs.readFileSync('project_id_user_id.json'));

    for (let i = 0; i<projetos_aux.length; i++){
      projetos_aux[i].team_id = []; // inicializar a propriedade team com um array vazio
      for (let j = 0; j<project_id_user_id_aux.length; j++){ 
        if (projetos_aux[i].id === project_id_user_id_aux[j].project_id) {
          projetos_aux[i].team_id.push(project_id_user_id_aux[j].user_id); 
        } 
      }
    }
    
    // Salvar a lista atualizada de objetos em "user4.json"
    fs.writeFileSync('projetos.json', JSON.stringify(projetos_aux));
  //pegando os nomes da equipe
    for (let i = 0; i<projetos_aux.length; i++){
      projetos_aux[i].team_names = []; // inicializar a propriedade team com um array vazio
      for (let j = 0; j<user4_data_aux.length; j++){ 
        if (user4_data_aux[j].projects_id.includes(projetos_aux[i].id)) {
          projetos_aux[i].team_names.push(user4_data_aux[j].username); 
        } 
      }
    }
    for (let i = 0; i < projetos_aux.length; i++) {
      delete projetos_aux[i].settings_id;
    }

   
    // Salvar a lista atualizada de objetos em "user4.json"
    fs.writeFileSync('projetos.json', JSON.stringify(projetos_aux));

 
   

//pegando skills da tabela daily_data_task da coluna description
// definir as palavras-chave que deseja procurar
const keyword_softskill_Learning = {
  'study': 'Initiative to learning',
  'studying': 'Initiative to learning',
  'aprender': 'Initiative to learning',
  'aprendendo': 'Initiative to learning',
  'estudar': 'Initiative to learning',
  'estudando': 'Initiative to learning',
}

const keywords = {
  'Java': 'Java',
  'IOS': 'iOS',
  'Android': 'Android',
  'WEB': 'Web',
  'IOT': 'IOT',
  'MOBILE': 'Mobile',
  'Wordpress': 'WordPress',
  'Chromebook': 'Chrome OS',
  'Desktop': 'Desktop',
  'raspberry': 'Raspberry Pi',
  'angular 2': 'Angular 2',
  'Javascript': 'JavaScript',
  'Maven': 'Maven Java',
  'MVC': 'MVC',
  'Mongo': 'MongoDB',
  'Node': 'Node.js',
  'REST': 'RESTful APIs',
  'Spring': 'Spring Java',
  'SQLite': 'SQL',
  'Lua': 'Lua',
  'Swift': 'Swift',
  'Objective-C':'Objective-C',
  'Kotlin':'Kotlin',
  'MATLAB':'MATLAB', 
'Hibernate': 'Java',
'Struts': 'Java',
'JSF': 'Java',
'Wicket': 'Java',
'Vaadin': 'Java',
'RCP ': 'Java',
'Play Framework': 'Java',
'Angular': 'JavaScript',
'React': 'JavaScript',
'Vue.js': 'JavaScript',
'Ember.js': 'JavaScript',
'Backbone.js': 'JavaScript',
'Express.js': 'JavaScript',
'Meteor': 'JavaScript',
'Django': 'Python',
'Flask': 'Python',
'Pyramid': 'Python',
'Bottle': 'Python',
'Tornado': 'Python',
'CherryPy': 'Python',
'web2py': 'Python',
  'typescript': 'TypeScript',
  'couchdb': 'CouchDB',
  'e-commerce': 'E-commerce',
  'Postgres': 'PostgreSQL',
  '.net': '.NET',
  'tomcat': 'Java',
  'photon': 'IoT',
  'html': 'HTML',
  'ruby': 'Ruby',
  'linux': 'Linux',
  'rfid': 'RFID',
  'protractor': 'JavaScript',
  '.js': 'JavaScript',
  '.mdb': 'Microsoft Access',
  '.sql': 'SQL',
  '.json': 'JSON',
  '.py': 'Python',
  '.cpp': 'C++',
  '.rb': 'Ruby',
  '.java': 'Java',
  'css': 'CSS'
};
// carregar dados do usuário auxiliar
let user4_aux_data2 = JSON.parse(fs.readFileSync('user4.json'));

// percorrer as tarefas
sequelize.query('SELECT description, assigned_to FROM daily_data_task').then(([results, metadata]) => {
  let jsonArray = JSON.parse(JSON.stringify(results));
  
  let keywordsList = Object.keys(keywords); //obter as chaves do objeto keywords

  for (let i = 0; i < jsonArray.length; i++) {

      if (jsonArray[i].description) {
        for (let k = 0; k < keywordsList.length;k++) {
          let keyword = keywordsList[k];
            // verificar se a descrição contém alguma palavra-chave
           
            if (jsonArray[i].description.toLowerCase().includes(keyword.toLowerCase())) {// if (jsonArray[i].description.toLowerCase().includes(keywordsList[keyword.toLowerCase()])) {
            
            for(let j in user4_aux_data2){
              //verifica o username 
              if(jsonArray[i].assigned_to.toLowerCase() === user4_aux_data2[j].username.toLowerCase()){
                user4_aux_data2[j].hardskill.push(keywords[keyword])
              }
            }
          }
        }
      }
    
  }

  // salvar dados atualizados do usuário auxiliar

  fs.writeFileSync('user4.json', JSON.stringify(user4_aux_data2));
  console.log('Tags adicionadas com sucesso!');

  


//pegando skills da tabela daily_data_task da coluna story_name
let user4_aux_data = JSON.parse(fs.readFileSync('user4.json'));
// percorrer as tarefas
sequelize.query('SELECT story_name, assigned_to FROM daily_data_task').then(([results, metadata]) => {
  let jsonArray = JSON.parse(JSON.stringify(results));
  
  let keywordsList = Object.keys(keywords); //obter as chaves do objeto keywords

  for (let i = 0; i < jsonArray.length; i++) {

      if (jsonArray[i].story_name) {
        for (let k = 0; k < keywordsList.length;k++) {
          let keyword = keywordsList[k];
            // verificar se a descrição contém alguma palavra-chave
           
            if (jsonArray[i].story_name.toLowerCase().includes(keyword.toLowerCase())) {// if (jsonArray[i].story_name.toLowerCase().includes(keywordsList[keyword.toLowerCase()])) {
            
            for(let j in user4_aux_data){
              //verifica o username 
              if(jsonArray[i].assigned_to.toLowerCase() === user4_aux_data[j].username.toLowerCase()){
                user4_aux_data[j].hardskill.push(keywords[keyword])
              }
            }
          }
        }
      }
    
  }



let cont=0
for (let i in user4_aux_data2) {
if(user4_aux_data2[i].hardskill.length > 0){
  cont++
  console.log('user',user4_aux_data2[i].username,'hardskills: ',user4_aux_data2[i].hardskill.length)
}
}
console.log(cont)
  // salvar dados atualizados do usuário auxiliar
 
  fs.writeFileSync('user4.json', JSON.stringify(user4_aux_data2));
  console.log('Tags adicionadas com sucesso!');


/*
//pegando softskill Learning Initiative da tabela daily_data_task da coluna description
let user4_aux_data3 = JSON.parse(fs.readFileSync('user4.json'));
// percorrer as tarefas
sequelize.query('SELECT description, assigned_to FROM daily_data_task').then(([results, metadata]) => {
  let jsonArray = JSON.parse(JSON.stringify(results));
  
  let keywordsPartList = Object.keys(keyword_softskill_Learning); //obter as chaves do objeto keywords
  let contt=0
  for (let i = 0; i < jsonArray.length; i++) {

      if (jsonArray[i].description) {
        for (let k = 0; k < keywordsPartList.length;k++) {
          let keyword = keywordsPartList[k];
            // verificar se a descrição contém alguma palavra-chave
           
            if (jsonArray[i].description.toLowerCase().includes(keyword.toLowerCase())) {// if (jsonArray[i].story_name.toLowerCase().includes(keywordsList[keyword.toLowerCase()])) {
            
              console.log('A pessoa '+jsonArray[i].assigned_to+'  fez menção a keyword '+keyword)
              console.log('Descrição: '+jsonArray[i].description)

            for(let j in user4_aux_data3){
              //verifica o username 
              if(jsonArray[i].assigned_to.toLowerCase() === user4_aux_data3[j].username.toLowerCase()){
                contt++
                user4_aux_data3[j].softskills.push(keyword_softskill_Learning[keyword])
                
                
              }
            }
          }
        }
      }
    
  }
  console.log('study in daily_data ',contt)
  fs.writeFileSync('user4.json', JSON.stringify(user4_aux_data3));
  console.log('Tags adicionadas com sucesso!');
*/



/*
//verificando se alguem menciona um colega 
let user4_aux_data4 = JSON.parse(fs.readFileSync('user4.json'));
let printedIds = []; // array para armazenar os ids que já foram impressos
// percorrer as tarefas



sequelize.query('SELECT id,description, assigned_to FROM daily_data_task').then(([results, metadata]) => {
  let jsonArray = JSON.parse(JSON.stringify(results));
  
  for (let i = 0; i < jsonArray.length; i++) {
    if (jsonArray[i].description) {
      
          for (let j = 0; j < user4_aux_data4.length; j++) {
             // verificar se a descrição contém menção a outro username do array user4_aux_data4
             let usernameParts = user4_aux_data4[j].username.split('.');
            
             let firstName = usernameParts[0];
             let regex = new RegExp('\\b(' + firstName + ')\\b', 'gi');
             if ((regex.test(jsonArray[i].description)) && (firstName !== "Turmalina")&& (firstName !== "Asus") && !jsonArray[i].assigned_to.includes(firstName)) {
             if (!printedIds.includes(jsonArray[i].id)) { // verificar se o id já foi impresso
              console.log('A descrição da tarefa ' + jsonArray[i].id + ' contém menção de ' + jsonArray[i].assigned_to + ' a ' + firstName);
              console.log('Descrição: '+jsonArray[i].description)

              for(let h in user4_aux_data4){
                //verifica o username 
                if(jsonArray[i].assigned_to.toLowerCase() === user4_aux_data4[h].username.toLowerCase()){
                  user4_aux_data4[h].softskills.push('Collaboration')

                }
              }
              printedIds.push(jsonArray[i].id); // adicionar o id ao array de ids impressos
            }
          }
            }
          }
  }
// salvar dados atualizados do usuário auxiliar

fs.writeFileSync('user4.json', JSON.stringify(user4_aux_data4));

//verificando se alguem menciona um colega 
user4_aux_data4 = JSON.parse(fs.readFileSync('user4.json'));
//pesquisando na tabela task se ha collaboration

sequelize.query('SELECT id,description, assigned_to FROM changed_task').then(([results, metadata]) => {
   jsonArray = JSON.parse(JSON.stringify(results));
  
  for (let i = 0; i < jsonArray.length; i++) {
    if (jsonArray[i].description && jsonArray[i].assigned_to !== null) {
      
          for (let j = 0; j < user4_aux_data4.length; j++) {
             // verificar se a descrição contém menção a outro username do array user4_aux_data4
             let usernameParts = user4_aux_data4[j].username.split('.');
            
             let firstName = usernameParts[0];
             let regex = new RegExp('\\b(' + firstName + ')\\b', 'gi');
             if ((regex.test(jsonArray[i].description)) && (firstName !== "Turmalina")&& (firstName !== "Asus") && !jsonArray[i].assigned_to.includes(firstName)) {
             if (!printedIds.includes(jsonArray[i].id)) { // verificar se o id já foi impresso
              console.log('A descrição da tarefa na tabela changed_task ' + jsonArray[i].id + ' contém menção de ' + jsonArray[i].assigned_to + ' a ' + firstName);
              console.log('Descrição: '+jsonArray[i].description)

              for(let h in user4_aux_data4){
                //verifica o username 
                if(jsonArray[i].assigned_to.toLowerCase() === user4_aux_data4[h].username.toLowerCase()){
                  user4_aux_data4[h].softskills.push('Collaboration')

                }
              }
              printedIds.push(jsonArray[i].id); // adicionar o id ao array de ids impressos
            }
          }
            }
          }
  }

// salvar dados atualizados do usuário auxiliar

fs.writeFileSync('user4.json', JSON.stringify(user4_aux_data4));



//verificando se alguem menciona um colega 
user4_aux_data4 = JSON.parse(fs.readFileSync('user4.json'));
//pesquisando na tabela task se ha collaboration
let nome = ''
sequelize.query('SELECT id, title, user_id FROM new_table_changed_issue_users').then(([results, metadata]) => {
   jsonArray = JSON.parse(JSON.stringify(results));
   console.log('aqui '+jsonArray[3].title)
  for (let i = 0; i < jsonArray.length; i++) {
    if (jsonArray[i].title && jsonArray[i].user_id !== null) {
      
          for (let j = 0; j < user4_aux_data4.length; j++) {
             // verificar se a descrição contém menção a outro username do array user4_aux_data4
             let usernameParts = user4_aux_data4[j].username.split('.');
            
             let firstName = usernameParts[0];
            
             
             let regex = new RegExp('\\b(' + firstName + ')\\b', 'gi');
             if ((regex.test(jsonArray[i].title)) && (firstName !== "Turmalina")&& (firstName !== "Asus") ) {
              //aqui ja encontrou
              
             if (!printedIds.includes(jsonArray[i].id)) { // verificar se o id já foi impresso
             
              for(let h in user4_aux_data4){
                //verifica o user_id
                if(jsonArray[i].user_id === user4_aux_data4[h].user_id){
                  nome = user4_aux_data4[h].username

                }
              }

              console.log('A Title da tarefa na tabela new_table_changed_issue_users ' + jsonArray[i].id + ' contém menção de ' +nome+ ' id:'+ jsonArray[i].user_id + ' a ' + user4_aux_data4[j].username);
              console.log('Descrição: '+jsonArray[i].title)

              for(let h in user4_aux_data4){
                //verifica o user_id
                if(jsonArray[i].user_id === user4_aux_data4[h].user_id){
                  user4_aux_data4[h].softskills.push('Collaboration')

                }
              }
              printedIds.push(jsonArray[i].id); // adicionar o id ao array de ids impressos
            }
          }
            }
          }
  }

// salvar dados atualizados do usuário auxiliar

fs.writeFileSync('user4.json', JSON.stringify(user4_aux_data4));

*/

/*
let user4_aux_data5 = JSON.parse(fs.readFileSync('user4.json'));
let printedIds_aux2 = [];
//pesquisando por softskill disposição pra melhorar as coisas
sequelize.query('SELECT id,description, assigned_to FROM daily_data_task').then(([results, metadata]) => {
  let jsonArray = JSON.parse(JSON.stringify(results));

  for (let i = 0; i < jsonArray.length; i++) {
    if (jsonArray[i].description) {
      let texto = jsonArray[i].description.toLowerCase();
      if (texto.includes('improve' || 'melhorar')) {
        if (!printedIds_aux2.includes(jsonArray[i].id)) { // verificar se o id já foi impresso
          
          printedIds_aux2.push(jsonArray[i].id); // adicionar o id ao array de ids impressos
          for(let j in user4_aux_data5){
            //verifica o username 
            if(jsonArray[i].assigned_to == user4_aux_data5[j].username){
            user4_aux_data5[j].softskills.push('Desire to improve things')

            console.log(jsonArray[i].id)
            console.log('A capability "Desire to improve things" foi encontrada no texto. atribuido a '+jsonArray[i].assigned_to);

            }
          }


        }
        
      }
      }
    }
    console.log('end.')
    fs.writeFileSync('user4.json', JSON.stringify(user4_aux_data5));
*/
//add in projetos.json tecnologies e softskills por user
const user4data = JSON.parse(fs.readFileSync('user4.json'));
const projetosdata = JSON.parse(fs.readFileSync('projetos.json'));
for(let i=0; i<projetosdata.length; i++){
  projetosdata[i].technologies = []
  for(let j=0; j<user4data.length; j++){
    if(projetosdata[i].team_id.includes(user4data[j].user_id)){
      for(let k=0; k< user4data[j].hardskill.length;k++){
        if ((!projetosdata[i].technologies.includes(user4data[j].hardskill[k])) && (user4data[j].hardskill[k] !== undefined) && (user4data[j].hardskill.length>0)){
          projetosdata[i].technologies.push(user4data[j].hardskill[k])
        }
      }
      
    }
  }
}
/*
for(let i=0; i<projetosdata.length; i++){
  projetosdata[i].softskills = []
  for(let j=0; j<user4data.length; j++){
    if(projetosdata[i].team_id.includes(user4data[j].user_id)){
      for(let k=0; k< user4data[j].softskills.length;k++){
        if ((!projetosdata[i].softskills.includes(user4data[j].softskills[k])) && (user4data[j].softskills[k] !== undefined) && (user4data[j].softskills.length>0)){
          projetosdata[i].softskills.push(user4data[j].softskills[k])
          
        }
      }
      
    }
  }
}
*/
fs.writeFileSync('projetos.json', JSON.stringify(projetosdata));

let projects_to_csv = JSON.parse(fs.readFileSync('projetos.json'));
//removendo o role director
projects_to_csv = projects_to_csv.filter(projeto => !(projeto.team_id.includes(14) && projeto.team_names.includes("sergio.pinto")));

//removendo os objetos cujo tamanho da equipe seja 100, 77, 0 ou 1
const teamIdRemover = [100, 77, 0, 1];

projects_to_csv = projects_to_csv.filter(projeto => {
  const quantidadeTeamId = projeto.team_id.length;
  return !teamIdRemover.includes(quantidadeTeamId);
});

let qtd_proj_scrum = 0
let qtd_proj_kamban = 0
for(let i=0;i< projects_to_csv.length; i++){
  if(projects_to_csv[i].methodology == 'SCRUM'){
    qtd_proj_scrum++
  }
  if(projects_to_csv[i].methodology == 'KANBAN'){
    qtd_proj_kamban++
  }
}
console.log('de um total de '+projects_to_csv.length+' Há '+qtd_proj_scrum+' projetos com metodologia Scrum e '+qtd_proj_kamban +' projetos com Kanban')

//calcular tamanho das equipes, média de membros em cada e o tamaho de equipe mais usado (moda)
const contagemIds = {};
let somaTamanhos = 0;
let quantidadeProjetos = 0;
const tamanhoEquipes = [];

projects_to_csv.forEach(projeto => {
  
  const quantidadeIds = projeto.team_id.length;
  contagemIds[projeto.id] = quantidadeIds;
  somaTamanhos += quantidadeIds;
  if(somaTamanhos != 100 && somaTamanhos != 77 && somaTamanhos != 0 && somaTamanhos != 1){
    quantidadeProjetos++;
    tamanhoEquipes.push(quantidadeIds);
  }
  
});

let maiorTamanho = tamanhoEquipes[0];
for (let i = 1; i < tamanhoEquipes.length; i++) {
  if (tamanhoEquipes[i] > maiorTamanho && tamanhoEquipes[i] != 100  && tamanhoEquipes[i] != 77) {
    maiorTamanho = tamanhoEquipes[i];
  }
}

let menorTamanho = tamanhoEquipes[0];
for (let i = 1; i < tamanhoEquipes.length; i++) {
  if (tamanhoEquipes[i] < menorTamanho && tamanhoEquipes[i] != 0 && tamanhoEquipes[i] != 1) {
    menorTamanho = tamanhoEquipes[i];
  }
}


const mediaTamanho = somaTamanhos / quantidadeProjetos;

// Função para calcular a moda de um array de números
function calcularModa(array) {
  const contador = {};
  let moda = [];
  let maxCount = 0;

  array.forEach(elemento => {
    contador[elemento] = (contador[elemento] || 0) + 1;

    if (contador[elemento] > maxCount) {
      moda = [elemento];
      maxCount = contador[elemento];
    } else if (contador[elemento] === maxCount) {
      moda.push(elemento);
    }
  });

  return moda;
}

const modaTamanho = calcularModa(tamanhoEquipes);


console.log('tamanhos das equipes'+tamanhoEquipes)
console.log(`Média de tamanho das equipes: ${mediaTamanho}`);
console.log(`Moda de tamanho das equipes: ${modaTamanho.join(', ')}`);
console.log(`Maior tamanho de equipe: ${maiorTamanho}`);
console.log(`Menor tamanho de equipe: ${menorTamanho}`);


//salvar projetos em csv
// Função para converter objeto em formato de linha CSV
function objectToCSVRow(object) {
  let csvRow = '';
  for (const key in object) {
    if (Array.isArray(object[key])) {
      csvRow += `"${object[key].join(', ')}",`;
    } else {
      csvRow += `"${object[key]}",`;
    }
  }
  return csvRow.slice(0, -1); // Remover a última vírgula
}

// Função para converter array em formato CSV
function arrayToCSV(array) {
  let csv = '';
  array.forEach(object => {
    csv += objectToCSVRow(object) + '\n';
  });
  return csv;
}

// Converter o array em CSV
const csvData_proj = arrayToCSV(projects_to_csv);

// Salvar o CSV em um arquivo
fs.writeFile('dados_projetos.csv', csvData_proj, 'utf8', err => {
  if (err) {
    console.error('Erro ao salvar o arquivo CSV:', err);
  } else {
    console.log('Arquivo dados_projetos.csv CSV salvo com sucesso.');
  }
});








}).catch(error => {
  console.error(error);
});



}).catch((error) => {
  console.error(error);
});

}).catch((error) => {
  console.error(error);
});


}).catch((error) => {
  console.error(error);
});
}).catch((error) => {
  console.error(error);
 });

  
})
.catch((error) => {
  console.error(error);
})

.catch((error) => {
console.error(error);
});















//lista de tabelas em turmalinadb
// ler o conteúdo do arquivo tables_turmalina.json
const tables = JSON.parse(fs.readFileSync('tables_turmalina.json'));

// inicializar o array para armazenar os nomes das tabelas
const table_names = [];

// percorrer cada objeto no array "tables" e adicionar o valor da propriedade "Tables_in_turmalinadb" no array "table_names"
tables.forEach(table => {
  table_names.push(table.Tables_in_turmalinadb);
});

// exibir o array "table_names"
//console.log(table_names);

// objeto para armazenar os dados de cada usuário
const users_search = {};

// objeto para armazenar os dados de cada projeto
const projects_search = {};



const user3 = fs.readFileSync('user3.json');
const user3_JSON = JSON.parse(user3);
const projectsInCommon = {};

// Encontrar pares de usuários com projetos em comum
for (let i = 0; i < user3_JSON.length; i++) {
  for (let j = i+1; j < user3_JSON.length; j++) {
    if (user3_JSON[i].user_id != user3_JSON[j].user_id && user3_JSON[i].systemRole !== "Director" && user3_JSON[j].systemRole !== "Director" && user3_JSON[i].contractRoleName !== "Project Manager" && user3_JSON[j].contractRoleName !== "Project Manager") {
      const projectIdsi = new Set(user3_JSON[i].projects_id);
      const projectIdsj = new Set(user3_JSON[j].projects_id);
      const intersection = new Set([...projectIdsi].filter(x => projectIdsj.has(x)));

      if (intersection.size > 0) {
        const userIdPair = `${user3_JSON[i].username}-${user3_JSON[j].username}`;
        if (userIdPair in projectsInCommon) {
          projectsInCommon[userIdPair] += intersection.size;
        } else {
          projectsInCommon[userIdPair] = intersection.size;
        }
      }
    }
  }
}

// Ordenar pares de usuários em ordem decrescente de quantidade de projetos em comum
const sortedPairs = Object.entries(projectsInCommon).sort(([,a], [,b]) => b - a);

// Encontrar equipe com as 4 pessoas que mais trabalharam juntas em projetos similares
const team = [];
for (const [userPair, numProjects] of sortedPairs) {
  const [user1, user2] = userPair.split('-');
  if (!team.includes(user1) && team.length < 4) {
    team.push(user1);
  }
  if (!team.includes(user2) && team.length < 4) {
    team.push(user2);
  }
  if (team.length === 4) {
    break;
  }
}

console.log(`Equipe: ${team.join(', ')}`);


//contando o tamanho das equipes
const user3_aux = fs.readFileSync('user3.json');
const user3_aux_JSON = JSON.parse(user3_aux);

const projects = {};
for (const user of user3_aux_JSON) {
  for (const projectId of user.projects_id) {
    if (projectId in projects) {
      projects[projectId].add(user.user_id);
    } else {
      projects[projectId] = new Set([user.user_id]);
    }
  }
}

for (const [projectId, team] of Object.entries(projects)) {
  let count = 0;
  for (const userId of team) {
    const user = user3_aux_JSON.find(u => u.user_id === userId);
    if (user.contractRoleName !== 'Project Manager' && user.systemRole !== 'Director') {
      count++;
    }
  }
  console.log(`Projeto ${projectId}: ${count} pessoas`);
}


//ler arquivo ppra ver quantos projetos tem, por id
// Caminho para o arquivo JSON
const filePath = 'projetos.json';

// Função para ler o arquivo e processar os dados
function processProjects(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Erro ao ler o arquivo:', err);
            return;
        }

        const projects = JSON.parse(data);
        const uniqueProjectIds = new Set(); // Usar um Set para armazenar IDs únicos
        const projectStartDates = new Map(); // Usar um Map para armazenar datas de início associadas aos IDs

        projects.forEach(project => {
            const projectId = project.id; // Ou project.projectId dependendo da estrutura do seu JSON
            const beginDate = project.begin_date;

            uniqueProjectIds.add(projectId);
            if (!projectStartDates.has(projectId)) {
                projectStartDates.set(projectId, beginDate);
            }
        });

        console.log(`Quantidade total de projetos únicos: ${uniqueProjectIds.size}`);
        console.log('Datas de início dos projetos:');
        projectStartDates.forEach((value, key) => {
            console.log(`ID do Projeto: ${key}, Data de Início: ${value}`);
        });
    });
}

// Chamar a função com o caminho do arquivo
processProjects(filePath);



//ver a quatidade de projetos e quando comecou 
// Ler o conteúdo do arquivo JSON
const projectsData = JSON.parse(fs.readFileSync('projetos.json', 'utf8'));

// Objeto para armazenar a contagem de projetos por ID e suas datas de início
let projectCountById = {};

projectsData.forEach(project => {
    const projectId = project.id;
    const beginDate = project.begin_date;

    // Verificar se o projeto já foi contabilizado
    if (projectCountById[projectId]) {
        projectCountById[projectId].count += 1;
        projectCountById[projectId].beginDates.push(beginDate);
    } else {
        projectCountById[projectId] = { count: 1, beginDates: [beginDate] };
    }
});

// Imprimir a quantidade de projetos por ID e as datas de início
for (const [id, details] of Object.entries(projectCountById)) {
    console.log(`ID do Projeto: ${id}, Quantidade: ${details.count}, Datas de Início: ${details.beginDates.join(', ')}`);
}







// Função para ler um arquivo JSON
function readJsonFile(filename) {
    let rawData = fs.readFileSync(filename);
    return JSON.parse(rawData);
}

// Carregar os dados dos arquivos JSON
const projects1 = readJsonFile('projetos.json');
const users1 = readJsonFile('user3.json');

// Função para verificar se o projeto foi finalizado em 2021 ou 2022
function isFinishedIn2021Or2022(project) {
    const finishYear = new Date(project.finish_date).getFullYear();
    return finishYear === 2021 || finishYear === 2022;
}

// Função para encontrar os Project Managers em um projeto
function findProjectManagers(project, users) {
    return project.team_id
        .map(id => users.find(user => user.user_id === id && user.contractRoleName === 'Project Manager'))
        .filter(user => user !== undefined)
        .map(manager => manager.username);
}

// Função para listar os membros da equipe de um projeto, destacando os Project Managers em caixa alta
function listTeamMembers(project, users, projectManagers) {
    return project.team_id
        .map(id => users.find(user => user.user_id === id))
        .filter(user => user !== undefined)
        .map(member => projectManagers.includes(member.username) ? member.username : member.username);
}

// Filtrar os projetos finalizados em 2021 e 2022 e mapear para seus Project Managers e Equipe
const projectDetails = projects1
    .filter(isFinishedIn2021Or2022)
    .map(project => {
        const managers = findProjectManagers(project, users1);
        return {
            projectId: project.id,
            beginDate:project.begin_date,
            finishDAte:project.finish_date,
            projectManagers: managers,
            teamMembers: listTeamMembers(project, users1, managers)
        };
    })
    .filter(project => project.projectManagers.length > 0 
      && project.teamMembers.filter(member => !project.projectManagers.includes(member.toLowerCase())).length >= 4);


// Imprimir os resultados
console.log();

const projectIds = projectDetails.map(project => project.projectId);

// Imprimir os projectIds
console.log(projectIds);

fs.writeFileSync('projectDetails.json', JSON.stringify(projectDetails));






// Ler o conteúdo do arquivo JSON
const data_projectDetails = JSON.parse(fs.readFileSync('projectDetails.json', 'utf8'));

// Inicializar variáveis para encontrar a menor e a maior data
let minDate = new Date("9999-12-31"); // Data muito no futuro
let maxDate = new Date("0000-01-01"); // Data muito no passado

data_projectDetails.forEach(project => {
    const beginDate = new Date(project.beginDate);
    const finishDate = new Date(project.finishDAte); // Observar a ortografia do atributo, conforme o arquivo JSON fornecido

    if (beginDate < minDate) {
        minDate = beginDate;
    }

    if (finishDate > maxDate) {
        maxDate = finishDate;
    }
});

console.log(`A menor data de início dos projetos é: ${minDate.toISOString().split('T')[0]}`);
console.log(`O último ano dos projetos é: ${maxDate.getFullYear()}`);







// Função para gerar dados fictícios de NPS na escala de 5 a 10
function generateNPSData(projectIds) {
  const npsData = {};
  projectIds.forEach(projectId => {
   // Gerar um valor de NPS entre 0 e 10
   const npsScore = Math.floor(Math.random() * 11);
   npsData[projectId] = npsScore;
  });
  return npsData;
}

// Função para gerar dados fictícios de SLF
function generateMedianScores() {
  const scores = Array.from({ length: 4 }, () => Math.random() * 5);
  const medianScore = scores.sort()[Math.floor(scores.length / 2)];
  return parseFloat(medianScore.toFixed(1));
}

function generateSLFData(projectIds) {
  const slfData = {};
  projectIds.forEach(projectId => {
    const medianGeneral = generateMedianScores();
    slfData[projectId] = medianGeneral;
  });
  return slfData;
}

// Função para ler os IDs de projeto do arquivo JSON
function readProjectIds(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const projects = JSON.parse(fileContent);
  return projects.map(project => project.projectId);
}

// Caminho para o arquivo JSON
const filePath_nps_slf = 'projectDetails.json';

// Ler os IDs de projeto do arquivo JSON
const projectIds_nps_slf = readProjectIds(filePath_nps_slf);

// Gerar os dados de NPS e SLF
const npsResults = generateNPSData(projectIds_nps_slf);
const slfResults = generateSLFData(projectIds_nps_slf);

// Ler os dados existentes do arquivo JSON
const projectDetails_nps_slf = JSON.parse(fs.readFileSync(filePath_nps_slf, 'utf8'));

// Adicionar os valores de NPS e SLF a cada projeto
projectDetails_nps_slf.forEach(project => {
  if (npsResults[project.projectId] !== undefined) {
    project.NPS = npsResults[project.projectId];
  }
  if (slfResults[project.projectId] !== undefined) {
    project.SLF = slfResults[project.projectId];
  }
});

// Salvar o arquivo JSON atualizado
//fs.writeFileSync('projectDetails.json', JSON.stringify(projectDetails_nps_slf, null, 4));

//console.log('Arquivo JSON atualizado com os valores de NPS e SLF.');









/*
// Lendo os dados dos arquivos JSON
const projectDetails3 = JSON.parse(fs.readFileSync('projectDetails.json'));
const userSkills = JSON.parse(fs.readFileSync('user3.json'));

// Criando um mapa de habilidades dos usuários
const userHardSkillsMap = {};
userSkills.forEach(user => {
    userHardSkillsMap[user.username.toLowerCase()] = user.technologies.length;
});

// Função para verificar se um usuário tem pelo menos 3 hard skills
const hasAtLeastThreeHardSkills = (username) => {
    return userHardSkillsMap[username.toLowerCase()] >= 3;
};

// Filtrando projetos
const filteredProjects2 = projectDetails3.filter(project => {
    return project.teamMembers.some(member => hasAtLeastThreeHardSkills(member));
});

// Salvando os projetos filtrados
//fs.writeFileSync('projectDetails.json', JSON.stringify(filteredProjects2, null, 4));
*/



/*

// Lendo os dados do arquivo JSON
let projectDetails4 = JSON.parse(fs.readFileSync('projectDetails.json'));

// Filtrando projetos com no máximo 4 gerentes
projectDetails4 = projectDetails4.filter(project => project.projectManagers.length <= 4);

// Salvando os projetos filtrados de volta no arquivo JSON
//fs.writeFileSync('projectDetails.json', JSON.stringify(projectDetails4, null, 4));

*/



//pegando apenas dois projetos cujos membros participam do outro

// Lendo os dados do arquivo JSON
let projectDetails_new = JSON.parse(fs.readFileSync('projectDetails.json'));

// Função para encontrar a interseção de membros entre dois projetos
function findCommonMembers(project1, project2) {
    return project1.teamMembers.filter(member => project2.teamMembers.includes(member));
}

// Encontrar dois projetos com o máximo de membros em comum
let maxCommonMembers = 0;
let selectedProjectsData = [];

for (let i = 0; i < projectDetails_new.length; i++) {
    for (let j = i + 1; j < projectDetails_new.length; j++) {
        const commonMembers = findCommonMembers(projectDetails_new[i], projectDetails_new[j]);
        if (commonMembers.length > maxCommonMembers) {
            maxCommonMembers = commonMembers.length;
            selectedProjectsData = [projectDetails_new[i], projectDetails_new[j]];
        }
    }
}

console.log("Projetos Selecionados:", selectedProjectsData.map(p => p.projectId));
console.log("Número de Membros em Comum:", maxCommonMembers);

// Salvando os projetos selecionados em um novo arquivo JSON
//fs.writeFileSync('selectedProjects.json', JSON.stringify(selectedProjectsData, null, 4));


/*ler um arquivo selectedProjects.json, depois ler outro arquivo user3.json e, por fim, atualizar o arquivo selectedProjects.json adicionando informações de user_id, contractRoleName e technologies para cada membro da equipe, encontradas no arquivo user3.json pelo username. */

// Lê o arquivo selectedProjects.json
const selectedProjects_dados = JSON.parse(fs.readFileSync('projectDetails.json', 'utf8'));

// Lê o arquivo user3.json
const usersData = JSON.parse(fs.readFileSync('user3.json'));

// Função para encontrar as informações do usuário pelo username
function findUserInfo(username) {
    return usersData.find(user => user.username === username);
}

// Atualiza os dados dos projetos com as informações dos usuários
selectedProjects_dados.forEach(project => {
    project.teamMembers.forEach((member, index) => {
        const userInfo = findUserInfo(member);
        if (userInfo) {
          console.log('encontrou'+userInfo)
            project.teamMembers[index] = {
              user_id: userInfo.user_id,  
              username: member,
                
                contractRoleName: userInfo.contractRoleName,
                technologies: userInfo.technologies,
                projects_id: userInfo.projects_id
            };
        }
    });
});

// Escreve os dados atualizados de volta no arquivo selectedProjects.json

//fs.writeFileSync('projectDetails.json', JSON.stringify(selectedProjects_dados, null, 2));
//fs.writeFileSync('selectedProjects3.json', JSON.stringify(selectedProjects_dados, null, 2));






module.exports =  router

 



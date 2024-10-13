const start = process.hrtime();

const fs = require('fs')

let arrayde_cromo = [] //array de cromossomos
let tamanho_equipe = 0 //buscar e otimizar equipe única de tamanho 4
let skills_entrada = ["java", "iot", "ios", "web", "Android","Mobile","Desktop", "raspberry"]
let aux = []
let aux2 = []
//let methodology = ["kanban"];
let sugestoes = [];
let stringJSON = [];

let dadosGrafo =  {}

let dadosUsuarios = {}

inicia(dadosGrafo,dadosUsuarios)


function inicia(dadosGrafo,dadosUsuarios){
    dados_user3 = dadosUsuarios
    console.log('Verificando dados recebidos dentro de adicionarDadosAosNos:');
    console.log(dadosGrafo);
    console.log(dadosUsuarios);

    function adicionarDadosAosNos(dadosGrafo, dadosUsuarios) {
        // Primeiro, criar um mapeamento de user_id para os dados desejados de dadosUsuarios
        const usuarioParaDados = {};
        dadosUsuarios.forEach(user => {
            usuarioParaDados[user.user_id] = {
           // methodologies: user.methodology,
            projectsId: user.projects_id,
            };
        });

        // Depois, iterar sobre cada nó em dadosGrafo e adicionar os dados de methodology e projects_id
        dadosGrafo.nodes.forEach(node => {
            if (usuarioParaDados[node.user_id]) {
            // Assegurar que methodologies e projectsId são arrays antes de atribuir
           // node.methodology = Array.isArray(usuarioParaDados[node.user_id].methodologies) ? usuarioParaDados[node.user_id].methodologies : [];
            node.projects_id = Array.isArray(usuarioParaDados[node.user_id].projectsId) ? usuarioParaDados[node.user_id].projectsId : [];
            } else {
            // Se não existir correspondência em dadosUsuarios, inicializa com arrays vazios
           // node.methodology = [];
            node.projects_id = [];
            }
        });

        return dadosGrafo;
    }

    let dados_do_grafo = adicionarDadosAosNos(dadosGrafo, dadosUsuarios);


    // console.log('dados_do_grafo')
    // console.log(JSON.stringify(dados_do_grafo))        
      
    function montarPerfil(dados_do_grafo) {
          let perfis = {};

          // Mapeando os usuários e suas conexões
          dados_do_grafo.nodes.forEach(node => {
            perfis[node.id] = {
              username: node.id, // Adicionando o username baseado no ID do nó
              user_id: node.user_id,
              type: node.type,
              contractRoleName: node.contractRoleName, // Nome do papel do contrato
              hardskills: node.hardskill, // Assume que queremos apenas as 3 primeiras hardskills
              //methodology: [...new Set(node.methodology)], // Remove duplicatas das metodologias
              conexoes: {} // Prepara para adicionar conexões
            };
          });

          // Adicionando conexões e pesos entre os nós
          dados_do_grafo.edges.forEach(edge => {
            if (perfis[edge.source]) {
              perfis[edge.source].conexoes[edge.target] = edge.weight; // Adiciona conexão e peso
            }
          });

          // Convertendo o objeto de perfis em uma lista de perfis
          const listaDePerfis = Object.values(perfis);

          return listaDePerfis;
    }

    let perfisUsuarios =  montarPerfil(dados_do_grafo);
   
    //console.log('JSON.stringify(perfisUsuarios)')
    //console.log(JSON.stringify(perfisUsuarios))
    
    let pess = perfisUsuarios

    //document.getElementById("salvarprojeto").style.display = "block";
  
  

    pess = Object.entries(pess).map(([key, value]) => {
        return { id: key, ...value };
    });

    //entrada de tecnologias
    //skills_entrada = $('#entrada').val().split(/,/)

  

    //methodology = $('#method_proj').val().split(/,/)

  

   //if( skills_entrada.length === 1 && skills_entrada[0] === "") { skills_entrada = []}
 
   //if( methodology.length === 1 && methodology[0] === "") { methodology = []}

   
    //converte pra minusculas as hardskills e metodologias
    function converterParaMinusculas(pessoas) {
  
        for (let key in pessoas) {
            if (pessoas.hasOwnProperty(key)) {
            let pessoa = pessoas[key];

            if (Array.isArray(pessoa.hardskills)) {
                pessoa.hardskills = pessoa.hardskills.map(skill => skill.toLowerCase());
            }

           // if (Array.isArray(pessoa.methodology)) {
                
           //     pessoa.methodology = pessoa.methodology.map(method => method.toLowerCase());
            //}
            }
        }
    }
    // Chamando a função
    converterParaMinusculas(pess);
    function verificaHardskill(skills_entrada, pessoa) {
        for (let i = 0; i < skills_entrada.length; i++) {
            if (pessoa.hardskills.includes(skills_entrada[i].toLowerCase())) {
            
            return true;
            }
        }
        return false;
    }   

    //function verificaMetodologia(methodology, pessoa) {
    //    for (let i = 0; i < methodology.length; i++) {
      //      if (pessoa.methodology.includes(methodology[i].toLowerCase())) {
            
        //    return true;
       //     }
     //   }
     //   return false;
    //}  

      


    //$('.sugestao_1').empty();
    //$('.sugestao_2').empty();
   /*
    let devs = {
        DevMast: 0,
        DevPleno: 0,
        DevSeni: 0,
        DevJuni: 0    
    };
    
    // atribui os valores dos inputs aos atributos do objeto 'devs'
    for (const key in devs) {
        if (devs.hasOwnProperty(key)) {
            devs[key] = parseInt($(`#${key}`).val()) || 0; // garante que o valor é um número inteiro
        }
    }
   
    // soma o tamanho da equipe com base na quantidade de cada tipo de desenvolvedor
    
 */
    //alert('tamanho_equipe')
    //alert(tamanho_equipe)

    let devs = {
        DevMast: 1,
        DevPleno: 1,
        DevSeni: 1,
        DevJuni: 1    
    };
    tamanho_equipe += devs.DevMast + devs.DevPleno + devs.DevSeni + devs.DevJuni;
    
    function verificaNivel(nivel) {
    // Verifica se o nível requisitado está disponível na entrada dos desenvolvedores
    if (nivel === "Master" && devs.DevMast > 0) {
        return true;
    } else if (nivel === "Middle" && devs.DevPleno > 0) {
        return true;
    } else if (nivel === "Senior" && devs.DevSeni > 0) {
        return true;
    } else if (nivel === "Junior" && devs.DevJuni > 0) {
        return true;
    }
    
    return false;
    }



    let vetor_denivel = []

    if (devs.DevMast > 0) {
        vetor_denivel.push('Master')
    } 
    if (devs.DevPleno > 0) {
        vetor_denivel.push('Middle')
    }
    if (devs.DevSeni > 0) {
        vetor_denivel.push('Senior')
    }
    if (devs.DevJuni > 0) {
        vetor_denivel.push('Junior')
    }
    
    console.log("vetor_denivel")
    console.log(vetor_denivel)

    


    let counter = 0
    let pessoa = []

    if(skills_entrada.length > 0 ){
        for(let i=0;i<pess.length;i++){  
    
        addiciona:
        
        if ( verificaNivel(pess[i].contractRoleName) && verificaHardskill(skills_entrada, pess[i]) && pess[i].contractRoleName !== "Project Manager"){
                    
            
                        
            
                        let novouser = {
                            id:counter+1,
                            user_id: pess[i].user_id,
                            name:pess[i].username,
                            id_anonimized: pess[i].id_anonimized,
                            perfil:'Developer', 
                            level:pess[i].contractRoleName,
                            contractRole: 'Specialist',
                            hardskill: pess[i].hardskills,
                            
                           // methodology: pess[i].methodology,
                            fit:0,
                            vetor_hardskill: [],
                            
                            //vetor_metodologia: [],
                            conexoes: pess[i].conexoes,

                        }
                        pessoa.push(novouser)  
                    
                        counter++
                        break addiciona
            }  
            
        }


    }
    else {
    alert('Add technologies!')
    }

    console.log('De um total de '+ pess.length+ ', ' +pessoa.length+' users foram adicionados com: '+skills_entrada)
    let level = []       
    for (let i = 0; i< pessoa.length; i++){ 
        level.push(pessoa[i].level)
    }

    converterSkillsParaMinusculas(skills_entrada)
   // converterSkillsParaMinusculas(methodology)

    function converterSkillsParaMinusculas(skills_entrada) {
        for (let i = 0; i < skills_entrada.length; i++) {
        skills_entrada[i] = skills_entrada[i].toLowerCase();
        
        }
    }
    //construindo vetor do projeto
    let vetorProjeto = {
        hardskill_entrada: [],
        metodologia_entrada:[]
    }
    for(let i=0; i<skills_entrada.length; i++){
        vetorProjeto.hardskill_entrada.push(1)
    }
    
   // for(let i=0; i<methodology.length; i++){
   //     vetorProjeto.metodologia_entrada.push(1)
   // }
    vetorProjeto = vetorProjeto.hardskill_entrada;

    console.log(JSON.stringify(vetorProjeto))
    //montando vetor de cada pessoa pra obter o fitness
    for(let i=0; i<pessoa.length; i++){
    
        let vetor_entradas = []
        //pegando as hardskills
        if(skills_entrada.length > 0){
            if(pessoa[i].hardskill.length > 0){
            for(let j=0; j<skills_entrada.length;j++){
                if(pessoa[i].hardskill.includes(skills_entrada[j])){
                pessoa[i].vetor_hardskill.push(1)
                }
                else{
                pessoa[i].vetor_hardskill.push(0)
                }
            }
            }
            else{
                for(let y=0; y<skills_entrada.length;y++){
                pessoa[i].vetor_hardskill.push(0)
                }
            }
        }
        //pegando as metodologias
        /*
        if(methodology.length > 0){
            if(pessoa[i].methodology.length > 0){
            for(let m=0; m<methodology.length; m++){
                if(pessoa[i].methodology.includes(methodology[m])){
                pessoa[i].vetor_metodologia.push(1)
                }
                else{
                pessoa[i].vetor_metodologia.push(0)
                }
            }
            }
            else{
                for(let y=0; y<methodology.length;y++){
                pessoa[i].vetor_metodologia.push(0)
                }
            }
        }
        */
    }
    const similaridades = calculaSimilaridade(vetorProjeto, pessoa);

    function calculaSimilaridade(vetorProjeto, pessoas) {
        const k = vetorProjeto.length; // tamanho do vetor do projeto
        
        // Normalização do vetor de entrada do projeto
        const vetorProjetoNormalizado = vetorProjeto.map((valor, indice) => {
            // considerando apenas o vetor de hard skills
            const maxValor = 2; // valor máximo possível para a hard skill
            return valor / maxValor; // divide pelo valor máximo
        });
        
        // Normalização dos vetores de cada pessoa
        /*
        const pessoasNormalizadas = pessoas.map(pessoa => {
            const vetorPessoa = pessoa.vetor_hardskill.concat( pessoa.vetor_metodologia);
            const maxValor = 2; // valor máximo possível para a hard skill
            return vetorPessoa.map(valor => valor / maxValor); // divide pelo valor máximo
        });
        */
       // Normalização dos vetores de cada pessoa
    const pessoasNormalizadas = pessoas.map(pessoa => {
        // Removendo a concatenação com vetor_metodologia
        const vetorPessoa = pessoa.vetor_hardskill;
        const maxValor = 2; // valor máximo possível para a hard skill
        return vetorPessoa.map(valor => valor / maxValor); // divide pelo valor máximo
    });

        
        // Cálculo da similaridade de Manhattan entre cada pessoa e o vetor do projeto
        const similaridades = pessoasNormalizadas.map((pessoa, indice) => {
            const diferencaAbsoluta = pessoa.map((valor, indice) => {
            return Math.abs(valor - vetorProjetoNormalizado[indice]);
            });
            const somaDiferencas = diferencaAbsoluta.reduce((soma, valor) => soma + valor, 0);
            const similaridade = 1 - (somaDiferencas / k);
            pessoas[indice].fit = similaridade.toFixed(2)
            return { nome: pessoas[indice].nome, similaridade: similaridade.toFixed(2) };
        });
        
        return similaridades;
    }

    //pega o nivel do dev
    function buscalevel(auxi){
        let level = ''
        for (let j = 0; j < pessoa.length; j++) {
            if (pessoa[j].user_id === auxi) {
                level = pessoa[j].level
            }
        }
        return level;
    }


    //pega os nomes
    function buscaname(auxi){
        let name = ''
        for (let j = 0; j < pessoa.length; j++) {
            if (pessoa[j].user_id === auxi) {
                name = pessoa[j].name
            }
        }
        return name;
    }
    
    //pega os fit
    function buscafit(auxi){
        let fit = 0
        for (let j = 0; j < pessoa.length; j++) {
            if (pessoa[j].id === auxi) {
                
                fit = pessoa[j].fit
                break
            }
        }
        return fit;
    }
    let qtdMaster  = 0 
    let qtdSenior  = 0 
    let qtdPleno  = 0 
    let qtdJunior = 0
    let array_niveis = []

    function LevelFoiAdd(nivel){
        return array_niveis.includes(nivel)
    }


    function verificaInclusao(array_niveis, vetor_denivel) {
        return vetor_denivel.every(item => array_niveis.includes(item));
    }


    //criando a população inicial
    // Suposições para que o exemplo funcione:
    // - As funções buscalevel, buscafit, e buscaname estão definidas em outro lugar.
    // - A variável pessoa é um array de objetos, onde cada objeto representa uma pessoa com propriedades como user_id.
    // - Inicializações necessárias das variáveis que não foram detalhadas na pergunta original.


    function cromossomoEhUnico(novoCromossomo, populacao) {
        // Transforma o array de genes do novoCromossomo em uma string ordenada para comparação
        let novoCromossomoGenesString = novoCromossomo.cromo.slice().sort().join(',');

        // Itera sobre cada cromossomo da população para verificar se algum é idêntico ao novoCromossomo
        for (let i = 0; i < populacao.length; i++) {
            let cromossomoAtualGenesString = populacao[i].cromo.slice().sort().join(',');
            
            // Compara as strings dos genes ordenados
            if (novoCromossomoGenesString === cromossomoAtualGenesString) {
                return false; // Um cromossomo idêntico foi encontrado na população
            }
        }

        // Nenhum cromossomo idêntico foi encontrado; o novoCromossomo é único
        return true;
    }
    function selecionarIndividuoUnico(pessoa, array_niveis, array_auxi, arrayde_cromo) {
        let tentativas = 0;
        let maxTentativas = 500; // Limita as tentativas para evitar loop infinito
        while (tentativas < 1000) {
            let index = Math.floor(Math.random() * pessoa.length);
            let auxi = pessoa[index].user_id;
            let nivelAuxi = buscalevel(auxi);
            if (!array_niveis.includes(nivelAuxi) && !array_auxi.map(item => item.user_id).includes(auxi) && buscafit(auxi) > 0) {
                    // Verifica se o indivíduo já existe no arrayde_cromo
                if (!arrayde_cromo.some(cromo => cromo.cromo.includes(auxi))) {
                    return { auxi, nivelAuxi }; // Retorna o user_id e o nível se satisfizer os critérios
                }
              
            }
            tentativas++;
        }
        return null; // Retorna null se não encontrar um indivíduo adequado
    }
    function selecionarIndividuoUnico_flexivel(pessoa, array_niveis, array_auxi, arrayde_cromo) {
        let tentativas = 0;
        let maxTentativas = 500; // Limita as tentativas para evitar loop infinito
        while (tentativas < 1000) {
            let index = Math.floor(Math.random() * pessoa.length);
            let auxi = pessoa[index].user_id;
            let nivelAuxi = buscalevel(auxi);
            if (!array_niveis.includes(nivelAuxi) && !array_auxi.map(item => item.user_id).includes(auxi) ){
                    // Verifica se o indivíduo já existe no arrayde_cromo
                if (!arrayde_cromo.some(cromo => cromo.cromo.includes(auxi))) {
                    return { auxi, nivelAuxi }; // Retorna o user_id e o nível se satisfizer os critérios
                }
              
            }
            tentativas++;
        }
        return null; // Retorna null se não encontrar um indivíduo adequado
    }

    

    // Passo 1: gera população inicial 


  
    for (let u= 0; u <10; u++){  //tamanho da população
        let auxi = 0
        let cont = 0 
        let tes = new Object( //cria um novo cromossomo
            {id:u,
            cromo:[],
            fit:[],
            nomes:[],
            levels:[],
            fitnessBase:0,
            pesoSocial:0,
            total_fit:0
        })
        arrayde_cromo.push(tes)//coloca no array o novo cromossomo
    }

    
    let array_auxi = [];



    let array_niveis_auxi = [];
    
   for (let individuo=0; individuo< 10; individuo ++) {
        let tamanho_equipe = 0;
        array_auxi = [];
        array_niveis_auxi = [];
        console.log('individuo ',individuo)
        // A lógica para selecionar indivíduos únicos e criar um novo cromossomo permanece a mesma.
         do{
            let resultado = selecionarIndividuoUnico(pessoa, array_niveis_auxi, array_auxi, arrayde_cromo);
            if (resultado) {
                let { auxi, nivelAuxi } = resultado;
                array_niveis_auxi.push(nivelAuxi);
                array_auxi.push({
                    user_id: auxi,
                    fit: buscafit(auxi),
                    name: buscaname(auxi),
                    level: nivelAuxi
                });
                tamanho_equipe++;
            } else {
                break; // Sai do loop se não conseguir encontrar mais indivíduos únicos.
            }console.log(array_niveis_auxi)
        }while (tamanho_equipe < 4);
        console.log('array_auxi tamanho',array_auxi.length)
        console.log('array_auxi', JSON.stringify(array_auxi))
        //alert(tamanho_equipe)
        // Após formar um cromossomo completo, verifique sua unicidade antes de adicioná-lo à população.
        if (array_auxi.length === 4) {
            // Se conseguiu adicionar a quantidade de indivíduos desejada, salva o cromossomo na população
            for (let u = 0; u < array_auxi.length; u++) {
                arrayde_cromo[individuo].cromo.push(array_auxi[u].user_id);
                arrayde_cromo[individuo].fit.push(array_auxi[u].fit);
                arrayde_cromo[individuo].nomes.push(array_auxi[u].name);
                arrayde_cromo[individuo].levels.push(array_auxi[u].level);
            }
                
        } else {
            if (array_auxi.length === 3) {
                // Se conseguiu adicionar a quantidade de indivíduos desejada, salva o cromossomo na população
                let resultado = selecionarIndividuoUnico_flexivel(pessoa, array_niveis_auxi, array_auxi, arrayde_cromo);
                if (resultado) {
                    let { auxi, nivelAuxi } = resultado;
                    array_niveis_auxi.push(nivelAuxi);
                    array_auxi.push({
                        user_id: auxi,
                        fit: buscafit(auxi),
                        name: buscaname(auxi),
                        level: nivelAuxi
                    });
                    for (let u = 0; u < array_auxi.length; u++) {
                        arrayde_cromo[individuo].cromo.push(array_auxi[u].user_id);
                        arrayde_cromo[individuo].fit.push(array_auxi[u].fit);
                        arrayde_cromo[individuo].nomes.push(array_auxi[u].name);
                        arrayde_cromo[individuo].levels.push(array_auxi[u].level);
                    }
                }
                    
            } else {           
            console.log("não foi possível formar um cromossomo completo");
            }
        }
    }
    console.log('##############################')

    console.log('tamanho da população inicial')

    console.log(arrayde_cromo.length)
    console.log('##############################')

    console.log(' Log da população  inicial criada ')
    console.log(JSON.stringify(arrayde_cromo));

    console.log('##############################')



    //removendo skills duplicadas
    for (let i = 0; i < pessoa.length; i++) {
        let hardskillUnicas = pessoa[i].hardskill.filter((value, index, self) => {
            return self.indexOf(value) === index;
        });
        pessoa[i].hardskill = hardskillUnicas;
    }

    //removendo methodologies duplicadas
   // for (let i = 0; i < pessoa.length; i++) {
   //     let MethodUnicas = pessoa[i].methodology.filter((value, index, self) => {
    //        return self.indexOf(value) === index;
     //   });
    //    pessoa[i].methodology = MethodUnicas;
    //}
    //funcao de busca por id nos dados_do_Grafo
    function buscarUserIdPorId( idProcurado) {
        const nodo = dados_do_grafo.nodes.find(nodo => nodo.id === idProcurado);
        return nodo ? nodo.user_id : null;
    }
    //funcao pra encontrar projetos em comum
    function encontrarProjetosEmComum(dados_user3, nomeDev1, nomeDev2) {
        // Extrai os IDs numéricos dos nomes dos desenvolvedores
        let id1 = buscarUserIdPorId(nomeDev1)
        let id2 = buscarUserIdPorId(nomeDev2)

        // Encontra os usuários correspondentes pelos IDs
        let usuario1 = dados_user3.find(usuario => usuario.user_id === id1);
        let usuario2 = dados_user3.find(usuario => usuario.user_id === id2);

        if (usuario1 && usuario2) {
            // Pega os projetos de cada um
            let projetosUsuario1 = new Set(usuario1.projects_id);
            let projetosUsuario2 = new Set(usuario2.projects_id);

            // Encontra os projetos em comum
            let projetosEmComum = [...projetosUsuario1].filter(id => projetosUsuario2.has(id));
            if(projetosEmComum.length > 0){
                            console.log(`Projetos em comum entre ${nomeDev1} e ${nomeDev2}:`, projetosEmComum);
            }
            return projetosEmComum;
        } else {
            console.log(`Usuário não encontrado: ${nomeDev1} ou ${nomeDev2}`);
            return [];
        }
    }

    //funcao para calcular o peso social do nomes cromossomo
     function calcularPesoSocial(nomes, arestas) {
        let pesoSocial_total = 0;
        
        // Normaliza os edges sem redefinir o parâmetro original
        let edges = arestas.map(edge => ({
            source: edge.source,
            target: edge.target,
            weight: parseFloat(edge.weight) // Garante que weight é um número
        }));

    // console.log("Edges :", JSON.stringify(edges));

        for (let i = 0; i < nomes.length - 1; i++) {
            let projetosEmComum = []
            for (let j = i + 1; j < nomes.length; j++) {
                let aresta = edges.find(edge =>
                    (edge.source === nomes[i] && edge.target === nomes[j]) ||
                    (edge.source === nomes[j] && edge.target === nomes[i])
                );
               
                             
                if (aresta)  {
                                    
                    projetosEmComum = encontrarProjetosEmComum(dados_user3, nomes[i], nomes[j]);
                    pesoSocial_total += aresta.weight;
                    console.log('Encontrou aresta entre:', nomes[i], 'e', nomes[j], 'Peso:', aresta.weight, 'projetosEmComum: ', projetosEmComum, 'pesoSocial_total: ', pesoSocial_total.toFixed(2));
                   
                    
                } else {
                    if (!aresta)  {
                        console.log('Não encontrada aresta entre:', nomes[i], 'e', nomes[j]);
                       
                    }
                }
                // Aqui chamamos a nova função para encontrar projetos em comum
                
            }

        }

        if(pesoSocial_total === 0 ){
            const PESO_MINIMO = 0.01; // Define um peso mínimo para garantir contribuição no fitness
            pesoSocial_total = Math.max(pesoSocial_total, PESO_MINIMO);
        }

        //console.log("Peso Social Total:", pesoSocial_total);
        return pesoSocial_total;
    }
    //funcao pra calcular o fitness
    function cfit(fits, nomes, arestas) {
            
        let fitnessBase_aux = 0;
        // Calcula o fitness base com base nos valores individuais de fit
        for (let i = 0; i < fits.length; i++) {
            // fitnessBase_aux += Math.floor(parseFloat(fits[i]) * 10);
            fitnessBase_aux += parseFloat(fits[i]);
        }
        // Calcula o peso social para o fits
        let pesoSocial = calcularPesoSocial(nomes, arestas );
        // Multiplica o fitness base pelo peso social para obter o fitness total
        console.log(nomes)
        console.log('fitnessBase_aux',fitnessBase_aux.toFixed(2))
        console.log('pesoSocial',pesoSocial)
        

        let fitnessTotal = fitnessBase_aux * pesoSocial;
        console.log('fitnessTotal',fitnessTotal.toFixed(2))

        // Retornar tanto o fitnessTotal quanto o pesoSocial
        return { fitnessTotal, pesoSocial, fitnessBase_aux };
    }




    let maxIteracoes = 100; // Um número máximo de iterações por segurança
    let iteracaoAtual = 0;

    let geracoes = 0

    while( geracoes < 10 || iteracaoAtual < maxIteracoes ){//condição de parada



        if (arrayde_cromo.length === 3) {
           
            //gera novo indivídsuo único (aumentar diversidade) para completar tamanho 4 da população
            let tes = new Object( //cria um novo cromossomo
            {
            cromo:[],
            fit:[],
            nomes:[],
            levels:[],
            fitnessBase:0,
            pesoSocial:0,
            total_fit:0
        })
        arrayde_cromo.push(tes)//coloca no array o novo cromossomo
        console.log('================= novo individuo========')
        console.log(arrayde_cromo)
        console.log('========================================')
        let auxi = 0
        let array_niveis =[]
        array_auxi = [];
        popul=0
        while (popul < tamanho_equipe) {
            let resultado = selecionarIndividuoUnico(pessoa, array_niveis, array_auxi, arrayde_cromo);
            if (resultado) {
                let { auxi, nivelAuxi } = resultado;
                array_niveis.push(nivelAuxi);
                array_auxi.push({
                    user_id: auxi,
                    fit: buscafit(auxi),
                    name: buscaname(auxi),
                    level: nivelAuxi
                });
                popul++;
            } else {
                break; // Sai do loop se não conseguir encontrar mais indivíduos únicos.
            }        
        }
        if (popul === tamanho_equipe) {
            // Se conseguiu adicionar a quantidade de indivíduos desejada, salva o cromossomo na população
            for (let u = 0; u < array_auxi.length; u++) {
                arrayde_cromo[3].cromo.push(array_auxi[u].user_id);
                arrayde_cromo[3].fit.push(array_auxi[u].fit);
                arrayde_cromo[3].nomes.push(array_auxi[u].name);
                arrayde_cromo[3].levels.push(array_auxi[u].level);
            }
                
        } else {
            console.log("não foi possível formar um cromossomo completo");
        }


        }
        // Passo2: calcula fitness de cada cromossomo (aptidao)
        for (let i = 0; i < arrayde_cromo.length; i++) {
            // Captura o retorno de cfit
            
            let { fitnessTotal, pesoSocial, fitnessBase_aux } = cfit(arrayde_cromo[i].fit, arrayde_cromo[i].nomes, dados_do_grafo.edges);
            
            //Atribui fitnes base ao cromossomo
            arrayde_cromo[i].fitnessBase = fitnessBase_aux.toFixed(2);

            // Atribui o fitnessTotal ao cromossomo
            arrayde_cromo[i].total_fit = fitnessTotal;

            // Atribui o pesoSocial ao cromossomo
            arrayde_cromo[i].pesoSocial = pesoSocial;  
        }
        console.log('----------------------------------------')
        console.log(arrayde_cromo[0].total_fit.toFixed(2));


        // Passo 3: ordena os indivíduos do maior para o menor fitness
        arrayde_cromo.sort(function(a, b) {
            if (a.total_fit < b.total_fit) { return 1}
            if (a.total_fit > b.total_fit) { return -1}
            return 0; //retorne 0 se 'a' for igual a 'b'
        });
    
        console.log('arrayde_cromo ordenado com base no total fit')
        console.log(JSON.stringify(arrayde_cromo))
        console.log('tamanho ' ,arrayde_cromo.length)

        
        console.log('______________GERACAO:____',geracoes)
    
        //imprime a populacao criada
        for(let i =0; i< arrayde_cromo.length; i++){
            console.log(' cromossomo : ',i)
            console.log('ids: ', arrayde_cromo[i].cromo)
            console.log('nomes : ', arrayde_cromo[i].nomes)
            console.log('fit : ', arrayde_cromo[i].fit)
            console.log('nível: ', arrayde_cromo[i].levels)
            console.log('total fit : ', arrayde_cromo[i].total_fit.toFixed(2))
        }
        console.log('___________')
        console.log('tamanho da população: ',arrayde_cromo.length, ' individuos')
        geracoes ++;

        arrayde_cromo.forEach(cromossomo => sugestoes.push(cromossomo));

    
        //Elitismo mantém os dois melhores indivíduos da população
        // Ordenar pelo fitness total, do maior para o menor
        arrayde_cromo.sort((a, b) => b.total_fit - a.total_fit);

        // Seleciona os N melhores indivíduos da população
        const N = 1; // Define quantos dos melhores indivíduos manter
        const melhoresIndividuos = arrayde_cromo.slice(0, N);

        arrayde_cromo.splice(0, N);//remove da população so melhor individuo
        //imprime a populacao criada
        console.log('População SEM o melhor individuo')
        for(let i =0; i< arrayde_cromo.length; i++){
            console.log(' cromossomo : ',i)
            console.log('ids: ', arrayde_cromo[i].cromo)
            console.log('nomes : ', arrayde_cromo[i].nomes)
            console.log('fit : ', arrayde_cromo[i].fit)
            console.log('total fit : ', arrayde_cromo[i].total_fit.toFixed(2))
        }


        // Atualiza a população para manter apenas os N melhores indivíduos
        let elite = [...melhoresIndividuos];
        console.log('elite: ', elite)


        // Passo 4: Seleção do mais adaptado => método da roleta escolhe dois pais aleatoriamente mas considera porcentagens individuais
        let v = [] //roleta pra seleção
        let a=0
        v = arrayde_cromo //copia o array da população
        for(let i=0;i<arrayde_cromo.length;i++){
            a = arrayde_cromo[i].total_fit + a //soma todos fitness de todos indivíduos
        }
        let p = [] //cria array de porcentagens
        for(let i=0;i<arrayde_cromo.length;i++){
            p[i] = v[i].total_fit / a //porcentagem do indivíduo 'i' será igual ao fitness do indivíduo dividido '/' pelo total de fitness 'a' de todos indivíduos
        }
        q = [] //cria array para soma acumulativa

        //alert(tamanho_equipe)
        for(let i=0;i<tamanho_equipe;i++){ 
            q.push(0) //preenche o array 'q' com zeros
        }
        let aux =0
        for(let i=0;i<p.length;i++){
            q[i] = p[i]+aux; //preenche o array 'q' com as porcentagens de 'p'
            aux = q[i] ;
        }
        
        let pais = []; // cria array de pais
        let r = 0;
        while(pais.length < 2){ // enquanto o tamanho do array pais não chega a 2
            r = Math.random(); // gera número aleatório entre 0 e 1
            for(let i=0; i<arrayde_cromo.length; i++){
                if(i === 0 ? r < q[0] : r > q[i-1] && r < q[i]){ // ajuste para considerar o primeiro intervalo e os subsequentes
                    let nomeAtual = arrayde_cromo[i].nomes[0];
                    let jaExiste = pais.some(pai => pai.nomes[0] === nomeAtual); // verifica se o pai atual já existe no array de pais
                    if(!jaExiste && pais.length < 2){ // se não existe e ainda há espaço para pais
                        pais.push(arrayde_cromo[i]); // adiciona o pai atual ao array de pais
                        break; // sai do loop for, pois já encontramos um pai para esta iteração
                    }
                }
            }
        }
        //reinicia ids dos pais selecionados
        for(let p=0;p<pais.length;p++){
            pais[p].id =  p
        }
        
       
        //fucnao pra ordenar os niveis dos pais pra garantir niveis unicos para o cruzamento
        function nivelParaNumero(nivel) {
            const ordem = {
                'Junior': 1,
                'Middle': 2,
                'Senior': 3,
                'Master': 4
            };
            return ordem[nivel] || 0; // Retorna 0 como valor padrão se o nível não for encontrado
        }
        function ordenarPaiPorNiveis(pai) {
            // Criar um array de índices para ordenar
            let indices = pai.levels.map((nivel, index) => index);
        
            // Ordenar os índices com base nos níveis
            indices.sort((a, b) => nivelParaNumero(pai.levels[a]) - nivelParaNumero(pai.levels[b]));
        
            // Reorganizar os arrays de cromossomos, níveis, nomes e fits com base nos índices ordenados
            pai.cromo = indices.map(index => pai.cromo[index]);
            pai.levels = indices.map(index => pai.levels[index]);
            pai.nomes = indices.map(index => pai.nomes[index]);
            pai.fit = indices.map(index => pai.fit[index]);
        }
        
        // Ordenar ambos os pais
        ordenarPaiPorNiveis(pais[0]);
        ordenarPaiPorNiveis(pais[1]);
         
        //imprime pais selecionados
        for(let i =0; i< pais.length; i++){
            console.log('_____PAIS______')
            console.log(' pai : ',i)
            console.log('ids: ', pais[i].cromo)
            console.log('niveis : ', pais[i].levels)

            console.log('nomes : ', pais[i].nomes)
            console.log('fit : ', pais[i].fit)
            console.log('___________')
        }



        // Passo 5: cruzamentos: O ponto de corte é aleatório entre a posicao 1 e 3
        // Supondo que 'pais' é um array com os dois pais selecionados E 'arrayde_cromo' é a população atual
        /*
        let corte = Math.floor(Math.random() * (tamanho_equipe - 2)) + 1;

        
        let filhos = [];
        // Gerando dois filhos a partir dos pais
        let paisSegmentos1 = {
            primeirocromo: pais[0].cromo.slice(0, corte),
            segundocromo: pais[1].cromo.slice(corte),

            primeironomes: pais[0].nomes.slice(0, corte),
            segundonomes: pais[1].nomes.slice(corte),

            primeirofit: pais[0].fit.slice(0, corte),
            segundofit: pais[1].fit.slice(corte),

            primeirolevel: pais[0].levels.slice(0, corte),
            segundolevel: pais[1].levels.slice(corte)
          };
          let paisSegmentos2 = {
            primeirocromo: pais[1].cromo.slice(0, corte),
            segundocromo: pais[0].cromo.slice(corte),

            primeironomes: pais[1].nomes.slice(0, corte),
            segundonomes: pais[0].nomes.slice(corte),

            primeirofit: pais[1].fit.slice(0, corte),
            segundofit: pais[0].fit.slice(corte),

            primeirolevel: pais[1].levels.slice(0, corte),
            segundolevel: pais[0].levels.slice(corte)
          };
          console.log('corte')
          console.log(corte)
          console.log('paisSegmentos1.primeironomes')
          console.log(paisSegmentos1.primeironomes)
          console.log('paisSegmentos1.segundonomes')
          console.log(paisSegmentos1.segundonomes)
          
          console.log('paisSegmentos2.primeironomes')
          console.log(paisSegmentos2.primeironomes)
          console.log('paisSegmentos2.segundonomes')
          console.log(paisSegmentos2.segundonomes)

        for (let u = 0; u < 2; u++) {
            let filho = { cromo: [], fit: [], nomes: [],  levels:[],  fitnessBase:0,  pesoSocial:0, total_fit:0 };

        

            if(u === 0){
                filho.cromo = paisSegmentos1.primeirocromo.concat(paisSegmentos1.segundocromo);
                filho.nomes = paisSegmentos1.primeironomes.concat(paisSegmentos1.segundonomes);
                filho.fit = paisSegmentos1.primeirofit.concat(paisSegmentos1.segundofit);
                filho.levels = paisSegmentos1.primeirolevel.concat(paisSegmentos1.segundolevel);

            }
            if(u === 1){
                filho.cromo = paisSegmentos2.primeirocromo.concat(paisSegmentos2.segundocromo);
                filho.nomes = paisSegmentos2.primeironomes.concat(paisSegmentos2.segundonomes);
                filho.fit = paisSegmentos2.primeirofit.concat(paisSegmentos2.segundofit);
                filho.levels = paisSegmentos2.primeirolevel.concat(paisSegmentos2.segundolevel);
            }
           
        
           
            filhos.push(filho);
            
        }
        */
        // Supondo que 'pais' é um array com os dois pais selecionados
// E 'tamanho_equipe' é o número de características de cada indivíduo

let filhos_teste = [];

for (let u = 0; u < 2; u++) {
    let filho = { cromo: [], fit: [], nomes: [], levels: [], fitnessBase: 0, pesoSocial: 0, total_fit: 0 };
    
    // Para cada gene/característica dos pais
    for (let i = 0; i < tamanho_equipe; i++) {
        // Gera um coeficiente alpha aleatório para cada gene
        let alpha = Math.random();
        console.log('alpha ', i, ' ', alpha);
        
        // Aplica a combinação convexa para o 'fit'
        let fit_combinado = alpha * pais[0].fit[i] + (1 - alpha) * pais[1].fit[i];
        filho.fit.push(fit_combinado);

        // Decidir de qual pai herdar com base na proximidade do 'fit' combinado aos 'fit' dos pais
        let diferenca_fit_pai_0 = Math.abs(fit_combinado - pais[0].fit[i]);
        let diferenca_fit_pai_1 = Math.abs(fit_combinado - pais[1].fit[i]);
        console.log('diferenca_fit_pai_0 ',diferenca_fit_pai_0)
        console.log('diferenca_fit_pai_1 ',diferenca_fit_pai_1)
        // Se a diferença para o pai 0 for menor ou igual à diferença para o pai 1, herda do pai 0, senão do pai 1
        if (diferenca_fit_pai_0 < diferenca_fit_pai_1) {
            filho.nomes.push(pais[0].nomes[i]);
            filho.levels.push(pais[0].levels[i]);
            filho.cromo.push(pais[0].cromo[i]);
        } else {
            filho.nomes.push(pais[1].nomes[i]);
            filho.levels.push(pais[1].levels[i]);
            filho.cromo.push(pais[1].cromo[i]);
        }
    }
    
    // Aqui você adicionaria lógica para ajustar 'filho' e garantir unicidade e restrições de nível
    // Por exemplo, verificação e substituição de membros repetidos, como discutido anteriormente
    
    filhos_teste.push(filho);
}

// Lógica para imprimir ou processar os filhos gerados
console.log(filhos_teste);


function encontrarRepeticoesEntreDoisFilhos(filhos, indiceFilhoA, indiceFilhoB) {
    const filhoA = filhos[indiceFilhoA];
    const filhoB = filhos[indiceFilhoB];
    
    let repeticoes = []; // Armazena detalhes dos genes repetidos entre os dois filhos

    // Verifica se algum gene de filhoA está repetido em filhoB
    filhoA.cromo.forEach((idA, indexA) => {
        if (filhoB.cromo.includes(idA)) {
            // Encontrou uma repetição entre filhoA e filhoB
            const indexB = filhoB.cromo.indexOf(idA); // Encontra o índice correspondente no filhoB
            repeticoes.push({
                indice:indexA,
                id: idA,
                fitB: filhoB.fit[indexB],
                nomeB: filhoB.nomes[indexB],
                levelB: filhoB.levels[indexB]
            });
        }
    });

    return repeticoes; // Retorna a lista de genes repetidos entre os dois filhos
}

// Supondo que 'filhos_teste' é sua lista de filhos e você quer comparar o filho 0 com o filho 1
let repeticoesEntreFilhos = encontrarRepeticoesEntreDoisFilhos(filhos_teste, 0, 1);

console.log('Repetidos: ',repeticoesEntreFilhos);


function encontrarSubstitutoSimilar(idOriginal, cromossomoAtual, fitAtual, levelAtual, pessoa) {
    // Filtra candidatos que têm o mesmo nível e um fit técnico similar ou superior, e que não estão no cromossomo atual
    let substitutos = pessoa.filter(p => 
        p.level === levelAtual && 
        !cromossomoAtual.includes(p.user_id) &&
        p.fit >= fitAtual // Aqui você pode ajustar a comparação de fit conforme necessário
    );

    if (substitutos.length > 0) {
        // Se existem substitutos, seleciona um aleatoriamente
        let selecaoAleatoria = Math.floor(Math.random() * substitutos.length);
        return substitutos[selecaoAleatoria];
    } else {
        // Se não encontrar nenhum substituto adequado, retorna null ou uma ação alternativa
        return null;
    }
}



// Supondo que 'repeticoesEntreFilhos' é a saída que mostra os membros repetidos
repeticoesEntreFilhos.forEach(repetido => {
    console.log('indiceParaSubstituirNoFilho1', repetido.indice);
    console.log('entao vou mudar filhos[1].cromo o valor', filhos_teste[1].cromo[repetido.indice]);
    
    // Procede com a busca por um substituto
    let substituto = encontrarSubstitutoSimilar(
        repetido.id, 
        filhos_teste[1].cromo, 
        repetido.fitB, 
        repetido.levelB, 
        pessoa // O pool de candidatos
    );

    if (substituto) {
        // Se encontrou um substituto, realiza a substituição no cromossomo, nomes, levels, e fit do filho 1
        filhos_teste[1].cromo[repetido.indice] = substituto.user_id;
        filhos_teste[1].nomes[repetido.indice] = substituto.name; // Asegure-se de que a chave seja 'name'
        filhos_teste[1].levels[repetido.indice] = substituto.level;
        filhos_teste[1].fit[repetido.indice] = substituto.fit;
        console.log(`Substituído ID ${repetido.id} por ${substituto.user_id} no índice ${repetido.indice}`);
    } else {
        console.log('Nenhum substituto adequado encontrado para:', repetido.nomeB);
    }
});





    
  
        /*
        // Gerando dois filhos a partir dos pais
        for (let u = 0; u < 2; u++) {
            let filho = {cromo: [], fit: [], nomes: [], total_fit: 0};
            let genesUnicos = new Set(); // Usado para garantir unicidade
            let corte = Math.floor(Math.random() * (tamanho_equipe - 2)) + 1;
            let paisSegmentos = u % 2 === 0 ? [pais[0], pais[1]] : [pais[1], pais[0]];
            // Adiciona genes garantindo unicidade
            paisSegmentos[0].cromo.slice(0, corte).forEach(gene => genesUnicos.add(gene));
            paisSegmentos[1].cromo.slice(corte).forEach(gene => genesUnicos.add(gene));
            // Converta o Set de volta para array e atribua ao filho
            filho.cromo = Array.from(genesUnicos);
            // Adapte fit, nomes, etc., com base nos genes únicos
            filhos.push(filho);
        }

        */
        // Ordenação dos filhos por aptidão, do maior para o menor
        filhos_teste.sort((a, b) => b.total_fit - a.total_fit);
        console.log('--------------------->>>>>>>>>>>')
        console.log('filhos_teste')
        console.log(filhos_teste)


    
        // Passo 6: Mutação
        

        function calculaSimilaridadeParaUm(vetorProjeto, pessoa) {
          
            console.log('vetorProjeto',vetorProjeto)
            console.log('pessoa',pessoa)


            const k = vetorProjeto.length; // tamanho do vetor do projeto
        
            // Normalização do vetor de entrada do projeto
            const vetorProjetoNormalizado = vetorProjeto.map(valor => valor / 2); // Normaliza baseado no maxValor = 2
            
            // Normalização do vetor da pessoa (considerando ambos hardskills e metodologias)
            //const vetorPessoaNormalizado = pessoa.vetor_hardskill.concat(pessoa.vetor_metodologia)
               //                           .map(valor => valor / 2); // Normaliza baseado no maxValor = 2
            
            // Normalização do vetor da pessoa (considerando apenas hardskills)
            const vetorPessoaNormalizado = pessoa.vetor_hardskill.map(valor => valor / 2); // Normaliza baseado no maxValor = 2


            // Cálculo da similaridade de Manhattan
            const diferencaAbsoluta = vetorPessoaNormalizado.map((valor, indice) =>
                Math.abs(valor - vetorProjetoNormalizado[indice]));
            const somaDiferencas = diferencaAbsoluta.reduce((soma, valor) => soma + valor, 0);
            const similaridade = 1 - (somaDiferencas / k);
        
            return similaridade.toFixed(2); // Retorna o valor de similaridade ajustado para duas casas decimais
        }

        // Passo 6: Mutação
        let taxademutacao = 0.005; // 0,5%
        filhos_teste.forEach(filho => {
            filho.cromo.forEach((gene, index) => {
                let num = Math.random(); // Gera um número aleatório entre 0 e 1
                if (num < taxademutacao || num === taxademutacao) { // Verifica se vai ocorrer a mutação
                    let nivelDoGeneAtual = filho.levels[index];
                    // Filtra 'pessoa' para encontrar candidatos adequados para a mutação
                    let candidatosParaMutacao = pessoa.filter(p => p.level === nivelDoGeneAtual && p.user_id !== filho.cromo[index]);

                    if (candidatosParaMutacao.length > 0) {
                        let selecaoAleatoria = Math.floor(Math.random() * candidatosParaMutacao.length);
                        let candidatoSelecionado = candidatosParaMutacao[selecaoAleatoria];
                        
                        // Realiza a mutação
                        filho.cromo[index] = candidatoSelecionado.user_id;
                        filho.nomes[index] = candidatoSelecionado.name;
                        filho.fit[index] = calculaSimilaridadeParaUm(vetorProjeto, candidatoSelecionado)
                        console.log('candidatoSelecionado')
                        console.log(candidatoSelecionado)

                        console.log('===========================')
                        // Escrevendo de forma assíncrona
                        stringJSON.push((candidatoSelecionado));
                            

                    }
                }
            });
        });
        console.log('==============tamanho de filhos', filhos_teste.length)

        //console.log('========== tamanho de array de cromo antes de elitismo ',arrayde_cromo.length)


        //console.log('arrayde_cromo anted de remover duplicados',arrayde_cromo)
        // Passo antes: Remover cromossomos idênticos
        // Função para comparar se dois arrays têm os mesmos elementos, independente da ordem
       // function arraysSaoIguais(arr1, arr2) {
          //  if (arr1.length !== arr2.length) {
          //      return false;
           // }
            //const arr1Sorted = arr1.slice().sort();
            //const arr2Sorted = arr2.slice().sort();
            //for (let i = 0; i < arr1Sorted.length; i++) {
              //  if (arr1Sorted[i] !== arr2Sorted[i]) {
                 //   return false;
               // }
           // }
            //alert('achou duplicado: '+JSON.stringify(arr1))
            //return true;
       // }

        // Filtrar cromossomos únicos com base nos nomes
       // let indicesParaRemover = [];
        //arrayde_cromo.forEach((cromossomo, index) => {
         //   for (let i = 0; i < arrayde_cromo.length; i++) {
          //      if (i !== index && arraysSaoIguais(cromossomo.nomes, arrayde_cromo[i].nomes)) {
           //         indicesParaRemover.push(i);
            //    }
           // }
        //});

        // Removendo índices duplicados e ordenando em ordem decrescente para evitar problemas ao remover
        //indicesParaRemover = [...new Set(indicesParaRemover)].sort((a, b) => b - a);

        // Remover os cromossomos duplicados
       // indicesParaRemover.forEach(index => {
        //    arrayde_cromo.splice(index, 1);
        //});



       // console.log('arrayde_cromo DEPOIS de remover duplicados',arrayde_cromo)

        // Passo 7: Elitismo mantém os dois melhores indivíduos da população
        // Ordenar pelo fitness total, do maior para o menor
      //  arrayde_cromo.sort((a, b) => b.total_fit - a.total_fit);

        // Seleciona os N melhores indivíduos da população
       // const N = 2; // Define quantos dos melhores indivíduos manter
        //const melhoresIndividuos = arrayde_cromo.slice(0, N);

        // Atualiza a população para manter apenas os N melhores indivíduos
        //arrayde_cromo = [...melhoresIndividuos];

        //Passo 8: obtem  nova população
        //LIMPA SSARRAY POPUL
        arrayde_cromo = [];
console.log('--------------------elite---------')
console.log(elite[0])

        arrayde_cromo.push(elite[0]);

        for(let i=0; i<filhos_teste.length; i++){
            arrayde_cromo.push(filhos_teste[i])
        }


        arrayde_cromo.sort((a, b) => b.total_fit - a.total_fit);

        console.log('tamamho  da NOVA população',arrayde_cromo.length)
        console.log('população:',arrayde_cromo)

        //Passo 9: volta ao passo 2
        
            console.log('volta ao passo 2')
        //fim AG
        iteracaoAtual++;
    }
}

//const csv = Papa.unparse(arrayde_cromo)
//fs .writeFileSync('arrayde_cromo.csv',arrayde_cromo)


//salvar projetos em csv
// Função para converter objeto em formato de linha CSV

function objectToCSVRow(generation, index) {
    let csvRow = `Cromossomo: ${index},`;
    if (generation.cromo && Array.isArray(generation.cromo)) {
        csvRow += `IDs: [${generation.cromo.join(', ')}],`;
    } else {
        console.log(`Aviso: Propriedade 'cromo' indefinida ou não é um array no índice ${index}.`);
        csvRow += `IDs: [],`;
    }
    // Repita para as outras propriedades, conforme necessário
    csvRow += `Total Fit: ${generation.total_fit ? generation.total_fit.toFixed(2) : 'Indefinido'}\n`;
    return csvRow;
}


function objectToCSVRow(generation, index) {
    let csvRow = `Cromossomo: ${index},`;
    if (generation.cromo && Array.isArray(generation.cromo)) {
        csvRow += `IDs: [${generation.cromo.join(', ')}],`;
    } else {
        console.log(`Aviso: Propriedade 'cromo' indefinida ou não é um array no índice ${index}.`);
        csvRow += `IDs: [],`;
    }
    csvRow += `Nomes: [${generation.nomes.join(', ')}],`;
    csvRow += `Fit: [${generation.fit.join(', ')}],`;
    csvRow += `Nível: [${generation.levels.join(', ')}],`; // Usando 'generation.levels' em vez de 'generation.nível'
    csvRow += `Total Fit: ${generation.total_fit.toFixed(2)}\n`; // Usando 'generation.total_fit.toFixed(2)' para formatar
    return csvRow;
  }
  
  
  // Função para converter array em formato CSV
  function arrayToCSV(array) {
    let csv = '';
    array.forEach((object, index) => {
      csv += objectToCSVRow(object, index);
    });
    return csv;
  }
  


// Converter o array em CSV
console.log('sugestoes')
console.log(sugestoes[0])

const csvData = arrayToCSV(sugestoes);

// Salvar o CSV em um arquivo
//fs.writeFile('sugestoes_AG_5_6_8_100_0005.csv', csvData, 'utf8', err => {
  //if (err) {
  //  console.error('Erro ao salvar o arquivo CSV:', err);
  //} else {
   // console.log('Arquivo sugestoes_AG_4_10_7_100_0005.csv CSV salvo com sucesso.');
 // }
//});

fs.writeFile('genesMutados.json', JSON.stringify(stringJSON), err => {
    if (err) {
        console.error('Erro ao salvar o arquivo:', err);
    } else {
        console.log('Arquivo de genes mutados salvo com sucesso.');
    }
});
console.log('ag size');




const end = process.hrtime(start);
console.log(`Tempo de Execução do AG: ${end[0]} segundos e ${end[1] / 1000000} milissegundos`);




let titulo =' ' 

let timeline;

var user_name = ''
var user_profile = ''

//var conteudoo = arrayProje
//alert (arrayProj)
//alert('xx')

$(document).ready(funcao)

//timeline_init()


	
function funcao (){
		
		
		$.getJSON("/out_file", function(data) {
			
	   
			var texto = JSON.stringify(data);
		//alert(JSON.stringify(texto))
				timeline_init(texto)     
			});
			
			
		}
		
		function funcao2(){
	
		
			$.getJSON("/out_file", function(data) {
				
		
				var texto = JSON.stringify(data);
	
				var outfile_todo = eval(texto)
				var hist = []
				hist = outfile_todo[0].hist[0]
				var proje = []
				proje = outfile_todo[0].proje[0]
	
				
				
				analyze_history(hist,proje)
					
			});
	
			
				
		}
	
	
	
	//let equipe =  arrayProje;
	
	
	
	
	let aux = []
	let ano;
	
	let ano_inicio;
	let ano_fim;
	
	let options;
	let nome;
	let texto_team;
	let tech;
	let natureza;
	let inicio; 
	let fim ; 
	let tag1 ; 
	let tag2 ;
	let metodologia;
	
	let pessoas = []
		
		//alert(equipe)
		
	
	
	  function timeline_init(texto){
		var outfile_todo = eval(texto)
		
		//pega username e profile
		document.querySelector('#nome_usuario').textContent = outfile_todo[0].username
		document.querySelector('#perfil_usuario').textContent = '('+outfile_todo[0].profile+')'
		if(outfile_todo[0].profile == 'Project Manager'){
			document.getElementById("create").style.display = "block"; 
		}
		pessoas = outfile_todo[0].pessoas
	
		var txt = []
		txt = outfile_todo[0].proje[0]
		console.log(JSON.stringify(txt)) //exibe os objects
		let data = []
		 options = {
			phases: [
				{ start: 2020, end: 2022, indicatorsEvery: 1, share: .2 },
				{ start: 2022, end: 2023, indicatorsEvery: 1, share: .2, className: 'timeline-unused-phase' },
				{ start: 2023, end: 2024, indicatorsEvery: 1, share: .2 },
				{ start: 2024, end: 2025, indicatorsEvery: 1, share: .2, className: 'timeline-unused-phase' },
			],
			//formatHeader: function (v) {
				//if(v < 0) return -v + ' BC';
				//if(v > 0) return v + ' AD';
				//return 'AD';
			//},					
			barHeight: 36,
			fontSize: 16
		};
		//conteudo = $("#projetossalvos").val();
		
	for (let i=0; i< txt.length; i++){
		//alert(data.length) exibe tam de data
		data.push([
	
			{
				_id:txt[i]._id,
				id:txt[i].name, 
				start: txt[i].begin, 
				end: txt[i].end, 
				className: 'styleA', 
				
				popup_html: '<b>'+txt[i].name+'</b><br>Nature: '+txt[i].nature+'<br> Date Begin:&ensp;'+ txt[i].begin+'<br>  Date end:&ensp;'+ txt[i].end+'<br> Team:&ensp;'+txt[i].team+'  <br>   Percentage: '+txt[i].percentual+'  <br>  Technolgies: '+txt[i].technologies+'  <br>  Methodology: '+txt[i].method_proj+' '+' <br> <a href="#" onclick="funcao2()">History</a>'
				
			}
		]);
		
	}
	
		
		timeline = $('#timeline');
		
		
			timeline.simpleTimeline(options, data);				
			timeline.on('timeline:barclick', timeline_clicked);
			
			
	
		}	
		
		
	
		
	
		
	function timeline_clicked(e) {
		let clicked_item = $(e.target);
		
		let sel = $('.selected');
		sel.removeClass('selected');
		$('#clicked-item').empty();
		
		if(sel.length == 0 || sel.data('id') != clicked_item.data('id')) {
			clicked_item.addClass('selected');
			$('#clicked-item').text("You clicked " + clicked_item.data('id'));
	
			
		}					
	}
	
	function add_item() {
		ano_inicio;
		ano_fim;
		data = timeline.getTimelineData();
		nome = $("#title").val();
		nome = 'arrayProj'
		
		texto_team = localStorage.getItem('valueTexto');
		tech =  localStorage.getItem('valueText');
		
		metodologia = $("#method_proj").val();
		natureza;
		if ($("#natureza").val() == 0){
			natureza='Similar technology';
		}
		if ($("#natureza").val() == 1){
			natureza='Project already done';
		}
		if ($("#natureza").val() == 2){
			natureza='New technology';
		}
		
		
		 inicio = $("#usr1").val(); 
		fim = $("#usr2").val(); 
		 tag1 = $("#entrada").val(); 
		 tag2 = $("#entrada2").val(); 
		
		
		if(inicio.indexOf('2021') != -1) {
			ano_inicio = '2021';
		}
		if(inicio.indexOf('2022') != -1) {
			ano_inicio = '2022';
		}
		if(inicio.indexOf('2023') != -1) {
			ano_inicio = '2023';
		}
		if(inicio.indexOf('2024') != -1) {
			ano_inicio = '2024';
		}
		if(inicio.indexOf('2025') != -1) {
			ano_inicio = '2025';
		}
		if(fim.indexOf('2021') != -1) {
			ano_fim = '2021';
		}
		if(fim.indexOf('2022') != -1) {
			ano_fim = '2022';
		}
		if(fim.indexOf('2023') != -1) {
			ano_fim = '2023';
		}
		if(fim.indexOf('2024') != -1) {
			ano_fim = '2024';
		}
		if(fim.indexOf('2025') != -1) {
			ano_fim = '2025';
		}
		
		
	
		data.push([
			{
				id:nome, 
				start: ano_inicio, 
				end: ano_fim, 
				className: 'styleA', 
				
				popup_html: '<b>'+nome+'</b><br>Nature: '+natureza+'<br> Date Begin:&ensp;'+ inicio+'<br>  Date end:&ensp;'+ fim+'<br> Team:&ensp;'+texto_team+' <br> oioio <br>  Technolgies: '+tag1+' <br>  Methodology: '+metodologia+' '
				}
		]);
		
		
		//alert('nova equipe salva! '+texto_team);
		
		
						if (natureza.indexOf("Similar") != -1){
							localStorage.setItem('nature_update', 0);
						}
						if (natureza.indexOf("done") != -1){
							localStorage.setItem('nature_update', 1);
						}
						if (natureza.indexOf("New") != -1){
							localStorage.setItem('nature_update', 2);
						}
						
							
							localStorage.setItem('name_update', nome);
							
							localStorage.setItem('date_begin_update', inicio);
							localStorage.setItem('date_end_update', fim);	
	
	
						
							localStorage.setItem('technoogies_update', tag1);
							localStorage.setItem('soft_skill_update', tag2);
							
							
							localStorage.setItem('team_update', texto_team);
							
		
		timeline.setTimelineData(data).refreshTimeline();
							
	}
	
	 function update_project_o() {
		
				let sel_item_id = $('.selected').data('id');
	
				$('#id_up').val(sel_item_id)		
			
	}
	function create() {
		
				$('#action').val('create')		
			
	}
		
	function update_project_new() {
		let sel_item_id = $('.selected').data('id');
		$('#id_up').val(sel_item_id);	
		//alert('Selected Item ID:'); // Verificação adicional
		//alert(sel_item_id)
	}
	
	
	
	function remove_selected_item() {
		
		let sel_item_id = $('.selected').data('id');
	
		$('#id').val(sel_item_id)
	
		let data = timeline.getTimelineData();
		for(let l = 0; l < data.length; l++) {
			for(let i = 0; i < data[l].length; i++) {
				if(data[l][i].id == sel_item_id) {
					data[l].splice(i,1);
					if(data[l].length == 0)
						data.splice(l,1);
					timeline.setTimelineData(data).refreshTimeline();
					return;
				}
			}
		}					
	}
	
	let mychart = ''
	let data = {}
	let labels = []
	let config = {}
	
	function bind_popup() {
		let sel_item_id = $('.selected').data('id');
	
		
		if(typeof sel_item_id == 'undefined') {
			alert('Ain\'t nothin\' selected, yo!');
			return;
		}
		
		timeline.bindPopup(sel_item_id, '<p><b>Yo it\</p>');
	}
	
	//Charts
	
	
		
	
	
	function showChart(texto,qtd_tech,qtd_soft,qtd_team) {
		
		
	//selciona o projeto a ser exibido
	let sel_item_id = $('.selected').data('id')
	
	
	
	var txt = texto
	var project = ''
	for (let i=0; i< txt.length; i++){
		if(txt[i].name == sel_item_id){
			project = txt[i].name
		}
	}
	
	
	//project = project.toUpperCase()	
	
	
	
	document.querySelector(".popup").style.display = "block";
	
	//capturing context
	let ctx =  document.getElementById('myChart')
	
	
	
	  
	
	 labels = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	]
	
	 data = {
		labels,
		datasets: [
		{
			data:[qtd_tech, 0, 0, 0, 0, 0, 0, 0, 0],
			borderColor: "#3399ff",
			backgroundColor: "#3399ff",
			label: "Technologies"
		},
		{
			data:[qtd_soft, 0, 0, 0, 0, 0, 0, 0, 0],
			borderColor: "#00a86b",
			backgroundColor: "#00a86b",
			label: "Soft Skills"
		},
		{
			data:[qtd_team, 0, 0, 0, 0, 0, 0, 0, 0],
			borderColor: "#ff4f00",
			backgroundColor: "#ff4f00",
			label: "Team"
		}]
	}
	
	 config = {
		type: 'line',
		data: data,
		options: {
			responsive: true,
			
			interaction: {
				mode: 'index',
				intersect: false,
			},
			
		stacked: false,
			plugins: {
				title: {
				  display: true,
				  text: project.toUpperCase()+' - modification history'
				}
			  },
		}
	}
	
	
	//limpa text area
	$('#id').val('')
	
	mychart = new Chart(ctx, config)
	
	
	
	}
	
	function limpa(){
		
		
		
		mychart.destroy()
	}
	
	function analyze_history(hist,proje){
		
		
	let sel_item_id = $('.selected').data('id')
	
	var proj_id = ''
	var team_id = ''
	var tech_id = ''
	var proj_target = ''
	
	for (let i=0; i< proje.length; i++){
		if(proje[i].name == sel_item_id){
			proj_target = proje[i].name 
			proj_id = proje[i]._id
			team_id = proje[i].team
			tech_id = proje[i].technologies
			soft_id = proje[i].softskills
	
		}
	}
	
	let qtd_nature=0, qtd_begin=0, qtd_end=0, qtd_tech=0, qtd_soft=0, qtd_team=0
	//quantidade de modificações na equipe do projeto selecionado
	let aux_team = []
	
	//certifica que a equipe foi modificada pelo menos uma vez
	function verifica_se_tem_um_diferente(equipa){
		let tem = 0
		for(let i=0; i<hist.length; i++){
			if(hist[i].projectId == proj_id){
				if(hist[i].team != equipa){
					
					tem++
				}
			}
		}
		return tem
	}
		for(let i=0; i<hist.length; i++){
			if(hist[i].projectId == proj_id){//encontra no historico o projectid do proj selecionado
				//tem que ter pelo menos um diferente e ainda não ter sido adicionado ao vetor aux team
				// verifica se ainda não foi adicionado ao vetor aux   E   se tem algum diferente e se é diferente do ATUAL PQ SE FOR A MESMA NÃO MUDOU
				if((verifica_se_tem_equipe(hist[i].team) == 0) && (verifica_se_tem_um_diferente(team_id) != 0) && (hist[i].team != team_id)){ 
				
					aux_team.push(hist[i].team) 
				}
			}
		}
		function verifica_se_tem_equipe(team){ //passa o team
			let tem = 0
			for (let i=0; i<aux_team.length; i++){
			  if(aux_team[i].includes(team) === true){ //verifica em todos arrays de id de todos cromossomos se o id (auxi) já existe
				tem = 1
			  }
			}
			return tem
		  }
		  qtd_team = aux_team.length
	//alert('o projeto '+proj_target+' teve a equipe modificada '+qtd_team+' vezes')
	//<<<<<<<<========                             ==========>>>>>>>>
	
	//quantidade de modificações nas tecnologias do projeto selecionado
	let aux_tech = []
	
	//certifica que a technologie foi modificada pelo menos uma vez
	if(verifica_se_tem_um_tech__diferente(tech_id) != 0){
		aux_tech.push(tech_id)
	}
	function verifica_se_tem_um_tech__diferente(techn){
		let tem = 0
		for(let i=0; i<hist.length; i++){
			if(hist[i].projectId == proj_id){
				if(hist[i].technologies != techn){
					
					tem++
				}
			}
		}
		return tem
	}
		for(let i=0; i<hist.length; i++){
			if(hist[i].projectId == proj_id){//encontra no historico o projectid do proj selecionado
				//tem que ter pelo menos um diferente e ainda não ter sido adicionado ao vetor aux team
				if((verifica_se_ja_tem_tech(hist[i].technologies) == 0) && (verifica_se_tem_um_tech__diferente(tech_id) != 0) && (hist[i].technologies != tech_id)){
				
					aux_tech.push(hist[i].technologies) 
				}
			}
		}
		function verifica_se_ja_tem_tech(techno){ //passa o techno
			let tem = 0
			for (let i=0; i<aux_tech.length; i++){
			  if(aux_tech[i].includes(techno) === true){ //verifica em todos arrays de id de todos cromossomos se o id (auxi) já existe
				tem = 1
			  }
			}
			return tem
		  }
		  qtd_tech = aux_tech.length
	//alert('o projeto '+proj_target+' teve as tecnologias modificadas '+qtd_tech+' vezes')
	//<<<<<<<<========                             ==========>>>>>>>>
	
	
	//quantidade de modificações nas softskills do projeto selecionado
	let aux_soft = []
	
	//certifica que a equipe foi modificada pelo menos uma vez
	function verifica_se_tem_um_soft_diferente(soft){
		let tem = 0
		for(let i=0; i<hist.length; i++){
			if(hist[i].projectId == proj_id){
				if(hist[i].softskills != soft){	
					tem++
				}
			}
		}
		return tem
	}
		for(let i=0; i<hist.length; i++){
			if(hist[i].projectId == proj_id){//encontra no historico o projectid do proj selecionado
				//tem que ter pelo menos um diferente e ainda não ter sido adicionado ao vetor aux team
				if((verifica_se_tem_soft(hist[i].softskills) == 0) && (verifica_se_tem_um_soft_diferente(soft_id) != 0) && (hist[i].softskills != soft_id)) {
				
					aux_soft.push(hist[i].softskills) 
				}
			}
		}
		function verifica_se_tem_soft(soft){ //passa o team
			let tem = 0
			for (let i=0; i<aux_soft.length; i++){
			  if(aux_soft[i].includes(soft) === true){ //verifica em todos arrays de id de todos cromossomos se o id (auxi) já existe
				tem = 1
			  }
			}
			return tem
		  }
		  qtd_soft = aux_soft.length
	//alert('o projeto '+proj_target+' teve Soft Skills modificada '+qtd_soft+' vezes')
	//<<<<<<<<========                             ==========>>>>>>>>
	
	
	showChart(proje,qtd_tech,qtd_soft,qtd_team)
	
	
	}
	

	
	//REGISTRAR data
	//registrar perfil se eh diretor ou GP
	//REGISTRAR PORCENTAGEM DAS EQUIPES  <<<<<<<<------------
	//REGISTRAR O MES DE MODIFICAÇÃO  <<<<<<<<-------------------
	
	
	module.exports =  pessoas












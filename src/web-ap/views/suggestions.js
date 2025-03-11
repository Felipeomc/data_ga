


$(document).ready(function() {
$('.tipe').next().hide(); 
			
			
			
		
				
				let porcentagens_hard = [];
				let pessoas = [];
				let niveis = [];
				let qtd_soft_skills = [];


				
			

				let novos_niveis = [];
				let novos_soft_skills = [];
				
				let novos_niveis2 = [];
				let novos_soft_skills2 = [];
				let indice_i, indice_j;


				let menor_hard;
				let menor_soft;

				let maior_hard;
				let maior_soft;

				let p,f;
				let pode=0;
				let pode_niveis=0;

				//alert('porcentagens_hard '+porcentagens_hard );
					
				let qtd_master=0;
				let qtd_senior=0;
				let qtd_pleno=0;
				let qtd_junior=0;
		//===================================


				let ig;

				let soft;

   
				let a=1;
				
				
				let porcentagem_sugestao2;
				let porcentagem_sugestao1;
				
				
				
				let equipe1 = [];
				let equipe2 = [];
				let equipe = [];
				let nova_equipe1  = [];
				let nova_equipe2  = [];
				
				
				let porc_equipe1 = [];
					
					
					
					let texts = [];
					
				let porc_equipe =[];
				let porc_equipe2 =[];
				
				$( "#botao" ).click(function() {
					inicia();
					
					});	
					
				function inicia(){
					

					document.getElementById("sugestao1").style.display = "block";
					document.getElementById("sugestao2").style.display = "block";
					
				//restart let

				//===================================
				
								
				 porcentagens_hard = [];
				 pessoas = [];
				 niveis = [];
				 qtd_soft_skills = [];


				 porc_equipe =[];
				 porc_equipe2 =[];
				 menor_dist_hard=0;
				 menor_dist_soft=0;

				 maior_dist_hard=0;
				 maior_dist_soft=0;

				 novos_niveis = [];
				 novos_soft_skills = [];
				
				 novos_niveis2 = [];
				 novos_soft_skills2 = [];
				


				
				 pode=0;
				 pode_niveis=0;

				//alert('porcentagens_hard '+porcentagens_hard );
					
				 qtd_master=0;
				 qtd_senior=0;
				 qtd_pleno=0;
				 qtd_junior=0;
		//===================================


				
   
				 a=1;
				
				
				
				
				 kiran_sugest1=1;
				 fred_sugest1=1;
				 alice_sugest1=1;
				 dave_sugest1=1;
				
				 bob_sugest1=1;
				 marcos_sugest1=1;
				 julia_sugest1=1;
				 nick_sugest1=1;
				 
				 paul_sugest1=1;
				 doug_sugest1=1;
				 ana_sugest1=1;
				 rita_sugest1=1;
				 
				 peter_sugest1=1;
				 claudio_sugest1=1;
				 
				 livia_sugest1=1;
				 glaucia_sugest1=1;
				
				 kiran2_sugest1=1;
				 fred2_sugest1=1;
				 alice2_sugest1=1;
				 dave2_sugest1=1;
				
				 bob2_sugest1=1;
				 marcos2_sugest1=1;
				 julia2_sugest1=1;
				 nick2_sugest1=1;
				 
				 paul2_sugest1=1;
				 doug2_sugest1=1;
				
  				 ana2_sugest1=1;
				 rita2_sugest1=1;
				 
				 peter2_sugest1=1;
				 claudio2_sugest1=1;
				 
				 livia2_sugest1=1;
				 glaucia2_sugest1=1;
				
				 equipe1 = [];
				 equipe = [];
				 nova_equipe1  = [];
				 nova_equipe2  = [];
					 porc_equipe1 = [];
					
					 equipe2 = [];
					 porc_equipe2 = [];
					
					
					
				
				 texts = [];
				
						
				document.getElementById("similarprojects").style.display = "none";
				
				
				document.getElementById("criatividade_fred").style.display = "none";
				document.getElementById("proatividade_fred").style.display = "none";	
				document.getElementById("lideranca_fred").style.display = "none";
				document.getElementById("interacao_fred").style.display = "none";
				document.getElementById("iniciativa_fred").style.display = "none";
				document.getElementById("comunicacao_fred").style.display = "none";	
				
				document.getElementById("criatividade_kiran").style.display = "none";
				document.getElementById("proatividade_kiran").style.display = "none";	
				document.getElementById("lideranca_kiran").style.display = "none";
				document.getElementById("interacao_kiran").style.display = "none";
				document.getElementById("iniciativa_kiran").style.display = "none";
				document.getElementById("comunicacao_kiran").style.display = "none";
				
				document.getElementById("criatividade_alice").style.display = "none";
				document.getElementById("proatividade_alice").style.display = "none";	
				document.getElementById("lideranca_alice").style.display = "none";
				document.getElementById("interacao_alice").style.display = "none";
				document.getElementById("iniciativa_alice").style.display = "none";
				document.getElementById("comunicacao_alice").style.display = "none";
				
				document.getElementById("criatividade_dave").style.display = "none";
				document.getElementById("proatividade_dave").style.display = "none";	
				document.getElementById("lideranca_dave").style.display = "none";
				document.getElementById("interacao_dave").style.display = "none";
				document.getElementById("iniciativa_dave").style.display = "none";
				document.getElementById("comunicacao_dave").style.display = "none";
				
				
				
				document.getElementById("criatividade_bob").style.display = "none";
				document.getElementById("proatividade_bob").style.display = "none";	
				document.getElementById("lideranca_bob").style.display = "none";
				document.getElementById("interacao_bob").style.display = "none";
				document.getElementById("iniciativa_bob").style.display = "none";
				document.getElementById("comunicacao_bob").style.display = "none";	
				
				document.getElementById("criatividade_marcos").style.display = "none";
				document.getElementById("proatividade_marcos").style.display = "none";	
				document.getElementById("lideranca_marcos").style.display = "none";
				document.getElementById("interacao_marcos").style.display = "none";
				document.getElementById("iniciativa_marcos").style.display = "none";
				document.getElementById("comunicacao_marcos").style.display = "none";
				
				document.getElementById("criatividade_julia").style.display = "none";
				document.getElementById("proatividade_julia").style.display = "none";	
				document.getElementById("lideranca_julia").style.display = "none";
				document.getElementById("interacao_julia").style.display = "none";
				document.getElementById("iniciativa_julia").style.display = "none";
				document.getElementById("comunicacao_julia").style.display = "none";
				
				document.getElementById("criatividade_nick").style.display = "none";
				document.getElementById("proatividade_nick").style.display = "none";	
				document.getElementById("lideranca_nick").style.display = "none";
				document.getElementById("interacao_nick").style.display = "none";
				document.getElementById("iniciativa_nick").style.display = "none";
				document.getElementById("comunicacao_nick").style.display = "none";
				
				
				
				document.getElementById("criatividade_paul").style.display = "none";
				document.getElementById("proatividade_paul").style.display = "none";	
				document.getElementById("lideranca_paul").style.display = "none";
				document.getElementById("interacao_paul").style.display = "none";
				document.getElementById("iniciativa_paul").style.display = "none";
				document.getElementById("comunicacao_paul").style.display = "none";
				
				document.getElementById("criatividade_doug").style.display = "none";
				document.getElementById("proatividade_doug").style.display = "none";	
				document.getElementById("lideranca_doug").style.display = "none";
				document.getElementById("interacao_doug").style.display = "none";
				document.getElementById("iniciativa_doug").style.display = "none";
				document.getElementById("comunicacao_doug").style.display = "none";
				
				document.getElementById("criatividade_ana").style.display = "none";
				document.getElementById("proatividade_ana").style.display = "none";	
				document.getElementById("lideranca_ana").style.display = "none";
				document.getElementById("interacao_ana").style.display = "none";
				document.getElementById("iniciativa_ana").style.display = "none";
				document.getElementById("comunicacao_ana").style.display = "none";
				
				document.getElementById("criatividade_rita").style.display = "none";
				document.getElementById("proatividade_rita").style.display = "none";	
				document.getElementById("lideranca_rita").style.display = "none";
				document.getElementById("interacao_rita").style.display = "none";
				document.getElementById("iniciativa_rita").style.display = "none";
				document.getElementById("comunicacao_rita").style.display = "none";
				
				
				
				document.getElementById("criatividade_peter").style.display = "none";
				document.getElementById("proatividade_peter").style.display = "none";	
				document.getElementById("lideranca_peter").style.display = "none";
				document.getElementById("interacao_peter").style.display = "none";
				document.getElementById("iniciativa_peter").style.display = "none";
				document.getElementById("comunicacao_peter").style.display = "none";
				
				
				document.getElementById("criatividade_claudio").style.display = "none";
				document.getElementById("proatividade_claudio").style.display = "none";	
				document.getElementById("lideranca_claudio").style.display = "none";
				document.getElementById("interacao_claudio").style.display = "none";
				document.getElementById("iniciativa_claudio").style.display = "none";
				document.getElementById("comunicacao_claudio").style.display = "none";
				
				document.getElementById("criatividade_livia").style.display = "none";
				document.getElementById("proatividade_livia").style.display = "none";	
				document.getElementById("lideranca_livia").style.display = "none";
				document.getElementById("interacao_livia").style.display = "none";
				document.getElementById("iniciativa_livia").style.display = "none";
				document.getElementById("comunicacao_livia").style.display = "none";
				
				document.getElementById("criatividade_glaucia").style.display = "none";
				document.getElementById("proatividade_glaucia").style.display = "none";	
				document.getElementById("lideranca_glaucia").style.display = "none";
				document.getElementById("interacao_glaucia").style.display = "none";
				document.getElementById("iniciativa_glaucia").style.display = "none";
				document.getElementById("comunicacao_glaucia").style.display = "none";
				
				
				
				document.getElementById("criatividade_fred2").style.display = "none";
				document.getElementById("proatividade_fred2").style.display = "none";	
				document.getElementById("lideranca_fred2").style.display = "none";
				document.getElementById("interacao_fred2").style.display = "none";
				document.getElementById("iniciativa_fred2").style.display = "none";
				document.getElementById("comunicacao_fred2").style.display = "none";	
				
				document.getElementById("criatividade_kiran2").style.display = "none";
				document.getElementById("proatividade_kiran2").style.display = "none";	
				document.getElementById("lideranca_kiran2").style.display = "none";
				document.getElementById("interacao_kiran2").style.display = "none";
				document.getElementById("iniciativa_kiran2").style.display = "none";
				document.getElementById("comunicacao_kiran2").style.display = "none";
				
				document.getElementById("criatividade_alice2").style.display = "none";
				document.getElementById("proatividade_alice2").style.display = "none";	
				document.getElementById("lideranca_alice2").style.display = "none";
				document.getElementById("interacao_alice2").style.display = "none";
				document.getElementById("iniciativa_alice2").style.display = "none";
				document.getElementById("comunicacao_alice2").style.display = "none";
				
				document.getElementById("criatividade_dave2").style.display = "none";
				document.getElementById("proatividade_dave2").style.display = "none";	
				document.getElementById("lideranca_dave2").style.display = "none";
				document.getElementById("interacao_dave2").style.display = "none";
				document.getElementById("iniciativa_dave2").style.display = "none";
				document.getElementById("comunicacao_dave2").style.display = "none";
				
				
				
				document.getElementById("criatividade_bob2").style.display = "none";
				document.getElementById("proatividade_bob2").style.display = "none";	
				document.getElementById("lideranca_bob2").style.display = "none";
				document.getElementById("interacao_bob2").style.display = "none";
				document.getElementById("iniciativa_bob2").style.display = "none";
				document.getElementById("comunicacao_bob2").style.display = "none";	
				
				document.getElementById("criatividade_marcos2").style.display = "none";
				document.getElementById("proatividade_marcos2").style.display = "none";	
				document.getElementById("lideranca_marcos2").style.display = "none";
				document.getElementById("interacao_marcos2").style.display = "none";
				document.getElementById("iniciativa_marcos2").style.display = "none";
				document.getElementById("comunicacao_marcos2").style.display = "none";
				
				document.getElementById("criatividade_julia2").style.display = "none";
				document.getElementById("proatividade_julia2").style.display = "none";	
				document.getElementById("lideranca_julia2").style.display = "none";
				document.getElementById("interacao_julia2").style.display = "none";
				document.getElementById("iniciativa_julia2").style.display = "none";
				document.getElementById("comunicacao_julia2").style.display = "none";
				
				document.getElementById("criatividade_nick2").style.display = "none";
				document.getElementById("proatividade_nick2").style.display = "none";	
				document.getElementById("lideranca_nick2").style.display = "none";
				document.getElementById("interacao_nick2").style.display = "none";
				document.getElementById("iniciativa_nick2").style.display = "none";
				document.getElementById("comunicacao_nick2").style.display = "none";
				
				document.getElementById("criatividade_paul2").style.display = "none";
				document.getElementById("proatividade_paul2").style.display = "none";	
				document.getElementById("lideranca_paul2").style.display = "none";
				document.getElementById("interacao_paul2").style.display = "none";
				document.getElementById("iniciativa_paul2").style.display = "none";
				document.getElementById("comunicacao_paul2").style.display = "none";
				
				document.getElementById("criatividade_doug2").style.display = "none";
				document.getElementById("proatividade_doug2").style.display = "none";	
				document.getElementById("lideranca_doug2").style.display = "none";
				document.getElementById("interacao_doug2").style.display = "none";
				document.getElementById("iniciativa_doug2").style.display = "none";
				document.getElementById("comunicacao_doug2").style.display = "none";
				
				document.getElementById("criatividade_ana2").style.display = "none";
				document.getElementById("proatividade_ana2").style.display = "none";	
				document.getElementById("lideranca_ana2").style.display = "none";
				document.getElementById("interacao_ana2").style.display = "none";
				document.getElementById("iniciativa_ana2").style.display = "none";
				document.getElementById("comunicacao_ana2").style.display = "none";
				
				document.getElementById("criatividade_rita2").style.display = "none";
				document.getElementById("proatividade_rita2").style.display = "none";	
				document.getElementById("lideranca_rita2").style.display = "none";
				document.getElementById("interacao_rita2").style.display = "none";
				document.getElementById("iniciativa_rita2").style.display = "none";
				document.getElementById("comunicacao_rita2").style.display = "none";
				
				
				document.getElementById("criatividade_peter2").style.display = "none";
				document.getElementById("proatividade_peter2").style.display = "none";	
				document.getElementById("lideranca_peter2").style.display = "none";
				document.getElementById("interacao_peter2").style.display = "none";
				document.getElementById("iniciativa_peter2").style.display = "none";
				document.getElementById("comunicacao_peter2").style.display = "none";
				
				
				document.getElementById("criatividade_claudio2").style.display = "none";
				document.getElementById("proatividade_claudio2").style.display = "none";	
				document.getElementById("lideranca_claudio2").style.display = "none";
				document.getElementById("interacao_claudio2").style.display = "none";
				document.getElementById("iniciativa_claudio2").style.display = "none";
				document.getElementById("comunicacao_claudio2").style.display = "none";
				
				document.getElementById("criatividade_livia2").style.display = "none";
				document.getElementById("proatividade_livia2").style.display = "none";	
				document.getElementById("lideranca_livia2").style.display = "none";
				document.getElementById("interacao_livia2").style.display = "none";
				document.getElementById("iniciativa_livia2").style.display = "none";
				document.getElementById("comunicacao_livia2").style.display = "none";
				
				document.getElementById("criatividade_glaucia2").style.display = "none";
				document.getElementById("proatividade_glaucia2").style.display = "none";	
				document.getElementById("lideranca_glaucia2").style.display = "none";
				document.getElementById("interacao_glaucia2").style.display = "none";
				document.getElementById("iniciativa_glaucia2").style.display = "none";
				document.getElementById("comunicacao_glaucia2").style.display = "none";
				
				
				
						
						 $("#kiran").animate({
								top:"0",
								left:"0"
						}, 200);
						 $("#kiran2").animate({
								top:"0",
								left:"0"
						}, 200);
						 $("#fred").animate({
								top:"0",
								left:"0"
						}, 200);
						 $("#fred2").animate({
								top:"0",
								left:"0"
						}, 200);
						 $("#alice").animate({
								top:"0",
								left:"0"
						}, 200);
						 $("#alice2").animate({
								top:"0",
								left:"0"
						}, 200);
						$("#dave").animate({
								top:"0",
								left:"0"
						}, 200);
						 $("#dave2").animate({
								top:"0",
								left:"0"
						}, 200);
						$("#bob").animate({
								top:"0",
								left:"0"
						}, 200);
						 $("#bob2").animate({
								top:"0",
								left:"0"
						}, 200);
						$("#marcos").animate({
								top:"0",
								left:"0"
						}, 200);
						 $("#marcos2").animate({
								top:"0",
								left:"0"
						}, 200);
						$("#julia").animate({
								top:"0",
								left:"0"
						}, 200);
						 $("#julia2").animate({
								top:"0",
								left:"0"
						}, 200);
						$("#nick").animate({
								top:"0",
								left:"0"
						}, 200);
						 $("#nick2").animate({
								top:"0",
								left:"0"
						}, 200);
						
						
						 $("#paul").animate({
								top:"0",
								left:"0"
						}, 200);
						 $("#paul2").animate({
								top:"0",
								left:"0"
						}, 200);
						
						$("#doug").animate({
								top:"0",
								left:"0"
						}, 200);
						 $("#doug2").animate({
								top:"0",
								left:"0"
						}, 200);
						
						
						$("#ana").animate({
								top:"0",
								left:"0"
						}, 200);
						 $("#ana2").animate({
								top:"0",
								left:"0"
						}, 200);
						
						
						$("#rita").animate({
								top:"0",
								left:"0"
						}, 200);
						 $("#rita2").animate({
								top:"0",
								left:"0"
						}, 200);
						
						
						$("#peter").animate({
								top:"0",
								left:"0"
						}, 200);
						 $("#peter2").animate({
								top:"0",
								left:"0"
						}, 200);
						
						
						$("#claudio").animate({
								top:"0",
								left:"0"
						}, 200);
						 $("#claudio2").animate({
								top:"0",
								left:"0"
						}, 200);
						
						
						$("#livia").animate({
								top:"0",
								left:"0"
						}, 200);
						 $("#livia2").animate({
								top:"0",
								left:"0"
						}, 200);
						
						
						$("#glaucia").animate({
								top:"0",
								left:"0"
						}, 200);
						 $("#glaucia2").animate({
								top:"0",
								left:"0"
						}, 200);
						
						
				
				porcentagem_kiran=0;
				porcentagem_sugestao2=0;
				porcentagem_sugestao1=0;
				
				
				
						 ig = $('#entrada').val();
						
						$('#txtdigitado').val(ig+' \n');
						
						
						soft = $('#entrada2').val();
						alert("Technologies: "+ig+"\nSoft Skills: "+soft);
						$('#txtdigitado2').val(soft+' \n');
						
						
						
					 qtd_tags_kiran = 0;
					 qtd_tags_fred = 0;
					 qtd_tags_alice = 0;
					 qtd_tags_dave = 0;
					
					porcentagem_kiran = 0;
					porcentagem_fred = 0;
					porcentagem_alice = 0;
					porcentagem_dave = 0;
					
					 qtd_tags_bob = 0;
					 qtd_tags_marcos = 0;
					 qtd_tags_julia = 0;
					 qtd_tags_nick = 0;
					 
					 qtd_tags_paul = 0;
					 qtd_tags_doug = 0;
					 qtd_tags_ana = 0;
					 qtd_tags_rita = 0;
					 
					  qtd_tags_peter = 0;
					  qtd_tags_claudio = 0;
					  
					  qtd_tags_livia = 0;
					  qtd_tags_glaucia = 0;
					
					porcentagem_bob = 0;
					porcentagem_marcos = 0;
					porcentagem_julia = 0;
					porcentagem_nick = 0;
					
					porcentagem_paul = 0;
					porcentagem_doug = 0;
					porcentagem_ana = 0;	
					porcentagem_rita = 0;
					
					porcentagem_peter = 0;
					porcentagem_claudio = 0;
					
					porcentagem_livia = 0;
					porcentagem_glaucia = 0;
					
					//MASTER
					let tags_kiran = ["web","WEB", "Web", "mvc", "MVC","Java","JAVA", "java"];	
					let tags_bob = ["spring","Spring", "SPRING","ANGULAR", "Angular","angular" ,"Javascript","JAVASCRIPT", "javascript"];	
					let tags_paul = ["Mobile","MOBILE", "mobile" , "javascript", "Javascript","JAVASCRIPT","mvc", "MVC", "Mvc"];	
					let tags_doug = ["Java","JAVA", "java","mvc", "MVC", "Mvc", "ANGULAR", "Angular","angular"];	
					
					//SENIOR
					let tags_alice = ["web","WEB", "Web", "mvc", "MVC","Java","JAVA", "java"];
					let tags_julia = ["spring","Spring", "SPRING","ANGULAR", "Angular","angular" ,"Javascript","JAVASCRIPT", "javascript"];
					let tags_peter = ["Mobile","MOBILE", "mobile" , "javascript", "Javascript","JAVASCRIPT","mvc", "MVC", "Mvc" ];	
					let tags_claudio = ["Java","JAVA", "java","mvc", "MVC", "Mvc", "ANGULAR", "Angular","angular" ];	
					
					//PLENO
					let tags_fred = ["web","WEB", "Web", "mvc", "MVC","Java","JAVA", "java"];
					let tags_marcos = ["spring","Spring", "SPRING","ANGULAR", "Angular","angular" ,"Javascript","JAVASCRIPT", "javascript"];
					let tags_livia = ["Mobile","MOBILE", "mobile" , "javascript", "Javascript","JAVASCRIPT","mvc", "MVC", "Mvc"];	
					let tags_glaucia = ["Java","JAVA", "java","mvc", "MVC", "Mvc", "ANGULAR", "Angular","angular"];	
					
					//JUNIOR
					let tags_dave = ["web","WEB", "Web", "mvc", "MVC","Java","JAVA", "java"];	
					let tags_nick = ["spring","Spring", "SPRING","ANGULAR", "Angular","angular" ,"Javascript","JAVASCRIPT", "javascript"];	
					let tags_ana = ["Mobile","MOBILE", "mobile" , "javascript", "Javascript","JAVASCRIPT","mvc", "MVC", "Mvc"];	
					let tags_rita = ["Java","JAVA", "java","mvc", "MVC", "Mvc", "ANGULAR", "Angular","angular"];	
					
					
					
					//MASTER
					let softskills_kiran = ["Creativity","Communication","Initiative"];	
					let softskills_bob = ["Interaction","Leadership", "Proactivity" ];
					let softskills_paul = ["Creativity","Communication","Initiative"];
					let softskills_doug = ["Interaction","Proactivity","Initiative"];
					
					
					//SENIOR
					let softskills_alice = ["Creativity","Communication","Initiative"];
					let softskills_julia = ["Interaction","Leadership", "Proactivity" ];
					let softskills_peter = ["Creativity","Communication","Initiative"];
					let softskills_claudio = ["Interaction","Proactivity","Initiative"];
					
				
					//PLENO
					let softskills_fred = ["Creativity","Communication","Initiative"];
					let softskills_marcos = ["Interaction","Leadership", "Proactivity" ];
					let softskills_livia = ["Creativity","Communication","Initiative"];
					let softskills_glaucia = ["Interaction","Proactivity","Initiative"];
					
					
					//JUNIOR
					let softskills_dave = ["Creativity","Communication","Initiative"];
					let softskills_nick = ["Interaction","Leadership", "Proactivity" ];
					let softskills_ana = ["Creativity","Communication","Initiative"];
					let softskills_rita = ["Interaction","Proactivity","Initiative"];
					
					
					
					
					
					let lines = $('#txtdigitado').val().split(/,/);
					
					
					
					let softs = $('#txtdigitado2').val().split(/,/);
					let arraysoft = [];
					
					
					$("#kiran").css("display", "none");
					$("#fred").css("display", "none");
					$("#alice").css("display", "none");
					$("#dave").css("display", "none");
					$("#bob").css("display", "none");
					$("#marcos").css("display", "none");
					$("#julia").css("display", "none");
					$("#nick").css("display", "none");
					
					
					$("#paul").css("display", "none");
					$("#doug").css("display", "none");
					$("#ana").css("display", "none");
					$("#rita").css("display", "none");
					
					$("#peter").css("display", "none");
					$("#claudio").css("display", "none");
					
					$("#livia").css("display", "none");
					$("#glaucia").css("display", "none");
					
					
					$("#kiran2").css("display", "none");
					$("#fred2").css("display", "none");
					$("#alice2").css("display", "none");
					$("#dave2").css("display", "none");
					$("#bob2").css("display", "none");
					$("#marcos2").css("display", "none");
					$("#julia2").css("display", "none");
					$("#nick2").css("display", "none");
					
					$("#paul2").css("display", "none");
					$("#doug2").css("display", "none");
					$("#ana2").css("display", "none");
					$("#rita2").css("display", "none");
					
					$("#peter2").css("display", "none");
					$("#claudio2").css("display", "none");
					
					$("#livia2").css("display", "none");
					$("#glaucia2").css("display", "none");
					
					for (let i=0; i < lines.length; i++) {
					// coloca as tags no array TEXTS PARA TODOS.
						if (/\S/.test(lines[i])) {
							texts.push($.trim(lines[i]));
						}
					}

					
					for (let i=0; i < softs.length; i++) {
					// coloca as tags no array das SOFT SKILLS PARA TODOS.
						if (/\S/.test(softs[i])) {
							arraysoft.push($.trim(softs[i]));
						}
					}
					
					
					
					
					
					// verifica se existem as tags COMPATIVEIS COM KIRAN e ativa cada uma.
					for (let j=0; j < texts.length; j++) {
							let tag = texts[j];
							
						for (let i=0; i < tags_kiran.length; i++) {
							let hab=tags_kiran[i];
							
							if( tag == hab ){
								 
								 qtd_tags_kiran += 1;
								  
								 
							}
											
						}
					}
					
					porcentagem_kiran = ((qtd_tags_kiran*100)/texts.length);
					porcentagem_kiran = parseFloat(porcentagem_kiran.toFixed(1));
					
					$("#percentual_kiran").html(porcentagem_kiran+'%');
					$("#percentual_kiran2").html(porcentagem_kiran+'%');	
					
					
					
					
					
					// verifica se existem as tags COMPATIVEIS COM FRED e ativa cada uma.
					for (let j=0; j < texts.length; j++) {
							let tag = texts[j];
							
						for (let i=0; i < tags_fred.length; i++) {
							let hab=tags_fred[i];
							
							if( tag == hab ){
								 
								 qtd_tags_fred += 1;
								  
								 
							}
											
						}
					}
					
					porcentagem_fred = ((qtd_tags_fred*100)/texts.length);
					porcentagem_fred = parseFloat(porcentagem_fred.toFixed(1));
					
					$("#percentual_fred").html(porcentagem_fred+'%');
					$("#percentual_fred2").html(porcentagem_fred+'%');
						
					
					// verifica se existem as tags COMPATIVEIS COM ALICE e ativa cada uma.
					for (let j=0; j < texts.length; j++) {
							let tag = texts[j];
							
						for (let i=0; i < tags_alice.length; i++) {
							let hab=tags_alice[i];
							
							if( tag == hab ){
								 
								 qtd_tags_alice += 1;
								  
								 
							}
											
						}
					}
					
					porcentagem_alice = ((qtd_tags_alice*100)/texts.length);
					porcentagem_alice = parseFloat(porcentagem_alice.toFixed(1));
					
					$("#percentual_alice").html(porcentagem_alice+'%');
					$("#percentual_alice2").html(porcentagem_alice+'%');
					
					// verifica se existem as tags COMPATIVEIS COM DAVE e ativa cada uma.
					for (let j=0; j < texts.length; j++) {
							let tag = texts[j];
							
						for (let i=0; i < tags_dave.length; i++) {
							let hab=tags_dave[i];
							
							if( tag == hab ){
								 
								 qtd_tags_dave += 1;
								  
								 
							}
											
						}
					}
					
					porcentagem_dave = ((qtd_tags_dave*100)/texts.length);
					porcentagem_dave = parseFloat(porcentagem_dave.toFixed(1));
					
					$("#percentual_dave").html(porcentagem_dave+'%');	
					$("#percentual_dave2").html(porcentagem_dave+'%');
					
					// verifica se existem as tags COMPATIVEIS COM BOB e ativa cada uma.
					for (let j=0; j < texts.length; j++) {
							let tag = texts[j];
							
						for (let i=0; i < tags_bob.length; i++) {
							let hab=tags_bob[i];
							
							if( tag == hab ){
								 
								 qtd_tags_bob += 1;
								  
								 
							}
											
						}
					}
					
					porcentagem_bob = ((qtd_tags_bob*100)/texts.length);
					porcentagem_bob = parseFloat(porcentagem_bob.toFixed(1));
					
					$("#percentual_bob").html(porcentagem_bob+'%');	
					$("#percentual_bob2").html(porcentagem_bob+'%');
					
					// verifica se existem as tags COMPATIVEIS COM MARCOS e ativa cada uma.
					for (let j=0; j < texts.length; j++) {
							let tag = texts[j];
							
						for (let i=0; i < tags_marcos.length; i++) {
							let hab=tags_marcos[i];
							
							if( tag == hab ){
								 
								 qtd_tags_marcos += 1;
								  
								 
							}
											
						}
					}
					
					porcentagem_marcos = ((qtd_tags_marcos*100)/texts.length);
					porcentagem_marcos = parseFloat(porcentagem_marcos.toFixed(1));
					
					$("#percentual_marcos").html(porcentagem_marcos+'%');	
						$("#percentual_marcos2").html(porcentagem_marcos+'%');	
					
					// verifica se existem as tags COMPATIVEIS COM JULIA e ativa cada uma.
					for (let j=0; j < texts.length; j++) {
							let tag = texts[j];
							
						for (let i=0; i < tags_julia.length; i++) {
							let hab=tags_julia[i];
							
							if( tag == hab ){
								 
								 qtd_tags_julia += 1;
								  
								 
							}
											
						}
					}
					
					porcentagem_julia = ((qtd_tags_julia*100)/texts.length);
					porcentagem_julia = parseFloat(porcentagem_julia.toFixed(1));
					
					$("#percentual_julia").html(porcentagem_julia+'%');	
					$("#percentual_julia2").html(porcentagem_julia+'%');	
					
					
					// verifica se existem as tags COMPATIVEIS COM NICK e ativa cada uma.
					for (let j=0; j < texts.length; j++) {
							let tag = texts[j];
							
						for (let i=0; i < tags_nick.length; i++) {
							let hab=tags_nick[i];
							
							if( tag == hab ){
								 
								 qtd_tags_nick += 1;
								  
								 
							}
											
						}
					}
					
					porcentagem_nick = ((qtd_tags_nick*100)/texts.length);
					porcentagem_nick = parseFloat(porcentagem_nick.toFixed(1));
					$("#percentual_nick").html(porcentagem_nick+'%');
					$("#percentual_nick2").html(porcentagem_nick+'%');
					
					
					// verifica se existem as tags COMPATIVEIS COM PAUL e ativa cada uma.
					for (let j=0; j < texts.length; j++) {
							let tag = texts[j];
							
						for (let i=0; i < tags_paul.length; i++) {
							let hab=tags_paul[i];
							
							if( tag == hab ){
								 
								 qtd_tags_paul += 1;
								  
								 
							}
											
						}
					}
					
					porcentagem_paul = ((qtd_tags_paul*100)/texts.length);
					porcentagem_paul = parseFloat(porcentagem_paul.toFixed(1));
					
					$("#percentual_paul").html(porcentagem_paul+'%');
					$("#percentual_paul2").html(porcentagem_paul+'%');	
					
					
					// verifica se existem as tags COMPATIVEIS COM DOUG e ativa cada uma.
					for (let j=0; j < texts.length; j++) {
							let tag = texts[j];
							
						for (let i=0; i < tags_doug.length; i++) {
							let hab=tags_doug[i];
							
							if( tag == hab ){
								 
								 qtd_tags_doug += 1;
								  
								 
							}
											
						}
					}
					
					porcentagem_doug = ((qtd_tags_doug*100)/texts.length);
					porcentagem_doug = parseFloat(porcentagem_doug.toFixed(1));
					
					$("#percentual_doug").html(porcentagem_doug+'%');
					$("#percentual_doug2").html(porcentagem_doug+'%');	
					
					
					
					// verifica se existem as tags COMPATIVEIS COM ANA e ativa cada uma.
					for (let j=0; j < texts.length; j++) {
							let tag = texts[j];
							
						for (let i=0; i < tags_ana.length; i++) {
							let hab=tags_ana[i];
							
							if( tag == hab ){
								 
								 qtd_tags_ana += 1;
								  
								 
							}
											
						}
					}
					
					porcentagem_ana = ((qtd_tags_ana*100)/texts.length);
					porcentagem_ana = parseFloat(porcentagem_ana.toFixed(1));
					
					$("#percentual_ana").html(porcentagem_ana+'%');
					$("#percentual_ana2").html(porcentagem_ana+'%');	
					
					
					
					// verifica se existem as tags COMPATIVEIS COM RITA e ativa cada uma.
					for (let j=0; j < texts.length; j++) {
							let tag = texts[j];
							
						for (let i=0; i < tags_rita.length; i++) {
							let hab=tags_rita[i];
							
							if( tag == hab ){
								 
								 qtd_tags_rita += 1;
								  
								 
							}
											
						}
					}
					
					porcentagem_rita = ((qtd_tags_rita*100)/texts.length);
					porcentagem_rita = parseFloat(porcentagem_rita.toFixed(1));
					
					$("#percentual_rita").html(porcentagem_rita+'%');
					$("#percentual_rita2").html(porcentagem_rita+'%');	
					
					
					// verifica se existem as tags COMPATIVEIS COM PETER e ativa cada uma.
					for (let j=0; j < texts.length; j++) {
							let tag = texts[j];
							
						for (let i=0; i < tags_peter.length; i++) {
							let hab=tags_peter[i];
							
							if( tag == hab ){
								 
								 qtd_tags_peter += 1;
								  
								 
							}
											
						}
					}
					
					porcentagem_peter = ((qtd_tags_peter*100)/texts.length);
					porcentagem_peter = parseFloat(porcentagem_peter.toFixed(1));
					
					$("#percentual_peter").html(porcentagem_peter+'%');
					$("#percentual_peter2").html(porcentagem_peter+'%');	
					
					
					
					
					
					
					// verifica se existem as tags COMPATIVEIS COM CLAUDIO e ativa cada uma.
					for (let j=0; j < texts.length; j++) {
							let tag = texts[j];
							
						for (let i=0; i < tags_claudio.length; i++) {
							let hab=tags_claudio[i];
							
							if( tag == hab ){
								 
								 qtd_tags_claudio += 1;
								  
								 
							}
											
						}
					}
					
					porcentagem_claudio = ((qtd_tags_claudio*100)/texts.length);
					porcentagem_claudio = parseFloat(porcentagem_claudio.toFixed(1));
					
					$("#percentual_claudio").html(porcentagem_claudio+'%');
					$("#percentual_claudio2").html(porcentagem_claudio+'%');	
					
					// verifica se existem as tags COMPATIVEIS COM LIVIA e ativa cada uma.
					for (let j=0; j < texts.length; j++) {
							let tag = texts[j];
							
						for (let i=0; i < tags_livia.length; i++) {
							let hab=tags_livia[i];
							
							if( tag == hab ){
								 
								 qtd_tags_livia += 1;
								  
								 
							}
											
						}
					}
					
					porcentagem_livia = ((qtd_tags_livia*100)/texts.length);
					porcentagem_livia = parseFloat(porcentagem_livia.toFixed(1));
					
					$("#percentual_livia").html(porcentagem_livia+'%');
					$("#percentual_livia2").html(porcentagem_livia+'%');
					
					
					// verifica se existem as tags COMPATIVEIS COM GLAUCIA e ativa cada uma.
					for (let j=0; j < texts.length; j++) {
							let tag = texts[j];
							
						for (let i=0; i < tags_glaucia.length; i++) {
							let hab=tags_glaucia[i];
							
							if( tag == hab ){
								 
								 qtd_tags_glaucia += 1;
								  
								 
							}
											
						}
					}
					
					porcentagem_glaucia = ((qtd_tags_glaucia*100)/texts.length);
					porcentagem_glaucia = parseFloat(porcentagem_glaucia.toFixed(1));
					
					$("#percentual_glaucia").html(porcentagem_glaucia+'%');
					$("#percentual_glaucia2").html(porcentagem_glaucia+'%');
					
					
					
					//alert('tags_CLAUDIO '+tags_claudio+'qtd_tags_CLAUDIO '+qtd_tags_claudio+'porcentagem_CLAUDIO '+porcentagem_claudio);
					//alert('tags_LIVIA '+tags_livia+'qtd_tags_livia '+qtd_tags_livia+'porcentagem_livia '+porcentagem_livia);
					//alert('tags_GLAUCIA '+tags_glaucia+'qtd_tags_glaucia '+qtd_tags_glaucia+'porcentagem_glaucia '+porcentagem_glaucia);
					
					
					
					
					let qtd_devmaster = $( "#DevMast" ).val();
					let qtd_devmiddle = $( "#DevPleno" ).val();
					let qtd_devsenior = $( "#DevSeni" ).val();
					let qtd_devjunior = $( "#DevJuni" ).val();
					
					
					
					
					let kiranpode=0;
					let fredpode=0;
					let alicepode=0;
					let davepode=0;
					
					
					//let qtd_engmaster = $( "#EngMast" ).val();
					//let qtd_engmiddle = $( "#DevPleno" ).val();
					//let qtd_engsenior = $( "#EngSeni" ).val();
					//let qtd_engjunior = $( "#EngJuni" ).val();
					
					let bobpode=0;
					let marcospode=0;
					let juliapode=0;
					let nickpode=0;
					
					
					let paulpode=0;
					let dougpode=0;
					let anapode=0;
					let ritapode=0;
					
					let peterpode=0;
					let claudiopode=0;
					
					let liviapode=0;
					let glauciapode=0;
					
					let tamanho=0;
					
					
					if(qtd_devmaster>=1){
						tamanho=tamanho+1;
					}
					if(qtd_devmiddle>=1){
						tamanho=tamanho+1;
					}
					if(qtd_devsenior>=1){
						tamanho=tamanho+1;
					}
					if(qtd_devjunior>=1){
						tamanho=tamanho+1;
					}
					
					
					
					
					
					
					//=================SOFT KIRAN===================
					
					
					
					for (let j=0; j < arraysoft.length; j++) {
						for (let i=0; i < softskills_kiran.length; i++) {
					
								if ((arraysoft[j]) == 'Creativity'){
									document.getElementById("criatividade_kiran").style.display = "block";	
									document.getElementById("criatividade_kiran2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Proactivity'){
									document.getElementById("proatividade_kiran").style.display = "block";
									document.getElementById("proatividade_kiran2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Initiative'){
									document.getElementById("iniciativa_kiran").style.display = "block";
									document.getElementById("iniciativa_kiran2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Communication'){
									document.getElementById("comunicacao_kiran").style.display = "block";	
									document.getElementById("comunicacao_kiran2").style.display = "block";	
								}
								if ((arraysoft[j]) == 'Interaction'){
									document.getElementById("interacao_kiran").style.display = "block";
									document.getElementById("interacao_kiran2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Leadership'){
									document.getElementById("lideranca_kiran").style.display = "block";	
									document.getElementById("lideranca_kiran2").style.display = "block";	
								}
							
								
							
											
						}
						
					}
					//=================SOFT fred===================
					
					
					
					for (let j=0; j < arraysoft.length; j++) {
						for (let i=0; i < softskills_fred.length; i++) {
					
								if ((arraysoft[j]) == 'Creativity'){
									document.getElementById("criatividade_fred").style.display = "block";
									document.getElementById("criatividade_fred2").style.display = "block";									
								}
								if ((arraysoft[j]) == 'Proactivity'){
									document.getElementById("proatividade_fred").style.display = "block";
									document.getElementById("proatividade_fred2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Initiative'){
									document.getElementById("iniciativa_fred").style.display = "block";
									document.getElementById("iniciativa_fred2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Communication'){
									document.getElementById("comunicacao_fred").style.display = "block";
									document.getElementById("comunicacao_fred2").style.display = "block";									
								}
							
								if ((arraysoft[j]) == 'Interaction'){
									document.getElementById("interacao_fred").style.display = "block";
									document.getElementById("interacao_fred2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Leadership'){
									document.getElementById("lideranca_fred").style.display = "block";
									document.getElementById("lideranca_fred2").style.display = "block";									
								}
							
											
						}
						
					}
					
					//=================SOFT ALICEd===================
					
					
					
					for (let j=0; j < arraysoft.length; j++) {
						for (let i=0; i < softskills_alice.length; i++) {
					
								if ((arraysoft[j]) == 'Creativity'){
									document.getElementById("criatividade_alice").style.display = "block";
									document.getElementById("criatividade_alice2").style.display = "block";										
								}
								if ((arraysoft[j]) == 'Proactivity'){
									document.getElementById("proatividade_alice").style.display = "block";
									document.getElementById("proatividade_alice2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Initiative'){
									document.getElementById("iniciativa_alice").style.display = "block";
									document.getElementById("iniciativa_alice2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Communication'){
									document.getElementById("comunicacao_alice").style.display = "block";
									document.getElementById("comunicacao_alice2").style.display = "block";									
								}
							
								if ((arraysoft[j]) == 'Interaction'){
									document.getElementById("interacao_alice").style.display = "block";
									document.getElementById("interacao_alice2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Leadership'){
									document.getElementById("lideranca_alice").style.display = "block";	
									document.getElementById("lideranca_alice2").style.display = "block";
								}
							
											
						}
						
					}
					
					//=================SOFT DAVE===================
					
					
					
					for (let j=0; j < arraysoft.length; j++) {
						for (let i=0; i < softskills_dave.length; i++) {
					
								if ((arraysoft[j]) == 'Creativity'){
									document.getElementById("criatividade_dave").style.display = "block";
									document.getElementById("criatividade_dave2").style.display = "block";									
								}
								if ((arraysoft[j]) == 'Proactivity'){
									document.getElementById("proatividade_dave").style.display = "block";
									document.getElementById("proatividade_dave2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Initiative'){
									document.getElementById("iniciativa_dave").style.display = "block";
									document.getElementById("iniciativa_dave2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Communication'){
									document.getElementById("comunicacao_dave").style.display = "block";
									document.getElementById("comunicacao_dave2").style.display = "block";									
								}
							
								if ((arraysoft[j]) == 'Interaction'){
									document.getElementById("interacao_dave").style.display = "block";
									document.getElementById("interacao_dave2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Leadership'){
									document.getElementById("lideranca_dave").style.display = "block";	
									document.getElementById("lideranca_dave2").style.display = "block";	
								}
							
											
						}
						
					}
					
					
					//=================SOFT BOB===================
					
					
					
					for (let j=0; j < arraysoft.length; j++) {
						for (let i=0; i < softskills_bob.length; i++) {
					
								if ((arraysoft[j]) == 'Creativity'){
									document.getElementById("criatividade_bob").style.display = "block";
									document.getElementById("criatividade_bob2").style.display = "block";									
								}
								if ((arraysoft[j]) == 'Proactivity'){
									document.getElementById("proatividade_bob").style.display = "block";
									document.getElementById("proatividade_bob2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Initiative'){
									document.getElementById("iniciativa_bob").style.display = "block";
									document.getElementById("iniciativa_bob2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Communication'){
									document.getElementById("comunicacao_bob").style.display = "block";
									document.getElementById("comunicacao_bob2").style.display = "block";									
								}
							
								if ((arraysoft[j]) == 'Interaction'){
									document.getElementById("interacao_bob").style.display = "block";
									document.getElementById("interacao_bob2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Leadership'){
									document.getElementById("lideranca_bob").style.display = "block";
									document.getElementById("lideranca_bob2").style.display = "block";									
								}
							
											
						}
						
					}
					
					
					//=================SOFT MARCOS===================
					
					
					
					for (let j=0; j < arraysoft.length; j++) {
						for (let i=0; i < softskills_marcos.length; i++) {
					
								if ((arraysoft[j]) == 'Creativity'){
									document.getElementById("criatividade_marcos").style.display = "block";	
									document.getElementById("criatividade_marcos2").style.display = "block";	
								}
								if ((arraysoft[j]) == 'Proactivity'){
									document.getElementById("proatividade_marcos").style.display = "block";
									document.getElementById("proatividade_marcos2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Initiative'){
									document.getElementById("iniciativa_marcos").style.display = "block";
									document.getElementById("iniciativa_marcos2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Communication'){
									document.getElementById("comunicacao_marcos").style.display = "block";
									document.getElementById("comunicacao_marcos2").style.display = "block";										
								}
							
								if ((arraysoft[j]) == 'Interaction'){
									document.getElementById("interacao_marcos").style.display = "block";
									document.getElementById("interacao_marcos2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Leadership'){
									document.getElementById("lideranca_marcos").style.display = "block";	
									document.getElementById("lideranca_marcos2").style.display = "block";
								}
							
											
						}
						
					}
					
					//=================SOFT JULIA===================
					
					
					
					for (let j=0; j < arraysoft.length; j++) {
						for (let i=0; i < softskills_julia.length; i++) {
					
								if ((arraysoft[j]) == 'Creativity'){
									document.getElementById("criatividade_julia").style.display = "block";
									document.getElementById("criatividade_julia2").style.display = "block";									
								}
								if ((arraysoft[j]) == 'Proactivity'){
									document.getElementById("proatividade_julia").style.display = "block";
									document.getElementById("proatividade_julia2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Initiative'){
									document.getElementById("iniciativa_julia").style.display = "block";
									document.getElementById("iniciativa_julia2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Communication'){
									document.getElementById("comunicacao_julia").style.display = "block";
									document.getElementById("comunicacao_julia2").style.display = "block";									
								}
							
								if ((arraysoft[j]) == 'Interaction'){
									document.getElementById("interacao_julia").style.display = "block";
									document.getElementById("interacao_julia2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Leadership'){
									document.getElementById("lideranca_julia").style.display = "block";	
									document.getElementById("lideranca_julia2").style.display = "block";	
								}
							
											
						}
						
					}
					
					//=================SOFT NICK ===================
					
					
					
					for (let j=0; j < arraysoft.length; j++) {
						for (let i=0; i < softskills_nick.length; i++) {
					
								if ((arraysoft[j]) == 'Creativity'){
									document.getElementById("criatividade_nick").style.display = "block";
									document.getElementById("criatividade_nick2").style.display = "block";										
								}
								if ((arraysoft[j]) == 'Proactivity'){
									document.getElementById("proatividade_nick").style.display = "block";
									document.getElementById("proatividade_nick2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Initiative'){
									document.getElementById("iniciativa_nick").style.display = "block";
									document.getElementById("iniciativa_nick2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Communication'){
									document.getElementById("comunicacao_nick").style.display = "block";	
									document.getElementById("comunicacao_nick2").style.display = "block";	
								}
							
								if ((arraysoft[j]) == 'Interaction'){
									document.getElementById("interacao_nick").style.display = "block";
									document.getElementById("interacao_nick2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Leadership'){
									document.getElementById("lideranca_nick").style.display = "block";	
									document.getElementById("lideranca_nick2").style.display = "block";	
								}
							
											
						}
						
					}
					//=================SOFT PAUL ===================
					
					for (let j=0; j < arraysoft.length; j++) {
						for (let i=0; i < softskills_paul.length; i++) {
					
								if ((arraysoft[j]) == 'Creativity'){
									document.getElementById("criatividade_paul").style.display = "block";
									document.getElementById("criatividade_paul2").style.display = "block";										
								}
								if ((arraysoft[j]) == 'Proactivity'){
									document.getElementById("proatividade_paul").style.display = "block";
									document.getElementById("proatividade_paul2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Initiative'){
									document.getElementById("iniciativa_paul").style.display = "block";
									document.getElementById("iniciativa_paul2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Communication'){
									document.getElementById("comunicacao_paul").style.display = "block";	
									document.getElementById("comunicacao_paul2").style.display = "block";	
								}
							
								if ((arraysoft[j]) == 'Interaction'){
									document.getElementById("interacao_paul").style.display = "block";
									document.getElementById("interacao_paul2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Leadership'){
									document.getElementById("lideranca_paul").style.display = "block";	
									document.getElementById("lideranca_paul2").style.display = "block";	
								}
							
											
						}
						
					}
					
					//alert('softskills_doug:  '+softskills_doug);
					//=================SOFT DOUG ===================
					
					for (let j=0; j < arraysoft.length; j++) {
						for (let i=0; i < softskills_doug.length; i++) {
					
								if ((arraysoft[j]) == 'Creativity'){
									document.getElementById("criatividade_doug").style.display = "block";
									document.getElementById("criatividade_doug2").style.display = "block";										
								}
								if ((arraysoft[j]) == 'Proactivity'){
									document.getElementById("proatividade_doug").style.display = "block";
									document.getElementById("proatividade_doug2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Initiative'){
									document.getElementById("iniciativa_doug").style.display = "block";
									document.getElementById("iniciativa_doug2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Communication'){
									document.getElementById("comunicacao_doug").style.display = "block";	
									document.getElementById("comunicacao_doug2").style.display = "block";	
								}
							
								if ((arraysoft[j]) == 'Interaction'){
									document.getElementById("interacao_doug").style.display = "block";
									document.getElementById("interacao_doug2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Leadership'){
									document.getElementById("lideranca_doug").style.display = "block";	
									document.getElementById("lideranca_doug2").style.display = "block";	
								}
							
											
						}
						
					}
					
					
					//=================SOFT ANA ===================
					
					for (let j=0; j < arraysoft.length; j++) {
						for (let i=0; i < softskills_ana.length; i++) {
					
								if ((arraysoft[j]) == 'Creativity'){
									document.getElementById("criatividade_ana").style.display = "block";
									document.getElementById("criatividade_ana2").style.display = "block";										
								}
								if ((arraysoft[j]) == 'Proactivity'){
									document.getElementById("proatividade_ana").style.display = "block";
									document.getElementById("proatividade_ana2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Initiative'){
									document.getElementById("iniciativa_ana").style.display = "block";
									document.getElementById("iniciativa_ana2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Communication'){
									document.getElementById("comunicacao_ana").style.display = "block";	
									document.getElementById("comunicacao_ana2").style.display = "block";	
								}
							
								if ((arraysoft[j]) == 'Interaction'){
									document.getElementById("interacao_ana").style.display = "block";
									document.getElementById("interacao_ana2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Leadership'){
									document.getElementById("lideranca_ana").style.display = "block";	
									document.getElementById("lideranca_ana2").style.display = "block";	
								}
							
											
						}
						
					}
					//=================SOFT RITA JR ===================
					
					for (let j=0; j < arraysoft.length; j++) {
						for (let i=0; i < softskills_rita.length; i++) {
					
								if ((arraysoft[j]) == 'Creativity'){
									document.getElementById("criatividade_rita").style.display = "block";
									document.getElementById("criatividade_rita2").style.display = "block";										
								}
								if ((arraysoft[j]) == 'Proactivity'){
									document.getElementById("proatividade_rita").style.display = "block";
									document.getElementById("proatividade_rita2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Initiative'){
									document.getElementById("iniciativa_rita").style.display = "block";
									document.getElementById("iniciativa_rita2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Communication'){
									document.getElementById("comunicacao_rita").style.display = "block";	
									document.getElementById("comunicacao_rita2").style.display = "block";	
								}
							
								if ((arraysoft[j]) == 'Interaction'){
									document.getElementById("interacao_rita").style.display = "block";
									document.getElementById("interacao_rita2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Leadership'){
									document.getElementById("lideranca_rita").style.display = "block";	
									document.getElementById("lideranca_rita2").style.display = "block";	
								}
							
											
						}
						
					}
					
					//=================SOFT PETER SENIOR ===================
					
					for (let j=0; j < arraysoft.length; j++) {
						for (let i=0; i < softskills_peter.length; i++) {
					
								if ((arraysoft[j]) == 'Creativity'){
									document.getElementById("criatividade_peter").style.display = "block";
									document.getElementById("criatividade_peter2").style.display = "block";										
								}
								if ((arraysoft[j]) == 'Proactivity'){
									document.getElementById("proatividade_peter").style.display = "block";
									document.getElementById("proatividade_peter2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Initiative'){
									document.getElementById("iniciativa_peter").style.display = "block";
									document.getElementById("iniciativa_peter2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Communication'){
									document.getElementById("comunicacao_peter").style.display = "block";	
									document.getElementById("comunicacao_peter2").style.display = "block";	
								}
							
								if ((arraysoft[j]) == 'Interaction'){
									document.getElementById("interacao_peter").style.display = "block";
									document.getElementById("interacao_peter2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Leadership'){
									document.getElementById("lideranca_peter").style.display = "block";	
									document.getElementById("lideranca_peter2").style.display = "block";	
								}
							
											
						}
						
					}
					
					
					
					//=================SOFT CLAUDIO SENIOR ===================
					
					for (let j=0; j < arraysoft.length; j++) {
						for (let i=0; i < softskills_claudio.length; i++) {
					
								if ((arraysoft[j]) == 'Creativity'){
									document.getElementById("criatividade_claudio").style.display = "block";
									document.getElementById("criatividade_claudio2").style.display = "block";										
								}
								if ((arraysoft[j]) == 'Proactivity'){
									document.getElementById("proatividade_claudio").style.display = "block";
									document.getElementById("proatividade_claudio2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Initiative'){
									document.getElementById("iniciativa_claudio").style.display = "block";
									document.getElementById("iniciativa_claudio2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Communication'){
									document.getElementById("comunicacao_claudio").style.display = "block";	
									document.getElementById("comunicacao_claudio2").style.display = "block";	
								}
							
								if ((arraysoft[j]) == 'Interaction'){
									document.getElementById("interacao_claudio").style.display = "block";
									document.getElementById("interacao_claudio2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Leadership'){
									document.getElementById("lideranca_claudio").style.display = "block";	
									document.getElementById("lideranca_claudio2").style.display = "block";	
								}
							
											
						}
						
					}
					
					
					
					//=================SOFT LIVIA PLENO ===================
					
					for (let j=0; j < arraysoft.length; j++) {
						for (let i=0; i < softskills_livia.length; i++) {
					
								if ((arraysoft[j]) == 'Creativity'){
									document.getElementById("criatividade_livia").style.display = "block";
									document.getElementById("criatividade_livia2").style.display = "block";										
								}
								if ((arraysoft[j]) == 'Proactivity'){
									document.getElementById("proatividade_livia").style.display = "block";
									document.getElementById("proatividade_livia2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Initiative'){
									document.getElementById("iniciativa_livia").style.display = "block";
									document.getElementById("iniciativa_livia2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Communication'){
									document.getElementById("comunicacao_livia").style.display = "block";	
									document.getElementById("comunicacao_livia2").style.display = "block";	
								}
							
								if ((arraysoft[j]) == 'Interaction'){
									document.getElementById("interacao_livia").style.display = "block";
									document.getElementById("interacao_livia2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Leadership'){
									document.getElementById("lideranca_livia").style.display = "block";	
									document.getElementById("lideranca_livia2").style.display = "block";	
								}
							
											
						}
						
					}
					
					
					//=================SOFT GLAUCIA PLENO ===================
					
					for (let j=0; j < arraysoft.length; j++) {
						for (let i=0; i < softskills_glaucia.length; i++) {
					
								if ((arraysoft[j]) == 'Creativity'){
									document.getElementById("criatividade_glaucia").style.display = "block";
									document.getElementById("criatividade_glaucia2").style.display = "block";										
								}
								if ((arraysoft[j]) == 'Proactivity'){
									document.getElementById("proatividade_glaucia").style.display = "block";
									document.getElementById("proatividade_glaucia2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Initiative'){
									document.getElementById("iniciativa_glaucia").style.display = "block";
									document.getElementById("iniciativa_glaucia2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Communication'){
									document.getElementById("comunicacao_glaucia").style.display = "block";	
									document.getElementById("comunicacao_glaucia2").style.display = "block";	
								}
							
								if ((arraysoft[j]) == 'Interaction'){
									document.getElementById("interacao_glaucia").style.display = "block";
									document.getElementById("interacao_glaucia2").style.display = "block";
								}
								if ((arraysoft[j]) == 'Leadership'){
									document.getElementById("lideranca_glaucia").style.display = "block";	
									document.getElementById("lideranca_glaucia2").style.display = "block";	
								}
							
											
						}
						
					}
					
					
					
					
					
					if((tamanho>=1) && (qtd_tags_kiran>0) && (qtd_devmaster>=1)){
						kiranpode=1;
					}
					if((tamanho==0) && (qtd_tags_kiran==0) && (qtd_devmaster==0)) {
						kiranpode=0;
						$("#kiran").css("display", "none");
					}
					
					
					
					
					
					if((tamanho>=1) && (qtd_tags_fred>0) && (qtd_devmiddle>=1)){
						fredpode=1;
					}
					if((tamanho==0) && (qtd_tags_fred==0)&& (qtd_devmiddle==0)) {
						fredpode=0;
						$("#fred").css("display", "none");
					}
					
					
					if((tamanho>=1) && (qtd_tags_alice>0) && (qtd_devsenior>=1)){
						alicepode=1;
					}
					if((tamanho==0) && (qtd_tags_alice==0) && (qtd_devsenior==0)) {
						alicepode=0;
						$("#alice").css("display", "none");
					}
					
					
					if((tamanho>=1) && (qtd_tags_dave>0) && (qtd_devjunior>=1)){
						davepode=1;
					}
					if((tamanho==0) && (qtd_tags_dave==0)  && (qtd_devjunior==0)) {
						davepode=0;
						$("#dave").css("display", "none");
					}
					
					
					if((tamanho>=1) && (qtd_tags_bob>0)  && (qtd_devmaster>=1)){
						bobpode=1;
					}
					if((tamanho==0) && (qtd_tags_bob==0) && (qtd_devmaster==0)) {
						bobpode=0;
						$("#bob").css("display", "none");
					}
					
					if((tamanho>=1) && (qtd_tags_marcos>0) && (qtd_devmiddle>=1) ){
						marcospode=1;
					}
					if((tamanho==0) && (qtd_tags_marcos==0) && (qtd_devmiddle==0)) {
						marcospode=0;
						$("#marcos").css("display", "none");
					}
					
					
					if((tamanho>=1) && (qtd_tags_julia>0) && (qtd_devsenior>=1)){
						juliapode=1;
					}
					if((tamanho==0) && (qtd_tags_julia==0)  && (qtd_devsenior==0)) {
						juliapode=0;
						$("#julia").css("display", "none");
					}
					
					
					if((tamanho>=1) && (qtd_tags_nick>0) && (qtd_devjunior>=1)){
						nickpode=1;
					}
					if((tamanho==0) && (qtd_tags_nick==0) && (qtd_devjunior==0)) {
						nickpode=0;
						$("#nick").css("display", "none");
					}
					
					
					if((tamanho>=1) && (qtd_tags_paul>0) && (qtd_devmaster>=1)){
						paulpode=1;
					}
					if((tamanho==0) && (qtd_tags_paul==0) && (qtd_devmaster==0)) {
						paulpode=0;
						$("#paul").css("display", "none");
					}
					
					
					if((tamanho>=1) && (qtd_tags_doug>0) && (qtd_devmaster>=1)){
						dougpode=1;
					}
					if((tamanho==0) && (qtd_tags_doug==0) && (qtd_devmaster==0)) {
						dougpode=0;
						$("#doug").css("display", "none");
					}
					
					
					
					if((tamanho>=1) && (qtd_tags_ana>0) && (qtd_devjunior>=1)){
						anapode=1;
					}
					if((tamanho==0) && (qtd_tags_ana==0) && (qtd_devjunior==0)) {
						anapode=0;
						$("#ana").css("display", "none");
					}
					
					
					
					if((tamanho>=1) && (qtd_tags_rita>0) && (qtd_devjunior>=1)){
						ritapode=1;
					}
					if((tamanho==0) && (qtd_tags_rita==0) && (qtd_devjunior==0)) {
						ritapode=0;
						$("#rita").css("display", "none");
					}
					
					
					
					if((tamanho>=1) && (qtd_tags_peter>0) && (qtd_devsenior>=1)){
						peterpode=1;
					}
					if((tamanho==0) && (qtd_tags_peter==0) && (qtd_devsenior==0)) {
						peterpode=0;
						$("#peter").css("display", "none");
					}
					
					
					
					if((tamanho>=1) && (qtd_tags_claudio>0) && (qtd_devsenior>=1)){
						claudiopode=1;
					}
					if((tamanho==0) && (qtd_tags_claudio==0) && (qtd_devsenior==0)) {
						claudiopode=0;
						$("#claudio").css("display", "none");
					}
					
					
					if((tamanho>=1) && (qtd_tags_livia>0) && (qtd_devmiddle>=1)){
						liviapode=1;
					}
					if((tamanho==0) && (qtd_tags_livia==0) && (qtd_devmiddle==0)) {
						liviapode=0;
						$("#livia").css("display", "none");
					}
					
					
					if((tamanho>=1) && (qtd_tags_glaucia>0) && (qtd_devmiddle>=1)){
						glauciapode=1;
					}
					if((tamanho==0) && (qtd_tags_glaucia==0) && (qtd_devmiddle==0)) {
						glauciapode=0;
						$("#glaucia").css("display", "none");
					}
					
					
					
					
//=======================================================
//             VERIFICA AS  QUANTIDADES DE SOFT Skills


// =================================================					
					
					
				let qtd_sof_kiran=0;
				let qtd_sof_fred=0;
				let qtd_sof_alice=0;
				let qtd_sof_dave=0;
				
				let qtd_sof_bob=0;
				let qtd_sof_marcos=0;
				let qtd_sof_julia=0;
				let qtd_sof_nick=0;
				
				let qtd_sof_paul=0;
				let qtd_sof_doug=0;
				let qtd_sof_ana=0;
				let qtd_sof_rita=0;
				
				let qtd_sof_peter=0;
				let qtd_sof_claudio=0;
				
				let qtd_sof_livia=0;
				let qtd_sof_glaucia=0;
				
				let array_qtd_soft = []; 
			
				
					
					
					
							
							for (let i=0; i < softskills_kiran.length; i++) {
								for (let x=0; x < arraysoft.length; x++){
									
									if (softskills_kiran[i] == arraysoft[x]){
										qtd_sof_kiran = qtd_sof_kiran +1;
										
										
											
									}
								}
							}
							array_qtd_soft.push(qtd_sof_kiran);
							
						
							
							for (let i=0; i < softskills_fred.length; i++) {
								for (let x=0; x < arraysoft.length; x++){
									
									if (softskills_fred[i] == arraysoft[x]){
										qtd_sof_fred =qtd_sof_fred  +1;
										
										
											
									}
								}
							}
							array_qtd_soft.push(qtd_sof_fred);
							
						
							
							for (let i=0; i < softskills_alice.length; i++) {
								for (let x=0; x < arraysoft.length; x++){
									
									if (softskills_alice[i] == arraysoft[x]){
										qtd_sof_alice = qtd_sof_alice +1;
										
										
											
									}
								}
							}
							array_qtd_soft.push(qtd_sof_alice);
							
						
							
							for (let i=0; i < softskills_dave.length; i++) {
								for (let x=0; x < arraysoft.length; x++){
									
									if (softskills_dave[i] == arraysoft[x]){
										qtd_sof_dave = qtd_sof_dave +1;
										
										
											
									}
								}
							}
							array_qtd_soft.push(qtd_sof_dave);
							
						
							
							for (let i=0; i < softskills_bob.length; i++) {
								for (let x=0; x < arraysoft.length; x++){
									
									if (softskills_bob[i] == arraysoft[x]){
										qtd_sof_bob = qtd_sof_bob +1;
										
										
											
									}
								}
							}
							array_qtd_soft.push(qtd_sof_bob);
							
						
							
							for (let i=0; i < softskills_marcos.length; i++) {
								for (let x=0; x < arraysoft.length; x++){
									
									if (softskills_marcos[i] == arraysoft[x]){
										qtd_sof_marcos = qtd_sof_marcos +1;
										
										
											
									}
								}
							}
							array_qtd_soft.push(qtd_sof_marcos);
							
						
						
						
							
							for (let i=0; i < softskills_julia.length; i++) {
								for (let x=0; x < arraysoft.length; x++){
									
									if (softskills_julia[i] == arraysoft[x]){
										qtd_sof_julia = qtd_sof_julia +1;
										
										
											
									}
								}
							}
							array_qtd_soft.push(qtd_sof_julia);
							
						
						
						
							
							for (let i=0; i < softskills_nick.length; i++) {
								for (let x=0; x < arraysoft.length; x++){
									
									if (softskills_nick[i] == arraysoft[x]){
										qtd_sof_nick = qtd_sof_nick +1;
										
										
											
									}
								}
							}
							array_qtd_soft.push(qtd_sof_nick);
							
							
							
							
							
							for (let i=0; i < softskills_paul.length; i++) {
								for (let x=0; x < arraysoft.length; x++){
									
									if (softskills_paul[i] == arraysoft[x]){
										qtd_sof_paul = qtd_sof_paul +1;
										
										
											
									}
								}
							}
							array_qtd_soft.push(qtd_sof_paul);
							
							
							for (let i=0; i < softskills_doug.length; i++) {
								for (let x=0; x < arraysoft.length; x++){
									
									if (softskills_doug[i] == arraysoft[x]){
										qtd_sof_doug = qtd_sof_doug +1;
										
										
											
									}
								}
							}
							array_qtd_soft.push(qtd_sof_doug);
							
							
							for (let i=0; i < softskills_ana.length; i++) {
								for (let x=0; x < arraysoft.length; x++){
									
									if (softskills_ana[i] == arraysoft[x]){
										qtd_sof_ana = qtd_sof_ana +1;
										
										
											
									}
								}
							}
							array_qtd_soft.push(qtd_sof_ana);
							
							
							
							for (let i=0; i < softskills_rita.length; i++) {
								for (let x=0; x < arraysoft.length; x++){
									
									if (softskills_rita[i] == arraysoft[x]){
										qtd_sof_rita = qtd_sof_rita +1;
										
										
											
									}
								}
							}
							array_qtd_soft.push(qtd_sof_rita);
							
							
							
							for (let i=0; i < softskills_peter.length; i++) {
								for (let x=0; x < arraysoft.length; x++){
									
									if (softskills_peter[i] == arraysoft[x]){
										qtd_sof_peter = qtd_sof_peter +1;
										
										
											
									}
								}
							}
							array_qtd_soft.push(qtd_sof_peter);
							
							
							
							for (let i=0; i < softskills_claudio.length; i++) {
								for (let x=0; x < arraysoft.length; x++){
									
									if (softskills_claudio[i] == arraysoft[x]){
										qtd_sof_claudio = qtd_sof_claudio +1;
										
										
											
									}
								}
							}
							array_qtd_soft.push(qtd_sof_claudio);
							
							
							
							for (let i=0; i < softskills_livia.length; i++) {
								for (let x=0; x < arraysoft.length; x++){
									
									if (softskills_livia[i] == arraysoft[x]){
										qtd_sof_livia = qtd_sof_livia +1;
										
										
											
									}
								}
							}
							array_qtd_soft.push(qtd_sof_livia);
							
							
							for (let i=0; i < softskills_glaucia.length; i++) {
								for (let x=0; x < arraysoft.length; x++){
									
									if (softskills_glaucia[i] == arraysoft[x]){
										qtd_sof_glaucia = qtd_sof_glaucia +1;
										
										
											
									}
								}
							}
							array_qtd_soft.push(qtd_sof_glaucia);
				
				
//===================================================================================================================

// ======================================================================				
// ======================================================================				



// ==================
if (kiranpode==1){
	kiran_perc_hard=1;
}
if (bobpode==1){
	bob_perc_hard=1;
}
if (fredpode==1){
	fred_perc_hard=1;
}
if (marcospode==1){
	marcos_perc_hard=1;
}
if (alicepode==1){
	alice_perc_hard=1;
}
if (juliapode==1){
	julia_perc_hard=1;
}
if (davepode==1){
	dave_perc_hard=1;
}
if (nickpode==1){
	nick_perc_hard=1;
}

if (paulpode==1){
	paul_perc_hard=1;
}

if (dougpode==1){
	doug_perc_hard=1;
}

if (anapode==1){
	ana_perc_hard=1; 
}

if (ritapode==1){
	rita_perc_hard=1; 
}

if (peterpode==1){
	peter_perc_hard=1; 
}

if (claudiopode==1){
	claudio_perc_hard=1; 
}

if (liviapode==1){
	livia_perc_hard=1; 
}

if (glauciapode==1){
	glaucia_perc_hard=1; 
}

//=================



for (let ppors = 0; ppors<tamanho; ppors++){
	
	if (kiran_perc_hard==1){ 
		porcentagens_hard.push(porcentagem_kiran);
		pessoas.push('kiran');
		niveis.push('master');
		qtd_soft_skills.push(qtd_sof_kiran);
		kiran_perc_hard=0; 
	}
	if (bob_perc_hard==1){ 
		porcentagens_hard.push(porcentagem_bob);
		pessoas.push('bob');
		niveis.push('master');
		qtd_soft_skills.push(qtd_sof_bob);
		bob_perc_hard=0; 
	}
	if (fred_perc_hard==1){ 
		porcentagens_hard.push(porcentagem_fred); 
		pessoas.push('fred');
		niveis.push('pleno');
		qtd_soft_skills.push(qtd_sof_fred);
		fred_perc_hard=0; 
	}
	if (marcos_perc_hard==1){ 
		porcentagens_hard.push(porcentagem_marcos);
		pessoas.push('marcos');
		niveis.push('pleno');
		qtd_soft_skills.push(qtd_sof_marcos);
		marcos_perc_hard=0; 
	}
	if (alice_perc_hard==1){ 
		porcentagens_hard.push(porcentagem_alice); 
		pessoas.push('alice');
		niveis.push('senior');
		qtd_soft_skills.push(qtd_sof_alice);
		alice_perc_hard=0; 
	}
	if (julia_perc_hard==1){ 
		porcentagens_hard.push(porcentagem_julia);
		pessoas.push('julia');
		niveis.push('senior');
		qtd_soft_skills.push(qtd_sof_julia);
		julia_perc_hard=0; 
	}
	if (dave_perc_hard==1){ 
		porcentagens_hard.push(porcentagem_dave); 
		pessoas.push('dave');
		niveis.push('junior');
		qtd_soft_skills.push(qtd_sof_dave);
		dave_perc_hard=0; 
	}
	if (nick_perc_hard==1){ 
		porcentagens_hard.push(porcentagem_nick);
		pessoas.push('nick');
		niveis.push('junior');
		qtd_soft_skills.push(qtd_sof_nick);
		nick_perc_hard=0; 
	}
	
	if (paul_perc_hard==1){ 
		porcentagens_hard.push(porcentagem_paul);
		pessoas.push('paul');
		niveis.push('master');
		qtd_soft_skills.push(qtd_sof_paul);
		paul_perc_hard=0; 
	}
	
	if (doug_perc_hard==1){ 
		porcentagens_hard.push(porcentagem_doug);
		pessoas.push('doug');
		niveis.push('master');
		qtd_soft_skills.push(qtd_sof_doug);
		doug_perc_hard=0; 
	}
	
	if (ana_perc_hard==1){ 
		porcentagens_hard.push(porcentagem_ana);
		pessoas.push('ana');
		niveis.push('junior');
		qtd_soft_skills.push(qtd_sof_ana);
		ana_perc_hard=0; 
	}
	
	if (rita_perc_hard==1){ 
		porcentagens_hard.push(porcentagem_rita);
		pessoas.push('rita');
		niveis.push('junior');
		qtd_soft_skills.push(qtd_sof_rita);
		rita_perc_hard=0; 
	}
	
	if (peter_perc_hard==1){ 
		porcentagens_hard.push(porcentagem_peter);
		pessoas.push('peter');
		niveis.push('senior');
		qtd_soft_skills.push(qtd_sof_peter);
		peter_perc_hard=0; 
	}
	
	
	if (claudio_perc_hard==1){ 
		porcentagens_hard.push(porcentagem_claudio);
		pessoas.push('claudio');
		niveis.push('senior');
		qtd_soft_skills.push(qtd_sof_claudio);
		claudio_perc_hard=0; 
	}
	
	if (livia_perc_hard==1){ 
		porcentagens_hard.push(porcentagem_livia);
		pessoas.push('livia');
		niveis.push('pleno');
		qtd_soft_skills.push(qtd_sof_livia);
		livia_perc_hard=0; 
	}
	
	if (glaucia_perc_hard==1){ 
		porcentagens_hard.push(porcentagem_glaucia);
		pessoas.push('glaucia');
		niveis.push('pleno');
		qtd_soft_skills.push(qtd_sof_glaucia);
		glaucia_perc_hard=0; 
	}
	
}
						
//alert('pessoas: '+pessoas+ '\nporcen hard: '+porcentagens_hard+ '\nQuantidade de soft:'+qtd_soft_skills);					
						
					
		
//letiaveis
//let porcentagens_hard = [13,25,50,45,9,80,17,30];
//let pessoas =        ['kiran','fred','dave','alex','helena', 'bob', 'marcos','nick'];
//let niveis =      ['master','master','senior','pleno','senior','pleno','junior','junior'];
//let qtd_soft_skills = [3,2,4,3,2,7,3,2];
  


				
					
					
				//TIPO DE AGRUPAMENTO HARD skill		
				let type_grouping1;
				checar();
				function checar()
				{
				 let botoes1 = document.getElementsByName("gridRadios1");

				 for (let i in botoes1) 
						if (botoes1[i].checked){
							
							 type_grouping1 = botoes1[i].value;
						}
				}						
				//TIPO DE AGRUPAMENTO soft skill		
				let type_grouping2;
				checar2();
				function checar2()
				{
				 let botoes2 = document.getElementsByName("gridRadios2");

				 for (let i in botoes2) 
						if (botoes2[i].checked){
							
							 type_grouping2 = botoes2[i].value;
						}
				}
				
			
				
			
				
				
				// 1. verifica se é homogeneo e homogeneo
				if ((type_grouping1 == "option1") && (type_grouping2=="option3")){
					
					//alert('homogeneo e homogeneo');
						while (equipe.length <tamanho){	
							
							//pega distancia entre valores maximo e minimo no array das porcentagens_hard 
							const min = Math.min(...porcentagens_hard);
							const max = Math.max(...porcentagens_hard);	
											
							menor_hard=Math.abs(max-min);
							
							//pega distancia entre valores maximo e minimo no array das SOFT SKILLS
							const min2 = Math.min(...qtd_soft_skills);
							const max2 = Math.max(...qtd_soft_skills);	
											
							menor_soft = Math.abs(max2-min2);
							
							
							
							//letre o array para encontrar menor_hard distancia entre pares
							for (let i =0; i < porcentagens_hard.length; i++){
								for ( let j=0; j < porcentagens_hard.length; j++) {
											
										//alert ('tamanho '+equipe.length);
										if (equipe.length == 0 ) {
											if ((i!=j) && (niveis[i] != niveis[j])) {
												
												
												menor_dist_hard = Math.abs(porcentagens_hard[i] - porcentagens_hard[j]);
												
												menor_dist_soft = Math.abs(qtd_soft_skills[i] - qtd_soft_skills[j]);
													
													//verifica se nao ja tem o nivel no novo array de niveis
													let ver = novos_niveis.includes(niveis[i]);
													let ver2 = novos_niveis.includes(niveis[j]);
													
													
													//alert ('a menor_hard distancia = '+menor_dist_hard+ ' entre '+porcentagens_hard[i]+ ' e '+porcentagens_hard[j]+ ' eh menor ou igual que  ' +menor+ ' ? ');
													if ((menor_dist_hard <= menor_hard) && (menor_dist_soft <= menor_soft) && (ver==false) && (ver2==false) ){
														
														
														menor_hard = menor_dist_hard;
														menor_soft = menor_dist_soft;
														//salva o indice dos valores com menor_hard distancia 
														indice_i = i;
														indice_j = j;
													}
											}
										}	
										if (equipe.length > 0 ){
											if ((i!=j) && (niveis[i] != niveis[j])) {
												menor_dist_hard = Math.abs(porcentagens_hard[i] - porcentagens_hard[j]);
												
												menor_dist_soft = Math.abs(qtd_soft_skills[i] - qtd_soft_skills[j]);						
												
													//verifica se nao ja tem o nivel no novo array de niveis
													let ver = novos_niveis.includes(niveis[i]);
													let ver2 = novos_niveis.includes(niveis[j]);
													
													
													
													//alert ('a menor_hard distancia = '+menor_dist_hard+ ' entre '+porcentagens_hard[i]+ ' e '+porcentagens_hard[j]+ ' eh menor ou igual que  ' +menor+ ' ? ');
													if ((menor_dist_hard <= menor_hard) && (menor_dist_soft <= menor_soft) && (ver==false) && (ver2==false) ){
														
														
														menor_hard = menor_dist_hard;
														
														//salva o indice dos valores com menor_hard distancia 
														indice_i = i;
														indice_j = j;
													}
											}
										}
								}
							}	
														//se equipe já tiver alguem
														if (equipe.length > 0 ) {
															
															//letre array para confirmar que  a pessoa não foi inserida ja na equipe
															for (p=0;p<=equipe.length;p++){
															
																if ((pessoas[indice_i]  != equipe[p]) && (pessoas[indice_j]  != equipe[p])) {
																	pode=1;
																}
																
																
															}
															
															
														
																		
																
														
															
															//alert(novos_niveis);
																
																
															
															
															
															
															if (pode==1){
																	
																	
																	
																	
																
																		novos_niveis.push(niveis[indice_i]);
																		novos_niveis.push(niveis[indice_j]);
																		
																		novos_soft_skills.push(qtd_soft_skills[indice_i]);
																		novos_soft_skills.push(qtd_soft_skills[indice_j]);
																		
																	
																		//coloca a pessoa de incice i
																		//alert('colocando  '+pessoas[indice_i]);
																		equipe.push(pessoas[indice_i]);
																		//coloca a porcentagem da pessoa de incice i
																		
																		//alert('colocando  '+porcentagens_hard[indice_i]);
																		porc_equipe.push(porcentagens_hard[indice_i]);
																		
																		//coloca a pessoa de incice j
																		//alert('colocando   '+pessoas[indice_j]);
																		equipe.push(pessoas[indice_j]);
																		//coloca a porcentagem da pessoa de incice j
																		//alert('colocando   '+porcentagens_hard[indice_j]);
																		porc_equipe.push(porcentagens_hard[indice_j]);
																		
																		
																		//retira a pessoa de incice i e de indice j
																		//alert('retirando '+pessoas[indice_i]);
																		pessoas.splice(indice_i,1);
																		
																		
																		//alert('retirando '+pessoas[indice_j]);
																		pessoas.splice(indice_j,1);
																		
																		
																		
																		
																			
																		//alert('retirando '+porcentagens_hard[indice_i]);
																		porcentagens_hard.splice(indice_i,1);	
																		
																		//retira a porcentagem da pessoa de incice i e de indice j
																		//alert('retirando '+porcentagens_hard[indice_j]);
																		porcentagens_hard.splice(indice_j,1);
																	
																		//retira niveis
																		niveis.splice(indice_j,1);
																		niveis.splice(indice_i,1);
																		
																		
																		//retira soft skilss
																		qtd_soft_skills.splice(indice_j,1);
																		qtd_soft_skills.splice(indice_i,1);
																		
																		pode=0;
																		
																		
																	
																	
																}
															
																
														}
													
													//se equipe ainda for vazia
													if (equipe.length == 0 ) {
																		
																		novos_niveis.push(niveis[indice_i]);
																		novos_niveis.push(niveis[indice_j]);
																		
																		novos_soft_skills.push(qtd_soft_skills[indice_i]);
																		novos_soft_skills.push(qtd_soft_skills[indice_j]);
														
																//coloca a pessoa de incice i
																		//alert('colocando  '+pessoas[indice_i]);
																		equipe.push(pessoas[indice_i]);
																		//coloca a porcentagem da pessoa de incice i
																		
																		//alert('colocando  '+porcentagens_hard[indice_i]);
																		porc_equipe.push(porcentagens_hard[indice_i]);
																		
																		//coloca a pessoa de incice j
																		//alert('colocando   '+pessoas[indice_j]);
																		equipe.push(pessoas[indice_j]);
																		//coloca a porcentagem da pessoa de incice j
																		//alert('colocando   '+porcentagens_hard[indice_j]);
																		porc_equipe.push(porcentagens_hard[indice_j]);
																		
																		
																		//retira a pessoa de incice i e de indice j
																		//alert('retirando '+pessoas[indice_i]);
																		pessoas.splice(indice_i,1);
																		
																		
																		//alert('retirando '+pessoas[indice_j]);
																		pessoas.splice(indice_j,1);
																		
																		
																		
																		
																		//alert('retirando '+porcentagens_hard[indice_i]);
																		porcentagens_hard.splice(indice_i,1);	
																		
																		//retira a porcentagem da pessoa de incice i e de indice j
																		//alert('retirando '+porcentagens_hard[indice_j]);
																		porcentagens_hard.splice(indice_j,1);
																	
																		
																		//retira niveis
																		niveis.splice(indice_j,1);
																		niveis.splice(indice_i,1);
																		
																		//retira soft skilss
																		qtd_soft_skills.splice(indice_j,1);
																		qtd_soft_skills.splice(indice_i,1);
																		
																		pode_niveis=0;
																		pode=0;
																		
																
																
														
													}
						}
						
						
						while (equipe2.length <tamanho){	
							
							//pega distancia entre valores maximo e minimo no array das porcentagens_hard 
							const min = Math.min(...porcentagens_hard);
							const max = Math.max(...porcentagens_hard);	
											
							menor_hard=Math.abs(max-min);
							
							//pega distancia entre valores maximo e minimo no array das SOFT SKILLS
							const min2 = Math.min(...qtd_soft_skills);
							const max2 = Math.max(...qtd_soft_skills);	
											
							menor_soft = Math.abs(max2-min2);
							
							
							
							//letre o array para encontrar menor_hard distancia entre pares
							for (let i =0; i < porcentagens_hard.length; i++){
								for ( let j=0; j < porcentagens_hard.length; j++) {
											
										//alert ('tamanho '+equipe2.length);
										if (equipe2.length == 0 ) {
											if ((i!=j) && (niveis[i] != niveis[j])) {
												
												
												menor_dist_hard = Math.abs(porcentagens_hard[i] - porcentagens_hard[j]);
												
												menor_dist_soft = Math.abs(qtd_soft_skills[i] - qtd_soft_skills[j]);
													
													//verifica se nao ja tem o nivel no novo array de niveis
													let ver = novos_niveis2.includes(niveis[i]);
													let ver2 = novos_niveis2.includes(niveis[j]);
													
													
													//alert ('a menor_hard distancia = '+menor_dist_hard+ ' entre '+porcentagens_hard[i]+ ' e '+porcentagens_hard[j]+ ' eh menor ou igual que  ' +menor+ ' ? ');
													if ((menor_dist_hard <= menor_hard) && (menor_dist_soft <= menor_soft) && (ver==false) && (ver2==false) ){
														
														
														menor_hard = menor_dist_hard;
														menor_soft = menor_dist_soft;
														//salva o indice dos valores com menor_hard distancia 
														indice_i = i;
														indice_j = j;
													}
											}
										}	
										if (equipe2.length > 0 ){
											if ((i!=j) && (niveis[i] != niveis[j])) {
												menor_dist_hard = Math.abs(porcentagens_hard[i] - porcentagens_hard[j]);
												
												menor_dist_soft = Math.abs(qtd_soft_skills[i] - qtd_soft_skills[j]);						
												
													//verifica se nao ja tem o nivel no novo array de niveis
													let ver = novos_niveis2.includes(niveis[i]);
													let ver2 = novos_niveis2.includes(niveis[j]);
													
													
													
													//alert ('a menor_hard distancia = '+menor_dist_hard+ ' entre '+porcentagens_hard[i]+ ' e '+porcentagens_hard[j]+ ' eh menor ou igual que  ' +menor+ ' ? ');
													if ((menor_dist_hard <= menor_hard) && (menor_dist_soft <= menor_soft) && (ver==false) && (ver2==false) ){
														
														
														menor_hard = menor_dist_hard;
														
														//salva o indice dos valores com menor_hard distancia 
														indice_i = i;
														indice_j = j;
													}
											}
										}
								}
							}	
														//se equipe2 já tiver alguem
														if (equipe2.length > 0 ) {
															
															//letre array para confirmar que  a pessoa não foi inserida ja na equipe2
															for (p=0;p<=equipe2.length;p++){
															
																if ((pessoas[indice_i]  != equipe2[p]) && (pessoas[indice_j]  != equipe2[p])) {
																	pode=1;
																}
																
																
															}
															
															
														
																		
																
														
															
															//alert(novos_niveis2
																
																
															
															
															
															
															if (pode==1){
																	
																	
																	
																	
																
																		novos_niveis2.push(niveis[indice_i]);
																		novos_niveis2.push(niveis[indice_j]);
																		
																		novos_soft_skills2.push(qtd_soft_skills[indice_i]);
																		novos_soft_skills2.push(qtd_soft_skills[indice_j]);
																		
																	
																		//coloca a pessoa de incice i
																		//alert('colocando  '+pessoas[indice_i]);
																		equipe2.push(pessoas[indice_i]);
																		//coloca a porcentagem da pessoa de incice i
																		
																		//alert('colocando  '+porcentagens_hard[indice_i]);
																		porc_equipe2.push(porcentagens_hard[indice_i]);
																		
																		//coloca a pessoa de incice j
																		//alert('colocando   '+pessoas[indice_j]);
																		equipe2.push(pessoas[indice_j]);
																		//coloca a porcentagem da pessoa de incice j
																		//alert('colocando   '+porcentagens_hard[indice_j]);
																		porc_equipe2.push(porcentagens_hard[indice_j]);
																		
																		
																		//retira a pessoa de incice i e de indice j
																		//alert('retirando '+pessoas[indice_i]);
																		pessoas.splice(indice_i,1);
																		
																		
																		//alert('retirando '+pessoas[indice_j]);
																		pessoas.splice(indice_j,1);
																		
																		
																		
																		
																			
																		//alert('retirando '+porcentagens_hard[indice_i]);
																		porcentagens_hard.splice(indice_i,1);	
																		
																		//retira a porcentagem da pessoa de incice i e de indice j
																		//alert('retirando '+porcentagens_hard[indice_j]);
																		porcentagens_hard.splice(indice_j,1);
																	
																		//retira niveis
																		niveis.splice(indice_j,1);
																		niveis.splice(indice_i,1);
																		
																		
																		//retira soft skilss
																		qtd_soft_skills.splice(indice_j,1);
																		qtd_soft_skills.splice(indice_i,1);
																		
																		pode=0;
																		
																		
																	
																	
																}
															
																
														}
													
													//se equipe2 ainda for vazia
													if (equipe2.length == 0 ) {
																		
																		novos_niveis2.push(niveis[indice_i]);
																		novos_niveis2.push(niveis[indice_j]);
																		
																		novos_soft_skills2.push(qtd_soft_skills[indice_i]);
																		novos_soft_skills2.push(qtd_soft_skills[indice_j]);
														
																//coloca a pessoa de incice i
																		//alert('colocando  '+pessoas[indice_i]);
																		equipe2.push(pessoas[indice_i]);
																		//coloca a porcentagem da pessoa de incice i
																		
																		//alert('colocando  '+porcentagens_hard[indice_i]);
																		porc_equipe2.push(porcentagens_hard[indice_i]);
																		
																		//coloca a pessoa de incice j
																		//alert('colocando   '+pessoas[indice_j]);
																		equipe2.push(pessoas[indice_j]);
																		//coloca a porcentagem da pessoa de incice j
																		//alert('colocando   '+porcentagens_hard[indice_j]);
																		porc_equipe2.push(porcentagens_hard[indice_j]);
																		
																		
																		//retira a pessoa de incice i e de indice j
																		//alert('retirando '+pessoas[indice_i]);
																		pessoas.splice(indice_i,1);
																		
																		
																		//alert('retirando '+pessoas[indice_j]);
																		pessoas.splice(indice_j,1);
																		
																		
																		
																		
																		//alert('retirando '+porcentagens_hard[indice_i]);
																		porcentagens_hard.splice(indice_i,1);	
																		
																		//retira a porcentagem da pessoa de incice i e de indice j
																		//alert('retirando '+porcentagens_hard[indice_j]);
																		porcentagens_hard.splice(indice_j,1);
																	
																		
																		//retira niveis
																		niveis.splice(indice_j,1);
																		niveis.splice(indice_i,1);
																		
																		//retira soft skilss
																		qtd_soft_skills.splice(indice_j,1);
																		qtd_soft_skills.splice(indice_i,1);
																		
																		pode_niveis=0;
																		pode=0;
																		
																
																
														
													}
						}
						
						
										
				}
				
				// 2. verifica se é homogeneo e heterogeneo
				if ((type_grouping1 == "option1") && (type_grouping2=="option4")){
					
					
					//alert('homogeneo e heterogeneo ');
						while (equipe.length <tamanho){	
							
							//pega distancia entre valores maximo e minimo no array das porcentagens_hard 
							const min = Math.min(...porcentagens_hard);
							const max = Math.max(...porcentagens_hard);	
											
							menor_hard=Math.abs(max-min);
							
							//pega distancia entre valores maximo e minimo no array das SOFT SKILLS
							const min2 = Math.min(...qtd_soft_skills);
							//const max2 = Math.max(...qtd_soft_skills);	
											
							menor_soft = Math.abs(min2);
							
							
							
							//letre o array para encontrar menor_hard distancia entre pares
							for (let i =0; i < porcentagens_hard.length; i++){
								for ( let j=0; j < porcentagens_hard.length; j++) {
											
										//alert ('tamanho '+equipe.length);
										if (equipe.length == 0 ) {
											if ((i!=j) && (niveis[i] != niveis[j])) {
												
												
												menor_dist_hard = Math.abs(porcentagens_hard[i] - porcentagens_hard[j]);
												
												menor_dist_soft = Math.abs(qtd_soft_skills[i] - qtd_soft_skills[j]);
													
													//verifica se nao ja tem o nivel no novo array de niveis
													let ver = novos_niveis.includes(niveis[i]);
													let ver2 = novos_niveis.includes(niveis[j]);
													
													
													//alert ('a menor_hard distancia = '+menor_dist_hard+ ' entre '+porcentagens_hard[i]+ ' e '+porcentagens_hard[j]+ ' eh menor ou igual que  ' +menor+ ' ? ');
													if ((menor_dist_hard <= menor_hard) && (menor_dist_soft >= menor_soft) && (ver==false) && (ver2==false) ){
														
														
														menor_hard = menor_dist_hard;
														menor_soft = menor_dist_soft;
														//salva o indice dos valores com menor_hard distancia 
														indice_i = i;
														indice_j = j;
													}
											}
										}	
										if (equipe.length > 0 ){
											if ((i!=j) && (niveis[i] != niveis[j])) {
												menor_dist_hard = Math.abs(porcentagens_hard[i] - porcentagens_hard[j]);
												
												menor_dist_soft = Math.abs(qtd_soft_skills[i] - qtd_soft_skills[j]);						
												
													//verifica se nao ja tem o nivel no novo array de niveis
													let ver = novos_niveis.includes(niveis[i]);
													let ver2 = novos_niveis.includes(niveis[j]);
													
													
													
													//alert ('a menor_hard distancia = '+menor_dist_hard+ ' entre '+porcentagens_hard[i]+ ' e '+porcentagens_hard[j]+ ' eh menor ou igual que  ' +menor+ ' ? ');
													if ((menor_dist_hard <= menor_hard) && (menor_dist_soft >= menor_soft) && (ver==false) && (ver2==false) ){
														
														
														menor_hard = menor_dist_hard;
														
														//salva o indice dos valores com menor_hard distancia 
														indice_i = i;
														indice_j = j;
													}
											}
										}
								}
							}	
														//se equipe já tiver alguem
														if (equipe.length > 0 ) {
															
															//letre array para confirmar que  a pessoa não foi inserida ja na equipe
															for (p=0;p<=equipe.length;p++){
															
																if ((pessoas[indice_i]  != equipe[p]) && (pessoas[indice_j]  != equipe[p])) {
																	pode=1;
																}
																
																
															}
															
															
														
																		
																
														
															
															//alert(novos_niveis);
																
																
															
															
															
															
															if (pode==1){
																	
																	
																	
																	
																
																		novos_niveis.push(niveis[indice_i]);
																		novos_niveis.push(niveis[indice_j]);
																		
																		novos_soft_skills.push(qtd_soft_skills[indice_i]);
																		novos_soft_skills.push(qtd_soft_skills[indice_j]);
																		
																	
																		//coloca a pessoa de incice i
																		//alert('colocando  '+pessoas[indice_i]);
																		equipe.push(pessoas[indice_i]);
																		//coloca a porcentagem da pessoa de incice i
																		
																		//alert('colocando  '+porcentagens_hard[indice_i]);
																		porc_equipe.push(porcentagens_hard[indice_i]);
																		
																		//coloca a pessoa de incice j
																		//alert('colocando   '+pessoas[indice_j]);
																		equipe.push(pessoas[indice_j]);
																		//coloca a porcentagem da pessoa de incice j
																		//alert('colocando   '+porcentagens_hard[indice_j]);
																		porc_equipe.push(porcentagens_hard[indice_j]);
																		
																		
																		//retira a pessoa de incice i e de indice j
																		//alert('retirando '+pessoas[indice_i]);
																		pessoas.splice(indice_i,1);
																		
																		
																		//alert('retirando '+pessoas[indice_j]);
																		pessoas.splice(indice_j,1);
																		
																		
																		
																		
																			
																		//alert('retirando '+porcentagens_hard[indice_i]);
																		porcentagens_hard.splice(indice_i,1);	
																		
																		//retira a porcentagem da pessoa de incice i e de indice j
																		//alert('retirando '+porcentagens_hard[indice_j]);
																		porcentagens_hard.splice(indice_j,1);
																	
																		//retira niveis
																		niveis.splice(indice_j,1);
																		niveis.splice(indice_i,1);
																		
																		
																		//retira soft skilss
																		qtd_soft_skills.splice(indice_j,1);
																		qtd_soft_skills.splice(indice_i,1);
																		
																		pode=0;
																		
																		
																	
																	
																}
															
																
														}
													
													//se equipe ainda for vazia
													if (equipe.length == 0 ) {
																		
																		novos_niveis.push(niveis[indice_i]);
																		novos_niveis.push(niveis[indice_j]);
																		
																		novos_soft_skills.push(qtd_soft_skills[indice_i]);
																		novos_soft_skills.push(qtd_soft_skills[indice_j]);
														
																//coloca a pessoa de incice i
																		//alert('colocando  '+pessoas[indice_i]);
																		equipe.push(pessoas[indice_i]);
																		//coloca a porcentagem da pessoa de incice i
																		
																		//alert('colocando  '+porcentagens_hard[indice_i]);
																		porc_equipe.push(porcentagens_hard[indice_i]);
																		
																		//coloca a pessoa de incice j
																		//alert('colocando   '+pessoas[indice_j]);
																		equipe.push(pessoas[indice_j]);
																		//coloca a porcentagem da pessoa de incice j
																		//alert('colocando   '+porcentagens_hard[indice_j]);
																		porc_equipe.push(porcentagens_hard[indice_j]);
																		
																		
																		//retira a pessoa de incice i e de indice j
																		//alert('retirando '+pessoas[indice_i]);
																		pessoas.splice(indice_i,1);
																		
																		
																		//alert('retirando '+pessoas[indice_j]);
																		pessoas.splice(indice_j,1);
																		
																		
																		
																		
																		//alert('retirando '+porcentagens_hard[indice_i]);
																		porcentagens_hard.splice(indice_i,1);	
																		
																		//retira a porcentagem da pessoa de incice i e de indice j
																		//alert('retirando '+porcentagens_hard[indice_j]);
																		porcentagens_hard.splice(indice_j,1);
																	
																		
																		//retira niveis
																		niveis.splice(indice_j,1);
																		niveis.splice(indice_i,1);
																		
																		//retira soft skilss
																		qtd_soft_skills.splice(indice_j,1);
																		qtd_soft_skills.splice(indice_i,1);
																		
																		pode_niveis=0;
																		pode=0;
																		
																
																
														
													}
						}
						
						
						
						
							pode=0;
				            pode_niveis=0;

				
					
						
						
						
						
						while (equipe2.length <tamanho){	
							
							//pega distancia entre valores maximo e minimo no array das porcentagens_hard 
							const min = Math.min(...porcentagens_hard);
							const max = Math.max(...porcentagens_hard);	
											
							menor_hard=Math.abs(max-min);
							
							//pega distancia entre valores maximo e minimo no array das SOFT SKILLS
							const min2 = Math.min(...qtd_soft_skills);
							//const max2 = Math.max(...qtd_soft_skills);	
											
							menor_soft = Math.abs(min2);
							
							
							
							//letre o array para encontrar menor_hard distancia entre pares
							for (let i =0; i < porcentagens_hard.length; i++){
								for ( let j=0; j < porcentagens_hard.length; j++) {
											
										//alert ('tamanho '+equipe2.length);
										if (equipe2.length == 0 ) {
											if ((i!=j) && (niveis[i] != niveis[j])) {
												
												
												menor_dist_hard = Math.abs(porcentagens_hard[i] - porcentagens_hard[j]);
												
												menor_dist_soft = Math.abs(qtd_soft_skills[i] - qtd_soft_skills[j]);
													
													//verifica se nao ja tem o nivel no novo array de niveis
													let ver = novos_niveis2.includes(niveis[i]);
													let ver2 = novos_niveis2.includes(niveis[j]);
													
													
													//alert ('a menor_hard distancia = '+menor_dist_hard+ ' entre '+porcentagens_hard[i]+ ' e '+porcentagens_hard[j]+ ' eh menor ou igual que  ' +menor+ ' ? ');
													if ((menor_dist_hard <= menor_hard) && (menor_dist_soft >= menor_soft) && (ver==false) && (ver2==false) ){
														
														
														menor_hard = menor_dist_hard;
														menor_soft = menor_dist_soft;
														//salva o indice dos valores com menor_hard distancia 
														indice_i = i;
														indice_j = j;
													}
											}
										}	
										if (equipe2.length > 0 ){
											if ((i!=j) && (niveis[i] != niveis[j])) {
												menor_dist_hard = Math.abs(porcentagens_hard[i] - porcentagens_hard[j]);
												
												menor_dist_soft = Math.abs(qtd_soft_skills[i] - qtd_soft_skills[j]);						
												
													//verifica se nao ja tem o nivel no novo array de niveis
													let ver = novos_niveis2.includes(niveis[i]);
													let ver2 = novos_niveis2.includes(niveis[j]);
													
													
													
													//alert ('a menor_hard distancia = '+menor_dist_hard+ ' entre '+porcentagens_hard[i]+ ' e '+porcentagens_hard[j]+ ' eh menor ou igual que  ' +menor+ ' ? ');
													if ((menor_dist_hard <= menor_hard) && (menor_dist_soft >= menor_soft) && (ver==false) && (ver2==false) ){
														
														
														menor_hard = menor_dist_hard;
														
														//salva o indice dos valores com menor_hard distancia 
														indice_i = i;
														indice_j = j;
													}
											}
										}
								}
							}	
														//se equipe2 já tiver alguem
														if (equipe2.length > 0 ) {
															
															//letre array para confirmar que  a pessoa não foi inserida ja na equipe2
															for (p=0;p<=equipe2.length;p++){
															
																if ((pessoas[indice_i]  != equipe2[p]) && (pessoas[indice_j]  != equipe2[p])) {
																	pode=1;
																}
																
																
															}
															
															
														
																		
																
														
															
															//alert(novos_niveis2
																
																
															
															
															
															
															if (pode==1){
																	
																	
																	
																	
																
																		novos_niveis2.push(niveis[indice_i]);
																		novos_niveis2.push(niveis[indice_j]);
																		
																		novos_soft_skills2.push(qtd_soft_skills[indice_i]);
																		novos_soft_skills2.push(qtd_soft_skills[indice_j]);
																		
																	
																		//coloca a pessoa de incice i
																		//alert('colocando  '+pessoas[indice_i]);
																		equipe2.push(pessoas[indice_i]);
																		//coloca a porcentagem da pessoa de incice i
																		
																		//alert('colocando  '+porcentagens_hard[indice_i]);
																		porc_equipe2.push(porcentagens_hard[indice_i]);
																		
																		//coloca a pessoa de incice j
																		//alert('colocando   '+pessoas[indice_j]);
																		equipe2.push(pessoas[indice_j]);
																		//coloca a porcentagem da pessoa de incice j
																		//alert('colocando   '+porcentagens_hard[indice_j]);
																		porc_equipe2.push(porcentagens_hard[indice_j]);
																		
																		
																		//retira a pessoa de incice i e de indice j
																		//alert('retirando '+pessoas[indice_i]);
																		pessoas.splice(indice_i,1);
																		
																		
																		//alert('retirando '+pessoas[indice_j]);
																		pessoas.splice(indice_j,1);
																		
																		
																		
																		
																			
																		//alert('retirando '+porcentagens_hard[indice_i]);
																		porcentagens_hard.splice(indice_i,1);	
																		
																		//retira a porcentagem da pessoa de incice i e de indice j
																		//alert('retirando '+porcentagens_hard[indice_j]);
																		porcentagens_hard.splice(indice_j,1);
																	
																		//retira niveis
																		niveis.splice(indice_j,1);
																		niveis.splice(indice_i,1);
																		
																		
																		//retira soft skilss
																		qtd_soft_skills.splice(indice_j,1);
																		qtd_soft_skills.splice(indice_i,1);
																		
																		pode=0;
																		
																		
																	
																	
																}
															
																
														}
													
													//se equipe2 ainda for vazia
													if (equipe2.length == 0 ) {
																		
																		novos_niveis2.push(niveis[indice_i]);
																		novos_niveis2.push(niveis[indice_j]);
																		
																		novos_soft_skills2.push(qtd_soft_skills[indice_i]);
																		novos_soft_skills2.push(qtd_soft_skills[indice_j]);
														
																//coloca a pessoa de incice i
																		//alert('colocando  '+pessoas[indice_i]);
																		equipe2.push(pessoas[indice_i]);
																		//coloca a porcentagem da pessoa de incice i
																		
																		//alert('colocando  '+porcentagens_hard[indice_i]);
																		porc_equipe2.push(porcentagens_hard[indice_i]);
																		
																		//coloca a pessoa de incice j
																		//alert('colocando   '+pessoas[indice_j]);
																		equipe2.push(pessoas[indice_j]);
																		//coloca a porcentagem da pessoa de incice j
																		//alert('colocando   '+porcentagens_hard[indice_j]);
																		porc_equipe2.push(porcentagens_hard[indice_j]);
																		
																		
																		//retira a pessoa de incice i e de indice j
																		//alert('retirando '+pessoas[indice_i]);
																		pessoas.splice(indice_i,1);
																		
																		
																		//alert('retirando '+pessoas[indice_j]);
																		pessoas.splice(indice_j,1);
																		
																		
																		
																		
																		//alert('retirando '+porcentagens_hard[indice_i]);
																		porcentagens_hard.splice(indice_i,1);	
																		
																		//retira a porcentagem da pessoa de incice i e de indice j
																		//alert('retirando '+porcentagens_hard[indice_j]);
																		porcentagens_hard.splice(indice_j,1);
																	
																		
																		//retira niveis
																		niveis.splice(indice_j,1);
																		niveis.splice(indice_i,1);
																		
																		//retira soft skilss
																		qtd_soft_skills.splice(indice_j,1);
																		qtd_soft_skills.splice(indice_i,1);
																		
																		pode_niveis=0;
																		pode=0;
																		
																
																
														
													}
						}
						
					
					
					
					
					
										
				}
				// 3.  verifica se é heterogeneo e heterogeneo
				if ((type_grouping1 == "option2") && (type_grouping2=="option4")){
					
					//alert('heterogeneo e heterogeneo escolhido');

					// repetir enquanto o tamanho da equipe não é atingido
					while (equipe.length <tamanho){	
						
						//pega distancia entre valores maximo e minimo no array das porcentagens_hard 
						const min = Math.min(...porcentagens_hard);
						//const max = Math.max(...porcentagens_hard);	
										
						maior_hard = Math.abs(min);
						
						//pega distancia entre valores maximo e minimo no array das SOFT SKILLS
						const min2 = Math.min(...qtd_soft_skills);
						//const max2 = Math.max(...qtd_soft_skills);	
										
						maior_soft = Math.abs(min2);
						
						
						
						//letre o array para encontrar maior_hard distancia entre pares
						for (let i =0; i < porcentagens_hard.length; i++){
							for ( let j=0; j < porcentagens_hard.length; j++) {
										
									//alert ('tamanho '+equipe.length);
									if (equipe.length == 0 ) {
										if ((i!=j) && (niveis[i] != niveis[j])) {
											
											
											maior_dist_hard = Math.abs(porcentagens_hard[i] - porcentagens_hard[j]);
											
											maior_dist_soft = Math.abs(qtd_soft_skills[i] - qtd_soft_skills[j]);
												
												//verifica se nao ja tem o nivel no novo array de niveis
												let ver = novos_niveis.includes(niveis[i]);
												let ver2 = novos_niveis.includes(niveis[j]);
												
												
												//alert ('a maior_hard distancia = '+maior_dist_hard+ ' entre '+porcentagens_hard[i]+ ' e '+porcentagens_hard[j]+ ' eh menor ou igual que  ' +menor+ ' ? ');
												if ((maior_dist_hard >= maior_hard) && (maior_dist_soft >= maior_soft) && (ver==false) && (ver2==false) ){
													
													
													maior_hard = maior_dist_hard;
													maior_soft = maior_dist_soft;
													//salva o indice dos valores com maior_hard distancia 
													indice_i = i;
													indice_j = j;
												}
										}
									}	
									if (equipe.length > 0 ){
										if ((i!=j) && (niveis[i] != niveis[j])) {
											maior_dist_hard = Math.abs(porcentagens_hard[i] - porcentagens_hard[j]);
												
											maior_dist_soft = Math.abs(qtd_soft_skills[i] - qtd_soft_skills[j]);
											
											//verifica se nao ja tem o nivel no novo array de niveis
												let ver = novos_niveis.includes(niveis[i]);
												let ver2 = novos_niveis.includes(niveis[j]);
												
												
												
												//alert ('a maior_hard distancia = '+maior_dist_hard+ ' entre '+porcentagens_hard[i]+ ' e '+porcentagens_hard[j]+ ' eh menor ou igual que  ' +menor+ ' ? ');
												if ((maior_dist_hard >= maior_hard) && (maior_dist_soft >= maior_soft) && (ver==false) && (ver2==false) ){
													
													
													maior_hard = maior_dist_hard;
													maior_soft = maior_dist_soft;
													
													//salva o indice dos valores com maior_hard distancia 
													indice_i = i;
													indice_j = j;
												}
										}
									}
							}
						}	
													//se equipe já tiver alguem
													if (equipe.length > 0 ) {
														
														//letre array para confirmar que  a pessoa não foi inserida ja na equipe
														for (p=0;p<=equipe.length;p++){
														
															if ((pessoas[indice_i]  != equipe[p]) && (pessoas[indice_j]  != equipe[p])) {
																pode=1;
															}
															
															
														}
														
														
													
																	
															
													
														
														//alert(novos_niveis);
															
															
														
														
														
														
														if (pode==1){
																
																
																
																
															
																	novos_niveis.push(niveis[indice_i]);
																	novos_niveis.push(niveis[indice_j]);
																	
																	novos_soft_skills.push(qtd_soft_skills[indice_i]);
																	novos_soft_skills.push(qtd_soft_skills[indice_j]);
																	
																
																	//coloca a pessoa de incice i
																	//alert('colocando  '+pessoas[indice_i]);
																	equipe.push(pessoas[indice_i]);
																	//coloca a porcentagem da pessoa de incice i
																	
																	//alert('colocando  '+porcentagens_hard[indice_i]);
																	porc_equipe.push(porcentagens_hard[indice_i]);
																	
																	//coloca a pessoa de incice j
																	//alert('colocando   '+pessoas[indice_j]);
																	equipe.push(pessoas[indice_j]);
																	//coloca a porcentagem da pessoa de incice j
																	//alert('colocando   '+porcentagens_hard[indice_j]);
																	porc_equipe.push(porcentagens_hard[indice_j]);
																	
																	
																	//retira a pessoa de incice i e de indice j
																	//alert('retirando '+pessoas[indice_i]);
																	pessoas.splice(indice_i,1);
																	
																	
																	//alert('retirando '+pessoas[indice_j]);
																	pessoas.splice(indice_j,1);
																	
																	
																	
																	
																		
																	//alert('retirando '+porcentagens_hard[indice_i]);
																	porcentagens_hard.splice(indice_i,1);	
																	
																	//retira a porcentagem da pessoa de incice i e de indice j
																	//alert('retirando '+porcentagens_hard[indice_j]);
																	porcentagens_hard.splice(indice_j,1);
																
																	//retira niveis
																	niveis.splice(indice_j,1);
																	niveis.splice(indice_i,1);
																	
																	
																	//retira soft skilss
																	qtd_soft_skills.splice(indice_j,1);
																	qtd_soft_skills.splice(indice_i,1);
																	
																	pode=0;
																	
																	
																
																
															}
														
															
													}
												
												//se equipe ainda for vazia
												if (equipe.length == 0 ) {
																	
																	novos_niveis.push(niveis[indice_i]);
																	novos_niveis.push(niveis[indice_j]);
																	
																	novos_soft_skills.push(qtd_soft_skills[indice_i]);
																	novos_soft_skills.push(qtd_soft_skills[indice_j]);
													
															//coloca a pessoa de incice i
																	//alert('colocando  '+pessoas[indice_i]);
																	equipe.push(pessoas[indice_i]);
																	//coloca a porcentagem da pessoa de incice i
																	
																	//alert('colocando  '+porcentagens_hard[indice_i]);
																	porc_equipe.push(porcentagens_hard[indice_i]);
																	
																	//coloca a pessoa de incice j
																	//alert('colocando   '+pessoas[indice_j]);
																	equipe.push(pessoas[indice_j]);
																	//coloca a porcentagem da pessoa de incice j
																	//alert('colocando   '+porcentagens_hard[indice_j]);
																	porc_equipe.push(porcentagens_hard[indice_j]);
																	
																	
																	//retira a pessoa de incice i e de indice j
																	//alert('retirando '+pessoas[indice_i]);
																	pessoas.splice(indice_i,1);
																	
																	
																	//alert('retirando '+pessoas[indice_j]);
																	pessoas.splice(indice_j,1);
																	
																	
																	
																	
																	//alert('retirando '+porcentagens_hard[indice_i]);
																	porcentagens_hard.splice(indice_i,1);	
																	
																	//retira a porcentagem da pessoa de incice i e de indice j
																	//alert('retirando '+porcentagens_hard[indice_j]);
																	porcentagens_hard.splice(indice_j,1);
																
																	
																	//retira niveis
																	niveis.splice(indice_j,1);
																	niveis.splice(indice_i,1);
																	
																	//retira soft skilss
																	qtd_soft_skills.splice(indice_j,1);
																	qtd_soft_skills.splice(indice_i,1);
																	
																	pode_niveis=0;
																	pode=0;
																	
															
															
													
												}
					}
					
					while (equipe2.length <tamanho){	
							
							//pega distancia entre valores maximo e minimo no array das porcentagens_hard 
							const min = Math.min(...porcentagens_hard);
							//const max = Math.max(...porcentagens_hard);	
											
							menor_hard=Math.abs(min);
							
							//pega distancia entre valores maximo e minimo no array das SOFT SKILLS
							const min2 = Math.min(...qtd_soft_skills);
							//const max2 = Math.max(...qtd_soft_skills);	
											
							menor_soft = Math.abs(min2);
							
							
							
							//letre o array para encontrar menor_hard distancia entre pares
							for (let i =0; i < porcentagens_hard.length; i++){
								for ( let j=0; j < porcentagens_hard.length; j++) {
											
										//alert ('tamanho '+equipe2.length);
										if (equipe2.length == 0 ) {
											if ((i!=j) && (niveis[i] != niveis[j])) {
												
												
												menor_dist_hard = Math.abs(porcentagens_hard[i] - porcentagens_hard[j]);
												
												menor_dist_soft = Math.abs(qtd_soft_skills[i] - qtd_soft_skills[j]);
													
													//verifica se nao ja tem o nivel no novo array de niveis
													let ver = novos_niveis2.includes(niveis[i]);
													let ver2 = novos_niveis2.includes(niveis[j]);
													
													
													//alert ('a menor_hard distancia = '+menor_dist_hard+ ' entre '+porcentagens_hard[i]+ ' e '+porcentagens_hard[j]+ ' eh menor ou igual que  ' +menor+ ' ? ');
													if ((menor_dist_hard >= menor_hard) && (menor_dist_soft >= menor_soft) && (ver==false) && (ver2==false) ){
														
														
														menor_hard = menor_dist_hard;
														menor_soft = menor_dist_soft;
														//salva o indice dos valores com menor_hard distancia 
														indice_i = i;
														indice_j = j;
													}
											}
										}	
										if (equipe2.length > 0 ){
											if ((i!=j) && (niveis[i] != niveis[j])) {
												menor_dist_hard = Math.abs(porcentagens_hard[i] - porcentagens_hard[j]);
												
												menor_dist_soft = Math.abs(qtd_soft_skills[i] - qtd_soft_skills[j]);						
												
													//verifica se nao ja tem o nivel no novo array de niveis
													let ver = novos_niveis2.includes(niveis[i]);
													let ver2 = novos_niveis2.includes(niveis[j]);
													
													
													
													//alert ('a menor_hard distancia = '+menor_dist_hard+ ' entre '+porcentagens_hard[i]+ ' e '+porcentagens_hard[j]+ ' eh menor ou igual que  ' +menor+ ' ? ');
													if ((menor_dist_hard >= menor_hard) && (menor_dist_soft >= menor_soft) && (ver==false) && (ver2==false) ){
														
														
														menor_hard = menor_dist_hard;
														
														//salva o indice dos valores com menor_hard distancia 
														indice_i = i;
														indice_j = j;
													}
											}
										}
								}
							}	
														//se equipe2 já tiver alguem
														if (equipe2.length > 0 ) {
															
															//letre array para confirmar que  a pessoa não foi inserida ja na equipe2
															for (p=0;p<=equipe2.length;p++){
															
																if ((pessoas[indice_i]  != equipe2[p]) && (pessoas[indice_j]  != equipe2[p])) {
																	pode=1;
																}
																
																
															}
															
															
														
																		
																
														
															
															//alert(novos_niveis2
																
																
															
															
															
															
															if (pode==1){
																	
																	
																	
																	
																
																		novos_niveis2.push(niveis[indice_i]);
																		novos_niveis2.push(niveis[indice_j]);
																		
																		novos_soft_skills2.push(qtd_soft_skills[indice_i]);
																		novos_soft_skills2.push(qtd_soft_skills[indice_j]);
																		
																	
																		//coloca a pessoa de incice i
																		//alert('colocando  '+pessoas[indice_i]);
																		equipe2.push(pessoas[indice_i]);
																		//coloca a porcentagem da pessoa de incice i
																		
																		//alert('colocando  '+porcentagens_hard[indice_i]);
																		porc_equipe2.push(porcentagens_hard[indice_i]);
																		
																		//coloca a pessoa de incice j
																		//alert('colocando   '+pessoas[indice_j]);
																		equipe2.push(pessoas[indice_j]);
																		//coloca a porcentagem da pessoa de incice j
																		//alert('colocando   '+porcentagens_hard[indice_j]);
																		porc_equipe2.push(porcentagens_hard[indice_j]);
																		
																		
																		//retira a pessoa de incice i e de indice j
																		//alert('retirando '+pessoas[indice_i]);
																		pessoas.splice(indice_i,1);
																		
																		
																		//alert('retirando '+pessoas[indice_j]);
																		pessoas.splice(indice_j,1);
																		
																		
																		
																		
																			
																		//alert('retirando '+porcentagens_hard[indice_i]);
																		porcentagens_hard.splice(indice_i,1);	
																		
																		//retira a porcentagem da pessoa de incice i e de indice j
																		//alert('retirando '+porcentagens_hard[indice_j]);
																		porcentagens_hard.splice(indice_j,1);
																	
																		//retira niveis
																		niveis.splice(indice_j,1);
																		niveis.splice(indice_i,1);
																		
																		
																		//retira soft skilss
																		qtd_soft_skills.splice(indice_j,1);
																		qtd_soft_skills.splice(indice_i,1);
																		
																		pode=0;
																		
																		
																	
																	
																}
															
																
														}
													
													//se equipe2 ainda for vazia
													if (equipe2.length == 0 ) {
																		
																		novos_niveis2.push(niveis[indice_i]);
																		novos_niveis2.push(niveis[indice_j]);
																		
																		novos_soft_skills2.push(qtd_soft_skills[indice_i]);
																		novos_soft_skills2.push(qtd_soft_skills[indice_j]);
														
																//coloca a pessoa de incice i
																		//alert('colocando  '+pessoas[indice_i]);
																		equipe2.push(pessoas[indice_i]);
																		//coloca a porcentagem da pessoa de incice i
																		
																		//alert('colocando  '+porcentagens_hard[indice_i]);
																		porc_equipe2.push(porcentagens_hard[indice_i]);
																		
																		//coloca a pessoa de incice j
																		//alert('colocando   '+pessoas[indice_j]);
																		equipe2.push(pessoas[indice_j]);
																		//coloca a porcentagem da pessoa de incice j
																		//alert('colocando   '+porcentagens_hard[indice_j]);
																		porc_equipe2.push(porcentagens_hard[indice_j]);
																		
																		
																		//retira a pessoa de incice i e de indice j
																		//alert('retirando '+pessoas[indice_i]);
																		pessoas.splice(indice_i,1);
																		
																		
																		//alert('retirando '+pessoas[indice_j]);
																		pessoas.splice(indice_j,1);
																		
																		
																		
																		
																		//alert('retirando '+porcentagens_hard[indice_i]);
																		porcentagens_hard.splice(indice_i,1);	
																		
																		//retira a porcentagem da pessoa de incice i e de indice j
																		//alert('retirando '+porcentagens_hard[indice_j]);
																		porcentagens_hard.splice(indice_j,1);
																	
																		
																		//retira niveis
																		niveis.splice(indice_j,1);
																		niveis.splice(indice_i,1);
																		
																		//retira soft skilss
																		qtd_soft_skills.splice(indice_j,1);
																		qtd_soft_skills.splice(indice_i,1);
																		
																		pode_niveis=0;
																		pode=0;
																		
																
																
														
													}
						}
					
										
				}
				// verifica se é heterogeneo e homogeneo
				if ((type_grouping1 == "option2") && (type_grouping2=="option3")){
					
						
						
						//alert('heterogeneo e homogeneo escolhido');

					// repetir enquanto o tamanho da equipe não é atingido
					while (equipe.length <tamanho){	
						
						//pega distancia entre valores maximo e minimo no array das porcentagens_hard 
						const min = Math.min(...porcentagens_hard);
						//const max = Math.max(...porcentagens_hard);	
										
						maior_hard = Math.abs(min);
						
						//pega distancia entre valores maximo e minimo no array das SOFT SKILLS
						const min2 = Math.min(...qtd_soft_skills);
						const max2 = Math.max(...qtd_soft_skills);	
										
						maior_soft = Math.abs(max2-min2);
						
						
						
						//letre o array para encontrar maior_hard distancia entre pares
						for (let i =0; i < porcentagens_hard.length; i++){
							for ( let j=0; j < porcentagens_hard.length; j++) {
										
									//alert ('tamanho '+equipe.length);
									if (equipe.length == 0 ) {
										if ((i!=j) && (niveis[i] != niveis[j])) {
											
											
											maior_dist_hard = Math.abs(porcentagens_hard[i] - porcentagens_hard[j]);
											
											maior_dist_soft = Math.abs(qtd_soft_skills[i] - qtd_soft_skills[j]);
												
												//verifica se nao ja tem o nivel no novo array de niveis
												let ver = novos_niveis.includes(niveis[i]);
												let ver2 = novos_niveis.includes(niveis[j]);
												
												
												//alert ('a maior_hard distancia = '+maior_dist_hard+ ' entre '+porcentagens_hard[i]+ ' e '+porcentagens_hard[j]+ ' eh menor ou igual que  ' +menor+ ' ? ');
												if ((maior_dist_hard >= maior_hard) && (maior_dist_soft <= maior_soft) && (ver==false) && (ver2==false) ){
													
													
													maior_hard = maior_dist_hard;
													maior_soft = maior_dist_soft;
													//salva o indice dos valores com maior_hard distancia 
													indice_i = i;
													indice_j = j;
												}
										}
									}	
									if (equipe.length > 0 ){
										if ((i!=j) && (niveis[i] != niveis[j])) {
											maior_dist_hard = Math.abs(porcentagens_hard[i] - porcentagens_hard[j]);
												
											maior_dist_soft = Math.abs(qtd_soft_skills[i] - qtd_soft_skills[j]);
											
											//verifica se nao ja tem o nivel no novo array de niveis
												let ver = novos_niveis.includes(niveis[i]);
												let ver2 = novos_niveis.includes(niveis[j]);
												
												
												
												//alert ('a maior_hard distancia = '+maior_dist_hard+ ' entre '+porcentagens_hard[i]+ ' e '+porcentagens_hard[j]+ ' eh menor ou igual que  ' +menor+ ' ? ');
												if ((maior_dist_hard >= maior_hard) && (maior_dist_soft <= maior_soft) && (ver==false) && (ver2==false) ){
													
													
													maior_hard = maior_dist_hard;
													maior_soft = maior_dist_soft;
													
													//salva o indice dos valores com maior_hard distancia 
													indice_i = i;
													indice_j = j;
												}
										}
									}
							}
						}	
													//se equipe já tiver alguem
													if (equipe.length > 0 ) {
														
														//letre array para confirmar que  a pessoa não foi inserida ja na equipe
														for (p=0;p<=equipe.length;p++){
														
															if ((pessoas[indice_i]  != equipe[p]) && (pessoas[indice_j]  != equipe[p])) {
																pode=1;
															}
															
															
														}
														
														
													
																	
															
													
														
														//alert(novos_niveis);
															
															
														
														
														
														
														if (pode==1){
																
																
																
																
															
																	novos_niveis.push(niveis[indice_i]);
																	novos_niveis.push(niveis[indice_j]);
																	
																	novos_soft_skills.push(qtd_soft_skills[indice_i]);
																	novos_soft_skills.push(qtd_soft_skills[indice_j]);
																	
																
																	//coloca a pessoa de incice i
																	//alert('colocando  '+pessoas[indice_i]);
																	equipe.push(pessoas[indice_i]);
																	//coloca a porcentagem da pessoa de incice i
																	
																	//alert('colocando  '+porcentagens_hard[indice_i]);
																	porc_equipe.push(porcentagens_hard[indice_i]);
																	
																	//coloca a pessoa de incice j
																	//alert('colocando   '+pessoas[indice_j]);
																	equipe.push(pessoas[indice_j]);
																	//coloca a porcentagem da pessoa de incice j
																	//alert('colocando   '+porcentagens_hard[indice_j]);
																	porc_equipe.push(porcentagens_hard[indice_j]);
																	
																	
																	//retira a pessoa de incice i e de indice j
																	//alert('retirando '+pessoas[indice_i]);
																	pessoas.splice(indice_i,1);
																	
																	
																	//alert('retirando '+pessoas[indice_j]);
																	pessoas.splice(indice_j,1);
																	
																	
																	
																	
																		
																	//alert('retirando '+porcentagens_hard[indice_i]);
																	porcentagens_hard.splice(indice_i,1);	
																	
																	//retira a porcentagem da pessoa de incice i e de indice j
																	//alert('retirando '+porcentagens_hard[indice_j]);
																	porcentagens_hard.splice(indice_j,1);
																
																	//retira niveis
																	niveis.splice(indice_j,1);
																	niveis.splice(indice_i,1);
																	
																	
																	//retira soft skilss
																	qtd_soft_skills.splice(indice_j,1);
																	qtd_soft_skills.splice(indice_i,1);
																	
																	pode=0;
																	
																	
																
																
															}
														
															
													}
												
												//se equipe ainda for vazia
												if (equipe.length == 0 ) {
																	
																	novos_niveis.push(niveis[indice_i]);
																	novos_niveis.push(niveis[indice_j]);
																	
																	novos_soft_skills.push(qtd_soft_skills[indice_i]);
																	novos_soft_skills.push(qtd_soft_skills[indice_j]);
													
															//coloca a pessoa de incice i
																	//alert('colocando  '+pessoas[indice_i]);
																	equipe.push(pessoas[indice_i]);
																	//coloca a porcentagem da pessoa de incice i
																	
																	//alert('colocando  '+porcentagens_hard[indice_i]);
																	porc_equipe.push(porcentagens_hard[indice_i]);
																	
																	//coloca a pessoa de incice j
																	//alert('colocando   '+pessoas[indice_j]);
																	equipe.push(pessoas[indice_j]);
																	//coloca a porcentagem da pessoa de incice j
																	//alert('colocando   '+porcentagens_hard[indice_j]);
																	porc_equipe.push(porcentagens_hard[indice_j]);
																	
																	
																	//retira a pessoa de incice i e de indice j
																	//alert('retirando '+pessoas[indice_i]);
																	pessoas.splice(indice_i,1);
																	
																	
																	//alert('retirando '+pessoas[indice_j]);
																	pessoas.splice(indice_j,1);
																	
																	
																	
																	
																	//alert('retirando '+porcentagens_hard[indice_i]);
																	porcentagens_hard.splice(indice_i,1);	
																	
																	//retira a porcentagem da pessoa de incice i e de indice j
																	//alert('retirando '+porcentagens_hard[indice_j]);
																	porcentagens_hard.splice(indice_j,1);
																
																	
																	//retira niveis
																	niveis.splice(indice_j,1);
																	niveis.splice(indice_i,1);
																	
																	//retira soft skilss
																	qtd_soft_skills.splice(indice_j,1);
																	qtd_soft_skills.splice(indice_i,1);
																	
																	pode_niveis=0;
																	pode=0;
																	
															
															
													
												}
					}
					
					
					while (equipe2.length <tamanho){	
							
							//pega distancia entre valores maximo e minimo no array das porcentagens_hard 
							const min = Math.min(...porcentagens_hard);
							//const max = Math.max(...porcentagens_hard);	
											
							menor_hard=Math.abs(min);
							
							//pega distancia entre valores maximo e minimo no array das SOFT SKILLS
							const min2 = Math.min(...qtd_soft_skills);
							const max2 = Math.max(...qtd_soft_skills);	
											
							menor_soft = Math.abs(max2-min2);
							
							
							
							//letre o array para encontrar menor_hard distancia entre pares
							for (let i =0; i < porcentagens_hard.length; i++){
								for ( let j=0; j < porcentagens_hard.length; j++) {
											
										//alert ('tamanho '+equipe2.length);
										if (equipe2.length == 0 ) {
											if ((i!=j) && (niveis[i] != niveis[j])) {
												
												
												menor_dist_hard = Math.abs(porcentagens_hard[i] - porcentagens_hard[j]);
												
												menor_dist_soft = Math.abs(qtd_soft_skills[i] - qtd_soft_skills[j]);
													
													//verifica se nao ja tem o nivel no novo array de niveis
													let ver = novos_niveis2.includes(niveis[i]);
													let ver2 = novos_niveis2.includes(niveis[j]);
													
													
													//alert ('a menor_hard distancia = '+menor_dist_hard+ ' entre '+porcentagens_hard[i]+ ' e '+porcentagens_hard[j]+ ' eh menor ou igual que  ' +menor+ ' ? ');
													if ((menor_dist_hard >= menor_hard) && (menor_dist_soft <= menor_soft) && (ver==false) && (ver2==false) ){
														
														
														menor_hard = menor_dist_hard;
														menor_soft = menor_dist_soft;
														//salva o indice dos valores com menor_hard distancia 
														indice_i = i;
														indice_j = j;
													}
											}
										}	
										if (equipe2.length > 0 ){
											if ((i!=j) && (niveis[i] != niveis[j])) {
												menor_dist_hard = Math.abs(porcentagens_hard[i] - porcentagens_hard[j]);
												
												menor_dist_soft = Math.abs(qtd_soft_skills[i] - qtd_soft_skills[j]);						
												
													//verifica se nao ja tem o nivel no novo array de niveis
													let ver = novos_niveis2.includes(niveis[i]);
													let ver2 = novos_niveis2.includes(niveis[j]);
													
													
													
													//alert ('a menor_hard distancia = '+menor_dist_hard+ ' entre '+porcentagens_hard[i]+ ' e '+porcentagens_hard[j]+ ' eh menor ou igual que  ' +menor+ ' ? ');
													if ((menor_dist_hard >= menor_hard) && (menor_dist_soft <= menor_soft) && (ver==false) && (ver2==false) ){
														
														
														menor_hard = menor_dist_hard;
														
														//salva o indice dos valores com menor_hard distancia 
														indice_i = i;
														indice_j = j;
													}
											}
										}
								}
							}	
														//se equipe2 já tiver alguem
														if (equipe2.length > 0 ) {
															
															//letre array para confirmar que  a pessoa não foi inserida ja na equipe2
															for (p=0;p<=equipe2.length;p++){
															
																if ((pessoas[indice_i]  != equipe2[p]) && (pessoas[indice_j]  != equipe2[p])) {
																	pode=1;
																}
																
																
															}
															
															
														
																		
																
														
															
															//alert(novos_niveis2
																
																
															
															
															
															
															if (pode==1){
																	
																	
																	
																	
																
																		novos_niveis2.push(niveis[indice_i]);
																		novos_niveis2.push(niveis[indice_j]);
																		
																		novos_soft_skills2.push(qtd_soft_skills[indice_i]);
																		novos_soft_skills2.push(qtd_soft_skills[indice_j]);
																		
																	
																		//coloca a pessoa de incice i
																		//alert('colocando  '+pessoas[indice_i]);
																		equipe2.push(pessoas[indice_i]);
																		//coloca a porcentagem da pessoa de incice i
																		
																		//alert('colocando  '+porcentagens_hard[indice_i]);
																		porc_equipe2.push(porcentagens_hard[indice_i]);
																		
																		//coloca a pessoa de incice j
																		//alert('colocando   '+pessoas[indice_j]);
																		equipe2.push(pessoas[indice_j]);
																		//coloca a porcentagem da pessoa de incice j
																		//alert('colocando   '+porcentagens_hard[indice_j]);
																		porc_equipe2.push(porcentagens_hard[indice_j]);
																		
																		
																		//retira a pessoa de incice i e de indice j
																		//alert('retirando '+pessoas[indice_i]);
																		pessoas.splice(indice_i,1);
																		
																		
																		//alert('retirando '+pessoas[indice_j]);
																		pessoas.splice(indice_j,1);
																		
																		
																		
																		
																			
																		//alert('retirando '+porcentagens_hard[indice_i]);
																		porcentagens_hard.splice(indice_i,1);	
																		
																		//retira a porcentagem da pessoa de incice i e de indice j
																		//alert('retirando '+porcentagens_hard[indice_j]);
																		porcentagens_hard.splice(indice_j,1);
																	
																		//retira niveis
																		niveis.splice(indice_j,1);
																		niveis.splice(indice_i,1);
																		
																		
																		//retira soft skilss
																		qtd_soft_skills.splice(indice_j,1);
																		qtd_soft_skills.splice(indice_i,1);
																		
																		pode=0;
																		
																		
																	
																	
																}
															
																
														}
													
													//se equipe2 ainda for vazia
													if (equipe2.length == 0 ) {
																		
																		novos_niveis2.push(niveis[indice_i]);
																		novos_niveis2.push(niveis[indice_j]);
																		
																		novos_soft_skills2.push(qtd_soft_skills[indice_i]);
																		novos_soft_skills2.push(qtd_soft_skills[indice_j]);
														
																//coloca a pessoa de incice i
																		//alert('colocando  '+pessoas[indice_i]);
																		equipe2.push(pessoas[indice_i]);
																		//coloca a porcentagem da pessoa de incice i
																		
																		//alert('colocando  '+porcentagens_hard[indice_i]);
																		porc_equipe2.push(porcentagens_hard[indice_i]);
																		
																		//coloca a pessoa de incice j
																		//alert('colocando   '+pessoas[indice_j]);
																		equipe2.push(pessoas[indice_j]);
																		//coloca a porcentagem da pessoa de incice j
																		//alert('colocando   '+porcentagens_hard[indice_j]);
																		porc_equipe2.push(porcentagens_hard[indice_j]);
																		
																		
																		//retira a pessoa de incice i e de indice j
																		//alert('retirando '+pessoas[indice_i]);
																		pessoas.splice(indice_i,1);
																		
																		
																		//alert('retirando '+pessoas[indice_j]);
																		pessoas.splice(indice_j,1);
																		
																		
																		
																		
																		//alert('retirando '+porcentagens_hard[indice_i]);
																		porcentagens_hard.splice(indice_i,1);	
																		
																		//retira a porcentagem da pessoa de incice i e de indice j
																		//alert('retirando '+porcentagens_hard[indice_j]);
																		porcentagens_hard.splice(indice_j,1);
																	
																		
																		//retira niveis
																		niveis.splice(indice_j,1);
																		niveis.splice(indice_i,1);
																		
																		//retira soft skilss
																		qtd_soft_skills.splice(indice_j,1);
																		qtd_soft_skills.splice(indice_i,1);
																		
																		pode_niveis=0;
																		pode=0;
																		
																
																
														
													}
						}
						
						
						
										
				}

	


alert('equipe:   '+equipe+ '\nporc_equipe:    '+porc_equipe+ '\nequipe 2:   '+equipe2+ '\nporc_equipe:    '+porc_equipe2);	

	//for (let tame = 0; tame < tamanho; tame++){
																			//coloca a pessoa de incice i
		
		//equipe2.push(pessoas[tame]);
		
																	
		
	
		
		
	//}
			
				
				
					
					for ( let i=0 ; i <= equipe.length; i++){
							
							if ((equipe[i]=='kiran') && (kiranpode==1)){
								$("#kiran").css("display", "block");
							}
							
							if ((equipe[i]=='fred') && (fredpode==1)){
								$("#fred").css("display", "block");
							}
							
							if ((equipe[i]=='alice') && (alicepode==1)){
								$("#alice").css("display", "block");
							}
							
							if ((equipe[i]=='dave') && (davepode==1)){
								$("#dave").css("display", "block");
							}
							
							if ((equipe[i]=='nick') && (nickpode==1)){
								$("#nick").css("display", "block");
							}
							
							
							if ((equipe[i]=='bob') && (bobpode==1)){
								$("#bob").css("display", "block");
								
							}
							
							if ((equipe[i]=='marcos') && (marcospode==1)){
								$("#marcos").css("display", "block");
							}
							
							if ((equipe[i]=='julia') && (juliapode==1)){
								$("#julia").css("display", "block");
							}
							
							if ((equipe[i]=='nick') && (nickpode==1)){
								$("#nick").css("display", "block");
							}
							if ((equipe[i]=='paul') && (paulpode==1)){
								$("#paul").css("display", "block");
							}
							if ((equipe[i]=='doug') && (dougpode==1)){
								$("#doug").css("display", "block");
							}
							if ((equipe[i]=='ana') && (anapode==1)){
								$("#ana").css("display", "block");
							}
							if ((equipe[i]=='rita') && (ritapode==1)){
								$("#rita").css("display", "block");
							}
							if ((equipe[i]=='peter') && (peterpode==1)){
								$("#peter").css("display", "block");
							}
							if ((equipe[i]=='claudio') && (claudiopode==1)){
								$("#claudio").css("display", "block");
							}
							
							
							if ((equipe[i]=='livia') && (liviapode==1)){
								$("#livia").css("display", "block");
							}
							if ((equipe[i]=='glaucia') && (glauciapode==1)){
								$("#glaucia").css("display", "block");
							}
					}
					
					porcentagem_sugestao1 = 0;
					
					
					for ( let i=0 ; i <= equipe.length; i++){
						
						if ((equipe[i]=='kiran') && ($('#kiran').css('display') == 'block')){
							porcentagem_sugestao1 = (porcentagem_sugestao1 + porcentagem_kiran);
						}
						
						if ((equipe[i]=='fred') && ($('#fred').css('display') == 'block')){
							porcentagem_sugestao1 = (porcentagem_sugestao1 + porcentagem_fred);
						}
						
						if ((equipe[i]=='alice') && ($('#alice').css('display') == 'block')){
							porcentagem_sugestao1 = (porcentagem_sugestao1 + porcentagem_alice);
						}
						
						if ((equipe[i]=='dave') && ($('#dave').css('display') == 'block')){
							porcentagem_sugestao1 = (porcentagem_sugestao1 + porcentagem_dave);
						}
					
						
						if ((equipe[i]=='bob') && ($('#bob').css('display') == 'block')){
							porcentagem_sugestao1 = (porcentagem_sugestao1 + porcentagem_bob);
						}
						
						if ((equipe[i]=='marcos') && ($('#marcos').css('display') == 'block')){
							porcentagem_sugestao1 = (porcentagem_sugestao1 + porcentagem_marcos);
						}
						
						if ((equipe[i]=='julia') && ($('#julia').css('display') == 'block')){
							porcentagem_sugestao1 = (porcentagem_sugestao1 + porcentagem_julia);
						}
						
						if ((equipe[i]=='nick') && ($('#nick').css('display') == 'block')){
							porcentagem_sugestao1 = (porcentagem_sugestao1 + porcentagem_nick);
						}
						
						if ((equipe[i]=='paul') && ($('#paul').css('display') == 'block')){
							porcentagem_sugestao1 = (porcentagem_sugestao1 + porcentagem_paul);
						}
						if ((equipe[i]=='doug') && ($('#doug').css('display') == 'block')){
							porcentagem_sugestao1 = (porcentagem_sugestao1 + porcentagem_doug);
						}
						if ((equipe[i]=='ana') && ($('#ana').css('display') == 'block')){
							porcentagem_sugestao1 = (porcentagem_sugestao1 + porcentagem_ana);
						}
						if ((equipe[i]=='rita') && ($('#rita').css('display') == 'block')){
							porcentagem_sugestao1 = (porcentagem_sugestao1 + porcentagem_rita);
						}
						if ((equipe[i]=='peter') && ($('#peter').css('display') == 'block')){
							porcentagem_sugestao1 = (porcentagem_sugestao1 + porcentagem_peter);
						}
						
						if ((equipe[i]=='claudio') && ($('#claudio').css('display') == 'block')){
							porcentagem_sugestao1 = (porcentagem_sugestao1 + porcentagem_claudio);
						}
						if ((equipe[i]=='livia') && ($('#livia').css('display') == 'block')){
							porcentagem_sugestao1 = (porcentagem_sugestao1 + porcentagem_livia);
						}
						if ((equipe[i]=='glaucia') && ($('#glaucia').css('display') == 'block')){
							porcentagem_sugestao1 = (porcentagem_sugestao1 + porcentagem_glaucia);
						}
					}
					
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}	
					
					
					for ( let i=0 ; i <= equipe2.length; i++){
					
							if ((equipe2[i]=='kiran') && (kiranpode==1)){
								$("#kiran2").css("display", "block");
							}
							
							if ((equipe2[i]=='fred') && (fredpode==1)){
								$("#fred2").css("display", "block");
							}
							
							if ((equipe2[i]=='alice') && (alicepode==1)){
								$("#alice2").css("display", "block");
							}
							
							if ((equipe2[i]=='dave') && (davepode==1)){
								$("#dave2").css("display", "block");
							}
							
							
							if ((equipe2[i]=='bob') && (bobpode==1)){
								$("#bob2").css("display", "block");
								
							}
							
							if ((equipe2[i]=='marcos') && (marcospode==1)){
								$("#marcos2").css("display", "block");
							}
							
							if ((equipe2[i]=='julia') && (juliapode==1)){
								$("#julia2").css("display", "block");
							}
							
							if ((equipe2[i]=='nick') && (nickpode==1)){
								$("#nick2").css("display", "block");
							}
							if ((equipe2[i]=='paul') && (paulpode==1)){
								$("#paul2").css("display", "block");
							}
							if ((equipe2[i]=='doug') && (dougpode==1)){
								$("#doug2").css("display", "block");
							}
							if ((equipe2[i]=='ana') && (anapode==1)){
								$("#ana2").css("display", "block");
							}
							if ((equipe2[i]=='rita') && (ritapode==1)){
								$("#rita2").css("display", "block");
							}
							if ((equipe2[i]=='peter') && (peterpode==1)){
								$("#peter2").css("display", "block");
							}
							if ((equipe2[i]=='claudio') && (claudiopode==1)){
								$("#claudio2").css("display", "block");
							}
							if ((equipe2[i]=='livia') && (liviapode==1)){
								$("#livia2").css("display", "block");
							}
							if ((equipe2[i]=='glaucia') && (glauciapode==1)){
								$("#glaucia2").css("display", "block");
							}
					
					}
					
	
					
					porcentagem_sugestao2 = 0;
					
					
					for ( let i=0 ; i <= equipe2.length; i++){
						
						if ((equipe2[i]=='kiran') && ($('#kiran2').css('display') == 'block')){
							porcentagem_sugestao2 = (porcentagem_sugestao2 + porcentagem_kiran);
						}
						
						if ((equipe2[i]=='fred') && ($('#fred2').css('display') == 'block')){
							porcentagem_sugestao2 = (porcentagem_sugestao2 + porcentagem_fred);
						}
						
						if ((equipe2[i]=='alice') && ($('#alice2').css('display') == 'block')){
							porcentagem_sugestao2 = (porcentagem_sugestao2 + porcentagem_alice);
						}
						
						if ((equipe2[i]=='dave') && ($('#dave2').css('display') == 'block')){
							porcentagem_sugestao2 = (porcentagem_sugestao2 + porcentagem_dave);
						}
					
						
						if ((equipe2[i]=='bob') && ($('#bob2').css('display') == 'block')){
							porcentagem_sugestao2 = (porcentagem_sugestao2 + porcentagem_bob);
						}
						
						if ((equipe2[i]=='marcos') && ($('#marcos2').css('display') == 'block')){
							porcentagem_sugestao2 = (porcentagem_sugestao2 + porcentagem_marcos);
						}
						
						if ((equipe2[i]=='julia') && ($('#julia2').css('display') == 'block')){
							porcentagem_sugestao2 = (porcentagem_sugestao2 + porcentagem_julia);
						}
						
						if ((equipe2[i]=='nick') && ($('#nick2').css('display') == 'block')){
							porcentagem_sugestao2 = (porcentagem_sugestao2 + porcentagem_nick);
						}
						
						if ((equipe2[i]=='paul') && ($('#paul2').css('display') == 'block')){
							porcentagem_sugestao2 = (porcentagem_sugestao2 + porcentagem_paul);
						}
						if ((equipe2[i]=='doug') && ($('#doug2').css('display') == 'block')){
							porcentagem_sugestao2 = (porcentagem_sugestao2 + porcentagem_doug);
						}
						if ((equipe2[i]=='ana') && ($('#ana2').css('display') == 'block')){
							porcentagem_sugestao2 = (porcentagem_sugestao2 + porcentagem_ana);
						}
						if ((equipe2[i]=='rita') && ($('#rita2').css('display') == 'block')){
							porcentagem_sugestao2 = (porcentagem_sugestao2 + porcentagem_rita);
						}
						if ((equipe2[i]=='peter') && ($('#peter2').css('display') == 'block')){
							porcentagem_sugestao2 = (porcentagem_sugestao2 + porcentagem_peter);
						}
						if ((equipe2[i]=='claudio') && ($('#claudio2').css('display') == 'block')){
							porcentagem_sugestao2 = (porcentagem_sugestao2 + porcentagem_claudio);
						}
						if ((equipe2[i]=='livia') && ($('#livia2').css('display') == 'block')){
							porcentagem_sugestao2 = (porcentagem_sugestao2 + porcentagem_livia);
						}
						if ((equipe2[i]=='glaucia') && ($('#glaucia2').css('display') == 'block')){
							porcentagem_sugestao2 = (porcentagem_sugestao2 + porcentagem_glaucia);
						}
					}
					
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
						
					}
					if (porcentagem_sugestao2>49){
							
							
							$("#percentual_equipe2").css("background-color", "#008000");
						
	
						
					}
					if (porcentagem_sugestao2<40){
								$("#percentual_equipe2").css("background-color", "#ae0000");
						
					}
					
				
					
				
					localStorage.setItem('qtd_mas', qtd_devmaster);	
					localStorage.setItem('qtd_ple', qtd_devmiddle);	
					localStorage.setItem('qtd_sen', qtd_devsenior);	
					localStorage.setItem('qtd_jun', qtd_devjunior);	
					
					
					
					
					
					
					$("#sugestao1").css("display", "block");
					$("#sugestao2").css("display", "block");
					
					
					//verifica se há projetos similares e exibe o botao ver similar projects
					
					for (let j=0; j < texts.length; j++) {
							let tecnolo = texts[j];
							if ((tecnolo == 'Java') || (tecnolo == 'Web') || (tecnolo == 'MVC')){
								 document.getElementById("similarprojects").style.display = "block";
							}
					}
					
					
					
					
					
					
	}
			
				
	
	$("#defaultdemo").click(function() {
				let projetoa=0;
				let projetob=0;
				for (let j=0; j < texts.length; j++) {
					 
					 
					 let tecnolo = texts[j];
						
					if (((tecnolo == 'Java') || (tecnolo == 'MVC') || (tecnolo == 'Spring')) && ( $( "#natureza" ).val()==0) ){
						projetoa=1;
					}
					if (((tecnolo == 'Java') || (tecnolo == 'Web') || (tecnolo == 'Spring'))   && ( $( "#natureza" ).val()==0) ){
						projetob=1;
					}
					if((projetoa>0) && (projetob==0)){
						
						simplePopup({
					
							'pop-title':'Similar Projects', 
							'pop-body':'&nbsp;&nbsp;<b>PROJECT A:</b><br>&nbsp;&nbsp; Nature: Similar Technology <br>&nbsp;&nbsp; Date begin: 01/01/2020  &nbsp;&nbsp; Date end: 10/12/2021 &nbsp;&nbsp;<br>&nbsp;&nbsp;  Team: Claudio, Evelyn, Funny, Gregory <br> <br>&nbsp;&nbsp;Technologies: Java, MVC, Spring &nbsp;&nbsp; <br><br> &nbsp;&nbsp;Soft Skills: Initiative, Communication &nbsp;&nbsp;', 
							'btn-text':'Close',
							'body-align':'left',
							'auto-break': 35,
					
						});
						
					}	
					if ((projetob>0) && (projetoa==0)){
						
						simplePopup({
					
							'pop-title':'Similar Projects', 
							'pop-body':'&nbsp;&nbsp;<b>PROJECT B:</b><br>&nbsp;&nbsp;Nature: Similar Technology <br>&nbsp;&nbsp; Date begin: 01/01/2020  &nbsp;&nbsp;Date end: 10/12/2022 &nbsp;&nbsp; <br>&nbsp;&nbsp; Team: Oliver O., Pedro P., Roberta <br> <br>&nbsp;&nbsp;Technologies: Java, WEB, Spring &nbsp;&nbsp;&nbsp;&nbsp;Soft Skills: Creativity, Proactivity &nbsp;&nbsp;', 
							'btn-text':'Close',
							'body-align':'left',
							'auto-break': 35,
					
						});
						
					}
					if ((projetoa>0) && (projetob>0)){
						
						simplePopup({
					
							'pop-title':'Similar Projects', 
							'pop-body':'&nbsp;&nbsp;<b>PROJECT A:</b><br>&nbsp;&nbsp; Nature: Similar Technology <br>&nbsp;&nbsp; Date begin: 01/01/2020 &nbsp;&nbsp; Date end: 10/12/2021 &nbsp;&nbsp;<br>&nbsp;&nbsp;  Team: Claudio, Evelyn, Funny, Gregory <br> <br>&nbsp;&nbsp;Technologies: Java, MVC, Spring &nbsp;&nbsp;  &nbsp;&nbsp;Soft Skills: Initiative, Communication &nbsp;&nbsp; <br><br> &nbsp;&nbsp;<b>PROJECT B:</b><br>&nbsp;&nbsp;Nature: Similar Technology <br>&nbsp;&nbsp; Date begin: 01/01/2020 &nbsp;&nbsp;Date end: 10/12/2022 &nbsp;&nbsp;<br>&nbsp;&nbsp; Team: Oliver O., Pedro P., Roberta &nbsp;&nbsp;<br><br>&nbsp;&nbsp;Technologies: Java, WEB, Spring &nbsp;&nbsp; &nbsp;&nbsp;Soft Skills: Creativity, Proactivity &nbsp;&nbsp;', 
							'btn-text':'Close',
							'body-align':'left',
							'auto-break': 35,
					
						});
						
					}	
					
					if ((projetoa==0) && (projetob==0)){
						
						simplePopup({
					
							'pop-title':'Similar Projects', 
							'pop-body':'&nbsp;&nbsp;<b>&nbsp;similar or new technology?&nbsp;', 
							'btn-text':'Close',
							'body-align':'left',
							'auto-break': 35,
					
						});
						
					}	
					
					
						
						
				}
					
					
					
				function sampleExitTask() {
					$("#exitTaskOutput").html("Action on Popup Dismissal.<br>This event fired at the time the popup was dismissed based on the function assigned to the 'click-fn' option.");
					$("#exitTaskOutput").css({padding: "4px", background: "#ff8080"});
					$("#exitTaskOutput").fadeIn();
					setTimeout(function(){
						$("#exitTaskOutput").fadeOut();
					},6000);
				}	
				
				
	});
					
					
						
					
					
		
			$( "#salletequipe" ).click(function() {	
						alert('saving');
						
						localStorage.setItem('valueTexto', equipe);
						localStorage.setItem('valueText', ig);
						
							
				
						
						
				});			
		

	

				
				
				
				
							
							
							
							
		
		$("#kiran").draggable();
		$("#kiran2").draggable();
		
		$("#fred").draggable();
		$("#fred2").draggable();
		
		$("#alice").draggable();
		$("#alice2").draggable();
		
		$("#dave").draggable();
		$("#dave2").draggable();
		
		//---------------------//
		
		$("#bob").draggable();
		$("#bob2").draggable();
		
		$("#marcos").draggable();
		$("#marcos2").draggable();
		
		$("#julia").draggable();
		$("#julia2").draggable();
		
		$("#nick").draggable();
		$("#nick2").draggable();
		
		$("#paul").draggable();
		$("#paul2").draggable();
		
		$("#doug").draggable();
		$("#doug2").draggable();
		
		$("#ana").draggable();
		$("#ana2").draggable();
		
		$("#rita").draggable();
		$("#rita2").draggable();
		
		$("#peter").draggable();
		$("#peter2").draggable();
		
		$("#claudio").draggable();
		$("#claudio2").draggable();
		
		
		$("#livia").draggable();
		$("#livia2").draggable();
		
		$("#glaucia").draggable();
		$("#glaucia2").draggable();
		
        $("#sugest2").droppable({
		
            drop: function(event, ui) {
				//---------------Verifica se kiran foi movido para sugestao 2----------------------//
				if (($("#kiran").is('.ui-draggable-dragging')) && (kiran_sugest1==1) ){
					$("#kiran").css("z-index", a++);
					kiran_sugest1=0;
					for (let j=0; j<equipe.length; j++){
						
						if(equipe[j]=='kiran'){
							equipe2.push('kiran');
							porc_equipe2.push(porcentagem_kiran);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						} 
						
						
					}
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					
					
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}	
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					
					
					
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}	
				}
				//-------------------------------------------------------------------//
				//---------------Verifica se fred foi movido para sugestao 2----------------------//
				if (($("#fred").is('.ui-draggable-dragging')) && (fred_sugest1==1) ){
					$("#fred").css("z-index", a++);
					fred_sugest1=0;
					for (let j=0; j<equipe.length; j++){
						
						if(equipe[j]=='fred'){
							equipe2.push('fred');
							porc_equipe2.push(porcentagem_fred);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					
					
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}	
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}	
				}
				//-------------------------------------------------------------------//
				//---------------Verifica se ALICE foi movido para sugestao 2----------------------//
				if (($("#alice").is('.ui-draggable-dragging')) && (alice_sugest1==1) ){
					$("#alice").css("z-index", a++);
					alice_sugest1=0;
					for (let j=0; j<equipe.length; j++){
						
						if(equipe[j]=='alice'){
							equipe2.push('alice');
							porc_equipe2.push(porcentagem_alice);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					
					
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}	
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}	
				}
				//-------------------------------------------------------------------//
				
				//---------------Verifica se DAVE foi movido para sugestao 2----------------------//
				if (($("#dave").is('.ui-draggable-dragging')) && (dave_sugest1==1) ){
					$("#dave").css("z-index", a++);
					dave_sugest1=0;
					for (let j=0; j<equipe.length; j++){
						
						if(equipe[j]=='dave'){
							equipe2.push('dave');
							porc_equipe2.push(porcentagem_dave);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}	
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}	
				}
				//-------------------------------------------------------------------//
				//-------------------------------------------------------------------//
				//-------------------------------------------------------------------//
				//---------------Verifica se BOB foi movido para sugestao 2----------------------//
				if (($("#bob").is('.ui-draggable-dragging')) && (bob_sugest1==1) ){
					$("#bob").css("z-index", a++);
					bob_sugest1=0;
					for (let j=0; j<equipe.length; j++){
						
						if(equipe[j]=='bob'){
							equipe2.push('bob');
							porc_equipe2.push(porcentagem_bob);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}	
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}	
				}
				//-------------------------------------------------------------------//		
				//---------------Verifica se MARCOS foi movido para sugestao 2----------------------//
				if (($("#marcos").is('.ui-draggable-dragging')) && (marcos_sugest1==1) ){
					$("#marcos").css("z-index", a++);
					marcos_sugest1=0;
					for (let j=0; j<equipe.length; j++){
						
						if(equipe[j]=='marcos'){
							equipe2.push('marcos');
							porc_equipe2.push(porcentagem_marcos);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}	
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}	
				}
				//-------------------------------------------------------------------//				
				//---------------Verifica se JULIA foi movido para sugestao 2----------------------//
				if (($("#julia").is('.ui-draggable-dragging')) && (julia_sugest1==1) ){
					$("#julia").css("z-index", a++);
					julia_sugest1=0;
					for (let j=0; j<equipe.length; j++){
						
						if(equipe[j]=='julia'){
							equipe2.push('julia');
							porc_equipe2.push(porcentagem_julia);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}	
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}	
				}
				//-------------------------------------------------------------------//			
				//---------------Verifica se NICK foi movido para sugestao 2-------------------//
				if (($("#nick").is('.ui-draggable-dragging')) && (nick_sugest1==1) ){
					$("#nick").css("z-index", a++);
					nick_sugest1=0;
					for (let j=0; j<equipe.length; j++){
						
						if(equipe[j]=='nick'){
							equipe2.push('nick');
							porc_equipe2.push(porcentagem_nick);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}	
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}	
				}
				//-------------------------------------------------------------------//				
				
				//-------------------------------------------------------------------//			
				//---------------Verifica se PAUL foi movido para sugestao 2-------------------//
				if (($("#paul").is('.ui-draggable-dragging')) && (paul_sugest1==1) ){
					$("#paul").css("z-index", a++);
					paul_sugest1=0;
					for (let j=0; j<equipe.length; j++){
						
						if(equipe[j]=='paul'){
							equipe2.push('paul');
							porc_equipe2.push(porcentagem_paul);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}	
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}	
				}
				//-------------------------------------------------------------------//	
				//---------------Verifica se DOUG foi movido para sugestao 2----------------------//
				if (($("#doug").is('.ui-draggable-dragging')) && (doug_sugest1==1) ){
					$("#doug").css("z-index", a++);
					doug_sugest1=0;
					for (let j=0; j<equipe.length; j++){
						
						if(equipe[j]=='doug'){
							equipe2.push('doug');
							porc_equipe2.push(porcentagem_doug);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						} 
						
						
					}
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					
					
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}	
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					
					
					
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}	
				}
				//-------------------------------------------------------------------//
				
				
				//-------------------------------------------------------------------//	
				//---------------Verifica se ANA foi movido para sugestao 2----------------------//
				if (($("#ana").is('.ui-draggable-dragging')) && (ana_sugest1==1) ){
					$("#ana").css("z-index", a++);
					ana_sugest1=0;
					for (let j=0; j<equipe.length; j++){
						
						if(equipe[j]=='ana'){
							equipe2.push('ana');
							porc_equipe2.push(porcentagem_ana);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						} 
						
						
					}
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					
					
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}	
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					
					
					
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}	
				}
				//-------------------------------------------------------------------//
				
				
				//-------------------------------------------------------------------//	
				//---------------Verifica se RITA foi movido para sugestao 2----------------------//
				if (($("#rita").is('.ui-draggable-dragging')) && (rita_sugest1==1) ){
					$("#rita").css("z-index", a++);
					rita_sugest1=0;
					for (let j=0; j<equipe.length; j++){
						
						if(equipe[j]=='rita'){
							equipe2.push('rita');
							porc_equipe2.push(porcentagem_rita);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						} 
						
						
					}
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					
					
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}	
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					
					
					
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}	
				}
				//-------------------------------------------------------------------//
				
				//-------------------------------------------------------------------//	
				//---------------Verifica se PETER foi movido para sugestao 2----------------------//
				if (($("#peter").is('.ui-draggable-dragging')) && (peter_sugest1==1) ){
					$("#peter").css("z-index", a++);
					peter_sugest1=0;
					for (let j=0; j<equipe.length; j++){
						
						if(equipe[j]=='peter'){
							equipe2.push('peter');
							porc_equipe2.push(porcentagem_peter);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						} 
						
						
					}
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					
					
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}	
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					
					
					
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}	
				}
				//-------------------------------------------------------------------//
				
				
				
				//-------------------------------------------------------------------//	
				//---------------Verifica se CLAUDIO foi movido para sugestao 2----------------------//
				if (($("#claudio").is('.ui-draggable-dragging')) && (claudio_sugest1==1) ){
					$("#claudio").css("z-index", a++);
					claudio_sugest1=0;
					for (let j=0; j<equipe.length; j++){
						
						if(equipe[j]=='claudio'){
							equipe2.push('claudio');
							porc_equipe2.push(porcentagem_claudio);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						} 
						
						
					}
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					
					
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}	
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					
					
					
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}	
				}
				//-------------------------------------------------------------------//
				
				
				//-------------------------------------------------------------------//	
				//---------------Verifica se LIVIA foi movidA para sugestao 2----------------------//
				if (($("#livia").is('.ui-draggable-dragging')) && (livia_sugest1==1) ){
					$("#livia").css("z-index", a++);
					livia_sugest1=0;
					for (let j=0; j<equipe.length; j++){
						
						if(equipe[j]=='livia'){
							equipe2.push('livia');
							porc_equipe2.push(porcentagem_livia);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						} 
						
						
					}
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					
					
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}	
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					
					
					
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}	
				}
				//-------------------------------------------------------------------//
				
				
				//-------------------------------------------------------------------//	
				//---------------Verifica se GLAUCIA foi movidA para sugestao 2----------------------//
				if (($("#glaucia").is('.ui-draggable-dragging')) && (glaucia_sugest1==1) ){
					$("#glaucia").css("z-index", a++);
					glaucia_sugest1=0;
					for (let j=0; j<equipe.length; j++){
						
						if(equipe[j]=='glaucia'){
							equipe2.push('glaucia');
							porc_equipe2.push(porcentagem_glaucia);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						} 
						
						
					}
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					
					
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}	
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					
					
					
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}	
				}
				//-------------------------------------------------------------------//
				
				
				
				
            },
            over: function(event, ui) {
			
            },
            out: function(event, ui) {
				//-----------------verifica se kiran voltou para sugestao 1 -----------------//
				if (($("#kiran").is('.ui-draggable-dragging')) && (kiran_sugest1==0) ){
					$("#kiran").css("z-index", a++);
					kiran_sugest1=1;	
					for (let j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='kiran'){
							equipe.push('kiran');
							porc_equipe.push(porcentagem_kiran);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}	
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}	
				}
				//--------------------------------------------------------------------//
				//-----------------verifica se fred voltou para sugestao 1 -----------------//
				if (($("#fred").is('.ui-draggable-dragging')) && (fred_sugest1==0) ){
					$("#fred").css("z-index", a++);
					fred_sugest1=1;	
					for (let j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='fred'){
							equipe.push('fred');
							porc_equipe.push(porcentagem_fred);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}	
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}	
				}
				//--------------------------------------------------------------------//
				//-----------------verifica se alice voltou para sugestao 1 -----------------//
				if (($("#alice").is('.ui-draggable-dragging')) && (alice_sugest1==0) ){
					$("#alice").css("z-index", a++);
					alice_sugest1=1;	
					for (let j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='alice'){
							equipe.push('alice');
							porc_equipe.push(porcentagem_alice);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//--------------------------------------------------------------------//
				
				//-----------------verifica se DAVE voltou para sugestao 1 -----------------//
				if (($("#dave").is('.ui-draggable-dragging')) && (dave_sugest1==0) ){
						$("#dave").css("z-index", a++);
						dave_sugest1=1;	
					for (let j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='dave'){
							equipe.push('dave');
							porc_equipe.push(porcentagem_dave);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//--------------------------------------------------------------------//
				//--------------------------------------------------------------------//
				//--------------------------------------------------------------------//
				//-----------------verifica se bob voltou para sugestao 1 -----------------//
				if (($("#bob").is('.ui-draggable-dragging')) && (bob_sugest1==0) ){
					$("#bob").css("z-index", a++);
					bob_sugest1=1;	
					for (let j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='bob'){
							equipe.push('bob');
							porc_equipe.push(porcentagem_bob);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//--------------------------------------------------------------------//
				//-----------------verifica se MARCOS voltou para sugestao 1 -----------------//
				if (($("#marcos").is('.ui-draggable-dragging')) && (marcos_sugest1==0) ){
					$("#marcos").css("z-index", a++);
					marcos_sugest1=1;	
					for (let j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='marcos'){
							equipe.push('marcos');
							porc_equipe.push(porcentagem_marcos);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//--------------------------------------------------------------------//
				//-----------------verifica se julia voltou para sugestao 1 -----------------//
				if (($("#julia").is('.ui-draggable-dragging')) && (julia_sugest1==0) ){
					$("#julia").css("z-index", a++);
					julia_sugest1=1;	
					for (let j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='julia'){
							equipe.push('julia');
							porc_equipe.push(porcentagem_julia);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//--------------------------------------------------------------------//
				//-----------------verifica se NICK voltou para sugestao 1 -----------------//
				if (($("#nick").is('.ui-draggable-dragging')) && (nick_sugest1==0) ){
					$("#nick").css("z-index", a++);
					nick_sugest1=1;	
					for (let j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='nick'){
							equipe.push('nick');
							porc_equipe.push(porcentagem_nick);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//--------------------------------------------------------------------//
				
				//--------------------------------------------------------------------//
				//-----------------verifica se PAUL voltou para sugestao 1 -----------------//
				if (($("#paul").is('.ui-draggable-dragging')) && (paul_sugest1==0) ){
					$("#paul").css("z-index", a++);
					paul_sugest1=1;	
					for (let j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='paul'){
							equipe.push('paul');
							porc_equipe.push(porcentagem_paul);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//--------------------------------------------------------------------//
				
				//-----------------verifica se DOUG voltou para sugestao 1 -----------------//
				if (($("#doug").is('.ui-draggable-dragging')) && (doug_sugest1==0) ){
					$("#doug").css("z-index", a++);
					doug_sugest1=1;	
					for (let j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='doug'){
							equipe.push('doug');
							porc_equipe.push(porcentagem_doug);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}	
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}	
				}
				
				
				//--------------------------------------------------------------------//
				
				//-----------------verifica se ANA voltou para sugestao 1 -----------------//
				if (($("#ana").is('.ui-draggable-dragging')) && (ana_sugest1==0) ){
					$("#ana").css("z-index", a++);
					ana_sugest1=1;	
					for (let j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='ana'){
							equipe.push('ana');
							porc_equipe.push(porcentagem_ana);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}	
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}	
				}
				
				
				//--------------------------------------------------------------------//
				
				//-----------------verifica se RITA voltou para sugestao 1 -----------------//
				if (($("#rita").is('.ui-draggable-dragging')) && (rita_sugest1==0) ){
					$("#rita").css("z-index", a++);
					rita_sugest1=1;	
					for (let j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='rita'){
							equipe.push('rita');
							porc_equipe.push(porcentagem_rita);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}	
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}	
				}
				
				
				//--------------------------------------------------------------------//
				
				//-----------------verifica se PETER voltou para sugestao 1 -----------------//
				if (($("#peter").is('.ui-draggable-dragging')) && (peter_sugest1==0) ){
					$("#peter").css("z-index", a++);
					peter_sugest1=1;	
					for (let j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='peter'){
							equipe.push('peter');
							porc_equipe.push(porcentagem_peter);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}	
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}	
				}
				
				
				//--------------------------------------------------------------------//
				
				//-----------------verifica se claudio voltou para sugestao 1 -----------------//
				if (($("#claudio").is('.ui-draggable-dragging')) && (claudio_sugest1==0) ){
					$("#claudio").css("z-index", a++);
					claudio_sugest1=1;	
					for (let j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='claudio'){
							equipe.push('claudio');
							porc_equipe.push(porcentagem_claudio);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}	
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}	
				}
				
				//==========================================================================
				
				
				//--------------------------------------------------------------------//
				
				//-----------------verifica se LIVIA voltou para sugestao 1 -----------------//
				if (($("#livia").is('.ui-draggable-dragging')) && (livia_sugest1==0) ){
					$("#livia").css("z-index", a++);
					livia_sugest1=1;	
					for (let j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='livia'){
							equipe.push('livia');
							porc_equipe.push(porcentagem_livia);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}	
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}	
				}
				
				//==========================================================================
				
				
				//--------------------------------------------------------------------//
				
				//-----------------verifica se GLAUCIA voltou para sugestao 1 -----------------//
				if (($("#glaucia").is('.ui-draggable-dragging')) && (glaucia_sugest1==0) ){
					$("#glaucia").css("z-index", a++);
					glaucia_sugest1=1;	
					for (let j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='glaucia'){
							equipe.push('glaucia');
							porc_equipe.push(porcentagem_glaucia);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}	
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}	
				}
				
				//==========================================================================
				
				
				
			}
			
		});
         

				 
				
            //---------------- ARRASTAVEIS 2 da SUGESTAO 2 p sugest 1 --------------------------------//
			
      $("#sugest1").droppable({
		
            drop: function(event, ui) {
				//---------------Verifica se kiran foi movido para sugestao 1-----------------//
				if (($("#kiran2").is('.ui-draggable-dragging')) && (kiran2_sugest1==1) ){
					$("#kiran2").css("z-index", a++);
					kiran2_sugest1=0;
					for (let j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='kiran'){
							equipe.push('kiran');
							porc_equipe.push(porcentagem_kiran);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//-------------------------------------------------------------------//
				//---------------Verifica se fred foi movido para sugestao 1------------------//
				if (($("#fred2").is('.ui-draggable-dragging')) && (fred2_sugest1==1) ){
					$("#fred2").css("z-index", a++);
					fred2_sugest1=0;
					for (let j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='fred'){
							equipe.push('fred');
							porc_equipe.push(porcentagem_fred);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//-------------------------------------------------------------------//
				//---------------Verifica se ALICE foi movido para sugestao 1-------------//
				if (($("#alice2").is('.ui-draggable-dragging')) && (alice2_sugest1==1) ){
					$("#alice2").css("z-index", a++);
					alice2_sugest1=0;
					for (let j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='alice'){
							equipe.push('alice');
							porc_equipe.push(porcentagem_alice);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//-------------------------------------------------------------------//
				
				//---------------Verifica se DAVE foi movido para sugestao 2----------------------//
				if (($("#dave2").is('.ui-draggable-dragging')) && (dave2_sugest1==1) ){
					$("#dave2").css("z-index", a++);
					dave2_sugest1=0;
					for (let j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='dave'){
							equipe.push('dave');
							porc_equipe.push(porcentagem_dave);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//-------------------------------------------------------------------//
				//-------------------------------------------------------------------//
				//-------------------------------------------------------------------//
				//---------------Verifica se BOB foi movido para sugestao 2----------------------//
				if (($("#bob2").is('.ui-draggable-dragging')) && (bob2_sugest1==1) ){
					$("#bob2").css("z-index", a++);
					bob2_sugest1=0;
					for (let j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='bob'){
							equipe.push('bob');
							porc_equipe.push(porcentagem_bob);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//-------------------------------------------------------------------//		
				//---------------Verifica se MARCOS foi movido para sugestao 2----------------------//
				if (($("#marcos2").is('.ui-draggable-dragging')) && (marcos2_sugest1==1) ){
					$("#marcos2").css("z-index", a++);
					marcos2_sugest1=0;
					for (let j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='marcos'){
							equipe.push('marcos');
							porc_equipe.push(porcentagem_marcos);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//-------------------------------------------------------------------//				
				//---------------Verifica se JULIA foi movido para sugestao 2----------------------//
				if (($("#julia2").is('.ui-draggable-dragging')) && (julia2_sugest1==1) ){
					$("#julia2").css("z-index", a++);
					julia2_sugest1=0;
					for (let j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='julia'){
							equipe.push('julia');
							porc_equipe.push(porcentagem_julia);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//-------------------------------------------------------------------//			
				//---------------Verifica se NICK foi movido para sugestao 2----------------------//
				if (($("#nick2").is('.ui-draggable-dragging')) && (nick2_sugest1==1) ){
					$("#nick2").css("z-index", a++);
					nick2_sugest1=0;
					for (let j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='nick'){
							equipe.push('nick');
							porc_equipe.push(porcentagem_nick);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//-------------------------------------------------------------------//		


				//-------------------------------------------------------------------//			
				//---------------Verifica se PAUL foi movido para sugestao 2----------------------//
				if (($("#paul2").is('.ui-draggable-dragging')) && (paul2_sugest1==1) ){
					$("#paul2").css("z-index", a++);
					paul2_sugest1=0;
					for (let j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='paul'){
							equipe.push('paul');
							porc_equipe.push(porcentagem_paul);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//-------------------------------------------------------------------//	
				//---------------Verifica se DOUG foi movido para sugestao 1-----------------//
				if (($("#doug2").is('.ui-draggable-dragging')) && (doug2_sugest1==1) ){
					$("#doug2").css("z-index", a++);
					doug2_sugest1=0;
					for (let j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='doug'){
							equipe.push('doug');
							porc_equipe.push(porcentagem_doug);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				
				
				//-------------------------------------------------------------------//	
				//---------------Verifica se ANA foi movido para sugestao 1-----------------//
				if (($("#ana2").is('.ui-draggable-dragging')) && (ana2_sugest1==1) ){
					$("#ana2").css("z-index", a++);
					ana2_sugest1=0;
					for (let j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='ana'){
							equipe.push('ana');
							porc_equipe.push(porcentagem_ana);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				
				
				//-------------------------------------------------------------------//	
				//---------------Verifica se RITA foi movido para sugestao 1-----------------//
				if (($("#rita2").is('.ui-draggable-dragging')) && (rita2_sugest1==1) ){
					$("#rita2").css("z-index", a++);
					rita2_sugest1=0;
					for (let j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='rita'){
							equipe.push('rita');
							porc_equipe.push(porcentagem_rita);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				
				//-------------------------------------------------------------------//	
				//---------------Verifica se PETER foi movido para sugestao 1-----------------//
				if (($("#peter2").is('.ui-draggable-dragging')) && (peter2_sugest1==1) ){
					$("#peter2").css("z-index", a++);
					peter2_sugest1=0;
					for (let j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='peter'){
							equipe.push('peter');
							porc_equipe.push(porcentagem_peter);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				
				
				//-------------------------------------------------------------------//	
				//---------------Verifica se CLAUDIO foi movido para sugestao 1-----------------//
				if (($("#claudio2").is('.ui-draggable-dragging')) && (claudio2_sugest1==1) ){
					$("#claudio2").css("z-index", a++);
					claudio2_sugest1=0;
					for (let j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='claudio'){
							equipe.push('claudio');
							porc_equipe.push(porcentagem_claudio);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				
				//=================================================================
				
				
				//-------------------------------------------------------------------//	
				//---------------Verifica se LIVIA foi movido para sugestao 1-----------------//
				if (($("#livia2").is('.ui-draggable-dragging')) && (livia2_sugest1==1) ){
					$("#livia2").css("z-index", a++);
					livia2_sugest1=0;
					for (let j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='livia'){
							equipe.push('livia');
							porc_equipe.push(porcentagem_livia);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				
				//=================================================================
				
				
				
				//-------------------------------------------------------------------//	
				//---------------Verifica se GLAUCIA foi movido para sugestao 1-----------------//
				if (($("#glaucia2").is('.ui-draggable-dragging')) && (glaucia2_sugest1==1) ){
					$("#glaucia2").css("z-index", a++);
					glaucia2_sugest1=0;
					for (let j=0; j<equipe2.length; j++){
						
						if(equipe2[j]=='glaucia'){
							equipe.push('glaucia');
							porc_equipe.push(porcentagem_glaucia);
							
							equipe2.splice(j, 1);
							porc_equipe2.splice(j, 1);
						}
						
					}
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
						
						
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				
				//=================================================================
				
				
				
            },
            over: function(event, ui) {
			
            },
            out: function(event, ui) {
				//-----------------verifica se kiran2 voltou para sugestao 2 -----------------//
				if (($("#kiran2").is('.ui-draggable-dragging')) && (kiran2_sugest1==0) ){
					$("#kiran2").css("z-index", a++);	
					kiran2_sugest1=1;	
					for (let j=0; j<equipe.length; j++){
						
						if(equipe[j]=='kiran'){
							equipe2.push('kiran');
							porc_equipe2.push(porcentagem_kiran);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//--------------------------------------------------------------------//
				//-----------------verifica se fred2 voltou para sugestao 2 -----------------//
				if (($("#fred2").is('.ui-draggable-dragging')) && (fred2_sugest1==0) ){
					$("#fred2").css("z-index", a++);	
					fred2_sugest1=1;	
					for (let j=0; j<equipe.length; j++){
						
						if(equipe[j]=='fred'){
							equipe2.push('fred');
							porc_equipe2.push(porcentagem_fred);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//--------------------------------------------------------------------//
				//-----------------verifica se alice2 voltou para sugestao 2 -----------------//
				if (($("#alice2").is('.ui-draggable-dragging')) && (alice2_sugest1==0) ){
					$("#alice2").css("z-index", a++);	
					alice2_sugest1=1;	
					for (let j=0; j<equipe.length; j++){
						
						if(equipe[j]=='alice'){
							equipe2.push('alice');
							porc_equipe2.push(porcentagem_alice);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//--------------------------------------------------------------------//
				
				//-----------------verifica se DAVE2 voltou para sugestao 2 -----------------//
				if (($("#dave2").is('.ui-draggable-dragging')) && (dave2_sugest1==0) ){
					$("#dave2").css("z-index", a++);
					dave2_sugest1=1;	
					for (let j=0; j<equipe.length; j++){
						
						if(equipe[j]=='dave'){
							equipe2.push('dave');
							porc_equipe2.push(porcentagem_dave);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//--------------------------------------------------------------------//
				//--------------------------------------------------------------------//
				//--------------------------------------------------------------------//
				//-----------------verifica se bob2 voltou para sugestao 2 -----------------//
				if (($("#bob2").is('.ui-draggable-dragging')) && (bob2_sugest1==0) ){
					$("#bob2").css("z-index", a++);
					bob2_sugest1=1;	
					for (let j=0; j<equipe.length; j++){
						
						if(equipe[j]=='bob'){
							equipe2.push('bob');
							porc_equipe2.push(porcentagem_bob);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//--------------------------------------------------------------------//
				//-----------------verifica se MARCOS2 voltou para sugestao 2 -----------------//
				if (($("#marcos2").is('.ui-draggable-dragging')) && (marcos2_sugest1==0) ){
					$("#marcos2").css("z-index", a++);
					marcos2_sugest1=1;	
					for (let j=0; j<equipe.length; j++){
						
						if(equipe[j]=='marcos'){
							equipe2.push('marcos');
							porc_equipe2.push(porcentagem_marcos);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//--------------------------------------------------------------------//
				//-----------------verifica se julia 2voltou para sugestao 2 -----------------//
				if (($("#julia2").is('.ui-draggable-dragging')) && (julia2_sugest1==0) ){
					$("#julia2").css("z-index", a++);
					julia2_sugest1=1;	
					for (let j=0; j<equipe.length; j++){
						
						if(equipe[j]=='julia'){
							equipe2.push('julia');
							porc_equipe2.push(porcentagem_julia);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//--------------------------------------------------------------------//
				//-----------------verifica se NICK voltou para sugestao 2 -----------------//
				if (($("#nick2").is('.ui-draggable-dragging')) && (nick2_sugest1==0) ){
					$("#nick2").css("z-index", a++);
					nick2_sugest1=1;	
					for (let j=0; j<equipe.length; j++){
						
						if(equipe[j]=='nick'){
							equipe2.push('nick');
							porc_equipe2.push(porcentagem_nick);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//--------------------------------------------------------------------//
				
					//--------------------------------------------------------------------//
				//-----------------verifica se PAUL voltou para sugestao 2 -----------------//
				if (($("#paul2").is('.ui-draggable-dragging')) && (paul2_sugest1==0) ){
					$("#paul2").css("z-index", a++);
					paul2_sugest1=1;	
					for (let j=0; j<equipe.length; j++){
						
						if(equipe[j]=='paul'){
							equipe2.push('paul');
							porc_equipe2.push(porcentagem_paul);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//--------------------------------------------------------------------//
				//-----------------verifica se DOUG2 voltou para sugestao 2 -----------------//
				if (($("#doug2").is('.ui-draggable-dragging')) && (doug2_sugest1==0) ){
					$("#doug2").css("z-index", a++);	
					doug2_sugest1=1;	
					for (let j=0; j<equipe.length; j++){
						
						if(equipe[j]=='doug'){
							equipe2.push('doug');
							porc_equipe2.push(porcentagem_doug);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				
				
				//--------------------------------------------------------------------//
				//-----------------verifica se ANA 2 voltou para sugestao 2 -----------------//
				if (($("#ana2").is('.ui-draggable-dragging')) && (ana2_sugest1==0) ){
					$("#ana2").css("z-index", a++);	
					ana2_sugest1=1;	
					for (let j=0; j<equipe.length; j++){
						
						if(equipe[j]=='ana'){
							equipe2.push('ana');
							porc_equipe2.push(porcentagem_ana);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				
				
				//--------------------------------------------------------------------//
				//-----------------verifica se RITA 2 voltou para sugestao 2 -----------------//
				if (($("#rita2").is('.ui-draggable-dragging')) && (rita2_sugest1==0) ){
					$("#rita2").css("z-index", a++);	
					rita2_sugest1=1;	
					for (let j=0; j<equipe.length; j++){
						
						if(equipe[j]=='rita'){
							equipe2.push('rita');
							porc_equipe2.push(porcentagem_rita);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				
				
				//--------------------------------------------------------------------//
				//-----------------verifica se PETER 2 voltou para sugestao 2 -----------------//
				if (($("#peter2").is('.ui-draggable-dragging')) && (peter2_sugest1==0) ){
					$("#peter2").css("z-index", a++);	
					peter2_sugest1=1;	
					for (let j=0; j<equipe.length; j++){
						
						if(equipe[j]=='peter'){
							equipe2.push('peter');
							porc_equipe2.push(porcentagem_peter);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				
				
				//--------------------------------------------------------------------//
				//-----------------verifica se CLAUDIO 2 voltou para sugestao 2 -----------------//
				if (($("#claudio2").is('.ui-draggable-dragging')) && (claudio2_sugest1==0) ){
					$("#claudio2").css("z-index", a++);	
					claudio2_sugest1=1;	
					for (let j=0; j<equipe.length; j++){
						
						if(equipe[j]=='claudio'){
							equipe2.push('claudio');
							porc_equipe2.push(porcentagem_claudio);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//====================================================================/
				
				
				//--------------------------------------------------------------------//
				//-----------------verifica se LIVIA 2 voltou para sugestao 2 -----------------//
				if (($("#livia2").is('.ui-draggable-dragging')) && (livia2_sugest1==0) ){
					$("#livia2").css("z-index", a++);	
					livia2_sugest1=1;	
					for (let j=0; j<equipe.length; j++){
						
						if(equipe[j]=='livia'){
							equipe2.push('livia');
							porc_equipe2.push(porcentagem_livia);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//====================================================================/
				
				
				//--------------------------------------------------------------------//
				//-----------------verifica se GLAUCIA 2 voltou para sugestao 2 -----------------//
				if (($("#glaucia2").is('.ui-draggable-dragging')) && (glaucia2_sugest1==0) ){
					$("#glaucia2").css("z-index", a++);	
					glaucia2_sugest1=1;	
					for (let j=0; j<equipe.length; j++){
						
						if(equipe[j]=='glaucia'){
							equipe2.push('glaucia');
							porc_equipe2.push(porcentagem_glaucia);
							
							equipe.splice(j, 1);
							porc_equipe.splice(j, 1);
						}
						
					}
								
					
					porcentagem_sugestao1=0;
					
					for (let i=0; i<equipe.length;i++){
						
						porcentagem_sugestao1 = porcentagem_sugestao1 + porc_equipe[i];
						
						
					}
					porcentagem_sugestao1 = (porcentagem_sugestao1/equipe.length);
					porcentagem_sugestao1 = parseFloat(porcentagem_sugestao1.toFixed(1));
					$("#percentual_equipe1").html(porcentagem_sugestao1+'%');
					
					if ((porcentagem_sugestao1>39) && (porcentagem_sugestao1<50)){
							$("#percentual_equipe1").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao1>49){
						$("#percentual_equipe1").css("background-color", "#008000");
						}
					if (porcentagem_sugestao1<40){
						$("#percentual_equipe1").css("background-color", "#ae0000");
					}
					
					
					
					porcentagem_sugestao2=0;
					
					for (let i=0; i<equipe2.length;i++){
						
						porcentagem_sugestao2 = porcentagem_sugestao2 + porc_equipe2[i];
					}
					porcentagem_sugestao2 = (porcentagem_sugestao2/equipe2.length);
					porcentagem_sugestao2 = parseFloat(porcentagem_sugestao2.toFixed(1));
					$("#percentual_equipe2").html(porcentagem_sugestao2+'%');
					
					if ((porcentagem_sugestao2>39) && (porcentagem_sugestao2<50)){
							$("#percentual_equipe2").css("background-color", "#eead2d");
					}
					if (porcentagem_sugestao2>49){
						$("#percentual_equipe2").css("background-color", "#008000");
						}
					if (porcentagem_sugestao2<40){
						$("#percentual_equipe2").css("background-color", "#ae0000");
					}
				}
				//====================================================================/
				
				
				
			}
			
		
			
		
					
			
	}); //equipe1
		
		

			
});



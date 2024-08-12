import networkx as nx
import matplotlib.pyplot as plt
import json
import pandas as pd

# Carrega os dados de usuário de user3.json
caminho_arquivo_usuarios = 'C:/Users/Felipe/Works/web-ap/user3.json'
with open(caminho_arquivo_usuarios, 'r', encoding='utf-8') as arquivo_usuarios:
    dados_usuarios = json.load(arquivo_usuarios)


# Anonimizar os usernames nos dados dos usuários
for usuario in dados_usuarios:
    usuario['username'] = "Dev" + str(usuario['user_id'])

# Caminho para o arquivo JSON
caminho_do_arquivo = 'C:/Users/Felipe/Works/web-ap/selectedProjects3.json'

# Abrindo e lendo o arquivo JSON
with open(caminho_do_arquivo, 'r', encoding='utf-8') as arquivo:
    dados_projetos = json.load(arquivo)
    

# Anonimizar os usernames nos dados dos projetos
for projeto in dados_projetos:
    if 'projectManagers' in projeto:
        projeto['projectManagers'] = ["Dev" + str(pm.split(" ")[-1]) for pm in projeto['projectManagers']]
    for membro in projeto['teamMembers']:
        membro['username'] = "Dev" + str(membro['user_id'])
    
    

print(dados_projetos)

# Função para calcular a media dos valores 

    
def calcular_media(valores):
    if valores:
        return sum(valores) / len(valores)
    else:
        return 0

# Função para calcular o SuccessFactor
def calcular_success_factor(alfa, beta, gama, slf, osf):
    success_factor= alfa * slf + beta * osf + gama * (slf * osf)
    return round(success_factor, 2)

# Criação do grafo
G = nx.Graph()

# Adicionando nós para todos os membros da equipe e gerentes
for projeto in dados_projetos:
    for membro in projeto['teamMembers']:
        G.add_node(membro['user_id'], 
                   username=membro['username'], 
                   type=membro['contractRoleName'], 
                   hardskill=list(set(membro.get('technologies', []))))
          # Converter para um conjunto para remover duplicatas, depois converter de volta para lista

# Adicionando arestas entre membros da equipe
alfa, beta, gama = 0.3, 0.3, 0.4  # Definir valores para alfa, beta e gama
# Cria um mapeamento de user_id para projects_id
user_projects = {user['user_id']: set(user['projects_id']) for user in dados_usuarios}


# Inicializando listas para armazenar valores de SLF, OSF e ProjectCount
slf_values = []
osf_values = []
project_count_values = []
processed_pairs = set()

for projeto in dados_projetos:
    project_id = projeto['projectId']
    team_members = projeto['teamMembers']
    slf_values.append(projeto['SLF'])
    osf_values.append(projeto['NPS'])

    for i in range(len(team_members)):
        for j in range(i + 1, len(team_members)):
            user_id1 = team_members[i]['user_id']
            user_id2 = team_members[j]['user_id']
            if user_id1 != user_id2:
                common_projects = user_projects[user_id1].intersection(user_projects[user_id2])
                project_count_values.append(len(common_projects))

# Calculando os valores mínimos e máximos
min_slf, max_slf = min(slf_values), max(slf_values)
min_osf, max_osf = min(osf_values), max(osf_values)
min_project_count, max_project_count = min(project_count_values), max(project_count_values)

# Normalizando os valores
def normalize(value, min_value, max_value):
    # Ajusta o valor mínimo para ser um pouco menor que o menor valor bruto
    adjusted_min_value = min_value - 0.1 if min_value == value else min_value
    return (value - adjusted_min_value) / (max_value - adjusted_min_value) if max_value > adjusted_min_value else 0

# Verifique os valores min e max
print("Min SLF:", min_slf, "Max SLF:", max_slf)
print("Min OSF (NPS):", min_osf, "Max OSF (NPS):", max_osf)
print("Min ProjectCount:", min_project_count, "Max ProjectCount:", max_project_count)

# Lita que será usada pra montar planilha de validação da formula
# Inicializando uma lista para armazenar as informações das arestas
edge_data = []

# quando adicionamos as arestas, normalizamos os valores
# Agora atualize o código onde as arestas são adicionadas para incorporar o ProjectCount
for projeto in dados_projetos:
    project_id = projeto['projectId']
    team_members = projeto['teamMembers']
    
    #slf e osf que será usado pra montar planilha de validação da formula
   # slf_bruto = projeto['SLF']
    #slf_normalizado = normalize(projeto['SLF'], min_slf, max_slf)
    #osf_bruto = projeto['NPS']
   # osf_normalizado = normalize(projeto['NPS'], min_osf, max_osf)
    
    
   #print("SLF original:", projeto['SLF'], "SLF normalizado:", round(slf_normalizado,2))
   #s print("OSF original:", projeto['NPS'], "OSF normalizado:", round(osf_normalizado,2))
    
    
    for i in range(len(team_members)):
        for j in range(i + 1, len(team_members)):
            user_id1 = team_members[i]['user_id']
            user_id2 = team_members[j]['user_id']
            
            pair = tuple(sorted([user_id1, user_id2]))  # Cria uma chave única para o par

            if pair in processed_pairs:
                continue  # Pula este par se já foi processado

            processed_pairs.add(pair)  # Marca o par como processado
            
            if user_id1 != user_id2:
                
                
                
                common_projects_ids = user_projects[user_id1].intersection(user_projects[user_id2])
                common_projects_nps = [projeto['NPS'] for projeto in dados_projetos if projeto['projectId'] in common_projects_ids]
                common_projects_slf = [projeto['SLF'] for projeto in dados_projetos if projeto['projectId'] in common_projects_ids]

                if common_projects_nps and common_projects_slf:
                    nps_media = calcular_media(common_projects_nps)
                    print('common_projects_nps')
                    print(common_projects_nps)
                    print('media nps')
                    print(nps_media)
                    slf_media = calcular_media(common_projects_slf)
                    
                    # Normaliza os valores de media
                    nps_media_normalizada = normalize(nps_media, min_osf, max_osf)
                    slf_media_normalizada = normalize(slf_media, min_slf, max_slf)

                    # Calcula o peso baseado na fórmula existente, utilizando as medianas normalizadas
                    success_factor = calcular_success_factor(alfa, beta, gama, slf_media_normalizada, nps_media_normalizada)
                        
                
                
                
                # Calcula o peso baseado na fórmula existente
                #success_factor = calcular_success_factor(alfa, beta, gama, slf_normalizado, osf_normalizado)
                
                common_projects = user_projects[user_id1].intersection(user_projects[user_id2])
                project_count_raw = len(common_projects)
                project_count = normalize(project_count_raw, min_project_count, max_project_count)

                # Imprima os valores brutos e normalizados para depuração
                print("ProjectCount bruto:", project_count_raw , "ProjectCount normalizado:", round(project_count,2))
                
                # peso calculado a partir do fator de sucesso e contagem dos projetos compartilhados
                peso = success_factor * project_count
                
                # Adiciona a aresta com o peso sem arredondar
                G.add_edge(user_id1, user_id2, weight=peso)
                
                
                #pegar dados para montar planilha de validação
                # Adiciona as informações no edge_data
                if project_count_raw != 1  and round(peso, 2) != 0.0:
                    edge_data.append({
                        'source': G.nodes[user_id1]['username'],
                        'source_user_id': user_id1,
                        'target': G.nodes[user_id2]['username'],
                        'target_user_id': user_id2,
                        'OSF bruto': round(nps_media,2),
                        'OSF (NPS)': round(nps_media_normalizada,2),
                        'SLF bruto': round(slf_media,2),
                        'SLF': round(slf_media_normalizada,2),
                        'success_factor': round(success_factor,2),
                        'ProjectCount bruto': round(project_count_raw,2),
                        'ProjectCount': round(project_count,2),
                        'weight': round(peso, 2),
                        'Common_project_IDs': list(common_projects)
                    })
# Cria um DataFrame com os dados das arestas
edges_df = pd.DataFrame(edge_data)

# Filtrar o DataFrame para excluir linhas onde project_count_raw é igual a 1
edges_df = edges_df[edges_df['ProjectCount bruto'] != 1]

# Agora, exportando para CSV após a filtragem
edges_df.to_csv('network_edges_details.csv', index=False)



# 1. Ler o arquivo CSV
df = pd.read_csv('network_edges_details.csv')

# 2. Ordenar os dados por OSF (NPS), SLF e ProjectCount de forma decrescente
# Isso coloca os maiores valores primeiro
df_ordenado = df.sort_values(by=['OSF (NPS)', 'SLF', 'ProjectCount'], ascending=False)

# Você pode também querer filtrar para manter somente os valores acima de um certo limiar
# Por exemplo, para manter somente as linhas com OSF (NPS) > 0.5, SLF > 0.5 e ProjectCount > 0.5
# df_filtrado = df_ordenado[(df_ordenado['OSF (NPS)'] > 0.5) & (df_ordenado['SLF'] > 0.5) & (df_ordenado['ProjectCount'] > 0.5)]

# 3. Salvar o resultado em um novo arquivo CSV
df_ordenado.to_csv('network_edges_details_ordenado1.csv', index=False)

print("Arquivo 'network_edges_details_ordenado1.csv' criado com sucesso.")


# Desenhando o grafo
plt.figure(figsize=(12, 10))
pos = nx.spring_layout(G)

# Desenhar nós dos devs e gerentes diferenciadamente
nx.draw_networkx_nodes(G, pos, 
                       nodelist=[n for n in G.nodes() if G.nodes[n]['type'] != 'Project Manager'], 
                       node_color='lightblue', node_size=500)
nx.draw_networkx_nodes(G, pos, 
                       nodelist=[n for n in G.nodes() if G.nodes[n]['type'] == 'Project Manager'], 
                       node_color='lightgreen', node_shape='s', node_size=500)

# Desenhar arestas e rótulos
nx.draw_networkx_edges(G, pos)
nx.draw_networkx_labels(G, pos, labels={n: G.nodes[n]['username'] for n in G.nodes()}, font_size=8)

edge_labels = nx.get_edge_attributes(G, 'weight')
nx.draw_networkx_edge_labels(G, pos, edge_labels=edge_labels)
plt.title("Rede de Colaboração de Projetos", size=15)
plt.show()

# Exportar os dados do grafo
dados_grafo = {
    "nodes": [
        {
            "id": G.nodes[n]['username'],  # Divide o username pelo ponto e pega a primeira parte
            "user_id": n,
            "type": "manager" if G.nodes[n]['type'] == "Project Manager" else "developer",
            "contractRoleName": G.nodes[n]['type'],
            "hardskill": G.nodes[n]['hardskill']
        } 
        for n in G.nodes()
    ],
    "edges": [
        {
            "source": edge['source'],
            "source_user_id": edge['source_user_id'],
            "target": edge['target'],
            "target_user_id": edge['target_user_id'],
            "weight": edge['weight']
            # Aqui você pode adicionar outros campos se necessário
        } for edge in edge_data
    ]
}

# Use o caminho correto onde você quer salvar o arquivo
caminho_para_salvar_dados_do_grafo = "caminho_para_salvar_dados_do_grafo.json"


with open("caminho_para_salvar_dados_do_grafo.json", "w") as f:
    json.dump(dados_grafo, f)

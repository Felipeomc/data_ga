import pandas as pd
import json

# Lendo os dados processados pelo script JavaScript
with open('caminho_para_salvar_dados_do_grafo.json', 'r') as file:
    processed_data = json.load(file)

# Suponha que processed_data seja estruturado para ser convertido em DataFrame
# Exemplo: processed_data = {'nodes': [...], 'edges': [...]}

# Criando DataFrames
nodes_df = pd.DataFrame(processed_data['nodes'])
edges_df = pd.DataFrame(processed_data['edges'])

# Salvando DataFrames em CSV
nodes_df.to_csv('network_nodes.csv', index=False)
edges_df.to_csv('network_edges.csv', index=False)

print('Arquivos CSV gerados: network_nodes.csv e network_edges.csv')

import pandas as pd

# Carregar os dados
df = pd.read_csv('C:/Users/Felipe/Works/web-ap/network_edges_details_ordenado1.csv')

# Definir limites para categorias
very_low_limit = 0.25
low_limit = 0.5
high_limit = 0.75

# Colunas de interesse
columns_of_interest = ['OSF (NPS)', 'SLF', 'success_factor', 'ProjectCount', 'weight']

# Definir as condições
conditions = {
    'all_high_except_weight': (df[columns_of_interest[:-1]] > high_limit).all(axis=1) & (df['weight'] > high_limit),
    'all_low_except_weight': (df[columns_of_interest[:-1]] < very_low_limit).all(axis=1) & (df['weight'] < very_low_limit),
    'high_values_low_weight': (df[columns_of_interest[:-1]] > high_limit).all(axis=1) & (df['weight'] < very_low_limit),
    'low_values_high_weight': (df[columns_of_interest[:-1]] < very_low_limit).all(axis=1) & (df['weight'] > high_limit),
    'all_high': (df[columns_of_interest] > high_limit).all(axis=1),
    'high_OSF_SLF_low_ProjectCount': (df['OSF (NPS)'] > high_limit) & (df['SLF'] > high_limit) & (df['ProjectCount'] < low_limit),
    'high_OSF_SLF_high_weight': (df['OSF (NPS)'] > high_limit) & (df['SLF'] > high_limit) & (df['weight'] > high_limit),
    'low_OSF_SLF_high_weight': (df['OSF (NPS)'] < very_low_limit) & (df['SLF'] < very_low_limit) & (df['weight'] > high_limit)
}

# Contar ocorrências para cada condição
counts = {condition: df[mask].shape[0] for condition, mask in conditions.items()}

# Imprimir os resultados
for condition, count in counts.items():
    print(f"{condition}: {count}")

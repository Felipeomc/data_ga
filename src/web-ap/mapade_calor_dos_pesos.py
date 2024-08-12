import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# Carregar os dados do CSV
df = pd.read_csv('C:/Users/Felipe/Works/web-ap/network_edges_details.csv')

# Selecionar as colunas de interesse
columns_of_interest = ['OSF (NPS)', 'SLF', 'success_factor', 'ProjectCount', 'weight']
df_selected = df[columns_of_interest]

# Calcular a matriz de correlação
correlation_matrix = df_selected.corr()

# Gerar o mapa de calor
plt.figure(figsize=(10, 8))
sns.heatmap(correlation_matrix, annot=True, cmap='coolwarm', fmt=".2f")
plt.title('Mapa de Calor das Variáveis de Interesse')
plt.show()


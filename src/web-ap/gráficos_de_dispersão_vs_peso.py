import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Carregar os dados
df = pd.read_csv('C:/Users/Felipe/Works/web-ap/network_edges_details_ordenado1.csv')

# Configurar o estilo do seaborn
sns.set(style="whitegrid")

# Criar gráficos de dispersão para cada variável vs. weight
variables = ['OSF (NPS)', 'SLF', 'success_factor', 'ProjectCount']
for var in variables:
    plt.figure(figsize=(10, 6))
    sns.scatterplot(data=df, x=var, y='weight', size='weight', hue='weight', palette='coolwarm', sizes=(20, 200), alpha=0.7)
    plt.title(f'Relação entre {var} e Weight')
    plt.xlabel(var)
    plt.ylabel('Weight')
    plt.show()
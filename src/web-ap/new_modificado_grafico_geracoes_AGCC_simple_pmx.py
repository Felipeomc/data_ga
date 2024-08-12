import pandas as pd
import matplotlib.pyplot as plt

# Caminhos dos arquivos CSV e detalhes de estilo para cada linha
file_paths = ['sugestoes_cross_pmx_1_4_4_100_0005.csv', 'sugestoes_simples_1_4_4_100_0005.csv', 'sugestoes_ag_1_4_4_100_0005.csv']
colors = ['blue', 'orange', 'blue']  # Cores conforme a imagem
labels = ['PMX', 'One cut', 'Convex']
linestyles = ['-', '--', ':']  # Estilos de linha: sólida, tracejada, pontilhada

# Carregar dados dos CSVs
dataframes = [pd.read_csv(file_path) for file_path in file_paths]

# Supondo que os DataFrames contêm as colunas 'Generation' e 'TotalFit'
fig, ax = plt.subplots(figsize=(10, 5))  # Ajuste o tamanho conforme necessário

# Plotar os dados com estilos diferentes
for df, color, label, linestyle in zip(dataframes, colors, labels, linestyles):
    ax.plot(df['Generation'], df['TotalFit'], color=color, label=label, linestyle=linestyle)

# Estilização do gráfico
ax.set_title('Comparação dos Algoritmos: Taxa de Reprodução vs Performance')
ax.set_xlabel('Taxa de Reprodução')
ax.set_ylabel('Performance')
ax.legend()
ax.grid(True)

plt.tight_layout()
plt.show()

import pandas as pd
import matplotlib.pyplot as plt

# Caminhos dos arquivos CSV e detalhes de estilo para cada linha
file_paths = ['sugestoes_cross_pmx_1_4_4_100_0005.csv', 'sugestoes_simples_1_4_4_100_0005.csv', 'sugestoes_ag_1_4_4_100_0005.csv']
colors = ['red', 
          'green',   # Verde sem transparência
          'blue']    # Azul sem transparência
labels = ['PMX', 'One cut', 'Convex']
linestyles = [':', '-', '-']  # Estilos de linha: sólida

# Cria uma figura e um eixo
fig, ax = plt.subplots(figsize=(10, 5))  # Tamanho do gráfico ajustável conforme necessário

# Armazena os valores máximos de fitness para determinar o limite superior do gráfico
max_fitness_values = []
zorder_val = 3
for file_path, color, label, linestyle in zip(file_paths, colors, labels, linestyles):
    data = []

    # Lê o arquivo linha por linha
    with open(file_path, 'r', encoding='utf-8') as file:
        for line in file:
            # Extrai os dados usando o método split e compreensão de lista
            generation = int(line.split(',')[0].split(': ')[1])
            total_fit = float(line.split('Total Fit: ')[1])
            data.append((generation, total_fit))

    # Cria um DataFrame a partir dos dados
    df = pd.DataFrame(data, columns=['Generation', 'TotalFit'])

    # Calcula a média do TotalFit por geração
    average_fit_by_gen = df.groupby('Generation')['TotalFit'].mean().reset_index()
    max_fitness_values.append(average_fit_by_gen['TotalFit'].max())

    # Plotando o progresso do fitness médio por geração para cada algoritmo
    ax.plot(average_fit_by_gen['Generation'], average_fit_by_gen['TotalFit'], marker='D', linestyle=linestyle, color=color, label=label, markersize=2, zorder=zorder_val)
    # Usa um scatter plot para plotar os pontos de fitness médio por geração para cada algoritmo
    #ax.scatter(average_fit_by_gen['Generation'], average_fit_by_gen['TotalFit'], linestyle=linestyle, color=color, label=label, s=10)  # 's' controla o tamanho do ponto
    zorder_val -= 1  # Incrementa para que a próxima linha seja plotada em cima

# Adiciona linhas verticais e rótulos de texto
for i in range(0, max(average_fit_by_gen['Generation'])+1, 4):  # Assumindo que cada 4 indivíduos compõem uma geração
    ax.axvline(x=i, color='gray', linestyle='-', linewidth=0.5)
    # Ajusta a posição do texto para que não fique no topo do gráfico
    ax.text(i, ax.get_ylim()[1] * 0.98, f'{i//4 + 1}', color='black', ha='left', fontsize=6)

# Determina o limite superior do fitness médio para o gráfico
upper_limit = max(max_fitness_values) * 1.05  # Adiciona uma pequena margem
ax.set_ylim(0, upper_limit)  # Define o limite superior com base no valor calculado

# Define os títulos e rótulos dos eixos
ax.set_title('Progress of Average Fitness with initial population = 4 and number of skills = 4', fontsize=10)
ax.set_xlabel('Generation')
ax.set_ylabel('Average Fitness')
ax.grid(True)
ax.legend()

# Ajusta o layout para que não haja sobreposição
plt.tight_layout()

# Exibe a figura
plt.show()

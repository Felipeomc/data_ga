import pandas as pd
import matplotlib.pyplot as plt

# Caminhos dos arquivos CSV e detalhes de estilo para cada linha
file_paths = ['sugestoes_cross_pmx_5_6_8_100_0005.csv', 'sugestoes_simples_5_6_8_100_0005.csv', 'sugestoes_ag_5_6_8_100_0005.csv']
colors = ['orange', 'green', 'blue']  # Cores conforme a imagem
labels = ['PMX', 'One cut', 'Convex']
linestyles = ['-', '-', '-']  # Estilos de linha: sólida, tracejada, pontilhada

# Cria uma figura e um conjunto de subplots
#fig, axs = plt.subplots(3, 1, figsize=(10, 15))  # 3 subplots, um abaixo do outro

fig, axs = plt.subplots(3, 1, figsize=(1.5, 19))  # Largura aumentada, altura diminuída


for idx, (file_path, color, label, linestyle) in enumerate(zip(file_paths, colors, labels, linestyles)):
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
    
    # Determina o limite superior do fitness médio para cada gráfico
    upper_limit = average_fit_by_gen['TotalFit'].max() * 1.10  # Adiciona uma pequena margem
    # Define o limite superior do subplot atual
    axs[idx].set_ylim(0, upper_limit)
    
    # Adiciona linhas verticais e rótulos de texto para cada geração no subplot correspondente
    # Adiciona linhas verticais a cada 4 gerações
    for i in range(0, 400, 4):
        axs[idx].axvline(x=i, color='gray', linestyle='-', linewidth=0.4)
        # Verifica se o número da geração é um múltiplo de 10 para adicionar o rótulo
        if i % 40 == 0:  # 40, pois 4 gerações x 10 para o rótulo
            axs[idx].text(i, upper_limit, f'{i//4}', color='black', ha='center', fontsize=7, verticalalignment='top')

    # Plotando o progresso do fitness médio por geração para cada algoritmo em subplots separados
    axs[idx].plot(average_fit_by_gen['Generation'], average_fit_by_gen['TotalFit'], marker='o', linestyle=linestyle, color=color, label=label, markersize=2, zorder=5)
    axs[idx].set_title(f'Initial population = 6 and number of skills = 8', fontsize=10)
    axs[idx].set_xlabel('Solution')
    axs[idx].set_ylabel('Average Fitness')
    axs[idx].grid(True)
    axs[idx].legend()

# Ajusta o layout para que não haja sobreposição
plt.tight_layout()

# Ajusta o espaçamento entre os subplots e também adiciona espaço no topo
plt.subplots_adjust(hspace=0.5, top=0.95)  # Você pode aumentar o valor de 'top' se necessário


# Exibe a figura
plt.show()

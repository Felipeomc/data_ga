import pandas as pd
import matplotlib.pyplot as plt

# Caminho do arquivo CSV
file_path = 'sugestoes_cross_pmx.csv'

# Lista para armazenar os dados
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

# Plotando o progresso do fitness médio por geração
plt.figure(figsize=(10, 5))
plt.plot(average_fit_by_gen['Generation'], average_fit_by_gen['TotalFit'], marker='o', linestyle='-', zorder=5)

# Adiciona linhas verticais e rótulos de texto para cada geração
for i in range(0, len(average_fit_by_gen['Generation']), 4):  # Assumindo que cada 4 indivíduos compõem uma geração
    plt.axvline(x=i, color='gray', linestyle='-', linewidth=0.5)
    # Ajustando a posição do texto para que não fique no topo do gráfico e adicionando o tamanho da fonte
    plt.text(i, plt.ylim()[1] * 0.98, f'{i//4 + 1}', color='black', ha='left', fontsize=5)  # Ajuste 'fontsize' conforme necessário

plt.title('Progresso do Fitness Médio por Geração')
plt.xlabel('Indivíduo')
plt.ylabel('Fitness Médio')
plt.grid(True)
plt.show()
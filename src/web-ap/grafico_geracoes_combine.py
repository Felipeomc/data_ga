import pandas as pd
import matplotlib.pyplot as plt
import re
# Cria uma lista vazia para armazenar os handles da legenda
legend_handles = []
# Caminhos dos arquivos CSV e detalhes de estilo para cada linha
rounds = 5  # número de rounds
methods = ['pmx', 'one_cut', 'convex']  # nomes dos métodos em seus arquivos
file_paths = [f'round_{i+1}_sugestoes_{method}.csv' for i in range(rounds) for method in methods]

colors = ['orange', 'green', 'blue']  # Cores para cada método
labels = ['PMX', 'One cut', 'Convex']
linestyles = ['-', '--', ':']  # Estilos de linha

# Definindo a população inicial e número de habilidades para cada round
initial_populations = [4, 4, 4, 6, 6]
num_skills = [4, 5, 6, 7, 8]

# Cria uma figura e um conjunto de subplots
fig, axs = plt.subplots(rounds, 1, figsize=(14, 25))  # 5 subplots, um para cada round
cont=0
def extract_total_fit(line):
    # Extrai o valor de Total Fit usando expressões regulares
    match = re.search(r"Total Fit: ([\d\.]+)", line)
    if match:
        return float(match.group(1))
    return None

for i in range(rounds):
    max_fit = 0  # Máximo de TotalFit para cada round
   
    for j, (method, color, label, linestyle) in enumerate(zip(methods, colors, labels, linestyles)):
        file_path = file_paths[i*len(methods) + j]
        data = []
        
        # Lê o arquivo linha por linha
        with open(file_path, 'r', encoding='utf-8') as file:
            for line_number, line in enumerate(file):
                total_fit = extract_total_fit(line)
                if total_fit is not None:
                    data.append((line_number, total_fit))
        
        # Cria um DataFrame a partir dos dados
        df = pd.DataFrame(data, columns=['Generation', 'TotalFit'])

        # Calcula a média do TotalFit por geração
        average_fit_by_gen = df.groupby('Generation')['TotalFit'].mean().reset_index()


        # Plotando o progresso do fitness médio por geração para cada algoritmo em subplots correspondentes ao round
        axs[i].plot(average_fit_by_gen['Generation'], average_fit_by_gen['TotalFit'], marker='o', linestyle=linestyle, color=color, label=label, markersize=2)
       # Ajuste o pad individualmente para cada título
        pad_value = 10 if i == 0 else -0.5
       
        axs[i].set_title(f'Round {i+1} - Initial population = {initial_populations[i]} and number of skills = {num_skills[i]}', fontsize=14, pad=pad_value)
        # Configura o label do eixo x para cada subplot
        for ax in axs:
            ax.set_xlabel('Solution', fontsize=14, horizontalalignment='left', labelpad=20)
            ax.xaxis.set_label_coords(-0.03, -0.02)  # Ajusta as coordenadas do label no eixo x para ficar mais à esquerda e um pouco abaixo do eixo

        axs[i].set_ylabel('Average Fitness',fontsize=14)
        axs[i].grid(True)
        axs[i].legend(loc='upper right', fontsize=14)


        # Altera o tamanho da fonte dos valores do eixo x (soluções de 0 a 400) para cada subplot
        for ax in axs:
            ax.tick_params(axis='both', which='major', labelsize=14)  # Ajuste o tamanho da fonte como desejado

       # Adiciona linhas verticais em todos os rounds
        for gen in range(0, 400, 4):
            axs[i].axvline(x=gen, color='gray', linestyle='-', linewidth=0.4)
        # Calcula a altura para os rótulos com base no máximo de TotalFit no Round 1
        if i == 0 and cont ==0:
            # Encontrar o maior valor de y dentre todos os objetos de linha no subplot
            label_height = max([max(line.get_ydata()) for line in axs[i].get_lines()]) * 1.05
            for gen in range(0, 401, 40):
                # Adicionar rótulos de texto apenas no Round 1, na parte superior do gráfico
                axs[i].text(gen, label_height+0.72, str(gen // 4), color='black', ha='center', fontsize=14, verticalalignment='bottom')
                cont = cont+1
        

        axs[i].legend(handles=legend_handles, labels=labels, loc='upper right')
  
# Ajusta o layout para que não haja sobreposição
plt.tight_layout()
plt.subplots_adjust(hspace=0.10)  # Ajuste o valor conforme necessário para obter o espaço desejado
# Salvar a figura antes de exibi-la
plt.savefig('C:/Users/Felipe/Works/web-ap/nova_comparativemethods.png', dpi=300, bbox_inches='tight')

# Exibe a figura
plt.show()

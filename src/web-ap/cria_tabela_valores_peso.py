import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# Caminho do seu arquivo.
file_path = 'C:/Users/Felipe/Works/web-ap/network_edges_details.csv'




# Carregar os dados
df = pd.read_csv(file_path)

# Criar uma função para colorir os valores altos, médios e baixos
def color_values(val):
    if val > 0.75:
        color = 'green'  # cor de fundo para valores altos
    elif val < 0.25:
        color = 'red'    # cor de fundo para valores baixos
    else:
        color = 'yellow' # cor de fundo para valores moderados
    return f'background-color: {color}; color: black'  # cor do texto preta

# Colunas de interesse para aplicar a formatação
cols_to_color = ['OSF (NPS)', 'SLF', 'success_factor', 'ProjectCount', 'weight']

# Aplicar a função de coloração na tabela
styled_table = df.style.applymap(color_values, subset=cols_to_color)

# Salvar a tabela estilizada como um arquivo HTML
html_file_path = 'C:/Users/Felipe/Works/web-ap/styled_table2.html'
styled_table.to_html(html_file_path)

html_file_path
import pandas as pd
import numpy as np  # Adicionando esta linha para importar o NumPy
import statsmodels.api as sm
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D  # Importando módulo para gráfico 3D


# Etapa 1: Ler o arquivo CSV
df = pd.read_csv('network_edges_details.csv')

# Etapa 2: Calcular a correlação de Pearson
correlations = df[['OSF (NPS)', 'SLF', 'success_factor']].corr()
print("Matriz de Correlação:\n", correlations)

# Etapa 3: Regressão Linear (FS como variável dependente e SLF, OSF como independentes)
X = df[['SLF', 'OSF (NPS)']]  # Variáveis independentes
y = df['success_factor']  # Variável dependente (FS)

# Adicionando uma constante para o intercepto
X = sm.add_constant(X)

# Adicionando o termo de interação
X['SLF_OSF_interaction'] = X['SLF'] * X['OSF (NPS)']

# Ajustando o modelo de regressão linear com statsmodels
model = sm.OLS(y, X).fit()

# Mostrando os resultados
print(model.summary())

# Etapa 4: Visualização Gráfica 3D
fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')

# Preparando os dados para o gráfico 3D
x_surf, y_surf = np.meshgrid(np.linspace(df['SLF'].min(), df['SLF'].max(), 100),np.linspace(df['OSF (NPS)'].min(), df['OSF (NPS)'].max(), 100))
onlyX = pd.DataFrame({'const': 1, 'SLF': x_surf.ravel(), 'OSF (NPS)': y_surf.ravel()})

# Importante: Adicionar a coluna de interação ao DataFrame 'onlyX'
onlyX['SLF_OSF_interaction'] = onlyX['SLF'] * onlyX['OSF (NPS)']

# Agora 'onlyX' tem as mesmas colunas que o 'X' original usado para ajustar o modelo.
fittedY = model.predict(exog=onlyX)

# Plotando a superfície de resposta
ax.plot_surface(x_surf, y_surf, fittedY.values.reshape(x_surf.shape), color='None', alpha=0.3)

# Adicionando os pontos de dados
ax.scatter(df['SLF'], df['OSF (NPS)'], y, color='red')

ax.set_xlabel('SLF')
ax.set_ylabel('OSF (NPS)')
ax.set_zlabel('FS')
plt.title('Relação 3D entre SLF, OSF (NPS) e FS')
plt.show()

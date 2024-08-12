import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

# Etapa 1: Ler o arquivo CSV
df = pd.read_csv('network_edges_details.csv')

# Etapa 2: Calcular a correlação de Pearson
correlations = df[['weight', 'ProjectCount', 'success_factor']].corr()
print("Matriz de Correlação:\n", correlations)

# Etapa 3: Regressão Linear (Peso como variável dependente e ProjectCount como independente)
X = df[['ProjectCount']]  # Variável independente
y = df['weight']  # Variável dependente (Peso)

# Criando o modelo de regressão linear
model = LinearRegression()
model.fit(X, y)

# Fazendo previsões
y_pred = model.predict(X)

# Etapa 4: Visualização Gráfica
plt.scatter(X, y, color='blue')  # Dados reais
plt.plot(X, y_pred, color='red')  # Linha de regressão
plt.title('Regressão Linear - Peso vs ProjectCount')
plt.xlabel('ProjectCount')
plt.ylabel('Peso')
plt.show()

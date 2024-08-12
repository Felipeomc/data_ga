import pandas as pd
import matplotlib.pyplot as plt

# Crie um DataFrame a partir dos dados
dados = pd.DataFrame({
    "weight": [
        0.07, 0.04, 0.03, 0.03, 0.04, 0.04, 0.03, 0.03, 0.03, 0.01,
        0.09, 0.02, 0.04, 0.06, 0.04, 0.04, 0.04, 0.06, 0.06
    ]
})

# Crie um histograma
plt.hist(dados["weight"])
plt.title("Histograma dos pesos")
plt.xlabel("Peso")
plt.ylabel("Frequência")
plt.show()

# Crie um boxplot
plt.boxplot(dados["weight"])
plt.title("Boxplot dos pesos")
plt.xlabel("Peso")
plt.ylabel("Valor")
plt.show()
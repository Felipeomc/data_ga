# Nomes dos indivíduos
individuos = ["Felipe", "Cris", "Isaac"]

# Projetos de cada indivíduo
projetos_felipe = {12, 144, 3, 8}
projetos_cris = {22, 144, 3, 8}
projetos_isaac = {1, 144, 2, 8}

# Lista que contém os sets de projetos de cada indivíduo
projetos = [projetos_felipe, projetos_cris, projetos_isaac]

# Criando a matriz de pontuação
pontuacao = [[0 for _ in individuos] for _ in individuos]

# Preenchendo a matriz com a quantidade de projetos compartilhados
for i in range(len(individuos)):
    for j in range(len(individuos)):
        if i != j:
            pontuacao[i][j] = len(projetos[i].intersection(projetos[j]))

# Exibindo a matriz de pontuação
for linha in pontuacao:
    print(linha)

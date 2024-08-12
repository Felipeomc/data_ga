import matplotlib.pyplot as plt
import networkx as nx

# Criando um grafo dirigido
G = nx.DiGraph()

# Adicionando os nós (camadas e componentes)
nodes = [
    # Camada Externa
    "Enterprise Application",
    # TeamPlus
    "Servidor Web", "Data Collector API", "Profile Builder", "Team Formation Engine",
    "Profiles", "Data Sources",
    # Banco de Dados
    "Servidor de Dados (1)", "BD (1)", "Servidor de Dados (2)", "BD (2)"
]
G.add_nodes_from(nodes)

# Adicionando as arestas (fluxo de comunicação)
edges = [
    # Enterprise Application -> TeamPlus
    ("Enterprise Application", "Data Collector API"), ("Enterprise Application", "Servidor de Dados (1)"),
    # TeamPlus -> TeamPlus
    ("Servidor Web", "Data Collector API"), ("Data Collector API", "Profile Builder"),
    ("Profile Builder", "Profiles"), ("Profiles", "Team Formation Engine"),
    ("Profiles", "Data Sources"), ("Team Formation Engine", "Profile Builder"),
    # TeamPlus -> Banco de Dados
    ("Data Sources", "Servidor de Dados (2)"), ("Servidor de Dados (2)", "BD (2)"),
    ("Servidor de Dados (1)", "BD (1)")
]
G.add_edges_from(edges)

# Posições fixas para os nós
positions = {
    # Camada Externa
    "Enterprise Application": (0, 3),
    # TeamPlus
    "Servidor Web": (2, 3), "Data Collector API": (4, 3), "Profile Builder": (6, 3),
    "Profiles": (7.5, 3), "Team Formation Engine": (9, 3), "Data Sources": (7.5, 2),
    # Banco de Dados
    "Servidor de Dados (1)": (6, 2), "BD (1)": (6, 1), "Servidor de Dados (2)": (9, 2), "BD (2)": (9, 1)
}

# Configuração de estilos dos nós
node_colors = ['lightgray', 'orange', 'lightgreen', 'lightgreen', 'lightgreen', 'lightgreen', 'lightcoral', 'lightcoral', 'lightgray', 'lightgray']
node_shapes = ['o'] * 1 + ['s'] * 1 + ['s'] * 5 + ['o'] * 3

# Desenhando os nós com diferentes formas
for node, color, shape in zip(nodes, node_colors, node_shapes):
    nx.draw_networkx_nodes(G, positions, nodelist=[node], node_color=color, node_shape=shape, node_size=2000)

# Desenhando as arestas
nx.draw_networkx_edges(G, positions, edgelist=edges, arrowstyle='-|>', arrowsize=20, edge_color='black')

# Desenhando os rótulos
nx.draw_networkx_labels(G, positions, font_size=10)

# Configurando o layout do gráfico
fig, ax = plt.subplots(figsize=(12, 8))
plt.title("Arquitetura da Ferramenta TeamPlus em Camadas com Camada Externa")
plt.axis('off')
plt.show()

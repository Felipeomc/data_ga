import PyPDF2

def extrair_paginas(pdf_path, paginas, output_path):
    with open(pdf_path, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        writer = PyPDF2.PdfWriter()

        for pagina_num in paginas:
            pagina = reader.pages[pagina_num - 1]  # Índices de páginas começam em 0
            writer.add_page(pagina)

        with open(output_path, 'wb') as output_file:
            writer.write(output_file)

# Exemplo de uso:
pdf_path = 'livro1cnea.pdf'
paginas_a_extrair = [1179,1180,1181,1182,1183,1184,1185,1186,1187,1188,1189,1190,1191]  # Lista de números de páginas a serem extraídas
output_path = 'artigocnea.pdf'

extrair_paginas(pdf_path, paginas_a_extrair, output_path)

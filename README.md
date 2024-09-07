## MusicVibes
Descrição do Projeto
MusicVibes é um site dedicado a apresentar artistas e suas músicas de forma interativa e visualmente atraente. O site permite que os usuários descubram novos artistas, assistam a videoclipes e se conectem com suas músicas favoritas.

## Estrutura do Site
O site é composto pelas seguintes seções:

Cabeçalho (Header):

Contém o logotipo do MusicVibes e o título.
Navegação com links para as principais seções do site (Home, Artistas, Contato).
Formulário de pesquisa para buscar artistas por nome.
Conteúdo Principal (Main):

Imagem de Destaque: Uma imagem principal que representa o site.
Recomendações de Música: Seção com cards que mostram álbuns, videoclipes e informações sobre as músicas. Cada card inclui uma imagem de capa do álbum, um vídeo (inicialmente oculto), e um botão para fechar o vídeo.
Modal de Vídeo: Um modal que exibe o vídeo selecionado quando um usuário clica em um card.
Artistas em Destaque:

Apresenta uma lista de artistas com suas fotos, descrições e links para ouvir suas músicas.
Contato:

Formulário para os usuários entrarem em contato, com campos para nome, e-mail e mensagem.
Rodapé (Footer): Exibe o copyright do MusicVibes.

## Tecnologias Utilizadas
HTML: Estrutura básica do site.
CSS: Estilização das páginas para proporcionar uma aparência atraente e responsiva.
JavaScript: Funcionalidade interativa, incluindo a filtragem de artistas na barra de pesquisa e exibição de vídeos.

## Funcionalidades
Formulário de Pesquisa de Artistas:

O usuário pode digitar o nome de um artista e clicar no botão de pesquisa para filtrar a lista de artistas exibida.
O JavaScript é usado para mostrar ou ocultar artistas com base na pesquisa.
Recomendações de Música:

Cada card de recomendação inclui um botão para exibir um vídeo relacionado ao álbum.
Um modal é usado para reproduzir o vídeo selecionado.
Implementação
Formulário de Pesquisa
O formulário de pesquisa foi implementado para permitir que os usuários pesquisem artistas por nome. Quando o formulário é enviado, o JavaScript captura o evento, extrai o texto de pesquisa e filtra os artistas exibidos com base na pesquisa.

Card de Recomendação
Cada card de recomendação inclui uma imagem de capa do álbum e um vídeo associado. O vídeo e o botão de fechamento são inicialmente ocultos e são exibidos quando o usuário interage com o card.

Modal de Vídeo
O modal exibe o vídeo selecionado quando um artista é clicado. O JavaScript controla a exibição do modal e a reprodução do vídeo.

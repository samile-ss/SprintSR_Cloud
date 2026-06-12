# Usa a imagem oficial do Nginx baseada em Alpine Linux.
# Alpine é uma distribuição minimalista, o que reduz o tamanho da imagem.
FROM nginx:alpine

# Remove a configuração padrão do Nginx. > Isso evita conflitos com a configuração personalizada que será copiada depois.
RUN rm /etc/nginx/conf.d/default.conf

# Copia o arquivo de configuração personalizado do Nginx > para o local onde o Nginx carrega suas configurações de sites.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia o arquivo principal da aplicação web para o diretório. Padrão de arquivos estáticos servidos pelo Nginx.
COPY index.html /usr/share/nginx/html/
# Copia o arquivo de estilos CSS.
COPY style.css  /usr/share/nginx/html/
# Copia o arquivo de JS 
COPY app.js     /usr/share/nginx/html/
# Documenta que o contêiner utiliza a porta 80 (HTTP). > AQUI ELE SÓ INFORMA AO DOCKER A PORTA OU ELE TAMBÉM PUBLICA?
EXPOSE 80

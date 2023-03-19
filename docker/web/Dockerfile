FROM nginx:latest

RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs

COPY configs/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY ../../app /usr/share/nginx/app
WORKDIR /usr/share/nginx/app/backend
EXPOSE 80
CMD ["bash", "-c", "node server.js & nginx -g 'daemon off;'"]

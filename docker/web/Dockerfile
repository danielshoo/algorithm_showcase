FROM nginx:latest

###############################################################
# 
# Creates a specialized Nginx server for serving
# the algorithm_showcase application. Best used in conjunction
# with the Docker Compose and bind mount on the project source 
# code & server-configs for easy launch or development.
#
###############################################################


RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs
RUN npm install supervisor -g

COPY configs/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY ../../app /usr/share/nginx/app
WORKDIR /usr/share/nginx/app/backend
EXPOSE 80
CMD ["bash", "-c", "supervisor server.js & nginx -g 'daemon off;'"]

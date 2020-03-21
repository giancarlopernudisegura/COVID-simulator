FROM node:12-16.1-stretch
WORKDIR /app
# install typescript compiler
RUN npm install -g typescript
# install sass compiler
RUN npm install -g node-sass
# install live-server
RUN npm install -g live-server
COPY . /app
EXPOSE 8080
CMD ["npm", "test"]
FROM node
RUN mkdir -p /usr/app
RUN npm install webpack -g 
COPY . /usr/app
WORKDIR /usr/app
ENV PORT=80
EXPOSE 80 
RUN npm install
CMD ["npm","start"]
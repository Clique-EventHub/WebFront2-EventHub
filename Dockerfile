FROM node
RUN mkdir -p /usr/app
COPY . /usr/app
WORKDIR /usr/app
ENV PORT=80
EXPOSE 80 
RUN npm install
CMD ["npm","start"]


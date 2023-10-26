# Dada Ki Jay Ho

FROM node:15
WORKDIR /app

COPY ./package*.json .
RUN npm ci 
RUN npm install -g nodemon

COPY . .
EXPOSE 3000
CMD ["npm", "run", "start:dev"]
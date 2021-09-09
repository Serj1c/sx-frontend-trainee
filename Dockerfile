FROM node:12.16.2

WORKDIR /home/node/app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

CMD if [ "$ENV" = "development" ]; then \
        npm start; \
    else \
        npm build && \
        npm start -p 3000; \
    fi
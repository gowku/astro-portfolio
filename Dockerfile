FROM node:lts as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --mode custom

# FROM nginx:alpine as runtime
# COPY nginx.conf /etc/nginx/nginx.conf

# Set a label with the name of the project
LABEL Name=my-porfolio Version=0.0.1

# Copy SSL certificate files
# COPY /certs/fullchain.pem /etc/nginx/certs/fullchain.pem
# COPY /certs/privkey.pem /etc/nginx/certs/privkey.pem

# COPY --from=build /app/dist /usr/share/nginx/html
# FROM node:14-alpine AS build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .

# FROM nginx:1.16.0-alpine AS prod
# COPY --from=build /app/build /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
# ENTRYPOINT ["nginx", "-g", "daemon off;"]
 
FROM chuanwen/cowsay:latest
ENTRYPOINT ["/usr/games/cowsay"]
CMD ["#VQV Trybe"]
# WORKDIR /APP
# COPY package*.json ./

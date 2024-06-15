# Usa la imagen de Node.js 16 como base
FROM node:16-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia el package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install --legacy-peer-deps

# Copia el resto de los archivos del proyecto
COPY .env .

# Construye la aplicación Angular para producción
RUN npm run build --prod

# Expone el puerto 8080
EXPOSE 8080

# Inicia el servidor
CMD ["npm", "run", "start:prod"]
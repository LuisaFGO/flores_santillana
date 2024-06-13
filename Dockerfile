# Usa la imagen de Node.js como base
FROM node:14-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia el package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install --legacy-peer-deps

# Copia el resto de los archivos del proyecto
COPY . .

# Construye la aplicación Angular para producción
RUN npm run build --prod

# Expone el puerto 8080
EXPOSE 8080

# Inicia el servidor
CMD ["npm", "run", "start:prod"]
FROM node:18

WORKDIR /app

# Copy only package.json and package-lock.json first
COPY package*.json ./

# Install dependencies INSIDE the container
RUN npm install

# Now copy the rest of your app
COPY . .

EXPOSE 8000

CMD ["npm", "run", "dev"]
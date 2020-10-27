FROM node:12
# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app
# Install PM2 globally
RUN npm install --global pm2
# Installing dependencies
COPY package*.json ./
RUN npm install
# Copying source files
COPY . .
# Building app
RUN npm run build

EXPOSE 3000

ENV NODE_ENV=production
# Run npm start script with PM2 when container starts
CMD [ "pm2-runtime", "npm", "--", "start" ]
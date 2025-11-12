FROM node:18-bullseye

RUN apt-get update && apt-get install -y \
    chromium \
    firefox-esr \
    fonts-liberation \
    libatk-bridge2.0-0 \
    libnss3 \
    libxss1 \
    libasound2 \
    xdg-utils \
    wget \
    unzip \
 && rm -rf /var/lib/apt/lists/*

RUN wget -q https://github.com/mozilla/geckodriver/releases/download/v0.34.0/geckodriver-v0.34.0-linux64.tar.gz \
    && tar -xzf geckodriver-v0.34.0-linux64.tar.gz \
    && mv geckodriver /usr/local/bin \
    && rm geckodriver-v0.34.0-linux64.tar.gz

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ENV CI=true
ENV CHROME_BIN=/usr/bin/chromium
ENV FIREFOX_BIN=/usr/bin/firefox

CMD ["npm", "run", "test:all"]
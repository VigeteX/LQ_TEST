FROM node:18-bullseye

# Устанавливаем Chromium и зависимости
RUN apt-get update && apt-get install -y \
    chromium \
    chromium-driver \
    libatk-bridge2.0-0 \
    libnss3 \
    libxss1 \
    libgbm1 \
    libxshmfence1 \
    fonts-liberation \
    xdg-utils \
    libasound2 \
    wget \
    gnupg \
    apt-transport-https \
    && rm -rf /var/lib/apt/lists/*

# Устанавливаем Geckodriver
RUN wget -q https://github.com/mozilla/geckodriver/releases/download/v0.34.0/geckodriver-v0.34.0-linux64.tar.gz \
    && tar -xzf geckodriver-v0.34.0-linux64.tar.gz \
    && mv geckodriver /usr/local/bin \
    && rm geckodriver-v0.34.0-linux64.tar.gz

RUN EDGE_VERSION=$(microsoft-edge --version | grep -oP '\d+\.\d+\.\d+\.\d+') \
    && wget -q https://msedgedriver.azureedge.net/${EDGE_VERSION}/edgedriver_linux64.zip \
    && unzip edgedriver_linux64.zip \
    && mv msedgedriver /usr/local/bin/ \
    && rm edgedriver_linux64.zip

# Устанавливаем Microsoft Edge
RUN curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg \
    && install -o root -g root -m 644 microsoft.gpg /usr/share/keyrings/ \
    && sh -c 'echo "deb [arch=amd64 signed-by=/usr/share/keyrings/microsoft.gpg] https://packages.microsoft.com/repos/edge stable main" > /etc/apt/sources.list.d/microsoft-edge.list' \
    && apt-get update \
    && apt-get install -y microsoft-edge-stable \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ENV CI=true
ENV CHROME_BIN=/usr/bin/chromium
ENV FIREFOX_BIN=/usr/bin/firefox
ENV EDGE_BIN=/usr/bin/microsoft-edge

CMD ["npm", "run", "test:all"]
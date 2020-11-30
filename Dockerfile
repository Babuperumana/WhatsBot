FROM Babuperumana/whatsbot:publicbeta

RUN git clone https://github.com/Babuperumana/WhatsBot /root/WhatsBot
RUN mkdir /root/WhatsBot/bin/
WORKDIR /root/WhatsBot/

ENV TZ=Asia/kolkatta
RUN apk --no-cache --virtual build-dependencies add \
    python \
    make \
    g++ \
    && npm install \
    && apk del build-dependencies

CMD ["node", "bot.js"]
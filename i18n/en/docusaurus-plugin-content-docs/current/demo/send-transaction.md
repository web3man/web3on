---
sidebar_position: 5
---

# Отправка транзакции в сеть

Для отправки транзакции нам нужно выбрать сеть, в которую будем отправлять (блок "Сеть (RPC)"): это мы уже делали, когда получали баланс адреса. Отправлять будем с того адреса, на который вы получили тестовый ETH ранее. А для получателя сгенирируем новый адрес.

Весь процесс можно условно разбить на 2 части: 1) формирование и подпись самой транзакции (блок "Транзакция"); 2) отправка транзакции в сеть (блок "Отправить Tx").

Ниже полная схема для отправки транзакции. Воспроизведите ее:

![Текст с описанием картинки](https://github.com/web3man/web3on/raw/docusaurus/static/img/docs-img/send-tx.png)

Если вы все правильно сделали, то сначаала получите хэш транзакции, а через 20-30 секунд подтверждение (receipt) об исполнении:

![Текст с описанием картинки](https://github.com/web3man/web3on/raw/docusaurus/static/img/docs-img/send-tx1.png)

Можно скопировать хэш транзакции и открыть ее в блокчейн-эксплорере - тем самым убедиться, что транзакция действительно отправлена и исполнена.

Если у вас получилось, поздравляем, вы создали блокчейн-кошелек с минимальным функционалом!




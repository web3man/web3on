---
sidebar_position: 7
---

# Запись и чтение данных в смарт-контракте

В предыдущей схеме мы опубликовали и верифицировали смарт-контракт. Теперь нам нужно записать в него данные и потом прочитать их.

Добавляем в нашу схему блок "Смарт-контракт" и передаем в него Abi контракта и его адрес. Подключаем нужную нам сеть. В блоке "Смарт-контракт" появляются интерфейсы нашего контракта:

![Текст с описанием картинки](https://github.com/web3man/web3on/raw/docusaurus/static/img/docs-img/write-read-sc.png)

Нас в первую очередь интересуют setName() и setAge(), c их помощью мы будем записывать данные. Сначала запишите свое Имя. Для этого два раза кликните на выход setName(), появится соответствующая функция. Передайте в нее ваше Имя:

![Текст с описанием картинки](https://github.com/web3man/web3on/raw/docusaurus/static/img/docs-img/write-read-sc1.png)

Далее нам нужно эту функции с помощью транзакции. Подключаем блок с функцией setName() ко входу Data блока "Транзакция". На вход To подаем адрес нашего контракта. Отправляем транзакцию:

![Текст с описанием картинки](https://github.com/web3man/web3on/raw/docusaurus/static/img/docs-img/write-read-sc2.png)

Чтобы проверить произошла ли запись, прочитаем даныые из контракта с помощью функции getName():

![Текст с описанием картинки](https://github.com/web3man/web3on/raw/docusaurus/static/img/docs-img/write-read-sc3.png)

Теперь повторите все тоже самое с setAge() и getAge().

![Текст с описанием картинки](https://github.com/web3man/web3on/raw/docusaurus/static/img/docs-img/write-read-sc4.png)

![Текст с описанием картинки](https://github.com/web3man/web3on/raw/docusaurus/static/img/docs-img/write-read-sc5.png)


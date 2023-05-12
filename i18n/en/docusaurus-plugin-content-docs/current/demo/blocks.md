---
sidebar_position: 1
---

# Визуализация работы блоков в блокчейне

Итак, мы знаем, что блокчейн это «цепочка блоков». Давайте визуализируем ее и посмотрим как она работает.

Возьмем сначала из библиотеки 4 блока конструктора: "Многострочный текст", "Объединить", "Текст" и "Хэш". Можно найти их по названию в поиске в панели инструментов справа. И соединим их как на изображении ниже:

![Текст с описанием картинки](https://github.com/web3man/web3on/raw/docusaurus/static/img/docs-img/blocks1.png)

Блок "Объединить" будет нашим нулевым блокчейн-блоком (его еще называют «генезис-блоком»). Правой клавишей мыши нажимаем на блок и в появившемся контекстном меню выбираем пункт «Заголовок». Переименовываем блок в «Блок 0».

Блок «Многострочный текст» будет у нас списком всех транзакций, которые попадут в Блок 0. Так и назовем его «Транзакции». И запишем в него несколько произвольных строк текста - это сами транзакции.

Блок «Текст» это «ID предыдущего блока», но так как предыдущего блока у нас нет, оставляем его пустым.

Блок «Хэш» нам нужен, чтобы получить хэш содержимого блокчейн-блока и передать в следующий блокчейн-блок. Этот хэш является уникальным ID нашего блокчейн-блока.

После всех преобразований у нас получается такая схема:

![Текст с описанием картинки](https://github.com/web3man/web3on/raw/docusaurus/static/img/docs-img/blocks2.png)

Теперь создадим следующий блокчейн-блок и передадим в него ID Блока 0. Для этого просто копируем нашу схему и размещаем справа. Для копирования зажимаем Ctrl и выделяем зону вокруг схемы, далее Ctrl+C и Ctrl+V. И перетаскиваем копию в нужное место.

Переименовываем второй блокчейн-блок в Блок 1 и соединяем первый блок «Хэш» со вторым блоком «ID предыдущего блока». Получается следующая схема:

![Текст с описанием картинки](https://github.com/web3man/web3on/raw/docusaurus/static/img/docs-img/blocks3.png)

Это простейшая цепочка блоков. Добавьте в нее еще пару блокчейн-блоков, повторив описанные выше манипуляции.

Далее измените, или добавьте, любые данные в блоке «Транзакции». Хэш этого блокчейн-блока, а также всех следующих блоков изменится.

Таким образом, если кто-то попытается подменить данные, он сможет сделать это только в своей копии цепочки блоков. У остальных участников сети есть свои копии и сравнив фальсифицированную со своими, они ее отвергнут. Так работает блокчейн.


Видео сбора схемы:

<iframe width="560" height="315" src="https://www.youtube.com/embed/pbmqlwH3i_g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"></iframe>
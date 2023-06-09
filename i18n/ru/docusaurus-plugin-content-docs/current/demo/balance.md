---
sidebar_position: 4
---

# Получение баланса по адресу

Теперь мы знаем что такое блокчейн адрес. Давайте пополним его средствами (монетами), а после этого проверим баланс.

Для этого мы подключимся к одной из тестовых сетей Ethereum, их используют разработчики для тестирования блокчейн-приложений. Возьмем сеть Sepolia.

На доске сгенерируем себе адрес и подключим к нему блок «Баланс». А к нему подключим блок «Кнопка», чтобы можно было проверять баланс по запросу:

![Текст с описанием картинки](https://github.com/web3man/web3on/raw/docusaurus/static/img/docs-img/balance2.png)

Далее нам нужно подключиться к сети. Берем блок «Сеть (RPC)», выбираем там Sepolia Testnet и подключаем его к блоку «Баланс».

И еще к выходу блока «Баланс» добавим блок «Число», чтобы нам собственно отобразить баланс.

Получается схема:

![Текст с описанием картинки](https://github.com/web3man/web3on/raw/docusaurus/static/img/docs-img/balance9.png)

У нас отображается баланс 0, т.к. мы его еще не пополнили.

Монеты в тестовых сетях можно получить бесплатно, запросив на одном из специальных сервисов, они называются «Кранами (faucet)».

Обратимся к крану https://sepoliafaucet.com (в новой вкладке браузер) и зарегистрируемся там. После регистрации вы сможете раз в сутки получать 1 ETH. 

Для получения ETH копируем с доски и вставляем свой адрес. Нажимаем кнопку «Send Me ETH»:
 
![Текст с описанием картинки](https://github.com/web3man/web3on/raw/docusaurus/static/img/docs-img/balance1.png)

Ниже должен появится хэш транзакции, или ее уникальный ID:

![Текст с описанием картинки](https://github.com/web3man/web3on/raw/docusaurus/static/img/docs-img/balance4.png)

Кликнув на него вы перейдете в блокчейн-эксплорер (обозреватель блоков) сети Sepolia. В таком обозревателе можно найти все транзакции данной сети. По ссылке откроется наша транзакция пополнения адреса (если не откроется, значит она еще не исполнена):

![Текст с описанием картинки](https://github.com/web3man/web3on/raw/docusaurus/static/img/docs-img/balance6.png)

Теперь мы можем вернуться на доску и обновить баланс, если он еще не обновился автоматически. Мы видим большую цифру в блоке «Число», это наш баланс в Wei - минимальной единицей измерения ETH. 1 Wei равен 0.000000000000000001 ETH. Чтобы нам привести это все к читабельному виду, добавим конвертирующий блок «Из Wei» и получим баланс в ETH:

![Текст с описанием картинки](https://github.com/web3man/web3on/raw/docusaurus/static/img/docs-img/balance10.png)

Теперь вернемся во вкладку с блокчейн-эксплорером https://sepolia.etherscan.io, и в поисковой строке введем наш адрес:

![Текст с описанием картинки](https://github.com/web3man/web3on/raw/docusaurus/static/img/docs-img/balance3.png)

Мы попадем на страницу с информацией о нашем адресе, где увидим баланс (он должен совпадать с балансом на доске) и историю транзакций: 

![Текст с описанием картинки](https://github.com/web3man/web3on/raw/docusaurus/static/img/docs-img/balance7.png)

Сохраните приватный ключ от этого адреса, он нам еще будет нужен.

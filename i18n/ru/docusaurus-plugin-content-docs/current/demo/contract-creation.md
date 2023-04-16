---
sidebar_position: 6
---

# Создание и верификация смарт-контракта

Возьмем простой смарт-контракт, в который мы можем записать свои Имя и Возраст, а потом прочитать эти данные. Контракт написан на языке Solidity:

```
// SPDX-License-Identifier: MIT
// compiler version must be greater than or equal to 0.8.17 and less than 0.9.0
pragma solidity ^0.8.19;

//contract name ...
contract IvanIvanov {

//create two variables.  A sting and an integer

    string private name;
    uint private age;

//set
    function setName(string memory newName) public {
        name = newName;
    }

//get
    function getName () public view returns (string memory) {
        return name;
    }
    
//set
    function setAge(uint newAge) public {
        age = newAge;
        
    }

//get
    function getAge () public view returns (uint) {
        return age;
    }
    
}
```

Вставляем код смарт-контракта в блок "Код" и подключаем его к блоку "Компилятор". Так мы переведем код нашего смарт-контракта в байткод, чтобы его могла исполнять Ethereum Virtual Machine (EVM). Замените название смартконтракта IvanIvanov на ваши Имя и Фамилию в таком же формате:   

![Текст с описанием картинки](https://github.com/web3man/web3on/raw/docusaurus/static/img/docs-img/sc-create.png)

В случае успешной компиляции должно появиться соответствующее сообщение и байткод:

![Текст с описанием картинки](https://github.com/web3man/web3on/raw/docusaurus/static/img/docs-img/sc-create1.png)

Теперь нам нужно разместь контракт в сети. Делается это с помощью транзакции, которую мы уже умеем делать. На вход Data блока "Транзакция" мы должны подать байткод контракта, вход To оставляем пустым, а Gas Limit устанавливаем побольше, например, 500 000:

![Текст с описанием картинки](https://github.com/web3man/web3on/raw/docusaurus/static/img/docs-img/sc-create2.png)

![Текст с описанием картинки](https://github.com/web3man/web3on/raw/docusaurus/static/img/docs-img/sc-create3.png)

![Текст с описанием картинки](https://github.com/web3man/web3on/raw/docusaurus/static/img/docs-img/sc-create4.png)

![Текст с описанием картинки](https://github.com/web3man/web3on/raw/docusaurus/static/img/docs-img/sc-create5.png)

![Текст с описанием картинки](https://github.com/web3man/web3on/raw/docusaurus/static/img/docs-img/sc-create6.png)

"use strict";

class Animal {

    constructor(name) {
        this.name = name;
    }

}

class Dog extends Animal {

    constructor(name) {
        // 継承したクラスのコンストラクタでは、super必須
        // superの前にthisを使ってはいけない
        super(name);
        this.cry = `My name is ${name}!!`;
    }

    bark() {
        console.log(this.cry);
    }

}

const dog = new Dog(process.argv[2]);

dog.bark();
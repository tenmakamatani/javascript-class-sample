"use strict";

let globalInstanceCount = 0;

class Animal {

    constructor(name) {
        this.name = name;
        globalInstanceCount++;
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

    //静的メソッド、Dog.getInstanceCount()の形で呼び出せる。インスタンスからは呼び出せない
    //
    static getInstanceCount() {
        return globalInstanceCount;
    }

}

const dog = new Dog(process.argv[2]);

console.log(Dog.getInstanceCount());
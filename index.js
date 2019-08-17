"use strict";

class Dog {

    constructor(name) {
        this.name = name;
        if (name == undefined) {
            this.name = "no name";
        }
    }

    bark() {
        console.log(`My name is ${this.name}`)
    }

}

const dog = new Dog(process.argv[2]);

dog.bark();
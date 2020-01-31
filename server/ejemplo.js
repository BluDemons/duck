const express = require('express');
const router = express.Router();
const FlyBehaivor = require('./fly');
const QuackBehaivor = require('./quack');

class Duck {
    constructor() {
        this.flyBehavior = FlyBehaivor;
        this.quackBehaivor = QuackBehaivor;
    };

    display() {
        console.log('')
    };
    performFly() {
        //return this.flyBehaivor.fly();
    }
    performQuack() {
        //this.quackBehaivor.quack();
    }
    swim() {
        console.log('puedo nadar');
    }
    setFlyBehavior(FlyBehavior) {
        console.log('puedo nadar');
    }
    setQuackBehavior(QuackBehavior) {
        console.log('puedo volar');
    }
}
const mallard = new Duck();
mallard.setFlyBehavior();
mallard.setQuackBehavior();

module.exports = Duck;
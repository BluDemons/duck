const FlyBehaivor = require('./interfaces/fly');
const QuackBehaivor = require('./interfaces/quack');
const ModelPatos = require('./patosModelos');
const flyBehavior = new FlyBehaivor();
const quackBehaivor = new QuackBehaivor();
//const modeloPatos = new ModelPatos();

class Duck {   

    display(){
        return modeloPatos;
    } 

    swim() {
        console.log('puedo nadar');
    }
    setFlyBehavior() {
        return flyBehavior;
    }
    setQuackBehavior() {
        return quackBehaivor;
    }
}

module.exports = Duck;
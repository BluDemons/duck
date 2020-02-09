const Duck = require('./pato');

class ModelPatos extends Duck{
    patoMallard() {
        console.log('Pato mallard');
        const mallard = new Duck();
        mallard.setFlyBehavior().FlyWithWings();
        mallard.setFlyBehavior().fly();
        mallard.setQuackBehavior().quack();
    }
    patoCaucho() {
        console.log('Pato de Caucho');
        const patoCaucho = new Duck();
        patoCaucho.setFlyBehavior().FlyNoWay();
        patoCaucho.setQuackBehavior().noQuack();
    }
}

module.exports = ModelPatos;
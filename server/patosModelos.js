const duck = require('./pato');

class ModelPatos {
    patoMallard() {
        console.log('Pato mallard');
        const mallard = new duck();
        mallard.setFlyBehavior().FlyWithWings();
        mallard.setFlyBehavior().fly();
        mallard.setQuackBehavior().quack();
    }
    patoCaucho() {
        console.log('Pato de Caucho');
        const patoCaucho = new duck();
        patoCaucho.setFlyBehavior().FlyNoWay();
        patoCaucho.setQuackBehavior().noQuack();
    }
}

module.exports = ModelPatos;
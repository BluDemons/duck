const duck = require('./pato');

class ModelPatos {
    patoMallard() {
        const mallard = new duck();
        mallard.setFlyBehavior().FlyWithWings();
        mallard.setFlyBehavior().fly();
        mallard.setQuackBehavior().quack();
    }
    patoCaucho() {
        const patoCaucho = new duck();
        patoCaucho.setFlyBehavior().FlyNoWay();
        patoCaucho.setQuackBehavior().noQuack();
    }
}

module.exports = ModelPatos;
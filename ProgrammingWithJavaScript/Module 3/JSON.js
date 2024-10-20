const jsonStr='{"Greeting":"hello"}'
console.log(JSON.parse(jsonStr))

const data={
    firstName:"Sagar",
    lastName:"Waghmare"
}
console.log(JSON.stringify(data))

const jsonString='{"Greeting":"Hello"}'
JSON.parse(jsonStr)
const plain=JSON.parse(jsonStr)
console.log(plain)

class Animal {

}

class Dog extends Animal {
    constructor() {
        super();
        this.noise = "bark";
    }

    makeNoise() {
      return this.noise;
    }
}

class Wolf extends Dog {
    constructor() {
        super();
        this.noise = "growl";
    }
}

var result = new Wolf();
console.log(result.makeNoise());

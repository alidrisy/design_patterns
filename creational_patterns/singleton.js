/*
The Singleton Design Pattern: ensures that a class has only one instance and provides a global point of access to that instance. The core idea is that no matter how many times you try to instantiate the class, only the first instance will be created, and any subsequent attempts will return the already created instance.

Here are some use cases of the singleton design patterns:
1. Database connections
2. Logging instances in Node.js applications.
3. Creating a new object
4. Connecting to mail servers
*/

class Singleton {
  static instance;

  constructor() {
    if (Singleton.instance == null) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1.value === instance2.value); // true

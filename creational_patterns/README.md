# Creational Patterns

## Overview

**Creational Design Patterns** are a category of design patterns that deal with the process of object creation. These patterns abstract the instantiation process, making the system independent of how its objects are created, composed, and represented. By utilizing creational patterns, developers can ensure that object creation is handled in a flexible and controlled manner.

## Key Benefits

- **Encapsulation**: Creational patterns abstract the complex logic of object creation and initialization.
- **Flexibility**: They allow objects to be created in a way that allows future changes to be easily incorporated without affecting the overall system.
- **Loose Coupling**: By centralizing object creation, it reduces the dependency between classes and helps in creating a more maintainable system.

## Types of Creational Patterns

Creational patterns can be divided into several types, each serving a different purpose when it comes to object creation. Below are the most widely known creational patterns:

### 1. **Singleton Pattern**

- **Purpose**: Ensures a class has only one instance and provides a global point of access to it.
- **Use Case**: Used when you need to limit the number of instances of a class (e.g., a database connection, a configuration manager).

#### Example

[**Singleton Pattern**](singleton.js)

---
outline: deep
---

## Java 变量类型
在 Java 语言中，所有的变量在使用前必须声明。

声明变量的基本格式如下：
```java
type identifier [ = value][, identifier [= value] ...] ;
//格式说明：
//type -- 数据类型。
//identifier -- 是变量名，可以使用逗号 , 隔开来声明多个同类型变量。
```
以下列出了一些变量的声明实例。注意有些包含了初始化过程。
```java
int a, b, c;         // 声明三个int型整数：a、 b、c
int d = 3, e = 4, f = 5; // 声明三个整数并赋予初值
byte z = 22;         // 声明并初始化 z
String s = "runoob";  // 声明并初始化字符串 s
double pi = 3.14159; // 声明了双精度浮点型变量 pi
char x = 'x';        // 声明变量 x 的值是字符 'x'。
```
Java 语言支持的变量类型有：

- 局部变量（Local Variables）：局部变量是在方法、构造函数或块内部声明的变量，它们在声明的方法、构造函数或块执行结束后被销毁，局部变量在声明时需要初始化，否则会导致编译错误。
```java
public void exampleMethod() {
    int localVar = 10; // 局部变量
    // ...
}
```
- 实例变量（Instance Variables）：实例变量是在类中声明，但在方法、构造函数或块之外，它们属于类的实例，每个类的实例都有自己的副本，如果不明确初始化，实例变量会被赋予默认值（数值类型为0，boolean类型为false，对象引用类型为null）。
```java
public class ExampleClass {
    int instanceVar; // 实例变量
}
```
- 静态变量或类变量（Class Variables）：类变量是在类中用 static 关键字声明的变量，它们属于类而不是实例，所有该类的实例共享同一个类变量的值，类变量在类加载时被初始化，而且只初始化一次。
```java
public class ExampleClass {
    static int classVar; // 类变量
}
```
- 参数变量（Parameters）：参数是方法或构造函数声明中的变量，用于接收调用该方法或构造函数时传递的值，参数变量的作用域只限于方法内部。
```java
public void exampleMethod(int parameterVar) {
    // 参数变量
    // ...
}
```
以下实例中定义了一个 RunoobTest 类，其中包含了一个成员变量 instanceVar 和一个静态变量 staticVar。

method() 方法中定义了一个参数变量 paramVar 和一个局部变量 localVar。在方法内部，我们将局部变量的值赋给成员变量，将参数变量的值赋给静态变量，然后打印出这些变量的值。

在 main() 方法中，我们创建了一个 RunoobTest 对象，并调用了它的 method() 方法。
#### 实例Test002
::: tip 实例Test002
```java
public class RunoobTest {
    // 成员变量
    private int instanceVar;
    // 静态变量
    private static int staticVar;
    
    public void method(int paramVar) {
        // 局部变量
        int localVar = 10;
        
        // 使用变量
        instanceVar = localVar;
        staticVar = paramVar;
        
        System.out.println("成员变量: " + instanceVar);
        System.out.println("静态变量: " + staticVar);
        System.out.println("参数变量: " + paramVar);
        System.out.println("局部变量: " + localVar);
    }
    
    public static void main(String[] args) {
        RunoobTest v = new RunoobTest();
        v.method(20);
    }
}
```
:::
运行以上代码，输出如下：
```
成员变量: 10
静态变量: 20
参数变量: 20
局部变量: 10
```

### Java 参数变量
Java 中的参数变量是指在方法或构造函数中声明的变量，用于接收传递给方法或构造函数的值。参数变量与局部变量类似，但它们只在方法或构造函数被调用时存在，并且只能在方法或构造函数内部使用。

Java 方法的声明语法如下：
```java
accessModifier returnType methodName(parameterType parameterName1, parameterType parameterName2, ...) {
    // 方法体
}
```
- parameterType -- 表示参数变量的类型。
- parameterName -- 表示参数变量的名称。
在调用方法时，我们必须为参数变量传递值，这些值可以是常量、变量或表达式。

方法参数变量的值传递方式有两种：**值传递**和**引用传递**。

- **值传递**：在方法调用时，传递的是实际参数的值的副本。当参数变量被赋予新的值时，只会修改副本的值，不会影响原始值。Java 中的基本数据类型都采用值传递方式传递参数变量的值。

- **引用传递**：在方法调用时，传递的是实际参数的引用（即内存地址）。当参数变量被赋予新的值时，会修改原始值的内容。Java 中的对象类型采用引用传递方式传递参数变量的值。
#### 实例Test003
以下是一个简单的例子，展示了方法参数变量的使用：
::: tip Test003
```java
public class RunoobTest {
    public static void main(String[] args) {
        int a = 10, b = 20;
        swap(a, b); // 调用swap方法
        System.out.println("a = " + a + ", b = " + b); // 输出a和b的值
    }
    
    public static void swap(int x, int y) {
        int temp = x;
        x = y;
        y = temp;
    }
}
```
:::

运行以上代码，输出如下：
```
a = 10, b = 20
```
### Java 局部变量
Java 的局部变量是在方法、构造方法或语句块内部声明的变量，其作用域限制在声明它的代码块内部。

局部变量的声明语法为：
```java
type variableName;
//type -- 表示变量的类型。
//variableName -- 表示变量的名称。
```
说明：

- 作用域：局部变量的作用域限于它被声明的方法、构造方法或代码块内。一旦代码执行流程离开这个作用域，局部变量就不再可访问。

- 生命周期：局部变量的生命周期从声明时开始，到方法、构造方法或代码块执行结束时终止。之后，局部变量将被垃圾回收。

- 初始化：局部变量在使用前必须被初始化。如果不进行初始化，编译器会报错，因为 Java 不会为局部变量提供默认值。

- 声明：局部变量的声明必须在方法或代码块的开始处进行。声明时可以指定数据类型，后面跟着变量名，例如：int count;。

- 赋值：局部变量在声明后必须被赋值，才能在方法内使用。赋值可以是直接赋值，也可以是通过方法调用或表达式。

- 限制：局部变量不能被类的其他方法直接访问，它们只为声明它们的方法或代码块所私有。

- 内存管理：局部变量存储在 Java 虚拟机（JVM）的栈上，与存储在堆上的实例变量或对象不同。

- 垃圾回收：由于局部变量的生命周期严格限于方法或代码块的执行，它们在方法或代码块执行完毕后不再被引用，因此JVM的垃圾回收器会自动回收它们占用的内存。

- 重用：局部变量的名称可以在不同的方法或代码块中重复使用，因为它们的作用域是局部的，不会引起命名冲突。

- 参数和返回值：方法的参数可以视为一种特殊的局部变量，它们在方法被调用时初始化，并在方法返回后生命周期结束。

#### 实例Test004
以下是一个简单的例子，展示了局部变量的使用：
::: tip Test004
```java
public class LocalVariablesExample {
    public static void main(String[] args) {
        int a = 10; // 局部变量a的声明和初始化
        int b;     // 局部变量b的声明
        b = 20;    // 局部变量b的初始化
        
        System.out.println("a = " + a);
        System.out.println("b = " + b);
        
        // 如果在使用之前不初始化局部变量，编译器会报错
        // int c;
        // System.out.println("c = " + c);
    }
}
```
:::

以上实例中我们声明并初始化了两个局部变量 a 和 b，然后打印出它们的值。注意，如果在使用局部变量之前不初始化它，编译器会报错。

在以下实例中 age 是一个局部变量，定义在 pupAge()方法中，它的作用域就限制在这个方法中：
#### Test005
::: tip Test005
```java
package com.runoob.test;
 
public class Test{ 
   public void pupAge(){
    //age 变量如果没有初始化，所以在编译时会出错
      int age = 0;
      age = age + 7;
      System.out.println("小狗的年龄是: " + age);
   }
   
   public static void main(String[] args){
      Test test = new Test();
      test.pupAge();
   }
}
```
:::

以上实例编译运行结果如下:
```
小狗的年龄是: 7
```

### 成员变量（实例变量）
- 成员变量声明在一个类中，但在方法、构造方法和语句块之外。
- 当一个对象被实例化之后，每个成员变量的值就跟着确定。
- 成员变量在对象创建的时候创建，在对象被销毁的时候销毁。
- 成员变量的值应该至少被一个方法、构造方法或者语句块引用，使得外部能够通过这些方式获取实例变量信息。
- 成员变量可以声明在使用前或者使用后。
- 访问修饰符可以修饰成员变量。
- 成员变量对于类中的方法、构造方法或者语句块是可见的。一般情况下应该把成员变量设为私有。通过使用访问修饰符可以使成员变量对子类可见。
- 成员变量具有默认值。数值型变量的默认值是0，布尔型变量的默认值是 false，引用类型变量的默认值是 null。变量的值可以在声明时指定，也可以在构造方法中指定；
- 成员变量可以直接通过变量名访问。但在静态方法以及其他类中，就应该使用完全限定名：ObjectReference.VariableName。
成员变量的声明语法为：
```java
accessModifier type variableName;
```
- accessModifier --表示访问修饰符，可以是 public、protected、private 或默认访问级别（即没有显式指定访问修饰符）。
- type -- 表示变量的类型。
- variableName -- 表示变量的名称。
与局部变量不同，成员变量的值在创建对象时被分配，即使未对其初始化，它们也会被赋予默认值，例如 int 类型的变量默认值为 0，boolean 类型的变量默认值为 false。

成员变量可以通过对象访问，也可以通过类名访问（如果它们是静态成员变量）。如果没有显式初始化成员变量，则它们将被赋予默认值。可以在构造函数或其他方法中初始化成员变量，或者通过对象或类名访问它们并设置它们的值。

#### 实例Test006
以下实例我们声明了两个成员变量 a 和 b，并对其进行了访问和设置。注意，我们可以通过对象访问成员变量，也可以通过类名访问静态成员变量。
::: tip 
```java
public class RunoobTest {
      private int a; // 私有成员变量a
      public String b = "Hello"; // 公有成员变量b
      
      public static void main(String[] args) {
         RunoobTest obj = new RunoobTest(); // 创建对象
          
          obj.a = 10; // 访问成员变量a，并设置其值为10
          System.out.println("a = " + obj.a);
          
          obj.b = "World"; // 访问成员变量b，并设置其值为"World"
          System.out.println("b = " + obj.b);
      }
  }
```
:::
以上实例编译运行结果如下:
```
a = 10
b = World
```

以下实例我们声明了两个成员变量 name 和 salary，并对其进行了访问和设置。

Employee.java 文件代码：
```java
import java.io.*;
public class Employee{
   // 这个成员变量对子类可见
   public String name;
   // 私有变量，仅在该类可见
   private double salary;
   //在构造器中对name赋值
   public Employee (String empName){
      name = empName;
   }
   //设定salary的值
   public void setSalary(double empSal){
      salary = empSal;
   }  
   // 打印信息
   public void printEmp(){
      System.out.println("名字 : " + name );
      System.out.println("薪水 : " + salary);
   }
 
   public static void main(String[] args){
      Employee empOne = new Employee("RUNOOB");
      empOne.setSalary(1000.0);
      empOne.printEmp();
   }
}
```
以上实例编译运行结果如下:
```
$ javac Employee.java 
$ java Employee
名字 : RUNOOB
薪水 : 1000.0
```

### 类变量（静态变量）
Java 中的静态变量是指在类中定义的一个变量，它与类相关而不是与实例相关，即无论创建多少个类实例，静态变量在内存中只有一份拷贝，被所有实例共享。

静态变量在类加载时被创建，在整个程序运行期间都存在。

**定义方式**
静态变量的定义方式是在类中使用 static 关键字修饰变量，通常也称为类变量。

以下实例中我们定义一个静态变量 count ，其初始值为 0：
```java
//实例
public class MyClass {
    public static int count = 0;
    // 其他成员变量和方法
}
```
**访问方式**
由于静态变量是与类相关的，因此可以通过类名来访问静态变量，也可以通过实例名来访问静态变量。
```java
//实例
MyClass.count = 10; // 通过类名访问
MyClass obj = new MyClass();
obj.count = 20; // 通过实例名访问
```
**生命周期***
静态变量的生命周期与程序的生命周期一样长，即它们在类加载时被创建，在整个程序运行期间都存在，直到程序结束才会被销毁。因此，静态变量可以用来存储整个程序都需要使用的数据，如配置信息、全局变量等。

**初始化时机**
静态变量在类加载时被初始化，其初始化顺序与定义顺序有关。

如果一个静态变量依赖于另一个静态变量，那么它必须在后面定义。
```java
//实例
public class MyClass {
    public static int count1 = 0;
    public static int count2 = count1 + 1;
    // 其他成员变量和方法
}
```
上面的例子中，count1 要先于 count2 初始化，否则编译时会报错。
**常量和静态变量的区别**
常量也是与类相关的，但它是用 final 关键字修饰的变量，一旦被赋值就不能再修改。与静态变量不同的是，常量在编译时就已经确定了它的值，而静态变量的值可以在运行时改变。另外，常量通常用于存储一些固定的值，如数学常数、配置信息等，而静态变量通常用于存储可变的数据，如计数器、全局状态等。

总之，静态变量是与类相关的变量，具有唯一性和共享性，可以用于存储整个程序都需要使用的数据，但需要注意初始化时机和与常量的区别。

**静态变量的访问修饰符**
静态变量的访问修饰符可以是 public、protected、private 或者默认的访问修饰符（即不写访问修饰符）。

需要注意的是，静态变量的访问权限与实例变量不同，因为静态变量是与类相关的，不依赖于任何实例。

**静态变量的线程安全性**
Java 中的静态变量是属于类的，而不是对象的实例。因此，当多个线程同时访问一个包含静态变量的类时，需要考虑其线程安全性。

静态变量在内存中只有一份拷贝，被所有实例共享。因此，如果一个线程修改了静态变量的值，那么其他线程在访问该静态变量时也会看到修改后的值。这可能会导致并发访问的问题，因为多个线程可能同时修改静态变量，导致不确定的结果或数据一致性问题。

为了确保静态变量的线程安全性，需要采取适当的同步措施，如同步机制、原子类或 volatile 关键字，以便在多线程环境中正确地读取和修改静态变量的值。

**静态变量的命名规范**
静态变量（也称为类变量）的命名规范通常遵循驼峰命名法，并且通常使用全大写字母，单词之间用下划线分隔，并且要用 static 关键字明确标识。

- 使用驼峰命名法： 静态变量的命名应该使用驼峰命名法，即首字母小写，后续每个单词的首字母大写。例如：myStaticVariable。

- 全大写字母： 静态变量通常使用全大写字母，单词之间用下划线分隔。这被称为"大写蛇形命名法"（Upper Snake Case）。例如：MY_STATIC_VARIABLE。

- 描述性： 变量名应该是有意义的，能够清晰地表达该变量的用途。避免使用单个字符或不具有明确含义的缩写。

- 避免使用缩写： 尽量避免使用缩写，以提高代码的可读性。如果使用缩写是必要的，确保广泛理解，并在注释中进行解释。
```java
//实例
public class MyClass {
    // 使用驼峰命名法
    public static int myStaticVariable;

    // 使用大写蛇形命名法
    public static final int MAX_SIZE = 100;

    // 避免使用缩写
    public static final String employeeName;

    // 具有描述性的变量名
    public static double defaultInterestRate;
}
```
**静态变量的使用场景**
静态变量通常用于以下场景：

- 存储全局状态或配置信息
- 计数器或统计信息
- 缓存数据或共享资源
- 工具类的常量或方法
- 单例模式中的实例变量

#### 实例Test007
以下实例定义了一个 AppConfig 类，其中包含了三个静态变量 APP_NAME、APP_VERSION 和 DATABASE_URL，用于存储应用程序的名称、版本和数据库连接URL。这些变量都被声明为 final，表示它们是不可修改的常量。

在 main() 方法中，我们打印出了这些静态变量的值。
::: tip Test007
```java
//AppConfig.java 文件代码：
public class AppConfig {
    public static final String APP_NAME = "MyApp";
    public static final String APP_VERSION = "1.0.0";
    public static final String DATABASE_URL = "jdbc:mysql://localhost:3306/mydb";
    
    public static void main(String[] args) {
        System.out.println("Application name: " + AppConfig.APP_NAME);
        System.out.println("Application version: " + AppConfig.APP_VERSION);
        System.out.println("Database URL: " + AppConfig.DATABASE_URL);
    }
}
```
:::
以上实例编译运行结果如下:
```
Application name: MyApp
Application version: 1.0.0
Database URL: jdbc:mysql://localhost:3306/mydb
```
可以看到，这些静态变量存储的全局配置信息可以在整个程序中使用，并且不会被修改。这个例子展示了静态变量的另一个常见应用，通过它我们可以很方便地存储全局配置信息，或者实现其他需要全局共享的数据。

以下实例定义了一个 Counter 类，其中包含了一个静态变量 count，用于记录创建了多少个 Counter 对象。

每当创建一个新的对象时，构造方法会将计数器加一。静态方法 getCount() 用于获取当前计数器的值。

在 main() 方法中，我们创建了三个 Counter 对象，并打印出了计数器的值。
#### Test008
Counter.java 文件代码：
```java
public class Counter {
    private static int count = 0;
    
    public Counter() {
        count++;
    }
    
    public static int getCount() {
        return count;
    }
    
    public static void main(String[] args) {
        Counter c1 = new Counter();
        Counter c2 = new Counter();
        Counter c3 = new Counter();
        System.out.println("目前为止创建的对象数: " + Counter.getCount());
    }
}
```
以上实例编译运行结果如下:
```
目前为止创建的对象数: 3
```
可以看到，计数器记录了创建了三个对象。这个例子展示了静态变量的一个简单应用，通过它我们可以很方便地统计对象的创建次数，或者记录其他需要全局共享的数据。

### Java 变量命名规则
在 Java 中，不同类型的变量（例如实例变量、局部变量、静态变量等）有一些命名规则和约定。

遵循一些基本规则，这有助于提高代码的可读性和维护性。

以下是各种变量命名规则的概述：

- 使用有意义的名字： 变量名应该具有清晰的含义，能够准确地反映变量的用途。避免使用单个字符或无意义的缩写。

- 驼峰命名法（Camel Case）： 在变量名中使用驼峰命名法，即将每个单词的首字母大写，除了第一个单词外，其余单词的首字母都采用大写形式。例如：myVariableName。

- 避免关键字： 不要使用 Java 关键字（例如，class、int、boolean等）作为变量名。

- 区分大小写： Java 是大小写敏感的，因此变量名中的大小写字母被视为不同的符号。例如，myVariable 和 myvariable 是两个不同的变量。

- 不以数字开头： 变量名不能以数字开头，但可以包含数字。

- 遵循命名约定： 对于不同类型的变量（局部变量、实例变量、静态变量等），可以采用不同的命名约定，例如使用前缀或后缀来区分。

**局部变量**
- 使用驼峰命名法。
- 应该以小写字母开头。
- 变量名应该是描述性的，能够清晰地表示其用途。
```java
int myLocalVariable;
```
**实例变量（成员变量）**
- 使用驼峰命名法。
- 应该以小写字母开头。
- 变量名应该是描述性的，能够清晰地表示其用途。
```java
private int myInstanceVariable;
```
**静态变量（类变量）**
- 使用驼峰命名法，应该以小写字母开头。
- 通常也可以使用大写蛇形命名法，全大写字母，单词之间用下划线分隔。
- 变量名应该是描述性的，能够清晰地表示其用途。
```java
// 使用驼峰命名法
public static int myStaticVariable;
// 使用大写蛇形命名法
public static final int MAX_SIZE = 100;
```
**常量**
- 使用全大写字母，单词之间用下划线分隔。
- 常量通常使用 final 修饰。
```java
public static final double PI = 3.14;
```
**参数**
- 使用驼峰命名法。
- 应该以小写字母开头。
- 参数名应该是描述性的，能够清晰地表示其用途。
```java
public void myMethod(int myParameter) {
    // 方法体
}
```
**类名**
- 使用驼峰命名法。
- 应该以大写字母开头。
- 类名应该是描述性的，能够清晰地表示其用途。
```java
public class MyClass {
    // 类的成员和方法
}
```
## Java 修饰符

Java语言提供了很多修饰符，主要分为以下两类：

- 访问修饰符
- 非访问修饰符
修饰符用来定义类、方法或者变量，通常放在语句的最前端。我们通过下面的例子来说明：
```java
public class ClassName {
   // ...
}
private boolean myFlag;
static final double weeks = 9.5;
protected static final int BOXWIDTH = 42;
public static void main(String[] arguments) {
   // 方法体
}
```
### 访问控制修饰符
Java中，可以使用访问控制符来保护对类、变量、方法和构造方法的访问。Java 支持 4 种不同的访问权限。

- default (即默认，什么也不写）: 在同一包内可见，不使用任何修饰符。使用对象：类、接口、变量、方法。

- private : 在同一类内可见。使用对象：变量、方法。 注意：不能修饰类（外部类）

- public : 对所有类可见。使用对象：类、接口、变量、方法

- protected : 对同一包内的类和所有子类可见。使用对象：变量、方法。 注意：不能修饰类（外部类）。

我们可以通过以下表来说明访问权限：

访问控制:
|修饰符	  |当前类|同一包内|子孙类(同一包)|子孙类(不同包)|其他包|
| ------- | :----: | :----: | :----: | :----: | :----: | 
|public	|Y|	Y|	Y|	Y|	Y|
|protected	|Y|	Y|	Y|	Y/N[（说明）](3_day_java.html#受保护的访问修饰符-protected)|	N|
|default	|Y|	Y|	Y|	N|	N|
|private	|Y|	N|	N|	N|	N|

#### 默认访问修饰符-不使用任何关键字
如果在类、变量、方法或构造函数的定义中没有指定任何访问修饰符，那么它们就默认具有默认访问修饰符。

默认访问修饰符的访问级别是包级别（package-level），即只能被同一包中的其他类访问。

如下例所示，变量和方法的声明可以不使用任何修饰符。

实例
```java
// MyClass.java
 
class MyClass {  // 默认访问修饰符
 
    int x = 10;  // 默认访问修饰符
 
    void display() {  // 默认访问修饰符
        System.out.println("Value of x is: " + x);
    }
}
 
// MyOtherClass.java
 
class MyOtherClass {
    public static void main(String[] args) {
        MyClass obj = new MyClass();
        obj.display();  // 访问 MyClass 中的默认访问修饰符变量和方法
    }
}
```
以上实例中，MyClass 类和它的成员变量 x 和方法 display() 都使用默认访问修饰符进行了定义。MyOtherClass 类在同一包中，因此可以访问 MyClass 类和它的成员变量和方法。

#### 私有访问修饰符-private
私有访问修饰符是最严格的访问级别，所以被声明为 private 的方法、变量和构造方法只能被所属类访问，并且类和接口不能声明为 private。

声明为私有访问类型的变量只能通过类中公共的 getter 方法被外部类访问。

Private 访问修饰符的使用主要用来隐藏类的实现细节和保护类的数据。

下面的类使用了私有访问修饰符：
```java
public class Logger {
   private String format;
   public String getFormat() {
      return this.format;
   }
   public void setFormat(String format) {
      this.format = format;
   }
}
```
实例中，Logger 类中的 format 变量为私有变量，所以其他类不能直接得到和设置该变量的值。为了使其他类能够操作该变量，定义了两个 public 方法：getFormat() （返回 format的值）和 setFormat(String)（设置 format 的值）

#### 公有访问修饰符-public
被声明为 public 的类、方法、构造方法和接口能够被任何其他类访问。

如果几个相互访问的 public 类分布在不同的包中，则需要导入相应 public 类所在的包。由于类的继承性，类所有的公有方法和变量都能被其子类继承。

以下函数使用了公有访问控制：
```java
public static void main(String[] arguments) {
   // ...
}
```
Java 程序的 main() 方法必须设置成公有的，否则，Java 解释器将不能运行该类。

#### 受保护的访问修饰符-protected
protected 需要从以下两个点来分析说明：

- 子类与基类在同一包中：被声明为 protected 的变量、方法和构造器能被同一个包中的任何其他类访问；

- 子类与基类不在同一包中：那么在子类中，子类实例可以访问其从基类继承而来的 protected 方法，而不能访问基类实例的protected方法。

protected 可以修饰数据成员，构造方法，方法成员，**不能修饰类（内部类除外）**。

接口及接口的成员变量和成员方法不能声明为 protected。 可以看看下图演示：
![3_day_java_01](https://www.runoob.com/wp-content/uploads/2013/12/java-protected.gif)


子类能访问 protected 修饰符声明的方法和变量，这样就能保护不相关的类使用这些方法和变量。

下面的父类使用了 protected 访问修饰符，子类重写了父类的 openSpeaker() 方法。
```java
class AudioPlayer {
   protected boolean openSpeaker(Speaker sp) {
      // 实现细节
   }
}
 
class StreamingAudioPlayer extends AudioPlayer {
   protected boolean openSpeaker(Speaker sp) {
      // 实现细节
   }
}
```
如果把 openSpeaker() 方法声明为 private，那么除了 AudioPlayer 外，其他类将不能访问该方法。

如果把 openSpeaker() 声明为 public，那么所有的类都能够访问该方法。

如果我们只想让该方法对其所在类的子类可见，则将该方法声明为 protected。

protected 是最难理解的一种 Java 类成员访问权限修饰词，更多详细内容请查看 [Java protected 关键字详解](https://www.runoob.com/w3cnote/java-protected-keyword-detailed-explanation.html)。

访问控制和继承
请注意以下方法继承的规则：

- 父类中声明为 public 的方法在子类中也必须为 public。

- 父类中声明为 protected 的方法在子类中要么声明为 protected，要么声明为 public，不能声明为 private。

- 父类中声明为 private 的方法，不能够被子类继承。

### 非访问修饰符
为了实现一些其他的功能，Java 也提供了许多非访问修饰符。

- static 修饰符，用来修饰类方法和类变量。

- final 修饰符，用来修饰类、方法和变量，final 修饰的类不能够被继承，修饰的方法不能被继承类重新定义，修饰的变量为常量，是不可修改的。

- abstract 修饰符，用来创建抽象类和抽象方法。

- synchronized 和 volatile 修饰符，主要用于线程的编程。

#### static 修饰符
静态变量：

static 关键字用来声明独立于对象的静态变量，无论一个类实例化多少对象，它的静态变量只有一份拷贝。 静态变量也被称为类变量。局部变量不能被声明为 static 变量。

静态方法：

static 关键字用来声明独立于对象的静态方法。静态方法不能使用类的非静态变量。静态方法从参数列表得到数据，然后计算这些数据。

对类变量和方法的访问可以直接使用 classname.variablename 和 classname.methodname 的方式访问。

如下例所示，static 修饰符用来创建类方法和类变量。
```java
public class InstanceCounter {
   private static int numInstances = 0;
   protected static int getCount() {
      return numInstances;
   }
 
   private static void addInstance() {
      numInstances++;
   }
 
   InstanceCounter() {
      InstanceCounter.addInstance();
   }
 
   public static void main(String[] arguments) {
      System.out.println("Starting with " +
      InstanceCounter.getCount() + " instances");
      for (int i = 0; i < 500; ++i){
         new InstanceCounter();
          }
      System.out.println("Created " +
      InstanceCounter.getCount() + " instances");
   }
}
```
以上实例运行编辑结果如下:
```
Starting with 0 instances
Created 500 instances
```
#### final 修饰符
- final 变量：

final 表示"最后的、最终的"含义，变量一旦赋值后，不能被重新赋值。被 final 修饰的实例变量必须显式指定初始值。

final 修饰符通常和 static 修饰符一起使用来创建类常量。

实例
```java
public class Test{
  final int value = 10;
  // 下面是声明常量的实例
  public static final int BOXWIDTH = 6;
  static final String TITLE = "Manager";
 
  public void changeValue(){
     value = 12; //将输出一个错误
  }
}
```
- final 方法

父类中的 final 方法可以被子类继承，但是不能被子类重写。

声明 final 方法的主要目的是防止该方法的内容被修改。

如下所示，使用 final 修饰符声明方法。
```java
public class Test{
    public final void changeName(){
       // 方法体
    }
}
```
- final 类

final 类不能被继承，没有类能够继承 final 类的任何特性。
```java
实例
public final class Test {
   // 类体
}
```
#### abstract 修饰符
抽象类：

抽象类不能用来实例化对象，声明抽象类的唯一目的是为了将来对该类进行扩充。

一个类不能同时被 abstract 和 final 修饰。如果一个类包含抽象方法，那么该类一定要声明为抽象类，否则将出现编译错误。

抽象类可以包含抽象方法和非抽象方法。
```java
//实例
abstract class Caravan{
   private double price;
   private String model;
   private String year;
   public abstract void goFast(); //抽象方法
   public abstract void changeColor();
}
```
抽象方法

抽象方法是一种没有任何实现的方法，该方法的具体实现由子类提供。

抽象方法不能被声明成 final 和 static。

任何继承抽象类的子类必须实现父类的所有抽象方法，除非该子类也是抽象类。

如果一个类包含若干个抽象方法，那么该类必须声明为抽象类。抽象类可以不包含抽象方法。

抽象方法的声明以分号结尾，例如：public abstract sample();。
```java
//实例
public abstract class SuperClass{
    abstract void m(); //抽象方法
}
 
class SubClass extends SuperClass{
     //实现抽象方法
      void m(){
          .........
      }
}
```
#### synchronized 修饰符
synchronized 关键字声明的方法同一时间只能被一个线程访问。synchronized 修饰符可以应用于四个访问修饰符。
```java
实例
public synchronized void showDetails(){
.......
}
```
**transient 修饰符**
序列化的对象包含被 transient 修饰的实例变量时，java 虚拟机(JVM)跳过该特定的变量。

该修饰符包含在定义变量的语句中，用来预处理类和变量的数据类型。
```java
//实例
public transient int limit = 55;   // 不会持久化
public int b; // 持久化
```
#### volatile 修饰符
volatile 修饰的成员变量在每次被线程访问时，都强制从共享内存中重新读取该成员变量的值。而且，当成员变量发生变化时，会强制线程将变化值回写到共享内存。这样在任何时刻，两个不同的线程总是看到某个成员变量的同一个值。

一个 volatile 对象引用可能是 null。

实例
```java
public class MyRunnable implements Runnable
{
    private volatile boolean active;
    public void run()
    {
        active = true;
        while (active) // 第一行
        {
            // 代码
        }
    }
    public void stop()
    {
        active = false; // 第二行
    }
}
```
通常情况下，在一个线程调用 run() 方法（在 Runnable 开启的线程），在另一个线程调用 stop() 方法。 如果 第一行 中缓冲区的 active 值被使用，那么在 第二行 的 active 值为 false 时循环不会停止。

但是以上代码中我们使用了 volatile 修饰 active，所以该循环会停止。

### Java switch case 语句
switch case 语句判断一个变量与一系列值中某个值是否相等，每个值称为一个分支。

语法
switch case 语句语法格式如下：
```java
switch(expression){
    case value :
       //语句
       break; //可选
    case value :
       //语句
       break; //可选
    //你可以有任意数量的case语句
    default : //可选
       //语句
}
```

switch case 语句有如下规则：

- switch 语句中的变量类型可以是： byte、short、int 或者 char。从 Java SE 7 开始，switch 支持字符串 String 类型了，同时 case 标签必须为字符串常量或字面量。

- switch 语句可以拥有多个 case 语句。每个 case 后面跟一个要比较的值和冒号。

- case 语句中的值的数据类型必须与变量的数据类型相同，而且只能是常量或者字面常量。

- 当变量的值与 case 语句的值相等时，那么 case 语句之后的语句开始执行，直到 break 语句出现才会跳出 switch 语句。

- 当遇到 break 语句时，switch 语句终止。程序跳转到 switch 语句后面的语句执行。case 语句不必须要包含 break 语句。如果没有 break 语句出现，程序会继续执行下一条 case 语句，直到出现 break 语句。

- switch 语句可以包含一个 default 分支，该分支一般是 switch 语句的最后一个分支（可以在任何位置，但建议在最后一个）。default 在没有 case 语句的值和变量值相等的时候执行。default 分支不需要 break 语句。

**switch case 执行时，一定会先进行匹配，匹配成功返回当前 case 的值，再根据是否有 break，判断是否继续输出，或是跳出判断。**

实例
Test.java 文件代码：
```java
public class Test {
   public static void main(String args[]){
      //char grade = args[0].charAt(0);
      char grade = 'C';
 
      switch(grade)
      {
         case 'A' :
            System.out.println("优秀"); 
            break;
         case 'B' :
         case 'C' :
            System.out.println("良好");
            break;
         case 'D' :
            System.out.println("及格");
            break;
         case 'F' :
            System.out.println("你需要再努力努力");
            break;
         default :
            System.out.println("未知等级");
      }
      System.out.println("你的等级是 " + grade);
   }
}
```
以上代码编译运行结果如下：
```
良好
你的等级是 C
```
如果 case 语句块中没有 break 语句时，JVM 并不会顺序输出每一个 case 对应的返回值，而是继续匹配，匹配不成功则返回默认 case。

Test.java 文件代码：
```java
public class Test {
   public static void main(String args[]){
      int i = 5;
      switch(i){
         case 0:
            System.out.println("0");
         case 1:
            System.out.println("1");
         case 2:
            System.out.println("2");
         default:
            System.out.println("default");
      }
   }
}
```
以上代码编译运行结果如下：
```
default
```
如果 case 语句块中没有 break 语句时，匹配成功后，从当前 case 开始，后续所有 case 的值都会输出。

Test.java 文件代码：
```java
public class Test {
   public static void main(String args[]){
      int i = 1;
      switch(i){
         case 0:
            System.out.println("0");
         case 1:
            System.out.println("1");
         case 2:
            System.out.println("2");
         default:
            System.out.println("default");
      }
   }
}
```
以上代码编译运行结果如下：
```
1
2
default
```
如果当前匹配成功的 case 语句块没有 break 语句，则从当前 case 开始，后续所有 case 的值都会输出，如果后续的 case 语句块有 break 语句则会跳出判断。

Test.java 文件代码：
```java
public class Test {
   public static void main(String args[]){
      int i = 1;
      switch(i){
         case 0:
            System.out.println("0");
         case 1:
            System.out.println("1");
         case 2:
            System.out.println("2");
         case 3:
            System.out.println("3"); break;
         default:
            System.out.println("default");
      }
   }
}
```
以上代码编译运行结果如下：
```
1
2
3
```
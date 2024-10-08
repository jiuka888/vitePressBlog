
## Java 方法
在前面几个章节中我们经常使用到 System.out.println()，那么它是什么呢？

- println() 是一个方法。
- System 是系统类。
- out 是标准输出对象。

这句话的用法是调用系统类 System 中的标准输出对象 out 中的方法 println()。

**那么什么是方法呢？**

Java方法是语句的集合，它们在一起执行一个功能。

- 方法是解决一类问题的步骤的有序组合
- 方法包含于类或对象中
- 方法在程序中被创建，在其他地方被引用

**方法的优点**
1. 使程序变得更简短而清晰。
2. 有利于程序维护。
3. 可以提高程序开发的效率。
4. 提高了代码的重用性。

**方法的命名规则**
1.方法的名字的第一个单词应以小写字母作为开头，后面的单词则用大写字母开头写，不使用连接符。例如：addPerson。
2.下划线可能出现在 JUnit 测试方法名称中用以分隔名称的逻辑组件。一个典型的模式是：`test<MethodUnderTest>_<state>`，例如 `testPop_emptyStack`。
### 方法的定义
一般情况下，定义一个方法包含以下语法：
```java
修饰符 返回值类型 方法名(参数类型 参数名){
    ...
    方法体
    ...
    return 返回值;
}
```
方法包含一个方法头和一个方法体。下面是一个方法的所有部分：

- 修饰符：修饰符，这是可选的，告诉编译器如何调用该方法。定义了该方法的访问类型。
- 返回值类型 ：方法可能会返回值。returnValueType 是方法返回值的数据类型。有些方法执行所需的操作，但没有返回值。在这种情况下，returnValueType 是关键字void。
- 方法名：是方法的实际名称。方法名和参数表共同构成方法签名。
- 参数类型：参数像是一个占位符。当方法被调用时，传递值给参数。这个值被称为实参或变量。参数列表是指方法的参数类型、顺序和参数的个数。参数是可选的，方法可以不包含任何参数。
- 方法体：方法体包含具体的语句，定义该方法的功能。
![7_day_java_01](https://www.runoob.com/wp-content/uploads/2013/12/D53C92B3-9643-4871-8A72-33D491299653.jpg)
如：
```java
public static int age(int birthday){...}
```
参数可以有多个：
```java
static float interest(float principal, int year){...}
```
注意： 在一些其它语言中方法指过程和函数。一个返回非void类型返回值的方法称为函数；一个返回void类型返回值的方法叫做过程。

实例
下面的方法包含 2 个参数 num1 和 num2，它返回这两个参数的最大值。
```java
/** 返回两个整型变量数据的较大值 */
public static int max(int num1, int num2) {
   int result;
   if (num1 > num2)
      result = num1;
   else
      result = num2;
 
   return result; 
}
```
更简略的写法（三元运算符）：
```java
public static int max(int num1, int num2) {
  return num1 > num2 ? num1 : num2;
}
```
### 方法调用
Java 支持两种调用方法的方式，根据方法是否返回值来选择。

当程序调用一个方法时，程序的控制权交给了被调用的方法。当被调用方法的返回语句执行或者到达方法体闭括号时候交还控制权给程序。

当方法返回一个值的时候，方法调用通常被当做一个值。例如：
```java
int larger = max(30, 40);
```
如果方法返回值是void，方法调用一定是一条语句。例如，方法println返回void。下面的调用是个语句：
```java
System.out.println("欢迎访问菜鸟教程！");
```
实例
下面的例子演示了如何定义一个方法，以及如何调用它：

TestMax.java 文件代码：
```java
public class TestMax {
   /** 主方法 */
   public static void main(String[] args) {
      int i = 5;
      int j = 2;
      int k = max(i, j);
      System.out.println( i + " 和 " + j + " 比较，最大值是：" + k);
   }
 
   /** 返回两个整数变量较大的值 */
   public static int max(int num1, int num2) {
      int result;
      if (num1 > num2)
         result = num1;
      else
         result = num2;
 
      return result; 
   }
}
```
以上实例编译运行结果如下：
```
5 和 2 比较，最大值是：5
```
这个程序包含 main 方法和 max 方法。main 方法是被 JVM 调用的，除此之外，main 方法和其它方法没什么区别。

main 方法的头部是不变的，如例子所示，带修饰符 public 和 static,返回 void 类型值，方法名字是 main,此外带个一个 String[] 类型参数。String[] 表明参数是字符串数组。

### void 关键字
本节说明如何声明和调用一个 void 方法。

下面的例子声明了一个名为 printGrade 的方法，并且调用它来打印给定的分数。

示例
TestVoidMethod.java 文件代码：
```java
public class TestVoidMethod {
  public static void main(String[] args) {
    printGrade(78.5);
  }
 
  public static void printGrade(double score) {
    if (score >= 90.0) {
       System.out.println('A');
    }
    else if (score >= 80.0) {
       System.out.println('B');
    }
    else if (score >= 70.0) {
       System.out.println('C');
    }
    else if (score >= 60.0) {
       System.out.println('D');
    }
    else {
       System.out.println('F');
    }
  }
}
```
以上实例编译运行结果如下：
```
C
```
这里printGrade方法是一个void类型方法，它不返回值。

一个void方法的调用一定是一个语句。 所以，它被在main方法第三行以语句形式调用。就像任何以分号结束的语句一样。

### 通过值传递参数
调用一个方法时候需要提供参数，你必须按照参数列表指定的顺序提供。

例如，下面的方法连续n次打印一个消息：

TestVoidMethod.java 文件代码：
```java
public static void nPrintln(String message, int n) {
  for (int i = 0; i < n; i++) {
    System.out.println(message);
  }
}
```
示例
下面的例子演示按值传递的效果。

该程序创建一个方法，该方法用于交换两个变量。

TestPassByValue.java 文件代码：
```java
public class TestPassByValue {
  public static void main(String[] args) {
    int num1 = 1;
    int num2 = 2;
 
    System.out.println("交换前 num1 的值为：" +
                        num1 + " ，num2 的值为：" + num2);
 
    // 调用swap方法
    swap(num1, num2);
    System.out.println("交换后 num1 的值为：" +
                       num1 + " ，num2 的值为：" + num2);
  }
  /** 交换两个变量的方法 */
  public static void swap(int n1, int n2) {
    System.out.println("\t进入 swap 方法");
    System.out.println("\t\t交换前 n1 的值为：" + n1
                         + "，n2 的值：" + n2);
    // 交换 n1 与 n2的值
    int temp = n1;
    n1 = n2;
    n2 = temp;
 
    System.out.println("\t\t交换后 n1 的值为 " + n1
                         + "，n2 的值：" + n2);
  }
}
```
以上实例编译运行结果如下：
```
交换前 num1 的值为：1 ，num2 的值为：2
    进入 swap 方法
        交换前 n1 的值为：1，n2 的值：2
        交换后 n1 的值为 2，n2 的值：1
交换后 num1 的值为：1 ，num2 的值为：2
```
传递两个参数调用swap方法。有趣的是，方法被调用后，实参的值并没有改变。

### 方法的重载
上面使用的max方法仅仅适用于int型数据。但如果你想得到两个浮点类型数据的最大值呢？

解决方法是创建另一个有相同名字但参数不同的方法，如下面代码所示：
```java
public static double max(double num1, double num2) {
  if (num1 > num2)
    return num1;
  else
    return num2;
}
```
如果你调用max方法时传递的是int型参数，则 int型参数的max方法就会被调用；

如果传递的是double型参数，则double类型的max方法体会被调用，这叫做方法重载；

就是说一个类的两个方法拥有相同的名字，但是有不同的参数列表。

Java编译器根据方法签名判断哪个方法应该被调用。

方法重载可以让程序更清晰易读。执行密切相关任务的方法应该使用相同的名字。

重载的方法必须拥有不同的参数列表。你不能仅仅依据修饰符或者返回类型的不同来重载方法。

### 变量作用域
变量的范围是程序中该变量可以被引用的部分。

方法内定义的变量被称为局部变量。

局部变量的作用范围从声明开始，直到包含它的块结束。

局部变量必须声明才可以使用。

方法的参数范围涵盖整个方法。参数实际上是一个局部变量。

for循环的初始化部分声明的变量，其作用范围在整个循环。

但循环体内声明的变量其适用范围是从它声明到循环体结束。它包含如下所示的变量声明：

![7_day_java_02](https://www.runoob.com/wp-content/uploads/2013/12/12-130Q1221013F0.jpg)

你可以在一个方法里，不同的非嵌套块中多次声明一个具有相同的名称局部变量，但你不能在嵌套块内两次声明局部变量。

### 命令行参数的使用
有时候你希望运行一个程序时候再传递给它消息。这要靠传递命令行参数给main()函数实现。

命令行参数是在执行程序时候紧跟在程序名字后面的信息。

实例
下面的程序打印所有的命令行参数：
```java
CommandLine.java 文件代码：
public class CommandLine {
   public static void main(String[] args){ 
      for(int i=0; i<args.length; i++){
         System.out.println("args[" + i + "]: " + args[i]);
      }
   }
}
```
如下所示，运行这个程序：
```sh
$ javac CommandLine.java 
$ java CommandLine this is a command line 200 -100
args[0]: this
args[1]: is
args[2]: a
args[3]: command
args[4]: line
args[5]: 200
args[6]: -100
```
### 构造方法
当一个对象被创建时候，构造方法用来初始化该对象。构造方法和它所在类的名字相同，但构造方法没有返回值。

通常会使用构造方法给一个类的实例变量赋初值，或者执行其它必要的步骤来创建一个完整的对象。

不管你是否自定义构造方法，所有的类都有构造方法，因为 Java 自动提供了一个默认构造方法，默认构造方法的访问修饰符和类的访问修饰符相同(类为 public，构造函数也为 public；类改为 protected，构造函数也改为 protected)。

一旦你定义了自己的构造方法，默认构造方法就会失效。

实例
下面是一个使用构造方法的例子：
```java
// 一个简单的构造函数
class MyClass {
  int x;
 
  // 以下是构造函数
  MyClass() {
    x = 10;
  }
}
```
你可以像下面这样调用构造方法来初始化一个对象：

ConsDemo.java 文件代码：
```java
public class ConsDemo {
   public static void main(String[] args) {
      MyClass t1 = new MyClass();
      MyClass t2 = new MyClass();
      System.out.println(t1.x + " " + t2.x);
   }
}
```
大多时候需要一个有参数的构造方法。

实例
下面是一个使用构造方法的例子：
```java
// 一个简单的构造函数
class MyClass {
  int x;
 
  // 以下是构造函数
  MyClass(int i ) {
    x = i;
  }
}
```
你可以像下面这样调用构造方法来初始化一个对象：

ConsDemo.java 文件代码：
```java
public class ConsDemo {
  public static void main(String[] args) {
    MyClass t1 = new MyClass( 10 );
    MyClass t2 = new MyClass( 20 );
    System.out.println(t1.x + " " + t2.x);
  }
}
```
运行结果如下：
```
10 20
```

### 可变参数
JDK 1.5 开始，Java支持传递同类型的可变参数给一个方法。

方法的可变参数的声明如下所示：

typeName... parameterName
在方法声明中，在指定参数类型后加一个省略号(...) 。

一个方法中只能指定一个可变参数，它必须是方法的最后一个参数。任何普通的参数必须在它之前声明。

实例
VarargsDemo.java 文件代码：
```java
public class VarargsDemo {
    public static void main(String[] args) {
        // 调用可变参数的方法
        printMax(34, 3, 3, 2, 56.5);
        printMax(new double[]{1, 2, 3});
    }
 
    public static void printMax( double... numbers) {
        if (numbers.length == 0) {
            System.out.println("No argument passed");
            return;
        }
 
        double result = numbers[0];
 
        for (int i = 1; i <  numbers.length; i++){
            if (numbers[i] >  result) {
                result = numbers[i];
            }
        }
        System.out.println("The max value is " + result);
    }
}
```
以上实例编译运行结果如下：
```
The max value is 56.5
The max value is 3.0
```
### finalize() 方法
Java 允许定义这样的方法，它在对象被垃圾收集器析构(回收)之前调用，这个方法叫做 finalize( )，它用来清除回收对象。

例如，你可以使用 finalize() 来确保一个对象打开的文件被关闭了。

在 finalize() 方法里，你必须指定在对象销毁时候要执行的操作。

finalize() 一般格式是：
```java
protected void finalize()
{
   // 在这里终结代码
}
```
关键字 protected 是一个限定符，它确保 finalize() 方法不会被该类以外的代码调用。

当然，Java 的内存回收可以由 JVM 来自动完成。如果你手动使用，则可以使用上面的方法。

实例
FinalizationDemo.java 文件代码：
```java
public class FinalizationDemo {  
  public static void main(String[] args) {  
    Cake c1 = new Cake(1);  
    Cake c2 = new Cake(2);  
    Cake c3 = new Cake(3);  
      
    c2 = c3 = null;  
    System.gc(); //调用Java垃圾收集器
  }  
}  
 
class Cake extends Object {  
  private int id;  
  public Cake(int id) {  
    this.id = id;  
    System.out.println("Cake Object " + id + "is created");  
  }  
    
  protected void finalize() throws java.lang.Throwable {  
    super.finalize();  
    System.out.println("Cake Object " + id + "is disposed");  
  }  
}
```
运行以上代码，输出结果如下：
```sh
$ javac FinalizationDemo.java 
$ java FinalizationDemo
Cake Object 1is created
Cake Object 2is created
Cake Object 3is created
Cake Object 3is disposed
Cake Object 2is disposed
```

## Java Scanner 类
java.util.Scanner 是 Java5 的新特征，我们可以通过 Scanner 类来获取用户的输入。

下面是创建 Scanner 对象的基本语法：
```java
Scanner s = new Scanner(System.in);
```
接下来我们演示一个最简单的数据输入，并通过 Scanner 类的 next() 与 nextLine() 方法获取输入的字符串，在读取前我们一般需要 使用 hasNext 与 hasNextLine 判断是否还有输入的数据：

### 使用 next 方法：
ScannerDemo.java 文件代码：
```java
import java.util.Scanner; 
 
public class ScannerDemo {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        // 从键盘接收数据
 
        // next方式接收字符串
        System.out.println("next方式接收：");
        // 判断是否还有输入
        if (scan.hasNext()) {
            String str1 = scan.next();
            System.out.println("输入的数据为：" + str1);
        }
        scan.close();
    }
}
```
执行以上程序输出结果为：
```
$ javac ScannerDemo.java
$ java ScannerDemo
next方式接收：
runoob com
输入的数据为：runoob
```
可以看到 com 字符串并未输出，接下来我们看 nextLine。

### 使用 nextLine 方法：
ScannerDemo.java 文件代码：
```java
import java.util.Scanner;
 
public class ScannerDemo {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        // 从键盘接收数据
 
        // nextLine方式接收字符串
        System.out.println("nextLine方式接收：");
        // 判断是否还有输入
        if (scan.hasNextLine()) {
            String str2 = scan.nextLine();
            System.out.println("输入的数据为：" + str2);
        }
        scan.close();
    }
}
```
执行以上程序输出结果为：
```cmd
$ javac ScannerDemo.java
$ java ScannerDemo
nextLine方式接收：
runoob com
输入的数据为：runoob com
```
可以看到 com 字符串输出。

### next() 与 nextLine() 区别
next():

- 1、一定要读取到有效字符后才可以结束输入。
- 2、对输入有效字符之前遇到的空白，next() 方法会自动将其去掉。
- 3、只有输入有效字符后才将其后面输入的空白作为分隔符或者结束符。
- next() 不能得到带有空格的字符串。
nextLine()：

- 1、以Enter为结束符,也就是说 nextLine()方法返回的是输入回车之前的所有字符。
- 2、可以获得空白。
如果要输入 int 或 float 类型的数据，在 Scanner 类中也有支持，但是在输入之前最好先使用 hasNextXxx() 方法进行验证，再使用 nextXxx() 来读取：

ScannerDemo.java 文件代码：
```java
import java.util.Scanner;
 
public class ScannerDemo {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        // 从键盘接收数据
        int i = 0;
        float f = 0.0f;
        System.out.print("输入整数：");
        if (scan.hasNextInt()) {
            // 判断输入的是否是整数
            i = scan.nextInt();
            // 接收整数
            System.out.println("整数数据：" + i);
        } else {
            // 输入错误的信息
            System.out.println("输入的不是整数！");
        }
        System.out.print("输入小数：");
        if (scan.hasNextFloat()) {
            // 判断输入的是否是小数
            f = scan.nextFloat();
            // 接收小数
            System.out.println("小数数据：" + f);
        } else {
            // 输入错误的信息
            System.out.println("输入的不是小数！");
        }
        scan.close();
    }
}
```
执行以上程序输出结果为：
```cmd
$ javac ScannerDemo.java
$ java ScannerDemo
输入整数：12
整数数据：12
输入小数：1.2
小数数据：1.2
```
以下实例我们可以输入多个数字，并求其总和与平均数，每输入一个数字用回车确认，通过输入非数字来结束输入并输出执行结果：

ScannerDemo.java 文件代码：
```java
import java.util.Scanner;
 
class RunoobTest {
    public static void main(String[] args) {
        System.out.println("请输入数字：");
        Scanner scan = new Scanner(System.in);
 
        double sum = 0;
        int m = 0;
 
        while (scan.hasNextDouble()) {
            double x = scan.nextDouble();
            m = m + 1;
            sum = sum + x;
        }
 
        System.out.println(m + "个数的和为" + sum);
        System.out.println(m + "个数的平均值是" + (sum / m));
        scan.close();
    }
}
```
执行以上程序输出结果为（输入非数字来结束输入）：
```cmd
$ javac ScannerDemo.java
$ java ScannerDemo
请输入数字：
12
23
15
21.4
end
4个数的和为71.4
4个数的平均值是17.85
```
更多内容可以参考 API 文档：https://www.runoob.com/manual/jdk11api/java.base/java/util/Scanner.html。

## Java 流(Stream)、文件(File)和IO
Java 中的流（Stream）、文件（File）和 IO（输入输出）是处理数据读取和写入的基础设施，它们允许程序与外部数据（如文件、网络、系统输入等）进行交互。

java.io 包是 Java 标准库中的一个核心包，提供了用于系统输入和输出的类，它包含了处理数据流（字节流和字符流）、文件读写、序列化以及数据格式化的工具。

java.io 是处理文件操作、流操作以及低级别 IO 操作的基础包。

java.io 包中的流支持很多种格式，比如：基本类型、对象、本地化字符集等等。

一个流可以理解为一个数据的序列。输入流表示从一个源读取数据，输出流表示向一个目标写数据。

### 读取控制台输入
Java 的控制台输入由 System.in 完成。

为了获得一个绑定到控制台的字符流，你可以把 System.in 包装在一个 BufferedReader 对象中来创建一个字符流。

下面是创建 BufferedReader 的基本语法：
```java
BufferedReader br = new BufferedReader(new 
                      InputStreamReader(System.in));
```
BufferedReader 对象创建后，我们便可以使用 read() 方法从控制台读取一个字符，或者用 readLine() 方法读取一个字符串。

从控制台读取多字符输入
从 BufferedReader 对象读取一个字符要使用 read() 方法，它的语法如下：
```java
int read( ) throws IOException
```
每次调用 read() 方法，它从输入流读取一个字符并把该字符作为整数值返回。 当流结束的时候返回 -1。该方法抛出 IOException。

下面的程序示范了用 read() 方法从控制台不断读取字符直到用户输入 q。

BRRead.java 文件代码：
```java
//使用 BufferedReader 在控制台读取字符
 
import java.io.*;
 
public class BRRead {
    public static void main(String[] args) throws IOException {
        char c;
        // 使用 System.in 创建 BufferedReader
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        System.out.println("输入字符, 按下 'q' 键退出。");
        // 读取字符
        do {
            c = (char) br.read();
            System.out.println(c);
        } while (c != 'q');
    }
}
```
以上实例编译运行结果如下:
```
输入字符, 按下 'q' 键退出。
runoob
r
u
n
o
o
b


q
q
```
### 从控制台读取字符串
从标准输入读取一个字符串需要使用 BufferedReader 的 readLine() 方法。

它的一般格式是：
```java
String readLine( ) throws IOException
```
下面的程序读取和显示字符行直到你输入了单词"end"。

BRReadLines.java 文件代码：
```java
//使用 BufferedReader 在控制台读取字符
import java.io.*;
 
public class BRReadLines {
    public static void main(String[] args) throws IOException {
        // 使用 System.in 创建 BufferedReader
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String str;
        System.out.println("Enter lines of text.");
        System.out.println("Enter 'end' to quit.");
        do {
            str = br.readLine();
            System.out.println(str);
        } while (!str.equals("end"));
    }
}
```
以上实例编译运行结果如下:
```
Enter lines of text.
Enter 'end' to quit.
This is line one
This is line one
This is line two
This is line two
end
end
```
JDK 5 后的版本我们也可以使用 Java Scanner 类来获取控制台的输入。

### 控制台输出
在此前已经介绍过，控制台的输出由 print( ) 和 println() 完成。这些方法都由类 PrintStream 定义，System.out 是该类对象的一个引用。

PrintStream 继承了 OutputStream类，并且实现了方法 write()。这样，write() 也可以用来往控制台写操作。

PrintStream 定义 write() 的最简单格式如下所示：

void write(int byteval)
该方法将 byteval 的低八位字节写到流中。

实例
下面的例子用 write() 把字符 "A" 和紧跟着的换行符输出到屏幕：

WriteDemo.java 文件代码：
```java
import java.io.*;
 
//演示 System.out.write().
public class WriteDemo {
    public static void main(String[] args) {
        int b;
        b = 'A';
        System.out.write(b);
        System.out.write('\n');
    }
}
```
运行以上实例在输出窗口输出 "A" 字符
```
A
```
注意：write() 方法不经常使用，因为 print() 和 println() 方法用起来更为方便。

### 读写文件
如前所述，一个流被定义为一个数据序列。输入流用于从源读取数据，输出流用于向目标写数据。

下图是一个描述输入流和输出流的类层次图。

![7_day_java_03](https://www.runoob.com/wp-content/uploads/2013/12/iostream2xx.png)

### 字节流（处理二进制数据）
字节流用于处理二进制数据，例如文件、图像、视频等。

| 类名 | 类型|描述 | 
| :------ | :--------- |:--------- |
|InputStream	|抽象类 (输入流)|	所有字节输入流的超类，处理字节的输入操作。|
|OutputStream	|抽象类 (输出流)|	所有字节输出流的超类，处理字节的输出操作。|
|FileInputStream	|输入流|	从文件中读取字节数据。|
|FileOutputStream	|输出流|	将字节数据写入文件。|
|BufferedInputStream	|输入流|	为字节输入流提供缓冲功能，提高读取效率。|
|BufferedOutputStream	|输出流|	为字节输出流提供缓冲功能，提高写入效率。|
|ByteArrayInputStream	|输入流|	将内存中的字节数组作为输入源。|
|ByteArrayOutputStream	|输出流|	将数据写入到内存中的字节数组。|
|DataInputStream	|输入流|	允许从输入流中读取 Java 原生数据类型（如 int、float、boolean）。|
|DataOutputStream	|输出流|	允许向输出流中写入 Java 原生数据类型。|
|ObjectInputStream	|输入流|	从输入流中读取序列化对象。|
|ObjectOutputStream	|输出流|	将对象序列化并写入输出流中。|
|PipedInputStream	|输入流|	用于在管道中读取字节数据，通常与 PipedOutputStream 配合使用。|
|PipedOutputStream	|输出流|	用于在管道中写入字节数据，通常与 PipedInputStream 配合使用。|
|FilterInputStream	|输入流|	字节输入流的包装类，用于对其他输入流进行过滤处理。|
|FilterOutputStream	|输出流|	字节输出流的包装类，用于对其他输出流进行过滤处理。|
|SequenceInputStream	|输入流|	将多个输入流串联为一个输入流进行处理。|

### 字符流（处理文本数据）
字符流用于处理文本数据，例如读取和写入字符串或文件。
| 类名 | 类型|描述 | 
| :------ | :--------- |:--------- |	
|Reader	|抽象类 (输入流)|	所有字符输入流的超类，处理字符的输入操作。|
|Writer	|抽象类 (输出流)|	所有字符输出流的超类，处理字符的输出操作。|
|FileReader	|输入流|	从文件中读取字符数据。|
|FileWriter	|输出流|	将字符数据写入文件。|
|BufferedReader	|输入流|	为字符输入流提供缓冲功能，支持按行读取，提高读取效率。|
|BufferedWriter	|输出流|	为字符输出流提供缓冲功能，支持按行写入，提高写入效率。|
|CharArrayReader	|输入流|	将字符数组作为输入源。|
|CharArrayWriter	|输出流|	将数据写入到字符数组。|
|StringReader	|输入流|	将字符串作为输入源。|
|StringWriter	|输出流|	将数据写入到字符串缓冲区。|
|PrintWriter	|输出流|	便捷的字符输出流，支持自动刷新和格式化输出。|
|PipedReader	|输入流|	用于在管道中读取字符数据，通常与 PipedWriter 配合使用。|
|PipedWriter	|输出流|	用于在管道中写入字符数据，通常与 PipedReader 配合使用。|
|LineNumberReader	|输入流|	带行号的缓冲字符输入流，允许跟踪读取的行号。|
|PushbackReader	|输入流|	允许在读取字符后将字符推回流中，以便再次读取。|

### 辅助类（其他重要类）
辅助类提供对文件、目录以及随机文件访问的支持。
| 类名 | 类型|描述 | 
| :------ | :--------- |:--------- |	
|File|	文件和目录操作|	用于表示文件或目录，并提供文件操作，如创建、删除、重命名等。|
|RandomAccessFile|	随机访问文件|	支持文件的随机访问，可以从文件的任意位置读写数据。|
|Console|	控制台输入输出|	提供对系统控制台的输入和输出支持。|

下面将要讨论的两个重要的流是 **FileInputStream** 和 **FileOutputStream**。

### FileInputStream
该流用于从文件读取数据，它的对象可以用关键字 new 来创建。

有多种构造方法可用来创建对象。

可以使用字符串类型的文件名来创建一个输入流对象来读取文件：
```java
InputStream f = new FileInputStream("C:/java/hello");
```
也可以使用一个文件对象来创建一个输入流对象来读取文件。我们首先得使用 File() 方法来创建一个文件对象：
```java
File f = new File("C:/java/hello");
InputStream in = new FileInputStream(f);
```
创建了 InputStream 对象，就可以使用下面的方法来读取流或者进行其他的流操作。
| 方法 | 描述|示例代码 | 
| :------ | :--------- |:--------- |	
|int read()|	读取一个字节的数据，返回值为 0 到 255 之间的整数。如果到达流的末尾，返回 -1。|	int data = inputStream.read();|
|int read(byte[] b)	|从输入流中读取字节，并将其存储在字节数组 b 中，返回实际读取的字节数。如果到达流的末尾，返回 -1。|	byte[] buffer = new byte[1024]; int bytesRead = inputStream.read(buffer);|
|int read(byte[] b, int off, int len)|	从输入流中读取最多 len 个字节，并将它们存储在字节数组 b 的 off 偏移位置，返回实际读取的字节数。如果到达流的末尾，返回 -1。|	byte[] buffer = new byte[1024]; int bytesRead = inputStream.read(buffer, 0, buffer.length);|
|long skip(long n)|	跳过并丢弃输入流中的 n 个字节，返回实际跳过的字节数。|	long skippedBytes = inputStream.skip(100);|
|int available()|	返回可以读取的字节数（不阻塞）。|	int availableBytes = inputStream.available();|
|void close()|	关闭输入流并释放与该流相关的所有资源。|	inputStream.close();|
|void mark(int readlimit)|	在流中的当前位置设置标记，readlimit 是可以读取的字节数上限。|	inputStream.mark(1024);|
|void reset()|	将流重新定位到上次标记的位置，如果没有标记或标记失效，抛出 IOException。|	inputStream.reset();|
|boolean markSupported()|	检查当前输入流是否支持 mark() 和 reset() 操作。|	boolean isMarkSupported = inputStream.markSupported();|

除了 InputStream 外，还有一些其他的输入流，更多的细节参考下面链接：

- [ByteArrayInputStream](https://www.runoob.com/java/java-bytearrayinputstream.html)
- [DataInputStream](https://www.runoob.com/java/java-datainputstream.html)
### FileOutputStream
该类用来创建一个文件并向文件中写数据。

如果该流在打开文件进行输出前，目标文件不存在，那么该流会创建该文件。

有两个构造方法可以用来创建 FileOutputStream 对象。

使用字符串类型的文件名来创建一个输出流对象：
```java
OutputStream f = new FileOutputStream("C:/java/hello")
```
也可以使用一个文件对象来创建一个输出流来写文件。我们首先得使用File()方法来创建一个文件对象：
```java
File f = new File("C:/java/hello");
OutputStream fOut = new FileOutputStream(f);
```
创建 OutputStream 对象完成后，就可以使用下面的方法来写入流或者进行其他的流操作。
| 方法 | 描述|示例代码 | 
| :------ | :--------- |:--------- |	
|void write(int b)|	将指定的字节写入输出流，b 的低 8 位将被写入流中。|	outputStream.write(255);|
|void write(byte[] b)|	将字节数组 b 中的所有字节写入输出流。|	byte[] data = "Hello".getBytes(); outputStream.write(data);|
|void write(byte[] b, int off, int len)|	将字节数组 b 中从偏移量 off 开始的 len 个字节写入输出流。|	byte[] data = "Hello".getBytes(); outputStream.write(data, 0, data.length);|
|void flush()|	刷新输出流并强制写出所有缓冲的数据，确保数据被立即写入目标输出。|	outputStream.flush();|
|void close()|	关闭输出流并释放与该流相关的所有资源。关闭后不能再写入。|	outputStream.close();|

除了 OutputStream 外，还有一些其他的输出流，更多的细节参考下面链接：

- [ByteArrayOutputStream](https://www.runoob.com/java/java-bytearrayoutputstream.html)

- [DataOutputStream](https://www.runoob.com/java/java-dataoutputstream.html)

**实例**
下面是一个演示 InputStream 和 OutputStream 用法的例子：

fileStreamTest.java 文件代码：
```java
import java.io.*;
 
public class fileStreamTest {
    public static void main(String[] args) {
        try {
            byte bWrite[] = { 11, 21, 3, 40, 5 };
            OutputStream os = new FileOutputStream("test.txt");
            for (int x = 0; x < bWrite.length; x++) {
                os.write(bWrite[x]); // writes the bytes
            }
            os.close();
 
            InputStream is = new FileInputStream("test.txt");
            int size = is.available();
 
            for (int i = 0; i < size; i++) {
                System.out.print((char) is.read() + "  ");
            }
            is.close();
        } catch (IOException e) {
            System.out.print("Exception");
        }
    }
}
```
上面的程序首先创建文件test.txt，并把给定的数字以二进制形式写进该文件，同时输出到控制台上。

以上代码由于是二进制写入，可能存在乱码，你可以使用以下代码实例来解决乱码问题：

fileStreamTest2.java 文件代码：
```java
//文件名 :fileStreamTest2.java
import java.io.*;
 
public class fileStreamTest2 {
    public static void main(String[] args) throws IOException {
 
        File f = new File("a.txt");
        FileOutputStream fop = new FileOutputStream(f);
        // 构建FileOutputStream对象,文件不存在会自动新建
 
        OutputStreamWriter writer = new OutputStreamWriter(fop, "UTF-8");
        // 构建OutputStreamWriter对象,参数可以指定编码,默认为操作系统默认编码,windows上是gbk
 
        writer.append("中文输入");
        // 写入到缓冲区
 
        writer.append("\r\n");
        // 换行
 
        writer.append("English");
        // 刷新缓存冲,写入到文件,如果下面已经没有写入的内容了,直接close也会写入
 
        writer.close();
        // 关闭写入流,同时会把缓冲区内容写入文件,所以上面的注释掉
 
        fop.close();
        // 关闭输出流,释放系统资源
 
        FileInputStream fip = new FileInputStream(f);
        // 构建FileInputStream对象
 
        InputStreamReader reader = new InputStreamReader(fip, "UTF-8");
        // 构建InputStreamReader对象,编码与写入相同
 
        StringBuffer sb = new StringBuffer();
        while (reader.ready()) {
            sb.append((char) reader.read());
            // 转成char加到StringBuffer对象中
        }
        System.out.println(sb.toString());
        reader.close();
        // 关闭读取流
 
        fip.close();
        // 关闭输入流,释放系统资源
 
    }
}
```
### 文件和I/O
还有一些关于文件和I/O的类，我们也需要知道：

[File Class(类)](https://www.runoob.com/java/java-file.html)
[FileReader Class(类)](https://www.runoob.com/java/java-filereader.html)
[FileWriter Class(类)](https://www.runoob.com/java/java-filewriter.html)
### Java中的目录
**创建目录：**
File类中有两个方法可以用来创建文件夹：

- mkdir( )方法创建一个文件夹，成功则返回true，失败则返回false。失败表明File对象指定的路径已经存在，或者由于整个路径还不存在，该文件夹不能被创建。
- mkdirs()方法创建一个文件夹和它的所有父文件夹。

下面的例子创建 "/tmp/user/java/bin"文件夹：

CreateDir.java 文件代码：
```java
import java.io.File;
 
public class CreateDir {
    public static void main(String[] args) {
        String dirname = "/tmp/user/java/bin";
        File d = new File(dirname);
        // 现在创建目录
        d.mkdirs();
    }
}
```
编译并执行上面代码来创建目录 "/tmp/user/java/bin"。

**注意：** Java 在 UNIX 和 Windows 自动按约定分辨文件路径分隔符。如果你在 Windows 版本的 Java 中使用分隔符 (/) ，路径依然能够被正确解析。

### 读取目录
一个目录其实就是一个 File 对象，它包含其他文件和文件夹。

如果创建一个 File 对象并且它是一个目录，那么调用 isDirectory() 方法会返回 true。

可以通过调用该对象上的 list() 方法，来提取它包含的文件和文件夹的列表。

下面展示的例子说明如何使用 list() 方法来检查一个文件夹中包含的内容：

DirList.java 文件代码：
```java
import java.io.File;
 
public class DirList {
    public static void main(String args[]) {
        String dirname = "/tmp";
        File f1 = new File(dirname);
        if (f1.isDirectory()) {
            System.out.println("目录 " + dirname);
            String s[] = f1.list();
            for (int i = 0; i < s.length; i++) {
                File f = new File(dirname + "/" + s[i]);
                if (f.isDirectory()) {
                    System.out.println(s[i] + " 是一个目录");
                } else {
                    System.out.println(s[i] + " 是一个文件");
                }
            }
        } else {
            System.out.println(dirname + " 不是一个目录");
        }
    }
}
```
以上实例编译运行结果如下：
```
目录 /tmp
bin 是一个目录
lib 是一个目录
demo 是一个目录
test.txt 是一个文件
README 是一个文件
index.html 是一个文件
include 是一个目录
```
### 删除目录或文件
删除文件可以使用 **java.io.File.delete()** 方法。

以下代码会删除目录 **/tmp/java/**，需要注意的是当删除某一目录时，必须保证该目录下没有其他文件才能正确删除，否则将删除失败。

测试目录结构：
```
/tmp/java/
|-- 1.log
|-- test
```
DeleteFileDemo.java 文件代码：
```java
import java.io.File;
 
public class DeleteFileDemo {
    public static void main(String[] args) {
        // 这里修改为自己的测试目录
        File folder = new File("/tmp/java/");
        deleteFolder(folder);
    }
 
    // 删除文件及目录
    public static void deleteFolder(File folder) {
        File[] files = folder.listFiles();
        if (files != null) {
            for (File f : files) {
                if (f.isDirectory()) {
                    deleteFolder(f);
                } else {
                    f.delete();
                }
            }
        }
        folder.delete();
    }
}
```
## Java 异常处理
[Java 异常处理](https://www.runoob.com/java/java-exceptions.html)
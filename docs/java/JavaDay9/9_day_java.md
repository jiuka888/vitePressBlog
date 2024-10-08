原文链接：https://github.com/DuHouAn/Java

# 数据类型
## 包装类型

Java 八个基本类型，基本类型都有对应的包装类型：

| 基本类型 | 大小（bit） |  最小值   |     最大值     |      默认值       |  包装类   |
| :------: | :---------: | :-------: | :------------: | :---------------: | :-------: |
| boolean  |      1      |     -     |       -        |       false       |  Boolean  |
|   char   |     16      | Unicode 0 | Unicode 2^16-1 | \u0000(Unicode 0) | Character |
|   byte   |      8      |   -128    |      127       |      (byte)0      |   Byte    |
|  short   |     16      |   -2^15   |     2^15-1     |     (short)0      |   Short   |
|   int    |     32      |   -2^31   |     2^31-1     |         0         |    Int    |
|   long   |     64      |   -2^63   |     2^63-1     |        0L         |   Long    |
|  float   |     32      |     -     |       -        |       0.0F        |   Float   |
|  double  |     64      |     -     |       -        |       0.0D        |  Double   |

 基本类型与其对应的包装类型之间的赋值使用**自动装箱**与**自动拆箱**完成。

```java
//自动装箱和自动拆箱
//1、自动装
Integer x=4; //自动装箱 （基本类型转化为包装类型）
//实际上就是 Integer x=Integer.valueOf(4);
//2、自动拆箱
x=x+5;
x=Integer.valueOf(x.intValue()+5);//x.intValue()就是拆箱-->先拆箱，再装箱。
```

## 缓存池

Java 基本类型的包装类的大部分都实现了缓存池技术，对应的缓冲池如下：

- Boolean 直接返回 true / false
- Byte/ Short / Integer / Long  创建了数值范围在 [-128，127] 的相应类型的缓存数据
- Character 创建了数值在 [0,127] 的缓存数据

如果超出对应范围仍然会去创建新的对象。

new Integer(123) 与 Integer.valueOf(123) 的区别在于：

- new Integer(123) 每次都会新建一个对象；
- Integer.valueOf(123) 会使用缓存池中的对象，多次调用会取得同一个对象的引用。

```java
Integer x = new Integer(123);
Integer y = new Integer(123);
System.out.println(x == y);    // false
Integer z = Integer.valueOf(123);
Integer k = Integer.valueOf(123);
System.out.println(z == k);   // true
```

valueOf() 方法的实现比较简单，就是先**判断值是否在缓存池**中，如果在的话就直接返回缓存池的内容。

```java
public static Integer valueOf(int i) {
    if (i >= IntegerCache.low && i <= IntegerCache.high)
        return IntegerCache.cache[i + (-IntegerCache.low)];
    return new Integer(i);
}
```

在 Java 8 中，**Integer 缓存池的大小默认为 -128\~127**。

```java
static final int low = -128;
static final int high;
static final Integer cache[];

static {
    // high value may be configured by property
    int h = 127;
    String integerCacheHighPropValue =
        sun.misc.VM.getSavedProperty("java.lang.Integer.IntegerCache.high");
    if (integerCacheHighPropValue != null) {
        try {
            int i = parseInt(integerCacheHighPropValue);
            i = Math.max(i, 127);
            // Maximum array size is Integer.MAX_VALUE
            h = Math.min(i, Integer.MAX_VALUE - (-low) -1);
        } catch( NumberFormatException nfe) {
            // If the property cannot be parsed into an int, ignore it.
        }
    }
    high = h;

    cache = new Integer[(high - low) + 1];
    int j = low;
    for(int k = 0; k < cache.length; k++)
        cache[k] = new Integer(j++);

    // range [-128, 127] must be interned (JLS7 5.1.7)
    assert IntegerCache.high >= 127;
}
```

编译器会在自动装箱过程调用 valueOf() 方法，因此多个 Integer 实例使用自动装箱来创建并且值相同，那么就会引用相同的对象。

```java
Integer m = 123;
Integer n = 123;
System.out.println(m == n); // true
```

\+ 不适用于 Integer 对象，首先 i，j 进行自动拆箱，然后数值相加，得到数值 80，进行自动装箱后，和 m 引用相同的对象。Integer 对象无法与数值直接进行比较，自动拆箱后转为数值 80，显然 80 == 80，输出 true。

```java
Integer i = 40;
Integer j = 40;
Integer m = 80;
System.out.println(m == i+j);  // true
System.out.println(80 == i+j);  // true
```

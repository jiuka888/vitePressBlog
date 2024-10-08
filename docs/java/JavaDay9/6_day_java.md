---
outline: deep
---

## Java 日期时间
java.util 包提供了 Date 类来封装当前的日期和时间。 Date 类提供两个构造函数来实例化 Date 对象。

第一个构造函数使用当前日期和时间来初始化对象。
```java
Date( )
```
第二个构造函数接收一个参数，该参数是从 1970 年 1 月 1 日起的毫秒数。
```java
Date(long millisec)
```
Date 对象创建以后，可以调用下面的方法。
| 序号 | 方法 | 描述|
| :------: | :---------: | :---------: | 
|1|	boolean after(Date date)|若当调用此方法的Date对象在指定日期之后返回true,否则返回false。|
|2|	boolean before(Date date)|若当调用此方法的Date对象在指定日期之前返回true,否则返回false。|
|3|	Object clone( )|返回此对象的副本。|
|4|int compareTo(Date date)|比较当调用此方法的Date对象和指定日期。两者相等时候返回0。调用对象在指定日期之前则返回负数。调用对象在指定日期之后则返回正数。|
|5|	int compareTo(Object obj)|若obj是Date类型则操作等同于compareTo(Date) 。否则它抛出ClassCastException。|
|6|	boolean equals(Object date)|当调用此方法的Date对象和指定日期相等时候返回true,否则返回false。|
|7|	long getTime( )|返回自 1970 年 1 月 1 日 00:00:00 GMT 以来此 Date 对象表示的毫秒数。|
|8|	int hashCode( )| 返回此对象的哈希码值。|
|9|	void setTime(long time)|用自1970年1月1日00:00:00 GMT以后time毫秒数设置时间和日期。|
|10|	String toString( )|把此 Date 对象转换为以下形式的 String： dow mon dd hh:mm:ss zzz yyyy 其中： dow 是一周中的某一天 (Sun, Mon, Tue, Wed, Thu, Fri, Sat)。|

### 获取当前日期时间
Java中获取当前日期和时间很简单，使用 Date 对象的 toString() 方法来打印当前日期和时间，如下所示：

实例
```java
import java.util.Date;
  
public class DateDemo {
   public static void main(String[] args) {
       // 初始化 Date 对象
       Date date = new Date();
        
       // 使用 toString() 函数显示日期时间
       System.out.println(date.toString());
   }
}
```
[运行实例 »](https://www.runoob.com/try/runcode.php?filename=date_demo&type=java)
以上实例编译运行结果如下:
```
Mon May 04 09:51:52 CDT 2013
```
### 日期比较
Java使用以下三种方法来比较两个日期：

- 使用 getTime() 方法获取两个日期（自1970年1月1日经历的毫秒数值），然后比较这两个值。
- 使用方法 before()，after() 和 equals()。例如，一个月的12号比18号早，则 new Date(99, 2, 12).before(new Date (99, 2, 18)) 返回true。
- 使用 compareTo() 方法，它是由 Comparable 接口定义的，Date 类实现了这个接口。
### 使用 SimpleDateFormat 格式化日期
SimpleDateFormat 是一个以语言环境敏感的方式来格式化和分析日期的类。SimpleDateFormat 允许你选择任何用户自定义日期时间格式来运行。例如：

实例
```java
import  java.util.*;
import java.text.*;
 
public class DateDemo {
   public static void main(String[] args) {
 
      Date dNow = new Date( );
      SimpleDateFormat ft = new SimpleDateFormat ("yyyy-MM-dd hh:mm:ss");
 
      System.out.println("当前时间为: " + ft.format(dNow));
   }
}
```
[运行实例 »](https://www.runoob.com/try/runcode.php?filename=date_demo1&type=java)
```
SimpleDateFormat ft = new SimpleDateFormat ("yyyy-MM-dd hh:mm:ss");
```
这一行代码确立了转换的格式，其中 yyyy 是完整的公元年，MM 是月份，dd 是日期，HH:mm:ss 是时、分、秒。

注意:有的格式大写，有的格式小写，例如 MM 是月份，mm 是分；HH 是 24 小时制，而 hh 是 12 小时制。

以上实例编译运行结果如下:
```
当前时间为: 2018-09-06 10:16:34
```
### 日期和时间的格式化编码
时间模式字符串用来指定时间格式。在此模式中，所有的 ASCII 字母被保留为模式字母，定义如下：
| 字母 | 描述 | 示例|
| :------: | :---------: | :---------: | 
|G|	纪元标记|	AD|
|y|	四位年份|	2001|
|M|	月份	|July or 07|
|d|	一个月的日期|	10|
|h|	 A.M./P.M. (1~12)格式小时|	12|
|H	|一天中的小时 (0~23)	|22|
|m|	分钟数|	30|
|s|	秒数|	55|
|S|	毫秒数|	234|
|E|	星期几|	Tuesday|
|D| 一年中的日子|	360|
|F|	一个月中第几周的周几|	2 (second Wed. in July)|
|w|	一年中第几周|	40|
|W|	一个月中第几周|	1|
|a|	A.M./P.M. 标记|	PM|
|k|	一天中的小时(1~24)|	24|
|K|	 A.M./P.M. (0~11)格式小时|	10|
|z|	时区|	Eastern Standard Time|
|'|	文字定界符|	Delimiter|
|"|	单引号|	`|

### 使用printf格式化日期
printf 方法可以很轻松地格式化时间和日期。使用两个字母格式，它以 %t 开头并且以下面表格中的一个字母结尾。

- %tY：输出四位数的年份，例如：2023
- %ty：输出两位数的年份，例如：23
- %tm：输出两位数的月份，例如：02
- %tB：输出月份的全名，例如：February
- %tb：输出月份的缩写，例如：Feb
- %tA：输出星期的全名，例如：Wednesday
- %ta：输出星期的缩写，例如：Wed
- %td：输出两位数的日期，例如：24
- %te：输出一位或两位数的日期，例如：24 或 02
- %tH：输出24小时制的小时数，例如：23
- %tI：输出12小时制的小时数，例如：11
- %tM：输出分钟数，例如：45
- %tS：输出秒数，例如：30
- %tp：输出上午还是下午，例如：AM 或 PM
- %tZ：输出时区，例如：GMT+08:00


|转换符|说明|示例|
| :------: | :---------: | :---------: | 
|%tc|包括全部日期和时间信息|星期六 十月 27 14:21:20 CST 2007|
|%tF|"年-月-日"格式|2007-10-27|
|%tD|"月/日/年"格式|10/27/07|
|%tr|"HH:MM:SS PM"格式（12时制）|02:25:51 下午|
|%tT|"HH:MM:SS"格式（24时制）|14:28:16|
|%tR|"HH:MM"格式（24时制）|14:28|

更多 printf 解析可以参见：[Java 格式化输出 printf 例子](https://www.runoob.com/w3cnote/java-printf-formate-demo.html)

实例
实例
```java
import java.util.Date;
public class DateFormatExample {
   public static void main(String[] args) {
      Date date = new Date();
      System.out.printf("%tY-%tm-%td %tH:%tM:%tS %tZ", date, date, date, date, date, date, date);
   }
}
```
执行输出结果为：
```
2023-02-24 13:34:45 GMT+08:00
```
实例
```java
import java.util.Date;
 
public class DateDemo {
 
  public static void main(String[] args) {
     // 初始化 Date 对象
     Date date = new Date();
 
     //c的使用  
    System.out.printf("全部日期和时间信息：%tc%n",date);          
    //f的使用  
    System.out.printf("年-月-日格式：%tF%n",date);  
    //d的使用  
    System.out.printf("月/日/年格式：%tD%n",date);  
    //r的使用  
    System.out.printf("HH:MM:SS PM格式（12时制）：%tr%n",date);  
    //t的使用  
    System.out.printf("HH:MM:SS格式（24时制）：%tT%n",date);  
    //R的使用  
    System.out.printf("HH:MM格式（24时制）：%tR",date);  
  }
}
```
以上实例编译运行结果如下:
```
全部日期和时间信息：星期一 九月 10 10:43:36 CST 2012  
年-月-日格式：2012-09-10  
月/日/年格式：09/10/12  
HH:MM:SS PM格式（12时制）：10:43:36 上午  
HH:MM:SS格式（24时制）：10:43:36  
HH:MM格式（24时制）：10:43  
```
如果你需要重复提供日期，那么利用这种方式来格式化它的每一部分就有点复杂了。因此，可以利用一个格式化字符串指出要被格式化的参数的索引。

索引必须紧跟在 % 后面，而且必须以 $ 结束。例如：

实例
```java
import java.util.Date;
  
public class DateDemo {
 
   public static void main(String[] args) {
       // 初始化 Date 对象
       Date date = new Date();
        
       // 使用toString()显示日期和时间
       System.out.printf("%1$s %2$tB %2$td, %2$tY", 
                         "Due date:", date);
   }
}
```
运行实例 »
以上实例编译运行结果如下:
```
Due date: February 09, 2014
```
或者，你可以使用 < 标志。它表明先前被格式化的参数要被再次使用。例如：

实例
```java
import java.util.Date;
  
public class DateDemo {
 
   public static void main(String[] args) {
       // 初始化 Date 对象
       Date date = new Date();
        
       // 显示格式化时间
       System.out.printf("%s %tB %<te, %<tY", 
                         "Due date:", date);
   }
}
```
运行实例 »
以上实例编译运行结果如下:
```
Due date: February 09, 2014
```
定义日期格式的转换符可以使日期通过指定的转换符生成新字符串。这些日期转换符如下所示：

实例
```java
import java.util.*;
  
public class DateDemo {
   public static void main(String[] args) {
       Date date=new Date();                                      
        //b的使用，月份简称  
        String str=String.format(Locale.US,"英文月份简称：%tb",date);       
        System.out.println(str);                                                                              
        System.out.printf("本地月份简称：%tb%n",date);  
        //B的使用，月份全称  
        str=String.format(Locale.US,"英文月份全称：%tB",date);  
        System.out.println(str);  
        System.out.printf("本地月份全称：%tB%n",date);  
        //a的使用，星期简称  
        str=String.format(Locale.US,"英文星期的简称：%ta",date);  
        System.out.println(str);  
        //A的使用，星期全称  
        System.out.printf("本地星期的简称：%tA%n",date);  
        //C的使用，年前两位  
        System.out.printf("年的前两位数字（不足两位前面补0）：%tC%n",date);  
        //y的使用，年后两位  
        System.out.printf("年的后两位数字（不足两位前面补0）：%ty%n",date);  
        //j的使用，一年的天数  
        System.out.printf("一年中的天数（即年的第几天）：%tj%n",date);  
        //m的使用，月份  
        System.out.printf("两位数字的月份（不足两位前面补0）：%tm%n",date);  
        //d的使用，日（二位，不够补零）  
        System.out.printf("两位数字的日（不足两位前面补0）：%td%n",date);  
        //e的使用，日（一位不补零）  
        System.out.printf("月份的日（前面不补0）：%te",date);  
   }
}
```
输出结果为：
```
英文月份简称：May
本地月份简称：五月
英文月份全称：May
本地月份全称：五月
英文星期的简称：Thu
本地星期的简称：星期四
年的前两位数字（不足两位前面补0）：20
年的后两位数字（不足两位前面补0）：17
一年中的天数（即年的第几天）：124
两位数字的月份（不足两位前面补0）：05
两位数字的日（不足两位前面补0）：04
月份的日（前面不补0）：4
```
解析字符串为时间
SimpleDateFormat 类有一些附加的方法，特别是parse()，它试图按照给定的SimpleDateFormat 对象的格式化存储来解析字符串。例如：

实例
```java
import java.util.*;
import java.text.*;
  
public class DateDemo {
 
   public static void main(String[] args) {
      SimpleDateFormat ft = new SimpleDateFormat ("yyyy-MM-dd"); 
 
      String input = args.length == 0 ? "1818-11-11" : args[0]; 
 
      System.out.print(input + " Parses as "); 
 
      Date t; 
 
      try { 
          t = ft.parse(input); 
          System.out.println(t); 
      } catch (ParseException e) { 
          System.out.println("Unparseable using " + ft); 
      }
   }
}
```
运行实例 »
以上实例编译运行结果如下:
```
$ java DateDemo
1818-11-11 Parses as Wed Nov 11 00:00:00 GMT 1818
$ java DateDemo 2007-12-01
2007-12-01 Parses as Sat Dec 01 00:00:00 GMT 2007
```
### Java 休眠(sleep)

sleep()使当前线程进入停滞状态（阻塞当前线程），让出CPU的使用、目的是不让当前线程独自霸占该进程所获的CPU资源，以留一定时间给其他线程执行的机会。

你可以让程序休眠一毫秒的时间或者到您的计算机的寿命长的任意段时间。例如，下面的程序会休眠3秒：

实例
```java
import java.util.*;
  
public class SleepDemo {
   public static void main(String[] args) {
      try { 
         System.out.println(new Date( ) + "\n"); 
         Thread.sleep(1000*3);   // 休眠3秒
         System.out.println(new Date( ) + "\n"); 
      } catch (Exception e) { 
          System.out.println("Got an exception!"); 
      }
   }
}
```
运行实例 »
以上实例编译运行结果如下:
```
Thu Sep 17 10:20:30 CST 2015

Thu Sep 17 10:20:33 CST 2015
```
### 测量时间

下面的一个例子表明如何测量时间间隔（以毫秒为单位）：

实例
```java
import java.util.*;
  
public class DiffDemo {
 
   public static void main(String[] args) {
      try {
         long start = System.currentTimeMillis( );
         System.out.println(new Date( ) + "\n");
         Thread.sleep(5*60*10);
         System.out.println(new Date( ) + "\n");
         long end = System.currentTimeMillis( );
         long diff = end - start;
         System.out.println("Difference is : " + diff);
      } catch (Exception e) {
         System.out.println("Got an exception!");
      }
   }
}
```
运行实例 »
以上实例编译运行结果如下:
```
Fri Jan 08 09:48:47 CST 2016

Fri Jan 08 09:48:50 CST 2016

Difference is : 3019
```
### Calendar类
我们现在已经能够格式化并创建一个日期对象了，但是我们如何才能设置和获取日期数据的特定部分呢，比如说小时，日，或者分钟? 我们又如何在日期的这些部分加上或者减去值呢? 答案是使用Calendar 类。

Calendar类的功能要比Date类强大很多，而且在实现方式上也比Date类要复杂一些。

Calendar类是一个抽象类，在实际使用时实现特定的子类的对象，创建对象的过程对程序员来说是透明的，只需要使用getInstance方法创建即可。

#### 创建一个代表系统当前日期的Calendar对象
```java
Calendar c = Calendar.getInstance();//默认是当前日期
```
#### 创建一个指定日期的Calendar对象
使用Calendar类代表特定的时间，需要首先创建一个Calendar的对象，然后再设定该对象中的年月日参数来完成。
```java
//创建一个代表2009年6月12日的Calendar对象
Calendar c1 = Calendar.getInstance();
c1.set(2009, 6 - 1, 12);
Calendar类对象字段类型
```
Calendar类中用以下这些常量表示不同的意义，jdk内的很多类其实都是采用的这种思想
| 常量 | 描述 |
| :------: | :---------: | 
|Calendar.YEAR	|年份|
|Calendar.MONTH	|月份|
|Calendar.DATE	|日期|
|Calendar.DAY_OF_MONTH	|日期，和上面的字段意义完全相同|
|Calendar.HOUR	|12小时制的小时|
|Calendar.HOUR_OF_DAY	|24小时制的小时|
|Calendar.MINUTE	|分钟|
|Calendar.SECOND	|秒|
|Calendar.DAY_OF_WEEK|	星期几|

#### Calendar类对象信息的设置
Set设置

如：
```java
Calendar c1 = Calendar.getInstance();
```
调用：
```java
public final void set(int year,int month,int date)
c1.set(2009, 6, 12);//把Calendar对象c1的年月日分别设这为：2009、6、12
```
利用字段类型设置

如果只设定某个字段，例如日期的值，则可以使用如下set方法：
```java
public void set(int field,int value)
```
把 c1对象代表的日期设置为10号，其它所有的数值会被重新计算
```java
c1.set(Calendar.DATE,10);
```
把c1对象代表的年份设置为2008年，其他的所有数值会被重新计算
```java
c1.set(Calendar.YEAR,2008);
```
其他字段属性set的意义以此类推

Add设置
```java
Calendar c1 = Calendar.getInstance();
```
把c1对象的日期加上10，也就是c1也就表示为10天后的日期，其它所有的数值会被重新计算
```java
c1.add(Calendar.DATE, 10);
```
把c1对象的日期减去10，也就是c1也就表示为10天前的日期，其它所有的数值会被重新计算
```java
c1.add(Calendar.DATE, -10);
```
其他字段属性的add的意义以此类推

Calendar类对象信息的获得
```java
Calendar c1 = Calendar.getInstance();
// 获得年份
int year = c1.get(Calendar.YEAR);
// 获得月份
int month = c1.get(Calendar.MONTH) + 1;
// 获得日期
int date = c1.get(Calendar.DATE);
// 获得小时
int hour = c1.get(Calendar.HOUR_OF_DAY);
// 获得分钟
int minute = c1.get(Calendar.MINUTE);
// 获得秒
int second = c1.get(Calendar.SECOND);
// 获得星期几（注意（这个与Date类是不同的）：1代表星期日、2代表星期1、3代表星期二，以此类推）
int day = c1.get(Calendar.DAY_OF_WEEK);
```
### GregorianCalendar类
Calendar类实现了公历日历，GregorianCalendar是Calendar类的一个具体实现。

Calendar 的getInstance（）方法返回一个默认用当前的语言环境和时区初始化的GregorianCalendar对象。GregorianCalendar定义了两个字段：AD和BC。这是代表公历定义的两个时代。

下面列出GregorianCalendar对象的几个构造方法：

| 序号 | 构造函数 | 说明|
| :------: | :---------: | :---------: | 
|1|	GregorianCalendar()|在具有默认语言环境的默认时区内使用当前时间构造一个默认的 GregorianCalendar。|
|2|	GregorianCalendar(int year, int month, int date)|在具有默认语言环境的默认时区内构造一个带有给定日期设置的 GregorianCalendar|
|3|	GregorianCalendar(int year, int month, int date, int hour, int minute)|为具有默认语言环境的默认时区构造一个具有给定日期和时间设置的 GregorianCalendar。|
|4|	GregorianCalendar(int year, int month, int date, int hour, int minute, int second)|为具有默认语言环境的默认时区构造一个具有给定日期和时间设置的 GregorianCalendar。|
|5|	GregorianCalendar(Locale aLocale)|在具有给定语言环境的默认时区内构造一个基于当前时间的 GregorianCalendar。|
|6|	GregorianCalendar(TimeZone zone)|在具有默认语言环境的给定时区内构造一个基于当前时间的 GregorianCalendar。|
|7|	GregorianCalendar(TimeZone zone, Locale aLocale)|在具有给定语言环境的给定时区内构造一个基于当前时间的 GregorianCalendar。|

这里是GregorianCalendar 类提供的一些有用的方法列表：

| 序号 | 方法 | 描述|
| :------: | :---------: | :---------: | 
|1|	void add(int field, int amount)|根据日历规则，将指定的（有符号的）时间量添加到给定的日历字段中。|
|2|	protected void computeFields()|转换UTC毫秒值为时间域值|
|3|	protected void computeTime()|覆盖Calendar ，转换时间域值为UTC毫秒值|
|4|	boolean equals(Object obj)|比较此 GregorianCalendar 与指定的 Object。|
|5|	int get(int field)|获取指定字段的时间值|
|6|	int getActualMaximum(int field)|返回当前日期，给定字段的最大值|
|7|	int getActualMinimum(int field)|返回当前日期，给定字段的最小值|
|8|	int getGreatestMinimum(int field)|返回此 GregorianCalendar 实例给定日历字段的最高的最小值。|
|9|	Date getGregorianChange()|获得格里高利历的更改日期。|
|10|	int getLeastMaximum(int field)|返回此 GregorianCalendar 实例给定日历字段的最低的最大值|
|11|	int getMaximum(int field)|返回此 GregorianCalendar 实例的给定日历字段的最大值。|
|12|	Date getTime()|获取日历当前时间。|
|13|	long getTimeInMillis()|获取用长整型表示的日历的当前时间|
|14|	TimeZone getTimeZone()|获取时区。|
|15|	int getMinimum(int field)|返回给定字段的最小值。|
|16|	int hashCode()|重写hashCode.|
|17|	boolean isLeapYear(int year)|确定给定的年份是否为闰年。|
|18|	void roll(int field, boolean up)|在给定的时间字段上添加或减去（上/下）单个时间单元，不更改更大的字段。|
|19|	void set(int field, int value)|用给定的值设置时间字段。|
|20|	void set(int year, int month, int date)|设置年、月、日的值。|
|21|	void set(int year, int month, int date, int hour, int minute)|设置年、月、日、小时、分钟的值。|
|22|	void set(int year, int month, int date, int hour, int minute, int second)|设置年、月、日、小时、分钟、秒的值。|
|23|	void setGregorianChange(Date date)|设置 GregorianCalendar 的更改日期。|
|24|	void setTime(Date date)|用给定的日期设置Calendar的当前时间。|
|25|	void setTimeInMillis(long millis)|用给定的long型毫秒数设置Calendar的当前时间。|
|26|	void setTimeZone(TimeZone value)|用给定时区值设置当前时区。|
|27|	String toString()|返回代表日历的字符串。|

实例
实例
```java
import java.util.*;
  
public class GregorianCalendarDemo {
 
   public static void main(String[] args) {
      String months[] = {
      "Jan", "Feb", "Mar", "Apr",
      "May", "Jun", "Jul", "Aug",
      "Sep", "Oct", "Nov", "Dec"};
      
      int year;
      // 初始化 Gregorian 日历
      // 使用当前时间和日期
      // 默认为本地时间和时区
      GregorianCalendar gcalendar = new GregorianCalendar();
      // 显示当前时间和日期的信息
      System.out.print("Date: ");
      System.out.print(months[gcalendar.get(Calendar.MONTH)]);
      System.out.print(" " + gcalendar.get(Calendar.DATE) + " ");
      System.out.println(year = gcalendar.get(Calendar.YEAR));
      System.out.print("Time: ");
      System.out.print(gcalendar.get(Calendar.HOUR) + ":");
      System.out.print(gcalendar.get(Calendar.MINUTE) + ":");
      System.out.println(gcalendar.get(Calendar.SECOND));
      
      // 测试当前年份是否为闰年
      if(gcalendar.isLeapYear(year)) {
         System.out.println("当前年份是闰年");
      }
      else {
         System.out.println("当前年份不是闰年");
      }
   }
}
```
运行实例 »
以上实例编译运行结果如下：
```
Date: Apr 22 2009
Time: 11:25:27
当前年份不是闰年
```
关于 Calendar 类的完整列表，你可以参考标准的 [Java文档](https://www.runoob.com/manual/jdk11api/java.base/java/util/Calendar.html)。

## Java 正则表达式
正则表达式定义了字符串的模式。

正则表达式可以用来搜索、编辑或处理文本。

正则表达式并不仅限于某一种语言，但是在每种语言中有细微的差别。

Java 提供了 java.util.regex 包，它包含了 Pattern 和 Matcher 类，用于处理正则表达式的匹配操作。

### 正则表达式实例
一个字符串其实就是一个简单的正则表达式，例如 **Hello World** 正则表达式匹配 "Hello World" 字符串。

.（点号）也是一个正则表达式，它匹配任何一个字符如："a" 或 "1"。

下表列出了一些正则表达式的实例及描述：
| 正则表达式 | 描述 | 
| :------ | :--------- | 	
|this is text|匹配字符串 "this is text"|
|this\s+is\s+text |`注意字符串中的 \s+。` `匹配单词 "this" 后面的 \s+ 可以匹配多个空格，之后匹配 is 字符串，再之后 \s+ 匹配多个空格然后再跟上 text 字符串。` `可以匹配这个实例：this is text` |
| ^\d+(\.\d+)? | `^ 定义了以什么开始` `\d+ 匹配一个或多个数字` `? 设置括号内的选项是可选的` `\. 匹配 "."` `可以匹配的实例："5", "1.5" 和 "2.21"。`|

更多正则表达式内容可以参考：[正则表达式 - 教程](https://www.runoob.com/regexp/regexp-tutorial.html)
### java.util.regex 包
`java.util.regex` 包是 Java 标准库中用于支持正则表达式操作的包。

java.util.regex 包主要包括以下三个类：

- Pattern 类：
pattern 对象是一个正则表达式的编译表示。Pattern 类没有公共构造方法。要创建一个 Pattern 对象，你必须首先调用其公共静态编译方法，它返回一个 Pattern 对象。该方法接受一个正则表达式作为它的第一个参数。

- Matcher 类：
Matcher 对象是对输入字符串进行解释和匹配操作的引擎。与Pattern 类一样，Matcher 也没有公共构造方法。你需要调用 Pattern 对象的 matcher 方法来获得一个 Matcher 对象。

- PatternSyntaxException：
PatternSyntaxException 是一个非强制异常类，它表示一个正则表达式模式中的语法错误。

以下实例中使用了正则表达式 .*runoob.* 用于查找字符串中是否包了 runoob 子串：

实例
```java
import java.util.regex.*;
 
class RegexExample1{
   public static void main(String[] args){
      String content = "I am noob " +
        "from runoob.com.";
 
      String pattern = ".*runoob.*";
 
      boolean isMatch = Pattern.matches(pattern, content);
      System.out.println("字符串中是否包含了 'runoob' 子字符串? " + isMatch);
   }
}
```
实例输出结果为：
```
字符串中是否包含了 'runoob' 子字符串? true
```
### 捕获组
捕获组是把多个字符当一个单独单元进行处理的方法，它通过对括号内的字符分组来创建。

例如，正则表达式 (dog) 创建了单一分组，组里包含"d"，"o"，和"g"。

捕获组是通过从左至右计算其开括号来编号。例如，在表达式（（A）（B（C））），有四个这样的组：

- ((A)(B(C)))
- (A)
- (B(C))
- (C)
可以通过调用 matcher 对象的 groupCount 方法来查看表达式有多少个分组。groupCount 方法返回一个 int 值，表示matcher对象当前有多个捕获组。

还有一个特殊的组（group(0)），它总是代表整个表达式。该组不包括在 groupCount 的返回值中。

#### 实例Tset015
下面的例子说明如何从一个给定的字符串中找到数字串：

RegexMatches.java 文件代码：
```java
import java.util.regex.Matcher;
import java.util.regex.Pattern;
 
public class RegexMatches
{
    public static void main( String[] args ){
 
      // 按指定模式在字符串查找
      String line = "This order was placed for QT3000! OK?";
      String pattern = "(\\D*)(\\d+)(.*)";
 
      // 创建 Pattern 对象
      Pattern r = Pattern.compile(pattern);
 
      // 现在创建 matcher 对象
      Matcher m = r.matcher(line);
      if (m.find( )) {
         System.out.println("Found value: " + m.group(0) );
         System.out.println("Found value: " + m.group(1) );
         System.out.println("Found value: " + m.group(2) );
         System.out.println("Found value: " + m.group(3) ); 
      } else {
         System.out.println("NO MATCH");
      }
   }
}
```
以上实例编译运行结果如下：
```
Found value: This order was placed for QT3000! OK?
Found value: This order was placed for QT
Found value: 3000
Found value: ! OK?
```
### 正则表达式语法
在其他语言中，`\\` 表示：我想要在正则表达式中插入一个普通的（字面上的）反斜杠，请不要给它任何特殊的意义。

在 Java 中，`\\` 表示：我要插入一个正则表达式的反斜线，所以其后的字符具有特殊的意义。

所以，在其他的语言中（如 Perl），一个反斜杠 \ 就足以具有转义的作用，而在 Java 中正则表达式中则需要有两个反斜杠才能被解析为其他语言中的转义作用。也可以简单的理解在 Java 的正则表达式中，两个 `\\` 代表其他语言中的一个 \，这也就是为什么表示一位数字的正则表达式是 `\\d`，而表示一个普通的反斜杠是 `\\`。
```
System.out.print("\\");    // 输出为 \
System.out.print("\\\\");  // 输出为 \\
```


| 字符 | 说明 | 
| :------ | :--------- | 	
|`\`|将下一字符标记为特殊字符、文本、反向引用或八进制转义符。例如， n匹配字符 n。\n 匹配换行符。序列 \\\\ 匹配 \\ ,\\（匹配 （。|
|`^`|匹配输入字符串开始的位置。如果设置了 RegExp 对象的 Multiline 属性，^ 还会与"\n"或"\r"之后的位置匹配。|
|`$`|匹配输入字符串结尾的位置。如果设置了 RegExp 对象的 Multiline 属性，$ 还会与"\n"或"\r"之前的位置匹配。|
|`*`|零次或多次匹配前面的字符或子表达式。例如，zo* 匹配"z"和"zoo"。* 等效于 {0,}。|
|`+`|一次或多次匹配前面的字符或子表达式。例如，"zo+"与"zo"和"zoo"匹配，但与"z"不匹配。+ 等效于 {1,}。|
|`?`|零次或一次匹配前面的字符或子表达式。例如，"do(es)?"匹配"do"或"does"中的"do"。? 等效于 {0,1}。|
|`{n}`| n 是非负整数。正好匹配 n 次。例如，"o{2}"与"Bob"中的"o"不匹配，但与"food"中的两个"o"匹配。|
|`{n,}`|n 是非负整数。至少匹配 n 次。例如，"o{2,}"不匹配"Bob"中的"o"，而匹配"foooood"中的所有 o。"o{1,}"等效于"o+"。"o{0,}"等效于"o*"。|
|`{n,m}`|m 和 n 是非负整数，其中 n <= m。匹配至少 n 次，至多 m 次。例如，"o{1,3}"匹配"fooooood"中的头三个 o。'o{0,1}' 等效于 'o?'。注意：您不能将空格插入逗号和数字之间。|
|`?`|当此字符紧随任何其他限定符（*、+、?、{n}、{n,}、{n,m}）之后时，匹配模式是"非贪心的"。"非贪心的"模式匹配搜索到的、尽可能短的字符串，而默认的"贪心的"模式匹配搜索到的、尽可能长的字符串。例如，在字符串"oooo"中，"o+?"只匹配单个"o"，而"o+"匹配所有"o"。|
|`.`|匹配除"\r\n"之外的任何单个字符。若要匹配包括"\r\n"在内的任意字符，请使用诸如"[\s\S]"之类的模式。|
|`(pattern)`|匹配 pattern 并捕获该匹配的子表达式。可以使用 $0…$9 属性从结果"匹配"集合中检索捕获的匹配。若要匹配括号字符 ( )，请使用"\("或者"\)"。|
|`(?:pattern)`|匹配 pattern 但不捕获该匹配的子表达式，即它是一个非捕获匹配，不存储供以后使用的匹配。这对于用"or"字符 (|) 组合模式部件的情况很有用。例如，'industr(?:y|ies) 是比 'industry|industries' 更经济的表达式。|
|`(?=pattern)`|执行正向预测先行搜索的子表达式，该表达式匹配处于匹配 pattern 的字符串的起始点的字符串。它是一个非捕获匹配，即不能捕获供以后使用的匹配。例如，'Windows (?=95|98|NT|2000)' 匹配"Windows 2000"中的"Windows"，但不匹配"Windows 3.1"中的"Windows"。预测先行不占用字符，即发生匹配后，下一匹配的搜索紧随上一匹配之后，而不是在组成预测先行的字符后。|
|`(?!pattern)`|执行反向预测先行搜索的子表达式，该表达式匹配不处于匹配 pattern 的字符串的起始点的搜索字符串。它是一个非捕获匹配，即不能捕获供以后使用的匹配。例如，'Windows (?!95|98|NT|2000)' 匹配"Windows 3.1"中的 "Windows"，但不匹配"Windows 2000"中的"Windows"。预测先行不占用字符，即发生匹配后，下一匹配的搜索紧随上一匹配之后，而不是在组成预测先行的字符后。|
| x \\| y  |匹配 x 或 y。例如，'z|food' 匹配"z"或"food"。'(z|f)ood' 匹配"zood"或"food"。|
|`[xyz]`|字符集。匹配包含的任一字符。例如，"`[abc]`"匹配"plain"中的"a"。|
|`[^xyz]`|反向字符集。匹配未包含的任何字符。例如，"`[^abc]`"匹配"plain"中"p"，"l"，"i"，"n"。|
|`[a-z]`|字符范围。匹配指定范围内的任何字符。例如，"`[a-z]`"匹配"a"到"z"范围内的任何小写字母。|
|`[^a-z]`|反向范围字符。匹配不在指定的范围内的任何字符。例如，"`[^a-z]`"匹配任何不在"a"到"z"范围内的任何字符。|
|`\b`|匹配一个字边界，即字与空格间的位置。例如，"er\b"匹配"never"中的"er"，但不匹配"verb"中的"er"。|
|`\B`|非字边界匹配。"er\B"匹配"verb"中的"er"，但不匹配"never"中的"er"。|
|`\cx`|匹配 x 指示的控制字符。例如，\cM 匹配 Control-M 或回车符。x 的值必须在 A-Z 或 a-z 之间。如果不是这样，则假定 c 就是"c"字符本身。|
|`\d`|数字字符匹配。等效于 `[0-9]`。|
|`\D`|非数字字符匹配。等效于 `[^0-9]`。|
|`\f`|换页符匹配。等效于 \x0c 和 \cL。|
|`\n`|换行符匹配。等效于 \x0a 和 \cJ。|
|`\r`|匹配一个回车符。等效于 \x0d 和 \cM。|
|`\s`|匹配任何空白字符，包括空格、制表符、换页符等。与 `[ \f\n\r\t\v]` 等效。|
|`\S`|匹配任何非空白字符。与 `[^ \f\n\r\t\v]` 等效。|
|`\t`|制表符匹配。与 \x09 和 \cI 等效。|
|`\v`|垂直制表符匹配。与 \x0b 和 \cK 等效。|
|`\w`|匹配任何字类字符，包括下划线。与"`[A-Za-z0-9_]`"等效。|
|`\W`|与任何非单词字符匹配。与"`[^A-Za-z0-9_]`"等效。|
|`\xn`|匹配 n，此处的 n 是一个十六进制转义码。十六进制转义码必须正好是两位数长。例如，"\x41"匹配"A"。"\x041"与"\x04"&"1"等效。允许在正则表达式中使用 ASCII 代码。|
|`\num`|匹配 num，此处的 num 是一个正整数。到捕获匹配的反向引用。例如，"(.)\1"匹配两个连续的相同字符。|
|`\n`|标识一个八进制转义码或反向引用。如果 \n 前面至少有 n 个捕获子表达式，那么 n 是反向引用。否则，如果 n 是八进制数 (0-7)，那么 n 是八进制转义码。|
|`\nm`|标识一个八进制转义码或反向引用。如果 \nm 前面至少有 nm 个捕获子表达式，那么 nm 是反向引用。如果 \nm 前面至少有 n 个捕获，则 n 是反向引用，后面跟有字符 m。如果两种前面的情况都不存在，则 \nm 匹配八进制值 nm，其中 n 和 m 是八进制数字 (0-7)。|
|`\nml`|当 n 是八进制数 (0-3)，m 和 l 是八进制数 (0-7) 时，匹配八进制转义码 nml。|
|`\un`|匹配 n，其中 n 是以四位十六进制数表示的 Unicode 字符。例如，\u00A9 匹配版权符号 (©)。|


::: tip 提示
根据 Java Language Specification 的要求，Java 源代码的字符串中的反斜线被解释为 Unicode 转义或其他字符转义。因此必须在字符串字面值中使用两个反斜线，表示正则表达式受到保护，不被 Java 字节码编译器解释。例如，当解释为正则表达式时，字符串字面值 "\b" 与单个退格字符匹配，而 "`\\b`" 与单词边界匹配。字符串字面值 "`\(hello\)`" 是非法的，将导致编译时错误；要与字符串 (hello) 匹配，必须使用字符串字面值 "`\\(hello\\)`"。
:::

### Matcher 类的方法
索引方法
索引方法提供了有用的索引值，精确表明输入字符串中在哪能找到匹配：
| 序号 | 方法|说明 | 
| :------ | :--------- |:--------- |	
|1|	public int start()|返回以前匹配的初始索引。|
|2|	public int start(int group)| 返回在以前的匹配操作期间，由给定组所捕获的子序列的初始索引|
|3|	public int end()|返回最后匹配字符之后的偏移量。|
|4|	public int end(int group)|返回在以前的匹配操作期间，由给定组所捕获子序列的最后字符之后的偏移量。|
#### 查找方法
查找方法用来检查输入字符串并返回一个布尔值，表示是否找到该模式：
| 序号 | 方法|说明 | 
| :------ | :--------- |:--------- |	
|1|	public boolean lookingAt()| 尝试将从区域开头开始的输入序列与该模式匹配。|
|2|	public boolean find()|尝试查找与该模式匹配的输入序列的下一个子序列。|
|3|	public boolean find （int start）|重置此匹配器，然后尝试查找匹配该模式、从指定索引开始的输入序列的下一个子序列。|
|4|	public boolean matches()|尝试将整个区域与模式匹配。|
#### 替换方法
替换方法是替换输入字符串里文本的方法：
| 序号 | 方法|说明 | 
| :------ | :--------- |:--------- |	
|1|	public Matcher appendReplacement(StringBuffer sb, String replacement)|实现非终端添加和替换步骤。|
|2|	public StringBuffer appendTail(StringBuffer sb)|实现终端添加和替换步骤。|
|3|	public String replaceAll(String replacement)| 替换模式与给定替换字符串相匹配的输入序列的每个子序列。|
|4|	public String replaceFirst(String replacement)| 替换模式与给定替换字符串匹配的输入序列的第一个子序列。|
|5|	public static String quoteReplacement(String s)|返回指定字符串的字面替换字符串。这个方法返回一个字符串，就像传递给Matcher类的appendReplacement 方法一个字面字符串一样工作。|
#### start 和 end 方法
下面是一个对单词 "cat" 出现在输入字符串中出现次数进行计数的例子：

RegexMatches.java 文件代码：
```java
import java.util.regex.Matcher;
import java.util.regex.Pattern;
 
public class RegexMatches
{
    private static final String REGEX = "\\bcat\\b";
    private static final String INPUT =
                                    "cat cat cat cattie cat";
 
    public static void main( String[] args ){
       Pattern p = Pattern.compile(REGEX);
       Matcher m = p.matcher(INPUT); // 获取 matcher 对象
       int count = 0;
 
       while(m.find()) {
         count++;
         System.out.println("Match number "+count);
         System.out.println("start(): "+m.start());
         System.out.println("end(): "+m.end());
      }
   }
}
```
以上实例编译运行结果如下：
```
Match number 1
start(): 0
end(): 3
Match number 2
start(): 4
end(): 7
Match number 3
start(): 8
end(): 11
Match number 4
start(): 19
end(): 22
```
可以看到这个例子是使用单词边界，以确保字母 "c" "a" "t" 并非仅是一个较长的词的子串。它也提供了一些关于输入字符串中匹配发生位置的有用信息。

Start 方法返回在以前的匹配操作期间，由给定组所捕获的子序列的初始索引，end 方法最后一个匹配字符的索引加 1。

#### matches 和 lookingAt 方法
matches 和 lookingAt 方法都用来尝试匹配一个输入序列模式。它们的不同是 matches 要求整个序列都匹配，而lookingAt 不要求。

lookingAt 方法虽然不需要整句都匹配，但是需要从第一个字符开始匹配。

这两个方法经常在输入字符串的开始使用。

我们通过下面这个例子，来解释这个功能：

RegexMatches.java 文件代码：
```java
import java.util.regex.Matcher;
import java.util.regex.Pattern;
 
public class RegexMatches
{
    private static final String REGEX = "foo";
    private static final String INPUT = "fooooooooooooooooo";
    private static final String INPUT2 = "ooooofoooooooooooo";
    private static Pattern pattern;
    private static Matcher matcher;
    private static Matcher matcher2;
 
    public static void main( String[] args ){
       pattern = Pattern.compile(REGEX);
       matcher = pattern.matcher(INPUT);
       matcher2 = pattern.matcher(INPUT2);
 
       System.out.println("Current REGEX is: "+REGEX);
       System.out.println("Current INPUT is: "+INPUT);
       System.out.println("Current INPUT2 is: "+INPUT2);
 
 
       System.out.println("lookingAt(): "+matcher.lookingAt());
       System.out.println("matches(): "+matcher.matches());
       System.out.println("lookingAt(): "+matcher2.lookingAt());
   }
}
```
以上实例编译运行结果如下：
```
Current REGEX is: foo
Current INPUT is: fooooooooooooooooo
Current INPUT2 is: ooooofoooooooooooo
lookingAt(): true
matches(): false
lookingAt(): false
```
#### replaceFirst 和 replaceAll 方法
replaceFirst 和 replaceAll 方法用来替换匹配正则表达式的文本。不同的是，replaceFirst 替换首次匹配，replaceAll 替换所有匹配。

下面的例子来解释这个功能：

RegexMatches.java 文件代码：
```java
import java.util.regex.Matcher;
import java.util.regex.Pattern;
 
public class RegexMatches
{
    private static String REGEX = "dog";
    private static String INPUT = "The dog says meow. " +
                                    "All dogs say meow.";
    private static String REPLACE = "cat";
 
    public static void main(String[] args) {
       Pattern p = Pattern.compile(REGEX);
       // get a matcher object
       Matcher m = p.matcher(INPUT); 
       INPUT = m.replaceAll(REPLACE);
       System.out.println(INPUT);
   }
}
```
以上实例编译运行结果如下：
```
The cat says meow. All cats say meow.
```
#### appendReplacement 和 appendTail 方法
Matcher 类也提供了appendReplacement 和 appendTail 方法用于文本替换：

看下面的例子来解释这个功能：

RegexMatches.java 文件代码：
```java
import java.util.regex.Matcher;
import java.util.regex.Pattern;
 
public class RegexMatches
{
   private static String REGEX = "a*b";
   private static String INPUT = "aabfooaabfooabfoobkkk";
   private static String REPLACE = "-";
   public static void main(String[] args) {
      Pattern p = Pattern.compile(REGEX);
      // 获取 matcher 对象
      Matcher m = p.matcher(INPUT);
      StringBuffer sb = new StringBuffer();
      while(m.find()){
         m.appendReplacement(sb,REPLACE);
      }
      m.appendTail(sb);
      System.out.println(sb.toString());
   }
}
```
以上实例编译运行结果如下：
```
-foo-foo-foo-kkk
```
#### PatternSyntaxException 类的方法
PatternSyntaxException 是一个非强制异常类，它指示一个正则表达式模式中的语法错误。

PatternSyntaxException 类提供了下面的方法来帮助我们查看发生了什么错误。
| 序号 | 方法|说明 | 
| :------ | :--------- |:--------- |	
|1|	public String getDescription()|获取错误的描述。|
|2|	public int getIndex()| 获取错误的索引。|
|3|	public String getPattern()|获取错误的正则表达式模式。|
|4|	public String getMessage()|返回多行字符串，包含语法错误及其索引的描述、错误的正则表达式模式和模式中错误索引的可视化指示。|
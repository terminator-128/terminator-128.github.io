---
title: Hello World
index_img:
banner_img:
updated:
---
## Hexo博客

开始接触的静态Hexo博客实在是没有发展完全，而且像搜索功能之类要自己定制，并且主题的观感也并不是很理想，所以一直以来比较喜欢自己写个可定制程度高、前后端齐全的博客:page_with_curl: 。

> 其实这方面也已经有所企划，想写个好的CMS博客平台。目前的语言构建预定为Vue+Go，不过还要花费相当的时间。

但是，由于实在是没有钱租服务器（一个穷学生:man_student:），并且目前很多博客服务提供商要么不可定制，要么定制过程很不友好，所以只能采用Hexo+GIthub的方式姑且来暂时应对一下。



## Markdown

所有文章均为Markdown渲染而成，下面测试展示：

### 图片

![Markdown文件渲染过程](markdown-flowchart.png)



### 超链接

[百度](https://www.)



### 字体

**这是** *一段*  示例



### 列表

1. 王小波
2. 周国平
   - 《尼采：在世纪的转折点上》
   - 《守望的距离》
   - 《人生哲思录》
   - 《人与永恒》

- - - - -

- 独孤求败


- 西门吹雪




### 表格

| header | header0 | header1 | header2 | header3 |
| ------ | ------- | ------- | ------- | ------- |
| row0   |         |         |         |         |
| row1   |         |         |         |         |



### 引用

> 这里是一段应用



### 数学公式

$$
E = m*c^2
$$



### 代码块

#### C

```c++
#include <stdio.h>

int main()
{
    printf("Hello, world!");
    return 0;
}
```

#### C++

```c++
#include <iostream>
using namespace std;

int main()
{
    cout << "Hello, world!" << endl;
    return 0;
}
```

#### python

```python
def __main():
    print("Hello, World!\n")
```

#### java

```java
class HelloWorld {
    public static void main(String args[]){
        System.out.println("Hello, world");
    }
}
```

#### Go

```go
package main

import "fmt"

func main() {
	fmt.Println("Hello, world!")
}
```

#### Rust

```rust
fn main() {
    println!("Hello, world!");
}
```


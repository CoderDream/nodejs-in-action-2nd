## ES2015 箭头函数

[ES2015 箭头函数](https://www.jianshu.com/p/b4091e4545f8)

96  zshanjun 
2017.04.18 19:31* 字数 195 阅读 770评论 0喜欢 1

### 箭头函数用法  
- 传统写法：  
```javascript
class Task {}

class TaskCollection {
    constructor(tasks = []) {
        this.tasks = tasks;
    }

    log() {
        this.tasks.forEach(function(task) {
            return console.log(task);
        });
    }
}

new TaskCollection([
    new Task, new Task, new Task
]).log();

//输出3个Task{}
```


- 箭头函数写法：
```javascript
log() {
    this.tasks.forEach((task) => {
        console.log(task);
    })
}
```



注意，在只有一个参数和一条执行语句时，可以简化为下面的写法：

```javascript
log() {
    this.tasks.forEach(task => console.log(task));
}
```


注意事项：
- 1、 this值  

普通function函数和箭头函数的行为有一个微妙的区别，箭头函没有它自己的this值，箭头函数内的this值继承自外围作用域。

如果将上面的代码改成打印this，在箭头函数中this值为TaskCollection {tasks: Array[3]}，在传统函数中会输出undefined，这是由于自动开启了strict mode，否则默认会指向window对象。

- 2、箭头函数会默认返回  

在箭头函数中可以省略return

示例：
```javascript
//auto return

let names = ['jack', 'jobs', 'nike'];

// names = names.map(function(name) {
//  return name + ' is coll.';
// });

names = names.map(name => name + ' is cool.');

console.log(names);
```

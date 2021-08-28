// let str: string = '你好ts';
// let str1: string = '你好ts1';

// let arr: Array<string> = ['1,2,3,4,5,6,7,8,9'];

// enum Flag {
//     success = 1,
//     error = 2,
//     warn = 3,
// }
// let f: Flag = Flag.success;

// enum Color {
//     red,
//     green = 5,
//     blue,
//     alpha,
// }
// let c: Color = Color.blue;
// // console.log(c);  // 6

// let aany: any = false;
// aany = 'www';
// console.log(aany); // www

// // null和undefined, 其他类型的子类型
// let num: number;
// // console.log(num); // undefined, 报错
// let num1: undefined;
// console.log(num1); // undefined
// let num2: number | undefined;
// console.log(num2); // undefined
// let num4: number | undefined | null;

// function lg(): void {
//     console.log('void');
// }
// lg();

// // let err: never;
// // err = (() => {
// //     throw new Error('错误');
// // })();
// // 很少用到
// // throw new Error()会中断后面的执行

// let func2 = function (): number {
//     return 123;
// };
// console.log(func2());

// let func3 = function (name: string, age: number): string {
//     return `${name} is ${age}`;
// };
// console.log(func3('rock', 21));

// let func4 = function (name: string, age?: number): string {
//     return `${name} is ${age ?? 'unknown'}`;
// };
// console.log(func4('rock'));
// console.log(func4('rock', 21));

// let func5 = function (name: string, age: number = 21): string {
//     return `${name} is ${age}`;
// };
// console.log(func5('rock'));
// console.log(func5('rock', 21));

// let func6 = function (...result: number[]): number {
//     return result.reduce((a: number, b: number) => a + b, 0);
// };
// console.log(func6(1, 2, 3, 4));
// 1111111111111111111111111111111111111111111111111111111111111111111111

// function getInfo0(name: string): string;
// function getInfo0(age: number): number;
// function getInfo0(str: any): any {
//     if (typeof str === 'string') {
//         return 'string:' + str;
//     } else if (typeof str === 'number') {
//         return 'number:' + str;
//     }
//     return;
// }
// console.log(getInfo0('rock'));
// console.log(getInfo0(21));

// function getInfo1(name: string): string;
// function getInfo1(name: string, age: number): string;
// function getInfo1(name: any, age?: any): any {
//     if (!age) {
//         return 'name:' + name;
//     } else {
//         return 'name + age:' + name + age;
//     }
// }
// console.log(getInfo1('rock'));
// console.log(getInfo1('meow', 21));

// class Person0 {
//     constructor(name: string) {
//         this.name = name;
//     }
//     name: string;
//     run(): void {
//         console.log(this.name);
//     }
// }
// new Person0('meow').run();

// class Person1 extends Person0 {
//     constructor(name: string) {
//         super(name);
//     }
//     age: number = 20;
//     run(): void {
//         console.log(this.name + ' is running');
//     }
// }
// new Person1('meow').run();

// abstract class Animal {
//     constructor(name: string) {
//         this.name = name;
//     }
//     name: string;
//     abstract eat(): any;
// }

// class Dog extends Animal {
//     constructor(name: string) {
//         super(name);
//     }
//     eat() {
//         console.log('什么都吃');
//     }
// }
// new Dog('旺财').eat();

// 1111111111111111111111111111111111111111111111111111111111111111111111
// // 属性接口
// interface FullName {
//     firstName: string;
//     lastName: string;
//     // 可选属性
//     age?: number;
// }
// function printName(name: FullName) {
//     console.log(
//         `${name.firstName} ${name.lastName}${name.age ? ' is ' + name.age : ''}`
//     );
// }
// printName({ firstName: 'rock', lastName: 'meow' });
// printName({ firstName: 'rock', lastName: 'meow', age: 21 });

// // 函数接口
// interface encrypt {
//     (key: string, value: string): string;
// }
// let md5: encrypt = function (key: string, value: string): string {
//     return `${key}: ${value}`;
// };
// console.log(md5('rock', 'meow'));

// // 可索引接口, 对数组和对象的约束(不常用)
// interface UserArr {
//     [index: number]: string;
// }
// const arr: UserArr = ['aa', 'bb', 'cc', 'dd', 'ee'];
// console.log(arr[0]);
// interface UserObj {
//     [index: string]: string;
// }
// const obj: UserObj = { name: 'meow', age: '21' };
// console.log(obj['name'], obj.age);

// // 类类型接口:对类的约束 和 抽象类有些相似
// interface Animal {
//     name: string;
//     eat(food?: string): void;
// }
// class Dog implements Animal {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     eat(food?: string) {
//         console.log(`${this.name} eat ${food || 'everything'}`);
//     }
// }
// new Dog('旺财').eat('meat');
// new Dog('旺财').eat();

// // 接口扩展: 接口可以继承接口
// interface Person2 {
//     eat(): void;
// }
// interface Hobby {
//     hobby(): void;
// }
// interface Chinese extends Person2 {
//     work(): void;
// }
// class Reactor implements Chinese {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     eat(): void {
//         console.log(`${this.name} eat food`);
//     }
//     work(): void {
//         console.log(`${this.name} write React`);
//     }
// }
// new Reactor('meow').work();

// class Meow extends Reactor implements Hobby {
//     constructor(name: string) {
//         super(name);
//     }
//     hobby(): void {
//         this.work();
//         console.log(`${this.name} play game`);
//     }
// }

// new Meow('f').hobby();
// 1111111111111111111111111111111111111111111111111111111111111111111111

// // 定义
// function getData<T>(value: T): T {
//     return value;
// }
// console.log(getData<number>(123));
// console.log(getData<string>('abc'));
// function getString<T>(key: string, value: T): string {
//     return `${key}:${value}`;
// }
// console.log(getString<number>('meow', 123));

// // 接口泛型
// interface ConfigFn {
//     <T>(value1: T, value2: T): T;
// }
// let getConfig0: ConfigFn = function <T>(value1: T, value2: T): T {
//     return value1 > value2 ? value1 : value2;
// };
// console.log(getConfig0<number>(1, 2));
// console.log(getConfig0<string>('ba', 'b'));

// // 泛型类
// class Tem<T> {
//     list: T[] = [];
// }

// // 类作为参数
// class User {
//     username: string;
//     password: string | undefined;
//     constructor(username: string, password?: string) {
//         this.username = username;
//         if (password) {
//             this.password = password;
//         }
//     }
// }
// class DB {
//     addUser(user: User): boolean {
//         // 数据库操作
//         console.log(user);
//         return true;
//     }
// }
// class DBT<T> {
//     add(item: T): boolean {
//         // 数据库操作
//         console.log(item);
//         return true;
//     }
// }
// new DB().addUser(new User('meow'));
// // 错误写法,不能用
// // new DBT<User>().add('aaa');
// new DBT<User>().add(new User('meow', '123'));

// 1111111111111111111111111111111111111111111111111111111111111111111111

// namespace A {
//     export let sum = 10;
// }
// namespace B {
//     export let sum = 20;
// }
// // 10
// let num = A.sum;
// console.log(num);

// 1111111111111111111111111111111111111111111111111111111111111111111111

// 类装饰器
// 普通装饰器
function logClass(item: any) {
    item.prototype.api = '111';
    item.prototype.func = () => {
        console.log('--miku--');
    };
}
@logClass
class Decorator {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
}
let decorator: any = new Decorator('meow');
console.log(decorator.api);
decorator.func();

// 装饰器工厂
function logClassFactory(api: string) {
    return function (item: any) {
        item.prototype.api = api;
        item.prototype.func = () => {
            console.log('miku39!!!');
        };
    };
}
@logClassFactory('http://www.baidu.com')
class DecoratorF {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
}
let decoratorF: any = new DecoratorF('meoww');
console.log(decoratorF.api);
decoratorF.func();

// 重载构造函数
function overLoad(proto: any) {
    return class extends proto {
        url: string = 'http://www.baidu.com###';
        constructor(name: string, api?: string) {
            super(api);
            console.log(api ?? 'apiipa');
        }
        getUrl(): string {
            console.log('meow ---', this.url);
            return this.url;
        }
    };
}
@overLoad
class HttpUrl {
    url: string;
    constructor(url: string, api?: string) {
        this.url = url;
    }
    getUrl(): string {
        console.log(this.url);
        return this.url;
    }
}
new HttpUrl('http://www.4399.com', '123api').getUrl();

// 属性装饰器
function logProperty(params: any) {
    return function (target: any, attr: any) {
        target[attr] = params;
    };
}
function logPropertyD(target: any, attr: any) {
    target[attr] = target[attr]?.trim();
}
class logPropertyC {
    @logPropertyD
    @logProperty(' .miku. ')
    name: string | undefined;
    constructor() {}
    getName(): string {
        return this.name ?? '';
    }
}
console.log(new logPropertyC().getName());

// 方法装饰器
function funcDecorator(params: any) {
    console.log(params, '---');
    return function (target: any, name: any, desc: any) {
        // console.log('###########################');
        // console.log(target, name, desc);
        // console.log('###########################');
        let oldFunc = desc.value;
        desc.value = function (...args: any[]) {
            console.log(args);
            args = args.map((value) => value + '');
            oldFunc.apply(this, args);
        };
    };
}
class funcClass {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    @funcDecorator('999')
    get(...params: any[]) {
        console.log(this.name + ' ' + params.join(' '));
    }
}
new funcClass('meow').get('aaa', 123, '444', false);

// 方法参数装饰器
// 没什么用, 不如用类装饰器
function paramsDecorator(params: any) {
    return function (target: any, funcName: any, paramsIndex: any) {
        console.log(params);
        console.log(target, funcName, paramsIndex);
    };
}
class paramsClass {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    get(age: number, @paramsDecorator('ccc') end: any) {
        console.log(`${this.name} is ${age}, ${end}`);
    }
}
new paramsClass('meow').get(21, '@#$#@');

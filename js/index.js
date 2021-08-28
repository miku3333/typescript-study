"use strict";
// let str: string = '你好ts';
// let str1: string = '你好ts1';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
function logClass(item) {
    item.prototype.api = '111';
    item.prototype.func = function () {
        console.log('--miku--');
    };
}
var Decorator = /** @class */ (function () {
    function Decorator(name) {
        this.name = name;
    }
    Decorator.prototype.getName = function () {
        return this.name;
    };
    Decorator = __decorate([
        logClass
    ], Decorator);
    return Decorator;
}());
var decorator = new Decorator('meow');
console.log(decorator.api);
decorator.func();
// 装饰器工厂
function logClassFactory(api) {
    return function (item) {
        item.prototype.api = api;
        item.prototype.func = function () {
            console.log('miku39!!!');
        };
    };
}
var DecoratorF = /** @class */ (function () {
    function DecoratorF(name) {
        this.name = name;
    }
    DecoratorF.prototype.getName = function () {
        return this.name;
    };
    DecoratorF = __decorate([
        logClassFactory('http://www.baidu.com')
    ], DecoratorF);
    return DecoratorF;
}());
var decoratorF = new DecoratorF('meoww');
console.log(decoratorF.api);
decoratorF.func();
// 重载构造函数
function overLoad(proto) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1(name, api) {
            var _this = _super.call(this, api) || this;
            _this.url = 'http://www.baidu.com###';
            console.log(api !== null && api !== void 0 ? api : 'apiipa');
            return _this;
        }
        class_1.prototype.getUrl = function () {
            console.log('meow ---', this.url);
            return this.url;
        };
        return class_1;
    }(proto));
}
var HttpUrl = /** @class */ (function () {
    function HttpUrl(url, api) {
        this.url = url;
    }
    HttpUrl.prototype.getUrl = function () {
        console.log(this.url);
        return this.url;
    };
    HttpUrl = __decorate([
        overLoad
    ], HttpUrl);
    return HttpUrl;
}());
new HttpUrl('http://www.4399.com', '123api').getUrl();
// 属性装饰器
function logProperty(params) {
    return function (target, attr) {
        target[attr] = params;
    };
}
function logPropertyD(target, attr) {
    var _a;
    target[attr] = (_a = target[attr]) === null || _a === void 0 ? void 0 : _a.trim();
}
var logPropertyC = /** @class */ (function () {
    function logPropertyC() {
    }
    logPropertyC.prototype.getName = function () {
        var _a;
        return (_a = this.name) !== null && _a !== void 0 ? _a : '';
    };
    __decorate([
        logPropertyD,
        logProperty(' .miku. ')
    ], logPropertyC.prototype, "name", void 0);
    return logPropertyC;
}());
console.log(new logPropertyC().getName());
// 方法装饰器
function funcDecorator(params) {
    console.log(params, '---');
    return function (target, name, desc) {
        // console.log('###########################');
        // console.log(target, name, desc);
        // console.log('###########################');
        var oldFunc = desc.value;
        desc.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log(args);
            args = args.map(function (value) { return value + ''; });
            oldFunc.apply(this, args);
        };
    };
}
var funcClass = /** @class */ (function () {
    function funcClass(name) {
        this.name = name;
    }
    funcClass.prototype.get = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        console.log(this.name + ' ' + params.join(' '));
    };
    __decorate([
        funcDecorator('999')
    ], funcClass.prototype, "get", null);
    return funcClass;
}());
new funcClass('meow').get('aaa', 123, '444', false);
// 方法参数装饰器
// 没什么用, 不如用类装饰器
function paramsDecorator(params) {
    return function (target, funcName, paramsIndex) {
        console.log(params);
        console.log(target, funcName, paramsIndex);
    };
}
var paramsClass = /** @class */ (function () {
    function paramsClass(name) {
        this.name = name;
    }
    paramsClass.prototype.get = function (age, end) {
        console.log(this.name + " is " + age + ", " + end);
    };
    __decorate([
        __param(1, paramsDecorator('ccc'))
    ], paramsClass.prototype, "get", null);
    return paramsClass;
}());
new paramsClass('meow').get(21, '@#$#@');

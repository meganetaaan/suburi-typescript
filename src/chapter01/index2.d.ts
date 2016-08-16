declare class Parent {
    greeting(name: string): string;
}
declare class Child extends Parent {
    greeting(name: string): string;
}
declare let obj: Child;

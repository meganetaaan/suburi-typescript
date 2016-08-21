abstract class Node {
  isStringNode(): this is StringNode {
    return this instanceof StringNode;
  }
  isNumberNode(): this is NumberNode {
    return this instanceof NumberNode;
  }
}

class StringNode extends Node {
  constructor(public text: string) {
    super();
  }
}

class NumberNode extends Node {
  constructor(public value: number) {
    super();
  }
}

let nodes: Node[] = [new StringNode('TypeScript'), new NumberNode(8)];
nodes.forEach(n => {
  if (n.isStringNode()) {
    console.log(n.text);
  } else if (n.isNumberNode()) {
    console.log(n.value);
  }
});

export { }

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(node) {
    const myNode = new Node(node);

    if (!this.root) {
      this.root = myNode;
    }
    else {
      this.insertNode(this.root, myNode);
    }
  }

  insertNode(root, myNode) {
    if (root.left > myNode.data) {
      if (root.left === null) {
        root.left = myNode;
      }
      else {
        this.insertNode(root.left, myNode);
      }
    }
    else {
      if (root.right === null) {
        root.right = myNode;
      }
      else {
        this.insertNode(root.right, myNode);
      }
    }
  }

  getRootNode() {
    return this.root;
  }
}

const tree = new BinarySearchTree();

tree.insert(6);
tree.insert(8);
console.log(tree.getRootNode());
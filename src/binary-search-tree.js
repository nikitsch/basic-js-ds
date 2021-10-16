// const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor() {
    this.value = null;
  }

  root() {
    return this.value
  }

  add(data) {
    this.value = addData(this.value, data);
    function addData(node, data) {
      if (!node) {return new Node(data)}
      if (node.data === data) {return node}
      if (data < node.data) {node.left = addData(node.left, data)}
      else {node.right = addData(node.right, data)}
      return node;
    }
  }

  has(data) {
    return searchData(this.value, data);
    function searchData(node, data) {
      if (!node) {return false}
      if (node.data === data) {return true}
      if (data < node.data) {return searchData(node.left, data)}
      else {return searchData(node.right, data)}
    }
  }

  find(data) {
    return searchData(this.value, data)
    function searchData(node, data) {
      if (!node) {return null}
      if (node.data === data) {return node}
      if (data < node.data) {return searchData(node.left, data)}
      else {return searchData(node.right, data)}
    }
  }

  remove(data) {
    this.value = removeData(this.value, data);
    function removeData(node, data) {
      if (!node) {return null}
      if (data > node.data) {
        node.right = removeData(node.right, data);
        return node;
      } else if (data < node.data) {
        node.left = removeData(node.left, data);
        return node;
      } else {
        if (!node.left && !node.right) {return null;}
        if (!node.right) {
          node = node.left;
          return node;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        let rihtMin = node.right;
        while (rihtMin.left) {rihtMin = rihtMin.left}
        node.data = rihtMin.data;
        node.right = removeData(node.right, rihtMin.data);
        return node;
      }
    }
  }

  min() {
    if (!this.value) {return}
    let data = this.value;
    while (data.left) {data = data.left}
    return data.data;
  }

  max() {
    if (!this.value) {return}
    let data = this.value;
    while (data.right) {data = data.right}
    return data.data;
  }

}

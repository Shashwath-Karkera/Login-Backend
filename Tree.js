class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(node) {
        this.children.push(node);
    }
}

// Example usage
const root = new TreeNode('Products');
const electronics = new TreeNode('Electronics');
const mobiles = new TreeNode('Mobile Phones');

root.addChild(electronics);
electronics.addChild(mobiles);

console.log(root);
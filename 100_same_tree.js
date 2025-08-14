function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val == q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
  return false;
};

var tree1 = new TreeNode(1, new TreeNode(2, new TreeNode(3)));
var tree2 = new TreeNode(1, new TreeNode(7, new TreeNode(3)));

console.log(isSameTree(tree1, tree2));

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

var invertTree = function (root) {
  if (!root) {
    return root;
  }
  invertTree(root.left);
  invertTree(root.right);
  let root_left = root.left;
  let root_right = root.right;
  root.left = root_right;
  root.right = root_left;
  return root;
};

var isSymmetric = function (root) {
  let left = root.left;
  let right = root.right;
  let inv_left = invertTree(left);
  return isSameTree(right, inv_left);
};

let root = new TreeNode(1);
root.left = new TreeNode(2, new TreeNode(3), new TreeNode(4));
root.right = new TreeNode(2, new TreeNode(4), new TreeNode(3));

console.log(isSymmetric(root));

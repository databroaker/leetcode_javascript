function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var sumOfLeftLeaves = function (root) {
  let total = 0;

  if (root) {
    let left = root.left;
    let right = root.right;

    if (left && !left.left && !left.right) {
      total += left.val;
    }

    total += sumOfLeftLeaves(left);
    total += sumOfLeftLeaves(right);
  }

  return total;
};

var tn = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

console.log(sumOfLeftLeaves(tn));

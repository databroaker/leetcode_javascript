function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var deleteDuplicates = function (head) {
  if (!head) {
    return null;
  }

  let nums = [];
  let ref = head;
  while (true) {
    if (!ref) {
      break;
    }

    nums.push(ref.val);
    ref = ref.next;
  }

  let set = [...new Set(nums)];
  let ret = new ListNode(set[0]);
  ref = ret;

  for (let i = 1; i < set.length; i++) {
    ref.next = new ListNode(set[i]);
    ref = ref.next;
  }

  return ret;
};

var sl = new ListNode(1, new ListNode(1, new ListNode(3)));

console.log(deleteDuplicates(sl));

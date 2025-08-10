function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var reverseList = function (head) {
  let the_list = [];
  let ref = head;

  while (true) {
    if (!ref) break;
    the_list.push(ref.val);
    ref = ref.next;
  }

  ref = head;
  for (let i = the_list.length - 1; i >= 0; i--) {
    ref.val = the_list[i];
    ref = ref.next;
  }

  return head;
};

var the_list = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

console.log(reverseList(the_list));

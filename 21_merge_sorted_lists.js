function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (list1, list2) {
  if (!list1 && !list2) {
    return null;
  }

  let numbers = [];
  let lists = [list1, list2];

  for (let i = 0; i < lists.length; i++) {
    let ref = lists[i];
    while (ref) {
      numbers.push(ref.val);
      ref = ref.next;
    }
  }

  numbers.sort((a, b) => a - b);

  let return_list = new ListNode(numbers[0]);
  let ref = return_list;

  for (let i = 1; i < numbers.length; i++) {
    ref.next = new ListNode(numbers[i]);
    ref = ref.next;
  }

  return return_list;
};

var list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
var list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

console.log(mergeTwoLists(list1, list2));

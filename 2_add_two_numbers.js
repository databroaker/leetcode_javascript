function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  let answer_list = new ListNode();
  let tracker = answer_list;
  let carry = 0;

  while (true) {
    let val1 = l1.val;
    let val2 = l2.val;
    let answer = val1 + val2 + carry;
    carry = 0;
    let test = Math.floor(answer / 10);
    if (test) {
      answer = answer - 10;
      carry = 1;
    }

    tracker.val = answer;

    if (!l1.next && !l2.next) {
      if (carry) {
        tracker.next = new ListNode(carry);
      }
      break;
    }

    tracker.next = new ListNode();
    tracker = tracker.next;

    if (l1.next) {
      l1 = l1.next;
    } else {
      l1 = new ListNode();
    }

    if (l2.next) {
      l2 = l2.next;
    } else {
      l2 = new ListNode();
    }
  }

  return answer_list;
};

let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

console.log(addTwoNumbers(l1, l2));

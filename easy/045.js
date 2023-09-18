// 206. Reverse Linked List
// Difficulty: 🟢 Easy

// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Examples:
// Example 1:
/* 
  Input: head = [1,2,3,4,5]
  Output: [5,4,3,2,1]
*/

// Example 2:
/* 
  Input: head = [1,2]
  Output: [2,1]
*/

// Example 3:
/* 
  Input: head = []
  Output: []
*/

// Constraints:
// * The number of nodes in the list is the range [0, 5000].
// * -5000 <= Node.val <= 5000

// Solutions
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null,
    current = head;
  while (current !== null) {
    prev = new ListNode(current.val, prev);
    current = current.next;
  }
  return prev;
};

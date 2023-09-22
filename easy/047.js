// 21. Merge Two Sorted Lists
// Difficulty: 🟢 Easy

/* 
  You are given the heads of two sorted linked lists list1 and list2.

  Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

  Return the head of the merged linked list.
*/

// Examples:
// Example 1:
/* 
  Input: (list1 = [1, 2, 4]), (list2 = [1, 3, 4]);
  Output: [1, 1, 2, 3, 4, 4]; 
*/

// Example 2:
/* 
  Input: list1 = [], list2 = []
  Output: []
*/

// Example 3:
/* 
  Input: list1 = [], list2 = [0]
  Output: [0]
*/

// Constraints:
/*
 * The number of nodes in both lists is in the range [0, 50].
 * -100 <= Node.val <= 100
 * Both list1 and list2 are sorted in non-decreasing order.
 */

// Solutions
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  var array = [];
  var new_node = new LinkedList();

  for (let i = 0; i < list1.length; i++) array.push(list1[i]);
  for (let i = 0; i < list2.length; i++) array.push(list2[i]);
  for (let i = 0; i < array.length; i++) new_node.insert(array[i]);
};
console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));

// Definition for singly-linked list.
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

function addTwoNumbers(
	l1: ListNode | null,
	l2: ListNode | null
): ListNode | null {
	let l1current = l1;
	let l2current = l2;
	let total = 0;
	let multiplier = 1;
	while (l1current !== null || l2current !== null) {
		console.log(total);
		if (l1current !== null) total += l1current.val * multiplier;
		if (l2current !== null) total += l2current.val * multiplier;
		multiplier *= 10;
		l1current = l1current?.next ?? null;
		l2current = l2current?.next ?? null;
	}
	let totalString = total.toString();
	let returnNode = null;
	while (totalString.length !== 0) {
		const nextDigit = Number(totalString[0]);
		totalString = totalString.substring(1);
		returnNode = new ListNode(nextDigit, returnNode);
	}
	return returnNode;
}

const dummy1 = new ListNode(7);
const dummy2 = new ListNode(7);

addTwoNumbers(dummy1, dummy2);

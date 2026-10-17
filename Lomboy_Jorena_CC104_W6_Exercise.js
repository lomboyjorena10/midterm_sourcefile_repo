'use strict';

console.log('CAMPUS IT SUPPORT REQUEST MANAGER');

// ================================================================
// PART A: STACK
// ================================================================

class Stack {
  constructor() {
    // Create the internal storage.
    this.items = [];
  }

  push(element) {
    // Add an element to the top.
    this.items.push(element);
  }

  pop() {
    // Remove and return the top element.
    return this.items.pop();
  }

  peek() {
    // Return the top without removing it.
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    // Return true when empty.
    return this.items.length === 0;
  }

  size() {
    // Return the number of elements.
    return this.items.length;
  }

  toString() {
    // Return all elements as text.
    return this.items.join(', ');
  }
}

console.log('\nPART A: UNDO HISTORY');

const actionHistory = new Stack();

// Push the three required actions.
actionHistory.push('Opened Ticket #101');
actionHistory.push('Assigned Ticket #101');
actionHistory.push('Closed Ticket #101');

// Display peek, pop, remaining actions, and size.
console.log('Top Action:', actionHistory.peek());
console.log('Undo Action:', actionHistory.pop());
console.log('Remaining Actions:', actionHistory.toString());
console.log('Stack Size:', actionHistory.size());

// ================================================================
// PART B: QUEUE
// ================================================================

class Queue {
  constructor() {
    // Create the internal storage.
    this.items = [];
  }

  enqueue(element) {
    // Add an element at the back.
    this.items.push(element);
  }

  dequeue() {
    // Remove and return the front element.
    return this.items.shift();
  }

  front() {
    // Return the front without removing it.
    return this.items[0];
  }

  isEmpty() {
    // Return true when empty.
    return this.items.length === 0;
  }

  size() {
    // Return the number of elements.
    return this.items.length;
  }

  toString() {
    // Return all elements as text.
    return this.items.join(', ');
  }
}

console.log('\nPART B: WAITING REQUESTS');

const waitingRequests = new Queue();

// Enqueue the four required requests.
waitingRequests.enqueue('Ticket #201 - Password Reset');
waitingRequests.enqueue('Ticket #202 - No Internet');
waitingRequests.enqueue('Ticket #203 - Printer Problem');
waitingRequests.enqueue('Ticket #204 - Software Installation');

// Display the front request.
console.log('Next Request:', waitingRequests.front());

// Dequeue two requests.
console.log('Processed:', waitingRequests.dequeue());
console.log('Processed:', waitingRequests.dequeue());

// Display the remaining queue and its size.
console.log('Remaining Requests:', waitingRequests.toString());
console.log('Queue Size:', waitingRequests.size());

// ================================================================
// PART C: PRIORITY QUEUE
// ================================================================

class PriorityQueue {
  constructor() {
    // Create the internal storage.
    this.items = [];
  }

  enqueue(request, priority) {
    // Create an item containing the request and priority.
    const item = {
      request: request,
      priority: priority
    };

    // Find the correct insertion position.
    // The <= keeps earlier requests first when priorities are equal.
    let position = 0;

    while (
      position < this.items.length &&
      this.items[position].priority <= priority
    ) {
      position++;
    }

    // Insert at the correct position.
    this.items.splice(position, 0, item);
  }

  dequeue() {
    // Remove and return the first item.
    return this.items.shift();
  }

  size() {
    // Return the number of items.
    return this.items.length;
  }

  print() {
    // Display every request and priority.
    for (let i = 0; i < this.items.length; i++) {
      console.log(
        `${this.items[i].request}, Priority ${this.items[i].priority}`
      );
    }
  }
}

console.log('\nPART C: URGENT REQUESTS');

const urgentRequests = new PriorityQueue();

// Enqueue the four required requests.
urgentRequests.enqueue('Ticket #301 - Install Browser', 3);
urgentRequests.enqueue('Ticket #302 - Server Offline', 1);
urgentRequests.enqueue('Ticket #303 - Faculty PC Failure', 2);
urgentRequests.enqueue('Ticket #304 - Internet Laboratory Down', 1);

// Print the initial priority order.
console.log('Initial Priority Order:');
urgentRequests.print();

// Process the first request.
const processedPriorityRequest = urgentRequests.dequeue();

console.log(
  `Processed Priority Request: ${processedPriorityRequest.request}, Priority ${processedPriorityRequest.priority}`
);

// Print the remaining requests.
console.log('Remaining Priority Requests:');
urgentRequests.print();

// ================================================================
// PART D: LINKED LIST
// ================================================================

class Node {
  constructor(element) {
    // Store the element.
    this.element = element;

    // Set next to null.
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // Set length to zero.
    this.length = 0;

    // Set head to null.
    this.head = null;
  }

  append(element) {
    // Add a node at the end.
    const node = new Node(element);

    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next !== null) {
        current = current.next;
      }

      current.next = node;
    }

    this.length++;
  }

  insert(position, element) {
    // Reject invalid positions.
    if (position < 0 || position > this.length) {
      return false;
    }

    const node = new Node(element);

    // Insert at the beginning.
    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let previous = this.head;

      for (let i = 0; i < position - 1; i++) {
        previous = previous.next;
      }

      node.next = previous.next;
      previous.next = node;
    }

    this.length++;
    return true;
  }

  removeAt(position) {
    // Reject invalid positions.
    if (position < 0 || position >= this.length) {
      return undefined;
    }

    let removedNode;

    // Remove the first node.
    if (position === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let previous = this.head;

      for (let i = 0; i < position - 1; i++) {
        previous = previous.next;
      }

      removedNode = previous.next;
      previous.next = removedNode.next;
    }

    this.length--;

    return removedNode.element;
  }

  indexOf(element) {
    // Traverse and return the matching position.
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.element === element) {
        return index;
      }

      current = current.next;
      index++;
    }

    // Return -1 when the element is absent.
    return -1;
  }

  remove(element) {
    // Reuse indexOf and removeAt.
    const position = this.indexOf(element);

    if (position === -1) {
      return undefined;
    }

    return this.removeAt(position);
  }

  isEmpty() {
    // Return true when no nodes exist.
    return this.length === 0;
  }

  size() {
    // Return the number of nodes.
    return this.length;
  }

  toString() {
    // Traverse and return all elements as text.
    const elements = [];
    let current = this.head;

    while (current !== null) {
      elements.push(current.element);
      current = current.next;
    }

    return elements.join(', ');
  }
}

console.log('\nPART D: COMPLETED REQUESTS');

const completedRequests = new LinkedList();

// Append the three required requests.
completedRequests.append('Ticket #401 - Account Activated');
completedRequests.append('Ticket #402 - Printer Connected');
completedRequests.append('Ticket #403 - Antivirus Updated');

// Insert Ticket #400 at position 0.
completedRequests.insert(
  0,
  'Ticket #400 - Computer Diagnosed'
);

// Insert Ticket #405 at the end using insert().
completedRequests.insert(
  completedRequests.size(),
  'Ticket #405 - Browser Updated'
);

// Display the complete list.
console.log('Complete List:', completedRequests.toString());

// Search for Ticket #402.
console.log(
  'Index of Ticket #402:',
  completedRequests.indexOf('Ticket #402 - Printer Connected')
);

// Remove the item at position 1.
console.log(
  'Removed at Position 1:',
  completedRequests.removeAt(1)
);

// Remove Ticket #403 by value.
console.log(
  'Removed by Value:',
  completedRequests.remove(
    'Ticket #403 - Antivirus Updated'
  )
);

// Display the final list and size.
console.log('Final List:', completedRequests.toString());
console.log('Final Size:', completedRequests.size());
```

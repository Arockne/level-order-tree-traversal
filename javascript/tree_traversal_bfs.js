class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function findDepth(root) {
  if (root === null) {
    return 0;
  }
  if (root.left === null && root.right === null) {
    return 0;
  }

  let depth = 0
  let left = root.left
  let right = root.right
  while(left !== null || right !== null) {
    if (left !== null) {
      left = left.left
    }
    if (right !== null) {
      right = right.right
    }
    depth += 1
  }

  return depth;
}

function levelOrderTraversal(root) {
  const queue = root !== null ? [root] : [];
  const result = [];

  while(queue.length) {
    const node = queue.shift()
    result.push(node.value)
    if (node.left) {
      queue.push(node.left)
    }
    if (node.right) {
      queue.push(node.right)
    }
  }

  return result

  // if (root === null) {
  //   return []
  // }
  // if (root.left === null && root.right === null) {
  //   return [root.value]
  // }
  // //find the deepest depth
  // const depth = findDepth(root)

  // //initialize nodes to an array off arrays have the root be the first index
  // const levels = [[root]]

  // //iterate over nodes until the array of arrays is of deepest depth
  // for (let i = 0; levels.length <= depth; i++) {
  //   levels.push([])
  //   //iterate over the current level
  //   for (const node of levels[i]) {
  //     //if left node is not null
  //     if (node.left !== null) {
  //       //store reference of left node
  //       levels[i+1].push(node.left)
  //     }
  //     //if right node is not null
  //     if (node.right !== null) {
  //       //store reference of right node
  //       levels[i+1].push(node.right)
  //     }
  //   }
  // }
  // //possible o(n)
  // //possible 0(n)
  
  // //reduce nodes to an array of values in the node order
  // // return levels.reduce((nodeValues, level) => {
  // //   level.forEach((node) => nodeValues.push(node.value))
  // //   return nodeValues
  // // },[])
  // return levels.flat().map(node => node.value) 
}

if (require.main === module) {
  let root = new Node(1, new Node(2), new Node(3));
  // add your own tests in here
  console.log("Expecting: [[1], [2, 3]]");
  console.log(levelOrderTraversal(root));

  console.log("");

  root = new Node(10, new Node(20, new Node(9), new Node(22)), new Node(30));

  console.log("Expecting: [[10], [20, 30], [9, 22]]");
  console.log(levelOrderTraversal(root));
}

module.exports = {
  Node,
  levelOrderTraversal
};

// Please add your pseudocode to this file
// And a written explanation of your solution

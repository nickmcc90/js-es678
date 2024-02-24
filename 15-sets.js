const exampleSet = new Set([1,1,1,1,2,2,2])

console.log(exampleSet.size);
// this should only print 2 because a set is with distinct values. 

console.log(exampleSet.delete(2)); // this returns true and deletes the two.


console.log(exampleSet.has(1)); // this'll return true.

exampleSet.clear() // this clears out the set.
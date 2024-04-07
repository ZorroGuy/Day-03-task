let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

// Convert objects to strings
let obj1String = JSON.stringify(obj1);
let obj2String = JSON.stringify(obj2);

// Sort the keys of the stringified objects
let sortedObj1String = Object.keys(obj1)
  .sort()
  .reduce((acc, key) => {
    acc[key] = obj1[key];
    return acc;
  }, {});

let sortedObj2String = Object.keys(obj2)
  .sort()
  .reduce((acc, key) => {
    acc[key] = obj2[key];
    return acc;
  }, {});

// Compare the sorted strings
if (sortedObj1String === sortedObj2String) {
  console.log("Objects are equal.");
} else {
  console.log("Objects are not equal.");
}

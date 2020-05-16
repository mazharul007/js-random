// shorthand object properties

const getStats = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((sum, r) => sum + r);
  const avg = sum / arr.length;

  return { max, min, sum, avg };
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(getStats(numbers));

// Computed property
const role = "Admin";
const person = "Mr. Walt";
const role2 = "Manager";
const person2 = "Skyler Walt"
const team = {  
  [role]: person,
};

// old syntax
team[role2]=person2;


const addProp = (obj, k, v) => {
  return { ...obj,
     [k]: v
}
}
const res = addProp(team,'Happy',':)');
console.log(res);


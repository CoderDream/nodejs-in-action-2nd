//auto return

let names = ['jack', 'jobs', 'nike'];

// names = names.map(function(name) {
//  return name + ' is coll.';
// });

names = names.map(name => name + ' is cool.');

console.log(names);
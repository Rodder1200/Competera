var Increment = function() {
  this.number = 1;
  this.valueOf = function() {
    return this.number++;
  };
};

var increment = new Increment();

console.log('val: ' + increment); // val: 1
console.log('val: ' + increment); // val: 2
console.log('val: ' + increment); // val: 3

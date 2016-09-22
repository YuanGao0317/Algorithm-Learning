function StackWithMin() {
  this.values = [];
  this.mins = [];
}

StackWithMin.prototype.push = function(value) {
  if (value <= this.mins[this.mins.length - 1] || !this.mins.length) {
    this.mins.push(value);
  }
  this.values.push(value);
};

StackWithMin.prototype.pop = function() {
  var poppedValue = this.values.pop();
  if (poppedValue === this.mins[this.mins.length - 1]) {
    this.mins.pop();
  }
  return poppedValue;
};

StackWithMin.prototype.peek = function() {
  return this.values[this.values.length - 1];
};

StackWithMin.prototype.min = function() {
  if (!this.min.length) {
    throw new Error("No minimum value.");
  }
  
  return this.min[this.min.length - 1];
};

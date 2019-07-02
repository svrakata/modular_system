var numbers = {
    numberA: 5,
    numberB: 10,
    sum: function(a) {
      console.log(this); // => true
      const calculate = () => {
        // this is window or undefined in strict mode
        console.log(this); // => false
        // return this.numberA + this.numberB;
      }
      return calculate();
    }
 };



 numbers.sum(); // => NaN or throws TypeError in strict mode

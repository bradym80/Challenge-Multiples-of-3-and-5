/**
 * sumOfAMultiple() sums of the multiples of 3 and 5 for any number passed in
 * @param  {Number} n Number that is to be used for calculating multiples up to that Number
 * @return {Number}
 */
exports.sumOfAMultiple = function( n ) {
  var sum = 0;

  /**
   * Created by mbrady on 10/8/15.
   */

//Set thyne local variables
  var multiplesof3 = 1;
  var multiplesof5 = 1;
  var multiplesof3array = [];
  var multiplesof5array = [];

  console.log("If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.");

//create array containing multiples of 3

  for (var i = 1; multiplesof3<n; i++ ){
    multiplesof3 = i * 3;
    if(multiplesof3<n) {
      multiplesof3array.push(multiplesof3);
    }
  }

//create array containing multiples of 5

  for (var j = 1; multiplesof5<n; j++ ){
    multiplesof5 = j * 5;
    if(multiplesof5<n) {
      multiplesof5array.push(multiplesof5);
    }
  }

//created combined array with no duplicates.

  function m(i,x) {
    h = {};
    f = [];
    for (a = 2; a--; i=x)
      i.map(function(b){
        h[b] = h[b] || f.push(b)
      })
    return f
  }
  var sortedCombinedArray = m(multiplesof3array,multiplesof5array).sort(function(a, b){return a-b});

//sum of all elements in the array.


  for(var k=0, q=sortedCombinedArray.length; k < q; k++)
  {
    sum += sortedCombinedArray[k];
  }

  console.log("sum of all elements in the array: " + sum);




  return sum;
};

/**
 *
 * FUNCTON IS DESCRIBED AS OBJECTS...
 * THERE FOR, FUNTIONS HAS ITS OWN PROPERTIES ...
 *
 * -> name, lenght
 *
 * WE CAN ALSO ADD OUR OWN FUNCTION PROPERTY.
 * NOTE : Properties of a function are not variblies
 *
 * HERE IS HOW WE DO IT....
 *
 * IN THIS TASK, WE WANT TO ADD TWO PROPERTY.
 *
 * SET set() : Sets the value of the function
 * DECREASE decrease() : Decrease the value of a function.
 * @Genius
 */

function makeCounter() {
  let count = 0;

  // OUR COUNTER THATS GONNA HAVE OUR OBJECT PROPERTIES.
  function counter() {
    return count;
  }

  //ADDING OUR set() and decrease() properties to our counter function..
  counter.set = (value) => {
    count = value;
  };

  //Pre decreament
  counter.decrese = () => --count;

  return counter;
}

let counter = makeCounter();
counter.set(10);
console.log(counter.decrese()); //Should print 9

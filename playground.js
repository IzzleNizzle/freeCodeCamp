function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  // console.log(Object.keys(collection[1]));
  // console.log(collection[0].hasOwnProperty('last'));

  for (let i = 0; i < collection.length; i++) {
    console.log('i')
    // If the source object has multiple keys, we'll need data to check if all of the variables have matches
    let sourceData = 0;

    // if source has multiple objects, multiple matches are required.
    if (Object.keys(source).length > 1) {
      console.log('greater than 0');

    }

    // Loop through as many objects are in the source argument
    for (let j = 0; j < Object.keys(source).length; j++) {
      console.log('test')




      // if collection array i key matches the source key
      if (collection[i].hasOwnProperty(Object.keys(source)[j])) {
        
        // Now that we have matching keys, do we have matching values?

      }

    }  



    // else only one match is required to add to data array


  }
  
  
  // how ot catch multiple objects in source argument
  // this returns an array of the object keys
  console.log(Object.keys(source).length);




  // Only change code above this line
  return arr;
}

// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { "apple": 1, "bat": 2 });

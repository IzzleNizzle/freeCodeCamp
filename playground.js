function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  // console.log(Object.keys(collection[1]));
  // console.log(collection[0].hasOwnProperty('last'));

  for (let i = 0; i < collection.length; i++) {
    

    // ### if source has multiple objects, multiple matches are required.
    if (Object.keys(source).length > 1) {
      // If the source object has multiple keys, we'll need data to check if all of the variables have matches
      let sourceData = 0;
      // console.log('greater than 0');

      // Loop through as many objects are in the source argument
      for (let j = 0; j < Object.keys(source).length; j++) {
        // console.log('test')

        // if collection array i key matches the source key
        // match key's, if so add to source data
        if (collection[i].hasOwnProperty(Object.keys(source)[j])) {


          // This is the value on the 'collection' side 
          // console.log(collection[i][Object.keys(source)[j]])
          
          // this is the value on the source side
          // console.log(source[Object.keys(source)[j]]);

          // Last check, if all keys AND values match, then send signal for match
          if (collection[i][Object.keys(source)[j]] === source[Object.keys(source)[j]]) {

            sourceData++;
          }

        }


      }  

      // if source data === source object key length, then there is a match in the object
      if (sourceData === Object.keys(source).length) {
        arr.push(collection[i]);
        // console.log('test')
      }

      
    } 
      else {
        // else only one match is required to add to data array
        // if collection array i key matches the source key
        // match key's, if so add to source data
        if (collection[i].hasOwnProperty(Object.keys(source)[0])) {


          // Last check, if all keys AND values match, then send signal for match
          if (collection[i][Object.keys(source)[0]] === source[Object.keys(source)[0]]) {

          console.log('if statement')
            arr.push(collection[i]);
            // sourceData++;
          }


        }

      }





  }
  
  console.log(arr)
  // how ot catch multiple objects in source argument
  // this returns an array of the object keys
  // console.log(Object.keys(source).length);




  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { "first": "Romeo", "last": "Montague" });

function destroyer(arr) {
  // console.log(arguments[1]);
    // create data variable to store indexes of variables that need to be removed
    let deleteMe = [];
  
    // loop through the array as many times as there are more than one arguments sent to this function
    for (let i = 1; i < arguments.length; i++) {
      // console.log(arguments[i]);
      // console.log(i);
  
      // loop through entire array and find matches of the argument[i] variable
      // I feel like this was a cheap fix, i want to be able to go back and just do it differnet like this. 
      // copy the array first of all, run the loops off the object that is not being changed, not when it is being changed. 
      // if you run a loop on an array that is being changed, you run the risk of an off by one error.
      for (let j = 0; j <= arr.length; j ++){
        // using indexOf method, find indexes of provided array that match the additional arguments
      if (arr.indexOf(arguments[i]) >= 0) {
        // console.log(arguments[i]);
        arr.splice(arr.indexOf(arguments[i]), 1);
        // when a match is found, add the index to the data variable
        // deleteMe.push(arr.indexOf(arguments[i]));
      }
      }
      
   
    }
      console.log (arr);
  
    // once all filtering is finished, sort data variable from highest to lowest
    // will this sorting be necessary? yes
    // function sortNumber(a,b) {
    //   return b - a;
    // }
  
    // deleteMe = deleteMe.sort(sortNumber);
  
    // console.log (deleteMe);
    // console.log(arr)
    // console.log(deleteMe)
    
    // loop through data array and remove each index of the array
    // for (let i = 0; i < deleteMe.length; i++) {
    //   arr.splice(deleteMe[i], 1);
    // }
    // console.log(arr)
    // Return cleansed array //
    return arr;
  }
  
  destroyer([2, 3, 2, 3], 2, 3);
// OPTION 1 **********************

/* function steps(number) {
  let stair = '';
  for (let row=0; row < number; row++){
    for(let column=0; column < number; column++){
      if (column <= row) {
          stair += '#';
      }
      else {
          stair += ' ';
      }
    }
  }
  console.log(stair);
}

steps(3); */

// OPTION 2: Recurssion **********************

function steps(num, row=0, stair=''){

  // First we check base case: num and row are equal
  if(num === row){
    return;
  }

  // We check case when we call the function again 
  // Parameters change: row + 1
  if(num === stair.length){
    console.log(stair);
    return steps(num, row+1);
  }

  // Logic to add: console logs '#' and ' ';
  if(stair.length <= row){
    stair += '#';
  } else {
     stair +=' ';
  }
  
  steps(num, row, stair);
}

// Example:
steps(5);
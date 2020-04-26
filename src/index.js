// Recurssion **********************

function steps(col, row=0, stair=''){

  // First we check base case: col and row are equal
  if(col === row){
    return;
  }

  // We check case when we call the function again 
  // Parameters change: row + 1
  if(col === stair.length){
    console.log(stair);
    return steps(col, row+1);
  }

  // Logic to add: console logs '#' and ' ';
  if(stair.length <= row){
    stair += '#';
  } else {
     stair +=' ';
  }
  
  steps(col, row, stair);
}

// Example:
steps(5);

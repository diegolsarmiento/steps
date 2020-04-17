function steps(number) {
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

steps(3);

function pyramid(n) {
    
  if (n < 3 || n > 26) {
    console.log("please enter a number between 3 and 26");
    return;
  }

  let isEven = n % 2 == 0;
  let topRows = Math.round(n / 2);
  let bottomRows = isEven ? Math.round(n / 2) : Math.round(n / 2) - 1;
  let extraSpace = isEven ? 0 : 1;
  let letterNum = 0;
  const alphabetString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 1; i <= topRows; i++) {
    console.log(
      " ".repeat(topRows - i) +
        alphabetString[letterNum].repeat(1 + (i - 1) * 2) +
        " ".repeat(topRows - i)
    );

    letterNum += 1;
  }

  for (let j = bottomRows; j > 0; j--) {
    console.log(
      " ".repeat(bottomRows - j + extraSpace) +
        alphabetString[letterNum].repeat(1 + (j - 1) * 2) +
        " ".repeat(bottomRows - j)
    );
    letterNum += 1;
  }
}

console.log(pyramid(1));
console.log(pyramid(3));
console.log(pyramid(6));
// console.log(pyramid(26));

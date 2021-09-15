
// TypeScript offers a way to define specific types for inputs,
// which describe exactly what type of input is acceptable.
// On top of that, TypeScript can also show the info of the accepted values already on editor level.

// creating own types
type Operation = "multiply" | "divide" | "add";

// now, the Operation type only accepts only three kinds of input, exactly the 3 strings
// using union |, able to accpet multiple values, types (number, string also can)

// set type for function to return string or number
type Result = string | number | undefined;

const calculator = (a: number, b: number, op: Operation): Result => {
  if (op === "multiply") {
    return a * b;
  } else if (op === "add") {
    return a + b;
  } else if (op === "divide") {
    if (b === 0) return "can't divide by 0!";
    return a / b;
  }
};

// add error handling
// add default case to handle unknown types
const calculatorRefined = (a: number, b: number, op: Operation): Result => {
  switch (op) {
    case "multiply":
      return a * b;
    case "divide":
      if (b === 0) throw new Error("Can't divide by 0!");

      return a / b;
    case "add":
      return a + b;
    default:
      throw new Error("unknown operation type: " + op);
  }
};

try {
  console.log(calculatorRefined(1, 5, "divide"));
} catch (e) {
  console.log("Something went wrong, error message: ", e);
}

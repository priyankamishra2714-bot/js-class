function fizzBuzz() {
  for (let i = 1; i <= 20; i++) {

    let result = "";

    if (i % 3 === 0) {
      result += "Fizz";
    }

    if (i % 5 === 0) {
      result += "Buzz";
    }

    if (result === "") {
      result = i;
    }

    console.log(result);
  }
}

fizzBuzz();

function triangle_pattern(n) {
  for (let i = 1; i <= n; i++) {
    console.log("*".repeat(i));
  }
}

function reverse_triangle_pattern(n) {
  for (let i = n; i >= 1; i--) {
    console.log("*".repeat(i));
  }
}

function reverse_triangle(n) {
  for (let i = n; i >= 1; i--) {
    console.log(
      " "
        .repeat(n - i)
        .concat("*".repeat(i))
        .concat("*".repeat(i - 1))
    );
  }
}

function triangle(n) {
  for (let i = 1; i <= n; i++) {
    console.log(
      " "
        .repeat(n - i)
        .concat("*".repeat(i))
        .concat("*".repeat(i - 1))
    );
  }
}

triangle_pattern(5);
console.log("\n");
reverse_triangle_pattern(5);
console.log("\n");
reverse_triangle(5);
console.log("\n");
triangle(5);

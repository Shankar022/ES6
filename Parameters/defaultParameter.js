//Parameters (or formal parameters) are given in the function declaration, whereas Arguments (or actual parameters) are passed to the function.

 foo = (a = 10, b = 20) => {
    console.log(a, b);
}
foo();            // 10 20
foo(5, 10);  // 5 10
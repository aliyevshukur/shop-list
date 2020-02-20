 Var is the first and the oldest way to define variables. One of the obvious differences from let and const
 is that var is function-scoped. That means if we define our variables inside the function, we will able to access
 to this variable only inside the function. Outside of this function that variable is not accessible.When we run .js
 file JavaScript read this file twice. For the first time  it looks for var and initialize these variables. For example
 if we write var myVariable = 'Gogi'; we will get var myVariable; which is equal to undefined. After initializing value 
 will be assigned. This kind of approach can cause some bugs. So, in 2015 with ES6 let and const introduced.Despite of 
 let and const is block-scoped. This means if we define variable inside the blocks such as if, while, for that variable
 can't be accessed from outside of this block. But what is difference between let and const? Actually it is simple. Const 
 give us opportunity to define constant  variables that don't let us to define new value to it. And most of the cases it is
 named with uppercase names.  
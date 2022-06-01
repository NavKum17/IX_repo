function print_fib(first_x = 10){
    fib_arr = [0,1]
    for(let i = 0; i < first_x; i++){
        if (i === 0 || i === 1){
            console.log(i)
        }
        else{
            len = fib_arr.length
            next_element = fib_arr[len-1] + fib_arr[len-2]
            fib_arr.push(next_element)
            console.log(next_element)
        }
    }
}

// you can add an argument to the function call to print out 
//any number of fibonacci numbers, the default is 10.

print_fib()
//FIZZ BUZZ

for (let i = 1; i <= 100; i++) {
  if ( i % 3 == 0 && i % 5 == 0) {
    console.log('Fizz Buzz');
  } else if ( i % 3 == 0) {
    console.log('Fizz');
  } else if ( i % 5 == 0) {
    console.log('Buzz');
  }
  console.log(i); 
}

/*
1
2
'Fizz'
4
'Buzz'
'Fizz'
7
8
'Fizz'
'Buzz'
11
'Fizz'
13
14
'Fizz Buzz'
16
etc...
*/ */
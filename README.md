# Started Relearning JavaScript from Scratch

## Data Types in JavaScript (23rd May 2024)
<hr />
There are mainly two types of data types based on how data is inserted and accessed from memory:

- Primitive
- Non-primitive

<hr />

### Primitive:

> "Primitive data types are call by vale." 

> "JavaScript is the world's most misunderstood programming language." - Douglas Crockford

> "Any application that can be written in JavaScript, will eventually be written in JavaScript." - Jeff Atwood

There are 7 types of Primitive data types:

- String
- Number
- Boolean
- Null. Null = empty != empty string != 0
- Undefine
- Symbol. It is used to make a value `unique`.
- BigInt

<hr />

### Reference (Non-Primitive):

> "Here reference directly allocated to us"

> "This is aslo known as non-primitive data types"

There are mainly 3 types of Non-primitive: 

- Array
- Objects. This is very very important. If you master it you good to go.
- Functions


> "JavaScript is a dynamically typed language. This means that variable types are determined at runtime rather than at compile-time. In dynamically typed languages, you don't have to declare the type of a variable when you create it. The type of a variable is determined based on the value assigned to it and can change as the program runs."

#### Return type of variables in JavaScript:

> "Return type of variables in JavaScript:"

- Primitive Datatypes
   - Number => number
   - String  => string
   - Boolean  => boolean
   - null  => object. This is a bug of Js. Actually 
   - undefined  =>  undefined
   - Symbol  =>  symbol
   - BigInt  =>  bigint

- Non-primitive Datatypes
   - Arrays  =>  object
   - Function  =>  function
   - Object  =>  object

### Note:

> "In JavaScript, `typeof null` returns `'object'`, which is a historical bug and not an accurate reflection of null's type. `null` is actually a primitive value that represents the intentional absence of any object value. This quirk has been retained in the language for compatibility reasons. For accurate type checking of `null`, it's better to use strict equality (`value === null`)."


## Memory:

> "There are two types of memory:"

- Stack
- Heap

### Stack:

> Stack is used by Primitiv data types.

### Heap:

> Reference is used

<hr />

## String (23rd May '24 => 20:47:54):

Nowdays `'backticks'` is used for moderm Js String.
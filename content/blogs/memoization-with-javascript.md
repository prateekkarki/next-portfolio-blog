## Introduction

Memoization is a concept frequently used in developing many applications. Even if you might not have used it directly, memoization is already used in many popular frameworks.

If you come from a JavaScript/React ecosystem, I'm sure you've heard of React.Memo or useMemo . These are used to speed up rendering by saving up a previously rendered version of a component. We are going to learn the same memorization technique to see how it works internally and how you might implement it in one for your projects.

## What is Memoization?

Memoization is a programming technique that attempts to increase a function's performance by caching its previously computed results. This concept is even more important in functional programming. In many instances, you'll reuse functions within a program. Depending on the context a function could be called thousands even millions of times. With the concept of Memoization, when a function is called with some parameters `(x, y, ...)`, its result will be calculated and then stored on the memory. So the next time the function is called with the same parameters `(x, y, ...)`, the result is returned from previously stored values.

![Memoization flowchart](https://res.cloudinary.com/pratiek/image/upload/v1622908398/Blog/Memoization/memoization-flowchart_dyspct.svg)

## Example problem

Consider the following recursive Fibonacci function. Given a positive integer 'n', this function returns the Fibonacci number at nth position.

```javascript
const fibonacci = (n) => {
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

This function works great on paper, but you can see the problems pretty soon once you start running on a computer. I have benchmarked some of the results for this function.

| Function call | Execution time (ms) |
| ------------- | ------------------- |
| fibonacci(10) | 0.038               |
| fibonacci(20) | 1.17                |
| fibonacci(30) | 12.61               |
| fibonacci(40) | 1383.20             |
| fibonacci(45) | 15234.53            |

As you can see there is an exponential increase in execution time for the function as the value of n increases. For n = 20 it took 1.17 ms to compute while for n = 40 it took 1383.2 ms. I couldn't even get the result for n = 50, it just took so long that the execution didn't even complete for 15 minutes and I just had to kill the process. By my estimation, it would take around 30 to 35 minutes or 126000 ms to compute that result.

So this is a pretty bad implementation, and if you look closely, you might figure the problem with the function. If you check the fifth line of the function where we return the values by recursive calls is where the problem lies. You see for n <= 2 things are straightforward, but for n = 3, the function requires values from fibonacci(2) and fibonacci(1) as well. And this goes on even more as we go forward. Let's say for n = 6, it first requires values from fibonacci(5) and fibonacci(4), and fibonacci(5) in turn requires values from fibonacci(4) and fibonacci(3) and so on. You might have noticed that we already need fibonacci(4) twice. In this implementation, it will be calculated each time it is called. And its calculation requires the whole tree to be called going from n= 4 to n = 2\. The same happens going forward in this kind of implementation, each increase in value of n adds a whole tree of execution paths to be followed and calculated in order to get additional results. This is an exponential increase in time and gets to O(2^n) complexity.

## Solution using memoization

Now let's solve this problem using memoization. Since we are using JavaScript, we can just use a plain javascript object to store the results of previously calculated results. We will set the parameter, or 'n' as the key and set its result as the value in the memo object. This will bypass the need to recalculate the values for previously calculated parameters and vastly increase the performance.

```javascript
const memoizedFib = (n, memo = {}) => {
  if (n in memo)  return memo[n];
  if (n <= 2) return 1;
  memo[n] = memoizedFib(n - 1, memo) + memoizedFib(n - 2, memo);
  return memo[n];
}
```

This implementation already looks pretty neat. we didn't have to do much here, all we did was added a memo with an empty javascript object for initialization. and passed it in each of our function calls. In Javascript, objects are always passed by reference so the functions always get the updated memo object which is great. Now let's check the execution times for this implementation.

| Function call     | Execution time (ms) |
| ----------------- | ------------------- |
| memoizedFib(10)   | 0.008               |
| memoizedFib(20)   | 0.009               |
| memoizedFib(30)   | 0.010               |
| memoizedFib(40)   | 0.011               |
| memoizedFib(45)   | 0.011               |
| memoizedFib(1000) | 0.152               |

Wow! this is blazing fast. Even for n = 1000, the result was calculated in one-thousandths of a second. It would be impossible to calculate on a normal machine without using memoization. The number of calculations going in the memorized function is many times low. In fact, this implementation just has O(n) time complexity as there is only a linear increase in the number of operations required as n is increased.

## Conclusion

So that was pretty powerful stuff. We immensely improved the performance of our function by memoizing it. Memoization is a very useful concept and can be used in any language. For functions having multiple arguments, you can stringify the arguments and use that as the key on your memo object. If you want to implement it in your projects, you can implement it from scratch. Or you can also use some memoization implementations you can find. For JavaScript, there is a great implementation provided by lodash that you can directly use in your projects.

There are a few things that must be kept in mind when implementing memoization. It is best to use memoization only in cases where the same things are getting recalculated. If that's not the case there is no point in using it. Also, by storing old results, memoized functions consume additional memory. In the example we used, the additional memory consumption is unbounded. If memory usage is a concern, then a fixed-size cache should be used.

In the article, we talked about Memoization, its implementation, performance benefits, and limitations. I hope this has elevated your understanding of the concept of Memoization and will help you in optimizing your solutions.

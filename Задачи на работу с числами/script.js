'use strict';

function gcd(a, b) {
    if (a === 0 || b === 0) return;

    while (a != b) {
        if (a > b) {
            a = a - b;
        } else {
            b = b - a;
        }
    }

    return a;
}

// 1.1
function areCoprime(a, b) {
    if ((a <= 0) || (b <= 0) || !Number.isInteger(a) || !Number.isInteger(b)) {
        console.log("Числа должны быть натуральными!");
        return;
    } else return (gcd(a, b) === 1);
}

// 1.2
function isPrime (a) {
    if (a < 2 || !Number.isInteger(a)) {
        console.log("Число должно быть натуральным и больше 1!");
        return;
    }

    if (a === 2) return true;

    if (a % 2 === 0) return false;

    for (let i = 3; i * i <= a; i += 2) {
        if (a % i === 0) return false;
    }

    return true;
}

// 1.3
function sieveOfEratosthenes(N) {
    if (N < 1 || !Number.isInteger(N)) {
        console.log("Число должно быть натуральным!");
        return;
    }

    let prime = new Array(N + 1).fill(true);

    prime[0] = false;
    prime[1] = false;

    for (let i = 2; i * i <= N; i++) {
        if (prime[i]) {
            for (let j = i * i; j <= N; j += i) {
                prime[j] = false;
            }
        }
    }

    let primes = [];

    for (let i = 2; i <= N; i++) {
        if (prime[i]) {
            primes.push(i);
        }
    }

    return primes;
}

// 1.4
function firstNprimes(N) {
    if (N <= 0 || !Number.isInteger(N)) {
        console.log("Число должно быть натуральным!");
        return;
    }

    let primes = [2];
    let num = 3;

    while (primes.length < N) {
        if (isPrime(num)) {
            primes.push(num);
        }
        num += 2;
    }

    return primes;
}

// 1.5
function findDivisors(N) {
    if (N <= 0 || !Number.isInteger(N)) {
        console.log("Число должно быть натуральным!");
        return;
    }

    let divisors = [];

    for (let i = 1; i * i <= N; i++) {
        if (N % i === 0) {
            divisors.push(i);

            if (i != N / i) {
                divisors.push(N / i);
            }
        }
    }

    divisors.sort((a, b) => a - b);

    return divisors;
}

// 1.6
function primeFactorization(N) {
    if (!Number.isInteger(N)) {
        console.log("Число должно быть целым!");
        return;
    }

    if (N <= 1) return [];

    let factors = [];
    let divisors = 2;

    while (divisors * divisors <= N) {
        let count = 0;

        while (N % divisors === 0) {
            N = N / divisors;
            count++;
        }

        if (count > 0) {
            factors.push([divisors, count]);
        }

        divisors++;
    }

    if (N > 1) {
        factors.push([N, 1]);
    }

    return factors;
}

// 1.7
function findPerfectNumbers(N) {
    if (N <= 0 || N >= 5 || !Number.isInteger(N)) {
        console.log("Число должно быть целым от 1 до 4!");
        return;
    }

    let result = [];
    let num = 2;

    while (result.length < N) {
        let divisors = findDivisors(num);
        let sum = 0;

        for (let i = 0; i < divisors.length; i++) {
            if (divisors[i] != num) {
                sum += divisors[i];
            }
        }

        if (sum === num) {
            result.push(num);
        }
        num++;
    }

    return result;
}

// 1.8
function sumOfThreePrimes(N, M) {
    if (!Number.isInteger(N) || !Number.isInteger(M) || N <= 0 || M <= 0) {
        console.log("N и M должны быть натуральными числами!");
        return;
    }

    if (N > M) {
        console.log("N не должен быть больше M!");
        return;
    }

    let result = [];

    for (let num = N; num <= M; num++) {
        if (num % 2 != 0) {
            let found = false;
            
            for (let a = 2; a < num && !found; a++) {
                if (!isPrime(a)) continue;

                for (let b = 2; b < num && !found; b++) {
                    if (!isPrime(b)) continue;

                    let c = num - a - b;

                    if (c > 1 && isPrime(c)) {
                        result.push(num);
                        found = true;
                    }
                }
            }
        }
    }
    
    return result;
}

// 1.9
function isFibonacci(N) {
    if (N < 0 || !Number.isInteger(N)) return false;

    let a = 0;
    let b = 1;

    while (a < N) {
        let next = a + b;
        a = b;
        b = next;
    }

    return a === N;
}

// 1.10
function doubleFactorial(N) {
    if (!Number.isInteger(N) || N < 0) {
        console.log("N должно быть неотрицательным целым числом!");
        return;
    }

    let result = 1;

    if (N % 2 === 0) {
        for (let i = 2; i <= N; i += 2) {
            result *= i;
        }
    } else {
        for (let i = 1; i <= N; i += 2) {
            result *= i;
        }
    }

    return result;
}

// 1.11
function findTriples(N, M) {
    if (!Number.isInteger(N) || !Number.isInteger(M) || N < 1 || M < 1) {
        console.log("N и M должны быть целыми положительными числами!");
        return;
    }

    if (N > M) {
        console.log("N не должен быть больше M!");
        return;
    }

    let triples = [];

    for (let a = N; a <= M; a++) {
        for (let b = a + 1; b <= M; b++) {
            for (let c = b + 1; c <= M; c++) {
                if (a ** 2 + b ** 2 === c ** 2) {
                    triples.push([a, b, c]);
                }
            }
        }
    }

    return triples;
}
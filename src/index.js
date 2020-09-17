import './styles/main.css';
import { createCb, foo } from './acynchronous-programming/task1';
import { failureCb, parseJSON, successCb } from './acynchronous-programming/task2';
import { delay } from './acynchronous-programming/task3';
import { getUsers } from './acynchronous-programming/task4';
import { getAllDataParallel, getDataSequential, urls } from './acynchronous-programming/task5';
import { test } from './acynchronous-programming/task6';
import { fooTask7 } from './acynchronous-programming/task7';
import { task8 } from './acynchronous-programming/task8';
import { task9 } from './acynchronous-programming/task9';
import { Musician } from './acynchronous-programming/task10';

// Task 1
console.log('===1===');
foo(5, createCb('cb'));
foo(20, createCb('cb'));

// Task 2
console.log('===2===');
parseJSON('{"x": 10}', successCb, failureCb);
parseJSON('{x}', successCb, failureCb);

// Task 3
delay(1000).then(value => console.log(`Done with ${value}`));

// Task 4
getUsers();

// Task 5
getAllDataParallel(urls);
getDataSequential(urls);

// Task 6
test(500);

// Task 7
fooTask7();

// Task8
task8('ht://jsonplaceholder.typicode.com/users');
task8('https://jsonplaceholder.typicode.com/users');

// Task 9
task9();

// Task 10
const musician = new Musician('https://jsonplaceholder.typicode.com/albums');
musician.getAlbums().then(albums => console.log(albums));

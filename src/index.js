import './styles/main.css';
import { createCb, foo } from './acynchronous-programming/task1';
import { failureCb, parseJSON, successCb } from './acynchronous-programming/task2';
import { delay } from './acynchronous-programming/task3';
import { getUsers } from './acynchronous-programming/task4';
import { getAllDataParallel, getDataSequential, urls } from './acynchronous-programming/task5';
import { test } from './acynchronous-programming/task6';

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

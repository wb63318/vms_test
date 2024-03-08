const { test, expect } = require('@playwright/test');
import { faker } from '@faker-js/faker';

const firstRandom = faker.number.int();

console.log(firstRandom);


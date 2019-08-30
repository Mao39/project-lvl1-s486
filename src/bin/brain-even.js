#! /usr/bin/env node

import greet, { even } from '..';

const name = greet('brain-even');
even(name);

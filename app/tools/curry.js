/* @flow */
'use strict';

export const curry = (func, ...first) => (...second) => func(...first, ...second)

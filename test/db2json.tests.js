'use strict';
const test = require('tap').test;
const db2json = require('../db2json');

test('merge entries', t => {
	t.plan(1);
	t.deepEqual(
		db2json.createLookupTable([[1, 'Assignee A']], [[1, 2, 'Film A']]),
		{
			1: {
				manufacturer: [{name: 'Assignee A'}],
				products: {2: [{name: 'Film A'}]}
			}
		});
});

'use strict';
const {test} = require('tap');
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

test('assert invalid manufacturer name', t => {
	t.plan(1);
	t.throws(() => db2json.createLookupTable([[1, ' ']], []));
});

test('assert invalid product name', t => {
	t.plan(1);
	t.throws(() => db2json.createLookupTable([[1, 'Assignee A']], [[1, 2, ' ']]));
});

test('assert product without manufacturer', t => {
	t.plan(1);
	t.throws(() => db2json.createLookupTable([[1, 'Assignee A']], [[2, 1, 'Film X']]));
});

test('assert invalid manufacturer dx-part1', t => {
	t.plan(3);
	t.throws(() => db2json.createLookupTable([['X', 'Assignee A']], []));
	t.throws(() => db2json.createLookupTable([[-1, 'Assignee A']], []));
	t.throws(() => db2json.createLookupTable([[null, 'Assignee A']], []));
});

test('assert invalid product dx-part2', t => {
	t.plan(3);
	t.throws(() => db2json.createLookupTable([[1, 'Assignee A']], [[1, 'X', 'Film X']]));
	t.throws(() => db2json.createLookupTable([[1, 'Assignee A']], [[1, -1, 'Film X']]));
	t.throws(() => db2json.createLookupTable([[1, 'Assignee A']], [[1, null, 'Film X']]));
});

test('detect manufacturer duplicates', t => {
	t.plan(1);
	t.throws(() => db2json.createLookupTable([[1, 'Assignee A'], [1, 1, 'aSSIGNEE a']], []));
});

test('merge manufacturer overloads', t => {
	t.plan(1);
	t.deepEqual(
		db2json.createLookupTable([[1, 'Assignee B'], [1, 'Assignee A']], []),
		{
			1: {
				manufacturer: [{name: 'Assignee A'}, {name: 'Assignee B'}],
				products: {}
			}
		});
});

test('detect product duplicates', t => {
	t.plan(1);
	t.throws(() => db2json.createLookupTable([[1, 'Assignee A']], [[1, 2, 'Film A'], [1, 2, 'fILM a']]));
});

test('merge product overloads', t => {
	t.plan(1);
	t.deepEqual(
		db2json.createLookupTable([[1, 'Assignee A']], [[1, 2, 'Film A - New'], [1, 2, 'Film A']]),
		{
			1: {
				manufacturer: [{name: 'Assignee A'}],
				products: {2: [{name: 'Film A'}, {name: 'Film A - New'}]}
			}
		});
});

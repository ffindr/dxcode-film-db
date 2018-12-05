'use strict';
const {test} = require('tap');
const db = require('../database');

test('database contains entries', t => {
	t.plan(1);
	t.ok(Object.keys(db).length > 0, 'no entries');
});

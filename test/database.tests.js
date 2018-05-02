const test = require('tap').test;
const db = require('../database.js');

test('database contains entries', t => {
	t.plan(2);
	t.ok(db.products.length > 0, 'no products found');
	t.ok(db.manufacturers.length > 0, 'no manufacturers found');
});

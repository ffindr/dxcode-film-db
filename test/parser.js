const test = require('tap').test;
const dxCode = require('..');

test('parse dx-number', t => {
	t.plan(2);
	const result1 = dxCode.parseDxNumber('602003');
	t.equal(result1.dxPart1, 12); // FUJIFILM Corporation
	t.equal(result1.dxPart2, 8); // FUJICOLOR SUPERIA VENUS 400
});

test('detect invalid dx-number', t => {
	t.plan(3);
	t.throws(() => dxCode.parseDxNumber('123'));
	t.throws(() => dxCode.parseDxNumber(12334));
	t.throws(() => dxCode.parseDxNumber('-12345'));
});

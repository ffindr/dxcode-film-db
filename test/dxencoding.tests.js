'use strict';
const {test} = require('tap');
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

test('map exposure latitude', t => {
	t.plan(4);
	t.equal(dxCode.getExposures(1), 12); // https://en.wikipedia.org/wiki/DX_number#DX_barcode
	t.equal(dxCode.getExposures(4), 36);
	t.throws(() => dxCode.getExposures(0));
	t.throws(() => dxCode.getExposures(11));
});

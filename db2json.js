'use strict';

function createLookupTable(manufacturers, products) {
	const table = {};

	manufacturers.forEach(item => {
		const dxPart1 = toIndex(item[0]);
		const m = table[dxPart1] || {manufacturer: [], products: {}};
		pushManufacturer(m.manufacturer, item[1]);
		table[dxPart1] = m;
	});

	products.forEach(item => {
		const m = table[toIndex(item[0])];
		const dxPart2 = toIndex(item[1]);
		const p = m.products[dxPart2] || [];
		pushProduct(p, item[2]);
		m.products[dxPart2] = p;
	});

	return table;
}

function toIndex(value) {
	const num = Number(value);
	if (!value || Number.isNaN(num) || num < 0) {
		throw new Error(`Invalid dx-part: "${value}"`);
	}
	return num;
}

function isNullOrWhiteSpace(str) {
	return str === null || str.replace(/\s/g, '').length === 0;
}

function strCompare(a, b) {
	return a < b ? -1 : (a > b ? 1 : 0);
}

function pushManufacturer(table, name) {
	if (isNullOrWhiteSpace(name)) {
		throw new Error('Invlaid manufacturer name');
	}
	const key = name.toUpperCase();
	if (table.filter(m => m.name.toUpperCase() === key).length > 0) {
		throw new Error(`Duplicate manufacturer: "${name}"`);
	}
	table.push({name});
	table.sort((a, b) => strCompare(a.name, b.name));
}

function pushProduct(table, name) {
	if (isNullOrWhiteSpace(name)) {
		throw new Error('Invlaid product name');
	}
	const key = name.toUpperCase();
	if (table.filter(m => m.name.toUpperCase() === key).length > 0) {
		throw new Error(`Duplicate product: "${name}"`);
	}
	table.push({name});
	table.sort((a, b) => strCompare(a.name, b.name));
}

module.exports = {
	createLookupTable
};

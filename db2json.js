'use strict';

function createLookupTable(manufacturers, products) {
	const table = {};

	manufacturers.forEach(item => {
		const m = table[item[0]] || {manufacturer: [], products: {}};
		m.manufacturer.push({name: item[1]});
		table[item[0]] = m;
	});

	products.forEach(item => {
		const m = table[item[0]];
		const p = m.products[item[1]] || [];
		p.push({name: item[2]});
		m.products[item[1]] = p;
	});

	return table;
}

module.exports = {
	createLookupTable
};

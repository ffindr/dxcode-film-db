function parseDxNumber(value) {
	const dxNumber = Number(value);

	if (value.length !== 6 || Number.isNaN(dxNumber) || dxNumber < 1) {
		throw new Error('Invalid dx-number');
	}

	const artCode = value.substring(0, 1);
	const digits2to5 = Math.trunc(dxNumber / 10) - (artCode * 10000);
	const dxPart2 = Math.trunc(digits2to5 % 16);
	const dxPart1 = Math.trunc((digits2to5 - dxPart2) / 16);
	const dxLength = value.substring(5);

	return {
		dxPart1, // ISO 1007, 3.7: Assigned by PIMA
		dxPart2, // ISO 1007, 3.7: Assigned by manufacturer to each product
		dxLength // ISO 1007, 3.8: Exposure latitude
	};
}

function getExposures(dxLength) {
	// Ambiguous research: ['12', '20 (18 - 23)', '24', '36', '9 - 11', '13 - 17', '25 - 29', '30 - 35', '37+']
	const lengthTable = [12, 20, 24, 36, 48, 60, 72];

	if (dxLength < 1 || dxLength > lengthTable.length - 2) {
		throw new Error('Invalid exposure latitude');
	}

	// The length of the film satisfactory in 32x24mm exposures.
	return lengthTable[dxLength - 1];
}

module.exports = {
	parseDxNumber,
	getExposures
};

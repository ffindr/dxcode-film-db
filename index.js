function parseDxNumber(value) {
	const dxNumber = Number(value);

	if (value.length !== 6 || Number.isNaN(dxNumber) || dxNumber < 1) {
		throw new Error('Invalid dx-number');
	}

	const artCode = value.substring(0, 1);
	const digits2to5 = Math.trunc(dxNumber / 10) - (artCode * 10000);
	const dxPart2 = Math.trunc(digits2to5 % 16);
	const dxPart1 = Math.trunc((digits2to5 - dxPart2) / 16);
	const exposures = value.substring(5);

	return {
		artCode,
		dxPart1,
		dxPart2,
		exposures
	};
}

module.exports = {
	parseDxNumber
};

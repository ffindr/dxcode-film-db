'use strict';
const fs = require('fs');
const db = require('./database.js');

fs.writeFileSync('data/dxcodes.json', JSON.stringify(db, null, 2), 'utf-8');

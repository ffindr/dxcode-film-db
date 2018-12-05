dxcode-film-db
==============

[![Build Status](https://travis-ci.org/ffindr/dxcode-film-db.svg?branch=master)](https://travis-ci.org/ffindr/dxcode-film-db) [![Coverage Status](https://coveralls.io/repos/github/ffindr/dxcode-film-db/badge.svg?branch=master)](https://coveralls.io/github/ffindr/dxcode-film-db?branch=master) [![Greenkeeper badge](https://badges.greenkeeper.io/ffindr/dxcode-film-db.svg)](https://greenkeeper.io/)

Database to decode the dx-number of analog 135-size photography film.

## Reorder csv files

```bash
cat <(head -n 1 data.csv) <(tail -n +2 data.csv | sort -h | uniq) > sorted.csv
```

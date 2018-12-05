dxcode-film-db
==============

[![Build Status](https://travis-ci.org/ffindr/dxcode-film-db.svg?branch=master)](https://travis-ci.org/ffindr/dxcode-film-db) [![Greenkeeper badge](https://badges.greenkeeper.io/ffindr/dxcode-film-db.svg)](https://greenkeeper.io/)

Database to decode the dx-number of analog 135-size photography film.

## Reorder csv files

```bash
cat <(head -n 1 data.csv) <(tail -n +2 data.csv | sort -h | uniq) > sorted.csv
```

dxcode-film-db
==============

Database to decode the dx-number of analog 135-size photography film.

## Reorder csv files

```bash
cat <(head -n 1 data.csv) <(tail -n +2 data.csv | sort -h | uniq) > sorted.csv
```

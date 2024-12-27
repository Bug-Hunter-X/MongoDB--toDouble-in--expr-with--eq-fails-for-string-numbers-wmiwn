```javascript
const query = {
  $expr: {
    $eq: [ { $toDecimal: '$field' }, 10 ]
  }
};

db.collection.find(query);
```
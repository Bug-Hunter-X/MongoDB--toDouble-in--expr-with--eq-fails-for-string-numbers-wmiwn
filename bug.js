```javascript
const query = {
  $expr: {
    $eq: [ { $toDouble: '$field' }, 10 ]
  }
};

db.collection.find(query);
```
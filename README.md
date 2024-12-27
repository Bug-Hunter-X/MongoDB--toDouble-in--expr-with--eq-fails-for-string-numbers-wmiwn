# MongoDB $toDouble in $expr with $eq fails for string numbers

This repository demonstrates a bug in MongoDB where using `$toDouble` within an `$expr` with `$eq` fails when comparing against a number if the field contains a string representation of a number. 

## Bug Description

The `$toDouble` operator is used to convert a string to a double. However, when used within an `$expr` with `$eq` to compare against a number, it fails if the field's value is a string representation of that number.  This happens even if the string representation is perfectly valid and convertible to a number.

## Reproduction

1.  Insert a document with a field containing a string representation of a number.
    ```javascript
    db.collection.insertOne({ field: "10" });
    ```
2.  Run the provided query (see `bug.js`). The query should return the document, but it doesn't due to this bug. 

## Solution

The solution involves using `$toDecimal` instead of `$toDouble`, which seems to handle this edge case better. Check out the solution in `bugSolution.js`.

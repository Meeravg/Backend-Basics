1.  Write Mongo query to retrieve the documents from the orders where the customer_id is 1.
ans - sampleData> db.orders.aggregate([{$match:{customer_id:1}}])
[
  {
    _id: 1,
    customer_id: 1,
    order_date: ISODate('2022-03-01T00:00:00.000Z'),
    ship_date: ISODate('2022-03-05T00:00:00.000Z'),
    status: 'shipped',
    total: 50.25
  }
]

2.  Write Mongo query to retrieve documents from the products where supplier_id is 3 .
ans sampleData> db.products.aggregate([{$match:{supplier_id:2}}])
[
  {
    _id: 2,
    name: 'Samsung Galaxy S21',
    category_id: 1,
    price: 799.99,
    quantity: 100,
    supplier_id: 2
  }
]

3.  Write Mongo query to retrieve the documents from the orders collection with "status": "shipped" .
ans- sampleData> db.orders.aggregate([{$match:{status:"shipped"}}])
[
  {
    _id: 1,
    customer_id: 1,
    order_date: ISODate('2022-03-01T00:00:00.000Z'),
    ship_date: ISODate('2022-03-05T00:00:00.000Z'),
    status: 'shipped',
    total: 50.25
  }
]

4.  Write Mongo query to retrieve the amount and paymentMethod from payments where the paymentMethod is not UPI.
ans- sampleData> db.payments.aggregate([{$match:{paymentMethod:{$ne:"UPI"}}},{$project:{"_id":0, "amount": 1, "paymentMethod": 1}}])
[ { amount: 1120, paymentMethod: 'Debit Card' } ]

5.  Write Mongo query to retrieve the paymentstatus where the amount is greater than 100.
ans - sampleData> db.payments.aggregate([{$match:{amount:{$gt:100}}},{$project:{"_id":0,"paymentstatus":1}}])
[ { paymentstatus: 'pending' } ]

6.  Write Mongo query to retrieve the shipper_id and price from the order_details where the price is greater than 2000.
ans - db.order_details.aggregate([{$match:{price:{$gt:2000}}},{$project:{"_id":0,"shipper_id":1,"price":1}}]) (--No data)

7.  Write Mongo query to retrieve the customer_id and _id from the orders where the status is not shipped.
ans- sampleData> db.orders.aggregate([{$match:{status:{$ne:"shipped"}}},{$project:{"_id":1,"customer_id":1}}])
[ { _id: 2, customer_id: 2 } ]

8.  Write Mongo query to retrieve documents from the products where category_id is 1 with out product _id.
ans- sampleData> db.products.aggregate([{$match:{category_id:1}},{$project:{"_id":0}}])
[
  {
    name: 'iPhone 13',
    category_id: 1,
    price: 999.99,
    quantity: 50,
    supplier_id: 1
  },
  {
    name: 'Samsung Galaxy S21',
    category_id: 1,
    price: 799.99,
    quantity: 100,
    supplier_id: 2
  }
]

9.  Write Mongo query to retrieve name,quantity from the products where price greater than 1500 .
ans- sampleData> db.products.aggregate([{$match:{price:{$gt:100}}},{$project:{"_id":0,"name":1, "quantity":1}}])
[
  { name: 'iPhone 13', quantity: 50 },
  { name: 'Samsung Galaxy S21', quantity: 100 }
]

10. Write Mongo query to retrieve the name from the shippers where the phone number is 1-800-742-5877.
ans-    sampleData> db.shippers.aggregate([{$match:{phone:"1-800-742-5877"}},{$project:{name:1}}])
        [ { _id: 1, name: 'UPS' } ]

11. Write Mongo query to retrieve the city and phone of the suppliers where the suppliers name is Sony.
ans- sampleData> db.suppliers.aggregate([{$match:{name:"Apple"}},{$project:{"_id":0,"city":1, "phone":1}}])
[ { city: 'Cupertino', phone: '1-800-275-2273' } ]

12. Write Mongo query to retrieve the name of the suppliers where the city is Tokyo.
ans- sampleData> db.suppliers.aggregate([{$match:{city:"Seoul"}},{$project:{"_id":0,"name":1}}])
[ { name: 'Samsung' } ]

13. Write Mongo query to find amount of payment made through "UPI" ?
ans- sampleData> db.payments.aggregate([{$match:{paymentMethod:"UPI"}},{$project:{"_id":0,"amount":1}}])
[ { amount: 50.25 } ]

14. Write Mongo query to find buyers city as key name "city" who uses hotmail ?
ans- sampleData> db.buyers.aggregate([{ $match: { "email": { $regex: /hotmail/i } } },{ $project: { _id: 0, city: "$address.city" } }])
[ { city: 'New York' } ]

15. Use MongoDB aggregation to retrieve the top 5 most recent orders that have been shipped, projecting the order date, status, and total amount.
ans - sampleData> db.orders.aggregate([{$match:{status:"shipped"}},{$sort:{order_date:-1}},{$limit:5},{$project:{order_date:1, status:1, total:1}}])
[
  {
    _id: 1,
    order_date: ISODate('2022-03-01T00:00:00.000Z'),
    status: 'shipped',
    total: 50.25
  }
]

16. Aggregate the first 3 payments with a "success" status, projecting the payment date, amount, and method.
ans- sampleData> db.payments.aggregate([{$match:{paymentstatus:"success"} }, {$limit:3}, {$project:{"_id":0, "payment_date":1, "amount":1, "paymentstatus":1}}])
[
  {
    payment_date: ISODate('2022-03-01T00:00:00.000Z'),
    amount: 50.25,
    paymentstatus: 'success'
  }
]

17. Aggregate all pending orders, sort them by the order date in descending order, and project the customer ID, order date, and total amount.
ans- sampleData> db.orders.aggregate([{$match:{status:"pending"}}, {$sort:{order_date:-1}}, {$project:{"_id":0, "customer_id":1, "order_date":1, "total":1}}])
[
  {
    customer_id: 2,
    order_date: ISODate('2022-04-01T00:00:00.000Z'),
    total: 1120
  }
]

18. Aggregate products, sort them by quantity in descending order, limit the result to the top 10 items, and project the product name and quantity.
ans- sampleData> db.products.aggregate([{$sort:{quantity:-1}},{$limit:10}, {$project:{"_id":0, "name":1,"quantity":1}}])
[
  { name: 'Samsung Galaxy S21', quantity: 100 },
  { name: 'iPhone 13', quantity: 50 }
]
1.  Write Mongo query to retrieve documents from the products where supplier_id is 3 .
ans- sampleData> db.products.aggregate([{$match:{supplier_id:2}}])
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

2.  Write Mongo query to retrieve the documents from the orders collection with "status": "shipped" .
ans sampleData> db.orders.aggregate([{$match:{status:"shipped"}}])
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

3.  Write Mongo query to find buyers who from state CA ?
ans- sampleData> db.buyers.aggregate([{$match:{"address.state":"CA"}}])
[
  {
    _id: 2,
    name: 'Jane Doe',
    email: 'jane@gmail.com',
    address: {
      street: '456 Oak St',
      city: 'Los Angeles',
      state: 'CA',
      zip: '90001'
    }
  }
]

4.  Write Mongo query to retrieve the amount,paymentstatus and paymentMethod from payments.
ans- sampleData> db.payments.aggregate([{$project:{"_id":0,"amount":1, "paymentstatus":1, "paymentMethod" :1}}])
[
  { amount: 50.25, paymentMethod: 'UPI', paymentstatus: 'success' },
  {
    amount: 1120,
    paymentMethod: 'Debit Card',
    paymentstatus: 'pending'
  }
]

5.  Write Mongo query to retrieve documents from the orders with out _id.
sampleData> db.orders.aggregate([{$match:{}},{$project:{"_d":0}}])
[
  {
    _id: 1,
    customer_id: 1,
    order_date: ISODate('2022-03-01T00:00:00.000Z'),
    ship_date: ISODate('2022-03-05T00:00:00.000Z'),
    status: 'shipped',
    total: 50.25
  },
  {
    _id: 2,
    customer_id: 2,
    order_date: ISODate('2022-04-01T00:00:00.000Z'),
    ship_date: ISODate('2022-04-06T00:00:00.000Z'),
    status: 'pending',
    total: 1120
  }
]

6.  Write Mongo query to retrieve name,price from the products .
ans- sampleData> db.products.aggregate([{$match:{}},{$project:{"_id":0,"name":1, "price":1}}])
[
  { name: 'iPhone 13', price: 999.99 },
  { name: 'Samsung Galaxy S21', price: 799.99 }
]

7.  Write Mongo query to find buyers city and zip code ?
ans - sampleData> db.buyers.aggregate([{$project:{"address.city":1, "address.zip":1 }}])
[
  { _id: 1, address: { city: 'New York', zip: '10001' } },
  { _id: 2, address: { city: 'Los Angeles', zip: '90001' } }
]

8.  Write Mongo query to find buyers name,email, city and zip code ?
ans- sampleData> db.buyers.aggregate([{$match:{}},{$project:{ "_id":0, "name":1, "email":1, "address.city":1, "address.zip":1}}])
[
  {
    name: 'John Smith',
    email: 'john@hotmail.com',
    address: { city: 'New York', zip: '10001' }
  },
  {
    name: 'Jane Doe',
    email: 'jane@gmail.com',
    address: { city: 'Los Angeles', zip: '90001' }
  }
]

9.  Write Mongo query to find suppliers name and phone ?
ans - sampleData> db.suppliers.aggregate([{$match:{}},{$project:{"_id":0,"name":1, "phone":1}}])
[
  { name: 'Apple', phone: '1-800-275-2273' },
  { name: 'Samsung', phone: '+82-2-2053-3000' }
]

10. Write Mongo query to find buyers name,email, city and zip code ?
ans- sampleData> db.buyers.aggregate([{$match:{}},{$project:{ "_id":0, "name":1, "email":1, "address.city":1, "address.zip":1}}])
[
  {
    name: 'John Smith',
    email: 'john@hotmail.com',
    address: { city: 'New York', zip: '10001' }
  },
  {
    name: 'Jane Doe',
    email: 'jane@gmail.com',
    address: { city: 'Los Angeles', zip: '90001' }
  }
]

11. Write Mongo query to find buyers city and zip code ?
ans- sampleData> db.buyers.aggregate([{$match:{}},{$project:{ "_id":0, "address.city":1, "address.zip":1}}])
[
  { address: { city: 'New York', zip: '10001' } },
  { address: { city: 'Los Angeles', zip: '90001' } }
]

12. Write Mongo query to retrieve name,price from the products .
ans - sampleData> db.products.aggregate([{$project:{name:1,price:1}}])
[
  { _id: 1, name: 'iPhone 13', price: 999.99 },
  { _id: 2, name: 'Samsung Galaxy S21', price: 799.99 }
]
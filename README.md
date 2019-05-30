<h1>zTask</h1>
<p>Restful NodeJS CRUD with expressJS and mongoDB</p>

<h2>Resources</h2>

- Node.Js
- Express.Js
- MongoDb
- Postman
- BodyParser

<h2>Routes</h2>

<table style="width:100%">
  <tr>
    <th>ROUTE</th>
    <th>HTTP</th> 
    <th>DESCRIPTION</th>
  </tr>
  <tr>
    <td>/ztask/</td>
    <td>GET</td> 
    <td>Main page</td>
  </tr>
  <tr>
    <td>/ztask/items</td>
    <td>GET</td> 
    <td>Show all items</td>
  </tr>
  <tr>
    <td>/ztask/items/:product_id</td>
    <td>GET</td> 
    <td>Show by id</td>
  </tr>
  <tr>
    <td>/ztask/items</td>
    <td>POST</td> 
    <td>Create an item</td>
  </tr>
  <tr>
    <td>/ztask/items/:product_id</td>
    <td>PUT</td> 
    <td>Update product by id</td>
  </tr>
  <tr>
    <td>/ztask/items/:product_id</td>
    <td>DELETE</td> 
    <td>Delete product by id</td>
  </tr>
</table>

<h2>Running</h2>

```
git clone https://github.com/bekkho/zTask.git
```
 go to directory and run, this will install all dependencies for the project.
```
npm install
```
Then run API with:
```
npm run dev
```

If your db is local you'll have to run it:
```
mongod
```


<h2>Author</h2>

* **Behzod Hokimov** - [GitHub](https://github.com/bekkho)

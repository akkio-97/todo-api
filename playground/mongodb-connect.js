const MongoClient = require('mongodb').MongoClient;

var user = {name: "nikhi",last: "george" age: 22};

<<<<<<< HEAD

=======
>>>>>>> calc
var user = {name: "akshay", age: 21};
var {name} = user;
//In new branch

// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log("cannot connect to mongodb server");
  }
  console.log("connected to mongodb server");
  const db = client.db('TodoApp');
  // db.collections('Todos').insertOne({
  db.collection("Todos").insertOne({
    name:"akshay",
    age:21
  }, (err, result) =>{
    if(err){
      return console.log("cannot insert to database", err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  })

  db.collection('users').find({name:'user2'}).toArray().then((docs) => {
    console.log('users are here');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('unable to fetch todos',err);
  })
  // db.collection("users").insertOne({
  //   name: "user1",
  //   occupation: "nothing"
  // }, (err, result) => {
  //   if(err){
  //     return console.log("cannot insert");
  
  
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })


  client.close();
})

// MEAN Stack RESTful API Tutorial - Contact List App

var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db1 = mongojs('educationlist', ['educationlist']);
var db2 = mongojs('skilllist', ['skilllist']);
var db3 = mongojs('projectlist', ['projectlist']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/educationlist', function (request, response) {
  console.log('I received a GET request');

  db1.educationlist.find(function (err, docs) {
    console.log(docs);
    response.json(docs);
  });
});

app.post('/educationlist', function (request, response) {
  console.log(request.body);
  db1.educationlist.insert(request.body, function(err, doc) {
    response.json(doc);
  });
});

app.delete('/educationlist/:id', function (request, response) {
  var id = request.params.id;
  console.log(id);
  db1.educationlist.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    response.json(doc);
  });
});

app.get('/educationlist/:id', function (request, response) {
  var id = request.params.id;
  console.log(id);
  db1.educationlist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    response.json(doc);
  });
});

app.put('/educationlist/:id', function (request, response) {
  var id = request.params.id;
  console.log(request.body.name);
  db1.educationlist.findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {name: request.body.name, degree: request.body.degree, year: request.body.year}},
    new: true}, function (err, doc) {
      response.json(doc);
    }
  );
});

app.get('/skilllist', function (request, response) {
  console.log('I received a GET request');

  db2.skilllist.find(function (err, docs) {
    console.log(docs);
    response.json(docs);
  });
});

app.post('/skilllist', function (request, response) {
  console.log(request.body);
  db2.skilllist.insert(request.body, function(err, doc) {
    response.json(doc);
  });
});

app.delete('/skilllist/:id', function (request, response) {
  var id = request.params.id;
  console.log(id);
  db2.skilllist.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    response.json(doc);
  });
});

app.get('/skilllist/:id', function (request, response) {
  var id = request.params.id;
  console.log(id);
  db2.skilllist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    response.json(doc);
  });
});

app.put('/skilllist/:id', function (request, response) {
  var id = request.params.id;
  console.log(request.body.name);
  db2.skilllist.findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {name: request.body.name, description: request.body.decription}},
    new: true}, function (err, doc) {
      response.json(doc);
    }
  );
});

app.get('/projectlist', function (request, response) {
  console.log('I received a GET request');

  db3.projectlist.find(function (err, docs) {
    console.log(docs);
    response.json(docs);
  });
});

app.post('/projectlist', function (request, response) {
  console.log(request.body);
  db3.projectlist.insert(request.body, function(err, doc) {
    response.json(doc);
  });
});

app.delete('/projectlist/:id', function (request, response) {
  var id = request.params.id;
  console.log(id);
  db3.projectlist.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
    response.json(doc);
  });
});

app.get('/projectlist/:id', function (request, response) {
  var id = request.params.id;
  console.log(id);
  db3.projectlist.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) {
    response.json(doc);
  });
});

app.put('/projectlist/:id', function (request, response) {
  var id = request.params.id;
  console.log(request.body.name);
  db3.projectlist.findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {name: request.body.name, decription: request.body.description}},
    new: true}, function (err, doc) {
      response.json(doc);
    }
  );
});


app.listen(8080);
console.log("Server running on port 8080");

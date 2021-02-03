var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var trivo = 1;

var tot;
var amplificatoare;
var casti;
var boxe;
var mixere;
var microfoane;
var filter;
var sensib;
var pret;
var map_red;
var total;

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const client = new MongoClient(url);


  MongoClient.connect(url, function(err, db) {
    var dbo = db.db("shopping");
    dbo.eval("select_microfoane()",function(err,doc){
      microfoane=doc;
    })
    db.close(); 
  });

  MongoClient.connect(url, function(err, db) {
    var dbo = db.db("shopping");
    dbo.eval("select_amplificatoare()",function(err,doc){
      amplificatoare=doc;
   })
          db.close();
  });

  MongoClient.connect(url, function(err, db) {
    var dbo = db.db("shopping");
   dbo.eval("select_casti()",function(err,doc){
      casti=doc;
 
      
   })
          db.close();
          
    
  });


  MongoClient.connect(url, function(err, db) {
    var dbo = db.db("shopping");
    dbo.eval("select_boxe()",function(err,doc){
      boxe=doc;
      
   })
          db.close();
          
    
  });

  MongoClient.connect(url, function(err, db) {
    var dbo = db.db("shopping");
    dbo.eval("nr_total()",function(err,doc){
      total=doc;
      
   })
          db.close();
          
    
  });




  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("shopping");
    dbo.collection("boxe").mapReduce("map_functie_putere","red_func",{"query":{},"out":'"out"'});
  });

  MongoClient.connect(url, function(err, db) {
    var dbo = db.db("shopping");
    
    dbo.eval( 'reduction_output()',function(err,doc){
      map_red=doc;  
   })
          db.close();
  });

  MongoClient.connect(url, function(err, db) {
    var dbo = db.db("shopping");
    dbo.eval("select_mixere()",function(err,doc){
      mixere=doc;

      
   })
          db.close();
          
    
  });

  router.get('/amplificatoare', function(req, res, next) {
    res.render('shop/amplificatoare', { title: 'Shopping Cart', amplificatoare });

});
  
  router.get('/boxe', function(req, res, next) {
      res.render('shop/boxe', { title: 'Shopping Cart', boxe });
    
  });
  
  router.get('/casti', function(req, res, next) {
    res.render('shop/casti', { title: 'Shopping Cart', casti });
  
  });
  
  router.get('/mixere', function(req, res, next) {
    res.render('shop/mixere', { title: 'Shopping Cart', mixere });
  
  });
  
  router.get('/microfoane', function(req, res, next) {
    res.render('shop/microfoane', { title: 'Shopping Cart', microfoane });
  
  });

  router.get('/putere', function(req, res) {
    res.render('shop/boxe_putere', { title: 'Shopping Cart', map_red });
  
  });


  
  router.get('/filtru', function(req, res, next) {
    res.render('shop/filtru', { title: 'Shopping Cart',tot  });
  
  });
  


  router.get('/toate', function(req, res, next) {
    res.render('shop/toate', { title: 'Shopping Cart', tot });
  
  });

  router.get('/numar_total', function(req, res, next) {
    res.render('shop/numar_total', { title: 'Shopping Cart', total });
  
  });
  
  
  
  router.get('/', function(req, res, next) {
    res.render('shop/login', { title: 'Shopping Cart',tot  });
  });
  
  router.post('/auth', function(request, response) {
    var user = request.body.user;
    var pass = request.body.pass;
    if (user == 'alex' && pass == 'pass') {
          response.redirect('/toate');
          
        } else {
          response.redirect('/');
        }			
      });
  
      function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

  router.post('/cauta', async function(request, response) {
    sensib = request.body.sensibilitate;
    pret = request.body.pret;
    MongoClient.connect(url, function(err, db) {
      var dbo = db.db("shopping");
      
      dbo.eval( 'casti_filter('+'"'+sensib+'dB",'+pret+')',function(err,doc){
        filter=doc;  
        console.log(filter);
        console.log('casti_filter('+'"'+sensib+'dB","'+pret+' Lei")');
     }) 
            db.close();
    });
    await sleep(100);
    response.redirect('/dupa_filtru');
    
  });
  

  router.get('/dupa_filtru', function(req, res) {  
    res.render('shop/dupa_filtru', { title: 'Shopping Cart', filter });
  
  });
  module.exports = router;
  


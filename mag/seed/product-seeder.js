var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shopping', {useNewUrlParser: true, useUnifiedTopology: true});

var products = [
    new Product({
        imagePath: '/images/itm1.jpg',
        title: 'Boxa SONOS',
        description: 'Boxa Wireless',
        price: 200
    }), 

    new Product({
        imagePath: '/images/itm2.jpg',
        title: 'Boxa JBL',
        description: 'Boxa Wireless',
        price: 300
    }),
    
    new Product({
        imagePath: '/images/itm3.jpg',
        title: 'Boxa BOSE',
        description: 'Boxa Wireless',
        price: 250
    }),

]

var done = 0;

 

for(var i=0;i<products.length;i++)
{
    products[i].save(function(err,result){
        done++;
        if(done == products.length)
        {
            exit();
        }
    });
}
function exit(){
    mongoose.disconnect();
}

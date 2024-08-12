const mongoose = require('mongoose');
const db = require('./db');

const url = 'mongodb+srv://felipecunha:&Cris2009&@softskills.q1v44.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';



    


db.Mongoose.connect(url, (err, db) => {

    db.collection('soft').insertOne( {
        
        "name":"Creativity" // 'Leadership', 'Proactivity','Interaction', 'Communication', 'Initiative' 
     });
     
  });



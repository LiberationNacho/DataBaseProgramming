const mongoclient = require('mongodb').MongoClient;
const url = 'mongodb+srv://henac:man06066@cluster0.6vlkk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoclient.connect(url)
    .then(client =>{
        console.log('몽고db 접속 성공');
})


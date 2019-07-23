const {MongoClient}=require('mongodb')
const url = 'mongodb://localhost:27017'
const connect=(dbname)=>{
    return MongoClient.connect(url).then(client => client.db(dbname))
}
const getblogs = ()=> connect('test').then(db=>db.collection('blogs').find()).then(blog=>blog.toArray())
const insert=(blo)=> connect('test').then(db=>db.collection('blogs')).then(b=>b.insertOne(blo))
module.exports={
    getblogs,
    insert
}
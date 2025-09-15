
const { MongoClient }=require("mongodb");
const url = "mongodb+srv://alladamohan:%40Mohan123@namastedev.zdkk2yu.mongodb.net/helloworld?retryWrites=true&w=majority";


const client = new MongoClient(url);
const dbName = 'helloworld';

async function main() {


  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('users');
const data={
  firstname:"ms",
  lastname:"dhoni",
  city:"bihar"
}
 const insertResult = await collection.insertMany([data]);
 console.log('Inserted documents =>', insertResult);

//    const findResult = await collection.find({}).toArray();
//  console.log('Found documents =>', findResult);

// const filteredDocs = await collection.find({ lastname: "mohan" }).toArray();
// console.log('Found documents filtered by { lastname: mohan } =>', filteredDocs);

// const updateResult = await collection.updateOne({ firstname: "allada" }, { $set: { firstname: "ammu" } });
// console.log('Updated documents =>', updateResult);

// const deleteResult = await collection.deleteMany({ firstname: "ms" });
// console.log('Deleted documents =>', deleteResult);

const indexName = await collection.createIndex({ pin: "764001" });
console.log('index name =', indexName);


  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
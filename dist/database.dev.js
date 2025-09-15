"use strict";

var _require = require("mongodb"),
    MongoClient = _require.MongoClient;

var url = "mongodb+srv://alladamohan:%40Mohan123@namastedev.zdkk2yu.mongodb.net/helloworld?retryWrites=true&w=majority";
var client = new MongoClient(url);
var dbName = 'helloworld';

function main() {
  var db, collection, data, insertResult, indexName;
  return regeneratorRuntime.async(function main$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(client.connect());

        case 2:
          console.log('Connected successfully to server');
          db = client.db(dbName);
          collection = db.collection('users');
          data = {
            firstname: "ms",
            lastname: "dhoni",
            city: "bihar"
          };
          _context.next = 8;
          return regeneratorRuntime.awrap(collection.insertMany([data]));

        case 8:
          insertResult = _context.sent;
          console.log('Inserted documents =>', insertResult); //    const findResult = await collection.find({}).toArray();
          //  console.log('Found documents =>', findResult);
          // const filteredDocs = await collection.find({ lastname: "mohan" }).toArray();
          // console.log('Found documents filtered by { lastname: mohan } =>', filteredDocs);
          // const updateResult = await collection.updateOne({ firstname: "allada" }, { $set: { firstname: "ammu" } });
          // console.log('Updated documents =>', updateResult);
          // const deleteResult = await collection.deleteMany({ firstname: "ms" });
          // console.log('Deleted documents =>', deleteResult);

          _context.next = 12;
          return regeneratorRuntime.awrap(collection.createIndex({
            pin: "764001"
          }));

        case 12:
          indexName = _context.sent;
          console.log('index name =', indexName);
          return _context.abrupt("return", 'done.');

        case 15:
        case "end":
          return _context.stop();
      }
    }
  });
}

main().then(console.log)["catch"](console.error)["finally"](function () {
  return client.close();
});
//# sourceMappingURL=database.dev.js.map

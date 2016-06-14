var RecordStore = require('./record-store/record_store.js');
var Record = require('./record-store/record.js');
var StoreView = require('./record-store/store-view.js');
var sampleRecords = require('./sample.json');

window.onload = function() {
    // console.log("hello");

    var store = new RecordStore("HMV", "London");
    // console.log(store);
    // console.log("hello");
    for (record of sampleRecords) {
        store.addRecord(new Record(record.artist, record.title, record.price));
        //  console.log(store);
    }
    var storeView = new StoreView(store);
    storeView.render();
    //  var bankView = new BankView(bank);

    //  var interest = document.getElementById('addint')
    //  interest.onclick = bank.addInterest();
};

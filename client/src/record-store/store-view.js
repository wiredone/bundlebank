var RecordStore = require('./record_store.js');
var Record = require('./record.js');
var StoreView = function(store) {
    this.store = store;
};

StoreView.prototype = {
    render: function() {

        var nameDisplay = document.getElementById('storename');
        nameDisplay.innerText = this.store.getName();

        var cityDisplay = document.getElementById('cityname');
        cityDisplay.innerText = this.store.getCity();

        var invDisplay = document.getElementById('inv');
        // records = this.store.getRecords()
        // for (record of records){
        // invDisplay.innerText = record.artist
        // console.log(record);
        //HERE
    };
    createItemForRecord: function(record) {
      var recordListItem = document.createElement('li');
        recordListItem.innerText = record.artist + " - " + record.title + "  : £" +record.price;
        return recordListItem;
    };
    populateInventory: function(listElement, records) {
          for(var record of records) {
            listElement.appendChild(this.createItemForRecord(record));
          }
        }

        // list = this.store.listInventory();
        // invDisplay.innerText = list.listing;
        // console.log(this.store.listInventory());
    }
  };
module.exports = StoreView;

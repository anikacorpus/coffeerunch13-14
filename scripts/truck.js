(function(window) {
    'use strict';
    var App = window.App || {};

    function Truck(truckId, db) {
        this.truckId = truckId;
        this.db = db;
    }
    Truck.prototype.createOrder = function(order) {
        console.log('Adding order for ' + order.emailAddress);
        return this.db.add(order.emailAddress, order);
    }

    Truck.prototype.deliverOrder = function(customerId) {
        console.log('Delivering order for ' + customerId);
        return this.db.remove(customerId);
    };
    Truck.prototype.printOrders = function() {
        var customerIdArray = Object.keys(this.db.getAll());
        console.log('db.getAll', this.db.getAll());
        console.log('Truck #' + this.truckId + ' has pending orders:');
        console.log('customerIdArray', customerIdArray);
        customerIdArray.forEach(function(id) {
            console.log(this.db.get(id));
        }.bind(this));
        console.log('customerIdArray', customerIdArray);
        return customerIdArray;
    };
    App.Truck = Truck;
    window.App = App;
})(window);

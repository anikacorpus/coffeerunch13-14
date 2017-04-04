(function(window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    function FormHandler(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }

        this.$formElement = $(selector);
        if (this.$formElement.lenth === 0) {
            throw new Error('Could not find element with selector:' + selector);
        }

    }

    FormHandler.prototype.addSubmitHandler = function(fn) {
        console.log('Setting submit handler for form');
        this.$formElement.on('submit', function(event) {
            event.preventDefault();

            var data = {};
            $(this).serializeArray().forEach(function(item) {
                data[item.name] = item.value;
                console.log(item.name + 'is' + item.value);
            });

            console.log(data);
            fn(data)
            .then(function(){
            this.reset();
            this.element[0].focus();
          }.bind(this));

        });
    };

    FormHandler.prototype.addInputHandler = function(fn) {
        console.log('Setting input handler for form');
        this.$formElement.on('input', '[name="emailAddress"]', function(event) {
            //Event Handler
            var emailAddress = event.target.value;
            var message = '';
            if (fn(emailAddress)) {
                event.target.setCustomValidity('');
            } else {
                message = emailAddress + ' is not an authorized email address!'
                event.target.setCustomValidity(message);
            }
        });
    };

    FormHandler.prototype.addCoffeeInputHandler = function(fn) {
        console.log('Setting coffee input handler for form');
        this.$formElement.on('input', '[name="coffee"], [name="strength"]', function(event) {
            var coffeeSelector = document.querySelector('[data-coffee-order="coffeeOrder"]');
            var strengthSelector = document.querySelector('[data-coffee-order="strength"]');
            strength = parseInt(strength, 20);

            var message = '';
            if (fn(coffee, strength)) {
                console.log(message);
                console.log(strength);
                event.target.setCustomValidity('');
                coffeeSelector.setCustomValidity('');
                strengthSelector.setCustomValidity('');
            } else {
                message = coffee + ' cannot have caffeine rating of ' + strength;
                console.log(message);
                console.log(strength);
                event.target.setCustomValidity(message);
                coffeeSelector.setCustomValidity('');
                strengthSelector.setCustomValidity('');
            }
        });
    };

    App.FormHandler = FormHandler;
    window.App = App;

})(window);

//code for

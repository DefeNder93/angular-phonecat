'use strict';
// Register `phoneList` component, along with its associated controller and template
var PhoneListController = (function () {
    function PhoneListController(Phone) {
        this.phones = Phone.query();
        this.orderProp = 'age';
    }
    PhoneListController.$inject = ['Phone'];
    return PhoneListController;
}());
angular.
    module('phoneList').
    component('phoneList', {
    templateUrl: 'app/phone-list/phone-list.template.html',
    controller: ['Phone', PhoneListController]
});
//# sourceMappingURL=phone-list.component.js.map
'use strict';
// Register `phoneDetail` component, along with its associated controller and template
var PhoneDetailController = (function () {
    function PhoneDetailController($routeParams, Phone) {
        var _this = this;
        var phoneId = $routeParams['phoneId'];
        this.phone = Phone.get({ phoneId: phoneId }, function (phone) {
            _this.setImage(phone.images[0]);
        });
    }
    PhoneDetailController.prototype.setImage = function (imageUrl) {
        this.mainImageUrl = imageUrl;
    };
    PhoneDetailController.$inject = ['$routeParams', 'Phone'];
    return PhoneDetailController;
}());
angular.
    module('phoneDetail').
    component('phoneDetail', {
    templateUrl: 'app/phone-detail/phone-detail.template.html',
    controller: PhoneDetailController
});
//# sourceMappingURL=phone-detail.component.js.map
(function () {
    var app = angular.module("MobileStore", []);
    app.controller("StoreController", function ($http) {
var self=this;
        this.mobiles = [];

        this.setActiveTab = function (mobile, tab) {
            mobile.activeTab = tab;
        };
        $http.get("/mobiles").then(function (response) {
            self.mobiles=response.data;
        },function (error) {
            console.log(error);
        })
    });
})();
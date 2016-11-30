"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var app_services_1 = require('../services/app.services');
var AppTimeline = (function () {
    function AppTimeline(myService) {
        this.myService = myService;
        this.feeds = [];
        this.getFeedsLink = 'http://localhost/urangle/api/feed-back.php?type=get';
        this.postFeedsLink = 'http://localhost/urangle/api/feed-back.php?type=new';
    }
    AppTimeline.prototype.getFeeds = function () {
        var _this = this;
        this.myService.getData(this.getFeedsLink).subscribe(function (res) {
            var myRes = res.json();
            _this.feeds = myRes;
        });
    };
    AppTimeline.prototype.setFormData = function (val) {
        this.formData = val;
    };
    AppTimeline.prototype.postFeeds = function () {
        var _this = this;
        this.myService.postData(this.postFeedsLink, this.formData).subscribe(function (res) {
            _this.getFeeds();
        });
    };
    AppTimeline.prototype.ngOnInit = function () {
        this.getFeeds();
    };
    AppTimeline = __decorate([
        core_1.Component({
            selector: 'my-app-timeline',
            templateUrl: "app/components/views/timeline.html"
        }), 
        __metadata('design:paramtypes', [app_services_1.myService])
    ], AppTimeline);
    return AppTimeline;
}());
exports.AppTimeline = AppTimeline;
//# sourceMappingURL=app.timeline.js.map
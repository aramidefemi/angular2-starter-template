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
var app_timeline_1 = require('./app.timeline');
var AppFeedBackForm = (function () {
    function AppFeedBackForm(timeLine) {
        this.timeLine = timeLine;
        this.fb = [];
    }
    AppFeedBackForm.prototype.newFeedBack = function (n) {
        var stuff = {
            name: n.name,
            email: n.email,
            content: n.content
        };
        this.timeLine.setFormData(stuff);
        this.timeLine.postFeeds();
        this.rextxt = this.timeLine.formData;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], AppFeedBackForm.prototype, "fb", void 0);
    AppFeedBackForm = __decorate([
        core_1.Component({
            selector: 'my-app-feed-back-form',
            templateUrl: "app/components/views/feed-back-form.html"
        }), 
        __metadata('design:paramtypes', [app_timeline_1.AppTimeline])
    ], AppFeedBackForm);
    return AppFeedBackForm;
}());
exports.AppFeedBackForm = AppFeedBackForm;
//# sourceMappingURL=app.feed-back-form.js.map
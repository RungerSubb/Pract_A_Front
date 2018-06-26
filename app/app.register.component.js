System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponentRegister;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponentRegister = (function () {
                function AppComponentRegister() {
                }
                AppComponentRegister = __decorate([
                    core_1.Component({
                        selector: 'register-app',
                        template: "    \n        <script>\n           \n            </script>\n        <link rel=\"stylesheet\" href=\"css/log-app.styles.css\" type=\"text/css\">\n        <div class=\"all-base\">\n            <div class=\"up-base\">\n                <cl-image\n                        _ngcontent-ywn-2=\"\"\n                        public-id=\"logo_project-name\"\n                        class=\"thumbnail inline\"\n                        format=\"png\"\n                        ng-reflect-public-id=\"logo_project-name\">\n                    <img class=\"exp\" src=\"resourses/logo_project-name.png\" >\n                </cl-image>\n            </div>\n            <div class=\"base\">\n                <div>\n                    <div>\n                        <cl-image\n                                _ngcontent-ywn-2=\"\"\n                                public-id=\"mini_logo.png\"\n                                class=\"thumbnail inline\"\n                                format=\"png\"\n                                ng-reflect-public-id=\"logo_project-name\">\n                            <img class=\"high-logo\" src=\"resourses/mini_logo.png\" >\n                        </cl-image>\n                        \n                        <h1 class=\"log-pass\">Login: &nbsp; &nbsp; &nbsp; <input class=\"field-inp\" type=\"text\" id=\"login\"></h1>\n                        <h1 class=\"log-pass\" >Password: <input class=\"field-inp\" type=\"password\"  id=\"password\"></h1>\n \n                        <button class=\"sign-in\" id=\"btn\">Confirm</button>\n                        <p></p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"str\">\n            <cl-image\n                    _ngcontent-ywn-2=\"\"\n                    public-id=\"crunch.png\"\n                    class=\"thumbnail inline\"\n                    format=\"png\"\n                    ng-reflect-public-id=\"crunch\">\n                <img class=\"str\" src=\"resourses/crunch.png\" >\n            </cl-image>\n            </div>\n            <div class=\"down-base\" scr>\n                <cl-image\n                        _ngcontent-ywn-2=\"\"\n                        public-id=\"logo_fund\"\n                        class=\"thumbnail inline\"\n                        format=\"png\"\n                        ng-reflect-public-id=\"logo_fund\">\n                    <img class=\"dwn\" src=\"resourses/logo_fund.png\" >\n                </cl-image>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponentRegister);
                return AppComponentRegister;
            }());
            exports_1("AppComponentRegister", AppComponentRegister);
        }
    }
});
//# sourceMappingURL=app.register.component.js.map
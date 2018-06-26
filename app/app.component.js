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
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'login-app',
                        template: "\n        <script>\n            window.onload = function () {\n                var btn = get.ElementaryById('btn');\n                var inputs = get.ElementsByTagName('input');\n                btn.addEventListener('click', function () {\n                    xhr = new XMLHttpRequest();\n                    xhr.open('POST', '/login');\n\n                    var userData = {\n                        username:  input[0].value,\n                        password:  input[1].value\n                    };\n                    xhr.setRequestHeader('Content-Type', 'application/json') ;\n                    xhr.send(JSON.stringify(userData));\n                    xhr.onload = function(){alert(this.response.Text);}\n                    xhr.oneerror = function(){alert('server error');}\n\n                })\n            }\n        </script>\n        <link rel=\"stylesheet\" href=\"css/log-app.styles.css\" type=\"text/css\">\n        <div class=\"all-base\">\n            <div class=\"up-base\">\n                <cl-image\n                        _ngcontent-ywn-2=\"\"\n                        public-id=\"logo_project-name\"\n                        class=\"thumbnail inline\"\n                        format=\"png\"\n                        ng-reflect-public-id=\"logo_project-name\">\n                    <img class=\"exp\" src=\"resourses/logo_project-name.png\" >\n                </cl-image>\n            </div>\n            <div class=\"base\">\n                <div>\n                    <div>\n                        <cl-image\n                                _ngcontent-ywn-2=\"\"\n                                public-id=\"mini_logo.png\"\n                                class=\"thumbnail inline\"\n                                format=\"png\"\n                                ng-reflect-public-id=\"logo_project-name\">\n                            <img class=\"high-logo\" src=\"resourses/mini_logo.png\" >\n                        </cl-image>\n\n                        <h1 class=\"log-pass\">Login: &nbsp; &nbsp; &nbsp; <input class=\"field-inp\" type=\"text\" id=\"login\"></h1>\n                        <h1 class=\"log-pass\" >Password: <input class=\"field-inp\" type=\"password\"  id=\"password\"></h1>\n\n                        <a href=\"Main.html\"><button class=\"sign-in\" id=\"btn\">Sign in</button></a>\n                        <p></p>\n                        <a class=\"crt\" href=\"register.html\">Create account</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"str\">\n                <cl-image\n                        _ngcontent-ywn-2=\"\"\n                        public-id=\"crunch.png\"\n                        class=\"thumbnail inline\"\n                        format=\"png\"\n                        ng-reflect-public-id=\"crunch\">\n                    <img class=\"str\" src=\"resourses/crunch.png\" >\n                </cl-image>\n            </div>\n            <div class=\"down-base\" scr>\n                <cl-image\n                        _ngcontent-ywn-2=\"\"\n                        public-id=\"logo_fund\"\n                        class=\"thumbnail inline\"\n                        format=\"png\"\n                        ng-reflect-public-id=\"logo_fund\">\n                    <img class=\"dwn\" src=\"resourses/logo_fund.png\" >\n                </cl-image>\n            </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map
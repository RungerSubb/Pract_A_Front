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
                        template: "    \n        <script>\n\n        </script>\n        <link rel=\"stylesheet\" href=\"css/log-app.styles.css\" type=\"text/css\">\n        <div class=\"allbase\">\n            <tabs>\n                <tab tabTitle=\"Tab 1\">\n                    Here's some content.\n                </tab>\n                <tab tabTitle=\"Tab 2\">\n                    And here's more in another tab.\n                </tab>\n            </tabs>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
/*
@Component({
    selector: 'login-app',
    template: `
        <script>
            window.onload = function () {
                var btn = get.ElementaryById('btn');
                var inputs = get.ElementsByTagName('input');
                btn.addEventListener('click', function () {
                    xhr = new XMLHttpRequest();
                    xhr.open('POST', '/login');

                    var userData = {
                        username:  input[0].value,
                        password:  input[1].value
                    };
                    xhr.setRequestHeader('Content-Type', 'application/json') ;
                    xhr.send(JSON.stringify(userData));
xhr.onload = function(){alert(this.response.Text);}
xhr.oneerror = function(){alert('server error');}

                })
            }
        </script>
        <link rel="stylesheet" href="css/log-app.styles.css" type="text/css">
        <div class="all-base">
            <div class="up-base">
                <cl-image
                        _ngcontent-ywn-2=""
                        public-id="logo_project-name"
                        class="thumbnail inline"
                        format="png"
                        ng-reflect-public-id="logo_project-name">
                    <img class="exp" src="resourses/logo_project-name.png" >
                </cl-image>
            </div>
            <div class="base">
                <div>
                    <div>
                        <cl-image
                                _ngcontent-ywn-2=""
                                public-id="mini_logo.png"
                                class="thumbnail inline"
                                format="png"
                                ng-reflect-public-id="logo_project-name">
                            <img class="high-logo" src="resourses/mini_logo.png" >
                        </cl-image>

                        <h1 class="log-pass">Login: &nbsp; &nbsp; &nbsp; <input class="field-inp" type="text" id="login"></h1>
                        <h1 class="log-pass" >Password: <input class="field-inp" type="password"  id="password"></h1>

                        <a href="Main.html"><button class="sign-in" id="btn">Sign in</button></a>
                        <p></p>
                        <a class="crt" href="register.html">Create account</a>
                    </div>
                </div>
            </div>
            <div class="str">
            <cl-image
                    _ngcontent-ywn-2=""
                    public-id="crunch.png"
                    class="thumbnail inline"
                    format="png"
                    ng-reflect-public-id="crunch">
                <img class="str" src="resourses/crunch.png" >
            </cl-image>
            </div>
            <div class="down-base" scr>
                <cl-image
                        _ngcontent-ywn-2=""
                        public-id="logo_fund"
                        class="thumbnail inline"
                        format="png"
                        ng-reflect-public-id="logo_fund">
                    <img class="dwn" src="resourses/logo_fund.png" >
                </cl-image>
            </div>
        </div>
    `
})




export class AppComponent {
}
 */ 
//# sourceMappingURL=app.main.component.js.map
import {Component} from 'angular2/core';


@Component({
    selector: 'register-app',
    template: `    
        <script>
           
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
 
                        <button class="sign-in" id="btn">Confirm</button>
                        <p></p>
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




export class AppComponentRegister {
}

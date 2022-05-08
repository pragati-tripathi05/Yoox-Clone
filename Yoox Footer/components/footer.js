function footer(){
    return `
        <div id="wrapper">
        <div id="container">
            <div class="section">
                <div class="heading">NEW TO YOOX</div>
                <center>
                    <hr class="divider">
                </center>
                <div class="mat">Shopping guide</div>
                <div class="mat">iPhone/iPad/Android</div>
                <div class="mat">Browse all Designers</div>
                <div class="mat">Browse all Categories</div>
            </div>
            <div class="section">
                <div class="heading">HELP</div>
                <center>
                    <hr class="divider">
                </center>
                <div class="mat">Shipping time & costs</div>
                <div class="mat">Payments and web security</div>
                <div class="mat">Product quality</div>
                <div class="mat">Track your order</div>
                <div class="mat">Returns & refunds</div>
                <div class="mat">FAQs</div>
                <div class="mat">Size Guide</div>
                
            </div>
            <div class="news">
                <img class="mail" src="https://img.icons8.com/material-outlined/24/000000/new-post.png" />
                <div class="heading">YOOX NEWS</div>
                <div class="mat">Sign up for the newsletter and discover the latest arrivals and promotions</div>
                <input class="enterEmail" type="text" placeholder="INSERT YOUR E-MAIL ADDRESS">
                <div class="gender">
                    <div>
                        <input class="radio" name="gen" type="radio" id="women"><label class="gen" for="women">Woman</label>
                        <input class="radio" name="gen" type="radio" id="men"><label for="men" class="gen">Man</label>
                    </div>
                    <div>
                    </div>
                </div>
                <div class="consentDiv">
                    <div>
                        <input class="check" type="checkbox">
                    </div>
                    <div class="consent">
                        I consent to recieve YOOX newsletter via email. For further information, please consult the <span class="underline consent">Privacy Policy</span> 
                    </div>
                </div>
                <input class="signup" type="submit" value="SIGN UP">
            </div>
            <div class="section">
                <div class="heading">MYOOX</div>
                <center><hr class="divider"></center>
                <div class="mat">Login</div>
                <div class="mat">My Orders</div>
                <div class="mat">My Details</div>
                <div class="mat">Dream Box</div>
                <div class="mat">Premiere</div>
            </div>
            <div class="section">
                <div class="heading">ABOUT US</div>
                <center>
                    <hr class="divider">
                </center>
                <div class="mat">Company Info</div>
                <div class="mat">Press</div>
                <div class="mat">Affiliation</div>
                <div class="mat">Careers</div>
            </div>
        </div>
    </div>
    <div class="connect">
        <div class="betconnect">
            <div class="leftC">
                <span class="Cwithus">CONNECT WITH US</span><img class="firsticon" src="https://img.icons8.com/ios-glyphs/30/000000/facebook-f.png" /><img src="https://img.icons8.com/ios-glyphs/30/000000/twitter--v1.png" /><img src="https://img.icons8.com/material-outlined/24/000000/instagram-new--v1.png" /><img src="https://img.icons8.com/material-rounded/24/000000/youtube-play.png" /><img src="https://img.icons8.com/windows/24/000000/tiktok.png" />
            </div>
            <div class="rightC">
                <img src="https://img.icons8.com/ios-filled/50/000000/smartphone-tablet.png" /><span class="Cwithus">DOWNLOAD THE APP FOR iOS / ANDROID</span>
            </div>
        </div>
        <div class="bottom">
            <p>POWERED BY YOOX NET-A-PORTER GROUP - COPYRIGHT © 2000-2022 YOOX NET-A-PORTER GROUP S.P.A. - ALL RIGHTS RESERVED - SIAE
            LICENCE # 401/I/526</p>
            <div class="second">
                <p class="light">LEGAL AREA <span class="slash">  /  </span> PRIVACY POLICY</p>
            </div>
        </div>
    </div>
    `
}

export default footer;
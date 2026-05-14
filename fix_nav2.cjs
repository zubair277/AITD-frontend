const fs = require('fs'); 
let html = fs.readFileSync('public/site/mastersunion.org/index.html', 'utf8'); 

const newContent = `                    <div class="mobMenuBody">
                        <a href="#contact-us" class="directMobLinks" onclick="document.getElementById('mobileMenuCloseBtn').click()">
                            <p class="heading">Contact Us</p>
                        </a>
                        <a href="#testimonials" class="directMobLinks" onclick="document.getElementById('mobileMenuCloseBtn').click()">
                            <p class="heading">Testimonials</p>
                        </a>
                        <a href="#section__news" class="directMobLinks" onclick="document.getElementById('mobileMenuCloseBtn').click()">
                            <p class="heading">Events</p>
                        </a>
                        <a href="#lifeAtAITD" class="directMobLinks" onclick="document.getElementById('mobileMenuCloseBtn').click()">
                            <p class="heading">Life at AITD</p>
                        </a>
                        <a href="#placements" class="directMobLinks" onclick="document.getElementById('mobileMenuCloseBtn').click()">
                            <p class="heading">Placements</p>
                        </a>
                        <a href="#ourSpecialisations" class="directMobLinks" onclick="document.getElementById('mobileMenuCloseBtn').click()">
                            <p class="heading">Our Specialisations</p>
                        </a>
                        
                        <div class="mobMenuItem">
                            <div class="mobMenuItemHeader">
                                <p class="heading">Socials</p>
                                <img loading="lazy" src="../files.mastersunion.link/resources/svg/menutoggler.svg"
                                    alt="Icon" class="togglerDown" />
                            </div>
                            <div class="mobMenuItemBody">
                                <div class="mobMenuParent">
                                    <a href="https://www.instagram.com/aitd_mba/" target="_blank" rel="noreferrer" class="link">
                                        <p class="linkText">Instagram</p>
                                    </a>
                                    <a href="https://www.youtube.com/@AITD" target="_blank" rel="noreferrer" class="link">
                                        <p class="linkText">YouTube</p>
                                    </a>
                                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" class="link">
                                        <p class="linkText">Facebook</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>`; 

const replacedHtml = html.replace(/<div class="mobMenuBody">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<script>/i, newContent + '\n                </div>\n            </div>\n        </div>\n        \n        <script>');

if (replacedHtml !== html) {
    fs.writeFileSync('public/site/mastersunion.org/index.html', replacedHtml); 
    console.log('Replaced successfully!'); 
} else {
    console.log('Regex did not match.');
}

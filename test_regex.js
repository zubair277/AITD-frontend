const html = `                <img src="/images/aitd-bg-mobile.jpeg"
                    fetchpriority="high" class="bgHeroImage " alt="mobileHomepageBackground">`;

console.log(html.replace(
    /<img\s+src="[^"]+"\s+fetchpriority="high"\s+class="bgHeroImage\s*"\s+alt="mobileHomepageBackground">/i,
    '<img src="/images/aitd-bg-mobile.jpeg" fetchpriority="high" class="bgHeroImage" alt="" aria-hidden="true">'
));

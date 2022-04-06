import{r as a,o as r,c as l,a as e,b as o,w as d,F as h,e as n,d as t}from"./app.0bb7c16f.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const c={},p=n('<h2 id="required-reading" tabindex="-1"><a class="header-anchor" href="#required-reading" aria-hidden="true">#</a> Required Reading</h2><p>iOS and iPadOS devices can typically only update to firmware versions which Apple has &quot;signed&quot;. This usually means that you can only update to the most recent firmware versions. This is bad for jailbreaking, as most jailbreaks rely on exploits that have been patched in newer versions.</p><p>Fortunately, we can use different &quot;profiles&quot; to delay a firmware update. This is intended for organisations which require additional time to update their devices, however we can also use these to update to unsigned firmware versions.</p><p>This has a time limit, however. You will only be able to update to the following firmware versions before their respective expiration dates:</p><ul><li><strong>15.2</strong> - April 11th, 2022</li><li><strong>15.2.1</strong> - April 26th, 2022</li><li><strong>15.3</strong> - May 11th, 2022</li></ul>',5),_=t("Time is given in "),g=e("code",null,"UTC 00:00",-1),f=t(". For more expiration dates, view "),b={href:"https://dhinakg.github.io/delayed-otas.html",target:"_blank",rel:"noopener noreferrer"},y=t("dhinakg.github.io/delayed-otas.html"),m=t("."),v=n('<p>Because you do not currently have a jailbreak (or you choose not to jailbreak for any reason), you&#39;ll have to use advanced methods, involving things such as resetting all contents and settings, to be able to update.</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Depending on your target iOS version, you won&#39;t be able to do this if you futurerestored after the following dates:</p><ul><li>15.2: January 12th, 2022</li></ul></div><h2 id="preparing" tabindex="-1"><a class="header-anchor" href="#preparing" aria-hidden="true">#</a> Preparing</h2><ol><li>Plug your iDevice into your computer and make a backup through iTunes or Finder</li></ol><p>After making a backup, what you need to do after is dependent on if you use macOS or Windows</p><h2 id="macos-apple-configurator-2" tabindex="-1"><a class="header-anchor" href="#macos-apple-configurator-2" aria-hidden="true">#</a> macOS - Apple Configurator 2</h2><ol><li>Go to the App Store on your Mac</li><li>Search for <code>Apple Configurator 2</code> and install it</li><li>Setup Apple Configurator 2</li><li>Click Get Started</li><li>Click on your device, and then click Prepare</li><li>Select <code>Manual Configuration</code></li><li>Choose <code>Do not enroll in MDM</code></li><li>Go to <code>Organization</code>, and click <code>New Organization</code></li><li>Either sign in to your Apple ID, or click Skip <ul><li>If you chose to skip signing into your Apple ID, add a name, then click Next</li></ul></li><li>Choose <code>Generate a new supervision identity</code><ul><li>If you&#39;ve done this before in Apple Configurator 2, you can <code>Choose an existing supervision identity</code> instead</li></ul></li><li>Configure the iOS Setup Assistant as you wish <ul><li>If you forgot to backup your data earlier in the guide, this is the last step where you&#39;ll be able to do this.</li></ul></li><li>Click <code>Prepare</code>, which will erase your device and supervise it</li></ol><h2 id="windows-imazing" tabindex="-1"><a class="header-anchor" href="#windows-imazing" aria-hidden="true">#</a> Windows - iMazing</h2><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>This method requires that you purchase iMazing, if you don&#39;t have money to purchase iMazing, you cannot follow this method</p></div>',9),w=t("Download and install iMazing from "),k={href:"https://imazing.com/download/windows",target:"_blank",rel:"noopener noreferrer"},x=t("here"),C=n("<li>After setting up iMazing, click the <code>Supervision</code> option</li><li>Click Next, click the button below <code>Organization</code>, then click Choose</li><li>Click the <code>+</code> button at the bottom left corner of the new window</li><li>Add a name, then click <code>Save</code></li><li>Click Choose, then click Next <ul><li>If you forgot to backup your data earlier in the guide, this is the last step where you&#39;ll be able to do this.</li></ul></li><li>Type the number it lists into the text box, then click <code>Next</code>, iMazing will erase your device and supervise it</li>",6),S=e("h2",{id:"updating-your-firmware-version",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#updating-your-firmware-version","aria-hidden":"true"},"#"),t(" Updating your firmware version")],-1),A=e("li",null,"When the device boots up after being erased, set it up, then open this page on your device",-1),T=t("Tap a version below to install its respective update profile: "),O=e("li",null,[e("a",{href:"/assets/files/delay_15_2.mobileconfig"},"15.2")],-1),z=t("For more firmware versions, view "),I={href:"https://dhinakg.github.io/delayed-otas.html",target:"_blank",rel:"noopener noreferrer"},q=t("dhinakg.github.io/delayed-otas.html"),D=t("."),M=e("li",null,"Reboot your device",-1),N=e("li",null,"Plug your device into power and connect to the Internet with Wi-Fi",-1),j=e("li",null,"Open the Settings application",-1),R=e("li",null,[t("Tap "),e("code",null,"General"),t(" -> "),e("code",null,"Software Update")],-1),F=e("li",null,"Ensure that the version displayed is the version you are intending to update to",-1),G=e("li",null,"Download and install the update",-1),P=e("li",null,"Once updated, remove the update profile through Settings",-1),E=e("p",null,"After updating, you can remove supervision and restore your backup you made earlier by erasing all content and settings.",-1),B=t("If you're having issues with updating, install "),U={href:"https://repo.cadoth.net/",target:"_blank",rel:"noopener noreferrer"},V=t("OTAEnabler"),W=t(" and reboot. If you're still having issues continue reading below."),L=n('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If the update was successful, continue to <a href="/get-started">Get Started</a> to jailbreak your device.</p></div><h2 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a> Troubleshooting</h2><h3 id="ios-is-up-to-date" tabindex="-1"><a class="header-anchor" href="#ios-is-up-to-date" aria-hidden="true">#</a> &quot;iOS is up to date&quot;</h3><ol><li>Remove any beta profiles installed</li><li>Install the OTADisabler tweak and then uninstall it</li><li>Restart your device <ul><li>You can also use ldrestart or a userspace reboot</li></ul></li></ol><h3 id="unable-to-check-for-updates" tabindex="-1"><a class="header-anchor" href="#unable-to-check-for-updates" aria-hidden="true">#</a> &quot;Unable to check for updates&quot;</h3>',5),Y=e("li",null,"Restore rootFS through your jailbreak",-1),J=t("Install and open the "),H=t("unc0ver"),K=t(" application"),Q=e("li",null,'Turn off "Disable updates"',-1),X=e("li",null,"Re-jailbreak using unc0ver",-1),Z=e("h3",{id:"it-just-freezes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#it-just-freezes","aria-hidden":"true"},"#"),t(" It just freezes")],-1),$=e("p",null,"Re-enable the OTA daemon using the iCleaner tweak",-1),ee=e("hr",null,null,-1),te=t("Credits to "),oe={href:"https://github.com/dhinakg/",target:"_blank",rel:"noopener noreferrer"},ie=t("dhinakg"),ne=t(" for discovering this method.");function ae(se,re){const i=a("OutboundLink"),s=a("router-link");return r(),l(h,null,[p,e("p",null,[_,g,f,e("a",b,[y,o(i)]),m]),v,e("ol",null,[e("li",null,[w,e("a",k,[x,o(i)])]),C]),S,e("ol",null,[A,e("li",null,[T,e("ul",null,[O,e("li",null,[z,e("a",I,[q,o(i)]),D])])]),M,N,j,R,F,G,P]),E,e("p",null,[B,e("a",U,[V,o(i)]),W]),L,e("ol",null,[Y,e("li",null,[J,o(s,{to:"/installing-unc0ver"},{default:d(()=>[H]),_:1}),K]),Q,X]),Z,$,ee,e("p",null,[te,e("a",oe,[ie,o(i)]),ne])],64)}var he=u(c,[["render",ae]]);export{he as default};

import{r as a,o as r,c as d,a as e,b as t,w as s,F as c,d as o,e as n}from"./app.0bb7c16f.js";import{_ as u}from"./Odysseyn1x.f106730e.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";const y={},p=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"WARNING"),e("p",null,"If you are using a computer with an AMD Ryzen CPU, you will likely run into issues. If you do run into issues, you should use a Mac or a computer with an Intel CPU to follow this guide.")],-1),_=o("Odysseyra1n is a "),f=o("semi-tethered jailbreak"),m=o(", meaning it requires a PC to re-apply the exploit after a reboot. Click the link to learn more."),b=e("p",null,"Odysseyn1x is a live bootable Linux environment that allows you to quickly run checkra1n on a compatible device. checkra1n is capable of jailbreaking millions of iOS devices with A7 to A11 SoC's on firmwares 12.0 to 14.8.1.",-1),g=e("p",null,"After installing checkra1n, we'll be using a script to install Odysseyra1n. This replaces important parts of the jailbreak with modern and fast alternatives.",-1),k=e("p",null,"On iOS 14:",-1),w=e("ul",null,[e("li",null,[o("Odysseyra1n is only fully supported on A8, A9, A10(X), and A11 devices. A8X and A9X devices are only fully supported up to 14.4.2 using an older version of checkra1n, with a special method required for A8X and A9X devices on 14.5 to 14.8.1, which is detailed at "),e("a",{href:"/using-odysseyn1x-a9x"},"Using Odysseyn1x (A9X)"),o(".")]),e("li",null,"A11 devices do not allow you to use SEP functionality in a jailbroken state. SEP functionality are things such as a passcode, Face ID/Touch ID, and Apple Pay.")],-1),v=e("h2",{id:"requirements",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#requirements","aria-hidden":"true"},"#"),o(" Requirements")],-1),O=e("li",null,"256MB or greater USB Drive",-1),S=o("The latest version of "),x={href:"https://github.com/raspberryenvoie/odysseyn1x/releases",target:"_blank",rel:"noopener noreferrer"},A=o("Odysseyn1x"),q=o("If you are on an A8X or A9X device, you should instead get the v2.9 release of "),B={href:"https://github.com/raspberryenvoie/odysseyn1x/releases/tag/v2.9",target:"_blank",rel:"noopener noreferrer"},C=o("Odysseyn1x"),D=e("li",null,'For 64-bit computers, download the "AMD64" version',-1),I=e("li",null,'For 32-bit computers, download the "i686" version',-1),U={href:"https://www.balena.io/etcher/",target:"_blank",rel:"noopener noreferrer"},T=o("balenaEtcher"),F=n('<p><img src="'+u+'" alt="A screenshot of the Odysseyn1x menu"></p><h2 id="flashing-odysseyn1x" tabindex="-1"><a class="header-anchor" href="#flashing-odysseyn1x" aria-hidden="true">#</a> Flashing Odysseyn1x</h2><ol><li>Download and install balenaEtcher</li><li>Click <code>Flash from file</code></li><li>Select the odysseyn1x <code>.iso</code> file</li><li>Click <code>Select target</code></li><li>Select the USB drive you would like to boot from <ul><li>This USB drive will be completely erased</li><li>Ensure you back up all important data beforehand</li></ul></li><li>Click <code>Flash!</code><ul><li>Do not remove your USB Drive until the process has completed</li></ul></li><li>Once the flashing has completed, reboot your computer</li><li>Go into your BIOS settings and disable Secure Boot, then enter the boot picker and select your USB Drive to boot from <ul><li>This is different for every computer</li><li>Search your PC or motherboard brand to find out how to get to your BIOS settings if you are unsure</li></ul></li></ol><h2 id="running-checkra1n" tabindex="-1"><a class="header-anchor" href="#running-checkra1n" aria-hidden="true">#</a> Running checkra1n</h2>',4),X=n("<li>Once you have loaded odysseyn1x, select <code>checkra1n</code><ul><li>If you&#39;re on an A11 device, you will need to head into <code>Options</code>, then enable the <code>Skip A11 BPR Check</code> option once it runs</li><li>If you&#39;re on iOS 14.6 or later, you will need to head into <code>Options</code>, then enable the <code>Allow Untested Versions</code> option once it runs</li><li>If you&#39;re on an A8X or A9X device and are on iOS 14.4 to 14.4.2, you will need to head into <code>Options</code>, then enable the <code>Allow Untested Versions</code> option once it runs</li></ul></li><li>Click <code>Start</code> and follow all onscreen prompts</li>",2),P=o("You will now be presented with instructions in how to reboot your device into "),j=o("DFU mode"),E=o(", click "),N=e("code",null,"Start",-1),R=o(" to begin "),G=e("ul",null,[e("li",null,"Follow the instructions until your device reboots to a black screen")],-1),V=e("li",null,"Once your device boots, you can quit checkra1n, but do not shut down your computer",-1),L=n('<h2 id="the-odysseyra1n-script" tabindex="-1"><a class="header-anchor" href="#the-odysseyra1n-script" aria-hidden="true">#</a> The Odysseyra1n script</h2><p>The following steps only need to be performed once and are optional but highly recommended for a smoother experience and modern bootstrap.</p><ol><li>Unlock your device</li><li>Ensure that your computer is trusted by your device</li><li>Select <code>Odysseyra1n</code> in Odysseyn1x</li><li>Sileo should install to your device</li><li>Do not close Odysseyn1x as you will need to re-jailbreak in a few minutes</li></ol><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>After installing Odysseyra1n, <strong>do not</strong> install Cydia from the Loader app.</p></div>',4),M=o("You should now be jailbroken with Sileo installed on your home screen. You can use Sileo to install "),Y=o("tweaks"),z=o(", themes, packages and more."),Q=n('<p>Before you can start installing anything else, you first need to install a few necessary programs.</p><h2 id="installing-packages" tabindex="-1"><a class="header-anchor" href="#installing-packages" aria-hidden="true">#</a> Installing packages</h2><ol><li>Open the newly installed Sileo application</li><li>Go to the &quot;Packages&quot; tab</li><li>Tap &quot;Upgrade All&quot; if there are any updates <ul><li>Do not install yet</li></ul></li><li>Go to the &quot;Search&quot; tab</li><li>Search for the &quot;libhooker&quot; package</li><li>Tap the &quot;Get&quot; button</li><li>Tap on the &quot;Queued&quot; bar at the bottom of your screen</li><li>Tap &quot;Confirm&quot;</li><li>Once finished, tap &#39;Restart SpringBoard&#39;</li></ol>',3);function W(H,J){const i=a("router-link"),l=a("OutboundLink");return r(),d(c,null,[p,e("p",null,[_,t(i,{to:"/types-of-jailbreak/#semi-tethered-jailbreaks"},{default:s(()=>[f]),_:1}),m]),b,g,k,w,v,e("ul",null,[O,e("li",null,[S,e("a",x,[A,t(l)]),e("ul",null,[e("li",null,[q,e("a",B,[C,t(l)])]),D,I])]),e("li",null,[e("a",U,[T,t(l)])])]),F,e("ol",null,[X,e("li",null,[P,t(i,{to:"/faq/#what-is-dfu-mode"},{default:s(()=>[j]),_:1}),E,N,R,G]),V]),L,e("p",null,[M,t(i,{to:"/faq/#what-are-tweaks"},{default:s(()=>[Y]),_:1}),z]),Q],64)}var ee=h(y,[["render",W]]);export{ee as default};

import{_ as p}from"./windows-system-settings.f56fd6a5.js";import{_ as m,o as b,c as g,f as d,a as e,b as a,d as n,w as t,e as h,r as u}from"./app.73a0c550.js";const _={},f=e("h2",{id:"installing-pulsar",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-pulsar","aria-hidden":"true"},"#"),a(" Installing Pulsar")],-1),v=e("p",null,"To get started with Pulsar, we'll need to get it on your system. This section will go over installing Pulsar on your system, as well as the basics of how to build it from source.",-1),y={href:"https://pulsar-edit.dev/",target:"_blank",rel:"noopener noreferrer"},w=e("p",null,"Simply select your operating system (if not opened automatically) and architecture (where necessary) and choose the type of download you require.",-1),x=e("p",null,"The button or buttons should be specific to your platform, and the download package should be easily installable. However, let's go over them here in a bit of detail.",-1),P=e("h3",{id:"universal-releases",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#universal-releases","aria-hidden":"true"},"#"),a(" Universal releases")],-1),k=e("p",null,[a("Releases are provided in "),e("code",null,".AppImage"),a(" and "),e("code",null,".tar.gz"),a(' "universal" formats that should work on most distributions.')],-1),S=e("h4",{id:"appimage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#appimage","aria-hidden":"true"},"#"),a(" AppImage")],-1),A=e("p",null,"Simply run the Pulsar AppImage from your file manager or the terminal:",-1),T=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,`$ ./pulsar_1.100.0_amd64.AppImage
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),O={href:"https://github.com/TheAssassin/AppImageLauncher",target:"_blank",rel:"noopener noreferrer"},D=e("h4",{id:"tar-gz",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tar-gz","aria-hidden":"true"},"#"),a(" tar.gz")],-1),I=e("p",null,[a("Simply extract and run the "),e("code",null,"pulsar"),a(" binary or integrate it into your system manually.")],-1),L=e("h3",{id:"debian-ubuntu-based-distributions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#debian-ubuntu-based-distributions","aria-hidden":"true"},"#"),a(" Debian/Ubuntu based distributions")],-1),W=e("code",null,".deb",-1),U=e("p",null,"You can install this by opening it in your file manager or via the terminal:",-1),E=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[a("$ "),e("span",{class:"token function"},"sudo"),a(),e("span",{class:"token function"},"apt"),a(),e("span",{class:"token function"},"install"),a(` ./pulsar_1.100.0_amd64.deb
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),Y=e("h3",{id:"fedora-rhel-based-distributions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#fedora-rhel-based-distributions","aria-hidden":"true"},"#"),a(" Fedora/RHEL based distributions")],-1),z=e("code",null,".rpm",-1),F=e("p",null,"You can install this by opening it in your file manager or via the terminal:",-1),R=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# On DNF-based distributions"),a(`
$ `),e("span",{class:"token function"},"sudo"),a(" dnf "),e("span",{class:"token function"},"install"),a(),e("span",{class:"token parameter variable"},"-y"),a(` ./pulsar_1.100.0_amd64.rpm

`),e("span",{class:"token comment"},"# On YUM-based distributions"),a(`
$ `),e("span",{class:"token function"},"sudo"),a(" yum "),e("span",{class:"token function"},"install"),a(),e("span",{class:"token parameter variable"},"-y"),a(` ./pulsar_1.100.0_amd64.rpm
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),B=e("code",null,".dmg",-1),H=e("code",null,"Pulsar",-1),N=e("p",null,[a("If you prefer to install from "),e("code",null,".zip"),a(", this is also provided and requires you to extract the file and drag the "),e("code",null,"Pulsar"),a(' application into your "Applications" folder.')],-1),C={href:"https://en.wikipedia.org/wiki/Portable_application",target:"_blank",rel:"noopener noreferrer"},M=e("p",null,"We also have Pulsar available in certain package manager repositories. See the relevant section within the downloads for the installation commands.",-1),$=e("p",null,[e("img",{src:p,alt:"Pulsar on Windows"})],-1),V=e("p",null,[a("The context menu "),e("code",null,"Open with Pulsar"),a(" in File Explorer, and the option to make Pulsar available for file association using "),e("code",null,"Open with..."),a(", is controlled by the System Settings panel as seen above.")],-1),q=e("p",null,[a("With Pulsar open, click on "),e("code",null,"File > Settings"),a(", and then the "),e("code",null,"System"),a(" tab on the left. Check the boxes next to "),e("code",null,"Show in file context menus"),a(", as well as "),e("code",null,"Show in folder context menus"),a(". And you\u2019re all set.")],-1),G=e("h3",{id:"updating-pulsar",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#updating-pulsar","aria-hidden":"true"},"#"),a(" Updating Pulsar")],-1),j=e("p",null,"You should consider updating Pulsar periodically for the latest improvements to the software. Additionally, When Pulsar receives hotfixes for security vulnerabilities you will want to update your version of Pulsar as soon as possible.",-1),X=e("p",null,"If you have installed Pulsar via a package manager then you should use the instructions provided by that package manager for updating your installation.",-1),J=e("h3",{id:"portable-mode",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#portable-mode","aria-hidden":"true"},"#"),a(" Portable Mode")],-1),K=e("p",null,[a("Pulsar stores configuration and state in a "),e("code",null,".pulsar"),a(" directory usually located in your home directory ("),e("code",null,"%userprofile%"),a(" on Windows). You can however run Pulsar in portable mode where both the app and the configuration are stored together such as on a removable storage device.")],-1),Q=e("p",null,"To setup Pulsar in portable mode download the relevant package and extract it to your removable storage.",-1),Z=e("p",null,[a("Download the "),e("code",null,".appimage"),a(" or "),e("code",null,".tar.gz"),a(" release then create a "),e("code",null,".pulsar"),a(" directory alongside the directory that contains the Pulsar binary, for example:")],-1),ee=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`/media/myusb/pulsar-1.100.0/.pulsar
/media/myusb/.pulsar
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),ae=e("p",null,[a("Download the "),e("code",null,".zip"),a(" release then create a "),e("code",null,".pulsar"),a(" directory alongside the Pulsar.app application, for example:")],-1),te=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`/MyUSB/Pulsar.app
/MyUSB/.pulsar
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),ne=e("p",null,[a("Download the "),e("code",null,"Portable"),a(" release then create a "),e("code",null,".pulsar"),a(" directory alongside the directory that contains pulsar.exe, for example:")],-1),se=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`e:\\pulsar-1.100.0\\pulsar.exe
e:\\.pulsar
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),oe=h('<h4 id="portable-notes" tabindex="-1"><a class="header-anchor" href="#portable-notes" aria-hidden="true">#</a> Portable Notes</h4><ul><li>The <code>.pulsar</code> directory must be writeable</li><li>You can move an existing <code>.pulsar</code> directory to your portable device</li><li>Pulsar can also store its Electron user data in your <code>.pulsar</code> directory - just create a subdirectory called <code>electronUserData</code> inside <code>.pulsar</code></li><li>Alternatively you can set the <code>ATOM_HOME</code> environment variable to point wherever you want (you can write a .sh or .cmd script to temporarily set it and launch it from that)</li><li>Portable mode installations will not automatically update</li></ul><h3 id="building-pulsar-from-source" tabindex="-1"><a class="header-anchor" href="#building-pulsar-from-source" aria-hidden="true">#</a> Building Pulsar from Source</h3>',3),le=h(`<h3 id="proxy-and-firewall-settings" tabindex="-1"><a class="header-anchor" href="#proxy-and-firewall-settings" aria-hidden="true">#</a> Proxy and Firewall Settings</h3><h4 id="behind-a-firewall" tabindex="-1"><a class="header-anchor" href="#behind-a-firewall" aria-hidden="true">#</a> Behind a Firewall?</h4><p>If you are behind a firewall and seeing SSL errors when installing packages you can disable strict SSL by running:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ pulsar <span class="token parameter variable">-p</span> config <span class="token builtin class-name">set</span> strict-ssl <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="using-a-proxy" tabindex="-1"><a class="header-anchor" href="#using-a-proxy" aria-hidden="true">#</a> Using a Proxy?</h4><p>If you are using a HTTP(S) proxy you can configure <code>ppm</code> to use it by running:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ pulsar <span class="token parameter variable">-p</span> config <span class="token builtin class-name">set</span> https-proxy <span class="token operator">&lt;</span>YOUR_PROXY_ADDRESS<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You can run <code>pulsar -p config get https-proxy</code> to verify it has been set correctly.</p>`,8);function ie(re,de){const r=u("ExternalLinkIcon"),s=u("RouterLink"),c=u("Tabs");return b(),g("div",null,[f,d("TODO: We need a section here somewhere about how to get pulsar onto the PATH for all systems as it seems to be broken on mac and windows. Also needed for tar.gz and appimage"),v,e("p",null,[a("Installing Pulsar should be fairly simple. Generally, you can go to "),e("a",y,[a("pulsar-edit.dev"),n(r)]),a(" and you should see a download button.")]),w,x,n(c,{id:"16",data:[{title:"Linux"},{title:"macOS"},{title:"Windows"}],"tab-id":"getting-started"},{tab0:t(({title:o,value:l,isActive:i})=>[d("TODO: When/if we introduce other repository based downloads then we can re-instate much of this from the archived atom section"),P,k,S,A,T,e("p",null,[a("For deeper integration into the system consider using "),e("a",O,[a("AppImageLauncher"),n(r)]),a(".")]),D,I,L,e("p",null,[a("To install Pulsar on Debian, Ubuntu, or related distributions download the "),W,a(" from either the latest release or beta/dev version from "),n(s,{to:"/download.html"},{default:t(()=>[a("Pulsar Downloads")]),_:1}),a(".")]),U,E,Y,e("p",null,[a("To install Pulsar on Fedora, RHEL, or related distributions download the "),z,a(" from either the latest release or beta/dev version from "),n(s,{to:"/download.html"},{default:t(()=>[a("Pulsar Downloads")]),_:1}),a(".")]),F,R]),tab1:t(({title:o,value:l,isActive:i})=>[e("p",null,[a("Pulsar follows the standard macOS installation process. Grab the correct download "),B,a(" for your system from "),n(s,{to:"/download.html"},{default:t(()=>[a("Pulsar Downloads")]),_:1}),a(". Once you have the file, you can open it to run the installer and drag the new "),H,a(' application into your "Applications" folder.')]),N]),tab2:t(({title:o,value:l,isActive:i})=>[e("p",null,[a("Pulsar is available as a 64-bit Windows installer and "),e("a",C,[a("portable app"),n(r)]),a(" that can be downloaded from "),n(s,{to:"/download.html"},{default:t(()=>[a("Pulsar Downloads")]),_:1}),a(".")]),M,$,V,q]),_:1}),G,j,e("p",null,[a("Currently Pulsar does not support automatic updates. What this means is that new versions will have to be obtained via the "),n(s,{to:"/download.html"},{default:t(()=>[a("Pulsar Downloads")]),_:1}),a(" here on our website. This is something on our roadmap to change as soon as possible.")]),X,d("TODO: Auto upgrade instructions - selectively pull info from atom archive as this becomes possible"),J,K,Q,n(c,{id:"110",data:[{title:"Linux"},{title:"macOS"},{title:"Windows"}],"tab-id":"getting-started"},{tab0:t(({title:o,value:l,isActive:i})=>[Z,ee]),tab1:t(({title:o,value:l,isActive:i})=>[ae,te]),tab2:t(({title:o,value:l,isActive:i})=>[ne,se]),_:1}),oe,e("p",null,[a("The "),n(s,{to:"/docs/launch-manual/sections/core-hacking/#building-pulsar"},{default:t(()=>[a("Hacking the Core")]),_:1}),a(" section of the launch manual covers instructions on how to clone and build the source code if you prefer that option.")]),le])}const he=m(_,[["render",ie],["__file","installing-pulsar.html.vue"]]);export{he as default};

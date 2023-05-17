import{_ as d,o as c,c as s,a as n,b as e,d as o,w as r,e as l,r as a}from"./app.73a0c550.js";const m={},u=n("h3",{id:"contributing-to-official-atom-packages",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#contributing-to-official-atom-packages","aria-hidden":"true"},"#"),e(" Contributing to Official Atom Packages")],-1),p={href:"https://github.com/atom/atom",target:"_blank",rel:"noopener noreferrer"},h=n("h4",{id:"hacking-on-packages",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#hacking-on-packages","aria-hidden":"true"},"#"),e(" Hacking on Packages")],-1),g=n("h5",{id:"cloning",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#cloning","aria-hidden":"true"},"#"),e(" Cloning")],-1),v=n("code",null,"apm install",-1),k=l(`<p>For example, if you want to make changes to the <code>tree-view</code> package, fork the repo on your github account, then clone it:</p><div class="language-command-line ext-command-line line-numbers-mode"><pre class="language-command-line"><code>$ git clone git@github.com:&lt;em&gt;your-username&lt;/em&gt;/tree-view.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Next install all the dependencies:</p><div class="language-command-line ext-command-line line-numbers-mode"><pre class="language-command-line"><code>$ cd tree-view
$ apm install
&gt; Installing modules \u2713
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now you can link it to development mode so when you run an Atom window with <code>atom --dev</code>, you will use your fork instead of the built in package:</p><div class="language-command-line ext-command-line line-numbers-mode"><pre class="language-command-line"><code>$ apm link -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="running-in-development-mode" tabindex="-1"><a class="header-anchor" href="#running-in-development-mode" aria-hidden="true">#</a> Running in Development Mode</h5><p>Editing a package in Atom is a bit of a circular experience: you&#39;re using Atom to modify itself. What happens if you temporarily break something? You don&#39;t want the version of Atom you&#39;re using to edit to become useless in the process. For this reason, you&#39;ll only want to load packages in <strong>development mode</strong> while you are working on them. You&#39;ll perform your editing in <strong>stable mode</strong>, only switching to development mode to test your changes.</p><p>To open a development mode window, use the &quot;Application: Open Dev&quot; command. You can also run dev mode from the command line with <code>atom --dev</code>.</p><p>To load your package in development mode, create a symlink to it in <code>~/.atom/dev/packages</code>. This occurs automatically when you clone the package with <code>apm develop</code>. You can also run <code>apm link --dev</code> and <code>apm unlink --dev</code> from the package directory to create and remove dev-mode symlinks.</p><h5 id="installing-dependencies" tabindex="-1"><a class="header-anchor" href="#installing-dependencies" aria-hidden="true">#</a> Installing Dependencies</h5><p>You&#39;ll want to keep dependencies up to date by running <code>apm update</code> after pulling any upstream changes.</p>`,12);function f(b,y){const i=a("ExternalLinkIcon"),t=a("RouterLink");return c(),s("div",null,[u,n("p",null,[e("If you think you know which package is causing the issue you are reporting, feel free to open up the issue in that specific repository instead. When in doubt just open the issue on the "),n("a",p,[e("atom/atom"),o(i)]),e(" repository but be aware that it may get closed and reopened in the proper package's repository.")]),h,g,n("p",null,[e("The first step is creating your own clone. For some packages, you may also need to install the "),o(t,{to:"/hacking-atom/sections/hacking-on-atom-core/#building"},{default:r(()=>[e("requirements necessary for building Atom")]),_:1}),e(" in order to run "),v,e(".")]),k])}const w=d(m,[["render",f],["__file","contributing-to-official-atom-packages.html.vue"]]);export{w as default};

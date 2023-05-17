import{_ as r,o as l,c,a as o,b as e,d as a,w as d,f as u,e as n,r as t}from"./app.73a0c550.js";const p={},h=o("h2",{id:"publishing",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#publishing","aria-hidden":"true"},"#"),e(" Publishing")],-1),g=o("code",null,"ppm",-1),m=o("code",null,"pulsar",-1),b=o("code",null,"-p",-1),_=o("code",null,"--package",-1),f=o("code",null,"pulsar -p",-1),k=o("p",null,[e("See more in "),o("a",{href:"#using-ppm"},"Using PPM"),e(".")],-1),v=o("h3",{id:"prepare-your-package",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#prepare-your-package","aria-hidden":"true"},"#"),e(" Prepare Your Package")],-1),y=o("p",null,"There are a few things you should double check before publishing:",-1),w=n("<li>Your <code>package.json</code> file has <code>name</code>, <code>description</code>, and <code>repository</code> fields.</li><li>Your <code>package.json</code> <code>name</code> is URL Safe, as in it&#39;s not an emoji or special character.</li><li>Your <code>package.json</code> file has a <code>version</code> field with a value of <code>&quot;0.0.0&quot;</code>.</li>",3),P=o("code",null,"package.json",-1),x=o("code",null,"version",-1),R={href:"https://semver.org/spec/v2.0.0.html",target:"_blank",rel:"noopener noreferrer"},Y=n("<li>Your <code>package.json</code> file has an <code>engines</code> field that contains an entry for <code>atom</code> such as: <code>&quot;engines&quot;: {&quot;atom&quot;: &quot;&gt;=1.0.0 &lt;2.0.0&quot;}</code>.</li><li>Your package has a <code>README.md</code> file at the root.</li><li>Your <code>repository</code> URL in the <code>package.json</code> file is the same as the URL of your repository.</li>",3),j={href:"https://github.com",target:"_blank",rel:"noopener noreferrer"},q={href:"https://help.github.com/articles/importing-a-git-repository-using-the-command-line/",target:"_blank",rel:"noopener noreferrer"},T=o("h3",{id:"publish-your-package",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#publish-your-package","aria-hidden":"true"},"#"),e(" Publish Your Package")],-1),I={href:"https://web.pulsar-edit.dev/packages",target:"_blank",rel:"noopener noreferrer"},L=o("code",null,"https://web.pulsar-edit.dev/packages/your-package-name",-1),N=o("p",null,[e("Now let's review what the "),o("code",null,"pulsar -p publish"),e(" command does:")],-1),C=o("li",null,"Registers the package name on Pulsar Package Repository if it is being published for the first time.",-1),G=o("li",null,[e("Updates the "),o("code",null,"version"),e(" field in the "),o("code",null,"package.json"),e(" file and commits it.")],-1),H={href:"https://git-scm.com/book/en/Git-Basics-Tagging",target:"_blank",rel:"noopener noreferrer"},U=o("li",null,"Pushes the tag and current branch up to GitHub.",-1),V=o("li",null,"Updates Pulsar Package Repository with the new version being published.",-1),A=n(`<p>Now run the following commands to publish your package:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> path-to-your-package
$ pulsar <span class="token parameter variable">-p</span> publish minor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,2),B=o("code",null,"pulsar -p publish",-1),E={href:"https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/",target:"_blank",rel:"noopener noreferrer"},S={href:"https://en.wikipedia.org/wiki/Keychain_(software)",target:"_blank",rel:"noopener noreferrer"},M=n(`<p>Your package is now published and available on Pulsar Package Repository. Head on over to <code>https://web.pulsar-edit.dev/packages/your-package-name</code> to see your package&#39;s page.</p><p>With <code>pulsar -p publish</code>, you can bump the version and publish by using</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ pulsar <span class="token parameter variable">-p</span> publish <span class="token operator">&lt;</span>version-type<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>where <code>version-type</code> can be <code>major</code>, <code>minor</code> and <code>patch</code>.</p><ul><li><strong>MAJOR</strong> version when you make incompatible API changes</li><li><strong>MINOR</strong> version when you add functionality in a backwards compatible manner</li><li><strong>PATCH</strong> version when you make backwards compatible bug fixes</li></ul><p>i.e. to bump a package from v1.<strong>0</strong>.0 to v1.<strong>1</strong>.0:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ pulsar <span class="token parameter variable">-p</span> publish minor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7),O={href:"https://semver.org/",target:"_blank",rel:"noopener noreferrer"},$=o("p",null,[e("You can also run "),o("code",null,"pulsar -p help publish"),e(" to see all the available options and "),o("code",null,"pulsar -p help"),e(" to see all the other available commands.")],-1);function D(F,J){const i=t("RouterLink"),s=t("ExternalLinkIcon");return l(),c("div",null,[h,o("p",null,[e("Pulsar bundles a command line utility called "),g,e(" which we first used back in "),a(i,{to:"/docs/launch-manual/sections/using-pulsar/#command-line"},{default:d(()=>[e("Command Line")]),_:1}),e(" to search for and install packages via the command line. This is invoked by using the "),m,e(" command with the "),b,e(" or "),_,e(" option. The "),f,e(" command can also be used to publish Pulsar packages to the public registry and update them.")]),k,v,y,o("ul",null,[w,o("li",null,[e("Your "),P,e(),x,e(" field is "),o("a",R,[e("Semver V2"),a(s)]),e(" compliant.")]),Y,o("li",null,[e("Your package is in a Git repository that has been pushed to "),o("a",j,[e("GitHub"),a(s)]),e(". Follow "),o("a",q,[e("this guide"),a(s)]),e(" if your package isn't already on GitHub.")])]),T,o("p",null,[e("Before you publish a package it is a good idea to check ahead of time if a package with the same name has already been published to "),o("a",I,[e("the Pulsar Package Repository"),a(s)]),e(". You can do that by visiting "),L,e(" to see if the package already exists. If it does, update your package's name to something that is available before proceeding.")]),N,o("ol",null,[C,G,o("li",null,[e("Creates a new "),o("a",H,[e("Git tag"),a(s)]),e(" for the version being published.")]),U,V]),A,u(" TODO: Rewrite this Section once Authentication Information is Public "),o("p",null,[e("If this is the first package you are publishing, the "),B,e(" command may prompt you for your GitHub username and password. If you have two-factor authentication enabled, use a "),o("a",E,[e("personal access token"),a(s)]),e(" in lieu of a password. This is required to publish and you only need to enter this information the first time you publish. The credentials are stored securely in your "),o("a",S,[e("keychain"),a(s)]),e(" once you login.")]),M,o("p",null,[e("Check out "),o("a",O,[e("semantic versioning"),a(s)]),e(" to learn more about best practices for versioning your package releases.")]),$])}const W=r(p,[["render",D],["__file","publishing.html.vue"]]);export{W as default};

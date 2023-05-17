import{_ as o,o as c,c as r,d as p,w as s,a as e,b as a,e as u,r as d}from"./app.73a0c550.js";const m={},b=e("h2",{id:"using-ppm-pulsar-package-manager",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#using-ppm-pulsar-package-manager","aria-hidden":"true"},"#"),a(" Using ppm (Pulsar Package Manager)")],-1),h=e("p",null,[e("code",null,"ppm"),a(" is used for installing and managing Pulsar's packages in much the same way that "),e("code",null,"apm"),a(" did on Atom. However at this point in the project there are a few hoops you have to jump through to get it to work correctly.")],-1),v=e("p",null,[a("After following the build instructions you will find the "),e("code",null,"ppm"),a(" binary at "),e("code",null,"pulsar/ppm/bin/apm"),a(" but by default Pulsar will be looking in the wrong place. There will also be issues relating to the Electron version which will prevent install from the package backend. To solve this a couple of environmental variables need to be exported.")],-1),g=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token builtin class-name"},"export"),a(),e("span",{class:"token assign-left variable"},"ATOM_HOME"),e("span",{class:"token operator"},"="),a("/home/"),e("span",{class:"token operator"},"<"),a("user"),e("span",{class:"token operator"},">"),a(`/.pulsar
`),e("span",{class:"token builtin class-name"},"export"),a(),e("span",{class:"token assign-left variable"},"APM_PATH"),e("span",{class:"token operator"},"="),a(`/ppm/bin/apm
`),e("span",{class:"token builtin class-name"},"export"),a(),e("span",{class:"token assign-left variable"},"ATOM_ELECTRON_VERSION"),e("span",{class:"token operator"},"="),e("span",{class:"token number"},"12.2"),a(`.3
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),k=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,`TODO
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),_=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token builtin class-name"},"set"),a(),e("span",{class:"token assign-left variable"},"ATOM_HOME"),e("span",{class:"token operator"},"="),a("C:"),e("span",{class:"token punctuation"},"\\"),a("Users"),e("span",{class:"token punctuation"},"\\"),e("span",{class:"token operator"},"<"),a("user"),e("span",{class:"token operator"},">"),e("span",{class:"token punctuation"},"\\"),a(`.pulsar
`),e("span",{class:"token builtin class-name"},"set"),a(),e("span",{class:"token assign-left variable"},"APM_PATH"),e("span",{class:"token operator"},"="),e("span",{class:"token punctuation"},"\\"),a("ppm"),e("span",{class:"token punctuation"},"\\"),a("bin"),e("span",{class:"token punctuation"},"\\"),a(`apm
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),f=u(`<p>You can now use the binary to link or install packages.</p><p>For example to install the <code>ide-java</code> package from source:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># clone the repository and cd into it</span>
<span class="token function">git</span> clone https://github.com/pulsar-edit/ide-java
<span class="token builtin class-name">cd</span> ide-java

<span class="token comment"># from the directory where you are running pulsar source code</span>
<span class="token operator">&lt;</span>pulsar source<span class="token operator">&gt;</span>/ppm/bin/apm <span class="token function">link</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function w(x,A){const i=d("Tabs");return c(),r("div",null,[b,h,v,p(i,{id:"9",data:[{title:"Linux"},{title:"macOS"},{title:"Windows"}],"tab-id":"core-hacking"},{tab0:s(({title:n,value:t,isActive:l})=>[g]),tab1:s(({title:n,value:t,isActive:l})=>[k]),tab2:s(({title:n,value:t,isActive:l})=>[_]),_:1}),f])}const y=o(m,[["render",w],["__file","using-ppm.html.vue"]]);export{y as default};

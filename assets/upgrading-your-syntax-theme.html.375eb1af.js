import{_ as o,o as a,c as l,a as e,b as t,d as s,e as i,r as c}from"./app.73a0c550.js";const r={},d=e("div",{class:"custom-container note"},[e("p",{class:"custom-container-title"},"Note"),e("p",null,[e("strong",null,"Note:"),t(" The Shadow DOM was removed in Atom "),e("code",null,"1.13"),t(". The "),e("code",null,":host"),t(" selector described below won't work and should not be used anymore.")])],-1),h=e("h3",{id:"upgrading-your-syntax-theme",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#upgrading-your-syntax-theme","aria-hidden":"true"},"#"),t(" Upgrading Your Syntax Theme")],-1),p={href:"https://www.html5rocks.com/en/tutorials/webcomponents/shadowdom",target:"_blank",rel:"noopener noreferrer"},u=e("p",null,[t("Syntax themes are specifically intended to style only text editor content, so they are automatically loaded directly into the text editor's shadow DOM when it is enabled. This happens automatically when the theme's "),e("code",null,"package.json"),t(" contains a "),e("code",null,'theme: "syntax"'),t(" declaration, so you don't need to change anything to target the appropriate context.")],-1),m=e("em",null,"outside",-1),_=e("code",null,".editor",-1),k=e("code",null,".editor-colors",-1),b=e("code",null,":host",-1),g=e("code",null,"atom-text-editor",-1),v={href:"https://www.html5rocks.com/en/tutorials/webcomponents/shadowdom-201#toc-style-host",target:"_blank",rel:"noopener noreferrer"},y=e("code",null,":host",-1),w=i(`<p>Here&#39;s an example from Atom&#39;s light syntax theme. Note that the <code>atom-text-editor</code> selector intended to target the editor from the outside has been retained to allow the theme to keep working during the transition phase when it is possible to disable the shadow DOM.</p><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token selector">atom-text-editor,
:host</span> <span class="token punctuation">{</span>
	<span class="token comment">/* :host added */</span>
	<span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">@syntax-background-color</span><span class="token punctuation">;</span>
	<span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">@syntax-text-color</span><span class="token punctuation">;</span>

	<span class="token selector">.invisible-character</span> <span class="token punctuation">{</span>
		<span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">@syntax-invisible-character-color</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">/* more nested selectors... */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function x(f,M){const n=c("ExternalLinkIcon");return a(),l("div",null,[d,h,e("p",null,[t("Text editor content is now rendered in the shadow DOM, which shields it from being styled by global style sheets to protect against accidental style pollution. For more background on the shadow DOM, check out the "),e("a",p,[t("Shadow DOM 101"),s(n)]),t(" on HTML 5 Rocks.")]),u,e("p",null,[t("When theme style sheets are loaded into the text editor's shadow DOM, selectors intended to target the editor from the "),m,t(" no longer make sense. Styles targeting the "),_,t(" and "),k,t(" classes instead need to target the "),b,t(" pseudo-element, which matches against the containing "),g,t(" node. Check out the "),e("a",v,[t("Shadow DOM 201"),s(n)]),t(" article for more information about the "),y,t(" pseudo-element.")]),w])}const O=o(r,[["render",x],["__file","upgrading-your-syntax-theme.html.vue"]]);export{O as default};

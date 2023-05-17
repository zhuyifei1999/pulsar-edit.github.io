import{_ as o}from"./dep-cop.5ae11f10.js";import{_ as l,o as i,c as d,a as e,b as t,d as n,e as a,r as c}from"./app.73a0c550.js";const r={},p=a('<div class="custom-container note"><p class="custom-container-title">Note</p><p><strong>Note:</strong> The Shadow DOM was removed in Atom <code>1.13</code>. The <code>::shadow</code> and <code>/deep/</code> selectors and the context-targeted style sheets described below won&#39;t work and should not be used anymore.</p></div><h3 id="upgrading-your-ui-theme-or-package-selectors" tabindex="-1"><a class="header-anchor" href="#upgrading-your-ui-theme-or-package-selectors" aria-hidden="true">#</a> Upgrading Your UI Theme Or Package Selectors</h3><p>In addition to changes in Atom&#39;s scripting API, we&#39;ll also be making some breaking changes to Atom&#39;s DOM structure, requiring style sheets and keymaps in both packages and themes to be updated.</p><h4 id="deprecation-cop" tabindex="-1"><a class="header-anchor" href="#deprecation-cop" aria-hidden="true">#</a> Deprecation Cop</h4><p>Deprecation Cop will list usages of deprecated selector patterns to guide you. You can access it via the Command Palette (<code>cmd-shift-p</code>, then search for <code>Deprecation</code>). It breaks the deprecations down by package:</p><p><img src="'+o+'" alt="Deprecation Cop"></p><h4 id="custom-tags" tabindex="-1"><a class="header-anchor" href="#custom-tags" aria-hidden="true">#</a> Custom Tags</h4><p>Rather than adding classes to standard HTML elements to indicate their role, Atom now uses custom element names. For example, <code>&lt;div class=&quot;workspace&quot;&gt;</code> has now been replaced with <code>&lt;atom-workspace&gt;</code>. Selectors should be updated accordingly. Note that tag names have lower specificity than classes in CSS, so you&#39;ll need to take care in converting things.</p><table><thead><tr><th style="text-align:left;">Old Selector</th><th style="text-align:left;">New Selector</th></tr></thead><tbody><tr><td style="text-align:left;"><code>.editor</code></td><td style="text-align:left;"><code>atom-text-editor</code></td></tr><tr><td style="text-align:left;"><code>.editor.mini</code></td><td style="text-align:left;"><code>atom-text-editor[mini]</code></td></tr><tr><td style="text-align:left;"><code>.workspace</code></td><td style="text-align:left;"><code>atom-workspace</code></td></tr><tr><td style="text-align:left;"><code>.horizontal</code></td><td style="text-align:left;"><code>atom-workspace-axis.horizontal</code></td></tr><tr><td style="text-align:left;"><code>.vertical</code></td><td style="text-align:left;"><code>atom-workspace-axis.vertical</code></td></tr><tr><td style="text-align:left;"><code>.pane-container</code></td><td style="text-align:left;"><code>atom-pane-container</code></td></tr><tr><td style="text-align:left;"><code>.pane</code></td><td style="text-align:left;"><code>atom-pane</code></td></tr><tr><td style="text-align:left;"><code>.tool-panel</code></td><td style="text-align:left;"><code>atom-panel</code></td></tr><tr><td style="text-align:left;"><code>.panel-top</code></td><td style="text-align:left;"><code>atom-panel.top</code></td></tr><tr><td style="text-align:left;"><code>.panel-bottom</code></td><td style="text-align:left;"><code>atom-panel.bottom</code></td></tr><tr><td style="text-align:left;"><code>.panel-left</code></td><td style="text-align:left;"><code>atom-panel.left</code></td></tr><tr><td style="text-align:left;"><code>.panel-right</code></td><td style="text-align:left;"><code>atom-panel.right</code></td></tr><tr><td style="text-align:left;"><code>.overlay</code></td><td style="text-align:left;"><code>atom-panel.modal</code></td></tr></tbody></table><h4 id="supporting-the-shadow-dom" tabindex="-1"><a class="header-anchor" href="#supporting-the-shadow-dom" aria-hidden="true">#</a> Supporting the Shadow DOM</h4>',10),u={href:"https://www.html5rocks.com/en/tutorials/webcomponents/shadowdom",target:"_blank",rel:"noopener noreferrer"},h=e("ul",null,[e("li",null,"Highlight decorations"),e("li",null,"Gutter decorations"),e("li",null,"Line decorations"),e("li",null,"Scrollbar styling"),e("li",null,[t("Anything targeting a child selector of "),e("code",null,".editor")])],-1),m=e("p",null,"During a transition phase, it will be possible to enable or disable the text editor's shadow DOM in the settings, so themes will need to be compatible with both approaches.",-1),b=e("h5",{id:"shadow-dom-selectors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#shadow-dom-selectors","aria-hidden":"true"},"#"),t(" Shadow DOM Selectors")],-1),g=e("code",null,"::shadow",-1),k=e("code",null,"/deep/",-1),v={href:"https://www.html5rocks.com/en/tutorials/webcomponents/shadowdom-201#toc-style-cat-hat",target:"_blank",rel:"noopener noreferrer"},y=a(`<h6 id="shadow" tabindex="-1"><a class="header-anchor" href="#shadow" aria-hidden="true">#</a> <code>::shadow</code></h6><p>The <code>::shadow</code> pseudo-element allows you to bypass a single shadow root. For example, say you want to update a highlight decoration for a linter package. Initially, the style looks as follows:</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">// Without shadow DOM support
atom-text-editor .highlight.my-linter</span> <span class="token punctuation">{</span>
	<span class="token property">background</span><span class="token punctuation">:</span> hotpink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In order for this style to apply with the shadow DOM enabled, you will need to add a second selector with the <code>::shadow</code> pseudo-element. You should leave the original selector in place so your theme continues to work with the shadow DOM disabled during the transition period.</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">// With shadow DOM support
atom-text-editor .highlight.my-linter,
atom-text-editor::shadow .highlight.my-linter</span> <span class="token punctuation">{</span>
	<span class="token property">background</span><span class="token punctuation">:</span> hotpink<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),w={href:"https://github.com/atom/find-and-replace/blob/95351f261bc384960a69b66bf12eae8002da63f9/stylesheets/find-and-replace.less#L9-L29",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"::shadow",-1),f=a(`<h6 id="deep" tabindex="-1"><a class="header-anchor" href="#deep" aria-hidden="true">#</a> <code>/deep/</code></h6><p>The <code>/deep/</code> combinator overrides <em>all</em> shadow boundaries, making it useful for rules you want to apply globally such as scrollbar styling. Here&#39;s a snippet containing scrollbar styling for the Atom Dark UI theme before shadow DOM support:</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">// Without shadow DOM support
.scrollbars-visible-always</span> <span class="token punctuation">{</span>
	<span class="token selector">::-webkit-scrollbar</span> <span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">::-webkit-scrollbar-track,
	::-webkit-scrollbar-corner</span> <span class="token punctuation">{</span>
		<span class="token property">background</span><span class="token punctuation">:</span> <span class="token atrule"><span class="token rule">@scrollbar-background-color</span><span class="token punctuation">;</span></span>
	<span class="token punctuation">}</span>

	<span class="token selector">::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span>
		<span class="token property">background</span><span class="token punctuation">:</span> <span class="token atrule"><span class="token rule">@scrollbar-color</span><span class="token punctuation">;</span></span>
		<span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
		<span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px black inset<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To style scrollbars even inside of the shadow DOM, each rule needs to be prefixed with <code>/deep/</code>. We use <code>/deep/</code> instead of <code>::shadow</code> because we don&#39;t care about the selector of the host element in this case. We just want our styling to apply everywhere.</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">// With shadow DOM support using /deep/
.scrollbars-visible-always</span> <span class="token punctuation">{</span>
	<span class="token selector">/deep/ ::-webkit-scrollbar</span> <span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">/deep/ ::-webkit-scrollbar-track,
	/deep/ ::-webkit-scrollbar-corner</span> <span class="token punctuation">{</span>
		<span class="token property">background</span><span class="token punctuation">:</span> <span class="token atrule"><span class="token rule">@scrollbar-background-color</span><span class="token punctuation">;</span></span>
	<span class="token punctuation">}</span>

	<span class="token selector">/deep/ ::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span>
		<span class="token property">background</span><span class="token punctuation">:</span> <span class="token atrule"><span class="token rule">@scrollbar-color</span><span class="token punctuation">;</span></span>
		<span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
		<span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 0 1px black inset<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="context-targeted-style-sheets" tabindex="-1"><a class="header-anchor" href="#context-targeted-style-sheets" aria-hidden="true">#</a> Context-Targeted Style Sheets</h5><p>The selector features discussed above allow you to target shadow DOM content with specific selectors, but Atom also allows you to target a specific shadow DOM context with an entire style sheet. The context into which a style sheet is loaded is based on the file name. If you want to load a style sheet into the editor, name it with the <code>.atom-text-editor.less</code> or <code>.atom-text-editor.css</code> extensions.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>my-ui-theme/
  styles/
    index.less                   # loaded globally
    index.atom-text-editor.less  # loaded in the text editor shadow DOM
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),_={href:"https://github.com/atom/decoration-example/blob/master/styles/decoration-example.atom-text-editor.less",target:"_blank",rel:"noopener noreferrer"},D=a("<p>Inside a context-targeted style sheet, there&#39;s no need to use the <code>::shadow</code> or <code>/deep/</code> expressions. If you want to refer to the element containing the shadow root, you can use the <code>::host</code> pseudo-element.</p><p>During the transition phase, style sheets targeting the <code>atom-text-editor</code> context will <em>also</em> be loaded globally. Make sure you update your selectors in a way that maintains compatibility with the shadow DOM being disabled. That means if you use a <code>::host</code> pseudo element, you should also include the same style rule matches against <code>atom-text-editor</code>.</p>",2);function M(O,S){const s=c("ExternalLinkIcon");return i(),d("div",null,[p,e("p",null,[t("Text editor content is now rendered in the shadow DOM, which shields it from being styled by global style sheets to protect against accidental style pollution. For more background on the shadow DOM, check out the "),e("a",u,[t("Shadow DOM 101"),n(s)]),t(" on HTML 5 Rocks. If you need to style text editor content in a UI theme, you'll need to circumvent this protection for any rules that target the text editor's content. Some examples of the kinds of UI theme styles needing to be updated:")]),h,m,b,e("p",null,[t("Chromium provides two tools for bypassing shadow boundaries, the "),g,t(" pseudo-element and the "),k,t(" combinator. For an in-depth explanation of styling the shadow DOM, see the "),e("a",v,[t("Shadow DOM 201"),n(s)]),t(" article on HTML 5 Rocks.")]),y,e("p",null,[t("Check out the "),e("a",w,[t("find-and-replace"),n(s)]),t(" package for another example of using "),x,t(" to pierce the shadow DOM.")]),f,e("p",null,[t("Check out this "),e("a",_,[t("style sheet"),n(s)]),t(" from the decoration-example package for an example of context-targeting.")]),D])}const C=l(r,[["render",M],["__file","upgrading-your-ui-theme-or-package-selectors.html.vue"]]);export{C as default};

import{_ as t,o as p,c as o,a as s,b as n,d as c,e as a,r as i}from"./app.73a0c550.js";const u={},l=a(`<h2 id="interacting-with-other-packages-via-services" tabindex="-1"><a class="header-anchor" href="#interacting-with-other-packages-via-services" aria-hidden="true">#</a> Interacting With Other Packages Via Services</h2><p>Pulsar packages can interact with each other through versioned APIs called <em>services</em>. To provide a service, in your <code>package.json</code>, specify one or more version numbers, each paired with the name of a method on your package&#39;s main module:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;providedServices&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;my-service&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Does a useful thing&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;versions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;1.2.3&quot;</span><span class="token operator">:</span> <span class="token string">&quot;provideMyServiceV1&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;2.3.4&quot;</span><span class="token operator">:</span> <span class="token string">&quot;provideMyServiceV2&quot;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In your package&#39;s main module, implement the methods named above. These methods will be called any time a package is activated that consumes their corresponding service. They should return a value that implements the service&#39;s API.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token function">activate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// ...</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>

	<span class="token function">provideMyServiceV1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token function">adaptToLegacyAPI</span><span class="token punctuation">(</span>myService<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>

	<span class="token function">provideMyServiceV2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> myService<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),r={href:"https://docs.npmjs.com/cli/v6/using-npm/semver#ranges",target:"_blank",rel:"noopener noreferrer"},d=s("em",null,"ranges",-1),v=a(`<div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;consumedServices&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;another-service&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;versions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;^1.2.3&quot;</span><span class="token operator">:</span> <span class="token string">&quot;consumeAnotherServiceV1&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;&gt;=2.3.4 &lt;2.5&quot;</span><span class="token operator">:</span> <span class="token string">&quot;consumeAnotherServiceV2&quot;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>These methods will be called any time a package is activated that <em>provides</em> their corresponding service. They will receive the service object as an argument. You will usually need to perform some kind of cleanup in the event that the package providing the service is deactivated. To do this, return a <code>Disposable</code> from your service-consuming method:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Disposable <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;atom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token function">activate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// ...</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>

	<span class="token function">consumeAnotherServiceV1</span><span class="token punctuation">(</span><span class="token parameter">service</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">useService</span><span class="token punctuation">(</span><span class="token function">adaptServiceFromLegacyAPI</span><span class="token punctuation">(</span>service<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Disposable</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">stopUsingService</span><span class="token punctuation">(</span>service<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>

	<span class="token function">consumeAnotherServiceV2</span><span class="token punctuation">(</span><span class="token parameter">service</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">useService</span><span class="token punctuation">(</span>service<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Disposable</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">stopUsingService</span><span class="token punctuation">(</span>service<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function k(m,b){const e=i("ExternalLinkIcon");return p(),o("div",null,[l,s("p",null,[n("Similarly, to consume a service, specify one or more "),s("a",r,[n("version "),d,c(e)]),n(", each paired with the name of a method on the package's main module:")]),v])}const g=t(u,[["render",k],["__file","interacting-with-other-packages-via-services.html.vue"]]);export{g as default};

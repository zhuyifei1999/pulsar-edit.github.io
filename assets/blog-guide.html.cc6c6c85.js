import{_ as l,o as d,c as r,a as t,b as e,d as o,w as c,e as s,r as a}from"./app.73a0c550.js";const h={},u=t("h2",{id:"blog-guide",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#blog-guide","aria-hidden":"true"},"#"),e(" Blog guide")],-1),g={href:"https://pulsar-edit.dev/article/",target:"_blank",rel:"noopener noreferrer"},p={href:"https://vuepress-theme-hope.github.io/v2/blog/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/pulsar-edit/pulsar-edit.github.io",target:"_blank",rel:"noopener noreferrer"},b=t("h3",{id:"writing-a-new-post",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#writing-a-new-post","aria-hidden":"true"},"#"),e(" Writing a new post")],-1),f=s('<li>Create a new .md file in <a href="pulsar-edit.github.io/docs/blog">pulsar-edit.github.io/docs/blog</a>. <ul><li>This file should be named <code>YYYYMMDD-&lt;author&gt;-&lt;title&gt;.md</code> e.g <code>20221031-CreativeUsername-ThisIsMyBlogPost.md</code></li></ul></li><li>The metadata displayed on the website is dependent on a number of items that are configured in the YAML frontmatter of the file. You may in theory omit any of these except the title field but it&#39;s strongly recommend that you use <code>title</code>, <code>author</code>, <code>date</code>, <code>category</code> and <code>tag</code> as the minimum as the others will default to false. <ul><li>Frontmatter items supported currently are: <ul><li><code>title</code> - <em>String</em>: The displayed title of the post, consider this as <code>H1</code></li><li><code>author</code> - <em>String</em>: The name of the author to be displayed.</li><li><code>date</code> - <em>Date (ISO 8601)</em>: Allows display of date as well as enabling sorting on the timeline, set to the same as your filename date but with hyphens (e.g. <code>2022-10-31</code>).</li><li><code>category</code> - <em>String (multiline)</em>: Enables filtering by category, this should be based on the subject of the post e.g. <code>release</code>, <code>dev log</code>, <code>announcement</code>. This is a multiline field if you want to set more than one category.</li><li><code>tag</code> - <em>String (multiline)</em>: Enables filtering by tags, this should be based on the content of the post and areas it touches on e.g. <code>website</code>, <code>editor</code>, <code>config</code>.</li><li><code>sticky</code> - <em>Bool</em>: Enables &quot;pinning&quot; on the</li><li><code>star</code> - <em>Bool</em>: Enables use of the <code>star</code> category for any important articles we want to remain visible.</li><li><code>article</code> - <em>Bool</em>: You probably won&#39;t want to use this but setting this to <code>false</code> will exclude this page from appearing. This is set on the &quot;example&quot; blog post intentionally.</li></ul></li></ul></li><li>An excerpt can be added to the post by creating an html comment <code>&lt;!-- more --&gt;</code>. Anything above the comment will be treated as the excerpt and anything underneath will be the content of the post. <ul><li>We are looking at implementing an auto excerpt feature but this doesn&#39;t seem to be working on the theme at the moment, this file will be updated if and when it is available.</li></ul></li>',3),w={href:"https://vuepress-theme-hope.github.io/v2/md-enhance/config.html#vueplayground",target:"_blank",rel:"noopener noreferrer"},y=t("li",null,[e("Images are supported with the standard image syntax ("),t("code",null,"![myImage](./assets/myImage.png)"),e(") and should be located in the "),t("code",null,"blog/assets"),e(" directory. You may also use standard html "),t("code",null,"<img>"),e(" tags, particularly if you wish to control the displayed size of the image.")],-1),_=t("li",null,"Create a PR to the repo and make it obvious it is a blog post, by including [BLOG] in the title of your PR. Please don't submit it alongside any website changes.",-1),v={href:"https://github.com/pulsar-edit/pulsar-edit.github.io/blob/main/docs/blog/20221112-Daeraxa-ExamplePost.md",target:"_blank",rel:"noopener noreferrer"},x=t("h3",{id:"testing-locally",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#testing-locally","aria-hidden":"true"},"#"),e(" Testing locally")],-1),T=s('<h3 id="website-blog-page-s" tabindex="-1"><a class="header-anchor" href="#website-blog-page-s" aria-hidden="true">#</a> Website &quot;Blog&quot; page(s)</h3><p>The website itself has a number of features which the aforementioned frontmatter fields can influence.</p><p>There is a &quot;selector&quot; at the top of the site which currently reads <code>All</code>, <code>Star</code>, <code>Slides</code>, <code>Encrypted</code>. The only ones we use are the first two and currently the theme doesn&#39;t support configuration of this. If necessary we may be able to hide it with CSS.<br> Any article with <code>Star</code> set to <code>true</code> will be shown in the <code>star</code> category.</p><p>On the right bar are 4 counters/links and filters for <code>Articles</code>, <code>Category</code>, <code>Tag</code> and <code>Timeline</code>.<br><code>Category</code> and <code>Tag</code> are used to filter articles depending on the categories submitted in the respective frontmatter fields. The <code>Timeline</code> allows views of blog posts over time according to the dates set in the <code>date</code> frontmatter field.</p><h3 id="questions-suggestions" tabindex="-1"><a class="header-anchor" href="#questions-suggestions" aria-hidden="true">#</a> Questions? Suggestions</h3><p>Just ask in Discord or GH Discussions and ping the <code>@documentation</code> team.</p><p>This is very much barebones default config so please let us know if you have any suggestions as to how we can improve it.</p>',7);function k(S,B){const i=a("ExternalLinkIcon"),n=a("RouterLink");return d(),r("div",null,[u,t("p",null,[e("This is a guide on how to add a blog post to the website which will be shown on "),t("a",g,[e("https://pulsar-edit.dev/article/"),o(i)]),e(".")]),t("p",null,[e("We are using the "),t("a",p,[e("Vuepress Blog Plugin"),o(i)]),e(" which comes as part of our Vuepress Hope Theme with some light configuration to suit our purposes.")]),t("p",null,[e("This is all implemented in the main "),t("a",m,[e("website repository"),o(i)]),e(".")]),b,t("ul",null,[f,t("li",null,[e("The rest of the post is just standard Markdown - we are currently only supporting the standard features as per the "),t("a",w,[e("MDEnhance"),o(i)]),e(" plugin but if we need more features such as GFM then please discuss and we can look at adding it to the website.")]),y,_]),t("p",null,[e("See "),t("a",v,[e("example post"),o(i)]),e(" with everything above.")]),x,t("p",null,[e("See "),o(n,{to:"/docs/resources/website/#building-the-website"},{default:c(()=>[e("building")]),_:1})]),T])}const E=l(h,[["render",k],["__file","blog-guide.html.vue"]]);export{E as default};

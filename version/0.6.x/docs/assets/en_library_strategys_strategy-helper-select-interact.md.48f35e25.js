import{_ as s,o as e,c as a,O as n}from"./chunks/framework.b643d968.js";const g=JSON.parse('{"title":"@vis-three/strategy-helper-select-interact","description":"","frontmatter":{},"headers":[],"relativePath":"en/library/strategys/strategy-helper-select-interact.md","filePath":"en/library/strategys/strategy-helper-select-interact.md"}'),l={name:"en/library/strategys/strategy-helper-select-interact.md"},t=n(`<h1 id="vis-three-strategy-helper-select-interact" tabindex="-1">@vis-three/strategy-helper-select-interact <a class="header-anchor" href="#vis-three-strategy-helper-select-interact" aria-label="Permalink to &quot;@vis-three/strategy-helper-select-interact&quot;">​</a></h1><p>Object Helper Interaction Strategy for Mouse Selection.</p><h2 id="latest-version" tabindex="-1">Latest Version <a class="header-anchor" href="#latest-version" aria-label="Permalink to &quot;Latest Version&quot;">​</a></h2><img alt="version" src="https://img.shields.io/npm/v/@vis-three/strategy-helper-select-interact"><h2 id="license" tabindex="-1">License <a class="header-anchor" href="#license" aria-label="Permalink to &quot;License&quot;">​</a></h2><img alt="NPM" src="https://img.shields.io/npm/l/@vis-three/strategy-helper-select-interact?color=blue"><h2 id="strategy-name" tabindex="-1">Strategy Name <a class="header-anchor" href="#strategy-name" aria-label="Permalink to &quot;Strategy Name&quot;">​</a></h2><p><code>HelperSelectInteractStrategy</code></p><h2 id="strategy-dependencies" tabindex="-1">Strategy Dependencies <a class="header-anchor" href="#strategy-dependencies" aria-label="Permalink to &quot;Strategy Dependencies&quot;">​</a></h2><ul><li>@vis-three/plugin-grid-helper</li><li>@vis-three/plugin-viewpoint</li></ul><h2 id="strategy-parameters" tabindex="-1">Strategy Parameters <a class="header-anchor" href="#strategy-parameters" aria-label="Permalink to &quot;Strategy Parameters&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">HelperSelectInteractParameters</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/** Whether to interact with the helper */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">interact</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/** Color when active */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">activeColor</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/** Color on mouse hover */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">hoverColor</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/** Default color of the helper */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">defaultColor</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/** Color when selected */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">selectedColor</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">HelperSelectInteractParameters</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/** Whether to interact with the helper */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">interact</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/** Color when active */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">activeColor</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/** Color on mouse hover */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">hoverColor</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/** Default color of the helper */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">defaultColor</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/** Color when selected */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">selectedColor</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,12),o=[t];function p(r,c,i,y,E,h){return e(),a("div",null,o)}const m=s(l,[["render",p]]);export{g as __pageData,m as default};
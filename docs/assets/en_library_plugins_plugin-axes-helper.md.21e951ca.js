import{_ as s,o as e,c as a,O as n}from"./chunks/framework.c4814614.js";const u=JSON.parse('{"title":"@vis-three/plugin-axes-helper","description":"","frontmatter":{},"headers":[],"relativePath":"en/library/plugins/plugin-axes-helper.md","filePath":"en/library/plugins/plugin-axes-helper.md"}'),l={name:"en/library/plugins/plugin-axes-helper.md"},p=n(`<h1 id="vis-three-plugin-axes-helper" tabindex="-1">@vis-three/plugin-axes-helper <a class="header-anchor" href="#vis-three-plugin-axes-helper" aria-label="Permalink to &quot;@vis-three/plugin-axes-helper&quot;">​</a></h1><p>A plugin for scene world coordinate axes.</p><ul><li>The axes cannot be picked up by rays.</li><li>The axes will automatically be added to the switched scene.</li></ul><h2 id="latest-version" tabindex="-1">Latest Version <a class="header-anchor" href="#latest-version" aria-label="Permalink to &quot;Latest Version&quot;">​</a></h2><img alt="version" src="https://img.shields.io/npm/v/@vis-three/plugin-axes-helper"><h2 id="license" tabindex="-1">License <a class="header-anchor" href="#license" aria-label="Permalink to &quot;License&quot;">​</a></h2><img alt="NPM" src="https://img.shields.io/npm/l/@vis-three/plugin-axes-helper?color=blue"><h2 id="plugin-name" tabindex="-1">Plugin Name <a class="header-anchor" href="#plugin-name" aria-label="Permalink to &quot;Plugin Name&quot;">​</a></h2><p><code>AxesHelperPlugin</code></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can use the exported enumeration: <code>AXES_HELPER_PLUGIN</code></p></div><h2 id="plugin-dependencies" tabindex="-1">Plugin Dependencies <a class="header-anchor" href="#plugin-dependencies" aria-label="Permalink to &quot;Plugin Dependencies&quot;">​</a></h2><p>None</p><h2 id="plugin-parameters" tabindex="-1">Plugin Parameters <a class="header-anchor" href="#plugin-parameters" aria-label="Permalink to &quot;Plugin Parameters&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">AxesHelperParameters</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/** The length of the axes */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">length</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">AxesHelperParameters</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/** The length of the axes */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">length</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="engine-extensions" tabindex="-1">Engine Extensions <a class="header-anchor" href="#engine-extensions" aria-label="Permalink to &quot;Engine Extensions&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">AxesHelperEngine</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Engine</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/** The axes helper object */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">axesHelper</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">AxesHelper</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/** Method to show or hide the axes */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">setAxesHelper</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">show</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">boolean</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">AxesHelperEngine</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">AxesHelperEngine</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Engine</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/** The axes helper object */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">axesHelper</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">AxesHelper</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/** Method to show or hide the axes */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">setAxesHelper</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">show</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">boolean</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">AxesHelperEngine</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="axeshelper" tabindex="-1">axesHelper <a class="header-anchor" href="#axeshelper" aria-label="Permalink to &quot;axesHelper&quot;">​</a></h3><p>Reference: <a href="https://threejs.org/docs/index.html?q=axe#api/zh/helpers/AxesHelper" target="_blank" rel="noreferrer">https://threejs.org/docs/index.html?q=axe#api/zh/helpers/AxesHelper</a></p><h3 id="setaxeshelper" tabindex="-1">setAxesHelper <a class="header-anchor" href="#setaxeshelper" aria-label="Permalink to &quot;setAxesHelper&quot;">​</a></h3><p>Usage</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">engine.</span><span style="color:#B392F0;">setAxesHelper</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">engine.</span><span style="color:#6F42C1;">setAxesHelper</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">false</span><span style="color:#24292E;">);</span></span></code></pre></div>`,21),o=[p];function t(r,c,i,h,E,y){return e(),a("div",null,o)}const g=s(l,[["render",t]]);export{u as __pageData,g as default};
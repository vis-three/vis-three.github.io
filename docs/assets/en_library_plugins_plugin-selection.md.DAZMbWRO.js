import{_ as s,c as i,o as e,a2 as n}from"./chunks/framework.BjUghlZR.js";const E=JSON.parse('{"title":"@vis-three/plugin-selection","description":"","frontmatter":{},"headers":[],"relativePath":"en/library/plugins/plugin-selection.md","filePath":"en/library/plugins/plugin-selection.md"}'),a={name:"en/library/plugins/plugin-selection.md"},t=n(`<h1 id="vis-three-plugin-selection" tabindex="-1">@vis-three/plugin-selection <a class="header-anchor" href="#vis-three-plugin-selection" aria-label="Permalink to &quot;@vis-three/plugin-selection&quot;">​</a></h1><p>Selection Plugin.</p><p>A unified dispatch handling entry for selecting scene objects.</p><ul><li>This plugin will emit a <code>selected</code> event through the <code>engine</code>.</li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">engine.</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">install</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">SelectionPlugin</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">());</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">engine.</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">addEventListener</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;selected&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, (</span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">event</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">) </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  console.</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">log</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(event.objects);</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">});</span></span></code></pre></div><h2 id="latest-version" tabindex="-1">Latest Version <a class="header-anchor" href="#latest-version" aria-label="Permalink to &quot;Latest Version&quot;">​</a></h2><img alt="version" src="https://img.shields.io/npm/v/@vis-three/plugin-selection"><h2 id="license" tabindex="-1">License <a class="header-anchor" href="#license" aria-label="Permalink to &quot;License&quot;">​</a></h2><img alt="NPM" src="https://img.shields.io/npm/l/@vis-three/plugin-selection?color=blue"><h2 id="plugin-name" tabindex="-1">Plugin Name <a class="header-anchor" href="#plugin-name" aria-label="Permalink to &quot;Plugin Name&quot;">​</a></h2><p><code>SelectionPlugin</code></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can use the enumeration: <code>SELECTION_PLUGIN</code></p></div><h2 id="plugin-dependencies" tabindex="-1">Plugin Dependencies <a class="header-anchor" href="#plugin-dependencies" aria-label="Permalink to &quot;Plugin Dependencies&quot;">​</a></h2><p>None</p><h2 id="plugin-parameters" tabindex="-1">Plugin Parameters <a class="header-anchor" href="#plugin-parameters" aria-label="Permalink to &quot;Plugin Parameters&quot;">​</a></h2><p>None</p><h2 id="engine-extensions" tabindex="-1">Engine Extensions <a class="header-anchor" href="#engine-extensions" aria-label="Permalink to &quot;Engine Extensions&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> interface</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> SelectionEngine</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> extends</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> Engine</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">    /** Collection of selected objects in the current engine */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">    selectionBox</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> Set</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">Object3D</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;;</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">    /** Set the selected objects in the current engine */</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">    setSelectionBox</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> (</span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">objects</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> Object3D</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">[]) </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> SelectionEngine</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you want to set the selected objects in the current <code>engine</code> via script, use <code>setSelectionBox</code>, as it will internally trigger the <code>selected</code> event of the <code>engine</code>.</p></div>`,19),l=[t];function h(p,o,r,k,c,d){return e(),i("div",null,l)}const u=s(a,[["render",h]]);export{E as __pageData,u as default};

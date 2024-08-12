import{_ as s,o as n,c as e,O as a}from"./chunks/framework.c4814614.js";const h=JSON.parse('{"title":"@vis-three/plugin-selection","description":"","frontmatter":{},"headers":[],"relativePath":"en/library/plugins/plugin-selection.md","filePath":"en/library/plugins/plugin-selection.md"}'),l={name:"en/library/plugins/plugin-selection.md"},o=a(`<h1 id="vis-three-plugin-selection" tabindex="-1">@vis-three/plugin-selection <a class="header-anchor" href="#vis-three-plugin-selection" aria-label="Permalink to &quot;@vis-three/plugin-selection&quot;">​</a></h1><p>Selection Plugin.</p><p>A unified dispatch handling entry for selecting scene objects.</p><ul><li>This plugin will emit a <code>selected</code> event through the <code>engine</code>.</li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">engine.</span><span style="color:#B392F0;">install</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">SelectionPlugin</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">engine.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;selected&quot;</span><span style="color:#E1E4E8;">, (</span><span style="color:#FFAB70;">event</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(event.objects);</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">engine.</span><span style="color:#6F42C1;">install</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">SelectionPlugin</span><span style="color:#24292E;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">engine.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;selected&quot;</span><span style="color:#24292E;">, (</span><span style="color:#E36209;">event</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(event.objects);</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><h2 id="latest-version" tabindex="-1">Latest Version <a class="header-anchor" href="#latest-version" aria-label="Permalink to &quot;Latest Version&quot;">​</a></h2><img alt="version" src="https://img.shields.io/npm/v/@vis-three/plugin-selection"><h2 id="license" tabindex="-1">License <a class="header-anchor" href="#license" aria-label="Permalink to &quot;License&quot;">​</a></h2><img alt="NPM" src="https://img.shields.io/npm/l/@vis-three/plugin-selection?color=blue"><h2 id="plugin-name" tabindex="-1">Plugin Name <a class="header-anchor" href="#plugin-name" aria-label="Permalink to &quot;Plugin Name&quot;">​</a></h2><p><code>SelectionPlugin</code></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can use the enumeration: <code>SELECTION_PLUGIN</code></p></div><h2 id="plugin-dependencies" tabindex="-1">Plugin Dependencies <a class="header-anchor" href="#plugin-dependencies" aria-label="Permalink to &quot;Plugin Dependencies&quot;">​</a></h2><p>None</p><h2 id="plugin-parameters" tabindex="-1">Plugin Parameters <a class="header-anchor" href="#plugin-parameters" aria-label="Permalink to &quot;Plugin Parameters&quot;">​</a></h2><p>None</p><h2 id="engine-extensions" tabindex="-1">Engine Extensions <a class="header-anchor" href="#engine-extensions" aria-label="Permalink to &quot;Engine Extensions&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">SelectionEngine</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extends</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Engine</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/** Collection of selected objects in the current engine */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">selectionBox</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Set</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">Object3D</span><span style="color:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/** Set the selected objects in the current engine */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">setSelectionBox</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">objects</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Object3D</span><span style="color:#E1E4E8;">[]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">SelectionEngine</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">SelectionEngine</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extends</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Engine</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/** Collection of selected objects in the current engine */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">selectionBox</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Set</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">Object3D</span><span style="color:#24292E;">&gt;;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/** Set the selected objects in the current engine */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">setSelectionBox</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">objects</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Object3D</span><span style="color:#24292E;">[]) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">SelectionEngine</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you want to set the selected objects in the current <code>engine</code> via script, use <code>setSelectionBox</code>, as it will internally trigger the <code>selected</code> event of the <code>engine</code>.</p></div>`,19),t=[o];function p(c,i,r,E,y,d){return n(),e("div",null,t)}const u=s(l,[["render",p]]);export{h as __pageData,u as default};

import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.BjUghlZR.js";const c=JSON.parse('{"title":"@vis-three/module-path","description":"","frontmatter":{},"headers":[],"relativePath":"en/library/module/path/readme.md","filePath":"en/library/module/path/readme.md"}'),e={name:"en/library/module/path/readme.md"},l=n(`<h1 id="vis-three-module-path" tabindex="-1">@vis-three/module-path <a class="header-anchor" href="#vis-three-module-path" aria-label="Permalink to &quot;@vis-three/module-path&quot;">​</a></h1><h2 id="latest-version" tabindex="-1">Latest Version <a class="header-anchor" href="#latest-version" aria-label="Permalink to &quot;Latest Version&quot;">​</a></h2><img alt="version" src="https://img.shields.io/npm/v/@vis-three/module-path"><h2 id="license" tabindex="-1">License <a class="header-anchor" href="#license" aria-label="Permalink to &quot;License&quot;">​</a></h2><img alt="NPM" src="https://img.shields.io/npm/l/@vis-three/module-path?color=blue"><h2 id="module-information" tabindex="-1">Module Information <a class="header-anchor" href="#module-information" aria-label="Permalink to &quot;Module Information&quot;">​</a></h2><h3 id="module-type" tabindex="-1">module.type <a class="header-anchor" href="#module-type" aria-label="Permalink to &quot;module.type&quot;">​</a></h3><ul><li><strong>Value</strong>: <code>path</code></li></ul><h3 id="module-object" tabindex="-1">module.object <a class="header-anchor" href="#module-object" aria-label="Permalink to &quot;module.object&quot;">​</a></h3><ul><li><strong>Value</strong>: <code>false</code></li></ul><h3 id="module-lifeorder" tabindex="-1">module.lifeOrder <a class="header-anchor" href="#module-lifeorder" aria-label="Permalink to &quot;module.lifeOrder&quot;">​</a></h3><ul><li><strong>Value</strong>: <code>SUPPORT_LIFE_CYCLE.ZERO</code> - 0</li></ul><h2 id="provided-configuration" tabindex="-1">Provided Configuration <a class="header-anchor" href="#provided-configuration" aria-label="Permalink to &quot;Provided Configuration&quot;">​</a></h2><h3 id="path-path" tabindex="-1">Path - Path <a class="header-anchor" href="#path-path" aria-label="Permalink to &quot;Path - Path&quot;">​</a></h3><ul><li><strong>Type</strong>: <code>Path</code></li><li><strong>Configuration Type</strong>:</li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> type</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> LineSegmentConfig</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> [</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">number</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">number</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">number</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">number</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> type</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> ArcSegmentConfig</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> [</span></span>
<span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">  number</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">  number</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">  number</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">  boolean</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">  number</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">  number</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> type</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> bezierSegmentConfig</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> [</span></span>
<span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">  number</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">  number</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">  number</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">  number</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">  number</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">  number</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">  number</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">  number</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> type</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> quadraticSegmentConfig</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> [</span></span>
<span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">  number</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">  number</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">  number</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">  number</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">  number</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">  number</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> interface</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> SegmentConfig</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">    /** Path type: line, arc, bezier, quadratic */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">    curve</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  params</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">    |</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> LineSegmentConfig</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">    |</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> ArcSegmentConfig</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">    |</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> bezierSegmentConfig</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">    |</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> quadraticSegmentConfig</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> interface</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> PathConfig</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> extends</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> SymbolConfig</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  curves</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> SegmentConfig</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">[];</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /** Automatically closes the path by adding a straight line between the start and end points */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  autoClose</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> boolean</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span></code></pre></div><ul><li><strong>Default Configuration</strong>:</li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">{</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">   curves</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">: [],</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">   autoClose</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">false</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Modifying a value in the <code>params</code> of a curve in the path configuration will affect the values of the adjacent curves (if any) to ensure continuity between the start and end of the curves.</p></div>`,19),t=[l];function h(p,k,r,d,o,g){return a(),i("div",null,t)}const y=s(e,[["render",h]]);export{c as __pageData,y as default};

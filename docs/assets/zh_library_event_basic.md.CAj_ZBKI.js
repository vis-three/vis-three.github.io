import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.BjUghlZR.js";const c=JSON.parse('{"title":"BasicEvent","description":"","frontmatter":{},"headers":[],"relativePath":"zh/library/event/basic.md","filePath":"zh/library/event/basic.md"}'),h={name:"zh/library/event/basic.md"},l=n(`<h1 id="basicevent" tabindex="-1">BasicEvent <a class="header-anchor" href="#basicevent" aria-label="Permalink to &quot;BasicEvent&quot;">​</a></h1><p>基础事件。</p><h3 id="addclass" tabindex="-1">addClass <a class="header-anchor" href="#addclass" aria-label="Permalink to &quot;addClass&quot;">​</a></h3><p>给<code>dom</code>物体添加一个<code>class</code>。</p><ul><li><strong>类型</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> interface</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> AddClass</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> extends</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> BasicEventConfig</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  params</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">    /**dom物体，一个或者多个，或者engine中所有 */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">    target</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">[] </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">|</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &quot;all&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">    /**class名字 */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">    className</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">    /**延迟时间 */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">    delay</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> number</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  };</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span></code></pre></div><ul><li><strong>默认</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> const</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> config</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> AddClass</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  name: </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;addClass&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  params: {</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    target: </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    className: </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    delay: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">0</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  },</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">};</span></span></code></pre></div><h3 id="changecamera" tabindex="-1">changeCamera <a class="header-anchor" href="#changecamera" aria-label="Permalink to &quot;changeCamera&quot;">​</a></h3><p>更换<code>engine</code>的相机。</p><ul><li><strong>类型</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> interface</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> ChangeCamera</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> extends</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> BasicEventConfig</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  params</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">    /**要更换的相机 */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">    camera</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">    /**延迟时间 */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">    delay</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> number</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  };</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span></code></pre></div><ul><li><strong>默认</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> const</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> config</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> ChangeCamera</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  name: </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;changeCamera&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  params: {</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    camera: </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    delay: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">0</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  },</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">};</span></span></code></pre></div><h3 id="changecursor" tabindex="-1">changeCursor <a class="header-anchor" href="#changecursor" aria-label="Permalink to &quot;changeCursor&quot;">​</a></h3><p>更换鼠标<code>css</code>指针类型。</p><ul><li><strong>类型</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> interface</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> ChangeCursor</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> extends</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> BasicEventConfig</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  params</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">    /**指针类型 */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">    cursor</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">    /**延迟时间 */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">    delay</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> number</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  };</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span></code></pre></div><ul><li><strong>默认</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> const</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> config</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> ChangeCursor</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  name: </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;changeCursor&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  params: {</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    cursor: </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    delay: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">0</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  },</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">};</span></span></code></pre></div><h3 id="changescene" tabindex="-1">changeScene <a class="header-anchor" href="#changescene" aria-label="Permalink to &quot;changeScene&quot;">​</a></h3><p>切换<code>engine</code>的当前渲染场景。</p><ul><li><strong>类型</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> interface</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> ChangeScene</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> extends</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> BasicEventConfig</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  params</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">    /**当前场景 */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">    scene</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">    /**延迟时间 */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">    delay</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> number</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  };</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span></code></pre></div><ul><li><strong>默认</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> const</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> config</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> ChangeScene</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  name: </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;changeScene&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  params: {</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    scene: </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;Scene&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    delay: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">0</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  },</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">};</span></span></code></pre></div><h3 id="openwindow" tabindex="-1">openWindow <a class="header-anchor" href="#openwindow" aria-label="Permalink to &quot;openWindow&quot;">​</a></h3><p>打开一个外部链接。</p><ul><li><strong>类型</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> interface</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> OpenWindow</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> extends</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> BasicEventConfig</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  params</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">    /**链接地址 */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">    url</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  };</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span></code></pre></div><ul><li><strong>默认</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> const</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> config</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> OpenWindow</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  name: </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;openWindow&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  params: {</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    url: </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  },</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">};</span></span></code></pre></div><h3 id="setparent" tabindex="-1">setParent <a class="header-anchor" href="#setparent" aria-label="Permalink to &quot;setParent&quot;">​</a></h3><p>设置一个对象的父级。</p><ul><li><strong>类型</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> interface</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> OpenWindow</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> extends</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> BasicEventConfig</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  params</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">    /**链接地址 */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">    url</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  };</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span></code></pre></div><ul><li><strong>默认</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> const</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> config</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> OpenWindow</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  name: </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;openWindow&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  params: {</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    url: </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  },</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">};</span></span></code></pre></div><h3 id="setposition" tabindex="-1">setPosition <a class="header-anchor" href="#setposition" aria-label="Permalink to &quot;setPosition&quot;">​</a></h3><p>设置一个物体的位置。</p><ul><li><strong>类型</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> interface</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> SetPosition</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> extends</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> BasicEventConfig</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  params</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">    /**目标物体 */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">    target</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">    /**位置信息 */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">    position</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> Vector3Config</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">    /**延迟时间 */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">    delay</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> number</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  };</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span></code></pre></div><ul><li><strong>默认</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> const</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> config</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> SetPosition</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  name: </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;setPosition&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  params: {</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    target: </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    position: {</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">      x: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">0</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">      y: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">0</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">      z: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">0</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    },</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    delay: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">0</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  },</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">};</span></span></code></pre></div><h3 id="switchanimate" tabindex="-1">switchAnimate <a class="header-anchor" href="#switchanimate" aria-label="Permalink to &quot;switchAnimate&quot;">​</a></h3><p>控制一个动画。</p><ul><li><strong>类型</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> interface</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> SwitchAnimate</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> extends</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> BasicEventConfig</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  params</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">    /**目标动画 */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">    target</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">    /**自动切换，播放，关闭 */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">    toggle</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &quot;auto&quot;</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &quot;on&quot;</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;"> &quot;off&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">    /**延迟时间 */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">    delay</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> number</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  };</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span></code></pre></div><ul><li><strong>默认</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> const</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> config</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> SwitchAnimate</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  name: </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;switchAnimate&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  params: {</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    target: </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    toggle: </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;auto&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    delay: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">0</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  },</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">};</span></span></code></pre></div><h3 id="visibleobject" tabindex="-1">visibleObject <a class="header-anchor" href="#visibleobject" aria-label="Permalink to &quot;visibleObject&quot;">​</a></h3><p>显示隐藏物体。</p><ul><li><strong>类型</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> interface</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> VisibleObject</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> extends</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> BasicEventConfig</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  params</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">    /**目标物体 */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">    target</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">    /**显示状态 */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">    visible</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> boolean</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">    /**延迟时间 */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">    delay</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> number</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  };</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span></code></pre></div><ul><li><strong>默认</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> const</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> config</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> VisibleObject</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  name: </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;visibleObject&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  params: {</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    target: </span><span style="--shiki-dark:#9ECBFF;--shiki-light:#032F62;">&quot;&quot;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    visible: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">true</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">    delay: </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">0</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  },</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">};</span></span></code></pre></div>`,56),t=[l];function p(k,e,E,r,d,g){return a(),i("div",null,t)}const o=s(h,[["render",p]]);export{c as __pageData,o as default};

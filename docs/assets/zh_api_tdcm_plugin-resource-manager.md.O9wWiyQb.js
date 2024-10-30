import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.BjUghlZR.js";const E=JSON.parse('{"title":"ResourceManagerPlugin","description":"","frontmatter":{},"headers":[],"relativePath":"zh/api/tdcm/plugin-resource-manager.md","filePath":"zh/api/tdcm/plugin-resource-manager.md"}'),h={name:"zh/api/tdcm/plugin-resource-manager.md"},l=n(`<h1 id="resourcemanagerplugin" tabindex="-1">ResourceManagerPlugin <a class="header-anchor" href="#resourcemanagerplugin" aria-label="Permalink to &quot;ResourceManagerPlugin&quot;">​</a></h1><p>资源管理器插件，管理所有的外部资源，外部资源转化，对接配置。</p><h2 id="插件依赖" tabindex="-1">插件依赖 <a class="header-anchor" href="#插件依赖" aria-label="Permalink to &quot;插件依赖&quot;">​</a></h2><p>无</p><h2 id="插件传参" tabindex="-1">插件传参 <a class="header-anchor" href="#插件传参" aria-label="Permalink to &quot;插件传参&quot;">​</a></h2><p>无</p><h2 id="引擎拓展" tabindex="-1">引擎拓展 <a class="header-anchor" href="#引擎拓展" aria-label="Permalink to &quot;引擎拓展&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> interface</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> ResourceManagerEngine</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> extends</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> Engine</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**资源管理器 */</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  resourceManager</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> ResourceManager</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**注册资源 */</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">  registerResources</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> (</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">    resourceMap</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> Record</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">string</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">unknown</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">  ) </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> ResourceManagerEngine</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span></code></pre></div><h1 id="resourcemanager" tabindex="-1">ResourceManager <a class="header-anchor" href="#resourcemanager" aria-label="Permalink to &quot;ResourceManager&quot;">​</a></h1><p>资源管理器</p><h2 id="继承" tabindex="-1">继承 <a class="header-anchor" href="#继承" aria-label="Permalink to &quot;继承&quot;">​</a></h2><ul><li><a href="./../core/EventDispatcher.html">EventDispatcher</a></li></ul><h2 id="构造" tabindex="-1">构造 <a class="header-anchor" href="#构造" aria-label="Permalink to &quot;构造&quot;">​</a></h2><p>无</p><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><h3 id="configmap" tabindex="-1">configMap <a class="header-anchor" href="#configmap" aria-label="Permalink to &quot;configMap&quot;">​</a></h3><p>url 配置映射 url -&gt; config。</p><ul><li><strong>类型</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">Map</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">&lt;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">string, BasicConfig</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">&gt;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span></code></pre></div><h3 id="resourcemap" tabindex="-1">resourceMap <a class="header-anchor" href="#resourcemap" aria-label="Permalink to &quot;resourceMap&quot;">​</a></h3><p>url 到资源映射 url -&gt; resource。</p><ul><li><strong>类型</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">Map</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">&lt;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">string, any</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">&gt;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span></code></pre></div><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><h3 id="addparser" tabindex="-1">addParser <a class="header-anchor" href="#addparser" aria-label="Permalink to &quot;addParser&quot;">​</a></h3><ul><li><strong>详情</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * 添加解析器</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@param</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> parser</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  extends Parser</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@returns</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> this</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">addParser</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(parser: Parser): </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">this</span></span></code></pre></div><h3 id="mappingresource" tabindex="-1">mappingResource <a class="header-anchor" href="#mappingresource" aria-label="Permalink to &quot;mappingResource&quot;">​</a></h3><ul><li><strong>详情</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> *  根据加载好的资源拆解映射为最小资源单位与形成相应的配置与结构</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@param</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> loadResourceMap</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> loaderManager的resourceMap</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@param</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> options</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> options.handler: {url, hanlder}可以根据特定的url指定特定的解析器</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@returns</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> this</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">mappingResource</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(loadResourceMap: Map</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">&lt;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">string, unknown</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">&gt;</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, options</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">?:</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> MappingOptions): </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">this</span></span></code></pre></div><h3 id="getresourceconfig" tabindex="-1">getResourceConfig <a class="header-anchor" href="#getresourceconfig" aria-label="Permalink to &quot;getResourceConfig&quot;">​</a></h3><ul><li><strong>详情</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * 获取资源的配置单，该配置单根据资源结构生成</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@param</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> url</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> 资源url</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@returns</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> LoadOptions</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">getResourceConfig</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(url: string): LoadOptions</span></span></code></pre></div><h3 id="hasresource" tabindex="-1">hasResource <a class="header-anchor" href="#hasresource" aria-label="Permalink to &quot;hasResource&quot;">​</a></h3><ul><li><strong>详情</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * 是否有此资源</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@param</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> url</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> 资源 url</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@returns</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> boolean</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">hasResource</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(url: string): boolean</span></span></code></pre></div><h3 id="remove" tabindex="-1">remove <a class="header-anchor" href="#remove" aria-label="Permalink to &quot;remove&quot;">​</a></h3><ul><li><strong>详情</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * 移除url下的所有资源</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@param</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> url</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> url</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">@returns</span><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> this</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">remove</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(url: string): </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">this</span></span></code></pre></div><h3 id="dispose" tabindex="-1">dispose <a class="header-anchor" href="#dispose" aria-label="Permalink to &quot;dispose&quot;">​</a></h3><ul><li><strong>详情</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> * 清空所有资源</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">dispose</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(): </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">void</span></span></code></pre></div><h1 id="parser" tabindex="-1">Parser <a class="header-anchor" href="#parser" aria-label="Permalink to &quot;Parser&quot;">​</a></h1><p>资源解析器基类。</p><ul><li><strong>详情</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-dark github-light vp-code"><code><span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> interface</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> ParseParams</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  url</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  resource</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> any</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  configMap</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> Map</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">string</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">BasicConfig</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;;</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  resourceMap</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> Map</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">string</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;">any</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> type</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> ResourceHanlder</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> =</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> (</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  url</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> string</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  resource</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> any</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">,</span></span>
<span class="line"><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">  parseMap</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> Map</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&lt;</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">Function</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">, </span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;">Parser</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">&gt;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">) </span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">=&gt;</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> Parser</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> |</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> null</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">export</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> abstract</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;"> class</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> Parser</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;"> {</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**资源选择器，通过怎么样的方式选择这个资源交给这个解析器解析 */</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">  abstract</span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;"> selector</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> ResourceHanlder</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#6A737D;--shiki-light:#6A737D;">  /**解析方法 */</span></span>
<span class="line"><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">  abstract</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> parse</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">(</span><span style="--shiki-dark:#FFAB70;--shiki-light:#E36209;">params</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#B392F0;--shiki-light:#6F42C1;"> ParseParams</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">)</span><span style="--shiki-dark:#F97583;--shiki-light:#D73A49;">:</span><span style="--shiki-dark:#79B8FF;--shiki-light:#005CC5;"> void</span><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">;</span></span>
<span class="line"><span style="--shiki-dark:#E1E4E8;--shiki-light:#24292E;">}</span></span></code></pre></div>`,46),t=[l];function e(p,k,r,d,g,o){return a(),i("div",null,t)}const y=s(h,[["render",e]]);export{E as __pageData,y as default};
import{_ as e,o as a,c as i,O as t}from"./chunks/framework.c4814614.js";const f=JSON.parse('{"title":"Installation","description":"","frontmatter":{},"headers":[],"relativePath":"en/start/install.md","filePath":"en/start/install.md"}'),o={name:"en/start/install.md"},n=t(`<h1 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h1><h2 id="development-environment" tabindex="-1">Development Environment <a class="header-anchor" href="#development-environment" aria-label="Permalink to &quot;Development Environment&quot;">​</a></h2><p><code>VIS-THREE</code> recommends using a development environment that supports <code>npm</code> and <code>ES modules</code>, as this setup has been validated across numerous projects.</p><h2 id="version" tabindex="-1">Version <a class="header-anchor" href="#version" aria-label="Permalink to &quot;Version&quot;">​</a></h2><p><code>VIS-THREE</code> is currently in rapid development and iteration. The current major version is <code>0.6</code>.</p><h2 id="installing-three-js" tabindex="-1">Installing three.js <a class="header-anchor" href="#installing-three-js" aria-label="Permalink to &quot;Installing three.js&quot;">​</a></h2><p><code>VIS-THREE</code> depends on <code>three</code>, but does not enforce a specific version. The optimal version is the one used in the official examples. Therefore, you should install <code>three</code> before installing <code>VIS-THREE</code>.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npm i three</span></span>
<span class="line"><span style="color:#e1e4e8;">npm i @types/three -D</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm i three</span></span>
<span class="line"><span style="color:#24292e;">npm i @types/three -D</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The current version of three.js used in all examples is <code>^0.141.0</code>—<code>npm i three@^0.141.0</code></p></div><h2 id="installing-vis-three" tabindex="-1">Installing VIS-THREE <a class="header-anchor" href="#installing-vis-three" aria-label="Permalink to &quot;Installing VIS-THREE&quot;">​</a></h2><p>The <code>VIS-THREE</code> framework is built through an assembly approach, integrating different components to create various engine functionalities to meet different business needs.</p><p>The documentation will progressively guide readers through the assembly and construction model of <code>VIS-THREE</code>. Below, we introduce the package structure and categories included in <code>VIS-THREE</code>.</p><h3 id="core-engine" tabindex="-1">Core Engine <a class="header-anchor" href="#core-engine" aria-label="Permalink to &quot;Core Engine&quot;">​</a></h3><p><code>@vis-three/core</code></p><p>The core engine provides the foundational APIs for the assembly-based application logic and 3D engine. It is a fundamental dependency for all packages.</p><h3 id="plugins" tabindex="-1">Plugins <a class="header-anchor" href="#plugins" aria-label="Permalink to &quot;Plugins&quot;">​</a></h3><p><code>@vis-three/plugin-xxx</code></p><p>Plugins add new features and capabilities to the engine. All official plugin packages start with <code>@vis-three/plugin-</code>.</p><h3 id="strategies" tabindex="-1">Strategies <a class="header-anchor" href="#strategies" aria-label="Permalink to &quot;Strategies&quot;">​</a></h3><p><code>@vis-three/strategy-xxx</code></p><p>Strategies are used to coordinate different plugin functionalities and capabilities to accomplish specific tasks or business functions. All official strategy packages start with <code>@vis-three/strategy-</code>.</p><h3 id="configuration-core" tabindex="-1">Configuration Core <a class="header-anchor" href="#configuration-core" aria-label="Permalink to &quot;Configuration Core&quot;">​</a></h3><p><code>@vis-three/middleware</code></p><p>The Configuration Core builds on the core engine by integrating foundational logic and APIs for configuration-based operations.</p><h3 id="configuration-modules" tabindex="-1">Configuration Modules <a class="header-anchor" href="#configuration-modules" aria-label="Permalink to &quot;Configuration Modules&quot;">​</a></h3><p><code>@vis-three/module-xxx</code></p><p>Configuration Modules are logical modules that implement various <code>configuration</code> -&gt; <code>instance</code> processes based on different functional needs.</p><h3 id="utility-tools" tabindex="-1">Utility Tools <a class="header-anchor" href="#utility-tools" aria-label="Permalink to &quot;Utility Tools&quot;">​</a></h3><p><code>@vis-three/convenient</code></p><p>Utility Tools are a collection of practical tools extracted from official project activities.</p><h3 id="utility-library" tabindex="-1">Utility Library <a class="header-anchor" href="#utility-library" aria-label="Permalink to &quot;Utility Library&quot;">​</a></h3><p><code>@vis-three/utils</code></p><p>The Utility Library is a code logic library that serves the entire <code>VIS-THREE</code> development.</p><h3 id="derivative-libraries" tabindex="-1">Derivative Libraries <a class="header-anchor" href="#derivative-libraries" aria-label="Permalink to &quot;Derivative Libraries&quot;">​</a></h3><p><code>@vis-three/library-xxx</code></p><p>Derivative Libraries are collections provided by the official team related to 3D applications, facilitating quick search and integration. All official derivative libraries start with <code>@vis-three/library-</code>.</p><h3 id="pre-configured-engines" tabindex="-1">Pre-configured Engines <a class="header-anchor" href="#pre-configured-engines" aria-label="Permalink to &quot;Pre-configured Engines&quot;">​</a></h3><p><code>@vis-three/engine-xxx</code></p><p>Pre-configured Engines are engines assembled by the official team for different application scenarios, allowing for quick development and debugging. All official pre-configured engines start with <code>@vis-three/engine-</code>.</p>`,39),r=[n];function s(l,c,d,p,h,u){return a(),i("div",null,r)}const m=e(o,[["render",s]]);export{f as __pageData,m as default};

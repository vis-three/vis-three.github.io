import{_ as s,o as n,c as e,O as a}from"./chunks/framework.c4814614.js";const u=JSON.parse('{"title":"Why Use VIS-THREE?","description":"","frontmatter":{},"headers":[],"relativePath":"en/start/intro.md","filePath":"en/start/intro.md"}'),o={name:"en/start/intro.md"},l=a(`<h1 id="why-use-vis-three" tabindex="-1">Why Use VIS-THREE? <a class="header-anchor" href="#why-use-vis-three" aria-label="Permalink to &quot;Why Use VIS-THREE?&quot;">​</a></h1><h2 id="challenges-in-developing-projects-with-three-js" tabindex="-1">Challenges in Developing Projects with three.js <a class="header-anchor" href="#challenges-in-developing-projects-with-three-js" aria-label="Permalink to &quot;Challenges in Developing Projects with three.js&quot;">​</a></h2><h3 id="project-organization-and-iteration" tabindex="-1">Project Organization and Iteration <a class="header-anchor" href="#project-organization-and-iteration" aria-label="Permalink to &quot;Project Organization and Iteration&quot;">​</a></h3><p>When developing web3D projects with <code>three.js</code>, whether referring to examples on the <a href="https://threejs.org/" target="_blank" rel="noreferrer">three.js official site</a>, other plugin demos, or working on similar projects, a significant issue often encountered is <strong>code organization</strong>.</p><ul><li><p>How can we ensure long-term stability and smooth iteration of the project with various requirements, different levels of developer experience, and diverse front-end technology stacks and frameworks?</p></li><li><p>When requirements change or new features are added, how can we modify our existing code to avoid extensive disruptions and enable quick issue resolution?</p></li><li><p>For teams with varying levels of developer experience and high turnover, how long will it take for new developers to get up to speed?</p></li></ul><h3 id="flexibility-and-common-pitfalls" tabindex="-1">Flexibility and Common Pitfalls <a class="header-anchor" href="#flexibility-and-common-pitfalls" aria-label="Permalink to &quot;Flexibility and Common Pitfalls&quot;">​</a></h3><p><code>three.js</code> is a web3D library that provides only the most basic or primitive project construction tools. While its simplicity and fundamental nature make it powerful, they also mean that there are many intricate details to address, leading to numerous &quot;pitfalls.&quot;</p><ul><li><p>How can we avoid falling into common pitfalls?</p></li><li><p>How can we help others avoid these pitfalls?</p></li></ul><h3 id="framework-integration-and-rendering-performance" tabindex="-1">Framework Integration and Rendering Performance <a class="header-anchor" href="#framework-integration-and-rendering-performance" aria-label="Permalink to &quot;Framework Integration and Rendering Performance&quot;">​</a></h3><p>The rise of data-driven view frameworks has elevated front-end development to a new level of complexity and team size. These frameworks make it easier for developers to focus more on business functionality with lower technical costs.</p><p>However, 3D projects, especially those centered around real-time rendering, introduce significant changes in development approach and technical requirements. When using popular front-end frameworks with web3D projects:</p><ul><li><p>How can we effectively manage the relationship between 3D components and popular front-end frameworks?</p></li><li><p>How can we ensure real-time 3D rendering performance?</p></li></ul><p>Efficient development relies on popular front-end frameworks, but maintaining real-time 3D rendering performance or overall web performance is highly demanding. This creates a significant challenge for many front-end developers, increasing both the skill requirements and the mental burden during development.</p><h2 id="vis-three-framework-introduction" tabindex="-1">VIS-THREE Framework Introduction <a class="header-anchor" href="#vis-three-framework-introduction" aria-label="Permalink to &quot;VIS-THREE Framework Introduction&quot;">​</a></h2><h3 id="modular-plugin-system" tabindex="-1">Modular Plugin System <a class="header-anchor" href="#modular-plugin-system" aria-label="Permalink to &quot;Modular Plugin System&quot;">​</a></h3><p>To address the code organization issues in <code>three.js</code> projects, reduce coupling between functional components, enhance reusability, and improve extensibility, <code>VIS-THREE</code> introduces the concept of functional plugins. By adopting a plugin-based organization, <code>VIS-THREE</code> core engine provides plug-and-play functionality, allowing for decoupled development of modules and features, continuous integration, and compatibility with extensions.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {defineEngine} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@vis-three/core&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {WebGLRendererPlugin} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@vis-three/plugin-webgl-renderer&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">engine</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineEngine</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">WebGLRendererPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            antialias: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            alpha: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> {defineEngine} </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@vis-three/core&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> {WebGLRendererPlugin} </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@vis-three/plugin-webgl-renderer&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">engine</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineEngine</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    plugins: [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">WebGLRendererPlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">            antialias: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            alpha: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        }),</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><h3 id="logical-strategy" tabindex="-1">Logical Strategy <a class="header-anchor" href="#logical-strategy" aria-label="Permalink to &quot;Logical Strategy&quot;">​</a></h3><ul><li><p>How can we address issues of inter-function connectivity and compatibility?</p></li><li><p>How can we ensure that plugins can meet and implement various business requirements?</p></li><li><p><code>VIS-THREE</code> introduces the concept of logical strategy, providing capabilities for strategy injection and rollback. Strategies are methods for organizing different plugins to achieve a complete functional logic, decoupling logic from plugins, enhancing plugin compatibility, and improving business function compatibility, thus enabling better continuous integration.</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {defineEngine} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@vis-three/core&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {WebGLRendererPlugin} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@vis-three/plugin-webgl-renderer&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {RenderManagerPlugin} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@vis-three/plugin-render-manager&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {EffectComposerPlugin} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@vis-three/plugin-effect-composer&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {EffectRenderStrategy} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@vis-three/strategy-effect-render&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">engine</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineEngine</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">WebGLRendererPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            antialias: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            alpha: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        }),</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">RenderManagerPlugin</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">EffectComposerPlugin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            WebGLMultisampleRenderTarget: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    strategy: [</span><span style="color:#B392F0;">EffectRenderStrategy</span><span style="color:#E1E4E8;">()],</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> {defineEngine} </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@vis-three/core&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> {WebGLRendererPlugin} </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@vis-three/plugin-webgl-renderer&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> {RenderManagerPlugin} </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@vis-three/plugin-render-manager&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> {EffectComposerPlugin} </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@vis-three/plugin-effect-composer&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> {EffectRenderStrategy} </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@vis-three/strategy-effect-render&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">engine</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineEngine</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    plugins: [</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">WebGLRendererPlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">            antialias: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            alpha: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        }),</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">RenderManagerPlugin</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">EffectComposerPlugin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">            WebGLMultisampleRenderTarget: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        }),</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    strategy: [</span><span style="color:#6F42C1;">EffectRenderStrategy</span><span style="color:#24292E;">()],</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><h3 id="scene-configuration" tabindex="-1">Scene Configuration <a class="header-anchor" href="#scene-configuration" aria-label="Permalink to &quot;Scene Configuration&quot;">​</a></h3><p>While modular and strategic approaches improve code organization, they don&#39;t fundamentally change the development challenges of <code>three.js</code>. The inherent complexity of <code>three.js</code>, such as understanding graphics principles, object properties, and various APIs, remains high and requires substantial knowledge and experience.</p><p>To lower the development threshold of <code>three.js</code> and avoid common pitfalls, <code>VIS-THREE</code> provides a configuration-based middleware layer. This approach allows you to configure all <code>three.js</code> object actions without needing to focus on the details of <code>three.js</code> itself. Instead, you can concentrate on the structure of your scene configuration files.</p><p><code>VIS-THREE</code> also offers a suite of tools and capabilities to simplify managing configuration files, mapping the entire 3D scene and its interactions through these files, thereby reducing development complexity and improving efficiency.</p><p><strong>Focus on configuration, and leave the rest to us.</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {DisplayEngineSupport} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@vis-three/engine-display-support&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> {generateConfig, CONFIGTYPE} </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;@vis-three/middleware&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">engine</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">DisplayEngineSupport</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">setDom</span><span style="color:#E1E4E8;">(document.</span><span style="color:#B392F0;">getElementById</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;app&quot;</span><span style="color:#E1E4E8;">))</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">play</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">generateConfig.injectEngine </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> engine;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">scene</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">generateConfig</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">CONFIGTYPE</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">SCENE</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">engine.</span><span style="color:#B392F0;">setSceneBySymbol</span><span style="color:#E1E4E8;">(scene.vid);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">generateConfig.injectScene </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">material</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">generateConfig</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">CONFIGTYPE</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">MESHSTANDARDMATERIAL</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    color: </span><span style="color:#9ECBFF;">&quot;rgb(255, 0, 0)&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">geometry</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">generateConfig</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">CONFIGTYPE</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">BOXGEOMETRY</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    width: </span><span style="color:#79B8FF;">20</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    height: </span><span style="color:#79B8FF;">40</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    depth: </span><span style="color:#79B8FF;">60</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">generateConfig</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">CONFIGTYPE</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">MESH</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    geometry: geometry.vid,</span></span>
<span class="line"><span style="color:#E1E4E8;">    material: material.vid,</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> {DisplayEngineSupport} </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@vis-three/engine-display-support&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> {generateConfig, CONFIGTYPE} </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;@vis-three/middleware&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">engine</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DisplayEngineSupport</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    .</span><span style="color:#6F42C1;">setDom</span><span style="color:#24292E;">(document.</span><span style="color:#6F42C1;">getElementById</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;app&quot;</span><span style="color:#24292E;">))</span></span>
<span class="line"><span style="color:#24292E;">    .</span><span style="color:#6F42C1;">play</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">generateConfig.injectEngine </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> engine;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">scene</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">generateConfig</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">CONFIGTYPE</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">SCENE</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">engine.</span><span style="color:#6F42C1;">setSceneBySymbol</span><span style="color:#24292E;">(scene.vid);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">generateConfig.injectScene </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">material</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">generateConfig</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">CONFIGTYPE</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">MESHSTANDARDMATERIAL</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">    color: </span><span style="color:#032F62;">&quot;rgb(255, 0, 0)&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">geometry</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">generateConfig</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">CONFIGTYPE</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">BOXGEOMETRY</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">    width: </span><span style="color:#005CC5;">20</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    height: </span><span style="color:#005CC5;">40</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    depth: </span><span style="color:#005CC5;">60</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">generateConfig</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">CONFIGTYPE</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">MESH</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">    geometry: geometry.vid,</span></span>
<span class="line"><span style="color:#24292E;">    material: material.vid,</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><h3 id="component-based-engineering-alpha" tabindex="-1">Component-Based Engineering (Alpha) <a class="header-anchor" href="#component-based-engineering-alpha" aria-label="Permalink to &quot;Component-Based Engineering (Alpha)&quot;">​</a></h3><h2 id="advantages-of-vis-three" tabindex="-1">Advantages of VIS-THREE <a class="header-anchor" href="#advantages-of-vis-three" aria-label="Permalink to &quot;Advantages of VIS-THREE&quot;">​</a></h2><h3 id="robust-compatibility" tabindex="-1">Robust Compatibility <a class="header-anchor" href="#robust-compatibility" aria-label="Permalink to &quot;Robust Compatibility&quot;">​</a></h3><p>From a framework perspective, <code>VIS-THREE</code> provides a set of development processes and mechanisms to standardize and enhance web3D project development. This allows for the selection or customization of plugins, strategies, and configuration modules based on specific business needs and development complexity.</p><p>Within this framework, <code>VIS-THREE</code> supports both native <code>three.js</code> project development and development using its own configuration and component-based approach.</p><h3 id="flexible-integration-and-migration" tabindex="-1">Flexible Integration and Migration <a class="header-anchor" href="#flexible-integration-and-migration" aria-label="Permalink to &quot;Flexible Integration and Migration&quot;">​</a></h3><p>The 3D engine built with the <code>VIS-THREE</code> framework integrates various plugins and strategies, which are pluggable and removable. This flexibility allows for convenient control over changes in engine functionality by installing or uninstalling different plugins and strategies. For engine migration, simply introducing the same plugins and strategies completes the migration process.</p><h3 id="more-robust-version-upgrades" tabindex="-1">More Robust Version Upgrades <a class="header-anchor" href="#more-robust-version-upgrades" aria-label="Permalink to &quot;More Robust Version Upgrades&quot;">​</a></h3><p><code>VIS-THREE</code> uses modularity, strategy, and configuration to isolate application projects from <code>three.js</code>, providing a good buffer against updates.</p><p>In native <code>three.js</code> projects, once the <code>three.js</code> dependency version is set, updating to a major new version can be costly and challenging. It often results in incompatibility issues and requires extensive project refactoring, leading to high upgrade costs and risks.</p><p>With <code>VIS-THREE</code>, updating <code>three.js</code> versions is almost seamless for application projects. You only need to update the relevant plugins, strategies, or configuration modules, and the compatibility is handled through these updates. This significantly ensures the stability and smooth iteration of application projects.</p><h3 id="broader-framework-integration" tabindex="-1">Broader Framework Integration <a class="header-anchor" href="#broader-framework-integration" aria-label="Permalink to &quot;Broader Framework Integration&quot;">​</a></h3><p><code>VIS-THREE</code>, through its scene configuration feature, importantly decouples UI logic from the 3D rendering layer.</p><p>For UI frameworks, the 3D real-time rendering component is no longer part of the 3D library. Instead, it is managed through configuration files similar to <code>json</code>, where all UI operations interact with a simple <code>json</code> configuration.</p><p>This means that, in most cases, the UI framework no longer directly manipulates the objects and properties required for 3D real-time rendering. By decoupling the 3D and UI components, <code>VIS-THREE</code> ensures high UI development efficiency, maintains 3D real-time rendering performance, reduces development complexity, and enhances the overall efficiency of web3D project development and operation.</p><p><code>VIS-THREE</code> does not enforce specific UI frameworks, such as <code>vue2</code>, <code>vue3</code>, or <code>react</code>. From a design perspective, <code>VIS-THREE</code> is compatible with any front-end framework.</p><h3 id="smoother-development-transition" tabindex="-1">Smoother Development Transition <a class="header-anchor" href="#smoother-development-transition" aria-label="Permalink to &quot;Smoother Development Transition&quot;">​</a></h3><p>If you have experience developing web3D projects with <code>three.js</code>, transitioning to using <code>VIS-THREE</code> for project development will feel natural and seamless.</p><p>The official plugins, strategies, and configuration modules provided are designed with a non-intrusive development approach. This means they strive not to impact or alter the native <code>three.js</code> objects, properties, and concepts. In this mode, developers familiar with <code>three.js</code> can quickly adapt to and get up to speed with various functions and modules.</p><h2 id="advantages-of-configuration-based-development" tabindex="-1">Advantages of Configuration-Based Development <a class="header-anchor" href="#advantages-of-configuration-based-development" aria-label="Permalink to &quot;Advantages of Configuration-Based Development&quot;">​</a></h2><h3 id="reduced-development-pressure" tabindex="-1">Reduced Development Pressure <a class="header-anchor" href="#reduced-development-pressure" aria-label="Permalink to &quot;Reduced Development Pressure&quot;">​</a></h3><h3 id="templates-assembly" tabindex="-1">Templates &amp; Assembly <a class="header-anchor" href="#templates-assembly" aria-label="Permalink to &quot;Templates &amp; Assembly&quot;">​</a></h3><h3 id="preprocessing-postprocessing" tabindex="-1">Preprocessing &amp; Postprocessing <a class="header-anchor" href="#preprocessing-postprocessing" aria-label="Permalink to &quot;Preprocessing &amp; Postprocessing&quot;">​</a></h3><h3 id="configuration-logic-upgrades" tabindex="-1">Configuration &amp; Logic Upgrades <a class="header-anchor" href="#configuration-logic-upgrades" aria-label="Permalink to &quot;Configuration &amp; Logic Upgrades&quot;">​</a></h3><h3 id="persistence-runtime" tabindex="-1">Persistence &amp; Runtime <a class="header-anchor" href="#persistence-runtime" aria-label="Permalink to &quot;Persistence &amp; Runtime&quot;">​</a></h3><h3 id="native-rendering-performance" tabindex="-1">Native Rendering Performance <a class="header-anchor" href="#native-rendering-performance" aria-label="Permalink to &quot;Native Rendering Performance&quot;">​</a></h3>`,52),p=[l];function t(r,i,c,E,d,y){return n(),e("div",null,p)}const h=s(o,[["render",t]]);export{u as __pageData,h as default};

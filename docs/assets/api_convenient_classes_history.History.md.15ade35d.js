import{_ as e,o as t,c as a,O as r}from"./chunks/framework.c4814614.js";const b=JSON.parse('{"title":"Class: History","description":"","frontmatter":{},"headers":[],"relativePath":"api/convenient/classes/history.History.md","filePath":"api/convenient/classes/history.History.md"}'),o={name:"api/convenient/classes/history.History.md"},i=r('<h1 id="class-history" tabindex="-1">Class: History <a class="header-anchor" href="#class-history" aria-label="Permalink to &quot;Class: History&quot;">​</a></h1><p><a href="./../modules/history.html">history</a>.History</p><h2 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;constructor&quot;">​</a></h3><p>• <strong>new History</strong>(<code>step?</code>)</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>step?</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/convenient/history/index.ts#L19" target="_blank" rel="noreferrer">history/index.ts:19</a></p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="actionlist" tabindex="-1">actionList <a class="header-anchor" href="#actionlist" aria-label="Permalink to &quot;actionList&quot;">​</a></h3><p>• <code>Private</code> <strong>actionList</strong>: <a href="./history.Action.html"><code>Action</code></a>[] = <code>[]</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/convenient/history/index.ts#L15" target="_blank" rel="noreferrer">history/index.ts:15</a></p><hr><h3 id="index" tabindex="-1">index <a class="header-anchor" href="#index" aria-label="Permalink to &quot;index&quot;">​</a></h3><p>• <code>Private</code> <strong>index</strong>: <code>number</code> = <code>-1</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/convenient/history/index.ts#L16" target="_blank" rel="noreferrer">history/index.ts:16</a></p><hr><h3 id="step" tabindex="-1">step <a class="header-anchor" href="#step" aria-label="Permalink to &quot;step&quot;">​</a></h3><p>• <code>Private</code> <strong>step</strong>: <code>number</code> = <code>50</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/convenient/history/index.ts#L17" target="_blank" rel="noreferrer">history/index.ts:17</a></p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="apply" tabindex="-1">apply <a class="header-anchor" href="#apply" aria-label="Permalink to &quot;apply&quot;">​</a></h3><p>▸ <strong>apply</strong>(<code>action</code>, <code>exec?</code>): <code>void</code></p><p>注册动作</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>action</code></td><td style="text-align:left;"><a href="./history.Action.html"><code>Action</code></a></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">new class extends BasicAction</td></tr><tr><td style="text-align:left;"><code>exec</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>false</code></td><td style="text-align:left;">是否立即执行动作的next</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/convenient/history/index.ts#L32" target="_blank" rel="noreferrer">history/index.ts:32</a></p><hr><h3 id="clear" tabindex="-1">clear <a class="header-anchor" href="#clear" aria-label="Permalink to &quot;clear&quot;">​</a></h3><p>▸ <strong>clear</strong>(): <code>void</code></p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/convenient/history/index.ts#L75" target="_blank" rel="noreferrer">history/index.ts:75</a></p><hr><h3 id="do" tabindex="-1">do <a class="header-anchor" href="#do" aria-label="Permalink to &quot;do&quot;">​</a></h3><p>▸ <code>Private</code> <strong>do</strong>(<code>command</code>): <code>void</code></p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>command</code></td><td style="text-align:left;"><code>&quot;next&quot;</code> | <code>&quot;prev&quot;</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/convenient/history/index.ts#L23" target="_blank" rel="noreferrer">history/index.ts:23</a></p><hr><h3 id="redo" tabindex="-1">redo <a class="header-anchor" href="#redo" aria-label="Permalink to &quot;redo&quot;">​</a></h3><p>▸ <strong>redo</strong>(): <code>void</code></p><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/convenient/history/index.ts#L58" target="_blank" rel="noreferrer">history/index.ts:58</a></p><hr><h3 id="undo" tabindex="-1">undo <a class="header-anchor" href="#undo" aria-label="Permalink to &quot;undo&quot;">​</a></h3><p>▸ <strong>undo</strong>(): <code>void</code></p><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Shiotsukikaedesari/vis-three/blob/2f5203e6/packages/convenient/history/index.ts#L67" target="_blank" rel="noreferrer">history/index.ts:67</a></p>',64),n=[i];function d(s,h,l,c,f,u){return t(),a("div",null,n)}const x=e(o,[["render",d]]);export{b as __pageData,x as default};

(function(e){function n(n){for(var o,i,s=n[0],c=n[1],l=n[2],d=0,h=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&h.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(n);while(h.length)h.shift()();return r.push.apply(r,l||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],o=!0,i=1;i<t.length;i++){var c=t[i];0!==a[c]&&(o=!1)}o&&(r.splice(n--,1),e=s(s.s=t[0]))}return e}var o={},a={app:0},r=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d210c47":"e09c78c9","chunk-2d212fc5":"0a5dc30e","chunk-2d22d746":"f16b358d","chunk-59d275e6":"e98aa011"}[e]+".js"}function s(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var n=[],t=a[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise((function(n,o){t=a[e]=[n,o]}));n.push(t[2]=o);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e);var l=new Error;r=function(n){c.onerror=c.onload=null,clearTimeout(d);var t=a[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",l.name="ChunkLoadError",l.type=o,l.request=r,t[1](l)}a[e]=void 0}};var d=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(n)},s.m=e,s.c=o,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)s.d(t,o,function(n){return e[n]}.bind(null,o));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=n,c=c.slice();for(var d=0;d<c.length;d++)n(c[d]);var u=l;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("7a23");function a(e,n,t,a,r,i){var s=Object(o["w"])("CommonHead"),c=Object(o["w"])("router-view"),l=Object(o["w"])("CommonFooter");return Object(o["p"])(),Object(o["d"])(o["a"],null,[Object(o["g"])(s),Object(o["g"])(c),Object(o["g"])(l)],64)}var r=Object(o["C"])("data-v-797c0efa");Object(o["s"])("data-v-797c0efa");var i={id:"header",class:"hoc clear"},s=Object(o["g"])("div",{id:"logo",class:"fl_left",style:{height:"100px"}},[Object(o["g"])("a",{href:"index.html",style:{color:"white"}},[Object(o["g"])("img",{src:"/assets/images/logo/logo_futurewave_bianco.png",class:"uk-height-1-1"})])],-1),c={id:"mainav",class:"fl_right"},l={class:"clear uk-text-center"},d={class:"active"},u=Object(o["f"])("首页"),h=Object(o["g"])("br",null,null,-1),g=Object(o["f"])("Home"),p=Object(o["f"])("公司介绍"),b=Object(o["g"])("br",null,null,-1),f=Object(o["f"])("About Us"),m=Object(o["f"])("作品推荐"),v=Object(o["g"])("br",null,null,-1),w=Object(o["f"])("Recommandation"),y=Object(o["g"])("li",null,[Object(o["g"])("a",{href:"#"},[Object(o["f"])("相关视频"),Object(o["g"])("br"),Object(o["f"])("Video")])],-1),j=Object(o["f"])("联系我们"),O=Object(o["g"])("br",null,null,-1),k=Object(o["f"])("Contact Us");Object(o["q"])();var A=r((function(e,n,t,a,A,F){var I=Object(o["w"])("router-link");return Object(o["p"])(),Object(o["d"])("header",i,[s,Object(o["g"])("nav",c,[Object(o["g"])("ul",l,[Object(o["g"])("li",d,[Object(o["g"])(I,{to:"/"},{default:r((function(){return[u,h,g]})),_:1})]),Object(o["g"])("li",null,[Object(o["g"])(I,{to:"/about"},{default:r((function(){return[p,b,f]})),_:1})]),Object(o["g"])("li",null,[Object(o["g"])(I,{to:"/recommendation"},{default:r((function(){return[m,v,w]})),_:1})]),y,Object(o["g"])("li",null,[Object(o["g"])(I,{to:"/contact"},{default:r((function(){return[j,O,k]})),_:1})])])])])})),F={name:"CommonHead"};t("5fd3");F.render=A,F.__scopeId="data-v-797c0efa";var I=F,x={class:"wrapper row5"},C=Object(o["g"])("div",{id:"copyright",class:"hoc clear"},[Object(o["g"])("p",{class:"fl_left"},"Copyright © 2021 - All Rights Reserved -"),Object(o["g"])("a",{href:"#"},"Futurewave")],-1);function _(e,n,t,a,r,i){return Object(o["p"])(),Object(o["d"])("div",x,[C])}var R={name:"CommonFooter"};R.render=_;var S=R,B={name:"App",components:{CommonHead:I,CommonFooter:S}};B.render=a;var P=B,T=(t("d3b7"),t("6c02")),E={class:"bgded overlay",style:{"background-image":"url('/assets/images/background/2001_space_odessey_1.jpg')"}},M=Object(o["e"])('<div class="home"><div class="wrapper row1"><div id="pageintro" class="hoc clear"><article><h3 class="heading" style="color:white;">Future Wave</h3></article><article id="slogan"><p>未来将至</p><p>The Future Is Coming</p><p>专注科幻与奇幻IP孵化</p><p>Focus On Science Fiction and Fantasy</p><p>携手乘风破浪</p><p>Riding the Winds and Breaking the Waves Together</p></article></div></div></div>',1);function W(e,n,t,a,r,i){return Object(o["p"])(),Object(o["d"])("div",E,[M])}var H={name:"Home",components:{}};H.render=W;var V=H,z=[{path:"/",name:"Home",component:V},{path:"/about",name:"About",component:function(){return t.e("chunk-2d22d746").then(t.bind(null,"f820"))}},{path:"/recommendation",name:"/Recommendation",component:function(){return t.e("chunk-59d275e6").then(t.bind(null,"30ab"))}},{path:"/contact",name:"Contact",component:function(){return t.e("chunk-2d210c47").then(t.bind(null,"b8fa"))}},{path:"/recommendation/:id",name:"BookDetail",component:function(){return t.e("chunk-2d212fc5").then(t.bind(null,"ab6d"))}}],L=Object(T["a"])({history:Object(T["b"])(),routes:z}),U=L,N=(t("7db0"),t("5502")),D={id:"b11ecb4705728de9763ea0b4e1140239",name:"Nexhuman",author:"Francesco Verso",language:"Italian, English, Chinese",image:"/assets/images/books/nexhuman.jpeg",detail:{title:"\n            Livido (Italian) / Nexhuman (English) \n              <br>\n            by Francesco Verso\n            ",images:["/assets/images/books/livido_in_detail.png","/assets/images/books/nexhuman_in_detail.png"],context:'\n      <p class="uk-text-large uk-text-center">\n        In a world turned to trash where do you find love?<br>\n        A landfill, a murder, a collection of pieces over fifteen years long.All for a seemingly impossible love.\n      </p>\n\n      <p class="uk-text-bold">\n        “Francesco Verso brings classic cyberpunk attitude to grand romantic obsession… a thoughtful \n        meditation on what it means to be human and an exciting peek into a world that is just around the corner.”   \n        – James Patrick Kelly (Nebula, Locus and Hugo Award winner)\n      </p>\n      \n      <p class="uk-text-bold">\n        Winner of 2014 Italia Award as Best Italian Science Fiction Novel \n        <br>\n        Winner of 2013 Odissea Award by Delos Books\n      </p>\n      \n      <p><strong>Genre:</strong> Science Fiction, Cyberpunk, Coming of Age, Speculative Fiction, Transhumanism<p>\n      <p><strong>Length: </strong>Around 80.000 words (260 pages)</p>\n      <p><strong>Movie Script:</strong>Available in Italian (written by Francesco Verso & Alessio Billi, screenwriter at national TV Channel RAI)</p> \n      <p><strong>Theme:</strong>An imaginary city is endangered by the spread of “kipple” (garbage & trash) that overruns everything. Most of the people live by recycling and reusing dump materials, while a lucky few upload themselves into new artificial bodies. They are called nexhumans and represent the upcoming evolution of man (post humanism).</p>\n      <p><strong>Plot:</strong>Peter Pains, a 15 year-old disabled “trashformer”, sees his older brother Charlie, leader of a teenage gang called The Dead Bones, killing Alba, a nexhuman girl. Peter is in love with her and decides to gather her electronic body parts to rebuild her with the help of Ion, a homeless tramp. Peter will have to face the members of the Dead Bones one by one to recover all of Alba. And it will take him more than 15 years to accomplish it. The novel has three alternative ending, each one leading to a different solution. </p> \n      \n      <p>Francesco Verso GoH at the 2015 <a href="https://www.youtube.com/watch?v=BRasKVnuVC4">Utopiales in Nantes</a> talking about Italian SF (in English).</p>\n      <p>Essay by Jana Vizmuller Zocco <a href="http://www.rifp.it/ojs/index.php/rifp/article/viewFile/rifp.2014.0028/346">“Science Fiction and Ontologies of Leadership”</a>, Rivista Internazionale di Filosofia e Psicologia. (In English) </p>\n      <p>Rivista Internazionale di Filosofia e Psicologia. (In English) </p>\n      <p>Review by Jana Vizmuller Zocco on <a href="https://jvzocco.wordpress.com/2015/12/01/lividonexhuman/">Reading rascal.</a> (In English) </p>\n      <p>Review by <a href="https://sfra.wildapricot.org/resources/Documents/SFRA%20314.pdf">SFRA Review nr 314</a> by Fernando Porta (in English) </p>\n      <p>Review by Rachel Cordasco on <a href="http://strangehorizons.com/non-fiction/reviews/nexhuman-by-francesco-verso-translated-by-sally-mccorry/">Strange Horizons.</a> (In English) </p>\n\n      <p>\n       <strong>The Author: Francesco Verso</strong> (born in 1973 in Bologna) is one of the most popular Italian Science Fiction writers and Editor of the book series <strong>Future Fiction</strong>.\n       His first novel <strong>Antidoti umani</strong> was finalist at 2004 Urania Mondadori Award. In 2009 he won the Urania Mondadori Award with <strong>e-Doll</strong>. \n       In 2013 he won the Odissea and Italia Award with <strong>Livido</strong>. In 2015 he won a second Urania Award with <strong>BloodBusters</strong>. \n       His latest book <strong>The Walkers</strong> is made of 2 novels, <strong>The Pulldogs</strong> and <strong>No/Mad/Land</strong>. His stories have appeared in many magazines (<strong>Robot, iComics, Fantasy Magazine, International Speculative Fiction #5,\n         Chicago Quarterly Review #20, Future Affairs Administration, Words Without Borders</strong>) and have been adapted for theatre (<strong>The Milky Way</strong>). He lives in Roma with his wife Elena and his daughter Sofia.\n       <p>\n      '}},J={id:"9d7ab84e6f57eb3eeab2a9cc08f1ab36",name:"Blood Buster",author:"Francesco Verso",language:"Italian, English, Chinese",image:"/assets/images/books/blood_buster.png",detail:{title:"\n            Bloodbusters \n              <br>\n             by Francesco Verso\n            ",images:["/assets/images/books/blood_buster.png","/assets/images/books/urania.png"],context:'\n      \n      <p class="uk-text-bold">\n        Winner of 2015 Urania-Mondadori Award\n      </p>\n      \n      <p><strong>Genre:</strong> Speculative Fiction, New Weird, Contemporary Satire (66,000 words)<p>\n      <p><strong>Theme:</strong>What if taxes were paid by citizens through blood withdrawals? What if tax evasion was a crime punishable with imprisonment and enforced by the Bloodbusters? What if donating blood was an illegal procedure? And what if Ematogen, a delicious snack derived from blood, was everyone’s favourite food? </p>\n      <p><strong>Plot:</strong>In a grotesque Rome, Alan Costa, a Bloodbuster operator, falls in love with Anissa Malesano, a compulsive donor  for the Robin Blood underworld organisation, who gives her blood to anyone in need. In a crescendo of deceit and treachery, where he cannot even trust his colleague Farid Sedef or his own boss Emory Sziliagy, Alan sees Anissa ending up in jail for tax evasion. Once he discovers the real reason why he was recruited as a Bloodbuster, Alan decides to sacrifice his own job and a precious part of himself to rescue Anissa and her son Nicola.</p> \n      \n      <p>\n       <strong>The Author: Francesco Verso</strong> (born in 1973 in Bologna) is one of the most popular Italian Science Fiction writers and Editor of the book series <strong>Future Fiction</strong>.\n       His first novel <strong>Antidoti umani</strong> was finalist at 2004 Urania Mondadori Award. In 2009 he won the Urania Mondadori Award with <strong>e-Doll</strong>. \n       In 2013 he won the Odissea and Italia Award with <strong>Livido</strong>. In 2015 he won a second Urania Award with <strong>BloodBusters</strong>. \n       His latest book <strong>The Walkers</strong> is made of 2 novels, <strong>The Pulldogs</strong> and <strong>No/Mad/Land</strong>. His stories have appeared in many magazines (<strong>Robot, iComics, Fantasy Magazine, International Speculative Fiction #5,\n         Chicago Quarterly Review #20, Future Affairs Administration, Words Without Borders</strong>) and have been adapted for theatre (<strong>The Milky Way</strong>). He lives in Roma with his wife Elena and his daughter Sofia.\n       <p>\n      '}},q=Object(N["a"])({state:{books:[D,J]},getters:{getById:function(e){return function(n){return e.books.find((function(e){return e.id===n}))}}},mutations:{},actions:{},modules:{}});Object(o["c"])(P).use(q).use(U).mount("#app")},"5fd3":function(e,n,t){"use strict";t("6c56")},"6c56":function(e,n,t){}});
//# sourceMappingURL=app.1627250f.js.map
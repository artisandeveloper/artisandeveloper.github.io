(function(t){function e(e){for(var s,r,o=e[0],l=e[1],c=e[2],u=0,p=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},i={app:0},n=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"12b2":function(t,e,a){},"1ae2":function(t,e,a){"use strict";a("12b2")},"1cb1":function(t,e,a){},"25d2":function(t,e,a){},"3c72":function(t,e,a){"use strict";a("aec6")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("LandingPage")],1)},n=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid app_container"},[a("NavBar"),a("HeroSection"),a("HowItWorks"),a("OurServices"),a("Portfolio"),a("Footer")],1)},o=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid navbar-container upper_nav",attrs:{id:"Home"}},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"row"},[a("nav",{staticClass:"navbar navbar-expand-lg col-md-12  "},[t._m(0),t._m(1),a("div",{staticClass:"collapse navbar-collapse ",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav ml-auto links m-b-0"},[a("li",{staticClass:"nav-item"},[a("a",{ref:"l0",staticClass:"link",on:{click:function(e){return t.navigateTo(0)}}},[this.$parent.leneng?a("span",[t._v("Home")]):t._e(),this.$parent.lenfrench?a("span",[t._v("Acceuil")]):t._e(),a("div",{staticClass:"line yellow"})])]),a("li",{staticClass:"nav-item"},[a("a",{ref:"l1",staticClass:"link",on:{click:function(e){return t.navigateTo(1)}}},[this.$parent.leneng?a("span",[t._v("How It Works")]):t._e(),this.$parent.lenfrench?a("span",[t._v("Comment Ca Marche")]):t._e(),a("div",{staticClass:"line yellow"})])]),a("li",{staticClass:"nav-item"},[a("a",{ref:"l2",staticClass:"link",on:{click:function(e){return t.navigateTo(2)}}},[this.$parent.leneng?a("span",[t._v("Our Services")]):t._e(),this.$parent.lenfrench?a("span",[t._v("Nos Services")]):t._e(),a("div",{staticClass:"line yellow"})])]),a("li",{staticClass:"nav-item"},[a("a",{ref:"l3",staticClass:"link",on:{click:function(e){return t.navigateTo(3)}}},[this.$parent.leneng?a("span",[t._v("Portfolio")]):t._e(),this.$parent.lenfrench?a("span",[t._v("Prés Traveaux")]):t._e(),a("div",{staticClass:"line yellow"})])]),a("li",{staticClass:"nav-item"},[a("a",{ref:"l4",staticClass:"link",on:{click:function(e){return t.navigateTo(4)}}},[a("span",[t._v("Contacts")]),a("div",{staticClass:"line yellow"})])]),a("li",{staticClass:"nav-item"},[this.$parent.leneng?a("a",{ref:"l4",staticClass:"link",on:{click:t.changeLanguageToFrench}},[a("span",[t._v("Francais")]),a("div",{staticClass:"line yellow"})]):t._e(),this.$parent.lenfrench?a("a",{ref:"l4",staticClass:"link",on:{click:t.changeLanguageToEnglish}},[a("span",[t._v("English")]),a("div",{staticClass:"line yellow"})]):t._e()])])])])])])])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[a("img",{attrs:{src:"/images/artdevlogofinalwhite.png",alt:"logo",width:"150"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("i",{staticClass:"fas fa-list"})])}],d=a("1157"),u=a.n(d),p={name:"NavBar",data:function(){return{ids:["app","HowItWorks","OurServices","Portfolio","Contacts"]}},methods:{changeLanguageToFrench:function(){this.$parent.lenfrench=!0,this.$parent.leneng=!1},changeLanguageToEnglish:function(){this.$parent.leneng=!0,this.$parent.lenfrench=!1},navigateTo:function(t){document.querySelector("#"+this.$data.ids[t]).scrollIntoView({behavior:"smooth"})},ChangNavbarOnScroll:function(){u()((function(){var t=u()(".upper_nav");u()(window).scroll((function(){var e=u()(window).scrollTop();e>=100?t.removeClass("upper_nav").addClass("upper_nav1"):t.removeClass("upper_nav1").addClass("upper_nav")}))}))}},mounted:function(){u()(document).ready((function(){u()(this).scrollTop(0)})),this.ChangNavbarOnScroll()}},v=p,m=(a("1ae2"),a("2877")),f=Object(m["a"])(v,l,c,!1,null,"3f710429",null),h=f.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid top-117",attrs:{id:"Hero"}},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 display_flex_align_center"},[a("div",{staticClass:"text-left"},[this.$parent.leneng?a("h1",[t._v("Welcome to ArtDev")]):t._e(),this.$parent.lenfrench?a("h1",[t._v("Bienvenus chez ArtDev")]):t._e(),this.$parent.leneng?a("p",{staticClass:"fs-18"},[t._v("ArtDev or Artisans Developers Team is a digital solution office, a digital agency in Algeria. ArtDev was founded for modern and fast solutions. we work with clients in different fields of business and services, medicine, production, logistics, etc. we create the best digital solutions for our friendly customers and the market.")]):t._e(),this.$parent.lenfrench?a("p",{staticClass:"fs-18"},[t._v(" ArtDev est un bureau de solution numérique, une agence numérique en Algérie. ArtDev a été fondée pour des solutions modernes et rapides. nous travaillons avec des clients dans les domaines , des biens et services , de la médecine, de la production, de la logistique, etc. nous créons les meilleures solutions digital pour nos aimable clients et le marché. Algeries, 16000, ALGERIA ")]):t._e(),this.$parent.leneng?a("button",{staticClass:"contact-btn bgc-red",attrs:{"data-toggle":"modal","data-target":"#contactpreorder"}},[t._v("Contact or pre-order")]):t._e(),this.$parent.lenfrench?a("button",{staticClass:"contact-btn bgc-red",attrs:{"data-toggle":"modal","data-target":"#contactpreorder"}},[t._v("Contact ou pré-commande")]):t._e()])]),t._m(0)])])])},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-6 d-none d-md-block "},[a("img",{staticClass:"col",attrs:{src:"images/hherosectionbg.png"}})])}],b={name:"HeroSection"},C=b,$=(a("7005"),Object(m["a"])(C,g,_,!1,null,"871eae22",null)),y=$.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid top-117",attrs:{id:"HowItWorks"}},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"row display_flex_justify_center p-t-80"},[a("div",{staticClass:"text-center"},[this.$parent.leneng?a("h1",[t._v("How It Works")]):t._e(),this.$parent.lenfrench?a("h1",[t._v("Comment Ca Marche")]):t._e()])]),a("div",{staticClass:"row"},[a("ul",{staticClass:"timeline"},[a("li",[a("div",{staticClass:"direction-r"},[a("div",{staticClass:"flag-wrapper"},[this.$parent.leneng?a("h5",{staticClass:"flag"},[t._v("Find the service")]):t._e(),this.$parent.lenfrench?a("h5",{staticClass:"flag"},[t._v("Chercher le service")]):t._e()]),this.$parent.leneng?a("div",{staticClass:"desc"},[t._v(" Look for the service you want, we provide a lot of service in several areas ")]):t._e(),this.$parent.lenfrench?a("div",{staticClass:"desc"},[t._v(" Chercher bien le service que vous souhaité on realise pas mal de service dans plusieur domaines ")]):t._e()])]),a("li",[a("div",{staticClass:"direction-l"},[a("div",{staticClass:"flag-wrapper"},[this.$parent.leneng?a("h5",{staticClass:"flag"},[t._v("Make a coffee with us")]):t._e(),this.$parent.lenfrench?a("h5",{staticClass:"flag"},[t._v("Fait un café avec nous")]):t._e()]),this.$parent.leneng?a("div",{staticClass:"desc"},[t._v(" Book your appointment to speak with our manager to explain your project well ")]):t._e(),this.$parent.lenfrench?a("div",{staticClass:"desc"},[t._v(" Réservez votre rendez vous pour parler avec notre mangere pour lui explique bien votre projet ")]):t._e()])]),a("li",[a("div",{staticClass:"direction-r"},[a("div",{staticClass:"flag-wrapper"},[this.$parent.leneng?a("h5",{staticClass:"flag"},[t._v("Receive your project")]):t._e(),this.$parent.lenfrench?a("h5",{staticClass:"flag"},[t._v("Recevez votre projet")]):t._e()]),this.$parent.leneng?a("div",{staticClass:"desc"},[t._v(" We have a team that works day and night to complete your project within the time limit ")]):t._e(),this.$parent.lenfrench?a("div",{staticClass:"desc"},[t._v(" Nous avons une équipe qui travail jours et nuit a fin de completer votre projet dans le delai ")]):t._e()])])])])])])},k=[],x={name:"HowItWorks"},j=x,S=(a("6542"),Object(m["a"])(j,w,k,!1,null,"d586157e",null)),O=S.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid top-117",attrs:{id:"OurServices"}},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"row display_flex_justify_center p-t-80"},[a("div",{staticClass:"text-center"},[this.$parent.leneng?a("h1",[t._v("Our Services")]):t._e(),this.$parent.lenfrench?a("h1",[t._v("Nos Services")]):t._e()])]),a("div",{staticClass:"row display_flex_justify_center cont p-t-50 "},[a("div",{staticClass:"box m-b-15"},[a("img",{attrs:{src:"images/graphicdesignimage.png"}}),a("h2",[t._v("01")]),this.$parent.leneng?a("h3",[t._v("Graphic Design")]):t._e(),this.$parent.lenfrench?a("h3",[t._v("Conception Graphique")]):t._e(),this.$parent.leneng?a("p",[t._v("logo | flyers | business card | social media design | ads Banner | video editing | website and application tester........")]):t._e(),this.$parent.lenfrench?a("p",[t._v(" logo | flyers | carte visite | social media design | Bannière publicitaire | vidéo editing | website and application tester........")]):t._e(),this.$parent.leneng?a("button",{staticClass:"bgc-red",attrs:{"data-toggle":"modal","data-target":"#serviceone"}},[t._v("Learn More")]):t._e(),this.$parent.lenfrench?a("button",{staticClass:"bgc-red",attrs:{"data-toggle":"modal","data-target":"#serviceone"}},[t._v("Savoir plus")]):t._e()]),a("div",{staticClass:"box m-b-15"},[a("img",{attrs:{src:"images/webdevimages.png"}}),a("h2",[t._v("02")]),this.$parent.leneng?a("h3",[t._v("Creation of websites, mobile & desktop application")]):t._e(),this.$parent.lenfrench?a("h3",[t._v("Création des sitesweb , application mobile & desktop")]):t._e(),this.$parent.leneng?a("p",[t._v(" websites : dynamique | static |with single page |showcase |catalogue |entreprise |e-commerce...... application : mobile hybride | app for desktop....... ")]):t._e(),this.$parent.lenfrench?a("p",[t._v(" sitewebs : dynamique | static |avec une seule page |vitrine |catalogue |entreprise |e-commerce...application : mobile hybride | app pour desktop....... ")]):t._e(),this.$parent.leneng?a("button",{staticClass:"bgc-red",attrs:{"data-toggle":"modal","data-target":"#servicetwo"}},[t._v("Learn More")]):t._e(),this.$parent.lenfrench?a("button",{staticClass:"bgc-red",attrs:{"data-toggle":"modal","data-target":"#servicetwo"}},[t._v("Savoir plus")]):t._e()]),a("div",{staticClass:"box m-b-15"},[a("img",{attrs:{src:"images/sysadmin.png"}}),a("h2",[t._v("03")]),this.$parent.leneng?a("h3",[t._v("Systems Administration")]):t._e(),this.$parent.lenfrench?a("h3",[t._v("Administration Systèmes")]):t._e(),this.$parent.leneng?a("p",[t._v(" administration of : data base | websites | installation and configuration of softwares and systems...... ")]):t._e(),this.$parent.lenfrench?a("p",[t._v("administration de : base de données | siteweb | installation et configuration des logiciel et système... ")]):t._e(),this.$parent.leneng?a("button",{staticClass:"bgc-red",attrs:{"data-toggle":"modal","data-target":"#servicethree"}},[t._v("Learn More")]):t._e(),this.$parent.lenfrench?a("button",{staticClass:"bgc-red",attrs:{"data-toggle":"modal","data-target":"#servicethree"}},[t._v("Savoir plus")]):t._e()]),a("div",{staticClass:"box m-b-15"},[a("img",{attrs:{src:"images/seo.png"}}),a("h2",[t._v("04")]),this.$parent.leneng?a("h3",[t._v("Advertising And SEO")]):t._e(),this.$parent.lenfrench?a("h3",[t._v("Publicité Et Référencement")]):t._e(),this.$parent.leneng?a("p",[t._v("seo | advertising and social media management | increase number of website traffic & visitors | website ranking......")]):t._e(),this.$parent.lenfrench?a("p",[t._v("référencement | publicité et gestion des réseaux sociaux | augmentation nombre de visiteurs de siteweb | seo......")]):t._e(),this.$parent.leneng?a("button",{staticClass:"bgc-red",attrs:{"data-toggle":"modal","data-target":"#servicefour"}},[t._v("Learn More")]):t._e(),this.$parent.lenfrench?a("button",{staticClass:"bgc-red",attrs:{"data-toggle":"modal","data-target":"#servicefour"}},[t._v("Savoir plus")]):t._e()])])])])},E=[],L={name:"OurServices"},A=L,T=(a("3c72"),Object(m["a"])(A,P,E,!1,null,"fa006358",null)),q=T.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container top-117",attrs:{id:"Portfolio"}},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"row display_flex_justify_center p-t-80"},[a("div",{staticClass:"text-center"},[this.$parent.leneng?a("h1",[t._v("Portfolio")]):t._e(),this.$parent.lenfrench?a("h1",[t._v("Prés Traveaux")]):t._e()])]),a("div",{staticClass:"row p-t-50"},[a("div",{staticClass:"col-md-6 pos-relative project-container"},[a("img",{staticClass:"col ",attrs:{src:"images/artdevportfolio/sahabmockup.png",alt:""}}),a("div",{staticClass:"img-overlay"},[this.$parent.leneng?a("button",{on:{click:function(e){return t.redirctto(0)}}},[t._v("View Project")]):t._e(),this.$parent.lenfrench?a("button",{on:{click:function(e){return t.redirctto(0)}}},[t._v("Voir le Projet")]):t._e()])]),a("div",{staticClass:"col-md-6 pos-relative project-container"},[a("img",{staticClass:"col ",attrs:{src:"images/artdevportfolio/sahabblogmockup.png",alt:""}}),a("div",{staticClass:"img-overlay"},[this.$parent.leneng?a("button",{on:{click:function(e){return t.redirctto(1)}}},[t._v("View Project")]):t._e(),this.$parent.lenfrench?a("button",{on:{click:function(e){return t.redirctto(1)}}},[t._v("Voir le Projet")]):t._e()])])]),a("div",{staticClass:"row display_flex_justify_center p-t-50"},[a("div",{staticClass:"col-md-6 pos-relative project-container"},[a("img",{staticClass:"col ",attrs:{src:"images/artdevportfolio/ishopmockup.png",alt:""}}),a("div",{staticClass:"img-overlay"},[this.$parent.leneng?a("button",{on:{click:function(e){return t.redirctto(2)}}},[t._v("View Project")]):t._e(),this.$parent.lenfrench?a("button",{on:{click:function(e){return t.redirctto(2)}}},[t._v("Voir le Projet")]):t._e()])])]),a("div",{staticClass:"row p-t-50"},[a("div",{staticClass:"col-md-6 pos-relative project-container"},[a("img",{staticClass:"col ",attrs:{src:"images/artdevportfolio/elmaalim.png",alt:""}}),a("div",{staticClass:"img-overlay"},[this.$parent.leneng?a("button",{on:{click:function(e){return t.redirctto(3)}}},[t._v("View Project")]):t._e(),this.$parent.lenfrench?a("button",{on:{click:function(e){return t.redirctto(3)}}},[t._v("Voir le Projet")]):t._e()])]),a("div",{staticClass:"col-md-6 pos-relative project-container"},[a("img",{staticClass:"col ",attrs:{src:"images/artdevportfolio/studyeverywhere.png",alt:""}}),a("div",{staticClass:"img-overlay"},[this.$parent.leneng?a("button",{on:{click:function(e){return t.redirctto(4)}}},[t._v("View Project")]):t._e(),this.$parent.lenfrench?a("button",{on:{click:function(e){return t.redirctto(4)}}},[t._v("Voir le Projet")]):t._e()])])])])])},z=[],F={name:"Portfolio",data:function(){return{links:["https://sahaaab.com","https://blog.sahaaab.com","http://abdoudesign.epizy.com","https://almaealim.com/","https://abdoutony.github.io/bootstrap_landing_page_educational_website/"]}},methods:{redirctto:function(t){window.open(this.links[t],"_blank")}}},H=F,D=(a("bc0d"),Object(m["a"])(H,M,z,!1,null,"8d5b8e1e",null)),V=D.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid top-117 footer-container",attrs:{id:"Contacts"}},[a("div",{staticClass:"container"},[a("hr",{staticClass:"bg-white"}),t._m(0),a("div",{staticClass:"row display_flex_justify_center p-t-50"},[this.$parent.leneng?a("p",[t._v("All right reserved by © ArtDev.2020")]):t._e(),this.$parent.lenfrench?a("p",[t._v("Tous droits reservés par © ArtDev.2020")]):t._e()])]),a("div",{staticClass:"modal fade",attrs:{id:"contactpreorder",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content bgc-red"},[a("div",{staticClass:"modal-header text-center"},[this.$parent.leneng?a("h4",{staticClass:"modal-title  text-center",attrs:{id:"contactpreorderLabel"}},[t._v("Contact or pre-order")]):t._e(),this.$parent.lenfrench?a("h4",{staticClass:"modal-title  text-center",attrs:{id:"contactpreorderLabel"}},[t._v("Contact ou pré-commande")]):t._e(),t._m(1)]),a("div",{staticClass:"modal-body"},[this.$parent.lenfrench?a("p",[t._v(" Si vous voulez en savoir plus sur nous, vous pouvez nous trouver dans nos medias sociaux ou contactez-nous simplement pour plus d'informations ou pour pre-commander un service. ")]):t._e(),this.$parent.leneng?a("p",[t._v(" If you want to know more about us, you can find us in our social media or just contact us for more information or to pre-order a service. ")]):t._e(),t._m(2),t._m(3),t._m(4)]),a("div",{staticClass:"modal-footer"},[this.$parent.leneng?a("button",{staticClass:"btn btn-dark",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]):t._e(),this.$parent.lenfrench?a("button",{staticClass:"btn btn-dark",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Fermer")]):t._e()])])])]),a("div",{staticClass:"modal fade",attrs:{id:"serviceone",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content bgc-red"},[a("div",{staticClass:"modal-header"},[this.$parent.leneng?a("h4",{staticClass:"modal-title",attrs:{id:"serviceoneLabel"}},[t._v("Graphic Design")]):t._e(),this.$parent.lenfrench?a("h4",{staticClass:"modal-title",attrs:{id:"serviceoneLabel"}},[t._v("Design Graphique")]):t._e(),t._m(5)]),a("div",{staticClass:"modal-body"},[this.$parent.lenfrench?a("p",[t._v(" La conception graphique, création graphique ou aussi graphique design consiste à concevoir, dans le cadre d'une communication visuelle, des supports de communication combinant images, textes ou des video à destination d'un affichage sur écran ou pour une impression pour savoire plus visitez notre page facebook. ")]):t._e(),this.$parent.leneng?a("p",[t._v(" Graphic design, graphic creation , in the context of visual communication, communication media combining images, texts or videos for display on screen or for printing for more information visit our facebook page. ")]):t._e()]),a("div",{staticClass:"modal-footer"},[this.$parent.leneng?a("button",{staticClass:"btn btn-dark",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]):t._e(),this.$parent.lenfrench?a("button",{staticClass:"btn btn-dark",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Fermer")]):t._e()])])])]),a("div",{staticClass:"modal fade",attrs:{id:"servicetwo",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content bgc-red"},[a("div",{staticClass:"modal-header"},[this.$parent.leneng?a("h4",{staticClass:"modal-title",attrs:{id:"servicetwoLabel"}},[t._v("Creation of websites, mobile & desktop application")]):t._e(),this.$parent.lenfrench?a("h4",{staticClass:"modal-title",attrs:{id:"servicetwoLabel"}},[t._v("Création des sitesweb , application mobile & desktop")]):t._e(),t._m(6)]),a("div",{staticClass:"modal-body"},[this.$parent.lenfrench?a("p",[t._v(" Un site web ou une application mobile vous permet d'être connecter sur internet et pour bien marquer sa présence et c'est un meilleur outil pour atteindre vos objectifs. Contrairement aux autres médias et vous pouvez également avoir une application desktop pour gerer vos taches internes pour savoire plus visitez notre page facebook. ")]):t._e(),this.$parent.leneng?a("p",[t._v(" A website or a mobile application allows you to clearly mark your presence and have traffic & audience and it's a better tool to achieve your goals. Unlike other media and you can also have a desktop application to manage your internal tasks for more visit our Facebook page. ")]):t._e()]),a("div",{staticClass:"modal-footer"},[this.$parent.leneng?a("button",{staticClass:"btn btn-dark",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]):t._e(),this.$parent.lenfrench?a("button",{staticClass:"btn btn-dark",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Fermer")]):t._e()])])])]),a("div",{staticClass:"modal fade",attrs:{id:"servicethree",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content bgc-red"},[a("div",{staticClass:"modal-header"},[this.$parent.lenfrench?a("h4",{staticClass:"modal-title",attrs:{id:"servicethreeLabel"}},[t._v("Administration Systèmes")]):t._e(),this.$parent.leneng?a("h4",{staticClass:"modal-title",attrs:{id:"servicethreeLabel"}},[t._v("Systems Administration")]):t._e(),t._m(7)]),a("div",{staticClass:"modal-body"},[this.$parent.lenfrench?a("p",[t._v(" Vous avez un problème d'installation d'un logiciel,système ou une gestion d'un grand site profiter de nos service comme gestion des system hébergement ou bien installation et configuration pour savoire plus visitez notre page facebook. ")]):t._e(),this.$parent.leneng?a("p",[t._v(" You have a problem installing a software, system or managing a large site take advantage of our services such as hosting system management or installation and configuration for more visit our facebook page. ")]):t._e()]),a("div",{staticClass:"modal-footer"},[this.$parent.leneng?a("button",{staticClass:"btn btn-dark",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]):t._e(),this.$parent.lenfrench?a("button",{staticClass:"btn btn-dark",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Fermer")]):t._e()])])])]),a("div",{staticClass:"modal fade",attrs:{id:"servicefour",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content bgc-red"},[a("div",{staticClass:"modal-header"},[this.$parent.leneng?a("h4",{staticClass:"modal-title",attrs:{id:"servicefourLabel"}},[t._v("Advertising And SEO")]):t._e(),this.$parent.lenfrench?a("h4",{staticClass:"modal-title",attrs:{id:"servicefourLabel"}},[t._v("Publicités Et Référencement")]):t._e(),t._m(8)]),a("div",{staticClass:"modal-body"},[this.$parent.lenfrench?a("p",[t._v(" Le référencement et la publicité ils ont pour objectif d’augmenter la visibilité de votre site sur les moteurs de recherche, toucher un plus grand nombre de visiteurs en utilisant des technique de référencement ou bien avec les réseaux sociaux qui on pour but de faire un marketing digital sur votre entreprise , mark ,produits ,services avec des stratégies de marketing pour savoire plus visitez notre page facebook. ")]):t._e(),this.$parent.leneng?a("p",[t._v(" SEO and advertising they aim to increase the visibility of your site on search engines, reach more visitors using technical SEO or with social networks which aim to do digital marketing on your business, mark, products, services with marketing strategies to know more visit our facebook page. ")]):t._e()]),a("div",{staticClass:"modal-footer"},[this.$parent.leneng?a("button",{staticClass:"btn btn-dark",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]):t._e(),this.$parent.lenfrench?a("button",{staticClass:"btn btn-dark",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Fermer")]):t._e()])])])])])},W=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row p-t-50"},[a("div",{staticClass:"col-md-3 logo-container"},[a("img",{attrs:{src:"/images/artdevlogofinalwhite.png",alt:"logo",width:"150"}})]),a("div",{staticClass:"col-md-3"},[a("div",[a("p",[a("i",{staticClass:"fa fa-phone-alt"}),t._v(" (+213)657373121 ")]),a("p",[a("i",{staticClass:"fa fa-phone-alt"}),t._v(" (+213)556076810 ")]),a("p",[a("i",{staticClass:"fa fa-phone-alt"}),t._v(" (+213)542354815 ")])])]),a("div",{staticClass:"col-md-3"},[a("p",[a("i",{staticClass:"fa fa-envelope"}),t._v(" contact.artdev@gmail.com ")])]),a("div",{staticClass:"col-md-3"},[a("span",{staticClass:"socialmedia"},[a("a",{attrs:{href:"https://facebook.com/Artdevofficial",target:"_blank"}},[a("i",{staticClass:"fab fa-facebook"})])]),a("span",{staticClass:"socialmedia"},[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-instagram"})])]),a("span",{staticClass:"socialmedia"},[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-twitter"})])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("span",{staticClass:"socialmedia"},[a("i",{staticClass:"fa fa-envelope"})]),a("span",[t._v("contact.artdev@gmail.com")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("span",{staticClass:"socialmedia"},[a("i",{staticClass:"fa fa-phone-alt"})]),a("span",[t._v("+213(657373121)")]),t._v(" / "),a("span",[t._v("+213(556076810)")]),t._v(" / "),a("span",[t._v("+213(542354815)")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("span",{staticClass:"socialmedia2"},[a("a",{attrs:{href:"https://facebook.com/Artdevofficial",target:"_blank"}},[a("i",{staticClass:"fab fa-facebook"})])]),a("span",{staticClass:"socialmedia2"},[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-instagram"})])]),a("span",{staticClass:"socialmedia2"},[a("a",{attrs:{href:"#"}},[a("i",{staticClass:"fab fa-twitter"})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],N={name:"Footer"},B=N,G=(a("f319"),Object(m["a"])(B,I,W,!1,null,"ba3859d4",null)),R=G.exports,J={name:"LandingPage",components:{NavBar:h,HeroSection:y,HowItWorks:O,OurServices:q,Portfolio:V,Footer:R},data:function(){return{leneng:!0,lenfrench:!1}}},U=J,Y=(a("9de8"),Object(m["a"])(U,r,o,!1,null,"16cb6194",null)),K=Y.exports,Q={name:"App",components:{LandingPage:K}},X=Q,Z=(a("034f"),Object(m["a"])(X,i,n,!1,null,null,null)),tt=Z.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(tt)}}).$mount("#app")},6542:function(t,e,a){"use strict";a("25d2")},7005:function(t,e,a){"use strict";a("dde2")},"85ec":function(t,e,a){},"9de8":function(t,e,a){"use strict";a("1cb1")},a9cb:function(t,e,a){},aec6:function(t,e,a){},bc0d:function(t,e,a){"use strict";a("fdf8")},dde2:function(t,e,a){},f319:function(t,e,a){"use strict";a("a9cb")},fdf8:function(t,e,a){}});
//# sourceMappingURL=app.deffbce6.js.map
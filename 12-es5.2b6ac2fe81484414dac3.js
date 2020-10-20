function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"2qjx":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("vobO"),a=n("AytR"),r=n("EM62"),o=n("sEIs"),s=n("yRDH");new i.c({"Content-Type":"application/json"});var c=function(){var t=function(){function t(e,n,i){_classCallCheck(this,t),this.http=e,this.route=n,this.http2=i}return _createClass(t,[{key:"searchProducts",value:function(t){return this.http.post("".concat(a.a.appUrl)+"/frontend/search-products",t)}},{key:"getLatestStories",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return this.http2.get("https://node-hnapi.herokuapp.com/news?page=".concat(t))}},{key:"getTopProductCategories",value:function(){return this.http.get("".concat(a.a.appUrl)+"/frontend/get-top-product-categories")}},{key:"getAllProductCategories",value:function(){return this.http.get("".concat(a.a.appUrl)+"/frontend/get-all-product-categories")}},{key:"getRemainingTopCategories",value:function(){return this.http.get("".concat(a.a.appUrl)+"/frontend/get-remaining-top-categories")}},{key:"getProductDetails",value:function(t){return this.http.get("".concat(a.a.appUrl)+"/frontend/get-product-details/"+t)}},{key:"getProductsByCategory",value:function(t){return this.http.get("".concat(a.a.appUrl)+"/frontend/get-products-by-category/"+t)}},{key:"getAllProducts",value:function(){return this.http.get("".concat(a.a.appUrl)+"/frontend/get-all-products")}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r.dc(i.a),r.dc(o.c),r.dc(s.a))},t.\u0275prov=r.Qb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},"2wRN":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("vobO"),a=n("AytR"),r=n("EM62"),o=n("sEIs");new i.c({"Content-Type":"application/json"});var s=function(){var t=function(){function t(e,n){_classCallCheck(this,t),this.http=e,this.route=n}return _createClass(t,[{key:"getShopByCategory",value:function(){return this.http.get("".concat(a.a.appUrl)+"/frontend/get-shop-by-category")}},{key:"getHierarchyCategories",value:function(){return this.http.get("".concat(a.a.appUrl)+"/frontend/get-hierarchy-categories")}},{key:"getProductCategory",value:function(t){return this.http.get("".concat(a.a.appUrl)+"/frontend/get-product-category/"+t)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r.dc(i.a),r.dc(o.c))},t.\u0275prov=r.Qb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},"7o2P":function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var i=n("vobO"),a=n("YtkY"),r=n("AytR"),o=n("EM62"),s=n("sEIs"),c={headers:new i.c({"Content-Type":"application/json"})},l=function(){var t=function(){function t(e,n){_classCallCheck(this,t),this.http=e,this.route=n}return _createClass(t,[{key:"getContactPageInfo",value:function(){return this.http.get(r.a.appUrl+"/frontend/get-contact-page-info",c).pipe(Object(a.a)((function(t){return t})))}},{key:"getPageDetails",value:function(t){return this.http.get("".concat(r.a.appUrl)+"/frontend/get-page-info/"+t)}},{key:"submitContact",value:function(t){return this.http.post(r.a.appUrl+"/frontend/submit-contact",t,c).pipe(Object(a.a)((function(t){return t})))}},{key:"submitSubscribe",value:function(t){return this.http.post(r.a.appUrl+"/frontend/submit-subscribe",t,c).pipe(Object(a.a)((function(t){return t})))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(o.dc(i.a),o.dc(s.c))},t.\u0275prov=o.Qb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},RN0A:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("vobO"),a=n("AytR"),r=n("EM62"),o=n("sEIs");new i.c({"Content-Type":"application/json"});var s=function(){var t=function(){function t(e,n){_classCallCheck(this,t),this.http=e,this.route=n}return _createClass(t,[{key:"getBlogsWithKeywords",value:function(t){return this.http.get("".concat(a.a.appUrl)+"/frontend/get-blogs-with-keywords/"+t)}},{key:"getBlogDetails",value:function(t){return this.http.get("".concat(a.a.appUrl)+"/frontend/get-blog-details/"+t)}},{key:"getRecentBlogs",value:function(t){return this.http.get("".concat(a.a.appUrl)+"/frontend/get-recent-blogs/"+t)}},{key:"getFrontSlider",value:function(){return this.http.get("".concat(a.a.appUrl)+"/frontend/get-front-slider")}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r.dc(i.a),r.dc(o.c))},t.\u0275prov=r.Qb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},gazJ:function(t,e,n){"use strict";n.r(e),n.d(e,"LayoutModule",(function(){return R}));var i=n("2kYt"),a=n("nIj0"),r=n("sEIs"),o=n("EM62"),s=n("AytR"),c=n("2wRN"),l=n("jI2V");function u(t,e){if(1&t&&(o.Zb(0,"div",75),o.Zb(1,"h4"),o.Lc(2),o.Zb(3,"a",76),o.Lc(4),o.Yb(),o.Yb(),o.Yb()),2&t){var n=e.$implicit;o.Ib(2),o.Nc("",n.title," "),o.Ib(1),o.sc("href",n.link,o.Fc),o.Ib(1),o.Mc(n.link_text)}}function b(t,e){if(1&t&&(o.Zb(0,"li"),o.Zb(1,"a",89),o.Lc(2),o.Yb(),o.Yb()),2&t){var n=e.$implicit;o.Ib(1),o.tc("routerLink","/products/view/",n.product.slug,""),o.Ib(1),o.Mc(n.product.name)}}var d=function(t){return{type:t}};function h(t,e){if(1&t&&(o.Zb(0,"li"),o.Zb(1,"a",77),o.Lc(2),o.Yb(),o.Zb(3,"div",80),o.Zb(4,"div",81),o.Zb(5,"ul",82),o.Zb(6,"li"),o.Zb(7,"div",4),o.Zb(8,"div",83),o.Zb(9,"ul",84),o.Jc(10,b,3,2,"li",53),o.Yb(),o.Yb(),o.Zb(11,"div",85),o.Zb(12,"div",86),o.Zb(13,"div",87),o.Vb(14,"img",88),o.Yb(),o.Zb(15,"a",77),o.Lc(16,"View Detail"),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Yb()),2&t){var n=e.$implicit,i=o.lc(2);o.Ib(1),o.rc("queryParams",o.vc(5,d,n.slug)),o.Ib(1),o.Mc(n.name),o.Ib(8),o.rc("ngForOf",n.products),o.Ib(4),o.sc("src",n.cat_image&&i.apiUrl+"/"+n.cat_image||i.defaultBuildTypeImage,o.Fc),o.Ib(1),o.rc("queryParams",o.vc(7,d,n.slug))}}function f(t,e){if(1&t&&(o.Zb(0,"li"),o.Zb(1,"a",77),o.Lc(2),o.Yb(),o.Zb(3,"div",56),o.Zb(4,"div",78),o.Zb(5,"ul",79),o.Jc(6,h,17,9,"li",53),o.Yb(),o.Yb(),o.Yb(),o.Yb()),2&t){var n=e.$implicit;o.Ib(1),o.rc("queryParams",o.vc(3,d,n.slug)),o.Ib(1),o.Mc(n.name),o.Ib(4),o.rc("ngForOf",n.sub_category)}}var p,g=((p=function(){function t(e,n,i,a){_classCallCheck(this,t),this._router=e,this._productCategories=n,this.formBuilder=i,this._setting=a,this.hierarchyCategories=[],this.headerSlider=[],this.apiUrl=s.a.apiUrl,this.defaultImage="assets/images/cat-icon-1.png",this.defaultBuildTypeImage="assets/images/fancy-large-1.jpg"}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;console.log("HeaderComponentHeaderComponentHeaderComponent"),$(window).scrollTop()>=500?$(".header-main-wrap").addClass("sticky"):$(".header-main-wrap").removeClass("sticky"),$(".toogle-btn").click((function(){$("body").toggleClass("nav-open"),$("body").find(".show").removeClass("show")})),$(".overlay").click((function(){$("body").toggleClass("nav-open")})),$(".menu-main-ul li:has(.mega-menu-main-dropdown)").addClass("mega-menu-li"),$(".menu-main-ul li:has(.mega-menu-main-dropdown)").append("<small class='fa fa-angle-down'></small>"),$(".mega-menu-li small").on("click",(function(){$(this).prev(".mega-menu-main-dropdown").slideToggle(),$(this).toggleClass("fa-angle-up"),$(this).parents(".mega-menu-li").siblings().children("small").removeClass("fa-angle-up"),$(this).parents(".mega-menu-li").siblings().children(".mega-menu-main-dropdown").slideUp()})),$(".mega-menu-main li:has(.mega-menu-sub-dropdown)").addClass("mega-menu-li-sub"),$(".mega-menu-main li:has(.mega-menu-sub-dropdown)").append("<small class='fa fa-angle-down'></small>"),$(".mega-menu-li-sub small").on("click",(function(){$(this).prev(".mega-menu-sub-dropdown").slideToggle(),$(this).toggleClass("fa-angle-up"),$(this).parents(".mega-menu-li-sub").siblings().children("small").removeClass("fa-angle-up"),$(this).parents(".mega-menu-li-sub").siblings().children(".mega-menu-sub-dropdown").slideUp()})),$(".faq-tab-content .card .card-header .btn").on("click",(function(){$(this).parents(".card").addClass("active-card"),$(this).parents(".card").siblings(".card").removeClass("active-card")})),$(".menu-main-ul > li").hover((function(){$(this).parents(".menu-main-ul").addClass("mega-menu-li-hover")}),(function(){$(this).parents(".menu-main-ul").removeClass("mega-menu-li-hover")})),$(".menu-main-ul > li").hover((function(){$(this).addClass("li-hover")}),(function(){$(this).removeClass("li-hover")})),$(".mega-menu-main > li").hover((function(){$(this).addClass("li-sub-hover")}),(function(){$(this).removeClass("li-sub-hover")})),this.searchProductsForm=this.formBuilder.group({search:["",[a.p.required]]}),this._productCategories.getHierarchyCategories().subscribe((function(e){console.log("getHierarchyCategories===",e.data),t.hierarchyCategories=e.data}),(function(t){console.log(t)})),this._setting.getHeaderSlider().subscribe((function(e){t.headerSlider=e.data,setTimeout((function(){$(".top-info-slider .owl-carousel").owlCarousel({loop:!0,items:1,margin:10,autoplay:!0,autoplayTimeout:4e3,nav:!0,dots:!1,navText:["<i class='far fa-angle-left'></i>","<i class='far fa-angle-right'></i>"]})}),0)}),(function(t){console.log(t)}))}},{key:"onSearchProductSubmit",value:function(){this.searchProductsForm.value.search&&this._router.navigate(["products"],{queryParams:{search:this.searchProductsForm.value.search}})}}]),t}()).\u0275fac=function(t){return new(t||p)(o.Ub(r.c),o.Ub(c.a),o.Ub(a.c),o.Ub(l.a))},p.\u0275cmp=o.Ob({type:p,selectors:[["app-header"]],decls:114,vars:3,consts:[[1,"header-main-wrap"],[1,"head-inr-row-1"],[1,"top-info-slider","text-center"],[1,"container-fluid"],[1,"row"],[1,"col-12"],[1,"owl-carousel","owl-theme"],["class","item",4,"ngFor","ngForOf"],[1,"top-grey-info"],[1,"list-unstyled","d-flex","flex-wrap","justify-content-center","align-items-center","info-list"],["routerLink","/contact-us","routerLinkActive","active"],["routerLink","/locations","routerLinkActive","active"],["src","assets/images/usa-flag.png","accesskey","usa-flag"],[1,"head-inr-row-2"],[1,"logo-sec-wrap"],[1,"container"],[1,"logo-sec-row","d-flex","align-items-center","justify-content-between"],[1,"logo"],["routerLink","/"],["src","assets/images/keen-logo.svg","alt","keen-logo"],[1,"toogle-btn"],[1,"bar","bar-1"],[1,"bar","bar-2"],[1,"bar","bar-3"],[1,"center-btns","mr-3","ml-3","d-flex","align-items-center"],["routerLink","/digital-magzine","routerLinkActive","active",1,"digital-brochures","btn"],[1,"icon"],["xmlns","http://www.w3.org/2000/svg","width","29.997","height","44","viewBox","0 0 29.997 44"],["id","catalog","transform","translate(-70.335)"],["id","Path_1519","data-name","Path 1519","d","M99.608,4.02l-14-3.982-.017,0a.989.989,0,0,0-.1-.021l-.033,0A1.02,1.02,0,0,0,85.336,0h0a.99.99,0,0,0-.125.009l-.03,0a.987.987,0,0,0-.1.022l-.013,0-.022.006h0L71.058,4.02a1,1,0,0,0-.723.958V43a1,1,0,0,0,1.268.957l13.731-3.9,13.73,3.9A1,1,0,0,0,100.332,43V4.977A1,1,0,0,0,99.608,4.02ZM72.326,5.729,84.338,2.314V38.271L72.326,41.686ZM98.341,41.686,86.329,38.27V2.313L98.341,5.729V41.686Z","fill","#707070"],["id","Path_1520","data-name","Path 1520","d","M251.723,63.327l6.039,1.717a1,1,0,0,0,.545-1.915l-6.039-1.717a1,1,0,1,0-.545,1.915Z","transform","translate(-162.68 -55.264)","fill","#707070"],["id","Path_1521","data-name","Path 1521","d","M251.723,113.326l6.039,1.717a1,1,0,1,0,.545-1.915l-6.039-1.717a1,1,0,1,0-.545,1.915Z","transform","translate(-162.68 -100.286)","fill","#707070"],["id","Path_1522","data-name","Path 1522","d","M251.723,163.326l6.039,1.717a1,1,0,0,0,.545-1.915l-6.039-1.717a1,1,0,1,0-.545,1.915Z","transform","translate(-162.68 -145.309)","fill","#707070"],["id","Path_1523","data-name","Path 1523","d","M251.725,226.468l6.039,1.717a1,1,0,0,0,1.268-.958v-13.14a1,1,0,0,0-.723-.958l-6.039-1.717a1,1,0,0,0-1.268.957v13.14A1,1,0,0,0,251.725,226.468Zm1.268-12.78,4.048,1.151v11.07l-4.048-1.151Z","transform","translate(-162.682 -190.333)","fill","#707070"],["id","Path_1524","data-name","Path 1524","d","M117.094,343.41l-6.039,1.717a1,1,0,1,0,.545,1.915l6.039-1.717a1,1,0,1,0-.545-1.915Z","transform","translate(-36.014 -309.19)","fill","#707070"],["id","Path_1525","data-name","Path 1525","d","M111.325,65.081a1,1,0,0,0,.273-.038l6.039-1.717a1,1,0,0,0-.545-1.915l-6.039,1.717a1,1,0,0,0,.272,1.953Z","transform","translate(-36.014 -55.263)","fill","#707070"],["id","Path_1526","data-name","Path 1526","d","M117.094,111.41l-6.039,1.717a1,1,0,1,0,.545,1.915l6.039-1.717a1,1,0,1,0-.545-1.915Z","transform","translate(-36.014 -100.285)","fill","#707070"],["href","http://keensbuildings.lexiconx.host/configurator/","target","_blank",1,"design-way","btn"],["src","assets/images/design-way.svg","alt",""],[1,"search-wrap"],["data-toggle","collapse","data-target","#search-head",1,"btn-search"],[1,"fal","fa-search"],["id","search-head",1,"search-inr"],[3,"formGroup","ngSubmit"],[1,"input-group"],["type","text","placeholder","What can we help you find today?","formControlName","search",1,"form-control"],[1,"input-group-append"],["type","submit",1,"btn"],[1,"main-nav-bar-wrap"],[1,"col-12","position-static"],[1,"main-nav-bar-inr","d-flex","justify-content-between"],[1,"main-nav-bar-left"],[1,"list-unstyled","d-flex","align-items-center","menu-main-ul"],[4,"ngFor","ngForOf"],[1,"dropdown-nav"],["routerLink","/about-us"],[1,"mega-menu-main-dropdown"],["routerLink","/blogs"],["routerLink","/faq"],["routerLink","/contact-us"],["href","javascript:void(0)"],["routerLink","/keens-buildings-application"],["routerLink","/rent-to-own-no-credit-check"],[1,"main-nav-bar-right","d-flex"],[1,"list-unstyled","d-flex","align-items-center","social-nav"],["href","https://www.facebook.com/keensbuildings","target","_blank"],[1,"fab","fa-facebook-f"],["href","https://twitter.com/keensbuildings","target","_blank"],[1,"fab","fa-twitter"],["href","https://www.youtube.com/user/KeensBuildings","target","_blank"],[1,"fab","fa-youtube"],["href","https://www.instagram.com/keensbuildings/","target","_blank"],[1,"fab","fa-instagram"],[1,"offer-info"],["routerLink","/products",1,"btn","btn-sale"],[1,"item"],["target","_blank",3,"href"],["routerLink","/products",3,"queryParams"],[1,"mega-menu-main-dropdown-inr"],[1,"mega-menu-main","list-unstyled"],[1,"mega-menu-sub-dropdown"],[1,"mega-menu-sub-dropdown-inr"],[1,"mega-menu-sub","list-unstyled"],[1,"col-md-9"],[1,"mega-menu-sub-list","list-unstyled"],[1,"col-md-3"],[1,"view-detail-bx"],[1,"vd-img"],[3,"src"],[3,"routerLink"]],template:function(t,e){1&t&&(o.Zb(0,"header",0),o.Zb(1,"div",1),o.Zb(2,"div",2),o.Zb(3,"div",3),o.Zb(4,"div",4),o.Zb(5,"div",5),o.Zb(6,"div",6),o.Jc(7,u,5,3,"div",7),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Zb(8,"div",8),o.Zb(9,"div",3),o.Zb(10,"div",4),o.Zb(11,"div",5),o.Zb(12,"ul",9),o.Zb(13,"li"),o.Zb(14,"a",10),o.Lc(15,"Contact Us"),o.Yb(),o.Yb(),o.Zb(16,"li"),o.Zb(17,"a",11),o.Lc(18,"Nearest Location"),o.Yb(),o.Yb(),o.Zb(19,"li"),o.Lc(20,"Established in 1999 to serve our communities"),o.Yb(),o.Zb(21,"li"),o.Lc(22,"Free Setup and Free Delivery"),o.Yb(),o.Zb(23,"li"),o.Vb(24,"img",12),o.Lc(25," Proudly Made in the USA"),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Zb(26,"div",13),o.Zb(27,"div",14),o.Zb(28,"div",15),o.Zb(29,"div",4),o.Zb(30,"div",5),o.Zb(31,"div",16),o.Zb(32,"div",17),o.Zb(33,"a",18),o.Vb(34,"img",19),o.Yb(),o.Yb(),o.Zb(35,"div",20),o.Vb(36,"span",21),o.Vb(37,"span",22),o.Vb(38,"span",23),o.Yb(),o.Zb(39,"div",24),o.Zb(40,"a",25),o.Zb(41,"span",26),o.kc(),o.Zb(42,"svg",27),o.Zb(43,"g",28),o.Vb(44,"path",29),o.Vb(45,"path",30),o.Vb(46,"path",31),o.Vb(47,"path",32),o.Vb(48,"path",33),o.Vb(49,"path",34),o.Vb(50,"path",35),o.Vb(51,"path",36),o.Yb(),o.Yb(),o.Yb(),o.Lc(52," View Our Digital Brochures "),o.Yb(),o.jc(),o.Zb(53,"a",37),o.Vb(54,"img",38),o.Lc(55," Design Your Way"),o.Yb(),o.Yb(),o.Zb(56,"div",39),o.Zb(57,"button",40),o.Vb(58,"i",41),o.Yb(),o.Zb(59,"div",42),o.Zb(60,"form",43),o.hc("ngSubmit",(function(){return e.onSearchProductSubmit()})),o.Zb(61,"div",44),o.Vb(62,"input",45),o.Zb(63,"div",46),o.Zb(64,"button",47),o.Vb(65,"i",41),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Zb(66,"div",48),o.Zb(67,"div",3),o.Zb(68,"div",4),o.Zb(69,"div",49),o.Zb(70,"div",50),o.Zb(71,"div",51),o.Zb(72,"ul",52),o.Jc(73,f,7,5,"li",53),o.Zb(74,"li",54),o.Zb(75,"a",55),o.Lc(76,"About Us"),o.Yb(),o.Zb(77,"ul",56),o.Zb(78,"li"),o.Zb(79,"a",57),o.Lc(80,"Blogs"),o.Yb(),o.Yb(),o.Zb(81,"li"),o.Zb(82,"a",58),o.Lc(83,"FAQ\u2019s"),o.Yb(),o.Yb(),o.Zb(84,"li"),o.Zb(85,"a",59),o.Lc(86,"Contact Us"),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Zb(87,"li",54),o.Zb(88,"a",60),o.Lc(89,"Apply Now"),o.Yb(),o.Zb(90,"ul",56),o.Zb(91,"li"),o.Zb(92,"a",61),o.Lc(93,"Financing Application"),o.Yb(),o.Yb(),o.Zb(94,"li"),o.Zb(95,"a",62),o.Lc(96,"RTO Application"),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Zb(97,"div",63),o.Zb(98,"ul",64),o.Zb(99,"li"),o.Zb(100,"a",65),o.Vb(101,"i",66),o.Yb(),o.Yb(),o.Zb(102,"li"),o.Zb(103,"a",67),o.Vb(104,"i",68),o.Yb(),o.Yb(),o.Zb(105,"li"),o.Zb(106,"a",69),o.Vb(107,"i",70),o.Yb(),o.Yb(),o.Zb(108,"li"),o.Zb(109,"a",71),o.Vb(110,"i",72),o.Yb(),o.Yb(),o.Yb(),o.Zb(111,"div",73),o.Zb(112,"a",74),o.Lc(113,"Sale"),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Yb()),2&t&&(o.Ib(7),o.rc("ngForOf",e.headerSlider),o.Ib(53),o.rc("formGroup",e.searchProductsForm),o.Ib(13),o.rc("ngForOf",e.hierarchyCategories))},directives:[i.l,r.e,r.d,a.r,a.j,a.e,a.b,a.i,a.d],styles:["a.active[_ngcontent-%COMP%]{color:#e15c15!important}.vd-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}"]}),p),m=n("2qjx"),v=n("RN0A"),Z=n("7o2P");function Y(t,e){if(1&t&&(o.Zb(0,"div"),o.Lc(1),o.Yb()),2&t){var n=o.lc();o.Ib(1),o.Nc(" ",n.errorMessage," ")}}function y(t,e){1&t&&(o.Zb(0,"span"),o.Lc(1,"Subscribed"),o.Yb())}function k(t,e){1&t&&(o.Zb(0,"span"),o.Lc(1,"Subscribe"),o.Yb())}function w(t,e){if(1&t&&(o.Zb(0,"button",44),o.Jc(1,y,2,0,"span",4),o.Jc(2,k,2,0,"span",4),o.Yb()),2&t){var n=o.lc();o.rc("disabled",!n.subscribeForm.valid),o.Ib(1),o.rc("ngIf",n.successMessage),o.Ib(1),o.rc("ngIf",!n.successMessage)}}function C(t,e){1&t&&(o.Zb(0,"button",45),o.Lc(1," Sending... "),o.Yb()),2&t&&o.rc("disabled",!0)}function L(t,e){1&t&&(o.Zb(0,"div"),o.Lc(1,"Email is required"),o.Yb())}function P(t,e){1&t&&(o.Zb(0,"div"),o.Lc(1," Email must be a valid email address "),o.Yb())}function I(t,e){if(1&t&&(o.Zb(0,"div",46),o.Jc(1,L,2,0,"div",4),o.Jc(2,P,2,0,"div",4),o.Yb()),2&t){var n=o.lc();o.Ib(1),o.rc("ngIf",n.f.email.errors.required),o.Ib(1),o.rc("ngIf",n.f.email.errors.email)}}function _(t,e){if(1&t&&(o.Zb(0,"li"),o.Zb(1,"a",47),o.Lc(2),o.Yb(),o.Yb()),2&t){var n=e.$implicit;o.Ib(1),o.tc("routerLink","/blogs/view/",n.slug,""),o.Ib(1),o.Mc(n.title.substring(0,70))}}var M,U,A,V,x=function(t){return{"is-invalid":t}},S=((M=function(){function t(e,n,i,a,r){_classCallCheck(this,t),this._products=e,this._blogs=n,this._setting=i,this.formBuilder=a,this._common=r,this.submitted=!1,this.topProductCategories=[],this.recentBlogsData=[],this.websiteSetting={}}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.subscribeForm=this.formBuilder.group({email:["",[a.p.required,a.p.email]],utf8:["\u2713"]}),this._products.getRemainingTopCategories().subscribe((function(e){e.data&&(t.topProductCategories=e.data)}),(function(t){console.log(t)})),this._setting.getWebsiteSetting().subscribe((function(e){e.data&&(t.websiteSetting=e.data)}),(function(t){console.log(t)})),this._blogs.getRecentBlogs(5).subscribe((function(e){t.recentBlogsData=e.data}),(function(t){console.log(t)}))}},{key:"onSubmit",value:function(){var t=this;this.submitted=!0,this.subscribeForm.invalid||this._common.submitSubscribe(this.subscribeForm.value).subscribe((function(e){return 0==e.status?(t.errorMessage=e.message,t.submitted=!1,!1):(t.successMessage=e.message,t.onReset(),t.submitted=!1,!1)}),(function(t){console.log("response========",t)}))}},{key:"onReset",value:function(){this.subscribeForm.reset()}},{key:"f",get:function(){return this.subscribeForm.controls}}]),t}()).\u0275fac=function(t){return new(t||M)(o.Ub(m.a),o.Ub(v.a),o.Ub(l.a),o.Ub(a.c),o.Ub(Z.a))},M.\u0275cmp=o.Ob({type:M,selectors:[["app-footer"]],decls:93,vars:10,consts:[[1,"subscribe-wrap","sec-ptb",2,"background-image","url(assets/images/subscribe-bg.jpg)"],[1,"container"],[1,"row"],[1,"col-12"],[4,"ngIf"],[1,"subscribe-form"],[3,"formGroup","ngSubmit"],["formControlName","utf8","type","hidden"],[1,"input-group"],["type","text","formControlName","email","placeholder","Enter your email address",1,"form-control",3,"ngClass"],[1,"input-group-append"],["class","btn","type","submit",3,"disabled",4,"ngIf"],["class","btn","type","button",3,"disabled",4,"ngIf"],["class","invalid-feedback",4,"ngIf"],[1,"connect-with-us","sec-ptb",2,"background-image","url(assets/images/connect-us-bg.jpg)"],[1,"sec-heading"],[1,"connect-with-bx","connect-with-bx-1","col-xl-4","col-md-12","col-12"],[1,"text-uppercase"],[1,"list-unstyled","d-flex","align-items-center","social-nav"],["href","https://www.facebook.com/keensbuildings","target","_blank"],[1,"fab","fa-facebook-f"],["href","https://twitter.com/keensbuildings","target","_blank"],[1,"fab","fa-twitter"],["href","https://www.youtube.com/user/KeensBuildings","target","_blank"],[1,"fab","fa-youtube"],["href","https://www.instagram.com/keensbuildings/","target","_blank"],[1,"fab","fa-instagram"],[1,"connect-with-bx","connect-with-bx-3","col-xl-2","col-md-3","col-6"],[1,"list-unstyled","connect-bx-list"],["routerLink","/faq","routerLinkActive","active"],["routerLink","/carport-glossary","routerLinkActive","active"],["routerLink","/install-guide","routerLinkActive","active"],["routerLink","/blogs","routerLinkActive","active"],["routerLink","/testimonials","routerLinkActive","active"],["routerLink","/privacy-policy","routerLinkActive","active"],[1,"connect-with-bx","connect-with-bx-4","col-xl-2","col-md-3","col-6"],["routerLink","/"],["routerLink","/contact-us","routerLinkActive","active"],["routerLink","/about-us","routerLinkActive","active"],["routerLink","/keens-buildings-application","routerLinkActive","active"],["routerLink","/reviews","routerLinkActive","active"],["href","http://keensbuildings.lexiconx.host/sitemap.xml","target","_blank","routerLinkActive","active"],[1,"connect-with-bx","connect-with-bx-5","col-xl-4","col-md-3","col-6"],[4,"ngFor","ngForOf"],["type","submit",1,"btn",3,"disabled"],["type","button",1,"btn",3,"disabled"],[1,"invalid-feedback"],[3,"routerLink"]],template:function(t,e){1&t&&(o.Zb(0,"div",0),o.Zb(1,"div",1),o.Zb(2,"div",2),o.Zb(3,"div",3),o.Zb(4,"h1"),o.Lc(5,"Subscribe our Newsletter"),o.Yb(),o.Zb(6,"p"),o.Lc(7,"Become a Keen's Building Insider. Subscribe to our newsletter."),o.Yb(),o.Jc(8,Y,2,1,"div",4),o.Zb(9,"div",5),o.Zb(10,"form",6),o.hc("ngSubmit",(function(){return e.onSubmit()})),o.Vb(11,"input",7),o.Zb(12,"div",8),o.Vb(13,"input",9),o.Zb(14,"div",10),o.Jc(15,w,3,3,"button",11),o.Jc(16,C,2,1,"button",12),o.Yb(),o.Jc(17,I,3,2,"div",13),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Zb(18,"div",14),o.Zb(19,"div",1),o.Zb(20,"div",2),o.Zb(21,"div",3),o.Zb(22,"div",15),o.Zb(23,"h2"),o.Lc(24,"Connect with us"),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Zb(25,"div",2),o.Zb(26,"div",16),o.Zb(27,"h4",17),o.Lc(28,"About Keen's Building"),o.Yb(),o.Zb(29,"p"),o.Lc(30),o.Yb(),o.Zb(31,"ul",18),o.Zb(32,"li"),o.Zb(33,"a",19),o.Vb(34,"i",20),o.Yb(),o.Yb(),o.Zb(35,"li"),o.Zb(36,"a",21),o.Vb(37,"i",22),o.Yb(),o.Yb(),o.Zb(38,"li"),o.Zb(39,"a",23),o.Vb(40,"i",24),o.Yb(),o.Yb(),o.Zb(41,"li"),o.Zb(42,"a",25),o.Vb(43,"i",26),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Zb(44,"div",27),o.Zb(45,"h4",17),o.Lc(46,"Quick Links"),o.Yb(),o.Zb(47,"ul",28),o.Zb(48,"li"),o.Zb(49,"a",29),o.Lc(50,"FAQ\u2019s"),o.Yb(),o.Yb(),o.Zb(51,"li"),o.Zb(52,"a",30),o.Lc(53,"Carport Glossary"),o.Yb(),o.Yb(),o.Zb(54,"li"),o.Zb(55,"a",31),o.Lc(56,"Installation Guide"),o.Yb(),o.Yb(),o.Zb(57,"li"),o.Zb(58,"a",32),o.Lc(59,"Blog"),o.Yb(),o.Yb(),o.Zb(60,"li"),o.Zb(61,"a",33),o.Lc(62,"Testimonials"),o.Yb(),o.Yb(),o.Zb(63,"li"),o.Zb(64,"a",34),o.Lc(65,"Privacy Policy"),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Zb(66,"div",35),o.Zb(67,"h4",17),o.Lc(68,"About"),o.Yb(),o.Zb(69,"ul",28),o.Zb(70,"li"),o.Zb(71,"a",36),o.Lc(72,"Home"),o.Yb(),o.Yb(),o.Zb(73,"li"),o.Zb(74,"a",37),o.Lc(75,"Contact Us"),o.Yb(),o.Yb(),o.Zb(76,"li"),o.Zb(77,"a",38),o.Lc(78,"About Us"),o.Yb(),o.Yb(),o.Zb(79,"li"),o.Zb(80,"a",39),o.Lc(81,"Apply Now"),o.Yb(),o.Yb(),o.Zb(82,"li"),o.Zb(83,"a",40),o.Lc(84,"Rating and Review"),o.Yb(),o.Yb(),o.Zb(85,"li"),o.Zb(86,"a",41),o.Lc(87,"Site Map"),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Zb(88,"div",42),o.Zb(89,"h4",17),o.Lc(90,"recent post"),o.Yb(),o.Zb(91,"ul",28),o.Jc(92,_,3,2,"li",43),o.Yb(),o.Yb(),o.Yb(),o.Yb(),o.Yb()),2&t&&(o.Ib(8),o.rc("ngIf",e.errorMessage),o.Ib(2),o.rc("formGroup",e.subscribeForm),o.Ib(3),o.rc("ngClass",o.vc(8,x,e.submitted&&e.f.email.errors)),o.Ib(2),o.rc("ngIf",!e.submitted),o.Ib(1),o.rc("ngIf",e.submitted),o.Ib(1),o.rc("ngIf",e.submitted&&e.f.email.errors),o.Ib(13),o.Mc(e.websiteSetting.aboutus),o.Ib(62),o.rc("ngForOf",e.recentBlogsData))},directives:[i.m,a.r,a.j,a.e,a.b,a.i,a.d,i.k,r.e,r.d,i.l],styles:[""]}),M),F=[{path:"",component:(U=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}(),U.\u0275fac=function(t){return new(t||U)},U.\u0275cmp=o.Ob({type:U,selectors:[["app-layout"]],decls:3,vars:0,template:function(t,e){1&t&&(o.Vb(0,"app-header"),o.Vb(1,"router-outlet"),o.Vb(2,"app-footer"))},directives:[g,r.g,S],styles:[""]}),U),children:[{path:"",loadChildren:function(){return Promise.all([n.e(0),n.e(1),n.e(5),n.e(25)]).then(n.bind(null,"i16t")).then((function(t){return t.HomeModule}))}},{path:"contact-us",loadChildren:function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"5qHY")).then((function(t){return t.ContactUsModule}))}},{path:"apply-now",loadChildren:function(){return Promise.all([n.e(0),n.e(1),n.e(6),n.e(23)]).then(n.bind(null,"mQKl")).then((function(t){return t.ApplyNowModule}))}},{path:"keens-buildings-application",loadChildren:function(){return Promise.all([n.e(0),n.e(1),n.e(6),n.e(26)]).then(n.bind(null,"8Iy/")).then((function(t){return t.KeensBuildingsApplicationModule}))}},{path:"rent-to-own-no-credit-check",loadChildren:function(){return Promise.all([n.e(0),n.e(1),n.e(6),n.e(27)]).then(n.bind(null,"mvUa")).then((function(t){return t.RentToOwnNoCreditCheckModule}))}},{path:"carport-glossary",loadChildren:function(){return Promise.all([n.e(0),n.e(14)]).then(n.bind(null,"VRYl")).then((function(t){return t.CarportGlossaryModule}))}},{path:"digital-magzine",loadChildren:function(){return Promise.all([n.e(0),n.e(15)]).then(n.bind(null,"tLs5")).then((function(t){return t.DigitalMagzineModule}))}},{path:"faq",loadChildren:function(){return Promise.all([n.e(0),n.e(1),n.e(5),n.e(21)]).then(n.bind(null,"rer5")).then((function(t){return t.FaqModule}))}},{path:"install-guide",loadChildren:function(){return Promise.all([n.e(0),n.e(16)]).then(n.bind(null,"bdSp")).then((function(t){return t.InstallGuideModule}))}},{path:"privacy-policy",loadChildren:function(){return Promise.all([n.e(0),n.e(18)]).then(n.bind(null,"zGRU")).then((function(t){return t.PrivacyPolicyModule}))}},{path:"locations",loadChildren:function(){return Promise.all([n.e(0),n.e(17)]).then(n.bind(null,"IzNJ")).then((function(t){return t.LocationsModule}))}},{path:"racing",loadChildren:function(){return Promise.all([n.e(0),n.e(19)]).then(n.bind(null,"xiS+")).then((function(t){return t.RacingModule}))}},{path:"about-us",loadChildren:function(){return Promise.all([n.e(0),n.e(2),n.e(13)]).then(n.bind(null,"yGcP")).then((function(t){return t.AboutUsModule}))}},{path:"blogs",loadChildren:function(){return Promise.all([n.e(0),n.e(4),n.e(24)]).then(n.bind(null,"sRVb")).then((function(t){return t.BlogsModule}))}},{path:"products",loadChildren:function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(5),n.e(2),n.e(20)]).then(n.bind(null,"cpu/")).then((function(t){return t.ProductsModule}))}},{path:"testimonials",loadChildren:function(){return Promise.all([n.e(0),n.e(4),n.e(2),n.e(22)]).then(n.bind(null,"8aEa")).then((function(t){return t.TestimonialsModule}))}},{path:"reviews",loadChildren:function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(5),n.e(2),n.e(28)]).then(n.bind(null,"+fNE")).then((function(t){return t.ReviewsModule}))}}]}],O=((V=function t(){_classCallCheck(this,t)}).\u0275mod=o.Sb({type:V}),V.\u0275inj=o.Rb({factory:function(t){return new(t||V)},imports:[[r.f.forChild(F)],r.f]}),V),R=((A=function t(){_classCallCheck(this,t),console.log("LayoutModule")}).\u0275mod=o.Sb({type:A}),A.\u0275inj=o.Rb({factory:function(t){return new(t||A)},imports:[[i.c,O,a.n,a.f]]}),A)},jI2V:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("vobO"),a=n("AytR"),r=n("EM62"),o=n("sEIs");new i.c({"Content-Type":"application/json"});var s=function(){var t=function(){function t(e,n){_classCallCheck(this,t),this.http=e,this.route=n}return _createClass(t,[{key:"getPageInfoService",value:function(t){return this.http.get("".concat(a.a.appUrl)+"/frontend/get-page-info/"+t)}},{key:"getMeetOurTeam",value:function(){return this.http.get("".concat(a.a.appUrl)+"/frontend/get-meet-our-team")}},{key:"getWebsiteSetting",value:function(){return this.http.get("".concat(a.a.appUrl)+"/frontend/get-website-settings")}},{key:"getHeaderSlider",value:function(){return this.http.get("".concat(a.a.appUrl)+"/frontend/get-header-slider")}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r.dc(i.a),r.dc(o.c))},t.\u0275prov=r.Qb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"+fNE":function(t,i,e){"use strict";e.r(i),e.d(i,"ReviewsModule",(function(){return j}));var r=e("2kYt"),n=e("nIj0"),o=e("PCNd"),s=e("3IVO"),c=e("sEIs"),a=e("AytR"),b=e("EM62"),l=e("gS7V"),d=e("MMGj"),u=e("2qjx"),g=e("qgv0"),m=e("Jeh/"),v=e("o44d"),f=e("HvPk");const p=function(t){return{selected:t}};function h(t,i){if(1&t&&(b.Zb(0,"ul",37),b.Zb(1,"li",38),b.Vb(2,"i",39),b.Yb(),b.Yb()),2&t){const t=i.$implicit,e=b.lc().$implicit;b.Ib(1),b.rc("ngClass",b.vc(1,p,t<=e.rating))}}function Y(t,i){if(1&t&&(b.Zb(0,"strong"),b.Lc(1),b.Yb()),2&t){const t=b.lc().$implicit;b.Ib(1),b.Mc(t.name)}}function Z(t,i){if(1&t&&(b.Zb(0,"p"),b.Lc(1),b.Yb()),2&t){const t=b.lc().$implicit;b.Ib(1),b.Mc(t.comment)}}function w(t,i){if(1&t&&(b.Zb(0,"div",27),b.Zb(1,"div",28),b.Zb(2,"div",29),b.Jc(3,h,3,3,"ul",30),b.Yb(),b.Zb(4,"div",31),b.Zb(5,"div",32),b.Vb(6,"img",33),b.Yb(),b.Zb(7,"div",34),b.Jc(8,Y,2,1,"strong",35),b.Zb(9,"div",36),b.Lc(10,"26.03.2019"),b.Yb(),b.Yb(),b.Yb(),b.Jc(11,Z,2,1,"p",35),b.Yb(),b.Yb()),2&t){const t=i.$implicit,e=b.lc();b.Ib(3),b.rc("ngForOf",e.stars),b.Ib(5),b.rc("ngIf",t.name),b.Ib(3),b.rc("ngIf",t.comment)}}function I(t,i){1&t&&(b.Zb(0,"div",40),b.Zb(1,"div",41),b.Vb(2,"img",42),b.Yb(),b.Zb(3,"div",43),b.Zb(4,"div",44),b.Lc(5,"L"),b.Yb(),b.Zb(6,"div",44),b.Lc(7,"o"),b.Yb(),b.Zb(8,"div",44),b.Lc(9,"a"),b.Yb(),b.Zb(10,"div",44),b.Lc(11,"d"),b.Yb(),b.Zb(12,"div",44),b.Lc(13,"i"),b.Yb(),b.Zb(14,"div",44),b.Lc(15,"n"),b.Yb(),b.Zb(16,"div",44),b.Lc(17,"g"),b.Yb(),b.Zb(18,"div",44),b.Lc(19,"."),b.Yb(),b.Zb(20,"div",44),b.Lc(21,"."),b.Yb(),b.Zb(22,"div",44),b.Lc(23,"."),b.Yb(),b.Yb(),b.Yb())}function L(t,i){1&t&&(b.Zb(0,"div",8),b.Zb(1,"div",9),b.Zb(2,"div",45),b.Zb(3,"h5"),b.Lc(4,"Reviews not found."),b.Yb(),b.Yb(),b.Yb(),b.Yb())}function y(t,i){if(1&t){const t=b.ac();b.Zb(0,"ul",64),b.Zb(1,"li",65),b.hc("click",(function(){b.Cc(t);const e=i.$implicit;return b.lc(2).countStar(e)})),b.Vb(2,"i",39),b.Yb(),b.Yb()}if(2&t){const t=i.$implicit,e=b.lc(2);b.Ib(1),b.rc("ngClass",b.vc(1,p,t<=e.selectedValue))}}function C(t,i){if(1&t&&(b.Zb(0,"option",66),b.Lc(1),b.Yb()),2&t){const t=i.$implicit;b.sc("value",t.id),b.Ib(1),b.Mc(t.name)}}function P(t,i){1&t&&(b.Zb(0,"div"),b.Lc(1,"Product is required"),b.Yb())}function R(t,i){if(1&t&&(b.Zb(0,"div",67),b.Jc(1,P,2,0,"div",35),b.Yb()),2&t){const t=b.lc(2);b.Ib(1),b.rc("ngIf",t.f.productId.errors.required)}}function S(t,i){1&t&&(b.Zb(0,"div"),b.Lc(1,"Name is required"),b.Yb())}function x(t,i){if(1&t&&(b.Zb(0,"div",67),b.Jc(1,S,2,0,"div",35),b.Yb()),2&t){const t=b.lc(2);b.Ib(1),b.rc("ngIf",t.f.name.errors.required)}}function k(t,i){1&t&&(b.Zb(0,"div"),b.Lc(1,"Comment is required"),b.Yb())}function F(t,i){if(1&t&&(b.Zb(0,"div",67),b.Jc(1,k,2,0,"div",35),b.Yb()),2&t){const t=b.lc(2);b.Ib(1),b.rc("ngIf",t.f.comment.errors.required)}}const O=function(t){return{"is-invalid":t}};function V(t,i){if(1&t){const t=b.ac();b.Zb(0,"div",46),b.Zb(1,"div",47),b.Zb(2,"h5",48),b.Lc(3,"Submit Your Review"),b.Yb(),b.Zb(4,"button",49),b.hc("click",(function(){return b.Cc(t),b.lc().modalRef.hide()})),b.Zb(5,"span",50),b.Lc(6,"\xd7"),b.Yb(),b.Yb(),b.Yb(),b.Zb(7,"form",51),b.hc("ngSubmit",(function(){return b.Cc(t),b.lc().onaddReviewSubmit()})),b.Zb(8,"div",52),b.Zb(9,"div",29),b.Jc(10,y,3,3,"ul",53),b.Yb(),b.Zb(11,"div",54),b.Zb(12,"select",55),b.Zb(13,"option",56),b.Lc(14,"Select Product"),b.Yb(),b.Jc(15,C,2,2,"option",57),b.Yb(),b.Jc(16,R,2,1,"div",58),b.Yb(),b.Zb(17,"div",54),b.Vb(18,"input",59),b.Jc(19,x,2,1,"div",58),b.Yb(),b.Zb(20,"div",54),b.Vb(21,"textarea",60),b.Jc(22,F,2,1,"div",58),b.Yb(),b.Yb(),b.Zb(23,"div",61),b.Zb(24,"button",62),b.hc("click",(function(){return b.Cc(t),b.lc().modalRef.hide()})),b.Lc(25,"Cancle"),b.Yb(),b.Zb(26,"button",63),b.Lc(27,"Submit"),b.Yb(),b.Yb(),b.Yb(),b.Yb()}if(2&t){const t=b.lc();b.Ib(7),b.rc("formGroup",t.addReviewForm),b.Ib(3),b.rc("ngForOf",t.stars),b.Ib(2),b.rc("ngClass",b.vc(9,O,t.submitted&&t.f.productId.errors)),b.Ib(3),b.rc("ngForOf",t.productsList),b.Ib(1),b.rc("ngIf",t.submitted&&t.f.productId.errors),b.Ib(2),b.rc("ngClass",b.vc(11,O,t.submitted&&t.f.name.errors)),b.Ib(1),b.rc("ngIf",t.submitted&&t.f.name.errors),b.Ib(2),b.rc("ngClass",b.vc(13,O,t.submitted&&t.f.comment.errors)),b.Ib(1),b.rc("ngIf",t.submitted&&t.f.comment.errors)}}const J=[{path:"",children:[{path:"",component:(()=>{class t{constructor(t,i,e,r,n,o,s,c){this.spinner=t,this._reviews=i,this._route=e,this._router=r,this.formBuilder=n,this.modalService=o,this._products=s,this.toastr=c,this.stars=[1,2,3,4,5],this.parameters={},this.currentPage=0,this.notEmptyPost=!0,this.notScrolly=!0,this.loadingImage=!1,this.reviewsData=[],this.topProductCategories=[],this.productsList=[],this.apiUrl=a.a.apiUrl,this.defaultImage="assets/images/defaultProfile.png",this.submitted=!1,this.buttonLoading=!1}ngOnInit(){this.spinner.show(),this.currentPage=0,this.notEmptyPost=!0,this.notScrolly=!0,this.loadingImage=!1,this.loadInitPost(),this._products.getAllProducts().subscribe(t=>{t.data&&(this.productsList=t.data)},t=>{console.log(t)}),this.addReviewForm=this.formBuilder.group({comment:["",[n.p.required]],name:["",[n.p.required]],productId:["",[n.p.required]]})}loadInitPost(){this._reviews.getAllReviews({parameters:this.parameters,currentPage:this.currentPage}).subscribe(t=>{this.spinner.hide(),t.data&&(this.reviewsData=t.data)},t=>{this.spinner.hide(),console.log(t)})}onScroll(){this.notEmptyPost&&this.notScrolly&&(this.loadingImage=!0,this.notScrolly=!1,this.currentPage++,this.loadNextData())}loadNextData(){this._reviews.getAllReviews({parameters:this.parameters,currentPage:this.currentPage}).subscribe(t=>{let i=t.data;console.log("newProductData===",i),this.loadingImage=!1,0===i.length&&(this.notEmptyPost=!1),this.reviewsData=this.reviewsData.concat(i),this.notScrolly=!0},t=>{console.log(t)})}ngAfterViewInit(){window.scrollTo(0,0)}openEditProfile(t){this.modalRef=this.modalService.show(t,Object.assign({},{class:"gray modal-md"}))}get f(){return this.addReviewForm.controls}onaddReviewSubmit(){if(this.submitted=!0,this.addReviewForm.invalid)return;let t={product_id:this.addReviewForm.value.productId,name:this.addReviewForm.value.name,comment:this.addReviewForm.value.comment,rating:this.selectedValue};this.buttonLoading=!0,this._reviews.addReview(t).subscribe(t=>{this.buttonLoading=!1,"success"==t.status&&(this.modalRef.hide(),this.toastr.success(t.message,"Success",{timeOut:4e3,closeButton:!0}),this._router.navigate([]))},t=>{let i;this.buttonLoading=!1,i="string"==typeof t?t:"object"==typeof t?t.error.message:"Something went wrong",this.toastr.error(i,"Error",{timeOut:4e3,closeButton:!0})}),console.log("this.addReviewForm====",this.addReviewForm.value)}countStar(t){this.selectedValue=this.selectedValue==t?0:t,console.log("Value of star",t)}}return t.\u0275fac=function(i){return new(i||t)(b.Ub(s.c),b.Ub(l.a),b.Ub(c.a),b.Ub(c.c),b.Ub(n.c),b.Ub(d.a),b.Ub(u.a),b.Ub(g.c))},t.\u0275cmp=b.Ob({type:t,selectors:[["app-reviews"]],decls:41,vars:5,consts:[["bdColor","rgb(255 255 255 / 95%)"],[1,"preloader"],[1,"preloader-body"],["src","assets/images/loader-page.svg"],["width","100","height","100","viewBox","0 0 40 40"],["points","0 0 0 40 40 40 40 0",1,"rect"],[1,"page-header","text-center",2,"background-image","url(assets/images/bg-rating-reviews.jpg)"],[1,"container"],[1,"row"],[1,"col-12"],[1,"page-heading-breadcrumb"],[1,"breadcrumb","justify-content-center"],[1,"breadcrumb-item"],["routerLink","/"],["aria-current","page",1,"breadcrumb-item","active"],[1,"rating-review-wrap","sec-ptb"],[1,"col-xl-6","text-center","text-xl-left"],["href","javascript:void(0)"],["src","assets/images/keen-logo.svg"],[1,"col-xl-6","d-xl-flex","justify-content-xl-end","align-items-xl-center","text-center"],["href","javascript:void(0)",1,"btn","btn-orange","text-uppercase","submit-review",3,"click"],["infiniteScroll","",1,"grid",3,"infiniteScrollDistance","infiniteScrollThrottle","scrolled"],[1,"grid-sizer"],["class","grid-item",4,"ngFor","ngForOf"],["class","loading-wrap text-center",4,"ngIf"],["class","row",4,"ngIf"],["editProfileTemplate",""],[1,"grid-item"],[1,"testimonial-bx"],[1,"star-rating"],["class","list-inline rating-list","style","display: inline-block",4,"ngFor","ngForOf"],[1,"user-info-bx"],[1,"user-img"],["src","assets/images/defaultProfile.png"],[1,"user-info-right"],[4,"ngIf"],[1,"date"],[1,"list-inline","rating-list",2,"display","inline-block"],[3,"ngClass"],[1,"fa","fa-star"],[1,"loading-wrap","text-center"],[1,"loading-icon"],["src","assets/images/loading-icon.png","alt",""],[1,"loading"],[1,"loading__letter"],[1,"sec-heading","mt-5","mb-3"],[1,"modal-content"],[1,"modal-header"],["id","exampleModalLabel",1,"modal-title"],["type","button","aria-label","Close",1,"close","pull-right",3,"click"],["aria-hidden","true"],[1,"form",3,"formGroup","ngSubmit"],[1,"modal-body"],["class","list-inline rating-list cursorpointer","style","display: inline-block",4,"ngFor","ngForOf"],[1,"form-group"],["formControlName","productId","title","Product",1,"form-control",3,"ngClass"],["value",""],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback",4,"ngIf"],["type","text","placeholder","Enter Your Name","formControlName","name",1,"form-control",3,"ngClass"],["placeholder","Enter Your Comment","formControlName","comment",1,"form-control",3,"ngClass"],[1,"modal-footer"],["type","button",1,"btn","btn-white","text-uppercase",3,"click"],["type","submit",1,"btn","btn-orange","text-uppercase"],[1,"list-inline","rating-list","cursorpointer",2,"display","inline-block"],[3,"ngClass","click"],[3,"value"],[1,"invalid-feedback"]],template:function(t,i){if(1&t){const t=b.ac();b.Zb(0,"ngx-spinner",0),b.Zb(1,"div",1),b.Zb(2,"div",2),b.Vb(3,"img",3),b.kc(),b.Zb(4,"svg",4),b.Vb(5,"polygon",5),b.Yb(),b.Yb(),b.Yb(),b.Yb(),b.jc(),b.Zb(6,"div",6),b.Zb(7,"div",7),b.Zb(8,"div",8),b.Zb(9,"div",9),b.Zb(10,"h2"),b.Lc(11,"Ratings and reviews"),b.Yb(),b.Zb(12,"div",10),b.Zb(13,"ol",11),b.Zb(14,"li",12),b.Zb(15,"a",13),b.Lc(16,"Home"),b.Yb(),b.Yb(),b.Zb(17,"li",14),b.Lc(18,"Rating and Reviews"),b.Yb(),b.Yb(),b.Yb(),b.Yb(),b.Yb(),b.Yb(),b.Yb(),b.Vb(19,"app-static-links"),b.Zb(20,"div",15),b.Zb(21,"div",7),b.Zb(22,"div",8),b.Zb(23,"div",16),b.Zb(24,"a",17),b.Vb(25,"img",18),b.Yb(),b.Yb(),b.Zb(26,"div",19),b.Zb(27,"a",20),b.hc("click",(function(){b.Cc(t);const e=b.Ac(40);return i.openEditProfile(e)})),b.Lc(28,"Submit your review"),b.Yb(),b.Yb(),b.Yb(),b.Zb(29,"div",8),b.Zb(30,"div",9),b.Zb(31,"div",21),b.hc("scrolled",(function(){return i.onScroll()})),b.Vb(32,"div",22),b.Jc(33,w,12,3,"div",23),b.Yb(),b.Yb(),b.Yb(),b.Zb(34,"div",8),b.Zb(35,"div",9),b.Jc(36,I,24,0,"div",24),b.Yb(),b.Yb(),b.Jc(37,L,5,0,"div",25),b.Yb(),b.Yb(),b.Vb(38,"app-nearest-location"),b.Jc(39,V,28,15,"ng-template",null,26,b.Kc)}2&t&&(b.Ib(31),b.rc("infiniteScrollDistance",2)("infiniteScrollThrottle",50),b.Ib(2),b.rc("ngForOf",i.reviewsData),b.Ib(3),b.rc("ngIf",i.loadingImage),b.Ib(1),b.rc("ngIf",0==i.reviewsData.length))},directives:[s.a,c.e,m.a,v.a,r.l,r.m,f.a,r.k,n.r,n.j,n.e,n.o,n.i,n.d,n.k,n.q,n.b],styles:[".rating-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#ddd;padding:0 4px}.rating-list[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]{color:#e15c16}.cursorpointer[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer}"]}),t})()}]}];let _=(()=>{class t{}return t.\u0275mod=b.Sb({type:t}),t.\u0275inj=b.Rb({factory:function(i){return new(i||t)},imports:[[c.f.forChild(J)],c.f]}),t})();var M=e("iNDR");let j=(()=>{class t{constructor(){console.log("ReviewsModule")}}return t.\u0275mod=b.Sb({type:t}),t.\u0275inj=b.Rb({factory:function(i){return new(i||t)},providers:[],imports:[[r.c,n.n,n.f,o.a,_,s.b,M.a,v.b,d.b.forRoot()]]}),t})()}}]);
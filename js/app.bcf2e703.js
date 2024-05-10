(function(){"use strict";var t={2263:function(t,e,n){var r=n(5130),o=n(6768);const a={id:"app"},i=(0,o.Lk)("nav",null,null,-1);function l(t,e,n,r,l,s){const u=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",a,[i,(0,o.bF)(u)])}var s={name:"App"},u=n(1241);const c=(0,u.A)(s,[["render",l]]);var p=c,d=n(1387);const f={class:"container"},g=(0,o.Lk)("h1",{class:"text-xl font-bold text-center mb-4"},"Reporting!",-1),b={class:"input-field"},v=(0,o.Lk)("label",{class:"input-label"},"Image",-1),h=(0,o.Lk)("small",null,"Please upload the image",-1),m={class:"preview-image"},x=["src"],k={key:1},y={class:"input-field"},L=(0,o.Lk)("label",{class:"input-label"},"Sighting time",-1),w={class:"input-field"},P=(0,o.Lk)("label",{class:"input-label"},"Sighting location",-1),C={class:"input-field"},I=(0,o.Lk)("label",{class:"input-label"},"Additional content",-1),O=(0,o.Lk)("div",{class:"flex justify-between"},[(0,o.Lk)("button",{type:"button",class:"button cancel-button"},"Cancel"),(0,o.Lk)("button",{type:"submit",class:"button submit-button",style:{"text-align":"right"}},"Report!")],-1);function S(t,e,n,a,i,l){return(0,o.uX)(),(0,o.CE)("div",f,[g,(0,o.Lk)("form",{onSubmit:e[4]||(e[4]=(0,r.D$)(((...t)=>l.handleSubmit&&l.handleSubmit(...t)),["prevent"]))},[(0,o.Lk)("div",b,[v,(0,o.Lk)("input",{type:"file",id:"file",class:"input",accept:"image/*",ref:"fileInput",onChange:e[0]||(e[0]=(...t)=>l.previewImage&&l.previewImage(...t))},null,544),h,(0,o.Lk)("div",m,[i.imageUrl?((0,o.uX)(),(0,o.CE)("img",{key:0,src:i.imageUrl,alt:"Preview Image"},null,8,x)):((0,o.uX)(),(0,o.CE)("p",k,"No Image"))])]),(0,o.Lk)("div",y,[L,(0,o.bo)((0,o.Lk)("input",{type:"text",id:"date",class:"input",placeholder:"ex)2024-05-16","onUpdate:modelValue":e[1]||(e[1]=t=>i.date=t)},null,512),[[r.Jo,i.date]])]),(0,o.Lk)("div",w,[P,(0,o.bo)((0,o.Lk)("input",{type:"text",id:"location",class:"input",placeholder:"Please enter a location","onUpdate:modelValue":e[2]||(e[2]=t=>i.location=t)},null,512),[[r.Jo,i.location]])]),(0,o.Lk)("div",C,[I,(0,o.bo)((0,o.Lk)("textarea",{id:"content",class:"textarea",rows:"4",placeholder:"If you have anything to add, please write it down","onUpdate:modelValue":e[3]||(e[3]=t=>i.content=t),style:{"font-size":"20px"},spellcheck:"false"},null,512),[[r.Jo,i.content]])]),O],32)])}n(4114),n(4603),n(7566),n(8721);var E={data(){return{date:"",location:"",content:"",imageUrl:""}},methods:{handleSubmit(){const t={date:this.date,status:"Processing completion"};let e=JSON.parse(localStorage.getItem("reports"))||[];e.push(t),localStorage.setItem("reports",JSON.stringify(e))},previewImage(t){const e=t.target.files[0];this.imageUrl=URL.createObjectURL(e)}}};const j=(0,u.A)(E,[["render",S]]);var R=j,U=n(4232);const X=t=>((0,o.Qi)("data-v-9af111ea"),t=t(),(0,o.jt)(),t),A={class:"container mx-auto px-4 py-8"},_=X((()=>(0,o.Lk)("h1",{class:"text-3xl font-bold mb-8 text-center text-blue-600"},"View report history",-1))),J={class:"bg-white shadow-lg rounded-lg overflow-hidden"},F=X((()=>(0,o.Lk)("div",{class:"row bg-blue-500 text-white uppercase tracking-wider text-sm font-semibold border-b-4 border-blue-600"},[(0,o.Lk)("div",{class:"col p-4",style:{"border-bottom":"1px solid #333","font-size":"25px","font-weight":"200","text-align":"center"}},"Date"),(0,o.Lk)("div",{class:"col p-4",style:{"border-bottom":"1px solid #333","font-size":"25px","font-weight":"200","text-align":"center"}},"Progress status")],-1))),N={class:"row border-b-2 border-gray-200 hover:bg-blue-50 transition duration-300 ease-in-out"},V={class:"col p-4"},z={class:"col p-4"},D={class:"flex justify-center space-x-2 mt-8",style:{"margin-top":"30px","text-align":"center"}},K=["onClick"],M={class:"flex justify-center mt-8",style:{"margin-top":"10px"}};function T(t,e,n,r,a,i){return(0,o.uX)(),(0,o.CE)("div",A,[_,(0,o.Lk)("div",J,[F,((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(i.paginatedReports,(t=>((0,o.uX)(),(0,o.CE)("div",{key:t.date,style:{"margin-top":"25px","border-bottom":"1px solid #333","text-align":"center"}},[(0,o.Lk)("div",N,[(0,o.Lk)("div",V,(0,U.v_)(t.date),1),(0,o.Lk)("div",z,(0,U.v_)(t.status),1)])])))),128))]),(0,o.Lk)("div",D,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(i.totalPages,(t=>((0,o.uX)(),(0,o.CE)("button",{key:t,onClick:e=>a.currentPage=t,class:(0,U.C4)(["px-4 py-2 rounded-full text-sm font-medium transition duration-300 ease-in-out",{"bg-blue-500 text-white":a.currentPage===t,"text-gray-500 hover:text-blue-600":a.currentPage!==t}])},(0,U.v_)(t),11,K)))),128)),(0,o.Lk)("div",M,[(0,o.Lk)("button",{onClick:e[0]||(e[0]=(...t)=>i.deleteAllReports&&i.deleteAllReports(...t)),class:"px-6 py-3 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition duration-300 ease-in-out"}," 모든 데이터 삭제 ")])])])}var B={data(){return{reports:[],currentPage:1,perPage:5}},computed:{totalPages(){return Math.ceil(this.reports.length/this.perPage)},paginatedReports(){const t=(this.currentPage-1)*this.perPage,e=t+this.perPage;return this.reports.slice(t,e)}},created(){const t=JSON.parse(localStorage.getItem("reports"))||[];this.reports=t},methods:{deleteAllReports(){this.reports=[],localStorage.removeItem("reports")}}};const Q=(0,u.A)(B,[["render",T],["__scopeId","data-v-9af111ea"]]);var $=Q;const q=[{path:"/",redirect:"/reporting"},{path:"/reporting",component:R},{path:"/list",component:$}],G=(0,d.aE)({history:(0,d.Bt)(),routes:q,base:"/"});var H=G;const W=(0,r.Ef)(p);W.use(H),W.mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,a){if(!r){var i=1/0;for(c=0;c<t.length;c++){r=t[c][0],o=t[c][1],a=t[c][2];for(var l=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[s])}))?r.splice(s--,1):(l=!1,a<i&&(i=a));if(l){t.splice(c--,1);var u=o();void 0!==u&&(e=u)}}return e}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[r,o,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,i=r[0],l=r[1],s=r[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(s)var c=s(n)}for(e&&e(r);u<i.length;u++)a=i[u],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(c)},r=self["webpackChunkreport"]=self["webpackChunkreport"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(2263)}));r=n.O(r)})();
//# sourceMappingURL=app.bcf2e703.js.map
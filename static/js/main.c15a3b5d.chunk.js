(this["webpackJsonporature-downloader"]=this["webpackJsonporature-downloader"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(7),s=n.n(o),i=(n(13),n(2)),l=n(3),c=n(5),u=n(4),d=n(8);var p=function e(){var t=this;Object(i.a)(this,e),this.execute=function(e){var n=new XMLHttpRequest;n.open("GET","https://nightlybuilds.s3.amazonaws.com/"),n.onload=function(){var r=function(e,t){var n={toObj:function(e){var t={};if(1==e.nodeType){if(e.attributes.length)for(var r=0;r<e.attributes.length;r++)t["@"+e.attributes[r].nodeName]=(e.attributes[r].nodeValue||"").toString();if(e.firstChild){for(var a=0,o=0,s=!1,i=e.firstChild;i;i=i.nextSibling)1==i.nodeType?s=!0:3==i.nodeType&&i.nodeValue.match(/[^ \f\n\r\t\v]/)?a++:4==i.nodeType&&o++;if(s)if(a<2&&o<2){n.removeWhite(e);for(i=e.firstChild;i;i=i.nextSibling)3==i.nodeType?t["#text"]=n.escape(i.nodeValue):4==i.nodeType?t["#cdata"]=n.escape(i.nodeValue):t[i.nodeName]?t[i.nodeName]instanceof Array?t[i.nodeName][t[i.nodeName].length]=n.toObj(i):t[i.nodeName]=[t[i.nodeName],n.toObj(i)]:t[i.nodeName]=n.toObj(i)}else e.attributes.length?t["#text"]=n.escape(n.innerXml(e)):t=n.escape(n.innerXml(e));else if(a)e.attributes.length?t["#text"]=n.escape(n.innerXml(e)):t=n.escape(n.innerXml(e));else if(o)if(o>1)t=n.escape(n.innerXml(e));else for(i=e.firstChild;i;i=i.nextSibling)t["#cdata"]=n.escape(i.nodeValue)}e.attributes.length||e.firstChild||(t=null)}else 9==e.nodeType?t=n.toObj(e.documentElement):alert("unhandled node type: "+e.nodeType);return t},toJson:function(e,t,r){var a=t?'"'+t+'"':"";if(e instanceof Array){for(var o=0,s=e.length;o<s;o++)e[o]=n.toJson(e[o],"",r+"\t");a+=(t?":[":"[")+(e.length>1?"\n"+r+"\t"+e.join(",\n"+r+"\t")+"\n"+r:e.join(""))+"]"}else if(null==e)a+=(t&&":")+"null";else if("object"==typeof e){var i=[];for(var l in e)i[i.length]=n.toJson(e[l],l,r+"\t");a+=(t?":{":"{")+(i.length>1?"\n"+r+"\t"+i.join(",\n"+r+"\t")+"\n"+r:i.join(""))+"}"}else a+="string"==typeof e?(t&&":")+'"'+e.toString()+'"':(t&&":")+e.toString();return a},innerXml:function(e){var t="";if("innerHTML"in e)t=e.innerHTML;else for(var n=function e(t){var n="";if(1==t.nodeType){n+="<"+t.nodeName;for(var r=0;r<t.attributes.length;r++)n+=" "+t.attributes[r].nodeName+'="'+(t.attributes[r].nodeValue||"").toString()+'"';if(t.firstChild){n+=">";for(var a=t.firstChild;a;a=a.nextSibling)n+=e(a);n+="</"+t.nodeName+">"}else n+="/>"}else 3==t.nodeType?n+=t.nodeValue:4==t.nodeType&&(n+="<![CDATA["+t.nodeValue+"]]>");return n},r=e.firstChild;r;r=r.nextSibling)t+=n(r);return t},escape:function(e){return e.replace(/[\\]/g,"\\\\").replace(/[\"]/g,'\\"').replace(/[\n]/g,"\\n").replace(/[\r]/g,"\\r")},removeWhite:function(e){e.normalize();for(var t=e.firstChild;t;)if(3==t.nodeType)if(t.nodeValue.match(/[^ \f\n\r\t\v]/))t=t.nextSibling;else{var r=t.nextSibling;e.removeChild(t),t=r}else 1==t.nodeType?(n.removeWhite(t),t=t.nextSibling):t=t.nextSibling;return e}};9==e.nodeType&&(e=e.documentElement);var r=n.toJson(n.toObj(n.removeWhite(e)),e.nodeName,"\t");return"{\n"+t+(t?r.replace(/\t/g,t):r.replace(/\t|\n/g,""))+"\n}"}(n.responseXML).replace('undefined"ListBucketResult','"ListBucketResult'),a=JSON.parse(r),o=t.getOratureProjects(a.ListBucketResult.Contents),s=t.getProjectsByBranch(o);e(s)},n.send()},this.parseXml=function(e){var t=null;if(window.DOMParser)try{t=(new DOMParser).parseFromString(e,"text/xml")}catch(n){t=null}else alert("cannot parse xml string!");return t},this.addList=function(e){var t=document.getElementById("branches-list");Object.keys(e).forEach((function(e){var n=document.createElement("option");n.text=n.value=e,t.add(n,0)})),t.value="dev"},this.getOratureProjects=function(e){var t=[];return e.forEach((function(e){e.Key.includes("Bible-Translation-Tools/Orature/")&&t.push(e)})),t},this.getProjectsByBranch=function(e){var n={},r=/Bible-Translation-Tools\/Orature\/([a-zA-Z0-9-]*)\/.*/,a=/[\.deb|\.exe|\.dmg]$/;return e.forEach((function(e){var t=e.Key.match(r),o=t.length>1?t[1]:null;null!==o&&(Object.keys(n).includes(o)||(n[o]=[]),a.test(e.Key)&&n[o].push(e.Key))})),Object.keys(n).forEach((function(e){var r=t.getLatestBuild(e,n[e]);n[e]=t.removeExcess(n[e],e,r)})),n},this.getLatestBuild=function(e,t){var n=/Bible-Translation-Tools\/Orature\/[a-zA-Z0-9-]*\/(\d*)\/.*/,r=[];t.forEach((function(e){n.test(e)&&r.push(e.match(n).pop())}));var a=r.map((function(e){return parseInt(e)}));return Math.max.apply(Math,Object(d.a)(a))},this.removeExcess=function(e,t,n){var r=RegExp("Bible-Translation-Tools/Orature/"+t+"/"+n+"/.*");return e.filter((function(e){return r.test(e)}))},this.parser=new DOMParser},f=(n(14),n(0)),h=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"card",children:[Object(f.jsx)("h1",{className:"top",children:this.props.os}),Object(f.jsx)("img",{className:"os",src:this.props.iconUrl}),Object(f.jsx)("a",{href:this.props.downloadUrl,children:Object(f.jsxs)("button",{className:"btn",children:["Download ",this.props.version]})})]})}}]),n}(a.a.Component),m=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(i.a)(this,n),r=t.call(this,e),(new p).execute((function(e){var t=r.prepareContent(e),n=t.filter((function(e){return"chunking-prototype"===e.label}));r.setState({options:t,selectedValue:n[0]})})),r.state={selectedValue:{label:"branchName",value:{name:"",platforms:{windows:{downloadUrl:""},linux:{downloadUrl:""},macos:{downloadUrl:""}}}},options:[]},r}return Object(l.a)(n,[{key:"prepareContent",value:function(e){var t="http://nightlybuilds.s3-website-us-east-1.amazonaws.com/",n=[];return Object.keys(e).forEach((function(r){n.push({label:r,value:{name:r,platforms:{windows:{downloadUrl:t+e[r][2]},linux:{downloadUrl:t+e[r][0]},macos:{downloadUrl:t+e[r][1]}}}})})),n}},{key:"render",value:function(){return Object(f.jsx)("div",{className:"content-container",children:Object(f.jsxs)("div",{className:"platforms",children:[Object(f.jsx)(h,{os:"Windows",version:this.state.selectedValue.value.name,downloadUrl:this.state.selectedValue.value.platforms.windows.downloadUrl,iconUrl:"https://www.freeiconspng.com/uploads/system-windows-icon-png-4.png"}),Object(f.jsx)(h,{os:"Mac",version:this.state.selectedValue.value.name,downloadUrl:this.state.selectedValue.value.platforms.macos.downloadUrl,iconUrl:"https://www.freeiconspng.com/uploads/brushed-metal-apple-mac-icon-29.png"}),Object(f.jsx)(h,{os:"Linux",version:this.state.selectedValue.value.name,downloadUrl:this.state.selectedValue.value.platforms.linux.downloadUrl,iconUrl:"https://www.freeiconspng.com/uploads/linux-icon-2.png"})]})})}}]),n}(a.a.Component),b=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"appbar",children:Object(f.jsx)("img",{src:"https://orature.bibletranslationtools.org/wp-content/uploads/sites/6/2020/09/Orature@2x.png"})})}}]),n}(a.a.Component);var v=function(){return Object(f.jsxs)("div",{className:"app",children:[Object(f.jsx)(b,{}),Object(f.jsx)(m,{})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),o(e),s(e)}))};s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(v,{})}),document.getElementById("root")),j()}},[[16,1,2]]]);
//# sourceMappingURL=main.c15a3b5d.chunk.js.map
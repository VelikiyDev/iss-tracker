(this["webpackJsonpiss-tracker"]=this["webpackJsonpiss-tracker"]||[]).push([[0],{16:function(e,t,n){e.exports=n.p+"static/media/portrait-placeholder.7de11697.png"},18:function(e,t,n){e.exports=n.p+"static/media/icon.442ed8f3.svg"},20:function(e,t,n){e.exports=n(47)},25:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),l=(n(25),n(19)),i=n(1),s=n(4),u=n(3),m=n(2),p=n(16),d=n.n(p);var v=function(e){return r.a.createElement("li",{className:"astronaut"},r.a.createElement("img",{src:d.a,alt:e.name}),r.a.createElement("span",{className:"astroName"},e.name))},f=n(5),h=Object(a.createContext)(),E=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={astrosList:[],peopleAmount:0,isLoading:!1},e.handleErrors=function(t){if(!t.ok)throw Error(t.statusText);return e.props.setIsError(!1),t},e.updateData=function(){fetch("http://api.open-notify.org/astros.json").then(e.handleErrors).then((function(e){return e.json()})).then((function(t){var n=t.people.map((function(e,t){return"ISS"===e.craft&&[t,e.name]}));e.setState({astrosList:n,peopleAmount:n.length,isLoading:!1})})).catch((function(t){e.props.setIsError(!0),console.log(t)}))},e.render=function(){return r.a.createElement(h.Provider,{value:Object(f.a)({},e.state)},e.props.children)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),this.updateData(),this.interval=setInterval((function(){return e.updateData()}),5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}}]),n}(a.Component),g=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(h.Consumer,null,(function(e){var t=e.astrosList,n=e.peopleAmount,a=e.isLoading,o=t.map((function(e){return r.a.createElement(v,{key:e[0],name:e[1]})}));return r.a.createElement("div",{className:"astroBlock container"},r.a.createElement("ul",{className:"astronautList"},a?"<h3>Loading data...</h3>":o),r.a.createElement("div",{className:"total"},r.a.createElement("span",null,"Total amount: ",n," people on ISS")))}))}}]),n}(a.Component);g.contextType=h;var b=g,j=n(17),y=n.n(j),O=Object(a.createContext)(),C=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={coordinates:{lat:0,lng:0},isLoading:!1},e.handleErrors=function(t){if(!t.ok)throw Error(t.statusText);return e.props.setIsError(!1),t},e.updateData=function(){fetch("https://api.open-notify.org/iss-now.json").then(e.handleErrors).then((function(e){return e.json()})).then((function(t){e.setState({coordinates:{lng:Number(t.iss_position.longitude),lat:Number(t.iss_position.latitude)},isLoading:!1})})).catch((function(t){e.props.setIsError(!0),console.log(t)}))},e.render=function(){return r.a.createElement(O.Provider,{value:Object(f.a)({},e.state)},e.props.children)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.updateData(),this.setState({isLoading:!0}),this.interval=setInterval((function(){return e.updateData()}),5e3)}},{key:"componentWillUnmount",value:function(){var e=this;return function(){clearInterval(e.interval)}}}]),n}(a.Component),k=function(){return r.a.createElement("div",{className:"issMarker"})},I=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={coords:{lng:e.context.coordinates.lng,lat:e.context.coordinates.lat}},e.render=function(){return r.a.createElement("div",{className:"container",style:{height:"100%",width:"100%"}},r.a.createElement(O.Consumer,null,(function(e){var t=e.coordinates;return r.a.createElement(y.a,{bootstrapURLKeys:{key:"AIzaSyBXCigyemeSNyLbICeIlCwqczMGWxhdvD8"},initialCenter:t,center:t,zoom:5},r.a.createElement(k,{lat:t.lat,lng:t.lng}))})))},e}return n}(a.Component);I.contextType=O;var N=I,D=Object(a.createContext)(),w=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={currentTime:0,currentDate:0},e.checkTime=function(e){return e<10?"0"+e:e},e.updateClock=function(){e.setState({currentTime:e.checkTime((new Date).getUTCHours())+":"+e.checkTime((new Date).getUTCMinutes()),currentDate:(new Date).toUTCString().substring(0,16)})},e.render=function(){return r.a.createElement(D.Provider,{value:Object(f.a)({},e.state)},e.props.children)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.updateClock();var t=setInterval((function(){e.updateClock()}),5e3);return function(){clearInterval(t)}}}]),n}(a.Component);var L=function(e){return r.a.createElement(D.Consumer,null,(function(e){var t=e.currentDate,n=e.currentTime;return r.a.createElement("div",{className:"header container"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h3",null,"Current UTC time: ",n),r.a.createElement("span",null,"Date: ",t))))}))},S=n(18),T=n.n(S);var x=function(e){return r.a.createElement(O.Consumer,null,(function(e){var t=e.coordinates;return r.a.createElement("div",{className:"header container"},r.a.createElement("div",null,r.a.createElement("img",{src:T.a,alt:"Logo",id:"logo"}),r.a.createElement("div",null,r.a.createElement("h3",null,"ISS is currently located at:"),r.a.createElement("div",{className:"coordinates"},r.a.createElement("span",null,"longtitude: ",t.lng,", latitude: ",t.lat)))))}))};var A=function(e){return r.a.createElement("div",{className:e.className},r.a.createElement("span",null,e.message))};var M=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],o=t[1];return r.a.createElement("div",{className:"wrapper"},r.a.createElement(A,{className:n?"errorMessage fade-in-top":"errorMessage fade-out-top",message:"Error fetching data \ud83d\ude1f Retrying..."}),r.a.createElement("div",{className:"grid"},r.a.createElement(w,null,r.a.createElement(E,{setIsError:o},r.a.createElement(C,{setIsError:o},r.a.createElement(x,null),r.a.createElement(L,null),r.a.createElement(N,null),r.a.createElement(b,null))))))};c.a.render(r.a.createElement(M,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.58004661.chunk.js.map
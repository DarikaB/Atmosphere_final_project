(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{29:function(e,t,a){},34:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},50:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n,i,c,r,s,o,d,l,h,u,j,p,m,f,b,y,g,O,x,v,w,k,C,N,S,T,A,M,I,D,P,F,z,U,J,Q=a(1),E=a(25),R=a.n(E),B=a(11),H=a(12),_=a(14),L=a(13),W=(a(29),a(0)),q=function(e){Object(_.a)(a,e);var t=Object(L.a)(a);function a(){return Object(B.a)(this,a),t.apply(this,arguments)}return Object(H.a)(a,[{key:"render",value:function(){return Object(W.jsx)("div",{className:"containerLogin",children:Object(W.jsxs)("div",{id:"login",children:[Object(W.jsx)("h1",{className:"text-uppercase",children:"Atmosphere"}),Object(W.jsx)("p",{children:"Atmosphere is an app that uses your local weather forecast to generate and play unique Spotify playlist. (She wanted us to add more user flow description here as well)"}),Object(W.jsxs)("a",{href:"/login",className:"btn btn-light",children:["Log in with Spotify ",Object(W.jsx)("i",{className:"fab fa-spotify fa-lg"})]})]})})}}]),a}(Q.Component),G=a(6),K=a.n(G),V=a(15),X=a.n(V),Y=a(5),Z=a(2),$=(a(23),a(34),{container:{width:0,height:0},card:{width:0,height:0}}),ee={windSpeed:2,snowCount:0,cloudHeight:100,cloudSpace:30,cloudArch:50,renewCheck:10},te=0,ae=[],ne=function(e){Object(_.a)(a,e);var t=Object(L.a)(a);function a(e){var s;return Object(B.a)(this,a),(s=t.call(this,e)).tick=function(){++te%ee.renewCheck&&ae.length<ee.snowCount&&s.makeSnow();for(var e=0;e<h.length;e++)h[e].offset+=ee.windSpeed/(e+1),h[e].offset>$.card.width&&(h[e].offset=h[e].offset-$.card.width+0),h[e].group.transform("t"+h[e].offset+",0");requestAnimationFrame(s.tick)},s.onResize=function(){$.container.width=n.width(),$.container.height=n.height(),$.card.width=i.width(),$.card.height=i.height(),$.card.offset=i.offset(),c.attr({width:$.card.width,height:$.card.height}),r.attr({width:$.container.width,height:$.container.height})},s.onSnowEnd=function(e){for(var t in e.remove(),e=null,ae)ae[t].paper||ae.splice(t,1);ae.length<ee.snowCount&&s.makeSnow()},s.state={temp:e.temp},s}return Object(H.a)(a,[{key:"weatherAnimations",value:function(){this.onResize();for(var e=0;e<h.length;e++)h[e].offset=Math.random()*$.card.width,this.drawCloud(h[e],e);Y.a.killTweensOf(s),Y.a.to(s,1,{opacity:0,x:-30,onComplete:this.updateSummaryText,ease:Z.e.easeIn}),Y.a.to(ee,3,{snowCount:40,ease:Z.d.easeInOut}),requestAnimationFrame(this.tick)}},{key:"drawCloud",value:function(e,t){var a=ee.cloudSpace*t+ee.cloudHeight,n=a+ee.cloudArch+Math.random()*ee.cloudArch,i=$.card.width,c=[];c.push("M"+[-i,0].join(",")),c.push([i,0].join(",")),c.push("Q"+[2*i,a/2].join(",")),c.push([i,a].join(",")),c.push("Q"+[.5*i,n].join(",")),c.push([0,a].join(",")),c.push("Q"+[-.5*i,n].join(",")),c.push([-i,a].join(",")),c.push("Q"+[-2*i,a/2].join(",")),c.push([-i,0].join(","));var r=c.join(" ");e.path||(e.path=e.group.path()),e.path.animate({d:r},0)}},{key:"makeSnow",value:function(){var e,t,a=.5+.5*Math.random(),n=20+Math.random()*($.card.width-40),i=-10;a>.8?(e=l.circle(0,0,5).attr({fill:"white"}),t=$.container.height+10,i=$.card.offset.top+ee.cloudHeight,n+=$.card.offset.left):(e=d.circle(0,0,5).attr({fill:"white"}),t=$.card.height+10),ae.push(e),Y.a.fromTo(e.node,3+5*Math.random(),{x:n,y:i},{y:t,onComplete:this.onSnowEnd,onCompleteParams:[e],ease:Z.b.easeIn}),Y.a.fromTo(e.node,1,{scale:0},{scale:a,ease:Z.c.easeInOut}),Y.a.to(e.node,3,{x:n+(150*Math.random()-75),repeat:-1,yoyo:!0,ease:Z.c.easeInOut})}},{key:"updateSummaryText",value:function(){s.html("Snow"),Y.a.fromTo(s,1.5,{x:30},{opacity:1,x:0,ease:Z.e.easeOut})}},{key:"componentDidMount",value:function(){o=K.a.select("#layer1"),c=K()("#inner"),r=K()("#outer"),s=X()("#summary"),n=X()(".container"),i=X()("#card"),h=[{group:K.a.select("#cloud1")},{group:K.a.select("#cloud2")},{group:K.a.select("#cloud3")}],l=r.group(),d=o.group(),this.weatherAnimations()}},{key:"getDate",value:function(){var e=new Date;return"".concat(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()]," ").concat(e.getDate()," ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()])}},{key:"render",value:function(){var e=this.state.temp;return Object(W.jsx)("div",{className:"background",children:Object(W.jsx)("div",{className:"container",children:Object(W.jsxs)("div",{id:"card",className:"weather",children:[Object(W.jsxs)("svg",{id:"inner",children:[Object(W.jsx)("g",{id:"layer3"}),Object(W.jsx)("g",{id:"cloud3",className:"cloud"}),Object(W.jsx)("g",{id:"layer2"}),Object(W.jsx)("g",{id:"cloud2",className:"cloud"}),Object(W.jsx)("g",{id:"layer1"}),Object(W.jsx)("g",{id:"cloud1",className:"cloud"})]}),Object(W.jsxs)("div",{className:"details",children:[Object(W.jsxs)("div",{className:"temp",children:[e,Object(W.jsx)("span",{children:"f"})]}),Object(W.jsxs)("div",{className:"right",children:[Object(W.jsx)("div",{id:"date",children:this.getDate()}),Object(W.jsx)("div",{id:"summary"})]})]}),Object(W.jsx)("svg",{id:"outer"})]})})})}}]),a}(Q.Component),ie={container:{width:0,height:0},card:{width:0,height:0}},ce={windSpeed:2,rainCount:0,cloudHeight:100,cloudSpace:30,cloudArch:50,renewCheck:10,splashBounce:80},re=0,se=[],oe=function(e){Object(_.a)(a,e);var t=Object(L.a)(a);function a(e){var n;return Object(B.a)(this,a),(n=t.call(this,e)).tick=function(){++re%ce.renewCheck&&se.length<ce.rainCount&&n.makeRain();for(var e=0;e<g.length;e++)g[e].offset+=ce.windSpeed/(e+1),g[e].offset>ie.card.width&&(g[e].offset=g[e].offset-ie.card.width+0),g[e].group.transform("t"+g[e].offset+",0");requestAnimationFrame(n.tick)},n.onResize=function(){ie.container.width=u.width(),ie.container.height=u.height(),ie.card.width=j.width(),ie.card.height=j.height(),ie.card.offset=j.offset(),p.attr({width:ie.card.width,height:ie.card.height}),m.attr({width:ie.container.width,height:ie.container.height})},n.onRainEnd=function(e,t,a,n){for(var i in e.remove(),e=null,se)se[i].paper||se.splice(i,1)},n.state={temp:e.temp},n}return Object(H.a)(a,[{key:"weatherAnimations",value:function(){this.onResize();for(var e=0;e<g.length;e++)g[e].offset=Math.random()*ie.card.width,this.drawCloud(g[e],e);Y.b.killTweensOf(f),Y.b.to(f,1,{opacity:0,x:-30,onComplete:this.updateSummaryText,ease:Y.b.easeIn}),u.addClass("rain"),Y.b.to(ce,3,{rainCount:10,ease:Y.b.easeInOut}),requestAnimationFrame(this.tick)}},{key:"drawCloud",value:function(e,t){var a=ce.cloudSpace*t+ce.cloudHeight,n=a+ce.cloudArch+Math.random()*ce.cloudArch,i=ie.card.width,c=[];c.push("M"+[-i,0].join(",")),c.push([i,0].join(",")),c.push("Q"+[2*i,a/2].join(",")),c.push([i,a].join(",")),c.push("Q"+[.5*i,n].join(",")),c.push([0,a].join(",")),c.push("Q"+[-.5*i,n].join(",")),c.push([-i,a].join(",")),c.push("Q"+[-2*i,a/2].join(",")),c.push([-i,0].join(","));var r=c.join(" ");e.path||(e.path=e.group.path()),e.path.animate({d:r},0)}},{key:"makeRain",value:function(){var e=3*Math.random(),t=Math.random()*(ie.card.width-40)+20,a=y.path("M0,0 0,14").attr({fill:"none",stroke:"#0000ff",strokeWidth:e});se.push(a),Y.b.fromTo(a.node,1,{x:t,y:-14},{delay:Math.random(),y:ie.card.height,ease:Y.b.easeIn,onComplete:this.onRainEnd,onCompleteParams:[a,e,t,"rain"]})}},{key:"updateSummaryText",value:function(){f.html("Rain"),Y.b.fromTo(f,1.5,{x:30},{opacity:1,x:0,ease:Y.b.easeOut})}},{key:"componentDidMount",value:function(){b=K.a.select("#layer1"),p=K()("#inner"),m=K()("#outer"),f=X()("#summary"),u=X()(".container"),j=X()("#card"),g=[{group:K.a.select("#cloud1")},{group:K.a.select("#cloud2")},{group:K.a.select("#cloud3")}],y=b.group(),this.weatherAnimations()}},{key:"getDate",value:function(){var e=new Date;return"".concat(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()]," ").concat(e.getDate()," ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()])}},{key:"render",value:function(){var e=this.state.temp;return Object(W.jsx)("div",{className:"background",children:Object(W.jsx)("div",{className:"container",children:Object(W.jsxs)("div",{id:"card",className:"weather",children:[Object(W.jsxs)("svg",{id:"inner",children:[Object(W.jsx)("g",{id:"layer3"}),Object(W.jsx)("g",{id:"cloud3",className:"cloud"}),Object(W.jsx)("g",{id:"layer2"}),Object(W.jsx)("g",{id:"cloud2",className:"cloud"}),Object(W.jsx)("g",{id:"layer1"}),Object(W.jsx)("g",{id:"cloud1",className:"cloud"})]}),Object(W.jsxs)("div",{className:"details",children:[Object(W.jsxs)("div",{className:"temp",children:[e,Object(W.jsx)("span",{children:"f"})]}),Object(W.jsxs)("div",{className:"right",children:[Object(W.jsx)("div",{id:"date",children:this.getDate()}),Object(W.jsx)("div",{id:"summary"})]})]}),Object(W.jsx)("svg",{id:"outer"})]})})})}}]),a}(Q.Component),de={container:{width:0,height:0},card:{width:0,height:0}},le={windSpeed:2,leafCount:0,cloudHeight:100,cloudSpace:30,cloudArch:50,renewCheck:10},he=0,ue=[],je=function(e){Object(_.a)(a,e);var t=Object(L.a)(a);function a(e){var n;return Object(B.a)(this,a),(n=t.call(this,e)).tick=function(){++he%le.renewCheck&&ue.length<le.leafCount&&n.makeLeaf();for(var e=0;e<M.length;e++)M[e].offset+=le.windSpeed/(e+1),M[e].offset>de.card.width&&(M[e].offset=M[e].offset-de.card.width+0),M[e].group.transform("t"+M[e].offset+",0");requestAnimationFrame(n.tick)},n.onLeafEnd=function(e){for(var t in e.remove(),e=null,ue)ue[t].paper||ue.splice(t,1);ue.length<le.leafCount&&n.makeLeaf()},n.state={temp:e.temp},n}return Object(H.a)(a,[{key:"weatherAnimations",value:function(){this.onResize();for(var e=0;e<M.length;e++)M[e].offset=Math.random()*de.card.width,this.drawCloud(M[e],e);Y.c.killTweensOf(k),Y.c.to(k,1,{opacity:0,x:-30,onComplete:this.updateSummaryText,ease:Z.e.easeIn}),Y.c.to(le,3,{windSpeed:3,ease:Z.d.easeInOut}),Y.c.to(le,3,{leafCount:5,ease:Z.d.easeInOut}),requestAnimationFrame(this.tick)}},{key:"onResize",value:function(){de.container.width=O.width(),de.container.height=O.height(),de.card.width=x.width(),de.card.height=x.height(),de.card.offset=x.offset(),v.attr({width:de.card.width,height:de.card.height}),w.attr({width:de.container.width,height:de.container.height}),S.attr({x:de.card.offset.left,y:0,width:de.container.width-de.card.offset.left,height:de.container.height})}},{key:"drawCloud",value:function(e,t){var a=le.cloudSpace*t+le.cloudHeight,n=a+le.cloudArch+Math.random()*le.cloudArch,i=de.card.width,c=[];c.push("M"+[-i,0].join(",")),c.push([i,0].join(",")),c.push("Q"+[2*i,a/2].join(",")),c.push([i,a].join(",")),c.push("Q"+[.5*i,n].join(",")),c.push([0,a].join(",")),c.push("Q"+[-.5*i,n].join(",")),c.push([-i,a].join(",")),c.push("Q"+[-2*i,a/2].join(",")),c.push([-i,0].join(","));var r=c.join(" ");e.path||(e.path=e.group.path()),e.path.animate({d:r},0)}},{key:"makeLeaf",value:function(){var e,t,a=.5+.5*Math.random(),n=de.card.height/2,i=n+Math.random()*n,c=["#76993E","#4A5E23","#6D632F"],r=c[Math.floor(Math.random()*c.length)];a>.8?(e=T.clone().appendTo(A).attr({fill:r}),i+=de.card.offset.top/2,t=de.card.offset.left-100):(e=T.clone().appendTo(N).attr({fill:r}),t=-100),ue.push(e),Y.c.fromTo(e.node,2,{rotation:180*Math.random(),x:t,y:i,scale:a},{rotation:360*Math.random(),x:1400,y:200,onComplete:this.onLeafEnd,onCompleteParams:[e],ease:Z.b.easeIn})}},{key:"updateSummaryText",value:function(){k.html("Windy"),Y.c.fromTo(k,1.5,{x:30},{opacity:1,x:0,ease:Z.e.easeOut})}},{key:"componentDidMount",value:function(){C=K.a.select("#layer1"),v=K()("#inner"),w=K()("#outer"),k=X()("#summary"),O=X()(".container"),x=X()("#card"),T=K.a.select("#leaf"),S=w.rect(),M=[{group:K.a.select("#cloud1")},{group:K.a.select("#cloud2")},{group:K.a.select("#cloud3")}],A=w.group(),N=C.group(),A.attr({"clip-path":S}),this.weatherAnimations()}},{key:"getDate",value:function(){var e=new Date;return"".concat(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()]," ").concat(e.getDate()," ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()])}},{key:"render",value:function(){var e=this.state.temp;return Object(W.jsx)("div",{className:"background",children:Object(W.jsx)("div",{className:"container",children:Object(W.jsxs)("div",{id:"card",className:"weather",children:[Object(W.jsxs)("svg",{id:"inner",children:[Object(W.jsx)("defs",{children:Object(W.jsx)("path",{id:"leaf",d:"M41.9,56.3l0.1-2.5c0,0,4.6-1.2,5.6-2.2c1-1,3.6-13,12-15.6c9.7-3.1,19.9-2,26.1-2.1c2.7,0-10,23.9-20.5,25 c-7.5,0.8-17.2-5.1-17.2-5.1L41.9,56.3z"})}),Object(W.jsx)("g",{id:"layer3"}),Object(W.jsx)("g",{id:"cloud3",className:"cloud"}),Object(W.jsx)("g",{id:"layer2"}),Object(W.jsx)("g",{id:"cloud2",className:"cloud"}),Object(W.jsx)("g",{id:"layer1"}),Object(W.jsx)("g",{id:"cloud1",className:"cloud"})]}),Object(W.jsxs)("div",{className:"details",children:[Object(W.jsxs)("div",{className:"temp",children:[e,Object(W.jsx)("span",{children:"f"})]}),Object(W.jsxs)("div",{className:"right",children:[Object(W.jsx)("div",{id:"date",children:this.getDate()}),Object(W.jsx)("div",{id:"summary"})]})]}),Object(W.jsx)("svg",{id:"outer"})]})})})}}]),a}(Q.Component),pe={container:{width:0,height:0},card:{width:0,height:0}},me={windSpeed:2,leafCount:0,cloudHeight:100,cloudSpace:30,cloudArch:50},fe=function(e){Object(_.a)(a,e);var t=Object(L.a)(a);function a(e){var n;return Object(B.a)(this,a),(n=t.call(this,e)).tick=function(){for(var e=0;e<J.length;e++)J[e].offset>-1.5*pe.card.width&&(J[e].offset+=me.windSpeed/(e+1)),J[e].offset>2.5*pe.card.width&&(J[e].offset=-1.5*pe.card.width),J[e].group.transform("t"+J[e].offset+",0");requestAnimationFrame(n.tick)},n.state={temp:e.temp},n}return Object(H.a)(a,[{key:"weatherAnimations",value:function(){this.onResize();for(var e=0;e<J.length;e++)J[e].offset=Math.random()*pe.card.width,this.drawCloud(J[e],e);Y.c.killTweensOf(z),Y.c.to(z,1,{opacity:0,x:-30,onComplete:this.updateSummaryText,ease:Z.e.easeIn}),Y.c.to(me,3,{windSpeed:20,ease:Z.d.easeInOut}),Y.c.to(U.node,4,{x:pe.card.width/2,y:pe.card.height/2,ease:Z.d.easeInOut}),requestAnimationFrame(this.tick)}},{key:"onResize",value:function(){pe.container.width=I.width(),pe.container.height=I.height(),pe.card.width=D.width(),pe.card.height=D.height(),pe.card.offset=D.offset(),P.attr({width:pe.card.width,height:pe.card.height}),F.attr({width:pe.container.width,height:pe.container.height})}},{key:"drawCloud",value:function(e,t){var a=me.cloudSpace*t+me.cloudHeight,n=a+me.cloudArch+Math.random()*me.cloudArch,i=pe.card.width,c=[];c.push("M"+[-i,0].join(",")),c.push([i,0].join(",")),c.push("Q"+[2*i,a/2].join(",")),c.push([i,a].join(",")),c.push("Q"+[.5*i,n].join(",")),c.push([0,a].join(",")),c.push("Q"+[-.5*i,n].join(",")),c.push([-i,a].join(",")),c.push("Q"+[-2*i,a/2].join(",")),c.push([-i,0].join(","));var r=c.join(" ");e.path||(e.path=e.group.path()),e.path.animate({d:r},0)}},{key:"updateSummaryText",value:function(){z.html("Sunny"),Y.c.fromTo(z,1.5,{x:30},{opacity:1,x:0,ease:Z.e.easeOut})}},{key:"componentDidMount",value:function(){P=K()("#inner"),F=K()("#outer"),z=X()("#summary"),I=X()(".container"),D=X()("#card"),U=K.a.select("#sun"),J=[{group:K.a.select("#cloud1")},{group:K.a.select("#cloud2")},{group:K.a.select("#cloud3")}],this.weatherAnimations()}},{key:"getDate",value:function(){var e=new Date;return"".concat(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()]," ").concat(e.getDate()," ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()])}},{key:"render",value:function(){var e=this.state.temp;return Object(W.jsx)("div",{className:"background",children:Object(W.jsx)("div",{className:"container",children:Object(W.jsxs)("div",{id:"card",className:"weather",children:[Object(W.jsxs)("svg",{id:"inner",children:["I       ",Object(W.jsx)("circle",{id:"sun",style:{fill:"#F7ED47"},cx:"0",cy:"0",r:"50"}),Object(W.jsx)("g",{id:"layer3"}),Object(W.jsx)("g",{id:"cloud3",className:"cloud"}),Object(W.jsx)("g",{id:"layer2"}),Object(W.jsx)("g",{id:"cloud2",className:"cloud"}),Object(W.jsx)("g",{id:"layer1"}),Object(W.jsx)("g",{id:"cloud1",className:"cloud"})]}),Object(W.jsxs)("div",{className:"details",children:[Object(W.jsxs)("div",{className:"temp",children:[e,Object(W.jsx)("span",{children:"f"})]}),Object(W.jsxs)("div",{className:"right",children:[Object(W.jsx)("div",{id:"date",children:this.getDate()}),Object(W.jsx)("div",{id:"summary"})]})]}),Object(W.jsx)("svg",{id:"outer"})]})})})}}]),a}(Q.Component),be=a(31),ye=a.n(be),ge=a(35),Oe=(a(45),a(20)),xe=a(21),ve=a(18),we=function(e){Object(_.a)(a,e);var t=Object(L.a)(a);function a(e){var n;return Object(B.a)(this,a),(n=t.call(this,e)).state={token:e.token,playlistUri:e.playlistUri,deviceId:"",loggedIn:!1,error:"",trackName:"Track Name",artistName:"Artist Name",albumName:"Album Name",playing:!1,position:0,duration:0,connected:!1},n.playerCheckInterval=null,n}return Object(H.a)(a,[{key:"handleLogin",value:function(){var e=this;""!==this.state.token&&(this.setState({loggedIn:!0}),this.playerCheckInterval=setInterval((function(){return e.checkForPlayer()}),1e3))}},{key:"checkForPlayer",value:function(){var e=this.state.token;null!==window.Spotify&&void 0!==window.Spotify&&(clearInterval(this.playerCheckInterval),this.player=new window.Spotify.Player({name:"Atmosphere Weather Player",getOAuthToken:function(t){t(e)}}),this.createEventHandlers(),this.player.connect())}},{key:"createEventHandlers",value:function(){var e=this;this.player.on("initialization_error",(function(e){console.error(e)})),this.player.on("authentication_error",(function(t){console.error(t),e.setState({loggedIn:!1})})),this.player.on("account_error",(function(e){console.error(e)})),this.player.on("playback_error",(function(e){console.error(e)})),this.player.on("player_state_changed",(function(t){return e.onStateChanged(t)})),this.player.on("ready",function(){var t=Object(ge.a)(ye.a.mark((function t(a){var n;return ye.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.device_id,console.log("Time to rock'n'roll"),t.next=4,e.setState({deviceId:n});case 4:e.playAtmospherePlaylist(),e.transferPlayback();case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"onStateChanged",value:function(e){if(null!==e){var t=e.track_window,a=t.current_track,n=t.position,i=t.duration,c=a.name,r=a.album.name,s=a.artists.map((function(e){return e.name})).join(", "),o=!e.paused;this.setState({position:n,duration:i,trackName:c,albumName:r,artistName:s,playing:o})}}},{key:"onPrevClick",value:function(){this.player.previousTrack()}},{key:"onPlayClick",value:function(){this.player.togglePlay()}},{key:"onNextClick",value:function(){this.player.nextTrack()}},{key:"transferPlayback",value:function(){var e=this.state,t=e.deviceId,a=e.token;fetch("https://api.spotify.com/v1/me/player",{method:"PUT",headers:{authorization:"Bearer ".concat(a),"Content-Type":"application/json"},body:JSON.stringify({device_ids:[t],play:!0})})}},{key:"playAtmospherePlaylist",value:function(){var e=this.state,t=e.deviceId,a=e.token,n=e.playlistUri;fetch("https://api.spotify.com/v1/me/player/play?device_id=".concat(t),{method:"PUT",headers:{authorization:"Bearer ".concat(a),"Content-Type":"application/json"},body:JSON.stringify({context_uri:n})})}},{key:"componentDidMount",value:function(){this.handleLogin()}},{key:"render",value:function(){var e=this,t=this.state,a=t.loggedIn,n=t.error,i=t.playing;return Object(W.jsx)("div",{children:Object(W.jsx)(Oe.a,{fluid:!0,children:Object(W.jsx)(xe.a,{children:Object(W.jsx)(ve.a,{children:Object(W.jsxs)("div",{className:"player",children:[n&&Object(W.jsxs)("p",{children:["Error: ",n]}),a?Object(W.jsx)("div",{className:"playerControls",children:Object(W.jsxs)("p",{children:[Object(W.jsx)("div",{onClick:function(){return e.onPrevClick()},children:Object(W.jsx)("img",{src:"https://img.icons8.com/material/48/000000/rewind.png",alt:"previous track"})}),Object(W.jsx)("div",{onClick:function(){return e.onPlayClick()},children:i?Object(W.jsx)("img",{src:"https://img.icons8.com/material/48/000000/pause--v1.png",alt:"pause button"}):Object(W.jsx)("img",{src:"https://img.icons8.com/material/48/000000/play--v2.png",alt:"play button"})}),Object(W.jsx)("div",{onClick:function(){return e.onNextClick()},children:Object(W.jsx)("img",{src:"https://img.icons8.com/material/48/000000/fast-forward--v1.png",alt:"next track"})})]})}):Object(W.jsx)("div",{children:Object(W.jsx)("p",{children:"Connecting..."})})]})})})})})}}]),a}(Q.Component),ke=(a(46),a(16)),Ce=function(e){Object(_.a)(a,e);var t=Object(L.a)(a);function a(e){var n;return Object(B.a)(this,a),(n=t.call(this,e)).state={token:e.token,playlistUri:e.playlistUri,tracks:[],artists:[],albums:[],albumArt:[]},n}return Object(H.a)(a,[{key:"getTracksInPlaylist",value:function(){var e=this,t=this.state,a=t.token,n=t.playlistUri,i=t.tracks,c=t.artists,r=t.albums,s=t.albumArt,o=n.split(":")[2];fetch("https://api.spotify.com/v1/playlists/".concat(o,"/tracks?market=US"),{method:"GET",headers:{authorization:"Bearer ".concat(a)}}).then((function(e){return e.json()})).then((function(t){console.log(t),t.items.forEach((function(e){i.push(e.track.name),c.push(e.track.artists[0].name),r.push(e.track.album.name),s.push(e.track.album.images[0].url)})),e.setState({tracks:i})}))}},{key:"componentDidMount",value:function(){this.getTracksInPlaylist()}},{key:"render",value:function(){var e=this.state,t=e.tracks,a=e.artists,n=e.albums,i=e.albumArt;return Object(W.jsxs)("div",{className:"playlist-rows",children:[Object(W.jsx)(ke.a,{className:"playlist-header",children:Object(W.jsx)(ke.a.Header,{children:"Atmosphere Weather Playlist"})}),Object(W.jsx)(ke.a,{children:Object(W.jsx)(Oe.a,{fluid:!0,children:Object(W.jsx)(xe.a,{children:Object(W.jsx)(ve.a,{children:Object(W.jsxs)(ke.a.Body,{children:["1. ",Object(W.jsx)("img",{width:"50",height:"50",src:i[0],alt:"album art"})," ",t[0]," - ",a[0]," - ",n[0]]})})})})}),Object(W.jsx)(ke.a,{children:Object(W.jsx)(Oe.a,{fluid:!0,children:Object(W.jsx)(xe.a,{children:Object(W.jsx)(ve.a,{children:Object(W.jsxs)(ke.a.Body,{children:["2. ",Object(W.jsx)("img",{width:"50",height:"50",src:i[1],alt:"album art"})," ",t[1]," - ",a[1]," - ",n[1]]})})})})}),Object(W.jsx)(ke.a,{children:Object(W.jsx)(Oe.a,{fluid:!0,children:Object(W.jsx)(xe.a,{children:Object(W.jsx)(ve.a,{children:Object(W.jsxs)(ke.a.Body,{children:["3. ",Object(W.jsx)("img",{width:"50",height:"50",src:i[2],alt:"album art"})," ",t[2]," - ",a[2]," - ",n[2]]})})})})}),Object(W.jsx)(ke.a,{children:Object(W.jsx)(Oe.a,{fluid:!0,children:Object(W.jsx)(xe.a,{children:Object(W.jsx)(ve.a,{children:Object(W.jsxs)(ke.a.Body,{children:["4. ",Object(W.jsx)("img",{width:"50",height:"50",src:i[3],alt:"album art"})," ",t[3]," - ",a[3]," - ",n[3]]})})})})}),Object(W.jsx)(ke.a,{children:Object(W.jsx)(Oe.a,{fluid:!0,children:Object(W.jsx)(xe.a,{children:Object(W.jsx)(ve.a,{children:Object(W.jsxs)(ke.a.Body,{children:["5. ",Object(W.jsx)("img",{width:"50",height:"50",src:i[4],alt:"album art"})," ",t[4]," - ",a[4]," - ",n[4]]})})})})}),Object(W.jsx)(ke.a,{children:Object(W.jsx)(Oe.a,{fluid:!0,children:Object(W.jsx)(xe.a,{children:Object(W.jsx)(ve.a,{children:Object(W.jsxs)(ke.a.Body,{children:["6. ",Object(W.jsx)("img",{width:"50",height:"50",src:i[5],alt:"album art"})," ",t[5]," - ",a[5]," - ",n[5]]})})})})})]})}}]),a}(Q.Component),Ne=a(26),Se=(a(47),function(e){Object(_.a)(a,e);var t=Object(L.a)(a);function a(e){var n;return Object(B.a)(this,a),(n=t.call(this,e)).state={authToken:e.authToken,displayName:e.displayName,playlistUri:e.playlistUri,temp:e.temp,weatherCard:e.weatherCard,zipCode:e.zipCode},n}return Object(H.a)(a,[{key:"getWeatherCard",value:function(){var e=this.state,t=e.weatherCard,a=e.temp;return"wind"===t?Object(W.jsx)(je,{temp:a}):"sun"===t?Object(W.jsx)(fe,{temp:a}):"snow"===t?Object(W.jsx)(ne,{temp:a}):"rain"===t?Object(W.jsx)(oe,{temp:a}):void 0}},{key:"render",value:function(){var e=this.state,t=e.authToken,a=e.displayName,n=e.playlistUri,i=e.zipCode;return Object(W.jsxs)("div",{children:[Object(W.jsx)("div",{style:{borderBottom:"2px solid pink",marginBottom:20},children:Object(W.jsxs)(Ne.a,{children:[Object(W.jsx)(Ne.a.Text,{children:i}),Object(W.jsx)(Ne.a.Toggle,{}),Object(W.jsx)(Ne.a.Collapse,{className:"justify-content-end",children:Object(W.jsxs)(Ne.a.Text,{children:[a," ",Object(W.jsx)("i",{className:"fab fa-spotify fa-lg"})]})})]})}),Object(W.jsx)(Oe.a,{fluid:!0,children:Object(W.jsxs)(xe.a,{children:[Object(W.jsxs)(ve.a,{className:"weatherCard",children:[this.getWeatherCard(),Object(W.jsx)(we,{token:t,playlistUri:n})]}),Object(W.jsx)(ve.a,{children:Object(W.jsx)("div",{children:Object(W.jsx)(Ce,{token:t,playlistUri:n})})})]})})]})}}]),a}(Q.Component)),Te=a(36),Ae=a(8);a(50);var Me=function(){for(var e,t={},a=/([^&;=]+)=?([^&;]*)/g,n=window.location.hash.substring(1);e=a.exec(n);)t[e[1]]=decodeURIComponent(e[2]);return t}();R.a.render(Object(W.jsx)(Te.a,{children:Object(W.jsxs)("div",{children:[Object(W.jsx)(Ae.a,{exact:!0,path:"/",children:Object(W.jsx)(q,{})}),Object(W.jsx)(Ae.a,{path:"/main",children:Object(W.jsx)(Se,{authToken:Me.authToken,displayName:Me.displayName,playlistUri:Me.playlistUri,temp:Me.temp,weatherCard:Me.weatherCard,zipCode:Me.zipCode})})]})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.3561d854.chunk.js.map
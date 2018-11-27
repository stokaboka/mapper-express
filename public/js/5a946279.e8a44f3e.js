(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["5a946279"],{"1b9b":function(t,e,i){},"1c52":function(t,e,i){"use strict";var s=i("1b9b"),n=i.n(s);n.a},"1d0e":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-page",{ref:"page",staticClass:"no-scroll"},[i("q-resize-observable",{on:{resize:t.onResize}}),i("div",{directives:[{name:"touch-pan",rawName:"v-touch-pan.prevent",value:t.onTouchPan,expression:"onTouchPan",modifiers:{prevent:!0}}],staticClass:"absolute",style:t.layersStyle,on:{click:t.onClick}},[i("map-layer",{ref:"map",attrs:{id:"MAP",width:t.canvasWidth,height:t.canvasHeight},on:{"load-tiles-started":t.onLoadTilesStarted,"load-tiles-progress":t.onLoadTilesProgress,"load-tiles-complete":t.onLoadTilesComplete}}),t._l(t.layers,function(e){return i("objects-layer",{key:e.id,attrs:{id:e.id,label:e.label,visible:e.visible,width:t.canvasWidth,height:t.canvasHeight},on:{"object-layer-redraw":t.onObjectLayerRedraw}})}),i("selection-layer",{ref:"selection",attrs:{width:t.canvasWidth,height:t.canvasHeight},on:{"on-selected-object-click":t.onSelectedObjectClick}})],2),t.mapLayer.loading.progress?i("q-progress",{staticClass:"absolute-top",staticStyle:{width:"100%"},attrs:{percentage:t.mapLayer.loading.percentage,color:"negative",stripe:"",buffer:t.mapLayer.loading.buffer}}):t._e(),i("map-controls",{staticClass:"map-controls-position__right-center",attrs:{"inc-disable":t.mapControls.incDisable,"dec-disable":t.mapControls.decDisable},on:{increment:t.doIncZoom,decrement:t.doDecZoom}})],1)},n=[],o=(i("96cf"),i("c973")),a=i.n(o),r=(i("f751"),i("3156")),l=i.n(r),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("canvas",{ref:"canvas",staticClass:"mapper-layer-map",attrs:{width:t.width,height:t.height}})},h=[],u=(i("c5f6"),i("f571")),d={name:"MapLayer",props:{width:Number,height:Number},data:function(){return{widthTiles:6,heightTiles:6,grid:null,status:{ready:!1,loading:!1,complete:!1,errors:0},counter:{images:0,complete:0,errors:0}}},created:function(){},mounted:function(){this.initRouterParams(),this.initTiles(!0)},methods:{initRouterParams:function(){this.$route.params.lon&&this.$route.params.lat&&this.$mapping.setGeoPoint(new u["GeoPoint"](parseFloat(this.$route.params.lon),parseFloat(this.$route.params.lat))),this.$route.params.zoom&&this.$mapping.setZoom(parseInt(this.$route.params.zoom))},onImageLoadedFinish:function(t){var e=this;this.counter.complete+this.counter.errors===this.counter.images?this.counter.errors>0?setTimeout(function(){e.initTiles(!1)},500):this.$emit("load-tiles-complete"):t&&this.$emit("load-tiles-progress",this.counter)},onImageLoadedComplete:function(){this.counter.complete++,this.onImageLoadedFinish(!0)},onImageLoadedError:function(){this.counter.errors++,this.onImageLoadedFinish(!1)},onZoomChange:function(t){return this.$mapping.changeZoom(t),this.initTiles(!1),this.$mapping.getMapControlsInfo()},onPan:function(t){this.$mapping.onPan(t),this.initTiles(!1)},initTiles:function(t){this.grid=this.$mapping.getGrid(),this.loadTiles(this.grid,t)},loadTiles:function(t,e){var i=this.$refs.canvas.getContext("2d");e&&(i.fillStyle="gray",i.fillRect(0,0,this.width,this.height)),this.counter.images=t.size.x*t.size.y,this.counter.complete=0,this.counter.errors=0;for(var s=0;s<t.size.x;s++)for(var n=0;n<t.size.y;n++)this.loadTile(i,t.begin,s,n);this.$emit("load-tiles-started")},loadTile:function(t,e,i,s){var n=new Image,o=this;n.addEventListener("load",function(e){t.drawImage(this,256*i,256*s),o.onImageLoadedComplete()}),n.addEventListener("error",function(t){o.onImageLoadedError()}),n.src=this.$mapping.getTileImageFileName(e.x+i,e.y+s)}},watch:{$route:function(t,e){this.initRouterParams()}}},f=d,p=(i("f46b"),i("2877")),y=Object(p["a"])(f,c,h,!1,null,null,null);y.options.__file="MapLayer.vue";var m=y.exports,v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"column"},[i("q-btn",{staticClass:"q-title text-weight-bold mapper-map-control-button",attrs:{round:"",size:"md",color:"white","text-color":"blue-gray",disable:t.incDisable},on:{click:function(e){t.$emit("increment")}}},[t._v(t._s(t.incLabel))]),i("q-btn",{staticClass:"q-title text-weight-bold mapper-map-control-button",attrs:{round:"",size:"md",color:"white","text-color":"blue-gray",disable:t.decDisable},on:{click:function(e){t.$emit("decrement")}}},[t._v(t._s(t.decLabel))])],1)},g=[],b={name:"MapControls",data:function(){return{incLabel:"+",decLabel:"-"}},props:{incDisable:!1,decDisable:!1,minValue:2,maxValue:19}},x=b,w=(i("2a7d"),Object(p["a"])(x,v,g,!1,null,null,null));w.options.__file="MapControls.vue";var L=w.exports,S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("canvas",{ref:t.cid,staticClass:"mapper-layer-map",attrs:{id:t.cid,width:t.width,height:t.height}})},C=[],P=(i("ac4d"),i("8a81"),i("ac6a"),i("970b")),k=i.n(P),$=i("5bc3"),j=i.n($),O=function(){function t(){k()(this,t),this.ctx=null,this.defaults={fillStyle:"#555555",strokeStyle:"#333333",lineWidth:5},this.effects=[]}return j()(t,[{key:"addEffect",value:function(t){this.effects.push(t)}},{key:"removeEffect",value:function(t){this.effects.splice(this.effects.indexOf(t),1)}},{key:"setContext",value:function(t){return this.ctx=t,this}},{key:"point",value:function(t){return this.setStyle(t),this.ctx.fillRect(t.x,t.y,t.w,t.h),this.ctx.stroke(),this.applyDrawEffects(t),this}},{key:"line",value:function(t){return this.setStyle(t),this.ctx.beginPath(),this.ctx.moveTo(t.points[0].x,t.points[0].y),this.ctx.lineTo(t.points[1].x,t.points[1].y),this.ctx.stroke(),this.applyDrawEffects(t),this}},{key:"polyline",value:function(t){this.ctx.beginPath(),this.ctx.moveTo(t.points[0].x,t.points[0].y);for(var e=1;e<t.points.length;e++)this.setStyle(t),this.ctx.lineTo(t.points[e].x,t.points[e].y),this.applyDrawEffects({points:[t.points[e-1],t.points[e]]});return this.ctx.stroke(),this}},{key:"applyStyleEffects",value:function(t){var e=!0,i=!1,s=void 0;try{for(var n,o=this.effects[Symbol.iterator]();!(e=(n=o.next()).done);e=!0){var a=n.value;"style"===a.target&&"color"===a.prop&&(t=a.do(t))}}catch(t){i=!0,s=t}finally{try{e||null==o.return||o.return()}finally{if(i)throw s}}return t}},{key:"applyDrawEffects",value:function(t){var e=!0,i=!1,s=void 0;try{for(var n,o=this.effects[Symbol.iterator]();!(e=(n=o.next()).done);e=!0){var a=n.value;"draw"===a.target&&a.setContext(this.ctx).do(t)}}catch(t){i=!0,s=t}finally{try{e||null==o.return||o.return()}finally{if(i)throw s}}}},{key:"setStyle",value:function(t){this.ctx.fillStyle=t.fillStyle?t.fillStyle:this.defaults.fillStyle,this.ctx.strokeStyle=t.strokeStyle?t.strokeStyle:this.defaults.strokeStyle,this.ctx.lineWidth=t.lineWidth?t.lineWidth:this.defaults.lineWidth,this.ctx.fillStyle=this.applyStyleEffects(this.ctx.fillStyle),this.ctx.strokeStyle=this.applyStyleEffects(this.ctx.strokeStyle)}}]),t}(),_=function(){function t(){k()(this,t),this.ctx=null,this.layer="",this.methods={communication:this.polyline01,equipment:this.point01,1:this.point01,2:this.point02,3:this.point03,4:this.polyline01,5:this.polyline02,6:this.polyline03},this.size={width:0,height:0},this.drawerPrimitives=new O,this.effects=[]}return j()(t,[{key:"addEffect",value:function(t){return this.drawerPrimitives.addEffect(t),this}},{key:"removeEffect",value:function(t){return this.drawerPrimitives.removeEffect(t),this}},{key:"setLayer",value:function(t){return this.layer=t,this}},{key:"setContext",value:function(t){return this.ctx=t,this.drawerPrimitives.setContext(t),this}},{key:"setSize",value:function(t){return this.size=t,this}},{key:"clear",value:function(){return this.ctx&&this.ctx.clearRect(0,0,this.size.width,this.size.height),this}},{key:"drawObjects",value:function(t){if(this.ctx){var e=!0,i=!1,s=void 0;try{for(var n,o=t[Symbol.iterator]();!(e=(n=o.next()).done);e=!0){var a=n.value;this.drawObject(a)}}catch(t){i=!0,s=t}finally{try{e||null==o.return||o.return()}finally{if(i)throw s}}}return this}},{key:"drawObject",value:function(t){return this.ctx&&(this.methods[t.type]?this.methods[t.type].call(this,t):console.log('Draw functiom not defined for type "'.concat(t.type,'"'))),this}},{key:"point01",value:function(t){return this.drawerPrimitives.point({fillStyle:t.color,x:t.points.pixels.x-5,y:t.points.pixels.y-5,w:10,h:10}),this}},{key:"point02",value:function(t){return this.drawerPrimitives.polyline({fillStyle:t.color,x:t.points.pixels.x-5,y:t.points.pixels.y-5,w:10,h:10}),this}},{key:"point03",value:function(t){return this.drawerPrimitives.point({fillStyle:t.color,x:t.points.pixels.x-5,y:t.points.pixels.y-5,w:10,h:10}),this}},{key:"polyline01",value:function(t){return this.drawerPrimitives.polyline({fillStyle:t.color,strokeStyle:t.color,lineWidth:4,points:t.points.map(function(t){return t.pixels})}),this}},{key:"polyline02",value:function(t){return this.drawerPrimitives.polyline({fillStyle:t.color,strokeStyle:t.color,lineWidth:5,points:t.points.map(function(t){return t.pixels})}),this}},{key:"polyline03",value:function(t){return this.drawerPrimitives.polyline({fillStyle:t.color,strokeStyle:t.color,lineWidth:3,points:t.points.map(function(t){return t.pixels})}),this}}]),t}(),T=i("2f62"),R=Object(T["a"])("network"),z=R.mapGetters,D=new _,E={name:"ObjectsLayer",data:function(){return{}},mounted:function(){D.setLayer(this.id).setSize({width:this.width,height:this.height}),this.loadLayerData(this.id)},updated:function(){this.visible?this.redraw():this.clear()},props:{id:String,label:String,visible:Boolean,width:Number,height:Number},computed:l()({cid:function(){return"OBJECTS_".concat(this.id)}},z(["mapReady"])),methods:{loadLayerData:function(){var t=a()(regeneratorRuntime.mark(function t(e){var i=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$dataProvider.loadLayer(e).then(function(){i.visible?i.redraw():i.clear()}).catch(function(t){console.log(t)});case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),reset:function(){this.clear(),this.loadLayerData(this.id)},clear:function(){D.setContext(this.getContext()).clear()},redraw:function(){var t=this.$dataProvider.getLayerData(this.id);D.setContext(this.getContext()).clear().drawObjects(t),this.$emit("object-layer-redraw",this.id)},getContext:function(){return this.$refs[this.cid]?this.$refs[this.cid].getContext("2d"):null}},watch:{id:function(t){this.loadLayerData(t)},visible:function(t){t?this.redraw():this.clear()},mapReady:function(t){t?this.redraw():this.clear()},$route:function(t,e){this.reset()}}},I=E,M=(i("50d1"),Object(p["a"])(I,S,C,!1,null,null,null));M.options.__file="ObjectsLayer.vue";var W=M.exports,q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("canvas",{ref:t.cid,staticClass:"selection-layer-map",attrs:{width:t.width,height:t.height}})},Z=[],F=function(){function t(e,i){k()(this,t),this.target="draw",this.color=e,this.border=i,this.ctx=null,this.delta=10}return j()(t,[{key:"setContext",value:function(t){return this.ctx=t,this}},{key:"do",value:function(t){if(this.ctx){var e=0,i=0,s=0,n=0;this.ctx.strokeStyle=this.color,this.ctx.lineWidth=this.border,t.points?(e=Math.min(t.points[0].x,t.points[1].x),s=Math.min(t.points[0].y,t.points[1].y),i=Math.max(t.points[0].x,t.points[1].x),n=Math.max(t.points[0].y,t.points[1].y),e=t.points[0].x,s=t.points[0].y,i=t.points[1].x,n=t.points[1].y,this.ctx.beginPath(),this.ctx.moveTo(e,s),this.ctx.lineTo(i,n),this.ctx.stroke()):(e=t.x,s=t.y,i=t.x+t.w,n=t.y+t.h,this.ctx.beginPath(),this.ctx.moveTo(e-this.delta,s-this.delta),this.ctx.lineTo(i+this.delta,s-this.delta),this.ctx.lineTo(i+this.delta,n+this.delta),this.ctx.lineTo(e-this.delta,n+this.delta),this.ctx.lineTo(e-this.delta,s-this.delta),this.ctx.stroke())}}}]),t}(),N=Object(T["a"])("network"),V=N.mapGetters,H=new _;H.addEffect(new F("#ff0000",2));var G={name:"SelectionLayer",props:{width:Number,height:Number},data:function(){return{cid:"selection"}},mounted:function(){H.setLayer("selection").setSize({width:this.width,height:this.height})},updated:function(){this.selectionLayerVisible&&this.redraw()},computed:l()({},V(["selectionLayerVisible"])),methods:{clear:function(){H.setContext(this.getContext()).clear()},redraw:function(){H.setContext(this.getContext()).clear().drawObjects(this.$dataProvider.selectionLayer)},getContext:function(){return this.$refs[this.cid]?this.$refs[this.cid].getContext("2d"):null}},watch:{selectionLayerVisible:function(t){t?this.redraw():this.clear()}}},B=G,J=(i("1c52"),Object(p["a"])(B,q,Z,!1,null,null,null));J.options.__file="SelectionLayer.vue";var A=J.exports,K=i("4086"),X=Object(T["a"])("network"),Y=X.mapGetters,Q=X.mapMutations,U=X.mapActions,tt={touchPan:!1},et={name:"Map",components:{ObjectCard:K["a"],SelectionLayer:A,ObjectsLayer:W,MapControls:L,MapLayer:m},data:function(){return{canvasWidth:256*this.$mapping.areaSizeWidth,canvasHeight:256*this.$mapping.areaSizeHeight,mapControls:{zoom:12,incDisable:!1,decDisable:!1},layersPosition:{left:0,top:0},startDragLayersPosition:{left:0,top:0},mapLayer:{loading:{progress:!1,percentage:0,buffer:0}},showObjectInfoPopOver:!1}},computed:l()({layersStyle:function(){return{left:"".concat(this.layersPosition.left,"px"),top:"".concat(this.layersPosition.top,"px")}},selectedObject:{get:function(){return this.$store.getters["network/selectedObject"]},set:function(t){this.$store.commit("network/setSelectedObject",t)}}},Y(["layers","ready","layersReady","mapReady","selectionLayerVisible"])),mounted:function(){this.$dataProvider.setMapper(this.$mapping),this.loadLayers({vm:this})},methods:l()({setRoute:function(){var t=Object.assign({},this.$route.params,this.$mapping.geoPoint,{zoom:this.$mapping.getZoom()});this.$router.push({name:"map",params:t})},doIncZoom:function(){this.mapControls=this.$refs.map.onZoomChange(1)},doDecZoom:function(){this.mapControls=this.$refs.map.onZoomChange(-1)},positionLayersToCenter:function(t){var e=t?t.height:this.$refs.page.$el.offsetHeight,i=t?t.width:this.$refs.page.$el.offsetWidth;this.layersPosition={left:Math.round((i-this.canvasWidth)/2,10),top:Math.round((e-this.canvasHeight)/2,10)}},onLoadTilesStarted:function(){this.mapLayer.loading.progress=!0,this.setLayersReady(!1),this.setMapReady(!1)},onLoadTilesProgress:function(t){t.images>0&&(this.mapLayer.loading.percentage=100*t.complete/t.images,this.mapLayer.loading.buffer=100*t.errors/t.images)},onLoadTilesComplete:function(){this.mapLayer.loading.progress=!1,this.positionLayersToCenter(),this.setRoute(),this.setMapReady(!0)},dragLayers:function(t){this.layersPosition.left+=t.x,this.layersPosition.top+=t.y},onChangeLayersPosition:function(t){this.$refs.map.onPan(t)},onTouchPan:function(t){if(this.dragLayers(t.delta),t.isFirst&&(tt.touchPan=!0,this.startDragLayersPosition={left:this.layersPosition.left,top:this.layersPosition.top}),t.isFinal){var e={x:this.layersPosition.left-this.startDragLayersPosition.left,y:this.layersPosition.top-this.startDragLayersPosition.top};this.onChangeLayersPosition(e),tt.touchPan=!1}},addToSelection:function(t){this.$dataProvider.addToSelection(t),this.$refs.selection.redraw()},showObjectInfo:function(t){this.showObjectInfoPopOver=!0,this.selectedObject=t},onObjectClick:function(){var t=a()(regeneratorRuntime.mark(function t(e,i){var s=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$dataProvider.getObjectInfo(e).then(function(t){s.selectionLayerVisible&&i&&s.addToSelection(e.object),s.showObjectInfo(e.object)}).catch(function(t){console.log(t)});case 2:case"end":return t.stop()}},t,this)}));return function(e,i){return t.apply(this,arguments)}}(),onSelectedObjectClick:function(t){this.$dataProvider.removeFromSelection(t.object),this.$refs.selection.redraw()},onObjectLayerRedraw:function(){this.$refs.selection.redraw()},onResize:function(t){this.positionLayersToCenter(t)},onClick:function(t){if(this.showObjectInfoPopOver=!1,!tt.touchPan){var e={x:t.offsetX,y:t.offsetY},i=null;if(this.selectionLayerVisible&&t.ctrlKey&&(i=this.$dataProvider.findObjectByRelativePixelsInSelectionLayer(e)),i)this.onSelectedObjectClick(i);else{var s=this.$dataProvider.findObjectByRelativePixels(e);s&&this.onObjectClick(s,t.ctrlKey)}}}},U(["loadLayers"]),Q(["setLayersReady","setMapReady"]))},it=et,st=(i("c4e4"),Object(p["a"])(it,s,n,!1,null,null,null));st.options.__file="Map.vue";e["default"]=st.exports},"27ae":function(t,e,i){},"2a7d":function(t,e,i){"use strict";var s=i("27ae"),n=i.n(s);n.a},"368c":function(t,e,i){},4086:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-card",{staticClass:"object-card__size"},[i("q-card-title",[i("q-icon",{style:t.iconStyle,attrs:{slot:"right",name:t.icon},slot:"right"}),i("span",[t._v(t._s(t.type))])],1),i("q-card-separator"),i("q-card-main",[i("dl",{staticClass:"horizontal"},[i("dt",{staticClass:"text-left"},[t._v("ID")]),i("dd",[t._v(t._s(t.id))]),i("dt",{staticClass:"text-left"},[t._v("Name")]),i("dd",[t._v(t._s(t.label))])])])],1)},n=[],o={name:"ObjectCard",data:function(){return{}},props:{id:String,type:String,label:String,color:String,icon:String},computed:{iconStyle:function(){return{color:this.color}}}},a=o,r=(i("8b23"),i("2877")),l=Object(r["a"])(a,s,n,!1,null,null,null);l.options.__file="ObjectCard.vue";e["a"]=l.exports},"50d1":function(t,e,i){"use strict";var s=i("87c5"),n=i.n(s);n.a},5608:function(t,e,i){},"87c5":function(t,e,i){},"8b23":function(t,e,i){"use strict";var s=i("e650"),n=i.n(s);n.a},c4e4:function(t,e,i){"use strict";var s=i("368c"),n=i.n(s);n.a},e650:function(t,e,i){},f46b:function(t,e,i){"use strict";var s=i("5608"),n=i.n(s);n.a}}]);
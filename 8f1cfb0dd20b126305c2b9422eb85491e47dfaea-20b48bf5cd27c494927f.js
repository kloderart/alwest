(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{eaZk:function(e,t,n){"use strict";var o=n("q1tI"),l=n.n(o),a=n("vOnD"),i=n("Wbzz");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=n("9Hrx");function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=n("4R65"),c=n.n(f),m=n("2mql"),h=n.n(m),d=Object(o.createContext)({}),E=d.Consumer,v=d.Provider,b=function(e){var t=function(t,n){return l.a.createElement(E,null,(function(o){return l.a.createElement(e,r({},t,{leaflet:o,ref:n}))}))},n=e.displayName||e.name||"Component";t.displayName="Leaflet("+n+")";var a=Object(o.forwardRef)(t);return h()(a,e),a},g=n("i8i4"),y=/^on(.+)$/i,O=function(e){function t(t){var n;return u(s(n=e.call(this,t)||this),"_leafletEvents",void 0),u(s(n),"leafletElement",void 0),n._leafletEvents=n.extractLeafletEvents(t),n}Object(p.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.bindLeafletEvents(this._leafletEvents)},n.componentDidUpdate=function(e){this._leafletEvents=this.bindLeafletEvents(this.extractLeafletEvents(this.props),this._leafletEvents)},n.componentWillUnmount=function(){var e=this,t=this.leafletElement;t&&Object.keys(this._leafletEvents).forEach((function(n){t.off(n,e._leafletEvents[n])}))},n.extractLeafletEvents=function(e){return Object.keys(e).reduce((function(t,n){y.test(n)&&(null!=e[n]&&(t[n.replace(y,(function(e,t){return t.toLowerCase()}))]=e[n]));return t}),{})},n.bindLeafletEvents=function(e,t){void 0===e&&(e={}),void 0===t&&(t={});var n=this.leafletElement;if(null==n||null==n.on)return{};var o=r({},t);return Object.keys(t).forEach((function(l){null!=e[l]&&t[l]===e[l]||(delete o[l],n.off(l,t[l]))})),Object.keys(e).forEach((function(l){null!=t[l]&&e[l]===t[l]||(o[l]=e[l],n.on(l,e[l]))})),o},n.fireLeafletEvent=function(e,t){var n=this.leafletElement;n&&n.fire(e,t)},t}(o.Component),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(p.a)(t,e),t.prototype.getOptions=function(e){return null!=e.pane?e:null!=e.leaflet&&null!=e.leaflet.pane?r(r({},e),{},{pane:e.leaflet.pane}):e},t}(O),L=function(e){return void 0===e&&(e=""),e.split(" ").filter(Boolean)},C=function(e,t,n){null!=e&&n!==t&&(null!=t&&t.length>0&&function(e,t){L(t).forEach((function(t){f.DomUtil.removeClass(e,t)}))}(e,t),null!=n&&n.length>0&&function(e,t){L(t).forEach((function(t){f.DomUtil.addClass(e,t)}))}(e,n))},Z=function(e){function t(){for(var t,n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return u(s(t=e.call.apply(e,[this].concat(o))||this),"onPopupOpen",(function(e){e.popup===t.leafletElement&&t.onOpen()})),u(s(t),"onPopupClose",(function(e){e.popup===t.leafletElement&&t.onClose()})),u(s(t),"onRender",(function(){!1!==t.props.autoPan&&t.leafletElement.isOpen()&&(t.leafletElement._map&&t.leafletElement._map._panAnim&&(t.leafletElement._map._panAnim=void 0),t.leafletElement._adjustPan())})),t}Object(p.a)(t,e);var n=t.prototype;return n.getOptions=function(t){return r(r({},e.prototype.getOptions.call(this,t)),{},{autoPan:!1})},n.createLeafletElement=function(e){var t=this.getOptions(e);return t.autoPan=!1!==e.autoPan,new f.Popup(t,e.leaflet.popupContainer)},n.updateLeafletElement=function(e,t){t.position!==e.position&&this.leafletElement.setLatLng(t.position)},n.componentDidMount=function(){var e=this.props.position,t=this.props.leaflet,n=t.map,o=t.popupContainer,l=this.leafletElement;null!=n&&n.on({popupopen:this.onPopupOpen,popupclose:this.onPopupClose}),o?o.bindPopup(l):(e&&l.setLatLng(e),l.openOn(n))},n.componentWillUnmount=function(){var t=this.props.leaflet.map;null!=t&&(t.off({popupopen:this.onPopupOpen,popupclose:this.onPopupClose}),t.removeLayer(this.leafletElement)),e.prototype.componentWillUnmount.call(this)},t}(function(e){function t(t){var n;return u(s(n=e.call(this,t)||this),"onClose",(function(){n.props.onClose&&n.props.onClose()})),u(s(n),"onOpen",(function(){n.forceUpdate(),n.props.onOpen&&n.props.onOpen()})),n.leafletElement=n.createLeafletElement(t),n}Object(p.a)(t,e);var n=t.prototype;return n.createLeafletElement=function(e){throw new Error("createLeafletElement() must be implemented")},n.updateLeafletElement=function(e,t){},n.componentDidUpdate=function(e){C(this.leafletElement._container,e.className,this.props.className),this.updateLeafletElement(e,this.props),this.leafletElement.isOpen()&&(this.leafletElement.update(),this.onRender())},n.onRender=function(){},n.render=function(){return this.leafletElement._contentNode?Object(g.createPortal)(this.props.children,this.leafletElement._contentNode):null},t}(w));u(Z,"defaultProps",{pane:"popupPane"});var x=b(Z);function P(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var _=function(e){function t(t){var n;return u(s(n=e.call(this,t)||this),"contextValue",void 0),u(s(n),"leafletElement",void 0),n.leafletElement=n.createLeafletElement(t),n}Object(p.a)(t,e);var n,a,i,r=t.prototype;return r.createLeafletElement=function(e){throw new Error("createLeafletElement() must be implemented")},r.updateLeafletElement=function(e,t){},r.componentDidMount=function(){e.prototype.componentDidMount.call(this),this.layerContainer.addLayer(this.leafletElement)},r.componentDidUpdate=function(t){if(e.prototype.componentDidUpdate.call(this,t),this.props.attribution!==t.attribution){var n=this.props.leaflet.map;null!=n&&null!=n.attributionControl&&(n.attributionControl.removeAttribution(t.attribution),n.attributionControl.addAttribution(this.props.attribution))}this.updateLeafletElement(t,this.props)},r.componentWillUnmount=function(){e.prototype.componentWillUnmount.call(this),this.layerContainer.removeLayer(this.leafletElement)},r.render=function(){var e=this.props.children;return null==e?null:null==this.contextValue?l.a.createElement(o.Fragment,null,e):l.a.createElement(v,{value:this.contextValue},e)},n=t,(a=[{key:"layerContainer",get:function(){return this.props.leaflet.layerContainer||this.props.leaflet.map}}])&&P(n.prototype,a),i&&P(n,i),t}(w),k=b(function(e){function t(){return e.apply(this,arguments)||this}Object(p.a)(t,e);var n=t.prototype;return n.createLeafletElement=function(e){var t=new f.Marker(e.position,this.getOptions(e));return this.contextValue=r(r({},e.leaflet),{},{popupContainer:t}),t},n.updateLeafletElement=function(e,t){t.position!==e.position&&this.leafletElement.setLatLng(t.position),t.icon!==e.icon&&this.leafletElement.setIcon(t.icon),t.zIndexOffset!==e.zIndexOffset&&this.leafletElement.setZIndexOffset(t.zIndexOffset),t.opacity!==e.opacity&&this.leafletElement.setOpacity(t.opacity),t.draggable!==e.draggable&&(!0===t.draggable?this.leafletElement.dragging.enable():this.leafletElement.dragging.disable())},n.render=function(){var e=this.props.children;return null==e||null==this.contextValue?null:l.a.createElement(v,{value:this.contextValue},e)},t}(_));function j(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return Object.keys(e).reduce((function(t,o){return-1===n.indexOf(o)&&(t[o]=e[o]),t}),{})}var U=["children","className","id","style","useFlyTo","whenReady"],V=function(e){return Array.isArray(e)?[e[0],e[1]]:[e.lat,e.lon?e.lon:e.lng]},z=function(e){function t(t){var n;return u(s(n=e.call(this,t)||this),"className",void 0),u(s(n),"contextValue",void 0),u(s(n),"container",void 0),u(s(n),"viewport",{center:void 0,zoom:void 0}),u(s(n),"_ready",!1),u(s(n),"_updating",!1),u(s(n),"onViewportChange",(function(){var e=n.leafletElement.getCenter();n.viewport={center:e?[e.lat,e.lng]:void 0,zoom:n.leafletElement.getZoom()},n.props.onViewportChange&&!n._updating&&n.props.onViewportChange(n.viewport)})),u(s(n),"onViewportChanged",(function(){n.props.onViewportChanged&&!n._updating&&n.props.onViewportChanged(n.viewport)})),u(s(n),"bindContainer",(function(e){n.container=e})),n.className=t.className,n}Object(p.a)(t,e);var n=t.prototype;return n.createLeafletElement=function(e){var t=e.viewport,n=function(e,t){if(null==e)return{};var n,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["viewport"]);return t&&(t.center&&(n.center=t.center),"number"==typeof t.zoom&&(n.zoom=t.zoom)),new f.Map(this.container,n)},n.updateLeafletElement=function(e,t){this._updating=!0;var n=t.bounds,o=t.boundsOptions,l=t.boxZoom,a=t.center,i=t.className,r=t.doubleClickZoom,s=t.dragging,p=t.keyboard,u=t.maxBounds,f=t.scrollWheelZoom,c=t.tap,m=t.touchZoom,h=t.useFlyTo,d=t.viewport,E=t.zoom;if(C(this.container,e.className,i),d&&d!==e.viewport){var v=d.center?d.center:a,b=null==d.zoom?E:d.zoom;!0===h?this.leafletElement.flyTo(v,b,this.getZoomPanOptions(t)):this.leafletElement.setView(v,b,this.getZoomPanOptions(t))}else a&&this.shouldUpdateCenter(a,e.center)?!0===h?this.leafletElement.flyTo(a,E,this.getZoomPanOptions(t)):this.leafletElement.setView(a,E,this.getZoomPanOptions(t)):"number"==typeof E&&E!==e.zoom&&(null==e.zoom?this.leafletElement.setView(a,E,this.getZoomPanOptions(t)):this.leafletElement.setZoom(E,this.getZoomPanOptions(t)));u&&this.shouldUpdateBounds(u,e.maxBounds)&&this.leafletElement.setMaxBounds(u),n&&(this.shouldUpdateBounds(n,e.bounds)||o!==e.boundsOptions)&&(!0===h?this.leafletElement.flyToBounds(n,this.getFitBoundsOptions(t)):this.leafletElement.fitBounds(n,this.getFitBoundsOptions(t))),l!==e.boxZoom&&(!0===l?this.leafletElement.boxZoom.enable():this.leafletElement.boxZoom.disable()),r!==e.doubleClickZoom&&(!0===r||"string"==typeof r?(this.leafletElement.options.doubleClickZoom=r,this.leafletElement.doubleClickZoom.enable()):this.leafletElement.doubleClickZoom.disable()),s!==e.dragging&&(!0===s?this.leafletElement.dragging.enable():this.leafletElement.dragging.disable()),p!==e.keyboard&&(!0===p?this.leafletElement.keyboard.enable():this.leafletElement.keyboard.disable()),f!==e.scrollWheelZoom&&(!0===f||"string"==typeof f?(this.leafletElement.options.scrollWheelZoom=f,this.leafletElement.scrollWheelZoom.enable()):this.leafletElement.scrollWheelZoom.disable()),c!==e.tap&&(!0===c?this.leafletElement.tap.enable():this.leafletElement.tap.disable()),m!==e.touchZoom&&(!0===m||"string"==typeof m?(this.leafletElement.options.touchZoom=m,this.leafletElement.touchZoom.enable()):this.leafletElement.touchZoom.disable()),this._updating=!1},n.getZoomPanOptions=function(e){return{animate:e.animate,duration:e.duration,easeLinearity:e.easeLinearity,noMoveStart:e.noMoveStart}},n.getFitBoundsOptions=function(e){return r(r({},this.getZoomPanOptions(e)),e.boundsOptions)},n.componentDidMount=function(){var t=j.apply(void 0,[this.props].concat(U));this.leafletElement=this.createLeafletElement(t),this.leafletElement.on("move",this.onViewportChange),this.leafletElement.on("moveend",this.onViewportChanged),null!=t.bounds&&this.leafletElement.fitBounds(t.bounds,this.getFitBoundsOptions(t)),this.contextValue={layerContainer:this.leafletElement,map:this.leafletElement},e.prototype.componentDidMount.call(this),this.forceUpdate()},n.componentDidUpdate=function(t){!1===this._ready&&(this._ready=!0,this.props.whenReady&&this.leafletElement.whenReady(this.props.whenReady)),e.prototype.componentDidUpdate.call(this,t),this.updateLeafletElement(t,this.props)},n.componentWillUnmount=function(){e.prototype.componentWillUnmount.call(this),this.leafletElement.off("move",this.onViewportChange),this.leafletElement.off("moveend",this.onViewportChanged),!0===this.props.preferCanvas?(this.leafletElement._initEvents(!0),this.leafletElement._stop()):this.leafletElement.remove()},n.shouldUpdateCenter=function(e,t){return!t||(e=V(e),t=V(t),e[0]!==t[0]||e[1]!==t[1])},n.shouldUpdateBounds=function(e,t){return!t||!Object(f.latLngBounds)(e).equals(Object(f.latLngBounds)(t))},n.render=function(){return l.a.createElement("div",{className:this.className,id:this.props.id,ref:this.bindContainer,style:this.props.style},this.contextValue?l.a.createElement(v,{value:this.contextValue},this.props.children):null)},t}(O),B=b(function(e){function t(){return e.apply(this,arguments)||this}Object(p.a)(t,e);var n=t.prototype;return n.createLeafletElement=function(e){return new f.TileLayer(e.url,this.getOptions(e))},n.updateLeafletElement=function(t,n){e.prototype.updateLeafletElement.call(this,t,n),n.url!==t.url&&this.leafletElement.setUrl(n.url)},t}(function(e){function t(){return e.apply(this,arguments)||this}Object(p.a)(t,e);var n=t.prototype;return n.createLeafletElement=function(e){return new f.GridLayer(this.getOptions(e))},n.updateLeafletElement=function(e,t){var n=t.opacity,o=t.zIndex;n!==e.opacity&&this.leafletElement.setOpacity(n),o!==e.zIndex&&this.leafletElement.setZIndex(o)},n.getOptions=function(t){var n=r({},e.prototype.getOptions.call(this,t)),o=t.leaflet.map;return null!=o&&(null==n.maxZoom&&null!=o.options.maxZoom&&(n.maxZoom=o.options.maxZoom),null==n.minZoom&&null!=o.options.minZoom&&(n.minZoom=o.options.minZoom)),n},n.render=function(){return null},t}(_))),N=a.a.div.withConfig({displayName:"Map__StyledMap",componentId:"sc-1krdu3n-0"})(["margin-bottom:1rem;.map{height:300px;.leaflet-popup-content{h6{margin-bottom:0;}p{margin:8px 0;}}}"]),W=function(e){return e.length>1?c.a.latLngBounds(e.map((function(e){return[e.frontmatter.lat,e.frontmatter.lon]}))):c.a.latLng(e[0].frontmatter.lat,e[0].frontmatter.lon).toBounds(1e3)},D=function(e,t){return e.map((function(e){var n=e.frontmatter,o=e.html;return l.a.createElement(k,{position:[n.lat,n.lon],key:n.id},t&&function(e,t){return l.a.createElement(x,null,l.a.createElement("h6",null,e.name),l.a.createElement("p",null,t.slice(0,100),"..."),l.a.createElement(i.Link,{to:"/location/"+e.id},"Read More..."))}(n,o))}))},M=function(e){var t=e.markers,n=e.popups,o=e.scrollWheelZoom;return l.a.createElement(N,null,"undefined"!=typeof window&&l.a.createElement(z,{bounds:W(t),boundsOptions:{padding:[64,64]},className:"map",gestureHandling:!0,scrollWheelZoom:o},l.a.createElement(B,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),D(t,n)))};M.defaultProps={markers:[],popups:!0,scrollWheelZoom:!1};t.a=M}}]);
//# sourceMappingURL=8f1cfb0dd20b126305c2b9422eb85491e47dfaea-20b48bf5cd27c494927f.js.map
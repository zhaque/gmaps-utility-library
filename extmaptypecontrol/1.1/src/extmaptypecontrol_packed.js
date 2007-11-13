function ExtMapTypeControl(a){this.options=a||{}}
ExtMapTypeControl.prototype=new GControl();
ExtMapTypeControl.prototype.initialize=function(b){var c=document.createElement("div");var d=this;var e=d.createButton_("Map");var f=d.createButton_("Satellite");var g=d.createButton_("Hybrid");d.assignButtonEvent_(e,b,G_NORMAL_MAP,[f,g]);d.assignButtonEvent_(f,b,G_SATELLITE_MAP,[e,g]);d.assignButtonEvent_(g,b,G_HYBRID_MAP,[f,e]);GEvent.addListener(b,"maptypechanged",function(){if(b.getCurrentMapType()==G_NORMAL_MAP){GEvent.trigger(e,"click")}else if(b.getCurrentMapType()==G_SATELLITE_MAP){GEvent.trigger(f,"click")}else if(b.getCurrentMapType()==G_HYBRID_MAP){GEvent.trigger(g,"click")}});if(d.options.showTraffic){var h=d.createButton_("Traffic");h.style.marginRight="8px";h.style.visibility='visible';h.firstChild.style.cssFloat="left";h.firstChild.style.styleFloat="left";d.trafficInfo=new GTrafficOverlay(true);d.trafficInfo.hidden=true;GEvent.addListener(d.trafficInfo,"changed",function(a){if(a){h.style.visibility='visible'}else{h.style.visibility='hidden'}});b.addOverlay(d.trafficInfo);GEvent.addDomListener(h.firstChild,"click",function(){if(d.trafficInfo.hidden){d.trafficInfo.hidden=false;d.trafficInfo.show()}else{d.trafficInfo.hidden=true;d.trafficInfo.hide()}d.toggleButton_(h.firstChild,!d.trafficInfo.hidden)});if(d.options.showTrafficKey){keyDiv=document.createElement("div");keyDiv.style.cssFloat="left";keyDiv.style.styleFloat="left";keyDiv.innerHTML="&nbsp;?&nbsp;";var j=document.createElement("div");j.style.clear="both";j.style.padding="2px";var k=[{"color":"#30ac3e","text":"&gt; 50 MPH"},{"color":"#ffcf00","text":"25-50 MPH"},{"color":"#ff0000","text":"&lt; 25 MPH"},{"color":"#c0c0c0","text":"No data"}];for(var i=0;i<k.length;i++){j.innerHTML+="<div style='text-align: left'><span style='background-color: "+k[i].color+"'>&nbsp;&nbsp</span>"+"<span style='color: "+k[i].color+"'> "+k[i].text+" </span>"+"</div>"}j.style.display="none";GEvent.addDomListener(keyDiv,"click",function(){if(d.keyExpanded){d.keyExpanded=false;j.style.display="none"}else{d.keyExpanded=true;j.style.display="block"}d.toggleButton_(keyDiv,d.keyExpanded)});d.toggleButton_(keyDiv,d.keyExpanded)}var l=document.createElement("div");l.style.clear="both";if(d.options.showTrafficKey)h.appendChild(keyDiv);h.appendChild(l);if(d.options.showTrafficKey)h.appendChild(j);d.toggleButton_(h.firstChild,false);c.appendChild(h)}c.appendChild(e);c.appendChild(f);c.appendChild(g);b.getContainer().appendChild(c);return c}
ExtMapTypeControl.prototype.createButton_=function(a){var b=document.createElement("div");this.setButtonStyle_(b);b.style.cssFloat="left";b.style.styleFloat="left";var c=document.createElement("div");c.appendChild(document.createTextNode(a));c.style.width="6em";b.appendChild(c);return b}
ExtMapTypeControl.prototype.assignButtonEvent_=function(a,b,c,d){var e=this;GEvent.addDomListener(a,"click",function(){for(var i=0;i<d.length;i++){e.toggleButton_(d[i].firstChild,false)}e.toggleButton_(a.firstChild,true);b.setMapType(c)})}
ExtMapTypeControl.prototype.toggleButton_=function(a,b){a.style.fontWeight=b?"bold":"";a.style.border="1px solid white";var c=b?["Top","Left"]:["Bottom","Right"];for(var j=0;j<c.length;j++){a.style["border"+c[j]]="1px solid #b0b0b0"}}
ExtMapTypeControl.prototype.getDefaultPosition=function(){return new GControlPosition(G_ANCHOR_TOP_RIGHT,new GSize(7,7))}
ExtMapTypeControl.prototype.setButtonStyle_=function(a){a.style.color="#000000";a.style.backgroundColor="white";a.style.font="small Arial";a.style.border="1px solid black";a.style.padding="0px";a.style.margin="0px";a.style.textAlign="center";a.style.fontSize="12px";a.style.cursor="pointer"}

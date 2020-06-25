/*
录音
https://github.com/xiangyuecn/Recorder
src: extensions/dtmf.encode.js
*/
!function(){"use strict";Recorder.DTMF_Encode=function(t,e,r,n){for(var a=Math.floor(e*(r||100)/1e3),i=Math.floor(e*(null==n?50:n)/1e3),o=new Int16Array(a+2*i),s=new Int16Array(a+2*i),u=f[t][0],c=f[t][1],d=0;d<a;d++){var h=.3*Math.sin(2*Math.PI*u*(d/e)),k=.3*Math.sin(2*Math.PI*c*(d/e));o[d+i]=32767*Math.max(-1,Math.min(1,h)),s[d+i]=32767*Math.max(-1,Math.min(1,k))}return l(o,0,s,0),o},Recorder.DTMF_EncodeMix=function(t){return new e(t)};var e=function(t){var e=this;for(var r in e.set={duration:100,mute:50,interval:250},t)e.set[r]=t[r];e.keys="",e.idx=0,e.state={keyIdx:-1,skip:0}};e.prototype={add:function(t){this.keys+=t},mix:function(t,e,r){r||(r=0);var n=this,a=n.set,i=[],o=0,s=0;t:for(var u=r;n.keys.length>n.idx&&u<t.length;u++){for(var c=t[u],d=n.state,h=n.keys.charAt(n.idx);h;){if(o=1,d.skip){var k=c.length-s;if(k<=d.skip){d.skip-=k,s=0;continue t}s+=d.skip,d.skip=0}var f=d.keyPcm;d.keyIdx==n.idx&&d.cur>=f.length&&(d.keyIdx=-1),d.keyIdx!=n.idx&&(f=Recorder.DTMF_Encode(h,e,a.duration,a.mute),d.keyIdx=n.idx,d.cur=0,d.keyPcm=f,i.push({key:h,data:f}));var x=l(c,s,f,d.cur,!0);if(d.cur=x.cur,x.cur>=f.length&&(n.idx++,h=n.keys.charAt(n.idx),d.skip=Math.floor(e*(a.interval-a.duration-2*a.mute)/1e3)),x.last>=c.length){s=0;continue t}}o=0}return{newEncodes:i,hasNext:!!o}}};var l=function(t,e,r,n,a){for(var i=e,o=n;;i++,o++){if(i>=t.length||o>=r.length)return{last:i,cur:o};a&&(t[i]=0);var s,u=t[i],c=r[o];s=u<0&&c<0?u+c-u*c/-32767:u+c-u*c/32767,t[i]=s}},f={1:[697,1209],2:[697,1336],3:[697,1477],A:[697,1633],4:[770,1209],5:[770,1336],6:[770,1477],B:[770,1633],7:[852,1209],8:[852,1336],9:[852,1477],C:[852,1633],"*":[941,1209],0:[941,1336],"#":[941,1477],D:[941,1633]}}();
var PAC_DIRECT = "DIRECT";
var PAC_PROXY = "PROXY 127.0.0.1:9989";
var debug = function () {};
var DEBUG_FLAG = true;

function ExpMatch(url, pattern) {
   pattern = pattern.replace(/\./g, '\\.');
   pattern = pattern.replace(/\*/g, '.*');
   pattern = pattern.replace(/\?/g, '.');
   var newRe = new RegExp('^'+pattern+'$');
   return newRe.test(url);
}

function FindProxyForURL (url, host) {

   if (isInNet(host, "192.168.1.1", "255.255.255.0")){return PAC_DIRECT;}
  if (shExpMatch(url, "*.youtube*")|| shExpMatch(url, "*.googlevideo*.") || shExpMatch(url, "*.gvt1*.") || shExpMatch(url, "*.video.google*.") || shExpMatch(url, "*.video.l.google.*.") || shExpMatch(url, "*.yt3.ggpht*.") || shExpMatch(url, "*.yt.be*.") || shExpMatch(url, "*.ytimg*.") || ExpMatch(url, "*.ytimg*.") || shExpMatch(url, "*.ytkids.app.goo*.") || shExpMatch(url, "*.yt-video-upload.l.google*.")){
    return PAC_PROXY;
  }else{return PAC_DIRECT;}
}

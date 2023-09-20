var PAC_DIRECT = 'DIRECT;';
var PAC_PROXY = 'PROXY 127.0.0.1:9989;';
var debug = function () {};
var DEBUG_FLAG = true;

function FindProxyForURL (url, host) {
  if (DEBUG_FLAG) {
      debug = function (host, isDirect, message) {
          alert([
              '[', host, '] ',
              isDirect ? 'DIRECT' : 'PROXY',
              ': ', message
          ].join(''));
      };
  }

  if (shExpMatch(url, ".*youtube*.")|| shExpMatch(url, ".*googlevideo*.") || shExpMatch(url, ".*gvt1*.") || hExpMatch(url, ".*video.google*.") || hExpMatch(url, ".*video.l.google.*.") || shExpMatch(url, ".*yt3.ggpht*.") || shExpMatch(url, ".*yt.be*.") || shExpMatch(url, ".*ytimg*.") || shExpMatch(url, ".*ytimg*.") || shExpMatch(url, ".*ytkids.app.goo*.") || shExpMatch(url, ".*yt-video-upload.l.google*.")){
      return PAC_PROXY;
  }else{return PAC_DIRECT;}
}

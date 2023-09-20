function FindProxyForURL (url, host) {
  // our local URLs from the domains below example.com don't need a proxy:
//.*youtube*. video.google
//  if (shExpMatch(url, ".*youtube*.")|| shExpMatch(url, ".*googlevideo*.") || shExpMatch(url, ".*gvt1*.") || hExpMatch(url, ".*video.google*.") || hExpMatch(url, ".*video.l.google.*.") || shExpMatch(url, ".*yt3.ggpht*.") || shExpMatch(url, ".*yt.be*.") || shExpMatch(url, ".*ytimg*.") || shExpMatch(url, ".*ytimg*.") || shExpMatch(url, ".*ytkids.app.goo*.") || shExpMatch(url, ".*yt-video-upload.l.google*.")){
  //    return "PROXY 127.0.0.1:9989";
//  }
 if (host == "www.youtube.com") {
    return "PROXY 127.0.0.1:9989";
   }
  else
  {
      return "DIRECT";
  }
}

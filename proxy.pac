function FindProxyForURL (url, host) {
  // our local URLs from the domains below example.com don't need a proxy:
  if (shExpMatch(host, '.*youtube.com') || shExpMatch(host, '.*googlevideo*.')) {
    return 'PROXY 127.0.0.1:9989';
  }
  
  else{
    return 'DIRECT';
  }
}

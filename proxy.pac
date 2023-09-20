function FindProxyForURL (url, host) {
  // our local URLs from the domains below example.com don't need a proxy:
  if (dnsDomainIs(host, ".youtube.com")) {
    return "PROXY 127.0.0.1:9989; PROXY proxy2.example.com:8080; DIRECT";
  }
}

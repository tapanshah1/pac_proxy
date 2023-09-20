function FindProxyForURL (url, host) {
  // our local URLs from the domains below example.com don't need a proxy:
  return "PROXY 127.0.0.1:9989;
}

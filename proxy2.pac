var PAC_DIRECT = "DIRECT";
var PAC_PROXY = "SOCKS 127.0.0.1:9989";
function FindProxyForURL(url, host) {
    if (isPlainHostName(host)) {
        return PAC_DIRECT;
    }

    if (isIPFormat(host)) {
        if (isIntranetIP(host)) {
            return PAC_DIRECT;
        }
        return PAC_DIRECT;
    }
  return PAC_PROXY;
}

var PAC_DIRECT = "DIRECT;";
var PAC_PROXY = "PROXY 127.0.0.1:9989; DIRECT";
// var DEBUG_FLAG = false; // Safari may not work if you turn on `DEBUG_FLAG`

function FindProxyForURL(url, host) {
    url = url.toLowerCase();
    host = host.toLowerCase();
    if (isPlainHostName(host) || host === '127.0.0.1') {
        return PAC_DIRECT;
    }

    if (isIPFormat(host)) {
        if (isIntranetIP(host)) {
            return PAC_DIRECT;
        }
        return PAC_DIRECT;
    }

    return PAC_PROXY;
    // return PAC_PROXY;
}
 

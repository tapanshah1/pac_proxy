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

    function testDomain(target, domains, cnRootIncluded) {
        var idxA = target.lastIndexOf('.');
        var idxB = target.lastIndexOf('.', idxA - 1);
        var hasOwnProperty = Object.hasOwnProperty;
        var suffix = cnRootIncluded ? target.substring(idxA + 1) : '';
        if (suffix === 'cn') {
            return true;
        }
        while (true) {
            if (idxB === -1) {
                if (hasOwnProperty.call(domains, target)) {
                    return true;
                } else {
                    return false;
                }
            }
            suffix = target.substring(idxB + 1);
            if (hasOwnProperty.call(domains, suffix)) {
                return true;
            }
            idxB = target.lastIndexOf('.', idxB - 1);
        }
    }
    if (testDomain(host, YOUTUBE_DOMAINS)) {
        return PAC_PROXY;
    }else{
        return PAC_DIRECT;
    }
}

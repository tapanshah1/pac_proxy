var PAC_DIRECT = "DIRECT;";
var PAC_PROXY = "PROXY 127.0.0.1:9989; DIRECT";
// var DEBUG_FLAG = false; // Safari may not work if you turn on `DEBUG_FLAG`

function isIPFormat(host) {
    return !isNaN(Number(host.split('.').join('')));
}

function isIntranetIP(ip) {
    return isInNet(ip, '0.0.0.0', '255.0.0.0') ||
           isInNet(ip, '10.0.0.0', '255.0.0.0') ||
           isInNet(ip, '100.64.0.0', '255.192.0.0') ||
           isInNet(ip, '127.0.0.0', '255.0.0.0') ||
           isInNet(ip, '169.254.0.0', '255.255.0.0') ||
           isInNet(ip, '172.16.0.0', '255.240.0.0') ||
           isInNet(ip, '192.0.0.0', '255.255.255.248') ||
           isInNet(ip, '192.0.2.0', '255.255.255.0') ||
           isInNet(ip, '192.88.99.0', '255.255.255.0') ||
           isInNet(ip, '192.168.0.0', '255.255.0.0') ||
           isInNet(ip, '198.18.0.0', '255.254.0.0') ||
           isInNet(ip, '198.51.100.0', '255.255.255.0') ||
           isInNet(ip, '203.0.113.0', '255.255.255.0') ||
           isInNet(ip, '224.0.0.0', '240.0.0.0') ||
           isInNet(ip, '233.252.0.0', '255.255.255.0') ||
           isInNet(ip, '240.0.0.0', '240.0.0.0') ||
           isInNet(ip, '255.255.255.255', '255.255.255.255');
}

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

    return PAC_DIRECT;
    // return PAC_PROXY;
}

var PAC_DIRECT = 'DIRECT;';
var PAC_PROXY = 'PROXY 127.0.0.1:9989; DIRECT';
// var DEBUG_FLAG = false; // Safari may not work if you turn on `DEBUG_FLAG`
var dangerDomains = {
       'youtube.com' : 1
   };
// var debug = function () {};

// if (DEBUG_FLAG) {
//     debug = function (host, isDirect, message) {
//         alert([
//             '[', host, '] ',
//             isDirect ? 'DIRECT' : 'PROXY',
//             ': ', message
//         ].join(''));
//     };
// }

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

/*function isChinaIPAddress(ipchars) {
    var left = 0;
    var right = CHINA_IPS.length;
    var bytes = ipchars.split('.');
    var ip = ((bytes[0] & 0xff) << 24) |
             ((bytes[1] & 0xff) << 16) |
             ((bytes[2] & 0xff) << 8) |
             (bytes[3] & 0xff);

    do {
        var mid = Math.floor((left + right) / 2);
        var ipf = (ip & CHINA_IPS[mid][1]) >>> 0;
        var m = (CHINA_IPS[mid][0] & CHINA_IPS[mid][1]) >>> 0;

        if (ipf == m) {
            return true;
        }

        if (ipf > m) {
            left = mid + 1;
        } else {
            right = mid;
        }
    } while (left + 1 <= right);

    return false;
}*/

var has = Object.hasOwnProperty;

function isYoutubeDomain(target) {
    var pos = target.lastIndexOf('.');
    var suffix = target.substring(pos + 1);

    if (suffix === 'cn') {
        return true;
    }

    pos = target.lastIndexOf('.', pos - 1);

    while (pos > 0) {
        suffix = target.substring(pos + 1);

        if (has.call(YOUTUBE_DOMAINS, suffix)) {
            return true;
        }

        pos = target.lastIndexOf('.', pos - 1);
    }

    return has.call(YOUTUBE_DOMAINS, target);
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
    return 'PROXY 127.0.0.1:9989; DIRECT';
}

var PAC_DIRECT = 'DIRECT;';
var PAC_PROXY = 'HTTPS 127.0.0.1:9989;';
// var DEBUG_FLAG = false; // Safari may not work if you turn on `DEBUG_FLAG`

var YOUTUBE_DOMAINS = {
'youtu.be': 1,
'youtube.ae': 1,
'youtube.al': 1,
'youtube.am': 1,
'youtube.at': 1,
'youtube.az': 1,
'youtube.ba': 1,
'youtube.be': 1,
'youtube.bg': 1,
'youtube.bh': 1,
'youtube.bo': 1,
'youtube.by': 1,
'youtube.ca': 1,
'youtube.cat': 1,
'youtube.ch': 1,
'youtube.cl': 1,
'youtube.co': 1,
'youtube.co.ae': 1,
'youtube.co.at': 1,
'youtube.co.cr': 1,
'youtube.co.hu': 1,
'youtube.co.id': 1,
'youtube.co.il': 1,
'youtube.co.in': 1,
'youtube.co.jp': 1,
'youtube.co.ke': 1,
'youtube.co.kr': 1,
'youtube.com': 1,
'youtube.co.ma': 1,
'youtube.com.ar': 1,
'youtube.com.au': 1,
'youtube.com.az': 1,
'youtube.com.bd': 1,
'youtube.com.bh': 1,
'youtube.com.bo': 1,
'youtube.com.br': 1,
'youtube.com.by': 1,
'youtube.com.co': 1,
'youtube.com.do': 1,
'youtube.com.ec': 1,
'youtube.com.ee': 1,
'youtube.com.eg': 1,
'youtube.com.es': 1,
'youtube.com.gh': 1,
'youtube.com.gr': 1,
'youtube.com.gt': 1,
'youtube.com.hk': 1,
'youtube.com.hn': 1,
'youtube.com.hr': 1,
'youtube.com.jm': 1,
'youtube.com.jo': 1,
'youtube.com.kw': 1,
'youtube.com.lb': 1,
'youtube.com.lv': 1,
'youtube.com.ly': 1,
'youtube.com.mk': 1,
'youtube.com.mt': 1,
'youtube.com.mx': 1,
'youtube.com.my': 1,
'youtube.com.ng': 1,
'youtube.com.ni': 1,
'youtube.com.om': 1,
'youtube.com.pa': 1,
'youtube.com.pe': 1,
'youtube.com.ph': 1,
'youtube.com.pk': 1,
'youtube.com.pt': 1,
'youtube.com.py': 1,
'youtube.com.qa': 1,
'youtube.com.ro': 1,
'youtube.com.sa': 1,
'youtube.com.sg': 1,
'youtube.com.sv': 1,
'youtube.com.tn': 1,
'youtube.com.tr': 1,
'youtube.com.tw': 1,
'youtube.com.ua': 1,
'youtube.com.uy': 1,
'youtube.com.ve': 1,
'youtube.co.nz': 1,
'youtube.co.th': 1,
'youtube.co.tz': 1,
'youtube.co.ug': 1,
'youtube.co.uk': 1,
'youtube.co.ve': 1,
'youtube.co.za': 1,
'youtube.co.zw': 1,
'youtube.cr': 1,
'youtube.cz': 1,
'youtube.de': 1,
'youtube.dk': 1,
'youtube.ee': 1,
'youtube.es': 1,
'youtube.fi': 1,
'youtube.fr': 1,
'youtube.ge': 1,
'youtube.gr': 1,
'youtube.gt': 1,
'youtube.hk': 1,
'youtube.hr': 1,
'youtube.hu': 1,
'youtube.ie': 1,
'youtube.in': 1,
'youtube.iq': 1,
'youtube.is': 1,
'youtube.it': 1,
'youtube.jo': 1,
'youtube.jp': 1,
'youtubekids.com': 1,
'youtube.kr': 1,
'youtube.kz': 1,
'youtube.la': 1,
'youtube.lk': 1,
'youtube.lt': 1,
'youtube.lu': 1,
'youtube.lv': 1,
'youtube.ly': 1,
'youtube.ma': 1,
'youtube.md': 1,
'youtube.me': 1,
'youtube.mk': 1,
'youtube.mn': 1,
'youtube.mx': 1,
'youtube.my': 1,
'youtube.ng': 1,
'youtube.ni': 1,
'youtube.nl': 1,
'youtube.no': 1,
'youtube-nocookie.com': 1,
'youtube.pa': 1,
'youtube.pe': 1,
'youtube.ph': 1,
'youtube.pk': 1,
'youtube.pl': 1,
'youtube.pr': 1,
'youtube.pt': 1,
'youtube.qa': 1,
'youtube.ro': 1,
'youtube.rs': 1,
'youtube.ru': 1,
'youtube.sa': 1,
'youtube.se': 1,
'youtube.sg': 1,
'youtube.si': 1,
'youtube.sk': 1,
'youtube.sn': 1,
'youtube.soy': 1,
'youtube.sv': 1,
'youtube.tn': 1,
'youtube.tv': 1,
'youtube.ua': 1,
'youtube.ug': 1,
'youtube.uy': 1,
'youtube.vn': 1
};

var dangerDomains = {
    // 'apple.com' : 1,
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
     return PAC_PROXY;
}

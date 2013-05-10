


/*
* @version  0.1.1
* @author   Lauri Rooden - https://github.com/litejs/browser-cookie-lite
* @license  MIT License  - http://lauri.rooden.ee/mit-license.txt
*/



function Cookie(name, value, ttl, path, domain, secure) {

	if (arguments.length > 1) {
		return document.cookie = name + "=" + escape(value) +
			(ttl ? "; expires=" + new Date(+new Date()+(1e3*ttl)).toUTCString() : "") +
			(path   ? "; path=" + path : "") +
			(domain ? "; domain=" + domain : "") +
			(secure ? "; secure" : "")
	}

	return unescape((("; "+document.cookie).split("; "+name+"=")[1]||"").split(";")[0])
}


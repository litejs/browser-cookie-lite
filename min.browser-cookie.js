function Cookie(b,d,a,f,c,e){if(arguments.length>1){return document.cookie=b+"="+escape(d)+(a?"; expires="+new Date(+new Date()+(1000*a)).toUTCString():"")+(f?"; path="+f:"")+(c?"; domain="+c:"")+(e?"; secure":"")}return unescape((("; "+document.cookie).split("; "+b+"=")[1]||"").split(";")[0])}var object=typeof exports!=="undefined"?exports:this;object.cookie=Cookie;
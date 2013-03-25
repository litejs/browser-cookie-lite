
[1]: https://raw.github.com/litejs/browser-cookie-lite/master/min.js
[2]: https://raw.github.com/litejs/browser-cookie-lite/master/browser-cookie-lite.js


Cookie
======

Cookie getter/setter for browser.
Download [compressed][1] 
(286 bytes or 224 bytes gzipped)
or [uncompressed][2] source.


### Usage

```javascript
// simple set
Cookie("test", "a")
// complex set - Cookie(name, value, ttl, path, domain, secure)
Cookie("test", "a", 60*60*24, "/api", "*.example.com", true)
// get
Cookie("test")
// destroy
Cookie("test", "", -1)
```



### Licence

Copyright (c) 2012 Lauri Rooden &lt;lauri@rooden.ee&gt;  
[The MIT License](http://lauri.rooden.ee/mit-license.txt)



[1]: https://raw.github.com/litejs/browser-cookie-lite/master/min.browser-cookie.js
[2]: https://raw.github.com/litejs/browser-cookie-lite/master/browser-cookie.js
[rfc6265]: http://tools.ietf.org/html/rfc6265



    @version  0.2.0
    @date     2013-07-13


Browser Cookie Lite
===================

Cookie getter/setter for browser.
Download [compressed][1]
(283 bytes, 237 bytes gzipped)
or [uncompressed][2] source.


API
---

```javascript
// Get a cookie
Cookie(name) -> String

// Set a cookie
Cookie(name, value, [ttl], [path], [domain], [secure]) -> String
```

-   **name** `String` - The name of the cookie.
-   **value** `String` - The value of the cookie.
-   **ttl** `Number, optional` - Time to live in seconds.
    If set to 0, or omitted, the cookie will expire
    at the end of the session (when the browser closes).
    If set to negative, the cookie is deleted.
-   **path** `String, optional` - The path in which the cookie will be available on.
    If set to '/', the cookie will be available within the entire domain.
    If set to '/foo/', the cookie will only be available within
    the /foo/ directory and all sub-directories such as /foo/bar/ of domain.
    The default value is the current path of the current document location.
-   **domain** `String, optional` - The domain that the cookie is available to.
    (e.g., 'example.com', '.example.com' (includes all subdomains), 'subdomain.example.com')
    If not specified, defaults to the host portion of the current document location.
-   **secure** `String, optional` - Indicates that the cookie should only be transmitted
    over a secure HTTPS connection from the client.


Examples
--------

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


Notes
-----

-   You SHOULD use as few and as small cookies as possible to minimize network
    bandwidth due to the Cookie header being included in every request.

-   Unless sent over a secure channel (such as HTTPS),
    the information in cookies is transmitted in the clear text.
    1.  All sensitive information conveyed in these headers is exposed to
        an eavesdropper.
    2.  A malicious intermediary could alter the headers as they travel
        in either direction, with unpredictable results.
    3.  A malicious client could alter the Cookie header before
        transmission, with unpredictable results.



External links
--------------

- [rfc6265][]



### Licence

Copyright (c) 2012 Lauri Rooden &lt;lauri@rooden.ee&gt;  
[The MIT License](http://lauri.rooden.ee/mit-license.txt)




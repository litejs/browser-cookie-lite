


/*
* @version  0.0.1
* @author   Lauri Rooden - https://github.com/litejs/browser-cookie-lite
* @license  MIT License  - http://lauri.rooden.ee/mit-license.txt
*/



function Cookie(name, value, ttl, path, domain, secure) {
	if (arguments.length > 1) return document.cookie = name + "=" + escape(value) +
			(ttl ? "; expires=" + new Date(+new Date()+(1e3*ttl)).toUTCString() : "") +
			(path   ? "; path=" + path : "") + 
			(domain ? "; domain=" + domain : "") + 
			(secure ? "; secure" : "")
	return (name = ("; "+document.cookie).split("; "+name+"=")[1]) ? unescape(name.split(";")[0]) : "";
}




/** Tests
!function(){
	var test = new TestCase("Cookie");

	test.compare(
	  Cookie("_test1","Test")
	, "_test1=Test"
	, Cookie("_test2","2")
	, "_test2=2"
	, "Cookie()");

	test.compare(
	  Cookie("_test1")
	, "Test"
	, Cookie("_test2")
	, "2"
	, Cookie("_test3_not_found")
	, ""
	, "Cookie()");

	Cookie("_test1", "", -1);

	test.compare(
	  Cookie("_test1")
	, ""
	, Cookie("_test2")
	, "2"
	, "Cookie()");
	
  test.done();
}()

//*/




/*var yourBrowser = "Chrome";
var ieLog = "We don't support IE browser!";
var webKitLog = "We support your browser = ";
var otherLog = "We hope your specific browser works fine";

var ifElseResult;
if (yourBrowser === "IE") {
    ifElseResult = ieLog;
} else if (yourBrowser === "Chrome" || yourBrowser === "Firefox" || yourBrowser === "Opera" || yourBrowser === "Safari") {
    ifElseResult = webKitLog + yourBrowser;
} else {
    ifElseResult = otherLog;
}
console.log('IF - ELSE SOLUTION: ', ifElseResult);*/
var yourBrowser = "Chrome";
 var ieLog = "We don't support IE browser!";
 var webKitLog = "We support your browser = ";
 var otherLog = "We hope your specific browser works fine";
 var switchResult;
 switch (yourBrowser) {
    case 'IE' :
     console.log(ieLog)
     alert('We dont support IE browser!')
    break;
	case 'Firef' :
	case 'Opera' :
        case 'Chrome' : 
	case 'Safari' :
    console.log(webKitLog + yourBrowser);
    alert('We support your browser = Chrome')
    break;
    default : 
    console.log(otherLog);
    alert('We hope your specific browser works fine')
    console.log('SWITCH SOLUTION : ' , switchResult);}

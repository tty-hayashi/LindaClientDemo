define("amber-lindaclient/LindaClientDemo", ["amber/boot"
//>>excludeStart("imports", pragmas.excludeImports);
, "knockout", "linda-client", "socket.io", "amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"
//>>excludeEnd("imports");
, "amber-lindaclient/LindaClient", "amber_core/Kernel-Objects"], function($boot
//>>excludeStart("imports", pragmas.excludeImports);
,ko,linda,socketIo
//>>excludeEnd("imports");
){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('LindaClientDemo');
$core.packages["LindaClientDemo"].innerEval = function (expr) { return eval(expr); };
$core.packages["LindaClientDemo"].imports = ["ko=knockout", "linda=linda-client", "socketIo=socket.io", "amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"];
$core.packages["LindaClientDemo"].transport = {"type":"amd","amdNamespace":"amber-lindaclient"};

$core.addClass('FibTuple', $globals.Tuple, [], 'LindaClientDemo');
$core.addMethod(
$core.method({
selector: "answer",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_($recv(self._class())._answerKey());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"answer",{},$globals.FibTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "answer\x0a\x0a\x09^self data at: self class answerKey",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "data", "answerKey", "class"]
}),
$globals.FibTuple);

$core.addMethod(
$core.method({
selector: "answer:",
protocol: 'accessing',
fn: function (anInteger){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_($recv(self._class())._answerKey(),anInteger);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"answer:",{anInteger:anInteger},$globals.FibTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "answer: anInteger\x0a\x0a\x09self data at: self class answerKey put: anInteger",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data", "answerKey", "class"]
}),
$globals.FibTuple);

$core.addMethod(
$core.method({
selector: "n",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_($recv(self._class())._nKey());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"n",{},$globals.FibTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "n\x0a\x0a\x09^self data at: self class nKey",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "data", "nKey", "class"]
}),
$globals.FibTuple);

$core.addMethod(
$core.method({
selector: "n:",
protocol: 'accessing',
fn: function (anIndex){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_put_($recv(self._class())._nKey(),anIndex);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"n:",{anIndex:anIndex},$globals.FibTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex"],
source: "n: anIndex\x0a\x0a\x09^self data at: self class nKey put: anIndex",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data", "nKey", "class"]
}),
$globals.FibTuple);


$core.addMethod(
$core.method({
selector: "answerKey",
protocol: 'accessor ',
fn: function (){
"use strict";

var self=this;
return "answer";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "answerKey\x0a\x09^'answer'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FibTuple.klass);

$core.addMethod(
$core.method({
selector: "fib",
protocol: 'as yet unclassified',
fn: function (){
"use strict";

var self=this;
var tuple;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
tuple=self._new();
$recv(tuple)._type_(self._fibTypeKey());
$1=tuple;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fib",{tuple:tuple},$globals.FibTuple.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fib\x0a\x09| tuple |\x0a\x09tuple := self new.\x0a\x09tuple type: self fibTypeKey.\x0a\x09^tuple",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "type:", "fibTypeKey"]
}),
$globals.FibTuple.klass);

$core.addMethod(
$core.method({
selector: "fibTypeKey",
protocol: 'accessor ',
fn: function (){
"use strict";

var self=this;
return "fib";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fibTypeKey\x0a\x09^'fib'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FibTuple.klass);

$core.addMethod(
$core.method({
selector: "nKey",
protocol: 'accessor ',
fn: function (){
"use strict";

var self=this;
return "n";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nKey\x0a\x09^'n'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FibTuple.klass);

$core.addMethod(
$core.method({
selector: "result",
protocol: 'as yet unclassified',
fn: function (){
"use strict";

var self=this;
var tuple;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
tuple=self._new();
$recv(tuple)._type_(self._resultTypeKey());
$1=tuple;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"result",{tuple:tuple},$globals.FibTuple.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "result\x0a\x09| tuple |\x0a\x09tuple := self new.\x0a\x09tuple type: self resultTypeKey.\x0a\x09^tuple",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "type:", "resultTypeKey"]
}),
$globals.FibTuple.klass);

$core.addMethod(
$core.method({
selector: "resultTypeKey",
protocol: 'accessor ',
fn: function (){
"use strict";

var self=this;
return "fib-result";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resultTypeKey\x0a\x09^'fib-result'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FibTuple.klass);

$core.addMethod(
$core.method({
selector: "tupleSpaceName",
protocol: 'tuple space',
fn: function (){
"use strict";

var self=this;
return "fibSpace";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tupleSpaceName\x0a\x0a\x09^'fibSpace'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.FibTuple.klass);


$core.addClass('GyroTuple', $globals.Tuple, [], 'LindaClientDemo');
$core.addMethod(
$core.method({
selector: "gX",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_($recv(self._class())._gXKey());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"gX",{},$globals.GyroTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "gX\x0a\x0a\x09^self data at: self class gXKey",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "data", "gXKey", "class"]
}),
$globals.GyroTuple);

$core.addMethod(
$core.method({
selector: "gX:",
protocol: 'accessing',
fn: function (aValue){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_($recv(self._class())._gXKey(),aValue);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"gX:",{aValue:aValue},$globals.GyroTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue"],
source: "gX: aValue\x0a\x0a\x09self data at: self class gXKey put: aValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data", "gXKey", "class"]
}),
$globals.GyroTuple);

$core.addMethod(
$core.method({
selector: "gY",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_($recv(self._class())._gYKey());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"gY",{},$globals.GyroTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "gY\x0a\x0a\x09^self data at: self class gYKey",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "data", "gYKey", "class"]
}),
$globals.GyroTuple);

$core.addMethod(
$core.method({
selector: "gY:",
protocol: 'accessing',
fn: function (aValue){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_($recv(self._class())._gYKey(),aValue);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"gY:",{aValue:aValue},$globals.GyroTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue"],
source: "gY: aValue\x0a\x0a\x09self data at: self class gYKey put: aValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data", "gYKey", "class"]
}),
$globals.GyroTuple);

$core.addMethod(
$core.method({
selector: "gZ",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_($recv(self._class())._gZKey());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"gZ",{},$globals.GyroTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "gZ\x0a\x0a\x09^self data at: self class gZKey",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "data", "gZKey", "class"]
}),
$globals.GyroTuple);

$core.addMethod(
$core.method({
selector: "gZ:",
protocol: 'accessing',
fn: function (aValue){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_($recv(self._class())._gZKey(),aValue);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"gZ:",{aValue:aValue},$globals.GyroTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue"],
source: "gZ: aValue\x0a\x0a\x09self data at: self class gZKey put: aValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data", "gZKey", "class"]
}),
$globals.GyroTuple);

$core.addMethod(
$core.method({
selector: "handleName",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_($recv(self._class())._handleNameKey());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleName",{},$globals.GyroTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "handleName\x0a\x0a\x09^self data at: self class handleNameKey",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "data", "handleNameKey", "class"]
}),
$globals.GyroTuple);

$core.addMethod(
$core.method({
selector: "handleName:",
protocol: 'accessing',
fn: function (aString){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_($recv(self._class())._handleNameKey(),aString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleName:",{aString:aString},$globals.GyroTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "handleName: aString\x0a\x0a\x09self data at: self class handleNameKey put: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data", "handleNameKey", "class"]
}),
$globals.GyroTuple);


$core.addMethod(
$core.method({
selector: "gXKey",
protocol: 'accessor key',
fn: function (){
"use strict";

var self=this;
return "gX";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "gXKey\x0a\x09^'gX'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.GyroTuple.klass);

$core.addMethod(
$core.method({
selector: "handleNameKey",
protocol: 'accessor key',
fn: function (){
"use strict";

var self=this;
return "handleName";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "handleNameKey\x0a\x09^'handleName'.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.GyroTuple.klass);

$core.addMethod(
$core.method({
selector: "tupleSpaceName",
protocol: 'tuple space',
fn: function (){
"use strict";

var self=this;
return "gyroSpace";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tupleSpaceName\x0a\x0a\x09^'gyroSpace'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.GyroTuple.klass);


$core.addClass('LindaClientApp', $globals.Object, ['serverUrl', 'tickets', 'lindaClient', 'viewModel'], 'LindaClientDemo');
$core.addMethod(
$core.method({
selector: "augmentPage",
protocol: 'starting',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv("#start"._asJQuery())._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._setupHandle();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._setupViewModel();
$recv(ko)._applyBindings_(self["@viewModel"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{},$globals.LindaClientApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x09\x0a\x09'#start' asJQuery click: [ self setupHandle ].\x0a\x0a\x09self setupViewModel.\x0a\x09ko applyBindings: viewModel.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["click:", "asJQuery", "setupHandle", "setupViewModel", "applyBindings:"]
}),
$globals.LindaClientApp);

$core.addMethod(
$core.method({
selector: "doAmberWith",
protocol: 'action',
fn: function (){
"use strict";

var self=this;
var tag;
function $HTMLCanvas(){return $globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
tag=$recv($recv($HTMLCanvas())._onJQuery_("#output-list"._asJQuery()))._root();
$recv(tag)._with_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(html)._li())._with_("Amber Web #with: added me!");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doAmberWith",{tag:tag},$globals.LindaClientApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doAmberWith\x0a\x09| tag |\x0a\x09tag := (HTMLCanvas onJQuery: '#output-list' asJQuery) root.\x0a\x09tag with: [ :html | html li with: 'Amber Web #with: added me!' ]",
referencedClasses: ["HTMLCanvas"],
//>>excludeEnd("ide");
messageSends: ["root", "onJQuery:", "asJQuery", "with:", "li"]
}),
$globals.LindaClientApp);

$core.addMethod(
$core.method({
selector: "doJQueryAppend",
protocol: 'action',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv("#output-list"._asJQuery())._append_("<li>jQuery append added me!</li>");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doJQueryAppend",{},$globals.LindaClientApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doJQueryAppend\x0a\x09'#output-list' asJQuery append: '<li>jQuery append added me!</li>'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["append:", "asJQuery"]
}),
$globals.LindaClientApp);

$core.addMethod(
$core.method({
selector: "doJQueryPrepend:",
protocol: 'action',
fn: function (aMsg){
"use strict";

var self=this;
var elem;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
elem="<li>"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv(elem)._html_(aMsg);
$recv("#output-list"._asJQuery())._prepend_(elem);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doJQueryPrepend:",{aMsg:aMsg,elem:elem},$globals.LindaClientApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMsg"],
source: "doJQueryPrepend: aMsg\x0a\x09| elem|\x0a\x09elem := '<li>' asJQuery.\x0a\x09elem html: aMsg.\x0a\x09'#output-list' asJQuery prepend: elem",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asJQuery", "html:", "prepend:"]
}),
$globals.LindaClientApp);

$core.addMethod(
$core.method({
selector: "doSilkTAG",
protocol: 'action',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv("#output-list"._asSilk())._LI_("Silk TAG: added me!");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doSilkTAG",{},$globals.LindaClientApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doSilkTAG\x0a\x09'#output-list' asSilk LI: 'Silk TAG: added me!'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["LI:", "asSilk"]
}),
$globals.LindaClientApp);

$core.addMethod(
$core.method({
selector: "lindaClient",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
var $1;
$1=self["@lindaClient"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lindaClient\x0a\x09^ lindaClient",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaClientApp);

$core.addMethod(
$core.method({
selector: "lindaClient:",
protocol: 'accessing',
fn: function (anObject){
"use strict";

var self=this;
self["@lindaClient"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "lindaClient: anObject\x0a\x09lindaClient := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaClientApp);

$core.addMethod(
$core.method({
selector: "serverUrl",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self["@viewModel"])._at_("serverUrl"))._value();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"serverUrl",{},$globals.LindaClientApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "serverUrl\x0a\x09^ (viewModel at: #serverUrl) value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value", "at:"]
}),
$globals.LindaClientApp);

$core.addMethod(
$core.method({
selector: "setupLindaClient",
protocol: 'starting',
fn: function (){
"use strict";

var self=this;
function $LindaClient(){return $globals.LindaClient||(typeof LindaClient=="undefined"?nil:LindaClient)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@lindaClient"]=$recv($LindaClient())._serverUrl_(self._serverUrl());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupLindaClient",{},$globals.LindaClientApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupLindaClient\x0a\x0a\x09lindaClient := LindaClient serverUrl: self serverUrl",
referencedClasses: ["LindaClient"],
//>>excludeEnd("ide");
messageSends: ["serverUrl:", "serverUrl"]
}),
$globals.LindaClientApp);

$core.addMethod(
$core.method({
selector: "setupViewModel",
protocol: 'starting',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(ko)._observable_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["observable:"]=1;
//>>excludeEnd("ctx");
self["@viewModel"]=$globals.HashedCollection._newFromPairs_(["tickets",$1,"serverUrl",$recv(ko)._observable_("https://node-linda-ststudy.herokuapp.com")]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupViewModel",{},$globals.LindaClientApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupViewModel\x0a\x0a\x09viewModel := #{\x0a\x09\x09#tickets -> (ko observable: 0) .\x0a\x09\x09#serverUrl -> (ko observable: 'https://node-linda-ststudy.herokuapp.com') \x0a\x09}.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["observable:"]
}),
$globals.LindaClientApp);

$core.addMethod(
$core.method({
selector: "tickets",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self["@viewModel"])._at_("tickets"))._value();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tickets",{},$globals.LindaClientApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tickets\x0a\x09^ (viewModel at: #tickets) value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value", "at:"]
}),
$globals.LindaClientApp);

$core.addMethod(
$core.method({
selector: "tickets:",
protocol: 'accessing',
fn: function (anInteger){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self["@viewModel"])._at_("tickets"))._value_(anInteger);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tickets:",{anInteger:anInteger},$globals.LindaClientApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "tickets: anInteger\x0a\x09(viewModel at: #tickets) value: anInteger",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "at:"]
}),
$globals.LindaClientApp);


$core.addMethod(
$core.method({
selector: "ko",
protocol: 'starting',
fn: function (){
"use strict";

var self=this;
var $1;
$1=ko;
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ko\x0a\x09^ko",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaClientApp.klass);

$core.addMethod(
$core.method({
selector: "start",
protocol: 'starting',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._new())._augmentPage();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.LindaClientApp.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09self new augmentPage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["augmentPage", "new"]
}),
$globals.LindaClientApp.klass);


$core.addClass('LindaFactorialMaster', $globals.LindaClientApp, [], 'LindaClientDemo');
$core.addMethod(
$core.method({
selector: "augmentPage",
protocol: 'starting',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1="#amber-with"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._doAmberWith();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["click:"]=1;
//>>excludeEnd("ctx");
$recv("#silk-tag"._asSilk())._on_bind_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._doSilkTAG();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv("#jquery-append"._asJQuery())._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._doJQueryAppend();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{},$globals.LindaFactorialMaster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x09'#amber-with' asJQuery click: [ self doAmberWith ].\x0a\x09'#silk-tag' asSilk on: #click bind: [ self doSilkTAG ].\x0a\x09'#jquery-append' asJQuery click: [ self doJQueryAppend ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["click:", "asJQuery", "doAmberWith", "on:bind:", "asSilk", "doSilkTAG", "doJQueryAppend"]
}),
$globals.LindaFactorialMaster);

$core.addMethod(
$core.method({
selector: "map",
protocol: 'starting',
fn: function (){
"use strict";

var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "map\x0a\x09\x22Map \x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaFactorialMaster);

$core.addMethod(
$core.method({
selector: "reduce",
protocol: 'starting',
fn: function (){
"use strict";

var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "reduce",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaFactorialMaster);


$core.addMethod(
$core.method({
selector: "example",
protocol: 'starting',
fn: function (){
"use strict";

var self=this;
var app,tickets,n,lot,ts,ans;
function $LindaFactorialMaster(){return $globals.LindaFactorialMaster||(typeof LindaFactorialMaster=="undefined"?nil:LindaFactorialMaster)}
function $LindaClient(){return $globals.LindaClient||(typeof LindaClient=="undefined"?nil:LindaClient)}
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$5;
app=$recv($LindaFactorialMaster())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$recv(app)._tickets_((5));
n=(100);
$1=n;
$2=$recv(app)._tickets();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tickets"]=1;
//>>excludeEnd("ctx");
lot=$recv($1).__slash($2);
$recv(app)._lindaClient_($recv($LindaClient())._serverUrl_("http://127.0.0.1:8931"));
ts=$recv($recv(app)._lindaClient())._tupleSpace_("factorial");
$recv((1)._to_by_(n,lot))._do_((function(i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(ts)._write_($globals.HashedCollection._newFromPairs_(["type","fact","i",i,"lot",lot]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
ans=$recv($OrderedCollection())._new();
$4=$recv(app)._tickets();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tickets"]=2;
//>>excludeEnd("ctx");
$3=(1)._to_($4);
$recv($3)._do_((function(i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(ts)._take_callback_($globals.HashedCollection._newFromPairs_(["type","ans"]),(function(err,t){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$recv(ans)._add_($recv($recv(t)._data())._at_("ans"));
$5=$recv(i).__eq($recv(app)._tickets());
if($core.assert($5)){
return $recv($recv(ans)._inject_into_((1),(function(sum,e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
return $recv(sum).__star(e);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({sum:sum,e:e},$ctx3,5)});
//>>excludeEnd("ctx");
})))._inspect();
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({err:err,t:t},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"example",{app:app,tickets:tickets,n:n,lot:lot,ts:ts,ans:ans},$globals.LindaFactorialMaster.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "example\x0a\x0a\x09| app tickets n lot ts ans|\x0a\x09app := LindaFactorialMaster new.\x0a\x09app tickets: 5.\x0a\x09n := 100.\x0a\x09lot := n / app tickets.\x0a\x09app lindaClient: (LindaClient serverUrl: 'http://127.0.0.1:8931').\x0a\x09ts := app lindaClient tupleSpace: 'factorial'.\x0a\x09(1 to: n by: lot) do:[:i | \x0a\x09\x09ts write: #{#type -> #fact . #i -> i. #lot -> lot}.].\x0a\x09ans := OrderedCollection new.\x0a\x09(1 to: app tickets) do:[:i | \x09\x0a\x09\x09ts take: #{#type -> #ans} callback: [:err :t |\x0a\x09\x09\x09ans add: (t data at: #ans).\x0a\x09\x09\x09(i = app tickets)\x0a\x09\x09\x09\x09ifTrue: [(ans inject: 1 into: [:sum :e | sum * e]) inspect].\x0a\x09\x09]].",
referencedClasses: ["LindaFactorialMaster", "LindaClient", "OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["new", "tickets:", "/", "tickets", "lindaClient:", "serverUrl:", "tupleSpace:", "lindaClient", "do:", "to:by:", "write:", "to:", "take:callback:", "add:", "at:", "data", "ifTrue:", "=", "inspect", "inject:into:", "*"]
}),
$globals.LindaFactorialMaster.klass);

$core.addMethod(
$core.method({
selector: "start",
protocol: 'starting',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._new())._augmentPage();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.LindaFactorialMaster.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09self new augmentPage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["augmentPage", "new"]
}),
$globals.LindaFactorialMaster.klass);


$core.addClass('LindaFactorialSolver', $globals.LindaClientApp, [], 'LindaClientDemo');
$core.addMethod(
$core.method({
selector: "reduce:",
protocol: 'as yet unclassified',
fn: function (n){
"use strict";

var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["n"],
source: "reduce: n",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaFactorialSolver);


$core.addMethod(
$core.method({
selector: "example",
protocol: 'as yet unclassified',
fn: function (){
"use strict";

var self=this;
var linda,tickets,base,lot,ts,ans;
function $LindaClient(){return $globals.LindaClient||(typeof LindaClient=="undefined"?nil:LindaClient)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
tickets=(5);
linda=$recv($LindaClient())._serverUrl_("http://127.0.0.1:8931");
ts=$recv(linda)._tupleSpace_("factorial");
$recv(ts)._take_callback_($globals.HashedCollection._newFromPairs_(["type","fact"]),(function(err,t){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=$recv(t)._data();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["data"]=1;
//>>excludeEnd("ctx");
base=$recv($1)._at_("i");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
base;
lot=$recv($recv(t)._data())._at_("lot");
lot;
ans=$recv($recv(base)._to_($recv($recv(base).__plus(lot)).__minus((1))))._inject_into_((1),(function(sum,elm){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(sum).__star(elm);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({sum:sum,elm:elm},$ctx2,2)});
//>>excludeEnd("ctx");
}));
ans;
return $recv(ts)._write_($globals.HashedCollection._newFromPairs_(["type","ans","i",base,"ans",ans]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({err:err,t:t},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"example",{linda:linda,tickets:tickets,base:base,lot:lot,ts:ts,ans:ans},$globals.LindaFactorialSolver.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "example\x0a\x0a\x09| linda tickets base lot ts ans|\x0a\x09tickets := 5.\x0a\x09linda := LindaClient serverUrl: 'http://127.0.0.1:8931'.\x0a\x09ts := linda tupleSpace: 'factorial'.\x0a\x09ts take: #{#type -> #fact} callback: [:err :t | \x0a\x09\x09base := t data at: 'i'.\x0a\x09\x09lot := t data at: 'lot'.\x0a\x09\x09ans := (base to: (base + lot - 1)) inject: 1 into: [:sum :elm | sum * elm].\x0a\x09\x09ts write: #{#type -> #ans . #i -> base . #ans -> ans} .\x0a\x09].\x0a\x09",
referencedClasses: ["LindaClient"],
//>>excludeEnd("ide");
messageSends: ["serverUrl:", "tupleSpace:", "take:callback:", "at:", "data", "inject:into:", "to:", "-", "+", "*", "write:"]
}),
$globals.LindaFactorialSolver.klass);


$core.addClass('LindaFibMaster', $globals.LindaClientApp, ['n', 'result'], 'LindaClientDemo');
$core.addMethod(
$core.method({
selector: "augmentPage",
protocol: 'starting',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1="#amber-with"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._doAmberWith();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["click:"]=1;
//>>excludeEnd("ctx");
$recv("#silk-tag"._asSilk())._on_bind_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._doSilkTAG();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv("#jquery-append"._asJQuery())._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._doJQueryAppend();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{},$globals.LindaFibMaster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x09'#amber-with' asJQuery click: [ self doAmberWith ].\x0a\x09'#silk-tag' asSilk on: #click bind: [ self doSilkTAG ].\x0a\x09'#jquery-append' asJQuery click: [ self doJQueryAppend ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["click:", "asJQuery", "doAmberWith", "on:bind:", "asSilk", "doSilkTAG", "doJQueryAppend"]
}),
$globals.LindaFibMaster);

$core.addMethod(
$core.method({
selector: "map",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
var requestTuple,resultTuple;
function $FibTuple(){return $globals.FibTuple||(typeof FibTuple=="undefined"?nil:FibTuple)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
resultTuple=$recv($FibTuple())._result();
$recv($recv(self._n())._to_by_((1),(-1)))._do_((function(i){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
requestTuple=$recv($FibTuple())._fib();
requestTuple;
$recv(requestTuple)._n_(i);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["n:"]=1;
//>>excludeEnd("ctx");
$1=self._tupleSpace();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["tupleSpace"]=1;
//>>excludeEnd("ctx");
return $recv($1)._write_(requestTuple);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["write:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$2=resultTuple;
$recv($2)._n_((0));
$3=$recv($2)._answer_((0));
$recv(self._tupleSpace())._write_(resultTuple);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"map",{requestTuple:requestTuple,resultTuple:resultTuple},$globals.LindaFibMaster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "map\x0a\x09| requestTuple resultTuple |\x0a\x09resultTuple := FibTuple result.\x0a\x09\x0a\x09(self n to: 1 by: -1) do: [:i |\x0a\x09\x09requestTuple := FibTuple fib.\x0a\x09\x09requestTuple n: i.\x0a\x09\x09self tupleSpace write: requestTuple].\x0a\x09\x09\x0a\x09resultTuple n: 0; answer: 0.\x0a\x09self tupleSpace write: resultTuple.",
referencedClasses: ["FibTuple"],
//>>excludeEnd("ide");
messageSends: ["result", "do:", "to:by:", "n", "fib", "n:", "write:", "tupleSpace", "answer:"]
}),
$globals.LindaFibMaster);

$core.addMethod(
$core.method({
selector: "mapProblem",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._removeIoCallbacks();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mapProblem",{},$globals.LindaFibMaster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "mapProblem\x0a\x0a\x09self removeIoCallbacks.\x0a\x09",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["removeIoCallbacks"]
}),
$globals.LindaFibMaster);

$core.addMethod(
$core.method({
selector: "n",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
var $1;
$1=self["@n"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "n\x0a\x09^ n",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaFibMaster);

$core.addMethod(
$core.method({
selector: "n:",
protocol: 'accessing',
fn: function (anObject){
"use strict";

var self=this;
self["@n"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "n: anObject\x0a\x09n := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaFibMaster);

$core.addMethod(
$core.method({
selector: "readResultTuple",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
var tuple;
function $FibTuple(){return $globals.FibTuple||(typeof FibTuple=="undefined"?nil:FibTuple)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
tuple=$recv($FibTuple())._result();
$recv(tuple)._n_(self._n());
$recv(self._tupleSpace())._read_callback_(tuple,(function(err,t){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._result_($recv(t)._answer());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({err:err,t:t},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"readResultTuple",{tuple:tuple},$globals.LindaFibMaster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "readResultTuple\x0a\x09| tuple |\x0a\x09tuple := FibTuple result.\x0a\x09tuple n: self n.\x0a\x09self tupleSpace read: tuple callback: [:err :t | \x0a\x09\x09self result: t answer]",
referencedClasses: ["FibTuple"],
//>>excludeEnd("ide");
messageSends: ["result", "n:", "n", "read:callback:", "tupleSpace", "result:", "answer"]
}),
$globals.LindaFibMaster);

$core.addMethod(
$core.method({
selector: "result",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
var $1;
$1=self["@result"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "result\x0a\x09^ result",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaFibMaster);

$core.addMethod(
$core.method({
selector: "result:",
protocol: 'accessing',
fn: function (anObject){
"use strict";

var self=this;
self["@result"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "result: anObject\x0a\x09result := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaFibMaster);

$core.addMethod(
$core.method({
selector: "tupleSpace",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
function $FibTuple(){return $globals.FibTuple||(typeof FibTuple=="undefined"?nil:FibTuple)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._lindaClient())._tupleSpace_($recv($FibTuple())._tupleSpaceName());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tupleSpace",{},$globals.LindaFibMaster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tupleSpace\x0a\x0a\x09^self lindaClient tupleSpace: FibTuple tupleSpaceName",
referencedClasses: ["FibTuple"],
//>>excludeEnd("ide");
messageSends: ["tupleSpace:", "lindaClient", "tupleSpaceName"]
}),
$globals.LindaFibMaster);


$core.addMethod(
$core.method({
selector: "example",
protocol: 'starting',
fn: function (){
"use strict";

var self=this;
var app,lot,ts,ans;
function $LindaFibMaster(){return $globals.LindaFibMaster||(typeof LindaFibMaster=="undefined"?nil:LindaFibMaster)}
function $LindaClient(){return $globals.LindaClient||(typeof LindaClient=="undefined"?nil:LindaClient)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
app=$recv($LindaFibMaster())._new();
$recv(app)._lindaClient_($recv($LindaClient())._serverUrl_("http://127.0.0.1:8931"));
$recv(app)._n_((10));
$recv(app)._map();
$recv(app)._readResultTuple();
$recv(app)._inspect();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"example",{app:app,lot:lot,ts:ts,ans:ans},$globals.LindaFibMaster.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "example\x0a\x0a\x09| app  lot ts ans|\x0a\x09app := LindaFibMaster new.\x0a\x09app lindaClient: (LindaClient serverUrl: 'http://127.0.0.1:8931').\x0a\x09app n: 10.\x0a\x09app map.\x0a\x09app readResultTuple.\x0a\x09app inspect\x0a\x09",
referencedClasses: ["LindaFibMaster", "LindaClient"],
//>>excludeEnd("ide");
messageSends: ["new", "lindaClient:", "serverUrl:", "n:", "map", "readResultTuple", "inspect"]
}),
$globals.LindaFibMaster.klass);

$core.addMethod(
$core.method({
selector: "start",
protocol: 'starting',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._new())._augmentPage();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.LindaFibMaster.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09self new augmentPage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["augmentPage", "new"]
}),
$globals.LindaFibMaster.klass);


$core.addClass('LindaFibSolver', $globals.LindaClientApp, [], 'LindaClientDemo');
$core.addMethod(
$core.method({
selector: "augmentPage",
protocol: 'starting',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1="#amber-with"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._doAmberWith();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["click:"]=1;
//>>excludeEnd("ctx");
$recv("#silk-tag"._asSilk())._on_bind_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._doSilkTAG();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv("#jquery-append"._asJQuery())._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._doJQueryAppend();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{},$globals.LindaFibSolver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x09'#amber-with' asJQuery click: [ self doAmberWith ].\x0a\x09'#silk-tag' asSilk on: #click bind: [ self doSilkTAG ].\x0a\x09'#jquery-append' asJQuery click: [ self doJQueryAppend ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["click:", "asJQuery", "doAmberWith", "on:bind:", "asSilk", "doSilkTAG", "doJQueryAppend"]
}),
$globals.LindaFibSolver);

$core.addMethod(
$core.method({
selector: "orgfib:",
protocol: 'starting',
fn: function (n){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$5,$4,$3,$1;
$2=$recv(n).__lt((2));
if($core.assert($2)){
$1=(1);
} else {
$5=$recv(n).__minus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$4=self._fib_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["fib:"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__plus(self._fib_($recv(n).__minus((2))));
$1=$recv($3).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"orgfib:",{n:n},$globals.LindaFibSolver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["n"],
source: "orgfib: n\x0a\x09\x09^ n < 2\x0a\x09\x09ifTrue: [1]\x0a\x09\x09ifFalse: [(self fib:(n - 1)) + (self fib: (n - 2)) + 1]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "<", "+", "fib:", "-"]
}),
$globals.LindaFibSolver);

$core.addMethod(
$core.method({
selector: "readResultNoWait:",
protocol: 'starting',
fn: function (anIndex){
"use strict";

var self=this;
var ans,id,tuple;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $FibTuple(){return $globals.FibTuple||(typeof FibTuple=="undefined"?nil:FibTuple)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
ans=$recv($OrderedCollection())._new();
tuple=$recv($FibTuple())._result();
$recv(tuple)._n_(anIndex);
$1=self._tupleSpace();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tupleSpace"]=1;
//>>excludeEnd("ctx");
id=$recv($1)._read_callback_(tuple,(function(err,tu){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(ans)._add_(tu);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({err:err,tu:tu},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._tupleSpace())._cancel_(id);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}))._valueWithTimeout_((1));
$2=$recv(ans)._reject_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(e)._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"readResultNoWait:",{anIndex:anIndex,ans:ans,id:id,tuple:tuple},$globals.LindaFibSolver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex"],
source: "readResultNoWait: anIndex \x0a\x09| ans id tuple |\x0a\x09ans := OrderedCollection new.\x0a\x09tuple := FibTuple result.\x0a\x09tuple n: anIndex.\x0a\x09id := self tupleSpace read: tuple callback: [:err :tu | ans add: tu ].\x0a\x09[self tupleSpace cancel: id] valueWithTimeout:1.\x0a\x09^ans reject: [:e | e isNil]",
referencedClasses: ["OrderedCollection", "FibTuple"],
//>>excludeEnd("ide");
messageSends: ["new", "result", "n:", "read:callback:", "tupleSpace", "add:", "valueWithTimeout:", "cancel:", "reject:", "isNil"]
}),
$globals.LindaFibSolver);

$core.addMethod(
$core.method({
selector: "reduce:",
protocol: 'starting',
fn: function (n){
"use strict";

var self=this;
var ans,id,value,v1,v2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$4,$6;
ans=self._readResultNoWait_(n);
$1=$recv(ans)._isEmpty();
if($core.assert($1)){
$2=$recv(n).__lt((3));
if($core.assert($2)){
self._writeResult_value_(n,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["writeResult:value:"]=1;
//>>excludeEnd("ctx");
} else {
$3=self._tupleSpace();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tupleSpace"]=1;
//>>excludeEnd("ctx");
$5=$recv(n).__minus((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$4=$globals.HashedCollection._newFromPairs_(["type","fib-result","n",$5]);
$recv($3)._read_callback_($4,(function(e1,t1){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._tupleSpace())._read_callback_($globals.HashedCollection._newFromPairs_(["type","fib-result","n",$recv(n).__minus((1))]),(function(e2,t2){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$6=$recv(t1)._data();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["data"]=1;
//>>excludeEnd("ctx");
v1=$recv($6)._at_("answer");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
v1;
v2=$recv($recv(t2)._data())._at_("answer");
v2;
return self._writeResult_value_(n,$recv(v1).__plus(v2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({e2:e2,t2:t2},$ctx2,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e1:e1,t1:t1},$ctx1,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["read:callback:"]=1;
//>>excludeEnd("ctx");
};
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reduce:",{n:n,ans:ans,id:id,value:value,v1:v1,v2:v2},$globals.LindaFibSolver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["n"],
source: "reduce: n\x0a\x09| ans id value v1 v2 |\x0a\x09ans := self readResultNoWait: n.\x0a\x09ans isEmpty\x0a\x09\x09ifTrue: [n < 3\x0a\x09\x09\x09\x09\x09ifTrue: [self writeResult: n value: 1]\x0a\x09\x09\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09\x09\x09self tupleSpace read: #{#type -> 'fib-result' . #n -> (n - 2)} callback: [:e1 :t1 |\x0a\x09\x09\x09\x09\x09\x09\x09self tupleSpace read: #{#type -> 'fib-result' .  #n -> (n - 1)} callback: [:e2 :t2 |\x0a\x09\x09\x09\x09\x09\x09\x09\x09v1 := (t1 data at: 'answer').\x0a\x09\x09\x09\x09\x09\x09\x09\x09v2 := (t2 data at: 'answer').\x0a\x09\x09\x09\x09\x09\x09\x09\x09self writeResult: n value: (v1 + v2).\x0a\x09\x09\x09\x09\x09\x09\x09\x09]\x0a\x09\x09\x09\x09\x09\x09\x09]\x0a\x09\x09\x09\x09\x09\x09]\x0a\x09\x09\x09\x09\x09]\x0a\x09",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["readResultNoWait:", "ifTrue:", "isEmpty", "ifTrue:ifFalse:", "<", "writeResult:value:", "read:callback:", "tupleSpace", "-", "at:", "data", "+"]
}),
$globals.LindaFibSolver);

$core.addMethod(
$core.method({
selector: "tupleSpace",
protocol: 'starting',
fn: function (){
"use strict";

var self=this;
function $FibTuple(){return $globals.FibTuple||(typeof FibTuple=="undefined"?nil:FibTuple)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._lindaClient())._tupleSpace_($recv($FibTuple())._tupleSpaceName());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tupleSpace",{},$globals.LindaFibSolver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tupleSpace\x0a\x0a\x09^self lindaClient tupleSpace: FibTuple tupleSpaceName",
referencedClasses: ["FibTuple"],
//>>excludeEnd("ide");
messageSends: ["tupleSpace:", "lindaClient", "tupleSpaceName"]
}),
$globals.LindaFibSolver);

$core.addMethod(
$core.method({
selector: "writeResult:value:",
protocol: 'starting',
fn: function (anIndex,aValue){
"use strict";

var self=this;
var tuple;
function $FibTuple(){return $globals.FibTuple||(typeof FibTuple=="undefined"?nil:FibTuple)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
tuple=$recv($FibTuple())._result();
$recv(tuple)._n_(anIndex);
$recv(tuple)._answer_(aValue);
$recv(self._tupleSpace())._write_(tuple);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"writeResult:value:",{anIndex:anIndex,aValue:aValue,tuple:tuple},$globals.LindaFibSolver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex", "aValue"],
source: "writeResult: anIndex value: aValue\x0a\x09| tuple |\x0a\x09tuple := FibTuple result.\x0a\x09tuple n: anIndex.\x0a\x09tuple answer: aValue.\x0a\x09self tupleSpace write: tuple",
referencedClasses: ["FibTuple"],
//>>excludeEnd("ide");
messageSends: ["result", "n:", "answer:", "write:", "tupleSpace"]
}),
$globals.LindaFibSolver);


$core.addMethod(
$core.method({
selector: "example",
protocol: 'starting',
fn: function (){
"use strict";

var self=this;
var solver;
function $LindaFibSolver(){return $globals.LindaFibSolver||(typeof LindaFibSolver=="undefined"?nil:LindaFibSolver)}
function $LindaClient(){return $globals.LindaClient||(typeof LindaClient=="undefined"?nil:LindaClient)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
solver=$recv($LindaFibSolver())._new();
$recv(solver)._lindaClient_($recv($LindaClient())._serverUrl_("http://127.0.0.1:8931"));
$recv($recv(solver)._tupleSpace())._take_callback_($globals.HashedCollection._newFromPairs_(["type","fib"]),(function(err,t){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(solver)._reduce_($recv($recv(t)._data())._at_("n"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({err:err,t:t},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"example",{solver:solver},$globals.LindaFibSolver.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "example\x0a\x0a\x09| solver |\x0a\x09solver := LindaFibSolver new.\x0a\x09solver lindaClient: (LindaClient serverUrl: 'http://127.0.0.1:8931').\x0a\x09solver tupleSpace take: #{#type -> 'fib'} callback: [:err :t | \x0a\x09\x09solver reduce: (t data at: 'n')]",
referencedClasses: ["LindaFibSolver", "LindaClient"],
//>>excludeEnd("ide");
messageSends: ["new", "lindaClient:", "serverUrl:", "take:callback:", "tupleSpace", "reduce:", "at:", "data"]
}),
$globals.LindaFibSolver.klass);

$core.addMethod(
$core.method({
selector: "start",
protocol: 'starting',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._new())._augmentPage();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.LindaFibSolver.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09self new augmentPage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["augmentPage", "new"]
}),
$globals.LindaFibSolver.klass);


$core.addClass('LindaFibWorker', $globals.LindaClientApp, [], 'LindaClientDemo');
$core.addMethod(
$core.method({
selector: "augmentPage",
protocol: 'starting',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
$1="#amber-with"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._doAmberWith();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["click:"]=1;
//>>excludeEnd("ctx");
$recv("#silk-tag"._asSilk())._on_bind_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._doSilkTAG();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$2="#jquery-append"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=2;
//>>excludeEnd("ctx");
$recv($2)._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._doJQueryAppend();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["click:"]=2;
//>>excludeEnd("ctx");
$recv("#start"._asJQuery())._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._startReduce();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}));
$3=$recv(ko)._observable_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["observable:"]=1;
//>>excludeEnd("ctx");
self["@viewModel"]=$globals.HashedCollection._newFromPairs_(["targetNumber",$3,"resultNumber",$recv(ko)._observable_((0))]);
$recv(ko)._applyBindings_(self["@viewModel"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{},$globals.LindaFibWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x09'#amber-with' asJQuery click: [ self doAmberWith ].\x0a\x09'#silk-tag' asSilk on: #click bind: [ self doSilkTAG ].\x0a\x09'#jquery-append' asJQuery click: [ self doJQueryAppend ].\x0a\x09'#start' asJQuery click: [ self startReduce ].\x0a\x09\x0a\x09viewModel := #{\x0a\x09\x09#targetNumber -> (ko observable: 0) .\x0a\x09\x09#resultNumber -> (ko observable: 0) \x0a\x09}.\x0a\x09ko applyBindings: viewModel.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["click:", "asJQuery", "doAmberWith", "on:bind:", "asSilk", "doSilkTAG", "doJQueryAppend", "startReduce", "observable:", "applyBindings:"]
}),
$globals.LindaFibWorker);

$core.addMethod(
$core.method({
selector: "orgfib:",
protocol: 'starting',
fn: function (n){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$5,$4,$3,$1;
$2=$recv(n).__lt((2));
if($core.assert($2)){
$1=(1);
} else {
$5=$recv(n).__minus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$4=self._fib_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["fib:"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__plus(self._fib_($recv(n).__minus((2))));
$1=$recv($3).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
};
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"orgfib:",{n:n},$globals.LindaFibWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["n"],
source: "orgfib: n\x0a\x09\x09^ n < 2\x0a\x09\x09ifTrue: [1]\x0a\x09\x09ifFalse: [(self fib:(n - 1)) + (self fib: (n - 2)) + 1]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "<", "+", "fib:", "-"]
}),
$globals.LindaFibWorker);

$core.addMethod(
$core.method({
selector: "readResultNoWait:",
protocol: 'starting',
fn: function (anIndex){
"use strict";

var self=this;
var ans,id,tuple;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $FibTuple(){return $globals.FibTuple||(typeof FibTuple=="undefined"?nil:FibTuple)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
ans=$recv($OrderedCollection())._new();
tuple=$recv($FibTuple())._result();
$recv(tuple)._n_(anIndex);
$1=self._tupleSpace();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tupleSpace"]=1;
//>>excludeEnd("ctx");
id=$recv($1)._read_callback_(tuple,(function(err,tu){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(ans)._add_(tu);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({err:err,tu:tu},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._tupleSpace())._cancel_(id);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}))._valueWithTimeout_((1));
$2=$recv(ans)._reject_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(e)._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"readResultNoWait:",{anIndex:anIndex,ans:ans,id:id,tuple:tuple},$globals.LindaFibWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex"],
source: "readResultNoWait: anIndex \x0a\x09| ans id tuple |\x0a\x09ans := OrderedCollection new.\x0a\x09tuple := FibTuple result.\x0a\x09tuple n: anIndex.\x0a\x09id := self tupleSpace read: tuple callback: [:err :tu | ans add: tu ].\x0a\x09[self tupleSpace cancel: id] valueWithTimeout:1.\x0a\x09^ans reject: [:e | e isNil]",
referencedClasses: ["OrderedCollection", "FibTuple"],
//>>excludeEnd("ide");
messageSends: ["new", "result", "n:", "read:callback:", "tupleSpace", "add:", "valueWithTimeout:", "cancel:", "reject:", "isNil"]
}),
$globals.LindaFibWorker);

$core.addMethod(
$core.method({
selector: "reduce:",
protocol: 'starting',
fn: function (n){
"use strict";

var self=this;
var ans,id,value,v1,v2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$4,$6;
self._doJQueryPrepend_("値: ".__comma($recv(n)._printString()));
ans=self._readResultNoWait_(n);
$1=$recv(ans)._isEmpty();
if($core.assert($1)){
$2=$recv(n).__lt((3));
if($core.assert($2)){
self._writeResult_value_(n,(1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["writeResult:value:"]=1;
//>>excludeEnd("ctx");
} else {
$3=self._tupleSpace();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tupleSpace"]=1;
//>>excludeEnd("ctx");
$5=$recv(n).__minus((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$4=$globals.HashedCollection._newFromPairs_(["type","fib-result","n",$5]);
$recv($3)._read_callback_($4,(function(e1,t1){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._tupleSpace())._read_callback_($globals.HashedCollection._newFromPairs_(["type","fib-result","n",$recv(n).__minus((1))]),(function(e2,t2){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$6=$recv(t1)._data();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["data"]=1;
//>>excludeEnd("ctx");
v1=$recv($6)._at_("answer");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
v1;
v2=$recv($recv(t2)._data())._at_("answer");
v2;
return self._writeResult_value_(n,$recv(v1).__plus(v2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({e2:e2,t2:t2},$ctx2,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e1:e1,t1:t1},$ctx1,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["read:callback:"]=1;
//>>excludeEnd("ctx");
};
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"reduce:",{n:n,ans:ans,id:id,value:value,v1:v1,v2:v2},$globals.LindaFibWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["n"],
source: "reduce: n\x0a\x09| ans id value v1 v2 |\x0a\x09self doJQueryPrepend: '値: ' , n printString.\x0a\x09ans := self readResultNoWait: n.\x0a\x09ans isEmpty\x0a\x09\x09ifTrue: [n < 3\x0a\x09\x09\x09\x09\x09ifTrue: [self writeResult: n value: 1]\x0a\x09\x09\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09\x09\x09self tupleSpace read: #{#type -> 'fib-result' . #n -> (n - 2)} callback: [:e1 :t1 |\x0a\x09\x09\x09\x09\x09\x09\x09self tupleSpace read: #{#type -> 'fib-result' .  #n -> (n - 1)} callback: [:e2 :t2 |\x0a\x09\x09\x09\x09\x09\x09\x09\x09v1 := (t1 data at: 'answer').\x0a\x09\x09\x09\x09\x09\x09\x09\x09v2 := (t2 data at: 'answer').\x0a\x09\x09\x09\x09\x09\x09\x09\x09self writeResult: n value: (v1 + v2).\x0a\x09\x09\x09\x09\x09\x09\x09\x09]\x0a\x09\x09\x09\x09\x09\x09\x09]\x0a\x09\x09\x09\x09\x09\x09]\x0a\x09\x09\x09\x09\x09]\x0a\x09",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["doJQueryPrepend:", ",", "printString", "readResultNoWait:", "ifTrue:", "isEmpty", "ifTrue:ifFalse:", "<", "writeResult:value:", "read:callback:", "tupleSpace", "-", "at:", "data", "+"]
}),
$globals.LindaFibWorker);

$core.addMethod(
$core.method({
selector: "resultNumber",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
var $1;
$1=self["@end"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resultNumber\x0a\x09^ end",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaFibWorker);

$core.addMethod(
$core.method({
selector: "startReduce",
protocol: 'action',
fn: function (){
"use strict";

var self=this;
function $Transcript(){return $globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
function $LindaClient(){return $globals.LindaClient||(typeof LindaClient=="undefined"?nil:LindaClient)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv($Transcript())._show_("pan pan pan");
$1=$recv($Transcript())._cr();
self._lindaClient_($recv($LindaClient())._serverUrl_("http://127.0.0.1:8931"));
$recv(self._tupleSpace())._take_callback_($globals.HashedCollection._newFromPairs_(["type","fib"]),(function(err,t){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._reduce_($recv($recv(t)._data())._at_("n"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({err:err,t:t},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startReduce",{},$globals.LindaFibWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "startReduce\x0a\x0a\x09Transcript show: 'pan pan pan'; cr.\x0a\x09self lindaClient: (LindaClient serverUrl: 'http://127.0.0.1:8931').\x0a\x09self tupleSpace take: #{#type -> 'fib'} callback: [:err :t | \x0a\x09\x09self reduce: (t data at: 'n')]",
referencedClasses: ["Transcript", "LindaClient"],
//>>excludeEnd("ide");
messageSends: ["show:", "cr", "lindaClient:", "serverUrl:", "take:callback:", "tupleSpace", "reduce:", "at:", "data"]
}),
$globals.LindaFibWorker);

$core.addMethod(
$core.method({
selector: "targetNumber",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
var $1;
$1=self["@start"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "targetNumber\x0a\x09^ start",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaFibWorker);

$core.addMethod(
$core.method({
selector: "tupleSpace",
protocol: 'starting',
fn: function (){
"use strict";

var self=this;
function $FibTuple(){return $globals.FibTuple||(typeof FibTuple=="undefined"?nil:FibTuple)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._lindaClient())._tupleSpace_($recv($FibTuple())._tupleSpaceName());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tupleSpace",{},$globals.LindaFibWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tupleSpace\x0a\x0a\x09^self lindaClient tupleSpace: FibTuple tupleSpaceName",
referencedClasses: ["FibTuple"],
//>>excludeEnd("ide");
messageSends: ["tupleSpace:", "lindaClient", "tupleSpaceName"]
}),
$globals.LindaFibWorker);

$core.addMethod(
$core.method({
selector: "writeResult:value:",
protocol: 'starting',
fn: function (anIndex,aValue){
"use strict";

var self=this;
var tuple;
function $FibTuple(){return $globals.FibTuple||(typeof FibTuple=="undefined"?nil:FibTuple)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._doJQueryPrepend_("結果: ".__comma($recv(aValue)._printString()));
tuple=$recv($FibTuple())._result();
$recv(tuple)._n_(anIndex);
$recv(tuple)._answer_(aValue);
$recv(self._tupleSpace())._write_(tuple);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"writeResult:value:",{anIndex:anIndex,aValue:aValue,tuple:tuple},$globals.LindaFibWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex", "aValue"],
source: "writeResult: anIndex value: aValue\x0a\x09| tuple |\x0a\x09self doJQueryPrepend: '結果: ', aValue printString.\x0a\x09tuple := FibTuple result.\x0a\x09tuple n: anIndex.\x0a\x09tuple answer: aValue.\x0a\x09self tupleSpace write: tuple",
referencedClasses: ["FibTuple"],
//>>excludeEnd("ide");
messageSends: ["doJQueryPrepend:", ",", "printString", "result", "n:", "answer:", "write:", "tupleSpace"]
}),
$globals.LindaFibWorker);


$core.addMethod(
$core.method({
selector: "example",
protocol: 'starting',
fn: function (){
"use strict";

var self=this;
var solver;
function $LindaFibWorker(){return $globals.LindaFibWorker||(typeof LindaFibWorker=="undefined"?nil:LindaFibWorker)}
function $LindaClient(){return $globals.LindaClient||(typeof LindaClient=="undefined"?nil:LindaClient)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
solver=$recv($LindaFibWorker())._new();
$recv(solver)._lindaClient_($recv($LindaClient())._serverUrl_("http://127.0.0.1:8931"));
$recv($recv(solver)._tupleSpace())._take_callback_($globals.HashedCollection._newFromPairs_(["type","fib"]),(function(err,t){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(solver)._reduce_($recv($recv(t)._data())._at_("n"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({err:err,t:t},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"example",{solver:solver},$globals.LindaFibWorker.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "example\x0a\x0a\x09| solver |\x0a\x09solver := LindaFibWorker new.\x0a\x09solver lindaClient: (LindaClient serverUrl: 'http://127.0.0.1:8931').\x0a\x09solver tupleSpace take: #{#type -> 'fib'} callback: [:err :t | \x0a\x09\x09solver reduce: (t data at: 'n')]",
referencedClasses: ["LindaFibWorker", "LindaClient"],
//>>excludeEnd("ide");
messageSends: ["new", "lindaClient:", "serverUrl:", "take:callback:", "tupleSpace", "reduce:", "at:", "data"]
}),
$globals.LindaFibWorker.klass);

$core.addMethod(
$core.method({
selector: "start",
protocol: 'starting',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._new())._augmentPage();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.LindaFibWorker.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09self new augmentPage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["augmentPage", "new"]
}),
$globals.LindaFibWorker.klass);


$core.addClass('LindaGyroMaster', $globals.LindaClientApp, [], 'LindaClientDemo');
$core.addMethod(
$core.method({
selector: "augmentPage",
protocol: 'as yet unclassified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.LindaGyroMaster.superclass.fn.prototype._augmentPage.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{},$globals.LindaGyroMaster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x09super augmentPage.\x0a\x09\x0a\x09",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["augmentPage"]
}),
$globals.LindaGyroMaster);



$core.addClass('LindaGyroWorker', $globals.LindaClientApp, [], 'LindaClientDemo');
$core.addMethod(
$core.method({
selector: "augmentPage",
protocol: 'starting',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.LindaGyroWorker.superclass.fn.prototype._augmentPage.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{},$globals.LindaGyroWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x0a\x09super augmentPage.\x0a\x0a\x09\x0a\x09",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["augmentPage"]
}),
$globals.LindaGyroWorker);

$core.addMethod(
$core.method({
selector: "devicemotionHandler",
protocol: 'starting',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $4,$3,$2,$7,$6,$5,$1;
$1=(function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv(event)._accelerationIncludingGravity();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["accelerationIncludingGravity"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._x();
$2=$recv($3)._rounded();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["rounded"]=1;
//>>excludeEnd("ctx");
$7=$recv(event)._accelerationIncludingGravity();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["accelerationIncludingGravity"]=2;
//>>excludeEnd("ctx");
$6=$recv($7)._y();
$5=$recv($6)._rounded();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["rounded"]=2;
//>>excludeEnd("ctx");
return self._gX_gY_gZ_($2,$5,$recv($recv($recv(event)._accelerationIncludingGravity())._z())._rounded());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)});
//>>excludeEnd("ctx");
});
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"devicemotionHandler",{},$globals.LindaGyroWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "devicemotionHandler\x0a\x09^[:event |\x0a\x09\x09self \x0a\x09\x09\x09gX: (event accelerationIncludingGravity x rounded)\x0a\x09\x09\x09gY: (event accelerationIncludingGravity y rounded)\x0a\x09\x09\x09gZ: (event accelerationIncludingGravity z rounded)\x09\x09\x0a\x09].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["gX:gY:gZ:", "rounded", "x", "accelerationIncludingGravity", "y", "z"]
}),
$globals.LindaGyroWorker);

$core.addMethod(
$core.method({
selector: "doAmberWith",
protocol: 'action',
fn: function (){
"use strict";

var self=this;
var tag;
function $HTMLCanvas(){return $globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
tag=$recv($recv($HTMLCanvas())._onJQuery_("#output-list"._asJQuery()))._root();
$recv(tag)._with_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(html)._li())._with_("Amber Web #with: added me!");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doAmberWith",{tag:tag},$globals.LindaGyroWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doAmberWith\x0a\x09| tag |\x0a\x09tag := (HTMLCanvas onJQuery: '#output-list' asJQuery) root.\x0a\x09tag with: [ :html | html li with: 'Amber Web #with: added me!' ]",
referencedClasses: ["HTMLCanvas"],
//>>excludeEnd("ide");
messageSends: ["root", "onJQuery:", "asJQuery", "with:", "li"]
}),
$globals.LindaGyroWorker);

$core.addMethod(
$core.method({
selector: "doJQueryAppend",
protocol: 'action',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv("#output-list"._asJQuery())._append_("<li>jQuery append added me!</li>");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doJQueryAppend",{},$globals.LindaGyroWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doJQueryAppend\x0a\x09'#output-list' asJQuery append: '<li>jQuery append added me!</li>'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["append:", "asJQuery"]
}),
$globals.LindaGyroWorker);

$core.addMethod(
$core.method({
selector: "doSilkTAG",
protocol: 'action',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv("#output-list"._asSilk())._LI_("Silk TAG: added me!");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doSilkTAG",{},$globals.LindaGyroWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doSilkTAG\x0a\x09'#output-list' asSilk LI: 'Silk TAG: added me!'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["LI:", "asSilk"]
}),
$globals.LindaGyroWorker);

$core.addMethod(
$core.method({
selector: "gX",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self["@viewModel"])._at_("gX"))._value();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"gX",{},$globals.LindaGyroWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "gX\x0a\x09^(viewModel at: #gX) value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value", "at:"]
}),
$globals.LindaGyroWorker);

$core.addMethod(
$core.method({
selector: "gX:",
protocol: 'accessing',
fn: function (aValue){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self["@viewModel"])._at_("gX"))._value_(aValue);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"gX:",{aValue:aValue},$globals.LindaGyroWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue"],
source: "gX: aValue\x0a\x09(viewModel at: #gX) value: aValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "at:"]
}),
$globals.LindaGyroWorker);

$core.addMethod(
$core.method({
selector: "gX:gY:gZ:",
protocol: 'updating',
fn: function (xValue,yValue,zValue){
"use strict";

var self=this;
var tuple;
function $GyroTuple(){return $globals.GyroTuple||(typeof GyroTuple=="undefined"?nil:GyroTuple)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $4,$3,$6,$5,$2,$8,$7,$1,$10,$9,$12,$11,$13,$19,$18,$17,$16,$15,$14;
$4=self._gX();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["gX"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__tild_eq(xValue);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["~="]=1;
//>>excludeEnd("ctx");
$6=self._gY();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["gY"]=1;
//>>excludeEnd("ctx");
$5=$recv($6).__tild_eq(yValue);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["~="]=2;
//>>excludeEnd("ctx");
$2=$recv($3).__and($5);
$8=self._gZ();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["gZ"]=1;
//>>excludeEnd("ctx");
$7=$recv($8).__tild_eq(zValue);
$1=$recv($2).__and($7);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["&"]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
$10=$recv(xValue)._rounded();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["rounded"]=1;
//>>excludeEnd("ctx");
$9=$recv($10).__star((10));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
self._gX_($9);
$12=$recv(yValue)._rounded();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["rounded"]=2;
//>>excludeEnd("ctx");
$11=$recv($12).__star((10));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=2;
//>>excludeEnd("ctx");
self._gY_($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["gY:"]=1;
//>>excludeEnd("ctx");
self._gZ_($recv($recv(zValue)._rounded()).__star((10)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["gZ:"]=1;
//>>excludeEnd("ctx");
$13=$recv(self["@viewModel"])._at_("rotateYX");
$19=$recv(yValue)._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printString"]=1;
//>>excludeEnd("ctx");
$18="rotateX(".__comma($19);
$17=$recv($18).__comma("deg)");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
$16=$recv($17).__comma(" rotateY(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$15=$recv($16).__comma($recv(xValue)._printString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$14=$recv($15).__comma("deg)");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($13)._value_($14);
tuple=$recv($GyroTuple())._new();
tuple;
$recv(tuple)._handleName_(self._handleName());
$recv(tuple)._gx_(self._gX());
$recv(tuple)._gY_(self._gY());
$recv(tuple)._gZ_(self._gZ());
$recv(self._tupleSpace())._write_(tuple);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"gX:gY:gZ:",{xValue:xValue,yValue:yValue,zValue:zValue,tuple:tuple},$globals.LindaGyroWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["xValue", "yValue", "zValue"],
source: "gX: xValue gY: yValue gZ: zValue\x0a\x09| tuple |\x0a\x09(self gX ~= xValue) & (self gY ~= yValue) & (self gZ ~= zValue) \x0a\x09\x09ifTrue: [\x0a\x09\x0a\x09\x09\x09self gX: (xValue rounded) * 10.\x0a\x09\x09\x09self gY: (yValue rounded) * 10.\x0a\x09\x09\x09self gZ: (zValue rounded) * 10.\x0a\x0a\x09\x09\x09(viewModel at: #rotateYX) value: 'rotateX(', yValue printString, 'deg)', \x0a\x09\x09\x09\x09' rotateY(', xValue printString, 'deg)'.\x0a\x09\x09\x09tuple := GyroTuple new.\x0a\x09\x09\x09tuple handleName: self handleName.\x0a\x09\x09\x09tuple gx: self gX.\x0a\x09\x09\x09tuple gY: self gY.\x0a\x09\x09\x09tuple gZ: self gZ.\x0a\x09\x09\x09self tupleSpace write: tuple.\x0a\x09\x09]\x0a\x09",
referencedClasses: ["GyroTuple"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "&", "~=", "gX", "gY", "gZ", "gX:", "*", "rounded", "gY:", "gZ:", "value:", "at:", ",", "printString", "new", "handleName:", "handleName", "gx:", "write:", "tupleSpace"]
}),
$globals.LindaGyroWorker);

$core.addMethod(
$core.method({
selector: "gY",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self["@viewModel"])._at_("gY"))._value();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"gY",{},$globals.LindaGyroWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "gY\x0a\x09^(viewModel at: #gY) value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value", "at:"]
}),
$globals.LindaGyroWorker);

$core.addMethod(
$core.method({
selector: "gY:",
protocol: 'accessing',
fn: function (aValue){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self["@viewModel"])._at_("gY"))._value_(aValue);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"gY:",{aValue:aValue},$globals.LindaGyroWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue"],
source: "gY: aValue\x0a\x09(viewModel at: #gY) value: aValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "at:"]
}),
$globals.LindaGyroWorker);

$core.addMethod(
$core.method({
selector: "gZ",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self["@viewModel"])._at_("gZ"))._value();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"gZ",{},$globals.LindaGyroWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "gZ\x0a\x09^(viewModel at: #gZ) value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value", "at:"]
}),
$globals.LindaGyroWorker);

$core.addMethod(
$core.method({
selector: "gZ:",
protocol: 'accessing',
fn: function (aValue){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self["@viewModel"])._at_("gZ"))._value_(aValue);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"gZ:",{aValue:aValue},$globals.LindaGyroWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue"],
source: "gZ: aValue\x0a\x09(viewModel at: #gZ) value: aValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "at:"]
}),
$globals.LindaGyroWorker);

$core.addMethod(
$core.method({
selector: "handleName",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self["@viewModel"])._at_("handleName"))._value();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"handleName",{},$globals.LindaGyroWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "handleName \x0a\x09^(viewModel at: #handleName ) value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value", "at:"]
}),
$globals.LindaGyroWorker);

$core.addMethod(
$core.method({
selector: "olddevicemotionHandler",
protocol: 'starting',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$6,$5,$4,$3,$7,$11,$10,$9,$8,$12,$13,$19,$18,$17,$16,$15,$14,$1;
$1=(function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(self["@viewModel"])._at_("gX");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$6=$recv(event)._accelerationIncludingGravity();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["accelerationIncludingGravity"]=1;
//>>excludeEnd("ctx");
$5=$recv($6)._x();
$4=$recv($5)._rounded();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["rounded"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__star((10));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["*"]=1;
//>>excludeEnd("ctx");
$recv($2)._value_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value:"]=1;
//>>excludeEnd("ctx");
$7=$recv(self["@viewModel"])._at_("gY");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
$11=$recv(event)._accelerationIncludingGravity();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["accelerationIncludingGravity"]=2;
//>>excludeEnd("ctx");
$10=$recv($11)._y();
$9=$recv($10)._rounded();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["rounded"]=2;
//>>excludeEnd("ctx");
$8=$recv($9).__star((10));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["*"]=2;
//>>excludeEnd("ctx");
$recv($7)._value_($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value:"]=2;
//>>excludeEnd("ctx");
$12=$recv(self["@viewModel"])._at_("gZ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=3;
//>>excludeEnd("ctx");
$recv($12)._value_($recv($recv($recv($recv(event)._accelerationIncludingGravity())._z())._rounded()).__star((10)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value:"]=3;
//>>excludeEnd("ctx");
$13=$recv(self["@viewModel"])._at_("rotateYX");
$19=$recv(self._gY())._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["printString"]=1;
//>>excludeEnd("ctx");
$18="rotateX(".__comma($19);
$17=$recv($18).__comma("deg)");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=4;
//>>excludeEnd("ctx");
$16=$recv($17).__comma(" rotateY(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=3;
//>>excludeEnd("ctx");
$15=$recv($16).__comma($recv(self._gX())._printString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=2;
//>>excludeEnd("ctx");
$14=$recv($15).__comma("deg)");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $recv($13)._value_($14);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)});
//>>excludeEnd("ctx");
});
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"olddevicemotionHandler",{},$globals.LindaGyroWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "olddevicemotionHandler\x0a\x09^[:event |\x0a\x09\x09\x22(viewModel at: #accX) value: event acceleration x.\x0a\x09\x09(viewModel at: #accY) value: event acceleration y.\x0a\x09\x09(viewModel at: #accZ) value: event acceleration z.\x22\x0a\x09\x09\x0a\x09\x09(viewModel at: #gX) value: (event accelerationIncludingGravity x rounded) * 10.\x0a\x09\x09(viewModel at: #gY) value: (event accelerationIncludingGravity y rounded) * 10.\x0a\x09\x09(viewModel at: #gZ) value: (event accelerationIncludingGravity z rounded) * 10.\x0a\x09\x09\x0a\x09\x09\x22\x0a\x09\x09(viewModel at: #tiltLR) value: event rotationRate gamma rounded.\x0a\x09\x09(viewModel at: #tiltFB) value: event rotationRate beta rounded.\x0a\x09\x09(viewModel at: #webRotate) value: 'rotate(', (viewModel at: #tiltLR) value printString, 'deg) rotate3d(1,0,0, ', ((viewModel at: #tiltFB) value * -1) printString, 'deg)' .\x0a\x09\x09(viewModel at: #mozRotate) value: 'rotate(', (viewModel at: #tiltLR) value printString, 'deg)' .\x0a\x09\x09\x22\x0a\x09\x09(viewModel at: #rotateYX) value: 'rotateX(', (self gY) printString, 'deg)', \x0a\x09\x09' rotateY(', (self gX) printString, 'deg)'.\x0a\x09\x09\x0a\x09\x09\x0a\x09].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "at:", "*", "rounded", "x", "accelerationIncludingGravity", "y", "z", ",", "printString", "gY", "gX"]
}),
$globals.LindaGyroWorker);

$core.addMethod(
$core.method({
selector: "setupHandle",
protocol: 'action',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._setupLindaClient();
$recv(window)._addEventListener_with_("devicemotion",self._devicemotionHandler());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupHandle",{},$globals.LindaGyroWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupHandle\x0a\x0a\x09self setupLindaClient.\x0a\x09window addEventListener: #devicemotion with: self devicemotionHandler.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setupLindaClient", "addEventListener:with:", "devicemotionHandler"]
}),
$globals.LindaGyroWorker);

$core.addMethod(
$core.method({
selector: "setupViewModel",
protocol: 'starting',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$5,$6,$8,$14,$13,$12,$11,$10,$9,$7,$2;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.LindaGyroWorker.superclass.fn.prototype._setupViewModel.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=self["@viewModel"];
$3=$recv(ko)._observable_("handle name");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["observable:"]=1;
//>>excludeEnd("ctx");
$4=$recv(ko)._observable_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["observable:"]=2;
//>>excludeEnd("ctx");
$5=$recv(ko)._observable_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["observable:"]=3;
//>>excludeEnd("ctx");
$6=$recv(ko)._observable_((0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["observable:"]=4;
//>>excludeEnd("ctx");
$8=ko;
$14=(30)._printString();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["printString"]=1;
//>>excludeEnd("ctx");
$13="rotateX(".__comma($14);
$12=$recv($13).__comma("deg)");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
$11=$recv($12).__comma(" rotateY(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$10=$recv($11).__comma((30)._printString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$9=$recv($10).__comma("deg)");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$7=$recv($8)._observable_($9);
$2=$globals.HashedCollection._newFromPairs_(["handleName",$3,"gX",$4,"gY",$5,"gZ",$6,"rotateYX",$7]);
$recv($1)._addAll_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupViewModel",{},$globals.LindaGyroWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupViewModel\x0a\x0a\x09super setupViewModel.\x0a\x09\x0a\x09viewModel addAll: #{\x0a\x09\x09#handleName -> (ko observable: 'handle name') .\x0a\x09\x09#gX -> (ko observable: 0) .\x0a\x09\x09#gY -> (ko observable: 0) .\x0a\x09\x09#gZ -> (ko observable: 0) .\x0a\x09\x09\x0a\x09\x09\x22\x0a\x09\x09#tiltLR -> (ko observable: 0).\x0a\x09\x09#tiltFB -> (ko observable: 0).\x0a\x09\x09#webRotate -> (ko observable: 'rotate(', (30) printString, 'deg) rotate3d(1,0,0, ', ((30) * -1) printString, 'deg)').\x0a\x09\x09#mozRotate -> (ko observable: 'rotate(', (30) printString, 'deg)').\x0a\x09\x09\x22\x0a\x09\x09\x0a\x09\x09#rotateYX -> (ko observable: \x0a\x09\x09'rotateX(', 30 printString, 'deg)', \x0a\x09\x09' rotateY(', 30 printString, 'deg)')\x0a\x09}.\x0a\x09\x0a\x09\x0a\x09",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setupViewModel", "addAll:", "observable:", ",", "printString"]
}),
$globals.LindaGyroWorker);

$core.addMethod(
$core.method({
selector: "tupeSpace",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
function $GyroTuple(){return $globals.GyroTuple||(typeof GyroTuple=="undefined"?nil:GyroTuple)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._lindaClient())._tupleSpace_($recv($GyroTuple())._tupleSpaceName());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tupeSpace",{},$globals.LindaGyroWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tupeSpace\x0a\x09^self lindaClient tupleSpace: GyroTuple tupleSpaceName",
referencedClasses: ["GyroTuple"],
//>>excludeEnd("ide");
messageSends: ["tupleSpace:", "lindaClient", "tupleSpaceName"]
}),
$globals.LindaGyroWorker);


});

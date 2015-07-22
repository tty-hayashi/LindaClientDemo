define("amber-lindaclient/LindaClient", ["amber/boot"
//>>excludeStart("imports", pragmas.excludeImports);
, "linda-client", "socket.io", "amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"
//>>excludeEnd("imports");
, "amber_core/Kernel-Objects"], function($boot
//>>excludeStart("imports", pragmas.excludeImports);
,linda,socketIo
//>>excludeEnd("imports");
){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('LindaClient');
$core.packages["LindaClient"].innerEval = function (expr) { return eval(expr); };
$core.packages["LindaClient"].imports = ["linda=linda-client", "socketIo=socket.io", "amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"];
$core.packages["LindaClient"].transport = {"type":"amd","amdNamespace":"amber-lindaclient"};

$core.addClass('LindaClientApp', $globals.Object, ['lindaClient', 'tickets'], 'LindaClient');
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
$recv(window)._addEventListener_with_("deviceorientation",self._deviceorientationHandler());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{},$globals.LindaClientApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x09'#amber-with' asJQuery click: [ self doAmberWith ].\x0a\x09'#silk-tag' asSilk on: #click bind: [ self doSilkTAG ].\x0a\x09'#jquery-append' asJQuery click: [ self doJQueryAppend ].\x0a\x09window addEventListener: #deviceorientation with: self deviceorientationHandler",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["click:", "asJQuery", "doAmberWith", "on:bind:", "asSilk", "doSilkTAG", "doJQueryAppend", "addEventListener:with:", "deviceorientationHandler"]
}),
$globals.LindaClientApp);

$core.addMethod(
$core.method({
selector: "deviceorientationHandler",
protocol: 'starting',
fn: function (){
"use strict";

var self=this;
function $Transcript(){return $globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$1=(function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._alpha_($recv(event)._alpha());
self._beta_($recv(event)._beta());
self._gamma_($recv(event)._gamma());
$recv($Transcript())._show_($recv(event)._printString());
$2=$recv($Transcript())._cr();
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)});
//>>excludeEnd("ctx");
});
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deviceorientationHandler",{},$globals.LindaClientApp)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "deviceorientationHandler\x0a\x09^[:event |\x0a\x09\x09self alpha: event alpha.\x0a\x09\x09self beta: event beta.\x0a\x09\x09self gamma: event gamma.\x0a\x09\x09Transcript show: event printString; cr.].",
referencedClasses: ["Transcript"],
//>>excludeEnd("ide");
messageSends: ["alpha:", "alpha", "beta:", "beta", "gamma:", "gamma", "show:", "printString", "cr"]
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
elem="<p/>"._asJQuery();
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
source: "doJQueryPrepend: aMsg\x0a\x09| elem|\x0a\x09elem := '<p/>' asJQuery.\x0a\x09elem html: aMsg.\x0a\x09'#output-list' asJQuery prepend: elem",
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
selector: "tickets",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
var $1;
$1=self["@tickets"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tickets\x0a\x09^ tickets",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaClientApp);

$core.addMethod(
$core.method({
selector: "tickets:",
protocol: 'accessing',
fn: function (anObject){
"use strict";

var self=this;
self["@tickets"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "tickets: anObject\x0a\x09tickets := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaClientApp);


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


$core.addClass('LindaFactorialMaster', $globals.LindaClientApp, [], 'LindaClient');
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
source: "map",
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


$core.addClass('LindaFactorialSolver', $globals.LindaClientApp, [], 'LindaClient');

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


$core.addClass('LindaFibMaster', $globals.LindaClientApp, ['n', 'result'], 'LindaClient');
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
selector: "readTuple",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._tupleSpace())._read_callback_($globals.HashedCollection._newFromPairs_(["type","fib-result","n",self._n()]),(function(err,t){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._result_($recv($recv(t)._data())._at_("value"));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({err:err,t:t},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"readTuple",{},$globals.LindaFibMaster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "readTuple\x0a\x0a\x09self tupleSpace read: #{#type -> 'fib-result' . #n -> self n} callback: [:err :t | \x0a\x09\x09self result: (t data at: 'value')]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["read:callback:", "tupleSpace", "n", "result:", "at:", "data"]
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._lindaClient())._tupleSpace_("fibonatch");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tupleSpace",{},$globals.LindaFibMaster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tupleSpace\x0a\x0a\x09^self lindaClient tupleSpace: 'fibonatch'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tupleSpace:", "lindaClient"]
}),
$globals.LindaFibMaster);

$core.addMethod(
$core.method({
selector: "writeTuple",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._tupleSpace())._write_($globals.HashedCollection._newFromPairs_(["type","fib","n",self._n()]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"writeTuple",{},$globals.LindaFibMaster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "writeTuple\x0a\x0a\x09self tupleSpace write: #{#type -> 'fib' . #n -> self n}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["write:", "tupleSpace", "n"]
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
$recv(app)._n_((100));
$recv(app)._writeTuple();
$recv(app)._readTuple();
$recv(app)._inspect();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"example",{app:app,lot:lot,ts:ts,ans:ans},$globals.LindaFibMaster.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "example\x0a\x0a\x09| app  lot ts ans|\x0a\x09app := LindaFibMaster new.\x0a\x09app lindaClient: (LindaClient serverUrl: 'http://127.0.0.1:8931').\x0a\x09app n: 100.\x0a\x09app writeTuple.\x0a\x09app readTuple.\x0a\x09app inspect\x0a\x09",
referencedClasses: ["LindaFibMaster", "LindaClient"],
//>>excludeEnd("ide");
messageSends: ["new", "lindaClient:", "serverUrl:", "n:", "writeTuple", "readTuple", "inspect"]
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


$core.addClass('LindaFibSolver', $globals.LindaClientApp, [], 'LindaClient');
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
selector: "fib2:",
protocol: 'starting',
fn: function (n){
"use strict";

var self=this;
var ans,id,value,v1,v2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._tupleSpace();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tupleSpace"]=1;
//>>excludeEnd("ctx");
$recv($1)._write_($globals.HashedCollection._newFromPairs_(["type","fib","n",n]));
$recv(self._tupleSpace())._read_callback_($globals.HashedCollection._newFromPairs_(["type","fib-result","n",n]),(function(err,t){

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fib2:",{n:n,ans:ans,id:id,value:value,v1:v1,v2:v2},$globals.LindaFibSolver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["n"],
source: "fib2: n\x0a\x09| ans id value v1 v2 |\x0a\x09self tupleSpace write: #{#type -> 'fib' . #n -> n}.\x0a\x09self tupleSpace read: #{#type -> 'fib-result' . #n -> n } callback: [:err :t | ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["write:", "tupleSpace", "read:callback:"]
}),
$globals.LindaFibSolver);

$core.addMethod(
$core.method({
selector: "fib:",
protocol: 'starting',
fn: function (n){
"use strict";

var self=this;
var ans,id,value,v1,v2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$5,$4,$6;
ans=self._readIndex_(n);
$1=$recv(ans)._isEmpty();
if($core.assert($1)){
$2=$recv(n).__lt((2));
if($core.assert($2)){
value=(1);
value;
} else {
$3=$recv(n).__minus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
v1=self._fib2_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["fib2:"]=1;
//>>excludeEnd("ctx");
v1;
v2=self._fib2_($recv(n).__minus((2)));
v2;
$5=$recv(v1)._notNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["notNil"]=1;
//>>excludeEnd("ctx");
$4=$recv($5).__and($recv(v2)._notNil());
if($core.assert($4)){
value=$recv($recv(v1).__plus(v2)).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
value;
} else {
return self;
};
};
self._writeIndex_value_(n,value);
} else {
value=$recv($recv(ans)._data())._at_("value");
value;
};
$6=value;
return $6;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fib:",{n:n,ans:ans,id:id,value:value,v1:v1,v2:v2},$globals.LindaFibSolver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["n"],
source: "fib: n\x0a\x09| ans id value v1 v2 |\x0a\x09ans := self readIndex: n.\x0a\x09ans isEmpty\x0a\x09\x09ifTrue: [n < 2\x0a\x09\x09\x09\x09\x09ifTrue: [value := 1]\x0a\x09\x09\x09\x09\x09ifFalse: [v1 := (self fib2:(n - 1)).\x0a\x09\x09\x09\x09\x09\x09\x09v2 := (self fib2: (n - 2)). \x0a\x09\x09\x09\x09\x09\x09\x09(v1 notNil & v2 notNil)\x0a\x09\x09\x09\x09\x09\x09\x09\x09ifTrue: [value := v1 + v2 + 1]\x0a\x09\x09\x09\x09\x09\x09\x09\x09ifFalse: [^self]].\x0a\x09\x09\x09\x09self writeIndex: n value: value]\x0a\x09\x09ifFalse: [value := ans data at: 'value'].\x0a\x09^value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["readIndex:", "ifTrue:ifFalse:", "isEmpty", "<", "fib2:", "-", "&", "notNil", "+", "writeIndex:value:", "at:", "data"]
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
selector: "readIndex:",
protocol: 'starting',
fn: function (anIndex){
"use strict";

var self=this;
var ans,id;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
ans=$recv($OrderedCollection())._new();
$1=self._tupleSpace();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tupleSpace"]=1;
//>>excludeEnd("ctx");
id=$recv($1)._read_callback_($globals.HashedCollection._newFromPairs_(["type","fib-result","n",anIndex]),(function(err,tu){
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
}))._valueWithTimeout_((10));
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
}, function($ctx1) {$ctx1.fill(self,"readIndex:",{anIndex:anIndex,ans:ans,id:id},$globals.LindaFibSolver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex"],
source: "readIndex: anIndex \x0a\x09| ans id |\x0a\x09ans := OrderedCollection new.\x0a\x09id := self tupleSpace read: #{#type -> 'fib-result' . #n -> anIndex } callback: [:err :tu | ans add: tu ].\x0a\x09[self tupleSpace cancel: id] valueWithTimeout:10.\x0a\x09^ans reject: [:e | e isNil]",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["new", "read:callback:", "tupleSpace", "add:", "valueWithTimeout:", "cancel:", "reject:", "isNil"]
}),
$globals.LindaFibSolver);

$core.addMethod(
$core.method({
selector: "readIndexWait:",
protocol: 'starting',
fn: function (anIndex){
"use strict";

var self=this;
var ans,id;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
ans=$recv($OrderedCollection())._new();
id=$recv(self._tupleSpace())._read_callback_($globals.HashedCollection._newFromPairs_(["type","fib-result","n",anIndex]),(function(err,tu){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(ans)._add_(tu);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({err:err,tu:tu},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=$recv(ans)._reject_((function(e){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(e)._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"readIndexWait:",{anIndex:anIndex,ans:ans,id:id},$globals.LindaFibSolver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex"],
source: "readIndexWait: anIndex \x0a\x09| ans id |\x0a\x09ans := OrderedCollection new.\x0a\x09id := self tupleSpace read: #{#type -> 'fib-result' . #n -> anIndex } callback: [:err :tu | ans add: tu ].\x0a\x09^ans reject: [:e | e isNil]",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["new", "read:callback:", "tupleSpace", "add:", "reject:", "isNil"]
}),
$globals.LindaFibSolver);

$core.addMethod(
$core.method({
selector: "tupleSpace",
protocol: 'starting',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._lindaClient())._tupleSpace_("fibonatch");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tupleSpace",{},$globals.LindaFibSolver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tupleSpace\x0a\x0a\x09^self lindaClient tupleSpace: 'fibonatch'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tupleSpace:", "lindaClient"]
}),
$globals.LindaFibSolver);

$core.addMethod(
$core.method({
selector: "writeIndex:value:",
protocol: 'starting',
fn: function (anIndex,aValue){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._tupleSpace())._write_($globals.HashedCollection._newFromPairs_(["type","fib-result","n",anIndex,"value",aValue]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"writeIndex:value:",{anIndex:anIndex,aValue:aValue},$globals.LindaFibSolver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex", "aValue"],
source: "writeIndex: anIndex value: aValue\x0a\x09self tupleSpace write: #{#type -> 'fib-result' . #n -> anIndex . #value -> aValue}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["write:", "tupleSpace"]
}),
$globals.LindaFibSolver);

$core.addMethod(
$core.method({
selector: "writeValue:",
protocol: 'starting',
fn: function (n){
"use strict";

var self=this;
var ans,id;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$5,$4,$3;
ans=$recv($OrderedCollection())._new();
$1=self._tupleSpace();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["tupleSpace"]=1;
//>>excludeEnd("ctx");
id=$recv($1)._read_callback_($globals.HashedCollection._newFromPairs_([]),(function(err,tu){
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
}))._valueWithTimeout_((10));
$2=$recv(ans)._isEmpty();
if($core.assert($2)){
(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$5=$recv(n).__minus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$4=self._fib_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["fib:"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__plus(self._fib_($recv(n).__minus((2))));
return $recv($3).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["+"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
});
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"writeValue:",{n:n,ans:ans,id:id},$globals.LindaFibSolver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["n"],
source: "writeValue: n\x0a\x09| ans id |\x0a\x09ans := OrderedCollection new.\x0a\x09id := self tupleSpace read: #{} callback: [:err :tu | ans add: tu ].\x0a\x09[self tupleSpace cancel: id] valueWithTimeout:10.\x0a\x09ans isEmpty\x0a\x09\x09ifTrue: [[(self fib:(n - 1)) + (self fib: (n - 2)) + 1]].",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["new", "read:callback:", "tupleSpace", "add:", "valueWithTimeout:", "cancel:", "ifTrue:", "isEmpty", "+", "fib:", "-"]
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
return $recv(solver)._fib_($recv($recv(t)._data())._at_("n"));
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
source: "example\x0a\x0a\x09| solver |\x0a\x09solver := LindaFibSolver new.\x0a\x09solver lindaClient: (LindaClient serverUrl: 'http://127.0.0.1:8931').\x0a\x09solver tupleSpace take: #{#type -> 'fib'} callback: [:err :t | \x0a\x09\x09solver fib: (t data at: 'n')]",
referencedClasses: ["LindaFibSolver", "LindaClient"],
//>>excludeEnd("ide");
messageSends: ["new", "lindaClient:", "serverUrl:", "take:callback:", "tupleSpace", "fib:", "at:", "data"]
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


$core.addClass('LindaGyroMaster', $globals.LindaClientApp, [], 'LindaClient');


$core.addClass('LindaGyroSolver', $globals.LindaClientApp, ['alpha', 'beta', 'gamma'], 'LindaClient');
$core.addMethod(
$core.method({
selector: "alpha",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
var $1;
$1=self["@alpha"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "alpha\x0a\x09^ alpha",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaGyroSolver);

$core.addMethod(
$core.method({
selector: "alpha:",
protocol: 'accessing',
fn: function (anObject){
"use strict";

var self=this;
self["@alpha"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "alpha: anObject\x0a\x09alpha := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaGyroSolver);

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
$recv(window)._addEventListener_with_("deviceorientation",self._deviceorientationHandler());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{},$globals.LindaGyroSolver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x09'#amber-with' asJQuery click: [ self doAmberWith ].\x0a\x09'#silk-tag' asSilk on: #click bind: [ self doSilkTAG ].\x0a\x09'#jquery-append' asJQuery click: [ self doJQueryAppend ].\x0a\x09window addEventListener: #deviceorientation with: self deviceorientationHandler",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["click:", "asJQuery", "doAmberWith", "on:bind:", "asSilk", "doSilkTAG", "doJQueryAppend", "addEventListener:with:", "deviceorientationHandler"]
}),
$globals.LindaGyroSolver);

$core.addMethod(
$core.method({
selector: "beta",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
var $1;
$1=self["@beta"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "beta\x0a\x09^ beta",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaGyroSolver);

$core.addMethod(
$core.method({
selector: "beta:",
protocol: 'accessing',
fn: function (anObject){
"use strict";

var self=this;
self["@beta"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "beta: anObject\x0a\x09beta := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaGyroSolver);

$core.addMethod(
$core.method({
selector: "deviceorientationHandler",
protocol: 'starting',
fn: function (){
"use strict";

var self=this;
function $Transcript(){return $globals.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$1=(function(event){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._alpha_($recv(event)._alpha());
self._beta_($recv(event)._beta());
self._gamma_($recv(event)._gamma());
$recv($Transcript())._show_($recv(event)._printString());
$2=$recv($Transcript())._cr();
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1,1)});
//>>excludeEnd("ctx");
});
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deviceorientationHandler",{},$globals.LindaGyroSolver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "deviceorientationHandler\x0a\x09^[:event |\x0a\x09\x09self alpha: event alpha.\x0a\x09\x09self beta: event beta.\x0a\x09\x09self gamma: event gamma.\x0a\x09\x09Transcript show: event printString; cr.].",
referencedClasses: ["Transcript"],
//>>excludeEnd("ide");
messageSends: ["alpha:", "alpha", "beta:", "beta", "gamma:", "gamma", "show:", "printString", "cr"]
}),
$globals.LindaGyroSolver);

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
}, function($ctx1) {$ctx1.fill(self,"doAmberWith",{tag:tag},$globals.LindaGyroSolver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doAmberWith\x0a\x09| tag |\x0a\x09tag := (HTMLCanvas onJQuery: '#output-list' asJQuery) root.\x0a\x09tag with: [ :html | html li with: 'Amber Web #with: added me!' ]",
referencedClasses: ["HTMLCanvas"],
//>>excludeEnd("ide");
messageSends: ["root", "onJQuery:", "asJQuery", "with:", "li"]
}),
$globals.LindaGyroSolver);

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
}, function($ctx1) {$ctx1.fill(self,"doJQueryAppend",{},$globals.LindaGyroSolver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doJQueryAppend\x0a\x09'#output-list' asJQuery append: '<li>jQuery append added me!</li>'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["append:", "asJQuery"]
}),
$globals.LindaGyroSolver);

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
}, function($ctx1) {$ctx1.fill(self,"doSilkTAG",{},$globals.LindaGyroSolver)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doSilkTAG\x0a\x09'#output-list' asSilk LI: 'Silk TAG: added me!'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["LI:", "asSilk"]
}),
$globals.LindaGyroSolver);

$core.addMethod(
$core.method({
selector: "gamma",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
var $1;
$1=self["@gamma"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "gamma\x0a\x09^ gamma",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaGyroSolver);

$core.addMethod(
$core.method({
selector: "gamma:",
protocol: 'accessing',
fn: function (anObject){
"use strict";

var self=this;
self["@gamma"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "gamma: anObject\x0a\x09gamma := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaGyroSolver);


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
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.LindaGyroSolver.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09self new augmentPage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["augmentPage", "new"]
}),
$globals.LindaGyroSolver.klass);


$core.addClass('LindaProxy', $globals.Object, ['proxy'], 'LindaClient');
$core.addMethod(
$core.method({
selector: "keys:",
protocol: 'accessing',
fn: function (aJS){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
	return Object.keys(aJS);
	;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keys:",{aJS:aJS},$globals.LindaProxy)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJS"],
source: "keys: aJS\x0a\x09<\x09return Object.keys(aJS);\x0a\x09>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaProxy);

$core.addMethod(
$core.method({
selector: "proxy",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
var $1;
$1=self["@proxy"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "proxy\x0a\x09^ proxy",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaProxy);

$core.addMethod(
$core.method({
selector: "proxy:",
protocol: 'accessing',
fn: function (anObject){
"use strict";

var self=this;
self["@proxy"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "proxy: anObject\x0a\x09proxy := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaProxy);


$core.addMethod(
$core.method({
selector: "new",
protocol: 'as yet unclassified',
fn: function (){
"use strict";

var self=this;
var newProxy;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
newProxy=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.LindaProxy.klass.superclass.fn.prototype._new.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=newProxy;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{newProxy:newProxy},$globals.LindaProxy.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x09| newProxy |\x0a\x09newProxy := super new.\x0a\x09^newProxy",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new"]
}),
$globals.LindaProxy.klass);

$core.addMethod(
$core.method({
selector: "proxy:",
protocol: 'as yet unclassified',
fn: function (aJSProxy){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$4,$2;
$1=$recv(aJSProxy)._isNil();
if($core.assert($1)){
return nil;
};
$3=self._new();
$recv($3)._proxy_(aJSProxy);
$4=$recv($3)._yourself();
$2=$4;
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"proxy:",{aJSProxy:aJSProxy},$globals.LindaProxy.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJSProxy"],
source: "proxy: aJSProxy\x0a\x09aJSProxy isNil ifTrue: [^nil].\x0a\x09^self new proxy: aJSProxy ; yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "isNil", "proxy:", "new", "yourself"]
}),
$globals.LindaProxy.klass);


$core.addClass('LindaClient', $globals.LindaProxy, ['serverUrl'], 'LindaClient');
$core.addMethod(
$core.method({
selector: "connect:",
protocol: 'services',
fn: function (aSocketIo){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._proxy();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["proxy"]=1;
//>>excludeEnd("ctx");
$recv($1)._connect_($recv(aSocketIo)._proxy());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"connect:",{aSocketIo:aSocketIo},$globals.LindaClient)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSocketIo"],
source: "connect: aSocketIo\x0a\x0a\x09self proxy connect: aSocketIo proxy.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["connect:", "proxy"]
}),
$globals.LindaClient);

$core.addMethod(
$core.method({
selector: "io",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._proxy())._io();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"io",{},$globals.LindaClient)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "io\x0a\x0a\x09^self proxy io",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["io", "proxy"]
}),
$globals.LindaClient);

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
$1=$recv(self._io())._uri();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"serverUrl",{},$globals.LindaClient)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "serverUrl\x0a\x09^self io uri",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["uri", "io"]
}),
$globals.LindaClient);

$core.addMethod(
$core.method({
selector: "tupleSpace:",
protocol: 'services',
fn: function (aName){
"use strict";

var self=this;
function $TupleSpace(){return $globals.TupleSpace||(typeof TupleSpace=="undefined"?nil:TupleSpace)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($TupleSpace())._proxy_($recv(self._proxy())._tuplespace_(aName));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tupleSpace:",{aName:aName},$globals.LindaClient)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aName"],
source: "tupleSpace: aName\x0a\x09^TupleSpace proxy: (self proxy tuplespace: aName).\x0a\x09",
referencedClasses: ["TupleSpace"],
//>>excludeEnd("ide");
messageSends: ["proxy:", "tuplespace:", "proxy"]
}),
$globals.LindaClient);


$core.addMethod(
$core.method({
selector: "chatRoom",
protocol: 'examples',
fn: function (){
"use strict";

var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "chatRoom",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaClient.klass);

$core.addMethod(
$core.method({
selector: "connect:",
protocol: 'instance creation',
fn: function (aSocketIo){
"use strict";

var self=this;
var newClient;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$1;
newClient=self._proxy_($recv(self._linda())._new());
$2=newClient;
$recv($2)._connect_(aSocketIo);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"connect:",{aSocketIo:aSocketIo,newClient:newClient},$globals.LindaClient.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSocketIo"],
source: "connect: aSocketIo\x0a\x09| newClient |\x0a\x09newClient := self proxy: self linda new.\x0a\x09^newClient connect: aSocketIo; yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["proxy:", "new", "linda", "connect:", "yourself"]
}),
$globals.LindaClient.klass);

$core.addMethod(
$core.method({
selector: "linda",
protocol: 'private',
fn: function (){
"use strict";

var self=this;
function $Linda(){return $globals.Linda||(typeof Linda=="undefined"?nil:Linda)}
return $Linda();

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "linda\x0a\x09\x22JS function LindaClient\x22\x0a\x09^Linda",
referencedClasses: ["Linda"],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LindaClient.klass);

$core.addMethod(
$core.method({
selector: "serverUrl:",
protocol: 'instance creation',
fn: function (aUrlString){
"use strict";

var self=this;
function $SocketIo(){return $globals.SocketIo||(typeof SocketIo=="undefined"?nil:SocketIo)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._connect_($recv($SocketIo())._serverUrl_(aUrlString));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"serverUrl:",{aUrlString:aUrlString},$globals.LindaClient.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aUrlString"],
source: "serverUrl: aUrlString\x0a\x0a\x09^self connect: (SocketIo serverUrl: aUrlString).",
referencedClasses: ["SocketIo"],
//>>excludeEnd("ide");
messageSends: ["connect:", "serverUrl:"]
}),
$globals.LindaClient.klass);


$core.addClass('ReadTakeOption', $globals.LindaProxy, [], 'LindaClient');


$core.addClass('SocketIo', $globals.LindaProxy, [], 'LindaClient');
$core.addMethod(
$core.method({
selector: "close",
protocol: 'services',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._proxy())._close();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"close",{},$globals.SocketIo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "close\x0a\x09^self proxy close",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["close", "proxy"]
}),
$globals.SocketIo);

$core.addMethod(
$core.method({
selector: "uri",
protocol: 'services',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._proxy())._uri();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"uri",{},$globals.SocketIo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "uri\x0a\x09^self proxy uri",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["uri", "proxy"]
}),
$globals.SocketIo);


$core.addMethod(
$core.method({
selector: "serverUrl:",
protocol: 'as yet unclassified',
fn: function (aUrlString){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._proxy_($recv(self._socketIo())._value_(aUrlString));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"serverUrl:",{aUrlString:aUrlString},$globals.SocketIo.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aUrlString"],
source: "serverUrl: aUrlString\x0a\x0a\x09\x22^self proxy: (self socketIo value: aUrlString value: #{#autoConnect -> false})\x22\x0a\x09\x22^self proxy: (self socketIo value connect: aUrlString )\x22\x0a\x09^self proxy: (self socketIo value: aUrlString )\x0a\x09",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["proxy:", "value:", "socketIo"]
}),
$globals.SocketIo.klass);

$core.addMethod(
$core.method({
selector: "socketIo",
protocol: 'as yet unclassified',
fn: function (){
"use strict";

var self=this;
var $1;
$1=socketIo;
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "socketIo\x0a\x09^socketIo",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SocketIo.klass);


$core.addClass('Tuple', $globals.LindaProxy, ['data', 'expireAt', 'fromAddress'], 'LindaClient');
$core.addMethod(
$core.method({
selector: "asJSON",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=self._proxy();
if(($receiver = $1) == null || $receiver.isNil){
self["@proxy"]=$recv(self["@data"])._asJSON();
self["@proxy"];
} else {
$1;
};
$2=self["@proxy"];
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJSON",{},$globals.Tuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJSON\x0a\x09self proxy ifNil: [proxy := data asJSON].\x0a\x09^proxy",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "proxy", "asJSON"]
}),
$globals.Tuple);

$core.addMethod(
$core.method({
selector: "data",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$receiver;
$1=self["@data"];
if(($receiver = $1) == null || $receiver.isNil){
self["@data"]=$globals.HashedCollection._newFromPairs_([]);
self["@data"];
$2=self._proxy();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["proxy"]=1;
//>>excludeEnd("ctx");
if(($receiver = $2) == null || $receiver.isNil){
$2;
} else {
$recv($recv(self._proxy())._data())._keysAndValuesDo_((function(k,v){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@data"])._at_put_(k,v);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({k:k,v:v},$ctx1,3)});
//>>excludeEnd("ctx");
}));
};
} else {
$1;
};
$3=self["@data"];
return $3;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"data",{},$globals.Tuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "data\x0a\x09data ifNil: [data := #{}.\x0a\x09\x09self proxy ifNotNil: [self proxy data keysAndValuesDo: [:k :v | data at: k put: v]]].\x0a\x09^data",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "ifNotNil:", "proxy", "keysAndValuesDo:", "data", "at:put:"]
}),
$globals.Tuple);

$core.addMethod(
$core.method({
selector: "data:",
protocol: 'accessing',
fn: function (anObject){
"use strict";

var self=this;
self["@data"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "data: anObject\x0a\x09data := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Tuple);

$core.addMethod(
$core.method({
selector: "expireAt",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._proxy())._at_("expire_at");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"expireAt",{},$globals.Tuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "expireAt\x0a\x09^ self proxy at: 'expire_at'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "proxy"]
}),
$globals.Tuple);

$core.addMethod(
$core.method({
selector: "fromAddress",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._proxy())._at_("from");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromAddress",{},$globals.Tuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "fromAddress\x0a\x09^self proxy at: 'from'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "proxy"]
}),
$globals.Tuple);

$core.addMethod(
$core.method({
selector: "keys",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._keys_(self._data());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keys",{},$globals.Tuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "keys\x0a\x09^self keys: self data",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["keys:", "data"]
}),
$globals.Tuple);



$core.addClass('TupleSpace', $globals.LindaProxy, [], 'LindaClient');
$core.addMethod(
$core.method({
selector: "cancel:",
protocol: 'services',
fn: function (anId){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._proxy())._cancel_(anId);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cancel:",{anId:anId},$globals.TupleSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anId"],
source: "cancel: anId\x0a\x0a\x09self proxy cancel: anId",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["cancel:", "proxy"]
}),
$globals.TupleSpace);

$core.addMethod(
$core.method({
selector: "createCallBackId",
protocol: 'callback services',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._proxy())._at_("create_callback_id"))._value();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createCallBackId",{},$globals.TupleSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "createCallBackId\x0a\x0a\x09^(self proxy at: 'create_callback_id') value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value", "at:", "proxy"]
}),
$globals.TupleSpace);

$core.addMethod(
$core.method({
selector: "createWatchCallbackId:",
protocol: 'callback services',
fn: function (aTupleHashedCollection){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._proxy())._at_("create_watch_callback_id"))._value_($recv(aTupleHashedCollection)._asJSON());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createWatchCallbackId:",{aTupleHashedCollection:aTupleHashedCollection},$globals.TupleSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTupleHashedCollection"],
source: "createWatchCallbackId: aTupleHashedCollection\x0a\x0a\x09^(self proxy at: 'create_watch_callback_id') value: aTupleHashedCollection asJSON",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value:", "at:", "proxy", "asJSON"]
}),
$globals.TupleSpace);

$core.addMethod(
$core.method({
selector: "ioCallbacks",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._proxy())._at_("io_callbacks");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ioCallbacks",{},$globals.TupleSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ioCallbacks\x0a\x09^self proxy at: 'io_callbacks'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "proxy"]
}),
$globals.TupleSpace);

$core.addMethod(
$core.method({
selector: "name",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._proxy())._name();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"name",{},$globals.TupleSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "name\x0a\x09^self proxy name",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["name", "proxy"]
}),
$globals.TupleSpace);

$core.addMethod(
$core.method({
selector: "option:",
protocol: 'services',
fn: function (aHashedCollection){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._proxy())._option_(aHashedCollection);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"option:",{aHashedCollection:aHashedCollection},$globals.TupleSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aHashedCollection"],
source: "option: aHashedCollection\x0a\x0a\x09^self proxy option: aHashedCollection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["option:", "proxy"]
}),
$globals.TupleSpace);

$core.addMethod(
$core.method({
selector: "read:",
protocol: 'services',
fn: function (aTupleHashedCollection){
"use strict";

var self=this;
var ans;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $Tuple(){return $globals.Tuple||(typeof Tuple=="undefined"?nil:Tuple)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
ans=$recv($OrderedCollection())._new();
self._read_callback_(aTupleHashedCollection,(function(e,t){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(ans)._add_($recv($Tuple())._proxy_(t));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e,t:t},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=ans;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"read:",{aTupleHashedCollection:aTupleHashedCollection,ans:ans},$globals.TupleSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTupleHashedCollection"],
source: "read: aTupleHashedCollection\x0a\x09\x22aBlockClosure <[:err :tuple | ]>\x22\x0a\x09| ans |\x0a\x09ans := OrderedCollection new.\x0a\x09self read: aTupleHashedCollection callback: [:e :t| ans add: (Tuple proxy: t)].\x0a\x09^ans ",
referencedClasses: ["OrderedCollection", "Tuple"],
//>>excludeEnd("ide");
messageSends: ["new", "read:callback:", "add:", "proxy:"]
}),
$globals.TupleSpace);

$core.addMethod(
$core.method({
selector: "read:callback:",
protocol: 'services',
fn: function (aTupleHashedCollection,aBlockClosure){
"use strict";

var self=this;
function $Tuple(){return $globals.Tuple||(typeof Tuple=="undefined"?nil:Tuple)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._proxy())._read_with_($recv(aTupleHashedCollection)._asJSON(),(function(e,t){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aBlockClosure)._value_value_(e,$recv($Tuple())._proxy_(t));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e,t:t},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"read:callback:",{aTupleHashedCollection:aTupleHashedCollection,aBlockClosure:aBlockClosure},$globals.TupleSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTupleHashedCollection", "aBlockClosure"],
source: "read: aTupleHashedCollection callback: aBlockClosure\x0a\x09\x22aBlockClosure <[:err :tuple | ]>\x22\x0a\x09\x0a\x09^self proxy read: aTupleHashedCollection asJSON with: [:e :t | aBlockClosure value: e value: (Tuple proxy: t)]",
referencedClasses: ["Tuple"],
//>>excludeEnd("ide");
messageSends: ["read:with:", "proxy", "asJSON", "value:value:", "proxy:"]
}),
$globals.TupleSpace);

$core.addMethod(
$core.method({
selector: "removeIoCallbacks",
protocol: 'callback services',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($recv(self._proxy())._at_("remove_io_callbacks"))._value();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeIoCallbacks",{},$globals.TupleSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "removeIoCallbacks\x0a\x0a\x09^(self proxy at: 'remove_io_callbacks') value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value", "at:", "proxy"]
}),
$globals.TupleSpace);

$core.addMethod(
$core.method({
selector: "take:",
protocol: 'services',
fn: function (aTupleHashedCollection){
"use strict";

var self=this;
var ans;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
ans=$recv($OrderedCollection())._new();
self._take_callback_(aTupleHashedCollection,(function(e,t){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(ans)._add_(t);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e,t:t},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=ans;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"take:",{aTupleHashedCollection:aTupleHashedCollection,ans:ans},$globals.TupleSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTupleHashedCollection"],
source: "take: aTupleHashedCollection\x0a\x09\x22aBlockClosure <[:err :tuple | ]>\x22\x0a\x09| ans |\x0a\x09ans := OrderedCollection new.\x0a\x09self take: aTupleHashedCollection callback: [:e :t| ans add: t].\x0a\x09^ans ",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["new", "take:callback:", "add:"]
}),
$globals.TupleSpace);

$core.addMethod(
$core.method({
selector: "take:callback:",
protocol: 'services',
fn: function (aTupleHashedCollection,aBlockClosure){
"use strict";

var self=this;
function $Tuple(){return $globals.Tuple||(typeof Tuple=="undefined"?nil:Tuple)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._proxy())._take_with_($recv(aTupleHashedCollection)._asJSON(),(function(e,t){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(aBlockClosure)._value_value_(e,$recv($Tuple())._proxy_(t));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({e:e,t:t},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"take:callback:",{aTupleHashedCollection:aTupleHashedCollection,aBlockClosure:aBlockClosure},$globals.TupleSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTupleHashedCollection", "aBlockClosure"],
source: "take: aTupleHashedCollection callback: aBlockClosure\x0a\x09\x22aBlockClosure <[:err :tuple | ]>\x22\x0a\x09\x0a\x09^self proxy take: aTupleHashedCollection asJSON with: [:e :t | aBlockClosure value: e value: (Tuple proxy: t)]",
referencedClasses: ["Tuple"],
//>>excludeEnd("ide");
messageSends: ["take:with:", "proxy", "asJSON", "value:value:", "proxy:"]
}),
$globals.TupleSpace);

$core.addMethod(
$core.method({
selector: "watch:callback:",
protocol: 'services',
fn: function (aTupleHashedCollection,aBlockClosure){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._proxy())._watch_with_(aTupleHashedCollection,aBlockClosure);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"watch:callback:",{aTupleHashedCollection:aTupleHashedCollection,aBlockClosure:aBlockClosure},$globals.TupleSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTupleHashedCollection", "aBlockClosure"],
source: "watch: aTupleHashedCollection callback: aBlockClosure\x0a\x09\x22aBlockClosure <[:err :tuple | ]>\x22\x0a\x09\x0a\x09^self proxy watch: aTupleHashedCollection with: aBlockClosure",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["watch:with:", "proxy"]
}),
$globals.TupleSpace);

$core.addMethod(
$core.method({
selector: "watchCallbackIds",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._proxy())._at_("watch_callback_ids");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"watchCallbackIds",{},$globals.TupleSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "watchCallbackIds\x0a\x09^self proxy at: 'watch_callback_ids'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "proxy"]
}),
$globals.TupleSpace);

$core.addMethod(
$core.method({
selector: "write:",
protocol: 'services',
fn: function (aTupleHashedCollection){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._write_options_(aTupleHashedCollection,nil);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"write:",{aTupleHashedCollection:aTupleHashedCollection},$globals.TupleSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTupleHashedCollection"],
source: "write: aTupleHashedCollection \x0a\x0a\x09self write: aTupleHashedCollection options: nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["write:options:"]
}),
$globals.TupleSpace);

$core.addMethod(
$core.method({
selector: "write:expireSeconds:",
protocol: 'services',
fn: function (aTupleHashedCollection,anInteger){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._write_options_(aTupleHashedCollection,$globals.HashedCollection._newFromPairs_(["expire",anInteger]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"write:expireSeconds:",{aTupleHashedCollection:aTupleHashedCollection,anInteger:anInteger},$globals.TupleSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTupleHashedCollection", "anInteger"],
source: "write: aTupleHashedCollection expireSeconds: anInteger\x0a\x0a\x09self write: aTupleHashedCollection options: #{#expire -> anInteger}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["write:options:"]
}),
$globals.TupleSpace);

$core.addMethod(
$core.method({
selector: "write:options:",
protocol: 'services',
fn: function (aTuple,optionsHashedCollection){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=self._proxy();
$2=$recv(aTuple)._asJSON();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJSON"]=1;
//>>excludeEnd("ctx");
$recv($1)._write_with_($2,$recv(optionsHashedCollection)._asJSON());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"write:options:",{aTuple:aTuple,optionsHashedCollection:optionsHashedCollection},$globals.TupleSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTuple", "optionsHashedCollection"],
source: "write: aTuple options: optionsHashedCollection\x0a\x0a\x09self proxy write: aTuple asJSON with: optionsHashedCollection asJSON",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["write:with:", "proxy", "asJSON"]
}),
$globals.TupleSpace);


$core.addMethod(
$core.method({
selector: "lindaClient:name:",
protocol: 'as yet unclassified',
fn: function (aLindaClient,aTupleSpaceName){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._proxy_($recv(aLindaClient)._tupleSpace_(aTupleSpaceName));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lindaClient:name:",{aLindaClient:aLindaClient,aTupleSpaceName:aTupleSpaceName},$globals.TupleSpace.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLindaClient", "aTupleSpaceName"],
source: "lindaClient: aLindaClient name: aTupleSpaceName\x0a\x0a\x09^self proxy: (aLindaClient tupleSpace: aTupleSpaceName).",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["proxy:", "tupleSpace:"]
}),
$globals.TupleSpace.klass);

});

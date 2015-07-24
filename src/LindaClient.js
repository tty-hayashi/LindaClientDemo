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

$core.addClass('LindaClientApp', $globals.Object, ['serverUrl', 'tickets', 'lindaClient'], 'LindaClient');
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


$core.addClass('LindaClient', $globals.LindaProxy, [], 'LindaClient');
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["proxy"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
self["@proxy"]=$recv(self._data())._asJSON();
self["@proxy"];
} else {
$1;
};
$recv(self._proxy())._at_put_("class",$recv(self._class())._name());
$2=self["@proxy"];
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asJSON",{},$globals.Tuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asJSON\x0a\x09self proxy ifNil: [proxy := self data asJSON].\x0a\x09self proxy at: #class put: self class name.\x0a\x09^proxy",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "proxy", "asJSON", "data", "at:put:", "name", "class"]
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

$core.addMethod(
$core.method({
selector: "type",
protocol: 'accessing',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_("type");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"type",{},$globals.Tuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "type\x0a\x09^self data at: #type ",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "data"]
}),
$globals.Tuple);

$core.addMethod(
$core.method({
selector: "type:",
protocol: 'accessing',
fn: function (anObject){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("type",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"type:",{anObject:anObject},$globals.Tuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "type: anObject\x0a\x09self data at: #type put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
}),
$globals.Tuple);


$core.addMethod(
$core.method({
selector: "fromJSON:",
protocol: 'as yet unclassified',
fn: function (aProxy){
"use strict";

var self=this;
var tupleClassName;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
if(($receiver = aProxy) == null || $receiver.isNil){
return nil;
} else {
aProxy;
};
tupleClassName=$recv($recv(aProxy)._data())._at_ifAbsent_("class",(function(){
return "Tuple";

}));
$1=$recv($recv($recv($Smalltalk())._globals())._at_(tupleClassName))._proxy_(aProxy);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromJSON:",{aProxy:aProxy,tupleClassName:tupleClassName},$globals.Tuple.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProxy"],
source: "fromJSON: aProxy\x0a\x09| tupleClassName |\x0a\x09aProxy ifNil: [^nil].\x0a\x09tupleClassName := aProxy data at: 'class' ifAbsent: ['Tuple'].\x0a\x09^(Smalltalk globals at: tupleClassName) proxy: aProxy",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "at:ifAbsent:", "data", "proxy:", "at:", "globals"]
}),
$globals.Tuple.klass);


$core.addClass('FibTuple', $globals.Tuple, [], 'LindaClient');
$core.addMethod(
$core.method({
selector: "answer",
protocol: 'as yet unclassified',
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
protocol: 'as yet unclassified',
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
protocol: 'as yet unclassified',
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
protocol: 'as yet unclassified',
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
selector: "value",
protocol: 'as yet unclassified',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._data())._at_("value");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value",{},$globals.FibTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "value\x0a\x0a\x09^self data at: 'value' ",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "data"]
}),
$globals.FibTuple);

$core.addMethod(
$core.method({
selector: "value:",
protocol: 'as yet unclassified',
fn: function (anInteger){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._data())._at_put_("value",anInteger);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value:",{anInteger:anInteger},$globals.FibTuple)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "value: anInteger\x0a\x0a\x09self data at: 'value' put: anInteger",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "data"]
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
protocol: 'accessor ',
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
return $recv(ans)._add_($recv($Tuple())._fromJSON_(t));
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
source: "read: aTupleHashedCollection\x0a\x09\x22aBlockClosure <[:err :tuple | ]>\x22\x0a\x09| ans |\x0a\x09ans := OrderedCollection new.\x0a\x09self read: aTupleHashedCollection callback: [:e :t| ans add: (Tuple fromJSON: t)].\x0a\x09^ans ",
referencedClasses: ["OrderedCollection", "Tuple"],
//>>excludeEnd("ide");
messageSends: ["new", "read:callback:", "add:", "fromJSON:"]
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
return $recv(aBlockClosure)._value_value_(e,$recv($Tuple())._fromJSON_(t));
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
source: "read: aTupleHashedCollection callback: aBlockClosure\x0a\x09\x22aBlockClosure <[:err :tuple | ]>\x22\x0a\x09\x0a\x09^self proxy read: aTupleHashedCollection asJSON with: [:e :t | aBlockClosure value: e value: (Tuple fromJSON: t)]",
referencedClasses: ["Tuple"],
//>>excludeEnd("ide");
messageSends: ["read:with:", "proxy", "asJSON", "value:value:", "fromJSON:"]
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
return $recv(aBlockClosure)._value_value_(e,$recv($Tuple())._fromJSON_(t));
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
source: "take: aTupleHashedCollection callback: aBlockClosure\x0a\x09\x22aBlockClosure <[:err :tuple | ]>\x22\x0a\x09\x0a\x09^self proxy take: aTupleHashedCollection asJSON with: [:e :t | aBlockClosure value: e value: (Tuple fromJSON: t)]",
referencedClasses: ["Tuple"],
//>>excludeEnd("ide");
messageSends: ["take:with:", "proxy", "asJSON", "value:value:", "fromJSON:"]
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

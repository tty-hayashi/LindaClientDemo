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

$core.addClass('LindaClientApp', $globals.Object, ['lindaClient', 'alpha', 'beta', 'gamma'], 'LindaClient');
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
$globals.LindaClientApp);

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
$globals.LindaClientApp);

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
$globals.LindaClientApp);

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
$globals.LindaClientApp);

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
$recv(window)._addEventListener_with_("deviceorientation",self._deviceorientationHandler());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{},$globals.LindaFactorialMaster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x09'#amber-with' asJQuery click: [ self doAmberWith ].\x0a\x09'#silk-tag' asSilk on: #click bind: [ self doSilkTAG ].\x0a\x09'#jquery-append' asJQuery click: [ self doJQueryAppend ].\x0a\x09window addEventListener: #deviceorientation with: self deviceorientationHandler",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["click:", "asJQuery", "doAmberWith", "on:bind:", "asSilk", "doSilkTAG", "doJQueryAppend", "addEventListener:with:", "deviceorientationHandler"]
}),
$globals.LindaFactorialMaster);

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
}, function($ctx1) {$ctx1.fill(self,"doAmberWith",{tag:tag},$globals.LindaFactorialMaster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doAmberWith\x0a\x09| tag |\x0a\x09tag := (HTMLCanvas onJQuery: '#output-list' asJQuery) root.\x0a\x09tag with: [ :html | html li with: 'Amber Web #with: added me!' ]",
referencedClasses: ["HTMLCanvas"],
//>>excludeEnd("ide");
messageSends: ["root", "onJQuery:", "asJQuery", "with:", "li"]
}),
$globals.LindaFactorialMaster);

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
}, function($ctx1) {$ctx1.fill(self,"doJQueryAppend",{},$globals.LindaFactorialMaster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doJQueryAppend\x0a\x09'#output-list' asJQuery append: '<li>jQuery append added me!</li>'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["append:", "asJQuery"]
}),
$globals.LindaFactorialMaster);

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
}, function($ctx1) {$ctx1.fill(self,"doSilkTAG",{},$globals.LindaFactorialMaster)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doSilkTAG\x0a\x09'#output-list' asSilk LI: 'Silk TAG: added me!'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["LI:", "asSilk"]
}),
$globals.LindaFactorialMaster);


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


$core.addClass('LindaFactorialWorker', $globals.LindaClientApp, [], 'LindaClient');


$core.addClass('LindaGyroMaster', $globals.LindaClientApp, [], 'LindaClient');


$core.addClass('LindaGyroWorker', $globals.LindaClientApp, ['alpha', 'beta', 'gamma'], 'LindaClient');
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
$globals.LindaGyroWorker);

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
$globals.LindaGyroWorker);

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
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{},$globals.LindaGyroWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x09'#amber-with' asJQuery click: [ self doAmberWith ].\x0a\x09'#silk-tag' asSilk on: #click bind: [ self doSilkTAG ].\x0a\x09'#jquery-append' asJQuery click: [ self doJQueryAppend ].\x0a\x09window addEventListener: #deviceorientation with: self deviceorientationHandler",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["click:", "asJQuery", "doAmberWith", "on:bind:", "asSilk", "doSilkTAG", "doJQueryAppend", "addEventListener:with:", "deviceorientationHandler"]
}),
$globals.LindaGyroWorker);

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
$globals.LindaGyroWorker);

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
$globals.LindaGyroWorker);

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
}, function($ctx1) {$ctx1.fill(self,"deviceorientationHandler",{},$globals.LindaGyroWorker)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "deviceorientationHandler\x0a\x09^[:event |\x0a\x09\x09self alpha: event alpha.\x0a\x09\x09self beta: event beta.\x0a\x09\x09self gamma: event gamma.\x0a\x09\x09Transcript show: event printString; cr.].",
referencedClasses: ["Transcript"],
//>>excludeEnd("ide");
messageSends: ["alpha:", "alpha", "beta:", "beta", "gamma:", "gamma", "show:", "printString", "cr"]
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
$globals.LindaGyroWorker);

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
$globals.LindaGyroWorker);


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
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.LindaGyroWorker.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09self new augmentPage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["augmentPage", "new"]
}),
$globals.LindaGyroWorker.klass);


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
var $2,$3,$1;
$2=self._new();
$recv($2)._proxy_(aJSProxy);
$3=$recv($2)._yourself();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"proxy:",{aJSProxy:aJSProxy},$globals.LindaProxy.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJSProxy"],
source: "proxy: aJSProxy\x0a\x09^self new proxy: aJSProxy ; yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["proxy:", "new", "yourself"]
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
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._proxy())._read_with_($recv(aTupleHashedCollection)._asJSON(),aBlockClosure);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"read:callback:",{aTupleHashedCollection:aTupleHashedCollection,aBlockClosure:aBlockClosure},$globals.TupleSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTupleHashedCollection", "aBlockClosure"],
source: "read: aTupleHashedCollection callback: aBlockClosure\x0a\x09\x22aBlockClosure <[:err :tuple | ]>\x22\x0a\x09\x0a\x09^self proxy read: aTupleHashedCollection asJSON with: aBlockClosure",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["read:with:", "proxy", "asJSON"]
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
function $Tuple(){return $globals.Tuple||(typeof Tuple=="undefined"?nil:Tuple)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
ans=$recv($OrderedCollection())._new();
self._take_callback_(aTupleHashedCollection,(function(e,t){
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
}, function($ctx1) {$ctx1.fill(self,"take:",{aTupleHashedCollection:aTupleHashedCollection,ans:ans},$globals.TupleSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTupleHashedCollection"],
source: "take: aTupleHashedCollection\x0a\x09\x22aBlockClosure <[:err :tuple | ]>\x22\x0a\x09| ans |\x0a\x09ans := OrderedCollection new.\x0a\x09self take: aTupleHashedCollection callback: [:e :t| ans add: (Tuple proxy: t)].\x0a\x09^ans ",
referencedClasses: ["OrderedCollection", "Tuple"],
//>>excludeEnd("ide");
messageSends: ["new", "take:callback:", "add:", "proxy:"]
}),
$globals.TupleSpace);

$core.addMethod(
$core.method({
selector: "take:callback:",
protocol: 'services',
fn: function (aTupleHashedCollection,aBlockClosure){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._proxy())._take_with_($recv(aTupleHashedCollection)._asJSON(),aBlockClosure);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"take:callback:",{aTupleHashedCollection:aTupleHashedCollection,aBlockClosure:aBlockClosure},$globals.TupleSpace)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTupleHashedCollection", "aBlockClosure"],
source: "take: aTupleHashedCollection callback: aBlockClosure\x0a\x09\x22aBlockClosure <[:err :tuple | ]>\x22\x0a\x09\x0a\x09^self proxy take: aTupleHashedCollection asJSON with: aBlockClosure",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["take:with:", "proxy", "asJSON"]
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

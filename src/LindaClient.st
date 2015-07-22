Smalltalk createPackage: 'LindaClient'!
(Smalltalk packageAt: 'LindaClient') imports: {'linda' -> 'linda-client'. 'socketIo' -> 'socket.io'. 'amber/jquery/Wrappers-JQuery'. 'amber/web/Web'. 'silk/Silk'}!
Object subclass: #LindaClientApp
	instanceVariableNames: 'lindaClient tickets'
	package: 'LindaClient'!

!LindaClientApp methodsFor: 'accessing'!

lindaClient
	^ lindaClient
!

lindaClient: anObject
	lindaClient := anObject
!

tickets
	^ tickets
!

tickets: anObject
	tickets := anObject
! !

!LindaClientApp methodsFor: 'action'!

doAmberWith
	| tag |
	tag := (HTMLCanvas onJQuery: '#output-list' asJQuery) root.
	tag with: [ :html | html li with: 'Amber Web #with: added me!!' ]
!

doJQueryAppend
	'#output-list' asJQuery append: '<li>jQuery append added me!!</li>'
!

doJQueryPrepend: aMsg
	| elem|
	elem := '<p/>' asJQuery.
	elem html: aMsg.
	'#output-list' asJQuery prepend: elem
!

doSilkTAG
	'#output-list' asSilk LI: 'Silk TAG: added me!!'
! !

!LindaClientApp methodsFor: 'starting'!

augmentPage
	'#amber-with' asJQuery click: [ self doAmberWith ].
	'#silk-tag' asSilk on: #click bind: [ self doSilkTAG ].
	'#jquery-append' asJQuery click: [ self doJQueryAppend ].
	window addEventListener: #deviceorientation with: self deviceorientationHandler
!

deviceorientationHandler
	^[:event |
		self alpha: event alpha.
		self beta: event beta.
		self gamma: event gamma.
		Transcript show: event printString; cr.].
! !

!LindaClientApp class methodsFor: 'starting'!

start
	self new augmentPage
! !

LindaClientApp subclass: #LindaFactorialMaster
	instanceVariableNames: ''
	package: 'LindaClient'!

!LindaFactorialMaster methodsFor: 'starting'!

augmentPage
	'#amber-with' asJQuery click: [ self doAmberWith ].
	'#silk-tag' asSilk on: #click bind: [ self doSilkTAG ].
	'#jquery-append' asJQuery click: [ self doJQueryAppend ].
!

map
!

reduce
! !

!LindaFactorialMaster class methodsFor: 'starting'!

example

	| app tickets n lot ts ans|
	app := LindaFactorialMaster new.
	app tickets: 5.
	n := 100.
	lot := n / app tickets.
	app lindaClient: (LindaClient serverUrl: 'http://127.0.0.1:8931').
	ts := app lindaClient tupleSpace: 'factorial'.
	(1 to: n by: lot) do:[:i | 
		ts write: #{#type -> #fact . #i -> i. #lot -> lot}.].
	ans := OrderedCollection new.
	(1 to: app tickets) do:[:i | 	
		ts take: #{#type -> #ans} callback: [:err :t |
			ans add: (t data at: #ans).
			(i = app tickets)
				ifTrue: [(ans inject: 1 into: [:sum :e | sum * e]) inspect].
		]].
!

start
	self new augmentPage
! !

LindaClientApp subclass: #LindaFactorialSolver
	instanceVariableNames: ''
	package: 'LindaClient'!

!LindaFactorialSolver class methodsFor: 'as yet unclassified'!

example

	| linda tickets base lot ts ans|
	tickets := 5.
	linda := LindaClient serverUrl: 'http://127.0.0.1:8931'.
	ts := linda tupleSpace: 'factorial'.
	ts take: #{#type -> #fact} callback: [:err :t | 
		base := t data at: 'i'.
		lot := t data at: 'lot'.
		ans := (base to: (base + lot - 1)) inject: 1 into: [:sum :elm | sum * elm].
		ts write: #{#type -> #ans . #i -> base . #ans -> ans} .
	].
! !

LindaClientApp subclass: #LindaFibMaster
	instanceVariableNames: 'n result'
	package: 'LindaClient'!

!LindaFibMaster methodsFor: 'accessing'!

n
	^ n
!

n: anObject
	n := anObject
!

readTuple

	self tupleSpace read: #{#type -> 'fib-result' . #n -> self n} callback: [:err :t | 
		self result: (t data at: 'value')]
!

result
	^ result
!

result: anObject
	result := anObject
!

tupleSpace

	^self lindaClient tupleSpace: 'fibonatch'
!

writeTuple

	self tupleSpace write: #{#type -> 'fib' . #n -> self n}
! !

!LindaFibMaster methodsFor: 'starting'!

augmentPage
	'#amber-with' asJQuery click: [ self doAmberWith ].
	'#silk-tag' asSilk on: #click bind: [ self doSilkTAG ].
	'#jquery-append' asJQuery click: [ self doJQueryAppend ].
! !

!LindaFibMaster class methodsFor: 'starting'!

example

	| app  lot ts ans|
	app := LindaFibMaster new.
	app lindaClient: (LindaClient serverUrl: 'http://127.0.0.1:8931').
	app n: 100.
	app writeTuple.
	app readTuple.
	app inspect
!

start
	self new augmentPage
! !

LindaClientApp subclass: #LindaFibSolver
	instanceVariableNames: ''
	package: 'LindaClient'!

!LindaFibSolver methodsFor: 'starting'!

augmentPage
	'#amber-with' asJQuery click: [ self doAmberWith ].
	'#silk-tag' asSilk on: #click bind: [ self doSilkTAG ].
	'#jquery-append' asJQuery click: [ self doJQueryAppend ].
!

fib2: n
	| ans id value v1 v2 |
	self tupleSpace write: #{#type -> 'fib' . #n -> n}.
	self tupleSpace read: #{#type -> 'fib-result' . #n -> n } callback: [:err :t | ]
!

fib: n
	| ans id value v1 v2 |
	ans := self readIndex: n.
	ans isEmpty
		ifTrue: [n < 2
					ifTrue: [value := 1]
					ifFalse: [v1 := (self fib2:(n - 1)).
							v2 := (self fib2: (n - 2)). 
							(v1 notNil & v2 notNil)
								ifTrue: [value := v1 + v2 + 1]
								ifFalse: [^self]].
				self writeIndex: n value: value]
		ifFalse: [value := ans data at: 'value'].
	^value
!

orgfib: n
		^ n < 2
		ifTrue: [1]
		ifFalse: [(self fib:(n - 1)) + (self fib: (n - 2)) + 1]
!

readIndex: anIndex 
	| ans id |
	ans := OrderedCollection new.
	id := self tupleSpace read: #{#type -> 'fib-result' . #n -> anIndex } callback: [:err :tu | ans add: tu ].
	[self tupleSpace cancel: id] valueWithTimeout:10.
	^ans reject: [:e | e isNil]
!

readIndexWait: anIndex 
	| ans id |
	ans := OrderedCollection new.
	id := self tupleSpace read: #{#type -> 'fib-result' . #n -> anIndex } callback: [:err :tu | ans add: tu ].
	^ans reject: [:e | e isNil]
!

tupleSpace

	^self lindaClient tupleSpace: 'fibonatch'
!

writeIndex: anIndex value: aValue
	self tupleSpace write: #{#type -> 'fib-result' . #n -> anIndex . #value -> aValue}
!

writeValue: n
	| ans id |
	ans := OrderedCollection new.
	id := self tupleSpace read: #{} callback: [:err :tu | ans add: tu ].
	[self tupleSpace cancel: id] valueWithTimeout:10.
	ans isEmpty
		ifTrue: [[(self fib:(n - 1)) + (self fib: (n - 2)) + 1]].
! !

!LindaFibSolver class methodsFor: 'starting'!

example

	| solver |
	solver := LindaFibSolver new.
	solver lindaClient: (LindaClient serverUrl: 'http://127.0.0.1:8931').
	solver tupleSpace take: #{#type -> 'fib'} callback: [:err :t | 
		solver fib: (t data at: 'n')]
!

start
	self new augmentPage
! !

LindaClientApp subclass: #LindaGyroMaster
	instanceVariableNames: ''
	package: 'LindaClient'!

LindaClientApp subclass: #LindaGyroSolver
	instanceVariableNames: 'alpha beta gamma'
	package: 'LindaClient'!

!LindaGyroSolver methodsFor: 'accessing'!

alpha
	^ alpha
!

alpha: anObject
	alpha := anObject
!

beta
	^ beta
!

beta: anObject
	beta := anObject
!

gamma
	^ gamma
!

gamma: anObject
	gamma := anObject
! !

!LindaGyroSolver methodsFor: 'action'!

doAmberWith
	| tag |
	tag := (HTMLCanvas onJQuery: '#output-list' asJQuery) root.
	tag with: [ :html | html li with: 'Amber Web #with: added me!!' ]
!

doJQueryAppend
	'#output-list' asJQuery append: '<li>jQuery append added me!!</li>'
!

doSilkTAG
	'#output-list' asSilk LI: 'Silk TAG: added me!!'
! !

!LindaGyroSolver methodsFor: 'starting'!

augmentPage
	'#amber-with' asJQuery click: [ self doAmberWith ].
	'#silk-tag' asSilk on: #click bind: [ self doSilkTAG ].
	'#jquery-append' asJQuery click: [ self doJQueryAppend ].
	window addEventListener: #deviceorientation with: self deviceorientationHandler
!

deviceorientationHandler
	^[:event |
		self alpha: event alpha.
		self beta: event beta.
		self gamma: event gamma.
		Transcript show: event printString; cr.].
! !

!LindaGyroSolver class methodsFor: 'starting'!

start
	self new augmentPage
! !

Object subclass: #LindaProxy
	instanceVariableNames: 'proxy'
	package: 'LindaClient'!

!LindaProxy methodsFor: 'accessing'!

keys: aJS
	<	return Object.keys(aJS);
	>
!

proxy
	^ proxy
!

proxy: anObject
	proxy := anObject
! !

!LindaProxy class methodsFor: 'as yet unclassified'!

new
	| newProxy |
	newProxy := super new.
	^newProxy
!

proxy: aJSProxy
	aJSProxy isNil ifTrue: [^nil].
	^self new proxy: aJSProxy ; yourself
! !

LindaProxy subclass: #LindaClient
	instanceVariableNames: 'serverUrl'
	package: 'LindaClient'!

!LindaClient methodsFor: 'accessing'!

io

	^self proxy io
!

serverUrl
	^self io uri
! !

!LindaClient methodsFor: 'services'!

connect: aSocketIo

	self proxy connect: aSocketIo proxy.
!

tupleSpace: aName
	^TupleSpace proxy: (self proxy tuplespace: aName).
! !

!LindaClient class methodsFor: 'examples'!

chatRoom
! !

!LindaClient class methodsFor: 'instance creation'!

connect: aSocketIo
	| newClient |
	newClient := self proxy: self linda new.
	^newClient connect: aSocketIo; yourself
!

serverUrl: aUrlString

	^self connect: (SocketIo serverUrl: aUrlString).
! !

!LindaClient class methodsFor: 'private'!

linda
	"JS function LindaClient"
	^Linda
! !

LindaProxy subclass: #ReadTakeOption
	instanceVariableNames: ''
	package: 'LindaClient'!

LindaProxy subclass: #SocketIo
	instanceVariableNames: ''
	package: 'LindaClient'!

!SocketIo methodsFor: 'services'!

close
	^self proxy close
!

uri
	^self proxy uri
! !

!SocketIo class methodsFor: 'as yet unclassified'!

serverUrl: aUrlString

	"^self proxy: (self socketIo value: aUrlString value: #{#autoConnect -> false})"
	"^self proxy: (self socketIo value connect: aUrlString )"
	^self proxy: (self socketIo value: aUrlString )
!

socketIo
	^socketIo
! !

LindaProxy subclass: #Tuple
	instanceVariableNames: 'data expireAt fromAddress'
	package: 'LindaClient'!

!Tuple methodsFor: 'accessing'!

asJSON
	self proxy ifNil: [proxy := data asJSON].
	^proxy
!

data
	data ifNil: [data := #{}.
		self proxy ifNotNil: [self proxy data keysAndValuesDo: [:k :v | data at: k put: v]]].
	^data
!

data: anObject
	data := anObject
!

expireAt
	^ self proxy at: 'expire_at'
!

fromAddress
	^self proxy at: 'from'
!

keys
	^self keys: self data
! !

LindaProxy subclass: #TupleSpace
	instanceVariableNames: ''
	package: 'LindaClient'!

!TupleSpace methodsFor: 'accessing'!

ioCallbacks
	^self proxy at: 'io_callbacks'
!

name
	^self proxy name
!

watchCallbackIds
	^self proxy at: 'watch_callback_ids'
! !

!TupleSpace methodsFor: 'callback services'!

createCallBackId

	^(self proxy at: 'create_callback_id') value
!

createWatchCallbackId: aTupleHashedCollection

	^(self proxy at: 'create_watch_callback_id') value: aTupleHashedCollection asJSON
!

removeIoCallbacks

	^(self proxy at: 'remove_io_callbacks') value
! !

!TupleSpace methodsFor: 'services'!

cancel: anId

	self proxy cancel: anId
!

option: aHashedCollection

	^self proxy option: aHashedCollection
!

read: aTupleHashedCollection
	"aBlockClosure <[:err :tuple | ]>"
	| ans |
	ans := OrderedCollection new.
	self read: aTupleHashedCollection callback: [:e :t| ans add: (Tuple proxy: t)].
	^ans
!

read: aTupleHashedCollection callback: aBlockClosure
	"aBlockClosure <[:err :tuple | ]>"
	
	^self proxy read: aTupleHashedCollection asJSON with: [:e :t | aBlockClosure value: e value: (Tuple proxy: t)]
!

take: aTupleHashedCollection
	"aBlockClosure <[:err :tuple | ]>"
	| ans |
	ans := OrderedCollection new.
	self take: aTupleHashedCollection callback: [:e :t| ans add: t].
	^ans
!

take: aTupleHashedCollection callback: aBlockClosure
	"aBlockClosure <[:err :tuple | ]>"
	
	^self proxy take: aTupleHashedCollection asJSON with: [:e :t | aBlockClosure value: e value: (Tuple proxy: t)]
!

watch: aTupleHashedCollection callback: aBlockClosure
	"aBlockClosure <[:err :tuple | ]>"
	
	^self proxy watch: aTupleHashedCollection with: aBlockClosure
!

write: aTupleHashedCollection 

	self write: aTupleHashedCollection options: nil
!

write: aTupleHashedCollection expireSeconds: anInteger

	self write: aTupleHashedCollection options: #{#expire -> anInteger}
!

write: aTuple options: optionsHashedCollection

	self proxy write: aTuple asJSON with: optionsHashedCollection asJSON
! !

!TupleSpace class methodsFor: 'as yet unclassified'!

lindaClient: aLindaClient name: aTupleSpaceName

	^self proxy: (aLindaClient tupleSpace: aTupleSpaceName).
! !


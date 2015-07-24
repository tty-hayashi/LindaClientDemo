Smalltalk createPackage: 'LindaClient'!
(Smalltalk packageAt: 'LindaClient') imports: {'linda' -> 'linda-client'. 'socketIo' -> 'socket.io'. 'amber/jquery/Wrappers-JQuery'. 'amber/web/Web'. 'silk/Silk'}!
Object subclass: #LindaClientApp
	instanceVariableNames: 'serverUrl tickets lindaClient'
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

map
	| requestTuple resultTuple |
	resultTuple := FibTuple result.
	
	(self n to: 1 by: -1) do: [:i |
		requestTuple := FibTuple fib.
		requestTuple n: i.
		self tupleSpace write: requestTuple].
		
	resultTuple n: 0; answer: 0.
	self tupleSpace write: resultTuple.
!

n
	^ n
!

n: anObject
	n := anObject
!

readResultTuple
	| tuple |
	tuple := FibTuple result.
	tuple n: self n.
	self tupleSpace read: tuple callback: [:err :t | 
		self result: t answer]
!

result
	^ result
!

result: anObject
	result := anObject
!

tupleSpace

	^self lindaClient tupleSpace: FibTuple tupleSpaceName
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
	app n: 10.
	app map.
	app readResultTuple.
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

orgfib: n
		^ n < 2
		ifTrue: [1]
		ifFalse: [(self fib:(n - 1)) + (self fib: (n - 2)) + 1]
!

readResultNoWait: anIndex 
	| ans id tuple |
	ans := OrderedCollection new.
	tuple := FibTuple result.
	tuple n: anIndex.
	id := self tupleSpace read: tuple callback: [:err :tu | ans add: tu ].
	[self tupleSpace cancel: id] valueWithTimeout:1.
	^ans reject: [:e | e isNil]
!

reduce: n
	| ans id value v1 v2 |
	ans := self readResultNoWait: n.
	ans isEmpty
		ifTrue: [n < 3
					ifTrue: [self writeResult: n value: 1]
					ifFalse: [
						self tupleSpace read: #{#type -> 'fib-result' . #n -> (n - 2)} callback: [:e1 :t1 |
							self tupleSpace read: #{#type -> 'fib-result' .  #n -> (n - 1)} callback: [:e2 :t2 |
								v1 := (t1 data at: 'answer').
								v2 := (t2 data at: 'answer').
								self writeResult: n value: (v1 + v2).
								]
							]
						]
					]
!

tupleSpace

	^self lindaClient tupleSpace: FibTuple tupleSpaceName
!

writeResult: anIndex value: aValue
	| tuple |
	tuple := FibTuple result.
	tuple n: anIndex.
	tuple answer: aValue.
	self tupleSpace write: tuple
! !

!LindaFibSolver class methodsFor: 'starting'!

example

	| solver |
	solver := LindaFibSolver new.
	solver lindaClient: (LindaClient serverUrl: 'http://127.0.0.1:8931').
	solver tupleSpace take: #{#type -> 'fib'} callback: [:err :t | 
		solver reduce: (t data at: 'n')]
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
	instanceVariableNames: ''
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
	self proxy ifNil: [proxy := self data asJSON].
	self proxy at: #class put: self class name.
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
!

type
	^self data at: #type
!

type: anObject
	self data at: #type put: anObject
! !

!Tuple class methodsFor: 'as yet unclassified'!

fromJSON: aProxy
	| tupleClassName |
	aProxy ifNil: [^nil].
	tupleClassName := aProxy data at: 'class' ifAbsent: ['Tuple'].
	^(Smalltalk globals at: tupleClassName) proxy: aProxy
! !

Tuple subclass: #FibTuple
	instanceVariableNames: ''
	package: 'LindaClient'!

!FibTuple methodsFor: 'as yet unclassified'!

answer

	^self data at: self class answerKey
!

answer: anInteger

	self data at: self class answerKey put: anInteger
!

n

	^self data at: self class nKey
!

n: anIndex

	^self data at: self class nKey put: anIndex
!

value

	^self data at: 'value'
!

value: anInteger

	self data at: 'value' put: anInteger
! !

!FibTuple class methodsFor: 'accessor '!

answerKey
	^'answer'.
!

fibTypeKey
	^'fib'.
!

nKey
	^'n'.
!

resultTypeKey
	^'fib-result'.
!

tupleSpaceName

	^'fibSpace'
! !

!FibTuple class methodsFor: 'as yet unclassified'!

fib
	| tuple |
	tuple := self new.
	tuple type: self fibTypeKey.
	^tuple
!

result
	| tuple |
	tuple := self new.
	tuple type: self resultTypeKey.
	^tuple
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
	self read: aTupleHashedCollection callback: [:e :t| ans add: (Tuple fromJSON: t)].
	^ans
!

read: aTupleHashedCollection callback: aBlockClosure
	"aBlockClosure <[:err :tuple | ]>"
	
	^self proxy read: aTupleHashedCollection asJSON with: [:e :t | aBlockClosure value: e value: (Tuple fromJSON: t)]
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
	
	^self proxy take: aTupleHashedCollection asJSON with: [:e :t | aBlockClosure value: e value: (Tuple fromJSON: t)]
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


Smalltalk createPackage: 'LindaClientDemo'!
(Smalltalk packageAt: 'LindaClientDemo') imports: {'ko' -> 'knockout'. 'linda' -> 'linda-client'. 'socketIo' -> 'socket.io'. 'amber/jquery/Wrappers-JQuery'. 'amber/web/Web'. 'silk/Silk'}!
Tuple subclass: #FibTuple
	instanceVariableNames: ''
	package: 'LindaClientDemo'!

!FibTuple methodsFor: 'accessing'!

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

!FibTuple class methodsFor: 'tuple space'!

tupleSpaceName

	^'fibSpace'
! !

Tuple subclass: #GyroTuple
	instanceVariableNames: ''
	package: 'LindaClientDemo'!

!GyroTuple methodsFor: 'accessing'!

gX

	^self data at: self class gXKey
!

gX: aValue

	self data at: self class gXKey put: aValue
!

gY

	^self data at: self class gYKey
!

gY: aValue

	self data at: self class gYKey put: aValue
!

gZ

	^self data at: self class gZKey
!

gZ: aValue

	self data at: self class gZKey put: aValue
!

handleName

	^self data at: self class handleNameKey
!

handleName: aString

	self data at: self class handleNameKey put: aString
! !

!GyroTuple class methodsFor: 'accessor key'!

gXKey
	^'gX'.
!

gYKey
	^'gY'.
!

gZKey
	^'gZ'.
!

handleNameKey
	^'handleName'.
! !

!GyroTuple class methodsFor: 'tuple space'!

tupleSpaceName

	^'gyroSpace'
! !

Object subclass: #LindaClientApp
	instanceVariableNames: 'lindaClient viewModel watchId'
	package: 'LindaClientDemo'!

!LindaClientApp methodsFor: 'accessing'!

lindaClient
	^ lindaClient
!

lindaClient: anObject
	lindaClient := anObject
!

serverUrl
	^ (self viewModel at: #serverUrl) value
!

tickets
	^ (self viewModel at: #tickets) value
!

tickets: anInteger
	(self viewModel at: #tickets) value: anInteger
!

viewModel
	^viewModel ifNil: [viewModel := #{}]
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
	elem := '<li>' asJQuery.
	elem html: aMsg.
	'#output-list' asJQuery prepend: elem
!

doSilkTAG
	'#output-list' asSilk LI: 'Silk TAG: added me!!'
!

startDemo

	self setupLindaClient.
! !

!LindaClientApp methodsFor: 'starting'!

augmentPage
	
	'#start' asJQuery click: [ self startDemo ].
	self setupViewModel.
	ko applyBindings: viewModel.
	self setupLindaClient.
!

setupLindaClient

	lindaClient := LindaClient serverUrl: self serverUrl
!

setupViewModel

	viewModel := #{
		#tickets -> (ko observable: 0) .
		#serverUrl -> (ko observable: 'http://node-linda-ststudy.herokuapp.com') 
	}.
! !

!LindaClientApp class methodsFor: 'starting'!

ko
	^ko
!

start
	self new augmentPage
! !

LindaClientApp subclass: #LindaFactorialMaster
	instanceVariableNames: ''
	package: 'LindaClientDemo'!

!LindaFactorialMaster methodsFor: 'starting'!

augmentPage
	'#amber-with' asJQuery click: [ self doAmberWith ].
	'#silk-tag' asSilk on: #click bind: [ self doSilkTAG ].
	'#jquery-append' asJQuery click: [ self doJQueryAppend ].
!

map
	"Map "
!

reduce
! !

!LindaFactorialMaster class methodsFor: 'starting'!

example

	| app tickets n lot ts ans|
	app := LindaFactorialMaster new.
	app setupViewModel.
	app tickets: 5.
	n := 100.
	lot := n / app tickets.
	app lindaClient: (LindaClient serverUrl: 'http://node-linda-ststudy.herokuapp.com').
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
	package: 'LindaClientDemo'!

!LindaFactorialSolver methodsFor: 'as yet unclassified'!

reduce: n
! !

!LindaFactorialSolver class methodsFor: 'as yet unclassified'!

example

	| linda  base lot ts ans|
	linda := LindaClient serverUrl: 'http://node-linda-ststudy.herokuapp.com'.
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
	package: 'LindaClientDemo'!

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

mapProblem

	self removeIoCallbacks.
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
	app lindaClient: (LindaClient serverUrl: 'http://node-linda-ststudy.herokuapp.com').
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
	package: 'LindaClientDemo'!

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
	solver lindaClient: (LindaClient serverUrl: 'http://node-linda-ststudy.herokuapp.com').
	solver tupleSpace take: #{#type -> 'fib'} callback: [:err :t | 
		solver reduce: (t data at: 'n')]
!

start
	self new augmentPage
! !

LindaClientApp subclass: #LindaFibWorker
	instanceVariableNames: ''
	package: 'LindaClientDemo'!

!LindaFibWorker methodsFor: 'accessing'!

resultNumber
	^ end
!

targetNumber
	^ start
! !

!LindaFibWorker methodsFor: 'action'!

startReduce

	Transcript show: 'pan pan pan'; cr.
	self lindaClient: (LindaClient serverUrl: 'http://127.0.0.1:8931').
	self tupleSpace take: #{#type -> 'fib'} callback: [:err :t | 
		self reduce: (t data at: 'n')]
! !

!LindaFibWorker methodsFor: 'starting'!

augmentPage
	'#amber-with' asJQuery click: [ self doAmberWith ].
	'#silk-tag' asSilk on: #click bind: [ self doSilkTAG ].
	'#jquery-append' asJQuery click: [ self doJQueryAppend ].
	'#start' asJQuery click: [ self startReduce ].
	
	viewModel := #{
		#targetNumber -> (ko observable: 0) .
		#resultNumber -> (ko observable: 0) 
	}.
	ko applyBindings: viewModel.
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
	self doJQueryPrepend: '値: ' , n printString.
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
	self doJQueryPrepend: '結果: ', aValue printString.
	tuple := FibTuple result.
	tuple n: anIndex.
	tuple answer: aValue.
	self tupleSpace write: tuple
! !

!LindaFibWorker class methodsFor: 'starting'!

example

	| solver |
	solver := LindaFibWorker new.
	solver lindaClient: (LindaClient serverUrl: 'http://node-linda-ststudy.herokuapp.com').
	solver tupleSpace take: #{#type -> 'fib'} callback: [:err :t | 
		solver reduce: (t data at: 'n')]
!

start
	self new augmentPage
! !

LindaClientApp subclass: #LindaGyroMaster
	instanceVariableNames: 'list workers listModel'
	package: 'LindaClientDemo'!

!LindaGyroMaster methodsFor: 'accessing'!

tupleSpace
	^self lindaClient tupleSpace: GyroTuple tupleSpaceName
!

workerAt: aKey
	^self workers at: aKey
!

workerAt: aKey put: aWorker
	self workers at: aKey put: aWorker
!

workers
	workers ifNil: [workers := #{}].
	^workers
! !

!LindaGyroMaster methodsFor: 'action'!

startDemo
	| tuple |
	super startDemo.
	self inspect.
	tuple := GyroTuple new.
	watchId ifNotNil: [self tupleSpace cancel: watchId].
	list := OrderedCollection new.
	watchId := self tupleSpace watch: tuple callback: [:err :t |
		list add: t.
		self workerAt: t fromAddress put: t.
		(self viewModel at: #workers) value: (self workers values collect: [:e | e data]).

		"self doJQueryPrepend: t asJSON printString."
	].
! !

!LindaGyroMaster methodsFor: 'starting'!

augmentPage
	super augmentPage.
!

setupViewModel
	super setupViewModel.
	viewModel addAll: #{
		#workers -> (ko observableArray: #())
	}.
! !

LindaClientApp subclass: #LindaGyroWorker
	instanceVariableNames: ''
	package: 'LindaClientDemo'!

!LindaGyroWorker methodsFor: 'accessing'!

gX
	^(viewModel at: #gX) value
!

gX: aValue
	(viewModel at: #gX) value: aValue
!

gY
	^(viewModel at: #gY) value
!

gY: aValue
	(viewModel at: #gY) value: aValue
!

gZ
	^(viewModel at: #gZ) value
!

gZ: aValue
	(viewModel at: #gZ) value: aValue
!

handleName 
	^(viewModel at: #handleName ) value
!

tupeSpace
	^self lindaClient tupleSpace: GyroTuple tupleSpaceName
!

tupleSpace
	^self lindaClient tupleSpace: GyroTuple tupleSpaceName
! !

!LindaGyroWorker methodsFor: 'action'!

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
!

setupHandle

	window addEventListener: #devicemotion with: self devicemotionHandler.
!

startDemo
	super startDemo.
	self setupHandle.
! !

!LindaGyroWorker methodsFor: 'starting'!

augmentPage

	super augmentPage.
!

devicemotionHandler
	^[:event |
		self 
			gX: (event accelerationIncludingGravity x rounded)
			gY: (event accelerationIncludingGravity y rounded)
			gZ: (event accelerationIncludingGravity z rounded)		
	].
!

olddevicemotionHandler
	^[:event |
		"(viewModel at: #accX) value: event acceleration x.
		(viewModel at: #accY) value: event acceleration y.
		(viewModel at: #accZ) value: event acceleration z."
		
		(viewModel at: #gX) value: (event accelerationIncludingGravity x rounded) * 10.
		(viewModel at: #gY) value: (event accelerationIncludingGravity y rounded) * 10.
		(viewModel at: #gZ) value: (event accelerationIncludingGravity z rounded) * 10.
		
		"
		(viewModel at: #tiltLR) value: event rotationRate gamma rounded.
		(viewModel at: #tiltFB) value: event rotationRate beta rounded.
		(viewModel at: #webRotate) value: 'rotate(', (viewModel at: #tiltLR) value printString, 'deg) rotate3d(1,0,0, ', ((viewModel at: #tiltFB) value * -1) printString, 'deg)' .
		(viewModel at: #mozRotate) value: 'rotate(', (viewModel at: #tiltLR) value printString, 'deg)' .
		"
		(viewModel at: #rotateYX) value: 'rotateX(', (self gY) printString, 'deg)', 
		' rotateY(', (self gX) printString, 'deg)'.
		
		
	].
!

setupViewModel

	super setupViewModel.
	
	viewModel addAll: #{
		#handleName -> (ko observable: 'handle name') .
		#gX -> (ko observable: 0) .
		#gY -> (ko observable: 0) .
		#gZ -> (ko observable: 0) .
		
		"
		#tiltLR -> (ko observable: 0).
		#tiltFB -> (ko observable: 0).
		#webRotate -> (ko observable: 'rotate(', (30) printString, 'deg) rotate3d(1,0,0, ', ((30) * -1) printString, 'deg)').
		#mozRotate -> (ko observable: 'rotate(', (30) printString, 'deg)').
		"
		
		#rotateYX -> (ko observable: 
		'rotateX(', 30 printString, 'deg)', 
		' rotateY(', 30 printString, 'deg)')
	}.
! !

!LindaGyroWorker methodsFor: 'updating'!

gX: xValue gY: yValue gZ: zValue
	| tuple |
	(self gX ~= xValue) & (self gY ~= yValue) & (self gZ ~= zValue) 
		ifTrue: [
	
			self gX: (xValue rounded) * 10.
			self gY: (yValue rounded) * 10.
			self gZ: (zValue rounded) * 10.

			(viewModel at: #rotateYX) value: 'rotateX(', yValue printString, 'deg)', 
				' rotateY(', xValue printString, 'deg)'.
			tuple := GyroTuple new.
			tuple handleName: self handleName.
			tuple gX: self gX.
			tuple gY: self gY.
			tuple gZ: self gZ.
			self tupleSpace write: tuple.
		]
! !


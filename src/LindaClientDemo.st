Smalltalk createPackage: 'LindaClientDemo'!
(Smalltalk packageAt: 'LindaClientDemo') imports: {'ko' -> 'knockout'. 'linda' -> 'linda-client'. 'socketIo' -> 'socket.io'. 'amber/jquery/Wrappers-JQuery'. 'amber/web/Web'. 'silk/Silk'}!
Object subclass: #LindaClientApp
	instanceVariableNames: 'serverUrl tickets lindaClient viewModel'
	package: 'LindaClientDemo'!

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
	elem := '<li>' asJQuery.
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
	package: 'LindaClientDemo'!

!LindaFactorialSolver methodsFor: 'as yet unclassified'!

reduce: n
! !

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
	solver lindaClient: (LindaClient serverUrl: 'http://127.0.0.1:8931').
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
	solver lindaClient: (LindaClient serverUrl: 'http://127.0.0.1:8931').
	solver tupleSpace take: #{#type -> 'fib'} callback: [:err :t | 
		solver reduce: (t data at: 'n')]
!

start
	self new augmentPage
! !

LindaClientApp subclass: #LindaGyroMaster
	instanceVariableNames: ''
	package: 'LindaClientDemo'!

LindaClientApp subclass: #LindaGyroWorker
	instanceVariableNames: ''
	package: 'LindaClientDemo'!

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
! !

!LindaGyroWorker methodsFor: 'starting'!

augmentPage
	'#amber-with' asJQuery click: [ self doAmberWith ].
	'#silk-tag' asSilk on: #click bind: [ self doSilkTAG ].
	'#jquery-append' asJQuery click: [ self doJQueryAppend ].
	window addEventListener: #devicemotion with: self devicemotionHandler.
	
	viewModel := #{
		#accX -> (ko observable: 0) .
		#accY -> (ko observable: 0) .
		#accZ -> (ko observable: 0) 
	}.
	ko applyBindings: viewModel
!

devicemotionHandler
	^[:event |

		Transcript show: event printString; cr.].
!

deviceorientationHandler
	^[:event |
		self alpha: event alpha.
		self beta: event beta.
		self gamma: event gamma.
		Transcript show: event printString; cr.].
! !

!LindaGyroWorker class methodsFor: 'starting'!

start
	self new augmentPage
! !


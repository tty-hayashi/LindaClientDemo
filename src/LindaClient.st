Smalltalk createPackage: 'LindaClient'!
(Smalltalk packageAt: 'LindaClient') imports: {'linda' -> 'linda-client'. 'socketIo' -> 'socket.io'. 'amber/jquery/Wrappers-JQuery'. 'amber/web/Web'. 'silk/Silk'}!
Object subclass: #LindaClientApp
	instanceVariableNames: 'lindaClient alpha beta gamma'
	package: 'LindaClient'!

!LindaClientApp methodsFor: 'accessing'!

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

!LindaClientApp methodsFor: 'action'!

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

!LindaFactorialMaster methodsFor: 'action'!

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

!LindaFactorialMaster methodsFor: 'starting'!

augmentPage
	'#amber-with' asJQuery click: [ self doAmberWith ].
	'#silk-tag' asSilk on: #click bind: [ self doSilkTAG ].
	'#jquery-append' asJQuery click: [ self doJQueryAppend ].
	window addEventListener: #deviceorientation with: self deviceorientationHandler
! !

!LindaFactorialMaster class methodsFor: 'starting'!

start
	self new augmentPage
! !

LindaClientApp subclass: #LindaFactorialWorker
	instanceVariableNames: ''
	package: 'LindaClient'!

LindaClientApp subclass: #LindaGyroMaster
	instanceVariableNames: ''
	package: 'LindaClient'!

LindaClientApp subclass: #LindaGyroWorker
	instanceVariableNames: 'alpha beta gamma'
	package: 'LindaClient'!

!LindaGyroWorker methodsFor: 'accessing'!

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
	window addEventListener: #deviceorientation with: self deviceorientationHandler
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
	
	^self proxy read: aTupleHashedCollection asJSON with: aBlockClosure
!

take: aTupleHashedCollection
	"aBlockClosure <[:err :tuple | ]>"
	| ans |
	ans := OrderedCollection new.
	self take: aTupleHashedCollection callback: [:e :t| ans add: (Tuple proxy: t)].
	^ans
!

take: aTupleHashedCollection callback: aBlockClosure
	"aBlockClosure <[:err :tuple | ]>"
	
	^self proxy take: aTupleHashedCollection asJSON with: aBlockClosure
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


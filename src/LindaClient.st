Smalltalk createPackage: 'LindaClient'!
(Smalltalk packageAt: 'LindaClient') imports: {'linda' -> 'linda-client'. 'socketIo' -> 'socket.io'. 'amber/jquery/Wrappers-JQuery'. 'amber/web/Web'. 'silk/Silk'}!
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
	^ self proxy at: 'expire_at' ifAbsent: [nil]
!

from 
	^self proxy at: 'from' ifAbsent: [nil]
!

fromAddress
	^self proxy at: 'from' ifAbsent: [nil]
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
	
	^self proxy watch: aTupleHashedCollection asJSON with: [:e :t | aBlockClosure value: e value: (Tuple fromJSON: t)]
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


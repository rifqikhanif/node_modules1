'use strict';

/* eslint global-require: 0 */
// https://www.ecma-international.org/ecma-262/12.0/#sec-abstract-operations
var ES2021 = {
	'Abstract Equality Comparison': require('./2021/AbstractEqualityComparison'),
	'Abstract Relational Comparison': require('./2021/AbstractRelationalComparison'),
	'Strict Equality Comparison': require('./2021/StrictEqualityComparison'),
	abs: require('./2021/abs'),
	AddEntriesFromIterable: require('./2021/AddEntriesFromIterable'),
	AddToKeptObjects: require('./2021/AddToKeptObjects'),
	AdvanceStringIndex: require('./2021/AdvanceStringIndex'),
	ApplyStringOrNumericBinaryOperator: require('./2021/ApplyStringOrNumericBinaryOperator'),
	ArrayCreate: require('./2021/ArrayCreate'),
	ArraySetLength: require('./2021/ArraySetLength'),
	ArraySpeciesCreate: require('./2021/ArraySpeciesCreate'),
	BigInt: require('./2021/BigInt'),
	BigIntBitwiseOp: require('./2021/BigIntBitwiseOp'),
	BinaryAnd: require('./2021/BinaryAnd'),
	BinaryOr: require('./2021/BinaryOr'),
	BinaryXor: require('./2021/BinaryXor'),
	ByteListBitwiseOp: require('./2021/ByteListBitwiseOp'),
	ByteListEqual: require('./2021/ByteListEqual'),
	Call: require('./2021/Call'),
	CanonicalNumericIndexString: require('./2021/CanonicalNumericIndexString'),
	CharacterRange: require('./2021/CharacterRange'),
	clamp: require('./2021/clamp'),
	substring: require('./2021/substring'),
	ClearKeptObjects: require('./2021/ClearKeptObjects'),
	CodePointAt: require('./2021/CodePointAt'),
	CodePointsToString: require('./2021/CodePointsToString'),
	CompletePropertyDescriptor: require('./2021/CompletePropertyDescriptor'),
	CopyDataProperties: require('./2021/CopyDataProperties'),
	CreateDataProperty: require('./2021/CreateDataProperty'),
	CreateDataPropertyOrThrow: require('./2021/CreateDataPropertyOrThrow'),
	CreateHTML: require('./2021/CreateHTML'),
	CreateIterResultObject: require('./2021/CreateIterResultObject'),
	CreateListFromArrayLike: require('./2021/CreateListFromArrayLike'),
	CreateMethodProperty: require('./2021/CreateMethodProperty'),
	CreateRegExpStringIterator: require('./2021/CreateRegExpStringIterator'),
	DateFromTime: require('./2021/DateFromTime'),
	DateString: require('./2021/DateString'),
	Day: require('./2021/Day'),
	DayFromYear: require('./2021/DayFromYear'),
	DaysInYear: require('./2021/DaysInYear'),
	DayWithinYear: require('./2021/DayWithinYear'),
	DefinePropertyOrThrow: require('./2021/DefinePropertyOrThrow'),
	DeletePropertyOrThrow: require('./2021/DeletePropertyOrThrow'),
	EnumerableOwnPropertyNames: require('./2021/EnumerableOwnPropertyNames'),
	FlattenIntoArray: require('./2021/FlattenIntoArray'),
	floor: require('./2021/floor'),
	FromPropertyDescriptor: require('./2021/FromPropertyDescriptor'),
	Get: require('./2021/Get'),
	GetIterator: require('./2021/GetIterator'),
	GetMethod: require('./2021/GetMethod'),
	GetOwnPropertyKeys: require('./2021/GetOwnPropertyKeys'),
	GetPromiseResolve: require('./2021/GetPromiseResolve'),
	GetPrototypeFromConstructor: require('./2021/GetPrototypeFromConstructor'),
	GetSubstitution: require('./2021/GetSubstitution'),
	GetV: require('./2021/GetV'),
	HasOwnProperty: require('./2021/HasOwnProperty'),
	HasProperty: require('./2021/HasProperty'),
	HourFromTime: require('./2021/HourFromTime'),
	InLeapYear: require('./2021/InLeapYear'),
	InstanceofOperator: require('./2021/InstanceofOperator'),
	Invoke: require('./2021/Invoke'),
	IsAccessorDescriptor: require('./2021/IsAccessorDescriptor'),
	IsArray: require('./2021/IsArray'),
	IsBigIntElementType: require('./2021/IsBigIntElementType'),
	IsCallable: require('./2021/IsCallable'),
	IsCompatiblePropertyDescriptor: require('./2021/IsCompatiblePropertyDescriptor'),
	IsConcatSpreadable: require('./2021/IsConcatSpreadable'),
	IsConstructor: require('./2021/IsConstructor'),
	IsDataDescriptor: require('./2021/IsDataDescriptor'),
	IsExtensible: require('./2021/IsExtensible'),
	IsGenericDescriptor: require('./2021/IsGenericDescriptor'),
	IsIntegralNumber: require('./2021/IsIntegralNumber'),
	IsNoTearConfiguration: require('./2021/IsNoTearConfiguration'),
	IsPromise: require('./2021/IsPromise'),
	IsPropertyKey: require('./2021/IsPropertyKey'),
	IsRegExp: require('./2021/IsRegExp'),
	IsSharedArrayBuffer: require('./2021/IsSharedArrayBuffer'),
	IsStringPrefix: require('./2021/IsStringPrefix'),
	IsUnclampedIntegerElementType: require('./2021/IsUnclampedIntegerElementType'),
	IsUnsignedElementType: require('./2021/IsUnsignedElementType'),
	IterableToList: require('./2021/IterableToList'),
	IteratorClose: require('./2021/IteratorClose'),
	IteratorComplete: require('./2021/IteratorComplete'),
	IteratorNext: require('./2021/IteratorNext'),
	IteratorStep: require('./2021/IteratorStep'),
	IteratorValue: require('./2021/IteratorValue'),
	LengthOfArrayLike: require('./2021/LengthOfArrayLike'),
	MakeDate: require('./2021/MakeDate'),
	MakeDay: require('./2021/MakeDay'),
	MakeTime: require('./2021/MakeTime'),
	MinFromTime: require('./2021/MinFromTime'),
	modulo: require('./2021/modulo'),
	MonthFromTime: require('./2021/MonthFromTime'),
	msFromTime: require('./2021/msFromTime'),
	Number: require('./2021/Number'),
	NumberBitwiseOp: require('./2021/NumberBitwiseOp'),
	NumberToBigInt: require('./2021/NumberToBigInt'),
	OrdinaryCreateFromConstructor: require('./2021/OrdinaryCreateFromConstructor'),
	OrdinaryDefineOwnProperty: require('./2021/OrdinaryDefineOwnProperty'),
	OrdinaryGetOwnProperty: require('./2021/OrdinaryGetOwnProperty'),
	OrdinaryGetPrototypeOf: require('./2021/OrdinaryGetPrototypeOf'),
	OrdinaryHasInstance: require('./2021/OrdinaryHasInstance'),
	OrdinaryHasProperty: require('./2021/OrdinaryHasProperty'),
	OrdinaryObjectCreate: require('./2021/OrdinaryObjectCreate'),
	OrdinarySetPrototypeOf: require('./2021/OrdinarySetPrototypeOf'),
	OrdinaryToPrimitive: require('./2021/OrdinaryToPrimitive'),
	PromiseResolve: require('./2021/PromiseResolve'),
	QuoteJSONString: require('./2021/QuoteJSONString'),
	RegExpCreate: require('./2021/RegExpCreate'),
	RegExpExec: require('./2021/RegExpExec'),
	RequireObjectCoercible: require('./2021/RequireObjectCoercible'),
	SameValue: require('./2021/SameValue'),
	SameValueNonNumeric: require('./2021/SameValueNonNumeric'),
	SameValueZero: require('./2021/SameValueZero'),
	SecFromTime: require('./2021/SecFromTime'),
	Set: require('./2021/Set'),
	SetFunctionLength: require('./2021/SetFunctionLength'),
	SetFunctionName: require('./2021/SetFunctionName'),
	SetIntegrityLevel: require('./2021/SetIntegrityLevel'),
	SpeciesConstructor: require('./2021/SpeciesConstructor'),
	SplitMatch: require('./2021/SplitMatch'),
	StringCreate: require('./2021/StringCreate'),
	StringGetOwnProperty: require('./2021/StringGetOwnProperty'),
	StringIndexOf: require('./2021/StringIndexOf'),
	StringPad: require('./2021/StringPad'),
	StringToBigInt: require('./2021/StringToBigInt'),
	StringToCodePoints: require('./2021/StringToCodePoints'),
	SymbolDescriptiveString: require('./2021/SymbolDescriptiveString'),
	TestIntegrityLevel: require('./2021/TestIntegrityLevel'),
	thisBigIntValue: require('./2021/thisBigIntValue'),
	thisBooleanValue: require('./2021/thisBooleanValue'),
	thisNumberValue: require('./2021/thisNumberValue'),
	thisStringValue: require('./2021/thisStringValue'),
	thisSymbolValue: require('./2021/thisSymbolValue'),
	thisTimeValue: require('./2021/thisTimeValue'),
	TimeClip: require('./2021/TimeClip'),
	TimeFromYear: require('./2021/TimeFromYear'),
	TimeString: require('./2021/TimeString'),
	TimeWithinDay: require('./2021/TimeWithinDay'),
	ToBigInt: require('./2021/ToBigInt'),
	ToBigInt64: require('./2021/ToBigInt64'),
	ToBigUint64: require('./2021/ToBigUint64'),
	ToBoolean: require('./2021/ToBoolean'),
	ToDateString: require('./2021/ToDateString'),
	ToIndex: require('./2021/ToIndex'),
	ToInt16: require('./2021/ToInt16'),
	ToInt32: require('./2021/ToInt32'),
	ToInt8: require('./2021/ToInt8'),
	ToIntegerOrInfinity: require('./2021/ToIntegerOrInfinity'),
	ToLength: require('./2021/ToLength'),
	ToNumber: require('./2021/ToNumber'),
	ToNumeric: require('./2021/ToNumeric'),
	ToObject: require('./2021/ToObject'),
	ToPrimitive: require('./2021/ToPrimitive'),
	ToPropertyDescriptor: require('./2021/ToPropertyDescriptor'),
	ToPropertyKey: require('./2021/ToPropertyKey'),
	ToString: require('./2021/ToString'),
	ToUint16: require('./2021/ToUint16'),
	ToUint32: require('./2021/ToUint32'),
	ToUint8: require('./2021/ToUint8'),
	ToUint8Clamp: require('./2021/ToUint8Clamp'),
	TrimString: require('./2021/TrimString'),
	Type: require('./2021/Type'),
	UnicodeEscape: require('./2021/UnicodeEscape'),
	UTF16EncodeCodePoint: require('./2021/UTF16EncodeCodePoint'),
	UTF16SurrogatePairToCodePoint: require('./2021/UTF16SurrogatePairToCodePoint'),
	ValidateAndApplyPropertyDescriptor: require('./2021/ValidateAndApplyPropertyDescriptor'),
	WeakRefDeref: require('./2021/WeakRefDeref'),
	WeekDay: require('./2021/WeekDay'),
	YearFromTime: require('./2021/YearFromTime')
};

module.exports = ES2021;

// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt,
  CallResult
} from "@graphprotocol/graph-ts";

export class DataRequested extends EthereumEvent {
  get params(): DataRequested__Params {
    return new DataRequested__Params(this);
  }
}

export class DataRequested__Params {
  _event: DataRequested;

  constructor(event: DataRequested) {
    this._event = event;
  }

  get _sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _query(): string {
    return this._event.parameters[1].value.toString();
  }

  get _querySymbol(): string {
    return this._event.parameters[2].value.toString();
  }

  get _granularity(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _requestId(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get _totalTips(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class NewChallenge extends EthereumEvent {
  get params(): NewChallenge__Params {
    return new NewChallenge__Params(this);
  }
}

export class NewChallenge__Params {
  _event: NewChallenge;

  constructor(event: NewChallenge) {
    this._event = event;
  }

  get _currentChallenge(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get _currentRequestId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get _difficulty(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _multiplier(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _query(): string {
    return this._event.parameters[4].value.toString();
  }

  get _totalTips(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class NewRequestOnDeck extends EthereumEvent {
  get params(): NewRequestOnDeck__Params {
    return new NewRequestOnDeck__Params(this);
  }
}

export class NewRequestOnDeck__Params {
  _event: NewRequestOnDeck;

  constructor(event: NewRequestOnDeck) {
    this._event = event;
  }

  get _requestId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _query(): string {
    return this._event.parameters[1].value.toString();
  }

  get _onDeckQueryHash(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get _onDeckTotalTips(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class NewValue extends EthereumEvent {
  get params(): NewValue__Params {
    return new NewValue__Params(this);
  }
}

export class NewValue__Params {
  _event: NewValue;

  constructor(event: NewValue) {
    this._event = event;
  }

  get _requestId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _time(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get _value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _totalTips(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _currentChallenge(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }
}

export class NonceSubmitted extends EthereumEvent {
  get params(): NonceSubmitted__Params {
    return new NonceSubmitted__Params(this);
  }
}

export class NonceSubmitted__Params {
  _event: NonceSubmitted;

  constructor(event: NonceSubmitted) {
    this._event = event;
  }

  get _miner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _nonce(): string {
    return this._event.parameters[1].value.toString();
  }

  get _requestId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _value(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _currentChallenge(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }
}

export class OwnershipProposed extends EthereumEvent {
  get params(): OwnershipProposed__Params {
    return new OwnershipProposed__Params(this);
  }
}

export class OwnershipProposed__Params {
  _event: OwnershipProposed;

  constructor(event: OwnershipProposed) {
    this._event = event;
  }

  get _previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OwnershipTransferred extends EthereumEvent {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get _previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class TipAdded extends EthereumEvent {
  get params(): TipAdded__Params {
    return new TipAdded__Params(this);
  }
}

export class TipAdded__Params {
  _event: TipAdded;

  constructor(event: TipAdded) {
    this._event = event;
  }

  get _sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _requestId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get _tip(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _totalTips(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class LibraryContract extends SmartContract {
  static bind(address: Address): LibraryContract {
    return new LibraryContract("LibraryContract", address);
  }
}
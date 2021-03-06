// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Request extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Request entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Request entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Request", id.toString(), this);
  }

  static load(id: string): Request | null {
    return store.get("Request", id) as Request | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get requestId(): BigInt {
    let value = this.get("requestId");
    return value.toBigInt();
  }

  set requestId(value: BigInt) {
    this.set("requestId", Value.fromBigInt(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    return value.toBytes();
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }

  get query(): string {
    let value = this.get("query");
    return value.toString();
  }

  set query(value: string) {
    this.set("query", Value.fromString(value));
  }

  get querySymbol(): string {
    let value = this.get("querySymbol");
    return value.toString();
  }

  set querySymbol(value: string) {
    this.set("querySymbol", Value.fromString(value));
  }

  get granularity(): BigInt {
    let value = this.get("granularity");
    return value.toBigInt();
  }

  set granularity(value: BigInt) {
    this.set("granularity", Value.fromBigInt(value));
  }

  get totalTips(): BigInt {
    let value = this.get("totalTips");
    return value.toBigInt();
  }

  set totalTips(value: BigInt) {
    this.set("totalTips", Value.fromBigInt(value));
  }

  get miningEvents(): Array<string> | null {
    let value = this.get("miningEvents");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set miningEvents(value: Array<string> | null) {
    if (value === null) {
      this.unset("miningEvents");
    } else {
      this.set("miningEvents", Value.fromStringArray(value as Array<string>));
    }
  }

  get disputes(): Array<string> | null {
    let value = this.get("disputes");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set disputes(value: Array<string> | null) {
    if (value === null) {
      this.unset("disputes");
    } else {
      this.set("disputes", Value.fromStringArray(value as Array<string>));
    }
  }
}

export class MiningEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save MiningEvent entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save MiningEvent entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("MiningEvent", id.toString(), this);
  }

  static load(id: string): MiningEvent | null {
    return store.get("MiningEvent", id) as MiningEvent | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get requestId(): BigInt {
    let value = this.get("requestId");
    return value.toBigInt();
  }

  set requestId(value: BigInt) {
    this.set("requestId", Value.fromBigInt(value));
  }

  get request(): string {
    let value = this.get("request");
    return value.toString();
  }

  set request(value: string) {
    this.set("request", Value.fromString(value));
  }

  get time(): BigInt {
    let value = this.get("time");
    return value.toBigInt();
  }

  set time(value: BigInt) {
    this.set("time", Value.fromBigInt(value));
  }

  get minedValue(): BigInt {
    let value = this.get("minedValue");
    return value.toBigInt();
  }

  set minedValue(value: BigInt) {
    this.set("minedValue", Value.fromBigInt(value));
  }

  get totalTips(): BigInt {
    let value = this.get("totalTips");
    return value.toBigInt();
  }

  set totalTips(value: BigInt) {
    this.set("totalTips", Value.fromBigInt(value));
  }

  get currentChallenge(): Bytes {
    let value = this.get("currentChallenge");
    return value.toBytes();
  }

  set currentChallenge(value: Bytes) {
    this.set("currentChallenge", Value.fromBytes(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get minerValues(): Array<string> | null {
    let value = this.get("minerValues");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set minerValues(value: Array<string> | null) {
    if (value === null) {
      this.unset("minerValues");
    } else {
      this.set("minerValues", Value.fromStringArray(value as Array<string>));
    }
  }
}

export class MinerValue extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save MinerValue entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save MinerValue entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("MinerValue", id.toString(), this);
  }

  static load(id: string): MinerValue | null {
    return store.get("MinerValue", id) as MinerValue | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get requestId(): BigInt {
    let value = this.get("requestId");
    return value.toBigInt();
  }

  set requestId(value: BigInt) {
    this.set("requestId", Value.fromBigInt(value));
  }

  get currentChallenge(): Bytes {
    let value = this.get("currentChallenge");
    return value.toBytes();
  }

  set currentChallenge(value: Bytes) {
    this.set("currentChallenge", Value.fromBytes(value));
  }

  get miningEvent(): string | null {
    let value = this.get("miningEvent");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set miningEvent(value: string | null) {
    if (value === null) {
      this.unset("miningEvent");
    } else {
      this.set("miningEvent", Value.fromString(value as string));
    }
  }

  get miningEventId(): string {
    let value = this.get("miningEventId");
    return value.toString();
  }

  set miningEventId(value: string) {
    this.set("miningEventId", Value.fromString(value));
  }

  get miner(): Bytes {
    let value = this.get("miner");
    return value.toBytes();
  }

  set miner(value: Bytes) {
    this.set("miner", Value.fromBytes(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }
}

export class Dispute extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Dispute entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Dispute entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Dispute", id.toString(), this);
  }

  static load(id: string): Dispute | null {
    return store.get("Dispute", id) as Dispute | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get miner(): Bytes {
    let value = this.get("miner");
    return value.toBytes();
  }

  set miner(value: Bytes) {
    this.set("miner", Value.fromBytes(value));
  }

  get disputeId(): BigInt {
    let value = this.get("disputeId");
    return value.toBigInt();
  }

  set disputeId(value: BigInt) {
    this.set("disputeId", Value.fromBigInt(value));
  }

  get requestId(): BigInt {
    let value = this.get("requestId");
    return value.toBigInt();
  }

  set requestId(value: BigInt) {
    this.set("requestId", Value.fromBigInt(value));
  }

  get request(): string {
    let value = this.get("request");
    return value.toString();
  }

  set request(value: string) {
    this.set("request", Value.fromString(value));
  }

  get result(): BigInt | null {
    let value = this.get("result");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set result(value: BigInt | null) {
    if (value === null) {
      this.unset("result");
    } else {
      this.set("result", Value.fromBigInt(value as BigInt));
    }
  }

  get reportedMiner(): Bytes | null {
    let value = this.get("reportedMiner");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set reportedMiner(value: Bytes | null) {
    if (value === null) {
      this.unset("reportedMiner");
    } else {
      this.set("reportedMiner", Value.fromBytes(value as Bytes));
    }
  }

  get reportingParty(): Bytes | null {
    let value = this.get("reportingParty");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set reportingParty(value: Bytes | null) {
    if (value === null) {
      this.unset("reportingParty");
    } else {
      this.set("reportingParty", Value.fromBytes(value as Bytes));
    }
  }

  get active(): boolean {
    let value = this.get("active");
    return value.toBoolean();
  }

  set active(value: boolean) {
    this.set("active", Value.fromBoolean(value));
  }

  get disputeVotePassed(): boolean {
    let value = this.get("disputeVotePassed");
    return value.toBoolean();
  }

  set disputeVotePassed(value: boolean) {
    this.set("disputeVotePassed", Value.fromBoolean(value));
  }

  get tally(): BigInt | null {
    let value = this.get("tally");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set tally(value: BigInt | null) {
    if (value === null) {
      this.unset("tally");
    } else {
      this.set("tally", Value.fromBigInt(value as BigInt));
    }
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get relatedMiningEventData(): Array<BigInt> | null {
    let value = this.get("relatedMiningEventData");
    if (value === null) {
      return null;
    } else {
      return value.toBigIntArray();
    }
  }

  set relatedMiningEventData(value: Array<BigInt> | null) {
    if (value === null) {
      this.unset("relatedMiningEventData");
    } else {
      this.set(
        "relatedMiningEventData",
        Value.fromBigIntArray(value as Array<BigInt>)
      );
    }
  }

  get votes(): Array<string> | null {
    let value = this.get("votes");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set votes(value: Array<string> | null) {
    if (value === null) {
      this.unset("votes");
    } else {
      this.set("votes", Value.fromStringArray(value as Array<string>));
    }
  }
}

export class Vote extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Vote entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Vote entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Vote", id.toString(), this);
  }

  static load(id: string): Vote | null {
    return store.get("Vote", id) as Vote | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get dispute(): string {
    let value = this.get("dispute");
    return value.toString();
  }

  set dispute(value: string) {
    this.set("dispute", Value.fromString(value));
  }

  get disputeId(): BigInt {
    let value = this.get("disputeId");
    return value.toBigInt();
  }

  set disputeId(value: BigInt) {
    this.set("disputeId", Value.fromBigInt(value));
  }

  get position(): boolean {
    let value = this.get("position");
    return value.toBoolean();
  }

  set position(value: boolean) {
    this.set("position", Value.fromBoolean(value));
  }

  get voter(): Bytes {
    let value = this.get("voter");
    return value.toBytes();
  }

  set voter(value: Bytes) {
    this.set("voter", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

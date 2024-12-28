var Pg = Object.defineProperty;
var Ng = (e, t, n) => t in e ? Pg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var $ = (e, t, n) => Ng(e, typeof t != "symbol" ? t + "" : t, n);
import { defineComponent as zg, ref as ic, onMounted as Rg, openBlock as _i, createElementBlock as xi, createElementVNode as Dn, toDisplayString as oc, createApp as Lg } from "vue";
function $g(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const a in r)
        if (a !== "default" && !(a in e)) {
          const i = Object.getOwnPropertyDescriptor(r, a);
          i && Object.defineProperty(e, a, i.get ? i : {
            enumerable: !0,
            get: () => r[a]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
const du = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), fu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), ht = {
  DECLARE: "DECLARE",
  DEPLOY: "DEPLOY",
  DEPLOY_ACCOUNT: "DEPLOY_ACCOUNT",
  INVOKE: "INVOKE",
  L1_HANDLER: "L1_HANDLER"
}, wr = {
  SKIP_VALIDATE: "SKIP_VALIDATE",
  SKIP_FEE_CHARGE: "SKIP_FEE_CHARGE"
}, Ar = {
  RECEIVED: "RECEIVED",
  REJECTED: "REJECTED",
  ACCEPTED_ON_L2: "ACCEPTED_ON_L2",
  ACCEPTED_ON_L1: "ACCEPTED_ON_L1"
}, hu = {
  ACCEPTED_ON_L2: "ACCEPTED_ON_L2",
  ACCEPTED_ON_L1: "ACCEPTED_ON_L1"
}, Mo = {
  SUCCEEDED: "SUCCEEDED",
  REVERTED: "REVERTED"
}, gu = {
  LATEST: "latest",
  PENDING: "pending"
}, mu = {
  L1: "L1",
  L2: "L2"
}, pu = {
  L1: 0,
  L2: 1
}, It = {
  V0: "0x0",
  V1: "0x1",
  V2: "0x2",
  V3: "0x3",
  F0: "0x100000000000000000000000000000000",
  F1: "0x100000000000000000000000000000001",
  F2: "0x100000000000000000000000000000002",
  F3: "0x100000000000000000000000000000003"
}, yu = {
  V0: "0x0",
  V1: "0x1",
  V2: "0x2",
  F0: "0x100000000000000000000000000000000",
  F1: "0x100000000000000000000000000000001",
  F2: "0x100000000000000000000000000000002"
}, bu = {
  V3: "0x3",
  F3: "0x100000000000000000000000000000003"
}, Mg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  EBlockTag: gu,
  EDAMode: pu,
  EDataAvailabilityMode: mu,
  ESimulationFlag: wr,
  ETransactionExecutionStatus: Mo,
  ETransactionFinalityStatus: hu,
  ETransactionStatus: Ar,
  ETransactionType: ht,
  ETransactionVersion: It,
  ETransactionVersion2: yu,
  ETransactionVersion3: bu,
  Errors: du,
  SPEC: fu
}, Symbol.toStringTag, { value: "Module" })), wu = {
  ACCOUNTS: "accounts"
}, ee = {
  ACTIVE: "1",
  LEGACY: "0"
}, Hg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Permission: wu,
  TypedDataRevision: ee
}, Symbol.toStringTag, { value: "Module" })), Au = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  API: Mg,
  EBlockTag: gu,
  EDAMode: pu,
  EDataAvailabilityMode: mu,
  ESimulationFlag: wr,
  ETransactionExecutionStatus: Mo,
  ETransactionFinalityStatus: hu,
  ETransactionStatus: Ar,
  ETransactionType: ht,
  ETransactionVersion: It,
  ETransactionVersion2: yu,
  ETransactionVersion3: bu,
  Errors: du,
  Permission: wu,
  SPEC: fu,
  TypedDataRevision: ee,
  WALLET_API: Hg
}, Symbol.toStringTag, { value: "Module" }));
/*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function Ug(e) {
  return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array";
}
// @__NO_SIDE_EFFECTS__
function Vg(...e) {
  const t = (i) => i, n = (i, o) => (s) => i(o(s)), r = e.map((i) => i.encode).reduceRight(n, t), a = e.map((i) => i.decode).reduce(n, t);
  return { encode: r, decode: a };
}
// @__NO_SIDE_EFFECTS__
function Fg(e) {
  return {
    encode: (t) => {
      if (!Array.isArray(t) || t.length && typeof t[0] != "number")
        throw new Error("alphabet.encode input should be an array of numbers");
      return t.map((n) => {
        if (n < 0 || n >= e.length)
          throw new Error(`Digit index outside alphabet: ${n} (alphabet: ${e.length})`);
        return e[n];
      });
    },
    decode: (t) => {
      if (!Array.isArray(t) || t.length && typeof t[0] != "string")
        throw new Error("alphabet.decode input should be array of strings");
      return t.map((n) => {
        if (typeof n != "string")
          throw new Error(`alphabet.decode: not string element=${n}`);
        const r = e.indexOf(n);
        if (r === -1)
          throw new Error(`Unknown letter: "${n}". Allowed: ${e}`);
        return r;
      });
    }
  };
}
// @__NO_SIDE_EFFECTS__
function qg(e = "") {
  if (typeof e != "string")
    throw new Error("join separator should be string");
  return {
    encode: (t) => {
      if (!Array.isArray(t) || t.length && typeof t[0] != "string")
        throw new Error("join.encode input should be array of strings");
      for (let n of t)
        if (typeof n != "string")
          throw new Error(`join.encode: non-string input=${n}`);
      return t.join(e);
    },
    decode: (t) => {
      if (typeof t != "string")
        throw new Error("join.decode input should be string");
      return t.split(e);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function Zg(e, t = "=") {
  if (typeof t != "string")
    throw new Error("padding chr should be string");
  return {
    encode(n) {
      if (!Array.isArray(n) || n.length && typeof n[0] != "string")
        throw new Error("padding.encode input should be array of strings");
      for (let r of n)
        if (typeof r != "string")
          throw new Error(`padding.encode: non-string input=${r}`);
      for (; n.length * e % 8; )
        n.push(t);
      return n;
    },
    decode(n) {
      if (!Array.isArray(n) || n.length && typeof n[0] != "string")
        throw new Error("padding.encode input should be array of strings");
      for (let a of n)
        if (typeof a != "string")
          throw new Error(`padding.decode: non-string input=${a}`);
      let r = n.length;
      if (r * e % 8)
        throw new Error("Invalid padding: string should have whole number of bytes");
      for (; r > 0 && n[r - 1] === t; r--)
        if (!((r - 1) * e % 8))
          throw new Error("Invalid padding: string has too much padding");
      return n.slice(0, r);
    }
  };
}
const ku = /* @__NO_SIDE_EFFECTS__ */ (e, t) => t ? /* @__PURE__ */ ku(t, e % t) : e, Ma = /* @__NO_SIDE_EFFECTS__ */ (e, t) => e + (t - /* @__PURE__ */ ku(e, t));
// @__NO_SIDE_EFFECTS__
function sc(e, t, n, r) {
  if (!Array.isArray(e))
    throw new Error("convertRadix2: data should be array");
  if (t <= 0 || t > 32)
    throw new Error(`convertRadix2: wrong from=${t}`);
  if (n <= 0 || n > 32)
    throw new Error(`convertRadix2: wrong to=${n}`);
  if (/* @__PURE__ */ Ma(t, n) > 32)
    throw new Error(`convertRadix2: carry overflow from=${t} to=${n} carryBits=${/* @__PURE__ */ Ma(t, n)}`);
  let a = 0, i = 0;
  const o = 2 ** n - 1, s = [];
  for (const l of e) {
    if (l >= 2 ** t)
      throw new Error(`convertRadix2: invalid data word=${l} from=${t}`);
    if (a = a << t | l, i + t > 32)
      throw new Error(`convertRadix2: carry overflow pos=${i} from=${t}`);
    for (i += t; i >= n; i -= n)
      s.push((a >> i - n & o) >>> 0);
    a &= 2 ** i - 1;
  }
  if (a = a << n - i & o, !r && i >= t)
    throw new Error("Excess padding");
  if (!r && a)
    throw new Error(`Non-zero padding: ${a}`);
  return r && i > 0 && s.push(a >>> 0), s;
}
// @__NO_SIDE_EFFECTS__
function Kg(e, t = !1) {
  if (e <= 0 || e > 32)
    throw new Error("radix2: bits should be in (0..32]");
  if (/* @__PURE__ */ Ma(8, e) > 32 || /* @__PURE__ */ Ma(e, 8) > 32)
    throw new Error("radix2: carry overflow");
  return {
    encode: (n) => {
      if (!Ug(n))
        throw new Error("radix2.encode input should be Uint8Array");
      return /* @__PURE__ */ sc(Array.from(n), 8, e, !t);
    },
    decode: (n) => {
      if (!Array.isArray(n) || n.length && typeof n[0] != "number")
        throw new Error("radix2.decode input should be array of numbers");
      return Uint8Array.from(/* @__PURE__ */ sc(n, e, 8, t));
    }
  };
}
const vu = /* @__PURE__ */ Vg(/* @__PURE__ */ Kg(6), /* @__PURE__ */ Fg("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"), /* @__PURE__ */ Zg(6), /* @__PURE__ */ qg(""));
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const _u = /* @__PURE__ */ BigInt(0), Ya = /* @__PURE__ */ BigInt(1), Jg = /* @__PURE__ */ BigInt(2);
function bn(e) {
  return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array";
}
function Zr(e) {
  if (!bn(e))
    throw new Error("Uint8Array expected");
}
const Xg = /* @__PURE__ */ Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function wn(e) {
  Zr(e);
  let t = "";
  for (let n = 0; n < e.length; n++)
    t += Xg[e[n]];
  return t;
}
function xu(e) {
  const t = e.toString(16);
  return t.length & 1 ? `0${t}` : t;
}
function Ho(e) {
  if (typeof e != "string")
    throw new Error("hex string expected, got " + typeof e);
  return BigInt(e === "" ? "0" : `0x${e}`);
}
const Et = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
function cc(e) {
  if (e >= Et._0 && e <= Et._9)
    return e - Et._0;
  if (e >= Et._A && e <= Et._F)
    return e - (Et._A - 10);
  if (e >= Et._a && e <= Et._f)
    return e - (Et._a - 10);
}
function An(e) {
  if (typeof e != "string")
    throw new Error("hex string expected, got " + typeof e);
  const t = e.length, n = t / 2;
  if (t % 2)
    throw new Error("padded hex string expected, got unpadded hex of length " + t);
  const r = new Uint8Array(n);
  for (let a = 0, i = 0; a < n; a++, i += 2) {
    const o = cc(e.charCodeAt(i)), s = cc(e.charCodeAt(i + 1));
    if (o === void 0 || s === void 0) {
      const l = e[i] + e[i + 1];
      throw new Error('hex string expected, got non-hex character "' + l + '" at index ' + i);
    }
    r[a] = o * 16 + s;
  }
  return r;
}
function mn(e) {
  return Ho(wn(e));
}
function Uo(e) {
  return Zr(e), Ho(wn(Uint8Array.from(e).reverse()));
}
function Hn(e, t) {
  return An(e.toString(16).padStart(t * 2, "0"));
}
function Vo(e, t) {
  return Hn(e, t).reverse();
}
function Gg(e) {
  return An(xu(e));
}
function Qe(e, t, n) {
  let r;
  if (typeof t == "string")
    try {
      r = An(t);
    } catch (i) {
      throw new Error(`${e} must be valid hex string, got "${t}". Cause: ${i}`);
    }
  else if (bn(t))
    r = Uint8Array.from(t);
  else
    throw new Error(`${e} must be hex string or Uint8Array`);
  const a = r.length;
  if (typeof n == "number" && a !== n)
    throw new Error(`${e} expected ${n} bytes, got ${a}`);
  return r;
}
function Sr(...e) {
  let t = 0;
  for (let r = 0; r < e.length; r++) {
    const a = e[r];
    Zr(a), t += a.length;
  }
  const n = new Uint8Array(t);
  for (let r = 0, a = 0; r < e.length; r++) {
    const i = e[r];
    n.set(i, a), a += i.length;
  }
  return n;
}
function Wg(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = 0;
  for (let r = 0; r < e.length; r++)
    n |= e[r] ^ t[r];
  return n === 0;
}
function Yg(e) {
  if (typeof e != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof e}`);
  return new Uint8Array(new TextEncoder().encode(e));
}
function Qg(e) {
  let t;
  for (t = 0; e > _u; e >>= Ya, t += 1)
    ;
  return t;
}
function em(e, t) {
  return e >> BigInt(t) & Ya;
}
function tm(e, t, n) {
  return e | (n ? Ya : _u) << BigInt(t);
}
const Fo = (e) => (Jg << BigInt(e - 1)) - Ya, Ei = (e) => new Uint8Array(e), lc = (e) => Uint8Array.from(e);
function Eu(e, t, n) {
  if (typeof e != "number" || e < 2)
    throw new Error("hashLen must be a number");
  if (typeof t != "number" || t < 2)
    throw new Error("qByteLen must be a number");
  if (typeof n != "function")
    throw new Error("hmacFn must be a function");
  let r = Ei(e), a = Ei(e), i = 0;
  const o = () => {
    r.fill(1), a.fill(0), i = 0;
  }, s = (...d) => n(a, r, ...d), l = (d = Ei()) => {
    a = s(lc([0]), d), r = s(), d.length !== 0 && (a = s(lc([1]), d), r = s());
  }, c = () => {
    if (i++ >= 1e3)
      throw new Error("drbg: tried 1000 values");
    let d = 0;
    const h = [];
    for (; d < t; ) {
      r = s();
      const f = r.slice();
      h.push(f), d += r.length;
    }
    return Sr(...h);
  };
  return (d, h) => {
    o(), l(d);
    let f;
    for (; !(f = h(c())); )
      l();
    return o(), f;
  };
}
const nm = {
  bigint: (e) => typeof e == "bigint",
  function: (e) => typeof e == "function",
  boolean: (e) => typeof e == "boolean",
  string: (e) => typeof e == "string",
  stringOrUint8Array: (e) => typeof e == "string" || bn(e),
  isSafeInteger: (e) => Number.isSafeInteger(e),
  array: (e) => Array.isArray(e),
  field: (e, t) => t.Fp.isValid(e),
  hash: (e) => typeof e == "function" && Number.isSafeInteger(e.outputLen)
};
function Kr(e, t, n = {}) {
  const r = (a, i, o) => {
    const s = nm[i];
    if (typeof s != "function")
      throw new Error(`Invalid validator "${i}", expected function`);
    const l = e[a];
    if (!(o && l === void 0) && !s(l, e))
      throw new Error(`Invalid param ${String(a)}=${l} (${typeof l}), expected ${i}`);
  };
  for (const [a, i] of Object.entries(t))
    r(a, i, !1);
  for (const [a, i] of Object.entries(n))
    r(a, i, !0);
  return e;
}
const rm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  abytes: Zr,
  bitGet: em,
  bitLen: Qg,
  bitMask: Fo,
  bitSet: tm,
  bytesToHex: wn,
  bytesToNumberBE: mn,
  bytesToNumberLE: Uo,
  concatBytes: Sr,
  createHmacDrbg: Eu,
  ensureBytes: Qe,
  equalBytes: Wg,
  hexToBytes: An,
  hexToNumber: Ho,
  isBytes: bn,
  numberToBytesBE: Hn,
  numberToBytesLE: Vo,
  numberToHexUnpadded: xu,
  numberToVarBytesBE: Gg,
  utf8ToBytes: Yg,
  validateObject: Kr
}, Symbol.toStringTag, { value: "Module" }));
function uc(e) {
  if (!Number.isSafeInteger(e) || e < 0)
    throw new Error("positive integer expected, got " + e);
}
function am(e) {
  return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array";
}
function qo(e, ...t) {
  if (!am(e))
    throw new Error("Uint8Array expected");
  if (t.length > 0 && !t.includes(e.length))
    throw new Error("Uint8Array expected of length " + t + ", got length=" + e.length);
}
function dc(e, t = !0) {
  if (e.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && e.finished)
    throw new Error("Hash#digest() has already been called");
}
function im(e, t) {
  qo(e);
  const n = t.outputLen;
  if (e.length < n)
    throw new Error("digestInto() expects output buffer of length at least " + n);
}
const oa = /* @__PURE__ */ BigInt(2 ** 32 - 1), fc = /* @__PURE__ */ BigInt(32);
function om(e, t = !1) {
  return t ? { h: Number(e & oa), l: Number(e >> fc & oa) } : { h: Number(e >> fc & oa) | 0, l: Number(e & oa) | 0 };
}
function sm(e, t = !1) {
  let n = new Uint32Array(e.length), r = new Uint32Array(e.length);
  for (let a = 0; a < e.length; a++) {
    const { h: i, l: o } = om(e[a], t);
    [n[a], r[a]] = [i, o];
  }
  return [n, r];
}
const cm = (e, t, n) => e << n | t >>> 32 - n, lm = (e, t, n) => t << n | e >>> 32 - n, um = (e, t, n) => t << n - 32 | e >>> 64 - n, dm = (e, t, n) => e << n - 32 | t >>> 64 - n;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const fm = (e) => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)), hc = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68, hm = (e) => e << 24 & 4278190080 | e << 8 & 16711680 | e >>> 8 & 65280 | e >>> 24 & 255;
function gc(e) {
  for (let t = 0; t < e.length; t++)
    e[t] = hm(e[t]);
}
function gm(e) {
  if (typeof e != "string")
    throw new Error("utf8ToBytes expected string, got " + typeof e);
  return new Uint8Array(new TextEncoder().encode(e));
}
function Su(e) {
  return typeof e == "string" && (e = gm(e)), qo(e), e;
}
let mm = class {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
};
function pm(e) {
  const t = (r) => e().update(Su(r)).digest(), n = e();
  return t.outputLen = n.outputLen, t.blockLen = n.blockLen, t.create = () => e(), t;
}
const Cu = [], Iu = [], Tu = [], ym = /* @__PURE__ */ BigInt(0), cr = /* @__PURE__ */ BigInt(1), bm = /* @__PURE__ */ BigInt(2), wm = /* @__PURE__ */ BigInt(7), Am = /* @__PURE__ */ BigInt(256), km = /* @__PURE__ */ BigInt(113);
for (let e = 0, t = cr, n = 1, r = 0; e < 24; e++) {
  [n, r] = [r, (2 * n + 3 * r) % 5], Cu.push(2 * (5 * r + n)), Iu.push((e + 1) * (e + 2) / 2 % 64);
  let a = ym;
  for (let i = 0; i < 7; i++)
    t = (t << cr ^ (t >> wm) * km) % Am, t & bm && (a ^= cr << (cr << /* @__PURE__ */ BigInt(i)) - cr);
  Tu.push(a);
}
const [vm, _m] = /* @__PURE__ */ sm(Tu, !0), mc = (e, t, n) => n > 32 ? um(e, t, n) : cm(e, t, n), pc = (e, t, n) => n > 32 ? dm(e, t, n) : lm(e, t, n);
function xm(e, t = 24) {
  const n = new Uint32Array(10);
  for (let r = 24 - t; r < 24; r++) {
    for (let o = 0; o < 10; o++)
      n[o] = e[o] ^ e[o + 10] ^ e[o + 20] ^ e[o + 30] ^ e[o + 40];
    for (let o = 0; o < 10; o += 2) {
      const s = (o + 8) % 10, l = (o + 2) % 10, c = n[l], u = n[l + 1], d = mc(c, u, 1) ^ n[s], h = pc(c, u, 1) ^ n[s + 1];
      for (let f = 0; f < 50; f += 10)
        e[o + f] ^= d, e[o + f + 1] ^= h;
    }
    let a = e[2], i = e[3];
    for (let o = 0; o < 24; o++) {
      const s = Iu[o], l = mc(a, i, s), c = pc(a, i, s), u = Cu[o];
      a = e[u], i = e[u + 1], e[u] = l, e[u + 1] = c;
    }
    for (let o = 0; o < 50; o += 10) {
      for (let s = 0; s < 10; s++)
        n[s] = e[o + s];
      for (let s = 0; s < 10; s++)
        e[o + s] ^= ~n[(s + 2) % 10] & n[(s + 4) % 10];
    }
    e[0] ^= vm[r], e[1] ^= _m[r];
  }
  n.fill(0);
}
let Em = class Bu extends mm {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(t, n, r, a = !1, i = 24) {
    if (super(), this.blockLen = t, this.suffix = n, this.outputLen = r, this.enableXOF = a, this.rounds = i, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, uc(r), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = fm(this.state);
  }
  keccak() {
    hc || gc(this.state32), xm(this.state32, this.rounds), hc || gc(this.state32), this.posOut = 0, this.pos = 0;
  }
  update(t) {
    dc(this);
    const { blockLen: n, state: r } = this;
    t = Su(t);
    const a = t.length;
    for (let i = 0; i < a; ) {
      const o = Math.min(n - this.pos, a - i);
      for (let s = 0; s < o; s++)
        r[this.pos++] ^= t[i++];
      this.pos === n && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = !0;
    const { state: t, suffix: n, pos: r, blockLen: a } = this;
    t[r] ^= n, n & 128 && r === a - 1 && this.keccak(), t[a - 1] ^= 128, this.keccak();
  }
  writeInto(t) {
    dc(this, !1), qo(t), this.finish();
    const n = this.state, { blockLen: r } = this;
    for (let a = 0, i = t.length; a < i; ) {
      this.posOut >= r && this.keccak();
      const o = Math.min(r - this.posOut, i - a);
      t.set(n.subarray(this.posOut, this.posOut + o), a), this.posOut += o, a += o;
    }
    return t;
  }
  xofInto(t) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(t);
  }
  xof(t) {
    return uc(t), this.xofInto(new Uint8Array(t));
  }
  digestInto(t) {
    if (im(t, this), this.finished)
      throw new Error("digest() was already called");
    return this.writeInto(t), this.destroy(), t;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = !0, this.state.fill(0);
  }
  _cloneInto(t) {
    const { blockLen: n, suffix: r, outputLen: a, rounds: i, enableXOF: o } = this;
    return t || (t = new Bu(n, r, a, o, i)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = i, t.suffix = r, t.outputLen = a, t.enableXOF = o, t.destroyed = this.destroyed, t;
  }
};
const Sm = (e, t, n) => pm(() => new Em(t, e, n)), Cm = /* @__PURE__ */ Sm(1, 136, 256 / 8);
function Ha(e) {
  if (!Number.isSafeInteger(e) || e < 0)
    throw new Error(`Wrong positive integer: ${e}`);
}
function Im(e) {
  return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array";
}
function Zo(e, ...t) {
  if (!Im(e))
    throw new Error("Expected Uint8Array");
  if (t.length > 0 && !t.includes(e.length))
    throw new Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`);
}
function Tm(e) {
  if (typeof e != "function" || typeof e.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  Ha(e.outputLen), Ha(e.blockLen);
}
function Un(e, t = !0) {
  if (e.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && e.finished)
    throw new Error("Hash#digest() has already been called");
}
function Ou(e, t) {
  Zo(e);
  const n = t.outputLen;
  if (e.length < n)
    throw new Error(`digestInto() expects output buffer of length at least ${n}`);
}
const sa = /* @__PURE__ */ BigInt(2 ** 32 - 1), yc = /* @__PURE__ */ BigInt(32);
function Bm(e, t = !1) {
  return t ? { h: Number(e & sa), l: Number(e >> yc & sa) } : { h: Number(e >> yc & sa) | 0, l: Number(e & sa) | 0 };
}
function Om(e, t = !1) {
  let n = new Uint32Array(e.length), r = new Uint32Array(e.length);
  for (let a = 0; a < e.length; a++) {
    const { h: i, l: o } = Bm(e[a], t);
    [n[a], r[a]] = [i, o];
  }
  return [n, r];
}
const Dm = (e, t, n) => e << n | t >>> 32 - n, jm = (e, t, n) => t << n | e >>> 32 - n, Pm = (e, t, n) => t << n - 32 | e >>> 64 - n, Nm = (e, t, n) => e << n - 32 | t >>> 64 - n, Si = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const zm = (e) => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
function Du(e) {
  return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array";
}
const Ci = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength), ot = (e, t) => e << 32 - t | e >>> t, Rm = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!Rm)
  throw new Error("Non little-endian hardware is not supported");
function ju(e) {
  if (typeof e != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof e}`);
  return new Uint8Array(new TextEncoder().encode(e));
}
function Qa(e) {
  if (typeof e == "string" && (e = ju(e)), !Du(e))
    throw new Error(`expected Uint8Array, got ${typeof e}`);
  return e;
}
function Lm(...e) {
  let t = 0;
  for (let r = 0; r < e.length; r++) {
    const a = e[r];
    if (!Du(a))
      throw new Error("Uint8Array expected");
    t += a.length;
  }
  const n = new Uint8Array(t);
  for (let r = 0, a = 0; r < e.length; r++) {
    const i = e[r];
    n.set(i, a), a += i.length;
  }
  return n;
}
let Ko = class {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
};
function Pu(e) {
  const t = (r) => e().update(Qa(r)).digest(), n = e();
  return t.outputLen = n.outputLen, t.blockLen = n.blockLen, t.create = () => e(), t;
}
function $m(e = 32) {
  if (Si && typeof Si.getRandomValues == "function")
    return Si.getRandomValues(new Uint8Array(e));
  throw new Error("crypto.getRandomValues must be defined");
}
const [Nu, zu, Ru] = [[], [], []], Mm = /* @__PURE__ */ BigInt(0), lr = /* @__PURE__ */ BigInt(1), Hm = /* @__PURE__ */ BigInt(2), Um = /* @__PURE__ */ BigInt(7), Vm = /* @__PURE__ */ BigInt(256), Fm = /* @__PURE__ */ BigInt(113);
for (let e = 0, t = lr, n = 1, r = 0; e < 24; e++) {
  [n, r] = [r, (2 * n + 3 * r) % 5], Nu.push(2 * (5 * r + n)), zu.push((e + 1) * (e + 2) / 2 % 64);
  let a = Mm;
  for (let i = 0; i < 7; i++)
    t = (t << lr ^ (t >> Um) * Fm) % Vm, t & Hm && (a ^= lr << (lr << /* @__PURE__ */ BigInt(i)) - lr);
  Ru.push(a);
}
const [qm, Zm] = /* @__PURE__ */ Om(Ru, !0), bc = (e, t, n) => n > 32 ? Pm(e, t, n) : Dm(e, t, n), wc = (e, t, n) => n > 32 ? Nm(e, t, n) : jm(e, t, n);
function Km(e, t = 24) {
  const n = new Uint32Array(10);
  for (let r = 24 - t; r < 24; r++) {
    for (let o = 0; o < 10; o++)
      n[o] = e[o] ^ e[o + 10] ^ e[o + 20] ^ e[o + 30] ^ e[o + 40];
    for (let o = 0; o < 10; o += 2) {
      const s = (o + 8) % 10, l = (o + 2) % 10, c = n[l], u = n[l + 1], d = bc(c, u, 1) ^ n[s], h = wc(c, u, 1) ^ n[s + 1];
      for (let f = 0; f < 50; f += 10)
        e[o + f] ^= d, e[o + f + 1] ^= h;
    }
    let a = e[2], i = e[3];
    for (let o = 0; o < 24; o++) {
      const s = zu[o], l = bc(a, i, s), c = wc(a, i, s), u = Nu[o];
      a = e[u], i = e[u + 1], e[u] = l, e[u + 1] = c;
    }
    for (let o = 0; o < 50; o += 10) {
      for (let s = 0; s < 10; s++)
        n[s] = e[o + s];
      for (let s = 0; s < 10; s++)
        e[o + s] ^= ~n[(s + 2) % 10] & n[(s + 4) % 10];
    }
    e[0] ^= qm[r], e[1] ^= Zm[r];
  }
  n.fill(0);
}
class Jo extends Ko {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(t, n, r, a = !1, i = 24) {
    if (super(), this.blockLen = t, this.suffix = n, this.outputLen = r, this.enableXOF = a, this.rounds = i, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, Ha(r), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = zm(this.state);
  }
  keccak() {
    Km(this.state32, this.rounds), this.posOut = 0, this.pos = 0;
  }
  update(t) {
    Un(this);
    const { blockLen: n, state: r } = this;
    t = Qa(t);
    const a = t.length;
    for (let i = 0; i < a; ) {
      const o = Math.min(n - this.pos, a - i);
      for (let s = 0; s < o; s++)
        r[this.pos++] ^= t[i++];
      this.pos === n && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = !0;
    const { state: t, suffix: n, pos: r, blockLen: a } = this;
    t[r] ^= n, n & 128 && r === a - 1 && this.keccak(), t[a - 1] ^= 128, this.keccak();
  }
  writeInto(t) {
    Un(this, !1), Zo(t), this.finish();
    const n = this.state, { blockLen: r } = this;
    for (let a = 0, i = t.length; a < i; ) {
      this.posOut >= r && this.keccak();
      const o = Math.min(r - this.posOut, i - a);
      t.set(n.subarray(this.posOut, this.posOut + o), a), this.posOut += o, a += o;
    }
    return t;
  }
  xofInto(t) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(t);
  }
  xof(t) {
    return Ha(t), this.xofInto(new Uint8Array(t));
  }
  digestInto(t) {
    if (Ou(t, this), this.finished)
      throw new Error("digest() was already called");
    return this.writeInto(t), this.destroy(), t;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = !0, this.state.fill(0);
  }
  _cloneInto(t) {
    const { blockLen: n, suffix: r, outputLen: a, rounds: i, enableXOF: o } = this;
    return t || (t = new Jo(n, r, a, o, i)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = i, t.suffix = r, t.outputLen = a, t.enableXOF = o, t.destroyed = this.destroyed, t;
  }
}
const Jm = (e, t, n) => Pu(() => new Jo(t, e, n)), Xm = /* @__PURE__ */ Jm(1, 136, 256 / 8);
function Gm(e, t, n, r) {
  if (typeof e.setBigUint64 == "function")
    return e.setBigUint64(t, n, r);
  const a = BigInt(32), i = BigInt(4294967295), o = Number(n >> a & i), s = Number(n & i), l = r ? 4 : 0, c = r ? 0 : 4;
  e.setUint32(t + l, o, r), e.setUint32(t + c, s, r);
}
class Wm extends Ko {
  constructor(t, n, r, a) {
    super(), this.blockLen = t, this.outputLen = n, this.padOffset = r, this.isLE = a, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(t), this.view = Ci(this.buffer);
  }
  update(t) {
    Un(this);
    const { view: n, buffer: r, blockLen: a } = this;
    t = Qa(t);
    const i = t.length;
    for (let o = 0; o < i; ) {
      const s = Math.min(a - this.pos, i - o);
      if (s === a) {
        const l = Ci(t);
        for (; a <= i - o; o += a)
          this.process(l, o);
        continue;
      }
      r.set(t.subarray(o, o + s), this.pos), this.pos += s, o += s, this.pos === a && (this.process(n, 0), this.pos = 0);
    }
    return this.length += t.length, this.roundClean(), this;
  }
  digestInto(t) {
    Un(this), Ou(t, this), this.finished = !0;
    const { buffer: n, view: r, blockLen: a, isLE: i } = this;
    let { pos: o } = this;
    n[o++] = 128, this.buffer.subarray(o).fill(0), this.padOffset > a - o && (this.process(r, 0), o = 0);
    for (let d = o; d < a; d++)
      n[d] = 0;
    Gm(r, a - 8, BigInt(this.length * 8), i), this.process(r, 0);
    const s = Ci(t), l = this.outputLen;
    if (l % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const c = l / 4, u = this.get();
    if (c > u.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let d = 0; d < c; d++)
      s.setUint32(4 * d, u[d], i);
  }
  digest() {
    const { buffer: t, outputLen: n } = this;
    this.digestInto(t);
    const r = t.slice(0, n);
    return this.destroy(), r;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: n, buffer: r, length: a, finished: i, destroyed: o, pos: s } = this;
    return t.length = a, t.pos = s, t.finished = i, t.destroyed = o, a % n && t.buffer.set(r), t;
  }
}
const Ym = (e, t, n) => e & t ^ ~e & n, Qm = (e, t, n) => e & t ^ e & n ^ t & n, ep = /* @__PURE__ */ new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]), Pt = /* @__PURE__ */ new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), Nt = /* @__PURE__ */ new Uint32Array(64);
let tp = class extends Wm {
  constructor() {
    super(64, 32, 8, !1), this.A = Pt[0] | 0, this.B = Pt[1] | 0, this.C = Pt[2] | 0, this.D = Pt[3] | 0, this.E = Pt[4] | 0, this.F = Pt[5] | 0, this.G = Pt[6] | 0, this.H = Pt[7] | 0;
  }
  get() {
    const { A: t, B: n, C: r, D: a, E: i, F: o, G: s, H: l } = this;
    return [t, n, r, a, i, o, s, l];
  }
  // prettier-ignore
  set(t, n, r, a, i, o, s, l) {
    this.A = t | 0, this.B = n | 0, this.C = r | 0, this.D = a | 0, this.E = i | 0, this.F = o | 0, this.G = s | 0, this.H = l | 0;
  }
  process(t, n) {
    for (let d = 0; d < 16; d++, n += 4)
      Nt[d] = t.getUint32(n, !1);
    for (let d = 16; d < 64; d++) {
      const h = Nt[d - 15], f = Nt[d - 2], m = ot(h, 7) ^ ot(h, 18) ^ h >>> 3, g = ot(f, 17) ^ ot(f, 19) ^ f >>> 10;
      Nt[d] = g + Nt[d - 7] + m + Nt[d - 16] | 0;
    }
    let { A: r, B: a, C: i, D: o, E: s, F: l, G: c, H: u } = this;
    for (let d = 0; d < 64; d++) {
      const h = ot(s, 6) ^ ot(s, 11) ^ ot(s, 25), f = u + h + Ym(s, l, c) + ep[d] + Nt[d] | 0, g = (ot(r, 2) ^ ot(r, 13) ^ ot(r, 22)) + Qm(r, a, i) | 0;
      u = c, c = l, l = s, s = o + f | 0, o = i, i = a, a = r, r = f + g | 0;
    }
    r = r + this.A | 0, a = a + this.B | 0, i = i + this.C | 0, o = o + this.D | 0, s = s + this.E | 0, l = l + this.F | 0, c = c + this.G | 0, u = u + this.H | 0, this.set(r, a, i, o, s, l, c, u);
  }
  roundClean() {
    Nt.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
};
const Xo = /* @__PURE__ */ Pu(() => new tp());
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Lu = BigInt(0), ei = BigInt(1), np = BigInt(2);
function vt(e) {
  return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array";
}
const rp = /* @__PURE__ */ Array.from({ length: 256 }, (e, t) => t.toString(16).padStart(2, "0"));
function Xt(e) {
  if (!vt(e))
    throw new Error("Uint8Array expected");
  let t = "";
  for (let n = 0; n < e.length; n++)
    t += rp[e[n]];
  return t;
}
function $u(e) {
  const t = e.toString(16);
  return t.length & 1 ? `0${t}` : t;
}
function ti(e) {
  if (typeof e != "string")
    throw new Error("hex string expected, got " + typeof e);
  return BigInt(e === "" ? "0" : `0x${e}`);
}
const St = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
function Ac(e) {
  if (e >= St._0 && e <= St._9)
    return e - St._0;
  if (e >= St._A && e <= St._F)
    return e - (St._A - 10);
  if (e >= St._a && e <= St._f)
    return e - (St._a - 10);
}
function kn(e) {
  if (typeof e != "string")
    throw new Error("hex string expected, got " + typeof e);
  const t = e.length, n = t / 2;
  if (t % 2)
    throw new Error("padded hex string expected, got unpadded hex of length " + t);
  const r = new Uint8Array(n);
  for (let a = 0, i = 0; a < n; a++, i += 2) {
    const o = Ac(e.charCodeAt(i)), s = Ac(e.charCodeAt(i + 1));
    if (o === void 0 || s === void 0) {
      const l = e[i] + e[i + 1];
      throw new Error('hex string expected, got non-hex character "' + l + '" at index ' + i);
    }
    r[a] = o * 16 + s;
  }
  return r;
}
function ze(e) {
  return ti(Xt(e));
}
function Go(e) {
  if (!vt(e))
    throw new Error("Uint8Array expected");
  return ti(Xt(Uint8Array.from(e).reverse()));
}
function Vn(e, t) {
  return kn(e.toString(16).padStart(t * 2, "0"));
}
function Wo(e, t) {
  return Vn(e, t).reverse();
}
function Yo(e) {
  return kn($u(e));
}
function Je(e, t, n) {
  let r;
  if (typeof t == "string")
    try {
      r = kn(t);
    } catch (i) {
      throw new Error(`${e} must be valid hex string, got "${t}". Cause: ${i}`);
    }
  else if (vt(t))
    r = Uint8Array.from(t);
  else
    throw new Error(`${e} must be hex string or Uint8Array`);
  const a = r.length;
  if (typeof n == "number" && a !== n)
    throw new Error(`${e} expected ${n} bytes, got ${a}`);
  return r;
}
function Fn(...e) {
  let t = 0;
  for (let a = 0; a < e.length; a++) {
    const i = e[a];
    if (!vt(i))
      throw new Error("Uint8Array expected");
    t += i.length;
  }
  let n = new Uint8Array(t), r = 0;
  for (let a = 0; a < e.length; a++) {
    const i = e[a];
    n.set(i, r), r += i.length;
  }
  return n;
}
function ap(e, t) {
  if (e.length !== t.length)
    return !1;
  let n = 0;
  for (let r = 0; r < e.length; r++)
    n |= e[r] ^ t[r];
  return n === 0;
}
function ip(e) {
  if (typeof e != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof e}`);
  return new Uint8Array(new TextEncoder().encode(e));
}
function op(e) {
  let t;
  for (t = 0; e > Lu; e >>= ei, t += 1)
    ;
  return t;
}
function sp(e, t) {
  return e >> BigInt(t) & ei;
}
const cp = (e, t, n) => e | (n ? ei : Lu) << BigInt(t), ni = (e) => (np << BigInt(e - 1)) - ei, Ii = (e) => new Uint8Array(e), kc = (e) => Uint8Array.from(e);
function Mu(e, t, n) {
  if (typeof e != "number" || e < 2)
    throw new Error("hashLen must be a number");
  if (typeof t != "number" || t < 2)
    throw new Error("qByteLen must be a number");
  if (typeof n != "function")
    throw new Error("hmacFn must be a function");
  let r = Ii(e), a = Ii(e), i = 0;
  const o = () => {
    r.fill(1), a.fill(0), i = 0;
  }, s = (...d) => n(a, r, ...d), l = (d = Ii()) => {
    a = s(kc([0]), d), r = s(), d.length !== 0 && (a = s(kc([1]), d), r = s());
  }, c = () => {
    if (i++ >= 1e3)
      throw new Error("drbg: tried 1000 values");
    let d = 0;
    const h = [];
    for (; d < t; ) {
      r = s();
      const f = r.slice();
      h.push(f), d += r.length;
    }
    return Fn(...h);
  };
  return (d, h) => {
    o(), l(d);
    let f;
    for (; !(f = h(c())); )
      l();
    return o(), f;
  };
}
const lp = {
  bigint: (e) => typeof e == "bigint",
  function: (e) => typeof e == "function",
  boolean: (e) => typeof e == "boolean",
  string: (e) => typeof e == "string",
  stringOrUint8Array: (e) => typeof e == "string" || vt(e),
  isSafeInteger: (e) => Number.isSafeInteger(e),
  array: (e) => Array.isArray(e),
  field: (e, t) => t.Fp.isValid(e),
  hash: (e) => typeof e == "function" && Number.isSafeInteger(e.outputLen)
};
function Jr(e, t, n = {}) {
  const r = (a, i, o) => {
    const s = lp[i];
    if (typeof s != "function")
      throw new Error(`Invalid validator "${i}", expected function`);
    const l = e[a];
    if (!(o && l === void 0) && !s(l, e))
      throw new Error(`Invalid param ${String(a)}=${l} (${typeof l}), expected ${i}`);
  };
  for (const [a, i] of Object.entries(t))
    r(a, i, !1);
  for (const [a, i] of Object.entries(n))
    r(a, i, !0);
  return e;
}
const up = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bitGet: sp,
  bitLen: op,
  bitMask: ni,
  bitSet: cp,
  bytesToHex: Xt,
  bytesToNumberBE: ze,
  bytesToNumberLE: Go,
  concatBytes: Fn,
  createHmacDrbg: Mu,
  ensureBytes: Je,
  equalBytes: ap,
  hexToBytes: kn,
  hexToNumber: ti,
  isBytes: vt,
  numberToBytesBE: Vn,
  numberToBytesLE: Wo,
  numberToHexUnpadded: $u,
  numberToVarBytesBE: Yo,
  utf8ToBytes: ip,
  validateObject: Jr
}, Symbol.toStringTag, { value: "Module" }));
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Oe = BigInt(0), fe = BigInt(1), on = BigInt(2), dp = BigInt(3), ro = BigInt(4), vc = BigInt(5), _c = BigInt(8);
BigInt(9);
BigInt(16);
function je(e, t) {
  const n = e % t;
  return n >= Oe ? n : t + n;
}
function fp(e, t, n) {
  if (n <= Oe || t < Oe)
    throw new Error("Expected power/modulo > 0");
  if (n === fe)
    return Oe;
  let r = fe;
  for (; t > Oe; )
    t & fe && (r = r * e % n), e = e * e % n, t >>= fe;
  return r;
}
function Ua(e, t) {
  if (e === Oe || t <= Oe)
    throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);
  let n = je(e, t), r = t, a = Oe, i = fe;
  for (; n !== Oe; ) {
    const s = r / n, l = r % n, c = a - i * s;
    r = n, n = l, a = i, i = c;
  }
  if (r !== fe)
    throw new Error("invert: does not exist");
  return je(a, t);
}
function hp(e) {
  const t = (e - fe) / on;
  let n, r, a;
  for (n = e - fe, r = 0; n % on === Oe; n /= on, r++)
    ;
  for (a = on; a < e && fp(a, t, e) !== e - fe; a++)
    ;
  if (r === 1) {
    const o = (e + fe) / ro;
    return function(l, c) {
      const u = l.pow(c, o);
      if (!l.eql(l.sqr(u), c))
        throw new Error("Cannot find square root");
      return u;
    };
  }
  const i = (n + fe) / on;
  return function(s, l) {
    if (s.pow(l, t) === s.neg(s.ONE))
      throw new Error("Cannot find square root");
    let c = r, u = s.pow(s.mul(s.ONE, a), n), d = s.pow(l, i), h = s.pow(l, n);
    for (; !s.eql(h, s.ONE); ) {
      if (s.eql(h, s.ZERO))
        return s.ZERO;
      let f = 1;
      for (let g = s.sqr(h); f < c && !s.eql(g, s.ONE); f++)
        g = s.sqr(g);
      const m = s.pow(u, fe << BigInt(c - f - 1));
      u = s.sqr(m), d = s.mul(d, m), h = s.mul(h, u), c = f;
    }
    return d;
  };
}
function gp(e) {
  if (e % ro === dp) {
    const t = (e + fe) / ro;
    return function(r, a) {
      const i = r.pow(a, t);
      if (!r.eql(r.sqr(i), a))
        throw new Error("Cannot find square root");
      return i;
    };
  }
  if (e % _c === vc) {
    const t = (e - vc) / _c;
    return function(r, a) {
      const i = r.mul(a, on), o = r.pow(i, t), s = r.mul(a, o), l = r.mul(r.mul(s, on), o), c = r.mul(s, r.sub(l, r.ONE));
      if (!r.eql(r.sqr(c), a))
        throw new Error("Cannot find square root");
      return c;
    };
  }
  return hp(e);
}
const mp = [
  "create",
  "isValid",
  "is0",
  "neg",
  "inv",
  "sqrt",
  "sqr",
  "eql",
  "add",
  "sub",
  "mul",
  "pow",
  "div",
  "addN",
  "subN",
  "mulN",
  "sqrN"
];
function Qo(e) {
  const t = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  }, n = mp.reduce((r, a) => (r[a] = "function", r), t);
  return Jr(e, n);
}
function Hu(e, t, n) {
  if (n < Oe)
    throw new Error("Expected power > 0");
  if (n === Oe)
    return e.ONE;
  if (n === fe)
    return t;
  let r = e.ONE, a = t;
  for (; n > Oe; )
    n & fe && (r = e.mul(r, a)), a = e.sqr(a), n >>= fe;
  return r;
}
function pp(e, t) {
  const n = new Array(t.length), r = t.reduce((i, o, s) => e.is0(o) ? i : (n[s] = i, e.mul(i, o)), e.ONE), a = e.inv(r);
  return t.reduceRight((i, o, s) => e.is0(o) ? i : (n[s] = e.mul(i, n[s]), e.mul(i, o)), a), n;
}
function Uu(e, t) {
  const n = t !== void 0 ? t : e.toString(2).length, r = Math.ceil(n / 8);
  return { nBitLength: n, nByteLength: r };
}
function Vu(e, t, n = !1, r = {}) {
  if (e <= Oe)
    throw new Error(`Expected Field ORDER > 0, got ${e}`);
  const { nBitLength: a, nByteLength: i } = Uu(e, t);
  if (i > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  const o = gp(e), s = Object.freeze({
    ORDER: e,
    BITS: a,
    BYTES: i,
    MASK: ni(a),
    ZERO: Oe,
    ONE: fe,
    create: (l) => je(l, e),
    isValid: (l) => {
      if (typeof l != "bigint")
        throw new Error(`Invalid field element: expected bigint, got ${typeof l}`);
      return Oe <= l && l < e;
    },
    is0: (l) => l === Oe,
    isOdd: (l) => (l & fe) === fe,
    neg: (l) => je(-l, e),
    eql: (l, c) => l === c,
    sqr: (l) => je(l * l, e),
    add: (l, c) => je(l + c, e),
    sub: (l, c) => je(l - c, e),
    mul: (l, c) => je(l * c, e),
    pow: (l, c) => Hu(s, l, c),
    div: (l, c) => je(l * Ua(c, e), e),
    // Same as above, but doesn't normalize
    sqrN: (l) => l * l,
    addN: (l, c) => l + c,
    subN: (l, c) => l - c,
    mulN: (l, c) => l * c,
    inv: (l) => Ua(l, e),
    sqrt: r.sqrt || ((l) => o(s, l)),
    invertBatch: (l) => pp(s, l),
    // TODO: do we really need constant cmov?
    // We don't have const-time bigints anyway, so probably will be not very useful
    cmov: (l, c, u) => u ? c : l,
    toBytes: (l) => n ? Wo(l, i) : Vn(l, i),
    fromBytes: (l) => {
      if (l.length !== i)
        throw new Error(`Fp.fromBytes: expected ${i}, got ${l.length}`);
      return n ? Go(l) : ze(l);
    }
  });
  return Object.freeze(s);
}
function Fu(e) {
  if (typeof e != "bigint")
    throw new Error("field order must be bigint");
  const t = e.toString(2).length;
  return Math.ceil(t / 8);
}
function qu(e) {
  const t = Fu(e);
  return t + Math.ceil(t / 2);
}
function yp(e, t, n = !1) {
  const r = e.length, a = Fu(t), i = qu(t);
  if (r < 16 || r < i || r > 1024)
    throw new Error(`expected ${i}-1024 bytes of input, got ${r}`);
  const o = n ? ze(e) : Go(e), s = je(o, t - fe) + fe;
  return n ? Wo(s, a) : Vn(s, a);
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function bp(e) {
  const { Fp: t, mds: n, reversePartialPowIdx: r, roundConstants: a } = e, { roundsFull: i, roundsPartial: o, sboxPower: s, t: l } = e;
  Qo(t);
  for (const m of ["t", "roundsFull", "roundsPartial"])
    if (typeof e[m] != "number" || !Number.isSafeInteger(e[m]))
      throw new Error(`Poseidon: invalid param ${m}=${e[m]} (${typeof e[m]})`);
  if (!Array.isArray(n) || n.length !== l)
    throw new Error("Poseidon: wrong MDS matrix");
  const c = n.map((m) => {
    if (!Array.isArray(m) || m.length !== l)
      throw new Error(`Poseidon MDS matrix row: ${m}`);
    return m.map((g) => {
      if (typeof g != "bigint")
        throw new Error(`Poseidon MDS matrix value=${g}`);
      return t.create(g);
    });
  });
  if (r !== void 0 && typeof r != "boolean")
    throw new Error(`Poseidon: invalid param reversePartialPowIdx=${r}`);
  if (i % 2 !== 0)
    throw new Error(`Poseidon roundsFull is not even: ${i}`);
  const u = i + o;
  if (!Array.isArray(a) || a.length !== u)
    throw new Error("Poseidon: wrong round constants");
  const d = a.map((m) => {
    if (!Array.isArray(m) || m.length !== l)
      throw new Error(`Poseidon wrong round constants: ${m}`);
    return m.map((g) => {
      if (typeof g != "bigint" || !t.isValid(g))
        throw new Error(`Poseidon wrong round constant=${g}`);
      return t.create(g);
    });
  });
  if (!s || ![3, 5, 7].includes(s))
    throw new Error(`Poseidon wrong sboxPower=${s}`);
  const h = BigInt(s);
  let f = (m) => Hu(t, m, h);
  return s === 3 ? f = (m) => t.mul(t.sqrN(m), m) : s === 5 && (f = (m) => t.mul(t.sqrN(t.sqrN(m)), m)), Object.freeze({ ...e, rounds: u, sboxFn: f, roundConstants: d, mds: c });
}
function wp(e) {
  const t = bp(e), { Fp: n, mds: r, roundConstants: a, rounds: i, roundsPartial: o, sboxFn: s, t: l } = t, c = t.roundsFull / 2, u = t.reversePartialPowIdx ? l - 1 : 0, d = (f, m, g) => (f = f.map((p, b) => n.add(p, a[g][b])), m ? f = f.map((p) => s(p)) : f[u] = s(f[u]), f = r.map((p) => p.reduce((b, _, k) => n.add(b, n.mulN(_, f[k])), n.ZERO)), f), h = function(m) {
    if (!Array.isArray(m) || m.length !== l)
      throw new Error(`Poseidon: wrong values (expected array of bigints with length ${l})`);
    m = m.map((p) => {
      if (typeof p != "bigint")
        throw new Error(`Poseidon: wrong value=${p} (${typeof p})`);
      return n.create(p);
    });
    let g = 0;
    for (let p = 0; p < c; p++)
      m = d(m, !0, g++);
    for (let p = 0; p < o; p++)
      m = d(m, !1, g++);
    for (let p = 0; p < c; p++)
      m = d(m, !0, g++);
    if (g !== i)
      throw new Error(`Poseidon: wrong number of rounds: last round=${g}, total=${i}`);
    return m;
  };
  return h.roundConstants = a, h;
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Ap = BigInt(0), Ti = BigInt(1);
function kp(e, t) {
  const n = (a, i) => {
    const o = i.negate();
    return a ? o : i;
  }, r = (a) => {
    const i = Math.ceil(t / a) + 1, o = 2 ** (a - 1);
    return { windows: i, windowSize: o };
  };
  return {
    constTimeNegate: n,
    // non-const time multiplication ladder
    unsafeLadder(a, i) {
      let o = e.ZERO, s = a;
      for (; i > Ap; )
        i & Ti && (o = o.add(s)), s = s.double(), i >>= Ti;
      return o;
    },
    /**
     * Creates a wNAF precomputation window. Used for caching.
     * Default window size is set by `utils.precompute()` and is equal to 8.
     * Number of precomputed points depends on the curve size:
     * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
     * - 𝑊 is the window size
     * - 𝑛 is the bitlength of the curve order.
     * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
     * @returns precomputed point tables flattened to a single array
     */
    precomputeWindow(a, i) {
      const { windows: o, windowSize: s } = r(i), l = [];
      let c = a, u = c;
      for (let d = 0; d < o; d++) {
        u = c, l.push(u);
        for (let h = 1; h < s; h++)
          u = u.add(c), l.push(u);
        c = u.double();
      }
      return l;
    },
    /**
     * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @returns real and fake (for const-time) points
     */
    wNAF(a, i, o) {
      const { windows: s, windowSize: l } = r(a);
      let c = e.ZERO, u = e.BASE;
      const d = BigInt(2 ** a - 1), h = 2 ** a, f = BigInt(a);
      for (let m = 0; m < s; m++) {
        const g = m * l;
        let p = Number(o & d);
        o >>= f, p > l && (p -= h, o += Ti);
        const b = g, _ = g + Math.abs(p) - 1, k = m % 2 !== 0, y = p < 0;
        p === 0 ? u = u.add(n(k, i[b])) : c = c.add(n(y, i[_]));
      }
      return { p: c, f: u };
    },
    wNAFCached(a, i, o, s) {
      const l = a._WINDOW_SIZE || 1;
      let c = i.get(a);
      return c || (c = this.precomputeWindow(a, l), l !== 1 && i.set(a, s(c))), this.wNAF(l, c, o);
    }
  };
}
function Zu(e) {
  return Qo(e.Fp), Jr(e, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  }), Object.freeze({
    ...Uu(e.n, e.nBitLength),
    ...e,
    p: e.Fp.ORDER
  });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function vp(e) {
  const t = Zu(e);
  Jr(t, {
    a: "field",
    b: "field"
  }, {
    allowedPrivateKeyLengths: "array",
    wrapPrivateKey: "boolean",
    isTorsionFree: "function",
    clearCofactor: "function",
    allowInfinityPoint: "boolean",
    fromBytes: "function",
    toBytes: "function"
  });
  const { endo: n, Fp: r, a } = t;
  if (n) {
    if (!r.eql(a, r.ZERO))
      throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
    if (typeof n != "object" || typeof n.beta != "bigint" || typeof n.splitScalar != "function")
      throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
  }
  return Object.freeze({ ...t });
}
const { bytesToNumberBE: _p, hexToBytes: xp } = up, Ut = {
  // asn.1 DER encoding utils
  Err: class extends Error {
    constructor(t = "") {
      super(t);
    }
  },
  _parseInt(e) {
    const { Err: t } = Ut;
    if (e.length < 2 || e[0] !== 2)
      throw new t("Invalid signature integer tag");
    const n = e[1], r = e.subarray(2, n + 2);
    if (!n || r.length !== n)
      throw new t("Invalid signature integer: wrong length");
    if (r[0] & 128)
      throw new t("Invalid signature integer: negative");
    if (r[0] === 0 && !(r[1] & 128))
      throw new t("Invalid signature integer: unnecessary leading zero");
    return { d: _p(r), l: e.subarray(n + 2) };
  },
  toSig(e) {
    const { Err: t } = Ut, n = typeof e == "string" ? xp(e) : e;
    if (!vt(n))
      throw new Error("ui8a expected");
    let r = n.length;
    if (r < 2 || n[0] != 48)
      throw new t("Invalid signature tag");
    if (n[1] !== r - 2)
      throw new t("Invalid signature: incorrect length");
    const { d: a, l: i } = Ut._parseInt(n.subarray(2)), { d: o, l: s } = Ut._parseInt(i);
    if (s.length)
      throw new t("Invalid signature: left bytes after parsing");
    return { r: a, s: o };
  },
  hexFromSig(e) {
    const t = (c) => Number.parseInt(c[0], 16) & 8 ? "00" + c : c, n = (c) => {
      const u = c.toString(16);
      return u.length & 1 ? `0${u}` : u;
    }, r = t(n(e.s)), a = t(n(e.r)), i = r.length / 2, o = a.length / 2, s = n(i), l = n(o);
    return `30${n(o + i + 4)}02${l}${a}02${s}${r}`;
  }
}, Ot = BigInt(0), Xe = BigInt(1);
BigInt(2);
const xc = BigInt(3);
BigInt(4);
function Ep(e) {
  const t = vp(e), { Fp: n } = t, r = t.toBytes || ((m, g, p) => {
    const b = g.toAffine();
    return Fn(Uint8Array.from([4]), n.toBytes(b.x), n.toBytes(b.y));
  }), a = t.fromBytes || ((m) => {
    const g = m.subarray(1), p = n.fromBytes(g.subarray(0, n.BYTES)), b = n.fromBytes(g.subarray(n.BYTES, 2 * n.BYTES));
    return { x: p, y: b };
  });
  function i(m) {
    const { a: g, b: p } = t, b = n.sqr(m), _ = n.mul(b, m);
    return n.add(n.add(_, n.mul(m, g)), p);
  }
  if (!n.eql(n.sqr(t.Gy), i(t.Gx)))
    throw new Error("bad generator point: equation left != right");
  function o(m) {
    return typeof m == "bigint" && Ot < m && m < t.n;
  }
  function s(m) {
    if (!o(m))
      throw new Error("Expected valid bigint: 0 < bigint < curve.n");
  }
  function l(m) {
    const { allowedPrivateKeyLengths: g, nByteLength: p, wrapPrivateKey: b, n: _ } = t;
    if (g && typeof m != "bigint") {
      if (vt(m) && (m = Xt(m)), typeof m != "string" || !g.includes(m.length))
        throw new Error("Invalid key");
      m = m.padStart(p * 2, "0");
    }
    let k;
    try {
      k = typeof m == "bigint" ? m : ze(Je("private key", m, p));
    } catch {
      throw new Error(`private key must be ${p} bytes, hex or bigint, not ${typeof m}`);
    }
    return b && (k = je(k, _)), s(k), k;
  }
  const c = /* @__PURE__ */ new Map();
  function u(m) {
    if (!(m instanceof d))
      throw new Error("ProjectivePoint expected");
  }
  class d {
    constructor(g, p, b) {
      if (this.px = g, this.py = p, this.pz = b, g == null || !n.isValid(g))
        throw new Error("x required");
      if (p == null || !n.isValid(p))
        throw new Error("y required");
      if (b == null || !n.isValid(b))
        throw new Error("z required");
    }
    // Does not validate if the point is on-curve.
    // Use fromHex instead, or call assertValidity() later.
    static fromAffine(g) {
      const { x: p, y: b } = g || {};
      if (!g || !n.isValid(p) || !n.isValid(b))
        throw new Error("invalid affine point");
      if (g instanceof d)
        throw new Error("projective point not allowed");
      const _ = (k) => n.eql(k, n.ZERO);
      return _(p) && _(b) ? d.ZERO : new d(p, b, n.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    /**
     * Takes a bunch of Projective Points but executes only one
     * inversion on all of them. Inversion is very slow operation,
     * so this improves performance massively.
     * Optimization: converts a list of projective points to a list of identical points with Z=1.
     */
    static normalizeZ(g) {
      const p = n.invertBatch(g.map((b) => b.pz));
      return g.map((b, _) => b.toAffine(p[_])).map(d.fromAffine);
    }
    /**
     * Converts hash string or Uint8Array to Point.
     * @param hex short/long ECDSA hex
     */
    static fromHex(g) {
      const p = d.fromAffine(a(Je("pointHex", g)));
      return p.assertValidity(), p;
    }
    // Multiplies generator point by privateKey.
    static fromPrivateKey(g) {
      return d.BASE.multiply(l(g));
    }
    // "Private method", don't use it directly
    _setWindowSize(g) {
      this._WINDOW_SIZE = g, c.delete(this);
    }
    // A point on curve is valid if it conforms to equation.
    assertValidity() {
      if (this.is0()) {
        if (t.allowInfinityPoint && !n.is0(this.py))
          return;
        throw new Error("bad point: ZERO");
      }
      const { x: g, y: p } = this.toAffine();
      if (!n.isValid(g) || !n.isValid(p))
        throw new Error("bad point: x or y not FE");
      const b = n.sqr(p), _ = i(g);
      if (!n.eql(b, _))
        throw new Error("bad point: equation left != right");
      if (!this.isTorsionFree())
        throw new Error("bad point: not in prime-order subgroup");
    }
    hasEvenY() {
      const { y: g } = this.toAffine();
      if (n.isOdd)
        return !n.isOdd(g);
      throw new Error("Field doesn't support isOdd");
    }
    /**
     * Compare one point to another.
     */
    equals(g) {
      u(g);
      const { px: p, py: b, pz: _ } = this, { px: k, py: y, pz: S } = g, x = n.eql(n.mul(p, S), n.mul(k, _)), v = n.eql(n.mul(b, S), n.mul(y, _));
      return x && v;
    }
    /**
     * Flips point to one corresponding to (x, -y) in Affine coordinates.
     */
    negate() {
      return new d(this.px, n.neg(this.py), this.pz);
    }
    // Renes-Costello-Batina exception-free doubling formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 3
    // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
    double() {
      const { a: g, b: p } = t, b = n.mul(p, xc), { px: _, py: k, pz: y } = this;
      let S = n.ZERO, x = n.ZERO, v = n.ZERO, B = n.mul(_, _), N = n.mul(k, k), I = n.mul(y, y), w = n.mul(_, k);
      return w = n.add(w, w), v = n.mul(_, y), v = n.add(v, v), S = n.mul(g, v), x = n.mul(b, I), x = n.add(S, x), S = n.sub(N, x), x = n.add(N, x), x = n.mul(S, x), S = n.mul(w, S), v = n.mul(b, v), I = n.mul(g, I), w = n.sub(B, I), w = n.mul(g, w), w = n.add(w, v), v = n.add(B, B), B = n.add(v, B), B = n.add(B, I), B = n.mul(B, w), x = n.add(x, B), I = n.mul(k, y), I = n.add(I, I), B = n.mul(I, w), S = n.sub(S, B), v = n.mul(I, N), v = n.add(v, v), v = n.add(v, v), new d(S, x, v);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add(g) {
      u(g);
      const { px: p, py: b, pz: _ } = this, { px: k, py: y, pz: S } = g;
      let x = n.ZERO, v = n.ZERO, B = n.ZERO;
      const N = t.a, I = n.mul(t.b, xc);
      let w = n.mul(p, k), T = n.mul(b, y), C = n.mul(_, S), O = n.add(p, b), A = n.add(k, y);
      O = n.mul(O, A), A = n.add(w, T), O = n.sub(O, A), A = n.add(p, _);
      let E = n.add(k, S);
      return A = n.mul(A, E), E = n.add(w, C), A = n.sub(A, E), E = n.add(b, _), x = n.add(y, S), E = n.mul(E, x), x = n.add(T, C), E = n.sub(E, x), B = n.mul(N, A), x = n.mul(I, C), B = n.add(x, B), x = n.sub(T, B), B = n.add(T, B), v = n.mul(x, B), T = n.add(w, w), T = n.add(T, w), C = n.mul(N, C), A = n.mul(I, A), T = n.add(T, C), C = n.sub(w, C), C = n.mul(N, C), A = n.add(A, C), w = n.mul(T, A), v = n.add(v, w), w = n.mul(E, A), x = n.mul(O, x), x = n.sub(x, w), w = n.mul(O, T), B = n.mul(E, B), B = n.add(B, w), new d(x, v, B);
    }
    subtract(g) {
      return this.add(g.negate());
    }
    is0() {
      return this.equals(d.ZERO);
    }
    wNAF(g) {
      return f.wNAFCached(this, c, g, (p) => {
        const b = n.invertBatch(p.map((_) => _.pz));
        return p.map((_, k) => _.toAffine(b[k])).map(d.fromAffine);
      });
    }
    /**
     * Non-constant-time multiplication. Uses double-and-add algorithm.
     * It's faster, but should only be used when you don't care about
     * an exposed private key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe(g) {
      const p = d.ZERO;
      if (g === Ot)
        return p;
      if (s(g), g === Xe)
        return this;
      const { endo: b } = t;
      if (!b)
        return f.unsafeLadder(this, g);
      let { k1neg: _, k1: k, k2neg: y, k2: S } = b.splitScalar(g), x = p, v = p, B = this;
      for (; k > Ot || S > Ot; )
        k & Xe && (x = x.add(B)), S & Xe && (v = v.add(B)), B = B.double(), k >>= Xe, S >>= Xe;
      return _ && (x = x.negate()), y && (v = v.negate()), v = new d(n.mul(v.px, b.beta), v.py, v.pz), x.add(v);
    }
    /**
     * Constant time multiplication.
     * Uses wNAF method. Windowed method may be 10% faster,
     * but takes 2x longer to generate and consumes 2x memory.
     * Uses precomputes when available.
     * Uses endomorphism for Koblitz curves.
     * @param scalar by which the point would be multiplied
     * @returns New point
     */
    multiply(g) {
      s(g);
      let p = g, b, _;
      const { endo: k } = t;
      if (k) {
        const { k1neg: y, k1: S, k2neg: x, k2: v } = k.splitScalar(p);
        let { p: B, f: N } = this.wNAF(S), { p: I, f: w } = this.wNAF(v);
        B = f.constTimeNegate(y, B), I = f.constTimeNegate(x, I), I = new d(n.mul(I.px, k.beta), I.py, I.pz), b = B.add(I), _ = N.add(w);
      } else {
        const { p: y, f: S } = this.wNAF(p);
        b = y, _ = S;
      }
      return d.normalizeZ([b, _])[0];
    }
    /**
     * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
     * Not using Strauss-Shamir trick: precomputation tables are faster.
     * The trick could be useful if both P and Q are not G (not in our case).
     * @returns non-zero affine point
     */
    multiplyAndAddUnsafe(g, p, b) {
      const _ = d.BASE, k = (S, x) => x === Ot || x === Xe || !S.equals(_) ? S.multiplyUnsafe(x) : S.multiply(x), y = k(this, p).add(k(g, b));
      return y.is0() ? void 0 : y;
    }
    // Converts Projective point to affine (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    // (x, y, z) ∋ (x=x/z, y=y/z)
    toAffine(g) {
      const { px: p, py: b, pz: _ } = this, k = this.is0();
      g == null && (g = k ? n.ONE : n.inv(_));
      const y = n.mul(p, g), S = n.mul(b, g), x = n.mul(_, g);
      if (k)
        return { x: n.ZERO, y: n.ZERO };
      if (!n.eql(x, n.ONE))
        throw new Error("invZ was invalid");
      return { x: y, y: S };
    }
    isTorsionFree() {
      const { h: g, isTorsionFree: p } = t;
      if (g === Xe)
        return !0;
      if (p)
        return p(d, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h: g, clearCofactor: p } = t;
      return g === Xe ? this : p ? p(d, this) : this.multiplyUnsafe(t.h);
    }
    toRawBytes(g = !0) {
      return this.assertValidity(), r(d, this, g);
    }
    toHex(g = !0) {
      return Xt(this.toRawBytes(g));
    }
  }
  d.BASE = new d(t.Gx, t.Gy, n.ONE), d.ZERO = new d(n.ZERO, n.ONE, n.ZERO);
  const h = t.nBitLength, f = kp(d, t.endo ? Math.ceil(h / 2) : h);
  return {
    CURVE: t,
    ProjectivePoint: d,
    normPrivateKeyToScalar: l,
    weierstrassEquation: i,
    isWithinCurveOrder: o
  };
}
function Sp(e) {
  const t = Zu(e);
  return Jr(t, {
    hash: "hash",
    hmac: "function",
    randomBytes: "function"
  }, {
    bits2int: "function",
    bits2int_modN: "function",
    lowS: "boolean"
  }), Object.freeze({ lowS: !0, ...t });
}
function Cp(e) {
  const t = Sp(e), { Fp: n, n: r } = t, a = n.BYTES + 1, i = 2 * n.BYTES + 1;
  function o(A) {
    return Ot < A && A < n.ORDER;
  }
  function s(A) {
    return je(A, r);
  }
  function l(A) {
    return Ua(A, r);
  }
  const { ProjectivePoint: c, normPrivateKeyToScalar: u, weierstrassEquation: d, isWithinCurveOrder: h } = Ep({
    ...t,
    toBytes(A, E, j) {
      const P = E.toAffine(), z = n.toBytes(P.x), L = Fn;
      return j ? L(Uint8Array.from([E.hasEvenY() ? 2 : 3]), z) : L(Uint8Array.from([4]), z, n.toBytes(P.y));
    },
    fromBytes(A) {
      const E = A.length, j = A[0], P = A.subarray(1);
      if (E === a && (j === 2 || j === 3)) {
        const z = ze(P);
        if (!o(z))
          throw new Error("Point is not on curve");
        const L = d(z);
        let U = n.sqrt(L);
        const F = (U & Xe) === Xe;
        return (j & 1) === 1 !== F && (U = n.neg(U)), { x: z, y: U };
      } else if (E === i && j === 4) {
        const z = n.fromBytes(P.subarray(0, n.BYTES)), L = n.fromBytes(P.subarray(n.BYTES, 2 * n.BYTES));
        return { x: z, y: L };
      } else
        throw new Error(`Point of length ${E} was invalid. Expected ${a} compressed bytes or ${i} uncompressed bytes`);
    }
  }), f = (A) => Xt(Vn(A, t.nByteLength));
  function m(A) {
    const E = r >> Xe;
    return A > E;
  }
  function g(A) {
    return m(A) ? s(-A) : A;
  }
  const p = (A, E, j) => ze(A.slice(E, j));
  class b {
    constructor(E, j, P) {
      this.r = E, this.s = j, this.recovery = P, this.assertValidity();
    }
    // pair (bytes of r, bytes of s)
    static fromCompact(E) {
      const j = t.nByteLength;
      return E = Je("compactSignature", E, j * 2), new b(p(E, 0, j), p(E, j, 2 * j));
    }
    // DER encoded ECDSA signature
    // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
    static fromDER(E) {
      const { r: j, s: P } = Ut.toSig(Je("DER", E));
      return new b(j, P);
    }
    assertValidity() {
      if (!h(this.r))
        throw new Error("r must be 0 < r < CURVE.n");
      if (!h(this.s))
        throw new Error("s must be 0 < s < CURVE.n");
    }
    addRecoveryBit(E) {
      return new b(this.r, this.s, E);
    }
    recoverPublicKey(E) {
      const { r: j, s: P, recovery: z } = this, L = v(Je("msgHash", E));
      if (z == null || ![0, 1, 2, 3].includes(z))
        throw new Error("recovery id invalid");
      const U = z === 2 || z === 3 ? j + t.n : j;
      if (U >= n.ORDER)
        throw new Error("recovery id 2 or 3 invalid");
      const F = z & 1 ? "03" : "02", ie = c.fromHex(F + f(U)), J = l(U), ce = s(-L * J), V = s(P * J), M = c.BASE.multiplyAndAddUnsafe(ie, ce, V);
      if (!M)
        throw new Error("point at infinify");
      return M.assertValidity(), M;
    }
    // Signatures should be low-s, to prevent malleability.
    hasHighS() {
      return m(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new b(this.r, s(-this.s), this.recovery) : this;
    }
    // DER-encoded
    toDERRawBytes() {
      return kn(this.toDERHex());
    }
    toDERHex() {
      return Ut.hexFromSig({ r: this.r, s: this.s });
    }
    // padded bytes of r, then padded bytes of s
    toCompactRawBytes() {
      return kn(this.toCompactHex());
    }
    toCompactHex() {
      return f(this.r) + f(this.s);
    }
  }
  const _ = {
    isValidPrivateKey(A) {
      try {
        return u(A), !0;
      } catch {
        return !1;
      }
    },
    normPrivateKeyToScalar: u,
    /**
     * Produces cryptographically secure private key from random of size
     * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
     */
    randomPrivateKey: () => {
      const A = qu(t.n);
      return yp(t.randomBytes(A), t.n);
    },
    /**
     * Creates precompute table for an arbitrary EC point. Makes point "cached".
     * Allows to massively speed-up `point.multiply(scalar)`.
     * @returns cached point
     * @example
     * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
     * fast.multiply(privKey); // much faster ECDH now
     */
    precompute(A = 8, E = c.BASE) {
      return E._setWindowSize(A), E.multiply(BigInt(3)), E;
    }
  };
  function k(A, E = !0) {
    return c.fromPrivateKey(A).toRawBytes(E);
  }
  function y(A) {
    const E = vt(A), j = typeof A == "string", P = (E || j) && A.length;
    return E ? P === a || P === i : j ? P === 2 * a || P === 2 * i : A instanceof c;
  }
  function S(A, E, j = !0) {
    if (y(A))
      throw new Error("first arg must be private key");
    if (!y(E))
      throw new Error("second arg must be public key");
    return c.fromHex(E).multiply(u(A)).toRawBytes(j);
  }
  const x = t.bits2int || function(A) {
    const E = ze(A), j = A.length * 8 - t.nBitLength;
    return j > 0 ? E >> BigInt(j) : E;
  }, v = t.bits2int_modN || function(A) {
    return s(x(A));
  }, B = ni(t.nBitLength);
  function N(A) {
    if (typeof A != "bigint")
      throw new Error("bigint expected");
    if (!(Ot <= A && A < B))
      throw new Error(`bigint expected < 2^${t.nBitLength}`);
    return Vn(A, t.nByteLength);
  }
  function I(A, E, j = w) {
    if (["recovered", "canonical"].some((Q) => Q in j))
      throw new Error("sign() legacy options not supported");
    const { hash: P, randomBytes: z } = t;
    let { lowS: L, prehash: U, extraEntropy: F } = j;
    L == null && (L = !0), A = Je("msgHash", A), U && (A = Je("prehashed msgHash", P(A)));
    const ie = v(A), J = u(E), ce = [N(J), N(ie)];
    if (F != null) {
      const Q = F === !0 ? z(n.BYTES) : F;
      ce.push(Je("extraEntropy", Q));
    }
    const V = Fn(...ce), M = ie;
    function q(Q) {
      const le = x(Q);
      if (!h(le))
        return;
      const Dt = l(le), Ce = c.BASE.multiply(le).toAffine(), ae = s(Ce.x);
      if (ae === Ot)
        return;
      const ke = s(Dt * s(M + ae * J));
      if (ke === Ot)
        return;
      let jt = (Ce.x === ae ? 0 : 2) | Number(Ce.y & Xe), it = ke;
      return L && m(ke) && (it = g(ke), jt ^= 1), new b(ae, it, jt);
    }
    return { seed: V, k2sig: q };
  }
  const w = { lowS: t.lowS, prehash: !1 }, T = { lowS: t.lowS, prehash: !1 };
  function C(A, E, j = w) {
    const { seed: P, k2sig: z } = I(A, E, j), L = t;
    return Mu(L.hash.outputLen, L.nByteLength, L.hmac)(P, z);
  }
  c.BASE._setWindowSize(8);
  function O(A, E, j, P = T) {
    var Ce;
    const z = A;
    if (E = Je("msgHash", E), j = Je("publicKey", j), "strict" in P)
      throw new Error("options.strict was renamed to lowS");
    const { lowS: L, prehash: U } = P;
    let F, ie;
    try {
      if (typeof z == "string" || vt(z))
        try {
          F = b.fromDER(z);
        } catch (ae) {
          if (!(ae instanceof Ut.Err))
            throw ae;
          F = b.fromCompact(z);
        }
      else if (typeof z == "object" && typeof z.r == "bigint" && typeof z.s == "bigint") {
        const { r: ae, s: ke } = z;
        F = new b(ae, ke);
      } else
        throw new Error("PARSE");
      ie = c.fromHex(j);
    } catch (ae) {
      if (ae.message === "PARSE")
        throw new Error("signature must be Signature instance, Uint8Array or hex string");
      return !1;
    }
    if (L && F.hasHighS())
      return !1;
    U && (E = t.hash(E));
    const { r: J, s: ce } = F, V = v(E), M = l(ce), q = s(V * M), Q = s(J * M), le = (Ce = c.BASE.multiplyAndAddUnsafe(ie, q, Q)) == null ? void 0 : Ce.toAffine();
    return le ? s(le.x) === J : !1;
  }
  return {
    CURVE: t,
    getPublicKey: k,
    getSharedSecret: S,
    sign: C,
    verify: O,
    ProjectivePoint: c,
    Signature: b,
    utils: _
  };
}
let Ku = class extends Ko {
  constructor(t, n) {
    super(), this.finished = !1, this.destroyed = !1, Tm(t);
    const r = Qa(n);
    if (this.iHash = t.create(), typeof this.iHash.update != "function")
      throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const a = this.blockLen, i = new Uint8Array(a);
    i.set(r.length > a ? t.create().update(r).digest() : r);
    for (let o = 0; o < i.length; o++)
      i[o] ^= 54;
    this.iHash.update(i), this.oHash = t.create();
    for (let o = 0; o < i.length; o++)
      i[o] ^= 106;
    this.oHash.update(i), i.fill(0);
  }
  update(t) {
    return Un(this), this.iHash.update(t), this;
  }
  digestInto(t) {
    Un(this), Zo(t, this.outputLen), this.finished = !0, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy();
  }
  digest() {
    const t = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(t), t;
  }
  _cloneInto(t) {
    t || (t = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: n, iHash: r, finished: a, destroyed: i, blockLen: o, outputLen: s } = this;
    return t = t, t.finished = a, t.destroyed = i, t.blockLen = o, t.outputLen = s, t.oHash = n._cloneInto(t.oHash), t.iHash = r._cloneInto(t.iHash), t;
  }
  destroy() {
    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
  }
};
const Ju = (e, t, n) => new Ku(e, t).update(n).digest();
Ju.create = (e, t) => new Ku(e, t);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function Ip(e) {
  return {
    hash: e,
    hmac: (t, ...n) => Ju(e, t, Lm(...n)),
    randomBytes: $m
  };
}
const Cr = BigInt("3618502788666131213697322783095070105526743751716087489154079457884512865583"), ln = BigInt("0x800000000000000000000000000000000000000000000000000000000000000"), Xu = 252;
function Ec(e) {
  for (; e[0] === 0; )
    e = e.subarray(1);
  const t = e.length * 8 - Xu, n = ze(e);
  return t > 0 ? n >> BigInt(t) : n;
}
function Gu(e) {
  return typeof e == "string" && (e = ns(e), e.length & 1 && (e = "0" + e)), kn(e);
}
const In = Cp({
  a: BigInt(1),
  b: BigInt("3141592653589793238462643383279502884197169399375105820974944592307816406665"),
  Fp: Vu(BigInt("0x800000000000011000000000000000000000000000000000000000000000001")),
  n: Cr,
  nBitLength: Xu,
  Gx: BigInt("874739451078007766457464989774322083649278607533249481151382481072868806602"),
  Gy: BigInt("152666792071518830868575557812948353041420400780739481342941381225525861407"),
  h: BigInt(1),
  lowS: !1,
  ...Ip(Xo),
  bits2int: Ec,
  bits2int_modN: (e) => {
    const t = ze(e).toString(16);
    return t.length === 63 && (e = Gu(t + "0")), je(Ec(e), Cr);
  }
}), Tp = In;
function qn(e) {
  return Je("", typeof e == "string" ? Gu(e) : e);
}
function es(e) {
  return Xt(qn(e)).padStart(64, "0");
}
function Wu(e, t = !1) {
  return In.getPublicKey(es(e), t);
}
function Bp(e, t) {
  return In.getSharedSecret(es(e), t);
}
function Yu(e) {
  const { r: t, s: n } = e;
  if (t < 0n || t >= ln)
    throw new Error(`Signature.r should be [1, ${ln})`);
  const r = Ua(n, Cr);
  if (r < 0n || r >= ln)
    throw new Error(`inv(Signature.s) should be [1, ${ln})`);
}
function Qu(e) {
  const t = qn(e);
  if (ze(t) >= ln)
    throw new Error(`msgHash should be [0, ${ln})`);
  return t;
}
function ed(e, t, n) {
  const r = In.sign(Qu(e), es(t), n);
  return Yu(r), r;
}
function Op(e, t, n) {
  if (!(e instanceof Ia)) {
    const r = qn(e);
    try {
      e = Ia.fromDER(r);
    } catch (a) {
      if (!(a instanceof Ut.Err))
        throw a;
      e = Ia.fromCompact(r);
    }
  }
  return Yu(e), In.verify(e, Qu(t), qn(n));
}
const { CURVE: Dp, ProjectivePoint: zn, Signature: Ia, utils: ts } = In;
function td(e) {
  return `0x${Xt(e.subarray(1)).replace(/^0+/gm, "")}`;
}
function ns(e) {
  return e.replace(/^0x/i, "");
}
function nd(e) {
  const t = qn(e), n = 2n ** 256n, r = n - je(n, Cr);
  for (let a = 0; ; a++) {
    const i = ao(Fn(t, Yo(BigInt(a))));
    if (i < r)
      return je(i, Cr).toString(16);
    if (a === 1e5)
      throw new Error("grindKey is broken: tried 100k vals");
  }
}
function rs(e) {
  return td(Wu(e, !0));
}
function jp(e) {
  if (e = ns(e), e.length !== 130)
    throw new Error("Wrong ethereum signature");
  return nd(e.substring(0, 64));
}
const Pp = 2n ** 31n - 1n, ca = (e) => Number(e & Pp);
function Np(e, t, n, r) {
  const a = ca(ao(e)), i = ca(ao(t)), o = ti(ns(n));
  return `m/2645'/${a}'/${i}'/${ca(o)}'/${ca(o >> 31n)}'/${r}`;
}
const Ir = [
  new zn(2089986280348253421170679821480865132823066470938446095505822317253594081284n, 1713931329540660377023406109199410414810705867260802078187082345529207694986n, 1n),
  new zn(996781205833008774514500082376783249102396023663454813447423147977397232763n, 1668503676786377725805489344771023921079126552019160156920634619255970485781n, 1n),
  new zn(2251563274489750535117886426533222435294046428347329203627021249169616184184n, 1798716007562728905295480679789526322175868328062420237419143593021674992973n, 1n),
  new zn(2138414695194151160943305727036575959195309218611738193261179310511854807447n, 113410276730064486255102093846540133784865286929052426931474106396135072156n, 1n),
  new zn(2379962749567351885752724891227938183011949129833673362440656643086021394946n, 776496453633298175483985398648758586525933812536653089401905292063708816422n, 1n)
];
function rd(e, t) {
  const n = [];
  let r = e;
  for (let a = 0; a < 248; a++)
    n.push(r), r = r.double();
  r = t;
  for (let a = 0; a < 4; a++)
    n.push(r), r = r.double();
  return n;
}
const zp = rd(Ir[1], Ir[2]), Rp = rd(Ir[3], Ir[4]);
function Lp(e) {
  let t;
  if (typeof e == "bigint")
    t = e;
  else if (typeof e == "number") {
    if (!Number.isSafeInteger(e))
      throw new Error(`Invalid pedersenArg: ${e}`);
    t = BigInt(e);
  } else
    t = ze(qn(e));
  if (!(0n <= t && t < In.CURVE.Fp.ORDER))
    throw new Error(`PedersenArg should be 0 <= value < CURVE.P: ${t}`);
  return t;
}
function Sc(e, t, n) {
  let r = Lp(t);
  for (let a = 0; a < 252; a++) {
    const i = n[a];
    if (i.equals(e))
      throw new Error("Same point");
    (r & 1n) !== 0n && (e = e.add(i)), r >>= 1n;
  }
  return e;
}
function Yn(e, t) {
  let n = Ir[0];
  return n = Sc(n, e, zp), n = Sc(n, t, Rp), td(n.toRawBytes(!0));
}
const $p = (e, t = Yn) => [0, ...e, e.length].reduce((n, r) => t(n, r)), Mp = ni(250), Gt = (e) => ze(Xm(e)) & Mp, ao = (e) => ze(Xo(e)), ad = Vu(BigInt("3618502788666131213697322783095070105623107215331596699973092056135872020481"));
function io(e, t, n) {
  const r = e.fromBytes(Xo(ju(`${t}${n}`)));
  return e.create(r);
}
function id(e, t, n, r = 0) {
  const a = [], i = [];
  for (let o = 0; o < n; o++)
    a.push(io(e, `${t}x`, r * n + o)), i.push(io(e, `${t}y`, r * n + o));
  if ((/* @__PURE__ */ new Set([...a, ...i])).size !== 2 * n)
    throw new Error("X and Y values are not distinct");
  return a.map((o) => i.map((s) => e.inv(e.sub(o, s))));
}
const Hp = [
  [3, 1, 1],
  [1, -1, 1],
  [1, 1, -2]
].map((e) => e.map(BigInt));
function as(e, t) {
  if (Qo(e.Fp), !Number.isSafeInteger(e.rate) || !Number.isSafeInteger(e.capacity))
    throw new Error(`Wrong poseidon opts: ${e}`);
  const n = e.rate + e.capacity, r = e.roundsFull + e.roundsPartial, a = [];
  for (let o = 0; o < r; o++) {
    const s = [];
    for (let l = 0; l < n; l++)
      s.push(io(e.Fp, "Hades", n * o + l));
    a.push(s);
  }
  const i = wp({
    ...e,
    t: n,
    sboxPower: 3,
    reversePartialPowIdx: !0,
    mds: t,
    roundConstants: a
  });
  return i.m = n, i.rate = e.rate, i.capacity = e.capacity, i;
}
function Up(e, t = 0) {
  const n = e.rate + e.capacity;
  if (!Number.isSafeInteger(t))
    throw new Error(`Wrong mdsAttempt=${t}`);
  return as(e, id(e.Fp, "HadesMDS", n, t));
}
const Xr = as({ Fp: ad, rate: 2, capacity: 1, roundsFull: 8, roundsPartial: 83 }, Hp);
function is(e, t, n = Xr) {
  return n([e, t, 2n])[0];
}
function Vp(e, t, n = Xr) {
  return Yo(is(ze(e), ze(t), n));
}
function Fp(e, t = Xr) {
  return t([e, 0n, 1n])[0];
}
function Se(e, t = Xr) {
  const { m: n, rate: r } = t;
  if (!Array.isArray(e))
    throw new Error("bigint array expected in values");
  const a = Array.from(e);
  for (a.push(1n); a.length % r !== 0; )
    a.push(0n);
  let i = new Array(n).fill(0n);
  for (let o = 0; o < a.length; o += r) {
    for (let s = 0; s < r; s++)
      i[s] += a[o + s];
    i = t(i);
  }
  return i[0];
}
const qp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CURVE: Dp,
  Fp251: ad,
  MAX_VALUE: ln,
  ProjectivePoint: zn,
  Signature: Ia,
  _poseidonMDS: id,
  _starkCurve: Tp,
  computeHashOnElements: $p,
  ethSigToPrivate: jp,
  getAccountPath: Np,
  getPublicKey: Wu,
  getSharedSecret: Bp,
  getStarkKey: rs,
  grindKey: nd,
  keccak: Gt,
  pedersen: Yn,
  poseidonBasic: as,
  poseidonCreate: Up,
  poseidonHash: is,
  poseidonHashFunc: Vp,
  poseidonHashMany: Se,
  poseidonHashSingle: Fp,
  poseidonSmall: Xr,
  sign: ed,
  utils: ts,
  verify: Op
}, Symbol.toStringTag, { value: "Module" }));
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Ee = BigInt(0), he = BigInt(1), sn = BigInt(2), Zp = BigInt(3), oo = BigInt(4), Cc = BigInt(5), Ic = BigInt(8);
BigInt(9);
BigInt(16);
function Re(e, t) {
  const n = e % t;
  return n >= Ee ? n : t + n;
}
function Kp(e, t, n) {
  if (n <= Ee || t < Ee)
    throw new Error("Expected power/modulo > 0");
  if (n === he)
    return Ee;
  let r = he;
  for (; t > Ee; )
    t & he && (r = r * e % n), e = e * e % n, t >>= he;
  return r;
}
function Ze(e, t, n) {
  let r = e;
  for (; t-- > Ee; )
    r *= r, r %= n;
  return r;
}
function so(e, t) {
  if (e === Ee || t <= Ee)
    throw new Error(`invert: expected positive integers, got n=${e} mod=${t}`);
  let n = Re(e, t), r = t, a = Ee, i = he;
  for (; n !== Ee; ) {
    const s = r / n, l = r % n, c = a - i * s;
    r = n, n = l, a = i, i = c;
  }
  if (r !== he)
    throw new Error("invert: does not exist");
  return Re(a, t);
}
function Jp(e) {
  const t = (e - he) / sn;
  let n, r, a;
  for (n = e - he, r = 0; n % sn === Ee; n /= sn, r++)
    ;
  for (a = sn; a < e && Kp(a, t, e) !== e - he; a++)
    ;
  if (r === 1) {
    const o = (e + he) / oo;
    return function(l, c) {
      const u = l.pow(c, o);
      if (!l.eql(l.sqr(u), c))
        throw new Error("Cannot find square root");
      return u;
    };
  }
  const i = (n + he) / sn;
  return function(s, l) {
    if (s.pow(l, t) === s.neg(s.ONE))
      throw new Error("Cannot find square root");
    let c = r, u = s.pow(s.mul(s.ONE, a), n), d = s.pow(l, i), h = s.pow(l, n);
    for (; !s.eql(h, s.ONE); ) {
      if (s.eql(h, s.ZERO))
        return s.ZERO;
      let f = 1;
      for (let g = s.sqr(h); f < c && !s.eql(g, s.ONE); f++)
        g = s.sqr(g);
      const m = s.pow(u, he << BigInt(c - f - 1));
      u = s.sqr(m), d = s.mul(d, m), h = s.mul(h, u), c = f;
    }
    return d;
  };
}
function Xp(e) {
  if (e % oo === Zp) {
    const t = (e + he) / oo;
    return function(r, a) {
      const i = r.pow(a, t);
      if (!r.eql(r.sqr(i), a))
        throw new Error("Cannot find square root");
      return i;
    };
  }
  if (e % Ic === Cc) {
    const t = (e - Cc) / Ic;
    return function(r, a) {
      const i = r.mul(a, sn), o = r.pow(i, t), s = r.mul(a, o), l = r.mul(r.mul(s, sn), o), c = r.mul(s, r.sub(l, r.ONE));
      if (!r.eql(r.sqr(c), a))
        throw new Error("Cannot find square root");
      return c;
    };
  }
  return Jp(e);
}
const Gp = [
  "create",
  "isValid",
  "is0",
  "neg",
  "inv",
  "sqrt",
  "sqr",
  "eql",
  "add",
  "sub",
  "mul",
  "pow",
  "div",
  "addN",
  "subN",
  "mulN",
  "sqrN"
];
function os(e) {
  const t = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  }, n = Gp.reduce((r, a) => (r[a] = "function", r), t);
  return Kr(e, n);
}
function od(e, t, n) {
  if (n < Ee)
    throw new Error("Expected power > 0");
  if (n === Ee)
    return e.ONE;
  if (n === he)
    return t;
  let r = e.ONE, a = t;
  for (; n > Ee; )
    n & he && (r = e.mul(r, a)), a = e.sqr(a), n >>= he;
  return r;
}
function Wp(e, t) {
  const n = new Array(t.length), r = t.reduce((i, o, s) => e.is0(o) ? i : (n[s] = i, e.mul(i, o)), e.ONE), a = e.inv(r);
  return t.reduceRight((i, o, s) => e.is0(o) ? i : (n[s] = e.mul(i, n[s]), e.mul(i, o)), a), n;
}
function sd(e, t) {
  const n = t !== void 0 ? t : e.toString(2).length, r = Math.ceil(n / 8);
  return { nBitLength: n, nByteLength: r };
}
function Yp(e, t, n = !1, r = {}) {
  if (e <= Ee)
    throw new Error(`Expected Field ORDER > 0, got ${e}`);
  const { nBitLength: a, nByteLength: i } = sd(e, t);
  if (i > 2048)
    throw new Error("Field lengths over 2048 bytes are not supported");
  const o = Xp(e), s = Object.freeze({
    ORDER: e,
    BITS: a,
    BYTES: i,
    MASK: Fo(a),
    ZERO: Ee,
    ONE: he,
    create: (l) => Re(l, e),
    isValid: (l) => {
      if (typeof l != "bigint")
        throw new Error(`Invalid field element: expected bigint, got ${typeof l}`);
      return Ee <= l && l < e;
    },
    is0: (l) => l === Ee,
    isOdd: (l) => (l & he) === he,
    neg: (l) => Re(-l, e),
    eql: (l, c) => l === c,
    sqr: (l) => Re(l * l, e),
    add: (l, c) => Re(l + c, e),
    sub: (l, c) => Re(l - c, e),
    mul: (l, c) => Re(l * c, e),
    pow: (l, c) => od(s, l, c),
    div: (l, c) => Re(l * so(c, e), e),
    // Same as above, but doesn't normalize
    sqrN: (l) => l * l,
    addN: (l, c) => l + c,
    subN: (l, c) => l - c,
    mulN: (l, c) => l * c,
    inv: (l) => so(l, e),
    sqrt: r.sqrt || ((l) => o(s, l)),
    invertBatch: (l) => Wp(s, l),
    // TODO: do we really need constant cmov?
    // We don't have const-time bigints anyway, so probably will be not very useful
    cmov: (l, c, u) => u ? c : l,
    toBytes: (l) => n ? Vo(l, i) : Hn(l, i),
    fromBytes: (l) => {
      if (l.length !== i)
        throw new Error(`Fp.fromBytes: expected ${i}, got ${l.length}`);
      return n ? Uo(l) : mn(l);
    }
  });
  return Object.freeze(s);
}
function cd(e) {
  if (typeof e != "bigint")
    throw new Error("field order must be bigint");
  const t = e.toString(2).length;
  return Math.ceil(t / 8);
}
function ld(e) {
  const t = cd(e);
  return t + Math.ceil(t / 2);
}
function Qp(e, t, n = !1) {
  const r = e.length, a = cd(t), i = ld(t);
  if (r < 16 || r < i || r > 1024)
    throw new Error(`expected ${i}-1024 bytes of input, got ${r}`);
  const o = n ? mn(e) : Uo(e), s = Re(o, t - he) + he;
  return n ? Vo(s, a) : Hn(s, a);
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function ud(e) {
  const { Fp: t, mds: n, reversePartialPowIdx: r, roundConstants: a } = e, { roundsFull: i, roundsPartial: o, sboxPower: s, t: l } = e;
  os(t);
  for (const m of ["t", "roundsFull", "roundsPartial"])
    if (typeof e[m] != "number" || !Number.isSafeInteger(e[m]))
      throw new Error(`Poseidon: invalid param ${m}=${e[m]} (${typeof e[m]})`);
  if (!Array.isArray(n) || n.length !== l)
    throw new Error("Poseidon: wrong MDS matrix");
  const c = n.map((m) => {
    if (!Array.isArray(m) || m.length !== l)
      throw new Error(`Poseidon MDS matrix row: ${m}`);
    return m.map((g) => {
      if (typeof g != "bigint")
        throw new Error(`Poseidon MDS matrix value=${g}`);
      return t.create(g);
    });
  });
  if (r !== void 0 && typeof r != "boolean")
    throw new Error(`Poseidon: invalid param reversePartialPowIdx=${r}`);
  if (i % 2 !== 0)
    throw new Error(`Poseidon roundsFull is not even: ${i}`);
  const u = i + o;
  if (!Array.isArray(a) || a.length !== u)
    throw new Error("Poseidon: wrong round constants");
  const d = a.map((m) => {
    if (!Array.isArray(m) || m.length !== l)
      throw new Error(`Poseidon wrong round constants: ${m}`);
    return m.map((g) => {
      if (typeof g != "bigint" || !t.isValid(g))
        throw new Error(`Poseidon wrong round constant=${g}`);
      return t.create(g);
    });
  });
  if (!s || ![3, 5, 7].includes(s))
    throw new Error(`Poseidon wrong sboxPower=${s}`);
  const h = BigInt(s);
  let f = (m) => od(t, m, h);
  return s === 3 ? f = (m) => t.mul(t.sqrN(m), m) : s === 5 && (f = (m) => t.mul(t.sqrN(t.sqrN(m)), m)), Object.freeze({ ...e, rounds: u, sboxFn: f, roundConstants: d, mds: c });
}
function e0(e, t) {
  if (typeof t != "number")
    throw new Error("poseidonSplitConstants: wrong t");
  if (!Array.isArray(e) || e.length % t)
    throw new Error("poseidonSplitConstants: wrong rc");
  const n = [];
  let r = [];
  for (let a = 0; a < e.length; a++)
    r.push(e[a]), r.length === t && (n.push(r), r = []);
  return n;
}
function t0(e) {
  const t = ud(e), { Fp: n, mds: r, roundConstants: a, rounds: i, roundsPartial: o, sboxFn: s, t: l } = t, c = t.roundsFull / 2, u = t.reversePartialPowIdx ? l - 1 : 0, d = (f, m, g) => (f = f.map((p, b) => n.add(p, a[g][b])), m ? f = f.map((p) => s(p)) : f[u] = s(f[u]), f = r.map((p) => p.reduce((b, _, k) => n.add(b, n.mulN(_, f[k])), n.ZERO)), f), h = function(m) {
    if (!Array.isArray(m) || m.length !== l)
      throw new Error(`Poseidon: wrong values (expected array of bigints with length ${l})`);
    m = m.map((p) => {
      if (typeof p != "bigint")
        throw new Error(`Poseidon: wrong value=${p} (${typeof p})`);
      return n.create(p);
    });
    let g = 0;
    for (let p = 0; p < c; p++)
      m = d(m, !0, g++);
    for (let p = 0; p < o; p++)
      m = d(m, !1, g++);
    for (let p = 0; p < c; p++)
      m = d(m, !0, g++);
    if (g !== i)
      throw new Error(`Poseidon: wrong number of rounds: last round=${g}, total=${i}`);
    return m;
  };
  return h.roundConstants = a, h;
}
const n0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  poseidon: t0,
  splitConstants: e0,
  validateOpts: ud
}, Symbol.toStringTag, { value: "Module" }));
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const r0 = BigInt(0), Bi = BigInt(1);
function a0(e, t) {
  const n = (a, i) => {
    const o = i.negate();
    return a ? o : i;
  }, r = (a) => {
    const i = Math.ceil(t / a) + 1, o = 2 ** (a - 1);
    return { windows: i, windowSize: o };
  };
  return {
    constTimeNegate: n,
    // non-const time multiplication ladder
    unsafeLadder(a, i) {
      let o = e.ZERO, s = a;
      for (; i > r0; )
        i & Bi && (o = o.add(s)), s = s.double(), i >>= Bi;
      return o;
    },
    /**
     * Creates a wNAF precomputation window. Used for caching.
     * Default window size is set by `utils.precompute()` and is equal to 8.
     * Number of precomputed points depends on the curve size:
     * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
     * - 𝑊 is the window size
     * - 𝑛 is the bitlength of the curve order.
     * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
     * @returns precomputed point tables flattened to a single array
     */
    precomputeWindow(a, i) {
      const { windows: o, windowSize: s } = r(i), l = [];
      let c = a, u = c;
      for (let d = 0; d < o; d++) {
        u = c, l.push(u);
        for (let h = 1; h < s; h++)
          u = u.add(c), l.push(u);
        c = u.double();
      }
      return l;
    },
    /**
     * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @returns real and fake (for const-time) points
     */
    wNAF(a, i, o) {
      const { windows: s, windowSize: l } = r(a);
      let c = e.ZERO, u = e.BASE;
      const d = BigInt(2 ** a - 1), h = 2 ** a, f = BigInt(a);
      for (let m = 0; m < s; m++) {
        const g = m * l;
        let p = Number(o & d);
        o >>= f, p > l && (p -= h, o += Bi);
        const b = g, _ = g + Math.abs(p) - 1, k = m % 2 !== 0, y = p < 0;
        p === 0 ? u = u.add(n(k, i[b])) : c = c.add(n(y, i[_]));
      }
      return { p: c, f: u };
    },
    wNAFCached(a, i, o, s) {
      const l = a._WINDOW_SIZE || 1;
      let c = i.get(a);
      return c || (c = this.precomputeWindow(a, l), l !== 1 && i.set(a, s(c))), this.wNAF(l, c, o);
    }
  };
}
function dd(e) {
  return os(e.Fp), Kr(e, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  }), Object.freeze({
    ...sd(e.n, e.nBitLength),
    ...e,
    p: e.Fp.ORDER
  });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function i0(e) {
  const t = dd(e);
  Kr(t, {
    a: "field",
    b: "field"
  }, {
    allowedPrivateKeyLengths: "array",
    wrapPrivateKey: "boolean",
    isTorsionFree: "function",
    clearCofactor: "function",
    allowInfinityPoint: "boolean",
    fromBytes: "function",
    toBytes: "function"
  });
  const { endo: n, Fp: r, a } = t;
  if (n) {
    if (!r.eql(a, r.ZERO))
      throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
    if (typeof n != "object" || typeof n.beta != "bigint" || typeof n.splitScalar != "function")
      throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
  }
  return Object.freeze({ ...t });
}
const { bytesToNumberBE: o0, hexToBytes: s0 } = rm, Vt = {
  // asn.1 DER encoding utils
  Err: class extends Error {
    constructor(t = "") {
      super(t);
    }
  },
  _parseInt(e) {
    const { Err: t } = Vt;
    if (e.length < 2 || e[0] !== 2)
      throw new t("Invalid signature integer tag");
    const n = e[1], r = e.subarray(2, n + 2);
    if (!n || r.length !== n)
      throw new t("Invalid signature integer: wrong length");
    if (r[0] & 128)
      throw new t("Invalid signature integer: negative");
    if (r[0] === 0 && !(r[1] & 128))
      throw new t("Invalid signature integer: unnecessary leading zero");
    return { d: o0(r), l: e.subarray(n + 2) };
  },
  toSig(e) {
    const { Err: t } = Vt, n = typeof e == "string" ? s0(e) : e;
    Zr(n);
    let r = n.length;
    if (r < 2 || n[0] != 48)
      throw new t("Invalid signature tag");
    if (n[1] !== r - 2)
      throw new t("Invalid signature: incorrect length");
    const { d: a, l: i } = Vt._parseInt(n.subarray(2)), { d: o, l: s } = Vt._parseInt(i);
    if (s.length)
      throw new t("Invalid signature: left bytes after parsing");
    return { r: a, s: o };
  },
  hexFromSig(e) {
    const t = (c) => Number.parseInt(c[0], 16) & 8 ? "00" + c : c, n = (c) => {
      const u = c.toString(16);
      return u.length & 1 ? `0${u}` : u;
    }, r = t(n(e.s)), a = t(n(e.r)), i = r.length / 2, o = a.length / 2, s = n(i), l = n(o);
    return `30${n(o + i + 4)}02${l}${a}02${s}${r}`;
  }
}, tt = BigInt(0), ue = BigInt(1), zt = BigInt(2), Va = BigInt(3), Tc = BigInt(4);
function fd(e) {
  const t = i0(e), { Fp: n } = t, r = t.toBytes || ((m, g, p) => {
    const b = g.toAffine();
    return Sr(Uint8Array.from([4]), n.toBytes(b.x), n.toBytes(b.y));
  }), a = t.fromBytes || ((m) => {
    const g = m.subarray(1), p = n.fromBytes(g.subarray(0, n.BYTES)), b = n.fromBytes(g.subarray(n.BYTES, 2 * n.BYTES));
    return { x: p, y: b };
  });
  function i(m) {
    const { a: g, b: p } = t, b = n.sqr(m), _ = n.mul(b, m);
    return n.add(n.add(_, n.mul(m, g)), p);
  }
  if (!n.eql(n.sqr(t.Gy), i(t.Gx)))
    throw new Error("bad generator point: equation left != right");
  function o(m) {
    return typeof m == "bigint" && tt < m && m < t.n;
  }
  function s(m) {
    if (!o(m))
      throw new Error("Expected valid bigint: 0 < bigint < curve.n");
  }
  function l(m) {
    const { allowedPrivateKeyLengths: g, nByteLength: p, wrapPrivateKey: b, n: _ } = t;
    if (g && typeof m != "bigint") {
      if (bn(m) && (m = wn(m)), typeof m != "string" || !g.includes(m.length))
        throw new Error("Invalid key");
      m = m.padStart(p * 2, "0");
    }
    let k;
    try {
      k = typeof m == "bigint" ? m : mn(Qe("private key", m, p));
    } catch {
      throw new Error(`private key must be ${p} bytes, hex or bigint, not ${typeof m}`);
    }
    return b && (k = Re(k, _)), s(k), k;
  }
  const c = /* @__PURE__ */ new Map();
  function u(m) {
    if (!(m instanceof d))
      throw new Error("ProjectivePoint expected");
  }
  class d {
    constructor(g, p, b) {
      if (this.px = g, this.py = p, this.pz = b, g == null || !n.isValid(g))
        throw new Error("x required");
      if (p == null || !n.isValid(p))
        throw new Error("y required");
      if (b == null || !n.isValid(b))
        throw new Error("z required");
    }
    // Does not validate if the point is on-curve.
    // Use fromHex instead, or call assertValidity() later.
    static fromAffine(g) {
      const { x: p, y: b } = g || {};
      if (!g || !n.isValid(p) || !n.isValid(b))
        throw new Error("invalid affine point");
      if (g instanceof d)
        throw new Error("projective point not allowed");
      const _ = (k) => n.eql(k, n.ZERO);
      return _(p) && _(b) ? d.ZERO : new d(p, b, n.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    /**
     * Takes a bunch of Projective Points but executes only one
     * inversion on all of them. Inversion is very slow operation,
     * so this improves performance massively.
     * Optimization: converts a list of projective points to a list of identical points with Z=1.
     */
    static normalizeZ(g) {
      const p = n.invertBatch(g.map((b) => b.pz));
      return g.map((b, _) => b.toAffine(p[_])).map(d.fromAffine);
    }
    /**
     * Converts hash string or Uint8Array to Point.
     * @param hex short/long ECDSA hex
     */
    static fromHex(g) {
      const p = d.fromAffine(a(Qe("pointHex", g)));
      return p.assertValidity(), p;
    }
    // Multiplies generator point by privateKey.
    static fromPrivateKey(g) {
      return d.BASE.multiply(l(g));
    }
    // "Private method", don't use it directly
    _setWindowSize(g) {
      this._WINDOW_SIZE = g, c.delete(this);
    }
    // A point on curve is valid if it conforms to equation.
    assertValidity() {
      if (this.is0()) {
        if (t.allowInfinityPoint && !n.is0(this.py))
          return;
        throw new Error("bad point: ZERO");
      }
      const { x: g, y: p } = this.toAffine();
      if (!n.isValid(g) || !n.isValid(p))
        throw new Error("bad point: x or y not FE");
      const b = n.sqr(p), _ = i(g);
      if (!n.eql(b, _))
        throw new Error("bad point: equation left != right");
      if (!this.isTorsionFree())
        throw new Error("bad point: not in prime-order subgroup");
    }
    hasEvenY() {
      const { y: g } = this.toAffine();
      if (n.isOdd)
        return !n.isOdd(g);
      throw new Error("Field doesn't support isOdd");
    }
    /**
     * Compare one point to another.
     */
    equals(g) {
      u(g);
      const { px: p, py: b, pz: _ } = this, { px: k, py: y, pz: S } = g, x = n.eql(n.mul(p, S), n.mul(k, _)), v = n.eql(n.mul(b, S), n.mul(y, _));
      return x && v;
    }
    /**
     * Flips point to one corresponding to (x, -y) in Affine coordinates.
     */
    negate() {
      return new d(this.px, n.neg(this.py), this.pz);
    }
    // Renes-Costello-Batina exception-free doubling formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 3
    // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
    double() {
      const { a: g, b: p } = t, b = n.mul(p, Va), { px: _, py: k, pz: y } = this;
      let S = n.ZERO, x = n.ZERO, v = n.ZERO, B = n.mul(_, _), N = n.mul(k, k), I = n.mul(y, y), w = n.mul(_, k);
      return w = n.add(w, w), v = n.mul(_, y), v = n.add(v, v), S = n.mul(g, v), x = n.mul(b, I), x = n.add(S, x), S = n.sub(N, x), x = n.add(N, x), x = n.mul(S, x), S = n.mul(w, S), v = n.mul(b, v), I = n.mul(g, I), w = n.sub(B, I), w = n.mul(g, w), w = n.add(w, v), v = n.add(B, B), B = n.add(v, B), B = n.add(B, I), B = n.mul(B, w), x = n.add(x, B), I = n.mul(k, y), I = n.add(I, I), B = n.mul(I, w), S = n.sub(S, B), v = n.mul(I, N), v = n.add(v, v), v = n.add(v, v), new d(S, x, v);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add(g) {
      u(g);
      const { px: p, py: b, pz: _ } = this, { px: k, py: y, pz: S } = g;
      let x = n.ZERO, v = n.ZERO, B = n.ZERO;
      const N = t.a, I = n.mul(t.b, Va);
      let w = n.mul(p, k), T = n.mul(b, y), C = n.mul(_, S), O = n.add(p, b), A = n.add(k, y);
      O = n.mul(O, A), A = n.add(w, T), O = n.sub(O, A), A = n.add(p, _);
      let E = n.add(k, S);
      return A = n.mul(A, E), E = n.add(w, C), A = n.sub(A, E), E = n.add(b, _), x = n.add(y, S), E = n.mul(E, x), x = n.add(T, C), E = n.sub(E, x), B = n.mul(N, A), x = n.mul(I, C), B = n.add(x, B), x = n.sub(T, B), B = n.add(T, B), v = n.mul(x, B), T = n.add(w, w), T = n.add(T, w), C = n.mul(N, C), A = n.mul(I, A), T = n.add(T, C), C = n.sub(w, C), C = n.mul(N, C), A = n.add(A, C), w = n.mul(T, A), v = n.add(v, w), w = n.mul(E, A), x = n.mul(O, x), x = n.sub(x, w), w = n.mul(O, T), B = n.mul(E, B), B = n.add(B, w), new d(x, v, B);
    }
    subtract(g) {
      return this.add(g.negate());
    }
    is0() {
      return this.equals(d.ZERO);
    }
    wNAF(g) {
      return f.wNAFCached(this, c, g, (p) => {
        const b = n.invertBatch(p.map((_) => _.pz));
        return p.map((_, k) => _.toAffine(b[k])).map(d.fromAffine);
      });
    }
    /**
     * Non-constant-time multiplication. Uses double-and-add algorithm.
     * It's faster, but should only be used when you don't care about
     * an exposed private key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe(g) {
      const p = d.ZERO;
      if (g === tt)
        return p;
      if (s(g), g === ue)
        return this;
      const { endo: b } = t;
      if (!b)
        return f.unsafeLadder(this, g);
      let { k1neg: _, k1: k, k2neg: y, k2: S } = b.splitScalar(g), x = p, v = p, B = this;
      for (; k > tt || S > tt; )
        k & ue && (x = x.add(B)), S & ue && (v = v.add(B)), B = B.double(), k >>= ue, S >>= ue;
      return _ && (x = x.negate()), y && (v = v.negate()), v = new d(n.mul(v.px, b.beta), v.py, v.pz), x.add(v);
    }
    /**
     * Constant time multiplication.
     * Uses wNAF method. Windowed method may be 10% faster,
     * but takes 2x longer to generate and consumes 2x memory.
     * Uses precomputes when available.
     * Uses endomorphism for Koblitz curves.
     * @param scalar by which the point would be multiplied
     * @returns New point
     */
    multiply(g) {
      s(g);
      let p = g, b, _;
      const { endo: k } = t;
      if (k) {
        const { k1neg: y, k1: S, k2neg: x, k2: v } = k.splitScalar(p);
        let { p: B, f: N } = this.wNAF(S), { p: I, f: w } = this.wNAF(v);
        B = f.constTimeNegate(y, B), I = f.constTimeNegate(x, I), I = new d(n.mul(I.px, k.beta), I.py, I.pz), b = B.add(I), _ = N.add(w);
      } else {
        const { p: y, f: S } = this.wNAF(p);
        b = y, _ = S;
      }
      return d.normalizeZ([b, _])[0];
    }
    /**
     * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
     * Not using Strauss-Shamir trick: precomputation tables are faster.
     * The trick could be useful if both P and Q are not G (not in our case).
     * @returns non-zero affine point
     */
    multiplyAndAddUnsafe(g, p, b) {
      const _ = d.BASE, k = (S, x) => x === tt || x === ue || !S.equals(_) ? S.multiplyUnsafe(x) : S.multiply(x), y = k(this, p).add(k(g, b));
      return y.is0() ? void 0 : y;
    }
    // Converts Projective point to affine (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    // (x, y, z) ∋ (x=x/z, y=y/z)
    toAffine(g) {
      const { px: p, py: b, pz: _ } = this, k = this.is0();
      g == null && (g = k ? n.ONE : n.inv(_));
      const y = n.mul(p, g), S = n.mul(b, g), x = n.mul(_, g);
      if (k)
        return { x: n.ZERO, y: n.ZERO };
      if (!n.eql(x, n.ONE))
        throw new Error("invZ was invalid");
      return { x: y, y: S };
    }
    isTorsionFree() {
      const { h: g, isTorsionFree: p } = t;
      if (g === ue)
        return !0;
      if (p)
        return p(d, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h: g, clearCofactor: p } = t;
      return g === ue ? this : p ? p(d, this) : this.multiplyUnsafe(t.h);
    }
    toRawBytes(g = !0) {
      return this.assertValidity(), r(d, this, g);
    }
    toHex(g = !0) {
      return wn(this.toRawBytes(g));
    }
  }
  d.BASE = new d(t.Gx, t.Gy, n.ONE), d.ZERO = new d(n.ZERO, n.ONE, n.ZERO);
  const h = t.nBitLength, f = a0(d, t.endo ? Math.ceil(h / 2) : h);
  return {
    CURVE: t,
    ProjectivePoint: d,
    normPrivateKeyToScalar: l,
    weierstrassEquation: i,
    isWithinCurveOrder: o
  };
}
function c0(e) {
  const t = dd(e);
  return Kr(t, {
    hash: "hash",
    hmac: "function",
    randomBytes: "function"
  }, {
    bits2int: "function",
    bits2int_modN: "function",
    lowS: "boolean"
  }), Object.freeze({ lowS: !0, ...t });
}
function hd(e) {
  const t = c0(e), { Fp: n, n: r } = t, a = n.BYTES + 1, i = 2 * n.BYTES + 1;
  function o(A) {
    return tt < A && A < n.ORDER;
  }
  function s(A) {
    return Re(A, r);
  }
  function l(A) {
    return so(A, r);
  }
  const { ProjectivePoint: c, normPrivateKeyToScalar: u, weierstrassEquation: d, isWithinCurveOrder: h } = fd({
    ...t,
    toBytes(A, E, j) {
      const P = E.toAffine(), z = n.toBytes(P.x), L = Sr;
      return j ? L(Uint8Array.from([E.hasEvenY() ? 2 : 3]), z) : L(Uint8Array.from([4]), z, n.toBytes(P.y));
    },
    fromBytes(A) {
      const E = A.length, j = A[0], P = A.subarray(1);
      if (E === a && (j === 2 || j === 3)) {
        const z = mn(P);
        if (!o(z))
          throw new Error("Point is not on curve");
        const L = d(z);
        let U;
        try {
          U = n.sqrt(L);
        } catch (J) {
          const ce = J instanceof Error ? ": " + J.message : "";
          throw new Error("Point is not on curve" + ce);
        }
        const F = (U & ue) === ue;
        return (j & 1) === 1 !== F && (U = n.neg(U)), { x: z, y: U };
      } else if (E === i && j === 4) {
        const z = n.fromBytes(P.subarray(0, n.BYTES)), L = n.fromBytes(P.subarray(n.BYTES, 2 * n.BYTES));
        return { x: z, y: L };
      } else
        throw new Error(`Point of length ${E} was invalid. Expected ${a} compressed bytes or ${i} uncompressed bytes`);
    }
  }), f = (A) => wn(Hn(A, t.nByteLength));
  function m(A) {
    const E = r >> ue;
    return A > E;
  }
  function g(A) {
    return m(A) ? s(-A) : A;
  }
  const p = (A, E, j) => mn(A.slice(E, j));
  class b {
    constructor(E, j, P) {
      this.r = E, this.s = j, this.recovery = P, this.assertValidity();
    }
    // pair (bytes of r, bytes of s)
    static fromCompact(E) {
      const j = t.nByteLength;
      return E = Qe("compactSignature", E, j * 2), new b(p(E, 0, j), p(E, j, 2 * j));
    }
    // DER encoded ECDSA signature
    // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
    static fromDER(E) {
      const { r: j, s: P } = Vt.toSig(Qe("DER", E));
      return new b(j, P);
    }
    assertValidity() {
      if (!h(this.r))
        throw new Error("r must be 0 < r < CURVE.n");
      if (!h(this.s))
        throw new Error("s must be 0 < s < CURVE.n");
    }
    addRecoveryBit(E) {
      return new b(this.r, this.s, E);
    }
    recoverPublicKey(E) {
      const { r: j, s: P, recovery: z } = this, L = v(Qe("msgHash", E));
      if (z == null || ![0, 1, 2, 3].includes(z))
        throw new Error("recovery id invalid");
      const U = z === 2 || z === 3 ? j + t.n : j;
      if (U >= n.ORDER)
        throw new Error("recovery id 2 or 3 invalid");
      const F = z & 1 ? "03" : "02", ie = c.fromHex(F + f(U)), J = l(U), ce = s(-L * J), V = s(P * J), M = c.BASE.multiplyAndAddUnsafe(ie, ce, V);
      if (!M)
        throw new Error("point at infinify");
      return M.assertValidity(), M;
    }
    // Signatures should be low-s, to prevent malleability.
    hasHighS() {
      return m(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new b(this.r, s(-this.s), this.recovery) : this;
    }
    // DER-encoded
    toDERRawBytes() {
      return An(this.toDERHex());
    }
    toDERHex() {
      return Vt.hexFromSig({ r: this.r, s: this.s });
    }
    // padded bytes of r, then padded bytes of s
    toCompactRawBytes() {
      return An(this.toCompactHex());
    }
    toCompactHex() {
      return f(this.r) + f(this.s);
    }
  }
  const _ = {
    isValidPrivateKey(A) {
      try {
        return u(A), !0;
      } catch {
        return !1;
      }
    },
    normPrivateKeyToScalar: u,
    /**
     * Produces cryptographically secure private key from random of size
     * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
     */
    randomPrivateKey: () => {
      const A = ld(t.n);
      return Qp(t.randomBytes(A), t.n);
    },
    /**
     * Creates precompute table for an arbitrary EC point. Makes point "cached".
     * Allows to massively speed-up `point.multiply(scalar)`.
     * @returns cached point
     * @example
     * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
     * fast.multiply(privKey); // much faster ECDH now
     */
    precompute(A = 8, E = c.BASE) {
      return E._setWindowSize(A), E.multiply(BigInt(3)), E;
    }
  };
  function k(A, E = !0) {
    return c.fromPrivateKey(A).toRawBytes(E);
  }
  function y(A) {
    const E = bn(A), j = typeof A == "string", P = (E || j) && A.length;
    return E ? P === a || P === i : j ? P === 2 * a || P === 2 * i : A instanceof c;
  }
  function S(A, E, j = !0) {
    if (y(A))
      throw new Error("first arg must be private key");
    if (!y(E))
      throw new Error("second arg must be public key");
    return c.fromHex(E).multiply(u(A)).toRawBytes(j);
  }
  const x = t.bits2int || function(A) {
    const E = mn(A), j = A.length * 8 - t.nBitLength;
    return j > 0 ? E >> BigInt(j) : E;
  }, v = t.bits2int_modN || function(A) {
    return s(x(A));
  }, B = Fo(t.nBitLength);
  function N(A) {
    if (typeof A != "bigint")
      throw new Error("bigint expected");
    if (!(tt <= A && A < B))
      throw new Error(`bigint expected < 2^${t.nBitLength}`);
    return Hn(A, t.nByteLength);
  }
  function I(A, E, j = w) {
    if (["recovered", "canonical"].some((Q) => Q in j))
      throw new Error("sign() legacy options not supported");
    const { hash: P, randomBytes: z } = t;
    let { lowS: L, prehash: U, extraEntropy: F } = j;
    L == null && (L = !0), A = Qe("msgHash", A), U && (A = Qe("prehashed msgHash", P(A)));
    const ie = v(A), J = u(E), ce = [N(J), N(ie)];
    if (F != null && F !== !1) {
      const Q = F === !0 ? z(n.BYTES) : F;
      ce.push(Qe("extraEntropy", Q));
    }
    const V = Sr(...ce), M = ie;
    function q(Q) {
      const le = x(Q);
      if (!h(le))
        return;
      const Dt = l(le), Ce = c.BASE.multiply(le).toAffine(), ae = s(Ce.x);
      if (ae === tt)
        return;
      const ke = s(Dt * s(M + ae * J));
      if (ke === tt)
        return;
      let jt = (Ce.x === ae ? 0 : 2) | Number(Ce.y & ue), it = ke;
      return L && m(ke) && (it = g(ke), jt ^= 1), new b(ae, it, jt);
    }
    return { seed: V, k2sig: q };
  }
  const w = { lowS: t.lowS, prehash: !1 }, T = { lowS: t.lowS, prehash: !1 };
  function C(A, E, j = w) {
    const { seed: P, k2sig: z } = I(A, E, j), L = t;
    return Eu(L.hash.outputLen, L.nByteLength, L.hmac)(P, z);
  }
  c.BASE._setWindowSize(8);
  function O(A, E, j, P = T) {
    var Ce;
    const z = A;
    if (E = Qe("msgHash", E), j = Qe("publicKey", j), "strict" in P)
      throw new Error("options.strict was renamed to lowS");
    const { lowS: L, prehash: U } = P;
    let F, ie;
    try {
      if (typeof z == "string" || bn(z))
        try {
          F = b.fromDER(z);
        } catch (ae) {
          if (!(ae instanceof Vt.Err))
            throw ae;
          F = b.fromCompact(z);
        }
      else if (typeof z == "object" && typeof z.r == "bigint" && typeof z.s == "bigint") {
        const { r: ae, s: ke } = z;
        F = new b(ae, ke);
      } else
        throw new Error("PARSE");
      ie = c.fromHex(j);
    } catch (ae) {
      if (ae.message === "PARSE")
        throw new Error("signature must be Signature instance, Uint8Array or hex string");
      return !1;
    }
    if (L && F.hasHighS())
      return !1;
    U && (E = t.hash(E));
    const { r: J, s: ce } = F, V = v(E), M = l(ce), q = s(V * M), Q = s(J * M), le = (Ce = c.BASE.multiplyAndAddUnsafe(ie, q, Q)) == null ? void 0 : Ce.toAffine();
    return le ? s(le.x) === J : !1;
  }
  return {
    CURVE: t,
    getPublicKey: k,
    getSharedSecret: S,
    sign: C,
    verify: O,
    ProjectivePoint: c,
    Signature: b,
    utils: _
  };
}
function gd(e, t) {
  const n = e.ORDER;
  let r = tt;
  for (let m = n - ue; m % zt === tt; m /= zt)
    r += ue;
  const a = r, i = zt << a - ue - ue, o = i * zt, s = (n - ue) / o, l = (s - ue) / zt, c = o - ue, u = i, d = e.pow(t, s), h = e.pow(t, (s + ue) / zt);
  let f = (m, g) => {
    let p = d, b = e.pow(g, c), _ = e.sqr(b);
    _ = e.mul(_, g);
    let k = e.mul(m, _);
    k = e.pow(k, l), k = e.mul(k, b), b = e.mul(k, g), _ = e.mul(k, m);
    let y = e.mul(_, b);
    k = e.pow(y, u);
    let S = e.eql(k, e.ONE);
    b = e.mul(_, h), k = e.mul(y, p), _ = e.cmov(b, _, S), y = e.cmov(k, y, S);
    for (let x = a; x > ue; x--) {
      let v = x - zt;
      v = zt << v - ue;
      let B = e.pow(y, v);
      const N = e.eql(B, e.ONE);
      b = e.mul(_, p), p = e.mul(p, p), B = e.mul(y, p), _ = e.cmov(b, _, N), y = e.cmov(B, y, N);
    }
    return { isValid: S, value: _ };
  };
  if (e.ORDER % Tc === Va) {
    const m = (e.ORDER - Va) / Tc, g = e.sqrt(e.neg(t));
    f = (p, b) => {
      let _ = e.sqr(b);
      const k = e.mul(p, b);
      _ = e.mul(_, k);
      let y = e.pow(_, m);
      y = e.mul(y, k);
      const S = e.mul(y, g), x = e.mul(e.sqr(y), b), v = e.eql(x, p);
      let B = e.cmov(S, y, v);
      return { isValid: v, value: B };
    };
  }
  return f;
}
function l0(e, t) {
  if (os(e), !e.isValid(t.A) || !e.isValid(t.B) || !e.isValid(t.Z))
    throw new Error("mapToCurveSimpleSWU: invalid opts");
  const n = gd(e, t.Z);
  if (!e.isOdd)
    throw new Error("Fp.isOdd is not implemented!");
  return (r) => {
    let a, i, o, s, l, c, u, d;
    a = e.sqr(r), a = e.mul(a, t.Z), i = e.sqr(a), i = e.add(i, a), o = e.add(i, e.ONE), o = e.mul(o, t.B), s = e.cmov(t.Z, e.neg(i), !e.eql(i, e.ZERO)), s = e.mul(s, t.A), i = e.sqr(o), c = e.sqr(s), l = e.mul(c, t.A), i = e.add(i, l), i = e.mul(i, o), c = e.mul(c, s), l = e.mul(c, t.B), i = e.add(i, l), u = e.mul(a, o);
    const { isValid: h, value: f } = n(i, c);
    d = e.mul(a, r), d = e.mul(d, f), u = e.cmov(u, o, h), d = e.cmov(d, f, h);
    const m = e.isOdd(r) === e.isOdd(d);
    return d = e.cmov(e.neg(d), d, m), u = e.div(u, s), { x: u, y: d };
  };
}
const u0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DER: Vt,
  SWUFpSqrtRatio: gd,
  mapToCurveSimpleSWU: l0,
  weierstrass: hd,
  weierstrassPoints: fd
}, Symbol.toStringTag, { value: "Module" }));
function ri(e) {
  return d0.test(e);
}
const d0 = /^-?[0-9]+$/;
function md(e) {
  return f0.test(e);
}
const f0 = /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;
function h0(e, t) {
  const n = Number.parseFloat(e), r = String(n), a = Bc(e), i = Bc(r);
  return a === i;
}
let gr = /* @__PURE__ */ function(e) {
  return e.underflow = "underflow", e.overflow = "overflow", e.truncate_integer = "truncate_integer", e.truncate_float = "truncate_float", e;
}({});
function g0(e) {
  if (h0(e))
    return;
  if (ri(e))
    return gr.truncate_integer;
  const t = Number.parseFloat(e);
  return Number.isFinite(t) ? t === 0 ? gr.underflow : gr.truncate_float : gr.overflow;
}
function Bc(e) {
  return e.replace(m0, "").replace(y0, "").replace(b0, "").replace(p0, "");
}
const m0 = /[eE][+-]?\d+$/, p0 = /^-?(0*)?/, y0 = /\./, b0 = /0+$/;
class w0 {
  constructor(t) {
    // numeric value as string
    // type information
    $(this, "isLosslessNumber", !0);
    if (!md(t))
      throw new Error(`Invalid number (value: "${t}")`);
    this.value = t;
  }
  /**
   * Get the value of the LosslessNumber as number or bigint.
   *
   * - a number is returned for safe numbers and decimal values that only lose some insignificant digits
   * - a bigint is returned for big integer numbers
   * - an Error is thrown for values that will overflow or underflow
   *
   * Note that you can implement your own strategy for conversion by just getting the value as string
   * via .toString(), and using util functions like isInteger, isSafeNumber, getUnsafeNumberReason,
   * and toSafeNumberOrThrow to convert it to a numeric value.
   */
  valueOf() {
    const t = g0(this.value);
    if (t === void 0 || t === gr.truncate_float)
      return Number.parseFloat(this.value);
    if (ri(this.value))
      return BigInt(this.value);
    throw new Error(`Cannot safely convert to number: the value '${this.value}' would ${t} and become ${Number.parseFloat(this.value)}`);
  }
  /**
   * Get the value of the LosslessNumber as string.
   */
  toString() {
    return this.value;
  }
  // Note: we do NOT implement a .toJSON() method, and you should not implement
  // or use that, it cannot safely turn the numeric value in the string into
  // stringified JSON since it has to be parsed into a number first.
}
function A0(e) {
  return e && typeof e == "object" && e.isLosslessNumber === !0 || !1;
}
function k0(e) {
  return new w0(e);
}
function v0(e) {
  return ri(e) ? BigInt(e) : Number.parseFloat(e);
}
function _0(e, t) {
  return ss({
    "": e
  }, "", e, t);
}
function ss(e, t, n, r) {
  return Array.isArray(n) ? r.call(e, t, E0(n, r)) : n && typeof n == "object" && !A0(n) ? r.call(e, t, x0(n, r)) : r.call(e, t, n);
}
function x0(e, t) {
  for (const n of Object.keys(e)) {
    const r = ss(e, n, e[n], t);
    r !== void 0 ? e[n] = r : delete e[n];
  }
  return e;
}
function E0(e, t) {
  for (let n = 0; n < e.length; n++)
    e[n] = ss(e, String(n), e[n], t);
  return e;
}
function pd(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : k0, r = 0;
  const a = s();
  return m(a), p(), t ? _0(a, t) : a;
  function i() {
    if (e.charCodeAt(r) === O0) {
      r++, c();
      const O = {};
      let A = !0;
      for (; r < e.length && e.charCodeAt(r) !== Dc; ) {
        A ? A = !1 : (h(), c());
        const E = r, j = u();
        if (j === void 0) {
          k();
          return;
        }
        c(), f();
        const P = s();
        if (P === void 0) {
          N();
          return;
        }
        Object.prototype.hasOwnProperty.call(O, j) && !co(P, O[j]) && y(j, E + 1), O[j] = P;
      }
      return e.charCodeAt(r) !== Dc && S(), r++, O;
    }
  }
  function o() {
    if (e.charCodeAt(r) === D0) {
      r++, c();
      const O = [];
      let A = !0;
      for (; r < e.length && e.charCodeAt(r) !== jc; ) {
        A ? A = !1 : h();
        const E = s();
        g(E), O.push(E);
      }
      return e.charCodeAt(r) !== jc && x(), r++, O;
    }
  }
  function s() {
    c();
    const O = u() ?? d() ?? i() ?? o() ?? l("true", !0) ?? l("false", !1) ?? l("null", null);
    return c(), O;
  }
  function l(O, A) {
    if (e.slice(r, r + O.length) === O)
      return r += O.length, A;
  }
  function c() {
    for (; S0(e.charCodeAt(r)); )
      r++;
  }
  function u() {
    if (e.charCodeAt(r) === Oi) {
      r++;
      let O = "";
      for (; r < e.length && e.charCodeAt(r) !== Oi; ) {
        if (e.charCodeAt(r) === B0) {
          const A = e[r + 1], E = T0[A];
          E !== void 0 ? (O += E, r++) : A === "u" ? la(e.charCodeAt(r + 2)) && la(e.charCodeAt(r + 3)) && la(e.charCodeAt(r + 4)) && la(e.charCodeAt(r + 5)) ? (O += String.fromCharCode(Number.parseInt(e.slice(r + 2, r + 6), 16)), r += 5) : I(r) : B(r);
        } else
          I0(e.charCodeAt(r)) ? O += e[r] : v(e[r]);
        r++;
      }
      return _(), r++, O;
    }
  }
  function d() {
    const O = r;
    if (e.charCodeAt(r) === Pc && (r++, b(O)), e.charCodeAt(r) === cs)
      r++;
    else if (C0(e.charCodeAt(r)))
      for (r++; ua(e.charCodeAt(r)); )
        r++;
    if (e.charCodeAt(r) === M0)
      for (r++, b(O); ua(e.charCodeAt(r)); )
        r++;
    if (e.charCodeAt(r) === q0 || e.charCodeAt(r) === F0)
      for (r++, (e.charCodeAt(r) === Pc || e.charCodeAt(r) === R0) && r++, b(O); ua(e.charCodeAt(r)); )
        r++;
    if (r > O)
      return n(e.slice(O, r));
  }
  function h() {
    if (e.charCodeAt(r) !== $0)
      throw new SyntaxError(`Comma ',' expected after value ${C()}`);
    r++;
  }
  function f() {
    if (e.charCodeAt(r) !== H0)
      throw new SyntaxError(`Colon ':' expected after property name ${C()}`);
    r++;
  }
  function m(O) {
    if (O === void 0)
      throw new SyntaxError(`JSON value expected ${C()}`);
  }
  function g(O) {
    if (O === void 0)
      throw new SyntaxError(`Array item expected ${C()}`);
  }
  function p() {
    if (r < e.length)
      throw new SyntaxError(`Expected end of input ${C()}`);
  }
  function b(O) {
    if (!ua(e.charCodeAt(r))) {
      const A = e.slice(O, r);
      throw new SyntaxError(`Invalid number '${A}', expecting a digit ${C()}`);
    }
  }
  function _() {
    if (e.charCodeAt(r) !== Oi)
      throw new SyntaxError(`End of string '"' expected ${C()}`);
  }
  function k() {
    throw new SyntaxError(`Quoted object key expected ${C()}`);
  }
  function y(O, A) {
    throw new SyntaxError(`Duplicate key '${O}' encountered at position ${A}`);
  }
  function S() {
    throw new SyntaxError(`Quoted object key or end of object '}' expected ${C()}`);
  }
  function x() {
    throw new SyntaxError(`Array item or end of array ']' expected ${C()}`);
  }
  function v(O) {
    throw new SyntaxError(`Invalid character '${O}' ${w()}`);
  }
  function B(O) {
    const A = e.slice(O, O + 2);
    throw new SyntaxError(`Invalid escape character '${A}' ${w()}`);
  }
  function N() {
    throw new SyntaxError(`Object value expected after ':' ${w()}`);
  }
  function I(O) {
    const A = e.slice(O, O + 6);
    throw new SyntaxError(`Invalid unicode character '${A}' ${w()}`);
  }
  function w() {
    return `at position ${r}`;
  }
  function T() {
    return r < e.length ? `but got '${e[r]}'` : "but reached end of input";
  }
  function C() {
    return `${T()} ${w()}`;
  }
}
function S0(e) {
  return e === j0 || e === P0 || e === N0 || e === z0;
}
function la(e) {
  return e >= cs && e <= ls || e >= U0 && e <= Z0 || e >= V0 && e <= K0;
}
function ua(e) {
  return e >= cs && e <= ls;
}
function C0(e) {
  return e >= L0 && e <= ls;
}
function I0(e) {
  return e >= 32 && e <= 1114111;
}
function co(e, t) {
  return e === t ? !0 : Array.isArray(e) && Array.isArray(t) ? e.length === t.length && e.every((n, r) => co(n, t[r])) : Oc(e) && Oc(t) ? [.../* @__PURE__ */ new Set([...Object.keys(e), ...Object.keys(t)])].every((r) => co(e[r], t[r])) : !1;
}
function Oc(e) {
  return typeof e == "object" && e !== null;
}
const T0 = {
  '"': '"',
  "\\": "\\",
  "/": "/",
  b: "\b",
  f: "\f",
  n: `
`,
  r: "\r",
  t: "	"
  // note that \u is handled separately in parseString()
}, B0 = 92, O0 = 123, Dc = 125, D0 = 91, jc = 93, j0 = 32, P0 = 10, N0 = 9, z0 = 13, Oi = 34, R0 = 43, Pc = 45, cs = 48, L0 = 49, ls = 57, $0 = 44, M0 = 46, H0 = 58, U0 = 65, V0 = 97, F0 = 69, q0 = 101, Z0 = 70, K0 = 102;
function yd(e, t, n, r) {
  const a = J0(n), i = typeof t == "function" ? t.call({
    "": e
  }, "", e) : e;
  return o(i, "");
  function o(u, d) {
    if (Array.isArray(r)) {
      const h = r.find((f) => f.test(u));
      if (h) {
        const f = h.stringify(u);
        if (typeof f != "string" || !md(f))
          throw new Error(`Invalid JSON number: output of a number stringifier must be a string containing a JSON number (output: ${f})`);
        return f;
      }
    }
    if (typeof u == "boolean" || typeof u == "number" || typeof u == "string" || u === null || u instanceof Date || u instanceof Boolean || u instanceof Number || u instanceof String)
      return JSON.stringify(u);
    if (u != null && u.isLosslessNumber || typeof u == "bigint")
      return u.toString();
    if (Array.isArray(u))
      return s(u, d);
    if (u && typeof u == "object")
      return l(u, d);
  }
  function s(u, d) {
    if (u.length === 0)
      return "[]";
    const h = a ? d + a : void 0;
    let f = a ? `[
` : "[";
    for (let m = 0; m < u.length; m++) {
      const g = typeof t == "function" ? t.call(u, String(m), u[m]) : u[m];
      a && (f += h), typeof g < "u" && typeof g != "function" ? f += o(g, h) : f += "null", m < u.length - 1 && (f += a ? `,
` : ",");
    }
    return f += a ? `
${d}]` : "]", f;
  }
  function l(u, d) {
    if (typeof u.toJSON == "function")
      return yd(u.toJSON(), t, n, void 0);
    const h = Array.isArray(t) ? t.map(String) : Object.keys(u);
    if (h.length === 0)
      return "{}";
    const f = a ? d + a : void 0;
    let m = !0, g = a ? `{
` : "{";
    for (const p of h) {
      const b = typeof t == "function" ? t.call(u, p, u[p]) : u[p];
      if (c(p, b)) {
        m ? m = !1 : g += a ? `,
` : ",";
        const _ = JSON.stringify(p);
        g += a ? `${f + _}: ` : `${_}:`, g += o(b, f);
      }
    }
    return g += a ? `
${d}}` : "}", g;
  }
  function c(u, d) {
    return typeof d < "u" && typeof d != "function" && typeof d != "symbol";
  }
}
function J0(e) {
  if (typeof e == "number")
    return " ".repeat(e);
  if (typeof e == "string" && e !== "")
    return e;
}
/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
const X0 = 4, Nc = 0, zc = 1, G0 = 2;
function Qn(e) {
  let t = e.length;
  for (; --t >= 0; )
    e[t] = 0;
}
const W0 = 0, bd = 1, Y0 = 2, Q0 = 3, ey = 258, us = 29, Gr = 256, Tr = Gr + 1 + us, $n = 30, ds = 19, wd = 2 * Tr + 1, un = 15, Di = 16, ty = 7, fs = 256, Ad = 16, kd = 17, vd = 18, lo = (
  /* extra bits for each length code */
  new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0])
), Ta = (
  /* extra bits for each distance code */
  new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13])
), ny = (
  /* extra bits for each bit length code */
  new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7])
), _d = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), ry = 512, Tt = new Array((Tr + 2) * 2);
Qn(Tt);
const kr = new Array($n * 2);
Qn(kr);
const Br = new Array(ry);
Qn(Br);
const Or = new Array(ey - Q0 + 1);
Qn(Or);
const hs = new Array(us);
Qn(hs);
const Fa = new Array($n);
Qn(Fa);
function ji(e, t, n, r, a) {
  this.static_tree = e, this.extra_bits = t, this.extra_base = n, this.elems = r, this.max_length = a, this.has_stree = e && e.length;
}
let xd, Ed, Sd;
function Pi(e, t) {
  this.dyn_tree = e, this.max_code = 0, this.stat_desc = t;
}
const Cd = (e) => e < 256 ? Br[e] : Br[256 + (e >>> 7)], Dr = (e, t) => {
  e.pending_buf[e.pending++] = t & 255, e.pending_buf[e.pending++] = t >>> 8 & 255;
}, Le = (e, t, n) => {
  e.bi_valid > Di - n ? (e.bi_buf |= t << e.bi_valid & 65535, Dr(e, e.bi_buf), e.bi_buf = t >> Di - e.bi_valid, e.bi_valid += n - Di) : (e.bi_buf |= t << e.bi_valid & 65535, e.bi_valid += n);
}, pt = (e, t, n) => {
  Le(
    e,
    n[t * 2],
    n[t * 2 + 1]
    /*.Len*/
  );
}, Id = (e, t) => {
  let n = 0;
  do
    n |= e & 1, e >>>= 1, n <<= 1;
  while (--t > 0);
  return n >>> 1;
}, ay = (e) => {
  e.bi_valid === 16 ? (Dr(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = e.bi_buf & 255, e.bi_buf >>= 8, e.bi_valid -= 8);
}, iy = (e, t) => {
  const n = t.dyn_tree, r = t.max_code, a = t.stat_desc.static_tree, i = t.stat_desc.has_stree, o = t.stat_desc.extra_bits, s = t.stat_desc.extra_base, l = t.stat_desc.max_length;
  let c, u, d, h, f, m, g = 0;
  for (h = 0; h <= un; h++)
    e.bl_count[h] = 0;
  for (n[e.heap[e.heap_max] * 2 + 1] = 0, c = e.heap_max + 1; c < wd; c++)
    u = e.heap[c], h = n[n[u * 2 + 1] * 2 + 1] + 1, h > l && (h = l, g++), n[u * 2 + 1] = h, !(u > r) && (e.bl_count[h]++, f = 0, u >= s && (f = o[u - s]), m = n[u * 2], e.opt_len += m * (h + f), i && (e.static_len += m * (a[u * 2 + 1] + f)));
  if (g !== 0) {
    do {
      for (h = l - 1; e.bl_count[h] === 0; )
        h--;
      e.bl_count[h]--, e.bl_count[h + 1] += 2, e.bl_count[l]--, g -= 2;
    } while (g > 0);
    for (h = l; h !== 0; h--)
      for (u = e.bl_count[h]; u !== 0; )
        d = e.heap[--c], !(d > r) && (n[d * 2 + 1] !== h && (e.opt_len += (h - n[d * 2 + 1]) * n[d * 2], n[d * 2 + 1] = h), u--);
  }
}, Td = (e, t, n) => {
  const r = new Array(un + 1);
  let a = 0, i, o;
  for (i = 1; i <= un; i++)
    a = a + n[i - 1] << 1, r[i] = a;
  for (o = 0; o <= t; o++) {
    let s = e[o * 2 + 1];
    s !== 0 && (e[o * 2] = Id(r[s]++, s));
  }
}, oy = () => {
  let e, t, n, r, a;
  const i = new Array(un + 1);
  for (n = 0, r = 0; r < us - 1; r++)
    for (hs[r] = n, e = 0; e < 1 << lo[r]; e++)
      Or[n++] = r;
  for (Or[n - 1] = r, a = 0, r = 0; r < 16; r++)
    for (Fa[r] = a, e = 0; e < 1 << Ta[r]; e++)
      Br[a++] = r;
  for (a >>= 7; r < $n; r++)
    for (Fa[r] = a << 7, e = 0; e < 1 << Ta[r] - 7; e++)
      Br[256 + a++] = r;
  for (t = 0; t <= un; t++)
    i[t] = 0;
  for (e = 0; e <= 143; )
    Tt[e * 2 + 1] = 8, e++, i[8]++;
  for (; e <= 255; )
    Tt[e * 2 + 1] = 9, e++, i[9]++;
  for (; e <= 279; )
    Tt[e * 2 + 1] = 7, e++, i[7]++;
  for (; e <= 287; )
    Tt[e * 2 + 1] = 8, e++, i[8]++;
  for (Td(Tt, Tr + 1, i), e = 0; e < $n; e++)
    kr[e * 2 + 1] = 5, kr[e * 2] = Id(e, 5);
  xd = new ji(Tt, lo, Gr + 1, Tr, un), Ed = new ji(kr, Ta, 0, $n, un), Sd = new ji(new Array(0), ny, 0, ds, ty);
}, Bd = (e) => {
  let t;
  for (t = 0; t < Tr; t++)
    e.dyn_ltree[t * 2] = 0;
  for (t = 0; t < $n; t++)
    e.dyn_dtree[t * 2] = 0;
  for (t = 0; t < ds; t++)
    e.bl_tree[t * 2] = 0;
  e.dyn_ltree[fs * 2] = 1, e.opt_len = e.static_len = 0, e.sym_next = e.matches = 0;
}, Od = (e) => {
  e.bi_valid > 8 ? Dr(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0;
}, Rc = (e, t, n, r) => {
  const a = t * 2, i = n * 2;
  return e[a] < e[i] || e[a] === e[i] && r[t] <= r[n];
}, Ni = (e, t, n) => {
  const r = e.heap[n];
  let a = n << 1;
  for (; a <= e.heap_len && (a < e.heap_len && Rc(t, e.heap[a + 1], e.heap[a], e.depth) && a++, !Rc(t, r, e.heap[a], e.depth)); )
    e.heap[n] = e.heap[a], n = a, a <<= 1;
  e.heap[n] = r;
}, Lc = (e, t, n) => {
  let r, a, i = 0, o, s;
  if (e.sym_next !== 0)
    do
      r = e.pending_buf[e.sym_buf + i++] & 255, r += (e.pending_buf[e.sym_buf + i++] & 255) << 8, a = e.pending_buf[e.sym_buf + i++], r === 0 ? pt(e, a, t) : (o = Or[a], pt(e, o + Gr + 1, t), s = lo[o], s !== 0 && (a -= hs[o], Le(e, a, s)), r--, o = Cd(r), pt(e, o, n), s = Ta[o], s !== 0 && (r -= Fa[o], Le(e, r, s)));
    while (i < e.sym_next);
  pt(e, fs, t);
}, uo = (e, t) => {
  const n = t.dyn_tree, r = t.stat_desc.static_tree, a = t.stat_desc.has_stree, i = t.stat_desc.elems;
  let o, s, l = -1, c;
  for (e.heap_len = 0, e.heap_max = wd, o = 0; o < i; o++)
    n[o * 2] !== 0 ? (e.heap[++e.heap_len] = l = o, e.depth[o] = 0) : n[o * 2 + 1] = 0;
  for (; e.heap_len < 2; )
    c = e.heap[++e.heap_len] = l < 2 ? ++l : 0, n[c * 2] = 1, e.depth[c] = 0, e.opt_len--, a && (e.static_len -= r[c * 2 + 1]);
  for (t.max_code = l, o = e.heap_len >> 1; o >= 1; o--)
    Ni(e, n, o);
  c = i;
  do
    o = e.heap[
      1
      /*SMALLEST*/
    ], e.heap[
      1
      /*SMALLEST*/
    ] = e.heap[e.heap_len--], Ni(
      e,
      n,
      1
      /*SMALLEST*/
    ), s = e.heap[
      1
      /*SMALLEST*/
    ], e.heap[--e.heap_max] = o, e.heap[--e.heap_max] = s, n[c * 2] = n[o * 2] + n[s * 2], e.depth[c] = (e.depth[o] >= e.depth[s] ? e.depth[o] : e.depth[s]) + 1, n[o * 2 + 1] = n[s * 2 + 1] = c, e.heap[
      1
      /*SMALLEST*/
    ] = c++, Ni(
      e,
      n,
      1
      /*SMALLEST*/
    );
  while (e.heap_len >= 2);
  e.heap[--e.heap_max] = e.heap[
    1
    /*SMALLEST*/
  ], iy(e, t), Td(n, l, e.bl_count);
}, $c = (e, t, n) => {
  let r, a = -1, i, o = t[0 * 2 + 1], s = 0, l = 7, c = 4;
  for (o === 0 && (l = 138, c = 3), t[(n + 1) * 2 + 1] = 65535, r = 0; r <= n; r++)
    i = o, o = t[(r + 1) * 2 + 1], !(++s < l && i === o) && (s < c ? e.bl_tree[i * 2] += s : i !== 0 ? (i !== a && e.bl_tree[i * 2]++, e.bl_tree[Ad * 2]++) : s <= 10 ? e.bl_tree[kd * 2]++ : e.bl_tree[vd * 2]++, s = 0, a = i, o === 0 ? (l = 138, c = 3) : i === o ? (l = 6, c = 3) : (l = 7, c = 4));
}, Mc = (e, t, n) => {
  let r, a = -1, i, o = t[0 * 2 + 1], s = 0, l = 7, c = 4;
  for (o === 0 && (l = 138, c = 3), r = 0; r <= n; r++)
    if (i = o, o = t[(r + 1) * 2 + 1], !(++s < l && i === o)) {
      if (s < c)
        do
          pt(e, i, e.bl_tree);
        while (--s !== 0);
      else i !== 0 ? (i !== a && (pt(e, i, e.bl_tree), s--), pt(e, Ad, e.bl_tree), Le(e, s - 3, 2)) : s <= 10 ? (pt(e, kd, e.bl_tree), Le(e, s - 3, 3)) : (pt(e, vd, e.bl_tree), Le(e, s - 11, 7));
      s = 0, a = i, o === 0 ? (l = 138, c = 3) : i === o ? (l = 6, c = 3) : (l = 7, c = 4);
    }
}, sy = (e) => {
  let t;
  for ($c(e, e.dyn_ltree, e.l_desc.max_code), $c(e, e.dyn_dtree, e.d_desc.max_code), uo(e, e.bl_desc), t = ds - 1; t >= 3 && e.bl_tree[_d[t] * 2 + 1] === 0; t--)
    ;
  return e.opt_len += 3 * (t + 1) + 5 + 5 + 4, t;
}, cy = (e, t, n, r) => {
  let a;
  for (Le(e, t - 257, 5), Le(e, n - 1, 5), Le(e, r - 4, 4), a = 0; a < r; a++)
    Le(e, e.bl_tree[_d[a] * 2 + 1], 3);
  Mc(e, e.dyn_ltree, t - 1), Mc(e, e.dyn_dtree, n - 1);
}, ly = (e) => {
  let t = 4093624447, n;
  for (n = 0; n <= 31; n++, t >>>= 1)
    if (t & 1 && e.dyn_ltree[n * 2] !== 0)
      return Nc;
  if (e.dyn_ltree[9 * 2] !== 0 || e.dyn_ltree[10 * 2] !== 0 || e.dyn_ltree[13 * 2] !== 0)
    return zc;
  for (n = 32; n < Gr; n++)
    if (e.dyn_ltree[n * 2] !== 0)
      return zc;
  return Nc;
};
let Hc = !1;
const uy = (e) => {
  Hc || (oy(), Hc = !0), e.l_desc = new Pi(e.dyn_ltree, xd), e.d_desc = new Pi(e.dyn_dtree, Ed), e.bl_desc = new Pi(e.bl_tree, Sd), e.bi_buf = 0, e.bi_valid = 0, Bd(e);
}, Dd = (e, t, n, r) => {
  Le(e, (W0 << 1) + (r ? 1 : 0), 3), Od(e), Dr(e, n), Dr(e, ~n), n && e.pending_buf.set(e.window.subarray(t, t + n), e.pending), e.pending += n;
}, dy = (e) => {
  Le(e, bd << 1, 3), pt(e, fs, Tt), ay(e);
}, fy = (e, t, n, r) => {
  let a, i, o = 0;
  e.level > 0 ? (e.strm.data_type === G0 && (e.strm.data_type = ly(e)), uo(e, e.l_desc), uo(e, e.d_desc), o = sy(e), a = e.opt_len + 3 + 7 >>> 3, i = e.static_len + 3 + 7 >>> 3, i <= a && (a = i)) : a = i = n + 5, n + 4 <= a && t !== -1 ? Dd(e, t, n, r) : e.strategy === X0 || i === a ? (Le(e, (bd << 1) + (r ? 1 : 0), 3), Lc(e, Tt, kr)) : (Le(e, (Y0 << 1) + (r ? 1 : 0), 3), cy(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, o + 1), Lc(e, e.dyn_ltree, e.dyn_dtree)), Bd(e), r && Od(e);
}, hy = (e, t, n) => (e.pending_buf[e.sym_buf + e.sym_next++] = t, e.pending_buf[e.sym_buf + e.sym_next++] = t >> 8, e.pending_buf[e.sym_buf + e.sym_next++] = n, t === 0 ? e.dyn_ltree[n * 2]++ : (e.matches++, t--, e.dyn_ltree[(Or[n] + Gr + 1) * 2]++, e.dyn_dtree[Cd(t) * 2]++), e.sym_next === e.sym_end);
var gy = uy, my = Dd, py = fy, yy = hy, by = dy, wy = {
  _tr_init: gy,
  _tr_stored_block: my,
  _tr_flush_block: py,
  _tr_tally: yy,
  _tr_align: by
};
const Ay = (e, t, n, r) => {
  let a = e & 65535 | 0, i = e >>> 16 & 65535 | 0, o = 0;
  for (; n !== 0; ) {
    o = n > 2e3 ? 2e3 : n, n -= o;
    do
      a = a + t[r++] | 0, i = i + a | 0;
    while (--o);
    a %= 65521, i %= 65521;
  }
  return a | i << 16 | 0;
};
var jr = Ay;
const ky = () => {
  let e, t = [];
  for (var n = 0; n < 256; n++) {
    e = n;
    for (var r = 0; r < 8; r++)
      e = e & 1 ? 3988292384 ^ e >>> 1 : e >>> 1;
    t[n] = e;
  }
  return t;
}, vy = new Uint32Array(ky()), _y = (e, t, n, r) => {
  const a = vy, i = r + n;
  e ^= -1;
  for (let o = r; o < i; o++)
    e = e >>> 8 ^ a[(e ^ t[o]) & 255];
  return e ^ -1;
};
var ve = _y, vn = {
  2: "need dictionary",
  /* Z_NEED_DICT       2  */
  1: "stream end",
  /* Z_STREAM_END      1  */
  0: "",
  /* Z_OK              0  */
  "-1": "file error",
  /* Z_ERRNO         (-1) */
  "-2": "stream error",
  /* Z_STREAM_ERROR  (-2) */
  "-3": "data error",
  /* Z_DATA_ERROR    (-3) */
  "-4": "insufficient memory",
  /* Z_MEM_ERROR     (-4) */
  "-5": "buffer error",
  /* Z_BUF_ERROR     (-5) */
  "-6": "incompatible version"
  /* Z_VERSION_ERROR (-6) */
}, er = {
  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH: 0,
  Z_PARTIAL_FLUSH: 1,
  Z_SYNC_FLUSH: 2,
  Z_FULL_FLUSH: 3,
  Z_FINISH: 4,
  Z_BLOCK: 5,
  Z_TREES: 6,
  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK: 0,
  Z_STREAM_END: 1,
  Z_NEED_DICT: 2,
  Z_ERRNO: -1,
  Z_STREAM_ERROR: -2,
  Z_DATA_ERROR: -3,
  Z_MEM_ERROR: -4,
  Z_BUF_ERROR: -5,
  //Z_VERSION_ERROR: -6,
  /* compression levels */
  Z_NO_COMPRESSION: 0,
  Z_BEST_SPEED: 1,
  Z_BEST_COMPRESSION: 9,
  Z_DEFAULT_COMPRESSION: -1,
  Z_FILTERED: 1,
  Z_HUFFMAN_ONLY: 2,
  Z_RLE: 3,
  Z_FIXED: 4,
  Z_DEFAULT_STRATEGY: 0,
  /* Possible values of the data_type field (though see inflate()) */
  Z_BINARY: 0,
  Z_TEXT: 1,
  //Z_ASCII:                1, // = Z_TEXT (deprecated)
  Z_UNKNOWN: 2,
  /* The deflate compression method */
  Z_DEFLATED: 8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
};
const { _tr_init: xy, _tr_stored_block: fo, _tr_flush_block: Ey, _tr_tally: qt, _tr_align: Sy } = wy, {
  Z_NO_FLUSH: Zt,
  Z_PARTIAL_FLUSH: Cy,
  Z_FULL_FLUSH: Iy,
  Z_FINISH: Ge,
  Z_BLOCK: Uc,
  Z_OK: Te,
  Z_STREAM_END: Vc,
  Z_STREAM_ERROR: bt,
  Z_DATA_ERROR: Ty,
  Z_BUF_ERROR: zi,
  Z_DEFAULT_COMPRESSION: By,
  Z_FILTERED: Oy,
  Z_HUFFMAN_ONLY: da,
  Z_RLE: Dy,
  Z_FIXED: jy,
  Z_DEFAULT_STRATEGY: Py,
  Z_UNKNOWN: Ny,
  Z_DEFLATED: ai
} = er, zy = 9, Ry = 15, Ly = 8, $y = 29, My = 256, ho = My + 1 + $y, Hy = 30, Uy = 19, Vy = 2 * ho + 1, Fy = 15, K = 3, Ft = 258, wt = Ft + K + 1, qy = 32, Zn = 42, gs = 57, go = 69, mo = 73, po = 91, yo = 103, dn = 113, mr = 666, Pe = 1, tr = 2, _n = 3, nr = 4, Zy = 3, fn = (e, t) => (e.msg = vn[t], t), Fc = (e) => e * 2 - (e > 4 ? 9 : 0), Ht = (e) => {
  let t = e.length;
  for (; --t >= 0; )
    e[t] = 0;
}, Ky = (e) => {
  let t, n, r, a = e.w_size;
  t = e.hash_size, r = t;
  do
    n = e.head[--r], e.head[r] = n >= a ? n - a : 0;
  while (--t);
  t = a, r = t;
  do
    n = e.prev[--r], e.prev[r] = n >= a ? n - a : 0;
  while (--t);
};
let Jy = (e, t, n) => (t << e.hash_shift ^ n) & e.hash_mask, Kt = Jy;
const He = (e) => {
  const t = e.state;
  let n = t.pending;
  n > e.avail_out && (n = e.avail_out), n !== 0 && (e.output.set(t.pending_buf.subarray(t.pending_out, t.pending_out + n), e.next_out), e.next_out += n, t.pending_out += n, e.total_out += n, e.avail_out -= n, t.pending -= n, t.pending === 0 && (t.pending_out = 0));
}, Fe = (e, t) => {
  Ey(e, e.block_start >= 0 ? e.block_start : -1, e.strstart - e.block_start, t), e.block_start = e.strstart, He(e.strm);
}, W = (e, t) => {
  e.pending_buf[e.pending++] = t;
}, ur = (e, t) => {
  e.pending_buf[e.pending++] = t >>> 8 & 255, e.pending_buf[e.pending++] = t & 255;
}, bo = (e, t, n, r) => {
  let a = e.avail_in;
  return a > r && (a = r), a === 0 ? 0 : (e.avail_in -= a, t.set(e.input.subarray(e.next_in, e.next_in + a), n), e.state.wrap === 1 ? e.adler = jr(e.adler, t, a, n) : e.state.wrap === 2 && (e.adler = ve(e.adler, t, a, n)), e.next_in += a, e.total_in += a, a);
}, jd = (e, t) => {
  let n = e.max_chain_length, r = e.strstart, a, i, o = e.prev_length, s = e.nice_match;
  const l = e.strstart > e.w_size - wt ? e.strstart - (e.w_size - wt) : 0, c = e.window, u = e.w_mask, d = e.prev, h = e.strstart + Ft;
  let f = c[r + o - 1], m = c[r + o];
  e.prev_length >= e.good_match && (n >>= 2), s > e.lookahead && (s = e.lookahead);
  do
    if (a = t, !(c[a + o] !== m || c[a + o - 1] !== f || c[a] !== c[r] || c[++a] !== c[r + 1])) {
      r += 2, a++;
      do
        ;
      while (c[++r] === c[++a] && c[++r] === c[++a] && c[++r] === c[++a] && c[++r] === c[++a] && c[++r] === c[++a] && c[++r] === c[++a] && c[++r] === c[++a] && c[++r] === c[++a] && r < h);
      if (i = Ft - (h - r), r = h - Ft, i > o) {
        if (e.match_start = t, o = i, i >= s)
          break;
        f = c[r + o - 1], m = c[r + o];
      }
    }
  while ((t = d[t & u]) > l && --n !== 0);
  return o <= e.lookahead ? o : e.lookahead;
}, Kn = (e) => {
  const t = e.w_size;
  let n, r, a;
  do {
    if (r = e.window_size - e.lookahead - e.strstart, e.strstart >= t + (t - wt) && (e.window.set(e.window.subarray(t, t + t - r), 0), e.match_start -= t, e.strstart -= t, e.block_start -= t, e.insert > e.strstart && (e.insert = e.strstart), Ky(e), r += t), e.strm.avail_in === 0)
      break;
    if (n = bo(e.strm, e.window, e.strstart + e.lookahead, r), e.lookahead += n, e.lookahead + e.insert >= K)
      for (a = e.strstart - e.insert, e.ins_h = e.window[a], e.ins_h = Kt(e, e.ins_h, e.window[a + 1]); e.insert && (e.ins_h = Kt(e, e.ins_h, e.window[a + K - 1]), e.prev[a & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = a, a++, e.insert--, !(e.lookahead + e.insert < K)); )
        ;
  } while (e.lookahead < wt && e.strm.avail_in !== 0);
}, Pd = (e, t) => {
  let n = e.pending_buf_size - 5 > e.w_size ? e.w_size : e.pending_buf_size - 5, r, a, i, o = 0, s = e.strm.avail_in;
  do {
    if (r = 65535, i = e.bi_valid + 42 >> 3, e.strm.avail_out < i || (i = e.strm.avail_out - i, a = e.strstart - e.block_start, r > a + e.strm.avail_in && (r = a + e.strm.avail_in), r > i && (r = i), r < n && (r === 0 && t !== Ge || t === Zt || r !== a + e.strm.avail_in)))
      break;
    o = t === Ge && r === a + e.strm.avail_in ? 1 : 0, fo(e, 0, 0, o), e.pending_buf[e.pending - 4] = r, e.pending_buf[e.pending - 3] = r >> 8, e.pending_buf[e.pending - 2] = ~r, e.pending_buf[e.pending - 1] = ~r >> 8, He(e.strm), a && (a > r && (a = r), e.strm.output.set(e.window.subarray(e.block_start, e.block_start + a), e.strm.next_out), e.strm.next_out += a, e.strm.avail_out -= a, e.strm.total_out += a, e.block_start += a, r -= a), r && (bo(e.strm, e.strm.output, e.strm.next_out, r), e.strm.next_out += r, e.strm.avail_out -= r, e.strm.total_out += r);
  } while (o === 0);
  return s -= e.strm.avail_in, s && (s >= e.w_size ? (e.matches = 2, e.window.set(e.strm.input.subarray(e.strm.next_in - e.w_size, e.strm.next_in), 0), e.strstart = e.w_size, e.insert = e.strstart) : (e.window_size - e.strstart <= s && (e.strstart -= e.w_size, e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0), e.matches < 2 && e.matches++, e.insert > e.strstart && (e.insert = e.strstart)), e.window.set(e.strm.input.subarray(e.strm.next_in - s, e.strm.next_in), e.strstart), e.strstart += s, e.insert += s > e.w_size - e.insert ? e.w_size - e.insert : s), e.block_start = e.strstart), e.high_water < e.strstart && (e.high_water = e.strstart), o ? nr : t !== Zt && t !== Ge && e.strm.avail_in === 0 && e.strstart === e.block_start ? tr : (i = e.window_size - e.strstart, e.strm.avail_in > i && e.block_start >= e.w_size && (e.block_start -= e.w_size, e.strstart -= e.w_size, e.window.set(e.window.subarray(e.w_size, e.w_size + e.strstart), 0), e.matches < 2 && e.matches++, i += e.w_size, e.insert > e.strstart && (e.insert = e.strstart)), i > e.strm.avail_in && (i = e.strm.avail_in), i && (bo(e.strm, e.window, e.strstart, i), e.strstart += i, e.insert += i > e.w_size - e.insert ? e.w_size - e.insert : i), e.high_water < e.strstart && (e.high_water = e.strstart), i = e.bi_valid + 42 >> 3, i = e.pending_buf_size - i > 65535 ? 65535 : e.pending_buf_size - i, n = i > e.w_size ? e.w_size : i, a = e.strstart - e.block_start, (a >= n || (a || t === Ge) && t !== Zt && e.strm.avail_in === 0 && a <= i) && (r = a > i ? i : a, o = t === Ge && e.strm.avail_in === 0 && r === a ? 1 : 0, fo(e, e.block_start, r, o), e.block_start += r, He(e.strm)), o ? _n : Pe);
}, Ri = (e, t) => {
  let n, r;
  for (; ; ) {
    if (e.lookahead < wt) {
      if (Kn(e), e.lookahead < wt && t === Zt)
        return Pe;
      if (e.lookahead === 0)
        break;
    }
    if (n = 0, e.lookahead >= K && (e.ins_h = Kt(e, e.ins_h, e.window[e.strstart + K - 1]), n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), n !== 0 && e.strstart - n <= e.w_size - wt && (e.match_length = jd(e, n)), e.match_length >= K)
      if (r = qt(e, e.strstart - e.match_start, e.match_length - K), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= K) {
        e.match_length--;
        do
          e.strstart++, e.ins_h = Kt(e, e.ins_h, e.window[e.strstart + K - 1]), n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart;
        while (--e.match_length !== 0);
        e.strstart++;
      } else
        e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = Kt(e, e.ins_h, e.window[e.strstart + 1]);
    else
      r = qt(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
    if (r && (Fe(e, !1), e.strm.avail_out === 0))
      return Pe;
  }
  return e.insert = e.strstart < K - 1 ? e.strstart : K - 1, t === Ge ? (Fe(e, !0), e.strm.avail_out === 0 ? _n : nr) : e.sym_next && (Fe(e, !1), e.strm.avail_out === 0) ? Pe : tr;
}, jn = (e, t) => {
  let n, r, a;
  for (; ; ) {
    if (e.lookahead < wt) {
      if (Kn(e), e.lookahead < wt && t === Zt)
        return Pe;
      if (e.lookahead === 0)
        break;
    }
    if (n = 0, e.lookahead >= K && (e.ins_h = Kt(e, e.ins_h, e.window[e.strstart + K - 1]), n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = K - 1, n !== 0 && e.prev_length < e.max_lazy_match && e.strstart - n <= e.w_size - wt && (e.match_length = jd(e, n), e.match_length <= 5 && (e.strategy === Oy || e.match_length === K && e.strstart - e.match_start > 4096) && (e.match_length = K - 1)), e.prev_length >= K && e.match_length <= e.prev_length) {
      a = e.strstart + e.lookahead - K, r = qt(e, e.strstart - 1 - e.prev_match, e.prev_length - K), e.lookahead -= e.prev_length - 1, e.prev_length -= 2;
      do
        ++e.strstart <= a && (e.ins_h = Kt(e, e.ins_h, e.window[e.strstart + K - 1]), n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart);
      while (--e.prev_length !== 0);
      if (e.match_available = 0, e.match_length = K - 1, e.strstart++, r && (Fe(e, !1), e.strm.avail_out === 0))
        return Pe;
    } else if (e.match_available) {
      if (r = qt(e, 0, e.window[e.strstart - 1]), r && Fe(e, !1), e.strstart++, e.lookahead--, e.strm.avail_out === 0)
        return Pe;
    } else
      e.match_available = 1, e.strstart++, e.lookahead--;
  }
  return e.match_available && (r = qt(e, 0, e.window[e.strstart - 1]), e.match_available = 0), e.insert = e.strstart < K - 1 ? e.strstart : K - 1, t === Ge ? (Fe(e, !0), e.strm.avail_out === 0 ? _n : nr) : e.sym_next && (Fe(e, !1), e.strm.avail_out === 0) ? Pe : tr;
}, Xy = (e, t) => {
  let n, r, a, i;
  const o = e.window;
  for (; ; ) {
    if (e.lookahead <= Ft) {
      if (Kn(e), e.lookahead <= Ft && t === Zt)
        return Pe;
      if (e.lookahead === 0)
        break;
    }
    if (e.match_length = 0, e.lookahead >= K && e.strstart > 0 && (a = e.strstart - 1, r = o[a], r === o[++a] && r === o[++a] && r === o[++a])) {
      i = e.strstart + Ft;
      do
        ;
      while (r === o[++a] && r === o[++a] && r === o[++a] && r === o[++a] && r === o[++a] && r === o[++a] && r === o[++a] && r === o[++a] && a < i);
      e.match_length = Ft - (i - a), e.match_length > e.lookahead && (e.match_length = e.lookahead);
    }
    if (e.match_length >= K ? (n = qt(e, 1, e.match_length - K), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (n = qt(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), n && (Fe(e, !1), e.strm.avail_out === 0))
      return Pe;
  }
  return e.insert = 0, t === Ge ? (Fe(e, !0), e.strm.avail_out === 0 ? _n : nr) : e.sym_next && (Fe(e, !1), e.strm.avail_out === 0) ? Pe : tr;
}, Gy = (e, t) => {
  let n;
  for (; ; ) {
    if (e.lookahead === 0 && (Kn(e), e.lookahead === 0)) {
      if (t === Zt)
        return Pe;
      break;
    }
    if (e.match_length = 0, n = qt(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, n && (Fe(e, !1), e.strm.avail_out === 0))
      return Pe;
  }
  return e.insert = 0, t === Ge ? (Fe(e, !0), e.strm.avail_out === 0 ? _n : nr) : e.sym_next && (Fe(e, !1), e.strm.avail_out === 0) ? Pe : tr;
};
function st(e, t, n, r, a) {
  this.good_length = e, this.max_lazy = t, this.nice_length = n, this.max_chain = r, this.func = a;
}
const pr = [
  /*      good lazy nice chain */
  new st(0, 0, 0, 0, Pd),
  /* 0 store only */
  new st(4, 4, 8, 4, Ri),
  /* 1 max speed, no lazy matches */
  new st(4, 5, 16, 8, Ri),
  /* 2 */
  new st(4, 6, 32, 32, Ri),
  /* 3 */
  new st(4, 4, 16, 16, jn),
  /* 4 lazy matches */
  new st(8, 16, 32, 32, jn),
  /* 5 */
  new st(8, 16, 128, 128, jn),
  /* 6 */
  new st(8, 32, 128, 256, jn),
  /* 7 */
  new st(32, 128, 258, 1024, jn),
  /* 8 */
  new st(32, 258, 258, 4096, jn)
  /* 9 max compression */
], Wy = (e) => {
  e.window_size = 2 * e.w_size, Ht(e.head), e.max_lazy_match = pr[e.level].max_lazy, e.good_match = pr[e.level].good_length, e.nice_match = pr[e.level].nice_length, e.max_chain_length = pr[e.level].max_chain, e.strstart = 0, e.block_start = 0, e.lookahead = 0, e.insert = 0, e.match_length = e.prev_length = K - 1, e.match_available = 0, e.ins_h = 0;
};
function Yy() {
  this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = ai, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Uint16Array(Vy * 2), this.dyn_dtree = new Uint16Array((2 * Hy + 1) * 2), this.bl_tree = new Uint16Array((2 * Uy + 1) * 2), Ht(this.dyn_ltree), Ht(this.dyn_dtree), Ht(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Uint16Array(Fy + 1), this.heap = new Uint16Array(2 * ho + 1), Ht(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Uint16Array(2 * ho + 1), Ht(this.depth), this.sym_buf = 0, this.lit_bufsize = 0, this.sym_next = 0, this.sym_end = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
}
const Wr = (e) => {
  if (!e)
    return 1;
  const t = e.state;
  return !t || t.strm !== e || t.status !== Zn && //#ifdef GZIP
  t.status !== gs && //#endif
  t.status !== go && t.status !== mo && t.status !== po && t.status !== yo && t.status !== dn && t.status !== mr ? 1 : 0;
}, Nd = (e) => {
  if (Wr(e))
    return fn(e, bt);
  e.total_in = e.total_out = 0, e.data_type = Ny;
  const t = e.state;
  return t.pending = 0, t.pending_out = 0, t.wrap < 0 && (t.wrap = -t.wrap), t.status = //#ifdef GZIP
  t.wrap === 2 ? gs : (
    //#endif
    t.wrap ? Zn : dn
  ), e.adler = t.wrap === 2 ? 0 : 1, t.last_flush = -2, xy(t), Te;
}, zd = (e) => {
  const t = Nd(e);
  return t === Te && Wy(e.state), t;
}, Qy = (e, t) => Wr(e) || e.state.wrap !== 2 ? bt : (e.state.gzhead = t, Te), Rd = (e, t, n, r, a, i) => {
  if (!e)
    return bt;
  let o = 1;
  if (t === By && (t = 6), r < 0 ? (o = 0, r = -r) : r > 15 && (o = 2, r -= 16), a < 1 || a > zy || n !== ai || r < 8 || r > 15 || t < 0 || t > 9 || i < 0 || i > jy || r === 8 && o !== 1)
    return fn(e, bt);
  r === 8 && (r = 9);
  const s = new Yy();
  return e.state = s, s.strm = e, s.status = Zn, s.wrap = o, s.gzhead = null, s.w_bits = r, s.w_size = 1 << s.w_bits, s.w_mask = s.w_size - 1, s.hash_bits = a + 7, s.hash_size = 1 << s.hash_bits, s.hash_mask = s.hash_size - 1, s.hash_shift = ~~((s.hash_bits + K - 1) / K), s.window = new Uint8Array(s.w_size * 2), s.head = new Uint16Array(s.hash_size), s.prev = new Uint16Array(s.w_size), s.lit_bufsize = 1 << a + 6, s.pending_buf_size = s.lit_bufsize * 4, s.pending_buf = new Uint8Array(s.pending_buf_size), s.sym_buf = s.lit_bufsize, s.sym_end = (s.lit_bufsize - 1) * 3, s.level = t, s.strategy = i, s.method = n, zd(e);
}, eb = (e, t) => Rd(e, t, ai, Ry, Ly, Py), tb = (e, t) => {
  if (Wr(e) || t > Uc || t < 0)
    return e ? fn(e, bt) : bt;
  const n = e.state;
  if (!e.output || e.avail_in !== 0 && !e.input || n.status === mr && t !== Ge)
    return fn(e, e.avail_out === 0 ? zi : bt);
  const r = n.last_flush;
  if (n.last_flush = t, n.pending !== 0) {
    if (He(e), e.avail_out === 0)
      return n.last_flush = -1, Te;
  } else if (e.avail_in === 0 && Fc(t) <= Fc(r) && t !== Ge)
    return fn(e, zi);
  if (n.status === mr && e.avail_in !== 0)
    return fn(e, zi);
  if (n.status === Zn && n.wrap === 0 && (n.status = dn), n.status === Zn) {
    let a = ai + (n.w_bits - 8 << 4) << 8, i = -1;
    if (n.strategy >= da || n.level < 2 ? i = 0 : n.level < 6 ? i = 1 : n.level === 6 ? i = 2 : i = 3, a |= i << 6, n.strstart !== 0 && (a |= qy), a += 31 - a % 31, ur(n, a), n.strstart !== 0 && (ur(n, e.adler >>> 16), ur(n, e.adler & 65535)), e.adler = 1, n.status = dn, He(e), n.pending !== 0)
      return n.last_flush = -1, Te;
  }
  if (n.status === gs) {
    if (e.adler = 0, W(n, 31), W(n, 139), W(n, 8), n.gzhead)
      W(
        n,
        (n.gzhead.text ? 1 : 0) + (n.gzhead.hcrc ? 2 : 0) + (n.gzhead.extra ? 4 : 0) + (n.gzhead.name ? 8 : 0) + (n.gzhead.comment ? 16 : 0)
      ), W(n, n.gzhead.time & 255), W(n, n.gzhead.time >> 8 & 255), W(n, n.gzhead.time >> 16 & 255), W(n, n.gzhead.time >> 24 & 255), W(n, n.level === 9 ? 2 : n.strategy >= da || n.level < 2 ? 4 : 0), W(n, n.gzhead.os & 255), n.gzhead.extra && n.gzhead.extra.length && (W(n, n.gzhead.extra.length & 255), W(n, n.gzhead.extra.length >> 8 & 255)), n.gzhead.hcrc && (e.adler = ve(e.adler, n.pending_buf, n.pending, 0)), n.gzindex = 0, n.status = go;
    else if (W(n, 0), W(n, 0), W(n, 0), W(n, 0), W(n, 0), W(n, n.level === 9 ? 2 : n.strategy >= da || n.level < 2 ? 4 : 0), W(n, Zy), n.status = dn, He(e), n.pending !== 0)
      return n.last_flush = -1, Te;
  }
  if (n.status === go) {
    if (n.gzhead.extra) {
      let a = n.pending, i = (n.gzhead.extra.length & 65535) - n.gzindex;
      for (; n.pending + i > n.pending_buf_size; ) {
        let s = n.pending_buf_size - n.pending;
        if (n.pending_buf.set(n.gzhead.extra.subarray(n.gzindex, n.gzindex + s), n.pending), n.pending = n.pending_buf_size, n.gzhead.hcrc && n.pending > a && (e.adler = ve(e.adler, n.pending_buf, n.pending - a, a)), n.gzindex += s, He(e), n.pending !== 0)
          return n.last_flush = -1, Te;
        a = 0, i -= s;
      }
      let o = new Uint8Array(n.gzhead.extra);
      n.pending_buf.set(o.subarray(n.gzindex, n.gzindex + i), n.pending), n.pending += i, n.gzhead.hcrc && n.pending > a && (e.adler = ve(e.adler, n.pending_buf, n.pending - a, a)), n.gzindex = 0;
    }
    n.status = mo;
  }
  if (n.status === mo) {
    if (n.gzhead.name) {
      let a = n.pending, i;
      do {
        if (n.pending === n.pending_buf_size) {
          if (n.gzhead.hcrc && n.pending > a && (e.adler = ve(e.adler, n.pending_buf, n.pending - a, a)), He(e), n.pending !== 0)
            return n.last_flush = -1, Te;
          a = 0;
        }
        n.gzindex < n.gzhead.name.length ? i = n.gzhead.name.charCodeAt(n.gzindex++) & 255 : i = 0, W(n, i);
      } while (i !== 0);
      n.gzhead.hcrc && n.pending > a && (e.adler = ve(e.adler, n.pending_buf, n.pending - a, a)), n.gzindex = 0;
    }
    n.status = po;
  }
  if (n.status === po) {
    if (n.gzhead.comment) {
      let a = n.pending, i;
      do {
        if (n.pending === n.pending_buf_size) {
          if (n.gzhead.hcrc && n.pending > a && (e.adler = ve(e.adler, n.pending_buf, n.pending - a, a)), He(e), n.pending !== 0)
            return n.last_flush = -1, Te;
          a = 0;
        }
        n.gzindex < n.gzhead.comment.length ? i = n.gzhead.comment.charCodeAt(n.gzindex++) & 255 : i = 0, W(n, i);
      } while (i !== 0);
      n.gzhead.hcrc && n.pending > a && (e.adler = ve(e.adler, n.pending_buf, n.pending - a, a));
    }
    n.status = yo;
  }
  if (n.status === yo) {
    if (n.gzhead.hcrc) {
      if (n.pending + 2 > n.pending_buf_size && (He(e), n.pending !== 0))
        return n.last_flush = -1, Te;
      W(n, e.adler & 255), W(n, e.adler >> 8 & 255), e.adler = 0;
    }
    if (n.status = dn, He(e), n.pending !== 0)
      return n.last_flush = -1, Te;
  }
  if (e.avail_in !== 0 || n.lookahead !== 0 || t !== Zt && n.status !== mr) {
    let a = n.level === 0 ? Pd(n, t) : n.strategy === da ? Gy(n, t) : n.strategy === Dy ? Xy(n, t) : pr[n.level].func(n, t);
    if ((a === _n || a === nr) && (n.status = mr), a === Pe || a === _n)
      return e.avail_out === 0 && (n.last_flush = -1), Te;
    if (a === tr && (t === Cy ? Sy(n) : t !== Uc && (fo(n, 0, 0, !1), t === Iy && (Ht(n.head), n.lookahead === 0 && (n.strstart = 0, n.block_start = 0, n.insert = 0))), He(e), e.avail_out === 0))
      return n.last_flush = -1, Te;
  }
  return t !== Ge ? Te : n.wrap <= 0 ? Vc : (n.wrap === 2 ? (W(n, e.adler & 255), W(n, e.adler >> 8 & 255), W(n, e.adler >> 16 & 255), W(n, e.adler >> 24 & 255), W(n, e.total_in & 255), W(n, e.total_in >> 8 & 255), W(n, e.total_in >> 16 & 255), W(n, e.total_in >> 24 & 255)) : (ur(n, e.adler >>> 16), ur(n, e.adler & 65535)), He(e), n.wrap > 0 && (n.wrap = -n.wrap), n.pending !== 0 ? Te : Vc);
}, nb = (e) => {
  if (Wr(e))
    return bt;
  const t = e.state.status;
  return e.state = null, t === dn ? fn(e, Ty) : Te;
}, rb = (e, t) => {
  let n = t.length;
  if (Wr(e))
    return bt;
  const r = e.state, a = r.wrap;
  if (a === 2 || a === 1 && r.status !== Zn || r.lookahead)
    return bt;
  if (a === 1 && (e.adler = jr(e.adler, t, n, 0)), r.wrap = 0, n >= r.w_size) {
    a === 0 && (Ht(r.head), r.strstart = 0, r.block_start = 0, r.insert = 0);
    let l = new Uint8Array(r.w_size);
    l.set(t.subarray(n - r.w_size, n), 0), t = l, n = r.w_size;
  }
  const i = e.avail_in, o = e.next_in, s = e.input;
  for (e.avail_in = n, e.next_in = 0, e.input = t, Kn(r); r.lookahead >= K; ) {
    let l = r.strstart, c = r.lookahead - (K - 1);
    do
      r.ins_h = Kt(r, r.ins_h, r.window[l + K - 1]), r.prev[l & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = l, l++;
    while (--c);
    r.strstart = l, r.lookahead = K - 1, Kn(r);
  }
  return r.strstart += r.lookahead, r.block_start = r.strstart, r.insert = r.lookahead, r.lookahead = 0, r.match_length = r.prev_length = K - 1, r.match_available = 0, e.next_in = o, e.input = s, e.avail_in = i, r.wrap = a, Te;
};
var ab = eb, ib = Rd, ob = zd, sb = Nd, cb = Qy, lb = tb, ub = nb, db = rb, fb = "pako deflate (from Nodeca project)", vr = {
  deflateInit: ab,
  deflateInit2: ib,
  deflateReset: ob,
  deflateResetKeep: sb,
  deflateSetHeader: cb,
  deflate: lb,
  deflateEnd: ub,
  deflateSetDictionary: db,
  deflateInfo: fb
};
const hb = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
var gb = function(e) {
  const t = Array.prototype.slice.call(arguments, 1);
  for (; t.length; ) {
    const n = t.shift();
    if (n) {
      if (typeof n != "object")
        throw new TypeError(n + "must be non-object");
      for (const r in n)
        hb(n, r) && (e[r] = n[r]);
    }
  }
  return e;
}, mb = (e) => {
  let t = 0;
  for (let r = 0, a = e.length; r < a; r++)
    t += e[r].length;
  const n = new Uint8Array(t);
  for (let r = 0, a = 0, i = e.length; r < i; r++) {
    let o = e[r];
    n.set(o, a), a += o.length;
  }
  return n;
}, ii = {
  assign: gb,
  flattenChunks: mb
};
let Ld = !0;
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch {
  Ld = !1;
}
const Pr = new Uint8Array(256);
for (let e = 0; e < 256; e++)
  Pr[e] = e >= 252 ? 6 : e >= 248 ? 5 : e >= 240 ? 4 : e >= 224 ? 3 : e >= 192 ? 2 : 1;
Pr[254] = Pr[254] = 1;
var pb = (e) => {
  if (typeof TextEncoder == "function" && TextEncoder.prototype.encode)
    return new TextEncoder().encode(e);
  let t, n, r, a, i, o = e.length, s = 0;
  for (a = 0; a < o; a++)
    n = e.charCodeAt(a), (n & 64512) === 55296 && a + 1 < o && (r = e.charCodeAt(a + 1), (r & 64512) === 56320 && (n = 65536 + (n - 55296 << 10) + (r - 56320), a++)), s += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
  for (t = new Uint8Array(s), i = 0, a = 0; i < s; a++)
    n = e.charCodeAt(a), (n & 64512) === 55296 && a + 1 < o && (r = e.charCodeAt(a + 1), (r & 64512) === 56320 && (n = 65536 + (n - 55296 << 10) + (r - 56320), a++)), n < 128 ? t[i++] = n : n < 2048 ? (t[i++] = 192 | n >>> 6, t[i++] = 128 | n & 63) : n < 65536 ? (t[i++] = 224 | n >>> 12, t[i++] = 128 | n >>> 6 & 63, t[i++] = 128 | n & 63) : (t[i++] = 240 | n >>> 18, t[i++] = 128 | n >>> 12 & 63, t[i++] = 128 | n >>> 6 & 63, t[i++] = 128 | n & 63);
  return t;
};
const yb = (e, t) => {
  if (t < 65534 && e.subarray && Ld)
    return String.fromCharCode.apply(null, e.length === t ? e : e.subarray(0, t));
  let n = "";
  for (let r = 0; r < t; r++)
    n += String.fromCharCode(e[r]);
  return n;
};
var bb = (e, t) => {
  const n = t || e.length;
  if (typeof TextDecoder == "function" && TextDecoder.prototype.decode)
    return new TextDecoder().decode(e.subarray(0, t));
  let r, a;
  const i = new Array(n * 2);
  for (a = 0, r = 0; r < n; ) {
    let o = e[r++];
    if (o < 128) {
      i[a++] = o;
      continue;
    }
    let s = Pr[o];
    if (s > 4) {
      i[a++] = 65533, r += s - 1;
      continue;
    }
    for (o &= s === 2 ? 31 : s === 3 ? 15 : 7; s > 1 && r < n; )
      o = o << 6 | e[r++] & 63, s--;
    if (s > 1) {
      i[a++] = 65533;
      continue;
    }
    o < 65536 ? i[a++] = o : (o -= 65536, i[a++] = 55296 | o >> 10 & 1023, i[a++] = 56320 | o & 1023);
  }
  return yb(i, a);
}, wb = (e, t) => {
  t = t || e.length, t > e.length && (t = e.length);
  let n = t - 1;
  for (; n >= 0 && (e[n] & 192) === 128; )
    n--;
  return n < 0 || n === 0 ? t : n + Pr[e[n]] > t ? n : t;
}, Nr = {
  string2buf: pb,
  buf2string: bb,
  utf8border: wb
};
function Ab() {
  this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
}
var $d = Ab;
const Md = Object.prototype.toString, {
  Z_NO_FLUSH: kb,
  Z_SYNC_FLUSH: vb,
  Z_FULL_FLUSH: _b,
  Z_FINISH: xb,
  Z_OK: qa,
  Z_STREAM_END: Eb,
  Z_DEFAULT_COMPRESSION: Sb,
  Z_DEFAULT_STRATEGY: Cb,
  Z_DEFLATED: Ib
} = er;
function Yr(e) {
  this.options = ii.assign({
    level: Sb,
    method: Ib,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: Cb
  }, e || {});
  let t = this.options;
  t.raw && t.windowBits > 0 ? t.windowBits = -t.windowBits : t.gzip && t.windowBits > 0 && t.windowBits < 16 && (t.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new $d(), this.strm.avail_out = 0;
  let n = vr.deflateInit2(
    this.strm,
    t.level,
    t.method,
    t.windowBits,
    t.memLevel,
    t.strategy
  );
  if (n !== qa)
    throw new Error(vn[n]);
  if (t.header && vr.deflateSetHeader(this.strm, t.header), t.dictionary) {
    let r;
    if (typeof t.dictionary == "string" ? r = Nr.string2buf(t.dictionary) : Md.call(t.dictionary) === "[object ArrayBuffer]" ? r = new Uint8Array(t.dictionary) : r = t.dictionary, n = vr.deflateSetDictionary(this.strm, r), n !== qa)
      throw new Error(vn[n]);
    this._dict_set = !0;
  }
}
Yr.prototype.push = function(e, t) {
  const n = this.strm, r = this.options.chunkSize;
  let a, i;
  if (this.ended)
    return !1;
  for (t === ~~t ? i = t : i = t === !0 ? xb : kb, typeof e == "string" ? n.input = Nr.string2buf(e) : Md.call(e) === "[object ArrayBuffer]" ? n.input = new Uint8Array(e) : n.input = e, n.next_in = 0, n.avail_in = n.input.length; ; ) {
    if (n.avail_out === 0 && (n.output = new Uint8Array(r), n.next_out = 0, n.avail_out = r), (i === vb || i === _b) && n.avail_out <= 6) {
      this.onData(n.output.subarray(0, n.next_out)), n.avail_out = 0;
      continue;
    }
    if (a = vr.deflate(n, i), a === Eb)
      return n.next_out > 0 && this.onData(n.output.subarray(0, n.next_out)), a = vr.deflateEnd(this.strm), this.onEnd(a), this.ended = !0, a === qa;
    if (n.avail_out === 0) {
      this.onData(n.output);
      continue;
    }
    if (i > 0 && n.next_out > 0) {
      this.onData(n.output.subarray(0, n.next_out)), n.avail_out = 0;
      continue;
    }
    if (n.avail_in === 0) break;
  }
  return !0;
};
Yr.prototype.onData = function(e) {
  this.chunks.push(e);
};
Yr.prototype.onEnd = function(e) {
  e === qa && (this.result = ii.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
};
function ms(e, t) {
  const n = new Yr(t);
  if (n.push(e, !0), n.err)
    throw n.msg || vn[n.err];
  return n.result;
}
function Tb(e, t) {
  return t = t || {}, t.raw = !0, ms(e, t);
}
function Bb(e, t) {
  return t = t || {}, t.gzip = !0, ms(e, t);
}
var Ob = Yr, Db = ms, jb = Tb, Pb = Bb, Nb = er, zb = {
  Deflate: Ob,
  deflate: Db,
  deflateRaw: jb,
  gzip: Pb,
  constants: Nb
};
const fa = 16209, Rb = 16191;
var Lb = function(t, n) {
  let r, a, i, o, s, l, c, u, d, h, f, m, g, p, b, _, k, y, S, x, v, B, N, I;
  const w = t.state;
  r = t.next_in, N = t.input, a = r + (t.avail_in - 5), i = t.next_out, I = t.output, o = i - (n - t.avail_out), s = i + (t.avail_out - 257), l = w.dmax, c = w.wsize, u = w.whave, d = w.wnext, h = w.window, f = w.hold, m = w.bits, g = w.lencode, p = w.distcode, b = (1 << w.lenbits) - 1, _ = (1 << w.distbits) - 1;
  e:
    do {
      m < 15 && (f += N[r++] << m, m += 8, f += N[r++] << m, m += 8), k = g[f & b];
      t:
        for (; ; ) {
          if (y = k >>> 24, f >>>= y, m -= y, y = k >>> 16 & 255, y === 0)
            I[i++] = k & 65535;
          else if (y & 16) {
            S = k & 65535, y &= 15, y && (m < y && (f += N[r++] << m, m += 8), S += f & (1 << y) - 1, f >>>= y, m -= y), m < 15 && (f += N[r++] << m, m += 8, f += N[r++] << m, m += 8), k = p[f & _];
            n:
              for (; ; ) {
                if (y = k >>> 24, f >>>= y, m -= y, y = k >>> 16 & 255, y & 16) {
                  if (x = k & 65535, y &= 15, m < y && (f += N[r++] << m, m += 8, m < y && (f += N[r++] << m, m += 8)), x += f & (1 << y) - 1, x > l) {
                    t.msg = "invalid distance too far back", w.mode = fa;
                    break e;
                  }
                  if (f >>>= y, m -= y, y = i - o, x > y) {
                    if (y = x - y, y > u && w.sane) {
                      t.msg = "invalid distance too far back", w.mode = fa;
                      break e;
                    }
                    if (v = 0, B = h, d === 0) {
                      if (v += c - y, y < S) {
                        S -= y;
                        do
                          I[i++] = h[v++];
                        while (--y);
                        v = i - x, B = I;
                      }
                    } else if (d < y) {
                      if (v += c + d - y, y -= d, y < S) {
                        S -= y;
                        do
                          I[i++] = h[v++];
                        while (--y);
                        if (v = 0, d < S) {
                          y = d, S -= y;
                          do
                            I[i++] = h[v++];
                          while (--y);
                          v = i - x, B = I;
                        }
                      }
                    } else if (v += d - y, y < S) {
                      S -= y;
                      do
                        I[i++] = h[v++];
                      while (--y);
                      v = i - x, B = I;
                    }
                    for (; S > 2; )
                      I[i++] = B[v++], I[i++] = B[v++], I[i++] = B[v++], S -= 3;
                    S && (I[i++] = B[v++], S > 1 && (I[i++] = B[v++]));
                  } else {
                    v = i - x;
                    do
                      I[i++] = I[v++], I[i++] = I[v++], I[i++] = I[v++], S -= 3;
                    while (S > 2);
                    S && (I[i++] = I[v++], S > 1 && (I[i++] = I[v++]));
                  }
                } else if (y & 64) {
                  t.msg = "invalid distance code", w.mode = fa;
                  break e;
                } else {
                  k = p[(k & 65535) + (f & (1 << y) - 1)];
                  continue n;
                }
                break;
              }
          } else if (y & 64)
            if (y & 32) {
              w.mode = Rb;
              break e;
            } else {
              t.msg = "invalid literal/length code", w.mode = fa;
              break e;
            }
          else {
            k = g[(k & 65535) + (f & (1 << y) - 1)];
            continue t;
          }
          break;
        }
    } while (r < a && i < s);
  S = m >> 3, r -= S, m -= S << 3, f &= (1 << m) - 1, t.next_in = r, t.next_out = i, t.avail_in = r < a ? 5 + (a - r) : 5 - (r - a), t.avail_out = i < s ? 257 + (s - i) : 257 - (i - s), w.hold = f, w.bits = m;
};
const Pn = 15, qc = 852, Zc = 592, Kc = 0, Li = 1, Jc = 2, $b = new Uint16Array([
  /* Length codes 257..285 base */
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  13,
  15,
  17,
  19,
  23,
  27,
  31,
  35,
  43,
  51,
  59,
  67,
  83,
  99,
  115,
  131,
  163,
  195,
  227,
  258,
  0,
  0
]), Mb = new Uint8Array([
  /* Length codes 257..285 extra */
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  17,
  17,
  17,
  17,
  18,
  18,
  18,
  18,
  19,
  19,
  19,
  19,
  20,
  20,
  20,
  20,
  21,
  21,
  21,
  21,
  16,
  72,
  78
]), Hb = new Uint16Array([
  /* Distance codes 0..29 base */
  1,
  2,
  3,
  4,
  5,
  7,
  9,
  13,
  17,
  25,
  33,
  49,
  65,
  97,
  129,
  193,
  257,
  385,
  513,
  769,
  1025,
  1537,
  2049,
  3073,
  4097,
  6145,
  8193,
  12289,
  16385,
  24577,
  0,
  0
]), Ub = new Uint8Array([
  /* Distance codes 0..29 extra */
  16,
  16,
  16,
  16,
  17,
  17,
  18,
  18,
  19,
  19,
  20,
  20,
  21,
  21,
  22,
  22,
  23,
  23,
  24,
  24,
  25,
  25,
  26,
  26,
  27,
  27,
  28,
  28,
  29,
  29,
  64,
  64
]), Vb = (e, t, n, r, a, i, o, s) => {
  const l = s.bits;
  let c = 0, u = 0, d = 0, h = 0, f = 0, m = 0, g = 0, p = 0, b = 0, _ = 0, k, y, S, x, v, B = null, N;
  const I = new Uint16Array(Pn + 1), w = new Uint16Array(Pn + 1);
  let T = null, C, O, A;
  for (c = 0; c <= Pn; c++)
    I[c] = 0;
  for (u = 0; u < r; u++)
    I[t[n + u]]++;
  for (f = l, h = Pn; h >= 1 && I[h] === 0; h--)
    ;
  if (f > h && (f = h), h === 0)
    return a[i++] = 1 << 24 | 64 << 16 | 0, a[i++] = 1 << 24 | 64 << 16 | 0, s.bits = 1, 0;
  for (d = 1; d < h && I[d] === 0; d++)
    ;
  for (f < d && (f = d), p = 1, c = 1; c <= Pn; c++)
    if (p <<= 1, p -= I[c], p < 0)
      return -1;
  if (p > 0 && (e === Kc || h !== 1))
    return -1;
  for (w[1] = 0, c = 1; c < Pn; c++)
    w[c + 1] = w[c] + I[c];
  for (u = 0; u < r; u++)
    t[n + u] !== 0 && (o[w[t[n + u]]++] = u);
  if (e === Kc ? (B = T = o, N = 20) : e === Li ? (B = $b, T = Mb, N = 257) : (B = Hb, T = Ub, N = 0), _ = 0, u = 0, c = d, v = i, m = f, g = 0, S = -1, b = 1 << f, x = b - 1, e === Li && b > qc || e === Jc && b > Zc)
    return 1;
  for (; ; ) {
    C = c - g, o[u] + 1 < N ? (O = 0, A = o[u]) : o[u] >= N ? (O = T[o[u] - N], A = B[o[u] - N]) : (O = 96, A = 0), k = 1 << c - g, y = 1 << m, d = y;
    do
      y -= k, a[v + (_ >> g) + y] = C << 24 | O << 16 | A | 0;
    while (y !== 0);
    for (k = 1 << c - 1; _ & k; )
      k >>= 1;
    if (k !== 0 ? (_ &= k - 1, _ += k) : _ = 0, u++, --I[c] === 0) {
      if (c === h)
        break;
      c = t[n + o[u]];
    }
    if (c > f && (_ & x) !== S) {
      for (g === 0 && (g = f), v += d, m = c - g, p = 1 << m; m + g < h && (p -= I[m + g], !(p <= 0)); )
        m++, p <<= 1;
      if (b += 1 << m, e === Li && b > qc || e === Jc && b > Zc)
        return 1;
      S = _ & x, a[S] = f << 24 | m << 16 | v - i | 0;
    }
  }
  return _ !== 0 && (a[v + _] = c - g << 24 | 64 << 16 | 0), s.bits = f, 0;
};
var _r = Vb;
const Fb = 0, Hd = 1, Ud = 2, {
  Z_FINISH: Xc,
  Z_BLOCK: qb,
  Z_TREES: ha,
  Z_OK: xn,
  Z_STREAM_END: Zb,
  Z_NEED_DICT: Kb,
  Z_STREAM_ERROR: Ye,
  Z_DATA_ERROR: Vd,
  Z_MEM_ERROR: Fd,
  Z_BUF_ERROR: Jb,
  Z_DEFLATED: Gc
} = er, oi = 16180, Wc = 16181, Yc = 16182, Qc = 16183, el = 16184, tl = 16185, nl = 16186, rl = 16187, al = 16188, il = 16189, Za = 16190, Ct = 16191, $i = 16192, ol = 16193, Mi = 16194, sl = 16195, cl = 16196, ll = 16197, ul = 16198, ga = 16199, ma = 16200, dl = 16201, fl = 16202, hl = 16203, gl = 16204, ml = 16205, Hi = 16206, pl = 16207, yl = 16208, oe = 16209, qd = 16210, Zd = 16211, Xb = 852, Gb = 592, Wb = 15, Yb = Wb, bl = (e) => (e >>> 24 & 255) + (e >>> 8 & 65280) + ((e & 65280) << 8) + ((e & 255) << 24);
function Qb() {
  this.strm = null, this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
}
const Tn = (e) => {
  if (!e)
    return 1;
  const t = e.state;
  return !t || t.strm !== e || t.mode < oi || t.mode > Zd ? 1 : 0;
}, Kd = (e) => {
  if (Tn(e))
    return Ye;
  const t = e.state;
  return e.total_in = e.total_out = t.total = 0, e.msg = "", t.wrap && (e.adler = t.wrap & 1), t.mode = oi, t.last = 0, t.havedict = 0, t.flags = -1, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new Int32Array(Xb), t.distcode = t.distdyn = new Int32Array(Gb), t.sane = 1, t.back = -1, xn;
}, Jd = (e) => {
  if (Tn(e))
    return Ye;
  const t = e.state;
  return t.wsize = 0, t.whave = 0, t.wnext = 0, Kd(e);
}, Xd = (e, t) => {
  let n;
  if (Tn(e))
    return Ye;
  const r = e.state;
  return t < 0 ? (n = 0, t = -t) : (n = (t >> 4) + 5, t < 48 && (t &= 15)), t && (t < 8 || t > 15) ? Ye : (r.window !== null && r.wbits !== t && (r.window = null), r.wrap = n, r.wbits = t, Jd(e));
}, Gd = (e, t) => {
  if (!e)
    return Ye;
  const n = new Qb();
  e.state = n, n.strm = e, n.window = null, n.mode = oi;
  const r = Xd(e, t);
  return r !== xn && (e.state = null), r;
}, ew = (e) => Gd(e, Yb);
let wl = !0, Ui, Vi;
const tw = (e) => {
  if (wl) {
    Ui = new Int32Array(512), Vi = new Int32Array(32);
    let t = 0;
    for (; t < 144; )
      e.lens[t++] = 8;
    for (; t < 256; )
      e.lens[t++] = 9;
    for (; t < 280; )
      e.lens[t++] = 7;
    for (; t < 288; )
      e.lens[t++] = 8;
    for (_r(Hd, e.lens, 0, 288, Ui, 0, e.work, { bits: 9 }), t = 0; t < 32; )
      e.lens[t++] = 5;
    _r(Ud, e.lens, 0, 32, Vi, 0, e.work, { bits: 5 }), wl = !1;
  }
  e.lencode = Ui, e.lenbits = 9, e.distcode = Vi, e.distbits = 5;
}, Wd = (e, t, n, r) => {
  let a;
  const i = e.state;
  return i.window === null && (i.wsize = 1 << i.wbits, i.wnext = 0, i.whave = 0, i.window = new Uint8Array(i.wsize)), r >= i.wsize ? (i.window.set(t.subarray(n - i.wsize, n), 0), i.wnext = 0, i.whave = i.wsize) : (a = i.wsize - i.wnext, a > r && (a = r), i.window.set(t.subarray(n - r, n - r + a), i.wnext), r -= a, r ? (i.window.set(t.subarray(n - r, n), 0), i.wnext = r, i.whave = i.wsize) : (i.wnext += a, i.wnext === i.wsize && (i.wnext = 0), i.whave < i.wsize && (i.whave += a))), 0;
}, nw = (e, t) => {
  let n, r, a, i, o, s, l, c, u, d, h, f, m, g, p = 0, b, _, k, y, S, x, v, B;
  const N = new Uint8Array(4);
  let I, w;
  const T = (
    /* permutation of code lengths */
    new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
  );
  if (Tn(e) || !e.output || !e.input && e.avail_in !== 0)
    return Ye;
  n = e.state, n.mode === Ct && (n.mode = $i), o = e.next_out, a = e.output, l = e.avail_out, i = e.next_in, r = e.input, s = e.avail_in, c = n.hold, u = n.bits, d = s, h = l, B = xn;
  e:
    for (; ; )
      switch (n.mode) {
        case oi:
          if (n.wrap === 0) {
            n.mode = $i;
            break;
          }
          for (; u < 16; ) {
            if (s === 0)
              break e;
            s--, c += r[i++] << u, u += 8;
          }
          if (n.wrap & 2 && c === 35615) {
            n.wbits === 0 && (n.wbits = 15), n.check = 0, N[0] = c & 255, N[1] = c >>> 8 & 255, n.check = ve(n.check, N, 2, 0), c = 0, u = 0, n.mode = Wc;
            break;
          }
          if (n.head && (n.head.done = !1), !(n.wrap & 1) || /* check if zlib header allowed */
          (((c & 255) << 8) + (c >> 8)) % 31) {
            e.msg = "incorrect header check", n.mode = oe;
            break;
          }
          if ((c & 15) !== Gc) {
            e.msg = "unknown compression method", n.mode = oe;
            break;
          }
          if (c >>>= 4, u -= 4, v = (c & 15) + 8, n.wbits === 0 && (n.wbits = v), v > 15 || v > n.wbits) {
            e.msg = "invalid window size", n.mode = oe;
            break;
          }
          n.dmax = 1 << n.wbits, n.flags = 0, e.adler = n.check = 1, n.mode = c & 512 ? il : Ct, c = 0, u = 0;
          break;
        case Wc:
          for (; u < 16; ) {
            if (s === 0)
              break e;
            s--, c += r[i++] << u, u += 8;
          }
          if (n.flags = c, (n.flags & 255) !== Gc) {
            e.msg = "unknown compression method", n.mode = oe;
            break;
          }
          if (n.flags & 57344) {
            e.msg = "unknown header flags set", n.mode = oe;
            break;
          }
          n.head && (n.head.text = c >> 8 & 1), n.flags & 512 && n.wrap & 4 && (N[0] = c & 255, N[1] = c >>> 8 & 255, n.check = ve(n.check, N, 2, 0)), c = 0, u = 0, n.mode = Yc;
        /* falls through */
        case Yc:
          for (; u < 32; ) {
            if (s === 0)
              break e;
            s--, c += r[i++] << u, u += 8;
          }
          n.head && (n.head.time = c), n.flags & 512 && n.wrap & 4 && (N[0] = c & 255, N[1] = c >>> 8 & 255, N[2] = c >>> 16 & 255, N[3] = c >>> 24 & 255, n.check = ve(n.check, N, 4, 0)), c = 0, u = 0, n.mode = Qc;
        /* falls through */
        case Qc:
          for (; u < 16; ) {
            if (s === 0)
              break e;
            s--, c += r[i++] << u, u += 8;
          }
          n.head && (n.head.xflags = c & 255, n.head.os = c >> 8), n.flags & 512 && n.wrap & 4 && (N[0] = c & 255, N[1] = c >>> 8 & 255, n.check = ve(n.check, N, 2, 0)), c = 0, u = 0, n.mode = el;
        /* falls through */
        case el:
          if (n.flags & 1024) {
            for (; u < 16; ) {
              if (s === 0)
                break e;
              s--, c += r[i++] << u, u += 8;
            }
            n.length = c, n.head && (n.head.extra_len = c), n.flags & 512 && n.wrap & 4 && (N[0] = c & 255, N[1] = c >>> 8 & 255, n.check = ve(n.check, N, 2, 0)), c = 0, u = 0;
          } else n.head && (n.head.extra = null);
          n.mode = tl;
        /* falls through */
        case tl:
          if (n.flags & 1024 && (f = n.length, f > s && (f = s), f && (n.head && (v = n.head.extra_len - n.length, n.head.extra || (n.head.extra = new Uint8Array(n.head.extra_len)), n.head.extra.set(
            r.subarray(
              i,
              // extra field is limited to 65536 bytes
              // - no need for additional size check
              i + f
            ),
            /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
            v
          )), n.flags & 512 && n.wrap & 4 && (n.check = ve(n.check, r, f, i)), s -= f, i += f, n.length -= f), n.length))
            break e;
          n.length = 0, n.mode = nl;
        /* falls through */
        case nl:
          if (n.flags & 2048) {
            if (s === 0)
              break e;
            f = 0;
            do
              v = r[i + f++], n.head && v && n.length < 65536 && (n.head.name += String.fromCharCode(v));
            while (v && f < s);
            if (n.flags & 512 && n.wrap & 4 && (n.check = ve(n.check, r, f, i)), s -= f, i += f, v)
              break e;
          } else n.head && (n.head.name = null);
          n.length = 0, n.mode = rl;
        /* falls through */
        case rl:
          if (n.flags & 4096) {
            if (s === 0)
              break e;
            f = 0;
            do
              v = r[i + f++], n.head && v && n.length < 65536 && (n.head.comment += String.fromCharCode(v));
            while (v && f < s);
            if (n.flags & 512 && n.wrap & 4 && (n.check = ve(n.check, r, f, i)), s -= f, i += f, v)
              break e;
          } else n.head && (n.head.comment = null);
          n.mode = al;
        /* falls through */
        case al:
          if (n.flags & 512) {
            for (; u < 16; ) {
              if (s === 0)
                break e;
              s--, c += r[i++] << u, u += 8;
            }
            if (n.wrap & 4 && c !== (n.check & 65535)) {
              e.msg = "header crc mismatch", n.mode = oe;
              break;
            }
            c = 0, u = 0;
          }
          n.head && (n.head.hcrc = n.flags >> 9 & 1, n.head.done = !0), e.adler = n.check = 0, n.mode = Ct;
          break;
        case il:
          for (; u < 32; ) {
            if (s === 0)
              break e;
            s--, c += r[i++] << u, u += 8;
          }
          e.adler = n.check = bl(c), c = 0, u = 0, n.mode = Za;
        /* falls through */
        case Za:
          if (n.havedict === 0)
            return e.next_out = o, e.avail_out = l, e.next_in = i, e.avail_in = s, n.hold = c, n.bits = u, Kb;
          e.adler = n.check = 1, n.mode = Ct;
        /* falls through */
        case Ct:
          if (t === qb || t === ha)
            break e;
        /* falls through */
        case $i:
          if (n.last) {
            c >>>= u & 7, u -= u & 7, n.mode = Hi;
            break;
          }
          for (; u < 3; ) {
            if (s === 0)
              break e;
            s--, c += r[i++] << u, u += 8;
          }
          switch (n.last = c & 1, c >>>= 1, u -= 1, c & 3) {
            case 0:
              n.mode = ol;
              break;
            case 1:
              if (tw(n), n.mode = ga, t === ha) {
                c >>>= 2, u -= 2;
                break e;
              }
              break;
            case 2:
              n.mode = cl;
              break;
            case 3:
              e.msg = "invalid block type", n.mode = oe;
          }
          c >>>= 2, u -= 2;
          break;
        case ol:
          for (c >>>= u & 7, u -= u & 7; u < 32; ) {
            if (s === 0)
              break e;
            s--, c += r[i++] << u, u += 8;
          }
          if ((c & 65535) !== (c >>> 16 ^ 65535)) {
            e.msg = "invalid stored block lengths", n.mode = oe;
            break;
          }
          if (n.length = c & 65535, c = 0, u = 0, n.mode = Mi, t === ha)
            break e;
        /* falls through */
        case Mi:
          n.mode = sl;
        /* falls through */
        case sl:
          if (f = n.length, f) {
            if (f > s && (f = s), f > l && (f = l), f === 0)
              break e;
            a.set(r.subarray(i, i + f), o), s -= f, i += f, l -= f, o += f, n.length -= f;
            break;
          }
          n.mode = Ct;
          break;
        case cl:
          for (; u < 14; ) {
            if (s === 0)
              break e;
            s--, c += r[i++] << u, u += 8;
          }
          if (n.nlen = (c & 31) + 257, c >>>= 5, u -= 5, n.ndist = (c & 31) + 1, c >>>= 5, u -= 5, n.ncode = (c & 15) + 4, c >>>= 4, u -= 4, n.nlen > 286 || n.ndist > 30) {
            e.msg = "too many length or distance symbols", n.mode = oe;
            break;
          }
          n.have = 0, n.mode = ll;
        /* falls through */
        case ll:
          for (; n.have < n.ncode; ) {
            for (; u < 3; ) {
              if (s === 0)
                break e;
              s--, c += r[i++] << u, u += 8;
            }
            n.lens[T[n.have++]] = c & 7, c >>>= 3, u -= 3;
          }
          for (; n.have < 19; )
            n.lens[T[n.have++]] = 0;
          if (n.lencode = n.lendyn, n.lenbits = 7, I = { bits: n.lenbits }, B = _r(Fb, n.lens, 0, 19, n.lencode, 0, n.work, I), n.lenbits = I.bits, B) {
            e.msg = "invalid code lengths set", n.mode = oe;
            break;
          }
          n.have = 0, n.mode = ul;
        /* falls through */
        case ul:
          for (; n.have < n.nlen + n.ndist; ) {
            for (; p = n.lencode[c & (1 << n.lenbits) - 1], b = p >>> 24, _ = p >>> 16 & 255, k = p & 65535, !(b <= u); ) {
              if (s === 0)
                break e;
              s--, c += r[i++] << u, u += 8;
            }
            if (k < 16)
              c >>>= b, u -= b, n.lens[n.have++] = k;
            else {
              if (k === 16) {
                for (w = b + 2; u < w; ) {
                  if (s === 0)
                    break e;
                  s--, c += r[i++] << u, u += 8;
                }
                if (c >>>= b, u -= b, n.have === 0) {
                  e.msg = "invalid bit length repeat", n.mode = oe;
                  break;
                }
                v = n.lens[n.have - 1], f = 3 + (c & 3), c >>>= 2, u -= 2;
              } else if (k === 17) {
                for (w = b + 3; u < w; ) {
                  if (s === 0)
                    break e;
                  s--, c += r[i++] << u, u += 8;
                }
                c >>>= b, u -= b, v = 0, f = 3 + (c & 7), c >>>= 3, u -= 3;
              } else {
                for (w = b + 7; u < w; ) {
                  if (s === 0)
                    break e;
                  s--, c += r[i++] << u, u += 8;
                }
                c >>>= b, u -= b, v = 0, f = 11 + (c & 127), c >>>= 7, u -= 7;
              }
              if (n.have + f > n.nlen + n.ndist) {
                e.msg = "invalid bit length repeat", n.mode = oe;
                break;
              }
              for (; f--; )
                n.lens[n.have++] = v;
            }
          }
          if (n.mode === oe)
            break;
          if (n.lens[256] === 0) {
            e.msg = "invalid code -- missing end-of-block", n.mode = oe;
            break;
          }
          if (n.lenbits = 9, I = { bits: n.lenbits }, B = _r(Hd, n.lens, 0, n.nlen, n.lencode, 0, n.work, I), n.lenbits = I.bits, B) {
            e.msg = "invalid literal/lengths set", n.mode = oe;
            break;
          }
          if (n.distbits = 6, n.distcode = n.distdyn, I = { bits: n.distbits }, B = _r(Ud, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, I), n.distbits = I.bits, B) {
            e.msg = "invalid distances set", n.mode = oe;
            break;
          }
          if (n.mode = ga, t === ha)
            break e;
        /* falls through */
        case ga:
          n.mode = ma;
        /* falls through */
        case ma:
          if (s >= 6 && l >= 258) {
            e.next_out = o, e.avail_out = l, e.next_in = i, e.avail_in = s, n.hold = c, n.bits = u, Lb(e, h), o = e.next_out, a = e.output, l = e.avail_out, i = e.next_in, r = e.input, s = e.avail_in, c = n.hold, u = n.bits, n.mode === Ct && (n.back = -1);
            break;
          }
          for (n.back = 0; p = n.lencode[c & (1 << n.lenbits) - 1], b = p >>> 24, _ = p >>> 16 & 255, k = p & 65535, !(b <= u); ) {
            if (s === 0)
              break e;
            s--, c += r[i++] << u, u += 8;
          }
          if (_ && !(_ & 240)) {
            for (y = b, S = _, x = k; p = n.lencode[x + ((c & (1 << y + S) - 1) >> y)], b = p >>> 24, _ = p >>> 16 & 255, k = p & 65535, !(y + b <= u); ) {
              if (s === 0)
                break e;
              s--, c += r[i++] << u, u += 8;
            }
            c >>>= y, u -= y, n.back += y;
          }
          if (c >>>= b, u -= b, n.back += b, n.length = k, _ === 0) {
            n.mode = ml;
            break;
          }
          if (_ & 32) {
            n.back = -1, n.mode = Ct;
            break;
          }
          if (_ & 64) {
            e.msg = "invalid literal/length code", n.mode = oe;
            break;
          }
          n.extra = _ & 15, n.mode = dl;
        /* falls through */
        case dl:
          if (n.extra) {
            for (w = n.extra; u < w; ) {
              if (s === 0)
                break e;
              s--, c += r[i++] << u, u += 8;
            }
            n.length += c & (1 << n.extra) - 1, c >>>= n.extra, u -= n.extra, n.back += n.extra;
          }
          n.was = n.length, n.mode = fl;
        /* falls through */
        case fl:
          for (; p = n.distcode[c & (1 << n.distbits) - 1], b = p >>> 24, _ = p >>> 16 & 255, k = p & 65535, !(b <= u); ) {
            if (s === 0)
              break e;
            s--, c += r[i++] << u, u += 8;
          }
          if (!(_ & 240)) {
            for (y = b, S = _, x = k; p = n.distcode[x + ((c & (1 << y + S) - 1) >> y)], b = p >>> 24, _ = p >>> 16 & 255, k = p & 65535, !(y + b <= u); ) {
              if (s === 0)
                break e;
              s--, c += r[i++] << u, u += 8;
            }
            c >>>= y, u -= y, n.back += y;
          }
          if (c >>>= b, u -= b, n.back += b, _ & 64) {
            e.msg = "invalid distance code", n.mode = oe;
            break;
          }
          n.offset = k, n.extra = _ & 15, n.mode = hl;
        /* falls through */
        case hl:
          if (n.extra) {
            for (w = n.extra; u < w; ) {
              if (s === 0)
                break e;
              s--, c += r[i++] << u, u += 8;
            }
            n.offset += c & (1 << n.extra) - 1, c >>>= n.extra, u -= n.extra, n.back += n.extra;
          }
          if (n.offset > n.dmax) {
            e.msg = "invalid distance too far back", n.mode = oe;
            break;
          }
          n.mode = gl;
        /* falls through */
        case gl:
          if (l === 0)
            break e;
          if (f = h - l, n.offset > f) {
            if (f = n.offset - f, f > n.whave && n.sane) {
              e.msg = "invalid distance too far back", n.mode = oe;
              break;
            }
            f > n.wnext ? (f -= n.wnext, m = n.wsize - f) : m = n.wnext - f, f > n.length && (f = n.length), g = n.window;
          } else
            g = a, m = o - n.offset, f = n.length;
          f > l && (f = l), l -= f, n.length -= f;
          do
            a[o++] = g[m++];
          while (--f);
          n.length === 0 && (n.mode = ma);
          break;
        case ml:
          if (l === 0)
            break e;
          a[o++] = n.length, l--, n.mode = ma;
          break;
        case Hi:
          if (n.wrap) {
            for (; u < 32; ) {
              if (s === 0)
                break e;
              s--, c |= r[i++] << u, u += 8;
            }
            if (h -= l, e.total_out += h, n.total += h, n.wrap & 4 && h && (e.adler = n.check = /*UPDATE_CHECK(state.check, put - _out, _out);*/
            n.flags ? ve(n.check, a, h, o - h) : jr(n.check, a, h, o - h)), h = l, n.wrap & 4 && (n.flags ? c : bl(c)) !== n.check) {
              e.msg = "incorrect data check", n.mode = oe;
              break;
            }
            c = 0, u = 0;
          }
          n.mode = pl;
        /* falls through */
        case pl:
          if (n.wrap && n.flags) {
            for (; u < 32; ) {
              if (s === 0)
                break e;
              s--, c += r[i++] << u, u += 8;
            }
            if (n.wrap & 4 && c !== (n.total & 4294967295)) {
              e.msg = "incorrect length check", n.mode = oe;
              break;
            }
            c = 0, u = 0;
          }
          n.mode = yl;
        /* falls through */
        case yl:
          B = Zb;
          break e;
        case oe:
          B = Vd;
          break e;
        case qd:
          return Fd;
        case Zd:
        /* falls through */
        default:
          return Ye;
      }
  return e.next_out = o, e.avail_out = l, e.next_in = i, e.avail_in = s, n.hold = c, n.bits = u, (n.wsize || h !== e.avail_out && n.mode < oe && (n.mode < Hi || t !== Xc)) && Wd(e, e.output, e.next_out, h - e.avail_out), d -= e.avail_in, h -= e.avail_out, e.total_in += d, e.total_out += h, n.total += h, n.wrap & 4 && h && (e.adler = n.check = /*UPDATE_CHECK(state.check, strm.next_out - _out, _out);*/
  n.flags ? ve(n.check, a, h, e.next_out - h) : jr(n.check, a, h, e.next_out - h)), e.data_type = n.bits + (n.last ? 64 : 0) + (n.mode === Ct ? 128 : 0) + (n.mode === ga || n.mode === Mi ? 256 : 0), (d === 0 && h === 0 || t === Xc) && B === xn && (B = Jb), B;
}, rw = (e) => {
  if (Tn(e))
    return Ye;
  let t = e.state;
  return t.window && (t.window = null), e.state = null, xn;
}, aw = (e, t) => {
  if (Tn(e))
    return Ye;
  const n = e.state;
  return n.wrap & 2 ? (n.head = t, t.done = !1, xn) : Ye;
}, iw = (e, t) => {
  const n = t.length;
  let r, a, i;
  return Tn(e) || (r = e.state, r.wrap !== 0 && r.mode !== Za) ? Ye : r.mode === Za && (a = 1, a = jr(a, t, n, 0), a !== r.check) ? Vd : (i = Wd(e, t, n, n), i ? (r.mode = qd, Fd) : (r.havedict = 1, xn));
};
var ow = Jd, sw = Xd, cw = Kd, lw = ew, uw = Gd, dw = nw, fw = rw, hw = aw, gw = iw, mw = "pako inflate (from Nodeca project)", Bt = {
  inflateReset: ow,
  inflateReset2: sw,
  inflateResetKeep: cw,
  inflateInit: lw,
  inflateInit2: uw,
  inflate: dw,
  inflateEnd: fw,
  inflateGetHeader: hw,
  inflateSetDictionary: gw,
  inflateInfo: mw
};
function pw() {
  this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
}
var yw = pw;
const Yd = Object.prototype.toString, {
  Z_NO_FLUSH: bw,
  Z_FINISH: ww,
  Z_OK: zr,
  Z_STREAM_END: Fi,
  Z_NEED_DICT: qi,
  Z_STREAM_ERROR: Aw,
  Z_DATA_ERROR: Al,
  Z_MEM_ERROR: kw
} = er;
function Qr(e) {
  this.options = ii.assign({
    chunkSize: 1024 * 64,
    windowBits: 15,
    to: ""
  }, e || {});
  const t = this.options;
  t.raw && t.windowBits >= 0 && t.windowBits < 16 && (t.windowBits = -t.windowBits, t.windowBits === 0 && (t.windowBits = -15)), t.windowBits >= 0 && t.windowBits < 16 && !(e && e.windowBits) && (t.windowBits += 32), t.windowBits > 15 && t.windowBits < 48 && (t.windowBits & 15 || (t.windowBits |= 15)), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new $d(), this.strm.avail_out = 0;
  let n = Bt.inflateInit2(
    this.strm,
    t.windowBits
  );
  if (n !== zr)
    throw new Error(vn[n]);
  if (this.header = new yw(), Bt.inflateGetHeader(this.strm, this.header), t.dictionary && (typeof t.dictionary == "string" ? t.dictionary = Nr.string2buf(t.dictionary) : Yd.call(t.dictionary) === "[object ArrayBuffer]" && (t.dictionary = new Uint8Array(t.dictionary)), t.raw && (n = Bt.inflateSetDictionary(this.strm, t.dictionary), n !== zr)))
    throw new Error(vn[n]);
}
Qr.prototype.push = function(e, t) {
  const n = this.strm, r = this.options.chunkSize, a = this.options.dictionary;
  let i, o, s;
  if (this.ended) return !1;
  for (t === ~~t ? o = t : o = t === !0 ? ww : bw, Yd.call(e) === "[object ArrayBuffer]" ? n.input = new Uint8Array(e) : n.input = e, n.next_in = 0, n.avail_in = n.input.length; ; ) {
    for (n.avail_out === 0 && (n.output = new Uint8Array(r), n.next_out = 0, n.avail_out = r), i = Bt.inflate(n, o), i === qi && a && (i = Bt.inflateSetDictionary(n, a), i === zr ? i = Bt.inflate(n, o) : i === Al && (i = qi)); n.avail_in > 0 && i === Fi && n.state.wrap > 0 && e[n.next_in] !== 0; )
      Bt.inflateReset(n), i = Bt.inflate(n, o);
    switch (i) {
      case Aw:
      case Al:
      case qi:
      case kw:
        return this.onEnd(i), this.ended = !0, !1;
    }
    if (s = n.avail_out, n.next_out && (n.avail_out === 0 || i === Fi))
      if (this.options.to === "string") {
        let l = Nr.utf8border(n.output, n.next_out), c = n.next_out - l, u = Nr.buf2string(n.output, l);
        n.next_out = c, n.avail_out = r - c, c && n.output.set(n.output.subarray(l, l + c), 0), this.onData(u);
      } else
        this.onData(n.output.length === n.next_out ? n.output : n.output.subarray(0, n.next_out));
    if (!(i === zr && s === 0)) {
      if (i === Fi)
        return i = Bt.inflateEnd(this.strm), this.onEnd(i), this.ended = !0, !0;
      if (n.avail_in === 0) break;
    }
  }
  return !0;
};
Qr.prototype.onData = function(e) {
  this.chunks.push(e);
};
Qr.prototype.onEnd = function(e) {
  e === zr && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = ii.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
};
function ps(e, t) {
  const n = new Qr(t);
  if (n.push(e), n.err) throw n.msg || vn[n.err];
  return n.result;
}
function vw(e, t) {
  return t = t || {}, t.raw = !0, ps(e, t);
}
var _w = Qr, xw = ps, Ew = vw, Sw = ps, Cw = er, Iw = {
  Inflate: _w,
  inflate: xw,
  inflateRaw: Ew,
  ungzip: Sw,
  constants: Cw
};
const { Deflate: n_, deflate: r_, deflateRaw: a_, gzip: Tw } = zb, { Inflate: i_, inflate: o_, inflateRaw: s_, ungzip: Bw } = Iw;
var Ow = Tw, Dw = Bw;
function kl(e) {
  if (!Number.isSafeInteger(e) || e < 0)
    throw new Error(`positive integer expected, not ${e}`);
}
function jw(e) {
  return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array";
}
function si(e, ...t) {
  if (!jw(e))
    throw new Error("Uint8Array expected");
  if (t.length > 0 && !t.includes(e.length))
    throw new Error(`Uint8Array expected of length ${t}, not of length=${e.length}`);
}
function Pw(e) {
  if (typeof e != "function" || typeof e.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  kl(e.outputLen), kl(e.blockLen);
}
function Ka(e, t = !0) {
  if (e.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && e.finished)
    throw new Error("Hash#digest() has already been called");
}
function Nw(e, t) {
  si(e);
  const n = t.outputLen;
  if (e.length < n)
    throw new Error(`digestInto() expects output buffer of length at least ${n}`);
}
const Zi = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const Ki = (e) => new DataView(e.buffer, e.byteOffset, e.byteLength), ct = (e, t) => e << 32 - t | e >>> t;
new Uint8Array(new Uint32Array([287454020]).buffer)[0];
function zw(e) {
  if (typeof e != "string")
    throw new Error(`utf8ToBytes expected string, got ${typeof e}`);
  return new Uint8Array(new TextEncoder().encode(e));
}
function ys(e) {
  return typeof e == "string" && (e = zw(e)), si(e), e;
}
function Rw(...e) {
  let t = 0;
  for (let r = 0; r < e.length; r++) {
    const a = e[r];
    si(a), t += a.length;
  }
  const n = new Uint8Array(t);
  for (let r = 0, a = 0; r < e.length; r++) {
    const i = e[r];
    n.set(i, a), a += i.length;
  }
  return n;
}
class Qd {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function Lw(e) {
  const t = (r) => e().update(ys(r)).digest(), n = e();
  return t.outputLen = n.outputLen, t.blockLen = n.blockLen, t.create = () => e(), t;
}
function $w(e = 32) {
  if (Zi && typeof Zi.getRandomValues == "function")
    return Zi.getRandomValues(new Uint8Array(e));
  throw new Error("crypto.getRandomValues must be defined");
}
function Mw(e, t, n, r) {
  if (typeof e.setBigUint64 == "function")
    return e.setBigUint64(t, n, r);
  const a = BigInt(32), i = BigInt(4294967295), o = Number(n >> a & i), s = Number(n & i), l = r ? 4 : 0, c = r ? 0 : 4;
  e.setUint32(t + l, o, r), e.setUint32(t + c, s, r);
}
const Hw = (e, t, n) => e & t ^ ~e & n, Uw = (e, t, n) => e & t ^ e & n ^ t & n;
class Vw extends Qd {
  constructor(t, n, r, a) {
    super(), this.blockLen = t, this.outputLen = n, this.padOffset = r, this.isLE = a, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(t), this.view = Ki(this.buffer);
  }
  update(t) {
    Ka(this);
    const { view: n, buffer: r, blockLen: a } = this;
    t = ys(t);
    const i = t.length;
    for (let o = 0; o < i; ) {
      const s = Math.min(a - this.pos, i - o);
      if (s === a) {
        const l = Ki(t);
        for (; a <= i - o; o += a)
          this.process(l, o);
        continue;
      }
      r.set(t.subarray(o, o + s), this.pos), this.pos += s, o += s, this.pos === a && (this.process(n, 0), this.pos = 0);
    }
    return this.length += t.length, this.roundClean(), this;
  }
  digestInto(t) {
    Ka(this), Nw(t, this), this.finished = !0;
    const { buffer: n, view: r, blockLen: a, isLE: i } = this;
    let { pos: o } = this;
    n[o++] = 128, this.buffer.subarray(o).fill(0), this.padOffset > a - o && (this.process(r, 0), o = 0);
    for (let d = o; d < a; d++)
      n[d] = 0;
    Mw(r, a - 8, BigInt(this.length * 8), i), this.process(r, 0);
    const s = Ki(t), l = this.outputLen;
    if (l % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const c = l / 4, u = this.get();
    if (c > u.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let d = 0; d < c; d++)
      s.setUint32(4 * d, u[d], i);
  }
  digest() {
    const { buffer: t, outputLen: n } = this;
    this.digestInto(t);
    const r = t.slice(0, n);
    return this.destroy(), r;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: n, buffer: r, length: a, finished: i, destroyed: o, pos: s } = this;
    return t.length = a, t.pos = s, t.finished = i, t.destroyed = o, a % n && t.buffer.set(r), t;
  }
}
const Fw = /* @__PURE__ */ new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]), Rt = /* @__PURE__ */ new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), Lt = /* @__PURE__ */ new Uint32Array(64);
class qw extends Vw {
  constructor() {
    super(64, 32, 8, !1), this.A = Rt[0] | 0, this.B = Rt[1] | 0, this.C = Rt[2] | 0, this.D = Rt[3] | 0, this.E = Rt[4] | 0, this.F = Rt[5] | 0, this.G = Rt[6] | 0, this.H = Rt[7] | 0;
  }
  get() {
    const { A: t, B: n, C: r, D: a, E: i, F: o, G: s, H: l } = this;
    return [t, n, r, a, i, o, s, l];
  }
  // prettier-ignore
  set(t, n, r, a, i, o, s, l) {
    this.A = t | 0, this.B = n | 0, this.C = r | 0, this.D = a | 0, this.E = i | 0, this.F = o | 0, this.G = s | 0, this.H = l | 0;
  }
  process(t, n) {
    for (let d = 0; d < 16; d++, n += 4)
      Lt[d] = t.getUint32(n, !1);
    for (let d = 16; d < 64; d++) {
      const h = Lt[d - 15], f = Lt[d - 2], m = ct(h, 7) ^ ct(h, 18) ^ h >>> 3, g = ct(f, 17) ^ ct(f, 19) ^ f >>> 10;
      Lt[d] = g + Lt[d - 7] + m + Lt[d - 16] | 0;
    }
    let { A: r, B: a, C: i, D: o, E: s, F: l, G: c, H: u } = this;
    for (let d = 0; d < 64; d++) {
      const h = ct(s, 6) ^ ct(s, 11) ^ ct(s, 25), f = u + h + Hw(s, l, c) + Fw[d] + Lt[d] | 0, g = (ct(r, 2) ^ ct(r, 13) ^ ct(r, 22)) + Uw(r, a, i) | 0;
      u = c, c = l, l = s, s = o + f | 0, o = i, i = a, a = r, r = f + g | 0;
    }
    r = r + this.A | 0, a = a + this.B | 0, i = i + this.C | 0, o = o + this.D | 0, s = s + this.E | 0, l = l + this.F | 0, c = c + this.G | 0, u = u + this.H | 0, this.set(r, a, i, o, s, l, c, u);
  }
  roundClean() {
    Lt.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
}
const Zw = /* @__PURE__ */ Lw(() => new qw());
class ef extends Qd {
  constructor(t, n) {
    super(), this.finished = !1, this.destroyed = !1, Pw(t);
    const r = ys(n);
    if (this.iHash = t.create(), typeof this.iHash.update != "function")
      throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const a = this.blockLen, i = new Uint8Array(a);
    i.set(r.length > a ? t.create().update(r).digest() : r);
    for (let o = 0; o < i.length; o++)
      i[o] ^= 54;
    this.iHash.update(i), this.oHash = t.create();
    for (let o = 0; o < i.length; o++)
      i[o] ^= 106;
    this.oHash.update(i), i.fill(0);
  }
  update(t) {
    return Ka(this), this.iHash.update(t), this;
  }
  digestInto(t) {
    Ka(this), si(t, this.outputLen), this.finished = !0, this.iHash.digestInto(t), this.oHash.update(t), this.oHash.digestInto(t), this.destroy();
  }
  digest() {
    const t = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(t), t;
  }
  _cloneInto(t) {
    t || (t = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: n, iHash: r, finished: a, destroyed: i, blockLen: o, outputLen: s } = this;
    return t = t, t.finished = a, t.destroyed = i, t.blockLen = o, t.outputLen = s, t.oHash = n._cloneInto(t.oHash), t.iHash = r._cloneInto(t.iHash), t;
  }
  destroy() {
    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy();
  }
}
const tf = (e, t, n) => new ef(e, t).update(n).digest();
tf.create = (e, t) => new ef(e, t);
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function Kw(e) {
  return {
    hash: e,
    hmac: (t, ...n) => tf(e, t, Rw(...n)),
    randomBytes: $w
  };
}
function Jw(e, t) {
  const n = (r) => hd({ ...e, ...Kw(r) });
  return Object.freeze({ ...n(t), create: n });
}
/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const nf = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"), vl = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), Xw = BigInt(1), wo = BigInt(2), _l = (e, t) => (e + t / wo) / t;
function Gw(e) {
  const t = nf, n = BigInt(3), r = BigInt(6), a = BigInt(11), i = BigInt(22), o = BigInt(23), s = BigInt(44), l = BigInt(88), c = e * e * e % t, u = c * c * e % t, d = Ze(u, n, t) * u % t, h = Ze(d, n, t) * u % t, f = Ze(h, wo, t) * c % t, m = Ze(f, a, t) * f % t, g = Ze(m, i, t) * m % t, p = Ze(g, s, t) * g % t, b = Ze(p, l, t) * p % t, _ = Ze(b, s, t) * g % t, k = Ze(_, n, t) * u % t, y = Ze(k, o, t) * m % t, S = Ze(y, r, t) * c % t, x = Ze(S, wo, t);
  if (!Ao.eql(Ao.sqr(x), e))
    throw new Error("Cannot find square root");
  return x;
}
const Ao = Yp(nf, void 0, void 0, { sqrt: Gw }), rf = Jw({
  a: BigInt(0),
  // equation params: a, b
  b: BigInt(7),
  // Seem to be rigid: bitcointalk.org/index.php?topic=289795.msg3183975#msg3183975
  Fp: Ao,
  // Field's prime: 2n**256n - 2n**32n - 2n**9n - 2n**8n - 2n**7n - 2n**6n - 2n**4n - 1n
  n: vl,
  // Curve order, total count of valid points in the field
  // Base point (x, y) aka generator point
  Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
  Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
  h: BigInt(1),
  // Cofactor
  lowS: !0,
  // Allow only low-S signatures by default in sign() and verify()
  /**
   * secp256k1 belongs to Koblitz curves: it has efficiently computable endomorphism.
   * Endomorphism uses 2x less RAM, speeds up precomputation by 2x and ECDH / key recovery by 20%.
   * For precomputed wNAF it trades off 1/2 init time & 1/3 ram for 20% perf hit.
   * Explanation: https://gist.github.com/paulmillr/eb670806793e84df628a7c434a873066
   */
  endo: {
    beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
    splitScalar: (e) => {
      const t = vl, n = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), r = -Xw * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), a = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), i = n, o = BigInt("0x100000000000000000000000000000000"), s = _l(i * e, t), l = _l(-r * e, t);
      let c = Re(e - s * n - l * a, t), u = Re(-s * r - l * i, t);
      const d = c > o, h = u > o;
      if (d && (c = t - c), h && (u = t - u), c > o || u > o)
        throw new Error("splitScalar: Endomorphism failed, k=" + e);
      return { k1neg: d, k1: c, k2neg: h, k2: u };
    }
  }
}, Zw);
BigInt(0);
rf.ProjectivePoint;
function af(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function of(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var a = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(n, r, a.get ? a : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), n;
}
var Ji = {}, dr = {}, pa = {}, xl;
function bs() {
  if (xl) return pa;
  xl = 1, Object.defineProperty(pa, "__esModule", { value: !0 }), pa.pathMatch = e;
  function e(t, n) {
    return !!(n === t || t.indexOf(n) === 0 && (n[n.length - 1] === "/" || new RegExp(`^${n}`).test(t) && t[n.length] === "/"));
  }
  return pa;
}
var ya = {}, ba = {};
function Ww(e, t) {
  return e.endsWith(t) ? e.length === t.length || e[e.length - t.length - 1] === "." : !1;
}
function Yw(e, t) {
  const n = e.length - t.length - 2, r = e.lastIndexOf(".", n);
  return r === -1 ? e : e.slice(r + 1);
}
function Qw(e, t, n) {
  if (n.validHosts !== null) {
    const a = n.validHosts;
    for (const i of a)
      if (
        /*@__INLINE__*/
        Ww(t, i)
      )
        return i;
  }
  let r = 0;
  if (t.startsWith("."))
    for (; r < t.length && t[r] === "."; )
      r += 1;
  return e.length === t.length - r ? null : (
    /*@__INLINE__*/
    Yw(t, e)
  );
}
function eA(e, t) {
  return e.slice(0, -t.length - 1);
}
function El(e, t) {
  let n = 0, r = e.length, a = !1;
  if (!t) {
    if (e.startsWith("data:"))
      return null;
    for (; n < e.length && e.charCodeAt(n) <= 32; )
      n += 1;
    for (; r > n + 1 && e.charCodeAt(r - 1) <= 32; )
      r -= 1;
    if (e.charCodeAt(n) === 47 && e.charCodeAt(n + 1) === 47)
      n += 2;
    else {
      const c = e.indexOf(":/", n);
      if (c !== -1) {
        const u = c - n, d = e.charCodeAt(n), h = e.charCodeAt(n + 1), f = e.charCodeAt(n + 2), m = e.charCodeAt(n + 3), g = e.charCodeAt(n + 4);
        if (!(u === 5 && d === 104 && h === 116 && f === 116 && m === 112 && g === 115)) {
          if (!(u === 4 && d === 104 && h === 116 && f === 116 && m === 112)) {
            if (!(u === 3 && d === 119 && h === 115 && f === 115)) {
              if (!(u === 2 && d === 119 && h === 115)) for (let p = n; p < c; p += 1) {
                const b = e.charCodeAt(p) | 32;
                if (!(b >= 97 && b <= 122 || // [a, z]
                b >= 48 && b <= 57 || // [0, 9]
                b === 46 || // '.'
                b === 45 || // '-'
                b === 43))
                  return null;
              }
            }
          }
        }
        for (n = c + 2; e.charCodeAt(n) === 47; )
          n += 1;
      }
    }
    let o = -1, s = -1, l = -1;
    for (let c = n; c < r; c += 1) {
      const u = e.charCodeAt(c);
      if (u === 35 || // '#'
      u === 47 || // '/'
      u === 63) {
        r = c;
        break;
      } else u === 64 ? o = c : u === 93 ? s = c : u === 58 ? l = c : u >= 65 && u <= 90 && (a = !0);
    }
    if (o !== -1 && o > n && o < r && (n = o + 1), e.charCodeAt(n) === 91)
      return s !== -1 ? e.slice(n + 1, s).toLowerCase() : null;
    l !== -1 && l > n && l < r && (r = l);
  }
  for (; r > n + 1 && e.charCodeAt(r - 1) === 46; )
    r -= 1;
  const i = n !== 0 || r !== e.length ? e.slice(n, r) : e;
  return a ? i.toLowerCase() : i;
}
function tA(e) {
  if (e.length < 7 || e.length > 15)
    return !1;
  let t = 0;
  for (let n = 0; n < e.length; n += 1) {
    const r = e.charCodeAt(n);
    if (r === 46)
      t += 1;
    else if (r < 48 || r > 57)
      return !1;
  }
  return t === 3 && e.charCodeAt(0) !== 46 && e.charCodeAt(e.length - 1) !== 46;
}
function nA(e) {
  if (e.length < 3)
    return !1;
  let t = e.startsWith("[") ? 1 : 0, n = e.length;
  if (e[n - 1] === "]" && (n -= 1), n - t > 39)
    return !1;
  let r = !1;
  for (; t < n; t += 1) {
    const a = e.charCodeAt(t);
    if (a === 58)
      r = !0;
    else if (!(a >= 48 && a <= 57 || // 0-9
    a >= 97 && a <= 102 || // a-f
    a >= 65 && a <= 90))
      return !1;
  }
  return r;
}
function rA(e) {
  return nA(e) || tA(e);
}
function Sl(e) {
  return e >= 97 && e <= 122 || e >= 48 && e <= 57 || e > 127;
}
function Cl(e) {
  if (e.length > 255 || e.length === 0 || /*@__INLINE__*/
  !Sl(e.charCodeAt(0)) && e.charCodeAt(0) !== 46 && // '.' (dot)
  e.charCodeAt(0) !== 95)
    return !1;
  let t = -1, n = -1;
  const r = e.length;
  for (let a = 0; a < r; a += 1) {
    const i = e.charCodeAt(a);
    if (i === 46) {
      if (
        // Check that previous label is < 63 bytes long (64 = 63 + '.')
        a - t > 64 || // Check that previous character was not already a '.'
        n === 46 || // Check that the previous label does not end with a '-' (dash)
        n === 45 || // Check that the previous label does not end with a '_' (underscore)
        n === 95
      )
        return !1;
      t = a;
    } else if (!/*@__INLINE__*/
    (Sl(i) || i === 45 || i === 95))
      return !1;
    n = i;
  }
  return (
    // Check that last label is shorter than 63 chars
    r - t - 1 <= 63 && // Check that the last character is an allowed trailing label character.
    // Since we already checked that the char is a valid hostname character,
    // we only need to check that it's different from '-'.
    n !== 45
  );
}
function sf({ allowIcannDomains: e = !0, allowPrivateDomains: t = !1, detectIp: n = !0, extractHostname: r = !0, mixedInputs: a = !0, validHosts: i = null, validateHostname: o = !0 }) {
  return {
    allowIcannDomains: e,
    allowPrivateDomains: t,
    detectIp: n,
    extractHostname: r,
    mixedInputs: a,
    validHosts: i,
    validateHostname: o
  };
}
const aA = (
  /*@__INLINE__*/
  sf({})
);
function iA(e) {
  return e === void 0 ? aA : (
    /*@__INLINE__*/
    sf(e)
  );
}
function oA(e, t) {
  return t.length === e.length ? "" : e.slice(0, -t.length - 1);
}
function cf() {
  return {
    domain: null,
    domainWithoutSuffix: null,
    hostname: null,
    isIcann: null,
    isIp: null,
    isPrivate: null,
    publicSuffix: null,
    subdomain: null
  };
}
function ea(e) {
  e.domain = null, e.domainWithoutSuffix = null, e.hostname = null, e.isIcann = null, e.isIp = null, e.isPrivate = null, e.publicSuffix = null, e.subdomain = null;
}
function rr(e, t, n, r, a) {
  const i = (
    /*@__INLINE__*/
    iA(r)
  );
  return typeof e != "string" || (i.extractHostname ? i.mixedInputs ? a.hostname = El(e, Cl(e)) : a.hostname = El(e, !1) : a.hostname = e, t === 0 || a.hostname === null) || i.detectIp && (a.isIp = rA(a.hostname), a.isIp) ? a : i.validateHostname && i.extractHostname && !Cl(a.hostname) ? (a.hostname = null, a) : (n(a.hostname, i, a), t === 2 || a.publicSuffix === null || (a.domain = Qw(a.publicSuffix, a.hostname, i), t === 3 || a.domain === null) || (a.subdomain = oA(a.hostname, a.domain), t === 4) || (a.domainWithoutSuffix = eA(a.domain, a.publicSuffix)), a);
}
function sA(e, t, n) {
  if (!t.allowPrivateDomains && e.length > 3) {
    const r = e.length - 1, a = e.charCodeAt(r), i = e.charCodeAt(r - 1), o = e.charCodeAt(r - 2), s = e.charCodeAt(r - 3);
    if (a === 109 && i === 111 && o === 99 && s === 46)
      return n.isIcann = !0, n.isPrivate = !1, n.publicSuffix = "com", !0;
    if (a === 103 && i === 114 && o === 111 && s === 46)
      return n.isIcann = !0, n.isPrivate = !1, n.publicSuffix = "org", !0;
    if (a === 117 && i === 100 && o === 101 && s === 46)
      return n.isIcann = !0, n.isPrivate = !1, n.publicSuffix = "edu", !0;
    if (a === 118 && i === 111 && o === 103 && s === 46)
      return n.isIcann = !0, n.isPrivate = !1, n.publicSuffix = "gov", !0;
    if (a === 116 && i === 101 && o === 110 && s === 46)
      return n.isIcann = !0, n.isPrivate = !1, n.publicSuffix = "net", !0;
    if (a === 101 && i === 100 && o === 46)
      return n.isIcann = !0, n.isPrivate = !1, n.publicSuffix = "de", !0;
  }
  return !1;
}
const cA = /* @__PURE__ */ function() {
  const e = [1, {}], t = [0, { city: e }];
  return [0, { ck: [0, { www: e }], jp: [0, { kawasaki: t, kitakyushu: t, kobe: t, nagoya: t, sapporo: t, sendai: t, yokohama: t }] }];
}(), lA = /* @__PURE__ */ function() {
  const e = [1, {}], t = [2, {}], n = [1, { com: e, edu: e, gov: e, net: e, org: e }], r = [1, { com: e, edu: e, gov: e, mil: e, net: e, org: e }], a = [0, { "*": t }], i = [0, { relay: t }], o = [2, { id: t }], s = [1, { gov: e }], l = [0, { notebook: t, studio: t }], c = [0, { labeling: t, notebook: t, studio: t }], u = [0, { notebook: t }], d = [0, { labeling: t, notebook: t, "notebook-fips": t, studio: t }], h = [0, { notebook: t, "notebook-fips": t, studio: t, "studio-fips": t }], f = [0, { "*": e }], m = [1, { co: t }], g = [0, { objects: t }], p = [2, { nodes: t }], b = [0, { my: a }], _ = [0, { s3: t, "s3-accesspoint": t, "s3-website": t }], k = [0, { s3: t, "s3-accesspoint": t }], y = [0, { direct: t }], S = [0, { "webview-assets": t }], x = [0, { vfs: t, "webview-assets": t }], v = [0, { "execute-api": t, "emrappui-prod": t, "emrnotebooks-prod": t, "emrstudio-prod": t, dualstack: _, s3: t, "s3-accesspoint": t, "s3-object-lambda": t, "s3-website": t, "aws-cloud9": S, cloud9: x }], B = [0, { "execute-api": t, "emrappui-prod": t, "emrnotebooks-prod": t, "emrstudio-prod": t, dualstack: k, s3: t, "s3-accesspoint": t, "s3-object-lambda": t, "s3-website": t, "aws-cloud9": S, cloud9: x }], N = [0, { "execute-api": t, "emrappui-prod": t, "emrnotebooks-prod": t, "emrstudio-prod": t, dualstack: _, s3: t, "s3-accesspoint": t, "s3-object-lambda": t, "s3-website": t, "analytics-gateway": t, "aws-cloud9": S, cloud9: x }], I = [0, { "execute-api": t, "emrappui-prod": t, "emrnotebooks-prod": t, "emrstudio-prod": t, dualstack: _, s3: t, "s3-accesspoint": t, "s3-object-lambda": t, "s3-website": t }], w = [0, { s3: t, "s3-accesspoint": t, "s3-accesspoint-fips": t, "s3-fips": t, "s3-website": t }], T = [0, { "execute-api": t, "emrappui-prod": t, "emrnotebooks-prod": t, "emrstudio-prod": t, dualstack: w, s3: t, "s3-accesspoint": t, "s3-accesspoint-fips": t, "s3-fips": t, "s3-object-lambda": t, "s3-website": t, "aws-cloud9": S, cloud9: x }], C = [0, { "execute-api": t, "emrappui-prod": t, "emrnotebooks-prod": t, "emrstudio-prod": t, dualstack: w, s3: t, "s3-accesspoint": t, "s3-accesspoint-fips": t, "s3-deprecated": t, "s3-fips": t, "s3-object-lambda": t, "s3-website": t, "analytics-gateway": t, "aws-cloud9": S, cloud9: x }], O = [0, { s3: t, "s3-accesspoint": t, "s3-accesspoint-fips": t, "s3-fips": t }], A = [0, { "execute-api": t, "emrappui-prod": t, "emrnotebooks-prod": t, "emrstudio-prod": t, dualstack: O, s3: t, "s3-accesspoint": t, "s3-accesspoint-fips": t, "s3-fips": t, "s3-object-lambda": t, "s3-website": t }], E = [0, { auth: t }], j = [0, { auth: t, "auth-fips": t }], P = [0, { apps: t }], z = [0, { paas: t }], L = [2, { eu: t }], U = [0, { app: t }], F = [0, { site: t }], ie = [1, { com: e, edu: e, net: e, org: e }], J = [0, { j: t }], ce = [0, { dyn: t }], V = [1, { co: e, com: e, edu: e, gov: e, net: e, org: e }], M = [0, { p: t }], q = [0, { user: t }], Q = [0, { shop: t }], le = [0, { cust: t, reservd: t }], Dt = [0, { cust: t }], Ce = [0, { s3: t }], ae = [1, { biz: e, com: e, edu: e, gov: e, info: e, net: e, org: e }], ke = [1, { framer: t }], jt = [0, { forgot: t }], it = [0, { cdn: t }], de = [1, { gs: e }], ac = [0, { nes: e }], H = [1, { k12: e, cc: e, lib: e }], ia = [1, { cc: e, lib: e }];
  return [0, { ac: [1, { com: e, edu: e, gov: e, mil: e, net: e, org: e, drr: t, feedback: t, forms: t }], ad: e, ae: [1, { ac: e, co: e, gov: e, mil: e, net: e, org: e, sch: e }], aero: [1, { airline: e, airport: e, "accident-investigation": e, "accident-prevention": e, aerobatic: e, aeroclub: e, aerodrome: e, agents: e, "air-surveillance": e, "air-traffic-control": e, aircraft: e, airtraffic: e, ambulance: e, association: e, author: e, ballooning: e, broker: e, caa: e, cargo: e, catering: e, certification: e, championship: e, charter: e, civilaviation: e, club: e, conference: e, consultant: e, consulting: e, control: e, council: e, crew: e, design: e, dgca: e, educator: e, emergency: e, engine: e, engineer: e, entertainment: e, equipment: e, exchange: e, express: e, federation: e, flight: e, freight: e, fuel: e, gliding: e, government: e, groundhandling: e, group: e, hanggliding: e, homebuilt: e, insurance: e, journal: e, journalist: e, leasing: e, logistics: e, magazine: e, maintenance: e, marketplace: e, media: e, microlight: e, modelling: e, navigation: e, parachuting: e, paragliding: e, "passenger-association": e, pilot: e, press: e, production: e, recreation: e, repbody: e, res: e, research: e, rotorcraft: e, safety: e, scientist: e, services: e, show: e, skydiving: e, software: e, student: e, taxi: e, trader: e, trading: e, trainer: e, union: e, workinggroup: e, works: e }], af: n, ag: [1, { co: e, com: e, net: e, nom: e, org: e }], ai: [1, { com: e, net: e, off: e, org: e, uwu: t, framer: t }], al: r, am: [1, { co: e, com: e, commune: e, net: e, org: e, radio: t }], ao: [1, { co: e, ed: e, edu: e, gov: e, gv: e, it: e, og: e, org: e, pb: e }], aq: e, ar: [1, { bet: e, com: e, coop: e, edu: e, gob: e, gov: e, int: e, mil: e, musica: e, mutual: e, net: e, org: e, senasa: e, tur: e }], arpa: [1, { e164: e, home: e, "in-addr": e, ip6: e, iris: e, uri: e, urn: e }], as: s, asia: [1, { cloudns: t, daemon: t, dix: t }], at: [1, { ac: [1, { sth: e }], co: e, gv: e, or: e, funkfeuer: [0, { wien: t }], futurecms: [0, { "*": t, ex: a, in: a }], futurehosting: t, futuremailing: t, ortsinfo: [0, { ex: a, kunden: a }], biz: t, info: t, "123webseite": t, priv: t, myspreadshop: t, "12hp": t, "2ix": t, "4lima": t, "lima-city": t }], au: [1, { asn: e, com: [1, { cloudlets: [0, { mel: t }], myspreadshop: t }], edu: [1, { act: e, catholic: e, nsw: [1, { schools: e }], nt: e, qld: e, sa: e, tas: e, vic: e, wa: e }], gov: [1, { qld: e, sa: e, tas: e, vic: e, wa: e }], id: e, net: e, org: e, conf: e, oz: e, act: e, nsw: e, nt: e, qld: e, sa: e, tas: e, vic: e, wa: e }], aw: [1, { com: e }], ax: e, az: [1, { biz: e, co: e, com: e, edu: e, gov: e, info: e, int: e, mil: e, name: e, net: e, org: e, pp: e, pro: e }], ba: [1, { com: e, edu: e, gov: e, mil: e, net: e, org: e, rs: t }], bb: [1, { biz: e, co: e, com: e, edu: e, gov: e, info: e, net: e, org: e, store: e, tv: e }], bd: f, be: [1, { ac: e, cloudns: t, webhosting: t, interhostsolutions: [0, { cloud: t }], kuleuven: [0, { ezproxy: t }], "123website": t, myspreadshop: t, transurl: a }], bf: s, bg: [1, { 0: e, 1: e, 2: e, 3: e, 4: e, 5: e, 6: e, 7: e, 8: e, 9: e, a: e, b: e, c: e, d: e, e, f: e, g: e, h: e, i: e, j: e, k: e, l: e, m: e, n: e, o: e, p: e, q: e, r: e, s: e, t: e, u: e, v: e, w: e, x: e, y: e, z: e, barsy: t }], bh: n, bi: [1, { co: e, com: e, edu: e, or: e, org: e }], biz: [1, { activetrail: t, "cloud-ip": t, cloudns: t, jozi: t, dyndns: t, "for-better": t, "for-more": t, "for-some": t, "for-the": t, selfip: t, webhop: t, orx: t, mmafan: t, myftp: t, "no-ip": t, dscloud: t }], bj: [1, { africa: e, agro: e, architectes: e, assur: e, avocats: e, co: e, com: e, eco: e, econo: e, edu: e, info: e, loisirs: e, money: e, net: e, org: e, ote: e, restaurant: e, resto: e, tourism: e, univ: e }], bm: n, bn: [1, { com: e, edu: e, gov: e, net: e, org: e, co: t }], bo: [1, { com: e, edu: e, gob: e, int: e, mil: e, net: e, org: e, tv: e, web: e, academia: e, agro: e, arte: e, blog: e, bolivia: e, ciencia: e, cooperativa: e, democracia: e, deporte: e, ecologia: e, economia: e, empresa: e, indigena: e, industria: e, info: e, medicina: e, movimiento: e, musica: e, natural: e, nombre: e, noticias: e, patria: e, plurinacional: e, politica: e, profesional: e, pueblo: e, revista: e, salud: e, tecnologia: e, tksat: e, transporte: e, wiki: e }], br: [1, { "9guacu": e, abc: e, adm: e, adv: e, agr: e, aju: e, am: e, anani: e, aparecida: e, app: e, arq: e, art: e, ato: e, b: e, barueri: e, belem: e, bet: e, bhz: e, bib: e, bio: e, blog: e, bmd: e, boavista: e, bsb: e, campinagrande: e, campinas: e, caxias: e, cim: e, cng: e, cnt: e, com: [1, { simplesite: t }], contagem: e, coop: e, coz: e, cri: e, cuiaba: e, curitiba: e, def: e, des: e, det: e, dev: e, ecn: e, eco: e, edu: e, emp: e, enf: e, eng: e, esp: e, etc: e, eti: e, far: e, feira: e, flog: e, floripa: e, fm: e, fnd: e, fortal: e, fot: e, foz: e, fst: e, g12: e, geo: e, ggf: e, goiania: e, gov: [1, { ac: e, al: e, am: e, ap: e, ba: e, ce: e, df: e, es: e, go: e, ma: e, mg: e, ms: e, mt: e, pa: e, pb: e, pe: e, pi: e, pr: e, rj: e, rn: e, ro: e, rr: e, rs: e, sc: e, se: e, sp: e, to: e }], gru: e, imb: e, ind: e, inf: e, jab: e, jampa: e, jdf: e, joinville: e, jor: e, jus: e, leg: [1, { ac: t, al: t, am: t, ap: t, ba: t, ce: t, df: t, es: t, go: t, ma: t, mg: t, ms: t, mt: t, pa: t, pb: t, pe: t, pi: t, pr: t, rj: t, rn: t, ro: t, rr: t, rs: t, sc: t, se: t, sp: t, to: t }], leilao: e, lel: e, log: e, londrina: e, macapa: e, maceio: e, manaus: e, maringa: e, mat: e, med: e, mil: e, morena: e, mp: e, mus: e, natal: e, net: e, niteroi: e, nom: f, not: e, ntr: e, odo: e, ong: e, org: e, osasco: e, palmas: e, poa: e, ppg: e, pro: e, psc: e, psi: e, pvh: e, qsl: e, radio: e, rec: e, recife: e, rep: e, ribeirao: e, rio: e, riobranco: e, riopreto: e, salvador: e, sampa: e, santamaria: e, santoandre: e, saobernardo: e, saogonca: e, seg: e, sjc: e, slg: e, slz: e, sorocaba: e, srv: e, taxi: e, tc: e, tec: e, teo: e, the: e, tmp: e, trd: e, tur: e, tv: e, udi: e, vet: e, vix: e, vlog: e, wiki: e, zlg: e }], bs: [1, { com: e, edu: e, gov: e, net: e, org: e, we: t }], bt: n, bv: e, bw: [1, { ac: e, co: e, gov: e, net: e, org: e }], by: [1, { gov: e, mil: e, com: e, of: e, mediatech: t }], bz: [1, { co: e, com: e, edu: e, gov: e, net: e, org: e, za: t, mydns: t, gsj: t }], ca: [1, { ab: e, bc: e, mb: e, nb: e, nf: e, nl: e, ns: e, nt: e, nu: e, on: e, pe: e, qc: e, sk: e, yk: e, gc: e, barsy: t, awdev: a, co: t, "no-ip": t, myspreadshop: t, box: t }], cat: e, cc: [1, { cleverapps: t, cloudns: t, ftpaccess: t, "game-server": t, myphotos: t, scrapping: t, twmail: t, csx: t, fantasyleague: t, spawn: [0, { instances: t }] }], cd: s, cf: e, cg: e, ch: [1, { square7: t, cloudns: t, cloudscale: [0, { cust: t, lpg: g, rma: g }], flow: [0, { ae: [0, { alp1: t }], appengine: t }], "linkyard-cloud": t, gotdns: t, dnsking: t, "123website": t, myspreadshop: t, firenet: [0, { "*": t, svc: a }], "12hp": t, "2ix": t, "4lima": t, "lima-city": t }], ci: [1, { ac: e, "xn--aroport-bya": e, aéroport: e, asso: e, co: e, com: e, ed: e, edu: e, go: e, gouv: e, int: e, net: e, or: e, org: e, fin: t }], ck: f, cl: [1, { co: e, gob: e, gov: e, mil: e, cloudns: t }], cm: [1, { co: e, com: e, gov: e, net: e }], cn: [1, { ac: e, com: [1, { amazonaws: [0, { "cn-north-1": [0, { "execute-api": t, "emrappui-prod": t, "emrnotebooks-prod": t, "emrstudio-prod": t, dualstack: _, s3: t, "s3-accesspoint": t, "s3-deprecated": t, "s3-object-lambda": t, "s3-website": t }], "cn-northwest-1": [0, { "execute-api": t, "emrappui-prod": t, "emrnotebooks-prod": t, "emrstudio-prod": t, dualstack: k, s3: t, "s3-accesspoint": t, "s3-object-lambda": t, "s3-website": t }], compute: a, airflow: [0, { "cn-north-1": a, "cn-northwest-1": a }], eb: [0, { "cn-north-1": t, "cn-northwest-1": t }], elb: a }], sagemaker: [0, { "cn-north-1": l, "cn-northwest-1": l }] }], edu: e, gov: e, mil: e, net: e, org: e, "xn--55qx5d": e, 公司: e, "xn--od0alg": e, 網絡: e, "xn--io0a7i": e, 网络: e, ah: e, bj: e, cq: e, fj: e, gd: e, gs: e, gx: e, gz: e, ha: e, hb: e, he: e, hi: e, hk: e, hl: e, hn: e, jl: e, js: e, jx: e, ln: e, mo: e, nm: e, nx: e, qh: e, sc: e, sd: e, sh: [1, { as: t }], sn: e, sx: e, tj: e, tw: e, xj: e, xz: e, yn: e, zj: e, "canva-apps": t, canvasite: b, myqnapcloud: t, quickconnect: y }], co: [1, { com: e, edu: e, gov: e, mil: e, net: e, nom: e, org: e, carrd: t, crd: t, otap: a, leadpages: t, lpages: t, mypi: t, xmit: a, firewalledreplit: o, repl: o, supabase: t }], com: [1, { a2hosted: t, cpserver: t, adobeaemcloud: [2, { dev: a }], africa: t, airkitapps: t, "airkitapps-au": t, aivencloud: t, kasserver: t, amazonaws: [0, { "af-south-1": v, "ap-east-1": B, "ap-northeast-1": N, "ap-northeast-2": N, "ap-northeast-3": v, "ap-south-1": N, "ap-south-2": I, "ap-southeast-1": N, "ap-southeast-2": N, "ap-southeast-3": I, "ap-southeast-4": I, "ap-southeast-5": [0, { "execute-api": t, dualstack: _, s3: t, "s3-accesspoint": t, "s3-deprecated": t, "s3-object-lambda": t, "s3-website": t }], "ca-central-1": T, "ca-west-1": [0, { "execute-api": t, "emrappui-prod": t, "emrnotebooks-prod": t, "emrstudio-prod": t, dualstack: w, s3: t, "s3-accesspoint": t, "s3-accesspoint-fips": t, "s3-fips": t, "s3-object-lambda": t, "s3-website": t }], "eu-central-1": N, "eu-central-2": I, "eu-north-1": B, "eu-south-1": v, "eu-south-2": I, "eu-west-1": [0, { "execute-api": t, "emrappui-prod": t, "emrnotebooks-prod": t, "emrstudio-prod": t, dualstack: _, s3: t, "s3-accesspoint": t, "s3-deprecated": t, "s3-object-lambda": t, "s3-website": t, "analytics-gateway": t, "aws-cloud9": S, cloud9: x }], "eu-west-2": B, "eu-west-3": v, "il-central-1": [0, { "execute-api": t, "emrappui-prod": t, "emrnotebooks-prod": t, "emrstudio-prod": t, dualstack: _, s3: t, "s3-accesspoint": t, "s3-object-lambda": t, "s3-website": t, "aws-cloud9": S, cloud9: [0, { vfs: t }] }], "me-central-1": I, "me-south-1": B, "sa-east-1": v, "us-east-1": [2, { "execute-api": t, "emrappui-prod": t, "emrnotebooks-prod": t, "emrstudio-prod": t, dualstack: w, s3: t, "s3-accesspoint": t, "s3-accesspoint-fips": t, "s3-deprecated": t, "s3-fips": t, "s3-object-lambda": t, "s3-website": t, "analytics-gateway": t, "aws-cloud9": S, cloud9: x }], "us-east-2": C, "us-gov-east-1": A, "us-gov-west-1": A, "us-west-1": T, "us-west-2": C, compute: a, "compute-1": a, airflow: [0, { "af-south-1": a, "ap-east-1": a, "ap-northeast-1": a, "ap-northeast-2": a, "ap-northeast-3": a, "ap-south-1": a, "ap-south-2": a, "ap-southeast-1": a, "ap-southeast-2": a, "ap-southeast-3": a, "ap-southeast-4": a, "ca-central-1": a, "ca-west-1": a, "eu-central-1": a, "eu-central-2": a, "eu-north-1": a, "eu-south-1": a, "eu-south-2": a, "eu-west-1": a, "eu-west-2": a, "eu-west-3": a, "il-central-1": a, "me-central-1": a, "me-south-1": a, "sa-east-1": a, "us-east-1": a, "us-east-2": a, "us-west-1": a, "us-west-2": a }], s3: t, "s3-1": t, "s3-ap-east-1": t, "s3-ap-northeast-1": t, "s3-ap-northeast-2": t, "s3-ap-northeast-3": t, "s3-ap-south-1": t, "s3-ap-southeast-1": t, "s3-ap-southeast-2": t, "s3-ca-central-1": t, "s3-eu-central-1": t, "s3-eu-north-1": t, "s3-eu-west-1": t, "s3-eu-west-2": t, "s3-eu-west-3": t, "s3-external-1": t, "s3-fips-us-gov-east-1": t, "s3-fips-us-gov-west-1": t, "s3-global": [0, { accesspoint: [0, { mrap: t }] }], "s3-me-south-1": t, "s3-sa-east-1": t, "s3-us-east-2": t, "s3-us-gov-east-1": t, "s3-us-gov-west-1": t, "s3-us-west-1": t, "s3-us-west-2": t, "s3-website-ap-northeast-1": t, "s3-website-ap-southeast-1": t, "s3-website-ap-southeast-2": t, "s3-website-eu-west-1": t, "s3-website-sa-east-1": t, "s3-website-us-east-1": t, "s3-website-us-gov-west-1": t, "s3-website-us-west-1": t, "s3-website-us-west-2": t, elb: a }], amazoncognito: [0, { "af-south-1": E, "ap-east-1": E, "ap-northeast-1": E, "ap-northeast-2": E, "ap-northeast-3": E, "ap-south-1": E, "ap-south-2": E, "ap-southeast-1": E, "ap-southeast-2": E, "ap-southeast-3": E, "ap-southeast-4": E, "ca-central-1": E, "ca-west-1": E, "eu-central-1": E, "eu-central-2": E, "eu-north-1": E, "eu-south-1": E, "eu-south-2": E, "eu-west-1": E, "eu-west-2": E, "eu-west-3": E, "il-central-1": E, "me-central-1": E, "me-south-1": E, "sa-east-1": E, "us-east-1": j, "us-east-2": j, "us-gov-west-1": [0, { "auth-fips": t }], "us-west-1": j, "us-west-2": j }], amplifyapp: t, awsapprunner: a, awsapps: t, elasticbeanstalk: [2, { "af-south-1": t, "ap-east-1": t, "ap-northeast-1": t, "ap-northeast-2": t, "ap-northeast-3": t, "ap-south-1": t, "ap-southeast-1": t, "ap-southeast-2": t, "ap-southeast-3": t, "ca-central-1": t, "eu-central-1": t, "eu-north-1": t, "eu-south-1": t, "eu-west-1": t, "eu-west-2": t, "eu-west-3": t, "il-central-1": t, "me-south-1": t, "sa-east-1": t, "us-east-1": t, "us-east-2": t, "us-gov-east-1": t, "us-gov-west-1": t, "us-west-1": t, "us-west-2": t }], awsglobalaccelerator: t, siiites: t, appspacehosted: t, appspaceusercontent: t, "on-aptible": t, myasustor: t, "balena-devices": t, boutir: t, bplaced: t, cafjs: t, "canva-apps": t, "cdn77-storage": t, br: t, cn: t, de: t, eu: t, jpn: t, mex: t, ru: t, sa: t, uk: t, us: t, za: t, "clever-cloud": [0, { services: a }], dnsabr: t, "ip-ddns": t, jdevcloud: t, wpdevcloud: t, "cf-ipfs": t, "cloudflare-ipfs": t, trycloudflare: t, co: t, builtwithdark: t, datadetect: [0, { demo: t, instance: t }], dattolocal: t, dattorelay: t, dattoweb: t, mydatto: t, digitaloceanspaces: a, discordsays: t, discordsez: t, drayddns: t, dreamhosters: t, durumis: t, mydrobo: t, blogdns: t, cechire: t, dnsalias: t, dnsdojo: t, doesntexist: t, dontexist: t, doomdns: t, "dyn-o-saur": t, dynalias: t, "dyndns-at-home": t, "dyndns-at-work": t, "dyndns-blog": t, "dyndns-free": t, "dyndns-home": t, "dyndns-ip": t, "dyndns-mail": t, "dyndns-office": t, "dyndns-pics": t, "dyndns-remote": t, "dyndns-server": t, "dyndns-web": t, "dyndns-wiki": t, "dyndns-work": t, "est-a-la-maison": t, "est-a-la-masion": t, "est-le-patron": t, "est-mon-blogueur": t, "from-ak": t, "from-al": t, "from-ar": t, "from-ca": t, "from-ct": t, "from-dc": t, "from-de": t, "from-fl": t, "from-ga": t, "from-hi": t, "from-ia": t, "from-id": t, "from-il": t, "from-in": t, "from-ks": t, "from-ky": t, "from-ma": t, "from-md": t, "from-mi": t, "from-mn": t, "from-mo": t, "from-ms": t, "from-mt": t, "from-nc": t, "from-nd": t, "from-ne": t, "from-nh": t, "from-nj": t, "from-nm": t, "from-nv": t, "from-oh": t, "from-ok": t, "from-or": t, "from-pa": t, "from-pr": t, "from-ri": t, "from-sc": t, "from-sd": t, "from-tn": t, "from-tx": t, "from-ut": t, "from-va": t, "from-vt": t, "from-wa": t, "from-wi": t, "from-wv": t, "from-wy": t, getmyip: t, gotdns: t, "hobby-site": t, homelinux: t, homeunix: t, iamallama: t, "is-a-anarchist": t, "is-a-blogger": t, "is-a-bookkeeper": t, "is-a-bulls-fan": t, "is-a-caterer": t, "is-a-chef": t, "is-a-conservative": t, "is-a-cpa": t, "is-a-cubicle-slave": t, "is-a-democrat": t, "is-a-designer": t, "is-a-doctor": t, "is-a-financialadvisor": t, "is-a-geek": t, "is-a-green": t, "is-a-guru": t, "is-a-hard-worker": t, "is-a-hunter": t, "is-a-landscaper": t, "is-a-lawyer": t, "is-a-liberal": t, "is-a-libertarian": t, "is-a-llama": t, "is-a-musician": t, "is-a-nascarfan": t, "is-a-nurse": t, "is-a-painter": t, "is-a-personaltrainer": t, "is-a-photographer": t, "is-a-player": t, "is-a-republican": t, "is-a-rockstar": t, "is-a-socialist": t, "is-a-student": t, "is-a-teacher": t, "is-a-techie": t, "is-a-therapist": t, "is-an-accountant": t, "is-an-actor": t, "is-an-actress": t, "is-an-anarchist": t, "is-an-artist": t, "is-an-engineer": t, "is-an-entertainer": t, "is-certified": t, "is-gone": t, "is-into-anime": t, "is-into-cars": t, "is-into-cartoons": t, "is-into-games": t, "is-leet": t, "is-not-certified": t, "is-slick": t, "is-uberleet": t, "is-with-theband": t, "isa-geek": t, "isa-hockeynut": t, issmarterthanyou: t, "likes-pie": t, likescandy: t, "neat-url": t, "saves-the-whales": t, selfip: t, "sells-for-less": t, "sells-for-u": t, servebbs: t, "simple-url": t, "space-to-rent": t, "teaches-yoga": t, writesthisblog: t, ddnsfree: t, ddnsgeek: t, giize: t, gleeze: t, kozow: t, loseyourip: t, ooguy: t, theworkpc: t, mytuleap: t, "tuleap-partners": t, encoreapi: t, evennode: [0, { "eu-1": t, "eu-2": t, "eu-3": t, "eu-4": t, "us-1": t, "us-2": t, "us-3": t, "us-4": t }], onfabrica: t, "fastly-edge": t, "fastly-terrarium": t, "fastvps-server": t, mydobiss: t, firebaseapp: t, fldrv: t, forgeblocks: t, framercanvas: t, "freebox-os": t, freeboxos: t, freemyip: t, aliases121: t, gentapps: t, gentlentapis: t, githubusercontent: t, "0emm": a, appspot: [2, { r: a }], blogspot: t, codespot: t, googleapis: t, googlecode: t, pagespeedmobilizer: t, withgoogle: t, withyoutube: t, grayjayleagues: t, hatenablog: t, hatenadiary: t, herokuapp: t, gr: t, smushcdn: t, wphostedmail: t, wpmucdn: t, pixolino: t, "apps-1and1": t, "live-website": t, dopaas: t, "hosted-by-previder": z, hosteur: [0, { "rag-cloud": t, "rag-cloud-ch": t }], "ik-server": [0, { jcloud: t, "jcloud-ver-jpc": t }], jelastic: [0, { demo: t }], massivegrid: z, wafaicloud: [0, { jed: t, ryd: t }], webadorsite: t, joyent: [0, { cns: a }], lpusercontent: t, linode: [0, { members: t, nodebalancer: a }], linodeobjects: a, linodeusercontent: [0, { ip: t }], barsycenter: t, barsyonline: t, modelscape: t, mwcloudnonprod: t, polyspace: t, mazeplay: t, miniserver: t, atmeta: t, fbsbx: P, meteorapp: L, routingthecloud: t, mydbserver: t, hostedpi: t, "mythic-beasts": [0, { caracal: t, customer: t, fentiger: t, lynx: t, ocelot: t, oncilla: t, onza: t, sphinx: t, vs: t, x: t, yali: t }], nospamproxy: [0, { cloud: [2, { o365: t }] }], "4u": t, nfshost: t, "3utilities": t, blogsyte: t, ciscofreak: t, damnserver: t, ddnsking: t, ditchyourip: t, dnsiskinky: t, dynns: t, geekgalaxy: t, "health-carereform": t, homesecuritymac: t, homesecuritypc: t, myactivedirectory: t, mysecuritycamera: t, myvnc: t, "net-freaks": t, onthewifi: t, point2this: t, quicksytes: t, securitytactics: t, servebeer: t, servecounterstrike: t, serveexchange: t, serveftp: t, servegame: t, servehalflife: t, servehttp: t, servehumour: t, serveirc: t, servemp3: t, servep2p: t, servepics: t, servequake: t, servesarcasm: t, stufftoread: t, unusualperson: t, workisboring: t, myiphost: t, observableusercontent: [0, { static: t }], simplesite: t, orsites: t, operaunite: t, "customer-oci": [0, { "*": t, oci: a, ocp: a, ocs: a }], oraclecloudapps: a, oraclegovcloudapps: a, "authgear-staging": t, authgearapps: t, skygearapp: t, outsystemscloud: t, ownprovider: t, pgfog: t, pagexl: t, gotpantheon: t, paywhirl: a, upsunapp: t, "postman-echo": t, prgmr: [0, { xen: t }], pythonanywhere: L, qa2: t, "alpha-myqnapcloud": t, "dev-myqnapcloud": t, mycloudnas: t, mynascloud: t, myqnapcloud: t, qualifioapp: t, ladesk: t, qbuser: t, quipelements: a, rackmaze: t, "readthedocs-hosted": t, rhcloud: t, onrender: t, render: U, "180r": t, dojin: t, sakuratan: t, sakuraweb: t, x0: t, code: [0, { builder: a, "dev-builder": a, "stg-builder": a }], salesforce: [0, { platform: [0, { "code-builder-stg": [0, { test: [0, { "001": a }] }] }] }], logoip: t, scrysec: t, "firewall-gateway": t, myshopblocks: t, myshopify: t, shopitsite: t, "1kapp": t, appchizi: t, applinzi: t, sinaapp: t, vipsinaapp: t, streamlitapp: t, "try-snowplow": t, "playstation-cloud": t, myspreadshop: t, "w-corp-staticblitz": t, "w-credentialless-staticblitz": t, "w-staticblitz": t, "stackhero-network": t, stdlib: [0, { api: t }], strapiapp: [2, { media: t }], "streak-link": t, streaklinks: t, streakusercontent: t, "temp-dns": t, dsmynas: t, familyds: t, mytabit: t, taveusercontent: t, "tb-hosting": F, reservd: t, thingdustdata: t, "townnews-staging": t, typeform: [0, { pro: t }], hk: t, it: t, vultrobjects: a, wafflecell: t, hotelwithflight: t, "reserve-online": t, cprapid: t, pleskns: t, remotewd: t, wiardweb: [0, { pages: t }], wixsite: t, wixstudio: t, messwithdns: t, "woltlab-demo": t, wpenginepowered: [2, { js: t }], xnbay: [2, { u2: t, "u2-local": t }], yolasite: t }], coop: e, cr: [1, { ac: e, co: e, ed: e, fi: e, go: e, or: e, sa: e }], cu: [1, { com: e, edu: e, gob: e, inf: e, nat: e, net: e, org: e }], cv: [1, { com: e, edu: e, id: e, int: e, net: e, nome: e, org: e, publ: e }], cw: ie, cx: [1, { gov: e, cloudns: t, ath: t, info: t, assessments: t, calculators: t, funnels: t, paynow: t, quizzes: t, researched: t, tests: t }], cy: [1, { ac: e, biz: e, com: [1, { scaleforce: J }], ekloges: e, gov: e, ltd: e, mil: e, net: e, org: e, press: e, pro: e, tm: e }], cz: [1, { contentproxy9: [0, { rsc: t }], realm: t, e4: t, co: t, metacentrum: [0, { cloud: a, custom: t }], muni: [0, { cloud: [0, { flt: t, usr: t }] }] }], de: [1, { bplaced: t, square7: t, com: t, cosidns: ce, dnsupdater: t, "dynamisches-dns": t, "internet-dns": t, "l-o-g-i-n": t, ddnss: [2, { dyn: t, dyndns: t }], "dyn-ip24": t, dyndns1: t, "home-webserver": [2, { dyn: t }], "myhome-server": t, dnshome: t, fuettertdasnetz: t, isteingeek: t, istmein: t, lebtimnetz: t, leitungsen: t, traeumtgerade: t, frusky: a, goip: t, "xn--gnstigbestellen-zvb": t, günstigbestellen: t, "xn--gnstigliefern-wob": t, günstigliefern: t, "hs-heilbronn": [0, { it: [0, { pages: t, "pages-research": t }] }], "dyn-berlin": t, "in-berlin": t, "in-brb": t, "in-butter": t, "in-dsl": t, "in-vpn": t, iservschule: t, "mein-iserv": t, schulplattform: t, schulserver: t, "test-iserv": t, keymachine: t, "git-repos": t, "lcube-server": t, "svn-repos": t, barsy: t, webspaceconfig: t, "123webseite": t, rub: t, "ruhr-uni-bochum": [2, { noc: [0, { io: t }] }], logoip: t, "firewall-gateway": t, "my-gateway": t, "my-router": t, spdns: t, speedpartner: [0, { customer: t }], myspreadshop: t, "taifun-dns": t, "12hp": t, "2ix": t, "4lima": t, "lima-city": t, "dd-dns": t, "dray-dns": t, draydns: t, "dyn-vpn": t, dynvpn: t, "mein-vigor": t, "my-vigor": t, "my-wan": t, "syno-ds": t, "synology-diskstation": t, "synology-ds": t, uberspace: a, "virtual-user": t, virtualuser: t, "community-pro": t, diskussionsbereich: t }], dj: e, dk: [1, { biz: t, co: t, firm: t, reg: t, store: t, "123hjemmeside": t, myspreadshop: t }], dm: V, do: [1, { art: e, com: e, edu: e, gob: e, gov: e, mil: e, net: e, org: e, sld: e, web: e }], dz: [1, { art: e, asso: e, com: e, edu: e, gov: e, net: e, org: e, pol: e, soc: e, tm: e }], ec: [1, { com: e, edu: e, fin: e, gob: e, gov: e, info: e, k12: e, med: e, mil: e, net: e, org: e, pro: e, base: t, official: t }], edu: [1, { rit: [0, { "git-pages": t }] }], ee: [1, { aip: e, com: e, edu: e, fie: e, gov: e, lib: e, med: e, org: e, pri: e, riik: e }], eg: [1, { ac: e, com: e, edu: e, eun: e, gov: e, info: e, me: e, mil: e, name: e, net: e, org: e, sci: e, sport: e, tv: e }], er: f, es: [1, { com: e, edu: e, gob: e, nom: e, org: e, "123miweb": t, myspreadshop: t }], et: [1, { biz: e, com: e, edu: e, gov: e, info: e, name: e, net: e, org: e }], eu: [1, { airkitapps: t, cloudns: t, dogado: [0, { jelastic: t }], barsy: t, spdns: t, transurl: a, diskstation: t }], fi: [1, { aland: e, dy: t, "xn--hkkinen-5wa": t, häkkinen: t, iki: t, cloudplatform: [0, { fi: t }], datacenter: [0, { demo: t, paas: t }], kapsi: t, "123kotisivu": t, myspreadshop: t }], fj: [1, { ac: e, biz: e, com: e, gov: e, info: e, mil: e, name: e, net: e, org: e, pro: e }], fk: f, fm: [1, { com: e, edu: e, net: e, org: e, radio: t, user: a }], fo: e, fr: [1, { asso: e, com: e, gouv: e, nom: e, prd: e, tm: e, avoues: e, cci: e, greta: e, "huissier-justice": e, "en-root": t, "fbx-os": t, fbxos: t, "freebox-os": t, freeboxos: t, goupile: t, "123siteweb": t, "on-web": t, "chirurgiens-dentistes-en-france": t, dedibox: t, aeroport: t, avocat: t, chambagri: t, "chirurgiens-dentistes": t, "experts-comptables": t, medecin: t, notaires: t, pharmacien: t, port: t, veterinaire: t, myspreadshop: t, ynh: t }], ga: e, gb: e, gd: [1, { edu: e, gov: e }], ge: [1, { com: e, edu: e, gov: e, net: e, org: e, pvt: e, school: e }], gf: e, gg: [1, { co: e, net: e, org: e, botdash: t, kaas: t, stackit: t, panel: [2, { daemon: t }] }], gh: [1, { com: e, edu: e, gov: e, mil: e, org: e }], gi: [1, { com: e, edu: e, gov: e, ltd: e, mod: e, org: e }], gl: [1, { co: e, com: e, edu: e, net: e, org: e, biz: t }], gm: e, gn: [1, { ac: e, com: e, edu: e, gov: e, net: e, org: e }], gov: e, gp: [1, { asso: e, com: e, edu: e, mobi: e, net: e, org: e }], gq: e, gr: [1, { com: e, edu: e, gov: e, net: e, org: e, barsy: t, simplesite: t }], gs: e, gt: [1, { com: e, edu: e, gob: e, ind: e, mil: e, net: e, org: e }], gu: [1, { com: e, edu: e, gov: e, guam: e, info: e, net: e, org: e, web: e }], gw: e, gy: V, hk: [1, { com: e, edu: e, gov: e, idv: e, net: e, org: e, "xn--ciqpn": e, 个人: e, "xn--gmqw5a": e, 個人: e, "xn--55qx5d": e, 公司: e, "xn--mxtq1m": e, 政府: e, "xn--lcvr32d": e, 敎育: e, "xn--wcvs22d": e, 教育: e, "xn--gmq050i": e, 箇人: e, "xn--uc0atv": e, 組織: e, "xn--uc0ay4a": e, 組织: e, "xn--od0alg": e, 網絡: e, "xn--zf0avx": e, 網络: e, "xn--mk0axi": e, 组織: e, "xn--tn0ag": e, 组织: e, "xn--od0aq3b": e, 网絡: e, "xn--io0a7i": e, 网络: e, inc: t, ltd: t }], hm: e, hn: [1, { com: e, edu: e, gob: e, mil: e, net: e, org: e }], hr: [1, { com: e, from: e, iz: e, name: e, brendly: Q, free: t }], ht: [1, { adult: e, art: e, asso: e, com: e, coop: e, edu: e, firm: e, gouv: e, info: e, med: e, net: e, org: e, perso: e, pol: e, pro: e, rel: e, shop: e, rt: t }], hu: [1, { 2e3: e, agrar: e, bolt: e, casino: e, city: e, co: e, erotica: e, erotika: e, film: e, forum: e, games: e, hotel: e, info: e, ingatlan: e, jogasz: e, konyvelo: e, lakas: e, media: e, news: e, org: e, priv: e, reklam: e, sex: e, shop: e, sport: e, suli: e, szex: e, tm: e, tozsde: e, utazas: e, video: e }], id: [1, { ac: e, biz: e, co: e, desa: e, go: e, mil: e, my: e, net: e, or: e, ponpes: e, sch: e, web: e }], ie: [1, { gov: e, myspreadshop: t }], il: [1, { ac: e, co: [1, { ravpage: t, mytabit: t, tabitorder: t }], gov: e, idf: e, k12: e, muni: e, net: e, org: e }], "xn--4dbrk0ce": [1, { "xn--4dbgdty6c": e, "xn--5dbhl8d": e, "xn--8dbq2a": e, "xn--hebda8b": e }], ישראל: [1, { אקדמיה: e, ישוב: e, צהל: e, ממשל: e }], im: [1, { ac: e, co: [1, { ltd: e, plc: e }], com: e, net: e, org: e, tt: e, tv: e }], in: [1, { "5g": e, "6g": e, ac: e, ai: e, am: e, bihar: e, biz: e, business: e, ca: e, cn: e, co: e, com: e, coop: e, cs: e, delhi: e, dr: e, edu: e, er: e, firm: e, gen: e, gov: e, gujarat: e, ind: e, info: e, int: e, internet: e, io: e, me: e, mil: e, net: e, nic: e, org: e, pg: e, post: e, pro: e, res: e, travel: e, tv: e, uk: e, up: e, us: e, cloudns: t, barsy: t, web: t, supabase: t }], info: [1, { cloudns: t, "dynamic-dns": t, "barrel-of-knowledge": t, "barrell-of-knowledge": t, dyndns: t, "for-our": t, "groks-the": t, "groks-this": t, "here-for-more": t, knowsitall: t, selfip: t, webhop: t, barsy: t, mayfirst: t, mittwald: t, mittwaldserver: t, typo3server: t, dvrcam: t, ilovecollege: t, "no-ip": t, forumz: t, nsupdate: t, dnsupdate: t, "v-info": t }], int: [1, { eu: e }], io: [1, { 2038: t, co: e, com: e, edu: e, gov: e, mil: e, net: e, nom: e, org: e, "on-acorn": a, myaddr: t, apigee: t, "b-data": t, beagleboard: t, bitbucket: t, bluebite: t, boxfuse: t, brave: [0, { s: a }], browsersafetymark: t, bigv: [0, { uk0: t }], cleverapps: t, dappnode: [0, { dyndns: t }], darklang: t, definima: t, dedyn: t, "fh-muenster": t, shw: t, forgerock: [0, { id: t }], github: t, gitlab: t, lolipop: t, "hasura-app": t, hostyhosting: t, hypernode: t, moonscale: a, beebyte: z, beebyteapp: [0, { sekd1: t }], jele: t, webthings: t, loginline: t, barsy: t, azurecontainer: a, ngrok: [2, { ap: t, au: t, eu: t, in: t, jp: t, sa: t, us: t }], nodeart: [0, { stage: t }], pantheonsite: t, pstmn: [2, { mock: t }], protonet: t, qcx: [2, { sys: a }], qoto: t, vaporcloud: t, myrdbx: t, "rb-hosting": F, "on-k3s": a, "on-rio": a, readthedocs: t, resindevice: t, resinstaging: [0, { devices: t }], hzc: t, sandcats: t, scrypted: [0, { client: t }], "mo-siemens": t, lair: P, stolos: a, musician: t, utwente: t, edugit: t, telebit: t, thingdust: [0, { dev: le, disrec: le, prod: Dt, testing: le }], tickets: t, webflow: t, webflowtest: t, editorx: t, wixstudio: t, basicserver: t, virtualserver: t }], iq: r, ir: [1, { ac: e, co: e, gov: e, id: e, net: e, org: e, sch: e, "xn--mgba3a4f16a": e, ایران: e, "xn--mgba3a4fra": e, ايران: e, arvanedge: t }], is: e, it: [1, { edu: e, gov: e, abr: e, abruzzo: e, "aosta-valley": e, aostavalley: e, bas: e, basilicata: e, cal: e, calabria: e, cam: e, campania: e, "emilia-romagna": e, emiliaromagna: e, emr: e, "friuli-v-giulia": e, "friuli-ve-giulia": e, "friuli-vegiulia": e, "friuli-venezia-giulia": e, "friuli-veneziagiulia": e, "friuli-vgiulia": e, "friuliv-giulia": e, "friulive-giulia": e, friulivegiulia: e, "friulivenezia-giulia": e, friuliveneziagiulia: e, friulivgiulia: e, fvg: e, laz: e, lazio: e, lig: e, liguria: e, lom: e, lombardia: e, lombardy: e, lucania: e, mar: e, marche: e, mol: e, molise: e, piedmont: e, piemonte: e, pmn: e, pug: e, puglia: e, sar: e, sardegna: e, sardinia: e, sic: e, sicilia: e, sicily: e, taa: e, tos: e, toscana: e, "trentin-sud-tirol": e, "xn--trentin-sd-tirol-rzb": e, "trentin-süd-tirol": e, "trentin-sudtirol": e, "xn--trentin-sdtirol-7vb": e, "trentin-südtirol": e, "trentin-sued-tirol": e, "trentin-suedtirol": e, trentino: e, "trentino-a-adige": e, "trentino-aadige": e, "trentino-alto-adige": e, "trentino-altoadige": e, "trentino-s-tirol": e, "trentino-stirol": e, "trentino-sud-tirol": e, "xn--trentino-sd-tirol-c3b": e, "trentino-süd-tirol": e, "trentino-sudtirol": e, "xn--trentino-sdtirol-szb": e, "trentino-südtirol": e, "trentino-sued-tirol": e, "trentino-suedtirol": e, "trentinoa-adige": e, trentinoaadige: e, "trentinoalto-adige": e, trentinoaltoadige: e, "trentinos-tirol": e, trentinostirol: e, "trentinosud-tirol": e, "xn--trentinosd-tirol-rzb": e, "trentinosüd-tirol": e, trentinosudtirol: e, "xn--trentinosdtirol-7vb": e, trentinosüdtirol: e, "trentinosued-tirol": e, trentinosuedtirol: e, "trentinsud-tirol": e, "xn--trentinsd-tirol-6vb": e, "trentinsüd-tirol": e, trentinsudtirol: e, "xn--trentinsdtirol-nsb": e, trentinsüdtirol: e, "trentinsued-tirol": e, trentinsuedtirol: e, tuscany: e, umb: e, umbria: e, "val-d-aosta": e, "val-daosta": e, "vald-aosta": e, valdaosta: e, "valle-aosta": e, "valle-d-aosta": e, "valle-daosta": e, valleaosta: e, "valled-aosta": e, valledaosta: e, "vallee-aoste": e, "xn--valle-aoste-ebb": e, "vallée-aoste": e, "vallee-d-aoste": e, "xn--valle-d-aoste-ehb": e, "vallée-d-aoste": e, valleeaoste: e, "xn--valleaoste-e7a": e, valléeaoste: e, valleedaoste: e, "xn--valledaoste-ebb": e, valléedaoste: e, vao: e, vda: e, ven: e, veneto: e, ag: e, agrigento: e, al: e, alessandria: e, "alto-adige": e, altoadige: e, an: e, ancona: e, "andria-barletta-trani": e, "andria-trani-barletta": e, andriabarlettatrani: e, andriatranibarletta: e, ao: e, aosta: e, aoste: e, ap: e, aq: e, aquila: e, ar: e, arezzo: e, "ascoli-piceno": e, ascolipiceno: e, asti: e, at: e, av: e, avellino: e, ba: e, balsan: e, "balsan-sudtirol": e, "xn--balsan-sdtirol-nsb": e, "balsan-südtirol": e, "balsan-suedtirol": e, bari: e, "barletta-trani-andria": e, barlettatraniandria: e, belluno: e, benevento: e, bergamo: e, bg: e, bi: e, biella: e, bl: e, bn: e, bo: e, bologna: e, bolzano: e, "bolzano-altoadige": e, bozen: e, "bozen-sudtirol": e, "xn--bozen-sdtirol-2ob": e, "bozen-südtirol": e, "bozen-suedtirol": e, br: e, brescia: e, brindisi: e, bs: e, bt: e, bulsan: e, "bulsan-sudtirol": e, "xn--bulsan-sdtirol-nsb": e, "bulsan-südtirol": e, "bulsan-suedtirol": e, bz: e, ca: e, cagliari: e, caltanissetta: e, "campidano-medio": e, campidanomedio: e, campobasso: e, "carbonia-iglesias": e, carboniaiglesias: e, "carrara-massa": e, carraramassa: e, caserta: e, catania: e, catanzaro: e, cb: e, ce: e, "cesena-forli": e, "xn--cesena-forl-mcb": e, "cesena-forlì": e, cesenaforli: e, "xn--cesenaforl-i8a": e, cesenaforlì: e, ch: e, chieti: e, ci: e, cl: e, cn: e, co: e, como: e, cosenza: e, cr: e, cremona: e, crotone: e, cs: e, ct: e, cuneo: e, cz: e, "dell-ogliastra": e, dellogliastra: e, en: e, enna: e, fc: e, fe: e, fermo: e, ferrara: e, fg: e, fi: e, firenze: e, florence: e, fm: e, foggia: e, "forli-cesena": e, "xn--forl-cesena-fcb": e, "forlì-cesena": e, forlicesena: e, "xn--forlcesena-c8a": e, forlìcesena: e, fr: e, frosinone: e, ge: e, genoa: e, genova: e, go: e, gorizia: e, gr: e, grosseto: e, "iglesias-carbonia": e, iglesiascarbonia: e, im: e, imperia: e, is: e, isernia: e, kr: e, "la-spezia": e, laquila: e, laspezia: e, latina: e, lc: e, le: e, lecce: e, lecco: e, li: e, livorno: e, lo: e, lodi: e, lt: e, lu: e, lucca: e, macerata: e, mantova: e, "massa-carrara": e, massacarrara: e, matera: e, mb: e, mc: e, me: e, "medio-campidano": e, mediocampidano: e, messina: e, mi: e, milan: e, milano: e, mn: e, mo: e, modena: e, monza: e, "monza-brianza": e, "monza-e-della-brianza": e, monzabrianza: e, monzaebrianza: e, monzaedellabrianza: e, ms: e, mt: e, na: e, naples: e, napoli: e, no: e, novara: e, nu: e, nuoro: e, og: e, ogliastra: e, "olbia-tempio": e, olbiatempio: e, or: e, oristano: e, ot: e, pa: e, padova: e, padua: e, palermo: e, parma: e, pavia: e, pc: e, pd: e, pe: e, perugia: e, "pesaro-urbino": e, pesarourbino: e, pescara: e, pg: e, pi: e, piacenza: e, pisa: e, pistoia: e, pn: e, po: e, pordenone: e, potenza: e, pr: e, prato: e, pt: e, pu: e, pv: e, pz: e, ra: e, ragusa: e, ravenna: e, rc: e, re: e, "reggio-calabria": e, "reggio-emilia": e, reggiocalabria: e, reggioemilia: e, rg: e, ri: e, rieti: e, rimini: e, rm: e, rn: e, ro: e, roma: e, rome: e, rovigo: e, sa: e, salerno: e, sassari: e, savona: e, si: e, siena: e, siracusa: e, so: e, sondrio: e, sp: e, sr: e, ss: e, "xn--sdtirol-n2a": e, südtirol: e, suedtirol: e, sv: e, ta: e, taranto: e, te: e, "tempio-olbia": e, tempioolbia: e, teramo: e, terni: e, tn: e, to: e, torino: e, tp: e, tr: e, "trani-andria-barletta": e, "trani-barletta-andria": e, traniandriabarletta: e, tranibarlettaandria: e, trapani: e, trento: e, treviso: e, trieste: e, ts: e, turin: e, tv: e, ud: e, udine: e, "urbino-pesaro": e, urbinopesaro: e, va: e, varese: e, vb: e, vc: e, ve: e, venezia: e, venice: e, verbania: e, vercelli: e, verona: e, vi: e, "vibo-valentia": e, vibovalentia: e, vicenza: e, viterbo: e, vr: e, vs: e, vt: e, vv: e, "12chars": t, ibxos: t, iliadboxos: t, neen: [0, { jc: t }], "123homepage": t, "16-b": t, "32-b": t, "64-b": t, myspreadshop: t, syncloud: t }], je: [1, { co: e, net: e, org: e, of: t }], jm: f, jo: [1, { agri: e, ai: e, com: e, edu: e, eng: e, fm: e, gov: e, mil: e, net: e, org: e, per: e, phd: e, sch: e, tv: e }], jobs: e, jp: [1, { ac: e, ad: e, co: e, ed: e, go: e, gr: e, lg: e, ne: [1, { aseinet: q, gehirn: t, ivory: t, "mail-box": t, mints: t, mokuren: t, opal: t, sakura: t, sumomo: t, topaz: t }], or: e, aichi: [1, { aisai: e, ama: e, anjo: e, asuke: e, chiryu: e, chita: e, fuso: e, gamagori: e, handa: e, hazu: e, hekinan: e, higashiura: e, ichinomiya: e, inazawa: e, inuyama: e, isshiki: e, iwakura: e, kanie: e, kariya: e, kasugai: e, kira: e, kiyosu: e, komaki: e, konan: e, kota: e, mihama: e, miyoshi: e, nishio: e, nisshin: e, obu: e, oguchi: e, oharu: e, okazaki: e, owariasahi: e, seto: e, shikatsu: e, shinshiro: e, shitara: e, tahara: e, takahama: e, tobishima: e, toei: e, togo: e, tokai: e, tokoname: e, toyoake: e, toyohashi: e, toyokawa: e, toyone: e, toyota: e, tsushima: e, yatomi: e }], akita: [1, { akita: e, daisen: e, fujisato: e, gojome: e, hachirogata: e, happou: e, higashinaruse: e, honjo: e, honjyo: e, ikawa: e, kamikoani: e, kamioka: e, katagami: e, kazuno: e, kitaakita: e, kosaka: e, kyowa: e, misato: e, mitane: e, moriyoshi: e, nikaho: e, noshiro: e, odate: e, oga: e, ogata: e, semboku: e, yokote: e, yurihonjo: e }], aomori: [1, { aomori: e, gonohe: e, hachinohe: e, hashikami: e, hiranai: e, hirosaki: e, itayanagi: e, kuroishi: e, misawa: e, mutsu: e, nakadomari: e, noheji: e, oirase: e, owani: e, rokunohe: e, sannohe: e, shichinohe: e, shingo: e, takko: e, towada: e, tsugaru: e, tsuruta: e }], chiba: [1, { abiko: e, asahi: e, chonan: e, chosei: e, choshi: e, chuo: e, funabashi: e, futtsu: e, hanamigawa: e, ichihara: e, ichikawa: e, ichinomiya: e, inzai: e, isumi: e, kamagaya: e, kamogawa: e, kashiwa: e, katori: e, katsuura: e, kimitsu: e, kisarazu: e, kozaki: e, kujukuri: e, kyonan: e, matsudo: e, midori: e, mihama: e, minamiboso: e, mobara: e, mutsuzawa: e, nagara: e, nagareyama: e, narashino: e, narita: e, noda: e, oamishirasato: e, omigawa: e, onjuku: e, otaki: e, sakae: e, sakura: e, shimofusa: e, shirako: e, shiroi: e, shisui: e, sodegaura: e, sosa: e, tako: e, tateyama: e, togane: e, tohnosho: e, tomisato: e, urayasu: e, yachimata: e, yachiyo: e, yokaichiba: e, yokoshibahikari: e, yotsukaido: e }], ehime: [1, { ainan: e, honai: e, ikata: e, imabari: e, iyo: e, kamijima: e, kihoku: e, kumakogen: e, masaki: e, matsuno: e, matsuyama: e, namikata: e, niihama: e, ozu: e, saijo: e, seiyo: e, shikokuchuo: e, tobe: e, toon: e, uchiko: e, uwajima: e, yawatahama: e }], fukui: [1, { echizen: e, eiheiji: e, fukui: e, ikeda: e, katsuyama: e, mihama: e, minamiechizen: e, obama: e, ohi: e, ono: e, sabae: e, sakai: e, takahama: e, tsuruga: e, wakasa: e }], fukuoka: [1, { ashiya: e, buzen: e, chikugo: e, chikuho: e, chikujo: e, chikushino: e, chikuzen: e, chuo: e, dazaifu: e, fukuchi: e, hakata: e, higashi: e, hirokawa: e, hisayama: e, iizuka: e, inatsuki: e, kaho: e, kasuga: e, kasuya: e, kawara: e, keisen: e, koga: e, kurate: e, kurogi: e, kurume: e, minami: e, miyako: e, miyama: e, miyawaka: e, mizumaki: e, munakata: e, nakagawa: e, nakama: e, nishi: e, nogata: e, ogori: e, okagaki: e, okawa: e, oki: e, omuta: e, onga: e, onojo: e, oto: e, saigawa: e, sasaguri: e, shingu: e, shinyoshitomi: e, shonai: e, soeda: e, sue: e, tachiarai: e, tagawa: e, takata: e, toho: e, toyotsu: e, tsuiki: e, ukiha: e, umi: e, usui: e, yamada: e, yame: e, yanagawa: e, yukuhashi: e }], fukushima: [1, { aizubange: e, aizumisato: e, aizuwakamatsu: e, asakawa: e, bandai: e, date: e, fukushima: e, furudono: e, futaba: e, hanawa: e, higashi: e, hirata: e, hirono: e, iitate: e, inawashiro: e, ishikawa: e, iwaki: e, izumizaki: e, kagamiishi: e, kaneyama: e, kawamata: e, kitakata: e, kitashiobara: e, koori: e, koriyama: e, kunimi: e, miharu: e, mishima: e, namie: e, nango: e, nishiaizu: e, nishigo: e, okuma: e, omotego: e, ono: e, otama: e, samegawa: e, shimogo: e, shirakawa: e, showa: e, soma: e, sukagawa: e, taishin: e, tamakawa: e, tanagura: e, tenei: e, yabuki: e, yamato: e, yamatsuri: e, yanaizu: e, yugawa: e }], gifu: [1, { anpachi: e, ena: e, gifu: e, ginan: e, godo: e, gujo: e, hashima: e, hichiso: e, hida: e, higashishirakawa: e, ibigawa: e, ikeda: e, kakamigahara: e, kani: e, kasahara: e, kasamatsu: e, kawaue: e, kitagata: e, mino: e, minokamo: e, mitake: e, mizunami: e, motosu: e, nakatsugawa: e, ogaki: e, sakahogi: e, seki: e, sekigahara: e, shirakawa: e, tajimi: e, takayama: e, tarui: e, toki: e, tomika: e, wanouchi: e, yamagata: e, yaotsu: e, yoro: e }], gunma: [1, { annaka: e, chiyoda: e, fujioka: e, higashiagatsuma: e, isesaki: e, itakura: e, kanna: e, kanra: e, katashina: e, kawaba: e, kiryu: e, kusatsu: e, maebashi: e, meiwa: e, midori: e, minakami: e, naganohara: e, nakanojo: e, nanmoku: e, numata: e, oizumi: e, ora: e, ota: e, shibukawa: e, shimonita: e, shinto: e, showa: e, takasaki: e, takayama: e, tamamura: e, tatebayashi: e, tomioka: e, tsukiyono: e, tsumagoi: e, ueno: e, yoshioka: e }], hiroshima: [1, { asaminami: e, daiwa: e, etajima: e, fuchu: e, fukuyama: e, hatsukaichi: e, higashihiroshima: e, hongo: e, jinsekikogen: e, kaita: e, kui: e, kumano: e, kure: e, mihara: e, miyoshi: e, naka: e, onomichi: e, osakikamijima: e, otake: e, saka: e, sera: e, seranishi: e, shinichi: e, shobara: e, takehara: e }], hokkaido: [1, { abashiri: e, abira: e, aibetsu: e, akabira: e, akkeshi: e, asahikawa: e, ashibetsu: e, ashoro: e, assabu: e, atsuma: e, bibai: e, biei: e, bifuka: e, bihoro: e, biratori: e, chippubetsu: e, chitose: e, date: e, ebetsu: e, embetsu: e, eniwa: e, erimo: e, esan: e, esashi: e, fukagawa: e, fukushima: e, furano: e, furubira: e, haboro: e, hakodate: e, hamatonbetsu: e, hidaka: e, higashikagura: e, higashikawa: e, hiroo: e, hokuryu: e, hokuto: e, honbetsu: e, horokanai: e, horonobe: e, ikeda: e, imakane: e, ishikari: e, iwamizawa: e, iwanai: e, kamifurano: e, kamikawa: e, kamishihoro: e, kamisunagawa: e, kamoenai: e, kayabe: e, kembuchi: e, kikonai: e, kimobetsu: e, kitahiroshima: e, kitami: e, kiyosato: e, koshimizu: e, kunneppu: e, kuriyama: e, kuromatsunai: e, kushiro: e, kutchan: e, kyowa: e, mashike: e, matsumae: e, mikasa: e, minamifurano: e, mombetsu: e, moseushi: e, mukawa: e, muroran: e, naie: e, nakagawa: e, nakasatsunai: e, nakatombetsu: e, nanae: e, nanporo: e, nayoro: e, nemuro: e, niikappu: e, niki: e, nishiokoppe: e, noboribetsu: e, numata: e, obihiro: e, obira: e, oketo: e, okoppe: e, otaru: e, otobe: e, otofuke: e, otoineppu: e, oumu: e, ozora: e, pippu: e, rankoshi: e, rebun: e, rikubetsu: e, rishiri: e, rishirifuji: e, saroma: e, sarufutsu: e, shakotan: e, shari: e, shibecha: e, shibetsu: e, shikabe: e, shikaoi: e, shimamaki: e, shimizu: e, shimokawa: e, shinshinotsu: e, shintoku: e, shiranuka: e, shiraoi: e, shiriuchi: e, sobetsu: e, sunagawa: e, taiki: e, takasu: e, takikawa: e, takinoue: e, teshikaga: e, tobetsu: e, tohma: e, tomakomai: e, tomari: e, toya: e, toyako: e, toyotomi: e, toyoura: e, tsubetsu: e, tsukigata: e, urakawa: e, urausu: e, uryu: e, utashinai: e, wakkanai: e, wassamu: e, yakumo: e, yoichi: e }], hyogo: [1, { aioi: e, akashi: e, ako: e, amagasaki: e, aogaki: e, asago: e, ashiya: e, awaji: e, fukusaki: e, goshiki: e, harima: e, himeji: e, ichikawa: e, inagawa: e, itami: e, kakogawa: e, kamigori: e, kamikawa: e, kasai: e, kasuga: e, kawanishi: e, miki: e, minamiawaji: e, nishinomiya: e, nishiwaki: e, ono: e, sanda: e, sannan: e, sasayama: e, sayo: e, shingu: e, shinonsen: e, shiso: e, sumoto: e, taishi: e, taka: e, takarazuka: e, takasago: e, takino: e, tamba: e, tatsuno: e, toyooka: e, yabu: e, yashiro: e, yoka: e, yokawa: e }], ibaraki: [1, { ami: e, asahi: e, bando: e, chikusei: e, daigo: e, fujishiro: e, hitachi: e, hitachinaka: e, hitachiomiya: e, hitachiota: e, ibaraki: e, ina: e, inashiki: e, itako: e, iwama: e, joso: e, kamisu: e, kasama: e, kashima: e, kasumigaura: e, koga: e, miho: e, mito: e, moriya: e, naka: e, namegata: e, oarai: e, ogawa: e, omitama: e, ryugasaki: e, sakai: e, sakuragawa: e, shimodate: e, shimotsuma: e, shirosato: e, sowa: e, suifu: e, takahagi: e, tamatsukuri: e, tokai: e, tomobe: e, tone: e, toride: e, tsuchiura: e, tsukuba: e, uchihara: e, ushiku: e, yachiyo: e, yamagata: e, yawara: e, yuki: e }], ishikawa: [1, { anamizu: e, hakui: e, hakusan: e, kaga: e, kahoku: e, kanazawa: e, kawakita: e, komatsu: e, nakanoto: e, nanao: e, nomi: e, nonoichi: e, noto: e, shika: e, suzu: e, tsubata: e, tsurugi: e, uchinada: e, wajima: e }], iwate: [1, { fudai: e, fujisawa: e, hanamaki: e, hiraizumi: e, hirono: e, ichinohe: e, ichinoseki: e, iwaizumi: e, iwate: e, joboji: e, kamaishi: e, kanegasaki: e, karumai: e, kawai: e, kitakami: e, kuji: e, kunohe: e, kuzumaki: e, miyako: e, mizusawa: e, morioka: e, ninohe: e, noda: e, ofunato: e, oshu: e, otsuchi: e, rikuzentakata: e, shiwa: e, shizukuishi: e, sumita: e, tanohata: e, tono: e, yahaba: e, yamada: e }], kagawa: [1, { ayagawa: e, higashikagawa: e, kanonji: e, kotohira: e, manno: e, marugame: e, mitoyo: e, naoshima: e, sanuki: e, tadotsu: e, takamatsu: e, tonosho: e, uchinomi: e, utazu: e, zentsuji: e }], kagoshima: [1, { akune: e, amami: e, hioki: e, isa: e, isen: e, izumi: e, kagoshima: e, kanoya: e, kawanabe: e, kinko: e, kouyama: e, makurazaki: e, matsumoto: e, minamitane: e, nakatane: e, nishinoomote: e, satsumasendai: e, soo: e, tarumizu: e, yusui: e }], kanagawa: [1, { aikawa: e, atsugi: e, ayase: e, chigasaki: e, ebina: e, fujisawa: e, hadano: e, hakone: e, hiratsuka: e, isehara: e, kaisei: e, kamakura: e, kiyokawa: e, matsuda: e, minamiashigara: e, miura: e, nakai: e, ninomiya: e, odawara: e, oi: e, oiso: e, sagamihara: e, samukawa: e, tsukui: e, yamakita: e, yamato: e, yokosuka: e, yugawara: e, zama: e, zushi: e }], kochi: [1, { aki: e, geisei: e, hidaka: e, higashitsuno: e, ino: e, kagami: e, kami: e, kitagawa: e, kochi: e, mihara: e, motoyama: e, muroto: e, nahari: e, nakamura: e, nankoku: e, nishitosa: e, niyodogawa: e, ochi: e, okawa: e, otoyo: e, otsuki: e, sakawa: e, sukumo: e, susaki: e, tosa: e, tosashimizu: e, toyo: e, tsuno: e, umaji: e, yasuda: e, yusuhara: e }], kumamoto: [1, { amakusa: e, arao: e, aso: e, choyo: e, gyokuto: e, kamiamakusa: e, kikuchi: e, kumamoto: e, mashiki: e, mifune: e, minamata: e, minamioguni: e, nagasu: e, nishihara: e, oguni: e, ozu: e, sumoto: e, takamori: e, uki: e, uto: e, yamaga: e, yamato: e, yatsushiro: e }], kyoto: [1, { ayabe: e, fukuchiyama: e, higashiyama: e, ide: e, ine: e, joyo: e, kameoka: e, kamo: e, kita: e, kizu: e, kumiyama: e, kyotamba: e, kyotanabe: e, kyotango: e, maizuru: e, minami: e, minamiyamashiro: e, miyazu: e, muko: e, nagaokakyo: e, nakagyo: e, nantan: e, oyamazaki: e, sakyo: e, seika: e, tanabe: e, uji: e, ujitawara: e, wazuka: e, yamashina: e, yawata: e }], mie: [1, { asahi: e, inabe: e, ise: e, kameyama: e, kawagoe: e, kiho: e, kisosaki: e, kiwa: e, komono: e, kumano: e, kuwana: e, matsusaka: e, meiwa: e, mihama: e, minamiise: e, misugi: e, miyama: e, nabari: e, shima: e, suzuka: e, tado: e, taiki: e, taki: e, tamaki: e, toba: e, tsu: e, udono: e, ureshino: e, watarai: e, yokkaichi: e }], miyagi: [1, { furukawa: e, higashimatsushima: e, ishinomaki: e, iwanuma: e, kakuda: e, kami: e, kawasaki: e, marumori: e, matsushima: e, minamisanriku: e, misato: e, murata: e, natori: e, ogawara: e, ohira: e, onagawa: e, osaki: e, rifu: e, semine: e, shibata: e, shichikashuku: e, shikama: e, shiogama: e, shiroishi: e, tagajo: e, taiwa: e, tome: e, tomiya: e, wakuya: e, watari: e, yamamoto: e, zao: e }], miyazaki: [1, { aya: e, ebino: e, gokase: e, hyuga: e, kadogawa: e, kawaminami: e, kijo: e, kitagawa: e, kitakata: e, kitaura: e, kobayashi: e, kunitomi: e, kushima: e, mimata: e, miyakonojo: e, miyazaki: e, morotsuka: e, nichinan: e, nishimera: e, nobeoka: e, saito: e, shiiba: e, shintomi: e, takaharu: e, takanabe: e, takazaki: e, tsuno: e }], nagano: [1, { achi: e, agematsu: e, anan: e, aoki: e, asahi: e, azumino: e, chikuhoku: e, chikuma: e, chino: e, fujimi: e, hakuba: e, hara: e, hiraya: e, iida: e, iijima: e, iiyama: e, iizuna: e, ikeda: e, ikusaka: e, ina: e, karuizawa: e, kawakami: e, kiso: e, kisofukushima: e, kitaaiki: e, komagane: e, komoro: e, matsukawa: e, matsumoto: e, miasa: e, minamiaiki: e, minamimaki: e, minamiminowa: e, minowa: e, miyada: e, miyota: e, mochizuki: e, nagano: e, nagawa: e, nagiso: e, nakagawa: e, nakano: e, nozawaonsen: e, obuse: e, ogawa: e, okaya: e, omachi: e, omi: e, ookuwa: e, ooshika: e, otaki: e, otari: e, sakae: e, sakaki: e, saku: e, sakuho: e, shimosuwa: e, shinanomachi: e, shiojiri: e, suwa: e, suzaka: e, takagi: e, takamori: e, takayama: e, tateshina: e, tatsuno: e, togakushi: e, togura: e, tomi: e, ueda: e, wada: e, yamagata: e, yamanouchi: e, yasaka: e, yasuoka: e }], nagasaki: [1, { chijiwa: e, futsu: e, goto: e, hasami: e, hirado: e, iki: e, isahaya: e, kawatana: e, kuchinotsu: e, matsuura: e, nagasaki: e, obama: e, omura: e, oseto: e, saikai: e, sasebo: e, seihi: e, shimabara: e, shinkamigoto: e, togitsu: e, tsushima: e, unzen: e }], nara: [1, { ando: e, gose: e, heguri: e, higashiyoshino: e, ikaruga: e, ikoma: e, kamikitayama: e, kanmaki: e, kashiba: e, kashihara: e, katsuragi: e, kawai: e, kawakami: e, kawanishi: e, koryo: e, kurotaki: e, mitsue: e, miyake: e, nara: e, nosegawa: e, oji: e, ouda: e, oyodo: e, sakurai: e, sango: e, shimoichi: e, shimokitayama: e, shinjo: e, soni: e, takatori: e, tawaramoto: e, tenkawa: e, tenri: e, uda: e, yamatokoriyama: e, yamatotakada: e, yamazoe: e, yoshino: e }], niigata: [1, { aga: e, agano: e, gosen: e, itoigawa: e, izumozaki: e, joetsu: e, kamo: e, kariwa: e, kashiwazaki: e, minamiuonuma: e, mitsuke: e, muika: e, murakami: e, myoko: e, nagaoka: e, niigata: e, ojiya: e, omi: e, sado: e, sanjo: e, seiro: e, seirou: e, sekikawa: e, shibata: e, tagami: e, tainai: e, tochio: e, tokamachi: e, tsubame: e, tsunan: e, uonuma: e, yahiko: e, yoita: e, yuzawa: e }], oita: [1, { beppu: e, bungoono: e, bungotakada: e, hasama: e, hiji: e, himeshima: e, hita: e, kamitsue: e, kokonoe: e, kuju: e, kunisaki: e, kusu: e, oita: e, saiki: e, taketa: e, tsukumi: e, usa: e, usuki: e, yufu: e }], okayama: [1, { akaiwa: e, asakuchi: e, bizen: e, hayashima: e, ibara: e, kagamino: e, kasaoka: e, kibichuo: e, kumenan: e, kurashiki: e, maniwa: e, misaki: e, nagi: e, niimi: e, nishiawakura: e, okayama: e, satosho: e, setouchi: e, shinjo: e, shoo: e, soja: e, takahashi: e, tamano: e, tsuyama: e, wake: e, yakage: e }], okinawa: [1, { aguni: e, ginowan: e, ginoza: e, gushikami: e, haebaru: e, higashi: e, hirara: e, iheya: e, ishigaki: e, ishikawa: e, itoman: e, izena: e, kadena: e, kin: e, kitadaito: e, kitanakagusuku: e, kumejima: e, kunigami: e, minamidaito: e, motobu: e, nago: e, naha: e, nakagusuku: e, nakijin: e, nanjo: e, nishihara: e, ogimi: e, okinawa: e, onna: e, shimoji: e, taketomi: e, tarama: e, tokashiki: e, tomigusuku: e, tonaki: e, urasoe: e, uruma: e, yaese: e, yomitan: e, yonabaru: e, yonaguni: e, zamami: e }], osaka: [1, { abeno: e, chihayaakasaka: e, chuo: e, daito: e, fujiidera: e, habikino: e, hannan: e, higashiosaka: e, higashisumiyoshi: e, higashiyodogawa: e, hirakata: e, ibaraki: e, ikeda: e, izumi: e, izumiotsu: e, izumisano: e, kadoma: e, kaizuka: e, kanan: e, kashiwara: e, katano: e, kawachinagano: e, kishiwada: e, kita: e, kumatori: e, matsubara: e, minato: e, minoh: e, misaki: e, moriguchi: e, neyagawa: e, nishi: e, nose: e, osakasayama: e, sakai: e, sayama: e, sennan: e, settsu: e, shijonawate: e, shimamoto: e, suita: e, tadaoka: e, taishi: e, tajiri: e, takaishi: e, takatsuki: e, tondabayashi: e, toyonaka: e, toyono: e, yao: e }], saga: [1, { ariake: e, arita: e, fukudomi: e, genkai: e, hamatama: e, hizen: e, imari: e, kamimine: e, kanzaki: e, karatsu: e, kashima: e, kitagata: e, kitahata: e, kiyama: e, kouhoku: e, kyuragi: e, nishiarita: e, ogi: e, omachi: e, ouchi: e, saga: e, shiroishi: e, taku: e, tara: e, tosu: e, yoshinogari: e }], saitama: [1, { arakawa: e, asaka: e, chichibu: e, fujimi: e, fujimino: e, fukaya: e, hanno: e, hanyu: e, hasuda: e, hatogaya: e, hatoyama: e, hidaka: e, higashichichibu: e, higashimatsuyama: e, honjo: e, ina: e, iruma: e, iwatsuki: e, kamiizumi: e, kamikawa: e, kamisato: e, kasukabe: e, kawagoe: e, kawaguchi: e, kawajima: e, kazo: e, kitamoto: e, koshigaya: e, kounosu: e, kuki: e, kumagaya: e, matsubushi: e, minano: e, misato: e, miyashiro: e, miyoshi: e, moroyama: e, nagatoro: e, namegawa: e, niiza: e, ogano: e, ogawa: e, ogose: e, okegawa: e, omiya: e, otaki: e, ranzan: e, ryokami: e, saitama: e, sakado: e, satte: e, sayama: e, shiki: e, shiraoka: e, soka: e, sugito: e, toda: e, tokigawa: e, tokorozawa: e, tsurugashima: e, urawa: e, warabi: e, yashio: e, yokoze: e, yono: e, yorii: e, yoshida: e, yoshikawa: e, yoshimi: e }], shiga: [1, { aisho: e, gamo: e, higashiomi: e, hikone: e, koka: e, konan: e, kosei: e, koto: e, kusatsu: e, maibara: e, moriyama: e, nagahama: e, nishiazai: e, notogawa: e, omihachiman: e, otsu: e, ritto: e, ryuoh: e, takashima: e, takatsuki: e, torahime: e, toyosato: e, yasu: e }], shimane: [1, { akagi: e, ama: e, gotsu: e, hamada: e, higashiizumo: e, hikawa: e, hikimi: e, izumo: e, kakinoki: e, masuda: e, matsue: e, misato: e, nishinoshima: e, ohda: e, okinoshima: e, okuizumo: e, shimane: e, tamayu: e, tsuwano: e, unnan: e, yakumo: e, yasugi: e, yatsuka: e }], shizuoka: [1, { arai: e, atami: e, fuji: e, fujieda: e, fujikawa: e, fujinomiya: e, fukuroi: e, gotemba: e, haibara: e, hamamatsu: e, higashiizu: e, ito: e, iwata: e, izu: e, izunokuni: e, kakegawa: e, kannami: e, kawanehon: e, kawazu: e, kikugawa: e, kosai: e, makinohara: e, matsuzaki: e, minamiizu: e, mishima: e, morimachi: e, nishiizu: e, numazu: e, omaezaki: e, shimada: e, shimizu: e, shimoda: e, shizuoka: e, susono: e, yaizu: e, yoshida: e }], tochigi: [1, { ashikaga: e, bato: e, haga: e, ichikai: e, iwafune: e, kaminokawa: e, kanuma: e, karasuyama: e, kuroiso: e, mashiko: e, mibu: e, moka: e, motegi: e, nasu: e, nasushiobara: e, nikko: e, nishikata: e, nogi: e, ohira: e, ohtawara: e, oyama: e, sakura: e, sano: e, shimotsuke: e, shioya: e, takanezawa: e, tochigi: e, tsuga: e, ujiie: e, utsunomiya: e, yaita: e }], tokushima: [1, { aizumi: e, anan: e, ichiba: e, itano: e, kainan: e, komatsushima: e, matsushige: e, mima: e, minami: e, miyoshi: e, mugi: e, nakagawa: e, naruto: e, sanagochi: e, shishikui: e, tokushima: e, wajiki: e }], tokyo: [1, { adachi: e, akiruno: e, akishima: e, aogashima: e, arakawa: e, bunkyo: e, chiyoda: e, chofu: e, chuo: e, edogawa: e, fuchu: e, fussa: e, hachijo: e, hachioji: e, hamura: e, higashikurume: e, higashimurayama: e, higashiyamato: e, hino: e, hinode: e, hinohara: e, inagi: e, itabashi: e, katsushika: e, kita: e, kiyose: e, kodaira: e, koganei: e, kokubunji: e, komae: e, koto: e, kouzushima: e, kunitachi: e, machida: e, meguro: e, minato: e, mitaka: e, mizuho: e, musashimurayama: e, musashino: e, nakano: e, nerima: e, ogasawara: e, okutama: e, ome: e, oshima: e, ota: e, setagaya: e, shibuya: e, shinagawa: e, shinjuku: e, suginami: e, sumida: e, tachikawa: e, taito: e, tama: e, toshima: e }], tottori: [1, { chizu: e, hino: e, kawahara: e, koge: e, kotoura: e, misasa: e, nanbu: e, nichinan: e, sakaiminato: e, tottori: e, wakasa: e, yazu: e, yonago: e }], toyama: [1, { asahi: e, fuchu: e, fukumitsu: e, funahashi: e, himi: e, imizu: e, inami: e, johana: e, kamiichi: e, kurobe: e, nakaniikawa: e, namerikawa: e, nanto: e, nyuzen: e, oyabe: e, taira: e, takaoka: e, tateyama: e, toga: e, tonami: e, toyama: e, unazuki: e, uozu: e, yamada: e }], wakayama: [1, { arida: e, aridagawa: e, gobo: e, hashimoto: e, hidaka: e, hirogawa: e, inami: e, iwade: e, kainan: e, kamitonda: e, katsuragi: e, kimino: e, kinokawa: e, kitayama: e, koya: e, koza: e, kozagawa: e, kudoyama: e, kushimoto: e, mihama: e, misato: e, nachikatsuura: e, shingu: e, shirahama: e, taiji: e, tanabe: e, wakayama: e, yuasa: e, yura: e }], yamagata: [1, { asahi: e, funagata: e, higashine: e, iide: e, kahoku: e, kaminoyama: e, kaneyama: e, kawanishi: e, mamurogawa: e, mikawa: e, murayama: e, nagai: e, nakayama: e, nanyo: e, nishikawa: e, obanazawa: e, oe: e, oguni: e, ohkura: e, oishida: e, sagae: e, sakata: e, sakegawa: e, shinjo: e, shirataka: e, shonai: e, takahata: e, tendo: e, tozawa: e, tsuruoka: e, yamagata: e, yamanobe: e, yonezawa: e, yuza: e }], yamaguchi: [1, { abu: e, hagi: e, hikari: e, hofu: e, iwakuni: e, kudamatsu: e, mitou: e, nagato: e, oshima: e, shimonoseki: e, shunan: e, tabuse: e, tokuyama: e, toyota: e, ube: e, yuu: e }], yamanashi: [1, { chuo: e, doshi: e, fuefuki: e, fujikawa: e, fujikawaguchiko: e, fujiyoshida: e, hayakawa: e, hokuto: e, ichikawamisato: e, kai: e, kofu: e, koshu: e, kosuge: e, "minami-alps": e, minobu: e, nakamichi: e, nanbu: e, narusawa: e, nirasaki: e, nishikatsura: e, oshino: e, otsuki: e, showa: e, tabayama: e, tsuru: e, uenohara: e, yamanakako: e, yamanashi: e }], "xn--ehqz56n": e, 三重: e, "xn--1lqs03n": e, 京都: e, "xn--qqqt11m": e, 佐賀: e, "xn--f6qx53a": e, 兵庫: e, "xn--djrs72d6uy": e, 北海道: e, "xn--mkru45i": e, 千葉: e, "xn--0trq7p7nn": e, 和歌山: e, "xn--5js045d": e, 埼玉: e, "xn--kbrq7o": e, 大分: e, "xn--pssu33l": e, 大阪: e, "xn--ntsq17g": e, 奈良: e, "xn--uisz3g": e, 宮城: e, "xn--6btw5a": e, 宮崎: e, "xn--1ctwo": e, 富山: e, "xn--6orx2r": e, 山口: e, "xn--rht61e": e, 山形: e, "xn--rht27z": e, 山梨: e, "xn--nit225k": e, 岐阜: e, "xn--rht3d": e, 岡山: e, "xn--djty4k": e, 岩手: e, "xn--klty5x": e, 島根: e, "xn--kltx9a": e, 広島: e, "xn--kltp7d": e, 徳島: e, "xn--c3s14m": e, 愛媛: e, "xn--vgu402c": e, 愛知: e, "xn--efvn9s": e, 新潟: e, "xn--1lqs71d": e, 東京: e, "xn--4pvxs": e, 栃木: e, "xn--uuwu58a": e, 沖縄: e, "xn--zbx025d": e, 滋賀: e, "xn--8pvr4u": e, 熊本: e, "xn--5rtp49c": e, 石川: e, "xn--ntso0iqx3a": e, 神奈川: e, "xn--elqq16h": e, 福井: e, "xn--4it168d": e, 福岡: e, "xn--klt787d": e, 福島: e, "xn--rny31h": e, 秋田: e, "xn--7t0a264c": e, 群馬: e, "xn--uist22h": e, 茨城: e, "xn--8ltr62k": e, 長崎: e, "xn--2m4a15e": e, 長野: e, "xn--32vp30h": e, 青森: e, "xn--4it797k": e, 静岡: e, "xn--5rtq34k": e, 香川: e, "xn--k7yn95e": e, 高知: e, "xn--tor131o": e, 鳥取: e, "xn--d5qv7z876c": e, 鹿児島: e, kawasaki: f, kitakyushu: f, kobe: f, nagoya: f, sapporo: f, sendai: f, yokohama: f, buyshop: t, fashionstore: t, handcrafted: t, kawaiishop: t, supersale: t, theshop: t, "0am": t, "0g0": t, "0j0": t, "0t0": t, mydns: t, pgw: t, wjg: t, usercontent: t, angry: t, babyblue: t, babymilk: t, backdrop: t, bambina: t, bitter: t, blush: t, boo: t, boy: t, boyfriend: t, but: t, candypop: t, capoo: t, catfood: t, cheap: t, chicappa: t, chillout: t, chips: t, chowder: t, chu: t, ciao: t, cocotte: t, coolblog: t, cranky: t, cutegirl: t, daa: t, deca: t, deci: t, digick: t, egoism: t, fakefur: t, fem: t, flier: t, floppy: t, fool: t, frenchkiss: t, girlfriend: t, girly: t, gloomy: t, gonna: t, greater: t, hacca: t, heavy: t, her: t, hiho: t, hippy: t, holy: t, hungry: t, icurus: t, itigo: t, jellybean: t, kikirara: t, kill: t, kilo: t, kuron: t, littlestar: t, lolipopmc: t, lolitapunk: t, lomo: t, lovepop: t, lovesick: t, main: t, mods: t, mond: t, mongolian: t, moo: t, namaste: t, nikita: t, nobushi: t, noor: t, oops: t, parallel: t, parasite: t, pecori: t, peewee: t, penne: t, pepper: t, perma: t, pigboat: t, pinoko: t, punyu: t, pupu: t, pussycat: t, pya: t, raindrop: t, readymade: t, sadist: t, schoolbus: t, secret: t, staba: t, stripper: t, sub: t, sunnyday: t, thick: t, tonkotsu: t, under: t, upper: t, velvet: t, verse: t, versus: t, vivian: t, watson: t, weblike: t, whitesnow: t, zombie: t, hateblo: t, hatenablog: t, hatenadiary: t, "2-d": t, bona: t, crap: t, daynight: t, eek: t, flop: t, halfmoon: t, jeez: t, matrix: t, mimoza: t, netgamers: t, nyanta: t, o0o0: t, rdy: t, rgr: t, rulez: t, sakurastorage: [0, { isk01: Ce, isk02: Ce }], saloon: t, sblo: t, skr: t, tank: t, "uh-oh": t, undo: t, webaccel: [0, { rs: t, user: t }], websozai: t, xii: t }], ke: [1, { ac: e, co: e, go: e, info: e, me: e, mobi: e, ne: e, or: e, sc: e }], kg: [1, { com: e, edu: e, gov: e, mil: e, net: e, org: e, us: t }], kh: f, ki: ae, km: [1, { ass: e, com: e, edu: e, gov: e, mil: e, nom: e, org: e, prd: e, tm: e, asso: e, coop: e, gouv: e, medecin: e, notaires: e, pharmaciens: e, presse: e, veterinaire: e }], kn: [1, { edu: e, gov: e, net: e, org: e }], kp: [1, { com: e, edu: e, gov: e, org: e, rep: e, tra: e }], kr: [1, { ac: e, co: e, es: e, go: e, hs: e, kg: e, mil: e, ms: e, ne: e, or: e, pe: e, re: e, sc: e, busan: e, chungbuk: e, chungnam: e, daegu: e, daejeon: e, gangwon: e, gwangju: e, gyeongbuk: e, gyeonggi: e, gyeongnam: e, incheon: e, jeju: e, jeonbuk: e, jeonnam: e, seoul: e, ulsan: e }], kw: [1, { com: e, edu: e, emb: e, gov: e, ind: e, net: e, org: e }], ky: ie, kz: [1, { com: e, edu: e, gov: e, mil: e, net: e, org: e, jcloud: t }], la: [1, { com: e, edu: e, gov: e, info: e, int: e, net: e, org: e, per: e, bnr: t }], lb: n, lc: [1, { co: e, com: e, edu: e, gov: e, net: e, org: e, oy: t }], li: [1, { caa: t }], lk: [1, { ac: e, assn: e, com: e, edu: e, gov: e, grp: e, hotel: e, int: e, ltd: e, net: e, ngo: e, org: e, sch: e, soc: e, web: e }], lr: n, ls: [1, { ac: e, biz: e, co: e, edu: e, gov: e, info: e, net: e, org: e, sc: e }], lt: s, lu: [1, { "123website": t }], lv: [1, { asn: e, com: e, conf: e, edu: e, gov: e, id: e, mil: e, net: e, org: e }], ly: [1, { com: e, edu: e, gov: e, id: e, med: e, net: e, org: e, plc: e, sch: e }], ma: [1, { ac: e, co: e, gov: e, net: e, org: e, press: e }], mc: [1, { asso: e, tm: e }], md: [1, { ir: t }], me: [1, { ac: e, co: e, edu: e, gov: e, its: e, net: e, org: e, priv: e, c66: t, craft: t, edgestack: t, filegear: t, glitch: t, "filegear-sg": t, lohmus: t, barsy: t, mcdir: t, brasilia: t, ddns: t, dnsfor: t, hopto: t, loginto: t, noip: t, webhop: t, soundcast: t, tcp4: t, vp4: t, diskstation: t, dscloud: t, i234: t, myds: t, synology: t, transip: F, nohost: t }], mg: [1, { co: e, com: e, edu: e, gov: e, mil: e, nom: e, org: e, prd: e }], mh: e, mil: e, mk: [1, { com: e, edu: e, gov: e, inf: e, name: e, net: e, org: e }], ml: [1, { com: e, edu: e, gouv: e, gov: e, net: e, org: e, presse: e }], mm: f, mn: [1, { edu: e, gov: e, org: e, nyc: t }], mo: n, mobi: [1, { barsy: t, dscloud: t }], mp: [1, { ju: t }], mq: e, mr: s, ms: [1, { com: e, edu: e, gov: e, net: e, org: e, minisite: t }], mt: ie, mu: [1, { ac: e, co: e, com: e, gov: e, net: e, or: e, org: e }], museum: e, mv: [1, { aero: e, biz: e, com: e, coop: e, edu: e, gov: e, info: e, int: e, mil: e, museum: e, name: e, net: e, org: e, pro: e }], mw: [1, { ac: e, biz: e, co: e, com: e, coop: e, edu: e, gov: e, int: e, net: e, org: e }], mx: [1, { com: e, edu: e, gob: e, net: e, org: e }], my: [1, { biz: e, com: e, edu: e, gov: e, mil: e, name: e, net: e, org: e }], mz: [1, { ac: e, adv: e, co: e, edu: e, gov: e, mil: e, net: e, org: e }], na: [1, { alt: e, co: e, com: e, gov: e, net: e, org: e }], name: [1, { her: jt, his: jt }], nc: [1, { asso: e, nom: e }], ne: e, net: [1, { adobeaemcloud: t, "adobeio-static": t, adobeioruntime: t, akadns: t, akamai: t, "akamai-staging": t, akamaiedge: t, "akamaiedge-staging": t, akamaihd: t, "akamaihd-staging": t, akamaiorigin: t, "akamaiorigin-staging": t, akamaized: t, "akamaized-staging": t, edgekey: t, "edgekey-staging": t, edgesuite: t, "edgesuite-staging": t, alwaysdata: t, myamaze: t, cloudfront: t, appudo: t, "atlassian-dev": [0, { prod: it }], myfritz: t, onavstack: t, shopselect: t, blackbaudcdn: t, boomla: t, bplaced: t, square7: t, cdn77: [0, { r: t }], "cdn77-ssl": t, gb: t, hu: t, jp: t, se: t, uk: t, clickrising: t, "ddns-ip": t, "dns-cloud": t, "dns-dynamic": t, cloudaccess: t, cloudflare: [2, { cdn: t }], cloudflareanycast: it, cloudflarecn: it, cloudflareglobal: it, ctfcloud: t, "feste-ip": t, "knx-server": t, "static-access": t, cryptonomic: a, dattolocal: t, mydatto: t, debian: t, definima: t, "at-band-camp": t, blogdns: t, "broke-it": t, buyshouses: t, dnsalias: t, dnsdojo: t, "does-it": t, dontexist: t, dynalias: t, dynathome: t, endofinternet: t, "from-az": t, "from-co": t, "from-la": t, "from-ny": t, "gets-it": t, "ham-radio-op": t, homeftp: t, homeip: t, homelinux: t, homeunix: t, "in-the-band": t, "is-a-chef": t, "is-a-geek": t, "isa-geek": t, "kicks-ass": t, "office-on-the": t, podzone: t, "scrapper-site": t, selfip: t, "sells-it": t, servebbs: t, serveftp: t, thruhere: t, webhop: t, casacam: t, dynu: t, dynv6: t, twmail: t, ru: t, channelsdvr: [2, { u: t }], fastly: [0, { freetls: t, map: t, prod: [0, { a: t, global: t }], ssl: [0, { a: t, b: t, global: t }] }], fastlylb: [2, { map: t }], edgeapp: t, "keyword-on": t, "live-on": t, "server-on": t, "cdn-edges": t, heteml: t, cloudfunctions: t, "grafana-dev": t, iobb: t, moonscale: t, "in-dsl": t, "in-vpn": t, botdash: t, "apps-1and1": t, ipifony: t, cloudjiffy: [2, { "fra1-de": t, "west1-us": t }], elastx: [0, { "jls-sto1": t, "jls-sto2": t, "jls-sto3": t }], massivegrid: [0, { paas: [0, { "fr-1": t, "lon-1": t, "lon-2": t, "ny-1": t, "ny-2": t, "sg-1": t }] }], saveincloud: [0, { jelastic: t, "nordeste-idc": t }], scaleforce: J, kinghost: t, uni5: t, krellian: t, ggff: t, localcert: t, localhostcert: t, barsy: t, memset: t, "azure-api": t, "azure-mobile": t, azureedge: t, azurefd: t, azurestaticapps: [2, { 1: t, 2: t, 3: t, 4: t, 5: t, 6: t, 7: t, centralus: t, eastasia: t, eastus2: t, westeurope: t, westus2: t }], azurewebsites: t, cloudapp: t, trafficmanager: t, windows: [0, { core: [0, { blob: t }], servicebus: t }], mynetname: [0, { sn: t }], routingthecloud: t, bounceme: t, ddns: t, "eating-organic": t, mydissent: t, myeffect: t, mymediapc: t, mypsx: t, mysecuritycamera: t, nhlfan: t, "no-ip": t, pgafan: t, privatizehealthinsurance: t, redirectme: t, serveblog: t, serveminecraft: t, sytes: t, dnsup: t, hicam: t, "now-dns": t, ownip: t, vpndns: t, cloudycluster: t, ovh: [0, { hosting: a, webpaas: a }], rackmaze: t, myradweb: t, in: t, squares: t, schokokeks: t, "firewall-gateway": t, seidat: t, senseering: t, siteleaf: t, mafelo: t, myspreadshop: t, "vps-host": [2, { jelastic: [0, { atl: t, njs: t, ric: t }] }], srcf: [0, { soc: t, user: t }], supabase: t, dsmynas: t, familyds: t, ts: [2, { c: a }], torproject: [2, { pages: t }], vusercontent: t, "reserve-online": t, "community-pro": t, meinforum: t, yandexcloud: [2, { storage: t, website: t }], za: t }], nf: [1, { arts: e, com: e, firm: e, info: e, net: e, other: e, per: e, rec: e, store: e, web: e }], ng: [1, { com: e, edu: e, gov: e, i: e, mil: e, mobi: e, name: e, net: e, org: e, sch: e, biz: [2, { co: t, dl: t, go: t, lg: t, on: t }], col: t, firm: t, gen: t, ltd: t, ngo: t, plc: t }], ni: [1, { ac: e, biz: e, co: e, com: e, edu: e, gob: e, in: e, info: e, int: e, mil: e, net: e, nom: e, org: e, web: e }], nl: [1, { co: t, "hosting-cluster": t, gov: t, khplay: t, "123website": t, myspreadshop: t, transurl: a, cistron: t, demon: t }], no: [1, { fhs: e, folkebibl: e, fylkesbibl: e, idrett: e, museum: e, priv: e, vgs: e, dep: e, herad: e, kommune: e, mil: e, stat: e, aa: de, ah: de, bu: de, fm: de, hl: de, hm: de, "jan-mayen": de, mr: de, nl: de, nt: de, of: de, ol: de, oslo: de, rl: de, sf: de, st: de, svalbard: de, tm: de, tr: de, va: de, vf: de, akrehamn: e, "xn--krehamn-dxa": e, åkrehamn: e, algard: e, "xn--lgrd-poac": e, ålgård: e, arna: e, bronnoysund: e, "xn--brnnysund-m8ac": e, brønnøysund: e, brumunddal: e, bryne: e, drobak: e, "xn--drbak-wua": e, drøbak: e, egersund: e, fetsund: e, floro: e, "xn--flor-jra": e, florø: e, fredrikstad: e, hokksund: e, honefoss: e, "xn--hnefoss-q1a": e, hønefoss: e, jessheim: e, jorpeland: e, "xn--jrpeland-54a": e, jørpeland: e, kirkenes: e, kopervik: e, krokstadelva: e, langevag: e, "xn--langevg-jxa": e, langevåg: e, leirvik: e, mjondalen: e, "xn--mjndalen-64a": e, mjøndalen: e, "mo-i-rana": e, mosjoen: e, "xn--mosjen-eya": e, mosjøen: e, nesoddtangen: e, orkanger: e, osoyro: e, "xn--osyro-wua": e, osøyro: e, raholt: e, "xn--rholt-mra": e, råholt: e, sandnessjoen: e, "xn--sandnessjen-ogb": e, sandnessjøen: e, skedsmokorset: e, slattum: e, spjelkavik: e, stathelle: e, stavern: e, stjordalshalsen: e, "xn--stjrdalshalsen-sqb": e, stjørdalshalsen: e, tananger: e, tranby: e, vossevangen: e, aarborte: e, aejrie: e, afjord: e, "xn--fjord-lra": e, åfjord: e, agdenes: e, akershus: ac, aknoluokta: e, "xn--koluokta-7ya57h": e, ákŋoluokta: e, al: e, "xn--l-1fa": e, ål: e, alaheadju: e, "xn--laheadju-7ya": e, álaheadju: e, alesund: e, "xn--lesund-hua": e, ålesund: e, alstahaug: e, alta: e, "xn--lt-liac": e, áltá: e, alvdal: e, amli: e, "xn--mli-tla": e, åmli: e, amot: e, "xn--mot-tla": e, åmot: e, andasuolo: e, andebu: e, andoy: e, "xn--andy-ira": e, andøy: e, ardal: e, "xn--rdal-poa": e, årdal: e, aremark: e, arendal: e, "xn--s-1fa": e, ås: e, aseral: e, "xn--seral-lra": e, åseral: e, asker: e, askim: e, askoy: e, "xn--asky-ira": e, askøy: e, askvoll: e, asnes: e, "xn--snes-poa": e, åsnes: e, audnedaln: e, aukra: e, aure: e, aurland: e, "aurskog-holand": e, "xn--aurskog-hland-jnb": e, "aurskog-høland": e, austevoll: e, austrheim: e, averoy: e, "xn--avery-yua": e, averøy: e, badaddja: e, "xn--bdddj-mrabd": e, bådåddjå: e, "xn--brum-voa": e, bærum: e, bahcavuotna: e, "xn--bhcavuotna-s4a": e, báhcavuotna: e, bahccavuotna: e, "xn--bhccavuotna-k7a": e, báhccavuotna: e, baidar: e, "xn--bidr-5nac": e, báidár: e, bajddar: e, "xn--bjddar-pta": e, bájddar: e, balat: e, "xn--blt-elab": e, bálát: e, balestrand: e, ballangen: e, balsfjord: e, bamble: e, bardu: e, barum: e, batsfjord: e, "xn--btsfjord-9za": e, båtsfjord: e, bearalvahki: e, "xn--bearalvhki-y4a": e, bearalváhki: e, beardu: e, beiarn: e, berg: e, bergen: e, berlevag: e, "xn--berlevg-jxa": e, berlevåg: e, bievat: e, "xn--bievt-0qa": e, bievát: e, bindal: e, birkenes: e, bjarkoy: e, "xn--bjarky-fya": e, bjarkøy: e, bjerkreim: e, bjugn: e, bodo: e, "xn--bod-2na": e, bodø: e, bokn: e, bomlo: e, "xn--bmlo-gra": e, bømlo: e, bremanger: e, bronnoy: e, "xn--brnny-wuac": e, brønnøy: e, budejju: e, buskerud: ac, bygland: e, bykle: e, cahcesuolo: e, "xn--hcesuolo-7ya35b": e, čáhcesuolo: e, davvenjarga: e, "xn--davvenjrga-y4a": e, davvenjárga: e, davvesiida: e, deatnu: e, dielddanuorri: e, divtasvuodna: e, divttasvuotna: e, donna: e, "xn--dnna-gra": e, dønna: e, dovre: e, drammen: e, drangedal: e, dyroy: e, "xn--dyry-ira": e, dyrøy: e, eid: e, eidfjord: e, eidsberg: e, eidskog: e, eidsvoll: e, eigersund: e, elverum: e, enebakk: e, engerdal: e, etne: e, etnedal: e, evenassi: e, "xn--eveni-0qa01ga": e, evenášši: e, evenes: e, "evje-og-hornnes": e, farsund: e, fauske: e, fedje: e, fet: e, finnoy: e, "xn--finny-yua": e, finnøy: e, fitjar: e, fjaler: e, fjell: e, fla: e, "xn--fl-zia": e, flå: e, flakstad: e, flatanger: e, flekkefjord: e, flesberg: e, flora: e, folldal: e, forde: e, "xn--frde-gra": e, førde: e, forsand: e, fosnes: e, "xn--frna-woa": e, fræna: e, frana: e, frei: e, frogn: e, froland: e, frosta: e, froya: e, "xn--frya-hra": e, frøya: e, fuoisku: e, fuossko: e, fusa: e, fyresdal: e, gaivuotna: e, "xn--givuotna-8ya": e, gáivuotna: e, galsa: e, "xn--gls-elac": e, gálsá: e, gamvik: e, gangaviika: e, "xn--ggaviika-8ya47h": e, gáŋgaviika: e, gaular: e, gausdal: e, giehtavuoatna: e, gildeskal: e, "xn--gildeskl-g0a": e, gildeskål: e, giske: e, gjemnes: e, gjerdrum: e, gjerstad: e, gjesdal: e, gjovik: e, "xn--gjvik-wua": e, gjøvik: e, gloppen: e, gol: e, gran: e, grane: e, granvin: e, gratangen: e, grimstad: e, grong: e, grue: e, gulen: e, guovdageaidnu: e, ha: e, "xn--h-2fa": e, hå: e, habmer: e, "xn--hbmer-xqa": e, hábmer: e, hadsel: e, "xn--hgebostad-g3a": e, hægebostad: e, hagebostad: e, halden: e, halsa: e, hamar: e, hamaroy: e, hammarfeasta: e, "xn--hmmrfeasta-s4ac": e, hámmárfeasta: e, hammerfest: e, hapmir: e, "xn--hpmir-xqa": e, hápmir: e, haram: e, hareid: e, harstad: e, hasvik: e, hattfjelldal: e, haugesund: e, hedmark: [0, { os: e, valer: e, "xn--vler-qoa": e, våler: e }], hemne: e, hemnes: e, hemsedal: e, hitra: e, hjartdal: e, hjelmeland: e, hobol: e, "xn--hobl-ira": e, hobøl: e, hof: e, hol: e, hole: e, holmestrand: e, holtalen: e, "xn--holtlen-hxa": e, holtålen: e, hordaland: [0, { os: e }], hornindal: e, horten: e, hoyanger: e, "xn--hyanger-q1a": e, høyanger: e, hoylandet: e, "xn--hylandet-54a": e, høylandet: e, hurdal: e, hurum: e, hvaler: e, hyllestad: e, ibestad: e, inderoy: e, "xn--indery-fya": e, inderøy: e, iveland: e, ivgu: e, jevnaker: e, jolster: e, "xn--jlster-bya": e, jølster: e, jondal: e, kafjord: e, "xn--kfjord-iua": e, kåfjord: e, karasjohka: e, "xn--krjohka-hwab49j": e, kárášjohka: e, karasjok: e, karlsoy: e, karmoy: e, "xn--karmy-yua": e, karmøy: e, kautokeino: e, klabu: e, "xn--klbu-woa": e, klæbu: e, klepp: e, kongsberg: e, kongsvinger: e, kraanghke: e, "xn--kranghke-b0a": e, kråanghke: e, kragero: e, "xn--krager-gya": e, kragerø: e, kristiansand: e, kristiansund: e, krodsherad: e, "xn--krdsherad-m8a": e, krødsherad: e, "xn--kvfjord-nxa": e, kvæfjord: e, "xn--kvnangen-k0a": e, kvænangen: e, kvafjord: e, kvalsund: e, kvam: e, kvanangen: e, kvinesdal: e, kvinnherad: e, kviteseid: e, kvitsoy: e, "xn--kvitsy-fya": e, kvitsøy: e, laakesvuemie: e, "xn--lrdal-sra": e, lærdal: e, lahppi: e, "xn--lhppi-xqa": e, láhppi: e, lardal: e, larvik: e, lavagis: e, lavangen: e, leangaviika: e, "xn--leagaviika-52b": e, leaŋgaviika: e, lebesby: e, leikanger: e, leirfjord: e, leka: e, leksvik: e, lenvik: e, lerdal: e, lesja: e, levanger: e, lier: e, lierne: e, lillehammer: e, lillesand: e, lindas: e, "xn--linds-pra": e, lindås: e, lindesnes: e, loabat: e, "xn--loabt-0qa": e, loabát: e, lodingen: e, "xn--ldingen-q1a": e, lødingen: e, lom: e, loppa: e, lorenskog: e, "xn--lrenskog-54a": e, lørenskog: e, loten: e, "xn--lten-gra": e, løten: e, lund: e, lunner: e, luroy: e, "xn--lury-ira": e, lurøy: e, luster: e, lyngdal: e, lyngen: e, malatvuopmi: e, "xn--mlatvuopmi-s4a": e, málatvuopmi: e, malselv: e, "xn--mlselv-iua": e, målselv: e, malvik: e, mandal: e, marker: e, marnardal: e, masfjorden: e, masoy: e, "xn--msy-ula0h": e, måsøy: e, "matta-varjjat": e, "xn--mtta-vrjjat-k7af": e, "mátta-várjjat": e, meland: e, meldal: e, melhus: e, meloy: e, "xn--mely-ira": e, meløy: e, meraker: e, "xn--merker-kua": e, meråker: e, midsund: e, "midtre-gauldal": e, moareke: e, "xn--moreke-jua": e, moåreke: e, modalen: e, modum: e, molde: e, "more-og-romsdal": [0, { heroy: e, sande: e }], "xn--mre-og-romsdal-qqb": [0, { "xn--hery-ira": e, sande: e }], "møre-og-romsdal": [0, { herøy: e, sande: e }], moskenes: e, moss: e, mosvik: e, muosat: e, "xn--muost-0qa": e, muosát: e, naamesjevuemie: e, "xn--nmesjevuemie-tcba": e, nååmesjevuemie: e, "xn--nry-yla5g": e, nærøy: e, namdalseid: e, namsos: e, namsskogan: e, nannestad: e, naroy: e, narviika: e, narvik: e, naustdal: e, navuotna: e, "xn--nvuotna-hwa": e, návuotna: e, "nedre-eiker": e, nesna: e, nesodden: e, nesseby: e, nesset: e, nissedal: e, nittedal: e, "nord-aurdal": e, "nord-fron": e, "nord-odal": e, norddal: e, nordkapp: e, nordland: [0, { bo: e, "xn--b-5ga": e, bø: e, heroy: e, "xn--hery-ira": e, herøy: e }], "nordre-land": e, nordreisa: e, "nore-og-uvdal": e, notodden: e, notteroy: e, "xn--nttery-byae": e, nøtterøy: e, odda: e, oksnes: e, "xn--ksnes-uua": e, øksnes: e, omasvuotna: e, oppdal: e, oppegard: e, "xn--oppegrd-ixa": e, oppegård: e, orkdal: e, orland: e, "xn--rland-uua": e, ørland: e, orskog: e, "xn--rskog-uua": e, ørskog: e, orsta: e, "xn--rsta-fra": e, ørsta: e, osen: e, osteroy: e, "xn--ostery-fya": e, osterøy: e, ostfold: [0, { valer: e }], "xn--stfold-9xa": [0, { "xn--vler-qoa": e }], østfold: [0, { våler: e }], "ostre-toten": e, "xn--stre-toten-zcb": e, "østre-toten": e, overhalla: e, "ovre-eiker": e, "xn--vre-eiker-k8a": e, "øvre-eiker": e, oyer: e, "xn--yer-zna": e, øyer: e, oygarden: e, "xn--ygarden-p1a": e, øygarden: e, "oystre-slidre": e, "xn--ystre-slidre-ujb": e, "øystre-slidre": e, porsanger: e, porsangu: e, "xn--porsgu-sta26f": e, porsáŋgu: e, porsgrunn: e, rade: e, "xn--rde-ula": e, råde: e, radoy: e, "xn--rady-ira": e, radøy: e, "xn--rlingen-mxa": e, rælingen: e, rahkkeravju: e, "xn--rhkkervju-01af": e, ráhkkerávju: e, raisa: e, "xn--risa-5na": e, ráisa: e, rakkestad: e, ralingen: e, rana: e, randaberg: e, rauma: e, rendalen: e, rennebu: e, rennesoy: e, "xn--rennesy-v1a": e, rennesøy: e, rindal: e, ringebu: e, ringerike: e, ringsaker: e, risor: e, "xn--risr-ira": e, risør: e, rissa: e, roan: e, rodoy: e, "xn--rdy-0nab": e, rødøy: e, rollag: e, romsa: e, romskog: e, "xn--rmskog-bya": e, rømskog: e, roros: e, "xn--rros-gra": e, røros: e, rost: e, "xn--rst-0na": e, røst: e, royken: e, "xn--ryken-vua": e, røyken: e, royrvik: e, "xn--ryrvik-bya": e, røyrvik: e, ruovat: e, rygge: e, salangen: e, salat: e, "xn--slat-5na": e, sálat: e, "xn--slt-elab": e, sálát: e, saltdal: e, samnanger: e, sandefjord: e, sandnes: e, sandoy: e, "xn--sandy-yua": e, sandøy: e, sarpsborg: e, sauda: e, sauherad: e, sel: e, selbu: e, selje: e, seljord: e, siellak: e, sigdal: e, siljan: e, sirdal: e, skanit: e, "xn--sknit-yqa": e, skánit: e, skanland: e, "xn--sknland-fxa": e, skånland: e, skaun: e, skedsmo: e, ski: e, skien: e, skierva: e, "xn--skierv-uta": e, skiervá: e, skiptvet: e, skjak: e, "xn--skjk-soa": e, skjåk: e, skjervoy: e, "xn--skjervy-v1a": e, skjervøy: e, skodje: e, smola: e, "xn--smla-hra": e, smøla: e, snaase: e, "xn--snase-nra": e, snåase: e, snasa: e, "xn--snsa-roa": e, snåsa: e, snillfjord: e, snoasa: e, sogndal: e, sogne: e, "xn--sgne-gra": e, søgne: e, sokndal: e, sola: e, solund: e, somna: e, "xn--smna-gra": e, sømna: e, "sondre-land": e, "xn--sndre-land-0cb": e, "søndre-land": e, songdalen: e, "sor-aurdal": e, "xn--sr-aurdal-l8a": e, "sør-aurdal": e, "sor-fron": e, "xn--sr-fron-q1a": e, "sør-fron": e, "sor-odal": e, "xn--sr-odal-q1a": e, "sør-odal": e, "sor-varanger": e, "xn--sr-varanger-ggb": e, "sør-varanger": e, sorfold: e, "xn--srfold-bya": e, sørfold: e, sorreisa: e, "xn--srreisa-q1a": e, sørreisa: e, sortland: e, sorum: e, "xn--srum-gra": e, sørum: e, spydeberg: e, stange: e, stavanger: e, steigen: e, steinkjer: e, stjordal: e, "xn--stjrdal-s1a": e, stjørdal: e, stokke: e, "stor-elvdal": e, stord: e, stordal: e, storfjord: e, strand: e, stranda: e, stryn: e, sula: e, suldal: e, sund: e, sunndal: e, surnadal: e, sveio: e, svelvik: e, sykkylven: e, tana: e, telemark: [0, { bo: e, "xn--b-5ga": e, bø: e }], time: e, tingvoll: e, tinn: e, tjeldsund: e, tjome: e, "xn--tjme-hra": e, tjøme: e, tokke: e, tolga: e, tonsberg: e, "xn--tnsberg-q1a": e, tønsberg: e, torsken: e, "xn--trna-woa": e, træna: e, trana: e, tranoy: e, "xn--trany-yua": e, tranøy: e, troandin: e, trogstad: e, "xn--trgstad-r1a": e, trøgstad: e, tromsa: e, tromso: e, "xn--troms-zua": e, tromsø: e, trondheim: e, trysil: e, tvedestrand: e, tydal: e, tynset: e, tysfjord: e, tysnes: e, "xn--tysvr-vra": e, tysvær: e, tysvar: e, ullensaker: e, ullensvang: e, ulvik: e, unjarga: e, "xn--unjrga-rta": e, unjárga: e, utsira: e, vaapste: e, vadso: e, "xn--vads-jra": e, vadsø: e, "xn--vry-yla5g": e, værøy: e, vaga: e, "xn--vg-yiab": e, vågå: e, vagan: e, "xn--vgan-qoa": e, vågan: e, vagsoy: e, "xn--vgsy-qoa0j": e, vågsøy: e, vaksdal: e, valle: e, vang: e, vanylven: e, vardo: e, "xn--vard-jra": e, vardø: e, varggat: e, "xn--vrggt-xqad": e, várggát: e, varoy: e, vefsn: e, vega: e, vegarshei: e, "xn--vegrshei-c0a": e, vegårshei: e, vennesla: e, verdal: e, verran: e, vestby: e, vestfold: [0, { sande: e }], vestnes: e, "vestre-slidre": e, "vestre-toten": e, vestvagoy: e, "xn--vestvgy-ixa6o": e, vestvågøy: e, vevelstad: e, vik: e, vikna: e, vindafjord: e, voagat: e, volda: e, voss: e, co: t, "123hjemmeside": t, myspreadshop: t }], np: f, nr: ae, nu: [1, { merseine: t, mine: t, shacknet: t, enterprisecloud: t }], nz: [1, { ac: e, co: e, cri: e, geek: e, gen: e, govt: e, health: e, iwi: e, kiwi: e, maori: e, "xn--mori-qsa": e, māori: e, mil: e, net: e, org: e, parliament: e, school: e, cloudns: t }], om: [1, { co: e, com: e, edu: e, gov: e, med: e, museum: e, net: e, org: e, pro: e }], onion: e, org: [1, { altervista: t, pimienta: t, poivron: t, potager: t, sweetpepper: t, cdn77: [0, { c: t, rsc: t }], "cdn77-secure": [0, { origin: [0, { ssl: t }] }], ae: t, cloudns: t, "ip-dynamic": t, ddnss: t, duckdns: t, tunk: t, blogdns: t, blogsite: t, boldlygoingnowhere: t, dnsalias: t, dnsdojo: t, doesntexist: t, dontexist: t, doomdns: t, dvrdns: t, dynalias: t, dyndns: [2, { go: t, home: t }], endofinternet: t, endoftheinternet: t, "from-me": t, "game-host": t, gotdns: t, "hobby-site": t, homedns: t, homeftp: t, homelinux: t, homeunix: t, "is-a-bruinsfan": t, "is-a-candidate": t, "is-a-celticsfan": t, "is-a-chef": t, "is-a-geek": t, "is-a-knight": t, "is-a-linux-user": t, "is-a-patsfan": t, "is-a-soxfan": t, "is-found": t, "is-lost": t, "is-saved": t, "is-very-bad": t, "is-very-evil": t, "is-very-good": t, "is-very-nice": t, "is-very-sweet": t, "isa-geek": t, "kicks-ass": t, misconfused: t, podzone: t, readmyblog: t, selfip: t, sellsyourhome: t, servebbs: t, serveftp: t, servegame: t, "stuff-4-sale": t, webhop: t, accesscam: t, camdvr: t, freeddns: t, mywire: t, webredirect: t, twmail: t, eu: [2, { al: t, asso: t, at: t, au: t, be: t, bg: t, ca: t, cd: t, ch: t, cn: t, cy: t, cz: t, de: t, dk: t, edu: t, ee: t, es: t, fi: t, fr: t, gr: t, hr: t, hu: t, ie: t, il: t, in: t, int: t, is: t, it: t, jp: t, kr: t, lt: t, lu: t, lv: t, me: t, mk: t, mt: t, my: t, net: t, ng: t, nl: t, no: t, nz: t, pl: t, pt: t, ro: t, ru: t, se: t, si: t, sk: t, tr: t, uk: t, us: t }], fedorainfracloud: t, fedorapeople: t, fedoraproject: [0, { cloud: t, os: U, stg: [0, { os: U }] }], freedesktop: t, hatenadiary: t, hepforge: t, "in-dsl": t, "in-vpn": t, js: t, barsy: t, mayfirst: t, routingthecloud: t, bmoattachments: t, "cable-modem": t, collegefan: t, couchpotatofries: t, hopto: t, mlbfan: t, myftp: t, mysecuritycamera: t, nflfan: t, "no-ip": t, "read-books": t, ufcfan: t, zapto: t, dynserv: t, "now-dns": t, "is-local": t, httpbin: t, pubtls: t, jpn: t, "my-firewall": t, myfirewall: t, spdns: t, "small-web": t, dsmynas: t, familyds: t, teckids: Ce, tuxfamily: t, diskstation: t, hk: t, us: t, toolforge: t, wmcloud: t, wmflabs: t, za: t }], pa: [1, { abo: e, ac: e, com: e, edu: e, gob: e, ing: e, med: e, net: e, nom: e, org: e, sld: e }], pe: [1, { com: e, edu: e, gob: e, mil: e, net: e, nom: e, org: e }], pf: [1, { com: e, edu: e, org: e }], pg: f, ph: [1, { com: e, edu: e, gov: e, i: e, mil: e, net: e, ngo: e, org: e, cloudns: t }], pk: [1, { ac: e, biz: e, com: e, edu: e, fam: e, gkp: e, gob: e, gog: e, gok: e, gop: e, gos: e, gov: e, net: e, org: e, web: e }], pl: [1, { com: e, net: e, org: e, agro: e, aid: e, atm: e, auto: e, biz: e, edu: e, gmina: e, gsm: e, info: e, mail: e, media: e, miasta: e, mil: e, nieruchomosci: e, nom: e, pc: e, powiat: e, priv: e, realestate: e, rel: e, sex: e, shop: e, sklep: e, sos: e, szkola: e, targi: e, tm: e, tourism: e, travel: e, turystyka: e, gov: [1, { ap: e, griw: e, ic: e, is: e, kmpsp: e, konsulat: e, kppsp: e, kwp: e, kwpsp: e, mup: e, mw: e, oia: e, oirm: e, oke: e, oow: e, oschr: e, oum: e, pa: e, pinb: e, piw: e, po: e, pr: e, psp: e, psse: e, pup: e, rzgw: e, sa: e, sdn: e, sko: e, so: e, sr: e, starostwo: e, ug: e, ugim: e, um: e, umig: e, upow: e, uppo: e, us: e, uw: e, uzs: e, wif: e, wiih: e, winb: e, wios: e, witd: e, wiw: e, wkz: e, wsa: e, wskr: e, wsse: e, wuoz: e, wzmiuw: e, zp: e, zpisdn: e }], augustow: e, "babia-gora": e, bedzin: e, beskidy: e, bialowieza: e, bialystok: e, bielawa: e, bieszczady: e, boleslawiec: e, bydgoszcz: e, bytom: e, cieszyn: e, czeladz: e, czest: e, dlugoleka: e, elblag: e, elk: e, glogow: e, gniezno: e, gorlice: e, grajewo: e, ilawa: e, jaworzno: e, "jelenia-gora": e, jgora: e, kalisz: e, karpacz: e, kartuzy: e, kaszuby: e, katowice: e, "kazimierz-dolny": e, kepno: e, ketrzyn: e, klodzko: e, kobierzyce: e, kolobrzeg: e, konin: e, konskowola: e, kutno: e, lapy: e, lebork: e, legnica: e, lezajsk: e, limanowa: e, lomza: e, lowicz: e, lubin: e, lukow: e, malbork: e, malopolska: e, mazowsze: e, mazury: e, mielec: e, mielno: e, mragowo: e, naklo: e, nowaruda: e, nysa: e, olawa: e, olecko: e, olkusz: e, olsztyn: e, opoczno: e, opole: e, ostroda: e, ostroleka: e, ostrowiec: e, ostrowwlkp: e, pila: e, pisz: e, podhale: e, podlasie: e, polkowice: e, pomorskie: e, pomorze: e, prochowice: e, pruszkow: e, przeworsk: e, pulawy: e, radom: e, "rawa-maz": e, rybnik: e, rzeszow: e, sanok: e, sejny: e, skoczow: e, slask: e, slupsk: e, sosnowiec: e, "stalowa-wola": e, starachowice: e, stargard: e, suwalki: e, swidnica: e, swiebodzin: e, swinoujscie: e, szczecin: e, szczytno: e, tarnobrzeg: e, tgory: e, turek: e, tychy: e, ustka: e, walbrzych: e, warmia: e, warszawa: e, waw: e, wegrow: e, wielun: e, wlocl: e, wloclawek: e, wodzislaw: e, wolomin: e, wroclaw: e, zachpomor: e, zagan: e, zarow: e, zgora: e, zgorzelec: e, art: t, gliwice: t, krakow: t, poznan: t, wroc: t, zakopane: t, beep: t, "ecommerce-shop": t, cfolks: t, dfirma: t, dkonto: t, you2: t, shoparena: t, homesklep: t, sdscloud: t, unicloud: t, lodz: t, pabianice: t, plock: t, sieradz: t, skierniewice: t, zgierz: t, krasnik: t, leczna: t, lubartow: t, lublin: t, poniatowa: t, swidnik: t, co: t, torun: t, simplesite: t, myspreadshop: t, gda: t, gdansk: t, gdynia: t, med: t, sopot: t, bielsko: t }], pm: [1, { own: t, name: t }], pn: [1, { co: e, edu: e, gov: e, net: e, org: e }], post: e, pr: [1, { biz: e, com: e, edu: e, gov: e, info: e, isla: e, name: e, net: e, org: e, pro: e, ac: e, est: e, prof: e }], pro: [1, { aaa: e, aca: e, acct: e, avocat: e, bar: e, cpa: e, eng: e, jur: e, law: e, med: e, recht: e, "12chars": t, cloudns: t, barsy: t, ngrok: t }], ps: [1, { com: e, edu: e, gov: e, net: e, org: e, plo: e, sec: e }], pt: [1, { com: e, edu: e, gov: e, int: e, net: e, nome: e, org: e, publ: e, "123paginaweb": t }], pw: [1, { gov: e, cloudns: t, x443: t }], py: [1, { com: e, coop: e, edu: e, gov: e, mil: e, net: e, org: e }], qa: [1, { com: e, edu: e, gov: e, mil: e, name: e, net: e, org: e, sch: e }], re: [1, { asso: e, com: e, netlib: t, can: t }], ro: [1, { arts: e, com: e, firm: e, info: e, nom: e, nt: e, org: e, rec: e, store: e, tm: e, www: e, co: t, shop: t, barsy: t }], rs: [1, { ac: e, co: e, edu: e, gov: e, in: e, org: e, brendly: Q, ua: t, barsy: t, ox: t }], ru: [1, { ac: t, edu: t, gov: t, int: t, mil: t, eurodir: t, adygeya: t, bashkiria: t, bir: t, cbg: t, com: t, dagestan: t, grozny: t, kalmykia: t, kustanai: t, marine: t, mordovia: t, msk: t, mytis: t, nalchik: t, nov: t, pyatigorsk: t, spb: t, vladikavkaz: t, vladimir: t, na4u: t, mircloud: t, myjino: [2, { hosting: a, landing: a, spectrum: a, vps: a }], cldmail: [0, { hb: t }], mcdir: [2, { vps: t }], mcpre: t, net: t, org: t, pp: t, lk3: t, ras: t }], rw: [1, { ac: e, co: e, coop: e, gov: e, mil: e, net: e, org: e }], sa: [1, { com: e, edu: e, gov: e, med: e, net: e, org: e, pub: e, sch: e }], sb: n, sc: n, sd: [1, { com: e, edu: e, gov: e, info: e, med: e, net: e, org: e, tv: e }], se: [1, { a: e, ac: e, b: e, bd: e, brand: e, c: e, d: e, e, f: e, fh: e, fhsk: e, fhv: e, g: e, h: e, i: e, k: e, komforb: e, kommunalforbund: e, komvux: e, l: e, lanbib: e, m: e, n: e, naturbruksgymn: e, o: e, org: e, p: e, parti: e, pp: e, press: e, r: e, s: e, t: e, tm: e, u: e, w: e, x: e, y: e, z: e, com: t, conf: t, iopsys: t, "123minsida": t, itcouldbewor: t, myspreadshop: t }], sg: [1, { com: e, edu: e, gov: e, net: e, org: e, enscaled: t }], sh: [1, { com: e, gov: e, mil: e, net: e, org: e, hashbang: t, botda: t, platform: [0, { ent: t, eu: t, us: t }], now: t }], si: [1, { f5: t, gitapp: t, gitpage: t }], sj: e, sk: e, sl: n, sm: e, sn: [1, { art: e, com: e, edu: e, gouv: e, org: e, perso: e, univ: e }], so: [1, { com: e, edu: e, gov: e, me: e, net: e, org: e, surveys: t }], sr: e, ss: [1, { biz: e, co: e, com: e, edu: e, gov: e, me: e, net: e, org: e, sch: e }], st: [1, { co: e, com: e, consulado: e, edu: e, embaixada: e, mil: e, net: e, org: e, principe: e, saotome: e, store: e, helioho: t, kirara: t, noho: t }], su: [1, { abkhazia: t, adygeya: t, aktyubinsk: t, arkhangelsk: t, armenia: t, ashgabad: t, azerbaijan: t, balashov: t, bashkiria: t, bryansk: t, bukhara: t, chimkent: t, dagestan: t, "east-kazakhstan": t, exnet: t, georgia: t, grozny: t, ivanovo: t, jambyl: t, kalmykia: t, kaluga: t, karacol: t, karaganda: t, karelia: t, khakassia: t, krasnodar: t, kurgan: t, kustanai: t, lenug: t, mangyshlak: t, mordovia: t, msk: t, murmansk: t, nalchik: t, navoi: t, "north-kazakhstan": t, nov: t, obninsk: t, penza: t, pokrovsk: t, sochi: t, spb: t, tashkent: t, termez: t, togliatti: t, troitsk: t, tselinograd: t, tula: t, tuva: t, vladikavkaz: t, vladimir: t, vologda: t }], sv: [1, { com: e, edu: e, gob: e, org: e, red: e }], sx: s, sy: r, sz: [1, { ac: e, co: e, org: e }], tc: e, td: e, tel: e, tf: [1, { sch: t }], tg: e, th: [1, { ac: e, co: e, go: e, in: e, mi: e, net: e, or: e, online: t, shop: t }], tj: [1, { ac: e, biz: e, co: e, com: e, edu: e, go: e, gov: e, int: e, mil: e, name: e, net: e, nic: e, org: e, test: e, web: e }], tk: e, tl: s, tm: [1, { co: e, com: e, edu: e, gov: e, mil: e, net: e, nom: e, org: e }], tn: [1, { com: e, ens: e, fin: e, gov: e, ind: e, info: e, intl: e, mincom: e, nat: e, net: e, org: e, perso: e, tourism: e, orangecloud: t }], to: [1, { 611: t, com: e, edu: e, gov: e, mil: e, net: e, org: e, oya: t, x0: t, quickconnect: y, vpnplus: t }], tr: [1, { av: e, bbs: e, bel: e, biz: e, com: e, dr: e, edu: e, gen: e, gov: e, info: e, k12: e, kep: e, mil: e, name: e, net: e, org: e, pol: e, tel: e, tsk: e, tv: e, web: e, nc: s }], tt: [1, { biz: e, co: e, com: e, edu: e, gov: e, info: e, mil: e, name: e, net: e, org: e, pro: e }], tv: [1, { "better-than": t, dyndns: t, "on-the-web": t, "worse-than": t, from: t, sakura: t }], tw: [1, { club: e, com: [1, { mymailer: t }], ebiz: e, edu: e, game: e, gov: e, idv: e, mil: e, net: e, org: e, url: t, mydns: t }], tz: [1, { ac: e, co: e, go: e, hotel: e, info: e, me: e, mil: e, mobi: e, ne: e, or: e, sc: e, tv: e }], ua: [1, { com: e, edu: e, gov: e, in: e, net: e, org: e, cherkassy: e, cherkasy: e, chernigov: e, chernihiv: e, chernivtsi: e, chernovtsy: e, ck: e, cn: e, cr: e, crimea: e, cv: e, dn: e, dnepropetrovsk: e, dnipropetrovsk: e, donetsk: e, dp: e, if: e, "ivano-frankivsk": e, kh: e, kharkiv: e, kharkov: e, kherson: e, khmelnitskiy: e, khmelnytskyi: e, kiev: e, kirovograd: e, km: e, kr: e, kropyvnytskyi: e, krym: e, ks: e, kv: e, kyiv: e, lg: e, lt: e, lugansk: e, luhansk: e, lutsk: e, lv: e, lviv: e, mk: e, mykolaiv: e, nikolaev: e, od: e, odesa: e, odessa: e, pl: e, poltava: e, rivne: e, rovno: e, rv: e, sb: e, sebastopol: e, sevastopol: e, sm: e, sumy: e, te: e, ternopil: e, uz: e, uzhgorod: e, uzhhorod: e, vinnica: e, vinnytsia: e, vn: e, volyn: e, yalta: e, zakarpattia: e, zaporizhzhe: e, zaporizhzhia: e, zhitomir: e, zhytomyr: e, zp: e, zt: e, cc: t, inf: t, ltd: t, cx: t, ie: t, biz: t, co: t, pp: t, v: t }], ug: [1, { ac: e, co: e, com: e, go: e, ne: e, or: e, org: e, sc: e }], uk: [1, { ac: e, co: [1, { bytemark: [0, { dh: t, vm: t }], layershift: J, barsy: t, barsyonline: t, retrosnub: Dt, "nh-serv": t, "no-ip": t, adimo: t, myspreadshop: t }], gov: [1, { api: t, campaign: t, service: t }], ltd: e, me: e, net: e, nhs: e, org: [1, { glug: t, lug: t, lugs: t, affinitylottery: t, raffleentry: t, weeklylottery: t }], plc: e, police: e, sch: f, conn: t, copro: t, hosp: t, "independent-commission": t, "independent-inquest": t, "independent-inquiry": t, "independent-panel": t, "independent-review": t, "public-inquiry": t, "royal-commission": t, pymnt: t, barsy: t, nimsite: t, oraclegovcloudapps: a }], us: [1, { dni: e, isa: e, nsn: e, ak: H, al: H, ar: H, as: H, az: H, ca: H, co: H, ct: H, dc: H, de: [1, { cc: e, lib: t }], fl: H, ga: H, gu: H, hi: ia, ia: H, id: H, il: H, in: H, ks: H, ky: H, la: H, ma: [1, { k12: [1, { chtr: e, paroch: e, pvt: e }], cc: e, lib: e }], md: H, me: H, mi: [1, { k12: e, cc: e, lib: e, "ann-arbor": e, cog: e, dst: e, eaton: e, gen: e, mus: e, tec: e, washtenaw: e }], mn: H, mo: H, ms: H, mt: H, nc: H, nd: ia, ne: H, nh: H, nj: H, nm: H, nv: H, ny: H, oh: H, ok: H, or: H, pa: H, pr: H, ri: ia, sc: H, sd: ia, tn: H, tx: H, ut: H, va: H, vi: H, vt: H, wa: H, wi: H, wv: [1, { cc: e }], wy: H, cloudns: t, "is-by": t, "land-4-sale": t, "stuff-4-sale": t, heliohost: t, enscaled: [0, { phx: t }], mircloud: t, ngo: t, golffan: t, noip: t, pointto: t, freeddns: t, srv: [2, { gh: t, gl: t }], platterp: t, servername: t }], uy: [1, { com: e, edu: e, gub: e, mil: e, net: e, org: e }], uz: [1, { co: e, com: e, net: e, org: e }], va: e, vc: [1, { com: e, edu: e, gov: e, mil: e, net: e, org: e, gv: [2, { d: t }], "0e": a, mydns: t }], ve: [1, { arts: e, bib: e, co: e, com: e, e12: e, edu: e, firm: e, gob: e, gov: e, info: e, int: e, mil: e, net: e, nom: e, org: e, rar: e, rec: e, store: e, tec: e, web: e }], vg: e, vi: [1, { co: e, com: e, k12: e, net: e, org: e }], vn: [1, { ac: e, ai: e, biz: e, com: e, edu: e, gov: e, health: e, id: e, info: e, int: e, io: e, name: e, net: e, org: e, pro: e, angiang: e, bacgiang: e, backan: e, baclieu: e, bacninh: e, "baria-vungtau": e, bentre: e, binhdinh: e, binhduong: e, binhphuoc: e, binhthuan: e, camau: e, cantho: e, caobang: e, daklak: e, daknong: e, danang: e, dienbien: e, dongnai: e, dongthap: e, gialai: e, hagiang: e, haiduong: e, haiphong: e, hanam: e, hanoi: e, hatinh: e, haugiang: e, hoabinh: e, hungyen: e, khanhhoa: e, kiengiang: e, kontum: e, laichau: e, lamdong: e, langson: e, laocai: e, longan: e, namdinh: e, nghean: e, ninhbinh: e, ninhthuan: e, phutho: e, phuyen: e, quangbinh: e, quangnam: e, quangngai: e, quangninh: e, quangtri: e, soctrang: e, sonla: e, tayninh: e, thaibinh: e, thainguyen: e, thanhhoa: e, thanhphohochiminh: e, thuathienhue: e, tiengiang: e, travinh: e, tuyenquang: e, vinhlong: e, vinhphuc: e, yenbai: e }], vu: ie, wf: [1, { biz: t, sch: t }], ws: [1, { com: e, edu: e, gov: e, net: e, org: e, advisor: a, cloud66: t, dyndns: t, mypets: t }], yt: [1, { org: t }], "xn--mgbaam7a8h": e, امارات: e, "xn--y9a3aq": e, հայ: e, "xn--54b7fta0cc": e, বাংলা: e, "xn--90ae": e, бг: e, "xn--mgbcpq6gpa1a": e, البحرين: e, "xn--90ais": e, бел: e, "xn--fiqs8s": e, 中国: e, "xn--fiqz9s": e, 中國: e, "xn--lgbbat1ad8j": e, الجزائر: e, "xn--wgbh1c": e, مصر: e, "xn--e1a4c": e, ею: e, "xn--qxa6a": e, ευ: e, "xn--mgbah1a3hjkrd": e, موريتانيا: e, "xn--node": e, გე: e, "xn--qxam": e, ελ: e, "xn--j6w193g": [1, { "xn--gmqw5a": e, "xn--55qx5d": e, "xn--mxtq1m": e, "xn--wcvs22d": e, "xn--uc0atv": e, "xn--od0alg": e }], 香港: [1, { 個人: e, 公司: e, 政府: e, 教育: e, 組織: e, 網絡: e }], "xn--2scrj9c": e, ಭಾರತ: e, "xn--3hcrj9c": e, ଭାରତ: e, "xn--45br5cyl": e, ভাৰত: e, "xn--h2breg3eve": e, भारतम्: e, "xn--h2brj9c8c": e, भारोत: e, "xn--mgbgu82a": e, ڀارت: e, "xn--rvc1e0am3e": e, ഭാരതം: e, "xn--h2brj9c": e, भारत: e, "xn--mgbbh1a": e, بارت: e, "xn--mgbbh1a71e": e, بھارت: e, "xn--fpcrj9c3d": e, భారత్: e, "xn--gecrj9c": e, ભારત: e, "xn--s9brj9c": e, ਭਾਰਤ: e, "xn--45brj9c": e, ভারত: e, "xn--xkc2dl3a5ee0h": e, இந்தியா: e, "xn--mgba3a4f16a": e, ایران: e, "xn--mgba3a4fra": e, ايران: e, "xn--mgbtx2b": e, عراق: e, "xn--mgbayh7gpa": e, الاردن: e, "xn--3e0b707e": e, 한국: e, "xn--80ao21a": e, қаз: e, "xn--q7ce6a": e, ລາວ: e, "xn--fzc2c9e2c": e, ලංකා: e, "xn--xkc2al3hye2a": e, இலங்கை: e, "xn--mgbc0a9azcg": e, المغرب: e, "xn--d1alf": e, мкд: e, "xn--l1acc": e, мон: e, "xn--mix891f": e, 澳門: e, "xn--mix082f": e, 澳门: e, "xn--mgbx4cd0ab": e, مليسيا: e, "xn--mgb9awbf": e, عمان: e, "xn--mgbai9azgqp6j": e, پاکستان: e, "xn--mgbai9a5eva00b": e, پاكستان: e, "xn--ygbi2ammx": e, فلسطين: e, "xn--90a3ac": [1, { "xn--80au": e, "xn--90azh": e, "xn--d1at": e, "xn--c1avg": e, "xn--o1ac": e, "xn--o1ach": e }], срб: [1, { ак: e, обр: e, од: e, орг: e, пр: e, упр: e }], "xn--p1ai": e, рф: e, "xn--wgbl6a": e, قطر: e, "xn--mgberp4a5d4ar": e, السعودية: e, "xn--mgberp4a5d4a87g": e, السعودیة: e, "xn--mgbqly7c0a67fbc": e, السعودیۃ: e, "xn--mgbqly7cvafr": e, السعوديه: e, "xn--mgbpl2fh": e, سودان: e, "xn--yfro4i67o": e, 新加坡: e, "xn--clchc0ea0b2g2a9gcd": e, சிங்கப்பூர்: e, "xn--ogbpf8fl": e, سورية: e, "xn--mgbtf8fl": e, سوريا: e, "xn--o3cw4h": [1, { "xn--o3cyx2a": e, "xn--12co0c3b4eva": e, "xn--m3ch0j3a": e, "xn--h3cuzk1di": e, "xn--12c1fe0br": e, "xn--12cfi8ixb8l": e }], ไทย: [1, { ทหาร: e, ธุรกิจ: e, เน็ต: e, รัฐบาล: e, ศึกษา: e, องค์กร: e }], "xn--pgbs0dh": e, تونس: e, "xn--kpry57d": e, 台灣: e, "xn--kprw13d": e, 台湾: e, "xn--nnx388a": e, 臺灣: e, "xn--j1amh": e, укр: e, "xn--mgb2ddes": e, اليمن: e, xxx: e, ye: r, za: [0, { ac: e, agric: e, alt: e, co: e, edu: e, gov: e, grondar: e, law: e, mil: e, net: e, ngo: e, nic: e, nis: e, nom: e, org: e, school: e, tm: e, web: e }], zm: [1, { ac: e, biz: e, co: e, com: e, edu: e, gov: e, info: e, mil: e, net: e, org: e, sch: e }], zw: [1, { ac: e, co: e, gov: e, mil: e, org: e }], aaa: e, aarp: e, abb: e, abbott: e, abbvie: e, abc: e, able: e, abogado: e, abudhabi: e, academy: [1, { official: t }], accenture: e, accountant: e, accountants: e, aco: e, actor: e, ads: e, adult: e, aeg: e, aetna: e, afl: e, africa: e, agakhan: e, agency: e, aig: e, airbus: e, airforce: e, airtel: e, akdn: e, alibaba: e, alipay: e, allfinanz: e, allstate: e, ally: e, alsace: e, alstom: e, amazon: e, americanexpress: e, americanfamily: e, amex: e, amfam: e, amica: e, amsterdam: e, analytics: e, android: e, anquan: e, anz: e, aol: e, apartments: e, app: [1, { adaptable: t, aiven: t, beget: a, clerk: t, clerkstage: t, wnext: t, csb: [2, { preview: t }], deta: t, ondigitalocean: t, easypanel: t, encr: t, evervault: i, expo: [2, { staging: t }], edgecompute: t, "on-fleek": t, flutterflow: t, framer: t, hosted: a, run: a, web: t, hasura: t, botdash: t, loginline: t, medusajs: t, messerli: t, netfy: t, netlify: t, ngrok: t, "ngrok-free": t, developer: a, noop: t, northflank: a, upsun: a, replit: o, nyat: t, snowflake: [0, { "*": t, privatelink: a }], streamlit: t, storipress: t, telebit: t, typedream: t, vercel: t, bookonline: t, wdh: t, zeabur: t }], apple: e, aquarelle: e, arab: e, aramco: e, archi: e, army: e, art: e, arte: e, asda: e, associates: e, athleta: e, attorney: e, auction: e, audi: e, audible: e, audio: e, auspost: e, author: e, auto: e, autos: e, aws: [1, { sagemaker: [0, { "ap-northeast-1": c, "ap-northeast-2": c, "ap-south-1": c, "ap-southeast-1": c, "ap-southeast-2": c, "ca-central-1": d, "eu-central-1": c, "eu-west-1": c, "eu-west-2": c, "us-east-1": d, "us-east-2": d, "us-west-2": d, "af-south-1": l, "ap-east-1": l, "ap-northeast-3": l, "ap-south-2": u, "ap-southeast-3": l, "ap-southeast-4": u, "ca-west-1": [0, { notebook: t, "notebook-fips": t }], "eu-central-2": u, "eu-north-1": l, "eu-south-1": l, "eu-south-2": l, "eu-west-3": l, "il-central-1": l, "me-central-1": l, "me-south-1": l, "sa-east-1": l, "us-gov-east-1": h, "us-gov-west-1": h, "us-west-1": [0, { notebook: t, "notebook-fips": t, studio: t }], experiments: a }], repost: [0, { private: a }] }], axa: e, azure: e, baby: e, baidu: e, banamex: e, band: e, bank: e, bar: e, barcelona: e, barclaycard: e, barclays: e, barefoot: e, bargains: e, baseball: e, basketball: [1, { aus: t, nz: t }], bauhaus: e, bayern: e, bbc: e, bbt: e, bbva: e, bcg: e, bcn: e, beats: e, beauty: e, beer: e, bentley: e, berlin: e, best: e, bestbuy: e, bet: e, bharti: e, bible: e, bid: e, bike: e, bing: e, bingo: e, bio: e, black: e, blackfriday: e, blockbuster: e, blog: e, bloomberg: e, blue: e, bms: e, bmw: e, bnpparibas: e, boats: e, boehringer: e, bofa: e, bom: e, bond: e, boo: e, book: e, booking: e, bosch: e, bostik: e, boston: e, bot: e, boutique: e, box: e, bradesco: e, bridgestone: e, broadway: e, broker: e, brother: e, brussels: e, build: [1, { v0: t }], builders: [1, { cloudsite: t }], business: m, buy: e, buzz: e, bzh: e, cab: e, cafe: e, cal: e, call: e, calvinklein: e, cam: e, camera: e, camp: [1, { emf: [0, { at: t }] }], canon: e, capetown: e, capital: e, capitalone: e, car: e, caravan: e, cards: e, care: e, career: e, careers: e, cars: e, casa: [1, { nabu: [0, { ui: t }] }], case: e, cash: e, casino: e, catering: e, catholic: e, cba: e, cbn: e, cbre: e, center: e, ceo: e, cern: e, cfa: e, cfd: e, chanel: e, channel: e, charity: e, chase: e, chat: e, cheap: e, chintai: e, christmas: e, chrome: e, church: e, cipriani: e, circle: e, cisco: e, citadel: e, citi: e, citic: e, city: e, claims: e, cleaning: e, click: e, clinic: e, clinique: e, clothing: e, cloud: [1, { elementor: t, encoway: [0, { eu: t }], statics: a, ravendb: t, axarnet: [0, { "es-1": t }], diadem: t, jelastic: [0, { vip: t }], jele: t, "jenv-aruba": [0, { aruba: [0, { eur: [0, { it1: t }] }], it1: t }], keliweb: [2, { cs: t }], oxa: [2, { tn: t, uk: t }], primetel: [2, { uk: t }], reclaim: [0, { ca: t, uk: t, us: t }], trendhosting: [0, { ch: t, de: t }], jotelulu: t, kuleuven: t, linkyard: t, magentosite: a, matlab: t, observablehq: t, perspecta: t, vapor: t, "on-rancher": a, scw: [0, { baremetal: [0, { "fr-par-1": t, "fr-par-2": t, "nl-ams-1": t }], "fr-par": [0, { cockpit: t, fnc: [2, { functions: t }], k8s: p, s3: t, "s3-website": t, whm: t }], instances: [0, { priv: t, pub: t }], k8s: t, "nl-ams": [0, { cockpit: t, k8s: p, s3: t, "s3-website": t, whm: t }], "pl-waw": [0, { cockpit: t, k8s: p, s3: t, "s3-website": t }], scalebook: t, smartlabeling: t }], servebolt: t, onstackit: [0, { runs: t }], trafficplex: t, "unison-services": t, urown: t, voorloper: t, zap: t }], club: [1, { cloudns: t, jele: t, barsy: t }], clubmed: e, coach: e, codes: [1, { owo: a }], coffee: e, college: e, cologne: e, commbank: e, community: [1, { nog: t, ravendb: t, myforum: t }], company: e, compare: e, computer: e, comsec: e, condos: e, construction: e, consulting: e, contact: e, contractors: e, cooking: e, cool: [1, { elementor: t, de: t }], corsica: e, country: e, coupon: e, coupons: e, courses: e, cpa: e, credit: e, creditcard: e, creditunion: e, cricket: e, crown: e, crs: e, cruise: e, cruises: e, cuisinella: e, cymru: e, cyou: e, dad: e, dance: e, data: e, date: e, dating: e, datsun: e, day: e, dclk: e, dds: e, deal: e, dealer: e, deals: e, degree: e, delivery: e, dell: e, deloitte: e, delta: e, democrat: e, dental: e, dentist: e, desi: e, design: [1, { graphic: t, bss: t }], dev: [1, { "12chars": t, myaddr: t, panel: t, lcl: a, lclstage: a, stg: a, stgstage: a, pages: t, r2: t, workers: t, deno: t, "deno-staging": t, deta: t, evervault: i, fly: t, githubpreview: t, gateway: a, hrsn: t, botdash: t, "is-a-good": t, "is-a": t, iserv: t, runcontainers: t, localcert: [0, { user: a }], loginline: t, barsy: t, mediatech: t, modx: t, ngrok: t, "ngrok-free": t, "is-a-fullstack": t, "is-cool": t, "is-not-a": t, localplayer: t, xmit: t, "platter-app": t, replit: [2, { archer: t, bones: t, canary: t, global: t, hacker: t, id: t, janeway: t, kim: t, kira: t, kirk: t, odo: t, paris: t, picard: t, pike: t, prerelease: t, reed: t, riker: t, sisko: t, spock: t, staging: t, sulu: t, tarpit: t, teams: t, tucker: t, wesley: t, worf: t }], crm: [0, { d: a, w: a, wa: a, wb: a, wc: a, wd: a, we: a, wf: a }], vercel: t, webhare: a }], dhl: e, diamonds: e, diet: e, digital: [1, { cloudapps: [2, { london: t }] }], direct: [1, { libp2p: t }], directory: e, discount: e, discover: e, dish: e, diy: e, dnp: e, docs: e, doctor: e, dog: e, domains: e, dot: e, download: e, drive: e, dtv: e, dubai: e, dunlop: e, dupont: e, durban: e, dvag: e, dvr: e, earth: e, eat: e, eco: e, edeka: e, education: m, email: [1, { crisp: [0, { on: t }], tawk: M, tawkto: M }], emerck: e, energy: e, engineer: e, engineering: e, enterprises: e, epson: e, equipment: e, ericsson: e, erni: e, esq: e, estate: [1, { compute: a }], eurovision: e, eus: [1, { party: q }], events: [1, { koobin: t, co: t }], exchange: e, expert: e, exposed: e, express: e, extraspace: e, fage: e, fail: e, fairwinds: e, faith: e, family: e, fan: e, fans: e, farm: [1, { storj: t }], farmers: e, fashion: e, fast: e, fedex: e, feedback: e, ferrari: e, ferrero: e, fidelity: e, fido: e, film: e, final: e, finance: e, financial: m, fire: e, firestone: e, firmdale: e, fish: e, fishing: e, fit: e, fitness: e, flickr: e, flights: e, flir: e, florist: e, flowers: e, fly: e, foo: e, food: e, football: e, ford: e, forex: e, forsale: e, forum: e, foundation: e, fox: e, free: e, fresenius: e, frl: e, frogans: e, frontier: e, ftr: e, fujitsu: e, fun: e, fund: e, furniture: e, futbol: e, fyi: e, gal: e, gallery: e, gallo: e, gallup: e, game: e, games: [1, { pley: t, sheezy: t }], gap: e, garden: e, gay: [1, { pages: t }], gbiz: e, gdn: [1, { cnpy: t }], gea: e, gent: e, genting: e, george: e, ggee: e, gift: e, gifts: e, gives: e, giving: e, glass: e, gle: e, global: e, globo: e, gmail: e, gmbh: e, gmo: e, gmx: e, godaddy: e, gold: e, goldpoint: e, golf: e, goo: e, goodyear: e, goog: [1, { cloud: t, translate: t, usercontent: a }], google: e, gop: e, got: e, grainger: e, graphics: e, gratis: e, green: e, gripe: e, grocery: e, group: [1, { discourse: t }], gucci: e, guge: e, guide: e, guitars: e, guru: e, hair: e, hamburg: e, hangout: e, haus: e, hbo: e, hdfc: e, hdfcbank: e, health: [1, { hra: t }], healthcare: e, help: e, helsinki: e, here: e, hermes: e, hiphop: e, hisamitsu: e, hitachi: e, hiv: e, hkt: e, hockey: e, holdings: e, holiday: e, homedepot: e, homegoods: e, homes: e, homesense: e, honda: e, horse: e, hospital: e, host: [1, { cloudaccess: t, freesite: t, easypanel: t, fastvps: t, myfast: t, tempurl: t, wpmudev: t, jele: t, mircloud: t, wp2: t, half: t }], hosting: [1, { opencraft: t }], hot: e, hotels: e, hotmail: e, house: e, how: e, hsbc: e, hughes: e, hyatt: e, hyundai: e, ibm: e, icbc: e, ice: e, icu: e, ieee: e, ifm: e, ikano: e, imamat: e, imdb: e, immo: e, immobilien: e, inc: e, industries: e, infiniti: e, ing: e, ink: e, institute: e, insurance: e, insure: e, international: e, intuit: e, investments: e, ipiranga: e, irish: e, ismaili: e, ist: e, istanbul: e, itau: e, itv: e, jaguar: e, java: e, jcb: e, jeep: e, jetzt: e, jewelry: e, jio: e, jll: e, jmp: e, jnj: e, joburg: e, jot: e, joy: e, jpmorgan: e, jprs: e, juegos: e, juniper: e, kaufen: e, kddi: e, kerryhotels: e, kerrylogistics: e, kerryproperties: e, kfh: e, kia: e, kids: e, kim: e, kindle: e, kitchen: e, kiwi: e, koeln: e, komatsu: e, kosher: e, kpmg: e, kpn: e, krd: [1, { co: t, edu: t }], kred: e, kuokgroup: e, kyoto: e, lacaixa: e, lamborghini: e, lamer: e, lancaster: e, land: e, landrover: e, lanxess: e, lasalle: e, lat: e, latino: e, latrobe: e, law: e, lawyer: e, lds: e, lease: e, leclerc: e, lefrak: e, legal: e, lego: e, lexus: e, lgbt: e, lidl: e, life: e, lifeinsurance: e, lifestyle: e, lighting: e, like: e, lilly: e, limited: e, limo: e, lincoln: e, link: [1, { myfritz: t, cyon: t, dweb: a, nftstorage: [0, { ipfs: t }], mypep: t }], lipsy: e, live: [1, { aem: t, hlx: t, ewp: a }], living: e, llc: e, llp: e, loan: e, loans: e, locker: e, locus: e, lol: [1, { omg: t }], london: e, lotte: e, lotto: e, love: e, lpl: e, lplfinancial: e, ltd: e, ltda: e, lundbeck: e, luxe: e, luxury: e, madrid: e, maif: e, maison: e, makeup: e, man: e, management: [1, { router: t }], mango: e, map: e, market: e, marketing: e, markets: e, marriott: e, marshalls: e, mattel: e, mba: e, mckinsey: e, med: e, media: ke, meet: e, melbourne: e, meme: e, memorial: e, men: e, menu: [1, { barsy: t, barsyonline: t }], merck: e, merckmsd: e, miami: e, microsoft: e, mini: e, mint: e, mit: e, mitsubishi: e, mlb: e, mls: e, mma: e, mobile: e, moda: e, moe: e, moi: e, mom: [1, { ind: t }], monash: e, money: e, monster: e, mormon: e, mortgage: e, moscow: e, moto: e, motorcycles: e, mov: e, movie: e, msd: e, mtn: e, mtr: e, music: e, nab: e, nagoya: e, navy: e, nba: e, nec: e, netbank: e, netflix: e, network: [1, { alces: a, co: t, arvo: t, azimuth: t, tlon: t }], neustar: e, new: e, news: [1, { noticeable: t }], next: e, nextdirect: e, nexus: e, nfl: e, ngo: e, nhk: e, nico: e, nike: e, nikon: e, ninja: e, nissan: e, nissay: e, nokia: e, norton: e, now: e, nowruz: e, nowtv: e, nra: e, nrw: e, ntt: e, nyc: e, obi: e, observer: e, office: e, okinawa: e, olayan: e, olayangroup: e, ollo: e, omega: e, one: [1, { kin: a, service: t }], ong: [1, { obl: t }], onl: e, online: [1, { eero: t, "eero-stage": t, websitebuilder: t, barsy: t }], ooo: e, open: e, oracle: e, orange: [1, { tech: t }], organic: e, origins: e, osaka: e, otsuka: e, ott: e, ovh: [1, { nerdpol: t }], page: [1, { aem: t, hlx: t, hlx3: t, translated: t, codeberg: t, heyflow: t, prvcy: t, rocky: t, pdns: t, plesk: t }], panasonic: e, paris: e, pars: e, partners: e, parts: e, party: e, pay: e, pccw: e, pet: e, pfizer: e, pharmacy: e, phd: e, philips: e, phone: e, photo: e, photography: e, photos: ke, physio: e, pics: e, pictet: e, pictures: [1, { 1337: t }], pid: e, pin: e, ping: e, pink: e, pioneer: e, pizza: [1, { ngrok: t }], place: m, play: e, playstation: e, plumbing: e, plus: e, pnc: e, pohl: e, poker: e, politie: e, porn: e, pramerica: e, praxi: e, press: e, prime: e, prod: e, productions: e, prof: e, progressive: e, promo: e, properties: e, property: e, protection: e, pru: e, prudential: e, pub: [1, { id: a, kin: a, barsy: t }], pwc: e, qpon: e, quebec: e, quest: e, racing: e, radio: e, read: e, realestate: e, realtor: e, realty: e, recipes: e, red: e, redstone: e, redumbrella: e, rehab: e, reise: e, reisen: e, reit: e, reliance: e, ren: e, rent: e, rentals: e, repair: e, report: e, republican: e, rest: e, restaurant: e, review: e, reviews: e, rexroth: e, rich: e, richardli: e, ricoh: e, ril: e, rio: e, rip: [1, { clan: t }], rocks: [1, { myddns: t, stackit: t, "lima-city": t, webspace: t }], rodeo: e, rogers: e, room: e, rsvp: e, rugby: e, ruhr: e, run: [1, { development: t, ravendb: t, servers: t, build: a, code: a, database: a, migration: a, onporter: t, repl: t, stackit: t, val: [0, { express: t, web: t }], wix: t }], rwe: e, ryukyu: e, saarland: e, safe: e, safety: e, sakura: e, sale: e, salon: e, samsclub: e, samsung: e, sandvik: e, sandvikcoromant: e, sanofi: e, sap: e, sarl: e, sas: e, save: e, saxo: e, sbi: e, sbs: e, scb: e, schaeffler: e, schmidt: e, scholarships: e, school: e, schule: e, schwarz: e, science: e, scot: [1, { gov: [2, { service: t }] }], search: e, seat: e, secure: e, security: e, seek: e, select: e, sener: e, services: [1, { loginline: t }], seven: e, sew: e, sex: e, sexy: e, sfr: e, shangrila: e, sharp: e, shell: e, shia: e, shiksha: e, shoes: e, shop: [1, { base: t, hoplix: t, barsy: t, barsyonline: t, shopware: t }], shopping: e, shouji: e, show: e, silk: e, sina: e, singles: e, site: [1, { canva: b, cloudera: a, convex: t, cyon: t, fastvps: t, heyflow: t, jele: t, jouwweb: t, loginline: t, barsy: t, notion: t, omniwe: t, opensocial: t, madethis: t, platformsh: a, tst: a, byen: t, srht: t, novecore: t, wpsquared: t }], ski: e, skin: e, sky: e, skype: e, sling: e, smart: e, smile: e, sncf: e, soccer: e, social: e, softbank: e, software: e, sohu: e, solar: e, solutions: e, song: e, sony: e, soy: e, spa: e, space: [1, { myfast: t, heiyu: t, hf: [2, { static: t }], "app-ionos": t, project: t, uber: t, xs4all: t }], sport: e, spot: e, srl: e, stada: e, staples: e, star: e, statebank: e, statefarm: e, stc: e, stcgroup: e, stockholm: e, storage: e, store: [1, { barsy: t, sellfy: t, shopware: t, storebase: t }], stream: e, studio: e, study: e, style: e, sucks: e, supplies: e, supply: e, support: [1, { barsy: t }], surf: e, surgery: e, suzuki: e, swatch: e, swiss: e, sydney: e, systems: [1, { knightpoint: t }], tab: e, taipei: e, talk: e, taobao: e, target: e, tatamotors: e, tatar: e, tattoo: e, tax: e, taxi: e, tci: e, tdk: e, team: [1, { discourse: t, jelastic: t }], tech: [1, { cleverapps: t }], technology: m, temasek: e, tennis: e, teva: e, thd: e, theater: e, theatre: e, tiaa: e, tickets: e, tienda: e, tips: e, tires: e, tirol: e, tjmaxx: e, tjx: e, tkmaxx: e, tmall: e, today: [1, { prequalifyme: t }], tokyo: e, tools: [1, { addr: ce, myaddr: t }], top: [1, { ntdll: t, wadl: a }], toray: e, toshiba: e, total: e, tours: e, town: e, toyota: e, toys: e, trade: e, trading: e, training: e, travel: e, travelers: e, travelersinsurance: e, trust: e, trv: e, tube: e, tui: e, tunes: e, tushu: e, tvs: e, ubank: e, ubs: e, unicom: e, university: e, uno: e, uol: e, ups: e, vacations: e, vana: e, vanguard: e, vegas: e, ventures: e, verisign: e, versicherung: e, vet: e, viajes: e, video: e, vig: e, viking: e, villas: e, vin: e, vip: e, virgin: e, visa: e, vision: e, viva: e, vivo: e, vlaanderen: e, vodka: e, volvo: e, vote: e, voting: e, voto: e, voyage: e, wales: e, walmart: e, walter: e, wang: e, wanggou: e, watch: e, watches: e, weather: e, weatherchannel: e, webcam: e, weber: e, website: ke, wed: e, wedding: e, weibo: e, weir: e, whoswho: e, wien: e, wiki: ke, williamhill: e, win: e, windows: e, wine: e, winners: e, wme: e, wolterskluwer: e, woodside: e, work: e, works: e, world: e, wow: e, wtc: e, wtf: e, xbox: e, xerox: e, xihuan: e, xin: e, "xn--11b4c3d": e, कॉम: e, "xn--1ck2e1b": e, セール: e, "xn--1qqw23a": e, 佛山: e, "xn--30rr7y": e, 慈善: e, "xn--3bst00m": e, 集团: e, "xn--3ds443g": e, 在线: e, "xn--3pxu8k": e, 点看: e, "xn--42c2d9a": e, คอม: e, "xn--45q11c": e, 八卦: e, "xn--4gbrim": e, موقع: e, "xn--55qw42g": e, 公益: e, "xn--55qx5d": e, 公司: e, "xn--5su34j936bgsg": e, 香格里拉: e, "xn--5tzm5g": e, 网站: e, "xn--6frz82g": e, 移动: e, "xn--6qq986b3xl": e, 我爱你: e, "xn--80adxhks": e, москва: e, "xn--80aqecdr1a": e, католик: e, "xn--80asehdb": e, онлайн: e, "xn--80aswg": e, сайт: e, "xn--8y0a063a": e, 联通: e, "xn--9dbq2a": e, קום: e, "xn--9et52u": e, 时尚: e, "xn--9krt00a": e, 微博: e, "xn--b4w605ferd": e, 淡马锡: e, "xn--bck1b9a5dre4c": e, ファッション: e, "xn--c1avg": e, орг: e, "xn--c2br7g": e, नेट: e, "xn--cck2b3b": e, ストア: e, "xn--cckwcxetd": e, アマゾン: e, "xn--cg4bki": e, 삼성: e, "xn--czr694b": e, 商标: e, "xn--czrs0t": e, 商店: e, "xn--czru2d": e, 商城: e, "xn--d1acj3b": e, дети: e, "xn--eckvdtc9d": e, ポイント: e, "xn--efvy88h": e, 新闻: e, "xn--fct429k": e, 家電: e, "xn--fhbei": e, كوم: e, "xn--fiq228c5hs": e, 中文网: e, "xn--fiq64b": e, 中信: e, "xn--fjq720a": e, 娱乐: e, "xn--flw351e": e, 谷歌: e, "xn--fzys8d69uvgm": e, 電訊盈科: e, "xn--g2xx48c": e, 购物: e, "xn--gckr3f0f": e, クラウド: e, "xn--gk3at1e": e, 通販: e, "xn--hxt814e": e, 网店: e, "xn--i1b6b1a6a2e": e, संगठन: e, "xn--imr513n": e, 餐厅: e, "xn--io0a7i": e, 网络: e, "xn--j1aef": e, ком: e, "xn--jlq480n2rg": e, 亚马逊: e, "xn--jvr189m": e, 食品: e, "xn--kcrx77d1x4a": e, 飞利浦: e, "xn--kput3i": e, 手机: e, "xn--mgba3a3ejt": e, ارامكو: e, "xn--mgba7c0bbn0a": e, العليان: e, "xn--mgbab2bd": e, بازار: e, "xn--mgbca7dzdo": e, ابوظبي: e, "xn--mgbi4ecexp": e, كاثوليك: e, "xn--mgbt3dhd": e, همراه: e, "xn--mk1bu44c": e, 닷컴: e, "xn--mxtq1m": e, 政府: e, "xn--ngbc5azd": e, شبكة: e, "xn--ngbe9e0a": e, بيتك: e, "xn--ngbrx": e, عرب: e, "xn--nqv7f": e, 机构: e, "xn--nqv7fs00ema": e, 组织机构: e, "xn--nyqy26a": e, 健康: e, "xn--otu796d": e, 招聘: e, "xn--p1acf": [1, { "xn--90amc": t, "xn--j1aef": t, "xn--j1ael8b": t, "xn--h1ahn": t, "xn--j1adp": t, "xn--c1avg": t, "xn--80aaa0cvac": t, "xn--h1aliz": t, "xn--90a1af": t, "xn--41a": t }], рус: [1, { биз: t, ком: t, крым: t, мир: t, мск: t, орг: t, самара: t, сочи: t, спб: t, я: t }], "xn--pssy2u": e, 大拿: e, "xn--q9jyb4c": e, みんな: e, "xn--qcka1pmc": e, グーグル: e, "xn--rhqv96g": e, 世界: e, "xn--rovu88b": e, 書籍: e, "xn--ses554g": e, 网址: e, "xn--t60b56a": e, 닷넷: e, "xn--tckwe": e, コム: e, "xn--tiq49xqyj": e, 天主教: e, "xn--unup4y": e, 游戏: e, "xn--vermgensberater-ctb": e, vermögensberater: e, "xn--vermgensberatung-pwb": e, vermögensberatung: e, "xn--vhquv": e, 企业: e, "xn--vuq861b": e, 信息: e, "xn--w4r85el8fhu5dnra": e, 嘉里大酒店: e, "xn--w4rs40l": e, 嘉里: e, "xn--xhq521b": e, 广东: e, "xn--zfr164b": e, 政务: e, xyz: [1, { botdash: t, telebit: a }], yachts: e, yahoo: e, yamaxun: e, yandex: e, yodobashi: e, yoga: e, yokohama: e, you: e, youtube: e, yun: e, zappos: e, zara: e, zero: e, zip: e, zone: [1, { cloud66: t, triton: a, stackit: t, lima: t }], zuerich: e }];
}();
function Il(e, t, n, r) {
  let a = null, i = t;
  for (; i !== void 0 && (i[0] & r && (a = {
    index: n + 1,
    isIcann: i[0] === 1,
    isPrivate: i[0] === 2
  }), n !== -1); ) {
    const o = i[1];
    i = Object.prototype.hasOwnProperty.call(o, e[n]) ? o[e[n]] : o["*"], n -= 1;
  }
  return a;
}
function ar(e, t, n) {
  var r;
  if (sA(e, t, n))
    return;
  const a = e.split("."), i = (t.allowPrivateDomains ? 2 : 0) | (t.allowIcannDomains ? 1 : 0), o = Il(a, cA, a.length - 1, i);
  if (o !== null) {
    n.isIcann = o.isIcann, n.isPrivate = o.isPrivate, n.publicSuffix = a.slice(o.index + 1).join(".");
    return;
  }
  const s = Il(a, lA, a.length - 1, i);
  if (s !== null) {
    n.isIcann = s.isIcann, n.isPrivate = s.isPrivate, n.publicSuffix = a.slice(s.index).join(".");
    return;
  }
  n.isIcann = !1, n.isPrivate = !1, n.publicSuffix = (r = a[a.length - 1]) !== null && r !== void 0 ? r : null;
}
const _t = cf();
function uA(e, t = {}) {
  return rr(e, 5, ar, t, cf());
}
function dA(e, t = {}) {
  return ea(_t), rr(e, 0, ar, t, _t).hostname;
}
function fA(e, t = {}) {
  return ea(_t), rr(e, 2, ar, t, _t).publicSuffix;
}
function hA(e, t = {}) {
  return ea(_t), rr(e, 3, ar, t, _t).domain;
}
function gA(e, t = {}) {
  return ea(_t), rr(e, 4, ar, t, _t).subdomain;
}
function mA(e, t = {}) {
  return ea(_t), rr(e, 5, ar, t, _t).domainWithoutSuffix;
}
const pA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getDomain: hA,
  getDomainWithoutSuffix: mA,
  getHostname: dA,
  getPublicSuffix: fA,
  getSubdomain: gA,
  parse: uA
}, Symbol.toStringTag, { value: "Module" })), yA = /* @__PURE__ */ of(pA);
var Tl;
function ci() {
  if (Tl) return ba;
  Tl = 1, Object.defineProperty(ba, "__esModule", { value: !0 }), ba.getPublicSuffix = a;
  const e = yA, t = ["local", "example", "invalid", "localhost", "test"], n = ["localhost", "invalid"], r = {
    allowSpecialUseDomain: !1,
    ignoreError: !1
  };
  function a(i, o = {}) {
    o = { ...r, ...o };
    const s = i.split("."), l = s[s.length - 1], c = !!o.allowSpecialUseDomain, u = !!o.ignoreError;
    if (c && l !== void 0 && t.includes(l)) {
      if (s.length > 1)
        return `${s[s.length - 2]}.${l}`;
      if (n.includes(l))
        return l;
    }
    if (!u && l !== void 0 && t.includes(l))
      throw new Error(`Cookie has domain set to the public suffix "${l}" which is a special use domain. To allow this, configure your CookieJar with {allowSpecialUseDomain: true, rejectPublicSuffixes: false}.`);
    const d = (0, e.getDomain)(i, {
      allowIcannDomains: !0,
      allowPrivateDomains: !0
    });
    if (d)
      return d;
  }
  return ba;
}
var Bl;
function lf() {
  if (Bl) return ya;
  Bl = 1, Object.defineProperty(ya, "__esModule", { value: !0 }), ya.permuteDomain = t;
  const e = ci();
  function t(n, r) {
    const a = (0, e.getPublicSuffix)(n, {
      allowSpecialUseDomain: r
    });
    if (!a)
      return;
    if (a == n)
      return [n];
    n.slice(-1) == "." && (n = n.slice(0, -1));
    const o = n.slice(0, -(a.length + 1)).split(".").reverse();
    let s = a;
    const l = [s];
    for (; o.length; )
      s = `${o.shift()}.${s}`, l.push(s);
    return l;
  }
  return ya;
}
var fr = {}, Ol;
function ws() {
  if (Ol) return fr;
  Ol = 1, Object.defineProperty(fr, "__esModule", { value: !0 }), fr.Store = void 0;
  class e {
    constructor() {
      this.synchronous = !1;
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    findCookie(n, r, a, i) {
      throw new Error("findCookie is not implemented");
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    findCookies(n, r, a = !1, i) {
      throw new Error("findCookies is not implemented");
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    putCookie(n, r) {
      throw new Error("putCookie is not implemented");
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    updateCookie(n, r, a) {
      throw new Error("updateCookie is not implemented");
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    removeCookie(n, r, a, i) {
      throw new Error("removeCookie is not implemented");
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    removeCookies(n, r, a) {
      throw new Error("removeCookies is not implemented");
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    removeAllCookies(n) {
      throw new Error("removeAllCookies is not implemented");
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    getAllCookies(n) {
      throw new Error("getAllCookies is not implemented (therefore jar cannot be serialized)");
    }
  }
  return fr.Store = e, fr;
}
var Xi = {}, Dl;
function li() {
  return Dl || (Dl = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.safeToString = e.objectToString = void 0, e.createPromiseCallback = i, e.inOperator = o;
    const t = (s) => Object.prototype.toString.call(s);
    e.objectToString = t;
    const n = (s, l) => typeof s.join != "function" ? (0, e.objectToString)(s) : (l.add(s), s.map((u) => u == null || l.has(u) ? "" : r(u, l)).join()), r = (s, l = /* @__PURE__ */ new WeakSet()) => typeof s != "object" || s === null ? String(s) : typeof s.toString == "function" ? Array.isArray(s) ? (
      // Arrays have a weird custom toString that we need to replicate
      n(s, l)
    ) : String(s) : (0, e.objectToString)(s), a = (s) => r(s);
    e.safeToString = a;
    function i(s) {
      let l, c, u;
      const d = new Promise((h, f) => {
        c = h, u = f;
      });
      return typeof s == "function" ? l = (h, f) => {
        try {
          h ? s(h) : s(null, f);
        } catch (m) {
          u(m instanceof Error ? m : new Error());
        }
      } : l = (h, f) => {
        try {
          h ? u(h) : c(f);
        } catch (m) {
          u(m instanceof Error ? m : new Error());
        }
      }, {
        promise: d,
        callback: l,
        resolve: (h) => (l(null, h), d),
        reject: (h) => (l(h), d)
      };
    }
    function o(s, l) {
      return s in l;
    }
  }(Xi)), Xi;
}
var jl;
function uf() {
  if (jl) return dr;
  jl = 1, Object.defineProperty(dr, "__esModule", { value: !0 }), dr.MemoryCookieStore = void 0;
  const e = bs(), t = lf(), n = ws(), r = li();
  class a extends n.Store {
    /**
     * Create a new {@link MemoryCookieStore}.
     */
    constructor() {
      super(), this.synchronous = !0, this.idx = /* @__PURE__ */ Object.create(null);
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    findCookie(o, s, l, c) {
      var h, f;
      const u = (0, r.createPromiseCallback)(c);
      if (o == null || s == null || l == null)
        return u.resolve(void 0);
      const d = (f = (h = this.idx[o]) == null ? void 0 : h[s]) == null ? void 0 : f[l];
      return u.resolve(d);
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    findCookies(o, s, l = !1, c) {
      typeof l == "function" && (c = l, l = !0);
      const u = [], d = (0, r.createPromiseCallback)(c);
      if (!o)
        return d.resolve([]);
      let h;
      s ? h = function(p) {
        for (const b in p)
          if ((0, e.pathMatch)(s, b)) {
            const _ = p[b];
            for (const k in _) {
              const y = _[k];
              y && u.push(y);
            }
          }
      } : h = function(p) {
        for (const b in p) {
          const _ = p[b];
          for (const k in _) {
            const y = _[k];
            y && u.push(y);
          }
        }
      };
      const f = (0, t.permuteDomain)(o, l) || [o], m = this.idx;
      return f.forEach((g) => {
        const p = m[g];
        p && h(p);
      }), d.resolve(u);
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    putCookie(o, s) {
      const l = (0, r.createPromiseCallback)(s), { domain: c, path: u, key: d } = o;
      if (c == null || u == null || d == null)
        return l.resolve(void 0);
      const h = this.idx[c] ?? /* @__PURE__ */ Object.create(null);
      this.idx[c] = h;
      const f = h[u] ?? /* @__PURE__ */ Object.create(null);
      return h[u] = f, f[d] = o, l.resolve(void 0);
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    updateCookie(o, s, l) {
      if (l)
        this.putCookie(s, l);
      else
        return this.putCookie(s);
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    removeCookie(o, s, l, c) {
      var d, h;
      const u = (0, r.createPromiseCallback)(c);
      return (h = (d = this.idx[o]) == null ? void 0 : d[s]) == null || delete h[l], u.resolve(void 0);
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    removeCookies(o, s, l) {
      const c = (0, r.createPromiseCallback)(l), u = this.idx[o];
      return u && (s ? delete u[s] : delete this.idx[o]), c.resolve(void 0);
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    removeAllCookies(o) {
      const s = (0, r.createPromiseCallback)(o);
      return this.idx = /* @__PURE__ */ Object.create(null), s.resolve(void 0);
    }
    /**
     * @internal No doc because this is an overload that supports the implementation
     */
    getAllCookies(o) {
      const s = (0, r.createPromiseCallback)(o), l = [], c = this.idx;
      return Object.keys(c).forEach((d) => {
        const h = c[d] ?? {};
        Object.keys(h).forEach((m) => {
          const g = h[m] ?? {};
          Object.keys(g).forEach((b) => {
            const _ = g[b];
            _ != null && l.push(_);
          });
        });
      }), l.sort((d, h) => (d.creationIndex || 0) - (h.creationIndex || 0)), s.resolve(l);
    }
  }
  return dr.MemoryCookieStore = a, dr;
}
var Ke = {}, Pl;
function Ja() {
  if (Pl) return Ke;
  Pl = 1, Object.defineProperty(Ke, "__esModule", { value: !0 }), Ke.ParameterError = void 0, Ke.isNonEmptyString = t, Ke.isDate = n, Ke.isEmptyString = r, Ke.isString = a, Ke.isObject = i, Ke.isInteger = o, Ke.validate = s;
  const e = li();
  function t(c) {
    return a(c) && c !== "";
  }
  function n(c) {
    return c instanceof Date && o(c.getTime());
  }
  function r(c) {
    return c === "" || c instanceof String && c.toString() === "";
  }
  function a(c) {
    return typeof c == "string" || c instanceof String;
  }
  function i(c) {
    return (0, e.objectToString)(c) === "[object Object]";
  }
  function o(c) {
    return typeof c == "number" && c % 1 === 0;
  }
  function s(c, u, d) {
    if (c)
      return;
    const h = typeof u == "function" ? u : void 0;
    let f = typeof u == "function" ? d : u;
    i(f) || (f = "[object Object]");
    const m = new l((0, e.safeToString)(f));
    if (h)
      h(m);
    else
      throw m;
  }
  class l extends Error {
  }
  return Ke.ParameterError = l, Ke;
}
var hr = {}, Nl;
function df() {
  return Nl || (Nl = 1, Object.defineProperty(hr, "__esModule", { value: !0 }), hr.version = void 0, hr.version = "5.0.0"), hr;
}
var wa = {}, rn = {}, zl;
function As() {
  if (zl) return rn;
  zl = 1, Object.defineProperty(rn, "__esModule", { value: !0 }), rn.IP_V6_REGEX_OBJECT = rn.PrefixSecurityEnum = void 0, rn.PrefixSecurityEnum = Object.freeze({
    SILENT: "silent",
    STRICT: "strict",
    DISABLED: "unsafe-disabled"
  });
  const e = `
\\[?(?:
(?:[a-fA-F\\d]{1,4}:){7}(?:[a-fA-F\\d]{1,4}|:)|
(?:[a-fA-F\\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|:[a-fA-F\\d]{1,4}|:)|
(?:[a-fA-F\\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,2}|:)|
(?:[a-fA-F\\d]{1,4}:){4}(?:(?::[a-fA-F\\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,3}|:)|
(?:[a-fA-F\\d]{1,4}:){3}(?:(?::[a-fA-F\\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,4}|:)|
(?:[a-fA-F\\d]{1,4}:){2}(?:(?::[a-fA-F\\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,5}|:)|
(?:[a-fA-F\\d]{1,4}:){1}(?:(?::[a-fA-F\\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,6}|:)|
(?::(?:(?::[a-fA-F\\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}|(?::[a-fA-F\\d]{1,4}){1,7}|:))
)(?:%[0-9a-zA-Z]{1,})?\\]?
`.replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim();
  return rn.IP_V6_REGEX_OBJECT = new RegExp(`^${e}$`), rn;
}
const bA = {}, wA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bA
}, Symbol.toStringTag, { value: "Module" })), AA = /* @__PURE__ */ of(wA);
var Rl;
function ui() {
  if (Rl) return wa;
  Rl = 1, Object.defineProperty(wa, "__esModule", { value: !0 }), wa.canonicalDomain = n;
  const e = As(), t = AA;
  function n(r) {
    if (r == null)
      return;
    let a = r.trim().replace(/^\./, "");
    return e.IP_V6_REGEX_OBJECT.test(a) ? (a.startsWith("[") || (a = "[" + a), a.endsWith("]") || (a = a + "]"), (0, t.domainToASCII)(a).slice(1, -1)) : /[^\u0001-\u007f]/.test(a) ? (0, t.domainToASCII)(a) : a.toLowerCase();
  }
  return wa;
}
var $t = {}, Aa = {}, Ll;
function ff() {
  if (Ll) return Aa;
  Ll = 1, Object.defineProperty(Aa, "__esModule", { value: !0 }), Aa.formatDate = e;
  function e(t) {
    return t.toUTCString();
  }
  return Aa;
}
var ka = {}, $l;
function hf() {
  if ($l) return ka;
  $l = 1, Object.defineProperty(ka, "__esModule", { value: !0 }), ka.parseDate = i;
  const e = /[\x09\x20-\x2F\x3B-\x40\x5B-\x60\x7B-\x7E]/, t = {
    jan: 0,
    feb: 1,
    mar: 2,
    apr: 3,
    may: 4,
    jun: 5,
    jul: 6,
    aug: 7,
    sep: 8,
    oct: 9,
    nov: 10,
    dec: 11
  };
  function n(o, s, l, c) {
    let u = 0;
    for (; u < o.length; ) {
      const d = o.charCodeAt(u);
      if (d <= 47 || d >= 58)
        break;
      u++;
    }
    if (!(u < s || u > l) && !(!c && u != o.length))
      return parseInt(o.slice(0, u), 10);
  }
  function r(o) {
    const s = o.split(":"), l = [0, 0, 0];
    if (s.length === 3) {
      for (let c = 0; c < 3; c++) {
        const u = c == 2, d = s[c];
        if (d === void 0)
          return;
        const h = n(d, 1, 2, u);
        if (h === void 0)
          return;
        l[c] = h;
      }
      return l;
    }
  }
  function a(o) {
    switch (o = String(o).slice(0, 3).toLowerCase(), o) {
      case "jan":
        return t.jan;
      case "feb":
        return t.feb;
      case "mar":
        return t.mar;
      case "apr":
        return t.apr;
      case "may":
        return t.may;
      case "jun":
        return t.jun;
      case "jul":
        return t.jul;
      case "aug":
        return t.aug;
      case "sep":
        return t.sep;
      case "oct":
        return t.oct;
      case "nov":
        return t.nov;
      case "dec":
        return t.dec;
      default:
        return;
    }
  }
  function i(o) {
    if (!o)
      return;
    const s = o.split(e);
    let l, c, u, d, h, f;
    for (let m = 0; m < s.length; m++) {
      const g = (s[m] ?? "").trim();
      if (g.length) {
        if (u === void 0) {
          const p = r(g);
          if (p) {
            l = p[0], c = p[1], u = p[2];
            continue;
          }
        }
        if (d === void 0) {
          const p = n(g, 1, 2, !0);
          if (p !== void 0) {
            d = p;
            continue;
          }
        }
        if (h === void 0) {
          const p = a(g);
          if (p !== void 0) {
            h = p;
            continue;
          }
        }
        if (f === void 0) {
          const p = n(g, 2, 4, !0);
          p !== void 0 && (f = p, f >= 70 && f <= 99 ? f += 1900 : f >= 0 && f <= 69 && (f += 2e3));
        }
      }
    }
    if (!(d === void 0 || h === void 0 || f === void 0 || l === void 0 || c === void 0 || u === void 0 || d < 1 || d > 31 || f < 1601 || l > 23 || c > 59 || u > 59))
      return new Date(Date.UTC(f, h, d, l, c, u));
  }
  return ka;
}
var Ml;
function ko() {
  if (Ml) return $t;
  Ml = 1;
  var e = $t.__createBinding || (Object.create ? function(k, y, S, x) {
    x === void 0 && (x = S);
    var v = Object.getOwnPropertyDescriptor(y, S);
    (!v || ("get" in v ? !y.__esModule : v.writable || v.configurable)) && (v = { enumerable: !0, get: function() {
      return y[S];
    } }), Object.defineProperty(k, x, v);
  } : function(k, y, S, x) {
    x === void 0 && (x = S), k[x] = y[S];
  }), t = $t.__setModuleDefault || (Object.create ? function(k, y) {
    Object.defineProperty(k, "default", { enumerable: !0, value: y });
  } : function(k, y) {
    k.default = y;
  }), n = $t.__importStar || function(k) {
    if (k && k.__esModule) return k;
    var y = {};
    if (k != null) for (var S in k) S !== "default" && Object.prototype.hasOwnProperty.call(k, S) && e(y, k, S);
    return t(y, k), y;
  };
  Object.defineProperty($t, "__esModule", { value: !0 }), $t.Cookie = void 0;
  /*!
   * Copyright (c) 2015-2020, Salesforce.com, Inc.
   * All rights reserved.
   *
   * Redistribution and use in source and binary forms, with or without
   * modification, are permitted provided that the following conditions are met:
   *
   * 1. Redistributions of source code must retain the above copyright notice,
   * this list of conditions and the following disclaimer.
   *
   * 2. Redistributions in binary form must reproduce the above copyright notice,
   * this list of conditions and the following disclaimer in the documentation
   * and/or other materials provided with the distribution.
   *
   * 3. Neither the name of Salesforce.com nor the names of its contributors may
   * be used to endorse or promote products derived from this software without
   * specific prior written permission.
   *
   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
   * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
   * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
   * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
   * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
   * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
   * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
   * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
   * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
   * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
   * POSSIBILITY OF SUCH DAMAGE.
   */
  const r = ci(), a = n(Ja()), i = li(), o = ff(), s = hf(), l = ui(), c = /^[\x21\x23-\x2B\x2D-\x3A\x3C-\x5B\x5D-\x7E]+$/, u = /[\x20-\x3A\x3C-\x7E]+/, d = /[\x00-\x1F]/, h = [`
`, "\r", "\0"];
  function f(k) {
    if (a.isEmptyString(k))
      return k;
    for (let y = 0; y < h.length; y++) {
      const S = h[y], x = S ? k.indexOf(S) : -1;
      x !== -1 && (k = k.slice(0, x));
    }
    return k;
  }
  function m(k, y) {
    k = f(k);
    let S = k.indexOf("=");
    if (y)
      S === 0 && (k = k.substring(1), S = k.indexOf("="));
    else if (S <= 0)
      return;
    let x, v;
    if (S <= 0 ? (x = "", v = k.trim()) : (x = k.slice(0, S).trim(), v = k.slice(S + 1).trim()), d.test(x) || d.test(v))
      return;
    const B = new _();
    return B.key = x, B.value = v, B;
  }
  function g(k, y) {
    if (a.isEmptyString(k) || !a.isString(k))
      return;
    k = k.trim();
    const S = k.indexOf(";"), x = S === -1 ? k : k.slice(0, S), v = m(x, (y == null ? void 0 : y.loose) ?? !1);
    if (!v)
      return;
    if (S === -1)
      return v;
    const B = k.slice(S + 1).trim();
    if (B.length === 0)
      return v;
    const N = B.split(";");
    for (; N.length; ) {
      const I = (N.shift() ?? "").trim();
      if (I.length === 0)
        continue;
      const w = I.indexOf("=");
      let T, C;
      switch (w === -1 ? (T = I, C = null) : (T = I.slice(0, w), C = I.slice(w + 1)), T = T.trim().toLowerCase(), C && (C = C.trim()), T) {
        case "expires":
          if (C) {
            const O = (0, s.parseDate)(C);
            O && (v.expires = O);
          }
          break;
        case "max-age":
          if (C && /^-?[0-9]+$/.test(C)) {
            const O = parseInt(C, 10);
            v.setMaxAge(O);
          }
          break;
        case "domain":
          if (C) {
            const O = C.trim().replace(/^\./, "");
            O && (v.domain = O.toLowerCase());
          }
          break;
        case "path":
          v.path = C && C[0] === "/" ? C : null;
          break;
        case "secure":
          v.secure = !0;
          break;
        case "httponly":
          v.httpOnly = !0;
          break;
        case "samesite":
          switch (C ? C.toLowerCase() : "") {
            case "strict":
              v.sameSite = "strict";
              break;
            case "lax":
              v.sameSite = "lax";
              break;
            case "none":
              v.sameSite = "none";
              break;
            default:
              v.sameSite = void 0;
              break;
          }
          break;
        default:
          v.extensions = v.extensions || [], v.extensions.push(I);
          break;
      }
    }
    return v;
  }
  function p(k) {
    if (!k || a.isEmptyString(k))
      return;
    let y;
    if (typeof k == "string")
      try {
        y = JSON.parse(k);
      } catch {
        return;
      }
    else
      y = k;
    const S = new _();
    return _.serializableProperties.forEach((x) => {
      if (y && typeof y == "object" && (0, i.inOperator)(x, y)) {
        const v = y[x];
        if (v === void 0 || (0, i.inOperator)(x, b) && v === b[x])
          return;
        switch (x) {
          case "key":
          case "value":
          case "sameSite":
            typeof v == "string" && (S[x] = v);
            break;
          case "expires":
          case "creation":
          case "lastAccessed":
            typeof v == "number" || typeof v == "string" || v instanceof Date ? S[x] = y[x] == "Infinity" ? "Infinity" : new Date(v) : v === null && (S[x] = null);
            break;
          case "maxAge":
            (typeof v == "number" || v === "Infinity" || v === "-Infinity") && (S[x] = v);
            break;
          case "domain":
          case "path":
            (typeof v == "string" || v === null) && (S[x] = v);
            break;
          case "secure":
          case "httpOnly":
            typeof v == "boolean" && (S[x] = v);
            break;
          case "extensions":
            Array.isArray(v) && v.every((B) => typeof B == "string") && (S[x] = v);
            break;
          case "hostOnly":
          case "pathIsDefault":
            (typeof v == "boolean" || v === null) && (S[x] = v);
            break;
        }
      }
    }), S;
  }
  const b = {
    // the order in which the RFC has them:
    key: "",
    value: "",
    expires: "Infinity",
    maxAge: null,
    domain: null,
    path: null,
    secure: !1,
    httpOnly: !1,
    extensions: null,
    // set by the CookieJar:
    hostOnly: null,
    pathIsDefault: null,
    creation: null,
    lastAccessed: null,
    sameSite: void 0
  };
  class _ {
    /**
     * Create a new Cookie instance.
     * @public
     * @param options - The attributes to set on the cookie
     */
    constructor(y = {}) {
      this.key = y.key ?? b.key, this.value = y.value ?? b.value, this.expires = y.expires ?? b.expires, this.maxAge = y.maxAge ?? b.maxAge, this.domain = y.domain ?? b.domain, this.path = y.path ?? b.path, this.secure = y.secure ?? b.secure, this.httpOnly = y.httpOnly ?? b.httpOnly, this.extensions = y.extensions ?? b.extensions, this.creation = y.creation ?? b.creation, this.hostOnly = y.hostOnly ?? b.hostOnly, this.pathIsDefault = y.pathIsDefault ?? b.pathIsDefault, this.lastAccessed = y.lastAccessed ?? b.lastAccessed, this.sameSite = y.sameSite ?? b.sameSite, this.creation = y.creation ?? /* @__PURE__ */ new Date(), Object.defineProperty(this, "creationIndex", {
        configurable: !1,
        enumerable: !1,
        // important for assert.deepEqual checks
        writable: !0,
        value: ++_.cookiesCreated
      }), this.creationIndex = _.cookiesCreated;
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
      const y = Date.now(), S = this.hostOnly != null ? this.hostOnly.toString() : "?", x = this.creation && this.creation !== "Infinity" ? `${String(y - this.creation.getTime())}ms` : "?", v = this.lastAccessed && this.lastAccessed !== "Infinity" ? `${String(y - this.lastAccessed.getTime())}ms` : "?";
      return `Cookie="${this.toString()}; hostOnly=${S}; aAge=${v}; cAge=${x}"`;
    }
    /**
     * For convenience in using `JSON.stringify(cookie)`. Returns a plain-old Object that can be JSON-serialized.
     *
     * @remarks
     * - Any `Date` properties (such as {@link Cookie.expires}, {@link Cookie.creation}, and {@link Cookie.lastAccessed}) are exported in ISO format (`Date.toISOString()`).
     *
     *  - Custom Cookie properties are discarded. In tough-cookie 1.x, since there was no {@link Cookie.toJSON} method explicitly defined, all enumerable properties were captured.
     *      If you want a property to be serialized, add the property name to {@link Cookie.serializableProperties}.
     */
    toJSON() {
      const y = {};
      for (const S of _.serializableProperties) {
        const x = this[S];
        if (x !== b[S])
          switch (S) {
            case "key":
            case "value":
            case "sameSite":
              typeof x == "string" && (y[S] = x);
              break;
            case "expires":
            case "creation":
            case "lastAccessed":
              typeof x == "number" || typeof x == "string" || x instanceof Date ? y[S] = x == "Infinity" ? "Infinity" : new Date(x).toISOString() : x === null && (y[S] = null);
              break;
            case "maxAge":
              (typeof x == "number" || x === "Infinity" || x === "-Infinity") && (y[S] = x);
              break;
            case "domain":
            case "path":
              (typeof x == "string" || x === null) && (y[S] = x);
              break;
            case "secure":
            case "httpOnly":
              typeof x == "boolean" && (y[S] = x);
              break;
            case "extensions":
              Array.isArray(x) && (y[S] = x);
              break;
            case "hostOnly":
            case "pathIsDefault":
              (typeof x == "boolean" || x === null) && (y[S] = x);
              break;
          }
      }
      return y;
    }
    /**
     * Does a deep clone of this cookie, implemented exactly as `Cookie.fromJSON(cookie.toJSON())`.
     * @public
     */
    clone() {
      return p(this.toJSON());
    }
    /**
     * Validates cookie attributes for semantic correctness. Useful for "lint" checking any `Set-Cookie` headers you generate.
     * For now, it returns a boolean, but eventually could return a reason string.
     *
     * @remarks
     * Works for a few things, but is by no means comprehensive.
     *
     * @beta
     */
    validate() {
      if (!this.value || !c.test(this.value) || this.expires != "Infinity" && !(this.expires instanceof Date) && !(0, s.parseDate)(this.expires) || this.maxAge != null && this.maxAge !== "Infinity" && (this.maxAge === "-Infinity" || this.maxAge <= 0) || this.path != null && !u.test(this.path))
        return !1;
      const y = this.cdomain();
      return !(y && (y.match(/\.$/) || (0, r.getPublicSuffix)(y) == null));
    }
    /**
     * Sets the 'Expires' attribute on a cookie.
     *
     * @remarks
     * When given a `string` value it will be parsed with {@link parseDate}. If the value can't be parsed as a cookie date
     * then the 'Expires' attribute will be set to `"Infinity"`.
     *
     * @param exp - the new value for the 'Expires' attribute of the cookie.
     */
    setExpires(y) {
      y instanceof Date ? this.expires = y : this.expires = (0, s.parseDate)(y) || "Infinity";
    }
    /**
     * Sets the 'Max-Age' attribute (in seconds) on a cookie.
     *
     * @remarks
     * Coerces `-Infinity` to `"-Infinity"` and `Infinity` to `"Infinity"` so it can be serialized to JSON.
     *
     * @param age - the new value for the 'Max-Age' attribute (in seconds).
     */
    setMaxAge(y) {
      y === 1 / 0 ? this.maxAge = "Infinity" : y === -1 / 0 ? this.maxAge = "-Infinity" : this.maxAge = y;
    }
    /**
     * Encodes to a `Cookie` header value (specifically, the {@link Cookie.key} and {@link Cookie.value} properties joined with "=").
     * @public
     */
    cookieString() {
      const y = this.value || "";
      return this.key ? `${this.key}=${y}` : y;
    }
    /**
     * Encodes to a `Set-Cookie header` value.
     * @public
     */
    toString() {
      let y = this.cookieString();
      return this.expires != "Infinity" && this.expires instanceof Date && (y += `; Expires=${(0, o.formatDate)(this.expires)}`), this.maxAge != null && this.maxAge != 1 / 0 && (y += `; Max-Age=${String(this.maxAge)}`), this.domain && !this.hostOnly && (y += `; Domain=${this.domain}`), this.path && (y += `; Path=${this.path}`), this.secure && (y += "; Secure"), this.httpOnly && (y += "; HttpOnly"), this.sameSite && this.sameSite !== "none" && (this.sameSite.toLowerCase() === _.sameSiteCanonical.lax.toLowerCase() ? y += `; SameSite=${_.sameSiteCanonical.lax}` : this.sameSite.toLowerCase() === _.sameSiteCanonical.strict.toLowerCase() ? y += `; SameSite=${_.sameSiteCanonical.strict}` : y += `; SameSite=${this.sameSite}`), this.extensions && this.extensions.forEach((S) => {
        y += `; ${S}`;
      }), y;
    }
    /**
     * Computes the TTL relative to now (milliseconds).
     *
     * @remarks
     * - `Infinity` is returned for cookies without an explicit expiry
     *
     * - `0` is returned if the cookie is expired.
     *
     * - Otherwise a time-to-live in milliseconds is returned.
     *
     * @param now - passing an explicit value is mostly used for testing purposes since this defaults to the `Date.now()`
     * @public
     */
    TTL(y = Date.now()) {
      if (this.maxAge != null && typeof this.maxAge == "number")
        return this.maxAge <= 0 ? 0 : this.maxAge * 1e3;
      const S = this.expires;
      return S === "Infinity" ? 1 / 0 : ((S == null ? void 0 : S.getTime()) ?? y) - (y || Date.now());
    }
    /**
     * Computes the absolute unix-epoch milliseconds that this cookie expires.
     *
     * The "Max-Age" attribute takes precedence over "Expires" (as per the RFC). The {@link Cookie.lastAccessed} attribute
     * (or the `now` parameter if given) is used to offset the {@link Cookie.maxAge} attribute.
     *
     * If Expires ({@link Cookie.expires}) is set, that's returned.
     *
     * @param now - can be used to provide a time offset (instead of {@link Cookie.lastAccessed}) to use when calculating the "Max-Age" value
     */
    expiryTime(y) {
      if (this.maxAge != null) {
        const S = y || this.lastAccessed || /* @__PURE__ */ new Date(), x = typeof this.maxAge == "number" ? this.maxAge : -1 / 0, v = x <= 0 ? -1 / 0 : x * 1e3;
        return S === "Infinity" ? 1 / 0 : S.getTime() + v;
      }
      return this.expires == "Infinity" ? 1 / 0 : this.expires ? this.expires.getTime() : void 0;
    }
    /**
     * Indicates if the cookie has been persisted to a store or not.
     * @public
     */
    isPersistent() {
      return this.maxAge != null || this.expires != "Infinity";
    }
    /**
     * Calls {@link canonicalDomain} with the {@link Cookie.domain} property.
     * @public
     */
    canonicalizedDomain() {
      return (0, l.canonicalDomain)(this.domain);
    }
    /**
     * Alias for {@link Cookie.canonicalizedDomain}
     * @public
     */
    cdomain() {
      return (0, l.canonicalDomain)(this.domain);
    }
    /**
     * Parses a string into a Cookie object.
     *
     * @remarks
     * Note: when parsing a `Cookie` header it must be split by ';' before each Cookie string can be parsed.
     *
     * @example
     * ```
     * // parse a `Set-Cookie` header
     * const setCookieHeader = 'a=bcd; Expires=Tue, 18 Oct 2011 07:05:03 GMT'
     * const cookie = Cookie.parse(setCookieHeader)
     * cookie.key === 'a'
     * cookie.value === 'bcd'
     * cookie.expires === new Date(Date.parse('Tue, 18 Oct 2011 07:05:03 GMT'))
     * ```
     *
     * @example
     * ```
     * // parse a `Cookie` header
     * const cookieHeader = 'name=value; name2=value2; name3=value3'
     * const cookies = cookieHeader.split(';').map(Cookie.parse)
     * cookies[0].name === 'name'
     * cookies[0].value === 'value'
     * cookies[1].name === 'name2'
     * cookies[1].value === 'value2'
     * cookies[2].name === 'name3'
     * cookies[2].value === 'value3'
     * ```
     *
     * @param str - The `Set-Cookie` header or a Cookie string to parse.
     * @param options - Configures `strict` or `loose` mode for cookie parsing
     */
    static parse(y, S) {
      return g(y, S);
    }
    /**
     * Does the reverse of {@link Cookie.toJSON}.
     *
     * @remarks
     * Any Date properties (such as .expires, .creation, and .lastAccessed) are parsed via Date.parse, not tough-cookie's parseDate, since ISO timestamps are being handled at this layer.
     *
     * @example
     * ```
     * const json = JSON.stringify({
     *   key: 'alpha',
     *   value: 'beta',
     *   domain: 'example.com',
     *   path: '/foo',
     *   expires: '2038-01-19T03:14:07.000Z',
     * })
     * const cookie = Cookie.fromJSON(json)
     * cookie.key === 'alpha'
     * cookie.value === 'beta'
     * cookie.domain === 'example.com'
     * cookie.path === '/foo'
     * cookie.expires === new Date(Date.parse('2038-01-19T03:14:07.000Z'))
     * ```
     *
     * @param str - An unparsed JSON string or a value that has already been parsed as JSON
     */
    static fromJSON(y) {
      return p(y);
    }
  }
  return $t.Cookie = _, _.cookiesCreated = 0, _.sameSiteLevel = {
    strict: 3,
    lax: 2,
    none: 1
  }, _.sameSiteCanonical = {
    strict: "Strict",
    lax: "Lax"
  }, _.serializableProperties = [
    "key",
    "value",
    "expires",
    "maxAge",
    "domain",
    "path",
    "secure",
    "httpOnly",
    "extensions",
    "hostOnly",
    "pathIsDefault",
    "creation",
    "lastAccessed",
    "sameSite"
  ], $t;
}
var va = {}, Hl;
function gf() {
  if (Hl) return va;
  Hl = 1, Object.defineProperty(va, "__esModule", { value: !0 }), va.cookieCompare = t;
  const e = 2147483647e3;
  function t(n, r) {
    let a;
    const i = n.path ? n.path.length : 0;
    if (a = (r.path ? r.path.length : 0) - i, a !== 0)
      return a;
    const s = n.creation && n.creation instanceof Date ? n.creation.getTime() : e, l = r.creation && r.creation instanceof Date ? r.creation.getTime() : e;
    return a = s - l, a !== 0 || (a = (n.creationIndex || 0) - (r.creationIndex || 0)), a;
  }
  return va;
}
var Mt = {}, _a = {}, Ul;
function mf() {
  if (Ul) return _a;
  Ul = 1, Object.defineProperty(_a, "__esModule", { value: !0 }), _a.defaultPath = e;
  function e(t) {
    if (!t || t.slice(0, 1) !== "/")
      return "/";
    if (t === "/")
      return t;
    const n = t.lastIndexOf("/");
    return n === 0 ? "/" : t.slice(0, n);
  }
  return _a;
}
var xa = {}, Vl;
function pf() {
  if (Vl) return xa;
  Vl = 1, Object.defineProperty(xa, "__esModule", { value: !0 }), xa.domainMatch = n;
  const e = ui(), t = /(?:^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$)|(?:^(?:(?:[a-f\d]{1,4}:){7}(?:[a-f\d]{1,4}|:)|(?:[a-f\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-f\d]{1,4}|:)|(?:[a-f\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,2}|:)|(?:[a-f\d]{1,4}:){4}(?:(?::[a-f\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,3}|:)|(?:[a-f\d]{1,4}:){3}(?:(?::[a-f\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,4}|:)|(?:[a-f\d]{1,4}:){2}(?:(?::[a-f\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,5}|:)|(?:[a-f\d]{1,4}:){1}(?:(?::[a-f\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,6}|:)|(?::(?:(?::[a-f\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,7}|:)))$)/;
  function n(r, a, i) {
    if (r == null || a == null)
      return;
    let o, s;
    if (i !== !1 ? (o = (0, e.canonicalDomain)(r), s = (0, e.canonicalDomain)(a)) : (o = r, s = a), o == null || s == null)
      return;
    if (o == s)
      return !0;
    const l = o.lastIndexOf(a);
    return l <= 0 || o.length !== s.length + l || o.substring(l - 1, l) !== "." ? !1 : !t.test(o);
  }
  return xa;
}
var Fl;
function kA() {
  if (Fl) return Mt;
  Fl = 1;
  var e = Mt.__createBinding || (Object.create ? function(I, w, T, C) {
    C === void 0 && (C = T);
    var O = Object.getOwnPropertyDescriptor(w, T);
    (!O || ("get" in O ? !w.__esModule : O.writable || O.configurable)) && (O = { enumerable: !0, get: function() {
      return w[T];
    } }), Object.defineProperty(I, C, O);
  } : function(I, w, T, C) {
    C === void 0 && (C = T), I[C] = w[T];
  }), t = Mt.__setModuleDefault || (Object.create ? function(I, w) {
    Object.defineProperty(I, "default", { enumerable: !0, value: w });
  } : function(I, w) {
    I.default = w;
  }), n = Mt.__importStar || function(I) {
    if (I && I.__esModule) return I;
    var w = {};
    if (I != null) for (var T in I) T !== "default" && Object.prototype.hasOwnProperty.call(I, T) && e(w, I, T);
    return t(w, I), w;
  };
  Object.defineProperty(Mt, "__esModule", { value: !0 }), Mt.CookieJar = void 0;
  const r = ci(), a = n(Ja()), i = Ja(), o = ws(), s = uf(), l = bs(), c = ko(), u = li(), d = ui(), h = As(), f = mf(), m = pf(), g = gf(), p = df(), b = {
    loose: !1,
    sameSiteContext: void 0,
    ignoreError: !1,
    http: !0
  }, _ = {
    http: !0,
    expire: !0,
    allPaths: !1,
    sameSiteContext: void 0,
    sort: void 0
  }, k = 'Invalid sameSiteContext option for getCookies(); expected one of "strict", "lax", or "none"';
  function y(I) {
    if (I && typeof I == "object" && "hostname" in I && typeof I.hostname == "string" && "pathname" in I && typeof I.pathname == "string" && "protocol" in I && typeof I.protocol == "string")
      return {
        hostname: I.hostname,
        pathname: I.pathname,
        protocol: I.protocol
      };
    if (typeof I == "string")
      try {
        return new URL(decodeURI(I));
      } catch {
        return new URL(I);
      }
    else
      throw new i.ParameterError("`url` argument is not a string or URL.");
  }
  function S(I) {
    const w = String(I).toLowerCase();
    if (w === "none" || w === "lax" || w === "strict")
      return w;
  }
  function x(I) {
    return !(typeof I.key == "string" && I.key.startsWith("__Secure-")) || I.secure;
  }
  function v(I) {
    return !(typeof I.key == "string" && I.key.startsWith("__Host-")) || !!(I.secure && I.hostOnly && I.path != null && I.path === "/");
  }
  function B(I) {
    const w = I.toLowerCase();
    switch (w) {
      case h.PrefixSecurityEnum.STRICT:
      case h.PrefixSecurityEnum.SILENT:
      case h.PrefixSecurityEnum.DISABLED:
        return w;
      default:
        return h.PrefixSecurityEnum.SILENT;
    }
  }
  class N {
    /**
     * Creates a new `CookieJar` instance.
     *
     * @remarks
     * - If a custom store is not passed to the constructor, an in-memory store ({@link MemoryCookieStore} will be created and used.
     * - If a boolean value is passed as the `options` parameter, this is equivalent to passing `{ rejectPublicSuffixes: <value> }`
     *
     * @param store - a custom {@link Store} implementation (defaults to {@link MemoryCookieStore})
     * @param options - configures how cookies are processed by the cookie jar
     */
    constructor(w, T) {
      typeof T == "boolean" && (T = { rejectPublicSuffixes: T }), this.rejectPublicSuffixes = (T == null ? void 0 : T.rejectPublicSuffixes) ?? !0, this.enableLooseMode = (T == null ? void 0 : T.looseMode) ?? !1, this.allowSpecialUseDomain = (T == null ? void 0 : T.allowSpecialUseDomain) ?? !0, this.prefixSecurity = B((T == null ? void 0 : T.prefixSecurity) ?? "silent"), this.store = w ?? new s.MemoryCookieStore();
    }
    callSync(w) {
      if (!this.store.synchronous)
        throw new Error("CookieJar store is not synchronous; use async API instead.");
      let T = null, C;
      try {
        w.call(this, (O, A) => {
          T = O, C = A;
        });
      } catch (O) {
        T = O;
      }
      if (T)
        throw T;
      return C;
    }
    /**
     * @internal No doc because this is the overload implementation
     */
    setCookie(w, T, C, O) {
      typeof C == "function" && (O = C, C = void 0);
      const A = (0, u.createPromiseCallback)(O), E = A.callback;
      let j;
      try {
        if (typeof T == "string" && a.validate(a.isNonEmptyString(T), O, (0, u.safeToString)(C)), j = y(T), typeof T == "function")
          return A.reject(new Error("No URL was specified"));
        if (typeof C == "function" && (C = b), a.validate(typeof E == "function", E), !a.isNonEmptyString(w) && !a.isObject(w) && w instanceof String && w.length == 0)
          return A.resolve(void 0);
      } catch (V) {
        return A.reject(V);
      }
      const P = (0, d.canonicalDomain)(j.hostname) ?? null, z = (C == null ? void 0 : C.loose) || this.enableLooseMode;
      let L = null;
      if (C != null && C.sameSiteContext && (L = S(C.sameSiteContext), !L))
        return A.reject(new Error(k));
      if (typeof w == "string" || w instanceof String) {
        const V = c.Cookie.parse(w.toString(), { loose: z });
        if (!V) {
          const M = new Error("Cookie failed to parse");
          return C != null && C.ignoreError ? A.resolve(void 0) : A.reject(M);
        }
        w = V;
      } else if (!(w instanceof c.Cookie)) {
        const V = new Error("First argument to setCookie must be a Cookie object or string");
        return C != null && C.ignoreError ? A.resolve(void 0) : A.reject(V);
      }
      const U = (C == null ? void 0 : C.now) || /* @__PURE__ */ new Date();
      if (this.rejectPublicSuffixes && w.domain)
        try {
          const V = w.cdomain();
          if ((typeof V == "string" ? (0, r.getPublicSuffix)(V, {
            allowSpecialUseDomain: this.allowSpecialUseDomain,
            ignoreError: C == null ? void 0 : C.ignoreError
          }) : null) == null && !h.IP_V6_REGEX_OBJECT.test(w.domain)) {
            const q = new Error("Cookie has domain set to a public suffix");
            return C != null && C.ignoreError ? A.resolve(void 0) : A.reject(q);
          }
        } catch (V) {
          return C != null && C.ignoreError ? A.resolve(void 0) : (
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            A.reject(V)
          );
        }
      if (w.domain) {
        if (!(0, m.domainMatch)(P ?? void 0, w.cdomain() ?? void 0, !1)) {
          const V = new Error(`Cookie not in this host's domain. Cookie:${w.cdomain() ?? "null"} Request:${P ?? "null"}`);
          return C != null && C.ignoreError ? A.resolve(void 0) : A.reject(V);
        }
        w.hostOnly == null && (w.hostOnly = !1);
      } else
        w.hostOnly = !0, w.domain = P;
      if ((!w.path || w.path[0] !== "/") && (w.path = (0, f.defaultPath)(j.pathname), w.pathIsDefault = !0), (C == null ? void 0 : C.http) === !1 && w.httpOnly) {
        const V = new Error("Cookie is HttpOnly and this isn't an HTTP API");
        return C.ignoreError ? A.resolve(void 0) : A.reject(V);
      }
      if (w.sameSite !== "none" && w.sameSite !== void 0 && L && L === "none") {
        const V = new Error("Cookie is SameSite but this is a cross-origin request");
        return C != null && C.ignoreError ? A.resolve(void 0) : A.reject(V);
      }
      const F = this.prefixSecurity === h.PrefixSecurityEnum.SILENT;
      if (!(this.prefixSecurity === h.PrefixSecurityEnum.DISABLED)) {
        let V = !1, M;
        if (x(w) ? v(w) || (V = !0, M = "Cookie has __Host prefix but either Secure or HostOnly attribute is not set or Path is not '/'") : (V = !0, M = "Cookie has __Secure prefix but Secure attribute is not set"), V)
          return C != null && C.ignoreError || F ? A.resolve(void 0) : A.reject(new Error(M));
      }
      const J = this.store;
      J.updateCookie || (J.updateCookie = async function(V, M, q) {
        return this.putCookie(M).then(() => q == null ? void 0 : q(null), (Q) => q == null ? void 0 : q(Q));
      });
      const ce = function(M, q) {
        if (M) {
          E(M);
          return;
        }
        const Q = function(le) {
          le ? E(le) : typeof w == "string" ? E(null, void 0) : E(null, w);
        };
        if (q) {
          if (C && "http" in C && C.http === !1 && q.httpOnly) {
            M = new Error("old Cookie is HttpOnly and this isn't an HTTP API"), C.ignoreError ? E(null, void 0) : E(M);
            return;
          }
          w instanceof c.Cookie && (w.creation = q.creation, w.creationIndex = q.creationIndex, w.lastAccessed = U, J.updateCookie(q, w, Q));
        } else
          w instanceof c.Cookie && (w.creation = w.lastAccessed = U, J.putCookie(w, Q));
      };
      return J.findCookie(w.domain, w.path, w.key, ce), A.promise;
    }
    /**
     * Synchronously attempt to set the {@link Cookie} in the {@link CookieJar}.
     *
     * <strong>Note:</strong> Only works if the configured {@link Store} is also synchronous.
     *
     * @remarks
     * - If successfully persisted, the {@link Cookie} will have updated
     *     {@link Cookie.creation}, {@link Cookie.lastAccessed} and {@link Cookie.hostOnly}
     *     properties.
     *
     * - As per the RFC, the {@link Cookie.hostOnly} flag is set if there was no `Domain={value}`
     *     atttribute on the cookie string. The {@link Cookie.domain} property is set to the
     *     fully-qualified hostname of `currentUrl` in this case. Matching this cookie requires an
     *     exact hostname match (not a {@link domainMatch} as per usual)
     *
     * @param cookie - The cookie object or cookie string to store. A string value will be parsed into a cookie using {@link Cookie.parse}.
     * @param url - The domain to store the cookie with.
     * @param options - Configuration settings to use when storing the cookie.
     * @public
     */
    setCookieSync(w, T, C) {
      const O = C ? this.setCookie.bind(this, w, T, C) : this.setCookie.bind(this, w, T);
      return this.callSync(O);
    }
    /**
     * @internal No doc because this is the overload implementation
     */
    getCookies(w, T, C) {
      typeof T == "function" ? (C = T, T = _) : T === void 0 && (T = _);
      const O = (0, u.createPromiseCallback)(C), A = O.callback;
      let E;
      try {
        typeof w == "string" && a.validate(a.isNonEmptyString(w), A, w), E = y(w), a.validate(a.isObject(T), A, (0, u.safeToString)(T)), a.validate(typeof A == "function", A);
      } catch (M) {
        return O.reject(M);
      }
      const j = (0, d.canonicalDomain)(E.hostname), P = E.pathname || "/", z = E.protocol && (E.protocol == "https:" || E.protocol == "wss:");
      let L = 0;
      if (T.sameSiteContext) {
        const M = S(T.sameSiteContext);
        if (M == null)
          return O.reject(new Error(k));
        if (L = c.Cookie.sameSiteLevel[M], !L)
          return O.reject(new Error(k));
      }
      const U = T.http ?? !0, F = Date.now(), ie = T.expire ?? !0, J = T.allPaths ?? !1, ce = this.store;
      function V(M) {
        if (M.hostOnly) {
          if (M.domain != j)
            return !1;
        } else if (!(0, m.domainMatch)(j ?? void 0, M.domain ?? void 0, !1))
          return !1;
        if (!J && typeof M.path == "string" && !(0, l.pathMatch)(P, M.path) || M.secure && !z || M.httpOnly && !U)
          return !1;
        if (L) {
          let Q;
          if (M.sameSite === "lax" ? Q = c.Cookie.sameSiteLevel.lax : M.sameSite === "strict" ? Q = c.Cookie.sameSiteLevel.strict : Q = c.Cookie.sameSiteLevel.none, Q > L)
            return !1;
        }
        const q = M.expiryTime();
        return ie && q && q <= F ? (ce.removeCookie(M.domain, M.path, M.key, () => {
        }), !1) : !0;
      }
      return ce.findCookies(j, J ? null : P, this.allowSpecialUseDomain, (M, q) => {
        if (M) {
          A(M);
          return;
        }
        if (q == null) {
          A(null, []);
          return;
        }
        q = q.filter(V), "sort" in T && T.sort !== !1 && (q = q.sort(g.cookieCompare));
        const Q = /* @__PURE__ */ new Date();
        for (const le of q)
          le.lastAccessed = Q;
        A(null, q);
      }), O.promise;
    }
    /**
     * Synchronously retrieve the list of cookies that can be sent in a Cookie header for the
     * current URL.
     *
     * <strong>Note</strong>: Only works if the configured Store is also synchronous.
     *
     * @remarks
     * - The array of cookies returned will be sorted according to {@link cookieCompare}.
     *
     * - The {@link Cookie.lastAccessed} property will be updated on all returned cookies.
     *
     * @param url - The domain to store the cookie with.
     * @param options - Configuration settings to use when retrieving the cookies.
     */
    getCookiesSync(w, T) {
      return this.callSync(this.getCookies.bind(this, w, T)) ?? [];
    }
    /**
     * @internal No doc because this is the overload implementation
     */
    getCookieString(w, T, C) {
      typeof T == "function" && (C = T, T = void 0);
      const O = (0, u.createPromiseCallback)(C), A = function(E, j) {
        E ? O.callback(E) : O.callback(null, j == null ? void 0 : j.sort(g.cookieCompare).map((P) => P.cookieString()).join("; "));
      };
      return this.getCookies(w, T, A), O.promise;
    }
    /**
     * Synchronous version of `.getCookieString()`. Accepts the same options as `.getCookies()` but returns a string suitable for a
     * `Cookie` header rather than an Array.
     *
     * <strong>Note</strong>: Only works if the configured Store is also synchronous.
     *
     * @param url - The domain to store the cookie with.
     * @param options - Configuration settings to use when retrieving the cookies.
     */
    getCookieStringSync(w, T) {
      return this.callSync(T ? this.getCookieString.bind(this, w, T) : this.getCookieString.bind(this, w)) ?? "";
    }
    /**
     * @internal No doc because this is the overload implementation
     */
    getSetCookieStrings(w, T, C) {
      typeof T == "function" && (C = T, T = void 0);
      const O = (0, u.createPromiseCallback)(C), A = function(E, j) {
        E ? O.callback(E) : O.callback(null, j == null ? void 0 : j.map((P) => P.toString()));
      };
      return this.getCookies(w, T, A), O.promise;
    }
    /**
     * Synchronous version of `.getSetCookieStrings()`. Returns an array of strings suitable for `Set-Cookie` headers.
     * Accepts the same options as `.getCookies()`.
     *
     * <strong>Note</strong>: Only works if the configured Store is also synchronous.
     *
     * @param url - The domain to store the cookie with.
     * @param options - Configuration settings to use when retrieving the cookies.
     */
    getSetCookieStringsSync(w, T = {}) {
      return this.callSync(this.getSetCookieStrings.bind(this, w, T)) ?? [];
    }
    /**
     * @internal No doc because this is the overload implementation
     */
    serialize(w) {
      const T = (0, u.createPromiseCallback)(w);
      let C = this.store.constructor.name;
      a.isObject(C) && (C = null);
      const O = {
        // The version of tough-cookie that serialized this jar. Generally a good
        // practice since future versions can make data import decisions based on
        // known past behavior. When/if this matters, use `semver`.
        version: `tough-cookie@${p.version}`,
        // add the store type, to make humans happy:
        storeType: C,
        // CookieJar configuration:
        rejectPublicSuffixes: this.rejectPublicSuffixes,
        enableLooseMode: this.enableLooseMode,
        allowSpecialUseDomain: this.allowSpecialUseDomain,
        prefixSecurity: B(this.prefixSecurity),
        // this gets filled from getAllCookies:
        cookies: []
      };
      return typeof this.store.getAllCookies != "function" ? T.reject(new Error("store does not support getAllCookies and cannot be serialized")) : (this.store.getAllCookies((A, E) => {
        if (A) {
          T.callback(A);
          return;
        }
        if (E == null) {
          T.callback(null, O);
          return;
        }
        O.cookies = E.map((j) => {
          const P = j.toJSON();
          return delete P.creationIndex, P;
        }), T.callback(null, O);
      }), T.promise);
    }
    /**
     * Serialize the CookieJar if the underlying store supports `.getAllCookies`.
     *
     * <strong>Note</strong>: Only works if the configured Store is also synchronous.
     */
    serializeSync() {
      return this.callSync((w) => {
        this.serialize(w);
      });
    }
    /**
     * Alias of {@link CookieJar.serializeSync}. Allows the cookie to be serialized
     * with `JSON.stringify(cookieJar)`.
     */
    toJSON() {
      return this.serializeSync();
    }
    /**
     * Use the class method CookieJar.deserialize instead of calling this directly
     * @internal
     */
    _importCookies(w, T) {
      let C;
      if (w && typeof w == "object" && (0, u.inOperator)("cookies", w) && Array.isArray(w.cookies) && (C = w.cookies), !C) {
        T(new Error("serialized jar has no cookies array"), void 0);
        return;
      }
      C = C.slice();
      const O = (A) => {
        if (A) {
          T(A, void 0);
          return;
        }
        if (Array.isArray(C)) {
          if (!C.length) {
            T(A, this);
            return;
          }
          let E;
          try {
            E = c.Cookie.fromJSON(C.shift());
          } catch (j) {
            T(j instanceof Error ? j : new Error(), void 0);
            return;
          }
          if (E === void 0) {
            O(null);
            return;
          }
          this.store.putCookie(E, O);
        }
      };
      O(null);
    }
    /**
     * @internal
     */
    _importCookiesSync(w) {
      this.callSync(this._importCookies.bind(this, w));
    }
    /**
     * @internal No doc because this is the overload implementation
     */
    clone(w, T) {
      typeof w == "function" && (T = w, w = void 0);
      const C = (0, u.createPromiseCallback)(T), O = C.callback;
      return this.serialize((A, E) => A ? C.reject(A) : N.deserialize(E ?? "", w, O)), C.promise;
    }
    /**
     * @internal
     */
    _cloneSync(w) {
      const T = w && typeof w != "function" ? this.clone.bind(this, w) : this.clone.bind(this);
      return this.callSync((C) => {
        T(C);
      });
    }
    /**
     * Produces a deep clone of this CookieJar. Modifications to the original do
     * not affect the clone, and vice versa.
     *
     * <strong>Note</strong>: Only works if both the configured Store and destination
     * Store are synchronous.
     *
     * @remarks
     * - When no {@link Store} is provided, a new {@link MemoryCookieStore} will be used.
     *
     * - Transferring between store types is supported so long as the source
     *     implements `.getAllCookies()` and the destination implements `.putCookie()`.
     *
     * @param newStore - The target {@link Store} to clone cookies into.
     */
    cloneSync(w) {
      if (!w)
        return this._cloneSync();
      if (!w.synchronous)
        throw new Error("CookieJar clone destination store is not synchronous; use async API instead.");
      return this._cloneSync(w);
    }
    /**
     * @internal No doc because this is the overload implementation
     */
    removeAllCookies(w) {
      const T = (0, u.createPromiseCallback)(w), C = T.callback, O = this.store;
      return typeof O.removeAllCookies == "function" && O.removeAllCookies !== o.Store.prototype.removeAllCookies ? (O.removeAllCookies(C), T.promise) : (O.getAllCookies((A, E) => {
        if (A) {
          C(A);
          return;
        }
        if (E || (E = []), E.length === 0) {
          C(null, void 0);
          return;
        }
        let j = 0;
        const P = [], z = function(U) {
          if (U && P.push(U), j++, j === E.length) {
            P[0] ? C(P[0]) : C(null, void 0);
            return;
          }
        };
        E.forEach((L) => {
          O.removeCookie(L.domain, L.path, L.key, z);
        });
      }), T.promise);
    }
    /**
     * Removes all cookies from the CookieJar.
     *
     * <strong>Note</strong>: Only works if the configured Store is also synchronous.
     *
     * @remarks
     * - This is a new backwards-compatible feature of tough-cookie version 2.5,
     *     so not all Stores will implement it efficiently. For Stores that do not
     *     implement `removeAllCookies`, the fallback is to call `removeCookie` after
     *     `getAllCookies`.
     *
     * - If `getAllCookies` fails or isn't implemented in the Store, an error is returned.
     *
     * - If one or more of the `removeCookie` calls fail, only the first error is returned.
     */
    removeAllCookiesSync() {
      this.callSync((w) => {
        this.removeAllCookies(w);
      });
    }
    /**
     * @internal No doc because this is the overload implementation
     */
    static deserialize(w, T, C) {
      typeof T == "function" && (C = T, T = void 0);
      const O = (0, u.createPromiseCallback)(C);
      let A;
      if (typeof w == "string")
        try {
          A = JSON.parse(w);
        } catch (L) {
          return O.reject(L instanceof Error ? L : new Error());
        }
      else
        A = w;
      const E = (L) => A && typeof A == "object" && (0, u.inOperator)(L, A) ? A[L] : void 0, j = (L) => {
        const U = E(L);
        return typeof U == "boolean" ? U : void 0;
      }, P = (L) => {
        const U = E(L);
        return typeof U == "string" ? U : void 0;
      }, z = new N(T, {
        rejectPublicSuffixes: j("rejectPublicSuffixes"),
        looseMode: j("enableLooseMode"),
        allowSpecialUseDomain: j("allowSpecialUseDomain"),
        prefixSecurity: B(P("prefixSecurity") ?? "silent")
      });
      return z._importCookies(A, (L) => {
        if (L) {
          O.callback(L);
          return;
        }
        O.callback(null, z);
      }), O.promise;
    }
    /**
     * A new CookieJar is created and the serialized {@link Cookie} values are added to
     * the underlying store. Each {@link Cookie} is added via `store.putCookie(...)` in
     * the order in which they appear in the serialization.
     *
     * <strong>Note</strong>: Only works if the configured Store is also synchronous.
     *
     * @remarks
     * - When no {@link Store} is provided, a new {@link MemoryCookieStore} will be used.
     *
     * - As a convenience, if `strOrObj` is a string, it is passed through `JSON.parse` first.
     *
     * @param strOrObj - A JSON string or object representing the deserialized cookies.
     * @param store - The underlying store to persist the deserialized cookies into.
     */
    static deserializeSync(w, T) {
      const C = typeof w == "string" ? JSON.parse(w) : w, O = (P) => C && typeof C == "object" && (0, u.inOperator)(P, C) ? C[P] : void 0, A = (P) => {
        const z = O(P);
        return typeof z == "boolean" ? z : void 0;
      }, E = (P) => {
        const z = O(P);
        return typeof z == "string" ? z : void 0;
      }, j = new N(T, {
        rejectPublicSuffixes: A("rejectPublicSuffixes"),
        looseMode: A("enableLooseMode"),
        allowSpecialUseDomain: A("allowSpecialUseDomain"),
        prefixSecurity: B(E("prefixSecurity") ?? "silent")
      });
      if (!j.store.synchronous)
        throw new Error("CookieJar store is not synchronous; use async API instead.");
      return j._importCookiesSync(C), j;
    }
    /**
     * Alias of {@link CookieJar.deserializeSync}.
     *
     * @remarks
     * - When no {@link Store} is provided, a new {@link MemoryCookieStore} will be used.
     *
     * - As a convenience, if `strOrObj` is a string, it is passed through `JSON.parse` first.
     *
     * @param jsonString - A JSON string or object representing the deserialized cookies.
     * @param store - The underlying store to persist the deserialized cookies into.
     */
    static fromJSON(w, T) {
      return N.deserializeSync(w, T);
    }
  }
  return Mt.CookieJar = N, Mt;
}
var Ea = {}, ql;
function vA() {
  if (ql) return Ea;
  ql = 1, Object.defineProperty(Ea, "__esModule", { value: !0 }), Ea.permutePath = e;
  function e(t) {
    if (t === "/")
      return ["/"];
    const n = [t];
    for (; t.length > 1; ) {
      const r = t.lastIndexOf("/");
      if (r === 0)
        break;
      t = t.slice(0, r), n.push(t);
    }
    return n.push("/"), n;
  }
  return Ea;
}
var Zl;
function _A() {
  return Zl || (Zl = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.permutePath = e.parseDate = e.formatDate = e.domainMatch = e.defaultPath = e.CookieJar = e.cookieCompare = e.Cookie = e.PrefixSecurityEnum = e.canonicalDomain = e.version = e.ParameterError = e.Store = e.getPublicSuffix = e.permuteDomain = e.pathMatch = e.MemoryCookieStore = void 0, e.parse = k, e.fromJSON = y;
    var t = uf();
    Object.defineProperty(e, "MemoryCookieStore", { enumerable: !0, get: function() {
      return t.MemoryCookieStore;
    } });
    var n = bs();
    Object.defineProperty(e, "pathMatch", { enumerable: !0, get: function() {
      return n.pathMatch;
    } });
    var r = lf();
    Object.defineProperty(e, "permuteDomain", { enumerable: !0, get: function() {
      return r.permuteDomain;
    } });
    var a = ci();
    Object.defineProperty(e, "getPublicSuffix", { enumerable: !0, get: function() {
      return a.getPublicSuffix;
    } });
    var i = ws();
    Object.defineProperty(e, "Store", { enumerable: !0, get: function() {
      return i.Store;
    } });
    var o = Ja();
    Object.defineProperty(e, "ParameterError", { enumerable: !0, get: function() {
      return o.ParameterError;
    } });
    var s = df();
    Object.defineProperty(e, "version", { enumerable: !0, get: function() {
      return s.version;
    } });
    var l = ui();
    Object.defineProperty(e, "canonicalDomain", { enumerable: !0, get: function() {
      return l.canonicalDomain;
    } });
    var c = As();
    Object.defineProperty(e, "PrefixSecurityEnum", { enumerable: !0, get: function() {
      return c.PrefixSecurityEnum;
    } });
    var u = ko();
    Object.defineProperty(e, "Cookie", { enumerable: !0, get: function() {
      return u.Cookie;
    } });
    var d = gf();
    Object.defineProperty(e, "cookieCompare", { enumerable: !0, get: function() {
      return d.cookieCompare;
    } });
    var h = kA();
    Object.defineProperty(e, "CookieJar", { enumerable: !0, get: function() {
      return h.CookieJar;
    } });
    var f = mf();
    Object.defineProperty(e, "defaultPath", { enumerable: !0, get: function() {
      return f.defaultPath;
    } });
    var m = pf();
    Object.defineProperty(e, "domainMatch", { enumerable: !0, get: function() {
      return m.domainMatch;
    } });
    var g = ff();
    Object.defineProperty(e, "formatDate", { enumerable: !0, get: function() {
      return g.formatDate;
    } });
    var p = hf();
    Object.defineProperty(e, "parseDate", { enumerable: !0, get: function() {
      return p.parseDate;
    } });
    var b = vA();
    Object.defineProperty(e, "permutePath", { enumerable: !0, get: function() {
      return b.permutePath;
    } });
    const _ = ko();
    function k(S, x) {
      return _.Cookie.parse(S, x);
    }
    function y(S) {
      return _.Cookie.fromJSON(S);
    }
  }(Ji)), Ji;
}
var ks = _A();
const xA = /* @__PURE__ */ af(ks), yf = /* @__PURE__ */ $g({
  __proto__: null,
  default: xA
}, [ks]);
var Nn = { exports: {} }, Kl;
function EA() {
  if (Kl) return Nn.exports;
  Kl = 1;
  var e = {
    decodeValues: !0,
    map: !1,
    silent: !1
  };
  function t(o) {
    return typeof o == "string" && !!o.trim();
  }
  function n(o, s) {
    var l = o.split(";").filter(t), c = l.shift(), u = r(c), d = u.name, h = u.value;
    s = s ? Object.assign({}, e, s) : e;
    try {
      h = s.decodeValues ? decodeURIComponent(h) : h;
    } catch (m) {
      console.error(
        "set-cookie-parser encountered an error while decoding a cookie with value '" + h + "'. Set options.decodeValues to false to disable this feature.",
        m
      );
    }
    var f = {
      name: d,
      value: h
    };
    return l.forEach(function(m) {
      var g = m.split("="), p = g.shift().trimLeft().toLowerCase(), b = g.join("=");
      p === "expires" ? f.expires = new Date(b) : p === "max-age" ? f.maxAge = parseInt(b, 10) : p === "secure" ? f.secure = !0 : p === "httponly" ? f.httpOnly = !0 : p === "samesite" ? f.sameSite = b : p === "partitioned" ? f.partitioned = !0 : f[p] = b;
    }), f;
  }
  function r(o) {
    var s = "", l = "", c = o.split("=");
    return c.length > 1 ? (s = c.shift(), l = c.join("=")) : l = o, { name: s, value: l };
  }
  function a(o, s) {
    if (s = s ? Object.assign({}, e, s) : e, !o)
      return s.map ? {} : [];
    if (o.headers)
      if (typeof o.headers.getSetCookie == "function")
        o = o.headers.getSetCookie();
      else if (o.headers["set-cookie"])
        o = o.headers["set-cookie"];
      else {
        var l = o.headers[Object.keys(o.headers).find(function(u) {
          return u.toLowerCase() === "set-cookie";
        })];
        !l && o.headers.cookie && !s.silent && console.warn(
          "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
        ), o = l;
      }
    if (Array.isArray(o) || (o = [o]), s.map) {
      var c = {};
      return o.filter(t).reduce(function(u, d) {
        var h = n(d, s);
        return u[h.name] = h, u;
      }, c);
    } else
      return o.filter(t).map(function(u) {
        return n(u, s);
      });
  }
  function i(o) {
    if (Array.isArray(o))
      return o;
    if (typeof o != "string")
      return [];
    var s = [], l = 0, c, u, d, h, f;
    function m() {
      for (; l < o.length && /\s/.test(o.charAt(l)); )
        l += 1;
      return l < o.length;
    }
    function g() {
      return u = o.charAt(l), u !== "=" && u !== ";" && u !== ",";
    }
    for (; l < o.length; ) {
      for (c = l, f = !1; m(); )
        if (u = o.charAt(l), u === ",") {
          for (d = l, l += 1, m(), h = l; l < o.length && g(); )
            l += 1;
          l < o.length && o.charAt(l) === "=" ? (f = !0, l = h, s.push(o.substring(c, d)), c = l) : l = d + 1;
        } else
          l += 1;
      (!f || l >= o.length) && s.push(o.substring(c, o.length));
    }
    return s;
  }
  return Nn.exports = a, Nn.exports.parse = a, Nn.exports.parseString = n, Nn.exports.splitCookiesString = i, Nn.exports;
}
var SA = /* @__PURE__ */ EA();
function CA(e, t) {
  const n = new URL(t).hostname, r = new URL(e).hostname;
  return n === r || n.endsWith(`.${r}`);
}
const IA = /* @__PURE__ */ new Set([
  "",
  "no-referrer",
  "no-referrer-when-downgrade",
  "same-origin",
  "origin",
  "strict-origin",
  "origin-when-cross-origin",
  "strict-origin-when-cross-origin",
  "unsafe-url"
]);
function TA(e) {
  const t = e.split(/[,\s]+/);
  let n = "";
  for (const r of t)
    r !== "" && IA.has(r) && (n = r);
  return n;
}
function BA(e, t) {
}
function OA(e, t) {
  e.headers.delete(t);
}
function DA(e, t) {
  const n = e.headers;
  for (const r of Object.keys(n))
    r.toLowerCase() === t && delete n[r];
}
function jA(e) {
  return e.headers == null ? BA : typeof e.headers.delete == "function" ? OA : DA;
}
const PA = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
function NA(e) {
  return PA.has(e);
}
async function zA(e, t, n) {
  switch (t.redirect ?? "follow") {
    case "error":
      throw new TypeError(`URI requested responded with a redirect and redirect mode is set to error: ${n.url}`);
    case "manual":
      return n;
    case "follow":
      break;
    default:
      throw new TypeError(`Invalid redirect option: ${t.redirect}`);
  }
  const r = n.headers.get("location");
  if (r === null)
    return n;
  const a = n.url, i = new URL(r, a).toString(), o = t.redirectCount ?? 0, s = t.maxRedirect ?? 20;
  if (o >= s)
    throw new TypeError(`Reached maximum redirect of ${s} for URL: ${a}`);
  t = {
    ...t,
    redirectCount: o + 1
  };
  const l = jA(t);
  if (!CA(a, i))
    for (const d of ["authorization", "www-authenticate", "cookie", "cookie2"])
      l(t, d);
  const c = t.body, u = t.body;
  if (n.status !== 303 && t.body != null && (typeof c.pipe == "function" || typeof u.pipeTo == "function"))
    throw new TypeError("Cannot follow redirect with body being a readable stream");
  return (n.status === 303 || (n.status === 301 || n.status === 302) && t.method === "POST") && (t.method = "GET", t.body = void 0, l(t, "content-length")), n.headers.has("referrer-policy") && (t.referrerPolicy = TA(n.headers.get("referrer-policy"))), l(t, "host"), await e(i, t);
}
function RA(e, t, n) {
  if (n === "")
    return t;
  const r = e, a = t.headers;
  if (r.headers && typeof r.headers.append == "function")
    r.headers.append("cookie", n);
  else if (a && typeof a.append == "function")
    a.append("cookie", n);
  else if (Array.isArray(t.headers)) {
    const i = [...t.headers], o = i.findIndex((s) => s[0].toLowerCase() === "cookie");
    o === -1 ? i.push(["cookie", n]) : i[o] = ["cookie", n], t = { ...t, headers: i };
  } else
    t = { ...t, headers: { ...t.headers, cookie: n } };
  return t;
}
function LA(e) {
  const t = e.headers;
  if (typeof t.getAll == "function")
    return t.getAll("set-cookie");
  if (typeof t.raw == "function") {
    const r = t.raw();
    return Array.isArray(r["set-cookie"]) ? r["set-cookie"] : [];
  }
  const n = e.headers.get("set-cookie");
  return n !== null ? SA.splitCookiesString(n) : [];
}
function bf(e, t, n = !0) {
  const r = e, a = t ?? new ks.CookieJar();
  async function i(o, s) {
    const l = s ?? {};
    s = { ...s, redirect: "manual" };
    const c = typeof o == "string" ? o : "href" in o ? o.href : o.url, u = await a.getCookieString(c);
    s = RA(o, s, u);
    const d = await r(o, s), h = LA(d);
    return await Promise.all(h.map(async (f) => await a.setCookie(f, d.url, { ignoreError: n }))), (s.redirectCount ?? 0) > 0 && Object.defineProperty(d, "redirected", { value: !0 }), NA(d.status) ? await zA(i, l, d) : d;
  }
  return i.toughCookie = yf, i.cookieJar = a, i;
}
bf.toughCookie = yf;
var Be = typeof globalThis < "u" && globalThis || typeof self < "u" && self || // eslint-disable-next-line no-undef
typeof global < "u" && global || {}, De = {
  searchParams: "URLSearchParams" in Be,
  iterable: "Symbol" in Be && "iterator" in Symbol,
  blob: "FileReader" in Be && "Blob" in Be && function() {
    try {
      return new Blob(), !0;
    } catch {
      return !1;
    }
  }(),
  formData: "FormData" in Be,
  arrayBuffer: "ArrayBuffer" in Be
};
function $A(e) {
  return e && DataView.prototype.isPrototypeOf(e);
}
if (De.arrayBuffer)
  var MA = [
    "[object Int8Array]",
    "[object Uint8Array]",
    "[object Uint8ClampedArray]",
    "[object Int16Array]",
    "[object Uint16Array]",
    "[object Int32Array]",
    "[object Uint32Array]",
    "[object Float32Array]",
    "[object Float64Array]"
  ], HA = ArrayBuffer.isView || function(e) {
    return e && MA.indexOf(Object.prototype.toString.call(e)) > -1;
  };
function ir(e) {
  if (typeof e != "string" && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || e === "")
    throw new TypeError('Invalid character in header field name: "' + e + '"');
  return e.toLowerCase();
}
function vs(e) {
  return typeof e != "string" && (e = String(e)), e;
}
function _s(e) {
  var t = {
    next: function() {
      var n = e.shift();
      return { done: n === void 0, value: n };
    }
  };
  return De.iterable && (t[Symbol.iterator] = function() {
    return t;
  }), t;
}
function Ae(e) {
  this.map = {}, e instanceof Ae ? e.forEach(function(t, n) {
    this.append(n, t);
  }, this) : Array.isArray(e) ? e.forEach(function(t) {
    if (t.length != 2)
      throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + t.length);
    this.append(t[0], t[1]);
  }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
    this.append(t, e[t]);
  }, this);
}
Ae.prototype.append = function(e, t) {
  e = ir(e), t = vs(t);
  var n = this.map[e];
  this.map[e] = n ? n + ", " + t : t;
};
Ae.prototype.delete = function(e) {
  delete this.map[ir(e)];
};
Ae.prototype.get = function(e) {
  return e = ir(e), this.has(e) ? this.map[e] : null;
};
Ae.prototype.has = function(e) {
  return this.map.hasOwnProperty(ir(e));
};
Ae.prototype.set = function(e, t) {
  this.map[ir(e)] = vs(t);
};
Ae.prototype.forEach = function(e, t) {
  for (var n in this.map)
    this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this);
};
Ae.prototype.keys = function() {
  var e = [];
  return this.forEach(function(t, n) {
    e.push(n);
  }), _s(e);
};
Ae.prototype.values = function() {
  var e = [];
  return this.forEach(function(t) {
    e.push(t);
  }), _s(e);
};
Ae.prototype.entries = function() {
  var e = [];
  return this.forEach(function(t, n) {
    e.push([n, t]);
  }), _s(e);
};
De.iterable && (Ae.prototype[Symbol.iterator] = Ae.prototype.entries);
function Gi(e) {
  if (!e._noBody) {
    if (e.bodyUsed)
      return Promise.reject(new TypeError("Already read"));
    e.bodyUsed = !0;
  }
}
function wf(e) {
  return new Promise(function(t, n) {
    e.onload = function() {
      t(e.result);
    }, e.onerror = function() {
      n(e.error);
    };
  });
}
function UA(e) {
  var t = new FileReader(), n = wf(t);
  return t.readAsArrayBuffer(e), n;
}
function VA(e) {
  var t = new FileReader(), n = wf(t), r = /charset=([A-Za-z0-9_-]+)/.exec(e.type), a = r ? r[1] : "utf-8";
  return t.readAsText(e, a), n;
}
function FA(e) {
  for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++)
    n[r] = String.fromCharCode(t[r]);
  return n.join("");
}
function Jl(e) {
  if (e.slice)
    return e.slice(0);
  var t = new Uint8Array(e.byteLength);
  return t.set(new Uint8Array(e)), t.buffer;
}
function Af() {
  return this.bodyUsed = !1, this._initBody = function(e) {
    this.bodyUsed = this.bodyUsed, this._bodyInit = e, e ? typeof e == "string" ? this._bodyText = e : De.blob && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : De.formData && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : De.searchParams && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : De.arrayBuffer && De.blob && $A(e) ? (this._bodyArrayBuffer = Jl(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : De.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || HA(e)) ? this._bodyArrayBuffer = Jl(e) : this._bodyText = e = Object.prototype.toString.call(e) : (this._noBody = !0, this._bodyText = ""), this.headers.get("content-type") || (typeof e == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : De.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
  }, De.blob && (this.blob = function() {
    var e = Gi(this);
    if (e)
      return e;
    if (this._bodyBlob)
      return Promise.resolve(this._bodyBlob);
    if (this._bodyArrayBuffer)
      return Promise.resolve(new Blob([this._bodyArrayBuffer]));
    if (this._bodyFormData)
      throw new Error("could not read FormData body as blob");
    return Promise.resolve(new Blob([this._bodyText]));
  }), this.arrayBuffer = function() {
    if (this._bodyArrayBuffer) {
      var e = Gi(this);
      return e || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(
        this._bodyArrayBuffer.buffer.slice(
          this._bodyArrayBuffer.byteOffset,
          this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
        )
      ) : Promise.resolve(this._bodyArrayBuffer));
    } else {
      if (De.blob)
        return this.blob().then(UA);
      throw new Error("could not read as ArrayBuffer");
    }
  }, this.text = function() {
    var e = Gi(this);
    if (e)
      return e;
    if (this._bodyBlob)
      return VA(this._bodyBlob);
    if (this._bodyArrayBuffer)
      return Promise.resolve(FA(this._bodyArrayBuffer));
    if (this._bodyFormData)
      throw new Error("could not read FormData body as text");
    return Promise.resolve(this._bodyText);
  }, De.formData && (this.formData = function() {
    return this.text().then(KA);
  }), this.json = function() {
    return this.text().then(JSON.parse);
  }, this;
}
var qA = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
function ZA(e) {
  var t = e.toUpperCase();
  return qA.indexOf(t) > -1 ? t : e;
}
function En(e, t) {
  if (!(this instanceof En))
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  t = t || {};
  var n = t.body;
  if (e instanceof En) {
    if (e.bodyUsed)
      throw new TypeError("Already read");
    this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new Ae(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, !n && e._bodyInit != null && (n = e._bodyInit, e.bodyUsed = !0);
  } else
    this.url = String(e);
  if (this.credentials = t.credentials || this.credentials || "same-origin", (t.headers || !this.headers) && (this.headers = new Ae(t.headers)), this.method = ZA(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal || function() {
    if ("AbortController" in Be) {
      var i = new AbortController();
      return i.signal;
    }
  }(), this.referrer = null, (this.method === "GET" || this.method === "HEAD") && n)
    throw new TypeError("Body not allowed for GET or HEAD requests");
  if (this._initBody(n), (this.method === "GET" || this.method === "HEAD") && (t.cache === "no-store" || t.cache === "no-cache")) {
    var r = /([?&])_=[^&]*/;
    if (r.test(this.url))
      this.url = this.url.replace(r, "$1_=" + (/* @__PURE__ */ new Date()).getTime());
    else {
      var a = /\?/;
      this.url += (a.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
    }
  }
}
En.prototype.clone = function() {
  return new En(this, { body: this._bodyInit });
};
function KA(e) {
  var t = new FormData();
  return e.trim().split("&").forEach(function(n) {
    if (n) {
      var r = n.split("="), a = r.shift().replace(/\+/g, " "), i = r.join("=").replace(/\+/g, " ");
      t.append(decodeURIComponent(a), decodeURIComponent(i));
    }
  }), t;
}
function JA(e) {
  var t = new Ae(), n = e.replace(/\r?\n[\t ]+/g, " ");
  return n.split("\r").map(function(r) {
    return r.indexOf(`
`) === 0 ? r.substr(1, r.length) : r;
  }).forEach(function(r) {
    var a = r.split(":"), i = a.shift().trim();
    if (i) {
      var o = a.join(":").trim();
      try {
        t.append(i, o);
      } catch (s) {
        console.warn("Response " + s.message);
      }
    }
  }), t;
}
Af.call(En.prototype);
function xt(e, t) {
  if (!(this instanceof xt))
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
  if (t || (t = {}), this.type = "default", this.status = t.status === void 0 ? 200 : t.status, this.status < 200 || this.status > 599)
    throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
  this.ok = this.status >= 200 && this.status < 300, this.statusText = t.statusText === void 0 ? "" : "" + t.statusText, this.headers = new Ae(t.headers), this.url = t.url || "", this._initBody(e);
}
Af.call(xt.prototype);
xt.prototype.clone = function() {
  return new xt(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Ae(this.headers),
    url: this.url
  });
};
xt.error = function() {
  var e = new xt(null, { status: 200, statusText: "" });
  return e.ok = !1, e.status = 0, e.type = "error", e;
};
var XA = [301, 302, 303, 307, 308];
xt.redirect = function(e, t) {
  if (XA.indexOf(t) === -1)
    throw new RangeError("Invalid status code");
  return new xt(null, { status: t, headers: { location: e } });
};
var cn = Be.DOMException;
try {
  new cn();
} catch {
  cn = function(t, n) {
    this.message = t, this.name = n;
    var r = Error(t);
    this.stack = r.stack;
  }, cn.prototype = Object.create(Error.prototype), cn.prototype.constructor = cn;
}
function kf(e, t) {
  return new Promise(function(n, r) {
    var a = new En(e, t);
    if (a.signal && a.signal.aborted)
      return r(new cn("Aborted", "AbortError"));
    var i = new XMLHttpRequest();
    function o() {
      i.abort();
    }
    i.onload = function() {
      var c = {
        statusText: i.statusText,
        headers: JA(i.getAllResponseHeaders() || "")
      };
      a.url.indexOf("file://") === 0 && (i.status < 200 || i.status > 599) ? c.status = 200 : c.status = i.status, c.url = "responseURL" in i ? i.responseURL : c.headers.get("X-Request-URL");
      var u = "response" in i ? i.response : i.responseText;
      setTimeout(function() {
        n(new xt(u, c));
      }, 0);
    }, i.onerror = function() {
      setTimeout(function() {
        r(new TypeError("Network request failed"));
      }, 0);
    }, i.ontimeout = function() {
      setTimeout(function() {
        r(new TypeError("Network request timed out"));
      }, 0);
    }, i.onabort = function() {
      setTimeout(function() {
        r(new cn("Aborted", "AbortError"));
      }, 0);
    };
    function s(c) {
      try {
        return c === "" && Be.location.href ? Be.location.href : c;
      } catch {
        return c;
      }
    }
    if (i.open(a.method, s(a.url), !0), a.credentials === "include" ? i.withCredentials = !0 : a.credentials === "omit" && (i.withCredentials = !1), "responseType" in i && (De.blob ? i.responseType = "blob" : De.arrayBuffer && (i.responseType = "arraybuffer")), t && typeof t.headers == "object" && !(t.headers instanceof Ae || Be.Headers && t.headers instanceof Be.Headers)) {
      var l = [];
      Object.getOwnPropertyNames(t.headers).forEach(function(c) {
        l.push(ir(c)), i.setRequestHeader(c, vs(t.headers[c]));
      }), a.headers.forEach(function(c, u) {
        l.indexOf(u) === -1 && i.setRequestHeader(u, c);
      });
    } else
      a.headers.forEach(function(c, u) {
        i.setRequestHeader(u, c);
      });
    a.signal && (a.signal.addEventListener("abort", o), i.onreadystatechange = function() {
      i.readyState === 4 && a.signal.removeEventListener("abort", o);
    }), i.send(typeof a._bodyInit > "u" ? null : a._bodyInit);
  });
}
kf.polyfill = !0;
Be.fetch || (Be.fetch = kf, Be.Headers = Ae, Be.Request = En, Be.Response = xt);
var Wi, Xl;
function GA() {
  return Xl || (Xl = 1, Wi = self.fetch.bind(self)), Wi;
}
var WA = GA();
const YA = /* @__PURE__ */ af(WA), vf = (e, t, n = []) => {
  const r = Object.getOwnPropertyDescriptors(t);
  for (let a of n)
    delete r[a];
  Object.defineProperties(e, r);
}, Rr = (e, t = [e]) => {
  const n = Object.getPrototypeOf(e);
  return n === null ? t : Rr(n, [...t, n]);
}, QA = (...e) => {
  if (e.length === 0)
    return;
  let t;
  const n = e.map((r) => Rr(r));
  for (; n.every((r) => r.length > 0); ) {
    const r = n.map((i) => i.pop()), a = r[0];
    if (r.every((i) => i === a))
      t = a;
    else
      break;
  }
  return t;
}, Gl = (e, t, n = []) => {
  var r;
  const a = (r = QA(...e)) !== null && r !== void 0 ? r : Object.prototype, i = Object.create(a), o = Rr(a);
  for (let s of e) {
    let l = Rr(s);
    for (let c = l.length - 1; c >= 0; c--) {
      let u = l[c];
      o.indexOf(u) === -1 && (vf(i, u, ["constructor", ...n]), o.push(u));
    }
  }
  return i.constructor = t, i;
}, vo = (e) => e.filter((t, n) => e.indexOf(t) == n), _f = /* @__PURE__ */ new WeakMap(), e1 = (e) => _f.get(e), t1 = (e, t) => _f.set(e, t), Wl = (e, t) => {
  var n, r;
  const a = vo([...Object.getOwnPropertyNames(e), ...Object.getOwnPropertyNames(t)]), i = {};
  for (let o of a)
    i[o] = vo([...(n = e == null ? void 0 : e[o]) !== null && n !== void 0 ? n : [], ...(r = t == null ? void 0 : t[o]) !== null && r !== void 0 ? r : []]);
  return i;
}, Yl = (e, t) => {
  var n, r, a, i;
  return {
    property: Wl((n = e == null ? void 0 : e.property) !== null && n !== void 0 ? n : {}, (r = t == null ? void 0 : t.property) !== null && r !== void 0 ? r : {}),
    method: Wl((a = e == null ? void 0 : e.method) !== null && a !== void 0 ? a : {}, (i = t == null ? void 0 : t.method) !== null && i !== void 0 ? i : {})
  };
}, n1 = (e, t) => {
  var n, r, a, i, o, s;
  return {
    class: vo([...(n = e == null ? void 0 : e.class) !== null && n !== void 0 ? n : [], ...(r = t == null ? void 0 : t.class) !== null && r !== void 0 ? r : []]),
    static: Yl((a = e == null ? void 0 : e.static) !== null && a !== void 0 ? a : {}, (i = t == null ? void 0 : t.static) !== null && i !== void 0 ? i : {}),
    instance: Yl((o = e == null ? void 0 : e.instance) !== null && o !== void 0 ? o : {}, (s = t == null ? void 0 : t.instance) !== null && s !== void 0 ? s : {})
  };
}, r1 = /* @__PURE__ */ new Map(), a1 = (...e) => {
  var t;
  const n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set([...e]);
  for (; r.size > 0; )
    for (let a of r) {
      const i = Rr(a.prototype).map((c) => c.constructor), o = (t = e1(a)) !== null && t !== void 0 ? t : [], l = [...i, ...o].filter((c) => !n.has(c));
      for (let c of l)
        r.add(c);
      n.add(a), r.delete(a);
    }
  return [...n];
}, i1 = (...e) => {
  const t = a1(...e).map((n) => r1.get(n)).filter((n) => !!n);
  return t.length == 0 ? {} : t.length == 1 ? t[0] : t.reduce((n, r) => n1(n, r));
};
function o1(...e) {
  var t, n, r;
  const a = e.map((s) => s.prototype);
  function i(...s) {
    for (const l of e)
      vf(this, new l(...s));
  }
  i.prototype = Gl(a, i), Object.setPrototypeOf(
    i,
    Gl(e, null, ["prototype"])
  );
  let o = i;
  {
    const s = i1(...e);
    for (let l of (t = s == null ? void 0 : s.class) !== null && t !== void 0 ? t : []) {
      const c = l(o);
      c && (o = c);
    }
    Ql((n = s == null ? void 0 : s.static) !== null && n !== void 0 ? n : {}, o), Ql((r = s == null ? void 0 : s.instance) !== null && r !== void 0 ? r : {}, o.prototype);
  }
  return t1(o, e), o;
}
const Ql = (e, t) => {
  const n = e.property, r = e.method;
  if (n)
    for (let a in n)
      for (let i of n[a])
        i(t, a);
  if (r)
    for (let a in r)
      for (let i of r[a])
        i(t, a, Object.getOwnPropertyDescriptor(t, a));
};
var Ba = { exports: {} }, s1 = Ba.exports, eu;
function c1() {
  return eu || (eu = 1, function(e) {
    (function(t, n, r) {
      e.exports ? e.exports = r() : n[t] = r();
    })("urljoin", s1, function() {
      function t(n) {
        var r = [];
        if (n.length === 0)
          return "";
        if (typeof n[0] != "string")
          throw new TypeError("Url must be a string. Received " + n[0]);
        if (n[0].match(/^[^/:]+:\/*$/) && n.length > 1) {
          var a = n.shift();
          n[0] = a + n[0];
        }
        n[0].match(/^file:\/\/\//) ? n[0] = n[0].replace(/^([^/:]+):\/*/, "$1:///") : n[0] = n[0].replace(/^([^/:]+):\/*/, "$1://");
        for (var i = 0; i < n.length; i++) {
          var o = n[i];
          if (typeof o != "string")
            throw new TypeError("Url must be a string. Received " + o);
          o !== "" && (i > 0 && (o = o.replace(/^[\/]+/, "")), i < n.length - 1 ? o = o.replace(/[\/]+$/, "") : o = o.replace(/[\/]+$/, "/"), r.push(o));
        }
        var s = r.join("/");
        s = s.replace(/\/(\?|&|#[^!])/g, "$1");
        var l = s.split("?");
        return s = l.shift() + (l.length > 0 ? "?" : "") + l.join("&"), s;
      }
      return function() {
        var n;
        return typeof arguments[0] == "object" ? n = arguments[0] : n = [].slice.call(arguments), t(n);
      };
    });
  }(Ba)), Ba.exports;
}
c1();
var xf = Object.defineProperty, l1 = Object.getOwnPropertyDescriptor, u1 = Object.getOwnPropertyNames, d1 = Object.prototype.hasOwnProperty, re = (e, t) => {
  for (var n in t)
    xf(e, n, { get: t[n], enumerable: !0 });
}, f1 = (e, t, n, r) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let a of u1(t))
      !d1.call(e, a) && a !== n && xf(e, a, { get: () => t[a], enumerable: !(r = l1(t, a)) || r.enumerable });
  return e;
}, h1 = (e, t, n) => (f1(e, t, "default"), n), g1 = {};
re(g1, {
  ADDR_BOUND: () => Kf,
  API_VERSION: () => qf,
  BaseUrl: () => Gf,
  FeeMarginPercentage: () => Qf,
  IS_BROWSER: () => zf,
  MASK_250: () => Ff,
  MAX_STORAGE_ITEM_SIZE: () => Zf,
  NetworkName: () => di,
  PRIME: () => Cs,
  RANGE_FELT: () => _o,
  RANGE_I128: () => Jf,
  RANGE_U128: () => Xf,
  RPC_DEFAULT_VERSION: () => yr,
  RPC_NODES: () => eh,
  StarknetChainId: () => Wf,
  TEXT_TO_FELT_MAX_LEN: () => Ss,
  TRANSACTION_VERSION: () => R.ETransactionVersion,
  TransactionHashPrefix: () => Yf,
  UDC: () => pn,
  ZERO: () => ye
});
var R = {};
re(R, {
  JRPC: () => m1,
  RPCSPEC06: () => se,
  RPCSPEC07: () => Au
});
var m1 = {}, se = {};
re(se, {
  EBlockTag: () => Bf,
  EDAMode: () => Df,
  EDataAvailabilityMode: () => Of,
  ESimulationFlag: () => Sf,
  ETransactionExecutionStatus: () => Tf,
  ETransactionFinalityStatus: () => If,
  ETransactionStatus: () => Cf,
  ETransactionType: () => Ef,
  ETransactionVersion: () => jf,
  ETransactionVersion2: () => Pf,
  ETransactionVersion3: () => Nf,
  Errors: () => p1,
  SPEC: () => y1
});
var p1 = {}, y1 = {}, Ef = /* @__PURE__ */ ((e) => (e.DECLARE = "DECLARE", e.DEPLOY = "DEPLOY", e.DEPLOY_ACCOUNT = "DEPLOY_ACCOUNT", e.INVOKE = "INVOKE", e.L1_HANDLER = "L1_HANDLER", e))(Ef || {}), Sf = /* @__PURE__ */ ((e) => (e.SKIP_VALIDATE = "SKIP_VALIDATE", e.SKIP_FEE_CHARGE = "SKIP_FEE_CHARGE", e))(Sf || {}), Cf = /* @__PURE__ */ ((e) => (e.RECEIVED = "RECEIVED", e.REJECTED = "REJECTED", e.ACCEPTED_ON_L2 = "ACCEPTED_ON_L2", e.ACCEPTED_ON_L1 = "ACCEPTED_ON_L1", e))(Cf || {}), If = /* @__PURE__ */ ((e) => (e.ACCEPTED_ON_L2 = "ACCEPTED_ON_L2", e.ACCEPTED_ON_L1 = "ACCEPTED_ON_L1", e))(If || {}), Tf = /* @__PURE__ */ ((e) => (e.SUCCEEDED = "SUCCEEDED", e.REVERTED = "REVERTED", e))(Tf || {}), Bf = /* @__PURE__ */ ((e) => (e.PENDING = "pending", e.LATEST = "latest", e))(Bf || {}), Of = /* @__PURE__ */ ((e) => (e.L1 = "L1", e.L2 = "L2", e))(Of || {}), Df = /* @__PURE__ */ ((e) => (e[e.L1 = 0] = "L1", e[e.L2 = 1] = "L2", e))(Df || {}), jf = /* @__PURE__ */ ((e) => (e.V0 = "0x0", e.V1 = "0x1", e.V2 = "0x2", e.V3 = "0x3", e.F0 = "0x100000000000000000000000000000000", e.F1 = "0x100000000000000000000000000000001", e.F2 = "0x100000000000000000000000000000002", e.F3 = "0x100000000000000000000000000000003", e))(jf || {}), Pf = /* @__PURE__ */ ((e) => (e.V0 = "0x0", e.V1 = "0x1", e.V2 = "0x2", e.F0 = "0x100000000000000000000000000000000", e.F1 = "0x100000000000000000000000000000001", e.F2 = "0x100000000000000000000000000000002", e))(Pf || {}), Nf = /* @__PURE__ */ ((e) => (e.V3 = "0x3", e.F3 = "0x100000000000000000000000000000003", e))(Nf || {});
h1(R, Au);
var b1 = {};
re(b1, {
  IS_BROWSER: () => zf,
  addHexPrefix: () => ne,
  arrayBufferToString: () => Rf,
  atobUniversal: () => Lf,
  btoaUniversal: () => $f,
  buf2hex: () => Es,
  calcByteLength: () => Hf,
  padLeft: () => Mf,
  pascalToSnake: () => k1,
  removeHexPrefix: () => qe,
  sanitizeBytes: () => Uf,
  sanitizeHex: () => Vf,
  stringToArrayBuffer: () => w1,
  utf8ToArray: () => Wt
});
var zf = typeof window < "u", xs = "0";
function Rf(e) {
  return new Uint8Array(e).reduce((t, n) => t + String.fromCharCode(n), "");
}
function Wt(e) {
  return new TextEncoder().encode(e);
}
function w1(e) {
  return Wt(e);
}
function Lf(e) {
  return vu.decode(e);
}
function $f(e) {
  return vu.encode(new Uint8Array(e));
}
function Es(e) {
  return e.reduce((t, n) => t + n.toString(16).padStart(2, "0"), "");
}
function qe(e) {
  return e.replace(/^0x/i, "");
}
function ne(e) {
  return `0x${qe(e)}`;
}
function A1(e, t, n, r = xs) {
  const a = t - e.length;
  let i = e;
  return a > 0 && (i = r.repeat(a) + e), i;
}
function Mf(e, t, n = xs) {
  return A1(e, t, !0, n);
}
function Hf(e, t = 8) {
  const { length: n } = e, r = n % t;
  return r ? (n - r) / t * t + t : n;
}
function Uf(e, t = 8, n = xs) {
  return Mf(e, Hf(e, t), n);
}
function Vf(e) {
  return e = qe(e), e = Uf(e, 2), e && (e = ne(e)), e;
}
var k1 = (e) => /[a-z]/.test(e) ? e.split(/(?=[A-Z])/).join("_").toUpperCase() : e, Ss = 31, ye = 0n, Ff = 2n ** 250n - 1n, qf = ye, Cs = 2n ** 251n + 17n * 2n ** 192n + 1n, Zf = 256n, Kf = 2n ** 251n - Zf, Is = (e, t) => ({ min: e, max: t }), _o = Is(ye, Cs - 1n), Jf = Is(-(2n ** 127n), 2n ** 127n - 1n), Xf = Is(ye, 2n ** 128n - 1n), Gf = /* @__PURE__ */ ((e) => (e.SN_MAIN = "https://alpha-mainnet.starknet.io", e.SN_SEPOLIA = "https://alpha-sepolia.starknet.io", e))(Gf || {}), di = /* @__PURE__ */ ((e) => (e.SN_MAIN = "SN_MAIN", e.SN_SEPOLIA = "SN_SEPOLIA", e))(di || {}), Wf = /* @__PURE__ */ ((e) => (e.SN_MAIN = "0x534e5f4d41494e", e.SN_SEPOLIA = "0x534e5f5345504f4c4941", e))(Wf || {}), Yf = /* @__PURE__ */ ((e) => (e.DECLARE = "0x6465636c617265", e.DEPLOY = "0x6465706c6f79", e.DEPLOY_ACCOUNT = "0x6465706c6f795f6163636f756e74", e.INVOKE = "0x696e766f6b65", e.L1_HANDLER = "0x6c315f68616e646c6572", e))(Yf || {}), Qf = /* @__PURE__ */ ((e) => (e[e.L1_BOUND_MAX_AMOUNT = 50] = "L1_BOUND_MAX_AMOUNT", e[e.L1_BOUND_MAX_PRICE_PER_UNIT = 50] = "L1_BOUND_MAX_PRICE_PER_UNIT", e[e.MAX_FEE = 50] = "MAX_FEE", e))(Qf || {}), pn = {
  ADDRESS: "0x041a78e741e5af2fec34b695679bc6891742439f7afb8484ecd7766661ad02bf",
  ENTRYPOINT: "deployContract"
}, yr = "v0_7", eh = {
  SN_MAIN: [
    `https://starknet-mainnet.public.blastapi.io/rpc/${yr}`,
    `https://free-rpc.nethermind.io/mainnet-juno/${yr}`
  ],
  SN_SEPOLIA: [
    `https://starknet-sepolia.public.blastapi.io/rpc/${yr}`,
    `https://free-rpc.nethermind.io/sepolia-juno/${yr}`
  ]
}, th = {};
re(th, {
  RpcChannel: () => Lk
});
function v1(e, t = e.constructor) {
  const { captureStackTrace: n } = Error;
  n && n(e, t);
}
function _1(e, t) {
  const { setPrototypeOf: n } = Object;
  n ? n(e, t) : e.__proto__ = t;
}
var x1 = class extends Error {
  constructor(t) {
    super(t);
    $(this, "name");
    Object.defineProperty(this, "name", {
      value: new.target.name,
      enumerable: !1,
      configurable: !0
    }), _1(this, new.target.prototype), v1(this);
  }
}, Lr = class extends x1 {
}, E1 = {};
re(E1, {
  BlockStatus: () => ch,
  BlockTag: () => Os,
  EntryPointType: () => rh,
  Literal: () => Bs,
  RPC: () => R,
  TransactionExecutionStatus: () => sh,
  TransactionFinalityStatus: () => oh,
  TransactionStatus: () => ih,
  TransactionType: () => ah,
  TypedDataRevision: () => ee,
  Uint: () => Ts,
  ValidateType: () => nh
});
var nh = /* @__PURE__ */ ((e) => (e.DEPLOY = "DEPLOY", e.CALL = "CALL", e.INVOKE = "INVOKE", e))(nh || {}), Ts = /* @__PURE__ */ ((e) => (e.u8 = "core::integer::u8", e.u16 = "core::integer::u16", e.u32 = "core::integer::u32", e.u64 = "core::integer::u64", e.u128 = "core::integer::u128", e.u256 = "core::integer::u256", e.u512 = "core::integer::u512", e))(Ts || {}), Bs = /* @__PURE__ */ ((e) => (e.ClassHash = "core::starknet::class_hash::ClassHash", e.ContractAddress = "core::starknet::contract_address::ContractAddress", e.Secp256k1Point = "core::starknet::secp256k1::Secp256k1Point", e))(Bs || {}), rh = /* @__PURE__ */ ((e) => (e.EXTERNAL = "EXTERNAL", e.L1_HANDLER = "L1_HANDLER", e.CONSTRUCTOR = "CONSTRUCTOR", e))(rh || {}), ah = /* @__PURE__ */ ((e) => (e.DECLARE = "DECLARE", e.DEPLOY = "DEPLOY", e.DEPLOY_ACCOUNT = "DEPLOY_ACCOUNT", e.INVOKE = "INVOKE_FUNCTION", e))(ah || {}), ih = /* @__PURE__ */ ((e) => (e.NOT_RECEIVED = "NOT_RECEIVED", e.RECEIVED = "RECEIVED", e.ACCEPTED_ON_L2 = "ACCEPTED_ON_L2", e.ACCEPTED_ON_L1 = "ACCEPTED_ON_L1", e.REJECTED = "REJECTED", e.REVERTED = "REVERTED", e))(ih || {}), oh = /* @__PURE__ */ ((e) => (e.NOT_RECEIVED = "NOT_RECEIVED", e.RECEIVED = "RECEIVED", e.ACCEPTED_ON_L2 = "ACCEPTED_ON_L2", e.ACCEPTED_ON_L1 = "ACCEPTED_ON_L1", e))(oh || {}), sh = /* @__PURE__ */ ((e) => (e.REJECTED = "REJECTED", e.REVERTED = "REVERTED", e.SUCCEEDED = "SUCCEEDED", e))(sh || {}), ch = /* @__PURE__ */ ((e) => (e.PENDING = "PENDING", e.ACCEPTED_ON_L1 = "ACCEPTED_ON_L1", e.ACCEPTED_ON_L2 = "ACCEPTED_ON_L2", e.REJECTED = "REJECTED", e))(ch || {}), Os = /* @__PURE__ */ ((e) => (e.PENDING = "pending", e.LATEST = "latest", e))(Os || {});
function Z(e, t) {
  if (!e)
    throw new Error(t || "Assertion failure");
}
var S1 = {};
re(S1, {
  addPercent: () => xr,
  assertInRange: () => uh,
  bigNumberishArrayToDecimalStringArray: () => dh,
  bigNumberishArrayToHexadecimalStringArray: () => fh,
  cleanHex: () => xo,
  getDecimalString: () => C1,
  getHexString: () => hh,
  getHexStringArray: () => Ps,
  hexToBytes: () => zs,
  hexToDecimalString: () => lh,
  isBigInt: () => tn,
  isBoolean: () => Rs,
  isHex: () => at,
  isNumber: () => Jn,
  isStringWholeNumber: () => or,
  toBigInt: () => Y,
  toCairoBool: () => Ns,
  toHex: () => D,
  toHexString: () => Ds,
  toStorageKey: () => js
});
function at(e) {
  return /^0x[0-9a-f]*$/i.test(e);
}
function Y(e) {
  return BigInt(e);
}
function tn(e) {
  return typeof e == "bigint";
}
function D(e) {
  return ne(Y(e).toString(16));
}
var Ds = D;
function js(e) {
  return ne(Y(e).toString(16).padStart(64, "0"));
}
function lh(e) {
  return BigInt(ne(e)).toString(10);
}
function xo(e) {
  return e.toLowerCase().replace(/^(0x)0+/, "$1");
}
function uh(e, t, n, r = "") {
  const a = r === "" ? "invalid length" : `invalid ${r} length`, i = BigInt(e), o = BigInt(t), s = BigInt(n);
  Z(
    i >= o && i <= s,
    `Message not signable, ${a}.`
  );
}
function dh(e) {
  return e.map((t) => Y(t).toString(10));
}
function fh(e) {
  return e.map((t) => D(t));
}
function or(e) {
  return /^\d+$/.test(e);
}
function C1(e) {
  if (at(e))
    return lh(e);
  if (or(e))
    return e;
  throw new Error(`${e} needs to be a hex-string or whole-number-string`);
}
function hh(e) {
  if (at(e))
    return e;
  if (or(e))
    return Ds(e);
  throw new Error(`${e} needs to be a hex-string or whole-number-string`);
}
function Ps(e) {
  return e.map(hh);
}
function Ns(e) {
  return (+e).toString();
}
function zs(e) {
  if (!at(e))
    throw new Error(`${e} needs to be a hex-string`);
  let t = qe(e);
  return t.length % 2 !== 0 && (t = `0${t}`), An(t);
}
function xr(e, t) {
  const n = BigInt(e);
  return n + n * BigInt(t) / 100n;
}
function Jn(e) {
  return typeof e == "number";
}
function Rs(e) {
  return typeof e == "boolean";
}
var I1 = {};
re(I1, {
  getSelector: () => fi,
  getSelectorFromName: () => be,
  keccakBn: () => gh,
  starknetKeccak: () => Ls
});
function gh(e) {
  const t = qe(D(BigInt(e))), n = t.length % 2 === 0 ? t : `0${t}`;
  return ne(Gt(zs(ne(n))).toString(16));
}
function T1(e) {
  return ne(Gt(Wt(e)).toString(16));
}
function Ls(e) {
  return BigInt(T1(e)) & Ff;
}
function be(e) {
  return D(Ls(e));
}
function fi(e) {
  return at(e) ? e : or(e) ? Ds(e) : be(e);
}
var B1 = {};
re(B1, {
  decodeShortString: () => Sn,
  encodeShortString: () => xe,
  isASCII: () => $s,
  isDecimalString: () => Ms,
  isLongText: () => Hs,
  isShortString: () => ta,
  isShortText: () => O1,
  isString: () => me,
  isText: () => na,
  splitLongString: () => Us
});
function $s(e) {
  return /^[\x00-\x7F]*$/.test(e);
}
function ta(e) {
  return e.length <= Ss;
}
function Ms(e) {
  return /^[0-9]*$/i.test(e);
}
function me(e) {
  return typeof e == "string";
}
function na(e) {
  return me(e) && !at(e) && !or(e);
}
var O1 = (e) => na(e) && ta(e), Hs = (e) => na(e) && !ta(e);
function Us(e) {
  const t = RegExp(`[^]{1,${Ss}}`, "g");
  return e.match(t) || [];
}
function xe(e) {
  if (!$s(e))
    throw new Error(`${e} is not an ASCII string`);
  if (!ta(e))
    throw new Error(`${e} is too long`);
  return ne(e.replace(/./g, (t) => t.charCodeAt(0).toString(16)));
}
function Sn(e) {
  if (!$s(e))
    throw new Error(`${e} is not an ASCII string`);
  if (at(e))
    return qe(e).replace(/.{2}/g, (t) => String.fromCharCode(parseInt(t, 16)));
  if (Ms(e))
    return Sn("0X".concat(BigInt(e).toString(16)));
  throw new Error(`${e} is not Hex or decimal`);
}
var D1 = {};
re(D1, {
  byteArrayFromString: () => hi,
  stringFromByteArray: () => mh
});
function mh(e) {
  const t = BigInt(e.pending_word) === 0n ? "" : Sn(D(e.pending_word));
  return e.data.reduce((n, r) => {
    const a = BigInt(r) === 0n ? "" : Sn(D(r));
    return n + a;
  }, "") + t;
}
function hi(e) {
  const t = Us(e), n = t[t.length - 1], r = t.map(xe), [a, i] = n === void 0 || n.length === 31 ? ["0x00", 0] : [r.pop(), n.length];
  return {
    data: r.length === 0 ? [] : r,
    pending_word: a,
    pending_word_len: i
  };
}
var j1 = {};
re(j1, {
  felt: () => We,
  getAbiContractVersion: () => Zs,
  getArrayType: () => At,
  isCairo1Abi: () => qs,
  isCairo1Type: () => Qt,
  isLen: () => Cn,
  isTypeArray: () => Yt,
  isTypeBool: () => pi,
  isTypeByteArray: () => yi,
  isTypeBytes31: () => Fs,
  isTypeContractAddress: () => V1,
  isTypeEnum: () => Bn,
  isTypeEthAddress: () => bh,
  isTypeFelt: () => Xn,
  isTypeLiteral: () => Vs,
  isTypeNamedTuple: () => yh,
  isTypeNonZero: () => On,
  isTypeOption: () => gi,
  isTypeResult: () => mi,
  isTypeSecp256k1Point: () => bi,
  isTypeStruct: () => ra,
  isTypeTuple: () => nn,
  isTypeUint: () => $r,
  isTypeUint256: () => U1,
  tuple: () => Gn,
  uint256: () => Eo,
  uint512: () => F1
});
function hn(e) {
  if (tn(e) || Number.isInteger(e))
    return e.toString();
  if (me(e)) {
    if (at(e))
      return BigInt(e).toString();
    if (na(e)) {
      if (!ta(e))
        throw new Error(
          `${e} is a long string > 31 chars. Please split it into an array of short strings.`
        );
      return BigInt(xe(e)).toString();
    }
    if (or(e))
      return e;
  }
  if (Rs(e))
    return `${+e}`;
  throw new Error(`${e} can't be computed by felt()`);
}
var Rn = (1n << 128n) - 1n, ph = (1n << 256n) - 1n, P1 = 0n, N1 = 340282366920938463463374607431768211455n, z1 = 340282366920938463463374607431768211455n, R1 = 0n, L1 = 0n, nt, ge = (nt = class {
  constructor(...t) {
    $(this, "low");
    $(this, "high");
    if (typeof t[0] == "object" && t.length === 1 && "low" in t[0] && "high" in t[0]) {
      const n = nt.validateProps(t[0].low, t[0].high);
      this.low = n.low, this.high = n.high;
    } else if (t.length === 1) {
      const n = nt.validate(t[0]);
      this.low = n & Rn, this.high = n >> 128n;
    } else if (t.length === 2) {
      const n = nt.validateProps(t[0], t[1]);
      this.low = n.low, this.high = n.high;
    } else
      throw Error("Incorrect constructor parameters");
  }
  /**
   * Validate if BigNumberish can be represented as Unit256
   */
  static validate(t) {
    const n = BigInt(t);
    if (n < P1)
      throw Error("bigNumberish is smaller than UINT_256_MIN");
    if (n > ph)
      throw new Error("bigNumberish is bigger than UINT_256_MAX");
    return n;
  }
  /**
   * Validate if low and high can be represented as Unit256
   */
  static validateProps(t, n) {
    const r = BigInt(t), a = BigInt(n);
    if (r < R1 || r > N1)
      throw new Error("low is out of range UINT_256_LOW_MIN - UINT_256_LOW_MAX");
    if (a < L1 || a > z1)
      throw new Error("high is out of range UINT_256_HIGH_MIN - UINT_256_HIGH_MAX");
    return { low: r, high: a };
  }
  /**
   * Check if BigNumberish can be represented as Unit256
   */
  static is(t) {
    try {
      nt.validate(t);
    } catch {
      return !1;
    }
    return !0;
  }
  /**
   * Check if provided abi type is this data type
   */
  static isAbiType(t) {
    return t === nt.abiSelector;
  }
  /**
   * Return bigint representation
   */
  toBigInt() {
    return (this.high << 128n) + this.low;
  }
  /**
   * Return Uint256 structure with HexString props
   * {low: HexString, high: HexString}
   */
  toUint256HexString() {
    return {
      low: ne(this.low.toString(16)),
      high: ne(this.high.toString(16))
    };
  }
  /**
   * Return Uint256 structure with DecimalString props
   * {low: DecString, high: DecString}
   */
  toUint256DecimalString() {
    return {
      low: this.low.toString(10),
      high: this.high.toString(10)
    };
  }
  /**
   * Return api requests representation witch is felt array
   */
  toApiRequest() {
    return [hn(this.low), hn(this.high)];
  }
}, $(nt, "abiSelector", "core::integer::u256"), nt), $1 = (1n << 512n) - 1n, M1 = 0n, H1 = 0n, rt, Ne = (rt = class {
  constructor(...t) {
    $(this, "limb0");
    $(this, "limb1");
    $(this, "limb2");
    $(this, "limb3");
    if (typeof t[0] == "object" && t.length === 1 && "limb0" in t[0] && "limb1" in t[0] && "limb2" in t[0] && "limb3" in t[0]) {
      const n = rt.validateProps(
        t[0].limb0,
        t[0].limb1,
        t[0].limb2,
        t[0].limb3
      );
      this.limb0 = n.limb0, this.limb1 = n.limb1, this.limb2 = n.limb2, this.limb3 = n.limb3;
    } else if (t.length === 1) {
      const n = rt.validate(t[0]);
      this.limb0 = n & Rn, this.limb1 = (n & Rn << 128n) >> 128n, this.limb2 = (n & Rn << 256n) >> 256n, this.limb3 = n >> 384n;
    } else if (t.length === 4) {
      const n = rt.validateProps(t[0], t[1], t[2], t[3]);
      this.limb0 = n.limb0, this.limb1 = n.limb1, this.limb2 = n.limb2, this.limb3 = n.limb3;
    } else
      throw Error("Incorrect Uint512 constructor parameters");
  }
  /**
   * Validate if BigNumberish can be represented as Uint512
   */
  static validate(t) {
    const n = BigInt(t);
    if (n < M1)
      throw Error("bigNumberish is smaller than UINT_512_MIN.");
    if (n > $1)
      throw Error("bigNumberish is bigger than UINT_512_MAX.");
    return n;
  }
  /**
   * Validate if limbs can be represented as Uint512
   */
  static validateProps(t, n, r, a) {
    const i = BigInt(t), o = BigInt(n), s = BigInt(r), l = BigInt(a);
    return [i, o, s, l].forEach((c, u) => {
      if (c < H1 || c > Rn)
        throw Error(`limb${u} is not in the range of a u128 number`);
    }), { limb0: i, limb1: o, limb2: s, limb3: l };
  }
  /**
   * Check if BigNumberish can be represented as Uint512
   */
  static is(t) {
    try {
      rt.validate(t);
    } catch {
      return !1;
    }
    return !0;
  }
  /**
   * Check if provided abi type is this data type
   */
  static isAbiType(t) {
    return t === rt.abiSelector;
  }
  /**
   * Return bigint representation
   */
  toBigInt() {
    return (this.limb3 << 384n) + (this.limb2 << 256n) + (this.limb1 << 128n) + this.limb0;
  }
  /**
   * Return Uint512 structure with HexString props
   * limbx: HexString
   */
  toUint512HexString() {
    return {
      limb0: ne(this.limb0.toString(16)),
      limb1: ne(this.limb1.toString(16)),
      limb2: ne(this.limb2.toString(16)),
      limb3: ne(this.limb3.toString(16))
    };
  }
  /**
   * Return Uint512 structure with DecimalString props
   * limbx DecString
   */
  toUint512DecimalString() {
    return {
      limb0: this.limb0.toString(10),
      limb1: this.limb1.toString(10),
      limb2: this.limb2.toString(10),
      limb3: this.limb3.toString(10)
    };
  }
  /**
   * Return api requests representation witch is felt array
   */
  toApiRequest() {
    return [
      hn(this.limb0),
      hn(this.limb1),
      hn(this.limb2),
      hn(this.limb3)
    ];
  }
}, $(rt, "abiSelector", "core::integer::u512"), rt), Cn = (e) => /_len$/.test(e), Xn = (e) => e === "felt" || e === "core::felt252", Yt = (e) => /\*/.test(e) || e.startsWith("core::array::Array::") || e.startsWith("core::array::Span::"), nn = (e) => /^\(.*\)$/i.test(e), yh = (e) => /\(.*\)/i.test(e) && e.includes(":"), ra = (e, t) => e in t, Bn = (e, t) => e in t, gi = (e) => e.startsWith("core::option::Option::"), mi = (e) => e.startsWith("core::result::Result::"), $r = (e) => Object.values(Ts).includes(e), U1 = (e) => ge.isAbiType(e), Vs = (e) => Object.values(Bs).includes(e), pi = (e) => e === "core::bool", V1 = (e) => e === "core::starknet::contract_address::ContractAddress", bh = (e) => e === "core::starknet::eth_address::EthAddress", Fs = (e) => e === "core::bytes_31::bytes31", yi = (e) => e === "core::byte_array::ByteArray", bi = (e) => e === "core::starknet::secp256k1::Secp256k1Point", Qt = (e) => e.includes("::"), At = (e) => Qt(e) ? e.substring(e.indexOf("<") + 1, e.lastIndexOf(">")) : e.replace("*", "");
function qs(e) {
  const { cairo: t } = Zs(e);
  if (t === void 0)
    throw Error("Unable to determine Cairo version");
  return t === "1";
}
function On(e) {
  return e.startsWith("core::zeroable::NonZero::");
}
function Zs(e) {
  if (e.find((r) => r.type === "interface"))
    return { cairo: "1", compiler: "2" };
  const t = e.find(
    (r) => r.type === "function" && (r.inputs.length || r.outputs.length)
  );
  if (!t)
    return { cairo: void 0, compiler: void 0 };
  const n = t.inputs.length ? t.inputs : t.outputs;
  return Qt(n[0].type) ? { cairo: "1", compiler: "1" } : { cairo: "0", compiler: "0" };
}
var Eo = (e) => new ge(e).toUint256DecimalString(), F1 = (e) => new Ne(e).toUint512DecimalString(), Gn = (...e) => ({ ...e });
function We(e) {
  return hn(e);
}
var aa = class {
  /**
   * @param enumContent an object with the variants as keys and the content as value. Only one content shall be defined.
   */
  constructor(e) {
    /**
     * direct readonly access to variants of the Cairo Custom Enum.
     * @returns a value of type any
     * @example
     * ```typescript
     * const successValue = myCairoEnum.variant.Success;
     */
    $(this, "variant");
    const t = Object.values(e);
    if (t.length === 0)
      throw new Error("This Enum must have at least 1 variant");
    if (t.filter(
      (r) => typeof r < "u"
    ).length !== 1)
      throw new Error("This Enum must have exactly one active variant");
    this.variant = e;
  }
  /**
   *
   * @returns the content of the valid variant of a Cairo custom Enum.
   */
  unwrap() {
    const t = Object.entries(this.variant).find((n) => typeof n[1] < "u");
    if (!(typeof t > "u"))
      return t[1];
  }
  /**
   *
   * @returns the name of the valid variant of a Cairo custom Enum.
   */
  activeVariant() {
    const t = Object.entries(this.variant).find((n) => typeof n[1] < "u");
    return typeof t > "u" ? "" : t[0];
  }
}, wh = /* @__PURE__ */ ((e) => (e[e.Some = 0] = "Some", e[e.None = 1] = "None", e))(wh || {}), So = class {
  constructor(e, t) {
    $(this, "Some");
    $(this, "None");
    if (!(e in wh))
      throw new Error("Wrong variant : should be CairoOptionVariant.Some or .None.");
    if (e === 0) {
      if (typeof t > "u")
        throw new Error(
          'The creation of a Cairo Option with "Some" variant needs a content as input.'
        );
      this.Some = t, this.None = void 0;
    } else
      this.Some = void 0, this.None = !0;
  }
  /**
   *
   * @returns the content of the valid variant of a Cairo custom Enum.
   *  If None, returns 'undefined'.
   */
  unwrap() {
    if (!this.None)
      return this.Some;
  }
  /**
   *
   * @returns true if the valid variant is 'isSome'.
   */
  isSome() {
    return !(typeof this.Some > "u");
  }
  /**
   *
   * @returns true if the valid variant is 'isNone'.
   */
  isNone() {
    return this.None === !0;
  }
}, Ah = /* @__PURE__ */ ((e) => (e[e.Ok = 0] = "Ok", e[e.Err = 1] = "Err", e))(Ah || {}), Co = class {
  constructor(e, t) {
    $(this, "Ok");
    $(this, "Err");
    if (!(e in Ah))
      throw new Error("Wrong variant : should be CairoResultVariant.Ok or .Err.");
    e === 0 ? (this.Ok = t, this.Err = void 0) : (this.Ok = void 0, this.Err = t);
  }
  /**
   *
   * @returns the content of the valid variant of a Cairo Result.
   */
  unwrap() {
    if (typeof this.Ok < "u")
      return this.Ok;
    if (typeof this.Err < "u")
      return this.Err;
    throw new Error("Both Result.Ok and .Err are undefined. Not authorized.");
  }
  /**
   *
   * @returns true if the valid variant is 'Ok'.
   */
  isOk() {
    return !(typeof this.Ok > "u");
  }
  /**
   *
   * @returns true if the valid variant is 'isErr'.
   */
  isErr() {
    return !(typeof this.Err > "u");
  }
}, Yi = {
  isBN: (e, t, n) => {
    if (!tn(e[n]))
      throw new Error(
        `Data and formatter mismatch on ${n}:${t[n]}, expected response data ${n}:${e[n]} to be BN instead it is ${typeof e[n]}`
      );
  },
  unknown: (e, t, n) => {
    throw new Error(`Unhandled formatter type on ${n}:${t[n]} for data ${n}:${e[n]}`);
  }
};
function Oa(e, t, n) {
  return Object.entries(e).reduce(
    (r, [a, i]) => {
      const o = n ?? t[a];
      if (!(a in t) && !n)
        return r[a] = i, r;
      if (o === "string") {
        if (Array.isArray(e[a])) {
          const s = Oa(
            e[a],
            e[a].map((l) => o)
          );
          return r[a] = Object.values(s).join(""), r;
        }
        return Yi.isBN(e, t, a), r[a] = Sn(i), r;
      }
      if (o === "number")
        return Yi.isBN(e, t, a), r[a] = Number(i), r;
      if (typeof o == "function")
        return r[a] = o(i), r;
      if (Array.isArray(o)) {
        const s = Oa(e[a], o, o[0]);
        return r[a] = Object.values(s), r;
      }
      return typeof o == "object" ? (r[a] = Oa(e[a], o), r) : (Yi.unknown(e, t, a), r);
    },
    {}
  );
}
var q1 = class {
  constructor(e) {
    $(this, "abi");
    this.abi = e;
  }
  /**
   * abi method inputs length without '_len' inputs
   * cairo 0 reducer
   * @param abiMethod FunctionAbi
   * @returns number
   */
  methodInputsLength(e) {
    return e.inputs.reduce((t, n) => Cn(n.name) ? t : t + 1, 0);
  }
  /**
   * get method definition from abi
   * @param name string
   * @returns FunctionAbi | undefined
   */
  getMethod(e) {
    return this.abi.find((t) => t.name === e);
  }
  /**
   * Get Abi in legacy format
   * @returns Abi
   */
  getLegacyFormat() {
    return this.abi;
  }
}, Z1 = class {
  constructor(e) {
    $(this, "abi");
    this.abi = e;
  }
  /**
   * abi method inputs length
   * @param abiMethod FunctionAbi
   * @returns number
   */
  methodInputsLength(e) {
    return e.inputs.length;
  }
  /**
   * get method definition from abi
   * @param name string
   * @returns FunctionAbi | undefined
   */
  getMethod(e) {
    return this.abi.find(
      (n) => n.type === "interface"
    ).items.find((n) => n.name === e);
  }
  /**
   * Get Abi in legacy format
   * @returns Abi
   */
  getLegacyFormat() {
    return this.abi.flatMap((e) => e.type === "interface" ? e.items : e);
  }
};
function K1(e) {
  const t = J1(e);
  if (t === 0 || t === 1)
    return new q1(e);
  if (t === 2)
    return new Z1(e);
  throw Error(`Unsupported ABI version ${t}`);
}
function J1(e) {
  return e.find((t) => t.type === "interface") ? 2 : qs(e) ? 1 : 0;
}
function tu(e, t, n) {
  return e === "constructor" && !n && !t.length;
}
function X1(e) {
  const t = e.substring(0, e.indexOf(":")), n = e.substring(t.length + 1);
  return { name: t, type: n };
}
function G1(e) {
  if (!e.includes("("))
    return { subTuple: [], result: e };
  const t = [];
  let n = "", r = 0;
  for (; r < e.length; ) {
    if (e[r] === "(") {
      let a = 1;
      const i = r;
      for (r++; a; )
        e[r] === ")" && a--, e[r] === "(" && a++, r++;
      t.push(e.substring(i, r)), n += " ", r--;
    } else
      n += e[r];
    r++;
  }
  return {
    subTuple: t,
    result: n
  };
}
function W1(e) {
  const t = e.replace(/\s/g, "").slice(1, -1), { subTuple: n, result: r } = G1(t);
  let a = r.split(",").map((i) => n.length ? i.replace(" ", n.shift()) : i);
  return yh(e) && (a = a.reduce((i, o) => i.concat(X1(o)), [])), a;
}
function nu(e, t, n) {
  for (let r = 0, a = 0; r < e.length; r++)
    if (e[r] === t)
      a++;
    else if (e[r] === n && --a === 0)
      return r;
  return Number.POSITIVE_INFINITY;
}
function Y1(e) {
  const t = e.slice(1, -1), n = [];
  let r = 0, a;
  for (; r < t.length; ) {
    switch (!0) {
      case t[r] === "(": {
        a = r + nu(t.slice(r), "(", ")") + 1;
        break;
      }
      case (t.startsWith("core::result::Result::<", r) || t.startsWith("core::array::Array::<", r) || t.startsWith("core::option::Option::<", r)): {
        a = r + nu(t.slice(r), "<", ">") + 1;
        break;
      }
      default: {
        const i = t.indexOf(",", r);
        a = i !== -1 ? i : Number.POSITIVE_INFINITY;
      }
    }
    n.push(t.slice(r, a)), r = a + 2;
  }
  return n;
}
function Ks(e) {
  return Qt(e) ? Y1(e) : W1(e);
}
function Q1(e) {
  return Error(
    `Your object includes the property : ${e}, containing an Uint256 object without the 'low' and 'high' keys.`
  );
}
function ek(e) {
  return Error(
    `Your object includes the property : ${e}, containing an Uint512 object without the 'limb0' to 'limb3' keys.`
  );
}
function tk(e, t, n, r) {
  const a = (u, d) => {
    if (Yt(d))
      return o(u, d);
    if (Bn(d, r)) {
      const h = r[d];
      return l(u, h);
    }
    if (nn(d))
      return s(u, d);
    if (bh(d) || On(d) || yi(d) || bi(d))
      return u;
    if (ge.isAbiType(d)) {
      const h = u;
      if (typeof h != "object")
        return h;
      if (!("low" in h && "high" in h))
        throw Q1(d);
      return { low: h.low, high: h.high };
    }
    if (Ne.isAbiType(d)) {
      const h = u;
      if (typeof h != "object")
        return h;
      if (!["limb0", "limb1", "limb2", "limb3"].every((f) => f in h))
        throw ek(d);
      return { limb0: h.limb0, limb1: h.limb1, limb2: h.limb2, limb3: h.limb3 };
    }
    if (ra(d, n)) {
      const h = n[d].members;
      return i(u, h);
    }
    return u;
  }, i = (u, d) => d.reduce((f, m) => {
    const g = (p) => Object.defineProperty(f, m.name, {
      enumerable: !0,
      value: p ?? u[m.name]
    });
    if (u[m.name] === "undefined" && (Qt(m.type) || !Cn(m.name)))
      throw Error(`Your object needs a property with key : ${m.name} .`);
    return g(a(u[m.name], m.type)), f;
  }, {});
  function o(u, d) {
    const h = At(d);
    return me(u) ? u : u.map((f) => a(f, h));
  }
  function s(u, d) {
    return Ks(d).reduce((m, g, p) => {
      const b = Object.keys(u), _ = (y) => Object.defineProperty(m, p.toString(), {
        enumerable: !0,
        value: y ?? u[b[p]]
      }), k = g != null && g.type ? g.type : g;
      return _(a(u[b[p]], k)), m;
    }, {});
  }
  const l = (u, d) => {
    if (mi(d.name)) {
      const g = u, p = d.name.substring(
        d.name.indexOf("<") + 1,
        d.name.lastIndexOf(",")
      ), b = d.name.substring(
        d.name.indexOf(",") + 1,
        d.name.lastIndexOf(">")
      );
      return g.isOk() ? new Co(
        0,
        a(u.unwrap(), p)
      ) : new Co(
        1,
        a(u.unwrap(), b)
      );
    }
    if (gi(d.name)) {
      const g = u, p = d.name.substring(
        d.name.indexOf("<") + 1,
        d.name.lastIndexOf(">")
      );
      return g.isSome() ? new So(
        0,
        a(g.unwrap(), p)
      ) : new So(1, {});
    }
    const h = u, m = Object.entries(h.variant).map((g) => {
      if (typeof g[1] > "u")
        return g;
      const p = d.type.substring(
        d.type.lastIndexOf("<") + 1,
        d.type.lastIndexOf(">")
      );
      return p === "()" ? g : [g[0], a(h.unwrap(), p)];
    });
    return new aa(Object.fromEntries(m));
  };
  return t.reduce((u, d) => {
    const h = (f) => Object.defineProperty(u, d.name, {
      enumerable: !0,
      value: f
    });
    return Cn(d.name) && !Qt(d.type) || h(a(e[d.name], d.type)), u;
  }, {});
}
function Mn(e, t) {
  switch (!0) {
    case ge.isAbiType(e):
      return new ge(t).toApiRequest();
    case Ne.isAbiType(e):
      return new Ne(t).toApiRequest();
    case Fs(e):
      return xe(t.toString());
    case bi(e): {
      const n = qe(D(t)).padStart(128, "0"), r = Eo(ne(n.slice(-64))), a = Eo(ne(n.slice(0, -64)));
      return [
        We(a.low),
        We(a.high),
        We(r.low),
        We(r.high)
      ];
    }
    default:
      return We(t);
  }
}
function nk(e, t) {
  const n = Ks(t), r = Object.values(e);
  if (r.length !== n.length)
    throw Error(
      `ParseTuple: provided and expected abi tuple size do not match.
      provided: ${r} 
      expected: ${n}`
    );
  return n.map((a, i) => ({
    element: r[i],
    type: a.type ?? a
  }));
}
function rk(e) {
  const t = hi(e);
  return [
    t.data.length.toString(),
    ...t.data.map((n) => n.toString()),
    t.pending_word.toString(),
    t.pending_word_len.toString()
  ];
}
function gt(e, t, n, r) {
  if (e === void 0)
    throw Error(`Missing parameter for type ${t}`);
  if (Array.isArray(e)) {
    const a = [];
    a.push(We(e.length));
    const i = At(t);
    return e.reduce((o, s) => o.concat(gt(s, i, n, r)), a);
  }
  if (n[t] && n[t].members.length) {
    if (ge.isAbiType(t))
      return new ge(e).toApiRequest();
    if (Ne.isAbiType(t))
      return new Ne(e).toApiRequest();
    if (t === "core::starknet::eth_address::EthAddress")
      return Mn(t, e);
    if (t === "core::byte_array::ByteArray")
      return rk(e);
    const { members: a } = n[t], i = e;
    return a.reduce((o, s) => o.concat(gt(i[s.name], s.type, n, r)), []);
  }
  if (nn(t))
    return nk(e, t).reduce((i, o) => {
      const s = gt(o.element, o.type, n, r);
      return i.concat(s);
    }, []);
  if (ge.isAbiType(t))
    return new ge(e).toApiRequest();
  if (Ne.isAbiType(t))
    return new Ne(e).toApiRequest();
  if (Bn(t, r)) {
    const { variants: a } = r[t];
    if (gi(t)) {
      const d = e;
      if (d.isSome()) {
        const h = a.find((g) => g.name === "Some");
        if (typeof h > "u")
          throw Error("Error in abi : Option has no 'Some' variant.");
        const f = h.type;
        if (f === "()")
          return "0";
        const m = gt(
          d.unwrap(),
          f,
          n,
          r
        );
        return Array.isArray(m) ? ["0", ...m] : ["0", m];
      }
      return "1";
    }
    if (mi(t)) {
      const d = e;
      if (d.isOk()) {
        const g = a.find((_) => _.name === "Ok");
        if (typeof g > "u")
          throw Error("Error in abi : Result has no 'Ok' variant.");
        const p = g.type;
        if (p === "()")
          return "0";
        const b = gt(
          d.unwrap(),
          p,
          n,
          r
        );
        return Array.isArray(b) ? ["0", ...b] : ["0", b];
      }
      const h = a.find((g) => g.name === "Err");
      if (typeof h > "u")
        throw Error("Error in abi : Result has no 'Err' variant.");
      const f = h.type;
      if (f === "()")
        return "1";
      const m = gt(d.unwrap(), f, n, r);
      return Array.isArray(m) ? ["1", ...m] : ["1", m];
    }
    const i = e, o = i.activeVariant(), s = a.find((d) => d.name === o);
    if (typeof s > "u")
      throw Error(`Not find in abi : Enum has no '${o}' variant.`);
    const l = s.type, c = a.findIndex((d) => d.name === o);
    if (l === "()")
      return c.toString();
    const u = gt(i.unwrap(), l, n, r);
    return Array.isArray(u) ? [c.toString(), ...u] : [c.toString(), u];
  }
  if (On(t))
    return Mn(At(t), e);
  if (typeof e == "object")
    throw Error(`Parameter ${e} do not align with abi parameter ${t}`);
  return Mn(t, e);
}
function ak(e, t, n, r) {
  const { name: a, type: i } = t;
  let { value: o } = e.next();
  switch (!0) {
    case Yt(i):
      if (!Array.isArray(o) && !na(o))
        throw Error(`ABI expected parameter ${a} to be array or long string, got ${o}`);
      return me(o) && (o = Us(o)), gt(o, t.type, n, r);
    case On(i):
      return Mn(At(i), o);
    case i === "core::starknet::eth_address::EthAddress":
      return Mn(i, o);
    case (ra(i, n) || nn(i) || ge.isAbiType(i) || ge.isAbiType(i)):
      return gt(o, i, n, r);
    case Bn(i, r):
      return gt(
        o,
        i,
        n,
        r
      );
    default:
      return Mn(i, o);
  }
}
function Io(e, t) {
  let n;
  switch (!0) {
    case pi(e):
      return n = t.next().value, !!BigInt(n);
    case ge.isAbiType(e):
      const r = t.next().value, a = t.next().value;
      return new ge(r, a).toBigInt();
    case Ne.isAbiType(e):
      const i = t.next().value, o = t.next().value, s = t.next().value, l = t.next().value;
      return new Ne(i, o, s, l).toBigInt();
    case e === "core::starknet::eth_address::EthAddress":
      return n = t.next().value, BigInt(n);
    case e === "core::bytes_31::bytes31":
      return n = t.next().value, Sn(n);
    case bi(e):
      const c = qe(t.next().value).padStart(32, "0"), u = qe(t.next().value).padStart(32, "0"), d = qe(t.next().value).padStart(32, "0"), h = qe(t.next().value).padStart(32, "0");
      return BigInt(ne(u + c + h + d));
    default:
      return n = t.next().value, BigInt(n);
  }
}
function et(e, t, n, r) {
  if (t.type === "()")
    return {};
  if (ge.isAbiType(t.type)) {
    const a = e.next().value, i = e.next().value;
    return new ge(a, i).toBigInt();
  }
  if (Ne.isAbiType(t.type)) {
    const a = e.next().value, i = e.next().value, o = e.next().value, s = e.next().value;
    return new Ne(a, i, o, s).toBigInt();
  }
  if (yi(t.type)) {
    const a = [], i = BigInt(e.next().value);
    for (; a.length < i; )
      a.push(D(e.next().value));
    const o = D(e.next().value), s = BigInt(e.next().value);
    return mh({
      data: a,
      pending_word: o,
      pending_word_len: s
    });
  }
  if (Yt(t.type)) {
    const a = [], i = { name: "", type: At(t.type) }, o = BigInt(e.next().value);
    for (; a.length < o; )
      a.push(et(e, i, n, r));
    return a;
  }
  if (On(t.type)) {
    const a = { name: "", type: At(t.type) };
    return et(e, a, n, r);
  }
  if (n && t.type in n && n[t.type])
    return t.type === "core::starknet::eth_address::EthAddress" ? Io(t.type, e) : n[t.type].members.reduce((a, i) => (a[i.name] = et(e, i, n, r), a), {});
  if (r && t.type in r && r[t.type]) {
    const a = Number(e.next().value), i = r[t.type].variants.reduce((s, l, c) => c === a ? (s[l.name] = et(
      e,
      { name: "", type: l.type },
      n,
      r
    ), s) : (s[l.name] = void 0, s), {});
    if (t.type.startsWith("core::option::Option")) {
      const s = a === 0 ? i.Some : void 0;
      return new So(a, s);
    }
    if (t.type.startsWith("core::result::Result")) {
      let s;
      return a === 0 ? s = i.Ok : s = i.Err, new Co(a, s);
    }
    return new aa(i);
  }
  if (nn(t.type))
    return Ks(t.type).reduce((i, o, s) => {
      const l = o != null && o.name ? o.name : s, c = o != null && o.type ? o.type : o, u = { name: l, type: c };
      return i[l] = et(e, u, n, r), i;
    }, {});
  if (Yt(t.type)) {
    const a = [], i = { name: "", type: At(t.type) }, o = BigInt(e.next().value);
    for (; a.length < o; )
      a.push(et(e, i, n, r));
    return a;
  }
  return Io(t.type, e);
}
function Xa(e, t, n, r, a) {
  const { name: i, type: o } = t;
  let s;
  switch (!0) {
    case Cn(i):
      return s = e.next().value, BigInt(s);
    case (n && o in n || nn(o)):
      return et(e, t, n, r);
    case (r && Bn(o, r)):
      return et(e, t, n, r);
    case Yt(o):
      if (Qt(o))
        return et(e, t, n, r);
      const l = [];
      if (a && a[`${i}_len`]) {
        const c = a[`${i}_len`];
        for (; l.length < c; )
          l.push(
            et(
              e,
              { name: i, type: t.type.replace("*", "") },
              n,
              r
            )
          );
      }
      return l;
    case On(o):
      return et(e, t, n, r);
    default:
      return Io(o, e);
  }
}
var Js = (e, t) => {
  if (Z(
    me(e) || Jn(e) || tn(e),
    `Validate: arg ${t.name} should be a felt typed as (String, Number or BigInt)`
  ), me(e) && !at(e))
    return;
  const n = BigInt(e.toString(10));
  Z(
    // from : https://github.com/starkware-libs/starknet-specs/blob/29bab650be6b1847c92d4461d4c33008b5e50b1a/api/starknet_api_openrpc.json#L1266
    n >= 0n && n <= 2n ** 252n - 1n,
    `Validate: arg ${t.name} cairo typed ${t.type} should be in range [0, 2^252-1]`
  );
}, ik = (e, t) => {
  Z(me(e), `Validate: arg ${t.name} should be a string.`), Z(
    e.length < 32,
    `Validate: arg ${t.name} cairo typed ${t.type} should be a string of less than 32 characters.`
  );
}, ok = (e, t) => {
  Z(me(e), `Validate: arg ${t.name} should be a string.`);
}, wi = (e, t) => {
  Jn(e) && Z(
    e <= Number.MAX_SAFE_INTEGER,
    "Validation: Parameter is to large to be typed as Number use (BigInt or String)"
  ), Z(
    me(e) || Jn(e) || tn(e) || typeof e == "object" && "low" in e && "high" in e || typeof e == "object" && ["limb0", "limb1", "limb2", "limb3"].every((r) => r in e),
    `Validate: arg ${t.name} of cairo type ${t.type} should be type (String, Number or BigInt), but is ${typeof e} ${e}.`
  );
  let n;
  switch (t.type) {
    case "core::integer::u256":
      n = new ge(e).toBigInt();
      break;
    case "core::integer::u512":
      n = new Ne(e).toBigInt();
      break;
    default:
      n = Y(e);
  }
  switch (t.type) {
    case "core::integer::u8":
      Z(
        n >= 0n && n <= 255n,
        `Validate: arg ${t.name} cairo typed ${t.type} should be in range [0 - 255]`
      );
      break;
    case "core::integer::u16":
      Z(
        n >= 0n && n <= 65535n,
        `Validate: arg ${t.name} cairo typed ${t.type} should be in range [0, 65535]`
      );
      break;
    case "core::integer::u32":
      Z(
        n >= 0n && n <= 4294967295n,
        `Validate: arg ${t.name} cairo typed ${t.type} should be in range [0, 4294967295]`
      );
      break;
    case "core::integer::u64":
      Z(
        n >= 0n && n <= 2n ** 64n - 1n,
        `Validate: arg ${t.name} cairo typed ${t.type} should be in range [0, 2^64-1]`
      );
      break;
    case "core::integer::u128":
      Z(
        n >= 0n && n <= 2n ** 128n - 1n,
        `Validate: arg ${t.name} cairo typed ${t.type} should be in range [0, 2^128-1]`
      );
      break;
    case "core::integer::u256":
      Z(
        n >= 0n && n <= 2n ** 256n - 1n,
        `Validate: arg ${t.name} is ${t.type} 0 - 2^256-1`
      );
      break;
    case "core::integer::u512":
      Z(Ne.is(n), `Validate: arg ${t.name} is ${t.type} 0 - 2^512-1`);
      break;
    case "core::starknet::class_hash::ClassHash":
      Z(
        // from : https://github.com/starkware-libs/starknet-specs/blob/29bab650be6b1847c92d4461d4c33008b5e50b1a/api/starknet_api_openrpc.json#L1670
        n >= 0n && n <= 2n ** 252n - 1n,
        `Validate: arg ${t.name} cairo typed ${t.type} should be in range [0, 2^252-1]`
      );
      break;
    case "core::starknet::contract_address::ContractAddress":
      Z(
        // from : https://github.com/starkware-libs/starknet-specs/blob/29bab650be6b1847c92d4461d4c33008b5e50b1a/api/starknet_api_openrpc.json#L1245
        n >= 0n && n <= 2n ** 252n - 1n,
        `Validate: arg ${t.name} cairo typed ${t.type} should be in range [0, 2^252-1]`
      );
      break;
    case "core::starknet::secp256k1::Secp256k1Point": {
      Z(
        n >= 0n && n <= 2n ** 512n - 1n,
        `Validate: arg ${t.name} must be ${t.type} : a 512 bits number.`
      );
      break;
    }
  }
}, kh = (e, t) => {
  Z(
    Rs(e),
    `Validate: arg ${t.name} of cairo type ${t.type} should be type (Boolean)`
  );
}, vh = (e, t, n) => {
  if (t.type === "core::integer::u256" || t.type === "core::integer::u512") {
    wi(e, t);
    return;
  }
  if (t.type === "core::starknet::eth_address::EthAddress") {
    Z(
      typeof e != "object",
      `EthAddress type is waiting a BigNumberish. Got ${e}`
    );
    const r = BigInt(e.toString(10));
    Z(
      // from : https://github.com/starkware-libs/starknet-specs/blob/29bab650be6b1847c92d4461d4c33008b5e50b1a/api/starknet_api_openrpc.json#L1259
      r >= 0n && r <= 2n ** 160n - 1n,
      `Validate: arg ${t.name} cairo typed ${t.type} should be in range [0, 2^160-1]`
    );
    return;
  }
  Z(
    typeof e == "object" && !Array.isArray(e),
    `Validate: arg ${t.name} is cairo type struct (${t.type}), and should be defined as js object (not array)`
  ), n[t.type].members.forEach(({ name: r }) => {
    Z(
      Object.keys(e).includes(r),
      `Validate: arg ${t.name} should have a property ${r}`
    );
  });
}, _h = (e, t) => {
  Z(
    typeof e == "object" && !Array.isArray(e),
    `Validate: arg ${t.name} is cairo type Enum (${t.type}), and should be defined as js object (not array)`
  );
  const n = Object.getOwnPropertyNames(Object.getPrototypeOf(e)), r = [...Object.getOwnPropertyNames(e), ...n];
  if (!(gi(t.type) && r.includes("isSome") && r.includes("isNone")) && !(mi(t.type) && r.includes("isOk") && r.includes("isErr")) && !(r.includes("variant") && r.includes("activeVariant")))
    throw new Error(
      `Validate Enum: argument ${t.name}, type ${t.type}, value received ${e}, is not an Enum.`
    );
}, xh = (e, t) => {
  Z(
    typeof e == "object" && !Array.isArray(e),
    `Validate: arg ${t.name} should be a tuple (defined as object)`
  );
}, Eh = (e, t, n, r) => {
  const a = At(t.type);
  if (!(Xn(a) && Hs(e)))
    switch (Z(Array.isArray(e), `Validate: arg ${t.name} should be an Array`), !0) {
      case Xn(a):
        e.forEach((i) => Js(i, t));
        break;
      case nn(a):
        e.forEach((i) => xh(i, { name: t.name, type: a }));
        break;
      case Yt(a):
        e.forEach(
          (i) => Eh(i, { name: "", type: a }, n, r)
        );
        break;
      case ra(a, n):
        e.forEach(
          (i) => vh(i, { name: t.name, type: a }, n)
        );
        break;
      case Bn(a, r):
        e.forEach((i) => _h(i, { name: t.name, type: a }));
        break;
      case ($r(a) || Vs(a)):
        e.forEach((i) => wi(i, { name: "", type: a }));
        break;
      case pi(a):
        e.forEach((i) => kh(i, t));
        break;
      default:
        throw new Error(
          `Validate Unhandled: argument ${t.name}, type ${t.type}, value ${e}`
        );
    }
}, sk = (e, t) => {
  const n = At(t.type);
  switch (Z(
    $r(n) && n !== Ne.abiSelector || Xn(n),
    `Validate: ${t.name} type is not authorized for NonZero type.`
  ), !0) {
    case Xn(n):
      Js(e, t), Z(
        BigInt(e.toString(10)) > 0,
        "Validate: value 0 is not authorized in NonZero felt252 type."
      );
      break;
    case $r(n):
      switch (wi(e, { name: "", type: n }), t.type) {
        case "core::integer::u256":
          Z(
            new ge(e).toBigInt() > 0,
            "Validate: value 0 is not authorized in NonZero uint256 type."
          );
          break;
        default:
          Z(
            Y(e) > 0,
            "Validate: value 0 is not authorized in NonZero uint type."
          );
      }
      break;
    default:
      throw new Error(
        `Validate Unhandled: argument ${t.name}, type ${t.type}, value ${e}`
      );
  }
};
function ru(e, t, n, r) {
  e.inputs.reduce((a, i) => {
    const o = t[a];
    switch (!0) {
      case Cn(i.name):
        return a;
      case Xn(i.type):
        Js(o, i);
        break;
      case Fs(i.type):
        ik(o, i);
        break;
      case ($r(i.type) || Vs(i.type)):
        wi(o, i);
        break;
      case pi(i.type):
        kh(o, i);
        break;
      case yi(i.type):
        ok(o, i);
        break;
      case Yt(i.type):
        Eh(o, i, n, r);
        break;
      case ra(i.type, n):
        vh(o, i, n);
        break;
      case Bn(i.type, r):
        _h(o, i);
        break;
      case nn(i.type):
        xh(o, i);
        break;
      case On(i.type):
        sk(o, i);
        break;
      default:
        throw new Error(
          `Validate Unhandled: argument ${i.name}, type ${i.type}, value ${o}`
        );
    }
    return a + 1;
  }, 0);
}
var te = class br {
  constructor(t) {
    $(this, "abi");
    $(this, "parser");
    $(this, "structs");
    $(this, "enums");
    this.structs = br.getAbiStruct(t), this.enums = br.getAbiEnum(t), this.parser = K1(t), this.abi = this.parser.getLegacyFormat();
  }
  /**
   * Validate arguments passed to the method as corresponding to the ones in the abi
   * @param type ValidateType - type of the method
   * @param method string - name of the method
   * @param args ArgsOrCalldata - arguments that are passed to the method
   */
  validate(t, n, r = []) {
    if (t !== "DEPLOY") {
      const o = this.abi.filter((s) => {
        if (s.type !== "function")
          return !1;
        const l = s.stateMutability === "view" || s.state_mutability === "view";
        return t === "INVOKE" ? !l : l;
      }).map((s) => s.name);
      Z(
        o.includes(n),
        `${t === "INVOKE" ? "invocable" : "viewable"} method not found in abi`
      );
    }
    const a = this.abi.find(
      (o) => t === "DEPLOY" ? o.name === n && o.type === "constructor" : o.name === n && o.type === "function"
    );
    if (tu(n, r, a))
      return;
    const i = this.parser.methodInputsLength(a);
    if (r.length !== i)
      throw Error(
        `Invalid number of arguments, expected ${i} arguments, but got ${r.length}`
      );
    ru(a, r, this.structs, this.enums);
  }
  /**
   * Compile contract callData with abi
   * Parse the calldata by using input fields from the abi for that method
   * @param method string - method name
   * @param argsCalldata RawArgs - arguments passed to the method. Can be an array of arguments (in the order of abi definition), or an object constructed in conformity with abi (in this case, the parameter can be in a wrong order).
   * @return Calldata - parsed arguments in format that contract is expecting
   * @example
   * ```typescript
   * const calldata = myCallData.compile("constructor", ["0x34a", [1, 3n]]);
   * ```
   * ```typescript
   * const calldata2 = myCallData.compile("constructor", {list:[1, 3n], balance:"0x34"}); // wrong order is valid
   * ```
   */
  compile(t, n) {
    const r = this.abi.find((s) => s.name === t);
    if (tu(t, n, r))
      return [];
    let a;
    if (Array.isArray(n))
      a = n;
    else {
      const s = tk(
        n,
        r.inputs,
        this.structs,
        this.enums
      );
      a = Object.values(s), ru(r, a, this.structs, this.enums);
    }
    const i = a[Symbol.iterator](), o = r.inputs.reduce(
      (s, l) => Cn(l.name) && !Qt(l.type) ? s : s.concat(ak(i, l, this.structs, this.enums)),
      []
    );
    return Object.defineProperty(o, "__compiled__", {
      enumerable: !1,
      writable: !1,
      value: !0
    }), o;
  }
  /**
   * Compile contract callData without abi
   * @param rawArgs RawArgs representing cairo method arguments or string array of compiled data
   * @returns Calldata
   */
  static compile(t) {
    const n = (a) => {
      const i = (s, l = ".") => {
        const c = Array.isArray(s) ? [s.length.toString(), ...s] : s;
        return Object.entries(c).flatMap(([u, d]) => {
          let h = d;
          u === "entrypoint" ? h = be(h) : Hs(h) && (h = hi(h));
          const f = Array.isArray(c) && u === "0" ? "$$len" : u;
          if (tn(h))
            return [[`${l}${f}`, We(h)]];
          if (Object(h) === h) {
            const m = Object.getOwnPropertyNames(Object.getPrototypeOf(h)), g = [...Object.getOwnPropertyNames(h), ...m];
            if (g.includes("isSome") && g.includes("isNone")) {
              const p = h, b = p.isSome() ? 0 : 1;
              return p.isSome() ? i({ 0: b, 1: p.unwrap() }, `${l}${f}.`) : [[`${l}${f}`, We(b)]];
            }
            if (g.includes("isOk") && g.includes("isErr")) {
              const p = h, b = p.isOk() ? 0 : 1;
              return i({ 0: b, 1: p.unwrap() }, `${l}${f}.`);
            }
            if (g.includes("variant") && g.includes("activeVariant")) {
              const p = h, b = p.activeVariant(), k = Object.keys(p.variant).findIndex(
                (y) => y === b
              );
              return typeof p.unwrap() == "object" && Object.keys(p.unwrap()).length === 0 ? [[`${l}${f}`, We(k)]] : i({ 0: k, 1: p.unwrap() }, `${l}${f}.`);
            }
            return i(h, `${l}${f}.`);
          }
          return [[`${l}${f}`, We(h)]];
        });
      };
      return Object.fromEntries(i(a));
    };
    let r;
    if (Array.isArray(t)) {
      const a = { ...t }, i = n(a);
      r = Object.values(i);
    } else {
      const a = n(t);
      r = Object.values(a);
    }
    return Object.defineProperty(r, "__compiled__", {
      enumerable: !1,
      writable: !1,
      value: !0
    }), r;
  }
  /**
   * Parse elements of the response array and structuring them into response object
   * @param method string - method name
   * @param response string[] - response from the method
   * @return Result - parsed response corresponding to the abi
   */
  parse(t, n) {
    const { outputs: r } = this.abi.find((o) => o.name === t), a = n.flat()[Symbol.iterator](), i = r.flat().reduce((o, s, l) => {
      const c = s.name ?? l;
      return o[c] = Xa(a, s, this.structs, this.enums, o), o[c] && o[`${c}_len`] && delete o[`${c}_len`], o;
    }, {});
    return Object.keys(i).length === 1 && 0 in i ? i[0] : i;
  }
  /**
   * Format cairo method response data to native js values based on provided format schema
   * @param method string - cairo method name
   * @param response string[] - cairo method response
   * @param format object - formatter object schema
   * @returns Result - parsed and formatted response object
   */
  format(t, n, r) {
    const a = this.parse(t, n);
    return Oa(a, r);
  }
  /**
   * Helper to extract structs from abi
   * @param abi Abi
   * @returns AbiStructs - structs from abi
   */
  static getAbiStruct(t) {
    return t.filter((n) => n.type === "struct").reduce(
      (n, r) => ({
        ...n,
        [r.name]: r
      }),
      {}
    );
  }
  /**
   * Helper to extract enums from abi
   * @param abi Abi
   * @returns AbiEnums - enums from abi
   */
  static getAbiEnum(t) {
    const n = t.filter((r) => r.type === "enum").reduce(
      (r, a) => ({
        ...r,
        [a.name]: a
      }),
      {}
    );
    return delete n["core::bool"], n;
  }
  /**
   * Helper: Compile HexCalldata | RawCalldata | RawArgs
   * @param rawCalldata HexCalldata | RawCalldata | RawArgs
   * @returns Calldata
   */
  static toCalldata(t = []) {
    return br.compile(t);
  }
  /**
   * Helper: Convert raw to HexCalldata
   * @param raw HexCalldata | RawCalldata | RawArgs
   * @returns HexCalldata
   */
  static toHex(t = []) {
    return br.compile(t).map((r) => D(r));
  }
  /**
   * Parse the elements of a contract response and structure them into one or several Result.
   * In Cairo 0, arrays are not supported.
   * @param typeCairo string or string[] - Cairo type name, ex : "hello::hello::UserData"
   * @param response string[] - serialized data corresponding to typeCairo.
   * @return Result or Result[] - parsed response corresponding to typeData.
   * @example
   * const res2=helloCallData.decodeParameters("hello::hello::UserData",["0x123456","0x1"]);
   * result = { address: 1193046n, is_claimed: true }
   */
  decodeParameters(t, n) {
    const r = Array.isArray(t) ? t : [t], a = n.flat()[Symbol.iterator](), i = r.map(
      (o) => Xa(
        a,
        { name: "", type: o },
        this.structs,
        this.enums
      )
    );
    return i.length === 1 ? i[0] : i;
  }
}, ck = {};
re(ck, {
  calculateContractAddressFromHash: () => Ga,
  calculateDeclareTransactionHash: () => Do,
  calculateDeployAccountTransactionHash: () => jo,
  calculateInvokeTransactionHash: () => Oo,
  computeCompiledClassHash: () => Mh,
  computeContractClassHash: () => Uh,
  computeHashOnElements: () => mt,
  computeHintedClassHash: () => Rh,
  computeLegacyContractClassHash: () => Lh,
  computePedersenHash: () => Mr,
  computePedersenHashOnElements: () => Nh,
  computePoseidonHash: () => Ph,
  computePoseidonHashOnElements: () => zh,
  computeSierraContractClassHash: () => Hh,
  formatSpaces: () => Hr,
  getSelector: () => fi,
  getSelectorFromName: () => be,
  hashByteCodeSegments: () => $h,
  keccakBn: () => gh,
  poseidon: () => n0,
  starknetKeccak: () => Ls
});
var lk = {};
re(lk, {
  calculateDeclareTransactionHash: () => Sh,
  calculateDeployAccountTransactionHash: () => Ch,
  calculateTransactionHash: () => Ih,
  calculateTransactionHashCommon: () => Ai,
  computeHashOnElements: () => To
});
var uk = {};
re(uk, {
  starkCurve: () => qp,
  weierstrass: () => u0
});
function To(e) {
  return [...e, e.length].reduce((t, n) => Yn(Y(t), Y(n)), 0).toString();
}
function Ai(e, t, n, r, a, i, o, s = []) {
  const l = To(a), c = [
    e,
    t,
    n,
    r,
    l,
    i,
    o,
    ...s
  ];
  return To(c);
}
function Sh(e, t, n, r, a, i, o) {
  return Ai(
    "0x6465636c617265",
    n,
    t,
    0,
    [e],
    r,
    a,
    [i, ...o ? [o] : []]
  );
}
function Ch(e, t, n, r, a, i, o, s) {
  const l = [t, r, ...n];
  return Ai(
    "0x6465706c6f795f6163636f756e74",
    a,
    e,
    0,
    l,
    i,
    o,
    [s]
  );
}
function Ih(e, t, n, r, a, i) {
  return Ai(
    "0x696e766f6b65",
    t,
    e,
    0,
    n,
    r,
    a,
    [i]
  );
}
var dk = {};
re(dk, {
  calculateDeclareTransactionHash: () => Dh,
  calculateDeployAccountTransactionHash: () => Oh,
  calculateInvokeTransactionHash: () => jh,
  calculateTransactionHashCommon: () => ki,
  hashDAMode: () => Th,
  hashFeeField: () => Bh
});
var Jt = (e) => e.map((t) => BigInt(t)), fk = 32n, hk = 64n, Bo = 128n, au = hk + Bo, gk = BigInt(xe("L1_GAS")), mk = BigInt(xe("L2_GAS"));
function Th(e, t) {
  return (BigInt(e) << fk) + BigInt(t);
}
function Bh(e, t) {
  const n = (gk << au) + (BigInt(t.l1_gas.max_amount) << Bo) + BigInt(t.l1_gas.max_price_per_unit), r = (mk << au) + (BigInt(t.l2_gas.max_amount) << Bo) + BigInt(t.l2_gas.max_price_per_unit);
  return Se([BigInt(e), n, r]);
}
function ki(e, t, n, r, a, i, o, s, l, c, u = []) {
  const d = Bh(i, c), h = Th(s, l), f = Jt([
    e,
    t,
    n,
    d,
    Se(Jt(o)),
    r,
    a,
    h,
    ...Jt(u)
  ]);
  return D(Se(f));
}
function Oh(e, t, n, r, a, i, o, s, l, c, u, d) {
  return ki(
    "0x6465706c6f795f6163636f756e74",
    a,
    e,
    i,
    o,
    u,
    d,
    s,
    l,
    c,
    [Se(Jt(n)), t, r]
  );
}
function Dh(e, t, n, r, a, i, o, s, l, c, u, d) {
  return ki(
    "0x6465636c617265",
    r,
    n,
    a,
    i,
    u,
    Jt(d),
    s,
    l,
    c,
    [Se(Jt(o)), e, t]
  );
}
function jh(e, t, n, r, a, i, o, s, l, c, u) {
  return ki(
    "0x696e766f6b65",
    t,
    e,
    r,
    a,
    c,
    u,
    o,
    s,
    l,
    [Se(Jt(i)), Se(Jt(n))]
  );
}
function pk(e) {
  return [R.ETransactionVersion.V3, R.ETransactionVersion.F3].includes(e.version);
}
function Oo(e) {
  return pk(e) ? jh(
    e.senderAddress,
    e.version,
    e.compiledCalldata,
    e.chainId,
    e.nonce,
    e.accountDeploymentData,
    e.nonceDataAvailabilityMode,
    e.feeDataAvailabilityMode,
    e.resourceBounds,
    e.tip,
    e.paymasterData
  ) : Ih(
    e.senderAddress,
    e.version,
    e.compiledCalldata,
    e.maxFee,
    e.chainId,
    e.nonce
  );
}
function yk(e) {
  return [R.ETransactionVersion.V3, R.ETransactionVersion.F3].includes(e.version);
}
function Do(e) {
  return yk(e) ? Dh(
    e.classHash,
    e.compiledClassHash,
    e.senderAddress,
    e.version,
    e.chainId,
    e.nonce,
    e.accountDeploymentData,
    e.nonceDataAvailabilityMode,
    e.feeDataAvailabilityMode,
    e.resourceBounds,
    e.tip,
    e.paymasterData
  ) : Sh(
    e.classHash,
    e.senderAddress,
    e.version,
    e.maxFee,
    e.chainId,
    e.nonce,
    e.compiledClassHash
  );
}
function bk(e) {
  return [R.ETransactionVersion.V3, R.ETransactionVersion.F3].includes(e.version);
}
function jo(e) {
  return bk(e) ? Oh(
    e.contractAddress,
    e.classHash,
    e.compiledConstructorCalldata,
    e.salt,
    e.version,
    e.chainId,
    e.nonce,
    e.nonceDataAvailabilityMode,
    e.feeDataAvailabilityMode,
    e.resourceBounds,
    e.tip,
    e.paymasterData
  ) : Ch(
    e.contractAddress,
    e.classHash,
    e.constructorCalldata,
    e.salt,
    e.version,
    e.maxFee,
    e.chainId,
    e.nonce
  );
}
var wk = {};
re(wk, {
  parse: () => sr,
  parseAlwaysAsBig: () => kk,
  stringify: () => Me,
  stringifyAlwaysAsBig: () => vk
});
var Ak = (e) => {
  if (!ri(e))
    return parseFloat(e);
  const t = parseInt(e, 10);
  return Number.isSafeInteger(t) ? t : BigInt(e);
}, sr = (e) => pd(String(e), void 0, Ak), kk = (e) => pd(String(e), void 0, v0), Me = (e, t, n, r) => yd(e, t, n, r), vk = Me;
function Mr(e, t) {
  return Yn(BigInt(e), BigInt(t));
}
function Ph(e, t) {
  return D(is(BigInt(e), BigInt(t)));
}
function mt(e) {
  return [...e, e.length].reduce((t, n) => Yn(BigInt(t), BigInt(n)), 0).toString();
}
var Nh = mt;
function zh(e) {
  return D(Se(e.map((t) => BigInt(t))));
}
function Ga(e, t, n, r) {
  const a = te.compile(n), i = mt(a), o = We("0x535441524b4e45545f434f4e54524143545f41444452455353"), s = mt([
    o,
    r,
    e,
    t,
    i
  ]);
  return D(BigInt(s) % Kf);
}
function _k(e, t) {
  return e === "attributes" || e === "accessible_scopes" ? Array.isArray(t) && t.length === 0 ? void 0 : t : e === "debug_info" ? null : t === null ? void 0 : t;
}
function Hr(e) {
  let t = !1;
  const n = [];
  for (const r of e)
    r === '"' && !(n.length > 0 && n.slice(-1)[0] === "\\") && (t = !t), t ? n.push(r) : n.push(r === ":" ? ": " : r === "," ? ", " : r);
  return n.join("");
}
function Rh(e) {
  const { abi: t, program: n } = e, a = Hr(Me({ abi: t, program: n }, _k));
  return ne(Gt(Wt(a)).toString(16));
}
function Lh(e) {
  const t = me(e) ? sr(e) : e, n = D(qf), r = mt(
    t.entry_points_by_type.EXTERNAL.flatMap((c) => [c.selector, c.offset])
  ), a = mt(
    t.entry_points_by_type.L1_HANDLER.flatMap((c) => [c.selector, c.offset])
  ), i = mt(
    t.entry_points_by_type.CONSTRUCTOR.flatMap((c) => [c.selector, c.offset])
  ), o = mt(
    t.program.builtins.map((c) => xe(c))
  ), s = Rh(t), l = mt(t.program.data);
  return mt([
    n,
    r,
    a,
    i,
    o,
    s,
    l
  ]);
}
function xk(e) {
  return Se(
    e.flatMap((t) => BigInt(xe(t)))
  );
}
function Qi(e) {
  const t = e.flatMap((n) => [BigInt(n.selector), BigInt(n.offset), xk(n.builtins)]);
  return Se(t);
}
function $h(e) {
  const t = e.bytecode.map((i) => BigInt(i)), n = e.bytecode_segment_lengths ?? [];
  let r = 0;
  const a = n.flatMap((i) => {
    const o = t.slice(r, r += i);
    return [BigInt(i), Se(o)];
  });
  return 1n + Se(a);
}
function Mh(e) {
  const n = BigInt(xe("COMPILED_CLASS_V1")), r = Qi(e.entry_points_by_type.EXTERNAL), a = Qi(e.entry_points_by_type.L1_HANDLER), i = Qi(e.entry_points_by_type.CONSTRUCTOR), o = e.bytecode_segment_lengths ? $h(e) : Se(e.bytecode.map((s) => BigInt(s)));
  return D(
    Se([
      n,
      r,
      a,
      i,
      o
    ])
  );
}
function eo(e) {
  const t = e.flatMap((n) => [BigInt(n.selector), BigInt(n.function_idx)]);
  return Se(t);
}
function Ek(e) {
  const t = Hr(Me(e.abi, null));
  return BigInt(ne(Gt(Wt(t)).toString(16)));
}
function Hh(e) {
  const n = BigInt(xe("CONTRACT_CLASS_V0.1.0")), r = eo(e.entry_points_by_type.EXTERNAL), a = eo(e.entry_points_by_type.L1_HANDLER), i = eo(e.entry_points_by_type.CONSTRUCTOR), o = Ek(e), s = Se(e.sierra_program.map((l) => BigInt(l)));
  return D(
    Se([
      n,
      r,
      a,
      i,
      o,
      s
    ])
  );
}
function Uh(e) {
  const t = me(e) ? sr(e) : e;
  return "sierra_program" in t ? Hh(t) : Lh(t);
}
var Sk = {};
re(Sk, {
  compressProgram: () => Xs,
  decompressProgram: () => yn,
  estimateFeeToBounds: () => Ur,
  estimatedFeeToMaxFee: () => Fh,
  formatSignature: () => vi,
  intDAM: () => an,
  makeAddress: () => Ck,
  randomAddress: () => Vh,
  reduceV2: () => ja,
  signatureToDecimalArray: () => Ik,
  signatureToHexArray: () => we,
  toFeeVersion: () => Da,
  toTransactionVersion: () => dt,
  v3Details: () => pe
});
function Xs(e) {
  const t = me(e) ? e : Me(e), n = Ow(t);
  return $f(n);
}
function yn(e) {
  if (Array.isArray(e))
    return e;
  const t = Rf(Dw(Lf(e)));
  return sr(t);
}
function Vh() {
  const e = ts.randomPrivateKey();
  return rs(e);
}
function Ck(e) {
  return ne(e).toLowerCase();
}
function vi(e) {
  if (!e)
    throw Error("formatSignature: provided signature is undefined");
  if (Array.isArray(e))
    return e.map((t) => D(t));
  try {
    const { r: t, s: n } = e;
    return [D(t), D(n)];
  } catch {
    throw new Error("Signature need to be weierstrass.SignatureType or an array for custom");
  }
}
function Ik(e) {
  return dh(vi(e));
}
function we(e) {
  return fh(vi(e));
}
function Fh(e, t = 50) {
  return xr(e, t);
}
function Ur(e, t = 50, n = 50) {
  if (tn(e))
    return {
      l2_gas: { max_amount: "0x0", max_price_per_unit: "0x0" },
      l1_gas: { max_amount: "0x0", max_price_per_unit: "0x0" }
    };
  if (typeof e.gas_consumed > "u" || typeof e.gas_price > "u")
    throw Error("estimateFeeToBounds: estimate is undefined");
  const r = e.data_gas_consumed !== void 0 && e.data_gas_price !== void 0 ? D(xr(BigInt(e.overall_fee) / BigInt(e.gas_price), t)) : D(xr(e.gas_consumed, t)), a = D(xr(e.gas_price, n));
  return {
    l2_gas: { max_amount: "0x0", max_price_per_unit: "0x0" },
    l1_gas: { max_amount: r, max_price_per_unit: a }
  };
}
function an(e) {
  if (e === R.EDataAvailabilityMode.L1)
    return R.EDAMode.L1;
  if (e === R.EDataAvailabilityMode.L2)
    return R.EDAMode.L2;
  throw Error("EDAM conversion");
}
function dt(e, t) {
  const n = t ? D(t) : void 0, r = D(e);
  if (t && !Object.values(R.ETransactionVersion).includes(n))
    throw Error(`providedVersion ${t} is not ETransactionVersion`);
  if (!Object.values(R.ETransactionVersion).includes(r))
    throw Error(`defaultVersion ${e} is not ETransactionVersion`);
  return t ? n : r;
}
function Da(e) {
  if (!e)
    return;
  const t = D(e);
  if (t === R.ETransactionVersion.V0)
    return R.ETransactionVersion.F0;
  if (t === R.ETransactionVersion.V1)
    return R.ETransactionVersion.F1;
  if (t === R.ETransactionVersion.V2)
    return R.ETransactionVersion.F2;
  if (t === R.ETransactionVersion.V3)
    return R.ETransactionVersion.F3;
  throw Error(`toFeeVersion: ${t} is not supported`);
}
function pe(e) {
  return {
    tip: e.tip || 0,
    paymasterData: e.paymasterData || [],
    accountDeploymentData: e.accountDeploymentData || [],
    nonceDataAvailabilityMode: e.nonceDataAvailabilityMode || R.EDataAvailabilityMode.L1,
    feeDataAvailabilityMode: e.feeDataAvailabilityMode || R.EDataAvailabilityMode.L1,
    resourceBounds: e.resourceBounds ?? Ur(ye)
  };
}
function ja(e) {
  return e === R.ETransactionVersion.F2 ? R.ETransactionVersion.F1 : e === R.ETransactionVersion.V2 ? R.ETransactionVersion.V1 : e;
}
function $e(e) {
  return "sierra_program" in (me(e) ? sr(e) : e);
}
function Pa(e) {
  const t = { ...e };
  if ($e(e.contract) && (!e.compiledClassHash && e.casm && (t.compiledClassHash = Mh(e.casm)), !t.compiledClassHash))
    throw new Error(
      "Extract compiledClassHash failed, provide (CairoAssembly).casm file or compiledClassHash"
    );
  if (t.classHash = e.classHash ?? Uh(e.contract), !t.classHash)
    throw new Error("Extract classHash failed, provide (CompiledContract).json file or classHash");
  return t;
}
var Tk = {};
re(Tk, {
  ethRandomPrivateKey: () => Bk,
  validateAndParseEthAddress: () => Gs
});
function Bk() {
  return Vf(Es(rf.utils.randomPrivateKey()));
}
function Gs(e) {
  uh(e, ye, 2n ** 160n - 1n, "Ethereum Address ");
  const t = ne(qe(D(e)).padStart(40, "0"));
  return Z(!!t.match(/^(0x)?[0-9a-f]{40}$/), "Invalid Ethereum Address Format"), t;
}
var qh = typeof window < "u" && window.fetch || // use buildin fetch in browser if available
typeof global < "u" && bf(global.fetch) || // use buildin fetch in node, react-native and service worker if available
YA, Ok = {};
re(Ok, {
  Block: () => G,
  createSierraContractClass: () => Zh,
  getDefaultNodeUrl: () => Vr,
  isPendingBlock: () => Dk,
  isPendingStateUpdate: () => Pk,
  isPendingTransaction: () => jk,
  isV3Tx: () => Ue,
  isVersion: () => Ws,
  parseContract: () => Kh,
  validBlockTags: () => Jh,
  wait: () => Wn
});
function Wn(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Zh(e) {
  const t = { ...e };
  return delete t.sierra_program_debug_info, t.abi = Hr(Me(e.abi)), t.sierra_program = Hr(Me(e.sierra_program)), t.sierra_program = Xs(t.sierra_program), t;
}
function Kh(e) {
  const t = me(e) ? sr(e) : e;
  return $e(e) ? Zh(t) : {
    ...t,
    ..."program" in t && { program: Xs(t.program) }
  };
}
var Vr = (e, t = !1) => {
  t || console.warn("Using default public node url, please provide nodeUrl in provider options!");
  const n = eh[
    e ?? "SN_SEPOLIA"
    /* SN_SEPOLIA */
  ], r = Math.floor(Math.random() * n.length);
  return n[r];
}, Jh = Object.values(Os), G = class {
  /**
   * Create a Block instance
   * @param {BlockIdentifier} _identifier  hex string and BigInt are detected as block hashes.
   * decimal string and number are detected as block numbers.
   * text string are detected as block tag.
   * null is considered as a 'pending' block tag.
   */
  constructor(e) {
    /**
     * @param {BlockIdentifier} hash if not null, contains the block hash
     */
    $(this, "hash", null);
    /**
     * @param {BlockIdentifier} number if not null, contains the block number
     */
    $(this, "number", null);
    /**
     * @param {BlockIdentifier} tag if not null, contains "pending" or "latest"
     */
    $(this, "tag", null);
    $(this, "valueOf", () => this.number);
    $(this, "toString", () => this.hash);
    this.setIdentifier(e);
  }
  setIdentifier(e) {
    if (me(e))
      if (Ms(e))
        this.number = parseInt(e, 10);
      else if (at(e))
        this.hash = e;
      else if (Jh.includes(e))
        this.tag = e;
      else
        throw TypeError(`Block identifier unmanaged: ${e}`);
    else tn(e) ? this.hash = D(e) : Jn(e) ? this.number = e : this.tag = "pending";
    if (Jn(this.number) && this.number < 0)
      throw TypeError(`Block number (${this.number}) can't be negative`);
  }
  // TODO: fix any
  /**
   * @returns {any} the identifier as a string
   * @example
   * ```typescript
   * const result = new provider.Block(123456n).queryIdentifier;
   * // result = "blockHash=0x1e240"
   * ```
   */
  get queryIdentifier() {
    return this.number !== null ? `blockNumber=${this.number}` : this.hash !== null ? `blockHash=${this.hash}` : `blockNumber=${this.tag}`;
  }
  // TODO: fix any
  /**
   * @returns {any} the identifier as an object
   * @example
   * ```typescript
   * const result = new provider.Block(56789).identifier;
   * // result = { block_number: 56789 }
   * ```
   */
  get identifier() {
    return this.number !== null ? { block_number: this.number } : this.hash !== null ? { block_hash: this.hash } : this.tag;
  }
  /**
   * change the identifier of an existing Block instance
   * @example
   * ```typescript
   * const myBlock = new provider.Block("latest");
   * myBlock.identifier ="0x3456789abc";
   * const result = myBlock.identifier;
   * // result = { block_hash: '0x3456789abc' }
   * ```
   */
  set identifier(e) {
    this.setIdentifier(e);
  }
};
function Ue(e) {
  const t = e.version ? D(e.version) : R.ETransactionVersion.V3;
  return t === R.ETransactionVersion.V3 || t === R.ETransactionVersion.F3;
}
function Ws(e, t) {
  const [n, r] = e.split("."), [a, i] = t.split(".");
  return n === a && r === i;
}
function Dk(e) {
  return e.status === "PENDING";
}
function jk(e) {
  return !("block_hash" in e);
}
function Pk(e) {
  return !("block_hash" in e);
}
var Nk = {};
re(Nk, {
  buildUDCCall: () => Qs,
  fromCallsToExecuteCalldata: () => Ys,
  fromCallsToExecuteCalldataWithNonce: () => zk,
  fromCallsToExecuteCalldata_cairo1: () => Gh,
  getExecuteCalldata: () => Wa,
  getVersionsByType: () => ec,
  transformCallsToMulticallArrays: () => Xh,
  transformCallsToMulticallArrays_cairo1: () => Rk
});
var Xh = (e) => {
  const t = [], n = [];
  return e.forEach((r) => {
    const a = te.compile(r.calldata || []);
    t.push({
      to: Y(r.contractAddress).toString(10),
      selector: Y(be(r.entrypoint)).toString(10),
      data_offset: n.length.toString(),
      data_len: a.length.toString()
    }), n.push(...a);
  }), {
    callArray: t,
    calldata: te.compile({ calldata: n })
  };
}, Ys = (e) => {
  const { callArray: t, calldata: n } = Xh(e);
  return [...te.compile({ callArray: t }), ...n];
}, zk = (e, t) => [...Ys(e), Y(t).toString()], Rk = (e) => e.map((n) => ({
  to: Y(n.contractAddress).toString(10),
  selector: Y(be(n.entrypoint)).toString(10),
  calldata: te.compile(n.calldata || [])
})), Gh = (e) => {
  const t = e.map((n) => ({
    contractAddress: n.contractAddress,
    entrypoint: n.entrypoint,
    calldata: Array.isArray(n.calldata) && "__compiled__" in n.calldata ? n.calldata : te.compile(n.calldata)
    // RawArgsObject | RawArgsArray type
  }));
  return te.compile({ orderCalls: t });
}, Wa = (e, t = "0") => t === "1" ? Gh(e) : Ys(e);
function Qs(e, t) {
  const n = [].concat(e).map((r) => {
    const {
      classHash: a,
      salt: i,
      unique: o = !0,
      constructorCalldata: s = []
    } = r, l = te.compile(s), c = i ?? Vh();
    return {
      call: {
        contractAddress: pn.ADDRESS,
        entrypoint: pn.ENTRYPOINT,
        calldata: [
          a,
          c,
          Ns(o),
          l.length,
          ...l
        ]
      },
      address: Ga(
        o ? Yn(t, c) : c,
        a,
        l,
        o ? pn.ADDRESS : 0
      )
    };
  });
  return {
    calls: n.map((r) => r.call),
    addresses: n.map((r) => r.address)
  };
}
function ec(e) {
  return e === "fee" ? {
    v1: R.ETransactionVersion.F1,
    v2: R.ETransactionVersion.F2,
    v3: R.ETransactionVersion.F3
  } : { v1: R.ETransactionVersion.V1, v2: R.ETransactionVersion.V2, v3: R.ETransactionVersion.V3 };
}
var to = {
  headers: { "Content-Type": "application/json" },
  blockIdentifier: "pending",
  retries: 200
}, Lk = class {
  // behave like web2 rpc and return when tx is processed
  constructor(e) {
    $(this, "nodeUrl");
    $(this, "headers");
    $(this, "retries");
    $(this, "requestId");
    $(this, "blockIdentifier");
    $(this, "chainId");
    $(this, "specVersion");
    $(this, "waitMode");
    const { nodeUrl: t, retries: n, headers: r, blockIdentifier: a, chainId: i, specVersion: o, waitMode: s } = e || {};
    Object.values(di).includes(t) ? this.nodeUrl = Vr(t, e == null ? void 0 : e.default) : t ? this.nodeUrl = t : this.nodeUrl = Vr(void 0, e == null ? void 0 : e.default), this.retries = n || to.retries, this.headers = { ...to.headers, ...r }, this.blockIdentifier = a || to.blockIdentifier, this.chainId = i, this.specVersion = o, this.waitMode = s || !1, this.requestId = 0;
  }
  setChainId(e) {
    this.chainId = e;
  }
  fetch(e, t, n = 0) {
    const r = {
      id: n,
      jsonrpc: "2.0",
      method: e,
      ...t && { params: t }
    };
    return qh(this.nodeUrl, {
      method: "POST",
      body: Me(r),
      headers: this.headers
    });
  }
  errorHandler(e, t, n, r) {
    if (n) {
      const { code: a, message: i, data: o } = n;
      throw new Lr(
        `RPC: ${e} with params ${Me(t, null, 2)}

        ${a}: ${i}: ${Me(o)}`
      );
    }
    if (r instanceof Lr)
      throw r;
    if (r)
      throw Error(r.message);
  }
  async fetchEndpoint(e, t) {
    var n;
    try {
      const r = await this.fetch(e, t, this.requestId += 1), { error: a, result: i } = await r.json();
      return this.errorHandler(e, t, a), i;
    } catch (r) {
      throw this.errorHandler(e, t, (n = r == null ? void 0 : r.response) == null ? void 0 : n.data, r), r;
    }
  }
  async getChainId() {
    return this.chainId ?? (this.chainId = await this.fetchEndpoint("starknet_chainId")), this.chainId;
  }
  async getSpecVersion() {
    return this.specVersion ?? (this.specVersion = await this.fetchEndpoint("starknet_specVersion")), this.specVersion;
  }
  getNonceForAddress(e, t = this.blockIdentifier) {
    const n = D(e), r = new G(t).identifier;
    return this.fetchEndpoint("starknet_getNonce", {
      contract_address: n,
      block_id: r
    });
  }
  /**
   * Get the most recent accepted block hash and number
   */
  getBlockLatestAccepted() {
    return this.fetchEndpoint("starknet_blockHashAndNumber");
  }
  /**
   * Get the most recent accepted block number
   * redundant use getBlockLatestAccepted();
   * @returns Number of the latest block
   */
  getBlockNumber() {
    return this.fetchEndpoint("starknet_blockNumber");
  }
  getBlockWithTxHashes(e = this.blockIdentifier) {
    const t = new G(e).identifier;
    return this.fetchEndpoint("starknet_getBlockWithTxHashes", { block_id: t });
  }
  getBlockWithTxs(e = this.blockIdentifier) {
    const t = new G(e).identifier;
    return this.fetchEndpoint("starknet_getBlockWithTxs", { block_id: t });
  }
  getBlockStateUpdate(e = this.blockIdentifier) {
    const t = new G(e).identifier;
    return this.fetchEndpoint("starknet_getStateUpdate", { block_id: t });
  }
  getBlockTransactionsTraces(e = this.blockIdentifier) {
    const t = new G(e).identifier;
    return this.fetchEndpoint("starknet_traceBlockTransactions", { block_id: t });
  }
  getBlockTransactionCount(e = this.blockIdentifier) {
    const t = new G(e).identifier;
    return this.fetchEndpoint("starknet_getBlockTransactionCount", { block_id: t });
  }
  getTransactionByHash(e) {
    const t = D(e);
    return this.fetchEndpoint("starknet_getTransactionByHash", {
      transaction_hash: t
    });
  }
  getTransactionByBlockIdAndIndex(e, t) {
    const n = new G(e).identifier;
    return this.fetchEndpoint("starknet_getTransactionByBlockIdAndIndex", { block_id: n, index: t });
  }
  getTransactionReceipt(e) {
    const t = D(e);
    return this.fetchEndpoint("starknet_getTransactionReceipt", { transaction_hash: t });
  }
  getTransactionTrace(e) {
    const t = D(e);
    return this.fetchEndpoint("starknet_traceTransaction", { transaction_hash: t });
  }
  /**
   * Get the status of a transaction
   */
  getTransactionStatus(e) {
    const t = D(e);
    return this.fetchEndpoint("starknet_getTransactionStatus", { transaction_hash: t });
  }
  /**
   * @param invocations AccountInvocations
   * @param simulateTransactionOptions blockIdentifier and flags to skip validation and fee charge<br/>
   * - blockIdentifier<br/>
   * - skipValidate (default false)<br/>
   * - skipFeeCharge (default true)<br/>
   */
  simulateTransaction(e, t = {}) {
    const {
      blockIdentifier: n = this.blockIdentifier,
      skipValidate: r = !0,
      skipFeeCharge: a = !0
    } = t, i = new G(n).identifier, o = [];
    return r && o.push(se.ESimulationFlag.SKIP_VALIDATE), a && o.push(se.ESimulationFlag.SKIP_FEE_CHARGE), this.fetchEndpoint("starknet_simulateTransactions", {
      block_id: i,
      transactions: e.map((s) => this.buildTransaction(s)),
      simulation_flags: o
    });
  }
  async waitForTransaction(e, t) {
    const n = D(e);
    let { retries: r } = this, a = !1, i = !1;
    const o = (t == null ? void 0 : t.retryInterval) ?? 5e3, s = (t == null ? void 0 : t.errorStates) ?? [
      se.ETransactionStatus.REJECTED
      // TODO: commented out to preserve the long-standing behavior of "reverted" not being treated as an error by default
      // should decide which behavior to keep in the future
      // RPC.ETransactionExecutionStatus.REVERTED,
    ], l = (t == null ? void 0 : t.successStates) ?? [
      se.ETransactionExecutionStatus.SUCCEEDED,
      se.ETransactionStatus.ACCEPTED_ON_L2,
      se.ETransactionStatus.ACCEPTED_ON_L1
    ];
    let c;
    for (; !a; ) {
      await Wn(o);
      try {
        c = await this.getTransactionStatus(n);
        const d = c.execution_status, h = c.finality_status;
        if (!h)
          throw new Error("waiting for transaction status");
        if (s.includes(d) || s.includes(h)) {
          const f = `${d}: ${h}`, m = new Error(f);
          throw m.response = c, i = !0, m;
        } else (l.includes(d) || l.includes(h)) && (a = !0);
      } catch (d) {
        if (d instanceof Error && i)
          throw d;
        if (r <= 0)
          throw new Error(`waitForTransaction timed-out with retries ${this.retries}`);
      }
      r -= 1;
    }
    let u = null;
    for (; u === null; ) {
      try {
        u = await this.getTransactionReceipt(n);
      } catch {
        if (r <= 0)
          throw new Error(`waitForTransaction timed-out with retries ${this.retries}`);
      }
      r -= 1, await Wn(o);
    }
    return u;
  }
  getStorageAt(e, t, n = this.blockIdentifier) {
    const r = D(e), a = js(t), i = new G(n).identifier;
    return this.fetchEndpoint("starknet_getStorageAt", {
      contract_address: r,
      key: a,
      block_id: i
    });
  }
  getClassHashAt(e, t = this.blockIdentifier) {
    const n = D(e), r = new G(t).identifier;
    return this.fetchEndpoint("starknet_getClassHashAt", {
      block_id: r,
      contract_address: n
    });
  }
  getClass(e, t = this.blockIdentifier) {
    const n = D(e), r = new G(t).identifier;
    return this.fetchEndpoint("starknet_getClass", {
      class_hash: n,
      block_id: r
    });
  }
  getClassAt(e, t = this.blockIdentifier) {
    const n = D(e), r = new G(t).identifier;
    return this.fetchEndpoint("starknet_getClassAt", {
      block_id: r,
      contract_address: n
    });
  }
  async getEstimateFee(e, { blockIdentifier: t = this.blockIdentifier, skipValidate: n = !0 }) {
    const r = new G(t).identifier;
    let a = {};
    return Ws("0.5", await this.getSpecVersion()) || (a = {
      simulation_flags: n ? [se.ESimulationFlag.SKIP_VALIDATE] : []
    }), this.fetchEndpoint("starknet_estimateFee", {
      request: e.map((i) => this.buildTransaction(i, "fee")),
      block_id: r,
      ...a
    });
  }
  async invoke(e, t) {
    let n;
    return Ue(t) ? n = this.fetchEndpoint("starknet_addInvokeTransaction", {
      invoke_transaction: {
        type: se.ETransactionType.INVOKE,
        sender_address: e.contractAddress,
        calldata: te.toHex(e.calldata),
        version: se.ETransactionVersion.V3,
        signature: we(e.signature),
        nonce: D(t.nonce),
        resource_bounds: t.resourceBounds,
        tip: D(t.tip),
        paymaster_data: t.paymasterData.map((r) => D(r)),
        account_deployment_data: t.accountDeploymentData.map((r) => D(r)),
        nonce_data_availability_mode: t.nonceDataAvailabilityMode,
        fee_data_availability_mode: t.feeDataAvailabilityMode
      }
    }) : n = this.fetchEndpoint("starknet_addInvokeTransaction", {
      invoke_transaction: {
        sender_address: e.contractAddress,
        calldata: te.toHex(e.calldata),
        type: se.ETransactionType.INVOKE,
        max_fee: D(t.maxFee || 0),
        version: se.ETransactionVersion.V1,
        signature: we(e.signature),
        nonce: D(t.nonce)
      }
    }), this.waitMode ? this.waitForTransaction((await n).transaction_hash) : n;
  }
  async declare({ contract: e, signature: t, senderAddress: n, compiledClassHash: r }, a) {
    let i;
    if (!$e(e) && !Ue(a))
      i = this.fetchEndpoint("starknet_addDeclareTransaction", {
        declare_transaction: {
          type: se.ETransactionType.DECLARE,
          contract_class: {
            program: e.program,
            entry_points_by_type: e.entry_points_by_type,
            abi: e.abi
          },
          version: se.ETransactionVersion.V1,
          max_fee: D(a.maxFee || 0),
          signature: we(t),
          sender_address: n,
          nonce: D(a.nonce)
        }
      });
    else if ($e(e) && !Ue(a))
      i = this.fetchEndpoint("starknet_addDeclareTransaction", {
        declare_transaction: {
          type: se.ETransactionType.DECLARE,
          contract_class: {
            sierra_program: yn(e.sierra_program),
            contract_class_version: e.contract_class_version,
            entry_points_by_type: e.entry_points_by_type,
            abi: e.abi
          },
          compiled_class_hash: r || "",
          version: se.ETransactionVersion.V2,
          max_fee: D(a.maxFee || 0),
          signature: we(t),
          sender_address: n,
          nonce: D(a.nonce)
        }
      });
    else if ($e(e) && Ue(a))
      i = this.fetchEndpoint("starknet_addDeclareTransaction", {
        declare_transaction: {
          type: se.ETransactionType.DECLARE,
          sender_address: n,
          compiled_class_hash: r || "",
          version: se.ETransactionVersion.V3,
          signature: we(t),
          nonce: D(a.nonce),
          contract_class: {
            sierra_program: yn(e.sierra_program),
            contract_class_version: e.contract_class_version,
            entry_points_by_type: e.entry_points_by_type,
            abi: e.abi
          },
          resource_bounds: a.resourceBounds,
          tip: D(a.tip),
          paymaster_data: a.paymasterData.map((o) => D(o)),
          account_deployment_data: a.accountDeploymentData.map((o) => D(o)),
          nonce_data_availability_mode: a.nonceDataAvailabilityMode,
          fee_data_availability_mode: a.feeDataAvailabilityMode
        }
      });
    else
      throw Error("declare unspotted parameters");
    return this.waitMode ? this.waitForTransaction((await i).transaction_hash) : i;
  }
  async deployAccount({ classHash: e, constructorCalldata: t, addressSalt: n, signature: r }, a) {
    let i;
    return Ue(a) ? i = this.fetchEndpoint("starknet_addDeployAccountTransaction", {
      deploy_account_transaction: {
        type: se.ETransactionType.DEPLOY_ACCOUNT,
        version: se.ETransactionVersion.V3,
        signature: we(r),
        nonce: D(a.nonce),
        contract_address_salt: D(n || 0),
        constructor_calldata: te.toHex(t || []),
        class_hash: D(e),
        resource_bounds: a.resourceBounds,
        tip: D(a.tip),
        paymaster_data: a.paymasterData.map((o) => D(o)),
        nonce_data_availability_mode: a.nonceDataAvailabilityMode,
        fee_data_availability_mode: a.feeDataAvailabilityMode
      }
    }) : i = this.fetchEndpoint("starknet_addDeployAccountTransaction", {
      deploy_account_transaction: {
        constructor_calldata: te.toHex(t || []),
        class_hash: D(e),
        contract_address_salt: D(n || 0),
        type: se.ETransactionType.DEPLOY_ACCOUNT,
        max_fee: D(a.maxFee || 0),
        version: se.ETransactionVersion.V1,
        signature: we(r),
        nonce: D(a.nonce)
      }
    }), this.waitMode ? this.waitForTransaction((await i).transaction_hash) : i;
  }
  callContract(e, t = this.blockIdentifier) {
    const n = new G(t).identifier;
    return this.fetchEndpoint("starknet_call", {
      request: {
        contract_address: e.contractAddress,
        entry_point_selector: be(e.entrypoint),
        calldata: te.toHex(e.calldata)
      },
      block_id: n
    });
  }
  /**
   * NEW: Estimate the fee for a message from L1
   * @param message Message From L1
   */
  estimateMessageFee(e, t = this.blockIdentifier) {
    const { from_address: n, to_address: r, entry_point_selector: a, payload: i } = e, o = {
      from_address: Gs(n),
      to_address: D(r),
      entry_point_selector: fi(a),
      payload: Ps(i)
    }, s = new G(t).identifier;
    return this.fetchEndpoint("starknet_estimateMessageFee", {
      message: o,
      block_id: s
    });
  }
  /**
   * Returns an object about the sync status, or false if the node is not synching
   * @returns Object with the stats data
   */
  getSyncingStats() {
    return this.fetchEndpoint("starknet_syncing");
  }
  /**
   * Returns all events matching the given filter
   * @returns events and the pagination of the events
   */
  getEvents(e) {
    return this.fetchEndpoint("starknet_getEvents", { filter: e });
  }
  buildTransaction(e, t) {
    const n = ec(t);
    let r;
    if (Ue(e) ? r = {
      signature: we(e.signature),
      nonce: D(e.nonce),
      resource_bounds: e.resourceBounds,
      tip: D(e.tip),
      paymaster_data: e.paymasterData.map((a) => D(a)),
      nonce_data_availability_mode: e.nonceDataAvailabilityMode,
      fee_data_availability_mode: e.feeDataAvailabilityMode,
      account_deployment_data: e.accountDeploymentData.map((a) => D(a))
    } : r = {
      signature: we(e.signature),
      nonce: D(e.nonce),
      max_fee: D(e.maxFee || 0)
    }, e.type === "INVOKE_FUNCTION")
      return {
        // v0 v1 v3
        type: se.ETransactionType.INVOKE,
        sender_address: e.contractAddress,
        calldata: te.toHex(e.calldata),
        version: D(e.version || n.v3),
        ...r
      };
    if (e.type === "DECLARE")
      return $e(e.contract) ? {
        // Cairo 1 - v2 v3
        type: e.type,
        contract_class: {
          ...e.contract,
          sierra_program: yn(e.contract.sierra_program)
        },
        compiled_class_hash: e.compiledClassHash || "",
        sender_address: e.senderAddress,
        version: D(e.version || n.v3),
        ...r
      } : {
        type: e.type,
        contract_class: e.contract,
        sender_address: e.senderAddress,
        version: D(e.version || n.v1),
        ...r
      };
    if (e.type === "DEPLOY_ACCOUNT") {
      const { account_deployment_data: a, ...i } = r;
      return {
        type: e.type,
        constructor_calldata: te.toHex(e.constructorCalldata || []),
        class_hash: D(e.classHash),
        contract_address_salt: D(e.addressSalt || 0),
        version: D(e.version || n.v3),
        ...i
      };
    }
    throw Error("RPC buildTransaction received unknown TransactionType");
  }
}, $k = {};
re($k, {
  RpcChannel: () => Wh
});
var no = {
  headers: { "Content-Type": "application/json" },
  blockIdentifier: "pending",
  retries: 200
}, Wh = class {
  // behave like web2 rpc and return when tx is processed
  constructor(e) {
    $(this, "nodeUrl");
    $(this, "headers");
    $(this, "retries");
    $(this, "requestId");
    $(this, "blockIdentifier");
    $(this, "chainId");
    $(this, "specVersion");
    $(this, "transactionRetryIntervalFallback");
    $(this, "waitMode");
    const {
      nodeUrl: t,
      retries: n,
      headers: r,
      blockIdentifier: a,
      chainId: i,
      specVersion: o,
      waitMode: s,
      transactionRetryIntervalFallback: l
    } = e || {};
    Object.values(di).includes(t) ? this.nodeUrl = Vr(t, e == null ? void 0 : e.default) : t ? this.nodeUrl = t : this.nodeUrl = Vr(void 0, e == null ? void 0 : e.default), this.retries = n || no.retries, this.headers = { ...no.headers, ...r }, this.blockIdentifier = a || no.blockIdentifier, this.chainId = i, this.specVersion = o, this.waitMode = s || !1, this.requestId = 0, this.transactionRetryIntervalFallback = l;
  }
  get transactionRetryIntervalDefault() {
    return this.transactionRetryIntervalFallback ?? 5e3;
  }
  setChainId(e) {
    this.chainId = e;
  }
  fetch(e, t, n = 0) {
    const r = {
      id: n,
      jsonrpc: "2.0",
      method: e,
      ...t && { params: t }
    };
    return qh(this.nodeUrl, {
      method: "POST",
      body: Me(r),
      headers: this.headers
    });
  }
  errorHandler(e, t, n, r) {
    if (n) {
      const { code: a, message: i, data: o } = n;
      throw new Lr(
        `RPC: ${e} with params ${Me(t, null, 2)}
 
        ${a}: ${i}: ${Me(o)}`
      );
    }
    if (r instanceof Lr)
      throw r;
    if (r)
      throw Error(r.message);
  }
  async fetchEndpoint(e, t) {
    var n;
    try {
      const r = await this.fetch(e, t, this.requestId += 1), { error: a, result: i } = await r.json();
      return this.errorHandler(e, t, a), i;
    } catch (r) {
      throw this.errorHandler(e, t, (n = r == null ? void 0 : r.response) == null ? void 0 : n.data, r), r;
    }
  }
  async getChainId() {
    return this.chainId ?? (this.chainId = await this.fetchEndpoint("starknet_chainId")), this.chainId;
  }
  async getSpecVersion() {
    return this.specVersion ?? (this.specVersion = await this.fetchEndpoint("starknet_specVersion")), this.specVersion;
  }
  getNonceForAddress(e, t = this.blockIdentifier) {
    const n = D(e), r = new G(t).identifier;
    return this.fetchEndpoint("starknet_getNonce", {
      contract_address: n,
      block_id: r
    });
  }
  /**
   * Get the most recent accepted block hash and number
   */
  getBlockLatestAccepted() {
    return this.fetchEndpoint("starknet_blockHashAndNumber");
  }
  /**
   * Get the most recent accepted block number
   * redundant use getBlockLatestAccepted();
   * @returns Number of the latest block
   */
  getBlockNumber() {
    return this.fetchEndpoint("starknet_blockNumber");
  }
  getBlockWithTxHashes(e = this.blockIdentifier) {
    const t = new G(e).identifier;
    return this.fetchEndpoint("starknet_getBlockWithTxHashes", { block_id: t });
  }
  getBlockWithTxs(e = this.blockIdentifier) {
    const t = new G(e).identifier;
    return this.fetchEndpoint("starknet_getBlockWithTxs", { block_id: t });
  }
  getBlockWithReceipts(e = this.blockIdentifier) {
    const t = new G(e).identifier;
    return this.fetchEndpoint("starknet_getBlockWithReceipts", { block_id: t });
  }
  getBlockStateUpdate(e = this.blockIdentifier) {
    const t = new G(e).identifier;
    return this.fetchEndpoint("starknet_getStateUpdate", { block_id: t });
  }
  getBlockTransactionsTraces(e = this.blockIdentifier) {
    const t = new G(e).identifier;
    return this.fetchEndpoint("starknet_traceBlockTransactions", { block_id: t });
  }
  getBlockTransactionCount(e = this.blockIdentifier) {
    const t = new G(e).identifier;
    return this.fetchEndpoint("starknet_getBlockTransactionCount", { block_id: t });
  }
  getTransactionByHash(e) {
    const t = D(e);
    return this.fetchEndpoint("starknet_getTransactionByHash", {
      transaction_hash: t
    });
  }
  getTransactionByBlockIdAndIndex(e, t) {
    const n = new G(e).identifier;
    return this.fetchEndpoint("starknet_getTransactionByBlockIdAndIndex", { block_id: n, index: t });
  }
  getTransactionReceipt(e) {
    const t = D(e);
    return this.fetchEndpoint("starknet_getTransactionReceipt", { transaction_hash: t });
  }
  getTransactionTrace(e) {
    const t = D(e);
    return this.fetchEndpoint("starknet_traceTransaction", { transaction_hash: t });
  }
  /**
   * Get the status of a transaction
   */
  getTransactionStatus(e) {
    const t = D(e);
    return this.fetchEndpoint("starknet_getTransactionStatus", { transaction_hash: t });
  }
  /**
   * @param invocations AccountInvocations
   * @param simulateTransactionOptions blockIdentifier and flags to skip validation and fee charge<br/>
   * - blockIdentifier<br/>
   * - skipValidate (default false)<br/>
   * - skipFeeCharge (default true)<br/>
   */
  simulateTransaction(e, t = {}) {
    const {
      blockIdentifier: n = this.blockIdentifier,
      skipValidate: r = !0,
      skipFeeCharge: a = !0
    } = t, i = new G(n).identifier, o = [];
    return r && o.push(wr.SKIP_VALIDATE), a && o.push(wr.SKIP_FEE_CHARGE), this.fetchEndpoint("starknet_simulateTransactions", {
      block_id: i,
      transactions: e.map((s) => this.buildTransaction(s)),
      simulation_flags: o
    });
  }
  async waitForTransaction(e, t) {
    const n = D(e);
    let { retries: r } = this, a = !1, i = !1;
    const o = (t == null ? void 0 : t.retryInterval) ?? this.transactionRetryIntervalDefault, s = (t == null ? void 0 : t.errorStates) ?? [
      Ar.REJECTED
      // TODO: commented out to preserve the long-standing behavior of "reverted" not being treated as an error by default
      // should decide which behavior to keep in the future
      // RPC.ETransactionExecutionStatus.REVERTED,
    ], l = (t == null ? void 0 : t.successStates) ?? [
      Mo.SUCCEEDED,
      Ar.ACCEPTED_ON_L2,
      Ar.ACCEPTED_ON_L1
    ];
    let c;
    for (; !a; ) {
      await Wn(o);
      try {
        c = await this.getTransactionStatus(n);
        const d = c.execution_status, h = c.finality_status;
        if (!h)
          throw new Error("waiting for transaction status");
        if (s.includes(d) || s.includes(h)) {
          const f = `${d}: ${h}`, m = new Error(f);
          throw m.response = c, i = !0, m;
        } else (l.includes(d) || l.includes(h)) && (a = !0);
      } catch (d) {
        if (d instanceof Error && i)
          throw d;
        if (r <= 0)
          throw new Error(`waitForTransaction timed-out with retries ${this.retries}`);
      }
      r -= 1;
    }
    let u = null;
    for (; u === null; ) {
      try {
        u = await this.getTransactionReceipt(n);
      } catch {
        if (r <= 0)
          throw new Error(`waitForTransaction timed-out with retries ${this.retries}`);
      }
      r -= 1, await Wn(o);
    }
    return u;
  }
  getStorageAt(e, t, n = this.blockIdentifier) {
    const r = D(e), a = js(t), i = new G(n).identifier;
    return this.fetchEndpoint("starknet_getStorageAt", {
      contract_address: r,
      key: a,
      block_id: i
    });
  }
  getClassHashAt(e, t = this.blockIdentifier) {
    const n = D(e), r = new G(t).identifier;
    return this.fetchEndpoint("starknet_getClassHashAt", {
      block_id: r,
      contract_address: n
    });
  }
  getClass(e, t = this.blockIdentifier) {
    const n = D(e), r = new G(t).identifier;
    return this.fetchEndpoint("starknet_getClass", {
      class_hash: n,
      block_id: r
    });
  }
  getClassAt(e, t = this.blockIdentifier) {
    const n = D(e), r = new G(t).identifier;
    return this.fetchEndpoint("starknet_getClassAt", {
      block_id: r,
      contract_address: n
    });
  }
  async getEstimateFee(e, { blockIdentifier: t = this.blockIdentifier, skipValidate: n = !0 }) {
    const r = new G(t).identifier;
    let a = {};
    return Ws("0.5", await this.getSpecVersion()) || (a = {
      simulation_flags: n ? [wr.SKIP_VALIDATE] : []
    }), this.fetchEndpoint("starknet_estimateFee", {
      request: e.map((i) => this.buildTransaction(i, "fee")),
      block_id: r,
      ...a
    });
  }
  async invoke(e, t) {
    let n;
    return Ue(t) ? n = this.fetchEndpoint("starknet_addInvokeTransaction", {
      invoke_transaction: {
        type: ht.INVOKE,
        sender_address: e.contractAddress,
        calldata: te.toHex(e.calldata),
        version: It.V3,
        signature: we(e.signature),
        nonce: D(t.nonce),
        resource_bounds: t.resourceBounds,
        tip: D(t.tip),
        paymaster_data: t.paymasterData.map((r) => D(r)),
        account_deployment_data: t.accountDeploymentData.map((r) => D(r)),
        nonce_data_availability_mode: t.nonceDataAvailabilityMode,
        fee_data_availability_mode: t.feeDataAvailabilityMode
      }
    }) : n = this.fetchEndpoint("starknet_addInvokeTransaction", {
      invoke_transaction: {
        sender_address: e.contractAddress,
        calldata: te.toHex(e.calldata),
        type: ht.INVOKE,
        max_fee: D(t.maxFee || 0),
        version: It.V1,
        signature: we(e.signature),
        nonce: D(t.nonce)
      }
    }), this.waitMode ? this.waitForTransaction((await n).transaction_hash) : n;
  }
  async declare({ contract: e, signature: t, senderAddress: n, compiledClassHash: r }, a) {
    let i;
    if (!$e(e) && !Ue(a))
      i = this.fetchEndpoint("starknet_addDeclareTransaction", {
        declare_transaction: {
          type: ht.DECLARE,
          contract_class: {
            program: e.program,
            entry_points_by_type: e.entry_points_by_type,
            abi: e.abi
          },
          version: It.V1,
          max_fee: D(a.maxFee || 0),
          signature: we(t),
          sender_address: n,
          nonce: D(a.nonce)
        }
      });
    else if ($e(e) && !Ue(a))
      i = this.fetchEndpoint("starknet_addDeclareTransaction", {
        declare_transaction: {
          type: ht.DECLARE,
          contract_class: {
            sierra_program: yn(e.sierra_program),
            contract_class_version: e.contract_class_version,
            entry_points_by_type: e.entry_points_by_type,
            abi: e.abi
          },
          compiled_class_hash: r || "",
          version: It.V2,
          max_fee: D(a.maxFee || 0),
          signature: we(t),
          sender_address: n,
          nonce: D(a.nonce)
        }
      });
    else if ($e(e) && Ue(a))
      i = this.fetchEndpoint("starknet_addDeclareTransaction", {
        declare_transaction: {
          type: ht.DECLARE,
          sender_address: n,
          compiled_class_hash: r || "",
          version: It.V3,
          signature: we(t),
          nonce: D(a.nonce),
          contract_class: {
            sierra_program: yn(e.sierra_program),
            contract_class_version: e.contract_class_version,
            entry_points_by_type: e.entry_points_by_type,
            abi: e.abi
          },
          resource_bounds: a.resourceBounds,
          tip: D(a.tip),
          paymaster_data: a.paymasterData.map((o) => D(o)),
          account_deployment_data: a.accountDeploymentData.map((o) => D(o)),
          nonce_data_availability_mode: a.nonceDataAvailabilityMode,
          fee_data_availability_mode: a.feeDataAvailabilityMode
        }
      });
    else
      throw Error("declare unspotted parameters");
    return this.waitMode ? this.waitForTransaction((await i).transaction_hash) : i;
  }
  async deployAccount({ classHash: e, constructorCalldata: t, addressSalt: n, signature: r }, a) {
    let i;
    return Ue(a) ? i = this.fetchEndpoint("starknet_addDeployAccountTransaction", {
      deploy_account_transaction: {
        type: ht.DEPLOY_ACCOUNT,
        version: It.V3,
        signature: we(r),
        nonce: D(a.nonce),
        contract_address_salt: D(n || 0),
        constructor_calldata: te.toHex(t || []),
        class_hash: D(e),
        resource_bounds: a.resourceBounds,
        tip: D(a.tip),
        paymaster_data: a.paymasterData.map((o) => D(o)),
        nonce_data_availability_mode: a.nonceDataAvailabilityMode,
        fee_data_availability_mode: a.feeDataAvailabilityMode
      }
    }) : i = this.fetchEndpoint("starknet_addDeployAccountTransaction", {
      deploy_account_transaction: {
        constructor_calldata: te.toHex(t || []),
        class_hash: D(e),
        contract_address_salt: D(n || 0),
        type: ht.DEPLOY_ACCOUNT,
        max_fee: D(a.maxFee || 0),
        version: It.V1,
        signature: we(r),
        nonce: D(a.nonce)
      }
    }), this.waitMode ? this.waitForTransaction((await i).transaction_hash) : i;
  }
  callContract(e, t = this.blockIdentifier) {
    const n = new G(t).identifier;
    return this.fetchEndpoint("starknet_call", {
      request: {
        contract_address: e.contractAddress,
        entry_point_selector: be(e.entrypoint),
        calldata: te.toHex(e.calldata)
      },
      block_id: n
    });
  }
  /**
   * NEW: Estimate the fee for a message from L1
   * @param message Message From L1
   */
  estimateMessageFee(e, t = this.blockIdentifier) {
    const { from_address: n, to_address: r, entry_point_selector: a, payload: i } = e, o = {
      from_address: Gs(n),
      to_address: D(r),
      entry_point_selector: fi(a),
      payload: Ps(i)
    }, s = new G(t).identifier;
    return this.fetchEndpoint("starknet_estimateMessageFee", {
      message: o,
      block_id: s
    });
  }
  /**
   * Returns an object about the sync status, or false if the node is not synching
   * @returns Object with the stats data
   */
  getSyncingStats() {
    return this.fetchEndpoint("starknet_syncing");
  }
  /**
   * Returns all events matching the given filter
   * @returns events and the pagination of the events
   */
  getEvents(e) {
    return this.fetchEndpoint("starknet_getEvents", { filter: e });
  }
  buildTransaction(e, t) {
    const n = ec(t);
    let r;
    if (Ue(e) ? r = {
      signature: we(e.signature),
      nonce: D(e.nonce),
      resource_bounds: e.resourceBounds,
      tip: D(e.tip),
      paymaster_data: e.paymasterData.map((a) => D(a)),
      nonce_data_availability_mode: e.nonceDataAvailabilityMode,
      fee_data_availability_mode: e.feeDataAvailabilityMode,
      account_deployment_data: e.accountDeploymentData.map((a) => D(a))
    } : r = {
      signature: we(e.signature),
      nonce: D(e.nonce),
      max_fee: D(e.maxFee || 0)
    }, e.type === "INVOKE_FUNCTION")
      return {
        // v0 v1 v3
        type: ht.INVOKE,
        sender_address: e.contractAddress,
        calldata: te.toHex(e.calldata),
        version: D(e.version || n.v3),
        ...r
      };
    if (e.type === "DECLARE")
      return $e(e.contract) ? {
        // Cairo 1 - v2 v3
        type: e.type,
        contract_class: {
          ...e.contract,
          sierra_program: yn(e.contract.sierra_program)
        },
        compiled_class_hash: e.compiledClassHash || "",
        sender_address: e.senderAddress,
        version: D(e.version || n.v3),
        ...r
      } : {
        type: e.type,
        contract_class: e.contract,
        sender_address: e.senderAddress,
        version: D(e.version || n.v1),
        ...r
      };
    if (e.type === "DEPLOY_ACCOUNT") {
      const { account_deployment_data: a, ...i } = r;
      return {
        type: e.type,
        constructor_calldata: te.toHex(e.constructorCalldata || []),
        class_hash: D(e.classHash),
        contract_address_salt: D(e.addressSalt || 0),
        version: D(e.version || n.v3),
        ...i
      };
    }
    throw Error("RPC buildTransaction received unknown TransactionType");
  }
}, iu = class {
  constructor(e) {
    $(this, "margin");
    this.margin = e;
  }
  estimatedFeeToMaxFee(e) {
    var t;
    return Fh(e, (t = this.margin) == null ? void 0 : t.maxFee);
  }
  estimateFeeToBounds(e) {
    var t, n;
    return Ur(
      e,
      (t = this.margin) == null ? void 0 : t.l1BoundMaxAmount,
      (n = this.margin) == null ? void 0 : n.l1BoundMaxPricePerUnit
    );
  }
  parseGetBlockResponse(e) {
    return { status: "PENDING", ...e };
  }
  parseTransactionReceipt(e) {
    return "actual_fee" in e && me(e.actual_fee) ? {
      ...e,
      actual_fee: {
        amount: e.actual_fee,
        unit: "FRI"
      }
    } : e;
  }
  parseFeeEstimateResponse(e) {
    const t = e[0];
    return {
      overall_fee: Y(t.overall_fee),
      gas_consumed: Y(t.gas_consumed),
      gas_price: Y(t.gas_price),
      unit: t.unit,
      suggestedMaxFee: this.estimatedFeeToMaxFee(t.overall_fee),
      resourceBounds: this.estimateFeeToBounds(t),
      data_gas_consumed: t.data_gas_consumed ? Y(t.data_gas_consumed) : 0n,
      data_gas_price: t.data_gas_price ? Y(t.data_gas_price) : 0n
    };
  }
  parseFeeEstimateBulkResponse(e) {
    return e.map((t) => ({
      overall_fee: Y(t.overall_fee),
      gas_consumed: Y(t.gas_consumed),
      gas_price: Y(t.gas_price),
      unit: t.unit,
      suggestedMaxFee: this.estimatedFeeToMaxFee(t.overall_fee),
      resourceBounds: this.estimateFeeToBounds(t),
      data_gas_consumed: t.data_gas_consumed ? Y(t.data_gas_consumed) : 0n,
      data_gas_price: t.data_gas_price ? Y(t.data_gas_price) : 0n
    }));
  }
  parseSimulateTransactionResponse(e) {
    return e.map((t) => ({
      ...t,
      suggestedMaxFee: this.estimatedFeeToMaxFee(t.fee_estimation.overall_fee),
      resourceBounds: this.estimateFeeToBounds(t.fee_estimation)
    }));
  }
  parseContractClassResponse(e) {
    return {
      ...e,
      abi: me(e.abi) ? JSON.parse(e.abi) : e.abi
    };
  }
  parseL1GasPriceResponse(e) {
    return e.l1_gas_price.price_in_wei;
  }
}, ou = class Na {
  constructor(t) {
    $(this, "statusReceipt");
    $(this, "value");
    [this.statusReceipt, this.value] = Na.isSuccess(t) ? ["success", t] : Na.isReverted(t) ? ["reverted", t] : Na.isRejected(t) ? ["rejected", t] : ["error", new Error("Unknown response type")];
    for (const [n] of Object.entries(this))
      Object.defineProperty(this, n, {
        enumerable: !1
      });
    for (const [n, r] of Object.entries(t))
      Object.defineProperty(this, n, {
        enumerable: !0,
        writable: !1,
        value: r
      });
  }
  match(t) {
    return this.statusReceipt in t ? t[this.statusReceipt](this.value) : t._();
  }
  isSuccess() {
    return this.statusReceipt === "success";
  }
  isReverted() {
    return this.statusReceipt === "reverted";
  }
  isRejected() {
    return this.statusReceipt === "rejected";
  }
  isError() {
    return this.statusReceipt === "error";
  }
  static isSuccess(t) {
    return t.execution_status === "SUCCEEDED";
  }
  static isReverted(t) {
    return t.execution_status === "REVERTED";
  }
  static isRejected(t) {
    return t.status === "REJECTED";
  }
}, Yh = class {
  constructor(e) {
    $(this, "responseParser");
    $(this, "channel");
    $(this, "getStateUpdate", this.getBlockStateUpdate);
    e && "channel" in e ? (this.channel = e.channel, this.responseParser = "responseParser" in e ? e.responseParser : new iu()) : (this.channel = new Wh({ ...e, waitMode: !1 }), this.responseParser = new iu(e == null ? void 0 : e.feeMarginPercentage));
  }
  fetch(e, t, n = 0) {
    return this.channel.fetch(e, t, n);
  }
  async getChainId() {
    return this.channel.getChainId();
  }
  async getSpecVersion() {
    return this.channel.getSpecVersion();
  }
  async getNonceForAddress(e, t) {
    return this.channel.getNonceForAddress(e, t);
  }
  async getBlock(e) {
    return this.channel.getBlockWithTxHashes(e).then(this.responseParser.parseGetBlockResponse);
  }
  /**
   * Get the most recent accepted block hash and number
   */
  async getBlockLatestAccepted() {
    return this.channel.getBlockLatestAccepted();
  }
  /**
   * Get the most recent accepted block number
   * redundant use getBlockLatestAccepted();
   * @returns Number of the latest block
   */
  async getBlockNumber() {
    return this.channel.getBlockNumber();
  }
  async getBlockWithTxHashes(e) {
    return this.channel.getBlockWithTxHashes(e);
  }
  async getBlockWithTxs(e) {
    return this.channel.getBlockWithTxs(e);
  }
  /**
   * Pause the execution of the script until a specified block is created.
   * @param {BlockIdentifier} blockIdentifier bloc number (BigNumberisk) or 'pending' or 'latest'.
   * Use of 'latest" or of a block already created will generate no pause.
   * @param {number} [retryInterval] number of milliseconds between 2 requests to the node
   * @example
   * ```typescript
   * await myProvider.waitForBlock();
   * // wait the creation of the pending block
   * ```
   */
  async waitForBlock(e = "pending", t = 5e3) {
    if (e === "latest")
      return;
    const n = await this.getBlockNumber(), r = e === "pending" ? n + 1 : Number(D(e));
    if (r <= n)
      return;
    const { retries: a } = this.channel;
    let i = a, o = !1;
    for (; !o; )
      if (await this.getBlockNumber() === r ? o = !0 : await Wn(t), i -= 1, i <= 0)
        throw new Error(`waitForBlock() timed-out after ${a} tries.`);
  }
  async getL1GasPrice(e) {
    return this.channel.getBlockWithTxHashes(e).then(this.responseParser.parseL1GasPriceResponse);
  }
  async getL1MessageHash(e) {
    const t = await this.channel.getTransactionByHash(e);
    Z(t.type === "L1_HANDLER", "This L2 transaction is not a L1 message.");
    const { calldata: n, contract_address: r, entry_point_selector: a, nonce: i } = t, o = [
      n[0],
      r,
      i,
      a,
      n.length - 1,
      ...n.slice(1)
    ], s = ne(
      o.reduce(
        (l, c) => l + qe(D(c)).padStart(64, "0"),
        ""
      )
    );
    return ne(wn(Cm(zs(s))));
  }
  async getBlockWithReceipts(e) {
    if (this.channel instanceof th.RpcChannel)
      throw new Lr("Unsupported method for RPC version");
    return this.channel.getBlockWithReceipts(e);
  }
  async getBlockStateUpdate(e) {
    return this.channel.getBlockStateUpdate(e);
  }
  async getBlockTransactionsTraces(e) {
    return this.channel.getBlockTransactionsTraces(e);
  }
  async getBlockTransactionCount(e) {
    return this.channel.getBlockTransactionCount(e);
  }
  /**
   * Return transactions from pending block
   * @deprecated Instead use getBlock(BlockTag.PENDING); (will be removed in next minor version)
   * Utility method, same result can be achieved using getBlockWithTxHashes(BlockTag.pending);
   */
  async getPendingTransactions() {
    const { transactions: e } = await this.getBlockWithTxHashes(
      "pending"
      /* PENDING */
    ).then(
      this.responseParser.parseGetBlockResponse
    );
    return Promise.all(e.map((t) => this.getTransactionByHash(t)));
  }
  async getTransaction(e) {
    return this.channel.getTransactionByHash(e);
  }
  async getTransactionByHash(e) {
    return this.channel.getTransactionByHash(e);
  }
  async getTransactionByBlockIdAndIndex(e, t) {
    return this.channel.getTransactionByBlockIdAndIndex(e, t);
  }
  async getTransactionReceipt(e) {
    const t = await this.channel.getTransactionReceipt(e), n = this.responseParser.parseTransactionReceipt(t);
    return new ou(n);
  }
  async getTransactionTrace(e) {
    return this.channel.getTransactionTrace(e);
  }
  /**
   * Get the status of a transaction
   */
  async getTransactionStatus(e) {
    return this.channel.getTransactionStatus(e);
  }
  /**
   * @param invocations AccountInvocations
   * @param options blockIdentifier and flags to skip validation and fee charge<br/>
   * - blockIdentifier<br/>
   * - skipValidate (default false)<br/>
   * - skipFeeCharge (default true)<br/>
   */
  async getSimulateTransaction(e, t) {
    return this.channel.simulateTransaction(e, t).then((n) => this.responseParser.parseSimulateTransactionResponse(n));
  }
  async waitForTransaction(e, t) {
    const n = await this.channel.waitForTransaction(
      e,
      t
    );
    return new ou(n);
  }
  async getStorageAt(e, t, n) {
    return this.channel.getStorageAt(e, t, n);
  }
  async getClassHashAt(e, t) {
    return this.channel.getClassHashAt(e, t);
  }
  async getClassByHash(e) {
    return this.getClass(e);
  }
  async getClass(e, t) {
    return this.channel.getClass(e, t).then(this.responseParser.parseContractClassResponse);
  }
  async getClassAt(e, t) {
    return this.channel.getClassAt(e, t).then(this.responseParser.parseContractClassResponse);
  }
  async getContractVersion(e, t, {
    blockIdentifier: n = this.channel.blockIdentifier,
    compiler: r = !0
  } = {}) {
    let a;
    if (e)
      a = await this.getClassAt(e, n);
    else if (t)
      a = await this.getClass(t, n);
    else
      throw Error("getContractVersion require contractAddress or classHash");
    return $e(a) ? r ? { cairo: "1", compiler: Zs(a.abi).compiler } : { cairo: "1", compiler: void 0 } : { cairo: "0", compiler: "0" };
  }
  /**
   * @deprecated use get*type*EstimateFee (will be refactored based on type after sequencer deprecation)
   */
  async getEstimateFee(e, t, n, r) {
    return this.getInvokeEstimateFee(e, t, n, r);
  }
  async getInvokeEstimateFee(e, t, n, r) {
    return this.channel.getEstimateFee(
      [
        {
          type: "INVOKE_FUNCTION",
          ...e,
          ...t
        }
      ],
      { blockIdentifier: n, skipValidate: r }
    ).then((a) => this.responseParser.parseFeeEstimateResponse(a));
  }
  async getDeclareEstimateFee(e, t, n, r) {
    return this.channel.getEstimateFee(
      [
        {
          type: "DECLARE",
          ...e,
          ...t
        }
      ],
      { blockIdentifier: n, skipValidate: r }
    ).then((a) => this.responseParser.parseFeeEstimateResponse(a));
  }
  async getDeployAccountEstimateFee(e, t, n, r) {
    return this.channel.getEstimateFee(
      [
        {
          type: "DEPLOY_ACCOUNT",
          ...e,
          ...t
        }
      ],
      { blockIdentifier: n, skipValidate: r }
    ).then((a) => this.responseParser.parseFeeEstimateResponse(a));
  }
  async getEstimateFeeBulk(e, t) {
    return this.channel.getEstimateFee(e, t).then((n) => this.responseParser.parseFeeEstimateBulkResponse(n));
  }
  async invokeFunction(e, t) {
    return this.channel.invoke(e, t);
  }
  async declareContract(e, t) {
    return this.channel.declare(e, t);
  }
  async deployAccountContract(e, t) {
    return this.channel.deployAccount(
      e,
      t
    );
  }
  async callContract(e, t) {
    return this.channel.callContract(e, t);
  }
  /**
   * NEW: Estimate the fee for a message from L1
   * @param message Message From L1
   */
  async estimateMessageFee(e, t) {
    return this.channel.estimateMessageFee(e, t);
  }
  /**
   * Returns an object about the sync status, or false if the node is not synching
   * @returns Object with the stats data
   */
  async getSyncingStats() {
    return this.channel.getSyncingStats();
  }
  /**
   * Returns all events matching the given filter
   * @returns events and the pagination of the events
   */
  async getEvents(e) {
    return this.channel.getEvents(e);
  }
}, Mk = {};
re(Mk, {
  StarknetIdContract: () => eg,
  StarknetIdIdentityContract: () => tg,
  StarknetIdMulticallContract: () => Ro,
  StarknetIdPfpContract: () => og,
  StarknetIdPopContract: () => cg,
  StarknetIdVerifierContract: () => ag,
  dynamicCallData: () => X,
  dynamicFelt: () => Ie,
  execution: () => ft,
  getStarknetIdContract: () => za,
  getStarknetIdIdentityContract: () => ng,
  getStarknetIdMulticallContract: () => rg,
  getStarknetIdPfpContract: () => sg,
  getStarknetIdPopContract: () => lg,
  getStarknetIdVerifierContract: () => ig,
  useDecoded: () => zo,
  useEncoded: () => Qh
});
var yt = "abcdefghijklmnopqrstuvwxyz0123456789-", Ln = BigInt(yt.length + 1), _e = "这来", su = BigInt(yt.length), Po = BigInt(_e.length), cu = BigInt(_e.length + 1);
function No(e) {
  let t = 0;
  for (; e.endsWith(_e[_e.length - 1]); )
    e = e.substring(0, e.length - 1), t += 1;
  return [e, t];
}
function zo(e) {
  let t = "";
  return e.forEach((n) => {
    for (; n !== ye; ) {
      const i = n % Ln;
      if (n /= Ln, i === BigInt(yt.length)) {
        const o = n / cu;
        if (o === ye) {
          const s = n % cu;
          n = o, s === ye ? t += yt[0] : t += _e[Number(s) - 1];
        } else {
          const s = n % Po;
          t += _e[Number(s)], n /= Po;
        }
      } else
        t += yt[Number(i)];
    }
    const [r, a] = No(t);
    a && (t = r + (a % 2 === 0 ? _e[_e.length - 1].repeat(a / 2 - 1) + _e[0] + yt[1] : _e[_e.length - 1].repeat((a - 1) / 2 + 1))), t += ".";
  }), t && t.concat("stark");
}
function Qh(e) {
  let t = BigInt(0), n = BigInt(1);
  if (e.endsWith(_e[0] + yt[1])) {
    const [r, a] = No(e.substring(0, e.length - 2));
    e = r + _e[_e.length - 1].repeat(2 * (a + 1));
  } else {
    const [r, a] = No(e);
    a && (e = r + _e[_e.length - 1].repeat(1 + 2 * (a - 1)));
  }
  for (let r = 0; r < e.length; r += 1) {
    const a = e[r], i = yt.indexOf(a), o = BigInt(yt.indexOf(a));
    if (i !== -1)
      r === e.length - 1 && e[r] === yt[0] ? (t += n * su, n *= Ln, n *= Ln) : (t += n * o, n *= Ln);
    else if (_e.indexOf(a) !== -1) {
      t += n * su, n *= Ln;
      const s = (r === e.length - 1 ? 1 : 0) + _e.indexOf(a);
      t += n * BigInt(s), n *= Po;
    }
  }
  return t;
}
var eg = /* @__PURE__ */ ((e) => (e.MAINNET = "0x6ac597f8116f886fa1c97a23fa4e08299975ecaf6b598873ca6792b9bbfb678", e.TESTNET_SEPOLIA = "0x154bc2e1af9260b9e66af0e9c46fc757ff893b3ff6a85718a810baf1474", e))(eg || {});
function za(e) {
  switch (e) {
    case "0x534e5f4d41494e":
      return "0x6ac597f8116f886fa1c97a23fa4e08299975ecaf6b598873ca6792b9bbfb678";
    case "0x534e5f5345504f4c4941":
      return "0x154bc2e1af9260b9e66af0e9c46fc757ff893b3ff6a85718a810baf1474";
    default:
      throw new Error("Starknet.id is not yet deployed on this network");
  }
}
var tg = /* @__PURE__ */ ((e) => (e.MAINNET = "0x05dbdedc203e92749e2e746e2d40a768d966bd243df04a6b712e222bc040a9af", e.TESTNET_SEPOLIA = "0x3697660a0981d734780731949ecb2b4a38d6a58fc41629ed611e8defda", e))(tg || {});
function ng(e) {
  switch (e) {
    case "0x534e5f4d41494e":
      return "0x05dbdedc203e92749e2e746e2d40a768d966bd243df04a6b712e222bc040a9af";
    case "0x534e5f5345504f4c4941":
      return "0x3697660a0981d734780731949ecb2b4a38d6a58fc41629ed611e8defda";
    default:
      throw new Error("Starknet.id verifier contract is not yet deployed on this network");
  }
}
var Ro = "0x034ffb8f4452df7a613a0210824d6414dbadcddce6c6e19bf4ddc9e22ce5f970";
function rg(e) {
  switch (e) {
    case "0x534e5f4d41494e":
      return Ro;
    case "0x534e5f5345504f4c4941":
      return Ro;
    default:
      throw new Error("Starknet.id multicall contract is not yet deployed on this network");
  }
}
var ag = /* @__PURE__ */ ((e) => (e.MAINNET = "0x07d14dfd8ee95b41fce179170d88ba1f0d5a512e13aeb232f19cfeec0a88f8bf", e.TESTNET_SEPOLIA = "0x60B94fEDe525f815AE5E8377A463e121C787cCCf3a36358Aa9B18c12c4D566", e))(ag || {});
function ig(e) {
  switch (e) {
    case "0x534e5f4d41494e":
      return "0x07d14dfd8ee95b41fce179170d88ba1f0d5a512e13aeb232f19cfeec0a88f8bf";
    case "0x534e5f5345504f4c4941":
      return "0x60B94fEDe525f815AE5E8377A463e121C787cCCf3a36358Aa9B18c12c4D566";
    default:
      throw new Error("Starknet.id verifier contract is not yet deployed on this network");
  }
}
var og = /* @__PURE__ */ ((e) => (e.MAINNET = "0x070aaa20ec4a46da57c932d9fd89ca5e6bb9ca3188d3df361a32306aff7d59c7", e.TESTNET_SEPOLIA = "0x9e7bdb8dabd02ea8cfc23b1d1c5278e46490f193f87516ed5ff2dfec02", e))(og || {});
function sg(e) {
  switch (e) {
    case "0x534e5f4d41494e":
      return "0x070aaa20ec4a46da57c932d9fd89ca5e6bb9ca3188d3df361a32306aff7d59c7";
    case "0x534e5f5345504f4c4941":
      return "0x9e7bdb8dabd02ea8cfc23b1d1c5278e46490f193f87516ed5ff2dfec02";
    default:
      throw new Error(
        "Starknet.id profile picture verifier contract is not yet deployed on this network"
      );
  }
}
var cg = /* @__PURE__ */ ((e) => (e.MAINNET = "0x0293eb2ba9862f762bd3036586d5755a782bd22e6f5028320f1d0405fd47bff4", e.TESTNET_SEPOLIA = "0x15ae88ae054caa74090b89025c1595683f12edf7a4ed2ad0274de3e1d4a", e))(cg || {});
function lg(e) {
  switch (e) {
    case "0x534e5f4d41494e":
      return "0x0293eb2ba9862f762bd3036586d5755a782bd22e6f5028320f1d0405fd47bff4";
    case "0x534e5f5345504f4c4941":
      return "0x15ae88ae054caa74090b89025c1595683f12edf7a4ed2ad0274de3e1d4a";
    default:
      throw new Error(
        "Starknet.id proof of personhood verifier contract is not yet deployed on this network"
      );
  }
}
function ft(e, t = void 0, n = void 0) {
  return new aa({
    Static: e,
    IfEqual: t ? Gn(t[0], t[1], t[2]) : void 0,
    IfNotEqual: n ? Gn(n[0], n[1], n[2]) : void 0
  });
}
function Ie(e, t = void 0) {
  return new aa({
    Hardcoded: e,
    Reference: t ? Gn(t[0], t[1]) : void 0
  });
}
function X(e, t = void 0, n = void 0) {
  return new aa({
    Hardcoded: e,
    Reference: t ? Gn(t[0], t[1]) : void 0,
    ArrayReference: n ? Gn(n[0], n[1]) : void 0
  });
}
var Hk = class Ra {
  async getStarkName(t, n) {
    return Ra.getStarkName(
      // After Mixin, this is ProviderInterface
      this,
      t,
      n
    );
  }
  async getAddressFromStarkName(t, n) {
    return Ra.getAddressFromStarkName(
      // After Mixin, this is ProviderInterface
      this,
      t,
      n
    );
  }
  async getStarkProfile(t, n, r, a, i, o, s) {
    return Ra.getStarkProfile(
      // After Mixin, this is ProviderInterface
      this,
      t,
      n,
      r,
      a,
      i,
      o,
      s
    );
  }
  static async getStarkName(t, n, r) {
    const a = await t.getChainId(), i = r ?? za(a);
    try {
      const s = (await t.callContract({
        contractAddress: i,
        entrypoint: "address_to_domain",
        calldata: te.compile({
          address: n,
          hint: []
        })
      })).map((c) => BigInt(c)).slice(1), l = zo(s);
      if (!l)
        throw Error("Starkname not found");
      return l;
    } catch (o) {
      throw o instanceof Error && o.message === "Starkname not found" ? o : Error("Could not get stark name");
    }
  }
  static async getAddressFromStarkName(t, n, r) {
    const a = await t.getChainId(), i = r ?? za(a);
    try {
      const o = n.replace(".stark", "").split(".").map((l) => Qh(l).toString(10));
      return (await t.callContract({
        contractAddress: i,
        entrypoint: "domain_to_address",
        calldata: te.compile({ domain: o, hint: [] })
      }))[0];
    } catch {
      throw Error("Could not get address from stark name");
    }
  }
  static async getStarkProfile(t, n, r, a, i, o, s, l) {
    const c = await t.getChainId(), u = r ?? za(c), d = a ?? ng(c), h = i ?? ig(c), f = o ?? sg(c), m = s ?? lg(c), g = l ?? rg(c);
    try {
      const p = [
        {
          execution: ft({}),
          to: X(u),
          selector: X(be("address_to_domain")),
          calldata: [X(n), X("0")]
        },
        {
          execution: ft({}),
          to: Ie(u),
          selector: Ie(be("domain_to_id")),
          calldata: [X(void 0, void 0, [0, 0])]
        },
        {
          execution: ft({}),
          to: Ie(d),
          selector: Ie(be("get_verifier_data")),
          calldata: [
            X(void 0, [1, 0]),
            X(xe("twitter")),
            X(h),
            X("0")
          ]
        },
        {
          execution: ft({}),
          to: Ie(d),
          selector: Ie(be("get_verifier_data")),
          calldata: [
            X(void 0, [1, 0]),
            X(xe("github")),
            X(h),
            X("0")
          ]
        },
        {
          execution: ft({}),
          to: Ie(d),
          selector: Ie(be("get_verifier_data")),
          calldata: [
            X(void 0, [1, 0]),
            X(xe("discord")),
            X(h),
            X("0")
          ]
        },
        {
          execution: ft({}),
          to: Ie(d),
          selector: Ie(be("get_verifier_data")),
          calldata: [
            X(void 0, [1, 0]),
            X(xe("proof_of_personhood")),
            X(m),
            X("0")
          ]
        },
        // PFP
        {
          execution: ft({}),
          to: Ie(d),
          selector: Ie(be("get_verifier_data")),
          calldata: [
            X(void 0, [1, 0]),
            X(xe("nft_pp_contract")),
            X(f),
            X("0")
          ]
        },
        {
          execution: ft({}),
          to: Ie(d),
          selector: Ie(be("get_extended_verifier_data")),
          calldata: [
            X(void 0, [1, 0]),
            X(xe("nft_pp_id")),
            X("2"),
            X(f),
            X("0")
          ]
        },
        {
          execution: ft(void 0, void 0, [6, 0, 0]),
          to: Ie(void 0, [6, 0]),
          selector: Ie(be("tokenURI")),
          calldata: [X(void 0, [7, 1]), X(void 0, [7, 2])]
        }
      ], b = await t.callContract({
        contractAddress: g,
        entrypoint: "aggregate",
        calldata: te.compile({
          calls: p
        })
      });
      if (Array.isArray(b)) {
        const _ = parseInt(b[0], 16), k = [];
        let y = 1;
        for (let T = 0; T < _ && y < b.length; T += 1) {
          const C = parseInt(b[y], 16);
          y += 1;
          const O = b.slice(y, y + C);
          k.push(O), y += C;
        }
        const S = zo(k[0].slice(1).map((T) => BigInt(T))), x = k[2][0] !== "0x0" ? BigInt(k[2][0]).toString() : void 0, v = k[3][0] !== "0x0" ? BigInt(k[3][0]).toString() : void 0, B = k[4][0] !== "0x0" ? BigInt(k[4][0]).toString() : void 0, N = k[5][0] === "0x1", w = (b[0] === "0x9" ? k[8].slice(1).map((T) => Sn(T)).join("") : void 0) || `https://starknet.id/api/identicons/${BigInt(k[1][0]).toString()}`;
        return {
          name: S,
          twitter: x,
          github: v,
          discord: B,
          proofOfPersonhood: N,
          profilePicture: w
        };
      }
      throw Error("Error while calling aggregate function");
    } catch (p) {
      throw p instanceof Error ? p : Error("Could not get user stark profile data from address");
    }
  }
}, Uk = class extends o1(Yh, Hk) {
};
new Yh({ default: !0 });
var Vk = {};
re(Vk, {
  TypedDataRevision: () => ee,
  encodeData: () => pg,
  encodeType: () => gg,
  encodeValue: () => Er,
  getDependencies: () => nc,
  getMessageHash: () => rc,
  getStructHash: () => Fr,
  getTypeHash: () => mg,
  isMerkleTreeType: () => hg,
  prepareSelector: () => fg
});
var Fk = {};
re(Fk, {
  MerkleTree: () => tc,
  proofMerklePath: () => ug
});
var tc = class La {
  /**
   * Create a Merkle tree
   *
   * @param leafHashes hex-string array
   * @param hashMethod hash method to use, default: Pedersen
   * @returns created Merkle tree
   * @example
   * ```typescript
   * const leaves = ['0x1', '0x2', '0x3', '0x4', '0x5', '0x6', '0x7'];
   * const tree = new MerkleTree(leaves);
   * // tree = {
   * //   branches: [['0x5bb9440e2...', '0x262697b88...', ...], ['0x38118a340...', ...], ...],
   * //   leaves: ['0x1', '0x2', '0x3', '0x4', '0x5', '0x6', '0x7'],
   * //   root: '0x7f748c75e5bdb7ae28013f076b8ab650c4e01d3530c6e5ab665f9f1accbe7d4',
   * //   hashMethod: [Function computePedersenHash],
   * // }
   * ```
   */
  constructor(t, n = Mr) {
    $(this, "leaves");
    $(this, "branches", []);
    $(this, "root");
    $(this, "hashMethod");
    this.hashMethod = n, this.leaves = t, this.root = this.build(t);
  }
  /** @ignore */
  build(t) {
    if (t.length === 1)
      return t[0];
    t.length !== this.leaves.length && this.branches.push(t);
    const n = [];
    for (let r = 0; r < t.length; r += 2)
      r + 1 === t.length ? n.push(La.hash(t[r], "0x0", this.hashMethod)) : n.push(La.hash(t[r], t[r + 1], this.hashMethod));
    return this.build(n);
  }
  /**
   * Calculate hash from ordered a and b, Pedersen hash default
   *
   * @param a first value
   * @param b second value
   * @param hashMethod hash method to use, default: Pedersen
   * @returns result of the hash function
   * @example
   * ```typescript
   * const result1 = MerkleTree.hash('0xabc', '0xdef');
   * // result1 = '0x484f029da7914ada038b1adf67fc83632364a3ebc2cd9349b41ab61626d9e82'
   *
   * const customHashMethod = (a, b) => `custom_${a}_${b}`;
   * const result2 = MerkleTree.hash('0xabc', '0xdef', customHashMethod);
   * // result2 = 'custom_2748_3567'
   * ```
   */
  static hash(t, n, r = Mr) {
    const [a, i] = [BigInt(t), BigInt(n)].sort((o, s) => o >= s ? 1 : -1);
    return r(a, i);
  }
  /**
   * Calculates the merkle membership proof path
   *
   * @param leaf hex-string
   * @param branch hex-string array
   * @param hashPath hex-string array
   * @returns collection of merkle proof hex-string hashes
   * @example
   * ```typescript
   * const leaves = ['0x1', '0x2', '0x3', '0x4', '0x5', '0x6', '0x7'];
   * const tree = new MerkleTree(leaves);
   * const result = tree.getProof('0x3');
   * // result = [
   * //   '0x4',
   * //   '0x5bb9440e27889a364bcb678b1f679ecd1347acdedcbf36e83494f857cc58026',
   * //   '0x8c0e46dd2df9aaf3a8ebfbc25408a582ad7fa7171f0698ddbbc5130b4b4e60',
   * // ]
   * ```
   */
  getProof(t, n = this.leaves, r = []) {
    const a = n.indexOf(t);
    if (a === -1)
      throw new Error("leaf not found");
    if (n.length === 1)
      return r;
    const i = a % 2 === 0, o = (i ? n[a + 1] : n[a - 1]) ?? "0x0", s = [...r, o], l = this.leaves.length === n.length ? -1 : this.branches.findIndex((u) => u.length === n.length), c = this.branches[l + 1] ?? [this.root];
    return this.getProof(
      La.hash(i ? t : o, i ? o : t, this.hashMethod),
      c,
      s
    );
  }
};
function ug(e, t, n, r = Mr) {
  if (n.length === 0)
    return e === t;
  const [a, ...i] = n;
  return ug(e, tc.hash(t, a, r), i, r);
}
var qk = {
  u256: JSON.parse('[{ "name": "low", "type": "u128" }, { "name": "high", "type": "u128" }]'),
  TokenAmount: JSON.parse(
    '[{ "name": "token_address", "type": "ContractAddress" }, { "name": "amount", "type": "u256" }]'
  ),
  NftId: JSON.parse(
    '[{ "name": "collection_address", "type": "ContractAddress" }, { "name": "token_id", "type": "u256" }]'
  )
}, Ve = {
  [ee.ACTIVE]: {
    domain: "StarknetDomain",
    hashMethod: zh,
    hashMerkleMethod: Ph,
    escapeTypeString: (e) => `"${e}"`,
    presetTypes: qk
  },
  [ee.LEGACY]: {
    domain: "StarkNetDomain",
    hashMethod: Nh,
    hashMerkleMethod: Mr,
    escapeTypeString: (e) => e,
    presetTypes: {}
  }
};
function Sa(e, t, { min: n, max: r }) {
  const a = BigInt(e);
  Z(a >= n && a <= r, `${a} (${t}) is out of bounds [${n}, ${r}]`);
}
function dg({ types: e, domain: t }) {
  if (Ve[ee.ACTIVE].domain in e && t.revision === ee.ACTIVE)
    return ee.ACTIVE;
  if (Ve[ee.LEGACY].domain in e && (t.revision ?? ee.LEGACY) === ee.LEGACY)
    return ee.LEGACY;
}
function lt(e) {
  try {
    return D(e);
  } catch {
    if (me(e))
      return D(xe(e));
    throw new Error(`Invalid BigNumberish: ${e}`);
  }
}
function Zk(e) {
  const t = e;
  return !!(t.message && t.primaryType && t.types && dg(t));
}
function fg(e) {
  return at(e) ? e : be(e);
}
function hg(e) {
  return e.type === "merkletree";
}
function nc(e, t, n = [], r = "", a = ee.LEGACY) {
  return t[t.length - 1] === "*" ? t = t.slice(0, -1) : a === ee.ACTIVE && (t === "enum" ? t = r : t.match(/^\(.*\)$/) && (t = t.slice(1, -1))), n.includes(t) || !e[t] ? n : [
    t,
    ...e[t].reduce(
      (i, o) => [
        ...i,
        ...nc(e, o.type, i, o.contains, a).filter(
          (s) => !i.includes(s)
        )
      ],
      []
    )
  ];
}
function Kk(e, t) {
  if (t.parent && t.key) {
    const r = e[t.parent].find((i) => i.name === t.key);
    if (!hg(r))
      throw new Error(`${t.key} is not a merkle tree`);
    if (r.contains.endsWith("*"))
      throw new Error(`Merkle tree contain property must not be an array but was given ${t.key}`);
    return r.contains;
  }
  return "raw";
}
function gg(e, t, n = ee.LEGACY) {
  const r = n === ee.ACTIVE ? { ...e, ...Ve[n].presetTypes } : e, [a, ...i] = nc(
    r,
    t,
    void 0,
    void 0,
    n
  ), o = a ? [a, ...i.sort()] : [], s = Ve[n].escapeTypeString;
  return o.map((l) => {
    const c = r[l].map((u) => {
      const d = u.type === "enum" && n === ee.ACTIVE ? u.contains : u.type, h = d.match(/^\(.*\)$/) ? `(${d.slice(1, -1).split(",").map((f) => f && s(f)).join(",")})` : s(d);
      return `${s(u.name)}:${h}`;
    });
    return `${s(l)}(${c})`;
  }).join("");
}
function mg(e, t, n = ee.LEGACY) {
  return be(gg(e, t, n));
}
function Er(e, t, n, r = {}, a = ee.LEGACY) {
  if (e[t])
    return [t, Fr(e, t, n, a)];
  if (Ve[a].presetTypes[t])
    return [
      t,
      Fr(
        Ve[a].presetTypes,
        t,
        n,
        a
      )
    ];
  if (t.endsWith("*")) {
    const i = n.map(
      (o) => Er(e, t.slice(0, -1), o, void 0, a)[1]
    );
    return [t, Ve[a].hashMethod(i)];
  }
  switch (t) {
    case "enum": {
      if (a === ee.ACTIVE) {
        const [i, o] = Object.entries(n)[0], s = e[r.parent][0], l = e[s.contains], c = l.find((h) => h.name === i), u = l.indexOf(c), d = c.type.slice(1, -1).split(",").map((h, f) => {
          if (!h)
            return h;
          const m = o[f];
          return Er(e, h, m, void 0, a)[1];
        });
        return [
          t,
          Ve[a].hashMethod([u, ...d])
        ];
      }
      return [t, lt(n)];
    }
    case "merkletree": {
      const i = Kk(e, r), o = n.map((l) => Er(e, i, l, void 0, a)[1]), { root: s } = new tc(
        o,
        Ve[a].hashMerkleMethod
      );
      return ["felt", s];
    }
    case "selector":
      return ["felt", fg(n)];
    case "string": {
      if (a === ee.ACTIVE) {
        const i = hi(n), o = [
          i.data.length,
          ...i.data,
          i.pending_word,
          i.pending_word_len
        ];
        return [t, Ve[a].hashMethod(o)];
      }
      return [t, lt(n)];
    }
    case "i128": {
      if (a === ee.ACTIVE) {
        const i = BigInt(n);
        return Sa(i, t, Jf), [t, lt(i < 0n ? Cs + i : i)];
      }
      return [t, lt(n)];
    }
    case "timestamp":
    case "u128":
      return a === ee.ACTIVE && Sa(n, t, Xf), [t, lt(n)];
    case "felt":
    case "shortstring":
      return a === ee.ACTIVE && Sa(lt(n), t, _o), [t, lt(n)];
    case "ClassHash":
    case "ContractAddress":
      return a === ee.ACTIVE && Sa(n, t, _o), [t, lt(n)];
    case "bool":
      return a === ee.ACTIVE && Z(typeof n == "boolean", `Type mismatch for ${t} ${n}`), [t, lt(n)];
    default: {
      if (a === ee.ACTIVE)
        throw new Error(`Unsupported type: ${t}`);
      return [t, lt(n)];
    }
  }
}
function pg(e, t, n, r = ee.LEGACY) {
  const a = e[t] ?? Ve[r].presetTypes[t], [i, o] = a.reduce(
    ([s, l], c) => {
      if (n[c.name] === void 0 || n[c.name] === null && c.type !== "enum")
        throw new Error(`Cannot encode data: missing data for '${c.name}'`);
      const u = n[c.name], d = { parent: t, key: c.name }, [h, f] = Er(e, c.type, u, d, r);
      return [
        [...s, h],
        [...l, f]
      ];
    },
    [["felt"], [mg(e, t, r)]]
  );
  return [i, o];
}
function Fr(e, t, n, r = ee.LEGACY) {
  return Ve[r].hashMethod(pg(e, t, n, r)[1]);
}
function rc(e, t) {
  if (!Zk(e))
    throw new Error("Typed data does not match JSON schema");
  const n = dg(e), { domain: r, hashMethod: a } = Ve[n], i = [
    xe("StarkNet Message"),
    Fr(e.types, r, e.domain, n),
    t,
    Fr(e.types, e.primaryType, e.message, n)
  ];
  return a(i);
}
var Jk = class {
  constructor(e = ts.randomPrivateKey()) {
    $(this, "pk");
    this.pk = e instanceof Uint8Array ? Es(e) : D(e);
  }
  async getPubKey() {
    return rs(this.pk);
  }
  async signMessage(e, t) {
    const n = rc(e, t);
    return this.signRaw(n);
  }
  async signTransaction(e, t) {
    const n = Wa(e, t.cairoVersion);
    let r;
    if (Object.values(R.ETransactionVersion2).includes(t.version)) {
      const a = t;
      r = Oo({
        ...a,
        senderAddress: a.walletAddress,
        compiledCalldata: n,
        version: a.version
      });
    } else if (Object.values(R.ETransactionVersion3).includes(t.version)) {
      const a = t;
      r = Oo({
        ...a,
        senderAddress: a.walletAddress,
        compiledCalldata: n,
        version: a.version,
        nonceDataAvailabilityMode: an(a.nonceDataAvailabilityMode),
        feeDataAvailabilityMode: an(a.feeDataAvailabilityMode)
      });
    } else
      throw Error("unsupported signTransaction version");
    return this.signRaw(r);
  }
  async signDeployAccountTransaction(e) {
    const t = te.compile(e.constructorCalldata);
    let n;
    if (Object.values(R.ETransactionVersion2).includes(e.version)) {
      const r = e;
      n = jo({
        ...r,
        salt: r.addressSalt,
        constructorCalldata: t,
        version: r.version
      });
    } else if (Object.values(R.ETransactionVersion3).includes(e.version)) {
      const r = e;
      n = jo({
        ...r,
        salt: r.addressSalt,
        compiledConstructorCalldata: t,
        version: r.version,
        nonceDataAvailabilityMode: an(r.nonceDataAvailabilityMode),
        feeDataAvailabilityMode: an(r.feeDataAvailabilityMode)
      });
    } else
      throw Error("unsupported signDeployAccountTransaction version");
    return this.signRaw(n);
  }
  async signDeclareTransaction(e) {
    let t;
    if (Object.values(R.ETransactionVersion2).includes(e.version)) {
      const n = e;
      t = Do({
        ...n,
        version: n.version
      });
    } else if (Object.values(R.ETransactionVersion3).includes(e.version)) {
      const n = e;
      t = Do({
        ...n,
        version: n.version,
        nonceDataAvailabilityMode: an(n.nonceDataAvailabilityMode),
        feeDataAvailabilityMode: an(n.feeDataAvailabilityMode)
      });
    } else
      throw Error("unsupported signDeclareTransaction version");
    return this.signRaw(t);
  }
  async signRaw(e) {
    return ed(e, this.pk);
  }
}, Xk = {};
re(Xk, {
  UINT_128_MAX: () => Rn,
  UINT_256_MAX: () => ph,
  bnToUint256: () => Yk,
  isUint256: () => Wk,
  uint256ToBN: () => Gk
});
function Gk(e) {
  return new ge(e).toBigInt();
}
function Wk(e) {
  return ge.is(e);
}
function Yk(e) {
  return new ge(e).toUint256HexString();
}
var Qk = {};
re(Qk, {
  getAbiEvents: () => nv,
  isAbiEvent: () => Lo,
  isObject: () => $a,
  parseEvents: () => rv,
  parseUDCEvent: () => bg
});
function Lo(e) {
  return e.type === "event";
}
function ev(e) {
  return e.filter((t) => t.type === "event").reduce((t, n) => {
    const r = n.name, a = { ...n };
    return a.name = r, {
      ...t,
      [ne(Gt(Wt(r)).toString(16))]: a
    };
  }, {});
}
function tv(e) {
  const t = e.filter((a) => Lo(a) && a.kind === "struct"), n = e.filter((a) => Lo(a) && a.kind === "enum");
  return t.reduce((a, i) => {
    let o = [], { name: s } = i, l = !1;
    const c = (h) => h.type === s;
    for (; ; ) {
      const h = n.find((m) => m.variants.some(c));
      if (typeof h > "u")
        break;
      const f = h.variants.find(c);
      o.unshift(f.name), f.kind === "flat" && (l = !0), s = h.name;
    }
    if (o.length === 0)
      throw new Error("inconsistency in ABI events definition.");
    l && (o = [o[o.length - 1]]);
    const u = o.pop();
    let d = {
      [ne(Gt(Wt(u)).toString(16))]: i
    };
    for (; o.length > 0; )
      d = {
        [ne(Gt(Wt(o.pop())).toString(16))]: d
      };
    return d = { ...d }, yg(a, d);
  }, {});
}
function nv(e) {
  return qs(e) ? tv(e) : ev(e);
}
function $a(e) {
  return e && typeof e == "object" && !Array.isArray(e);
}
function yg(e, t) {
  const n = { ...e };
  return $a(e) && $a(t) && Object.keys(t).forEach((r) => {
    $a(t[r]) ? r in e ? n[r] = yg(e[r], t[r]) : Object.assign(n, { [r]: t[r] }) : Object.assign(n, { [r]: t[r] });
  }), n;
}
function rv(e, t, n, r) {
  return e.flat().reduce((i, o) => {
    var f, m;
    let s = t[o.keys.shift() ?? 0];
    if (!s)
      return i;
    for (; !s.name; ) {
      const g = o.keys.shift();
      Z(!!g, 'Not enough data in "key" property of this event.'), s = s[g];
    }
    const l = {};
    l[s.name] = {};
    const c = o.keys[Symbol.iterator](), u = o.data[Symbol.iterator](), d = ((f = s.members) == null ? void 0 : f.filter((g) => g.kind === "key")) || s.keys, h = ((m = s.members) == null ? void 0 : m.filter((g) => g.kind === "data")) || s.data;
    return d.forEach((g) => {
      l[s.name][g.name] = Xa(
        c,
        g,
        n,
        r,
        l[s.name]
      );
    }), h.forEach((g) => {
      l[s.name][g.name] = Xa(
        u,
        g,
        n,
        r,
        l[s.name]
      );
    }), i.push(l), i;
  }, []);
}
function bg(e) {
  if (!e.events)
    throw new Error("UDC emitted event is empty");
  const t = e.events.find(
    (n) => xo(n.from_address) === xo(pn.ADDRESS)
  ) || {
    data: []
  };
  return {
    transaction_hash: e.transaction_hash,
    contract_address: t.data[0],
    address: t.data[0],
    deployer: t.data[1],
    unique: t.data[2],
    classHash: t.data[3],
    calldata_len: t.data[4],
    calldata: t.data.slice(5, 5 + parseInt(t.data[4], 16)),
    salt: t.data[t.data.length - 1]
  };
}
var av = class extends Uk {
  constructor(t, n, r, a, i = R.ETransactionVersion.V2) {
    super(t);
    $(this, "signer");
    $(this, "address");
    $(this, "cairoVersion");
    $(this, "transactionVersion");
    $(this, "deploySelf", this.deployAccount);
    this.address = n.toLowerCase(), this.signer = me(r) || r instanceof Uint8Array ? new Jk(r) : r, a && (this.cairoVersion = a.toString()), this.transactionVersion = i;
  }
  // provided version or contract based preferred transactionVersion
  getPreferredVersion(t, n) {
    return this.transactionVersion === R.ETransactionVersion.V3 ? n : this.transactionVersion === R.ETransactionVersion.V2 ? t : R.ETransactionVersion.V3;
  }
  async getNonce(t) {
    return super.getNonceForAddress(this.address, t);
  }
  async getNonceSafe(t) {
    try {
      return Y(t ?? await this.getNonce());
    } catch {
      return 0n;
    }
  }
  /**
   * Retrieves the Cairo version from the network and sets `cairoVersion` if not already set in the constructor.
   * @param classHash if provided detects Cairo version from classHash, otherwise from the account address
   */
  async getCairoVersion(t) {
    if (!this.cairoVersion) {
      const { cairo: n } = t ? await super.getContractVersion(void 0, t) : await super.getContractVersion(this.address);
      this.cairoVersion = n;
    }
    return this.cairoVersion;
  }
  async estimateFee(t, n = {}) {
    return this.estimateInvokeFee(t, n);
  }
  async estimateInvokeFee(t, n = {}) {
    const {
      nonce: r,
      blockIdentifier: a,
      version: i,
      skipValidate: o = !0
    } = n, s = Array.isArray(t) ? t : [t], l = Y(r ?? await this.getNonce()), c = dt(
      this.getPreferredVersion(R.ETransactionVersion.F1, R.ETransactionVersion.F3),
      Da(i)
    ), u = await this.getChainId(), d = {
      ...pe(n),
      walletAddress: this.address,
      nonce: l,
      maxFee: ye,
      version: c,
      chainId: u,
      cairoVersion: await this.getCairoVersion(),
      skipValidate: o
    }, h = await this.buildInvocation(s, d);
    return super.getInvokeEstimateFee(
      { ...h },
      { ...pe(n), version: c, nonce: l },
      a,
      n.skipValidate
    );
  }
  async estimateDeclareFee(t, n = {}) {
    const {
      blockIdentifier: r,
      nonce: a,
      version: i,
      skipValidate: o = !0
    } = n, s = Y(a ?? await this.getNonce()), l = dt(
      $e(t.contract) ? this.getPreferredVersion(R.ETransactionVersion.F2, R.ETransactionVersion.F3) : R.ETransactionVersion.F1,
      Da(i)
    ), c = await this.getChainId(), u = await this.buildDeclarePayload(t, {
      ...pe(n),
      nonce: s,
      chainId: c,
      version: l,
      walletAddress: this.address,
      maxFee: ye,
      cairoVersion: void 0,
      // unused parameter
      skipValidate: o
    });
    return super.getDeclareEstimateFee(
      u,
      { ...pe(n), version: l, nonce: s },
      r,
      n.skipValidate
    );
  }
  async estimateAccountDeployFee({
    classHash: t,
    addressSalt: n = 0,
    constructorCalldata: r = [],
    contractAddress: a
  }, i = {}) {
    const { blockIdentifier: o, version: s, skipValidate: l = !0 } = i, c = dt(
      this.getPreferredVersion(R.ETransactionVersion.F1, R.ETransactionVersion.F3),
      Da(s)
    ), u = ye, d = await this.getChainId(), h = await this.buildAccountDeployPayload(
      { classHash: t, addressSalt: n, constructorCalldata: r, contractAddress: a },
      {
        ...pe(i),
        nonce: u,
        chainId: d,
        version: c,
        walletAddress: this.address,
        // unused parameter
        maxFee: ye,
        cairoVersion: void 0,
        // unused parameter,
        skipValidate: l
      }
    );
    return super.getDeployAccountEstimateFee(
      { ...h },
      { ...pe(i), version: c, nonce: u },
      o,
      i.skipValidate
    );
  }
  async estimateDeployFee(t, n = {}) {
    const r = this.buildUDCContractPayload(t);
    return this.estimateInvokeFee(r, n);
  }
  async estimateFeeBulk(t, n = {}) {
    const { nonce: r, blockIdentifier: a, version: i, skipValidate: o } = n, s = await this.accountInvocationsFactory(t, {
      ...pe(n),
      versions: [
        R.ETransactionVersion.F1,
        // non-sierra
        dt(
          this.getPreferredVersion(R.ETransactionVersion.F2, R.ETransactionVersion.F3),
          i
        )
        // sierra
      ],
      nonce: r,
      blockIdentifier: a,
      skipValidate: o
    });
    return super.getEstimateFeeBulk(s, {
      blockIdentifier: a,
      skipValidate: o
    });
  }
  async simulateTransaction(t, n = {}) {
    const { nonce: r, blockIdentifier: a, skipValidate: i = !0, skipExecute: o, version: s } = n, l = await this.accountInvocationsFactory(t, {
      ...pe(n),
      versions: [
        R.ETransactionVersion.V1,
        // non-sierra
        dt(
          this.getPreferredVersion(R.ETransactionVersion.V2, R.ETransactionVersion.V3),
          s
        )
      ],
      nonce: r,
      blockIdentifier: a,
      skipValidate: i
    });
    return super.getSimulateTransaction(l, {
      blockIdentifier: a,
      skipValidate: i,
      skipExecute: o
    });
  }
  async execute(t, n, r = {}) {
    const a = n === void 0 || Array.isArray(n) ? r : n, i = Array.isArray(t) ? t : [t], o = Y(a.nonce ?? await this.getNonce()), s = dt(
      this.getPreferredVersion(R.ETransactionVersion.V1, R.ETransactionVersion.V3),
      // TODO: does this depend on cairo version ?
      a.version
    ), l = await this.getUniversalSuggestedFee(
      s,
      { type: "INVOKE_FUNCTION", payload: t },
      {
        ...a,
        version: s
      }
    ), c = await this.getChainId(), u = {
      ...pe(a),
      resourceBounds: l.resourceBounds,
      walletAddress: this.address,
      nonce: o,
      maxFee: l.maxFee,
      version: s,
      chainId: c,
      cairoVersion: await this.getCairoVersion()
    }, d = await this.signer.signTransaction(i, u), h = Wa(i, await this.getCairoVersion());
    return this.invokeFunction(
      { contractAddress: this.address, calldata: h, signature: d },
      {
        ...pe(a),
        resourceBounds: l.resourceBounds,
        nonce: o,
        maxFee: l.maxFee,
        version: s
      }
    );
  }
  /**
   * First check if contract is already declared, if not declare it
   * If contract already declared returned transaction_hash is ''.
   * Method will pass even if contract is already declared
   * @param transactionsDetail (optional)
   */
  async declareIfNot(t, n = {}) {
    const r = Pa(t);
    try {
      await this.getClassByHash(r.classHash);
    } catch {
      return this.declare(t, n);
    }
    return {
      transaction_hash: "",
      class_hash: r.classHash
    };
  }
  async declare(t, n = {}) {
    const r = Pa(t), { nonce: a, version: i } = n, o = dt(
      $e(t.contract) ? this.getPreferredVersion(R.ETransactionVersion.V2, R.ETransactionVersion.V3) : R.ETransactionVersion.V1,
      i
    ), s = await this.getUniversalSuggestedFee(
      o,
      {
        type: "DECLARE",
        payload: r
      },
      {
        ...n,
        version: o
      }
    ), l = {
      ...pe(n),
      resourceBounds: s.resourceBounds,
      maxFee: s.maxFee,
      nonce: Y(a ?? await this.getNonce()),
      version: o,
      chainId: await this.getChainId(),
      walletAddress: this.address,
      cairoVersion: void 0
    }, c = await this.buildDeclarePayload(
      r,
      l
    );
    return this.declareContract(c, l);
  }
  async deploy(t, n = {}) {
    const { calls: r, addresses: a } = Qs(t, this.address);
    return {
      ...await this.execute(r, void 0, n),
      contract_address: a
    };
  }
  async deployContract(t, n = {}) {
    const r = await this.deploy(t, n), a = await this.waitForTransaction(r.transaction_hash);
    return bg(a);
  }
  async declareAndDeploy(t, n = {}) {
    const { constructorCalldata: r, salt: a, unique: i } = t;
    let o = await this.declareIfNot(t, n);
    if (o.transaction_hash !== "") {
      const l = await this.waitForTransaction(o.transaction_hash);
      o = { ...o, ...l };
    }
    const s = await this.deployContract(
      { classHash: o.class_hash, salt: a, unique: i, constructorCalldata: r },
      n
    );
    return { declare: { ...o }, deploy: s };
  }
  async deployAccount({
    classHash: t,
    constructorCalldata: n = [],
    addressSalt: r = 0,
    contractAddress: a
  }, i = {}) {
    const o = dt(
      this.getPreferredVersion(R.ETransactionVersion.V1, R.ETransactionVersion.V3),
      i.version
    ), s = ye, l = await this.getChainId(), c = te.compile(n), u = a ?? Ga(r, t, c, 0), d = await this.getUniversalSuggestedFee(
      o,
      {
        type: "DEPLOY_ACCOUNT",
        payload: {
          classHash: t,
          constructorCalldata: c,
          addressSalt: r,
          contractAddress: u
        }
      },
      i
    ), h = await this.signer.signDeployAccountTransaction({
      ...pe(i),
      classHash: t,
      constructorCalldata: c,
      contractAddress: u,
      addressSalt: r,
      chainId: l,
      resourceBounds: d.resourceBounds,
      maxFee: d.maxFee,
      version: o,
      nonce: s
    });
    return this.deployAccountContract(
      { classHash: t, addressSalt: r, constructorCalldata: n, signature: h },
      {
        ...pe(i),
        nonce: s,
        resourceBounds: d.resourceBounds,
        maxFee: d.maxFee,
        version: o
      }
    );
  }
  async signMessage(t) {
    return this.signer.signMessage(t, this.address);
  }
  async hashMessage(t) {
    return rc(t, this.address);
  }
  async verifyMessageHash(t, n, r, a) {
    const i = r ? [r] : ["isValidSignature", "is_valid_signature"], o = a || {
      okResponse: [
        // any non-nok response is true
      ],
      nokResponse: [
        "0x0",
        // Devnet
        "0x00"
        // OpenZeppelin 0.7.0 to 0.9.0 invalid signature
      ],
      error: [
        "argent/invalid-signature",
        // ArgentX 0.3.0 to 0.3.1
        "is invalid, with respect to the public key",
        // OpenZeppelin until 0.6.1, Braavos 0.0.11
        "INVALID_SIG"
        // Braavos 1.0.0
      ]
    };
    let s;
    for (const l of i)
      try {
        const c = await this.callContract({
          contractAddress: this.address,
          entrypoint: l,
          calldata: te.compile({
            hash: Y(t).toString(),
            signature: vi(n)
          })
        });
        if (o.nokResponse.includes(c[0].toString()))
          return !1;
        if (o.okResponse.length === 0 || o.okResponse.includes(c[0].toString()))
          return !0;
        throw Error("signatureVerificationResponse Error: response is not part of known responses");
      } catch (c) {
        if (o.error.some(
          (u) => c.message.includes(u)
        ))
          return !1;
        s = c;
      }
    throw Error(`Signature verification Error: ${s}`);
  }
  async verifyMessage(t, n, r, a) {
    const i = await this.hashMessage(t);
    return this.verifyMessageHash(
      i,
      n,
      r,
      a
    );
  }
  /*
   * Support methods
   */
  async getUniversalSuggestedFee(t, { type: n, payload: r }, a) {
    let i = 0, o = Ur(ye);
    return t === R.ETransactionVersion.V3 ? o = a.resourceBounds ?? (await this.getSuggestedFee({ type: n, payload: r }, a)).resourceBounds : i = a.maxFee ?? (await this.getSuggestedFee({ type: n, payload: r }, a)).suggestedMaxFee, {
      maxFee: i,
      resourceBounds: o
    };
  }
  async getSuggestedFee({ type: t, payload: n }, r) {
    let a;
    switch (t) {
      case "INVOKE_FUNCTION":
        a = await this.estimateInvokeFee(n, r);
        break;
      case "DECLARE":
        a = await this.estimateDeclareFee(n, r);
        break;
      case "DEPLOY_ACCOUNT":
        a = await this.estimateAccountDeployFee(n, r);
        break;
      case "DEPLOY":
        a = await this.estimateDeployFee(n, r);
        break;
      default:
        a = {
          gas_consumed: 0n,
          gas_price: 0n,
          overall_fee: ye,
          unit: "FRI",
          suggestedMaxFee: ye,
          resourceBounds: Ur(ye),
          data_gas_consumed: 0n,
          data_gas_price: 0n
        };
        break;
    }
    return a;
  }
  async buildInvocation(t, n) {
    const r = Wa(t, await this.getCairoVersion()), a = n.skipValidate ? [] : await this.signer.signTransaction(t, n);
    return {
      ...pe(n),
      contractAddress: this.address,
      calldata: r,
      signature: a
    };
  }
  async buildDeclarePayload(t, n) {
    const { classHash: r, contract: a, compiledClassHash: i } = Pa(t), o = Kh(a);
    if (typeof i > "u" && (n.version === R.ETransactionVersion3.F3 || n.version === R.ETransactionVersion3.V3))
      throw Error("V3 Transaction work with Cairo1 Contracts and require compiledClassHash");
    const s = n.skipValidate ? [] : await this.signer.signDeclareTransaction({
      ...n,
      ...pe(n),
      classHash: r,
      compiledClassHash: i,
      // TODO: TS, cast because optional for v2 and required for v3, thrown if not present
      senderAddress: n.walletAddress
    });
    return {
      senderAddress: n.walletAddress,
      signature: s,
      contract: o,
      compiledClassHash: i
    };
  }
  async buildAccountDeployPayload({
    classHash: t,
    addressSalt: n = 0,
    constructorCalldata: r = [],
    contractAddress: a
  }, i) {
    const o = te.compile(r), s = a ?? Ga(n, t, o, 0), l = i.skipValidate ? [] : await this.signer.signDeployAccountTransaction({
      ...i,
      ...pe(i),
      classHash: t,
      contractAddress: s,
      addressSalt: n,
      constructorCalldata: o
    });
    return {
      ...pe(i),
      classHash: t,
      addressSalt: n,
      constructorCalldata: o,
      signature: l
    };
  }
  buildUDCContractPayload(t) {
    return [].concat(t).map((r) => {
      const {
        classHash: a,
        salt: i = "0",
        unique: o = !0,
        constructorCalldata: s = []
      } = r, l = te.compile(s);
      return {
        contractAddress: pn.ADDRESS,
        entrypoint: pn.ENTRYPOINT,
        calldata: [
          a,
          i,
          Ns(o),
          l.length,
          ...l
        ]
      };
    });
  }
  async accountInvocationsFactory(t, n) {
    const { nonce: r, blockIdentifier: a, skipValidate: i = !0 } = n, o = await this.getNonceSafe(r), s = await this.getChainId(), l = n.versions.map((d) => dt(d)), c = "payload" in t[0] ? t[0].payload : t[0], u = t[0].type === "DEPLOY_ACCOUNT" ? await this.getCairoVersion(c.classHash) : await this.getCairoVersion();
    return Promise.all(
      [].concat(t).map(async (d, h) => {
        const f = "payload" in d ? d.payload : d, m = {
          ...pe(n),
          walletAddress: this.address,
          nonce: Y(Number(o) + h),
          maxFee: ye,
          chainId: s,
          cairoVersion: u,
          version: "",
          skipValidate: i
        }, g = {
          type: d.type,
          nonce: Y(Number(o) + h),
          blockIdentifier: a,
          version: ""
        };
        if (d.type === "INVOKE_FUNCTION") {
          const p = ja(l[1]);
          m.version = p, g.version = p;
          const b = await this.buildInvocation(
            [].concat(f),
            m
          );
          return {
            ...g,
            ...b
          };
        }
        if (d.type === "DEPLOY") {
          const p = ja(l[1]);
          m.version = p, g.version = p;
          const b = this.buildUDCContractPayload(f), _ = await this.buildInvocation(b, m);
          return {
            ...g,
            ..._,
            type: "INVOKE_FUNCTION"
            /* INVOKE */
          };
        }
        if (d.type === "DECLARE") {
          const p = $e(f.contract) ? l[1] : l[0];
          m.version = p, g.version = p;
          const b = await this.buildDeclarePayload(f, m);
          return {
            ...g,
            ...b
          };
        }
        if (d.type === "DEPLOY_ACCOUNT") {
          const p = ja(l[1]);
          m.version = p, g.version = p;
          const b = await this.buildAccountDeployPayload(f, m);
          return {
            ...g,
            ...b
          };
        }
        throw Error(`accountInvocationsFactory: unsupported transaction type: ${d}`);
      })
    );
  }
  async getStarkName(t = this.address, n) {
    return super.getStarkName(t, n);
  }
}, iv = {};
re(iv, {
  addDeclareTransaction: () => Eg,
  addInvokeTransaction: () => xg,
  addStarknetChain: () => vg,
  deploymentData: () => sv,
  getPermissions: () => Ag,
  onAccountChange: () => Cg,
  onNetworkChanged: () => Ig,
  requestAccounts: () => wg,
  requestChainId: () => ov,
  signMessage: () => Sg,
  supportedSpecs: () => cv,
  switchStarknetChain: () => _g,
  watchAsset: () => kg
});
function wg(e, t = !1) {
  return e.request({
    type: "wallet_requestAccounts",
    params: {
      silent_mode: t
    }
  });
}
function Ag(e) {
  return e.request({ type: "wallet_getPermissions" });
}
function kg(e, t) {
  return e.request({
    type: "wallet_watchAsset",
    params: t
  });
}
function vg(e, t) {
  return e.request({
    type: "wallet_addStarknetChain",
    params: t
  });
}
function _g(e, t) {
  return e.request({
    type: "wallet_switchStarknetChain",
    params: {
      chainId: t
    }
  });
}
function ov(e) {
  return e.request({ type: "wallet_requestChainId" });
}
function sv(e) {
  return e.request({ type: "wallet_deploymentData" });
}
function xg(e, t) {
  return e.request({
    type: "wallet_addInvokeTransaction",
    params: t
  });
}
function Eg(e, t) {
  return e.request({
    type: "wallet_addDeclareTransaction",
    params: t
  });
}
function Sg(e, t) {
  return e.request({
    type: "wallet_signTypedData",
    params: t
  });
}
function cv(e) {
  return e.request({ type: "wallet_supportedSpecs" });
}
function Cg(e, t) {
  e.on("accountsChanged", t);
}
function Ig(e, t) {
  e.on("networkChanged", t);
}
var lv = class extends av {
  constructor(t, n, r) {
    super(t, "", "", r);
    $(this, "address", "");
    $(this, "walletProvider");
    this.walletProvider = n, this.walletProvider.on("accountsChanged", (a) => {
      a && (this.address = a[0].toLowerCase());
    }), this.walletProvider.on("networkChanged", (a) => {
      a && this.channel.setChainId(a);
    }), n.request({
      type: "wallet_requestAccounts",
      params: {
        silent_mode: !1
      }
    }).then((a) => {
      this.address = a[0].toLowerCase();
    });
  }
  /**
   * WALLET EVENTS
   */
  onAccountChange(t) {
    Cg(this.walletProvider, t);
  }
  onNetworkChanged(t) {
    Ig(this.walletProvider, t);
  }
  /**
   * WALLET SPECIFIC METHODS
   */
  requestAccounts(t = !1) {
    return wg(this.walletProvider, t);
  }
  getPermissions() {
    return Ag(this.walletProvider);
  }
  switchStarknetChain(t) {
    return _g(this.walletProvider, t);
  }
  watchAsset(t) {
    return kg(this.walletProvider, t);
  }
  addStarknetChain(t) {
    return vg(this.walletProvider, t);
  }
  /**
   * ACCOUNT METHODS
   */
  execute(t) {
    const r = {
      calls: [].concat(t).map((a) => {
        const { contractAddress: i, entrypoint: o, calldata: s } = a;
        return {
          contract_address: i,
          entry_point: o,
          calldata: s
        };
      })
    };
    return xg(this.walletProvider, r);
  }
  declare(t) {
    const n = Pa(t), r = t.contract, a = {
      ...r,
      abi: Me(r.abi)
    };
    if (!n.compiledClassHash)
      throw Error("compiledClassHash is required");
    const i = {
      compiled_class_hash: n.compiledClassHash,
      contract_class: a
    };
    return Eg(this.walletProvider, i);
  }
  async deploy(t) {
    const { calls: n, addresses: r } = Qs(t, this.address);
    return {
      ...await this.execute(n),
      contract_address: r
    };
  }
  signMessage(t) {
    return Sg(this.walletProvider, t);
  }
  // TODO: MISSING ESTIMATES
}, kt;
(function(e) {
  e.Call = "call", e.Reply = "reply", e.Syn = "syn", e.SynAck = "synAck", e.Ack = "ack";
})(kt || (kt = {}));
var gn;
(function(e) {
  e.Fulfilled = "fulfilled", e.Rejected = "rejected";
})(gn || (gn = {}));
var qr;
(function(e) {
  e.ConnectionDestroyed = "ConnectionDestroyed", e.ConnectionTimeout = "ConnectionTimeout", e.NoIframeSrc = "NoIframeSrc";
})(qr || (qr = {}));
var $o;
(function(e) {
  e.DataCloneError = "DataCloneError";
})($o || ($o = {}));
var en;
(function(e) {
  e.Message = "message";
})(en || (en = {}));
const uv = (e, t) => {
  const n = [];
  let r = !1;
  return {
    destroy(a) {
      r || (r = !0, t(`${e}: Destroying connection`), n.forEach((i) => {
        i(a);
      }));
    },
    onDestroy(a) {
      r ? a() : n.push(a);
    }
  };
}, dv = (e) => (...t) => {
  e && console.log("[Penpal]", ...t);
}, fv = {
  "http:": "80",
  "https:": "443"
}, hv = /^(https?:)?\/\/([^/:]+)?(:(\d+))?/, gv = ["file:", "data:"], mv = (e) => {
  if (e && gv.find((s) => e.startsWith(s)))
    return "null";
  const t = document.location, n = hv.exec(e);
  let r, a, i;
  n ? (r = n[1] ? n[1] : t.protocol, a = n[2], i = n[4]) : (r = t.protocol, a = t.hostname, i = t.port);
  const o = i && i !== fv[r] ? `:${i}` : "";
  return `${r}//${a}${o}`;
}, lu = ({ name: e, message: t, stack: n }) => ({
  name: e,
  message: t,
  stack: n
}), pv = (e) => {
  const t = new Error();
  return Object.keys(e).forEach((n) => t[n] = e[n]), t;
}, yv = (e, t, n) => {
  const { localName: r, local: a, remote: i, originForSending: o, originForReceiving: s } = e;
  let l = !1;
  const c = (u) => {
    if (u.source !== i || u.data.penpal !== kt.Call)
      return;
    if (s !== "*" && u.origin !== s) {
      n(`${r} received message from origin ${u.origin} which did not match expected origin ${s}`);
      return;
    }
    const d = u.data, { methodName: h, args: f, id: m } = d;
    n(`${r}: Received ${h}() call`);
    const g = (p) => (b) => {
      if (n(`${r}: Sending ${h}() reply`), l) {
        n(`${r}: Unable to send ${h}() reply due to destroyed connection`);
        return;
      }
      const _ = {
        penpal: kt.Reply,
        id: m,
        resolution: p,
        returnValue: b
      };
      p === gn.Rejected && b instanceof Error && (_.returnValue = lu(b), _.returnValueIsError = !0);
      try {
        i.postMessage(_, o);
      } catch (k) {
        if (k.name === $o.DataCloneError) {
          const y = {
            penpal: kt.Reply,
            id: m,
            resolution: gn.Rejected,
            returnValue: lu(k),
            returnValueIsError: !0
          };
          i.postMessage(y, o);
        }
        throw k;
      }
    };
    new Promise((p) => p(t[h].call(t, u.origin).apply(t, f))).then(g(gn.Fulfilled), g(gn.Rejected));
  };
  return a.addEventListener(en.Message, c), () => {
    l = !0, a.removeEventListener(en.Message, c);
  };
};
let bv = 0;
const wv = () => ++bv, Tg = ".", Bg = (e) => e ? e.split(Tg) : [], Av = (e) => e.join(Tg), kv = (e, t) => {
  const n = Bg(t || "");
  return n.push(e), Av(n);
}, vv = (e, t, n) => {
  const r = Bg(t);
  return r.reduce((a, i, o) => (typeof a[i] > "u" && (a[i] = {}), o === r.length - 1 && (a[i] = n), a[i]), e), e;
}, Og = (e, t) => {
  const n = {};
  return Object.keys(e).forEach((r) => {
    const a = e[r], i = kv(r, t);
    typeof a == "object" && Object.assign(n, Og(a, i)), typeof a == "function" && (n[i] = a);
  }), n;
}, _v = (e) => {
  const t = {};
  for (const n in e)
    vv(t, n, e[n]);
  return t;
}, xv = (e, t, n, r, a) => {
  const { localName: i, local: o, remote: s, originForSending: l, originForReceiving: c } = t;
  let u = !1;
  a(`${i}: Connecting call sender`);
  const d = (f) => (...m) => {
    a(`${i}: Sending ${f}() call`);
    let g;
    try {
      s.closed && (g = !0);
    } catch {
      g = !0;
    }
    if (g && r(), u) {
      const p = new Error(`Unable to send ${f}() call due to destroyed connection`);
      throw p.code = qr.ConnectionDestroyed, p;
    }
    return new Promise((p, b) => {
      const _ = wv(), k = (S) => {
        if (S.source !== s || S.data.penpal !== kt.Reply || S.data.id !== _)
          return;
        if (c !== "*" && S.origin !== c) {
          a(`${i} received message from origin ${S.origin} which did not match expected origin ${c}`);
          return;
        }
        const x = S.data;
        a(`${i}: Received ${f}() reply`), o.removeEventListener(en.Message, k);
        let v = x.returnValue;
        x.returnValueIsError && (v = pv(v)), (x.resolution === gn.Fulfilled ? p : b)(v);
      };
      o.addEventListener(en.Message, k);
      const y = {
        penpal: kt.Call,
        id: _,
        methodName: f,
        args: m
      };
      s.postMessage(y, l);
    });
  }, h = n.reduce((f, m) => (f[m] = d(m), f), {});
  return Object.assign(e, _v(h)), () => {
    u = !0;
  };
}, Ev = (e, t, n, r, a) => {
  const { destroy: i, onDestroy: o } = r;
  let s, l;
  const c = {};
  return (u) => {
    if (t !== "*" && u.origin !== t) {
      a(`Parent: Handshake - Received ACK message from origin ${u.origin} which did not match expected origin ${t}`);
      return;
    }
    a("Parent: Handshake - Received ACK");
    const d = {
      localName: "Parent",
      local: window,
      remote: u.source,
      originForSending: n,
      originForReceiving: t
    };
    s && s(), s = yv(d, e, a), o(s), l && l.forEach((f) => {
      delete c[f];
    }), l = u.data.methodNames;
    const h = xv(c, d, l, i, a);
    return o(h), c;
  };
}, Sv = (e, t, n, r) => (a) => {
  if (!a.source)
    return;
  if (n !== "*" && a.origin !== n) {
    e(`Parent: Handshake - Received SYN message from origin ${a.origin} which did not match expected origin ${n}`);
    return;
  }
  e("Parent: Handshake - Received SYN, responding with SYN-ACK");
  const i = {
    penpal: kt.SynAck,
    methodNames: Object.keys(t)
  };
  a.source.postMessage(i, r);
}, Cv = 6e4, Iv = (e, t) => {
  const { destroy: n, onDestroy: r } = t, a = setInterval(() => {
    e.isConnected || (clearInterval(a), n());
  }, Cv);
  r(() => {
    clearInterval(a);
  });
}, Tv = (e, t) => {
  let n;
  return e !== void 0 && (n = window.setTimeout(() => {
    const r = new Error(`Connection timed out after ${e}ms`);
    r.code = qr.ConnectionTimeout, t(r);
  }, e)), () => {
    clearTimeout(n);
  };
}, Bv = (e) => {
  if (!e.src && !e.srcdoc) {
    const t = new Error("Iframe must have src or srcdoc property defined.");
    throw t.code = qr.NoIframeSrc, t;
  }
}, Ov = (e) => {
  let { iframe: t, methods: n = {}, childOrigin: r, timeout: a, debug: i = !1 } = e;
  const o = dv(i), s = uv("Parent", o), { onDestroy: l, destroy: c } = s;
  r || (Bv(t), r = mv(t.src));
  const u = r === "null" ? "*" : r, d = Og(n), h = Sv(o, d, r, u), f = Ev(d, r, u, s, o);
  return {
    promise: new Promise((g, p) => {
      const b = Tv(a, c), _ = (k) => {
        if (!(k.source !== t.contentWindow || !k.data)) {
          if (k.data.penpal === kt.Syn) {
            h(k);
            return;
          }
          if (k.data.penpal === kt.Ack) {
            const y = f(k);
            y && (b(), g(y));
            return;
          }
        }
      };
      window.addEventListener(en.Message, _), o("Parent: Awaiting handshake"), Iv(t, s), l((k) => {
        window.removeEventListener(en.Message, _), k && p(k);
      });
    }),
    destroy() {
      c();
    }
  };
}, Dv = {
  ACCOUNTS: "accounts"
};
function jv(e) {
  return Array.isArray(e) ? e : [e];
}
var Pv = class extends lv {
  constructor(e, t, n, r, a) {
    super({ nodeUrl: e.rpc.toString() }, e), this.address = t, this.keychain = n, this.options = r, this.modal = a;
  }
  /**
   * Invoke execute function in account contract
   *
   * @param calls the invocation object or an array of them, containing:
   * - contractAddress - the address of the contract
   * - entrypoint - the entrypoint of the contract
   * - calldata - (defaults to []) the calldata
   * - signature - (defaults to []) the signature
   * @param abis (optional) the abi of the contract for better displaying
   *
   * @returns response from addTransaction
   */
  async execute(e) {
    return e = jv(e), new Promise(async (t, n) => {
      var i;
      const r = await this.keychain.execute(
        e,
        void 0,
        void 0,
        !1
      );
      if (r.code === "SUCCESS") {
        t(r);
        return;
      }
      if ((i = this.options) != null && i.propagateSessionErrors) {
        n(r.error);
        return;
      }
      this.modal.open();
      const a = await this.keychain.execute(
        e,
        void 0,
        void 0,
        !0,
        r.error
      );
      if (a.code === "SUCCESS") {
        t(a), this.modal.close();
        return;
      }
      n(a.error);
    });
  }
  /**
   * Sign an JSON object for off-chain usage with the starknet private key and return the signature
   * This adds a message prefix so it cant be interchanged with transactions
   *
   * @param json - JSON object to be signed
   * @returns the signature of the JSON object
   * @throws {Error} if the JSON object is not a valid JSON
   */
  async signMessage(e) {
    return new Promise(async (t, n) => {
      const r = await this.keychain.signMessage(e, "", !0);
      if (!("code" in r)) {
        t(r);
        return;
      }
      this.modal.open();
      const a = await this.keychain.signMessage(e, "", !1);
      "code" in a ? n(a.error) : t(a), this.modal.close();
    });
  }
}, uu = Pv, Dg = class {
  constructor({
    id: e,
    url: t,
    preset: n,
    theme: r,
    colorMode: a,
    onClose: i,
    onConnect: o,
    methods: s = {}
  }) {
    if (typeof document > "u")
      return;
    r && t.searchParams.set("theme", r), n && t.searchParams.set("preset", n), a && t.searchParams.set("colorMode", a), this.url = t;
    const l = document.createElement("iframe");
    l.src = t.toString(), l.id = e, l.style.border = "none", l.sandbox.add("allow-forms"), l.sandbox.add("allow-popups"), l.sandbox.add("allow-scripts"), l.sandbox.add("allow-same-origin"), l.allow = "publickey-credentials-create *; publickey-credentials-get *; clipboard-write", document.hasStorageAccess && l.sandbox.add("allow-storage-access-by-user-activation");
    const c = document.createElement("div");
    c.id = "controller", c.style.position = "fixed", c.style.height = "100%", c.style.width = "100%", c.style.top = "0", c.style.left = "0", c.style.zIndex = "10000", c.style.backgroundColor = "rgba(0,0,0,0.6)", c.style.display = "flex", c.style.alignItems = "center", c.style.justifyContent = "center", c.style.visibility = "hidden", c.style.opacity = "0", c.style.transition = "opacity 0.2s ease", c.appendChild(l), this.iframe = l, this.container = c, Ov({
      iframe: this.iframe,
      methods: { close: () => this.close(), ...s }
    }).promise.then(o), this.resize(), window.addEventListener("resize", () => this.resize());
    const u = new MutationObserver(() => {
      const h = document.getElementById("controller");
      document.body && (e === "controller-keychain" && !h || e === "controller-profile") && (document.body.appendChild(c), u.disconnect());
    });
    u.observe(document.documentElement, {
      childList: !0,
      subtree: !0
    });
    const d = document.getElementById("controller");
    document.body && (e === "controller-keychain" && !d || e === "controller-profile") && document.body.appendChild(c), this.onClose = i;
  }
  open() {
    this.container && (document.body.style.overflow = "hidden", this.container.style.visibility = "visible", this.container.style.opacity = "1");
  }
  close() {
    var e;
    this.container && ((e = this.onClose) == null || e.call(this), document.body.style.overflow = "auto", this.container.style.visibility = "hidden", this.container.style.opacity = "0");
  }
  resize() {
    if (this.iframe) {
      if (this.iframe.style.userSelect = "none", window.innerWidth < 768) {
        this.iframe.style.height = "100%", this.iframe.style.width = "100%", this.iframe.style.borderRadius = "0";
        return;
      }
      this.iframe.style.height = "600px", this.iframe.style.width = "432px", this.iframe.style.borderRadius = "8px";
    }
  }
}, Nv = "https://x.cartridge.gg", zv = "https://profile.cartridge.gg", Rv = class extends Dg {
  constructor({ url: e, policies: t, ...n }) {
    const r = new URL(e ?? Nv);
    t && r.searchParams.set(
      "policies",
      encodeURIComponent(JSON.stringify(t))
    ), super({
      ...n,
      id: "controller-keychain",
      url: r
    });
  }
}, Lv = class extends Dg {
  constructor({
    profileUrl: e,
    rpcUrl: t,
    namespace: n,
    slot: r,
    username: a,
    tokens: i,
    ...o
  }) {
    const s = (e || zv).replace(/\/$/, ""), l = new URL(
      r ? n ? `${s}/account/${a}/slot/${r}?ps=${encodeURIComponent(
        r
      )}&ns=${encodeURIComponent(n)}` : `${s}/account/${a}/slot/${r}?ps=${encodeURIComponent(
        r
      )}` : `${s}/account/${a}`
    );
    l.searchParams.set("rpcUrl", encodeURIComponent(t)), i != null && i.erc20 && l.searchParams.set(
      "erc20",
      encodeURIComponent(i.erc20.toString())
    ), super({
      ...o,
      id: "controller-profile",
      url: l
    });
  }
}, ut = class jg extends Error {
  constructor() {
    super("Not ready to connect"), Object.setPrototypeOf(this, jg.prototype);
  }
}, $v = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAABkyAAAZMgGvFqWRAAAAB3RJTUUH6AkEFwsj7EvbJQAAAAZiS0dEAP8A/wD/oL2nkwAAK45JREFUeNrt3XmUXVWBqPE42+3Qj5hQ995zb1WlUqkkVZlIAhnJPIKAIogICEGGtlugFVBaxAbsVgw+FWlooEFtRFAmZRbClDAlICAg4MTQDY4MAiIy6X5nX8JrQQippKruOef+vrW+Zf9hr2XOsPd3T52z96BBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgCWhpaRlWqVT2LFcq/5m6MvW+1EdTn08N3CCfX3sM7ysnydXpf56UHuNlpVKp3RUHAGjkpP+2dEL6aDox3WSyHljT4766lCQfSf/zb12JAIABobOz8y3pxHNIOhE9ZDJuuL8tVSoH9/T0vNmVCQDoN9KJf2Y66fzExJs570qSZJorFADQH5P/J9OJ5jmTbWb/LPBsKUkOdKUCAPqKN5TL5f8wyeYmBI5Lz9nrXbYAgI3hdemkcrKJNXee5NIFAGww6a/JI0ymGbFc7tV/v5Qkh7mCAQC9Jp1wFqcTyZ9Mvrn1T2nALXAlAwDWm8GDB7+zVKn8wiSaex8cMmTIO1zRAID1+/WfJF82eRbmpcCjXdEAgNekVqtV0onjaZNnYXxq6NChJVc2AGCdpL8Yl5s0C+fnXdkAgHXxxnSy+JUJs1jG9znSc/sGlzcA4NV+/S80YRbTliSZ5woHALwi6S/FL5gsC2qSfM4VDgB4RdKJ4jqTZWFd5QoHALxaADxqoiysD7nCAQB/RWtr6yYmyWIbF3hypQMAXkKpVGo3SRZ+UaBWVzoA4OUB0GOSLPjngKVStysdAPASWqrVsSbJgn8K2NIyxpUOABAAAgAAIAAEgAAAAAgACgAAgACgAAAACAAKAACAAKAAAAAIAAoAAIAAoAAAAAgACgAAgACgAAAACAAKAACAAKAAAAAIAAoAAIAAoAAAAAgACgAAgACgAAAACAABIAAAAAJAAAAAIAAEAABAAGTTreZ0hudu2iqTLp3dKQAAAAJAAAgAAIAAEAACAADQX7S2tm5SKpU2r1Qq25bL5X1Llcpn0oH/W6krXsv0/+cGAVDsAFh7jl/rWrg0vXZOqF875fI+a6+lye3t7f/HHQYADaZarQ5OB+YF6SB9cDlJTk3/79XpwP1w0V9iEwAN96F6RKTXXLz24jUYr0V3JAD0D69PkmR8+ivsn9IB+NzU+5v1LXYBkFnvr1+b5fIBaRCMS6/Z17ltAWDDfuF3pr+w/jH9pXV2/NXlEzYBkLcnBWkMnJVew/+waa023B0NAOugUqmMTCf8Q9PB81YTiAAomLemQfCpJEm63OkAsHbSjy9bpf95u0lCADSD6fV+WylJDovXvhEAQFPR3t7+1vTX0G7pYLjKhCAAmtyV6b2wa7wnjAwACkutVquUk+Rz6aD3iIFfAPAlPpzeG/82pK2tbKQAUKTH/BNTv5EOcs8Y6AUA1+kz8V6J94yRA0Au6enpeXMpSXZcu7CKgV0AsPf+IC5EVK1W/8aIAiAPv/Zr8VFmOnj9xgAuANgn/ibeU/HeMsIAyBqvS5JkfjpInZMOVs8ZsAUA+8Xn4j0W77VBFhoC0EgGDx78zvpiPZXKXQZnASAABtS74r0X70EjEYABo1QqdVcqlePSQegJA7EAEAAN9Yl4L8Z70sgEoL94Y7lcfl862FyZDjp/NvAKAAGQKf9cvzfTezTeq4YrABtNS0vLpunA8slm3oBHAAiAPJner78sVSpHJUlSNYIB6DXpL4lJ5SQ5MR1QnjKoCgABkNs1Bc6MWxYb0QCsk87OzrfEb/fTXw/XGzwFgAAolLfENQVaWlreZqQD8P+J25XGR4b15UgNlAJAABT5zwOP1Z/slcujjXxA8/L6+GgwPiJMB4bnDY4CQAA0lX+Kq3TGJ37pWPAGwyHQBGzS0fF38VGgb/cFgABg3SS5J77omzrECAkUkPTm3mztS31PGvQEgADgK/h0fCKYJMk0IyaQc2zIIwAEAG1EBDQRcU/xtd/uP2AgEwACgBuzEVH9BeFyuc3ICmT7Mf/Mtd/9PmvgEgACgH390mA6tmwzyEZEQEZ+7Q8Z8o74qC69MW83SAkAAcAB8CfxCWNra+smRmCgASRJ0rX22/1HDUgCQACwERsRxReLW6rVsUZkoP958dv9C2zIIwAEADPktfU1BSZNepNhGuhDbMhDAUAbEQFNhA15KABoIyKgSbAhDwUAbUQENNdj/o61L/U9ZMCgAKCNiIDmeKnPhjwUALQREVB0bMhDAUDWnwr8PL7gnCTJu8wMKDQ25KEAIG1EhCbBhjwUAKSNiNBE2JCHAoC0ERGaiLXf7p9qQx4KALJvXhqMq5+uXVPARkTI2K99G/JQAAgA2ogIzUO1Wh1hQx4KAAFAGxGhObAhDwWAAGDWNiIaNOiNpif0CzbkyZ8Tx7aFHZZ0hf13GxOWHzgxnP6FqeGKk7YMN5w6O9xyxpxc+uPvzstsAMT/bXk9rvGaiNdGvEbitRKvmXjtxGvIvZSvjYiq1WpixkJfvtRnQ56MW6slYZv5I8JRH9usPpD/+vJFmZ0omS/jtXT5iTPr19a7542oX2vuORsRoaC8uCFPeiFd52bKrh3DqmGfHbvDecdMD79btdhkxQExXmvfO2ZG2GuH0WFYe9W9mG1vXvuC9t+a2fBaj/ltyJMDt57bGc784rTw+DVLTEhsqI+tWhK+c/TU+rsZ7k0bESG/L/XZkCfjj/j3eX93WHPaHBMPM+ma02bXn0j5E4GNiJBx2tvb35pO+h9Nf/H/zE2RXcd1t4Uj99ss3H/xApMMc+EvLlsYvnrIJC8QZtw49sc5IM4FZsTm4Q3pSV9mid5su2hWZ/ivf90iPHn9UpMKc+lTNywN3/3K9LDj0pHu6Wz7QJwTPBEoOPFRf3qyf+iCz6ZtbUnYb5eecNuZc00gLJR3nzsvHLrv+DC8w0uDGfautX8aQJGoVqvjyuXyVS7wbDp1Ynv9kelvr/TpHovtIyuX1J9szZrS4d7PqulcYYXBgnzOl/7qP9LGPNkzqSb1R6PxEenTazzmZ3P5THrNX3XylmHvHbtDteqlwQx+NfBs6hFxDjGT5pAkSaalJ/JOF3O2HNlZDQcuG1d/JGoiILcK91wwv/6ia8+oVmNE9ryzJUmmmlHzwxvTclu+9nMPF3BGXDBzeP3Rp2/3yVf2D9e/8NLg1nNHGDMy9ulgXB9mkL0GMv+3/iQ9Wde4YLNha2tSf8QZH3Ua4Mn1N+5PEJ+UWWkwU66q1WoVM20GKVWrc9IT9CsXaeOd0NNaf6T5wKULDebkRvirFYvqL8huPqHd2JINHyqXy4vNuNn6vO8TVvFrvNsuGFF/hPnH1V7qI/vjpcHdthsVKomxpsE+X6pUDjbzNp7XpZP/0S7IxjlieK3+qPKOs73URw6EPz3vhZcGR3XVjEGNXUnw2HQOer1puAHE5RvLSXK2C7ExTp88rP5o8uGr7MJHNmpXwvhi7dxp1hRomOkcZCnhAWbw4MHvjC9kuAAH/tv9+AgyPop89kYDMJmllwbjKpqtNeNUI14OjHOSmXlg/t7/t2l1Xe2iGzjHdr/wUt99F9mQh8yyD162yEZEjflzwPVDhw59uxm6fz/z+5s0AK5wwQ3shjy/v863+6SNiPgaEXB5nKPM1P1AT0/Pm9PJ/0IXWv9vyBO/3Y97mxtIyfz7w+/Mrb+oayOiAfFSywf3w9v+6YH9lour/5wy8YWX+n5zhQ15yCJvRLSljYj6+8XAb8Y5y7TdR6QH9FAXlg15SNqIKCc7Cv6zmbsvJv9y+b3W9bchD0kbEeXIP5eS5P1m8I176W9ceiCfdDHZkIekjYhy5pNxDjOTb+jnfpXK3S4iG/KQtBFRTr0rzmVm9N4++q9UTnLxbPyGPP/zfRvykLQRUQPfBzjBjN77v/u7cDbw2/1vL58anlptACPZNy8NXnL8zPoLwzYi2sA1ArwPsH4MaWsrpwfsEReNDXlI2ogoJ7/yX+u/88jQoUNLZvjXoFSpnOGCWj+nTbIhD0kbEeXEb5nh1/3i3wIXyfp9ux8fydmQh2SjveHU2fUXjWs1awq8lnGOM9O/ylK/3vq3IQ/JfG9EtNkYGxGtY7+An9k++JVf/PuUC8SGPCRtRFTwpYIPNeP/Ba2trZukB+ZRF8dLN+RZ/U0b8pDMr7d+e46NiP76zwCPJUnyLjP///7tf7kLw4Y8JG1E1CR/CjjKzJ9Sq9Uq6QF5yoY8NuQhaSOiJvEPce7z679S+fdmvAC6Ol/4dv8uG/KQbEJ/fsGC+ovN3SNbm/UpwFebfbOfwc222U98BHbSZza3IQ9Jrt2IKK5eOn/G8KZ7CtDU7wI0y5v/cUOev/9AT/172Q29SX5w+pyw5/u6w+Tx7fbwJpm5P2VOGtcWdn/v6LDmtA0f5+IYGcfKOGY2yQuBn2zO2X/SpDelB+CBIp/c+D3sFw+aFH5x2cZtyHPpCVs2zQ1BMuc/eGqVcMGx0zdqzItjZhw7m2BNgf+Jc2Ez/u3/A0U9qdsv6grfO2ZG+OPqjX+pL35TO8HCGiRzZM+o1vDEtRv/Z844hsaxNI6pBX4KsFMzbvd7WdE25PnEh8eGO8/p25f64q9/AwrJvHneMdP7dCyMY2scY+NYW7BjdUkzfvr3fFG+3T/58C3Coyv7Z0Oe4w7d3GBCMncefdDEfhkT41gbx9w49hbkWD0fd8Ftph3/Dsr7SesYVg3LD5wYnry+f7/d//InJhlMSObOzx2wWf8uObx6q/oXVZ3DC7DKYJJ8vJkC4LY8n6xl23eH/75k4YB8IiMASAqAV/f+ixfUvz7I+fG6tSkm/5aWlo7cvqyRVOq/+gdyG14BQFIArNs4Jsdl1JMcfyK9aa02vBm+/T8gjycnPma68NgZA75IhgAgKQDWz8tOmBlGdubzTwKVSmU/b/9ndPKPC/E0YpUsAUBSAKy/N6VjdU53H/x+0R//vy39Rz6dt0UtVpw4s2HLZAoAkgKgd159yqw8Lp729NChQ99e3Jf/SqWlebuIz/zitIauky0ASAqA3nvG8mn5O27l8pIir/53ZJ5Oxj/tPrbhG2UIAJICYMPcf9cxeXsP4IgiB8AVeTkRcfndh69aLABIMqcB8MjKJfVNinJ03C4r6vz/hvQf90ReTkR8mzQLW2UKAJICYOO+DMjRcXs8zpXFewGwWh2bl5PwvsVdmdkrWwCQFAAbZ542EyqVSj12/2ug8Q1SAUCSxQiAq07Oz6ZqpSTZsYgBcMQ63nzMzMHfeu6IzFy0AoCkAOgbt57bmZcAOKyIAfCdPBz8+OmIACDJYgXA6UdNzcuxO90GQA1a9CcLb/4LAJICoI+/CLh6cV4WByrexkDpP+rRrB/4XbYZmakLVgCQFAB95wfePSoPx+7hQk3+7e3tb83DBXvKkVsIAJIsaACcfPgWeTh2f+7p6XlzkZYAbs/DBXtTgzb8EQAkBUD/u+a02XlZEbBWnDUAkmRq1g94tZqEJ65dIgBIsqABEMf4ONbnYC2AzYvz9/9yeUnWD/isKR2Zu1gFAEkB0LfO3KIj+8evXF5cpAB4b9YP+E5bjxQAJFnwANhhSfZXBaxUKtsWaQ2AnbN+wPfesVsAkGTBA+DDO3TnIQB2KlIALMv6Af/4HmMFAEkWPADiNu85WA1w9yL9CWCfrB/wT//9eAFAkgUPgDjW5+AdgH2KFAD7Zv2AHyYAuJ6O7qqF2VM7wtSJ7WFYe9UxIXMUAIflIwD2FQACQABkxOEd1fBv6YB25znzXnJ+nrphabj8xJnhQ+8Z7TiRAkAACAABUCS3XTAiPHDpwtc8V1ectGUY1VVzzEgBIAAEgADIux/cZlT4/XXrv0DUXefOC+N72hw7CgABIAAEgADIq0tnd4bHr+n96pB3nD3PkwAKAAEgAASAAMijUye1h1+tWLRRa453DPOCIAWAABAAAkAA5MYJY9rCvRct2Ohzd8nxM0OtljimFAACQAAIAAGQdbs6a+G2M+f22fn79vKpoZI4rhQAAkAACAABkFlbW5Nw5X9u2efn8JhPOocUAAJAAAgAAZBJk2oSvvuV6f12Hv/lH8Y7zhQAAkAACAABkDVPOGxyv57HZ2/cKuy/2xjHmgJAAAgAASAAsuJn9x+YgerpNUvDsu27HXMKAAEgAASAAGi0H9m5p/7rfKDOZ1xUaLuFXY49BYAAEAACQAA0yh2WdNXX8h/oc/rIyiVh/ozhzgEFgAAQAAJAAAy0i2d1hsdWLWnYeX3w0oVh8wntzgUFgAAQAAJAAAzYKn8T28MvVyxs+Ln9+fkLwrhu+wZQAAgAASAABEC/O2Z0a/jZ+fMzc35vP2tuGDnCvgEUAAJAAAgAAdBvjhheC7d+e07mzvHKr80KbW2WDKYAEAACQAAIgL5f5a9WCZefODOT5zh64bEzQrUqAigABIAAEAACoM+Ma/GfsXxaZif/F/3GZ7dwvigABIAAEAACoK88/tObZ37yf9GjD5ronFEACAABIAAEwMZ6yF7jcjP5v+g/7T7WuWugc6d1hC+l992lJ2wZbjp9TrjljMZ4c+qKE2fWA3bruSMEgAAQAAKA6+u86cPDU6u3yl0A/OH6pWHmFh3OYQNeEo3bNw/kypC9MQZJnj4bFQACQAAIgIb5/f+YmbvJ/0XjzoTO4QC+JNqahOu+MSvz18Xd587LzWejAkAACAAB0BDH97TVN9/JawDEJYqtDzBwHvHRCbm5Nk4+YgsBIAAEgADgq7n7e0fndvJ/0fdvNdK5HCB/et783FwXv1u1uP7EQgAIAAEgAPgKHrzn2NwHwEd3GeNcDtAaEc/k7GlRXM5aAAgAASAA+Aruv9uY3AfA3jt2O5cD4PCOau6ujTnThgsAASAABABfyW3mj8h9AMSvGJxLASAABIAAEADs5VvdD121OLeT/4OXLbI0sAAQAAJAAAgAg/SG+NVDJuU2AL7wMSsCCgABIAAEgAAwSG+Q8TO6+y9ekLvBPW5XHCcl51AACAABIAAEADfQRbM6wyMrl+RmYP/tlYtyMbgLAAEgAASAABAAmTcOlneeMy/zg/ptZ84N0ycPc84EgAAQAAJAAAiAvrJWS8L+u44JV58yKzxxbXaeCDy2akm44qQtw0d27vHSnwAQAAJAAAgAAdDv7wd0VsOorlpD7eq01K8AEAACQAAIAAFACgABIAAEgAAQAKQAEAACQAAIAJICQAAIAAEgAEgKAAEgAASAACApAASAABAAAoCkABAAAkAACIDcOntqRzj6oInhkuNnhjWnzQkrTpwZjv3nyeHd80aYuFKTahJ2WNIVTjhscn0tgXiMLvr3GfWBNw/7xQsAASAABIAAEAAvcVx3W/jeMTPWeVxWf3N2mDu9o2knrW0XjAh3nPXqqxs+s2Zp+Nbnp9bXOzDJCwABIAAEgADIvPNnDA8PXLpwvY7Nk9cvDcu27266Cevje4wNT6cT/Poco5+eNz9MneRpgAAQAAJAAAiADLv9oq5eb9zz1A1Lw9ZzO5vmGO227aj6r/veHKNfrlgYFm7ZabIXAAJAAAgAAZA94y/5+It+Q47RXefOq6/1X/Rj1Dm8Gh5cz6cjL/fRlYvr7wuY8AWAABAAAkAAZMYDl41b70far+Ye248u/HE6eM+xG3WM/pAG1l47jDbpCwABIAAEgABovEfut1l49saNP06nHzW18BNV/ApiY49TDK0YEiZ+ASAABIAAEAAN+4Tt5MO36LPjdMsZcwo/UT2wgY//X8nlH59o8hcAAkAACAABMLC2tibh3C9P79PjdO+F8ws/UT1+zZI+PWZfO3JKPcSsp5DUXybNUwBMGNMmAASAABAA+fu11RePsl/ufRctKPxE9fvrlvT5cbvw2BmhvU0E3HDq7NxM/vem13olqQgAASAABEB+HN1VC2tO65+BVgBsuKu+Pit0ddaaOgB2f+/o3ATAJz6cj3c4BIAAEAACoO7mE9rDT743v9+OkwDYOO84e14uHiv3p8d8clLmJ//TvzA1N3+2EQACQAAIgPqa/v/z/YX9epwEQN+8R9Hsqwbuu1NP/ThkbRx48LJF9a838vDoXwAIAAEgAOpuNacz/PbKRf1+nARA3/iLyxbWl2Nu5giopr+wt547ov6oPX6m2kgP2XtcfYXM+OJs3o6jABAAAqCJA2C37UYNyKQlAPrWx1YtCTsuHekTQQoAASAABEDv3W+XnvDU6oE7TgKgb42rBu69Y7eJjAJAAAgAAbD+Hrrv+D5Z3U8ANC4AXlw18KBlVg2kABAAAkAAvIbxBaVjPzW5IcdJAPSfXz1kkgmNAkAACAAB8OovTn3n6KkNO04CoH894bDJJjUKAAEgAATAX3vKkVs09DgJgP73qI9tZmKjABAAAkAA/MXb/tuOavhxEgD9b3yvY8nsTpMbBYAAEAAC4AVvP2uuAGiCAIhefuJMkxsFgAAQAAKgEqZPHpaJ4yQABu7LgJ5RrSY4CgABIACaPQD233WMAGiiAIju/O5RJjgKAAEgAJo9AOJypQKguQIgRp8JjgJAAAiAJg+AQ/YaJwCaLAD2fJ8VAikABIAAaPoA+MC7RwmAJguAudM7THAUAAJAADR7ALS1JeHRlYsFQJMEwL3pcc7TlrQUAAJAAAiAfvTYf54sAJokAOI+DyY3CgABIAAEQN2uzlq498L5AqDgAfDD78wNrTUTGwWAABAAAuBl6wH8+vJFAqCgARAf/U8Y02ZiowAQAAJAAPy1Uye2h5+fv0AAFCwA7jp3Xpg8vt2kRgEgAASAAHh1x/e0hVu/PUcAFCQA1pw2O3SPtPIfBYAAEAACYD3sHF4NK06cKQByHgAXHjsjDGuvmswoAASAABAA629raxLO/OI0AZDTADj58C1CUk1MZBQAAkAACIDeG78XX37gRAGQowCIW/7Gc2YCowAQAAJAAGy0n9p3fHhmzVIBkPEA+OPqpeFje4w1eVEACAABIAD6zmXbd4cnr18qADIaAI9fsyR8cBu7/FEACAABIAD6we0XdYVHrl4sADIWAL9csTAsmtVp0voLR3XVwnsWdtU3Ptp7x8a41w6j6/fMuO42ASAABIAAyL+zp3aE/75koQDISADcc8H8MG3SMJP+WhfMHB4uPWHL8HQ//8mqt+9lXPeNWfUYEAACQAAIgFwbF5WJi8v09Up1RZ+cnri2bwPgptPnhDGjfeP/ov/4wTHhqRuWZnIciMb3aI7cbzMBIAAEgADIt6O7auGGU2f32XG67cy5hZ+gHrys75Zajr9yh3f4xv9FF8/qrL8EmdXJ/y/d/b2jBYAAEAACIN/GrYTP/cr0PjlOZ31xWuEnqZVfm9Unx+r0L0y1qc/LvOT4mbmY/KN3nD1PAAgAASAA8m+1moSvHTllo49TfHxb9Enq8H+YsNHH6f8ePKm+PoNJ/6XGryDyEgDRPPzpRgAIAAEgANZ7sIgvO23IMbr/4gWhva34q9bFNfk39CuK+FLbwXv6xv+V7BhWzdXkH40v0woAASAABEBh3H/XMb3+O2x8MWrXbZvn+/UDPjSm19dQ/Hpgj+1Hm+xfxfguRN4CYM604QJAAAgAAVAs42I0j61ast6fRx2y17imm7C+eNCk9b5+fnvlorDN/BEmegEgAASAABAA2XfLKR31T9Re67O/D7y7eVeu22fH7vCLy9a9nsLVp8yqf3JpkhcAAkAACAABkKuNhHbZZmT9jfUfnT23vtDP3efOC+d8aVr4yM499d0GTVzV+p8ELjh2evjxd+fVj9HtZ80N//WvW+Ru0RgBIAAEgAAQAAKAFAACQAAIAAEgAEgBIAAEgAAQACQFgAAQAAJAAJAUAAJAAAgAAUBSAAgAASAABABJASAABIAAEAD8iyV141oDi2Z1NtT4v2FUV805EQACQAAIAAEgAPrLrs5afUCK38tn6fzG1QzvPGdeOOKjE2zPKwAEgAAQAAJAAPSlcVGcBy9blPlB/b8vWRi2nmvZXgEgAASAABAAAmCjff9WI8Mfrl+am4E9btyz3UKr+AkAASAABIAAEAAb7ISe1vpmOHkb3OPTiviegnMoAASAABAAAoAb4NeOnJK7gf1Fjzt0c+dQAAgAASAABIBBurd2DKuu97bCWfShqxbb8EgACAABIAAEgEG6t75vcVduJ/8XXTq707kUAAJAAAgAAcDe+PE9xuY+APbdqce5FAACQAAIAAHA3njQsvwHwD9+cIxzKQAEgAAQAAKAvXGXbUbmPgDi+gXOpQAQAAJAAAgA9sLRXbXw1A1Lczv5P3HtEisDCgABIAAEgAAwSG+I53xpWm4D4Fufn+ocDpBtbUnuro8Zmw8TAAJAAAgAvppTJ7aHx6/J36eAj65cHCaNa3MOB9AHL12Ym+sjPtmKn7kKAAEgAAQA12F8kz5uuJOXwf2ZNUvDsu27nbsB9vhPb56ba+TcL0/PxTEVAAJAAAiAhht32svL4P7pPAxOBXTkiFq454L5mb8+fn35ojB5fLsAEAACQABwff2Pw7L/C2/5gROdqwa6+YT28IPT52T2+ohbWc+d1pGb4ykABIAAEACZsJJUwreXT83s4P71z05xnjJgtZqEfd7fHS44dnq496IF4eGrFjfUuEX0pSdsGQ740JjcLQ0tAASAABAAmbG1VglX/ueWmTvHFx47oz7xOEcskgJAAAgAAZApuzpr4YffmZuZ87vya7Pqn6E5NxQAAkAACAAB0M+O7W4NPz9/QcPP7c1nzAkjhtecEwoAASAABIAAGLA1Aia1h1+tWNSw8xoDZFy3b/0pAASAABAAAmDAXTK7Mzy2auAXCoqLzsQ3zp0DCgABIAAEgABo4KZBf1w9cHsGPLJySZg3fbhjTwEgAASAABAAjTZuuzsQqwX+/rolYdsFIxxzCgABIAAEgABolsHqqdVb1Z82ONZ0TwkAASAABEDGPPEz/bNaYHy6sP+uYxxjCgABIAAEgADIokk1Cd/9yvQ+P4ef+Yj1/SkABIAAEAACINurBbYm4aqTt3T+SAEgAASAAGjG1QJvP2vjVws8Y/m0+h4EjikFgAAQAAJAAOTECWPawn0XbfhqgRcfNyPUapb4pQAQAAJAAAiA3DlrSkd46KrFvT5nq74+K7Rb358CQAAIAAEgAPLr1nM7exUBN5w6O4zsrDp2FAACQAAIAAFQhCcBr/VOQPzU7/SjpvrlTwoAASAABECRrFaTsN8uPWHFiTPD49csecm6/qd9bkp9XwHHiRQAAkAACICCG7fxbfNrnxQAAkAACACSFAACQAAIAJICQAAIAAEgAEgKAAEgAASAACApAASAABAAAoCkABAAAkAACACSAkAACAABIABICgABIAAEAEkKAAEgAAQASQoAASAABABJCgABIAAEAEkKAAEgAAQASQoAASAABABJCgABIAAEAEkKAAEgAAQASQoAASAABABJCgABIAAEAEkKAAFQiAD4tAAgycIHwKcFwIAHwD5ZP+CH7D1OAJBkwQPgkL3G5SEA9ilSAOyd9QN+0LKxAoAkCx4ABy7LfgBUKpW9ChMA6T/mw1k/4Ad8aIwAIMmCB8D+u43JQwDsWaQnALtl/YDvvWO3ACDJggfAXjuMzsOfAHYp0hOA92T9gG+3sCuTF+u/HzrZYEIydy4/cGImx9Rt5o/IwxOAbQoTAC1JMi/rB3zM6NZMXqwXHzfDYEIyd5775emZHFN7RrVm/tiVSqXZRfoTwOQ8XLD3X7wgcxfr769bkosLliRftKuzFn63anHmxtP7LlqQi+NXqVQmFulPAK15OOhf/+yUTBbrOV+aFpJqYmAhmf3JK6mE078wNZNjaRzj83AMkySpDioQb0gj4NmsH/T3Lc7mewDRFSfODFvPHRFaW4UAyewZx6alszvDJcfPzOw4uv2irjwcy2fSOfP1RQqAQek/6t48XMQ3nzEnsxdv9Jk1S8PDVy0myUz5dDo2ZXnsjGN7HuagUqXys0FFo1KpXJmHg//+rUaGZ2/cKtMXMkly/Y1j+k5bj8xLAFxexAD4el4eZZ32uSluGpIsiN/8tym5+VNKGgCnFC4AyknysbycgI5h1bDmtDluHJLMubecMSd0Dq/m532KcvmAIj4BmJ6nF1rG97SFey+c7wYiyZwax/A4ludp7mlJkqmFC4D29va3xrcb83QiJo9vD/dcIAJIMm/GdV2mTByWt68pnuns7HzLoCJSTpIb8/ZpS4yAn1+wwA1Fkjma/LfYbFj+PqdM58hBRaVUqRybx+9bJ41rEwEkmQPjan+5nPxfeAHwq4UNgEqlsnNeF7kQASRp8u/nJYB3LmwAJEnyrvQf+bwIIEma/F/i83GOHFRk0n/ktXle7rIeAeeLAJLM0uS/+YT2vC+nvHJQ0alUKp/I+5rXE8eKAJLMxKd+xZj849//D2qGAKil/9g/iQCSpMm/7p+KtgPgq/8ZoFy+qgi7X8UFJu4+d54bkSQH2J+dP7/+Q6wQWyhXKlcMahZKSbJHUbbAFAEkOfCT/2ZjijH51x//p3Ni0wRAXOko/Uf/pkgRcJcIIEmTf+99qFqt/s2gZiL9R3++QCcwjOsWASRp8u/15j//OqjZqFQqranPigCS5Gv50/MKOPlXKs+kv/6TQc1I+o8/qWAnUwSQZD9M/hOKN/nHX/8nDGpW4lOA9CA8XcQIuPMcEUCSG+tPvlfQyT/99V8qldoHNTNpBBxXwBMrAkjS5L+uT/+OG9TstLS0bJoejN8V8QSP7W4VASRp8n+5jw9paysPQv0pwP4FPcn1CPjR2XPd0CTZm8m/p7Wok3/89f9RM///8sb0gNwuAkiyuf3xd+cVevJP/WGc80z7f/mngGp1SnpgnhMBJGnyL6jPxbnOjP/Kfwo4ssAnvh4Bd5ztnQCSbMLJPz76P9xM/2pMmvSm9CDdVOQLYMxoEUCSL5/845LqRR7749wW5zgT/bqfAoyMb0iKAJIsvnEztSaY/J+Ic5sZfv0iYNu4P7IIIEmTf879czqnbWdm782WwZXKvxT8onghAs4SASSbzzj29YxqLfrkH+JcZkbvPa8rl8tnFf3iGNVVC7ecMceAQLJpvP2suU0x+ZeT5Jw4l5nON4ChQ4e+PT2Id4kAkjT55+yN/yvb29vfaibf2KWCk+SOZoiAm0UASZN/EX753zhkyJB3mMH7gE033bSlGZ4EdI9sDWtOEwEki+ea02aH0ekPncJP/pXKnemv/yFmbk8Ceu3wjmq45PiZBgyShfHi42aEjmHVZpj8f1yr1Spm7P57EnBn4f92lFTCYX8/Pjx5/VKDB8nc+vvrloRP7Tu+PqY1wy//OEeZqfs/An7UBBdTmDi2LXz9s1PC71YtNpiQzI2PrlwcTjlyi7DZmLZmmPijPzL5D9QaAaXS0CLvHvhyh7VXw4feMzp86ROTwgXHTq//LS0uInTPBfNJsqHGsWj1N2eH8786vT5GxbEqjlnNMj6n3j2kra1sZhYBJEmTPwYiAkqVym0uQpLkAHvX0KFDS2ZiEUCSNPljoGltbd0kPSE/cFGSJE3+zRkBN7k4SZL95A8t8iMCSJImf2SJ9vb2/yMCSJIm/2aNgCS50UVLktxIbzX5iwCSZJNN/kmSvMuMKgJIkiZ/5CoCyuU1LmaSpMlfBJAk+UreYvIvGJt0dPydCCBJmvybNAIqlcpqFzlJ8uWTf7VaHWymFAEkyebxZpO/CCBJmvzRBBFwg4ufJE3+EAEkyebwByZ/ESACSLKJjGN+HPvNgBg0ePDgd5YqlevdGCRp8kcTRkB6cVznBiHJYhp/6MWx3oyHv2LIkCHvEAEkWUivM/ljnbS0tLytXC5f5WYhSZM/mvNJwDVuGpLMvdfGMd3MhvVm6NChb08vnMvcPCSZU8vlNSZ/bBCdnZ1vKVUq57uRSDJ3b/tfEH/Imcmw4Uya9Kb0YjrdDUWSufG0OHabwNAXvC6tySPSi+rPbiySzKx/LlUq/xLHbNMW+pRyubxLeoH90U1GkpnzqfSH2s5mKvQbpVKpO73Q7nSzkWRm/EmSJOPNUBiQzwRLlcoZbjqSbLBJ8k0v+2HAqVQqO6UX4G/dhCQ54P66lCQ7mInQyD8JDPWVAEkO7Fv+SZK8ywyErITA7PSivNmNSZL95g/K5fIsMw6yyOsrlcqy9CK9341Kkn3mfaUk+VAcY00zyDaTJr0pvVj3SC/au924JLnB3lWf+C3qg5w+EXhPOUkuTi/k593MJPmaPl8uly9Kx87t/OJHIUiSpFqqVD7jqQBJvqJ3p7/2D4tjpRkDRY6BrjQGDi6/sOXwc258kk1oHPuuiWNhHBPNDGg6Wlpa3pZe/PMrlcrh6Y1wXnzZxcBAsoDeG8e4uFZ/HPPi2GcGAF5GfaXBUqmnVK1uVS6X90n9bOp/pTfQuakr4h7X6X/+qJwk95BkQ41j0Qtj0or6GJWOVekPmiPj2BXHsDiWxTHNyA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATcP/A/VYuD9l6UjwAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI0LTA5LTA0VDIzOjExOjM1KzAwOjAw9BAQcQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNC0wOS0wNFQyMzoxMTozNSswMDowMIVNqM0AAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAV3pUWHRSYXcgcHJvZmlsZSB0eXBlIGlwdGMAAHic4/IMCHFWKCjKT8vMSeVSAAMjCy5jCxMjE0uTFAMTIESANMNkAyOzVCDL2NTIxMzEHMQHy4BIoEouAOoXEXTyQjWVAAAAAElFTkSuQmCC", Mv = class {
  constructor(e) {
    this.id = "controller", this.name = "Controller", this.version = "0.4.0", this.icon = $v, this.subscriptions = [], this.request = async (n) => {
      switch (n.type) {
        case "wallet_getPermissions":
          return await this.probe(), this.account ? [Dv.ACCOUNTS] : [];
        case "wallet_requestAccounts":
          return this.account ? [this.account.address] : (this.account = await this.probe(), this.account || (this.account = await this.connect()), this.account ? [this.account.address] : []);
        case "wallet_watchAsset":
          throw {
            code: 63,
            message: "An unexpected error occurred",
            data: "wallet_watchAsset not implemented"
          };
        case "wallet_addStarknetChain":
          throw {
            code: 63,
            message: "An unexpected error occurred",
            data: "wallet_addStarknetChain not implemented"
          };
        case "wallet_switchStarknetChain":
          throw {
            code: 63,
            message: "An unexpected error occurred",
            data: "wallet_switchStarknetChain not implemented"
          };
        case "wallet_requestChainId":
          if (!this.account)
            throw {
              code: 63,
              message: "An unexpected error occurred",
              data: "wallet_deploymentData not implemented"
            };
          return await this.account.getChainId();
        case "wallet_deploymentData":
          throw {
            code: 63,
            message: "An unexpected error occurred",
            data: "wallet_deploymentData not implemented"
          };
        case "wallet_addInvokeTransaction":
          if (!this.account)
            throw {
              code: 63,
              message: "An unexpected error occurred",
              data: "wallet_deploymentData not implemented"
            };
          let r = n.params;
          return await this.account.execute(
            r.calls.map((a) => ({
              contractAddress: a.contract_address,
              entrypoint: a.entry_point,
              calldata: a.calldata
            }))
          );
        case "wallet_addDeclareTransaction":
          throw {
            code: 63,
            message: "An unexpected error occurred",
            data: "wallet_addDeclareTransaction not implemented"
          };
        case "wallet_signTypedData": {
          if (!this.account)
            throw {
              code: 63,
              message: "An unexpected error occurred",
              data: "Account not initialized"
            };
          return await this.account.signMessage(n.params);
        }
        case "wallet_supportedSpecs":
          return [];
        case "wallet_supportedWalletApi":
          return [];
        default:
          throw {
            code: 63,
            message: "An unexpected error occurred",
            data: `Unknown RPC call type: ${n.type}`
          };
      }
    }, this.on = (n, r) => {
      if (n !== "accountsChanged" && n !== "networkChanged")
        throw new Error(`Unknown event: ${n}`);
      this.subscriptions.push({ type: n, handler: r });
    }, this.off = (n, r) => {
      if (n !== "accountsChanged" && n !== "networkChanged")
        throw new Error(`Unknown event: ${n}`);
      const a = this.subscriptions.findIndex(
        (i) => i.type === n && i.handler === r
      );
      a >= 0 && this.subscriptions.splice(a, 1);
    };
    const { rpc: t } = e;
    this.rpc = new URL(t);
  }
}, Hv = class extends Mv {
  constructor(e) {
    var n;
    const { rpc: t } = e;
    super({ rpc: t }), this.iframes = {
      keychain: new Rv({
        ...e,
        onClose: (n = this.keychain) == null ? void 0 : n.reset,
        onConnect: (r) => {
          this.keychain = r;
        }
      })
    }, this.options = e, typeof window < "u" && (window.starknet_controller = this);
  }
  async probe() {
    try {
      if (await this.waitForKeychain(), !this.keychain) {
        console.error(new ut().message);
        return;
      }
      const e = await this.keychain.probe(
        this.rpc.toString()
      );
      this.account = new uu(
        this,
        e.address,
        this.keychain,
        this.options,
        this.iframes.keychain
      );
    } catch (e) {
      console.error(e);
      return;
    }
    if (!this.iframes.profile) {
      const e = await this.keychain.username();
      this.iframes.profile = new Lv({
        ...this.options,
        onConnect: (t) => {
          this.profile = t;
        },
        methods: {
          openSettings: this.openSettings.bind(this),
          openPurchaseCredits: this.openPurchaseCredits.bind(this),
          openExecute: this.openExecute.bind(this)
        },
        rpcUrl: this.rpc.toString(),
        username: e
      });
    }
    return this.account;
  }
  async connect() {
    if (this.account)
      return this.account;
    if (!this.keychain || !this.iframes.keychain) {
      console.error(new ut().message);
      return;
    }
    document.hasStorageAccess && (await document.hasStorageAccess() || await document.requestStorageAccess()), this.iframes.keychain.open();
    try {
      let e = await this.keychain.connect(
        this.options.policies || [],
        this.rpc.toString()
      );
      if (e.code !== "SUCCESS")
        throw new Error(e.message);
      return e = e, this.account = new uu(
        this,
        e.address,
        this.keychain,
        this.options,
        this.iframes.keychain
      ), this.account;
    } catch (e) {
      console.log(e);
    } finally {
      this.iframes.keychain.close();
    }
  }
  async disconnect() {
    if (!this.keychain) {
      console.error(new ut().message);
      return;
    }
    return document.hasStorageAccess && (await document.hasStorageAccess() || await document.requestStorageAccess()), this.account = void 0, this.keychain.disconnect();
  }
  async openProfile(e = "inventory") {
    var t, n;
    if (!this.profile || !((t = this.iframes.profile) != null && t.url)) {
      console.error("Profile is not ready");
      return;
    }
    if (!this.account) {
      console.error("Account is not ready");
      return;
    }
    this.profile.navigate(`${(n = this.iframes.profile.url) == null ? void 0 : n.pathname}/${e}`), this.iframes.profile.open();
  }
  async openSettings() {
    var t;
    if (!this.keychain || !this.iframes.keychain)
      return console.error(new ut().message), null;
    (t = this.iframes.profile) == null || t.close(), this.iframes.keychain.open();
    const e = await this.keychain.openSettings();
    return this.iframes.keychain.close(), !(e && e.code === "NOT_CONNECTED");
  }
  revoke(e, t) {
    return this.keychain ? this.keychain.revoke(e) : (console.error(new ut().message), null);
  }
  username() {
    if (!this.keychain) {
      console.error(new ut().message);
      return;
    }
    return this.keychain.username();
  }
  fetchControllers(e) {
    if (!this.keychain)
      throw new ut().message;
    return this.keychain.fetchControllers(e);
  }
  openPurchaseCredits() {
    if (!this.keychain || !this.iframes.keychain) {
      console.error(new ut().message);
      return;
    }
    if (!this.iframes.profile) {
      console.error("Profile is not ready");
      return;
    }
    this.iframes.profile.close(), this.iframes.keychain.open(), this.keychain.openPurchaseCredits();
  }
  openExecute(e) {
    if (!this.keychain || !this.iframes.keychain) {
      console.error(new ut().message);
      return;
    }
    if (!this.iframes.profile) {
      console.error("Profile is not ready");
      return;
    }
    this.iframes.profile.close(), this.iframes.keychain.open(), this.keychain.execute(e);
  }
  async delegateAccount() {
    return this.keychain ? await this.keychain.delegateAccount() : (console.error(new ut().message), null);
  }
  waitForKeychain({
    timeout: e = 5e3,
    interval: t = 100
  } = {}) {
    return new Promise((n, r) => {
      const a = Date.now(), i = setInterval(() => {
        if (Date.now() - a > e) {
          clearInterval(i), r(new Error("Timeout waiting for keychain"));
          return;
        }
        this.keychain && (clearInterval(i), n());
      }, t);
    });
  }
};
const Ca = "0x03cae44b2932cf573cad525396df80a09a6897aafc6b9cb2deb5e5b68e5e38e9", Uv = [
  {
    target: Ca,
    method: "create_player",
    description: "Create a new player"
  },
  {
    target: Ca,
    method: "create_game",
    description: "Create a game"
  },
  {
    target: Ca,
    method: "move",
    description: "Move character inside level"
  },
  {
    target: Ca,
    method: "end_game",
    description: "End a game"
  }
], Vv = () => {
  const e = "dod-dev";
  return console.log(`init with ${e} || true`), {
    slot: e,
    namespace: "depths_of_dread",
    policies: Uv,
    rpc: `https://api.cartridge.gg/x/${e}/katana`
  };
}, Fv = { class: "flex flex-col justify-center items-center h-full" }, qv = {
  key: 0,
  class: "flex flex-col justify-center items-center h-full"
}, Zv = /* @__PURE__ */ zg({
  __name: "ControllerVue",
  setup(e) {
    const t = ic(), n = ic(), r = new Hv(Vv()), a = async () => {
      const s = await r.connect();
      s && (t.value = s, n.value = await r.username());
    }, i = () => {
      r.openProfile();
    }, o = async () => {
      await r.disconnect(), t.value = void 0, n.value = void 0;
    };
    return Rg(async () => {
      await r.probe() && await a();
    }), (s, l) => (_i(), xi("main", Fv, [
      l[0] || (l[0] = Dn("h1", null, "Vue + Controller Test", -1)),
      t.value ? (_i(), xi("div", qv, [
        Dn("p", null, "Account: " + oc(t.value.address), 1),
        Dn("p", null, "Username: " + oc(n.value), 1),
        Dn("div", { class: "flex justify-center items-center" }, [
          Dn("button", {
            onClick: i,
            class: "link-highlight m-4 cursor-pointer text-lg"
          }, "Profile"),
          Dn("button", {
            onClick: o,
            class: "link-highlight m-4 cursor-pointer text-lg"
          }, " Disconnect ")
        ])
      ])) : (_i(), xi("button", {
        key: 1,
        onClick: a,
        class: "link-highlight m-4 cursor-pointer text-lg"
      }, " Connect "))
    ]));
  }
}), c_ = Lg(Zv).mount("#app");
export {
  c_ as default
};

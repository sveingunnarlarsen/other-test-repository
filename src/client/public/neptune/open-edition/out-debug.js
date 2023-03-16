(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // (disabled):crypto
  var require_crypto = __commonJS({
    "(disabled):crypto"() {
    }
  });

  // node_modules/crypto-js/core.js
  var require_core = __commonJS({
    "node_modules/crypto-js/core.js"(exports, module) {
      (function(root, factory) {
        if (typeof exports === "object") {
          module.exports = exports = factory();
        } else if (typeof define === "function" && define.amd) {
          define([], factory);
        } else {
          root.CryptoJS = factory();
        }
      })(exports, function() {
        var CryptoJS2 = CryptoJS2 || function(Math2, undefined2) {
          var crypto;
          if (typeof window !== "undefined" && window.crypto) {
            crypto = window.crypto;
          }
          if (typeof self !== "undefined" && self.crypto) {
            crypto = self.crypto;
          }
          if (typeof globalThis !== "undefined" && globalThis.crypto) {
            crypto = globalThis.crypto;
          }
          if (!crypto && typeof window !== "undefined" && window.msCrypto) {
            crypto = window.msCrypto;
          }
          if (!crypto && typeof global !== "undefined" && global.crypto) {
            crypto = global.crypto;
          }
          if (!crypto && typeof __require === "function") {
            try {
              crypto = require_crypto();
            } catch (err) {
            }
          }
          var cryptoSecureRandomInt = function() {
            if (crypto) {
              if (typeof crypto.getRandomValues === "function") {
                try {
                  return crypto.getRandomValues(new Uint32Array(1))[0];
                } catch (err) {
                }
              }
              if (typeof crypto.randomBytes === "function") {
                try {
                  return crypto.randomBytes(4).readInt32LE();
                } catch (err) {
                }
              }
            }
            throw new Error("Native crypto module could not be used to get secure random number.");
          };
          var create = Object.create || function() {
            function F() {
            }
            return function(obj) {
              var subtype;
              F.prototype = obj;
              subtype = new F();
              F.prototype = null;
              return subtype;
            };
          }();
          var C = {};
          var C_lib = C.lib = {};
          var Base = C_lib.Base = function() {
            return {
              /**
               * Creates a new object that inherits from this object.
               *
               * @param {Object} overrides Properties to copy into the new object.
               *
               * @return {Object} The new object.
               *
               * @static
               *
               * @example
               *
               *     var MyType = CryptoJS.lib.Base.extend({
               *         field: 'value',
               *
               *         method: function () {
               *         }
               *     });
               */
              extend: function(overrides) {
                var subtype = create(this);
                if (overrides) {
                  subtype.mixIn(overrides);
                }
                if (!subtype.hasOwnProperty("init") || this.init === subtype.init) {
                  subtype.init = function() {
                    subtype.$super.init.apply(this, arguments);
                  };
                }
                subtype.init.prototype = subtype;
                subtype.$super = this;
                return subtype;
              },
              /**
               * Extends this object and runs the init method.
               * Arguments to create() will be passed to init().
               *
               * @return {Object} The new object.
               *
               * @static
               *
               * @example
               *
               *     var instance = MyType.create();
               */
              create: function() {
                var instance = this.extend();
                instance.init.apply(instance, arguments);
                return instance;
              },
              /**
               * Initializes a newly created object.
               * Override this method to add some logic when your objects are created.
               *
               * @example
               *
               *     var MyType = CryptoJS.lib.Base.extend({
               *         init: function () {
               *             // ...
               *         }
               *     });
               */
              init: function() {
              },
              /**
               * Copies properties into this object.
               *
               * @param {Object} properties The properties to mix in.
               *
               * @example
               *
               *     MyType.mixIn({
               *         field: 'value'
               *     });
               */
              mixIn: function(properties) {
                for (var propertyName in properties) {
                  if (properties.hasOwnProperty(propertyName)) {
                    this[propertyName] = properties[propertyName];
                  }
                }
                if (properties.hasOwnProperty("toString")) {
                  this.toString = properties.toString;
                }
              },
              /**
               * Creates a copy of this object.
               *
               * @return {Object} The clone.
               *
               * @example
               *
               *     var clone = instance.clone();
               */
              clone: function() {
                return this.init.prototype.extend(this);
              }
            };
          }();
          var WordArray = C_lib.WordArray = Base.extend({
            /**
             * Initializes a newly created word array.
             *
             * @param {Array} words (Optional) An array of 32-bit words.
             * @param {number} sigBytes (Optional) The number of significant bytes in the words.
             *
             * @example
             *
             *     var wordArray = CryptoJS.lib.WordArray.create();
             *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
             *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
             */
            init: function(words, sigBytes) {
              words = this.words = words || [];
              if (sigBytes != undefined2) {
                this.sigBytes = sigBytes;
              } else {
                this.sigBytes = words.length * 4;
              }
            },
            /**
             * Converts this word array to a string.
             *
             * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
             *
             * @return {string} The stringified word array.
             *
             * @example
             *
             *     var string = wordArray + '';
             *     var string = wordArray.toString();
             *     var string = wordArray.toString(CryptoJS.enc.Utf8);
             */
            toString: function(encoder) {
              return (encoder || Hex).stringify(this);
            },
            /**
             * Concatenates a word array to this word array.
             *
             * @param {WordArray} wordArray The word array to append.
             *
             * @return {WordArray} This word array.
             *
             * @example
             *
             *     wordArray1.concat(wordArray2);
             */
            concat: function(wordArray) {
              var thisWords = this.words;
              var thatWords = wordArray.words;
              var thisSigBytes = this.sigBytes;
              var thatSigBytes = wordArray.sigBytes;
              this.clamp();
              if (thisSigBytes % 4) {
                for (var i = 0; i < thatSigBytes; i++) {
                  var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                  thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
                }
              } else {
                for (var j = 0; j < thatSigBytes; j += 4) {
                  thisWords[thisSigBytes + j >>> 2] = thatWords[j >>> 2];
                }
              }
              this.sigBytes += thatSigBytes;
              return this;
            },
            /**
             * Removes insignificant bits.
             *
             * @example
             *
             *     wordArray.clamp();
             */
            clamp: function() {
              var words = this.words;
              var sigBytes = this.sigBytes;
              words[sigBytes >>> 2] &= 4294967295 << 32 - sigBytes % 4 * 8;
              words.length = Math2.ceil(sigBytes / 4);
            },
            /**
             * Creates a copy of this word array.
             *
             * @return {WordArray} The clone.
             *
             * @example
             *
             *     var clone = wordArray.clone();
             */
            clone: function() {
              var clone = Base.clone.call(this);
              clone.words = this.words.slice(0);
              return clone;
            },
            /**
             * Creates a word array filled with random bytes.
             *
             * @param {number} nBytes The number of random bytes to generate.
             *
             * @return {WordArray} The random word array.
             *
             * @static
             *
             * @example
             *
             *     var wordArray = CryptoJS.lib.WordArray.random(16);
             */
            random: function(nBytes) {
              var words = [];
              for (var i = 0; i < nBytes; i += 4) {
                words.push(cryptoSecureRandomInt());
              }
              return new WordArray.init(words, nBytes);
            }
          });
          var C_enc = C.enc = {};
          var Hex = C_enc.Hex = {
            /**
             * Converts a word array to a hex string.
             *
             * @param {WordArray} wordArray The word array.
             *
             * @return {string} The hex string.
             *
             * @static
             *
             * @example
             *
             *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
             */
            stringify: function(wordArray) {
              var words = wordArray.words;
              var sigBytes = wordArray.sigBytes;
              var hexChars = [];
              for (var i = 0; i < sigBytes; i++) {
                var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                hexChars.push((bite >>> 4).toString(16));
                hexChars.push((bite & 15).toString(16));
              }
              return hexChars.join("");
            },
            /**
             * Converts a hex string to a word array.
             *
             * @param {string} hexStr The hex string.
             *
             * @return {WordArray} The word array.
             *
             * @static
             *
             * @example
             *
             *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
             */
            parse: function(hexStr) {
              var hexStrLength = hexStr.length;
              var words = [];
              for (var i = 0; i < hexStrLength; i += 2) {
                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
              }
              return new WordArray.init(words, hexStrLength / 2);
            }
          };
          var Latin1 = C_enc.Latin1 = {
            /**
             * Converts a word array to a Latin1 string.
             *
             * @param {WordArray} wordArray The word array.
             *
             * @return {string} The Latin1 string.
             *
             * @static
             *
             * @example
             *
             *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
             */
            stringify: function(wordArray) {
              var words = wordArray.words;
              var sigBytes = wordArray.sigBytes;
              var latin1Chars = [];
              for (var i = 0; i < sigBytes; i++) {
                var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                latin1Chars.push(String.fromCharCode(bite));
              }
              return latin1Chars.join("");
            },
            /**
             * Converts a Latin1 string to a word array.
             *
             * @param {string} latin1Str The Latin1 string.
             *
             * @return {WordArray} The word array.
             *
             * @static
             *
             * @example
             *
             *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
             */
            parse: function(latin1Str) {
              var latin1StrLength = latin1Str.length;
              var words = [];
              for (var i = 0; i < latin1StrLength; i++) {
                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
              }
              return new WordArray.init(words, latin1StrLength);
            }
          };
          var Utf8 = C_enc.Utf8 = {
            /**
             * Converts a word array to a UTF-8 string.
             *
             * @param {WordArray} wordArray The word array.
             *
             * @return {string} The UTF-8 string.
             *
             * @static
             *
             * @example
             *
             *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
             */
            stringify: function(wordArray) {
              try {
                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
              } catch (e) {
                throw new Error("Malformed UTF-8 data");
              }
            },
            /**
             * Converts a UTF-8 string to a word array.
             *
             * @param {string} utf8Str The UTF-8 string.
             *
             * @return {WordArray} The word array.
             *
             * @static
             *
             * @example
             *
             *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
             */
            parse: function(utf8Str) {
              return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
            }
          };
          var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
            /**
             * Resets this block algorithm's data buffer to its initial state.
             *
             * @example
             *
             *     bufferedBlockAlgorithm.reset();
             */
            reset: function() {
              this._data = new WordArray.init();
              this._nDataBytes = 0;
            },
            /**
             * Adds new data to this block algorithm's buffer.
             *
             * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
             *
             * @example
             *
             *     bufferedBlockAlgorithm._append('data');
             *     bufferedBlockAlgorithm._append(wordArray);
             */
            _append: function(data) {
              if (typeof data == "string") {
                data = Utf8.parse(data);
              }
              this._data.concat(data);
              this._nDataBytes += data.sigBytes;
            },
            /**
             * Processes available data blocks.
             *
             * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
             *
             * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
             *
             * @return {WordArray} The processed data.
             *
             * @example
             *
             *     var processedData = bufferedBlockAlgorithm._process();
             *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
             */
            _process: function(doFlush) {
              var processedWords;
              var data = this._data;
              var dataWords = data.words;
              var dataSigBytes = data.sigBytes;
              var blockSize = this.blockSize;
              var blockSizeBytes = blockSize * 4;
              var nBlocksReady = dataSigBytes / blockSizeBytes;
              if (doFlush) {
                nBlocksReady = Math2.ceil(nBlocksReady);
              } else {
                nBlocksReady = Math2.max((nBlocksReady | 0) - this._minBufferSize, 0);
              }
              var nWordsReady = nBlocksReady * blockSize;
              var nBytesReady = Math2.min(nWordsReady * 4, dataSigBytes);
              if (nWordsReady) {
                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
                  this._doProcessBlock(dataWords, offset);
                }
                processedWords = dataWords.splice(0, nWordsReady);
                data.sigBytes -= nBytesReady;
              }
              return new WordArray.init(processedWords, nBytesReady);
            },
            /**
             * Creates a copy of this object.
             *
             * @return {Object} The clone.
             *
             * @example
             *
             *     var clone = bufferedBlockAlgorithm.clone();
             */
            clone: function() {
              var clone = Base.clone.call(this);
              clone._data = this._data.clone();
              return clone;
            },
            _minBufferSize: 0
          });
          var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
            /**
             * Configuration options.
             */
            cfg: Base.extend(),
            /**
             * Initializes a newly created hasher.
             *
             * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
             *
             * @example
             *
             *     var hasher = CryptoJS.algo.SHA256.create();
             */
            init: function(cfg) {
              this.cfg = this.cfg.extend(cfg);
              this.reset();
            },
            /**
             * Resets this hasher to its initial state.
             *
             * @example
             *
             *     hasher.reset();
             */
            reset: function() {
              BufferedBlockAlgorithm.reset.call(this);
              this._doReset();
            },
            /**
             * Updates this hasher with a message.
             *
             * @param {WordArray|string} messageUpdate The message to append.
             *
             * @return {Hasher} This hasher.
             *
             * @example
             *
             *     hasher.update('message');
             *     hasher.update(wordArray);
             */
            update: function(messageUpdate) {
              this._append(messageUpdate);
              this._process();
              return this;
            },
            /**
             * Finalizes the hash computation.
             * Note that the finalize operation is effectively a destructive, read-once operation.
             *
             * @param {WordArray|string} messageUpdate (Optional) A final message update.
             *
             * @return {WordArray} The hash.
             *
             * @example
             *
             *     var hash = hasher.finalize();
             *     var hash = hasher.finalize('message');
             *     var hash = hasher.finalize(wordArray);
             */
            finalize: function(messageUpdate) {
              if (messageUpdate) {
                this._append(messageUpdate);
              }
              var hash = this._doFinalize();
              return hash;
            },
            blockSize: 512 / 32,
            /**
             * Creates a shortcut function to a hasher's object interface.
             *
             * @param {Hasher} hasher The hasher to create a helper for.
             *
             * @return {Function} The shortcut function.
             *
             * @static
             *
             * @example
             *
             *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
             */
            _createHelper: function(hasher) {
              return function(message, cfg) {
                return new hasher.init(cfg).finalize(message);
              };
            },
            /**
             * Creates a shortcut function to the HMAC's object interface.
             *
             * @param {Hasher} hasher The hasher to use in this HMAC helper.
             *
             * @return {Function} The shortcut function.
             *
             * @static
             *
             * @example
             *
             *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
             */
            _createHmacHelper: function(hasher) {
              return function(message, key) {
                return new C_algo.HMAC.init(hasher, key).finalize(message);
              };
            }
          });
          var C_algo = C.algo = {};
          return C;
        }(Math);
        return CryptoJS2;
      });
    }
  });

  // node_modules/crypto-js/x64-core.js
  var require_x64_core = __commonJS({
    "node_modules/crypto-js/x64-core.js"(exports, module) {
      (function(root, factory) {
        if (typeof exports === "object") {
          module.exports = exports = factory(require_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS2) {
        (function(undefined2) {
          var C = CryptoJS2;
          var C_lib = C.lib;
          var Base = C_lib.Base;
          var X32WordArray = C_lib.WordArray;
          var C_x64 = C.x64 = {};
          var X64Word = C_x64.Word = Base.extend({
            /**
             * Initializes a newly created 64-bit word.
             *
             * @param {number} high The high 32 bits.
             * @param {number} low The low 32 bits.
             *
             * @example
             *
             *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
             */
            init: function(high, low) {
              this.high = high;
              this.low = low;
            }
            /**
             * Bitwise NOTs this word.
             *
             * @return {X64Word} A new x64-Word object after negating.
             *
             * @example
             *
             *     var negated = x64Word.not();
             */
            // not: function () {
            // var high = ~this.high;
            // var low = ~this.low;
            // return X64Word.create(high, low);
            // },
            /**
             * Bitwise ANDs this word with the passed word.
             *
             * @param {X64Word} word The x64-Word to AND with this word.
             *
             * @return {X64Word} A new x64-Word object after ANDing.
             *
             * @example
             *
             *     var anded = x64Word.and(anotherX64Word);
             */
            // and: function (word) {
            // var high = this.high & word.high;
            // var low = this.low & word.low;
            // return X64Word.create(high, low);
            // },
            /**
             * Bitwise ORs this word with the passed word.
             *
             * @param {X64Word} word The x64-Word to OR with this word.
             *
             * @return {X64Word} A new x64-Word object after ORing.
             *
             * @example
             *
             *     var ored = x64Word.or(anotherX64Word);
             */
            // or: function (word) {
            // var high = this.high | word.high;
            // var low = this.low | word.low;
            // return X64Word.create(high, low);
            // },
            /**
             * Bitwise XORs this word with the passed word.
             *
             * @param {X64Word} word The x64-Word to XOR with this word.
             *
             * @return {X64Word} A new x64-Word object after XORing.
             *
             * @example
             *
             *     var xored = x64Word.xor(anotherX64Word);
             */
            // xor: function (word) {
            // var high = this.high ^ word.high;
            // var low = this.low ^ word.low;
            // return X64Word.create(high, low);
            // },
            /**
             * Shifts this word n bits to the left.
             *
             * @param {number} n The number of bits to shift.
             *
             * @return {X64Word} A new x64-Word object after shifting.
             *
             * @example
             *
             *     var shifted = x64Word.shiftL(25);
             */
            // shiftL: function (n) {
            // if (n < 32) {
            // var high = (this.high << n) | (this.low >>> (32 - n));
            // var low = this.low << n;
            // } else {
            // var high = this.low << (n - 32);
            // var low = 0;
            // }
            // return X64Word.create(high, low);
            // },
            /**
             * Shifts this word n bits to the right.
             *
             * @param {number} n The number of bits to shift.
             *
             * @return {X64Word} A new x64-Word object after shifting.
             *
             * @example
             *
             *     var shifted = x64Word.shiftR(7);
             */
            // shiftR: function (n) {
            // if (n < 32) {
            // var low = (this.low >>> n) | (this.high << (32 - n));
            // var high = this.high >>> n;
            // } else {
            // var low = this.high >>> (n - 32);
            // var high = 0;
            // }
            // return X64Word.create(high, low);
            // },
            /**
             * Rotates this word n bits to the left.
             *
             * @param {number} n The number of bits to rotate.
             *
             * @return {X64Word} A new x64-Word object after rotating.
             *
             * @example
             *
             *     var rotated = x64Word.rotL(25);
             */
            // rotL: function (n) {
            // return this.shiftL(n).or(this.shiftR(64 - n));
            // },
            /**
             * Rotates this word n bits to the right.
             *
             * @param {number} n The number of bits to rotate.
             *
             * @return {X64Word} A new x64-Word object after rotating.
             *
             * @example
             *
             *     var rotated = x64Word.rotR(7);
             */
            // rotR: function (n) {
            // return this.shiftR(n).or(this.shiftL(64 - n));
            // },
            /**
             * Adds this word with the passed word.
             *
             * @param {X64Word} word The x64-Word to add with this word.
             *
             * @return {X64Word} A new x64-Word object after adding.
             *
             * @example
             *
             *     var added = x64Word.add(anotherX64Word);
             */
            // add: function (word) {
            // var low = (this.low + word.low) | 0;
            // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
            // var high = (this.high + word.high + carry) | 0;
            // return X64Word.create(high, low);
            // }
          });
          var X64WordArray = C_x64.WordArray = Base.extend({
            /**
             * Initializes a newly created word array.
             *
             * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
             * @param {number} sigBytes (Optional) The number of significant bytes in the words.
             *
             * @example
             *
             *     var wordArray = CryptoJS.x64.WordArray.create();
             *
             *     var wordArray = CryptoJS.x64.WordArray.create([
             *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
             *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
             *     ]);
             *
             *     var wordArray = CryptoJS.x64.WordArray.create([
             *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
             *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
             *     ], 10);
             */
            init: function(words, sigBytes) {
              words = this.words = words || [];
              if (sigBytes != undefined2) {
                this.sigBytes = sigBytes;
              } else {
                this.sigBytes = words.length * 8;
              }
            },
            /**
             * Converts this 64-bit word array to a 32-bit word array.
             *
             * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
             *
             * @example
             *
             *     var x32WordArray = x64WordArray.toX32();
             */
            toX32: function() {
              var x64Words = this.words;
              var x64WordsLength = x64Words.length;
              var x32Words = [];
              for (var i = 0; i < x64WordsLength; i++) {
                var x64Word = x64Words[i];
                x32Words.push(x64Word.high);
                x32Words.push(x64Word.low);
              }
              return X32WordArray.create(x32Words, this.sigBytes);
            },
            /**
             * Creates a copy of this word array.
             *
             * @return {X64WordArray} The clone.
             *
             * @example
             *
             *     var clone = x64WordArray.clone();
             */
            clone: function() {
              var clone = Base.clone.call(this);
              var words = clone.words = this.words.slice(0);
              var wordsLength = words.length;
              for (var i = 0; i < wordsLength; i++) {
                words[i] = words[i].clone();
              }
              return clone;
            }
          });
        })();
        return CryptoJS2;
      });
    }
  });

  // node_modules/crypto-js/lib-typedarrays.js
  var require_lib_typedarrays = __commonJS({
    "node_modules/crypto-js/lib-typedarrays.js"(exports, module) {
      (function(root, factory) {
        if (typeof exports === "object") {
          module.exports = exports = factory(require_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS2) {
        (function() {
          if (typeof ArrayBuffer != "function") {
            return;
          }
          var C = CryptoJS2;
          var C_lib = C.lib;
          var WordArray = C_lib.WordArray;
          var superInit = WordArray.init;
          var subInit = WordArray.init = function(typedArray) {
            if (typedArray instanceof ArrayBuffer) {
              typedArray = new Uint8Array(typedArray);
            }
            if (typedArray instanceof Int8Array || typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray || typedArray instanceof Int16Array || typedArray instanceof Uint16Array || typedArray instanceof Int32Array || typedArray instanceof Uint32Array || typedArray instanceof Float32Array || typedArray instanceof Float64Array) {
              typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
            }
            if (typedArray instanceof Uint8Array) {
              var typedArrayByteLength = typedArray.byteLength;
              var words = [];
              for (var i = 0; i < typedArrayByteLength; i++) {
                words[i >>> 2] |= typedArray[i] << 24 - i % 4 * 8;
              }
              superInit.call(this, words, typedArrayByteLength);
            } else {
              superInit.apply(this, arguments);
            }
          };
          subInit.prototype = WordArray;
        })();
        return CryptoJS2.lib.WordArray;
      });
    }
  });

  // node_modules/crypto-js/enc-utf16.js
  var require_enc_utf16 = __commonJS({
    "node_modules/crypto-js/enc-utf16.js"(exports, module) {
      (function(root, factory) {
        if (typeof exports === "object") {
          module.exports = exports = factory(require_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS2) {
        (function() {
          var C = CryptoJS2;
          var C_lib = C.lib;
          var WordArray = C_lib.WordArray;
          var C_enc = C.enc;
          var Utf16BE = C_enc.Utf16 = C_enc.Utf16BE = {
            /**
             * Converts a word array to a UTF-16 BE string.
             *
             * @param {WordArray} wordArray The word array.
             *
             * @return {string} The UTF-16 BE string.
             *
             * @static
             *
             * @example
             *
             *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
             */
            stringify: function(wordArray) {
              var words = wordArray.words;
              var sigBytes = wordArray.sigBytes;
              var utf16Chars = [];
              for (var i = 0; i < sigBytes; i += 2) {
                var codePoint = words[i >>> 2] >>> 16 - i % 4 * 8 & 65535;
                utf16Chars.push(String.fromCharCode(codePoint));
              }
              return utf16Chars.join("");
            },
            /**
             * Converts a UTF-16 BE string to a word array.
             *
             * @param {string} utf16Str The UTF-16 BE string.
             *
             * @return {WordArray} The word array.
             *
             * @static
             *
             * @example
             *
             *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
             */
            parse: function(utf16Str) {
              var utf16StrLength = utf16Str.length;
              var words = [];
              for (var i = 0; i < utf16StrLength; i++) {
                words[i >>> 1] |= utf16Str.charCodeAt(i) << 16 - i % 2 * 16;
              }
              return WordArray.create(words, utf16StrLength * 2);
            }
          };
          C_enc.Utf16LE = {
            /**
             * Converts a word array to a UTF-16 LE string.
             *
             * @param {WordArray} wordArray The word array.
             *
             * @return {string} The UTF-16 LE string.
             *
             * @static
             *
             * @example
             *
             *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
             */
            stringify: function(wordArray) {
              var words = wordArray.words;
              var sigBytes = wordArray.sigBytes;
              var utf16Chars = [];
              for (var i = 0; i < sigBytes; i += 2) {
                var codePoint = swapEndian(words[i >>> 2] >>> 16 - i % 4 * 8 & 65535);
                utf16Chars.push(String.fromCharCode(codePoint));
              }
              return utf16Chars.join("");
            },
            /**
             * Converts a UTF-16 LE string to a word array.
             *
             * @param {string} utf16Str The UTF-16 LE string.
             *
             * @return {WordArray} The word array.
             *
             * @static
             *
             * @example
             *
             *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
             */
            parse: function(utf16Str) {
              var utf16StrLength = utf16Str.length;
              var words = [];
              for (var i = 0; i < utf16StrLength; i++) {
                words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << 16 - i % 2 * 16);
              }
              return WordArray.create(words, utf16StrLength * 2);
            }
          };
          function swapEndian(word) {
            return word << 8 & 4278255360 | word >>> 8 & 16711935;
          }
        })();
        return CryptoJS2.enc.Utf16;
      });
    }
  });

  // node_modules/crypto-js/enc-base64.js
  var require_enc_base64 = __commonJS({
    "node_modules/crypto-js/enc-base64.js"(exports, module) {
      (function(root, factory) {
        if (typeof exports === "object") {
          module.exports = exports = factory(require_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS2) {
        (function() {
          var C = CryptoJS2;
          var C_lib = C.lib;
          var WordArray = C_lib.WordArray;
          var C_enc = C.enc;
          var Base64 = C_enc.Base64 = {
            /**
             * Converts a word array to a Base64 string.
             *
             * @param {WordArray} wordArray The word array.
             *
             * @return {string} The Base64 string.
             *
             * @static
             *
             * @example
             *
             *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
             */
            stringify: function(wordArray) {
              var words = wordArray.words;
              var sigBytes = wordArray.sigBytes;
              var map = this._map;
              wordArray.clamp();
              var base64Chars = [];
              for (var i = 0; i < sigBytes; i += 3) {
                var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
                var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
                var triplet = byte1 << 16 | byte2 << 8 | byte3;
                for (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
                  base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 63));
                }
              }
              var paddingChar = map.charAt(64);
              if (paddingChar) {
                while (base64Chars.length % 4) {
                  base64Chars.push(paddingChar);
                }
              }
              return base64Chars.join("");
            },
            /**
             * Converts a Base64 string to a word array.
             *
             * @param {string} base64Str The Base64 string.
             *
             * @return {WordArray} The word array.
             *
             * @static
             *
             * @example
             *
             *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
             */
            parse: function(base64Str) {
              var base64StrLength = base64Str.length;
              var map = this._map;
              var reverseMap = this._reverseMap;
              if (!reverseMap) {
                reverseMap = this._reverseMap = [];
                for (var j = 0; j < map.length; j++) {
                  reverseMap[map.charCodeAt(j)] = j;
                }
              }
              var paddingChar = map.charAt(64);
              if (paddingChar) {
                var paddingIndex = base64Str.indexOf(paddingChar);
                if (paddingIndex !== -1) {
                  base64StrLength = paddingIndex;
                }
              }
              return parseLoop(base64Str, base64StrLength, reverseMap);
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
          };
          function parseLoop(base64Str, base64StrLength, reverseMap) {
            var words = [];
            var nBytes = 0;
            for (var i = 0; i < base64StrLength; i++) {
              if (i % 4) {
                var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
                var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
                var bitsCombined = bits1 | bits2;
                words[nBytes >>> 2] |= bitsCombined << 24 - nBytes % 4 * 8;
                nBytes++;
              }
            }
            return WordArray.create(words, nBytes);
          }
        })();
        return CryptoJS2.enc.Base64;
      });
    }
  });

  // node_modules/crypto-js/enc-base64url.js
  var require_enc_base64url = __commonJS({
    "node_modules/crypto-js/enc-base64url.js"(exports, module) {
      (function(root, factory) {
        if (typeof exports === "object") {
          module.exports = exports = factory(require_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS2) {
        (function() {
          var C = CryptoJS2;
          var C_lib = C.lib;
          var WordArray = C_lib.WordArray;
          var C_enc = C.enc;
          var Base64url = C_enc.Base64url = {
            /**
             * Converts a word array to a Base64url string.
             *
             * @param {WordArray} wordArray The word array.
             *
             * @param {boolean} urlSafe Whether to use url safe
             *
             * @return {string} The Base64url string.
             *
             * @static
             *
             * @example
             *
             *     var base64String = CryptoJS.enc.Base64url.stringify(wordArray);
             */
            stringify: function(wordArray, urlSafe = true) {
              var words = wordArray.words;
              var sigBytes = wordArray.sigBytes;
              var map = urlSafe ? this._safe_map : this._map;
              wordArray.clamp();
              var base64Chars = [];
              for (var i = 0; i < sigBytes; i += 3) {
                var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
                var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
                var triplet = byte1 << 16 | byte2 << 8 | byte3;
                for (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
                  base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 63));
                }
              }
              var paddingChar = map.charAt(64);
              if (paddingChar) {
                while (base64Chars.length % 4) {
                  base64Chars.push(paddingChar);
                }
              }
              return base64Chars.join("");
            },
            /**
             * Converts a Base64url string to a word array.
             *
             * @param {string} base64Str The Base64url string.
             *
             * @param {boolean} urlSafe Whether to use url safe
             *
             * @return {WordArray} The word array.
             *
             * @static
             *
             * @example
             *
             *     var wordArray = CryptoJS.enc.Base64url.parse(base64String);
             */
            parse: function(base64Str, urlSafe = true) {
              var base64StrLength = base64Str.length;
              var map = urlSafe ? this._safe_map : this._map;
              var reverseMap = this._reverseMap;
              if (!reverseMap) {
                reverseMap = this._reverseMap = [];
                for (var j = 0; j < map.length; j++) {
                  reverseMap[map.charCodeAt(j)] = j;
                }
              }
              var paddingChar = map.charAt(64);
              if (paddingChar) {
                var paddingIndex = base64Str.indexOf(paddingChar);
                if (paddingIndex !== -1) {
                  base64StrLength = paddingIndex;
                }
              }
              return parseLoop(base64Str, base64StrLength, reverseMap);
            },
            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
          };
          function parseLoop(base64Str, base64StrLength, reverseMap) {
            var words = [];
            var nBytes = 0;
            for (var i = 0; i < base64StrLength; i++) {
              if (i % 4) {
                var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
                var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
                var bitsCombined = bits1 | bits2;
                words[nBytes >>> 2] |= bitsCombined << 24 - nBytes % 4 * 8;
                nBytes++;
              }
            }
            return WordArray.create(words, nBytes);
          }
        })();
        return CryptoJS2.enc.Base64url;
      });
    }
  });

  // node_modules/crypto-js/md5.js
  var require_md5 = __commonJS({
    "node_modules/crypto-js/md5.js"(exports, module) {
      (function(root, factory) {
        if (typeof exports === "object") {
          module.exports = exports = factory(require_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS2) {
        (function(Math2) {
          var C = CryptoJS2;
          var C_lib = C.lib;
          var WordArray = C_lib.WordArray;
          var Hasher = C_lib.Hasher;
          var C_algo = C.algo;
          var T = [];
          (function() {
            for (var i = 0; i < 64; i++) {
              T[i] = Math2.abs(Math2.sin(i + 1)) * 4294967296 | 0;
            }
          })();
          var MD5 = C_algo.MD5 = Hasher.extend({
            _doReset: function() {
              this._hash = new WordArray.init([
                1732584193,
                4023233417,
                2562383102,
                271733878
              ]);
            },
            _doProcessBlock: function(M, offset) {
              for (var i = 0; i < 16; i++) {
                var offset_i = offset + i;
                var M_offset_i = M[offset_i];
                M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 16711935 | (M_offset_i << 24 | M_offset_i >>> 8) & 4278255360;
              }
              var H = this._hash.words;
              var M_offset_0 = M[offset + 0];
              var M_offset_1 = M[offset + 1];
              var M_offset_2 = M[offset + 2];
              var M_offset_3 = M[offset + 3];
              var M_offset_4 = M[offset + 4];
              var M_offset_5 = M[offset + 5];
              var M_offset_6 = M[offset + 6];
              var M_offset_7 = M[offset + 7];
              var M_offset_8 = M[offset + 8];
              var M_offset_9 = M[offset + 9];
              var M_offset_10 = M[offset + 10];
              var M_offset_11 = M[offset + 11];
              var M_offset_12 = M[offset + 12];
              var M_offset_13 = M[offset + 13];
              var M_offset_14 = M[offset + 14];
              var M_offset_15 = M[offset + 15];
              var a = H[0];
              var b = H[1];
              var c = H[2];
              var d = H[3];
              a = FF(a, b, c, d, M_offset_0, 7, T[0]);
              d = FF(d, a, b, c, M_offset_1, 12, T[1]);
              c = FF(c, d, a, b, M_offset_2, 17, T[2]);
              b = FF(b, c, d, a, M_offset_3, 22, T[3]);
              a = FF(a, b, c, d, M_offset_4, 7, T[4]);
              d = FF(d, a, b, c, M_offset_5, 12, T[5]);
              c = FF(c, d, a, b, M_offset_6, 17, T[6]);
              b = FF(b, c, d, a, M_offset_7, 22, T[7]);
              a = FF(a, b, c, d, M_offset_8, 7, T[8]);
              d = FF(d, a, b, c, M_offset_9, 12, T[9]);
              c = FF(c, d, a, b, M_offset_10, 17, T[10]);
              b = FF(b, c, d, a, M_offset_11, 22, T[11]);
              a = FF(a, b, c, d, M_offset_12, 7, T[12]);
              d = FF(d, a, b, c, M_offset_13, 12, T[13]);
              c = FF(c, d, a, b, M_offset_14, 17, T[14]);
              b = FF(b, c, d, a, M_offset_15, 22, T[15]);
              a = GG(a, b, c, d, M_offset_1, 5, T[16]);
              d = GG(d, a, b, c, M_offset_6, 9, T[17]);
              c = GG(c, d, a, b, M_offset_11, 14, T[18]);
              b = GG(b, c, d, a, M_offset_0, 20, T[19]);
              a = GG(a, b, c, d, M_offset_5, 5, T[20]);
              d = GG(d, a, b, c, M_offset_10, 9, T[21]);
              c = GG(c, d, a, b, M_offset_15, 14, T[22]);
              b = GG(b, c, d, a, M_offset_4, 20, T[23]);
              a = GG(a, b, c, d, M_offset_9, 5, T[24]);
              d = GG(d, a, b, c, M_offset_14, 9, T[25]);
              c = GG(c, d, a, b, M_offset_3, 14, T[26]);
              b = GG(b, c, d, a, M_offset_8, 20, T[27]);
              a = GG(a, b, c, d, M_offset_13, 5, T[28]);
              d = GG(d, a, b, c, M_offset_2, 9, T[29]);
              c = GG(c, d, a, b, M_offset_7, 14, T[30]);
              b = GG(b, c, d, a, M_offset_12, 20, T[31]);
              a = HH(a, b, c, d, M_offset_5, 4, T[32]);
              d = HH(d, a, b, c, M_offset_8, 11, T[33]);
              c = HH(c, d, a, b, M_offset_11, 16, T[34]);
              b = HH(b, c, d, a, M_offset_14, 23, T[35]);
              a = HH(a, b, c, d, M_offset_1, 4, T[36]);
              d = HH(d, a, b, c, M_offset_4, 11, T[37]);
              c = HH(c, d, a, b, M_offset_7, 16, T[38]);
              b = HH(b, c, d, a, M_offset_10, 23, T[39]);
              a = HH(a, b, c, d, M_offset_13, 4, T[40]);
              d = HH(d, a, b, c, M_offset_0, 11, T[41]);
              c = HH(c, d, a, b, M_offset_3, 16, T[42]);
              b = HH(b, c, d, a, M_offset_6, 23, T[43]);
              a = HH(a, b, c, d, M_offset_9, 4, T[44]);
              d = HH(d, a, b, c, M_offset_12, 11, T[45]);
              c = HH(c, d, a, b, M_offset_15, 16, T[46]);
              b = HH(b, c, d, a, M_offset_2, 23, T[47]);
              a = II(a, b, c, d, M_offset_0, 6, T[48]);
              d = II(d, a, b, c, M_offset_7, 10, T[49]);
              c = II(c, d, a, b, M_offset_14, 15, T[50]);
              b = II(b, c, d, a, M_offset_5, 21, T[51]);
              a = II(a, b, c, d, M_offset_12, 6, T[52]);
              d = II(d, a, b, c, M_offset_3, 10, T[53]);
              c = II(c, d, a, b, M_offset_10, 15, T[54]);
              b = II(b, c, d, a, M_offset_1, 21, T[55]);
              a = II(a, b, c, d, M_offset_8, 6, T[56]);
              d = II(d, a, b, c, M_offset_15, 10, T[57]);
              c = II(c, d, a, b, M_offset_6, 15, T[58]);
              b = II(b, c, d, a, M_offset_13, 21, T[59]);
              a = II(a, b, c, d, M_offset_4, 6, T[60]);
              d = II(d, a, b, c, M_offset_11, 10, T[61]);
              c = II(c, d, a, b, M_offset_2, 15, T[62]);
              b = II(b, c, d, a, M_offset_9, 21, T[63]);
              H[0] = H[0] + a | 0;
              H[1] = H[1] + b | 0;
              H[2] = H[2] + c | 0;
              H[3] = H[3] + d | 0;
            },
            _doFinalize: function() {
              var data = this._data;
              var dataWords = data.words;
              var nBitsTotal = this._nDataBytes * 8;
              var nBitsLeft = data.sigBytes * 8;
              dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
              var nBitsTotalH = Math2.floor(nBitsTotal / 4294967296);
              var nBitsTotalL = nBitsTotal;
              dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = (nBitsTotalH << 8 | nBitsTotalH >>> 24) & 16711935 | (nBitsTotalH << 24 | nBitsTotalH >>> 8) & 4278255360;
              dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotalL << 8 | nBitsTotalL >>> 24) & 16711935 | (nBitsTotalL << 24 | nBitsTotalL >>> 8) & 4278255360;
              data.sigBytes = (dataWords.length + 1) * 4;
              this._process();
              var hash = this._hash;
              var H = hash.words;
              for (var i = 0; i < 4; i++) {
                var H_i = H[i];
                H[i] = (H_i << 8 | H_i >>> 24) & 16711935 | (H_i << 24 | H_i >>> 8) & 4278255360;
              }
              return hash;
            },
            clone: function() {
              var clone = Hasher.clone.call(this);
              clone._hash = this._hash.clone();
              return clone;
            }
          });
          function FF(a, b, c, d, x, s, t) {
            var n = a + (b & c | ~b & d) + x + t;
            return (n << s | n >>> 32 - s) + b;
          }
          function GG(a, b, c, d, x, s, t) {
            var n = a + (b & d | c & ~d) + x + t;
            return (n << s | n >>> 32 - s) + b;
          }
          function HH(a, b, c, d, x, s, t) {
            var n = a + (b ^ c ^ d) + x + t;
            return (n << s | n >>> 32 - s) + b;
          }
          function II(a, b, c, d, x, s, t) {
            var n = a + (c ^ (b | ~d)) + x + t;
            return (n << s | n >>> 32 - s) + b;
          }
          C.MD5 = Hasher._createHelper(MD5);
          C.HmacMD5 = Hasher._createHmacHelper(MD5);
        })(Math);
        return CryptoJS2.MD5;
      });
    }
  });

  // node_modules/crypto-js/sha1.js
  var require_sha1 = __commonJS({
    "node_modules/crypto-js/sha1.js"(exports, module) {
      (function(root, factory) {
        if (typeof exports === "object") {
          module.exports = exports = factory(require_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS2) {
        (function() {
          var C = CryptoJS2;
          var C_lib = C.lib;
          var WordArray = C_lib.WordArray;
          var Hasher = C_lib.Hasher;
          var C_algo = C.algo;
          var W = [];
          var SHA1 = C_algo.SHA1 = Hasher.extend({
            _doReset: function() {
              this._hash = new WordArray.init([
                1732584193,
                4023233417,
                2562383102,
                271733878,
                3285377520
              ]);
            },
            _doProcessBlock: function(M, offset) {
              var H = this._hash.words;
              var a = H[0];
              var b = H[1];
              var c = H[2];
              var d = H[3];
              var e = H[4];
              for (var i = 0; i < 80; i++) {
                if (i < 16) {
                  W[i] = M[offset + i] | 0;
                } else {
                  var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
                  W[i] = n << 1 | n >>> 31;
                }
                var t = (a << 5 | a >>> 27) + e + W[i];
                if (i < 20) {
                  t += (b & c | ~b & d) + 1518500249;
                } else if (i < 40) {
                  t += (b ^ c ^ d) + 1859775393;
                } else if (i < 60) {
                  t += (b & c | b & d | c & d) - 1894007588;
                } else {
                  t += (b ^ c ^ d) - 899497514;
                }
                e = d;
                d = c;
                c = b << 30 | b >>> 2;
                b = a;
                a = t;
              }
              H[0] = H[0] + a | 0;
              H[1] = H[1] + b | 0;
              H[2] = H[2] + c | 0;
              H[3] = H[3] + d | 0;
              H[4] = H[4] + e | 0;
            },
            _doFinalize: function() {
              var data = this._data;
              var dataWords = data.words;
              var nBitsTotal = this._nDataBytes * 8;
              var nBitsLeft = data.sigBytes * 8;
              dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
              dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 4294967296);
              dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
              data.sigBytes = dataWords.length * 4;
              this._process();
              return this._hash;
            },
            clone: function() {
              var clone = Hasher.clone.call(this);
              clone._hash = this._hash.clone();
              return clone;
            }
          });
          C.SHA1 = Hasher._createHelper(SHA1);
          C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
        })();
        return CryptoJS2.SHA1;
      });
    }
  });

  // node_modules/crypto-js/sha256.js
  var require_sha256 = __commonJS({
    "node_modules/crypto-js/sha256.js"(exports, module) {
      (function(root, factory) {
        if (typeof exports === "object") {
          module.exports = exports = factory(require_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS2) {
        (function(Math2) {
          var C = CryptoJS2;
          var C_lib = C.lib;
          var WordArray = C_lib.WordArray;
          var Hasher = C_lib.Hasher;
          var C_algo = C.algo;
          var H = [];
          var K = [];
          (function() {
            function isPrime(n2) {
              var sqrtN = Math2.sqrt(n2);
              for (var factor = 2; factor <= sqrtN; factor++) {
                if (!(n2 % factor)) {
                  return false;
                }
              }
              return true;
            }
            function getFractionalBits(n2) {
              return (n2 - (n2 | 0)) * 4294967296 | 0;
            }
            var n = 2;
            var nPrime = 0;
            while (nPrime < 64) {
              if (isPrime(n)) {
                if (nPrime < 8) {
                  H[nPrime] = getFractionalBits(Math2.pow(n, 1 / 2));
                }
                K[nPrime] = getFractionalBits(Math2.pow(n, 1 / 3));
                nPrime++;
              }
              n++;
            }
          })();
          var W = [];
          var SHA256 = C_algo.SHA256 = Hasher.extend({
            _doReset: function() {
              this._hash = new WordArray.init(H.slice(0));
            },
            _doProcessBlock: function(M, offset) {
              var H2 = this._hash.words;
              var a = H2[0];
              var b = H2[1];
              var c = H2[2];
              var d = H2[3];
              var e = H2[4];
              var f = H2[5];
              var g = H2[6];
              var h = H2[7];
              for (var i = 0; i < 64; i++) {
                if (i < 16) {
                  W[i] = M[offset + i] | 0;
                } else {
                  var gamma0x = W[i - 15];
                  var gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
                  var gamma1x = W[i - 2];
                  var gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
                  W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
                }
                var ch = e & f ^ ~e & g;
                var maj = a & b ^ a & c ^ b & c;
                var sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
                var sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
                var t1 = h + sigma1 + ch + K[i] + W[i];
                var t2 = sigma0 + maj;
                h = g;
                g = f;
                f = e;
                e = d + t1 | 0;
                d = c;
                c = b;
                b = a;
                a = t1 + t2 | 0;
              }
              H2[0] = H2[0] + a | 0;
              H2[1] = H2[1] + b | 0;
              H2[2] = H2[2] + c | 0;
              H2[3] = H2[3] + d | 0;
              H2[4] = H2[4] + e | 0;
              H2[5] = H2[5] + f | 0;
              H2[6] = H2[6] + g | 0;
              H2[7] = H2[7] + h | 0;
            },
            _doFinalize: function() {
              var data = this._data;
              var dataWords = data.words;
              var nBitsTotal = this._nDataBytes * 8;
              var nBitsLeft = data.sigBytes * 8;
              dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
              dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math2.floor(nBitsTotal / 4294967296);
              dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
              data.sigBytes = dataWords.length * 4;
              this._process();
              return this._hash;
            },
            clone: function() {
              var clone = Hasher.clone.call(this);
              clone._hash = this._hash.clone();
              return clone;
            }
          });
          C.SHA256 = Hasher._createHelper(SHA256);
          C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
        })(Math);
        return CryptoJS2.SHA256;
      });
    }
  });

  // node_modules/crypto-js/sha224.js
  var require_sha224 = __commonJS({
    "node_modules/crypto-js/sha224.js"(exports, module) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module.exports = exports = factory(require_core(), require_sha256());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./sha256"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS2) {
        (function() {
          var C = CryptoJS2;
          var C_lib = C.lib;
          var WordArray = C_lib.WordArray;
          var C_algo = C.algo;
          var SHA256 = C_algo.SHA256;
          var SHA224 = C_algo.SHA224 = SHA256.extend({
            _doReset: function() {
              this._hash = new WordArray.init([
                3238371032,
                914150663,
                812702999,
                4144912697,
                4290775857,
                1750603025,
                1694076839,
                3204075428
              ]);
            },
            _doFinalize: function() {
              var hash = SHA256._doFinalize.call(this);
              hash.sigBytes -= 4;
              return hash;
            }
          });
          C.SHA224 = SHA256._createHelper(SHA224);
          C.HmacSHA224 = SHA256._createHmacHelper(SHA224);
        })();
        return CryptoJS2.SHA224;
      });
    }
  });

  // node_modules/crypto-js/sha512.js
  var require_sha512 = __commonJS({
    "node_modules/crypto-js/sha512.js"(exports, module) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module.exports = exports = factory(require_core(), require_x64_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./x64-core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS2) {
        (function() {
          var C = CryptoJS2;
          var C_lib = C.lib;
          var Hasher = C_lib.Hasher;
          var C_x64 = C.x64;
          var X64Word = C_x64.Word;
          var X64WordArray = C_x64.WordArray;
          var C_algo = C.algo;
          function X64Word_create() {
            return X64Word.create.apply(X64Word, arguments);
          }
          var K = [
            X64Word_create(1116352408, 3609767458),
            X64Word_create(1899447441, 602891725),
            X64Word_create(3049323471, 3964484399),
            X64Word_create(3921009573, 2173295548),
            X64Word_create(961987163, 4081628472),
            X64Word_create(1508970993, 3053834265),
            X64Word_create(2453635748, 2937671579),
            X64Word_create(2870763221, 3664609560),
            X64Word_create(3624381080, 2734883394),
            X64Word_create(310598401, 1164996542),
            X64Word_create(607225278, 1323610764),
            X64Word_create(1426881987, 3590304994),
            X64Word_create(1925078388, 4068182383),
            X64Word_create(2162078206, 991336113),
            X64Word_create(2614888103, 633803317),
            X64Word_create(3248222580, 3479774868),
            X64Word_create(3835390401, 2666613458),
            X64Word_create(4022224774, 944711139),
            X64Word_create(264347078, 2341262773),
            X64Word_create(604807628, 2007800933),
            X64Word_create(770255983, 1495990901),
            X64Word_create(1249150122, 1856431235),
            X64Word_create(1555081692, 3175218132),
            X64Word_create(1996064986, 2198950837),
            X64Word_create(2554220882, 3999719339),
            X64Word_create(2821834349, 766784016),
            X64Word_create(2952996808, 2566594879),
            X64Word_create(3210313671, 3203337956),
            X64Word_create(3336571891, 1034457026),
            X64Word_create(3584528711, 2466948901),
            X64Word_create(113926993, 3758326383),
            X64Word_create(338241895, 168717936),
            X64Word_create(666307205, 1188179964),
            X64Word_create(773529912, 1546045734),
            X64Word_create(1294757372, 1522805485),
            X64Word_create(1396182291, 2643833823),
            X64Word_create(1695183700, 2343527390),
            X64Word_create(1986661051, 1014477480),
            X64Word_create(2177026350, 1206759142),
            X64Word_create(2456956037, 344077627),
            X64Word_create(2730485921, 1290863460),
            X64Word_create(2820302411, 3158454273),
            X64Word_create(3259730800, 3505952657),
            X64Word_create(3345764771, 106217008),
            X64Word_create(3516065817, 3606008344),
            X64Word_create(3600352804, 1432725776),
            X64Word_create(4094571909, 1467031594),
            X64Word_create(275423344, 851169720),
            X64Word_create(430227734, 3100823752),
            X64Word_create(506948616, 1363258195),
            X64Word_create(659060556, 3750685593),
            X64Word_create(883997877, 3785050280),
            X64Word_create(958139571, 3318307427),
            X64Word_create(1322822218, 3812723403),
            X64Word_create(1537002063, 2003034995),
            X64Word_create(1747873779, 3602036899),
            X64Word_create(1955562222, 1575990012),
            X64Word_create(2024104815, 1125592928),
            X64Word_create(2227730452, 2716904306),
            X64Word_create(2361852424, 442776044),
            X64Word_create(2428436474, 593698344),
            X64Word_create(2756734187, 3733110249),
            X64Word_create(3204031479, 2999351573),
            X64Word_create(3329325298, 3815920427),
            X64Word_create(3391569614, 3928383900),
            X64Word_create(3515267271, 566280711),
            X64Word_create(3940187606, 3454069534),
            X64Word_create(4118630271, 4000239992),
            X64Word_create(116418474, 1914138554),
            X64Word_create(174292421, 2731055270),
            X64Word_create(289380356, 3203993006),
            X64Word_create(460393269, 320620315),
            X64Word_create(685471733, 587496836),
            X64Word_create(852142971, 1086792851),
            X64Word_create(1017036298, 365543100),
            X64Word_create(1126000580, 2618297676),
            X64Word_create(1288033470, 3409855158),
            X64Word_create(1501505948, 4234509866),
            X64Word_create(1607167915, 987167468),
            X64Word_create(1816402316, 1246189591)
          ];
          var W = [];
          (function() {
            for (var i = 0; i < 80; i++) {
              W[i] = X64Word_create();
            }
          })();
          var SHA512 = C_algo.SHA512 = Hasher.extend({
            _doReset: function() {
              this._hash = new X64WordArray.init([
                new X64Word.init(1779033703, 4089235720),
                new X64Word.init(3144134277, 2227873595),
                new X64Word.init(1013904242, 4271175723),
                new X64Word.init(2773480762, 1595750129),
                new X64Word.init(1359893119, 2917565137),
                new X64Word.init(2600822924, 725511199),
                new X64Word.init(528734635, 4215389547),
                new X64Word.init(1541459225, 327033209)
              ]);
            },
            _doProcessBlock: function(M, offset) {
              var H = this._hash.words;
              var H0 = H[0];
              var H1 = H[1];
              var H2 = H[2];
              var H3 = H[3];
              var H4 = H[4];
              var H5 = H[5];
              var H6 = H[6];
              var H7 = H[7];
              var H0h = H0.high;
              var H0l = H0.low;
              var H1h = H1.high;
              var H1l = H1.low;
              var H2h = H2.high;
              var H2l = H2.low;
              var H3h = H3.high;
              var H3l = H3.low;
              var H4h = H4.high;
              var H4l = H4.low;
              var H5h = H5.high;
              var H5l = H5.low;
              var H6h = H6.high;
              var H6l = H6.low;
              var H7h = H7.high;
              var H7l = H7.low;
              var ah = H0h;
              var al = H0l;
              var bh = H1h;
              var bl = H1l;
              var ch = H2h;
              var cl = H2l;
              var dh = H3h;
              var dl = H3l;
              var eh = H4h;
              var el = H4l;
              var fh = H5h;
              var fl = H5l;
              var gh = H6h;
              var gl = H6l;
              var hh = H7h;
              var hl = H7l;
              for (var i = 0; i < 80; i++) {
                var Wil;
                var Wih;
                var Wi = W[i];
                if (i < 16) {
                  Wih = Wi.high = M[offset + i * 2] | 0;
                  Wil = Wi.low = M[offset + i * 2 + 1] | 0;
                } else {
                  var gamma0x = W[i - 15];
                  var gamma0xh = gamma0x.high;
                  var gamma0xl = gamma0x.low;
                  var gamma0h = (gamma0xh >>> 1 | gamma0xl << 31) ^ (gamma0xh >>> 8 | gamma0xl << 24) ^ gamma0xh >>> 7;
                  var gamma0l = (gamma0xl >>> 1 | gamma0xh << 31) ^ (gamma0xl >>> 8 | gamma0xh << 24) ^ (gamma0xl >>> 7 | gamma0xh << 25);
                  var gamma1x = W[i - 2];
                  var gamma1xh = gamma1x.high;
                  var gamma1xl = gamma1x.low;
                  var gamma1h = (gamma1xh >>> 19 | gamma1xl << 13) ^ (gamma1xh << 3 | gamma1xl >>> 29) ^ gamma1xh >>> 6;
                  var gamma1l = (gamma1xl >>> 19 | gamma1xh << 13) ^ (gamma1xl << 3 | gamma1xh >>> 29) ^ (gamma1xl >>> 6 | gamma1xh << 26);
                  var Wi7 = W[i - 7];
                  var Wi7h = Wi7.high;
                  var Wi7l = Wi7.low;
                  var Wi16 = W[i - 16];
                  var Wi16h = Wi16.high;
                  var Wi16l = Wi16.low;
                  Wil = gamma0l + Wi7l;
                  Wih = gamma0h + Wi7h + (Wil >>> 0 < gamma0l >>> 0 ? 1 : 0);
                  Wil = Wil + gamma1l;
                  Wih = Wih + gamma1h + (Wil >>> 0 < gamma1l >>> 0 ? 1 : 0);
                  Wil = Wil + Wi16l;
                  Wih = Wih + Wi16h + (Wil >>> 0 < Wi16l >>> 0 ? 1 : 0);
                  Wi.high = Wih;
                  Wi.low = Wil;
                }
                var chh = eh & fh ^ ~eh & gh;
                var chl = el & fl ^ ~el & gl;
                var majh = ah & bh ^ ah & ch ^ bh & ch;
                var majl = al & bl ^ al & cl ^ bl & cl;
                var sigma0h = (ah >>> 28 | al << 4) ^ (ah << 30 | al >>> 2) ^ (ah << 25 | al >>> 7);
                var sigma0l = (al >>> 28 | ah << 4) ^ (al << 30 | ah >>> 2) ^ (al << 25 | ah >>> 7);
                var sigma1h = (eh >>> 14 | el << 18) ^ (eh >>> 18 | el << 14) ^ (eh << 23 | el >>> 9);
                var sigma1l = (el >>> 14 | eh << 18) ^ (el >>> 18 | eh << 14) ^ (el << 23 | eh >>> 9);
                var Ki = K[i];
                var Kih = Ki.high;
                var Kil = Ki.low;
                var t1l = hl + sigma1l;
                var t1h = hh + sigma1h + (t1l >>> 0 < hl >>> 0 ? 1 : 0);
                var t1l = t1l + chl;
                var t1h = t1h + chh + (t1l >>> 0 < chl >>> 0 ? 1 : 0);
                var t1l = t1l + Kil;
                var t1h = t1h + Kih + (t1l >>> 0 < Kil >>> 0 ? 1 : 0);
                var t1l = t1l + Wil;
                var t1h = t1h + Wih + (t1l >>> 0 < Wil >>> 0 ? 1 : 0);
                var t2l = sigma0l + majl;
                var t2h = sigma0h + majh + (t2l >>> 0 < sigma0l >>> 0 ? 1 : 0);
                hh = gh;
                hl = gl;
                gh = fh;
                gl = fl;
                fh = eh;
                fl = el;
                el = dl + t1l | 0;
                eh = dh + t1h + (el >>> 0 < dl >>> 0 ? 1 : 0) | 0;
                dh = ch;
                dl = cl;
                ch = bh;
                cl = bl;
                bh = ah;
                bl = al;
                al = t1l + t2l | 0;
                ah = t1h + t2h + (al >>> 0 < t1l >>> 0 ? 1 : 0) | 0;
              }
              H0l = H0.low = H0l + al;
              H0.high = H0h + ah + (H0l >>> 0 < al >>> 0 ? 1 : 0);
              H1l = H1.low = H1l + bl;
              H1.high = H1h + bh + (H1l >>> 0 < bl >>> 0 ? 1 : 0);
              H2l = H2.low = H2l + cl;
              H2.high = H2h + ch + (H2l >>> 0 < cl >>> 0 ? 1 : 0);
              H3l = H3.low = H3l + dl;
              H3.high = H3h + dh + (H3l >>> 0 < dl >>> 0 ? 1 : 0);
              H4l = H4.low = H4l + el;
              H4.high = H4h + eh + (H4l >>> 0 < el >>> 0 ? 1 : 0);
              H5l = H5.low = H5l + fl;
              H5.high = H5h + fh + (H5l >>> 0 < fl >>> 0 ? 1 : 0);
              H6l = H6.low = H6l + gl;
              H6.high = H6h + gh + (H6l >>> 0 < gl >>> 0 ? 1 : 0);
              H7l = H7.low = H7l + hl;
              H7.high = H7h + hh + (H7l >>> 0 < hl >>> 0 ? 1 : 0);
            },
            _doFinalize: function() {
              var data = this._data;
              var dataWords = data.words;
              var nBitsTotal = this._nDataBytes * 8;
              var nBitsLeft = data.sigBytes * 8;
              dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
              dataWords[(nBitsLeft + 128 >>> 10 << 5) + 30] = Math.floor(nBitsTotal / 4294967296);
              dataWords[(nBitsLeft + 128 >>> 10 << 5) + 31] = nBitsTotal;
              data.sigBytes = dataWords.length * 4;
              this._process();
              var hash = this._hash.toX32();
              return hash;
            },
            clone: function() {
              var clone = Hasher.clone.call(this);
              clone._hash = this._hash.clone();
              return clone;
            },
            blockSize: 1024 / 32
          });
          C.SHA512 = Hasher._createHelper(SHA512);
          C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
        })();
        return CryptoJS2.SHA512;
      });
    }
  });

  // node_modules/crypto-js/sha384.js
  var require_sha384 = __commonJS({
    "node_modules/crypto-js/sha384.js"(exports, module) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module.exports = exports = factory(require_core(), require_x64_core(), require_sha512());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./x64-core", "./sha512"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS2) {
        (function() {
          var C = CryptoJS2;
          var C_x64 = C.x64;
          var X64Word = C_x64.Word;
          var X64WordArray = C_x64.WordArray;
          var C_algo = C.algo;
          var SHA512 = C_algo.SHA512;
          var SHA384 = C_algo.SHA384 = SHA512.extend({
            _doReset: function() {
              this._hash = new X64WordArray.init([
                new X64Word.init(3418070365, 3238371032),
                new X64Word.init(1654270250, 914150663),
                new X64Word.init(2438529370, 812702999),
                new X64Word.init(355462360, 4144912697),
                new X64Word.init(1731405415, 4290775857),
                new X64Word.init(2394180231, 1750603025),
                new X64Word.init(3675008525, 1694076839),
                new X64Word.init(1203062813, 3204075428)
              ]);
            },
            _doFinalize: function() {
              var hash = SHA512._doFinalize.call(this);
              hash.sigBytes -= 16;
              return hash;
            }
          });
          C.SHA384 = SHA512._createHelper(SHA384);
          C.HmacSHA384 = SHA512._createHmacHelper(SHA384);
        })();
        return CryptoJS2.SHA384;
      });
    }
  });

  // node_modules/crypto-js/sha3.js
  var require_sha3 = __commonJS({
    "node_modules/crypto-js/sha3.js"(exports, module) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module.exports = exports = factory(require_core(), require_x64_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./x64-core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS2) {
        (function(Math2) {
          var C = CryptoJS2;
          var C_lib = C.lib;
          var WordArray = C_lib.WordArray;
          var Hasher = C_lib.Hasher;
          var C_x64 = C.x64;
          var X64Word = C_x64.Word;
          var C_algo = C.algo;
          var RHO_OFFSETS = [];
          var PI_INDEXES = [];
          var ROUND_CONSTANTS = [];
          (function() {
            var x = 1, y = 0;
            for (var t = 0; t < 24; t++) {
              RHO_OFFSETS[x + 5 * y] = (t + 1) * (t + 2) / 2 % 64;
              var newX = y % 5;
              var newY = (2 * x + 3 * y) % 5;
              x = newX;
              y = newY;
            }
            for (var x = 0; x < 5; x++) {
              for (var y = 0; y < 5; y++) {
                PI_INDEXES[x + 5 * y] = y + (2 * x + 3 * y) % 5 * 5;
              }
            }
            var LFSR = 1;
            for (var i = 0; i < 24; i++) {
              var roundConstantMsw = 0;
              var roundConstantLsw = 0;
              for (var j = 0; j < 7; j++) {
                if (LFSR & 1) {
                  var bitPosition = (1 << j) - 1;
                  if (bitPosition < 32) {
                    roundConstantLsw ^= 1 << bitPosition;
                  } else {
                    roundConstantMsw ^= 1 << bitPosition - 32;
                  }
                }
                if (LFSR & 128) {
                  LFSR = LFSR << 1 ^ 113;
                } else {
                  LFSR <<= 1;
                }
              }
              ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
            }
          })();
          var T = [];
          (function() {
            for (var i = 0; i < 25; i++) {
              T[i] = X64Word.create();
            }
          })();
          var SHA3 = C_algo.SHA3 = Hasher.extend({
            /**
             * Configuration options.
             *
             * @property {number} outputLength
             *   The desired number of bits in the output hash.
             *   Only values permitted are: 224, 256, 384, 512.
             *   Default: 512
             */
            cfg: Hasher.cfg.extend({
              outputLength: 512
            }),
            _doReset: function() {
              var state = this._state = [];
              for (var i = 0; i < 25; i++) {
                state[i] = new X64Word.init();
              }
              this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
            },
            _doProcessBlock: function(M, offset) {
              var state = this._state;
              var nBlockSizeLanes = this.blockSize / 2;
              for (var i = 0; i < nBlockSizeLanes; i++) {
                var M2i = M[offset + 2 * i];
                var M2i1 = M[offset + 2 * i + 1];
                M2i = (M2i << 8 | M2i >>> 24) & 16711935 | (M2i << 24 | M2i >>> 8) & 4278255360;
                M2i1 = (M2i1 << 8 | M2i1 >>> 24) & 16711935 | (M2i1 << 24 | M2i1 >>> 8) & 4278255360;
                var lane = state[i];
                lane.high ^= M2i1;
                lane.low ^= M2i;
              }
              for (var round = 0; round < 24; round++) {
                for (var x = 0; x < 5; x++) {
                  var tMsw = 0, tLsw = 0;
                  for (var y = 0; y < 5; y++) {
                    var lane = state[x + 5 * y];
                    tMsw ^= lane.high;
                    tLsw ^= lane.low;
                  }
                  var Tx = T[x];
                  Tx.high = tMsw;
                  Tx.low = tLsw;
                }
                for (var x = 0; x < 5; x++) {
                  var Tx4 = T[(x + 4) % 5];
                  var Tx1 = T[(x + 1) % 5];
                  var Tx1Msw = Tx1.high;
                  var Tx1Lsw = Tx1.low;
                  var tMsw = Tx4.high ^ (Tx1Msw << 1 | Tx1Lsw >>> 31);
                  var tLsw = Tx4.low ^ (Tx1Lsw << 1 | Tx1Msw >>> 31);
                  for (var y = 0; y < 5; y++) {
                    var lane = state[x + 5 * y];
                    lane.high ^= tMsw;
                    lane.low ^= tLsw;
                  }
                }
                for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
                  var tMsw;
                  var tLsw;
                  var lane = state[laneIndex];
                  var laneMsw = lane.high;
                  var laneLsw = lane.low;
                  var rhoOffset = RHO_OFFSETS[laneIndex];
                  if (rhoOffset < 32) {
                    tMsw = laneMsw << rhoOffset | laneLsw >>> 32 - rhoOffset;
                    tLsw = laneLsw << rhoOffset | laneMsw >>> 32 - rhoOffset;
                  } else {
                    tMsw = laneLsw << rhoOffset - 32 | laneMsw >>> 64 - rhoOffset;
                    tLsw = laneMsw << rhoOffset - 32 | laneLsw >>> 64 - rhoOffset;
                  }
                  var TPiLane = T[PI_INDEXES[laneIndex]];
                  TPiLane.high = tMsw;
                  TPiLane.low = tLsw;
                }
                var T0 = T[0];
                var state0 = state[0];
                T0.high = state0.high;
                T0.low = state0.low;
                for (var x = 0; x < 5; x++) {
                  for (var y = 0; y < 5; y++) {
                    var laneIndex = x + 5 * y;
                    var lane = state[laneIndex];
                    var TLane = T[laneIndex];
                    var Tx1Lane = T[(x + 1) % 5 + 5 * y];
                    var Tx2Lane = T[(x + 2) % 5 + 5 * y];
                    lane.high = TLane.high ^ ~Tx1Lane.high & Tx2Lane.high;
                    lane.low = TLane.low ^ ~Tx1Lane.low & Tx2Lane.low;
                  }
                }
                var lane = state[0];
                var roundConstant = ROUND_CONSTANTS[round];
                lane.high ^= roundConstant.high;
                lane.low ^= roundConstant.low;
              }
            },
            _doFinalize: function() {
              var data = this._data;
              var dataWords = data.words;
              var nBitsTotal = this._nDataBytes * 8;
              var nBitsLeft = data.sigBytes * 8;
              var blockSizeBits = this.blockSize * 32;
              dataWords[nBitsLeft >>> 5] |= 1 << 24 - nBitsLeft % 32;
              dataWords[(Math2.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits >>> 5) - 1] |= 128;
              data.sigBytes = dataWords.length * 4;
              this._process();
              var state = this._state;
              var outputLengthBytes = this.cfg.outputLength / 8;
              var outputLengthLanes = outputLengthBytes / 8;
              var hashWords = [];
              for (var i = 0; i < outputLengthLanes; i++) {
                var lane = state[i];
                var laneMsw = lane.high;
                var laneLsw = lane.low;
                laneMsw = (laneMsw << 8 | laneMsw >>> 24) & 16711935 | (laneMsw << 24 | laneMsw >>> 8) & 4278255360;
                laneLsw = (laneLsw << 8 | laneLsw >>> 24) & 16711935 | (laneLsw << 24 | laneLsw >>> 8) & 4278255360;
                hashWords.push(laneLsw);
                hashWords.push(laneMsw);
              }
              return new WordArray.init(hashWords, outputLengthBytes);
            },
            clone: function() {
              var clone = Hasher.clone.call(this);
              var state = clone._state = this._state.slice(0);
              for (var i = 0; i < 25; i++) {
                state[i] = state[i].clone();
              }
              return clone;
            }
          });
          C.SHA3 = Hasher._createHelper(SHA3);
          C.HmacSHA3 = Hasher._createHmacHelper(SHA3);
        })(Math);
        return CryptoJS2.SHA3;
      });
    }
  });

  // node_modules/crypto-js/ripemd160.js
  var require_ripemd160 = __commonJS({
    "node_modules/crypto-js/ripemd160.js"(exports, module) {
      (function(root, factory) {
        if (typeof exports === "object") {
          module.exports = exports = factory(require_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS2) {
        (function(Math2) {
          var C = CryptoJS2;
          var C_lib = C.lib;
          var WordArray = C_lib.WordArray;
          var Hasher = C_lib.Hasher;
          var C_algo = C.algo;
          var _zl = WordArray.create([
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            7,
            4,
            13,
            1,
            10,
            6,
            15,
            3,
            12,
            0,
            9,
            5,
            2,
            14,
            11,
            8,
            3,
            10,
            14,
            4,
            9,
            15,
            8,
            1,
            2,
            7,
            0,
            6,
            13,
            11,
            5,
            12,
            1,
            9,
            11,
            10,
            0,
            8,
            12,
            4,
            13,
            3,
            7,
            15,
            14,
            5,
            6,
            2,
            4,
            0,
            5,
            9,
            7,
            12,
            2,
            10,
            14,
            1,
            3,
            8,
            11,
            6,
            15,
            13
          ]);
          var _zr = WordArray.create([
            5,
            14,
            7,
            0,
            9,
            2,
            11,
            4,
            13,
            6,
            15,
            8,
            1,
            10,
            3,
            12,
            6,
            11,
            3,
            7,
            0,
            13,
            5,
            10,
            14,
            15,
            8,
            12,
            4,
            9,
            1,
            2,
            15,
            5,
            1,
            3,
            7,
            14,
            6,
            9,
            11,
            8,
            12,
            2,
            10,
            0,
            4,
            13,
            8,
            6,
            4,
            1,
            3,
            11,
            15,
            0,
            5,
            12,
            2,
            13,
            9,
            7,
            10,
            14,
            12,
            15,
            10,
            4,
            1,
            5,
            8,
            7,
            6,
            2,
            13,
            14,
            0,
            3,
            9,
            11
          ]);
          var _sl = WordArray.create([
            11,
            14,
            15,
            12,
            5,
            8,
            7,
            9,
            11,
            13,
            14,
            15,
            6,
            7,
            9,
            8,
            7,
            6,
            8,
            13,
            11,
            9,
            7,
            15,
            7,
            12,
            15,
            9,
            11,
            7,
            13,
            12,
            11,
            13,
            6,
            7,
            14,
            9,
            13,
            15,
            14,
            8,
            13,
            6,
            5,
            12,
            7,
            5,
            11,
            12,
            14,
            15,
            14,
            15,
            9,
            8,
            9,
            14,
            5,
            6,
            8,
            6,
            5,
            12,
            9,
            15,
            5,
            11,
            6,
            8,
            13,
            12,
            5,
            12,
            13,
            14,
            11,
            8,
            5,
            6
          ]);
          var _sr = WordArray.create([
            8,
            9,
            9,
            11,
            13,
            15,
            15,
            5,
            7,
            7,
            8,
            11,
            14,
            14,
            12,
            6,
            9,
            13,
            15,
            7,
            12,
            8,
            9,
            11,
            7,
            7,
            12,
            7,
            6,
            15,
            13,
            11,
            9,
            7,
            15,
            11,
            8,
            6,
            6,
            14,
            12,
            13,
            5,
            14,
            13,
            13,
            7,
            5,
            15,
            5,
            8,
            11,
            14,
            14,
            6,
            14,
            6,
            9,
            12,
            9,
            12,
            5,
            15,
            8,
            8,
            5,
            12,
            9,
            12,
            5,
            14,
            6,
            8,
            13,
            6,
            5,
            15,
            13,
            11,
            11
          ]);
          var _hl = WordArray.create([0, 1518500249, 1859775393, 2400959708, 2840853838]);
          var _hr = WordArray.create([1352829926, 1548603684, 1836072691, 2053994217, 0]);
          var RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({
            _doReset: function() {
              this._hash = WordArray.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
            },
            _doProcessBlock: function(M, offset) {
              for (var i = 0; i < 16; i++) {
                var offset_i = offset + i;
                var M_offset_i = M[offset_i];
                M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 16711935 | (M_offset_i << 24 | M_offset_i >>> 8) & 4278255360;
              }
              var H = this._hash.words;
              var hl = _hl.words;
              var hr = _hr.words;
              var zl = _zl.words;
              var zr = _zr.words;
              var sl = _sl.words;
              var sr = _sr.words;
              var al, bl, cl, dl, el;
              var ar, br, cr, dr, er;
              ar = al = H[0];
              br = bl = H[1];
              cr = cl = H[2];
              dr = dl = H[3];
              er = el = H[4];
              var t;
              for (var i = 0; i < 80; i += 1) {
                t = al + M[offset + zl[i]] | 0;
                if (i < 16) {
                  t += f1(bl, cl, dl) + hl[0];
                } else if (i < 32) {
                  t += f2(bl, cl, dl) + hl[1];
                } else if (i < 48) {
                  t += f3(bl, cl, dl) + hl[2];
                } else if (i < 64) {
                  t += f4(bl, cl, dl) + hl[3];
                } else {
                  t += f5(bl, cl, dl) + hl[4];
                }
                t = t | 0;
                t = rotl(t, sl[i]);
                t = t + el | 0;
                al = el;
                el = dl;
                dl = rotl(cl, 10);
                cl = bl;
                bl = t;
                t = ar + M[offset + zr[i]] | 0;
                if (i < 16) {
                  t += f5(br, cr, dr) + hr[0];
                } else if (i < 32) {
                  t += f4(br, cr, dr) + hr[1];
                } else if (i < 48) {
                  t += f3(br, cr, dr) + hr[2];
                } else if (i < 64) {
                  t += f2(br, cr, dr) + hr[3];
                } else {
                  t += f1(br, cr, dr) + hr[4];
                }
                t = t | 0;
                t = rotl(t, sr[i]);
                t = t + er | 0;
                ar = er;
                er = dr;
                dr = rotl(cr, 10);
                cr = br;
                br = t;
              }
              t = H[1] + cl + dr | 0;
              H[1] = H[2] + dl + er | 0;
              H[2] = H[3] + el + ar | 0;
              H[3] = H[4] + al + br | 0;
              H[4] = H[0] + bl + cr | 0;
              H[0] = t;
            },
            _doFinalize: function() {
              var data = this._data;
              var dataWords = data.words;
              var nBitsTotal = this._nDataBytes * 8;
              var nBitsLeft = data.sigBytes * 8;
              dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
              dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotal << 8 | nBitsTotal >>> 24) & 16711935 | (nBitsTotal << 24 | nBitsTotal >>> 8) & 4278255360;
              data.sigBytes = (dataWords.length + 1) * 4;
              this._process();
              var hash = this._hash;
              var H = hash.words;
              for (var i = 0; i < 5; i++) {
                var H_i = H[i];
                H[i] = (H_i << 8 | H_i >>> 24) & 16711935 | (H_i << 24 | H_i >>> 8) & 4278255360;
              }
              return hash;
            },
            clone: function() {
              var clone = Hasher.clone.call(this);
              clone._hash = this._hash.clone();
              return clone;
            }
          });
          function f1(x, y, z) {
            return x ^ y ^ z;
          }
          function f2(x, y, z) {
            return x & y | ~x & z;
          }
          function f3(x, y, z) {
            return (x | ~y) ^ z;
          }
          function f4(x, y, z) {
            return x & z | y & ~z;
          }
          function f5(x, y, z) {
            return x ^ (y | ~z);
          }
          function rotl(x, n) {
            return x << n | x >>> 32 - n;
          }
          C.RIPEMD160 = Hasher._createHelper(RIPEMD160);
          C.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);
        })(Math);
        return CryptoJS2.RIPEMD160;
      });
    }
  });

  // node_modules/crypto-js/hmac.js
  var require_hmac = __commonJS({
    "node_modules/crypto-js/hmac.js"(exports, module) {
      (function(root, factory) {
        if (typeof exports === "object") {
          module.exports = exports = factory(require_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS2) {
        (function() {
          var C = CryptoJS2;
          var C_lib = C.lib;
          var Base = C_lib.Base;
          var C_enc = C.enc;
          var Utf8 = C_enc.Utf8;
          var C_algo = C.algo;
          var HMAC = C_algo.HMAC = Base.extend({
            /**
             * Initializes a newly created HMAC.
             *
             * @param {Hasher} hasher The hash algorithm to use.
             * @param {WordArray|string} key The secret key.
             *
             * @example
             *
             *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
             */
            init: function(hasher, key) {
              hasher = this._hasher = new hasher.init();
              if (typeof key == "string") {
                key = Utf8.parse(key);
              }
              var hasherBlockSize = hasher.blockSize;
              var hasherBlockSizeBytes = hasherBlockSize * 4;
              if (key.sigBytes > hasherBlockSizeBytes) {
                key = hasher.finalize(key);
              }
              key.clamp();
              var oKey = this._oKey = key.clone();
              var iKey = this._iKey = key.clone();
              var oKeyWords = oKey.words;
              var iKeyWords = iKey.words;
              for (var i = 0; i < hasherBlockSize; i++) {
                oKeyWords[i] ^= 1549556828;
                iKeyWords[i] ^= 909522486;
              }
              oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;
              this.reset();
            },
            /**
             * Resets this HMAC to its initial state.
             *
             * @example
             *
             *     hmacHasher.reset();
             */
            reset: function() {
              var hasher = this._hasher;
              hasher.reset();
              hasher.update(this._iKey);
            },
            /**
             * Updates this HMAC with a message.
             *
             * @param {WordArray|string} messageUpdate The message to append.
             *
             * @return {HMAC} This HMAC instance.
             *
             * @example
             *
             *     hmacHasher.update('message');
             *     hmacHasher.update(wordArray);
             */
            update: function(messageUpdate) {
              this._hasher.update(messageUpdate);
              return this;
            },
            /**
             * Finalizes the HMAC computation.
             * Note that the finalize operation is effectively a destructive, read-once operation.
             *
             * @param {WordArray|string} messageUpdate (Optional) A final message update.
             *
             * @return {WordArray} The HMAC.
             *
             * @example
             *
             *     var hmac = hmacHasher.finalize();
             *     var hmac = hmacHasher.finalize('message');
             *     var hmac = hmacHasher.finalize(wordArray);
             */
            finalize: function(messageUpdate) {
              var hasher = this._hasher;
              var innerHash = hasher.finalize(messageUpdate);
              hasher.reset();
              var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));
              return hmac;
            }
          });
        })();
      });
    }
  });

  // node_modules/crypto-js/pbkdf2.js
  var require_pbkdf2 = __commonJS({
    "node_modules/crypto-js/pbkdf2.js"(exports, module) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module.exports = exports = factory(require_core(), require_sha1(), require_hmac());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./sha1", "./hmac"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS2) {
        (function() {
          var C = CryptoJS2;
          var C_lib = C.lib;
          var Base = C_lib.Base;
          var WordArray = C_lib.WordArray;
          var C_algo = C.algo;
          var SHA1 = C_algo.SHA1;
          var HMAC = C_algo.HMAC;
          var PBKDF2 = C_algo.PBKDF2 = Base.extend({
            /**
             * Configuration options.
             *
             * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
             * @property {Hasher} hasher The hasher to use. Default: SHA1
             * @property {number} iterations The number of iterations to perform. Default: 1
             */
            cfg: Base.extend({
              keySize: 128 / 32,
              hasher: SHA1,
              iterations: 1
            }),
            /**
             * Initializes a newly created key derivation function.
             *
             * @param {Object} cfg (Optional) The configuration options to use for the derivation.
             *
             * @example
             *
             *     var kdf = CryptoJS.algo.PBKDF2.create();
             *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
             *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
             */
            init: function(cfg) {
              this.cfg = this.cfg.extend(cfg);
            },
            /**
             * Computes the Password-Based Key Derivation Function 2.
             *
             * @param {WordArray|string} password The password.
             * @param {WordArray|string} salt A salt.
             *
             * @return {WordArray} The derived key.
             *
             * @example
             *
             *     var key = kdf.compute(password, salt);
             */
            compute: function(password, salt) {
              var cfg = this.cfg;
              var hmac = HMAC.create(cfg.hasher, password);
              var derivedKey = WordArray.create();
              var blockIndex = WordArray.create([1]);
              var derivedKeyWords = derivedKey.words;
              var blockIndexWords = blockIndex.words;
              var keySize = cfg.keySize;
              var iterations = cfg.iterations;
              while (derivedKeyWords.length < keySize) {
                var block = hmac.update(salt).finalize(blockIndex);
                hmac.reset();
                var blockWords = block.words;
                var blockWordsLength = blockWords.length;
                var intermediate = block;
                for (var i = 1; i < iterations; i++) {
                  intermediate = hmac.finalize(intermediate);
                  hmac.reset();
                  var intermediateWords = intermediate.words;
                  for (var j = 0; j < blockWordsLength; j++) {
                    blockWords[j] ^= intermediateWords[j];
                  }
                }
                derivedKey.concat(block);
                blockIndexWords[0]++;
              }
              derivedKey.sigBytes = keySize * 4;
              return derivedKey;
            }
          });
          C.PBKDF2 = function(password, salt, cfg) {
            return PBKDF2.create(cfg).compute(password, salt);
          };
        })();
        return CryptoJS2.PBKDF2;
      });
    }
  });

  // node_modules/crypto-js/evpkdf.js
  var require_evpkdf = __commonJS({
    "node_modules/crypto-js/evpkdf.js"(exports, module) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module.exports = exports = factory(require_core(), require_sha1(), require_hmac());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./sha1", "./hmac"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS2) {
        (function() {
          var C = CryptoJS2;
          var C_lib = C.lib;
          var Base = C_lib.Base;
          var WordArray = C_lib.WordArray;
          var C_algo = C.algo;
          var MD5 = C_algo.MD5;
          var EvpKDF = C_algo.EvpKDF = Base.extend({
            /**
             * Configuration options.
             *
             * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
             * @property {Hasher} hasher The hash algorithm to use. Default: MD5
             * @property {number} iterations The number of iterations to perform. Default: 1
             */
            cfg: Base.extend({
              keySize: 128 / 32,
              hasher: MD5,
              iterations: 1
            }),
            /**
             * Initializes a newly created key derivation function.
             *
             * @param {Object} cfg (Optional) The configuration options to use for the derivation.
             *
             * @example
             *
             *     var kdf = CryptoJS.algo.EvpKDF.create();
             *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
             *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
             */
            init: function(cfg) {
              this.cfg = this.cfg.extend(cfg);
            },
            /**
             * Derives a key from a password.
             *
             * @param {WordArray|string} password The password.
             * @param {WordArray|string} salt A salt.
             *
             * @return {WordArray} The derived key.
             *
             * @example
             *
             *     var key = kdf.compute(password, salt);
             */
            compute: function(password, salt) {
              var block;
              var cfg = this.cfg;
              var hasher = cfg.hasher.create();
              var derivedKey = WordArray.create();
              var derivedKeyWords = derivedKey.words;
              var keySize = cfg.keySize;
              var iterations = cfg.iterations;
              while (derivedKeyWords.length < keySize) {
                if (block) {
                  hasher.update(block);
                }
                block = hasher.update(password).finalize(salt);
                hasher.reset();
                for (var i = 1; i < iterations; i++) {
                  block = hasher.finalize(block);
                  hasher.reset();
                }
                derivedKey.concat(block);
              }
              derivedKey.sigBytes = keySize * 4;
              return derivedKey;
            }
          });
          C.EvpKDF = function(password, salt, cfg) {
            return EvpKDF.create(cfg).compute(password, salt);
          };
        })();
        return CryptoJS2.EvpKDF;
      });
    }
  });

  // node_modules/crypto-js/cipher-core.js
  var require_cipher_core = __commonJS({
    "node_modules/crypto-js/cipher-core.js"(exports, module) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module.exports = exports = factory(require_core(), require_evpkdf());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./evpkdf"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS2) {
        CryptoJS2.lib.Cipher || function(undefined2) {
          var C = CryptoJS2;
          var C_lib = C.lib;
          var Base = C_lib.Base;
          var WordArray = C_lib.WordArray;
          var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
          var C_enc = C.enc;
          var Utf8 = C_enc.Utf8;
          var Base64 = C_enc.Base64;
          var C_algo = C.algo;
          var EvpKDF = C_algo.EvpKDF;
          var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
            /**
             * Configuration options.
             *
             * @property {WordArray} iv The IV to use for this operation.
             */
            cfg: Base.extend(),
            /**
             * Creates this cipher in encryption mode.
             *
             * @param {WordArray} key The key.
             * @param {Object} cfg (Optional) The configuration options to use for this operation.
             *
             * @return {Cipher} A cipher instance.
             *
             * @static
             *
             * @example
             *
             *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
             */
            createEncryptor: function(key, cfg) {
              return this.create(this._ENC_XFORM_MODE, key, cfg);
            },
            /**
             * Creates this cipher in decryption mode.
             *
             * @param {WordArray} key The key.
             * @param {Object} cfg (Optional) The configuration options to use for this operation.
             *
             * @return {Cipher} A cipher instance.
             *
             * @static
             *
             * @example
             *
             *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
             */
            createDecryptor: function(key, cfg) {
              return this.create(this._DEC_XFORM_MODE, key, cfg);
            },
            /**
             * Initializes a newly created cipher.
             *
             * @param {number} xformMode Either the encryption or decryption transormation mode constant.
             * @param {WordArray} key The key.
             * @param {Object} cfg (Optional) The configuration options to use for this operation.
             *
             * @example
             *
             *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
             */
            init: function(xformMode, key, cfg) {
              this.cfg = this.cfg.extend(cfg);
              this._xformMode = xformMode;
              this._key = key;
              this.reset();
            },
            /**
             * Resets this cipher to its initial state.
             *
             * @example
             *
             *     cipher.reset();
             */
            reset: function() {
              BufferedBlockAlgorithm.reset.call(this);
              this._doReset();
            },
            /**
             * Adds data to be encrypted or decrypted.
             *
             * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
             *
             * @return {WordArray} The data after processing.
             *
             * @example
             *
             *     var encrypted = cipher.process('data');
             *     var encrypted = cipher.process(wordArray);
             */
            process: function(dataUpdate) {
              this._append(dataUpdate);
              return this._process();
            },
            /**
             * Finalizes the encryption or decryption process.
             * Note that the finalize operation is effectively a destructive, read-once operation.
             *
             * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
             *
             * @return {WordArray} The data after final processing.
             *
             * @example
             *
             *     var encrypted = cipher.finalize();
             *     var encrypted = cipher.finalize('data');
             *     var encrypted = cipher.finalize(wordArray);
             */
            finalize: function(dataUpdate) {
              if (dataUpdate) {
                this._append(dataUpdate);
              }
              var finalProcessedData = this._doFinalize();
              return finalProcessedData;
            },
            keySize: 128 / 32,
            ivSize: 128 / 32,
            _ENC_XFORM_MODE: 1,
            _DEC_XFORM_MODE: 2,
            /**
             * Creates shortcut functions to a cipher's object interface.
             *
             * @param {Cipher} cipher The cipher to create a helper for.
             *
             * @return {Object} An object with encrypt and decrypt shortcut functions.
             *
             * @static
             *
             * @example
             *
             *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
             */
            _createHelper: function() {
              function selectCipherStrategy(key) {
                if (typeof key == "string") {
                  return PasswordBasedCipher;
                } else {
                  return SerializableCipher;
                }
              }
              return function(cipher) {
                return {
                  encrypt: function(message, key, cfg) {
                    return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
                  },
                  decrypt: function(ciphertext, key, cfg) {
                    return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
                  }
                };
              };
            }()
          });
          var StreamCipher = C_lib.StreamCipher = Cipher.extend({
            _doFinalize: function() {
              var finalProcessedBlocks = this._process(true);
              return finalProcessedBlocks;
            },
            blockSize: 1
          });
          var C_mode = C.mode = {};
          var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
            /**
             * Creates this mode for encryption.
             *
             * @param {Cipher} cipher A block cipher instance.
             * @param {Array} iv The IV words.
             *
             * @static
             *
             * @example
             *
             *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
             */
            createEncryptor: function(cipher, iv) {
              return this.Encryptor.create(cipher, iv);
            },
            /**
             * Creates this mode for decryption.
             *
             * @param {Cipher} cipher A block cipher instance.
             * @param {Array} iv The IV words.
             *
             * @static
             *
             * @example
             *
             *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
             */
            createDecryptor: function(cipher, iv) {
              return this.Decryptor.create(cipher, iv);
            },
            /**
             * Initializes a newly created mode.
             *
             * @param {Cipher} cipher A block cipher instance.
             * @param {Array} iv The IV words.
             *
             * @example
             *
             *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
             */
            init: function(cipher, iv) {
              this._cipher = cipher;
              this._iv = iv;
            }
          });
          var CBC = C_mode.CBC = function() {
            var CBC2 = BlockCipherMode.extend();
            CBC2.Encryptor = CBC2.extend({
              /**
               * Processes the data block at offset.
               *
               * @param {Array} words The data words to operate on.
               * @param {number} offset The offset where the block starts.
               *
               * @example
               *
               *     mode.processBlock(data.words, offset);
               */
              processBlock: function(words, offset) {
                var cipher = this._cipher;
                var blockSize = cipher.blockSize;
                xorBlock.call(this, words, offset, blockSize);
                cipher.encryptBlock(words, offset);
                this._prevBlock = words.slice(offset, offset + blockSize);
              }
            });
            CBC2.Decryptor = CBC2.extend({
              /**
               * Processes the data block at offset.
               *
               * @param {Array} words The data words to operate on.
               * @param {number} offset The offset where the block starts.
               *
               * @example
               *
               *     mode.processBlock(data.words, offset);
               */
              processBlock: function(words, offset) {
                var cipher = this._cipher;
                var blockSize = cipher.blockSize;
                var thisBlock = words.slice(offset, offset + blockSize);
                cipher.decryptBlock(words, offset);
                xorBlock.call(this, words, offset, blockSize);
                this._prevBlock = thisBlock;
              }
            });
            function xorBlock(words, offset, blockSize) {
              var block;
              var iv = this._iv;
              if (iv) {
                block = iv;
                this._iv = undefined2;
              } else {
                block = this._prevBlock;
              }
              for (var i = 0; i < blockSize; i++) {
                words[offset + i] ^= block[i];
              }
            }
            return CBC2;
          }();
          var C_pad = C.pad = {};
          var Pkcs7 = C_pad.Pkcs7 = {
            /**
             * Pads data using the algorithm defined in PKCS #5/7.
             *
             * @param {WordArray} data The data to pad.
             * @param {number} blockSize The multiple that the data should be padded to.
             *
             * @static
             *
             * @example
             *
             *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
             */
            pad: function(data, blockSize) {
              var blockSizeBytes = blockSize * 4;
              var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;
              var paddingWord = nPaddingBytes << 24 | nPaddingBytes << 16 | nPaddingBytes << 8 | nPaddingBytes;
              var paddingWords = [];
              for (var i = 0; i < nPaddingBytes; i += 4) {
                paddingWords.push(paddingWord);
              }
              var padding = WordArray.create(paddingWords, nPaddingBytes);
              data.concat(padding);
            },
            /**
             * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
             *
             * @param {WordArray} data The data to unpad.
             *
             * @static
             *
             * @example
             *
             *     CryptoJS.pad.Pkcs7.unpad(wordArray);
             */
            unpad: function(data) {
              var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 255;
              data.sigBytes -= nPaddingBytes;
            }
          };
          var BlockCipher = C_lib.BlockCipher = Cipher.extend({
            /**
             * Configuration options.
             *
             * @property {Mode} mode The block mode to use. Default: CBC
             * @property {Padding} padding The padding strategy to use. Default: Pkcs7
             */
            cfg: Cipher.cfg.extend({
              mode: CBC,
              padding: Pkcs7
            }),
            reset: function() {
              var modeCreator;
              Cipher.reset.call(this);
              var cfg = this.cfg;
              var iv = cfg.iv;
              var mode = cfg.mode;
              if (this._xformMode == this._ENC_XFORM_MODE) {
                modeCreator = mode.createEncryptor;
              } else {
                modeCreator = mode.createDecryptor;
                this._minBufferSize = 1;
              }
              if (this._mode && this._mode.__creator == modeCreator) {
                this._mode.init(this, iv && iv.words);
              } else {
                this._mode = modeCreator.call(mode, this, iv && iv.words);
                this._mode.__creator = modeCreator;
              }
            },
            _doProcessBlock: function(words, offset) {
              this._mode.processBlock(words, offset);
            },
            _doFinalize: function() {
              var finalProcessedBlocks;
              var padding = this.cfg.padding;
              if (this._xformMode == this._ENC_XFORM_MODE) {
                padding.pad(this._data, this.blockSize);
                finalProcessedBlocks = this._process(true);
              } else {
                finalProcessedBlocks = this._process(true);
                padding.unpad(finalProcessedBlocks);
              }
              return finalProcessedBlocks;
            },
            blockSize: 128 / 32
          });
          var CipherParams = C_lib.CipherParams = Base.extend({
            /**
             * Initializes a newly created cipher params object.
             *
             * @param {Object} cipherParams An object with any of the possible cipher parameters.
             *
             * @example
             *
             *     var cipherParams = CryptoJS.lib.CipherParams.create({
             *         ciphertext: ciphertextWordArray,
             *         key: keyWordArray,
             *         iv: ivWordArray,
             *         salt: saltWordArray,
             *         algorithm: CryptoJS.algo.AES,
             *         mode: CryptoJS.mode.CBC,
             *         padding: CryptoJS.pad.PKCS7,
             *         blockSize: 4,
             *         formatter: CryptoJS.format.OpenSSL
             *     });
             */
            init: function(cipherParams) {
              this.mixIn(cipherParams);
            },
            /**
             * Converts this cipher params object to a string.
             *
             * @param {Format} formatter (Optional) The formatting strategy to use.
             *
             * @return {string} The stringified cipher params.
             *
             * @throws Error If neither the formatter nor the default formatter is set.
             *
             * @example
             *
             *     var string = cipherParams + '';
             *     var string = cipherParams.toString();
             *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
             */
            toString: function(formatter) {
              return (formatter || this.formatter).stringify(this);
            }
          });
          var C_format = C.format = {};
          var OpenSSLFormatter = C_format.OpenSSL = {
            /**
             * Converts a cipher params object to an OpenSSL-compatible string.
             *
             * @param {CipherParams} cipherParams The cipher params object.
             *
             * @return {string} The OpenSSL-compatible string.
             *
             * @static
             *
             * @example
             *
             *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
             */
            stringify: function(cipherParams) {
              var wordArray;
              var ciphertext = cipherParams.ciphertext;
              var salt = cipherParams.salt;
              if (salt) {
                wordArray = WordArray.create([1398893684, 1701076831]).concat(salt).concat(ciphertext);
              } else {
                wordArray = ciphertext;
              }
              return wordArray.toString(Base64);
            },
            /**
             * Converts an OpenSSL-compatible string to a cipher params object.
             *
             * @param {string} openSSLStr The OpenSSL-compatible string.
             *
             * @return {CipherParams} The cipher params object.
             *
             * @static
             *
             * @example
             *
             *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
             */
            parse: function(openSSLStr) {
              var salt;
              var ciphertext = Base64.parse(openSSLStr);
              var ciphertextWords = ciphertext.words;
              if (ciphertextWords[0] == 1398893684 && ciphertextWords[1] == 1701076831) {
                salt = WordArray.create(ciphertextWords.slice(2, 4));
                ciphertextWords.splice(0, 4);
                ciphertext.sigBytes -= 16;
              }
              return CipherParams.create({ ciphertext, salt });
            }
          };
          var SerializableCipher = C_lib.SerializableCipher = Base.extend({
            /**
             * Configuration options.
             *
             * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
             */
            cfg: Base.extend({
              format: OpenSSLFormatter
            }),
            /**
             * Encrypts a message.
             *
             * @param {Cipher} cipher The cipher algorithm to use.
             * @param {WordArray|string} message The message to encrypt.
             * @param {WordArray} key The key.
             * @param {Object} cfg (Optional) The configuration options to use for this operation.
             *
             * @return {CipherParams} A cipher params object.
             *
             * @static
             *
             * @example
             *
             *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
             *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
             *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
             */
            encrypt: function(cipher, message, key, cfg) {
              cfg = this.cfg.extend(cfg);
              var encryptor = cipher.createEncryptor(key, cfg);
              var ciphertext = encryptor.finalize(message);
              var cipherCfg = encryptor.cfg;
              return CipherParams.create({
                ciphertext,
                key,
                iv: cipherCfg.iv,
                algorithm: cipher,
                mode: cipherCfg.mode,
                padding: cipherCfg.padding,
                blockSize: cipher.blockSize,
                formatter: cfg.format
              });
            },
            /**
             * Decrypts serialized ciphertext.
             *
             * @param {Cipher} cipher The cipher algorithm to use.
             * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
             * @param {WordArray} key The key.
             * @param {Object} cfg (Optional) The configuration options to use for this operation.
             *
             * @return {WordArray} The plaintext.
             *
             * @static
             *
             * @example
             *
             *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
             *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
             */
            decrypt: function(cipher, ciphertext, key, cfg) {
              cfg = this.cfg.extend(cfg);
              ciphertext = this._parse(ciphertext, cfg.format);
              var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);
              return plaintext;
            },
            /**
             * Converts serialized ciphertext to CipherParams,
             * else assumed CipherParams already and returns ciphertext unchanged.
             *
             * @param {CipherParams|string} ciphertext The ciphertext.
             * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
             *
             * @return {CipherParams} The unserialized ciphertext.
             *
             * @static
             *
             * @example
             *
             *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
             */
            _parse: function(ciphertext, format) {
              if (typeof ciphertext == "string") {
                return format.parse(ciphertext, this);
              } else {
                return ciphertext;
              }
            }
          });
          var C_kdf = C.kdf = {};
          var OpenSSLKdf = C_kdf.OpenSSL = {
            /**
             * Derives a key and IV from a password.
             *
             * @param {string} password The password to derive from.
             * @param {number} keySize The size in words of the key to generate.
             * @param {number} ivSize The size in words of the IV to generate.
             * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
             *
             * @return {CipherParams} A cipher params object with the key, IV, and salt.
             *
             * @static
             *
             * @example
             *
             *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
             *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
             */
            execute: function(password, keySize, ivSize, salt) {
              if (!salt) {
                salt = WordArray.random(64 / 8);
              }
              var key = EvpKDF.create({ keySize: keySize + ivSize }).compute(password, salt);
              var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
              key.sigBytes = keySize * 4;
              return CipherParams.create({ key, iv, salt });
            }
          };
          var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
            /**
             * Configuration options.
             *
             * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
             */
            cfg: SerializableCipher.cfg.extend({
              kdf: OpenSSLKdf
            }),
            /**
             * Encrypts a message using a password.
             *
             * @param {Cipher} cipher The cipher algorithm to use.
             * @param {WordArray|string} message The message to encrypt.
             * @param {string} password The password.
             * @param {Object} cfg (Optional) The configuration options to use for this operation.
             *
             * @return {CipherParams} A cipher params object.
             *
             * @static
             *
             * @example
             *
             *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
             *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
             */
            encrypt: function(cipher, message, password, cfg) {
              cfg = this.cfg.extend(cfg);
              var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize);
              cfg.iv = derivedParams.iv;
              var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);
              ciphertext.mixIn(derivedParams);
              return ciphertext;
            },
            /**
             * Decrypts serialized ciphertext using a password.
             *
             * @param {Cipher} cipher The cipher algorithm to use.
             * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
             * @param {string} password The password.
             * @param {Object} cfg (Optional) The configuration options to use for this operation.
             *
             * @return {WordArray} The plaintext.
             *
             * @static
             *
             * @example
             *
             *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
             *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
             */
            decrypt: function(cipher, ciphertext, password, cfg) {
              cfg = this.cfg.extend(cfg);
              ciphertext = this._parse(ciphertext, cfg.format);
              var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt);
              cfg.iv = derivedParams.iv;
              var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);
              return plaintext;
            }
          });
        }();
      });
    }
  });

  // node_modules/crypto-js/mode-cfb.js
  var require_mode_cfb = __commonJS({
    "node_modules/crypto-js/mode-cfb.js"(exports, module) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module.exports = exports = factory(require_core(), require_cipher_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./cipher-core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS2) {
        CryptoJS2.mode.CFB = function() {
          var CFB = CryptoJS2.lib.BlockCipherMode.extend();
          CFB.Encryptor = CFB.extend({
            processBlock: function(words, offset) {
              var cipher = this._cipher;
              var blockSize = cipher.blockSize;
              generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);
              this._prevBlock = words.slice(offset, offset + blockSize);
            }
          });
          CFB.Decryptor = CFB.extend({
            processBlock: function(words, offset) {
              var cipher = this._cipher;
              var blockSize = cipher.blockSize;
              var thisBlock = words.slice(offset, offset + blockSize);
              generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);
              this._prevBlock = thisBlock;
            }
          });
          function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
            var keystream;
            var iv = this._iv;
            if (iv) {
              keystream = iv.slice(0);
              this._iv = void 0;
            } else {
              keystream = this._prevBlock;
            }
            cipher.encryptBlock(keystream, 0);
            for (var i = 0; i < blockSize; i++) {
              words[offset + i] ^= keystream[i];
            }
          }
          return CFB;
        }();
        return CryptoJS2.mode.CFB;
      });
    }
  });

  // node_modules/crypto-js/mode-ctr.js
  var require_mode_ctr = __commonJS({
    "node_modules/crypto-js/mode-ctr.js"(exports, module) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module.exports = exports = factory(require_core(), require_cipher_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./cipher-core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS2) {
        CryptoJS2.mode.CTR = function() {
          var CTR = CryptoJS2.lib.BlockCipherMode.extend();
          var Encryptor = CTR.Encryptor = CTR.extend({
            processBlock: function(words, offset) {
              var cipher = this._cipher;
              var blockSize = cipher.blockSize;
              var iv = this._iv;
              var counter = this._counter;
              if (iv) {
                counter = this._counter = iv.slice(0);
                this._iv = void 0;
              }
              var keystream = counter.slice(0);
              cipher.encryptBlock(keystream, 0);
              counter[blockSize - 1] = counter[blockSize - 1] + 1 | 0;
              for (var i = 0; i < blockSize; i++) {
                words[offset + i] ^= keystream[i];
              }
            }
          });
          CTR.Decryptor = Encryptor;
          return CTR;
        }();
        return CryptoJS2.mode.CTR;
      });
    }
  });

  // node_modules/crypto-js/mode-ctr-gladman.js
  var require_mode_ctr_gladman = __commonJS({
    "node_modules/crypto-js/mode-ctr-gladman.js"(exports, module) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module.exports = exports = factory(require_core(), require_cipher_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./cipher-core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS2) {
        CryptoJS2.mode.CTRGladman = function() {
          var CTRGladman = CryptoJS2.lib.BlockCipherMode.extend();
          function incWord(word) {
            if ((word >> 24 & 255) === 255) {
              var b1 = word >> 16 & 255;
              var b2 = word >> 8 & 255;
              var b3 = word & 255;
              if (b1 === 255) {
                b1 = 0;
                if (b2 === 255) {
                  b2 = 0;
                  if (b3 === 255) {
                    b3 = 0;
                  } else {
                    ++b3;
                  }
                } else {
                  ++b2;
                }
              } else {
                ++b1;
              }
              word = 0;
              word += b1 << 16;
              word += b2 << 8;
              word += b3;
            } else {
              word += 1 << 24;
            }
            return word;
          }
          function incCounter(counter) {
            if ((counter[0] = incWord(counter[0])) === 0) {
              counter[1] = incWord(counter[1]);
            }
            return counter;
          }
          var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({
            processBlock: function(words, offset) {
              var cipher = this._cipher;
              var blockSize = cipher.blockSize;
              var iv = this._iv;
              var counter = this._counter;
              if (iv) {
                counter = this._counter = iv.slice(0);
                this._iv = void 0;
              }
              incCounter(counter);
              var keystream = counter.slice(0);
              cipher.encryptBlock(keystream, 0);
              for (var i = 0; i < blockSize; i++) {
                words[offset + i] ^= keystream[i];
              }
            }
          });
          CTRGladman.Decryptor = Encryptor;
          return CTRGladman;
        }();
        return CryptoJS2.mode.CTRGladman;
      });
    }
  });

  // node_modules/crypto-js/mode-ofb.js
  var require_mode_ofb = __commonJS({
    "node_modules/crypto-js/mode-ofb.js"(exports, module) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module.exports = exports = factory(require_core(), require_cipher_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./cipher-core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS2) {
        CryptoJS2.mode.OFB = function() {
          var OFB = CryptoJS2.lib.BlockCipherMode.extend();
          var Encryptor = OFB.Encryptor = OFB.extend({
            processBlock: function(words, offset) {
              var cipher = this._cipher;
              var blockSize = cipher.blockSize;
              var iv = this._iv;
              var keystream = this._keystream;
              if (iv) {
                keystream = this._keystream = iv.slice(0);
                this._iv = void 0;
              }
              cipher.encryptBlock(keystream, 0);
              for (var i = 0; i < blockSize; i++) {
                words[offset + i] ^= keystream[i];
              }
            }
          });
          OFB.Decryptor = Encryptor;
          return OFB;
        }();
        return CryptoJS2.mode.OFB;
      });
    }
  });

  // node_modules/crypto-js/mode-ecb.js
  var require_mode_ecb = __commonJS({
    "node_modules/crypto-js/mode-ecb.js"(exports, module) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module.exports = exports = factory(require_core(), require_cipher_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./cipher-core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS2) {
        CryptoJS2.mode.ECB = function() {
          var ECB = CryptoJS2.lib.BlockCipherMode.extend();
          ECB.Encryptor = ECB.extend({
            processBlock: function(words, offset) {
              this._cipher.encryptBlock(words, offset);
            }
          });
          ECB.Decryptor = ECB.extend({
            processBlock: function(words, offset) {
              this._cipher.decryptBlock(words, offset);
            }
          });
          return ECB;
        }();
        return CryptoJS2.mode.ECB;
      });
    }
  });

  // node_modules/crypto-js/pad-ansix923.js
  var require_pad_ansix923 = __commonJS({
    "node_modules/crypto-js/pad-ansix923.js"(exports, module) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module.exports = exports = factory(require_core(), require_cipher_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./cipher-core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS2) {
        CryptoJS2.pad.AnsiX923 = {
          pad: function(data, blockSize) {
            var dataSigBytes = data.sigBytes;
            var blockSizeBytes = blockSize * 4;
            var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;
            var lastBytePos = dataSigBytes + nPaddingBytes - 1;
            data.clamp();
            data.words[lastBytePos >>> 2] |= nPaddingBytes << 24 - lastBytePos % 4 * 8;
            data.sigBytes += nPaddingBytes;
          },
          unpad: function(data) {
            var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 255;
            data.sigBytes -= nPaddingBytes;
          }
        };
        return CryptoJS2.pad.Ansix923;
      });
    }
  });

  // node_modules/crypto-js/pad-iso10126.js
  var require_pad_iso10126 = __commonJS({
    "node_modules/crypto-js/pad-iso10126.js"(exports, module) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module.exports = exports = factory(require_core(), require_cipher_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./cipher-core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS2) {
        CryptoJS2.pad.Iso10126 = {
          pad: function(data, blockSize) {
            var blockSizeBytes = blockSize * 4;
            var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;
            data.concat(CryptoJS2.lib.WordArray.random(nPaddingBytes - 1)).concat(CryptoJS2.lib.WordArray.create([nPaddingBytes << 24], 1));
          },
          unpad: function(data) {
            var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 255;
            data.sigBytes -= nPaddingBytes;
          }
        };
        return CryptoJS2.pad.Iso10126;
      });
    }
  });

  // node_modules/crypto-js/pad-iso97971.js
  var require_pad_iso97971 = __commonJS({
    "node_modules/crypto-js/pad-iso97971.js"(exports, module) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module.exports = exports = factory(require_core(), require_cipher_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./cipher-core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS2) {
        CryptoJS2.pad.Iso97971 = {
          pad: function(data, blockSize) {
            data.concat(CryptoJS2.lib.WordArray.create([2147483648], 1));
            CryptoJS2.pad.ZeroPadding.pad(data, blockSize);
          },
          unpad: function(data) {
            CryptoJS2.pad.ZeroPadding.unpad(data);
            data.sigBytes--;
          }
        };
        return CryptoJS2.pad.Iso97971;
      });
    }
  });

  // node_modules/crypto-js/pad-zeropadding.js
  var require_pad_zeropadding = __commonJS({
    "node_modules/crypto-js/pad-zeropadding.js"(exports, module) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module.exports = exports = factory(require_core(), require_cipher_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./cipher-core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS2) {
        CryptoJS2.pad.ZeroPadding = {
          pad: function(data, blockSize) {
            var blockSizeBytes = blockSize * 4;
            data.clamp();
            data.sigBytes += blockSizeBytes - (data.sigBytes % blockSizeBytes || blockSizeBytes);
          },
          unpad: function(data) {
            var dataWords = data.words;
            var i = data.sigBytes - 1;
            for (var i = data.sigBytes - 1; i >= 0; i--) {
              if (dataWords[i >>> 2] >>> 24 - i % 4 * 8 & 255) {
                data.sigBytes = i + 1;
                break;
              }
            }
          }
        };
        return CryptoJS2.pad.ZeroPadding;
      });
    }
  });

  // node_modules/crypto-js/pad-nopadding.js
  var require_pad_nopadding = __commonJS({
    "node_modules/crypto-js/pad-nopadding.js"(exports, module) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module.exports = exports = factory(require_core(), require_cipher_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./cipher-core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS2) {
        CryptoJS2.pad.NoPadding = {
          pad: function() {
          },
          unpad: function() {
          }
        };
        return CryptoJS2.pad.NoPadding;
      });
    }
  });

  // node_modules/crypto-js/format-hex.js
  var require_format_hex = __commonJS({
    "node_modules/crypto-js/format-hex.js"(exports, module) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module.exports = exports = factory(require_core(), require_cipher_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./cipher-core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS2) {
        (function(undefined2) {
          var C = CryptoJS2;
          var C_lib = C.lib;
          var CipherParams = C_lib.CipherParams;
          var C_enc = C.enc;
          var Hex = C_enc.Hex;
          var C_format = C.format;
          var HexFormatter = C_format.Hex = {
            /**
             * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
             *
             * @param {CipherParams} cipherParams The cipher params object.
             *
             * @return {string} The hexadecimally encoded string.
             *
             * @static
             *
             * @example
             *
             *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
             */
            stringify: function(cipherParams) {
              return cipherParams.ciphertext.toString(Hex);
            },
            /**
             * Converts a hexadecimally encoded ciphertext string to a cipher params object.
             *
             * @param {string} input The hexadecimally encoded string.
             *
             * @return {CipherParams} The cipher params object.
             *
             * @static
             *
             * @example
             *
             *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
             */
            parse: function(input) {
              var ciphertext = Hex.parse(input);
              return CipherParams.create({ ciphertext });
            }
          };
        })();
        return CryptoJS2.format.Hex;
      });
    }
  });

  // node_modules/crypto-js/aes.js
  var require_aes = __commonJS({
    "node_modules/crypto-js/aes.js"(exports, module) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module.exports = exports = factory(require_core(), require_enc_base64(), require_md5(), require_evpkdf(), require_cipher_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS2) {
        (function() {
          var C = CryptoJS2;
          var C_lib = C.lib;
          var BlockCipher = C_lib.BlockCipher;
          var C_algo = C.algo;
          var SBOX = [];
          var INV_SBOX = [];
          var SUB_MIX_0 = [];
          var SUB_MIX_1 = [];
          var SUB_MIX_2 = [];
          var SUB_MIX_3 = [];
          var INV_SUB_MIX_0 = [];
          var INV_SUB_MIX_1 = [];
          var INV_SUB_MIX_2 = [];
          var INV_SUB_MIX_3 = [];
          (function() {
            var d = [];
            for (var i = 0; i < 256; i++) {
              if (i < 128) {
                d[i] = i << 1;
              } else {
                d[i] = i << 1 ^ 283;
              }
            }
            var x = 0;
            var xi = 0;
            for (var i = 0; i < 256; i++) {
              var sx = xi ^ xi << 1 ^ xi << 2 ^ xi << 3 ^ xi << 4;
              sx = sx >>> 8 ^ sx & 255 ^ 99;
              SBOX[x] = sx;
              INV_SBOX[sx] = x;
              var x2 = d[x];
              var x4 = d[x2];
              var x8 = d[x4];
              var t = d[sx] * 257 ^ sx * 16843008;
              SUB_MIX_0[x] = t << 24 | t >>> 8;
              SUB_MIX_1[x] = t << 16 | t >>> 16;
              SUB_MIX_2[x] = t << 8 | t >>> 24;
              SUB_MIX_3[x] = t;
              var t = x8 * 16843009 ^ x4 * 65537 ^ x2 * 257 ^ x * 16843008;
              INV_SUB_MIX_0[sx] = t << 24 | t >>> 8;
              INV_SUB_MIX_1[sx] = t << 16 | t >>> 16;
              INV_SUB_MIX_2[sx] = t << 8 | t >>> 24;
              INV_SUB_MIX_3[sx] = t;
              if (!x) {
                x = xi = 1;
              } else {
                x = x2 ^ d[d[d[x8 ^ x2]]];
                xi ^= d[d[xi]];
              }
            }
          })();
          var RCON = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
          var AES = C_algo.AES = BlockCipher.extend({
            _doReset: function() {
              var t;
              if (this._nRounds && this._keyPriorReset === this._key) {
                return;
              }
              var key = this._keyPriorReset = this._key;
              var keyWords = key.words;
              var keySize = key.sigBytes / 4;
              var nRounds = this._nRounds = keySize + 6;
              var ksRows = (nRounds + 1) * 4;
              var keySchedule = this._keySchedule = [];
              for (var ksRow = 0; ksRow < ksRows; ksRow++) {
                if (ksRow < keySize) {
                  keySchedule[ksRow] = keyWords[ksRow];
                } else {
                  t = keySchedule[ksRow - 1];
                  if (!(ksRow % keySize)) {
                    t = t << 8 | t >>> 24;
                    t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 255] << 16 | SBOX[t >>> 8 & 255] << 8 | SBOX[t & 255];
                    t ^= RCON[ksRow / keySize | 0] << 24;
                  } else if (keySize > 6 && ksRow % keySize == 4) {
                    t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 255] << 16 | SBOX[t >>> 8 & 255] << 8 | SBOX[t & 255];
                  }
                  keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
                }
              }
              var invKeySchedule = this._invKeySchedule = [];
              for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
                var ksRow = ksRows - invKsRow;
                if (invKsRow % 4) {
                  var t = keySchedule[ksRow];
                } else {
                  var t = keySchedule[ksRow - 4];
                }
                if (invKsRow < 4 || ksRow <= 4) {
                  invKeySchedule[invKsRow] = t;
                } else {
                  invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[t >>> 16 & 255]] ^ INV_SUB_MIX_2[SBOX[t >>> 8 & 255]] ^ INV_SUB_MIX_3[SBOX[t & 255]];
                }
              }
            },
            encryptBlock: function(M, offset) {
              this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
            },
            decryptBlock: function(M, offset) {
              var t = M[offset + 1];
              M[offset + 1] = M[offset + 3];
              M[offset + 3] = t;
              this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);
              var t = M[offset + 1];
              M[offset + 1] = M[offset + 3];
              M[offset + 3] = t;
            },
            _doCryptBlock: function(M, offset, keySchedule, SUB_MIX_02, SUB_MIX_12, SUB_MIX_22, SUB_MIX_32, SBOX2) {
              var nRounds = this._nRounds;
              var s0 = M[offset] ^ keySchedule[0];
              var s1 = M[offset + 1] ^ keySchedule[1];
              var s2 = M[offset + 2] ^ keySchedule[2];
              var s3 = M[offset + 3] ^ keySchedule[3];
              var ksRow = 4;
              for (var round = 1; round < nRounds; round++) {
                var t0 = SUB_MIX_02[s0 >>> 24] ^ SUB_MIX_12[s1 >>> 16 & 255] ^ SUB_MIX_22[s2 >>> 8 & 255] ^ SUB_MIX_32[s3 & 255] ^ keySchedule[ksRow++];
                var t1 = SUB_MIX_02[s1 >>> 24] ^ SUB_MIX_12[s2 >>> 16 & 255] ^ SUB_MIX_22[s3 >>> 8 & 255] ^ SUB_MIX_32[s0 & 255] ^ keySchedule[ksRow++];
                var t2 = SUB_MIX_02[s2 >>> 24] ^ SUB_MIX_12[s3 >>> 16 & 255] ^ SUB_MIX_22[s0 >>> 8 & 255] ^ SUB_MIX_32[s1 & 255] ^ keySchedule[ksRow++];
                var t3 = SUB_MIX_02[s3 >>> 24] ^ SUB_MIX_12[s0 >>> 16 & 255] ^ SUB_MIX_22[s1 >>> 8 & 255] ^ SUB_MIX_32[s2 & 255] ^ keySchedule[ksRow++];
                s0 = t0;
                s1 = t1;
                s2 = t2;
                s3 = t3;
              }
              var t0 = (SBOX2[s0 >>> 24] << 24 | SBOX2[s1 >>> 16 & 255] << 16 | SBOX2[s2 >>> 8 & 255] << 8 | SBOX2[s3 & 255]) ^ keySchedule[ksRow++];
              var t1 = (SBOX2[s1 >>> 24] << 24 | SBOX2[s2 >>> 16 & 255] << 16 | SBOX2[s3 >>> 8 & 255] << 8 | SBOX2[s0 & 255]) ^ keySchedule[ksRow++];
              var t2 = (SBOX2[s2 >>> 24] << 24 | SBOX2[s3 >>> 16 & 255] << 16 | SBOX2[s0 >>> 8 & 255] << 8 | SBOX2[s1 & 255]) ^ keySchedule[ksRow++];
              var t3 = (SBOX2[s3 >>> 24] << 24 | SBOX2[s0 >>> 16 & 255] << 16 | SBOX2[s1 >>> 8 & 255] << 8 | SBOX2[s2 & 255]) ^ keySchedule[ksRow++];
              M[offset] = t0;
              M[offset + 1] = t1;
              M[offset + 2] = t2;
              M[offset + 3] = t3;
            },
            keySize: 256 / 32
          });
          C.AES = BlockCipher._createHelper(AES);
        })();
        return CryptoJS2.AES;
      });
    }
  });

  // node_modules/crypto-js/tripledes.js
  var require_tripledes = __commonJS({
    "node_modules/crypto-js/tripledes.js"(exports, module) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module.exports = exports = factory(require_core(), require_enc_base64(), require_md5(), require_evpkdf(), require_cipher_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS2) {
        (function() {
          var C = CryptoJS2;
          var C_lib = C.lib;
          var WordArray = C_lib.WordArray;
          var BlockCipher = C_lib.BlockCipher;
          var C_algo = C.algo;
          var PC1 = [
            57,
            49,
            41,
            33,
            25,
            17,
            9,
            1,
            58,
            50,
            42,
            34,
            26,
            18,
            10,
            2,
            59,
            51,
            43,
            35,
            27,
            19,
            11,
            3,
            60,
            52,
            44,
            36,
            63,
            55,
            47,
            39,
            31,
            23,
            15,
            7,
            62,
            54,
            46,
            38,
            30,
            22,
            14,
            6,
            61,
            53,
            45,
            37,
            29,
            21,
            13,
            5,
            28,
            20,
            12,
            4
          ];
          var PC2 = [
            14,
            17,
            11,
            24,
            1,
            5,
            3,
            28,
            15,
            6,
            21,
            10,
            23,
            19,
            12,
            4,
            26,
            8,
            16,
            7,
            27,
            20,
            13,
            2,
            41,
            52,
            31,
            37,
            47,
            55,
            30,
            40,
            51,
            45,
            33,
            48,
            44,
            49,
            39,
            56,
            34,
            53,
            46,
            42,
            50,
            36,
            29,
            32
          ];
          var BIT_SHIFTS = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];
          var SBOX_P = [
            {
              0: 8421888,
              268435456: 32768,
              536870912: 8421378,
              805306368: 2,
              1073741824: 512,
              1342177280: 8421890,
              1610612736: 8389122,
              1879048192: 8388608,
              2147483648: 514,
              2415919104: 8389120,
              2684354560: 33280,
              2952790016: 8421376,
              3221225472: 32770,
              3489660928: 8388610,
              3758096384: 0,
              4026531840: 33282,
              134217728: 0,
              402653184: 8421890,
              671088640: 33282,
              939524096: 32768,
              1207959552: 8421888,
              1476395008: 512,
              1744830464: 8421378,
              2013265920: 2,
              2281701376: 8389120,
              2550136832: 33280,
              2818572288: 8421376,
              3087007744: 8389122,
              3355443200: 8388610,
              3623878656: 32770,
              3892314112: 514,
              4160749568: 8388608,
              1: 32768,
              268435457: 2,
              536870913: 8421888,
              805306369: 8388608,
              1073741825: 8421378,
              1342177281: 33280,
              1610612737: 512,
              1879048193: 8389122,
              2147483649: 8421890,
              2415919105: 8421376,
              2684354561: 8388610,
              2952790017: 33282,
              3221225473: 514,
              3489660929: 8389120,
              3758096385: 32770,
              4026531841: 0,
              134217729: 8421890,
              402653185: 8421376,
              671088641: 8388608,
              939524097: 512,
              1207959553: 32768,
              1476395009: 8388610,
              1744830465: 2,
              2013265921: 33282,
              2281701377: 32770,
              2550136833: 8389122,
              2818572289: 514,
              3087007745: 8421888,
              3355443201: 8389120,
              3623878657: 0,
              3892314113: 33280,
              4160749569: 8421378
            },
            {
              0: 1074282512,
              16777216: 16384,
              33554432: 524288,
              50331648: 1074266128,
              67108864: 1073741840,
              83886080: 1074282496,
              100663296: 1073758208,
              117440512: 16,
              134217728: 540672,
              150994944: 1073758224,
              167772160: 1073741824,
              184549376: 540688,
              201326592: 524304,
              218103808: 0,
              234881024: 16400,
              251658240: 1074266112,
              8388608: 1073758208,
              25165824: 540688,
              41943040: 16,
              58720256: 1073758224,
              75497472: 1074282512,
              92274688: 1073741824,
              109051904: 524288,
              125829120: 1074266128,
              142606336: 524304,
              159383552: 0,
              176160768: 16384,
              192937984: 1074266112,
              209715200: 1073741840,
              226492416: 540672,
              243269632: 1074282496,
              260046848: 16400,
              268435456: 0,
              285212672: 1074266128,
              301989888: 1073758224,
              318767104: 1074282496,
              335544320: 1074266112,
              352321536: 16,
              369098752: 540688,
              385875968: 16384,
              402653184: 16400,
              419430400: 524288,
              436207616: 524304,
              452984832: 1073741840,
              469762048: 540672,
              486539264: 1073758208,
              503316480: 1073741824,
              520093696: 1074282512,
              276824064: 540688,
              293601280: 524288,
              310378496: 1074266112,
              327155712: 16384,
              343932928: 1073758208,
              360710144: 1074282512,
              377487360: 16,
              394264576: 1073741824,
              411041792: 1074282496,
              427819008: 1073741840,
              444596224: 1073758224,
              461373440: 524304,
              478150656: 0,
              494927872: 16400,
              511705088: 1074266128,
              528482304: 540672
            },
            {
              0: 260,
              1048576: 0,
              2097152: 67109120,
              3145728: 65796,
              4194304: 65540,
              5242880: 67108868,
              6291456: 67174660,
              7340032: 67174400,
              8388608: 67108864,
              9437184: 67174656,
              10485760: 65792,
              11534336: 67174404,
              12582912: 67109124,
              13631488: 65536,
              14680064: 4,
              15728640: 256,
              524288: 67174656,
              1572864: 67174404,
              2621440: 0,
              3670016: 67109120,
              4718592: 67108868,
              5767168: 65536,
              6815744: 65540,
              7864320: 260,
              8912896: 4,
              9961472: 256,
              11010048: 67174400,
              12058624: 65796,
              13107200: 65792,
              14155776: 67109124,
              15204352: 67174660,
              16252928: 67108864,
              16777216: 67174656,
              17825792: 65540,
              18874368: 65536,
              19922944: 67109120,
              20971520: 256,
              22020096: 67174660,
              23068672: 67108868,
              24117248: 0,
              25165824: 67109124,
              26214400: 67108864,
              27262976: 4,
              28311552: 65792,
              29360128: 67174400,
              30408704: 260,
              31457280: 65796,
              32505856: 67174404,
              17301504: 67108864,
              18350080: 260,
              19398656: 67174656,
              20447232: 0,
              21495808: 65540,
              22544384: 67109120,
              23592960: 256,
              24641536: 67174404,
              25690112: 65536,
              26738688: 67174660,
              27787264: 65796,
              28835840: 67108868,
              29884416: 67109124,
              30932992: 67174400,
              31981568: 4,
              33030144: 65792
            },
            {
              0: 2151682048,
              65536: 2147487808,
              131072: 4198464,
              196608: 2151677952,
              262144: 0,
              327680: 4198400,
              393216: 2147483712,
              458752: 4194368,
              524288: 2147483648,
              589824: 4194304,
              655360: 64,
              720896: 2147487744,
              786432: 2151678016,
              851968: 4160,
              917504: 4096,
              983040: 2151682112,
              32768: 2147487808,
              98304: 64,
              163840: 2151678016,
              229376: 2147487744,
              294912: 4198400,
              360448: 2151682112,
              425984: 0,
              491520: 2151677952,
              557056: 4096,
              622592: 2151682048,
              688128: 4194304,
              753664: 4160,
              819200: 2147483648,
              884736: 4194368,
              950272: 4198464,
              1015808: 2147483712,
              1048576: 4194368,
              1114112: 4198400,
              1179648: 2147483712,
              1245184: 0,
              1310720: 4160,
              1376256: 2151678016,
              1441792: 2151682048,
              1507328: 2147487808,
              1572864: 2151682112,
              1638400: 2147483648,
              1703936: 2151677952,
              1769472: 4198464,
              1835008: 2147487744,
              1900544: 4194304,
              1966080: 64,
              2031616: 4096,
              1081344: 2151677952,
              1146880: 2151682112,
              1212416: 0,
              1277952: 4198400,
              1343488: 4194368,
              1409024: 2147483648,
              1474560: 2147487808,
              1540096: 64,
              1605632: 2147483712,
              1671168: 4096,
              1736704: 2147487744,
              1802240: 2151678016,
              1867776: 4160,
              1933312: 2151682048,
              1998848: 4194304,
              2064384: 4198464
            },
            {
              0: 128,
              4096: 17039360,
              8192: 262144,
              12288: 536870912,
              16384: 537133184,
              20480: 16777344,
              24576: 553648256,
              28672: 262272,
              32768: 16777216,
              36864: 537133056,
              40960: 536871040,
              45056: 553910400,
              49152: 553910272,
              53248: 0,
              57344: 17039488,
              61440: 553648128,
              2048: 17039488,
              6144: 553648256,
              10240: 128,
              14336: 17039360,
              18432: 262144,
              22528: 537133184,
              26624: 553910272,
              30720: 536870912,
              34816: 537133056,
              38912: 0,
              43008: 553910400,
              47104: 16777344,
              51200: 536871040,
              55296: 553648128,
              59392: 16777216,
              63488: 262272,
              65536: 262144,
              69632: 128,
              73728: 536870912,
              77824: 553648256,
              81920: 16777344,
              86016: 553910272,
              90112: 537133184,
              94208: 16777216,
              98304: 553910400,
              102400: 553648128,
              106496: 17039360,
              110592: 537133056,
              114688: 262272,
              118784: 536871040,
              122880: 0,
              126976: 17039488,
              67584: 553648256,
              71680: 16777216,
              75776: 17039360,
              79872: 537133184,
              83968: 536870912,
              88064: 17039488,
              92160: 128,
              96256: 553910272,
              100352: 262272,
              104448: 553910400,
              108544: 0,
              112640: 553648128,
              116736: 16777344,
              120832: 262144,
              124928: 537133056,
              129024: 536871040
            },
            {
              0: 268435464,
              256: 8192,
              512: 270532608,
              768: 270540808,
              1024: 268443648,
              1280: 2097152,
              1536: 2097160,
              1792: 268435456,
              2048: 0,
              2304: 268443656,
              2560: 2105344,
              2816: 8,
              3072: 270532616,
              3328: 2105352,
              3584: 8200,
              3840: 270540800,
              128: 270532608,
              384: 270540808,
              640: 8,
              896: 2097152,
              1152: 2105352,
              1408: 268435464,
              1664: 268443648,
              1920: 8200,
              2176: 2097160,
              2432: 8192,
              2688: 268443656,
              2944: 270532616,
              3200: 0,
              3456: 270540800,
              3712: 2105344,
              3968: 268435456,
              4096: 268443648,
              4352: 270532616,
              4608: 270540808,
              4864: 8200,
              5120: 2097152,
              5376: 268435456,
              5632: 268435464,
              5888: 2105344,
              6144: 2105352,
              6400: 0,
              6656: 8,
              6912: 270532608,
              7168: 8192,
              7424: 268443656,
              7680: 270540800,
              7936: 2097160,
              4224: 8,
              4480: 2105344,
              4736: 2097152,
              4992: 268435464,
              5248: 268443648,
              5504: 8200,
              5760: 270540808,
              6016: 270532608,
              6272: 270540800,
              6528: 270532616,
              6784: 8192,
              7040: 2105352,
              7296: 2097160,
              7552: 0,
              7808: 268435456,
              8064: 268443656
            },
            {
              0: 1048576,
              16: 33555457,
              32: 1024,
              48: 1049601,
              64: 34604033,
              80: 0,
              96: 1,
              112: 34603009,
              128: 33555456,
              144: 1048577,
              160: 33554433,
              176: 34604032,
              192: 34603008,
              208: 1025,
              224: 1049600,
              240: 33554432,
              8: 34603009,
              24: 0,
              40: 33555457,
              56: 34604032,
              72: 1048576,
              88: 33554433,
              104: 33554432,
              120: 1025,
              136: 1049601,
              152: 33555456,
              168: 34603008,
              184: 1048577,
              200: 1024,
              216: 34604033,
              232: 1,
              248: 1049600,
              256: 33554432,
              272: 1048576,
              288: 33555457,
              304: 34603009,
              320: 1048577,
              336: 33555456,
              352: 34604032,
              368: 1049601,
              384: 1025,
              400: 34604033,
              416: 1049600,
              432: 1,
              448: 0,
              464: 34603008,
              480: 33554433,
              496: 1024,
              264: 1049600,
              280: 33555457,
              296: 34603009,
              312: 1,
              328: 33554432,
              344: 1048576,
              360: 1025,
              376: 34604032,
              392: 33554433,
              408: 34603008,
              424: 0,
              440: 34604033,
              456: 1049601,
              472: 1024,
              488: 33555456,
              504: 1048577
            },
            {
              0: 134219808,
              1: 131072,
              2: 134217728,
              3: 32,
              4: 131104,
              5: 134350880,
              6: 134350848,
              7: 2048,
              8: 134348800,
              9: 134219776,
              10: 133120,
              11: 134348832,
              12: 2080,
              13: 0,
              14: 134217760,
              15: 133152,
              2147483648: 2048,
              2147483649: 134350880,
              2147483650: 134219808,
              2147483651: 134217728,
              2147483652: 134348800,
              2147483653: 133120,
              2147483654: 133152,
              2147483655: 32,
              2147483656: 134217760,
              2147483657: 2080,
              2147483658: 131104,
              2147483659: 134350848,
              2147483660: 0,
              2147483661: 134348832,
              2147483662: 134219776,
              2147483663: 131072,
              16: 133152,
              17: 134350848,
              18: 32,
              19: 2048,
              20: 134219776,
              21: 134217760,
              22: 134348832,
              23: 131072,
              24: 0,
              25: 131104,
              26: 134348800,
              27: 134219808,
              28: 134350880,
              29: 133120,
              30: 2080,
              31: 134217728,
              2147483664: 131072,
              2147483665: 2048,
              2147483666: 134348832,
              2147483667: 133152,
              2147483668: 32,
              2147483669: 134348800,
              2147483670: 134217728,
              2147483671: 134219808,
              2147483672: 134350880,
              2147483673: 134217760,
              2147483674: 134219776,
              2147483675: 0,
              2147483676: 133120,
              2147483677: 2080,
              2147483678: 131104,
              2147483679: 134350848
            }
          ];
          var SBOX_MASK = [
            4160749569,
            528482304,
            33030144,
            2064384,
            129024,
            8064,
            504,
            2147483679
          ];
          var DES = C_algo.DES = BlockCipher.extend({
            _doReset: function() {
              var key = this._key;
              var keyWords = key.words;
              var keyBits = [];
              for (var i = 0; i < 56; i++) {
                var keyBitPos = PC1[i] - 1;
                keyBits[i] = keyWords[keyBitPos >>> 5] >>> 31 - keyBitPos % 32 & 1;
              }
              var subKeys = this._subKeys = [];
              for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
                var subKey = subKeys[nSubKey] = [];
                var bitShift = BIT_SHIFTS[nSubKey];
                for (var i = 0; i < 24; i++) {
                  subKey[i / 6 | 0] |= keyBits[(PC2[i] - 1 + bitShift) % 28] << 31 - i % 6;
                  subKey[4 + (i / 6 | 0)] |= keyBits[28 + (PC2[i + 24] - 1 + bitShift) % 28] << 31 - i % 6;
                }
                subKey[0] = subKey[0] << 1 | subKey[0] >>> 31;
                for (var i = 1; i < 7; i++) {
                  subKey[i] = subKey[i] >>> (i - 1) * 4 + 3;
                }
                subKey[7] = subKey[7] << 5 | subKey[7] >>> 27;
              }
              var invSubKeys = this._invSubKeys = [];
              for (var i = 0; i < 16; i++) {
                invSubKeys[i] = subKeys[15 - i];
              }
            },
            encryptBlock: function(M, offset) {
              this._doCryptBlock(M, offset, this._subKeys);
            },
            decryptBlock: function(M, offset) {
              this._doCryptBlock(M, offset, this._invSubKeys);
            },
            _doCryptBlock: function(M, offset, subKeys) {
              this._lBlock = M[offset];
              this._rBlock = M[offset + 1];
              exchangeLR.call(this, 4, 252645135);
              exchangeLR.call(this, 16, 65535);
              exchangeRL.call(this, 2, 858993459);
              exchangeRL.call(this, 8, 16711935);
              exchangeLR.call(this, 1, 1431655765);
              for (var round = 0; round < 16; round++) {
                var subKey = subKeys[round];
                var lBlock = this._lBlock;
                var rBlock = this._rBlock;
                var f = 0;
                for (var i = 0; i < 8; i++) {
                  f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
                }
                this._lBlock = rBlock;
                this._rBlock = lBlock ^ f;
              }
              var t = this._lBlock;
              this._lBlock = this._rBlock;
              this._rBlock = t;
              exchangeLR.call(this, 1, 1431655765);
              exchangeRL.call(this, 8, 16711935);
              exchangeRL.call(this, 2, 858993459);
              exchangeLR.call(this, 16, 65535);
              exchangeLR.call(this, 4, 252645135);
              M[offset] = this._lBlock;
              M[offset + 1] = this._rBlock;
            },
            keySize: 64 / 32,
            ivSize: 64 / 32,
            blockSize: 64 / 32
          });
          function exchangeLR(offset, mask) {
            var t = (this._lBlock >>> offset ^ this._rBlock) & mask;
            this._rBlock ^= t;
            this._lBlock ^= t << offset;
          }
          function exchangeRL(offset, mask) {
            var t = (this._rBlock >>> offset ^ this._lBlock) & mask;
            this._lBlock ^= t;
            this._rBlock ^= t << offset;
          }
          C.DES = BlockCipher._createHelper(DES);
          var TripleDES = C_algo.TripleDES = BlockCipher.extend({
            _doReset: function() {
              var key = this._key;
              var keyWords = key.words;
              if (keyWords.length !== 2 && keyWords.length !== 4 && keyWords.length < 6) {
                throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
              }
              var key1 = keyWords.slice(0, 2);
              var key2 = keyWords.length < 4 ? keyWords.slice(0, 2) : keyWords.slice(2, 4);
              var key3 = keyWords.length < 6 ? keyWords.slice(0, 2) : keyWords.slice(4, 6);
              this._des1 = DES.createEncryptor(WordArray.create(key1));
              this._des2 = DES.createEncryptor(WordArray.create(key2));
              this._des3 = DES.createEncryptor(WordArray.create(key3));
            },
            encryptBlock: function(M, offset) {
              this._des1.encryptBlock(M, offset);
              this._des2.decryptBlock(M, offset);
              this._des3.encryptBlock(M, offset);
            },
            decryptBlock: function(M, offset) {
              this._des3.decryptBlock(M, offset);
              this._des2.encryptBlock(M, offset);
              this._des1.decryptBlock(M, offset);
            },
            keySize: 192 / 32,
            ivSize: 64 / 32,
            blockSize: 64 / 32
          });
          C.TripleDES = BlockCipher._createHelper(TripleDES);
        })();
        return CryptoJS2.TripleDES;
      });
    }
  });

  // node_modules/crypto-js/rc4.js
  var require_rc4 = __commonJS({
    "node_modules/crypto-js/rc4.js"(exports, module) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module.exports = exports = factory(require_core(), require_enc_base64(), require_md5(), require_evpkdf(), require_cipher_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS2) {
        (function() {
          var C = CryptoJS2;
          var C_lib = C.lib;
          var StreamCipher = C_lib.StreamCipher;
          var C_algo = C.algo;
          var RC4 = C_algo.RC4 = StreamCipher.extend({
            _doReset: function() {
              var key = this._key;
              var keyWords = key.words;
              var keySigBytes = key.sigBytes;
              var S = this._S = [];
              for (var i = 0; i < 256; i++) {
                S[i] = i;
              }
              for (var i = 0, j = 0; i < 256; i++) {
                var keyByteIndex = i % keySigBytes;
                var keyByte = keyWords[keyByteIndex >>> 2] >>> 24 - keyByteIndex % 4 * 8 & 255;
                j = (j + S[i] + keyByte) % 256;
                var t = S[i];
                S[i] = S[j];
                S[j] = t;
              }
              this._i = this._j = 0;
            },
            _doProcessBlock: function(M, offset) {
              M[offset] ^= generateKeystreamWord.call(this);
            },
            keySize: 256 / 32,
            ivSize: 0
          });
          function generateKeystreamWord() {
            var S = this._S;
            var i = this._i;
            var j = this._j;
            var keystreamWord = 0;
            for (var n = 0; n < 4; n++) {
              i = (i + 1) % 256;
              j = (j + S[i]) % 256;
              var t = S[i];
              S[i] = S[j];
              S[j] = t;
              keystreamWord |= S[(S[i] + S[j]) % 256] << 24 - n * 8;
            }
            this._i = i;
            this._j = j;
            return keystreamWord;
          }
          C.RC4 = StreamCipher._createHelper(RC4);
          var RC4Drop = C_algo.RC4Drop = RC4.extend({
            /**
             * Configuration options.
             *
             * @property {number} drop The number of keystream words to drop. Default 192
             */
            cfg: RC4.cfg.extend({
              drop: 192
            }),
            _doReset: function() {
              RC4._doReset.call(this);
              for (var i = this.cfg.drop; i > 0; i--) {
                generateKeystreamWord.call(this);
              }
            }
          });
          C.RC4Drop = StreamCipher._createHelper(RC4Drop);
        })();
        return CryptoJS2.RC4;
      });
    }
  });

  // node_modules/crypto-js/rabbit.js
  var require_rabbit = __commonJS({
    "node_modules/crypto-js/rabbit.js"(exports, module) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module.exports = exports = factory(require_core(), require_enc_base64(), require_md5(), require_evpkdf(), require_cipher_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS2) {
        (function() {
          var C = CryptoJS2;
          var C_lib = C.lib;
          var StreamCipher = C_lib.StreamCipher;
          var C_algo = C.algo;
          var S = [];
          var C_ = [];
          var G = [];
          var Rabbit = C_algo.Rabbit = StreamCipher.extend({
            _doReset: function() {
              var K = this._key.words;
              var iv = this.cfg.iv;
              for (var i = 0; i < 4; i++) {
                K[i] = (K[i] << 8 | K[i] >>> 24) & 16711935 | (K[i] << 24 | K[i] >>> 8) & 4278255360;
              }
              var X = this._X = [
                K[0],
                K[3] << 16 | K[2] >>> 16,
                K[1],
                K[0] << 16 | K[3] >>> 16,
                K[2],
                K[1] << 16 | K[0] >>> 16,
                K[3],
                K[2] << 16 | K[1] >>> 16
              ];
              var C2 = this._C = [
                K[2] << 16 | K[2] >>> 16,
                K[0] & 4294901760 | K[1] & 65535,
                K[3] << 16 | K[3] >>> 16,
                K[1] & 4294901760 | K[2] & 65535,
                K[0] << 16 | K[0] >>> 16,
                K[2] & 4294901760 | K[3] & 65535,
                K[1] << 16 | K[1] >>> 16,
                K[3] & 4294901760 | K[0] & 65535
              ];
              this._b = 0;
              for (var i = 0; i < 4; i++) {
                nextState.call(this);
              }
              for (var i = 0; i < 8; i++) {
                C2[i] ^= X[i + 4 & 7];
              }
              if (iv) {
                var IV = iv.words;
                var IV_0 = IV[0];
                var IV_1 = IV[1];
                var i0 = (IV_0 << 8 | IV_0 >>> 24) & 16711935 | (IV_0 << 24 | IV_0 >>> 8) & 4278255360;
                var i2 = (IV_1 << 8 | IV_1 >>> 24) & 16711935 | (IV_1 << 24 | IV_1 >>> 8) & 4278255360;
                var i1 = i0 >>> 16 | i2 & 4294901760;
                var i3 = i2 << 16 | i0 & 65535;
                C2[0] ^= i0;
                C2[1] ^= i1;
                C2[2] ^= i2;
                C2[3] ^= i3;
                C2[4] ^= i0;
                C2[5] ^= i1;
                C2[6] ^= i2;
                C2[7] ^= i3;
                for (var i = 0; i < 4; i++) {
                  nextState.call(this);
                }
              }
            },
            _doProcessBlock: function(M, offset) {
              var X = this._X;
              nextState.call(this);
              S[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;
              S[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;
              S[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;
              S[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;
              for (var i = 0; i < 4; i++) {
                S[i] = (S[i] << 8 | S[i] >>> 24) & 16711935 | (S[i] << 24 | S[i] >>> 8) & 4278255360;
                M[offset + i] ^= S[i];
              }
            },
            blockSize: 128 / 32,
            ivSize: 64 / 32
          });
          function nextState() {
            var X = this._X;
            var C2 = this._C;
            for (var i = 0; i < 8; i++) {
              C_[i] = C2[i];
            }
            C2[0] = C2[0] + 1295307597 + this._b | 0;
            C2[1] = C2[1] + 3545052371 + (C2[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;
            C2[2] = C2[2] + 886263092 + (C2[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;
            C2[3] = C2[3] + 1295307597 + (C2[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;
            C2[4] = C2[4] + 3545052371 + (C2[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;
            C2[5] = C2[5] + 886263092 + (C2[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;
            C2[6] = C2[6] + 1295307597 + (C2[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;
            C2[7] = C2[7] + 3545052371 + (C2[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;
            this._b = C2[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;
            for (var i = 0; i < 8; i++) {
              var gx = X[i] + C2[i];
              var ga = gx & 65535;
              var gb = gx >>> 16;
              var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
              var gl = ((gx & 4294901760) * gx | 0) + ((gx & 65535) * gx | 0);
              G[i] = gh ^ gl;
            }
            X[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;
            X[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;
            X[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;
            X[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;
            X[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;
            X[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;
            X[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;
            X[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;
          }
          C.Rabbit = StreamCipher._createHelper(Rabbit);
        })();
        return CryptoJS2.Rabbit;
      });
    }
  });

  // node_modules/crypto-js/rabbit-legacy.js
  var require_rabbit_legacy = __commonJS({
    "node_modules/crypto-js/rabbit-legacy.js"(exports, module) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module.exports = exports = factory(require_core(), require_enc_base64(), require_md5(), require_evpkdf(), require_cipher_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS2) {
        (function() {
          var C = CryptoJS2;
          var C_lib = C.lib;
          var StreamCipher = C_lib.StreamCipher;
          var C_algo = C.algo;
          var S = [];
          var C_ = [];
          var G = [];
          var RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({
            _doReset: function() {
              var K = this._key.words;
              var iv = this.cfg.iv;
              var X = this._X = [
                K[0],
                K[3] << 16 | K[2] >>> 16,
                K[1],
                K[0] << 16 | K[3] >>> 16,
                K[2],
                K[1] << 16 | K[0] >>> 16,
                K[3],
                K[2] << 16 | K[1] >>> 16
              ];
              var C2 = this._C = [
                K[2] << 16 | K[2] >>> 16,
                K[0] & 4294901760 | K[1] & 65535,
                K[3] << 16 | K[3] >>> 16,
                K[1] & 4294901760 | K[2] & 65535,
                K[0] << 16 | K[0] >>> 16,
                K[2] & 4294901760 | K[3] & 65535,
                K[1] << 16 | K[1] >>> 16,
                K[3] & 4294901760 | K[0] & 65535
              ];
              this._b = 0;
              for (var i = 0; i < 4; i++) {
                nextState.call(this);
              }
              for (var i = 0; i < 8; i++) {
                C2[i] ^= X[i + 4 & 7];
              }
              if (iv) {
                var IV = iv.words;
                var IV_0 = IV[0];
                var IV_1 = IV[1];
                var i0 = (IV_0 << 8 | IV_0 >>> 24) & 16711935 | (IV_0 << 24 | IV_0 >>> 8) & 4278255360;
                var i2 = (IV_1 << 8 | IV_1 >>> 24) & 16711935 | (IV_1 << 24 | IV_1 >>> 8) & 4278255360;
                var i1 = i0 >>> 16 | i2 & 4294901760;
                var i3 = i2 << 16 | i0 & 65535;
                C2[0] ^= i0;
                C2[1] ^= i1;
                C2[2] ^= i2;
                C2[3] ^= i3;
                C2[4] ^= i0;
                C2[5] ^= i1;
                C2[6] ^= i2;
                C2[7] ^= i3;
                for (var i = 0; i < 4; i++) {
                  nextState.call(this);
                }
              }
            },
            _doProcessBlock: function(M, offset) {
              var X = this._X;
              nextState.call(this);
              S[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;
              S[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;
              S[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;
              S[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;
              for (var i = 0; i < 4; i++) {
                S[i] = (S[i] << 8 | S[i] >>> 24) & 16711935 | (S[i] << 24 | S[i] >>> 8) & 4278255360;
                M[offset + i] ^= S[i];
              }
            },
            blockSize: 128 / 32,
            ivSize: 64 / 32
          });
          function nextState() {
            var X = this._X;
            var C2 = this._C;
            for (var i = 0; i < 8; i++) {
              C_[i] = C2[i];
            }
            C2[0] = C2[0] + 1295307597 + this._b | 0;
            C2[1] = C2[1] + 3545052371 + (C2[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;
            C2[2] = C2[2] + 886263092 + (C2[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;
            C2[3] = C2[3] + 1295307597 + (C2[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;
            C2[4] = C2[4] + 3545052371 + (C2[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;
            C2[5] = C2[5] + 886263092 + (C2[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;
            C2[6] = C2[6] + 1295307597 + (C2[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;
            C2[7] = C2[7] + 3545052371 + (C2[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;
            this._b = C2[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;
            for (var i = 0; i < 8; i++) {
              var gx = X[i] + C2[i];
              var ga = gx & 65535;
              var gb = gx >>> 16;
              var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
              var gl = ((gx & 4294901760) * gx | 0) + ((gx & 65535) * gx | 0);
              G[i] = gh ^ gl;
            }
            X[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;
            X[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;
            X[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;
            X[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;
            X[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;
            X[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;
            X[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;
            X[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;
          }
          C.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
        })();
        return CryptoJS2.RabbitLegacy;
      });
    }
  });

  // node_modules/crypto-js/index.js
  var require_crypto_js = __commonJS({
    "node_modules/crypto-js/index.js"(exports, module) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module.exports = exports = factory(require_core(), require_x64_core(), require_lib_typedarrays(), require_enc_utf16(), require_enc_base64(), require_enc_base64url(), require_md5(), require_sha1(), require_sha256(), require_sha224(), require_sha512(), require_sha384(), require_sha3(), require_ripemd160(), require_hmac(), require_pbkdf2(), require_evpkdf(), require_cipher_core(), require_mode_cfb(), require_mode_ctr(), require_mode_ctr_gladman(), require_mode_ofb(), require_mode_ecb(), require_pad_ansix923(), require_pad_iso10126(), require_pad_iso97971(), require_pad_zeropadding(), require_pad_nopadding(), require_format_hex(), require_aes(), require_tripledes(), require_rc4(), require_rabbit(), require_rabbit_legacy());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./x64-core", "./lib-typedarrays", "./enc-utf16", "./enc-base64", "./enc-base64url", "./md5", "./sha1", "./sha256", "./sha224", "./sha512", "./sha384", "./sha3", "./ripemd160", "./hmac", "./pbkdf2", "./evpkdf", "./cipher-core", "./mode-cfb", "./mode-ctr", "./mode-ctr-gladman", "./mode-ofb", "./mode-ecb", "./pad-ansix923", "./pad-iso10126", "./pad-iso97971", "./pad-zeropadding", "./pad-nopadding", "./format-hex", "./aes", "./tripledes", "./rc4", "./rabbit", "./rabbit-legacy"], factory);
        } else {
          root.CryptoJS = factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS2) {
        return CryptoJS2;
      });
    }
  });

  // src/common/appstorage.ts
  var CryptoJS = __toESM(require_crypto_js());
  var AppStorage = class {
    constructor(editionType) {
      this.CryptoJS = CryptoJS;
      console.log("AppStorage created");
      this.editionType = editionType;
    }
    static getInstance() {
      return new AppStorage();
    }
    common(input) {
      console.log(`Called AppStorage.common with ${input}`);
      return input;
    }
    commonRedefined(input) {
      return this.common(input);
    }
  };

  // src/open-edition/appstorage.ts
  var AppStorageOE = class extends AppStorage {
    static getInstance() {
      return new AppStorageOE();
    }
    constructor() {
      super("openEdition" /* openEdition */);
    }
    openMethod(input) {
      console.log(input);
      return input;
    }
    commonRedefined(input) {
      console.log("open edition redefined this");
      input += " redefined OE";
      return super.commonRedefined(input);
    }
  };

  // src/common/modeldata.ts
  var modeldata_exports = {};
  __export(modeldata_exports, {
    Find: () => Find,
    FindFirst: () => FindFirst,
    LookupValue: () => LookupValue,
    delayRefresh: () => delayRefresh,
    doRefresh: () => doRefresh,
    genID: () => genID,
    getModel: () => getModel,
    setAutoDelayRefresh: () => setAutoDelayRefresh,
    setAutoDelayRefreshTimeout: () => setAutoDelayRefreshTimeout
  });
  function isArgsObject(argsObject) {
    let isArgsObject2 = false;
    if (typeof argsObject == "object" && // must be an object
    typeof argsObject.getMetadata != "function" && // must not be a UI5 element
    typeof argsObject.source != "undefined") {
      isArgsObject2 = true;
    }
    return isArgsObject2;
  }
  function ensureArray(data) {
    if (!Array.isArray(data)) {
      data = data === void 0 ? [] : [data];
    }
    return data;
  }
  function ensureOperator(oper, length) {
    let fillOperator = "EQ";
    if (!Array.isArray(oper)) {
      fillOperator = oper;
      oper = [];
    }
    for (let i = oper.length; i < length; i++) {
      oper[i] = fillOperator;
    }
    return oper;
  }
  function Compare(lookIn, lookFor, oper) {
    if (Array.isArray(lookIn) && lookFor !== null && typeof lookFor == "object" && Object.keys(lookFor).length > 0) {
      let bCompare = false;
      Object.keys(lookFor).forEach(function(key) {
        bCompare = bCompare || Find(lookIn, key, lookFor[key], oper).length > 0;
      });
      return bCompare;
    } else if (Array.isArray(lookIn)) {
      let bCompare = false;
      lookIn.forEach(function(lookInValue) {
        bCompare = bCompare || CompareSimpleValues(lookInValue, lookFor, oper);
      });
      return bCompare;
    } else if (typeof lookIn == "object" && lookFor !== null && typeof lookFor == "object" && Object.keys(lookFor).length > 0) {
      let bCompare = true;
      Object.keys(lookFor).forEach(function(key) {
        bCompare = bCompare && CompareSimpleValues(lookIn[key], lookFor[key], oper);
      });
      return bCompare;
    } else {
      return CompareSimpleValues(lookIn, lookFor, oper);
    }
  }
  function CompareSimpleValues(lookIn, lookFor, oper) {
    let bCompare = false;
    switch (oper) {
      case "Contains":
        bCompare = lookIn.indexOf(lookFor) != -1;
        break;
      case "NE":
        bCompare = lookIn != lookFor;
        break;
      case "GT":
        bCompare = lookIn > lookFor;
        break;
      case "GE":
        bCompare = lookIn >= lookFor;
        break;
      case "LT":
        bCompare = lookIn < lookFor;
        break;
      case "LE":
        bCompare = lookIn <= lookFor;
        break;
      case "BT":
        if (Array.isArray(lookFor) && lookFor.length == 2) {
          bCompare = lookIn >= lookFor[0] && lookIn <= lookFor[1];
        }
        break;
      case "StartsWith":
        bCompare = lookFor.toString().length <= lookIn.toString().length && lookFor.toString() == lookIn.toString().substr(0, lookFor.toString().length);
        break;
      case "EndsWith":
        bCompare = lookFor.toString().length <= lookIn.toString().length && lookFor.toString() == lookIn.toString().substr(
          lookIn.toString().length - lookFor.toString().length,
          lookFor.toString().length
        );
        break;
      default:
        bCompare = lookIn == lookFor;
        break;
    }
    return bCompare;
  }
  var pathSeparator = "/";
  var isPath = function(path) {
    return path.search(pathSeparator) > 0;
  };
  var splitPath = function(path) {
    return path.split(pathSeparator);
  };
  var joinPath = function(pathArray) {
    return pathArray.join(pathSeparator);
  };
  function getAttributeViaPath(obj, keyPath) {
    if (isPath(keyPath)) {
      const pathArray = splitPath(keyPath);
      const firstPart = pathArray.shift();
      if (typeof obj[firstPart] == "object") {
        return getAttributeViaPath(obj[firstPart], joinPath(pathArray));
      } else {
        return obj[firstPart];
      }
    } else {
      return obj[keyPath];
    }
  }
  function ComparePath(obj, keyPath, val, oper) {
    const attributeValue = getAttributeViaPath(obj, keyPath);
    return Compare(attributeValue, val, oper);
  }
  function CompareObjWithArray(obj, key, val, oper) {
    let bCompare = true;
    key.forEach(function(keyElem, IDX, ARR) {
      bCompare = bCompare && ComparePath(obj, keyElem, val[IDX], oper[IDX]);
    });
    return bCompare;
  }
  function v4_getModel(obj) {
    const model = obj.getModel();
    if (model && typeof model.oData !== "undefined" && typeof model.oData.length === "undefined")
      model.oData = [];
    if (model && typeof model.oData === "undefined")
      model.oData = [];
    return model;
  }
  function getModelDataSource(source) {
    const Types = {
      array: "array",
      control: "control",
      model: "model"
    };
    let sourceArray = [];
    let sourceControl = null;
    let sourceModel = null;
    let sourceType = "";
    const getArray = function() {
      switch (sourceType) {
        case Types.model:
          return sourceModel.getData();
        case Types.control:
          return v4_getModel(sourceControl).getData();
        case Types.array:
          return sourceArray;
      }
      throw "ModelData: bad type for source / " + this;
    };
    const updateData = function(array) {
      switch (sourceType) {
        case Types.model:
          modelSetData(sourceModel, array);
          break;
        case Types.control:
          modelSetData(sourceControl.getModel(), array);
          break;
        case Types.array:
          break;
      }
    };
    if (Array.isArray(source)) {
      sourceType = Types.array;
      sourceArray = source;
    } else if (typeof source.getMetadata == "function") {
      if (source.getMetadata()._sClassName == "sap.ui.model.json.JSONModel") {
        sourceType = Types.model;
        sourceModel = source;
      } else {
        sourceType = Types.control;
        sourceControl = source;
      }
    } else {
      throw "ModelData: bad source / " + source;
    }
    return {
      getArray,
      updateData
    };
  }
  function genID() {
    let d = (/* @__PURE__ */ new Date()).getTime();
    const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      const r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == "x" ? r : r & 7 | 8).toString(16);
    });
    return uuid;
  }
  var refreshDelayed = false;
  var refreshDelayedModels = /* @__PURE__ */ new Map();
  var autoRefreshDelayed = true;
  var autoRefreshTimeout = null;
  var autoRefreshDelay = 0;
  function modelSetData(model, data) {
    if (refreshDelayed) {
      model.oData = data;
      refreshDelayedModels.set(model.getId(), model);
    } else {
      if (autoRefreshDelayed) {
        model.oData = data;
        refreshDelayedModels.set(model.getId(), model);
        clearTimeout(autoRefreshTimeout);
        autoRefreshTimeout = setTimeout(doRefresh, autoRefreshDelay);
      } else {
        model.setData(data);
      }
    }
  }
  function delayRefresh() {
    refreshDelayed = true;
  }
  function doRefresh() {
    for (const [id, model] of refreshDelayedModels) {
      model.refresh();
    }
    refreshDelayedModels = /* @__PURE__ */ new Map();
    refreshDelayed = false;
  }
  function setAutoDelayRefresh(bAutoDelay) {
    autoRefreshDelayed = bAutoDelay;
  }
  function setAutoDelayRefreshTimeout(delayInMs) {
    try {
      delayInMs = parseInt(delayInMs);
      if (isNaN(delayInMs)) {
        console.error("Value for Delay-Timeout must be an integer (milliseconds)");
        return;
      }
      autoRefreshDelay = delayInMs;
    } catch (e) {
      console.error(e);
    }
  }
  function Find(argsObject, key, val, oper = void 0, callback = void 0) {
    let source = argsObject;
    if (isArgsObject(argsObject)) {
      source = argsObject.source;
      key = argsObject.keys;
      val = argsObject.values;
      oper = argsObject.operators;
      callback = argsObject.fnCallback;
    }
    const oSource = getModelDataSource(source);
    let arr = oSource.getArray();
    let ret = [];
    if (!Array.isArray(arr) || arr.length == 0)
      return ret;
    key = ensureArray(key);
    val = ensureArray(val);
    oper = ensureOperator(oper, key.length);
    if (key.length != val.length || key.length != oper.length)
      return ret;
    if (key.length === 0) {
      ret = arr;
    } else {
      ret = arr.filter(function(arrObj) {
        return CompareObjWithArray(arrObj, key, val, oper);
      });
    }
    if (typeof callback === "function") {
      callback(ret);
    }
    arr = null;
    return ret;
  }
  function FindFirst(argsObject, sKey, sValue, sOper = void 0, callBack = void 0) {
    let oSource = argsObject;
    if (isArgsObject(argsObject)) {
      oSource = argsObject.source;
      sKey = argsObject.keys;
      sValue = argsObject.values;
      sOper = argsObject.operators;
      callBack = argsObject.fnCallback;
      argsObject.fnCallback = null;
    }
    const aResults = Find(oSource, sKey, sValue, sOper);
    let resultObject = false;
    if (aResults.length > 0) {
      resultObject = aResults[0];
    }
    if (resultObject && typeof callBack === "function") {
      callBack(resultObject);
    }
    return resultObject;
  }
  function LookupValue(argsObject, sKey, sValue, sField, sOper, callBack) {
    let oSource = argsObject;
    if (isArgsObject(argsObject)) {
      oSource = argsObject.source;
      sKey = argsObject.keys;
      sValue = argsObject.values;
      sField = argsObject.lookupField;
      sOper = argsObject.operators;
      callBack = argsObject.fnCallback;
    }
    const result = FindFirst(oSource, sKey, sValue, sOper, callBack);
    if (result) {
      return getAttributeViaPath(result, sField);
    } else {
      return sValue;
    }
  }
  var getModel = v4_getModel;

  // src/open-edition/modeldata.ts
  var ModelData = {
    ...modeldata_exports
  };
})();
/*! Bundled license information:

crypto-js/ripemd160.js:
  (** @preserve
  	(c) 2012 by Cédric Mesnil. All rights reserved.
  
  	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
  
  	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
  	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
  
  	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  	*)

crypto-js/mode-ctr-gladman.js:
  (** @preserve
   * Counter block mode compatible with  Dr Brian Gladman fileenc.c
   * derived from CryptoJS.mode.CTR
   * Jan Hruby jhruby.web@gmail.com
   *)
*/
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9jb3JlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMveDY0LWNvcmUuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9saWItdHlwZWRhcnJheXMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9lbmMtdXRmMTYuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9lbmMtYmFzZTY0LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvZW5jLWJhc2U2NHVybC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL21kNS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL3NoYTEuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9zaGEyNTYuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9zaGEyMjQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9zaGE1MTIuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9zaGEzODQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9zaGEzLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvcmlwZW1kMTYwLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvaG1hYy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL3Bia2RmMi5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL2V2cGtkZi5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL2NpcGhlci1jb3JlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvbW9kZS1jZmIuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9tb2RlLWN0ci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL21vZGUtY3RyLWdsYWRtYW4uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9tb2RlLW9mYi5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL21vZGUtZWNiLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvcGFkLWFuc2l4OTIzLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvcGFkLWlzbzEwMTI2LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvcGFkLWlzbzk3OTcxLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvcGFkLXplcm9wYWRkaW5nLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvcGFkLW5vcGFkZGluZy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL2Zvcm1hdC1oZXguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9hZXMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy90cmlwbGVkZXMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9yYzQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9yYWJiaXQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9yYWJiaXQtbGVnYWN5LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvaW5kZXguanMiLCAiLi4vLi4vc3JjL2NvbW1vbi9hcHBzdG9yYWdlLnRzIiwgIi4uLy4uL3NyYy9vcGVuLWVkaXRpb24vYXBwc3RvcmFnZS50cyIsICIuLi8uLi9zcmMvY29tbW9uL21vZGVsZGF0YS50cyIsICIuLi8uLi9zcmMvb3Blbi1lZGl0aW9uL21vZGVsZGF0YS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdHJvb3QuQ3J5cHRvSlMgPSBmYWN0b3J5KCk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKCkge1xuXG5cdC8qZ2xvYmFscyB3aW5kb3csIGdsb2JhbCwgcmVxdWlyZSovXG5cblx0LyoqXG5cdCAqIENyeXB0b0pTIGNvcmUgY29tcG9uZW50cy5cblx0ICovXG5cdHZhciBDcnlwdG9KUyA9IENyeXB0b0pTIHx8IChmdW5jdGlvbiAoTWF0aCwgdW5kZWZpbmVkKSB7XG5cblx0ICAgIHZhciBjcnlwdG87XG5cblx0ICAgIC8vIE5hdGl2ZSBjcnlwdG8gZnJvbSB3aW5kb3cgKEJyb3dzZXIpXG5cdCAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmNyeXB0bykge1xuXHQgICAgICAgIGNyeXB0byA9IHdpbmRvdy5jcnlwdG87XG5cdCAgICB9XG5cblx0ICAgIC8vIE5hdGl2ZSBjcnlwdG8gaW4gd2ViIHdvcmtlciAoQnJvd3Nlcilcblx0ICAgIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jcnlwdG8pIHtcblx0ICAgICAgICBjcnlwdG8gPSBzZWxmLmNyeXB0bztcblx0ICAgIH1cblxuXHQgICAgLy8gTmF0aXZlIGNyeXB0byBmcm9tIHdvcmtlclxuXHQgICAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyAmJiBnbG9iYWxUaGlzLmNyeXB0bykge1xuXHQgICAgICAgIGNyeXB0byA9IGdsb2JhbFRoaXMuY3J5cHRvO1xuXHQgICAgfVxuXG5cdCAgICAvLyBOYXRpdmUgKGV4cGVyaW1lbnRhbCBJRSAxMSkgY3J5cHRvIGZyb20gd2luZG93IChCcm93c2VyKVxuXHQgICAgaWYgKCFjcnlwdG8gJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lm1zQ3J5cHRvKSB7XG5cdCAgICAgICAgY3J5cHRvID0gd2luZG93Lm1zQ3J5cHRvO1xuXHQgICAgfVxuXG5cdCAgICAvLyBOYXRpdmUgY3J5cHRvIGZyb20gZ2xvYmFsIChOb2RlSlMpXG5cdCAgICBpZiAoIWNyeXB0byAmJiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyAmJiBnbG9iYWwuY3J5cHRvKSB7XG5cdCAgICAgICAgY3J5cHRvID0gZ2xvYmFsLmNyeXB0bztcblx0ICAgIH1cblxuXHQgICAgLy8gTmF0aXZlIGNyeXB0byBpbXBvcnQgdmlhIHJlcXVpcmUgKE5vZGVKUylcblx0ICAgIGlmICghY3J5cHRvICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgY3J5cHRvID0gcmVxdWlyZSgnY3J5cHRvJyk7XG5cdCAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuXHQgICAgfVxuXG5cdCAgICAvKlxuXHQgICAgICogQ3J5cHRvZ3JhcGhpY2FsbHkgc2VjdXJlIHBzZXVkb3JhbmRvbSBudW1iZXIgZ2VuZXJhdG9yXG5cdCAgICAgKlxuXHQgICAgICogQXMgTWF0aC5yYW5kb20oKSBpcyBjcnlwdG9ncmFwaGljYWxseSBub3Qgc2FmZSB0byB1c2Vcblx0ICAgICAqL1xuXHQgICAgdmFyIGNyeXB0b1NlY3VyZVJhbmRvbUludCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBpZiAoY3J5cHRvKSB7XG5cdCAgICAgICAgICAgIC8vIFVzZSBnZXRSYW5kb21WYWx1ZXMgbWV0aG9kIChCcm93c2VyKVxuXHQgICAgICAgICAgICBpZiAodHlwZW9mIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQzMkFycmF5KDEpKVswXTtcblx0ICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge31cblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIFVzZSByYW5kb21CeXRlcyBtZXRob2QgKE5vZGVKUylcblx0ICAgICAgICAgICAgaWYgKHR5cGVvZiBjcnlwdG8ucmFuZG9tQnl0ZXMgPT09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNyeXB0by5yYW5kb21CeXRlcyg0KS5yZWFkSW50MzJMRSgpO1xuXHQgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOYXRpdmUgY3J5cHRvIG1vZHVsZSBjb3VsZCBub3QgYmUgdXNlZCB0byBnZXQgc2VjdXJlIHJhbmRvbSBudW1iZXIuJyk7XG5cdCAgICB9O1xuXG5cdCAgICAvKlxuXHQgICAgICogTG9jYWwgcG9seWZpbGwgb2YgT2JqZWN0LmNyZWF0ZVxuXG5cdCAgICAgKi9cblx0ICAgIHZhciBjcmVhdGUgPSBPYmplY3QuY3JlYXRlIHx8IChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgZnVuY3Rpb24gRigpIHt9XG5cblx0ICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG9iaikge1xuXHQgICAgICAgICAgICB2YXIgc3VidHlwZTtcblxuXHQgICAgICAgICAgICBGLnByb3RvdHlwZSA9IG9iajtcblxuXHQgICAgICAgICAgICBzdWJ0eXBlID0gbmV3IEYoKTtcblxuXHQgICAgICAgICAgICBGLnByb3RvdHlwZSA9IG51bGw7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIHN1YnR5cGU7XG5cdCAgICAgICAgfTtcblx0ICAgIH0oKSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogQ3J5cHRvSlMgbmFtZXNwYWNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQyA9IHt9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIExpYnJhcnkgbmFtZXNwYWNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYiA9IHt9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIEJhc2Ugb2JqZWN0IGZvciBwcm90b3R5cGFsIGluaGVyaXRhbmNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQmFzZSA9IENfbGliLkJhc2UgPSAoZnVuY3Rpb24gKCkge1xuXG5cblx0ICAgICAgICByZXR1cm4ge1xuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogQ3JlYXRlcyBhIG5ldyBvYmplY3QgdGhhdCBpbmhlcml0cyBmcm9tIHRoaXMgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3ZlcnJpZGVzIFByb3BlcnRpZXMgdG8gY29weSBpbnRvIHRoZSBuZXcgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBuZXcgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICB2YXIgTXlUeXBlID0gQ3J5cHRvSlMubGliLkJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAgICAgICogICAgICAgICBmaWVsZDogJ3ZhbHVlJyxcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgICAgICBtZXRob2Q6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICogICAgICAgICB9XG5cdCAgICAgICAgICAgICAqICAgICB9KTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIGV4dGVuZDogZnVuY3Rpb24gKG92ZXJyaWRlcykge1xuXHQgICAgICAgICAgICAgICAgLy8gU3Bhd25cblx0ICAgICAgICAgICAgICAgIHZhciBzdWJ0eXBlID0gY3JlYXRlKHRoaXMpO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBBdWdtZW50XG5cdCAgICAgICAgICAgICAgICBpZiAob3ZlcnJpZGVzKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgc3VidHlwZS5taXhJbihvdmVycmlkZXMpO1xuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAvLyBDcmVhdGUgZGVmYXVsdCBpbml0aWFsaXplclxuXHQgICAgICAgICAgICAgICAgaWYgKCFzdWJ0eXBlLmhhc093blByb3BlcnR5KCdpbml0JykgfHwgdGhpcy5pbml0ID09PSBzdWJ0eXBlLmluaXQpIHtcblx0ICAgICAgICAgICAgICAgICAgICBzdWJ0eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHN1YnR5cGUuJHN1cGVyLmluaXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0ICAgICAgICAgICAgICAgICAgICB9O1xuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAvLyBJbml0aWFsaXplcidzIHByb3RvdHlwZSBpcyB0aGUgc3VidHlwZSBvYmplY3Rcblx0ICAgICAgICAgICAgICAgIHN1YnR5cGUuaW5pdC5wcm90b3R5cGUgPSBzdWJ0eXBlO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBSZWZlcmVuY2Ugc3VwZXJ0eXBlXG5cdCAgICAgICAgICAgICAgICBzdWJ0eXBlLiRzdXBlciA9IHRoaXM7XG5cblx0ICAgICAgICAgICAgICAgIHJldHVybiBzdWJ0eXBlO1xuXHQgICAgICAgICAgICB9LFxuXG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBFeHRlbmRzIHRoaXMgb2JqZWN0IGFuZCBydW5zIHRoZSBpbml0IG1ldGhvZC5cblx0ICAgICAgICAgICAgICogQXJndW1lbnRzIHRvIGNyZWF0ZSgpIHdpbGwgYmUgcGFzc2VkIHRvIGluaXQoKS5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgbmV3IG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgdmFyIGluc3RhbmNlID0gTXlUeXBlLmNyZWF0ZSgpO1xuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgY3JlYXRlOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSB0aGlzLmV4dGVuZCgpO1xuXHQgICAgICAgICAgICAgICAgaW5zdGFuY2UuaW5pdC5hcHBseShpbnN0YW5jZSwgYXJndW1lbnRzKTtcblxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuXHQgICAgICAgICAgICB9LFxuXG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBJbml0aWFsaXplcyBhIG5ld2x5IGNyZWF0ZWQgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBhZGQgc29tZSBsb2dpYyB3aGVuIHlvdXIgb2JqZWN0cyBhcmUgY3JlYXRlZC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgIHZhciBNeVR5cGUgPSBDcnlwdG9KUy5saWIuQmFzZS5leHRlbmQoe1xuXHQgICAgICAgICAgICAgKiAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICogICAgICAgICAgICAgLy8gLi4uXG5cdCAgICAgICAgICAgICAqICAgICAgICAgfVxuXHQgICAgICAgICAgICAgKiAgICAgfSk7XG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIH0sXG5cblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIENvcGllcyBwcm9wZXJ0aWVzIGludG8gdGhpcyBvYmplY3QuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wZXJ0aWVzIFRoZSBwcm9wZXJ0aWVzIHRvIG1peCBpbi5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgIE15VHlwZS5taXhJbih7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgZmllbGQ6ICd2YWx1ZSdcblx0ICAgICAgICAgICAgICogICAgIH0pO1xuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgbWl4SW46IGZ1bmN0aW9uIChwcm9wZXJ0aWVzKSB7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eU5hbWUgaW4gcHJvcGVydGllcykge1xuXHQgICAgICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KHByb3BlcnR5TmFtZSkpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1twcm9wZXJ0eU5hbWVdID0gcHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gSUUgd29uJ3QgY29weSB0b1N0cmluZyB1c2luZyB0aGUgbG9vcCBhYm92ZVxuXHQgICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoJ3RvU3RyaW5nJykpIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnRvU3RyaW5nID0gcHJvcGVydGllcy50b1N0cmluZztcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSxcblxuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhpcyBvYmplY3QuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gVGhlIGNsb25lLlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgdmFyIGNsb25lID0gaW5zdGFuY2UuY2xvbmUoKTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pbml0LnByb3RvdHlwZS5leHRlbmQodGhpcyk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9O1xuXHQgICAgfSgpKTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBbiBhcnJheSBvZiAzMi1iaXQgd29yZHMuXG5cdCAgICAgKlxuXHQgICAgICogQHByb3BlcnR5IHtBcnJheX0gd29yZHMgVGhlIGFycmF5IG9mIDMyLWJpdCB3b3Jkcy5cblx0ICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzaWdCeXRlcyBUaGUgbnVtYmVyIG9mIHNpZ25pZmljYW50IGJ5dGVzIGluIHRoaXMgd29yZCBhcnJheS5cblx0ICAgICAqL1xuXHQgICAgdmFyIFdvcmRBcnJheSA9IENfbGliLldvcmRBcnJheSA9IEJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBJbml0aWFsaXplcyBhIG5ld2x5IGNyZWF0ZWQgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IHdvcmRzIChPcHRpb25hbCkgQW4gYXJyYXkgb2YgMzItYml0IHdvcmRzLlxuXHQgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaWdCeXRlcyAoT3B0aW9uYWwpIFRoZSBudW1iZXIgb2Ygc2lnbmlmaWNhbnQgYnl0ZXMgaW4gdGhlIHdvcmRzLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMubGliLldvcmRBcnJheS5jcmVhdGUoKTtcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmxpYi5Xb3JkQXJyYXkuY3JlYXRlKFsweDAwMDEwMjAzLCAweDA0MDUwNjA3XSk7XG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LmNyZWF0ZShbMHgwMDAxMDIwMywgMHgwNDA1MDYwN10sIDYpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGluaXQ6IGZ1bmN0aW9uICh3b3Jkcywgc2lnQnl0ZXMpIHtcblx0ICAgICAgICAgICAgd29yZHMgPSB0aGlzLndvcmRzID0gd29yZHMgfHwgW107XG5cblx0ICAgICAgICAgICAgaWYgKHNpZ0J5dGVzICE9IHVuZGVmaW5lZCkge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5zaWdCeXRlcyA9IHNpZ0J5dGVzO1xuXHQgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5zaWdCeXRlcyA9IHdvcmRzLmxlbmd0aCAqIDQ7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgdGhpcyB3b3JkIGFycmF5IHRvIGEgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtFbmNvZGVyfSBlbmNvZGVyIChPcHRpb25hbCkgVGhlIGVuY29kaW5nIHN0cmF0ZWd5IHRvIHVzZS4gRGVmYXVsdDogQ3J5cHRvSlMuZW5jLkhleFxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgc3RyaW5naWZpZWQgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHN0cmluZyA9IHdvcmRBcnJheSArICcnO1xuXHQgICAgICAgICAqICAgICB2YXIgc3RyaW5nID0gd29yZEFycmF5LnRvU3RyaW5nKCk7XG5cdCAgICAgICAgICogICAgIHZhciBzdHJpbmcgPSB3b3JkQXJyYXkudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoZW5jb2Rlcikge1xuXHQgICAgICAgICAgICByZXR1cm4gKGVuY29kZXIgfHwgSGV4KS5zdHJpbmdpZnkodGhpcyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbmNhdGVuYXRlcyBhIHdvcmQgYXJyYXkgdG8gdGhpcyB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl9IHdvcmRBcnJheSBUaGUgd29yZCBhcnJheSB0byBhcHBlbmQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoaXMgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgd29yZEFycmF5MS5jb25jYXQod29yZEFycmF5Mik7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY29uY2F0OiBmdW5jdGlvbiAod29yZEFycmF5KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgdGhpc1dvcmRzID0gdGhpcy53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHRoYXRXb3JkcyA9IHdvcmRBcnJheS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHRoaXNTaWdCeXRlcyA9IHRoaXMuc2lnQnl0ZXM7XG5cdCAgICAgICAgICAgIHZhciB0aGF0U2lnQnl0ZXMgPSB3b3JkQXJyYXkuc2lnQnl0ZXM7XG5cblx0ICAgICAgICAgICAgLy8gQ2xhbXAgZXhjZXNzIGJpdHNcblx0ICAgICAgICAgICAgdGhpcy5jbGFtcCgpO1xuXG5cdCAgICAgICAgICAgIC8vIENvbmNhdFxuXHQgICAgICAgICAgICBpZiAodGhpc1NpZ0J5dGVzICUgNCkge1xuXHQgICAgICAgICAgICAgICAgLy8gQ29weSBvbmUgYnl0ZSBhdCBhIHRpbWVcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhhdFNpZ0J5dGVzOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgdGhhdEJ5dGUgPSAodGhhdFdvcmRzW2kgPj4+IDJdID4+PiAoMjQgLSAoaSAlIDQpICogOCkpICYgMHhmZjtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzV29yZHNbKHRoaXNTaWdCeXRlcyArIGkpID4+PiAyXSB8PSB0aGF0Qnl0ZSA8PCAoMjQgLSAoKHRoaXNTaWdCeXRlcyArIGkpICUgNCkgKiA4KTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIC8vIENvcHkgb25lIHdvcmQgYXQgYSB0aW1lXG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoYXRTaWdCeXRlczsgaiArPSA0KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdGhpc1dvcmRzWyh0aGlzU2lnQnl0ZXMgKyBqKSA+Pj4gMl0gPSB0aGF0V29yZHNbaiA+Pj4gMl07XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgdGhpcy5zaWdCeXRlcyArPSB0aGF0U2lnQnl0ZXM7XG5cblx0ICAgICAgICAgICAgLy8gQ2hhaW5hYmxlXG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBSZW1vdmVzIGluc2lnbmlmaWNhbnQgYml0cy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgd29yZEFycmF5LmNsYW1wKCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY2xhbXA6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IHRoaXMud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBzaWdCeXRlcyA9IHRoaXMuc2lnQnl0ZXM7XG5cblx0ICAgICAgICAgICAgLy8gQ2xhbXBcblx0ICAgICAgICAgICAgd29yZHNbc2lnQnl0ZXMgPj4+IDJdICY9IDB4ZmZmZmZmZmYgPDwgKDMyIC0gKHNpZ0J5dGVzICUgNCkgKiA4KTtcblx0ICAgICAgICAgICAgd29yZHMubGVuZ3RoID0gTWF0aC5jZWlsKHNpZ0J5dGVzIC8gNCk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoaXMgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGNsb25lLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgY2xvbmUgPSB3b3JkQXJyYXkuY2xvbmUoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjbG9uZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB2YXIgY2xvbmUgPSBCYXNlLmNsb25lLmNhbGwodGhpcyk7XG5cdCAgICAgICAgICAgIGNsb25lLndvcmRzID0gdGhpcy53b3Jkcy5zbGljZSgwKTtcblxuXHQgICAgICAgICAgICByZXR1cm4gY2xvbmU7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENyZWF0ZXMgYSB3b3JkIGFycmF5IGZpbGxlZCB3aXRoIHJhbmRvbSBieXRlcy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuQnl0ZXMgVGhlIG51bWJlciBvZiByYW5kb20gYnl0ZXMgdG8gZ2VuZXJhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSByYW5kb20gd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmxpYi5Xb3JkQXJyYXkucmFuZG9tKDE2KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICByYW5kb206IGZ1bmN0aW9uIChuQnl0ZXMpIHtcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gW107XG5cblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuQnl0ZXM7IGkgKz0gNCkge1xuXHQgICAgICAgICAgICAgICAgd29yZHMucHVzaChjcnlwdG9TZWN1cmVSYW5kb21JbnQoKSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gbmV3IFdvcmRBcnJheS5pbml0KHdvcmRzLCBuQnl0ZXMpO1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIEVuY29kZXIgbmFtZXNwYWNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQ19lbmMgPSBDLmVuYyA9IHt9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIEhleCBlbmNvZGluZyBzdHJhdGVneS5cblx0ICAgICAqL1xuXHQgICAgdmFyIEhleCA9IENfZW5jLkhleCA9IHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIHdvcmQgYXJyYXkgdG8gYSBoZXggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl9IHdvcmRBcnJheSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGhleCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBoZXhTdHJpbmcgPSBDcnlwdG9KUy5lbmMuSGV4LnN0cmluZ2lmeSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gKHdvcmRBcnJheSkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gd29yZEFycmF5LndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgc2lnQnl0ZXMgPSB3b3JkQXJyYXkuc2lnQnl0ZXM7XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydFxuXHQgICAgICAgICAgICB2YXIgaGV4Q2hhcnMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaWdCeXRlczsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgYml0ZSA9ICh3b3Jkc1tpID4+PiAyXSA+Pj4gKDI0IC0gKGkgJSA0KSAqIDgpKSAmIDB4ZmY7XG5cdCAgICAgICAgICAgICAgICBoZXhDaGFycy5wdXNoKChiaXRlID4+PiA0KS50b1N0cmluZygxNikpO1xuXHQgICAgICAgICAgICAgICAgaGV4Q2hhcnMucHVzaCgoYml0ZSAmIDB4MGYpLnRvU3RyaW5nKDE2KSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gaGV4Q2hhcnMuam9pbignJyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgaGV4IHN0cmluZyB0byBhIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaGV4U3RyIFRoZSBoZXggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmVuYy5IZXgucGFyc2UoaGV4U3RyaW5nKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBwYXJzZTogZnVuY3Rpb24gKGhleFN0cikge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgaGV4U3RyTGVuZ3RoID0gaGV4U3RyLmxlbmd0aDtcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhleFN0ckxlbmd0aDsgaSArPSAyKSB7XG5cdCAgICAgICAgICAgICAgICB3b3Jkc1tpID4+PiAzXSB8PSBwYXJzZUludChoZXhTdHIuc3Vic3RyKGksIDIpLCAxNikgPDwgKDI0IC0gKGkgJSA4KSAqIDQpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBXb3JkQXJyYXkuaW5pdCh3b3JkcywgaGV4U3RyTGVuZ3RoIC8gMik7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBMYXRpbjEgZW5jb2Rpbmcgc3RyYXRlZ3kuXG5cdCAgICAgKi9cblx0ICAgIHZhciBMYXRpbjEgPSBDX2VuYy5MYXRpbjEgPSB7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSB3b3JkIGFycmF5IHRvIGEgTGF0aW4xIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBMYXRpbjEgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgbGF0aW4xU3RyaW5nID0gQ3J5cHRvSlMuZW5jLkxhdGluMS5zdHJpbmdpZnkod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uICh3b3JkQXJyYXkpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IHdvcmRBcnJheS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHNpZ0J5dGVzID0gd29yZEFycmF5LnNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgdmFyIGxhdGluMUNoYXJzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2lnQnl0ZXM7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgdmFyIGJpdGUgPSAod29yZHNbaSA+Pj4gMl0gPj4+ICgyNCAtIChpICUgNCkgKiA4KSkgJiAweGZmO1xuXHQgICAgICAgICAgICAgICAgbGF0aW4xQ2hhcnMucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGJpdGUpKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBsYXRpbjFDaGFycy5qb2luKCcnKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSBMYXRpbjEgc3RyaW5nIHRvIGEgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsYXRpbjFTdHIgVGhlIExhdGluMSBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMuZW5jLkxhdGluMS5wYXJzZShsYXRpbjFTdHJpbmcpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHBhcnNlOiBmdW5jdGlvbiAobGF0aW4xU3RyKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgICAgIHZhciBsYXRpbjFTdHJMZW5ndGggPSBsYXRpbjFTdHIubGVuZ3RoO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGF0aW4xU3RyTGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIHdvcmRzW2kgPj4+IDJdIHw9IChsYXRpbjFTdHIuY2hhckNvZGVBdChpKSAmIDB4ZmYpIDw8ICgyNCAtIChpICUgNCkgKiA4KTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBuZXcgV29yZEFycmF5LmluaXQod29yZHMsIGxhdGluMVN0ckxlbmd0aCk7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBVVEYtOCBlbmNvZGluZyBzdHJhdGVneS5cblx0ICAgICAqL1xuXHQgICAgdmFyIFV0ZjggPSBDX2VuYy5VdGY4ID0ge1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgd29yZCBhcnJheSB0byBhIFVURi04IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBVVEYtOCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB1dGY4U3RyaW5nID0gQ3J5cHRvSlMuZW5jLlV0Zjguc3RyaW5naWZ5KHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgc3RyaW5naWZ5OiBmdW5jdGlvbiAod29yZEFycmF5KSB7XG5cdCAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZShMYXRpbjEuc3RyaW5naWZ5KHdvcmRBcnJheSkpKTtcblx0ICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuXHQgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYWxmb3JtZWQgVVRGLTggZGF0YScpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgVVRGLTggc3RyaW5nIHRvIGEgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1dGY4U3RyIFRoZSBVVEYtOCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMuZW5jLlV0ZjgucGFyc2UodXRmOFN0cmluZyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcGFyc2U6IGZ1bmN0aW9uICh1dGY4U3RyKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBMYXRpbjEucGFyc2UodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KHV0ZjhTdHIpKSk7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBYnN0cmFjdCBidWZmZXJlZCBibG9jayBhbGdvcml0aG0gdGVtcGxhdGUuXG5cdCAgICAgKlxuXHQgICAgICogVGhlIHByb3BlcnR5IGJsb2NrU2l6ZSBtdXN0IGJlIGltcGxlbWVudGVkIGluIGEgY29uY3JldGUgc3VidHlwZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcHJvcGVydHkge251bWJlcn0gX21pbkJ1ZmZlclNpemUgVGhlIG51bWJlciBvZiBibG9ja3MgdGhhdCBzaG91bGQgYmUga2VwdCB1bnByb2Nlc3NlZCBpbiB0aGUgYnVmZmVyLiBEZWZhdWx0OiAwXG5cdCAgICAgKi9cblx0ICAgIHZhciBCdWZmZXJlZEJsb2NrQWxnb3JpdGhtID0gQ19saWIuQnVmZmVyZWRCbG9ja0FsZ29yaXRobSA9IEJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBSZXNldHMgdGhpcyBibG9jayBhbGdvcml0aG0ncyBkYXRhIGJ1ZmZlciB0byBpdHMgaW5pdGlhbCBzdGF0ZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5yZXNldCgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIEluaXRpYWwgdmFsdWVzXG5cdCAgICAgICAgICAgIHRoaXMuX2RhdGEgPSBuZXcgV29yZEFycmF5LmluaXQoKTtcblx0ICAgICAgICAgICAgdGhpcy5fbkRhdGFCeXRlcyA9IDA7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEFkZHMgbmV3IGRhdGEgdG8gdGhpcyBibG9jayBhbGdvcml0aG0ncyBidWZmZXIuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYXBwZW5kLiBTdHJpbmdzIGFyZSBjb252ZXJ0ZWQgdG8gYSBXb3JkQXJyYXkgdXNpbmcgVVRGLTguXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uX2FwcGVuZCgnZGF0YScpO1xuXHQgICAgICAgICAqICAgICBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLl9hcHBlbmQod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBfYXBwZW5kOiBmdW5jdGlvbiAoZGF0YSkge1xuXHQgICAgICAgICAgICAvLyBDb252ZXJ0IHN0cmluZyB0byBXb3JkQXJyYXksIGVsc2UgYXNzdW1lIFdvcmRBcnJheSBhbHJlYWR5XG5cdCAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PSAnc3RyaW5nJykge1xuXHQgICAgICAgICAgICAgICAgZGF0YSA9IFV0ZjgucGFyc2UoZGF0YSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBBcHBlbmRcblx0ICAgICAgICAgICAgdGhpcy5fZGF0YS5jb25jYXQoZGF0YSk7XG5cdCAgICAgICAgICAgIHRoaXMuX25EYXRhQnl0ZXMgKz0gZGF0YS5zaWdCeXRlcztcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUHJvY2Vzc2VzIGF2YWlsYWJsZSBkYXRhIGJsb2Nrcy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIFRoaXMgbWV0aG9kIGludm9rZXMgX2RvUHJvY2Vzc0Jsb2NrKG9mZnNldCksIHdoaWNoIG11c3QgYmUgaW1wbGVtZW50ZWQgYnkgYSBjb25jcmV0ZSBzdWJ0eXBlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBkb0ZsdXNoIFdoZXRoZXIgYWxsIGJsb2NrcyBhbmQgcGFydGlhbCBibG9ja3Mgc2hvdWxkIGJlIHByb2Nlc3NlZC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHByb2Nlc3NlZCBkYXRhLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgcHJvY2Vzc2VkRGF0YSA9IGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uX3Byb2Nlc3MoKTtcblx0ICAgICAgICAgKiAgICAgdmFyIHByb2Nlc3NlZERhdGEgPSBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLl9wcm9jZXNzKCEhJ2ZsdXNoJyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgX3Byb2Nlc3M6IGZ1bmN0aW9uIChkb0ZsdXNoKSB7XG5cdCAgICAgICAgICAgIHZhciBwcm9jZXNzZWRXb3JkcztcblxuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLl9kYXRhO1xuXHQgICAgICAgICAgICB2YXIgZGF0YVdvcmRzID0gZGF0YS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIGRhdGFTaWdCeXRlcyA9IGRhdGEuc2lnQnl0ZXM7XG5cdCAgICAgICAgICAgIHZhciBibG9ja1NpemUgPSB0aGlzLmJsb2NrU2l6ZTtcblx0ICAgICAgICAgICAgdmFyIGJsb2NrU2l6ZUJ5dGVzID0gYmxvY2tTaXplICogNDtcblxuXHQgICAgICAgICAgICAvLyBDb3VudCBibG9ja3MgcmVhZHlcblx0ICAgICAgICAgICAgdmFyIG5CbG9ja3NSZWFkeSA9IGRhdGFTaWdCeXRlcyAvIGJsb2NrU2l6ZUJ5dGVzO1xuXHQgICAgICAgICAgICBpZiAoZG9GbHVzaCkge1xuXHQgICAgICAgICAgICAgICAgLy8gUm91bmQgdXAgdG8gaW5jbHVkZSBwYXJ0aWFsIGJsb2Nrc1xuXHQgICAgICAgICAgICAgICAgbkJsb2Nrc1JlYWR5ID0gTWF0aC5jZWlsKG5CbG9ja3NSZWFkeSk7XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAvLyBSb3VuZCBkb3duIHRvIGluY2x1ZGUgb25seSBmdWxsIGJsb2Nrcyxcblx0ICAgICAgICAgICAgICAgIC8vIGxlc3MgdGhlIG51bWJlciBvZiBibG9ja3MgdGhhdCBtdXN0IHJlbWFpbiBpbiB0aGUgYnVmZmVyXG5cdCAgICAgICAgICAgICAgICBuQmxvY2tzUmVhZHkgPSBNYXRoLm1heCgobkJsb2Nrc1JlYWR5IHwgMCkgLSB0aGlzLl9taW5CdWZmZXJTaXplLCAwKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIENvdW50IHdvcmRzIHJlYWR5XG5cdCAgICAgICAgICAgIHZhciBuV29yZHNSZWFkeSA9IG5CbG9ja3NSZWFkeSAqIGJsb2NrU2l6ZTtcblxuXHQgICAgICAgICAgICAvLyBDb3VudCBieXRlcyByZWFkeVxuXHQgICAgICAgICAgICB2YXIgbkJ5dGVzUmVhZHkgPSBNYXRoLm1pbihuV29yZHNSZWFkeSAqIDQsIGRhdGFTaWdCeXRlcyk7XG5cblx0ICAgICAgICAgICAgLy8gUHJvY2VzcyBibG9ja3Ncblx0ICAgICAgICAgICAgaWYgKG5Xb3Jkc1JlYWR5KSB7XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBvZmZzZXQgPSAwOyBvZmZzZXQgPCBuV29yZHNSZWFkeTsgb2Zmc2V0ICs9IGJsb2NrU2l6ZSkge1xuXHQgICAgICAgICAgICAgICAgICAgIC8vIFBlcmZvcm0gY29uY3JldGUtYWxnb3JpdGhtIGxvZ2ljXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpcy5fZG9Qcm9jZXNzQmxvY2soZGF0YVdvcmRzLCBvZmZzZXQpO1xuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAvLyBSZW1vdmUgcHJvY2Vzc2VkIHdvcmRzXG5cdCAgICAgICAgICAgICAgICBwcm9jZXNzZWRXb3JkcyA9IGRhdGFXb3Jkcy5zcGxpY2UoMCwgbldvcmRzUmVhZHkpO1xuXHQgICAgICAgICAgICAgICAgZGF0YS5zaWdCeXRlcyAtPSBuQnl0ZXNSZWFkeTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIFJldHVybiBwcm9jZXNzZWQgd29yZHNcblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBXb3JkQXJyYXkuaW5pdChwcm9jZXNzZWRXb3JkcywgbkJ5dGVzUmVhZHkpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGlzIG9iamVjdC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gVGhlIGNsb25lLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgY2xvbmUgPSBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLmNsb25lKCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdmFyIGNsb25lID0gQmFzZS5jbG9uZS5jYWxsKHRoaXMpO1xuXHQgICAgICAgICAgICBjbG9uZS5fZGF0YSA9IHRoaXMuX2RhdGEuY2xvbmUoKTtcblxuXHQgICAgICAgICAgICByZXR1cm4gY2xvbmU7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9taW5CdWZmZXJTaXplOiAwXG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBYnN0cmFjdCBoYXNoZXIgdGVtcGxhdGUuXG5cdCAgICAgKlxuXHQgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGJsb2NrU2l6ZSBUaGUgbnVtYmVyIG9mIDMyLWJpdCB3b3JkcyB0aGlzIGhhc2hlciBvcGVyYXRlcyBvbi4gRGVmYXVsdDogMTYgKDUxMiBiaXRzKVxuXHQgICAgICovXG5cdCAgICB2YXIgSGFzaGVyID0gQ19saWIuSGFzaGVyID0gQnVmZmVyZWRCbG9ja0FsZ29yaXRobS5leHRlbmQoe1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbmZpZ3VyYXRpb24gb3B0aW9ucy5cblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjZmc6IEJhc2UuZXh0ZW5kKCksXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBJbml0aWFsaXplcyBhIG5ld2x5IGNyZWF0ZWQgaGFzaGVyLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNmZyAoT3B0aW9uYWwpIFRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgdG8gdXNlIGZvciB0aGlzIGhhc2ggY29tcHV0YXRpb24uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBoYXNoZXIgPSBDcnlwdG9KUy5hbGdvLlNIQTI1Ni5jcmVhdGUoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBpbml0OiBmdW5jdGlvbiAoY2ZnKSB7XG5cdCAgICAgICAgICAgIC8vIEFwcGx5IGNvbmZpZyBkZWZhdWx0c1xuXHQgICAgICAgICAgICB0aGlzLmNmZyA9IHRoaXMuY2ZnLmV4dGVuZChjZmcpO1xuXG5cdCAgICAgICAgICAgIC8vIFNldCBpbml0aWFsIHZhbHVlc1xuXHQgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFJlc2V0cyB0aGlzIGhhc2hlciB0byBpdHMgaW5pdGlhbCBzdGF0ZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgaGFzaGVyLnJlc2V0KCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gUmVzZXQgZGF0YSBidWZmZXJcblx0ICAgICAgICAgICAgQnVmZmVyZWRCbG9ja0FsZ29yaXRobS5yZXNldC5jYWxsKHRoaXMpO1xuXG5cdCAgICAgICAgICAgIC8vIFBlcmZvcm0gY29uY3JldGUtaGFzaGVyIGxvZ2ljXG5cdCAgICAgICAgICAgIHRoaXMuX2RvUmVzZXQoKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogVXBkYXRlcyB0aGlzIGhhc2hlciB3aXRoIGEgbWVzc2FnZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZVVwZGF0ZSBUaGUgbWVzc2FnZSB0byBhcHBlbmQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtIYXNoZXJ9IFRoaXMgaGFzaGVyLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICBoYXNoZXIudXBkYXRlKCdtZXNzYWdlJyk7XG5cdCAgICAgICAgICogICAgIGhhc2hlci51cGRhdGUod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uIChtZXNzYWdlVXBkYXRlKSB7XG5cdCAgICAgICAgICAgIC8vIEFwcGVuZFxuXHQgICAgICAgICAgICB0aGlzLl9hcHBlbmQobWVzc2FnZVVwZGF0ZSk7XG5cblx0ICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBoYXNoXG5cdCAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3MoKTtcblxuXHQgICAgICAgICAgICAvLyBDaGFpbmFibGVcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEZpbmFsaXplcyB0aGUgaGFzaCBjb21wdXRhdGlvbi5cblx0ICAgICAgICAgKiBOb3RlIHRoYXQgdGhlIGZpbmFsaXplIG9wZXJhdGlvbiBpcyBlZmZlY3RpdmVseSBhIGRlc3RydWN0aXZlLCByZWFkLW9uY2Ugb3BlcmF0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlVXBkYXRlIChPcHRpb25hbCkgQSBmaW5hbCBtZXNzYWdlIHVwZGF0ZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGhhc2guXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBoYXNoID0gaGFzaGVyLmZpbmFsaXplKCk7XG5cdCAgICAgICAgICogICAgIHZhciBoYXNoID0gaGFzaGVyLmZpbmFsaXplKCdtZXNzYWdlJyk7XG5cdCAgICAgICAgICogICAgIHZhciBoYXNoID0gaGFzaGVyLmZpbmFsaXplKHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgZmluYWxpemU6IGZ1bmN0aW9uIChtZXNzYWdlVXBkYXRlKSB7XG5cdCAgICAgICAgICAgIC8vIEZpbmFsIG1lc3NhZ2UgdXBkYXRlXG5cdCAgICAgICAgICAgIGlmIChtZXNzYWdlVXBkYXRlKSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLl9hcHBlbmQobWVzc2FnZVVwZGF0ZSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBQZXJmb3JtIGNvbmNyZXRlLWhhc2hlciBsb2dpY1xuXHQgICAgICAgICAgICB2YXIgaGFzaCA9IHRoaXMuX2RvRmluYWxpemUoKTtcblxuXHQgICAgICAgICAgICByZXR1cm4gaGFzaDtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgYmxvY2tTaXplOiA1MTIvMzIsXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgc2hvcnRjdXQgZnVuY3Rpb24gdG8gYSBoYXNoZXIncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtIYXNoZXJ9IGhhc2hlciBUaGUgaGFzaGVyIHRvIGNyZWF0ZSBhIGhlbHBlciBmb3IuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIHNob3J0Y3V0IGZ1bmN0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgU0hBMjU2ID0gQ3J5cHRvSlMubGliLkhhc2hlci5fY3JlYXRlSGVscGVyKENyeXB0b0pTLmFsZ28uU0hBMjU2KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBfY3JlYXRlSGVscGVyOiBmdW5jdGlvbiAoaGFzaGVyKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAobWVzc2FnZSwgY2ZnKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gbmV3IGhhc2hlci5pbml0KGNmZykuZmluYWxpemUobWVzc2FnZSk7XG5cdCAgICAgICAgICAgIH07XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENyZWF0ZXMgYSBzaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgSE1BQydzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0hhc2hlcn0gaGFzaGVyIFRoZSBoYXNoZXIgdG8gdXNlIGluIHRoaXMgSE1BQyBoZWxwZXIuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIHNob3J0Y3V0IGZ1bmN0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgSG1hY1NIQTI1NiA9IENyeXB0b0pTLmxpYi5IYXNoZXIuX2NyZWF0ZUhtYWNIZWxwZXIoQ3J5cHRvSlMuYWxnby5TSEEyNTYpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIF9jcmVhdGVIbWFjSGVscGVyOiBmdW5jdGlvbiAoaGFzaGVyKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAobWVzc2FnZSwga2V5KSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENfYWxnby5ITUFDLmluaXQoaGFzaGVyLCBrZXkpLmZpbmFsaXplKG1lc3NhZ2UpO1xuXHQgICAgICAgICAgICB9O1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIEFsZ29yaXRobSBuYW1lc3BhY2UuXG5cdCAgICAgKi9cblx0ICAgIHZhciBDX2FsZ28gPSBDLmFsZ28gPSB7fTtcblxuXHQgICAgcmV0dXJuIEM7XG5cdH0oTWF0aCkpO1xuXG5cblx0cmV0dXJuIENyeXB0b0pTO1xuXG59KSk7IiwgIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0KGZ1bmN0aW9uICh1bmRlZmluZWQpIHtcblx0ICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgdmFyIEMgPSBDcnlwdG9KUztcblx0ICAgIHZhciBDX2xpYiA9IEMubGliO1xuXHQgICAgdmFyIEJhc2UgPSBDX2xpYi5CYXNlO1xuXHQgICAgdmFyIFgzMldvcmRBcnJheSA9IENfbGliLldvcmRBcnJheTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiB4NjQgbmFtZXNwYWNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQ194NjQgPSBDLng2NCA9IHt9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIEEgNjQtYml0IHdvcmQuXG5cdCAgICAgKi9cblx0ICAgIHZhciBYNjRXb3JkID0gQ194NjQuV29yZCA9IEJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBJbml0aWFsaXplcyBhIG5ld2x5IGNyZWF0ZWQgNjQtYml0IHdvcmQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gaGlnaCBUaGUgaGlnaCAzMiBiaXRzLlxuXHQgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsb3cgVGhlIGxvdyAzMiBiaXRzLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgeDY0V29yZCA9IENyeXB0b0pTLng2NC5Xb3JkLmNyZWF0ZSgweDAwMDEwMjAzLCAweDA0MDUwNjA3KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBpbml0OiBmdW5jdGlvbiAoaGlnaCwgbG93KSB7XG5cdCAgICAgICAgICAgIHRoaXMuaGlnaCA9IGhpZ2g7XG5cdCAgICAgICAgICAgIHRoaXMubG93ID0gbG93O1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEJpdHdpc2UgTk9UcyB0aGlzIHdvcmQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtYNjRXb3JkfSBBIG5ldyB4NjQtV29yZCBvYmplY3QgYWZ0ZXIgbmVnYXRpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBuZWdhdGVkID0geDY0V29yZC5ub3QoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICAvLyBub3Q6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gdmFyIGhpZ2ggPSB+dGhpcy5oaWdoO1xuXHQgICAgICAgICAgICAvLyB2YXIgbG93ID0gfnRoaXMubG93O1xuXG5cdCAgICAgICAgICAgIC8vIHJldHVybiBYNjRXb3JkLmNyZWF0ZShoaWdoLCBsb3cpO1xuXHQgICAgICAgIC8vIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBCaXR3aXNlIEFORHMgdGhpcyB3b3JkIHdpdGggdGhlIHBhc3NlZCB3b3JkLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtYNjRXb3JkfSB3b3JkIFRoZSB4NjQtV29yZCB0byBBTkQgd2l0aCB0aGlzIHdvcmQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtYNjRXb3JkfSBBIG5ldyB4NjQtV29yZCBvYmplY3QgYWZ0ZXIgQU5EaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgYW5kZWQgPSB4NjRXb3JkLmFuZChhbm90aGVyWDY0V29yZCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgLy8gYW5kOiBmdW5jdGlvbiAod29yZCkge1xuXHQgICAgICAgICAgICAvLyB2YXIgaGlnaCA9IHRoaXMuaGlnaCAmIHdvcmQuaGlnaDtcblx0ICAgICAgICAgICAgLy8gdmFyIGxvdyA9IHRoaXMubG93ICYgd29yZC5sb3c7XG5cblx0ICAgICAgICAgICAgLy8gcmV0dXJuIFg2NFdvcmQuY3JlYXRlKGhpZ2gsIGxvdyk7XG5cdCAgICAgICAgLy8gfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEJpdHdpc2UgT1JzIHRoaXMgd29yZCB3aXRoIHRoZSBwYXNzZWQgd29yZC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7WDY0V29yZH0gd29yZCBUaGUgeDY0LVdvcmQgdG8gT1Igd2l0aCB0aGlzIHdvcmQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtYNjRXb3JkfSBBIG5ldyB4NjQtV29yZCBvYmplY3QgYWZ0ZXIgT1JpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBvcmVkID0geDY0V29yZC5vcihhbm90aGVyWDY0V29yZCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgLy8gb3I6IGZ1bmN0aW9uICh3b3JkKSB7XG5cdCAgICAgICAgICAgIC8vIHZhciBoaWdoID0gdGhpcy5oaWdoIHwgd29yZC5oaWdoO1xuXHQgICAgICAgICAgICAvLyB2YXIgbG93ID0gdGhpcy5sb3cgfCB3b3JkLmxvdztcblxuXHQgICAgICAgICAgICAvLyByZXR1cm4gWDY0V29yZC5jcmVhdGUoaGlnaCwgbG93KTtcblx0ICAgICAgICAvLyB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQml0d2lzZSBYT1JzIHRoaXMgd29yZCB3aXRoIHRoZSBwYXNzZWQgd29yZC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7WDY0V29yZH0gd29yZCBUaGUgeDY0LVdvcmQgdG8gWE9SIHdpdGggdGhpcyB3b3JkLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7WDY0V29yZH0gQSBuZXcgeDY0LVdvcmQgb2JqZWN0IGFmdGVyIFhPUmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHhvcmVkID0geDY0V29yZC54b3IoYW5vdGhlclg2NFdvcmQpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIC8vIHhvcjogZnVuY3Rpb24gKHdvcmQpIHtcblx0ICAgICAgICAgICAgLy8gdmFyIGhpZ2ggPSB0aGlzLmhpZ2ggXiB3b3JkLmhpZ2g7XG5cdCAgICAgICAgICAgIC8vIHZhciBsb3cgPSB0aGlzLmxvdyBeIHdvcmQubG93O1xuXG5cdCAgICAgICAgICAgIC8vIHJldHVybiBYNjRXb3JkLmNyZWF0ZShoaWdoLCBsb3cpO1xuXHQgICAgICAgIC8vIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBTaGlmdHMgdGhpcyB3b3JkIG4gYml0cyB0byB0aGUgbGVmdC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgYml0cyB0byBzaGlmdC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1g2NFdvcmR9IEEgbmV3IHg2NC1Xb3JkIG9iamVjdCBhZnRlciBzaGlmdGluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHNoaWZ0ZWQgPSB4NjRXb3JkLnNoaWZ0TCgyNSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgLy8gc2hpZnRMOiBmdW5jdGlvbiAobikge1xuXHQgICAgICAgICAgICAvLyBpZiAobiA8IDMyKSB7XG5cdCAgICAgICAgICAgICAgICAvLyB2YXIgaGlnaCA9ICh0aGlzLmhpZ2ggPDwgbikgfCAodGhpcy5sb3cgPj4+ICgzMiAtIG4pKTtcblx0ICAgICAgICAgICAgICAgIC8vIHZhciBsb3cgPSB0aGlzLmxvdyA8PCBuO1xuXHQgICAgICAgICAgICAvLyB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgLy8gdmFyIGhpZ2ggPSB0aGlzLmxvdyA8PCAobiAtIDMyKTtcblx0ICAgICAgICAgICAgICAgIC8vIHZhciBsb3cgPSAwO1xuXHQgICAgICAgICAgICAvLyB9XG5cblx0ICAgICAgICAgICAgLy8gcmV0dXJuIFg2NFdvcmQuY3JlYXRlKGhpZ2gsIGxvdyk7XG5cdCAgICAgICAgLy8gfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFNoaWZ0cyB0aGlzIHdvcmQgbiBiaXRzIHRvIHRoZSByaWdodC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgYml0cyB0byBzaGlmdC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1g2NFdvcmR9IEEgbmV3IHg2NC1Xb3JkIG9iamVjdCBhZnRlciBzaGlmdGluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHNoaWZ0ZWQgPSB4NjRXb3JkLnNoaWZ0Uig3KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICAvLyBzaGlmdFI6IGZ1bmN0aW9uIChuKSB7XG5cdCAgICAgICAgICAgIC8vIGlmIChuIDwgMzIpIHtcblx0ICAgICAgICAgICAgICAgIC8vIHZhciBsb3cgPSAodGhpcy5sb3cgPj4+IG4pIHwgKHRoaXMuaGlnaCA8PCAoMzIgLSBuKSk7XG5cdCAgICAgICAgICAgICAgICAvLyB2YXIgaGlnaCA9IHRoaXMuaGlnaCA+Pj4gbjtcblx0ICAgICAgICAgICAgLy8gfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIC8vIHZhciBsb3cgPSB0aGlzLmhpZ2ggPj4+IChuIC0gMzIpO1xuXHQgICAgICAgICAgICAgICAgLy8gdmFyIGhpZ2ggPSAwO1xuXHQgICAgICAgICAgICAvLyB9XG5cblx0ICAgICAgICAgICAgLy8gcmV0dXJuIFg2NFdvcmQuY3JlYXRlKGhpZ2gsIGxvdyk7XG5cdCAgICAgICAgLy8gfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFJvdGF0ZXMgdGhpcyB3b3JkIG4gYml0cyB0byB0aGUgbGVmdC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgYml0cyB0byByb3RhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtYNjRXb3JkfSBBIG5ldyB4NjQtV29yZCBvYmplY3QgYWZ0ZXIgcm90YXRpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciByb3RhdGVkID0geDY0V29yZC5yb3RMKDI1KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICAvLyByb3RMOiBmdW5jdGlvbiAobikge1xuXHQgICAgICAgICAgICAvLyByZXR1cm4gdGhpcy5zaGlmdEwobikub3IodGhpcy5zaGlmdFIoNjQgLSBuKSk7XG5cdCAgICAgICAgLy8gfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFJvdGF0ZXMgdGhpcyB3b3JkIG4gYml0cyB0byB0aGUgcmlnaHQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIGJpdHMgdG8gcm90YXRlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7WDY0V29yZH0gQSBuZXcgeDY0LVdvcmQgb2JqZWN0IGFmdGVyIHJvdGF0aW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgcm90YXRlZCA9IHg2NFdvcmQucm90Uig3KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICAvLyByb3RSOiBmdW5jdGlvbiAobikge1xuXHQgICAgICAgICAgICAvLyByZXR1cm4gdGhpcy5zaGlmdFIobikub3IodGhpcy5zaGlmdEwoNjQgLSBuKSk7XG5cdCAgICAgICAgLy8gfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEFkZHMgdGhpcyB3b3JkIHdpdGggdGhlIHBhc3NlZCB3b3JkLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtYNjRXb3JkfSB3b3JkIFRoZSB4NjQtV29yZCB0byBhZGQgd2l0aCB0aGlzIHdvcmQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtYNjRXb3JkfSBBIG5ldyB4NjQtV29yZCBvYmplY3QgYWZ0ZXIgYWRkaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgYWRkZWQgPSB4NjRXb3JkLmFkZChhbm90aGVyWDY0V29yZCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgLy8gYWRkOiBmdW5jdGlvbiAod29yZCkge1xuXHQgICAgICAgICAgICAvLyB2YXIgbG93ID0gKHRoaXMubG93ICsgd29yZC5sb3cpIHwgMDtcblx0ICAgICAgICAgICAgLy8gdmFyIGNhcnJ5ID0gKGxvdyA+Pj4gMCkgPCAodGhpcy5sb3cgPj4+IDApID8gMSA6IDA7XG5cdCAgICAgICAgICAgIC8vIHZhciBoaWdoID0gKHRoaXMuaGlnaCArIHdvcmQuaGlnaCArIGNhcnJ5KSB8IDA7XG5cblx0ICAgICAgICAgICAgLy8gcmV0dXJuIFg2NFdvcmQuY3JlYXRlKGhpZ2gsIGxvdyk7XG5cdCAgICAgICAgLy8gfVxuXHQgICAgfSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogQW4gYXJyYXkgb2YgNjQtYml0IHdvcmRzLlxuXHQgICAgICpcblx0ICAgICAqIEBwcm9wZXJ0eSB7QXJyYXl9IHdvcmRzIFRoZSBhcnJheSBvZiBDcnlwdG9KUy54NjQuV29yZCBvYmplY3RzLlxuXHQgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IHNpZ0J5dGVzIFRoZSBudW1iZXIgb2Ygc2lnbmlmaWNhbnQgYnl0ZXMgaW4gdGhpcyB3b3JkIGFycmF5LlxuXHQgICAgICovXG5cdCAgICB2YXIgWDY0V29yZEFycmF5ID0gQ194NjQuV29yZEFycmF5ID0gQmFzZS5leHRlbmQoe1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEluaXRpYWxpemVzIGEgbmV3bHkgY3JlYXRlZCB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtBcnJheX0gd29yZHMgKE9wdGlvbmFsKSBBbiBhcnJheSBvZiBDcnlwdG9KUy54NjQuV29yZCBvYmplY3RzLlxuXHQgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaWdCeXRlcyAoT3B0aW9uYWwpIFRoZSBudW1iZXIgb2Ygc2lnbmlmaWNhbnQgYnl0ZXMgaW4gdGhlIHdvcmRzLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMueDY0LldvcmRBcnJheS5jcmVhdGUoKTtcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMueDY0LldvcmRBcnJheS5jcmVhdGUoW1xuXHQgICAgICAgICAqICAgICAgICAgQ3J5cHRvSlMueDY0LldvcmQuY3JlYXRlKDB4MDAwMTAyMDMsIDB4MDQwNTA2MDcpLFxuXHQgICAgICAgICAqICAgICAgICAgQ3J5cHRvSlMueDY0LldvcmQuY3JlYXRlKDB4MTgxOTFhMWIsIDB4MWMxZDFlMWYpXG5cdCAgICAgICAgICogICAgIF0pO1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy54NjQuV29yZEFycmF5LmNyZWF0ZShbXG5cdCAgICAgICAgICogICAgICAgICBDcnlwdG9KUy54NjQuV29yZC5jcmVhdGUoMHgwMDAxMDIwMywgMHgwNDA1MDYwNyksXG5cdCAgICAgICAgICogICAgICAgICBDcnlwdG9KUy54NjQuV29yZC5jcmVhdGUoMHgxODE5MWExYiwgMHgxYzFkMWUxZilcblx0ICAgICAgICAgKiAgICAgXSwgMTApO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGluaXQ6IGZ1bmN0aW9uICh3b3Jkcywgc2lnQnl0ZXMpIHtcblx0ICAgICAgICAgICAgd29yZHMgPSB0aGlzLndvcmRzID0gd29yZHMgfHwgW107XG5cblx0ICAgICAgICAgICAgaWYgKHNpZ0J5dGVzICE9IHVuZGVmaW5lZCkge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5zaWdCeXRlcyA9IHNpZ0J5dGVzO1xuXHQgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5zaWdCeXRlcyA9IHdvcmRzLmxlbmd0aCAqIDg7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgdGhpcyA2NC1iaXQgd29yZCBhcnJheSB0byBhIDMyLWJpdCB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7Q3J5cHRvSlMubGliLldvcmRBcnJheX0gVGhpcyB3b3JkIGFycmF5J3MgZGF0YSBhcyBhIDMyLWJpdCB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgeDMyV29yZEFycmF5ID0geDY0V29yZEFycmF5LnRvWDMyKCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgdG9YMzI6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciB4NjRXb3JkcyA9IHRoaXMud29yZHM7XG5cdCAgICAgICAgICAgIHZhciB4NjRXb3Jkc0xlbmd0aCA9IHg2NFdvcmRzLmxlbmd0aDtcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHZhciB4MzJXb3JkcyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHg2NFdvcmRzTGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIHZhciB4NjRXb3JkID0geDY0V29yZHNbaV07XG5cdCAgICAgICAgICAgICAgICB4MzJXb3Jkcy5wdXNoKHg2NFdvcmQuaGlnaCk7XG5cdCAgICAgICAgICAgICAgICB4MzJXb3Jkcy5wdXNoKHg2NFdvcmQubG93KTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBYMzJXb3JkQXJyYXkuY3JlYXRlKHgzMldvcmRzLCB0aGlzLnNpZ0J5dGVzKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhpcyB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7WDY0V29yZEFycmF5fSBUaGUgY2xvbmUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBjbG9uZSA9IHg2NFdvcmRBcnJheS5jbG9uZSgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHZhciBjbG9uZSA9IEJhc2UuY2xvbmUuY2FsbCh0aGlzKTtcblxuXHQgICAgICAgICAgICAvLyBDbG9uZSBcIndvcmRzXCIgYXJyYXlcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gY2xvbmUud29yZHMgPSB0aGlzLndvcmRzLnNsaWNlKDApO1xuXG5cdCAgICAgICAgICAgIC8vIENsb25lIGVhY2ggWDY0V29yZCBvYmplY3Rcblx0ICAgICAgICAgICAgdmFyIHdvcmRzTGVuZ3RoID0gd29yZHMubGVuZ3RoO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHdvcmRzTGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIHdvcmRzW2ldID0gd29yZHNbaV0uY2xvbmUoKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBjbG9uZTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblx0fSgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUztcblxufSkpOyIsICI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXCIuL2NvcmVcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdChmdW5jdGlvbiAoKSB7XG5cdCAgICAvLyBDaGVjayBpZiB0eXBlZCBhcnJheXMgYXJlIHN1cHBvcnRlZFxuXHQgICAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXG5cdCAgICAvLyBTaG9ydGN1dHNcblx0ICAgIHZhciBDID0gQ3J5cHRvSlM7XG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYjtcblx0ICAgIHZhciBXb3JkQXJyYXkgPSBDX2xpYi5Xb3JkQXJyYXk7XG5cblx0ICAgIC8vIFJlZmVyZW5jZSBvcmlnaW5hbCBpbml0XG5cdCAgICB2YXIgc3VwZXJJbml0ID0gV29yZEFycmF5LmluaXQ7XG5cblx0ICAgIC8vIEF1Z21lbnQgV29yZEFycmF5LmluaXQgdG8gaGFuZGxlIHR5cGVkIGFycmF5c1xuXHQgICAgdmFyIHN1YkluaXQgPSBXb3JkQXJyYXkuaW5pdCA9IGZ1bmN0aW9uICh0eXBlZEFycmF5KSB7XG5cdCAgICAgICAgLy8gQ29udmVydCBidWZmZXJzIHRvIHVpbnQ4XG5cdCAgICAgICAgaWYgKHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuXHQgICAgICAgICAgICB0eXBlZEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkodHlwZWRBcnJheSk7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgLy8gQ29udmVydCBvdGhlciBhcnJheSB2aWV3cyB0byB1aW50OFxuXHQgICAgICAgIGlmIChcblx0ICAgICAgICAgICAgdHlwZWRBcnJheSBpbnN0YW5jZW9mIEludDhBcnJheSB8fFxuXHQgICAgICAgICAgICAodHlwZW9mIFVpbnQ4Q2xhbXBlZEFycmF5ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheSkgfHxcblx0ICAgICAgICAgICAgdHlwZWRBcnJheSBpbnN0YW5jZW9mIEludDE2QXJyYXkgfHxcblx0ICAgICAgICAgICAgdHlwZWRBcnJheSBpbnN0YW5jZW9mIFVpbnQxNkFycmF5IHx8XG5cdCAgICAgICAgICAgIHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBJbnQzMkFycmF5IHx8XG5cdCAgICAgICAgICAgIHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBVaW50MzJBcnJheSB8fFxuXHQgICAgICAgICAgICB0eXBlZEFycmF5IGluc3RhbmNlb2YgRmxvYXQzMkFycmF5IHx8XG5cdCAgICAgICAgICAgIHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBGbG9hdDY0QXJyYXlcblx0ICAgICAgICApIHtcblx0ICAgICAgICAgICAgdHlwZWRBcnJheSA9IG5ldyBVaW50OEFycmF5KHR5cGVkQXJyYXkuYnVmZmVyLCB0eXBlZEFycmF5LmJ5dGVPZmZzZXQsIHR5cGVkQXJyYXkuYnl0ZUxlbmd0aCk7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgLy8gSGFuZGxlIFVpbnQ4QXJyYXlcblx0ICAgICAgICBpZiAodHlwZWRBcnJheSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgdmFyIHR5cGVkQXJyYXlCeXRlTGVuZ3RoID0gdHlwZWRBcnJheS5ieXRlTGVuZ3RoO1xuXG5cdCAgICAgICAgICAgIC8vIEV4dHJhY3QgYnl0ZXNcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHlwZWRBcnJheUJ5dGVMZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgd29yZHNbaSA+Pj4gMl0gfD0gdHlwZWRBcnJheVtpXSA8PCAoMjQgLSAoaSAlIDQpICogOCk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBJbml0aWFsaXplIHRoaXMgd29yZCBhcnJheVxuXHQgICAgICAgICAgICBzdXBlckluaXQuY2FsbCh0aGlzLCB3b3JkcywgdHlwZWRBcnJheUJ5dGVMZW5ndGgpO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIC8vIEVsc2UgY2FsbCBub3JtYWwgaW5pdFxuXHQgICAgICAgICAgICBzdXBlckluaXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXG5cdCAgICBzdWJJbml0LnByb3RvdHlwZSA9IFdvcmRBcnJheTtcblx0fSgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUy5saWIuV29yZEFycmF5O1xuXG59KSk7IiwgIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0KGZ1bmN0aW9uICgpIHtcblx0ICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgdmFyIEMgPSBDcnlwdG9KUztcblx0ICAgIHZhciBDX2xpYiA9IEMubGliO1xuXHQgICAgdmFyIFdvcmRBcnJheSA9IENfbGliLldvcmRBcnJheTtcblx0ICAgIHZhciBDX2VuYyA9IEMuZW5jO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFVURi0xNiBCRSBlbmNvZGluZyBzdHJhdGVneS5cblx0ICAgICAqL1xuXHQgICAgdmFyIFV0ZjE2QkUgPSBDX2VuYy5VdGYxNiA9IENfZW5jLlV0ZjE2QkUgPSB7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSB3b3JkIGFycmF5IHRvIGEgVVRGLTE2IEJFIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBVVEYtMTYgQkUgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgdXRmMTZTdHJpbmcgPSBDcnlwdG9KUy5lbmMuVXRmMTYuc3RyaW5naWZ5KHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgc3RyaW5naWZ5OiBmdW5jdGlvbiAod29yZEFycmF5KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSB3b3JkQXJyYXkud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBzaWdCeXRlcyA9IHdvcmRBcnJheS5zaWdCeXRlcztcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHZhciB1dGYxNkNoYXJzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2lnQnl0ZXM7IGkgKz0gMikge1xuXHQgICAgICAgICAgICAgICAgdmFyIGNvZGVQb2ludCA9ICh3b3Jkc1tpID4+PiAyXSA+Pj4gKDE2IC0gKGkgJSA0KSAqIDgpKSAmIDB4ZmZmZjtcblx0ICAgICAgICAgICAgICAgIHV0ZjE2Q2hhcnMucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGVQb2ludCkpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIHV0ZjE2Q2hhcnMuam9pbignJyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgVVRGLTE2IEJFIHN0cmluZyB0byBhIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXRmMTZTdHIgVGhlIFVURi0xNiBCRSBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMuZW5jLlV0ZjE2LnBhcnNlKHV0ZjE2U3RyaW5nKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBwYXJzZTogZnVuY3Rpb24gKHV0ZjE2U3RyKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgICAgIHZhciB1dGYxNlN0ckxlbmd0aCA9IHV0ZjE2U3RyLmxlbmd0aDtcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHV0ZjE2U3RyTGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIHdvcmRzW2kgPj4+IDFdIHw9IHV0ZjE2U3RyLmNoYXJDb2RlQXQoaSkgPDwgKDE2IC0gKGkgJSAyKSAqIDE2KTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBXb3JkQXJyYXkuY3JlYXRlKHdvcmRzLCB1dGYxNlN0ckxlbmd0aCAqIDIpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIC8qKlxuXHQgICAgICogVVRGLTE2IExFIGVuY29kaW5nIHN0cmF0ZWd5LlxuXHQgICAgICovXG5cdCAgICBDX2VuYy5VdGYxNkxFID0ge1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgd29yZCBhcnJheSB0byBhIFVURi0xNiBMRSBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gd29yZEFycmF5IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgVVRGLTE2IExFIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHV0ZjE2U3RyID0gQ3J5cHRvSlMuZW5jLlV0ZjE2TEUuc3RyaW5naWZ5KHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgc3RyaW5naWZ5OiBmdW5jdGlvbiAod29yZEFycmF5KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSB3b3JkQXJyYXkud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBzaWdCeXRlcyA9IHdvcmRBcnJheS5zaWdCeXRlcztcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHZhciB1dGYxNkNoYXJzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2lnQnl0ZXM7IGkgKz0gMikge1xuXHQgICAgICAgICAgICAgICAgdmFyIGNvZGVQb2ludCA9IHN3YXBFbmRpYW4oKHdvcmRzW2kgPj4+IDJdID4+PiAoMTYgLSAoaSAlIDQpICogOCkpICYgMHhmZmZmKTtcblx0ICAgICAgICAgICAgICAgIHV0ZjE2Q2hhcnMucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGVQb2ludCkpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIHV0ZjE2Q2hhcnMuam9pbignJyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgVVRGLTE2IExFIHN0cmluZyB0byBhIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXRmMTZTdHIgVGhlIFVURi0xNiBMRSBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMuZW5jLlV0ZjE2TEUucGFyc2UodXRmMTZTdHIpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHBhcnNlOiBmdW5jdGlvbiAodXRmMTZTdHIpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgdmFyIHV0ZjE2U3RyTGVuZ3RoID0gdXRmMTZTdHIubGVuZ3RoO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdXRmMTZTdHJMZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgd29yZHNbaSA+Pj4gMV0gfD0gc3dhcEVuZGlhbih1dGYxNlN0ci5jaGFyQ29kZUF0KGkpIDw8ICgxNiAtIChpICUgMikgKiAxNikpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIFdvcmRBcnJheS5jcmVhdGUod29yZHMsIHV0ZjE2U3RyTGVuZ3RoICogMik7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblxuXHQgICAgZnVuY3Rpb24gc3dhcEVuZGlhbih3b3JkKSB7XG5cdCAgICAgICAgcmV0dXJuICgod29yZCA8PCA4KSAmIDB4ZmYwMGZmMDApIHwgKCh3b3JkID4+PiA4KSAmIDB4MDBmZjAwZmYpO1xuXHQgICAgfVxuXHR9KCkpO1xuXG5cblx0cmV0dXJuIENyeXB0b0pTLmVuYy5VdGYxNjtcblxufSkpOyIsICI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXCIuL2NvcmVcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdChmdW5jdGlvbiAoKSB7XG5cdCAgICAvLyBTaG9ydGN1dHNcblx0ICAgIHZhciBDID0gQ3J5cHRvSlM7XG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYjtcblx0ICAgIHZhciBXb3JkQXJyYXkgPSBDX2xpYi5Xb3JkQXJyYXk7XG5cdCAgICB2YXIgQ19lbmMgPSBDLmVuYztcblxuXHQgICAgLyoqXG5cdCAgICAgKiBCYXNlNjQgZW5jb2Rpbmcgc3RyYXRlZ3kuXG5cdCAgICAgKi9cblx0ICAgIHZhciBCYXNlNjQgPSBDX2VuYy5CYXNlNjQgPSB7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSB3b3JkIGFycmF5IHRvIGEgQmFzZTY0IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBCYXNlNjQgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgYmFzZTY0U3RyaW5nID0gQ3J5cHRvSlMuZW5jLkJhc2U2NC5zdHJpbmdpZnkod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uICh3b3JkQXJyYXkpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IHdvcmRBcnJheS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHNpZ0J5dGVzID0gd29yZEFycmF5LnNpZ0J5dGVzO1xuXHQgICAgICAgICAgICB2YXIgbWFwID0gdGhpcy5fbWFwO1xuXG5cdCAgICAgICAgICAgIC8vIENsYW1wIGV4Y2VzcyBiaXRzXG5cdCAgICAgICAgICAgIHdvcmRBcnJheS5jbGFtcCgpO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgdmFyIGJhc2U2NENoYXJzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2lnQnl0ZXM7IGkgKz0gMykge1xuXHQgICAgICAgICAgICAgICAgdmFyIGJ5dGUxID0gKHdvcmRzW2kgPj4+IDJdICAgICAgID4+PiAoMjQgLSAoaSAlIDQpICogOCkpICAgICAgICYgMHhmZjtcblx0ICAgICAgICAgICAgICAgIHZhciBieXRlMiA9ICh3b3Jkc1soaSArIDEpID4+PiAyXSA+Pj4gKDI0IC0gKChpICsgMSkgJSA0KSAqIDgpKSAmIDB4ZmY7XG5cdCAgICAgICAgICAgICAgICB2YXIgYnl0ZTMgPSAod29yZHNbKGkgKyAyKSA+Pj4gMl0gPj4+ICgyNCAtICgoaSArIDIpICUgNCkgKiA4KSkgJiAweGZmO1xuXG5cdCAgICAgICAgICAgICAgICB2YXIgdHJpcGxldCA9IChieXRlMSA8PCAxNikgfCAoYnl0ZTIgPDwgOCkgfCBieXRlMztcblxuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IChqIDwgNCkgJiYgKGkgKyBqICogMC43NSA8IHNpZ0J5dGVzKTsgaisrKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgYmFzZTY0Q2hhcnMucHVzaChtYXAuY2hhckF0KCh0cmlwbGV0ID4+PiAoNiAqICgzIC0gaikpKSAmIDB4M2YpKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIEFkZCBwYWRkaW5nXG5cdCAgICAgICAgICAgIHZhciBwYWRkaW5nQ2hhciA9IG1hcC5jaGFyQXQoNjQpO1xuXHQgICAgICAgICAgICBpZiAocGFkZGluZ0NoYXIpIHtcblx0ICAgICAgICAgICAgICAgIHdoaWxlIChiYXNlNjRDaGFycy5sZW5ndGggJSA0KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgYmFzZTY0Q2hhcnMucHVzaChwYWRkaW5nQ2hhcik7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gYmFzZTY0Q2hhcnMuam9pbignJyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgQmFzZTY0IHN0cmluZyB0byBhIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gYmFzZTY0U3RyIFRoZSBCYXNlNjQgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmVuYy5CYXNlNjQucGFyc2UoYmFzZTY0U3RyaW5nKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBwYXJzZTogZnVuY3Rpb24gKGJhc2U2NFN0cikge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIGJhc2U2NFN0ckxlbmd0aCA9IGJhc2U2NFN0ci5sZW5ndGg7XG5cdCAgICAgICAgICAgIHZhciBtYXAgPSB0aGlzLl9tYXA7XG5cdCAgICAgICAgICAgIHZhciByZXZlcnNlTWFwID0gdGhpcy5fcmV2ZXJzZU1hcDtcblxuXHQgICAgICAgICAgICBpZiAoIXJldmVyc2VNYXApIHtcblx0ICAgICAgICAgICAgICAgICAgICByZXZlcnNlTWFwID0gdGhpcy5fcmV2ZXJzZU1hcCA9IFtdO1xuXHQgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgbWFwLmxlbmd0aDsgaisrKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHJldmVyc2VNYXBbbWFwLmNoYXJDb2RlQXQoaildID0gajtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBJZ25vcmUgcGFkZGluZ1xuXHQgICAgICAgICAgICB2YXIgcGFkZGluZ0NoYXIgPSBtYXAuY2hhckF0KDY0KTtcblx0ICAgICAgICAgICAgaWYgKHBhZGRpbmdDaGFyKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgcGFkZGluZ0luZGV4ID0gYmFzZTY0U3RyLmluZGV4T2YocGFkZGluZ0NoYXIpO1xuXHQgICAgICAgICAgICAgICAgaWYgKHBhZGRpbmdJbmRleCAhPT0gLTEpIHtcblx0ICAgICAgICAgICAgICAgICAgICBiYXNlNjRTdHJMZW5ndGggPSBwYWRkaW5nSW5kZXg7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHJldHVybiBwYXJzZUxvb3AoYmFzZTY0U3RyLCBiYXNlNjRTdHJMZW5ndGgsIHJldmVyc2VNYXApO1xuXG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9tYXA6ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPSdcblx0ICAgIH07XG5cblx0ICAgIGZ1bmN0aW9uIHBhcnNlTG9vcChiYXNlNjRTdHIsIGJhc2U2NFN0ckxlbmd0aCwgcmV2ZXJzZU1hcCkge1xuXHQgICAgICB2YXIgd29yZHMgPSBbXTtcblx0ICAgICAgdmFyIG5CeXRlcyA9IDA7XG5cdCAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmFzZTY0U3RyTGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgIGlmIChpICUgNCkge1xuXHQgICAgICAgICAgICAgIHZhciBiaXRzMSA9IHJldmVyc2VNYXBbYmFzZTY0U3RyLmNoYXJDb2RlQXQoaSAtIDEpXSA8PCAoKGkgJSA0KSAqIDIpO1xuXHQgICAgICAgICAgICAgIHZhciBiaXRzMiA9IHJldmVyc2VNYXBbYmFzZTY0U3RyLmNoYXJDb2RlQXQoaSldID4+PiAoNiAtIChpICUgNCkgKiAyKTtcblx0ICAgICAgICAgICAgICB2YXIgYml0c0NvbWJpbmVkID0gYml0czEgfCBiaXRzMjtcblx0ICAgICAgICAgICAgICB3b3Jkc1tuQnl0ZXMgPj4+IDJdIHw9IGJpdHNDb21iaW5lZCA8PCAoMjQgLSAobkJ5dGVzICUgNCkgKiA4KTtcblx0ICAgICAgICAgICAgICBuQnl0ZXMrKztcblx0ICAgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gV29yZEFycmF5LmNyZWF0ZSh3b3JkcywgbkJ5dGVzKTtcblx0ICAgIH1cblx0fSgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUy5lbmMuQmFzZTY0O1xuXG59KSk7IiwgIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0KGZ1bmN0aW9uICgpIHtcblx0ICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgdmFyIEMgPSBDcnlwdG9KUztcblx0ICAgIHZhciBDX2xpYiA9IEMubGliO1xuXHQgICAgdmFyIFdvcmRBcnJheSA9IENfbGliLldvcmRBcnJheTtcblx0ICAgIHZhciBDX2VuYyA9IEMuZW5jO1xuXG5cdCAgICAvKipcblx0ICAgICAqIEJhc2U2NHVybCBlbmNvZGluZyBzdHJhdGVneS5cblx0ICAgICAqL1xuXHQgICAgdmFyIEJhc2U2NHVybCA9IENfZW5jLkJhc2U2NHVybCA9IHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIHdvcmQgYXJyYXkgdG8gYSBCYXNlNjR1cmwgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl9IHdvcmRBcnJheSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXJsU2FmZSBXaGV0aGVyIHRvIHVzZSB1cmwgc2FmZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgQmFzZTY0dXJsIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGJhc2U2NFN0cmluZyA9IENyeXB0b0pTLmVuYy5CYXNlNjR1cmwuc3RyaW5naWZ5KHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgc3RyaW5naWZ5OiBmdW5jdGlvbiAod29yZEFycmF5LCB1cmxTYWZlPXRydWUpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IHdvcmRBcnJheS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHNpZ0J5dGVzID0gd29yZEFycmF5LnNpZ0J5dGVzO1xuXHQgICAgICAgICAgICB2YXIgbWFwID0gdXJsU2FmZSA/IHRoaXMuX3NhZmVfbWFwIDogdGhpcy5fbWFwO1xuXG5cdCAgICAgICAgICAgIC8vIENsYW1wIGV4Y2VzcyBiaXRzXG5cdCAgICAgICAgICAgIHdvcmRBcnJheS5jbGFtcCgpO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgdmFyIGJhc2U2NENoYXJzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2lnQnl0ZXM7IGkgKz0gMykge1xuXHQgICAgICAgICAgICAgICAgdmFyIGJ5dGUxID0gKHdvcmRzW2kgPj4+IDJdICAgICAgID4+PiAoMjQgLSAoaSAlIDQpICogOCkpICAgICAgICYgMHhmZjtcblx0ICAgICAgICAgICAgICAgIHZhciBieXRlMiA9ICh3b3Jkc1soaSArIDEpID4+PiAyXSA+Pj4gKDI0IC0gKChpICsgMSkgJSA0KSAqIDgpKSAmIDB4ZmY7XG5cdCAgICAgICAgICAgICAgICB2YXIgYnl0ZTMgPSAod29yZHNbKGkgKyAyKSA+Pj4gMl0gPj4+ICgyNCAtICgoaSArIDIpICUgNCkgKiA4KSkgJiAweGZmO1xuXG5cdCAgICAgICAgICAgICAgICB2YXIgdHJpcGxldCA9IChieXRlMSA8PCAxNikgfCAoYnl0ZTIgPDwgOCkgfCBieXRlMztcblxuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IChqIDwgNCkgJiYgKGkgKyBqICogMC43NSA8IHNpZ0J5dGVzKTsgaisrKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgYmFzZTY0Q2hhcnMucHVzaChtYXAuY2hhckF0KCh0cmlwbGV0ID4+PiAoNiAqICgzIC0gaikpKSAmIDB4M2YpKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIEFkZCBwYWRkaW5nXG5cdCAgICAgICAgICAgIHZhciBwYWRkaW5nQ2hhciA9IG1hcC5jaGFyQXQoNjQpO1xuXHQgICAgICAgICAgICBpZiAocGFkZGluZ0NoYXIpIHtcblx0ICAgICAgICAgICAgICAgIHdoaWxlIChiYXNlNjRDaGFycy5sZW5ndGggJSA0KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgYmFzZTY0Q2hhcnMucHVzaChwYWRkaW5nQ2hhcik7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gYmFzZTY0Q2hhcnMuam9pbignJyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgQmFzZTY0dXJsIHN0cmluZyB0byBhIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gYmFzZTY0U3RyIFRoZSBCYXNlNjR1cmwgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtib29sZWFufSB1cmxTYWZlIFdoZXRoZXIgdG8gdXNlIHVybCBzYWZlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMuZW5jLkJhc2U2NHVybC5wYXJzZShiYXNlNjRTdHJpbmcpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHBhcnNlOiBmdW5jdGlvbiAoYmFzZTY0U3RyLCB1cmxTYWZlPXRydWUpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBiYXNlNjRTdHJMZW5ndGggPSBiYXNlNjRTdHIubGVuZ3RoO1xuXHQgICAgICAgICAgICB2YXIgbWFwID0gdXJsU2FmZSA/IHRoaXMuX3NhZmVfbWFwIDogdGhpcy5fbWFwO1xuXHQgICAgICAgICAgICB2YXIgcmV2ZXJzZU1hcCA9IHRoaXMuX3JldmVyc2VNYXA7XG5cblx0ICAgICAgICAgICAgaWYgKCFyZXZlcnNlTWFwKSB7XG5cdCAgICAgICAgICAgICAgICByZXZlcnNlTWFwID0gdGhpcy5fcmV2ZXJzZU1hcCA9IFtdO1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBtYXAubGVuZ3RoOyBqKyspIHtcblx0ICAgICAgICAgICAgICAgICAgICByZXZlcnNlTWFwW21hcC5jaGFyQ29kZUF0KGopXSA9IGo7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBJZ25vcmUgcGFkZGluZ1xuXHQgICAgICAgICAgICB2YXIgcGFkZGluZ0NoYXIgPSBtYXAuY2hhckF0KDY0KTtcblx0ICAgICAgICAgICAgaWYgKHBhZGRpbmdDaGFyKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgcGFkZGluZ0luZGV4ID0gYmFzZTY0U3RyLmluZGV4T2YocGFkZGluZ0NoYXIpO1xuXHQgICAgICAgICAgICAgICAgaWYgKHBhZGRpbmdJbmRleCAhPT0gLTEpIHtcblx0ICAgICAgICAgICAgICAgICAgICBiYXNlNjRTdHJMZW5ndGggPSBwYWRkaW5nSW5kZXg7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHJldHVybiBwYXJzZUxvb3AoYmFzZTY0U3RyLCBiYXNlNjRTdHJMZW5ndGgsIHJldmVyc2VNYXApO1xuXG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9tYXA6ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPScsXG5cdCAgICAgICAgX3NhZmVfbWFwOiAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODktXycsXG5cdCAgICB9O1xuXG5cdCAgICBmdW5jdGlvbiBwYXJzZUxvb3AoYmFzZTY0U3RyLCBiYXNlNjRTdHJMZW5ndGgsIHJldmVyc2VNYXApIHtcblx0ICAgICAgICB2YXIgd29yZHMgPSBbXTtcblx0ICAgICAgICB2YXIgbkJ5dGVzID0gMDtcblx0ICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJhc2U2NFN0ckxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgIGlmIChpICUgNCkge1xuXHQgICAgICAgICAgICAgICAgdmFyIGJpdHMxID0gcmV2ZXJzZU1hcFtiYXNlNjRTdHIuY2hhckNvZGVBdChpIC0gMSldIDw8ICgoaSAlIDQpICogMik7XG5cdCAgICAgICAgICAgICAgICB2YXIgYml0czIgPSByZXZlcnNlTWFwW2Jhc2U2NFN0ci5jaGFyQ29kZUF0KGkpXSA+Pj4gKDYgLSAoaSAlIDQpICogMik7XG5cdCAgICAgICAgICAgICAgICB2YXIgYml0c0NvbWJpbmVkID0gYml0czEgfCBiaXRzMjtcblx0ICAgICAgICAgICAgICAgIHdvcmRzW25CeXRlcyA+Pj4gMl0gfD0gYml0c0NvbWJpbmVkIDw8ICgyNCAtIChuQnl0ZXMgJSA0KSAqIDgpO1xuXHQgICAgICAgICAgICAgICAgbkJ5dGVzKys7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgICAgcmV0dXJuIFdvcmRBcnJheS5jcmVhdGUod29yZHMsIG5CeXRlcyk7XG5cdCAgICB9XG5cdH0oKSk7XG5cblx0cmV0dXJuIENyeXB0b0pTLmVuYy5CYXNlNjR1cmw7XG5cbn0pKTsiLCAiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCJdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcblxuXHQoZnVuY3Rpb24gKE1hdGgpIHtcblx0ICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgdmFyIEMgPSBDcnlwdG9KUztcblx0ICAgIHZhciBDX2xpYiA9IEMubGliO1xuXHQgICAgdmFyIFdvcmRBcnJheSA9IENfbGliLldvcmRBcnJheTtcblx0ICAgIHZhciBIYXNoZXIgPSBDX2xpYi5IYXNoZXI7XG5cdCAgICB2YXIgQ19hbGdvID0gQy5hbGdvO1xuXG5cdCAgICAvLyBDb25zdGFudHMgdGFibGVcblx0ICAgIHZhciBUID0gW107XG5cblx0ICAgIC8vIENvbXB1dGUgY29uc3RhbnRzXG5cdCAgICAoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNjQ7IGkrKykge1xuXHQgICAgICAgICAgICBUW2ldID0gKE1hdGguYWJzKE1hdGguc2luKGkgKyAxKSkgKiAweDEwMDAwMDAwMCkgfCAwO1xuXHQgICAgICAgIH1cblx0ICAgIH0oKSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogTUQ1IGhhc2ggYWxnb3JpdGhtLlxuXHQgICAgICovXG5cdCAgICB2YXIgTUQ1ID0gQ19hbGdvLk1ENSA9IEhhc2hlci5leHRlbmQoe1xuXHQgICAgICAgIF9kb1Jlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHRoaXMuX2hhc2ggPSBuZXcgV29yZEFycmF5LmluaXQoW1xuXHQgICAgICAgICAgICAgICAgMHg2NzQ1MjMwMSwgMHhlZmNkYWI4OSxcblx0ICAgICAgICAgICAgICAgIDB4OThiYWRjZmUsIDB4MTAzMjU0NzZcblx0ICAgICAgICAgICAgXSk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9kb1Byb2Nlc3NCbG9jazogZnVuY3Rpb24gKE0sIG9mZnNldCkge1xuXHQgICAgICAgICAgICAvLyBTd2FwIGVuZGlhblxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICAgICAgdmFyIG9mZnNldF9pID0gb2Zmc2V0ICsgaTtcblx0ICAgICAgICAgICAgICAgIHZhciBNX29mZnNldF9pID0gTVtvZmZzZXRfaV07XG5cblx0ICAgICAgICAgICAgICAgIE1bb2Zmc2V0X2ldID0gKFxuXHQgICAgICAgICAgICAgICAgICAgICgoKE1fb2Zmc2V0X2kgPDwgOCkgIHwgKE1fb2Zmc2V0X2kgPj4+IDI0KSkgJiAweDAwZmYwMGZmKSB8XG5cdCAgICAgICAgICAgICAgICAgICAgKCgoTV9vZmZzZXRfaSA8PCAyNCkgfCAoTV9vZmZzZXRfaSA+Pj4gOCkpICAmIDB4ZmYwMGZmMDApXG5cdCAgICAgICAgICAgICAgICApO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBIID0gdGhpcy5faGFzaC53b3JkcztcblxuXHQgICAgICAgICAgICB2YXIgTV9vZmZzZXRfMCAgPSBNW29mZnNldCArIDBdO1xuXHQgICAgICAgICAgICB2YXIgTV9vZmZzZXRfMSAgPSBNW29mZnNldCArIDFdO1xuXHQgICAgICAgICAgICB2YXIgTV9vZmZzZXRfMiAgPSBNW29mZnNldCArIDJdO1xuXHQgICAgICAgICAgICB2YXIgTV9vZmZzZXRfMyAgPSBNW29mZnNldCArIDNdO1xuXHQgICAgICAgICAgICB2YXIgTV9vZmZzZXRfNCAgPSBNW29mZnNldCArIDRdO1xuXHQgICAgICAgICAgICB2YXIgTV9vZmZzZXRfNSAgPSBNW29mZnNldCArIDVdO1xuXHQgICAgICAgICAgICB2YXIgTV9vZmZzZXRfNiAgPSBNW29mZnNldCArIDZdO1xuXHQgICAgICAgICAgICB2YXIgTV9vZmZzZXRfNyAgPSBNW29mZnNldCArIDddO1xuXHQgICAgICAgICAgICB2YXIgTV9vZmZzZXRfOCAgPSBNW29mZnNldCArIDhdO1xuXHQgICAgICAgICAgICB2YXIgTV9vZmZzZXRfOSAgPSBNW29mZnNldCArIDldO1xuXHQgICAgICAgICAgICB2YXIgTV9vZmZzZXRfMTAgPSBNW29mZnNldCArIDEwXTtcblx0ICAgICAgICAgICAgdmFyIE1fb2Zmc2V0XzExID0gTVtvZmZzZXQgKyAxMV07XG5cdCAgICAgICAgICAgIHZhciBNX29mZnNldF8xMiA9IE1bb2Zmc2V0ICsgMTJdO1xuXHQgICAgICAgICAgICB2YXIgTV9vZmZzZXRfMTMgPSBNW29mZnNldCArIDEzXTtcblx0ICAgICAgICAgICAgdmFyIE1fb2Zmc2V0XzE0ID0gTVtvZmZzZXQgKyAxNF07XG5cdCAgICAgICAgICAgIHZhciBNX29mZnNldF8xNSA9IE1bb2Zmc2V0ICsgMTVdO1xuXG5cdCAgICAgICAgICAgIC8vIFdvcmtpbmcgdmFyaWFsYmVzXG5cdCAgICAgICAgICAgIHZhciBhID0gSFswXTtcblx0ICAgICAgICAgICAgdmFyIGIgPSBIWzFdO1xuXHQgICAgICAgICAgICB2YXIgYyA9IEhbMl07XG5cdCAgICAgICAgICAgIHZhciBkID0gSFszXTtcblxuXHQgICAgICAgICAgICAvLyBDb21wdXRhdGlvblxuXHQgICAgICAgICAgICBhID0gRkYoYSwgYiwgYywgZCwgTV9vZmZzZXRfMCwgIDcsICBUWzBdKTtcblx0ICAgICAgICAgICAgZCA9IEZGKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzEsICAxMiwgVFsxXSk7XG5cdCAgICAgICAgICAgIGMgPSBGRihjLCBkLCBhLCBiLCBNX29mZnNldF8yLCAgMTcsIFRbMl0pO1xuXHQgICAgICAgICAgICBiID0gRkYoYiwgYywgZCwgYSwgTV9vZmZzZXRfMywgIDIyLCBUWzNdKTtcblx0ICAgICAgICAgICAgYSA9IEZGKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzQsICA3LCAgVFs0XSk7XG5cdCAgICAgICAgICAgIGQgPSBGRihkLCBhLCBiLCBjLCBNX29mZnNldF81LCAgMTIsIFRbNV0pO1xuXHQgICAgICAgICAgICBjID0gRkYoYywgZCwgYSwgYiwgTV9vZmZzZXRfNiwgIDE3LCBUWzZdKTtcblx0ICAgICAgICAgICAgYiA9IEZGKGIsIGMsIGQsIGEsIE1fb2Zmc2V0XzcsICAyMiwgVFs3XSk7XG5cdCAgICAgICAgICAgIGEgPSBGRihhLCBiLCBjLCBkLCBNX29mZnNldF84LCAgNywgIFRbOF0pO1xuXHQgICAgICAgICAgICBkID0gRkYoZCwgYSwgYiwgYywgTV9vZmZzZXRfOSwgIDEyLCBUWzldKTtcblx0ICAgICAgICAgICAgYyA9IEZGKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzEwLCAxNywgVFsxMF0pO1xuXHQgICAgICAgICAgICBiID0gRkYoYiwgYywgZCwgYSwgTV9vZmZzZXRfMTEsIDIyLCBUWzExXSk7XG5cdCAgICAgICAgICAgIGEgPSBGRihhLCBiLCBjLCBkLCBNX29mZnNldF8xMiwgNywgIFRbMTJdKTtcblx0ICAgICAgICAgICAgZCA9IEZGKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzEzLCAxMiwgVFsxM10pO1xuXHQgICAgICAgICAgICBjID0gRkYoYywgZCwgYSwgYiwgTV9vZmZzZXRfMTQsIDE3LCBUWzE0XSk7XG5cdCAgICAgICAgICAgIGIgPSBGRihiLCBjLCBkLCBhLCBNX29mZnNldF8xNSwgMjIsIFRbMTVdKTtcblxuXHQgICAgICAgICAgICBhID0gR0coYSwgYiwgYywgZCwgTV9vZmZzZXRfMSwgIDUsICBUWzE2XSk7XG5cdCAgICAgICAgICAgIGQgPSBHRyhkLCBhLCBiLCBjLCBNX29mZnNldF82LCAgOSwgIFRbMTddKTtcblx0ICAgICAgICAgICAgYyA9IEdHKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzExLCAxNCwgVFsxOF0pO1xuXHQgICAgICAgICAgICBiID0gR0coYiwgYywgZCwgYSwgTV9vZmZzZXRfMCwgIDIwLCBUWzE5XSk7XG5cdCAgICAgICAgICAgIGEgPSBHRyhhLCBiLCBjLCBkLCBNX29mZnNldF81LCAgNSwgIFRbMjBdKTtcblx0ICAgICAgICAgICAgZCA9IEdHKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzEwLCA5LCAgVFsyMV0pO1xuXHQgICAgICAgICAgICBjID0gR0coYywgZCwgYSwgYiwgTV9vZmZzZXRfMTUsIDE0LCBUWzIyXSk7XG5cdCAgICAgICAgICAgIGIgPSBHRyhiLCBjLCBkLCBhLCBNX29mZnNldF80LCAgMjAsIFRbMjNdKTtcblx0ICAgICAgICAgICAgYSA9IEdHKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzksICA1LCAgVFsyNF0pO1xuXHQgICAgICAgICAgICBkID0gR0coZCwgYSwgYiwgYywgTV9vZmZzZXRfMTQsIDksICBUWzI1XSk7XG5cdCAgICAgICAgICAgIGMgPSBHRyhjLCBkLCBhLCBiLCBNX29mZnNldF8zLCAgMTQsIFRbMjZdKTtcblx0ICAgICAgICAgICAgYiA9IEdHKGIsIGMsIGQsIGEsIE1fb2Zmc2V0XzgsICAyMCwgVFsyN10pO1xuXHQgICAgICAgICAgICBhID0gR0coYSwgYiwgYywgZCwgTV9vZmZzZXRfMTMsIDUsICBUWzI4XSk7XG5cdCAgICAgICAgICAgIGQgPSBHRyhkLCBhLCBiLCBjLCBNX29mZnNldF8yLCAgOSwgIFRbMjldKTtcblx0ICAgICAgICAgICAgYyA9IEdHKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzcsICAxNCwgVFszMF0pO1xuXHQgICAgICAgICAgICBiID0gR0coYiwgYywgZCwgYSwgTV9vZmZzZXRfMTIsIDIwLCBUWzMxXSk7XG5cblx0ICAgICAgICAgICAgYSA9IEhIKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzUsICA0LCAgVFszMl0pO1xuXHQgICAgICAgICAgICBkID0gSEgoZCwgYSwgYiwgYywgTV9vZmZzZXRfOCwgIDExLCBUWzMzXSk7XG5cdCAgICAgICAgICAgIGMgPSBISChjLCBkLCBhLCBiLCBNX29mZnNldF8xMSwgMTYsIFRbMzRdKTtcblx0ICAgICAgICAgICAgYiA9IEhIKGIsIGMsIGQsIGEsIE1fb2Zmc2V0XzE0LCAyMywgVFszNV0pO1xuXHQgICAgICAgICAgICBhID0gSEgoYSwgYiwgYywgZCwgTV9vZmZzZXRfMSwgIDQsICBUWzM2XSk7XG5cdCAgICAgICAgICAgIGQgPSBISChkLCBhLCBiLCBjLCBNX29mZnNldF80LCAgMTEsIFRbMzddKTtcblx0ICAgICAgICAgICAgYyA9IEhIKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzcsICAxNiwgVFszOF0pO1xuXHQgICAgICAgICAgICBiID0gSEgoYiwgYywgZCwgYSwgTV9vZmZzZXRfMTAsIDIzLCBUWzM5XSk7XG5cdCAgICAgICAgICAgIGEgPSBISChhLCBiLCBjLCBkLCBNX29mZnNldF8xMywgNCwgIFRbNDBdKTtcblx0ICAgICAgICAgICAgZCA9IEhIKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzAsICAxMSwgVFs0MV0pO1xuXHQgICAgICAgICAgICBjID0gSEgoYywgZCwgYSwgYiwgTV9vZmZzZXRfMywgIDE2LCBUWzQyXSk7XG5cdCAgICAgICAgICAgIGIgPSBISChiLCBjLCBkLCBhLCBNX29mZnNldF82LCAgMjMsIFRbNDNdKTtcblx0ICAgICAgICAgICAgYSA9IEhIKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzksICA0LCAgVFs0NF0pO1xuXHQgICAgICAgICAgICBkID0gSEgoZCwgYSwgYiwgYywgTV9vZmZzZXRfMTIsIDExLCBUWzQ1XSk7XG5cdCAgICAgICAgICAgIGMgPSBISChjLCBkLCBhLCBiLCBNX29mZnNldF8xNSwgMTYsIFRbNDZdKTtcblx0ICAgICAgICAgICAgYiA9IEhIKGIsIGMsIGQsIGEsIE1fb2Zmc2V0XzIsICAyMywgVFs0N10pO1xuXG5cdCAgICAgICAgICAgIGEgPSBJSShhLCBiLCBjLCBkLCBNX29mZnNldF8wLCAgNiwgIFRbNDhdKTtcblx0ICAgICAgICAgICAgZCA9IElJKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzcsICAxMCwgVFs0OV0pO1xuXHQgICAgICAgICAgICBjID0gSUkoYywgZCwgYSwgYiwgTV9vZmZzZXRfMTQsIDE1LCBUWzUwXSk7XG5cdCAgICAgICAgICAgIGIgPSBJSShiLCBjLCBkLCBhLCBNX29mZnNldF81LCAgMjEsIFRbNTFdKTtcblx0ICAgICAgICAgICAgYSA9IElJKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzEyLCA2LCAgVFs1Ml0pO1xuXHQgICAgICAgICAgICBkID0gSUkoZCwgYSwgYiwgYywgTV9vZmZzZXRfMywgIDEwLCBUWzUzXSk7XG5cdCAgICAgICAgICAgIGMgPSBJSShjLCBkLCBhLCBiLCBNX29mZnNldF8xMCwgMTUsIFRbNTRdKTtcblx0ICAgICAgICAgICAgYiA9IElJKGIsIGMsIGQsIGEsIE1fb2Zmc2V0XzEsICAyMSwgVFs1NV0pO1xuXHQgICAgICAgICAgICBhID0gSUkoYSwgYiwgYywgZCwgTV9vZmZzZXRfOCwgIDYsICBUWzU2XSk7XG5cdCAgICAgICAgICAgIGQgPSBJSShkLCBhLCBiLCBjLCBNX29mZnNldF8xNSwgMTAsIFRbNTddKTtcblx0ICAgICAgICAgICAgYyA9IElJKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzYsICAxNSwgVFs1OF0pO1xuXHQgICAgICAgICAgICBiID0gSUkoYiwgYywgZCwgYSwgTV9vZmZzZXRfMTMsIDIxLCBUWzU5XSk7XG5cdCAgICAgICAgICAgIGEgPSBJSShhLCBiLCBjLCBkLCBNX29mZnNldF80LCAgNiwgIFRbNjBdKTtcblx0ICAgICAgICAgICAgZCA9IElJKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzExLCAxMCwgVFs2MV0pO1xuXHQgICAgICAgICAgICBjID0gSUkoYywgZCwgYSwgYiwgTV9vZmZzZXRfMiwgIDE1LCBUWzYyXSk7XG5cdCAgICAgICAgICAgIGIgPSBJSShiLCBjLCBkLCBhLCBNX29mZnNldF85LCAgMjEsIFRbNjNdKTtcblxuXHQgICAgICAgICAgICAvLyBJbnRlcm1lZGlhdGUgaGFzaCB2YWx1ZVxuXHQgICAgICAgICAgICBIWzBdID0gKEhbMF0gKyBhKSB8IDA7XG5cdCAgICAgICAgICAgIEhbMV0gPSAoSFsxXSArIGIpIHwgMDtcblx0ICAgICAgICAgICAgSFsyXSA9IChIWzJdICsgYykgfCAwO1xuXHQgICAgICAgICAgICBIWzNdID0gKEhbM10gKyBkKSB8IDA7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9kb0ZpbmFsaXplOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuX2RhdGE7XG5cdCAgICAgICAgICAgIHZhciBkYXRhV29yZHMgPSBkYXRhLndvcmRzO1xuXG5cdCAgICAgICAgICAgIHZhciBuQml0c1RvdGFsID0gdGhpcy5fbkRhdGFCeXRlcyAqIDg7XG5cdCAgICAgICAgICAgIHZhciBuQml0c0xlZnQgPSBkYXRhLnNpZ0J5dGVzICogODtcblxuXHQgICAgICAgICAgICAvLyBBZGQgcGFkZGluZ1xuXHQgICAgICAgICAgICBkYXRhV29yZHNbbkJpdHNMZWZ0ID4+PiA1XSB8PSAweDgwIDw8ICgyNCAtIG5CaXRzTGVmdCAlIDMyKTtcblxuXHQgICAgICAgICAgICB2YXIgbkJpdHNUb3RhbEggPSBNYXRoLmZsb29yKG5CaXRzVG90YWwgLyAweDEwMDAwMDAwMCk7XG5cdCAgICAgICAgICAgIHZhciBuQml0c1RvdGFsTCA9IG5CaXRzVG90YWw7XG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1soKChuQml0c0xlZnQgKyA2NCkgPj4+IDkpIDw8IDQpICsgMTVdID0gKFxuXHQgICAgICAgICAgICAgICAgKCgobkJpdHNUb3RhbEggPDwgOCkgIHwgKG5CaXRzVG90YWxIID4+PiAyNCkpICYgMHgwMGZmMDBmZikgfFxuXHQgICAgICAgICAgICAgICAgKCgobkJpdHNUb3RhbEggPDwgMjQpIHwgKG5CaXRzVG90YWxIID4+PiA4KSkgICYgMHhmZjAwZmYwMClcblx0ICAgICAgICAgICAgKTtcblx0ICAgICAgICAgICAgZGF0YVdvcmRzWygoKG5CaXRzTGVmdCArIDY0KSA+Pj4gOSkgPDwgNCkgKyAxNF0gPSAoXG5cdCAgICAgICAgICAgICAgICAoKChuQml0c1RvdGFsTCA8PCA4KSAgfCAobkJpdHNUb3RhbEwgPj4+IDI0KSkgJiAweDAwZmYwMGZmKSB8XG5cdCAgICAgICAgICAgICAgICAoKChuQml0c1RvdGFsTCA8PCAyNCkgfCAobkJpdHNUb3RhbEwgPj4+IDgpKSAgJiAweGZmMDBmZjAwKVxuXHQgICAgICAgICAgICApO1xuXG5cdCAgICAgICAgICAgIGRhdGEuc2lnQnl0ZXMgPSAoZGF0YVdvcmRzLmxlbmd0aCArIDEpICogNDtcblxuXHQgICAgICAgICAgICAvLyBIYXNoIGZpbmFsIGJsb2Nrc1xuXHQgICAgICAgICAgICB0aGlzLl9wcm9jZXNzKCk7XG5cblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBoYXNoID0gdGhpcy5faGFzaDtcblx0ICAgICAgICAgICAgdmFyIEggPSBoYXNoLndvcmRzO1xuXG5cdCAgICAgICAgICAgIC8vIFN3YXAgZW5kaWFuXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICAgICAgdmFyIEhfaSA9IEhbaV07XG5cblx0ICAgICAgICAgICAgICAgIEhbaV0gPSAoKChIX2kgPDwgOCkgIHwgKEhfaSA+Pj4gMjQpKSAmIDB4MDBmZjAwZmYpIHxcblx0ICAgICAgICAgICAgICAgICAgICAgICAoKChIX2kgPDwgMjQpIHwgKEhfaSA+Pj4gOCkpICAmIDB4ZmYwMGZmMDApO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gUmV0dXJuIGZpbmFsIGNvbXB1dGVkIGhhc2hcblx0ICAgICAgICAgICAgcmV0dXJuIGhhc2g7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHZhciBjbG9uZSA9IEhhc2hlci5jbG9uZS5jYWxsKHRoaXMpO1xuXHQgICAgICAgICAgICBjbG9uZS5faGFzaCA9IHRoaXMuX2hhc2guY2xvbmUoKTtcblxuXHQgICAgICAgICAgICByZXR1cm4gY2xvbmU7XG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgIGZ1bmN0aW9uIEZGKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcblx0ICAgICAgICB2YXIgbiA9IGEgKyAoKGIgJiBjKSB8ICh+YiAmIGQpKSArIHggKyB0O1xuXHQgICAgICAgIHJldHVybiAoKG4gPDwgcykgfCAobiA+Pj4gKDMyIC0gcykpKSArIGI7XG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIEdHKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcblx0ICAgICAgICB2YXIgbiA9IGEgKyAoKGIgJiBkKSB8IChjICYgfmQpKSArIHggKyB0O1xuXHQgICAgICAgIHJldHVybiAoKG4gPDwgcykgfCAobiA+Pj4gKDMyIC0gcykpKSArIGI7XG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIEhIKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcblx0ICAgICAgICB2YXIgbiA9IGEgKyAoYiBeIGMgXiBkKSArIHggKyB0O1xuXHQgICAgICAgIHJldHVybiAoKG4gPDwgcykgfCAobiA+Pj4gKDMyIC0gcykpKSArIGI7XG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIElJKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcblx0ICAgICAgICB2YXIgbiA9IGEgKyAoYyBeIChiIHwgfmQpKSArIHggKyB0O1xuXHQgICAgICAgIHJldHVybiAoKG4gPDwgcykgfCAobiA+Pj4gKDMyIC0gcykpKSArIGI7XG5cdCAgICB9XG5cblx0ICAgIC8qKlxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIGhhc2hlcidzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgKlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGhhc2guXG5cdCAgICAgKlxuXHQgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgaGFzaC5cblx0ICAgICAqXG5cdCAgICAgKiBAc3RhdGljXG5cdCAgICAgKlxuXHQgICAgICogQGV4YW1wbGVcblx0ICAgICAqXG5cdCAgICAgKiAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5NRDUoJ21lc3NhZ2UnKTtcblx0ICAgICAqICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLk1ENSh3b3JkQXJyYXkpO1xuXHQgICAgICovXG5cdCAgICBDLk1ENSA9IEhhc2hlci5fY3JlYXRlSGVscGVyKE1ENSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIEhNQUMncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICpcblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBoYXNoLlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBrZXkgVGhlIHNlY3JldCBrZXkuXG5cdCAgICAgKlxuXHQgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgSE1BQy5cblx0ICAgICAqXG5cdCAgICAgKiBAc3RhdGljXG5cdCAgICAgKlxuXHQgICAgICogQGV4YW1wbGVcblx0ICAgICAqXG5cdCAgICAgKiAgICAgdmFyIGhtYWMgPSBDcnlwdG9KUy5IbWFjTUQ1KG1lc3NhZ2UsIGtleSk7XG5cdCAgICAgKi9cblx0ICAgIEMuSG1hY01ENSA9IEhhc2hlci5fY3JlYXRlSG1hY0hlbHBlcihNRDUpO1xuXHR9KE1hdGgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUy5NRDU7XG5cbn0pKTsiLCAiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCJdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcblxuXHQoZnVuY3Rpb24gKCkge1xuXHQgICAgLy8gU2hvcnRjdXRzXG5cdCAgICB2YXIgQyA9IENyeXB0b0pTO1xuXHQgICAgdmFyIENfbGliID0gQy5saWI7XG5cdCAgICB2YXIgV29yZEFycmF5ID0gQ19saWIuV29yZEFycmF5O1xuXHQgICAgdmFyIEhhc2hlciA9IENfbGliLkhhc2hlcjtcblx0ICAgIHZhciBDX2FsZ28gPSBDLmFsZ287XG5cblx0ICAgIC8vIFJldXNhYmxlIG9iamVjdFxuXHQgICAgdmFyIFcgPSBbXTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTSEEtMSBoYXNoIGFsZ29yaXRobS5cblx0ICAgICAqL1xuXHQgICAgdmFyIFNIQTEgPSBDX2FsZ28uU0hBMSA9IEhhc2hlci5leHRlbmQoe1xuXHQgICAgICAgIF9kb1Jlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHRoaXMuX2hhc2ggPSBuZXcgV29yZEFycmF5LmluaXQoW1xuXHQgICAgICAgICAgICAgICAgMHg2NzQ1MjMwMSwgMHhlZmNkYWI4OSxcblx0ICAgICAgICAgICAgICAgIDB4OThiYWRjZmUsIDB4MTAzMjU0NzYsXG5cdCAgICAgICAgICAgICAgICAweGMzZDJlMWYwXG5cdCAgICAgICAgICAgIF0pO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfZG9Qcm9jZXNzQmxvY2s6IGZ1bmN0aW9uIChNLCBvZmZzZXQpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgdmFyIEggPSB0aGlzLl9oYXNoLndvcmRzO1xuXG5cdCAgICAgICAgICAgIC8vIFdvcmtpbmcgdmFyaWFibGVzXG5cdCAgICAgICAgICAgIHZhciBhID0gSFswXTtcblx0ICAgICAgICAgICAgdmFyIGIgPSBIWzFdO1xuXHQgICAgICAgICAgICB2YXIgYyA9IEhbMl07XG5cdCAgICAgICAgICAgIHZhciBkID0gSFszXTtcblx0ICAgICAgICAgICAgdmFyIGUgPSBIWzRdO1xuXG5cdCAgICAgICAgICAgIC8vIENvbXB1dGF0aW9uXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgODA7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgaWYgKGkgPCAxNikge1xuXHQgICAgICAgICAgICAgICAgICAgIFdbaV0gPSBNW29mZnNldCArIGldIHwgMDtcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBXW2kgLSAzXSBeIFdbaSAtIDhdIF4gV1tpIC0gMTRdIF4gV1tpIC0gMTZdO1xuXHQgICAgICAgICAgICAgICAgICAgIFdbaV0gPSAobiA8PCAxKSB8IChuID4+PiAzMSk7XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIHZhciB0ID0gKChhIDw8IDUpIHwgKGEgPj4+IDI3KSkgKyBlICsgV1tpXTtcblx0ICAgICAgICAgICAgICAgIGlmIChpIDwgMjApIHtcblx0ICAgICAgICAgICAgICAgICAgICB0ICs9ICgoYiAmIGMpIHwgKH5iICYgZCkpICsgMHg1YTgyNzk5OTtcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA8IDQwKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdCArPSAoYiBeIGMgXiBkKSArIDB4NmVkOWViYTE7XG5cdCAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPCA2MCkge1xuXHQgICAgICAgICAgICAgICAgICAgIHQgKz0gKChiICYgYykgfCAoYiAmIGQpIHwgKGMgJiBkKSkgLSAweDcwZTQ0MzI0O1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIC8qIGlmIChpIDwgODApICovIHtcblx0ICAgICAgICAgICAgICAgICAgICB0ICs9IChiIF4gYyBeIGQpIC0gMHgzNTlkM2UyYTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgZSA9IGQ7XG5cdCAgICAgICAgICAgICAgICBkID0gYztcblx0ICAgICAgICAgICAgICAgIGMgPSAoYiA8PCAzMCkgfCAoYiA+Pj4gMik7XG5cdCAgICAgICAgICAgICAgICBiID0gYTtcblx0ICAgICAgICAgICAgICAgIGEgPSB0O1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gSW50ZXJtZWRpYXRlIGhhc2ggdmFsdWVcblx0ICAgICAgICAgICAgSFswXSA9IChIWzBdICsgYSkgfCAwO1xuXHQgICAgICAgICAgICBIWzFdID0gKEhbMV0gKyBiKSB8IDA7XG5cdCAgICAgICAgICAgIEhbMl0gPSAoSFsyXSArIGMpIHwgMDtcblx0ICAgICAgICAgICAgSFszXSA9IChIWzNdICsgZCkgfCAwO1xuXHQgICAgICAgICAgICBIWzRdID0gKEhbNF0gKyBlKSB8IDA7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9kb0ZpbmFsaXplOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuX2RhdGE7XG5cdCAgICAgICAgICAgIHZhciBkYXRhV29yZHMgPSBkYXRhLndvcmRzO1xuXG5cdCAgICAgICAgICAgIHZhciBuQml0c1RvdGFsID0gdGhpcy5fbkRhdGFCeXRlcyAqIDg7XG5cdCAgICAgICAgICAgIHZhciBuQml0c0xlZnQgPSBkYXRhLnNpZ0J5dGVzICogODtcblxuXHQgICAgICAgICAgICAvLyBBZGQgcGFkZGluZ1xuXHQgICAgICAgICAgICBkYXRhV29yZHNbbkJpdHNMZWZ0ID4+PiA1XSB8PSAweDgwIDw8ICgyNCAtIG5CaXRzTGVmdCAlIDMyKTtcblx0ICAgICAgICAgICAgZGF0YVdvcmRzWygoKG5CaXRzTGVmdCArIDY0KSA+Pj4gOSkgPDwgNCkgKyAxNF0gPSBNYXRoLmZsb29yKG5CaXRzVG90YWwgLyAweDEwMDAwMDAwMCk7XG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1soKChuQml0c0xlZnQgKyA2NCkgPj4+IDkpIDw8IDQpICsgMTVdID0gbkJpdHNUb3RhbDtcblx0ICAgICAgICAgICAgZGF0YS5zaWdCeXRlcyA9IGRhdGFXb3Jkcy5sZW5ndGggKiA0O1xuXG5cdCAgICAgICAgICAgIC8vIEhhc2ggZmluYWwgYmxvY2tzXG5cdCAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3MoKTtcblxuXHQgICAgICAgICAgICAvLyBSZXR1cm4gZmluYWwgY29tcHV0ZWQgaGFzaFxuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5faGFzaDtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdmFyIGNsb25lID0gSGFzaGVyLmNsb25lLmNhbGwodGhpcyk7XG5cdCAgICAgICAgICAgIGNsb25lLl9oYXNoID0gdGhpcy5faGFzaC5jbG9uZSgpO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBjbG9uZTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgaGFzaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cblx0ICAgICAqXG5cdCAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBoYXNoLlxuXHQgICAgICpcblx0ICAgICAqIEBzdGF0aWNcblx0ICAgICAqXG5cdCAgICAgKiBAZXhhbXBsZVxuXHQgICAgICpcblx0ICAgICAqICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLlNIQTEoJ21lc3NhZ2UnKTtcblx0ICAgICAqICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLlNIQTEod29yZEFycmF5KTtcblx0ICAgICAqL1xuXHQgICAgQy5TSEExID0gSGFzaGVyLl9jcmVhdGVIZWxwZXIoU0hBMSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIEhNQUMncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICpcblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBoYXNoLlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBrZXkgVGhlIHNlY3JldCBrZXkuXG5cdCAgICAgKlxuXHQgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgSE1BQy5cblx0ICAgICAqXG5cdCAgICAgKiBAc3RhdGljXG5cdCAgICAgKlxuXHQgICAgICogQGV4YW1wbGVcblx0ICAgICAqXG5cdCAgICAgKiAgICAgdmFyIGhtYWMgPSBDcnlwdG9KUy5IbWFjU0hBMShtZXNzYWdlLCBrZXkpO1xuXHQgICAgICovXG5cdCAgICBDLkhtYWNTSEExID0gSGFzaGVyLl9jcmVhdGVIbWFjSGVscGVyKFNIQTEpO1xuXHR9KCkpO1xuXG5cblx0cmV0dXJuIENyeXB0b0pTLlNIQTE7XG5cbn0pKTsiLCAiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCJdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcblxuXHQoZnVuY3Rpb24gKE1hdGgpIHtcblx0ICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgdmFyIEMgPSBDcnlwdG9KUztcblx0ICAgIHZhciBDX2xpYiA9IEMubGliO1xuXHQgICAgdmFyIFdvcmRBcnJheSA9IENfbGliLldvcmRBcnJheTtcblx0ICAgIHZhciBIYXNoZXIgPSBDX2xpYi5IYXNoZXI7XG5cdCAgICB2YXIgQ19hbGdvID0gQy5hbGdvO1xuXG5cdCAgICAvLyBJbml0aWFsaXphdGlvbiBhbmQgcm91bmQgY29uc3RhbnRzIHRhYmxlc1xuXHQgICAgdmFyIEggPSBbXTtcblx0ICAgIHZhciBLID0gW107XG5cblx0ICAgIC8vIENvbXB1dGUgY29uc3RhbnRzXG5cdCAgICAoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGZ1bmN0aW9uIGlzUHJpbWUobikge1xuXHQgICAgICAgICAgICB2YXIgc3FydE4gPSBNYXRoLnNxcnQobik7XG5cdCAgICAgICAgICAgIGZvciAodmFyIGZhY3RvciA9IDI7IGZhY3RvciA8PSBzcXJ0TjsgZmFjdG9yKyspIHtcblx0ICAgICAgICAgICAgICAgIGlmICghKG4gJSBmYWN0b3IpKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgZnVuY3Rpb24gZ2V0RnJhY3Rpb25hbEJpdHMobikge1xuXHQgICAgICAgICAgICByZXR1cm4gKChuIC0gKG4gfCAwKSkgKiAweDEwMDAwMDAwMCkgfCAwO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIHZhciBuID0gMjtcblx0ICAgICAgICB2YXIgblByaW1lID0gMDtcblx0ICAgICAgICB3aGlsZSAoblByaW1lIDwgNjQpIHtcblx0ICAgICAgICAgICAgaWYgKGlzUHJpbWUobikpIHtcblx0ICAgICAgICAgICAgICAgIGlmIChuUHJpbWUgPCA4KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgSFtuUHJpbWVdID0gZ2V0RnJhY3Rpb25hbEJpdHMoTWF0aC5wb3cobiwgMSAvIDIpKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIEtbblByaW1lXSA9IGdldEZyYWN0aW9uYWxCaXRzKE1hdGgucG93KG4sIDEgLyAzKSk7XG5cblx0ICAgICAgICAgICAgICAgIG5QcmltZSsrO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgbisrO1xuXHQgICAgICAgIH1cblx0ICAgIH0oKSk7XG5cblx0ICAgIC8vIFJldXNhYmxlIG9iamVjdFxuXHQgICAgdmFyIFcgPSBbXTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTSEEtMjU2IGhhc2ggYWxnb3JpdGhtLlxuXHQgICAgICovXG5cdCAgICB2YXIgU0hBMjU2ID0gQ19hbGdvLlNIQTI1NiA9IEhhc2hlci5leHRlbmQoe1xuXHQgICAgICAgIF9kb1Jlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHRoaXMuX2hhc2ggPSBuZXcgV29yZEFycmF5LmluaXQoSC5zbGljZSgwKSk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9kb1Byb2Nlc3NCbG9jazogZnVuY3Rpb24gKE0sIG9mZnNldCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgSCA9IHRoaXMuX2hhc2gud29yZHM7XG5cblx0ICAgICAgICAgICAgLy8gV29ya2luZyB2YXJpYWJsZXNcblx0ICAgICAgICAgICAgdmFyIGEgPSBIWzBdO1xuXHQgICAgICAgICAgICB2YXIgYiA9IEhbMV07XG5cdCAgICAgICAgICAgIHZhciBjID0gSFsyXTtcblx0ICAgICAgICAgICAgdmFyIGQgPSBIWzNdO1xuXHQgICAgICAgICAgICB2YXIgZSA9IEhbNF07XG5cdCAgICAgICAgICAgIHZhciBmID0gSFs1XTtcblx0ICAgICAgICAgICAgdmFyIGcgPSBIWzZdO1xuXHQgICAgICAgICAgICB2YXIgaCA9IEhbN107XG5cblx0ICAgICAgICAgICAgLy8gQ29tcHV0YXRpb25cblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA2NDsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICBpZiAoaSA8IDE2KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgV1tpXSA9IE1bb2Zmc2V0ICsgaV0gfCAwO1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtbWEweCA9IFdbaSAtIDE1XTtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtbWEwICA9ICgoZ2FtbWEweCA8PCAyNSkgfCAoZ2FtbWEweCA+Pj4gNykpICBeXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKGdhbW1hMHggPDwgMTQpIHwgKGdhbW1hMHggPj4+IDE4KSkgXlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChnYW1tYTB4ID4+PiAzKTtcblxuXHQgICAgICAgICAgICAgICAgICAgIHZhciBnYW1tYTF4ID0gV1tpIC0gMl07XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGdhbW1hMSAgPSAoKGdhbW1hMXggPDwgMTUpIHwgKGdhbW1hMXggPj4+IDE3KSkgXlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChnYW1tYTF4IDw8IDEzKSB8IChnYW1tYTF4ID4+PiAxOSkpIF5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZ2FtbWExeCA+Pj4gMTApO1xuXG5cdCAgICAgICAgICAgICAgICAgICAgV1tpXSA9IGdhbW1hMCArIFdbaSAtIDddICsgZ2FtbWExICsgV1tpIC0gMTZdO1xuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICB2YXIgY2ggID0gKGUgJiBmKSBeICh+ZSAmIGcpO1xuXHQgICAgICAgICAgICAgICAgdmFyIG1haiA9IChhICYgYikgXiAoYSAmIGMpIF4gKGIgJiBjKTtcblxuXHQgICAgICAgICAgICAgICAgdmFyIHNpZ21hMCA9ICgoYSA8PCAzMCkgfCAoYSA+Pj4gMikpIF4gKChhIDw8IDE5KSB8IChhID4+PiAxMykpIF4gKChhIDw8IDEwKSB8IChhID4+PiAyMikpO1xuXHQgICAgICAgICAgICAgICAgdmFyIHNpZ21hMSA9ICgoZSA8PCAyNikgfCAoZSA+Pj4gNikpIF4gKChlIDw8IDIxKSB8IChlID4+PiAxMSkpIF4gKChlIDw8IDcpICB8IChlID4+PiAyNSkpO1xuXG5cdCAgICAgICAgICAgICAgICB2YXIgdDEgPSBoICsgc2lnbWExICsgY2ggKyBLW2ldICsgV1tpXTtcblx0ICAgICAgICAgICAgICAgIHZhciB0MiA9IHNpZ21hMCArIG1hajtcblxuXHQgICAgICAgICAgICAgICAgaCA9IGc7XG5cdCAgICAgICAgICAgICAgICBnID0gZjtcblx0ICAgICAgICAgICAgICAgIGYgPSBlO1xuXHQgICAgICAgICAgICAgICAgZSA9IChkICsgdDEpIHwgMDtcblx0ICAgICAgICAgICAgICAgIGQgPSBjO1xuXHQgICAgICAgICAgICAgICAgYyA9IGI7XG5cdCAgICAgICAgICAgICAgICBiID0gYTtcblx0ICAgICAgICAgICAgICAgIGEgPSAodDEgKyB0MikgfCAwO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gSW50ZXJtZWRpYXRlIGhhc2ggdmFsdWVcblx0ICAgICAgICAgICAgSFswXSA9IChIWzBdICsgYSkgfCAwO1xuXHQgICAgICAgICAgICBIWzFdID0gKEhbMV0gKyBiKSB8IDA7XG5cdCAgICAgICAgICAgIEhbMl0gPSAoSFsyXSArIGMpIHwgMDtcblx0ICAgICAgICAgICAgSFszXSA9IChIWzNdICsgZCkgfCAwO1xuXHQgICAgICAgICAgICBIWzRdID0gKEhbNF0gKyBlKSB8IDA7XG5cdCAgICAgICAgICAgIEhbNV0gPSAoSFs1XSArIGYpIHwgMDtcblx0ICAgICAgICAgICAgSFs2XSA9IChIWzZdICsgZykgfCAwO1xuXHQgICAgICAgICAgICBIWzddID0gKEhbN10gKyBoKSB8IDA7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9kb0ZpbmFsaXplOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuX2RhdGE7XG5cdCAgICAgICAgICAgIHZhciBkYXRhV29yZHMgPSBkYXRhLndvcmRzO1xuXG5cdCAgICAgICAgICAgIHZhciBuQml0c1RvdGFsID0gdGhpcy5fbkRhdGFCeXRlcyAqIDg7XG5cdCAgICAgICAgICAgIHZhciBuQml0c0xlZnQgPSBkYXRhLnNpZ0J5dGVzICogODtcblxuXHQgICAgICAgICAgICAvLyBBZGQgcGFkZGluZ1xuXHQgICAgICAgICAgICBkYXRhV29yZHNbbkJpdHNMZWZ0ID4+PiA1XSB8PSAweDgwIDw8ICgyNCAtIG5CaXRzTGVmdCAlIDMyKTtcblx0ICAgICAgICAgICAgZGF0YVdvcmRzWygoKG5CaXRzTGVmdCArIDY0KSA+Pj4gOSkgPDwgNCkgKyAxNF0gPSBNYXRoLmZsb29yKG5CaXRzVG90YWwgLyAweDEwMDAwMDAwMCk7XG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1soKChuQml0c0xlZnQgKyA2NCkgPj4+IDkpIDw8IDQpICsgMTVdID0gbkJpdHNUb3RhbDtcblx0ICAgICAgICAgICAgZGF0YS5zaWdCeXRlcyA9IGRhdGFXb3Jkcy5sZW5ndGggKiA0O1xuXG5cdCAgICAgICAgICAgIC8vIEhhc2ggZmluYWwgYmxvY2tzXG5cdCAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3MoKTtcblxuXHQgICAgICAgICAgICAvLyBSZXR1cm4gZmluYWwgY29tcHV0ZWQgaGFzaFxuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5faGFzaDtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdmFyIGNsb25lID0gSGFzaGVyLmNsb25lLmNhbGwodGhpcyk7XG5cdCAgICAgICAgICAgIGNsb25lLl9oYXNoID0gdGhpcy5faGFzaC5jbG9uZSgpO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBjbG9uZTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgaGFzaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cblx0ICAgICAqXG5cdCAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBoYXNoLlxuXHQgICAgICpcblx0ICAgICAqIEBzdGF0aWNcblx0ICAgICAqXG5cdCAgICAgKiBAZXhhbXBsZVxuXHQgICAgICpcblx0ICAgICAqICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLlNIQTI1NignbWVzc2FnZScpO1xuXHQgICAgICogICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuU0hBMjU2KHdvcmRBcnJheSk7XG5cdCAgICAgKi9cblx0ICAgIEMuU0hBMjU2ID0gSGFzaGVyLl9jcmVhdGVIZWxwZXIoU0hBMjU2KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgSE1BQydzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgKlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGhhc2guXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IGtleSBUaGUgc2VjcmV0IGtleS5cblx0ICAgICAqXG5cdCAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBITUFDLlxuXHQgICAgICpcblx0ICAgICAqIEBzdGF0aWNcblx0ICAgICAqXG5cdCAgICAgKiBAZXhhbXBsZVxuXHQgICAgICpcblx0ICAgICAqICAgICB2YXIgaG1hYyA9IENyeXB0b0pTLkhtYWNTSEEyNTYobWVzc2FnZSwga2V5KTtcblx0ICAgICAqL1xuXHQgICAgQy5IbWFjU0hBMjU2ID0gSGFzaGVyLl9jcmVhdGVIbWFjSGVscGVyKFNIQTI1Nik7XG5cdH0oTWF0aCkpO1xuXG5cblx0cmV0dXJuIENyeXB0b0pTLlNIQTI1NjtcblxufSkpOyIsICI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5LCB1bmRlZikge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSwgcmVxdWlyZShcIi4vc2hhMjU2XCIpKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXCIuL2NvcmVcIiwgXCIuL3NoYTI1NlwiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0KGZ1bmN0aW9uICgpIHtcblx0ICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgdmFyIEMgPSBDcnlwdG9KUztcblx0ICAgIHZhciBDX2xpYiA9IEMubGliO1xuXHQgICAgdmFyIFdvcmRBcnJheSA9IENfbGliLldvcmRBcnJheTtcblx0ICAgIHZhciBDX2FsZ28gPSBDLmFsZ287XG5cdCAgICB2YXIgU0hBMjU2ID0gQ19hbGdvLlNIQTI1NjtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTSEEtMjI0IGhhc2ggYWxnb3JpdGhtLlxuXHQgICAgICovXG5cdCAgICB2YXIgU0hBMjI0ID0gQ19hbGdvLlNIQTIyNCA9IFNIQTI1Ni5leHRlbmQoe1xuXHQgICAgICAgIF9kb1Jlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHRoaXMuX2hhc2ggPSBuZXcgV29yZEFycmF5LmluaXQoW1xuXHQgICAgICAgICAgICAgICAgMHhjMTA1OWVkOCwgMHgzNjdjZDUwNywgMHgzMDcwZGQxNywgMHhmNzBlNTkzOSxcblx0ICAgICAgICAgICAgICAgIDB4ZmZjMDBiMzEsIDB4Njg1ODE1MTEsIDB4NjRmOThmYTcsIDB4YmVmYTRmYTRcblx0ICAgICAgICAgICAgXSk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9kb0ZpbmFsaXplOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHZhciBoYXNoID0gU0hBMjU2Ll9kb0ZpbmFsaXplLmNhbGwodGhpcyk7XG5cblx0ICAgICAgICAgICAgaGFzaC5zaWdCeXRlcyAtPSA0O1xuXG5cdCAgICAgICAgICAgIHJldHVybiBoYXNoO1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBoYXNoZXIncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICpcblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBoYXNoLlxuXHQgICAgICpcblx0ICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGhhc2guXG5cdCAgICAgKlxuXHQgICAgICogQHN0YXRpY1xuXHQgICAgICpcblx0ICAgICAqIEBleGFtcGxlXG5cdCAgICAgKlxuXHQgICAgICogICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuU0hBMjI0KCdtZXNzYWdlJyk7XG5cdCAgICAgKiAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5TSEEyMjQod29yZEFycmF5KTtcblx0ICAgICAqL1xuXHQgICAgQy5TSEEyMjQgPSBTSEEyNTYuX2NyZWF0ZUhlbHBlcihTSEEyMjQpO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBITUFDJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30ga2V5IFRoZSBzZWNyZXQga2V5LlxuXHQgICAgICpcblx0ICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIEhNQUMuXG5cdCAgICAgKlxuXHQgICAgICogQHN0YXRpY1xuXHQgICAgICpcblx0ICAgICAqIEBleGFtcGxlXG5cdCAgICAgKlxuXHQgICAgICogICAgIHZhciBobWFjID0gQ3J5cHRvSlMuSG1hY1NIQTIyNChtZXNzYWdlLCBrZXkpO1xuXHQgICAgICovXG5cdCAgICBDLkhtYWNTSEEyMjQgPSBTSEEyNTYuX2NyZWF0ZUhtYWNIZWxwZXIoU0hBMjI0KTtcblx0fSgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUy5TSEEyMjQ7XG5cbn0pKTsiLCAiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSwgdW5kZWYpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIiksIHJlcXVpcmUoXCIuL3g2NC1jb3JlXCIpKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXCIuL2NvcmVcIiwgXCIuL3g2NC1jb3JlXCJdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcblxuXHQoZnVuY3Rpb24gKCkge1xuXHQgICAgLy8gU2hvcnRjdXRzXG5cdCAgICB2YXIgQyA9IENyeXB0b0pTO1xuXHQgICAgdmFyIENfbGliID0gQy5saWI7XG5cdCAgICB2YXIgSGFzaGVyID0gQ19saWIuSGFzaGVyO1xuXHQgICAgdmFyIENfeDY0ID0gQy54NjQ7XG5cdCAgICB2YXIgWDY0V29yZCA9IENfeDY0LldvcmQ7XG5cdCAgICB2YXIgWDY0V29yZEFycmF5ID0gQ194NjQuV29yZEFycmF5O1xuXHQgICAgdmFyIENfYWxnbyA9IEMuYWxnbztcblxuXHQgICAgZnVuY3Rpb24gWDY0V29yZF9jcmVhdGUoKSB7XG5cdCAgICAgICAgcmV0dXJuIFg2NFdvcmQuY3JlYXRlLmFwcGx5KFg2NFdvcmQsIGFyZ3VtZW50cyk7XG5cdCAgICB9XG5cblx0ICAgIC8vIENvbnN0YW50c1xuXHQgICAgdmFyIEsgPSBbXG5cdCAgICAgICAgWDY0V29yZF9jcmVhdGUoMHg0MjhhMmY5OCwgMHhkNzI4YWUyMiksIFg2NFdvcmRfY3JlYXRlKDB4NzEzNzQ0OTEsIDB4MjNlZjY1Y2QpLFxuXHQgICAgICAgIFg2NFdvcmRfY3JlYXRlKDB4YjVjMGZiY2YsIDB4ZWM0ZDNiMmYpLCBYNjRXb3JkX2NyZWF0ZSgweGU5YjVkYmE1LCAweDgxODlkYmJjKSxcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDM5NTZjMjViLCAweGYzNDhiNTM4KSwgWDY0V29yZF9jcmVhdGUoMHg1OWYxMTFmMSwgMHhiNjA1ZDAxOSksXG5cdCAgICAgICAgWDY0V29yZF9jcmVhdGUoMHg5MjNmODJhNCwgMHhhZjE5NGY5YiksIFg2NFdvcmRfY3JlYXRlKDB4YWIxYzVlZDUsIDB4ZGE2ZDgxMTgpLFxuXHQgICAgICAgIFg2NFdvcmRfY3JlYXRlKDB4ZDgwN2FhOTgsIDB4YTMwMzAyNDIpLCBYNjRXb3JkX2NyZWF0ZSgweDEyODM1YjAxLCAweDQ1NzA2ZmJlKSxcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDI0MzE4NWJlLCAweDRlZTRiMjhjKSwgWDY0V29yZF9jcmVhdGUoMHg1NTBjN2RjMywgMHhkNWZmYjRlMiksXG5cdCAgICAgICAgWDY0V29yZF9jcmVhdGUoMHg3MmJlNWQ3NCwgMHhmMjdiODk2ZiksIFg2NFdvcmRfY3JlYXRlKDB4ODBkZWIxZmUsIDB4M2IxNjk2YjEpLFxuXHQgICAgICAgIFg2NFdvcmRfY3JlYXRlKDB4OWJkYzA2YTcsIDB4MjVjNzEyMzUpLCBYNjRXb3JkX2NyZWF0ZSgweGMxOWJmMTc0LCAweGNmNjkyNjk0KSxcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweGU0OWI2OWMxLCAweDllZjE0YWQyKSwgWDY0V29yZF9jcmVhdGUoMHhlZmJlNDc4NiwgMHgzODRmMjVlMyksXG5cdCAgICAgICAgWDY0V29yZF9jcmVhdGUoMHgwZmMxOWRjNiwgMHg4YjhjZDViNSksIFg2NFdvcmRfY3JlYXRlKDB4MjQwY2ExY2MsIDB4NzdhYzljNjUpLFxuXHQgICAgICAgIFg2NFdvcmRfY3JlYXRlKDB4MmRlOTJjNmYsIDB4NTkyYjAyNzUpLCBYNjRXb3JkX2NyZWF0ZSgweDRhNzQ4NGFhLCAweDZlYTZlNDgzKSxcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDVjYjBhOWRjLCAweGJkNDFmYmQ0KSwgWDY0V29yZF9jcmVhdGUoMHg3NmY5ODhkYSwgMHg4MzExNTNiNSksXG5cdCAgICAgICAgWDY0V29yZF9jcmVhdGUoMHg5ODNlNTE1MiwgMHhlZTY2ZGZhYiksIFg2NFdvcmRfY3JlYXRlKDB4YTgzMWM2NmQsIDB4MmRiNDMyMTApLFxuXHQgICAgICAgIFg2NFdvcmRfY3JlYXRlKDB4YjAwMzI3YzgsIDB4OThmYjIxM2YpLCBYNjRXb3JkX2NyZWF0ZSgweGJmNTk3ZmM3LCAweGJlZWYwZWU0KSxcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweGM2ZTAwYmYzLCAweDNkYTg4ZmMyKSwgWDY0V29yZF9jcmVhdGUoMHhkNWE3OTE0NywgMHg5MzBhYTcyNSksXG5cdCAgICAgICAgWDY0V29yZF9jcmVhdGUoMHgwNmNhNjM1MSwgMHhlMDAzODI2ZiksIFg2NFdvcmRfY3JlYXRlKDB4MTQyOTI5NjcsIDB4MGEwZTZlNzApLFxuXHQgICAgICAgIFg2NFdvcmRfY3JlYXRlKDB4MjdiNzBhODUsIDB4NDZkMjJmZmMpLCBYNjRXb3JkX2NyZWF0ZSgweDJlMWIyMTM4LCAweDVjMjZjOTI2KSxcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDRkMmM2ZGZjLCAweDVhYzQyYWVkKSwgWDY0V29yZF9jcmVhdGUoMHg1MzM4MGQxMywgMHg5ZDk1YjNkZiksXG5cdCAgICAgICAgWDY0V29yZF9jcmVhdGUoMHg2NTBhNzM1NCwgMHg4YmFmNjNkZSksIFg2NFdvcmRfY3JlYXRlKDB4NzY2YTBhYmIsIDB4M2M3N2IyYTgpLFxuXHQgICAgICAgIFg2NFdvcmRfY3JlYXRlKDB4ODFjMmM5MmUsIDB4NDdlZGFlZTYpLCBYNjRXb3JkX2NyZWF0ZSgweDkyNzIyYzg1LCAweDE0ODIzNTNiKSxcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweGEyYmZlOGExLCAweDRjZjEwMzY0KSwgWDY0V29yZF9jcmVhdGUoMHhhODFhNjY0YiwgMHhiYzQyMzAwMSksXG5cdCAgICAgICAgWDY0V29yZF9jcmVhdGUoMHhjMjRiOGI3MCwgMHhkMGY4OTc5MSksIFg2NFdvcmRfY3JlYXRlKDB4Yzc2YzUxYTMsIDB4MDY1NGJlMzApLFxuXHQgICAgICAgIFg2NFdvcmRfY3JlYXRlKDB4ZDE5MmU4MTksIDB4ZDZlZjUyMTgpLCBYNjRXb3JkX2NyZWF0ZSgweGQ2OTkwNjI0LCAweDU1NjVhOTEwKSxcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweGY0MGUzNTg1LCAweDU3NzEyMDJhKSwgWDY0V29yZF9jcmVhdGUoMHgxMDZhYTA3MCwgMHgzMmJiZDFiOCksXG5cdCAgICAgICAgWDY0V29yZF9jcmVhdGUoMHgxOWE0YzExNiwgMHhiOGQyZDBjOCksIFg2NFdvcmRfY3JlYXRlKDB4MWUzNzZjMDgsIDB4NTE0MWFiNTMpLFxuXHQgICAgICAgIFg2NFdvcmRfY3JlYXRlKDB4Mjc0ODc3NGMsIDB4ZGY4ZWViOTkpLCBYNjRXb3JkX2NyZWF0ZSgweDM0YjBiY2I1LCAweGUxOWI0OGE4KSxcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDM5MWMwY2IzLCAweGM1Yzk1YTYzKSwgWDY0V29yZF9jcmVhdGUoMHg0ZWQ4YWE0YSwgMHhlMzQxOGFjYiksXG5cdCAgICAgICAgWDY0V29yZF9jcmVhdGUoMHg1YjljY2E0ZiwgMHg3NzYzZTM3MyksIFg2NFdvcmRfY3JlYXRlKDB4NjgyZTZmZjMsIDB4ZDZiMmI4YTMpLFxuXHQgICAgICAgIFg2NFdvcmRfY3JlYXRlKDB4NzQ4ZjgyZWUsIDB4NWRlZmIyZmMpLCBYNjRXb3JkX2NyZWF0ZSgweDc4YTU2MzZmLCAweDQzMTcyZjYwKSxcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDg0Yzg3ODE0LCAweGExZjBhYjcyKSwgWDY0V29yZF9jcmVhdGUoMHg4Y2M3MDIwOCwgMHgxYTY0MzllYyksXG5cdCAgICAgICAgWDY0V29yZF9jcmVhdGUoMHg5MGJlZmZmYSwgMHgyMzYzMWUyOCksIFg2NFdvcmRfY3JlYXRlKDB4YTQ1MDZjZWIsIDB4ZGU4MmJkZTkpLFxuXHQgICAgICAgIFg2NFdvcmRfY3JlYXRlKDB4YmVmOWEzZjcsIDB4YjJjNjc5MTUpLCBYNjRXb3JkX2NyZWF0ZSgweGM2NzE3OGYyLCAweGUzNzI1MzJiKSxcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweGNhMjczZWNlLCAweGVhMjY2MTljKSwgWDY0V29yZF9jcmVhdGUoMHhkMTg2YjhjNywgMHgyMWMwYzIwNyksXG5cdCAgICAgICAgWDY0V29yZF9jcmVhdGUoMHhlYWRhN2RkNiwgMHhjZGUwZWIxZSksIFg2NFdvcmRfY3JlYXRlKDB4ZjU3ZDRmN2YsIDB4ZWU2ZWQxNzgpLFxuXHQgICAgICAgIFg2NFdvcmRfY3JlYXRlKDB4MDZmMDY3YWEsIDB4NzIxNzZmYmEpLCBYNjRXb3JkX2NyZWF0ZSgweDBhNjM3ZGM1LCAweGEyYzg5OGE2KSxcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDExM2Y5ODA0LCAweGJlZjkwZGFlKSwgWDY0V29yZF9jcmVhdGUoMHgxYjcxMGIzNSwgMHgxMzFjNDcxYiksXG5cdCAgICAgICAgWDY0V29yZF9jcmVhdGUoMHgyOGRiNzdmNSwgMHgyMzA0N2Q4NCksIFg2NFdvcmRfY3JlYXRlKDB4MzJjYWFiN2IsIDB4NDBjNzI0OTMpLFxuXHQgICAgICAgIFg2NFdvcmRfY3JlYXRlKDB4M2M5ZWJlMGEsIDB4MTVjOWJlYmMpLCBYNjRXb3JkX2NyZWF0ZSgweDQzMWQ2N2M0LCAweDljMTAwZDRjKSxcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDRjYzVkNGJlLCAweGNiM2U0MmI2KSwgWDY0V29yZF9jcmVhdGUoMHg1OTdmMjk5YywgMHhmYzY1N2UyYSksXG5cdCAgICAgICAgWDY0V29yZF9jcmVhdGUoMHg1ZmNiNmZhYiwgMHgzYWQ2ZmFlYyksIFg2NFdvcmRfY3JlYXRlKDB4NmM0NDE5OGMsIDB4NGE0NzU4MTcpXG5cdCAgICBdO1xuXG5cdCAgICAvLyBSZXVzYWJsZSBvYmplY3RzXG5cdCAgICB2YXIgVyA9IFtdO1xuXHQgICAgKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDgwOyBpKyspIHtcblx0ICAgICAgICAgICAgV1tpXSA9IFg2NFdvcmRfY3JlYXRlKCk7XG5cdCAgICAgICAgfVxuXHQgICAgfSgpKTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTSEEtNTEyIGhhc2ggYWxnb3JpdGhtLlxuXHQgICAgICovXG5cdCAgICB2YXIgU0hBNTEyID0gQ19hbGdvLlNIQTUxMiA9IEhhc2hlci5leHRlbmQoe1xuXHQgICAgICAgIF9kb1Jlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHRoaXMuX2hhc2ggPSBuZXcgWDY0V29yZEFycmF5LmluaXQoW1xuXHQgICAgICAgICAgICAgICAgbmV3IFg2NFdvcmQuaW5pdCgweDZhMDllNjY3LCAweGYzYmNjOTA4KSwgbmV3IFg2NFdvcmQuaW5pdCgweGJiNjdhZTg1LCAweDg0Y2FhNzNiKSxcblx0ICAgICAgICAgICAgICAgIG5ldyBYNjRXb3JkLmluaXQoMHgzYzZlZjM3MiwgMHhmZTk0ZjgyYiksIG5ldyBYNjRXb3JkLmluaXQoMHhhNTRmZjUzYSwgMHg1ZjFkMzZmMSksXG5cdCAgICAgICAgICAgICAgICBuZXcgWDY0V29yZC5pbml0KDB4NTEwZTUyN2YsIDB4YWRlNjgyZDEpLCBuZXcgWDY0V29yZC5pbml0KDB4OWIwNTY4OGMsIDB4MmIzZTZjMWYpLFxuXHQgICAgICAgICAgICAgICAgbmV3IFg2NFdvcmQuaW5pdCgweDFmODNkOWFiLCAweGZiNDFiZDZiKSwgbmV3IFg2NFdvcmQuaW5pdCgweDViZTBjZDE5LCAweDEzN2UyMTc5KVxuXHQgICAgICAgICAgICBdKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgX2RvUHJvY2Vzc0Jsb2NrOiBmdW5jdGlvbiAoTSwgb2Zmc2V0KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgSCA9IHRoaXMuX2hhc2gud29yZHM7XG5cblx0ICAgICAgICAgICAgdmFyIEgwID0gSFswXTtcblx0ICAgICAgICAgICAgdmFyIEgxID0gSFsxXTtcblx0ICAgICAgICAgICAgdmFyIEgyID0gSFsyXTtcblx0ICAgICAgICAgICAgdmFyIEgzID0gSFszXTtcblx0ICAgICAgICAgICAgdmFyIEg0ID0gSFs0XTtcblx0ICAgICAgICAgICAgdmFyIEg1ID0gSFs1XTtcblx0ICAgICAgICAgICAgdmFyIEg2ID0gSFs2XTtcblx0ICAgICAgICAgICAgdmFyIEg3ID0gSFs3XTtcblxuXHQgICAgICAgICAgICB2YXIgSDBoID0gSDAuaGlnaDtcblx0ICAgICAgICAgICAgdmFyIEgwbCA9IEgwLmxvdztcblx0ICAgICAgICAgICAgdmFyIEgxaCA9IEgxLmhpZ2g7XG5cdCAgICAgICAgICAgIHZhciBIMWwgPSBIMS5sb3c7XG5cdCAgICAgICAgICAgIHZhciBIMmggPSBIMi5oaWdoO1xuXHQgICAgICAgICAgICB2YXIgSDJsID0gSDIubG93O1xuXHQgICAgICAgICAgICB2YXIgSDNoID0gSDMuaGlnaDtcblx0ICAgICAgICAgICAgdmFyIEgzbCA9IEgzLmxvdztcblx0ICAgICAgICAgICAgdmFyIEg0aCA9IEg0LmhpZ2g7XG5cdCAgICAgICAgICAgIHZhciBINGwgPSBINC5sb3c7XG5cdCAgICAgICAgICAgIHZhciBINWggPSBINS5oaWdoO1xuXHQgICAgICAgICAgICB2YXIgSDVsID0gSDUubG93O1xuXHQgICAgICAgICAgICB2YXIgSDZoID0gSDYuaGlnaDtcblx0ICAgICAgICAgICAgdmFyIEg2bCA9IEg2Lmxvdztcblx0ICAgICAgICAgICAgdmFyIEg3aCA9IEg3LmhpZ2g7XG5cdCAgICAgICAgICAgIHZhciBIN2wgPSBINy5sb3c7XG5cblx0ICAgICAgICAgICAgLy8gV29ya2luZyB2YXJpYWJsZXNcblx0ICAgICAgICAgICAgdmFyIGFoID0gSDBoO1xuXHQgICAgICAgICAgICB2YXIgYWwgPSBIMGw7XG5cdCAgICAgICAgICAgIHZhciBiaCA9IEgxaDtcblx0ICAgICAgICAgICAgdmFyIGJsID0gSDFsO1xuXHQgICAgICAgICAgICB2YXIgY2ggPSBIMmg7XG5cdCAgICAgICAgICAgIHZhciBjbCA9IEgybDtcblx0ICAgICAgICAgICAgdmFyIGRoID0gSDNoO1xuXHQgICAgICAgICAgICB2YXIgZGwgPSBIM2w7XG5cdCAgICAgICAgICAgIHZhciBlaCA9IEg0aDtcblx0ICAgICAgICAgICAgdmFyIGVsID0gSDRsO1xuXHQgICAgICAgICAgICB2YXIgZmggPSBINWg7XG5cdCAgICAgICAgICAgIHZhciBmbCA9IEg1bDtcblx0ICAgICAgICAgICAgdmFyIGdoID0gSDZoO1xuXHQgICAgICAgICAgICB2YXIgZ2wgPSBINmw7XG5cdCAgICAgICAgICAgIHZhciBoaCA9IEg3aDtcblx0ICAgICAgICAgICAgdmFyIGhsID0gSDdsO1xuXG5cdCAgICAgICAgICAgIC8vIFJvdW5kc1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDgwOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIHZhciBXaWw7XG5cdCAgICAgICAgICAgICAgICB2YXIgV2loO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICAgICAgdmFyIFdpID0gV1tpXTtcblxuXHQgICAgICAgICAgICAgICAgLy8gRXh0ZW5kIG1lc3NhZ2Vcblx0ICAgICAgICAgICAgICAgIGlmIChpIDwgMTYpIHtcblx0ICAgICAgICAgICAgICAgICAgICBXaWggPSBXaS5oaWdoID0gTVtvZmZzZXQgKyBpICogMl0gICAgIHwgMDtcblx0ICAgICAgICAgICAgICAgICAgICBXaWwgPSBXaS5sb3cgID0gTVtvZmZzZXQgKyBpICogMiArIDFdIHwgMDtcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgLy8gR2FtbWEwXG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGdhbW1hMHggID0gV1tpIC0gMTVdO1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBnYW1tYTB4aCA9IGdhbW1hMHguaGlnaDtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtbWEweGwgPSBnYW1tYTB4Lmxvdztcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtbWEwaCAgPSAoKGdhbW1hMHhoID4+PiAxKSB8IChnYW1tYTB4bCA8PCAzMSkpIF4gKChnYW1tYTB4aCA+Pj4gOCkgfCAoZ2FtbWEweGwgPDwgMjQpKSBeIChnYW1tYTB4aCA+Pj4gNyk7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGdhbW1hMGwgID0gKChnYW1tYTB4bCA+Pj4gMSkgfCAoZ2FtbWEweGggPDwgMzEpKSBeICgoZ2FtbWEweGwgPj4+IDgpIHwgKGdhbW1hMHhoIDw8IDI0KSkgXiAoKGdhbW1hMHhsID4+PiA3KSB8IChnYW1tYTB4aCA8PCAyNSkpO1xuXG5cdCAgICAgICAgICAgICAgICAgICAgLy8gR2FtbWExXG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGdhbW1hMXggID0gV1tpIC0gMl07XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGdhbW1hMXhoID0gZ2FtbWExeC5oaWdoO1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBnYW1tYTF4bCA9IGdhbW1hMXgubG93O1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBnYW1tYTFoICA9ICgoZ2FtbWExeGggPj4+IDE5KSB8IChnYW1tYTF4bCA8PCAxMykpIF4gKChnYW1tYTF4aCA8PCAzKSB8IChnYW1tYTF4bCA+Pj4gMjkpKSBeIChnYW1tYTF4aCA+Pj4gNik7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGdhbW1hMWwgID0gKChnYW1tYTF4bCA+Pj4gMTkpIHwgKGdhbW1hMXhoIDw8IDEzKSkgXiAoKGdhbW1hMXhsIDw8IDMpIHwgKGdhbW1hMXhoID4+PiAyOSkpIF4gKChnYW1tYTF4bCA+Pj4gNikgfCAoZ2FtbWExeGggPDwgMjYpKTtcblxuXHQgICAgICAgICAgICAgICAgICAgIC8vIFdbaV0gPSBnYW1tYTAgKyBXW2kgLSA3XSArIGdhbW1hMSArIFdbaSAtIDE2XVxuXHQgICAgICAgICAgICAgICAgICAgIHZhciBXaTcgID0gV1tpIC0gN107XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIFdpN2ggPSBXaTcuaGlnaDtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgV2k3bCA9IFdpNy5sb3c7XG5cblx0ICAgICAgICAgICAgICAgICAgICB2YXIgV2kxNiAgPSBXW2kgLSAxNl07XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIFdpMTZoID0gV2kxNi5oaWdoO1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBXaTE2bCA9IFdpMTYubG93O1xuXG5cdCAgICAgICAgICAgICAgICAgICAgV2lsID0gZ2FtbWEwbCArIFdpN2w7XG5cdCAgICAgICAgICAgICAgICAgICAgV2loID0gZ2FtbWEwaCArIFdpN2ggKyAoKFdpbCA+Pj4gMCkgPCAoZ2FtbWEwbCA+Pj4gMCkgPyAxIDogMCk7XG5cdCAgICAgICAgICAgICAgICAgICAgV2lsID0gV2lsICsgZ2FtbWExbDtcblx0ICAgICAgICAgICAgICAgICAgICBXaWggPSBXaWggKyBnYW1tYTFoICsgKChXaWwgPj4+IDApIDwgKGdhbW1hMWwgPj4+IDApID8gMSA6IDApO1xuXHQgICAgICAgICAgICAgICAgICAgIFdpbCA9IFdpbCArIFdpMTZsO1xuXHQgICAgICAgICAgICAgICAgICAgIFdpaCA9IFdpaCArIFdpMTZoICsgKChXaWwgPj4+IDApIDwgKFdpMTZsID4+PiAwKSA/IDEgOiAwKTtcblxuXHQgICAgICAgICAgICAgICAgICAgIFdpLmhpZ2ggPSBXaWg7XG5cdCAgICAgICAgICAgICAgICAgICAgV2kubG93ICA9IFdpbDtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgdmFyIGNoaCAgPSAoZWggJiBmaCkgXiAofmVoICYgZ2gpO1xuXHQgICAgICAgICAgICAgICAgdmFyIGNobCAgPSAoZWwgJiBmbCkgXiAofmVsICYgZ2wpO1xuXHQgICAgICAgICAgICAgICAgdmFyIG1hamggPSAoYWggJiBiaCkgXiAoYWggJiBjaCkgXiAoYmggJiBjaCk7XG5cdCAgICAgICAgICAgICAgICB2YXIgbWFqbCA9IChhbCAmIGJsKSBeIChhbCAmIGNsKSBeIChibCAmIGNsKTtcblxuXHQgICAgICAgICAgICAgICAgdmFyIHNpZ21hMGggPSAoKGFoID4+PiAyOCkgfCAoYWwgPDwgNCkpICBeICgoYWggPDwgMzApICB8IChhbCA+Pj4gMikpIF4gKChhaCA8PCAyNSkgfCAoYWwgPj4+IDcpKTtcblx0ICAgICAgICAgICAgICAgIHZhciBzaWdtYTBsID0gKChhbCA+Pj4gMjgpIHwgKGFoIDw8IDQpKSAgXiAoKGFsIDw8IDMwKSAgfCAoYWggPj4+IDIpKSBeICgoYWwgPDwgMjUpIHwgKGFoID4+PiA3KSk7XG5cdCAgICAgICAgICAgICAgICB2YXIgc2lnbWExaCA9ICgoZWggPj4+IDE0KSB8IChlbCA8PCAxOCkpIF4gKChlaCA+Pj4gMTgpIHwgKGVsIDw8IDE0KSkgXiAoKGVoIDw8IDIzKSB8IChlbCA+Pj4gOSkpO1xuXHQgICAgICAgICAgICAgICAgdmFyIHNpZ21hMWwgPSAoKGVsID4+PiAxNCkgfCAoZWggPDwgMTgpKSBeICgoZWwgPj4+IDE4KSB8IChlaCA8PCAxNCkpIF4gKChlbCA8PCAyMykgfCAoZWggPj4+IDkpKTtcblxuXHQgICAgICAgICAgICAgICAgLy8gdDEgPSBoICsgc2lnbWExICsgY2ggKyBLW2ldICsgV1tpXVxuXHQgICAgICAgICAgICAgICAgdmFyIEtpICA9IEtbaV07XG5cdCAgICAgICAgICAgICAgICB2YXIgS2loID0gS2kuaGlnaDtcblx0ICAgICAgICAgICAgICAgIHZhciBLaWwgPSBLaS5sb3c7XG5cblx0ICAgICAgICAgICAgICAgIHZhciB0MWwgPSBobCArIHNpZ21hMWw7XG5cdCAgICAgICAgICAgICAgICB2YXIgdDFoID0gaGggKyBzaWdtYTFoICsgKCh0MWwgPj4+IDApIDwgKGhsID4+PiAwKSA/IDEgOiAwKTtcblx0ICAgICAgICAgICAgICAgIHZhciB0MWwgPSB0MWwgKyBjaGw7XG5cdCAgICAgICAgICAgICAgICB2YXIgdDFoID0gdDFoICsgY2hoICsgKCh0MWwgPj4+IDApIDwgKGNobCA+Pj4gMCkgPyAxIDogMCk7XG5cdCAgICAgICAgICAgICAgICB2YXIgdDFsID0gdDFsICsgS2lsO1xuXHQgICAgICAgICAgICAgICAgdmFyIHQxaCA9IHQxaCArIEtpaCArICgodDFsID4+PiAwKSA8IChLaWwgPj4+IDApID8gMSA6IDApO1xuXHQgICAgICAgICAgICAgICAgdmFyIHQxbCA9IHQxbCArIFdpbDtcblx0ICAgICAgICAgICAgICAgIHZhciB0MWggPSB0MWggKyBXaWggKyAoKHQxbCA+Pj4gMCkgPCAoV2lsID4+PiAwKSA/IDEgOiAwKTtcblxuXHQgICAgICAgICAgICAgICAgLy8gdDIgPSBzaWdtYTAgKyBtYWpcblx0ICAgICAgICAgICAgICAgIHZhciB0MmwgPSBzaWdtYTBsICsgbWFqbDtcblx0ICAgICAgICAgICAgICAgIHZhciB0MmggPSBzaWdtYTBoICsgbWFqaCArICgodDJsID4+PiAwKSA8IChzaWdtYTBsID4+PiAwKSA/IDEgOiAwKTtcblxuXHQgICAgICAgICAgICAgICAgLy8gVXBkYXRlIHdvcmtpbmcgdmFyaWFibGVzXG5cdCAgICAgICAgICAgICAgICBoaCA9IGdoO1xuXHQgICAgICAgICAgICAgICAgaGwgPSBnbDtcblx0ICAgICAgICAgICAgICAgIGdoID0gZmg7XG5cdCAgICAgICAgICAgICAgICBnbCA9IGZsO1xuXHQgICAgICAgICAgICAgICAgZmggPSBlaDtcblx0ICAgICAgICAgICAgICAgIGZsID0gZWw7XG5cdCAgICAgICAgICAgICAgICBlbCA9IChkbCArIHQxbCkgfCAwO1xuXHQgICAgICAgICAgICAgICAgZWggPSAoZGggKyB0MWggKyAoKGVsID4+PiAwKSA8IChkbCA+Pj4gMCkgPyAxIDogMCkpIHwgMDtcblx0ICAgICAgICAgICAgICAgIGRoID0gY2g7XG5cdCAgICAgICAgICAgICAgICBkbCA9IGNsO1xuXHQgICAgICAgICAgICAgICAgY2ggPSBiaDtcblx0ICAgICAgICAgICAgICAgIGNsID0gYmw7XG5cdCAgICAgICAgICAgICAgICBiaCA9IGFoO1xuXHQgICAgICAgICAgICAgICAgYmwgPSBhbDtcblx0ICAgICAgICAgICAgICAgIGFsID0gKHQxbCArIHQybCkgfCAwO1xuXHQgICAgICAgICAgICAgICAgYWggPSAodDFoICsgdDJoICsgKChhbCA+Pj4gMCkgPCAodDFsID4+PiAwKSA/IDEgOiAwKSkgfCAwO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gSW50ZXJtZWRpYXRlIGhhc2ggdmFsdWVcblx0ICAgICAgICAgICAgSDBsID0gSDAubG93ICA9IChIMGwgKyBhbCk7XG5cdCAgICAgICAgICAgIEgwLmhpZ2ggPSAoSDBoICsgYWggKyAoKEgwbCA+Pj4gMCkgPCAoYWwgPj4+IDApID8gMSA6IDApKTtcblx0ICAgICAgICAgICAgSDFsID0gSDEubG93ICA9IChIMWwgKyBibCk7XG5cdCAgICAgICAgICAgIEgxLmhpZ2ggPSAoSDFoICsgYmggKyAoKEgxbCA+Pj4gMCkgPCAoYmwgPj4+IDApID8gMSA6IDApKTtcblx0ICAgICAgICAgICAgSDJsID0gSDIubG93ICA9IChIMmwgKyBjbCk7XG5cdCAgICAgICAgICAgIEgyLmhpZ2ggPSAoSDJoICsgY2ggKyAoKEgybCA+Pj4gMCkgPCAoY2wgPj4+IDApID8gMSA6IDApKTtcblx0ICAgICAgICAgICAgSDNsID0gSDMubG93ICA9IChIM2wgKyBkbCk7XG5cdCAgICAgICAgICAgIEgzLmhpZ2ggPSAoSDNoICsgZGggKyAoKEgzbCA+Pj4gMCkgPCAoZGwgPj4+IDApID8gMSA6IDApKTtcblx0ICAgICAgICAgICAgSDRsID0gSDQubG93ICA9IChINGwgKyBlbCk7XG5cdCAgICAgICAgICAgIEg0LmhpZ2ggPSAoSDRoICsgZWggKyAoKEg0bCA+Pj4gMCkgPCAoZWwgPj4+IDApID8gMSA6IDApKTtcblx0ICAgICAgICAgICAgSDVsID0gSDUubG93ICA9IChINWwgKyBmbCk7XG5cdCAgICAgICAgICAgIEg1LmhpZ2ggPSAoSDVoICsgZmggKyAoKEg1bCA+Pj4gMCkgPCAoZmwgPj4+IDApID8gMSA6IDApKTtcblx0ICAgICAgICAgICAgSDZsID0gSDYubG93ICA9IChINmwgKyBnbCk7XG5cdCAgICAgICAgICAgIEg2LmhpZ2ggPSAoSDZoICsgZ2ggKyAoKEg2bCA+Pj4gMCkgPCAoZ2wgPj4+IDApID8gMSA6IDApKTtcblx0ICAgICAgICAgICAgSDdsID0gSDcubG93ICA9IChIN2wgKyBobCk7XG5cdCAgICAgICAgICAgIEg3LmhpZ2ggPSAoSDdoICsgaGggKyAoKEg3bCA+Pj4gMCkgPCAoaGwgPj4+IDApID8gMSA6IDApKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgX2RvRmluYWxpemU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5fZGF0YTtcblx0ICAgICAgICAgICAgdmFyIGRhdGFXb3JkcyA9IGRhdGEud29yZHM7XG5cblx0ICAgICAgICAgICAgdmFyIG5CaXRzVG90YWwgPSB0aGlzLl9uRGF0YUJ5dGVzICogODtcblx0ICAgICAgICAgICAgdmFyIG5CaXRzTGVmdCA9IGRhdGEuc2lnQnl0ZXMgKiA4O1xuXG5cdCAgICAgICAgICAgIC8vIEFkZCBwYWRkaW5nXG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1tuQml0c0xlZnQgPj4+IDVdIHw9IDB4ODAgPDwgKDI0IC0gbkJpdHNMZWZ0ICUgMzIpO1xuXHQgICAgICAgICAgICBkYXRhV29yZHNbKCgobkJpdHNMZWZ0ICsgMTI4KSA+Pj4gMTApIDw8IDUpICsgMzBdID0gTWF0aC5mbG9vcihuQml0c1RvdGFsIC8gMHgxMDAwMDAwMDApO1xuXHQgICAgICAgICAgICBkYXRhV29yZHNbKCgobkJpdHNMZWZ0ICsgMTI4KSA+Pj4gMTApIDw8IDUpICsgMzFdID0gbkJpdHNUb3RhbDtcblx0ICAgICAgICAgICAgZGF0YS5zaWdCeXRlcyA9IGRhdGFXb3Jkcy5sZW5ndGggKiA0O1xuXG5cdCAgICAgICAgICAgIC8vIEhhc2ggZmluYWwgYmxvY2tzXG5cdCAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3MoKTtcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0IGhhc2ggdG8gMzItYml0IHdvcmQgYXJyYXkgYmVmb3JlIHJldHVybmluZ1xuXHQgICAgICAgICAgICB2YXIgaGFzaCA9IHRoaXMuX2hhc2gudG9YMzIoKTtcblxuXHQgICAgICAgICAgICAvLyBSZXR1cm4gZmluYWwgY29tcHV0ZWQgaGFzaFxuXHQgICAgICAgICAgICByZXR1cm4gaGFzaDtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdmFyIGNsb25lID0gSGFzaGVyLmNsb25lLmNhbGwodGhpcyk7XG5cdCAgICAgICAgICAgIGNsb25lLl9oYXNoID0gdGhpcy5faGFzaC5jbG9uZSgpO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBjbG9uZTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgYmxvY2tTaXplOiAxMDI0LzMyXG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgaGFzaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cblx0ICAgICAqXG5cdCAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBoYXNoLlxuXHQgICAgICpcblx0ICAgICAqIEBzdGF0aWNcblx0ICAgICAqXG5cdCAgICAgKiBAZXhhbXBsZVxuXHQgICAgICpcblx0ICAgICAqICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLlNIQTUxMignbWVzc2FnZScpO1xuXHQgICAgICogICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuU0hBNTEyKHdvcmRBcnJheSk7XG5cdCAgICAgKi9cblx0ICAgIEMuU0hBNTEyID0gSGFzaGVyLl9jcmVhdGVIZWxwZXIoU0hBNTEyKTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgSE1BQydzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgKlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGhhc2guXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IGtleSBUaGUgc2VjcmV0IGtleS5cblx0ICAgICAqXG5cdCAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBITUFDLlxuXHQgICAgICpcblx0ICAgICAqIEBzdGF0aWNcblx0ICAgICAqXG5cdCAgICAgKiBAZXhhbXBsZVxuXHQgICAgICpcblx0ICAgICAqICAgICB2YXIgaG1hYyA9IENyeXB0b0pTLkhtYWNTSEE1MTIobWVzc2FnZSwga2V5KTtcblx0ICAgICAqL1xuXHQgICAgQy5IbWFjU0hBNTEyID0gSGFzaGVyLl9jcmVhdGVIbWFjSGVscGVyKFNIQTUxMik7XG5cdH0oKSk7XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlMuU0hBNTEyO1xuXG59KSk7IiwgIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnksIHVuZGVmKSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpLCByZXF1aXJlKFwiLi94NjQtY29yZVwiKSwgcmVxdWlyZShcIi4vc2hhNTEyXCIpKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXCIuL2NvcmVcIiwgXCIuL3g2NC1jb3JlXCIsIFwiLi9zaGE1MTJcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdChmdW5jdGlvbiAoKSB7XG5cdCAgICAvLyBTaG9ydGN1dHNcblx0ICAgIHZhciBDID0gQ3J5cHRvSlM7XG5cdCAgICB2YXIgQ194NjQgPSBDLng2NDtcblx0ICAgIHZhciBYNjRXb3JkID0gQ194NjQuV29yZDtcblx0ICAgIHZhciBYNjRXb3JkQXJyYXkgPSBDX3g2NC5Xb3JkQXJyYXk7XG5cdCAgICB2YXIgQ19hbGdvID0gQy5hbGdvO1xuXHQgICAgdmFyIFNIQTUxMiA9IENfYWxnby5TSEE1MTI7XG5cblx0ICAgIC8qKlxuXHQgICAgICogU0hBLTM4NCBoYXNoIGFsZ29yaXRobS5cblx0ICAgICAqL1xuXHQgICAgdmFyIFNIQTM4NCA9IENfYWxnby5TSEEzODQgPSBTSEE1MTIuZXh0ZW5kKHtcblx0ICAgICAgICBfZG9SZXNldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB0aGlzLl9oYXNoID0gbmV3IFg2NFdvcmRBcnJheS5pbml0KFtcblx0ICAgICAgICAgICAgICAgIG5ldyBYNjRXb3JkLmluaXQoMHhjYmJiOWQ1ZCwgMHhjMTA1OWVkOCksIG5ldyBYNjRXb3JkLmluaXQoMHg2MjlhMjkyYSwgMHgzNjdjZDUwNyksXG5cdCAgICAgICAgICAgICAgICBuZXcgWDY0V29yZC5pbml0KDB4OTE1OTAxNWEsIDB4MzA3MGRkMTcpLCBuZXcgWDY0V29yZC5pbml0KDB4MTUyZmVjZDgsIDB4ZjcwZTU5MzkpLFxuXHQgICAgICAgICAgICAgICAgbmV3IFg2NFdvcmQuaW5pdCgweDY3MzMyNjY3LCAweGZmYzAwYjMxKSwgbmV3IFg2NFdvcmQuaW5pdCgweDhlYjQ0YTg3LCAweDY4NTgxNTExKSxcblx0ICAgICAgICAgICAgICAgIG5ldyBYNjRXb3JkLmluaXQoMHhkYjBjMmUwZCwgMHg2NGY5OGZhNyksIG5ldyBYNjRXb3JkLmluaXQoMHg0N2I1NDgxZCwgMHhiZWZhNGZhNClcblx0ICAgICAgICAgICAgXSk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9kb0ZpbmFsaXplOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHZhciBoYXNoID0gU0hBNTEyLl9kb0ZpbmFsaXplLmNhbGwodGhpcyk7XG5cblx0ICAgICAgICAgICAgaGFzaC5zaWdCeXRlcyAtPSAxNjtcblxuXHQgICAgICAgICAgICByZXR1cm4gaGFzaDtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgaGFzaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cblx0ICAgICAqXG5cdCAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBoYXNoLlxuXHQgICAgICpcblx0ICAgICAqIEBzdGF0aWNcblx0ICAgICAqXG5cdCAgICAgKiBAZXhhbXBsZVxuXHQgICAgICpcblx0ICAgICAqICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLlNIQTM4NCgnbWVzc2FnZScpO1xuXHQgICAgICogICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuU0hBMzg0KHdvcmRBcnJheSk7XG5cdCAgICAgKi9cblx0ICAgIEMuU0hBMzg0ID0gU0hBNTEyLl9jcmVhdGVIZWxwZXIoU0hBMzg0KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgSE1BQydzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgKlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGhhc2guXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IGtleSBUaGUgc2VjcmV0IGtleS5cblx0ICAgICAqXG5cdCAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBITUFDLlxuXHQgICAgICpcblx0ICAgICAqIEBzdGF0aWNcblx0ICAgICAqXG5cdCAgICAgKiBAZXhhbXBsZVxuXHQgICAgICpcblx0ICAgICAqICAgICB2YXIgaG1hYyA9IENyeXB0b0pTLkhtYWNTSEEzODQobWVzc2FnZSwga2V5KTtcblx0ICAgICAqL1xuXHQgICAgQy5IbWFjU0hBMzg0ID0gU0hBNTEyLl9jcmVhdGVIbWFjSGVscGVyKFNIQTM4NCk7XG5cdH0oKSk7XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlMuU0hBMzg0O1xuXG59KSk7IiwgIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnksIHVuZGVmKSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpLCByZXF1aXJlKFwiLi94NjQtY29yZVwiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCIsIFwiLi94NjQtY29yZVwiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0KGZ1bmN0aW9uIChNYXRoKSB7XG5cdCAgICAvLyBTaG9ydGN1dHNcblx0ICAgIHZhciBDID0gQ3J5cHRvSlM7XG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYjtcblx0ICAgIHZhciBXb3JkQXJyYXkgPSBDX2xpYi5Xb3JkQXJyYXk7XG5cdCAgICB2YXIgSGFzaGVyID0gQ19saWIuSGFzaGVyO1xuXHQgICAgdmFyIENfeDY0ID0gQy54NjQ7XG5cdCAgICB2YXIgWDY0V29yZCA9IENfeDY0LldvcmQ7XG5cdCAgICB2YXIgQ19hbGdvID0gQy5hbGdvO1xuXG5cdCAgICAvLyBDb25zdGFudHMgdGFibGVzXG5cdCAgICB2YXIgUkhPX09GRlNFVFMgPSBbXTtcblx0ICAgIHZhciBQSV9JTkRFWEVTICA9IFtdO1xuXHQgICAgdmFyIFJPVU5EX0NPTlNUQU5UUyA9IFtdO1xuXG5cdCAgICAvLyBDb21wdXRlIENvbnN0YW50c1xuXHQgICAgKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAvLyBDb21wdXRlIHJobyBvZmZzZXQgY29uc3RhbnRzXG5cdCAgICAgICAgdmFyIHggPSAxLCB5ID0gMDtcblx0ICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IDI0OyB0KyspIHtcblx0ICAgICAgICAgICAgUkhPX09GRlNFVFNbeCArIDUgKiB5XSA9ICgodCArIDEpICogKHQgKyAyKSAvIDIpICUgNjQ7XG5cblx0ICAgICAgICAgICAgdmFyIG5ld1ggPSB5ICUgNTtcblx0ICAgICAgICAgICAgdmFyIG5ld1kgPSAoMiAqIHggKyAzICogeSkgJSA1O1xuXHQgICAgICAgICAgICB4ID0gbmV3WDtcblx0ICAgICAgICAgICAgeSA9IG5ld1k7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgLy8gQ29tcHV0ZSBwaSBpbmRleCBjb25zdGFudHNcblx0ICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IDU7IHgrKykge1xuXHQgICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IDU7IHkrKykge1xuXHQgICAgICAgICAgICAgICAgUElfSU5ERVhFU1t4ICsgNSAqIHldID0geSArICgoMiAqIHggKyAzICogeSkgJSA1KSAqIDU7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cblx0ICAgICAgICAvLyBDb21wdXRlIHJvdW5kIGNvbnN0YW50c1xuXHQgICAgICAgIHZhciBMRlNSID0gMHgwMTtcblx0ICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI0OyBpKyspIHtcblx0ICAgICAgICAgICAgdmFyIHJvdW5kQ29uc3RhbnRNc3cgPSAwO1xuXHQgICAgICAgICAgICB2YXIgcm91bmRDb25zdGFudExzdyA9IDA7XG5cblx0ICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCA3OyBqKyspIHtcblx0ICAgICAgICAgICAgICAgIGlmIChMRlNSICYgMHgwMSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBiaXRQb3NpdGlvbiA9ICgxIDw8IGopIC0gMTtcblx0ICAgICAgICAgICAgICAgICAgICBpZiAoYml0UG9zaXRpb24gPCAzMikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICByb3VuZENvbnN0YW50THN3IF49IDEgPDwgYml0UG9zaXRpb247XG5cdCAgICAgICAgICAgICAgICAgICAgfSBlbHNlIC8qIGlmIChiaXRQb3NpdGlvbiA+PSAzMikgKi8ge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICByb3VuZENvbnN0YW50TXN3IF49IDEgPDwgKGJpdFBvc2l0aW9uIC0gMzIpO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gQ29tcHV0ZSBuZXh0IExGU1Jcblx0ICAgICAgICAgICAgICAgIGlmIChMRlNSICYgMHg4MCkge1xuXHQgICAgICAgICAgICAgICAgICAgIC8vIFByaW1pdGl2ZSBwb2x5bm9taWFsIG92ZXIgR0YoMik6IHheOCArIHheNiArIHheNSArIHheNCArIDFcblx0ICAgICAgICAgICAgICAgICAgICBMRlNSID0gKExGU1IgPDwgMSkgXiAweDcxO1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICBMRlNSIDw8PSAxO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgUk9VTkRfQ09OU1RBTlRTW2ldID0gWDY0V29yZC5jcmVhdGUocm91bmRDb25zdGFudE1zdywgcm91bmRDb25zdGFudExzdyk7XG5cdCAgICAgICAgfVxuXHQgICAgfSgpKTtcblxuXHQgICAgLy8gUmV1c2FibGUgb2JqZWN0cyBmb3IgdGVtcG9yYXJ5IHZhbHVlc1xuXHQgICAgdmFyIFQgPSBbXTtcblx0ICAgIChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyNTsgaSsrKSB7XG5cdCAgICAgICAgICAgIFRbaV0gPSBYNjRXb3JkLmNyZWF0ZSgpO1xuXHQgICAgICAgIH1cblx0ICAgIH0oKSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogU0hBLTMgaGFzaCBhbGdvcml0aG0uXG5cdCAgICAgKi9cblx0ICAgIHZhciBTSEEzID0gQ19hbGdvLlNIQTMgPSBIYXNoZXIuZXh0ZW5kKHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb25maWd1cmF0aW9uIG9wdGlvbnMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gb3V0cHV0TGVuZ3RoXG5cdCAgICAgICAgICogICBUaGUgZGVzaXJlZCBudW1iZXIgb2YgYml0cyBpbiB0aGUgb3V0cHV0IGhhc2guXG5cdCAgICAgICAgICogICBPbmx5IHZhbHVlcyBwZXJtaXR0ZWQgYXJlOiAyMjQsIDI1NiwgMzg0LCA1MTIuXG5cdCAgICAgICAgICogICBEZWZhdWx0OiA1MTJcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjZmc6IEhhc2hlci5jZmcuZXh0ZW5kKHtcblx0ICAgICAgICAgICAgb3V0cHV0TGVuZ3RoOiA1MTJcblx0ICAgICAgICB9KSxcblxuXHQgICAgICAgIF9kb1Jlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuX3N0YXRlID0gW11cblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyNTsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICBzdGF0ZVtpXSA9IG5ldyBYNjRXb3JkLmluaXQoKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHRoaXMuYmxvY2tTaXplID0gKDE2MDAgLSAyICogdGhpcy5jZmcub3V0cHV0TGVuZ3RoKSAvIDMyO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfZG9Qcm9jZXNzQmxvY2s6IGZ1bmN0aW9uIChNLCBvZmZzZXQpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuX3N0YXRlO1xuXHQgICAgICAgICAgICB2YXIgbkJsb2NrU2l6ZUxhbmVzID0gdGhpcy5ibG9ja1NpemUgLyAyO1xuXG5cdCAgICAgICAgICAgIC8vIEFic29yYlxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5CbG9ja1NpemVMYW5lczsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgICAgIHZhciBNMmkgID0gTVtvZmZzZXQgKyAyICogaV07XG5cdCAgICAgICAgICAgICAgICB2YXIgTTJpMSA9IE1bb2Zmc2V0ICsgMiAqIGkgKyAxXTtcblxuXHQgICAgICAgICAgICAgICAgLy8gU3dhcCBlbmRpYW5cblx0ICAgICAgICAgICAgICAgIE0yaSA9IChcblx0ICAgICAgICAgICAgICAgICAgICAoKChNMmkgPDwgOCkgIHwgKE0yaSA+Pj4gMjQpKSAmIDB4MDBmZjAwZmYpIHxcblx0ICAgICAgICAgICAgICAgICAgICAoKChNMmkgPDwgMjQpIHwgKE0yaSA+Pj4gOCkpICAmIDB4ZmYwMGZmMDApXG5cdCAgICAgICAgICAgICAgICApO1xuXHQgICAgICAgICAgICAgICAgTTJpMSA9IChcblx0ICAgICAgICAgICAgICAgICAgICAoKChNMmkxIDw8IDgpICB8IChNMmkxID4+PiAyNCkpICYgMHgwMGZmMDBmZikgfFxuXHQgICAgICAgICAgICAgICAgICAgICgoKE0yaTEgPDwgMjQpIHwgKE0yaTEgPj4+IDgpKSAgJiAweGZmMDBmZjAwKVxuXHQgICAgICAgICAgICAgICAgKTtcblxuXHQgICAgICAgICAgICAgICAgLy8gQWJzb3JiIG1lc3NhZ2UgaW50byBzdGF0ZVxuXHQgICAgICAgICAgICAgICAgdmFyIGxhbmUgPSBzdGF0ZVtpXTtcblx0ICAgICAgICAgICAgICAgIGxhbmUuaGlnaCBePSBNMmkxO1xuXHQgICAgICAgICAgICAgICAgbGFuZS5sb3cgIF49IE0yaTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIFJvdW5kc1xuXHQgICAgICAgICAgICBmb3IgKHZhciByb3VuZCA9IDA7IHJvdW5kIDwgMjQ7IHJvdW5kKyspIHtcblx0ICAgICAgICAgICAgICAgIC8vIFRoZXRhXG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IDU7IHgrKykge1xuXHQgICAgICAgICAgICAgICAgICAgIC8vIE1peCBjb2x1bW4gbGFuZXNcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgdE1zdyA9IDAsIHRMc3cgPSAwO1xuXHQgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgNTsgeSsrKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsYW5lID0gc3RhdGVbeCArIDUgKiB5XTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdE1zdyBePSBsYW5lLmhpZ2g7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRMc3cgXj0gbGFuZS5sb3c7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAgICAgLy8gVGVtcG9yYXJ5IHZhbHVlc1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBUeCA9IFRbeF07XG5cdCAgICAgICAgICAgICAgICAgICAgVHguaGlnaCA9IHRNc3c7XG5cdCAgICAgICAgICAgICAgICAgICAgVHgubG93ICA9IHRMc3c7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IDU7IHgrKykge1xuXHQgICAgICAgICAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBUeDQgPSBUWyh4ICsgNCkgJSA1XTtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgVHgxID0gVFsoeCArIDEpICUgNV07XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIFR4MU1zdyA9IFR4MS5oaWdoO1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBUeDFMc3cgPSBUeDEubG93O1xuXG5cdCAgICAgICAgICAgICAgICAgICAgLy8gTWl4IHN1cnJvdW5kaW5nIGNvbHVtbnNcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgdE1zdyA9IFR4NC5oaWdoIF4gKChUeDFNc3cgPDwgMSkgfCAoVHgxTHN3ID4+PiAzMSkpO1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciB0THN3ID0gVHg0LmxvdyAgXiAoKFR4MUxzdyA8PCAxKSB8IChUeDFNc3cgPj4+IDMxKSk7XG5cdCAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCA1OyB5KyspIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxhbmUgPSBzdGF0ZVt4ICsgNSAqIHldO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBsYW5lLmhpZ2ggXj0gdE1zdztcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbGFuZS5sb3cgIF49IHRMc3c7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAvLyBSaG8gUGlcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIGxhbmVJbmRleCA9IDE7IGxhbmVJbmRleCA8IDI1OyBsYW5lSW5kZXgrKykge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciB0TXN3O1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciB0THN3O1xuXG5cdCAgICAgICAgICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGxhbmUgPSBzdGF0ZVtsYW5lSW5kZXhdO1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBsYW5lTXN3ID0gbGFuZS5oaWdoO1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBsYW5lTHN3ID0gbGFuZS5sb3c7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIHJob09mZnNldCA9IFJIT19PRkZTRVRTW2xhbmVJbmRleF07XG5cblx0ICAgICAgICAgICAgICAgICAgICAvLyBSb3RhdGUgbGFuZXNcblx0ICAgICAgICAgICAgICAgICAgICBpZiAocmhvT2Zmc2V0IDwgMzIpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdE1zdyA9IChsYW5lTXN3IDw8IHJob09mZnNldCkgfCAobGFuZUxzdyA+Pj4gKDMyIC0gcmhvT2Zmc2V0KSk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRMc3cgPSAobGFuZUxzdyA8PCByaG9PZmZzZXQpIHwgKGxhbmVNc3cgPj4+ICgzMiAtIHJob09mZnNldCkpO1xuXHQgICAgICAgICAgICAgICAgICAgIH0gZWxzZSAvKiBpZiAocmhvT2Zmc2V0ID49IDMyKSAqLyB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHRNc3cgPSAobGFuZUxzdyA8PCAocmhvT2Zmc2V0IC0gMzIpKSB8IChsYW5lTXN3ID4+PiAoNjQgLSByaG9PZmZzZXQpKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdExzdyA9IChsYW5lTXN3IDw8IChyaG9PZmZzZXQgLSAzMikpIHwgKGxhbmVMc3cgPj4+ICg2NCAtIHJob09mZnNldCkpO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgICAgIC8vIFRyYW5zcG9zZSBsYW5lc1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBUUGlMYW5lID0gVFtQSV9JTkRFWEVTW2xhbmVJbmRleF1dO1xuXHQgICAgICAgICAgICAgICAgICAgIFRQaUxhbmUuaGlnaCA9IHRNc3c7XG5cdCAgICAgICAgICAgICAgICAgICAgVFBpTGFuZS5sb3cgID0gdExzdztcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gUmhvIHBpIGF0IHggPSB5ID0gMFxuXHQgICAgICAgICAgICAgICAgdmFyIFQwID0gVFswXTtcblx0ICAgICAgICAgICAgICAgIHZhciBzdGF0ZTAgPSBzdGF0ZVswXTtcblx0ICAgICAgICAgICAgICAgIFQwLmhpZ2ggPSBzdGF0ZTAuaGlnaDtcblx0ICAgICAgICAgICAgICAgIFQwLmxvdyAgPSBzdGF0ZTAubG93O1xuXG5cdCAgICAgICAgICAgICAgICAvLyBDaGlcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgNTsgeCsrKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCA1OyB5KyspIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsYW5lSW5kZXggPSB4ICsgNSAqIHk7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsYW5lID0gc3RhdGVbbGFuZUluZGV4XTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFRMYW5lID0gVFtsYW5lSW5kZXhdO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB2YXIgVHgxTGFuZSA9IFRbKCh4ICsgMSkgJSA1KSArIDUgKiB5XTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdmFyIFR4MkxhbmUgPSBUWygoeCArIDIpICUgNSkgKyA1ICogeV07XG5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWl4IHJvd3Ncblx0ICAgICAgICAgICAgICAgICAgICAgICAgbGFuZS5oaWdoID0gVExhbmUuaGlnaCBeICh+VHgxTGFuZS5oaWdoICYgVHgyTGFuZS5oaWdoKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgbGFuZS5sb3cgID0gVExhbmUubG93ICBeICh+VHgxTGFuZS5sb3cgICYgVHgyTGFuZS5sb3cpO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgLy8gSW90YVxuXHQgICAgICAgICAgICAgICAgdmFyIGxhbmUgPSBzdGF0ZVswXTtcblx0ICAgICAgICAgICAgICAgIHZhciByb3VuZENvbnN0YW50ID0gUk9VTkRfQ09OU1RBTlRTW3JvdW5kXTtcblx0ICAgICAgICAgICAgICAgIGxhbmUuaGlnaCBePSByb3VuZENvbnN0YW50LmhpZ2g7XG5cdCAgICAgICAgICAgICAgICBsYW5lLmxvdyAgXj0gcm91bmRDb25zdGFudC5sb3c7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgX2RvRmluYWxpemU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5fZGF0YTtcblx0ICAgICAgICAgICAgdmFyIGRhdGFXb3JkcyA9IGRhdGEud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBuQml0c1RvdGFsID0gdGhpcy5fbkRhdGFCeXRlcyAqIDg7XG5cdCAgICAgICAgICAgIHZhciBuQml0c0xlZnQgPSBkYXRhLnNpZ0J5dGVzICogODtcblx0ICAgICAgICAgICAgdmFyIGJsb2NrU2l6ZUJpdHMgPSB0aGlzLmJsb2NrU2l6ZSAqIDMyO1xuXG5cdCAgICAgICAgICAgIC8vIEFkZCBwYWRkaW5nXG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1tuQml0c0xlZnQgPj4+IDVdIHw9IDB4MSA8PCAoMjQgLSBuQml0c0xlZnQgJSAzMik7XG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1soKE1hdGguY2VpbCgobkJpdHNMZWZ0ICsgMSkgLyBibG9ja1NpemVCaXRzKSAqIGJsb2NrU2l6ZUJpdHMpID4+PiA1KSAtIDFdIHw9IDB4ODA7XG5cdCAgICAgICAgICAgIGRhdGEuc2lnQnl0ZXMgPSBkYXRhV29yZHMubGVuZ3RoICogNDtcblxuXHQgICAgICAgICAgICAvLyBIYXNoIGZpbmFsIGJsb2Nrc1xuXHQgICAgICAgICAgICB0aGlzLl9wcm9jZXNzKCk7XG5cblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuX3N0YXRlO1xuXHQgICAgICAgICAgICB2YXIgb3V0cHV0TGVuZ3RoQnl0ZXMgPSB0aGlzLmNmZy5vdXRwdXRMZW5ndGggLyA4O1xuXHQgICAgICAgICAgICB2YXIgb3V0cHV0TGVuZ3RoTGFuZXMgPSBvdXRwdXRMZW5ndGhCeXRlcyAvIDg7XG5cblx0ICAgICAgICAgICAgLy8gU3F1ZWV6ZVxuXHQgICAgICAgICAgICB2YXIgaGFzaFdvcmRzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3V0cHV0TGVuZ3RoTGFuZXM7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgICAgICB2YXIgbGFuZSA9IHN0YXRlW2ldO1xuXHQgICAgICAgICAgICAgICAgdmFyIGxhbmVNc3cgPSBsYW5lLmhpZ2g7XG5cdCAgICAgICAgICAgICAgICB2YXIgbGFuZUxzdyA9IGxhbmUubG93O1xuXG5cdCAgICAgICAgICAgICAgICAvLyBTd2FwIGVuZGlhblxuXHQgICAgICAgICAgICAgICAgbGFuZU1zdyA9IChcblx0ICAgICAgICAgICAgICAgICAgICAoKChsYW5lTXN3IDw8IDgpICB8IChsYW5lTXN3ID4+PiAyNCkpICYgMHgwMGZmMDBmZikgfFxuXHQgICAgICAgICAgICAgICAgICAgICgoKGxhbmVNc3cgPDwgMjQpIHwgKGxhbmVNc3cgPj4+IDgpKSAgJiAweGZmMDBmZjAwKVxuXHQgICAgICAgICAgICAgICAgKTtcblx0ICAgICAgICAgICAgICAgIGxhbmVMc3cgPSAoXG5cdCAgICAgICAgICAgICAgICAgICAgKCgobGFuZUxzdyA8PCA4KSAgfCAobGFuZUxzdyA+Pj4gMjQpKSAmIDB4MDBmZjAwZmYpIHxcblx0ICAgICAgICAgICAgICAgICAgICAoKChsYW5lTHN3IDw8IDI0KSB8IChsYW5lTHN3ID4+PiA4KSkgICYgMHhmZjAwZmYwMClcblx0ICAgICAgICAgICAgICAgICk7XG5cblx0ICAgICAgICAgICAgICAgIC8vIFNxdWVlemUgc3RhdGUgdG8gcmV0cmlldmUgaGFzaFxuXHQgICAgICAgICAgICAgICAgaGFzaFdvcmRzLnB1c2gobGFuZUxzdyk7XG5cdCAgICAgICAgICAgICAgICBoYXNoV29yZHMucHVzaChsYW5lTXN3KTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIFJldHVybiBmaW5hbCBjb21wdXRlZCBoYXNoXG5cdCAgICAgICAgICAgIHJldHVybiBuZXcgV29yZEFycmF5LmluaXQoaGFzaFdvcmRzLCBvdXRwdXRMZW5ndGhCeXRlcyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHZhciBjbG9uZSA9IEhhc2hlci5jbG9uZS5jYWxsKHRoaXMpO1xuXG5cdCAgICAgICAgICAgIHZhciBzdGF0ZSA9IGNsb25lLl9zdGF0ZSA9IHRoaXMuX3N0YXRlLnNsaWNlKDApO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI1OyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIHN0YXRlW2ldID0gc3RhdGVbaV0uY2xvbmUoKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBjbG9uZTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgaGFzaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cblx0ICAgICAqXG5cdCAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBoYXNoLlxuXHQgICAgICpcblx0ICAgICAqIEBzdGF0aWNcblx0ICAgICAqXG5cdCAgICAgKiBAZXhhbXBsZVxuXHQgICAgICpcblx0ICAgICAqICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLlNIQTMoJ21lc3NhZ2UnKTtcblx0ICAgICAqICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLlNIQTMod29yZEFycmF5KTtcblx0ICAgICAqL1xuXHQgICAgQy5TSEEzID0gSGFzaGVyLl9jcmVhdGVIZWxwZXIoU0hBMyk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIEhNQUMncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICpcblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBoYXNoLlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBrZXkgVGhlIHNlY3JldCBrZXkuXG5cdCAgICAgKlxuXHQgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgSE1BQy5cblx0ICAgICAqXG5cdCAgICAgKiBAc3RhdGljXG5cdCAgICAgKlxuXHQgICAgICogQGV4YW1wbGVcblx0ICAgICAqXG5cdCAgICAgKiAgICAgdmFyIGhtYWMgPSBDcnlwdG9KUy5IbWFjU0hBMyhtZXNzYWdlLCBrZXkpO1xuXHQgICAgICovXG5cdCAgICBDLkhtYWNTSEEzID0gSGFzaGVyLl9jcmVhdGVIbWFjSGVscGVyKFNIQTMpO1xuXHR9KE1hdGgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUy5TSEEzO1xuXG59KSk7IiwgIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0LyoqIEBwcmVzZXJ2ZVxuXHQoYykgMjAxMiBieSBDXHUwMEU5ZHJpYyBNZXNuaWwuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5cblx0UmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuXG5cdCAgICAtIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cblx0ICAgIC0gUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuXG5cdFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cblx0Ki9cblxuXHQoZnVuY3Rpb24gKE1hdGgpIHtcblx0ICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgdmFyIEMgPSBDcnlwdG9KUztcblx0ICAgIHZhciBDX2xpYiA9IEMubGliO1xuXHQgICAgdmFyIFdvcmRBcnJheSA9IENfbGliLldvcmRBcnJheTtcblx0ICAgIHZhciBIYXNoZXIgPSBDX2xpYi5IYXNoZXI7XG5cdCAgICB2YXIgQ19hbGdvID0gQy5hbGdvO1xuXG5cdCAgICAvLyBDb25zdGFudHMgdGFibGVcblx0ICAgIHZhciBfemwgPSBXb3JkQXJyYXkuY3JlYXRlKFtcblx0ICAgICAgICAwLCAgMSwgIDIsICAzLCAgNCwgIDUsICA2LCAgNywgIDgsICA5LCAxMCwgMTEsIDEyLCAxMywgMTQsIDE1LFxuXHQgICAgICAgIDcsICA0LCAxMywgIDEsIDEwLCAgNiwgMTUsICAzLCAxMiwgIDAsICA5LCAgNSwgIDIsIDE0LCAxMSwgIDgsXG5cdCAgICAgICAgMywgMTAsIDE0LCAgNCwgIDksIDE1LCAgOCwgIDEsICAyLCAgNywgIDAsICA2LCAxMywgMTEsICA1LCAxMixcblx0ICAgICAgICAxLCAgOSwgMTEsIDEwLCAgMCwgIDgsIDEyLCAgNCwgMTMsICAzLCAgNywgMTUsIDE0LCAgNSwgIDYsICAyLFxuXHQgICAgICAgIDQsICAwLCAgNSwgIDksICA3LCAxMiwgIDIsIDEwLCAxNCwgIDEsICAzLCAgOCwgMTEsICA2LCAxNSwgMTNdKTtcblx0ICAgIHZhciBfenIgPSBXb3JkQXJyYXkuY3JlYXRlKFtcblx0ICAgICAgICA1LCAxNCwgIDcsICAwLCAgOSwgIDIsIDExLCAgNCwgMTMsICA2LCAxNSwgIDgsICAxLCAxMCwgIDMsIDEyLFxuXHQgICAgICAgIDYsIDExLCAgMywgIDcsICAwLCAxMywgIDUsIDEwLCAxNCwgMTUsICA4LCAxMiwgIDQsICA5LCAgMSwgIDIsXG5cdCAgICAgICAgMTUsICA1LCAgMSwgIDMsICA3LCAxNCwgIDYsICA5LCAxMSwgIDgsIDEyLCAgMiwgMTAsICAwLCAgNCwgMTMsXG5cdCAgICAgICAgOCwgIDYsICA0LCAgMSwgIDMsIDExLCAxNSwgIDAsICA1LCAxMiwgIDIsIDEzLCAgOSwgIDcsIDEwLCAxNCxcblx0ICAgICAgICAxMiwgMTUsIDEwLCAgNCwgIDEsICA1LCAgOCwgIDcsICA2LCAgMiwgMTMsIDE0LCAgMCwgIDMsICA5LCAxMV0pO1xuXHQgICAgdmFyIF9zbCA9IFdvcmRBcnJheS5jcmVhdGUoW1xuXHQgICAgICAgICAxMSwgMTQsIDE1LCAxMiwgIDUsICA4LCAgNywgIDksIDExLCAxMywgMTQsIDE1LCAgNiwgIDcsICA5LCAgOCxcblx0ICAgICAgICA3LCA2LCAgIDgsIDEzLCAxMSwgIDksICA3LCAxNSwgIDcsIDEyLCAxNSwgIDksIDExLCAgNywgMTMsIDEyLFxuXHQgICAgICAgIDExLCAxMywgIDYsICA3LCAxNCwgIDksIDEzLCAxNSwgMTQsICA4LCAxMywgIDYsICA1LCAxMiwgIDcsICA1LFxuXHQgICAgICAgICAgMTEsIDEyLCAxNCwgMTUsIDE0LCAxNSwgIDksICA4LCAgOSwgMTQsICA1LCAgNiwgIDgsICA2LCAgNSwgMTIsXG5cdCAgICAgICAgOSwgMTUsICA1LCAxMSwgIDYsICA4LCAxMywgMTIsICA1LCAxMiwgMTMsIDE0LCAxMSwgIDgsICA1LCAgNiBdKTtcblx0ICAgIHZhciBfc3IgPSBXb3JkQXJyYXkuY3JlYXRlKFtcblx0ICAgICAgICA4LCAgOSwgIDksIDExLCAxMywgMTUsIDE1LCAgNSwgIDcsICA3LCAgOCwgMTEsIDE0LCAxNCwgMTIsICA2LFxuXHQgICAgICAgIDksIDEzLCAxNSwgIDcsIDEyLCAgOCwgIDksIDExLCAgNywgIDcsIDEyLCAgNywgIDYsIDE1LCAxMywgMTEsXG5cdCAgICAgICAgOSwgIDcsIDE1LCAxMSwgIDgsICA2LCAgNiwgMTQsIDEyLCAxMywgIDUsIDE0LCAxMywgMTMsICA3LCAgNSxcblx0ICAgICAgICAxNSwgIDUsICA4LCAxMSwgMTQsIDE0LCAgNiwgMTQsICA2LCAgOSwgMTIsICA5LCAxMiwgIDUsIDE1LCAgOCxcblx0ICAgICAgICA4LCAgNSwgMTIsICA5LCAxMiwgIDUsIDE0LCAgNiwgIDgsIDEzLCAgNiwgIDUsIDE1LCAxMywgMTEsIDExIF0pO1xuXG5cdCAgICB2YXIgX2hsID0gIFdvcmRBcnJheS5jcmVhdGUoWyAweDAwMDAwMDAwLCAweDVBODI3OTk5LCAweDZFRDlFQkExLCAweDhGMUJCQ0RDLCAweEE5NTNGRDRFXSk7XG5cdCAgICB2YXIgX2hyID0gIFdvcmRBcnJheS5jcmVhdGUoWyAweDUwQTI4QkU2LCAweDVDNEREMTI0LCAweDZENzAzRUYzLCAweDdBNkQ3NkU5LCAweDAwMDAwMDAwXSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogUklQRU1EMTYwIGhhc2ggYWxnb3JpdGhtLlxuXHQgICAgICovXG5cdCAgICB2YXIgUklQRU1EMTYwID0gQ19hbGdvLlJJUEVNRDE2MCA9IEhhc2hlci5leHRlbmQoe1xuXHQgICAgICAgIF9kb1Jlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHRoaXMuX2hhc2ggID0gV29yZEFycmF5LmNyZWF0ZShbMHg2NzQ1MjMwMSwgMHhFRkNEQUI4OSwgMHg5OEJBRENGRSwgMHgxMDMyNTQ3NiwgMHhDM0QyRTFGMF0pO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfZG9Qcm9jZXNzQmxvY2s6IGZ1bmN0aW9uIChNLCBvZmZzZXQpIHtcblxuXHQgICAgICAgICAgICAvLyBTd2FwIGVuZGlhblxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICAgICAgdmFyIG9mZnNldF9pID0gb2Zmc2V0ICsgaTtcblx0ICAgICAgICAgICAgICAgIHZhciBNX29mZnNldF9pID0gTVtvZmZzZXRfaV07XG5cblx0ICAgICAgICAgICAgICAgIC8vIFN3YXBcblx0ICAgICAgICAgICAgICAgIE1bb2Zmc2V0X2ldID0gKFxuXHQgICAgICAgICAgICAgICAgICAgICgoKE1fb2Zmc2V0X2kgPDwgOCkgIHwgKE1fb2Zmc2V0X2kgPj4+IDI0KSkgJiAweDAwZmYwMGZmKSB8XG5cdCAgICAgICAgICAgICAgICAgICAgKCgoTV9vZmZzZXRfaSA8PCAyNCkgfCAoTV9vZmZzZXRfaSA+Pj4gOCkpICAmIDB4ZmYwMGZmMDApXG5cdCAgICAgICAgICAgICAgICApO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgICAgIHZhciBIICA9IHRoaXMuX2hhc2gud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBobCA9IF9obC53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIGhyID0gX2hyLndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgemwgPSBfemwud29yZHM7XG5cdCAgICAgICAgICAgIHZhciB6ciA9IF96ci53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHNsID0gX3NsLndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgc3IgPSBfc3Iud29yZHM7XG5cblx0ICAgICAgICAgICAgLy8gV29ya2luZyB2YXJpYWJsZXNcblx0ICAgICAgICAgICAgdmFyIGFsLCBibCwgY2wsIGRsLCBlbDtcblx0ICAgICAgICAgICAgdmFyIGFyLCBiciwgY3IsIGRyLCBlcjtcblxuXHQgICAgICAgICAgICBhciA9IGFsID0gSFswXTtcblx0ICAgICAgICAgICAgYnIgPSBibCA9IEhbMV07XG5cdCAgICAgICAgICAgIGNyID0gY2wgPSBIWzJdO1xuXHQgICAgICAgICAgICBkciA9IGRsID0gSFszXTtcblx0ICAgICAgICAgICAgZXIgPSBlbCA9IEhbNF07XG5cdCAgICAgICAgICAgIC8vIENvbXB1dGF0aW9uXG5cdCAgICAgICAgICAgIHZhciB0O1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDgwOyBpICs9IDEpIHtcblx0ICAgICAgICAgICAgICAgIHQgPSAoYWwgKyAgTVtvZmZzZXQremxbaV1dKXwwO1xuXHQgICAgICAgICAgICAgICAgaWYgKGk8MTYpe1xuXHRcdCAgICAgICAgICAgIHQgKz0gIGYxKGJsLGNsLGRsKSArIGhsWzBdO1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpPDMyKSB7XG5cdFx0ICAgICAgICAgICAgdCArPSAgZjIoYmwsY2wsZGwpICsgaGxbMV07XG5cdCAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGk8NDgpIHtcblx0XHQgICAgICAgICAgICB0ICs9ICBmMyhibCxjbCxkbCkgKyBobFsyXTtcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaTw2NCkge1xuXHRcdCAgICAgICAgICAgIHQgKz0gIGY0KGJsLGNsLGRsKSArIGhsWzNdO1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIHsvLyBpZiAoaTw4MCkge1xuXHRcdCAgICAgICAgICAgIHQgKz0gIGY1KGJsLGNsLGRsKSArIGhsWzRdO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgdCA9IHR8MDtcblx0ICAgICAgICAgICAgICAgIHQgPSAgcm90bCh0LHNsW2ldKTtcblx0ICAgICAgICAgICAgICAgIHQgPSAodCtlbCl8MDtcblx0ICAgICAgICAgICAgICAgIGFsID0gZWw7XG5cdCAgICAgICAgICAgICAgICBlbCA9IGRsO1xuXHQgICAgICAgICAgICAgICAgZGwgPSByb3RsKGNsLCAxMCk7XG5cdCAgICAgICAgICAgICAgICBjbCA9IGJsO1xuXHQgICAgICAgICAgICAgICAgYmwgPSB0O1xuXG5cdCAgICAgICAgICAgICAgICB0ID0gKGFyICsgTVtvZmZzZXQrenJbaV1dKXwwO1xuXHQgICAgICAgICAgICAgICAgaWYgKGk8MTYpe1xuXHRcdCAgICAgICAgICAgIHQgKz0gIGY1KGJyLGNyLGRyKSArIGhyWzBdO1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpPDMyKSB7XG5cdFx0ICAgICAgICAgICAgdCArPSAgZjQoYnIsY3IsZHIpICsgaHJbMV07XG5cdCAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGk8NDgpIHtcblx0XHQgICAgICAgICAgICB0ICs9ICBmMyhicixjcixkcikgKyBoclsyXTtcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaTw2NCkge1xuXHRcdCAgICAgICAgICAgIHQgKz0gIGYyKGJyLGNyLGRyKSArIGhyWzNdO1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIHsvLyBpZiAoaTw4MCkge1xuXHRcdCAgICAgICAgICAgIHQgKz0gIGYxKGJyLGNyLGRyKSArIGhyWzRdO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgdCA9IHR8MDtcblx0ICAgICAgICAgICAgICAgIHQgPSAgcm90bCh0LHNyW2ldKSA7XG5cdCAgICAgICAgICAgICAgICB0ID0gKHQrZXIpfDA7XG5cdCAgICAgICAgICAgICAgICBhciA9IGVyO1xuXHQgICAgICAgICAgICAgICAgZXIgPSBkcjtcblx0ICAgICAgICAgICAgICAgIGRyID0gcm90bChjciwgMTApO1xuXHQgICAgICAgICAgICAgICAgY3IgPSBicjtcblx0ICAgICAgICAgICAgICAgIGJyID0gdDtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAvLyBJbnRlcm1lZGlhdGUgaGFzaCB2YWx1ZVxuXHQgICAgICAgICAgICB0ICAgID0gKEhbMV0gKyBjbCArIGRyKXwwO1xuXHQgICAgICAgICAgICBIWzFdID0gKEhbMl0gKyBkbCArIGVyKXwwO1xuXHQgICAgICAgICAgICBIWzJdID0gKEhbM10gKyBlbCArIGFyKXwwO1xuXHQgICAgICAgICAgICBIWzNdID0gKEhbNF0gKyBhbCArIGJyKXwwO1xuXHQgICAgICAgICAgICBIWzRdID0gKEhbMF0gKyBibCArIGNyKXwwO1xuXHQgICAgICAgICAgICBIWzBdID0gIHQ7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9kb0ZpbmFsaXplOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuX2RhdGE7XG5cdCAgICAgICAgICAgIHZhciBkYXRhV29yZHMgPSBkYXRhLndvcmRzO1xuXG5cdCAgICAgICAgICAgIHZhciBuQml0c1RvdGFsID0gdGhpcy5fbkRhdGFCeXRlcyAqIDg7XG5cdCAgICAgICAgICAgIHZhciBuQml0c0xlZnQgPSBkYXRhLnNpZ0J5dGVzICogODtcblxuXHQgICAgICAgICAgICAvLyBBZGQgcGFkZGluZ1xuXHQgICAgICAgICAgICBkYXRhV29yZHNbbkJpdHNMZWZ0ID4+PiA1XSB8PSAweDgwIDw8ICgyNCAtIG5CaXRzTGVmdCAlIDMyKTtcblx0ICAgICAgICAgICAgZGF0YVdvcmRzWygoKG5CaXRzTGVmdCArIDY0KSA+Pj4gOSkgPDwgNCkgKyAxNF0gPSAoXG5cdCAgICAgICAgICAgICAgICAoKChuQml0c1RvdGFsIDw8IDgpICB8IChuQml0c1RvdGFsID4+PiAyNCkpICYgMHgwMGZmMDBmZikgfFxuXHQgICAgICAgICAgICAgICAgKCgobkJpdHNUb3RhbCA8PCAyNCkgfCAobkJpdHNUb3RhbCA+Pj4gOCkpICAmIDB4ZmYwMGZmMDApXG5cdCAgICAgICAgICAgICk7XG5cdCAgICAgICAgICAgIGRhdGEuc2lnQnl0ZXMgPSAoZGF0YVdvcmRzLmxlbmd0aCArIDEpICogNDtcblxuXHQgICAgICAgICAgICAvLyBIYXNoIGZpbmFsIGJsb2Nrc1xuXHQgICAgICAgICAgICB0aGlzLl9wcm9jZXNzKCk7XG5cblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBoYXNoID0gdGhpcy5faGFzaDtcblx0ICAgICAgICAgICAgdmFyIEggPSBoYXNoLndvcmRzO1xuXG5cdCAgICAgICAgICAgIC8vIFN3YXAgZW5kaWFuXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNTsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICAgICAgdmFyIEhfaSA9IEhbaV07XG5cblx0ICAgICAgICAgICAgICAgIC8vIFN3YXBcblx0ICAgICAgICAgICAgICAgIEhbaV0gPSAoKChIX2kgPDwgOCkgIHwgKEhfaSA+Pj4gMjQpKSAmIDB4MDBmZjAwZmYpIHxcblx0ICAgICAgICAgICAgICAgICAgICAgICAoKChIX2kgPDwgMjQpIHwgKEhfaSA+Pj4gOCkpICAmIDB4ZmYwMGZmMDApO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gUmV0dXJuIGZpbmFsIGNvbXB1dGVkIGhhc2hcblx0ICAgICAgICAgICAgcmV0dXJuIGhhc2g7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHZhciBjbG9uZSA9IEhhc2hlci5jbG9uZS5jYWxsKHRoaXMpO1xuXHQgICAgICAgICAgICBjbG9uZS5faGFzaCA9IHRoaXMuX2hhc2guY2xvbmUoKTtcblxuXHQgICAgICAgICAgICByZXR1cm4gY2xvbmU7XG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cblxuXHQgICAgZnVuY3Rpb24gZjEoeCwgeSwgeikge1xuXHQgICAgICAgIHJldHVybiAoKHgpIF4gKHkpIF4gKHopKTtcblxuXHQgICAgfVxuXG5cdCAgICBmdW5jdGlvbiBmMih4LCB5LCB6KSB7XG5cdCAgICAgICAgcmV0dXJuICgoKHgpJih5KSkgfCAoKH54KSYoeikpKTtcblx0ICAgIH1cblxuXHQgICAgZnVuY3Rpb24gZjMoeCwgeSwgeikge1xuXHQgICAgICAgIHJldHVybiAoKCh4KSB8ICh+KHkpKSkgXiAoeikpO1xuXHQgICAgfVxuXG5cdCAgICBmdW5jdGlvbiBmNCh4LCB5LCB6KSB7XG5cdCAgICAgICAgcmV0dXJuICgoKHgpICYgKHopKSB8ICgoeSkmKH4oeikpKSk7XG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIGY1KHgsIHksIHopIHtcblx0ICAgICAgICByZXR1cm4gKCh4KSBeICgoeSkgfCh+KHopKSkpO1xuXG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIHJvdGwoeCxuKSB7XG5cdCAgICAgICAgcmV0dXJuICh4PDxuKSB8ICh4Pj4+KDMyLW4pKTtcblx0ICAgIH1cblxuXG5cdCAgICAvKipcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBoYXNoZXIncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICpcblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBoYXNoLlxuXHQgICAgICpcblx0ICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGhhc2guXG5cdCAgICAgKlxuXHQgICAgICogQHN0YXRpY1xuXHQgICAgICpcblx0ICAgICAqIEBleGFtcGxlXG5cdCAgICAgKlxuXHQgICAgICogICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuUklQRU1EMTYwKCdtZXNzYWdlJyk7XG5cdCAgICAgKiAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5SSVBFTUQxNjAod29yZEFycmF5KTtcblx0ICAgICAqL1xuXHQgICAgQy5SSVBFTUQxNjAgPSBIYXNoZXIuX2NyZWF0ZUhlbHBlcihSSVBFTUQxNjApO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBITUFDJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30ga2V5IFRoZSBzZWNyZXQga2V5LlxuXHQgICAgICpcblx0ICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIEhNQUMuXG5cdCAgICAgKlxuXHQgICAgICogQHN0YXRpY1xuXHQgICAgICpcblx0ICAgICAqIEBleGFtcGxlXG5cdCAgICAgKlxuXHQgICAgICogICAgIHZhciBobWFjID0gQ3J5cHRvSlMuSG1hY1JJUEVNRDE2MChtZXNzYWdlLCBrZXkpO1xuXHQgICAgICovXG5cdCAgICBDLkhtYWNSSVBFTUQxNjAgPSBIYXNoZXIuX2NyZWF0ZUhtYWNIZWxwZXIoUklQRU1EMTYwKTtcblx0fShNYXRoKSk7XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlMuUklQRU1EMTYwO1xuXG59KSk7IiwgIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0KGZ1bmN0aW9uICgpIHtcblx0ICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgdmFyIEMgPSBDcnlwdG9KUztcblx0ICAgIHZhciBDX2xpYiA9IEMubGliO1xuXHQgICAgdmFyIEJhc2UgPSBDX2xpYi5CYXNlO1xuXHQgICAgdmFyIENfZW5jID0gQy5lbmM7XG5cdCAgICB2YXIgVXRmOCA9IENfZW5jLlV0Zjg7XG5cdCAgICB2YXIgQ19hbGdvID0gQy5hbGdvO1xuXG5cdCAgICAvKipcblx0ICAgICAqIEhNQUMgYWxnb3JpdGhtLlxuXHQgICAgICovXG5cdCAgICB2YXIgSE1BQyA9IENfYWxnby5ITUFDID0gQmFzZS5leHRlbmQoe1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEluaXRpYWxpemVzIGEgbmV3bHkgY3JlYXRlZCBITUFDLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtIYXNoZXJ9IGhhc2hlciBUaGUgaGFzaCBhbGdvcml0aG0gdG8gdXNlLlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30ga2V5IFRoZSBzZWNyZXQga2V5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgaG1hY0hhc2hlciA9IENyeXB0b0pTLmFsZ28uSE1BQy5jcmVhdGUoQ3J5cHRvSlMuYWxnby5TSEEyNTYsIGtleSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgaW5pdDogZnVuY3Rpb24gKGhhc2hlciwga2V5KSB7XG5cdCAgICAgICAgICAgIC8vIEluaXQgaGFzaGVyXG5cdCAgICAgICAgICAgIGhhc2hlciA9IHRoaXMuX2hhc2hlciA9IG5ldyBoYXNoZXIuaW5pdCgpO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnQgc3RyaW5nIHRvIFdvcmRBcnJheSwgZWxzZSBhc3N1bWUgV29yZEFycmF5IGFscmVhZHlcblx0ICAgICAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT0gJ3N0cmluZycpIHtcblx0ICAgICAgICAgICAgICAgIGtleSA9IFV0ZjgucGFyc2Uoa2V5KTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgaGFzaGVyQmxvY2tTaXplID0gaGFzaGVyLmJsb2NrU2l6ZTtcblx0ICAgICAgICAgICAgdmFyIGhhc2hlckJsb2NrU2l6ZUJ5dGVzID0gaGFzaGVyQmxvY2tTaXplICogNDtcblxuXHQgICAgICAgICAgICAvLyBBbGxvdyBhcmJpdHJhcnkgbGVuZ3RoIGtleXNcblx0ICAgICAgICAgICAgaWYgKGtleS5zaWdCeXRlcyA+IGhhc2hlckJsb2NrU2l6ZUJ5dGVzKSB7XG5cdCAgICAgICAgICAgICAgICBrZXkgPSBoYXNoZXIuZmluYWxpemUoa2V5KTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIENsYW1wIGV4Y2VzcyBiaXRzXG5cdCAgICAgICAgICAgIGtleS5jbGFtcCgpO1xuXG5cdCAgICAgICAgICAgIC8vIENsb25lIGtleSBmb3IgaW5uZXIgYW5kIG91dGVyIHBhZHNcblx0ICAgICAgICAgICAgdmFyIG9LZXkgPSB0aGlzLl9vS2V5ID0ga2V5LmNsb25lKCk7XG5cdCAgICAgICAgICAgIHZhciBpS2V5ID0gdGhpcy5faUtleSA9IGtleS5jbG9uZSgpO1xuXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgb0tleVdvcmRzID0gb0tleS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIGlLZXlXb3JkcyA9IGlLZXkud29yZHM7XG5cblx0ICAgICAgICAgICAgLy8gWE9SIGtleXMgd2l0aCBwYWQgY29uc3RhbnRzXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaGFzaGVyQmxvY2tTaXplOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIG9LZXlXb3Jkc1tpXSBePSAweDVjNWM1YzVjO1xuXHQgICAgICAgICAgICAgICAgaUtleVdvcmRzW2ldIF49IDB4MzYzNjM2MzY7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgb0tleS5zaWdCeXRlcyA9IGlLZXkuc2lnQnl0ZXMgPSBoYXNoZXJCbG9ja1NpemVCeXRlcztcblxuXHQgICAgICAgICAgICAvLyBTZXQgaW5pdGlhbCB2YWx1ZXNcblx0ICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBSZXNldHMgdGhpcyBITUFDIHRvIGl0cyBpbml0aWFsIHN0YXRlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICBobWFjSGFzaGVyLnJlc2V0KCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgdmFyIGhhc2hlciA9IHRoaXMuX2hhc2hlcjtcblxuXHQgICAgICAgICAgICAvLyBSZXNldFxuXHQgICAgICAgICAgICBoYXNoZXIucmVzZXQoKTtcblx0ICAgICAgICAgICAgaGFzaGVyLnVwZGF0ZSh0aGlzLl9pS2V5KTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogVXBkYXRlcyB0aGlzIEhNQUMgd2l0aCBhIG1lc3NhZ2UuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2VVcGRhdGUgVGhlIG1lc3NhZ2UgdG8gYXBwZW5kLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7SE1BQ30gVGhpcyBITUFDIGluc3RhbmNlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICBobWFjSGFzaGVyLnVwZGF0ZSgnbWVzc2FnZScpO1xuXHQgICAgICAgICAqICAgICBobWFjSGFzaGVyLnVwZGF0ZSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKG1lc3NhZ2VVcGRhdGUpIHtcblx0ICAgICAgICAgICAgdGhpcy5faGFzaGVyLnVwZGF0ZShtZXNzYWdlVXBkYXRlKTtcblxuXHQgICAgICAgICAgICAvLyBDaGFpbmFibGVcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEZpbmFsaXplcyB0aGUgSE1BQyBjb21wdXRhdGlvbi5cblx0ICAgICAgICAgKiBOb3RlIHRoYXQgdGhlIGZpbmFsaXplIG9wZXJhdGlvbiBpcyBlZmZlY3RpdmVseSBhIGRlc3RydWN0aXZlLCByZWFkLW9uY2Ugb3BlcmF0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlVXBkYXRlIChPcHRpb25hbCkgQSBmaW5hbCBtZXNzYWdlIHVwZGF0ZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIEhNQUMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBobWFjID0gaG1hY0hhc2hlci5maW5hbGl6ZSgpO1xuXHQgICAgICAgICAqICAgICB2YXIgaG1hYyA9IGhtYWNIYXNoZXIuZmluYWxpemUoJ21lc3NhZ2UnKTtcblx0ICAgICAgICAgKiAgICAgdmFyIGhtYWMgPSBobWFjSGFzaGVyLmZpbmFsaXplKHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgZmluYWxpemU6IGZ1bmN0aW9uIChtZXNzYWdlVXBkYXRlKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgICAgIHZhciBoYXNoZXIgPSB0aGlzLl9oYXNoZXI7XG5cblx0ICAgICAgICAgICAgLy8gQ29tcHV0ZSBITUFDXG5cdCAgICAgICAgICAgIHZhciBpbm5lckhhc2ggPSBoYXNoZXIuZmluYWxpemUobWVzc2FnZVVwZGF0ZSk7XG5cdCAgICAgICAgICAgIGhhc2hlci5yZXNldCgpO1xuXHQgICAgICAgICAgICB2YXIgaG1hYyA9IGhhc2hlci5maW5hbGl6ZSh0aGlzLl9vS2V5LmNsb25lKCkuY29uY2F0KGlubmVySGFzaCkpO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBobWFjO1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXHR9KCkpO1xuXG5cbn0pKTsiLCAiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSwgdW5kZWYpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIiksIHJlcXVpcmUoXCIuL3NoYTFcIiksIHJlcXVpcmUoXCIuL2htYWNcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiLCBcIi4vc2hhMVwiLCBcIi4vaG1hY1wiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0KGZ1bmN0aW9uICgpIHtcblx0ICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgdmFyIEMgPSBDcnlwdG9KUztcblx0ICAgIHZhciBDX2xpYiA9IEMubGliO1xuXHQgICAgdmFyIEJhc2UgPSBDX2xpYi5CYXNlO1xuXHQgICAgdmFyIFdvcmRBcnJheSA9IENfbGliLldvcmRBcnJheTtcblx0ICAgIHZhciBDX2FsZ28gPSBDLmFsZ287XG5cdCAgICB2YXIgU0hBMSA9IENfYWxnby5TSEExO1xuXHQgICAgdmFyIEhNQUMgPSBDX2FsZ28uSE1BQztcblxuXHQgICAgLyoqXG5cdCAgICAgKiBQYXNzd29yZC1CYXNlZCBLZXkgRGVyaXZhdGlvbiBGdW5jdGlvbiAyIGFsZ29yaXRobS5cblx0ICAgICAqL1xuXHQgICAgdmFyIFBCS0RGMiA9IENfYWxnby5QQktERjIgPSBCYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29uZmlndXJhdGlvbiBvcHRpb25zLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGtleVNpemUgVGhlIGtleSBzaXplIGluIHdvcmRzIHRvIGdlbmVyYXRlLiBEZWZhdWx0OiA0ICgxMjggYml0cylcblx0ICAgICAgICAgKiBAcHJvcGVydHkge0hhc2hlcn0gaGFzaGVyIFRoZSBoYXNoZXIgdG8gdXNlLiBEZWZhdWx0OiBTSEExXG5cdCAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGl0ZXJhdGlvbnMgVGhlIG51bWJlciBvZiBpdGVyYXRpb25zIHRvIHBlcmZvcm0uIERlZmF1bHQ6IDFcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjZmc6IEJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAgICAga2V5U2l6ZTogMTI4LzMyLFxuXHQgICAgICAgICAgICBoYXNoZXI6IFNIQTEsXG5cdCAgICAgICAgICAgIGl0ZXJhdGlvbnM6IDFcblx0ICAgICAgICB9KSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEluaXRpYWxpemVzIGEgbmV3bHkgY3JlYXRlZCBrZXkgZGVyaXZhdGlvbiBmdW5jdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjZmcgKE9wdGlvbmFsKSBUaGUgY29uZmlndXJhdGlvbiBvcHRpb25zIHRvIHVzZSBmb3IgdGhlIGRlcml2YXRpb24uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBrZGYgPSBDcnlwdG9KUy5hbGdvLlBCS0RGMi5jcmVhdGUoKTtcblx0ICAgICAgICAgKiAgICAgdmFyIGtkZiA9IENyeXB0b0pTLmFsZ28uUEJLREYyLmNyZWF0ZSh7IGtleVNpemU6IDggfSk7XG5cdCAgICAgICAgICogICAgIHZhciBrZGYgPSBDcnlwdG9KUy5hbGdvLlBCS0RGMi5jcmVhdGUoeyBrZXlTaXplOiA4LCBpdGVyYXRpb25zOiAxMDAwIH0pO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGluaXQ6IGZ1bmN0aW9uIChjZmcpIHtcblx0ICAgICAgICAgICAgdGhpcy5jZmcgPSB0aGlzLmNmZy5leHRlbmQoY2ZnKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29tcHV0ZXMgdGhlIFBhc3N3b3JkLUJhc2VkIEtleSBEZXJpdmF0aW9uIEZ1bmN0aW9uIDIuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IHBhc3N3b3JkIFRoZSBwYXNzd29yZC5cblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IHNhbHQgQSBzYWx0LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgZGVyaXZlZCBrZXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBrZXkgPSBrZGYuY29tcHV0ZShwYXNzd29yZCwgc2FsdCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY29tcHV0ZTogZnVuY3Rpb24gKHBhc3N3b3JkLCBzYWx0KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgICAgIHZhciBjZmcgPSB0aGlzLmNmZztcblxuXHQgICAgICAgICAgICAvLyBJbml0IEhNQUNcblx0ICAgICAgICAgICAgdmFyIGhtYWMgPSBITUFDLmNyZWF0ZShjZmcuaGFzaGVyLCBwYXNzd29yZCk7XG5cblx0ICAgICAgICAgICAgLy8gSW5pdGlhbCB2YWx1ZXNcblx0ICAgICAgICAgICAgdmFyIGRlcml2ZWRLZXkgPSBXb3JkQXJyYXkuY3JlYXRlKCk7XG5cdCAgICAgICAgICAgIHZhciBibG9ja0luZGV4ID0gV29yZEFycmF5LmNyZWF0ZShbMHgwMDAwMDAwMV0pO1xuXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgZGVyaXZlZEtleVdvcmRzID0gZGVyaXZlZEtleS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIGJsb2NrSW5kZXhXb3JkcyA9IGJsb2NrSW5kZXgud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBrZXlTaXplID0gY2ZnLmtleVNpemU7XG5cdCAgICAgICAgICAgIHZhciBpdGVyYXRpb25zID0gY2ZnLml0ZXJhdGlvbnM7XG5cblx0ICAgICAgICAgICAgLy8gR2VuZXJhdGUga2V5XG5cdCAgICAgICAgICAgIHdoaWxlIChkZXJpdmVkS2V5V29yZHMubGVuZ3RoIDwga2V5U2l6ZSkge1xuXHQgICAgICAgICAgICAgICAgdmFyIGJsb2NrID0gaG1hYy51cGRhdGUoc2FsdCkuZmluYWxpemUoYmxvY2tJbmRleCk7XG5cdCAgICAgICAgICAgICAgICBobWFjLnJlc2V0KCk7XG5cblx0ICAgICAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICAgICAgdmFyIGJsb2NrV29yZHMgPSBibG9jay53b3Jkcztcblx0ICAgICAgICAgICAgICAgIHZhciBibG9ja1dvcmRzTGVuZ3RoID0gYmxvY2tXb3Jkcy5sZW5ndGg7XG5cblx0ICAgICAgICAgICAgICAgIC8vIEl0ZXJhdGlvbnNcblx0ICAgICAgICAgICAgICAgIHZhciBpbnRlcm1lZGlhdGUgPSBibG9jaztcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgaXRlcmF0aW9uczsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaW50ZXJtZWRpYXRlID0gaG1hYy5maW5hbGl6ZShpbnRlcm1lZGlhdGUpO1xuXHQgICAgICAgICAgICAgICAgICAgIGhtYWMucmVzZXQoKTtcblxuXHQgICAgICAgICAgICAgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGludGVybWVkaWF0ZVdvcmRzID0gaW50ZXJtZWRpYXRlLndvcmRzO1xuXG5cdCAgICAgICAgICAgICAgICAgICAgLy8gWE9SIGludGVybWVkaWF0ZSB3aXRoIGJsb2NrXG5cdCAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBibG9ja1dvcmRzTGVuZ3RoOyBqKyspIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tXb3Jkc1tqXSBePSBpbnRlcm1lZGlhdGVXb3Jkc1tqXTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIGRlcml2ZWRLZXkuY29uY2F0KGJsb2NrKTtcblx0ICAgICAgICAgICAgICAgIGJsb2NrSW5kZXhXb3Jkc1swXSsrO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGRlcml2ZWRLZXkuc2lnQnl0ZXMgPSBrZXlTaXplICogNDtcblxuXHQgICAgICAgICAgICByZXR1cm4gZGVyaXZlZEtleTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBDb21wdXRlcyB0aGUgUGFzc3dvcmQtQmFzZWQgS2V5IERlcml2YXRpb24gRnVuY3Rpb24gMi5cblx0ICAgICAqXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IHBhc3N3b3JkIFRoZSBwYXNzd29yZC5cblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gc2FsdCBBIHNhbHQuXG5cdCAgICAgKiBAcGFyYW0ge09iamVjdH0gY2ZnIChPcHRpb25hbCkgVGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyB0byB1c2UgZm9yIHRoaXMgY29tcHV0YXRpb24uXG5cdCAgICAgKlxuXHQgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgZGVyaXZlZCBrZXkuXG5cdCAgICAgKlxuXHQgICAgICogQHN0YXRpY1xuXHQgICAgICpcblx0ICAgICAqIEBleGFtcGxlXG5cdCAgICAgKlxuXHQgICAgICogICAgIHZhciBrZXkgPSBDcnlwdG9KUy5QQktERjIocGFzc3dvcmQsIHNhbHQpO1xuXHQgICAgICogICAgIHZhciBrZXkgPSBDcnlwdG9KUy5QQktERjIocGFzc3dvcmQsIHNhbHQsIHsga2V5U2l6ZTogOCB9KTtcblx0ICAgICAqICAgICB2YXIga2V5ID0gQ3J5cHRvSlMuUEJLREYyKHBhc3N3b3JkLCBzYWx0LCB7IGtleVNpemU6IDgsIGl0ZXJhdGlvbnM6IDEwMDAgfSk7XG5cdCAgICAgKi9cblx0ICAgIEMuUEJLREYyID0gZnVuY3Rpb24gKHBhc3N3b3JkLCBzYWx0LCBjZmcpIHtcblx0ICAgICAgICByZXR1cm4gUEJLREYyLmNyZWF0ZShjZmcpLmNvbXB1dGUocGFzc3dvcmQsIHNhbHQpO1xuXHQgICAgfTtcblx0fSgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUy5QQktERjI7XG5cbn0pKTsiLCAiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSwgdW5kZWYpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIiksIHJlcXVpcmUoXCIuL3NoYTFcIiksIHJlcXVpcmUoXCIuL2htYWNcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiLCBcIi4vc2hhMVwiLCBcIi4vaG1hY1wiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0KGZ1bmN0aW9uICgpIHtcblx0ICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgdmFyIEMgPSBDcnlwdG9KUztcblx0ICAgIHZhciBDX2xpYiA9IEMubGliO1xuXHQgICAgdmFyIEJhc2UgPSBDX2xpYi5CYXNlO1xuXHQgICAgdmFyIFdvcmRBcnJheSA9IENfbGliLldvcmRBcnJheTtcblx0ICAgIHZhciBDX2FsZ28gPSBDLmFsZ287XG5cdCAgICB2YXIgTUQ1ID0gQ19hbGdvLk1ENTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBUaGlzIGtleSBkZXJpdmF0aW9uIGZ1bmN0aW9uIGlzIG1lYW50IHRvIGNvbmZvcm0gd2l0aCBFVlBfQnl0ZXNUb0tleS5cblx0ICAgICAqIHd3dy5vcGVuc3NsLm9yZy9kb2NzL2NyeXB0by9FVlBfQnl0ZXNUb0tleS5odG1sXG5cdCAgICAgKi9cblx0ICAgIHZhciBFdnBLREYgPSBDX2FsZ28uRXZwS0RGID0gQmFzZS5leHRlbmQoe1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbmZpZ3VyYXRpb24gb3B0aW9ucy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBrZXlTaXplIFRoZSBrZXkgc2l6ZSBpbiB3b3JkcyB0byBnZW5lcmF0ZS4gRGVmYXVsdDogNCAoMTI4IGJpdHMpXG5cdCAgICAgICAgICogQHByb3BlcnR5IHtIYXNoZXJ9IGhhc2hlciBUaGUgaGFzaCBhbGdvcml0aG0gdG8gdXNlLiBEZWZhdWx0OiBNRDVcblx0ICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gaXRlcmF0aW9ucyBUaGUgbnVtYmVyIG9mIGl0ZXJhdGlvbnMgdG8gcGVyZm9ybS4gRGVmYXVsdDogMVxuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNmZzogQmFzZS5leHRlbmQoe1xuXHQgICAgICAgICAgICBrZXlTaXplOiAxMjgvMzIsXG5cdCAgICAgICAgICAgIGhhc2hlcjogTUQ1LFxuXHQgICAgICAgICAgICBpdGVyYXRpb25zOiAxXG5cdCAgICAgICAgfSksXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBJbml0aWFsaXplcyBhIG5ld2x5IGNyZWF0ZWQga2V5IGRlcml2YXRpb24gZnVuY3Rpb24uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2ZnIChPcHRpb25hbCkgVGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyB0byB1c2UgZm9yIHRoZSBkZXJpdmF0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIga2RmID0gQ3J5cHRvSlMuYWxnby5FdnBLREYuY3JlYXRlKCk7XG5cdCAgICAgICAgICogICAgIHZhciBrZGYgPSBDcnlwdG9KUy5hbGdvLkV2cEtERi5jcmVhdGUoeyBrZXlTaXplOiA4IH0pO1xuXHQgICAgICAgICAqICAgICB2YXIga2RmID0gQ3J5cHRvSlMuYWxnby5FdnBLREYuY3JlYXRlKHsga2V5U2l6ZTogOCwgaXRlcmF0aW9uczogMTAwMCB9KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBpbml0OiBmdW5jdGlvbiAoY2ZnKSB7XG5cdCAgICAgICAgICAgIHRoaXMuY2ZnID0gdGhpcy5jZmcuZXh0ZW5kKGNmZyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIERlcml2ZXMgYSBrZXkgZnJvbSBhIHBhc3N3b3JkLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBwYXNzd29yZCBUaGUgcGFzc3dvcmQuXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBzYWx0IEEgc2FsdC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGRlcml2ZWQga2V5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIga2V5ID0ga2RmLmNvbXB1dGUocGFzc3dvcmQsIHNhbHQpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNvbXB1dGU6IGZ1bmN0aW9uIChwYXNzd29yZCwgc2FsdCkge1xuXHQgICAgICAgICAgICB2YXIgYmxvY2s7XG5cblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgdmFyIGNmZyA9IHRoaXMuY2ZnO1xuXG5cdCAgICAgICAgICAgIC8vIEluaXQgaGFzaGVyXG5cdCAgICAgICAgICAgIHZhciBoYXNoZXIgPSBjZmcuaGFzaGVyLmNyZWF0ZSgpO1xuXG5cdCAgICAgICAgICAgIC8vIEluaXRpYWwgdmFsdWVzXG5cdCAgICAgICAgICAgIHZhciBkZXJpdmVkS2V5ID0gV29yZEFycmF5LmNyZWF0ZSgpO1xuXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgZGVyaXZlZEtleVdvcmRzID0gZGVyaXZlZEtleS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIGtleVNpemUgPSBjZmcua2V5U2l6ZTtcblx0ICAgICAgICAgICAgdmFyIGl0ZXJhdGlvbnMgPSBjZmcuaXRlcmF0aW9ucztcblxuXHQgICAgICAgICAgICAvLyBHZW5lcmF0ZSBrZXlcblx0ICAgICAgICAgICAgd2hpbGUgKGRlcml2ZWRLZXlXb3Jkcy5sZW5ndGggPCBrZXlTaXplKSB7XG5cdCAgICAgICAgICAgICAgICBpZiAoYmxvY2spIHtcblx0ICAgICAgICAgICAgICAgICAgICBoYXNoZXIudXBkYXRlKGJsb2NrKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIGJsb2NrID0gaGFzaGVyLnVwZGF0ZShwYXNzd29yZCkuZmluYWxpemUoc2FsdCk7XG5cdCAgICAgICAgICAgICAgICBoYXNoZXIucmVzZXQoKTtcblxuXHQgICAgICAgICAgICAgICAgLy8gSXRlcmF0aW9uc1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBpdGVyYXRpb25zOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgICAgICBibG9jayA9IGhhc2hlci5maW5hbGl6ZShibG9jayk7XG5cdCAgICAgICAgICAgICAgICAgICAgaGFzaGVyLnJlc2V0KCk7XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIGRlcml2ZWRLZXkuY29uY2F0KGJsb2NrKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBkZXJpdmVkS2V5LnNpZ0J5dGVzID0ga2V5U2l6ZSAqIDQ7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGRlcml2ZWRLZXk7XG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogRGVyaXZlcyBhIGtleSBmcm9tIGEgcGFzc3dvcmQuXG5cdCAgICAgKlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBwYXNzd29yZCBUaGUgcGFzc3dvcmQuXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IHNhbHQgQSBzYWx0LlxuXHQgICAgICogQHBhcmFtIHtPYmplY3R9IGNmZyAoT3B0aW9uYWwpIFRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgdG8gdXNlIGZvciB0aGlzIGNvbXB1dGF0aW9uLlxuXHQgICAgICpcblx0ICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGRlcml2ZWQga2V5LlxuXHQgICAgICpcblx0ICAgICAqIEBzdGF0aWNcblx0ICAgICAqXG5cdCAgICAgKiBAZXhhbXBsZVxuXHQgICAgICpcblx0ICAgICAqICAgICB2YXIga2V5ID0gQ3J5cHRvSlMuRXZwS0RGKHBhc3N3b3JkLCBzYWx0KTtcblx0ICAgICAqICAgICB2YXIga2V5ID0gQ3J5cHRvSlMuRXZwS0RGKHBhc3N3b3JkLCBzYWx0LCB7IGtleVNpemU6IDggfSk7XG5cdCAgICAgKiAgICAgdmFyIGtleSA9IENyeXB0b0pTLkV2cEtERihwYXNzd29yZCwgc2FsdCwgeyBrZXlTaXplOiA4LCBpdGVyYXRpb25zOiAxMDAwIH0pO1xuXHQgICAgICovXG5cdCAgICBDLkV2cEtERiA9IGZ1bmN0aW9uIChwYXNzd29yZCwgc2FsdCwgY2ZnKSB7XG5cdCAgICAgICAgcmV0dXJuIEV2cEtERi5jcmVhdGUoY2ZnKS5jb21wdXRlKHBhc3N3b3JkLCBzYWx0KTtcblx0ICAgIH07XG5cdH0oKSk7XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlMuRXZwS0RGO1xuXG59KSk7IiwgIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnksIHVuZGVmKSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpLCByZXF1aXJlKFwiLi9ldnBrZGZcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiLCBcIi4vZXZwa2RmXCJdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcblxuXHQvKipcblx0ICogQ2lwaGVyIGNvcmUgY29tcG9uZW50cy5cblx0ICovXG5cdENyeXB0b0pTLmxpYi5DaXBoZXIgfHwgKGZ1bmN0aW9uICh1bmRlZmluZWQpIHtcblx0ICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgdmFyIEMgPSBDcnlwdG9KUztcblx0ICAgIHZhciBDX2xpYiA9IEMubGliO1xuXHQgICAgdmFyIEJhc2UgPSBDX2xpYi5CYXNlO1xuXHQgICAgdmFyIFdvcmRBcnJheSA9IENfbGliLldvcmRBcnJheTtcblx0ICAgIHZhciBCdWZmZXJlZEJsb2NrQWxnb3JpdGhtID0gQ19saWIuQnVmZmVyZWRCbG9ja0FsZ29yaXRobTtcblx0ICAgIHZhciBDX2VuYyA9IEMuZW5jO1xuXHQgICAgdmFyIFV0ZjggPSBDX2VuYy5VdGY4O1xuXHQgICAgdmFyIEJhc2U2NCA9IENfZW5jLkJhc2U2NDtcblx0ICAgIHZhciBDX2FsZ28gPSBDLmFsZ287XG5cdCAgICB2YXIgRXZwS0RGID0gQ19hbGdvLkV2cEtERjtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBYnN0cmFjdCBiYXNlIGNpcGhlciB0ZW1wbGF0ZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcHJvcGVydHkge251bWJlcn0ga2V5U2l6ZSBUaGlzIGNpcGhlcidzIGtleSBzaXplLiBEZWZhdWx0OiA0ICgxMjggYml0cylcblx0ICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBpdlNpemUgVGhpcyBjaXBoZXIncyBJViBzaXplLiBEZWZhdWx0OiA0ICgxMjggYml0cylcblx0ICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBfRU5DX1hGT1JNX01PREUgQSBjb25zdGFudCByZXByZXNlbnRpbmcgZW5jcnlwdGlvbiBtb2RlLlxuXHQgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IF9ERUNfWEZPUk1fTU9ERSBBIGNvbnN0YW50IHJlcHJlc2VudGluZyBkZWNyeXB0aW9uIG1vZGUuXG5cdCAgICAgKi9cblx0ICAgIHZhciBDaXBoZXIgPSBDX2xpYi5DaXBoZXIgPSBCdWZmZXJlZEJsb2NrQWxnb3JpdGhtLmV4dGVuZCh7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29uZmlndXJhdGlvbiBvcHRpb25zLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHByb3BlcnR5IHtXb3JkQXJyYXl9IGl2IFRoZSBJViB0byB1c2UgZm9yIHRoaXMgb3BlcmF0aW9uLlxuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNmZzogQmFzZS5leHRlbmQoKSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENyZWF0ZXMgdGhpcyBjaXBoZXIgaW4gZW5jcnlwdGlvbiBtb2RlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl9IGtleSBUaGUga2V5LlxuXHQgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjZmcgKE9wdGlvbmFsKSBUaGUgY29uZmlndXJhdGlvbiBvcHRpb25zIHRvIHVzZSBmb3IgdGhpcyBvcGVyYXRpb24uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtDaXBoZXJ9IEEgY2lwaGVyIGluc3RhbmNlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgY2lwaGVyID0gQ3J5cHRvSlMuYWxnby5BRVMuY3JlYXRlRW5jcnlwdG9yKGtleVdvcmRBcnJheSwgeyBpdjogaXZXb3JkQXJyYXkgfSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY3JlYXRlRW5jcnlwdG9yOiBmdW5jdGlvbiAoa2V5LCBjZmcpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlKHRoaXMuX0VOQ19YRk9STV9NT0RFLCBrZXksIGNmZyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENyZWF0ZXMgdGhpcyBjaXBoZXIgaW4gZGVjcnlwdGlvbiBtb2RlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl9IGtleSBUaGUga2V5LlxuXHQgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjZmcgKE9wdGlvbmFsKSBUaGUgY29uZmlndXJhdGlvbiBvcHRpb25zIHRvIHVzZSBmb3IgdGhpcyBvcGVyYXRpb24uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtDaXBoZXJ9IEEgY2lwaGVyIGluc3RhbmNlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgY2lwaGVyID0gQ3J5cHRvSlMuYWxnby5BRVMuY3JlYXRlRGVjcnlwdG9yKGtleVdvcmRBcnJheSwgeyBpdjogaXZXb3JkQXJyYXkgfSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY3JlYXRlRGVjcnlwdG9yOiBmdW5jdGlvbiAoa2V5LCBjZmcpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlKHRoaXMuX0RFQ19YRk9STV9NT0RFLCBrZXksIGNmZyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEluaXRpYWxpemVzIGEgbmV3bHkgY3JlYXRlZCBjaXBoZXIuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0geGZvcm1Nb2RlIEVpdGhlciB0aGUgZW5jcnlwdGlvbiBvciBkZWNyeXB0aW9uIHRyYW5zb3JtYXRpb24gbW9kZSBjb25zdGFudC5cblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0ga2V5IFRoZSBrZXkuXG5cdCAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNmZyAoT3B0aW9uYWwpIFRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgdG8gdXNlIGZvciB0aGlzIG9wZXJhdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGNpcGhlciA9IENyeXB0b0pTLmFsZ28uQUVTLmNyZWF0ZShDcnlwdG9KUy5hbGdvLkFFUy5fRU5DX1hGT1JNX01PREUsIGtleVdvcmRBcnJheSwgeyBpdjogaXZXb3JkQXJyYXkgfSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgaW5pdDogZnVuY3Rpb24gKHhmb3JtTW9kZSwga2V5LCBjZmcpIHtcblx0ICAgICAgICAgICAgLy8gQXBwbHkgY29uZmlnIGRlZmF1bHRzXG5cdCAgICAgICAgICAgIHRoaXMuY2ZnID0gdGhpcy5jZmcuZXh0ZW5kKGNmZyk7XG5cblx0ICAgICAgICAgICAgLy8gU3RvcmUgdHJhbnNmb3JtIG1vZGUgYW5kIGtleVxuXHQgICAgICAgICAgICB0aGlzLl94Zm9ybU1vZGUgPSB4Zm9ybU1vZGU7XG5cdCAgICAgICAgICAgIHRoaXMuX2tleSA9IGtleTtcblxuXHQgICAgICAgICAgICAvLyBTZXQgaW5pdGlhbCB2YWx1ZXNcblx0ICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBSZXNldHMgdGhpcyBjaXBoZXIgdG8gaXRzIGluaXRpYWwgc3RhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIGNpcGhlci5yZXNldCgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIFJlc2V0IGRhdGEgYnVmZmVyXG5cdCAgICAgICAgICAgIEJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0ucmVzZXQuY2FsbCh0aGlzKTtcblxuXHQgICAgICAgICAgICAvLyBQZXJmb3JtIGNvbmNyZXRlLWNpcGhlciBsb2dpY1xuXHQgICAgICAgICAgICB0aGlzLl9kb1Jlc2V0KCk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEFkZHMgZGF0YSB0byBiZSBlbmNyeXB0ZWQgb3IgZGVjcnlwdGVkLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBkYXRhVXBkYXRlIFRoZSBkYXRhIHRvIGVuY3J5cHQgb3IgZGVjcnlwdC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGRhdGEgYWZ0ZXIgcHJvY2Vzc2luZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGVuY3J5cHRlZCA9IGNpcGhlci5wcm9jZXNzKCdkYXRhJyk7XG5cdCAgICAgICAgICogICAgIHZhciBlbmNyeXB0ZWQgPSBjaXBoZXIucHJvY2Vzcyh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHByb2Nlc3M6IGZ1bmN0aW9uIChkYXRhVXBkYXRlKSB7XG5cdCAgICAgICAgICAgIC8vIEFwcGVuZFxuXHQgICAgICAgICAgICB0aGlzLl9hcHBlbmQoZGF0YVVwZGF0ZSk7XG5cblx0ICAgICAgICAgICAgLy8gUHJvY2VzcyBhdmFpbGFibGUgYmxvY2tzXG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLl9wcm9jZXNzKCk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEZpbmFsaXplcyB0aGUgZW5jcnlwdGlvbiBvciBkZWNyeXB0aW9uIHByb2Nlc3MuXG5cdCAgICAgICAgICogTm90ZSB0aGF0IHRoZSBmaW5hbGl6ZSBvcGVyYXRpb24gaXMgZWZmZWN0aXZlbHkgYSBkZXN0cnVjdGl2ZSwgcmVhZC1vbmNlIG9wZXJhdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gZGF0YVVwZGF0ZSBUaGUgZmluYWwgZGF0YSB0byBlbmNyeXB0IG9yIGRlY3J5cHQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBkYXRhIGFmdGVyIGZpbmFsIHByb2Nlc3NpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBlbmNyeXB0ZWQgPSBjaXBoZXIuZmluYWxpemUoKTtcblx0ICAgICAgICAgKiAgICAgdmFyIGVuY3J5cHRlZCA9IGNpcGhlci5maW5hbGl6ZSgnZGF0YScpO1xuXHQgICAgICAgICAqICAgICB2YXIgZW5jcnlwdGVkID0gY2lwaGVyLmZpbmFsaXplKHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgZmluYWxpemU6IGZ1bmN0aW9uIChkYXRhVXBkYXRlKSB7XG5cdCAgICAgICAgICAgIC8vIEZpbmFsIGRhdGEgdXBkYXRlXG5cdCAgICAgICAgICAgIGlmIChkYXRhVXBkYXRlKSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLl9hcHBlbmQoZGF0YVVwZGF0ZSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBQZXJmb3JtIGNvbmNyZXRlLWNpcGhlciBsb2dpY1xuXHQgICAgICAgICAgICB2YXIgZmluYWxQcm9jZXNzZWREYXRhID0gdGhpcy5fZG9GaW5hbGl6ZSgpO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBmaW5hbFByb2Nlc3NlZERhdGE7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIGtleVNpemU6IDEyOC8zMixcblxuXHQgICAgICAgIGl2U2l6ZTogMTI4LzMyLFxuXG5cdCAgICAgICAgX0VOQ19YRk9STV9NT0RFOiAxLFxuXG5cdCAgICAgICAgX0RFQ19YRk9STV9NT0RFOiAyLFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBzaG9ydGN1dCBmdW5jdGlvbnMgdG8gYSBjaXBoZXIncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtDaXBoZXJ9IGNpcGhlciBUaGUgY2lwaGVyIHRvIGNyZWF0ZSBhIGhlbHBlciBmb3IuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IEFuIG9iamVjdCB3aXRoIGVuY3J5cHQgYW5kIGRlY3J5cHQgc2hvcnRjdXQgZnVuY3Rpb25zLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgQUVTID0gQ3J5cHRvSlMubGliLkNpcGhlci5fY3JlYXRlSGVscGVyKENyeXB0b0pTLmFsZ28uQUVTKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBfY3JlYXRlSGVscGVyOiAoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICBmdW5jdGlvbiBzZWxlY3RDaXBoZXJTdHJhdGVneShrZXkpIHtcblx0ICAgICAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5ID09ICdzdHJpbmcnKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFBhc3N3b3JkQmFzZWRDaXBoZXI7XG5cdCAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiBTZXJpYWxpemFibGVDaXBoZXI7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGNpcGhlcikge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHtcblx0ICAgICAgICAgICAgICAgICAgICBlbmNyeXB0OiBmdW5jdGlvbiAobWVzc2FnZSwga2V5LCBjZmcpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdENpcGhlclN0cmF0ZWd5KGtleSkuZW5jcnlwdChjaXBoZXIsIG1lc3NhZ2UsIGtleSwgY2ZnKTtcblx0ICAgICAgICAgICAgICAgICAgICB9LFxuXG5cdCAgICAgICAgICAgICAgICAgICAgZGVjcnlwdDogZnVuY3Rpb24gKGNpcGhlcnRleHQsIGtleSwgY2ZnKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3RDaXBoZXJTdHJhdGVneShrZXkpLmRlY3J5cHQoY2lwaGVyLCBjaXBoZXJ0ZXh0LCBrZXksIGNmZyk7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfTtcblx0ICAgICAgICAgICAgfTtcblx0ICAgICAgICB9KCkpXG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBYnN0cmFjdCBiYXNlIHN0cmVhbSBjaXBoZXIgdGVtcGxhdGUuXG5cdCAgICAgKlxuXHQgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGJsb2NrU2l6ZSBUaGUgbnVtYmVyIG9mIDMyLWJpdCB3b3JkcyB0aGlzIGNpcGhlciBvcGVyYXRlcyBvbi4gRGVmYXVsdDogMSAoMzIgYml0cylcblx0ICAgICAqL1xuXHQgICAgdmFyIFN0cmVhbUNpcGhlciA9IENfbGliLlN0cmVhbUNpcGhlciA9IENpcGhlci5leHRlbmQoe1xuXHQgICAgICAgIF9kb0ZpbmFsaXplOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIFByb2Nlc3MgcGFydGlhbCBibG9ja3Ncblx0ICAgICAgICAgICAgdmFyIGZpbmFsUHJvY2Vzc2VkQmxvY2tzID0gdGhpcy5fcHJvY2VzcyghISdmbHVzaCcpO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBmaW5hbFByb2Nlc3NlZEJsb2Nrcztcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgYmxvY2tTaXplOiAxXG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBNb2RlIG5hbWVzcGFjZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIENfbW9kZSA9IEMubW9kZSA9IHt9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIEFic3RyYWN0IGJhc2UgYmxvY2sgY2lwaGVyIG1vZGUgdGVtcGxhdGUuXG5cdCAgICAgKi9cblx0ICAgIHZhciBCbG9ja0NpcGhlck1vZGUgPSBDX2xpYi5CbG9ja0NpcGhlck1vZGUgPSBCYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyB0aGlzIG1vZGUgZm9yIGVuY3J5cHRpb24uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0NpcGhlcn0gY2lwaGVyIEEgYmxvY2sgY2lwaGVyIGluc3RhbmNlLlxuXHQgICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IGl2IFRoZSBJViB3b3Jkcy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIG1vZGUgPSBDcnlwdG9KUy5tb2RlLkNCQy5jcmVhdGVFbmNyeXB0b3IoY2lwaGVyLCBpdi53b3Jkcyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY3JlYXRlRW5jcnlwdG9yOiBmdW5jdGlvbiAoY2lwaGVyLCBpdikge1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5FbmNyeXB0b3IuY3JlYXRlKGNpcGhlciwgaXYpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIHRoaXMgbW9kZSBmb3IgZGVjcnlwdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7Q2lwaGVyfSBjaXBoZXIgQSBibG9jayBjaXBoZXIgaW5zdGFuY2UuXG5cdCAgICAgICAgICogQHBhcmFtIHtBcnJheX0gaXYgVGhlIElWIHdvcmRzLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgbW9kZSA9IENyeXB0b0pTLm1vZGUuQ0JDLmNyZWF0ZURlY3J5cHRvcihjaXBoZXIsIGl2LndvcmRzKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjcmVhdGVEZWNyeXB0b3I6IGZ1bmN0aW9uIChjaXBoZXIsIGl2KSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLkRlY3J5cHRvci5jcmVhdGUoY2lwaGVyLCBpdik7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEluaXRpYWxpemVzIGEgbmV3bHkgY3JlYXRlZCBtb2RlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtDaXBoZXJ9IGNpcGhlciBBIGJsb2NrIGNpcGhlciBpbnN0YW5jZS5cblx0ICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBpdiBUaGUgSVYgd29yZHMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBtb2RlID0gQ3J5cHRvSlMubW9kZS5DQkMuRW5jcnlwdG9yLmNyZWF0ZShjaXBoZXIsIGl2LndvcmRzKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBpbml0OiBmdW5jdGlvbiAoY2lwaGVyLCBpdikge1xuXHQgICAgICAgICAgICB0aGlzLl9jaXBoZXIgPSBjaXBoZXI7XG5cdCAgICAgICAgICAgIHRoaXMuX2l2ID0gaXY7XG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogQ2lwaGVyIEJsb2NrIENoYWluaW5nIG1vZGUuXG5cdCAgICAgKi9cblx0ICAgIHZhciBDQkMgPSBDX21vZGUuQ0JDID0gKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBBYnN0cmFjdCBiYXNlIENCQyBtb2RlLlxuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHZhciBDQkMgPSBCbG9ja0NpcGhlck1vZGUuZXh0ZW5kKCk7XG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDQkMgZW5jcnlwdG9yLlxuXHQgICAgICAgICAqL1xuXHQgICAgICAgIENCQy5FbmNyeXB0b3IgPSBDQkMuZXh0ZW5kKHtcblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIFByb2Nlc3NlcyB0aGUgZGF0YSBibG9jayBhdCBvZmZzZXQuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IHdvcmRzIFRoZSBkYXRhIHdvcmRzIHRvIG9wZXJhdGUgb24uXG5cdCAgICAgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgVGhlIG9mZnNldCB3aGVyZSB0aGUgYmxvY2sgc3RhcnRzLlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgbW9kZS5wcm9jZXNzQmxvY2soZGF0YS53b3Jkcywgb2Zmc2V0KTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIHByb2Nlc3NCbG9jazogZnVuY3Rpb24gKHdvcmRzLCBvZmZzZXQpIHtcblx0ICAgICAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICAgICAgdmFyIGNpcGhlciA9IHRoaXMuX2NpcGhlcjtcblx0ICAgICAgICAgICAgICAgIHZhciBibG9ja1NpemUgPSBjaXBoZXIuYmxvY2tTaXplO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBYT1IgYW5kIGVuY3J5cHRcblx0ICAgICAgICAgICAgICAgIHhvckJsb2NrLmNhbGwodGhpcywgd29yZHMsIG9mZnNldCwgYmxvY2tTaXplKTtcblx0ICAgICAgICAgICAgICAgIGNpcGhlci5lbmNyeXB0QmxvY2sod29yZHMsIG9mZnNldCk7XG5cblx0ICAgICAgICAgICAgICAgIC8vIFJlbWVtYmVyIHRoaXMgYmxvY2sgdG8gdXNlIHdpdGggbmV4dCBibG9ja1xuXHQgICAgICAgICAgICAgICAgdGhpcy5fcHJldkJsb2NrID0gd29yZHMuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBibG9ja1NpemUpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSk7XG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDQkMgZGVjcnlwdG9yLlxuXHQgICAgICAgICAqL1xuXHQgICAgICAgIENCQy5EZWNyeXB0b3IgPSBDQkMuZXh0ZW5kKHtcblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIFByb2Nlc3NlcyB0aGUgZGF0YSBibG9jayBhdCBvZmZzZXQuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IHdvcmRzIFRoZSBkYXRhIHdvcmRzIHRvIG9wZXJhdGUgb24uXG5cdCAgICAgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgVGhlIG9mZnNldCB3aGVyZSB0aGUgYmxvY2sgc3RhcnRzLlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgbW9kZS5wcm9jZXNzQmxvY2soZGF0YS53b3Jkcywgb2Zmc2V0KTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIHByb2Nlc3NCbG9jazogZnVuY3Rpb24gKHdvcmRzLCBvZmZzZXQpIHtcblx0ICAgICAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICAgICAgdmFyIGNpcGhlciA9IHRoaXMuX2NpcGhlcjtcblx0ICAgICAgICAgICAgICAgIHZhciBibG9ja1NpemUgPSBjaXBoZXIuYmxvY2tTaXplO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBSZW1lbWJlciB0aGlzIGJsb2NrIHRvIHVzZSB3aXRoIG5leHQgYmxvY2tcblx0ICAgICAgICAgICAgICAgIHZhciB0aGlzQmxvY2sgPSB3b3Jkcy5zbGljZShvZmZzZXQsIG9mZnNldCArIGJsb2NrU2l6ZSk7XG5cblx0ICAgICAgICAgICAgICAgIC8vIERlY3J5cHQgYW5kIFhPUlxuXHQgICAgICAgICAgICAgICAgY2lwaGVyLmRlY3J5cHRCbG9jayh3b3Jkcywgb2Zmc2V0KTtcblx0ICAgICAgICAgICAgICAgIHhvckJsb2NrLmNhbGwodGhpcywgd29yZHMsIG9mZnNldCwgYmxvY2tTaXplKTtcblxuXHQgICAgICAgICAgICAgICAgLy8gVGhpcyBibG9jayBiZWNvbWVzIHRoZSBwcmV2aW91cyBibG9ja1xuXHQgICAgICAgICAgICAgICAgdGhpcy5fcHJldkJsb2NrID0gdGhpc0Jsb2NrO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSk7XG5cblx0ICAgICAgICBmdW5jdGlvbiB4b3JCbG9jayh3b3Jkcywgb2Zmc2V0LCBibG9ja1NpemUpIHtcblx0ICAgICAgICAgICAgdmFyIGJsb2NrO1xuXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgICAgIHZhciBpdiA9IHRoaXMuX2l2O1xuXG5cdCAgICAgICAgICAgIC8vIENob29zZSBtaXhpbmcgYmxvY2tcblx0ICAgICAgICAgICAgaWYgKGl2KSB7XG5cdCAgICAgICAgICAgICAgICBibG9jayA9IGl2O1xuXG5cdCAgICAgICAgICAgICAgICAvLyBSZW1vdmUgSVYgZm9yIHN1YnNlcXVlbnQgYmxvY2tzXG5cdCAgICAgICAgICAgICAgICB0aGlzLl9pdiA9IHVuZGVmaW5lZDtcblx0ICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIGJsb2NrID0gdGhpcy5fcHJldkJsb2NrO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gWE9SIGJsb2Nrc1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJsb2NrU2l6ZTsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICB3b3Jkc1tvZmZzZXQgKyBpXSBePSBibG9ja1tpXTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblxuXHQgICAgICAgIHJldHVybiBDQkM7XG5cdCAgICB9KCkpO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFBhZGRpbmcgbmFtZXNwYWNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQ19wYWQgPSBDLnBhZCA9IHt9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIFBLQ1MgIzUvNyBwYWRkaW5nIHN0cmF0ZWd5LlxuXHQgICAgICovXG5cdCAgICB2YXIgUGtjczcgPSBDX3BhZC5Qa2NzNyA9IHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBQYWRzIGRhdGEgdXNpbmcgdGhlIGFsZ29yaXRobSBkZWZpbmVkIGluIFBLQ1MgIzUvNy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSBkYXRhIFRoZSBkYXRhIHRvIHBhZC5cblx0ICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gYmxvY2tTaXplIFRoZSBtdWx0aXBsZSB0aGF0IHRoZSBkYXRhIHNob3VsZCBiZSBwYWRkZWQgdG8uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIENyeXB0b0pTLnBhZC5Qa2NzNy5wYWQod29yZEFycmF5LCA0KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBwYWQ6IGZ1bmN0aW9uIChkYXRhLCBibG9ja1NpemUpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgdmFyIGJsb2NrU2l6ZUJ5dGVzID0gYmxvY2tTaXplICogNDtcblxuXHQgICAgICAgICAgICAvLyBDb3VudCBwYWRkaW5nIGJ5dGVzXG5cdCAgICAgICAgICAgIHZhciBuUGFkZGluZ0J5dGVzID0gYmxvY2tTaXplQnl0ZXMgLSBkYXRhLnNpZ0J5dGVzICUgYmxvY2tTaXplQnl0ZXM7XG5cblx0ICAgICAgICAgICAgLy8gQ3JlYXRlIHBhZGRpbmcgd29yZFxuXHQgICAgICAgICAgICB2YXIgcGFkZGluZ1dvcmQgPSAoblBhZGRpbmdCeXRlcyA8PCAyNCkgfCAoblBhZGRpbmdCeXRlcyA8PCAxNikgfCAoblBhZGRpbmdCeXRlcyA8PCA4KSB8IG5QYWRkaW5nQnl0ZXM7XG5cblx0ICAgICAgICAgICAgLy8gQ3JlYXRlIHBhZGRpbmdcblx0ICAgICAgICAgICAgdmFyIHBhZGRpbmdXb3JkcyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5QYWRkaW5nQnl0ZXM7IGkgKz0gNCkge1xuXHQgICAgICAgICAgICAgICAgcGFkZGluZ1dvcmRzLnB1c2gocGFkZGluZ1dvcmQpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIHZhciBwYWRkaW5nID0gV29yZEFycmF5LmNyZWF0ZShwYWRkaW5nV29yZHMsIG5QYWRkaW5nQnl0ZXMpO1xuXG5cdCAgICAgICAgICAgIC8vIEFkZCBwYWRkaW5nXG5cdCAgICAgICAgICAgIGRhdGEuY29uY2F0KHBhZGRpbmcpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBVbnBhZHMgZGF0YSB0aGF0IGhhZCBiZWVuIHBhZGRlZCB1c2luZyB0aGUgYWxnb3JpdGhtIGRlZmluZWQgaW4gUEtDUyAjNS83LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl9IGRhdGEgVGhlIGRhdGEgdG8gdW5wYWQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIENyeXB0b0pTLnBhZC5Qa2NzNy51bnBhZCh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHVucGFkOiBmdW5jdGlvbiAoZGF0YSkge1xuXHQgICAgICAgICAgICAvLyBHZXQgbnVtYmVyIG9mIHBhZGRpbmcgYnl0ZXMgZnJvbSBsYXN0IGJ5dGVcblx0ICAgICAgICAgICAgdmFyIG5QYWRkaW5nQnl0ZXMgPSBkYXRhLndvcmRzWyhkYXRhLnNpZ0J5dGVzIC0gMSkgPj4+IDJdICYgMHhmZjtcblxuXHQgICAgICAgICAgICAvLyBSZW1vdmUgcGFkZGluZ1xuXHQgICAgICAgICAgICBkYXRhLnNpZ0J5dGVzIC09IG5QYWRkaW5nQnl0ZXM7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBYnN0cmFjdCBiYXNlIGJsb2NrIGNpcGhlciB0ZW1wbGF0ZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcHJvcGVydHkge251bWJlcn0gYmxvY2tTaXplIFRoZSBudW1iZXIgb2YgMzItYml0IHdvcmRzIHRoaXMgY2lwaGVyIG9wZXJhdGVzIG9uLiBEZWZhdWx0OiA0ICgxMjggYml0cylcblx0ICAgICAqL1xuXHQgICAgdmFyIEJsb2NrQ2lwaGVyID0gQ19saWIuQmxvY2tDaXBoZXIgPSBDaXBoZXIuZXh0ZW5kKHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb25maWd1cmF0aW9uIG9wdGlvbnMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcHJvcGVydHkge01vZGV9IG1vZGUgVGhlIGJsb2NrIG1vZGUgdG8gdXNlLiBEZWZhdWx0OiBDQkNcblx0ICAgICAgICAgKiBAcHJvcGVydHkge1BhZGRpbmd9IHBhZGRpbmcgVGhlIHBhZGRpbmcgc3RyYXRlZ3kgdG8gdXNlLiBEZWZhdWx0OiBQa2NzN1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNmZzogQ2lwaGVyLmNmZy5leHRlbmQoe1xuXHQgICAgICAgICAgICBtb2RlOiBDQkMsXG5cdCAgICAgICAgICAgIHBhZGRpbmc6IFBrY3M3XG5cdCAgICAgICAgfSksXG5cblx0ICAgICAgICByZXNldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB2YXIgbW9kZUNyZWF0b3I7XG5cblx0ICAgICAgICAgICAgLy8gUmVzZXQgY2lwaGVyXG5cdCAgICAgICAgICAgIENpcGhlci5yZXNldC5jYWxsKHRoaXMpO1xuXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgY2ZnID0gdGhpcy5jZmc7XG5cdCAgICAgICAgICAgIHZhciBpdiA9IGNmZy5pdjtcblx0ICAgICAgICAgICAgdmFyIG1vZGUgPSBjZmcubW9kZTtcblxuXHQgICAgICAgICAgICAvLyBSZXNldCBibG9jayBtb2RlXG5cdCAgICAgICAgICAgIGlmICh0aGlzLl94Zm9ybU1vZGUgPT0gdGhpcy5fRU5DX1hGT1JNX01PREUpIHtcblx0ICAgICAgICAgICAgICAgIG1vZGVDcmVhdG9yID0gbW9kZS5jcmVhdGVFbmNyeXB0b3I7XG5cdCAgICAgICAgICAgIH0gZWxzZSAvKiBpZiAodGhpcy5feGZvcm1Nb2RlID09IHRoaXMuX0RFQ19YRk9STV9NT0RFKSAqLyB7XG5cdCAgICAgICAgICAgICAgICBtb2RlQ3JlYXRvciA9IG1vZGUuY3JlYXRlRGVjcnlwdG9yO1xuXHQgICAgICAgICAgICAgICAgLy8gS2VlcCBhdCBsZWFzdCBvbmUgYmxvY2sgaW4gdGhlIGJ1ZmZlciBmb3IgdW5wYWRkaW5nXG5cdCAgICAgICAgICAgICAgICB0aGlzLl9taW5CdWZmZXJTaXplID0gMTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIGlmICh0aGlzLl9tb2RlICYmIHRoaXMuX21vZGUuX19jcmVhdG9yID09IG1vZGVDcmVhdG9yKSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLl9tb2RlLmluaXQodGhpcywgaXYgJiYgaXYud29yZHMpO1xuXHQgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgdGhpcy5fbW9kZSA9IG1vZGVDcmVhdG9yLmNhbGwobW9kZSwgdGhpcywgaXYgJiYgaXYud29yZHMpO1xuXHQgICAgICAgICAgICAgICAgdGhpcy5fbW9kZS5fX2NyZWF0b3IgPSBtb2RlQ3JlYXRvcjtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfZG9Qcm9jZXNzQmxvY2s6IGZ1bmN0aW9uICh3b3Jkcywgb2Zmc2V0KSB7XG5cdCAgICAgICAgICAgIHRoaXMuX21vZGUucHJvY2Vzc0Jsb2NrKHdvcmRzLCBvZmZzZXQpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfZG9GaW5hbGl6ZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB2YXIgZmluYWxQcm9jZXNzZWRCbG9ja3M7XG5cblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgdmFyIHBhZGRpbmcgPSB0aGlzLmNmZy5wYWRkaW5nO1xuXG5cdCAgICAgICAgICAgIC8vIEZpbmFsaXplXG5cdCAgICAgICAgICAgIGlmICh0aGlzLl94Zm9ybU1vZGUgPT0gdGhpcy5fRU5DX1hGT1JNX01PREUpIHtcblx0ICAgICAgICAgICAgICAgIC8vIFBhZCBkYXRhXG5cdCAgICAgICAgICAgICAgICBwYWRkaW5nLnBhZCh0aGlzLl9kYXRhLCB0aGlzLmJsb2NrU2l6ZSk7XG5cblx0ICAgICAgICAgICAgICAgIC8vIFByb2Nlc3MgZmluYWwgYmxvY2tzXG5cdCAgICAgICAgICAgICAgICBmaW5hbFByb2Nlc3NlZEJsb2NrcyA9IHRoaXMuX3Byb2Nlc3MoISEnZmx1c2gnKTtcblx0ICAgICAgICAgICAgfSBlbHNlIC8qIGlmICh0aGlzLl94Zm9ybU1vZGUgPT0gdGhpcy5fREVDX1hGT1JNX01PREUpICovIHtcblx0ICAgICAgICAgICAgICAgIC8vIFByb2Nlc3MgZmluYWwgYmxvY2tzXG5cdCAgICAgICAgICAgICAgICBmaW5hbFByb2Nlc3NlZEJsb2NrcyA9IHRoaXMuX3Byb2Nlc3MoISEnZmx1c2gnKTtcblxuXHQgICAgICAgICAgICAgICAgLy8gVW5wYWQgZGF0YVxuXHQgICAgICAgICAgICAgICAgcGFkZGluZy51bnBhZChmaW5hbFByb2Nlc3NlZEJsb2Nrcyk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gZmluYWxQcm9jZXNzZWRCbG9ja3M7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIGJsb2NrU2l6ZTogMTI4LzMyXG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBIGNvbGxlY3Rpb24gb2YgY2lwaGVyIHBhcmFtZXRlcnMuXG5cdCAgICAgKlxuXHQgICAgICogQHByb3BlcnR5IHtXb3JkQXJyYXl9IGNpcGhlcnRleHQgVGhlIHJhdyBjaXBoZXJ0ZXh0LlxuXHQgICAgICogQHByb3BlcnR5IHtXb3JkQXJyYXl9IGtleSBUaGUga2V5IHRvIHRoaXMgY2lwaGVydGV4dC5cblx0ICAgICAqIEBwcm9wZXJ0eSB7V29yZEFycmF5fSBpdiBUaGUgSVYgdXNlZCBpbiB0aGUgY2lwaGVyaW5nIG9wZXJhdGlvbi5cblx0ICAgICAqIEBwcm9wZXJ0eSB7V29yZEFycmF5fSBzYWx0IFRoZSBzYWx0IHVzZWQgd2l0aCBhIGtleSBkZXJpdmF0aW9uIGZ1bmN0aW9uLlxuXHQgICAgICogQHByb3BlcnR5IHtDaXBoZXJ9IGFsZ29yaXRobSBUaGUgY2lwaGVyIGFsZ29yaXRobS5cblx0ICAgICAqIEBwcm9wZXJ0eSB7TW9kZX0gbW9kZSBUaGUgYmxvY2sgbW9kZSB1c2VkIGluIHRoZSBjaXBoZXJpbmcgb3BlcmF0aW9uLlxuXHQgICAgICogQHByb3BlcnR5IHtQYWRkaW5nfSBwYWRkaW5nIFRoZSBwYWRkaW5nIHNjaGVtZSB1c2VkIGluIHRoZSBjaXBoZXJpbmcgb3BlcmF0aW9uLlxuXHQgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGJsb2NrU2l6ZSBUaGUgYmxvY2sgc2l6ZSBvZiB0aGUgY2lwaGVyLlxuXHQgICAgICogQHByb3BlcnR5IHtGb3JtYXR9IGZvcm1hdHRlciBUaGUgZGVmYXVsdCBmb3JtYXR0aW5nIHN0cmF0ZWd5IHRvIGNvbnZlcnQgdGhpcyBjaXBoZXIgcGFyYW1zIG9iamVjdCB0byBhIHN0cmluZy5cblx0ICAgICAqL1xuXHQgICAgdmFyIENpcGhlclBhcmFtcyA9IENfbGliLkNpcGhlclBhcmFtcyA9IEJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBJbml0aWFsaXplcyBhIG5ld2x5IGNyZWF0ZWQgY2lwaGVyIHBhcmFtcyBvYmplY3QuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2lwaGVyUGFyYW1zIEFuIG9iamVjdCB3aXRoIGFueSBvZiB0aGUgcG9zc2libGUgY2lwaGVyIHBhcmFtZXRlcnMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBjaXBoZXJQYXJhbXMgPSBDcnlwdG9KUy5saWIuQ2lwaGVyUGFyYW1zLmNyZWF0ZSh7XG5cdCAgICAgICAgICogICAgICAgICBjaXBoZXJ0ZXh0OiBjaXBoZXJ0ZXh0V29yZEFycmF5LFxuXHQgICAgICAgICAqICAgICAgICAga2V5OiBrZXlXb3JkQXJyYXksXG5cdCAgICAgICAgICogICAgICAgICBpdjogaXZXb3JkQXJyYXksXG5cdCAgICAgICAgICogICAgICAgICBzYWx0OiBzYWx0V29yZEFycmF5LFxuXHQgICAgICAgICAqICAgICAgICAgYWxnb3JpdGhtOiBDcnlwdG9KUy5hbGdvLkFFUyxcblx0ICAgICAgICAgKiAgICAgICAgIG1vZGU6IENyeXB0b0pTLm1vZGUuQ0JDLFxuXHQgICAgICAgICAqICAgICAgICAgcGFkZGluZzogQ3J5cHRvSlMucGFkLlBLQ1M3LFxuXHQgICAgICAgICAqICAgICAgICAgYmxvY2tTaXplOiA0LFxuXHQgICAgICAgICAqICAgICAgICAgZm9ybWF0dGVyOiBDcnlwdG9KUy5mb3JtYXQuT3BlblNTTFxuXHQgICAgICAgICAqICAgICB9KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBpbml0OiBmdW5jdGlvbiAoY2lwaGVyUGFyYW1zKSB7XG5cdCAgICAgICAgICAgIHRoaXMubWl4SW4oY2lwaGVyUGFyYW1zKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgdGhpcyBjaXBoZXIgcGFyYW1zIG9iamVjdCB0byBhIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7Rm9ybWF0fSBmb3JtYXR0ZXIgKE9wdGlvbmFsKSBUaGUgZm9ybWF0dGluZyBzdHJhdGVneSB0byB1c2UuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBzdHJpbmdpZmllZCBjaXBoZXIgcGFyYW1zLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHRocm93cyBFcnJvciBJZiBuZWl0aGVyIHRoZSBmb3JtYXR0ZXIgbm9yIHRoZSBkZWZhdWx0IGZvcm1hdHRlciBpcyBzZXQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBzdHJpbmcgPSBjaXBoZXJQYXJhbXMgKyAnJztcblx0ICAgICAgICAgKiAgICAgdmFyIHN0cmluZyA9IGNpcGhlclBhcmFtcy50b1N0cmluZygpO1xuXHQgICAgICAgICAqICAgICB2YXIgc3RyaW5nID0gY2lwaGVyUGFyYW1zLnRvU3RyaW5nKENyeXB0b0pTLmZvcm1hdC5PcGVuU1NMKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICB0b1N0cmluZzogZnVuY3Rpb24gKGZvcm1hdHRlcikge1xuXHQgICAgICAgICAgICByZXR1cm4gKGZvcm1hdHRlciB8fCB0aGlzLmZvcm1hdHRlcikuc3RyaW5naWZ5KHRoaXMpO1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIEZvcm1hdCBuYW1lc3BhY2UuXG5cdCAgICAgKi9cblx0ICAgIHZhciBDX2Zvcm1hdCA9IEMuZm9ybWF0ID0ge307XG5cblx0ICAgIC8qKlxuXHQgICAgICogT3BlblNTTCBmb3JtYXR0aW5nIHN0cmF0ZWd5LlxuXHQgICAgICovXG5cdCAgICB2YXIgT3BlblNTTEZvcm1hdHRlciA9IENfZm9ybWF0Lk9wZW5TU0wgPSB7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSBjaXBoZXIgcGFyYW1zIG9iamVjdCB0byBhbiBPcGVuU1NMLWNvbXBhdGlibGUgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtDaXBoZXJQYXJhbXN9IGNpcGhlclBhcmFtcyBUaGUgY2lwaGVyIHBhcmFtcyBvYmplY3QuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBPcGVuU1NMLWNvbXBhdGlibGUgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgb3BlblNTTFN0cmluZyA9IENyeXB0b0pTLmZvcm1hdC5PcGVuU1NMLnN0cmluZ2lmeShjaXBoZXJQYXJhbXMpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gKGNpcGhlclBhcmFtcykge1xuXHQgICAgICAgICAgICB2YXIgd29yZEFycmF5O1xuXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgY2lwaGVydGV4dCA9IGNpcGhlclBhcmFtcy5jaXBoZXJ0ZXh0O1xuXHQgICAgICAgICAgICB2YXIgc2FsdCA9IGNpcGhlclBhcmFtcy5zYWx0O1xuXG5cdCAgICAgICAgICAgIC8vIEZvcm1hdFxuXHQgICAgICAgICAgICBpZiAoc2FsdCkge1xuXHQgICAgICAgICAgICAgICAgd29yZEFycmF5ID0gV29yZEFycmF5LmNyZWF0ZShbMHg1MzYxNmM3NCwgMHg2NTY0NWY1Zl0pLmNvbmNhdChzYWx0KS5jb25jYXQoY2lwaGVydGV4dCk7XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICB3b3JkQXJyYXkgPSBjaXBoZXJ0ZXh0O1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIHdvcmRBcnJheS50b1N0cmluZyhCYXNlNjQpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhbiBPcGVuU1NMLWNvbXBhdGlibGUgc3RyaW5nIHRvIGEgY2lwaGVyIHBhcmFtcyBvYmplY3QuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3BlblNTTFN0ciBUaGUgT3BlblNTTC1jb21wYXRpYmxlIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge0NpcGhlclBhcmFtc30gVGhlIGNpcGhlciBwYXJhbXMgb2JqZWN0LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgY2lwaGVyUGFyYW1zID0gQ3J5cHRvSlMuZm9ybWF0Lk9wZW5TU0wucGFyc2Uob3BlblNTTFN0cmluZyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcGFyc2U6IGZ1bmN0aW9uIChvcGVuU1NMU3RyKSB7XG5cdCAgICAgICAgICAgIHZhciBzYWx0O1xuXG5cdCAgICAgICAgICAgIC8vIFBhcnNlIGJhc2U2NFxuXHQgICAgICAgICAgICB2YXIgY2lwaGVydGV4dCA9IEJhc2U2NC5wYXJzZShvcGVuU1NMU3RyKTtcblxuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgY2lwaGVydGV4dFdvcmRzID0gY2lwaGVydGV4dC53b3JkcztcblxuXHQgICAgICAgICAgICAvLyBUZXN0IGZvciBzYWx0XG5cdCAgICAgICAgICAgIGlmIChjaXBoZXJ0ZXh0V29yZHNbMF0gPT0gMHg1MzYxNmM3NCAmJiBjaXBoZXJ0ZXh0V29yZHNbMV0gPT0gMHg2NTY0NWY1Zikge1xuXHQgICAgICAgICAgICAgICAgLy8gRXh0cmFjdCBzYWx0XG5cdCAgICAgICAgICAgICAgICBzYWx0ID0gV29yZEFycmF5LmNyZWF0ZShjaXBoZXJ0ZXh0V29yZHMuc2xpY2UoMiwgNCkpO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBSZW1vdmUgc2FsdCBmcm9tIGNpcGhlcnRleHRcblx0ICAgICAgICAgICAgICAgIGNpcGhlcnRleHRXb3Jkcy5zcGxpY2UoMCwgNCk7XG5cdCAgICAgICAgICAgICAgICBjaXBoZXJ0ZXh0LnNpZ0J5dGVzIC09IDE2O1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIENpcGhlclBhcmFtcy5jcmVhdGUoeyBjaXBoZXJ0ZXh0OiBjaXBoZXJ0ZXh0LCBzYWx0OiBzYWx0IH0pO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIC8qKlxuXHQgICAgICogQSBjaXBoZXIgd3JhcHBlciB0aGF0IHJldHVybnMgY2lwaGVydGV4dCBhcyBhIHNlcmlhbGl6YWJsZSBjaXBoZXIgcGFyYW1zIG9iamVjdC5cblx0ICAgICAqL1xuXHQgICAgdmFyIFNlcmlhbGl6YWJsZUNpcGhlciA9IENfbGliLlNlcmlhbGl6YWJsZUNpcGhlciA9IEJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb25maWd1cmF0aW9uIG9wdGlvbnMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcHJvcGVydHkge0Zvcm1hdHRlcn0gZm9ybWF0IFRoZSBmb3JtYXR0aW5nIHN0cmF0ZWd5IHRvIGNvbnZlcnQgY2lwaGVyIHBhcmFtIG9iamVjdHMgdG8gYW5kIGZyb20gYSBzdHJpbmcuIERlZmF1bHQ6IE9wZW5TU0xcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjZmc6IEJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAgICAgZm9ybWF0OiBPcGVuU1NMRm9ybWF0dGVyXG5cdCAgICAgICAgfSksXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBFbmNyeXB0cyBhIG1lc3NhZ2UuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0NpcGhlcn0gY2lwaGVyIFRoZSBjaXBoZXIgYWxnb3JpdGhtIHRvIHVzZS5cblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gZW5jcnlwdC5cblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0ga2V5IFRoZSBrZXkuXG5cdCAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNmZyAoT3B0aW9uYWwpIFRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgdG8gdXNlIGZvciB0aGlzIG9wZXJhdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge0NpcGhlclBhcmFtc30gQSBjaXBoZXIgcGFyYW1zIG9iamVjdC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGNpcGhlcnRleHRQYXJhbXMgPSBDcnlwdG9KUy5saWIuU2VyaWFsaXphYmxlQ2lwaGVyLmVuY3J5cHQoQ3J5cHRvSlMuYWxnby5BRVMsIG1lc3NhZ2UsIGtleSk7XG5cdCAgICAgICAgICogICAgIHZhciBjaXBoZXJ0ZXh0UGFyYW1zID0gQ3J5cHRvSlMubGliLlNlcmlhbGl6YWJsZUNpcGhlci5lbmNyeXB0KENyeXB0b0pTLmFsZ28uQUVTLCBtZXNzYWdlLCBrZXksIHsgaXY6IGl2IH0pO1xuXHQgICAgICAgICAqICAgICB2YXIgY2lwaGVydGV4dFBhcmFtcyA9IENyeXB0b0pTLmxpYi5TZXJpYWxpemFibGVDaXBoZXIuZW5jcnlwdChDcnlwdG9KUy5hbGdvLkFFUywgbWVzc2FnZSwga2V5LCB7IGl2OiBpdiwgZm9ybWF0OiBDcnlwdG9KUy5mb3JtYXQuT3BlblNTTCB9KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBlbmNyeXB0OiBmdW5jdGlvbiAoY2lwaGVyLCBtZXNzYWdlLCBrZXksIGNmZykge1xuXHQgICAgICAgICAgICAvLyBBcHBseSBjb25maWcgZGVmYXVsdHNcblx0ICAgICAgICAgICAgY2ZnID0gdGhpcy5jZmcuZXh0ZW5kKGNmZyk7XG5cblx0ICAgICAgICAgICAgLy8gRW5jcnlwdFxuXHQgICAgICAgICAgICB2YXIgZW5jcnlwdG9yID0gY2lwaGVyLmNyZWF0ZUVuY3J5cHRvcihrZXksIGNmZyk7XG5cdCAgICAgICAgICAgIHZhciBjaXBoZXJ0ZXh0ID0gZW5jcnlwdG9yLmZpbmFsaXplKG1lc3NhZ2UpO1xuXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgICAgIHZhciBjaXBoZXJDZmcgPSBlbmNyeXB0b3IuY2ZnO1xuXG5cdCAgICAgICAgICAgIC8vIENyZWF0ZSBhbmQgcmV0dXJuIHNlcmlhbGl6YWJsZSBjaXBoZXIgcGFyYW1zXG5cdCAgICAgICAgICAgIHJldHVybiBDaXBoZXJQYXJhbXMuY3JlYXRlKHtcblx0ICAgICAgICAgICAgICAgIGNpcGhlcnRleHQ6IGNpcGhlcnRleHQsXG5cdCAgICAgICAgICAgICAgICBrZXk6IGtleSxcblx0ICAgICAgICAgICAgICAgIGl2OiBjaXBoZXJDZmcuaXYsXG5cdCAgICAgICAgICAgICAgICBhbGdvcml0aG06IGNpcGhlcixcblx0ICAgICAgICAgICAgICAgIG1vZGU6IGNpcGhlckNmZy5tb2RlLFxuXHQgICAgICAgICAgICAgICAgcGFkZGluZzogY2lwaGVyQ2ZnLnBhZGRpbmcsXG5cdCAgICAgICAgICAgICAgICBibG9ja1NpemU6IGNpcGhlci5ibG9ja1NpemUsXG5cdCAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGNmZy5mb3JtYXRcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIERlY3J5cHRzIHNlcmlhbGl6ZWQgY2lwaGVydGV4dC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7Q2lwaGVyfSBjaXBoZXIgVGhlIGNpcGhlciBhbGdvcml0aG0gdG8gdXNlLlxuXHQgICAgICAgICAqIEBwYXJhbSB7Q2lwaGVyUGFyYW1zfHN0cmluZ30gY2lwaGVydGV4dCBUaGUgY2lwaGVydGV4dCB0byBkZWNyeXB0LlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSBrZXkgVGhlIGtleS5cblx0ICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2ZnIChPcHRpb25hbCkgVGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyB0byB1c2UgZm9yIHRoaXMgb3BlcmF0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgcGxhaW50ZXh0LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgcGxhaW50ZXh0ID0gQ3J5cHRvSlMubGliLlNlcmlhbGl6YWJsZUNpcGhlci5kZWNyeXB0KENyeXB0b0pTLmFsZ28uQUVTLCBmb3JtYXR0ZWRDaXBoZXJ0ZXh0LCBrZXksIHsgaXY6IGl2LCBmb3JtYXQ6IENyeXB0b0pTLmZvcm1hdC5PcGVuU1NMIH0pO1xuXHQgICAgICAgICAqICAgICB2YXIgcGxhaW50ZXh0ID0gQ3J5cHRvSlMubGliLlNlcmlhbGl6YWJsZUNpcGhlci5kZWNyeXB0KENyeXB0b0pTLmFsZ28uQUVTLCBjaXBoZXJ0ZXh0UGFyYW1zLCBrZXksIHsgaXY6IGl2LCBmb3JtYXQ6IENyeXB0b0pTLmZvcm1hdC5PcGVuU1NMIH0pO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGRlY3J5cHQ6IGZ1bmN0aW9uIChjaXBoZXIsIGNpcGhlcnRleHQsIGtleSwgY2ZnKSB7XG5cdCAgICAgICAgICAgIC8vIEFwcGx5IGNvbmZpZyBkZWZhdWx0c1xuXHQgICAgICAgICAgICBjZmcgPSB0aGlzLmNmZy5leHRlbmQoY2ZnKTtcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0IHN0cmluZyB0byBDaXBoZXJQYXJhbXNcblx0ICAgICAgICAgICAgY2lwaGVydGV4dCA9IHRoaXMuX3BhcnNlKGNpcGhlcnRleHQsIGNmZy5mb3JtYXQpO1xuXG5cdCAgICAgICAgICAgIC8vIERlY3J5cHRcblx0ICAgICAgICAgICAgdmFyIHBsYWludGV4dCA9IGNpcGhlci5jcmVhdGVEZWNyeXB0b3Ioa2V5LCBjZmcpLmZpbmFsaXplKGNpcGhlcnRleHQuY2lwaGVydGV4dCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIHBsYWludGV4dDtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgc2VyaWFsaXplZCBjaXBoZXJ0ZXh0IHRvIENpcGhlclBhcmFtcyxcblx0ICAgICAgICAgKiBlbHNlIGFzc3VtZWQgQ2lwaGVyUGFyYW1zIGFscmVhZHkgYW5kIHJldHVybnMgY2lwaGVydGV4dCB1bmNoYW5nZWQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0NpcGhlclBhcmFtc3xzdHJpbmd9IGNpcGhlcnRleHQgVGhlIGNpcGhlcnRleHQuXG5cdCAgICAgICAgICogQHBhcmFtIHtGb3JtYXR0ZXJ9IGZvcm1hdCBUaGUgZm9ybWF0dGluZyBzdHJhdGVneSB0byB1c2UgdG8gcGFyc2Ugc2VyaWFsaXplZCBjaXBoZXJ0ZXh0LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7Q2lwaGVyUGFyYW1zfSBUaGUgdW5zZXJpYWxpemVkIGNpcGhlcnRleHQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBjaXBoZXJ0ZXh0UGFyYW1zID0gQ3J5cHRvSlMubGliLlNlcmlhbGl6YWJsZUNpcGhlci5fcGFyc2UoY2lwaGVydGV4dFN0cmluZ09yUGFyYW1zLCBmb3JtYXQpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIF9wYXJzZTogZnVuY3Rpb24gKGNpcGhlcnRleHQsIGZvcm1hdCkge1xuXHQgICAgICAgICAgICBpZiAodHlwZW9mIGNpcGhlcnRleHQgPT0gJ3N0cmluZycpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBmb3JtYXQucGFyc2UoY2lwaGVydGV4dCwgdGhpcyk7XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4gY2lwaGVydGV4dDtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIEtleSBkZXJpdmF0aW9uIGZ1bmN0aW9uIG5hbWVzcGFjZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIENfa2RmID0gQy5rZGYgPSB7fTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBPcGVuU1NMIGtleSBkZXJpdmF0aW9uIGZ1bmN0aW9uLlxuXHQgICAgICovXG5cdCAgICB2YXIgT3BlblNTTEtkZiA9IENfa2RmLk9wZW5TU0wgPSB7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogRGVyaXZlcyBhIGtleSBhbmQgSVYgZnJvbSBhIHBhc3N3b3JkLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHBhc3N3b3JkIFRoZSBwYXNzd29yZCB0byBkZXJpdmUgZnJvbS5cblx0ICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0ga2V5U2l6ZSBUaGUgc2l6ZSBpbiB3b3JkcyBvZiB0aGUga2V5IHRvIGdlbmVyYXRlLlxuXHQgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpdlNpemUgVGhlIHNpemUgaW4gd29yZHMgb2YgdGhlIElWIHRvIGdlbmVyYXRlLlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gc2FsdCAoT3B0aW9uYWwpIEEgNjQtYml0IHNhbHQgdG8gdXNlLiBJZiBvbWl0dGVkLCBhIHNhbHQgd2lsbCBiZSBnZW5lcmF0ZWQgcmFuZG9tbHkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtDaXBoZXJQYXJhbXN9IEEgY2lwaGVyIHBhcmFtcyBvYmplY3Qgd2l0aCB0aGUga2V5LCBJViwgYW5kIHNhbHQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBkZXJpdmVkUGFyYW1zID0gQ3J5cHRvSlMua2RmLk9wZW5TU0wuZXhlY3V0ZSgnUGFzc3dvcmQnLCAyNTYvMzIsIDEyOC8zMik7XG5cdCAgICAgICAgICogICAgIHZhciBkZXJpdmVkUGFyYW1zID0gQ3J5cHRvSlMua2RmLk9wZW5TU0wuZXhlY3V0ZSgnUGFzc3dvcmQnLCAyNTYvMzIsIDEyOC8zMiwgJ3NhbHRzYWx0Jyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgZXhlY3V0ZTogZnVuY3Rpb24gKHBhc3N3b3JkLCBrZXlTaXplLCBpdlNpemUsIHNhbHQpIHtcblx0ICAgICAgICAgICAgLy8gR2VuZXJhdGUgcmFuZG9tIHNhbHRcblx0ICAgICAgICAgICAgaWYgKCFzYWx0KSB7XG5cdCAgICAgICAgICAgICAgICBzYWx0ID0gV29yZEFycmF5LnJhbmRvbSg2NC84KTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIERlcml2ZSBrZXkgYW5kIElWXG5cdCAgICAgICAgICAgIHZhciBrZXkgPSBFdnBLREYuY3JlYXRlKHsga2V5U2l6ZToga2V5U2l6ZSArIGl2U2l6ZSB9KS5jb21wdXRlKHBhc3N3b3JkLCBzYWx0KTtcblxuXHQgICAgICAgICAgICAvLyBTZXBhcmF0ZSBrZXkgYW5kIElWXG5cdCAgICAgICAgICAgIHZhciBpdiA9IFdvcmRBcnJheS5jcmVhdGUoa2V5LndvcmRzLnNsaWNlKGtleVNpemUpLCBpdlNpemUgKiA0KTtcblx0ICAgICAgICAgICAga2V5LnNpZ0J5dGVzID0ga2V5U2l6ZSAqIDQ7XG5cblx0ICAgICAgICAgICAgLy8gUmV0dXJuIHBhcmFtc1xuXHQgICAgICAgICAgICByZXR1cm4gQ2lwaGVyUGFyYW1zLmNyZWF0ZSh7IGtleToga2V5LCBpdjogaXYsIHNhbHQ6IHNhbHQgfSk7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBIHNlcmlhbGl6YWJsZSBjaXBoZXIgd3JhcHBlciB0aGF0IGRlcml2ZXMgdGhlIGtleSBmcm9tIGEgcGFzc3dvcmQsXG5cdCAgICAgKiBhbmQgcmV0dXJucyBjaXBoZXJ0ZXh0IGFzIGEgc2VyaWFsaXphYmxlIGNpcGhlciBwYXJhbXMgb2JqZWN0LlxuXHQgICAgICovXG5cdCAgICB2YXIgUGFzc3dvcmRCYXNlZENpcGhlciA9IENfbGliLlBhc3N3b3JkQmFzZWRDaXBoZXIgPSBTZXJpYWxpemFibGVDaXBoZXIuZXh0ZW5kKHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb25maWd1cmF0aW9uIG9wdGlvbnMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcHJvcGVydHkge0tERn0ga2RmIFRoZSBrZXkgZGVyaXZhdGlvbiBmdW5jdGlvbiB0byB1c2UgdG8gZ2VuZXJhdGUgYSBrZXkgYW5kIElWIGZyb20gYSBwYXNzd29yZC4gRGVmYXVsdDogT3BlblNTTFxuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNmZzogU2VyaWFsaXphYmxlQ2lwaGVyLmNmZy5leHRlbmQoe1xuXHQgICAgICAgICAgICBrZGY6IE9wZW5TU0xLZGZcblx0ICAgICAgICB9KSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEVuY3J5cHRzIGEgbWVzc2FnZSB1c2luZyBhIHBhc3N3b3JkLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtDaXBoZXJ9IGNpcGhlciBUaGUgY2lwaGVyIGFsZ29yaXRobSB0byB1c2UuXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGVuY3J5cHQuXG5cdCAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHBhc3N3b3JkIFRoZSBwYXNzd29yZC5cblx0ICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2ZnIChPcHRpb25hbCkgVGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyB0byB1c2UgZm9yIHRoaXMgb3BlcmF0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7Q2lwaGVyUGFyYW1zfSBBIGNpcGhlciBwYXJhbXMgb2JqZWN0LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgY2lwaGVydGV4dFBhcmFtcyA9IENyeXB0b0pTLmxpYi5QYXNzd29yZEJhc2VkQ2lwaGVyLmVuY3J5cHQoQ3J5cHRvSlMuYWxnby5BRVMsIG1lc3NhZ2UsICdwYXNzd29yZCcpO1xuXHQgICAgICAgICAqICAgICB2YXIgY2lwaGVydGV4dFBhcmFtcyA9IENyeXB0b0pTLmxpYi5QYXNzd29yZEJhc2VkQ2lwaGVyLmVuY3J5cHQoQ3J5cHRvSlMuYWxnby5BRVMsIG1lc3NhZ2UsICdwYXNzd29yZCcsIHsgZm9ybWF0OiBDcnlwdG9KUy5mb3JtYXQuT3BlblNTTCB9KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBlbmNyeXB0OiBmdW5jdGlvbiAoY2lwaGVyLCBtZXNzYWdlLCBwYXNzd29yZCwgY2ZnKSB7XG5cdCAgICAgICAgICAgIC8vIEFwcGx5IGNvbmZpZyBkZWZhdWx0c1xuXHQgICAgICAgICAgICBjZmcgPSB0aGlzLmNmZy5leHRlbmQoY2ZnKTtcblxuXHQgICAgICAgICAgICAvLyBEZXJpdmUga2V5IGFuZCBvdGhlciBwYXJhbXNcblx0ICAgICAgICAgICAgdmFyIGRlcml2ZWRQYXJhbXMgPSBjZmcua2RmLmV4ZWN1dGUocGFzc3dvcmQsIGNpcGhlci5rZXlTaXplLCBjaXBoZXIuaXZTaXplKTtcblxuXHQgICAgICAgICAgICAvLyBBZGQgSVYgdG8gY29uZmlnXG5cdCAgICAgICAgICAgIGNmZy5pdiA9IGRlcml2ZWRQYXJhbXMuaXY7XG5cblx0ICAgICAgICAgICAgLy8gRW5jcnlwdFxuXHQgICAgICAgICAgICB2YXIgY2lwaGVydGV4dCA9IFNlcmlhbGl6YWJsZUNpcGhlci5lbmNyeXB0LmNhbGwodGhpcywgY2lwaGVyLCBtZXNzYWdlLCBkZXJpdmVkUGFyYW1zLmtleSwgY2ZnKTtcblxuXHQgICAgICAgICAgICAvLyBNaXggaW4gZGVyaXZlZCBwYXJhbXNcblx0ICAgICAgICAgICAgY2lwaGVydGV4dC5taXhJbihkZXJpdmVkUGFyYW1zKTtcblxuXHQgICAgICAgICAgICByZXR1cm4gY2lwaGVydGV4dDtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogRGVjcnlwdHMgc2VyaWFsaXplZCBjaXBoZXJ0ZXh0IHVzaW5nIGEgcGFzc3dvcmQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0NpcGhlcn0gY2lwaGVyIFRoZSBjaXBoZXIgYWxnb3JpdGhtIHRvIHVzZS5cblx0ICAgICAgICAgKiBAcGFyYW0ge0NpcGhlclBhcmFtc3xzdHJpbmd9IGNpcGhlcnRleHQgVGhlIGNpcGhlcnRleHQgdG8gZGVjcnlwdC5cblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFzc3dvcmQgVGhlIHBhc3N3b3JkLlxuXHQgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjZmcgKE9wdGlvbmFsKSBUaGUgY29uZmlndXJhdGlvbiBvcHRpb25zIHRvIHVzZSBmb3IgdGhpcyBvcGVyYXRpb24uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBwbGFpbnRleHQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBwbGFpbnRleHQgPSBDcnlwdG9KUy5saWIuUGFzc3dvcmRCYXNlZENpcGhlci5kZWNyeXB0KENyeXB0b0pTLmFsZ28uQUVTLCBmb3JtYXR0ZWRDaXBoZXJ0ZXh0LCAncGFzc3dvcmQnLCB7IGZvcm1hdDogQ3J5cHRvSlMuZm9ybWF0Lk9wZW5TU0wgfSk7XG5cdCAgICAgICAgICogICAgIHZhciBwbGFpbnRleHQgPSBDcnlwdG9KUy5saWIuUGFzc3dvcmRCYXNlZENpcGhlci5kZWNyeXB0KENyeXB0b0pTLmFsZ28uQUVTLCBjaXBoZXJ0ZXh0UGFyYW1zLCAncGFzc3dvcmQnLCB7IGZvcm1hdDogQ3J5cHRvSlMuZm9ybWF0Lk9wZW5TU0wgfSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgZGVjcnlwdDogZnVuY3Rpb24gKGNpcGhlciwgY2lwaGVydGV4dCwgcGFzc3dvcmQsIGNmZykge1xuXHQgICAgICAgICAgICAvLyBBcHBseSBjb25maWcgZGVmYXVsdHNcblx0ICAgICAgICAgICAgY2ZnID0gdGhpcy5jZmcuZXh0ZW5kKGNmZyk7XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydCBzdHJpbmcgdG8gQ2lwaGVyUGFyYW1zXG5cdCAgICAgICAgICAgIGNpcGhlcnRleHQgPSB0aGlzLl9wYXJzZShjaXBoZXJ0ZXh0LCBjZmcuZm9ybWF0KTtcblxuXHQgICAgICAgICAgICAvLyBEZXJpdmUga2V5IGFuZCBvdGhlciBwYXJhbXNcblx0ICAgICAgICAgICAgdmFyIGRlcml2ZWRQYXJhbXMgPSBjZmcua2RmLmV4ZWN1dGUocGFzc3dvcmQsIGNpcGhlci5rZXlTaXplLCBjaXBoZXIuaXZTaXplLCBjaXBoZXJ0ZXh0LnNhbHQpO1xuXG5cdCAgICAgICAgICAgIC8vIEFkZCBJViB0byBjb25maWdcblx0ICAgICAgICAgICAgY2ZnLml2ID0gZGVyaXZlZFBhcmFtcy5pdjtcblxuXHQgICAgICAgICAgICAvLyBEZWNyeXB0XG5cdCAgICAgICAgICAgIHZhciBwbGFpbnRleHQgPSBTZXJpYWxpemFibGVDaXBoZXIuZGVjcnlwdC5jYWxsKHRoaXMsIGNpcGhlciwgY2lwaGVydGV4dCwgZGVyaXZlZFBhcmFtcy5rZXksIGNmZyk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIHBsYWludGV4dDtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblx0fSgpKTtcblxuXG59KSk7IiwgIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnksIHVuZGVmKSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpLCByZXF1aXJlKFwiLi9jaXBoZXItY29yZVwiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCIsIFwiLi9jaXBoZXItY29yZVwiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0LyoqXG5cdCAqIENpcGhlciBGZWVkYmFjayBibG9jayBtb2RlLlxuXHQgKi9cblx0Q3J5cHRvSlMubW9kZS5DRkIgPSAoZnVuY3Rpb24gKCkge1xuXHQgICAgdmFyIENGQiA9IENyeXB0b0pTLmxpYi5CbG9ja0NpcGhlck1vZGUuZXh0ZW5kKCk7XG5cblx0ICAgIENGQi5FbmNyeXB0b3IgPSBDRkIuZXh0ZW5kKHtcblx0ICAgICAgICBwcm9jZXNzQmxvY2s6IGZ1bmN0aW9uICh3b3Jkcywgb2Zmc2V0KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgY2lwaGVyID0gdGhpcy5fY2lwaGVyO1xuXHQgICAgICAgICAgICB2YXIgYmxvY2tTaXplID0gY2lwaGVyLmJsb2NrU2l6ZTtcblxuXHQgICAgICAgICAgICBnZW5lcmF0ZUtleXN0cmVhbUFuZEVuY3J5cHQuY2FsbCh0aGlzLCB3b3Jkcywgb2Zmc2V0LCBibG9ja1NpemUsIGNpcGhlcik7XG5cblx0ICAgICAgICAgICAgLy8gUmVtZW1iZXIgdGhpcyBibG9jayB0byB1c2Ugd2l0aCBuZXh0IGJsb2NrXG5cdCAgICAgICAgICAgIHRoaXMuX3ByZXZCbG9jayA9IHdvcmRzLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgYmxvY2tTaXplKTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgQ0ZCLkRlY3J5cHRvciA9IENGQi5leHRlbmQoe1xuXHQgICAgICAgIHByb2Nlc3NCbG9jazogZnVuY3Rpb24gKHdvcmRzLCBvZmZzZXQpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBjaXBoZXIgPSB0aGlzLl9jaXBoZXI7XG5cdCAgICAgICAgICAgIHZhciBibG9ja1NpemUgPSBjaXBoZXIuYmxvY2tTaXplO1xuXG5cdCAgICAgICAgICAgIC8vIFJlbWVtYmVyIHRoaXMgYmxvY2sgdG8gdXNlIHdpdGggbmV4dCBibG9ja1xuXHQgICAgICAgICAgICB2YXIgdGhpc0Jsb2NrID0gd29yZHMuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBibG9ja1NpemUpO1xuXG5cdCAgICAgICAgICAgIGdlbmVyYXRlS2V5c3RyZWFtQW5kRW5jcnlwdC5jYWxsKHRoaXMsIHdvcmRzLCBvZmZzZXQsIGJsb2NrU2l6ZSwgY2lwaGVyKTtcblxuXHQgICAgICAgICAgICAvLyBUaGlzIGJsb2NrIGJlY29tZXMgdGhlIHByZXZpb3VzIGJsb2NrXG5cdCAgICAgICAgICAgIHRoaXMuX3ByZXZCbG9jayA9IHRoaXNCbG9jaztcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgZnVuY3Rpb24gZ2VuZXJhdGVLZXlzdHJlYW1BbmRFbmNyeXB0KHdvcmRzLCBvZmZzZXQsIGJsb2NrU2l6ZSwgY2lwaGVyKSB7XG5cdCAgICAgICAgdmFyIGtleXN0cmVhbTtcblxuXHQgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgdmFyIGl2ID0gdGhpcy5faXY7XG5cblx0ICAgICAgICAvLyBHZW5lcmF0ZSBrZXlzdHJlYW1cblx0ICAgICAgICBpZiAoaXYpIHtcblx0ICAgICAgICAgICAga2V5c3RyZWFtID0gaXYuc2xpY2UoMCk7XG5cblx0ICAgICAgICAgICAgLy8gUmVtb3ZlIElWIGZvciBzdWJzZXF1ZW50IGJsb2Nrc1xuXHQgICAgICAgICAgICB0aGlzLl9pdiA9IHVuZGVmaW5lZDtcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICBrZXlzdHJlYW0gPSB0aGlzLl9wcmV2QmxvY2s7XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGNpcGhlci5lbmNyeXB0QmxvY2soa2V5c3RyZWFtLCAwKTtcblxuXHQgICAgICAgIC8vIEVuY3J5cHRcblx0ICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJsb2NrU2l6ZTsgaSsrKSB7XG5cdCAgICAgICAgICAgIHdvcmRzW29mZnNldCArIGldIF49IGtleXN0cmVhbVtpXTtcblx0ICAgICAgICB9XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiBDRkI7XG5cdH0oKSk7XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlMubW9kZS5DRkI7XG5cbn0pKTsiLCAiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSwgdW5kZWYpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIiksIHJlcXVpcmUoXCIuL2NpcGhlci1jb3JlXCIpKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXCIuL2NvcmVcIiwgXCIuL2NpcGhlci1jb3JlXCJdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcblxuXHQvKipcblx0ICogQ291bnRlciBibG9jayBtb2RlLlxuXHQgKi9cblx0Q3J5cHRvSlMubW9kZS5DVFIgPSAoZnVuY3Rpb24gKCkge1xuXHQgICAgdmFyIENUUiA9IENyeXB0b0pTLmxpYi5CbG9ja0NpcGhlck1vZGUuZXh0ZW5kKCk7XG5cblx0ICAgIHZhciBFbmNyeXB0b3IgPSBDVFIuRW5jcnlwdG9yID0gQ1RSLmV4dGVuZCh7XG5cdCAgICAgICAgcHJvY2Vzc0Jsb2NrOiBmdW5jdGlvbiAod29yZHMsIG9mZnNldCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIGNpcGhlciA9IHRoaXMuX2NpcGhlclxuXHQgICAgICAgICAgICB2YXIgYmxvY2tTaXplID0gY2lwaGVyLmJsb2NrU2l6ZTtcblx0ICAgICAgICAgICAgdmFyIGl2ID0gdGhpcy5faXY7XG5cdCAgICAgICAgICAgIHZhciBjb3VudGVyID0gdGhpcy5fY291bnRlcjtcblxuXHQgICAgICAgICAgICAvLyBHZW5lcmF0ZSBrZXlzdHJlYW1cblx0ICAgICAgICAgICAgaWYgKGl2KSB7XG5cdCAgICAgICAgICAgICAgICBjb3VudGVyID0gdGhpcy5fY291bnRlciA9IGl2LnNsaWNlKDApO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBSZW1vdmUgSVYgZm9yIHN1YnNlcXVlbnQgYmxvY2tzXG5cdCAgICAgICAgICAgICAgICB0aGlzLl9pdiA9IHVuZGVmaW5lZDtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB2YXIga2V5c3RyZWFtID0gY291bnRlci5zbGljZSgwKTtcblx0ICAgICAgICAgICAgY2lwaGVyLmVuY3J5cHRCbG9jayhrZXlzdHJlYW0sIDApO1xuXG5cdCAgICAgICAgICAgIC8vIEluY3JlbWVudCBjb3VudGVyXG5cdCAgICAgICAgICAgIGNvdW50ZXJbYmxvY2tTaXplIC0gMV0gPSAoY291bnRlcltibG9ja1NpemUgLSAxXSArIDEpIHwgMFxuXG5cdCAgICAgICAgICAgIC8vIEVuY3J5cHRcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBibG9ja1NpemU7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgd29yZHNbb2Zmc2V0ICsgaV0gXj0ga2V5c3RyZWFtW2ldO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgIENUUi5EZWNyeXB0b3IgPSBFbmNyeXB0b3I7XG5cblx0ICAgIHJldHVybiBDVFI7XG5cdH0oKSk7XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlMubW9kZS5DVFI7XG5cbn0pKTsiLCAiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSwgdW5kZWYpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIiksIHJlcXVpcmUoXCIuL2NpcGhlci1jb3JlXCIpKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXCIuL2NvcmVcIiwgXCIuL2NpcGhlci1jb3JlXCJdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcblxuXHQvKiogQHByZXNlcnZlXG5cdCAqIENvdW50ZXIgYmxvY2sgbW9kZSBjb21wYXRpYmxlIHdpdGggIERyIEJyaWFuIEdsYWRtYW4gZmlsZWVuYy5jXG5cdCAqIGRlcml2ZWQgZnJvbSBDcnlwdG9KUy5tb2RlLkNUUlxuXHQgKiBKYW4gSHJ1YnkgamhydWJ5LndlYkBnbWFpbC5jb21cblx0ICovXG5cdENyeXB0b0pTLm1vZGUuQ1RSR2xhZG1hbiA9IChmdW5jdGlvbiAoKSB7XG5cdCAgICB2YXIgQ1RSR2xhZG1hbiA9IENyeXB0b0pTLmxpYi5CbG9ja0NpcGhlck1vZGUuZXh0ZW5kKCk7XG5cblx0XHRmdW5jdGlvbiBpbmNXb3JkKHdvcmQpXG5cdFx0e1xuXHRcdFx0aWYgKCgod29yZCA+PiAyNCkgJiAweGZmKSA9PT0gMHhmZikgeyAvL292ZXJmbG93XG5cdFx0XHR2YXIgYjEgPSAod29yZCA+PiAxNikmMHhmZjtcblx0XHRcdHZhciBiMiA9ICh3b3JkID4+IDgpJjB4ZmY7XG5cdFx0XHR2YXIgYjMgPSB3b3JkICYgMHhmZjtcblxuXHRcdFx0aWYgKGIxID09PSAweGZmKSAvLyBvdmVyZmxvdyBiMVxuXHRcdFx0e1xuXHRcdFx0YjEgPSAwO1xuXHRcdFx0aWYgKGIyID09PSAweGZmKVxuXHRcdFx0e1xuXHRcdFx0XHRiMiA9IDA7XG5cdFx0XHRcdGlmIChiMyA9PT0gMHhmZilcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGIzID0gMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdHtcblx0XHRcdFx0XHQrK2IzO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRlbHNlXG5cdFx0XHR7XG5cdFx0XHRcdCsrYjI7XG5cdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRlbHNlXG5cdFx0XHR7XG5cdFx0XHQrK2IxO1xuXHRcdFx0fVxuXG5cdFx0XHR3b3JkID0gMDtcblx0XHRcdHdvcmQgKz0gKGIxIDw8IDE2KTtcblx0XHRcdHdvcmQgKz0gKGIyIDw8IDgpO1xuXHRcdFx0d29yZCArPSBiMztcblx0XHRcdH1cblx0XHRcdGVsc2Vcblx0XHRcdHtcblx0XHRcdHdvcmQgKz0gKDB4MDEgPDwgMjQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHdvcmQ7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gaW5jQ291bnRlcihjb3VudGVyKVxuXHRcdHtcblx0XHRcdGlmICgoY291bnRlclswXSA9IGluY1dvcmQoY291bnRlclswXSkpID09PSAwKVxuXHRcdFx0e1xuXHRcdFx0XHQvLyBlbmNyX2RhdGEgaW4gZmlsZWVuYy5jIGZyb20gIERyIEJyaWFuIEdsYWRtYW4ncyBjb3VudHMgb25seSB3aXRoIERXT1JEIGogPCA4XG5cdFx0XHRcdGNvdW50ZXJbMV0gPSBpbmNXb3JkKGNvdW50ZXJbMV0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGNvdW50ZXI7XG5cdFx0fVxuXG5cdCAgICB2YXIgRW5jcnlwdG9yID0gQ1RSR2xhZG1hbi5FbmNyeXB0b3IgPSBDVFJHbGFkbWFuLmV4dGVuZCh7XG5cdCAgICAgICAgcHJvY2Vzc0Jsb2NrOiBmdW5jdGlvbiAod29yZHMsIG9mZnNldCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIGNpcGhlciA9IHRoaXMuX2NpcGhlclxuXHQgICAgICAgICAgICB2YXIgYmxvY2tTaXplID0gY2lwaGVyLmJsb2NrU2l6ZTtcblx0ICAgICAgICAgICAgdmFyIGl2ID0gdGhpcy5faXY7XG5cdCAgICAgICAgICAgIHZhciBjb3VudGVyID0gdGhpcy5fY291bnRlcjtcblxuXHQgICAgICAgICAgICAvLyBHZW5lcmF0ZSBrZXlzdHJlYW1cblx0ICAgICAgICAgICAgaWYgKGl2KSB7XG5cdCAgICAgICAgICAgICAgICBjb3VudGVyID0gdGhpcy5fY291bnRlciA9IGl2LnNsaWNlKDApO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBSZW1vdmUgSVYgZm9yIHN1YnNlcXVlbnQgYmxvY2tzXG5cdCAgICAgICAgICAgICAgICB0aGlzLl9pdiA9IHVuZGVmaW5lZDtcblx0ICAgICAgICAgICAgfVxuXG5cdFx0XHRcdGluY0NvdW50ZXIoY291bnRlcik7XG5cblx0XHRcdFx0dmFyIGtleXN0cmVhbSA9IGNvdW50ZXIuc2xpY2UoMCk7XG5cdCAgICAgICAgICAgIGNpcGhlci5lbmNyeXB0QmxvY2soa2V5c3RyZWFtLCAwKTtcblxuXHQgICAgICAgICAgICAvLyBFbmNyeXB0XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmxvY2tTaXplOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIHdvcmRzW29mZnNldCArIGldIF49IGtleXN0cmVhbVtpXTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICBDVFJHbGFkbWFuLkRlY3J5cHRvciA9IEVuY3J5cHRvcjtcblxuXHQgICAgcmV0dXJuIENUUkdsYWRtYW47XG5cdH0oKSk7XG5cblxuXG5cblx0cmV0dXJuIENyeXB0b0pTLm1vZGUuQ1RSR2xhZG1hbjtcblxufSkpOyIsICI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5LCB1bmRlZikge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSwgcmVxdWlyZShcIi4vY2lwaGVyLWNvcmVcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiLCBcIi4vY2lwaGVyLWNvcmVcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdC8qKlxuXHQgKiBPdXRwdXQgRmVlZGJhY2sgYmxvY2sgbW9kZS5cblx0ICovXG5cdENyeXB0b0pTLm1vZGUuT0ZCID0gKGZ1bmN0aW9uICgpIHtcblx0ICAgIHZhciBPRkIgPSBDcnlwdG9KUy5saWIuQmxvY2tDaXBoZXJNb2RlLmV4dGVuZCgpO1xuXG5cdCAgICB2YXIgRW5jcnlwdG9yID0gT0ZCLkVuY3J5cHRvciA9IE9GQi5leHRlbmQoe1xuXHQgICAgICAgIHByb2Nlc3NCbG9jazogZnVuY3Rpb24gKHdvcmRzLCBvZmZzZXQpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBjaXBoZXIgPSB0aGlzLl9jaXBoZXJcblx0ICAgICAgICAgICAgdmFyIGJsb2NrU2l6ZSA9IGNpcGhlci5ibG9ja1NpemU7XG5cdCAgICAgICAgICAgIHZhciBpdiA9IHRoaXMuX2l2O1xuXHQgICAgICAgICAgICB2YXIga2V5c3RyZWFtID0gdGhpcy5fa2V5c3RyZWFtO1xuXG5cdCAgICAgICAgICAgIC8vIEdlbmVyYXRlIGtleXN0cmVhbVxuXHQgICAgICAgICAgICBpZiAoaXYpIHtcblx0ICAgICAgICAgICAgICAgIGtleXN0cmVhbSA9IHRoaXMuX2tleXN0cmVhbSA9IGl2LnNsaWNlKDApO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBSZW1vdmUgSVYgZm9yIHN1YnNlcXVlbnQgYmxvY2tzXG5cdCAgICAgICAgICAgICAgICB0aGlzLl9pdiA9IHVuZGVmaW5lZDtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBjaXBoZXIuZW5jcnlwdEJsb2NrKGtleXN0cmVhbSwgMCk7XG5cblx0ICAgICAgICAgICAgLy8gRW5jcnlwdFxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJsb2NrU2l6ZTsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICB3b3Jkc1tvZmZzZXQgKyBpXSBePSBrZXlzdHJlYW1baV07XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgT0ZCLkRlY3J5cHRvciA9IEVuY3J5cHRvcjtcblxuXHQgICAgcmV0dXJuIE9GQjtcblx0fSgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUy5tb2RlLk9GQjtcblxufSkpOyIsICI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5LCB1bmRlZikge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSwgcmVxdWlyZShcIi4vY2lwaGVyLWNvcmVcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiLCBcIi4vY2lwaGVyLWNvcmVcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdC8qKlxuXHQgKiBFbGVjdHJvbmljIENvZGVib29rIGJsb2NrIG1vZGUuXG5cdCAqL1xuXHRDcnlwdG9KUy5tb2RlLkVDQiA9IChmdW5jdGlvbiAoKSB7XG5cdCAgICB2YXIgRUNCID0gQ3J5cHRvSlMubGliLkJsb2NrQ2lwaGVyTW9kZS5leHRlbmQoKTtcblxuXHQgICAgRUNCLkVuY3J5cHRvciA9IEVDQi5leHRlbmQoe1xuXHQgICAgICAgIHByb2Nlc3NCbG9jazogZnVuY3Rpb24gKHdvcmRzLCBvZmZzZXQpIHtcblx0ICAgICAgICAgICAgdGhpcy5fY2lwaGVyLmVuY3J5cHRCbG9jayh3b3Jkcywgb2Zmc2V0KTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgRUNCLkRlY3J5cHRvciA9IEVDQi5leHRlbmQoe1xuXHQgICAgICAgIHByb2Nlc3NCbG9jazogZnVuY3Rpb24gKHdvcmRzLCBvZmZzZXQpIHtcblx0ICAgICAgICAgICAgdGhpcy5fY2lwaGVyLmRlY3J5cHRCbG9jayh3b3Jkcywgb2Zmc2V0KTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgcmV0dXJuIEVDQjtcblx0fSgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUy5tb2RlLkVDQjtcblxufSkpOyIsICI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5LCB1bmRlZikge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSwgcmVxdWlyZShcIi4vY2lwaGVyLWNvcmVcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiLCBcIi4vY2lwaGVyLWNvcmVcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdC8qKlxuXHQgKiBBTlNJIFguOTIzIHBhZGRpbmcgc3RyYXRlZ3kuXG5cdCAqL1xuXHRDcnlwdG9KUy5wYWQuQW5zaVg5MjMgPSB7XG5cdCAgICBwYWQ6IGZ1bmN0aW9uIChkYXRhLCBibG9ja1NpemUpIHtcblx0ICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICB2YXIgZGF0YVNpZ0J5dGVzID0gZGF0YS5zaWdCeXRlcztcblx0ICAgICAgICB2YXIgYmxvY2tTaXplQnl0ZXMgPSBibG9ja1NpemUgKiA0O1xuXG5cdCAgICAgICAgLy8gQ291bnQgcGFkZGluZyBieXRlc1xuXHQgICAgICAgIHZhciBuUGFkZGluZ0J5dGVzID0gYmxvY2tTaXplQnl0ZXMgLSBkYXRhU2lnQnl0ZXMgJSBibG9ja1NpemVCeXRlcztcblxuXHQgICAgICAgIC8vIENvbXB1dGUgbGFzdCBieXRlIHBvc2l0aW9uXG5cdCAgICAgICAgdmFyIGxhc3RCeXRlUG9zID0gZGF0YVNpZ0J5dGVzICsgblBhZGRpbmdCeXRlcyAtIDE7XG5cblx0ICAgICAgICAvLyBQYWRcblx0ICAgICAgICBkYXRhLmNsYW1wKCk7XG5cdCAgICAgICAgZGF0YS53b3Jkc1tsYXN0Qnl0ZVBvcyA+Pj4gMl0gfD0gblBhZGRpbmdCeXRlcyA8PCAoMjQgLSAobGFzdEJ5dGVQb3MgJSA0KSAqIDgpO1xuXHQgICAgICAgIGRhdGEuc2lnQnl0ZXMgKz0gblBhZGRpbmdCeXRlcztcblx0ICAgIH0sXG5cblx0ICAgIHVucGFkOiBmdW5jdGlvbiAoZGF0YSkge1xuXHQgICAgICAgIC8vIEdldCBudW1iZXIgb2YgcGFkZGluZyBieXRlcyBmcm9tIGxhc3QgYnl0ZVxuXHQgICAgICAgIHZhciBuUGFkZGluZ0J5dGVzID0gZGF0YS53b3Jkc1soZGF0YS5zaWdCeXRlcyAtIDEpID4+PiAyXSAmIDB4ZmY7XG5cblx0ICAgICAgICAvLyBSZW1vdmUgcGFkZGluZ1xuXHQgICAgICAgIGRhdGEuc2lnQnl0ZXMgLT0gblBhZGRpbmdCeXRlcztcblx0ICAgIH1cblx0fTtcblxuXG5cdHJldHVybiBDcnlwdG9KUy5wYWQuQW5zaXg5MjM7XG5cbn0pKTsiLCAiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSwgdW5kZWYpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIiksIHJlcXVpcmUoXCIuL2NpcGhlci1jb3JlXCIpKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXCIuL2NvcmVcIiwgXCIuL2NpcGhlci1jb3JlXCJdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcblxuXHQvKipcblx0ICogSVNPIDEwMTI2IHBhZGRpbmcgc3RyYXRlZ3kuXG5cdCAqL1xuXHRDcnlwdG9KUy5wYWQuSXNvMTAxMjYgPSB7XG5cdCAgICBwYWQ6IGZ1bmN0aW9uIChkYXRhLCBibG9ja1NpemUpIHtcblx0ICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgIHZhciBibG9ja1NpemVCeXRlcyA9IGJsb2NrU2l6ZSAqIDQ7XG5cblx0ICAgICAgICAvLyBDb3VudCBwYWRkaW5nIGJ5dGVzXG5cdCAgICAgICAgdmFyIG5QYWRkaW5nQnl0ZXMgPSBibG9ja1NpemVCeXRlcyAtIGRhdGEuc2lnQnl0ZXMgJSBibG9ja1NpemVCeXRlcztcblxuXHQgICAgICAgIC8vIFBhZFxuXHQgICAgICAgIGRhdGEuY29uY2F0KENyeXB0b0pTLmxpYi5Xb3JkQXJyYXkucmFuZG9tKG5QYWRkaW5nQnl0ZXMgLSAxKSkuXG5cdCAgICAgICAgICAgICBjb25jYXQoQ3J5cHRvSlMubGliLldvcmRBcnJheS5jcmVhdGUoW25QYWRkaW5nQnl0ZXMgPDwgMjRdLCAxKSk7XG5cdCAgICB9LFxuXG5cdCAgICB1bnBhZDogZnVuY3Rpb24gKGRhdGEpIHtcblx0ICAgICAgICAvLyBHZXQgbnVtYmVyIG9mIHBhZGRpbmcgYnl0ZXMgZnJvbSBsYXN0IGJ5dGVcblx0ICAgICAgICB2YXIgblBhZGRpbmdCeXRlcyA9IGRhdGEud29yZHNbKGRhdGEuc2lnQnl0ZXMgLSAxKSA+Pj4gMl0gJiAweGZmO1xuXG5cdCAgICAgICAgLy8gUmVtb3ZlIHBhZGRpbmdcblx0ICAgICAgICBkYXRhLnNpZ0J5dGVzIC09IG5QYWRkaW5nQnl0ZXM7XG5cdCAgICB9XG5cdH07XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlMucGFkLklzbzEwMTI2O1xuXG59KSk7IiwgIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnksIHVuZGVmKSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpLCByZXF1aXJlKFwiLi9jaXBoZXItY29yZVwiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCIsIFwiLi9jaXBoZXItY29yZVwiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0LyoqXG5cdCAqIElTTy9JRUMgOTc5Ny0xIFBhZGRpbmcgTWV0aG9kIDIuXG5cdCAqL1xuXHRDcnlwdG9KUy5wYWQuSXNvOTc5NzEgPSB7XG5cdCAgICBwYWQ6IGZ1bmN0aW9uIChkYXRhLCBibG9ja1NpemUpIHtcblx0ICAgICAgICAvLyBBZGQgMHg4MCBieXRlXG5cdCAgICAgICAgZGF0YS5jb25jYXQoQ3J5cHRvSlMubGliLldvcmRBcnJheS5jcmVhdGUoWzB4ODAwMDAwMDBdLCAxKSk7XG5cblx0ICAgICAgICAvLyBaZXJvIHBhZCB0aGUgcmVzdFxuXHQgICAgICAgIENyeXB0b0pTLnBhZC5aZXJvUGFkZGluZy5wYWQoZGF0YSwgYmxvY2tTaXplKTtcblx0ICAgIH0sXG5cblx0ICAgIHVucGFkOiBmdW5jdGlvbiAoZGF0YSkge1xuXHQgICAgICAgIC8vIFJlbW92ZSB6ZXJvIHBhZGRpbmdcblx0ICAgICAgICBDcnlwdG9KUy5wYWQuWmVyb1BhZGRpbmcudW5wYWQoZGF0YSk7XG5cblx0ICAgICAgICAvLyBSZW1vdmUgb25lIG1vcmUgYnl0ZSAtLSB0aGUgMHg4MCBieXRlXG5cdCAgICAgICAgZGF0YS5zaWdCeXRlcy0tO1xuXHQgICAgfVxuXHR9O1xuXG5cblx0cmV0dXJuIENyeXB0b0pTLnBhZC5Jc285Nzk3MTtcblxufSkpOyIsICI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5LCB1bmRlZikge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSwgcmVxdWlyZShcIi4vY2lwaGVyLWNvcmVcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiLCBcIi4vY2lwaGVyLWNvcmVcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdC8qKlxuXHQgKiBaZXJvIHBhZGRpbmcgc3RyYXRlZ3kuXG5cdCAqL1xuXHRDcnlwdG9KUy5wYWQuWmVyb1BhZGRpbmcgPSB7XG5cdCAgICBwYWQ6IGZ1bmN0aW9uIChkYXRhLCBibG9ja1NpemUpIHtcblx0ICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgIHZhciBibG9ja1NpemVCeXRlcyA9IGJsb2NrU2l6ZSAqIDQ7XG5cblx0ICAgICAgICAvLyBQYWRcblx0ICAgICAgICBkYXRhLmNsYW1wKCk7XG5cdCAgICAgICAgZGF0YS5zaWdCeXRlcyArPSBibG9ja1NpemVCeXRlcyAtICgoZGF0YS5zaWdCeXRlcyAlIGJsb2NrU2l6ZUJ5dGVzKSB8fCBibG9ja1NpemVCeXRlcyk7XG5cdCAgICB9LFxuXG5cdCAgICB1bnBhZDogZnVuY3Rpb24gKGRhdGEpIHtcblx0ICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgIHZhciBkYXRhV29yZHMgPSBkYXRhLndvcmRzO1xuXG5cdCAgICAgICAgLy8gVW5wYWRcblx0ICAgICAgICB2YXIgaSA9IGRhdGEuc2lnQnl0ZXMgLSAxO1xuXHQgICAgICAgIGZvciAodmFyIGkgPSBkYXRhLnNpZ0J5dGVzIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0ICAgICAgICAgICAgaWYgKCgoZGF0YVdvcmRzW2kgPj4+IDJdID4+PiAoMjQgLSAoaSAlIDQpICogOCkpICYgMHhmZikpIHtcblx0ICAgICAgICAgICAgICAgIGRhdGEuc2lnQnl0ZXMgPSBpICsgMTtcblx0ICAgICAgICAgICAgICAgIGJyZWFrO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgfVxuXHR9O1xuXG5cblx0cmV0dXJuIENyeXB0b0pTLnBhZC5aZXJvUGFkZGluZztcblxufSkpOyIsICI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5LCB1bmRlZikge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSwgcmVxdWlyZShcIi4vY2lwaGVyLWNvcmVcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiLCBcIi4vY2lwaGVyLWNvcmVcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdC8qKlxuXHQgKiBBIG5vb3AgcGFkZGluZyBzdHJhdGVneS5cblx0ICovXG5cdENyeXB0b0pTLnBhZC5Ob1BhZGRpbmcgPSB7XG5cdCAgICBwYWQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgIH0sXG5cblx0ICAgIHVucGFkOiBmdW5jdGlvbiAoKSB7XG5cdCAgICB9XG5cdH07XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlMucGFkLk5vUGFkZGluZztcblxufSkpOyIsICI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5LCB1bmRlZikge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSwgcmVxdWlyZShcIi4vY2lwaGVyLWNvcmVcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiLCBcIi4vY2lwaGVyLWNvcmVcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdChmdW5jdGlvbiAodW5kZWZpbmVkKSB7XG5cdCAgICAvLyBTaG9ydGN1dHNcblx0ICAgIHZhciBDID0gQ3J5cHRvSlM7XG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYjtcblx0ICAgIHZhciBDaXBoZXJQYXJhbXMgPSBDX2xpYi5DaXBoZXJQYXJhbXM7XG5cdCAgICB2YXIgQ19lbmMgPSBDLmVuYztcblx0ICAgIHZhciBIZXggPSBDX2VuYy5IZXg7XG5cdCAgICB2YXIgQ19mb3JtYXQgPSBDLmZvcm1hdDtcblxuXHQgICAgdmFyIEhleEZvcm1hdHRlciA9IENfZm9ybWF0LkhleCA9IHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyB0aGUgY2lwaGVydGV4dCBvZiBhIGNpcGhlciBwYXJhbXMgb2JqZWN0IHRvIGEgaGV4YWRlY2ltYWxseSBlbmNvZGVkIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7Q2lwaGVyUGFyYW1zfSBjaXBoZXJQYXJhbXMgVGhlIGNpcGhlciBwYXJhbXMgb2JqZWN0LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgaGV4YWRlY2ltYWxseSBlbmNvZGVkIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGhleFN0cmluZyA9IENyeXB0b0pTLmZvcm1hdC5IZXguc3RyaW5naWZ5KGNpcGhlclBhcmFtcyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgc3RyaW5naWZ5OiBmdW5jdGlvbiAoY2lwaGVyUGFyYW1zKSB7XG5cdCAgICAgICAgICAgIHJldHVybiBjaXBoZXJQYXJhbXMuY2lwaGVydGV4dC50b1N0cmluZyhIZXgpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIGhleGFkZWNpbWFsbHkgZW5jb2RlZCBjaXBoZXJ0ZXh0IHN0cmluZyB0byBhIGNpcGhlciBwYXJhbXMgb2JqZWN0LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0IFRoZSBoZXhhZGVjaW1hbGx5IGVuY29kZWQgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7Q2lwaGVyUGFyYW1zfSBUaGUgY2lwaGVyIHBhcmFtcyBvYmplY3QuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBjaXBoZXJQYXJhbXMgPSBDcnlwdG9KUy5mb3JtYXQuSGV4LnBhcnNlKGhleFN0cmluZyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcGFyc2U6IGZ1bmN0aW9uIChpbnB1dCkge1xuXHQgICAgICAgICAgICB2YXIgY2lwaGVydGV4dCA9IEhleC5wYXJzZShpbnB1dCk7XG5cdCAgICAgICAgICAgIHJldHVybiBDaXBoZXJQYXJhbXMuY3JlYXRlKHsgY2lwaGVydGV4dDogY2lwaGVydGV4dCB9KTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXHR9KCkpO1xuXG5cblx0cmV0dXJuIENyeXB0b0pTLmZvcm1hdC5IZXg7XG5cbn0pKTsiLCAiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSwgdW5kZWYpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIiksIHJlcXVpcmUoXCIuL2VuYy1iYXNlNjRcIiksIHJlcXVpcmUoXCIuL21kNVwiKSwgcmVxdWlyZShcIi4vZXZwa2RmXCIpLCByZXF1aXJlKFwiLi9jaXBoZXItY29yZVwiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCIsIFwiLi9lbmMtYmFzZTY0XCIsIFwiLi9tZDVcIiwgXCIuL2V2cGtkZlwiLCBcIi4vY2lwaGVyLWNvcmVcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdChmdW5jdGlvbiAoKSB7XG5cdCAgICAvLyBTaG9ydGN1dHNcblx0ICAgIHZhciBDID0gQ3J5cHRvSlM7XG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYjtcblx0ICAgIHZhciBCbG9ja0NpcGhlciA9IENfbGliLkJsb2NrQ2lwaGVyO1xuXHQgICAgdmFyIENfYWxnbyA9IEMuYWxnbztcblxuXHQgICAgLy8gTG9va3VwIHRhYmxlc1xuXHQgICAgdmFyIFNCT1ggPSBbXTtcblx0ICAgIHZhciBJTlZfU0JPWCA9IFtdO1xuXHQgICAgdmFyIFNVQl9NSVhfMCA9IFtdO1xuXHQgICAgdmFyIFNVQl9NSVhfMSA9IFtdO1xuXHQgICAgdmFyIFNVQl9NSVhfMiA9IFtdO1xuXHQgICAgdmFyIFNVQl9NSVhfMyA9IFtdO1xuXHQgICAgdmFyIElOVl9TVUJfTUlYXzAgPSBbXTtcblx0ICAgIHZhciBJTlZfU1VCX01JWF8xID0gW107XG5cdCAgICB2YXIgSU5WX1NVQl9NSVhfMiA9IFtdO1xuXHQgICAgdmFyIElOVl9TVUJfTUlYXzMgPSBbXTtcblxuXHQgICAgLy8gQ29tcHV0ZSBsb29rdXAgdGFibGVzXG5cdCAgICAoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIC8vIENvbXB1dGUgZG91YmxlIHRhYmxlXG5cdCAgICAgICAgdmFyIGQgPSBbXTtcblx0ICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgaSsrKSB7XG5cdCAgICAgICAgICAgIGlmIChpIDwgMTI4KSB7XG5cdCAgICAgICAgICAgICAgICBkW2ldID0gaSA8PCAxO1xuXHQgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgZFtpXSA9IChpIDw8IDEpIF4gMHgxMWI7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cblx0ICAgICAgICAvLyBXYWxrIEdGKDJeOClcblx0ICAgICAgICB2YXIgeCA9IDA7XG5cdCAgICAgICAgdmFyIHhpID0gMDtcblx0ICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgaSsrKSB7XG5cdCAgICAgICAgICAgIC8vIENvbXB1dGUgc2JveFxuXHQgICAgICAgICAgICB2YXIgc3ggPSB4aSBeICh4aSA8PCAxKSBeICh4aSA8PCAyKSBeICh4aSA8PCAzKSBeICh4aSA8PCA0KTtcblx0ICAgICAgICAgICAgc3ggPSAoc3ggPj4+IDgpIF4gKHN4ICYgMHhmZikgXiAweDYzO1xuXHQgICAgICAgICAgICBTQk9YW3hdID0gc3g7XG5cdCAgICAgICAgICAgIElOVl9TQk9YW3N4XSA9IHg7XG5cblx0ICAgICAgICAgICAgLy8gQ29tcHV0ZSBtdWx0aXBsaWNhdGlvblxuXHQgICAgICAgICAgICB2YXIgeDIgPSBkW3hdO1xuXHQgICAgICAgICAgICB2YXIgeDQgPSBkW3gyXTtcblx0ICAgICAgICAgICAgdmFyIHg4ID0gZFt4NF07XG5cblx0ICAgICAgICAgICAgLy8gQ29tcHV0ZSBzdWIgYnl0ZXMsIG1peCBjb2x1bW5zIHRhYmxlc1xuXHQgICAgICAgICAgICB2YXIgdCA9IChkW3N4XSAqIDB4MTAxKSBeIChzeCAqIDB4MTAxMDEwMCk7XG5cdCAgICAgICAgICAgIFNVQl9NSVhfMFt4XSA9ICh0IDw8IDI0KSB8ICh0ID4+PiA4KTtcblx0ICAgICAgICAgICAgU1VCX01JWF8xW3hdID0gKHQgPDwgMTYpIHwgKHQgPj4+IDE2KTtcblx0ICAgICAgICAgICAgU1VCX01JWF8yW3hdID0gKHQgPDwgOCkgIHwgKHQgPj4+IDI0KTtcblx0ICAgICAgICAgICAgU1VCX01JWF8zW3hdID0gdDtcblxuXHQgICAgICAgICAgICAvLyBDb21wdXRlIGludiBzdWIgYnl0ZXMsIGludiBtaXggY29sdW1ucyB0YWJsZXNcblx0ICAgICAgICAgICAgdmFyIHQgPSAoeDggKiAweDEwMTAxMDEpIF4gKHg0ICogMHgxMDAwMSkgXiAoeDIgKiAweDEwMSkgXiAoeCAqIDB4MTAxMDEwMCk7XG5cdCAgICAgICAgICAgIElOVl9TVUJfTUlYXzBbc3hdID0gKHQgPDwgMjQpIHwgKHQgPj4+IDgpO1xuXHQgICAgICAgICAgICBJTlZfU1VCX01JWF8xW3N4XSA9ICh0IDw8IDE2KSB8ICh0ID4+PiAxNik7XG5cdCAgICAgICAgICAgIElOVl9TVUJfTUlYXzJbc3hdID0gKHQgPDwgOCkgIHwgKHQgPj4+IDI0KTtcblx0ICAgICAgICAgICAgSU5WX1NVQl9NSVhfM1tzeF0gPSB0O1xuXG5cdCAgICAgICAgICAgIC8vIENvbXB1dGUgbmV4dCBjb3VudGVyXG5cdCAgICAgICAgICAgIGlmICgheCkge1xuXHQgICAgICAgICAgICAgICAgeCA9IHhpID0gMTtcblx0ICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIHggPSB4MiBeIGRbZFtkW3g4IF4geDJdXV07XG5cdCAgICAgICAgICAgICAgICB4aSBePSBkW2RbeGldXTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgIH0oKSk7XG5cblx0ICAgIC8vIFByZWNvbXB1dGVkIFJjb24gbG9va3VwXG5cdCAgICB2YXIgUkNPTiA9IFsweDAwLCAweDAxLCAweDAyLCAweDA0LCAweDA4LCAweDEwLCAweDIwLCAweDQwLCAweDgwLCAweDFiLCAweDM2XTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBRVMgYmxvY2sgY2lwaGVyIGFsZ29yaXRobS5cblx0ICAgICAqL1xuXHQgICAgdmFyIEFFUyA9IENfYWxnby5BRVMgPSBCbG9ja0NpcGhlci5leHRlbmQoe1xuXHQgICAgICAgIF9kb1Jlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHZhciB0O1xuXG5cdCAgICAgICAgICAgIC8vIFNraXAgcmVzZXQgb2YgblJvdW5kcyBoYXMgYmVlbiBzZXQgYmVmb3JlIGFuZCBrZXkgZGlkIG5vdCBjaGFuZ2Vcblx0ICAgICAgICAgICAgaWYgKHRoaXMuX25Sb3VuZHMgJiYgdGhpcy5fa2V5UHJpb3JSZXNldCA9PT0gdGhpcy5fa2V5KSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm47XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuX2tleVByaW9yUmVzZXQgPSB0aGlzLl9rZXk7XG5cdCAgICAgICAgICAgIHZhciBrZXlXb3JkcyA9IGtleS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIGtleVNpemUgPSBrZXkuc2lnQnl0ZXMgLyA0O1xuXG5cdCAgICAgICAgICAgIC8vIENvbXB1dGUgbnVtYmVyIG9mIHJvdW5kc1xuXHQgICAgICAgICAgICB2YXIgblJvdW5kcyA9IHRoaXMuX25Sb3VuZHMgPSBrZXlTaXplICsgNjtcblxuXHQgICAgICAgICAgICAvLyBDb21wdXRlIG51bWJlciBvZiBrZXkgc2NoZWR1bGUgcm93c1xuXHQgICAgICAgICAgICB2YXIga3NSb3dzID0gKG5Sb3VuZHMgKyAxKSAqIDQ7XG5cblx0ICAgICAgICAgICAgLy8gQ29tcHV0ZSBrZXkgc2NoZWR1bGVcblx0ICAgICAgICAgICAgdmFyIGtleVNjaGVkdWxlID0gdGhpcy5fa2V5U2NoZWR1bGUgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIga3NSb3cgPSAwOyBrc1JvdyA8IGtzUm93czsga3NSb3crKykge1xuXHQgICAgICAgICAgICAgICAgaWYgKGtzUm93IDwga2V5U2l6ZSkge1xuXHQgICAgICAgICAgICAgICAgICAgIGtleVNjaGVkdWxlW2tzUm93XSA9IGtleVdvcmRzW2tzUm93XTtcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdCA9IGtleVNjaGVkdWxlW2tzUm93IC0gMV07XG5cblx0ICAgICAgICAgICAgICAgICAgICBpZiAoIShrc1JvdyAlIGtleVNpemUpKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJvdCB3b3JkXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHQgPSAodCA8PCA4KSB8ICh0ID4+PiAyNCk7XG5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3ViIHdvcmRcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdCA9IChTQk9YW3QgPj4+IDI0XSA8PCAyNCkgfCAoU0JPWFsodCA+Pj4gMTYpICYgMHhmZl0gPDwgMTYpIHwgKFNCT1hbKHQgPj4+IDgpICYgMHhmZl0gPDwgOCkgfCBTQk9YW3QgJiAweGZmXTtcblxuXHQgICAgICAgICAgICAgICAgICAgICAgICAvLyBNaXggUmNvblxuXHQgICAgICAgICAgICAgICAgICAgICAgICB0IF49IFJDT05bKGtzUm93IC8ga2V5U2l6ZSkgfCAwXSA8PCAyNDtcblx0ICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGtleVNpemUgPiA2ICYmIGtzUm93ICUga2V5U2l6ZSA9PSA0KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1YiB3b3JkXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHQgPSAoU0JPWFt0ID4+PiAyNF0gPDwgMjQpIHwgKFNCT1hbKHQgPj4+IDE2KSAmIDB4ZmZdIDw8IDE2KSB8IChTQk9YWyh0ID4+PiA4KSAmIDB4ZmZdIDw8IDgpIHwgU0JPWFt0ICYgMHhmZl07XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAgICAga2V5U2NoZWR1bGVba3NSb3ddID0ga2V5U2NoZWR1bGVba3NSb3cgLSBrZXlTaXplXSBeIHQ7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBDb21wdXRlIGludiBrZXkgc2NoZWR1bGVcblx0ICAgICAgICAgICAgdmFyIGludktleVNjaGVkdWxlID0gdGhpcy5faW52S2V5U2NoZWR1bGUgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaW52S3NSb3cgPSAwOyBpbnZLc1JvdyA8IGtzUm93czsgaW52S3NSb3crKykge1xuXHQgICAgICAgICAgICAgICAgdmFyIGtzUm93ID0ga3NSb3dzIC0gaW52S3NSb3c7XG5cblx0ICAgICAgICAgICAgICAgIGlmIChpbnZLc1JvdyAlIDQpIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IGtleVNjaGVkdWxlW2tzUm93XTtcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBrZXlTY2hlZHVsZVtrc1JvdyAtIDRdO1xuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICBpZiAoaW52S3NSb3cgPCA0IHx8IGtzUm93IDw9IDQpIHtcblx0ICAgICAgICAgICAgICAgICAgICBpbnZLZXlTY2hlZHVsZVtpbnZLc1Jvd10gPSB0O1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICBpbnZLZXlTY2hlZHVsZVtpbnZLc1Jvd10gPSBJTlZfU1VCX01JWF8wW1NCT1hbdCA+Pj4gMjRdXSBeIElOVl9TVUJfTUlYXzFbU0JPWFsodCA+Pj4gMTYpICYgMHhmZl1dIF5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJTlZfU1VCX01JWF8yW1NCT1hbKHQgPj4+IDgpICYgMHhmZl1dIF4gSU5WX1NVQl9NSVhfM1tTQk9YW3QgJiAweGZmXV07XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgZW5jcnlwdEJsb2NrOiBmdW5jdGlvbiAoTSwgb2Zmc2V0KSB7XG5cdCAgICAgICAgICAgIHRoaXMuX2RvQ3J5cHRCbG9jayhNLCBvZmZzZXQsIHRoaXMuX2tleVNjaGVkdWxlLCBTVUJfTUlYXzAsIFNVQl9NSVhfMSwgU1VCX01JWF8yLCBTVUJfTUlYXzMsIFNCT1gpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBkZWNyeXB0QmxvY2s6IGZ1bmN0aW9uIChNLCBvZmZzZXQpIHtcblx0ICAgICAgICAgICAgLy8gU3dhcCAybmQgYW5kIDR0aCByb3dzXG5cdCAgICAgICAgICAgIHZhciB0ID0gTVtvZmZzZXQgKyAxXTtcblx0ICAgICAgICAgICAgTVtvZmZzZXQgKyAxXSA9IE1bb2Zmc2V0ICsgM107XG5cdCAgICAgICAgICAgIE1bb2Zmc2V0ICsgM10gPSB0O1xuXG5cdCAgICAgICAgICAgIHRoaXMuX2RvQ3J5cHRCbG9jayhNLCBvZmZzZXQsIHRoaXMuX2ludktleVNjaGVkdWxlLCBJTlZfU1VCX01JWF8wLCBJTlZfU1VCX01JWF8xLCBJTlZfU1VCX01JWF8yLCBJTlZfU1VCX01JWF8zLCBJTlZfU0JPWCk7XG5cblx0ICAgICAgICAgICAgLy8gSW52IHN3YXAgMm5kIGFuZCA0dGggcm93c1xuXHQgICAgICAgICAgICB2YXIgdCA9IE1bb2Zmc2V0ICsgMV07XG5cdCAgICAgICAgICAgIE1bb2Zmc2V0ICsgMV0gPSBNW29mZnNldCArIDNdO1xuXHQgICAgICAgICAgICBNW29mZnNldCArIDNdID0gdDtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgX2RvQ3J5cHRCbG9jazogZnVuY3Rpb24gKE0sIG9mZnNldCwga2V5U2NoZWR1bGUsIFNVQl9NSVhfMCwgU1VCX01JWF8xLCBTVUJfTUlYXzIsIFNVQl9NSVhfMywgU0JPWCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgblJvdW5kcyA9IHRoaXMuX25Sb3VuZHM7XG5cblx0ICAgICAgICAgICAgLy8gR2V0IGlucHV0LCBhZGQgcm91bmQga2V5XG5cdCAgICAgICAgICAgIHZhciBzMCA9IE1bb2Zmc2V0XSAgICAgXiBrZXlTY2hlZHVsZVswXTtcblx0ICAgICAgICAgICAgdmFyIHMxID0gTVtvZmZzZXQgKyAxXSBeIGtleVNjaGVkdWxlWzFdO1xuXHQgICAgICAgICAgICB2YXIgczIgPSBNW29mZnNldCArIDJdIF4ga2V5U2NoZWR1bGVbMl07XG5cdCAgICAgICAgICAgIHZhciBzMyA9IE1bb2Zmc2V0ICsgM10gXiBrZXlTY2hlZHVsZVszXTtcblxuXHQgICAgICAgICAgICAvLyBLZXkgc2NoZWR1bGUgcm93IGNvdW50ZXJcblx0ICAgICAgICAgICAgdmFyIGtzUm93ID0gNDtcblxuXHQgICAgICAgICAgICAvLyBSb3VuZHNcblx0ICAgICAgICAgICAgZm9yICh2YXIgcm91bmQgPSAxOyByb3VuZCA8IG5Sb3VuZHM7IHJvdW5kKyspIHtcblx0ICAgICAgICAgICAgICAgIC8vIFNoaWZ0IHJvd3MsIHN1YiBieXRlcywgbWl4IGNvbHVtbnMsIGFkZCByb3VuZCBrZXlcblx0ICAgICAgICAgICAgICAgIHZhciB0MCA9IFNVQl9NSVhfMFtzMCA+Pj4gMjRdIF4gU1VCX01JWF8xWyhzMSA+Pj4gMTYpICYgMHhmZl0gXiBTVUJfTUlYXzJbKHMyID4+PiA4KSAmIDB4ZmZdIF4gU1VCX01JWF8zW3MzICYgMHhmZl0gXiBrZXlTY2hlZHVsZVtrc1JvdysrXTtcblx0ICAgICAgICAgICAgICAgIHZhciB0MSA9IFNVQl9NSVhfMFtzMSA+Pj4gMjRdIF4gU1VCX01JWF8xWyhzMiA+Pj4gMTYpICYgMHhmZl0gXiBTVUJfTUlYXzJbKHMzID4+PiA4KSAmIDB4ZmZdIF4gU1VCX01JWF8zW3MwICYgMHhmZl0gXiBrZXlTY2hlZHVsZVtrc1JvdysrXTtcblx0ICAgICAgICAgICAgICAgIHZhciB0MiA9IFNVQl9NSVhfMFtzMiA+Pj4gMjRdIF4gU1VCX01JWF8xWyhzMyA+Pj4gMTYpICYgMHhmZl0gXiBTVUJfTUlYXzJbKHMwID4+PiA4KSAmIDB4ZmZdIF4gU1VCX01JWF8zW3MxICYgMHhmZl0gXiBrZXlTY2hlZHVsZVtrc1JvdysrXTtcblx0ICAgICAgICAgICAgICAgIHZhciB0MyA9IFNVQl9NSVhfMFtzMyA+Pj4gMjRdIF4gU1VCX01JWF8xWyhzMCA+Pj4gMTYpICYgMHhmZl0gXiBTVUJfTUlYXzJbKHMxID4+PiA4KSAmIDB4ZmZdIF4gU1VCX01JWF8zW3MyICYgMHhmZl0gXiBrZXlTY2hlZHVsZVtrc1JvdysrXTtcblxuXHQgICAgICAgICAgICAgICAgLy8gVXBkYXRlIHN0YXRlXG5cdCAgICAgICAgICAgICAgICBzMCA9IHQwO1xuXHQgICAgICAgICAgICAgICAgczEgPSB0MTtcblx0ICAgICAgICAgICAgICAgIHMyID0gdDI7XG5cdCAgICAgICAgICAgICAgICBzMyA9IHQzO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gU2hpZnQgcm93cywgc3ViIGJ5dGVzLCBhZGQgcm91bmQga2V5XG5cdCAgICAgICAgICAgIHZhciB0MCA9ICgoU0JPWFtzMCA+Pj4gMjRdIDw8IDI0KSB8IChTQk9YWyhzMSA+Pj4gMTYpICYgMHhmZl0gPDwgMTYpIHwgKFNCT1hbKHMyID4+PiA4KSAmIDB4ZmZdIDw8IDgpIHwgU0JPWFtzMyAmIDB4ZmZdKSBeIGtleVNjaGVkdWxlW2tzUm93KytdO1xuXHQgICAgICAgICAgICB2YXIgdDEgPSAoKFNCT1hbczEgPj4+IDI0XSA8PCAyNCkgfCAoU0JPWFsoczIgPj4+IDE2KSAmIDB4ZmZdIDw8IDE2KSB8IChTQk9YWyhzMyA+Pj4gOCkgJiAweGZmXSA8PCA4KSB8IFNCT1hbczAgJiAweGZmXSkgXiBrZXlTY2hlZHVsZVtrc1JvdysrXTtcblx0ICAgICAgICAgICAgdmFyIHQyID0gKChTQk9YW3MyID4+PiAyNF0gPDwgMjQpIHwgKFNCT1hbKHMzID4+PiAxNikgJiAweGZmXSA8PCAxNikgfCAoU0JPWFsoczAgPj4+IDgpICYgMHhmZl0gPDwgOCkgfCBTQk9YW3MxICYgMHhmZl0pIF4ga2V5U2NoZWR1bGVba3NSb3crK107XG5cdCAgICAgICAgICAgIHZhciB0MyA9ICgoU0JPWFtzMyA+Pj4gMjRdIDw8IDI0KSB8IChTQk9YWyhzMCA+Pj4gMTYpICYgMHhmZl0gPDwgMTYpIHwgKFNCT1hbKHMxID4+PiA4KSAmIDB4ZmZdIDw8IDgpIHwgU0JPWFtzMiAmIDB4ZmZdKSBeIGtleVNjaGVkdWxlW2tzUm93KytdO1xuXG5cdCAgICAgICAgICAgIC8vIFNldCBvdXRwdXRcblx0ICAgICAgICAgICAgTVtvZmZzZXRdICAgICA9IHQwO1xuXHQgICAgICAgICAgICBNW29mZnNldCArIDFdID0gdDE7XG5cdCAgICAgICAgICAgIE1bb2Zmc2V0ICsgMl0gPSB0Mjtcblx0ICAgICAgICAgICAgTVtvZmZzZXQgKyAzXSA9IHQzO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBrZXlTaXplOiAyNTYvMzJcblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9ucyB0byB0aGUgY2lwaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAqXG5cdCAgICAgKiBAZXhhbXBsZVxuXHQgICAgICpcblx0ICAgICAqICAgICB2YXIgY2lwaGVydGV4dCA9IENyeXB0b0pTLkFFUy5lbmNyeXB0KG1lc3NhZ2UsIGtleSwgY2ZnKTtcblx0ICAgICAqICAgICB2YXIgcGxhaW50ZXh0ICA9IENyeXB0b0pTLkFFUy5kZWNyeXB0KGNpcGhlcnRleHQsIGtleSwgY2ZnKTtcblx0ICAgICAqL1xuXHQgICAgQy5BRVMgPSBCbG9ja0NpcGhlci5fY3JlYXRlSGVscGVyKEFFUyk7XG5cdH0oKSk7XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlMuQUVTO1xuXG59KSk7IiwgIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnksIHVuZGVmKSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpLCByZXF1aXJlKFwiLi9lbmMtYmFzZTY0XCIpLCByZXF1aXJlKFwiLi9tZDVcIiksIHJlcXVpcmUoXCIuL2V2cGtkZlwiKSwgcmVxdWlyZShcIi4vY2lwaGVyLWNvcmVcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiLCBcIi4vZW5jLWJhc2U2NFwiLCBcIi4vbWQ1XCIsIFwiLi9ldnBrZGZcIiwgXCIuL2NpcGhlci1jb3JlXCJdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcblxuXHQoZnVuY3Rpb24gKCkge1xuXHQgICAgLy8gU2hvcnRjdXRzXG5cdCAgICB2YXIgQyA9IENyeXB0b0pTO1xuXHQgICAgdmFyIENfbGliID0gQy5saWI7XG5cdCAgICB2YXIgV29yZEFycmF5ID0gQ19saWIuV29yZEFycmF5O1xuXHQgICAgdmFyIEJsb2NrQ2lwaGVyID0gQ19saWIuQmxvY2tDaXBoZXI7XG5cdCAgICB2YXIgQ19hbGdvID0gQy5hbGdvO1xuXG5cdCAgICAvLyBQZXJtdXRlZCBDaG9pY2UgMSBjb25zdGFudHNcblx0ICAgIHZhciBQQzEgPSBbXG5cdCAgICAgICAgNTcsIDQ5LCA0MSwgMzMsIDI1LCAxNywgOSwgIDEsXG5cdCAgICAgICAgNTgsIDUwLCA0MiwgMzQsIDI2LCAxOCwgMTAsIDIsXG5cdCAgICAgICAgNTksIDUxLCA0MywgMzUsIDI3LCAxOSwgMTEsIDMsXG5cdCAgICAgICAgNjAsIDUyLCA0NCwgMzYsIDYzLCA1NSwgNDcsIDM5LFxuXHQgICAgICAgIDMxLCAyMywgMTUsIDcsICA2MiwgNTQsIDQ2LCAzOCxcblx0ICAgICAgICAzMCwgMjIsIDE0LCA2LCAgNjEsIDUzLCA0NSwgMzcsXG5cdCAgICAgICAgMjksIDIxLCAxMywgNSwgIDI4LCAyMCwgMTIsIDRcblx0ICAgIF07XG5cblx0ICAgIC8vIFBlcm11dGVkIENob2ljZSAyIGNvbnN0YW50c1xuXHQgICAgdmFyIFBDMiA9IFtcblx0ICAgICAgICAxNCwgMTcsIDExLCAyNCwgMSwgIDUsXG5cdCAgICAgICAgMywgIDI4LCAxNSwgNiwgIDIxLCAxMCxcblx0ICAgICAgICAyMywgMTksIDEyLCA0LCAgMjYsIDgsXG5cdCAgICAgICAgMTYsIDcsICAyNywgMjAsIDEzLCAyLFxuXHQgICAgICAgIDQxLCA1MiwgMzEsIDM3LCA0NywgNTUsXG5cdCAgICAgICAgMzAsIDQwLCA1MSwgNDUsIDMzLCA0OCxcblx0ICAgICAgICA0NCwgNDksIDM5LCA1NiwgMzQsIDUzLFxuXHQgICAgICAgIDQ2LCA0MiwgNTAsIDM2LCAyOSwgMzJcblx0ICAgIF07XG5cblx0ICAgIC8vIEN1bXVsYXRpdmUgYml0IHNoaWZ0IGNvbnN0YW50c1xuXHQgICAgdmFyIEJJVF9TSElGVFMgPSBbMSwgIDIsICA0LCAgNiwgIDgsICAxMCwgMTIsIDE0LCAxNSwgMTcsIDE5LCAyMSwgMjMsIDI1LCAyNywgMjhdO1xuXG5cdCAgICAvLyBTQk9YZXMgYW5kIHJvdW5kIHBlcm11dGF0aW9uIGNvbnN0YW50c1xuXHQgICAgdmFyIFNCT1hfUCA9IFtcblx0ICAgICAgICB7XG5cdCAgICAgICAgICAgIDB4MDogMHg4MDgyMDAsXG5cdCAgICAgICAgICAgIDB4MTAwMDAwMDA6IDB4ODAwMCxcblx0ICAgICAgICAgICAgMHgyMDAwMDAwMDogMHg4MDgwMDIsXG5cdCAgICAgICAgICAgIDB4MzAwMDAwMDA6IDB4Mixcblx0ICAgICAgICAgICAgMHg0MDAwMDAwMDogMHgyMDAsXG5cdCAgICAgICAgICAgIDB4NTAwMDAwMDA6IDB4ODA4MjAyLFxuXHQgICAgICAgICAgICAweDYwMDAwMDAwOiAweDgwMDIwMixcblx0ICAgICAgICAgICAgMHg3MDAwMDAwMDogMHg4MDAwMDAsXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMDA6IDB4MjAyLFxuXHQgICAgICAgICAgICAweDkwMDAwMDAwOiAweDgwMDIwMCxcblx0ICAgICAgICAgICAgMHhhMDAwMDAwMDogMHg4MjAwLFxuXHQgICAgICAgICAgICAweGIwMDAwMDAwOiAweDgwODAwMCxcblx0ICAgICAgICAgICAgMHhjMDAwMDAwMDogMHg4MDAyLFxuXHQgICAgICAgICAgICAweGQwMDAwMDAwOiAweDgwMDAwMixcblx0ICAgICAgICAgICAgMHhlMDAwMDAwMDogMHgwLFxuXHQgICAgICAgICAgICAweGYwMDAwMDAwOiAweDgyMDIsXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMDogMHgwLFxuXHQgICAgICAgICAgICAweDE4MDAwMDAwOiAweDgwODIwMixcblx0ICAgICAgICAgICAgMHgyODAwMDAwMDogMHg4MjAyLFxuXHQgICAgICAgICAgICAweDM4MDAwMDAwOiAweDgwMDAsXG5cdCAgICAgICAgICAgIDB4NDgwMDAwMDA6IDB4ODA4MjAwLFxuXHQgICAgICAgICAgICAweDU4MDAwMDAwOiAweDIwMCxcblx0ICAgICAgICAgICAgMHg2ODAwMDAwMDogMHg4MDgwMDIsXG5cdCAgICAgICAgICAgIDB4NzgwMDAwMDA6IDB4Mixcblx0ICAgICAgICAgICAgMHg4ODAwMDAwMDogMHg4MDAyMDAsXG5cdCAgICAgICAgICAgIDB4OTgwMDAwMDA6IDB4ODIwMCxcblx0ICAgICAgICAgICAgMHhhODAwMDAwMDogMHg4MDgwMDAsXG5cdCAgICAgICAgICAgIDB4YjgwMDAwMDA6IDB4ODAwMjAyLFxuXHQgICAgICAgICAgICAweGM4MDAwMDAwOiAweDgwMDAwMixcblx0ICAgICAgICAgICAgMHhkODAwMDAwMDogMHg4MDAyLFxuXHQgICAgICAgICAgICAweGU4MDAwMDAwOiAweDIwMixcblx0ICAgICAgICAgICAgMHhmODAwMDAwMDogMHg4MDAwMDAsXG5cdCAgICAgICAgICAgIDB4MTogMHg4MDAwLFxuXHQgICAgICAgICAgICAweDEwMDAwMDAxOiAweDIsXG5cdCAgICAgICAgICAgIDB4MjAwMDAwMDE6IDB4ODA4MjAwLFxuXHQgICAgICAgICAgICAweDMwMDAwMDAxOiAweDgwMDAwMCxcblx0ICAgICAgICAgICAgMHg0MDAwMDAwMTogMHg4MDgwMDIsXG5cdCAgICAgICAgICAgIDB4NTAwMDAwMDE6IDB4ODIwMCxcblx0ICAgICAgICAgICAgMHg2MDAwMDAwMTogMHgyMDAsXG5cdCAgICAgICAgICAgIDB4NzAwMDAwMDE6IDB4ODAwMjAyLFxuXHQgICAgICAgICAgICAweDgwMDAwMDAxOiAweDgwODIwMixcblx0ICAgICAgICAgICAgMHg5MDAwMDAwMTogMHg4MDgwMDAsXG5cdCAgICAgICAgICAgIDB4YTAwMDAwMDE6IDB4ODAwMDAyLFxuXHQgICAgICAgICAgICAweGIwMDAwMDAxOiAweDgyMDIsXG5cdCAgICAgICAgICAgIDB4YzAwMDAwMDE6IDB4MjAyLFxuXHQgICAgICAgICAgICAweGQwMDAwMDAxOiAweDgwMDIwMCxcblx0ICAgICAgICAgICAgMHhlMDAwMDAwMTogMHg4MDAyLFxuXHQgICAgICAgICAgICAweGYwMDAwMDAxOiAweDAsXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMTogMHg4MDgyMDIsXG5cdCAgICAgICAgICAgIDB4MTgwMDAwMDE6IDB4ODA4MDAwLFxuXHQgICAgICAgICAgICAweDI4MDAwMDAxOiAweDgwMDAwMCxcblx0ICAgICAgICAgICAgMHgzODAwMDAwMTogMHgyMDAsXG5cdCAgICAgICAgICAgIDB4NDgwMDAwMDE6IDB4ODAwMCxcblx0ICAgICAgICAgICAgMHg1ODAwMDAwMTogMHg4MDAwMDIsXG5cdCAgICAgICAgICAgIDB4NjgwMDAwMDE6IDB4Mixcblx0ICAgICAgICAgICAgMHg3ODAwMDAwMTogMHg4MjAyLFxuXHQgICAgICAgICAgICAweDg4MDAwMDAxOiAweDgwMDIsXG5cdCAgICAgICAgICAgIDB4OTgwMDAwMDE6IDB4ODAwMjAyLFxuXHQgICAgICAgICAgICAweGE4MDAwMDAxOiAweDIwMixcblx0ICAgICAgICAgICAgMHhiODAwMDAwMTogMHg4MDgyMDAsXG5cdCAgICAgICAgICAgIDB4YzgwMDAwMDE6IDB4ODAwMjAwLFxuXHQgICAgICAgICAgICAweGQ4MDAwMDAxOiAweDAsXG5cdCAgICAgICAgICAgIDB4ZTgwMDAwMDE6IDB4ODIwMCxcblx0ICAgICAgICAgICAgMHhmODAwMDAwMTogMHg4MDgwMDJcblx0ICAgICAgICB9LFxuXHQgICAgICAgIHtcblx0ICAgICAgICAgICAgMHgwOiAweDQwMDg0MDEwLFxuXHQgICAgICAgICAgICAweDEwMDAwMDA6IDB4NDAwMCxcblx0ICAgICAgICAgICAgMHgyMDAwMDAwOiAweDgwMDAwLFxuXHQgICAgICAgICAgICAweDMwMDAwMDA6IDB4NDAwODAwMTAsXG5cdCAgICAgICAgICAgIDB4NDAwMDAwMDogMHg0MDAwMDAxMCxcblx0ICAgICAgICAgICAgMHg1MDAwMDAwOiAweDQwMDg0MDAwLFxuXHQgICAgICAgICAgICAweDYwMDAwMDA6IDB4NDAwMDQwMDAsXG5cdCAgICAgICAgICAgIDB4NzAwMDAwMDogMHgxMCxcblx0ICAgICAgICAgICAgMHg4MDAwMDAwOiAweDg0MDAwLFxuXHQgICAgICAgICAgICAweDkwMDAwMDA6IDB4NDAwMDQwMTAsXG5cdCAgICAgICAgICAgIDB4YTAwMDAwMDogMHg0MDAwMDAwMCxcblx0ICAgICAgICAgICAgMHhiMDAwMDAwOiAweDg0MDEwLFxuXHQgICAgICAgICAgICAweGMwMDAwMDA6IDB4ODAwMTAsXG5cdCAgICAgICAgICAgIDB4ZDAwMDAwMDogMHgwLFxuXHQgICAgICAgICAgICAweGUwMDAwMDA6IDB4NDAxMCxcblx0ICAgICAgICAgICAgMHhmMDAwMDAwOiAweDQwMDgwMDAwLFxuXHQgICAgICAgICAgICAweDgwMDAwMDogMHg0MDAwNDAwMCxcblx0ICAgICAgICAgICAgMHgxODAwMDAwOiAweDg0MDEwLFxuXHQgICAgICAgICAgICAweDI4MDAwMDA6IDB4MTAsXG5cdCAgICAgICAgICAgIDB4MzgwMDAwMDogMHg0MDAwNDAxMCxcblx0ICAgICAgICAgICAgMHg0ODAwMDAwOiAweDQwMDg0MDEwLFxuXHQgICAgICAgICAgICAweDU4MDAwMDA6IDB4NDAwMDAwMDAsXG5cdCAgICAgICAgICAgIDB4NjgwMDAwMDogMHg4MDAwMCxcblx0ICAgICAgICAgICAgMHg3ODAwMDAwOiAweDQwMDgwMDEwLFxuXHQgICAgICAgICAgICAweDg4MDAwMDA6IDB4ODAwMTAsXG5cdCAgICAgICAgICAgIDB4OTgwMDAwMDogMHgwLFxuXHQgICAgICAgICAgICAweGE4MDAwMDA6IDB4NDAwMCxcblx0ICAgICAgICAgICAgMHhiODAwMDAwOiAweDQwMDgwMDAwLFxuXHQgICAgICAgICAgICAweGM4MDAwMDA6IDB4NDAwMDAwMTAsXG5cdCAgICAgICAgICAgIDB4ZDgwMDAwMDogMHg4NDAwMCxcblx0ICAgICAgICAgICAgMHhlODAwMDAwOiAweDQwMDg0MDAwLFxuXHQgICAgICAgICAgICAweGY4MDAwMDA6IDB4NDAxMCxcblx0ICAgICAgICAgICAgMHgxMDAwMDAwMDogMHgwLFxuXHQgICAgICAgICAgICAweDExMDAwMDAwOiAweDQwMDgwMDEwLFxuXHQgICAgICAgICAgICAweDEyMDAwMDAwOiAweDQwMDA0MDEwLFxuXHQgICAgICAgICAgICAweDEzMDAwMDAwOiAweDQwMDg0MDAwLFxuXHQgICAgICAgICAgICAweDE0MDAwMDAwOiAweDQwMDgwMDAwLFxuXHQgICAgICAgICAgICAweDE1MDAwMDAwOiAweDEwLFxuXHQgICAgICAgICAgICAweDE2MDAwMDAwOiAweDg0MDEwLFxuXHQgICAgICAgICAgICAweDE3MDAwMDAwOiAweDQwMDAsXG5cdCAgICAgICAgICAgIDB4MTgwMDAwMDA6IDB4NDAxMCxcblx0ICAgICAgICAgICAgMHgxOTAwMDAwMDogMHg4MDAwMCxcblx0ICAgICAgICAgICAgMHgxYTAwMDAwMDogMHg4MDAxMCxcblx0ICAgICAgICAgICAgMHgxYjAwMDAwMDogMHg0MDAwMDAxMCxcblx0ICAgICAgICAgICAgMHgxYzAwMDAwMDogMHg4NDAwMCxcblx0ICAgICAgICAgICAgMHgxZDAwMDAwMDogMHg0MDAwNDAwMCxcblx0ICAgICAgICAgICAgMHgxZTAwMDAwMDogMHg0MDAwMDAwMCxcblx0ICAgICAgICAgICAgMHgxZjAwMDAwMDogMHg0MDA4NDAxMCxcblx0ICAgICAgICAgICAgMHgxMDgwMDAwMDogMHg4NDAxMCxcblx0ICAgICAgICAgICAgMHgxMTgwMDAwMDogMHg4MDAwMCxcblx0ICAgICAgICAgICAgMHgxMjgwMDAwMDogMHg0MDA4MDAwMCxcblx0ICAgICAgICAgICAgMHgxMzgwMDAwMDogMHg0MDAwLFxuXHQgICAgICAgICAgICAweDE0ODAwMDAwOiAweDQwMDA0MDAwLFxuXHQgICAgICAgICAgICAweDE1ODAwMDAwOiAweDQwMDg0MDEwLFxuXHQgICAgICAgICAgICAweDE2ODAwMDAwOiAweDEwLFxuXHQgICAgICAgICAgICAweDE3ODAwMDAwOiAweDQwMDAwMDAwLFxuXHQgICAgICAgICAgICAweDE4ODAwMDAwOiAweDQwMDg0MDAwLFxuXHQgICAgICAgICAgICAweDE5ODAwMDAwOiAweDQwMDAwMDEwLFxuXHQgICAgICAgICAgICAweDFhODAwMDAwOiAweDQwMDA0MDEwLFxuXHQgICAgICAgICAgICAweDFiODAwMDAwOiAweDgwMDEwLFxuXHQgICAgICAgICAgICAweDFjODAwMDAwOiAweDAsXG5cdCAgICAgICAgICAgIDB4MWQ4MDAwMDA6IDB4NDAxMCxcblx0ICAgICAgICAgICAgMHgxZTgwMDAwMDogMHg0MDA4MDAxMCxcblx0ICAgICAgICAgICAgMHgxZjgwMDAwMDogMHg4NDAwMFxuXHQgICAgICAgIH0sXG5cdCAgICAgICAge1xuXHQgICAgICAgICAgICAweDA6IDB4MTA0LFxuXHQgICAgICAgICAgICAweDEwMDAwMDogMHgwLFxuXHQgICAgICAgICAgICAweDIwMDAwMDogMHg0MDAwMTAwLFxuXHQgICAgICAgICAgICAweDMwMDAwMDogMHgxMDEwNCxcblx0ICAgICAgICAgICAgMHg0MDAwMDA6IDB4MTAwMDQsXG5cdCAgICAgICAgICAgIDB4NTAwMDAwOiAweDQwMDAwMDQsXG5cdCAgICAgICAgICAgIDB4NjAwMDAwOiAweDQwMTAxMDQsXG5cdCAgICAgICAgICAgIDB4NzAwMDAwOiAweDQwMTAwMDAsXG5cdCAgICAgICAgICAgIDB4ODAwMDAwOiAweDQwMDAwMDAsXG5cdCAgICAgICAgICAgIDB4OTAwMDAwOiAweDQwMTAxMDAsXG5cdCAgICAgICAgICAgIDB4YTAwMDAwOiAweDEwMTAwLFxuXHQgICAgICAgICAgICAweGIwMDAwMDogMHg0MDEwMDA0LFxuXHQgICAgICAgICAgICAweGMwMDAwMDogMHg0MDAwMTA0LFxuXHQgICAgICAgICAgICAweGQwMDAwMDogMHgxMDAwMCxcblx0ICAgICAgICAgICAgMHhlMDAwMDA6IDB4NCxcblx0ICAgICAgICAgICAgMHhmMDAwMDA6IDB4MTAwLFxuXHQgICAgICAgICAgICAweDgwMDAwOiAweDQwMTAxMDAsXG5cdCAgICAgICAgICAgIDB4MTgwMDAwOiAweDQwMTAwMDQsXG5cdCAgICAgICAgICAgIDB4MjgwMDAwOiAweDAsXG5cdCAgICAgICAgICAgIDB4MzgwMDAwOiAweDQwMDAxMDAsXG5cdCAgICAgICAgICAgIDB4NDgwMDAwOiAweDQwMDAwMDQsXG5cdCAgICAgICAgICAgIDB4NTgwMDAwOiAweDEwMDAwLFxuXHQgICAgICAgICAgICAweDY4MDAwMDogMHgxMDAwNCxcblx0ICAgICAgICAgICAgMHg3ODAwMDA6IDB4MTA0LFxuXHQgICAgICAgICAgICAweDg4MDAwMDogMHg0LFxuXHQgICAgICAgICAgICAweDk4MDAwMDogMHgxMDAsXG5cdCAgICAgICAgICAgIDB4YTgwMDAwOiAweDQwMTAwMDAsXG5cdCAgICAgICAgICAgIDB4YjgwMDAwOiAweDEwMTA0LFxuXHQgICAgICAgICAgICAweGM4MDAwMDogMHgxMDEwMCxcblx0ICAgICAgICAgICAgMHhkODAwMDA6IDB4NDAwMDEwNCxcblx0ICAgICAgICAgICAgMHhlODAwMDA6IDB4NDAxMDEwNCxcblx0ICAgICAgICAgICAgMHhmODAwMDA6IDB4NDAwMDAwMCxcblx0ICAgICAgICAgICAgMHgxMDAwMDAwOiAweDQwMTAxMDAsXG5cdCAgICAgICAgICAgIDB4MTEwMDAwMDogMHgxMDAwNCxcblx0ICAgICAgICAgICAgMHgxMjAwMDAwOiAweDEwMDAwLFxuXHQgICAgICAgICAgICAweDEzMDAwMDA6IDB4NDAwMDEwMCxcblx0ICAgICAgICAgICAgMHgxNDAwMDAwOiAweDEwMCxcblx0ICAgICAgICAgICAgMHgxNTAwMDAwOiAweDQwMTAxMDQsXG5cdCAgICAgICAgICAgIDB4MTYwMDAwMDogMHg0MDAwMDA0LFxuXHQgICAgICAgICAgICAweDE3MDAwMDA6IDB4MCxcblx0ICAgICAgICAgICAgMHgxODAwMDAwOiAweDQwMDAxMDQsXG5cdCAgICAgICAgICAgIDB4MTkwMDAwMDogMHg0MDAwMDAwLFxuXHQgICAgICAgICAgICAweDFhMDAwMDA6IDB4NCxcblx0ICAgICAgICAgICAgMHgxYjAwMDAwOiAweDEwMTAwLFxuXHQgICAgICAgICAgICAweDFjMDAwMDA6IDB4NDAxMDAwMCxcblx0ICAgICAgICAgICAgMHgxZDAwMDAwOiAweDEwNCxcblx0ICAgICAgICAgICAgMHgxZTAwMDAwOiAweDEwMTA0LFxuXHQgICAgICAgICAgICAweDFmMDAwMDA6IDB4NDAxMDAwNCxcblx0ICAgICAgICAgICAgMHgxMDgwMDAwOiAweDQwMDAwMDAsXG5cdCAgICAgICAgICAgIDB4MTE4MDAwMDogMHgxMDQsXG5cdCAgICAgICAgICAgIDB4MTI4MDAwMDogMHg0MDEwMTAwLFxuXHQgICAgICAgICAgICAweDEzODAwMDA6IDB4MCxcblx0ICAgICAgICAgICAgMHgxNDgwMDAwOiAweDEwMDA0LFxuXHQgICAgICAgICAgICAweDE1ODAwMDA6IDB4NDAwMDEwMCxcblx0ICAgICAgICAgICAgMHgxNjgwMDAwOiAweDEwMCxcblx0ICAgICAgICAgICAgMHgxNzgwMDAwOiAweDQwMTAwMDQsXG5cdCAgICAgICAgICAgIDB4MTg4MDAwMDogMHgxMDAwMCxcblx0ICAgICAgICAgICAgMHgxOTgwMDAwOiAweDQwMTAxMDQsXG5cdCAgICAgICAgICAgIDB4MWE4MDAwMDogMHgxMDEwNCxcblx0ICAgICAgICAgICAgMHgxYjgwMDAwOiAweDQwMDAwMDQsXG5cdCAgICAgICAgICAgIDB4MWM4MDAwMDogMHg0MDAwMTA0LFxuXHQgICAgICAgICAgICAweDFkODAwMDA6IDB4NDAxMDAwMCxcblx0ICAgICAgICAgICAgMHgxZTgwMDAwOiAweDQsXG5cdCAgICAgICAgICAgIDB4MWY4MDAwMDogMHgxMDEwMFxuXHQgICAgICAgIH0sXG5cdCAgICAgICAge1xuXHQgICAgICAgICAgICAweDA6IDB4ODA0MDEwMDAsXG5cdCAgICAgICAgICAgIDB4MTAwMDA6IDB4ODAwMDEwNDAsXG5cdCAgICAgICAgICAgIDB4MjAwMDA6IDB4NDAxMDQwLFxuXHQgICAgICAgICAgICAweDMwMDAwOiAweDgwNDAwMDAwLFxuXHQgICAgICAgICAgICAweDQwMDAwOiAweDAsXG5cdCAgICAgICAgICAgIDB4NTAwMDA6IDB4NDAxMDAwLFxuXHQgICAgICAgICAgICAweDYwMDAwOiAweDgwMDAwMDQwLFxuXHQgICAgICAgICAgICAweDcwMDAwOiAweDQwMDA0MCxcblx0ICAgICAgICAgICAgMHg4MDAwMDogMHg4MDAwMDAwMCxcblx0ICAgICAgICAgICAgMHg5MDAwMDogMHg0MDAwMDAsXG5cdCAgICAgICAgICAgIDB4YTAwMDA6IDB4NDAsXG5cdCAgICAgICAgICAgIDB4YjAwMDA6IDB4ODAwMDEwMDAsXG5cdCAgICAgICAgICAgIDB4YzAwMDA6IDB4ODA0MDAwNDAsXG5cdCAgICAgICAgICAgIDB4ZDAwMDA6IDB4MTA0MCxcblx0ICAgICAgICAgICAgMHhlMDAwMDogMHgxMDAwLFxuXHQgICAgICAgICAgICAweGYwMDAwOiAweDgwNDAxMDQwLFxuXHQgICAgICAgICAgICAweDgwMDA6IDB4ODAwMDEwNDAsXG5cdCAgICAgICAgICAgIDB4MTgwMDA6IDB4NDAsXG5cdCAgICAgICAgICAgIDB4MjgwMDA6IDB4ODA0MDAwNDAsXG5cdCAgICAgICAgICAgIDB4MzgwMDA6IDB4ODAwMDEwMDAsXG5cdCAgICAgICAgICAgIDB4NDgwMDA6IDB4NDAxMDAwLFxuXHQgICAgICAgICAgICAweDU4MDAwOiAweDgwNDAxMDQwLFxuXHQgICAgICAgICAgICAweDY4MDAwOiAweDAsXG5cdCAgICAgICAgICAgIDB4NzgwMDA6IDB4ODA0MDAwMDAsXG5cdCAgICAgICAgICAgIDB4ODgwMDA6IDB4MTAwMCxcblx0ICAgICAgICAgICAgMHg5ODAwMDogMHg4MDQwMTAwMCxcblx0ICAgICAgICAgICAgMHhhODAwMDogMHg0MDAwMDAsXG5cdCAgICAgICAgICAgIDB4YjgwMDA6IDB4MTA0MCxcblx0ICAgICAgICAgICAgMHhjODAwMDogMHg4MDAwMDAwMCxcblx0ICAgICAgICAgICAgMHhkODAwMDogMHg0MDAwNDAsXG5cdCAgICAgICAgICAgIDB4ZTgwMDA6IDB4NDAxMDQwLFxuXHQgICAgICAgICAgICAweGY4MDAwOiAweDgwMDAwMDQwLFxuXHQgICAgICAgICAgICAweDEwMDAwMDogMHg0MDAwNDAsXG5cdCAgICAgICAgICAgIDB4MTEwMDAwOiAweDQwMTAwMCxcblx0ICAgICAgICAgICAgMHgxMjAwMDA6IDB4ODAwMDAwNDAsXG5cdCAgICAgICAgICAgIDB4MTMwMDAwOiAweDAsXG5cdCAgICAgICAgICAgIDB4MTQwMDAwOiAweDEwNDAsXG5cdCAgICAgICAgICAgIDB4MTUwMDAwOiAweDgwNDAwMDQwLFxuXHQgICAgICAgICAgICAweDE2MDAwMDogMHg4MDQwMTAwMCxcblx0ICAgICAgICAgICAgMHgxNzAwMDA6IDB4ODAwMDEwNDAsXG5cdCAgICAgICAgICAgIDB4MTgwMDAwOiAweDgwNDAxMDQwLFxuXHQgICAgICAgICAgICAweDE5MDAwMDogMHg4MDAwMDAwMCxcblx0ICAgICAgICAgICAgMHgxYTAwMDA6IDB4ODA0MDAwMDAsXG5cdCAgICAgICAgICAgIDB4MWIwMDAwOiAweDQwMTA0MCxcblx0ICAgICAgICAgICAgMHgxYzAwMDA6IDB4ODAwMDEwMDAsXG5cdCAgICAgICAgICAgIDB4MWQwMDAwOiAweDQwMDAwMCxcblx0ICAgICAgICAgICAgMHgxZTAwMDA6IDB4NDAsXG5cdCAgICAgICAgICAgIDB4MWYwMDAwOiAweDEwMDAsXG5cdCAgICAgICAgICAgIDB4MTA4MDAwOiAweDgwNDAwMDAwLFxuXHQgICAgICAgICAgICAweDExODAwMDogMHg4MDQwMTA0MCxcblx0ICAgICAgICAgICAgMHgxMjgwMDA6IDB4MCxcblx0ICAgICAgICAgICAgMHgxMzgwMDA6IDB4NDAxMDAwLFxuXHQgICAgICAgICAgICAweDE0ODAwMDogMHg0MDAwNDAsXG5cdCAgICAgICAgICAgIDB4MTU4MDAwOiAweDgwMDAwMDAwLFxuXHQgICAgICAgICAgICAweDE2ODAwMDogMHg4MDAwMTA0MCxcblx0ICAgICAgICAgICAgMHgxNzgwMDA6IDB4NDAsXG5cdCAgICAgICAgICAgIDB4MTg4MDAwOiAweDgwMDAwMDQwLFxuXHQgICAgICAgICAgICAweDE5ODAwMDogMHgxMDAwLFxuXHQgICAgICAgICAgICAweDFhODAwMDogMHg4MDAwMTAwMCxcblx0ICAgICAgICAgICAgMHgxYjgwMDA6IDB4ODA0MDAwNDAsXG5cdCAgICAgICAgICAgIDB4MWM4MDAwOiAweDEwNDAsXG5cdCAgICAgICAgICAgIDB4MWQ4MDAwOiAweDgwNDAxMDAwLFxuXHQgICAgICAgICAgICAweDFlODAwMDogMHg0MDAwMDAsXG5cdCAgICAgICAgICAgIDB4MWY4MDAwOiAweDQwMTA0MFxuXHQgICAgICAgIH0sXG5cdCAgICAgICAge1xuXHQgICAgICAgICAgICAweDA6IDB4ODAsXG5cdCAgICAgICAgICAgIDB4MTAwMDogMHgxMDQwMDAwLFxuXHQgICAgICAgICAgICAweDIwMDA6IDB4NDAwMDAsXG5cdCAgICAgICAgICAgIDB4MzAwMDogMHgyMDAwMDAwMCxcblx0ICAgICAgICAgICAgMHg0MDAwOiAweDIwMDQwMDgwLFxuXHQgICAgICAgICAgICAweDUwMDA6IDB4MTAwMDA4MCxcblx0ICAgICAgICAgICAgMHg2MDAwOiAweDIxMDAwMDgwLFxuXHQgICAgICAgICAgICAweDcwMDA6IDB4NDAwODAsXG5cdCAgICAgICAgICAgIDB4ODAwMDogMHgxMDAwMDAwLFxuXHQgICAgICAgICAgICAweDkwMDA6IDB4MjAwNDAwMDAsXG5cdCAgICAgICAgICAgIDB4YTAwMDogMHgyMDAwMDA4MCxcblx0ICAgICAgICAgICAgMHhiMDAwOiAweDIxMDQwMDgwLFxuXHQgICAgICAgICAgICAweGMwMDA6IDB4MjEwNDAwMDAsXG5cdCAgICAgICAgICAgIDB4ZDAwMDogMHgwLFxuXHQgICAgICAgICAgICAweGUwMDA6IDB4MTA0MDA4MCxcblx0ICAgICAgICAgICAgMHhmMDAwOiAweDIxMDAwMDAwLFxuXHQgICAgICAgICAgICAweDgwMDogMHgxMDQwMDgwLFxuXHQgICAgICAgICAgICAweDE4MDA6IDB4MjEwMDAwODAsXG5cdCAgICAgICAgICAgIDB4MjgwMDogMHg4MCxcblx0ICAgICAgICAgICAgMHgzODAwOiAweDEwNDAwMDAsXG5cdCAgICAgICAgICAgIDB4NDgwMDogMHg0MDAwMCxcblx0ICAgICAgICAgICAgMHg1ODAwOiAweDIwMDQwMDgwLFxuXHQgICAgICAgICAgICAweDY4MDA6IDB4MjEwNDAwMDAsXG5cdCAgICAgICAgICAgIDB4NzgwMDogMHgyMDAwMDAwMCxcblx0ICAgICAgICAgICAgMHg4ODAwOiAweDIwMDQwMDAwLFxuXHQgICAgICAgICAgICAweDk4MDA6IDB4MCxcblx0ICAgICAgICAgICAgMHhhODAwOiAweDIxMDQwMDgwLFxuXHQgICAgICAgICAgICAweGI4MDA6IDB4MTAwMDA4MCxcblx0ICAgICAgICAgICAgMHhjODAwOiAweDIwMDAwMDgwLFxuXHQgICAgICAgICAgICAweGQ4MDA6IDB4MjEwMDAwMDAsXG5cdCAgICAgICAgICAgIDB4ZTgwMDogMHgxMDAwMDAwLFxuXHQgICAgICAgICAgICAweGY4MDA6IDB4NDAwODAsXG5cdCAgICAgICAgICAgIDB4MTAwMDA6IDB4NDAwMDAsXG5cdCAgICAgICAgICAgIDB4MTEwMDA6IDB4ODAsXG5cdCAgICAgICAgICAgIDB4MTIwMDA6IDB4MjAwMDAwMDAsXG5cdCAgICAgICAgICAgIDB4MTMwMDA6IDB4MjEwMDAwODAsXG5cdCAgICAgICAgICAgIDB4MTQwMDA6IDB4MTAwMDA4MCxcblx0ICAgICAgICAgICAgMHgxNTAwMDogMHgyMTA0MDAwMCxcblx0ICAgICAgICAgICAgMHgxNjAwMDogMHgyMDA0MDA4MCxcblx0ICAgICAgICAgICAgMHgxNzAwMDogMHgxMDAwMDAwLFxuXHQgICAgICAgICAgICAweDE4MDAwOiAweDIxMDQwMDgwLFxuXHQgICAgICAgICAgICAweDE5MDAwOiAweDIxMDAwMDAwLFxuXHQgICAgICAgICAgICAweDFhMDAwOiAweDEwNDAwMDAsXG5cdCAgICAgICAgICAgIDB4MWIwMDA6IDB4MjAwNDAwMDAsXG5cdCAgICAgICAgICAgIDB4MWMwMDA6IDB4NDAwODAsXG5cdCAgICAgICAgICAgIDB4MWQwMDA6IDB4MjAwMDAwODAsXG5cdCAgICAgICAgICAgIDB4MWUwMDA6IDB4MCxcblx0ICAgICAgICAgICAgMHgxZjAwMDogMHgxMDQwMDgwLFxuXHQgICAgICAgICAgICAweDEwODAwOiAweDIxMDAwMDgwLFxuXHQgICAgICAgICAgICAweDExODAwOiAweDEwMDAwMDAsXG5cdCAgICAgICAgICAgIDB4MTI4MDA6IDB4MTA0MDAwMCxcblx0ICAgICAgICAgICAgMHgxMzgwMDogMHgyMDA0MDA4MCxcblx0ICAgICAgICAgICAgMHgxNDgwMDogMHgyMDAwMDAwMCxcblx0ICAgICAgICAgICAgMHgxNTgwMDogMHgxMDQwMDgwLFxuXHQgICAgICAgICAgICAweDE2ODAwOiAweDgwLFxuXHQgICAgICAgICAgICAweDE3ODAwOiAweDIxMDQwMDAwLFxuXHQgICAgICAgICAgICAweDE4ODAwOiAweDQwMDgwLFxuXHQgICAgICAgICAgICAweDE5ODAwOiAweDIxMDQwMDgwLFxuXHQgICAgICAgICAgICAweDFhODAwOiAweDAsXG5cdCAgICAgICAgICAgIDB4MWI4MDA6IDB4MjEwMDAwMDAsXG5cdCAgICAgICAgICAgIDB4MWM4MDA6IDB4MTAwMDA4MCxcblx0ICAgICAgICAgICAgMHgxZDgwMDogMHg0MDAwMCxcblx0ICAgICAgICAgICAgMHgxZTgwMDogMHgyMDA0MDAwMCxcblx0ICAgICAgICAgICAgMHgxZjgwMDogMHgyMDAwMDA4MFxuXHQgICAgICAgIH0sXG5cdCAgICAgICAge1xuXHQgICAgICAgICAgICAweDA6IDB4MTAwMDAwMDgsXG5cdCAgICAgICAgICAgIDB4MTAwOiAweDIwMDAsXG5cdCAgICAgICAgICAgIDB4MjAwOiAweDEwMjAwMDAwLFxuXHQgICAgICAgICAgICAweDMwMDogMHgxMDIwMjAwOCxcblx0ICAgICAgICAgICAgMHg0MDA6IDB4MTAwMDIwMDAsXG5cdCAgICAgICAgICAgIDB4NTAwOiAweDIwMDAwMCxcblx0ICAgICAgICAgICAgMHg2MDA6IDB4MjAwMDA4LFxuXHQgICAgICAgICAgICAweDcwMDogMHgxMDAwMDAwMCxcblx0ICAgICAgICAgICAgMHg4MDA6IDB4MCxcblx0ICAgICAgICAgICAgMHg5MDA6IDB4MTAwMDIwMDgsXG5cdCAgICAgICAgICAgIDB4YTAwOiAweDIwMjAwMCxcblx0ICAgICAgICAgICAgMHhiMDA6IDB4OCxcblx0ICAgICAgICAgICAgMHhjMDA6IDB4MTAyMDAwMDgsXG5cdCAgICAgICAgICAgIDB4ZDAwOiAweDIwMjAwOCxcblx0ICAgICAgICAgICAgMHhlMDA6IDB4MjAwOCxcblx0ICAgICAgICAgICAgMHhmMDA6IDB4MTAyMDIwMDAsXG5cdCAgICAgICAgICAgIDB4ODA6IDB4MTAyMDAwMDAsXG5cdCAgICAgICAgICAgIDB4MTgwOiAweDEwMjAyMDA4LFxuXHQgICAgICAgICAgICAweDI4MDogMHg4LFxuXHQgICAgICAgICAgICAweDM4MDogMHgyMDAwMDAsXG5cdCAgICAgICAgICAgIDB4NDgwOiAweDIwMjAwOCxcblx0ICAgICAgICAgICAgMHg1ODA6IDB4MTAwMDAwMDgsXG5cdCAgICAgICAgICAgIDB4NjgwOiAweDEwMDAyMDAwLFxuXHQgICAgICAgICAgICAweDc4MDogMHgyMDA4LFxuXHQgICAgICAgICAgICAweDg4MDogMHgyMDAwMDgsXG5cdCAgICAgICAgICAgIDB4OTgwOiAweDIwMDAsXG5cdCAgICAgICAgICAgIDB4YTgwOiAweDEwMDAyMDA4LFxuXHQgICAgICAgICAgICAweGI4MDogMHgxMDIwMDAwOCxcblx0ICAgICAgICAgICAgMHhjODA6IDB4MCxcblx0ICAgICAgICAgICAgMHhkODA6IDB4MTAyMDIwMDAsXG5cdCAgICAgICAgICAgIDB4ZTgwOiAweDIwMjAwMCxcblx0ICAgICAgICAgICAgMHhmODA6IDB4MTAwMDAwMDAsXG5cdCAgICAgICAgICAgIDB4MTAwMDogMHgxMDAwMjAwMCxcblx0ICAgICAgICAgICAgMHgxMTAwOiAweDEwMjAwMDA4LFxuXHQgICAgICAgICAgICAweDEyMDA6IDB4MTAyMDIwMDgsXG5cdCAgICAgICAgICAgIDB4MTMwMDogMHgyMDA4LFxuXHQgICAgICAgICAgICAweDE0MDA6IDB4MjAwMDAwLFxuXHQgICAgICAgICAgICAweDE1MDA6IDB4MTAwMDAwMDAsXG5cdCAgICAgICAgICAgIDB4MTYwMDogMHgxMDAwMDAwOCxcblx0ICAgICAgICAgICAgMHgxNzAwOiAweDIwMjAwMCxcblx0ICAgICAgICAgICAgMHgxODAwOiAweDIwMjAwOCxcblx0ICAgICAgICAgICAgMHgxOTAwOiAweDAsXG5cdCAgICAgICAgICAgIDB4MWEwMDogMHg4LFxuXHQgICAgICAgICAgICAweDFiMDA6IDB4MTAyMDAwMDAsXG5cdCAgICAgICAgICAgIDB4MWMwMDogMHgyMDAwLFxuXHQgICAgICAgICAgICAweDFkMDA6IDB4MTAwMDIwMDgsXG5cdCAgICAgICAgICAgIDB4MWUwMDogMHgxMDIwMjAwMCxcblx0ICAgICAgICAgICAgMHgxZjAwOiAweDIwMDAwOCxcblx0ICAgICAgICAgICAgMHgxMDgwOiAweDgsXG5cdCAgICAgICAgICAgIDB4MTE4MDogMHgyMDIwMDAsXG5cdCAgICAgICAgICAgIDB4MTI4MDogMHgyMDAwMDAsXG5cdCAgICAgICAgICAgIDB4MTM4MDogMHgxMDAwMDAwOCxcblx0ICAgICAgICAgICAgMHgxNDgwOiAweDEwMDAyMDAwLFxuXHQgICAgICAgICAgICAweDE1ODA6IDB4MjAwOCxcblx0ICAgICAgICAgICAgMHgxNjgwOiAweDEwMjAyMDA4LFxuXHQgICAgICAgICAgICAweDE3ODA6IDB4MTAyMDAwMDAsXG5cdCAgICAgICAgICAgIDB4MTg4MDogMHgxMDIwMjAwMCxcblx0ICAgICAgICAgICAgMHgxOTgwOiAweDEwMjAwMDA4LFxuXHQgICAgICAgICAgICAweDFhODA6IDB4MjAwMCxcblx0ICAgICAgICAgICAgMHgxYjgwOiAweDIwMjAwOCxcblx0ICAgICAgICAgICAgMHgxYzgwOiAweDIwMDAwOCxcblx0ICAgICAgICAgICAgMHgxZDgwOiAweDAsXG5cdCAgICAgICAgICAgIDB4MWU4MDogMHgxMDAwMDAwMCxcblx0ICAgICAgICAgICAgMHgxZjgwOiAweDEwMDAyMDA4XG5cdCAgICAgICAgfSxcblx0ICAgICAgICB7XG5cdCAgICAgICAgICAgIDB4MDogMHgxMDAwMDAsXG5cdCAgICAgICAgICAgIDB4MTA6IDB4MjAwMDQwMSxcblx0ICAgICAgICAgICAgMHgyMDogMHg0MDAsXG5cdCAgICAgICAgICAgIDB4MzA6IDB4MTAwNDAxLFxuXHQgICAgICAgICAgICAweDQwOiAweDIxMDA0MDEsXG5cdCAgICAgICAgICAgIDB4NTA6IDB4MCxcblx0ICAgICAgICAgICAgMHg2MDogMHgxLFxuXHQgICAgICAgICAgICAweDcwOiAweDIxMDAwMDEsXG5cdCAgICAgICAgICAgIDB4ODA6IDB4MjAwMDQwMCxcblx0ICAgICAgICAgICAgMHg5MDogMHgxMDAwMDEsXG5cdCAgICAgICAgICAgIDB4YTA6IDB4MjAwMDAwMSxcblx0ICAgICAgICAgICAgMHhiMDogMHgyMTAwNDAwLFxuXHQgICAgICAgICAgICAweGMwOiAweDIxMDAwMDAsXG5cdCAgICAgICAgICAgIDB4ZDA6IDB4NDAxLFxuXHQgICAgICAgICAgICAweGUwOiAweDEwMDQwMCxcblx0ICAgICAgICAgICAgMHhmMDogMHgyMDAwMDAwLFxuXHQgICAgICAgICAgICAweDg6IDB4MjEwMDAwMSxcblx0ICAgICAgICAgICAgMHgxODogMHgwLFxuXHQgICAgICAgICAgICAweDI4OiAweDIwMDA0MDEsXG5cdCAgICAgICAgICAgIDB4Mzg6IDB4MjEwMDQwMCxcblx0ICAgICAgICAgICAgMHg0ODogMHgxMDAwMDAsXG5cdCAgICAgICAgICAgIDB4NTg6IDB4MjAwMDAwMSxcblx0ICAgICAgICAgICAgMHg2ODogMHgyMDAwMDAwLFxuXHQgICAgICAgICAgICAweDc4OiAweDQwMSxcblx0ICAgICAgICAgICAgMHg4ODogMHgxMDA0MDEsXG5cdCAgICAgICAgICAgIDB4OTg6IDB4MjAwMDQwMCxcblx0ICAgICAgICAgICAgMHhhODogMHgyMTAwMDAwLFxuXHQgICAgICAgICAgICAweGI4OiAweDEwMDAwMSxcblx0ICAgICAgICAgICAgMHhjODogMHg0MDAsXG5cdCAgICAgICAgICAgIDB4ZDg6IDB4MjEwMDQwMSxcblx0ICAgICAgICAgICAgMHhlODogMHgxLFxuXHQgICAgICAgICAgICAweGY4OiAweDEwMDQwMCxcblx0ICAgICAgICAgICAgMHgxMDA6IDB4MjAwMDAwMCxcblx0ICAgICAgICAgICAgMHgxMTA6IDB4MTAwMDAwLFxuXHQgICAgICAgICAgICAweDEyMDogMHgyMDAwNDAxLFxuXHQgICAgICAgICAgICAweDEzMDogMHgyMTAwMDAxLFxuXHQgICAgICAgICAgICAweDE0MDogMHgxMDAwMDEsXG5cdCAgICAgICAgICAgIDB4MTUwOiAweDIwMDA0MDAsXG5cdCAgICAgICAgICAgIDB4MTYwOiAweDIxMDA0MDAsXG5cdCAgICAgICAgICAgIDB4MTcwOiAweDEwMDQwMSxcblx0ICAgICAgICAgICAgMHgxODA6IDB4NDAxLFxuXHQgICAgICAgICAgICAweDE5MDogMHgyMTAwNDAxLFxuXHQgICAgICAgICAgICAweDFhMDogMHgxMDA0MDAsXG5cdCAgICAgICAgICAgIDB4MWIwOiAweDEsXG5cdCAgICAgICAgICAgIDB4MWMwOiAweDAsXG5cdCAgICAgICAgICAgIDB4MWQwOiAweDIxMDAwMDAsXG5cdCAgICAgICAgICAgIDB4MWUwOiAweDIwMDAwMDEsXG5cdCAgICAgICAgICAgIDB4MWYwOiAweDQwMCxcblx0ICAgICAgICAgICAgMHgxMDg6IDB4MTAwNDAwLFxuXHQgICAgICAgICAgICAweDExODogMHgyMDAwNDAxLFxuXHQgICAgICAgICAgICAweDEyODogMHgyMTAwMDAxLFxuXHQgICAgICAgICAgICAweDEzODogMHgxLFxuXHQgICAgICAgICAgICAweDE0ODogMHgyMDAwMDAwLFxuXHQgICAgICAgICAgICAweDE1ODogMHgxMDAwMDAsXG5cdCAgICAgICAgICAgIDB4MTY4OiAweDQwMSxcblx0ICAgICAgICAgICAgMHgxNzg6IDB4MjEwMDQwMCxcblx0ICAgICAgICAgICAgMHgxODg6IDB4MjAwMDAwMSxcblx0ICAgICAgICAgICAgMHgxOTg6IDB4MjEwMDAwMCxcblx0ICAgICAgICAgICAgMHgxYTg6IDB4MCxcblx0ICAgICAgICAgICAgMHgxYjg6IDB4MjEwMDQwMSxcblx0ICAgICAgICAgICAgMHgxYzg6IDB4MTAwNDAxLFxuXHQgICAgICAgICAgICAweDFkODogMHg0MDAsXG5cdCAgICAgICAgICAgIDB4MWU4OiAweDIwMDA0MDAsXG5cdCAgICAgICAgICAgIDB4MWY4OiAweDEwMDAwMVxuXHQgICAgICAgIH0sXG5cdCAgICAgICAge1xuXHQgICAgICAgICAgICAweDA6IDB4ODAwMDgyMCxcblx0ICAgICAgICAgICAgMHgxOiAweDIwMDAwLFxuXHQgICAgICAgICAgICAweDI6IDB4ODAwMDAwMCxcblx0ICAgICAgICAgICAgMHgzOiAweDIwLFxuXHQgICAgICAgICAgICAweDQ6IDB4MjAwMjAsXG5cdCAgICAgICAgICAgIDB4NTogMHg4MDIwODIwLFxuXHQgICAgICAgICAgICAweDY6IDB4ODAyMDgwMCxcblx0ICAgICAgICAgICAgMHg3OiAweDgwMCxcblx0ICAgICAgICAgICAgMHg4OiAweDgwMjAwMDAsXG5cdCAgICAgICAgICAgIDB4OTogMHg4MDAwODAwLFxuXHQgICAgICAgICAgICAweGE6IDB4MjA4MDAsXG5cdCAgICAgICAgICAgIDB4YjogMHg4MDIwMDIwLFxuXHQgICAgICAgICAgICAweGM6IDB4ODIwLFxuXHQgICAgICAgICAgICAweGQ6IDB4MCxcblx0ICAgICAgICAgICAgMHhlOiAweDgwMDAwMjAsXG5cdCAgICAgICAgICAgIDB4ZjogMHgyMDgyMCxcblx0ICAgICAgICAgICAgMHg4MDAwMDAwMDogMHg4MDAsXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMDE6IDB4ODAyMDgyMCxcblx0ICAgICAgICAgICAgMHg4MDAwMDAwMjogMHg4MDAwODIwLFxuXHQgICAgICAgICAgICAweDgwMDAwMDAzOiAweDgwMDAwMDAsXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMDQ6IDB4ODAyMDAwMCxcblx0ICAgICAgICAgICAgMHg4MDAwMDAwNTogMHgyMDgwMCxcblx0ICAgICAgICAgICAgMHg4MDAwMDAwNjogMHgyMDgyMCxcblx0ICAgICAgICAgICAgMHg4MDAwMDAwNzogMHgyMCxcblx0ICAgICAgICAgICAgMHg4MDAwMDAwODogMHg4MDAwMDIwLFxuXHQgICAgICAgICAgICAweDgwMDAwMDA5OiAweDgyMCxcblx0ICAgICAgICAgICAgMHg4MDAwMDAwYTogMHgyMDAyMCxcblx0ICAgICAgICAgICAgMHg4MDAwMDAwYjogMHg4MDIwODAwLFxuXHQgICAgICAgICAgICAweDgwMDAwMDBjOiAweDAsXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMGQ6IDB4ODAyMDAyMCxcblx0ICAgICAgICAgICAgMHg4MDAwMDAwZTogMHg4MDAwODAwLFxuXHQgICAgICAgICAgICAweDgwMDAwMDBmOiAweDIwMDAwLFxuXHQgICAgICAgICAgICAweDEwOiAweDIwODIwLFxuXHQgICAgICAgICAgICAweDExOiAweDgwMjA4MDAsXG5cdCAgICAgICAgICAgIDB4MTI6IDB4MjAsXG5cdCAgICAgICAgICAgIDB4MTM6IDB4ODAwLFxuXHQgICAgICAgICAgICAweDE0OiAweDgwMDA4MDAsXG5cdCAgICAgICAgICAgIDB4MTU6IDB4ODAwMDAyMCxcblx0ICAgICAgICAgICAgMHgxNjogMHg4MDIwMDIwLFxuXHQgICAgICAgICAgICAweDE3OiAweDIwMDAwLFxuXHQgICAgICAgICAgICAweDE4OiAweDAsXG5cdCAgICAgICAgICAgIDB4MTk6IDB4MjAwMjAsXG5cdCAgICAgICAgICAgIDB4MWE6IDB4ODAyMDAwMCxcblx0ICAgICAgICAgICAgMHgxYjogMHg4MDAwODIwLFxuXHQgICAgICAgICAgICAweDFjOiAweDgwMjA4MjAsXG5cdCAgICAgICAgICAgIDB4MWQ6IDB4MjA4MDAsXG5cdCAgICAgICAgICAgIDB4MWU6IDB4ODIwLFxuXHQgICAgICAgICAgICAweDFmOiAweDgwMDAwMDAsXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMTA6IDB4MjAwMDAsXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMTE6IDB4ODAwLFxuXHQgICAgICAgICAgICAweDgwMDAwMDEyOiAweDgwMjAwMjAsXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMTM6IDB4MjA4MjAsXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMTQ6IDB4MjAsXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMTU6IDB4ODAyMDAwMCxcblx0ICAgICAgICAgICAgMHg4MDAwMDAxNjogMHg4MDAwMDAwLFxuXHQgICAgICAgICAgICAweDgwMDAwMDE3OiAweDgwMDA4MjAsXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMTg6IDB4ODAyMDgyMCxcblx0ICAgICAgICAgICAgMHg4MDAwMDAxOTogMHg4MDAwMDIwLFxuXHQgICAgICAgICAgICAweDgwMDAwMDFhOiAweDgwMDA4MDAsXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMWI6IDB4MCxcblx0ICAgICAgICAgICAgMHg4MDAwMDAxYzogMHgyMDgwMCxcblx0ICAgICAgICAgICAgMHg4MDAwMDAxZDogMHg4MjAsXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMWU6IDB4MjAwMjAsXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMWY6IDB4ODAyMDgwMFxuXHQgICAgICAgIH1cblx0ICAgIF07XG5cblx0ICAgIC8vIE1hc2tzIHRoYXQgc2VsZWN0IHRoZSBTQk9YIGlucHV0XG5cdCAgICB2YXIgU0JPWF9NQVNLID0gW1xuXHQgICAgICAgIDB4ZjgwMDAwMDEsIDB4MWY4MDAwMDAsIDB4MDFmODAwMDAsIDB4MDAxZjgwMDAsXG5cdCAgICAgICAgMHgwMDAxZjgwMCwgMHgwMDAwMWY4MCwgMHgwMDAwMDFmOCwgMHg4MDAwMDAxZlxuXHQgICAgXTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBERVMgYmxvY2sgY2lwaGVyIGFsZ29yaXRobS5cblx0ICAgICAqL1xuXHQgICAgdmFyIERFUyA9IENfYWxnby5ERVMgPSBCbG9ja0NpcGhlci5leHRlbmQoe1xuXHQgICAgICAgIF9kb1Jlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIga2V5ID0gdGhpcy5fa2V5O1xuXHQgICAgICAgICAgICB2YXIga2V5V29yZHMgPSBrZXkud29yZHM7XG5cblx0ICAgICAgICAgICAgLy8gU2VsZWN0IDU2IGJpdHMgYWNjb3JkaW5nIHRvIFBDMVxuXHQgICAgICAgICAgICB2YXIga2V5Qml0cyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDU2OyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIHZhciBrZXlCaXRQb3MgPSBQQzFbaV0gLSAxO1xuXHQgICAgICAgICAgICAgICAga2V5Qml0c1tpXSA9IChrZXlXb3Jkc1trZXlCaXRQb3MgPj4+IDVdID4+PiAoMzEgLSBrZXlCaXRQb3MgJSAzMikpICYgMTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIEFzc2VtYmxlIDE2IHN1YmtleXNcblx0ICAgICAgICAgICAgdmFyIHN1YktleXMgPSB0aGlzLl9zdWJLZXlzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIG5TdWJLZXkgPSAwOyBuU3ViS2V5IDwgMTY7IG5TdWJLZXkrKykge1xuXHQgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIHN1YmtleVxuXHQgICAgICAgICAgICAgICAgdmFyIHN1YktleSA9IHN1YktleXNbblN1YktleV0gPSBbXTtcblxuXHQgICAgICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgICAgIHZhciBiaXRTaGlmdCA9IEJJVF9TSElGVFNbblN1YktleV07XG5cblx0ICAgICAgICAgICAgICAgIC8vIFNlbGVjdCA0OCBiaXRzIGFjY29yZGluZyB0byBQQzJcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjQ7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgICAgIC8vIFNlbGVjdCBmcm9tIHRoZSBsZWZ0IDI4IGtleSBiaXRzXG5cdCAgICAgICAgICAgICAgICAgICAgc3ViS2V5WyhpIC8gNikgfCAwXSB8PSBrZXlCaXRzWygoUEMyW2ldIC0gMSkgKyBiaXRTaGlmdCkgJSAyOF0gPDwgKDMxIC0gaSAlIDYpO1xuXG5cdCAgICAgICAgICAgICAgICAgICAgLy8gU2VsZWN0IGZyb20gdGhlIHJpZ2h0IDI4IGtleSBiaXRzXG5cdCAgICAgICAgICAgICAgICAgICAgc3ViS2V5WzQgKyAoKGkgLyA2KSB8IDApXSB8PSBrZXlCaXRzWzI4ICsgKCgoUEMyW2kgKyAyNF0gLSAxKSArIGJpdFNoaWZ0KSAlIDI4KV0gPDwgKDMxIC0gaSAlIDYpO1xuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAvLyBTaW5jZSBlYWNoIHN1YmtleSBpcyBhcHBsaWVkIHRvIGFuIGV4cGFuZGVkIDMyLWJpdCBpbnB1dCxcblx0ICAgICAgICAgICAgICAgIC8vIHRoZSBzdWJrZXkgY2FuIGJlIGJyb2tlbiBpbnRvIDggdmFsdWVzIHNjYWxlZCB0byAzMi1iaXRzLFxuXHQgICAgICAgICAgICAgICAgLy8gd2hpY2ggYWxsb3dzIHRoZSBrZXkgdG8gYmUgdXNlZCB3aXRob3V0IGV4cGFuc2lvblxuXHQgICAgICAgICAgICAgICAgc3ViS2V5WzBdID0gKHN1YktleVswXSA8PCAxKSB8IChzdWJLZXlbMF0gPj4+IDMxKTtcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgNzsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgc3ViS2V5W2ldID0gc3ViS2V5W2ldID4+PiAoKGkgLSAxKSAqIDQgKyAzKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIHN1YktleVs3XSA9IChzdWJLZXlbN10gPDwgNSkgfCAoc3ViS2V5WzddID4+PiAyNyk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBDb21wdXRlIGludmVyc2Ugc3Via2V5c1xuXHQgICAgICAgICAgICB2YXIgaW52U3ViS2V5cyA9IHRoaXMuX2ludlN1YktleXMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICBpbnZTdWJLZXlzW2ldID0gc3ViS2V5c1sxNSAtIGldO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIGVuY3J5cHRCbG9jazogZnVuY3Rpb24gKE0sIG9mZnNldCkge1xuXHQgICAgICAgICAgICB0aGlzLl9kb0NyeXB0QmxvY2soTSwgb2Zmc2V0LCB0aGlzLl9zdWJLZXlzKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgZGVjcnlwdEJsb2NrOiBmdW5jdGlvbiAoTSwgb2Zmc2V0KSB7XG5cdCAgICAgICAgICAgIHRoaXMuX2RvQ3J5cHRCbG9jayhNLCBvZmZzZXQsIHRoaXMuX2ludlN1YktleXMpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfZG9DcnlwdEJsb2NrOiBmdW5jdGlvbiAoTSwgb2Zmc2V0LCBzdWJLZXlzKSB7XG5cdCAgICAgICAgICAgIC8vIEdldCBpbnB1dFxuXHQgICAgICAgICAgICB0aGlzLl9sQmxvY2sgPSBNW29mZnNldF07XG5cdCAgICAgICAgICAgIHRoaXMuX3JCbG9jayA9IE1bb2Zmc2V0ICsgMV07XG5cblx0ICAgICAgICAgICAgLy8gSW5pdGlhbCBwZXJtdXRhdGlvblxuXHQgICAgICAgICAgICBleGNoYW5nZUxSLmNhbGwodGhpcywgNCwgIDB4MGYwZjBmMGYpO1xuXHQgICAgICAgICAgICBleGNoYW5nZUxSLmNhbGwodGhpcywgMTYsIDB4MDAwMGZmZmYpO1xuXHQgICAgICAgICAgICBleGNoYW5nZVJMLmNhbGwodGhpcywgMiwgIDB4MzMzMzMzMzMpO1xuXHQgICAgICAgICAgICBleGNoYW5nZVJMLmNhbGwodGhpcywgOCwgIDB4MDBmZjAwZmYpO1xuXHQgICAgICAgICAgICBleGNoYW5nZUxSLmNhbGwodGhpcywgMSwgIDB4NTU1NTU1NTUpO1xuXG5cdCAgICAgICAgICAgIC8vIFJvdW5kc1xuXHQgICAgICAgICAgICBmb3IgKHZhciByb3VuZCA9IDA7IHJvdW5kIDwgMTY7IHJvdW5kKyspIHtcblx0ICAgICAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICAgICAgdmFyIHN1YktleSA9IHN1YktleXNbcm91bmRdO1xuXHQgICAgICAgICAgICAgICAgdmFyIGxCbG9jayA9IHRoaXMuX2xCbG9jaztcblx0ICAgICAgICAgICAgICAgIHZhciByQmxvY2sgPSB0aGlzLl9yQmxvY2s7XG5cblx0ICAgICAgICAgICAgICAgIC8vIEZlaXN0ZWwgZnVuY3Rpb25cblx0ICAgICAgICAgICAgICAgIHZhciBmID0gMDtcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgODsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgZiB8PSBTQk9YX1BbaV1bKChyQmxvY2sgXiBzdWJLZXlbaV0pICYgU0JPWF9NQVNLW2ldKSA+Pj4gMF07XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB0aGlzLl9sQmxvY2sgPSByQmxvY2s7XG5cdCAgICAgICAgICAgICAgICB0aGlzLl9yQmxvY2sgPSBsQmxvY2sgXiBmO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gVW5kbyBzd2FwIGZyb20gbGFzdCByb3VuZFxuXHQgICAgICAgICAgICB2YXIgdCA9IHRoaXMuX2xCbG9jaztcblx0ICAgICAgICAgICAgdGhpcy5fbEJsb2NrID0gdGhpcy5fckJsb2NrO1xuXHQgICAgICAgICAgICB0aGlzLl9yQmxvY2sgPSB0O1xuXG5cdCAgICAgICAgICAgIC8vIEZpbmFsIHBlcm11dGF0aW9uXG5cdCAgICAgICAgICAgIGV4Y2hhbmdlTFIuY2FsbCh0aGlzLCAxLCAgMHg1NTU1NTU1NSk7XG5cdCAgICAgICAgICAgIGV4Y2hhbmdlUkwuY2FsbCh0aGlzLCA4LCAgMHgwMGZmMDBmZik7XG5cdCAgICAgICAgICAgIGV4Y2hhbmdlUkwuY2FsbCh0aGlzLCAyLCAgMHgzMzMzMzMzMyk7XG5cdCAgICAgICAgICAgIGV4Y2hhbmdlTFIuY2FsbCh0aGlzLCAxNiwgMHgwMDAwZmZmZik7XG5cdCAgICAgICAgICAgIGV4Y2hhbmdlTFIuY2FsbCh0aGlzLCA0LCAgMHgwZjBmMGYwZik7XG5cblx0ICAgICAgICAgICAgLy8gU2V0IG91dHB1dFxuXHQgICAgICAgICAgICBNW29mZnNldF0gPSB0aGlzLl9sQmxvY2s7XG5cdCAgICAgICAgICAgIE1bb2Zmc2V0ICsgMV0gPSB0aGlzLl9yQmxvY2s7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIGtleVNpemU6IDY0LzMyLFxuXG5cdCAgICAgICAgaXZTaXplOiA2NC8zMixcblxuXHQgICAgICAgIGJsb2NrU2l6ZTogNjQvMzJcblx0ICAgIH0pO1xuXG5cdCAgICAvLyBTd2FwIGJpdHMgYWNyb3NzIHRoZSBsZWZ0IGFuZCByaWdodCB3b3Jkc1xuXHQgICAgZnVuY3Rpb24gZXhjaGFuZ2VMUihvZmZzZXQsIG1hc2spIHtcblx0ICAgICAgICB2YXIgdCA9ICgodGhpcy5fbEJsb2NrID4+PiBvZmZzZXQpIF4gdGhpcy5fckJsb2NrKSAmIG1hc2s7XG5cdCAgICAgICAgdGhpcy5fckJsb2NrIF49IHQ7XG5cdCAgICAgICAgdGhpcy5fbEJsb2NrIF49IHQgPDwgb2Zmc2V0O1xuXHQgICAgfVxuXG5cdCAgICBmdW5jdGlvbiBleGNoYW5nZVJMKG9mZnNldCwgbWFzaykge1xuXHQgICAgICAgIHZhciB0ID0gKCh0aGlzLl9yQmxvY2sgPj4+IG9mZnNldCkgXiB0aGlzLl9sQmxvY2spICYgbWFzaztcblx0ICAgICAgICB0aGlzLl9sQmxvY2sgXj0gdDtcblx0ICAgICAgICB0aGlzLl9yQmxvY2sgXj0gdCA8PCBvZmZzZXQ7XG5cdCAgICB9XG5cblx0ICAgIC8qKlxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb25zIHRvIHRoZSBjaXBoZXIncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICpcblx0ICAgICAqIEBleGFtcGxlXG5cdCAgICAgKlxuXHQgICAgICogICAgIHZhciBjaXBoZXJ0ZXh0ID0gQ3J5cHRvSlMuREVTLmVuY3J5cHQobWVzc2FnZSwga2V5LCBjZmcpO1xuXHQgICAgICogICAgIHZhciBwbGFpbnRleHQgID0gQ3J5cHRvSlMuREVTLmRlY3J5cHQoY2lwaGVydGV4dCwga2V5LCBjZmcpO1xuXHQgICAgICovXG5cdCAgICBDLkRFUyA9IEJsb2NrQ2lwaGVyLl9jcmVhdGVIZWxwZXIoREVTKTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBUcmlwbGUtREVTIGJsb2NrIGNpcGhlciBhbGdvcml0aG0uXG5cdCAgICAgKi9cblx0ICAgIHZhciBUcmlwbGVERVMgPSBDX2FsZ28uVHJpcGxlREVTID0gQmxvY2tDaXBoZXIuZXh0ZW5kKHtcblx0ICAgICAgICBfZG9SZXNldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuX2tleTtcblx0ICAgICAgICAgICAgdmFyIGtleVdvcmRzID0ga2V5LndvcmRzO1xuXHQgICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIGtleSBsZW5ndGggaXMgdmFsaWQgKDY0LCAxMjggb3IgPj0gMTkyIGJpdClcblx0ICAgICAgICAgICAgaWYgKGtleVdvcmRzLmxlbmd0aCAhPT0gMiAmJiBrZXlXb3Jkcy5sZW5ndGggIT09IDQgJiYga2V5V29yZHMubGVuZ3RoIDwgNikge1xuXHQgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGtleSBsZW5ndGggLSAzREVTIHJlcXVpcmVzIHRoZSBrZXkgbGVuZ3RoIHRvIGJlIDY0LCAxMjgsIDE5MiBvciA+MTkyLicpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gRXh0ZW5kIHRoZSBrZXkgYWNjb3JkaW5nIHRvIHRoZSBrZXlpbmcgb3B0aW9ucyBkZWZpbmVkIGluIDNERVMgc3RhbmRhcmRcblx0ICAgICAgICAgICAgdmFyIGtleTEgPSBrZXlXb3Jkcy5zbGljZSgwLCAyKTtcblx0ICAgICAgICAgICAgdmFyIGtleTIgPSBrZXlXb3Jkcy5sZW5ndGggPCA0ID8ga2V5V29yZHMuc2xpY2UoMCwgMikgOiBrZXlXb3Jkcy5zbGljZSgyLCA0KTtcblx0ICAgICAgICAgICAgdmFyIGtleTMgPSBrZXlXb3Jkcy5sZW5ndGggPCA2ID8ga2V5V29yZHMuc2xpY2UoMCwgMikgOiBrZXlXb3Jkcy5zbGljZSg0LCA2KTtcblxuXHQgICAgICAgICAgICAvLyBDcmVhdGUgREVTIGluc3RhbmNlc1xuXHQgICAgICAgICAgICB0aGlzLl9kZXMxID0gREVTLmNyZWF0ZUVuY3J5cHRvcihXb3JkQXJyYXkuY3JlYXRlKGtleTEpKTtcblx0ICAgICAgICAgICAgdGhpcy5fZGVzMiA9IERFUy5jcmVhdGVFbmNyeXB0b3IoV29yZEFycmF5LmNyZWF0ZShrZXkyKSk7XG5cdCAgICAgICAgICAgIHRoaXMuX2RlczMgPSBERVMuY3JlYXRlRW5jcnlwdG9yKFdvcmRBcnJheS5jcmVhdGUoa2V5MykpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBlbmNyeXB0QmxvY2s6IGZ1bmN0aW9uIChNLCBvZmZzZXQpIHtcblx0ICAgICAgICAgICAgdGhpcy5fZGVzMS5lbmNyeXB0QmxvY2soTSwgb2Zmc2V0KTtcblx0ICAgICAgICAgICAgdGhpcy5fZGVzMi5kZWNyeXB0QmxvY2soTSwgb2Zmc2V0KTtcblx0ICAgICAgICAgICAgdGhpcy5fZGVzMy5lbmNyeXB0QmxvY2soTSwgb2Zmc2V0KTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgZGVjcnlwdEJsb2NrOiBmdW5jdGlvbiAoTSwgb2Zmc2V0KSB7XG5cdCAgICAgICAgICAgIHRoaXMuX2RlczMuZGVjcnlwdEJsb2NrKE0sIG9mZnNldCk7XG5cdCAgICAgICAgICAgIHRoaXMuX2RlczIuZW5jcnlwdEJsb2NrKE0sIG9mZnNldCk7XG5cdCAgICAgICAgICAgIHRoaXMuX2RlczEuZGVjcnlwdEJsb2NrKE0sIG9mZnNldCk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIGtleVNpemU6IDE5Mi8zMixcblxuXHQgICAgICAgIGl2U2l6ZTogNjQvMzIsXG5cblx0ICAgICAgICBibG9ja1NpemU6IDY0LzMyXG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTaG9ydGN1dCBmdW5jdGlvbnMgdG8gdGhlIGNpcGhlcidzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgKlxuXHQgICAgICogQGV4YW1wbGVcblx0ICAgICAqXG5cdCAgICAgKiAgICAgdmFyIGNpcGhlcnRleHQgPSBDcnlwdG9KUy5UcmlwbGVERVMuZW5jcnlwdChtZXNzYWdlLCBrZXksIGNmZyk7XG5cdCAgICAgKiAgICAgdmFyIHBsYWludGV4dCAgPSBDcnlwdG9KUy5UcmlwbGVERVMuZGVjcnlwdChjaXBoZXJ0ZXh0LCBrZXksIGNmZyk7XG5cdCAgICAgKi9cblx0ICAgIEMuVHJpcGxlREVTID0gQmxvY2tDaXBoZXIuX2NyZWF0ZUhlbHBlcihUcmlwbGVERVMpO1xuXHR9KCkpO1xuXG5cblx0cmV0dXJuIENyeXB0b0pTLlRyaXBsZURFUztcblxufSkpOyIsICI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5LCB1bmRlZikge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSwgcmVxdWlyZShcIi4vZW5jLWJhc2U2NFwiKSwgcmVxdWlyZShcIi4vbWQ1XCIpLCByZXF1aXJlKFwiLi9ldnBrZGZcIiksIHJlcXVpcmUoXCIuL2NpcGhlci1jb3JlXCIpKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXCIuL2NvcmVcIiwgXCIuL2VuYy1iYXNlNjRcIiwgXCIuL21kNVwiLCBcIi4vZXZwa2RmXCIsIFwiLi9jaXBoZXItY29yZVwiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0KGZ1bmN0aW9uICgpIHtcblx0ICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgdmFyIEMgPSBDcnlwdG9KUztcblx0ICAgIHZhciBDX2xpYiA9IEMubGliO1xuXHQgICAgdmFyIFN0cmVhbUNpcGhlciA9IENfbGliLlN0cmVhbUNpcGhlcjtcblx0ICAgIHZhciBDX2FsZ28gPSBDLmFsZ287XG5cblx0ICAgIC8qKlxuXHQgICAgICogUkM0IHN0cmVhbSBjaXBoZXIgYWxnb3JpdGhtLlxuXHQgICAgICovXG5cdCAgICB2YXIgUkM0ID0gQ19hbGdvLlJDNCA9IFN0cmVhbUNpcGhlci5leHRlbmQoe1xuXHQgICAgICAgIF9kb1Jlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIga2V5ID0gdGhpcy5fa2V5O1xuXHQgICAgICAgICAgICB2YXIga2V5V29yZHMgPSBrZXkud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBrZXlTaWdCeXRlcyA9IGtleS5zaWdCeXRlcztcblxuXHQgICAgICAgICAgICAvLyBJbml0IHNib3hcblx0ICAgICAgICAgICAgdmFyIFMgPSB0aGlzLl9TID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIFNbaV0gPSBpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gS2V5IHNldHVwXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gMDsgaSA8IDI1NjsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIga2V5Qnl0ZUluZGV4ID0gaSAlIGtleVNpZ0J5dGVzO1xuXHQgICAgICAgICAgICAgICAgdmFyIGtleUJ5dGUgPSAoa2V5V29yZHNba2V5Qnl0ZUluZGV4ID4+PiAyXSA+Pj4gKDI0IC0gKGtleUJ5dGVJbmRleCAlIDQpICogOCkpICYgMHhmZjtcblxuXHQgICAgICAgICAgICAgICAgaiA9IChqICsgU1tpXSArIGtleUJ5dGUpICUgMjU2O1xuXG5cdCAgICAgICAgICAgICAgICAvLyBTd2FwXG5cdCAgICAgICAgICAgICAgICB2YXIgdCA9IFNbaV07XG5cdCAgICAgICAgICAgICAgICBTW2ldID0gU1tqXTtcblx0ICAgICAgICAgICAgICAgIFNbal0gPSB0O1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gQ291bnRlcnNcblx0ICAgICAgICAgICAgdGhpcy5faSA9IHRoaXMuX2ogPSAwO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfZG9Qcm9jZXNzQmxvY2s6IGZ1bmN0aW9uIChNLCBvZmZzZXQpIHtcblx0ICAgICAgICAgICAgTVtvZmZzZXRdIF49IGdlbmVyYXRlS2V5c3RyZWFtV29yZC5jYWxsKHRoaXMpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBrZXlTaXplOiAyNTYvMzIsXG5cblx0ICAgICAgICBpdlNpemU6IDBcblx0ICAgIH0pO1xuXG5cdCAgICBmdW5jdGlvbiBnZW5lcmF0ZUtleXN0cmVhbVdvcmQoKSB7XG5cdCAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgdmFyIFMgPSB0aGlzLl9TO1xuXHQgICAgICAgIHZhciBpID0gdGhpcy5faTtcblx0ICAgICAgICB2YXIgaiA9IHRoaXMuX2o7XG5cblx0ICAgICAgICAvLyBHZW5lcmF0ZSBrZXlzdHJlYW0gd29yZFxuXHQgICAgICAgIHZhciBrZXlzdHJlYW1Xb3JkID0gMDtcblx0ICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IDQ7IG4rKykge1xuXHQgICAgICAgICAgICBpID0gKGkgKyAxKSAlIDI1Njtcblx0ICAgICAgICAgICAgaiA9IChqICsgU1tpXSkgJSAyNTY7XG5cblx0ICAgICAgICAgICAgLy8gU3dhcFxuXHQgICAgICAgICAgICB2YXIgdCA9IFNbaV07XG5cdCAgICAgICAgICAgIFNbaV0gPSBTW2pdO1xuXHQgICAgICAgICAgICBTW2pdID0gdDtcblxuXHQgICAgICAgICAgICBrZXlzdHJlYW1Xb3JkIHw9IFNbKFNbaV0gKyBTW2pdKSAlIDI1Nl0gPDwgKDI0IC0gbiAqIDgpO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIC8vIFVwZGF0ZSBjb3VudGVyc1xuXHQgICAgICAgIHRoaXMuX2kgPSBpO1xuXHQgICAgICAgIHRoaXMuX2ogPSBqO1xuXG5cdCAgICAgICAgcmV0dXJuIGtleXN0cmVhbVdvcmQ7XG5cdCAgICB9XG5cblx0ICAgIC8qKlxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb25zIHRvIHRoZSBjaXBoZXIncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICpcblx0ICAgICAqIEBleGFtcGxlXG5cdCAgICAgKlxuXHQgICAgICogICAgIHZhciBjaXBoZXJ0ZXh0ID0gQ3J5cHRvSlMuUkM0LmVuY3J5cHQobWVzc2FnZSwga2V5LCBjZmcpO1xuXHQgICAgICogICAgIHZhciBwbGFpbnRleHQgID0gQ3J5cHRvSlMuUkM0LmRlY3J5cHQoY2lwaGVydGV4dCwga2V5LCBjZmcpO1xuXHQgICAgICovXG5cdCAgICBDLlJDNCA9IFN0cmVhbUNpcGhlci5fY3JlYXRlSGVscGVyKFJDNCk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogTW9kaWZpZWQgUkM0IHN0cmVhbSBjaXBoZXIgYWxnb3JpdGhtLlxuXHQgICAgICovXG5cdCAgICB2YXIgUkM0RHJvcCA9IENfYWxnby5SQzREcm9wID0gUkM0LmV4dGVuZCh7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29uZmlndXJhdGlvbiBvcHRpb25zLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGRyb3AgVGhlIG51bWJlciBvZiBrZXlzdHJlYW0gd29yZHMgdG8gZHJvcC4gRGVmYXVsdCAxOTJcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjZmc6IFJDNC5jZmcuZXh0ZW5kKHtcblx0ICAgICAgICAgICAgZHJvcDogMTkyXG5cdCAgICAgICAgfSksXG5cblx0ICAgICAgICBfZG9SZXNldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICBSQzQuX2RvUmVzZXQuY2FsbCh0aGlzKTtcblxuXHQgICAgICAgICAgICAvLyBEcm9wXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSB0aGlzLmNmZy5kcm9wOyBpID4gMDsgaS0tKSB7XG5cdCAgICAgICAgICAgICAgICBnZW5lcmF0ZUtleXN0cmVhbVdvcmQuY2FsbCh0aGlzKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9ucyB0byB0aGUgY2lwaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAqXG5cdCAgICAgKiBAZXhhbXBsZVxuXHQgICAgICpcblx0ICAgICAqICAgICB2YXIgY2lwaGVydGV4dCA9IENyeXB0b0pTLlJDNERyb3AuZW5jcnlwdChtZXNzYWdlLCBrZXksIGNmZyk7XG5cdCAgICAgKiAgICAgdmFyIHBsYWludGV4dCAgPSBDcnlwdG9KUy5SQzREcm9wLmRlY3J5cHQoY2lwaGVydGV4dCwga2V5LCBjZmcpO1xuXHQgICAgICovXG5cdCAgICBDLlJDNERyb3AgPSBTdHJlYW1DaXBoZXIuX2NyZWF0ZUhlbHBlcihSQzREcm9wKTtcblx0fSgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUy5SQzQ7XG5cbn0pKTsiLCAiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSwgdW5kZWYpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIiksIHJlcXVpcmUoXCIuL2VuYy1iYXNlNjRcIiksIHJlcXVpcmUoXCIuL21kNVwiKSwgcmVxdWlyZShcIi4vZXZwa2RmXCIpLCByZXF1aXJlKFwiLi9jaXBoZXItY29yZVwiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCIsIFwiLi9lbmMtYmFzZTY0XCIsIFwiLi9tZDVcIiwgXCIuL2V2cGtkZlwiLCBcIi4vY2lwaGVyLWNvcmVcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdChmdW5jdGlvbiAoKSB7XG5cdCAgICAvLyBTaG9ydGN1dHNcblx0ICAgIHZhciBDID0gQ3J5cHRvSlM7XG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYjtcblx0ICAgIHZhciBTdHJlYW1DaXBoZXIgPSBDX2xpYi5TdHJlYW1DaXBoZXI7XG5cdCAgICB2YXIgQ19hbGdvID0gQy5hbGdvO1xuXG5cdCAgICAvLyBSZXVzYWJsZSBvYmplY3RzXG5cdCAgICB2YXIgUyAgPSBbXTtcblx0ICAgIHZhciBDXyA9IFtdO1xuXHQgICAgdmFyIEcgID0gW107XG5cblx0ICAgIC8qKlxuXHQgICAgICogUmFiYml0IHN0cmVhbSBjaXBoZXIgYWxnb3JpdGhtXG5cdCAgICAgKi9cblx0ICAgIHZhciBSYWJiaXQgPSBDX2FsZ28uUmFiYml0ID0gU3RyZWFtQ2lwaGVyLmV4dGVuZCh7XG5cdCAgICAgICAgX2RvUmVzZXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBLID0gdGhpcy5fa2V5LndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgaXYgPSB0aGlzLmNmZy5pdjtcblxuXHQgICAgICAgICAgICAvLyBTd2FwIGVuZGlhblxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgS1tpXSA9ICgoKEtbaV0gPDwgOCkgIHwgKEtbaV0gPj4+IDI0KSkgJiAweDAwZmYwMGZmKSB8XG5cdCAgICAgICAgICAgICAgICAgICAgICAgKCgoS1tpXSA8PCAyNCkgfCAoS1tpXSA+Pj4gOCkpICAmIDB4ZmYwMGZmMDApO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gR2VuZXJhdGUgaW5pdGlhbCBzdGF0ZSB2YWx1ZXNcblx0ICAgICAgICAgICAgdmFyIFggPSB0aGlzLl9YID0gW1xuXHQgICAgICAgICAgICAgICAgS1swXSwgKEtbM10gPDwgMTYpIHwgKEtbMl0gPj4+IDE2KSxcblx0ICAgICAgICAgICAgICAgIEtbMV0sIChLWzBdIDw8IDE2KSB8IChLWzNdID4+PiAxNiksXG5cdCAgICAgICAgICAgICAgICBLWzJdLCAoS1sxXSA8PCAxNikgfCAoS1swXSA+Pj4gMTYpLFxuXHQgICAgICAgICAgICAgICAgS1szXSwgKEtbMl0gPDwgMTYpIHwgKEtbMV0gPj4+IDE2KVxuXHQgICAgICAgICAgICBdO1xuXG5cdCAgICAgICAgICAgIC8vIEdlbmVyYXRlIGluaXRpYWwgY291bnRlciB2YWx1ZXNcblx0ICAgICAgICAgICAgdmFyIEMgPSB0aGlzLl9DID0gW1xuXHQgICAgICAgICAgICAgICAgKEtbMl0gPDwgMTYpIHwgKEtbMl0gPj4+IDE2KSwgKEtbMF0gJiAweGZmZmYwMDAwKSB8IChLWzFdICYgMHgwMDAwZmZmZiksXG5cdCAgICAgICAgICAgICAgICAoS1szXSA8PCAxNikgfCAoS1szXSA+Pj4gMTYpLCAoS1sxXSAmIDB4ZmZmZjAwMDApIHwgKEtbMl0gJiAweDAwMDBmZmZmKSxcblx0ICAgICAgICAgICAgICAgIChLWzBdIDw8IDE2KSB8IChLWzBdID4+PiAxNiksIChLWzJdICYgMHhmZmZmMDAwMCkgfCAoS1szXSAmIDB4MDAwMGZmZmYpLFxuXHQgICAgICAgICAgICAgICAgKEtbMV0gPDwgMTYpIHwgKEtbMV0gPj4+IDE2KSwgKEtbM10gJiAweGZmZmYwMDAwKSB8IChLWzBdICYgMHgwMDAwZmZmZilcblx0ICAgICAgICAgICAgXTtcblxuXHQgICAgICAgICAgICAvLyBDYXJyeSBiaXRcblx0ICAgICAgICAgICAgdGhpcy5fYiA9IDA7XG5cblx0ICAgICAgICAgICAgLy8gSXRlcmF0ZSB0aGUgc3lzdGVtIGZvdXIgdGltZXNcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIG5leHRTdGF0ZS5jYWxsKHRoaXMpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gTW9kaWZ5IHRoZSBjb3VudGVyc1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDg7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgQ1tpXSBePSBYWyhpICsgNCkgJiA3XTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIElWIHNldHVwXG5cdCAgICAgICAgICAgIGlmIChpdikge1xuXHQgICAgICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgICAgICB2YXIgSVYgPSBpdi53b3Jkcztcblx0ICAgICAgICAgICAgICAgIHZhciBJVl8wID0gSVZbMF07XG5cdCAgICAgICAgICAgICAgICB2YXIgSVZfMSA9IElWWzFdO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBHZW5lcmF0ZSBmb3VyIHN1YnZlY3RvcnNcblx0ICAgICAgICAgICAgICAgIHZhciBpMCA9ICgoKElWXzAgPDwgOCkgfCAoSVZfMCA+Pj4gMjQpKSAmIDB4MDBmZjAwZmYpIHwgKCgoSVZfMCA8PCAyNCkgfCAoSVZfMCA+Pj4gOCkpICYgMHhmZjAwZmYwMCk7XG5cdCAgICAgICAgICAgICAgICB2YXIgaTIgPSAoKChJVl8xIDw8IDgpIHwgKElWXzEgPj4+IDI0KSkgJiAweDAwZmYwMGZmKSB8ICgoKElWXzEgPDwgMjQpIHwgKElWXzEgPj4+IDgpKSAmIDB4ZmYwMGZmMDApO1xuXHQgICAgICAgICAgICAgICAgdmFyIGkxID0gKGkwID4+PiAxNikgfCAoaTIgJiAweGZmZmYwMDAwKTtcblx0ICAgICAgICAgICAgICAgIHZhciBpMyA9IChpMiA8PCAxNikgIHwgKGkwICYgMHgwMDAwZmZmZik7XG5cblx0ICAgICAgICAgICAgICAgIC8vIE1vZGlmeSBjb3VudGVyIHZhbHVlc1xuXHQgICAgICAgICAgICAgICAgQ1swXSBePSBpMDtcblx0ICAgICAgICAgICAgICAgIENbMV0gXj0gaTE7XG5cdCAgICAgICAgICAgICAgICBDWzJdIF49IGkyO1xuXHQgICAgICAgICAgICAgICAgQ1szXSBePSBpMztcblx0ICAgICAgICAgICAgICAgIENbNF0gXj0gaTA7XG5cdCAgICAgICAgICAgICAgICBDWzVdIF49IGkxO1xuXHQgICAgICAgICAgICAgICAgQ1s2XSBePSBpMjtcblx0ICAgICAgICAgICAgICAgIENbN10gXj0gaTM7XG5cblx0ICAgICAgICAgICAgICAgIC8vIEl0ZXJhdGUgdGhlIHN5c3RlbSBmb3VyIHRpbWVzXG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgICAgIG5leHRTdGF0ZS5jYWxsKHRoaXMpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9kb1Byb2Nlc3NCbG9jazogZnVuY3Rpb24gKE0sIG9mZnNldCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgWCA9IHRoaXMuX1g7XG5cblx0ICAgICAgICAgICAgLy8gSXRlcmF0ZSB0aGUgc3lzdGVtXG5cdCAgICAgICAgICAgIG5leHRTdGF0ZS5jYWxsKHRoaXMpO1xuXG5cdCAgICAgICAgICAgIC8vIEdlbmVyYXRlIGZvdXIga2V5c3RyZWFtIHdvcmRzXG5cdCAgICAgICAgICAgIFNbMF0gPSBYWzBdIF4gKFhbNV0gPj4+IDE2KSBeIChYWzNdIDw8IDE2KTtcblx0ICAgICAgICAgICAgU1sxXSA9IFhbMl0gXiAoWFs3XSA+Pj4gMTYpIF4gKFhbNV0gPDwgMTYpO1xuXHQgICAgICAgICAgICBTWzJdID0gWFs0XSBeIChYWzFdID4+PiAxNikgXiAoWFs3XSA8PCAxNik7XG5cdCAgICAgICAgICAgIFNbM10gPSBYWzZdIF4gKFhbM10gPj4+IDE2KSBeIChYWzFdIDw8IDE2KTtcblxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgLy8gU3dhcCBlbmRpYW5cblx0ICAgICAgICAgICAgICAgIFNbaV0gPSAoKChTW2ldIDw8IDgpICB8IChTW2ldID4+PiAyNCkpICYgMHgwMGZmMDBmZikgfFxuXHQgICAgICAgICAgICAgICAgICAgICAgICgoKFNbaV0gPDwgMjQpIHwgKFNbaV0gPj4+IDgpKSAgJiAweGZmMDBmZjAwKTtcblxuXHQgICAgICAgICAgICAgICAgLy8gRW5jcnlwdFxuXHQgICAgICAgICAgICAgICAgTVtvZmZzZXQgKyBpXSBePSBTW2ldO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIGJsb2NrU2l6ZTogMTI4LzMyLFxuXG5cdCAgICAgICAgaXZTaXplOiA2NC8zMlxuXHQgICAgfSk7XG5cblx0ICAgIGZ1bmN0aW9uIG5leHRTdGF0ZSgpIHtcblx0ICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICB2YXIgWCA9IHRoaXMuX1g7XG5cdCAgICAgICAgdmFyIEMgPSB0aGlzLl9DO1xuXG5cdCAgICAgICAgLy8gU2F2ZSBvbGQgY291bnRlciB2YWx1ZXNcblx0ICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDg7IGkrKykge1xuXHQgICAgICAgICAgICBDX1tpXSA9IENbaV07XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgLy8gQ2FsY3VsYXRlIG5ldyBjb3VudGVyIHZhbHVlc1xuXHQgICAgICAgIENbMF0gPSAoQ1swXSArIDB4NGQzNGQzNGQgKyB0aGlzLl9iKSB8IDA7XG5cdCAgICAgICAgQ1sxXSA9IChDWzFdICsgMHhkMzRkMzRkMyArICgoQ1swXSA+Pj4gMCkgPCAoQ19bMF0gPj4+IDApID8gMSA6IDApKSB8IDA7XG5cdCAgICAgICAgQ1syXSA9IChDWzJdICsgMHgzNGQzNGQzNCArICgoQ1sxXSA+Pj4gMCkgPCAoQ19bMV0gPj4+IDApID8gMSA6IDApKSB8IDA7XG5cdCAgICAgICAgQ1szXSA9IChDWzNdICsgMHg0ZDM0ZDM0ZCArICgoQ1syXSA+Pj4gMCkgPCAoQ19bMl0gPj4+IDApID8gMSA6IDApKSB8IDA7XG5cdCAgICAgICAgQ1s0XSA9IChDWzRdICsgMHhkMzRkMzRkMyArICgoQ1szXSA+Pj4gMCkgPCAoQ19bM10gPj4+IDApID8gMSA6IDApKSB8IDA7XG5cdCAgICAgICAgQ1s1XSA9IChDWzVdICsgMHgzNGQzNGQzNCArICgoQ1s0XSA+Pj4gMCkgPCAoQ19bNF0gPj4+IDApID8gMSA6IDApKSB8IDA7XG5cdCAgICAgICAgQ1s2XSA9IChDWzZdICsgMHg0ZDM0ZDM0ZCArICgoQ1s1XSA+Pj4gMCkgPCAoQ19bNV0gPj4+IDApID8gMSA6IDApKSB8IDA7XG5cdCAgICAgICAgQ1s3XSA9IChDWzddICsgMHhkMzRkMzRkMyArICgoQ1s2XSA+Pj4gMCkgPCAoQ19bNl0gPj4+IDApID8gMSA6IDApKSB8IDA7XG5cdCAgICAgICAgdGhpcy5fYiA9IChDWzddID4+PiAwKSA8IChDX1s3XSA+Pj4gMCkgPyAxIDogMDtcblxuXHQgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgZy12YWx1ZXNcblx0ICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDg7IGkrKykge1xuXHQgICAgICAgICAgICB2YXIgZ3ggPSBYW2ldICsgQ1tpXTtcblxuXHQgICAgICAgICAgICAvLyBDb25zdHJ1Y3QgaGlnaCBhbmQgbG93IGFyZ3VtZW50IGZvciBzcXVhcmluZ1xuXHQgICAgICAgICAgICB2YXIgZ2EgPSBneCAmIDB4ZmZmZjtcblx0ICAgICAgICAgICAgdmFyIGdiID0gZ3ggPj4+IDE2O1xuXG5cdCAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBoaWdoIGFuZCBsb3cgcmVzdWx0IG9mIHNxdWFyaW5nXG5cdCAgICAgICAgICAgIHZhciBnaCA9ICgoKChnYSAqIGdhKSA+Pj4gMTcpICsgZ2EgKiBnYikgPj4+IDE1KSArIGdiICogZ2I7XG5cdCAgICAgICAgICAgIHZhciBnbCA9ICgoKGd4ICYgMHhmZmZmMDAwMCkgKiBneCkgfCAwKSArICgoKGd4ICYgMHgwMDAwZmZmZikgKiBneCkgfCAwKTtcblxuXHQgICAgICAgICAgICAvLyBIaWdoIFhPUiBsb3dcblx0ICAgICAgICAgICAgR1tpXSA9IGdoIF4gZ2w7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgLy8gQ2FsY3VsYXRlIG5ldyBzdGF0ZSB2YWx1ZXNcblx0ICAgICAgICBYWzBdID0gKEdbMF0gKyAoKEdbN10gPDwgMTYpIHwgKEdbN10gPj4+IDE2KSkgKyAoKEdbNl0gPDwgMTYpIHwgKEdbNl0gPj4+IDE2KSkpIHwgMDtcblx0ICAgICAgICBYWzFdID0gKEdbMV0gKyAoKEdbMF0gPDwgOCkgIHwgKEdbMF0gPj4+IDI0KSkgKyBHWzddKSB8IDA7XG5cdCAgICAgICAgWFsyXSA9IChHWzJdICsgKChHWzFdIDw8IDE2KSB8IChHWzFdID4+PiAxNikpICsgKChHWzBdIDw8IDE2KSB8IChHWzBdID4+PiAxNikpKSB8IDA7XG5cdCAgICAgICAgWFszXSA9IChHWzNdICsgKChHWzJdIDw8IDgpICB8IChHWzJdID4+PiAyNCkpICsgR1sxXSkgfCAwO1xuXHQgICAgICAgIFhbNF0gPSAoR1s0XSArICgoR1szXSA8PCAxNikgfCAoR1szXSA+Pj4gMTYpKSArICgoR1syXSA8PCAxNikgfCAoR1syXSA+Pj4gMTYpKSkgfCAwO1xuXHQgICAgICAgIFhbNV0gPSAoR1s1XSArICgoR1s0XSA8PCA4KSAgfCAoR1s0XSA+Pj4gMjQpKSArIEdbM10pIHwgMDtcblx0ICAgICAgICBYWzZdID0gKEdbNl0gKyAoKEdbNV0gPDwgMTYpIHwgKEdbNV0gPj4+IDE2KSkgKyAoKEdbNF0gPDwgMTYpIHwgKEdbNF0gPj4+IDE2KSkpIHwgMDtcblx0ICAgICAgICBYWzddID0gKEdbN10gKyAoKEdbNl0gPDwgOCkgIHwgKEdbNl0gPj4+IDI0KSkgKyBHWzVdKSB8IDA7XG5cdCAgICB9XG5cblx0ICAgIC8qKlxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb25zIHRvIHRoZSBjaXBoZXIncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICpcblx0ICAgICAqIEBleGFtcGxlXG5cdCAgICAgKlxuXHQgICAgICogICAgIHZhciBjaXBoZXJ0ZXh0ID0gQ3J5cHRvSlMuUmFiYml0LmVuY3J5cHQobWVzc2FnZSwga2V5LCBjZmcpO1xuXHQgICAgICogICAgIHZhciBwbGFpbnRleHQgID0gQ3J5cHRvSlMuUmFiYml0LmRlY3J5cHQoY2lwaGVydGV4dCwga2V5LCBjZmcpO1xuXHQgICAgICovXG5cdCAgICBDLlJhYmJpdCA9IFN0cmVhbUNpcGhlci5fY3JlYXRlSGVscGVyKFJhYmJpdCk7XG5cdH0oKSk7XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlMuUmFiYml0O1xuXG59KSk7IiwgIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnksIHVuZGVmKSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpLCByZXF1aXJlKFwiLi9lbmMtYmFzZTY0XCIpLCByZXF1aXJlKFwiLi9tZDVcIiksIHJlcXVpcmUoXCIuL2V2cGtkZlwiKSwgcmVxdWlyZShcIi4vY2lwaGVyLWNvcmVcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiLCBcIi4vZW5jLWJhc2U2NFwiLCBcIi4vbWQ1XCIsIFwiLi9ldnBrZGZcIiwgXCIuL2NpcGhlci1jb3JlXCJdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcblxuXHQoZnVuY3Rpb24gKCkge1xuXHQgICAgLy8gU2hvcnRjdXRzXG5cdCAgICB2YXIgQyA9IENyeXB0b0pTO1xuXHQgICAgdmFyIENfbGliID0gQy5saWI7XG5cdCAgICB2YXIgU3RyZWFtQ2lwaGVyID0gQ19saWIuU3RyZWFtQ2lwaGVyO1xuXHQgICAgdmFyIENfYWxnbyA9IEMuYWxnbztcblxuXHQgICAgLy8gUmV1c2FibGUgb2JqZWN0c1xuXHQgICAgdmFyIFMgID0gW107XG5cdCAgICB2YXIgQ18gPSBbXTtcblx0ICAgIHZhciBHICA9IFtdO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFJhYmJpdCBzdHJlYW0gY2lwaGVyIGFsZ29yaXRobS5cblx0ICAgICAqXG5cdCAgICAgKiBUaGlzIGlzIGEgbGVnYWN5IHZlcnNpb24gdGhhdCBuZWdsZWN0ZWQgdG8gY29udmVydCB0aGUga2V5IHRvIGxpdHRsZS1lbmRpYW4uXG5cdCAgICAgKiBUaGlzIGVycm9yIGRvZXNuJ3QgYWZmZWN0IHRoZSBjaXBoZXIncyBzZWN1cml0eSxcblx0ICAgICAqIGJ1dCBpdCBkb2VzIGFmZmVjdCBpdHMgY29tcGF0aWJpbGl0eSB3aXRoIG90aGVyIGltcGxlbWVudGF0aW9ucy5cblx0ICAgICAqL1xuXHQgICAgdmFyIFJhYmJpdExlZ2FjeSA9IENfYWxnby5SYWJiaXRMZWdhY3kgPSBTdHJlYW1DaXBoZXIuZXh0ZW5kKHtcblx0ICAgICAgICBfZG9SZXNldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIEsgPSB0aGlzLl9rZXkud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBpdiA9IHRoaXMuY2ZnLml2O1xuXG5cdCAgICAgICAgICAgIC8vIEdlbmVyYXRlIGluaXRpYWwgc3RhdGUgdmFsdWVzXG5cdCAgICAgICAgICAgIHZhciBYID0gdGhpcy5fWCA9IFtcblx0ICAgICAgICAgICAgICAgIEtbMF0sIChLWzNdIDw8IDE2KSB8IChLWzJdID4+PiAxNiksXG5cdCAgICAgICAgICAgICAgICBLWzFdLCAoS1swXSA8PCAxNikgfCAoS1szXSA+Pj4gMTYpLFxuXHQgICAgICAgICAgICAgICAgS1syXSwgKEtbMV0gPDwgMTYpIHwgKEtbMF0gPj4+IDE2KSxcblx0ICAgICAgICAgICAgICAgIEtbM10sIChLWzJdIDw8IDE2KSB8IChLWzFdID4+PiAxNilcblx0ICAgICAgICAgICAgXTtcblxuXHQgICAgICAgICAgICAvLyBHZW5lcmF0ZSBpbml0aWFsIGNvdW50ZXIgdmFsdWVzXG5cdCAgICAgICAgICAgIHZhciBDID0gdGhpcy5fQyA9IFtcblx0ICAgICAgICAgICAgICAgIChLWzJdIDw8IDE2KSB8IChLWzJdID4+PiAxNiksIChLWzBdICYgMHhmZmZmMDAwMCkgfCAoS1sxXSAmIDB4MDAwMGZmZmYpLFxuXHQgICAgICAgICAgICAgICAgKEtbM10gPDwgMTYpIHwgKEtbM10gPj4+IDE2KSwgKEtbMV0gJiAweGZmZmYwMDAwKSB8IChLWzJdICYgMHgwMDAwZmZmZiksXG5cdCAgICAgICAgICAgICAgICAoS1swXSA8PCAxNikgfCAoS1swXSA+Pj4gMTYpLCAoS1syXSAmIDB4ZmZmZjAwMDApIHwgKEtbM10gJiAweDAwMDBmZmZmKSxcblx0ICAgICAgICAgICAgICAgIChLWzFdIDw8IDE2KSB8IChLWzFdID4+PiAxNiksIChLWzNdICYgMHhmZmZmMDAwMCkgfCAoS1swXSAmIDB4MDAwMGZmZmYpXG5cdCAgICAgICAgICAgIF07XG5cblx0ICAgICAgICAgICAgLy8gQ2FycnkgYml0XG5cdCAgICAgICAgICAgIHRoaXMuX2IgPSAwO1xuXG5cdCAgICAgICAgICAgIC8vIEl0ZXJhdGUgdGhlIHN5c3RlbSBmb3VyIHRpbWVzXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICBuZXh0U3RhdGUuY2FsbCh0aGlzKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIE1vZGlmeSB0aGUgY291bnRlcnNcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA4OyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIENbaV0gXj0gWFsoaSArIDQpICYgN107XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBJViBzZXR1cFxuXHQgICAgICAgICAgICBpZiAoaXYpIHtcblx0ICAgICAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICAgICAgdmFyIElWID0gaXYud29yZHM7XG5cdCAgICAgICAgICAgICAgICB2YXIgSVZfMCA9IElWWzBdO1xuXHQgICAgICAgICAgICAgICAgdmFyIElWXzEgPSBJVlsxXTtcblxuXHQgICAgICAgICAgICAgICAgLy8gR2VuZXJhdGUgZm91ciBzdWJ2ZWN0b3JzXG5cdCAgICAgICAgICAgICAgICB2YXIgaTAgPSAoKChJVl8wIDw8IDgpIHwgKElWXzAgPj4+IDI0KSkgJiAweDAwZmYwMGZmKSB8ICgoKElWXzAgPDwgMjQpIHwgKElWXzAgPj4+IDgpKSAmIDB4ZmYwMGZmMDApO1xuXHQgICAgICAgICAgICAgICAgdmFyIGkyID0gKCgoSVZfMSA8PCA4KSB8IChJVl8xID4+PiAyNCkpICYgMHgwMGZmMDBmZikgfCAoKChJVl8xIDw8IDI0KSB8IChJVl8xID4+PiA4KSkgJiAweGZmMDBmZjAwKTtcblx0ICAgICAgICAgICAgICAgIHZhciBpMSA9IChpMCA+Pj4gMTYpIHwgKGkyICYgMHhmZmZmMDAwMCk7XG5cdCAgICAgICAgICAgICAgICB2YXIgaTMgPSAoaTIgPDwgMTYpICB8IChpMCAmIDB4MDAwMGZmZmYpO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBNb2RpZnkgY291bnRlciB2YWx1ZXNcblx0ICAgICAgICAgICAgICAgIENbMF0gXj0gaTA7XG5cdCAgICAgICAgICAgICAgICBDWzFdIF49IGkxO1xuXHQgICAgICAgICAgICAgICAgQ1syXSBePSBpMjtcblx0ICAgICAgICAgICAgICAgIENbM10gXj0gaTM7XG5cdCAgICAgICAgICAgICAgICBDWzRdIF49IGkwO1xuXHQgICAgICAgICAgICAgICAgQ1s1XSBePSBpMTtcblx0ICAgICAgICAgICAgICAgIENbNl0gXj0gaTI7XG5cdCAgICAgICAgICAgICAgICBDWzddIF49IGkzO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBJdGVyYXRlIHRoZSBzeXN0ZW0gZm91ciB0aW1lc1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcblx0ICAgICAgICAgICAgICAgICAgICBuZXh0U3RhdGUuY2FsbCh0aGlzKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfZG9Qcm9jZXNzQmxvY2s6IGZ1bmN0aW9uIChNLCBvZmZzZXQpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgdmFyIFggPSB0aGlzLl9YO1xuXG5cdCAgICAgICAgICAgIC8vIEl0ZXJhdGUgdGhlIHN5c3RlbVxuXHQgICAgICAgICAgICBuZXh0U3RhdGUuY2FsbCh0aGlzKTtcblxuXHQgICAgICAgICAgICAvLyBHZW5lcmF0ZSBmb3VyIGtleXN0cmVhbSB3b3Jkc1xuXHQgICAgICAgICAgICBTWzBdID0gWFswXSBeIChYWzVdID4+PiAxNikgXiAoWFszXSA8PCAxNik7XG5cdCAgICAgICAgICAgIFNbMV0gPSBYWzJdIF4gKFhbN10gPj4+IDE2KSBeIChYWzVdIDw8IDE2KTtcblx0ICAgICAgICAgICAgU1syXSA9IFhbNF0gXiAoWFsxXSA+Pj4gMTYpIF4gKFhbN10gPDwgMTYpO1xuXHQgICAgICAgICAgICBTWzNdID0gWFs2XSBeIChYWzNdID4+PiAxNikgXiAoWFsxXSA8PCAxNik7XG5cblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIC8vIFN3YXAgZW5kaWFuXG5cdCAgICAgICAgICAgICAgICBTW2ldID0gKCgoU1tpXSA8PCA4KSAgfCAoU1tpXSA+Pj4gMjQpKSAmIDB4MDBmZjAwZmYpIHxcblx0ICAgICAgICAgICAgICAgICAgICAgICAoKChTW2ldIDw8IDI0KSB8IChTW2ldID4+PiA4KSkgICYgMHhmZjAwZmYwMCk7XG5cblx0ICAgICAgICAgICAgICAgIC8vIEVuY3J5cHRcblx0ICAgICAgICAgICAgICAgIE1bb2Zmc2V0ICsgaV0gXj0gU1tpXTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBibG9ja1NpemU6IDEyOC8zMixcblxuXHQgICAgICAgIGl2U2l6ZTogNjQvMzJcblx0ICAgIH0pO1xuXG5cdCAgICBmdW5jdGlvbiBuZXh0U3RhdGUoKSB7XG5cdCAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgdmFyIFggPSB0aGlzLl9YO1xuXHQgICAgICAgIHZhciBDID0gdGhpcy5fQztcblxuXHQgICAgICAgIC8vIFNhdmUgb2xkIGNvdW50ZXIgdmFsdWVzXG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA4OyBpKyspIHtcblx0ICAgICAgICAgICAgQ19baV0gPSBDW2ldO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIC8vIENhbGN1bGF0ZSBuZXcgY291bnRlciB2YWx1ZXNcblx0ICAgICAgICBDWzBdID0gKENbMF0gKyAweDRkMzRkMzRkICsgdGhpcy5fYikgfCAwO1xuXHQgICAgICAgIENbMV0gPSAoQ1sxXSArIDB4ZDM0ZDM0ZDMgKyAoKENbMF0gPj4+IDApIDwgKENfWzBdID4+PiAwKSA/IDEgOiAwKSkgfCAwO1xuXHQgICAgICAgIENbMl0gPSAoQ1syXSArIDB4MzRkMzRkMzQgKyAoKENbMV0gPj4+IDApIDwgKENfWzFdID4+PiAwKSA/IDEgOiAwKSkgfCAwO1xuXHQgICAgICAgIENbM10gPSAoQ1szXSArIDB4NGQzNGQzNGQgKyAoKENbMl0gPj4+IDApIDwgKENfWzJdID4+PiAwKSA/IDEgOiAwKSkgfCAwO1xuXHQgICAgICAgIENbNF0gPSAoQ1s0XSArIDB4ZDM0ZDM0ZDMgKyAoKENbM10gPj4+IDApIDwgKENfWzNdID4+PiAwKSA/IDEgOiAwKSkgfCAwO1xuXHQgICAgICAgIENbNV0gPSAoQ1s1XSArIDB4MzRkMzRkMzQgKyAoKENbNF0gPj4+IDApIDwgKENfWzRdID4+PiAwKSA/IDEgOiAwKSkgfCAwO1xuXHQgICAgICAgIENbNl0gPSAoQ1s2XSArIDB4NGQzNGQzNGQgKyAoKENbNV0gPj4+IDApIDwgKENfWzVdID4+PiAwKSA/IDEgOiAwKSkgfCAwO1xuXHQgICAgICAgIENbN10gPSAoQ1s3XSArIDB4ZDM0ZDM0ZDMgKyAoKENbNl0gPj4+IDApIDwgKENfWzZdID4+PiAwKSA/IDEgOiAwKSkgfCAwO1xuXHQgICAgICAgIHRoaXMuX2IgPSAoQ1s3XSA+Pj4gMCkgPCAoQ19bN10gPj4+IDApID8gMSA6IDA7XG5cblx0ICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIGctdmFsdWVzXG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA4OyBpKyspIHtcblx0ICAgICAgICAgICAgdmFyIGd4ID0gWFtpXSArIENbaV07XG5cblx0ICAgICAgICAgICAgLy8gQ29uc3RydWN0IGhpZ2ggYW5kIGxvdyBhcmd1bWVudCBmb3Igc3F1YXJpbmdcblx0ICAgICAgICAgICAgdmFyIGdhID0gZ3ggJiAweGZmZmY7XG5cdCAgICAgICAgICAgIHZhciBnYiA9IGd4ID4+PiAxNjtcblxuXHQgICAgICAgICAgICAvLyBDYWxjdWxhdGUgaGlnaCBhbmQgbG93IHJlc3VsdCBvZiBzcXVhcmluZ1xuXHQgICAgICAgICAgICB2YXIgZ2ggPSAoKCgoZ2EgKiBnYSkgPj4+IDE3KSArIGdhICogZ2IpID4+PiAxNSkgKyBnYiAqIGdiO1xuXHQgICAgICAgICAgICB2YXIgZ2wgPSAoKChneCAmIDB4ZmZmZjAwMDApICogZ3gpIHwgMCkgKyAoKChneCAmIDB4MDAwMGZmZmYpICogZ3gpIHwgMCk7XG5cblx0ICAgICAgICAgICAgLy8gSGlnaCBYT1IgbG93XG5cdCAgICAgICAgICAgIEdbaV0gPSBnaCBeIGdsO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIC8vIENhbGN1bGF0ZSBuZXcgc3RhdGUgdmFsdWVzXG5cdCAgICAgICAgWFswXSA9IChHWzBdICsgKChHWzddIDw8IDE2KSB8IChHWzddID4+PiAxNikpICsgKChHWzZdIDw8IDE2KSB8IChHWzZdID4+PiAxNikpKSB8IDA7XG5cdCAgICAgICAgWFsxXSA9IChHWzFdICsgKChHWzBdIDw8IDgpICB8IChHWzBdID4+PiAyNCkpICsgR1s3XSkgfCAwO1xuXHQgICAgICAgIFhbMl0gPSAoR1syXSArICgoR1sxXSA8PCAxNikgfCAoR1sxXSA+Pj4gMTYpKSArICgoR1swXSA8PCAxNikgfCAoR1swXSA+Pj4gMTYpKSkgfCAwO1xuXHQgICAgICAgIFhbM10gPSAoR1szXSArICgoR1syXSA8PCA4KSAgfCAoR1syXSA+Pj4gMjQpKSArIEdbMV0pIHwgMDtcblx0ICAgICAgICBYWzRdID0gKEdbNF0gKyAoKEdbM10gPDwgMTYpIHwgKEdbM10gPj4+IDE2KSkgKyAoKEdbMl0gPDwgMTYpIHwgKEdbMl0gPj4+IDE2KSkpIHwgMDtcblx0ICAgICAgICBYWzVdID0gKEdbNV0gKyAoKEdbNF0gPDwgOCkgIHwgKEdbNF0gPj4+IDI0KSkgKyBHWzNdKSB8IDA7XG5cdCAgICAgICAgWFs2XSA9IChHWzZdICsgKChHWzVdIDw8IDE2KSB8IChHWzVdID4+PiAxNikpICsgKChHWzRdIDw8IDE2KSB8IChHWzRdID4+PiAxNikpKSB8IDA7XG5cdCAgICAgICAgWFs3XSA9IChHWzddICsgKChHWzZdIDw8IDgpICB8IChHWzZdID4+PiAyNCkpICsgR1s1XSkgfCAwO1xuXHQgICAgfVxuXG5cdCAgICAvKipcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9ucyB0byB0aGUgY2lwaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAqXG5cdCAgICAgKiBAZXhhbXBsZVxuXHQgICAgICpcblx0ICAgICAqICAgICB2YXIgY2lwaGVydGV4dCA9IENyeXB0b0pTLlJhYmJpdExlZ2FjeS5lbmNyeXB0KG1lc3NhZ2UsIGtleSwgY2ZnKTtcblx0ICAgICAqICAgICB2YXIgcGxhaW50ZXh0ICA9IENyeXB0b0pTLlJhYmJpdExlZ2FjeS5kZWNyeXB0KGNpcGhlcnRleHQsIGtleSwgY2ZnKTtcblx0ICAgICAqL1xuXHQgICAgQy5SYWJiaXRMZWdhY3kgPSBTdHJlYW1DaXBoZXIuX2NyZWF0ZUhlbHBlcihSYWJiaXRMZWdhY3kpO1xuXHR9KCkpO1xuXG5cblx0cmV0dXJuIENyeXB0b0pTLlJhYmJpdExlZ2FjeTtcblxufSkpOyIsICI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5LCB1bmRlZikge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSwgcmVxdWlyZShcIi4veDY0LWNvcmVcIiksIHJlcXVpcmUoXCIuL2xpYi10eXBlZGFycmF5c1wiKSwgcmVxdWlyZShcIi4vZW5jLXV0ZjE2XCIpLCByZXF1aXJlKFwiLi9lbmMtYmFzZTY0XCIpLCByZXF1aXJlKFwiLi9lbmMtYmFzZTY0dXJsXCIpLCByZXF1aXJlKFwiLi9tZDVcIiksIHJlcXVpcmUoXCIuL3NoYTFcIiksIHJlcXVpcmUoXCIuL3NoYTI1NlwiKSwgcmVxdWlyZShcIi4vc2hhMjI0XCIpLCByZXF1aXJlKFwiLi9zaGE1MTJcIiksIHJlcXVpcmUoXCIuL3NoYTM4NFwiKSwgcmVxdWlyZShcIi4vc2hhM1wiKSwgcmVxdWlyZShcIi4vcmlwZW1kMTYwXCIpLCByZXF1aXJlKFwiLi9obWFjXCIpLCByZXF1aXJlKFwiLi9wYmtkZjJcIiksIHJlcXVpcmUoXCIuL2V2cGtkZlwiKSwgcmVxdWlyZShcIi4vY2lwaGVyLWNvcmVcIiksIHJlcXVpcmUoXCIuL21vZGUtY2ZiXCIpLCByZXF1aXJlKFwiLi9tb2RlLWN0clwiKSwgcmVxdWlyZShcIi4vbW9kZS1jdHItZ2xhZG1hblwiKSwgcmVxdWlyZShcIi4vbW9kZS1vZmJcIiksIHJlcXVpcmUoXCIuL21vZGUtZWNiXCIpLCByZXF1aXJlKFwiLi9wYWQtYW5zaXg5MjNcIiksIHJlcXVpcmUoXCIuL3BhZC1pc28xMDEyNlwiKSwgcmVxdWlyZShcIi4vcGFkLWlzbzk3OTcxXCIpLCByZXF1aXJlKFwiLi9wYWQtemVyb3BhZGRpbmdcIiksIHJlcXVpcmUoXCIuL3BhZC1ub3BhZGRpbmdcIiksIHJlcXVpcmUoXCIuL2Zvcm1hdC1oZXhcIiksIHJlcXVpcmUoXCIuL2Flc1wiKSwgcmVxdWlyZShcIi4vdHJpcGxlZGVzXCIpLCByZXF1aXJlKFwiLi9yYzRcIiksIHJlcXVpcmUoXCIuL3JhYmJpdFwiKSwgcmVxdWlyZShcIi4vcmFiYml0LWxlZ2FjeVwiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCIsIFwiLi94NjQtY29yZVwiLCBcIi4vbGliLXR5cGVkYXJyYXlzXCIsIFwiLi9lbmMtdXRmMTZcIiwgXCIuL2VuYy1iYXNlNjRcIiwgXCIuL2VuYy1iYXNlNjR1cmxcIiwgXCIuL21kNVwiLCBcIi4vc2hhMVwiLCBcIi4vc2hhMjU2XCIsIFwiLi9zaGEyMjRcIiwgXCIuL3NoYTUxMlwiLCBcIi4vc2hhMzg0XCIsIFwiLi9zaGEzXCIsIFwiLi9yaXBlbWQxNjBcIiwgXCIuL2htYWNcIiwgXCIuL3Bia2RmMlwiLCBcIi4vZXZwa2RmXCIsIFwiLi9jaXBoZXItY29yZVwiLCBcIi4vbW9kZS1jZmJcIiwgXCIuL21vZGUtY3RyXCIsIFwiLi9tb2RlLWN0ci1nbGFkbWFuXCIsIFwiLi9tb2RlLW9mYlwiLCBcIi4vbW9kZS1lY2JcIiwgXCIuL3BhZC1hbnNpeDkyM1wiLCBcIi4vcGFkLWlzbzEwMTI2XCIsIFwiLi9wYWQtaXNvOTc5NzFcIiwgXCIuL3BhZC16ZXJvcGFkZGluZ1wiLCBcIi4vcGFkLW5vcGFkZGluZ1wiLCBcIi4vZm9ybWF0LWhleFwiLCBcIi4vYWVzXCIsIFwiLi90cmlwbGVkZXNcIiwgXCIuL3JjNFwiLCBcIi4vcmFiYml0XCIsIFwiLi9yYWJiaXQtbGVnYWN5XCJdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0cm9vdC5DcnlwdG9KUyA9IGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0cmV0dXJuIENyeXB0b0pTO1xuXG59KSk7IiwgImltcG9ydCAqIGFzIENyeXB0b0pTIGZyb20gXCJjcnlwdG8tanNcIjtcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCBjbGFzcyBBcHBTdG9yYWdlIHtcblxuICBDcnlwdG9KUyA9IENyeXB0b0pTO1xuXG4gIHB1YmxpYyByZWFkb25seSBlZGl0aW9uVHlwZTogdHlwZXMuRWRpdGlvblR5cGUgfCB1bmRlZmluZWQ7XG5cbiAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKGVkaXRpb25UeXBlPzogdHlwZXMuRWRpdGlvblR5cGUpe1xuICAgIGNvbnNvbGUubG9nKFwiQXBwU3RvcmFnZSBjcmVhdGVkXCIpO1xuICAgIHRoaXMuZWRpdGlvblR5cGUgPSBlZGl0aW9uVHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogQXBwU3RvcmFnZSB7XG4gICAgcmV0dXJuIG5ldyBBcHBTdG9yYWdlKCk7XG4gIH1cblxuICBwdWJsaWMgY29tbW9uKGlucHV0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnNvbGUubG9nKGBDYWxsZWQgQXBwU3RvcmFnZS5jb21tb24gd2l0aCAke2lucHV0fWApO1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuXG5cbiAgcHVibGljIGNvbW1vblJlZGVmaW5lZChpbnB1dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb21tb24oaW5wdXQpO1xuICB9XG59IiwgImltcG9ydCB7RWRpdGlvblR5cGV9IGZyb20gXCIuLi9jb21tb24vdHlwZXNcIjtcbmltcG9ydCB7QXBwU3RvcmFnZX0gZnJvbSBcIi4uL2NvbW1vbi9hcHBzdG9yYWdlXCI7XG5cbmV4cG9ydCBjbGFzcyBBcHBTdG9yYWdlT0UgZXh0ZW5kcyBBcHBTdG9yYWdlIHtcblxuICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IEFwcFN0b3JhZ2Uge1xuICAgIHJldHVybiBuZXcgQXBwU3RvcmFnZU9FKCk7XG4gIH1cblxuICBwdWJsaWMgY29uc3RydWN0b3IoKXtcbiAgICBzdXBlcihFZGl0aW9uVHlwZS5vcGVuRWRpdGlvbik7XG4gIH1cblxuICBwdWJsaWMgb3Blbk1ldGhvZChpbnB1dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zb2xlLmxvZyhpbnB1dCk7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG5cbiAgcHVibGljIGNvbW1vblJlZGVmaW5lZChpbnB1dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zb2xlLmxvZyhcIm9wZW4gZWRpdGlvbiByZWRlZmluZWQgdGhpc1wiKTtcbiAgICBpbnB1dCArPSBcIiByZWRlZmluZWQgT0VcIjtcbiAgICByZXR1cm4gc3VwZXIuY29tbW9uUmVkZWZpbmVkKGlucHV0KTtcbiAgfVxufSIsICJkZWNsYXJlIGNvbnN0IEFwcFN5bmM6IGFueTtcblxuZnVuY3Rpb24gaXNBcmdzT2JqZWN0KGFyZ3NPYmplY3Q6IGFueSkge1xuICAgIGxldCBpc0FyZ3NPYmplY3QgPSBmYWxzZTtcbiAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBhcmdzT2JqZWN0ID09ICdvYmplY3QnICYmIC8vIG11c3QgYmUgYW4gb2JqZWN0XG4gICAgICAgIHR5cGVvZiBhcmdzT2JqZWN0LmdldE1ldGFkYXRhICE9ICdmdW5jdGlvbicgJiYgLy8gbXVzdCBub3QgYmUgYSBVSTUgZWxlbWVudFxuICAgICAgICB0eXBlb2YgYXJnc09iamVjdC5zb3VyY2UgIT0gJ3VuZGVmaW5lZCdcbiAgICApIHtcbiAgICAgICAgLy8gbXVzdCBhdCBsZWFzdCBoYXZlIHNvdXJjZSBwYXJhbWV0ZXIgc2V0LCBhbGwgTW9kZWxEYXRhIGZ1bmN0aW9ucyByZXF1aXJlIHRoYXRcbiAgICAgICAgaXNBcmdzT2JqZWN0ID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGlzQXJnc09iamVjdDtcbn1cblxuZnVuY3Rpb24gZW5zdXJlQXJyYXkoZGF0YTogc3RyaW5nIHwgc3RyaW5nW10pOiBzdHJpbmdbXSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgIGRhdGEgPSBkYXRhID09PSB1bmRlZmluZWQgPyBbXSA6IFtkYXRhXTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIGVuc3VyZU9wZXJhdG9yKG9wZXI6IHN0cmluZyB8IHN0cmluZ1tdLCBsZW5ndGg6IG51bWJlcikge1xuICAgIGxldCBmaWxsT3BlcmF0b3IgPSAnRVEnO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShvcGVyKSkge1xuICAgICAgICAvLyBpZiBvbmx5IGEgc2luZ2xlIHZhbHVlIHdhcyBwYXNzZWQsIHVzZSBpdCBmb3IgYWxsIHRoZSBvcGVyYXRvciBhcnJheSBlbnRyaWVzXG4gICAgICAgIGZpbGxPcGVyYXRvciA9IG9wZXI7XG4gICAgICAgIG9wZXIgPSBbXTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IG9wZXIubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgb3BlcltpXSA9IGZpbGxPcGVyYXRvcjtcbiAgICB9XG4gICAgcmV0dXJuIG9wZXI7XG59XG5cbmZ1bmN0aW9uIENvbXBhcmUobG9va0luLCBsb29rRm9yLCBvcGVyKSB7XG4gICAgaWYgKFxuICAgICAgICBBcnJheS5pc0FycmF5KGxvb2tJbikgJiZcbiAgICAgICAgbG9va0ZvciAhPT0gbnVsbCAmJlxuICAgICAgICB0eXBlb2YgbG9va0ZvciA9PSAnb2JqZWN0JyAmJlxuICAgICAgICBPYmplY3Qua2V5cyhsb29rRm9yKS5sZW5ndGggPiAwXG4gICAgKSB7XG4gICAgICAgIC8vIGlmIHNlYXJjaCBzdWJqZWN0IGlzIGFuIGFycmF5LCBhbmQgbG9va0ZvciBpcyBhbiBvYmplY3QsXG4gICAgICAgIC8vICAgPj4gd2UgYXNzdW1lIGxvb2tJbiBob2xkcyBvYmplY3RzIGFzIHdlbGxcbiAgICAgICAgLy8gICB0aGVuIGxvb2sgdGhyb3VnaCBhbGwgZW50cmllcywgaWYgb25lIG1hdGNoZXMgdGhlbiB0aGUgcGFyZW50IG9iamVjdCBlbnRyeSBtYXRjaGVzXG4gICAgICAgIGxldCBiQ29tcGFyZSA9IGZhbHNlOyAvLyBzdGFydCB3aXRoIGZhbHNlLCBidXQgdXNlIE9SIHRvIGNvbXBhcmUgcmVzdWx0cywgYW55IG9uZSBpcyBmaW5lXG4gICAgICAgIC8vIGxldCdzIHRyeSB0aGlzIGFzIGEgcmVjdXJzaXZlIGNhbGwgb2YgTW9kZWxEYXRhLkZpbmQsIHNpbmNlIHdlIGNhbiB1c2UgYXJyYXlzIG5vdyEhXG4gICAgICAgIE9iamVjdC5rZXlzKGxvb2tGb3IpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgYkNvbXBhcmUgPSBiQ29tcGFyZSB8fCBGaW5kKGxvb2tJbiwga2V5LCBsb29rRm9yW2tleV0sIG9wZXIpLmxlbmd0aCA+IDA7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYkNvbXBhcmU7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGxvb2tJbikpIHtcbiAgICAgICAgLy8gaWYgc2VhcmNoIHN1YmplY3QgaXMgYW4gYXJyYXksIGFuZCBsb29rRm9yIGlzIGEgc2ltcGxlIHZhbHVlXG4gICAgICAgIC8vICAgPj4gd2UgYXNzdW1lIGxvb2tJbiBob2xkcyBzaW1wbGUgdmFsdWVzIGFzIHdlbGxcbiAgICAgICAgLy8gICB0aGVuIGxvb2sgdGhyb3VnaCBhbGwgZW50cmllcywgaWYgb25lIG1hdGNoZXMgdGhlbiB0aGUgcGFyZW50IG9iamVjdCBlbnRyeSBtYXRjaGVzXG4gICAgICAgIGxldCBiQ29tcGFyZSA9IGZhbHNlOyAvLyBzdGFydCB3aXRoIGZhbHNlLCBidXQgdXNlIE9SIHRvIGNvbXBhcmUgcmVzdWx0cywgYW55IG9uZSBpcyBmaW5lXG4gICAgICAgIGxvb2tJbi5mb3JFYWNoKGZ1bmN0aW9uIChsb29rSW5WYWx1ZSkge1xuICAgICAgICAgICAgYkNvbXBhcmUgPSBiQ29tcGFyZSB8fCBDb21wYXJlU2ltcGxlVmFsdWVzKGxvb2tJblZhbHVlLCBsb29rRm9yLCBvcGVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBiQ29tcGFyZTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgICB0eXBlb2YgbG9va0luID09ICdvYmplY3QnICYmXG4gICAgICAgIGxvb2tGb3IgIT09IG51bGwgJiZcbiAgICAgICAgdHlwZW9mIGxvb2tGb3IgPT0gJ29iamVjdCcgJiZcbiAgICAgICAgT2JqZWN0LmtleXMobG9va0ZvcikubGVuZ3RoID4gMFxuICAgICkge1xuICAgICAgICBsZXQgYkNvbXBhcmUgPSB0cnVlOyAvLyBzdGFydCB3aXRoIHRydWUsIGJ1dCB1c2UgQU5EIHRvIGNvbXBhcmUgcmVzdWx0cywgYWxsIG11c3QgbWF0Y2hcbiAgICAgICAgLy8gaWYgb2JqZWN0IGlzIHVzZWQgYXMgYSBzZWFyY2ggY3JpdGVyaWEsIGFsbCBpdHMgYXR0cmlidXRlcyBtdXN0IG1hdGNoIVxuICAgICAgICBPYmplY3Qua2V5cyhsb29rRm9yKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGJDb21wYXJlID0gYkNvbXBhcmUgJiYgQ29tcGFyZVNpbXBsZVZhbHVlcyhsb29rSW5ba2V5XSwgbG9va0ZvcltrZXldLCBvcGVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBiQ29tcGFyZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gQ29tcGFyZVNpbXBsZVZhbHVlcyhsb29rSW4sIGxvb2tGb3IsIG9wZXIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gQ29tcGFyZVNpbXBsZVZhbHVlcyhsb29rSW4sIGxvb2tGb3IsIG9wZXIpIHtcbiAgICBsZXQgYkNvbXBhcmUgPSBmYWxzZTtcbiAgICBzd2l0Y2ggKG9wZXIpIHtcbiAgICAgICAgY2FzZSAnQ29udGFpbnMnOlxuICAgICAgICAgICAgYkNvbXBhcmUgPSBsb29rSW4uaW5kZXhPZihsb29rRm9yKSAhPSAtMTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ05FJzpcbiAgICAgICAgICAgIGJDb21wYXJlID0gbG9va0luICE9IGxvb2tGb3I7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdHVCc6XG4gICAgICAgICAgICBiQ29tcGFyZSA9IGxvb2tJbiA+IGxvb2tGb3I7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdHRSc6XG4gICAgICAgICAgICBiQ29tcGFyZSA9IGxvb2tJbiA+PSBsb29rRm9yO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnTFQnOlxuICAgICAgICAgICAgYkNvbXBhcmUgPSBsb29rSW4gPCBsb29rRm9yO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnTEUnOlxuICAgICAgICAgICAgYkNvbXBhcmUgPSBsb29rSW4gPD0gbG9va0ZvcjtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0JUJzpcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGxvb2tGb3IpICYmIGxvb2tGb3IubGVuZ3RoID09IDIpIHtcbiAgICAgICAgICAgICAgICBiQ29tcGFyZSA9IGxvb2tJbiA+PSBsb29rRm9yWzBdICYmIGxvb2tJbiA8PSBsb29rRm9yWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnU3RhcnRzV2l0aCc6XG4gICAgICAgICAgICBiQ29tcGFyZSA9XG4gICAgICAgICAgICAgICAgbG9va0Zvci50b1N0cmluZygpLmxlbmd0aCA8PSBsb29rSW4udG9TdHJpbmcoKS5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICBsb29rRm9yLnRvU3RyaW5nKCkgPT0gbG9va0luLnRvU3RyaW5nKCkuc3Vic3RyKDAsIGxvb2tGb3IudG9TdHJpbmcoKS5sZW5ndGgpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnRW5kc1dpdGgnOlxuICAgICAgICAgICAgYkNvbXBhcmUgPVxuICAgICAgICAgICAgICAgIGxvb2tGb3IudG9TdHJpbmcoKS5sZW5ndGggPD0gbG9va0luLnRvU3RyaW5nKCkubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgbG9va0Zvci50b1N0cmluZygpID09XG4gICAgICAgICAgICAgICAgICAgIGxvb2tJblxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzdHIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9va0luLnRvU3RyaW5nKCkubGVuZ3RoIC0gbG9va0Zvci50b1N0cmluZygpLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb29rRm9yLnRvU3RyaW5nKCkubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAvLyBFUVxuICAgICAgICAgICAgYkNvbXBhcmUgPSBsb29rSW4gPT0gbG9va0ZvcjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gYkNvbXBhcmU7XG59XG5cbmNvbnN0IHBhdGhTZXBhcmF0b3IgPSAnLyc7XG5cbmNvbnN0IGlzUGF0aCA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguc2VhcmNoKHBhdGhTZXBhcmF0b3IpID4gMDtcbn07XG5jb25zdCBzcGxpdFBhdGggPSBmdW5jdGlvbiAocGF0aCkge1xuICAgIHJldHVybiBwYXRoLnNwbGl0KHBhdGhTZXBhcmF0b3IpO1xufTtcbmNvbnN0IGpvaW5QYXRoID0gZnVuY3Rpb24gKHBhdGhBcnJheSkge1xuICAgIHJldHVybiBwYXRoQXJyYXkuam9pbihwYXRoU2VwYXJhdG9yKTtcbn07XG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGVWaWFQYXRoKG9iaiwga2V5UGF0aCkge1xuICAgIGlmIChpc1BhdGgoa2V5UGF0aCkpIHtcbiAgICAgICAgLy8gcGF0aCBmb3VuZCwgc3BsaXQgYW5kIGNhbGwgcmVjdXJzaXZlbHlcbiAgICAgICAgY29uc3QgcGF0aEFycmF5ID0gc3BsaXRQYXRoKGtleVBhdGgpO1xuICAgICAgICBjb25zdCBmaXJzdFBhcnQgPSBwYXRoQXJyYXkuc2hpZnQoKTtcbiAgICAgICAgLy8gY2hlY2tzIGZpcnN0XG4gICAgICAgIC8vIGVsZW1lbnQgZm91bmQgYXQgZmlyc3RQYXJ0IG9mIHBhdGggIC4uLlxuICAgICAgICBpZiAodHlwZW9mIG9ialtmaXJzdFBhcnRdID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAvLyAuLi4gaXMgYW4gb2JqZWN0LCBjYWxsIG5leHQgbGV2ZWxcbiAgICAgICAgICAgIHJldHVybiBnZXRBdHRyaWJ1dGVWaWFQYXRoKG9ialtmaXJzdFBhcnRdLCBqb2luUGF0aChwYXRoQXJyYXkpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIC4uLiBpcyBub3QgYW4gb2JqZWN0XG4gICAgICAgICAgICByZXR1cm4gb2JqW2ZpcnN0UGFydF07XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBubyBwYXRoIGZvdW5kLCBkaXJlY3QgY29tcGFyZVxuICAgICAgICByZXR1cm4gb2JqW2tleVBhdGhdO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZVZpYVBhdGgob2JqLCBrZXlQYXRoLCBuZXdWYWx1ZSkge1xuICAgIGlmIChpc1BhdGgoa2V5UGF0aCkpIHtcbiAgICAgICAgLy8gcGF0aCBmb3VuZCwgc3BsaXQgYW5kIGNhbGwgcmVjdXJzaXZlbHlcbiAgICAgICAgY29uc3QgcGF0aEFycmF5ID0gc3BsaXRQYXRoKGtleVBhdGgpO1xuICAgICAgICBjb25zdCBmaXJzdFBhcnQgPSBwYXRoQXJyYXkuc2hpZnQoKTtcbiAgICAgICAgLy8gY2hlY2tzIGZpcnN0XG4gICAgICAgIC8vIGVsZW1lbnQgZm91bmQgYXQgZmlyc3RQYXJ0IG9mIHBhdGggIC4uLlxuICAgICAgICBpZiAodHlwZW9mIG9ialtmaXJzdFBhcnRdID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAvLyAuLi4gaXMgYW4gb2JqZWN0LCBjYWxsIG5leHQgbGV2ZWxcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZVZpYVBhdGgob2JqW2ZpcnN0UGFydF0sIGpvaW5QYXRoKHBhdGhBcnJheSksIG5ld1ZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIC4uLiBpcyBub3QgYW4gb2JqZWN0XG4gICAgICAgICAgICBvYmpbZmlyc3RQYXJ0XSA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbm8gcGF0aCBmb3VuZCwgZGlyZWN0IHNldFxuICAgICAgICBvYmpba2V5UGF0aF0gPSBuZXdWYWx1ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIENvbXBhcmVQYXRoKG9iaiwga2V5UGF0aCwgdmFsLCBvcGVyKSB7XG4gICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSBnZXRBdHRyaWJ1dGVWaWFQYXRoKG9iaiwga2V5UGF0aCk7XG4gICAgcmV0dXJuIENvbXBhcmUoYXR0cmlidXRlVmFsdWUsIHZhbCwgb3Blcik7XG59XG5cbmZ1bmN0aW9uIENvbXBhcmVPYmpXaXRoQXJyYXkob2JqLCBrZXksIHZhbCwgb3Blcikge1xuICAgIGxldCBiQ29tcGFyZSA9IHRydWU7XG4gICAga2V5LmZvckVhY2goZnVuY3Rpb24gKGtleUVsZW0sIElEWCwgQVJSKSB7XG4gICAgICAgIGJDb21wYXJlID0gYkNvbXBhcmUgJiYgQ29tcGFyZVBhdGgob2JqLCBrZXlFbGVtLCB2YWxbSURYXSwgb3BlcltJRFhdKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYkNvbXBhcmU7XG59XG5cbmZ1bmN0aW9uIENvbXBhcmVPYmpXaXRoT2JqKG9iaiwga2V5LCBvYmpDb21wLCBvcGVyKSB7XG4gICAgbGV0IGJDb21wYXJlID0gdHJ1ZTtcbiAgICBrZXkuZm9yRWFjaChmdW5jdGlvbiAoa2V5RWxlbSwgSURYLCBBUlIpIHtcbiAgICAgICAgYkNvbXBhcmUgPSBiQ29tcGFyZSAmJiBDb21wYXJlUGF0aChvYmosIGtleUVsZW0sIG9iakNvbXBba2V5RWxlbV0sIG9wZXJbSURYXSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGJDb21wYXJlO1xufVxuXG4vKipcbiAqIGdldE1vZGVsIGltcGxlbWVudGF0aW9uIGZyb20gTW9kZWxEYXRhIHY0XG4gKi9cbmZ1bmN0aW9uIHY0X2dldE1vZGVsKG9iaikge1xuICAgIGNvbnN0IG1vZGVsID0gb2JqLmdldE1vZGVsKCk7XG4gICAgaWYgKG1vZGVsICYmIHR5cGVvZiBtb2RlbC5vRGF0YSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1vZGVsLm9EYXRhLmxlbmd0aCA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgIG1vZGVsLm9EYXRhID0gW107XG4gICAgaWYgKG1vZGVsICYmIHR5cGVvZiBtb2RlbC5vRGF0YSA9PT0gJ3VuZGVmaW5lZCcpIG1vZGVsLm9EYXRhID0gW107XG4gICAgcmV0dXJuIG1vZGVsO1xufVxuXG5mdW5jdGlvbiBnZXRNb2RlbERhdGFTb3VyY2Uoc291cmNlKSB7XG4gICAgY29uc3QgVHlwZXMgPSB7XG4gICAgICAgIGFycmF5OiAnYXJyYXknLFxuICAgICAgICBjb250cm9sOiAnY29udHJvbCcsXG4gICAgICAgIG1vZGVsOiAnbW9kZWwnLFxuICAgIH07XG4gICAgbGV0IHNvdXJjZUFycmF5ID0gW107XG4gICAgbGV0IHNvdXJjZUNvbnRyb2wgPSBudWxsO1xuICAgIGxldCBzb3VyY2VNb2RlbCA9IG51bGw7XG4gICAgbGV0IHNvdXJjZVR5cGUgPSAnJztcblxuICAgIGNvbnN0IGdldEFycmF5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzd2l0Y2ggKHNvdXJjZVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgVHlwZXMubW9kZWw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNvdXJjZU1vZGVsLmdldERhdGEoKTtcblxuICAgICAgICAgICAgY2FzZSBUeXBlcy5jb250cm9sOlxuICAgICAgICAgICAgICAgIC8vIHJldHVybiBzb3VyY2VDb250cm9sLmdldE1vZGVsKCkuZ2V0RGF0YSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2NF9nZXRNb2RlbChzb3VyY2VDb250cm9sKS5nZXREYXRhKCk7IC8vIHJlYWxseSBuZWNlc3Nhcnk/XG5cbiAgICAgICAgICAgIGNhc2UgVHlwZXMuYXJyYXk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNvdXJjZUFycmF5O1xuICAgICAgICB9XG4gICAgICAgIHRocm93ICdNb2RlbERhdGE6IGJhZCB0eXBlIGZvciBzb3VyY2UgLyAnICsgdGhpcztcbiAgICB9O1xuXG4gICAgY29uc3QgdXBkYXRlRGF0YSA9IGZ1bmN0aW9uIChhcnJheSkge1xuICAgICAgICBzd2l0Y2ggKHNvdXJjZVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgVHlwZXMubW9kZWw6XG4gICAgICAgICAgICAgICAgLy8gc291cmNlTW9kZWwuc2V0RGF0YShhcnJheSk7XG4gICAgICAgICAgICAgICAgbW9kZWxTZXREYXRhKHNvdXJjZU1vZGVsLCBhcnJheSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgVHlwZXMuY29udHJvbDpcbiAgICAgICAgICAgICAgICAvLyBzb3VyY2VDb250cm9sLmdldE1vZGVsKCkuc2V0RGF0YShhcnJheSk7XG4gICAgICAgICAgICAgICAgbW9kZWxTZXREYXRhKHNvdXJjZUNvbnRyb2wuZ2V0TW9kZWwoKSwgYXJyYXkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFR5cGVzLmFycmF5OlxuICAgICAgICAgICAgICAgIC8vIG5vIHVwZGF0ZSBuZWNlc3NhcnksIGFycmF5IGFscmVhZHkgbW9kaWZpZWQgZGlyZWN0bHlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShzb3VyY2UpKSB7XG4gICAgICAgIHNvdXJjZVR5cGUgPSBUeXBlcy5hcnJheTtcbiAgICAgICAgc291cmNlQXJyYXkgPSBzb3VyY2U7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc291cmNlLmdldE1ldGFkYXRhID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaWYgKHNvdXJjZS5nZXRNZXRhZGF0YSgpLl9zQ2xhc3NOYW1lID09ICdzYXAudWkubW9kZWwuanNvbi5KU09OTW9kZWwnKSB7XG4gICAgICAgICAgICBzb3VyY2VUeXBlID0gVHlwZXMubW9kZWw7XG4gICAgICAgICAgICBzb3VyY2VNb2RlbCA9IHNvdXJjZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNvdXJjZVR5cGUgPSBUeXBlcy5jb250cm9sO1xuICAgICAgICAgICAgc291cmNlQ29udHJvbCA9IHNvdXJjZTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGJhZCBzb3VyY2VcbiAgICAgICAgdGhyb3cgJ01vZGVsRGF0YTogYmFkIHNvdXJjZSAvICcgKyBzb3VyY2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0QXJyYXk6IGdldEFycmF5LFxuICAgICAgICB1cGRhdGVEYXRhOiB1cGRhdGVEYXRhLFxuICAgIH07XG59XG5cbi8vICBVVUlEXG5leHBvcnQgZnVuY3Rpb24gZ2VuSUQoKSB7XG4gICAgbGV0IGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBjb25zdCB1dWlkID0gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xuICAgICAgICBjb25zdCByID0gKGQgKyBNYXRoLnJhbmRvbSgpICogMTYpICUgMTYgfCAwO1xuICAgICAgICBkID0gTWF0aC5mbG9vcihkIC8gMTYpO1xuICAgICAgICByZXR1cm4gKGMgPT0gJ3gnID8gciA6IChyICYgMHg3KSB8IDB4OCkudG9TdHJpbmcoMTYpO1xuICAgIH0pO1xuICAgIHJldHVybiB1dWlkO1xufVxuXG5sZXQgcmVmcmVzaERlbGF5ZWQgPSBmYWxzZTtcbmxldCByZWZyZXNoRGVsYXllZE1vZGVscyA9IG5ldyBNYXAoKTtcbmxldCBhdXRvUmVmcmVzaERlbGF5ZWQgPSB0cnVlO1xubGV0IGF1dG9SZWZyZXNoVGltZW91dCA9IG51bGw7XG5sZXQgYXV0b1JlZnJlc2hEZWxheSA9IDA7XG5cbmZ1bmN0aW9uIG1vZGVsU2V0RGF0YShtb2RlbCwgZGF0YSkge1xuICAgIGlmIChyZWZyZXNoRGVsYXllZCkge1xuICAgICAgICBtb2RlbC5vRGF0YSA9IGRhdGE7XG4gICAgICAgIHJlZnJlc2hEZWxheWVkTW9kZWxzLnNldChtb2RlbC5nZXRJZCgpLCBtb2RlbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGF1dG9SZWZyZXNoRGVsYXllZCkge1xuICAgICAgICAgICAgbW9kZWwub0RhdGEgPSBkYXRhO1xuICAgICAgICAgICAgcmVmcmVzaERlbGF5ZWRNb2RlbHMuc2V0KG1vZGVsLmdldElkKCksIG1vZGVsKTtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChhdXRvUmVmcmVzaFRpbWVvdXQpO1xuICAgICAgICAgICAgYXV0b1JlZnJlc2hUaW1lb3V0ID0gc2V0VGltZW91dChkb1JlZnJlc2gsIGF1dG9SZWZyZXNoRGVsYXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kZWwuc2V0RGF0YShkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGF5UmVmcmVzaCgpIHtcbiAgICByZWZyZXNoRGVsYXllZCA9IHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb1JlZnJlc2goKSB7XG4gICAgZm9yIChjb25zdCBbaWQsIG1vZGVsXSBvZiByZWZyZXNoRGVsYXllZE1vZGVscykge1xuICAgICAgICBtb2RlbC5yZWZyZXNoKCk7XG4gICAgfVxuICAgIHJlZnJlc2hEZWxheWVkTW9kZWxzID0gbmV3IE1hcCgpO1xuICAgIHJlZnJlc2hEZWxheWVkID0gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRBdXRvRGVsYXlSZWZyZXNoKGJBdXRvRGVsYXkpIHtcbiAgICBhdXRvUmVmcmVzaERlbGF5ZWQgPSBiQXV0b0RlbGF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0QXV0b0RlbGF5UmVmcmVzaFRpbWVvdXQoZGVsYXlJbk1zKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgZGVsYXlJbk1zID0gcGFyc2VJbnQoZGVsYXlJbk1zKTtcbiAgICAgICAgaWYgKGlzTmFOKGRlbGF5SW5NcykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1ZhbHVlIGZvciBEZWxheS1UaW1lb3V0IG11c3QgYmUgYW4gaW50ZWdlciAobWlsbGlzZWNvbmRzKScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGF1dG9SZWZyZXNoRGVsYXkgPSBkZWxheUluTXM7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEZpbmQoXG4gICAgYXJnc09iamVjdDogYW55LFxuICAgIGtleTogc3RyaW5nIHwgc3RyaW5nW10sXG4gICAgdmFsOiBzdHJpbmcgfCBzdHJpbmdbXSxcbiAgICBvcGVyID0gdW5kZWZpbmVkLFxuICAgIGNhbGxiYWNrID0gdW5kZWZpbmVkLFxuKSB7XG4gICAgbGV0IHNvdXJjZSA9IGFyZ3NPYmplY3Q7XG4gICAgaWYgKGlzQXJnc09iamVjdChhcmdzT2JqZWN0KSkge1xuICAgICAgICBzb3VyY2UgPSBhcmdzT2JqZWN0LnNvdXJjZTtcbiAgICAgICAga2V5ID0gYXJnc09iamVjdC5rZXlzO1xuICAgICAgICB2YWwgPSBhcmdzT2JqZWN0LnZhbHVlcztcbiAgICAgICAgb3BlciA9IGFyZ3NPYmplY3Qub3BlcmF0b3JzO1xuICAgICAgICBjYWxsYmFjayA9IGFyZ3NPYmplY3QuZm5DYWxsYmFjaztcbiAgICB9XG4gICAgY29uc3Qgb1NvdXJjZSA9IGdldE1vZGVsRGF0YVNvdXJjZShzb3VyY2UpO1xuICAgIGxldCBhcnIgPSBvU291cmNlLmdldEFycmF5KCk7XG4gICAgbGV0IHJldCA9IFtdO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnIpIHx8IGFyci5sZW5ndGggPT0gMCkgcmV0dXJuIHJldDtcblxuICAgIC8vIGNyZWF0ZSBhcnJheSBmb3IgYWxsIHBhcmFtZXRlcnMsIHRvIGhhdmUgb25seSBvbmUgY29kZWxpbmUgZm9yIGhhbmRsaW5nXG4gICAgLy8gVE9ETyBvbmx5IGNyZWF0ZSBhcnJheXMgaWYgYm90aCBwYXJhbWV0ZXJzIGFyZSB0aGUgc2FtZSwgZWl0aGVyIGFycmF5IG9yIG5vbmUtYXJyYXlcbiAgICAvLyAgdGhpcyB3aWxsIGJlIG5lY2Vzc2FyeSB0byBwcm9jZWVkIHdpdGggbmV3IHVzZSBjYXNlcywgZmluZGluZyBkYXRhIHdpdGhpbiBuZXN0ZWQgYXJyYXlzXG4gICAgLy8gIG1heWJlIGhhbmRsZSBsaWtlIHRoaXM6IGlmIGFycmF5IGluIGRhdGEgb2JqZWN0IGlzIGZvdW5kLCBzdGFydCBhIHN1Yi1maW5kIGZvciB0aGUgZ2l2ZW4gZGF0YSFcbiAgICBrZXkgPSBlbnN1cmVBcnJheShrZXkpO1xuICAgIHZhbCA9IGVuc3VyZUFycmF5KHZhbCk7XG4gICAgb3BlciA9IGVuc3VyZU9wZXJhdG9yKG9wZXIsIGtleS5sZW5ndGgpO1xuICAgIC8vIGlmICghQXJyYXkuaXNBcnJheShrZXkpKSBrZXkgPSBrZXkgPT09IHVuZGVmaW5lZCA/IFtdIDogW2tleV07XG4gICAgLy8gaWYgKCFBcnJheS5pc0FycmF5KHZhbCkpIHZhbCA9IHZhbCA9PT0gdW5kZWZpbmVkID8gW10gOiBbdmFsXTtcbiAgICAvLyBpZiAodHlwZW9mKG9wZXIpID09IFwidW5kZWZpbmVkXCIpIG9wZXIgPSAnRVEnOyAvLyBEZWZhdWx0ID0gRVFcbiAgICAvLyBpZiAoIUFycmF5LmlzQXJyYXkob3BlcikpIHtcbiAgICAvLyAgICAgdmFyIG9wZXJTaW5nbGUgPSBvcGVyO1xuICAgIC8vICAgICBvcGVyID0gW107XG4gICAgLy8gICAgIGtleS5mb3JFYWNoKGZ1bmN0aW9uKEVMRU0sIElEWCwgQVJSKSB7XG4gICAgLy8gICAgICAgICBvcGVyLnB1c2gob3BlclNpbmdsZSk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cblxuICAgIGlmIChrZXkubGVuZ3RoICE9IHZhbC5sZW5ndGggfHwga2V5Lmxlbmd0aCAhPSBvcGVyLmxlbmd0aCkgcmV0dXJuIHJldDsgLy8gcGFyYW1ldGVyIGFycmF5cyBub3QgZXF1YWwgc2l6ZVxuXG4gICAgaWYgKGtleS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0ID0gYXJyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldCA9IGFyci5maWx0ZXIoZnVuY3Rpb24gKGFyck9iaikge1xuICAgICAgICAgICAgcmV0dXJuIENvbXBhcmVPYmpXaXRoQXJyYXkoYXJyT2JqLCBrZXksIHZhbCwgb3Blcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2FsbGJhY2socmV0KTtcbiAgICB9XG5cbiAgICAvLyBNZW1vcnkgQ2xlYXJpbmdcbiAgICBhcnIgPSBudWxsO1xuICAgIHJldHVybiByZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGaW5kRmlyc3QoYXJnc09iamVjdCwgc0tleSwgc1ZhbHVlLCBzT3BlciA9IHVuZGVmaW5lZCwgY2FsbEJhY2sgPSB1bmRlZmluZWQpIHtcbiAgICBsZXQgb1NvdXJjZSA9IGFyZ3NPYmplY3Q7XG4gICAgaWYgKGlzQXJnc09iamVjdChhcmdzT2JqZWN0KSkge1xuICAgICAgICBvU291cmNlID0gYXJnc09iamVjdC5zb3VyY2U7XG4gICAgICAgIHNLZXkgPSBhcmdzT2JqZWN0LmtleXM7XG4gICAgICAgIHNWYWx1ZSA9IGFyZ3NPYmplY3QudmFsdWVzO1xuICAgICAgICBzT3BlciA9IGFyZ3NPYmplY3Qub3BlcmF0b3JzO1xuICAgICAgICBjYWxsQmFjayA9IGFyZ3NPYmplY3QuZm5DYWxsYmFjaztcbiAgICAgICAgYXJnc09iamVjdC5mbkNhbGxiYWNrID0gbnVsbDsgLy8gZG8gTk9UIHBhc3Mgb24gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLCB3aWxsIGJlIGV4ZWN1dGVkIGhlcmUhXG4gICAgfVxuICAgIC8vIG5vIHBhcmFtZXRlciBjaGVja2luZywgcGFzc2luZyBvbiB0byBpbnRlcm5hbCBtZXRob2RzXG4gICAgY29uc3QgYVJlc3VsdHMgPSBGaW5kKG9Tb3VyY2UsIHNLZXksIHNWYWx1ZSwgc09wZXIpO1xuICAgIGxldCByZXN1bHRPYmplY3QgPSBmYWxzZTtcbiAgICBpZiAoYVJlc3VsdHMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXN1bHRPYmplY3QgPSBhUmVzdWx0c1swXTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdE9iamVjdCAmJiB0eXBlb2YgY2FsbEJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2FsbEJhY2socmVzdWx0T2JqZWN0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdE9iamVjdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExvb2t1cFZhbHVlKGFyZ3NPYmplY3QsIHNLZXksIHNWYWx1ZSwgc0ZpZWxkLCBzT3BlciwgY2FsbEJhY2spIHtcbiAgICBsZXQgb1NvdXJjZSA9IGFyZ3NPYmplY3Q7XG4gICAgaWYgKGlzQXJnc09iamVjdChhcmdzT2JqZWN0KSkge1xuICAgICAgICBvU291cmNlID0gYXJnc09iamVjdC5zb3VyY2U7XG4gICAgICAgIHNLZXkgPSBhcmdzT2JqZWN0LmtleXM7XG4gICAgICAgIHNWYWx1ZSA9IGFyZ3NPYmplY3QudmFsdWVzO1xuICAgICAgICBzRmllbGQgPSBhcmdzT2JqZWN0Lmxvb2t1cEZpZWxkO1xuICAgICAgICBzT3BlciA9IGFyZ3NPYmplY3Qub3BlcmF0b3JzO1xuICAgICAgICBjYWxsQmFjayA9IGFyZ3NPYmplY3QuZm5DYWxsYmFjaztcbiAgICB9XG4gICAgLy8gbm8gcGFyYW1ldGVyIGNoZWNraW5nLCBwYXNzaW5nIG9uIHRvIGludGVybmFsIG1ldGhvZHNcbiAgICBjb25zdCByZXN1bHQgPSBGaW5kRmlyc3Qob1NvdXJjZSwgc0tleSwgc1ZhbHVlLCBzT3BlciwgY2FsbEJhY2spO1xuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIGdldEF0dHJpYnV0ZVZpYVBhdGgocmVzdWx0LCBzRmllbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzVmFsdWU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBGaW5kREIob2JqLCB0YWJsZSwgcXVlcnlTdHJpbmcsIHF1ZXJ5RGF0YSwgY2FsbEJhY2spIHtcbiAgICBpZiAodHlwZW9mIEFwcFN5bmMuZGIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbEJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhbGxCYWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBtb2RlbCA9IHY0X2dldE1vZGVsKG9iaik7XG4gICAgY29uc3QgbmV3QXJyID0gW107XG4gICAgbGV0IHFEYXRhID0gW107XG4gICAgaWYgKHR5cGVvZiBxdWVyeURhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHFEYXRhWzBdID0gcXVlcnlEYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHFEYXRhID0gcXVlcnlEYXRhO1xuICAgIH1cbiAgICBBcHBTeW5jLmRiLnRyYW5zYWN0aW9uKFxuICAgICAgICBmdW5jdGlvbiAodHgpIHtcbiAgICAgICAgICAgIHR4LmV4ZWN1dGVTcWwoXG4gICAgICAgICAgICAgICAgJ1NFTEVDVCAqIEZST00gJyArIHRhYmxlICsgJyBXSEVSRSAnICsgcXVlcnlTdHJpbmcsXG4gICAgICAgICAgICAgICAgcURhdGEsXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHR4LCByZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzdWx0cy5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvYmogPSByZXN1bHRzLnJvd3MuaXRlbShpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcCBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob2JqW3BdID09PSAnZmFsc2UnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialtwXSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob2JqW3BdID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqW3BdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdBcnIucHVzaChvYmopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIG1vZGVsLnNldERhdGEobmV3QXJyKTtcbiAgICAgICAgICAgICAgICAgICAgbW9kZWxTZXREYXRhKG1vZGVsLCBuZXdBcnIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxCYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsQmFjaygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24gKHR4KSB7XG4gICAgICAgICAgICBpZiAodHguY29kZSAhPT0gJzAnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codHgubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgY2FsbEJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICApO1xufVxuXG5mdW5jdGlvbiBBZGQoYXJnc09iamVjdCwgcmVjKSB7XG4gICAgbGV0IHNvdXJjZSA9IGFyZ3NPYmplY3Q7XG4gICAgaWYgKGlzQXJnc09iamVjdChhcmdzT2JqZWN0KSkge1xuICAgICAgICBzb3VyY2UgPSBhcmdzT2JqZWN0LnNvdXJjZTtcbiAgICAgICAgcmVjID0gYXJnc09iamVjdC5kYXRhO1xuICAgIH1cbiAgICBjb25zdCBvU291cmNlID0gZ2V0TW9kZWxEYXRhU291cmNlKHNvdXJjZSk7XG4gICAgY29uc3QgYXJyID0gb1NvdXJjZS5nZXRBcnJheSgpO1xuICAgIGFyci5wdXNoKHJlYyk7XG4gICAgb1NvdXJjZS51cGRhdGVEYXRhKGFycik7XG59XG5cbmZ1bmN0aW9uIEFkZEFycmF5KGFyZ3NPYmplY3QsIGFkZEFycikge1xuICAgIGxldCBzb3VyY2UgPSBhcmdzT2JqZWN0O1xuICAgIGlmIChpc0FyZ3NPYmplY3QoYXJnc09iamVjdCkpIHtcbiAgICAgICAgc291cmNlID0gYXJnc09iamVjdC5zb3VyY2U7XG4gICAgICAgIGFkZEFyciA9IGFyZ3NPYmplY3QuZGF0YTtcbiAgICB9XG5cbiAgICBjb25zdCBvU291cmNlID0gZ2V0TW9kZWxEYXRhU291cmNlKHNvdXJjZSk7XG4gICAgY29uc3QgYXJyID0gb1NvdXJjZS5nZXRBcnJheSgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFyci5wdXNoKGFkZEFycltpXSk7XG4gICAgfVxuICAgIG9Tb3VyY2UudXBkYXRlRGF0YShhcnIpO1xufVxuXG5mdW5jdGlvbiBVcGRhdGUoYXJnc09iamVjdCwga2V5LCB2YWwsIHJlYywgb3BlciA9IHVuZGVmaW5lZCkge1xuICAgIGxldCBzb3VyY2UgPSBhcmdzT2JqZWN0O1xuICAgIGxldCBmbkNhbGxCYWNrOyAvLyBkZWZpbmUgaGVyZSwgYmVjYXVzZSB3YXMgbm90IGEgbGVnYWN5IGFyZ3VtZW50XG4gICAgbGV0IGNhbGxCYWNrO1xuICAgIGlmIChpc0FyZ3NPYmplY3QoYXJnc09iamVjdCkpIHtcbiAgICAgICAgc291cmNlID0gYXJnc09iamVjdC5zb3VyY2U7XG4gICAgICAgIGtleSA9IGFyZ3NPYmplY3Qua2V5cztcbiAgICAgICAgdmFsID0gYXJnc09iamVjdC52YWx1ZXM7XG4gICAgICAgIHJlYyA9IGFyZ3NPYmplY3QuZGF0YTtcbiAgICAgICAgb3BlciA9IGFyZ3NPYmplY3Qub3BlcmF0b3JzO1xuICAgICAgICBjYWxsQmFjayA9IGFyZ3NPYmplY3QuZm5DYWxsYmFjaztcbiAgICB9XG5cbiAgICBjb25zdCBvU291cmNlID0gZ2V0TW9kZWxEYXRhU291cmNlKHNvdXJjZSk7XG4gICAgY29uc3QgYXJyID0gb1NvdXJjZS5nZXRBcnJheSgpO1xuXG4gICAgLy8gdmFyIG1vZGVsID0gZ2V0TW9kZWwob2JqKTtcbiAgICAvLyB2YXIgYXJyID0gbW9kZWwub0RhdGE7XG4gICAgbGV0IHVwZCA9IGZhbHNlO1xuICAgIC8vIC8vIEZpcnN0IHJlY29yZFxuICAgIC8vIGlmICh0eXBlb2YgbURhdGEgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyAgICAgdmFyIG1EYXRhID0gbmV3IEFycmF5KCk7XG4gICAgLy8gfVxuXG4gICAgLy8gY3JlYXRlIGFycmF5IGZvciBhbGwgcGFyYW1ldGVycywgdG8gaGF2ZSBvbmx5IG9uZSBjb2RlbGluZSBmb3IgaGFuZGxpbmdcbiAgICBrZXkgPSBlbnN1cmVBcnJheShrZXkpO1xuICAgIHZhbCA9IGVuc3VyZUFycmF5KHZhbCk7XG4gICAgb3BlciA9IGVuc3VyZU9wZXJhdG9yKG9wZXIsIGtleS5sZW5ndGgpO1xuXG4gICAgaWYgKGtleS5sZW5ndGggIT0gdmFsLmxlbmd0aCB8fCBrZXkubGVuZ3RoICE9IG9wZXIubGVuZ3RoKSByZXR1cm47IC8vIHBhcmFtZXRlciBhcnJheXMgbm90IGVxdWFsIHNpemVcblxuICAgIC8vIFVwZGF0ZVxuICAgIGNvbnN0IHVwZGF0ZXMgPSBbXTtcbiAgICBpZiAoa2V5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yIChsZXQgYWksIGkgPSBhcnIubGVuZ3RoOyBpLS07ICkge1xuICAgICAgICAgICAgaWYgKENvbXBhcmVPYmpXaXRoQXJyYXkoYXJyW2ldLCBrZXksIHZhbCwgb3BlcikpIHtcbiAgICAgICAgICAgICAgICBhcnJbaV0gPSByZWM7XG4gICAgICAgICAgICAgICAgdXBkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB1cGRhdGVzLnB1c2goYXJyW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodXBkICE9PSB0cnVlKSB7XG4gICAgICAgIGFyci5wdXNoKHJlYyk7XG4gICAgfVxuICAgIG9Tb3VyY2UudXBkYXRlRGF0YShhcnIpO1xuXG4gICAgaWYgKHR5cGVvZiBjYWxsQmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYWxsQmFjayh1cGRhdGVzKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIFVwZGF0ZUFycmF5KGFyZ3NPYmplY3QsIGtleSwgdXBkYXRlQXJyLCBvcGVyKSB7XG4gICAgbGV0IHNvdXJjZSA9IGFyZ3NPYmplY3Q7XG4gICAgbGV0IGZuQ2FsbEJhY2s7IC8vIGRlZmluZSBoZXJlLCBiZWNhdXNlIHdhcyBub3QgYSBsZWdhY3kgYXJndW1lbnRcbiAgICBsZXQgY2FsbEJhY2s7XG4gICAgaWYgKGlzQXJnc09iamVjdChhcmdzT2JqZWN0KSkge1xuICAgICAgICBzb3VyY2UgPSBhcmdzT2JqZWN0LnNvdXJjZTtcbiAgICAgICAga2V5ID0gYXJnc09iamVjdC5rZXlzO1xuICAgICAgICB1cGRhdGVBcnIgPSBhcmdzT2JqZWN0LmRhdGE7XG4gICAgICAgIG9wZXIgPSBhcmdzT2JqZWN0Lm9wZXJhdG9ycztcbiAgICAgICAgY2FsbEJhY2sgPSBhcmdzT2JqZWN0LmZuQ2FsbGJhY2s7XG4gICAgfVxuXG4gICAgY29uc3Qgb1NvdXJjZSA9IGdldE1vZGVsRGF0YVNvdXJjZShzb3VyY2UpO1xuICAgIGNvbnN0IGFyciA9IG9Tb3VyY2UuZ2V0QXJyYXkoKTtcbiAgICAvLyB2YXIgbW9kZWwgPSBnZXRNb2RlbChvYmopO1xuICAgIC8vIHZhciBtRGF0YSA9IG1vZGVsLm9EYXRhO1xuICAgIGxldCB1cGQgPSBmYWxzZTtcbiAgICAvLyAvLyBGaXJzdCByZWNvcmRcbiAgICAvLyBpZiAodHlwZW9mIG1EYXRhLmxlbmd0aCA9PSAndW5kZWZpbmVkJykge1xuICAgIC8vICAgICBtRGF0YSA9IFtdO1xuICAgIC8vIH1cblxuICAgIC8vIGNyZWF0ZSBhcnJheSBmb3IgYWxsIHBhcmFtZXRlcnMsIHRvIGhhdmUgb25seSBvbmUgY29kZWxpbmUgZm9yIGhhbmRsaW5nXG4gICAga2V5ID0gZW5zdXJlQXJyYXkoa2V5KTtcbiAgICBvcGVyID0gZW5zdXJlT3BlcmF0b3Iob3Blciwga2V5Lmxlbmd0aCk7XG5cbiAgICBpZiAoa2V5Lmxlbmd0aCAhPSBvcGVyLmxlbmd0aCkgcmV0dXJuOyAvLyBwYXJhbWV0ZXIgYXJyYXlzIG5vdCBlcXVhbCBzaXplXG5cbiAgICAvLyAkLmVhY2godXBkYXRlQXJyLCBmdW5jdGlvbihpLCBuZXdEYXRhKSB7XG4gICAgY29uc3QgdXBkYXRlcyA9IFtdO1xuICAgIHVwZGF0ZUFyci5mb3JFYWNoKGZ1bmN0aW9uIChuZXdEYXRhKSB7XG4gICAgICAgIHVwZCA9IGZhbHNlO1xuICAgICAgICBpZiAoa2V5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKENvbXBhcmVPYmpXaXRoT2JqKGFycltpXSwga2V5LCBuZXdEYXRhLCBvcGVyKSkge1xuICAgICAgICAgICAgICAgICAgICBhcnJbaV0gPSBuZXdEYXRhO1xuICAgICAgICAgICAgICAgICAgICB1cGQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVzLnB1c2goYXJyW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVwZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGFyci5wdXNoKG5ld0RhdGEpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgb1NvdXJjZS51cGRhdGVEYXRhKGFycik7XG5cbiAgICBpZiAodHlwZW9mIGNhbGxCYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNhbGxCYWNrKHVwZGF0ZXMpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldE1vZGVsID0gdjRfZ2V0TW9kZWw7XG4iLCAiaW1wb3J0ICogYXMgTW9kZWxEYXRhQ29tbW9uIGZyb20gJy4uL2NvbW1vbi9tb2RlbGRhdGEnO1xuXG5leHBvcnQgY29uc3QgTW9kZWxEYXRhID0ge1xuICAgIC4uLk1vZGVsRGF0YUNvbW1vbixcbn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUMsT0FBQyxTQUFVLE1BQU0sU0FBUztBQUMxQixZQUFJLE9BQU8sWUFBWSxVQUFVO0FBRWhDLGlCQUFPLFVBQVUsVUFBVSxRQUFRO0FBQUEsUUFDcEMsV0FDUyxPQUFPLFdBQVcsY0FBYyxPQUFPLEtBQUs7QUFFcEQsaUJBQU8sQ0FBQyxHQUFHLE9BQU87QUFBQSxRQUNuQixPQUNLO0FBRUosZUFBSyxXQUFXLFFBQVE7QUFBQSxRQUN6QjtBQUFBLE1BQ0QsR0FBRSxTQUFNLFdBQVk7QUFPbkIsWUFBSUEsWUFBV0EsYUFBYSxTQUFVQyxPQUFNQyxZQUFXO0FBRW5ELGNBQUk7QUFHSixjQUFJLE9BQU8sV0FBVyxl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SUFBSUQ7QUFDUixjQUFJLFFBQVEsRUFBRTtBQUNkLGNBQUksT0FBTyxNQUFNO0FBQ2pCLGNBQUksZUFBZSxNQUFNO0FBS3pCLGNBQUksUUFBUSxFQUFFLE1BQU0sQ0FBQztBQUtyQixjQUFJLFVBQVUsTUFBTSxPQUFPLEtBQUssT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFXbkMsTUFBTSxTQUFVLE1BQU0sS0FBSztBQUN2QixtQkFBSyxPQUFPO0FBQ1osbUJBQUssTUFBTTtBQUFBLFlBQ2Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QUcsR0FBRyxZQUFhLElBQUksRUFBRSxDQUFDLENBQUM7QUFDeEMsa0JBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLFlBQWEsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN4QyxrQkFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsWUFBYSxHQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3hDLGtCQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxZQUFhLElBQUksRUFBRSxDQUFDLENBQUM7QUFDeEMsa0JBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLFlBQWEsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN4QyxrQkFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsWUFBYSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3hDLGtCQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxZQUFhLEdBQUksRUFBRSxDQUFDLENBQUM7QUFDeEMsa0JBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLFlBQWEsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN4QyxrQkFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsYUFBYSxJQUFJLEVBQUUsRUFBRSxDQUFDO0FBQ3pDLGtCQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxhQUFhLElBQUksRUFBRSxFQUFFLENBQUM7QUFDekMsa0JBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLGFBQWEsR0FBSSxFQUFFLEVBQUUsQ0FBQztBQUN6QyxrQkFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsYUFBYSxJQUFJLEVBQUUsRUFBRSxDQUFDO0FBQ3pDLGtCQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxhQUFhLElBQUksRUFBRSxFQUFFLENBQUM7QUFDekMsa0JBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLGFBQWEsSUFBSSxFQUFFLEVBQUUsQ0FBQztBQUV6QyxrQkFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsWUFBYSxHQUFJLEVBQUUsRUFBRSxDQUFDO0FBQ3pDLGtCQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxZQUFhLEdBQUksRUFBRSxFQUFFLENBQUM7QUFDekMsa0JBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLGFBQWEsSUFBSSxFQUFFLEVBQUUsQ0FBQztBQUN6QyxrQkFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsWUFBYSxJQUFJLEVBQUUsRUFBRSxDQUFDO0FBQ3pDLGtCQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxZQUFhLEdBQUksRUFBRSxFQUFFLENBQUM7QUFDekMsa0JBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLGFBQWEsR0FBSSxFQUFFLEVBQUUsQ0FBQztBQUN6QyxrQkFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsYUFBYSxJQUFJLEVBQUUsRUFBRSxDQUFDO0FBQ3pDLGtCQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxZQUFhLElBQUksRUFBRSxFQUFFLENBQUM7QUFDekMsa0JBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLFlBQWEsR0FBSSxFQUFFLEVBQUUsQ0FBQztBQUN6QyxrQkFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsYUFBYSxHQUFJLEVBQUUsRUFBRSxDQUFDO0FBQ3pDLGtCQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxZQUFhLElBQUksRUFBRSxFQUFFLENBQUM7QUFDekMsa0JBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLFlBQWEsSUFBSSxFQUFFLEVBQUUsQ0FBQztBQUN6QyxrQkFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsYUFBYSxHQUFJLEVBQUUsRUFBRSxDQUFDO0FBQ3pDLGtCQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxZQUFhLEdBQUksRUFBRSxFQUFFLENBQUM7QUFDekMsa0JBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLFlBQWEsSUFBSSxFQUFFLEVBQUUsQ0FBQztBQUN6QyxrQkFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsYUFBYSxJQUFJLEVBQUUsRUFBRSxDQUFDO0FBRXpDLGtCQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxZQUFhLEdBQUksRUFBRSxFQUFFLENBQUM7QUFDekMsa0JBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLFlBQWEsSUFBSSxFQUFFLEVBQUUsQ0FBQztBQUN6QyxrQkFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsYUFBYSxJQUFJLEVBQUUsRUFBRSxDQUFDO0FBQ3pDLGtCQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxhQUFhLElBQUksRUFBRSxFQUFFLENBQUM7QUFDekMsa0JBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLFlBQWEsR0FBSSxFQUFFLEVBQUUsQ0FBQztBQUN6QyxrQkFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsWUFBYSxJQUFJLEVBQUUsRUFBRSxDQUFDO0FBQ3pDLGtCQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxZQUFhLElBQUksRUFBRSxFQUFFLENBQUM7QUFDekMsa0JBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLGFBQWEsSUFBSSxFQUFFLEVBQUUsQ0FBQztBQUN6QyxrQkFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsYUFBYSxHQUFJLEVBQUUsRUFBRSxDQUFDO0FBQ3pDLGtCQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxZQUFhLElBQUksRUFBRSxFQUFFLENBQUM7QUFDekMsa0JBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLFlBQWEsSUFBSSxFQUFFLEVBQUUsQ0FBQztBQUN6QyxrQkFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsWUFBYSxJQUFJLEVBQUUsRUFBRSxDQUFDO0FBQ3pDLGtCQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxZQUFhLEdBQUksRUFBRSxFQUFFLENBQUM7QUFDekMsa0JBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLGFBQWEsSUFBSSxFQUFFLEVBQUUsQ0FBQztBQUN6QyxrQkFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsYUFBYSxJQUFJLEVBQUUsRUFBRSxDQUFDO0FBQ3pDLGtCQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxZQUFhLElBQUksRUFBRSxFQUFFLENBQUM7QUFFekMsa0JBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLFlBQWEsR0FBSSxFQUFFLEVBQUUsQ0FBQztBQUN6QyxrQkFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsWUFBYSxJQUFJLEVBQUUsRUFBRSxDQUFDO0FBQ3pDLGtCQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxhQUFhLElBQUksRUFBRSxFQUFFLENBQUM7QUFDekMsa0JBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLFlBQWEsSUFBSSxFQUFFLEVBQUUsQ0FBQztBQUN6QyxrQkFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsYUFBYSxHQUFJLEVBQUUsRUFBRSxDQUFDO0FBQ3pDLGtCQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxZQUFhLElBQUksRUFBRSxFQUFFLENBQUM7QUFDekMsa0JBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLGFBQWEsSUFBSSxFQUFFLEVBQUUsQ0FBQztBQUN6QyxrQkFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsWUFBYSxJQUFJLEVBQUUsRUFBRSxDQUFDO0FBQ3pDLGtCQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxZQUFhLEdBQUksRUFBRSxFQUFFLENBQUM7QUFDekMsa0JBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLGFBQWEsSUFBSSxFQUFFLEVBQUUsQ0FBQztBQUN6QyxrQkFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsWUFBYSxJQUFJLEVBQUUsRUFBRSxDQUFDO0FBQ3pDLGtCQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxhQUFhLElBQUksRUFBRSxFQUFFLENBQUM7QUFDekMsa0JBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxH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LGVBQWUsV0FBWSxVQUFVO0FBQUEsWUFBRyxlQUFlLFdBQVksVUFBVTtBQUFBLFlBQzdFLGVBQWUsV0FBWSxVQUFVO0FBQUEsWUFBRyxlQUFlLFlBQVksVUFBVTtBQUFBLFlBQzdFLGVBQWUsWUFBWSxVQUFVO0FBQUEsWUFBRyxlQUFlLFlBQVksVUFBVTtBQUFBLFlBQzdFLGVBQWUsWUFBWSxVQUFVO0FBQUEsWUFBRyxlQUFlLFlBQVksU0FBVTtBQUFBLFlBQzdFLGVBQWUsWUFBWSxVQUFVO0FBQUEsWUFBRyxlQUFlLFlBQVksVUFBVTtBQUFBLFlBQzdFLGVBQWUsWUFBWSxVQUFVO0FBQUEsWUFBRyxlQUFlLFlBQVksVUFBVTtBQUFBLFlBQzdFLGVBQWUsV0FBWSxVQUFVO0FBQUEsWUFBRyxlQUFlLFdBQVksU0FBVTtBQUFBLFlBQzdFLGVBQWUsV0FBWSxVQUFVO0FBQUEsWUFBRyxlQUFlLFdBQVksVUFBVTtBQUFBLFlBQzdFLGVBQWUsWUFBWSxVQUFVO0FBQUEsWUFBRyxlQUFlLFlBQVksVUFBVTtBQUFBLFlBQzdFLGVBQWUsWUFBWSxVQUFVO0FBQUEsWUFBRyxlQUFlLFlBQVksVUFBVTtBQUFBLFlBQzdFLGVBQWUsWUFBWSxVQUFVO0FBQUEsWUFBRyxlQUFlLFlBQVksU0FBVTtBQUFBLFlBQzdFLGVBQWUsWUFBWSxVQUFVO0FBQUEsWUFBRyxlQUFlLFlBQVksVUFBVTtBQUFBLFlBQzdFLGVBQWUsWUFBWSxVQUFVO0FBQUEsWUFBRyxlQUFlLFlBQVksU0FBVTtBQUFBLFlBQzdFLGVBQWUsWUFBWSxVQUFVO0FBQUEsWUFBRyxlQUFlLFlBQVksVUFBVTtBQUFBLFlBQzdFLGVBQWUsWUFBWSxVQUFVO0FBQUEsWUFBRyxlQUFlLFdBQVksU0FBVTtBQUFBLFlBQzdFLGVBQWUsV0FBWSxVQUFVO0FBQUEsWUFBRyxlQUFlLFdBQVksVUFBVTtBQUFBLFlBQzdFLGVBQWUsV0FBWSxVQUFVO0FBQUEsWUFBRyxlQUFlLFdBQVksVUFBVTtBQUFBLFlBQzdFLGVBQWUsV0FBWSxVQUFVO0FBQUEsWUFBRyxlQUFlLFlB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O0FBQUEsWUFBRztBQUFBLFlBQUs7QUFBQSxZQUFHO0FBQUEsWUFBSTtBQUFBLFlBQUs7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUc7QUFBQSxZQUFLO0FBQUEsWUFBRztBQUFBLFlBQUk7QUFBQSxVQUFFLENBQUM7QUFDbEUsY0FBSSxNQUFNLFVBQVUsT0FBTztBQUFBLFlBQ3ZCO0FBQUEsWUFBRztBQUFBLFlBQUs7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFHO0FBQUEsWUFBSztBQUFBLFlBQUc7QUFBQSxZQUFLO0FBQUEsWUFBRztBQUFBLFlBQUs7QUFBQSxZQUFJO0FBQUEsWUFBRztBQUFBLFlBQUs7QUFBQSxZQUFHO0FBQUEsWUFDM0Q7QUFBQSxZQUFHO0FBQUEsWUFBSztBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBRztBQUFBLFlBQUs7QUFBQSxZQUFHO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFLO0FBQUEsWUFBRztBQUFBLFlBQUs7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUM1RDtBQUFBLFlBQUs7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFHO0FBQUEsWUFBSztBQUFBLFlBQUk7QUFBQSxZQUFHO0FBQUEsWUFBSztBQUFBLFlBQUc7QUFBQSxZQUFLO0FBQUEsWUFBRztBQUFBLFlBQUs7QUFBQSxZQUFJO0FBQUEsWUFBRztBQUFBLFlBQzVEO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUc7QUFBQSxZQUFJO0FBQUEsWUFBSztBQUFBLFlBQUk7QUFBQSxZQUFHO0FBQUEsWUFBSztBQUFBLFlBQUc7QUFBQSxZQUFLO0FBQUEsWUFBSTtBQUFBLFlBQUc7QUFBQSxZQUFJO0FBQUEsWUFDM0Q7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUs7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFHO0FBQUEsWUFBSTtBQUFBLFlBQUs7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUc7QUFBQSxVQUFFLENBQUM7QUFDbkUsY0FBSSxNQUFNLFVBQVUsT0FBTztBQUFBLFlBQ3RCO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSztBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUc7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFLO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFDOUQ7QUFBQSxZQUFHO0FBQUEsWUFBSztBQUFBLFlBQUc7QUFBQSxZQUFJO0FBQUEsWUFBSztBQUFBLFlBQUk7QUFBQSxZQUFHO0FBQUEsWUFBSztBQUFBLFlBQUc7QUFBQSxZQUFJO0FBQUEsWUFBSztBQUFBLFlBQUc7QUFBQSxZQUFLO0FBQUEsWUFBRztBQUFBLFlBQUk7QUFBQSxZQUMzRDtBQUFBLFlBQUk7QUFBQSxZQUFLO0FBQUEsWUFBSTtBQUFBLFlBQUc7QUFBQSxZQUFLO0FBQUEsWUFBRztBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSztBQUFBLFlBQUc7QUFBQSxZQUFLO0FBQUEsWUFBSTtBQUFBLFlBQUc7QUFBQSxZQUFLO0FBQUEsWUFBSTtBQUFBLFlBQzNEO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFLO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFHO0FBQUEsWUFBSztBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFHO0FBQUEsWUFDOUQ7QUFBQSxZQUFHO0FBQUEsWUFBSztBQUFBLFlBQUc7QUFBQSxZQUFLO0FBQUEsWUFBSTtBQUFBLFlBQUc7QUFBQSxZQUFJO0FBQUEsWUFBSztBQUFBLFlBQUc7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFLO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxVQUFFLENBQUM7QUFDbkUsY0FBSSxNQUFNLFVBQVUsT0FBTztBQUFBLFlBQ3ZCO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFHO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSztBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUc7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFLO0FBQUEsWUFDNUQ7QUFBQSxZQUFHO0FBQUEsWUFBSTtBQUFBLFlBQUs7QUFBQSxZQUFHO0FBQUEsWUFBSztBQUFBLFlBQUk7QUFBQSxZQUFHO0FBQUEsWUFBSztBQUFBLFlBQUk7QUFBQSxZQUFHO0FBQUEsWUFBSztBQUFBLFlBQUk7QUFBQSxZQUFHO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUMzRDtBQUFBLFlBQUk7QUFBQSxZQUFHO0FBQUEsWUFBSTtBQUFBLFlBQUs7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUc7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUs7QUFBQSxZQUFHO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFLO0FBQUEsWUFBSTtBQUFBLFlBQzVEO0FBQUEsWUFBSztBQUFBLFlBQUk7QUFBQSxZQUFHO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFLO0FBQUEsWUFBRztBQUFBLFlBQUs7QUFBQSxZQUFJO0FBQUEsWUFBRztBQUFBLFlBQUs7QUFBQSxZQUFHO0FBQUEsWUFBSztBQUFBLFlBQUc7QUFBQSxZQUFLO0FBQUEsWUFDN0Q7QUFBQSxZQUFJO0FBQUEsWUFBRztBQUFBLFlBQUs7QUFBQSxZQUFHO0FBQUEsWUFBSztBQUFBLFlBQUc7QUFBQSxZQUFLO0FBQUEsWUFBSTtBQUFBLFlBQUc7QUFBQSxZQUFLO0FBQUEsWUFBSTtBQUFBLFlBQUc7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxVQUFHLENBQUM7QUFFbkUsY0FBSSxNQUFPLFVBQVUsT0FBTyxDQUFFLEdBQVks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STtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUM1QjtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxVQUNoQztBQUdBLGNBQUksTUFBTTtBQUFBLFlBQ047QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQ3BCO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUNwQjtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFDcEI7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQ3BCO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUNwQjtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFDcEI7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQ3BCO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxVQUN4QjtBQUdBLGNBQUksYUFBYSxDQUFDLEdBQUksR0FBSSxHQUFJLEdBQUksR0FBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7QUFHaEYsY0FBSSxTQUFTO0FBQUEsWUFDVDtBQUFBLGNBQ0ksR0FBSztBQUFBLGNBQ0wsV0FBWTtBQUFBLGNBQ1osV0FBWTtBQUFBLGNBQ1osV0FBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osV0FBVztBQUFBLGNBQ1gsV0FBWTtBQUFBLGNBQ1osV0FBWTtBQUFBLGNBQ1osV0FBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osR0FBSztBQUFBLGNBQ0wsV0FBWTtBQUFBLGNBQ1osV0FBWTtBQUFBLGNBQ1osV0FBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osV0FBVztBQUFBLGNBQ1gsV0FBWTtBQUFBLGNBQ1osV0FBWTtBQUFBLGNBQ1osV0FBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLFlBQ2hCO0FBQUEsWUFDQTtBQUFBLGNBQ0ksR0FBSztBQUFBLGNBQ0wsVUFBVztBQUFBLGNBQ1gsVUFBVztBQUFBLGNBQ1gsVUFBVztBQUFBLGNBQ1gsVUFBVztBQUFBLGNBQ1gsVUFBVztBQUFBLGNBQ1gsV0FBVztBQUFBLGNBQ1gsV0FBVztBQUFBLGNBQ1gsV0FBVztBQUFBLGNBQ1gsV0FBVztBQUFBLGNBQ1gsV0FBVztBQUFBLGNBQ1gsV0FBVztBQUFBLGNBQ1gsV0FBVztBQUFBLGNBQ1gsV0FBVztBQUFBLGNBQ1gsV0FBVztBQUFBLGNBQ1gsV0FBVztBQUFBLGNBQ1gsU0FBVTtBQUFBLGNBQ1YsVUFBVztBQUFBLGNBQ1gsVUFBVztBQUFBLGNBQ1gsVUFBVztBQUFBLGNBQ1gsVUFBVztBQUFBLGNBQ1gsVUFBVztBQUFBLGNBQ1gsV0FBVztBQUFBLGNBQ1gsV0FBVztBQUFBLGNBQ1gsV0FBVztBQUFBLGNBQ1gsV0FBVztBQUFBLGNBQ1gsV0FBVztBQUFBLGNBQ1gsV0FBVztBQUFBLGNBQ1gsV0FBVztBQUFBLGNBQ1gsV0FBVztBQUFBLGNBQ1gsV0FBVztBQUFBLGNBQ1gsV0FBVztBQUFBLGNBQ1gsV0FBWTtBQUFBLGNBQ1osV0FBWTtBQUFBLGNBQ1osV0FBWTtBQUFBLGNBQ1osV0FBWTtBQUFBLGNBQ1osV0FBWTtBQUFBLGNBQ1osV0FBWTtBQUFBLGNBQ1osV0FBWTtBQUFBLGNBQ1osV0FBWTtBQUFBLGNBQ1osV0FBWTtBQUFBLGNBQ1osV0FBWTtBQUFBLGNBQ1osV0FBWTtBQUFBLGNBQ1osV0FBWTtBQUFBLGNBQ1osV0FBWTtBQUFBLGNBQ1osV0FBWTtBQUFBLGNBQ1osV0FBWTtBQUFBLGNBQ1osV0FBWTtBQUFBLGNBQ1osV0FBWTtBQUFBLGNBQ1osV0FBWTtBQUFBLGNBQ1osV0FBWTtBQUFBLGNBQ1osV0FBWTtBQUFBLGNBQ1osV0FBWTtBQUFBLGNBQ1osV0FBWTtBQUFBLGNBQ1osV0FBWTtBQUFBLGNBQ1osV0FBWTtBQUFBLGNBQ1osV0FBWTtBQUFBLGNBQ1osV0FBWTtBQUFBLGNBQ1osV0FBWTtBQUFBLGNBQ1osV0FBWTtBQUFBLGNBQ1osV0FBWTtBQUFBLGNBQ1osV0FBWTtBQUFBLGNBQ1osV0FBWTtBQUFBLGNBQ1osV0FBWTtBQUFBLFlBQ2hCO0FBQUEsWUFDQTtBQUFBLGNBQ0ksR0FBSztBQUFBLGNBQ0wsU0FBVTtBQUFBLGNBQ1YsU0FBVTtBQUFBLGNBQ1YsU0FBVTtBQUFBLGNBQ1YsU0FBVTtBQUFBLGNBQ1YsU0FBVTtBQUFBLGNBQ1YsU0FBVTtBQUFBLGNBQ1YsU0FBVTtBQUFBLGNBQ1YsU0FBVTtBQUFBLGNBQ1YsU0FBVTtBQUFBLGNBQ1YsVUFBVTtBQUFBLGNBQ1YsVUFBVTtBQUFBLGNBQ1YsVUFBVTtBQUFBLGNBQ1YsVUFBVTtBQUFBLGNBQ1YsVUFBVTtBQUFBLGNBQ1YsVUFBVTtBQUFBLGNBQ1YsUUFBUztBQUFBLGNBQ1QsU0FBVTtBQUFBLGNBQ1YsU0FBVTtBQUFBLGNBQ1YsU0FBVTtBQUFBLGNBQ1YsU0FBVTtBQUFBLGNBQ1YsU0FBVTtBQUFBLGNBQ1YsU0FBVTtBQUFBLGNBQ1YsU0FBVTtBQUFBLGNBQ1YsU0FBVTtBQUFBLGNBQ1YsU0FBVTtBQUFBLGNBQ1YsVUFBVTtBQUFBLGNBQ1YsVUFBVTtBQUFBLGNBQ1YsVUFBVTtBQUFBLGNBQ1YsVUFBVTtBQUFBLGNBQ1YsVUFBVTtBQUFBLGNBQ1YsVUFBVTtBQUFBLGNBQ1YsVUFBVztBQUFBLGNBQ1gsVUFBVztBQUFBLGNBQ1gsVUFBVztBQUFBLGNBQ1gsVUFBVztBQUFBLGNBQ1gsVUFBVztBQUFBLGNBQ1gsVUFBVztBQUFBLGNBQ1gsVUFBVztBQUFBLGNBQ1gsVUFBVztBQUFBLGNBQ1gsVUFBVztBQUFBLGNBQ1gsVUFBVztBQUFBLGNBQ1gsVUFBVztBQUFBLGNBQ1gsVUFBVztBQUFBLGNBQ1gsVUFBVztBQUFBLGNBQ1gsVUFBVztBQUFBLGNBQ1gsVUFBVztBQUFBLGNBQ1gsVUFBVztBQUFBLGNBQ1gsVUFBVztBQUFBLGNBQ1gsVUFBVztBQUFBLGNBQ1gsVUFBVztBQUFBLGNBQ1gsVUFBVztBQUFBLGNBQ1gsVUFBVztBQUFBLGNBQ1gsVUFBVztBQUFBLGNBQ1gsVUFBVztBQUFBLGNBQ1gsVUFBVztBQUFBLGNBQ1gsVUFBVztBQUFBLGNBQ1gsVUFBVztBQUFBLGNBQ1gsVUFBVztBQUFBLGNBQ1gsVUFBVztBQUFBLGNBQ1gsVUFBVztBQUFBLGNBQ1gsVUFBVztBQUFBLGNBQ1gsVUFBVztBQUFBLGNBQ1gsVUFBVztBQUFBLFlBQ2Y7QUFBQSxZQUNBO0FBQUEsY0FDSSxHQUFLO0FBQUEsY0FDTCxPQUFTO0FBQUEsY0FDVCxRQUFTO0FBQUEsY0FDVCxRQUFTO0FBQUEsY0FDVCxRQUFTO0FBQUEsY0FDVCxRQUFTO0FBQUEsY0FDVCxRQUFTO0FBQUEsY0FDVCxRQUFTO0FBQUEsY0FDVCxRQUFTO0FBQUEsY0FDVCxRQUFTO0FBQUEsY0FDVCxRQUFTO0FBQUEsY0FDVCxRQUFTO0FBQUEsY0FDVCxRQUFTO0FBQUEsY0FDVCxRQUFTO0FBQUEsY0FDVCxRQUFTO0FBQUEsY0FDVCxRQUFTO0FBQUEsY0FDVCxPQUFRO0FBQUEsY0FDUixPQUFTO0FBQUEsY0FDVCxRQUFTO0FBQUEsY0FDVCxRQUFTO0FBQUEsY0FDVCxRQUFTO0FBQUEsY0FDVCxRQUFTO0FBQUEsY0FDVCxRQUFTO0FBQUEsY0FDVCxRQUFTO0FBQUEsY0FDVCxRQUFTO0FBQUEsY0FDVCxRQUFTO0FBQUEsY0FDVCxRQUFTO0FBQUEsY0FDVCxRQUFTO0FBQUEsY0FDVCxRQUFTO0FBQUEsY0FDVCxRQUFTO0FBQUEsY0FDVCxRQUFTO0FBQUEsY0FDVCxTQUFTO0FBQUEsY0FDVCxTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsWUFDZDtBQUFBLFlBQ0E7QUFBQSxjQUNJLEdBQUs7QUFBQSxjQUNMLE1BQVE7QUFBQSxjQUNSLE1BQVE7QUFBQSxjQUNSLE9BQVE7QUFBQSxjQUNSLE9BQVE7QUFBQSxjQUNSLE9BQVE7QUFBQSxjQUNSLE9BQVE7QUFBQSxjQUNSLE9BQVE7QUFBQSxjQUNSLE9BQVE7QUFBQSxjQUNSLE9BQVE7QUFBQSxjQUNSLE9BQVE7QUFBQSxjQUNSLE9BQVE7QUFBQSxjQUNSLE9BQVE7QUFBQSxjQUNSLE9BQVE7QUFBQSxjQUNSLE9BQVE7QUFBQSxjQUNSLE9BQVE7QUFBQSxjQUNSLE1BQU87QUFBQSxjQUNQLE1BQVE7QUFBQSxjQUNSLE9BQVE7QUFBQSxjQUNSLE9BQVE7QUFBQSxjQUNSLE9BQVE7QUFBQSxjQUNSLE9BQVE7QUFBQSxjQUNSLE9BQVE7QUFBQSxjQUNSLE9BQVE7QUFBQSxjQUNSLE9BQVE7QUFBQSxjQUNSLE9BQVE7QUFBQSxjQUNSLE9BQVE7QUFBQSxjQUNSLE9BQVE7QUFBQSxjQUNSLE9BQVE7QUFBQSxjQUNSLE9BQVE7QUFBQSxjQUNSLE9BQVE7QUFBQSxjQUNSLE9BQVE7QUFBQSxjQUNSLE9BQVM7QUFBQSxjQUNULE9BQVM7QUFBQSxjQUNULE9BQVM7QUFBQSxjQUNULE9BQVM7QUFBQSxjQUNULE9BQVM7QUFBQSxjQUNULE9BQVM7QUFBQSxjQUNULE9BQVM7QUFBQSxjQUNULE9BQVM7QUFBQSxjQUNULE9BQVM7QUFBQSxjQUNULFFBQVM7QUFBQSxjQUNULFFBQVM7QUFBQSxjQUNULFFBQVM7QUFBQSxjQUNULFFBQVM7QUFBQSxjQUNULFFBQVM7QUFBQSxjQUNULFFBQVM7QUFBQSxjQUNULFFBQVM7QUFBQSxjQUNULE9BQVM7QUFBQSxjQUNULE9BQVM7QUFBQSxjQUNULE9BQVM7QUFBQSxjQUNULE9BQVM7QUFBQSxjQUNULE9BQVM7QUFBQSxjQUNULE9BQVM7QUFBQSxjQUNULE9BQVM7QUFBQSxjQUNULE9BQVM7QUFBQSxjQUNULFFBQVM7QUFBQSxjQUNULFFBQVM7QUFBQSxjQUNULFFBQVM7QUFBQSxjQUNULFFBQVM7QUFBQSxjQUNULFFBQVM7QUFBQSxjQUNULFFBQVM7QUFBQSxjQUNULFFBQVM7QUFBQSxjQUNULFFBQVM7QUFBQSxZQUNiO0FBQUEsWUFDQTtBQUFBLGNBQ0ksR0FBSztBQUFBLGNBQ0wsS0FBTztBQUFBLGNBQ1AsS0FBTztBQUFBLGNBQ1AsS0FBTztBQUFBLGNBQ1AsTUFBTztBQUFBLGNBQ1AsTUFBTztBQUFBLGNBQ1AsTUFBTztBQUFBLGNBQ1AsTUFBTztBQUFBLGNBQ1AsTUFBTztBQUFBLGNBQ1AsTUFBTztBQUFBLGNBQ1AsTUFBTztBQUFBLGNBQ1AsTUFBTztBQUFBLGNBQ1AsTUFBTztBQUFBLGNBQ1AsTUFBTztBQUFBLGNBQ1AsTUFBTztBQUFBLGNBQ1AsTUFBTztBQUFBLGNBQ1AsS0FBTTtBQUFBLGNBQ04sS0FBTztBQUFBLGNBQ1AsS0FBTztBQUFBLGNBQ1AsS0FBTztBQUFBLGNBQ1AsTUFBTztBQUFBLGNBQ1AsTUFBTztBQUFBLGNBQ1AsTUFBTztBQUFBLGNBQ1AsTUFBTztBQUFBLGNBQ1AsTUFBTztBQUFBLGNBQ1AsTUFBTztBQUFBLGNBQ1AsTUFBTztBQUFBLGNBQ1AsTUFBTztBQUFBLGNBQ1AsTUFBTztBQUFBLGNBQ1AsTUFBTztBQUFBLGNBQ1AsTUFBTztBQUFBLGNBQ1AsTUFBTztBQUFBLGNBQ1AsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLFlBQ1o7QUFBQSxZQUNBO0FBQUEsY0FDSSxHQUFLO0FBQUEsY0FDTCxJQUFNO0FBQUEsY0FDTixJQUFNO0FBQUEsY0FDTixJQUFNO0FBQUEsY0FDTixJQUFNO0FBQUEsY0FDTixJQUFNO0FBQUEsY0FDTixJQUFNO0FBQUEsY0FDTixLQUFNO0FBQUEsY0FDTixLQUFNO0FBQUEsY0FDTixLQUFNO0FBQUEsY0FDTixLQUFNO0FBQUEsY0FDTixLQUFNO0FBQUEsY0FDTixLQUFNO0FBQUEsY0FDTixLQUFNO0FBQUEsY0FDTixLQUFNO0FBQUEsY0FDTixLQUFNO0FBQUEsY0FDTixHQUFLO0FBQUEsY0FDTCxJQUFNO0FBQUEsY0FDTixJQUFNO0FBQUEsY0FDTixJQUFNO0FBQUEsY0FDTixJQUFNO0FBQUEsY0FDTixJQUFNO0FBQUEsY0FDTixLQUFNO0FBQUEsY0FDTixLQUFNO0FBQUEsY0FDTixLQUFNO0FBQUEsY0FDTixLQUFNO0FBQUEsY0FDTixLQUFNO0FBQUEsY0FDTixLQUFNO0FBQUEsY0FDTixLQUFNO0FBQUEsY0FDTixLQUFNO0FBQUEsY0FDTixLQUFNO0FBQUEsY0FDTixLQUFNO0FBQUEsY0FDTixLQUFPO0FBQUEsY0FDUCxLQUFPO0FBQUEsY0FDUCxLQUFPO0FBQUEsY0FDUCxLQUFPO0FBQUEsY0FDUCxLQUFPO0FBQUEsY0FDUCxLQUFPO0FBQUEsY0FDUCxLQUFPO0FBQUEsY0FDUCxLQUFPO0FBQUEsY0FDUCxLQUFPO0FBQUEsY0FDUCxLQUFPO0FBQUEsY0FDUCxLQUFPO0FBQUEsY0FDUCxLQUFPO0FBQUEsY0FDUCxLQUFPO0FBQUEsY0FDUCxLQUFPO0FBQUEsY0FDUCxLQUFPO0FBQUEsY0FDUCxLQUFPO0FBQUEsY0FDUCxLQUFPO0FBQUEsY0FDUCxLQUFPO0FBQUEsY0FDUCxLQUFPO0FBQUEsY0FDUCxLQUFPO0FBQUEsY0FDUCxLQUFPO0FBQUEsY0FDUCxLQUFPO0FBQUEsY0FDUCxLQUFPO0FBQUEsY0FDUCxLQUFPO0FBQUEsY0FDUCxLQUFPO0FBQUEsY0FDUCxLQUFPO0FBQUEsY0FDUCxLQUFPO0FBQUEsY0FDUCxLQUFPO0FBQUEsY0FDUCxLQUFPO0FBQUEsY0FDUCxLQUFPO0FBQUEsY0FDUCxLQUFPO0FBQUEsY0FDUCxLQUFPO0FBQUEsWUFDWDtBQUFBLFlBQ0E7QUFBQSxjQUNJLEdBQUs7QUFBQSxjQUNMLEdBQUs7QUFBQSxjQUNMLEdBQUs7QUFBQSxjQUNMLEdBQUs7QUFBQSxjQUNMLEdBQUs7QUFBQSxjQUNMLEdBQUs7QUFBQSxjQUNMLEdBQUs7QUFBQSxjQUNMLEdBQUs7QUFBQSxjQUNMLEdBQUs7QUFBQSxjQUNMLEdBQUs7QUFBQSxjQUNMLElBQUs7QUFBQSxjQUNMLElBQUs7QUFBQSxjQUNMLElBQUs7QUFBQSxjQUNMLElBQUs7QUFBQSxjQUNMLElBQUs7QUFBQSxjQUNMLElBQUs7QUFBQSxjQUNMLFlBQVk7QUFBQSxjQUNaLFlBQVk7QUFBQSxjQUNaLFlBQVk7QUFBQSxjQUNaLFlBQVk7QUFBQSxjQUNaLFlBQVk7QUFBQSxjQUNaLFlBQVk7QUFBQSxjQUNaLFlBQVk7QUFBQSxjQUNaLFlBQVk7QUFBQSxjQUNaLFlBQVk7QUFBQSxjQUNaLFlBQVk7QUFBQSxjQUNaLFlBQVk7QUFBQSxjQUNaLFlBQVk7QUFBQSxjQUNaLFlBQVk7QUFBQSxjQUNaLFlBQVk7QUFBQSxjQUNaLFlBQVk7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LENBQUM7QUFBQSxZQUNmO0FBR0EsWUFBQUEsR0FBRSxDQUFDLElBQUtBLEdBQUUsQ0FBQyxJQUFJLGFBQWEsS0FBSyxLQUFNO0FBQ3ZDLFlBQUFBLEdBQUUsQ0FBQyxJQUFLQSxHQUFFLENBQUMsSUFBSSxjQUFlQSxHQUFFLENBQUMsTUFBTSxJQUFNLEdBQUcsQ0FBQyxNQUFNLElBQUssSUFBSSxLQUFNO0FBQ3RFLFlBQUFBLEdBQUUsQ0FBQyxJQUFLQSxHQUFFLENBQUMsSUFBSSxhQUFlQSxHQUFFLENBQUMsTUFBTSxJQUFNLEdBQUcsQ0FBQyxNQUFNLElBQUssSUFBSSxLQUFNO0FBQ3RFLFlBQUFBLEdBQUUsQ0FBQyxJQUFLQSxHQUFFLENBQUMsSUFBSSxjQUFlQSxHQUFFLENBQUMsTUFBTSxJQUFNLEdBQUcsQ0FBQyxNQUFNLElBQUssSUFBSSxLQUFNO0FBQ3RFLFlBQUFBLEdBQUUsQ0FBQyxJQUFLQSxHQUFFLENBQUMsSUFBSSxjQUFlQSxHQUFFLENBQUMsTUFBTSxJQUFNLEdBQUcsQ0FBQyxNQUFNLElBQUssSUFBSSxLQUFNO0FBQ3RFLFlBQUFBLEdBQUUsQ0FBQyxJQUFLQSxHQUFFLENBQUMsSUFBSSxhQUFlQSxHQUFFLENBQUMsTUFBTSxJQUFNLEdBQUcsQ0FBQyxNQUFNLElBQUssSUFBSSxLQUFNO0FBQ3RFLFlBQUFBLEdBQUUsQ0FBQyxJQUFLQSxHQUFFLENBQUMsSUFBSSxjQUFlQSxHQUFFLENBQUMsTUFBTSxJQUFNLEdBQUcsQ0FBQyxNQUFNLElBQUssSUFBSSxLQUFNO0FBQ3RFLFlBQUFBLEdBQUUsQ0FBQyxJQUFLQSxHQUFFLENBQUMsSUFBSSxjQUFlQSxHQUFFLENBQUMsTUFBTSxJQUFNLEdBQUcsQ0FBQyxNQUFNLElBQUssSUFBSSxLQUFNO0FBQ3RFLGlCQUFLLEtBQU1BLEdBQUUsQ0FBQyxNQUFNLElBQU0sR0FBRyxDQUFDLE1BQU0sSUFBSyxJQUFJO0FBRzdDLHFCQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztBQUN4QixrQkFBSSxLQUFLLEVBQUUsQ0FBQyxJQUFJQSxH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Q1g7QUFFTyxXQUFTLFVBQVUsWUFBWSxNQUFNLFFBQVEsUUFBUSxRQUFXLFdBQVcsUUFBVztBQUN6RixRQUFJLFVBQVU7QUFDZCxRQUFJLGFBQWEsVUFBVSxHQUFHO0FBQzFCLGdCQUFVLFdBQVc7QUFDckIsYUFBTyxXQUFXO0FBQ2xCLGVBQVMsV0FBVztBQUNwQixjQUFRLFdBQVc7QUFDbkIsaUJBQVcsV0FBVztBQUN0QixpQkFBVyxhQUFhO0FBQUEsSUFDNUI7QUFFQSxVQUFNLFdBQVcsS0FBSyxTQUFTLE1BQU0sUUFBUSxLQUFLO0FBQ2xELFFBQUksZUFBZTtBQUNuQixRQUFJLFNBQVMsU0FBUyxHQUFHO0FBQ3JCLHFCQUFlLFNBQVMsQ0FBQztBQUFBLElBQzdCO0FBQ0EsUUFBSSxnQkFBZ0IsT0FBTyxhQUFhLFlBQVk7QUFDaEQsZUFBUyxZQUFZO0FBQUEsSUFDekI7QUFDQSxXQUFPO0FBQUEsRUFDWDtBQUVPLFdBQVMsWUFBWSxZQUFZLE1BQU0sUUFBUSxRQUFRLE9BQU8sVUFBVTtBQUMzRSxRQUFJLFVBQVU7QUFDZCxRQUFJLGFBQWEsVUFBVSxHQUFHO0FBQzFCLGdCQUFVLFdBQVc7QUFDckIsYUFBTyxXQUFXO0FBQ2xCLGVBQVMsV0FBVztBQUNwQixlQUFTLFdBQVc7QUFDcEIsY0FBUSxXQUFXO0FBQ25CLGlCQUFXLFdBQVc7QUFBQSxJQUMxQjtBQUVBLFVBQU0sU0FBUyxVQUFVLFNBQVMsTUFBTSxRQUFRLE9BQU8sUUFBUTtBQUMvRCxRQUFJLFFBQVE7QUFDUixhQUFPLG9CQUFvQixRQUFRLE1BQU07QUFBQSxJQUM3QyxPQUFPO0FBQ0gsYUFBTztBQUFBLElBQ1g7QUFBQSxFQUNKO0FBd0xPLE1BQU0sV0FBVzs7O0FDaG5CakIsTUFBTSxZQUFZO0FBQUEsSUFDckIsR0FBRztBQUFBLEVBQ1A7IiwKICAibmFtZXMiOiBbIkNyeXB0b0pTIiwgIk1hdGgiLCAidW5kZWZpbmVkIiwgIkNyeXB0b0pTIiwgInVuZGVmaW5lZCIsICJDcnlwdG9KUyIsICJDcnlwdG9KUyIsICJDcnlwdG9KUyIsICJDcnlwdG9KUyIsICJDcnlwdG9KUyIsICJNYXRoIiwgIkNyeXB0b0pTIiwgIkNyeXB0b0pTIiwgIk1hdGgiLCAibiIsICJIIiwgIkNyeXB0b0pTIiwgIkNyeXB0b0pTIiwgIkNyeXB0b0pTIiwgIkNyeXB0b0pTIiwgIk1hdGgiLCAiQ3J5cHRvSlMiLCAiTWF0aCIsICJDcnlwdG9KUyIsICJDcnlwdG9KUyIsICJDcnlwdG9KUyIsICJDcnlwdG9KUyIsICJ1bmRlZmluZWQiLCAiQ0JDIiwgIkNyeXB0b0pTIiwgIkNyeXB0b0pTIiwgIkNyeXB0b0pTIiwgIkNyeXB0b0pTIiwgIkNyeXB0b0pTIiwgIkNyeXB0b0pTIiwgIkNyeXB0b0pTIiwgIkNyeXB0b0pTIiwgIkNyeXB0b0pTIiwgIkNyeXB0b0pTIiwgIkNyeXB0b0pTIiwgInVuZGVmaW5lZCIsICJDcnlwdG9KUyIsICJTVUJfTUlYXzAiLCAiU1VCX01JWF8xIiwgIlNVQl9NSVhfMiIsICJTVUJfTUlYXzMiLCAiU0JPWCIsICJDcnlwdG9KUyIsICJDcnlwdG9KUyIsICJDcnlwdG9KUyIsICJDIiwgIkNyeXB0b0pTIiwgIkMiLCAiQ3J5cHRvSlMiLCAiaXNBcmdzT2JqZWN0Il0KfQo=

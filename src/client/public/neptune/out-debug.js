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
    "node_modules/crypto-js/core.js"(exports, module2) {
      (function(root, factory) {
        if (typeof exports === "object") {
          module2.exports = exports = factory();
        } else if (typeof define === "function" && define.amd) {
          define([], factory);
        } else {
          root.CryptoJS = factory();
        }
      })(exports, function() {
        var CryptoJS3 = CryptoJS3 || function(Math2, undefined2) {
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
        return CryptoJS3;
      });
    }
  });

  // node_modules/crypto-js/x64-core.js
  var require_x64_core = __commonJS({
    "node_modules/crypto-js/x64-core.js"(exports, module2) {
      (function(root, factory) {
        if (typeof exports === "object") {
          module2.exports = exports = factory(require_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS3) {
        (function(undefined2) {
          var C = CryptoJS3;
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
        return CryptoJS3;
      });
    }
  });

  // node_modules/crypto-js/lib-typedarrays.js
  var require_lib_typedarrays = __commonJS({
    "node_modules/crypto-js/lib-typedarrays.js"(exports, module2) {
      (function(root, factory) {
        if (typeof exports === "object") {
          module2.exports = exports = factory(require_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS3) {
        (function() {
          if (typeof ArrayBuffer != "function") {
            return;
          }
          var C = CryptoJS3;
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
        return CryptoJS3.lib.WordArray;
      });
    }
  });

  // node_modules/crypto-js/enc-utf16.js
  var require_enc_utf16 = __commonJS({
    "node_modules/crypto-js/enc-utf16.js"(exports, module2) {
      (function(root, factory) {
        if (typeof exports === "object") {
          module2.exports = exports = factory(require_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS3) {
        (function() {
          var C = CryptoJS3;
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
        return CryptoJS3.enc.Utf16;
      });
    }
  });

  // node_modules/crypto-js/enc-base64.js
  var require_enc_base64 = __commonJS({
    "node_modules/crypto-js/enc-base64.js"(exports, module2) {
      (function(root, factory) {
        if (typeof exports === "object") {
          module2.exports = exports = factory(require_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS3) {
        (function() {
          var C = CryptoJS3;
          var C_lib = C.lib;
          var WordArray = C_lib.WordArray;
          var C_enc = C.enc;
          var Base642 = C_enc.Base64 = {
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
        return CryptoJS3.enc.Base64;
      });
    }
  });

  // node_modules/crypto-js/enc-base64url.js
  var require_enc_base64url = __commonJS({
    "node_modules/crypto-js/enc-base64url.js"(exports, module2) {
      (function(root, factory) {
        if (typeof exports === "object") {
          module2.exports = exports = factory(require_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS3) {
        (function() {
          var C = CryptoJS3;
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
        return CryptoJS3.enc.Base64url;
      });
    }
  });

  // node_modules/crypto-js/md5.js
  var require_md5 = __commonJS({
    "node_modules/crypto-js/md5.js"(exports, module2) {
      (function(root, factory) {
        if (typeof exports === "object") {
          module2.exports = exports = factory(require_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS3) {
        (function(Math2) {
          var C = CryptoJS3;
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
        return CryptoJS3.MD5;
      });
    }
  });

  // node_modules/crypto-js/sha1.js
  var require_sha1 = __commonJS({
    "node_modules/crypto-js/sha1.js"(exports, module2) {
      (function(root, factory) {
        if (typeof exports === "object") {
          module2.exports = exports = factory(require_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS3) {
        (function() {
          var C = CryptoJS3;
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
        return CryptoJS3.SHA1;
      });
    }
  });

  // node_modules/crypto-js/sha256.js
  var require_sha256 = __commonJS({
    "node_modules/crypto-js/sha256.js"(exports, module2) {
      (function(root, factory) {
        if (typeof exports === "object") {
          module2.exports = exports = factory(require_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS3) {
        (function(Math2) {
          var C = CryptoJS3;
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
        return CryptoJS3.SHA256;
      });
    }
  });

  // node_modules/crypto-js/sha224.js
  var require_sha224 = __commonJS({
    "node_modules/crypto-js/sha224.js"(exports, module2) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module2.exports = exports = factory(require_core(), require_sha256());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./sha256"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS3) {
        (function() {
          var C = CryptoJS3;
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
        return CryptoJS3.SHA224;
      });
    }
  });

  // node_modules/crypto-js/sha512.js
  var require_sha512 = __commonJS({
    "node_modules/crypto-js/sha512.js"(exports, module2) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module2.exports = exports = factory(require_core(), require_x64_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./x64-core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS3) {
        (function() {
          var C = CryptoJS3;
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
        return CryptoJS3.SHA512;
      });
    }
  });

  // node_modules/crypto-js/sha384.js
  var require_sha384 = __commonJS({
    "node_modules/crypto-js/sha384.js"(exports, module2) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module2.exports = exports = factory(require_core(), require_x64_core(), require_sha512());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./x64-core", "./sha512"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS3) {
        (function() {
          var C = CryptoJS3;
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
        return CryptoJS3.SHA384;
      });
    }
  });

  // node_modules/crypto-js/sha3.js
  var require_sha3 = __commonJS({
    "node_modules/crypto-js/sha3.js"(exports, module2) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module2.exports = exports = factory(require_core(), require_x64_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./x64-core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS3) {
        (function(Math2) {
          var C = CryptoJS3;
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
        return CryptoJS3.SHA3;
      });
    }
  });

  // node_modules/crypto-js/ripemd160.js
  var require_ripemd160 = __commonJS({
    "node_modules/crypto-js/ripemd160.js"(exports, module2) {
      (function(root, factory) {
        if (typeof exports === "object") {
          module2.exports = exports = factory(require_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS3) {
        (function(Math2) {
          var C = CryptoJS3;
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
        return CryptoJS3.RIPEMD160;
      });
    }
  });

  // node_modules/crypto-js/hmac.js
  var require_hmac = __commonJS({
    "node_modules/crypto-js/hmac.js"(exports, module2) {
      (function(root, factory) {
        if (typeof exports === "object") {
          module2.exports = exports = factory(require_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS3) {
        (function() {
          var C = CryptoJS3;
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
    "node_modules/crypto-js/pbkdf2.js"(exports, module2) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module2.exports = exports = factory(require_core(), require_sha1(), require_hmac());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./sha1", "./hmac"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS3) {
        (function() {
          var C = CryptoJS3;
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
        return CryptoJS3.PBKDF2;
      });
    }
  });

  // node_modules/crypto-js/evpkdf.js
  var require_evpkdf = __commonJS({
    "node_modules/crypto-js/evpkdf.js"(exports, module2) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module2.exports = exports = factory(require_core(), require_sha1(), require_hmac());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./sha1", "./hmac"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS3) {
        (function() {
          var C = CryptoJS3;
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
        return CryptoJS3.EvpKDF;
      });
    }
  });

  // node_modules/crypto-js/cipher-core.js
  var require_cipher_core = __commonJS({
    "node_modules/crypto-js/cipher-core.js"(exports, module2) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module2.exports = exports = factory(require_core(), require_evpkdf());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./evpkdf"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS3) {
        CryptoJS3.lib.Cipher || function(undefined2) {
          var C = CryptoJS3;
          var C_lib = C.lib;
          var Base = C_lib.Base;
          var WordArray = C_lib.WordArray;
          var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
          var C_enc = C.enc;
          var Utf8 = C_enc.Utf8;
          var Base642 = C_enc.Base64;
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
              return wordArray.toString(Base642);
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
              var ciphertext = Base642.parse(openSSLStr);
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
    "node_modules/crypto-js/mode-cfb.js"(exports, module2) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module2.exports = exports = factory(require_core(), require_cipher_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./cipher-core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS3) {
        CryptoJS3.mode.CFB = function() {
          var CFB = CryptoJS3.lib.BlockCipherMode.extend();
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
        return CryptoJS3.mode.CFB;
      });
    }
  });

  // node_modules/crypto-js/mode-ctr.js
  var require_mode_ctr = __commonJS({
    "node_modules/crypto-js/mode-ctr.js"(exports, module2) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module2.exports = exports = factory(require_core(), require_cipher_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./cipher-core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS3) {
        CryptoJS3.mode.CTR = function() {
          var CTR = CryptoJS3.lib.BlockCipherMode.extend();
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
        return CryptoJS3.mode.CTR;
      });
    }
  });

  // node_modules/crypto-js/mode-ctr-gladman.js
  var require_mode_ctr_gladman = __commonJS({
    "node_modules/crypto-js/mode-ctr-gladman.js"(exports, module2) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module2.exports = exports = factory(require_core(), require_cipher_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./cipher-core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS3) {
        CryptoJS3.mode.CTRGladman = function() {
          var CTRGladman = CryptoJS3.lib.BlockCipherMode.extend();
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
        return CryptoJS3.mode.CTRGladman;
      });
    }
  });

  // node_modules/crypto-js/mode-ofb.js
  var require_mode_ofb = __commonJS({
    "node_modules/crypto-js/mode-ofb.js"(exports, module2) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module2.exports = exports = factory(require_core(), require_cipher_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./cipher-core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS3) {
        CryptoJS3.mode.OFB = function() {
          var OFB = CryptoJS3.lib.BlockCipherMode.extend();
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
        return CryptoJS3.mode.OFB;
      });
    }
  });

  // node_modules/crypto-js/mode-ecb.js
  var require_mode_ecb = __commonJS({
    "node_modules/crypto-js/mode-ecb.js"(exports, module2) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module2.exports = exports = factory(require_core(), require_cipher_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./cipher-core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS3) {
        CryptoJS3.mode.ECB = function() {
          var ECB = CryptoJS3.lib.BlockCipherMode.extend();
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
        return CryptoJS3.mode.ECB;
      });
    }
  });

  // node_modules/crypto-js/pad-ansix923.js
  var require_pad_ansix923 = __commonJS({
    "node_modules/crypto-js/pad-ansix923.js"(exports, module2) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module2.exports = exports = factory(require_core(), require_cipher_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./cipher-core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS3) {
        CryptoJS3.pad.AnsiX923 = {
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
        return CryptoJS3.pad.Ansix923;
      });
    }
  });

  // node_modules/crypto-js/pad-iso10126.js
  var require_pad_iso10126 = __commonJS({
    "node_modules/crypto-js/pad-iso10126.js"(exports, module2) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module2.exports = exports = factory(require_core(), require_cipher_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./cipher-core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS3) {
        CryptoJS3.pad.Iso10126 = {
          pad: function(data, blockSize) {
            var blockSizeBytes = blockSize * 4;
            var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;
            data.concat(CryptoJS3.lib.WordArray.random(nPaddingBytes - 1)).concat(CryptoJS3.lib.WordArray.create([nPaddingBytes << 24], 1));
          },
          unpad: function(data) {
            var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 255;
            data.sigBytes -= nPaddingBytes;
          }
        };
        return CryptoJS3.pad.Iso10126;
      });
    }
  });

  // node_modules/crypto-js/pad-iso97971.js
  var require_pad_iso97971 = __commonJS({
    "node_modules/crypto-js/pad-iso97971.js"(exports, module2) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module2.exports = exports = factory(require_core(), require_cipher_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./cipher-core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS3) {
        CryptoJS3.pad.Iso97971 = {
          pad: function(data, blockSize) {
            data.concat(CryptoJS3.lib.WordArray.create([2147483648], 1));
            CryptoJS3.pad.ZeroPadding.pad(data, blockSize);
          },
          unpad: function(data) {
            CryptoJS3.pad.ZeroPadding.unpad(data);
            data.sigBytes--;
          }
        };
        return CryptoJS3.pad.Iso97971;
      });
    }
  });

  // node_modules/crypto-js/pad-zeropadding.js
  var require_pad_zeropadding = __commonJS({
    "node_modules/crypto-js/pad-zeropadding.js"(exports, module2) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module2.exports = exports = factory(require_core(), require_cipher_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./cipher-core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS3) {
        CryptoJS3.pad.ZeroPadding = {
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
        return CryptoJS3.pad.ZeroPadding;
      });
    }
  });

  // node_modules/crypto-js/pad-nopadding.js
  var require_pad_nopadding = __commonJS({
    "node_modules/crypto-js/pad-nopadding.js"(exports, module2) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module2.exports = exports = factory(require_core(), require_cipher_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./cipher-core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS3) {
        CryptoJS3.pad.NoPadding = {
          pad: function() {
          },
          unpad: function() {
          }
        };
        return CryptoJS3.pad.NoPadding;
      });
    }
  });

  // node_modules/crypto-js/format-hex.js
  var require_format_hex = __commonJS({
    "node_modules/crypto-js/format-hex.js"(exports, module2) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module2.exports = exports = factory(require_core(), require_cipher_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./cipher-core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS3) {
        (function(undefined2) {
          var C = CryptoJS3;
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
        return CryptoJS3.format.Hex;
      });
    }
  });

  // node_modules/crypto-js/aes.js
  var require_aes = __commonJS({
    "node_modules/crypto-js/aes.js"(exports, module2) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module2.exports = exports = factory(require_core(), require_enc_base64(), require_md5(), require_evpkdf(), require_cipher_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS3) {
        (function() {
          var C = CryptoJS3;
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
        return CryptoJS3.AES;
      });
    }
  });

  // node_modules/crypto-js/tripledes.js
  var require_tripledes = __commonJS({
    "node_modules/crypto-js/tripledes.js"(exports, module2) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module2.exports = exports = factory(require_core(), require_enc_base64(), require_md5(), require_evpkdf(), require_cipher_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS3) {
        (function() {
          var C = CryptoJS3;
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
        return CryptoJS3.TripleDES;
      });
    }
  });

  // node_modules/crypto-js/rc4.js
  var require_rc4 = __commonJS({
    "node_modules/crypto-js/rc4.js"(exports, module2) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module2.exports = exports = factory(require_core(), require_enc_base64(), require_md5(), require_evpkdf(), require_cipher_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS3) {
        (function() {
          var C = CryptoJS3;
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
        return CryptoJS3.RC4;
      });
    }
  });

  // node_modules/crypto-js/rabbit.js
  var require_rabbit = __commonJS({
    "node_modules/crypto-js/rabbit.js"(exports, module2) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module2.exports = exports = factory(require_core(), require_enc_base64(), require_md5(), require_evpkdf(), require_cipher_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS3) {
        (function() {
          var C = CryptoJS3;
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
        return CryptoJS3.Rabbit;
      });
    }
  });

  // node_modules/crypto-js/rabbit-legacy.js
  var require_rabbit_legacy = __commonJS({
    "node_modules/crypto-js/rabbit-legacy.js"(exports, module2) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module2.exports = exports = factory(require_core(), require_enc_base64(), require_md5(), require_evpkdf(), require_cipher_core());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
        } else {
          factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS3) {
        (function() {
          var C = CryptoJS3;
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
        return CryptoJS3.RabbitLegacy;
      });
    }
  });

  // node_modules/crypto-js/index.js
  var require_crypto_js = __commonJS({
    "node_modules/crypto-js/index.js"(exports, module2) {
      (function(root, factory, undef) {
        if (typeof exports === "object") {
          module2.exports = exports = factory(require_core(), require_x64_core(), require_lib_typedarrays(), require_enc_utf16(), require_enc_base64(), require_enc_base64url(), require_md5(), require_sha1(), require_sha256(), require_sha224(), require_sha512(), require_sha384(), require_sha3(), require_ripemd160(), require_hmac(), require_pbkdf2(), require_evpkdf(), require_cipher_core(), require_mode_cfb(), require_mode_ctr(), require_mode_ctr_gladman(), require_mode_ofb(), require_mode_ecb(), require_pad_ansix923(), require_pad_iso10126(), require_pad_iso97971(), require_pad_zeropadding(), require_pad_nopadding(), require_format_hex(), require_aes(), require_tripledes(), require_rc4(), require_rabbit(), require_rabbit_legacy());
        } else if (typeof define === "function" && define.amd) {
          define(["./core", "./x64-core", "./lib-typedarrays", "./enc-utf16", "./enc-base64", "./enc-base64url", "./md5", "./sha1", "./sha256", "./sha224", "./sha512", "./sha384", "./sha3", "./ripemd160", "./hmac", "./pbkdf2", "./evpkdf", "./cipher-core", "./mode-cfb", "./mode-ctr", "./mode-ctr-gladman", "./mode-ofb", "./mode-ecb", "./pad-ansix923", "./pad-iso10126", "./pad-iso97971", "./pad-zeropadding", "./pad-nopadding", "./format-hex", "./aes", "./tripledes", "./rc4", "./rabbit", "./rabbit-legacy"], factory);
        } else {
          root.CryptoJS = factory(root.CryptoJS);
        }
      })(exports, function(CryptoJS3) {
        return CryptoJS3;
      });
    }
  });

  // src/open-edition/p9library.ts
  var p9library_exports = {};
  __export(p9library_exports, {
    AppStorage: () => AppStorage,
    AppSync: () => AppSync2,
    Base64: () => Base64,
    P9CheckIDBInterval: () => P9CheckIDBInterval,
    _AppCache_GetCache: () => _AppCache_GetCache,
    _AppCache_GetCache_DB: () => _AppCache_GetCache_DB,
    _AppCache_GetCache_LS: () => _AppCache_GetCache_LS,
    _AppCache_SetCache: () => _AppCache_SetCache,
    _AppCache_SetCache_DB: () => _AppCache_SetCache_DB,
    _AppCache_SetCache_LS: () => _AppCache_SetCache_LS,
    _convertFlatToNested: () => _convertFlatToNested,
    _convertNestedToFlat: () => _convertNestedToFlat,
    define: () => define2,
    indexDbDebug: () => indexDbDebug,
    p9Database: () => p9Database,
    p9Get: () => p9Get,
    p9GetModel: () => p9GetModel,
    p9GetView: () => p9GetView,
    p9Save: () => p9Save,
    p9SaveModel: () => p9SaveModel,
    p9SaveModel2: () => p9SaveModel2,
    p9SaveView: () => p9SaveView
  });

  // src/common/modeldata.ts
  var modeldata_exports = {};
  __export(modeldata_exports, {
    Add: () => Add,
    AddArray: () => AddArray,
    Find: () => Find,
    FindDB: () => FindDB,
    FindFirst: () => FindFirst,
    LookupValue: () => LookupValue,
    Update: () => Update,
    UpdateArray: () => UpdateArray,
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
  function CompareObjWithObj(obj, key, objComp, oper) {
    let bCompare = true;
    key.forEach(function(keyElem, IDX, ARR) {
      bCompare = bCompare && ComparePath(obj, keyElem, objComp[keyElem], oper[IDX]);
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
  function FindDB(obj, table, queryString, queryData, callBack) {
    if (typeof AppSync.db === "undefined") {
      if (typeof callBack === "function") {
        callBack();
      }
      return;
    }
    const model = v4_getModel(obj);
    const newArr = [];
    let qData = [];
    if (typeof queryData === "string") {
      qData[0] = queryData;
    } else {
      qData = queryData;
    }
    AppSync.db.transaction(
      function(tx) {
        tx.executeSql(
          "SELECT * FROM " + table + " WHERE " + queryString,
          qData,
          function(tx2, results) {
            for (let i = 0; i < results.rows.length; i++) {
              const obj2 = results.rows.item(i);
              for (const p in obj2) {
                if (obj2[p] === "false") {
                  obj2[p] = false;
                }
                if (obj2[p] === "true") {
                  obj2[p] = true;
                }
              }
              newArr.push(obj2);
            }
            modelSetData(model, newArr);
            if (typeof callBack === "function") {
              callBack();
            }
          },
          null
        );
      },
      function(tx) {
        if (tx.code !== "0") {
          console.log(tx.message);
          callBack();
        }
      }
    );
  }
  function Add(argsObject, rec) {
    let source = argsObject;
    if (isArgsObject(argsObject)) {
      source = argsObject.source;
      rec = argsObject.data;
    }
    const oSource = getModelDataSource(source);
    const arr = oSource.getArray();
    arr.push(rec);
    oSource.updateData(arr);
  }
  function AddArray(argsObject, addArr) {
    let source = argsObject;
    if (isArgsObject(argsObject)) {
      source = argsObject.source;
      addArr = argsObject.data;
    }
    const oSource = getModelDataSource(source);
    const arr = oSource.getArray();
    for (let i = 0; i < addArr.length; i++) {
      arr.push(addArr[i]);
    }
    oSource.updateData(arr);
  }
  function Update(argsObject, key, val, rec, oper = void 0) {
    let source = argsObject;
    let fnCallBack;
    let callBack;
    if (isArgsObject(argsObject)) {
      source = argsObject.source;
      key = argsObject.keys;
      val = argsObject.values;
      rec = argsObject.data;
      oper = argsObject.operators;
      callBack = argsObject.fnCallback;
    }
    const oSource = getModelDataSource(source);
    const arr = oSource.getArray();
    let upd = false;
    key = ensureArray(key);
    val = ensureArray(val);
    oper = ensureOperator(oper, key.length);
    if (key.length != val.length || key.length != oper.length)
      return;
    const updates = [];
    if (key.length > 0) {
      for (let ai, i = arr.length; i--; ) {
        if (CompareObjWithArray(arr[i], key, val, oper)) {
          arr[i] = rec;
          upd = true;
          updates.push(arr[i]);
        }
      }
    }
    if (upd !== true) {
      arr.push(rec);
    }
    oSource.updateData(arr);
    if (typeof callBack === "function") {
      callBack(updates);
    }
  }
  function UpdateArray(argsObject, key, updateArr, oper) {
    let source = argsObject;
    let fnCallBack;
    let callBack;
    if (isArgsObject(argsObject)) {
      source = argsObject.source;
      key = argsObject.keys;
      updateArr = argsObject.data;
      oper = argsObject.operators;
      callBack = argsObject.fnCallback;
    }
    const oSource = getModelDataSource(source);
    const arr = oSource.getArray();
    let upd = false;
    key = ensureArray(key);
    oper = ensureOperator(oper, key.length);
    if (key.length != oper.length)
      return;
    const updates = [];
    updateArr.forEach(function(newData) {
      upd = false;
      if (key.length > 0) {
        for (let i = 0; i < arr.length; i++) {
          if (CompareObjWithObj(arr[i], key, newData, oper)) {
            arr[i] = newData;
            upd = true;
            updates.push(arr[i]);
          }
        }
      }
      if (upd === false) {
        arr.push(newData);
      }
    });
    oSource.updateData(arr);
    if (typeof callBack === "function") {
      callBack(updates);
    }
  }
  var getModel = v4_getModel;

  // src/open-edition/modeldata.ts
  var ModelData = {
    ...modeldata_exports
  };

  // src/open-edition/p9library.ts
  function _convertFlatToNested(n, r, t) {
    let e, h, u, a;
    let c;
    let o;
    let f;
    for (a = [], c = {}, o = 0, f = n.length; f > o; o++)
      e = n[o], h = e[r], u = e[t] || 0, c[h] = c[h] || [], e.children = c[h], 0 !== u ? (c[u] = c[u] || [], c[u].push(e)) : a.push(e);
    return a;
  }
  function _convertNestedToFlat(a) {
    const b = [], c = function(a2) {
      $.each(a2, function(a3, d) {
        d.children && (c(d.children), delete d.children), b.push(d);
      });
    };
    return c(JSON.parse(JSON.stringify(a.children))), b;
  }
  var AppStorage = {
    deviceID: "",
    useFallback: false,
    Startup: function() {
      AppStorage.deviceID = localStorage.getItem("AppCacheID");
      if (!AppStorage.deviceID) {
        AppStorage.deviceID = ModelData.genID();
        localStorage.setItem("AppCacheID", AppStorage.deviceID);
      }
    }
  };
  var p9Database = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
  function p9OpenIDB(db, tableName, version) {
    return new Promise(function(resolve, reject) {
      const table = db.open(tableName, version);
      window[tableName + "s"] = table;
      table.onupgradeneeded = function upgradeNeeded(e) {
        indexDbDebug("db upgradeneeded");
        const db2 = e.target.result;
        db2.createObjectStore(tableName === "p9View" ? "view" : "model", { keyPath: "key" });
      };
      table.onerror = function onError(e) {
        _AppCache_GetCache_DB = _AppCache_GetCache_LS;
        _AppCache_SetCache_DB = _AppCache_SetCache_LS;
        p9Database = null;
        return reject("onerror");
      };
      table.onsuccess = function(e) {
        return resolve(table);
      };
      table.addEventListener("close", function close(e) {
        indexDbDebug("db close");
        return reject("close");
      });
      table.addEventListener("blocked", function blocked(e) {
        indexDbDebug("db blocked");
        return reject("blocked");
      });
      table.addEventListener("versionchange", function versionchange(e) {
        indexDbDebug("db versionchange");
        return reject("versionchange");
      });
    });
  }
  function P9CheckIDB() {
    const indexDBAll = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
    if (indexDBAll && typeof indexDBAll.databases === "function") {
      indexDBAll.databases().then(function(data) {
        p9OpenIDB(p9Database, "p9View", 1);
        p9OpenIDB(p9Database, "p9Model", 1);
        clearInterval(P9CheckIDBInterval);
      });
    } else {
      p9OpenIDB(p9Database, "p9View", 1);
      p9OpenIDB(p9Database, "p9Model", 1);
      clearInterval(P9CheckIDBInterval);
    }
  }
  var P9CheckIDBInterval = setInterval(P9CheckIDB, 100);
  function indexDbDebug(where) {
    return function mydbg() {
      console.log("Table event type " + where);
      console.trace();
    };
  }
  function p9Get(table, tableName, storeName, key, numRetries) {
    return new Promise(function(resolve, reject) {
      try {
        const tx = table.result.transaction(storeName, "readonly");
        const store = tx.objectStore(storeName);
        const request = store.get(key);
        tx.onerror = function(e) {
          console.log("IndexedDB Error (p9Get" + storeName + ") Transaction " + e);
        };
        request.onsuccess = function() {
          if (request.result) {
            resolve(request.result.value);
          } else {
            resolve("{}");
          }
        };
        request.onerror = function() {
          resolve("{}");
        };
      } catch (e) {
        if (!numRetries || numRetries < 1) {
          numRetries = 1;
          p9OpenIDB(p9Database, tableName, 1).then((reloadedDb) => {
            console.log("IndexedDB Error: Reloaded DB");
            return resolve(p9Get(reloadedDb, tableName, storeName, key, numRetries));
          }).catch((e2) => {
            return reject("IndexedDB Error: Unable to get the view");
          });
        } else {
          console.error("IndexedDB Error: Could not fetch data", e);
        }
      }
    });
  }
  function p9Save(table, tableName, storeName, key, data, numRetries) {
    return new Promise(function(resolve, reject) {
      try {
        const tx = table.result.transaction(storeName, "readwrite");
        const store = tx.objectStore(storeName);
        const request = store.put({ key, value: data });
        request.onerror = function(e) {
          console.error(
            "IndexedDB Error (p9Save " + storeName + ") Key " + key + request.error
          );
        };
        request.onsuccess = function() {
          return resolve();
        };
      } catch (e) {
        if (!numRetries || numRetries < 1) {
          numRetries = 1;
          p9OpenIDB(p9Database, tableName, 1).then((reloadedDb) => {
            console.log("IndexedDB Error: Reloaded DB");
            return resolve(
              p9Save(reloadedDb, tableName, storeName, key, data, numRetries)
            );
          }).catch((e2) => {
            console.error("IndexedDB Error: Unable to save the view", e2);
            return reject("Unable to save the view");
          });
        }
      }
    });
  }
  function p9SaveModel2(key, data) {
    try {
      const db = p9Models.result;
      const tx = db.transaction("model", "readwrite");
      const store = tx.objectStore("model");
      const request = store.put({ key, value: data });
      request.onerror = function(e) {
        console.error("IndexedDB Error (p9SaveModel) Key " + key + request.error);
      };
    } catch (e) {
      console.error(e);
    }
  }
  function p9SaveModel(key, data) {
    return p9Save(p9Models, "p9Model", "model", key, data);
  }
  function p9GetModel(key) {
    return p9Get(p9Models, "p9Model", "model", key);
  }
  function p9SaveView(key, data, numRetries) {
    return p9Save(p9Views, "p9View", "view", key, data);
  }
  function p9GetView(key) {
    return p9Get(p9Views, "p9View", "view", key);
  }
  function _AppCache_GetCache(id, model, type, online, event, jsonh, encryption) {
    if (type === "DB" && !AppStorage.useFallback) {
      return _AppCache_GetCache_DB(id, model, online, event, encryption);
    } else {
      return _AppCache_GetCache_LS(id, model, online, event, encryption);
    }
  }
  function _AppCache_SetCache(id, model, type, data, jsonh, encryption) {
    if (type == "DB" && !AppStorage.useFallback) {
      return _AppCache_SetCache_DB(id, model, data, encryption);
    } else {
      return _AppCache_SetCache_LS(id, model, data, encryption);
    }
  }
  function _AppCache_GetCache_LS(id, model, online, event, encryption) {
    return new Promise(function(resolve, reject) {
      try {
        $.sap.require("jquery.sap.storage");
        const lStorage = $.sap.storage(jQuery.sap.storage.Type.local);
        let modelJSON = lStorage.get(id);
        if (online && !modelJSON)
          (0, eval)(online)();
        if (!modelJSON) {
          if (typeof (0, eval)(event) === "function")
            (0, eval)(event)();
          return resolve();
        }
        if (encryption) {
          if (modelJSON.indexOf("[") !== 0 && modelJSON.indexOf("{") !== 0) {
            const decrypted = CryptoJS.AES.decrypt(modelJSON, AppStorage.deviceID);
            if (decrypted) {
              modelJSON = decrypted.toString(CryptoJS.enc.Utf8);
            } else {
              modelJSON = [];
            }
          }
        } else {
          if (typeof modelJSON === "string") {
            if (modelJSON.indexOf("[") !== 0 && modelJSON.indexOf("{") !== 0)
              return resolve();
          }
        }
        let modelData;
        if (typeof modelJSON === "string") {
          try {
            modelData = JSON.parse(modelJSON);
          } catch (e) {
          }
        } else {
          modelData = modelJSON;
        }
        model.setData(modelData);
        if (typeof (0, eval)(event) === "function")
          (0, eval)(event)();
        resolve();
      } catch (e) {
        if (typeof (0, eval)(event) === "function")
          (0, eval)(event)();
        model.setData();
        console.log(e);
        resolve();
      }
    });
  }
  function _AppCache_SetCache_LS(id, model, data, encryption) {
    return new Promise(function(resolve, reject) {
      try {
        $.sap.require("jquery.sap.storage");
        const lStorage = $.sap.storage(jQuery.sap.storage.Type.local);
        let modelData;
        if (data) {
          modelData = JSON.stringify(data);
        } else {
          modelData = model.getJSON();
        }
        if (encryption) {
          const encrypted = CryptoJS.AES.encrypt(modelData, AppStorage.deviceID);
          modelData = encrypted.toString();
        }
        lStorage.remove(id);
        lStorage.put(id, modelData);
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  }
  var _AppCache_GetCache_DB = function(id, model, online, event, encryption) {
    (function() {
      let tries = 0;
      function check() {
        if (p9Models && p9Models.readyState === "done") {
          p9GetModel(id).then(function(value) {
            let modelData = value;
            if (encryption) {
              if (modelData.indexOf("[") !== 0 && modelData.indexOf("{") !== 0) {
                const decrypted = CryptoJS.AES.decrypt(modelData, AppStorage.deviceID);
                if (decrypted) {
                  modelData = decrypted.toString(CryptoJS.enc.Utf8);
                } else {
                  modelData = [];
                }
              }
            }
            if (typeof modelData === "string") {
              modelData = JSON.parse(modelData);
            }
            model.setData(modelData);
            if (typeof (0, eval)(event) === "function")
              (0, eval)(event)();
            if (online && !model.oData.length)
              (0, eval)(online)();
          });
        } else {
          tries++;
          if (tries < 100) {
            setTimeout(check, 50);
          } else {
            console.error(
              "IndexedDB could not open database: " + model + ", State: " + p9Models.readyState
            );
            sap.ui.core.BusyIndicator.hide();
          }
        }
      }
      check();
    })();
  };
  var _AppCache_SetCache_DB = function(id, model, data, encryption) {
    if (!data) {
      data = model.oData;
    }
    if (encryption) {
      data = JSON.stringify(data);
      const encrypted = CryptoJS.AES.encrypt(data, AppStorage.deviceID);
      data = encrypted.toString();
    }
    (function() {
      let tries = 0;
      function check() {
        if (p9Models && p9Models.readyState === "done") {
          p9SaveModel(id, data);
        } else {
          tries++;
          if (tries < 100) {
            setTimeout(check, 50);
          } else {
            console.error(
              "IndexedDB could not save database: " + model + ", State: " + p9Models.readyState
            );
            sap.ui.core.BusyIndicator.hide();
          }
        }
      }
      check();
    })();
  };
  AppStorage.Startup();
  var Base64;
  var define2;
  (function(global2) {
    "use strict";
    const _Base64 = global2.Base64;
    const version = "2.3.2";
    let buffer;
    if (typeof module !== "undefined" && module.exports) {
      try {
      } catch (err) {
      }
    }
    const b64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    const b64tab = function(bin) {
      const t = {};
      for (let i = 0, l = bin.length; i < l; i++)
        t[bin.charAt(i)] = i;
      return t;
    }(b64chars);
    const fromCharCode = String.fromCharCode;
    const cb_utob = function(c) {
      if (c.length < 2) {
        const cc = c.charCodeAt(0);
        return cc < 128 ? c : cc < 2048 ? fromCharCode(192 | cc >>> 6) + fromCharCode(128 | cc & 63) : fromCharCode(224 | cc >>> 12 & 15) + fromCharCode(128 | cc >>> 6 & 63) + fromCharCode(128 | cc & 63);
      } else {
        const cc = 65536 + (c.charCodeAt(0) - 55296) * 1024 + (c.charCodeAt(1) - 56320);
        return fromCharCode(240 | cc >>> 18 & 7) + fromCharCode(128 | cc >>> 12 & 63) + fromCharCode(128 | cc >>> 6 & 63) + fromCharCode(128 | cc & 63);
      }
    };
    const re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
    const utob = function(u) {
      return u.replace(re_utob, cb_utob);
    };
    const cb_encode = function(ccc) {
      const padlen = [0, 2, 1][ccc.length % 3], ord = ccc.charCodeAt(0) << 16 | (ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8 | (ccc.length > 2 ? ccc.charCodeAt(2) : 0), chars = [
        b64chars.charAt(ord >>> 18),
        b64chars.charAt(ord >>> 12 & 63),
        padlen >= 2 ? "=" : b64chars.charAt(ord >>> 6 & 63),
        padlen >= 1 ? "=" : b64chars.charAt(ord & 63)
      ];
      return chars.join("");
    };
    const btoa = global2.btoa ? function(b) {
      return global2.btoa(b);
    } : function(b) {
      return b.replace(/[\s\S]{1,3}/g, cb_encode);
    };
    const _encode = buffer ? buffer.from && buffer.from !== Uint8Array.from ? function(u) {
      return (u.constructor === buffer.constructor ? u : buffer.from(u)).toString(
        "base64"
      );
    } : function(u) {
      return (u.constructor === buffer.constructor ? u : new buffer(u)).toString(
        "base64"
      );
    } : function(u) {
      return btoa(utob(u));
    };
    const encode = function(u, urisafe) {
      return !urisafe ? _encode(String(u)) : _encode(String(u)).replace(/[+/]/g, function(m0) {
        return m0 == "+" ? "-" : "_";
      }).replace(/=/g, "");
    };
    const encodeURI = function(u) {
      return encode(u, true);
    };
    const re_btou = new RegExp(["[\xC0-\xDF][\x80-\xBF]", "[\xE0-\xEF][\x80-\xBF]{2}", "[\xF0-\xF7][\x80-\xBF]{3}"].join("|"), "g");
    const cb_btou = function(cccc) {
      switch (cccc.length) {
        case 4:
          const cp = (7 & cccc.charCodeAt(0)) << 18 | (63 & cccc.charCodeAt(1)) << 12 | (63 & cccc.charCodeAt(2)) << 6 | 63 & cccc.charCodeAt(3), offset = cp - 65536;
          return fromCharCode((offset >>> 10) + 55296) + fromCharCode((offset & 1023) + 56320);
        case 3:
          return fromCharCode(
            (15 & cccc.charCodeAt(0)) << 12 | (63 & cccc.charCodeAt(1)) << 6 | 63 & cccc.charCodeAt(2)
          );
        default:
          return fromCharCode((31 & cccc.charCodeAt(0)) << 6 | 63 & cccc.charCodeAt(1));
      }
    };
    const btou = function(b) {
      return b.replace(re_btou, cb_btou);
    };
    const cb_decode = function(cccc) {
      const len = cccc.length, padlen = len % 4, n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0) | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0) | (len > 2 ? b64tab[cccc.charAt(2)] << 6 : 0) | (len > 3 ? b64tab[cccc.charAt(3)] : 0), chars = [fromCharCode(n >>> 16), fromCharCode(n >>> 8 & 255), fromCharCode(n & 255)];
      chars.length -= [0, 0, 2, 1][padlen];
      return chars.join("");
    };
    const atob = global2.atob ? function(a) {
      return global2.atob(a);
    } : function(a) {
      return a.replace(/[\s\S]{1,4}/g, cb_decode);
    };
    const _decode = buffer ? buffer.from && buffer.from !== Uint8Array.from ? function(a) {
      return (a.constructor === buffer.constructor ? a : buffer.from(a, "base64")).toString();
    } : function(a) {
      return (a.constructor === buffer.constructor ? a : new buffer(a, "base64")).toString();
    } : function(a) {
      return btou(atob(a));
    };
    const decode = function(a) {
      return _decode(
        String(a).replace(/[-_]/g, function(m0) {
          return m0 == "-" ? "+" : "/";
        }).replace(/[^A-Za-z0-9+/]/g, "")
      );
    };
    const noConflict = function() {
      const Base642 = global2.Base64;
      global2.Base64 = _Base64;
      return Base642;
    };
    global2.Base64 = {
      VERSION: version,
      atob,
      btoa,
      fromBase64: decode,
      toBase64: encode,
      utob,
      encode,
      encodeURI,
      btou,
      decode,
      noConflict
    };
    if (typeof Object.defineProperty === "function") {
      const noEnum = function(v) {
        return {
          value: v,
          enumerable: false,
          writable: true,
          configurable: true
        };
      };
      global2.Base64.extendString = function() {
        Object.defineProperty(
          String.prototype,
          "fromBase64",
          noEnum(function() {
            return decode(this);
          })
        );
        Object.defineProperty(
          String.prototype,
          "toBase64",
          noEnum(function(urisafe) {
            return encode(this, urisafe);
          })
        );
        Object.defineProperty(
          String.prototype,
          "toBase64URI",
          noEnum(function() {
            return encode(this, true);
          })
        );
      };
    }
    if (global2["Meteor"]) {
      Base64 = global2.Base64;
    }
    if (typeof module !== "undefined" && module.exports) {
    } else if (typeof define2 === "function" && define2.amd) {
      define2([], function() {
        return global2.Base64;
      });
    }
  })(
    typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : void 0
  );
  var AppSync2 = {
    sqlSplit: 150,
    tableFields: {},
    dataQueue: [],
    processing: false,
    enableLog: false,
    initTable: function(tableName, tableFields) {
      const self2 = this;
      this.openDB();
      let sql = "CREATE TABLE IF NOT EXISTS " + tableName + " (";
      let sep = "";
      for (let i = 0; i < tableFields.length; i++) {
        if (i === 0) {
          sql += tableFields[i] + " VARCHAR PRIMARY KEY";
        } else {
          sql += sep + tableFields[i] + " VARCHAR";
        }
        sep = ",";
      }
      sql += ")";
      try {
        self2.db.transaction(function(transaction) {
          transaction.executeSql(sql, []);
        });
      } catch (e) {
        console.log("Error: Unable to create table " + e + ".");
      }
      AppSync2.tableFields[tableName] = tableFields;
      self2.db.transaction(function(tx) {
        tx.executeSql(
          'SELECT name, sql FROM sqlite_master WHERE type="table" AND name = ?',
          [tableName],
          function(tx2, results) {
            const colParts = results.rows.item(0).sql.replace(/^[^(]+\(([^)]+)\)/g, "$1").split(",");
            const colNames = [];
            for (const i in colParts) {
              if (typeof colParts[i] === "string")
                colNames.push(colParts[i].trim().split(" ")[0]);
            }
            $.each(AppSync2.tableFields[tableName], function(i, data) {
              if (colNames.indexOf(data) === -1) {
                const alterTable = "ALTER TABLE " + tableName + " ADD " + data + " VARCHAR;";
                try {
                  self2.db.transaction(function(transaction) {
                    transaction.executeSql(alterTable, []);
                    console.log("Table: " + tableName + ", added field: " + data);
                  });
                } catch (e) {
                  console.log("Error: Unable to alter table " + e + ".");
                }
              }
            });
          }
        );
      });
    },
    openDB: function() {
      const self2 = this;
      if (typeof self2.db === "undefined") {
        if (window.sqlitePlugin) {
          try {
            self2.db = window.sqlitePlugin.openDatabase({
              name: "p9Data",
              location: 2
            });
          } catch (e) {
            console.error("Error: Unable to open database " + e);
            return;
          }
        } else if (window.openDatabase) {
          try {
            self2.db = window.openDatabase("p9Data", "1.0", "p9Data", 60 * 1024 * 1024);
          } catch (e) {
            console.error("Error: Unable to open database " + e);
            return;
          }
        } else {
          console.error("Error: Your browser do not support WebSQL");
        }
      }
    },
    log: function(message) {
      if (AppSync2.enableLog)
        console.log(message);
    },
    error: function(message) {
      console.error(message);
    },
    updateDB: function(tableData, tableName, callBack) {
      this.dataQueue.push({
        name: tableName,
        data: tableData,
        callback: callBack
      });
      if (this.processing) {
        return;
      }
      this._seqUpdate();
    },
    _seqUpdate: function() {
      if (!this.dataQueue.length) {
        return;
      }
      this.processing = true;
      const data = this.dataQueue.shift();
      const tableName = data.name;
      const tableData = data.data;
      const callBack = data.callback;
      const tableFields = AppSync2.tableFields[tableName];
      const self2 = this;
      console.log("Starting an insert. In queue: " + this.dataQueue.length);
      self2.db.transaction(
        function(tx) {
          let sqlStart = "INSERT OR REPLACE INTO " + tableName + " (";
          let sep = "";
          let sql = "";
          let doLast = false;
          let currRec = 0;
          let fieldCount = 0;
          sqlStart += self2._arrayToString(tableFields, ",");
          sqlStart += ") SELECT ";
          sql = sqlStart;
          $.each(tableData, function(nr, data2) {
            if (fieldCount === tableFields.length) {
              sep = "";
              fieldCount = 0;
              doLast = true;
              currRec++;
              if (currRec === AppSync2.sqlSplit) {
                self2._executeSql(sql, null, tx);
                sql = sqlStart;
                currRec = 0;
                doLast = false;
              } else {
                sql += " UNION SELECT ";
              }
            }
            for (let i = 0; i < tableFields.length; i++) {
              sql += sep + '"' + data2[tableFields[i]] + '"';
              sep = ",";
              fieldCount++;
            }
          });
          if (doLast)
            self2._executeSql(sql, null, tx);
          console.log("Done with an insert. In queue: " + self2.dataQueue.length);
          if (self2.dataQueue.length) {
            self2._seqUpdate();
          } else {
            self2.processing = false;
          }
          if (callBack)
            callBack();
        },
        function(e) {
          console.error("Insert failed", e);
          self2.processing = false;
        }
      );
    },
    _executeSql: function(sql, params, optionalTransaction, optionalCallBack) {
      const self2 = this;
      self2.log("_executeSql: " + sql + " with param " + params);
      if (!optionalCallBack) {
        optionalCallBack = self2._defaultCallBack;
      }
      if (optionalTransaction) {
        self2._executeSqlBridge(
          optionalTransaction,
          sql,
          params,
          optionalCallBack,
          self2._errorHandler
        );
      } else {
        self2.db.transaction(function(tx) {
          self2._executeSqlBridge(tx, sql, params, optionalCallBack, self2._errorHandler);
        });
      }
    },
    _errorHandler: function(transaction, error) {
      AppSync2.error(
        "Error : " + error.message + " (Code " + error.code + ") Transaction.sql = " + transaction.sql
      );
    },
    _executeSqlBridge: function(tx, sql, params, dataHandler, errorHandler) {
      const self2 = this;
      if (typeof self2.db.dbPath !== "undefined") {
        const sqlAndParams = [sql].concat(params);
        const cb = function(res) {
          res.rows.item = function(i) {
            return this[i];
          };
          dataHandler(tx, res);
        };
        tx.executeSql(sqlAndParams, cb, errorHandler);
      } else {
        tx.executeSql(sql, params, dataHandler, errorHandler);
      }
    },
    _defaultCallBack: function(transaction, results) {
      return void 0;
    },
    _arrayToString: function(array, separator) {
      let result = "";
      for (let i = 0; i < array.length; i++) {
        result += array[i];
        if (i < array.length - 1) {
          result += separator;
        }
      }
      return result;
    }
  };

  // src/common/appstorage.ts
  var CryptoJS2 = __toESM(require_crypto_js());
  var AppStorage2 = class {
    constructor(editionType) {
      this.CryptoJS = CryptoJS2;
      console.log("AppStorage created");
      this.editionType = editionType;
    }
    static getInstance() {
      return new AppStorage2();
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
  var AppStorageOE = class extends AppStorage2 {
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

  // src/open-edition/index.ts
  window.AppStorage = AppStorageOE;
  window.ModelData = ModelData;
  Object.assign(window, { ...p9library_exports });
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9jb3JlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMveDY0LWNvcmUuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9saWItdHlwZWRhcnJheXMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9lbmMtdXRmMTYuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9lbmMtYmFzZTY0LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvZW5jLWJhc2U2NHVybC5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL21kNS5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL3NoYTEuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9zaGEyNTYuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9zaGEyMjQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9zaGE1MTIuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9zaGEzODQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9zaGEzLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvcmlwZW1kMTYwLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvaG1hYy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL3Bia2RmMi5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL2V2cGtkZi5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL2NpcGhlci1jb3JlLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvbW9kZS1jZmIuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9tb2RlLWN0ci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL21vZGUtY3RyLWdsYWRtYW4uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9tb2RlLW9mYi5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL21vZGUtZWNiLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvcGFkLWFuc2l4OTIzLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvcGFkLWlzbzEwMTI2LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvcGFkLWlzbzk3OTcxLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvcGFkLXplcm9wYWRkaW5nLmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvcGFkLW5vcGFkZGluZy5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL2Zvcm1hdC1oZXguanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9hZXMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy90cmlwbGVkZXMuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9yYzQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9yYWJiaXQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9yYWJiaXQtbGVnYWN5LmpzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvaW5kZXguanMiLCAiLi4vLi4vc3JjL29wZW4tZWRpdGlvbi9wOWxpYnJhcnkudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9tb2RlbGRhdGEudHMiLCAiLi4vLi4vc3JjL29wZW4tZWRpdGlvbi9tb2RlbGRhdGEudHMiLCAiLi4vLi4vc3JjL2NvbW1vbi9hcHBzdG9yYWdlLnRzIiwgIi4uLy4uL3NyYy9vcGVuLWVkaXRpb24vYXBwc3RvcmFnZS50cyIsICIuLi8uLi9zcmMvb3Blbi1lZGl0aW9uL2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeSgpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0cm9vdC5DcnlwdG9KUyA9IGZhY3RvcnkoKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XG5cblx0LypnbG9iYWxzIHdpbmRvdywgZ2xvYmFsLCByZXF1aXJlKi9cblxuXHQvKipcblx0ICogQ3J5cHRvSlMgY29yZSBjb21wb25lbnRzLlxuXHQgKi9cblx0dmFyIENyeXB0b0pTID0gQ3J5cHRvSlMgfHwgKGZ1bmN0aW9uIChNYXRoLCB1bmRlZmluZWQpIHtcblxuXHQgICAgdmFyIGNyeXB0bztcblxuXHQgICAgLy8gTmF0aXZlIGNyeXB0byBmcm9tIHdpbmRvdyAoQnJvd3Nlcilcblx0ICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuY3J5cHRvKSB7XG5cdCAgICAgICAgY3J5cHRvID0gd2luZG93LmNyeXB0bztcblx0ICAgIH1cblxuXHQgICAgLy8gTmF0aXZlIGNyeXB0byBpbiB3ZWIgd29ya2VyIChCcm93c2VyKVxuXHQgICAgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNyeXB0bykge1xuXHQgICAgICAgIGNyeXB0byA9IHNlbGYuY3J5cHRvO1xuXHQgICAgfVxuXG5cdCAgICAvLyBOYXRpdmUgY3J5cHRvIGZyb20gd29ya2VyXG5cdCAgICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbFRoaXMuY3J5cHRvKSB7XG5cdCAgICAgICAgY3J5cHRvID0gZ2xvYmFsVGhpcy5jcnlwdG87XG5cdCAgICB9XG5cblx0ICAgIC8vIE5hdGl2ZSAoZXhwZXJpbWVudGFsIElFIDExKSBjcnlwdG8gZnJvbSB3aW5kb3cgKEJyb3dzZXIpXG5cdCAgICBpZiAoIWNyeXB0byAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cubXNDcnlwdG8pIHtcblx0ICAgICAgICBjcnlwdG8gPSB3aW5kb3cubXNDcnlwdG87XG5cdCAgICB9XG5cblx0ICAgIC8vIE5hdGl2ZSBjcnlwdG8gZnJvbSBnbG9iYWwgKE5vZGVKUylcblx0ICAgIGlmICghY3J5cHRvICYmIHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbC5jcnlwdG8pIHtcblx0ICAgICAgICBjcnlwdG8gPSBnbG9iYWwuY3J5cHRvO1xuXHQgICAgfVxuXG5cdCAgICAvLyBOYXRpdmUgY3J5cHRvIGltcG9ydCB2aWEgcmVxdWlyZSAoTm9kZUpTKVxuXHQgICAgaWYgKCFjcnlwdG8gJiYgdHlwZW9mIHJlcXVpcmUgPT09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICBjcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKTtcblx0ICAgICAgICB9IGNhdGNoIChlcnIpIHt9XG5cdCAgICB9XG5cblx0ICAgIC8qXG5cdCAgICAgKiBDcnlwdG9ncmFwaGljYWxseSBzZWN1cmUgcHNldWRvcmFuZG9tIG51bWJlciBnZW5lcmF0b3Jcblx0ICAgICAqXG5cdCAgICAgKiBBcyBNYXRoLnJhbmRvbSgpIGlzIGNyeXB0b2dyYXBoaWNhbGx5IG5vdCBzYWZlIHRvIHVzZVxuXHQgICAgICovXG5cdCAgICB2YXIgY3J5cHRvU2VjdXJlUmFuZG9tSW50ID0gZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGlmIChjcnlwdG8pIHtcblx0ICAgICAgICAgICAgLy8gVXNlIGdldFJhbmRvbVZhbHVlcyBtZXRob2QgKEJyb3dzZXIpXG5cdCAgICAgICAgICAgIGlmICh0eXBlb2YgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDMyQXJyYXkoMSkpWzBdO1xuXHQgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7fVxuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gVXNlIHJhbmRvbUJ5dGVzIG1ldGhvZCAoTm9kZUpTKVxuXHQgICAgICAgICAgICBpZiAodHlwZW9mIGNyeXB0by5yYW5kb21CeXRlcyA9PT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3J5cHRvLnJhbmRvbUJ5dGVzKDQpLnJlYWRJbnQzMkxFKCk7XG5cdCAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHt9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cblx0ICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05hdGl2ZSBjcnlwdG8gbW9kdWxlIGNvdWxkIG5vdCBiZSB1c2VkIHRvIGdldCBzZWN1cmUgcmFuZG9tIG51bWJlci4nKTtcblx0ICAgIH07XG5cblx0ICAgIC8qXG5cdCAgICAgKiBMb2NhbCBwb2x5ZmlsbCBvZiBPYmplY3QuY3JlYXRlXG5cblx0ICAgICAqL1xuXHQgICAgdmFyIGNyZWF0ZSA9IE9iamVjdC5jcmVhdGUgfHwgKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBmdW5jdGlvbiBGKCkge31cblxuXHQgICAgICAgIHJldHVybiBmdW5jdGlvbiAob2JqKSB7XG5cdCAgICAgICAgICAgIHZhciBzdWJ0eXBlO1xuXG5cdCAgICAgICAgICAgIEYucHJvdG90eXBlID0gb2JqO1xuXG5cdCAgICAgICAgICAgIHN1YnR5cGUgPSBuZXcgRigpO1xuXG5cdCAgICAgICAgICAgIEYucHJvdG90eXBlID0gbnVsbDtcblxuXHQgICAgICAgICAgICByZXR1cm4gc3VidHlwZTtcblx0ICAgICAgICB9O1xuXHQgICAgfSgpKTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBDcnlwdG9KUyBuYW1lc3BhY2UuXG5cdCAgICAgKi9cblx0ICAgIHZhciBDID0ge307XG5cblx0ICAgIC8qKlxuXHQgICAgICogTGlicmFyeSBuYW1lc3BhY2UuXG5cdCAgICAgKi9cblx0ICAgIHZhciBDX2xpYiA9IEMubGliID0ge307XG5cblx0ICAgIC8qKlxuXHQgICAgICogQmFzZSBvYmplY3QgZm9yIHByb3RvdHlwYWwgaW5oZXJpdGFuY2UuXG5cdCAgICAgKi9cblx0ICAgIHZhciBCYXNlID0gQ19saWIuQmFzZSA9IChmdW5jdGlvbiAoKSB7XG5cblxuXHQgICAgICAgIHJldHVybiB7XG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBDcmVhdGVzIGEgbmV3IG9iamVjdCB0aGF0IGluaGVyaXRzIGZyb20gdGhpcyBvYmplY3QuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvdmVycmlkZXMgUHJvcGVydGllcyB0byBjb3B5IGludG8gdGhlIG5ldyBvYmplY3QuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gVGhlIG5ldyBvYmplY3QuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogICAgIHZhciBNeVR5cGUgPSBDcnlwdG9KUy5saWIuQmFzZS5leHRlbmQoe1xuXHQgICAgICAgICAgICAgKiAgICAgICAgIGZpZWxkOiAndmFsdWUnLFxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgICAgIG1ldGhvZDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgKiAgICAgICAgIH1cblx0ICAgICAgICAgICAgICogICAgIH0pO1xuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgZXh0ZW5kOiBmdW5jdGlvbiAob3ZlcnJpZGVzKSB7XG5cdCAgICAgICAgICAgICAgICAvLyBTcGF3blxuXHQgICAgICAgICAgICAgICAgdmFyIHN1YnR5cGUgPSBjcmVhdGUodGhpcyk7XG5cblx0ICAgICAgICAgICAgICAgIC8vIEF1Z21lbnRcblx0ICAgICAgICAgICAgICAgIGlmIChvdmVycmlkZXMpIHtcblx0ICAgICAgICAgICAgICAgICAgICBzdWJ0eXBlLm1peEluKG92ZXJyaWRlcyk7XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBkZWZhdWx0IGluaXRpYWxpemVyXG5cdCAgICAgICAgICAgICAgICBpZiAoIXN1YnR5cGUuaGFzT3duUHJvcGVydHkoJ2luaXQnKSB8fCB0aGlzLmluaXQgPT09IHN1YnR5cGUuaW5pdCkge1xuXHQgICAgICAgICAgICAgICAgICAgIHN1YnR5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgc3VidHlwZS4kc3VwZXIuaW5pdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHQgICAgICAgICAgICAgICAgICAgIH07XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIC8vIEluaXRpYWxpemVyJ3MgcHJvdG90eXBlIGlzIHRoZSBzdWJ0eXBlIG9iamVjdFxuXHQgICAgICAgICAgICAgICAgc3VidHlwZS5pbml0LnByb3RvdHlwZSA9IHN1YnR5cGU7XG5cblx0ICAgICAgICAgICAgICAgIC8vIFJlZmVyZW5jZSBzdXBlcnR5cGVcblx0ICAgICAgICAgICAgICAgIHN1YnR5cGUuJHN1cGVyID0gdGhpcztcblxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHN1YnR5cGU7XG5cdCAgICAgICAgICAgIH0sXG5cblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIEV4dGVuZHMgdGhpcyBvYmplY3QgYW5kIHJ1bnMgdGhlIGluaXQgbWV0aG9kLlxuXHQgICAgICAgICAgICAgKiBBcmd1bWVudHMgdG8gY3JlYXRlKCkgd2lsbCBiZSBwYXNzZWQgdG8gaW5pdCgpLlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBuZXcgb2JqZWN0LlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICB2YXIgaW5zdGFuY2UgPSBNeVR5cGUuY3JlYXRlKCk7XG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICBjcmVhdGU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXMuZXh0ZW5kKCk7XG5cdCAgICAgICAgICAgICAgICBpbnN0YW5jZS5pbml0LmFwcGx5KGluc3RhbmNlLCBhcmd1bWVudHMpO1xuXG5cdCAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG5cdCAgICAgICAgICAgIH0sXG5cblx0ICAgICAgICAgICAgLyoqXG5cdCAgICAgICAgICAgICAqIEluaXRpYWxpemVzIGEgbmV3bHkgY3JlYXRlZCBvYmplY3QuXG5cdCAgICAgICAgICAgICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGFkZCBzb21lIGxvZ2ljIHdoZW4geW91ciBvYmplY3RzIGFyZSBjcmVhdGVkLlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgdmFyIE15VHlwZSA9IENyeXB0b0pTLmxpYi5CYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgICAgICAqICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAgKiAgICAgICAgICAgICAvLyAuLi5cblx0ICAgICAgICAgICAgICogICAgICAgICB9XG5cdCAgICAgICAgICAgICAqICAgICB9KTtcblx0ICAgICAgICAgICAgICovXG5cdCAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgfSxcblxuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogQ29waWVzIHByb3BlcnRpZXMgaW50byB0aGlzIG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IHByb3BlcnRpZXMgVGhlIHByb3BlcnRpZXMgdG8gbWl4IGluLlxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAgICAgKlxuXHQgICAgICAgICAgICAgKiAgICAgTXlUeXBlLm1peEluKHtcblx0ICAgICAgICAgICAgICogICAgICAgICBmaWVsZDogJ3ZhbHVlJ1xuXHQgICAgICAgICAgICAgKiAgICAgfSk7XG5cdCAgICAgICAgICAgICAqL1xuXHQgICAgICAgICAgICBtaXhJbjogZnVuY3Rpb24gKHByb3BlcnRpZXMpIHtcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIHByb3BlcnR5TmFtZSBpbiBwcm9wZXJ0aWVzKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKHByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSkge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW3Byb3BlcnR5TmFtZV0gPSBwcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAvLyBJRSB3b24ndCBjb3B5IHRvU3RyaW5nIHVzaW5nIHRoZSBsb29wIGFib3ZlXG5cdCAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eSgndG9TdHJpbmcnKSkge1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXMudG9TdHJpbmcgPSBwcm9wZXJ0aWVzLnRvU3RyaW5nO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9LFxuXG5cdCAgICAgICAgICAgIC8qKlxuXHQgICAgICAgICAgICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGlzIG9iamVjdC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgY2xvbmUuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICB2YXIgY2xvbmUgPSBpbnN0YW5jZS5jbG9uZSgpO1xuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmluaXQucHJvdG90eXBlLmV4dGVuZCh0aGlzKTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH07XG5cdCAgICB9KCkpO1xuXG5cdCAgICAvKipcblx0ICAgICAqIEFuIGFycmF5IG9mIDMyLWJpdCB3b3Jkcy5cblx0ICAgICAqXG5cdCAgICAgKiBAcHJvcGVydHkge0FycmF5fSB3b3JkcyBUaGUgYXJyYXkgb2YgMzItYml0IHdvcmRzLlxuXHQgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IHNpZ0J5dGVzIFRoZSBudW1iZXIgb2Ygc2lnbmlmaWNhbnQgYnl0ZXMgaW4gdGhpcyB3b3JkIGFycmF5LlxuXHQgICAgICovXG5cdCAgICB2YXIgV29yZEFycmF5ID0gQ19saWIuV29yZEFycmF5ID0gQmFzZS5leHRlbmQoe1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEluaXRpYWxpemVzIGEgbmV3bHkgY3JlYXRlZCB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtBcnJheX0gd29yZHMgKE9wdGlvbmFsKSBBbiBhcnJheSBvZiAzMi1iaXQgd29yZHMuXG5cdCAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHNpZ0J5dGVzIChPcHRpb25hbCkgVGhlIG51bWJlciBvZiBzaWduaWZpY2FudCBieXRlcyBpbiB0aGUgd29yZHMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LmNyZWF0ZSgpO1xuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMubGliLldvcmRBcnJheS5jcmVhdGUoWzB4MDAwMTAyMDMsIDB4MDQwNTA2MDddKTtcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmxpYi5Xb3JkQXJyYXkuY3JlYXRlKFsweDAwMDEwMjAzLCAweDA0MDUwNjA3XSwgNik7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgaW5pdDogZnVuY3Rpb24gKHdvcmRzLCBzaWdCeXRlcykge1xuXHQgICAgICAgICAgICB3b3JkcyA9IHRoaXMud29yZHMgPSB3b3JkcyB8fCBbXTtcblxuXHQgICAgICAgICAgICBpZiAoc2lnQnl0ZXMgIT0gdW5kZWZpbmVkKSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLnNpZ0J5dGVzID0gc2lnQnl0ZXM7XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLnNpZ0J5dGVzID0gd29yZHMubGVuZ3RoICogNDtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyB0aGlzIHdvcmQgYXJyYXkgdG8gYSBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0VuY29kZXJ9IGVuY29kZXIgKE9wdGlvbmFsKSBUaGUgZW5jb2Rpbmcgc3RyYXRlZ3kgdG8gdXNlLiBEZWZhdWx0OiBDcnlwdG9KUy5lbmMuSGV4XG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBzdHJpbmdpZmllZCB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgc3RyaW5nID0gd29yZEFycmF5ICsgJyc7XG5cdCAgICAgICAgICogICAgIHZhciBzdHJpbmcgPSB3b3JkQXJyYXkudG9TdHJpbmcoKTtcblx0ICAgICAgICAgKiAgICAgdmFyIHN0cmluZyA9IHdvcmRBcnJheS50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uIChlbmNvZGVyKSB7XG5cdCAgICAgICAgICAgIHJldHVybiAoZW5jb2RlciB8fCBIZXgpLnN0cmluZ2lmeSh0aGlzKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29uY2F0ZW5hdGVzIGEgd29yZCBhcnJheSB0byB0aGlzIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gd29yZEFycmF5IFRoZSB3b3JkIGFycmF5IHRvIGFwcGVuZC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhpcyB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB3b3JkQXJyYXkxLmNvbmNhdCh3b3JkQXJyYXkyKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjb25jYXQ6IGZ1bmN0aW9uICh3b3JkQXJyYXkpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciB0aGlzV29yZHMgPSB0aGlzLndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgdGhhdFdvcmRzID0gd29yZEFycmF5LndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgdGhpc1NpZ0J5dGVzID0gdGhpcy5zaWdCeXRlcztcblx0ICAgICAgICAgICAgdmFyIHRoYXRTaWdCeXRlcyA9IHdvcmRBcnJheS5zaWdCeXRlcztcblxuXHQgICAgICAgICAgICAvLyBDbGFtcCBleGNlc3MgYml0c1xuXHQgICAgICAgICAgICB0aGlzLmNsYW1wKCk7XG5cblx0ICAgICAgICAgICAgLy8gQ29uY2F0XG5cdCAgICAgICAgICAgIGlmICh0aGlzU2lnQnl0ZXMgJSA0KSB7XG5cdCAgICAgICAgICAgICAgICAvLyBDb3B5IG9uZSBieXRlIGF0IGEgdGltZVxuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGF0U2lnQnl0ZXM7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciB0aGF0Qnl0ZSA9ICh0aGF0V29yZHNbaSA+Pj4gMl0gPj4+ICgyNCAtIChpICUgNCkgKiA4KSkgJiAweGZmO1xuXHQgICAgICAgICAgICAgICAgICAgIHRoaXNXb3Jkc1sodGhpc1NpZ0J5dGVzICsgaSkgPj4+IDJdIHw9IHRoYXRCeXRlIDw8ICgyNCAtICgodGhpc1NpZ0J5dGVzICsgaSkgJSA0KSAqIDgpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgLy8gQ29weSBvbmUgd29yZCBhdCBhIHRpbWVcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhhdFNpZ0J5dGVzOyBqICs9IDQpIHtcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzV29yZHNbKHRoaXNTaWdCeXRlcyArIGopID4+PiAyXSA9IHRoYXRXb3Jkc1tqID4+PiAyXTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB0aGlzLnNpZ0J5dGVzICs9IHRoYXRTaWdCeXRlcztcblxuXHQgICAgICAgICAgICAvLyBDaGFpbmFibGVcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFJlbW92ZXMgaW5zaWduaWZpY2FudCBiaXRzLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB3b3JkQXJyYXkuY2xhbXAoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjbGFtcDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gdGhpcy53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHNpZ0J5dGVzID0gdGhpcy5zaWdCeXRlcztcblxuXHQgICAgICAgICAgICAvLyBDbGFtcFxuXHQgICAgICAgICAgICB3b3Jkc1tzaWdCeXRlcyA+Pj4gMl0gJj0gMHhmZmZmZmZmZiA8PCAoMzIgLSAoc2lnQnl0ZXMgJSA0KSAqIDgpO1xuXHQgICAgICAgICAgICB3b3Jkcy5sZW5ndGggPSBNYXRoLmNlaWwoc2lnQnl0ZXMgLyA0KTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBhIGNvcHkgb2YgdGhpcyB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgY2xvbmUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBjbG9uZSA9IHdvcmRBcnJheS5jbG9uZSgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHZhciBjbG9uZSA9IEJhc2UuY2xvbmUuY2FsbCh0aGlzKTtcblx0ICAgICAgICAgICAgY2xvbmUud29yZHMgPSB0aGlzLndvcmRzLnNsaWNlKDApO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBjbG9uZTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBhIHdvcmQgYXJyYXkgZmlsbGVkIHdpdGggcmFuZG9tIGJ5dGVzLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IG5CeXRlcyBUaGUgbnVtYmVyIG9mIHJhbmRvbSBieXRlcyB0byBnZW5lcmF0ZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHJhbmRvbSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMubGliLldvcmRBcnJheS5yYW5kb20oMTYpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHJhbmRvbTogZnVuY3Rpb24gKG5CeXRlcykge1xuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSBbXTtcblxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5CeXRlczsgaSArPSA0KSB7XG5cdCAgICAgICAgICAgICAgICB3b3Jkcy5wdXNoKGNyeXB0b1NlY3VyZVJhbmRvbUludCgpKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBuZXcgV29yZEFycmF5LmluaXQod29yZHMsIG5CeXRlcyk7XG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogRW5jb2RlciBuYW1lc3BhY2UuXG5cdCAgICAgKi9cblx0ICAgIHZhciBDX2VuYyA9IEMuZW5jID0ge307XG5cblx0ICAgIC8qKlxuXHQgICAgICogSGV4IGVuY29kaW5nIHN0cmF0ZWd5LlxuXHQgICAgICovXG5cdCAgICB2YXIgSGV4ID0gQ19lbmMuSGV4ID0ge1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgd29yZCBhcnJheSB0byBhIGhleCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gd29yZEFycmF5IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgaGV4IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGhleFN0cmluZyA9IENyeXB0b0pTLmVuYy5IZXguc3RyaW5naWZ5KHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgc3RyaW5naWZ5OiBmdW5jdGlvbiAod29yZEFycmF5KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSB3b3JkQXJyYXkud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBzaWdCeXRlcyA9IHdvcmRBcnJheS5zaWdCeXRlcztcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XG5cdCAgICAgICAgICAgIHZhciBoZXhDaGFycyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpZ0J5dGVzOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIHZhciBiaXRlID0gKHdvcmRzW2kgPj4+IDJdID4+PiAoMjQgLSAoaSAlIDQpICogOCkpICYgMHhmZjtcblx0ICAgICAgICAgICAgICAgIGhleENoYXJzLnB1c2goKGJpdGUgPj4+IDQpLnRvU3RyaW5nKDE2KSk7XG5cdCAgICAgICAgICAgICAgICBoZXhDaGFycy5wdXNoKChiaXRlICYgMHgwZikudG9TdHJpbmcoMTYpKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBoZXhDaGFycy5qb2luKCcnKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSBoZXggc3RyaW5nIHRvIGEgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBoZXhTdHIgVGhlIGhleCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMuZW5jLkhleC5wYXJzZShoZXhTdHJpbmcpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHBhcnNlOiBmdW5jdGlvbiAoaGV4U3RyKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgICAgIHZhciBoZXhTdHJMZW5ndGggPSBoZXhTdHIubGVuZ3RoO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaGV4U3RyTGVuZ3RoOyBpICs9IDIpIHtcblx0ICAgICAgICAgICAgICAgIHdvcmRzW2kgPj4+IDNdIHw9IHBhcnNlSW50KGhleFN0ci5zdWJzdHIoaSwgMiksIDE2KSA8PCAoMjQgLSAoaSAlIDgpICogNCk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gbmV3IFdvcmRBcnJheS5pbml0KHdvcmRzLCBoZXhTdHJMZW5ndGggLyAyKTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIExhdGluMSBlbmNvZGluZyBzdHJhdGVneS5cblx0ICAgICAqL1xuXHQgICAgdmFyIExhdGluMSA9IENfZW5jLkxhdGluMSA9IHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIHdvcmQgYXJyYXkgdG8gYSBMYXRpbjEgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl9IHdvcmRBcnJheSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIExhdGluMSBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBsYXRpbjFTdHJpbmcgPSBDcnlwdG9KUy5lbmMuTGF0aW4xLnN0cmluZ2lmeSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gKHdvcmRBcnJheSkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gd29yZEFycmF5LndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgc2lnQnl0ZXMgPSB3b3JkQXJyYXkuc2lnQnl0ZXM7XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydFxuXHQgICAgICAgICAgICB2YXIgbGF0aW4xQ2hhcnMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaWdCeXRlczsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgYml0ZSA9ICh3b3Jkc1tpID4+PiAyXSA+Pj4gKDI0IC0gKGkgJSA0KSAqIDgpKSAmIDB4ZmY7XG5cdCAgICAgICAgICAgICAgICBsYXRpbjFDaGFycy5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoYml0ZSkpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGxhdGluMUNoYXJzLmpvaW4oJycpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIExhdGluMSBzdHJpbmcgdG8gYSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGxhdGluMVN0ciBUaGUgTGF0aW4xIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5lbmMuTGF0aW4xLnBhcnNlKGxhdGluMVN0cmluZyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcGFyc2U6IGZ1bmN0aW9uIChsYXRpbjFTdHIpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgdmFyIGxhdGluMVN0ckxlbmd0aCA9IGxhdGluMVN0ci5sZW5ndGg7XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydFxuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXRpbjFTdHJMZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgd29yZHNbaSA+Pj4gMl0gfD0gKGxhdGluMVN0ci5jaGFyQ29kZUF0KGkpICYgMHhmZikgPDwgKDI0IC0gKGkgJSA0KSAqIDgpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBXb3JkQXJyYXkuaW5pdCh3b3JkcywgbGF0aW4xU3RyTGVuZ3RoKTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIFVURi04IGVuY29kaW5nIHN0cmF0ZWd5LlxuXHQgICAgICovXG5cdCAgICB2YXIgVXRmOCA9IENfZW5jLlV0ZjggPSB7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSB3b3JkIGFycmF5IHRvIGEgVVRGLTggc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl9IHdvcmRBcnJheSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIFVURi04IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHV0ZjhTdHJpbmcgPSBDcnlwdG9KUy5lbmMuVXRmOC5zdHJpbmdpZnkod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uICh3b3JkQXJyYXkpIHtcblx0ICAgICAgICAgICAgdHJ5IHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoZXNjYXBlKExhdGluMS5zdHJpbmdpZnkod29yZEFycmF5KSkpO1xuXHQgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG5cdCAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hbGZvcm1lZCBVVEYtOCBkYXRhJyk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSBVVEYtOCBzdHJpbmcgdG8gYSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHV0ZjhTdHIgVGhlIFVURi04IHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5lbmMuVXRmOC5wYXJzZSh1dGY4U3RyaW5nKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBwYXJzZTogZnVuY3Rpb24gKHV0ZjhTdHIpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIExhdGluMS5wYXJzZSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQodXRmOFN0cikpKTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIEFic3RyYWN0IGJ1ZmZlcmVkIGJsb2NrIGFsZ29yaXRobSB0ZW1wbGF0ZS5cblx0ICAgICAqXG5cdCAgICAgKiBUaGUgcHJvcGVydHkgYmxvY2tTaXplIG11c3QgYmUgaW1wbGVtZW50ZWQgaW4gYSBjb25jcmV0ZSBzdWJ0eXBlLlxuXHQgICAgICpcblx0ICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBfbWluQnVmZmVyU2l6ZSBUaGUgbnVtYmVyIG9mIGJsb2NrcyB0aGF0IHNob3VsZCBiZSBrZXB0IHVucHJvY2Vzc2VkIGluIHRoZSBidWZmZXIuIERlZmF1bHQ6IDBcblx0ICAgICAqL1xuXHQgICAgdmFyIEJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0gPSBDX2xpYi5CdWZmZXJlZEJsb2NrQWxnb3JpdGhtID0gQmFzZS5leHRlbmQoe1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFJlc2V0cyB0aGlzIGJsb2NrIGFsZ29yaXRobSdzIGRhdGEgYnVmZmVyIHRvIGl0cyBpbml0aWFsIHN0YXRlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICBidWZmZXJlZEJsb2NrQWxnb3JpdGhtLnJlc2V0KCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gSW5pdGlhbCB2YWx1ZXNcblx0ICAgICAgICAgICAgdGhpcy5fZGF0YSA9IG5ldyBXb3JkQXJyYXkuaW5pdCgpO1xuXHQgICAgICAgICAgICB0aGlzLl9uRGF0YUJ5dGVzID0gMDtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQWRkcyBuZXcgZGF0YSB0byB0aGlzIGJsb2NrIGFsZ29yaXRobSdzIGJ1ZmZlci5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBhcHBlbmQuIFN0cmluZ3MgYXJlIGNvbnZlcnRlZCB0byBhIFdvcmRBcnJheSB1c2luZyBVVEYtOC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5fYXBwZW5kKCdkYXRhJyk7XG5cdCAgICAgICAgICogICAgIGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uX2FwcGVuZCh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIF9hcHBlbmQ6IGZ1bmN0aW9uIChkYXRhKSB7XG5cdCAgICAgICAgICAgIC8vIENvbnZlcnQgc3RyaW5nIHRvIFdvcmRBcnJheSwgZWxzZSBhc3N1bWUgV29yZEFycmF5IGFscmVhZHlcblx0ICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09ICdzdHJpbmcnKSB7XG5cdCAgICAgICAgICAgICAgICBkYXRhID0gVXRmOC5wYXJzZShkYXRhKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIEFwcGVuZFxuXHQgICAgICAgICAgICB0aGlzLl9kYXRhLmNvbmNhdChkYXRhKTtcblx0ICAgICAgICAgICAgdGhpcy5fbkRhdGFCeXRlcyArPSBkYXRhLnNpZ0J5dGVzO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBQcm9jZXNzZXMgYXZhaWxhYmxlIGRhdGEgYmxvY2tzLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogVGhpcyBtZXRob2QgaW52b2tlcyBfZG9Qcm9jZXNzQmxvY2sob2Zmc2V0KSwgd2hpY2ggbXVzdCBiZSBpbXBsZW1lbnRlZCBieSBhIGNvbmNyZXRlIHN1YnR5cGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGRvRmx1c2ggV2hldGhlciBhbGwgYmxvY2tzIGFuZCBwYXJ0aWFsIGJsb2NrcyBzaG91bGQgYmUgcHJvY2Vzc2VkLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgcHJvY2Vzc2VkIGRhdGEuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBwcm9jZXNzZWREYXRhID0gYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5fcHJvY2VzcygpO1xuXHQgICAgICAgICAqICAgICB2YXIgcHJvY2Vzc2VkRGF0YSA9IGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uX3Byb2Nlc3MoISEnZmx1c2gnKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBfcHJvY2VzczogZnVuY3Rpb24gKGRvRmx1c2gpIHtcblx0ICAgICAgICAgICAgdmFyIHByb2Nlc3NlZFdvcmRzO1xuXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuX2RhdGE7XG5cdCAgICAgICAgICAgIHZhciBkYXRhV29yZHMgPSBkYXRhLndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgZGF0YVNpZ0J5dGVzID0gZGF0YS5zaWdCeXRlcztcblx0ICAgICAgICAgICAgdmFyIGJsb2NrU2l6ZSA9IHRoaXMuYmxvY2tTaXplO1xuXHQgICAgICAgICAgICB2YXIgYmxvY2tTaXplQnl0ZXMgPSBibG9ja1NpemUgKiA0O1xuXG5cdCAgICAgICAgICAgIC8vIENvdW50IGJsb2NrcyByZWFkeVxuXHQgICAgICAgICAgICB2YXIgbkJsb2Nrc1JlYWR5ID0gZGF0YVNpZ0J5dGVzIC8gYmxvY2tTaXplQnl0ZXM7XG5cdCAgICAgICAgICAgIGlmIChkb0ZsdXNoKSB7XG5cdCAgICAgICAgICAgICAgICAvLyBSb3VuZCB1cCB0byBpbmNsdWRlIHBhcnRpYWwgYmxvY2tzXG5cdCAgICAgICAgICAgICAgICBuQmxvY2tzUmVhZHkgPSBNYXRoLmNlaWwobkJsb2Nrc1JlYWR5KTtcblx0ICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIC8vIFJvdW5kIGRvd24gdG8gaW5jbHVkZSBvbmx5IGZ1bGwgYmxvY2tzLFxuXHQgICAgICAgICAgICAgICAgLy8gbGVzcyB0aGUgbnVtYmVyIG9mIGJsb2NrcyB0aGF0IG11c3QgcmVtYWluIGluIHRoZSBidWZmZXJcblx0ICAgICAgICAgICAgICAgIG5CbG9ja3NSZWFkeSA9IE1hdGgubWF4KChuQmxvY2tzUmVhZHkgfCAwKSAtIHRoaXMuX21pbkJ1ZmZlclNpemUsIDApO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gQ291bnQgd29yZHMgcmVhZHlcblx0ICAgICAgICAgICAgdmFyIG5Xb3Jkc1JlYWR5ID0gbkJsb2Nrc1JlYWR5ICogYmxvY2tTaXplO1xuXG5cdCAgICAgICAgICAgIC8vIENvdW50IGJ5dGVzIHJlYWR5XG5cdCAgICAgICAgICAgIHZhciBuQnl0ZXNSZWFkeSA9IE1hdGgubWluKG5Xb3Jkc1JlYWR5ICogNCwgZGF0YVNpZ0J5dGVzKTtcblxuXHQgICAgICAgICAgICAvLyBQcm9jZXNzIGJsb2Nrc1xuXHQgICAgICAgICAgICBpZiAobldvcmRzUmVhZHkpIHtcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIG9mZnNldCA9IDA7IG9mZnNldCA8IG5Xb3Jkc1JlYWR5OyBvZmZzZXQgKz0gYmxvY2tTaXplKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgLy8gUGVyZm9ybSBjb25jcmV0ZS1hbGdvcml0aG0gbG9naWNcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLl9kb1Byb2Nlc3NCbG9jayhkYXRhV29yZHMsIG9mZnNldCk7XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBwcm9jZXNzZWQgd29yZHNcblx0ICAgICAgICAgICAgICAgIHByb2Nlc3NlZFdvcmRzID0gZGF0YVdvcmRzLnNwbGljZSgwLCBuV29yZHNSZWFkeSk7XG5cdCAgICAgICAgICAgICAgICBkYXRhLnNpZ0J5dGVzIC09IG5CeXRlc1JlYWR5O1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gUmV0dXJuIHByb2Nlc3NlZCB3b3Jkc1xuXHQgICAgICAgICAgICByZXR1cm4gbmV3IFdvcmRBcnJheS5pbml0KHByb2Nlc3NlZFdvcmRzLCBuQnl0ZXNSZWFkeSk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoaXMgb2JqZWN0LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgY2xvbmUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBjbG9uZSA9IGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uY2xvbmUoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjbG9uZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB2YXIgY2xvbmUgPSBCYXNlLmNsb25lLmNhbGwodGhpcyk7XG5cdCAgICAgICAgICAgIGNsb25lLl9kYXRhID0gdGhpcy5fZGF0YS5jbG9uZSgpO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBjbG9uZTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgX21pbkJ1ZmZlclNpemU6IDBcblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIEFic3RyYWN0IGhhc2hlciB0ZW1wbGF0ZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcHJvcGVydHkge251bWJlcn0gYmxvY2tTaXplIFRoZSBudW1iZXIgb2YgMzItYml0IHdvcmRzIHRoaXMgaGFzaGVyIG9wZXJhdGVzIG9uLiBEZWZhdWx0OiAxNiAoNTEyIGJpdHMpXG5cdCAgICAgKi9cblx0ICAgIHZhciBIYXNoZXIgPSBDX2xpYi5IYXNoZXIgPSBCdWZmZXJlZEJsb2NrQWxnb3JpdGhtLmV4dGVuZCh7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29uZmlndXJhdGlvbiBvcHRpb25zLlxuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNmZzogQmFzZS5leHRlbmQoKSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEluaXRpYWxpemVzIGEgbmV3bHkgY3JlYXRlZCBoYXNoZXIuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2ZnIChPcHRpb25hbCkgVGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyB0byB1c2UgZm9yIHRoaXMgaGFzaCBjb21wdXRhdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGhhc2hlciA9IENyeXB0b0pTLmFsZ28uU0hBMjU2LmNyZWF0ZSgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGluaXQ6IGZ1bmN0aW9uIChjZmcpIHtcblx0ICAgICAgICAgICAgLy8gQXBwbHkgY29uZmlnIGRlZmF1bHRzXG5cdCAgICAgICAgICAgIHRoaXMuY2ZnID0gdGhpcy5jZmcuZXh0ZW5kKGNmZyk7XG5cblx0ICAgICAgICAgICAgLy8gU2V0IGluaXRpYWwgdmFsdWVzXG5cdCAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUmVzZXRzIHRoaXMgaGFzaGVyIHRvIGl0cyBpbml0aWFsIHN0YXRlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICBoYXNoZXIucmVzZXQoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICByZXNldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBSZXNldCBkYXRhIGJ1ZmZlclxuXHQgICAgICAgICAgICBCdWZmZXJlZEJsb2NrQWxnb3JpdGhtLnJlc2V0LmNhbGwodGhpcyk7XG5cblx0ICAgICAgICAgICAgLy8gUGVyZm9ybSBjb25jcmV0ZS1oYXNoZXIgbG9naWNcblx0ICAgICAgICAgICAgdGhpcy5fZG9SZXNldCgpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBVcGRhdGVzIHRoaXMgaGFzaGVyIHdpdGggYSBtZXNzYWdlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlVXBkYXRlIFRoZSBtZXNzYWdlIHRvIGFwcGVuZC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge0hhc2hlcn0gVGhpcyBoYXNoZXIuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIGhhc2hlci51cGRhdGUoJ21lc3NhZ2UnKTtcblx0ICAgICAgICAgKiAgICAgaGFzaGVyLnVwZGF0ZSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKG1lc3NhZ2VVcGRhdGUpIHtcblx0ICAgICAgICAgICAgLy8gQXBwZW5kXG5cdCAgICAgICAgICAgIHRoaXMuX2FwcGVuZChtZXNzYWdlVXBkYXRlKTtcblxuXHQgICAgICAgICAgICAvLyBVcGRhdGUgdGhlIGhhc2hcblx0ICAgICAgICAgICAgdGhpcy5fcHJvY2VzcygpO1xuXG5cdCAgICAgICAgICAgIC8vIENoYWluYWJsZVxuXHQgICAgICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogRmluYWxpemVzIHRoZSBoYXNoIGNvbXB1dGF0aW9uLlxuXHQgICAgICAgICAqIE5vdGUgdGhhdCB0aGUgZmluYWxpemUgb3BlcmF0aW9uIGlzIGVmZmVjdGl2ZWx5IGEgZGVzdHJ1Y3RpdmUsIHJlYWQtb25jZSBvcGVyYXRpb24uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2VVcGRhdGUgKE9wdGlvbmFsKSBBIGZpbmFsIG1lc3NhZ2UgdXBkYXRlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgaGFzaC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGhhc2ggPSBoYXNoZXIuZmluYWxpemUoKTtcblx0ICAgICAgICAgKiAgICAgdmFyIGhhc2ggPSBoYXNoZXIuZmluYWxpemUoJ21lc3NhZ2UnKTtcblx0ICAgICAgICAgKiAgICAgdmFyIGhhc2ggPSBoYXNoZXIuZmluYWxpemUod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBmaW5hbGl6ZTogZnVuY3Rpb24gKG1lc3NhZ2VVcGRhdGUpIHtcblx0ICAgICAgICAgICAgLy8gRmluYWwgbWVzc2FnZSB1cGRhdGVcblx0ICAgICAgICAgICAgaWYgKG1lc3NhZ2VVcGRhdGUpIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuX2FwcGVuZChtZXNzYWdlVXBkYXRlKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIFBlcmZvcm0gY29uY3JldGUtaGFzaGVyIGxvZ2ljXG5cdCAgICAgICAgICAgIHZhciBoYXNoID0gdGhpcy5fZG9GaW5hbGl6ZSgpO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBoYXNoO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBibG9ja1NpemU6IDUxMi8zMixcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENyZWF0ZXMgYSBzaG9ydGN1dCBmdW5jdGlvbiB0byBhIGhhc2hlcidzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0hhc2hlcn0gaGFzaGVyIFRoZSBoYXNoZXIgdG8gY3JlYXRlIGEgaGVscGVyIGZvci5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgc2hvcnRjdXQgZnVuY3Rpb24uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBTSEEyNTYgPSBDcnlwdG9KUy5saWIuSGFzaGVyLl9jcmVhdGVIZWxwZXIoQ3J5cHRvSlMuYWxnby5TSEEyNTYpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIF9jcmVhdGVIZWxwZXI6IGZ1bmN0aW9uIChoYXNoZXIpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChtZXNzYWdlLCBjZmcpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBuZXcgaGFzaGVyLmluaXQoY2ZnKS5maW5hbGl6ZShtZXNzYWdlKTtcblx0ICAgICAgICAgICAgfTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyBhIHNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBITUFDJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7SGFzaGVyfSBoYXNoZXIgVGhlIGhhc2hlciB0byB1c2UgaW4gdGhpcyBITUFDIGhlbHBlci5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgc2hvcnRjdXQgZnVuY3Rpb24uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBIbWFjU0hBMjU2ID0gQ3J5cHRvSlMubGliLkhhc2hlci5fY3JlYXRlSG1hY0hlbHBlcihDcnlwdG9KUy5hbGdvLlNIQTI1Nik7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgX2NyZWF0ZUhtYWNIZWxwZXI6IGZ1bmN0aW9uIChoYXNoZXIpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChtZXNzYWdlLCBrZXkpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ19hbGdvLkhNQUMuaW5pdChoYXNoZXIsIGtleSkuZmluYWxpemUobWVzc2FnZSk7XG5cdCAgICAgICAgICAgIH07XG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogQWxnb3JpdGhtIG5hbWVzcGFjZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIENfYWxnbyA9IEMuYWxnbyA9IHt9O1xuXG5cdCAgICByZXR1cm4gQztcblx0fShNYXRoKSk7XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlM7XG5cbn0pKTsiLCAiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCJdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcblxuXHQoZnVuY3Rpb24gKHVuZGVmaW5lZCkge1xuXHQgICAgLy8gU2hvcnRjdXRzXG5cdCAgICB2YXIgQyA9IENyeXB0b0pTO1xuXHQgICAgdmFyIENfbGliID0gQy5saWI7XG5cdCAgICB2YXIgQmFzZSA9IENfbGliLkJhc2U7XG5cdCAgICB2YXIgWDMyV29yZEFycmF5ID0gQ19saWIuV29yZEFycmF5O1xuXG5cdCAgICAvKipcblx0ICAgICAqIHg2NCBuYW1lc3BhY2UuXG5cdCAgICAgKi9cblx0ICAgIHZhciBDX3g2NCA9IEMueDY0ID0ge307XG5cblx0ICAgIC8qKlxuXHQgICAgICogQSA2NC1iaXQgd29yZC5cblx0ICAgICAqL1xuXHQgICAgdmFyIFg2NFdvcmQgPSBDX3g2NC5Xb3JkID0gQmFzZS5leHRlbmQoe1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEluaXRpYWxpemVzIGEgbmV3bHkgY3JlYXRlZCA2NC1iaXQgd29yZC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoaWdoIFRoZSBoaWdoIDMyIGJpdHMuXG5cdCAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGxvdyBUaGUgbG93IDMyIGJpdHMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB4NjRXb3JkID0gQ3J5cHRvSlMueDY0LldvcmQuY3JlYXRlKDB4MDAwMTAyMDMsIDB4MDQwNTA2MDcpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGluaXQ6IGZ1bmN0aW9uIChoaWdoLCBsb3cpIHtcblx0ICAgICAgICAgICAgdGhpcy5oaWdoID0gaGlnaDtcblx0ICAgICAgICAgICAgdGhpcy5sb3cgPSBsb3c7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQml0d2lzZSBOT1RzIHRoaXMgd29yZC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1g2NFdvcmR9IEEgbmV3IHg2NC1Xb3JkIG9iamVjdCBhZnRlciBuZWdhdGluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIG5lZ2F0ZWQgPSB4NjRXb3JkLm5vdCgpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIC8vIG5vdDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyB2YXIgaGlnaCA9IH50aGlzLmhpZ2g7XG5cdCAgICAgICAgICAgIC8vIHZhciBsb3cgPSB+dGhpcy5sb3c7XG5cblx0ICAgICAgICAgICAgLy8gcmV0dXJuIFg2NFdvcmQuY3JlYXRlKGhpZ2gsIGxvdyk7XG5cdCAgICAgICAgLy8gfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEJpdHdpc2UgQU5EcyB0aGlzIHdvcmQgd2l0aCB0aGUgcGFzc2VkIHdvcmQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1g2NFdvcmR9IHdvcmQgVGhlIHg2NC1Xb3JkIHRvIEFORCB3aXRoIHRoaXMgd29yZC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1g2NFdvcmR9IEEgbmV3IHg2NC1Xb3JkIG9iamVjdCBhZnRlciBBTkRpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBhbmRlZCA9IHg2NFdvcmQuYW5kKGFub3RoZXJYNjRXb3JkKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICAvLyBhbmQ6IGZ1bmN0aW9uICh3b3JkKSB7XG5cdCAgICAgICAgICAgIC8vIHZhciBoaWdoID0gdGhpcy5oaWdoICYgd29yZC5oaWdoO1xuXHQgICAgICAgICAgICAvLyB2YXIgbG93ID0gdGhpcy5sb3cgJiB3b3JkLmxvdztcblxuXHQgICAgICAgICAgICAvLyByZXR1cm4gWDY0V29yZC5jcmVhdGUoaGlnaCwgbG93KTtcblx0ICAgICAgICAvLyB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQml0d2lzZSBPUnMgdGhpcyB3b3JkIHdpdGggdGhlIHBhc3NlZCB3b3JkLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtYNjRXb3JkfSB3b3JkIFRoZSB4NjQtV29yZCB0byBPUiB3aXRoIHRoaXMgd29yZC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1g2NFdvcmR9IEEgbmV3IHg2NC1Xb3JkIG9iamVjdCBhZnRlciBPUmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIG9yZWQgPSB4NjRXb3JkLm9yKGFub3RoZXJYNjRXb3JkKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICAvLyBvcjogZnVuY3Rpb24gKHdvcmQpIHtcblx0ICAgICAgICAgICAgLy8gdmFyIGhpZ2ggPSB0aGlzLmhpZ2ggfCB3b3JkLmhpZ2g7XG5cdCAgICAgICAgICAgIC8vIHZhciBsb3cgPSB0aGlzLmxvdyB8IHdvcmQubG93O1xuXG5cdCAgICAgICAgICAgIC8vIHJldHVybiBYNjRXb3JkLmNyZWF0ZShoaWdoLCBsb3cpO1xuXHQgICAgICAgIC8vIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBCaXR3aXNlIFhPUnMgdGhpcyB3b3JkIHdpdGggdGhlIHBhc3NlZCB3b3JkLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtYNjRXb3JkfSB3b3JkIFRoZSB4NjQtV29yZCB0byBYT1Igd2l0aCB0aGlzIHdvcmQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtYNjRXb3JkfSBBIG5ldyB4NjQtV29yZCBvYmplY3QgYWZ0ZXIgWE9SaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgeG9yZWQgPSB4NjRXb3JkLnhvcihhbm90aGVyWDY0V29yZCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgLy8geG9yOiBmdW5jdGlvbiAod29yZCkge1xuXHQgICAgICAgICAgICAvLyB2YXIgaGlnaCA9IHRoaXMuaGlnaCBeIHdvcmQuaGlnaDtcblx0ICAgICAgICAgICAgLy8gdmFyIGxvdyA9IHRoaXMubG93IF4gd29yZC5sb3c7XG5cblx0ICAgICAgICAgICAgLy8gcmV0dXJuIFg2NFdvcmQuY3JlYXRlKGhpZ2gsIGxvdyk7XG5cdCAgICAgICAgLy8gfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFNoaWZ0cyB0aGlzIHdvcmQgbiBiaXRzIHRvIHRoZSBsZWZ0LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiBiaXRzIHRvIHNoaWZ0LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7WDY0V29yZH0gQSBuZXcgeDY0LVdvcmQgb2JqZWN0IGFmdGVyIHNoaWZ0aW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgc2hpZnRlZCA9IHg2NFdvcmQuc2hpZnRMKDI1KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICAvLyBzaGlmdEw6IGZ1bmN0aW9uIChuKSB7XG5cdCAgICAgICAgICAgIC8vIGlmIChuIDwgMzIpIHtcblx0ICAgICAgICAgICAgICAgIC8vIHZhciBoaWdoID0gKHRoaXMuaGlnaCA8PCBuKSB8ICh0aGlzLmxvdyA+Pj4gKDMyIC0gbikpO1xuXHQgICAgICAgICAgICAgICAgLy8gdmFyIGxvdyA9IHRoaXMubG93IDw8IG47XG5cdCAgICAgICAgICAgIC8vIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAvLyB2YXIgaGlnaCA9IHRoaXMubG93IDw8IChuIC0gMzIpO1xuXHQgICAgICAgICAgICAgICAgLy8gdmFyIGxvdyA9IDA7XG5cdCAgICAgICAgICAgIC8vIH1cblxuXHQgICAgICAgICAgICAvLyByZXR1cm4gWDY0V29yZC5jcmVhdGUoaGlnaCwgbG93KTtcblx0ICAgICAgICAvLyB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogU2hpZnRzIHRoaXMgd29yZCBuIGJpdHMgdG8gdGhlIHJpZ2h0LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiBiaXRzIHRvIHNoaWZ0LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7WDY0V29yZH0gQSBuZXcgeDY0LVdvcmQgb2JqZWN0IGFmdGVyIHNoaWZ0aW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgc2hpZnRlZCA9IHg2NFdvcmQuc2hpZnRSKDcpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIC8vIHNoaWZ0UjogZnVuY3Rpb24gKG4pIHtcblx0ICAgICAgICAgICAgLy8gaWYgKG4gPCAzMikge1xuXHQgICAgICAgICAgICAgICAgLy8gdmFyIGxvdyA9ICh0aGlzLmxvdyA+Pj4gbikgfCAodGhpcy5oaWdoIDw8ICgzMiAtIG4pKTtcblx0ICAgICAgICAgICAgICAgIC8vIHZhciBoaWdoID0gdGhpcy5oaWdoID4+PiBuO1xuXHQgICAgICAgICAgICAvLyB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgLy8gdmFyIGxvdyA9IHRoaXMuaGlnaCA+Pj4gKG4gLSAzMik7XG5cdCAgICAgICAgICAgICAgICAvLyB2YXIgaGlnaCA9IDA7XG5cdCAgICAgICAgICAgIC8vIH1cblxuXHQgICAgICAgICAgICAvLyByZXR1cm4gWDY0V29yZC5jcmVhdGUoaGlnaCwgbG93KTtcblx0ICAgICAgICAvLyB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUm90YXRlcyB0aGlzIHdvcmQgbiBiaXRzIHRvIHRoZSBsZWZ0LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiBiaXRzIHRvIHJvdGF0ZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1g2NFdvcmR9IEEgbmV3IHg2NC1Xb3JkIG9iamVjdCBhZnRlciByb3RhdGluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHJvdGF0ZWQgPSB4NjRXb3JkLnJvdEwoMjUpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIC8vIHJvdEw6IGZ1bmN0aW9uIChuKSB7XG5cdCAgICAgICAgICAgIC8vIHJldHVybiB0aGlzLnNoaWZ0TChuKS5vcih0aGlzLnNoaWZ0Uig2NCAtIG4pKTtcblx0ICAgICAgICAvLyB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogUm90YXRlcyB0aGlzIHdvcmQgbiBiaXRzIHRvIHRoZSByaWdodC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgYml0cyB0byByb3RhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtYNjRXb3JkfSBBIG5ldyB4NjQtV29yZCBvYmplY3QgYWZ0ZXIgcm90YXRpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciByb3RhdGVkID0geDY0V29yZC5yb3RSKDcpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIC8vIHJvdFI6IGZ1bmN0aW9uIChuKSB7XG5cdCAgICAgICAgICAgIC8vIHJldHVybiB0aGlzLnNoaWZ0UihuKS5vcih0aGlzLnNoaWZ0TCg2NCAtIG4pKTtcblx0ICAgICAgICAvLyB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQWRkcyB0aGlzIHdvcmQgd2l0aCB0aGUgcGFzc2VkIHdvcmQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1g2NFdvcmR9IHdvcmQgVGhlIHg2NC1Xb3JkIHRvIGFkZCB3aXRoIHRoaXMgd29yZC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1g2NFdvcmR9IEEgbmV3IHg2NC1Xb3JkIG9iamVjdCBhZnRlciBhZGRpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBhZGRlZCA9IHg2NFdvcmQuYWRkKGFub3RoZXJYNjRXb3JkKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICAvLyBhZGQ6IGZ1bmN0aW9uICh3b3JkKSB7XG5cdCAgICAgICAgICAgIC8vIHZhciBsb3cgPSAodGhpcy5sb3cgKyB3b3JkLmxvdykgfCAwO1xuXHQgICAgICAgICAgICAvLyB2YXIgY2FycnkgPSAobG93ID4+PiAwKSA8ICh0aGlzLmxvdyA+Pj4gMCkgPyAxIDogMDtcblx0ICAgICAgICAgICAgLy8gdmFyIGhpZ2ggPSAodGhpcy5oaWdoICsgd29yZC5oaWdoICsgY2FycnkpIHwgMDtcblxuXHQgICAgICAgICAgICAvLyByZXR1cm4gWDY0V29yZC5jcmVhdGUoaGlnaCwgbG93KTtcblx0ICAgICAgICAvLyB9XG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBbiBhcnJheSBvZiA2NC1iaXQgd29yZHMuXG5cdCAgICAgKlxuXHQgICAgICogQHByb3BlcnR5IHtBcnJheX0gd29yZHMgVGhlIGFycmF5IG9mIENyeXB0b0pTLng2NC5Xb3JkIG9iamVjdHMuXG5cdCAgICAgKiBAcHJvcGVydHkge251bWJlcn0gc2lnQnl0ZXMgVGhlIG51bWJlciBvZiBzaWduaWZpY2FudCBieXRlcyBpbiB0aGlzIHdvcmQgYXJyYXkuXG5cdCAgICAgKi9cblx0ICAgIHZhciBYNjRXb3JkQXJyYXkgPSBDX3g2NC5Xb3JkQXJyYXkgPSBCYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogSW5pdGlhbGl6ZXMgYSBuZXdseSBjcmVhdGVkIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSB3b3JkcyAoT3B0aW9uYWwpIEFuIGFycmF5IG9mIENyeXB0b0pTLng2NC5Xb3JkIG9iamVjdHMuXG5cdCAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHNpZ0J5dGVzIChPcHRpb25hbCkgVGhlIG51bWJlciBvZiBzaWduaWZpY2FudCBieXRlcyBpbiB0aGUgd29yZHMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy54NjQuV29yZEFycmF5LmNyZWF0ZSgpO1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy54NjQuV29yZEFycmF5LmNyZWF0ZShbXG5cdCAgICAgICAgICogICAgICAgICBDcnlwdG9KUy54NjQuV29yZC5jcmVhdGUoMHgwMDAxMDIwMywgMHgwNDA1MDYwNyksXG5cdCAgICAgICAgICogICAgICAgICBDcnlwdG9KUy54NjQuV29yZC5jcmVhdGUoMHgxODE5MWExYiwgMHgxYzFkMWUxZilcblx0ICAgICAgICAgKiAgICAgXSk7XG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLng2NC5Xb3JkQXJyYXkuY3JlYXRlKFtcblx0ICAgICAgICAgKiAgICAgICAgIENyeXB0b0pTLng2NC5Xb3JkLmNyZWF0ZSgweDAwMDEwMjAzLCAweDA0MDUwNjA3KSxcblx0ICAgICAgICAgKiAgICAgICAgIENyeXB0b0pTLng2NC5Xb3JkLmNyZWF0ZSgweDE4MTkxYTFiLCAweDFjMWQxZTFmKVxuXHQgICAgICAgICAqICAgICBdLCAxMCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgaW5pdDogZnVuY3Rpb24gKHdvcmRzLCBzaWdCeXRlcykge1xuXHQgICAgICAgICAgICB3b3JkcyA9IHRoaXMud29yZHMgPSB3b3JkcyB8fCBbXTtcblxuXHQgICAgICAgICAgICBpZiAoc2lnQnl0ZXMgIT0gdW5kZWZpbmVkKSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLnNpZ0J5dGVzID0gc2lnQnl0ZXM7XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLnNpZ0J5dGVzID0gd29yZHMubGVuZ3RoICogODtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyB0aGlzIDY0LWJpdCB3b3JkIGFycmF5IHRvIGEgMzItYml0IHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtDcnlwdG9KUy5saWIuV29yZEFycmF5fSBUaGlzIHdvcmQgYXJyYXkncyBkYXRhIGFzIGEgMzItYml0IHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB4MzJXb3JkQXJyYXkgPSB4NjRXb3JkQXJyYXkudG9YMzIoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICB0b1gzMjogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIHg2NFdvcmRzID0gdGhpcy53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHg2NFdvcmRzTGVuZ3RoID0geDY0V29yZHMubGVuZ3RoO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgdmFyIHgzMldvcmRzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgeDY0V29yZHNMZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgdmFyIHg2NFdvcmQgPSB4NjRXb3Jkc1tpXTtcblx0ICAgICAgICAgICAgICAgIHgzMldvcmRzLnB1c2goeDY0V29yZC5oaWdoKTtcblx0ICAgICAgICAgICAgICAgIHgzMldvcmRzLnB1c2goeDY0V29yZC5sb3cpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIFgzMldvcmRBcnJheS5jcmVhdGUoeDMyV29yZHMsIHRoaXMuc2lnQnl0ZXMpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGlzIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtYNjRXb3JkQXJyYXl9IFRoZSBjbG9uZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGNsb25lID0geDY0V29yZEFycmF5LmNsb25lKCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdmFyIGNsb25lID0gQmFzZS5jbG9uZS5jYWxsKHRoaXMpO1xuXG5cdCAgICAgICAgICAgIC8vIENsb25lIFwid29yZHNcIiBhcnJheVxuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSBjbG9uZS53b3JkcyA9IHRoaXMud29yZHMuc2xpY2UoMCk7XG5cblx0ICAgICAgICAgICAgLy8gQ2xvbmUgZWFjaCBYNjRXb3JkIG9iamVjdFxuXHQgICAgICAgICAgICB2YXIgd29yZHNMZW5ndGggPSB3b3Jkcy5sZW5ndGg7XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgd29yZHNMZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgd29yZHNbaV0gPSB3b3Jkc1tpXS5jbG9uZSgpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXHR9KCkpO1xuXG5cblx0cmV0dXJuIENyeXB0b0pTO1xuXG59KSk7IiwgIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0KGZ1bmN0aW9uICgpIHtcblx0ICAgIC8vIENoZWNrIGlmIHR5cGVkIGFycmF5cyBhcmUgc3VwcG9ydGVkXG5cdCAgICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9ICdmdW5jdGlvbicpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICB9XG5cblx0ICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgdmFyIEMgPSBDcnlwdG9KUztcblx0ICAgIHZhciBDX2xpYiA9IEMubGliO1xuXHQgICAgdmFyIFdvcmRBcnJheSA9IENfbGliLldvcmRBcnJheTtcblxuXHQgICAgLy8gUmVmZXJlbmNlIG9yaWdpbmFsIGluaXRcblx0ICAgIHZhciBzdXBlckluaXQgPSBXb3JkQXJyYXkuaW5pdDtcblxuXHQgICAgLy8gQXVnbWVudCBXb3JkQXJyYXkuaW5pdCB0byBoYW5kbGUgdHlwZWQgYXJyYXlzXG5cdCAgICB2YXIgc3ViSW5pdCA9IFdvcmRBcnJheS5pbml0ID0gZnVuY3Rpb24gKHR5cGVkQXJyYXkpIHtcblx0ICAgICAgICAvLyBDb252ZXJ0IGJ1ZmZlcnMgdG8gdWludDhcblx0ICAgICAgICBpZiAodHlwZWRBcnJheSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG5cdCAgICAgICAgICAgIHR5cGVkQXJyYXkgPSBuZXcgVWludDhBcnJheSh0eXBlZEFycmF5KTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICAvLyBDb252ZXJ0IG90aGVyIGFycmF5IHZpZXdzIHRvIHVpbnQ4XG5cdCAgICAgICAgaWYgKFxuXHQgICAgICAgICAgICB0eXBlZEFycmF5IGluc3RhbmNlb2YgSW50OEFycmF5IHx8XG5cdCAgICAgICAgICAgICh0eXBlb2YgVWludDhDbGFtcGVkQXJyYXkgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZWRBcnJheSBpbnN0YW5jZW9mIFVpbnQ4Q2xhbXBlZEFycmF5KSB8fFxuXHQgICAgICAgICAgICB0eXBlZEFycmF5IGluc3RhbmNlb2YgSW50MTZBcnJheSB8fFxuXHQgICAgICAgICAgICB0eXBlZEFycmF5IGluc3RhbmNlb2YgVWludDE2QXJyYXkgfHxcblx0ICAgICAgICAgICAgdHlwZWRBcnJheSBpbnN0YW5jZW9mIEludDMyQXJyYXkgfHxcblx0ICAgICAgICAgICAgdHlwZWRBcnJheSBpbnN0YW5jZW9mIFVpbnQzMkFycmF5IHx8XG5cdCAgICAgICAgICAgIHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBGbG9hdDMyQXJyYXkgfHxcblx0ICAgICAgICAgICAgdHlwZWRBcnJheSBpbnN0YW5jZW9mIEZsb2F0NjRBcnJheVxuXHQgICAgICAgICkge1xuXHQgICAgICAgICAgICB0eXBlZEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkodHlwZWRBcnJheS5idWZmZXIsIHR5cGVkQXJyYXkuYnl0ZU9mZnNldCwgdHlwZWRBcnJheS5ieXRlTGVuZ3RoKTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICAvLyBIYW5kbGUgVWludDhBcnJheVxuXHQgICAgICAgIGlmICh0eXBlZEFycmF5IGluc3RhbmNlb2YgVWludDhBcnJheSkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgdHlwZWRBcnJheUJ5dGVMZW5ndGggPSB0eXBlZEFycmF5LmJ5dGVMZW5ndGg7XG5cblx0ICAgICAgICAgICAgLy8gRXh0cmFjdCBieXRlc1xuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0eXBlZEFycmF5Qnl0ZUxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICB3b3Jkc1tpID4+PiAyXSB8PSB0eXBlZEFycmF5W2ldIDw8ICgyNCAtIChpICUgNCkgKiA4KTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIEluaXRpYWxpemUgdGhpcyB3b3JkIGFycmF5XG5cdCAgICAgICAgICAgIHN1cGVySW5pdC5jYWxsKHRoaXMsIHdvcmRzLCB0eXBlZEFycmF5Qnl0ZUxlbmd0aCk7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgLy8gRWxzZSBjYWxsIG5vcm1hbCBpbml0XG5cdCAgICAgICAgICAgIHN1cGVySW5pdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cblx0ICAgIHN1YkluaXQucHJvdG90eXBlID0gV29yZEFycmF5O1xuXHR9KCkpO1xuXG5cblx0cmV0dXJuIENyeXB0b0pTLmxpYi5Xb3JkQXJyYXk7XG5cbn0pKTsiLCAiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCJdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcblxuXHQoZnVuY3Rpb24gKCkge1xuXHQgICAgLy8gU2hvcnRjdXRzXG5cdCAgICB2YXIgQyA9IENyeXB0b0pTO1xuXHQgICAgdmFyIENfbGliID0gQy5saWI7XG5cdCAgICB2YXIgV29yZEFycmF5ID0gQ19saWIuV29yZEFycmF5O1xuXHQgICAgdmFyIENfZW5jID0gQy5lbmM7XG5cblx0ICAgIC8qKlxuXHQgICAgICogVVRGLTE2IEJFIGVuY29kaW5nIHN0cmF0ZWd5LlxuXHQgICAgICovXG5cdCAgICB2YXIgVXRmMTZCRSA9IENfZW5jLlV0ZjE2ID0gQ19lbmMuVXRmMTZCRSA9IHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIHdvcmQgYXJyYXkgdG8gYSBVVEYtMTYgQkUgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl9IHdvcmRBcnJheSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIFVURi0xNiBCRSBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB1dGYxNlN0cmluZyA9IENyeXB0b0pTLmVuYy5VdGYxNi5zdHJpbmdpZnkod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uICh3b3JkQXJyYXkpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IHdvcmRBcnJheS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHNpZ0J5dGVzID0gd29yZEFycmF5LnNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgdmFyIHV0ZjE2Q2hhcnMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaWdCeXRlczsgaSArPSAyKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgY29kZVBvaW50ID0gKHdvcmRzW2kgPj4+IDJdID4+PiAoMTYgLSAoaSAlIDQpICogOCkpICYgMHhmZmZmO1xuXHQgICAgICAgICAgICAgICAgdXRmMTZDaGFycy5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZVBvaW50KSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gdXRmMTZDaGFycy5qb2luKCcnKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSBVVEYtMTYgQkUgc3RyaW5nIHRvIGEgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1dGYxNlN0ciBUaGUgVVRGLTE2IEJFIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5lbmMuVXRmMTYucGFyc2UodXRmMTZTdHJpbmcpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHBhcnNlOiBmdW5jdGlvbiAodXRmMTZTdHIpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgdmFyIHV0ZjE2U3RyTGVuZ3RoID0gdXRmMTZTdHIubGVuZ3RoO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdXRmMTZTdHJMZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgd29yZHNbaSA+Pj4gMV0gfD0gdXRmMTZTdHIuY2hhckNvZGVBdChpKSA8PCAoMTYgLSAoaSAlIDIpICogMTYpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIFdvcmRBcnJheS5jcmVhdGUod29yZHMsIHV0ZjE2U3RyTGVuZ3RoICogMik7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBVVEYtMTYgTEUgZW5jb2Rpbmcgc3RyYXRlZ3kuXG5cdCAgICAgKi9cblx0ICAgIENfZW5jLlV0ZjE2TEUgPSB7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSB3b3JkIGFycmF5IHRvIGEgVVRGLTE2IExFIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBVVEYtMTYgTEUgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgdXRmMTZTdHIgPSBDcnlwdG9KUy5lbmMuVXRmMTZMRS5zdHJpbmdpZnkod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uICh3b3JkQXJyYXkpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IHdvcmRBcnJheS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHNpZ0J5dGVzID0gd29yZEFycmF5LnNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgdmFyIHV0ZjE2Q2hhcnMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaWdCeXRlczsgaSArPSAyKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgY29kZVBvaW50ID0gc3dhcEVuZGlhbigod29yZHNbaSA+Pj4gMl0gPj4+ICgxNiAtIChpICUgNCkgKiA4KSkgJiAweGZmZmYpO1xuXHQgICAgICAgICAgICAgICAgdXRmMTZDaGFycy5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZVBvaW50KSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gdXRmMTZDaGFycy5qb2luKCcnKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSBVVEYtMTYgTEUgc3RyaW5nIHRvIGEgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1dGYxNlN0ciBUaGUgVVRGLTE2IExFIHN0cmluZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5lbmMuVXRmMTZMRS5wYXJzZSh1dGYxNlN0cik7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcGFyc2U6IGZ1bmN0aW9uICh1dGYxNlN0cikge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgdXRmMTZTdHJMZW5ndGggPSB1dGYxNlN0ci5sZW5ndGg7XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydFxuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB1dGYxNlN0ckxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICB3b3Jkc1tpID4+PiAxXSB8PSBzd2FwRW5kaWFuKHV0ZjE2U3RyLmNoYXJDb2RlQXQoaSkgPDwgKDE2IC0gKGkgJSAyKSAqIDE2KSk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gV29yZEFycmF5LmNyZWF0ZSh3b3JkcywgdXRmMTZTdHJMZW5ndGggKiAyKTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXG5cdCAgICBmdW5jdGlvbiBzd2FwRW5kaWFuKHdvcmQpIHtcblx0ICAgICAgICByZXR1cm4gKCh3b3JkIDw8IDgpICYgMHhmZjAwZmYwMCkgfCAoKHdvcmQgPj4+IDgpICYgMHgwMGZmMDBmZik7XG5cdCAgICB9XG5cdH0oKSk7XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlMuZW5jLlV0ZjE2O1xuXG59KSk7IiwgIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0KGZ1bmN0aW9uICgpIHtcblx0ICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgdmFyIEMgPSBDcnlwdG9KUztcblx0ICAgIHZhciBDX2xpYiA9IEMubGliO1xuXHQgICAgdmFyIFdvcmRBcnJheSA9IENfbGliLldvcmRBcnJheTtcblx0ICAgIHZhciBDX2VuYyA9IEMuZW5jO1xuXG5cdCAgICAvKipcblx0ICAgICAqIEJhc2U2NCBlbmNvZGluZyBzdHJhdGVneS5cblx0ICAgICAqL1xuXHQgICAgdmFyIEJhc2U2NCA9IENfZW5jLkJhc2U2NCA9IHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIHdvcmQgYXJyYXkgdG8gYSBCYXNlNjQgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl9IHdvcmRBcnJheSBUaGUgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIEJhc2U2NCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBiYXNlNjRTdHJpbmcgPSBDcnlwdG9KUy5lbmMuQmFzZTY0LnN0cmluZ2lmeSh3b3JkQXJyYXkpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gKHdvcmRBcnJheSkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gd29yZEFycmF5LndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgc2lnQnl0ZXMgPSB3b3JkQXJyYXkuc2lnQnl0ZXM7XG5cdCAgICAgICAgICAgIHZhciBtYXAgPSB0aGlzLl9tYXA7XG5cblx0ICAgICAgICAgICAgLy8gQ2xhbXAgZXhjZXNzIGJpdHNcblx0ICAgICAgICAgICAgd29yZEFycmF5LmNsYW1wKCk7XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydFxuXHQgICAgICAgICAgICB2YXIgYmFzZTY0Q2hhcnMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaWdCeXRlczsgaSArPSAzKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgYnl0ZTEgPSAod29yZHNbaSA+Pj4gMl0gICAgICAgPj4+ICgyNCAtIChpICUgNCkgKiA4KSkgICAgICAgJiAweGZmO1xuXHQgICAgICAgICAgICAgICAgdmFyIGJ5dGUyID0gKHdvcmRzWyhpICsgMSkgPj4+IDJdID4+PiAoMjQgLSAoKGkgKyAxKSAlIDQpICogOCkpICYgMHhmZjtcblx0ICAgICAgICAgICAgICAgIHZhciBieXRlMyA9ICh3b3Jkc1soaSArIDIpID4+PiAyXSA+Pj4gKDI0IC0gKChpICsgMikgJSA0KSAqIDgpKSAmIDB4ZmY7XG5cblx0ICAgICAgICAgICAgICAgIHZhciB0cmlwbGV0ID0gKGJ5dGUxIDw8IDE2KSB8IChieXRlMiA8PCA4KSB8IGJ5dGUzO1xuXG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgKGogPCA0KSAmJiAoaSArIGogKiAwLjc1IDwgc2lnQnl0ZXMpOyBqKyspIHtcblx0ICAgICAgICAgICAgICAgICAgICBiYXNlNjRDaGFycy5wdXNoKG1hcC5jaGFyQXQoKHRyaXBsZXQgPj4+ICg2ICogKDMgLSBqKSkpICYgMHgzZikpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gQWRkIHBhZGRpbmdcblx0ICAgICAgICAgICAgdmFyIHBhZGRpbmdDaGFyID0gbWFwLmNoYXJBdCg2NCk7XG5cdCAgICAgICAgICAgIGlmIChwYWRkaW5nQ2hhcikge1xuXHQgICAgICAgICAgICAgICAgd2hpbGUgKGJhc2U2NENoYXJzLmxlbmd0aCAlIDQpIHtcblx0ICAgICAgICAgICAgICAgICAgICBiYXNlNjRDaGFycy5wdXNoKHBhZGRpbmdDaGFyKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBiYXNlNjRDaGFycy5qb2luKCcnKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSBCYXNlNjQgc3RyaW5nIHRvIGEgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlNjRTdHIgVGhlIEJhc2U2NCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMuZW5jLkJhc2U2NC5wYXJzZShiYXNlNjRTdHJpbmcpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHBhcnNlOiBmdW5jdGlvbiAoYmFzZTY0U3RyKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgYmFzZTY0U3RyTGVuZ3RoID0gYmFzZTY0U3RyLmxlbmd0aDtcblx0ICAgICAgICAgICAgdmFyIG1hcCA9IHRoaXMuX21hcDtcblx0ICAgICAgICAgICAgdmFyIHJldmVyc2VNYXAgPSB0aGlzLl9yZXZlcnNlTWFwO1xuXG5cdCAgICAgICAgICAgIGlmICghcmV2ZXJzZU1hcCkge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldmVyc2VNYXAgPSB0aGlzLl9yZXZlcnNlTWFwID0gW107XG5cdCAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBtYXAubGVuZ3RoOyBqKyspIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgcmV2ZXJzZU1hcFttYXAuY2hhckNvZGVBdChqKV0gPSBqO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIElnbm9yZSBwYWRkaW5nXG5cdCAgICAgICAgICAgIHZhciBwYWRkaW5nQ2hhciA9IG1hcC5jaGFyQXQoNjQpO1xuXHQgICAgICAgICAgICBpZiAocGFkZGluZ0NoYXIpIHtcblx0ICAgICAgICAgICAgICAgIHZhciBwYWRkaW5nSW5kZXggPSBiYXNlNjRTdHIuaW5kZXhPZihwYWRkaW5nQ2hhcik7XG5cdCAgICAgICAgICAgICAgICBpZiAocGFkZGluZ0luZGV4ICE9PSAtMSkge1xuXHQgICAgICAgICAgICAgICAgICAgIGJhc2U2NFN0ckxlbmd0aCA9IHBhZGRpbmdJbmRleDtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgcmV0dXJuIHBhcnNlTG9vcChiYXNlNjRTdHIsIGJhc2U2NFN0ckxlbmd0aCwgcmV2ZXJzZU1hcCk7XG5cblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgX21hcDogJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89J1xuXHQgICAgfTtcblxuXHQgICAgZnVuY3Rpb24gcGFyc2VMb29wKGJhc2U2NFN0ciwgYmFzZTY0U3RyTGVuZ3RoLCByZXZlcnNlTWFwKSB7XG5cdCAgICAgIHZhciB3b3JkcyA9IFtdO1xuXHQgICAgICB2YXIgbkJ5dGVzID0gMDtcblx0ICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBiYXNlNjRTdHJMZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgaWYgKGkgJSA0KSB7XG5cdCAgICAgICAgICAgICAgdmFyIGJpdHMxID0gcmV2ZXJzZU1hcFtiYXNlNjRTdHIuY2hhckNvZGVBdChpIC0gMSldIDw8ICgoaSAlIDQpICogMik7XG5cdCAgICAgICAgICAgICAgdmFyIGJpdHMyID0gcmV2ZXJzZU1hcFtiYXNlNjRTdHIuY2hhckNvZGVBdChpKV0gPj4+ICg2IC0gKGkgJSA0KSAqIDIpO1xuXHQgICAgICAgICAgICAgIHZhciBiaXRzQ29tYmluZWQgPSBiaXRzMSB8IGJpdHMyO1xuXHQgICAgICAgICAgICAgIHdvcmRzW25CeXRlcyA+Pj4gMl0gfD0gYml0c0NvbWJpbmVkIDw8ICgyNCAtIChuQnl0ZXMgJSA0KSAqIDgpO1xuXHQgICAgICAgICAgICAgIG5CeXRlcysrO1xuXHQgICAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICAgIHJldHVybiBXb3JkQXJyYXkuY3JlYXRlKHdvcmRzLCBuQnl0ZXMpO1xuXHQgICAgfVxuXHR9KCkpO1xuXG5cblx0cmV0dXJuIENyeXB0b0pTLmVuYy5CYXNlNjQ7XG5cbn0pKTsiLCAiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCJdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcblxuXHQoZnVuY3Rpb24gKCkge1xuXHQgICAgLy8gU2hvcnRjdXRzXG5cdCAgICB2YXIgQyA9IENyeXB0b0pTO1xuXHQgICAgdmFyIENfbGliID0gQy5saWI7XG5cdCAgICB2YXIgV29yZEFycmF5ID0gQ19saWIuV29yZEFycmF5O1xuXHQgICAgdmFyIENfZW5jID0gQy5lbmM7XG5cblx0ICAgIC8qKlxuXHQgICAgICogQmFzZTY0dXJsIGVuY29kaW5nIHN0cmF0ZWd5LlxuXHQgICAgICovXG5cdCAgICB2YXIgQmFzZTY0dXJsID0gQ19lbmMuQmFzZTY0dXJsID0ge1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgd29yZCBhcnJheSB0byBhIEJhc2U2NHVybCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gd29yZEFycmF5IFRoZSB3b3JkIGFycmF5LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtib29sZWFufSB1cmxTYWZlIFdoZXRoZXIgdG8gdXNlIHVybCBzYWZlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBCYXNlNjR1cmwgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgYmFzZTY0U3RyaW5nID0gQ3J5cHRvSlMuZW5jLkJhc2U2NHVybC5zdHJpbmdpZnkod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uICh3b3JkQXJyYXksIHVybFNhZmU9dHJ1ZSkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gd29yZEFycmF5LndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgc2lnQnl0ZXMgPSB3b3JkQXJyYXkuc2lnQnl0ZXM7XG5cdCAgICAgICAgICAgIHZhciBtYXAgPSB1cmxTYWZlID8gdGhpcy5fc2FmZV9tYXAgOiB0aGlzLl9tYXA7XG5cblx0ICAgICAgICAgICAgLy8gQ2xhbXAgZXhjZXNzIGJpdHNcblx0ICAgICAgICAgICAgd29yZEFycmF5LmNsYW1wKCk7XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydFxuXHQgICAgICAgICAgICB2YXIgYmFzZTY0Q2hhcnMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaWdCeXRlczsgaSArPSAzKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgYnl0ZTEgPSAod29yZHNbaSA+Pj4gMl0gICAgICAgPj4+ICgyNCAtIChpICUgNCkgKiA4KSkgICAgICAgJiAweGZmO1xuXHQgICAgICAgICAgICAgICAgdmFyIGJ5dGUyID0gKHdvcmRzWyhpICsgMSkgPj4+IDJdID4+PiAoMjQgLSAoKGkgKyAxKSAlIDQpICogOCkpICYgMHhmZjtcblx0ICAgICAgICAgICAgICAgIHZhciBieXRlMyA9ICh3b3Jkc1soaSArIDIpID4+PiAyXSA+Pj4gKDI0IC0gKChpICsgMikgJSA0KSAqIDgpKSAmIDB4ZmY7XG5cblx0ICAgICAgICAgICAgICAgIHZhciB0cmlwbGV0ID0gKGJ5dGUxIDw8IDE2KSB8IChieXRlMiA8PCA4KSB8IGJ5dGUzO1xuXG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgKGogPCA0KSAmJiAoaSArIGogKiAwLjc1IDwgc2lnQnl0ZXMpOyBqKyspIHtcblx0ICAgICAgICAgICAgICAgICAgICBiYXNlNjRDaGFycy5wdXNoKG1hcC5jaGFyQXQoKHRyaXBsZXQgPj4+ICg2ICogKDMgLSBqKSkpICYgMHgzZikpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gQWRkIHBhZGRpbmdcblx0ICAgICAgICAgICAgdmFyIHBhZGRpbmdDaGFyID0gbWFwLmNoYXJBdCg2NCk7XG5cdCAgICAgICAgICAgIGlmIChwYWRkaW5nQ2hhcikge1xuXHQgICAgICAgICAgICAgICAgd2hpbGUgKGJhc2U2NENoYXJzLmxlbmd0aCAlIDQpIHtcblx0ICAgICAgICAgICAgICAgICAgICBiYXNlNjRDaGFycy5wdXNoKHBhZGRpbmdDaGFyKTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBiYXNlNjRDaGFycy5qb2luKCcnKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29udmVydHMgYSBCYXNlNjR1cmwgc3RyaW5nIHRvIGEgd29yZCBhcnJheS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlNjRTdHIgVGhlIEJhc2U2NHVybCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVybFNhZmUgV2hldGhlciB0byB1c2UgdXJsIHNhZmVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHdvcmQgYXJyYXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5lbmMuQmFzZTY0dXJsLnBhcnNlKGJhc2U2NFN0cmluZyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcGFyc2U6IGZ1bmN0aW9uIChiYXNlNjRTdHIsIHVybFNhZmU9dHJ1ZSkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIGJhc2U2NFN0ckxlbmd0aCA9IGJhc2U2NFN0ci5sZW5ndGg7XG5cdCAgICAgICAgICAgIHZhciBtYXAgPSB1cmxTYWZlID8gdGhpcy5fc2FmZV9tYXAgOiB0aGlzLl9tYXA7XG5cdCAgICAgICAgICAgIHZhciByZXZlcnNlTWFwID0gdGhpcy5fcmV2ZXJzZU1hcDtcblxuXHQgICAgICAgICAgICBpZiAoIXJldmVyc2VNYXApIHtcblx0ICAgICAgICAgICAgICAgIHJldmVyc2VNYXAgPSB0aGlzLl9yZXZlcnNlTWFwID0gW107XG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG1hcC5sZW5ndGg7IGorKykge1xuXHQgICAgICAgICAgICAgICAgICAgIHJldmVyc2VNYXBbbWFwLmNoYXJDb2RlQXQoaildID0gajtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIElnbm9yZSBwYWRkaW5nXG5cdCAgICAgICAgICAgIHZhciBwYWRkaW5nQ2hhciA9IG1hcC5jaGFyQXQoNjQpO1xuXHQgICAgICAgICAgICBpZiAocGFkZGluZ0NoYXIpIHtcblx0ICAgICAgICAgICAgICAgIHZhciBwYWRkaW5nSW5kZXggPSBiYXNlNjRTdHIuaW5kZXhPZihwYWRkaW5nQ2hhcik7XG5cdCAgICAgICAgICAgICAgICBpZiAocGFkZGluZ0luZGV4ICE9PSAtMSkge1xuXHQgICAgICAgICAgICAgICAgICAgIGJhc2U2NFN0ckxlbmd0aCA9IHBhZGRpbmdJbmRleDtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcblx0ICAgICAgICAgICAgcmV0dXJuIHBhcnNlTG9vcChiYXNlNjRTdHIsIGJhc2U2NFN0ckxlbmd0aCwgcmV2ZXJzZU1hcCk7XG5cblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgX21hcDogJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89Jyxcblx0ICAgICAgICBfc2FmZV9tYXA6ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OS1fJyxcblx0ICAgIH07XG5cblx0ICAgIGZ1bmN0aW9uIHBhcnNlTG9vcChiYXNlNjRTdHIsIGJhc2U2NFN0ckxlbmd0aCwgcmV2ZXJzZU1hcCkge1xuXHQgICAgICAgIHZhciB3b3JkcyA9IFtdO1xuXHQgICAgICAgIHZhciBuQnl0ZXMgPSAwO1xuXHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmFzZTY0U3RyTGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgICAgaWYgKGkgJSA0KSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgYml0czEgPSByZXZlcnNlTWFwW2Jhc2U2NFN0ci5jaGFyQ29kZUF0KGkgLSAxKV0gPDwgKChpICUgNCkgKiAyKTtcblx0ICAgICAgICAgICAgICAgIHZhciBiaXRzMiA9IHJldmVyc2VNYXBbYmFzZTY0U3RyLmNoYXJDb2RlQXQoaSldID4+PiAoNiAtIChpICUgNCkgKiAyKTtcblx0ICAgICAgICAgICAgICAgIHZhciBiaXRzQ29tYmluZWQgPSBiaXRzMSB8IGJpdHMyO1xuXHQgICAgICAgICAgICAgICAgd29yZHNbbkJ5dGVzID4+PiAyXSB8PSBiaXRzQ29tYmluZWQgPDwgKDI0IC0gKG5CeXRlcyAlIDQpICogOCk7XG5cdCAgICAgICAgICAgICAgICBuQnl0ZXMrKztcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgICAgICByZXR1cm4gV29yZEFycmF5LmNyZWF0ZSh3b3JkcywgbkJ5dGVzKTtcblx0ICAgIH1cblx0fSgpKTtcblxuXHRyZXR1cm4gQ3J5cHRvSlMuZW5jLkJhc2U2NHVybDtcblxufSkpOyIsICI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXCIuL2NvcmVcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdChmdW5jdGlvbiAoTWF0aCkge1xuXHQgICAgLy8gU2hvcnRjdXRzXG5cdCAgICB2YXIgQyA9IENyeXB0b0pTO1xuXHQgICAgdmFyIENfbGliID0gQy5saWI7XG5cdCAgICB2YXIgV29yZEFycmF5ID0gQ19saWIuV29yZEFycmF5O1xuXHQgICAgdmFyIEhhc2hlciA9IENfbGliLkhhc2hlcjtcblx0ICAgIHZhciBDX2FsZ28gPSBDLmFsZ287XG5cblx0ICAgIC8vIENvbnN0YW50cyB0YWJsZVxuXHQgICAgdmFyIFQgPSBbXTtcblxuXHQgICAgLy8gQ29tcHV0ZSBjb25zdGFudHNcblx0ICAgIChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA2NDsgaSsrKSB7XG5cdCAgICAgICAgICAgIFRbaV0gPSAoTWF0aC5hYnMoTWF0aC5zaW4oaSArIDEpKSAqIDB4MTAwMDAwMDAwKSB8IDA7XG5cdCAgICAgICAgfVxuXHQgICAgfSgpKTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBNRDUgaGFzaCBhbGdvcml0aG0uXG5cdCAgICAgKi9cblx0ICAgIHZhciBNRDUgPSBDX2FsZ28uTUQ1ID0gSGFzaGVyLmV4dGVuZCh7XG5cdCAgICAgICAgX2RvUmVzZXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdGhpcy5faGFzaCA9IG5ldyBXb3JkQXJyYXkuaW5pdChbXG5cdCAgICAgICAgICAgICAgICAweDY3NDUyMzAxLCAweGVmY2RhYjg5LFxuXHQgICAgICAgICAgICAgICAgMHg5OGJhZGNmZSwgMHgxMDMyNTQ3NlxuXHQgICAgICAgICAgICBdKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgX2RvUHJvY2Vzc0Jsb2NrOiBmdW5jdGlvbiAoTSwgb2Zmc2V0KSB7XG5cdCAgICAgICAgICAgIC8vIFN3YXAgZW5kaWFuXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0X2kgPSBvZmZzZXQgKyBpO1xuXHQgICAgICAgICAgICAgICAgdmFyIE1fb2Zmc2V0X2kgPSBNW29mZnNldF9pXTtcblxuXHQgICAgICAgICAgICAgICAgTVtvZmZzZXRfaV0gPSAoXG5cdCAgICAgICAgICAgICAgICAgICAgKCgoTV9vZmZzZXRfaSA8PCA4KSAgfCAoTV9vZmZzZXRfaSA+Pj4gMjQpKSAmIDB4MDBmZjAwZmYpIHxcblx0ICAgICAgICAgICAgICAgICAgICAoKChNX29mZnNldF9pIDw8IDI0KSB8IChNX29mZnNldF9pID4+PiA4KSkgICYgMHhmZjAwZmYwMClcblx0ICAgICAgICAgICAgICAgICk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIEggPSB0aGlzLl9oYXNoLndvcmRzO1xuXG5cdCAgICAgICAgICAgIHZhciBNX29mZnNldF8wICA9IE1bb2Zmc2V0ICsgMF07XG5cdCAgICAgICAgICAgIHZhciBNX29mZnNldF8xICA9IE1bb2Zmc2V0ICsgMV07XG5cdCAgICAgICAgICAgIHZhciBNX29mZnNldF8yICA9IE1bb2Zmc2V0ICsgMl07XG5cdCAgICAgICAgICAgIHZhciBNX29mZnNldF8zICA9IE1bb2Zmc2V0ICsgM107XG5cdCAgICAgICAgICAgIHZhciBNX29mZnNldF80ICA9IE1bb2Zmc2V0ICsgNF07XG5cdCAgICAgICAgICAgIHZhciBNX29mZnNldF81ICA9IE1bb2Zmc2V0ICsgNV07XG5cdCAgICAgICAgICAgIHZhciBNX29mZnNldF82ICA9IE1bb2Zmc2V0ICsgNl07XG5cdCAgICAgICAgICAgIHZhciBNX29mZnNldF83ICA9IE1bb2Zmc2V0ICsgN107XG5cdCAgICAgICAgICAgIHZhciBNX29mZnNldF84ICA9IE1bb2Zmc2V0ICsgOF07XG5cdCAgICAgICAgICAgIHZhciBNX29mZnNldF85ICA9IE1bb2Zmc2V0ICsgOV07XG5cdCAgICAgICAgICAgIHZhciBNX29mZnNldF8xMCA9IE1bb2Zmc2V0ICsgMTBdO1xuXHQgICAgICAgICAgICB2YXIgTV9vZmZzZXRfMTEgPSBNW29mZnNldCArIDExXTtcblx0ICAgICAgICAgICAgdmFyIE1fb2Zmc2V0XzEyID0gTVtvZmZzZXQgKyAxMl07XG5cdCAgICAgICAgICAgIHZhciBNX29mZnNldF8xMyA9IE1bb2Zmc2V0ICsgMTNdO1xuXHQgICAgICAgICAgICB2YXIgTV9vZmZzZXRfMTQgPSBNW29mZnNldCArIDE0XTtcblx0ICAgICAgICAgICAgdmFyIE1fb2Zmc2V0XzE1ID0gTVtvZmZzZXQgKyAxNV07XG5cblx0ICAgICAgICAgICAgLy8gV29ya2luZyB2YXJpYWxiZXNcblx0ICAgICAgICAgICAgdmFyIGEgPSBIWzBdO1xuXHQgICAgICAgICAgICB2YXIgYiA9IEhbMV07XG5cdCAgICAgICAgICAgIHZhciBjID0gSFsyXTtcblx0ICAgICAgICAgICAgdmFyIGQgPSBIWzNdO1xuXG5cdCAgICAgICAgICAgIC8vIENvbXB1dGF0aW9uXG5cdCAgICAgICAgICAgIGEgPSBGRihhLCBiLCBjLCBkLCBNX29mZnNldF8wLCAgNywgIFRbMF0pO1xuXHQgICAgICAgICAgICBkID0gRkYoZCwgYSwgYiwgYywgTV9vZmZzZXRfMSwgIDEyLCBUWzFdKTtcblx0ICAgICAgICAgICAgYyA9IEZGKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzIsICAxNywgVFsyXSk7XG5cdCAgICAgICAgICAgIGIgPSBGRihiLCBjLCBkLCBhLCBNX29mZnNldF8zLCAgMjIsIFRbM10pO1xuXHQgICAgICAgICAgICBhID0gRkYoYSwgYiwgYywgZCwgTV9vZmZzZXRfNCwgIDcsICBUWzRdKTtcblx0ICAgICAgICAgICAgZCA9IEZGKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzUsICAxMiwgVFs1XSk7XG5cdCAgICAgICAgICAgIGMgPSBGRihjLCBkLCBhLCBiLCBNX29mZnNldF82LCAgMTcsIFRbNl0pO1xuXHQgICAgICAgICAgICBiID0gRkYoYiwgYywgZCwgYSwgTV9vZmZzZXRfNywgIDIyLCBUWzddKTtcblx0ICAgICAgICAgICAgYSA9IEZGKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzgsICA3LCAgVFs4XSk7XG5cdCAgICAgICAgICAgIGQgPSBGRihkLCBhLCBiLCBjLCBNX29mZnNldF85LCAgMTIsIFRbOV0pO1xuXHQgICAgICAgICAgICBjID0gRkYoYywgZCwgYSwgYiwgTV9vZmZzZXRfMTAsIDE3LCBUWzEwXSk7XG5cdCAgICAgICAgICAgIGIgPSBGRihiLCBjLCBkLCBhLCBNX29mZnNldF8xMSwgMjIsIFRbMTFdKTtcblx0ICAgICAgICAgICAgYSA9IEZGKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzEyLCA3LCAgVFsxMl0pO1xuXHQgICAgICAgICAgICBkID0gRkYoZCwgYSwgYiwgYywgTV9vZmZzZXRfMTMsIDEyLCBUWzEzXSk7XG5cdCAgICAgICAgICAgIGMgPSBGRihjLCBkLCBhLCBiLCBNX29mZnNldF8xNCwgMTcsIFRbMTRdKTtcblx0ICAgICAgICAgICAgYiA9IEZGKGIsIGMsIGQsIGEsIE1fb2Zmc2V0XzE1LCAyMiwgVFsxNV0pO1xuXG5cdCAgICAgICAgICAgIGEgPSBHRyhhLCBiLCBjLCBkLCBNX29mZnNldF8xLCAgNSwgIFRbMTZdKTtcblx0ICAgICAgICAgICAgZCA9IEdHKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzYsICA5LCAgVFsxN10pO1xuXHQgICAgICAgICAgICBjID0gR0coYywgZCwgYSwgYiwgTV9vZmZzZXRfMTEsIDE0LCBUWzE4XSk7XG5cdCAgICAgICAgICAgIGIgPSBHRyhiLCBjLCBkLCBhLCBNX29mZnNldF8wLCAgMjAsIFRbMTldKTtcblx0ICAgICAgICAgICAgYSA9IEdHKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzUsICA1LCAgVFsyMF0pO1xuXHQgICAgICAgICAgICBkID0gR0coZCwgYSwgYiwgYywgTV9vZmZzZXRfMTAsIDksICBUWzIxXSk7XG5cdCAgICAgICAgICAgIGMgPSBHRyhjLCBkLCBhLCBiLCBNX29mZnNldF8xNSwgMTQsIFRbMjJdKTtcblx0ICAgICAgICAgICAgYiA9IEdHKGIsIGMsIGQsIGEsIE1fb2Zmc2V0XzQsICAyMCwgVFsyM10pO1xuXHQgICAgICAgICAgICBhID0gR0coYSwgYiwgYywgZCwgTV9vZmZzZXRfOSwgIDUsICBUWzI0XSk7XG5cdCAgICAgICAgICAgIGQgPSBHRyhkLCBhLCBiLCBjLCBNX29mZnNldF8xNCwgOSwgIFRbMjVdKTtcblx0ICAgICAgICAgICAgYyA9IEdHKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzMsICAxNCwgVFsyNl0pO1xuXHQgICAgICAgICAgICBiID0gR0coYiwgYywgZCwgYSwgTV9vZmZzZXRfOCwgIDIwLCBUWzI3XSk7XG5cdCAgICAgICAgICAgIGEgPSBHRyhhLCBiLCBjLCBkLCBNX29mZnNldF8xMywgNSwgIFRbMjhdKTtcblx0ICAgICAgICAgICAgZCA9IEdHKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzIsICA5LCAgVFsyOV0pO1xuXHQgICAgICAgICAgICBjID0gR0coYywgZCwgYSwgYiwgTV9vZmZzZXRfNywgIDE0LCBUWzMwXSk7XG5cdCAgICAgICAgICAgIGIgPSBHRyhiLCBjLCBkLCBhLCBNX29mZnNldF8xMiwgMjAsIFRbMzFdKTtcblxuXHQgICAgICAgICAgICBhID0gSEgoYSwgYiwgYywgZCwgTV9vZmZzZXRfNSwgIDQsICBUWzMyXSk7XG5cdCAgICAgICAgICAgIGQgPSBISChkLCBhLCBiLCBjLCBNX29mZnNldF84LCAgMTEsIFRbMzNdKTtcblx0ICAgICAgICAgICAgYyA9IEhIKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzExLCAxNiwgVFszNF0pO1xuXHQgICAgICAgICAgICBiID0gSEgoYiwgYywgZCwgYSwgTV9vZmZzZXRfMTQsIDIzLCBUWzM1XSk7XG5cdCAgICAgICAgICAgIGEgPSBISChhLCBiLCBjLCBkLCBNX29mZnNldF8xLCAgNCwgIFRbMzZdKTtcblx0ICAgICAgICAgICAgZCA9IEhIKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzQsICAxMSwgVFszN10pO1xuXHQgICAgICAgICAgICBjID0gSEgoYywgZCwgYSwgYiwgTV9vZmZzZXRfNywgIDE2LCBUWzM4XSk7XG5cdCAgICAgICAgICAgIGIgPSBISChiLCBjLCBkLCBhLCBNX29mZnNldF8xMCwgMjMsIFRbMzldKTtcblx0ICAgICAgICAgICAgYSA9IEhIKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzEzLCA0LCAgVFs0MF0pO1xuXHQgICAgICAgICAgICBkID0gSEgoZCwgYSwgYiwgYywgTV9vZmZzZXRfMCwgIDExLCBUWzQxXSk7XG5cdCAgICAgICAgICAgIGMgPSBISChjLCBkLCBhLCBiLCBNX29mZnNldF8zLCAgMTYsIFRbNDJdKTtcblx0ICAgICAgICAgICAgYiA9IEhIKGIsIGMsIGQsIGEsIE1fb2Zmc2V0XzYsICAyMywgVFs0M10pO1xuXHQgICAgICAgICAgICBhID0gSEgoYSwgYiwgYywgZCwgTV9vZmZzZXRfOSwgIDQsICBUWzQ0XSk7XG5cdCAgICAgICAgICAgIGQgPSBISChkLCBhLCBiLCBjLCBNX29mZnNldF8xMiwgMTEsIFRbNDVdKTtcblx0ICAgICAgICAgICAgYyA9IEhIKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzE1LCAxNiwgVFs0Nl0pO1xuXHQgICAgICAgICAgICBiID0gSEgoYiwgYywgZCwgYSwgTV9vZmZzZXRfMiwgIDIzLCBUWzQ3XSk7XG5cblx0ICAgICAgICAgICAgYSA9IElJKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzAsICA2LCAgVFs0OF0pO1xuXHQgICAgICAgICAgICBkID0gSUkoZCwgYSwgYiwgYywgTV9vZmZzZXRfNywgIDEwLCBUWzQ5XSk7XG5cdCAgICAgICAgICAgIGMgPSBJSShjLCBkLCBhLCBiLCBNX29mZnNldF8xNCwgMTUsIFRbNTBdKTtcblx0ICAgICAgICAgICAgYiA9IElJKGIsIGMsIGQsIGEsIE1fb2Zmc2V0XzUsICAyMSwgVFs1MV0pO1xuXHQgICAgICAgICAgICBhID0gSUkoYSwgYiwgYywgZCwgTV9vZmZzZXRfMTIsIDYsICBUWzUyXSk7XG5cdCAgICAgICAgICAgIGQgPSBJSShkLCBhLCBiLCBjLCBNX29mZnNldF8zLCAgMTAsIFRbNTNdKTtcblx0ICAgICAgICAgICAgYyA9IElJKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzEwLCAxNSwgVFs1NF0pO1xuXHQgICAgICAgICAgICBiID0gSUkoYiwgYywgZCwgYSwgTV9vZmZzZXRfMSwgIDIxLCBUWzU1XSk7XG5cdCAgICAgICAgICAgIGEgPSBJSShhLCBiLCBjLCBkLCBNX29mZnNldF84LCAgNiwgIFRbNTZdKTtcblx0ICAgICAgICAgICAgZCA9IElJKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzE1LCAxMCwgVFs1N10pO1xuXHQgICAgICAgICAgICBjID0gSUkoYywgZCwgYSwgYiwgTV9vZmZzZXRfNiwgIDE1LCBUWzU4XSk7XG5cdCAgICAgICAgICAgIGIgPSBJSShiLCBjLCBkLCBhLCBNX29mZnNldF8xMywgMjEsIFRbNTldKTtcblx0ICAgICAgICAgICAgYSA9IElJKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzQsICA2LCAgVFs2MF0pO1xuXHQgICAgICAgICAgICBkID0gSUkoZCwgYSwgYiwgYywgTV9vZmZzZXRfMTEsIDEwLCBUWzYxXSk7XG5cdCAgICAgICAgICAgIGMgPSBJSShjLCBkLCBhLCBiLCBNX29mZnNldF8yLCAgMTUsIFRbNjJdKTtcblx0ICAgICAgICAgICAgYiA9IElJKGIsIGMsIGQsIGEsIE1fb2Zmc2V0XzksICAyMSwgVFs2M10pO1xuXG5cdCAgICAgICAgICAgIC8vIEludGVybWVkaWF0ZSBoYXNoIHZhbHVlXG5cdCAgICAgICAgICAgIEhbMF0gPSAoSFswXSArIGEpIHwgMDtcblx0ICAgICAgICAgICAgSFsxXSA9IChIWzFdICsgYikgfCAwO1xuXHQgICAgICAgICAgICBIWzJdID0gKEhbMl0gKyBjKSB8IDA7XG5cdCAgICAgICAgICAgIEhbM10gPSAoSFszXSArIGQpIHwgMDtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgX2RvRmluYWxpemU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5fZGF0YTtcblx0ICAgICAgICAgICAgdmFyIGRhdGFXb3JkcyA9IGRhdGEud29yZHM7XG5cblx0ICAgICAgICAgICAgdmFyIG5CaXRzVG90YWwgPSB0aGlzLl9uRGF0YUJ5dGVzICogODtcblx0ICAgICAgICAgICAgdmFyIG5CaXRzTGVmdCA9IGRhdGEuc2lnQnl0ZXMgKiA4O1xuXG5cdCAgICAgICAgICAgIC8vIEFkZCBwYWRkaW5nXG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1tuQml0c0xlZnQgPj4+IDVdIHw9IDB4ODAgPDwgKDI0IC0gbkJpdHNMZWZ0ICUgMzIpO1xuXG5cdCAgICAgICAgICAgIHZhciBuQml0c1RvdGFsSCA9IE1hdGguZmxvb3IobkJpdHNUb3RhbCAvIDB4MTAwMDAwMDAwKTtcblx0ICAgICAgICAgICAgdmFyIG5CaXRzVG90YWxMID0gbkJpdHNUb3RhbDtcblx0ICAgICAgICAgICAgZGF0YVdvcmRzWygoKG5CaXRzTGVmdCArIDY0KSA+Pj4gOSkgPDwgNCkgKyAxNV0gPSAoXG5cdCAgICAgICAgICAgICAgICAoKChuQml0c1RvdGFsSCA8PCA4KSAgfCAobkJpdHNUb3RhbEggPj4+IDI0KSkgJiAweDAwZmYwMGZmKSB8XG5cdCAgICAgICAgICAgICAgICAoKChuQml0c1RvdGFsSCA8PCAyNCkgfCAobkJpdHNUb3RhbEggPj4+IDgpKSAgJiAweGZmMDBmZjAwKVxuXHQgICAgICAgICAgICApO1xuXHQgICAgICAgICAgICBkYXRhV29yZHNbKCgobkJpdHNMZWZ0ICsgNjQpID4+PiA5KSA8PCA0KSArIDE0XSA9IChcblx0ICAgICAgICAgICAgICAgICgoKG5CaXRzVG90YWxMIDw8IDgpICB8IChuQml0c1RvdGFsTCA+Pj4gMjQpKSAmIDB4MDBmZjAwZmYpIHxcblx0ICAgICAgICAgICAgICAgICgoKG5CaXRzVG90YWxMIDw8IDI0KSB8IChuQml0c1RvdGFsTCA+Pj4gOCkpICAmIDB4ZmYwMGZmMDApXG5cdCAgICAgICAgICAgICk7XG5cblx0ICAgICAgICAgICAgZGF0YS5zaWdCeXRlcyA9IChkYXRhV29yZHMubGVuZ3RoICsgMSkgKiA0O1xuXG5cdCAgICAgICAgICAgIC8vIEhhc2ggZmluYWwgYmxvY2tzXG5cdCAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3MoKTtcblxuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIGhhc2ggPSB0aGlzLl9oYXNoO1xuXHQgICAgICAgICAgICB2YXIgSCA9IGhhc2gud29yZHM7XG5cblx0ICAgICAgICAgICAgLy8gU3dhcCBlbmRpYW5cblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgICAgICAgICB2YXIgSF9pID0gSFtpXTtcblxuXHQgICAgICAgICAgICAgICAgSFtpXSA9ICgoKEhfaSA8PCA4KSAgfCAoSF9pID4+PiAyNCkpICYgMHgwMGZmMDBmZikgfFxuXHQgICAgICAgICAgICAgICAgICAgICAgICgoKEhfaSA8PCAyNCkgfCAoSF9pID4+PiA4KSkgICYgMHhmZjAwZmYwMCk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBSZXR1cm4gZmluYWwgY29tcHV0ZWQgaGFzaFxuXHQgICAgICAgICAgICByZXR1cm4gaGFzaDtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdmFyIGNsb25lID0gSGFzaGVyLmNsb25lLmNhbGwodGhpcyk7XG5cdCAgICAgICAgICAgIGNsb25lLl9oYXNoID0gdGhpcy5faGFzaC5jbG9uZSgpO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBjbG9uZTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgZnVuY3Rpb24gRkYoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuXHQgICAgICAgIHZhciBuID0gYSArICgoYiAmIGMpIHwgKH5iICYgZCkpICsgeCArIHQ7XG5cdCAgICAgICAgcmV0dXJuICgobiA8PCBzKSB8IChuID4+PiAoMzIgLSBzKSkpICsgYjtcblx0ICAgIH1cblxuXHQgICAgZnVuY3Rpb24gR0coYSwgYiwgYywgZCwgeCwgcywgdCkge1xuXHQgICAgICAgIHZhciBuID0gYSArICgoYiAmIGQpIHwgKGMgJiB+ZCkpICsgeCArIHQ7XG5cdCAgICAgICAgcmV0dXJuICgobiA8PCBzKSB8IChuID4+PiAoMzIgLSBzKSkpICsgYjtcblx0ICAgIH1cblxuXHQgICAgZnVuY3Rpb24gSEgoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuXHQgICAgICAgIHZhciBuID0gYSArIChiIF4gYyBeIGQpICsgeCArIHQ7XG5cdCAgICAgICAgcmV0dXJuICgobiA8PCBzKSB8IChuID4+PiAoMzIgLSBzKSkpICsgYjtcblx0ICAgIH1cblxuXHQgICAgZnVuY3Rpb24gSUkoYSwgYiwgYywgZCwgeCwgcywgdCkge1xuXHQgICAgICAgIHZhciBuID0gYSArIChjIF4gKGIgfCB+ZCkpICsgeCArIHQ7XG5cdCAgICAgICAgcmV0dXJuICgobiA8PCBzKSB8IChuID4+PiAoMzIgLSBzKSkpICsgYjtcblx0ICAgIH1cblxuXHQgICAgLyoqXG5cdCAgICAgKiBTaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgaGFzaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cblx0ICAgICAqXG5cdCAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBoYXNoLlxuXHQgICAgICpcblx0ICAgICAqIEBzdGF0aWNcblx0ICAgICAqXG5cdCAgICAgKiBAZXhhbXBsZVxuXHQgICAgICpcblx0ICAgICAqICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLk1ENSgnbWVzc2FnZScpO1xuXHQgICAgICogICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuTUQ1KHdvcmRBcnJheSk7XG5cdCAgICAgKi9cblx0ICAgIEMuTUQ1ID0gSGFzaGVyLl9jcmVhdGVIZWxwZXIoTUQ1KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgSE1BQydzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgKlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGhhc2guXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IGtleSBUaGUgc2VjcmV0IGtleS5cblx0ICAgICAqXG5cdCAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBITUFDLlxuXHQgICAgICpcblx0ICAgICAqIEBzdGF0aWNcblx0ICAgICAqXG5cdCAgICAgKiBAZXhhbXBsZVxuXHQgICAgICpcblx0ICAgICAqICAgICB2YXIgaG1hYyA9IENyeXB0b0pTLkhtYWNNRDUobWVzc2FnZSwga2V5KTtcblx0ICAgICAqL1xuXHQgICAgQy5IbWFjTUQ1ID0gSGFzaGVyLl9jcmVhdGVIbWFjSGVscGVyKE1ENSk7XG5cdH0oTWF0aCkpO1xuXG5cblx0cmV0dXJuIENyeXB0b0pTLk1ENTtcblxufSkpOyIsICI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXCIuL2NvcmVcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdChmdW5jdGlvbiAoKSB7XG5cdCAgICAvLyBTaG9ydGN1dHNcblx0ICAgIHZhciBDID0gQ3J5cHRvSlM7XG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYjtcblx0ICAgIHZhciBXb3JkQXJyYXkgPSBDX2xpYi5Xb3JkQXJyYXk7XG5cdCAgICB2YXIgSGFzaGVyID0gQ19saWIuSGFzaGVyO1xuXHQgICAgdmFyIENfYWxnbyA9IEMuYWxnbztcblxuXHQgICAgLy8gUmV1c2FibGUgb2JqZWN0XG5cdCAgICB2YXIgVyA9IFtdO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFNIQS0xIGhhc2ggYWxnb3JpdGhtLlxuXHQgICAgICovXG5cdCAgICB2YXIgU0hBMSA9IENfYWxnby5TSEExID0gSGFzaGVyLmV4dGVuZCh7XG5cdCAgICAgICAgX2RvUmVzZXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdGhpcy5faGFzaCA9IG5ldyBXb3JkQXJyYXkuaW5pdChbXG5cdCAgICAgICAgICAgICAgICAweDY3NDUyMzAxLCAweGVmY2RhYjg5LFxuXHQgICAgICAgICAgICAgICAgMHg5OGJhZGNmZSwgMHgxMDMyNTQ3Nixcblx0ICAgICAgICAgICAgICAgIDB4YzNkMmUxZjBcblx0ICAgICAgICAgICAgXSk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9kb1Byb2Nlc3NCbG9jazogZnVuY3Rpb24gKE0sIG9mZnNldCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgSCA9IHRoaXMuX2hhc2gud29yZHM7XG5cblx0ICAgICAgICAgICAgLy8gV29ya2luZyB2YXJpYWJsZXNcblx0ICAgICAgICAgICAgdmFyIGEgPSBIWzBdO1xuXHQgICAgICAgICAgICB2YXIgYiA9IEhbMV07XG5cdCAgICAgICAgICAgIHZhciBjID0gSFsyXTtcblx0ICAgICAgICAgICAgdmFyIGQgPSBIWzNdO1xuXHQgICAgICAgICAgICB2YXIgZSA9IEhbNF07XG5cblx0ICAgICAgICAgICAgLy8gQ29tcHV0YXRpb25cblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA4MDsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICBpZiAoaSA8IDE2KSB7XG5cdCAgICAgICAgICAgICAgICAgICAgV1tpXSA9IE1bb2Zmc2V0ICsgaV0gfCAwO1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IFdbaSAtIDNdIF4gV1tpIC0gOF0gXiBXW2kgLSAxNF0gXiBXW2kgLSAxNl07XG5cdCAgICAgICAgICAgICAgICAgICAgV1tpXSA9IChuIDw8IDEpIHwgKG4gPj4+IDMxKTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgdmFyIHQgPSAoKGEgPDwgNSkgfCAoYSA+Pj4gMjcpKSArIGUgKyBXW2ldO1xuXHQgICAgICAgICAgICAgICAgaWYgKGkgPCAyMCkge1xuXHQgICAgICAgICAgICAgICAgICAgIHQgKz0gKChiICYgYykgfCAofmIgJiBkKSkgKyAweDVhODI3OTk5O1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpIDwgNDApIHtcblx0ICAgICAgICAgICAgICAgICAgICB0ICs9IChiIF4gYyBeIGQpICsgMHg2ZWQ5ZWJhMTtcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA8IDYwKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdCArPSAoKGIgJiBjKSB8IChiICYgZCkgfCAoYyAmIGQpKSAtIDB4NzBlNDQzMjQ7XG5cdCAgICAgICAgICAgICAgICB9IGVsc2UgLyogaWYgKGkgPCA4MCkgKi8ge1xuXHQgICAgICAgICAgICAgICAgICAgIHQgKz0gKGIgXiBjIF4gZCkgLSAweDM1OWQzZTJhO1xuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICBlID0gZDtcblx0ICAgICAgICAgICAgICAgIGQgPSBjO1xuXHQgICAgICAgICAgICAgICAgYyA9IChiIDw8IDMwKSB8IChiID4+PiAyKTtcblx0ICAgICAgICAgICAgICAgIGIgPSBhO1xuXHQgICAgICAgICAgICAgICAgYSA9IHQ7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBJbnRlcm1lZGlhdGUgaGFzaCB2YWx1ZVxuXHQgICAgICAgICAgICBIWzBdID0gKEhbMF0gKyBhKSB8IDA7XG5cdCAgICAgICAgICAgIEhbMV0gPSAoSFsxXSArIGIpIHwgMDtcblx0ICAgICAgICAgICAgSFsyXSA9IChIWzJdICsgYykgfCAwO1xuXHQgICAgICAgICAgICBIWzNdID0gKEhbM10gKyBkKSB8IDA7XG5cdCAgICAgICAgICAgIEhbNF0gPSAoSFs0XSArIGUpIHwgMDtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgX2RvRmluYWxpemU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5fZGF0YTtcblx0ICAgICAgICAgICAgdmFyIGRhdGFXb3JkcyA9IGRhdGEud29yZHM7XG5cblx0ICAgICAgICAgICAgdmFyIG5CaXRzVG90YWwgPSB0aGlzLl9uRGF0YUJ5dGVzICogODtcblx0ICAgICAgICAgICAgdmFyIG5CaXRzTGVmdCA9IGRhdGEuc2lnQnl0ZXMgKiA4O1xuXG5cdCAgICAgICAgICAgIC8vIEFkZCBwYWRkaW5nXG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1tuQml0c0xlZnQgPj4+IDVdIHw9IDB4ODAgPDwgKDI0IC0gbkJpdHNMZWZ0ICUgMzIpO1xuXHQgICAgICAgICAgICBkYXRhV29yZHNbKCgobkJpdHNMZWZ0ICsgNjQpID4+PiA5KSA8PCA0KSArIDE0XSA9IE1hdGguZmxvb3IobkJpdHNUb3RhbCAvIDB4MTAwMDAwMDAwKTtcblx0ICAgICAgICAgICAgZGF0YVdvcmRzWygoKG5CaXRzTGVmdCArIDY0KSA+Pj4gOSkgPDwgNCkgKyAxNV0gPSBuQml0c1RvdGFsO1xuXHQgICAgICAgICAgICBkYXRhLnNpZ0J5dGVzID0gZGF0YVdvcmRzLmxlbmd0aCAqIDQ7XG5cblx0ICAgICAgICAgICAgLy8gSGFzaCBmaW5hbCBibG9ja3Ncblx0ICAgICAgICAgICAgdGhpcy5fcHJvY2VzcygpO1xuXG5cdCAgICAgICAgICAgIC8vIFJldHVybiBmaW5hbCBjb21wdXRlZCBoYXNoXG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLl9oYXNoO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBjbG9uZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB2YXIgY2xvbmUgPSBIYXNoZXIuY2xvbmUuY2FsbCh0aGlzKTtcblx0ICAgICAgICAgICAgY2xvbmUuX2hhc2ggPSB0aGlzLl9oYXNoLmNsb25lKCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBoYXNoZXIncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICpcblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBoYXNoLlxuXHQgICAgICpcblx0ICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGhhc2guXG5cdCAgICAgKlxuXHQgICAgICogQHN0YXRpY1xuXHQgICAgICpcblx0ICAgICAqIEBleGFtcGxlXG5cdCAgICAgKlxuXHQgICAgICogICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuU0hBMSgnbWVzc2FnZScpO1xuXHQgICAgICogICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuU0hBMSh3b3JkQXJyYXkpO1xuXHQgICAgICovXG5cdCAgICBDLlNIQTEgPSBIYXNoZXIuX2NyZWF0ZUhlbHBlcihTSEExKTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgSE1BQydzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgKlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGhhc2guXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IGtleSBUaGUgc2VjcmV0IGtleS5cblx0ICAgICAqXG5cdCAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBITUFDLlxuXHQgICAgICpcblx0ICAgICAqIEBzdGF0aWNcblx0ICAgICAqXG5cdCAgICAgKiBAZXhhbXBsZVxuXHQgICAgICpcblx0ICAgICAqICAgICB2YXIgaG1hYyA9IENyeXB0b0pTLkhtYWNTSEExKG1lc3NhZ2UsIGtleSk7XG5cdCAgICAgKi9cblx0ICAgIEMuSG1hY1NIQTEgPSBIYXNoZXIuX2NyZWF0ZUhtYWNIZWxwZXIoU0hBMSk7XG5cdH0oKSk7XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlMuU0hBMTtcblxufSkpOyIsICI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXCIuL2NvcmVcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdChmdW5jdGlvbiAoTWF0aCkge1xuXHQgICAgLy8gU2hvcnRjdXRzXG5cdCAgICB2YXIgQyA9IENyeXB0b0pTO1xuXHQgICAgdmFyIENfbGliID0gQy5saWI7XG5cdCAgICB2YXIgV29yZEFycmF5ID0gQ19saWIuV29yZEFycmF5O1xuXHQgICAgdmFyIEhhc2hlciA9IENfbGliLkhhc2hlcjtcblx0ICAgIHZhciBDX2FsZ28gPSBDLmFsZ287XG5cblx0ICAgIC8vIEluaXRpYWxpemF0aW9uIGFuZCByb3VuZCBjb25zdGFudHMgdGFibGVzXG5cdCAgICB2YXIgSCA9IFtdO1xuXHQgICAgdmFyIEsgPSBbXTtcblxuXHQgICAgLy8gQ29tcHV0ZSBjb25zdGFudHNcblx0ICAgIChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgZnVuY3Rpb24gaXNQcmltZShuKSB7XG5cdCAgICAgICAgICAgIHZhciBzcXJ0TiA9IE1hdGguc3FydChuKTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgZmFjdG9yID0gMjsgZmFjdG9yIDw9IHNxcnROOyBmYWN0b3IrKykge1xuXHQgICAgICAgICAgICAgICAgaWYgKCEobiAlIGZhY3RvcikpIHtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICBmdW5jdGlvbiBnZXRGcmFjdGlvbmFsQml0cyhuKSB7XG5cdCAgICAgICAgICAgIHJldHVybiAoKG4gLSAobiB8IDApKSAqIDB4MTAwMDAwMDAwKSB8IDA7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgdmFyIG4gPSAyO1xuXHQgICAgICAgIHZhciBuUHJpbWUgPSAwO1xuXHQgICAgICAgIHdoaWxlIChuUHJpbWUgPCA2NCkge1xuXHQgICAgICAgICAgICBpZiAoaXNQcmltZShuKSkge1xuXHQgICAgICAgICAgICAgICAgaWYgKG5QcmltZSA8IDgpIHtcblx0ICAgICAgICAgICAgICAgICAgICBIW25QcmltZV0gPSBnZXRGcmFjdGlvbmFsQml0cyhNYXRoLnBvdyhuLCAxIC8gMikpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgS1tuUHJpbWVdID0gZ2V0RnJhY3Rpb25hbEJpdHMoTWF0aC5wb3cobiwgMSAvIDMpKTtcblxuXHQgICAgICAgICAgICAgICAgblByaW1lKys7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICBuKys7XG5cdCAgICAgICAgfVxuXHQgICAgfSgpKTtcblxuXHQgICAgLy8gUmV1c2FibGUgb2JqZWN0XG5cdCAgICB2YXIgVyA9IFtdO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFNIQS0yNTYgaGFzaCBhbGdvcml0aG0uXG5cdCAgICAgKi9cblx0ICAgIHZhciBTSEEyNTYgPSBDX2FsZ28uU0hBMjU2ID0gSGFzaGVyLmV4dGVuZCh7XG5cdCAgICAgICAgX2RvUmVzZXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdGhpcy5faGFzaCA9IG5ldyBXb3JkQXJyYXkuaW5pdChILnNsaWNlKDApKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgX2RvUHJvY2Vzc0Jsb2NrOiBmdW5jdGlvbiAoTSwgb2Zmc2V0KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgICAgIHZhciBIID0gdGhpcy5faGFzaC53b3JkcztcblxuXHQgICAgICAgICAgICAvLyBXb3JraW5nIHZhcmlhYmxlc1xuXHQgICAgICAgICAgICB2YXIgYSA9IEhbMF07XG5cdCAgICAgICAgICAgIHZhciBiID0gSFsxXTtcblx0ICAgICAgICAgICAgdmFyIGMgPSBIWzJdO1xuXHQgICAgICAgICAgICB2YXIgZCA9IEhbM107XG5cdCAgICAgICAgICAgIHZhciBlID0gSFs0XTtcblx0ICAgICAgICAgICAgdmFyIGYgPSBIWzVdO1xuXHQgICAgICAgICAgICB2YXIgZyA9IEhbNl07XG5cdCAgICAgICAgICAgIHZhciBoID0gSFs3XTtcblxuXHQgICAgICAgICAgICAvLyBDb21wdXRhdGlvblxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDY0OyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIGlmIChpIDwgMTYpIHtcblx0ICAgICAgICAgICAgICAgICAgICBXW2ldID0gTVtvZmZzZXQgKyBpXSB8IDA7XG5cdCAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBnYW1tYTB4ID0gV1tpIC0gMTVdO1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBnYW1tYTAgID0gKChnYW1tYTB4IDw8IDI1KSB8IChnYW1tYTB4ID4+PiA3KSkgIF5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICgoZ2FtbWEweCA8PCAxNCkgfCAoZ2FtbWEweCA+Pj4gMTgpKSBeXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGdhbW1hMHggPj4+IDMpO1xuXG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGdhbW1hMXggPSBXW2kgLSAyXTtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtbWExICA9ICgoZ2FtbWExeCA8PCAxNSkgfCAoZ2FtbWExeCA+Pj4gMTcpKSBeXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKGdhbW1hMXggPDwgMTMpIHwgKGdhbW1hMXggPj4+IDE5KSkgXlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChnYW1tYTF4ID4+PiAxMCk7XG5cblx0ICAgICAgICAgICAgICAgICAgICBXW2ldID0gZ2FtbWEwICsgV1tpIC0gN10gKyBnYW1tYTEgKyBXW2kgLSAxNl07XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIHZhciBjaCAgPSAoZSAmIGYpIF4gKH5lICYgZyk7XG5cdCAgICAgICAgICAgICAgICB2YXIgbWFqID0gKGEgJiBiKSBeIChhICYgYykgXiAoYiAmIGMpO1xuXG5cdCAgICAgICAgICAgICAgICB2YXIgc2lnbWEwID0gKChhIDw8IDMwKSB8IChhID4+PiAyKSkgXiAoKGEgPDwgMTkpIHwgKGEgPj4+IDEzKSkgXiAoKGEgPDwgMTApIHwgKGEgPj4+IDIyKSk7XG5cdCAgICAgICAgICAgICAgICB2YXIgc2lnbWExID0gKChlIDw8IDI2KSB8IChlID4+PiA2KSkgXiAoKGUgPDwgMjEpIHwgKGUgPj4+IDExKSkgXiAoKGUgPDwgNykgIHwgKGUgPj4+IDI1KSk7XG5cblx0ICAgICAgICAgICAgICAgIHZhciB0MSA9IGggKyBzaWdtYTEgKyBjaCArIEtbaV0gKyBXW2ldO1xuXHQgICAgICAgICAgICAgICAgdmFyIHQyID0gc2lnbWEwICsgbWFqO1xuXG5cdCAgICAgICAgICAgICAgICBoID0gZztcblx0ICAgICAgICAgICAgICAgIGcgPSBmO1xuXHQgICAgICAgICAgICAgICAgZiA9IGU7XG5cdCAgICAgICAgICAgICAgICBlID0gKGQgKyB0MSkgfCAwO1xuXHQgICAgICAgICAgICAgICAgZCA9IGM7XG5cdCAgICAgICAgICAgICAgICBjID0gYjtcblx0ICAgICAgICAgICAgICAgIGIgPSBhO1xuXHQgICAgICAgICAgICAgICAgYSA9ICh0MSArIHQyKSB8IDA7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBJbnRlcm1lZGlhdGUgaGFzaCB2YWx1ZVxuXHQgICAgICAgICAgICBIWzBdID0gKEhbMF0gKyBhKSB8IDA7XG5cdCAgICAgICAgICAgIEhbMV0gPSAoSFsxXSArIGIpIHwgMDtcblx0ICAgICAgICAgICAgSFsyXSA9IChIWzJdICsgYykgfCAwO1xuXHQgICAgICAgICAgICBIWzNdID0gKEhbM10gKyBkKSB8IDA7XG5cdCAgICAgICAgICAgIEhbNF0gPSAoSFs0XSArIGUpIHwgMDtcblx0ICAgICAgICAgICAgSFs1XSA9IChIWzVdICsgZikgfCAwO1xuXHQgICAgICAgICAgICBIWzZdID0gKEhbNl0gKyBnKSB8IDA7XG5cdCAgICAgICAgICAgIEhbN10gPSAoSFs3XSArIGgpIHwgMDtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgX2RvRmluYWxpemU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5fZGF0YTtcblx0ICAgICAgICAgICAgdmFyIGRhdGFXb3JkcyA9IGRhdGEud29yZHM7XG5cblx0ICAgICAgICAgICAgdmFyIG5CaXRzVG90YWwgPSB0aGlzLl9uRGF0YUJ5dGVzICogODtcblx0ICAgICAgICAgICAgdmFyIG5CaXRzTGVmdCA9IGRhdGEuc2lnQnl0ZXMgKiA4O1xuXG5cdCAgICAgICAgICAgIC8vIEFkZCBwYWRkaW5nXG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1tuQml0c0xlZnQgPj4+IDVdIHw9IDB4ODAgPDwgKDI0IC0gbkJpdHNMZWZ0ICUgMzIpO1xuXHQgICAgICAgICAgICBkYXRhV29yZHNbKCgobkJpdHNMZWZ0ICsgNjQpID4+PiA5KSA8PCA0KSArIDE0XSA9IE1hdGguZmxvb3IobkJpdHNUb3RhbCAvIDB4MTAwMDAwMDAwKTtcblx0ICAgICAgICAgICAgZGF0YVdvcmRzWygoKG5CaXRzTGVmdCArIDY0KSA+Pj4gOSkgPDwgNCkgKyAxNV0gPSBuQml0c1RvdGFsO1xuXHQgICAgICAgICAgICBkYXRhLnNpZ0J5dGVzID0gZGF0YVdvcmRzLmxlbmd0aCAqIDQ7XG5cblx0ICAgICAgICAgICAgLy8gSGFzaCBmaW5hbCBibG9ja3Ncblx0ICAgICAgICAgICAgdGhpcy5fcHJvY2VzcygpO1xuXG5cdCAgICAgICAgICAgIC8vIFJldHVybiBmaW5hbCBjb21wdXRlZCBoYXNoXG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLl9oYXNoO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBjbG9uZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB2YXIgY2xvbmUgPSBIYXNoZXIuY2xvbmUuY2FsbCh0aGlzKTtcblx0ICAgICAgICAgICAgY2xvbmUuX2hhc2ggPSB0aGlzLl9oYXNoLmNsb25lKCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBoYXNoZXIncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICpcblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBoYXNoLlxuXHQgICAgICpcblx0ICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGhhc2guXG5cdCAgICAgKlxuXHQgICAgICogQHN0YXRpY1xuXHQgICAgICpcblx0ICAgICAqIEBleGFtcGxlXG5cdCAgICAgKlxuXHQgICAgICogICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuU0hBMjU2KCdtZXNzYWdlJyk7XG5cdCAgICAgKiAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5TSEEyNTYod29yZEFycmF5KTtcblx0ICAgICAqL1xuXHQgICAgQy5TSEEyNTYgPSBIYXNoZXIuX2NyZWF0ZUhlbHBlcihTSEEyNTYpO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBITUFDJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30ga2V5IFRoZSBzZWNyZXQga2V5LlxuXHQgICAgICpcblx0ICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIEhNQUMuXG5cdCAgICAgKlxuXHQgICAgICogQHN0YXRpY1xuXHQgICAgICpcblx0ICAgICAqIEBleGFtcGxlXG5cdCAgICAgKlxuXHQgICAgICogICAgIHZhciBobWFjID0gQ3J5cHRvSlMuSG1hY1NIQTI1NihtZXNzYWdlLCBrZXkpO1xuXHQgICAgICovXG5cdCAgICBDLkhtYWNTSEEyNTYgPSBIYXNoZXIuX2NyZWF0ZUhtYWNIZWxwZXIoU0hBMjU2KTtcblx0fShNYXRoKSk7XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlMuU0hBMjU2O1xuXG59KSk7IiwgIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnksIHVuZGVmKSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpLCByZXF1aXJlKFwiLi9zaGEyNTZcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiLCBcIi4vc2hhMjU2XCJdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcblxuXHQoZnVuY3Rpb24gKCkge1xuXHQgICAgLy8gU2hvcnRjdXRzXG5cdCAgICB2YXIgQyA9IENyeXB0b0pTO1xuXHQgICAgdmFyIENfbGliID0gQy5saWI7XG5cdCAgICB2YXIgV29yZEFycmF5ID0gQ19saWIuV29yZEFycmF5O1xuXHQgICAgdmFyIENfYWxnbyA9IEMuYWxnbztcblx0ICAgIHZhciBTSEEyNTYgPSBDX2FsZ28uU0hBMjU2O1xuXG5cdCAgICAvKipcblx0ICAgICAqIFNIQS0yMjQgaGFzaCBhbGdvcml0aG0uXG5cdCAgICAgKi9cblx0ICAgIHZhciBTSEEyMjQgPSBDX2FsZ28uU0hBMjI0ID0gU0hBMjU2LmV4dGVuZCh7XG5cdCAgICAgICAgX2RvUmVzZXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdGhpcy5faGFzaCA9IG5ldyBXb3JkQXJyYXkuaW5pdChbXG5cdCAgICAgICAgICAgICAgICAweGMxMDU5ZWQ4LCAweDM2N2NkNTA3LCAweDMwNzBkZDE3LCAweGY3MGU1OTM5LFxuXHQgICAgICAgICAgICAgICAgMHhmZmMwMGIzMSwgMHg2ODU4MTUxMSwgMHg2NGY5OGZhNywgMHhiZWZhNGZhNFxuXHQgICAgICAgICAgICBdKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgX2RvRmluYWxpemU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdmFyIGhhc2ggPSBTSEEyNTYuX2RvRmluYWxpemUuY2FsbCh0aGlzKTtcblxuXHQgICAgICAgICAgICBoYXNoLnNpZ0J5dGVzIC09IDQ7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGhhc2g7XG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIGhhc2hlcidzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgKlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGhhc2guXG5cdCAgICAgKlxuXHQgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgaGFzaC5cblx0ICAgICAqXG5cdCAgICAgKiBAc3RhdGljXG5cdCAgICAgKlxuXHQgICAgICogQGV4YW1wbGVcblx0ICAgICAqXG5cdCAgICAgKiAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5TSEEyMjQoJ21lc3NhZ2UnKTtcblx0ICAgICAqICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLlNIQTIyNCh3b3JkQXJyYXkpO1xuXHQgICAgICovXG5cdCAgICBDLlNIQTIyNCA9IFNIQTI1Ni5fY3JlYXRlSGVscGVyKFNIQTIyNCk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIEhNQUMncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICpcblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBoYXNoLlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBrZXkgVGhlIHNlY3JldCBrZXkuXG5cdCAgICAgKlxuXHQgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgSE1BQy5cblx0ICAgICAqXG5cdCAgICAgKiBAc3RhdGljXG5cdCAgICAgKlxuXHQgICAgICogQGV4YW1wbGVcblx0ICAgICAqXG5cdCAgICAgKiAgICAgdmFyIGhtYWMgPSBDcnlwdG9KUy5IbWFjU0hBMjI0KG1lc3NhZ2UsIGtleSk7XG5cdCAgICAgKi9cblx0ICAgIEMuSG1hY1NIQTIyNCA9IFNIQTI1Ni5fY3JlYXRlSG1hY0hlbHBlcihTSEEyMjQpO1xuXHR9KCkpO1xuXG5cblx0cmV0dXJuIENyeXB0b0pTLlNIQTIyNDtcblxufSkpOyIsICI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5LCB1bmRlZikge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSwgcmVxdWlyZShcIi4veDY0LWNvcmVcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiLCBcIi4veDY0LWNvcmVcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdChmdW5jdGlvbiAoKSB7XG5cdCAgICAvLyBTaG9ydGN1dHNcblx0ICAgIHZhciBDID0gQ3J5cHRvSlM7XG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYjtcblx0ICAgIHZhciBIYXNoZXIgPSBDX2xpYi5IYXNoZXI7XG5cdCAgICB2YXIgQ194NjQgPSBDLng2NDtcblx0ICAgIHZhciBYNjRXb3JkID0gQ194NjQuV29yZDtcblx0ICAgIHZhciBYNjRXb3JkQXJyYXkgPSBDX3g2NC5Xb3JkQXJyYXk7XG5cdCAgICB2YXIgQ19hbGdvID0gQy5hbGdvO1xuXG5cdCAgICBmdW5jdGlvbiBYNjRXb3JkX2NyZWF0ZSgpIHtcblx0ICAgICAgICByZXR1cm4gWDY0V29yZC5jcmVhdGUuYXBwbHkoWDY0V29yZCwgYXJndW1lbnRzKTtcblx0ICAgIH1cblxuXHQgICAgLy8gQ29uc3RhbnRzXG5cdCAgICB2YXIgSyA9IFtcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDQyOGEyZjk4LCAweGQ3MjhhZTIyKSwgWDY0V29yZF9jcmVhdGUoMHg3MTM3NDQ5MSwgMHgyM2VmNjVjZCksXG5cdCAgICAgICAgWDY0V29yZF9jcmVhdGUoMHhiNWMwZmJjZiwgMHhlYzRkM2IyZiksIFg2NFdvcmRfY3JlYXRlKDB4ZTliNWRiYTUsIDB4ODE4OWRiYmMpLFxuXHQgICAgICAgIFg2NFdvcmRfY3JlYXRlKDB4Mzk1NmMyNWIsIDB4ZjM0OGI1MzgpLCBYNjRXb3JkX2NyZWF0ZSgweDU5ZjExMWYxLCAweGI2MDVkMDE5KSxcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDkyM2Y4MmE0LCAweGFmMTk0ZjliKSwgWDY0V29yZF9jcmVhdGUoMHhhYjFjNWVkNSwgMHhkYTZkODExOCksXG5cdCAgICAgICAgWDY0V29yZF9jcmVhdGUoMHhkODA3YWE5OCwgMHhhMzAzMDI0MiksIFg2NFdvcmRfY3JlYXRlKDB4MTI4MzViMDEsIDB4NDU3MDZmYmUpLFxuXHQgICAgICAgIFg2NFdvcmRfY3JlYXRlKDB4MjQzMTg1YmUsIDB4NGVlNGIyOGMpLCBYNjRXb3JkX2NyZWF0ZSgweDU1MGM3ZGMzLCAweGQ1ZmZiNGUyKSxcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDcyYmU1ZDc0LCAweGYyN2I4OTZmKSwgWDY0V29yZF9jcmVhdGUoMHg4MGRlYjFmZSwgMHgzYjE2OTZiMSksXG5cdCAgICAgICAgWDY0V29yZF9jcmVhdGUoMHg5YmRjMDZhNywgMHgyNWM3MTIzNSksIFg2NFdvcmRfY3JlYXRlKDB4YzE5YmYxNzQsIDB4Y2Y2OTI2OTQpLFxuXHQgICAgICAgIFg2NFdvcmRfY3JlYXRlKDB4ZTQ5YjY5YzEsIDB4OWVmMTRhZDIpLCBYNjRXb3JkX2NyZWF0ZSgweGVmYmU0Nzg2LCAweDM4NGYyNWUzKSxcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDBmYzE5ZGM2LCAweDhiOGNkNWI1KSwgWDY0V29yZF9jcmVhdGUoMHgyNDBjYTFjYywgMHg3N2FjOWM2NSksXG5cdCAgICAgICAgWDY0V29yZF9jcmVhdGUoMHgyZGU5MmM2ZiwgMHg1OTJiMDI3NSksIFg2NFdvcmRfY3JlYXRlKDB4NGE3NDg0YWEsIDB4NmVhNmU0ODMpLFxuXHQgICAgICAgIFg2NFdvcmRfY3JlYXRlKDB4NWNiMGE5ZGMsIDB4YmQ0MWZiZDQpLCBYNjRXb3JkX2NyZWF0ZSgweDc2Zjk4OGRhLCAweDgzMTE1M2I1KSxcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDk4M2U1MTUyLCAweGVlNjZkZmFiKSwgWDY0V29yZF9jcmVhdGUoMHhhODMxYzY2ZCwgMHgyZGI0MzIxMCksXG5cdCAgICAgICAgWDY0V29yZF9jcmVhdGUoMHhiMDAzMjdjOCwgMHg5OGZiMjEzZiksIFg2NFdvcmRfY3JlYXRlKDB4YmY1OTdmYzcsIDB4YmVlZjBlZTQpLFxuXHQgICAgICAgIFg2NFdvcmRfY3JlYXRlKDB4YzZlMDBiZjMsIDB4M2RhODhmYzIpLCBYNjRXb3JkX2NyZWF0ZSgweGQ1YTc5MTQ3LCAweDkzMGFhNzI1KSxcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDA2Y2E2MzUxLCAweGUwMDM4MjZmKSwgWDY0V29yZF9jcmVhdGUoMHgxNDI5Mjk2NywgMHgwYTBlNmU3MCksXG5cdCAgICAgICAgWDY0V29yZF9jcmVhdGUoMHgyN2I3MGE4NSwgMHg0NmQyMmZmYyksIFg2NFdvcmRfY3JlYXRlKDB4MmUxYjIxMzgsIDB4NWMyNmM5MjYpLFxuXHQgICAgICAgIFg2NFdvcmRfY3JlYXRlKDB4NGQyYzZkZmMsIDB4NWFjNDJhZWQpLCBYNjRXb3JkX2NyZWF0ZSgweDUzMzgwZDEzLCAweDlkOTViM2RmKSxcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDY1MGE3MzU0LCAweDhiYWY2M2RlKSwgWDY0V29yZF9jcmVhdGUoMHg3NjZhMGFiYiwgMHgzYzc3YjJhOCksXG5cdCAgICAgICAgWDY0V29yZF9jcmVhdGUoMHg4MWMyYzkyZSwgMHg0N2VkYWVlNiksIFg2NFdvcmRfY3JlYXRlKDB4OTI3MjJjODUsIDB4MTQ4MjM1M2IpLFxuXHQgICAgICAgIFg2NFdvcmRfY3JlYXRlKDB4YTJiZmU4YTEsIDB4NGNmMTAzNjQpLCBYNjRXb3JkX2NyZWF0ZSgweGE4MWE2NjRiLCAweGJjNDIzMDAxKSxcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweGMyNGI4YjcwLCAweGQwZjg5NzkxKSwgWDY0V29yZF9jcmVhdGUoMHhjNzZjNTFhMywgMHgwNjU0YmUzMCksXG5cdCAgICAgICAgWDY0V29yZF9jcmVhdGUoMHhkMTkyZTgxOSwgMHhkNmVmNTIxOCksIFg2NFdvcmRfY3JlYXRlKDB4ZDY5OTA2MjQsIDB4NTU2NWE5MTApLFxuXHQgICAgICAgIFg2NFdvcmRfY3JlYXRlKDB4ZjQwZTM1ODUsIDB4NTc3MTIwMmEpLCBYNjRXb3JkX2NyZWF0ZSgweDEwNmFhMDcwLCAweDMyYmJkMWI4KSxcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDE5YTRjMTE2LCAweGI4ZDJkMGM4KSwgWDY0V29yZF9jcmVhdGUoMHgxZTM3NmMwOCwgMHg1MTQxYWI1MyksXG5cdCAgICAgICAgWDY0V29yZF9jcmVhdGUoMHgyNzQ4Nzc0YywgMHhkZjhlZWI5OSksIFg2NFdvcmRfY3JlYXRlKDB4MzRiMGJjYjUsIDB4ZTE5YjQ4YTgpLFxuXHQgICAgICAgIFg2NFdvcmRfY3JlYXRlKDB4MzkxYzBjYjMsIDB4YzVjOTVhNjMpLCBYNjRXb3JkX2NyZWF0ZSgweDRlZDhhYTRhLCAweGUzNDE4YWNiKSxcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDViOWNjYTRmLCAweDc3NjNlMzczKSwgWDY0V29yZF9jcmVhdGUoMHg2ODJlNmZmMywgMHhkNmIyYjhhMyksXG5cdCAgICAgICAgWDY0V29yZF9jcmVhdGUoMHg3NDhmODJlZSwgMHg1ZGVmYjJmYyksIFg2NFdvcmRfY3JlYXRlKDB4NzhhNTYzNmYsIDB4NDMxNzJmNjApLFxuXHQgICAgICAgIFg2NFdvcmRfY3JlYXRlKDB4ODRjODc4MTQsIDB4YTFmMGFiNzIpLCBYNjRXb3JkX2NyZWF0ZSgweDhjYzcwMjA4LCAweDFhNjQzOWVjKSxcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDkwYmVmZmZhLCAweDIzNjMxZTI4KSwgWDY0V29yZF9jcmVhdGUoMHhhNDUwNmNlYiwgMHhkZTgyYmRlOSksXG5cdCAgICAgICAgWDY0V29yZF9jcmVhdGUoMHhiZWY5YTNmNywgMHhiMmM2NzkxNSksIFg2NFdvcmRfY3JlYXRlKDB4YzY3MTc4ZjIsIDB4ZTM3MjUzMmIpLFxuXHQgICAgICAgIFg2NFdvcmRfY3JlYXRlKDB4Y2EyNzNlY2UsIDB4ZWEyNjYxOWMpLCBYNjRXb3JkX2NyZWF0ZSgweGQxODZiOGM3LCAweDIxYzBjMjA3KSxcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweGVhZGE3ZGQ2LCAweGNkZTBlYjFlKSwgWDY0V29yZF9jcmVhdGUoMHhmNTdkNGY3ZiwgMHhlZTZlZDE3OCksXG5cdCAgICAgICAgWDY0V29yZF9jcmVhdGUoMHgwNmYwNjdhYSwgMHg3MjE3NmZiYSksIFg2NFdvcmRfY3JlYXRlKDB4MGE2MzdkYzUsIDB4YTJjODk4YTYpLFxuXHQgICAgICAgIFg2NFdvcmRfY3JlYXRlKDB4MTEzZjk4MDQsIDB4YmVmOTBkYWUpLCBYNjRXb3JkX2NyZWF0ZSgweDFiNzEwYjM1LCAweDEzMWM0NzFiKSxcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDI4ZGI3N2Y1LCAweDIzMDQ3ZDg0KSwgWDY0V29yZF9jcmVhdGUoMHgzMmNhYWI3YiwgMHg0MGM3MjQ5MyksXG5cdCAgICAgICAgWDY0V29yZF9jcmVhdGUoMHgzYzllYmUwYSwgMHgxNWM5YmViYyksIFg2NFdvcmRfY3JlYXRlKDB4NDMxZDY3YzQsIDB4OWMxMDBkNGMpLFxuXHQgICAgICAgIFg2NFdvcmRfY3JlYXRlKDB4NGNjNWQ0YmUsIDB4Y2IzZTQyYjYpLCBYNjRXb3JkX2NyZWF0ZSgweDU5N2YyOTljLCAweGZjNjU3ZTJhKSxcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDVmY2I2ZmFiLCAweDNhZDZmYWVjKSwgWDY0V29yZF9jcmVhdGUoMHg2YzQ0MTk4YywgMHg0YTQ3NTgxNylcblx0ICAgIF07XG5cblx0ICAgIC8vIFJldXNhYmxlIG9iamVjdHNcblx0ICAgIHZhciBXID0gW107XG5cdCAgICAoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgODA7IGkrKykge1xuXHQgICAgICAgICAgICBXW2ldID0gWDY0V29yZF9jcmVhdGUoKTtcblx0ICAgICAgICB9XG5cdCAgICB9KCkpO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFNIQS01MTIgaGFzaCBhbGdvcml0aG0uXG5cdCAgICAgKi9cblx0ICAgIHZhciBTSEE1MTIgPSBDX2FsZ28uU0hBNTEyID0gSGFzaGVyLmV4dGVuZCh7XG5cdCAgICAgICAgX2RvUmVzZXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdGhpcy5faGFzaCA9IG5ldyBYNjRXb3JkQXJyYXkuaW5pdChbXG5cdCAgICAgICAgICAgICAgICBuZXcgWDY0V29yZC5pbml0KDB4NmEwOWU2NjcsIDB4ZjNiY2M5MDgpLCBuZXcgWDY0V29yZC5pbml0KDB4YmI2N2FlODUsIDB4ODRjYWE3M2IpLFxuXHQgICAgICAgICAgICAgICAgbmV3IFg2NFdvcmQuaW5pdCgweDNjNmVmMzcyLCAweGZlOTRmODJiKSwgbmV3IFg2NFdvcmQuaW5pdCgweGE1NGZmNTNhLCAweDVmMWQzNmYxKSxcblx0ICAgICAgICAgICAgICAgIG5ldyBYNjRXb3JkLmluaXQoMHg1MTBlNTI3ZiwgMHhhZGU2ODJkMSksIG5ldyBYNjRXb3JkLmluaXQoMHg5YjA1Njg4YywgMHgyYjNlNmMxZiksXG5cdCAgICAgICAgICAgICAgICBuZXcgWDY0V29yZC5pbml0KDB4MWY4M2Q5YWIsIDB4ZmI0MWJkNmIpLCBuZXcgWDY0V29yZC5pbml0KDB4NWJlMGNkMTksIDB4MTM3ZTIxNzkpXG5cdCAgICAgICAgICAgIF0pO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfZG9Qcm9jZXNzQmxvY2s6IGZ1bmN0aW9uIChNLCBvZmZzZXQpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBIID0gdGhpcy5faGFzaC53b3JkcztcblxuXHQgICAgICAgICAgICB2YXIgSDAgPSBIWzBdO1xuXHQgICAgICAgICAgICB2YXIgSDEgPSBIWzFdO1xuXHQgICAgICAgICAgICB2YXIgSDIgPSBIWzJdO1xuXHQgICAgICAgICAgICB2YXIgSDMgPSBIWzNdO1xuXHQgICAgICAgICAgICB2YXIgSDQgPSBIWzRdO1xuXHQgICAgICAgICAgICB2YXIgSDUgPSBIWzVdO1xuXHQgICAgICAgICAgICB2YXIgSDYgPSBIWzZdO1xuXHQgICAgICAgICAgICB2YXIgSDcgPSBIWzddO1xuXG5cdCAgICAgICAgICAgIHZhciBIMGggPSBIMC5oaWdoO1xuXHQgICAgICAgICAgICB2YXIgSDBsID0gSDAubG93O1xuXHQgICAgICAgICAgICB2YXIgSDFoID0gSDEuaGlnaDtcblx0ICAgICAgICAgICAgdmFyIEgxbCA9IEgxLmxvdztcblx0ICAgICAgICAgICAgdmFyIEgyaCA9IEgyLmhpZ2g7XG5cdCAgICAgICAgICAgIHZhciBIMmwgPSBIMi5sb3c7XG5cdCAgICAgICAgICAgIHZhciBIM2ggPSBIMy5oaWdoO1xuXHQgICAgICAgICAgICB2YXIgSDNsID0gSDMubG93O1xuXHQgICAgICAgICAgICB2YXIgSDRoID0gSDQuaGlnaDtcblx0ICAgICAgICAgICAgdmFyIEg0bCA9IEg0Lmxvdztcblx0ICAgICAgICAgICAgdmFyIEg1aCA9IEg1LmhpZ2g7XG5cdCAgICAgICAgICAgIHZhciBINWwgPSBINS5sb3c7XG5cdCAgICAgICAgICAgIHZhciBINmggPSBINi5oaWdoO1xuXHQgICAgICAgICAgICB2YXIgSDZsID0gSDYubG93O1xuXHQgICAgICAgICAgICB2YXIgSDdoID0gSDcuaGlnaDtcblx0ICAgICAgICAgICAgdmFyIEg3bCA9IEg3LmxvdztcblxuXHQgICAgICAgICAgICAvLyBXb3JraW5nIHZhcmlhYmxlc1xuXHQgICAgICAgICAgICB2YXIgYWggPSBIMGg7XG5cdCAgICAgICAgICAgIHZhciBhbCA9IEgwbDtcblx0ICAgICAgICAgICAgdmFyIGJoID0gSDFoO1xuXHQgICAgICAgICAgICB2YXIgYmwgPSBIMWw7XG5cdCAgICAgICAgICAgIHZhciBjaCA9IEgyaDtcblx0ICAgICAgICAgICAgdmFyIGNsID0gSDJsO1xuXHQgICAgICAgICAgICB2YXIgZGggPSBIM2g7XG5cdCAgICAgICAgICAgIHZhciBkbCA9IEgzbDtcblx0ICAgICAgICAgICAgdmFyIGVoID0gSDRoO1xuXHQgICAgICAgICAgICB2YXIgZWwgPSBINGw7XG5cdCAgICAgICAgICAgIHZhciBmaCA9IEg1aDtcblx0ICAgICAgICAgICAgdmFyIGZsID0gSDVsO1xuXHQgICAgICAgICAgICB2YXIgZ2ggPSBINmg7XG5cdCAgICAgICAgICAgIHZhciBnbCA9IEg2bDtcblx0ICAgICAgICAgICAgdmFyIGhoID0gSDdoO1xuXHQgICAgICAgICAgICB2YXIgaGwgPSBIN2w7XG5cblx0ICAgICAgICAgICAgLy8gUm91bmRzXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgODA7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgdmFyIFdpbDtcblx0ICAgICAgICAgICAgICAgIHZhciBXaWg7XG5cblx0ICAgICAgICAgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgICAgICAgICB2YXIgV2kgPSBXW2ldO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBFeHRlbmQgbWVzc2FnZVxuXHQgICAgICAgICAgICAgICAgaWYgKGkgPCAxNikge1xuXHQgICAgICAgICAgICAgICAgICAgIFdpaCA9IFdpLmhpZ2ggPSBNW29mZnNldCArIGkgKiAyXSAgICAgfCAwO1xuXHQgICAgICAgICAgICAgICAgICAgIFdpbCA9IFdpLmxvdyAgPSBNW29mZnNldCArIGkgKiAyICsgMV0gfCAwO1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICAvLyBHYW1tYTBcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtbWEweCAgPSBXW2kgLSAxNV07XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGdhbW1hMHhoID0gZ2FtbWEweC5oaWdoO1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBnYW1tYTB4bCA9IGdhbW1hMHgubG93O1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBnYW1tYTBoICA9ICgoZ2FtbWEweGggPj4+IDEpIHwgKGdhbW1hMHhsIDw8IDMxKSkgXiAoKGdhbW1hMHhoID4+PiA4KSB8IChnYW1tYTB4bCA8PCAyNCkpIF4gKGdhbW1hMHhoID4+PiA3KTtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtbWEwbCAgPSAoKGdhbW1hMHhsID4+PiAxKSB8IChnYW1tYTB4aCA8PCAzMSkpIF4gKChnYW1tYTB4bCA+Pj4gOCkgfCAoZ2FtbWEweGggPDwgMjQpKSBeICgoZ2FtbWEweGwgPj4+IDcpIHwgKGdhbW1hMHhoIDw8IDI1KSk7XG5cblx0ICAgICAgICAgICAgICAgICAgICAvLyBHYW1tYTFcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtbWExeCAgPSBXW2kgLSAyXTtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtbWExeGggPSBnYW1tYTF4LmhpZ2g7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGdhbW1hMXhsID0gZ2FtbWExeC5sb3c7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGdhbW1hMWggID0gKChnYW1tYTF4aCA+Pj4gMTkpIHwgKGdhbW1hMXhsIDw8IDEzKSkgXiAoKGdhbW1hMXhoIDw8IDMpIHwgKGdhbW1hMXhsID4+PiAyOSkpIF4gKGdhbW1hMXhoID4+PiA2KTtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtbWExbCAgPSAoKGdhbW1hMXhsID4+PiAxOSkgfCAoZ2FtbWExeGggPDwgMTMpKSBeICgoZ2FtbWExeGwgPDwgMykgfCAoZ2FtbWExeGggPj4+IDI5KSkgXiAoKGdhbW1hMXhsID4+PiA2KSB8IChnYW1tYTF4aCA8PCAyNikpO1xuXG5cdCAgICAgICAgICAgICAgICAgICAgLy8gV1tpXSA9IGdhbW1hMCArIFdbaSAtIDddICsgZ2FtbWExICsgV1tpIC0gMTZdXG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIFdpNyAgPSBXW2kgLSA3XTtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgV2k3aCA9IFdpNy5oaWdoO1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBXaTdsID0gV2k3LmxvdztcblxuXHQgICAgICAgICAgICAgICAgICAgIHZhciBXaTE2ICA9IFdbaSAtIDE2XTtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgV2kxNmggPSBXaTE2LmhpZ2g7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIFdpMTZsID0gV2kxNi5sb3c7XG5cblx0ICAgICAgICAgICAgICAgICAgICBXaWwgPSBnYW1tYTBsICsgV2k3bDtcblx0ICAgICAgICAgICAgICAgICAgICBXaWggPSBnYW1tYTBoICsgV2k3aCArICgoV2lsID4+PiAwKSA8IChnYW1tYTBsID4+PiAwKSA/IDEgOiAwKTtcblx0ICAgICAgICAgICAgICAgICAgICBXaWwgPSBXaWwgKyBnYW1tYTFsO1xuXHQgICAgICAgICAgICAgICAgICAgIFdpaCA9IFdpaCArIGdhbW1hMWggKyAoKFdpbCA+Pj4gMCkgPCAoZ2FtbWExbCA+Pj4gMCkgPyAxIDogMCk7XG5cdCAgICAgICAgICAgICAgICAgICAgV2lsID0gV2lsICsgV2kxNmw7XG5cdCAgICAgICAgICAgICAgICAgICAgV2loID0gV2loICsgV2kxNmggKyAoKFdpbCA+Pj4gMCkgPCAoV2kxNmwgPj4+IDApID8gMSA6IDApO1xuXG5cdCAgICAgICAgICAgICAgICAgICAgV2kuaGlnaCA9IFdpaDtcblx0ICAgICAgICAgICAgICAgICAgICBXaS5sb3cgID0gV2lsO1xuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICB2YXIgY2hoICA9IChlaCAmIGZoKSBeICh+ZWggJiBnaCk7XG5cdCAgICAgICAgICAgICAgICB2YXIgY2hsICA9IChlbCAmIGZsKSBeICh+ZWwgJiBnbCk7XG5cdCAgICAgICAgICAgICAgICB2YXIgbWFqaCA9IChhaCAmIGJoKSBeIChhaCAmIGNoKSBeIChiaCAmIGNoKTtcblx0ICAgICAgICAgICAgICAgIHZhciBtYWpsID0gKGFsICYgYmwpIF4gKGFsICYgY2wpIF4gKGJsICYgY2wpO1xuXG5cdCAgICAgICAgICAgICAgICB2YXIgc2lnbWEwaCA9ICgoYWggPj4+IDI4KSB8IChhbCA8PCA0KSkgIF4gKChhaCA8PCAzMCkgIHwgKGFsID4+PiAyKSkgXiAoKGFoIDw8IDI1KSB8IChhbCA+Pj4gNykpO1xuXHQgICAgICAgICAgICAgICAgdmFyIHNpZ21hMGwgPSAoKGFsID4+PiAyOCkgfCAoYWggPDwgNCkpICBeICgoYWwgPDwgMzApICB8IChhaCA+Pj4gMikpIF4gKChhbCA8PCAyNSkgfCAoYWggPj4+IDcpKTtcblx0ICAgICAgICAgICAgICAgIHZhciBzaWdtYTFoID0gKChlaCA+Pj4gMTQpIHwgKGVsIDw8IDE4KSkgXiAoKGVoID4+PiAxOCkgfCAoZWwgPDwgMTQpKSBeICgoZWggPDwgMjMpIHwgKGVsID4+PiA5KSk7XG5cdCAgICAgICAgICAgICAgICB2YXIgc2lnbWExbCA9ICgoZWwgPj4+IDE0KSB8IChlaCA8PCAxOCkpIF4gKChlbCA+Pj4gMTgpIHwgKGVoIDw8IDE0KSkgXiAoKGVsIDw8IDIzKSB8IChlaCA+Pj4gOSkpO1xuXG5cdCAgICAgICAgICAgICAgICAvLyB0MSA9IGggKyBzaWdtYTEgKyBjaCArIEtbaV0gKyBXW2ldXG5cdCAgICAgICAgICAgICAgICB2YXIgS2kgID0gS1tpXTtcblx0ICAgICAgICAgICAgICAgIHZhciBLaWggPSBLaS5oaWdoO1xuXHQgICAgICAgICAgICAgICAgdmFyIEtpbCA9IEtpLmxvdztcblxuXHQgICAgICAgICAgICAgICAgdmFyIHQxbCA9IGhsICsgc2lnbWExbDtcblx0ICAgICAgICAgICAgICAgIHZhciB0MWggPSBoaCArIHNpZ21hMWggKyAoKHQxbCA+Pj4gMCkgPCAoaGwgPj4+IDApID8gMSA6IDApO1xuXHQgICAgICAgICAgICAgICAgdmFyIHQxbCA9IHQxbCArIGNobDtcblx0ICAgICAgICAgICAgICAgIHZhciB0MWggPSB0MWggKyBjaGggKyAoKHQxbCA+Pj4gMCkgPCAoY2hsID4+PiAwKSA/IDEgOiAwKTtcblx0ICAgICAgICAgICAgICAgIHZhciB0MWwgPSB0MWwgKyBLaWw7XG5cdCAgICAgICAgICAgICAgICB2YXIgdDFoID0gdDFoICsgS2loICsgKCh0MWwgPj4+IDApIDwgKEtpbCA+Pj4gMCkgPyAxIDogMCk7XG5cdCAgICAgICAgICAgICAgICB2YXIgdDFsID0gdDFsICsgV2lsO1xuXHQgICAgICAgICAgICAgICAgdmFyIHQxaCA9IHQxaCArIFdpaCArICgodDFsID4+PiAwKSA8IChXaWwgPj4+IDApID8gMSA6IDApO1xuXG5cdCAgICAgICAgICAgICAgICAvLyB0MiA9IHNpZ21hMCArIG1halxuXHQgICAgICAgICAgICAgICAgdmFyIHQybCA9IHNpZ21hMGwgKyBtYWpsO1xuXHQgICAgICAgICAgICAgICAgdmFyIHQyaCA9IHNpZ21hMGggKyBtYWpoICsgKCh0MmwgPj4+IDApIDwgKHNpZ21hMGwgPj4+IDApID8gMSA6IDApO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBVcGRhdGUgd29ya2luZyB2YXJpYWJsZXNcblx0ICAgICAgICAgICAgICAgIGhoID0gZ2g7XG5cdCAgICAgICAgICAgICAgICBobCA9IGdsO1xuXHQgICAgICAgICAgICAgICAgZ2ggPSBmaDtcblx0ICAgICAgICAgICAgICAgIGdsID0gZmw7XG5cdCAgICAgICAgICAgICAgICBmaCA9IGVoO1xuXHQgICAgICAgICAgICAgICAgZmwgPSBlbDtcblx0ICAgICAgICAgICAgICAgIGVsID0gKGRsICsgdDFsKSB8IDA7XG5cdCAgICAgICAgICAgICAgICBlaCA9IChkaCArIHQxaCArICgoZWwgPj4+IDApIDwgKGRsID4+PiAwKSA/IDEgOiAwKSkgfCAwO1xuXHQgICAgICAgICAgICAgICAgZGggPSBjaDtcblx0ICAgICAgICAgICAgICAgIGRsID0gY2w7XG5cdCAgICAgICAgICAgICAgICBjaCA9IGJoO1xuXHQgICAgICAgICAgICAgICAgY2wgPSBibDtcblx0ICAgICAgICAgICAgICAgIGJoID0gYWg7XG5cdCAgICAgICAgICAgICAgICBibCA9IGFsO1xuXHQgICAgICAgICAgICAgICAgYWwgPSAodDFsICsgdDJsKSB8IDA7XG5cdCAgICAgICAgICAgICAgICBhaCA9ICh0MWggKyB0MmggKyAoKGFsID4+PiAwKSA8ICh0MWwgPj4+IDApID8gMSA6IDApKSB8IDA7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBJbnRlcm1lZGlhdGUgaGFzaCB2YWx1ZVxuXHQgICAgICAgICAgICBIMGwgPSBIMC5sb3cgID0gKEgwbCArIGFsKTtcblx0ICAgICAgICAgICAgSDAuaGlnaCA9IChIMGggKyBhaCArICgoSDBsID4+PiAwKSA8IChhbCA+Pj4gMCkgPyAxIDogMCkpO1xuXHQgICAgICAgICAgICBIMWwgPSBIMS5sb3cgID0gKEgxbCArIGJsKTtcblx0ICAgICAgICAgICAgSDEuaGlnaCA9IChIMWggKyBiaCArICgoSDFsID4+PiAwKSA8IChibCA+Pj4gMCkgPyAxIDogMCkpO1xuXHQgICAgICAgICAgICBIMmwgPSBIMi5sb3cgID0gKEgybCArIGNsKTtcblx0ICAgICAgICAgICAgSDIuaGlnaCA9IChIMmggKyBjaCArICgoSDJsID4+PiAwKSA8IChjbCA+Pj4gMCkgPyAxIDogMCkpO1xuXHQgICAgICAgICAgICBIM2wgPSBIMy5sb3cgID0gKEgzbCArIGRsKTtcblx0ICAgICAgICAgICAgSDMuaGlnaCA9IChIM2ggKyBkaCArICgoSDNsID4+PiAwKSA8IChkbCA+Pj4gMCkgPyAxIDogMCkpO1xuXHQgICAgICAgICAgICBINGwgPSBINC5sb3cgID0gKEg0bCArIGVsKTtcblx0ICAgICAgICAgICAgSDQuaGlnaCA9IChINGggKyBlaCArICgoSDRsID4+PiAwKSA8IChlbCA+Pj4gMCkgPyAxIDogMCkpO1xuXHQgICAgICAgICAgICBINWwgPSBINS5sb3cgID0gKEg1bCArIGZsKTtcblx0ICAgICAgICAgICAgSDUuaGlnaCA9IChINWggKyBmaCArICgoSDVsID4+PiAwKSA8IChmbCA+Pj4gMCkgPyAxIDogMCkpO1xuXHQgICAgICAgICAgICBINmwgPSBINi5sb3cgID0gKEg2bCArIGdsKTtcblx0ICAgICAgICAgICAgSDYuaGlnaCA9IChINmggKyBnaCArICgoSDZsID4+PiAwKSA8IChnbCA+Pj4gMCkgPyAxIDogMCkpO1xuXHQgICAgICAgICAgICBIN2wgPSBINy5sb3cgID0gKEg3bCArIGhsKTtcblx0ICAgICAgICAgICAgSDcuaGlnaCA9IChIN2ggKyBoaCArICgoSDdsID4+PiAwKSA8IChobCA+Pj4gMCkgPyAxIDogMCkpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfZG9GaW5hbGl6ZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLl9kYXRhO1xuXHQgICAgICAgICAgICB2YXIgZGF0YVdvcmRzID0gZGF0YS53b3JkcztcblxuXHQgICAgICAgICAgICB2YXIgbkJpdHNUb3RhbCA9IHRoaXMuX25EYXRhQnl0ZXMgKiA4O1xuXHQgICAgICAgICAgICB2YXIgbkJpdHNMZWZ0ID0gZGF0YS5zaWdCeXRlcyAqIDg7XG5cblx0ICAgICAgICAgICAgLy8gQWRkIHBhZGRpbmdcblx0ICAgICAgICAgICAgZGF0YVdvcmRzW25CaXRzTGVmdCA+Pj4gNV0gfD0gMHg4MCA8PCAoMjQgLSBuQml0c0xlZnQgJSAzMik7XG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1soKChuQml0c0xlZnQgKyAxMjgpID4+PiAxMCkgPDwgNSkgKyAzMF0gPSBNYXRoLmZsb29yKG5CaXRzVG90YWwgLyAweDEwMDAwMDAwMCk7XG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1soKChuQml0c0xlZnQgKyAxMjgpID4+PiAxMCkgPDwgNSkgKyAzMV0gPSBuQml0c1RvdGFsO1xuXHQgICAgICAgICAgICBkYXRhLnNpZ0J5dGVzID0gZGF0YVdvcmRzLmxlbmd0aCAqIDQ7XG5cblx0ICAgICAgICAgICAgLy8gSGFzaCBmaW5hbCBibG9ja3Ncblx0ICAgICAgICAgICAgdGhpcy5fcHJvY2VzcygpO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnQgaGFzaCB0byAzMi1iaXQgd29yZCBhcnJheSBiZWZvcmUgcmV0dXJuaW5nXG5cdCAgICAgICAgICAgIHZhciBoYXNoID0gdGhpcy5faGFzaC50b1gzMigpO1xuXG5cdCAgICAgICAgICAgIC8vIFJldHVybiBmaW5hbCBjb21wdXRlZCBoYXNoXG5cdCAgICAgICAgICAgIHJldHVybiBoYXNoO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBjbG9uZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICB2YXIgY2xvbmUgPSBIYXNoZXIuY2xvbmUuY2FsbCh0aGlzKTtcblx0ICAgICAgICAgICAgY2xvbmUuX2hhc2ggPSB0aGlzLl9oYXNoLmNsb25lKCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBibG9ja1NpemU6IDEwMjQvMzJcblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBoYXNoZXIncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICpcblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBoYXNoLlxuXHQgICAgICpcblx0ICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGhhc2guXG5cdCAgICAgKlxuXHQgICAgICogQHN0YXRpY1xuXHQgICAgICpcblx0ICAgICAqIEBleGFtcGxlXG5cdCAgICAgKlxuXHQgICAgICogICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuU0hBNTEyKCdtZXNzYWdlJyk7XG5cdCAgICAgKiAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5TSEE1MTIod29yZEFycmF5KTtcblx0ICAgICAqL1xuXHQgICAgQy5TSEE1MTIgPSBIYXNoZXIuX2NyZWF0ZUhlbHBlcihTSEE1MTIpO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBITUFDJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30ga2V5IFRoZSBzZWNyZXQga2V5LlxuXHQgICAgICpcblx0ICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIEhNQUMuXG5cdCAgICAgKlxuXHQgICAgICogQHN0YXRpY1xuXHQgICAgICpcblx0ICAgICAqIEBleGFtcGxlXG5cdCAgICAgKlxuXHQgICAgICogICAgIHZhciBobWFjID0gQ3J5cHRvSlMuSG1hY1NIQTUxMihtZXNzYWdlLCBrZXkpO1xuXHQgICAgICovXG5cdCAgICBDLkhtYWNTSEE1MTIgPSBIYXNoZXIuX2NyZWF0ZUhtYWNIZWxwZXIoU0hBNTEyKTtcblx0fSgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUy5TSEE1MTI7XG5cbn0pKTsiLCAiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSwgdW5kZWYpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIiksIHJlcXVpcmUoXCIuL3g2NC1jb3JlXCIpLCByZXF1aXJlKFwiLi9zaGE1MTJcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiLCBcIi4veDY0LWNvcmVcIiwgXCIuL3NoYTUxMlwiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0KGZ1bmN0aW9uICgpIHtcblx0ICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgdmFyIEMgPSBDcnlwdG9KUztcblx0ICAgIHZhciBDX3g2NCA9IEMueDY0O1xuXHQgICAgdmFyIFg2NFdvcmQgPSBDX3g2NC5Xb3JkO1xuXHQgICAgdmFyIFg2NFdvcmRBcnJheSA9IENfeDY0LldvcmRBcnJheTtcblx0ICAgIHZhciBDX2FsZ28gPSBDLmFsZ287XG5cdCAgICB2YXIgU0hBNTEyID0gQ19hbGdvLlNIQTUxMjtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTSEEtMzg0IGhhc2ggYWxnb3JpdGhtLlxuXHQgICAgICovXG5cdCAgICB2YXIgU0hBMzg0ID0gQ19hbGdvLlNIQTM4NCA9IFNIQTUxMi5leHRlbmQoe1xuXHQgICAgICAgIF9kb1Jlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHRoaXMuX2hhc2ggPSBuZXcgWDY0V29yZEFycmF5LmluaXQoW1xuXHQgICAgICAgICAgICAgICAgbmV3IFg2NFdvcmQuaW5pdCgweGNiYmI5ZDVkLCAweGMxMDU5ZWQ4KSwgbmV3IFg2NFdvcmQuaW5pdCgweDYyOWEyOTJhLCAweDM2N2NkNTA3KSxcblx0ICAgICAgICAgICAgICAgIG5ldyBYNjRXb3JkLmluaXQoMHg5MTU5MDE1YSwgMHgzMDcwZGQxNyksIG5ldyBYNjRXb3JkLmluaXQoMHgxNTJmZWNkOCwgMHhmNzBlNTkzOSksXG5cdCAgICAgICAgICAgICAgICBuZXcgWDY0V29yZC5pbml0KDB4NjczMzI2NjcsIDB4ZmZjMDBiMzEpLCBuZXcgWDY0V29yZC5pbml0KDB4OGViNDRhODcsIDB4Njg1ODE1MTEpLFxuXHQgICAgICAgICAgICAgICAgbmV3IFg2NFdvcmQuaW5pdCgweGRiMGMyZTBkLCAweDY0Zjk4ZmE3KSwgbmV3IFg2NFdvcmQuaW5pdCgweDQ3YjU0ODFkLCAweGJlZmE0ZmE0KVxuXHQgICAgICAgICAgICBdKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgX2RvRmluYWxpemU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdmFyIGhhc2ggPSBTSEE1MTIuX2RvRmluYWxpemUuY2FsbCh0aGlzKTtcblxuXHQgICAgICAgICAgICBoYXNoLnNpZ0J5dGVzIC09IDE2O1xuXG5cdCAgICAgICAgICAgIHJldHVybiBoYXNoO1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBoYXNoZXIncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICpcblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBoYXNoLlxuXHQgICAgICpcblx0ICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGhhc2guXG5cdCAgICAgKlxuXHQgICAgICogQHN0YXRpY1xuXHQgICAgICpcblx0ICAgICAqIEBleGFtcGxlXG5cdCAgICAgKlxuXHQgICAgICogICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuU0hBMzg0KCdtZXNzYWdlJyk7XG5cdCAgICAgKiAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5TSEEzODQod29yZEFycmF5KTtcblx0ICAgICAqL1xuXHQgICAgQy5TSEEzODQgPSBTSEE1MTIuX2NyZWF0ZUhlbHBlcihTSEEzODQpO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBITUFDJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30ga2V5IFRoZSBzZWNyZXQga2V5LlxuXHQgICAgICpcblx0ICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIEhNQUMuXG5cdCAgICAgKlxuXHQgICAgICogQHN0YXRpY1xuXHQgICAgICpcblx0ICAgICAqIEBleGFtcGxlXG5cdCAgICAgKlxuXHQgICAgICogICAgIHZhciBobWFjID0gQ3J5cHRvSlMuSG1hY1NIQTM4NChtZXNzYWdlLCBrZXkpO1xuXHQgICAgICovXG5cdCAgICBDLkhtYWNTSEEzODQgPSBTSEE1MTIuX2NyZWF0ZUhtYWNIZWxwZXIoU0hBMzg0KTtcblx0fSgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUy5TSEEzODQ7XG5cbn0pKTsiLCAiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSwgdW5kZWYpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIiksIHJlcXVpcmUoXCIuL3g2NC1jb3JlXCIpKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXCIuL2NvcmVcIiwgXCIuL3g2NC1jb3JlXCJdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcblxuXHQoZnVuY3Rpb24gKE1hdGgpIHtcblx0ICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgdmFyIEMgPSBDcnlwdG9KUztcblx0ICAgIHZhciBDX2xpYiA9IEMubGliO1xuXHQgICAgdmFyIFdvcmRBcnJheSA9IENfbGliLldvcmRBcnJheTtcblx0ICAgIHZhciBIYXNoZXIgPSBDX2xpYi5IYXNoZXI7XG5cdCAgICB2YXIgQ194NjQgPSBDLng2NDtcblx0ICAgIHZhciBYNjRXb3JkID0gQ194NjQuV29yZDtcblx0ICAgIHZhciBDX2FsZ28gPSBDLmFsZ287XG5cblx0ICAgIC8vIENvbnN0YW50cyB0YWJsZXNcblx0ICAgIHZhciBSSE9fT0ZGU0VUUyA9IFtdO1xuXHQgICAgdmFyIFBJX0lOREVYRVMgID0gW107XG5cdCAgICB2YXIgUk9VTkRfQ09OU1RBTlRTID0gW107XG5cblx0ICAgIC8vIENvbXB1dGUgQ29uc3RhbnRzXG5cdCAgICAoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIC8vIENvbXB1dGUgcmhvIG9mZnNldCBjb25zdGFudHNcblx0ICAgICAgICB2YXIgeCA9IDEsIHkgPSAwO1xuXHQgICAgICAgIGZvciAodmFyIHQgPSAwOyB0IDwgMjQ7IHQrKykge1xuXHQgICAgICAgICAgICBSSE9fT0ZGU0VUU1t4ICsgNSAqIHldID0gKCh0ICsgMSkgKiAodCArIDIpIC8gMikgJSA2NDtcblxuXHQgICAgICAgICAgICB2YXIgbmV3WCA9IHkgJSA1O1xuXHQgICAgICAgICAgICB2YXIgbmV3WSA9ICgyICogeCArIDMgKiB5KSAlIDU7XG5cdCAgICAgICAgICAgIHggPSBuZXdYO1xuXHQgICAgICAgICAgICB5ID0gbmV3WTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICAvLyBDb21wdXRlIHBpIGluZGV4IGNvbnN0YW50c1xuXHQgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgNTsgeCsrKSB7XG5cdCAgICAgICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgNTsgeSsrKSB7XG5cdCAgICAgICAgICAgICAgICBQSV9JTkRFWEVTW3ggKyA1ICogeV0gPSB5ICsgKCgyICogeCArIDMgKiB5KSAlIDUpICogNTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblxuXHQgICAgICAgIC8vIENvbXB1dGUgcm91bmQgY29uc3RhbnRzXG5cdCAgICAgICAgdmFyIExGU1IgPSAweDAxO1xuXHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjQ7IGkrKykge1xuXHQgICAgICAgICAgICB2YXIgcm91bmRDb25zdGFudE1zdyA9IDA7XG5cdCAgICAgICAgICAgIHZhciByb3VuZENvbnN0YW50THN3ID0gMDtcblxuXHQgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDc7IGorKykge1xuXHQgICAgICAgICAgICAgICAgaWYgKExGU1IgJiAweDAxKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGJpdFBvc2l0aW9uID0gKDEgPDwgaikgLSAxO1xuXHQgICAgICAgICAgICAgICAgICAgIGlmIChiaXRQb3NpdGlvbiA8IDMyKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kQ29uc3RhbnRMc3cgXj0gMSA8PCBiaXRQb3NpdGlvbjtcblx0ICAgICAgICAgICAgICAgICAgICB9IGVsc2UgLyogaWYgKGJpdFBvc2l0aW9uID49IDMyKSAqLyB7XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kQ29uc3RhbnRNc3cgXj0gMSA8PCAoYml0UG9zaXRpb24gLSAzMik7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAvLyBDb21wdXRlIG5leHQgTEZTUlxuXHQgICAgICAgICAgICAgICAgaWYgKExGU1IgJiAweDgwKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgLy8gUHJpbWl0aXZlIHBvbHlub21pYWwgb3ZlciBHRigyKTogeF44ICsgeF42ICsgeF41ICsgeF40ICsgMVxuXHQgICAgICAgICAgICAgICAgICAgIExGU1IgPSAoTEZTUiA8PCAxKSBeIDB4NzE7XG5cdCAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgIExGU1IgPDw9IDE7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICBST1VORF9DT05TVEFOVFNbaV0gPSBYNjRXb3JkLmNyZWF0ZShyb3VuZENvbnN0YW50TXN3LCByb3VuZENvbnN0YW50THN3KTtcblx0ICAgICAgICB9XG5cdCAgICB9KCkpO1xuXG5cdCAgICAvLyBSZXVzYWJsZSBvYmplY3RzIGZvciB0ZW1wb3JhcnkgdmFsdWVzXG5cdCAgICB2YXIgVCA9IFtdO1xuXHQgICAgKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI1OyBpKyspIHtcblx0ICAgICAgICAgICAgVFtpXSA9IFg2NFdvcmQuY3JlYXRlKCk7XG5cdCAgICAgICAgfVxuXHQgICAgfSgpKTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTSEEtMyBoYXNoIGFsZ29yaXRobS5cblx0ICAgICAqL1xuXHQgICAgdmFyIFNIQTMgPSBDX2FsZ28uU0hBMyA9IEhhc2hlci5leHRlbmQoe1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbmZpZ3VyYXRpb24gb3B0aW9ucy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBvdXRwdXRMZW5ndGhcblx0ICAgICAgICAgKiAgIFRoZSBkZXNpcmVkIG51bWJlciBvZiBiaXRzIGluIHRoZSBvdXRwdXQgaGFzaC5cblx0ICAgICAgICAgKiAgIE9ubHkgdmFsdWVzIHBlcm1pdHRlZCBhcmU6IDIyNCwgMjU2LCAzODQsIDUxMi5cblx0ICAgICAgICAgKiAgIERlZmF1bHQ6IDUxMlxuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNmZzogSGFzaGVyLmNmZy5leHRlbmQoe1xuXHQgICAgICAgICAgICBvdXRwdXRMZW5ndGg6IDUxMlxuXHQgICAgICAgIH0pLFxuXG5cdCAgICAgICAgX2RvUmVzZXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdmFyIHN0YXRlID0gdGhpcy5fc3RhdGUgPSBbXVxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI1OyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIHN0YXRlW2ldID0gbmV3IFg2NFdvcmQuaW5pdCgpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgdGhpcy5ibG9ja1NpemUgPSAoMTYwMCAtIDIgKiB0aGlzLmNmZy5vdXRwdXRMZW5ndGgpIC8gMzI7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9kb1Byb2Nlc3NCbG9jazogZnVuY3Rpb24gKE0sIG9mZnNldCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIHN0YXRlID0gdGhpcy5fc3RhdGU7XG5cdCAgICAgICAgICAgIHZhciBuQmxvY2tTaXplTGFuZXMgPSB0aGlzLmJsb2NrU2l6ZSAvIDI7XG5cblx0ICAgICAgICAgICAgLy8gQWJzb3JiXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbkJsb2NrU2l6ZUxhbmVzOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICAgICAgdmFyIE0yaSAgPSBNW29mZnNldCArIDIgKiBpXTtcblx0ICAgICAgICAgICAgICAgIHZhciBNMmkxID0gTVtvZmZzZXQgKyAyICogaSArIDFdO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBTd2FwIGVuZGlhblxuXHQgICAgICAgICAgICAgICAgTTJpID0gKFxuXHQgICAgICAgICAgICAgICAgICAgICgoKE0yaSA8PCA4KSAgfCAoTTJpID4+PiAyNCkpICYgMHgwMGZmMDBmZikgfFxuXHQgICAgICAgICAgICAgICAgICAgICgoKE0yaSA8PCAyNCkgfCAoTTJpID4+PiA4KSkgICYgMHhmZjAwZmYwMClcblx0ICAgICAgICAgICAgICAgICk7XG5cdCAgICAgICAgICAgICAgICBNMmkxID0gKFxuXHQgICAgICAgICAgICAgICAgICAgICgoKE0yaTEgPDwgOCkgIHwgKE0yaTEgPj4+IDI0KSkgJiAweDAwZmYwMGZmKSB8XG5cdCAgICAgICAgICAgICAgICAgICAgKCgoTTJpMSA8PCAyNCkgfCAoTTJpMSA+Pj4gOCkpICAmIDB4ZmYwMGZmMDApXG5cdCAgICAgICAgICAgICAgICApO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBBYnNvcmIgbWVzc2FnZSBpbnRvIHN0YXRlXG5cdCAgICAgICAgICAgICAgICB2YXIgbGFuZSA9IHN0YXRlW2ldO1xuXHQgICAgICAgICAgICAgICAgbGFuZS5oaWdoIF49IE0yaTE7XG5cdCAgICAgICAgICAgICAgICBsYW5lLmxvdyAgXj0gTTJpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gUm91bmRzXG5cdCAgICAgICAgICAgIGZvciAodmFyIHJvdW5kID0gMDsgcm91bmQgPCAyNDsgcm91bmQrKykge1xuXHQgICAgICAgICAgICAgICAgLy8gVGhldGFcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgNTsgeCsrKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgLy8gTWl4IGNvbHVtbiBsYW5lc1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciB0TXN3ID0gMCwgdExzdyA9IDA7XG5cdCAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCA1OyB5KyspIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxhbmUgPSBzdGF0ZVt4ICsgNSAqIHldO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0TXN3IF49IGxhbmUuaGlnaDtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdExzdyBePSBsYW5lLmxvdztcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgICAgICAvLyBUZW1wb3JhcnkgdmFsdWVzXG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIFR4ID0gVFt4XTtcblx0ICAgICAgICAgICAgICAgICAgICBUeC5oaWdoID0gdE1zdztcblx0ICAgICAgICAgICAgICAgICAgICBUeC5sb3cgID0gdExzdztcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgNTsgeCsrKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIFR4NCA9IFRbKHggKyA0KSAlIDVdO1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciBUeDEgPSBUWyh4ICsgMSkgJSA1XTtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgVHgxTXN3ID0gVHgxLmhpZ2g7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIFR4MUxzdyA9IFR4MS5sb3c7XG5cblx0ICAgICAgICAgICAgICAgICAgICAvLyBNaXggc3Vycm91bmRpbmcgY29sdW1uc1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciB0TXN3ID0gVHg0LmhpZ2ggXiAoKFR4MU1zdyA8PCAxKSB8IChUeDFMc3cgPj4+IDMxKSk7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIHRMc3cgPSBUeDQubG93ICBeICgoVHgxTHN3IDw8IDEpIHwgKFR4MU1zdyA+Pj4gMzEpKTtcblx0ICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IDU7IHkrKykge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGFuZSA9IHN0YXRlW3ggKyA1ICogeV07XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGxhbmUuaGlnaCBePSB0TXN3O1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBsYW5lLmxvdyAgXj0gdExzdztcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIC8vIFJobyBQaVxuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgbGFuZUluZGV4ID0gMTsgbGFuZUluZGV4IDwgMjU7IGxhbmVJbmRleCsrKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIHRNc3c7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIHRMc3c7XG5cblx0ICAgICAgICAgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgbGFuZSA9IHN0YXRlW2xhbmVJbmRleF07XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGxhbmVNc3cgPSBsYW5lLmhpZ2g7XG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGxhbmVMc3cgPSBsYW5lLmxvdztcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgcmhvT2Zmc2V0ID0gUkhPX09GRlNFVFNbbGFuZUluZGV4XTtcblxuXHQgICAgICAgICAgICAgICAgICAgIC8vIFJvdGF0ZSBsYW5lc1xuXHQgICAgICAgICAgICAgICAgICAgIGlmIChyaG9PZmZzZXQgPCAzMikge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0TXN3ID0gKGxhbmVNc3cgPDwgcmhvT2Zmc2V0KSB8IChsYW5lTHN3ID4+PiAoMzIgLSByaG9PZmZzZXQpKTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdExzdyA9IChsYW5lTHN3IDw8IHJob09mZnNldCkgfCAobGFuZU1zdyA+Pj4gKDMyIC0gcmhvT2Zmc2V0KSk7XG5cdCAgICAgICAgICAgICAgICAgICAgfSBlbHNlIC8qIGlmIChyaG9PZmZzZXQgPj0gMzIpICovIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdE1zdyA9IChsYW5lTHN3IDw8IChyaG9PZmZzZXQgLSAzMikpIHwgKGxhbmVNc3cgPj4+ICg2NCAtIHJob09mZnNldCkpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB0THN3ID0gKGxhbmVNc3cgPDwgKHJob09mZnNldCAtIDMyKSkgfCAobGFuZUxzdyA+Pj4gKDY0IC0gcmhvT2Zmc2V0KSk7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAgICAgLy8gVHJhbnNwb3NlIGxhbmVzXG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIFRQaUxhbmUgPSBUW1BJX0lOREVYRVNbbGFuZUluZGV4XV07XG5cdCAgICAgICAgICAgICAgICAgICAgVFBpTGFuZS5oaWdoID0gdE1zdztcblx0ICAgICAgICAgICAgICAgICAgICBUUGlMYW5lLmxvdyAgPSB0THN3O1xuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAvLyBSaG8gcGkgYXQgeCA9IHkgPSAwXG5cdCAgICAgICAgICAgICAgICB2YXIgVDAgPSBUWzBdO1xuXHQgICAgICAgICAgICAgICAgdmFyIHN0YXRlMCA9IHN0YXRlWzBdO1xuXHQgICAgICAgICAgICAgICAgVDAuaGlnaCA9IHN0YXRlMC5oaWdoO1xuXHQgICAgICAgICAgICAgICAgVDAubG93ICA9IHN0YXRlMC5sb3c7XG5cblx0ICAgICAgICAgICAgICAgIC8vIENoaVxuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCA1OyB4KyspIHtcblx0ICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IDU7IHkrKykge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxhbmVJbmRleCA9IHggKyA1ICogeTtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxhbmUgPSBzdGF0ZVtsYW5lSW5kZXhdO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB2YXIgVExhbmUgPSBUW2xhbmVJbmRleF07XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHZhciBUeDFMYW5lID0gVFsoKHggKyAxKSAlIDUpICsgNSAqIHldO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICB2YXIgVHgyTGFuZSA9IFRbKCh4ICsgMikgJSA1KSArIDUgKiB5XTtcblxuXHQgICAgICAgICAgICAgICAgICAgICAgICAvLyBNaXggcm93c1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBsYW5lLmhpZ2ggPSBUTGFuZS5oaWdoIF4gKH5UeDFMYW5lLmhpZ2ggJiBUeDJMYW5lLmhpZ2gpO1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBsYW5lLmxvdyAgPSBUTGFuZS5sb3cgIF4gKH5UeDFMYW5lLmxvdyAgJiBUeDJMYW5lLmxvdyk7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAvLyBJb3RhXG5cdCAgICAgICAgICAgICAgICB2YXIgbGFuZSA9IHN0YXRlWzBdO1xuXHQgICAgICAgICAgICAgICAgdmFyIHJvdW5kQ29uc3RhbnQgPSBST1VORF9DT05TVEFOVFNbcm91bmRdO1xuXHQgICAgICAgICAgICAgICAgbGFuZS5oaWdoIF49IHJvdW5kQ29uc3RhbnQuaGlnaDtcblx0ICAgICAgICAgICAgICAgIGxhbmUubG93ICBePSByb3VuZENvbnN0YW50Lmxvdztcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfZG9GaW5hbGl6ZTogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLl9kYXRhO1xuXHQgICAgICAgICAgICB2YXIgZGF0YVdvcmRzID0gZGF0YS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIG5CaXRzVG90YWwgPSB0aGlzLl9uRGF0YUJ5dGVzICogODtcblx0ICAgICAgICAgICAgdmFyIG5CaXRzTGVmdCA9IGRhdGEuc2lnQnl0ZXMgKiA4O1xuXHQgICAgICAgICAgICB2YXIgYmxvY2tTaXplQml0cyA9IHRoaXMuYmxvY2tTaXplICogMzI7XG5cblx0ICAgICAgICAgICAgLy8gQWRkIHBhZGRpbmdcblx0ICAgICAgICAgICAgZGF0YVdvcmRzW25CaXRzTGVmdCA+Pj4gNV0gfD0gMHgxIDw8ICgyNCAtIG5CaXRzTGVmdCAlIDMyKTtcblx0ICAgICAgICAgICAgZGF0YVdvcmRzWygoTWF0aC5jZWlsKChuQml0c0xlZnQgKyAxKSAvIGJsb2NrU2l6ZUJpdHMpICogYmxvY2tTaXplQml0cykgPj4+IDUpIC0gMV0gfD0gMHg4MDtcblx0ICAgICAgICAgICAgZGF0YS5zaWdCeXRlcyA9IGRhdGFXb3Jkcy5sZW5ndGggKiA0O1xuXG5cdCAgICAgICAgICAgIC8vIEhhc2ggZmluYWwgYmxvY2tzXG5cdCAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3MoKTtcblxuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIHN0YXRlID0gdGhpcy5fc3RhdGU7XG5cdCAgICAgICAgICAgIHZhciBvdXRwdXRMZW5ndGhCeXRlcyA9IHRoaXMuY2ZnLm91dHB1dExlbmd0aCAvIDg7XG5cdCAgICAgICAgICAgIHZhciBvdXRwdXRMZW5ndGhMYW5lcyA9IG91dHB1dExlbmd0aEJ5dGVzIC8gODtcblxuXHQgICAgICAgICAgICAvLyBTcXVlZXplXG5cdCAgICAgICAgICAgIHZhciBoYXNoV29yZHMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvdXRwdXRMZW5ndGhMYW5lczsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgICAgIHZhciBsYW5lID0gc3RhdGVbaV07XG5cdCAgICAgICAgICAgICAgICB2YXIgbGFuZU1zdyA9IGxhbmUuaGlnaDtcblx0ICAgICAgICAgICAgICAgIHZhciBsYW5lTHN3ID0gbGFuZS5sb3c7XG5cblx0ICAgICAgICAgICAgICAgIC8vIFN3YXAgZW5kaWFuXG5cdCAgICAgICAgICAgICAgICBsYW5lTXN3ID0gKFxuXHQgICAgICAgICAgICAgICAgICAgICgoKGxhbmVNc3cgPDwgOCkgIHwgKGxhbmVNc3cgPj4+IDI0KSkgJiAweDAwZmYwMGZmKSB8XG5cdCAgICAgICAgICAgICAgICAgICAgKCgobGFuZU1zdyA8PCAyNCkgfCAobGFuZU1zdyA+Pj4gOCkpICAmIDB4ZmYwMGZmMDApXG5cdCAgICAgICAgICAgICAgICApO1xuXHQgICAgICAgICAgICAgICAgbGFuZUxzdyA9IChcblx0ICAgICAgICAgICAgICAgICAgICAoKChsYW5lTHN3IDw8IDgpICB8IChsYW5lTHN3ID4+PiAyNCkpICYgMHgwMGZmMDBmZikgfFxuXHQgICAgICAgICAgICAgICAgICAgICgoKGxhbmVMc3cgPDwgMjQpIHwgKGxhbmVMc3cgPj4+IDgpKSAgJiAweGZmMDBmZjAwKVxuXHQgICAgICAgICAgICAgICAgKTtcblxuXHQgICAgICAgICAgICAgICAgLy8gU3F1ZWV6ZSBzdGF0ZSB0byByZXRyaWV2ZSBoYXNoXG5cdCAgICAgICAgICAgICAgICBoYXNoV29yZHMucHVzaChsYW5lTHN3KTtcblx0ICAgICAgICAgICAgICAgIGhhc2hXb3Jkcy5wdXNoKGxhbmVNc3cpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gUmV0dXJuIGZpbmFsIGNvbXB1dGVkIGhhc2hcblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBXb3JkQXJyYXkuaW5pdChoYXNoV29yZHMsIG91dHB1dExlbmd0aEJ5dGVzKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdmFyIGNsb25lID0gSGFzaGVyLmNsb25lLmNhbGwodGhpcyk7XG5cblx0ICAgICAgICAgICAgdmFyIHN0YXRlID0gY2xvbmUuX3N0YXRlID0gdGhpcy5fc3RhdGUuc2xpY2UoMCk7XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjU7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgc3RhdGVbaV0gPSBzdGF0ZVtpXS5jbG9uZSgpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBoYXNoZXIncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICpcblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBoYXNoLlxuXHQgICAgICpcblx0ICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGhhc2guXG5cdCAgICAgKlxuXHQgICAgICogQHN0YXRpY1xuXHQgICAgICpcblx0ICAgICAqIEBleGFtcGxlXG5cdCAgICAgKlxuXHQgICAgICogICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuU0hBMygnbWVzc2FnZScpO1xuXHQgICAgICogICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuU0hBMyh3b3JkQXJyYXkpO1xuXHQgICAgICovXG5cdCAgICBDLlNIQTMgPSBIYXNoZXIuX2NyZWF0ZUhlbHBlcihTSEEzKTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBTaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgSE1BQydzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgKlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGhhc2guXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IGtleSBUaGUgc2VjcmV0IGtleS5cblx0ICAgICAqXG5cdCAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBITUFDLlxuXHQgICAgICpcblx0ICAgICAqIEBzdGF0aWNcblx0ICAgICAqXG5cdCAgICAgKiBAZXhhbXBsZVxuXHQgICAgICpcblx0ICAgICAqICAgICB2YXIgaG1hYyA9IENyeXB0b0pTLkhtYWNTSEEzKG1lc3NhZ2UsIGtleSk7XG5cdCAgICAgKi9cblx0ICAgIEMuSG1hY1NIQTMgPSBIYXNoZXIuX2NyZWF0ZUhtYWNIZWxwZXIoU0hBMyk7XG5cdH0oTWF0aCkpO1xuXG5cblx0cmV0dXJuIENyeXB0b0pTLlNIQTM7XG5cbn0pKTsiLCAiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCJdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcblxuXHQvKiogQHByZXNlcnZlXG5cdChjKSAyMDEyIGJ5IENcdTAwRTlkcmljIE1lc25pbC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblxuXHRSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG5cblx0ICAgIC0gUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuXHQgICAgLSBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXG5cblx0VEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuXHQqL1xuXG5cdChmdW5jdGlvbiAoTWF0aCkge1xuXHQgICAgLy8gU2hvcnRjdXRzXG5cdCAgICB2YXIgQyA9IENyeXB0b0pTO1xuXHQgICAgdmFyIENfbGliID0gQy5saWI7XG5cdCAgICB2YXIgV29yZEFycmF5ID0gQ19saWIuV29yZEFycmF5O1xuXHQgICAgdmFyIEhhc2hlciA9IENfbGliLkhhc2hlcjtcblx0ICAgIHZhciBDX2FsZ28gPSBDLmFsZ287XG5cblx0ICAgIC8vIENvbnN0YW50cyB0YWJsZVxuXHQgICAgdmFyIF96bCA9IFdvcmRBcnJheS5jcmVhdGUoW1xuXHQgICAgICAgIDAsICAxLCAgMiwgIDMsICA0LCAgNSwgIDYsICA3LCAgOCwgIDksIDEwLCAxMSwgMTIsIDEzLCAxNCwgMTUsXG5cdCAgICAgICAgNywgIDQsIDEzLCAgMSwgMTAsICA2LCAxNSwgIDMsIDEyLCAgMCwgIDksICA1LCAgMiwgMTQsIDExLCAgOCxcblx0ICAgICAgICAzLCAxMCwgMTQsICA0LCAgOSwgMTUsICA4LCAgMSwgIDIsICA3LCAgMCwgIDYsIDEzLCAxMSwgIDUsIDEyLFxuXHQgICAgICAgIDEsICA5LCAxMSwgMTAsICAwLCAgOCwgMTIsICA0LCAxMywgIDMsICA3LCAxNSwgMTQsICA1LCAgNiwgIDIsXG5cdCAgICAgICAgNCwgIDAsICA1LCAgOSwgIDcsIDEyLCAgMiwgMTAsIDE0LCAgMSwgIDMsICA4LCAxMSwgIDYsIDE1LCAxM10pO1xuXHQgICAgdmFyIF96ciA9IFdvcmRBcnJheS5jcmVhdGUoW1xuXHQgICAgICAgIDUsIDE0LCAgNywgIDAsICA5LCAgMiwgMTEsICA0LCAxMywgIDYsIDE1LCAgOCwgIDEsIDEwLCAgMywgMTIsXG5cdCAgICAgICAgNiwgMTEsICAzLCAgNywgIDAsIDEzLCAgNSwgMTAsIDE0LCAxNSwgIDgsIDEyLCAgNCwgIDksICAxLCAgMixcblx0ICAgICAgICAxNSwgIDUsICAxLCAgMywgIDcsIDE0LCAgNiwgIDksIDExLCAgOCwgMTIsICAyLCAxMCwgIDAsICA0LCAxMyxcblx0ICAgICAgICA4LCAgNiwgIDQsICAxLCAgMywgMTEsIDE1LCAgMCwgIDUsIDEyLCAgMiwgMTMsICA5LCAgNywgMTAsIDE0LFxuXHQgICAgICAgIDEyLCAxNSwgMTAsICA0LCAgMSwgIDUsICA4LCAgNywgIDYsICAyLCAxMywgMTQsICAwLCAgMywgIDksIDExXSk7XG5cdCAgICB2YXIgX3NsID0gV29yZEFycmF5LmNyZWF0ZShbXG5cdCAgICAgICAgIDExLCAxNCwgMTUsIDEyLCAgNSwgIDgsICA3LCAgOSwgMTEsIDEzLCAxNCwgMTUsICA2LCAgNywgIDksICA4LFxuXHQgICAgICAgIDcsIDYsICAgOCwgMTMsIDExLCAgOSwgIDcsIDE1LCAgNywgMTIsIDE1LCAgOSwgMTEsICA3LCAxMywgMTIsXG5cdCAgICAgICAgMTEsIDEzLCAgNiwgIDcsIDE0LCAgOSwgMTMsIDE1LCAxNCwgIDgsIDEzLCAgNiwgIDUsIDEyLCAgNywgIDUsXG5cdCAgICAgICAgICAxMSwgMTIsIDE0LCAxNSwgMTQsIDE1LCAgOSwgIDgsICA5LCAxNCwgIDUsICA2LCAgOCwgIDYsICA1LCAxMixcblx0ICAgICAgICA5LCAxNSwgIDUsIDExLCAgNiwgIDgsIDEzLCAxMiwgIDUsIDEyLCAxMywgMTQsIDExLCAgOCwgIDUsICA2IF0pO1xuXHQgICAgdmFyIF9zciA9IFdvcmRBcnJheS5jcmVhdGUoW1xuXHQgICAgICAgIDgsICA5LCAgOSwgMTEsIDEzLCAxNSwgMTUsICA1LCAgNywgIDcsICA4LCAxMSwgMTQsIDE0LCAxMiwgIDYsXG5cdCAgICAgICAgOSwgMTMsIDE1LCAgNywgMTIsICA4LCAgOSwgMTEsICA3LCAgNywgMTIsICA3LCAgNiwgMTUsIDEzLCAxMSxcblx0ICAgICAgICA5LCAgNywgMTUsIDExLCAgOCwgIDYsICA2LCAxNCwgMTIsIDEzLCAgNSwgMTQsIDEzLCAxMywgIDcsICA1LFxuXHQgICAgICAgIDE1LCAgNSwgIDgsIDExLCAxNCwgMTQsICA2LCAxNCwgIDYsICA5LCAxMiwgIDksIDEyLCAgNSwgMTUsICA4LFxuXHQgICAgICAgIDgsICA1LCAxMiwgIDksIDEyLCAgNSwgMTQsICA2LCAgOCwgMTMsICA2LCAgNSwgMTUsIDEzLCAxMSwgMTEgXSk7XG5cblx0ICAgIHZhciBfaGwgPSAgV29yZEFycmF5LmNyZWF0ZShbIDB4MDAwMDAwMDAsIDB4NUE4Mjc5OTksIDB4NkVEOUVCQTEsIDB4OEYxQkJDREMsIDB4QTk1M0ZENEVdKTtcblx0ICAgIHZhciBfaHIgPSAgV29yZEFycmF5LmNyZWF0ZShbIDB4NTBBMjhCRTYsIDB4NUM0REQxMjQsIDB4NkQ3MDNFRjMsIDB4N0E2RDc2RTksIDB4MDAwMDAwMDBdKTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBSSVBFTUQxNjAgaGFzaCBhbGdvcml0aG0uXG5cdCAgICAgKi9cblx0ICAgIHZhciBSSVBFTUQxNjAgPSBDX2FsZ28uUklQRU1EMTYwID0gSGFzaGVyLmV4dGVuZCh7XG5cdCAgICAgICAgX2RvUmVzZXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdGhpcy5faGFzaCAgPSBXb3JkQXJyYXkuY3JlYXRlKFsweDY3NDUyMzAxLCAweEVGQ0RBQjg5LCAweDk4QkFEQ0ZFLCAweDEwMzI1NDc2LCAweEMzRDJFMUYwXSk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9kb1Byb2Nlc3NCbG9jazogZnVuY3Rpb24gKE0sIG9mZnNldCkge1xuXG5cdCAgICAgICAgICAgIC8vIFN3YXAgZW5kaWFuXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0X2kgPSBvZmZzZXQgKyBpO1xuXHQgICAgICAgICAgICAgICAgdmFyIE1fb2Zmc2V0X2kgPSBNW29mZnNldF9pXTtcblxuXHQgICAgICAgICAgICAgICAgLy8gU3dhcFxuXHQgICAgICAgICAgICAgICAgTVtvZmZzZXRfaV0gPSAoXG5cdCAgICAgICAgICAgICAgICAgICAgKCgoTV9vZmZzZXRfaSA8PCA4KSAgfCAoTV9vZmZzZXRfaSA+Pj4gMjQpKSAmIDB4MDBmZjAwZmYpIHxcblx0ICAgICAgICAgICAgICAgICAgICAoKChNX29mZnNldF9pIDw8IDI0KSB8IChNX29mZnNldF9pID4+PiA4KSkgICYgMHhmZjAwZmYwMClcblx0ICAgICAgICAgICAgICAgICk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgdmFyIEggID0gdGhpcy5faGFzaC53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIGhsID0gX2hsLndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgaHIgPSBfaHIud29yZHM7XG5cdCAgICAgICAgICAgIHZhciB6bCA9IF96bC53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIHpyID0gX3pyLndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgc2wgPSBfc2wud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBzciA9IF9zci53b3JkcztcblxuXHQgICAgICAgICAgICAvLyBXb3JraW5nIHZhcmlhYmxlc1xuXHQgICAgICAgICAgICB2YXIgYWwsIGJsLCBjbCwgZGwsIGVsO1xuXHQgICAgICAgICAgICB2YXIgYXIsIGJyLCBjciwgZHIsIGVyO1xuXG5cdCAgICAgICAgICAgIGFyID0gYWwgPSBIWzBdO1xuXHQgICAgICAgICAgICBiciA9IGJsID0gSFsxXTtcblx0ICAgICAgICAgICAgY3IgPSBjbCA9IEhbMl07XG5cdCAgICAgICAgICAgIGRyID0gZGwgPSBIWzNdO1xuXHQgICAgICAgICAgICBlciA9IGVsID0gSFs0XTtcblx0ICAgICAgICAgICAgLy8gQ29tcHV0YXRpb25cblx0ICAgICAgICAgICAgdmFyIHQ7XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgODA7IGkgKz0gMSkge1xuXHQgICAgICAgICAgICAgICAgdCA9IChhbCArICBNW29mZnNldCt6bFtpXV0pfDA7XG5cdCAgICAgICAgICAgICAgICBpZiAoaTwxNil7XG5cdFx0ICAgICAgICAgICAgdCArPSAgZjEoYmwsY2wsZGwpICsgaGxbMF07XG5cdCAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGk8MzIpIHtcblx0XHQgICAgICAgICAgICB0ICs9ICBmMihibCxjbCxkbCkgKyBobFsxXTtcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaTw0OCkge1xuXHRcdCAgICAgICAgICAgIHQgKz0gIGYzKGJsLGNsLGRsKSArIGhsWzJdO1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpPDY0KSB7XG5cdFx0ICAgICAgICAgICAgdCArPSAgZjQoYmwsY2wsZGwpICsgaGxbM107XG5cdCAgICAgICAgICAgICAgICB9IGVsc2Ugey8vIGlmIChpPDgwKSB7XG5cdFx0ICAgICAgICAgICAgdCArPSAgZjUoYmwsY2wsZGwpICsgaGxbNF07XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB0ID0gdHwwO1xuXHQgICAgICAgICAgICAgICAgdCA9ICByb3RsKHQsc2xbaV0pO1xuXHQgICAgICAgICAgICAgICAgdCA9ICh0K2VsKXwwO1xuXHQgICAgICAgICAgICAgICAgYWwgPSBlbDtcblx0ICAgICAgICAgICAgICAgIGVsID0gZGw7XG5cdCAgICAgICAgICAgICAgICBkbCA9IHJvdGwoY2wsIDEwKTtcblx0ICAgICAgICAgICAgICAgIGNsID0gYmw7XG5cdCAgICAgICAgICAgICAgICBibCA9IHQ7XG5cblx0ICAgICAgICAgICAgICAgIHQgPSAoYXIgKyBNW29mZnNldCt6cltpXV0pfDA7XG5cdCAgICAgICAgICAgICAgICBpZiAoaTwxNil7XG5cdFx0ICAgICAgICAgICAgdCArPSAgZjUoYnIsY3IsZHIpICsgaHJbMF07XG5cdCAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGk8MzIpIHtcblx0XHQgICAgICAgICAgICB0ICs9ICBmNChicixjcixkcikgKyBoclsxXTtcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaTw0OCkge1xuXHRcdCAgICAgICAgICAgIHQgKz0gIGYzKGJyLGNyLGRyKSArIGhyWzJdO1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpPDY0KSB7XG5cdFx0ICAgICAgICAgICAgdCArPSAgZjIoYnIsY3IsZHIpICsgaHJbM107XG5cdCAgICAgICAgICAgICAgICB9IGVsc2Ugey8vIGlmIChpPDgwKSB7XG5cdFx0ICAgICAgICAgICAgdCArPSAgZjEoYnIsY3IsZHIpICsgaHJbNF07XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB0ID0gdHwwO1xuXHQgICAgICAgICAgICAgICAgdCA9ICByb3RsKHQsc3JbaV0pIDtcblx0ICAgICAgICAgICAgICAgIHQgPSAodCtlcil8MDtcblx0ICAgICAgICAgICAgICAgIGFyID0gZXI7XG5cdCAgICAgICAgICAgICAgICBlciA9IGRyO1xuXHQgICAgICAgICAgICAgICAgZHIgPSByb3RsKGNyLCAxMCk7XG5cdCAgICAgICAgICAgICAgICBjciA9IGJyO1xuXHQgICAgICAgICAgICAgICAgYnIgPSB0O1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIC8vIEludGVybWVkaWF0ZSBoYXNoIHZhbHVlXG5cdCAgICAgICAgICAgIHQgICAgPSAoSFsxXSArIGNsICsgZHIpfDA7XG5cdCAgICAgICAgICAgIEhbMV0gPSAoSFsyXSArIGRsICsgZXIpfDA7XG5cdCAgICAgICAgICAgIEhbMl0gPSAoSFszXSArIGVsICsgYXIpfDA7XG5cdCAgICAgICAgICAgIEhbM10gPSAoSFs0XSArIGFsICsgYnIpfDA7XG5cdCAgICAgICAgICAgIEhbNF0gPSAoSFswXSArIGJsICsgY3IpfDA7XG5cdCAgICAgICAgICAgIEhbMF0gPSAgdDtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgX2RvRmluYWxpemU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5fZGF0YTtcblx0ICAgICAgICAgICAgdmFyIGRhdGFXb3JkcyA9IGRhdGEud29yZHM7XG5cblx0ICAgICAgICAgICAgdmFyIG5CaXRzVG90YWwgPSB0aGlzLl9uRGF0YUJ5dGVzICogODtcblx0ICAgICAgICAgICAgdmFyIG5CaXRzTGVmdCA9IGRhdGEuc2lnQnl0ZXMgKiA4O1xuXG5cdCAgICAgICAgICAgIC8vIEFkZCBwYWRkaW5nXG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1tuQml0c0xlZnQgPj4+IDVdIHw9IDB4ODAgPDwgKDI0IC0gbkJpdHNMZWZ0ICUgMzIpO1xuXHQgICAgICAgICAgICBkYXRhV29yZHNbKCgobkJpdHNMZWZ0ICsgNjQpID4+PiA5KSA8PCA0KSArIDE0XSA9IChcblx0ICAgICAgICAgICAgICAgICgoKG5CaXRzVG90YWwgPDwgOCkgIHwgKG5CaXRzVG90YWwgPj4+IDI0KSkgJiAweDAwZmYwMGZmKSB8XG5cdCAgICAgICAgICAgICAgICAoKChuQml0c1RvdGFsIDw8IDI0KSB8IChuQml0c1RvdGFsID4+PiA4KSkgICYgMHhmZjAwZmYwMClcblx0ICAgICAgICAgICAgKTtcblx0ICAgICAgICAgICAgZGF0YS5zaWdCeXRlcyA9IChkYXRhV29yZHMubGVuZ3RoICsgMSkgKiA0O1xuXG5cdCAgICAgICAgICAgIC8vIEhhc2ggZmluYWwgYmxvY2tzXG5cdCAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3MoKTtcblxuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIGhhc2ggPSB0aGlzLl9oYXNoO1xuXHQgICAgICAgICAgICB2YXIgSCA9IGhhc2gud29yZHM7XG5cblx0ICAgICAgICAgICAgLy8gU3dhcCBlbmRpYW5cblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA1OyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgICAgICAgICB2YXIgSF9pID0gSFtpXTtcblxuXHQgICAgICAgICAgICAgICAgLy8gU3dhcFxuXHQgICAgICAgICAgICAgICAgSFtpXSA9ICgoKEhfaSA8PCA4KSAgfCAoSF9pID4+PiAyNCkpICYgMHgwMGZmMDBmZikgfFxuXHQgICAgICAgICAgICAgICAgICAgICAgICgoKEhfaSA8PCAyNCkgfCAoSF9pID4+PiA4KSkgICYgMHhmZjAwZmYwMCk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBSZXR1cm4gZmluYWwgY29tcHV0ZWQgaGFzaFxuXHQgICAgICAgICAgICByZXR1cm4gaGFzaDtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdmFyIGNsb25lID0gSGFzaGVyLmNsb25lLmNhbGwodGhpcyk7XG5cdCAgICAgICAgICAgIGNsb25lLl9oYXNoID0gdGhpcy5faGFzaC5jbG9uZSgpO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBjbG9uZTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXG5cdCAgICBmdW5jdGlvbiBmMSh4LCB5LCB6KSB7XG5cdCAgICAgICAgcmV0dXJuICgoeCkgXiAoeSkgXiAoeikpO1xuXG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIGYyKHgsIHksIHopIHtcblx0ICAgICAgICByZXR1cm4gKCgoeCkmKHkpKSB8ICgofngpJih6KSkpO1xuXHQgICAgfVxuXG5cdCAgICBmdW5jdGlvbiBmMyh4LCB5LCB6KSB7XG5cdCAgICAgICAgcmV0dXJuICgoKHgpIHwgKH4oeSkpKSBeICh6KSk7XG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIGY0KHgsIHksIHopIHtcblx0ICAgICAgICByZXR1cm4gKCgoeCkgJiAoeikpIHwgKCh5KSYofih6KSkpKTtcblx0ICAgIH1cblxuXHQgICAgZnVuY3Rpb24gZjUoeCwgeSwgeikge1xuXHQgICAgICAgIHJldHVybiAoKHgpIF4gKCh5KSB8KH4oeikpKSk7XG5cblx0ICAgIH1cblxuXHQgICAgZnVuY3Rpb24gcm90bCh4LG4pIHtcblx0ICAgICAgICByZXR1cm4gKHg8PG4pIHwgKHg+Pj4oMzItbikpO1xuXHQgICAgfVxuXG5cblx0ICAgIC8qKlxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIGhhc2hlcidzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgKlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGhhc2guXG5cdCAgICAgKlxuXHQgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgaGFzaC5cblx0ICAgICAqXG5cdCAgICAgKiBAc3RhdGljXG5cdCAgICAgKlxuXHQgICAgICogQGV4YW1wbGVcblx0ICAgICAqXG5cdCAgICAgKiAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5SSVBFTUQxNjAoJ21lc3NhZ2UnKTtcblx0ICAgICAqICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLlJJUEVNRDE2MCh3b3JkQXJyYXkpO1xuXHQgICAgICovXG5cdCAgICBDLlJJUEVNRDE2MCA9IEhhc2hlci5fY3JlYXRlSGVscGVyKFJJUEVNRDE2MCk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIEhNQUMncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICpcblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBoYXNoLlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBrZXkgVGhlIHNlY3JldCBrZXkuXG5cdCAgICAgKlxuXHQgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgSE1BQy5cblx0ICAgICAqXG5cdCAgICAgKiBAc3RhdGljXG5cdCAgICAgKlxuXHQgICAgICogQGV4YW1wbGVcblx0ICAgICAqXG5cdCAgICAgKiAgICAgdmFyIGhtYWMgPSBDcnlwdG9KUy5IbWFjUklQRU1EMTYwKG1lc3NhZ2UsIGtleSk7XG5cdCAgICAgKi9cblx0ICAgIEMuSG1hY1JJUEVNRDE2MCA9IEhhc2hlci5fY3JlYXRlSG1hY0hlbHBlcihSSVBFTUQxNjApO1xuXHR9KE1hdGgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUy5SSVBFTUQxNjA7XG5cbn0pKTsiLCAiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCJdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcblxuXHQoZnVuY3Rpb24gKCkge1xuXHQgICAgLy8gU2hvcnRjdXRzXG5cdCAgICB2YXIgQyA9IENyeXB0b0pTO1xuXHQgICAgdmFyIENfbGliID0gQy5saWI7XG5cdCAgICB2YXIgQmFzZSA9IENfbGliLkJhc2U7XG5cdCAgICB2YXIgQ19lbmMgPSBDLmVuYztcblx0ICAgIHZhciBVdGY4ID0gQ19lbmMuVXRmODtcblx0ICAgIHZhciBDX2FsZ28gPSBDLmFsZ287XG5cblx0ICAgIC8qKlxuXHQgICAgICogSE1BQyBhbGdvcml0aG0uXG5cdCAgICAgKi9cblx0ICAgIHZhciBITUFDID0gQ19hbGdvLkhNQUMgPSBCYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogSW5pdGlhbGl6ZXMgYSBuZXdseSBjcmVhdGVkIEhNQUMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0hhc2hlcn0gaGFzaGVyIFRoZSBoYXNoIGFsZ29yaXRobSB0byB1c2UuXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBrZXkgVGhlIHNlY3JldCBrZXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBobWFjSGFzaGVyID0gQ3J5cHRvSlMuYWxnby5ITUFDLmNyZWF0ZShDcnlwdG9KUy5hbGdvLlNIQTI1Niwga2V5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBpbml0OiBmdW5jdGlvbiAoaGFzaGVyLCBrZXkpIHtcblx0ICAgICAgICAgICAgLy8gSW5pdCBoYXNoZXJcblx0ICAgICAgICAgICAgaGFzaGVyID0gdGhpcy5faGFzaGVyID0gbmV3IGhhc2hlci5pbml0KCk7XG5cblx0ICAgICAgICAgICAgLy8gQ29udmVydCBzdHJpbmcgdG8gV29yZEFycmF5LCBlbHNlIGFzc3VtZSBXb3JkQXJyYXkgYWxyZWFkeVxuXHQgICAgICAgICAgICBpZiAodHlwZW9mIGtleSA9PSAnc3RyaW5nJykge1xuXHQgICAgICAgICAgICAgICAga2V5ID0gVXRmOC5wYXJzZShrZXkpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBoYXNoZXJCbG9ja1NpemUgPSBoYXNoZXIuYmxvY2tTaXplO1xuXHQgICAgICAgICAgICB2YXIgaGFzaGVyQmxvY2tTaXplQnl0ZXMgPSBoYXNoZXJCbG9ja1NpemUgKiA0O1xuXG5cdCAgICAgICAgICAgIC8vIEFsbG93IGFyYml0cmFyeSBsZW5ndGgga2V5c1xuXHQgICAgICAgICAgICBpZiAoa2V5LnNpZ0J5dGVzID4gaGFzaGVyQmxvY2tTaXplQnl0ZXMpIHtcblx0ICAgICAgICAgICAgICAgIGtleSA9IGhhc2hlci5maW5hbGl6ZShrZXkpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gQ2xhbXAgZXhjZXNzIGJpdHNcblx0ICAgICAgICAgICAga2V5LmNsYW1wKCk7XG5cblx0ICAgICAgICAgICAgLy8gQ2xvbmUga2V5IGZvciBpbm5lciBhbmQgb3V0ZXIgcGFkc1xuXHQgICAgICAgICAgICB2YXIgb0tleSA9IHRoaXMuX29LZXkgPSBrZXkuY2xvbmUoKTtcblx0ICAgICAgICAgICAgdmFyIGlLZXkgPSB0aGlzLl9pS2V5ID0ga2V5LmNsb25lKCk7XG5cblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBvS2V5V29yZHMgPSBvS2V5LndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgaUtleVdvcmRzID0gaUtleS53b3JkcztcblxuXHQgICAgICAgICAgICAvLyBYT1Iga2V5cyB3aXRoIHBhZCBjb25zdGFudHNcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoYXNoZXJCbG9ja1NpemU7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgb0tleVdvcmRzW2ldIF49IDB4NWM1YzVjNWM7XG5cdCAgICAgICAgICAgICAgICBpS2V5V29yZHNbaV0gXj0gMHgzNjM2MzYzNjtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICBvS2V5LnNpZ0J5dGVzID0gaUtleS5zaWdCeXRlcyA9IGhhc2hlckJsb2NrU2l6ZUJ5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIFNldCBpbml0aWFsIHZhbHVlc1xuXHQgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFJlc2V0cyB0aGlzIEhNQUMgdG8gaXRzIGluaXRpYWwgc3RhdGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIGhtYWNIYXNoZXIucmVzZXQoKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICByZXNldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgaGFzaGVyID0gdGhpcy5faGFzaGVyO1xuXG5cdCAgICAgICAgICAgIC8vIFJlc2V0XG5cdCAgICAgICAgICAgIGhhc2hlci5yZXNldCgpO1xuXHQgICAgICAgICAgICBoYXNoZXIudXBkYXRlKHRoaXMuX2lLZXkpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBVcGRhdGVzIHRoaXMgSE1BQyB3aXRoIGEgbWVzc2FnZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZVVwZGF0ZSBUaGUgbWVzc2FnZSB0byBhcHBlbmQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtITUFDfSBUaGlzIEhNQUMgaW5zdGFuY2UuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIGhtYWNIYXNoZXIudXBkYXRlKCdtZXNzYWdlJyk7XG5cdCAgICAgICAgICogICAgIGhtYWNIYXNoZXIudXBkYXRlKHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAobWVzc2FnZVVwZGF0ZSkge1xuXHQgICAgICAgICAgICB0aGlzLl9oYXNoZXIudXBkYXRlKG1lc3NhZ2VVcGRhdGUpO1xuXG5cdCAgICAgICAgICAgIC8vIENoYWluYWJsZVxuXHQgICAgICAgICAgICByZXR1cm4gdGhpcztcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogRmluYWxpemVzIHRoZSBITUFDIGNvbXB1dGF0aW9uLlxuXHQgICAgICAgICAqIE5vdGUgdGhhdCB0aGUgZmluYWxpemUgb3BlcmF0aW9uIGlzIGVmZmVjdGl2ZWx5IGEgZGVzdHJ1Y3RpdmUsIHJlYWQtb25jZSBvcGVyYXRpb24uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2VVcGRhdGUgKE9wdGlvbmFsKSBBIGZpbmFsIG1lc3NhZ2UgdXBkYXRlLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgSE1BQy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGhtYWMgPSBobWFjSGFzaGVyLmZpbmFsaXplKCk7XG5cdCAgICAgICAgICogICAgIHZhciBobWFjID0gaG1hY0hhc2hlci5maW5hbGl6ZSgnbWVzc2FnZScpO1xuXHQgICAgICAgICAqICAgICB2YXIgaG1hYyA9IGhtYWNIYXNoZXIuZmluYWxpemUod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBmaW5hbGl6ZTogZnVuY3Rpb24gKG1lc3NhZ2VVcGRhdGUpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgdmFyIGhhc2hlciA9IHRoaXMuX2hhc2hlcjtcblxuXHQgICAgICAgICAgICAvLyBDb21wdXRlIEhNQUNcblx0ICAgICAgICAgICAgdmFyIGlubmVySGFzaCA9IGhhc2hlci5maW5hbGl6ZShtZXNzYWdlVXBkYXRlKTtcblx0ICAgICAgICAgICAgaGFzaGVyLnJlc2V0KCk7XG5cdCAgICAgICAgICAgIHZhciBobWFjID0gaGFzaGVyLmZpbmFsaXplKHRoaXMuX29LZXkuY2xvbmUoKS5jb25jYXQoaW5uZXJIYXNoKSk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGhtYWM7XG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cdH0oKSk7XG5cblxufSkpOyIsICI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5LCB1bmRlZikge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSwgcmVxdWlyZShcIi4vc2hhMVwiKSwgcmVxdWlyZShcIi4vaG1hY1wiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCIsIFwiLi9zaGExXCIsIFwiLi9obWFjXCJdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcblxuXHQoZnVuY3Rpb24gKCkge1xuXHQgICAgLy8gU2hvcnRjdXRzXG5cdCAgICB2YXIgQyA9IENyeXB0b0pTO1xuXHQgICAgdmFyIENfbGliID0gQy5saWI7XG5cdCAgICB2YXIgQmFzZSA9IENfbGliLkJhc2U7XG5cdCAgICB2YXIgV29yZEFycmF5ID0gQ19saWIuV29yZEFycmF5O1xuXHQgICAgdmFyIENfYWxnbyA9IEMuYWxnbztcblx0ICAgIHZhciBTSEExID0gQ19hbGdvLlNIQTE7XG5cdCAgICB2YXIgSE1BQyA9IENfYWxnby5ITUFDO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFBhc3N3b3JkLUJhc2VkIEtleSBEZXJpdmF0aW9uIEZ1bmN0aW9uIDIgYWxnb3JpdGhtLlxuXHQgICAgICovXG5cdCAgICB2YXIgUEJLREYyID0gQ19hbGdvLlBCS0RGMiA9IEJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb25maWd1cmF0aW9uIG9wdGlvbnMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0ga2V5U2l6ZSBUaGUga2V5IHNpemUgaW4gd29yZHMgdG8gZ2VuZXJhdGUuIERlZmF1bHQ6IDQgKDEyOCBiaXRzKVxuXHQgICAgICAgICAqIEBwcm9wZXJ0eSB7SGFzaGVyfSBoYXNoZXIgVGhlIGhhc2hlciB0byB1c2UuIERlZmF1bHQ6IFNIQTFcblx0ICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gaXRlcmF0aW9ucyBUaGUgbnVtYmVyIG9mIGl0ZXJhdGlvbnMgdG8gcGVyZm9ybS4gRGVmYXVsdDogMVxuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNmZzogQmFzZS5leHRlbmQoe1xuXHQgICAgICAgICAgICBrZXlTaXplOiAxMjgvMzIsXG5cdCAgICAgICAgICAgIGhhc2hlcjogU0hBMSxcblx0ICAgICAgICAgICAgaXRlcmF0aW9uczogMVxuXHQgICAgICAgIH0pLFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogSW5pdGlhbGl6ZXMgYSBuZXdseSBjcmVhdGVkIGtleSBkZXJpdmF0aW9uIGZ1bmN0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNmZyAoT3B0aW9uYWwpIFRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgdG8gdXNlIGZvciB0aGUgZGVyaXZhdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGtkZiA9IENyeXB0b0pTLmFsZ28uUEJLREYyLmNyZWF0ZSgpO1xuXHQgICAgICAgICAqICAgICB2YXIga2RmID0gQ3J5cHRvSlMuYWxnby5QQktERjIuY3JlYXRlKHsga2V5U2l6ZTogOCB9KTtcblx0ICAgICAgICAgKiAgICAgdmFyIGtkZiA9IENyeXB0b0pTLmFsZ28uUEJLREYyLmNyZWF0ZSh7IGtleVNpemU6IDgsIGl0ZXJhdGlvbnM6IDEwMDAgfSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgaW5pdDogZnVuY3Rpb24gKGNmZykge1xuXHQgICAgICAgICAgICB0aGlzLmNmZyA9IHRoaXMuY2ZnLmV4dGVuZChjZmcpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb21wdXRlcyB0aGUgUGFzc3dvcmQtQmFzZWQgS2V5IERlcml2YXRpb24gRnVuY3Rpb24gMi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gcGFzc3dvcmQgVGhlIHBhc3N3b3JkLlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gc2FsdCBBIHNhbHQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBkZXJpdmVkIGtleS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGtleSA9IGtkZi5jb21wdXRlKHBhc3N3b3JkLCBzYWx0KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjb21wdXRlOiBmdW5jdGlvbiAocGFzc3dvcmQsIHNhbHQpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgdmFyIGNmZyA9IHRoaXMuY2ZnO1xuXG5cdCAgICAgICAgICAgIC8vIEluaXQgSE1BQ1xuXHQgICAgICAgICAgICB2YXIgaG1hYyA9IEhNQUMuY3JlYXRlKGNmZy5oYXNoZXIsIHBhc3N3b3JkKTtcblxuXHQgICAgICAgICAgICAvLyBJbml0aWFsIHZhbHVlc1xuXHQgICAgICAgICAgICB2YXIgZGVyaXZlZEtleSA9IFdvcmRBcnJheS5jcmVhdGUoKTtcblx0ICAgICAgICAgICAgdmFyIGJsb2NrSW5kZXggPSBXb3JkQXJyYXkuY3JlYXRlKFsweDAwMDAwMDAxXSk7XG5cblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBkZXJpdmVkS2V5V29yZHMgPSBkZXJpdmVkS2V5LndvcmRzO1xuXHQgICAgICAgICAgICB2YXIgYmxvY2tJbmRleFdvcmRzID0gYmxvY2tJbmRleC53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIGtleVNpemUgPSBjZmcua2V5U2l6ZTtcblx0ICAgICAgICAgICAgdmFyIGl0ZXJhdGlvbnMgPSBjZmcuaXRlcmF0aW9ucztcblxuXHQgICAgICAgICAgICAvLyBHZW5lcmF0ZSBrZXlcblx0ICAgICAgICAgICAgd2hpbGUgKGRlcml2ZWRLZXlXb3Jkcy5sZW5ndGggPCBrZXlTaXplKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIgYmxvY2sgPSBobWFjLnVwZGF0ZShzYWx0KS5maW5hbGl6ZShibG9ja0luZGV4KTtcblx0ICAgICAgICAgICAgICAgIGhtYWMucmVzZXQoKTtcblxuXHQgICAgICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgICAgICB2YXIgYmxvY2tXb3JkcyA9IGJsb2NrLndvcmRzO1xuXHQgICAgICAgICAgICAgICAgdmFyIGJsb2NrV29yZHNMZW5ndGggPSBibG9ja1dvcmRzLmxlbmd0aDtcblxuXHQgICAgICAgICAgICAgICAgLy8gSXRlcmF0aW9uc1xuXHQgICAgICAgICAgICAgICAgdmFyIGludGVybWVkaWF0ZSA9IGJsb2NrO1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBpdGVyYXRpb25zOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgICAgICBpbnRlcm1lZGlhdGUgPSBobWFjLmZpbmFsaXplKGludGVybWVkaWF0ZSk7XG5cdCAgICAgICAgICAgICAgICAgICAgaG1hYy5yZXNldCgpO1xuXG5cdCAgICAgICAgICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgaW50ZXJtZWRpYXRlV29yZHMgPSBpbnRlcm1lZGlhdGUud29yZHM7XG5cblx0ICAgICAgICAgICAgICAgICAgICAvLyBYT1IgaW50ZXJtZWRpYXRlIHdpdGggYmxvY2tcblx0ICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGJsb2NrV29yZHNMZW5ndGg7IGorKykge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICBibG9ja1dvcmRzW2pdIF49IGludGVybWVkaWF0ZVdvcmRzW2pdO1xuXHQgICAgICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgZGVyaXZlZEtleS5jb25jYXQoYmxvY2spO1xuXHQgICAgICAgICAgICAgICAgYmxvY2tJbmRleFdvcmRzWzBdKys7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgZGVyaXZlZEtleS5zaWdCeXRlcyA9IGtleVNpemUgKiA0O1xuXG5cdCAgICAgICAgICAgIHJldHVybiBkZXJpdmVkS2V5O1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIENvbXB1dGVzIHRoZSBQYXNzd29yZC1CYXNlZCBLZXkgRGVyaXZhdGlvbiBGdW5jdGlvbiAyLlxuXHQgICAgICpcblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gcGFzc3dvcmQgVGhlIHBhc3N3b3JkLlxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBzYWx0IEEgc2FsdC5cblx0ICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjZmcgKE9wdGlvbmFsKSBUaGUgY29uZmlndXJhdGlvbiBvcHRpb25zIHRvIHVzZSBmb3IgdGhpcyBjb21wdXRhdGlvbi5cblx0ICAgICAqXG5cdCAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBkZXJpdmVkIGtleS5cblx0ICAgICAqXG5cdCAgICAgKiBAc3RhdGljXG5cdCAgICAgKlxuXHQgICAgICogQGV4YW1wbGVcblx0ICAgICAqXG5cdCAgICAgKiAgICAgdmFyIGtleSA9IENyeXB0b0pTLlBCS0RGMihwYXNzd29yZCwgc2FsdCk7XG5cdCAgICAgKiAgICAgdmFyIGtleSA9IENyeXB0b0pTLlBCS0RGMihwYXNzd29yZCwgc2FsdCwgeyBrZXlTaXplOiA4IH0pO1xuXHQgICAgICogICAgIHZhciBrZXkgPSBDcnlwdG9KUy5QQktERjIocGFzc3dvcmQsIHNhbHQsIHsga2V5U2l6ZTogOCwgaXRlcmF0aW9uczogMTAwMCB9KTtcblx0ICAgICAqL1xuXHQgICAgQy5QQktERjIgPSBmdW5jdGlvbiAocGFzc3dvcmQsIHNhbHQsIGNmZykge1xuXHQgICAgICAgIHJldHVybiBQQktERjIuY3JlYXRlKGNmZykuY29tcHV0ZShwYXNzd29yZCwgc2FsdCk7XG5cdCAgICB9O1xuXHR9KCkpO1xuXG5cblx0cmV0dXJuIENyeXB0b0pTLlBCS0RGMjtcblxufSkpOyIsICI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5LCB1bmRlZikge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSwgcmVxdWlyZShcIi4vc2hhMVwiKSwgcmVxdWlyZShcIi4vaG1hY1wiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCIsIFwiLi9zaGExXCIsIFwiLi9obWFjXCJdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcblxuXHQoZnVuY3Rpb24gKCkge1xuXHQgICAgLy8gU2hvcnRjdXRzXG5cdCAgICB2YXIgQyA9IENyeXB0b0pTO1xuXHQgICAgdmFyIENfbGliID0gQy5saWI7XG5cdCAgICB2YXIgQmFzZSA9IENfbGliLkJhc2U7XG5cdCAgICB2YXIgV29yZEFycmF5ID0gQ19saWIuV29yZEFycmF5O1xuXHQgICAgdmFyIENfYWxnbyA9IEMuYWxnbztcblx0ICAgIHZhciBNRDUgPSBDX2FsZ28uTUQ1O1xuXG5cdCAgICAvKipcblx0ICAgICAqIFRoaXMga2V5IGRlcml2YXRpb24gZnVuY3Rpb24gaXMgbWVhbnQgdG8gY29uZm9ybSB3aXRoIEVWUF9CeXRlc1RvS2V5LlxuXHQgICAgICogd3d3Lm9wZW5zc2wub3JnL2RvY3MvY3J5cHRvL0VWUF9CeXRlc1RvS2V5Lmh0bWxcblx0ICAgICAqL1xuXHQgICAgdmFyIEV2cEtERiA9IENfYWxnby5FdnBLREYgPSBCYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ29uZmlndXJhdGlvbiBvcHRpb25zLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGtleVNpemUgVGhlIGtleSBzaXplIGluIHdvcmRzIHRvIGdlbmVyYXRlLiBEZWZhdWx0OiA0ICgxMjggYml0cylcblx0ICAgICAgICAgKiBAcHJvcGVydHkge0hhc2hlcn0gaGFzaGVyIFRoZSBoYXNoIGFsZ29yaXRobSB0byB1c2UuIERlZmF1bHQ6IE1ENVxuXHQgICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBpdGVyYXRpb25zIFRoZSBudW1iZXIgb2YgaXRlcmF0aW9ucyB0byBwZXJmb3JtLiBEZWZhdWx0OiAxXG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY2ZnOiBCYXNlLmV4dGVuZCh7XG5cdCAgICAgICAgICAgIGtleVNpemU6IDEyOC8zMixcblx0ICAgICAgICAgICAgaGFzaGVyOiBNRDUsXG5cdCAgICAgICAgICAgIGl0ZXJhdGlvbnM6IDFcblx0ICAgICAgICB9KSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEluaXRpYWxpemVzIGEgbmV3bHkgY3JlYXRlZCBrZXkgZGVyaXZhdGlvbiBmdW5jdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjZmcgKE9wdGlvbmFsKSBUaGUgY29uZmlndXJhdGlvbiBvcHRpb25zIHRvIHVzZSBmb3IgdGhlIGRlcml2YXRpb24uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBrZGYgPSBDcnlwdG9KUy5hbGdvLkV2cEtERi5jcmVhdGUoKTtcblx0ICAgICAgICAgKiAgICAgdmFyIGtkZiA9IENyeXB0b0pTLmFsZ28uRXZwS0RGLmNyZWF0ZSh7IGtleVNpemU6IDggfSk7XG5cdCAgICAgICAgICogICAgIHZhciBrZGYgPSBDcnlwdG9KUy5hbGdvLkV2cEtERi5jcmVhdGUoeyBrZXlTaXplOiA4LCBpdGVyYXRpb25zOiAxMDAwIH0pO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGluaXQ6IGZ1bmN0aW9uIChjZmcpIHtcblx0ICAgICAgICAgICAgdGhpcy5jZmcgPSB0aGlzLmNmZy5leHRlbmQoY2ZnKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogRGVyaXZlcyBhIGtleSBmcm9tIGEgcGFzc3dvcmQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IHBhc3N3b3JkIFRoZSBwYXNzd29yZC5cblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IHNhbHQgQSBzYWx0LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgZGVyaXZlZCBrZXkuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBrZXkgPSBrZGYuY29tcHV0ZShwYXNzd29yZCwgc2FsdCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY29tcHV0ZTogZnVuY3Rpb24gKHBhc3N3b3JkLCBzYWx0KSB7XG5cdCAgICAgICAgICAgIHZhciBibG9jaztcblxuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgY2ZnID0gdGhpcy5jZmc7XG5cblx0ICAgICAgICAgICAgLy8gSW5pdCBoYXNoZXJcblx0ICAgICAgICAgICAgdmFyIGhhc2hlciA9IGNmZy5oYXNoZXIuY3JlYXRlKCk7XG5cblx0ICAgICAgICAgICAgLy8gSW5pdGlhbCB2YWx1ZXNcblx0ICAgICAgICAgICAgdmFyIGRlcml2ZWRLZXkgPSBXb3JkQXJyYXkuY3JlYXRlKCk7XG5cblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBkZXJpdmVkS2V5V29yZHMgPSBkZXJpdmVkS2V5LndvcmRzO1xuXHQgICAgICAgICAgICB2YXIga2V5U2l6ZSA9IGNmZy5rZXlTaXplO1xuXHQgICAgICAgICAgICB2YXIgaXRlcmF0aW9ucyA9IGNmZy5pdGVyYXRpb25zO1xuXG5cdCAgICAgICAgICAgIC8vIEdlbmVyYXRlIGtleVxuXHQgICAgICAgICAgICB3aGlsZSAoZGVyaXZlZEtleVdvcmRzLmxlbmd0aCA8IGtleVNpemUpIHtcblx0ICAgICAgICAgICAgICAgIGlmIChibG9jaykge1xuXHQgICAgICAgICAgICAgICAgICAgIGhhc2hlci51cGRhdGUoYmxvY2spO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgYmxvY2sgPSBoYXNoZXIudXBkYXRlKHBhc3N3b3JkKS5maW5hbGl6ZShzYWx0KTtcblx0ICAgICAgICAgICAgICAgIGhhc2hlci5yZXNldCgpO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBJdGVyYXRpb25zXG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGl0ZXJhdGlvbnM7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgICAgIGJsb2NrID0gaGFzaGVyLmZpbmFsaXplKGJsb2NrKTtcblx0ICAgICAgICAgICAgICAgICAgICBoYXNoZXIucmVzZXQoKTtcblx0ICAgICAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAgICAgZGVyaXZlZEtleS5jb25jYXQoYmxvY2spO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGRlcml2ZWRLZXkuc2lnQnl0ZXMgPSBrZXlTaXplICogNDtcblxuXHQgICAgICAgICAgICByZXR1cm4gZGVyaXZlZEtleTtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBEZXJpdmVzIGEga2V5IGZyb20gYSBwYXNzd29yZC5cblx0ICAgICAqXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IHBhc3N3b3JkIFRoZSBwYXNzd29yZC5cblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gc2FsdCBBIHNhbHQuXG5cdCAgICAgKiBAcGFyYW0ge09iamVjdH0gY2ZnIChPcHRpb25hbCkgVGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyB0byB1c2UgZm9yIHRoaXMgY29tcHV0YXRpb24uXG5cdCAgICAgKlxuXHQgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgZGVyaXZlZCBrZXkuXG5cdCAgICAgKlxuXHQgICAgICogQHN0YXRpY1xuXHQgICAgICpcblx0ICAgICAqIEBleGFtcGxlXG5cdCAgICAgKlxuXHQgICAgICogICAgIHZhciBrZXkgPSBDcnlwdG9KUy5FdnBLREYocGFzc3dvcmQsIHNhbHQpO1xuXHQgICAgICogICAgIHZhciBrZXkgPSBDcnlwdG9KUy5FdnBLREYocGFzc3dvcmQsIHNhbHQsIHsga2V5U2l6ZTogOCB9KTtcblx0ICAgICAqICAgICB2YXIga2V5ID0gQ3J5cHRvSlMuRXZwS0RGKHBhc3N3b3JkLCBzYWx0LCB7IGtleVNpemU6IDgsIGl0ZXJhdGlvbnM6IDEwMDAgfSk7XG5cdCAgICAgKi9cblx0ICAgIEMuRXZwS0RGID0gZnVuY3Rpb24gKHBhc3N3b3JkLCBzYWx0LCBjZmcpIHtcblx0ICAgICAgICByZXR1cm4gRXZwS0RGLmNyZWF0ZShjZmcpLmNvbXB1dGUocGFzc3dvcmQsIHNhbHQpO1xuXHQgICAgfTtcblx0fSgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUy5FdnBLREY7XG5cbn0pKTsiLCAiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSwgdW5kZWYpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIiksIHJlcXVpcmUoXCIuL2V2cGtkZlwiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCIsIFwiLi9ldnBrZGZcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdC8qKlxuXHQgKiBDaXBoZXIgY29yZSBjb21wb25lbnRzLlxuXHQgKi9cblx0Q3J5cHRvSlMubGliLkNpcGhlciB8fCAoZnVuY3Rpb24gKHVuZGVmaW5lZCkge1xuXHQgICAgLy8gU2hvcnRjdXRzXG5cdCAgICB2YXIgQyA9IENyeXB0b0pTO1xuXHQgICAgdmFyIENfbGliID0gQy5saWI7XG5cdCAgICB2YXIgQmFzZSA9IENfbGliLkJhc2U7XG5cdCAgICB2YXIgV29yZEFycmF5ID0gQ19saWIuV29yZEFycmF5O1xuXHQgICAgdmFyIEJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0gPSBDX2xpYi5CdWZmZXJlZEJsb2NrQWxnb3JpdGhtO1xuXHQgICAgdmFyIENfZW5jID0gQy5lbmM7XG5cdCAgICB2YXIgVXRmOCA9IENfZW5jLlV0Zjg7XG5cdCAgICB2YXIgQmFzZTY0ID0gQ19lbmMuQmFzZTY0O1xuXHQgICAgdmFyIENfYWxnbyA9IEMuYWxnbztcblx0ICAgIHZhciBFdnBLREYgPSBDX2FsZ28uRXZwS0RGO1xuXG5cdCAgICAvKipcblx0ICAgICAqIEFic3RyYWN0IGJhc2UgY2lwaGVyIHRlbXBsYXRlLlxuXHQgICAgICpcblx0ICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBrZXlTaXplIFRoaXMgY2lwaGVyJ3Mga2V5IHNpemUuIERlZmF1bHQ6IDQgKDEyOCBiaXRzKVxuXHQgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGl2U2l6ZSBUaGlzIGNpcGhlcidzIElWIHNpemUuIERlZmF1bHQ6IDQgKDEyOCBiaXRzKVxuXHQgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IF9FTkNfWEZPUk1fTU9ERSBBIGNvbnN0YW50IHJlcHJlc2VudGluZyBlbmNyeXB0aW9uIG1vZGUuXG5cdCAgICAgKiBAcHJvcGVydHkge251bWJlcn0gX0RFQ19YRk9STV9NT0RFIEEgY29uc3RhbnQgcmVwcmVzZW50aW5nIGRlY3J5cHRpb24gbW9kZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIENpcGhlciA9IENfbGliLkNpcGhlciA9IEJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uZXh0ZW5kKHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb25maWd1cmF0aW9uIG9wdGlvbnMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcHJvcGVydHkge1dvcmRBcnJheX0gaXYgVGhlIElWIHRvIHVzZSBmb3IgdGhpcyBvcGVyYXRpb24uXG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY2ZnOiBCYXNlLmV4dGVuZCgpLFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyB0aGlzIGNpcGhlciBpbiBlbmNyeXB0aW9uIG1vZGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0ga2V5IFRoZSBrZXkuXG5cdCAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNmZyAoT3B0aW9uYWwpIFRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgdG8gdXNlIGZvciB0aGlzIG9wZXJhdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge0NpcGhlcn0gQSBjaXBoZXIgaW5zdGFuY2UuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBjaXBoZXIgPSBDcnlwdG9KUy5hbGdvLkFFUy5jcmVhdGVFbmNyeXB0b3Ioa2V5V29yZEFycmF5LCB7IGl2OiBpdldvcmRBcnJheSB9KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjcmVhdGVFbmNyeXB0b3I6IGZ1bmN0aW9uIChrZXksIGNmZykge1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGUodGhpcy5fRU5DX1hGT1JNX01PREUsIGtleSwgY2ZnKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQ3JlYXRlcyB0aGlzIGNpcGhlciBpbiBkZWNyeXB0aW9uIG1vZGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0ga2V5IFRoZSBrZXkuXG5cdCAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNmZyAoT3B0aW9uYWwpIFRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgdG8gdXNlIGZvciB0aGlzIG9wZXJhdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge0NpcGhlcn0gQSBjaXBoZXIgaW5zdGFuY2UuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBjaXBoZXIgPSBDcnlwdG9KUy5hbGdvLkFFUy5jcmVhdGVEZWNyeXB0b3Ioa2V5V29yZEFycmF5LCB7IGl2OiBpdldvcmRBcnJheSB9KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjcmVhdGVEZWNyeXB0b3I6IGZ1bmN0aW9uIChrZXksIGNmZykge1xuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGUodGhpcy5fREVDX1hGT1JNX01PREUsIGtleSwgY2ZnKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogSW5pdGlhbGl6ZXMgYSBuZXdseSBjcmVhdGVkIGNpcGhlci5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4Zm9ybU1vZGUgRWl0aGVyIHRoZSBlbmNyeXB0aW9uIG9yIGRlY3J5cHRpb24gdHJhbnNvcm1hdGlvbiBtb2RlIGNvbnN0YW50LlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSBrZXkgVGhlIGtleS5cblx0ICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2ZnIChPcHRpb25hbCkgVGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyB0byB1c2UgZm9yIHRoaXMgb3BlcmF0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgY2lwaGVyID0gQ3J5cHRvSlMuYWxnby5BRVMuY3JlYXRlKENyeXB0b0pTLmFsZ28uQUVTLl9FTkNfWEZPUk1fTU9ERSwga2V5V29yZEFycmF5LCB7IGl2OiBpdldvcmRBcnJheSB9KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBpbml0OiBmdW5jdGlvbiAoeGZvcm1Nb2RlLCBrZXksIGNmZykge1xuXHQgICAgICAgICAgICAvLyBBcHBseSBjb25maWcgZGVmYXVsdHNcblx0ICAgICAgICAgICAgdGhpcy5jZmcgPSB0aGlzLmNmZy5leHRlbmQoY2ZnKTtcblxuXHQgICAgICAgICAgICAvLyBTdG9yZSB0cmFuc2Zvcm0gbW9kZSBhbmQga2V5XG5cdCAgICAgICAgICAgIHRoaXMuX3hmb3JtTW9kZSA9IHhmb3JtTW9kZTtcblx0ICAgICAgICAgICAgdGhpcy5fa2V5ID0ga2V5O1xuXG5cdCAgICAgICAgICAgIC8vIFNldCBpbml0aWFsIHZhbHVlc1xuXHQgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFJlc2V0cyB0aGlzIGNpcGhlciB0byBpdHMgaW5pdGlhbCBzdGF0ZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgY2lwaGVyLnJlc2V0KCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gUmVzZXQgZGF0YSBidWZmZXJcblx0ICAgICAgICAgICAgQnVmZmVyZWRCbG9ja0FsZ29yaXRobS5yZXNldC5jYWxsKHRoaXMpO1xuXG5cdCAgICAgICAgICAgIC8vIFBlcmZvcm0gY29uY3JldGUtY2lwaGVyIGxvZ2ljXG5cdCAgICAgICAgICAgIHRoaXMuX2RvUmVzZXQoKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogQWRkcyBkYXRhIHRvIGJlIGVuY3J5cHRlZCBvciBkZWNyeXB0ZWQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IGRhdGFVcGRhdGUgVGhlIGRhdGEgdG8gZW5jcnlwdCBvciBkZWNyeXB0LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgZGF0YSBhZnRlciBwcm9jZXNzaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgZW5jcnlwdGVkID0gY2lwaGVyLnByb2Nlc3MoJ2RhdGEnKTtcblx0ICAgICAgICAgKiAgICAgdmFyIGVuY3J5cHRlZCA9IGNpcGhlci5wcm9jZXNzKHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgcHJvY2VzczogZnVuY3Rpb24gKGRhdGFVcGRhdGUpIHtcblx0ICAgICAgICAgICAgLy8gQXBwZW5kXG5cdCAgICAgICAgICAgIHRoaXMuX2FwcGVuZChkYXRhVXBkYXRlKTtcblxuXHQgICAgICAgICAgICAvLyBQcm9jZXNzIGF2YWlsYWJsZSBibG9ja3Ncblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2Nlc3MoKTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogRmluYWxpemVzIHRoZSBlbmNyeXB0aW9uIG9yIGRlY3J5cHRpb24gcHJvY2Vzcy5cblx0ICAgICAgICAgKiBOb3RlIHRoYXQgdGhlIGZpbmFsaXplIG9wZXJhdGlvbiBpcyBlZmZlY3RpdmVseSBhIGRlc3RydWN0aXZlLCByZWFkLW9uY2Ugb3BlcmF0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBkYXRhVXBkYXRlIFRoZSBmaW5hbCBkYXRhIHRvIGVuY3J5cHQgb3IgZGVjcnlwdC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGRhdGEgYWZ0ZXIgZmluYWwgcHJvY2Vzc2luZy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGVuY3J5cHRlZCA9IGNpcGhlci5maW5hbGl6ZSgpO1xuXHQgICAgICAgICAqICAgICB2YXIgZW5jcnlwdGVkID0gY2lwaGVyLmZpbmFsaXplKCdkYXRhJyk7XG5cdCAgICAgICAgICogICAgIHZhciBlbmNyeXB0ZWQgPSBjaXBoZXIuZmluYWxpemUod29yZEFycmF5KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBmaW5hbGl6ZTogZnVuY3Rpb24gKGRhdGFVcGRhdGUpIHtcblx0ICAgICAgICAgICAgLy8gRmluYWwgZGF0YSB1cGRhdGVcblx0ICAgICAgICAgICAgaWYgKGRhdGFVcGRhdGUpIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuX2FwcGVuZChkYXRhVXBkYXRlKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIFBlcmZvcm0gY29uY3JldGUtY2lwaGVyIGxvZ2ljXG5cdCAgICAgICAgICAgIHZhciBmaW5hbFByb2Nlc3NlZERhdGEgPSB0aGlzLl9kb0ZpbmFsaXplKCk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGZpbmFsUHJvY2Vzc2VkRGF0YTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAga2V5U2l6ZTogMTI4LzMyLFxuXG5cdCAgICAgICAgaXZTaXplOiAxMjgvMzIsXG5cblx0ICAgICAgICBfRU5DX1hGT1JNX01PREU6IDEsXG5cblx0ICAgICAgICBfREVDX1hGT1JNX01PREU6IDIsXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIHNob3J0Y3V0IGZ1bmN0aW9ucyB0byBhIGNpcGhlcidzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0NpcGhlcn0gY2lwaGVyIFRoZSBjaXBoZXIgdG8gY3JlYXRlIGEgaGVscGVyIGZvci5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gQW4gb2JqZWN0IHdpdGggZW5jcnlwdCBhbmQgZGVjcnlwdCBzaG9ydGN1dCBmdW5jdGlvbnMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBBRVMgPSBDcnlwdG9KUy5saWIuQ2lwaGVyLl9jcmVhdGVIZWxwZXIoQ3J5cHRvSlMuYWxnby5BRVMpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIF9jcmVhdGVIZWxwZXI6IChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIGZ1bmN0aW9uIHNlbGVjdENpcGhlclN0cmF0ZWd5KGtleSkge1xuXHQgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT0gJ3N0cmluZycpIHtcblx0ICAgICAgICAgICAgICAgICAgICByZXR1cm4gUGFzc3dvcmRCYXNlZENpcGhlcjtcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNlcmlhbGl6YWJsZUNpcGhlcjtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoY2lwaGVyKSB7XG5cdCAgICAgICAgICAgICAgICByZXR1cm4ge1xuXHQgICAgICAgICAgICAgICAgICAgIGVuY3J5cHQ6IGZ1bmN0aW9uIChtZXNzYWdlLCBrZXksIGNmZykge1xuXHQgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0Q2lwaGVyU3RyYXRlZ3koa2V5KS5lbmNyeXB0KGNpcGhlciwgbWVzc2FnZSwga2V5LCBjZmcpO1xuXHQgICAgICAgICAgICAgICAgICAgIH0sXG5cblx0ICAgICAgICAgICAgICAgICAgICBkZWNyeXB0OiBmdW5jdGlvbiAoY2lwaGVydGV4dCwga2V5LCBjZmcpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdENpcGhlclN0cmF0ZWd5KGtleSkuZGVjcnlwdChjaXBoZXIsIGNpcGhlcnRleHQsIGtleSwgY2ZnKTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgICAgICB9O1xuXHQgICAgICAgICAgICB9O1xuXHQgICAgICAgIH0oKSlcblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIEFic3RyYWN0IGJhc2Ugc3RyZWFtIGNpcGhlciB0ZW1wbGF0ZS5cblx0ICAgICAqXG5cdCAgICAgKiBAcHJvcGVydHkge251bWJlcn0gYmxvY2tTaXplIFRoZSBudW1iZXIgb2YgMzItYml0IHdvcmRzIHRoaXMgY2lwaGVyIG9wZXJhdGVzIG9uLiBEZWZhdWx0OiAxICgzMiBiaXRzKVxuXHQgICAgICovXG5cdCAgICB2YXIgU3RyZWFtQ2lwaGVyID0gQ19saWIuU3RyZWFtQ2lwaGVyID0gQ2lwaGVyLmV4dGVuZCh7XG5cdCAgICAgICAgX2RvRmluYWxpemU6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gUHJvY2VzcyBwYXJ0aWFsIGJsb2Nrc1xuXHQgICAgICAgICAgICB2YXIgZmluYWxQcm9jZXNzZWRCbG9ja3MgPSB0aGlzLl9wcm9jZXNzKCEhJ2ZsdXNoJyk7XG5cblx0ICAgICAgICAgICAgcmV0dXJuIGZpbmFsUHJvY2Vzc2VkQmxvY2tzO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBibG9ja1NpemU6IDFcblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIE1vZGUgbmFtZXNwYWNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQ19tb2RlID0gQy5tb2RlID0ge307XG5cblx0ICAgIC8qKlxuXHQgICAgICogQWJzdHJhY3QgYmFzZSBibG9jayBjaXBoZXIgbW9kZSB0ZW1wbGF0ZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIEJsb2NrQ2lwaGVyTW9kZSA9IENfbGliLkJsb2NrQ2lwaGVyTW9kZSA9IEJhc2UuZXh0ZW5kKHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDcmVhdGVzIHRoaXMgbW9kZSBmb3IgZW5jcnlwdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7Q2lwaGVyfSBjaXBoZXIgQSBibG9jayBjaXBoZXIgaW5zdGFuY2UuXG5cdCAgICAgICAgICogQHBhcmFtIHtBcnJheX0gaXYgVGhlIElWIHdvcmRzLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgbW9kZSA9IENyeXB0b0pTLm1vZGUuQ0JDLmNyZWF0ZUVuY3J5cHRvcihjaXBoZXIsIGl2LndvcmRzKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBjcmVhdGVFbmNyeXB0b3I6IGZ1bmN0aW9uIChjaXBoZXIsIGl2KSB7XG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLkVuY3J5cHRvci5jcmVhdGUoY2lwaGVyLCBpdik7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENyZWF0ZXMgdGhpcyBtb2RlIGZvciBkZWNyeXB0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtDaXBoZXJ9IGNpcGhlciBBIGJsb2NrIGNpcGhlciBpbnN0YW5jZS5cblx0ICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBpdiBUaGUgSVYgd29yZHMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBtb2RlID0gQ3J5cHRvSlMubW9kZS5DQkMuY3JlYXRlRGVjcnlwdG9yKGNpcGhlciwgaXYud29yZHMpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNyZWF0ZURlY3J5cHRvcjogZnVuY3Rpb24gKGNpcGhlciwgaXYpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuRGVjcnlwdG9yLmNyZWF0ZShjaXBoZXIsIGl2KTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogSW5pdGlhbGl6ZXMgYSBuZXdseSBjcmVhdGVkIG1vZGUuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0NpcGhlcn0gY2lwaGVyIEEgYmxvY2sgY2lwaGVyIGluc3RhbmNlLlxuXHQgICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IGl2IFRoZSBJViB3b3Jkcy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIG1vZGUgPSBDcnlwdG9KUy5tb2RlLkNCQy5FbmNyeXB0b3IuY3JlYXRlKGNpcGhlciwgaXYud29yZHMpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGluaXQ6IGZ1bmN0aW9uIChjaXBoZXIsIGl2KSB7XG5cdCAgICAgICAgICAgIHRoaXMuX2NpcGhlciA9IGNpcGhlcjtcblx0ICAgICAgICAgICAgdGhpcy5faXYgPSBpdjtcblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBDaXBoZXIgQmxvY2sgQ2hhaW5pbmcgbW9kZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIENCQyA9IENfbW9kZS5DQkMgPSAoZnVuY3Rpb24gKCkge1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEFic3RyYWN0IGJhc2UgQ0JDIG1vZGUuXG5cdCAgICAgICAgICovXG5cdCAgICAgICAgdmFyIENCQyA9IEJsb2NrQ2lwaGVyTW9kZS5leHRlbmQoKTtcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENCQyBlbmNyeXB0b3IuXG5cdCAgICAgICAgICovXG5cdCAgICAgICAgQ0JDLkVuY3J5cHRvciA9IENCQy5leHRlbmQoe1xuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogUHJvY2Vzc2VzIHRoZSBkYXRhIGJsb2NrIGF0IG9mZnNldC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHBhcmFtIHtBcnJheX0gd29yZHMgVGhlIGRhdGEgd29yZHMgdG8gb3BlcmF0ZSBvbi5cblx0ICAgICAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCBUaGUgb2Zmc2V0IHdoZXJlIHRoZSBibG9jayBzdGFydHMuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICBtb2RlLnByb2Nlc3NCbG9jayhkYXRhLndvcmRzLCBvZmZzZXQpO1xuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgcHJvY2Vzc0Jsb2NrOiBmdW5jdGlvbiAod29yZHMsIG9mZnNldCkge1xuXHQgICAgICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgICAgICB2YXIgY2lwaGVyID0gdGhpcy5fY2lwaGVyO1xuXHQgICAgICAgICAgICAgICAgdmFyIGJsb2NrU2l6ZSA9IGNpcGhlci5ibG9ja1NpemU7XG5cblx0ICAgICAgICAgICAgICAgIC8vIFhPUiBhbmQgZW5jcnlwdFxuXHQgICAgICAgICAgICAgICAgeG9yQmxvY2suY2FsbCh0aGlzLCB3b3Jkcywgb2Zmc2V0LCBibG9ja1NpemUpO1xuXHQgICAgICAgICAgICAgICAgY2lwaGVyLmVuY3J5cHRCbG9jayh3b3Jkcywgb2Zmc2V0KTtcblxuXHQgICAgICAgICAgICAgICAgLy8gUmVtZW1iZXIgdGhpcyBibG9jayB0byB1c2Ugd2l0aCBuZXh0IGJsb2NrXG5cdCAgICAgICAgICAgICAgICB0aGlzLl9wcmV2QmxvY2sgPSB3b3Jkcy5zbGljZShvZmZzZXQsIG9mZnNldCArIGJsb2NrU2l6ZSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9KTtcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENCQyBkZWNyeXB0b3IuXG5cdCAgICAgICAgICovXG5cdCAgICAgICAgQ0JDLkRlY3J5cHRvciA9IENCQy5leHRlbmQoe1xuXHQgICAgICAgICAgICAvKipcblx0ICAgICAgICAgICAgICogUHJvY2Vzc2VzIHRoZSBkYXRhIGJsb2NrIGF0IG9mZnNldC5cblx0ICAgICAgICAgICAgICpcblx0ICAgICAgICAgICAgICogQHBhcmFtIHtBcnJheX0gd29yZHMgVGhlIGRhdGEgd29yZHMgdG8gb3BlcmF0ZSBvbi5cblx0ICAgICAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCBUaGUgb2Zmc2V0IHdoZXJlIHRoZSBibG9jayBzdGFydHMuXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICAgICAqXG5cdCAgICAgICAgICAgICAqICAgICBtb2RlLnByb2Nlc3NCbG9jayhkYXRhLndvcmRzLCBvZmZzZXQpO1xuXHQgICAgICAgICAgICAgKi9cblx0ICAgICAgICAgICAgcHJvY2Vzc0Jsb2NrOiBmdW5jdGlvbiAod29yZHMsIG9mZnNldCkge1xuXHQgICAgICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgICAgICB2YXIgY2lwaGVyID0gdGhpcy5fY2lwaGVyO1xuXHQgICAgICAgICAgICAgICAgdmFyIGJsb2NrU2l6ZSA9IGNpcGhlci5ibG9ja1NpemU7XG5cblx0ICAgICAgICAgICAgICAgIC8vIFJlbWVtYmVyIHRoaXMgYmxvY2sgdG8gdXNlIHdpdGggbmV4dCBibG9ja1xuXHQgICAgICAgICAgICAgICAgdmFyIHRoaXNCbG9jayA9IHdvcmRzLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgYmxvY2tTaXplKTtcblxuXHQgICAgICAgICAgICAgICAgLy8gRGVjcnlwdCBhbmQgWE9SXG5cdCAgICAgICAgICAgICAgICBjaXBoZXIuZGVjcnlwdEJsb2NrKHdvcmRzLCBvZmZzZXQpO1xuXHQgICAgICAgICAgICAgICAgeG9yQmxvY2suY2FsbCh0aGlzLCB3b3Jkcywgb2Zmc2V0LCBibG9ja1NpemUpO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBUaGlzIGJsb2NrIGJlY29tZXMgdGhlIHByZXZpb3VzIGJsb2NrXG5cdCAgICAgICAgICAgICAgICB0aGlzLl9wcmV2QmxvY2sgPSB0aGlzQmxvY2s7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9KTtcblxuXHQgICAgICAgIGZ1bmN0aW9uIHhvckJsb2NrKHdvcmRzLCBvZmZzZXQsIGJsb2NrU2l6ZSkge1xuXHQgICAgICAgICAgICB2YXIgYmxvY2s7XG5cblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgdmFyIGl2ID0gdGhpcy5faXY7XG5cblx0ICAgICAgICAgICAgLy8gQ2hvb3NlIG1peGluZyBibG9ja1xuXHQgICAgICAgICAgICBpZiAoaXYpIHtcblx0ICAgICAgICAgICAgICAgIGJsb2NrID0gaXY7XG5cblx0ICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBJViBmb3Igc3Vic2VxdWVudCBibG9ja3Ncblx0ICAgICAgICAgICAgICAgIHRoaXMuX2l2ID0gdW5kZWZpbmVkO1xuXHQgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgYmxvY2sgPSB0aGlzLl9wcmV2QmxvY2s7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBYT1IgYmxvY2tzXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmxvY2tTaXplOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIHdvcmRzW29mZnNldCArIGldIF49IGJsb2NrW2ldO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgcmV0dXJuIENCQztcblx0ICAgIH0oKSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogUGFkZGluZyBuYW1lc3BhY2UuXG5cdCAgICAgKi9cblx0ICAgIHZhciBDX3BhZCA9IEMucGFkID0ge307XG5cblx0ICAgIC8qKlxuXHQgICAgICogUEtDUyAjNS83IHBhZGRpbmcgc3RyYXRlZ3kuXG5cdCAgICAgKi9cblx0ICAgIHZhciBQa2NzNyA9IENfcGFkLlBrY3M3ID0ge1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFBhZHMgZGF0YSB1c2luZyB0aGUgYWxnb3JpdGhtIGRlZmluZWQgaW4gUEtDUyAjNS83LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl9IGRhdGEgVGhlIGRhdGEgdG8gcGFkLlxuXHQgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBibG9ja1NpemUgVGhlIG11bHRpcGxlIHRoYXQgdGhlIGRhdGEgc2hvdWxkIGJlIHBhZGRlZCB0by5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgQ3J5cHRvSlMucGFkLlBrY3M3LnBhZCh3b3JkQXJyYXksIDQpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHBhZDogZnVuY3Rpb24gKGRhdGEsIGJsb2NrU2l6ZSkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgYmxvY2tTaXplQnl0ZXMgPSBibG9ja1NpemUgKiA0O1xuXG5cdCAgICAgICAgICAgIC8vIENvdW50IHBhZGRpbmcgYnl0ZXNcblx0ICAgICAgICAgICAgdmFyIG5QYWRkaW5nQnl0ZXMgPSBibG9ja1NpemVCeXRlcyAtIGRhdGEuc2lnQnl0ZXMgJSBibG9ja1NpemVCeXRlcztcblxuXHQgICAgICAgICAgICAvLyBDcmVhdGUgcGFkZGluZyB3b3JkXG5cdCAgICAgICAgICAgIHZhciBwYWRkaW5nV29yZCA9IChuUGFkZGluZ0J5dGVzIDw8IDI0KSB8IChuUGFkZGluZ0J5dGVzIDw8IDE2KSB8IChuUGFkZGluZ0J5dGVzIDw8IDgpIHwgblBhZGRpbmdCeXRlcztcblxuXHQgICAgICAgICAgICAvLyBDcmVhdGUgcGFkZGluZ1xuXHQgICAgICAgICAgICB2YXIgcGFkZGluZ1dvcmRzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgblBhZGRpbmdCeXRlczsgaSArPSA0KSB7XG5cdCAgICAgICAgICAgICAgICBwYWRkaW5nV29yZHMucHVzaChwYWRkaW5nV29yZCk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgdmFyIHBhZGRpbmcgPSBXb3JkQXJyYXkuY3JlYXRlKHBhZGRpbmdXb3JkcywgblBhZGRpbmdCeXRlcyk7XG5cblx0ICAgICAgICAgICAgLy8gQWRkIHBhZGRpbmdcblx0ICAgICAgICAgICAgZGF0YS5jb25jYXQocGFkZGluZyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIFVucGFkcyBkYXRhIHRoYXQgaGFkIGJlZW4gcGFkZGVkIHVzaW5nIHRoZSBhbGdvcml0aG0gZGVmaW5lZCBpbiBQS0NTICM1LzcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gZGF0YSBUaGUgZGF0YSB0byB1bnBhZC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgQ3J5cHRvSlMucGFkLlBrY3M3LnVucGFkKHdvcmRBcnJheSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgdW5wYWQ6IGZ1bmN0aW9uIChkYXRhKSB7XG5cdCAgICAgICAgICAgIC8vIEdldCBudW1iZXIgb2YgcGFkZGluZyBieXRlcyBmcm9tIGxhc3QgYnl0ZVxuXHQgICAgICAgICAgICB2YXIgblBhZGRpbmdCeXRlcyA9IGRhdGEud29yZHNbKGRhdGEuc2lnQnl0ZXMgLSAxKSA+Pj4gMl0gJiAweGZmO1xuXG5cdCAgICAgICAgICAgIC8vIFJlbW92ZSBwYWRkaW5nXG5cdCAgICAgICAgICAgIGRhdGEuc2lnQnl0ZXMgLT0gblBhZGRpbmdCeXRlcztcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIEFic3RyYWN0IGJhc2UgYmxvY2sgY2lwaGVyIHRlbXBsYXRlLlxuXHQgICAgICpcblx0ICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBibG9ja1NpemUgVGhlIG51bWJlciBvZiAzMi1iaXQgd29yZHMgdGhpcyBjaXBoZXIgb3BlcmF0ZXMgb24uIERlZmF1bHQ6IDQgKDEyOCBiaXRzKVxuXHQgICAgICovXG5cdCAgICB2YXIgQmxvY2tDaXBoZXIgPSBDX2xpYi5CbG9ja0NpcGhlciA9IENpcGhlci5leHRlbmQoe1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbmZpZ3VyYXRpb24gb3B0aW9ucy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwcm9wZXJ0eSB7TW9kZX0gbW9kZSBUaGUgYmxvY2sgbW9kZSB0byB1c2UuIERlZmF1bHQ6IENCQ1xuXHQgICAgICAgICAqIEBwcm9wZXJ0eSB7UGFkZGluZ30gcGFkZGluZyBUaGUgcGFkZGluZyBzdHJhdGVneSB0byB1c2UuIERlZmF1bHQ6IFBrY3M3XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY2ZnOiBDaXBoZXIuY2ZnLmV4dGVuZCh7XG5cdCAgICAgICAgICAgIG1vZGU6IENCQyxcblx0ICAgICAgICAgICAgcGFkZGluZzogUGtjczdcblx0ICAgICAgICB9KSxcblxuXHQgICAgICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHZhciBtb2RlQ3JlYXRvcjtcblxuXHQgICAgICAgICAgICAvLyBSZXNldCBjaXBoZXJcblx0ICAgICAgICAgICAgQ2lwaGVyLnJlc2V0LmNhbGwodGhpcyk7XG5cblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBjZmcgPSB0aGlzLmNmZztcblx0ICAgICAgICAgICAgdmFyIGl2ID0gY2ZnLml2O1xuXHQgICAgICAgICAgICB2YXIgbW9kZSA9IGNmZy5tb2RlO1xuXG5cdCAgICAgICAgICAgIC8vIFJlc2V0IGJsb2NrIG1vZGVcblx0ICAgICAgICAgICAgaWYgKHRoaXMuX3hmb3JtTW9kZSA9PSB0aGlzLl9FTkNfWEZPUk1fTU9ERSkge1xuXHQgICAgICAgICAgICAgICAgbW9kZUNyZWF0b3IgPSBtb2RlLmNyZWF0ZUVuY3J5cHRvcjtcblx0ICAgICAgICAgICAgfSBlbHNlIC8qIGlmICh0aGlzLl94Zm9ybU1vZGUgPT0gdGhpcy5fREVDX1hGT1JNX01PREUpICovIHtcblx0ICAgICAgICAgICAgICAgIG1vZGVDcmVhdG9yID0gbW9kZS5jcmVhdGVEZWNyeXB0b3I7XG5cdCAgICAgICAgICAgICAgICAvLyBLZWVwIGF0IGxlYXN0IG9uZSBibG9jayBpbiB0aGUgYnVmZmVyIGZvciB1bnBhZGRpbmdcblx0ICAgICAgICAgICAgICAgIHRoaXMuX21pbkJ1ZmZlclNpemUgPSAxO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgaWYgKHRoaXMuX21vZGUgJiYgdGhpcy5fbW9kZS5fX2NyZWF0b3IgPT0gbW9kZUNyZWF0b3IpIHtcblx0ICAgICAgICAgICAgICAgIHRoaXMuX21vZGUuaW5pdCh0aGlzLCBpdiAmJiBpdi53b3Jkcyk7XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICB0aGlzLl9tb2RlID0gbW9kZUNyZWF0b3IuY2FsbChtb2RlLCB0aGlzLCBpdiAmJiBpdi53b3Jkcyk7XG5cdCAgICAgICAgICAgICAgICB0aGlzLl9tb2RlLl9fY3JlYXRvciA9IG1vZGVDcmVhdG9yO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9kb1Byb2Nlc3NCbG9jazogZnVuY3Rpb24gKHdvcmRzLCBvZmZzZXQpIHtcblx0ICAgICAgICAgICAgdGhpcy5fbW9kZS5wcm9jZXNzQmxvY2sod29yZHMsIG9mZnNldCk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9kb0ZpbmFsaXplOiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIHZhciBmaW5hbFByb2Nlc3NlZEJsb2NrcztcblxuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgcGFkZGluZyA9IHRoaXMuY2ZnLnBhZGRpbmc7XG5cblx0ICAgICAgICAgICAgLy8gRmluYWxpemVcblx0ICAgICAgICAgICAgaWYgKHRoaXMuX3hmb3JtTW9kZSA9PSB0aGlzLl9FTkNfWEZPUk1fTU9ERSkge1xuXHQgICAgICAgICAgICAgICAgLy8gUGFkIGRhdGFcblx0ICAgICAgICAgICAgICAgIHBhZGRpbmcucGFkKHRoaXMuX2RhdGEsIHRoaXMuYmxvY2tTaXplKTtcblxuXHQgICAgICAgICAgICAgICAgLy8gUHJvY2VzcyBmaW5hbCBibG9ja3Ncblx0ICAgICAgICAgICAgICAgIGZpbmFsUHJvY2Vzc2VkQmxvY2tzID0gdGhpcy5fcHJvY2VzcyghISdmbHVzaCcpO1xuXHQgICAgICAgICAgICB9IGVsc2UgLyogaWYgKHRoaXMuX3hmb3JtTW9kZSA9PSB0aGlzLl9ERUNfWEZPUk1fTU9ERSkgKi8ge1xuXHQgICAgICAgICAgICAgICAgLy8gUHJvY2VzcyBmaW5hbCBibG9ja3Ncblx0ICAgICAgICAgICAgICAgIGZpbmFsUHJvY2Vzc2VkQmxvY2tzID0gdGhpcy5fcHJvY2VzcyghISdmbHVzaCcpO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBVbnBhZCBkYXRhXG5cdCAgICAgICAgICAgICAgICBwYWRkaW5nLnVucGFkKGZpbmFsUHJvY2Vzc2VkQmxvY2tzKTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIHJldHVybiBmaW5hbFByb2Nlc3NlZEJsb2Nrcztcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgYmxvY2tTaXplOiAxMjgvMzJcblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIEEgY29sbGVjdGlvbiBvZiBjaXBoZXIgcGFyYW1ldGVycy5cblx0ICAgICAqXG5cdCAgICAgKiBAcHJvcGVydHkge1dvcmRBcnJheX0gY2lwaGVydGV4dCBUaGUgcmF3IGNpcGhlcnRleHQuXG5cdCAgICAgKiBAcHJvcGVydHkge1dvcmRBcnJheX0ga2V5IFRoZSBrZXkgdG8gdGhpcyBjaXBoZXJ0ZXh0LlxuXHQgICAgICogQHByb3BlcnR5IHtXb3JkQXJyYXl9IGl2IFRoZSBJViB1c2VkIGluIHRoZSBjaXBoZXJpbmcgb3BlcmF0aW9uLlxuXHQgICAgICogQHByb3BlcnR5IHtXb3JkQXJyYXl9IHNhbHQgVGhlIHNhbHQgdXNlZCB3aXRoIGEga2V5IGRlcml2YXRpb24gZnVuY3Rpb24uXG5cdCAgICAgKiBAcHJvcGVydHkge0NpcGhlcn0gYWxnb3JpdGhtIFRoZSBjaXBoZXIgYWxnb3JpdGhtLlxuXHQgICAgICogQHByb3BlcnR5IHtNb2RlfSBtb2RlIFRoZSBibG9jayBtb2RlIHVzZWQgaW4gdGhlIGNpcGhlcmluZyBvcGVyYXRpb24uXG5cdCAgICAgKiBAcHJvcGVydHkge1BhZGRpbmd9IHBhZGRpbmcgVGhlIHBhZGRpbmcgc2NoZW1lIHVzZWQgaW4gdGhlIGNpcGhlcmluZyBvcGVyYXRpb24uXG5cdCAgICAgKiBAcHJvcGVydHkge251bWJlcn0gYmxvY2tTaXplIFRoZSBibG9jayBzaXplIG9mIHRoZSBjaXBoZXIuXG5cdCAgICAgKiBAcHJvcGVydHkge0Zvcm1hdH0gZm9ybWF0dGVyIFRoZSBkZWZhdWx0IGZvcm1hdHRpbmcgc3RyYXRlZ3kgdG8gY29udmVydCB0aGlzIGNpcGhlciBwYXJhbXMgb2JqZWN0IHRvIGEgc3RyaW5nLlxuXHQgICAgICovXG5cdCAgICB2YXIgQ2lwaGVyUGFyYW1zID0gQ19saWIuQ2lwaGVyUGFyYW1zID0gQmFzZS5leHRlbmQoe1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEluaXRpYWxpemVzIGEgbmV3bHkgY3JlYXRlZCBjaXBoZXIgcGFyYW1zIG9iamVjdC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjaXBoZXJQYXJhbXMgQW4gb2JqZWN0IHdpdGggYW55IG9mIHRoZSBwb3NzaWJsZSBjaXBoZXIgcGFyYW1ldGVycy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGNpcGhlclBhcmFtcyA9IENyeXB0b0pTLmxpYi5DaXBoZXJQYXJhbXMuY3JlYXRlKHtcblx0ICAgICAgICAgKiAgICAgICAgIGNpcGhlcnRleHQ6IGNpcGhlcnRleHRXb3JkQXJyYXksXG5cdCAgICAgICAgICogICAgICAgICBrZXk6IGtleVdvcmRBcnJheSxcblx0ICAgICAgICAgKiAgICAgICAgIGl2OiBpdldvcmRBcnJheSxcblx0ICAgICAgICAgKiAgICAgICAgIHNhbHQ6IHNhbHRXb3JkQXJyYXksXG5cdCAgICAgICAgICogICAgICAgICBhbGdvcml0aG06IENyeXB0b0pTLmFsZ28uQUVTLFxuXHQgICAgICAgICAqICAgICAgICAgbW9kZTogQ3J5cHRvSlMubW9kZS5DQkMsXG5cdCAgICAgICAgICogICAgICAgICBwYWRkaW5nOiBDcnlwdG9KUy5wYWQuUEtDUzcsXG5cdCAgICAgICAgICogICAgICAgICBibG9ja1NpemU6IDQsXG5cdCAgICAgICAgICogICAgICAgICBmb3JtYXR0ZXI6IENyeXB0b0pTLmZvcm1hdC5PcGVuU1NMXG5cdCAgICAgICAgICogICAgIH0pO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGluaXQ6IGZ1bmN0aW9uIChjaXBoZXJQYXJhbXMpIHtcblx0ICAgICAgICAgICAgdGhpcy5taXhJbihjaXBoZXJQYXJhbXMpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyB0aGlzIGNpcGhlciBwYXJhbXMgb2JqZWN0IHRvIGEgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtGb3JtYXR9IGZvcm1hdHRlciAoT3B0aW9uYWwpIFRoZSBmb3JtYXR0aW5nIHN0cmF0ZWd5IHRvIHVzZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIHN0cmluZ2lmaWVkIGNpcGhlciBwYXJhbXMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAdGhyb3dzIEVycm9yIElmIG5laXRoZXIgdGhlIGZvcm1hdHRlciBub3IgdGhlIGRlZmF1bHQgZm9ybWF0dGVyIGlzIHNldC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHN0cmluZyA9IGNpcGhlclBhcmFtcyArICcnO1xuXHQgICAgICAgICAqICAgICB2YXIgc3RyaW5nID0gY2lwaGVyUGFyYW1zLnRvU3RyaW5nKCk7XG5cdCAgICAgICAgICogICAgIHZhciBzdHJpbmcgPSBjaXBoZXJQYXJhbXMudG9TdHJpbmcoQ3J5cHRvSlMuZm9ybWF0Lk9wZW5TU0wpO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoZm9ybWF0dGVyKSB7XG5cdCAgICAgICAgICAgIHJldHVybiAoZm9ybWF0dGVyIHx8IHRoaXMuZm9ybWF0dGVyKS5zdHJpbmdpZnkodGhpcyk7XG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogRm9ybWF0IG5hbWVzcGFjZS5cblx0ICAgICAqL1xuXHQgICAgdmFyIENfZm9ybWF0ID0gQy5mb3JtYXQgPSB7fTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBPcGVuU1NMIGZvcm1hdHRpbmcgc3RyYXRlZ3kuXG5cdCAgICAgKi9cblx0ICAgIHZhciBPcGVuU1NMRm9ybWF0dGVyID0gQ19mb3JtYXQuT3BlblNTTCA9IHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIGNpcGhlciBwYXJhbXMgb2JqZWN0IHRvIGFuIE9wZW5TU0wtY29tcGF0aWJsZSBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0NpcGhlclBhcmFtc30gY2lwaGVyUGFyYW1zIFRoZSBjaXBoZXIgcGFyYW1zIG9iamVjdC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIE9wZW5TU0wtY29tcGF0aWJsZSBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBvcGVuU1NMU3RyaW5nID0gQ3J5cHRvSlMuZm9ybWF0Lk9wZW5TU0wuc3RyaW5naWZ5KGNpcGhlclBhcmFtcyk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgc3RyaW5naWZ5OiBmdW5jdGlvbiAoY2lwaGVyUGFyYW1zKSB7XG5cdCAgICAgICAgICAgIHZhciB3b3JkQXJyYXk7XG5cblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBjaXBoZXJ0ZXh0ID0gY2lwaGVyUGFyYW1zLmNpcGhlcnRleHQ7XG5cdCAgICAgICAgICAgIHZhciBzYWx0ID0gY2lwaGVyUGFyYW1zLnNhbHQ7XG5cblx0ICAgICAgICAgICAgLy8gRm9ybWF0XG5cdCAgICAgICAgICAgIGlmIChzYWx0KSB7XG5cdCAgICAgICAgICAgICAgICB3b3JkQXJyYXkgPSBXb3JkQXJyYXkuY3JlYXRlKFsweDUzNjE2Yzc0LCAweDY1NjQ1ZjVmXSkuY29uY2F0KHNhbHQpLmNvbmNhdChjaXBoZXJ0ZXh0KTtcblx0ICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIHdvcmRBcnJheSA9IGNpcGhlcnRleHQ7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gd29yZEFycmF5LnRvU3RyaW5nKEJhc2U2NCk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGFuIE9wZW5TU0wtY29tcGF0aWJsZSBzdHJpbmcgdG8gYSBjaXBoZXIgcGFyYW1zIG9iamVjdC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcGVuU1NMU3RyIFRoZSBPcGVuU1NMLWNvbXBhdGlibGUgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7Q2lwaGVyUGFyYW1zfSBUaGUgY2lwaGVyIHBhcmFtcyBvYmplY3QuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBjaXBoZXJQYXJhbXMgPSBDcnlwdG9KUy5mb3JtYXQuT3BlblNTTC5wYXJzZShvcGVuU1NMU3RyaW5nKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBwYXJzZTogZnVuY3Rpb24gKG9wZW5TU0xTdHIpIHtcblx0ICAgICAgICAgICAgdmFyIHNhbHQ7XG5cblx0ICAgICAgICAgICAgLy8gUGFyc2UgYmFzZTY0XG5cdCAgICAgICAgICAgIHZhciBjaXBoZXJ0ZXh0ID0gQmFzZTY0LnBhcnNlKG9wZW5TU0xTdHIpO1xuXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgICAgIHZhciBjaXBoZXJ0ZXh0V29yZHMgPSBjaXBoZXJ0ZXh0LndvcmRzO1xuXG5cdCAgICAgICAgICAgIC8vIFRlc3QgZm9yIHNhbHRcblx0ICAgICAgICAgICAgaWYgKGNpcGhlcnRleHRXb3Jkc1swXSA9PSAweDUzNjE2Yzc0ICYmIGNpcGhlcnRleHRXb3Jkc1sxXSA9PSAweDY1NjQ1ZjVmKSB7XG5cdCAgICAgICAgICAgICAgICAvLyBFeHRyYWN0IHNhbHRcblx0ICAgICAgICAgICAgICAgIHNhbHQgPSBXb3JkQXJyYXkuY3JlYXRlKGNpcGhlcnRleHRXb3Jkcy5zbGljZSgyLCA0KSk7XG5cblx0ICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBzYWx0IGZyb20gY2lwaGVydGV4dFxuXHQgICAgICAgICAgICAgICAgY2lwaGVydGV4dFdvcmRzLnNwbGljZSgwLCA0KTtcblx0ICAgICAgICAgICAgICAgIGNpcGhlcnRleHQuc2lnQnl0ZXMgLT0gMTY7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICByZXR1cm4gQ2lwaGVyUGFyYW1zLmNyZWF0ZSh7IGNpcGhlcnRleHQ6IGNpcGhlcnRleHQsIHNhbHQ6IHNhbHQgfSk7XG5cdCAgICAgICAgfVxuXHQgICAgfTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBBIGNpcGhlciB3cmFwcGVyIHRoYXQgcmV0dXJucyBjaXBoZXJ0ZXh0IGFzIGEgc2VyaWFsaXphYmxlIGNpcGhlciBwYXJhbXMgb2JqZWN0LlxuXHQgICAgICovXG5cdCAgICB2YXIgU2VyaWFsaXphYmxlQ2lwaGVyID0gQ19saWIuU2VyaWFsaXphYmxlQ2lwaGVyID0gQmFzZS5leHRlbmQoe1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbmZpZ3VyYXRpb24gb3B0aW9ucy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwcm9wZXJ0eSB7Rm9ybWF0dGVyfSBmb3JtYXQgVGhlIGZvcm1hdHRpbmcgc3RyYXRlZ3kgdG8gY29udmVydCBjaXBoZXIgcGFyYW0gb2JqZWN0cyB0byBhbmQgZnJvbSBhIHN0cmluZy4gRGVmYXVsdDogT3BlblNTTFxuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNmZzogQmFzZS5leHRlbmQoe1xuXHQgICAgICAgICAgICBmb3JtYXQ6IE9wZW5TU0xGb3JtYXR0ZXJcblx0ICAgICAgICB9KSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIEVuY3J5cHRzIGEgbWVzc2FnZS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7Q2lwaGVyfSBjaXBoZXIgVGhlIGNpcGhlciBhbGdvcml0aG0gdG8gdXNlLlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBlbmNyeXB0LlxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSBrZXkgVGhlIGtleS5cblx0ICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2ZnIChPcHRpb25hbCkgVGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyB0byB1c2UgZm9yIHRoaXMgb3BlcmF0aW9uLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHJldHVybiB7Q2lwaGVyUGFyYW1zfSBBIGNpcGhlciBwYXJhbXMgb2JqZWN0LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgY2lwaGVydGV4dFBhcmFtcyA9IENyeXB0b0pTLmxpYi5TZXJpYWxpemFibGVDaXBoZXIuZW5jcnlwdChDcnlwdG9KUy5hbGdvLkFFUywgbWVzc2FnZSwga2V5KTtcblx0ICAgICAgICAgKiAgICAgdmFyIGNpcGhlcnRleHRQYXJhbXMgPSBDcnlwdG9KUy5saWIuU2VyaWFsaXphYmxlQ2lwaGVyLmVuY3J5cHQoQ3J5cHRvSlMuYWxnby5BRVMsIG1lc3NhZ2UsIGtleSwgeyBpdjogaXYgfSk7XG5cdCAgICAgICAgICogICAgIHZhciBjaXBoZXJ0ZXh0UGFyYW1zID0gQ3J5cHRvSlMubGliLlNlcmlhbGl6YWJsZUNpcGhlci5lbmNyeXB0KENyeXB0b0pTLmFsZ28uQUVTLCBtZXNzYWdlLCBrZXksIHsgaXY6IGl2LCBmb3JtYXQ6IENyeXB0b0pTLmZvcm1hdC5PcGVuU1NMIH0pO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGVuY3J5cHQ6IGZ1bmN0aW9uIChjaXBoZXIsIG1lc3NhZ2UsIGtleSwgY2ZnKSB7XG5cdCAgICAgICAgICAgIC8vIEFwcGx5IGNvbmZpZyBkZWZhdWx0c1xuXHQgICAgICAgICAgICBjZmcgPSB0aGlzLmNmZy5leHRlbmQoY2ZnKTtcblxuXHQgICAgICAgICAgICAvLyBFbmNyeXB0XG5cdCAgICAgICAgICAgIHZhciBlbmNyeXB0b3IgPSBjaXBoZXIuY3JlYXRlRW5jcnlwdG9yKGtleSwgY2ZnKTtcblx0ICAgICAgICAgICAgdmFyIGNpcGhlcnRleHQgPSBlbmNyeXB0b3IuZmluYWxpemUobWVzc2FnZSk7XG5cblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICAgICAgdmFyIGNpcGhlckNmZyA9IGVuY3J5cHRvci5jZmc7XG5cblx0ICAgICAgICAgICAgLy8gQ3JlYXRlIGFuZCByZXR1cm4gc2VyaWFsaXphYmxlIGNpcGhlciBwYXJhbXNcblx0ICAgICAgICAgICAgcmV0dXJuIENpcGhlclBhcmFtcy5jcmVhdGUoe1xuXHQgICAgICAgICAgICAgICAgY2lwaGVydGV4dDogY2lwaGVydGV4dCxcblx0ICAgICAgICAgICAgICAgIGtleToga2V5LFxuXHQgICAgICAgICAgICAgICAgaXY6IGNpcGhlckNmZy5pdixcblx0ICAgICAgICAgICAgICAgIGFsZ29yaXRobTogY2lwaGVyLFxuXHQgICAgICAgICAgICAgICAgbW9kZTogY2lwaGVyQ2ZnLm1vZGUsXG5cdCAgICAgICAgICAgICAgICBwYWRkaW5nOiBjaXBoZXJDZmcucGFkZGluZyxcblx0ICAgICAgICAgICAgICAgIGJsb2NrU2l6ZTogY2lwaGVyLmJsb2NrU2l6ZSxcblx0ICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogY2ZnLmZvcm1hdFxuXHQgICAgICAgICAgICB9KTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogRGVjcnlwdHMgc2VyaWFsaXplZCBjaXBoZXJ0ZXh0LlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtDaXBoZXJ9IGNpcGhlciBUaGUgY2lwaGVyIGFsZ29yaXRobSB0byB1c2UuXG5cdCAgICAgICAgICogQHBhcmFtIHtDaXBoZXJQYXJhbXN8c3RyaW5nfSBjaXBoZXJ0ZXh0IFRoZSBjaXBoZXJ0ZXh0IHRvIGRlY3J5cHQuXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl9IGtleSBUaGUga2V5LlxuXHQgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjZmcgKE9wdGlvbmFsKSBUaGUgY29uZmlndXJhdGlvbiBvcHRpb25zIHRvIHVzZSBmb3IgdGhpcyBvcGVyYXRpb24uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBwbGFpbnRleHQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBwbGFpbnRleHQgPSBDcnlwdG9KUy5saWIuU2VyaWFsaXphYmxlQ2lwaGVyLmRlY3J5cHQoQ3J5cHRvSlMuYWxnby5BRVMsIGZvcm1hdHRlZENpcGhlcnRleHQsIGtleSwgeyBpdjogaXYsIGZvcm1hdDogQ3J5cHRvSlMuZm9ybWF0Lk9wZW5TU0wgfSk7XG5cdCAgICAgICAgICogICAgIHZhciBwbGFpbnRleHQgPSBDcnlwdG9KUy5saWIuU2VyaWFsaXphYmxlQ2lwaGVyLmRlY3J5cHQoQ3J5cHRvSlMuYWxnby5BRVMsIGNpcGhlcnRleHRQYXJhbXMsIGtleSwgeyBpdjogaXYsIGZvcm1hdDogQ3J5cHRvSlMuZm9ybWF0Lk9wZW5TU0wgfSk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgZGVjcnlwdDogZnVuY3Rpb24gKGNpcGhlciwgY2lwaGVydGV4dCwga2V5LCBjZmcpIHtcblx0ICAgICAgICAgICAgLy8gQXBwbHkgY29uZmlnIGRlZmF1bHRzXG5cdCAgICAgICAgICAgIGNmZyA9IHRoaXMuY2ZnLmV4dGVuZChjZmcpO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnQgc3RyaW5nIHRvIENpcGhlclBhcmFtc1xuXHQgICAgICAgICAgICBjaXBoZXJ0ZXh0ID0gdGhpcy5fcGFyc2UoY2lwaGVydGV4dCwgY2ZnLmZvcm1hdCk7XG5cblx0ICAgICAgICAgICAgLy8gRGVjcnlwdFxuXHQgICAgICAgICAgICB2YXIgcGxhaW50ZXh0ID0gY2lwaGVyLmNyZWF0ZURlY3J5cHRvcihrZXksIGNmZykuZmluYWxpemUoY2lwaGVydGV4dC5jaXBoZXJ0ZXh0KTtcblxuXHQgICAgICAgICAgICByZXR1cm4gcGxhaW50ZXh0O1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb252ZXJ0cyBzZXJpYWxpemVkIGNpcGhlcnRleHQgdG8gQ2lwaGVyUGFyYW1zLFxuXHQgICAgICAgICAqIGVsc2UgYXNzdW1lZCBDaXBoZXJQYXJhbXMgYWxyZWFkeSBhbmQgcmV0dXJucyBjaXBoZXJ0ZXh0IHVuY2hhbmdlZC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7Q2lwaGVyUGFyYW1zfHN0cmluZ30gY2lwaGVydGV4dCBUaGUgY2lwaGVydGV4dC5cblx0ICAgICAgICAgKiBAcGFyYW0ge0Zvcm1hdHRlcn0gZm9ybWF0IFRoZSBmb3JtYXR0aW5nIHN0cmF0ZWd5IHRvIHVzZSB0byBwYXJzZSBzZXJpYWxpemVkIGNpcGhlcnRleHQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtDaXBoZXJQYXJhbXN9IFRoZSB1bnNlcmlhbGl6ZWQgY2lwaGVydGV4dC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGNpcGhlcnRleHRQYXJhbXMgPSBDcnlwdG9KUy5saWIuU2VyaWFsaXphYmxlQ2lwaGVyLl9wYXJzZShjaXBoZXJ0ZXh0U3RyaW5nT3JQYXJhbXMsIGZvcm1hdCk7XG5cdCAgICAgICAgICovXG5cdCAgICAgICAgX3BhcnNlOiBmdW5jdGlvbiAoY2lwaGVydGV4dCwgZm9ybWF0KSB7XG5cdCAgICAgICAgICAgIGlmICh0eXBlb2YgY2lwaGVydGV4dCA9PSAnc3RyaW5nJykge1xuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGZvcm1hdC5wYXJzZShjaXBoZXJ0ZXh0LCB0aGlzKTtcblx0ICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybiBjaXBoZXJ0ZXh0O1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogS2V5IGRlcml2YXRpb24gZnVuY3Rpb24gbmFtZXNwYWNlLlxuXHQgICAgICovXG5cdCAgICB2YXIgQ19rZGYgPSBDLmtkZiA9IHt9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIE9wZW5TU0wga2V5IGRlcml2YXRpb24gZnVuY3Rpb24uXG5cdCAgICAgKi9cblx0ICAgIHZhciBPcGVuU1NMS2RmID0gQ19rZGYuT3BlblNTTCA9IHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBEZXJpdmVzIGEga2V5IGFuZCBJViBmcm9tIGEgcGFzc3dvcmQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFzc3dvcmQgVGhlIHBhc3N3b3JkIHRvIGRlcml2ZSBmcm9tLlxuXHQgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBrZXlTaXplIFRoZSBzaXplIGluIHdvcmRzIG9mIHRoZSBrZXkgdG8gZ2VuZXJhdGUuXG5cdCAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGl2U2l6ZSBUaGUgc2l6ZSBpbiB3b3JkcyBvZiB0aGUgSVYgdG8gZ2VuZXJhdGUuXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBzYWx0IChPcHRpb25hbCkgQSA2NC1iaXQgc2FsdCB0byB1c2UuIElmIG9taXR0ZWQsIGEgc2FsdCB3aWxsIGJlIGdlbmVyYXRlZCByYW5kb21seS5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge0NpcGhlclBhcmFtc30gQSBjaXBoZXIgcGFyYW1zIG9iamVjdCB3aXRoIHRoZSBrZXksIElWLCBhbmQgc2FsdC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGRlcml2ZWRQYXJhbXMgPSBDcnlwdG9KUy5rZGYuT3BlblNTTC5leGVjdXRlKCdQYXNzd29yZCcsIDI1Ni8zMiwgMTI4LzMyKTtcblx0ICAgICAgICAgKiAgICAgdmFyIGRlcml2ZWRQYXJhbXMgPSBDcnlwdG9KUy5rZGYuT3BlblNTTC5leGVjdXRlKCdQYXNzd29yZCcsIDI1Ni8zMiwgMTI4LzMyLCAnc2FsdHNhbHQnKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBleGVjdXRlOiBmdW5jdGlvbiAocGFzc3dvcmQsIGtleVNpemUsIGl2U2l6ZSwgc2FsdCkge1xuXHQgICAgICAgICAgICAvLyBHZW5lcmF0ZSByYW5kb20gc2FsdFxuXHQgICAgICAgICAgICBpZiAoIXNhbHQpIHtcblx0ICAgICAgICAgICAgICAgIHNhbHQgPSBXb3JkQXJyYXkucmFuZG9tKDY0LzgpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gRGVyaXZlIGtleSBhbmQgSVZcblx0ICAgICAgICAgICAgdmFyIGtleSA9IEV2cEtERi5jcmVhdGUoeyBrZXlTaXplOiBrZXlTaXplICsgaXZTaXplIH0pLmNvbXB1dGUocGFzc3dvcmQsIHNhbHQpO1xuXG5cdCAgICAgICAgICAgIC8vIFNlcGFyYXRlIGtleSBhbmQgSVZcblx0ICAgICAgICAgICAgdmFyIGl2ID0gV29yZEFycmF5LmNyZWF0ZShrZXkud29yZHMuc2xpY2Uoa2V5U2l6ZSksIGl2U2l6ZSAqIDQpO1xuXHQgICAgICAgICAgICBrZXkuc2lnQnl0ZXMgPSBrZXlTaXplICogNDtcblxuXHQgICAgICAgICAgICAvLyBSZXR1cm4gcGFyYW1zXG5cdCAgICAgICAgICAgIHJldHVybiBDaXBoZXJQYXJhbXMuY3JlYXRlKHsga2V5OiBrZXksIGl2OiBpdiwgc2FsdDogc2FsdCB9KTtcblx0ICAgICAgICB9XG5cdCAgICB9O1xuXG5cdCAgICAvKipcblx0ICAgICAqIEEgc2VyaWFsaXphYmxlIGNpcGhlciB3cmFwcGVyIHRoYXQgZGVyaXZlcyB0aGUga2V5IGZyb20gYSBwYXNzd29yZCxcblx0ICAgICAqIGFuZCByZXR1cm5zIGNpcGhlcnRleHQgYXMgYSBzZXJpYWxpemFibGUgY2lwaGVyIHBhcmFtcyBvYmplY3QuXG5cdCAgICAgKi9cblx0ICAgIHZhciBQYXNzd29yZEJhc2VkQ2lwaGVyID0gQ19saWIuUGFzc3dvcmRCYXNlZENpcGhlciA9IFNlcmlhbGl6YWJsZUNpcGhlci5leHRlbmQoe1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbmZpZ3VyYXRpb24gb3B0aW9ucy5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwcm9wZXJ0eSB7S0RGfSBrZGYgVGhlIGtleSBkZXJpdmF0aW9uIGZ1bmN0aW9uIHRvIHVzZSB0byBnZW5lcmF0ZSBhIGtleSBhbmQgSVYgZnJvbSBhIHBhc3N3b3JkLiBEZWZhdWx0OiBPcGVuU1NMXG5cdCAgICAgICAgICovXG5cdCAgICAgICAgY2ZnOiBTZXJpYWxpemFibGVDaXBoZXIuY2ZnLmV4dGVuZCh7XG5cdCAgICAgICAgICAgIGtkZjogT3BlblNTTEtkZlxuXHQgICAgICAgIH0pLFxuXG5cdCAgICAgICAgLyoqXG5cdCAgICAgICAgICogRW5jcnlwdHMgYSBtZXNzYWdlIHVzaW5nIGEgcGFzc3dvcmQuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge0NpcGhlcn0gY2lwaGVyIFRoZSBjaXBoZXIgYWxnb3JpdGhtIHRvIHVzZS5cblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gZW5jcnlwdC5cblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFzc3dvcmQgVGhlIHBhc3N3b3JkLlxuXHQgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjZmcgKE9wdGlvbmFsKSBUaGUgY29uZmlndXJhdGlvbiBvcHRpb25zIHRvIHVzZSBmb3IgdGhpcyBvcGVyYXRpb24uXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtDaXBoZXJQYXJhbXN9IEEgY2lwaGVyIHBhcmFtcyBvYmplY3QuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAc3RhdGljXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAZXhhbXBsZVxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogICAgIHZhciBjaXBoZXJ0ZXh0UGFyYW1zID0gQ3J5cHRvSlMubGliLlBhc3N3b3JkQmFzZWRDaXBoZXIuZW5jcnlwdChDcnlwdG9KUy5hbGdvLkFFUywgbWVzc2FnZSwgJ3Bhc3N3b3JkJyk7XG5cdCAgICAgICAgICogICAgIHZhciBjaXBoZXJ0ZXh0UGFyYW1zID0gQ3J5cHRvSlMubGliLlBhc3N3b3JkQmFzZWRDaXBoZXIuZW5jcnlwdChDcnlwdG9KUy5hbGdvLkFFUywgbWVzc2FnZSwgJ3Bhc3N3b3JkJywgeyBmb3JtYXQ6IENyeXB0b0pTLmZvcm1hdC5PcGVuU1NMIH0pO1xuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGVuY3J5cHQ6IGZ1bmN0aW9uIChjaXBoZXIsIG1lc3NhZ2UsIHBhc3N3b3JkLCBjZmcpIHtcblx0ICAgICAgICAgICAgLy8gQXBwbHkgY29uZmlnIGRlZmF1bHRzXG5cdCAgICAgICAgICAgIGNmZyA9IHRoaXMuY2ZnLmV4dGVuZChjZmcpO1xuXG5cdCAgICAgICAgICAgIC8vIERlcml2ZSBrZXkgYW5kIG90aGVyIHBhcmFtc1xuXHQgICAgICAgICAgICB2YXIgZGVyaXZlZFBhcmFtcyA9IGNmZy5rZGYuZXhlY3V0ZShwYXNzd29yZCwgY2lwaGVyLmtleVNpemUsIGNpcGhlci5pdlNpemUpO1xuXG5cdCAgICAgICAgICAgIC8vIEFkZCBJViB0byBjb25maWdcblx0ICAgICAgICAgICAgY2ZnLml2ID0gZGVyaXZlZFBhcmFtcy5pdjtcblxuXHQgICAgICAgICAgICAvLyBFbmNyeXB0XG5cdCAgICAgICAgICAgIHZhciBjaXBoZXJ0ZXh0ID0gU2VyaWFsaXphYmxlQ2lwaGVyLmVuY3J5cHQuY2FsbCh0aGlzLCBjaXBoZXIsIG1lc3NhZ2UsIGRlcml2ZWRQYXJhbXMua2V5LCBjZmcpO1xuXG5cdCAgICAgICAgICAgIC8vIE1peCBpbiBkZXJpdmVkIHBhcmFtc1xuXHQgICAgICAgICAgICBjaXBoZXJ0ZXh0Lm1peEluKGRlcml2ZWRQYXJhbXMpO1xuXG5cdCAgICAgICAgICAgIHJldHVybiBjaXBoZXJ0ZXh0O1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBEZWNyeXB0cyBzZXJpYWxpemVkIGNpcGhlcnRleHQgdXNpbmcgYSBwYXNzd29yZC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBwYXJhbSB7Q2lwaGVyfSBjaXBoZXIgVGhlIGNpcGhlciBhbGdvcml0aG0gdG8gdXNlLlxuXHQgICAgICAgICAqIEBwYXJhbSB7Q2lwaGVyUGFyYW1zfHN0cmluZ30gY2lwaGVydGV4dCBUaGUgY2lwaGVydGV4dCB0byBkZWNyeXB0LlxuXHQgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXNzd29yZCBUaGUgcGFzc3dvcmQuXG5cdCAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNmZyAoT3B0aW9uYWwpIFRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgdG8gdXNlIGZvciB0aGlzIG9wZXJhdGlvbi5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHBsYWludGV4dC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIHBsYWludGV4dCA9IENyeXB0b0pTLmxpYi5QYXNzd29yZEJhc2VkQ2lwaGVyLmRlY3J5cHQoQ3J5cHRvSlMuYWxnby5BRVMsIGZvcm1hdHRlZENpcGhlcnRleHQsICdwYXNzd29yZCcsIHsgZm9ybWF0OiBDcnlwdG9KUy5mb3JtYXQuT3BlblNTTCB9KTtcblx0ICAgICAgICAgKiAgICAgdmFyIHBsYWludGV4dCA9IENyeXB0b0pTLmxpYi5QYXNzd29yZEJhc2VkQ2lwaGVyLmRlY3J5cHQoQ3J5cHRvSlMuYWxnby5BRVMsIGNpcGhlcnRleHRQYXJhbXMsICdwYXNzd29yZCcsIHsgZm9ybWF0OiBDcnlwdG9KUy5mb3JtYXQuT3BlblNTTCB9KTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBkZWNyeXB0OiBmdW5jdGlvbiAoY2lwaGVyLCBjaXBoZXJ0ZXh0LCBwYXNzd29yZCwgY2ZnKSB7XG5cdCAgICAgICAgICAgIC8vIEFwcGx5IGNvbmZpZyBkZWZhdWx0c1xuXHQgICAgICAgICAgICBjZmcgPSB0aGlzLmNmZy5leHRlbmQoY2ZnKTtcblxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0IHN0cmluZyB0byBDaXBoZXJQYXJhbXNcblx0ICAgICAgICAgICAgY2lwaGVydGV4dCA9IHRoaXMuX3BhcnNlKGNpcGhlcnRleHQsIGNmZy5mb3JtYXQpO1xuXG5cdCAgICAgICAgICAgIC8vIERlcml2ZSBrZXkgYW5kIG90aGVyIHBhcmFtc1xuXHQgICAgICAgICAgICB2YXIgZGVyaXZlZFBhcmFtcyA9IGNmZy5rZGYuZXhlY3V0ZShwYXNzd29yZCwgY2lwaGVyLmtleVNpemUsIGNpcGhlci5pdlNpemUsIGNpcGhlcnRleHQuc2FsdCk7XG5cblx0ICAgICAgICAgICAgLy8gQWRkIElWIHRvIGNvbmZpZ1xuXHQgICAgICAgICAgICBjZmcuaXYgPSBkZXJpdmVkUGFyYW1zLml2O1xuXG5cdCAgICAgICAgICAgIC8vIERlY3J5cHRcblx0ICAgICAgICAgICAgdmFyIHBsYWludGV4dCA9IFNlcmlhbGl6YWJsZUNpcGhlci5kZWNyeXB0LmNhbGwodGhpcywgY2lwaGVyLCBjaXBoZXJ0ZXh0LCBkZXJpdmVkUGFyYW1zLmtleSwgY2ZnKTtcblxuXHQgICAgICAgICAgICByZXR1cm4gcGxhaW50ZXh0O1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXHR9KCkpO1xuXG5cbn0pKTsiLCAiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSwgdW5kZWYpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIiksIHJlcXVpcmUoXCIuL2NpcGhlci1jb3JlXCIpKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXCIuL2NvcmVcIiwgXCIuL2NpcGhlci1jb3JlXCJdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcblxuXHQvKipcblx0ICogQ2lwaGVyIEZlZWRiYWNrIGJsb2NrIG1vZGUuXG5cdCAqL1xuXHRDcnlwdG9KUy5tb2RlLkNGQiA9IChmdW5jdGlvbiAoKSB7XG5cdCAgICB2YXIgQ0ZCID0gQ3J5cHRvSlMubGliLkJsb2NrQ2lwaGVyTW9kZS5leHRlbmQoKTtcblxuXHQgICAgQ0ZCLkVuY3J5cHRvciA9IENGQi5leHRlbmQoe1xuXHQgICAgICAgIHByb2Nlc3NCbG9jazogZnVuY3Rpb24gKHdvcmRzLCBvZmZzZXQpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBjaXBoZXIgPSB0aGlzLl9jaXBoZXI7XG5cdCAgICAgICAgICAgIHZhciBibG9ja1NpemUgPSBjaXBoZXIuYmxvY2tTaXplO1xuXG5cdCAgICAgICAgICAgIGdlbmVyYXRlS2V5c3RyZWFtQW5kRW5jcnlwdC5jYWxsKHRoaXMsIHdvcmRzLCBvZmZzZXQsIGJsb2NrU2l6ZSwgY2lwaGVyKTtcblxuXHQgICAgICAgICAgICAvLyBSZW1lbWJlciB0aGlzIGJsb2NrIHRvIHVzZSB3aXRoIG5leHQgYmxvY2tcblx0ICAgICAgICAgICAgdGhpcy5fcHJldkJsb2NrID0gd29yZHMuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBibG9ja1NpemUpO1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICBDRkIuRGVjcnlwdG9yID0gQ0ZCLmV4dGVuZCh7XG5cdCAgICAgICAgcHJvY2Vzc0Jsb2NrOiBmdW5jdGlvbiAod29yZHMsIG9mZnNldCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIGNpcGhlciA9IHRoaXMuX2NpcGhlcjtcblx0ICAgICAgICAgICAgdmFyIGJsb2NrU2l6ZSA9IGNpcGhlci5ibG9ja1NpemU7XG5cblx0ICAgICAgICAgICAgLy8gUmVtZW1iZXIgdGhpcyBibG9jayB0byB1c2Ugd2l0aCBuZXh0IGJsb2NrXG5cdCAgICAgICAgICAgIHZhciB0aGlzQmxvY2sgPSB3b3Jkcy5zbGljZShvZmZzZXQsIG9mZnNldCArIGJsb2NrU2l6ZSk7XG5cblx0ICAgICAgICAgICAgZ2VuZXJhdGVLZXlzdHJlYW1BbmRFbmNyeXB0LmNhbGwodGhpcywgd29yZHMsIG9mZnNldCwgYmxvY2tTaXplLCBjaXBoZXIpO1xuXG5cdCAgICAgICAgICAgIC8vIFRoaXMgYmxvY2sgYmVjb21lcyB0aGUgcHJldmlvdXMgYmxvY2tcblx0ICAgICAgICAgICAgdGhpcy5fcHJldkJsb2NrID0gdGhpc0Jsb2NrO1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICBmdW5jdGlvbiBnZW5lcmF0ZUtleXN0cmVhbUFuZEVuY3J5cHQod29yZHMsIG9mZnNldCwgYmxvY2tTaXplLCBjaXBoZXIpIHtcblx0ICAgICAgICB2YXIga2V5c3RyZWFtO1xuXG5cdCAgICAgICAgLy8gU2hvcnRjdXRcblx0ICAgICAgICB2YXIgaXYgPSB0aGlzLl9pdjtcblxuXHQgICAgICAgIC8vIEdlbmVyYXRlIGtleXN0cmVhbVxuXHQgICAgICAgIGlmIChpdikge1xuXHQgICAgICAgICAgICBrZXlzdHJlYW0gPSBpdi5zbGljZSgwKTtcblxuXHQgICAgICAgICAgICAvLyBSZW1vdmUgSVYgZm9yIHN1YnNlcXVlbnQgYmxvY2tzXG5cdCAgICAgICAgICAgIHRoaXMuX2l2ID0gdW5kZWZpbmVkO1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIGtleXN0cmVhbSA9IHRoaXMuX3ByZXZCbG9jaztcblx0ICAgICAgICB9XG5cdCAgICAgICAgY2lwaGVyLmVuY3J5cHRCbG9jayhrZXlzdHJlYW0sIDApO1xuXG5cdCAgICAgICAgLy8gRW5jcnlwdFxuXHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmxvY2tTaXplOyBpKyspIHtcblx0ICAgICAgICAgICAgd29yZHNbb2Zmc2V0ICsgaV0gXj0ga2V5c3RyZWFtW2ldO1xuXHQgICAgICAgIH1cblx0ICAgIH1cblxuXHQgICAgcmV0dXJuIENGQjtcblx0fSgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUy5tb2RlLkNGQjtcblxufSkpOyIsICI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5LCB1bmRlZikge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSwgcmVxdWlyZShcIi4vY2lwaGVyLWNvcmVcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiLCBcIi4vY2lwaGVyLWNvcmVcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdC8qKlxuXHQgKiBDb3VudGVyIGJsb2NrIG1vZGUuXG5cdCAqL1xuXHRDcnlwdG9KUy5tb2RlLkNUUiA9IChmdW5jdGlvbiAoKSB7XG5cdCAgICB2YXIgQ1RSID0gQ3J5cHRvSlMubGliLkJsb2NrQ2lwaGVyTW9kZS5leHRlbmQoKTtcblxuXHQgICAgdmFyIEVuY3J5cHRvciA9IENUUi5FbmNyeXB0b3IgPSBDVFIuZXh0ZW5kKHtcblx0ICAgICAgICBwcm9jZXNzQmxvY2s6IGZ1bmN0aW9uICh3b3Jkcywgb2Zmc2V0KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgY2lwaGVyID0gdGhpcy5fY2lwaGVyXG5cdCAgICAgICAgICAgIHZhciBibG9ja1NpemUgPSBjaXBoZXIuYmxvY2tTaXplO1xuXHQgICAgICAgICAgICB2YXIgaXYgPSB0aGlzLl9pdjtcblx0ICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSB0aGlzLl9jb3VudGVyO1xuXG5cdCAgICAgICAgICAgIC8vIEdlbmVyYXRlIGtleXN0cmVhbVxuXHQgICAgICAgICAgICBpZiAoaXYpIHtcblx0ICAgICAgICAgICAgICAgIGNvdW50ZXIgPSB0aGlzLl9jb3VudGVyID0gaXYuc2xpY2UoMCk7XG5cblx0ICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBJViBmb3Igc3Vic2VxdWVudCBibG9ja3Ncblx0ICAgICAgICAgICAgICAgIHRoaXMuX2l2ID0gdW5kZWZpbmVkO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIHZhciBrZXlzdHJlYW0gPSBjb3VudGVyLnNsaWNlKDApO1xuXHQgICAgICAgICAgICBjaXBoZXIuZW5jcnlwdEJsb2NrKGtleXN0cmVhbSwgMCk7XG5cblx0ICAgICAgICAgICAgLy8gSW5jcmVtZW50IGNvdW50ZXJcblx0ICAgICAgICAgICAgY291bnRlcltibG9ja1NpemUgLSAxXSA9IChjb3VudGVyW2Jsb2NrU2l6ZSAtIDFdICsgMSkgfCAwXG5cblx0ICAgICAgICAgICAgLy8gRW5jcnlwdFxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJsb2NrU2l6ZTsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICB3b3Jkc1tvZmZzZXQgKyBpXSBePSBrZXlzdHJlYW1baV07XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICB9KTtcblxuXHQgICAgQ1RSLkRlY3J5cHRvciA9IEVuY3J5cHRvcjtcblxuXHQgICAgcmV0dXJuIENUUjtcblx0fSgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUy5tb2RlLkNUUjtcblxufSkpOyIsICI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5LCB1bmRlZikge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSwgcmVxdWlyZShcIi4vY2lwaGVyLWNvcmVcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiLCBcIi4vY2lwaGVyLWNvcmVcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdC8qKiBAcHJlc2VydmVcblx0ICogQ291bnRlciBibG9jayBtb2RlIGNvbXBhdGlibGUgd2l0aCAgRHIgQnJpYW4gR2xhZG1hbiBmaWxlZW5jLmNcblx0ICogZGVyaXZlZCBmcm9tIENyeXB0b0pTLm1vZGUuQ1RSXG5cdCAqIEphbiBIcnVieSBqaHJ1Ynkud2ViQGdtYWlsLmNvbVxuXHQgKi9cblx0Q3J5cHRvSlMubW9kZS5DVFJHbGFkbWFuID0gKGZ1bmN0aW9uICgpIHtcblx0ICAgIHZhciBDVFJHbGFkbWFuID0gQ3J5cHRvSlMubGliLkJsb2NrQ2lwaGVyTW9kZS5leHRlbmQoKTtcblxuXHRcdGZ1bmN0aW9uIGluY1dvcmQod29yZClcblx0XHR7XG5cdFx0XHRpZiAoKCh3b3JkID4+IDI0KSAmIDB4ZmYpID09PSAweGZmKSB7IC8vb3ZlcmZsb3dcblx0XHRcdHZhciBiMSA9ICh3b3JkID4+IDE2KSYweGZmO1xuXHRcdFx0dmFyIGIyID0gKHdvcmQgPj4gOCkmMHhmZjtcblx0XHRcdHZhciBiMyA9IHdvcmQgJiAweGZmO1xuXG5cdFx0XHRpZiAoYjEgPT09IDB4ZmYpIC8vIG92ZXJmbG93IGIxXG5cdFx0XHR7XG5cdFx0XHRiMSA9IDA7XG5cdFx0XHRpZiAoYjIgPT09IDB4ZmYpXG5cdFx0XHR7XG5cdFx0XHRcdGIyID0gMDtcblx0XHRcdFx0aWYgKGIzID09PSAweGZmKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0YjMgPSAwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0e1xuXHRcdFx0XHRcdCsrYjM7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGVsc2Vcblx0XHRcdHtcblx0XHRcdFx0KytiMjtcblx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGVsc2Vcblx0XHRcdHtcblx0XHRcdCsrYjE7XG5cdFx0XHR9XG5cblx0XHRcdHdvcmQgPSAwO1xuXHRcdFx0d29yZCArPSAoYjEgPDwgMTYpO1xuXHRcdFx0d29yZCArPSAoYjIgPDwgOCk7XG5cdFx0XHR3b3JkICs9IGIzO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZVxuXHRcdFx0e1xuXHRcdFx0d29yZCArPSAoMHgwMSA8PCAyNCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gd29yZDtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBpbmNDb3VudGVyKGNvdW50ZXIpXG5cdFx0e1xuXHRcdFx0aWYgKChjb3VudGVyWzBdID0gaW5jV29yZChjb3VudGVyWzBdKSkgPT09IDApXG5cdFx0XHR7XG5cdFx0XHRcdC8vIGVuY3JfZGF0YSBpbiBmaWxlZW5jLmMgZnJvbSAgRHIgQnJpYW4gR2xhZG1hbidzIGNvdW50cyBvbmx5IHdpdGggRFdPUkQgaiA8IDhcblx0XHRcdFx0Y291bnRlclsxXSA9IGluY1dvcmQoY291bnRlclsxXSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY291bnRlcjtcblx0XHR9XG5cblx0ICAgIHZhciBFbmNyeXB0b3IgPSBDVFJHbGFkbWFuLkVuY3J5cHRvciA9IENUUkdsYWRtYW4uZXh0ZW5kKHtcblx0ICAgICAgICBwcm9jZXNzQmxvY2s6IGZ1bmN0aW9uICh3b3Jkcywgb2Zmc2V0KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgY2lwaGVyID0gdGhpcy5fY2lwaGVyXG5cdCAgICAgICAgICAgIHZhciBibG9ja1NpemUgPSBjaXBoZXIuYmxvY2tTaXplO1xuXHQgICAgICAgICAgICB2YXIgaXYgPSB0aGlzLl9pdjtcblx0ICAgICAgICAgICAgdmFyIGNvdW50ZXIgPSB0aGlzLl9jb3VudGVyO1xuXG5cdCAgICAgICAgICAgIC8vIEdlbmVyYXRlIGtleXN0cmVhbVxuXHQgICAgICAgICAgICBpZiAoaXYpIHtcblx0ICAgICAgICAgICAgICAgIGNvdW50ZXIgPSB0aGlzLl9jb3VudGVyID0gaXYuc2xpY2UoMCk7XG5cblx0ICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBJViBmb3Igc3Vic2VxdWVudCBibG9ja3Ncblx0ICAgICAgICAgICAgICAgIHRoaXMuX2l2ID0gdW5kZWZpbmVkO1xuXHQgICAgICAgICAgICB9XG5cblx0XHRcdFx0aW5jQ291bnRlcihjb3VudGVyKTtcblxuXHRcdFx0XHR2YXIga2V5c3RyZWFtID0gY291bnRlci5zbGljZSgwKTtcblx0ICAgICAgICAgICAgY2lwaGVyLmVuY3J5cHRCbG9jayhrZXlzdHJlYW0sIDApO1xuXG5cdCAgICAgICAgICAgIC8vIEVuY3J5cHRcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBibG9ja1NpemU7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgd29yZHNbb2Zmc2V0ICsgaV0gXj0ga2V5c3RyZWFtW2ldO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgIENUUkdsYWRtYW4uRGVjcnlwdG9yID0gRW5jcnlwdG9yO1xuXG5cdCAgICByZXR1cm4gQ1RSR2xhZG1hbjtcblx0fSgpKTtcblxuXG5cblxuXHRyZXR1cm4gQ3J5cHRvSlMubW9kZS5DVFJHbGFkbWFuO1xuXG59KSk7IiwgIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnksIHVuZGVmKSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpLCByZXF1aXJlKFwiLi9jaXBoZXItY29yZVwiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCIsIFwiLi9jaXBoZXItY29yZVwiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0LyoqXG5cdCAqIE91dHB1dCBGZWVkYmFjayBibG9jayBtb2RlLlxuXHQgKi9cblx0Q3J5cHRvSlMubW9kZS5PRkIgPSAoZnVuY3Rpb24gKCkge1xuXHQgICAgdmFyIE9GQiA9IENyeXB0b0pTLmxpYi5CbG9ja0NpcGhlck1vZGUuZXh0ZW5kKCk7XG5cblx0ICAgIHZhciBFbmNyeXB0b3IgPSBPRkIuRW5jcnlwdG9yID0gT0ZCLmV4dGVuZCh7XG5cdCAgICAgICAgcHJvY2Vzc0Jsb2NrOiBmdW5jdGlvbiAod29yZHMsIG9mZnNldCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIGNpcGhlciA9IHRoaXMuX2NpcGhlclxuXHQgICAgICAgICAgICB2YXIgYmxvY2tTaXplID0gY2lwaGVyLmJsb2NrU2l6ZTtcblx0ICAgICAgICAgICAgdmFyIGl2ID0gdGhpcy5faXY7XG5cdCAgICAgICAgICAgIHZhciBrZXlzdHJlYW0gPSB0aGlzLl9rZXlzdHJlYW07XG5cblx0ICAgICAgICAgICAgLy8gR2VuZXJhdGUga2V5c3RyZWFtXG5cdCAgICAgICAgICAgIGlmIChpdikge1xuXHQgICAgICAgICAgICAgICAga2V5c3RyZWFtID0gdGhpcy5fa2V5c3RyZWFtID0gaXYuc2xpY2UoMCk7XG5cblx0ICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBJViBmb3Igc3Vic2VxdWVudCBibG9ja3Ncblx0ICAgICAgICAgICAgICAgIHRoaXMuX2l2ID0gdW5kZWZpbmVkO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGNpcGhlci5lbmNyeXB0QmxvY2soa2V5c3RyZWFtLCAwKTtcblxuXHQgICAgICAgICAgICAvLyBFbmNyeXB0XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmxvY2tTaXplOyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIHdvcmRzW29mZnNldCArIGldIF49IGtleXN0cmVhbVtpXTtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICBPRkIuRGVjcnlwdG9yID0gRW5jcnlwdG9yO1xuXG5cdCAgICByZXR1cm4gT0ZCO1xuXHR9KCkpO1xuXG5cblx0cmV0dXJuIENyeXB0b0pTLm1vZGUuT0ZCO1xuXG59KSk7IiwgIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnksIHVuZGVmKSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpLCByZXF1aXJlKFwiLi9jaXBoZXItY29yZVwiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCIsIFwiLi9jaXBoZXItY29yZVwiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0LyoqXG5cdCAqIEVsZWN0cm9uaWMgQ29kZWJvb2sgYmxvY2sgbW9kZS5cblx0ICovXG5cdENyeXB0b0pTLm1vZGUuRUNCID0gKGZ1bmN0aW9uICgpIHtcblx0ICAgIHZhciBFQ0IgPSBDcnlwdG9KUy5saWIuQmxvY2tDaXBoZXJNb2RlLmV4dGVuZCgpO1xuXG5cdCAgICBFQ0IuRW5jcnlwdG9yID0gRUNCLmV4dGVuZCh7XG5cdCAgICAgICAgcHJvY2Vzc0Jsb2NrOiBmdW5jdGlvbiAod29yZHMsIG9mZnNldCkge1xuXHQgICAgICAgICAgICB0aGlzLl9jaXBoZXIuZW5jcnlwdEJsb2NrKHdvcmRzLCBvZmZzZXQpO1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICBFQ0IuRGVjcnlwdG9yID0gRUNCLmV4dGVuZCh7XG5cdCAgICAgICAgcHJvY2Vzc0Jsb2NrOiBmdW5jdGlvbiAod29yZHMsIG9mZnNldCkge1xuXHQgICAgICAgICAgICB0aGlzLl9jaXBoZXIuZGVjcnlwdEJsb2NrKHdvcmRzLCBvZmZzZXQpO1xuXHQgICAgICAgIH1cblx0ICAgIH0pO1xuXG5cdCAgICByZXR1cm4gRUNCO1xuXHR9KCkpO1xuXG5cblx0cmV0dXJuIENyeXB0b0pTLm1vZGUuRUNCO1xuXG59KSk7IiwgIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnksIHVuZGVmKSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpLCByZXF1aXJlKFwiLi9jaXBoZXItY29yZVwiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCIsIFwiLi9jaXBoZXItY29yZVwiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0LyoqXG5cdCAqIEFOU0kgWC45MjMgcGFkZGluZyBzdHJhdGVneS5cblx0ICovXG5cdENyeXB0b0pTLnBhZC5BbnNpWDkyMyA9IHtcblx0ICAgIHBhZDogZnVuY3Rpb24gKGRhdGEsIGJsb2NrU2l6ZSkge1xuXHQgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgIHZhciBkYXRhU2lnQnl0ZXMgPSBkYXRhLnNpZ0J5dGVzO1xuXHQgICAgICAgIHZhciBibG9ja1NpemVCeXRlcyA9IGJsb2NrU2l6ZSAqIDQ7XG5cblx0ICAgICAgICAvLyBDb3VudCBwYWRkaW5nIGJ5dGVzXG5cdCAgICAgICAgdmFyIG5QYWRkaW5nQnl0ZXMgPSBibG9ja1NpemVCeXRlcyAtIGRhdGFTaWdCeXRlcyAlIGJsb2NrU2l6ZUJ5dGVzO1xuXG5cdCAgICAgICAgLy8gQ29tcHV0ZSBsYXN0IGJ5dGUgcG9zaXRpb25cblx0ICAgICAgICB2YXIgbGFzdEJ5dGVQb3MgPSBkYXRhU2lnQnl0ZXMgKyBuUGFkZGluZ0J5dGVzIC0gMTtcblxuXHQgICAgICAgIC8vIFBhZFxuXHQgICAgICAgIGRhdGEuY2xhbXAoKTtcblx0ICAgICAgICBkYXRhLndvcmRzW2xhc3RCeXRlUG9zID4+PiAyXSB8PSBuUGFkZGluZ0J5dGVzIDw8ICgyNCAtIChsYXN0Qnl0ZVBvcyAlIDQpICogOCk7XG5cdCAgICAgICAgZGF0YS5zaWdCeXRlcyArPSBuUGFkZGluZ0J5dGVzO1xuXHQgICAgfSxcblxuXHQgICAgdW5wYWQ6IGZ1bmN0aW9uIChkYXRhKSB7XG5cdCAgICAgICAgLy8gR2V0IG51bWJlciBvZiBwYWRkaW5nIGJ5dGVzIGZyb20gbGFzdCBieXRlXG5cdCAgICAgICAgdmFyIG5QYWRkaW5nQnl0ZXMgPSBkYXRhLndvcmRzWyhkYXRhLnNpZ0J5dGVzIC0gMSkgPj4+IDJdICYgMHhmZjtcblxuXHQgICAgICAgIC8vIFJlbW92ZSBwYWRkaW5nXG5cdCAgICAgICAgZGF0YS5zaWdCeXRlcyAtPSBuUGFkZGluZ0J5dGVzO1xuXHQgICAgfVxuXHR9O1xuXG5cblx0cmV0dXJuIENyeXB0b0pTLnBhZC5BbnNpeDkyMztcblxufSkpOyIsICI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5LCB1bmRlZikge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSwgcmVxdWlyZShcIi4vY2lwaGVyLWNvcmVcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiLCBcIi4vY2lwaGVyLWNvcmVcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdC8qKlxuXHQgKiBJU08gMTAxMjYgcGFkZGluZyBzdHJhdGVneS5cblx0ICovXG5cdENyeXB0b0pTLnBhZC5Jc28xMDEyNiA9IHtcblx0ICAgIHBhZDogZnVuY3Rpb24gKGRhdGEsIGJsb2NrU2l6ZSkge1xuXHQgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgdmFyIGJsb2NrU2l6ZUJ5dGVzID0gYmxvY2tTaXplICogNDtcblxuXHQgICAgICAgIC8vIENvdW50IHBhZGRpbmcgYnl0ZXNcblx0ICAgICAgICB2YXIgblBhZGRpbmdCeXRlcyA9IGJsb2NrU2l6ZUJ5dGVzIC0gZGF0YS5zaWdCeXRlcyAlIGJsb2NrU2l6ZUJ5dGVzO1xuXG5cdCAgICAgICAgLy8gUGFkXG5cdCAgICAgICAgZGF0YS5jb25jYXQoQ3J5cHRvSlMubGliLldvcmRBcnJheS5yYW5kb20oblBhZGRpbmdCeXRlcyAtIDEpKS5cblx0ICAgICAgICAgICAgIGNvbmNhdChDcnlwdG9KUy5saWIuV29yZEFycmF5LmNyZWF0ZShbblBhZGRpbmdCeXRlcyA8PCAyNF0sIDEpKTtcblx0ICAgIH0sXG5cblx0ICAgIHVucGFkOiBmdW5jdGlvbiAoZGF0YSkge1xuXHQgICAgICAgIC8vIEdldCBudW1iZXIgb2YgcGFkZGluZyBieXRlcyBmcm9tIGxhc3QgYnl0ZVxuXHQgICAgICAgIHZhciBuUGFkZGluZ0J5dGVzID0gZGF0YS53b3Jkc1soZGF0YS5zaWdCeXRlcyAtIDEpID4+PiAyXSAmIDB4ZmY7XG5cblx0ICAgICAgICAvLyBSZW1vdmUgcGFkZGluZ1xuXHQgICAgICAgIGRhdGEuc2lnQnl0ZXMgLT0gblBhZGRpbmdCeXRlcztcblx0ICAgIH1cblx0fTtcblxuXG5cdHJldHVybiBDcnlwdG9KUy5wYWQuSXNvMTAxMjY7XG5cbn0pKTsiLCAiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSwgdW5kZWYpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIiksIHJlcXVpcmUoXCIuL2NpcGhlci1jb3JlXCIpKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXCIuL2NvcmVcIiwgXCIuL2NpcGhlci1jb3JlXCJdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcblxuXHQvKipcblx0ICogSVNPL0lFQyA5Nzk3LTEgUGFkZGluZyBNZXRob2QgMi5cblx0ICovXG5cdENyeXB0b0pTLnBhZC5Jc285Nzk3MSA9IHtcblx0ICAgIHBhZDogZnVuY3Rpb24gKGRhdGEsIGJsb2NrU2l6ZSkge1xuXHQgICAgICAgIC8vIEFkZCAweDgwIGJ5dGVcblx0ICAgICAgICBkYXRhLmNvbmNhdChDcnlwdG9KUy5saWIuV29yZEFycmF5LmNyZWF0ZShbMHg4MDAwMDAwMF0sIDEpKTtcblxuXHQgICAgICAgIC8vIFplcm8gcGFkIHRoZSByZXN0XG5cdCAgICAgICAgQ3J5cHRvSlMucGFkLlplcm9QYWRkaW5nLnBhZChkYXRhLCBibG9ja1NpemUpO1xuXHQgICAgfSxcblxuXHQgICAgdW5wYWQ6IGZ1bmN0aW9uIChkYXRhKSB7XG5cdCAgICAgICAgLy8gUmVtb3ZlIHplcm8gcGFkZGluZ1xuXHQgICAgICAgIENyeXB0b0pTLnBhZC5aZXJvUGFkZGluZy51bnBhZChkYXRhKTtcblxuXHQgICAgICAgIC8vIFJlbW92ZSBvbmUgbW9yZSBieXRlIC0tIHRoZSAweDgwIGJ5dGVcblx0ICAgICAgICBkYXRhLnNpZ0J5dGVzLS07XG5cdCAgICB9XG5cdH07XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlMucGFkLklzbzk3OTcxO1xuXG59KSk7IiwgIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnksIHVuZGVmKSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpLCByZXF1aXJlKFwiLi9jaXBoZXItY29yZVwiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCIsIFwiLi9jaXBoZXItY29yZVwiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0LyoqXG5cdCAqIFplcm8gcGFkZGluZyBzdHJhdGVneS5cblx0ICovXG5cdENyeXB0b0pTLnBhZC5aZXJvUGFkZGluZyA9IHtcblx0ICAgIHBhZDogZnVuY3Rpb24gKGRhdGEsIGJsb2NrU2l6ZSkge1xuXHQgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgdmFyIGJsb2NrU2l6ZUJ5dGVzID0gYmxvY2tTaXplICogNDtcblxuXHQgICAgICAgIC8vIFBhZFxuXHQgICAgICAgIGRhdGEuY2xhbXAoKTtcblx0ICAgICAgICBkYXRhLnNpZ0J5dGVzICs9IGJsb2NrU2l6ZUJ5dGVzIC0gKChkYXRhLnNpZ0J5dGVzICUgYmxvY2tTaXplQnl0ZXMpIHx8IGJsb2NrU2l6ZUJ5dGVzKTtcblx0ICAgIH0sXG5cblx0ICAgIHVucGFkOiBmdW5jdGlvbiAoZGF0YSkge1xuXHQgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgdmFyIGRhdGFXb3JkcyA9IGRhdGEud29yZHM7XG5cblx0ICAgICAgICAvLyBVbnBhZFxuXHQgICAgICAgIHZhciBpID0gZGF0YS5zaWdCeXRlcyAtIDE7XG5cdCAgICAgICAgZm9yICh2YXIgaSA9IGRhdGEuc2lnQnl0ZXMgLSAxOyBpID49IDA7IGktLSkge1xuXHQgICAgICAgICAgICBpZiAoKChkYXRhV29yZHNbaSA+Pj4gMl0gPj4+ICgyNCAtIChpICUgNCkgKiA4KSkgJiAweGZmKSkge1xuXHQgICAgICAgICAgICAgICAgZGF0YS5zaWdCeXRlcyA9IGkgKyAxO1xuXHQgICAgICAgICAgICAgICAgYnJlYWs7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICB9XG5cdH07XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlMucGFkLlplcm9QYWRkaW5nO1xuXG59KSk7IiwgIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnksIHVuZGVmKSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpLCByZXF1aXJlKFwiLi9jaXBoZXItY29yZVwiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCIsIFwiLi9jaXBoZXItY29yZVwiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0LyoqXG5cdCAqIEEgbm9vcCBwYWRkaW5nIHN0cmF0ZWd5LlxuXHQgKi9cblx0Q3J5cHRvSlMucGFkLk5vUGFkZGluZyA9IHtcblx0ICAgIHBhZDogZnVuY3Rpb24gKCkge1xuXHQgICAgfSxcblxuXHQgICAgdW5wYWQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgIH1cblx0fTtcblxuXG5cdHJldHVybiBDcnlwdG9KUy5wYWQuTm9QYWRkaW5nO1xuXG59KSk7IiwgIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnksIHVuZGVmKSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpLCByZXF1aXJlKFwiLi9jaXBoZXItY29yZVwiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCIsIFwiLi9jaXBoZXItY29yZVwiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0KGZ1bmN0aW9uICh1bmRlZmluZWQpIHtcblx0ICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgdmFyIEMgPSBDcnlwdG9KUztcblx0ICAgIHZhciBDX2xpYiA9IEMubGliO1xuXHQgICAgdmFyIENpcGhlclBhcmFtcyA9IENfbGliLkNpcGhlclBhcmFtcztcblx0ICAgIHZhciBDX2VuYyA9IEMuZW5jO1xuXHQgICAgdmFyIEhleCA9IENfZW5jLkhleDtcblx0ICAgIHZhciBDX2Zvcm1hdCA9IEMuZm9ybWF0O1xuXG5cdCAgICB2YXIgSGV4Rm9ybWF0dGVyID0gQ19mb3JtYXQuSGV4ID0ge1xuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIHRoZSBjaXBoZXJ0ZXh0IG9mIGEgY2lwaGVyIHBhcmFtcyBvYmplY3QgdG8gYSBoZXhhZGVjaW1hbGx5IGVuY29kZWQgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHBhcmFtIHtDaXBoZXJQYXJhbXN9IGNpcGhlclBhcmFtcyBUaGUgY2lwaGVyIHBhcmFtcyBvYmplY3QuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBoZXhhZGVjaW1hbGx5IGVuY29kZWQgc3RyaW5nLlxuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQHN0YXRpY1xuXHQgICAgICAgICAqXG5cdCAgICAgICAgICogQGV4YW1wbGVcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqICAgICB2YXIgaGV4U3RyaW5nID0gQ3J5cHRvSlMuZm9ybWF0LkhleC5zdHJpbmdpZnkoY2lwaGVyUGFyYW1zKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uIChjaXBoZXJQYXJhbXMpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIGNpcGhlclBhcmFtcy5jaXBoZXJ0ZXh0LnRvU3RyaW5nKEhleCk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8qKlxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgaGV4YWRlY2ltYWxseSBlbmNvZGVkIGNpcGhlcnRleHQgc3RyaW5nIHRvIGEgY2lwaGVyIHBhcmFtcyBvYmplY3QuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgVGhlIGhleGFkZWNpbWFsbHkgZW5jb2RlZCBzdHJpbmcuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcmV0dXJuIHtDaXBoZXJQYXJhbXN9IFRoZSBjaXBoZXIgcGFyYW1zIG9iamVjdC5cblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBzdGF0aWNcblx0ICAgICAgICAgKlxuXHQgICAgICAgICAqIEBleGFtcGxlXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiAgICAgdmFyIGNpcGhlclBhcmFtcyA9IENyeXB0b0pTLmZvcm1hdC5IZXgucGFyc2UoaGV4U3RyaW5nKTtcblx0ICAgICAgICAgKi9cblx0ICAgICAgICBwYXJzZTogZnVuY3Rpb24gKGlucHV0KSB7XG5cdCAgICAgICAgICAgIHZhciBjaXBoZXJ0ZXh0ID0gSGV4LnBhcnNlKGlucHV0KTtcblx0ICAgICAgICAgICAgcmV0dXJuIENpcGhlclBhcmFtcy5jcmVhdGUoeyBjaXBoZXJ0ZXh0OiBjaXBoZXJ0ZXh0IH0pO1xuXHQgICAgICAgIH1cblx0ICAgIH07XG5cdH0oKSk7XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlMuZm9ybWF0LkhleDtcblxufSkpOyIsICI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5LCB1bmRlZikge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSwgcmVxdWlyZShcIi4vZW5jLWJhc2U2NFwiKSwgcmVxdWlyZShcIi4vbWQ1XCIpLCByZXF1aXJlKFwiLi9ldnBrZGZcIiksIHJlcXVpcmUoXCIuL2NpcGhlci1jb3JlXCIpKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXCIuL2NvcmVcIiwgXCIuL2VuYy1iYXNlNjRcIiwgXCIuL21kNVwiLCBcIi4vZXZwa2RmXCIsIFwiLi9jaXBoZXItY29yZVwiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0KGZ1bmN0aW9uICgpIHtcblx0ICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgdmFyIEMgPSBDcnlwdG9KUztcblx0ICAgIHZhciBDX2xpYiA9IEMubGliO1xuXHQgICAgdmFyIEJsb2NrQ2lwaGVyID0gQ19saWIuQmxvY2tDaXBoZXI7XG5cdCAgICB2YXIgQ19hbGdvID0gQy5hbGdvO1xuXG5cdCAgICAvLyBMb29rdXAgdGFibGVzXG5cdCAgICB2YXIgU0JPWCA9IFtdO1xuXHQgICAgdmFyIElOVl9TQk9YID0gW107XG5cdCAgICB2YXIgU1VCX01JWF8wID0gW107XG5cdCAgICB2YXIgU1VCX01JWF8xID0gW107XG5cdCAgICB2YXIgU1VCX01JWF8yID0gW107XG5cdCAgICB2YXIgU1VCX01JWF8zID0gW107XG5cdCAgICB2YXIgSU5WX1NVQl9NSVhfMCA9IFtdO1xuXHQgICAgdmFyIElOVl9TVUJfTUlYXzEgPSBbXTtcblx0ICAgIHZhciBJTlZfU1VCX01JWF8yID0gW107XG5cdCAgICB2YXIgSU5WX1NVQl9NSVhfMyA9IFtdO1xuXG5cdCAgICAvLyBDb21wdXRlIGxvb2t1cCB0YWJsZXNcblx0ICAgIChmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgLy8gQ29tcHV0ZSBkb3VibGUgdGFibGVcblx0ICAgICAgICB2YXIgZCA9IFtdO1xuXHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyBpKyspIHtcblx0ICAgICAgICAgICAgaWYgKGkgPCAxMjgpIHtcblx0ICAgICAgICAgICAgICAgIGRbaV0gPSBpIDw8IDE7XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgICBkW2ldID0gKGkgPDwgMSkgXiAweDExYjtcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH1cblxuXHQgICAgICAgIC8vIFdhbGsgR0YoMl44KVxuXHQgICAgICAgIHZhciB4ID0gMDtcblx0ICAgICAgICB2YXIgeGkgPSAwO1xuXHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyBpKyspIHtcblx0ICAgICAgICAgICAgLy8gQ29tcHV0ZSBzYm94XG5cdCAgICAgICAgICAgIHZhciBzeCA9IHhpIF4gKHhpIDw8IDEpIF4gKHhpIDw8IDIpIF4gKHhpIDw8IDMpIF4gKHhpIDw8IDQpO1xuXHQgICAgICAgICAgICBzeCA9IChzeCA+Pj4gOCkgXiAoc3ggJiAweGZmKSBeIDB4NjM7XG5cdCAgICAgICAgICAgIFNCT1hbeF0gPSBzeDtcblx0ICAgICAgICAgICAgSU5WX1NCT1hbc3hdID0geDtcblxuXHQgICAgICAgICAgICAvLyBDb21wdXRlIG11bHRpcGxpY2F0aW9uXG5cdCAgICAgICAgICAgIHZhciB4MiA9IGRbeF07XG5cdCAgICAgICAgICAgIHZhciB4NCA9IGRbeDJdO1xuXHQgICAgICAgICAgICB2YXIgeDggPSBkW3g0XTtcblxuXHQgICAgICAgICAgICAvLyBDb21wdXRlIHN1YiBieXRlcywgbWl4IGNvbHVtbnMgdGFibGVzXG5cdCAgICAgICAgICAgIHZhciB0ID0gKGRbc3hdICogMHgxMDEpIF4gKHN4ICogMHgxMDEwMTAwKTtcblx0ICAgICAgICAgICAgU1VCX01JWF8wW3hdID0gKHQgPDwgMjQpIHwgKHQgPj4+IDgpO1xuXHQgICAgICAgICAgICBTVUJfTUlYXzFbeF0gPSAodCA8PCAxNikgfCAodCA+Pj4gMTYpO1xuXHQgICAgICAgICAgICBTVUJfTUlYXzJbeF0gPSAodCA8PCA4KSAgfCAodCA+Pj4gMjQpO1xuXHQgICAgICAgICAgICBTVUJfTUlYXzNbeF0gPSB0O1xuXG5cdCAgICAgICAgICAgIC8vIENvbXB1dGUgaW52IHN1YiBieXRlcywgaW52IG1peCBjb2x1bW5zIHRhYmxlc1xuXHQgICAgICAgICAgICB2YXIgdCA9ICh4OCAqIDB4MTAxMDEwMSkgXiAoeDQgKiAweDEwMDAxKSBeICh4MiAqIDB4MTAxKSBeICh4ICogMHgxMDEwMTAwKTtcblx0ICAgICAgICAgICAgSU5WX1NVQl9NSVhfMFtzeF0gPSAodCA8PCAyNCkgfCAodCA+Pj4gOCk7XG5cdCAgICAgICAgICAgIElOVl9TVUJfTUlYXzFbc3hdID0gKHQgPDwgMTYpIHwgKHQgPj4+IDE2KTtcblx0ICAgICAgICAgICAgSU5WX1NVQl9NSVhfMltzeF0gPSAodCA8PCA4KSAgfCAodCA+Pj4gMjQpO1xuXHQgICAgICAgICAgICBJTlZfU1VCX01JWF8zW3N4XSA9IHQ7XG5cblx0ICAgICAgICAgICAgLy8gQ29tcHV0ZSBuZXh0IGNvdW50ZXJcblx0ICAgICAgICAgICAgaWYgKCF4KSB7XG5cdCAgICAgICAgICAgICAgICB4ID0geGkgPSAxO1xuXHQgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgeCA9IHgyIF4gZFtkW2RbeDggXiB4Ml1dXTtcblx0ICAgICAgICAgICAgICAgIHhpIF49IGRbZFt4aV1dO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgfSgpKTtcblxuXHQgICAgLy8gUHJlY29tcHV0ZWQgUmNvbiBsb29rdXBcblx0ICAgIHZhciBSQ09OID0gWzB4MDAsIDB4MDEsIDB4MDIsIDB4MDQsIDB4MDgsIDB4MTAsIDB4MjAsIDB4NDAsIDB4ODAsIDB4MWIsIDB4MzZdO1xuXG5cdCAgICAvKipcblx0ICAgICAqIEFFUyBibG9jayBjaXBoZXIgYWxnb3JpdGhtLlxuXHQgICAgICovXG5cdCAgICB2YXIgQUVTID0gQ19hbGdvLkFFUyA9IEJsb2NrQ2lwaGVyLmV4dGVuZCh7XG5cdCAgICAgICAgX2RvUmVzZXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgdmFyIHQ7XG5cblx0ICAgICAgICAgICAgLy8gU2tpcCByZXNldCBvZiBuUm91bmRzIGhhcyBiZWVuIHNldCBiZWZvcmUgYW5kIGtleSBkaWQgbm90IGNoYW5nZVxuXHQgICAgICAgICAgICBpZiAodGhpcy5fblJvdW5kcyAmJiB0aGlzLl9rZXlQcmlvclJlc2V0ID09PSB0aGlzLl9rZXkpIHtcblx0ICAgICAgICAgICAgICAgIHJldHVybjtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIga2V5ID0gdGhpcy5fa2V5UHJpb3JSZXNldCA9IHRoaXMuX2tleTtcblx0ICAgICAgICAgICAgdmFyIGtleVdvcmRzID0ga2V5LndvcmRzO1xuXHQgICAgICAgICAgICB2YXIga2V5U2l6ZSA9IGtleS5zaWdCeXRlcyAvIDQ7XG5cblx0ICAgICAgICAgICAgLy8gQ29tcHV0ZSBudW1iZXIgb2Ygcm91bmRzXG5cdCAgICAgICAgICAgIHZhciBuUm91bmRzID0gdGhpcy5fblJvdW5kcyA9IGtleVNpemUgKyA2O1xuXG5cdCAgICAgICAgICAgIC8vIENvbXB1dGUgbnVtYmVyIG9mIGtleSBzY2hlZHVsZSByb3dzXG5cdCAgICAgICAgICAgIHZhciBrc1Jvd3MgPSAoblJvdW5kcyArIDEpICogNDtcblxuXHQgICAgICAgICAgICAvLyBDb21wdXRlIGtleSBzY2hlZHVsZVxuXHQgICAgICAgICAgICB2YXIga2V5U2NoZWR1bGUgPSB0aGlzLl9rZXlTY2hlZHVsZSA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBrc1JvdyA9IDA7IGtzUm93IDwga3NSb3dzOyBrc1JvdysrKSB7XG5cdCAgICAgICAgICAgICAgICBpZiAoa3NSb3cgPCBrZXlTaXplKSB7XG5cdCAgICAgICAgICAgICAgICAgICAga2V5U2NoZWR1bGVba3NSb3ddID0ga2V5V29yZHNba3NSb3ddO1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICB0ID0ga2V5U2NoZWR1bGVba3NSb3cgLSAxXTtcblxuXHQgICAgICAgICAgICAgICAgICAgIGlmICghKGtzUm93ICUga2V5U2l6ZSkpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgLy8gUm90IHdvcmRcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdCA9ICh0IDw8IDgpIHwgKHQgPj4+IDI0KTtcblxuXHQgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdWIgd29yZFxuXHQgICAgICAgICAgICAgICAgICAgICAgICB0ID0gKFNCT1hbdCA+Pj4gMjRdIDw8IDI0KSB8IChTQk9YWyh0ID4+PiAxNikgJiAweGZmXSA8PCAxNikgfCAoU0JPWFsodCA+Pj4gOCkgJiAweGZmXSA8PCA4KSB8IFNCT1hbdCAmIDB4ZmZdO1xuXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1peCBSY29uXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHQgXj0gUkNPTlsoa3NSb3cgLyBrZXlTaXplKSB8IDBdIDw8IDI0O1xuXHQgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5U2l6ZSA+IDYgJiYga3NSb3cgJSBrZXlTaXplID09IDQpIHtcblx0ICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3ViIHdvcmRcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdCA9IChTQk9YW3QgPj4+IDI0XSA8PCAyNCkgfCAoU0JPWFsodCA+Pj4gMTYpICYgMHhmZl0gPDwgMTYpIHwgKFNCT1hbKHQgPj4+IDgpICYgMHhmZl0gPDwgOCkgfCBTQk9YW3QgJiAweGZmXTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgICAgICBrZXlTY2hlZHVsZVtrc1Jvd10gPSBrZXlTY2hlZHVsZVtrc1JvdyAtIGtleVNpemVdIF4gdDtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIENvbXB1dGUgaW52IGtleSBzY2hlZHVsZVxuXHQgICAgICAgICAgICB2YXIgaW52S2V5U2NoZWR1bGUgPSB0aGlzLl9pbnZLZXlTY2hlZHVsZSA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpbnZLc1JvdyA9IDA7IGludktzUm93IDwga3NSb3dzOyBpbnZLc1JvdysrKSB7XG5cdCAgICAgICAgICAgICAgICB2YXIga3NSb3cgPSBrc1Jvd3MgLSBpbnZLc1JvdztcblxuXHQgICAgICAgICAgICAgICAgaWYgKGludktzUm93ICUgNCkge1xuXHQgICAgICAgICAgICAgICAgICAgIHZhciB0ID0ga2V5U2NoZWR1bGVba3NSb3ddO1xuXHQgICAgICAgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IGtleVNjaGVkdWxlW2tzUm93IC0gNF07XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIGlmIChpbnZLc1JvdyA8IDQgfHwga3NSb3cgPD0gNCkge1xuXHQgICAgICAgICAgICAgICAgICAgIGludktleVNjaGVkdWxlW2ludktzUm93XSA9IHQ7XG5cdCAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgICAgICAgIGludktleVNjaGVkdWxlW2ludktzUm93XSA9IElOVl9TVUJfTUlYXzBbU0JPWFt0ID4+PiAyNF1dIF4gSU5WX1NVQl9NSVhfMVtTQk9YWyh0ID4+PiAxNikgJiAweGZmXV0gXlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElOVl9TVUJfTUlYXzJbU0JPWFsodCA+Pj4gOCkgJiAweGZmXV0gXiBJTlZfU1VCX01JWF8zW1NCT1hbdCAmIDB4ZmZdXTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBlbmNyeXB0QmxvY2s6IGZ1bmN0aW9uIChNLCBvZmZzZXQpIHtcblx0ICAgICAgICAgICAgdGhpcy5fZG9DcnlwdEJsb2NrKE0sIG9mZnNldCwgdGhpcy5fa2V5U2NoZWR1bGUsIFNVQl9NSVhfMCwgU1VCX01JWF8xLCBTVUJfTUlYXzIsIFNVQl9NSVhfMywgU0JPWCk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIGRlY3J5cHRCbG9jazogZnVuY3Rpb24gKE0sIG9mZnNldCkge1xuXHQgICAgICAgICAgICAvLyBTd2FwIDJuZCBhbmQgNHRoIHJvd3Ncblx0ICAgICAgICAgICAgdmFyIHQgPSBNW29mZnNldCArIDFdO1xuXHQgICAgICAgICAgICBNW29mZnNldCArIDFdID0gTVtvZmZzZXQgKyAzXTtcblx0ICAgICAgICAgICAgTVtvZmZzZXQgKyAzXSA9IHQ7XG5cblx0ICAgICAgICAgICAgdGhpcy5fZG9DcnlwdEJsb2NrKE0sIG9mZnNldCwgdGhpcy5faW52S2V5U2NoZWR1bGUsIElOVl9TVUJfTUlYXzAsIElOVl9TVUJfTUlYXzEsIElOVl9TVUJfTUlYXzIsIElOVl9TVUJfTUlYXzMsIElOVl9TQk9YKTtcblxuXHQgICAgICAgICAgICAvLyBJbnYgc3dhcCAybmQgYW5kIDR0aCByb3dzXG5cdCAgICAgICAgICAgIHZhciB0ID0gTVtvZmZzZXQgKyAxXTtcblx0ICAgICAgICAgICAgTVtvZmZzZXQgKyAxXSA9IE1bb2Zmc2V0ICsgM107XG5cdCAgICAgICAgICAgIE1bb2Zmc2V0ICsgM10gPSB0O1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBfZG9DcnlwdEJsb2NrOiBmdW5jdGlvbiAoTSwgb2Zmc2V0LCBrZXlTY2hlZHVsZSwgU1VCX01JWF8wLCBTVUJfTUlYXzEsIFNVQl9NSVhfMiwgU1VCX01JWF8zLCBTQk9YKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgICAgIHZhciBuUm91bmRzID0gdGhpcy5fblJvdW5kcztcblxuXHQgICAgICAgICAgICAvLyBHZXQgaW5wdXQsIGFkZCByb3VuZCBrZXlcblx0ICAgICAgICAgICAgdmFyIHMwID0gTVtvZmZzZXRdICAgICBeIGtleVNjaGVkdWxlWzBdO1xuXHQgICAgICAgICAgICB2YXIgczEgPSBNW29mZnNldCArIDFdIF4ga2V5U2NoZWR1bGVbMV07XG5cdCAgICAgICAgICAgIHZhciBzMiA9IE1bb2Zmc2V0ICsgMl0gXiBrZXlTY2hlZHVsZVsyXTtcblx0ICAgICAgICAgICAgdmFyIHMzID0gTVtvZmZzZXQgKyAzXSBeIGtleVNjaGVkdWxlWzNdO1xuXG5cdCAgICAgICAgICAgIC8vIEtleSBzY2hlZHVsZSByb3cgY291bnRlclxuXHQgICAgICAgICAgICB2YXIga3NSb3cgPSA0O1xuXG5cdCAgICAgICAgICAgIC8vIFJvdW5kc1xuXHQgICAgICAgICAgICBmb3IgKHZhciByb3VuZCA9IDE7IHJvdW5kIDwgblJvdW5kczsgcm91bmQrKykge1xuXHQgICAgICAgICAgICAgICAgLy8gU2hpZnQgcm93cywgc3ViIGJ5dGVzLCBtaXggY29sdW1ucywgYWRkIHJvdW5kIGtleVxuXHQgICAgICAgICAgICAgICAgdmFyIHQwID0gU1VCX01JWF8wW3MwID4+PiAyNF0gXiBTVUJfTUlYXzFbKHMxID4+PiAxNikgJiAweGZmXSBeIFNVQl9NSVhfMlsoczIgPj4+IDgpICYgMHhmZl0gXiBTVUJfTUlYXzNbczMgJiAweGZmXSBeIGtleVNjaGVkdWxlW2tzUm93KytdO1xuXHQgICAgICAgICAgICAgICAgdmFyIHQxID0gU1VCX01JWF8wW3MxID4+PiAyNF0gXiBTVUJfTUlYXzFbKHMyID4+PiAxNikgJiAweGZmXSBeIFNVQl9NSVhfMlsoczMgPj4+IDgpICYgMHhmZl0gXiBTVUJfTUlYXzNbczAgJiAweGZmXSBeIGtleVNjaGVkdWxlW2tzUm93KytdO1xuXHQgICAgICAgICAgICAgICAgdmFyIHQyID0gU1VCX01JWF8wW3MyID4+PiAyNF0gXiBTVUJfTUlYXzFbKHMzID4+PiAxNikgJiAweGZmXSBeIFNVQl9NSVhfMlsoczAgPj4+IDgpICYgMHhmZl0gXiBTVUJfTUlYXzNbczEgJiAweGZmXSBeIGtleVNjaGVkdWxlW2tzUm93KytdO1xuXHQgICAgICAgICAgICAgICAgdmFyIHQzID0gU1VCX01JWF8wW3MzID4+PiAyNF0gXiBTVUJfTUlYXzFbKHMwID4+PiAxNikgJiAweGZmXSBeIFNVQl9NSVhfMlsoczEgPj4+IDgpICYgMHhmZl0gXiBTVUJfTUlYXzNbczIgJiAweGZmXSBeIGtleVNjaGVkdWxlW2tzUm93KytdO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBVcGRhdGUgc3RhdGVcblx0ICAgICAgICAgICAgICAgIHMwID0gdDA7XG5cdCAgICAgICAgICAgICAgICBzMSA9IHQxO1xuXHQgICAgICAgICAgICAgICAgczIgPSB0Mjtcblx0ICAgICAgICAgICAgICAgIHMzID0gdDM7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBTaGlmdCByb3dzLCBzdWIgYnl0ZXMsIGFkZCByb3VuZCBrZXlcblx0ICAgICAgICAgICAgdmFyIHQwID0gKChTQk9YW3MwID4+PiAyNF0gPDwgMjQpIHwgKFNCT1hbKHMxID4+PiAxNikgJiAweGZmXSA8PCAxNikgfCAoU0JPWFsoczIgPj4+IDgpICYgMHhmZl0gPDwgOCkgfCBTQk9YW3MzICYgMHhmZl0pIF4ga2V5U2NoZWR1bGVba3NSb3crK107XG5cdCAgICAgICAgICAgIHZhciB0MSA9ICgoU0JPWFtzMSA+Pj4gMjRdIDw8IDI0KSB8IChTQk9YWyhzMiA+Pj4gMTYpICYgMHhmZl0gPDwgMTYpIHwgKFNCT1hbKHMzID4+PiA4KSAmIDB4ZmZdIDw8IDgpIHwgU0JPWFtzMCAmIDB4ZmZdKSBeIGtleVNjaGVkdWxlW2tzUm93KytdO1xuXHQgICAgICAgICAgICB2YXIgdDIgPSAoKFNCT1hbczIgPj4+IDI0XSA8PCAyNCkgfCAoU0JPWFsoczMgPj4+IDE2KSAmIDB4ZmZdIDw8IDE2KSB8IChTQk9YWyhzMCA+Pj4gOCkgJiAweGZmXSA8PCA4KSB8IFNCT1hbczEgJiAweGZmXSkgXiBrZXlTY2hlZHVsZVtrc1JvdysrXTtcblx0ICAgICAgICAgICAgdmFyIHQzID0gKChTQk9YW3MzID4+PiAyNF0gPDwgMjQpIHwgKFNCT1hbKHMwID4+PiAxNikgJiAweGZmXSA8PCAxNikgfCAoU0JPWFsoczEgPj4+IDgpICYgMHhmZl0gPDwgOCkgfCBTQk9YW3MyICYgMHhmZl0pIF4ga2V5U2NoZWR1bGVba3NSb3crK107XG5cblx0ICAgICAgICAgICAgLy8gU2V0IG91dHB1dFxuXHQgICAgICAgICAgICBNW29mZnNldF0gICAgID0gdDA7XG5cdCAgICAgICAgICAgIE1bb2Zmc2V0ICsgMV0gPSB0MTtcblx0ICAgICAgICAgICAgTVtvZmZzZXQgKyAyXSA9IHQyO1xuXHQgICAgICAgICAgICBNW29mZnNldCArIDNdID0gdDM7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIGtleVNpemU6IDI1Ni8zMlxuXHQgICAgfSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb25zIHRvIHRoZSBjaXBoZXIncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICpcblx0ICAgICAqIEBleGFtcGxlXG5cdCAgICAgKlxuXHQgICAgICogICAgIHZhciBjaXBoZXJ0ZXh0ID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQobWVzc2FnZSwga2V5LCBjZmcpO1xuXHQgICAgICogICAgIHZhciBwbGFpbnRleHQgID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQoY2lwaGVydGV4dCwga2V5LCBjZmcpO1xuXHQgICAgICovXG5cdCAgICBDLkFFUyA9IEJsb2NrQ2lwaGVyLl9jcmVhdGVIZWxwZXIoQUVTKTtcblx0fSgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUy5BRVM7XG5cbn0pKTsiLCAiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSwgdW5kZWYpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIiksIHJlcXVpcmUoXCIuL2VuYy1iYXNlNjRcIiksIHJlcXVpcmUoXCIuL21kNVwiKSwgcmVxdWlyZShcIi4vZXZwa2RmXCIpLCByZXF1aXJlKFwiLi9jaXBoZXItY29yZVwiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCIsIFwiLi9lbmMtYmFzZTY0XCIsIFwiLi9tZDVcIiwgXCIuL2V2cGtkZlwiLCBcIi4vY2lwaGVyLWNvcmVcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdChmdW5jdGlvbiAoKSB7XG5cdCAgICAvLyBTaG9ydGN1dHNcblx0ICAgIHZhciBDID0gQ3J5cHRvSlM7XG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYjtcblx0ICAgIHZhciBXb3JkQXJyYXkgPSBDX2xpYi5Xb3JkQXJyYXk7XG5cdCAgICB2YXIgQmxvY2tDaXBoZXIgPSBDX2xpYi5CbG9ja0NpcGhlcjtcblx0ICAgIHZhciBDX2FsZ28gPSBDLmFsZ287XG5cblx0ICAgIC8vIFBlcm11dGVkIENob2ljZSAxIGNvbnN0YW50c1xuXHQgICAgdmFyIFBDMSA9IFtcblx0ICAgICAgICA1NywgNDksIDQxLCAzMywgMjUsIDE3LCA5LCAgMSxcblx0ICAgICAgICA1OCwgNTAsIDQyLCAzNCwgMjYsIDE4LCAxMCwgMixcblx0ICAgICAgICA1OSwgNTEsIDQzLCAzNSwgMjcsIDE5LCAxMSwgMyxcblx0ICAgICAgICA2MCwgNTIsIDQ0LCAzNiwgNjMsIDU1LCA0NywgMzksXG5cdCAgICAgICAgMzEsIDIzLCAxNSwgNywgIDYyLCA1NCwgNDYsIDM4LFxuXHQgICAgICAgIDMwLCAyMiwgMTQsIDYsICA2MSwgNTMsIDQ1LCAzNyxcblx0ICAgICAgICAyOSwgMjEsIDEzLCA1LCAgMjgsIDIwLCAxMiwgNFxuXHQgICAgXTtcblxuXHQgICAgLy8gUGVybXV0ZWQgQ2hvaWNlIDIgY29uc3RhbnRzXG5cdCAgICB2YXIgUEMyID0gW1xuXHQgICAgICAgIDE0LCAxNywgMTEsIDI0LCAxLCAgNSxcblx0ICAgICAgICAzLCAgMjgsIDE1LCA2LCAgMjEsIDEwLFxuXHQgICAgICAgIDIzLCAxOSwgMTIsIDQsICAyNiwgOCxcblx0ICAgICAgICAxNiwgNywgIDI3LCAyMCwgMTMsIDIsXG5cdCAgICAgICAgNDEsIDUyLCAzMSwgMzcsIDQ3LCA1NSxcblx0ICAgICAgICAzMCwgNDAsIDUxLCA0NSwgMzMsIDQ4LFxuXHQgICAgICAgIDQ0LCA0OSwgMzksIDU2LCAzNCwgNTMsXG5cdCAgICAgICAgNDYsIDQyLCA1MCwgMzYsIDI5LCAzMlxuXHQgICAgXTtcblxuXHQgICAgLy8gQ3VtdWxhdGl2ZSBiaXQgc2hpZnQgY29uc3RhbnRzXG5cdCAgICB2YXIgQklUX1NISUZUUyA9IFsxLCAgMiwgIDQsICA2LCAgOCwgIDEwLCAxMiwgMTQsIDE1LCAxNywgMTksIDIxLCAyMywgMjUsIDI3LCAyOF07XG5cblx0ICAgIC8vIFNCT1hlcyBhbmQgcm91bmQgcGVybXV0YXRpb24gY29uc3RhbnRzXG5cdCAgICB2YXIgU0JPWF9QID0gW1xuXHQgICAgICAgIHtcblx0ICAgICAgICAgICAgMHgwOiAweDgwODIwMCxcblx0ICAgICAgICAgICAgMHgxMDAwMDAwMDogMHg4MDAwLFxuXHQgICAgICAgICAgICAweDIwMDAwMDAwOiAweDgwODAwMixcblx0ICAgICAgICAgICAgMHgzMDAwMDAwMDogMHgyLFxuXHQgICAgICAgICAgICAweDQwMDAwMDAwOiAweDIwMCxcblx0ICAgICAgICAgICAgMHg1MDAwMDAwMDogMHg4MDgyMDIsXG5cdCAgICAgICAgICAgIDB4NjAwMDAwMDA6IDB4ODAwMjAyLFxuXHQgICAgICAgICAgICAweDcwMDAwMDAwOiAweDgwMDAwMCxcblx0ICAgICAgICAgICAgMHg4MDAwMDAwMDogMHgyMDIsXG5cdCAgICAgICAgICAgIDB4OTAwMDAwMDA6IDB4ODAwMjAwLFxuXHQgICAgICAgICAgICAweGEwMDAwMDAwOiAweDgyMDAsXG5cdCAgICAgICAgICAgIDB4YjAwMDAwMDA6IDB4ODA4MDAwLFxuXHQgICAgICAgICAgICAweGMwMDAwMDAwOiAweDgwMDIsXG5cdCAgICAgICAgICAgIDB4ZDAwMDAwMDA6IDB4ODAwMDAyLFxuXHQgICAgICAgICAgICAweGUwMDAwMDAwOiAweDAsXG5cdCAgICAgICAgICAgIDB4ZjAwMDAwMDA6IDB4ODIwMixcblx0ICAgICAgICAgICAgMHg4MDAwMDAwOiAweDAsXG5cdCAgICAgICAgICAgIDB4MTgwMDAwMDA6IDB4ODA4MjAyLFxuXHQgICAgICAgICAgICAweDI4MDAwMDAwOiAweDgyMDIsXG5cdCAgICAgICAgICAgIDB4MzgwMDAwMDA6IDB4ODAwMCxcblx0ICAgICAgICAgICAgMHg0ODAwMDAwMDogMHg4MDgyMDAsXG5cdCAgICAgICAgICAgIDB4NTgwMDAwMDA6IDB4MjAwLFxuXHQgICAgICAgICAgICAweDY4MDAwMDAwOiAweDgwODAwMixcblx0ICAgICAgICAgICAgMHg3ODAwMDAwMDogMHgyLFxuXHQgICAgICAgICAgICAweDg4MDAwMDAwOiAweDgwMDIwMCxcblx0ICAgICAgICAgICAgMHg5ODAwMDAwMDogMHg4MjAwLFxuXHQgICAgICAgICAgICAweGE4MDAwMDAwOiAweDgwODAwMCxcblx0ICAgICAgICAgICAgMHhiODAwMDAwMDogMHg4MDAyMDIsXG5cdCAgICAgICAgICAgIDB4YzgwMDAwMDA6IDB4ODAwMDAyLFxuXHQgICAgICAgICAgICAweGQ4MDAwMDAwOiAweDgwMDIsXG5cdCAgICAgICAgICAgIDB4ZTgwMDAwMDA6IDB4MjAyLFxuXHQgICAgICAgICAgICAweGY4MDAwMDAwOiAweDgwMDAwMCxcblx0ICAgICAgICAgICAgMHgxOiAweDgwMDAsXG5cdCAgICAgICAgICAgIDB4MTAwMDAwMDE6IDB4Mixcblx0ICAgICAgICAgICAgMHgyMDAwMDAwMTogMHg4MDgyMDAsXG5cdCAgICAgICAgICAgIDB4MzAwMDAwMDE6IDB4ODAwMDAwLFxuXHQgICAgICAgICAgICAweDQwMDAwMDAxOiAweDgwODAwMixcblx0ICAgICAgICAgICAgMHg1MDAwMDAwMTogMHg4MjAwLFxuXHQgICAgICAgICAgICAweDYwMDAwMDAxOiAweDIwMCxcblx0ICAgICAgICAgICAgMHg3MDAwMDAwMTogMHg4MDAyMDIsXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMDE6IDB4ODA4MjAyLFxuXHQgICAgICAgICAgICAweDkwMDAwMDAxOiAweDgwODAwMCxcblx0ICAgICAgICAgICAgMHhhMDAwMDAwMTogMHg4MDAwMDIsXG5cdCAgICAgICAgICAgIDB4YjAwMDAwMDE6IDB4ODIwMixcblx0ICAgICAgICAgICAgMHhjMDAwMDAwMTogMHgyMDIsXG5cdCAgICAgICAgICAgIDB4ZDAwMDAwMDE6IDB4ODAwMjAwLFxuXHQgICAgICAgICAgICAweGUwMDAwMDAxOiAweDgwMDIsXG5cdCAgICAgICAgICAgIDB4ZjAwMDAwMDE6IDB4MCxcblx0ICAgICAgICAgICAgMHg4MDAwMDAxOiAweDgwODIwMixcblx0ICAgICAgICAgICAgMHgxODAwMDAwMTogMHg4MDgwMDAsXG5cdCAgICAgICAgICAgIDB4MjgwMDAwMDE6IDB4ODAwMDAwLFxuXHQgICAgICAgICAgICAweDM4MDAwMDAxOiAweDIwMCxcblx0ICAgICAgICAgICAgMHg0ODAwMDAwMTogMHg4MDAwLFxuXHQgICAgICAgICAgICAweDU4MDAwMDAxOiAweDgwMDAwMixcblx0ICAgICAgICAgICAgMHg2ODAwMDAwMTogMHgyLFxuXHQgICAgICAgICAgICAweDc4MDAwMDAxOiAweDgyMDIsXG5cdCAgICAgICAgICAgIDB4ODgwMDAwMDE6IDB4ODAwMixcblx0ICAgICAgICAgICAgMHg5ODAwMDAwMTogMHg4MDAyMDIsXG5cdCAgICAgICAgICAgIDB4YTgwMDAwMDE6IDB4MjAyLFxuXHQgICAgICAgICAgICAweGI4MDAwMDAxOiAweDgwODIwMCxcblx0ICAgICAgICAgICAgMHhjODAwMDAwMTogMHg4MDAyMDAsXG5cdCAgICAgICAgICAgIDB4ZDgwMDAwMDE6IDB4MCxcblx0ICAgICAgICAgICAgMHhlODAwMDAwMTogMHg4MjAwLFxuXHQgICAgICAgICAgICAweGY4MDAwMDAxOiAweDgwODAwMlxuXHQgICAgICAgIH0sXG5cdCAgICAgICAge1xuXHQgICAgICAgICAgICAweDA6IDB4NDAwODQwMTAsXG5cdCAgICAgICAgICAgIDB4MTAwMDAwMDogMHg0MDAwLFxuXHQgICAgICAgICAgICAweDIwMDAwMDA6IDB4ODAwMDAsXG5cdCAgICAgICAgICAgIDB4MzAwMDAwMDogMHg0MDA4MDAxMCxcblx0ICAgICAgICAgICAgMHg0MDAwMDAwOiAweDQwMDAwMDEwLFxuXHQgICAgICAgICAgICAweDUwMDAwMDA6IDB4NDAwODQwMDAsXG5cdCAgICAgICAgICAgIDB4NjAwMDAwMDogMHg0MDAwNDAwMCxcblx0ICAgICAgICAgICAgMHg3MDAwMDAwOiAweDEwLFxuXHQgICAgICAgICAgICAweDgwMDAwMDA6IDB4ODQwMDAsXG5cdCAgICAgICAgICAgIDB4OTAwMDAwMDogMHg0MDAwNDAxMCxcblx0ICAgICAgICAgICAgMHhhMDAwMDAwOiAweDQwMDAwMDAwLFxuXHQgICAgICAgICAgICAweGIwMDAwMDA6IDB4ODQwMTAsXG5cdCAgICAgICAgICAgIDB4YzAwMDAwMDogMHg4MDAxMCxcblx0ICAgICAgICAgICAgMHhkMDAwMDAwOiAweDAsXG5cdCAgICAgICAgICAgIDB4ZTAwMDAwMDogMHg0MDEwLFxuXHQgICAgICAgICAgICAweGYwMDAwMDA6IDB4NDAwODAwMDAsXG5cdCAgICAgICAgICAgIDB4ODAwMDAwOiAweDQwMDA0MDAwLFxuXHQgICAgICAgICAgICAweDE4MDAwMDA6IDB4ODQwMTAsXG5cdCAgICAgICAgICAgIDB4MjgwMDAwMDogMHgxMCxcblx0ICAgICAgICAgICAgMHgzODAwMDAwOiAweDQwMDA0MDEwLFxuXHQgICAgICAgICAgICAweDQ4MDAwMDA6IDB4NDAwODQwMTAsXG5cdCAgICAgICAgICAgIDB4NTgwMDAwMDogMHg0MDAwMDAwMCxcblx0ICAgICAgICAgICAgMHg2ODAwMDAwOiAweDgwMDAwLFxuXHQgICAgICAgICAgICAweDc4MDAwMDA6IDB4NDAwODAwMTAsXG5cdCAgICAgICAgICAgIDB4ODgwMDAwMDogMHg4MDAxMCxcblx0ICAgICAgICAgICAgMHg5ODAwMDAwOiAweDAsXG5cdCAgICAgICAgICAgIDB4YTgwMDAwMDogMHg0MDAwLFxuXHQgICAgICAgICAgICAweGI4MDAwMDA6IDB4NDAwODAwMDAsXG5cdCAgICAgICAgICAgIDB4YzgwMDAwMDogMHg0MDAwMDAxMCxcblx0ICAgICAgICAgICAgMHhkODAwMDAwOiAweDg0MDAwLFxuXHQgICAgICAgICAgICAweGU4MDAwMDA6IDB4NDAwODQwMDAsXG5cdCAgICAgICAgICAgIDB4ZjgwMDAwMDogMHg0MDEwLFxuXHQgICAgICAgICAgICAweDEwMDAwMDAwOiAweDAsXG5cdCAgICAgICAgICAgIDB4MTEwMDAwMDA6IDB4NDAwODAwMTAsXG5cdCAgICAgICAgICAgIDB4MTIwMDAwMDA6IDB4NDAwMDQwMTAsXG5cdCAgICAgICAgICAgIDB4MTMwMDAwMDA6IDB4NDAwODQwMDAsXG5cdCAgICAgICAgICAgIDB4MTQwMDAwMDA6IDB4NDAwODAwMDAsXG5cdCAgICAgICAgICAgIDB4MTUwMDAwMDA6IDB4MTAsXG5cdCAgICAgICAgICAgIDB4MTYwMDAwMDA6IDB4ODQwMTAsXG5cdCAgICAgICAgICAgIDB4MTcwMDAwMDA6IDB4NDAwMCxcblx0ICAgICAgICAgICAgMHgxODAwMDAwMDogMHg0MDEwLFxuXHQgICAgICAgICAgICAweDE5MDAwMDAwOiAweDgwMDAwLFxuXHQgICAgICAgICAgICAweDFhMDAwMDAwOiAweDgwMDEwLFxuXHQgICAgICAgICAgICAweDFiMDAwMDAwOiAweDQwMDAwMDEwLFxuXHQgICAgICAgICAgICAweDFjMDAwMDAwOiAweDg0MDAwLFxuXHQgICAgICAgICAgICAweDFkMDAwMDAwOiAweDQwMDA0MDAwLFxuXHQgICAgICAgICAgICAweDFlMDAwMDAwOiAweDQwMDAwMDAwLFxuXHQgICAgICAgICAgICAweDFmMDAwMDAwOiAweDQwMDg0MDEwLFxuXHQgICAgICAgICAgICAweDEwODAwMDAwOiAweDg0MDEwLFxuXHQgICAgICAgICAgICAweDExODAwMDAwOiAweDgwMDAwLFxuXHQgICAgICAgICAgICAweDEyODAwMDAwOiAweDQwMDgwMDAwLFxuXHQgICAgICAgICAgICAweDEzODAwMDAwOiAweDQwMDAsXG5cdCAgICAgICAgICAgIDB4MTQ4MDAwMDA6IDB4NDAwMDQwMDAsXG5cdCAgICAgICAgICAgIDB4MTU4MDAwMDA6IDB4NDAwODQwMTAsXG5cdCAgICAgICAgICAgIDB4MTY4MDAwMDA6IDB4MTAsXG5cdCAgICAgICAgICAgIDB4MTc4MDAwMDA6IDB4NDAwMDAwMDAsXG5cdCAgICAgICAgICAgIDB4MTg4MDAwMDA6IDB4NDAwODQwMDAsXG5cdCAgICAgICAgICAgIDB4MTk4MDAwMDA6IDB4NDAwMDAwMTAsXG5cdCAgICAgICAgICAgIDB4MWE4MDAwMDA6IDB4NDAwMDQwMTAsXG5cdCAgICAgICAgICAgIDB4MWI4MDAwMDA6IDB4ODAwMTAsXG5cdCAgICAgICAgICAgIDB4MWM4MDAwMDA6IDB4MCxcblx0ICAgICAgICAgICAgMHgxZDgwMDAwMDogMHg0MDEwLFxuXHQgICAgICAgICAgICAweDFlODAwMDAwOiAweDQwMDgwMDEwLFxuXHQgICAgICAgICAgICAweDFmODAwMDAwOiAweDg0MDAwXG5cdCAgICAgICAgfSxcblx0ICAgICAgICB7XG5cdCAgICAgICAgICAgIDB4MDogMHgxMDQsXG5cdCAgICAgICAgICAgIDB4MTAwMDAwOiAweDAsXG5cdCAgICAgICAgICAgIDB4MjAwMDAwOiAweDQwMDAxMDAsXG5cdCAgICAgICAgICAgIDB4MzAwMDAwOiAweDEwMTA0LFxuXHQgICAgICAgICAgICAweDQwMDAwMDogMHgxMDAwNCxcblx0ICAgICAgICAgICAgMHg1MDAwMDA6IDB4NDAwMDAwNCxcblx0ICAgICAgICAgICAgMHg2MDAwMDA6IDB4NDAxMDEwNCxcblx0ICAgICAgICAgICAgMHg3MDAwMDA6IDB4NDAxMDAwMCxcblx0ICAgICAgICAgICAgMHg4MDAwMDA6IDB4NDAwMDAwMCxcblx0ICAgICAgICAgICAgMHg5MDAwMDA6IDB4NDAxMDEwMCxcblx0ICAgICAgICAgICAgMHhhMDAwMDA6IDB4MTAxMDAsXG5cdCAgICAgICAgICAgIDB4YjAwMDAwOiAweDQwMTAwMDQsXG5cdCAgICAgICAgICAgIDB4YzAwMDAwOiAweDQwMDAxMDQsXG5cdCAgICAgICAgICAgIDB4ZDAwMDAwOiAweDEwMDAwLFxuXHQgICAgICAgICAgICAweGUwMDAwMDogMHg0LFxuXHQgICAgICAgICAgICAweGYwMDAwMDogMHgxMDAsXG5cdCAgICAgICAgICAgIDB4ODAwMDA6IDB4NDAxMDEwMCxcblx0ICAgICAgICAgICAgMHgxODAwMDA6IDB4NDAxMDAwNCxcblx0ICAgICAgICAgICAgMHgyODAwMDA6IDB4MCxcblx0ICAgICAgICAgICAgMHgzODAwMDA6IDB4NDAwMDEwMCxcblx0ICAgICAgICAgICAgMHg0ODAwMDA6IDB4NDAwMDAwNCxcblx0ICAgICAgICAgICAgMHg1ODAwMDA6IDB4MTAwMDAsXG5cdCAgICAgICAgICAgIDB4NjgwMDAwOiAweDEwMDA0LFxuXHQgICAgICAgICAgICAweDc4MDAwMDogMHgxMDQsXG5cdCAgICAgICAgICAgIDB4ODgwMDAwOiAweDQsXG5cdCAgICAgICAgICAgIDB4OTgwMDAwOiAweDEwMCxcblx0ICAgICAgICAgICAgMHhhODAwMDA6IDB4NDAxMDAwMCxcblx0ICAgICAgICAgICAgMHhiODAwMDA6IDB4MTAxMDQsXG5cdCAgICAgICAgICAgIDB4YzgwMDAwOiAweDEwMTAwLFxuXHQgICAgICAgICAgICAweGQ4MDAwMDogMHg0MDAwMTA0LFxuXHQgICAgICAgICAgICAweGU4MDAwMDogMHg0MDEwMTA0LFxuXHQgICAgICAgICAgICAweGY4MDAwMDogMHg0MDAwMDAwLFxuXHQgICAgICAgICAgICAweDEwMDAwMDA6IDB4NDAxMDEwMCxcblx0ICAgICAgICAgICAgMHgxMTAwMDAwOiAweDEwMDA0LFxuXHQgICAgICAgICAgICAweDEyMDAwMDA6IDB4MTAwMDAsXG5cdCAgICAgICAgICAgIDB4MTMwMDAwMDogMHg0MDAwMTAwLFxuXHQgICAgICAgICAgICAweDE0MDAwMDA6IDB4MTAwLFxuXHQgICAgICAgICAgICAweDE1MDAwMDA6IDB4NDAxMDEwNCxcblx0ICAgICAgICAgICAgMHgxNjAwMDAwOiAweDQwMDAwMDQsXG5cdCAgICAgICAgICAgIDB4MTcwMDAwMDogMHgwLFxuXHQgICAgICAgICAgICAweDE4MDAwMDA6IDB4NDAwMDEwNCxcblx0ICAgICAgICAgICAgMHgxOTAwMDAwOiAweDQwMDAwMDAsXG5cdCAgICAgICAgICAgIDB4MWEwMDAwMDogMHg0LFxuXHQgICAgICAgICAgICAweDFiMDAwMDA6IDB4MTAxMDAsXG5cdCAgICAgICAgICAgIDB4MWMwMDAwMDogMHg0MDEwMDAwLFxuXHQgICAgICAgICAgICAweDFkMDAwMDA6IDB4MTA0LFxuXHQgICAgICAgICAgICAweDFlMDAwMDA6IDB4MTAxMDQsXG5cdCAgICAgICAgICAgIDB4MWYwMDAwMDogMHg0MDEwMDA0LFxuXHQgICAgICAgICAgICAweDEwODAwMDA6IDB4NDAwMDAwMCxcblx0ICAgICAgICAgICAgMHgxMTgwMDAwOiAweDEwNCxcblx0ICAgICAgICAgICAgMHgxMjgwMDAwOiAweDQwMTAxMDAsXG5cdCAgICAgICAgICAgIDB4MTM4MDAwMDogMHgwLFxuXHQgICAgICAgICAgICAweDE0ODAwMDA6IDB4MTAwMDQsXG5cdCAgICAgICAgICAgIDB4MTU4MDAwMDogMHg0MDAwMTAwLFxuXHQgICAgICAgICAgICAweDE2ODAwMDA6IDB4MTAwLFxuXHQgICAgICAgICAgICAweDE3ODAwMDA6IDB4NDAxMDAwNCxcblx0ICAgICAgICAgICAgMHgxODgwMDAwOiAweDEwMDAwLFxuXHQgICAgICAgICAgICAweDE5ODAwMDA6IDB4NDAxMDEwNCxcblx0ICAgICAgICAgICAgMHgxYTgwMDAwOiAweDEwMTA0LFxuXHQgICAgICAgICAgICAweDFiODAwMDA6IDB4NDAwMDAwNCxcblx0ICAgICAgICAgICAgMHgxYzgwMDAwOiAweDQwMDAxMDQsXG5cdCAgICAgICAgICAgIDB4MWQ4MDAwMDogMHg0MDEwMDAwLFxuXHQgICAgICAgICAgICAweDFlODAwMDA6IDB4NCxcblx0ICAgICAgICAgICAgMHgxZjgwMDAwOiAweDEwMTAwXG5cdCAgICAgICAgfSxcblx0ICAgICAgICB7XG5cdCAgICAgICAgICAgIDB4MDogMHg4MDQwMTAwMCxcblx0ICAgICAgICAgICAgMHgxMDAwMDogMHg4MDAwMTA0MCxcblx0ICAgICAgICAgICAgMHgyMDAwMDogMHg0MDEwNDAsXG5cdCAgICAgICAgICAgIDB4MzAwMDA6IDB4ODA0MDAwMDAsXG5cdCAgICAgICAgICAgIDB4NDAwMDA6IDB4MCxcblx0ICAgICAgICAgICAgMHg1MDAwMDogMHg0MDEwMDAsXG5cdCAgICAgICAgICAgIDB4NjAwMDA6IDB4ODAwMDAwNDAsXG5cdCAgICAgICAgICAgIDB4NzAwMDA6IDB4NDAwMDQwLFxuXHQgICAgICAgICAgICAweDgwMDAwOiAweDgwMDAwMDAwLFxuXHQgICAgICAgICAgICAweDkwMDAwOiAweDQwMDAwMCxcblx0ICAgICAgICAgICAgMHhhMDAwMDogMHg0MCxcblx0ICAgICAgICAgICAgMHhiMDAwMDogMHg4MDAwMTAwMCxcblx0ICAgICAgICAgICAgMHhjMDAwMDogMHg4MDQwMDA0MCxcblx0ICAgICAgICAgICAgMHhkMDAwMDogMHgxMDQwLFxuXHQgICAgICAgICAgICAweGUwMDAwOiAweDEwMDAsXG5cdCAgICAgICAgICAgIDB4ZjAwMDA6IDB4ODA0MDEwNDAsXG5cdCAgICAgICAgICAgIDB4ODAwMDogMHg4MDAwMTA0MCxcblx0ICAgICAgICAgICAgMHgxODAwMDogMHg0MCxcblx0ICAgICAgICAgICAgMHgyODAwMDogMHg4MDQwMDA0MCxcblx0ICAgICAgICAgICAgMHgzODAwMDogMHg4MDAwMTAwMCxcblx0ICAgICAgICAgICAgMHg0ODAwMDogMHg0MDEwMDAsXG5cdCAgICAgICAgICAgIDB4NTgwMDA6IDB4ODA0MDEwNDAsXG5cdCAgICAgICAgICAgIDB4NjgwMDA6IDB4MCxcblx0ICAgICAgICAgICAgMHg3ODAwMDogMHg4MDQwMDAwMCxcblx0ICAgICAgICAgICAgMHg4ODAwMDogMHgxMDAwLFxuXHQgICAgICAgICAgICAweDk4MDAwOiAweDgwNDAxMDAwLFxuXHQgICAgICAgICAgICAweGE4MDAwOiAweDQwMDAwMCxcblx0ICAgICAgICAgICAgMHhiODAwMDogMHgxMDQwLFxuXHQgICAgICAgICAgICAweGM4MDAwOiAweDgwMDAwMDAwLFxuXHQgICAgICAgICAgICAweGQ4MDAwOiAweDQwMDA0MCxcblx0ICAgICAgICAgICAgMHhlODAwMDogMHg0MDEwNDAsXG5cdCAgICAgICAgICAgIDB4ZjgwMDA6IDB4ODAwMDAwNDAsXG5cdCAgICAgICAgICAgIDB4MTAwMDAwOiAweDQwMDA0MCxcblx0ICAgICAgICAgICAgMHgxMTAwMDA6IDB4NDAxMDAwLFxuXHQgICAgICAgICAgICAweDEyMDAwMDogMHg4MDAwMDA0MCxcblx0ICAgICAgICAgICAgMHgxMzAwMDA6IDB4MCxcblx0ICAgICAgICAgICAgMHgxNDAwMDA6IDB4MTA0MCxcblx0ICAgICAgICAgICAgMHgxNTAwMDA6IDB4ODA0MDAwNDAsXG5cdCAgICAgICAgICAgIDB4MTYwMDAwOiAweDgwNDAxMDAwLFxuXHQgICAgICAgICAgICAweDE3MDAwMDogMHg4MDAwMTA0MCxcblx0ICAgICAgICAgICAgMHgxODAwMDA6IDB4ODA0MDEwNDAsXG5cdCAgICAgICAgICAgIDB4MTkwMDAwOiAweDgwMDAwMDAwLFxuXHQgICAgICAgICAgICAweDFhMDAwMDogMHg4MDQwMDAwMCxcblx0ICAgICAgICAgICAgMHgxYjAwMDA6IDB4NDAxMDQwLFxuXHQgICAgICAgICAgICAweDFjMDAwMDogMHg4MDAwMTAwMCxcblx0ICAgICAgICAgICAgMHgxZDAwMDA6IDB4NDAwMDAwLFxuXHQgICAgICAgICAgICAweDFlMDAwMDogMHg0MCxcblx0ICAgICAgICAgICAgMHgxZjAwMDA6IDB4MTAwMCxcblx0ICAgICAgICAgICAgMHgxMDgwMDA6IDB4ODA0MDAwMDAsXG5cdCAgICAgICAgICAgIDB4MTE4MDAwOiAweDgwNDAxMDQwLFxuXHQgICAgICAgICAgICAweDEyODAwMDogMHgwLFxuXHQgICAgICAgICAgICAweDEzODAwMDogMHg0MDEwMDAsXG5cdCAgICAgICAgICAgIDB4MTQ4MDAwOiAweDQwMDA0MCxcblx0ICAgICAgICAgICAgMHgxNTgwMDA6IDB4ODAwMDAwMDAsXG5cdCAgICAgICAgICAgIDB4MTY4MDAwOiAweDgwMDAxMDQwLFxuXHQgICAgICAgICAgICAweDE3ODAwMDogMHg0MCxcblx0ICAgICAgICAgICAgMHgxODgwMDA6IDB4ODAwMDAwNDAsXG5cdCAgICAgICAgICAgIDB4MTk4MDAwOiAweDEwMDAsXG5cdCAgICAgICAgICAgIDB4MWE4MDAwOiAweDgwMDAxMDAwLFxuXHQgICAgICAgICAgICAweDFiODAwMDogMHg4MDQwMDA0MCxcblx0ICAgICAgICAgICAgMHgxYzgwMDA6IDB4MTA0MCxcblx0ICAgICAgICAgICAgMHgxZDgwMDA6IDB4ODA0MDEwMDAsXG5cdCAgICAgICAgICAgIDB4MWU4MDAwOiAweDQwMDAwMCxcblx0ICAgICAgICAgICAgMHgxZjgwMDA6IDB4NDAxMDQwXG5cdCAgICAgICAgfSxcblx0ICAgICAgICB7XG5cdCAgICAgICAgICAgIDB4MDogMHg4MCxcblx0ICAgICAgICAgICAgMHgxMDAwOiAweDEwNDAwMDAsXG5cdCAgICAgICAgICAgIDB4MjAwMDogMHg0MDAwMCxcblx0ICAgICAgICAgICAgMHgzMDAwOiAweDIwMDAwMDAwLFxuXHQgICAgICAgICAgICAweDQwMDA6IDB4MjAwNDAwODAsXG5cdCAgICAgICAgICAgIDB4NTAwMDogMHgxMDAwMDgwLFxuXHQgICAgICAgICAgICAweDYwMDA6IDB4MjEwMDAwODAsXG5cdCAgICAgICAgICAgIDB4NzAwMDogMHg0MDA4MCxcblx0ICAgICAgICAgICAgMHg4MDAwOiAweDEwMDAwMDAsXG5cdCAgICAgICAgICAgIDB4OTAwMDogMHgyMDA0MDAwMCxcblx0ICAgICAgICAgICAgMHhhMDAwOiAweDIwMDAwMDgwLFxuXHQgICAgICAgICAgICAweGIwMDA6IDB4MjEwNDAwODAsXG5cdCAgICAgICAgICAgIDB4YzAwMDogMHgyMTA0MDAwMCxcblx0ICAgICAgICAgICAgMHhkMDAwOiAweDAsXG5cdCAgICAgICAgICAgIDB4ZTAwMDogMHgxMDQwMDgwLFxuXHQgICAgICAgICAgICAweGYwMDA6IDB4MjEwMDAwMDAsXG5cdCAgICAgICAgICAgIDB4ODAwOiAweDEwNDAwODAsXG5cdCAgICAgICAgICAgIDB4MTgwMDogMHgyMTAwMDA4MCxcblx0ICAgICAgICAgICAgMHgyODAwOiAweDgwLFxuXHQgICAgICAgICAgICAweDM4MDA6IDB4MTA0MDAwMCxcblx0ICAgICAgICAgICAgMHg0ODAwOiAweDQwMDAwLFxuXHQgICAgICAgICAgICAweDU4MDA6IDB4MjAwNDAwODAsXG5cdCAgICAgICAgICAgIDB4NjgwMDogMHgyMTA0MDAwMCxcblx0ICAgICAgICAgICAgMHg3ODAwOiAweDIwMDAwMDAwLFxuXHQgICAgICAgICAgICAweDg4MDA6IDB4MjAwNDAwMDAsXG5cdCAgICAgICAgICAgIDB4OTgwMDogMHgwLFxuXHQgICAgICAgICAgICAweGE4MDA6IDB4MjEwNDAwODAsXG5cdCAgICAgICAgICAgIDB4YjgwMDogMHgxMDAwMDgwLFxuXHQgICAgICAgICAgICAweGM4MDA6IDB4MjAwMDAwODAsXG5cdCAgICAgICAgICAgIDB4ZDgwMDogMHgyMTAwMDAwMCxcblx0ICAgICAgICAgICAgMHhlODAwOiAweDEwMDAwMDAsXG5cdCAgICAgICAgICAgIDB4ZjgwMDogMHg0MDA4MCxcblx0ICAgICAgICAgICAgMHgxMDAwMDogMHg0MDAwMCxcblx0ICAgICAgICAgICAgMHgxMTAwMDogMHg4MCxcblx0ICAgICAgICAgICAgMHgxMjAwMDogMHgyMDAwMDAwMCxcblx0ICAgICAgICAgICAgMHgxMzAwMDogMHgyMTAwMDA4MCxcblx0ICAgICAgICAgICAgMHgxNDAwMDogMHgxMDAwMDgwLFxuXHQgICAgICAgICAgICAweDE1MDAwOiAweDIxMDQwMDAwLFxuXHQgICAgICAgICAgICAweDE2MDAwOiAweDIwMDQwMDgwLFxuXHQgICAgICAgICAgICAweDE3MDAwOiAweDEwMDAwMDAsXG5cdCAgICAgICAgICAgIDB4MTgwMDA6IDB4MjEwNDAwODAsXG5cdCAgICAgICAgICAgIDB4MTkwMDA6IDB4MjEwMDAwMDAsXG5cdCAgICAgICAgICAgIDB4MWEwMDA6IDB4MTA0MDAwMCxcblx0ICAgICAgICAgICAgMHgxYjAwMDogMHgyMDA0MDAwMCxcblx0ICAgICAgICAgICAgMHgxYzAwMDogMHg0MDA4MCxcblx0ICAgICAgICAgICAgMHgxZDAwMDogMHgyMDAwMDA4MCxcblx0ICAgICAgICAgICAgMHgxZTAwMDogMHgwLFxuXHQgICAgICAgICAgICAweDFmMDAwOiAweDEwNDAwODAsXG5cdCAgICAgICAgICAgIDB4MTA4MDA6IDB4MjEwMDAwODAsXG5cdCAgICAgICAgICAgIDB4MTE4MDA6IDB4MTAwMDAwMCxcblx0ICAgICAgICAgICAgMHgxMjgwMDogMHgxMDQwMDAwLFxuXHQgICAgICAgICAgICAweDEzODAwOiAweDIwMDQwMDgwLFxuXHQgICAgICAgICAgICAweDE0ODAwOiAweDIwMDAwMDAwLFxuXHQgICAgICAgICAgICAweDE1ODAwOiAweDEwNDAwODAsXG5cdCAgICAgICAgICAgIDB4MTY4MDA6IDB4ODAsXG5cdCAgICAgICAgICAgIDB4MTc4MDA6IDB4MjEwNDAwMDAsXG5cdCAgICAgICAgICAgIDB4MTg4MDA6IDB4NDAwODAsXG5cdCAgICAgICAgICAgIDB4MTk4MDA6IDB4MjEwNDAwODAsXG5cdCAgICAgICAgICAgIDB4MWE4MDA6IDB4MCxcblx0ICAgICAgICAgICAgMHgxYjgwMDogMHgyMTAwMDAwMCxcblx0ICAgICAgICAgICAgMHgxYzgwMDogMHgxMDAwMDgwLFxuXHQgICAgICAgICAgICAweDFkODAwOiAweDQwMDAwLFxuXHQgICAgICAgICAgICAweDFlODAwOiAweDIwMDQwMDAwLFxuXHQgICAgICAgICAgICAweDFmODAwOiAweDIwMDAwMDgwXG5cdCAgICAgICAgfSxcblx0ICAgICAgICB7XG5cdCAgICAgICAgICAgIDB4MDogMHgxMDAwMDAwOCxcblx0ICAgICAgICAgICAgMHgxMDA6IDB4MjAwMCxcblx0ICAgICAgICAgICAgMHgyMDA6IDB4MTAyMDAwMDAsXG5cdCAgICAgICAgICAgIDB4MzAwOiAweDEwMjAyMDA4LFxuXHQgICAgICAgICAgICAweDQwMDogMHgxMDAwMjAwMCxcblx0ICAgICAgICAgICAgMHg1MDA6IDB4MjAwMDAwLFxuXHQgICAgICAgICAgICAweDYwMDogMHgyMDAwMDgsXG5cdCAgICAgICAgICAgIDB4NzAwOiAweDEwMDAwMDAwLFxuXHQgICAgICAgICAgICAweDgwMDogMHgwLFxuXHQgICAgICAgICAgICAweDkwMDogMHgxMDAwMjAwOCxcblx0ICAgICAgICAgICAgMHhhMDA6IDB4MjAyMDAwLFxuXHQgICAgICAgICAgICAweGIwMDogMHg4LFxuXHQgICAgICAgICAgICAweGMwMDogMHgxMDIwMDAwOCxcblx0ICAgICAgICAgICAgMHhkMDA6IDB4MjAyMDA4LFxuXHQgICAgICAgICAgICAweGUwMDogMHgyMDA4LFxuXHQgICAgICAgICAgICAweGYwMDogMHgxMDIwMjAwMCxcblx0ICAgICAgICAgICAgMHg4MDogMHgxMDIwMDAwMCxcblx0ICAgICAgICAgICAgMHgxODA6IDB4MTAyMDIwMDgsXG5cdCAgICAgICAgICAgIDB4MjgwOiAweDgsXG5cdCAgICAgICAgICAgIDB4MzgwOiAweDIwMDAwMCxcblx0ICAgICAgICAgICAgMHg0ODA6IDB4MjAyMDA4LFxuXHQgICAgICAgICAgICAweDU4MDogMHgxMDAwMDAwOCxcblx0ICAgICAgICAgICAgMHg2ODA6IDB4MTAwMDIwMDAsXG5cdCAgICAgICAgICAgIDB4NzgwOiAweDIwMDgsXG5cdCAgICAgICAgICAgIDB4ODgwOiAweDIwMDAwOCxcblx0ICAgICAgICAgICAgMHg5ODA6IDB4MjAwMCxcblx0ICAgICAgICAgICAgMHhhODA6IDB4MTAwMDIwMDgsXG5cdCAgICAgICAgICAgIDB4YjgwOiAweDEwMjAwMDA4LFxuXHQgICAgICAgICAgICAweGM4MDogMHgwLFxuXHQgICAgICAgICAgICAweGQ4MDogMHgxMDIwMjAwMCxcblx0ICAgICAgICAgICAgMHhlODA6IDB4MjAyMDAwLFxuXHQgICAgICAgICAgICAweGY4MDogMHgxMDAwMDAwMCxcblx0ICAgICAgICAgICAgMHgxMDAwOiAweDEwMDAyMDAwLFxuXHQgICAgICAgICAgICAweDExMDA6IDB4MTAyMDAwMDgsXG5cdCAgICAgICAgICAgIDB4MTIwMDogMHgxMDIwMjAwOCxcblx0ICAgICAgICAgICAgMHgxMzAwOiAweDIwMDgsXG5cdCAgICAgICAgICAgIDB4MTQwMDogMHgyMDAwMDAsXG5cdCAgICAgICAgICAgIDB4MTUwMDogMHgxMDAwMDAwMCxcblx0ICAgICAgICAgICAgMHgxNjAwOiAweDEwMDAwMDA4LFxuXHQgICAgICAgICAgICAweDE3MDA6IDB4MjAyMDAwLFxuXHQgICAgICAgICAgICAweDE4MDA6IDB4MjAyMDA4LFxuXHQgICAgICAgICAgICAweDE5MDA6IDB4MCxcblx0ICAgICAgICAgICAgMHgxYTAwOiAweDgsXG5cdCAgICAgICAgICAgIDB4MWIwMDogMHgxMDIwMDAwMCxcblx0ICAgICAgICAgICAgMHgxYzAwOiAweDIwMDAsXG5cdCAgICAgICAgICAgIDB4MWQwMDogMHgxMDAwMjAwOCxcblx0ICAgICAgICAgICAgMHgxZTAwOiAweDEwMjAyMDAwLFxuXHQgICAgICAgICAgICAweDFmMDA6IDB4MjAwMDA4LFxuXHQgICAgICAgICAgICAweDEwODA6IDB4OCxcblx0ICAgICAgICAgICAgMHgxMTgwOiAweDIwMjAwMCxcblx0ICAgICAgICAgICAgMHgxMjgwOiAweDIwMDAwMCxcblx0ICAgICAgICAgICAgMHgxMzgwOiAweDEwMDAwMDA4LFxuXHQgICAgICAgICAgICAweDE0ODA6IDB4MTAwMDIwMDAsXG5cdCAgICAgICAgICAgIDB4MTU4MDogMHgyMDA4LFxuXHQgICAgICAgICAgICAweDE2ODA6IDB4MTAyMDIwMDgsXG5cdCAgICAgICAgICAgIDB4MTc4MDogMHgxMDIwMDAwMCxcblx0ICAgICAgICAgICAgMHgxODgwOiAweDEwMjAyMDAwLFxuXHQgICAgICAgICAgICAweDE5ODA6IDB4MTAyMDAwMDgsXG5cdCAgICAgICAgICAgIDB4MWE4MDogMHgyMDAwLFxuXHQgICAgICAgICAgICAweDFiODA6IDB4MjAyMDA4LFxuXHQgICAgICAgICAgICAweDFjODA6IDB4MjAwMDA4LFxuXHQgICAgICAgICAgICAweDFkODA6IDB4MCxcblx0ICAgICAgICAgICAgMHgxZTgwOiAweDEwMDAwMDAwLFxuXHQgICAgICAgICAgICAweDFmODA6IDB4MTAwMDIwMDhcblx0ICAgICAgICB9LFxuXHQgICAgICAgIHtcblx0ICAgICAgICAgICAgMHgwOiAweDEwMDAwMCxcblx0ICAgICAgICAgICAgMHgxMDogMHgyMDAwNDAxLFxuXHQgICAgICAgICAgICAweDIwOiAweDQwMCxcblx0ICAgICAgICAgICAgMHgzMDogMHgxMDA0MDEsXG5cdCAgICAgICAgICAgIDB4NDA6IDB4MjEwMDQwMSxcblx0ICAgICAgICAgICAgMHg1MDogMHgwLFxuXHQgICAgICAgICAgICAweDYwOiAweDEsXG5cdCAgICAgICAgICAgIDB4NzA6IDB4MjEwMDAwMSxcblx0ICAgICAgICAgICAgMHg4MDogMHgyMDAwNDAwLFxuXHQgICAgICAgICAgICAweDkwOiAweDEwMDAwMSxcblx0ICAgICAgICAgICAgMHhhMDogMHgyMDAwMDAxLFxuXHQgICAgICAgICAgICAweGIwOiAweDIxMDA0MDAsXG5cdCAgICAgICAgICAgIDB4YzA6IDB4MjEwMDAwMCxcblx0ICAgICAgICAgICAgMHhkMDogMHg0MDEsXG5cdCAgICAgICAgICAgIDB4ZTA6IDB4MTAwNDAwLFxuXHQgICAgICAgICAgICAweGYwOiAweDIwMDAwMDAsXG5cdCAgICAgICAgICAgIDB4ODogMHgyMTAwMDAxLFxuXHQgICAgICAgICAgICAweDE4OiAweDAsXG5cdCAgICAgICAgICAgIDB4Mjg6IDB4MjAwMDQwMSxcblx0ICAgICAgICAgICAgMHgzODogMHgyMTAwNDAwLFxuXHQgICAgICAgICAgICAweDQ4OiAweDEwMDAwMCxcblx0ICAgICAgICAgICAgMHg1ODogMHgyMDAwMDAxLFxuXHQgICAgICAgICAgICAweDY4OiAweDIwMDAwMDAsXG5cdCAgICAgICAgICAgIDB4Nzg6IDB4NDAxLFxuXHQgICAgICAgICAgICAweDg4OiAweDEwMDQwMSxcblx0ICAgICAgICAgICAgMHg5ODogMHgyMDAwNDAwLFxuXHQgICAgICAgICAgICAweGE4OiAweDIxMDAwMDAsXG5cdCAgICAgICAgICAgIDB4Yjg6IDB4MTAwMDAxLFxuXHQgICAgICAgICAgICAweGM4OiAweDQwMCxcblx0ICAgICAgICAgICAgMHhkODogMHgyMTAwNDAxLFxuXHQgICAgICAgICAgICAweGU4OiAweDEsXG5cdCAgICAgICAgICAgIDB4Zjg6IDB4MTAwNDAwLFxuXHQgICAgICAgICAgICAweDEwMDogMHgyMDAwMDAwLFxuXHQgICAgICAgICAgICAweDExMDogMHgxMDAwMDAsXG5cdCAgICAgICAgICAgIDB4MTIwOiAweDIwMDA0MDEsXG5cdCAgICAgICAgICAgIDB4MTMwOiAweDIxMDAwMDEsXG5cdCAgICAgICAgICAgIDB4MTQwOiAweDEwMDAwMSxcblx0ICAgICAgICAgICAgMHgxNTA6IDB4MjAwMDQwMCxcblx0ICAgICAgICAgICAgMHgxNjA6IDB4MjEwMDQwMCxcblx0ICAgICAgICAgICAgMHgxNzA6IDB4MTAwNDAxLFxuXHQgICAgICAgICAgICAweDE4MDogMHg0MDEsXG5cdCAgICAgICAgICAgIDB4MTkwOiAweDIxMDA0MDEsXG5cdCAgICAgICAgICAgIDB4MWEwOiAweDEwMDQwMCxcblx0ICAgICAgICAgICAgMHgxYjA6IDB4MSxcblx0ICAgICAgICAgICAgMHgxYzA6IDB4MCxcblx0ICAgICAgICAgICAgMHgxZDA6IDB4MjEwMDAwMCxcblx0ICAgICAgICAgICAgMHgxZTA6IDB4MjAwMDAwMSxcblx0ICAgICAgICAgICAgMHgxZjA6IDB4NDAwLFxuXHQgICAgICAgICAgICAweDEwODogMHgxMDA0MDAsXG5cdCAgICAgICAgICAgIDB4MTE4OiAweDIwMDA0MDEsXG5cdCAgICAgICAgICAgIDB4MTI4OiAweDIxMDAwMDEsXG5cdCAgICAgICAgICAgIDB4MTM4OiAweDEsXG5cdCAgICAgICAgICAgIDB4MTQ4OiAweDIwMDAwMDAsXG5cdCAgICAgICAgICAgIDB4MTU4OiAweDEwMDAwMCxcblx0ICAgICAgICAgICAgMHgxNjg6IDB4NDAxLFxuXHQgICAgICAgICAgICAweDE3ODogMHgyMTAwNDAwLFxuXHQgICAgICAgICAgICAweDE4ODogMHgyMDAwMDAxLFxuXHQgICAgICAgICAgICAweDE5ODogMHgyMTAwMDAwLFxuXHQgICAgICAgICAgICAweDFhODogMHgwLFxuXHQgICAgICAgICAgICAweDFiODogMHgyMTAwNDAxLFxuXHQgICAgICAgICAgICAweDFjODogMHgxMDA0MDEsXG5cdCAgICAgICAgICAgIDB4MWQ4OiAweDQwMCxcblx0ICAgICAgICAgICAgMHgxZTg6IDB4MjAwMDQwMCxcblx0ICAgICAgICAgICAgMHgxZjg6IDB4MTAwMDAxXG5cdCAgICAgICAgfSxcblx0ICAgICAgICB7XG5cdCAgICAgICAgICAgIDB4MDogMHg4MDAwODIwLFxuXHQgICAgICAgICAgICAweDE6IDB4MjAwMDAsXG5cdCAgICAgICAgICAgIDB4MjogMHg4MDAwMDAwLFxuXHQgICAgICAgICAgICAweDM6IDB4MjAsXG5cdCAgICAgICAgICAgIDB4NDogMHgyMDAyMCxcblx0ICAgICAgICAgICAgMHg1OiAweDgwMjA4MjAsXG5cdCAgICAgICAgICAgIDB4NjogMHg4MDIwODAwLFxuXHQgICAgICAgICAgICAweDc6IDB4ODAwLFxuXHQgICAgICAgICAgICAweDg6IDB4ODAyMDAwMCxcblx0ICAgICAgICAgICAgMHg5OiAweDgwMDA4MDAsXG5cdCAgICAgICAgICAgIDB4YTogMHgyMDgwMCxcblx0ICAgICAgICAgICAgMHhiOiAweDgwMjAwMjAsXG5cdCAgICAgICAgICAgIDB4YzogMHg4MjAsXG5cdCAgICAgICAgICAgIDB4ZDogMHgwLFxuXHQgICAgICAgICAgICAweGU6IDB4ODAwMDAyMCxcblx0ICAgICAgICAgICAgMHhmOiAweDIwODIwLFxuXHQgICAgICAgICAgICAweDgwMDAwMDAwOiAweDgwMCxcblx0ICAgICAgICAgICAgMHg4MDAwMDAwMTogMHg4MDIwODIwLFxuXHQgICAgICAgICAgICAweDgwMDAwMDAyOiAweDgwMDA4MjAsXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMDM6IDB4ODAwMDAwMCxcblx0ICAgICAgICAgICAgMHg4MDAwMDAwNDogMHg4MDIwMDAwLFxuXHQgICAgICAgICAgICAweDgwMDAwMDA1OiAweDIwODAwLFxuXHQgICAgICAgICAgICAweDgwMDAwMDA2OiAweDIwODIwLFxuXHQgICAgICAgICAgICAweDgwMDAwMDA3OiAweDIwLFxuXHQgICAgICAgICAgICAweDgwMDAwMDA4OiAweDgwMDAwMjAsXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMDk6IDB4ODIwLFxuXHQgICAgICAgICAgICAweDgwMDAwMDBhOiAweDIwMDIwLFxuXHQgICAgICAgICAgICAweDgwMDAwMDBiOiAweDgwMjA4MDAsXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMGM6IDB4MCxcblx0ICAgICAgICAgICAgMHg4MDAwMDAwZDogMHg4MDIwMDIwLFxuXHQgICAgICAgICAgICAweDgwMDAwMDBlOiAweDgwMDA4MDAsXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMGY6IDB4MjAwMDAsXG5cdCAgICAgICAgICAgIDB4MTA6IDB4MjA4MjAsXG5cdCAgICAgICAgICAgIDB4MTE6IDB4ODAyMDgwMCxcblx0ICAgICAgICAgICAgMHgxMjogMHgyMCxcblx0ICAgICAgICAgICAgMHgxMzogMHg4MDAsXG5cdCAgICAgICAgICAgIDB4MTQ6IDB4ODAwMDgwMCxcblx0ICAgICAgICAgICAgMHgxNTogMHg4MDAwMDIwLFxuXHQgICAgICAgICAgICAweDE2OiAweDgwMjAwMjAsXG5cdCAgICAgICAgICAgIDB4MTc6IDB4MjAwMDAsXG5cdCAgICAgICAgICAgIDB4MTg6IDB4MCxcblx0ICAgICAgICAgICAgMHgxOTogMHgyMDAyMCxcblx0ICAgICAgICAgICAgMHgxYTogMHg4MDIwMDAwLFxuXHQgICAgICAgICAgICAweDFiOiAweDgwMDA4MjAsXG5cdCAgICAgICAgICAgIDB4MWM6IDB4ODAyMDgyMCxcblx0ICAgICAgICAgICAgMHgxZDogMHgyMDgwMCxcblx0ICAgICAgICAgICAgMHgxZTogMHg4MjAsXG5cdCAgICAgICAgICAgIDB4MWY6IDB4ODAwMDAwMCxcblx0ICAgICAgICAgICAgMHg4MDAwMDAxMDogMHgyMDAwMCxcblx0ICAgICAgICAgICAgMHg4MDAwMDAxMTogMHg4MDAsXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMTI6IDB4ODAyMDAyMCxcblx0ICAgICAgICAgICAgMHg4MDAwMDAxMzogMHgyMDgyMCxcblx0ICAgICAgICAgICAgMHg4MDAwMDAxNDogMHgyMCxcblx0ICAgICAgICAgICAgMHg4MDAwMDAxNTogMHg4MDIwMDAwLFxuXHQgICAgICAgICAgICAweDgwMDAwMDE2OiAweDgwMDAwMDAsXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMTc6IDB4ODAwMDgyMCxcblx0ICAgICAgICAgICAgMHg4MDAwMDAxODogMHg4MDIwODIwLFxuXHQgICAgICAgICAgICAweDgwMDAwMDE5OiAweDgwMDAwMjAsXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMWE6IDB4ODAwMDgwMCxcblx0ICAgICAgICAgICAgMHg4MDAwMDAxYjogMHgwLFxuXHQgICAgICAgICAgICAweDgwMDAwMDFjOiAweDIwODAwLFxuXHQgICAgICAgICAgICAweDgwMDAwMDFkOiAweDgyMCxcblx0ICAgICAgICAgICAgMHg4MDAwMDAxZTogMHgyMDAyMCxcblx0ICAgICAgICAgICAgMHg4MDAwMDAxZjogMHg4MDIwODAwXG5cdCAgICAgICAgfVxuXHQgICAgXTtcblxuXHQgICAgLy8gTWFza3MgdGhhdCBzZWxlY3QgdGhlIFNCT1ggaW5wdXRcblx0ICAgIHZhciBTQk9YX01BU0sgPSBbXG5cdCAgICAgICAgMHhmODAwMDAwMSwgMHgxZjgwMDAwMCwgMHgwMWY4MDAwMCwgMHgwMDFmODAwMCxcblx0ICAgICAgICAweDAwMDFmODAwLCAweDAwMDAxZjgwLCAweDAwMDAwMWY4LCAweDgwMDAwMDFmXG5cdCAgICBdO1xuXG5cdCAgICAvKipcblx0ICAgICAqIERFUyBibG9jayBjaXBoZXIgYWxnb3JpdGhtLlxuXHQgICAgICovXG5cdCAgICB2YXIgREVTID0gQ19hbGdvLkRFUyA9IEJsb2NrQ2lwaGVyLmV4dGVuZCh7XG5cdCAgICAgICAgX2RvUmVzZXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLl9rZXk7XG5cdCAgICAgICAgICAgIHZhciBrZXlXb3JkcyA9IGtleS53b3JkcztcblxuXHQgICAgICAgICAgICAvLyBTZWxlY3QgNTYgYml0cyBhY2NvcmRpbmcgdG8gUEMxXG5cdCAgICAgICAgICAgIHZhciBrZXlCaXRzID0gW107XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNTY7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgdmFyIGtleUJpdFBvcyA9IFBDMVtpXSAtIDE7XG5cdCAgICAgICAgICAgICAgICBrZXlCaXRzW2ldID0gKGtleVdvcmRzW2tleUJpdFBvcyA+Pj4gNV0gPj4+ICgzMSAtIGtleUJpdFBvcyAlIDMyKSkgJiAxO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gQXNzZW1ibGUgMTYgc3Via2V5c1xuXHQgICAgICAgICAgICB2YXIgc3ViS2V5cyA9IHRoaXMuX3N1YktleXMgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgblN1YktleSA9IDA7IG5TdWJLZXkgPCAxNjsgblN1YktleSsrKSB7XG5cdCAgICAgICAgICAgICAgICAvLyBDcmVhdGUgc3Via2V5XG5cdCAgICAgICAgICAgICAgICB2YXIgc3ViS2V5ID0gc3ViS2V5c1tuU3ViS2V5XSA9IFtdO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICAgICAgdmFyIGJpdFNoaWZ0ID0gQklUX1NISUZUU1tuU3ViS2V5XTtcblxuXHQgICAgICAgICAgICAgICAgLy8gU2VsZWN0IDQ4IGJpdHMgYWNjb3JkaW5nIHRvIFBDMlxuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgLy8gU2VsZWN0IGZyb20gdGhlIGxlZnQgMjgga2V5IGJpdHNcblx0ICAgICAgICAgICAgICAgICAgICBzdWJLZXlbKGkgLyA2KSB8IDBdIHw9IGtleUJpdHNbKChQQzJbaV0gLSAxKSArIGJpdFNoaWZ0KSAlIDI4XSA8PCAoMzEgLSBpICUgNik7XG5cblx0ICAgICAgICAgICAgICAgICAgICAvLyBTZWxlY3QgZnJvbSB0aGUgcmlnaHQgMjgga2V5IGJpdHNcblx0ICAgICAgICAgICAgICAgICAgICBzdWJLZXlbNCArICgoaSAvIDYpIHwgMCldIHw9IGtleUJpdHNbMjggKyAoKChQQzJbaSArIDI0XSAtIDEpICsgYml0U2hpZnQpICUgMjgpXSA8PCAoMzEgLSBpICUgNik7XG5cdCAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgIC8vIFNpbmNlIGVhY2ggc3Via2V5IGlzIGFwcGxpZWQgdG8gYW4gZXhwYW5kZWQgMzItYml0IGlucHV0LFxuXHQgICAgICAgICAgICAgICAgLy8gdGhlIHN1YmtleSBjYW4gYmUgYnJva2VuIGludG8gOCB2YWx1ZXMgc2NhbGVkIHRvIDMyLWJpdHMsXG5cdCAgICAgICAgICAgICAgICAvLyB3aGljaCBhbGxvd3MgdGhlIGtleSB0byBiZSB1c2VkIHdpdGhvdXQgZXhwYW5zaW9uXG5cdCAgICAgICAgICAgICAgICBzdWJLZXlbMF0gPSAoc3ViS2V5WzBdIDw8IDEpIHwgKHN1YktleVswXSA+Pj4gMzEpO1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCA3OyBpKyspIHtcblx0ICAgICAgICAgICAgICAgICAgICBzdWJLZXlbaV0gPSBzdWJLZXlbaV0gPj4+ICgoaSAtIDEpICogNCArIDMpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICAgICAgc3ViS2V5WzddID0gKHN1YktleVs3XSA8PCA1KSB8IChzdWJLZXlbN10gPj4+IDI3KTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIENvbXB1dGUgaW52ZXJzZSBzdWJrZXlzXG5cdCAgICAgICAgICAgIHZhciBpbnZTdWJLZXlzID0gdGhpcy5faW52U3ViS2V5cyA9IFtdO1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIGludlN1YktleXNbaV0gPSBzdWJLZXlzWzE1IC0gaV07XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgZW5jcnlwdEJsb2NrOiBmdW5jdGlvbiAoTSwgb2Zmc2V0KSB7XG5cdCAgICAgICAgICAgIHRoaXMuX2RvQ3J5cHRCbG9jayhNLCBvZmZzZXQsIHRoaXMuX3N1YktleXMpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBkZWNyeXB0QmxvY2s6IGZ1bmN0aW9uIChNLCBvZmZzZXQpIHtcblx0ICAgICAgICAgICAgdGhpcy5fZG9DcnlwdEJsb2NrKE0sIG9mZnNldCwgdGhpcy5faW52U3ViS2V5cyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9kb0NyeXB0QmxvY2s6IGZ1bmN0aW9uIChNLCBvZmZzZXQsIHN1YktleXMpIHtcblx0ICAgICAgICAgICAgLy8gR2V0IGlucHV0XG5cdCAgICAgICAgICAgIHRoaXMuX2xCbG9jayA9IE1bb2Zmc2V0XTtcblx0ICAgICAgICAgICAgdGhpcy5fckJsb2NrID0gTVtvZmZzZXQgKyAxXTtcblxuXHQgICAgICAgICAgICAvLyBJbml0aWFsIHBlcm11dGF0aW9uXG5cdCAgICAgICAgICAgIGV4Y2hhbmdlTFIuY2FsbCh0aGlzLCA0LCAgMHgwZjBmMGYwZik7XG5cdCAgICAgICAgICAgIGV4Y2hhbmdlTFIuY2FsbCh0aGlzLCAxNiwgMHgwMDAwZmZmZik7XG5cdCAgICAgICAgICAgIGV4Y2hhbmdlUkwuY2FsbCh0aGlzLCAyLCAgMHgzMzMzMzMzMyk7XG5cdCAgICAgICAgICAgIGV4Y2hhbmdlUkwuY2FsbCh0aGlzLCA4LCAgMHgwMGZmMDBmZik7XG5cdCAgICAgICAgICAgIGV4Y2hhbmdlTFIuY2FsbCh0aGlzLCAxLCAgMHg1NTU1NTU1NSk7XG5cblx0ICAgICAgICAgICAgLy8gUm91bmRzXG5cdCAgICAgICAgICAgIGZvciAodmFyIHJvdW5kID0gMDsgcm91bmQgPCAxNjsgcm91bmQrKykge1xuXHQgICAgICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgICAgICB2YXIgc3ViS2V5ID0gc3ViS2V5c1tyb3VuZF07XG5cdCAgICAgICAgICAgICAgICB2YXIgbEJsb2NrID0gdGhpcy5fbEJsb2NrO1xuXHQgICAgICAgICAgICAgICAgdmFyIHJCbG9jayA9IHRoaXMuX3JCbG9jaztcblxuXHQgICAgICAgICAgICAgICAgLy8gRmVpc3RlbCBmdW5jdGlvblxuXHQgICAgICAgICAgICAgICAgdmFyIGYgPSAwO1xuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA4OyBpKyspIHtcblx0ICAgICAgICAgICAgICAgICAgICBmIHw9IFNCT1hfUFtpXVsoKHJCbG9jayBeIHN1YktleVtpXSkgJiBTQk9YX01BU0tbaV0pID4+PiAwXTtcblx0ICAgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgICAgIHRoaXMuX2xCbG9jayA9IHJCbG9jaztcblx0ICAgICAgICAgICAgICAgIHRoaXMuX3JCbG9jayA9IGxCbG9jayBeIGY7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBVbmRvIHN3YXAgZnJvbSBsYXN0IHJvdW5kXG5cdCAgICAgICAgICAgIHZhciB0ID0gdGhpcy5fbEJsb2NrO1xuXHQgICAgICAgICAgICB0aGlzLl9sQmxvY2sgPSB0aGlzLl9yQmxvY2s7XG5cdCAgICAgICAgICAgIHRoaXMuX3JCbG9jayA9IHQ7XG5cblx0ICAgICAgICAgICAgLy8gRmluYWwgcGVybXV0YXRpb25cblx0ICAgICAgICAgICAgZXhjaGFuZ2VMUi5jYWxsKHRoaXMsIDEsICAweDU1NTU1NTU1KTtcblx0ICAgICAgICAgICAgZXhjaGFuZ2VSTC5jYWxsKHRoaXMsIDgsICAweDAwZmYwMGZmKTtcblx0ICAgICAgICAgICAgZXhjaGFuZ2VSTC5jYWxsKHRoaXMsIDIsICAweDMzMzMzMzMzKTtcblx0ICAgICAgICAgICAgZXhjaGFuZ2VMUi5jYWxsKHRoaXMsIDE2LCAweDAwMDBmZmZmKTtcblx0ICAgICAgICAgICAgZXhjaGFuZ2VMUi5jYWxsKHRoaXMsIDQsICAweDBmMGYwZjBmKTtcblxuXHQgICAgICAgICAgICAvLyBTZXQgb3V0cHV0XG5cdCAgICAgICAgICAgIE1bb2Zmc2V0XSA9IHRoaXMuX2xCbG9jaztcblx0ICAgICAgICAgICAgTVtvZmZzZXQgKyAxXSA9IHRoaXMuX3JCbG9jaztcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAga2V5U2l6ZTogNjQvMzIsXG5cblx0ICAgICAgICBpdlNpemU6IDY0LzMyLFxuXG5cdCAgICAgICAgYmxvY2tTaXplOiA2NC8zMlxuXHQgICAgfSk7XG5cblx0ICAgIC8vIFN3YXAgYml0cyBhY3Jvc3MgdGhlIGxlZnQgYW5kIHJpZ2h0IHdvcmRzXG5cdCAgICBmdW5jdGlvbiBleGNoYW5nZUxSKG9mZnNldCwgbWFzaykge1xuXHQgICAgICAgIHZhciB0ID0gKCh0aGlzLl9sQmxvY2sgPj4+IG9mZnNldCkgXiB0aGlzLl9yQmxvY2spICYgbWFzaztcblx0ICAgICAgICB0aGlzLl9yQmxvY2sgXj0gdDtcblx0ICAgICAgICB0aGlzLl9sQmxvY2sgXj0gdCA8PCBvZmZzZXQ7XG5cdCAgICB9XG5cblx0ICAgIGZ1bmN0aW9uIGV4Y2hhbmdlUkwob2Zmc2V0LCBtYXNrKSB7XG5cdCAgICAgICAgdmFyIHQgPSAoKHRoaXMuX3JCbG9jayA+Pj4gb2Zmc2V0KSBeIHRoaXMuX2xCbG9jaykgJiBtYXNrO1xuXHQgICAgICAgIHRoaXMuX2xCbG9jayBePSB0O1xuXHQgICAgICAgIHRoaXMuX3JCbG9jayBePSB0IDw8IG9mZnNldDtcblx0ICAgIH1cblxuXHQgICAgLyoqXG5cdCAgICAgKiBTaG9ydGN1dCBmdW5jdGlvbnMgdG8gdGhlIGNpcGhlcidzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgKlxuXHQgICAgICogQGV4YW1wbGVcblx0ICAgICAqXG5cdCAgICAgKiAgICAgdmFyIGNpcGhlcnRleHQgPSBDcnlwdG9KUy5ERVMuZW5jcnlwdChtZXNzYWdlLCBrZXksIGNmZyk7XG5cdCAgICAgKiAgICAgdmFyIHBsYWludGV4dCAgPSBDcnlwdG9KUy5ERVMuZGVjcnlwdChjaXBoZXJ0ZXh0LCBrZXksIGNmZyk7XG5cdCAgICAgKi9cblx0ICAgIEMuREVTID0gQmxvY2tDaXBoZXIuX2NyZWF0ZUhlbHBlcihERVMpO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFRyaXBsZS1ERVMgYmxvY2sgY2lwaGVyIGFsZ29yaXRobS5cblx0ICAgICAqL1xuXHQgICAgdmFyIFRyaXBsZURFUyA9IENfYWxnby5UcmlwbGVERVMgPSBCbG9ja0NpcGhlci5leHRlbmQoe1xuXHQgICAgICAgIF9kb1Jlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIga2V5ID0gdGhpcy5fa2V5O1xuXHQgICAgICAgICAgICB2YXIga2V5V29yZHMgPSBrZXkud29yZHM7XG5cdCAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUga2V5IGxlbmd0aCBpcyB2YWxpZCAoNjQsIDEyOCBvciA+PSAxOTIgYml0KVxuXHQgICAgICAgICAgICBpZiAoa2V5V29yZHMubGVuZ3RoICE9PSAyICYmIGtleVdvcmRzLmxlbmd0aCAhPT0gNCAmJiBrZXlXb3Jkcy5sZW5ndGggPCA2KSB7XG5cdCAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQga2V5IGxlbmd0aCAtIDNERVMgcmVxdWlyZXMgdGhlIGtleSBsZW5ndGggdG8gYmUgNjQsIDEyOCwgMTkyIG9yID4xOTIuJyk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBFeHRlbmQgdGhlIGtleSBhY2NvcmRpbmcgdG8gdGhlIGtleWluZyBvcHRpb25zIGRlZmluZWQgaW4gM0RFUyBzdGFuZGFyZFxuXHQgICAgICAgICAgICB2YXIga2V5MSA9IGtleVdvcmRzLnNsaWNlKDAsIDIpO1xuXHQgICAgICAgICAgICB2YXIga2V5MiA9IGtleVdvcmRzLmxlbmd0aCA8IDQgPyBrZXlXb3Jkcy5zbGljZSgwLCAyKSA6IGtleVdvcmRzLnNsaWNlKDIsIDQpO1xuXHQgICAgICAgICAgICB2YXIga2V5MyA9IGtleVdvcmRzLmxlbmd0aCA8IDYgPyBrZXlXb3Jkcy5zbGljZSgwLCAyKSA6IGtleVdvcmRzLnNsaWNlKDQsIDYpO1xuXG5cdCAgICAgICAgICAgIC8vIENyZWF0ZSBERVMgaW5zdGFuY2VzXG5cdCAgICAgICAgICAgIHRoaXMuX2RlczEgPSBERVMuY3JlYXRlRW5jcnlwdG9yKFdvcmRBcnJheS5jcmVhdGUoa2V5MSkpO1xuXHQgICAgICAgICAgICB0aGlzLl9kZXMyID0gREVTLmNyZWF0ZUVuY3J5cHRvcihXb3JkQXJyYXkuY3JlYXRlKGtleTIpKTtcblx0ICAgICAgICAgICAgdGhpcy5fZGVzMyA9IERFUy5jcmVhdGVFbmNyeXB0b3IoV29yZEFycmF5LmNyZWF0ZShrZXkzKSk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIGVuY3J5cHRCbG9jazogZnVuY3Rpb24gKE0sIG9mZnNldCkge1xuXHQgICAgICAgICAgICB0aGlzLl9kZXMxLmVuY3J5cHRCbG9jayhNLCBvZmZzZXQpO1xuXHQgICAgICAgICAgICB0aGlzLl9kZXMyLmRlY3J5cHRCbG9jayhNLCBvZmZzZXQpO1xuXHQgICAgICAgICAgICB0aGlzLl9kZXMzLmVuY3J5cHRCbG9jayhNLCBvZmZzZXQpO1xuXHQgICAgICAgIH0sXG5cblx0ICAgICAgICBkZWNyeXB0QmxvY2s6IGZ1bmN0aW9uIChNLCBvZmZzZXQpIHtcblx0ICAgICAgICAgICAgdGhpcy5fZGVzMy5kZWNyeXB0QmxvY2soTSwgb2Zmc2V0KTtcblx0ICAgICAgICAgICAgdGhpcy5fZGVzMi5lbmNyeXB0QmxvY2soTSwgb2Zmc2V0KTtcblx0ICAgICAgICAgICAgdGhpcy5fZGVzMS5kZWNyeXB0QmxvY2soTSwgb2Zmc2V0KTtcblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAga2V5U2l6ZTogMTkyLzMyLFxuXG5cdCAgICAgICAgaXZTaXplOiA2NC8zMixcblxuXHQgICAgICAgIGJsb2NrU2l6ZTogNjQvMzJcblx0ICAgIH0pO1xuXG5cdCAgICAvKipcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9ucyB0byB0aGUgY2lwaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cblx0ICAgICAqXG5cdCAgICAgKiBAZXhhbXBsZVxuXHQgICAgICpcblx0ICAgICAqICAgICB2YXIgY2lwaGVydGV4dCA9IENyeXB0b0pTLlRyaXBsZURFUy5lbmNyeXB0KG1lc3NhZ2UsIGtleSwgY2ZnKTtcblx0ICAgICAqICAgICB2YXIgcGxhaW50ZXh0ICA9IENyeXB0b0pTLlRyaXBsZURFUy5kZWNyeXB0KGNpcGhlcnRleHQsIGtleSwgY2ZnKTtcblx0ICAgICAqL1xuXHQgICAgQy5UcmlwbGVERVMgPSBCbG9ja0NpcGhlci5fY3JlYXRlSGVscGVyKFRyaXBsZURFUyk7XG5cdH0oKSk7XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlMuVHJpcGxlREVTO1xuXG59KSk7IiwgIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnksIHVuZGVmKSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpLCByZXF1aXJlKFwiLi9lbmMtYmFzZTY0XCIpLCByZXF1aXJlKFwiLi9tZDVcIiksIHJlcXVpcmUoXCIuL2V2cGtkZlwiKSwgcmVxdWlyZShcIi4vY2lwaGVyLWNvcmVcIikpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gQU1EXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiLCBcIi4vZW5jLWJhc2U2NFwiLCBcIi4vbWQ1XCIsIFwiLi9ldnBrZGZcIiwgXCIuL2NpcGhlci1jb3JlXCJdLCBmYWN0b3J5KTtcblx0fVxuXHRlbHNlIHtcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcblxuXHQoZnVuY3Rpb24gKCkge1xuXHQgICAgLy8gU2hvcnRjdXRzXG5cdCAgICB2YXIgQyA9IENyeXB0b0pTO1xuXHQgICAgdmFyIENfbGliID0gQy5saWI7XG5cdCAgICB2YXIgU3RyZWFtQ2lwaGVyID0gQ19saWIuU3RyZWFtQ2lwaGVyO1xuXHQgICAgdmFyIENfYWxnbyA9IEMuYWxnbztcblxuXHQgICAgLyoqXG5cdCAgICAgKiBSQzQgc3RyZWFtIGNpcGhlciBhbGdvcml0aG0uXG5cdCAgICAgKi9cblx0ICAgIHZhciBSQzQgPSBDX2FsZ28uUkM0ID0gU3RyZWFtQ2lwaGVyLmV4dGVuZCh7XG5cdCAgICAgICAgX2RvUmVzZXQ6IGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLl9rZXk7XG5cdCAgICAgICAgICAgIHZhciBrZXlXb3JkcyA9IGtleS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIGtleVNpZ0J5dGVzID0ga2V5LnNpZ0J5dGVzO1xuXG5cdCAgICAgICAgICAgIC8vIEluaXQgc2JveFxuXHQgICAgICAgICAgICB2YXIgUyA9IHRoaXMuX1MgPSBbXTtcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgU1tpXSA9IGk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBLZXkgc2V0dXBcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGogPSAwOyBpIDwgMjU2OyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIHZhciBrZXlCeXRlSW5kZXggPSBpICUga2V5U2lnQnl0ZXM7XG5cdCAgICAgICAgICAgICAgICB2YXIga2V5Qnl0ZSA9IChrZXlXb3Jkc1trZXlCeXRlSW5kZXggPj4+IDJdID4+PiAoMjQgLSAoa2V5Qnl0ZUluZGV4ICUgNCkgKiA4KSkgJiAweGZmO1xuXG5cdCAgICAgICAgICAgICAgICBqID0gKGogKyBTW2ldICsga2V5Qnl0ZSkgJSAyNTY7XG5cblx0ICAgICAgICAgICAgICAgIC8vIFN3YXBcblx0ICAgICAgICAgICAgICAgIHZhciB0ID0gU1tpXTtcblx0ICAgICAgICAgICAgICAgIFNbaV0gPSBTW2pdO1xuXHQgICAgICAgICAgICAgICAgU1tqXSA9IHQ7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBDb3VudGVyc1xuXHQgICAgICAgICAgICB0aGlzLl9pID0gdGhpcy5faiA9IDA7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9kb1Byb2Nlc3NCbG9jazogZnVuY3Rpb24gKE0sIG9mZnNldCkge1xuXHQgICAgICAgICAgICBNW29mZnNldF0gXj0gZ2VuZXJhdGVLZXlzdHJlYW1Xb3JkLmNhbGwodGhpcyk7XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIGtleVNpemU6IDI1Ni8zMixcblxuXHQgICAgICAgIGl2U2l6ZTogMFxuXHQgICAgfSk7XG5cblx0ICAgIGZ1bmN0aW9uIGdlbmVyYXRlS2V5c3RyZWFtV29yZCgpIHtcblx0ICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICB2YXIgUyA9IHRoaXMuX1M7XG5cdCAgICAgICAgdmFyIGkgPSB0aGlzLl9pO1xuXHQgICAgICAgIHZhciBqID0gdGhpcy5fajtcblxuXHQgICAgICAgIC8vIEdlbmVyYXRlIGtleXN0cmVhbSB3b3JkXG5cdCAgICAgICAgdmFyIGtleXN0cmVhbVdvcmQgPSAwO1xuXHQgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgNDsgbisrKSB7XG5cdCAgICAgICAgICAgIGkgPSAoaSArIDEpICUgMjU2O1xuXHQgICAgICAgICAgICBqID0gKGogKyBTW2ldKSAlIDI1NjtcblxuXHQgICAgICAgICAgICAvLyBTd2FwXG5cdCAgICAgICAgICAgIHZhciB0ID0gU1tpXTtcblx0ICAgICAgICAgICAgU1tpXSA9IFNbal07XG5cdCAgICAgICAgICAgIFNbal0gPSB0O1xuXG5cdCAgICAgICAgICAgIGtleXN0cmVhbVdvcmQgfD0gU1soU1tpXSArIFNbal0pICUgMjU2XSA8PCAoMjQgLSBuICogOCk7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgLy8gVXBkYXRlIGNvdW50ZXJzXG5cdCAgICAgICAgdGhpcy5faSA9IGk7XG5cdCAgICAgICAgdGhpcy5faiA9IGo7XG5cblx0ICAgICAgICByZXR1cm4ga2V5c3RyZWFtV29yZDtcblx0ICAgIH1cblxuXHQgICAgLyoqXG5cdCAgICAgKiBTaG9ydGN1dCBmdW5jdGlvbnMgdG8gdGhlIGNpcGhlcidzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgKlxuXHQgICAgICogQGV4YW1wbGVcblx0ICAgICAqXG5cdCAgICAgKiAgICAgdmFyIGNpcGhlcnRleHQgPSBDcnlwdG9KUy5SQzQuZW5jcnlwdChtZXNzYWdlLCBrZXksIGNmZyk7XG5cdCAgICAgKiAgICAgdmFyIHBsYWludGV4dCAgPSBDcnlwdG9KUy5SQzQuZGVjcnlwdChjaXBoZXJ0ZXh0LCBrZXksIGNmZyk7XG5cdCAgICAgKi9cblx0ICAgIEMuUkM0ID0gU3RyZWFtQ2lwaGVyLl9jcmVhdGVIZWxwZXIoUkM0KTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBNb2RpZmllZCBSQzQgc3RyZWFtIGNpcGhlciBhbGdvcml0aG0uXG5cdCAgICAgKi9cblx0ICAgIHZhciBSQzREcm9wID0gQ19hbGdvLlJDNERyb3AgPSBSQzQuZXh0ZW5kKHtcblx0ICAgICAgICAvKipcblx0ICAgICAgICAgKiBDb25maWd1cmF0aW9uIG9wdGlvbnMuXG5cdCAgICAgICAgICpcblx0ICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0gZHJvcCBUaGUgbnVtYmVyIG9mIGtleXN0cmVhbSB3b3JkcyB0byBkcm9wLiBEZWZhdWx0IDE5MlxuXHQgICAgICAgICAqL1xuXHQgICAgICAgIGNmZzogUkM0LmNmZy5leHRlbmQoe1xuXHQgICAgICAgICAgICBkcm9wOiAxOTJcblx0ICAgICAgICB9KSxcblxuXHQgICAgICAgIF9kb1Jlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIFJDNC5fZG9SZXNldC5jYWxsKHRoaXMpO1xuXG5cdCAgICAgICAgICAgIC8vIERyb3Bcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMuY2ZnLmRyb3A7IGkgPiAwOyBpLS0pIHtcblx0ICAgICAgICAgICAgICAgIGdlbmVyYXRlS2V5c3RyZWFtV29yZC5jYWxsKHRoaXMpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgfSk7XG5cblx0ICAgIC8qKlxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb25zIHRvIHRoZSBjaXBoZXIncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICpcblx0ICAgICAqIEBleGFtcGxlXG5cdCAgICAgKlxuXHQgICAgICogICAgIHZhciBjaXBoZXJ0ZXh0ID0gQ3J5cHRvSlMuUkM0RHJvcC5lbmNyeXB0KG1lc3NhZ2UsIGtleSwgY2ZnKTtcblx0ICAgICAqICAgICB2YXIgcGxhaW50ZXh0ICA9IENyeXB0b0pTLlJDNERyb3AuZGVjcnlwdChjaXBoZXJ0ZXh0LCBrZXksIGNmZyk7XG5cdCAgICAgKi9cblx0ICAgIEMuUkM0RHJvcCA9IFN0cmVhbUNpcGhlci5fY3JlYXRlSGVscGVyKFJDNERyb3ApO1xuXHR9KCkpO1xuXG5cblx0cmV0dXJuIENyeXB0b0pTLlJDNDtcblxufSkpOyIsICI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5LCB1bmRlZikge1xuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcblx0XHQvLyBDb21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSwgcmVxdWlyZShcIi4vZW5jLWJhc2U2NFwiKSwgcmVxdWlyZShcIi4vbWQ1XCIpLCByZXF1aXJlKFwiLi9ldnBrZGZcIiksIHJlcXVpcmUoXCIuL2NpcGhlci1jb3JlXCIpKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXCIuL2NvcmVcIiwgXCIuL2VuYy1iYXNlNjRcIiwgXCIuL21kNVwiLCBcIi4vZXZwa2RmXCIsIFwiLi9jaXBoZXItY29yZVwiXSwgZmFjdG9yeSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XG5cdH1cbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XG5cblx0KGZ1bmN0aW9uICgpIHtcblx0ICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgdmFyIEMgPSBDcnlwdG9KUztcblx0ICAgIHZhciBDX2xpYiA9IEMubGliO1xuXHQgICAgdmFyIFN0cmVhbUNpcGhlciA9IENfbGliLlN0cmVhbUNpcGhlcjtcblx0ICAgIHZhciBDX2FsZ28gPSBDLmFsZ287XG5cblx0ICAgIC8vIFJldXNhYmxlIG9iamVjdHNcblx0ICAgIHZhciBTICA9IFtdO1xuXHQgICAgdmFyIENfID0gW107XG5cdCAgICB2YXIgRyAgPSBbXTtcblxuXHQgICAgLyoqXG5cdCAgICAgKiBSYWJiaXQgc3RyZWFtIGNpcGhlciBhbGdvcml0aG1cblx0ICAgICAqL1xuXHQgICAgdmFyIFJhYmJpdCA9IENfYWxnby5SYWJiaXQgPSBTdHJlYW1DaXBoZXIuZXh0ZW5kKHtcblx0ICAgICAgICBfZG9SZXNldDogZnVuY3Rpb24gKCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgdmFyIEsgPSB0aGlzLl9rZXkud29yZHM7XG5cdCAgICAgICAgICAgIHZhciBpdiA9IHRoaXMuY2ZnLml2O1xuXG5cdCAgICAgICAgICAgIC8vIFN3YXAgZW5kaWFuXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICBLW2ldID0gKCgoS1tpXSA8PCA4KSAgfCAoS1tpXSA+Pj4gMjQpKSAmIDB4MDBmZjAwZmYpIHxcblx0ICAgICAgICAgICAgICAgICAgICAgICAoKChLW2ldIDw8IDI0KSB8IChLW2ldID4+PiA4KSkgICYgMHhmZjAwZmYwMCk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBHZW5lcmF0ZSBpbml0aWFsIHN0YXRlIHZhbHVlc1xuXHQgICAgICAgICAgICB2YXIgWCA9IHRoaXMuX1ggPSBbXG5cdCAgICAgICAgICAgICAgICBLWzBdLCAoS1szXSA8PCAxNikgfCAoS1syXSA+Pj4gMTYpLFxuXHQgICAgICAgICAgICAgICAgS1sxXSwgKEtbMF0gPDwgMTYpIHwgKEtbM10gPj4+IDE2KSxcblx0ICAgICAgICAgICAgICAgIEtbMl0sIChLWzFdIDw8IDE2KSB8IChLWzBdID4+PiAxNiksXG5cdCAgICAgICAgICAgICAgICBLWzNdLCAoS1syXSA8PCAxNikgfCAoS1sxXSA+Pj4gMTYpXG5cdCAgICAgICAgICAgIF07XG5cblx0ICAgICAgICAgICAgLy8gR2VuZXJhdGUgaW5pdGlhbCBjb3VudGVyIHZhbHVlc1xuXHQgICAgICAgICAgICB2YXIgQyA9IHRoaXMuX0MgPSBbXG5cdCAgICAgICAgICAgICAgICAoS1syXSA8PCAxNikgfCAoS1syXSA+Pj4gMTYpLCAoS1swXSAmIDB4ZmZmZjAwMDApIHwgKEtbMV0gJiAweDAwMDBmZmZmKSxcblx0ICAgICAgICAgICAgICAgIChLWzNdIDw8IDE2KSB8IChLWzNdID4+PiAxNiksIChLWzFdICYgMHhmZmZmMDAwMCkgfCAoS1syXSAmIDB4MDAwMGZmZmYpLFxuXHQgICAgICAgICAgICAgICAgKEtbMF0gPDwgMTYpIHwgKEtbMF0gPj4+IDE2KSwgKEtbMl0gJiAweGZmZmYwMDAwKSB8IChLWzNdICYgMHgwMDAwZmZmZiksXG5cdCAgICAgICAgICAgICAgICAoS1sxXSA8PCAxNikgfCAoS1sxXSA+Pj4gMTYpLCAoS1szXSAmIDB4ZmZmZjAwMDApIHwgKEtbMF0gJiAweDAwMDBmZmZmKVxuXHQgICAgICAgICAgICBdO1xuXG5cdCAgICAgICAgICAgIC8vIENhcnJ5IGJpdFxuXHQgICAgICAgICAgICB0aGlzLl9iID0gMDtcblxuXHQgICAgICAgICAgICAvLyBJdGVyYXRlIHRoZSBzeXN0ZW0gZm91ciB0aW1lc1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgbmV4dFN0YXRlLmNhbGwodGhpcyk7XG5cdCAgICAgICAgICAgIH1cblxuXHQgICAgICAgICAgICAvLyBNb2RpZnkgdGhlIGNvdW50ZXJzXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgODsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICBDW2ldIF49IFhbKGkgKyA0KSAmIDddO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gSVYgc2V0dXBcblx0ICAgICAgICAgICAgaWYgKGl2KSB7XG5cdCAgICAgICAgICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICAgICAgICAgIHZhciBJViA9IGl2LndvcmRzO1xuXHQgICAgICAgICAgICAgICAgdmFyIElWXzAgPSBJVlswXTtcblx0ICAgICAgICAgICAgICAgIHZhciBJVl8xID0gSVZbMV07XG5cblx0ICAgICAgICAgICAgICAgIC8vIEdlbmVyYXRlIGZvdXIgc3VidmVjdG9yc1xuXHQgICAgICAgICAgICAgICAgdmFyIGkwID0gKCgoSVZfMCA8PCA4KSB8IChJVl8wID4+PiAyNCkpICYgMHgwMGZmMDBmZikgfCAoKChJVl8wIDw8IDI0KSB8IChJVl8wID4+PiA4KSkgJiAweGZmMDBmZjAwKTtcblx0ICAgICAgICAgICAgICAgIHZhciBpMiA9ICgoKElWXzEgPDwgOCkgfCAoSVZfMSA+Pj4gMjQpKSAmIDB4MDBmZjAwZmYpIHwgKCgoSVZfMSA8PCAyNCkgfCAoSVZfMSA+Pj4gOCkpICYgMHhmZjAwZmYwMCk7XG5cdCAgICAgICAgICAgICAgICB2YXIgaTEgPSAoaTAgPj4+IDE2KSB8IChpMiAmIDB4ZmZmZjAwMDApO1xuXHQgICAgICAgICAgICAgICAgdmFyIGkzID0gKGkyIDw8IDE2KSAgfCAoaTAgJiAweDAwMDBmZmZmKTtcblxuXHQgICAgICAgICAgICAgICAgLy8gTW9kaWZ5IGNvdW50ZXIgdmFsdWVzXG5cdCAgICAgICAgICAgICAgICBDWzBdIF49IGkwO1xuXHQgICAgICAgICAgICAgICAgQ1sxXSBePSBpMTtcblx0ICAgICAgICAgICAgICAgIENbMl0gXj0gaTI7XG5cdCAgICAgICAgICAgICAgICBDWzNdIF49IGkzO1xuXHQgICAgICAgICAgICAgICAgQ1s0XSBePSBpMDtcblx0ICAgICAgICAgICAgICAgIENbNV0gXj0gaTE7XG5cdCAgICAgICAgICAgICAgICBDWzZdIF49IGkyO1xuXHQgICAgICAgICAgICAgICAgQ1s3XSBePSBpMztcblxuXHQgICAgICAgICAgICAgICAgLy8gSXRlcmF0ZSB0aGUgc3lzdGVtIGZvdXIgdGltZXNcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICAgICAgbmV4dFN0YXRlLmNhbGwodGhpcyk7XG5cdCAgICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgX2RvUHJvY2Vzc0Jsb2NrOiBmdW5jdGlvbiAoTSwgb2Zmc2V0KSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XG5cdCAgICAgICAgICAgIHZhciBYID0gdGhpcy5fWDtcblxuXHQgICAgICAgICAgICAvLyBJdGVyYXRlIHRoZSBzeXN0ZW1cblx0ICAgICAgICAgICAgbmV4dFN0YXRlLmNhbGwodGhpcyk7XG5cblx0ICAgICAgICAgICAgLy8gR2VuZXJhdGUgZm91ciBrZXlzdHJlYW0gd29yZHNcblx0ICAgICAgICAgICAgU1swXSA9IFhbMF0gXiAoWFs1XSA+Pj4gMTYpIF4gKFhbM10gPDwgMTYpO1xuXHQgICAgICAgICAgICBTWzFdID0gWFsyXSBeIChYWzddID4+PiAxNikgXiAoWFs1XSA8PCAxNik7XG5cdCAgICAgICAgICAgIFNbMl0gPSBYWzRdIF4gKFhbMV0gPj4+IDE2KSBeIChYWzddIDw8IDE2KTtcblx0ICAgICAgICAgICAgU1szXSA9IFhbNl0gXiAoWFszXSA+Pj4gMTYpIF4gKFhbMV0gPDwgMTYpO1xuXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgICAvLyBTd2FwIGVuZGlhblxuXHQgICAgICAgICAgICAgICAgU1tpXSA9ICgoKFNbaV0gPDwgOCkgIHwgKFNbaV0gPj4+IDI0KSkgJiAweDAwZmYwMGZmKSB8XG5cdCAgICAgICAgICAgICAgICAgICAgICAgKCgoU1tpXSA8PCAyNCkgfCAoU1tpXSA+Pj4gOCkpICAmIDB4ZmYwMGZmMDApO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBFbmNyeXB0XG5cdCAgICAgICAgICAgICAgICBNW29mZnNldCArIGldIF49IFNbaV07XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICB9LFxuXG5cdCAgICAgICAgYmxvY2tTaXplOiAxMjgvMzIsXG5cblx0ICAgICAgICBpdlNpemU6IDY0LzMyXG5cdCAgICB9KTtcblxuXHQgICAgZnVuY3Rpb24gbmV4dFN0YXRlKCkge1xuXHQgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgIHZhciBYID0gdGhpcy5fWDtcblx0ICAgICAgICB2YXIgQyA9IHRoaXMuX0M7XG5cblx0ICAgICAgICAvLyBTYXZlIG9sZCBjb3VudGVyIHZhbHVlc1xuXHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgODsgaSsrKSB7XG5cdCAgICAgICAgICAgIENfW2ldID0gQ1tpXTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICAvLyBDYWxjdWxhdGUgbmV3IGNvdW50ZXIgdmFsdWVzXG5cdCAgICAgICAgQ1swXSA9IChDWzBdICsgMHg0ZDM0ZDM0ZCArIHRoaXMuX2IpIHwgMDtcblx0ICAgICAgICBDWzFdID0gKENbMV0gKyAweGQzNGQzNGQzICsgKChDWzBdID4+PiAwKSA8IChDX1swXSA+Pj4gMCkgPyAxIDogMCkpIHwgMDtcblx0ICAgICAgICBDWzJdID0gKENbMl0gKyAweDM0ZDM0ZDM0ICsgKChDWzFdID4+PiAwKSA8IChDX1sxXSA+Pj4gMCkgPyAxIDogMCkpIHwgMDtcblx0ICAgICAgICBDWzNdID0gKENbM10gKyAweDRkMzRkMzRkICsgKChDWzJdID4+PiAwKSA8IChDX1syXSA+Pj4gMCkgPyAxIDogMCkpIHwgMDtcblx0ICAgICAgICBDWzRdID0gKENbNF0gKyAweGQzNGQzNGQzICsgKChDWzNdID4+PiAwKSA8IChDX1szXSA+Pj4gMCkgPyAxIDogMCkpIHwgMDtcblx0ICAgICAgICBDWzVdID0gKENbNV0gKyAweDM0ZDM0ZDM0ICsgKChDWzRdID4+PiAwKSA8IChDX1s0XSA+Pj4gMCkgPyAxIDogMCkpIHwgMDtcblx0ICAgICAgICBDWzZdID0gKENbNl0gKyAweDRkMzRkMzRkICsgKChDWzVdID4+PiAwKSA8IChDX1s1XSA+Pj4gMCkgPyAxIDogMCkpIHwgMDtcblx0ICAgICAgICBDWzddID0gKENbN10gKyAweGQzNGQzNGQzICsgKChDWzZdID4+PiAwKSA8IChDX1s2XSA+Pj4gMCkgPyAxIDogMCkpIHwgMDtcblx0ICAgICAgICB0aGlzLl9iID0gKENbN10gPj4+IDApIDwgKENfWzddID4+PiAwKSA/IDEgOiAwO1xuXG5cdCAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBnLXZhbHVlc1xuXHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgODsgaSsrKSB7XG5cdCAgICAgICAgICAgIHZhciBneCA9IFhbaV0gKyBDW2ldO1xuXG5cdCAgICAgICAgICAgIC8vIENvbnN0cnVjdCBoaWdoIGFuZCBsb3cgYXJndW1lbnQgZm9yIHNxdWFyaW5nXG5cdCAgICAgICAgICAgIHZhciBnYSA9IGd4ICYgMHhmZmZmO1xuXHQgICAgICAgICAgICB2YXIgZ2IgPSBneCA+Pj4gMTY7XG5cblx0ICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIGhpZ2ggYW5kIGxvdyByZXN1bHQgb2Ygc3F1YXJpbmdcblx0ICAgICAgICAgICAgdmFyIGdoID0gKCgoKGdhICogZ2EpID4+PiAxNykgKyBnYSAqIGdiKSA+Pj4gMTUpICsgZ2IgKiBnYjtcblx0ICAgICAgICAgICAgdmFyIGdsID0gKCgoZ3ggJiAweGZmZmYwMDAwKSAqIGd4KSB8IDApICsgKCgoZ3ggJiAweDAwMDBmZmZmKSAqIGd4KSB8IDApO1xuXG5cdCAgICAgICAgICAgIC8vIEhpZ2ggWE9SIGxvd1xuXHQgICAgICAgICAgICBHW2ldID0gZ2ggXiBnbDtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICAvLyBDYWxjdWxhdGUgbmV3IHN0YXRlIHZhbHVlc1xuXHQgICAgICAgIFhbMF0gPSAoR1swXSArICgoR1s3XSA8PCAxNikgfCAoR1s3XSA+Pj4gMTYpKSArICgoR1s2XSA8PCAxNikgfCAoR1s2XSA+Pj4gMTYpKSkgfCAwO1xuXHQgICAgICAgIFhbMV0gPSAoR1sxXSArICgoR1swXSA8PCA4KSAgfCAoR1swXSA+Pj4gMjQpKSArIEdbN10pIHwgMDtcblx0ICAgICAgICBYWzJdID0gKEdbMl0gKyAoKEdbMV0gPDwgMTYpIHwgKEdbMV0gPj4+IDE2KSkgKyAoKEdbMF0gPDwgMTYpIHwgKEdbMF0gPj4+IDE2KSkpIHwgMDtcblx0ICAgICAgICBYWzNdID0gKEdbM10gKyAoKEdbMl0gPDwgOCkgIHwgKEdbMl0gPj4+IDI0KSkgKyBHWzFdKSB8IDA7XG5cdCAgICAgICAgWFs0XSA9IChHWzRdICsgKChHWzNdIDw8IDE2KSB8IChHWzNdID4+PiAxNikpICsgKChHWzJdIDw8IDE2KSB8IChHWzJdID4+PiAxNikpKSB8IDA7XG5cdCAgICAgICAgWFs1XSA9IChHWzVdICsgKChHWzRdIDw8IDgpICB8IChHWzRdID4+PiAyNCkpICsgR1szXSkgfCAwO1xuXHQgICAgICAgIFhbNl0gPSAoR1s2XSArICgoR1s1XSA8PCAxNikgfCAoR1s1XSA+Pj4gMTYpKSArICgoR1s0XSA8PCAxNikgfCAoR1s0XSA+Pj4gMTYpKSkgfCAwO1xuXHQgICAgICAgIFhbN10gPSAoR1s3XSArICgoR1s2XSA8PCA4KSAgfCAoR1s2XSA+Pj4gMjQpKSArIEdbNV0pIHwgMDtcblx0ICAgIH1cblxuXHQgICAgLyoqXG5cdCAgICAgKiBTaG9ydGN1dCBmdW5jdGlvbnMgdG8gdGhlIGNpcGhlcidzIG9iamVjdCBpbnRlcmZhY2UuXG5cdCAgICAgKlxuXHQgICAgICogQGV4YW1wbGVcblx0ICAgICAqXG5cdCAgICAgKiAgICAgdmFyIGNpcGhlcnRleHQgPSBDcnlwdG9KUy5SYWJiaXQuZW5jcnlwdChtZXNzYWdlLCBrZXksIGNmZyk7XG5cdCAgICAgKiAgICAgdmFyIHBsYWludGV4dCAgPSBDcnlwdG9KUy5SYWJiaXQuZGVjcnlwdChjaXBoZXJ0ZXh0LCBrZXksIGNmZyk7XG5cdCAgICAgKi9cblx0ICAgIEMuUmFiYml0ID0gU3RyZWFtQ2lwaGVyLl9jcmVhdGVIZWxwZXIoUmFiYml0KTtcblx0fSgpKTtcblxuXG5cdHJldHVybiBDcnlwdG9KUy5SYWJiaXQ7XG5cbn0pKTsiLCAiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSwgdW5kZWYpIHtcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cdFx0Ly8gQ29tbW9uSlNcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIiksIHJlcXVpcmUoXCIuL2VuYy1iYXNlNjRcIiksIHJlcXVpcmUoXCIuL21kNVwiKSwgcmVxdWlyZShcIi4vZXZwa2RmXCIpLCByZXF1aXJlKFwiLi9jaXBoZXItY29yZVwiKSk7XG5cdH1cblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyBBTURcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCIsIFwiLi9lbmMtYmFzZTY0XCIsIFwiLi9tZDVcIiwgXCIuL2V2cGtkZlwiLCBcIi4vY2lwaGVyLWNvcmVcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xuXG5cdChmdW5jdGlvbiAoKSB7XG5cdCAgICAvLyBTaG9ydGN1dHNcblx0ICAgIHZhciBDID0gQ3J5cHRvSlM7XG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYjtcblx0ICAgIHZhciBTdHJlYW1DaXBoZXIgPSBDX2xpYi5TdHJlYW1DaXBoZXI7XG5cdCAgICB2YXIgQ19hbGdvID0gQy5hbGdvO1xuXG5cdCAgICAvLyBSZXVzYWJsZSBvYmplY3RzXG5cdCAgICB2YXIgUyAgPSBbXTtcblx0ICAgIHZhciBDXyA9IFtdO1xuXHQgICAgdmFyIEcgID0gW107XG5cblx0ICAgIC8qKlxuXHQgICAgICogUmFiYml0IHN0cmVhbSBjaXBoZXIgYWxnb3JpdGhtLlxuXHQgICAgICpcblx0ICAgICAqIFRoaXMgaXMgYSBsZWdhY3kgdmVyc2lvbiB0aGF0IG5lZ2xlY3RlZCB0byBjb252ZXJ0IHRoZSBrZXkgdG8gbGl0dGxlLWVuZGlhbi5cblx0ICAgICAqIFRoaXMgZXJyb3IgZG9lc24ndCBhZmZlY3QgdGhlIGNpcGhlcidzIHNlY3VyaXR5LFxuXHQgICAgICogYnV0IGl0IGRvZXMgYWZmZWN0IGl0cyBjb21wYXRpYmlsaXR5IHdpdGggb3RoZXIgaW1wbGVtZW50YXRpb25zLlxuXHQgICAgICovXG5cdCAgICB2YXIgUmFiYml0TGVnYWN5ID0gQ19hbGdvLlJhYmJpdExlZ2FjeSA9IFN0cmVhbUNpcGhlci5leHRlbmQoe1xuXHQgICAgICAgIF9kb1Jlc2V0OiBmdW5jdGlvbiAoKSB7XG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xuXHQgICAgICAgICAgICB2YXIgSyA9IHRoaXMuX2tleS53b3Jkcztcblx0ICAgICAgICAgICAgdmFyIGl2ID0gdGhpcy5jZmcuaXY7XG5cblx0ICAgICAgICAgICAgLy8gR2VuZXJhdGUgaW5pdGlhbCBzdGF0ZSB2YWx1ZXNcblx0ICAgICAgICAgICAgdmFyIFggPSB0aGlzLl9YID0gW1xuXHQgICAgICAgICAgICAgICAgS1swXSwgKEtbM10gPDwgMTYpIHwgKEtbMl0gPj4+IDE2KSxcblx0ICAgICAgICAgICAgICAgIEtbMV0sIChLWzBdIDw8IDE2KSB8IChLWzNdID4+PiAxNiksXG5cdCAgICAgICAgICAgICAgICBLWzJdLCAoS1sxXSA8PCAxNikgfCAoS1swXSA+Pj4gMTYpLFxuXHQgICAgICAgICAgICAgICAgS1szXSwgKEtbMl0gPDwgMTYpIHwgKEtbMV0gPj4+IDE2KVxuXHQgICAgICAgICAgICBdO1xuXG5cdCAgICAgICAgICAgIC8vIEdlbmVyYXRlIGluaXRpYWwgY291bnRlciB2YWx1ZXNcblx0ICAgICAgICAgICAgdmFyIEMgPSB0aGlzLl9DID0gW1xuXHQgICAgICAgICAgICAgICAgKEtbMl0gPDwgMTYpIHwgKEtbMl0gPj4+IDE2KSwgKEtbMF0gJiAweGZmZmYwMDAwKSB8IChLWzFdICYgMHgwMDAwZmZmZiksXG5cdCAgICAgICAgICAgICAgICAoS1szXSA8PCAxNikgfCAoS1szXSA+Pj4gMTYpLCAoS1sxXSAmIDB4ZmZmZjAwMDApIHwgKEtbMl0gJiAweDAwMDBmZmZmKSxcblx0ICAgICAgICAgICAgICAgIChLWzBdIDw8IDE2KSB8IChLWzBdID4+PiAxNiksIChLWzJdICYgMHhmZmZmMDAwMCkgfCAoS1szXSAmIDB4MDAwMGZmZmYpLFxuXHQgICAgICAgICAgICAgICAgKEtbMV0gPDwgMTYpIHwgKEtbMV0gPj4+IDE2KSwgKEtbM10gJiAweGZmZmYwMDAwKSB8IChLWzBdICYgMHgwMDAwZmZmZilcblx0ICAgICAgICAgICAgXTtcblxuXHQgICAgICAgICAgICAvLyBDYXJyeSBiaXRcblx0ICAgICAgICAgICAgdGhpcy5fYiA9IDA7XG5cblx0ICAgICAgICAgICAgLy8gSXRlcmF0ZSB0aGUgc3lzdGVtIGZvdXIgdGltZXNcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcblx0ICAgICAgICAgICAgICAgIG5leHRTdGF0ZS5jYWxsKHRoaXMpO1xuXHQgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgLy8gTW9kaWZ5IHRoZSBjb3VudGVyc1xuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDg7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgQ1tpXSBePSBYWyhpICsgNCkgJiA3XTtcblx0ICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgIC8vIElWIHNldHVwXG5cdCAgICAgICAgICAgIGlmIChpdikge1xuXHQgICAgICAgICAgICAgICAgLy8gU2hvcnRjdXRzXG5cdCAgICAgICAgICAgICAgICB2YXIgSVYgPSBpdi53b3Jkcztcblx0ICAgICAgICAgICAgICAgIHZhciBJVl8wID0gSVZbMF07XG5cdCAgICAgICAgICAgICAgICB2YXIgSVZfMSA9IElWWzFdO1xuXG5cdCAgICAgICAgICAgICAgICAvLyBHZW5lcmF0ZSBmb3VyIHN1YnZlY3RvcnNcblx0ICAgICAgICAgICAgICAgIHZhciBpMCA9ICgoKElWXzAgPDwgOCkgfCAoSVZfMCA+Pj4gMjQpKSAmIDB4MDBmZjAwZmYpIHwgKCgoSVZfMCA8PCAyNCkgfCAoSVZfMCA+Pj4gOCkpICYgMHhmZjAwZmYwMCk7XG5cdCAgICAgICAgICAgICAgICB2YXIgaTIgPSAoKChJVl8xIDw8IDgpIHwgKElWXzEgPj4+IDI0KSkgJiAweDAwZmYwMGZmKSB8ICgoKElWXzEgPDwgMjQpIHwgKElWXzEgPj4+IDgpKSAmIDB4ZmYwMGZmMDApO1xuXHQgICAgICAgICAgICAgICAgdmFyIGkxID0gKGkwID4+PiAxNikgfCAoaTIgJiAweGZmZmYwMDAwKTtcblx0ICAgICAgICAgICAgICAgIHZhciBpMyA9IChpMiA8PCAxNikgIHwgKGkwICYgMHgwMDAwZmZmZik7XG5cblx0ICAgICAgICAgICAgICAgIC8vIE1vZGlmeSBjb3VudGVyIHZhbHVlc1xuXHQgICAgICAgICAgICAgICAgQ1swXSBePSBpMDtcblx0ICAgICAgICAgICAgICAgIENbMV0gXj0gaTE7XG5cdCAgICAgICAgICAgICAgICBDWzJdIF49IGkyO1xuXHQgICAgICAgICAgICAgICAgQ1szXSBePSBpMztcblx0ICAgICAgICAgICAgICAgIENbNF0gXj0gaTA7XG5cdCAgICAgICAgICAgICAgICBDWzVdIF49IGkxO1xuXHQgICAgICAgICAgICAgICAgQ1s2XSBePSBpMjtcblx0ICAgICAgICAgICAgICAgIENbN10gXj0gaTM7XG5cblx0ICAgICAgICAgICAgICAgIC8vIEl0ZXJhdGUgdGhlIHN5c3RlbSBmb3VyIHRpbWVzXG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgICAgIG5leHRTdGF0ZS5jYWxsKHRoaXMpO1xuXHQgICAgICAgICAgICAgICAgfVxuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIF9kb1Byb2Nlc3NCbG9jazogZnVuY3Rpb24gKE0sIG9mZnNldCkge1xuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxuXHQgICAgICAgICAgICB2YXIgWCA9IHRoaXMuX1g7XG5cblx0ICAgICAgICAgICAgLy8gSXRlcmF0ZSB0aGUgc3lzdGVtXG5cdCAgICAgICAgICAgIG5leHRTdGF0ZS5jYWxsKHRoaXMpO1xuXG5cdCAgICAgICAgICAgIC8vIEdlbmVyYXRlIGZvdXIga2V5c3RyZWFtIHdvcmRzXG5cdCAgICAgICAgICAgIFNbMF0gPSBYWzBdIF4gKFhbNV0gPj4+IDE2KSBeIChYWzNdIDw8IDE2KTtcblx0ICAgICAgICAgICAgU1sxXSA9IFhbMl0gXiAoWFs3XSA+Pj4gMTYpIF4gKFhbNV0gPDwgMTYpO1xuXHQgICAgICAgICAgICBTWzJdID0gWFs0XSBeIChYWzFdID4+PiAxNikgXiAoWFs3XSA8PCAxNik7XG5cdCAgICAgICAgICAgIFNbM10gPSBYWzZdIF4gKFhbM10gPj4+IDE2KSBeIChYWzFdIDw8IDE2KTtcblxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xuXHQgICAgICAgICAgICAgICAgLy8gU3dhcCBlbmRpYW5cblx0ICAgICAgICAgICAgICAgIFNbaV0gPSAoKChTW2ldIDw8IDgpICB8IChTW2ldID4+PiAyNCkpICYgMHgwMGZmMDBmZikgfFxuXHQgICAgICAgICAgICAgICAgICAgICAgICgoKFNbaV0gPDwgMjQpIHwgKFNbaV0gPj4+IDgpKSAgJiAweGZmMDBmZjAwKTtcblxuXHQgICAgICAgICAgICAgICAgLy8gRW5jcnlwdFxuXHQgICAgICAgICAgICAgICAgTVtvZmZzZXQgKyBpXSBePSBTW2ldO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIGJsb2NrU2l6ZTogMTI4LzMyLFxuXG5cdCAgICAgICAgaXZTaXplOiA2NC8zMlxuXHQgICAgfSk7XG5cblx0ICAgIGZ1bmN0aW9uIG5leHRTdGF0ZSgpIHtcblx0ICAgICAgICAvLyBTaG9ydGN1dHNcblx0ICAgICAgICB2YXIgWCA9IHRoaXMuX1g7XG5cdCAgICAgICAgdmFyIEMgPSB0aGlzLl9DO1xuXG5cdCAgICAgICAgLy8gU2F2ZSBvbGQgY291bnRlciB2YWx1ZXNcblx0ICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDg7IGkrKykge1xuXHQgICAgICAgICAgICBDX1tpXSA9IENbaV07XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgLy8gQ2FsY3VsYXRlIG5ldyBjb3VudGVyIHZhbHVlc1xuXHQgICAgICAgIENbMF0gPSAoQ1swXSArIDB4NGQzNGQzNGQgKyB0aGlzLl9iKSB8IDA7XG5cdCAgICAgICAgQ1sxXSA9IChDWzFdICsgMHhkMzRkMzRkMyArICgoQ1swXSA+Pj4gMCkgPCAoQ19bMF0gPj4+IDApID8gMSA6IDApKSB8IDA7XG5cdCAgICAgICAgQ1syXSA9IChDWzJdICsgMHgzNGQzNGQzNCArICgoQ1sxXSA+Pj4gMCkgPCAoQ19bMV0gPj4+IDApID8gMSA6IDApKSB8IDA7XG5cdCAgICAgICAgQ1szXSA9IChDWzNdICsgMHg0ZDM0ZDM0ZCArICgoQ1syXSA+Pj4gMCkgPCAoQ19bMl0gPj4+IDApID8gMSA6IDApKSB8IDA7XG5cdCAgICAgICAgQ1s0XSA9IChDWzRdICsgMHhkMzRkMzRkMyArICgoQ1szXSA+Pj4gMCkgPCAoQ19bM10gPj4+IDApID8gMSA6IDApKSB8IDA7XG5cdCAgICAgICAgQ1s1XSA9IChDWzVdICsgMHgzNGQzNGQzNCArICgoQ1s0XSA+Pj4gMCkgPCAoQ19bNF0gPj4+IDApID8gMSA6IDApKSB8IDA7XG5cdCAgICAgICAgQ1s2XSA9IChDWzZdICsgMHg0ZDM0ZDM0ZCArICgoQ1s1XSA+Pj4gMCkgPCAoQ19bNV0gPj4+IDApID8gMSA6IDApKSB8IDA7XG5cdCAgICAgICAgQ1s3XSA9IChDWzddICsgMHhkMzRkMzRkMyArICgoQ1s2XSA+Pj4gMCkgPCAoQ19bNl0gPj4+IDApID8gMSA6IDApKSB8IDA7XG5cdCAgICAgICAgdGhpcy5fYiA9IChDWzddID4+PiAwKSA8IChDX1s3XSA+Pj4gMCkgPyAxIDogMDtcblxuXHQgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgZy12YWx1ZXNcblx0ICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDg7IGkrKykge1xuXHQgICAgICAgICAgICB2YXIgZ3ggPSBYW2ldICsgQ1tpXTtcblxuXHQgICAgICAgICAgICAvLyBDb25zdHJ1Y3QgaGlnaCBhbmQgbG93IGFyZ3VtZW50IGZvciBzcXVhcmluZ1xuXHQgICAgICAgICAgICB2YXIgZ2EgPSBneCAmIDB4ZmZmZjtcblx0ICAgICAgICAgICAgdmFyIGdiID0gZ3ggPj4+IDE2O1xuXG5cdCAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBoaWdoIGFuZCBsb3cgcmVzdWx0IG9mIHNxdWFyaW5nXG5cdCAgICAgICAgICAgIHZhciBnaCA9ICgoKChnYSAqIGdhKSA+Pj4gMTcpICsgZ2EgKiBnYikgPj4+IDE1KSArIGdiICogZ2I7XG5cdCAgICAgICAgICAgIHZhciBnbCA9ICgoKGd4ICYgMHhmZmZmMDAwMCkgKiBneCkgfCAwKSArICgoKGd4ICYgMHgwMDAwZmZmZikgKiBneCkgfCAwKTtcblxuXHQgICAgICAgICAgICAvLyBIaWdoIFhPUiBsb3dcblx0ICAgICAgICAgICAgR1tpXSA9IGdoIF4gZ2w7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgLy8gQ2FsY3VsYXRlIG5ldyBzdGF0ZSB2YWx1ZXNcblx0ICAgICAgICBYWzBdID0gKEdbMF0gKyAoKEdbN10gPDwgMTYpIHwgKEdbN10gPj4+IDE2KSkgKyAoKEdbNl0gPDwgMTYpIHwgKEdbNl0gPj4+IDE2KSkpIHwgMDtcblx0ICAgICAgICBYWzFdID0gKEdbMV0gKyAoKEdbMF0gPDwgOCkgIHwgKEdbMF0gPj4+IDI0KSkgKyBHWzddKSB8IDA7XG5cdCAgICAgICAgWFsyXSA9IChHWzJdICsgKChHWzFdIDw8IDE2KSB8IChHWzFdID4+PiAxNikpICsgKChHWzBdIDw8IDE2KSB8IChHWzBdID4+PiAxNikpKSB8IDA7XG5cdCAgICAgICAgWFszXSA9IChHWzNdICsgKChHWzJdIDw8IDgpICB8IChHWzJdID4+PiAyNCkpICsgR1sxXSkgfCAwO1xuXHQgICAgICAgIFhbNF0gPSAoR1s0XSArICgoR1szXSA8PCAxNikgfCAoR1szXSA+Pj4gMTYpKSArICgoR1syXSA8PCAxNikgfCAoR1syXSA+Pj4gMTYpKSkgfCAwO1xuXHQgICAgICAgIFhbNV0gPSAoR1s1XSArICgoR1s0XSA8PCA4KSAgfCAoR1s0XSA+Pj4gMjQpKSArIEdbM10pIHwgMDtcblx0ICAgICAgICBYWzZdID0gKEdbNl0gKyAoKEdbNV0gPDwgMTYpIHwgKEdbNV0gPj4+IDE2KSkgKyAoKEdbNF0gPDwgMTYpIHwgKEdbNF0gPj4+IDE2KSkpIHwgMDtcblx0ICAgICAgICBYWzddID0gKEdbN10gKyAoKEdbNl0gPDwgOCkgIHwgKEdbNl0gPj4+IDI0KSkgKyBHWzVdKSB8IDA7XG5cdCAgICB9XG5cblx0ICAgIC8qKlxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb25zIHRvIHRoZSBjaXBoZXIncyBvYmplY3QgaW50ZXJmYWNlLlxuXHQgICAgICpcblx0ICAgICAqIEBleGFtcGxlXG5cdCAgICAgKlxuXHQgICAgICogICAgIHZhciBjaXBoZXJ0ZXh0ID0gQ3J5cHRvSlMuUmFiYml0TGVnYWN5LmVuY3J5cHQobWVzc2FnZSwga2V5LCBjZmcpO1xuXHQgICAgICogICAgIHZhciBwbGFpbnRleHQgID0gQ3J5cHRvSlMuUmFiYml0TGVnYWN5LmRlY3J5cHQoY2lwaGVydGV4dCwga2V5LCBjZmcpO1xuXHQgICAgICovXG5cdCAgICBDLlJhYmJpdExlZ2FjeSA9IFN0cmVhbUNpcGhlci5fY3JlYXRlSGVscGVyKFJhYmJpdExlZ2FjeSk7XG5cdH0oKSk7XG5cblxuXHRyZXR1cm4gQ3J5cHRvSlMuUmFiYml0TGVnYWN5O1xuXG59KSk7IiwgIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnksIHVuZGVmKSB7XG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuXHRcdC8vIENvbW1vbkpTXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpLCByZXF1aXJlKFwiLi94NjQtY29yZVwiKSwgcmVxdWlyZShcIi4vbGliLXR5cGVkYXJyYXlzXCIpLCByZXF1aXJlKFwiLi9lbmMtdXRmMTZcIiksIHJlcXVpcmUoXCIuL2VuYy1iYXNlNjRcIiksIHJlcXVpcmUoXCIuL2VuYy1iYXNlNjR1cmxcIiksIHJlcXVpcmUoXCIuL21kNVwiKSwgcmVxdWlyZShcIi4vc2hhMVwiKSwgcmVxdWlyZShcIi4vc2hhMjU2XCIpLCByZXF1aXJlKFwiLi9zaGEyMjRcIiksIHJlcXVpcmUoXCIuL3NoYTUxMlwiKSwgcmVxdWlyZShcIi4vc2hhMzg0XCIpLCByZXF1aXJlKFwiLi9zaGEzXCIpLCByZXF1aXJlKFwiLi9yaXBlbWQxNjBcIiksIHJlcXVpcmUoXCIuL2htYWNcIiksIHJlcXVpcmUoXCIuL3Bia2RmMlwiKSwgcmVxdWlyZShcIi4vZXZwa2RmXCIpLCByZXF1aXJlKFwiLi9jaXBoZXItY29yZVwiKSwgcmVxdWlyZShcIi4vbW9kZS1jZmJcIiksIHJlcXVpcmUoXCIuL21vZGUtY3RyXCIpLCByZXF1aXJlKFwiLi9tb2RlLWN0ci1nbGFkbWFuXCIpLCByZXF1aXJlKFwiLi9tb2RlLW9mYlwiKSwgcmVxdWlyZShcIi4vbW9kZS1lY2JcIiksIHJlcXVpcmUoXCIuL3BhZC1hbnNpeDkyM1wiKSwgcmVxdWlyZShcIi4vcGFkLWlzbzEwMTI2XCIpLCByZXF1aXJlKFwiLi9wYWQtaXNvOTc5NzFcIiksIHJlcXVpcmUoXCIuL3BhZC16ZXJvcGFkZGluZ1wiKSwgcmVxdWlyZShcIi4vcGFkLW5vcGFkZGluZ1wiKSwgcmVxdWlyZShcIi4vZm9ybWF0LWhleFwiKSwgcmVxdWlyZShcIi4vYWVzXCIpLCByZXF1aXJlKFwiLi90cmlwbGVkZXNcIiksIHJlcXVpcmUoXCIuL3JjNFwiKSwgcmVxdWlyZShcIi4vcmFiYml0XCIpLCByZXF1aXJlKFwiLi9yYWJiaXQtbGVnYWN5XCIpKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRFxuXHRcdGRlZmluZShbXCIuL2NvcmVcIiwgXCIuL3g2NC1jb3JlXCIsIFwiLi9saWItdHlwZWRhcnJheXNcIiwgXCIuL2VuYy11dGYxNlwiLCBcIi4vZW5jLWJhc2U2NFwiLCBcIi4vZW5jLWJhc2U2NHVybFwiLCBcIi4vbWQ1XCIsIFwiLi9zaGExXCIsIFwiLi9zaGEyNTZcIiwgXCIuL3NoYTIyNFwiLCBcIi4vc2hhNTEyXCIsIFwiLi9zaGEzODRcIiwgXCIuL3NoYTNcIiwgXCIuL3JpcGVtZDE2MFwiLCBcIi4vaG1hY1wiLCBcIi4vcGJrZGYyXCIsIFwiLi9ldnBrZGZcIiwgXCIuL2NpcGhlci1jb3JlXCIsIFwiLi9tb2RlLWNmYlwiLCBcIi4vbW9kZS1jdHJcIiwgXCIuL21vZGUtY3RyLWdsYWRtYW5cIiwgXCIuL21vZGUtb2ZiXCIsIFwiLi9tb2RlLWVjYlwiLCBcIi4vcGFkLWFuc2l4OTIzXCIsIFwiLi9wYWQtaXNvMTAxMjZcIiwgXCIuL3BhZC1pc285Nzk3MVwiLCBcIi4vcGFkLXplcm9wYWRkaW5nXCIsIFwiLi9wYWQtbm9wYWRkaW5nXCIsIFwiLi9mb3JtYXQtaGV4XCIsIFwiLi9hZXNcIiwgXCIuL3RyaXBsZWRlc1wiLCBcIi4vcmM0XCIsIFwiLi9yYWJiaXRcIiwgXCIuL3JhYmJpdC1sZWdhY3lcIl0sIGZhY3RvcnkpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdC8vIEdsb2JhbCAoYnJvd3Nlcilcblx0XHRyb290LkNyeXB0b0pTID0gZmFjdG9yeShyb290LkNyeXB0b0pTKTtcblx0fVxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcblxuXHRyZXR1cm4gQ3J5cHRvSlM7XG5cbn0pKTsiLCAiaW1wb3J0IHsgTW9kZWxEYXRhIH0gZnJvbSAnLi9tb2RlbGRhdGEnO1xuXG5kZWNsYXJlIGNvbnN0ICQ6IGFueTtcbmRlY2xhcmUgY29uc3Qgc2FwOiBhbnk7XG5kZWNsYXJlIGNvbnN0IGpRdWVyeTogYW55O1xuZGVjbGFyZSBjb25zdCB3aW5kb3c6IGFueTtcblxuZGVjbGFyZSBjb25zdCBwOU1vZGVsczogYW55O1xuZGVjbGFyZSBjb25zdCBwOVZpZXdzOiBhbnk7XG5cbmV4cG9ydCBmdW5jdGlvbiBfY29udmVydEZsYXRUb05lc3RlZChuLCByLCB0KSB7XG4gICAgbGV0IGUsIGgsIHUsIGE7XG4gICAgbGV0IGM7XG4gICAgbGV0IG87XG4gICAgbGV0IGY7XG4gICAgZm9yIChhID0gW10sIGMgPSB7fSwgbyA9IDAsIGYgPSBuLmxlbmd0aDsgZiA+IG87IG8rKylcbiAgICAgICAgKGUgPSBuW29dKSxcbiAgICAgICAgICAgIChoID0gZVtyXSksXG4gICAgICAgICAgICAodSA9IGVbdF0gfHwgMCksXG4gICAgICAgICAgICAoY1toXSA9IGNbaF0gfHwgW10pLFxuICAgICAgICAgICAgKGUuY2hpbGRyZW4gPSBjW2hdKSxcbiAgICAgICAgICAgIDAgIT09IHUgPyAoKGNbdV0gPSBjW3VdIHx8IFtdKSwgY1t1XS5wdXNoKGUpKSA6IGEucHVzaChlKTtcbiAgICByZXR1cm4gYTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9jb252ZXJ0TmVzdGVkVG9GbGF0KGEpIHtcbiAgICBjb25zdCBiID0gW10sXG4gICAgICAgIGMgPSBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgJC5lYWNoKGEsIGZ1bmN0aW9uIChhLCBkKSB7XG4gICAgICAgICAgICAgICAgZC5jaGlsZHJlbiAmJiAoYyhkLmNoaWxkcmVuKSwgZGVsZXRlIGQuY2hpbGRyZW4pLCBiLnB1c2goZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICByZXR1cm4gYyhKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGEuY2hpbGRyZW4pKSksIGI7XG59XG5cbi8vIEFQUCBTVE9SQUdFXG5leHBvcnQgY29uc3QgQXBwU3RvcmFnZSA9IHtcbiAgICBkZXZpY2VJRDogJycsXG4gICAgdXNlRmFsbGJhY2s6IGZhbHNlLFxuICAgIFN0YXJ0dXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgQXBwU3RvcmFnZS5kZXZpY2VJRCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdBcHBDYWNoZUlEJyk7XG4gICAgICAgIGlmICghQXBwU3RvcmFnZS5kZXZpY2VJRCkge1xuICAgICAgICAgICAgQXBwU3RvcmFnZS5kZXZpY2VJRCA9IE1vZGVsRGF0YS5nZW5JRCgpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0FwcENhY2hlSUQnLCBBcHBTdG9yYWdlLmRldmljZUlEKTtcbiAgICAgICAgfVxuICAgIH0sXG59O1xuXG4vLyBEYXRhYmFzZVxuZXhwb3J0IGxldCBwOURhdGFiYXNlID1cbiAgICB3aW5kb3cuaW5kZXhlZERCIHx8XG4gICAgd2luZG93Lm1vekluZGV4ZWREQiB8fFxuICAgIHdpbmRvdy53ZWJraXRJbmRleGVkREIgfHxcbiAgICB3aW5kb3cubXNJbmRleGVkREIgfHxcbiAgICB3aW5kb3cuc2hpbUluZGV4ZWREQjtcblxuZnVuY3Rpb24gcDlPcGVuSURCKGRiLCB0YWJsZU5hbWUsIHZlcnNpb24pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBjb25zdCB0YWJsZSA9IGRiLm9wZW4odGFibGVOYW1lLCB2ZXJzaW9uKTtcbiAgICAgICAgLy8gdGhlc2UgYXJlIGFsbCBnbG9iYWwgYW55d2F5XG4gICAgICAgIHdpbmRvd1t0YWJsZU5hbWUgKyAncyddID0gdGFibGU7XG4gICAgICAgIHRhYmxlLm9udXBncmFkZW5lZWRlZCA9IGZ1bmN0aW9uIHVwZ3JhZGVOZWVkZWQoZSkge1xuICAgICAgICAgICAgaW5kZXhEYkRlYnVnKCdkYiB1cGdyYWRlbmVlZGVkJyk7XG4gICAgICAgICAgICBjb25zdCBkYiA9IGUudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgIGRiLmNyZWF0ZU9iamVjdFN0b3JlKHRhYmxlTmFtZSA9PT0gJ3A5VmlldycgPyAndmlldycgOiAnbW9kZWwnLCB7IGtleVBhdGg6ICdrZXknIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0YWJsZS5vbmVycm9yID0gZnVuY3Rpb24gb25FcnJvcihlKSB7XG4gICAgICAgICAgICBfQXBwQ2FjaGVfR2V0Q2FjaGVfREIgPSBfQXBwQ2FjaGVfR2V0Q2FjaGVfTFM7XG4gICAgICAgICAgICBfQXBwQ2FjaGVfU2V0Q2FjaGVfREIgPSBfQXBwQ2FjaGVfU2V0Q2FjaGVfTFM7XG4gICAgICAgICAgICBwOURhdGFiYXNlID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiByZWplY3QoJ29uZXJyb3InKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGFibGUub25zdWNjZXNzID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRhYmxlKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGFibGUuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCBmdW5jdGlvbiBjbG9zZShlKSB7XG4gICAgICAgICAgICBpbmRleERiRGVidWcoJ2RiIGNsb3NlJyk7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KCdjbG9zZScpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGFibGUuYWRkRXZlbnRMaXN0ZW5lcignYmxvY2tlZCcsIGZ1bmN0aW9uIGJsb2NrZWQoZSkge1xuICAgICAgICAgICAgaW5kZXhEYkRlYnVnKCdkYiBibG9ja2VkJyk7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KCdibG9ja2VkJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0YWJsZS5hZGRFdmVudExpc3RlbmVyKCd2ZXJzaW9uY2hhbmdlJywgZnVuY3Rpb24gdmVyc2lvbmNoYW5nZShlKSB7XG4gICAgICAgICAgICBpbmRleERiRGVidWcoJ2RiIHZlcnNpb25jaGFuZ2UnKTtcbiAgICAgICAgICAgIHJldHVybiByZWplY3QoJ3ZlcnNpb25jaGFuZ2UnKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIFA5Q2hlY2tJREIoKSB7XG4gICAgY29uc3QgaW5kZXhEQkFsbCA9XG4gICAgICAgIHdpbmRvdy5pbmRleGVkREIgfHxcbiAgICAgICAgd2luZG93Lm1vekluZGV4ZWREQiB8fFxuICAgICAgICB3aW5kb3cud2Via2l0SW5kZXhlZERCIHx8XG4gICAgICAgIHdpbmRvdy5tc0luZGV4ZWREQiB8fFxuICAgICAgICB3aW5kb3cuc2hpbUluZGV4ZWREQjtcblxuICAgIC8vIElEQkZhY3RvcnkuZGF0YWJhc2VzIGlzIG5vdCBzdXBwb3J0ZWQgaW4gRmlyZWZveCwgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0lEQkZhY3RvcnkvZGF0YWJhc2VzXG4gICAgaWYgKGluZGV4REJBbGwgJiYgdHlwZW9mIGluZGV4REJBbGwuZGF0YWJhc2VzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGluZGV4REJBbGwuZGF0YWJhc2VzKCkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgcDlPcGVuSURCKHA5RGF0YWJhc2UsICdwOVZpZXcnLCAxKTtcbiAgICAgICAgICAgIHA5T3BlbklEQihwOURhdGFiYXNlLCAncDlNb2RlbCcsIDEpO1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChQOUNoZWNrSURCSW50ZXJ2YWwpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwOU9wZW5JREIocDlEYXRhYmFzZSwgJ3A5VmlldycsIDEpO1xuICAgICAgICBwOU9wZW5JREIocDlEYXRhYmFzZSwgJ3A5TW9kZWwnLCAxKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChQOUNoZWNrSURCSW50ZXJ2YWwpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IFA5Q2hlY2tJREJJbnRlcnZhbCA9IHNldEludGVydmFsKFA5Q2hlY2tJREIsIDEwMCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleERiRGVidWcod2hlcmUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gbXlkYmcoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUYWJsZSBldmVudCB0eXBlICcgKyB3aGVyZSk7XG4gICAgICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcDlHZXQodGFibGUsIHRhYmxlTmFtZSwgc3RvcmVOYW1lLCBrZXksIG51bVJldHJpZXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdHggPSB0YWJsZS5yZXN1bHQudHJhbnNhY3Rpb24oc3RvcmVOYW1lLCAncmVhZG9ubHknKTtcbiAgICAgICAgICAgIC8vIHR4LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgaW5kZXhEYkRlYnVnKCd2aWV3IGVycm9yJykpO1xuICAgICAgICAgICAgLy8gdHguYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBpbmRleERiRGVidWcoJ3ZpZXcgYWJvcnQnKSk7XG4gICAgICAgICAgICAvLyB0eC5hZGRFdmVudExpc3RlbmVyKCdjb21wbGV0ZScsIGluZGV4RGJEZWJ1ZygndmlldyBjb21wbGV0ZScpKTtcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlID0gdHgub2JqZWN0U3RvcmUoc3RvcmVOYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBzdG9yZS5nZXQoa2V5KTtcblxuICAgICAgICAgICAgdHgub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0luZGV4ZWREQiBFcnJvciAocDlHZXQnICsgc3RvcmVOYW1lICsgJykgVHJhbnNhY3Rpb24gJyArIGUpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcXVlc3QucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVxdWVzdC5yZXN1bHQudmFsdWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoJ3t9Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIEZJWE1FOiBzdXJlIHRoaXMgc2hvdWxkIGJlIGEgcmVzb2x2ZT8gKHdhcyBvcmlnaW5hbGx5IGxpa2UgdGhpcylcbiAgICAgICAgICAgICAgICByZXNvbHZlKCd7fScpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgaWYgKCFudW1SZXRyaWVzIHx8IG51bVJldHJpZXMgPCAxKSB7XG4gICAgICAgICAgICAgICAgbnVtUmV0cmllcyA9IDE7XG4gICAgICAgICAgICAgICAgcDlPcGVuSURCKHA5RGF0YWJhc2UsIHRhYmxlTmFtZSwgMSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlbG9hZGVkRGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJbmRleGVkREIgRXJyb3I6IFJlbG9hZGVkIERCJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShwOUdldChyZWxvYWRlZERiLCB0YWJsZU5hbWUsIHN0b3JlTmFtZSwga2V5LCBudW1SZXRyaWVzKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdCgnSW5kZXhlZERCIEVycm9yOiBVbmFibGUgdG8gZ2V0IHRoZSB2aWV3Jyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbmRleGVkREIgRXJyb3I6IENvdWxkIG5vdCBmZXRjaCBkYXRhJywgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHA5U2F2ZSh0YWJsZSwgdGFibGVOYW1lLCBzdG9yZU5hbWUsIGtleSwgZGF0YSwgbnVtUmV0cmllcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB0eCA9IHRhYmxlLnJlc3VsdC50cmFuc2FjdGlvbihzdG9yZU5hbWUsICdyZWFkd3JpdGUnKTtcbiAgICAgICAgICAgIC8vIHR4LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgaW5kZXhEYkRlYnVnKCdzYXZlIGVycm9yJykpO1xuICAgICAgICAgICAgLy8gdHguYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBpbmRleERiRGVidWcoJ3NhdmUgYWJvcnQnKSk7XG4gICAgICAgICAgICAvLyB0eC5hZGRFdmVudExpc3RlbmVyKCdjb21wbGV0ZScsIGluZGV4RGJEZWJ1Zygnc2F2ZSBjb21wbGV0ZScpKTtcblxuICAgICAgICAgICAgY29uc3Qgc3RvcmUgPSB0eC5vYmplY3RTdG9yZShzdG9yZU5hbWUpO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IHN0b3JlLnB1dCh7IGtleToga2V5LCB2YWx1ZTogZGF0YSB9KTtcblxuICAgICAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAnSW5kZXhlZERCIEVycm9yIChwOVNhdmUgJyArIHN0b3JlTmFtZSArICcpIEtleSAnICsga2V5ICsgcmVxdWVzdC5lcnJvcixcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIC8vIEZJWE1FOiB0aGlzIG1pZ2h0IGJlIG90aGVyIHRoaW5ncyBsaWtlIGEgdHJhbnNhY3Rpb24gYWJvcnRcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBpZiAoIW51bVJldHJpZXMgfHwgbnVtUmV0cmllcyA8IDEpIHtcbiAgICAgICAgICAgICAgICBudW1SZXRyaWVzID0gMTtcbiAgICAgICAgICAgICAgICBwOU9wZW5JREIocDlEYXRhYmFzZSwgdGFibGVOYW1lLCAxKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVsb2FkZWREYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0luZGV4ZWREQiBFcnJvcjogUmVsb2FkZWQgREInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHA5U2F2ZShyZWxvYWRlZERiLCB0YWJsZU5hbWUsIHN0b3JlTmFtZSwga2V5LCBkYXRhLCBudW1SZXRyaWVzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignSW5kZXhlZERCIEVycm9yOiBVbmFibGUgdG8gc2F2ZSB0aGUgdmlldycsIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdCgnVW5hYmxlIHRvIHNhdmUgdGhlIHZpZXcnKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHA5U2F2ZU1vZGVsMihrZXksIGRhdGEpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBkYiA9IHA5TW9kZWxzLnJlc3VsdDtcbiAgICAgICAgY29uc3QgdHggPSBkYi50cmFuc2FjdGlvbignbW9kZWwnLCAncmVhZHdyaXRlJyk7XG5cbiAgICAgICAgY29uc3Qgc3RvcmUgPSB0eC5vYmplY3RTdG9yZSgnbW9kZWwnKTtcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IHN0b3JlLnB1dCh7IGtleToga2V5LCB2YWx1ZTogZGF0YSB9KTtcblxuICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignSW5kZXhlZERCIEVycm9yIChwOVNhdmVNb2RlbCkgS2V5ICcgKyBrZXkgKyByZXF1ZXN0LmVycm9yKTtcbiAgICAgICAgfTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcDlTYXZlTW9kZWwoa2V5LCBkYXRhKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICByZXR1cm4gcDlTYXZlKHA5TW9kZWxzLCAncDlNb2RlbCcsICdtb2RlbCcsIGtleSwgZGF0YSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwOUdldE1vZGVsKGtleSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuIHA5R2V0KHA5TW9kZWxzLCAncDlNb2RlbCcsICdtb2RlbCcsIGtleSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwOVNhdmVWaWV3KGtleSwgZGF0YSwgbnVtUmV0cmllcykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuIHA5U2F2ZShwOVZpZXdzLCAncDlWaWV3JywgJ3ZpZXcnLCBrZXksIGRhdGEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcDlHZXRWaWV3KGtleSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuIHA5R2V0KHA5Vmlld3MsICdwOVZpZXcnLCAndmlldycsIGtleSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfQXBwQ2FjaGVfR2V0Q2FjaGUoaWQsIG1vZGVsLCB0eXBlLCBvbmxpbmUsIGV2ZW50LCBqc29uaCwgZW5jcnlwdGlvbikge1xuICAgIGlmICh0eXBlID09PSAnREInICYmICFBcHBTdG9yYWdlLnVzZUZhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBfQXBwQ2FjaGVfR2V0Q2FjaGVfREIoaWQsIG1vZGVsLCBvbmxpbmUsIGV2ZW50LCBlbmNyeXB0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gX0FwcENhY2hlX0dldENhY2hlX0xTKGlkLCBtb2RlbCwgb25saW5lLCBldmVudCwgZW5jcnlwdGlvbik7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX0FwcENhY2hlX1NldENhY2hlKGlkLCBtb2RlbCwgdHlwZSwgZGF0YSwganNvbmgsIGVuY3J5cHRpb24pIHtcbiAgICBpZiAodHlwZSA9PSAnREInICYmICFBcHBTdG9yYWdlLnVzZUZhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBfQXBwQ2FjaGVfU2V0Q2FjaGVfREIoaWQsIG1vZGVsLCBkYXRhLCBlbmNyeXB0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gX0FwcENhY2hlX1NldENhY2hlX0xTKGlkLCBtb2RlbCwgZGF0YSwgZW5jcnlwdGlvbik7XG4gICAgfVxufVxuXG4vLyBMb2NhbCBTdG9yYWdlXG5leHBvcnQgZnVuY3Rpb24gX0FwcENhY2hlX0dldENhY2hlX0xTKGlkLCBtb2RlbCwgb25saW5lLCBldmVudCwgZW5jcnlwdGlvbikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAkLnNhcC5yZXF1aXJlKCdqcXVlcnkuc2FwLnN0b3JhZ2UnKTtcbiAgICAgICAgICAgIGNvbnN0IGxTdG9yYWdlID0gJC5zYXAuc3RvcmFnZShqUXVlcnkuc2FwLnN0b3JhZ2UuVHlwZS5sb2NhbCk7XG4gICAgICAgICAgICBsZXQgbW9kZWxKU09OID0gbFN0b3JhZ2UuZ2V0KGlkKTtcblxuICAgICAgICAgICAgaWYgKG9ubGluZSAmJiAhbW9kZWxKU09OKSAoMCwgZXZhbCkob25saW5lKSgpO1xuXG4gICAgICAgICAgICBpZiAoIW1vZGVsSlNPTikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKDAsIGV2YWwpKGV2ZW50KSA9PT0gJ2Z1bmN0aW9uJykgKDAsIGV2YWwpKGV2ZW50KSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIERlY3J5cHRpb25cbiAgICAgICAgICAgIGlmIChlbmNyeXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1vZGVsSlNPTi5pbmRleE9mKCdbJykgIT09IDAgJiYgbW9kZWxKU09OLmluZGV4T2YoJ3snKSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWNyeXB0ZWQgPSBDcnlwdG9KUy5BRVMuZGVjcnlwdChtb2RlbEpTT04sIEFwcFN0b3JhZ2UuZGV2aWNlSUQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVjcnlwdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbEpTT04gPSBkZWNyeXB0ZWQudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWxKU09OID0gW107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbW9kZWxKU09OID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobW9kZWxKU09OLmluZGV4T2YoJ1snKSAhPT0gMCAmJiBtb2RlbEpTT04uaW5kZXhPZigneycpICE9PSAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEdldCBEYXRhXG4gICAgICAgICAgICBsZXQgbW9kZWxEYXRhO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBtb2RlbEpTT04gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbW9kZWxEYXRhID0gSlNPTi5wYXJzZShtb2RlbEpTT04pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLypJZ25vcmUqL1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbW9kZWxEYXRhID0gbW9kZWxKU09OO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTZXQgTW9kZWwgRGF0YVxuICAgICAgICAgICAgbW9kZWwuc2V0RGF0YShtb2RlbERhdGEpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mICgwLCBldmFsKShldmVudCkgPT09ICdmdW5jdGlvbicpICgwLCBldmFsKShldmVudCkoKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiAoMCwgZXZhbCkoZXZlbnQpID09PSAnZnVuY3Rpb24nKSAoMCwgZXZhbCkoZXZlbnQpKCk7XG4gICAgICAgICAgICBtb2RlbC5zZXREYXRhKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX0FwcENhY2hlX1NldENhY2hlX0xTKGlkLCBtb2RlbCwgZGF0YSwgZW5jcnlwdGlvbikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAkLnNhcC5yZXF1aXJlKCdqcXVlcnkuc2FwLnN0b3JhZ2UnKTtcbiAgICAgICAgICAgIGNvbnN0IGxTdG9yYWdlID0gJC5zYXAuc3RvcmFnZShqUXVlcnkuc2FwLnN0b3JhZ2UuVHlwZS5sb2NhbCk7XG5cbiAgICAgICAgICAgIC8vIEdldCBEYXRhXG4gICAgICAgICAgICBsZXQgbW9kZWxEYXRhO1xuICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBtb2RlbERhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbW9kZWxEYXRhID0gbW9kZWwuZ2V0SlNPTigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBFbmNyeXB0aW9uXG4gICAgICAgICAgICBpZiAoZW5jcnlwdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVuY3J5cHRlZCA9IENyeXB0b0pTLkFFUy5lbmNyeXB0KG1vZGVsRGF0YSwgQXBwU3RvcmFnZS5kZXZpY2VJRCk7XG4gICAgICAgICAgICAgICAgbW9kZWxEYXRhID0gZW5jcnlwdGVkLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNhdmUgdG8gTG9jYWxTdG9yYWdlXG4gICAgICAgICAgICBsU3RvcmFnZS5yZW1vdmUoaWQpO1xuICAgICAgICAgICAgbFN0b3JhZ2UucHV0KGlkLCBtb2RlbERhdGEpO1xuXG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgbGV0IF9BcHBDYWNoZV9HZXRDYWNoZV9EQiA9IGZ1bmN0aW9uIChpZCwgbW9kZWwsIG9ubGluZSwgZXZlbnQsIGVuY3J5cHRpb24pIHtcbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgdHJpZXMgPSAwO1xuICAgICAgICBmdW5jdGlvbiBjaGVjaygpIHtcbiAgICAgICAgICAgIGlmIChwOU1vZGVscyAmJiBwOU1vZGVscy5yZWFkeVN0YXRlID09PSAnZG9uZScpIHtcbiAgICAgICAgICAgICAgICBwOUdldE1vZGVsKGlkKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbW9kZWxEYXRhID0gdmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRGVjcnlwdGlvblxuICAgICAgICAgICAgICAgICAgICBpZiAoZW5jcnlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGVsRGF0YS5pbmRleE9mKCdbJykgIT09IDAgJiYgbW9kZWxEYXRhLmluZGV4T2YoJ3snKSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVjcnlwdGVkID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQobW9kZWxEYXRhLCBBcHBTdG9yYWdlLmRldmljZUlEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVjcnlwdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsRGF0YSA9IGRlY3J5cHRlZC50b1N0cmluZyhDcnlwdG9KUy5lbmMuVXRmOCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWxEYXRhID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtb2RlbERhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbERhdGEgPSBKU09OLnBhcnNlKG1vZGVsRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBTZXQgTW9kZWwgRGF0YVxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zZXREYXRhKG1vZGVsRGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoMCwgZXZhbCkoZXZlbnQpID09PSAnZnVuY3Rpb24nKSAoMCwgZXZhbCkoZXZlbnQpKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbmxpbmUgJiYgIW1vZGVsLm9EYXRhLmxlbmd0aCkgKDAsIGV2YWwpKG9ubGluZSkoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdHJpZXMrKztcbiAgICAgICAgICAgICAgICBpZiAodHJpZXMgPCAxMDApIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChjaGVjaywgNTApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAnSW5kZXhlZERCIGNvdWxkIG5vdCBvcGVuIGRhdGFiYXNlOiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJywgU3RhdGU6ICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHA5TW9kZWxzLnJlYWR5U3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHNhcC51aS5jb3JlLkJ1c3lJbmRpY2F0b3IuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjaGVjaygpO1xuICAgIH0pKCk7XG59O1xuXG5leHBvcnQgbGV0IF9BcHBDYWNoZV9TZXRDYWNoZV9EQiA9IGZ1bmN0aW9uIChpZCwgbW9kZWwsIGRhdGEsIGVuY3J5cHRpb24pIHtcbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgZGF0YSA9IG1vZGVsLm9EYXRhO1xuICAgIH1cblxuICAgIC8vIEVuY3J5cHRpb25cbiAgICBpZiAoZW5jcnlwdGlvbikge1xuICAgICAgICBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICAgIGNvbnN0IGVuY3J5cHRlZCA9IENyeXB0b0pTLkFFUy5lbmNyeXB0KGRhdGEsIEFwcFN0b3JhZ2UuZGV2aWNlSUQpO1xuICAgICAgICBkYXRhID0gZW5jcnlwdGVkLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgLy8gU2F2ZSB0byBEYXRhYmFzZVxuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCB0cmllcyA9IDA7XG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrKCkge1xuICAgICAgICAgICAgaWYgKHA5TW9kZWxzICYmIHA5TW9kZWxzLnJlYWR5U3RhdGUgPT09ICdkb25lJykge1xuICAgICAgICAgICAgICAgIHA5U2F2ZU1vZGVsKGlkLCBkYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdHJpZXMrKztcbiAgICAgICAgICAgICAgICBpZiAodHJpZXMgPCAxMDApIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChjaGVjaywgNTApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAnSW5kZXhlZERCIGNvdWxkIG5vdCBzYXZlIGRhdGFiYXNlOiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJywgU3RhdGU6ICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHA5TW9kZWxzLnJlYWR5U3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHNhcC51aS5jb3JlLkJ1c3lJbmRpY2F0b3IuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjaGVjaygpO1xuICAgIH0pKCk7XG59O1xuXG5BcHBTdG9yYWdlLlN0YXJ0dXAoKTtcblxuZXhwb3J0IGxldCBCYXNlNjQ7XG5leHBvcnQgbGV0IGRlZmluZTtcbi8vIEJhc2UgNjRcbihmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIGNvbnN0IF9CYXNlNjQgPSBnbG9iYWwuQmFzZTY0O1xuICAgIGNvbnN0IHZlcnNpb24gPSAnMi4zLjInO1xuICAgIGxldCBidWZmZXI7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvKiBJZ25vcmUgKi9cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAvKiBJZ25vcmUgKi9cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBiNjRjaGFycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJztcbiAgICBjb25zdCBiNjR0YWIgPSAoZnVuY3Rpb24gKGJpbikge1xuICAgICAgICBjb25zdCB0ID0ge307XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gYmluLmxlbmd0aDsgaSA8IGw7IGkrKykgdFtiaW4uY2hhckF0KGkpXSA9IGk7XG4gICAgICAgIHJldHVybiB0O1xuICAgIH0pKGI2NGNoYXJzKTtcbiAgICBjb25zdCBmcm9tQ2hhckNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlO1xuICAgIGNvbnN0IGNiX3V0b2IgPSBmdW5jdGlvbiAoYykge1xuICAgICAgICBpZiAoYy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICBjb25zdCBjYyA9IGMuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgICAgIHJldHVybiBjYyA8IDEyOFxuICAgICAgICAgICAgICAgID8gY1xuICAgICAgICAgICAgICAgIDogY2MgPCAyMDQ4XG4gICAgICAgICAgICAgICAgPyBmcm9tQ2hhckNvZGUoMTkyIHwgKGNjID4+PiA2KSkgKyBmcm9tQ2hhckNvZGUoMTI4IHwgKGNjICYgNjMpKVxuICAgICAgICAgICAgICAgIDogZnJvbUNoYXJDb2RlKDIyNCB8ICgoY2MgPj4+IDEyKSAmIDE1KSkgK1xuICAgICAgICAgICAgICAgICAgZnJvbUNoYXJDb2RlKDEyOCB8ICgoY2MgPj4+IDYpICYgNjMpKSArXG4gICAgICAgICAgICAgICAgICBmcm9tQ2hhckNvZGUoMTI4IHwgKGNjICYgNjMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNjID0gNjU1MzYgKyAoYy5jaGFyQ29kZUF0KDApIC0gNTUyOTYpICogMTAyNCArIChjLmNoYXJDb2RlQXQoMSkgLSA1NjMyMCk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIGZyb21DaGFyQ29kZSgyNDAgfCAoKGNjID4+PiAxOCkgJiA3KSkgK1xuICAgICAgICAgICAgICAgIGZyb21DaGFyQ29kZSgxMjggfCAoKGNjID4+PiAxMikgJiA2MykpICtcbiAgICAgICAgICAgICAgICBmcm9tQ2hhckNvZGUoMTI4IHwgKChjYyA+Pj4gNikgJiA2MykpICtcbiAgICAgICAgICAgICAgICBmcm9tQ2hhckNvZGUoMTI4IHwgKGNjICYgNjMpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRyb2wtcmVnZXhcbiAgICBjb25zdCByZV91dG9iID0gL1tcXHVEODAwLVxcdURCRkZdW1xcdURDMDAtXFx1REZGRkZdfFteXFx4MDAtXFx4N0ZdL2c7XG4gICAgY29uc3QgdXRvYiA9IGZ1bmN0aW9uICh1KSB7XG4gICAgICAgIHJldHVybiB1LnJlcGxhY2UocmVfdXRvYiwgY2JfdXRvYik7XG4gICAgfTtcbiAgICBjb25zdCBjYl9lbmNvZGUgPSBmdW5jdGlvbiAoY2NjKSB7XG4gICAgICAgIGNvbnN0IHBhZGxlbiA9IFswLCAyLCAxXVtjY2MubGVuZ3RoICUgM10sXG4gICAgICAgICAgICBvcmQgPVxuICAgICAgICAgICAgICAgIChjY2MuY2hhckNvZGVBdCgwKSA8PCAxNikgfFxuICAgICAgICAgICAgICAgICgoY2NjLmxlbmd0aCA+IDEgPyBjY2MuY2hhckNvZGVBdCgxKSA6IDApIDw8IDgpIHxcbiAgICAgICAgICAgICAgICAoY2NjLmxlbmd0aCA+IDIgPyBjY2MuY2hhckNvZGVBdCgyKSA6IDApLFxuICAgICAgICAgICAgY2hhcnMgPSBbXG4gICAgICAgICAgICAgICAgYjY0Y2hhcnMuY2hhckF0KG9yZCA+Pj4gMTgpLFxuICAgICAgICAgICAgICAgIGI2NGNoYXJzLmNoYXJBdCgob3JkID4+PiAxMikgJiA2MyksXG4gICAgICAgICAgICAgICAgcGFkbGVuID49IDIgPyAnPScgOiBiNjRjaGFycy5jaGFyQXQoKG9yZCA+Pj4gNikgJiA2MyksXG4gICAgICAgICAgICAgICAgcGFkbGVuID49IDEgPyAnPScgOiBiNjRjaGFycy5jaGFyQXQob3JkICYgNjMpLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIGNoYXJzLmpvaW4oJycpO1xuICAgIH07XG4gICAgY29uc3QgYnRvYSA9IGdsb2JhbC5idG9hXG4gICAgICAgID8gZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGdsb2JhbC5idG9hKGIpO1xuICAgICAgICAgIH1cbiAgICAgICAgOiBmdW5jdGlvbiAoYikge1xuICAgICAgICAgICAgICByZXR1cm4gYi5yZXBsYWNlKC9bXFxzXFxTXXsxLDN9L2csIGNiX2VuY29kZSk7XG4gICAgICAgICAgfTtcbiAgICBjb25zdCBfZW5jb2RlID0gYnVmZmVyXG4gICAgICAgID8gYnVmZmVyLmZyb20gJiYgYnVmZmVyLmZyb20gIT09IFVpbnQ4QXJyYXkuZnJvbVxuICAgICAgICAgICAgPyBmdW5jdGlvbiAodSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuICh1LmNvbnN0cnVjdG9yID09PSBidWZmZXIuY29uc3RydWN0b3IgPyB1IDogYnVmZmVyLmZyb20odSkpLnRvU3RyaW5nKFxuICAgICAgICAgICAgICAgICAgICAgICdiYXNlNjQnLFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBmdW5jdGlvbiAodSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuICh1LmNvbnN0cnVjdG9yID09PSBidWZmZXIuY29uc3RydWN0b3IgPyB1IDogbmV3IGJ1ZmZlcih1KSkudG9TdHJpbmcoXG4gICAgICAgICAgICAgICAgICAgICAgJ2Jhc2U2NCcsXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgIDogZnVuY3Rpb24gKHUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGJ0b2EodXRvYih1KSk7XG4gICAgICAgICAgfTtcbiAgICBjb25zdCBlbmNvZGUgPSBmdW5jdGlvbiAodSwgdXJpc2FmZSkge1xuICAgICAgICByZXR1cm4gIXVyaXNhZmVcbiAgICAgICAgICAgID8gX2VuY29kZShTdHJpbmcodSkpXG4gICAgICAgICAgICA6IF9lbmNvZGUoU3RyaW5nKHUpKVxuICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1srL10vZywgZnVuY3Rpb24gKG0wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG0wID09ICcrJyA/ICctJyA6ICdfJztcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAucmVwbGFjZSgvPS9nLCAnJyk7XG4gICAgfTtcbiAgICBjb25zdCBlbmNvZGVVUkkgPSBmdW5jdGlvbiAodSkge1xuICAgICAgICByZXR1cm4gZW5jb2RlKHUsIHRydWUpO1xuICAgIH07XG4gICAgY29uc3QgcmVfYnRvdSA9IG5ldyBSZWdFeHAoWydbXHUwMEMwLVx1MDBERl1bXHUwMDgwLVx1MDBCRl0nLCAnW1x1MDBFMC1cdTAwRUZdW1x1MDA4MC1cdTAwQkZdezJ9JywgJ1tcdTAwRjAtXHUwMEY3XVtcdTAwODAtXHUwMEJGXXszfSddLmpvaW4oJ3wnKSwgJ2cnKTtcbiAgICBjb25zdCBjYl9idG91ID0gZnVuY3Rpb24gKGNjY2MpIHtcbiAgICAgICAgc3dpdGNoIChjY2NjLmxlbmd0aCkge1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jYXNlLWRlY2xhcmF0aW9uc1xuICAgICAgICAgICAgICAgIGNvbnN0IGNwID1cbiAgICAgICAgICAgICAgICAgICAgICAgICgoNyAmIGNjY2MuY2hhckNvZGVBdCgwKSkgPDwgMTgpIHxcbiAgICAgICAgICAgICAgICAgICAgICAgICgoNjMgJiBjY2NjLmNoYXJDb2RlQXQoMSkpIDw8IDEyKSB8XG4gICAgICAgICAgICAgICAgICAgICAgICAoKDYzICYgY2NjYy5jaGFyQ29kZUF0KDIpKSA8PCA2KSB8XG4gICAgICAgICAgICAgICAgICAgICAgICAoNjMgJiBjY2NjLmNoYXJDb2RlQXQoMykpLFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBjcCAtIDY1NTM2O1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIGZyb21DaGFyQ29kZSgob2Zmc2V0ID4+PiAxMCkgKyA1NTI5NikgKyBmcm9tQ2hhckNvZGUoKG9mZnNldCAmIDEwMjMpICsgNTYzMjApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gZnJvbUNoYXJDb2RlKFxuICAgICAgICAgICAgICAgICAgICAoKDE1ICYgY2NjYy5jaGFyQ29kZUF0KDApKSA8PCAxMikgfFxuICAgICAgICAgICAgICAgICAgICAgICAgKCg2MyAmIGNjY2MuY2hhckNvZGVBdCgxKSkgPDwgNikgfFxuICAgICAgICAgICAgICAgICAgICAgICAgKDYzICYgY2NjYy5jaGFyQ29kZUF0KDIpKSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gZnJvbUNoYXJDb2RlKCgoMzEgJiBjY2NjLmNoYXJDb2RlQXQoMCkpIDw8IDYpIHwgKDYzICYgY2NjYy5jaGFyQ29kZUF0KDEpKSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGJ0b3UgPSBmdW5jdGlvbiAoYikge1xuICAgICAgICByZXR1cm4gYi5yZXBsYWNlKHJlX2J0b3UsIGNiX2J0b3UpO1xuICAgIH07XG4gICAgY29uc3QgY2JfZGVjb2RlID0gZnVuY3Rpb24gKGNjY2MpIHtcbiAgICAgICAgY29uc3QgbGVuID0gY2NjYy5sZW5ndGgsXG4gICAgICAgICAgICBwYWRsZW4gPSBsZW4gJSA0LFxuICAgICAgICAgICAgbiA9XG4gICAgICAgICAgICAgICAgKGxlbiA+IDAgPyBiNjR0YWJbY2NjYy5jaGFyQXQoMCldIDw8IDE4IDogMCkgfFxuICAgICAgICAgICAgICAgIChsZW4gPiAxID8gYjY0dGFiW2NjY2MuY2hhckF0KDEpXSA8PCAxMiA6IDApIHxcbiAgICAgICAgICAgICAgICAobGVuID4gMiA/IGI2NHRhYltjY2NjLmNoYXJBdCgyKV0gPDwgNiA6IDApIHxcbiAgICAgICAgICAgICAgICAobGVuID4gMyA/IGI2NHRhYltjY2NjLmNoYXJBdCgzKV0gOiAwKSxcbiAgICAgICAgICAgIGNoYXJzID0gW2Zyb21DaGFyQ29kZShuID4+PiAxNiksIGZyb21DaGFyQ29kZSgobiA+Pj4gOCkgJiAyNTUpLCBmcm9tQ2hhckNvZGUobiAmIDI1NSldO1xuICAgICAgICBjaGFycy5sZW5ndGggLT0gWzAsIDAsIDIsIDFdW3BhZGxlbl07XG4gICAgICAgIHJldHVybiBjaGFycy5qb2luKCcnKTtcbiAgICB9O1xuICAgIGNvbnN0IGF0b2IgPSBnbG9iYWwuYXRvYlxuICAgICAgICA/IGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICAgIHJldHVybiBnbG9iYWwuYXRvYihhKTtcbiAgICAgICAgICB9XG4gICAgICAgIDogZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGEucmVwbGFjZSgvW1xcc1xcU117MSw0fS9nLCBjYl9kZWNvZGUpO1xuICAgICAgICAgIH07XG4gICAgY29uc3QgX2RlY29kZSA9IGJ1ZmZlclxuICAgICAgICA/IGJ1ZmZlci5mcm9tICYmIGJ1ZmZlci5mcm9tICE9PSBVaW50OEFycmF5LmZyb21cbiAgICAgICAgICAgID8gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgYS5jb25zdHJ1Y3RvciA9PT0gYnVmZmVyLmNvbnN0cnVjdG9yID8gYSA6IGJ1ZmZlci5mcm9tKGEsICdiYXNlNjQnKVxuICAgICAgICAgICAgICAgICAgKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA6IGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIGEuY29uc3RydWN0b3IgPT09IGJ1ZmZlci5jb25zdHJ1Y3RvciA/IGEgOiBuZXcgYnVmZmVyKGEsICdiYXNlNjQnKVxuICAgICAgICAgICAgICAgICAgKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgIDogZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGJ0b3UoYXRvYihhKSk7XG4gICAgICAgICAgfTtcbiAgICBjb25zdCBkZWNvZGUgPSBmdW5jdGlvbiAoYSkge1xuICAgICAgICByZXR1cm4gX2RlY29kZShcbiAgICAgICAgICAgIFN0cmluZyhhKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9bLV9dL2csIGZ1bmN0aW9uIChtMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbTAgPT0gJy0nID8gJysnIDogJy8nO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1teQS1aYS16MC05Ky9dL2csICcnKSxcbiAgICAgICAgKTtcbiAgICB9O1xuICAgIGNvbnN0IG5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IEJhc2U2NCA9IGdsb2JhbC5CYXNlNjQ7XG4gICAgICAgIGdsb2JhbC5CYXNlNjQgPSBfQmFzZTY0O1xuICAgICAgICByZXR1cm4gQmFzZTY0O1xuICAgIH07XG4gICAgZ2xvYmFsLkJhc2U2NCA9IHtcbiAgICAgICAgVkVSU0lPTjogdmVyc2lvbixcbiAgICAgICAgYXRvYjogYXRvYixcbiAgICAgICAgYnRvYTogYnRvYSxcbiAgICAgICAgZnJvbUJhc2U2NDogZGVjb2RlLFxuICAgICAgICB0b0Jhc2U2NDogZW5jb2RlLFxuICAgICAgICB1dG9iOiB1dG9iLFxuICAgICAgICBlbmNvZGU6IGVuY29kZSxcbiAgICAgICAgZW5jb2RlVVJJOiBlbmNvZGVVUkksXG4gICAgICAgIGJ0b3U6IGJ0b3UsXG4gICAgICAgIGRlY29kZTogZGVjb2RlLFxuICAgICAgICBub0NvbmZsaWN0OiBub0NvbmZsaWN0LFxuICAgIH07XG4gICAgaWYgKHR5cGVvZiBPYmplY3QuZGVmaW5lUHJvcGVydHkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29uc3Qgbm9FbnVtID0gZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHYsXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgZ2xvYmFsLkJhc2U2NC5leHRlbmRTdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICAgICAgICAgICAgU3RyaW5nLnByb3RvdHlwZSxcbiAgICAgICAgICAgICAgICAnZnJvbUJhc2U2NCcsXG4gICAgICAgICAgICAgICAgbm9FbnVtKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh0aGlzKTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICAgICAgICAgICAgU3RyaW5nLnByb3RvdHlwZSxcbiAgICAgICAgICAgICAgICAndG9CYXNlNjQnLFxuICAgICAgICAgICAgICAgIG5vRW51bShmdW5jdGlvbiAodXJpc2FmZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW5jb2RlKHRoaXMsIHVyaXNhZmUpO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgICAgICAgICBTdHJpbmcucHJvdG90eXBlLFxuICAgICAgICAgICAgICAgICd0b0Jhc2U2NFVSSScsXG4gICAgICAgICAgICAgICAgbm9FbnVtKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVuY29kZSh0aGlzLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmIChnbG9iYWxbJ01ldGVvciddKSB7XG4gICAgICAgIEJhc2U2NCA9IGdsb2JhbC5CYXNlNjQ7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICAvKiBJZ25vcmUgKi9cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoW10sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBnbG9iYWwuQmFzZTY0O1xuICAgICAgICB9KTtcbiAgICB9XG59KShcbiAgICB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyBzZWxmXG4gICAgICAgIDogdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgPyB3aW5kb3dcbiAgICAgICAgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICA/IGdsb2JhbFxuICAgICAgICA6IHRoaXMsXG4pO1xuXG5leHBvcnQgY29uc3QgQXBwU3luYyA9IHtcbiAgICBzcWxTcGxpdDogMTUwLFxuICAgIHRhYmxlRmllbGRzOiB7fSxcbiAgICBkYXRhUXVldWU6IFtdLFxuICAgIHByb2Nlc3Npbmc6IGZhbHNlLFxuICAgIGVuYWJsZUxvZzogZmFsc2UsXG5cbiAgICBpbml0VGFibGU6IGZ1bmN0aW9uICh0YWJsZU5hbWUsIHRhYmxlRmllbGRzKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdGhpcy1hbGlhc1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAvLyBPcGVuIERhdGFiYXNlXG4gICAgICAgIHRoaXMub3BlbkRCKCk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIFRhYmxlXG4gICAgICAgIGxldCBzcWwgPSAnQ1JFQVRFIFRBQkxFIElGIE5PVCBFWElTVFMgJyArIHRhYmxlTmFtZSArICcgKCc7XG4gICAgICAgIGxldCBzZXAgPSAnJztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYmxlRmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHNxbCArPSB0YWJsZUZpZWxkc1tpXSArICcgVkFSQ0hBUiBQUklNQVJZIEtFWSc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNxbCArPSBzZXAgKyB0YWJsZUZpZWxkc1tpXSArICcgVkFSQ0hBUic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXAgPSAnLCc7XG4gICAgICAgIH1cbiAgICAgICAgc3FsICs9ICcpJztcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2VsZi5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5leGVjdXRlU3FsKHNxbCwgW10pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjogVW5hYmxlIHRvIGNyZWF0ZSB0YWJsZSAnICsgZSArICcuJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdG9yZSBUYWJsZSBGaWVsZHNcbiAgICAgICAgQXBwU3luYy50YWJsZUZpZWxkc1t0YWJsZU5hbWVdID0gdGFibGVGaWVsZHM7XG5cbiAgICAgICAgLy8gQ2hlY2sgVGFibGUgRmllbGRzIGFuZCBBbHRlclxuICAgICAgICBzZWxmLmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0eCkge1xuICAgICAgICAgICAgdHguZXhlY3V0ZVNxbChcbiAgICAgICAgICAgICAgICAnU0VMRUNUIG5hbWUsIHNxbCBGUk9NIHNxbGl0ZV9tYXN0ZXIgV0hFUkUgdHlwZT1cInRhYmxlXCIgQU5EIG5hbWUgPSA/JyxcbiAgICAgICAgICAgICAgICBbdGFibGVOYW1lXSxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAodHgsIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sUGFydHMgPSByZXN1bHRzLnJvd3NcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pdGVtKDApXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3FsLnJlcGxhY2UoL15bXihdK1xcKChbXildKylcXCkvZywgJyQxJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xOYW1lcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4gY29sUGFydHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29sUGFydHNbaV0gPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbE5hbWVzLnB1c2goY29sUGFydHNbaV0udHJpbSgpLnNwbGl0KCcgJylbMF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICQuZWFjaChBcHBTeW5jLnRhYmxlRmllbGRzW3RhYmxlTmFtZV0sIGZ1bmN0aW9uIChpLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sTmFtZXMuaW5kZXhPZihkYXRhKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbHRlclRhYmxlID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0FMVEVSIFRBQkxFICcgKyB0YWJsZU5hbWUgKyAnIEFERCAnICsgZGF0YSArICcgVkFSQ0hBUjsnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5leGVjdXRlU3FsKGFsdGVyVGFibGUsIFtdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUYWJsZTogJyArIHRhYmxlTmFtZSArICcsIGFkZGVkIGZpZWxkOiAnICsgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiBVbmFibGUgdG8gYWx0ZXIgdGFibGUgJyArIGUgKyAnLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBvcGVuREI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgLy8gT3BlbiBEYXRhYmFzZVxuICAgICAgICBpZiAodHlwZW9mIHNlbGYuZGIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LnNxbGl0ZVBsdWdpbikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGIgPSB3aW5kb3cuc3FsaXRlUGx1Z2luLm9wZW5EYXRhYmFzZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAncDlEYXRhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiAyLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiBVbmFibGUgdG8gb3BlbiBkYXRhYmFzZSAnICsgZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5vcGVuRGF0YWJhc2UpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmRiID0gd2luZG93Lm9wZW5EYXRhYmFzZSgncDlEYXRhJywgJzEuMCcsICdwOURhdGEnLCA2MCAqIDEwMjQgKiAxMDI0KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiBVbmFibGUgdG8gb3BlbiBkYXRhYmFzZSAnICsgZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiBZb3VyIGJyb3dzZXIgZG8gbm90IHN1cHBvcnQgV2ViU1FMJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbG9nOiBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICBpZiAoQXBwU3luYy5lbmFibGVMb2cpIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgIH0sXG5cbiAgICBlcnJvcjogZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9LFxuXG4gICAgdXBkYXRlREI6IGZ1bmN0aW9uICh0YWJsZURhdGEsIHRhYmxlTmFtZSwgY2FsbEJhY2spIHtcbiAgICAgICAgdGhpcy5kYXRhUXVldWUucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiB0YWJsZU5hbWUsXG4gICAgICAgICAgICBkYXRhOiB0YWJsZURhdGEsXG4gICAgICAgICAgICBjYWxsYmFjazogY2FsbEJhY2ssXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLnByb2Nlc3NpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3NlcVVwZGF0ZSgpO1xuICAgIH0sXG5cbiAgICBfc2VxVXBkYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5kYXRhUXVldWUubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlO1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhUXVldWUuc2hpZnQoKTtcbiAgICAgICAgY29uc3QgdGFibGVOYW1lID0gZGF0YS5uYW1lO1xuICAgICAgICBjb25zdCB0YWJsZURhdGEgPSBkYXRhLmRhdGE7XG4gICAgICAgIGNvbnN0IGNhbGxCYWNrID0gZGF0YS5jYWxsYmFjaztcbiAgICAgICAgY29uc3QgdGFibGVGaWVsZHMgPSBBcHBTeW5jLnRhYmxlRmllbGRzW3RhYmxlTmFtZV07XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdTdGFydGluZyBhbiBpbnNlcnQuIEluIHF1ZXVlOiAnICsgdGhpcy5kYXRhUXVldWUubGVuZ3RoKTtcblxuICAgICAgICBzZWxmLmRiLnRyYW5zYWN0aW9uKFxuICAgICAgICAgICAgZnVuY3Rpb24gKHR4KSB7XG4gICAgICAgICAgICAgICAgbGV0IHNxbFN0YXJ0ID0gJ0lOU0VSVCBPUiBSRVBMQUNFIElOVE8gJyArIHRhYmxlTmFtZSArICcgKCc7XG4gICAgICAgICAgICAgICAgbGV0IHNlcCA9ICcnO1xuICAgICAgICAgICAgICAgIGxldCBzcWwgPSAnJztcbiAgICAgICAgICAgICAgICBsZXQgZG9MYXN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJSZWMgPSAwO1xuICAgICAgICAgICAgICAgIGxldCBmaWVsZENvdW50ID0gMDtcblxuICAgICAgICAgICAgICAgIC8vIHNxbFN0YXRlbWVudCAtIFBhcnQgMVxuICAgICAgICAgICAgICAgIHNxbFN0YXJ0ICs9IHNlbGYuX2FycmF5VG9TdHJpbmcodGFibGVGaWVsZHMsICcsJyk7XG4gICAgICAgICAgICAgICAgc3FsU3RhcnQgKz0gJykgU0VMRUNUICc7XG4gICAgICAgICAgICAgICAgc3FsID0gc3FsU3RhcnQ7XG5cbiAgICAgICAgICAgICAgICAkLmVhY2godGFibGVEYXRhLCBmdW5jdGlvbiAobnIsIGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkQ291bnQgPT09IHRhYmxlRmllbGRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VwID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZENvdW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvTGFzdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyUmVjKys7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVuaW9uIHNlbGVjdCBvciBzdGFydCBuZXdcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyUmVjID09PSBBcHBTeW5jLnNxbFNwbGl0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fZXhlY3V0ZVNxbChzcWwsIG51bGwsIHR4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcWwgPSBzcWxTdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyUmVjID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb0xhc3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3FsICs9ICcgVU5JT04gU0VMRUNUICc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBWYWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJsZUZpZWxkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3FsICs9IHNlcCArICdcIicgKyBkYXRhW3RhYmxlRmllbGRzW2ldXSArICdcIic7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXAgPSAnLCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZENvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChkb0xhc3QpIHNlbGYuX2V4ZWN1dGVTcWwoc3FsLCBudWxsLCB0eCk7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRG9uZSB3aXRoIGFuIGluc2VydC4gSW4gcXVldWU6ICcgKyBzZWxmLmRhdGFRdWV1ZS5sZW5ndGgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuZGF0YVF1ZXVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLl9zZXFVcGRhdGUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY2FsbEJhY2spIGNhbGxCYWNrKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnNlcnQgZmFpbGVkJywgZSk7XG4gICAgICAgICAgICAgICAgc2VsZi5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICApOyAvL2VuZCB0eFxuICAgIH0sXG5cbiAgICBfZXhlY3V0ZVNxbDogZnVuY3Rpb24gKHNxbCwgcGFyYW1zLCBvcHRpb25hbFRyYW5zYWN0aW9uLCBvcHRpb25hbENhbGxCYWNrKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBzZWxmLmxvZygnX2V4ZWN1dGVTcWw6ICcgKyBzcWwgKyAnIHdpdGggcGFyYW0gJyArIHBhcmFtcyk7XG4gICAgICAgIGlmICghb3B0aW9uYWxDYWxsQmFjaykge1xuICAgICAgICAgICAgb3B0aW9uYWxDYWxsQmFjayA9IHNlbGYuX2RlZmF1bHRDYWxsQmFjaztcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9uYWxUcmFuc2FjdGlvbikge1xuICAgICAgICAgICAgc2VsZi5fZXhlY3V0ZVNxbEJyaWRnZShcbiAgICAgICAgICAgICAgICBvcHRpb25hbFRyYW5zYWN0aW9uLFxuICAgICAgICAgICAgICAgIHNxbCxcbiAgICAgICAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgICAgICAgb3B0aW9uYWxDYWxsQmFjayxcbiAgICAgICAgICAgICAgICBzZWxmLl9lcnJvckhhbmRsZXIsXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZi5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodHgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLl9leGVjdXRlU3FsQnJpZGdlKHR4LCBzcWwsIHBhcmFtcywgb3B0aW9uYWxDYWxsQmFjaywgc2VsZi5fZXJyb3JIYW5kbGVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIF9lcnJvckhhbmRsZXI6IGZ1bmN0aW9uICh0cmFuc2FjdGlvbiwgZXJyb3IpIHtcbiAgICAgICAgQXBwU3luYy5lcnJvcihcbiAgICAgICAgICAgICdFcnJvciA6ICcgK1xuICAgICAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UgK1xuICAgICAgICAgICAgICAgICcgKENvZGUgJyArXG4gICAgICAgICAgICAgICAgZXJyb3IuY29kZSArXG4gICAgICAgICAgICAgICAgJykgVHJhbnNhY3Rpb24uc3FsID0gJyArXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24uc3FsLFxuICAgICAgICApO1xuICAgIH0sXG5cbiAgICBfZXhlY3V0ZVNxbEJyaWRnZTogZnVuY3Rpb24gKHR4LCBzcWwsIHBhcmFtcywgZGF0YUhhbmRsZXIsIGVycm9ySGFuZGxlcikge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKHR5cGVvZiBzZWxmLmRiLmRiUGF0aCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNvbnN0IHNxbEFuZFBhcmFtcyA9IFtzcWxdLmNvbmNhdChwYXJhbXMpO1xuICAgICAgICAgICAgY29uc3QgY2IgPSBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgcmVzLnJvd3MuaXRlbSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW2ldO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZGF0YUhhbmRsZXIodHgsIHJlcyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdHguZXhlY3V0ZVNxbChzcWxBbmRQYXJhbXMsIGNiLCBlcnJvckhhbmRsZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHguZXhlY3V0ZVNxbChzcWwsIHBhcmFtcywgZGF0YUhhbmRsZXIsIGVycm9ySGFuZGxlcik7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgX2RlZmF1bHRDYWxsQmFjazogZnVuY3Rpb24gKHRyYW5zYWN0aW9uLCByZXN1bHRzKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfSxcblxuICAgIF9hcnJheVRvU3RyaW5nOiBmdW5jdGlvbiAoYXJyYXksIHNlcGFyYXRvcikge1xuICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBhcnJheVtpXTtcbiAgICAgICAgICAgIGlmIChpIDwgYXJyYXkubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCArPSBzZXBhcmF0b3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxufTtcbiIsICJkZWNsYXJlIGNvbnN0IEFwcFN5bmM6IGFueTtcblxuZnVuY3Rpb24gaXNBcmdzT2JqZWN0KGFyZ3NPYmplY3Q6IGFueSkge1xuICAgIGxldCBpc0FyZ3NPYmplY3QgPSBmYWxzZTtcbiAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBhcmdzT2JqZWN0ID09ICdvYmplY3QnICYmIC8vIG11c3QgYmUgYW4gb2JqZWN0XG4gICAgICAgIHR5cGVvZiBhcmdzT2JqZWN0LmdldE1ldGFkYXRhICE9ICdmdW5jdGlvbicgJiYgLy8gbXVzdCBub3QgYmUgYSBVSTUgZWxlbWVudFxuICAgICAgICB0eXBlb2YgYXJnc09iamVjdC5zb3VyY2UgIT0gJ3VuZGVmaW5lZCdcbiAgICApIHtcbiAgICAgICAgLy8gbXVzdCBhdCBsZWFzdCBoYXZlIHNvdXJjZSBwYXJhbWV0ZXIgc2V0LCBhbGwgTW9kZWxEYXRhIGZ1bmN0aW9ucyByZXF1aXJlIHRoYXRcbiAgICAgICAgaXNBcmdzT2JqZWN0ID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGlzQXJnc09iamVjdDtcbn1cblxuZnVuY3Rpb24gZW5zdXJlQXJyYXkoZGF0YTogc3RyaW5nIHwgc3RyaW5nW10pOiBzdHJpbmdbXSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgIGRhdGEgPSBkYXRhID09PSB1bmRlZmluZWQgPyBbXSA6IFtkYXRhXTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIGVuc3VyZU9wZXJhdG9yKG9wZXI6IHN0cmluZyB8IHN0cmluZ1tdLCBsZW5ndGg6IG51bWJlcikge1xuICAgIGxldCBmaWxsT3BlcmF0b3IgPSAnRVEnO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShvcGVyKSkge1xuICAgICAgICAvLyBpZiBvbmx5IGEgc2luZ2xlIHZhbHVlIHdhcyBwYXNzZWQsIHVzZSBpdCBmb3IgYWxsIHRoZSBvcGVyYXRvciBhcnJheSBlbnRyaWVzXG4gICAgICAgIGZpbGxPcGVyYXRvciA9IG9wZXI7XG4gICAgICAgIG9wZXIgPSBbXTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IG9wZXIubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgb3BlcltpXSA9IGZpbGxPcGVyYXRvcjtcbiAgICB9XG4gICAgcmV0dXJuIG9wZXI7XG59XG5cbmZ1bmN0aW9uIENvbXBhcmUobG9va0luLCBsb29rRm9yLCBvcGVyKSB7XG4gICAgaWYgKFxuICAgICAgICBBcnJheS5pc0FycmF5KGxvb2tJbikgJiZcbiAgICAgICAgbG9va0ZvciAhPT0gbnVsbCAmJlxuICAgICAgICB0eXBlb2YgbG9va0ZvciA9PSAnb2JqZWN0JyAmJlxuICAgICAgICBPYmplY3Qua2V5cyhsb29rRm9yKS5sZW5ndGggPiAwXG4gICAgKSB7XG4gICAgICAgIC8vIGlmIHNlYXJjaCBzdWJqZWN0IGlzIGFuIGFycmF5LCBhbmQgbG9va0ZvciBpcyBhbiBvYmplY3QsXG4gICAgICAgIC8vICAgPj4gd2UgYXNzdW1lIGxvb2tJbiBob2xkcyBvYmplY3RzIGFzIHdlbGxcbiAgICAgICAgLy8gICB0aGVuIGxvb2sgdGhyb3VnaCBhbGwgZW50cmllcywgaWYgb25lIG1hdGNoZXMgdGhlbiB0aGUgcGFyZW50IG9iamVjdCBlbnRyeSBtYXRjaGVzXG4gICAgICAgIGxldCBiQ29tcGFyZSA9IGZhbHNlOyAvLyBzdGFydCB3aXRoIGZhbHNlLCBidXQgdXNlIE9SIHRvIGNvbXBhcmUgcmVzdWx0cywgYW55IG9uZSBpcyBmaW5lXG4gICAgICAgIC8vIGxldCdzIHRyeSB0aGlzIGFzIGEgcmVjdXJzaXZlIGNhbGwgb2YgTW9kZWxEYXRhLkZpbmQsIHNpbmNlIHdlIGNhbiB1c2UgYXJyYXlzIG5vdyEhXG4gICAgICAgIE9iamVjdC5rZXlzKGxvb2tGb3IpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgYkNvbXBhcmUgPSBiQ29tcGFyZSB8fCBGaW5kKGxvb2tJbiwga2V5LCBsb29rRm9yW2tleV0sIG9wZXIpLmxlbmd0aCA+IDA7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYkNvbXBhcmU7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGxvb2tJbikpIHtcbiAgICAgICAgLy8gaWYgc2VhcmNoIHN1YmplY3QgaXMgYW4gYXJyYXksIGFuZCBsb29rRm9yIGlzIGEgc2ltcGxlIHZhbHVlXG4gICAgICAgIC8vICAgPj4gd2UgYXNzdW1lIGxvb2tJbiBob2xkcyBzaW1wbGUgdmFsdWVzIGFzIHdlbGxcbiAgICAgICAgLy8gICB0aGVuIGxvb2sgdGhyb3VnaCBhbGwgZW50cmllcywgaWYgb25lIG1hdGNoZXMgdGhlbiB0aGUgcGFyZW50IG9iamVjdCBlbnRyeSBtYXRjaGVzXG4gICAgICAgIGxldCBiQ29tcGFyZSA9IGZhbHNlOyAvLyBzdGFydCB3aXRoIGZhbHNlLCBidXQgdXNlIE9SIHRvIGNvbXBhcmUgcmVzdWx0cywgYW55IG9uZSBpcyBmaW5lXG4gICAgICAgIGxvb2tJbi5mb3JFYWNoKGZ1bmN0aW9uIChsb29rSW5WYWx1ZSkge1xuICAgICAgICAgICAgYkNvbXBhcmUgPSBiQ29tcGFyZSB8fCBDb21wYXJlU2ltcGxlVmFsdWVzKGxvb2tJblZhbHVlLCBsb29rRm9yLCBvcGVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBiQ29tcGFyZTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgICB0eXBlb2YgbG9va0luID09ICdvYmplY3QnICYmXG4gICAgICAgIGxvb2tGb3IgIT09IG51bGwgJiZcbiAgICAgICAgdHlwZW9mIGxvb2tGb3IgPT0gJ29iamVjdCcgJiZcbiAgICAgICAgT2JqZWN0LmtleXMobG9va0ZvcikubGVuZ3RoID4gMFxuICAgICkge1xuICAgICAgICBsZXQgYkNvbXBhcmUgPSB0cnVlOyAvLyBzdGFydCB3aXRoIHRydWUsIGJ1dCB1c2UgQU5EIHRvIGNvbXBhcmUgcmVzdWx0cywgYWxsIG11c3QgbWF0Y2hcbiAgICAgICAgLy8gaWYgb2JqZWN0IGlzIHVzZWQgYXMgYSBzZWFyY2ggY3JpdGVyaWEsIGFsbCBpdHMgYXR0cmlidXRlcyBtdXN0IG1hdGNoIVxuICAgICAgICBPYmplY3Qua2V5cyhsb29rRm9yKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGJDb21wYXJlID0gYkNvbXBhcmUgJiYgQ29tcGFyZVNpbXBsZVZhbHVlcyhsb29rSW5ba2V5XSwgbG9va0ZvcltrZXldLCBvcGVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBiQ29tcGFyZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gQ29tcGFyZVNpbXBsZVZhbHVlcyhsb29rSW4sIGxvb2tGb3IsIG9wZXIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gQ29tcGFyZVNpbXBsZVZhbHVlcyhsb29rSW4sIGxvb2tGb3IsIG9wZXIpIHtcbiAgICBsZXQgYkNvbXBhcmUgPSBmYWxzZTtcbiAgICBzd2l0Y2ggKG9wZXIpIHtcbiAgICAgICAgY2FzZSAnQ29udGFpbnMnOlxuICAgICAgICAgICAgYkNvbXBhcmUgPSBsb29rSW4uaW5kZXhPZihsb29rRm9yKSAhPSAtMTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ05FJzpcbiAgICAgICAgICAgIGJDb21wYXJlID0gbG9va0luICE9IGxvb2tGb3I7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdHVCc6XG4gICAgICAgICAgICBiQ29tcGFyZSA9IGxvb2tJbiA+IGxvb2tGb3I7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdHRSc6XG4gICAgICAgICAgICBiQ29tcGFyZSA9IGxvb2tJbiA+PSBsb29rRm9yO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnTFQnOlxuICAgICAgICAgICAgYkNvbXBhcmUgPSBsb29rSW4gPCBsb29rRm9yO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnTEUnOlxuICAgICAgICAgICAgYkNvbXBhcmUgPSBsb29rSW4gPD0gbG9va0ZvcjtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0JUJzpcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGxvb2tGb3IpICYmIGxvb2tGb3IubGVuZ3RoID09IDIpIHtcbiAgICAgICAgICAgICAgICBiQ29tcGFyZSA9IGxvb2tJbiA+PSBsb29rRm9yWzBdICYmIGxvb2tJbiA8PSBsb29rRm9yWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnU3RhcnRzV2l0aCc6XG4gICAgICAgICAgICBiQ29tcGFyZSA9XG4gICAgICAgICAgICAgICAgbG9va0Zvci50b1N0cmluZygpLmxlbmd0aCA8PSBsb29rSW4udG9TdHJpbmcoKS5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICBsb29rRm9yLnRvU3RyaW5nKCkgPT0gbG9va0luLnRvU3RyaW5nKCkuc3Vic3RyKDAsIGxvb2tGb3IudG9TdHJpbmcoKS5sZW5ndGgpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnRW5kc1dpdGgnOlxuICAgICAgICAgICAgYkNvbXBhcmUgPVxuICAgICAgICAgICAgICAgIGxvb2tGb3IudG9TdHJpbmcoKS5sZW5ndGggPD0gbG9va0luLnRvU3RyaW5nKCkubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgbG9va0Zvci50b1N0cmluZygpID09XG4gICAgICAgICAgICAgICAgICAgIGxvb2tJblxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzdHIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9va0luLnRvU3RyaW5nKCkubGVuZ3RoIC0gbG9va0Zvci50b1N0cmluZygpLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb29rRm9yLnRvU3RyaW5nKCkubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAvLyBFUVxuICAgICAgICAgICAgYkNvbXBhcmUgPSBsb29rSW4gPT0gbG9va0ZvcjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gYkNvbXBhcmU7XG59XG5cbmNvbnN0IHBhdGhTZXBhcmF0b3IgPSAnLyc7XG5cbmNvbnN0IGlzUGF0aCA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguc2VhcmNoKHBhdGhTZXBhcmF0b3IpID4gMDtcbn07XG5jb25zdCBzcGxpdFBhdGggPSBmdW5jdGlvbiAocGF0aCkge1xuICAgIHJldHVybiBwYXRoLnNwbGl0KHBhdGhTZXBhcmF0b3IpO1xufTtcbmNvbnN0IGpvaW5QYXRoID0gZnVuY3Rpb24gKHBhdGhBcnJheSkge1xuICAgIHJldHVybiBwYXRoQXJyYXkuam9pbihwYXRoU2VwYXJhdG9yKTtcbn07XG5mdW5jdGlvbiBnZXRBdHRyaWJ1dGVWaWFQYXRoKG9iaiwga2V5UGF0aCkge1xuICAgIGlmIChpc1BhdGgoa2V5UGF0aCkpIHtcbiAgICAgICAgLy8gcGF0aCBmb3VuZCwgc3BsaXQgYW5kIGNhbGwgcmVjdXJzaXZlbHlcbiAgICAgICAgY29uc3QgcGF0aEFycmF5ID0gc3BsaXRQYXRoKGtleVBhdGgpO1xuICAgICAgICBjb25zdCBmaXJzdFBhcnQgPSBwYXRoQXJyYXkuc2hpZnQoKTtcbiAgICAgICAgLy8gY2hlY2tzIGZpcnN0XG4gICAgICAgIC8vIGVsZW1lbnQgZm91bmQgYXQgZmlyc3RQYXJ0IG9mIHBhdGggIC4uLlxuICAgICAgICBpZiAodHlwZW9mIG9ialtmaXJzdFBhcnRdID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAvLyAuLi4gaXMgYW4gb2JqZWN0LCBjYWxsIG5leHQgbGV2ZWxcbiAgICAgICAgICAgIHJldHVybiBnZXRBdHRyaWJ1dGVWaWFQYXRoKG9ialtmaXJzdFBhcnRdLCBqb2luUGF0aChwYXRoQXJyYXkpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIC4uLiBpcyBub3QgYW4gb2JqZWN0XG4gICAgICAgICAgICByZXR1cm4gb2JqW2ZpcnN0UGFydF07XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBubyBwYXRoIGZvdW5kLCBkaXJlY3QgY29tcGFyZVxuICAgICAgICByZXR1cm4gb2JqW2tleVBhdGhdO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZVZpYVBhdGgob2JqLCBrZXlQYXRoLCBuZXdWYWx1ZSkge1xuICAgIGlmIChpc1BhdGgoa2V5UGF0aCkpIHtcbiAgICAgICAgLy8gcGF0aCBmb3VuZCwgc3BsaXQgYW5kIGNhbGwgcmVjdXJzaXZlbHlcbiAgICAgICAgY29uc3QgcGF0aEFycmF5ID0gc3BsaXRQYXRoKGtleVBhdGgpO1xuICAgICAgICBjb25zdCBmaXJzdFBhcnQgPSBwYXRoQXJyYXkuc2hpZnQoKTtcbiAgICAgICAgLy8gY2hlY2tzIGZpcnN0XG4gICAgICAgIC8vIGVsZW1lbnQgZm91bmQgYXQgZmlyc3RQYXJ0IG9mIHBhdGggIC4uLlxuICAgICAgICBpZiAodHlwZW9mIG9ialtmaXJzdFBhcnRdID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAvLyAuLi4gaXMgYW4gb2JqZWN0LCBjYWxsIG5leHQgbGV2ZWxcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZVZpYVBhdGgob2JqW2ZpcnN0UGFydF0sIGpvaW5QYXRoKHBhdGhBcnJheSksIG5ld1ZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIC4uLiBpcyBub3QgYW4gb2JqZWN0XG4gICAgICAgICAgICBvYmpbZmlyc3RQYXJ0XSA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbm8gcGF0aCBmb3VuZCwgZGlyZWN0IHNldFxuICAgICAgICBvYmpba2V5UGF0aF0gPSBuZXdWYWx1ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIENvbXBhcmVQYXRoKG9iaiwga2V5UGF0aCwgdmFsLCBvcGVyKSB7XG4gICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSBnZXRBdHRyaWJ1dGVWaWFQYXRoKG9iaiwga2V5UGF0aCk7XG4gICAgcmV0dXJuIENvbXBhcmUoYXR0cmlidXRlVmFsdWUsIHZhbCwgb3Blcik7XG59XG5cbmZ1bmN0aW9uIENvbXBhcmVPYmpXaXRoQXJyYXkob2JqLCBrZXksIHZhbCwgb3Blcikge1xuICAgIGxldCBiQ29tcGFyZSA9IHRydWU7XG4gICAga2V5LmZvckVhY2goZnVuY3Rpb24gKGtleUVsZW0sIElEWCwgQVJSKSB7XG4gICAgICAgIGJDb21wYXJlID0gYkNvbXBhcmUgJiYgQ29tcGFyZVBhdGgob2JqLCBrZXlFbGVtLCB2YWxbSURYXSwgb3BlcltJRFhdKTtcbiAgICB9KTtcbiAgICByZXR1cm4gYkNvbXBhcmU7XG59XG5cbmZ1bmN0aW9uIENvbXBhcmVPYmpXaXRoT2JqKG9iaiwga2V5LCBvYmpDb21wLCBvcGVyKSB7XG4gICAgbGV0IGJDb21wYXJlID0gdHJ1ZTtcbiAgICBrZXkuZm9yRWFjaChmdW5jdGlvbiAoa2V5RWxlbSwgSURYLCBBUlIpIHtcbiAgICAgICAgYkNvbXBhcmUgPSBiQ29tcGFyZSAmJiBDb21wYXJlUGF0aChvYmosIGtleUVsZW0sIG9iakNvbXBba2V5RWxlbV0sIG9wZXJbSURYXSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGJDb21wYXJlO1xufVxuXG4vKipcbiAqIGdldE1vZGVsIGltcGxlbWVudGF0aW9uIGZyb20gTW9kZWxEYXRhIHY0XG4gKi9cbmZ1bmN0aW9uIHY0X2dldE1vZGVsKG9iaikge1xuICAgIGNvbnN0IG1vZGVsID0gb2JqLmdldE1vZGVsKCk7XG4gICAgaWYgKG1vZGVsICYmIHR5cGVvZiBtb2RlbC5vRGF0YSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1vZGVsLm9EYXRhLmxlbmd0aCA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgIG1vZGVsLm9EYXRhID0gW107XG4gICAgaWYgKG1vZGVsICYmIHR5cGVvZiBtb2RlbC5vRGF0YSA9PT0gJ3VuZGVmaW5lZCcpIG1vZGVsLm9EYXRhID0gW107XG4gICAgcmV0dXJuIG1vZGVsO1xufVxuXG5mdW5jdGlvbiBnZXRNb2RlbERhdGFTb3VyY2Uoc291cmNlKSB7XG4gICAgY29uc3QgVHlwZXMgPSB7XG4gICAgICAgIGFycmF5OiAnYXJyYXknLFxuICAgICAgICBjb250cm9sOiAnY29udHJvbCcsXG4gICAgICAgIG1vZGVsOiAnbW9kZWwnLFxuICAgIH07XG4gICAgbGV0IHNvdXJjZUFycmF5ID0gW107XG4gICAgbGV0IHNvdXJjZUNvbnRyb2wgPSBudWxsO1xuICAgIGxldCBzb3VyY2VNb2RlbCA9IG51bGw7XG4gICAgbGV0IHNvdXJjZVR5cGUgPSAnJztcblxuICAgIGNvbnN0IGdldEFycmF5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzd2l0Y2ggKHNvdXJjZVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgVHlwZXMubW9kZWw6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNvdXJjZU1vZGVsLmdldERhdGEoKTtcblxuICAgICAgICAgICAgY2FzZSBUeXBlcy5jb250cm9sOlxuICAgICAgICAgICAgICAgIC8vIHJldHVybiBzb3VyY2VDb250cm9sLmdldE1vZGVsKCkuZ2V0RGF0YSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2NF9nZXRNb2RlbChzb3VyY2VDb250cm9sKS5nZXREYXRhKCk7IC8vIHJlYWxseSBuZWNlc3Nhcnk/XG5cbiAgICAgICAgICAgIGNhc2UgVHlwZXMuYXJyYXk6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNvdXJjZUFycmF5O1xuICAgICAgICB9XG4gICAgICAgIHRocm93ICdNb2RlbERhdGE6IGJhZCB0eXBlIGZvciBzb3VyY2UgLyAnICsgdGhpcztcbiAgICB9O1xuXG4gICAgY29uc3QgdXBkYXRlRGF0YSA9IGZ1bmN0aW9uIChhcnJheSkge1xuICAgICAgICBzd2l0Y2ggKHNvdXJjZVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgVHlwZXMubW9kZWw6XG4gICAgICAgICAgICAgICAgLy8gc291cmNlTW9kZWwuc2V0RGF0YShhcnJheSk7XG4gICAgICAgICAgICAgICAgbW9kZWxTZXREYXRhKHNvdXJjZU1vZGVsLCBhcnJheSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgVHlwZXMuY29udHJvbDpcbiAgICAgICAgICAgICAgICAvLyBzb3VyY2VDb250cm9sLmdldE1vZGVsKCkuc2V0RGF0YShhcnJheSk7XG4gICAgICAgICAgICAgICAgbW9kZWxTZXREYXRhKHNvdXJjZUNvbnRyb2wuZ2V0TW9kZWwoKSwgYXJyYXkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFR5cGVzLmFycmF5OlxuICAgICAgICAgICAgICAgIC8vIG5vIHVwZGF0ZSBuZWNlc3NhcnksIGFycmF5IGFscmVhZHkgbW9kaWZpZWQgZGlyZWN0bHlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShzb3VyY2UpKSB7XG4gICAgICAgIHNvdXJjZVR5cGUgPSBUeXBlcy5hcnJheTtcbiAgICAgICAgc291cmNlQXJyYXkgPSBzb3VyY2U7XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygc291cmNlLmdldE1ldGFkYXRhID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaWYgKHNvdXJjZS5nZXRNZXRhZGF0YSgpLl9zQ2xhc3NOYW1lID09ICdzYXAudWkubW9kZWwuanNvbi5KU09OTW9kZWwnKSB7XG4gICAgICAgICAgICBzb3VyY2VUeXBlID0gVHlwZXMubW9kZWw7XG4gICAgICAgICAgICBzb3VyY2VNb2RlbCA9IHNvdXJjZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNvdXJjZVR5cGUgPSBUeXBlcy5jb250cm9sO1xuICAgICAgICAgICAgc291cmNlQ29udHJvbCA9IHNvdXJjZTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGJhZCBzb3VyY2VcbiAgICAgICAgdGhyb3cgJ01vZGVsRGF0YTogYmFkIHNvdXJjZSAvICcgKyBzb3VyY2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0QXJyYXk6IGdldEFycmF5LFxuICAgICAgICB1cGRhdGVEYXRhOiB1cGRhdGVEYXRhLFxuICAgIH07XG59XG5cbi8vICBVVUlEXG5leHBvcnQgZnVuY3Rpb24gZ2VuSUQoKSB7XG4gICAgbGV0IGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBjb25zdCB1dWlkID0gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xuICAgICAgICBjb25zdCByID0gKGQgKyBNYXRoLnJhbmRvbSgpICogMTYpICUgMTYgfCAwO1xuICAgICAgICBkID0gTWF0aC5mbG9vcihkIC8gMTYpO1xuICAgICAgICByZXR1cm4gKGMgPT0gJ3gnID8gciA6IChyICYgMHg3KSB8IDB4OCkudG9TdHJpbmcoMTYpO1xuICAgIH0pO1xuICAgIHJldHVybiB1dWlkO1xufVxuXG5sZXQgcmVmcmVzaERlbGF5ZWQgPSBmYWxzZTtcbmxldCByZWZyZXNoRGVsYXllZE1vZGVscyA9IG5ldyBNYXAoKTtcbmxldCBhdXRvUmVmcmVzaERlbGF5ZWQgPSB0cnVlO1xubGV0IGF1dG9SZWZyZXNoVGltZW91dCA9IG51bGw7XG5sZXQgYXV0b1JlZnJlc2hEZWxheSA9IDA7XG5cbmZ1bmN0aW9uIG1vZGVsU2V0RGF0YShtb2RlbCwgZGF0YSkge1xuICAgIGlmIChyZWZyZXNoRGVsYXllZCkge1xuICAgICAgICBtb2RlbC5vRGF0YSA9IGRhdGE7XG4gICAgICAgIHJlZnJlc2hEZWxheWVkTW9kZWxzLnNldChtb2RlbC5nZXRJZCgpLCBtb2RlbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGF1dG9SZWZyZXNoRGVsYXllZCkge1xuICAgICAgICAgICAgbW9kZWwub0RhdGEgPSBkYXRhO1xuICAgICAgICAgICAgcmVmcmVzaERlbGF5ZWRNb2RlbHMuc2V0KG1vZGVsLmdldElkKCksIG1vZGVsKTtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChhdXRvUmVmcmVzaFRpbWVvdXQpO1xuICAgICAgICAgICAgYXV0b1JlZnJlc2hUaW1lb3V0ID0gc2V0VGltZW91dChkb1JlZnJlc2gsIGF1dG9SZWZyZXNoRGVsYXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kZWwuc2V0RGF0YShkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGF5UmVmcmVzaCgpIHtcbiAgICByZWZyZXNoRGVsYXllZCA9IHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb1JlZnJlc2goKSB7XG4gICAgZm9yIChjb25zdCBbaWQsIG1vZGVsXSBvZiByZWZyZXNoRGVsYXllZE1vZGVscykge1xuICAgICAgICBtb2RlbC5yZWZyZXNoKCk7XG4gICAgfVxuICAgIHJlZnJlc2hEZWxheWVkTW9kZWxzID0gbmV3IE1hcCgpO1xuICAgIHJlZnJlc2hEZWxheWVkID0gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRBdXRvRGVsYXlSZWZyZXNoKGJBdXRvRGVsYXkpIHtcbiAgICBhdXRvUmVmcmVzaERlbGF5ZWQgPSBiQXV0b0RlbGF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0QXV0b0RlbGF5UmVmcmVzaFRpbWVvdXQoZGVsYXlJbk1zKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgZGVsYXlJbk1zID0gcGFyc2VJbnQoZGVsYXlJbk1zKTtcbiAgICAgICAgaWYgKGlzTmFOKGRlbGF5SW5NcykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1ZhbHVlIGZvciBEZWxheS1UaW1lb3V0IG11c3QgYmUgYW4gaW50ZWdlciAobWlsbGlzZWNvbmRzKScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGF1dG9SZWZyZXNoRGVsYXkgPSBkZWxheUluTXM7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEZpbmQoXG4gICAgYXJnc09iamVjdDogYW55LFxuICAgIGtleTogc3RyaW5nIHwgc3RyaW5nW10sXG4gICAgdmFsOiBzdHJpbmcgfCBzdHJpbmdbXSxcbiAgICBvcGVyID0gdW5kZWZpbmVkLFxuICAgIGNhbGxiYWNrID0gdW5kZWZpbmVkLFxuKSB7XG4gICAgbGV0IHNvdXJjZSA9IGFyZ3NPYmplY3Q7XG4gICAgaWYgKGlzQXJnc09iamVjdChhcmdzT2JqZWN0KSkge1xuICAgICAgICBzb3VyY2UgPSBhcmdzT2JqZWN0LnNvdXJjZTtcbiAgICAgICAga2V5ID0gYXJnc09iamVjdC5rZXlzO1xuICAgICAgICB2YWwgPSBhcmdzT2JqZWN0LnZhbHVlcztcbiAgICAgICAgb3BlciA9IGFyZ3NPYmplY3Qub3BlcmF0b3JzO1xuICAgICAgICBjYWxsYmFjayA9IGFyZ3NPYmplY3QuZm5DYWxsYmFjaztcbiAgICB9XG4gICAgY29uc3Qgb1NvdXJjZSA9IGdldE1vZGVsRGF0YVNvdXJjZShzb3VyY2UpO1xuICAgIGxldCBhcnIgPSBvU291cmNlLmdldEFycmF5KCk7XG4gICAgbGV0IHJldCA9IFtdO1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnIpIHx8IGFyci5sZW5ndGggPT0gMCkgcmV0dXJuIHJldDtcblxuICAgIC8vIGNyZWF0ZSBhcnJheSBmb3IgYWxsIHBhcmFtZXRlcnMsIHRvIGhhdmUgb25seSBvbmUgY29kZWxpbmUgZm9yIGhhbmRsaW5nXG4gICAgLy8gVE9ETyBvbmx5IGNyZWF0ZSBhcnJheXMgaWYgYm90aCBwYXJhbWV0ZXJzIGFyZSB0aGUgc2FtZSwgZWl0aGVyIGFycmF5IG9yIG5vbmUtYXJyYXlcbiAgICAvLyAgdGhpcyB3aWxsIGJlIG5lY2Vzc2FyeSB0byBwcm9jZWVkIHdpdGggbmV3IHVzZSBjYXNlcywgZmluZGluZyBkYXRhIHdpdGhpbiBuZXN0ZWQgYXJyYXlzXG4gICAgLy8gIG1heWJlIGhhbmRsZSBsaWtlIHRoaXM6IGlmIGFycmF5IGluIGRhdGEgb2JqZWN0IGlzIGZvdW5kLCBzdGFydCBhIHN1Yi1maW5kIGZvciB0aGUgZ2l2ZW4gZGF0YSFcbiAgICBrZXkgPSBlbnN1cmVBcnJheShrZXkpO1xuICAgIHZhbCA9IGVuc3VyZUFycmF5KHZhbCk7XG4gICAgb3BlciA9IGVuc3VyZU9wZXJhdG9yKG9wZXIsIGtleS5sZW5ndGgpO1xuICAgIC8vIGlmICghQXJyYXkuaXNBcnJheShrZXkpKSBrZXkgPSBrZXkgPT09IHVuZGVmaW5lZCA/IFtdIDogW2tleV07XG4gICAgLy8gaWYgKCFBcnJheS5pc0FycmF5KHZhbCkpIHZhbCA9IHZhbCA9PT0gdW5kZWZpbmVkID8gW10gOiBbdmFsXTtcbiAgICAvLyBpZiAodHlwZW9mKG9wZXIpID09IFwidW5kZWZpbmVkXCIpIG9wZXIgPSAnRVEnOyAvLyBEZWZhdWx0ID0gRVFcbiAgICAvLyBpZiAoIUFycmF5LmlzQXJyYXkob3BlcikpIHtcbiAgICAvLyAgICAgdmFyIG9wZXJTaW5nbGUgPSBvcGVyO1xuICAgIC8vICAgICBvcGVyID0gW107XG4gICAgLy8gICAgIGtleS5mb3JFYWNoKGZ1bmN0aW9uKEVMRU0sIElEWCwgQVJSKSB7XG4gICAgLy8gICAgICAgICBvcGVyLnB1c2gob3BlclNpbmdsZSk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cblxuICAgIGlmIChrZXkubGVuZ3RoICE9IHZhbC5sZW5ndGggfHwga2V5Lmxlbmd0aCAhPSBvcGVyLmxlbmd0aCkgcmV0dXJuIHJldDsgLy8gcGFyYW1ldGVyIGFycmF5cyBub3QgZXF1YWwgc2l6ZVxuXG4gICAgaWYgKGtleS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0ID0gYXJyO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldCA9IGFyci5maWx0ZXIoZnVuY3Rpb24gKGFyck9iaikge1xuICAgICAgICAgICAgcmV0dXJuIENvbXBhcmVPYmpXaXRoQXJyYXkoYXJyT2JqLCBrZXksIHZhbCwgb3Blcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2FsbGJhY2socmV0KTtcbiAgICB9XG5cbiAgICAvLyBNZW1vcnkgQ2xlYXJpbmdcbiAgICBhcnIgPSBudWxsO1xuICAgIHJldHVybiByZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGaW5kRmlyc3QoYXJnc09iamVjdCwgc0tleSwgc1ZhbHVlLCBzT3BlciA9IHVuZGVmaW5lZCwgY2FsbEJhY2sgPSB1bmRlZmluZWQpIHtcbiAgICBsZXQgb1NvdXJjZSA9IGFyZ3NPYmplY3Q7XG4gICAgaWYgKGlzQXJnc09iamVjdChhcmdzT2JqZWN0KSkge1xuICAgICAgICBvU291cmNlID0gYXJnc09iamVjdC5zb3VyY2U7XG4gICAgICAgIHNLZXkgPSBhcmdzT2JqZWN0LmtleXM7XG4gICAgICAgIHNWYWx1ZSA9IGFyZ3NPYmplY3QudmFsdWVzO1xuICAgICAgICBzT3BlciA9IGFyZ3NPYmplY3Qub3BlcmF0b3JzO1xuICAgICAgICBjYWxsQmFjayA9IGFyZ3NPYmplY3QuZm5DYWxsYmFjaztcbiAgICAgICAgYXJnc09iamVjdC5mbkNhbGxiYWNrID0gbnVsbDsgLy8gZG8gTk9UIHBhc3Mgb24gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLCB3aWxsIGJlIGV4ZWN1dGVkIGhlcmUhXG4gICAgfVxuICAgIC8vIG5vIHBhcmFtZXRlciBjaGVja2luZywgcGFzc2luZyBvbiB0byBpbnRlcm5hbCBtZXRob2RzXG4gICAgY29uc3QgYVJlc3VsdHMgPSBGaW5kKG9Tb3VyY2UsIHNLZXksIHNWYWx1ZSwgc09wZXIpO1xuICAgIGxldCByZXN1bHRPYmplY3QgPSBmYWxzZTtcbiAgICBpZiAoYVJlc3VsdHMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXN1bHRPYmplY3QgPSBhUmVzdWx0c1swXTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdE9iamVjdCAmJiB0eXBlb2YgY2FsbEJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2FsbEJhY2socmVzdWx0T2JqZWN0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdE9iamVjdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIExvb2t1cFZhbHVlKGFyZ3NPYmplY3QsIHNLZXksIHNWYWx1ZSwgc0ZpZWxkLCBzT3BlciwgY2FsbEJhY2spIHtcbiAgICBsZXQgb1NvdXJjZSA9IGFyZ3NPYmplY3Q7XG4gICAgaWYgKGlzQXJnc09iamVjdChhcmdzT2JqZWN0KSkge1xuICAgICAgICBvU291cmNlID0gYXJnc09iamVjdC5zb3VyY2U7XG4gICAgICAgIHNLZXkgPSBhcmdzT2JqZWN0LmtleXM7XG4gICAgICAgIHNWYWx1ZSA9IGFyZ3NPYmplY3QudmFsdWVzO1xuICAgICAgICBzRmllbGQgPSBhcmdzT2JqZWN0Lmxvb2t1cEZpZWxkO1xuICAgICAgICBzT3BlciA9IGFyZ3NPYmplY3Qub3BlcmF0b3JzO1xuICAgICAgICBjYWxsQmFjayA9IGFyZ3NPYmplY3QuZm5DYWxsYmFjaztcbiAgICB9XG4gICAgLy8gbm8gcGFyYW1ldGVyIGNoZWNraW5nLCBwYXNzaW5nIG9uIHRvIGludGVybmFsIG1ldGhvZHNcbiAgICBjb25zdCByZXN1bHQgPSBGaW5kRmlyc3Qob1NvdXJjZSwgc0tleSwgc1ZhbHVlLCBzT3BlciwgY2FsbEJhY2spO1xuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIGdldEF0dHJpYnV0ZVZpYVBhdGgocmVzdWx0LCBzRmllbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzVmFsdWU7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gRmluZERCKG9iaiwgdGFibGUsIHF1ZXJ5U3RyaW5nLCBxdWVyeURhdGEsIGNhbGxCYWNrKSB7XG4gICAgaWYgKHR5cGVvZiBBcHBTeW5jLmRiID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAodHlwZW9mIGNhbGxCYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWxsQmFjaygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbW9kZWwgPSB2NF9nZXRNb2RlbChvYmopO1xuICAgIGNvbnN0IG5ld0FyciA9IFtdO1xuICAgIGxldCBxRGF0YSA9IFtdO1xuICAgIGlmICh0eXBlb2YgcXVlcnlEYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgICBxRGF0YVswXSA9IHF1ZXJ5RGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxRGF0YSA9IHF1ZXJ5RGF0YTtcbiAgICB9XG4gICAgQXBwU3luYy5kYi50cmFuc2FjdGlvbihcbiAgICAgICAgZnVuY3Rpb24gKHR4KSB7XG4gICAgICAgICAgICB0eC5leGVjdXRlU3FsKFxuICAgICAgICAgICAgICAgICdTRUxFQ1QgKiBGUk9NICcgKyB0YWJsZSArICcgV0hFUkUgJyArIHF1ZXJ5U3RyaW5nLFxuICAgICAgICAgICAgICAgIHFEYXRhLFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICh0eCwgcmVzdWx0cykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdHMucm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqID0gcmVzdWx0cy5yb3dzLml0ZW0oaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHAgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9ialtwXSA9PT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpbcF0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9ialtwXSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialtwXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QXJyLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBtb2RlbC5zZXREYXRhKG5ld0Fycik7XG4gICAgICAgICAgICAgICAgICAgIG1vZGVsU2V0RGF0YShtb2RlbCwgbmV3QXJyKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsQmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbEJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uICh0eCkge1xuICAgICAgICAgICAgaWYgKHR4LmNvZGUgIT09ICcwJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHR4Lm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGNhbGxCYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEFkZChhcmdzT2JqZWN0LCByZWMpIHtcbiAgICBsZXQgc291cmNlID0gYXJnc09iamVjdDtcbiAgICBpZiAoaXNBcmdzT2JqZWN0KGFyZ3NPYmplY3QpKSB7XG4gICAgICAgIHNvdXJjZSA9IGFyZ3NPYmplY3Quc291cmNlO1xuICAgICAgICByZWMgPSBhcmdzT2JqZWN0LmRhdGE7XG4gICAgfVxuICAgIGNvbnN0IG9Tb3VyY2UgPSBnZXRNb2RlbERhdGFTb3VyY2Uoc291cmNlKTtcbiAgICBjb25zdCBhcnIgPSBvU291cmNlLmdldEFycmF5KCk7XG4gICAgYXJyLnB1c2gocmVjKTtcbiAgICBvU291cmNlLnVwZGF0ZURhdGEoYXJyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEFkZEFycmF5KGFyZ3NPYmplY3QsIGFkZEFycikge1xuICAgIGxldCBzb3VyY2UgPSBhcmdzT2JqZWN0O1xuICAgIGlmIChpc0FyZ3NPYmplY3QoYXJnc09iamVjdCkpIHtcbiAgICAgICAgc291cmNlID0gYXJnc09iamVjdC5zb3VyY2U7XG4gICAgICAgIGFkZEFyciA9IGFyZ3NPYmplY3QuZGF0YTtcbiAgICB9XG5cbiAgICBjb25zdCBvU291cmNlID0gZ2V0TW9kZWxEYXRhU291cmNlKHNvdXJjZSk7XG4gICAgY29uc3QgYXJyID0gb1NvdXJjZS5nZXRBcnJheSgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWRkQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFyci5wdXNoKGFkZEFycltpXSk7XG4gICAgfVxuICAgIG9Tb3VyY2UudXBkYXRlRGF0YShhcnIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVXBkYXRlKGFyZ3NPYmplY3QsIGtleSwgdmFsLCByZWMsIG9wZXIgPSB1bmRlZmluZWQpIHtcbiAgICBsZXQgc291cmNlID0gYXJnc09iamVjdDtcbiAgICBsZXQgZm5DYWxsQmFjazsgLy8gZGVmaW5lIGhlcmUsIGJlY2F1c2Ugd2FzIG5vdCBhIGxlZ2FjeSBhcmd1bWVudFxuICAgIGxldCBjYWxsQmFjaztcbiAgICBpZiAoaXNBcmdzT2JqZWN0KGFyZ3NPYmplY3QpKSB7XG4gICAgICAgIHNvdXJjZSA9IGFyZ3NPYmplY3Quc291cmNlO1xuICAgICAgICBrZXkgPSBhcmdzT2JqZWN0LmtleXM7XG4gICAgICAgIHZhbCA9IGFyZ3NPYmplY3QudmFsdWVzO1xuICAgICAgICByZWMgPSBhcmdzT2JqZWN0LmRhdGE7XG4gICAgICAgIG9wZXIgPSBhcmdzT2JqZWN0Lm9wZXJhdG9ycztcbiAgICAgICAgY2FsbEJhY2sgPSBhcmdzT2JqZWN0LmZuQ2FsbGJhY2s7XG4gICAgfVxuXG4gICAgY29uc3Qgb1NvdXJjZSA9IGdldE1vZGVsRGF0YVNvdXJjZShzb3VyY2UpO1xuICAgIGNvbnN0IGFyciA9IG9Tb3VyY2UuZ2V0QXJyYXkoKTtcblxuICAgIC8vIHZhciBtb2RlbCA9IGdldE1vZGVsKG9iaik7XG4gICAgLy8gdmFyIGFyciA9IG1vZGVsLm9EYXRhO1xuICAgIGxldCB1cGQgPSBmYWxzZTtcbiAgICAvLyAvLyBGaXJzdCByZWNvcmRcbiAgICAvLyBpZiAodHlwZW9mIG1EYXRhID09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gICAgIHZhciBtRGF0YSA9IG5ldyBBcnJheSgpO1xuICAgIC8vIH1cblxuICAgIC8vIGNyZWF0ZSBhcnJheSBmb3IgYWxsIHBhcmFtZXRlcnMsIHRvIGhhdmUgb25seSBvbmUgY29kZWxpbmUgZm9yIGhhbmRsaW5nXG4gICAga2V5ID0gZW5zdXJlQXJyYXkoa2V5KTtcbiAgICB2YWwgPSBlbnN1cmVBcnJheSh2YWwpO1xuICAgIG9wZXIgPSBlbnN1cmVPcGVyYXRvcihvcGVyLCBrZXkubGVuZ3RoKTtcblxuICAgIGlmIChrZXkubGVuZ3RoICE9IHZhbC5sZW5ndGggfHwga2V5Lmxlbmd0aCAhPSBvcGVyLmxlbmd0aCkgcmV0dXJuOyAvLyBwYXJhbWV0ZXIgYXJyYXlzIG5vdCBlcXVhbCBzaXplXG5cbiAgICAvLyBVcGRhdGVcbiAgICBjb25zdCB1cGRhdGVzID0gW107XG4gICAgaWYgKGtleS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAobGV0IGFpLCBpID0gYXJyLmxlbmd0aDsgaS0tOyApIHtcbiAgICAgICAgICAgIGlmIChDb21wYXJlT2JqV2l0aEFycmF5KGFycltpXSwga2V5LCB2YWwsIG9wZXIpKSB7XG4gICAgICAgICAgICAgICAgYXJyW2ldID0gcmVjO1xuICAgICAgICAgICAgICAgIHVwZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdXBkYXRlcy5wdXNoKGFycltpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHVwZCAhPT0gdHJ1ZSkge1xuICAgICAgICBhcnIucHVzaChyZWMpO1xuICAgIH1cbiAgICBvU291cmNlLnVwZGF0ZURhdGEoYXJyKTtcblxuICAgIGlmICh0eXBlb2YgY2FsbEJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2FsbEJhY2sodXBkYXRlcyk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gVXBkYXRlQXJyYXkoYXJnc09iamVjdCwga2V5LCB1cGRhdGVBcnIsIG9wZXIpIHtcbiAgICBsZXQgc291cmNlID0gYXJnc09iamVjdDtcbiAgICBsZXQgZm5DYWxsQmFjazsgLy8gZGVmaW5lIGhlcmUsIGJlY2F1c2Ugd2FzIG5vdCBhIGxlZ2FjeSBhcmd1bWVudFxuICAgIGxldCBjYWxsQmFjaztcbiAgICBpZiAoaXNBcmdzT2JqZWN0KGFyZ3NPYmplY3QpKSB7XG4gICAgICAgIHNvdXJjZSA9IGFyZ3NPYmplY3Quc291cmNlO1xuICAgICAgICBrZXkgPSBhcmdzT2JqZWN0LmtleXM7XG4gICAgICAgIHVwZGF0ZUFyciA9IGFyZ3NPYmplY3QuZGF0YTtcbiAgICAgICAgb3BlciA9IGFyZ3NPYmplY3Qub3BlcmF0b3JzO1xuICAgICAgICBjYWxsQmFjayA9IGFyZ3NPYmplY3QuZm5DYWxsYmFjaztcbiAgICB9XG5cbiAgICBjb25zdCBvU291cmNlID0gZ2V0TW9kZWxEYXRhU291cmNlKHNvdXJjZSk7XG4gICAgY29uc3QgYXJyID0gb1NvdXJjZS5nZXRBcnJheSgpO1xuICAgIC8vIHZhciBtb2RlbCA9IGdldE1vZGVsKG9iaik7XG4gICAgLy8gdmFyIG1EYXRhID0gbW9kZWwub0RhdGE7XG4gICAgbGV0IHVwZCA9IGZhbHNlO1xuICAgIC8vIC8vIEZpcnN0IHJlY29yZFxuICAgIC8vIGlmICh0eXBlb2YgbURhdGEubGVuZ3RoID09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gICAgIG1EYXRhID0gW107XG4gICAgLy8gfVxuXG4gICAgLy8gY3JlYXRlIGFycmF5IGZvciBhbGwgcGFyYW1ldGVycywgdG8gaGF2ZSBvbmx5IG9uZSBjb2RlbGluZSBmb3IgaGFuZGxpbmdcbiAgICBrZXkgPSBlbnN1cmVBcnJheShrZXkpO1xuICAgIG9wZXIgPSBlbnN1cmVPcGVyYXRvcihvcGVyLCBrZXkubGVuZ3RoKTtcblxuICAgIGlmIChrZXkubGVuZ3RoICE9IG9wZXIubGVuZ3RoKSByZXR1cm47IC8vIHBhcmFtZXRlciBhcnJheXMgbm90IGVxdWFsIHNpemVcblxuICAgIC8vICQuZWFjaCh1cGRhdGVBcnIsIGZ1bmN0aW9uKGksIG5ld0RhdGEpIHtcbiAgICBjb25zdCB1cGRhdGVzID0gW107XG4gICAgdXBkYXRlQXJyLmZvckVhY2goZnVuY3Rpb24gKG5ld0RhdGEpIHtcbiAgICAgICAgdXBkID0gZmFsc2U7XG4gICAgICAgIGlmIChrZXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoQ29tcGFyZU9ialdpdGhPYmooYXJyW2ldLCBrZXksIG5ld0RhdGEsIG9wZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFycltpXSA9IG5ld0RhdGE7XG4gICAgICAgICAgICAgICAgICAgIHVwZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZXMucHVzaChhcnJbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodXBkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgYXJyLnB1c2gobmV3RGF0YSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBvU291cmNlLnVwZGF0ZURhdGEoYXJyKTtcblxuICAgIGlmICh0eXBlb2YgY2FsbEJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2FsbEJhY2sodXBkYXRlcyk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0TW9kZWwgPSB2NF9nZXRNb2RlbDtcbiIsICJpbXBvcnQgKiBhcyBNb2RlbERhdGFDb21tb24gZnJvbSAnLi4vY29tbW9uL21vZGVsZGF0YSc7XG5cbmV4cG9ydCBjb25zdCBNb2RlbERhdGEgPSB7XG4gICAgLi4uTW9kZWxEYXRhQ29tbW9uLFxufTtcbiIsICJpbXBvcnQgKiBhcyBDcnlwdG9KUyBmcm9tICdjcnlwdG8tanMnO1xuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBBcHBTdG9yYWdlIHtcbiAgICBDcnlwdG9KUyA9IENyeXB0b0pTO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGVkaXRpb25UeXBlOiB0eXBlcy5FZGl0aW9uVHlwZSB8IHVuZGVmaW5lZDtcblxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcihlZGl0aW9uVHlwZT86IHR5cGVzLkVkaXRpb25UeXBlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdBcHBTdG9yYWdlIGNyZWF0ZWQnKTtcbiAgICAgICAgdGhpcy5lZGl0aW9uVHlwZSA9IGVkaXRpb25UeXBlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogQXBwU3RvcmFnZSB7XG4gICAgICAgIHJldHVybiBuZXcgQXBwU3RvcmFnZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb21tb24oaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBDYWxsZWQgQXBwU3RvcmFnZS5jb21tb24gd2l0aCAke2lucHV0fWApO1xuICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbW1vblJlZGVmaW5lZChpbnB1dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tbW9uKGlucHV0KTtcbiAgICB9XG59XG4iLCAiaW1wb3J0IHsgRWRpdGlvblR5cGUgfSBmcm9tICcuLi9jb21tb24vdHlwZXMnO1xuaW1wb3J0IHsgQXBwU3RvcmFnZSB9IGZyb20gJy4uL2NvbW1vbi9hcHBzdG9yYWdlJztcblxuZXhwb3J0IGNsYXNzIEFwcFN0b3JhZ2VPRSBleHRlbmRzIEFwcFN0b3JhZ2Uge1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogQXBwU3RvcmFnZSB7XG4gICAgICAgIHJldHVybiBuZXcgQXBwU3RvcmFnZU9FKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihFZGl0aW9uVHlwZS5vcGVuRWRpdGlvbik7XG4gICAgfVxuXG4gICAgcHVibGljIG9wZW5NZXRob2QoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnNvbGUubG9nKGlucHV0KTtcbiAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cblxuICAgIHB1YmxpYyBjb21tb25SZWRlZmluZWQoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvcGVuIGVkaXRpb24gcmVkZWZpbmVkIHRoaXMnKTtcbiAgICAgICAgaW5wdXQgKz0gJyByZWRlZmluZWQgT0UnO1xuICAgICAgICByZXR1cm4gc3VwZXIuY29tbW9uUmVkZWZpbmVkKGlucHV0KTtcbiAgICB9XG59XG4iLCAiaW1wb3J0ICogYXMgcDlMaWIgZnJvbSAnLi9wOWxpYnJhcnknO1xuaW1wb3J0IHsgTW9kZWxEYXRhIH0gZnJvbSAnLi9tb2RlbGRhdGEnO1xuaW1wb3J0IHsgQXBwU3RvcmFnZU9FIH0gZnJvbSAnLi9hcHBzdG9yYWdlJztcblxuZGVjbGFyZSBnbG9iYWwge1xuICAgIGludGVyZmFjZSBXaW5kb3cge1xuICAgICAgICBNb2RlbERhdGE6IHR5cGVvZiBNb2RlbERhdGE7XG4gICAgICAgIEFwcFN0b3JhZ2U6IHR5cGVvZiBBcHBTdG9yYWdlT0U7XG4gICAgfVxufVxuXG53aW5kb3cuQXBwU3RvcmFnZSA9IEFwcFN0b3JhZ2VPRTtcbndpbmRvdy5Nb2RlbERhdGEgPSBNb2RlbERhdGE7XG5PYmplY3QuYXNzaWduKHdpbmRvdywgeyAuLi5wOUxpYiB9KTtcbiJdLAogICJt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QUcsR0FBRyxHQUFHLEdBQUcsWUFBYSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3hDLGtCQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxhQUFhLElBQUksRUFBRSxFQUFFLENBQUM7QUFDekMsa0JBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLGFBQWEsSUFBSSxFQUFFLEVBQUUsQ0FBQztBQUN6QyxrQkFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsYUFBYSxHQUFJLEVBQUUsRUFBRSxDQUFDO0FBQ3pDLGtCQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxhQUFhLElBQUksRUFBRSxFQUFFLENBQUM7QUFDekMsa0JBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLGFBQWEsSUFBSSxFQUFFLEVBQUUsQ0FBQztBQUN6QyxrQkFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsYUFBYSxJQUFJLEVBQUUsRUFBRSxDQUFDO0FBRXpDLGtCQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxZQUFhLEdBQUksRUFBRSxFQUFFLENBQUM7QUFDekMsa0JBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLFlBQWEsR0FBSSxFQUFFLEVBQUUsQ0FBQztBQUN6QyxrQkFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsYUFBYSxJQUFJLEVBQUUsRUFBRSxDQUFDO0FBQ3pDLGtCQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxZQUFhLElBQUksRUFBRSxFQUFFLENBQUM7QUFDekMsa0JBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLFlBQWEsR0FBSSxFQUFFLEVBQUUsQ0FBQztBQUN6QyxrQkFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsYUFBYSxHQUFJLEVBQUUsRUFBRSxDQUFDO0FBQ3pDLGtCQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxhQUFhLElBQUksRUFBRSxFQUFFLENBQUM7QUFDekMsa0JBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLFlBQWEsSUFBSSxFQUFFLEVBQUUsQ0FBQztBQUN6QyxrQkFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsWUFBYSxHQUFJLEVBQUUsRUFBRSxDQUFDO0FBQ3pDLGtCQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxhQUFhLEdBQUksRUFBRSxFQUFFLENBQUM7QUFDekMsa0JBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLFlBQWEsSUFBSSxFQUFFLEVBQUUsQ0FBQztBQUN6QyxrQkFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsWUFBYSxJQUFJLEVBQUUsRUFBRSxDQUFDO0FBQ3pDLGtCQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxhQUFhLEdBQUksRUFBRSxFQUFFLENBQUM7QUFDekMsa0JBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLFlBQWEsR0FBSSxFQUFFLEVBQUUsQ0FBQztBQUN6QyxrQkFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsWUFBYSxJQUFJLEVBQUUsRUFBRSxDQUFDO0FBQ3pDLGtCQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxhQUFhLElBQUksRUFBRSxFQUFFLENBQUM7QUFFekMsa0JBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLFlBQWEsR0FBSSxFQUFFLEVBQUUsQ0FBQztBQUN6QyxrQkFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsWUFBYSxJQUFJLEVBQUUsRUFBRSxDQUFDO0FBQ3pDLGtCQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxhQUFhLElBQUksRUFBRSxFQUFFLENBQUM7QUFDekMsa0JBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLGFBQWEsSUFBSSxFQUFFLEVBQUUsQ0FBQztBQUN6QyxrQkFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsWUFBYSxHQUFJLEVBQUUsRUFBRSxDQUFDO0FBQ3pDLGtCQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxZQUFhLElBQUksRUFBRSxFQUFFLENBQUM7QUFDekMsa0JBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLFlBQWEsSUFBSSxFQUFFLEVBQUUsQ0FBQztBQUN6QyxrQkFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsYUFBYSxJQUFJLEVBQUUsRUFBRSxDQUFDO0FBQ3pDLGtCQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxhQUFhLEdBQUksRUFBRSxFQUFFLENBQUM7QUFDekMsa0JBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLFlBQWEsSUFBSSxFQUFFLEVBQUUsQ0FBQztBQUN6QyxrQkFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsWUFBYSxJQUFJLEVBQUUsRUFBRSxDQUFDO0FBQ3pDLGtCQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxZQUFhLElBQUksRUFBRSxFQUFFLENBQUM7QUFDekMsa0JBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLFlBQWEsR0FBSSxFQUFFLEVBQUUsQ0FBQztBQUN6QyxrQkFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsYUFBYSxJQUFJLEVBQUUsRUFBRSxDQUFDO0FBQ3pDLGtCQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxhQUFhLElBQUksRUFBRSxFQUFFLENBQUM7QUFDekMsa0JBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLFlBQWEsSUFBSSxFQUFFLEVBQUUsQ0FBQztBQUV6QyxrQkFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsWUFBYSxHQUFJLEVBQUUsRUFBRSxDQUFDO0FBQ3pDLGtCQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxZQUFhLElBQUksRUFBRSxFQUFFLENBQUM7QUFDekMsa0JBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLGFBQWEsSUFBSSxFQUFFLEVBQUUsQ0FBQztBQUN6QyxrQkFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsWUFBYSxJQUFJLEVBQUUsRUFBRSxDQUFDO0FBQ3pDLGtCQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxhQUFhLEdBQUksRUFBRSxF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bUJBQVMsaUJBQWlCO0FBQ3RCLG1CQUFPLFFBQVEsT0FBTyxNQUFNLFNBQVMsU0FBUztBQUFBLFVBQ2xEO0FBR0EsY0FBSSxJQUFJO0FBQUEsWUFDSixlQUFlLFlBQVksVUFBVTtBQUFBLFlBQUcsZUFBZSxZQUFZLFNBQVU7QUFBQSxZQUM3RSxlQUFlLFlBQVksVUFBVTtBQUFBLFlBQUcsZUFBZSxZQUFZLFVBQVU7QUFBQSxZQUM3RSxlQUFlLFdBQVksVUFBVTtBQUFBLFlBQUcsZUFBZSxZQUFZLFVBQVU7QUFBQSxZQUM3RSxlQUFlLFlBQVksVUFBVTtBQUFBLFlBQUcsZUFBZSxZQUFZLFVBQVU7QUFBQSxZQUM3RSxlQUFlLFlBQVksVUFBVTtBQUFBLFlBQUcsZUFBZSxXQUFZLFVBQVU7QUFBQSxZQUM3RSxlQUFlLFdBQVksVUFBVTtBQUFBLFlBQUcsZUFBZSxZQUFZLFVBQVU7QUFBQSxZQUM3RSxlQUFlLFlBQVksVUFBVTtBQUFBLFlBQUcsZUFBZSxZQUFZLFNBQVU7QUFBQSxZQUM3RSxlQUFlLFlBQVksU0FBVTtBQUFBLFlBQUcsZUFBZSxZQUFZLFVBQVU7QUFBQSxZQUM3RSxlQUFlLFlBQVksVUFBVTtBQUFBLFlBQUcsZUFBZSxZQUFZLFNBQVU7QUFBQSxZQUM3RSxlQUFlLFdBQVksVUFBVTtBQUFBLFlBQUcsZUFBZSxXQUFZLFVBQVU7QUFBQSxZQUM3RSxlQUFlLFdBQVksVUFBVTtBQUFBLFlBQUcsZUFBZSxZQUFZLFVBQVU7QUFBQSxZQUM3RSxlQUFlLFlBQVksVUFBVTtBQUFBLFlBQUcsZUFBZSxZQUFZLFVBQVU7QUFBQSxZQUM3RSxlQUFlLFlBQVksVUFBVTtBQUFBLFlBQUcsZUFBZSxZQUFZLFNBQVU7QUFBQSxZQUM3RSxlQUFlLFlBQVksVUFBVTtBQUFBLFlBQUcsZUFBZSxZQUFZLFVBQVU7QUFBQSxZQUM3RSxlQUFlLFlBQVksVUFBVTtBQUFBLFlBQUcsZUFBZSxZQUFZLFVBQVU7QUFBQSxZQUM3RSxlQUFlLFdBQVksVUFBVTtBQUFBLFlBQUcsZUFBZSxXQUFZLFNBQVU7QUFBQSxZQUM3RSxlQUFlLFdBQVksVUFBVTtBQUFBLFlBQUcsZUFBZSxXQUFZLFVBQVU7QUFBQSxZQUM3RSxlQUFlLFlBQVksVUFBVTtBQUFBLFlBQUcsZUFBZSxZQUFZLFVBQVU7QUFBQSxZQUM3RSxlQUFlLFlBQVksVUFBVTtBQUFBLFlBQUcsZUFBZSxZQUFZLFVBQVU7QUFBQSxZQUM3RSxlQUFlLFlBQVksVUFBVTtBQUFBLFlBQUcsZUFBZSxZQUFZLFNBQVU7QUFBQSxZQUM3RSxlQUFlLFlBQVksVUFBVTtBQUFBLFlBQUcsZUFBZSxZQUFZLFVBQVU7QUFBQSxZQUM3RSxlQUFlLFlBQVksVUFBVTtBQUFBLFlBQUcsZUFBZSxZQUFZLFNBQVU7QUFBQSxZQUM3RSxlQUFlLFlBQVksVUFBVTtBQUFBLFlBQUcsZUFBZSxZQUFZLFVBQVU7QUFBQSxZQUM3RSxlQUFlLFlBQVksVUFBVTtBQUFBLFlBQUcsZUFBZSxXQUFZLFNBQVU7QUFBQSxZQUM3RSxlQUFlLFdBQVksVUFBVTtBQUFBLFlBQUcsZUFBZSxXQUFZLFVBQVU7QUFBQSxZQUM3RSxlQUFlLFdBQVksVUFBVTtBQUFBLFlBQUcsZUFBZSxXQUFZLFVBQVU7QUFBQSxZQUM3RSxlQUFlLFdBQVksVUFBVTtBQUFBLFlBQUcsZUFBZSxZQUFZLFVBQVU7QUFBQSxZQUM3RSxlQUFlLFlBQVksVUFBVTtBQUFBLFlBQUcsZUFBZSxZQUFZLFVBQVU7QUFBQSxZQUM3RSxlQUFlLFlBQVksVUFBVTtBQUFBLFlBQUcsZUFBZSxZQUFZLFVBQVU7QUFBQSxZQUM3RSxlQUFlLFlBQVksVUFBVTtBQUFBLFlBQUcsZUFBZSxZQUFZLFNBQVU7QUFBQSxZQUM3RSxlQUFlLFlBQVksU0FBVTtBQUFBLFlBQUcsZUFBZSxZQUFZLFVBQVU7QUFBQSxZQUM3RSxlQUFlLFlBQVksVUFBVTtBQUFBLFlBQUcsZUFBZSxZQUFZLFVBQVU7QUFBQSxZQUM3RSxlQUFlLFlBQVksVUFBVTtBQUFBLFlBQUcsZUFBZSxZQUFZLFNBQVU7QUFBQSxZQUM3RSxlQUFlLFlBQVksVUFBVTtBQUFBLFlBQUcsZUFBZSxZ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STtBQUFBLFlBQUc7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQzNEO0FBQUEsWUFBSTtBQUFBLFlBQUc7QUFBQSxZQUFLO0FBQUEsWUFBRztBQUFBLFlBQUs7QUFBQSxZQUFHO0FBQUEsWUFBSztBQUFBLFlBQUc7QUFBQSxZQUFLO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBRztBQUFBLFlBQUk7QUFBQSxZQUFLO0FBQUEsWUFDNUQ7QUFBQSxZQUFHO0FBQUEsWUFBSTtBQUFBLFlBQUs7QUFBQSxZQUFJO0FBQUEsWUFBRztBQUFBLFlBQUs7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUc7QUFBQSxZQUFJO0FBQUEsWUFBSztBQUFBLFlBQUc7QUFBQSxZQUMzRDtBQUFBLFlBQUk7QUFBQSxZQUFHO0FBQUEsWUFBSTtBQUFBLFlBQUs7QUFBQSxZQUFJO0FBQUEsWUFBRztBQUFBLFlBQUs7QUFBQSxZQUFHO0FBQUEsWUFBSztBQUFBLFlBQUk7QUFBQSxZQUFHO0FBQUEsWUFBSTtBQUFBLFlBQUs7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQzVEO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUc7QUFBQSxZQUFLO0FBQUEsWUFBRztBQUFBLFlBQUk7QUFBQSxZQUFLO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFHO0FBQUEsWUFBSztBQUFBLFlBQUc7QUFBQSxZQUFJO0FBQUEsVUFBRSxDQUFDO0FBQ2xFLGNBQUksTUFBTSxVQUFVLE9BQU87QUFBQSxZQUN2QjtBQUFBLFlBQUc7QUFBQSxZQUFLO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBRztBQUFBLFlBQUs7QUFBQSxZQUFHO0FBQUEsWUFBSztBQUFBLFlBQUc7QUFBQSxZQUFLO0FBQUEsWUFBSTtBQUFBLFlBQUc7QUFBQSxZQUFLO0FBQUEsWUFBRztBQUFBLFlBQzNEO0FBQUEsWUFBRztBQUFBLFlBQUs7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUc7QUFBQSxZQUFLO0FBQUEsWUFBRztBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSztBQUFBLFlBQUc7QUFBQSxZQUFLO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFDNUQ7QUFBQSxZQUFLO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBRztBQUFBLFlBQUs7QUFBQSxZQUFJO0FBQUEsWUFBRztBQUFBLFlBQUs7QUFBQSxZQUFHO0FBQUEsWUFBSztBQUFBLFlBQUc7QUFBQSxZQUFLO0FBQUEsWUFBSTtBQUFBLFlBQUc7QUFBQSxZQUM1RDtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFHO0FBQUEsWUFBSTtBQUFBLFlBQUs7QUFBQSxZQUFJO0FBQUEsWUFBRztBQUFBLFlBQUs7QUFBQSxZQUFHO0FBQUEsWUFBSztBQUFBLFlBQUk7QUFBQSxZQUFHO0FBQUEsWUFBSTtBQUFBLFlBQzNEO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFLO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBRztBQUFBLFlBQUk7QUFBQSxZQUFLO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFHO0FBQUEsVUFBRSxDQUFDO0FBQ25FLGNBQUksTUFBTSxVQUFVLE9BQU87QUFBQSxZQUN0QjtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUs7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFHO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSztBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQzlEO0FBQUEsWUFBRztBQUFBLFlBQUs7QUFBQSxZQUFHO0FBQUEsWUFBSTtBQUFBLFlBQUs7QUFBQSxZQUFJO0FBQUEsWUFBRztBQUFBLFlBQUs7QUFBQSxZQUFHO0FBQUEsWUFBSTtBQUFBLFlBQUs7QUFBQSxZQUFHO0FBQUEsWUFBSztBQUFBLFlBQUc7QUFBQSxZQUFJO0FBQUEsWUFDM0Q7QUFBQSxZQUFJO0FBQUEsWUFBSztBQUFBLFlBQUk7QUFBQSxZQUFHO0FBQUEsWUFBSztBQUFBLFlBQUc7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUs7QUFBQSxZQUFHO0FBQUEsWUFBSztBQUFBLFlBQUk7QUFBQSxZQUFHO0FBQUEsWUFBSztBQUFBLFlBQUk7QUFBQSxZQUMzRDtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSztBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBRztBQUFBLFlBQUs7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBRztBQUFBLFlBQzlEO0FBQUEsWUFBRztBQUFBLFlBQUs7QUFBQSxZQUFHO0FBQUEsWUFBSztBQUFBLFlBQUk7QUFBQSxZQUFHO0FBQUEsWUFBSTtBQUFBLFlBQUs7QUFBQSxZQUFHO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSztBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsVUFBRSxDQUFDO0FBQ25FLGNBQUksTUFBTSxVQUFVLE9BQU87QUFBQSxZQUN2QjtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBRztBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUs7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFHO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSztBQUFBLFlBQzVEO0FBQUEsWUFBRztBQUFBLFlBQUk7QUFBQSxZQUFLO0FBQUEsWUFBRztBQUFBLFlBQUs7QUFBQSxZQUFJO0FBQUEsWUFBRztBQUFBLFlBQUs7QUFBQSxZQUFJO0FBQUEsWUFBRztBQUFBLFlBQUs7QUFBQSxZQUFJO0FBQUEsWUFBRztBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFDM0Q7QUFBQSxZQUFJO0FBQUEsWUFBRztBQUFBLFlBQUk7QUFBQSxZQUFLO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFHO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFLO0FBQUEsWUFBRztBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSztBQUFBLFlBQUk7QUFBQSxZQUM1RDtBQUFBLFlBQUs7QUFBQSxZQUFJO0FBQUEsWUFBRztBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSztBQUFBLFlBQUc7QUFBQSxZQUFLO0FBQUEsWUFBSTtBQUFBLFlBQUc7QUFBQSxZQUFLO0FBQUEsWUFBRztBQUFBLFlBQUs7QUFBQSxZQUFHO0FBQUEsWUFBSztBQUFBLFlBQzdEO0FBQUEsWUFBSTtBQUFBLFlBQUc7QUFBQSxZQUFLO0FBQUEsWUFBRztBQUFBLFlBQUs7QUFBQSxZQUFHO0FBQUEsWUFBSztBQUFBLFlBQUk7QUFBQSxZQUFHO0FBQUEsWUFBSztBQUFBLFlBQUk7QUFBQSxZQUFHO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsVUFBRyxDQUFDO0FBRW5FLGNBQUksTUFBTyxVQUFVLE9BQU8sQ0FBRSxHQUFZLFlBQVksWUFBWSxZQUFZLFVBQVUsQ0FBQztBQUN6RixjQUFJLE1BQU8sVUFBVSxPQUFPLENBQUUsWUFBWSxZQUFZLFlBQVksWUFBWSxDQUFVLENBQUM7QUFLekYsY0FBSSxZQUFZLE9BQU8sWUFBWSxPQUFPLE9BQU87QUFBQSxZQUM3QyxVQUFVLFdBQVk7QUFDbEIsbUJBQUssUUFBUyxVQUFVLE9BQU8sQ0FBQyxZQUFZLFlBQVksWUFBWSxXQUFZLFVBQVUsQ0FBQztBQUFBLFlBQy9GO0FBQUEsWUFFQSxpQkFBaUIsU0FBVSxHQUFHLFFBQVE7QUFHbEMsdUJBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLO0FBRXpCLG9CQUFJLFdBQVcsU0FBUztBQUN4QixvQkFBSSxhQUFhLEVBQUUsUUFBUTtBQUczQixrQkFBRSxRQUFRLEtBQ0gsY0FBYyxJQUFPLGVBQWUsTUFBTyxZQUMzQyxjQUFjLEtBQU8sZUFBZSxLQUFPO0FBQUEsY0FFdEQ7QUFFQSxrQkFBSSxJQUFLLEtBQUssTUFBTTtBQUNwQixrQkFBSSxLQUFLLElBQUk7QUFDYixrQkFBSSxLQUFLLElBQUk7QUFDYixrQkFBSSxLQUFLLElBQUk7QUFDYixrQkFBSSxLQUFLLElBQUk7QUFDYixrQkFBSSxLQUFLLElBQUk7QUFDYixrQkFBSSxLQUFLLElBQUk7QUFHYixrQkFBSSxJQUFJLElBQUksSUFBSSxJQUFJO0FBQ3BCLGtCQUFJLElBQUksSUFBSSxJQUFJLElBQUk7QUFFcEIsbUJBQUssS0FBSyxFQUFFLENBQUM7QUFDYixtQkFBSyxLQUFLLEVBQUUsQ0FBQztBQUNiLG1CQUFLLEtBQUssRUFBRSxDQUFDO0FBQ2IsbUJBQUssS0FBSyxFQUFFLENBQUM7QUFDYixtQkFBSyxLQUFLLEVBQUUsQ0FBQztBQUViLGtCQUFJO0FBQ0osdUJBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLLEdBQUc7QUFDNUIsb0JBQUssS0FBTSxFQUFFLFNBQU8sR0FBRyxDQUFDLENBQUMsSUFBRztBQUM1QixvQkFBSSxJQUFFLElBQUc7QUFDWix1QkFBTSxHQUFHLElBQUcsSUFBRyxFQUFFLElBQUksR0FBRyxDQUFDO0FBQUEsZ0JBQ3RCLFdBQVcsSUFBRSxJQUFJO0FBQ3BCLHVCQUFNLEdBQUcsSUFBRyxJQUFHLEVBQUUsSUFBSSxHQUFHLENBQUM7QUFBQSxnQkFDdEIsV0FBVyxJQUFFLElBQUk7QUFDcEIsdUJBQU0sR0FBRyxJQUFHLElBQUcsRUFBRSxJQUFJLEdBQUcsQ0FBQztBQUFBLGdCQUN0QixXQUFXLElBQUUsSUFBSTtBQUNwQix1QkFBTSxHQUFHLElBQUcsSUFBRyxFQUFFLElBQUksR0FBRyxDQUFDO0FBQUEsZ0JBQ3RCLE9BQU87QUFDVix1QkFBTSxHQUFHLElBQUcsSUFBRyxFQUFFLElBQUksR0FBRyxDQUFDO0FBQUEsZ0JBQ3RCO0FBQ0Esb0JBQUksSUFBRTtBQUNOLG9CQUFLLEtBQUssR0FBRSxHQUFHLENBQUMsQ0FBQztBQUNqQixvQkFBSyxJQUFFLEtBQUk7QUFDWCxxQkFBSztBQUNMLHFCQUFLO0FBQ0wscUJBQUssS0FBSyxJQUFJLEVBQUU7QUFDaEIscUJBQUs7QUFDTCxxQkFBSztBQUVMLG9CQUFLLEtBQUssRUFBRSxTQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUc7QUFDM0Isb0JBQUksSUFBRSxJQUFHO0FBQ1osdUJBQU0sR0FBRyxJQUFHLElBQUcsRUFBRSxJQUFJLEdBQUcsQ0FBQztBQUFBLGdCQUN0QixXQUFXLElBQUUsSUFBSTtBQUNwQix1QkFBTSxHQUFHLElBQUcsSUFBRyxFQUFFLElBQUksR0FBRyxDQUFDO0FBQUEsZ0JBQ3RCLFdBQVcsSUFBRSxJQUFJO0FBQ3BCLHVCQUFNLEdBQUcsSUFBRyxJQUFHLEVBQUUsSUFBSSxHQUFHLENBQUM7QUFBQSxnQkFDdEIsV0FBVyxJQUFFLElBQUk7QUFDcEIsdUJBQU0sR0FBRyxJQUFHLElBQUcsRUFBRSxJQUFJLEdBQUcsQ0FBQztBQUFBLGdCQUN0QixPQUFPO0FBQ1YsdUJBQU0sR0FBRyxJQUFHLElBQUcsRUFBRSxJQUFJLEdBQUcsQ0FBQztBQUFBLGdCQUN0QjtBQUNBLG9CQUFJLElBQUU7QUFDTixvQkFBSyxLQUFLLEdBQUUsR0FBRyxDQUFDLENBQUM7QUFDakIsb0JBQUssSUFBRSxLQUFJO0FBQ1gscUJBQUs7QUFDTCxxQkFBSztBQUNMLHFCQUFLLEtBQUssSUFBSSxFQUFFO0FBQ2hCLHFCQUFLO0FBQ0wscUJBQUs7QUFBQSxjQUNUO0FBRUEsa0JBQVEsRUFBRSxDQUFDLElBQUksS0FBSyxLQUFJO0FBQ3hCLGdCQUFFLENBQUMsSUFBSyxFQUFFLENBQUMsSUFBSSxLQUFLLEtBQUk7QUFDeEIsZ0JBQUUsQ0FBQyxJQUFLLEVBQUUsQ0FBQyxJQUFJLEtBQUssS0FBSTtBQUN4QixnQkFBRSxDQUFDLElBQUssRUFBRSxDQUFDLElBQUksS0FBSyxLQUFJO0FBQ3hCLGdCQUFFLENBQUMsSUFBSyxFQUFFLENBQUMsSUFBSSxLQUFLLEtBQUk7QUFDeEIsZ0JBQUUsQ0FBQyxJQUFLO0FBQUEsWUFDWjtBQUFBLFlBRUEsYUFBYSxXQUFZO0FBRXJCLGtCQUFJLE9BQU8sS0FBSztBQUNoQixrQkFBSSxZQUFZLEtBQUs7QUFFckIsa0JBQUksYUFBYSxLQUFLLGNBQWM7QUFDcEMsa0JBQUksWUFBWSxLQUFLLFdBQVc7QUFHaEMsd0JBQVUsY0FBYyxDQUFDLEtBQUssT0FBUyxLQUFLLFlBQVk7QUFDeEQseUJBQWEsWUFBWSxPQUFRLEtBQU0sS0FBSyxFQUFFLEtBQ3ZDLGNBQWMsSUFBTyxlQUFlLE1BQU8sWUFDM0MsY0FBYyxLQUFPLGVBQWUsS0FBTztBQUVsRCxtQkFBSyxZQUFZLFVBQVUsU0FBUyxLQUFLO0FBR3pDLG1CQUFLLFNBQVM7QUFHZCxrQkFBSSxPQUFPLEtBQUs7QUFDaEIsa0JBQUksSUFBSSxLQUFLO0FBR2IsdUJBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLO0FBRXhCLG9CQUFJLE1BQU0sRUFBRSxDQUFDO0FBR2Isa0JBQUUsQ0FBQyxLQUFPLE9BQU8sSUFBTyxRQUFRLE1BQU8sWUFDN0IsT0FBTyxLQUFPLFFBQVEsS0FBTztBQUFBLGNBQzNDO0FBR0EscUJBQU87QUFBQSxZQUNYO0FBQUEsWUFFQSxPQUFPLFdBQVk7QUFDZixrQkFBSSxRQUFRLE9BQU8sTUFBTSxLQUFLLElBQUk7QUFDbEMsb0JBQU0sUUFBUSxLQUFLLE1BQU0sTUFBTTtBQUUvQixxQkFBTztBQUFBLFlBQ1g7QUFBQSxVQUNKLENBQUM7QUFHRCxtQkFBUyxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQ2pCLG1CQUFTLElBQU0sSUFBTTtBQUFBLFVBRXpCO0FBRUEsbUJBQVMsR0FBRyxHQUFHLEdBQUcsR0FBRztBQUNqQixtQkFBVSxJQUFJLElBQVEsQ0FBQyxJQUFJO0FBQUEsVUFDL0I7QUFFQSxtQkFBUyxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQ2pCLG9CQUFVLElBQU0sQ0FBRSxLQUFRO0FBQUEsVUFDOUI7QUFFQSxtQkFBUyxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQ2pCLG1CQUFVLElBQU0sSUFBUSxJQUFJLENBQUU7QUFBQSxVQUNsQztBQUVBLG1CQUFTLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFDakIsbUJBQVMsS0FBTyxJQUFLLENBQUU7QUFBQSxVQUUzQjtBQUVBLG1CQUFTLEtBQUssR0FBRSxHQUFHO0FBQ2YsbUJBQVEsS0FBRyxJQUFNLE1BQUssS0FBRztBQUFBLFVBQzdCO0FBaUJBLFlBQUUsWUFBWSxPQUFPLGNBQWMsU0FBUztBQWdCNUMsWUFBRSxnQkFBZ0IsT0FBTyxrQkFBa0IsU0FBUztBQUFBLFFBQ3hELEdBQUUsSUFBSTtBQUdOLGVBQU9BLFVBQVM7QUFBQSxNQUVqQixDQUFDO0FBQUE7QUFBQTs7O0FDMVFEO0FBQUEsOENBQUFFLFNBQUE7QUFBQyxPQUFDLFNBQVUsTUFBTSxTQUFTO0FBQzFCLFlBQUksT0FBTyxZQUFZLFVBQVU7QUFFaEMsVUFBQUEsUUFBTyxVQUFVLFVBQVUsUUFBUSxjQUFpQjtBQUFBLFFBQ3JELFdBQ1MsT0FBTyxXQUFXLGNBQWMsT0FBTyxLQUFLO0FBRXBELGlCQUFPLENBQUMsUUFBUSxHQUFHLE9BQU87QUFBQSxRQUMzQixPQUNLO0FBRUosa0JBQVEsS0FBSyxRQUFRO0FBQUEsUUFDdEI7QUFBQSxNQUNELEdBQUUsU0FBTSxTQUFVQyxXQUFVO0FBRTNCLFNBQUMsV0FBWTtBQUVULGNBQUksSUFBSUE7QUFDUixjQUFJLFFBQVEsRUFBRTtBQUNkLGNBQUksT0FBTyxNQUFNO0FBQ2pCLGNBQUksUUFBUSxFQUFFO0FBQ2QsY0FBSSxPQUFPLE1BQU07QUFDakIsY0FBSSxTQUFTLEVBQUU7QUFLZixjQUFJLE9BQU8sT0FBTyxPQUFPLEtBQUssT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFXakMsTUFBTSxTQUFVLFFBQVEsS0FBSztBQUV6Qix1QkFBUyxLQUFLLFVBQVUsSUFBSSxPQUFPLEtBQUs7QUFHeEMsa0JBQUksT0FBTyxPQUFPLFVBQVU7QUFDeEIsc0JBQU0sS0FBSyxNQUFNLEdBQUc7QUFBQSxjQUN4QjtBQUdBLGtCQUFJLGtCQUFrQixPQUFPO0FBQzdCLGtCQUFJLHVCQUF1QixrQkFBa0I7QUFHN0Msa0JBQUksSUFBSSxXQUFXLHNCQUFzQjtBQUNyQyxzQkFBTSxPQUFPLFNBQVMsR0FBRztBQUFBLGNBQzdCO0FBR0Esa0JBQUksTUFBTTtBQUdWLGtCQUFJLE9BQU8sS0FBSyxRQUFRLElBQUksTUFBTTtBQUNsQyxrQkFBSSxPQUFPLEtBQUssUUFBUSxJQUFJLE1BQU07QUFHbEMsa0JBQUksWUFBWSxLQUFLO0FBQ3JCLGtCQUFJLFlBQVksS0FBSztBQUdyQix1QkFBUyxJQUFJLEdBQUcsSUFBSSxpQkFBaUIsS0FBSztBQUN0QywwQkFBVSxDQUFDLEtBQUs7QUFDaEIsMEJBQVUsQ0FBQyxLQUFLO0FBQUEsY0FDcEI7QUFDQSxtQkFBSyxXQUFXLEtBQUssV0FBVztBQUdoQyxtQkFBSyxNQUFNO0FBQUEsWUFDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFTQSxPQUFPLFdBQVk7QUFFZixrQkFBSSxTQUFTLEtBQUs7QUFHbEIscUJBQU8sTUFBTTtBQUNiLHFCQUFPLE9BQU8sS0FBSyxLQUFLO0FBQUEsWUFDNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWNBLFFBQVEsU0FBVSxlQUFlO0FBQzdCLG1CQUFLLFFBQVEsT0FBTyxhQUFhO0FBR2pDLHFCQUFPO0FBQUEsWUFDWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWdCQSxVQUFVLFNBQVUsZUFBZTtBQUUvQixrQkFBSSxTQUFTLEtBQUs7QUFHbEIsa0JBQUksWUFBWSxPQUFPLFNBQVMsYUFBYTtBQUM3QyxxQkFBTyxNQUFNO0FBQ2Isa0JBQUksT0FBTyxPQUFPLFNBQVMsS0FBSyxNQUFNLE1BQU0sRUFBRSxPQUFPLFNBQVMsQ0FBQztBQUUvRCxxQkFBTztBQUFBLFlBQ1g7QUFBQSxVQUNKLENBQUM7QUFBQSxRQUNMLEdBQUU7QUFBQSxNQUdILENBQUM7QUFBQTtBQUFBOzs7QUM5SUQ7QUFBQSxnREFBQUMsU0FBQTtBQUFDLE9BQUMsU0FBVSxNQUFNLFNBQVMsT0FBTztBQUNqQyxZQUFJLE9BQU8sWUFBWSxVQUFVO0FBRWhDLFVBQUFBLFFBQU8sVUFBVSxVQUFVLFFBQVEsZ0JBQW1CLGdCQUFtQixjQUFpQjtBQUFBLFFBQzNGLFdBQ1MsT0FBTyxXQUFXLGNBQWMsT0FBTyxLQUFLO0FBRXBELGlCQUFPLENBQUMsVUFBVSxVQUFVLFFBQVEsR0FBRyxPQUFPO0FBQUEsUUFDL0MsT0FDSztBQUVKLGtCQUFRLEtBQUssUUFBUTtBQUFBLFFBQ3RCO0FBQUEsTUFDRCxHQUFFLFNBQU0sU0FBVUMsV0FBVTtBQUUzQixTQUFDLFdBQVk7QUFFVCxjQUFJLElBQUlBO0FBQ1IsY0FBSSxRQUFRLEVBQUU7QUFDZCxjQUFJLE9BQU8sTUFBTTtBQUNqQixjQUFJLFlBQVksTUFBTTtBQUN0QixjQUFJLFNBQVMsRUFBRTtBQUNmLGNBQUksT0FBTyxPQUFPO0FBQ2xCLGNBQUksT0FBTyxPQUFPO0FBS2xCLGNBQUksU0FBUyxPQUFPLFNBQVMsS0FBSyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVFyQyxLQUFLLEtBQUssT0FBTztBQUFBLGNBQ2IsU0FBUyxNQUFJO0FBQUEsY0FDYixRQUFRO0FBQUEsY0FDUixZQUFZO0FBQUEsWUFDaEIsQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWFELE1BQU0sU0FBVSxLQUFLO0FBQ2pCLG1CQUFLLE1BQU0sS0FBSyxJQUFJLE9BQU8sR0FBRztBQUFBLFlBQ2xDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFjQSxTQUFTLFNBQVUsVUFBVSxNQUFNO0FBRS9CLGtCQUFJLE1BQU0sS0FBSztBQUdmLGtCQUFJLE9BQU8sS0FBSyxPQUFPLElBQUksUUFBUSxRQUFRO0FBRzNDLGtCQUFJLGFBQWEsVUFBVSxPQUFPO0FBQ2xDLGtCQUFJLGFBQWEsVUFBVSxPQUFPLENBQUMsQ0FBVSxDQUFDO0FBRzlDLGtCQUFJLGtCQUFrQixXQUFXO0FBQ2pDLGtCQUFJLGtCQUFrQixXQUFXO0FBQ2pDLGtCQUFJLFVBQVUsSUFBSTtBQUNsQixrQkFBSSxhQUFhLElBQUk7QUFHckIscUJBQU8sZ0JBQWdCLFNBQVMsU0FBUztBQUNyQyxvQkFBSSxRQUFRLEtBQUssT0FBTyxJQUFJLEVBQUUsU0FBUyxVQUFVO0FBQ2pELHFCQUFLLE1BQU07QUFHWCxvQkFBSSxhQUFhLE1BQU07QUFDdkIsb0JBQUksbUJBQW1CLFdBQVc7QUFHbEMsb0JBQUksZUFBZTtBQUNuQix5QkFBUyxJQUFJLEdBQUcsSUFBSSxZQUFZLEtBQUs7QUFDakMsaUNBQWUsS0FBSyxTQUFTLFlBQVk7QUFDekMsdUJBQUssTUFBTTtBQUdYLHNCQUFJLG9CQUFvQixhQUFhO0FBR3JDLDJCQUFTLElBQUksR0FBRyxJQUFJLGtCQUFrQixLQUFLO0FBQ3ZDLCtCQUFXLENBQUMsS0FBSyxrQkFBa0IsQ0FBQztBQUFBLGtCQUN4QztBQUFBLGdCQUNKO0FBRUEsMkJBQVcsT0FBTyxLQUFLO0FBQ3ZCLGdDQUFnQixDQUFDO0FBQUEsY0FDckI7QUFDQSx5QkFBVyxXQUFXLFVBQVU7QUFFaEMscUJBQU87QUFBQSxZQUNYO0FBQUEsVUFDSixDQUFDO0FBbUJELFlBQUUsU0FBUyxTQUFVLFVBQVUsTUFBTSxLQUFLO0FBQ3RDLG1CQUFPLE9BQU8sT0FBTyxHQUFHLEVBQUUsUUFBUSxVQUFVLElBQUk7QUFBQSxVQUNwRDtBQUFBLFFBQ0osR0FBRTtBQUdGLGVBQU9BLFVBQVM7QUFBQSxNQUVqQixDQUFDO0FBQUE7QUFBQTs7O0FDaEpEO0FBQUEsZ0RBQUFDLFNBQUE7QUFBQyxPQUFDLFNBQVUsTUFBTSxTQUFTLE9BQU87QUFDakMsWUFBSSxPQUFPLFlBQVksVUFBVTtBQUVoQyxVQUFBQSxRQUFPLFVBQVUsVUFBVSxRQUFRLGdCQUFtQixnQkFBbUIsY0FBaUI7QUFBQSxRQUMzRixXQUNTLE9BQU8sV0FBVyxjQUFjLE9BQU8sS0FBSztBQUVwRCxpQkFBTyxDQUFDLFVBQVUsVUFBVSxRQUFRLEdBQUcsT0FBTztBQUFBLFFBQy9DLE9BQ0s7QUFFSixrQkFBUSxLQUFLLFFBQVE7QUFBQSxRQUN0QjtBQUFBLE1BQ0QsR0FBRSxTQUFNLFNBQVVDLFdBQVU7QUFFM0IsU0FBQyxXQUFZO0FBRVQsY0FBSSxJQUFJQTtBQUNSLGNBQUksUUFBUSxFQUFFO0FBQ2QsY0FBSSxPQUFPLE1BQU07QUFDakIsY0FBSSxZQUFZLE1BQU07QUFDdEIsY0FBSSxTQUFTLEVBQUU7QUFDZixjQUFJLE1BQU0sT0FBTztBQU1qQixjQUFJLFNBQVMsT0FBTyxTQUFTLEtBQUssT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFRckMsS0FBSyxLQUFLLE9BQU87QUFBQSxjQUNiLFNBQVMsTUFBSTtBQUFBLGNBQ2IsUUFBUTtBQUFBLGNBQ1IsWUFBWTtBQUFBLFlBQ2hCLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFhRCxNQUFNLFNBQVUsS0FBSztBQUNqQixtQkFBSyxNQUFNLEtBQUssSUFBSSxPQUFPLEdBQUc7QUFBQSxZQUNsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBY0EsU0FBUyxTQUFVLFVBQVUsTUFBTTtBQUMvQixrQkFBSTtBQUdKLGtCQUFJLE1BQU0sS0FBSztBQUdmLGtCQUFJLFNBQVMsSUFBSSxPQUFPLE9BQU87QUFHL0Isa0JBQUksYUFBYSxVQUFVLE9BQU87QUFHbEMsa0JBQUksa0JBQWtCLFdBQVc7QUFDakMsa0JBQUksVUFBVSxJQUFJO0FBQ2xCLGtCQUFJLGFBQWEsSUFBSTtBQUdyQixxQkFBTyxnQkFBZ0IsU0FBUyxTQUFTO0FBQ3JDLG9CQUFJLE9BQU87QUFDUCx5QkFBTyxPQUFPLEtBQUs7QUFBQSxnQkFDdkI7QUFDQSx3QkFBUSxPQUFPLE9BQU8sUUFBUSxFQUFFLFNBQVMsSUFBSTtBQUM3Qyx1QkFBTyxNQUFNO0FBR2IseUJBQVMsSUFBSSxHQUFHLElBQUksWUFBWSxLQUFLO0FBQ2pDLDBCQUFRLE9BQU8sU0FBUyxLQUFLO0FBQzdCLHlCQUFPLE1BQU07QUFBQSxnQkFDakI7QUFFQSwyQkFBVyxPQUFPLEtBQUs7QUFBQSxjQUMzQjtBQUNBLHlCQUFXLFdBQVcsVUFBVTtBQUVoQyxxQkFBTztBQUFBLFlBQ1g7QUFBQSxVQUNKLENBQUM7QUFtQkQsWUFBRSxTQUFTLFNBQVUsVUFBVSxNQUFNLEtBQUs7QUFDdEMsbUJBQU8sT0FBTyxPQUFPLEdBQUcsRUFBRSxRQUFRLFVBQVUsSUFBSTtBQUFBLFVBQ3BEO0FBQUEsUUFDSixHQUFFO0FBR0YsZUFBT0EsVUFBUztBQUFBLE1BRWpCLENBQUM7QUFBQTtBQUFBOzs7QUNySUQ7QUFBQSxxREFBQUMsU0FBQTtBQUFDLE9BQUMsU0FBVSxNQUFNLFNBQVMsT0FBTztBQUNqQyxZQUFJLE9BQU8sWUFBWSxVQUFVO0FBRWhDLFVBQUFBLFFBQU8sVUFBVSxVQUFVLFFBQVEsZ0JBQW1CLGdCQUFtQjtBQUFBLFFBQzFFLFdBQ1MsT0FBTyxXQUFXLGNBQWMsT0FBTyxLQUFLO0FBRXBELGlCQUFPLENBQUMsVUFBVSxVQUFVLEdBQUcsT0FBTztBQUFBLFFBQ3ZDLE9BQ0s7QUFFSixrQkFBUSxLQUFLLFFBQVE7QUFBQSxRQUN0QjtBQUFBLE1BQ0QsR0FBRSxTQUFNLFNBQVVDLFdBQVU7QUFLM0IsUUFBQUEsVUFBUyxJQUFJLFVBQVcsU0FBVUMsWUFBVztBQUV6QyxjQUFJLElBQUlEO0FBQ1IsY0FBSSxRQUFRLEVBQUU7QUFDZCxjQUFJLE9BQU8sTUFBTTtBQUNqQixjQUFJLFlBQVksTUFBTTtBQUN0QixjQUFJLHlCQUF5QixNQUFNO0FBQ25DLGNBQUksUUFBUSxFQUFFO0FBQ2QsY0FBSSxPQUFPLE1BQU07QUFDakIsY0FBSUUsVUFBUyxNQUFNO0FBQ25CLGNBQUksU0FBUyxFQUFFO0FBQ2YsY0FBSSxTQUFTLE9BQU87QUFVcEIsY0FBSSxTQUFTLE1BQU0sU0FBUyx1QkFBdUIsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU10RCxLQUFLLEtBQUssT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWdCakIsaUJBQWlCLFNBQVUsS0FBSyxLQUFLO0FBQ2pDLHFCQUFPLEtBQUssT0FBTyxLQUFLLGlCQUFpQixLQUFLLEdBQUc7QUFBQSxZQUNyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWdCQSxpQkFBaUIsU0FBVSxLQUFLLEtBQUs7QUFDakMscUJBQU8sS0FBSyxPQUFPLEtBQUssaUJBQWlCLEtBQUssR0FBRztBQUFBLFlBQ3JEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYUEsTUFBTSxTQUFVLFdBQVcsS0FBSyxLQUFLO0FBRWpDLG1CQUFLLE1BQU0sS0FBSyxJQUFJLE9BQU8sR0FBRztBQUc5QixtQkFBSyxhQUFhO0FBQ2xCLG1CQUFLLE9BQU87QUFHWixtQkFBSyxNQUFNO0FBQUEsWUFDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFTQSxPQUFPLFdBQVk7QUFFZixxQ0FBdUIsTUFBTSxLQUFLLElBQUk7QUFHdEMsbUJBQUssU0FBUztBQUFBLFlBQ2xCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFjQSxTQUFTLFNBQVUsWUFBWTtBQUUzQixtQkFBSyxRQUFRLFVBQVU7QUFHdkIscUJBQU8sS0FBSyxTQUFTO0FBQUEsWUFDekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFnQkEsVUFBVSxTQUFVLFlBQVk7QUFFNUIsa0JBQUksWUFBWTtBQUNaLHFCQUFLLFFBQVEsVUFBVTtBQUFBLGNBQzNCO0FBR0Esa0JBQUkscUJBQXFCLEtBQUssWUFBWTtBQUUxQyxxQkFBTztBQUFBLFlBQ1g7QUFBQSxZQUVBLFNBQVMsTUFBSTtBQUFBLFlBRWIsUUFBUSxNQUFJO0FBQUEsWUFFWixpQkFBaUI7QUFBQSxZQUVqQixpQkFBaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZWpCLGVBQWdCLFdBQVk7QUFDeEIsdUJBQVMscUJBQXFCLEtBQUs7QUFDL0Isb0JBQUksT0FBTyxPQUFPLFVBQVU7QUFDeEIseUJBQU87QUFBQSxnQkFDWCxPQUFPO0FBQ0gseUJBQU87QUFBQSxnQkFDWDtBQUFBLGNBQ0o7QUFFQSxxQkFBTyxTQUFVLFFBQVE7QUFDckIsdUJBQU87QUFBQSxrQkFDSCxTQUFTLFNBQVUsU0FBUyxLQUFLLEtBQUs7QUFDbEMsMkJBQU8scUJBQXFCLEdBQUcsRUFBRSxRQUFRLFFBQVEsU0FBUyxLQUFLLEdBQUc7QUFBQSxrQkFDdEU7QUFBQSxrQkFFQSxTQUFTLFNBQVUsWUFBWSxLQUFLLEtBQUs7QUFDckMsMkJBQU8scUJBQXFCLEdBQUcsRUFBRSxRQUFRLFFBQVEsWUFBWSxLQUFLLEdBQUc7QUFBQSxrQkFDekU7QUFBQSxnQkFDSjtBQUFBLGNBQ0o7QUFBQSxZQUNKLEVBQUU7QUFBQSxVQUNOLENBQUM7QUFPRCxjQUFJLGVBQWUsTUFBTSxlQUFlLE9BQU8sT0FBTztBQUFBLFlBQ2xELGFBQWEsV0FBWTtBQUVyQixrQkFBSSx1QkFBdUIsS0FBSyxTQUFTLElBQVM7QUFFbEQscUJBQU87QUFBQSxZQUNYO0FBQUEsWUFFQSxXQUFXO0FBQUEsVUFDZixDQUFDO0FBS0QsY0FBSSxTQUFTLEVBQUUsT0FBTyxDQUFDO0FBS3ZCLGNBQUksa0JBQWtCLE1BQU0sa0JBQWtCLEtBQUssT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYXRELGlCQUFpQixTQUFVLFFBQVEsSUFBSTtBQUNuQyxxQkFBTyxLQUFLLFVBQVUsT0FBTyxRQUFRLEVBQUU7QUFBQSxZQUMzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBY0EsaUJBQWlCLFNBQVUsUUFBUSxJQUFJO0FBQ25DLHFCQUFPLEtBQUssVUFBVSxPQUFPLFFBQVEsRUFBRTtBQUFBLFlBQzNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVlBLE1BQU0sU0FBVSxRQUFRLElBQUk7QUFDeEIsbUJBQUssVUFBVTtBQUNmLG1CQUFLLE1BQU07QUFBQSxZQUNmO0FBQUEsVUFDSixDQUFDO0FBS0QsY0FBSSxNQUFNLE9BQU8sTUFBTyxXQUFZO0FBSWhDLGdCQUFJQyxPQUFNLGdCQUFnQixPQUFPO0FBS2pDLFlBQUFBLEtBQUksWUFBWUEsS0FBSSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVd2QixjQUFjLFNBQVUsT0FBTyxRQUFRO0FBRW5DLG9CQUFJLFNBQVMsS0FBSztBQUNsQixvQkFBSSxZQUFZLE9BQU87QUFHdkIseUJBQVMsS0FBSyxNQUFNLE9BQU8sUUFBUSxTQUFTO0FBQzVDLHVCQUFPLGFBQWEsT0FBTyxNQUFNO0FBR2pDLHFCQUFLLGFBQWEsTUFBTSxNQUFNLFFBQVEsU0FBUyxTQUFTO0FBQUEsY0FDNUQ7QUFBQSxZQUNKLENBQUM7QUFLRCxZQUFBQSxLQUFJLFlBQVlBLEtBQUksT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FXdkIsY0FBYyxTQUFVLE9BQU8sUUFBUTtBQUVuQyxvQkFBSSxTQUFTLEtBQUs7QUFDbEIsb0JBQUksWUFBWSxPQUFPO0FBR3ZCLG9CQUFJLFlBQVksTUFBTSxNQUFNLFFBQVEsU0FBUyxTQUFTO0FBR3RELHVCQUFPLGFBQWEsT0FBTyxNQUFNO0FBQ2pDLHlCQUFTLEtBQUssTUFBTSxPQUFPLFFBQVEsU0FBUztBQUc1QyxxQkFBSyxhQUFhO0FBQUEsY0FDdEI7QUFBQSxZQUNKLENBQUM7QUFFRCxxQkFBUyxTQUFTLE9BQU8sUUFBUSxXQUFXO0FBQ3hDLGtCQUFJO0FBR0osa0JBQUksS0FBSyxLQUFLO0FBR2Qsa0JBQUksSUFBSTtBQUNKLHdCQUFRO0FBR1IscUJBQUssTUFBTUY7QUFBQSxjQUNmLE9BQU87QUFDSCx3QkFBUSxLQUFLO0FBQUEsY0FDakI7QUFHQSx1QkFBUyxJQUFJLEdBQUcsSUFBSSxXQUFXLEtBQUs7QUFDaEMsc0JBQU0sU0FBUyxDQUFDLEtBQUssTUFBTSxDQUFDO0FBQUEsY0FDaEM7QUFBQSxZQUNKO0FBRUEsbUJBQU9FO0FBQUEsVUFDWCxFQUFFO0FBS0YsY0FBSSxRQUFRLEVBQUUsTUFBTSxDQUFDO0FBS3JCLGNBQUksUUFBUSxNQUFNLFFBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWF0QixLQUFLLFNBQVUsTUFBTSxXQUFXO0FBRTVCLGtCQUFJLGlCQUFpQixZQUFZO0FBR2pDLGtCQUFJLGdCQUFnQixpQkFBaUIsS0FBSyxXQUFXO0FBR3JELGtCQUFJLGNBQWUsaUJBQWlCLEtBQU8saUJBQWlCLEtBQU8saUJBQWlCLElBQUs7QUFHekYsa0JBQUksZUFBZSxDQUFDO0FBQ3BCLHVCQUFTLElBQUksR0FBRyxJQUFJLGVBQWUsS0FBSyxHQUFHO0FBQ3ZDLDZCQUFhLEtBQUssV0FBVztBQUFBLGNBQ2pDO0FBQ0Esa0JBQUksVUFBVSxVQUFVLE9BQU8sY0FBYyxhQUFhO0FBRzFELG1CQUFLLE9BQU8sT0FBTztBQUFBLFlBQ3ZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYUEsT0FBTyxTQUFVLE1BQU07QUFFbkIsa0JBQUksZ0JBQWdCLEtBQUssTUFBTyxLQUFLLFdBQVcsTUFBTyxDQUFDLElBQUk7QUFHNUQsbUJBQUssWUFBWTtBQUFBLFlBQ3JCO0FBQUEsVUFDSjtBQU9BLGNBQUksY0FBYyxNQUFNLGNBQWMsT0FBTyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFPaEQsS0FBSyxPQUFPLElBQUksT0FBTztBQUFBLGNBQ25CLE1BQU07QUFBQSxjQUNOLFNBQVM7QUFBQSxZQUNiLENBQUM7QUFBQSxZQUVELE9BQU8sV0FBWTtBQUNmLGtCQUFJO0FBR0oscUJBQU8sTUFBTSxLQUFLLElBQUk7QUFHdEIsa0JBQUksTUFBTSxLQUFLO0FBQ2Ysa0JBQUksS0FBSyxJQUFJO0FBQ2Isa0JBQUksT0FBTyxJQUFJO0FBR2Ysa0JBQUksS0FBSyxjQUFjLEtBQUssaUJBQWlCO0FBQ3pDLDhCQUFjLEtBQUs7QUFBQSxjQUN2QixPQUEwRDtBQUN0RCw4QkFBYyxLQUFLO0FBRW5CLHFCQUFLLGlCQUFpQjtBQUFBLGNBQzFCO0FBRUEsa0JBQUksS0FBSyxTQUFTLEtBQUssTUFBTSxhQUFhLGFBQWE7QUFDbkQscUJBQUssTUFBTSxLQUFLLE1BQU0sTUFBTSxHQUFHLEtBQUs7QUFBQSxjQUN4QyxPQUFPO0FBQ0gscUJBQUssUUFBUSxZQUFZLEtBQUssTUFBTSxNQUFNLE1BQU0sR0FBRyxLQUFLO0FBQ3hELHFCQUFLLE1BQU0sWUFBWTtBQUFBLGNBQzNCO0FBQUEsWUFDSjtBQUFBLFlBRUEsaUJBQWlCLFNBQVUsT0FBTyxRQUFRO0FBQ3RDLG1CQUFLLE1BQU0sYUFBYSxPQUFPLE1BQU07QUFBQSxZQUN6QztBQUFBLFlBRUEsYUFBYSxXQUFZO0FBQ3JCLGtCQUFJO0FBR0osa0JBQUksVUFBVSxLQUFLLElBQUk7QUFHdkIsa0JBQUksS0FBSyxjQUFjLEtBQUssaUJBQWlCO0FBRXpDLHdCQUFRLElBQUksS0FBSyxPQUFPLEtBQUssU0FBUztBQUd0Qyx1Q0FBdUIsS0FBSyxTQUFTLElBQVM7QUFBQSxjQUNsRCxPQUEwRDtBQUV0RCx1Q0FBdUIsS0FBSyxTQUFTLElBQVM7QUFHOUMsd0JBQVEsTUFBTSxvQkFBb0I7QUFBQSxjQUN0QztBQUVBLHFCQUFPO0FBQUEsWUFDWDtBQUFBLFlBRUEsV0FBVyxNQUFJO0FBQUEsVUFDbkIsQ0FBQztBQWVELGNBQUksZUFBZSxNQUFNLGVBQWUsS0FBSyxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW9CaEQsTUFBTSxTQUFVLGNBQWM7QUFDMUIsbUJBQUssTUFBTSxZQUFZO0FBQUEsWUFDM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWlCQSxVQUFVLFNBQVUsV0FBVztBQUMzQixzQkFBUSxhQUFhLEtBQUssV0FBVyxVQUFVLElBQUk7QUFBQSxZQUN2RDtBQUFBLFVBQ0osQ0FBQztBQUtELGNBQUksV0FBVyxFQUFFLFNBQVMsQ0FBQztBQUszQixjQUFJLG1CQUFtQixTQUFTLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBY3RDLFdBQVcsU0FBVSxjQUFjO0FBQy9CLGtCQUFJO0FBR0osa0JBQUksYUFBYSxhQUFhO0FBQzlCLGtCQUFJLE9BQU8sYUFBYTtBQUd4QixrQkFBSSxNQUFNO0FBQ04sNEJBQVksVUFBVSxPQUFPLENBQUMsWUFBWSxVQUFVLENBQUMsRUFBRSxPQUFPLElBQUksRUFBRSxPQUFPLFVBQVU7QUFBQSxjQUN6RixPQUFPO0FBQ0gsNEJBQVk7QUFBQSxjQUNoQjtBQUVBLHFCQUFPLFVBQVUsU0FBU0QsT0FBTTtBQUFBLFlBQ3BDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWVBLE9BQU8sU0FBVSxZQUFZO0FBQ3pCLGtCQUFJO0FBR0osa0JBQUksYUFBYUEsUUFBTyxNQUFNLFVBQVU7QUFHeEMsa0JBQUksa0JBQWtCLFdBQVc7QUFHakMsa0JBQUksZ0JBQWdCLENBQUMsS0FBSyxjQUFjLGdCQUFnQixDQUFDLEtBQUssWUFBWTtBQUV0RSx1QkFBTyxVQUFVLE9BQU8sZ0JBQWdCLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFHbkQsZ0NBQWdCLE9BQU8sR0FBRyxDQUFDO0FBQzNCLDJCQUFXLFlBQVk7QUFBQSxjQUMzQjtBQUVBLHFCQUFPLGFBQWEsT0FBTyxFQUFFLFlBQXdCLEtBQVcsQ0FBQztBQUFBLFlBQ3JFO0FBQUEsVUFDSjtBQUtBLGNBQUkscUJBQXFCLE1BQU0scUJBQXFCLEtBQUssT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU01RCxLQUFLLEtBQUssT0FBTztBQUFBLGNBQ2IsUUFBUTtBQUFBLFlBQ1osQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBb0JELFNBQVMsU0FBVSxRQUFRLFNBQVMsS0FBSyxLQUFLO0FBRTFDLG9CQUFNLEtBQUssSUFBSSxPQUFPLEdBQUc7QUFHekIsa0JBQUksWUFBWSxPQUFPLGdCQUFnQixLQUFLLEdBQUc7QUFDL0Msa0JBQUksYUFBYSxVQUFVLFNBQVMsT0FBTztBQUczQyxrQkFBSSxZQUFZLFVBQVU7QUFHMUIscUJBQU8sYUFBYSxPQUFPO0FBQUEsZ0JBQ3ZCO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQSxJQUFJLFVBQVU7QUFBQSxnQkFDZCxXQUFXO0FBQUEsZ0JBQ1gsTUFBTSxVQUFVO0FBQUEsZ0JBQ2hCLFNBQVMsVUFBVTtBQUFBLGdCQUNuQixXQUFXLE9BQU87QUFBQSxnQkFDbEIsV0FBVyxJQUFJO0FBQUEsY0FDbkIsQ0FBQztBQUFBLFlBQ0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFtQkEsU0FBUyxTQUFVLFFBQVEsWUFBWSxLQUFLLEtBQUs7QUFFN0Msb0JBQU0sS0FBSyxJQUFJLE9BQU8sR0FBRztBQUd6QiwyQkFBYSxLQUFLLE9BQU8sWUFBWSxJQUFJLE1BQU07QUFHL0Msa0JBQUksWUFBWSxPQUFPLGdCQUFnQixLQUFLLEdBQUcsRUFBRSxTQUFTLFdBQVcsVUFBVTtBQUUvRSxxQkFBTztBQUFBLFlBQ1g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWlCQSxRQUFRLFNBQVUsWUFBWSxRQUFRO0FBQ2xDLGtCQUFJLE9BQU8sY0FBYyxVQUFVO0FBQy9CLHVCQUFPLE9BQU8sTUFBTSxZQUFZLElBQUk7QUFBQSxjQUN4QyxPQUFPO0FBQ0gsdUJBQU87QUFBQSxjQUNYO0FBQUEsWUFDSjtBQUFBLFVBQ0osQ0FBQztBQUtELGNBQUksUUFBUSxFQUFFLE1BQU0sQ0FBQztBQUtyQixjQUFJLGFBQWEsTUFBTSxVQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBa0I3QixTQUFTLFNBQVUsVUFBVSxTQUFTLFFBQVEsTUFBTTtBQUVoRCxrQkFBSSxDQUFDLE1BQU07QUFDUCx1QkFBTyxVQUFVLE9BQU8sS0FBRyxDQUFDO0FBQUEsY0FDaEM7QUFHQSxrQkFBSSxNQUFNLE9BQU8sT0FBTyxFQUFFLFNBQVMsVUFBVSxPQUFPLENBQUMsRUFBRSxRQUFRLFVBQVUsSUFBSTtBQUc3RSxrQkFBSSxLQUFLLFVBQVUsT0FBTyxJQUFJLE1BQU0sTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDO0FBQzlELGtCQUFJLFdBQVcsVUFBVTtBQUd6QixxQkFBTyxhQUFhLE9BQU8sRUFBRSxLQUFVLElBQVEsS0FBVyxDQUFDO0FBQUEsWUFDL0Q7QUFBQSxVQUNKO0FBTUEsY0FBSSxzQkFBc0IsTUFBTSxzQkFBc0IsbUJBQW1CLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFNNUUsS0FBSyxtQkFBbUIsSUFBSSxPQUFPO0FBQUEsY0FDL0IsS0FBSztBQUFBLFlBQ1QsQ0FBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW1CRCxTQUFTLFNBQVUsUUFBUSxTQUFTLFVBQVUsS0FBSztBQUUvQyxvQkFBTSxLQUFLLElBQUksT0FBTyxHQUFHO0FBR3pCLGtCQUFJLGdCQUFnQixJQUFJLElBQUksUUFBUSxVQUFVLE9BQU8sU0FBUyxPQUFPLE1BQU07QUFHM0Usa0JBQUksS0FBSyxjQUFjO0FBR3ZCLGtCQUFJLGFBQWEsbUJBQW1CLFFBQVEsS0FBSyxNQUFNLFFBQVEsU0FBUyxjQUFjLEtBQUssR0FBRztBQUc5Rix5QkFBVyxNQUFNLGFBQWE7QUFFOUIscUJBQU87QUFBQSxZQUNYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbUJBLFNBQVMsU0FBVSxRQUFRLFlBQVksVUFBVSxLQUFLO0FBRWxELG9CQUFNLEtBQUssSUFBSSxPQUFPLEdBQUc7QUFHekIsMkJBQWEsS0FBSyxPQUFPLFlBQVksSUFBSSxNQUFNO0FBRy9DLGtCQUFJLGdCQUFnQixJQUFJLElBQUksUUFBUSxVQUFVLE9BQU8sU0FBUyxPQUFPLFFBQVEsV0FBVyxJQUFJO0FBRzVGLGtCQUFJLEtBQUssY0FBYztBQUd2QixrQkFBSSxZQUFZLG1CQUFtQixRQUFRLEtBQUssTUFBTSxRQUFRLFlBQVksY0FBYyxLQUFLLEdBQUc7QUFFaEcscUJBQU87QUFBQSxZQUNYO0FBQUEsVUFDSixDQUFDO0FBQUEsUUFDTCxFQUFFO0FBQUEsTUFHSCxDQUFDO0FBQUE7QUFBQTs7O0FDejNCRDtBQUFBLGtEQUFBRSxTQUFBO0FBQUMsT0FBQyxTQUFVLE1BQU0sU0FBUyxPQUFPO0FBQ2pDLFlBQUksT0FBTyxZQUFZLFVBQVU7QUFFaEMsVUFBQUEsUUFBTyxVQUFVLFVBQVUsUUFBUSxnQkFBbUIscUJBQXdCO0FBQUEsUUFDL0UsV0FDUyxPQUFPLFdBQVcsY0FBYyxPQUFPLEtBQUs7QUFFcEQsaUJBQU8sQ0FBQyxVQUFVLGVBQWUsR0FBRyxPQUFPO0FBQUEsUUFDNUMsT0FDSztBQUVKLGtCQUFRLEtBQUssUUFBUTtBQUFBLFFBQ3RCO0FBQUEsTUFDRCxHQUFFLFNBQU0sU0FBVUMsV0FBVTtBQUszQixRQUFBQSxVQUFTLEtBQUssTUFBTyxXQUFZO0FBQzdCLGNBQUksTUFBTUEsVUFBUyxJQUFJLGdCQUFnQixPQUFPO0FBRTlDLGNBQUksWUFBWSxJQUFJLE9BQU87QUFBQSxZQUN2QixjQUFjLFNBQVUsT0FBTyxRQUFRO0FBRW5DLGtCQUFJLFNBQVMsS0FBSztBQUNsQixrQkFBSSxZQUFZLE9BQU87QUFFdkIsMENBQTRCLEtBQUssTUFBTSxPQUFPLFFBQVEsV0FBVyxNQUFNO0FBR3ZFLG1CQUFLLGFBQWEsTUFBTSxNQUFNLFFBQVEsU0FBUyxTQUFTO0FBQUEsWUFDNUQ7QUFBQSxVQUNKLENBQUM7QUFFRCxjQUFJLFlBQVksSUFBSSxPQUFPO0FBQUEsWUFDdkIsY0FBYyxTQUFVLE9BQU8sUUFBUTtBQUVuQyxrQkFBSSxTQUFTLEtBQUs7QUFDbEIsa0JBQUksWUFBWSxPQUFPO0FBR3ZCLGtCQUFJLFlBQVksTUFBTSxNQUFNLFFBQVEsU0FBUyxTQUFTO0FBRXRELDBDQUE0QixLQUFLLE1BQU0sT0FBTyxRQUFRLFdBQVcsTUFBTTtBQUd2RSxtQkFBSyxhQUFhO0FBQUEsWUFDdEI7QUFBQSxVQUNKLENBQUM7QUFFRCxtQkFBUyw0QkFBNEIsT0FBTyxRQUFRLFdBQVcsUUFBUTtBQUNuRSxnQkFBSTtBQUdKLGdCQUFJLEtBQUssS0FBSztBQUdkLGdCQUFJLElBQUk7QUFDSiwwQkFBWSxHQUFHLE1BQU0sQ0FBQztBQUd0QixtQkFBSyxNQUFNO0FBQUEsWUFDZixPQUFPO0FBQ0gsMEJBQVksS0FBSztBQUFBLFlBQ3JCO0FBQ0EsbUJBQU8sYUFBYSxXQUFXLENBQUM7QUFHaEMscUJBQVMsSUFBSSxHQUFHLElBQUksV0FBVyxLQUFLO0FBQ2hDLG9CQUFNLFNBQVMsQ0FBQyxLQUFLLFVBQVUsQ0FBQztBQUFBLFlBQ3BDO0FBQUEsVUFDSjtBQUVBLGlCQUFPO0FBQUEsUUFDWCxFQUFFO0FBR0YsZUFBT0EsVUFBUyxLQUFLO0FBQUEsTUFFdEIsQ0FBQztBQUFBO0FBQUE7OztBQy9FRDtBQUFBLGtEQUFBQyxTQUFBO0FBQUMsT0FBQyxTQUFVLE1BQU0sU0FBUyxPQUFPO0FBQ2pDLFlBQUksT0FBTyxZQUFZLFVBQVU7QUFFaEMsVUFBQUEsUUFBTyxVQUFVLFVBQVUsUUFBUSxnQkFBbUIscUJBQXdCO0FBQUEsUUFDL0UsV0FDUyxPQUFPLFdBQVcsY0FBYyxPQUFPLEtBQUs7QUFFcEQsaUJBQU8sQ0FBQyxVQUFVLGVBQWUsR0FBRyxPQUFPO0FBQUEsUUFDNUMsT0FDSztBQUVKLGtCQUFRLEtBQUssUUFBUTtBQUFBLFFBQ3RCO0FBQUEsTUFDRCxHQUFFLFNBQU0sU0FBVUMsV0FBVTtBQUszQixRQUFBQSxVQUFTLEtBQUssTUFBTyxXQUFZO0FBQzdCLGNBQUksTUFBTUEsVUFBUyxJQUFJLGdCQUFnQixPQUFPO0FBRTlDLGNBQUksWUFBWSxJQUFJLFlBQVksSUFBSSxPQUFPO0FBQUEsWUFDdkMsY0FBYyxTQUFVLE9BQU8sUUFBUTtBQUVuQyxrQkFBSSxTQUFTLEtBQUs7QUFDbEIsa0JBQUksWUFBWSxPQUFPO0FBQ3ZCLGtCQUFJLEtBQUssS0FBSztBQUNkLGtCQUFJLFVBQVUsS0FBSztBQUduQixrQkFBSSxJQUFJO0FBQ0osMEJBQVUsS0FBSyxXQUFXLEdBQUcsTUFBTSxDQUFDO0FBR3BDLHFCQUFLLE1BQU07QUFBQSxjQUNmO0FBQ0Esa0JBQUksWUFBWSxRQUFRLE1BQU0sQ0FBQztBQUMvQixxQkFBTyxhQUFhLFdBQVcsQ0FBQztBQUdoQyxzQkFBUSxZQUFZLENBQUMsSUFBSyxRQUFRLFlBQVksQ0FBQyxJQUFJLElBQUs7QUFHeEQsdUJBQVMsSUFBSSxHQUFHLElBQUksV0FBVyxLQUFLO0FBQ2hDLHNCQUFNLFNBQVMsQ0FBQyxLQUFLLFVBQVUsQ0FBQztBQUFBLGNBQ3BDO0FBQUEsWUFDSjtBQUFBLFVBQ0osQ0FBQztBQUVELGNBQUksWUFBWTtBQUVoQixpQkFBTztBQUFBLFFBQ1gsRUFBRTtBQUdGLGVBQU9BLFVBQVMsS0FBSztBQUFBLE1BRXRCLENBQUM7QUFBQTtBQUFBOzs7QUN6REQ7QUFBQSwwREFBQUMsU0FBQTtBQUFDLE9BQUMsU0FBVSxNQUFNLFNBQVMsT0FBTztBQUNqQyxZQUFJLE9BQU8sWUFBWSxVQUFVO0FBRWhDLFVBQUFBLFFBQU8sVUFBVSxVQUFVLFFBQVEsZ0JBQW1CLHFCQUF3QjtBQUFBLFFBQy9FLFdBQ1MsT0FBTyxXQUFXLGNBQWMsT0FBTyxLQUFLO0FBRXBELGlCQUFPLENBQUMsVUFBVSxlQUFlLEdBQUcsT0FBTztBQUFBLFFBQzVDLE9BQ0s7QUFFSixrQkFBUSxLQUFLLFFBQVE7QUFBQSxRQUN0QjtBQUFBLE1BQ0QsR0FBRSxTQUFNLFNBQVVDLFdBQVU7QUFPM0IsUUFBQUEsVUFBUyxLQUFLLGFBQWMsV0FBWTtBQUNwQyxjQUFJLGFBQWFBLFVBQVMsSUFBSSxnQkFBZ0IsT0FBTztBQUV4RCxtQkFBUyxRQUFRLE1BQ2pCO0FBQ0MsaUJBQU0sUUFBUSxLQUFNLFNBQVUsS0FBTTtBQUNwQyxrQkFBSSxLQUFNLFFBQVEsS0FBSTtBQUN0QixrQkFBSSxLQUFNLFFBQVEsSUFBRztBQUNyQixrQkFBSSxLQUFLLE9BQU87QUFFaEIsa0JBQUksT0FBTyxLQUNYO0FBQ0EscUJBQUs7QUFDTCxvQkFBSSxPQUFPLEtBQ1g7QUFDQyx1QkFBSztBQUNMLHNCQUFJLE9BQU8sS0FDWDtBQUNDLHlCQUFLO0FBQUEsa0JBQ04sT0FFQTtBQUNDLHNCQUFFO0FBQUEsa0JBQ0g7QUFBQSxnQkFDRCxPQUVBO0FBQ0Msb0JBQUU7QUFBQSxnQkFDSDtBQUFBLGNBQ0EsT0FFQTtBQUNBLGtCQUFFO0FBQUEsY0FDRjtBQUVBLHFCQUFPO0FBQ1Asc0JBQVMsTUFBTTtBQUNmLHNCQUFTLE1BQU07QUFDZixzQkFBUTtBQUFBLFlBQ1IsT0FFQTtBQUNBLHNCQUFTLEtBQVE7QUFBQSxZQUNqQjtBQUNBLG1CQUFPO0FBQUEsVUFDUjtBQUVBLG1CQUFTLFdBQVcsU0FDcEI7QUFDQyxpQkFBSyxRQUFRLENBQUMsSUFBSSxRQUFRLFFBQVEsQ0FBQyxDQUFDLE9BQU8sR0FDM0M7QUFFQyxzQkFBUSxDQUFDLElBQUksUUFBUSxRQUFRLENBQUMsQ0FBQztBQUFBLFlBQ2hDO0FBQ0EsbUJBQU87QUFBQSxVQUNSO0FBRUcsY0FBSSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU87QUFBQSxZQUNyRCxjQUFjLFNBQVUsT0FBTyxRQUFRO0FBRW5DLGtCQUFJLFNBQVMsS0FBSztBQUNsQixrQkFBSSxZQUFZLE9BQU87QUFDdkIsa0JBQUksS0FBSyxLQUFLO0FBQ2Qsa0JBQUksVUFBVSxLQUFLO0FBR25CLGtCQUFJLElBQUk7QUFDSiwwQkFBVSxLQUFLLFdBQVcsR0FBRyxNQUFNLENBQUM7QUFHcEMscUJBQUssTUFBTTtBQUFBLGNBQ2Y7QUFFVCx5QkFBVyxPQUFPO0FBRWxCLGtCQUFJLFlBQVksUUFBUSxNQUFNLENBQUM7QUFDdEIscUJBQU8sYUFBYSxXQUFXLENBQUM7QUFHaEMsdUJBQVMsSUFBSSxHQUFHLElBQUksV0FBVyxLQUFLO0FBQ2hDLHNCQUFNLFNBQVMsQ0FBQyxLQUFLLFVBQVUsQ0FBQztBQUFBLGNBQ3BDO0FBQUEsWUFDSjtBQUFBLFVBQ0osQ0FBQztBQUVELHFCQUFXLFlBQVk7QUFFdkIsaUJBQU87QUFBQSxRQUNYLEVBQUU7QUFLRixlQUFPQSxVQUFTLEtBQUs7QUFBQSxNQUV0QixDQUFDO0FBQUE7QUFBQTs7O0FDbkhEO0FBQUEsa0RBQUFDLFNBQUE7QUFBQyxPQUFDLFNBQVUsTUFBTSxTQUFTLE9BQU87QUFDakMsWUFBSSxPQUFPLFlBQVksVUFBVTtBQUVoQyxVQUFBQSxRQUFPLFVBQVUsVUFBVSxRQUFRLGdCQUFtQixxQkFBd0I7QUFBQSxRQUMvRSxXQUNTLE9BQU8sV0FBVyxjQUFjLE9BQU8sS0FBSztBQUVwRCxpQkFBTyxDQUFDLFVBQVUsZUFBZSxHQUFHLE9BQU87QUFBQSxRQUM1QyxPQUNLO0FBRUosa0JBQVEsS0FBSyxRQUFRO0FBQUEsUUFDdEI7QUFBQSxNQUNELEdBQUUsU0FBTSxTQUFVQyxXQUFVO0FBSzNCLFFBQUFBLFVBQVMsS0FBSyxNQUFPLFdBQVk7QUFDN0IsY0FBSSxNQUFNQSxVQUFTLElBQUksZ0JBQWdCLE9BQU87QUFFOUMsY0FBSSxZQUFZLElBQUksWUFBWSxJQUFJLE9BQU87QUFBQSxZQUN2QyxjQUFjLFNBQVUsT0FBTyxRQUFRO0FBRW5DLGtCQUFJLFNBQVMsS0FBSztBQUNsQixrQkFBSSxZQUFZLE9BQU87QUFDdkIsa0JBQUksS0FBSyxLQUFLO0FBQ2Qsa0JBQUksWUFBWSxLQUFLO0FBR3JCLGtCQUFJLElBQUk7QUFDSiw0QkFBWSxLQUFLLGFBQWEsR0FBRyxNQUFNLENBQUM7QUFHeEMscUJBQUssTUFBTTtBQUFBLGNBQ2Y7QUFDQSxxQkFBTyxhQUFhLFdBQVcsQ0FBQztBQUdoQyx1QkFBUyxJQUFJLEdBQUcsSUFBSSxXQUFXLEtBQUs7QUFDaEMsc0JBQU0sU0FBUyxDQUFDLEtBQUssVUFBVSxDQUFDO0FBQUEsY0FDcEM7QUFBQSxZQUNKO0FBQUEsVUFDSixDQUFDO0FBRUQsY0FBSSxZQUFZO0FBRWhCLGlCQUFPO0FBQUEsUUFDWCxFQUFFO0FBR0YsZUFBT0EsVUFBUyxLQUFLO0FBQUEsTUFFdEIsQ0FBQztBQUFBO0FBQUE7OztBQ3JERDtBQUFBLGtEQUFBQyxTQUFBO0FBQUMsT0FBQyxTQUFVLE1BQU0sU0FBUyxPQUFPO0FBQ2pDLFlBQUksT0FBTyxZQUFZLFVBQVU7QUFFaEMsVUFBQUEsUUFBTyxVQUFVLFVBQVUsUUFBUSxnQkFBbUIscUJBQXdCO0FBQUEsUUFDL0UsV0FDUyxPQUFPLFdBQVcsY0FBYyxPQUFPLEtBQUs7QUFFcEQsaUJBQU8sQ0FBQyxVQUFVLGVBQWUsR0FBRyxPQUFPO0FBQUEsUUFDNUMsT0FDSztBQUVKLGtCQUFRLEtBQUssUUFBUTtBQUFBLFFBQ3RCO0FBQUEsTUFDRCxHQUFFLFNBQU0sU0FBVUMsV0FBVTtBQUszQixRQUFBQSxVQUFTLEtBQUssTUFBTyxXQUFZO0FBQzdCLGNBQUksTUFBTUEsVUFBUyxJQUFJLGdCQUFnQixPQUFPO0FBRTlDLGNBQUksWUFBWSxJQUFJLE9BQU87QUFBQSxZQUN2QixjQUFjLFNBQVUsT0FBTyxRQUFRO0FBQ25DLG1CQUFLLFFBQVEsYUFBYSxPQUFPLE1BQU07QUFBQSxZQUMzQztBQUFBLFVBQ0osQ0FBQztBQUVELGNBQUksWUFBWSxJQUFJLE9BQU87QUFBQSxZQUN2QixjQUFjLFNBQVUsT0FBTyxRQUFRO0FBQ25DLG1CQUFLLFFBQVEsYUFBYSxPQUFPLE1BQU07QUFBQSxZQUMzQztBQUFBLFVBQ0osQ0FBQztBQUVELGlCQUFPO0FBQUEsUUFDWCxFQUFFO0FBR0YsZUFBT0EsVUFBUyxLQUFLO0FBQUEsTUFFdEIsQ0FBQztBQUFBO0FBQUE7OztBQ3ZDRDtBQUFBLHNEQUFBQyxTQUFBO0FBQUMsT0FBQyxTQUFVLE1BQU0sU0FBUyxPQUFPO0FBQ2pDLFlBQUksT0FBTyxZQUFZLFVBQVU7QUFFaEMsVUFBQUEsUUFBTyxVQUFVLFVBQVUsUUFBUSxnQkFBbUIscUJBQXdCO0FBQUEsUUFDL0UsV0FDUyxPQUFPLFdBQVcsY0FBYyxPQUFPLEtBQUs7QUFFcEQsaUJBQU8sQ0FBQyxVQUFVLGVBQWUsR0FBRyxPQUFPO0FBQUEsUUFDNUMsT0FDSztBQUVKLGtCQUFRLEtBQUssUUFBUTtBQUFBLFFBQ3RCO0FBQUEsTUFDRCxHQUFFLFNBQU0sU0FBVUMsV0FBVTtBQUszQixRQUFBQSxVQUFTLElBQUksV0FBVztBQUFBLFVBQ3BCLEtBQUssU0FBVSxNQUFNLFdBQVc7QUFFNUIsZ0JBQUksZUFBZSxLQUFLO0FBQ3hCLGdCQUFJLGlCQUFpQixZQUFZO0FBR2pDLGdCQUFJLGdCQUFnQixpQkFBaUIsZUFBZTtBQUdwRCxnQkFBSSxjQUFjLGVBQWUsZ0JBQWdCO0FBR2pELGlCQUFLLE1BQU07QUFDWCxpQkFBSyxNQUFNLGdCQUFnQixDQUFDLEtBQUssaUJBQWtCLEtBQU0sY0FBYyxJQUFLO0FBQzVFLGlCQUFLLFlBQVk7QUFBQSxVQUNyQjtBQUFBLFVBRUEsT0FBTyxTQUFVLE1BQU07QUFFbkIsZ0JBQUksZ0JBQWdCLEtBQUssTUFBTyxLQUFLLFdBQVcsTUFBTyxDQUFDLElBQUk7QUFHNUQsaUJBQUssWUFBWTtBQUFBLFVBQ3JCO0FBQUEsUUFDSjtBQUdBLGVBQU9BLFVBQVMsSUFBSTtBQUFBLE1BRXJCLENBQUM7QUFBQTtBQUFBOzs7QUNoREQ7QUFBQSxzREFBQUMsU0FBQTtBQUFDLE9BQUMsU0FBVSxNQUFNLFNBQVMsT0FBTztBQUNqQyxZQUFJLE9BQU8sWUFBWSxVQUFVO0FBRWhDLFVBQUFBLFFBQU8sVUFBVSxVQUFVLFFBQVEsZ0JBQW1CLHFCQUF3QjtBQUFBLFFBQy9FLFdBQ1MsT0FBTyxXQUFXLGNBQWMsT0FBTyxLQUFLO0FBRXBELGlCQUFPLENBQUMsVUFBVSxlQUFlLEdBQUcsT0FBTztBQUFBLFFBQzVDLE9BQ0s7QUFFSixrQkFBUSxLQUFLLFFBQVE7QUFBQSxRQUN0QjtBQUFBLE1BQ0QsR0FBRSxTQUFNLFNBQVVDLFdBQVU7QUFLM0IsUUFBQUEsVUFBUyxJQUFJLFdBQVc7QUFBQSxVQUNwQixLQUFLLFNBQVUsTUFBTSxXQUFXO0FBRTVCLGdCQUFJLGlCQUFpQixZQUFZO0FBR2pDLGdCQUFJLGdCQUFnQixpQkFBaUIsS0FBSyxXQUFXO0FBR3JELGlCQUFLLE9BQU9BLFVBQVMsSUFBSSxVQUFVLE9BQU8sZ0JBQWdCLENBQUMsQ0FBQyxFQUN2RCxPQUFPQSxVQUFTLElBQUksVUFBVSxPQUFPLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFBQSxVQUN2RTtBQUFBLFVBRUEsT0FBTyxTQUFVLE1BQU07QUFFbkIsZ0JBQUksZ0JBQWdCLEtBQUssTUFBTyxLQUFLLFdBQVcsTUFBTyxDQUFDLElBQUk7QUFHNUQsaUJBQUssWUFBWTtBQUFBLFVBQ3JCO0FBQUEsUUFDSjtBQUdBLGVBQU9BLFVBQVMsSUFBSTtBQUFBLE1BRXJCLENBQUM7QUFBQTtBQUFBOzs7QUMzQ0Q7QUFBQSxzREFBQUMsU0FBQTtBQUFDLE9BQUMsU0FBVSxNQUFNLFNBQVMsT0FBTztBQUNqQyxZQUFJLE9BQU8sWUFBWSxVQUFVO0FBRWhDLFVBQUFBLFFBQU8sVUFBVSxVQUFVLFFBQVEsZ0JBQW1CLHFCQUF3QjtBQUFBLFFBQy9FLFdBQ1MsT0FBTyxXQUFXLGNBQWMsT0FBTyxLQUFLO0FBRXBELGlCQUFPLENBQUMsVUFBVSxlQUFlLEdBQUcsT0FBTztBQUFBLFFBQzVDLE9BQ0s7QUFFSixrQkFBUSxLQUFLLFFBQVE7QUFBQSxRQUN0QjtBQUFBLE1BQ0QsR0FBRSxTQUFNLFNBQVVDLFdBQVU7QUFLM0IsUUFBQUEsVUFBUyxJQUFJLFdBQVc7QUFBQSxVQUNwQixLQUFLLFNBQVUsTUFBTSxXQUFXO0FBRTVCLGlCQUFLLE9BQU9BLFVBQVMsSUFBSSxVQUFVLE9BQU8sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBRzFELFlBQUFBLFVBQVMsSUFBSSxZQUFZLElBQUksTUFBTSxTQUFTO0FBQUEsVUFDaEQ7QUFBQSxVQUVBLE9BQU8sU0FBVSxNQUFNO0FBRW5CLFlBQUFBLFVBQVMsSUFBSSxZQUFZLE1BQU0sSUFBSTtBQUduQyxpQkFBSztBQUFBLFVBQ1Q7QUFBQSxRQUNKO0FBR0EsZUFBT0EsVUFBUyxJQUFJO0FBQUEsTUFFckIsQ0FBQztBQUFBO0FBQUE7OztBQ3ZDRDtBQUFBLHlEQUFBQyxTQUFBO0FBQUMsT0FBQyxTQUFVLE1BQU0sU0FBUyxPQUFPO0FBQ2pDLFlBQUksT0FBTyxZQUFZLFVBQVU7QUFFaEMsVUFBQUEsUUFBTyxVQUFVLFVBQVUsUUFBUSxnQkFBbUIscUJBQXdCO0FBQUEsUUFDL0UsV0FDUyxPQUFPLFdBQVcsY0FBYyxPQUFPLEtBQUs7QUFFcEQsaUJBQU8sQ0FBQyxVQUFVLGVBQWUsR0FBRyxPQUFPO0FBQUEsUUFDNUMsT0FDSztBQUVKLGtCQUFRLEtBQUssUUFBUTtBQUFBLFFBQ3RCO0FBQUEsTUFDRCxHQUFFLFNBQU0sU0FBVUMsV0FBVTtBQUszQixRQUFBQSxVQUFTLElBQUksY0FBYztBQUFBLFVBQ3ZCLEtBQUssU0FBVSxNQUFNLFdBQVc7QUFFNUIsZ0JBQUksaUJBQWlCLFlBQVk7QUFHakMsaUJBQUssTUFBTTtBQUNYLGlCQUFLLFlBQVksa0JBQW1CLEtBQUssV0FBVyxrQkFBbUI7QUFBQSxVQUMzRTtBQUFBLFVBRUEsT0FBTyxTQUFVLE1BQU07QUFFbkIsZ0JBQUksWUFBWSxLQUFLO0FBR3JCLGdCQUFJLElBQUksS0FBSyxXQUFXO0FBQ3hCLHFCQUFTLElBQUksS0FBSyxXQUFXLEdBQUcsS0FBSyxHQUFHLEtBQUs7QUFDekMsa0JBQU0sVUFBVSxNQUFNLENBQUMsTUFBTyxLQUFNLElBQUksSUFBSyxJQUFNLEtBQU87QUFDdEQscUJBQUssV0FBVyxJQUFJO0FBQ3BCO0FBQUEsY0FDSjtBQUFBLFlBQ0o7QUFBQSxVQUNKO0FBQUEsUUFDSjtBQUdBLGVBQU9BLFVBQVMsSUFBSTtBQUFBLE1BRXJCLENBQUM7QUFBQTtBQUFBOzs7QUM5Q0Q7QUFBQSx1REFBQUMsU0FBQTtBQUFDLE9BQUMsU0FBVSxNQUFNLFNBQVMsT0FBTztBQUNqQyxZQUFJLE9BQU8sWUFBWSxVQUFVO0FBRWhDLFVBQUFBLFFBQU8sVUFBVSxVQUFVLFFBQVEsZ0JBQW1CLHFCQUF3QjtBQUFBLFFBQy9FLFdBQ1MsT0FBTyxXQUFXLGNBQWMsT0FBTyxLQUFLO0FBRXBELGlCQUFPLENBQUMsVUFBVSxlQUFlLEdBQUcsT0FBTztBQUFBLFFBQzVDLE9BQ0s7QUFFSixrQkFBUSxLQUFLLFFBQVE7QUFBQSxRQUN0QjtBQUFBLE1BQ0QsR0FBRSxTQUFNLFNBQVVDLFdBQVU7QUFLM0IsUUFBQUEsVUFBUyxJQUFJLFlBQVk7QUFBQSxVQUNyQixLQUFLLFdBQVk7QUFBQSxVQUNqQjtBQUFBLFVBRUEsT0FBTyxXQUFZO0FBQUEsVUFDbkI7QUFBQSxRQUNKO0FBR0EsZUFBT0EsVUFBUyxJQUFJO0FBQUEsTUFFckIsQ0FBQztBQUFBO0FBQUE7OztBQzdCRDtBQUFBLG9EQUFBQyxTQUFBO0FBQUMsT0FBQyxTQUFVLE1BQU0sU0FBUyxPQUFPO0FBQ2pDLFlBQUksT0FBTyxZQUFZLFVBQVU7QUFFaEMsVUFBQUEsUUFBTyxVQUFVLFVBQVUsUUFBUSxnQkFBbUIscUJBQXdCO0FBQUEsUUFDL0UsV0FDUyxPQUFPLFdBQVcsY0FBYyxPQUFPLEtBQUs7QUFFcEQsaUJBQU8sQ0FBQyxVQUFVLGVBQWUsR0FBRyxPQUFPO0FBQUEsUUFDNUMsT0FDSztBQUVKLGtCQUFRLEtBQUssUUFBUTtBQUFBLFFBQ3RCO0FBQUEsTUFDRCxHQUFFLFNBQU0sU0FBVUMsV0FBVTtBQUUzQixTQUFDLFNBQVVDLFlBQVc7QUFFbEIsY0FBSSxJQUFJRDtBQUNSLGNBQUksUUFBUSxFQUFFO0FBQ2QsY0FBSSxlQUFlLE1BQU07QUFDekIsY0FBSSxRQUFRLEVBQUU7QUFDZCxjQUFJLE1BQU0sTUFBTTtBQUNoQixjQUFJLFdBQVcsRUFBRTtBQUVqQixjQUFJLGVBQWUsU0FBUyxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWM5QixXQUFXLFNBQVUsY0FBYztBQUMvQixxQkFBTyxhQUFhLFdBQVcsU0FBUyxHQUFHO0FBQUEsWUFDL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZUEsT0FBTyxTQUFVLE9BQU87QUFDcEIsa0JBQUksYUFBYSxJQUFJLE1BQU0sS0FBSztBQUNoQyxxQkFBTyxhQUFhLE9BQU8sRUFBRSxXQUF1QixDQUFDO0FBQUEsWUFDekQ7QUFBQSxVQUNKO0FBQUEsUUFDSixHQUFFO0FBR0YsZUFBT0EsVUFBUyxPQUFPO0FBQUEsTUFFeEIsQ0FBQztBQUFBO0FBQUE7OztBQ2pFRDtBQUFBLDZDQUFBRSxTQUFBO0FBQUMsT0FBQyxTQUFVLE1BQU0sU0FBUyxPQUFPO0FBQ2pDLFlBQUksT0FBTyxZQUFZLFVBQVU7QUFFaEMsVUFBQUEsUUFBTyxVQUFVLFVBQVUsUUFBUSxnQkFBbUIsc0JBQXlCLGVBQWtCLGtCQUFxQixxQkFBd0I7QUFBQSxRQUMvSSxXQUNTLE9BQU8sV0FBVyxjQUFjLE9BQU8sS0FBSztBQUVwRCxpQkFBTyxDQUFDLFVBQVUsZ0JBQWdCLFNBQVMsWUFBWSxlQUFlLEdBQUcsT0FBTztBQUFBLFFBQ2pGLE9BQ0s7QUFFSixrQkFBUSxLQUFLLFFBQVE7QUFBQSxRQUN0QjtBQUFBLE1BQ0QsR0FBRSxTQUFNLFNBQVVDLFdBQVU7QUFFM0IsU0FBQyxXQUFZO0FBRVQsY0FBSSxJQUFJQTtBQUNSLGNBQUksUUFBUSxFQUFFO0FBQ2QsY0FBSSxjQUFjLE1BQU07QUFDeEIsY0FBSSxTQUFTLEVBQUU7QUFHZixjQUFJLE9BQU8sQ0FBQztBQUNaLGNBQUksV0FBVyxDQUFDO0FBQ2hCLGNBQUksWUFBWSxDQUFDO0FBQ2pCLGNBQUksWUFBWSxDQUFDO0FBQ2pCLGNBQUksWUFBWSxDQUFDO0FBQ2pCLGNBQUksWUFBWSxDQUFDO0FBQ2pCLGNBQUksZ0JBQWdCLENBQUM7QUFDckIsY0FBSSxnQkFBZ0IsQ0FBQztBQUNyQixjQUFJLGdCQUFnQixDQUFDO0FBQ3JCLGNBQUksZ0JBQWdCLENBQUM7QUFHckIsV0FBQyxXQUFZO0FBRVQsZ0JBQUksSUFBSSxDQUFDO0FBQ1QscUJBQVMsSUFBSSxHQUFHLElBQUksS0FBSyxLQUFLO0FBQzFCLGtCQUFJLElBQUksS0FBSztBQUNULGtCQUFFLENBQUMsSUFBSSxLQUFLO0FBQUEsY0FDaEIsT0FBTztBQUNILGtCQUFFLENBQUMsSUFBSyxLQUFLLElBQUs7QUFBQSxjQUN0QjtBQUFBLFlBQ0o7QUFHQSxnQkFBSSxJQUFJO0FBQ1IsZ0JBQUksS0FBSztBQUNULHFCQUFTLElBQUksR0FBRyxJQUFJLEtBQUssS0FBSztBQUUxQixrQkFBSSxLQUFLLEtBQU0sTUFBTSxJQUFNLE1BQU0sSUFBTSxNQUFNLElBQU0sTUFBTTtBQUN6RCxtQkFBTSxPQUFPLElBQU0sS0FBSyxNQUFRO0FBQ2hDLG1CQUFLLENBQUMsSUFBSTtBQUNWLHVCQUFTLEVBQUUsSUFBSTtBQUdmLGtCQUFJLEtBQUssRUFBRSxDQUFDO0FBQ1osa0JBQUksS0FBSyxFQUFFLEVBQUU7QUFDYixrQkFBSSxLQUFLLEVBQUUsRUFBRTtBQUdiLGtCQUFJLElBQUssRUFBRSxFQUFFLElBQUksTUFBVSxLQUFLO0FBQ2hDLHdCQUFVLENBQUMsSUFBSyxLQUFLLEtBQU8sTUFBTTtBQUNsQyx3QkFBVSxDQUFDLElBQUssS0FBSyxLQUFPLE1BQU07QUFDbEMsd0JBQVUsQ0FBQyxJQUFLLEtBQUssSUFBTyxNQUFNO0FBQ2xDLHdCQUFVLENBQUMsSUFBSTtBQUdmLGtCQUFJLElBQUssS0FBSyxXQUFjLEtBQUssUUFBWSxLQUFLLE1BQVUsSUFBSTtBQUNoRSw0QkFBYyxFQUFFLElBQUssS0FBSyxLQUFPLE1BQU07QUFDdkMsNEJBQWMsRUFBRSxJQUFLLEtBQUssS0FBTyxNQUFNO0FBQ3ZDLDRCQUFjLEVBQUUsSUFBSyxLQUFLLElBQU8sTUFBTTtBQUN2Qyw0QkFBYyxFQUFFLElBQUk7QUFHcEIsa0JBQUksQ0FBQyxHQUFHO0FBQ0osb0JBQUksS0FBSztBQUFBLGNBQ2IsT0FBTztBQUNILG9CQUFJLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUN4QixzQkFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDO0FBQUEsY0FDakI7QUFBQSxZQUNKO0FBQUEsVUFDSixHQUFFO0FBR0YsY0FBSSxPQUFPLENBQUMsR0FBTSxHQUFNLEdBQU0sR0FBTSxHQUFNLElBQU0sSUFBTSxJQUFNLEtBQU0sSUFBTSxFQUFJO0FBSzVFLGNBQUksTUFBTSxPQUFPLE1BQU0sWUFBWSxPQUFPO0FBQUEsWUFDdEMsVUFBVSxXQUFZO0FBQ2xCLGtCQUFJO0FBR0osa0JBQUksS0FBSyxZQUFZLEtBQUssbUJBQW1CLEtBQUssTUFBTTtBQUNwRDtBQUFBLGNBQ0o7QUFHQSxrQkFBSSxNQUFNLEtBQUssaUJBQWlCLEtBQUs7QUFDckMsa0JBQUksV0FBVyxJQUFJO0FBQ25CLGtCQUFJLFVBQVUsSUFBSSxXQUFXO0FBRzdCLGtCQUFJLFVBQVUsS0FBSyxXQUFXLFVBQVU7QUFHeEMsa0JBQUksVUFBVSxVQUFVLEtBQUs7QUFHN0Isa0JBQUksY0FBYyxLQUFLLGVBQWUsQ0FBQztBQUN2Qyx1QkFBUyxRQUFRLEdBQUcsUUFBUSxRQUFRLFNBQVM7QUFDekMsb0JBQUksUUFBUSxTQUFTO0FBQ2pCLDhCQUFZLEtBQUssSUFBSSxTQUFTLEtBQUs7QUFBQSxnQkFDdkMsT0FBTztBQUNILHNCQUFJLFlBQVksUUFBUSxDQUFDO0FBRXpCLHNCQUFJLEVBQUUsUUFBUSxVQUFVO0FBRXBCLHdCQUFLLEtBQUssSUFBTSxNQUFNO0FBR3RCLHdCQUFLLEtBQUssTUFBTSxFQUFFLEtBQUssS0FBTyxLQUFNLE1BQU0sS0FBTSxHQUFJLEtBQUssS0FBTyxLQUFNLE1BQU0sSUFBSyxHQUFJLEtBQUssSUFBSyxLQUFLLElBQUksR0FBSTtBQUc1Ryx5QkFBSyxLQUFNLFFBQVEsVUFBVyxDQUFDLEtBQUs7QUFBQSxrQkFDeEMsV0FBVyxVQUFVLEtBQUssUUFBUSxXQUFXLEdBQUc7QUFFNUMsd0JBQUssS0FBSyxNQUFNLEVBQUUsS0FBSyxLQUFPLEtBQU0sTUFBTSxLQUFNLEdBQUksS0FBSyxLQUFPLEtBQU0sTUFBTSxJQUFLLEdBQUksS0FBSyxJQUFLLEtBQUssSUFBSSxHQUFJO0FBQUEsa0JBQ2hIO0FBRUEsOEJBQVksS0FBSyxJQUFJLFlBQVksUUFBUSxPQUFPLElBQUk7QUFBQSxnQkFDeEQ7QUFBQSxjQUNKO0FBR0Esa0JBQUksaUJBQWlCLEtBQUssa0JBQWtCLENBQUM7QUFDN0MsdUJBQVMsV0FBVyxHQUFHLFdBQVcsUUFBUSxZQUFZO0FBQ2xELG9CQUFJLFFBQVEsU0FBUztBQUVyQixvQkFBSSxXQUFXLEdBQUc7QUFDZCxzQkFBSSxJQUFJLFlBQVksS0FBSztBQUFBLGdCQUM3QixPQUFPO0FBQ0gsc0JBQUksSUFBSSxZQUFZLFFBQVEsQ0FBQztBQUFBLGdCQUNqQztBQUVBLG9CQUFJLFdBQVcsS0FBSyxTQUFTLEdBQUc7QUFDNUIsaUNBQWUsUUFBUSxJQUFJO0FBQUEsZ0JBQy9CLE9BQU87QUFDSCxpQ0FBZSxRQUFRLElBQUksY0FBYyxLQUFLLE1BQU0sRUFBRSxDQUFDLElBQUksY0FBYyxLQUFNLE1BQU0sS0FBTSxHQUFJLENBQUMsSUFDckUsY0FBYyxLQUFNLE1BQU0sSUFBSyxHQUFJLENBQUMsSUFBSSxjQUFjLEtBQUssSUFBSSxHQUFJLENBQUM7QUFBQSxnQkFDbkc7QUFBQSxjQUNKO0FBQUEsWUFDSjtBQUFBLFlBRUEsY0FBYyxTQUFVLEdBQUcsUUFBUTtBQUMvQixtQkFBSyxjQUFjLEdBQUcsUUFBUSxLQUFLLGNBQWMsV0FBVyxXQUFXLFdBQVcsV0FBVyxJQUFJO0FBQUEsWUFDckc7QUFBQSxZQUVBLGNBQWMsU0FBVSxHQUFHLFFBQVE7QUFFL0Isa0JBQUksSUFBSSxFQUFFLFNBQVMsQ0FBQztBQUNwQixnQkFBRSxTQUFTLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQztBQUM1QixnQkFBRSxTQUFTLENBQUMsSUFBSTtBQUVoQixtQkFBSyxjQUFjLEdBQUcsUUFBUSxLQUFLLGlCQUFpQixlQUFlLGVBQWUsZUFBZSxlQUFlLFFBQVE7QUFHeEgsa0JBQUksSUFBSSxFQUFFLFNBQVMsQ0FBQztBQUNwQixnQkFBRSxTQUFTLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQztBQUM1QixnQkFBRSxTQUFTLENBQUMsSUFBSTtBQUFBLFlBQ3BCO0FBQUEsWUFFQSxlQUFlLFNBQVUsR0FBRyxRQUFRLGFBQWFDLFlBQVdDLFlBQVdDLFlBQVdDLFlBQVdDLE9BQU07QUFFL0Ysa0JBQUksVUFBVSxLQUFLO0FBR25CLGtCQUFJLEtBQUssRUFBRSxNQUFNLElBQVEsWUFBWSxDQUFDO0FBQ3RDLGtCQUFJLEtBQUssRUFBRSxTQUFTLENBQUMsSUFBSSxZQUFZLENBQUM7QUFDdEMsa0JBQUksS0FBSyxFQUFFLFNBQVMsQ0FBQyxJQUFJLFlBQVksQ0FBQztBQUN0QyxrQkFBSSxLQUFLLEVBQUUsU0FBUyxDQUFDLElBQUksWUFBWSxDQUFDO0FBR3RDLGtCQUFJLFFBQVE7QUFHWix1QkFBUyxRQUFRLEdBQUcsUUFBUSxTQUFTLFNBQVM7QUFFMUMsb0JBQUksS0FBS0osV0FBVSxPQUFPLEVBQUUsSUFBSUMsV0FBVyxPQUFPLEtBQU0sR0FBSSxJQUFJQyxXQUFXLE9BQU8sSUFBSyxHQUFJLElBQUlDLFdBQVUsS0FBSyxHQUFJLElBQUksWUFBWSxPQUFPO0FBQ3pJLG9CQUFJLEtBQUtILFdBQVUsT0FBTyxFQUFFLElBQUlDLFdBQVcsT0FBTyxLQUFNLEdBQUksSUFBSUMsV0FBVyxPQUFPLElBQUssR0FBSSxJQUFJQyxXQUFVLEtBQUssR0FBSSxJQUFJLFlBQVksT0FBTztBQUN6SSxvQkFBSSxLQUFLSCxXQUFVLE9BQU8sRUFBRSxJQUFJQyxXQUFXLE9BQU8sS0FBTSxHQUFJLElBQUlDLFdBQVcsT0FBTyxJQUFLLEdBQUksSUFBSUMsV0FBVSxLQUFLLEdBQUksSUFBSSxZQUFZLE9BQU87QUFDekksb0JBQUksS0FBS0gsV0FBVSxPQUFPLEVBQUUsSUFBSUMsV0FBVyxPQUFPLEtBQU0sR0FBSSxJQUFJQyxXQUFXLE9BQU8sSUFBSyxHQUFJLElBQUlDLFdBQVUsS0FBSyxHQUFJLElBQUksWUFBWSxPQUFPO0FBR3pJLHFCQUFLO0FBQ0wscUJBQUs7QUFDTCxxQkFBSztBQUNMLHFCQUFLO0FBQUEsY0FDVDtBQUdBLGtCQUFJLE1BQU9DLE1BQUssT0FBTyxFQUFFLEtBQUssS0FBT0EsTUFBTSxPQUFPLEtBQU0sR0FBSSxLQUFLLEtBQU9BLE1BQU0sT0FBTyxJQUFLLEdBQUksS0FBSyxJQUFLQSxNQUFLLEtBQUssR0FBSSxLQUFLLFlBQVksT0FBTztBQUM5SSxrQkFBSSxNQUFPQSxNQUFLLE9BQU8sRUFBRSxLQUFLLEtBQU9BLE1BQU0sT0FBTyxLQUFNLEdBQUksS0FBSyxLQUFPQSxNQUFNLE9BQU8sSUFBSyxHQUFJLEtBQUssSUFBS0EsTUFBSyxLQUFLLEdBQUksS0FBSyxZQUFZLE9BQU87QUFDOUksa0JBQUksTUFBT0EsTUFBSyxPQUFPLEVBQUUsS0FBSyxLQUFPQSxNQUFNLE9BQU8sS0FBTSxHQUFJLEtBQUssS0FBT0EsTUFBTSxPQUFPLElBQUssR0FBSSxLQUFLLElBQUtBLE1BQUssS0FBSyxHQUFJLEtBQUssWUFBWSxPQUFPO0FBQzlJLGtCQUFJLE1BQU9BLE1BQUssT0FBTyxFQUFFLEtBQUssS0FBT0EsTUFBTSxPQUFPLEtBQU0sR0FBSSxLQUFLLEtBQU9BLE1BQU0sT0FBTyxJQUFLLEdBQUksS0FBSyxJQUFLQSxNQUFLLEtBQUssR0FBSSxLQUFLLFlBQVksT0FBTztBQUc5SSxnQkFBRSxNQUFNLElBQVE7QUFDaEIsZ0JBQUUsU0FBUyxDQUFDLElBQUk7QUFDaEIsZ0JBQUUsU0FBUyxDQUFDLElBQUk7QUFDaEIsZ0JBQUUsU0FBUyxDQUFDLElBQUk7QUFBQSxZQUNwQjtBQUFBLFlBRUEsU0FBUyxNQUFJO0FBQUEsVUFDakIsQ0FBQztBQVVELFlBQUUsTUFBTSxZQUFZLGNBQWMsR0FBRztBQUFBLFFBQ3pDLEdBQUU7QUFHRixlQUFPTCxVQUFTO0FBQUEsTUFFakIsQ0FBQztBQUFBO0FBQUE7OztBQ3pPRDtBQUFBLG1EQUFBTSxTQUFBO0FBQUMsT0FBQyxTQUFVLE1BQU0sU0FBUyxPQUFPO0FBQ2pDLFlBQUksT0FBTyxZQUFZLFVBQVU7QUFFaEMsVUFBQUEsUUFBTyxVQUFVLFVBQVUsUUFBUSxnQkFBbUIsc0JBQXlCLGVBQWtCLGtCQUFxQixxQkFBd0I7QUFBQSxRQUMvSSxXQUNTLE9BQU8sV0FBVyxjQUFjLE9BQU8sS0FBSztBQUVwRCxpQkFBTyxDQUFDLFVBQVUsZ0JBQWdCLFNBQVMsWUFBWSxlQUFlLEdBQUcsT0FBTztBQUFBLFFBQ2pGLE9BQ0s7QUFFSixrQkFBUSxLQUFLLFFBQVE7QUFBQSxRQUN0QjtBQUFBLE1BQ0QsR0FBRSxTQUFNLFNBQVVDLFdBQVU7QUFFM0IsU0FBQyxXQUFZO0FBRVQsY0FBSSxJQUFJQTtBQUNSLGNBQUksUUFBUSxFQUFFO0FBQ2QsY0FBSSxZQUFZLE1BQU07QUFDdEIsY0FBSSxjQUFjLE1BQU07QUFDeEIsY0FBSSxTQUFTLEVBQUU7QUFHZixjQUFJLE1BQU07QUFBQSxZQUNOO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQzVCO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQzVCO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQzVCO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQzVCO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQzVCO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQzVCO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFVBQ2hDO0FBR0EsY0FBSSxNQUFNO0FBQUEsWUFDTjtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFDcEI7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQ3BCO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUNwQjtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFDcEI7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQ3BCO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUNwQjtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFDcEI7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFlBQUk7QUFBQSxZQUFJO0FBQUEsWUFBSTtBQUFBLFVBQ3hCO0FBR0EsY0FBSSxhQUFhLENBQUMsR0FBSSxHQUFJLEdBQUksR0FBSSxHQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtBQUdoRixjQUFJLFNBQVM7QUFBQSxZQUNUO0FBQUEsY0FDSSxHQUFLO0FBQUEsY0FDTCxXQUFZO0FBQUEsY0FDWixXQUFZO0FBQUEsY0FDWixXQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixXQUFXO0FBQUEsY0FDWCxXQUFZO0FBQUEsY0FDWixXQUFZO0FBQUEsY0FDWixXQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixHQUFLO0FBQUEsY0FDTCxXQUFZO0FBQUEsY0FDWixXQUFZO0FBQUEsY0FDWixXQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixXQUFXO0FBQUEsY0FDWCxXQUFZO0FBQUEsY0FDWixXQUFZO0FBQUEsY0FDWixXQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsY0FDWixZQUFZO0FBQUEsWUFDaEI7QUFBQSxZQUNBO0FBQUEsY0FDSSxHQUFLO0FBQUEsY0FDTCxVQUFXO0FBQUEsY0FDWCxVQUFXO0FBQUEsY0FDWCxVQUFXO0FBQUEsY0FDWCxVQUFXO0FBQUEsY0FDWCxVQUFXO0FBQUEsY0FDWCxXQUFXO0FBQUEsY0FDWCxXQUFXO0FBQUEsY0FDWCxXQUFXO0FBQUEsY0FDWCxXQUFXO0FBQUEsY0FDWCxXQUFXO0FBQUEsY0FDWCxXQUFXO0FBQUEsY0FDWCxXQUFXO0FBQUEsY0FDWCxXQUFXO0FBQUEsY0FDWCxXQUFXO0FBQUEsY0FDWCxXQUFXO0FBQUEsY0FDWCxTQUFVO0FBQUEsY0FDVixVQUFXO0FBQUEsY0FDWCxVQUFXO0FBQUEsY0FDWCxVQUFXO0FBQUEsY0FDWCxVQUFXO0FBQUEsY0FDWCxVQUFXO0FBQUEsY0FDWCxXQUFXO0FBQUEsY0FDWCxXQUFXO0FBQUEsY0FDWCxXQUFXO0FBQUEsY0FDWCxXQUFXO0FBQUEsY0FDWCxXQUFXO0FBQUEsY0FDWCxXQUFXO0FBQUEsY0FDWCxXQUFXO0FBQUEsY0FDWCxXQUFXO0FBQUEsY0FDWCxXQUFXO0FBQUEsY0FDWCxXQUFXO0FBQUEsY0FDWCxXQUFZO0FBQUEsY0FDWixXQUFZO0FBQUEsY0FDWixXQUFZO0FBQUEsY0FDWixXQUFZO0FBQUEsY0FDWixXQUFZO0FBQUEsY0FDWixXQUFZO0FBQUEsY0FDWixXQUFZO0FBQUEsY0FDWixXQUFZO0FBQUEsY0FDWixXQUFZO0FBQUEsY0FDWixXQUFZO0FBQUEsY0FDWixXQUFZO0FBQUEsY0FDWixXQUFZO0FBQUEsY0FDWixXQUFZO0FBQUEsY0FDWixXQUFZO0FBQUEsY0FDWixXQUFZO0FBQUEsY0FDWixXQUFZO0FBQUEsY0FDWixXQUFZO0FBQUEsY0FDWixXQUFZO0FBQUEsY0FDWixXQUFZO0FBQUEsY0FDWixXQUFZO0FBQUEsY0FDWixXQUFZO0FBQUEsY0FDWixXQUFZO0FBQUEsY0FDWixXQUFZO0FBQUEsY0FDWixXQUFZO0FBQUEsY0FDWixXQUFZO0FBQUEsY0FDWixXQUFZO0FBQUEsY0FDWixXQUFZO0FBQUEsY0FDWixXQUFZO0FBQUEsY0FDWixXQUFZO0FBQUEsY0FDWixXQUFZO0FBQUEsY0FDWixXQUFZO0FBQUEsY0FDWixXQUFZO0FBQUEsWUFDaEI7QUFBQSxZQUNBO0FBQUEsY0FDSSxHQUFLO0FBQUEsY0FDTCxTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixVQUFVO0FBQUEsY0FDVixVQUFVO0FBQUEsY0FDVixVQUFVO0FBQUEsY0FDVixVQUFVO0FBQUEsY0FDVixVQUFVO0FBQUEsY0FDVixVQUFVO0FBQUEsY0FDVixRQUFTO0FBQUEsY0FDVCxTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixTQUFVO0FBQUEsY0FDVixVQUFVO0FBQUEsY0FDVixVQUFVO0FBQUEsY0FDVixVQUFVO0FBQUEsY0FDVixVQUFVO0FBQUEsY0FDVixVQUFVO0FBQUEsY0FDVixVQUFVO0FBQUEsY0FDVixVQUFXO0FBQUEsY0FDWCxVQUFXO0FBQUEsY0FDWCxVQUFXO0FBQUEsY0FDWCxVQUFXO0FBQUEsY0FDWCxVQUFXO0FBQUEsY0FDWCxVQUFXO0FBQUEsY0FDWCxVQUFXO0FBQUEsY0FDWCxVQUFXO0FBQUEsY0FDWCxVQUFXO0FBQUEsY0FDWCxVQUFXO0FBQUEsY0FDWCxVQUFXO0FBQUEsY0FDWCxVQUFXO0FBQUEsY0FDWCxVQUFXO0FBQUEsY0FDWCxVQUFXO0FBQUEsY0FDWCxVQUFXO0FBQUEsY0FDWCxVQUFXO0FBQUEsY0FDWCxVQUFXO0FBQUEsY0FDWCxVQUFXO0FBQUEsY0FDWCxVQUFXO0FBQUEsY0FDWCxVQUFXO0FBQUEsY0FDWCxVQUFXO0FBQUEsY0FDWCxVQUFXO0FBQUEsY0FDWCxVQUFXO0FBQUEsY0FDWCxVQUFXO0FBQUEsY0FDWCxVQUFXO0FBQUEsY0FDWCxVQUFXO0FBQUEsY0FDWCxVQUFXO0FBQUEsY0FDWCxVQUFXO0FBQUEsY0FDWCxVQUFXO0FBQUEsY0FDWCxVQUFXO0FBQUEsY0FDWCxVQUFXO0FBQUEsY0FDWCxVQUFXO0FBQUEsWUFDZjtBQUFBLFlBQ0E7QUFBQSxjQUNJLEdBQUs7QUFBQSxjQUNMLE9BQVM7QUFBQSxjQUNULFFBQVM7QUFBQSxjQUNULFFBQVM7QUFBQSxjQUNULFFBQVM7QUFBQSxjQUNULFFBQVM7QUFBQSxjQUNULFFBQVM7QUFBQSxjQUNULFFBQVM7QUFBQSxjQUNULFFBQVM7QUFBQSxjQUNULFFBQVM7QUFBQSxjQUNULFFBQVM7QUFBQSxjQUNULFFBQVM7QUFBQSxjQUNULFFBQVM7QUFBQSxjQUNULFFBQVM7QUFBQSxjQUNULFFBQVM7QUFBQSxjQUNULFFBQVM7QUFBQSxjQUNULE9BQVE7QUFBQSxjQUNSLE9BQVM7QUFBQSxjQUNULFFBQVM7QUFBQSxjQUNULFFBQVM7QUFBQSxjQUNULFFBQVM7QUFBQSxjQUNULFFBQVM7QUFBQSxjQUNULFFBQVM7QUFBQSxjQUNULFFBQVM7QUFBQSxjQUNULFFBQVM7QUFBQSxjQUNULFFBQVM7QUFBQSxjQUNULFFBQVM7QUFBQSxjQUNULFFBQVM7QUFBQSxjQUNULFFBQVM7QUFBQSxjQUNULFFBQVM7QUFBQSxjQUNULFFBQVM7QUFBQSxjQUNULFNBQVM7QUFBQSxjQUNULFNBQVU7QUFBQSxjQUNWLFNBQVU7QUFBQSxjQUNWLFNBQVU7QUFBQSxjQUNWLFNBQVU7QUFBQSxjQUNWLFNBQVU7QUFBQSxjQUNWLFNBQVU7QUFBQSxjQUNWLFNBQVU7QUFBQSxjQUNWLFNBQVU7QUFBQSxjQUNWLFNBQVU7QUFBQSxjQUNWLFNBQVU7QUFBQSxjQUNWLFNBQVU7QUFBQSxjQUNWLFNBQVU7QUFBQSxjQUNWLFNBQVU7QUFBQSxjQUNWLFNBQVU7QUFBQSxjQUNWLFNBQVU7QUFBQSxjQUNWLFNBQVU7QUFBQSxjQUNWLFNBQVU7QUFBQSxjQUNWLFNBQVU7QUFBQSxjQUNWLFNBQVU7QUFBQSxjQUNWLFNBQVU7QUFBQSxjQUNWLFNBQVU7QUFBQSxjQUNWLFNBQVU7QUFBQSxjQUNWLFNBQVU7QUFBQSxjQUNWLFNBQVU7QUFBQSxjQUNWLFNBQVU7QUFBQSxjQUNWLFNBQVU7QUFBQSxjQUNWLFNBQVU7QUFBQSxjQUNWLFNBQVU7QUFBQSxjQUNWLFNBQVU7QUFBQSxjQUNWLFNBQVU7QUFBQSxjQUNWLFNBQVU7QUFBQSxjQUNWLFNBQVU7QUFBQSxZQUNkO0FBQUEsWUFDQTtBQUFBLGNBQ0ksR0FBSztBQUFBLGNBQ0wsTUFBUTtBQUFBLGNBQ1IsTUFBUTtBQUFBLGNBQ1IsT0FBUTtBQUFBLGNBQ1IsT0FBUTtBQUFBLGNBQ1IsT0FBUTtBQUFBLGNBQ1IsT0FBUTtBQUFBLGNBQ1IsT0FBUTtBQUFBLGNBQ1IsT0FBUTtBQUFBLGNBQ1IsT0FBUTtBQUFBLGNBQ1IsT0FBUTtBQUFBLGNBQ1IsT0FBUTtBQUFBLGNBQ1IsT0FBUTtBQUFBLGNBQ1IsT0FBUTtBQUFBLGNBQ1IsT0FBUTtBQUFBLGNBQ1IsT0FBUTtBQUFBLGNBQ1IsTUFBTztBQUFBLGNBQ1AsTUFBUTtBQUFBLGNBQ1IsT0FBUTtBQUFBLGNBQ1IsT0FBUTtBQUFBLGNBQ1IsT0FBUTtBQUFBLGNBQ1IsT0FBUTtBQUFBLGNBQ1IsT0FBUTtBQUFBLGNBQ1IsT0FBUTtBQUFBLGNBQ1IsT0FBUTtBQUFBLGNBQ1IsT0FBUTtBQUFBLGNBQ1IsT0FBUTtBQUFBLGNBQ1IsT0FBUTtBQUFBLGNBQ1IsT0FBUTtBQUFBLGNBQ1IsT0FBUTtBQUFBLGNBQ1IsT0FBUTtBQUFBLGNBQ1IsT0FBUTtBQUFBLGNBQ1IsT0FBUztBQUFBLGNBQ1QsT0FBUztBQUFBLGNBQ1QsT0FBUztBQUFBLGNBQ1QsT0FBUztBQUFBLGNBQ1QsT0FBUztBQUFBLGNBQ1QsT0FBUztBQUFBLGNBQ1QsT0FBUztBQUFBLGNBQ1QsT0FBUztBQUFBLGNBQ1QsT0FBUztBQUFBLGNBQ1QsUUFBUztBQUFBLGNBQ1QsUUFBUztBQUFBLGNBQ1QsUUFBUztBQUFBLGNBQ1QsUUFBUztBQUFBLGNBQ1QsUUFBUztBQUFBLGNBQ1QsUUFBUztBQUFBLGNBQ1QsUUFBUztBQUFBLGNBQ1QsT0FBUztBQUFBLGNBQ1QsT0FBUztBQUFBLGNBQ1QsT0FBUztBQUFBLGNBQ1QsT0FBUztBQUFBLGNBQ1QsT0FBUztBQUFBLGNBQ1QsT0FBUztBQUFBLGNBQ1QsT0FBUztBQUFBLGNBQ1QsT0FBUztBQUFBLGNBQ1QsUUFBUztBQUFBLGNBQ1QsUUFBUztBQUFBLGNBQ1QsUUFBUztBQUFBLGNBQ1QsUUFBUztBQUFBLGNBQ1QsUUFBUztBQUFBLGNBQ1QsUUFBUztBQUFBLGNBQ1QsUUFBUztBQUFBLGNBQ1QsUUFBUztBQUFBLFlBQ2I7QUFBQSxZQUNBO0FBQUEsY0FDSSxHQUFLO0FBQUEsY0FDTCxLQUFPO0FBQUEsY0FDUCxLQUFPO0FBQUEsY0FDUCxLQUFPO0FBQUEsY0FDUCxNQUFPO0FBQUEsY0FDUCxNQUFPO0FBQUEsY0FDUCxNQUFPO0FBQUEsY0FDUCxNQUFPO0FBQUEsY0FDUCxNQUFPO0FBQUEsY0FDUCxNQUFPO0FBQUEsY0FDUCxNQUFPO0FBQUEsY0FDUCxNQUFPO0FBQUEsY0FDUCxNQUFPO0FBQUEsY0FDUCxNQUFPO0FBQUEsY0FDUCxNQUFPO0FBQUEsY0FDUCxNQUFPO0FBQUEsY0FDUCxLQUFNO0FBQUEsY0FDTixLQUFPO0FBQUEsY0FDUCxLQUFPO0FBQUEsY0FDUCxLQUFPO0FBQUEsY0FDUCxNQUFPO0FBQUEsY0FDUCxNQUFPO0FBQUEsY0FDUCxNQUFPO0FBQUEsY0FDUCxNQUFPO0FBQUEsY0FDUCxNQUFPO0FBQUEsY0FDUCxNQUFPO0FBQUEsY0FDUCxNQUFPO0FBQUEsY0FDUCxNQUFPO0FBQUEsY0FDUCxNQUFPO0FBQUEsY0FDUCxNQUFPO0FBQUEsY0FDUCxNQUFPO0FBQUEsY0FDUCxNQUFPO0FBQUEsY0FDUCxNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsY0FDUixNQUFRO0FBQUEsWUFDWjtBQUFBLFlBQ0E7QUFBQSxjQUNJLEdBQUs7QUFBQSxjQUNMLElBQU07QUFBQSxjQUNOLElBQU07QUFBQSxjQUNOLElBQU07QUFBQSxjQUNOLElBQU07QUFBQSxjQUNOLElBQU07QUFBQSxjQUNOLElBQU07QUFBQSxjQUNOLEtBQU07QUFBQSxjQUNOLEtBQU07QUFBQSxjQUNOLEtBQU07QUFBQSxjQUNOLEtBQU07QUFBQSxjQUNOLEtBQU07QUFBQSxjQUNOLEtBQU07QUFBQSxjQUNOLEtBQU07QUFBQSxjQUNOLEtBQU07QUFBQSxjQUNOLEtBQU07QUFBQSxjQUNOLEdBQUs7QUFBQSxjQUNMLElBQU07QUFBQSxjQUNOLElBQU07QUFBQSxjQUNOLElBQU07QUFBQSxjQUNOLElBQU07QUFBQSxjQUNOLElBQU07QUFBQSxjQUNOLEtBQU07QUFBQSxjQUNOLEtBQU07QUFBQSxjQUNOLEtBQU07QUFBQSxjQUNOLEtBQU07QUFBQSxjQUNOLEtBQU07QUFBQSxjQUNOLEtBQU07QUFBQSxjQUNOLEtBQU07QUFBQSxjQUNOLEtBQU07QUFBQSxjQUNOLEtBQU07QUFBQSxjQUNOLEtBQU07QUFBQSxjQUNOLEtBQU87QUFBQSxjQUNQLEtBQU87QUFBQSxjQUNQLEtBQU87QUFBQSxjQUNQLEtBQU87QUFBQSxjQUNQLEtBQU87QUFBQSxjQUNQLEtBQU87QUFBQSxjQUNQLEtBQU87QUFBQSxjQUNQLEtBQU87QUFBQSxjQUNQLEtBQU87QUFBQSxjQUNQLEtBQU87QUFBQSxjQUNQLEtBQU87QUFBQSxjQUNQLEtBQU87QUFBQSxjQUNQLEtBQU87QUFBQSxjQUNQLEtBQU87QUFBQSxjQUNQLEtBQU87QUFBQSxjQUNQLEtBQU87QUFBQSxjQUNQLEtBQU87QUFBQSxjQUNQLEtBQU87QUFBQSxjQUNQLEtBQU87QUFBQSxjQUNQLEtBQU87QUFBQSxjQUNQLEtBQU87QUFBQSxjQUNQLEtBQU87QUFBQSxjQUNQLEtBQU87QUFBQSxjQUNQLEtBQU87QUFBQSxjQUNQLEtBQU87QUFBQSxjQUNQLEtBQU87QUFBQSxjQUNQLEtBQU87QUFBQSxjQUNQLEtBQU87QUFBQSxjQUNQLEtBQU87QUFBQSxjQUNQLEtBQU87QUFBQSxjQUNQLEtBQU87QUFBQSxjQUNQLEtBQU87QUFBQSxZQUNYO0FBQUEsWUFDQTtBQUFBLGNBQ0ksR0FBSztBQUFBLGNBQ0wsR0FBSztBQUFBLGNBQ0wsR0FBSztBQUFBLGNBQ0wsR0FBSztBQUFBLGNBQ0wsR0FBSztBQUFBLGNBQ0wsR0FBSztBQUFBLGNBQ0wsR0FBSztBQUFBLGNBQ0wsR0FBSztBQUFBLGNBQ0wsR0FBSztBQUFBLGNBQ0wsR0FBSztBQUFBLGNBQ0wsSUFBSztBQUFBLGNBQ0wsSUFBSztBQUFBLGNBQ0wsSUFBSztBQUFBLGNBQ0wsSUFBSztBQUFBLGNBQ0wsSUFBSztBQUFBLGNBQ0wsSUFBSztBQUFBLGNBQ0wsWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFBWTtBQUFBLGNBQ1osWUFB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LENBQUMsTUFBTSxNQUFRO0FBQ2xGLGNBQUUsQ0FBQyxJQUFLLEVBQUUsQ0FBQyxLQUFNLEVBQUUsQ0FBQyxLQUFLLElBQU8sRUFBRSxDQUFDLE1BQU0sTUFBTyxFQUFFLENBQUMsSUFBSztBQUN4RCxjQUFFLENBQUMsSUFBSyxFQUFFLENBQUMsS0FBTSxFQUFFLENBQUMsS0FBSyxLQUFPLEVBQUUsQ0FBQyxNQUFNLE9BQVMsRUFBRSxDQUFDLEtBQUssS0FBTyxFQUFFLENBQUMsTUFBTSxNQUFRO0FBQ2xGLGNBQUUsQ0FBQyxJQUFLLEVBQUUsQ0FBQyxLQUFNLEVBQUUsQ0FBQyxLQUFLLElBQU8sRUFBRSxDQUFDLE1BQU0sTUFBTyxFQUFFLENBQUMsSUFBSztBQUN4RCxjQUFFLENBQUMsSUFBSyxFQUFFLENBQUMsS0FBTSxFQUFFLENBQUMsS0FBSyxLQUFPLEVBQUUsQ0FBQyxNQUFNLE9BQVMsRUFBRSxDQUFDLEtBQUssS0FBTyxFQUFFLENBQUMsTUFBTSxNQUFRO0FBQ2xGLGNBQUUsQ0FBQyxJQUFLLEVBQUUsQ0FBQyxLQUFNLEVBQUUsQ0FBQyxLQUFLLElBQU8sRUFBRSxDQUFDLE1BQU0sTUFBTyxFQUFFLENBQUMsSUFBSztBQUN4RCxjQUFFLENBQUMsSUFBSyxFQUFFLENBQUMsS0FBTSxFQUFFLENBQUMsS0FBSyxLQUFPLEVBQUUsQ0FBQyxNQUFNLE9BQVMsRUFBRSxDQUFDLEtBQUssS0FBTyxFQUFFLENBQUMsTUFBTSxNQUFRO0FBQ2xGLGNBQUUsQ0FBQyxJQUFLLEVBQUUsQ0FBQyxLQUFNLEVBQUUsQ0FBQyxLQUFLLElBQU8sRUFBRSxDQUFDLE1BQU0sTUFBTyxFQUFFLENBQUMsSUFBSztBQUFBLFVBQzVEO0FBVUEsWUFBRSxTQUFTLGFBQWEsY0FBYyxNQUFNO0FBQUEsUUFDaEQsR0FBRTtBQUdGLGVBQU9ELFVBQVM7QUFBQSxNQUVqQixDQUFDO0FBQUE7QUFBQTs7O0FDL0xEO0FBQUEsdURBQUFFLFNBQUE7QUFBQyxPQUFDLFNBQVUsTUFBTSxTQUFTLE9BQU87QUFDakMsWUFBSSxPQUFPLFlB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LEdBQUcsS0FBSztBQUN4QixpQkFBRyxDQUFDLElBQUlBLEdBQUUsQ0FBQztBQUFBLFlBQ2Y7QUFHQSxZQUFBQSxHQUFFLENBQUMsSUFBS0EsR0FBRSxDQUFDLElBQUksYUFBYSxLQUFLLEtBQU07QUFDdkMsWUFBQUEsR0FBRSxDQUFDLElBQUtBLEdBQUUsQ0FBQyxJQUFJLGNBQWVBLEdBQUUsQ0FBQyxNQUFNLElBQU0sR0FBRyxDQUFDLE1BQU0sSUFBSyxJQUFJLEtBQU07QUFDdEUsWUFBQUEsR0FBRSxDQUFDLElBQUtBLEdBQUUsQ0FBQyxJQUFJLGFBQWVBLEdBQUUsQ0FBQyxNQUFNLElBQU0sR0FBRyxDQUFDLE1BQU0sSUFBSyxJQUFJLEtBQU07QUFDdEUsWUFBQUEsR0FBRSxDQUFDLElBQUtBLEdBQUUsQ0FBQyxJQUFJLGNBQWVBLEdBQUUsQ0FBQyxNQUFNLElBQU0sR0FBRyxDQUFDLE1BQU0sSUFBSyxJQUFJLEtBQU07QUFDdEUsWUFBQUEsR0FBRSxDQUFDLElBQUtBLEdBQUUsQ0FBQyxJQUFJLGNBQWVBLEdBQUUsQ0FBQyxNQUFNLElBQU0sR0FBRyxDQUFDLE1BQU0sSUFBSyxJQUFJLEtBQU07QUFDdEUsWUFBQUEsR0FBRSxDQUFDLElBQUtBLEdBQUUsQ0FBQyxJQUFJLGFBQWVBLEdBQUUsQ0FBQyxNQUFNLElBQU0sR0FBRyxDQUFDLE1BQU0sSUFBSyxJQUFJLEtBQU07QUFDdEUsWUFBQUEsR0FBRSxDQUFDLElBQUtBLEdBQUUsQ0FBQyxJQUFJLGNBQWVBLEdBQUUsQ0FBQyxNQUFNLElBQU0sR0FBRyxDQUFDLE1BQU0sSUFBSyxJQUFJLEtBQU07QUFDdEUsWUFBQUEsR0FBRSxDQUFDLElBQUtBLEdBQUUsQ0FBQyxJQUFJLGNBQWVBLEdBQUUsQ0FBQyxNQUFNLElBQU0sR0FBRyxDQUFDLE1BQU0sSUFBSyxJQUFJLEtBQU07QUFDdEUsaUJBQUssS0FBTUEsR0FBRSxDQUFDLE1BQU0sSUFBTSxHQUFHLENBQUMsTUFBTSxJQUFLLElBQUk7QUFHN0MscUJBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxL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Q3BELGFBQU87QUFBQSxJQUNYO0FBQUEsSUFFTyxnQkFBZ0IsT0FBdUI7QUFDMUMsYUFBTyxLQUFLLE9BQU8sS0FBSztBQUFBLElBQzVCO0FBQUEsRUFDSjs7O0FDdEJPLE1BQU0sZUFBTixjQUEyQkMsWUFBVztBQUFBLElBQ3pDLE9BQWMsY0FBMEI7QUFDcEMsYUFBTyxJQUFJLGFBQWE7QUFBQSxJQUM1QjtBQUFBLElBRU8sY0FBYztBQUNqQiwyQ0FBNkI7QUFBQSxJQUNqQztBQUFBLElBRU8sV0FBVyxPQUF1QjtBQUNyQyxjQUFRLElBQUksS0FBSztBQUNqQixhQUFPO0FBQUEsSUFDWDtBQUFBLElBRU8sZ0JBQWdCLE9BQXVCO0FBQzFDLGNBQVEsSUFBSSw2QkFBNkI7QUFDekMsZUFBUztBQUNULGFBQU8sTUFBTSxnQkFBZ0IsS0FBSztBQUFBLElBQ3RDO0FBQUEsRUFDSjs7O0FDWEEsU0FBTyxhQUFhO0FBQ3BCLFNBQU8sWUFBWTtBQUNuQixTQUFPLE9BQU8sUUFBUSxFQUFFLEdBQUcsa0JBQU0sQ0FBQzsiLAogICJuYW1lcyI6IFsibW9kdWxlIiwgIkNyeXB0b0pTIiwgIk1hdGgiLCAidW5kZWZpbmVkIiwgIm1vZHVsZSIsICJDcnlwdG9KUyIsICJ1bmRlZmluZWQiLCAibW9kdWxlIiwgIkNyeXB0b0pTIiwgIm1vZHVsZSIsICJDcnlwdG9KUyIsICJtb2R1bGUiLCAiQ3J5cHRvSlMiLCAiQmFzZTY0IiwgIm1vZHVsZSIsICJDcnlwdG9KUyIsICJtb2R1bGUiLCAiQ3J5cHRvSlMiLCAiTWF0aCIsICJtb2R1bGUiLCAiQ3J5cHRvSlMiLCAibW9kdWxlIiwgIkNyeXB0b0pTIiwgIk1hdGgiLCAibiIsICJIIiwgIm1vZHVsZSIsICJDcnlwdG9KUyIsICJtb2R1bGUiLCAiQ3J5cHRvSlMiLCAibW9kdWxlIiwgIkNyeXB0b0pTIiwgIm1vZHVsZSIsICJDcnlwdG9KUyIsICJNYXRoIiwgIm1vZHVsZSIsICJDcnlwdG9KUyIsICJNYXRoIiwgIm1vZHVsZSIsICJDcnlwdG9KUyIsICJtb2R1bGUiLCAiQ3J5cHRvSlMiLCAibW9kdWxlIiwgIkNyeXB0b0pTIiwgIm1vZHVsZSIsICJDcnlwdG9KUyIsICJ1bmRlZmluZWQiLCAiQmFzZTY0IiwgIkNCQyIsICJtb2R1bGUiLCAiQ3J5cHRvSlMiLCAibW9kdWxlIiwgIkNyeXB0b0pTIiwgIm1vZHVsZSIsICJDcnlwdG9KUyIsICJtb2R1bGUiLCAiQ3J5cHRvSlMiLCAibW9kdWxlIiwgIkNyeXB0b0pTIiwgIm1vZHVsZSIsICJDcnlwdG9KUyIsICJtb2R1bGUiLCAiQ3J5cHRvSlMiLCAibW9kdWxlIiwgIkNyeXB0b0pTIiwgIm1vZHVsZSIsICJDcnlwdG9KUyIsICJtb2R1bGUiLCAiQ3J5cHRvSlMiLCAibW9kdWxlIiwgIkNyeXB0b0pTIiwgInVuZGVmaW5lZCIsICJtb2R1bGUiLCAiQ3J5cHRvSlMiLCAiU1VCX01JWF8wIiwgIlNVQl9NSVhfMSIsICJTVUJfTUlYXzIiLCAiU1VCX01JWF8zIiwgIlNCT1giLCAibW9kdWxlIiwgIkNyeXB0b0pTIiwgIm1vZHVsZSIsICJDcnlwdG9KUyIsICJtb2R1bGUiLCAiQ3J5cHRvSlMiLCAiQyIsICJtb2R1bGUiLCAiQ3J5cHRvSlMiLCAiQyIsICJtb2R1bGUiLCAiQ3J5cHRvSlMiLCAiQXBwU3luYyIsICJkZWZpbmUiLCAiaXNBcmdzT2JqZWN0IiwgInR4IiwgIm9iaiIsICJhIiwgImRiIiwgImUiLCAiZGVmaW5lIiwgImdsb2JhbCIsICJCYXNlNjQiLCAiQXBwU3luYyIsICJzZWxmIiwgInR4IiwgImRhdGEiLCAiQ3J5cHRvSlMiLCAiQXBwU3RvcmFnZSIsICJBcHBTdG9yYWdlIl0KfQo=


                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GameUtils/lzstring.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4e2beUk1nVG9Y25YUCYHpCj', 'lzstring');
// Script/GameUtils/lzstring.js

"use strict";

// Copyright (c) 2013 Pieroxy <pieroxy@pieroxy.net>
// This work is free. You can redistribute it and/or modify it
// under the terms of the WTFPL, Version 2
// For more information see LICENSE.txt or http://www.wtfpl.net/
//
// For more information, the home page:
// http://pieroxy.net/blog/pages/lz-string/testing.html
//
// LZ-based compression algorithm, version 1.4.4
var LZString = function () {
  // private property
  var f = String.fromCharCode;
  var keyStrBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var keyStrUriSafe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
  var baseReverseDic = {};

  function getBaseValue(alphabet, character) {
    if (!baseReverseDic[alphabet]) {
      baseReverseDic[alphabet] = {};

      for (var i = 0; i < alphabet.length; i++) {
        baseReverseDic[alphabet][alphabet.charAt(i)] = i;
      }
    }

    return baseReverseDic[alphabet][character];
  }

  var LZString = {
    compressToBase64: function compressToBase64(input) {
      if (input == null) return "";

      var res = LZString._compress(input, 6, function (a) {
        return keyStrBase64.charAt(a);
      });

      switch (res.length % 4) {
        // To produce valid Base64
        default: // When could this happen ?

        case 0:
          return res;

        case 1:
          return res + "===";

        case 2:
          return res + "==";

        case 3:
          return res + "=";
      }
    },
    decompressFromBase64: function decompressFromBase64(input) {
      if (input == null) return "";
      if (input == "") return null;
      return LZString._decompress(input.length, 32, function (index) {
        return getBaseValue(keyStrBase64, input.charAt(index));
      });
    },
    compressToUTF16: function compressToUTF16(input) {
      if (input == null) return "";
      return LZString._compress(input, 15, function (a) {
        return f(a + 32);
      }) + " ";
    },
    decompressFromUTF16: function decompressFromUTF16(compressed) {
      if (compressed == null) return "";
      if (compressed == "") return null;
      return LZString._decompress(compressed.length, 16384, function (index) {
        return compressed.charCodeAt(index) - 32;
      });
    },
    //compress into uint8array (UCS-2 big endian format)
    compressToUint8Array: function compressToUint8Array(uncompressed) {
      var compressed = LZString.compress(uncompressed);
      var buf = new Uint8Array(compressed.length * 2); // 2 bytes per character

      for (var i = 0, TotalLen = compressed.length; i < TotalLen; i++) {
        var current_value = compressed.charCodeAt(i);
        buf[i * 2] = current_value >>> 8;
        buf[i * 2 + 1] = current_value % 256;
      }

      return buf;
    },
    //decompress from uint8array (UCS-2 big endian format)
    decompressFromUint8Array: function decompressFromUint8Array(compressed) {
      if (compressed === null || compressed === undefined) {
        return LZString.decompress(compressed);
      } else {
        var buf = new Array(compressed.length / 2); // 2 bytes per character

        for (var i = 0, TotalLen = buf.length; i < TotalLen; i++) {
          buf[i] = compressed[i * 2] * 256 + compressed[i * 2 + 1];
        }

        var result = [];
        buf.forEach(function (c) {
          result.push(f(c));
        });
        return LZString.decompress(result.join(''));
      }
    },
    //compress into a string that is already URI encoded
    compressToEncodedURIComponent: function compressToEncodedURIComponent(input) {
      if (input == null) return "";
      return LZString._compress(input, 6, function (a) {
        return keyStrUriSafe.charAt(a);
      });
    },
    //decompress from an output of compressToEncodedURIComponent
    decompressFromEncodedURIComponent: function decompressFromEncodedURIComponent(input) {
      if (input == null) return "";
      if (input == "") return null;
      input = input.replace(/ /g, "+");
      return LZString._decompress(input.length, 32, function (index) {
        return getBaseValue(keyStrUriSafe, input.charAt(index));
      });
    },
    compress: function compress(uncompressed) {
      return LZString._compress(uncompressed, 16, function (a) {
        return f(a);
      });
    },
    _compress: function _compress(uncompressed, bitsPerChar, getCharFromInt) {
      if (uncompressed == null) return "";
      var i,
          value,
          context_dictionary = {},
          context_dictionaryToCreate = {},
          context_c = "",
          context_wc = "",
          context_w = "",
          context_enlargeIn = 2,
          // Compensate for the first entry which should not count
      context_dictSize = 3,
          context_numBits = 2,
          context_data = [],
          context_data_val = 0,
          context_data_position = 0,
          ii;

      for (ii = 0; ii < uncompressed.length; ii += 1) {
        context_c = uncompressed.charAt(ii);

        if (!Object.prototype.hasOwnProperty.call(context_dictionary, context_c)) {
          context_dictionary[context_c] = context_dictSize++;
          context_dictionaryToCreate[context_c] = true;
        }

        context_wc = context_w + context_c;

        if (Object.prototype.hasOwnProperty.call(context_dictionary, context_wc)) {
          context_w = context_wc;
        } else {
          if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
            if (context_w.charCodeAt(0) < 256) {
              for (i = 0; i < context_numBits; i++) {
                context_data_val = context_data_val << 1;

                if (context_data_position == bitsPerChar - 1) {
                  context_data_position = 0;
                  context_data.push(getCharFromInt(context_data_val));
                  context_data_val = 0;
                } else {
                  context_data_position++;
                }
              }

              value = context_w.charCodeAt(0);

              for (i = 0; i < 8; i++) {
                context_data_val = context_data_val << 1 | value & 1;

                if (context_data_position == bitsPerChar - 1) {
                  context_data_position = 0;
                  context_data.push(getCharFromInt(context_data_val));
                  context_data_val = 0;
                } else {
                  context_data_position++;
                }

                value = value >> 1;
              }
            } else {
              value = 1;

              for (i = 0; i < context_numBits; i++) {
                context_data_val = context_data_val << 1 | value;

                if (context_data_position == bitsPerChar - 1) {
                  context_data_position = 0;
                  context_data.push(getCharFromInt(context_data_val));
                  context_data_val = 0;
                } else {
                  context_data_position++;
                }

                value = 0;
              }

              value = context_w.charCodeAt(0);

              for (i = 0; i < 16; i++) {
                context_data_val = context_data_val << 1 | value & 1;

                if (context_data_position == bitsPerChar - 1) {
                  context_data_position = 0;
                  context_data.push(getCharFromInt(context_data_val));
                  context_data_val = 0;
                } else {
                  context_data_position++;
                }

                value = value >> 1;
              }
            }

            context_enlargeIn--;

            if (context_enlargeIn == 0) {
              context_enlargeIn = Math.pow(2, context_numBits);
              context_numBits++;
            }

            delete context_dictionaryToCreate[context_w];
          } else {
            value = context_dictionary[context_w];

            for (i = 0; i < context_numBits; i++) {
              context_data_val = context_data_val << 1 | value & 1;

              if (context_data_position == bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }

              value = value >> 1;
            }
          }

          context_enlargeIn--;

          if (context_enlargeIn == 0) {
            context_enlargeIn = Math.pow(2, context_numBits);
            context_numBits++;
          } // Add wc to the dictionary.


          context_dictionary[context_wc] = context_dictSize++;
          context_w = String(context_c);
        }
      } // Output the code for w.


      if (context_w !== "") {
        if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
          if (context_w.charCodeAt(0) < 256) {
            for (i = 0; i < context_numBits; i++) {
              context_data_val = context_data_val << 1;

              if (context_data_position == bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
            }

            value = context_w.charCodeAt(0);

            for (i = 0; i < 8; i++) {
              context_data_val = context_data_val << 1 | value & 1;

              if (context_data_position == bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }

              value = value >> 1;
            }
          } else {
            value = 1;

            for (i = 0; i < context_numBits; i++) {
              context_data_val = context_data_val << 1 | value;

              if (context_data_position == bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }

              value = 0;
            }

            value = context_w.charCodeAt(0);

            for (i = 0; i < 16; i++) {
              context_data_val = context_data_val << 1 | value & 1;

              if (context_data_position == bitsPerChar - 1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }

              value = value >> 1;
            }
          }

          context_enlargeIn--;

          if (context_enlargeIn == 0) {
            context_enlargeIn = Math.pow(2, context_numBits);
            context_numBits++;
          }

          delete context_dictionaryToCreate[context_w];
        } else {
          value = context_dictionary[context_w];

          for (i = 0; i < context_numBits; i++) {
            context_data_val = context_data_val << 1 | value & 1;

            if (context_data_position == bitsPerChar - 1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }

            value = value >> 1;
          }
        }

        context_enlargeIn--;

        if (context_enlargeIn == 0) {
          context_enlargeIn = Math.pow(2, context_numBits);
          context_numBits++;
        }
      } // Mark the end of the stream


      value = 2;

      for (i = 0; i < context_numBits; i++) {
        context_data_val = context_data_val << 1 | value & 1;

        if (context_data_position == bitsPerChar - 1) {
          context_data_position = 0;
          context_data.push(getCharFromInt(context_data_val));
          context_data_val = 0;
        } else {
          context_data_position++;
        }

        value = value >> 1;
      } // Flush the last char


      while (true) {
        context_data_val = context_data_val << 1;

        if (context_data_position == bitsPerChar - 1) {
          context_data.push(getCharFromInt(context_data_val));
          break;
        } else context_data_position++;
      }

      return context_data.join('');
    },
    decompress: function decompress(compressed) {
      if (compressed == null) return "";
      if (compressed == "") return null;
      return LZString._decompress(compressed.length, 32768, function (index) {
        return compressed.charCodeAt(index);
      });
    },
    _decompress: function _decompress(length, resetValue, getNextValue) {
      var dictionary = [],
          next,
          enlargeIn = 4,
          dictSize = 4,
          numBits = 3,
          entry = "",
          result = [],
          i,
          w,
          bits,
          resb,
          maxpower,
          power,
          c,
          data = {
        val: getNextValue(0),
        position: resetValue,
        index: 1
      };

      for (i = 0; i < 3; i += 1) {
        dictionary[i] = i;
      }

      bits = 0;
      maxpower = Math.pow(2, 2);
      power = 1;

      while (power != maxpower) {
        resb = data.val & data.position;
        data.position >>= 1;

        if (data.position == 0) {
          data.position = resetValue;
          data.val = getNextValue(data.index++);
        }

        bits |= (resb > 0 ? 1 : 0) * power;
        power <<= 1;
      }

      switch (next = bits) {
        case 0:
          bits = 0;
          maxpower = Math.pow(2, 8);
          power = 1;

          while (power != maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;

            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }

            bits |= (resb > 0 ? 1 : 0) * power;
            power <<= 1;
          }

          c = f(bits);
          break;

        case 1:
          bits = 0;
          maxpower = Math.pow(2, 16);
          power = 1;

          while (power != maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;

            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }

            bits |= (resb > 0 ? 1 : 0) * power;
            power <<= 1;
          }

          c = f(bits);
          break;

        case 2:
          return "";
      }

      dictionary[3] = c;
      w = c;
      result.push(c);

      while (true) {
        if (data.index > length) {
          return "";
        }

        bits = 0;
        maxpower = Math.pow(2, numBits);
        power = 1;

        while (power != maxpower) {
          resb = data.val & data.position;
          data.position >>= 1;

          if (data.position == 0) {
            data.position = resetValue;
            data.val = getNextValue(data.index++);
          }

          bits |= (resb > 0 ? 1 : 0) * power;
          power <<= 1;
        }

        switch (c = bits) {
          case 0:
            bits = 0;
            maxpower = Math.pow(2, 8);
            power = 1;

            while (power != maxpower) {
              resb = data.val & data.position;
              data.position >>= 1;

              if (data.position == 0) {
                data.position = resetValue;
                data.val = getNextValue(data.index++);
              }

              bits |= (resb > 0 ? 1 : 0) * power;
              power <<= 1;
            }

            dictionary[dictSize++] = f(bits);
            c = dictSize - 1;
            enlargeIn--;
            break;

          case 1:
            bits = 0;
            maxpower = Math.pow(2, 16);
            power = 1;

            while (power != maxpower) {
              resb = data.val & data.position;
              data.position >>= 1;

              if (data.position == 0) {
                data.position = resetValue;
                data.val = getNextValue(data.index++);
              }

              bits |= (resb > 0 ? 1 : 0) * power;
              power <<= 1;
            }

            dictionary[dictSize++] = f(bits);
            c = dictSize - 1;
            enlargeIn--;
            break;

          case 2:
            return result.join('');
        }

        if (enlargeIn == 0) {
          enlargeIn = Math.pow(2, numBits);
          numBits++;
        }

        if (dictionary[c]) {
          entry = dictionary[c];
        } else {
          if (c === dictSize) {
            entry = w + w.charAt(0);
          } else {
            return null;
          }
        }

        result.push(entry); // Add w+entry[0] to the dictionary.

        dictionary[dictSize++] = w + entry.charAt(0);
        enlargeIn--;
        w = entry;

        if (enlargeIn == 0) {
          enlargeIn = Math.pow(2, numBits);
          numBits++;
        }
      }
    }
  };
  return LZString;
}();

if (typeof define === 'function' && define.amd) {
  define(function () {
    return LZString;
  });
} else if (typeof module !== 'undefined' && module != null) {
  module.exports = LZString;
} else if (typeof angular !== 'undefined' && angular != null) {
  angular.module('LZString', []).factory('LZString', function () {
    return LZString;
  });
}

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxHYW1lVXRpbHNcXGx6c3RyaW5nLmpzIl0sIm5hbWVzIjpbIkxaU3RyaW5nIiwiZiIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImtleVN0ckJhc2U2NCIsImtleVN0clVyaVNhZmUiLCJiYXNlUmV2ZXJzZURpYyIsImdldEJhc2VWYWx1ZSIsImFscGhhYmV0IiwiY2hhcmFjdGVyIiwiaSIsImxlbmd0aCIsImNoYXJBdCIsImNvbXByZXNzVG9CYXNlNjQiLCJpbnB1dCIsInJlcyIsIl9jb21wcmVzcyIsImEiLCJkZWNvbXByZXNzRnJvbUJhc2U2NCIsIl9kZWNvbXByZXNzIiwiaW5kZXgiLCJjb21wcmVzc1RvVVRGMTYiLCJkZWNvbXByZXNzRnJvbVVURjE2IiwiY29tcHJlc3NlZCIsImNoYXJDb2RlQXQiLCJjb21wcmVzc1RvVWludDhBcnJheSIsInVuY29tcHJlc3NlZCIsImNvbXByZXNzIiwiYnVmIiwiVWludDhBcnJheSIsIlRvdGFsTGVuIiwiY3VycmVudF92YWx1ZSIsImRlY29tcHJlc3NGcm9tVWludDhBcnJheSIsInVuZGVmaW5lZCIsImRlY29tcHJlc3MiLCJBcnJheSIsInJlc3VsdCIsImZvckVhY2giLCJjIiwicHVzaCIsImpvaW4iLCJjb21wcmVzc1RvRW5jb2RlZFVSSUNvbXBvbmVudCIsImRlY29tcHJlc3NGcm9tRW5jb2RlZFVSSUNvbXBvbmVudCIsInJlcGxhY2UiLCJiaXRzUGVyQ2hhciIsImdldENoYXJGcm9tSW50IiwidmFsdWUiLCJjb250ZXh0X2RpY3Rpb25hcnkiLCJjb250ZXh0X2RpY3Rpb25hcnlUb0NyZWF0ZSIsImNvbnRleHRfYyIsImNvbnRleHRfd2MiLCJjb250ZXh0X3ciLCJjb250ZXh0X2VubGFyZ2VJbiIsImNvbnRleHRfZGljdFNpemUiLCJjb250ZXh0X251bUJpdHMiLCJjb250ZXh0X2RhdGEiLCJjb250ZXh0X2RhdGFfdmFsIiwiY29udGV4dF9kYXRhX3Bvc2l0aW9uIiwiaWkiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJNYXRoIiwicG93IiwicmVzZXRWYWx1ZSIsImdldE5leHRWYWx1ZSIsImRpY3Rpb25hcnkiLCJuZXh0IiwiZW5sYXJnZUluIiwiZGljdFNpemUiLCJudW1CaXRzIiwiZW50cnkiLCJ3IiwiYml0cyIsInJlc2IiLCJtYXhwb3dlciIsInBvd2VyIiwiZGF0YSIsInZhbCIsInBvc2l0aW9uIiwiZGVmaW5lIiwiYW1kIiwibW9kdWxlIiwiZXhwb3J0cyIsImFuZ3VsYXIiLCJmYWN0b3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlBLFFBQVEsR0FBSSxZQUFXO0FBRTNCO0FBQ0EsTUFBSUMsQ0FBQyxHQUFHQyxNQUFNLENBQUNDLFlBQWY7QUFDQSxNQUFJQyxZQUFZLEdBQUcsbUVBQW5CO0FBQ0EsTUFBSUMsYUFBYSxHQUFHLG1FQUFwQjtBQUNBLE1BQUlDLGNBQWMsR0FBRyxFQUFyQjs7QUFFQSxXQUFTQyxZQUFULENBQXNCQyxRQUF0QixFQUFnQ0MsU0FBaEMsRUFBMkM7QUFDekMsUUFBSSxDQUFDSCxjQUFjLENBQUNFLFFBQUQsQ0FBbkIsRUFBK0I7QUFDN0JGLE1BQUFBLGNBQWMsQ0FBQ0UsUUFBRCxDQUFkLEdBQTJCLEVBQTNCOztBQUNBLFdBQUssSUFBSUUsQ0FBQyxHQUFDLENBQVgsRUFBZUEsQ0FBQyxHQUFDRixRQUFRLENBQUNHLE1BQTFCLEVBQW1DRCxDQUFDLEVBQXBDLEVBQXdDO0FBQ3RDSixRQUFBQSxjQUFjLENBQUNFLFFBQUQsQ0FBZCxDQUF5QkEsUUFBUSxDQUFDSSxNQUFULENBQWdCRixDQUFoQixDQUF6QixJQUErQ0EsQ0FBL0M7QUFDRDtBQUNGOztBQUNELFdBQU9KLGNBQWMsQ0FBQ0UsUUFBRCxDQUFkLENBQXlCQyxTQUF6QixDQUFQO0FBQ0Q7O0FBRUQsTUFBSVQsUUFBUSxHQUFHO0FBQ2JhLElBQUFBLGdCQUFnQixFQUFHLDBCQUFVQyxLQUFWLEVBQWlCO0FBQ2xDLFVBQUlBLEtBQUssSUFBSSxJQUFiLEVBQW1CLE9BQU8sRUFBUDs7QUFDbkIsVUFBSUMsR0FBRyxHQUFHZixRQUFRLENBQUNnQixTQUFULENBQW1CRixLQUFuQixFQUEwQixDQUExQixFQUE2QixVQUFTRyxDQUFULEVBQVc7QUFBQyxlQUFPYixZQUFZLENBQUNRLE1BQWIsQ0FBb0JLLENBQXBCLENBQVA7QUFBK0IsT0FBeEUsQ0FBVjs7QUFDQSxjQUFRRixHQUFHLENBQUNKLE1BQUosR0FBYSxDQUFyQjtBQUEwQjtBQUMxQixnQkFEQSxDQUNTOztBQUNULGFBQUssQ0FBTDtBQUFTLGlCQUFPSSxHQUFQOztBQUNULGFBQUssQ0FBTDtBQUFTLGlCQUFPQSxHQUFHLEdBQUMsS0FBWDs7QUFDVCxhQUFLLENBQUw7QUFBUyxpQkFBT0EsR0FBRyxHQUFDLElBQVg7O0FBQ1QsYUFBSyxDQUFMO0FBQVMsaUJBQU9BLEdBQUcsR0FBQyxHQUFYO0FBTFQ7QUFPRCxLQVhZO0FBYWJHLElBQUFBLG9CQUFvQixFQUFHLDhCQUFVSixLQUFWLEVBQWlCO0FBQ3RDLFVBQUlBLEtBQUssSUFBSSxJQUFiLEVBQW1CLE9BQU8sRUFBUDtBQUNuQixVQUFJQSxLQUFLLElBQUksRUFBYixFQUFpQixPQUFPLElBQVA7QUFDakIsYUFBT2QsUUFBUSxDQUFDbUIsV0FBVCxDQUFxQkwsS0FBSyxDQUFDSCxNQUEzQixFQUFtQyxFQUFuQyxFQUF1QyxVQUFTUyxLQUFULEVBQWdCO0FBQUUsZUFBT2IsWUFBWSxDQUFDSCxZQUFELEVBQWVVLEtBQUssQ0FBQ0YsTUFBTixDQUFhUSxLQUFiLENBQWYsQ0FBbkI7QUFBeUQsT0FBbEgsQ0FBUDtBQUNELEtBakJZO0FBbUJiQyxJQUFBQSxlQUFlLEVBQUcseUJBQVVQLEtBQVYsRUFBaUI7QUFDakMsVUFBSUEsS0FBSyxJQUFJLElBQWIsRUFBbUIsT0FBTyxFQUFQO0FBQ25CLGFBQU9kLFFBQVEsQ0FBQ2dCLFNBQVQsQ0FBbUJGLEtBQW5CLEVBQTBCLEVBQTFCLEVBQThCLFVBQVNHLENBQVQsRUFBVztBQUFDLGVBQU9oQixDQUFDLENBQUNnQixDQUFDLEdBQUMsRUFBSCxDQUFSO0FBQWdCLE9BQTFELElBQThELEdBQXJFO0FBQ0QsS0F0Qlk7QUF3QmJLLElBQUFBLG1CQUFtQixFQUFFLDZCQUFVQyxVQUFWLEVBQXNCO0FBQ3pDLFVBQUlBLFVBQVUsSUFBSSxJQUFsQixFQUF3QixPQUFPLEVBQVA7QUFDeEIsVUFBSUEsVUFBVSxJQUFJLEVBQWxCLEVBQXNCLE9BQU8sSUFBUDtBQUN0QixhQUFPdkIsUUFBUSxDQUFDbUIsV0FBVCxDQUFxQkksVUFBVSxDQUFDWixNQUFoQyxFQUF3QyxLQUF4QyxFQUErQyxVQUFTUyxLQUFULEVBQWdCO0FBQUUsZUFBT0csVUFBVSxDQUFDQyxVQUFYLENBQXNCSixLQUF0QixJQUErQixFQUF0QztBQUEyQyxPQUE1RyxDQUFQO0FBQ0QsS0E1Qlk7QUE4QmI7QUFDQUssSUFBQUEsb0JBQW9CLEVBQUUsOEJBQVVDLFlBQVYsRUFBd0I7QUFDNUMsVUFBSUgsVUFBVSxHQUFHdkIsUUFBUSxDQUFDMkIsUUFBVCxDQUFrQkQsWUFBbEIsQ0FBakI7QUFDQSxVQUFJRSxHQUFHLEdBQUMsSUFBSUMsVUFBSixDQUFlTixVQUFVLENBQUNaLE1BQVgsR0FBa0IsQ0FBakMsQ0FBUixDQUY0QyxDQUVDOztBQUU3QyxXQUFLLElBQUlELENBQUMsR0FBQyxDQUFOLEVBQVNvQixRQUFRLEdBQUNQLFVBQVUsQ0FBQ1osTUFBbEMsRUFBMENELENBQUMsR0FBQ29CLFFBQTVDLEVBQXNEcEIsQ0FBQyxFQUF2RCxFQUEyRDtBQUN6RCxZQUFJcUIsYUFBYSxHQUFHUixVQUFVLENBQUNDLFVBQVgsQ0FBc0JkLENBQXRCLENBQXBCO0FBQ0FrQixRQUFBQSxHQUFHLENBQUNsQixDQUFDLEdBQUMsQ0FBSCxDQUFILEdBQVdxQixhQUFhLEtBQUssQ0FBN0I7QUFDQUgsUUFBQUEsR0FBRyxDQUFDbEIsQ0FBQyxHQUFDLENBQUYsR0FBSSxDQUFMLENBQUgsR0FBYXFCLGFBQWEsR0FBRyxHQUE3QjtBQUNEOztBQUNELGFBQU9ILEdBQVA7QUFDRCxLQXpDWTtBQTJDYjtBQUNBSSxJQUFBQSx3QkFBd0IsRUFBQyxrQ0FBVVQsVUFBVixFQUFzQjtBQUM3QyxVQUFJQSxVQUFVLEtBQUcsSUFBYixJQUFxQkEsVUFBVSxLQUFHVSxTQUF0QyxFQUFnRDtBQUM1QyxlQUFPakMsUUFBUSxDQUFDa0MsVUFBVCxDQUFvQlgsVUFBcEIsQ0FBUDtBQUNILE9BRkQsTUFFTztBQUNILFlBQUlLLEdBQUcsR0FBQyxJQUFJTyxLQUFKLENBQVVaLFVBQVUsQ0FBQ1osTUFBWCxHQUFrQixDQUE1QixDQUFSLENBREcsQ0FDcUM7O0FBQ3hDLGFBQUssSUFBSUQsQ0FBQyxHQUFDLENBQU4sRUFBU29CLFFBQVEsR0FBQ0YsR0FBRyxDQUFDakIsTUFBM0IsRUFBbUNELENBQUMsR0FBQ29CLFFBQXJDLEVBQStDcEIsQ0FBQyxFQUFoRCxFQUFvRDtBQUNsRGtCLFVBQUFBLEdBQUcsQ0FBQ2xCLENBQUQsQ0FBSCxHQUFPYSxVQUFVLENBQUNiLENBQUMsR0FBQyxDQUFILENBQVYsR0FBZ0IsR0FBaEIsR0FBb0JhLFVBQVUsQ0FBQ2IsQ0FBQyxHQUFDLENBQUYsR0FBSSxDQUFMLENBQXJDO0FBQ0Q7O0FBRUQsWUFBSTBCLE1BQU0sR0FBRyxFQUFiO0FBQ0FSLFFBQUFBLEdBQUcsQ0FBQ1MsT0FBSixDQUFZLFVBQVVDLENBQVYsRUFBYTtBQUN2QkYsVUFBQUEsTUFBTSxDQUFDRyxJQUFQLENBQVl0QyxDQUFDLENBQUNxQyxDQUFELENBQWI7QUFDRCxTQUZEO0FBR0EsZUFBT3RDLFFBQVEsQ0FBQ2tDLFVBQVQsQ0FBb0JFLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLEVBQVosQ0FBcEIsQ0FBUDtBQUVIO0FBRUYsS0E3RFk7QUFnRWI7QUFDQUMsSUFBQUEsNkJBQTZCLEVBQUUsdUNBQVUzQixLQUFWLEVBQWlCO0FBQzlDLFVBQUlBLEtBQUssSUFBSSxJQUFiLEVBQW1CLE9BQU8sRUFBUDtBQUNuQixhQUFPZCxRQUFRLENBQUNnQixTQUFULENBQW1CRixLQUFuQixFQUEwQixDQUExQixFQUE2QixVQUFTRyxDQUFULEVBQVc7QUFBQyxlQUFPWixhQUFhLENBQUNPLE1BQWQsQ0FBcUJLLENBQXJCLENBQVA7QUFBZ0MsT0FBekUsQ0FBUDtBQUNELEtBcEVZO0FBc0ViO0FBQ0F5QixJQUFBQSxpQ0FBaUMsRUFBQywyQ0FBVTVCLEtBQVYsRUFBaUI7QUFDakQsVUFBSUEsS0FBSyxJQUFJLElBQWIsRUFBbUIsT0FBTyxFQUFQO0FBQ25CLFVBQUlBLEtBQUssSUFBSSxFQUFiLEVBQWlCLE9BQU8sSUFBUDtBQUNqQkEsTUFBQUEsS0FBSyxHQUFHQSxLQUFLLENBQUM2QixPQUFOLENBQWMsSUFBZCxFQUFvQixHQUFwQixDQUFSO0FBQ0EsYUFBTzNDLFFBQVEsQ0FBQ21CLFdBQVQsQ0FBcUJMLEtBQUssQ0FBQ0gsTUFBM0IsRUFBbUMsRUFBbkMsRUFBdUMsVUFBU1MsS0FBVCxFQUFnQjtBQUFFLGVBQU9iLFlBQVksQ0FBQ0YsYUFBRCxFQUFnQlMsS0FBSyxDQUFDRixNQUFOLENBQWFRLEtBQWIsQ0FBaEIsQ0FBbkI7QUFBMEQsT0FBbkgsQ0FBUDtBQUNELEtBNUVZO0FBOEViTyxJQUFBQSxRQUFRLEVBQUUsa0JBQVVELFlBQVYsRUFBd0I7QUFDaEMsYUFBTzFCLFFBQVEsQ0FBQ2dCLFNBQVQsQ0FBbUJVLFlBQW5CLEVBQWlDLEVBQWpDLEVBQXFDLFVBQVNULENBQVQsRUFBVztBQUFDLGVBQU9oQixDQUFDLENBQUNnQixDQUFELENBQVI7QUFBYSxPQUE5RCxDQUFQO0FBQ0QsS0FoRlk7QUFpRmJELElBQUFBLFNBQVMsRUFBRSxtQkFBVVUsWUFBVixFQUF3QmtCLFdBQXhCLEVBQXFDQyxjQUFyQyxFQUFxRDtBQUM5RCxVQUFJbkIsWUFBWSxJQUFJLElBQXBCLEVBQTBCLE9BQU8sRUFBUDtBQUMxQixVQUFJaEIsQ0FBSjtBQUFBLFVBQU9vQyxLQUFQO0FBQUEsVUFDSUMsa0JBQWtCLEdBQUUsRUFEeEI7QUFBQSxVQUVJQywwQkFBMEIsR0FBRSxFQUZoQztBQUFBLFVBR0lDLFNBQVMsR0FBQyxFQUhkO0FBQUEsVUFJSUMsVUFBVSxHQUFDLEVBSmY7QUFBQSxVQUtJQyxTQUFTLEdBQUMsRUFMZDtBQUFBLFVBTUlDLGlCQUFpQixHQUFFLENBTnZCO0FBQUEsVUFNMEI7QUFDdEJDLE1BQUFBLGdCQUFnQixHQUFFLENBUHRCO0FBQUEsVUFRSUMsZUFBZSxHQUFFLENBUnJCO0FBQUEsVUFTSUMsWUFBWSxHQUFDLEVBVGpCO0FBQUEsVUFVSUMsZ0JBQWdCLEdBQUMsQ0FWckI7QUFBQSxVQVdJQyxxQkFBcUIsR0FBQyxDQVgxQjtBQUFBLFVBWUlDLEVBWko7O0FBY0EsV0FBS0EsRUFBRSxHQUFHLENBQVYsRUFBYUEsRUFBRSxHQUFHaEMsWUFBWSxDQUFDZixNQUEvQixFQUF1QytDLEVBQUUsSUFBSSxDQUE3QyxFQUFnRDtBQUM5Q1QsUUFBQUEsU0FBUyxHQUFHdkIsWUFBWSxDQUFDZCxNQUFiLENBQW9COEMsRUFBcEIsQ0FBWjs7QUFDQSxZQUFJLENBQUNDLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDZixrQkFBckMsRUFBd0RFLFNBQXhELENBQUwsRUFBeUU7QUFDdkVGLFVBQUFBLGtCQUFrQixDQUFDRSxTQUFELENBQWxCLEdBQWdDSSxnQkFBZ0IsRUFBaEQ7QUFDQUwsVUFBQUEsMEJBQTBCLENBQUNDLFNBQUQsQ0FBMUIsR0FBd0MsSUFBeEM7QUFDRDs7QUFFREMsUUFBQUEsVUFBVSxHQUFHQyxTQUFTLEdBQUdGLFNBQXpCOztBQUNBLFlBQUlVLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDZixrQkFBckMsRUFBd0RHLFVBQXhELENBQUosRUFBeUU7QUFDdkVDLFVBQUFBLFNBQVMsR0FBR0QsVUFBWjtBQUNELFNBRkQsTUFFTztBQUNMLGNBQUlTLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDZCwwQkFBckMsRUFBZ0VHLFNBQWhFLENBQUosRUFBZ0Y7QUFDOUUsZ0JBQUlBLFNBQVMsQ0FBQzNCLFVBQVYsQ0FBcUIsQ0FBckIsSUFBd0IsR0FBNUIsRUFBaUM7QUFDL0IsbUJBQUtkLENBQUMsR0FBQyxDQUFQLEVBQVdBLENBQUMsR0FBQzRDLGVBQWIsRUFBK0I1QyxDQUFDLEVBQWhDLEVBQW9DO0FBQ2xDOEMsZ0JBQUFBLGdCQUFnQixHQUFJQSxnQkFBZ0IsSUFBSSxDQUF4Qzs7QUFDQSxvQkFBSUMscUJBQXFCLElBQUliLFdBQVcsR0FBQyxDQUF6QyxFQUE0QztBQUMxQ2Esa0JBQUFBLHFCQUFxQixHQUFHLENBQXhCO0FBQ0FGLGtCQUFBQSxZQUFZLENBQUNoQixJQUFiLENBQWtCTSxjQUFjLENBQUNXLGdCQUFELENBQWhDO0FBQ0FBLGtCQUFBQSxnQkFBZ0IsR0FBRyxDQUFuQjtBQUNELGlCQUpELE1BSU87QUFDTEMsa0JBQUFBLHFCQUFxQjtBQUN0QjtBQUNGOztBQUNEWCxjQUFBQSxLQUFLLEdBQUdLLFNBQVMsQ0FBQzNCLFVBQVYsQ0FBcUIsQ0FBckIsQ0FBUjs7QUFDQSxtQkFBS2QsQ0FBQyxHQUFDLENBQVAsRUFBV0EsQ0FBQyxHQUFDLENBQWIsRUFBaUJBLENBQUMsRUFBbEIsRUFBc0I7QUFDcEI4QyxnQkFBQUEsZ0JBQWdCLEdBQUlBLGdCQUFnQixJQUFJLENBQXJCLEdBQTJCVixLQUFLLEdBQUMsQ0FBcEQ7O0FBQ0Esb0JBQUlXLHFCQUFxQixJQUFJYixXQUFXLEdBQUMsQ0FBekMsRUFBNEM7QUFDMUNhLGtCQUFBQSxxQkFBcUIsR0FBRyxDQUF4QjtBQUNBRixrQkFBQUEsWUFBWSxDQUFDaEIsSUFBYixDQUFrQk0sY0FBYyxDQUFDVyxnQkFBRCxDQUFoQztBQUNBQSxrQkFBQUEsZ0JBQWdCLEdBQUcsQ0FBbkI7QUFDRCxpQkFKRCxNQUlPO0FBQ0xDLGtCQUFBQSxxQkFBcUI7QUFDdEI7O0FBQ0RYLGdCQUFBQSxLQUFLLEdBQUdBLEtBQUssSUFBSSxDQUFqQjtBQUNEO0FBQ0YsYUF2QkQsTUF1Qk87QUFDTEEsY0FBQUEsS0FBSyxHQUFHLENBQVI7O0FBQ0EsbUJBQUtwQyxDQUFDLEdBQUMsQ0FBUCxFQUFXQSxDQUFDLEdBQUM0QyxlQUFiLEVBQStCNUMsQ0FBQyxFQUFoQyxFQUFvQztBQUNsQzhDLGdCQUFBQSxnQkFBZ0IsR0FBSUEsZ0JBQWdCLElBQUksQ0FBckIsR0FBMEJWLEtBQTdDOztBQUNBLG9CQUFJVyxxQkFBcUIsSUFBR2IsV0FBVyxHQUFDLENBQXhDLEVBQTJDO0FBQ3pDYSxrQkFBQUEscUJBQXFCLEdBQUcsQ0FBeEI7QUFDQUYsa0JBQUFBLFlBQVksQ0FBQ2hCLElBQWIsQ0FBa0JNLGNBQWMsQ0FBQ1csZ0JBQUQsQ0FBaEM7QUFDQUEsa0JBQUFBLGdCQUFnQixHQUFHLENBQW5CO0FBQ0QsaUJBSkQsTUFJTztBQUNMQyxrQkFBQUEscUJBQXFCO0FBQ3RCOztBQUNEWCxnQkFBQUEsS0FBSyxHQUFHLENBQVI7QUFDRDs7QUFDREEsY0FBQUEsS0FBSyxHQUFHSyxTQUFTLENBQUMzQixVQUFWLENBQXFCLENBQXJCLENBQVI7O0FBQ0EsbUJBQUtkLENBQUMsR0FBQyxDQUFQLEVBQVdBLENBQUMsR0FBQyxFQUFiLEVBQWtCQSxDQUFDLEVBQW5CLEVBQXVCO0FBQ3JCOEMsZ0JBQUFBLGdCQUFnQixHQUFJQSxnQkFBZ0IsSUFBSSxDQUFyQixHQUEyQlYsS0FBSyxHQUFDLENBQXBEOztBQUNBLG9CQUFJVyxxQkFBcUIsSUFBSWIsV0FBVyxHQUFDLENBQXpDLEVBQTRDO0FBQzFDYSxrQkFBQUEscUJBQXFCLEdBQUcsQ0FBeEI7QUFDQUYsa0JBQUFBLFlBQVksQ0FBQ2hCLElBQWIsQ0FBa0JNLGNBQWMsQ0FBQ1csZ0JBQUQsQ0FBaEM7QUFDQUEsa0JBQUFBLGdCQUFnQixHQUFHLENBQW5CO0FBQ0QsaUJBSkQsTUFJTztBQUNMQyxrQkFBQUEscUJBQXFCO0FBQ3RCOztBQUNEWCxnQkFBQUEsS0FBSyxHQUFHQSxLQUFLLElBQUksQ0FBakI7QUFDRDtBQUNGOztBQUNETSxZQUFBQSxpQkFBaUI7O0FBQ2pCLGdCQUFJQSxpQkFBaUIsSUFBSSxDQUF6QixFQUE0QjtBQUMxQkEsY0FBQUEsaUJBQWlCLEdBQUdXLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQVQsRUFBWVYsZUFBWixDQUFwQjtBQUNBQSxjQUFBQSxlQUFlO0FBQ2hCOztBQUNELG1CQUFPTiwwQkFBMEIsQ0FBQ0csU0FBRCxDQUFqQztBQUNELFdBeERELE1Bd0RPO0FBQ0xMLFlBQUFBLEtBQUssR0FBR0Msa0JBQWtCLENBQUNJLFNBQUQsQ0FBMUI7O0FBQ0EsaUJBQUt6QyxDQUFDLEdBQUMsQ0FBUCxFQUFXQSxDQUFDLEdBQUM0QyxlQUFiLEVBQStCNUMsQ0FBQyxFQUFoQyxFQUFvQztBQUNsQzhDLGNBQUFBLGdCQUFnQixHQUFJQSxnQkFBZ0IsSUFBSSxDQUFyQixHQUEyQlYsS0FBSyxHQUFDLENBQXBEOztBQUNBLGtCQUFJVyxxQkFBcUIsSUFBSWIsV0FBVyxHQUFDLENBQXpDLEVBQTRDO0FBQzFDYSxnQkFBQUEscUJBQXFCLEdBQUcsQ0FBeEI7QUFDQUYsZ0JBQUFBLFlBQVksQ0FBQ2hCLElBQWIsQ0FBa0JNLGNBQWMsQ0FBQ1csZ0JBQUQsQ0FBaEM7QUFDQUEsZ0JBQUFBLGdCQUFnQixHQUFHLENBQW5CO0FBQ0QsZUFKRCxNQUlPO0FBQ0xDLGdCQUFBQSxxQkFBcUI7QUFDdEI7O0FBQ0RYLGNBQUFBLEtBQUssR0FBR0EsS0FBSyxJQUFJLENBQWpCO0FBQ0Q7QUFHRjs7QUFDRE0sVUFBQUEsaUJBQWlCOztBQUNqQixjQUFJQSxpQkFBaUIsSUFBSSxDQUF6QixFQUE0QjtBQUMxQkEsWUFBQUEsaUJBQWlCLEdBQUdXLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQVQsRUFBWVYsZUFBWixDQUFwQjtBQUNBQSxZQUFBQSxlQUFlO0FBQ2hCLFdBN0VJLENBOEVMOzs7QUFDQVAsVUFBQUEsa0JBQWtCLENBQUNHLFVBQUQsQ0FBbEIsR0FBaUNHLGdCQUFnQixFQUFqRDtBQUNBRixVQUFBQSxTQUFTLEdBQUdqRCxNQUFNLENBQUMrQyxTQUFELENBQWxCO0FBQ0Q7QUFDRixPQTVHNkQsQ0E4RzlEOzs7QUFDQSxVQUFJRSxTQUFTLEtBQUssRUFBbEIsRUFBc0I7QUFDcEIsWUFBSVEsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUNkLDBCQUFyQyxFQUFnRUcsU0FBaEUsQ0FBSixFQUFnRjtBQUM5RSxjQUFJQSxTQUFTLENBQUMzQixVQUFWLENBQXFCLENBQXJCLElBQXdCLEdBQTVCLEVBQWlDO0FBQy9CLGlCQUFLZCxDQUFDLEdBQUMsQ0FBUCxFQUFXQSxDQUFDLEdBQUM0QyxlQUFiLEVBQStCNUMsQ0FBQyxFQUFoQyxFQUFvQztBQUNsQzhDLGNBQUFBLGdCQUFnQixHQUFJQSxnQkFBZ0IsSUFBSSxDQUF4Qzs7QUFDQSxrQkFBSUMscUJBQXFCLElBQUliLFdBQVcsR0FBQyxDQUF6QyxFQUE0QztBQUMxQ2EsZ0JBQUFBLHFCQUFxQixHQUFHLENBQXhCO0FBQ0FGLGdCQUFBQSxZQUFZLENBQUNoQixJQUFiLENBQWtCTSxjQUFjLENBQUNXLGdCQUFELENBQWhDO0FBQ0FBLGdCQUFBQSxnQkFBZ0IsR0FBRyxDQUFuQjtBQUNELGVBSkQsTUFJTztBQUNMQyxnQkFBQUEscUJBQXFCO0FBQ3RCO0FBQ0Y7O0FBQ0RYLFlBQUFBLEtBQUssR0FBR0ssU0FBUyxDQUFDM0IsVUFBVixDQUFxQixDQUFyQixDQUFSOztBQUNBLGlCQUFLZCxDQUFDLEdBQUMsQ0FBUCxFQUFXQSxDQUFDLEdBQUMsQ0FBYixFQUFpQkEsQ0FBQyxFQUFsQixFQUFzQjtBQUNwQjhDLGNBQUFBLGdCQUFnQixHQUFJQSxnQkFBZ0IsSUFBSSxDQUFyQixHQUEyQlYsS0FBSyxHQUFDLENBQXBEOztBQUNBLGtCQUFJVyxxQkFBcUIsSUFBSWIsV0FBVyxHQUFDLENBQXpDLEVBQTRDO0FBQzFDYSxnQkFBQUEscUJBQXFCLEdBQUcsQ0FBeEI7QUFDQUYsZ0JBQUFBLFlBQVksQ0FBQ2hCLElBQWIsQ0FBa0JNLGNBQWMsQ0FBQ1csZ0JBQUQsQ0FBaEM7QUFDQUEsZ0JBQUFBLGdCQUFnQixHQUFHLENBQW5CO0FBQ0QsZUFKRCxNQUlPO0FBQ0xDLGdCQUFBQSxxQkFBcUI7QUFDdEI7O0FBQ0RYLGNBQUFBLEtBQUssR0FBR0EsS0FBSyxJQUFJLENBQWpCO0FBQ0Q7QUFDRixXQXZCRCxNQXVCTztBQUNMQSxZQUFBQSxLQUFLLEdBQUcsQ0FBUjs7QUFDQSxpQkFBS3BDLENBQUMsR0FBQyxDQUFQLEVBQVdBLENBQUMsR0FBQzRDLGVBQWIsRUFBK0I1QyxDQUFDLEVBQWhDLEVBQW9DO0FBQ2xDOEMsY0FBQUEsZ0JBQWdCLEdBQUlBLGdCQUFnQixJQUFJLENBQXJCLEdBQTBCVixLQUE3Qzs7QUFDQSxrQkFBSVcscUJBQXFCLElBQUliLFdBQVcsR0FBQyxDQUF6QyxFQUE0QztBQUMxQ2EsZ0JBQUFBLHFCQUFxQixHQUFHLENBQXhCO0FBQ0FGLGdCQUFBQSxZQUFZLENBQUNoQixJQUFiLENBQWtCTSxjQUFjLENBQUNXLGdCQUFELENBQWhDO0FBQ0FBLGdCQUFBQSxnQkFBZ0IsR0FBRyxDQUFuQjtBQUNELGVBSkQsTUFJTztBQUNMQyxnQkFBQUEscUJBQXFCO0FBQ3RCOztBQUNEWCxjQUFBQSxLQUFLLEdBQUcsQ0FBUjtBQUNEOztBQUNEQSxZQUFBQSxLQUFLLEdBQUdLLFNBQVMsQ0FBQzNCLFVBQVYsQ0FBcUIsQ0FBckIsQ0FBUjs7QUFDQSxpQkFBS2QsQ0FBQyxHQUFDLENBQVAsRUFBV0EsQ0FBQyxHQUFDLEVBQWIsRUFBa0JBLENBQUMsRUFBbkIsRUFBdUI7QUFDckI4QyxjQUFBQSxnQkFBZ0IsR0FBSUEsZ0JBQWdCLElBQUksQ0FBckIsR0FBMkJWLEtBQUssR0FBQyxDQUFwRDs7QUFDQSxrQkFBSVcscUJBQXFCLElBQUliLFdBQVcsR0FBQyxDQUF6QyxFQUE0QztBQUMxQ2EsZ0JBQUFBLHFCQUFxQixHQUFHLENBQXhCO0FBQ0FGLGdCQUFBQSxZQUFZLENBQUNoQixJQUFiLENBQWtCTSxjQUFjLENBQUNXLGdCQUFELENBQWhDO0FBQ0FBLGdCQUFBQSxnQkFBZ0IsR0FBRyxDQUFuQjtBQUNELGVBSkQsTUFJTztBQUNMQyxnQkFBQUEscUJBQXFCO0FBQ3RCOztBQUNEWCxjQUFBQSxLQUFLLEdBQUdBLEtBQUssSUFBSSxDQUFqQjtBQUNEO0FBQ0Y7O0FBQ0RNLFVBQUFBLGlCQUFpQjs7QUFDakIsY0FBSUEsaUJBQWlCLElBQUksQ0FBekIsRUFBNEI7QUFDMUJBLFlBQUFBLGlCQUFpQixHQUFHVyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxDQUFULEVBQVlWLGVBQVosQ0FBcEI7QUFDQUEsWUFBQUEsZUFBZTtBQUNoQjs7QUFDRCxpQkFBT04sMEJBQTBCLENBQUNHLFNBQUQsQ0FBakM7QUFDRCxTQXhERCxNQXdETztBQUNMTCxVQUFBQSxLQUFLLEdBQUdDLGtCQUFrQixDQUFDSSxTQUFELENBQTFCOztBQUNBLGVBQUt6QyxDQUFDLEdBQUMsQ0FBUCxFQUFXQSxDQUFDLEdBQUM0QyxlQUFiLEVBQStCNUMsQ0FBQyxFQUFoQyxFQUFvQztBQUNsQzhDLFlBQUFBLGdCQUFnQixHQUFJQSxnQkFBZ0IsSUFBSSxDQUFyQixHQUEyQlYsS0FBSyxHQUFDLENBQXBEOztBQUNBLGdCQUFJVyxxQkFBcUIsSUFBSWIsV0FBVyxHQUFDLENBQXpDLEVBQTRDO0FBQzFDYSxjQUFBQSxxQkFBcUIsR0FBRyxDQUF4QjtBQUNBRixjQUFBQSxZQUFZLENBQUNoQixJQUFiLENBQWtCTSxjQUFjLENBQUNXLGdCQUFELENBQWhDO0FBQ0FBLGNBQUFBLGdCQUFnQixHQUFHLENBQW5CO0FBQ0QsYUFKRCxNQUlPO0FBQ0xDLGNBQUFBLHFCQUFxQjtBQUN0Qjs7QUFDRFgsWUFBQUEsS0FBSyxHQUFHQSxLQUFLLElBQUksQ0FBakI7QUFDRDtBQUdGOztBQUNETSxRQUFBQSxpQkFBaUI7O0FBQ2pCLFlBQUlBLGlCQUFpQixJQUFJLENBQXpCLEVBQTRCO0FBQzFCQSxVQUFBQSxpQkFBaUIsR0FBR1csSUFBSSxDQUFDQyxHQUFMLENBQVMsQ0FBVCxFQUFZVixlQUFaLENBQXBCO0FBQ0FBLFVBQUFBLGVBQWU7QUFDaEI7QUFDRixPQTdMNkQsQ0ErTDlEOzs7QUFDQVIsTUFBQUEsS0FBSyxHQUFHLENBQVI7O0FBQ0EsV0FBS3BDLENBQUMsR0FBQyxDQUFQLEVBQVdBLENBQUMsR0FBQzRDLGVBQWIsRUFBK0I1QyxDQUFDLEVBQWhDLEVBQW9DO0FBQ2xDOEMsUUFBQUEsZ0JBQWdCLEdBQUlBLGdCQUFnQixJQUFJLENBQXJCLEdBQTJCVixLQUFLLEdBQUMsQ0FBcEQ7O0FBQ0EsWUFBSVcscUJBQXFCLElBQUliLFdBQVcsR0FBQyxDQUF6QyxFQUE0QztBQUMxQ2EsVUFBQUEscUJBQXFCLEdBQUcsQ0FBeEI7QUFDQUYsVUFBQUEsWUFBWSxDQUFDaEIsSUFBYixDQUFrQk0sY0FBYyxDQUFDVyxnQkFBRCxDQUFoQztBQUNBQSxVQUFBQSxnQkFBZ0IsR0FBRyxDQUFuQjtBQUNELFNBSkQsTUFJTztBQUNMQyxVQUFBQSxxQkFBcUI7QUFDdEI7O0FBQ0RYLFFBQUFBLEtBQUssR0FBR0EsS0FBSyxJQUFJLENBQWpCO0FBQ0QsT0EzTTZELENBNk05RDs7O0FBQ0EsYUFBTyxJQUFQLEVBQWE7QUFDWFUsUUFBQUEsZ0JBQWdCLEdBQUlBLGdCQUFnQixJQUFJLENBQXhDOztBQUNBLFlBQUlDLHFCQUFxQixJQUFJYixXQUFXLEdBQUMsQ0FBekMsRUFBNEM7QUFDMUNXLFVBQUFBLFlBQVksQ0FBQ2hCLElBQWIsQ0FBa0JNLGNBQWMsQ0FBQ1csZ0JBQUQsQ0FBaEM7QUFDQTtBQUNELFNBSEQsTUFJS0MscUJBQXFCO0FBQzNCOztBQUNELGFBQU9GLFlBQVksQ0FBQ2YsSUFBYixDQUFrQixFQUFsQixDQUFQO0FBQ0QsS0F4U1k7QUEwU2JOLElBQUFBLFVBQVUsRUFBRSxvQkFBVVgsVUFBVixFQUFzQjtBQUNoQyxVQUFJQSxVQUFVLElBQUksSUFBbEIsRUFBd0IsT0FBTyxFQUFQO0FBQ3hCLFVBQUlBLFVBQVUsSUFBSSxFQUFsQixFQUFzQixPQUFPLElBQVA7QUFDdEIsYUFBT3ZCLFFBQVEsQ0FBQ21CLFdBQVQsQ0FBcUJJLFVBQVUsQ0FBQ1osTUFBaEMsRUFBd0MsS0FBeEMsRUFBK0MsVUFBU1MsS0FBVCxFQUFnQjtBQUFFLGVBQU9HLFVBQVUsQ0FBQ0MsVUFBWCxDQUFzQkosS0FBdEIsQ0FBUDtBQUFzQyxPQUF2RyxDQUFQO0FBQ0QsS0E5U1k7QUFnVGJELElBQUFBLFdBQVcsRUFBRSxxQkFBVVIsTUFBVixFQUFrQnNELFVBQWxCLEVBQThCQyxZQUE5QixFQUE0QztBQUN2RCxVQUFJQyxVQUFVLEdBQUcsRUFBakI7QUFBQSxVQUNJQyxJQURKO0FBQUEsVUFFSUMsU0FBUyxHQUFHLENBRmhCO0FBQUEsVUFHSUMsUUFBUSxHQUFHLENBSGY7QUFBQSxVQUlJQyxPQUFPLEdBQUcsQ0FKZDtBQUFBLFVBS0lDLEtBQUssR0FBRyxFQUxaO0FBQUEsVUFNSXBDLE1BQU0sR0FBRyxFQU5iO0FBQUEsVUFPSTFCLENBUEo7QUFBQSxVQVFJK0QsQ0FSSjtBQUFBLFVBU0lDLElBVEo7QUFBQSxVQVNVQyxJQVRWO0FBQUEsVUFTZ0JDLFFBVGhCO0FBQUEsVUFTMEJDLEtBVDFCO0FBQUEsVUFVSXZDLENBVko7QUFBQSxVQVdJd0MsSUFBSSxHQUFHO0FBQUNDLFFBQUFBLEdBQUcsRUFBQ2IsWUFBWSxDQUFDLENBQUQsQ0FBakI7QUFBc0JjLFFBQUFBLFFBQVEsRUFBQ2YsVUFBL0I7QUFBMkM3QyxRQUFBQSxLQUFLLEVBQUM7QUFBakQsT0FYWDs7QUFhQSxXQUFLVixDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLEdBQUcsQ0FBaEIsRUFBbUJBLENBQUMsSUFBSSxDQUF4QixFQUEyQjtBQUN6QnlELFFBQUFBLFVBQVUsQ0FBQ3pELENBQUQsQ0FBVixHQUFnQkEsQ0FBaEI7QUFDRDs7QUFFRGdFLE1BQUFBLElBQUksR0FBRyxDQUFQO0FBQ0FFLE1BQUFBLFFBQVEsR0FBR2IsSUFBSSxDQUFDQyxHQUFMLENBQVMsQ0FBVCxFQUFXLENBQVgsQ0FBWDtBQUNBYSxNQUFBQSxLQUFLLEdBQUMsQ0FBTjs7QUFDQSxhQUFPQSxLQUFLLElBQUVELFFBQWQsRUFBd0I7QUFDdEJELFFBQUFBLElBQUksR0FBR0csSUFBSSxDQUFDQyxHQUFMLEdBQVdELElBQUksQ0FBQ0UsUUFBdkI7QUFDQUYsUUFBQUEsSUFBSSxDQUFDRSxRQUFMLEtBQWtCLENBQWxCOztBQUNBLFlBQUlGLElBQUksQ0FBQ0UsUUFBTCxJQUFpQixDQUFyQixFQUF3QjtBQUN0QkYsVUFBQUEsSUFBSSxDQUFDRSxRQUFMLEdBQWdCZixVQUFoQjtBQUNBYSxVQUFBQSxJQUFJLENBQUNDLEdBQUwsR0FBV2IsWUFBWSxDQUFDWSxJQUFJLENBQUMxRCxLQUFMLEVBQUQsQ0FBdkI7QUFDRDs7QUFDRHNELFFBQUFBLElBQUksSUFBSSxDQUFDQyxJQUFJLEdBQUMsQ0FBTCxHQUFTLENBQVQsR0FBYSxDQUFkLElBQW1CRSxLQUEzQjtBQUNBQSxRQUFBQSxLQUFLLEtBQUssQ0FBVjtBQUNEOztBQUVELGNBQVFULElBQUksR0FBR00sSUFBZjtBQUNFLGFBQUssQ0FBTDtBQUNJQSxVQUFBQSxJQUFJLEdBQUcsQ0FBUDtBQUNBRSxVQUFBQSxRQUFRLEdBQUdiLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQVQsRUFBVyxDQUFYLENBQVg7QUFDQWEsVUFBQUEsS0FBSyxHQUFDLENBQU47O0FBQ0EsaUJBQU9BLEtBQUssSUFBRUQsUUFBZCxFQUF3QjtBQUN0QkQsWUFBQUEsSUFBSSxHQUFHRyxJQUFJLENBQUNDLEdBQUwsR0FBV0QsSUFBSSxDQUFDRSxRQUF2QjtBQUNBRixZQUFBQSxJQUFJLENBQUNFLFFBQUwsS0FBa0IsQ0FBbEI7O0FBQ0EsZ0JBQUlGLElBQUksQ0FBQ0UsUUFBTCxJQUFpQixDQUFyQixFQUF3QjtBQUN0QkYsY0FBQUEsSUFBSSxDQUFDRSxRQUFMLEdBQWdCZixVQUFoQjtBQUNBYSxjQUFBQSxJQUFJLENBQUNDLEdBQUwsR0FBV2IsWUFBWSxDQUFDWSxJQUFJLENBQUMxRCxLQUFMLEVBQUQsQ0FBdkI7QUFDRDs7QUFDRHNELFlBQUFBLElBQUksSUFBSSxDQUFDQyxJQUFJLEdBQUMsQ0FBTCxHQUFTLENBQVQsR0FBYSxDQUFkLElBQW1CRSxLQUEzQjtBQUNBQSxZQUFBQSxLQUFLLEtBQUssQ0FBVjtBQUNEOztBQUNIdkMsVUFBQUEsQ0FBQyxHQUFHckMsQ0FBQyxDQUFDeUUsSUFBRCxDQUFMO0FBQ0E7O0FBQ0YsYUFBSyxDQUFMO0FBQ0lBLFVBQUFBLElBQUksR0FBRyxDQUFQO0FBQ0FFLFVBQUFBLFFBQVEsR0FBR2IsSUFBSSxDQUFDQyxHQUFMLENBQVMsQ0FBVCxFQUFXLEVBQVgsQ0FBWDtBQUNBYSxVQUFBQSxLQUFLLEdBQUMsQ0FBTjs7QUFDQSxpQkFBT0EsS0FBSyxJQUFFRCxRQUFkLEVBQXdCO0FBQ3RCRCxZQUFBQSxJQUFJLEdBQUdHLElBQUksQ0FBQ0MsR0FBTCxHQUFXRCxJQUFJLENBQUNFLFFBQXZCO0FBQ0FGLFlBQUFBLElBQUksQ0FBQ0UsUUFBTCxLQUFrQixDQUFsQjs7QUFDQSxnQkFBSUYsSUFBSSxDQUFDRSxRQUFMLElBQWlCLENBQXJCLEVBQXdCO0FBQ3RCRixjQUFBQSxJQUFJLENBQUNFLFFBQUwsR0FBZ0JmLFVBQWhCO0FBQ0FhLGNBQUFBLElBQUksQ0FBQ0MsR0FBTCxHQUFXYixZQUFZLENBQUNZLElBQUksQ0FBQzFELEtBQUwsRUFBRCxDQUF2QjtBQUNEOztBQUNEc0QsWUFBQUEsSUFBSSxJQUFJLENBQUNDLElBQUksR0FBQyxDQUFMLEdBQVMsQ0FBVCxHQUFhLENBQWQsSUFBbUJFLEtBQTNCO0FBQ0FBLFlBQUFBLEtBQUssS0FBSyxDQUFWO0FBQ0Q7O0FBQ0h2QyxVQUFBQSxDQUFDLEdBQUdyQyxDQUFDLENBQUN5RSxJQUFELENBQUw7QUFDQTs7QUFDRixhQUFLLENBQUw7QUFDRSxpQkFBTyxFQUFQO0FBbENKOztBQW9DQVAsTUFBQUEsVUFBVSxDQUFDLENBQUQsQ0FBVixHQUFnQjdCLENBQWhCO0FBQ0FtQyxNQUFBQSxDQUFDLEdBQUduQyxDQUFKO0FBQ0FGLE1BQUFBLE1BQU0sQ0FBQ0csSUFBUCxDQUFZRCxDQUFaOztBQUNBLGFBQU8sSUFBUCxFQUFhO0FBQ1gsWUFBSXdDLElBQUksQ0FBQzFELEtBQUwsR0FBYVQsTUFBakIsRUFBeUI7QUFDdkIsaUJBQU8sRUFBUDtBQUNEOztBQUVEK0QsUUFBQUEsSUFBSSxHQUFHLENBQVA7QUFDQUUsUUFBQUEsUUFBUSxHQUFHYixJQUFJLENBQUNDLEdBQUwsQ0FBUyxDQUFULEVBQVdPLE9BQVgsQ0FBWDtBQUNBTSxRQUFBQSxLQUFLLEdBQUMsQ0FBTjs7QUFDQSxlQUFPQSxLQUFLLElBQUVELFFBQWQsRUFBd0I7QUFDdEJELFVBQUFBLElBQUksR0FBR0csSUFBSSxDQUFDQyxHQUFMLEdBQVdELElBQUksQ0FBQ0UsUUFBdkI7QUFDQUYsVUFBQUEsSUFBSSxDQUFDRSxRQUFMLEtBQWtCLENBQWxCOztBQUNBLGNBQUlGLElBQUksQ0FBQ0UsUUFBTCxJQUFpQixDQUFyQixFQUF3QjtBQUN0QkYsWUFBQUEsSUFBSSxDQUFDRSxRQUFMLEdBQWdCZixVQUFoQjtBQUNBYSxZQUFBQSxJQUFJLENBQUNDLEdBQUwsR0FBV2IsWUFBWSxDQUFDWSxJQUFJLENBQUMxRCxLQUFMLEVBQUQsQ0FBdkI7QUFDRDs7QUFDRHNELFVBQUFBLElBQUksSUFBSSxDQUFDQyxJQUFJLEdBQUMsQ0FBTCxHQUFTLENBQVQsR0FBYSxDQUFkLElBQW1CRSxLQUEzQjtBQUNBQSxVQUFBQSxLQUFLLEtBQUssQ0FBVjtBQUNEOztBQUVELGdCQUFRdkMsQ0FBQyxHQUFHb0MsSUFBWjtBQUNFLGVBQUssQ0FBTDtBQUNFQSxZQUFBQSxJQUFJLEdBQUcsQ0FBUDtBQUNBRSxZQUFBQSxRQUFRLEdBQUdiLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQVQsRUFBVyxDQUFYLENBQVg7QUFDQWEsWUFBQUEsS0FBSyxHQUFDLENBQU47O0FBQ0EsbUJBQU9BLEtBQUssSUFBRUQsUUFBZCxFQUF3QjtBQUN0QkQsY0FBQUEsSUFBSSxHQUFHRyxJQUFJLENBQUNDLEdBQUwsR0FBV0QsSUFBSSxDQUFDRSxRQUF2QjtBQUNBRixjQUFBQSxJQUFJLENBQUNFLFFBQUwsS0FBa0IsQ0FBbEI7O0FBQ0Esa0JBQUlGLElBQUksQ0FBQ0UsUUFBTCxJQUFpQixDQUFyQixFQUF3QjtBQUN0QkYsZ0JBQUFBLElBQUksQ0FBQ0UsUUFBTCxHQUFnQmYsVUFBaEI7QUFDQWEsZ0JBQUFBLElBQUksQ0FBQ0MsR0FBTCxHQUFXYixZQUFZLENBQUNZLElBQUksQ0FBQzFELEtBQUwsRUFBRCxDQUF2QjtBQUNEOztBQUNEc0QsY0FBQUEsSUFBSSxJQUFJLENBQUNDLElBQUksR0FBQyxDQUFMLEdBQVMsQ0FBVCxHQUFhLENBQWQsSUFBbUJFLEtBQTNCO0FBQ0FBLGNBQUFBLEtBQUssS0FBSyxDQUFWO0FBQ0Q7O0FBRURWLFlBQUFBLFVBQVUsQ0FBQ0csUUFBUSxFQUFULENBQVYsR0FBeUJyRSxDQUFDLENBQUN5RSxJQUFELENBQTFCO0FBQ0FwQyxZQUFBQSxDQUFDLEdBQUdnQyxRQUFRLEdBQUMsQ0FBYjtBQUNBRCxZQUFBQSxTQUFTO0FBQ1Q7O0FBQ0YsZUFBSyxDQUFMO0FBQ0VLLFlBQUFBLElBQUksR0FBRyxDQUFQO0FBQ0FFLFlBQUFBLFFBQVEsR0FBR2IsSUFBSSxDQUFDQyxHQUFMLENBQVMsQ0FBVCxFQUFXLEVBQVgsQ0FBWDtBQUNBYSxZQUFBQSxLQUFLLEdBQUMsQ0FBTjs7QUFDQSxtQkFBT0EsS0FBSyxJQUFFRCxRQUFkLEVBQXdCO0FBQ3RCRCxjQUFBQSxJQUFJLEdBQUdHLElBQUksQ0FBQ0MsR0FBTCxHQUFXRCxJQUFJLENBQUNFLFFBQXZCO0FBQ0FGLGNBQUFBLElBQUksQ0FBQ0UsUUFBTCxLQUFrQixDQUFsQjs7QUFDQSxrQkFBSUYsSUFBSSxDQUFDRSxRQUFMLElBQWlCLENBQXJCLEVBQXdCO0FBQ3RCRixnQkFBQUEsSUFBSSxDQUFDRSxRQUFMLEdBQWdCZixVQUFoQjtBQUNBYSxnQkFBQUEsSUFBSSxDQUFDQyxHQUFMLEdBQVdiLFlBQVksQ0FBQ1ksSUFBSSxDQUFDMUQsS0FBTCxFQUFELENBQXZCO0FBQ0Q7O0FBQ0RzRCxjQUFBQSxJQUFJLElBQUksQ0FBQ0MsSUFBSSxHQUFDLENBQUwsR0FBUyxDQUFULEdBQWEsQ0FBZCxJQUFtQkUsS0FBM0I7QUFDQUEsY0FBQUEsS0FBSyxLQUFLLENBQVY7QUFDRDs7QUFDRFYsWUFBQUEsVUFBVSxDQUFDRyxRQUFRLEVBQVQsQ0FBVixHQUF5QnJFLENBQUMsQ0FBQ3lFLElBQUQsQ0FBMUI7QUFDQXBDLFlBQUFBLENBQUMsR0FBR2dDLFFBQVEsR0FBQyxDQUFiO0FBQ0FELFlBQUFBLFNBQVM7QUFDVDs7QUFDRixlQUFLLENBQUw7QUFDRSxtQkFBT2pDLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLEVBQVosQ0FBUDtBQXZDSjs7QUEwQ0EsWUFBSTZCLFNBQVMsSUFBSSxDQUFqQixFQUFvQjtBQUNsQkEsVUFBQUEsU0FBUyxHQUFHTixJQUFJLENBQUNDLEdBQUwsQ0FBUyxDQUFULEVBQVlPLE9BQVosQ0FBWjtBQUNBQSxVQUFBQSxPQUFPO0FBQ1I7O0FBRUQsWUFBSUosVUFBVSxDQUFDN0IsQ0FBRCxDQUFkLEVBQW1CO0FBQ2pCa0MsVUFBQUEsS0FBSyxHQUFHTCxVQUFVLENBQUM3QixDQUFELENBQWxCO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsY0FBSUEsQ0FBQyxLQUFLZ0MsUUFBVixFQUFvQjtBQUNsQkUsWUFBQUEsS0FBSyxHQUFHQyxDQUFDLEdBQUdBLENBQUMsQ0FBQzdELE1BQUYsQ0FBUyxDQUFULENBQVo7QUFDRCxXQUZELE1BRU87QUFDTCxtQkFBTyxJQUFQO0FBQ0Q7QUFDRjs7QUFDRHdCLFFBQUFBLE1BQU0sQ0FBQ0csSUFBUCxDQUFZaUMsS0FBWixFQTNFVyxDQTZFWDs7QUFDQUwsUUFBQUEsVUFBVSxDQUFDRyxRQUFRLEVBQVQsQ0FBVixHQUF5QkcsQ0FBQyxHQUFHRCxLQUFLLENBQUM1RCxNQUFOLENBQWEsQ0FBYixDQUE3QjtBQUNBeUQsUUFBQUEsU0FBUztBQUVUSSxRQUFBQSxDQUFDLEdBQUdELEtBQUo7O0FBRUEsWUFBSUgsU0FBUyxJQUFJLENBQWpCLEVBQW9CO0FBQ2xCQSxVQUFBQSxTQUFTLEdBQUdOLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQVQsRUFBWU8sT0FBWixDQUFaO0FBQ0FBLFVBQUFBLE9BQU87QUFDUjtBQUVGO0FBQ0Y7QUFoZFksR0FBZjtBQWtkRSxTQUFPdkUsUUFBUDtBQUNELENBcmVjLEVBQWY7O0FBdWVBLElBQUksT0FBT2lGLE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0NBLE1BQU0sQ0FBQ0MsR0FBM0MsRUFBZ0Q7QUFDOUNELEVBQUFBLE1BQU0sQ0FBQyxZQUFZO0FBQUUsV0FBT2pGLFFBQVA7QUFBa0IsR0FBakMsQ0FBTjtBQUNELENBRkQsTUFFTyxJQUFJLE9BQU9tRixNQUFQLEtBQWtCLFdBQWxCLElBQWlDQSxNQUFNLElBQUksSUFBL0MsRUFBc0Q7QUFDM0RBLEVBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnBGLFFBQWpCO0FBQ0QsQ0FGTSxNQUVBLElBQUksT0FBT3FGLE9BQVAsS0FBbUIsV0FBbkIsSUFBa0NBLE9BQU8sSUFBSSxJQUFqRCxFQUF3RDtBQUM3REEsRUFBQUEsT0FBTyxDQUFDRixNQUFSLENBQWUsVUFBZixFQUEyQixFQUEzQixFQUNDRyxPQURELENBQ1MsVUFEVCxFQUNxQixZQUFZO0FBQy9CLFdBQU90RixRQUFQO0FBQ0QsR0FIRDtBQUlEIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMTMgUGllcm94eSA8cGllcm94eUBwaWVyb3h5Lm5ldD5cbi8vIFRoaXMgd29yayBpcyBmcmVlLiBZb3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0XG4vLyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIFdURlBMLCBWZXJzaW9uIDJcbi8vIEZvciBtb3JlIGluZm9ybWF0aW9uIHNlZSBMSUNFTlNFLnR4dCBvciBodHRwOi8vd3d3Lnd0ZnBsLm5ldC9cbi8vXG4vLyBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgdGhlIGhvbWUgcGFnZTpcbi8vIGh0dHA6Ly9waWVyb3h5Lm5ldC9ibG9nL3BhZ2VzL2x6LXN0cmluZy90ZXN0aW5nLmh0bWxcbi8vXG4vLyBMWi1iYXNlZCBjb21wcmVzc2lvbiBhbGdvcml0aG0sIHZlcnNpb24gMS40LjRcbnZhciBMWlN0cmluZyA9IChmdW5jdGlvbigpIHtcblxuLy8gcHJpdmF0ZSBwcm9wZXJ0eVxudmFyIGYgPSBTdHJpbmcuZnJvbUNoYXJDb2RlO1xudmFyIGtleVN0ckJhc2U2NCA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIjtcbnZhciBrZXlTdHJVcmlTYWZlID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSstJFwiO1xudmFyIGJhc2VSZXZlcnNlRGljID0ge307XG5cbmZ1bmN0aW9uIGdldEJhc2VWYWx1ZShhbHBoYWJldCwgY2hhcmFjdGVyKSB7XG4gIGlmICghYmFzZVJldmVyc2VEaWNbYWxwaGFiZXRdKSB7XG4gICAgYmFzZVJldmVyc2VEaWNbYWxwaGFiZXRdID0ge307XG4gICAgZm9yICh2YXIgaT0wIDsgaTxhbHBoYWJldC5sZW5ndGggOyBpKyspIHtcbiAgICAgIGJhc2VSZXZlcnNlRGljW2FscGhhYmV0XVthbHBoYWJldC5jaGFyQXQoaSldID0gaTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJhc2VSZXZlcnNlRGljW2FscGhhYmV0XVtjaGFyYWN0ZXJdO1xufVxuXG52YXIgTFpTdHJpbmcgPSB7XG4gIGNvbXByZXNzVG9CYXNlNjQgOiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQgPT0gbnVsbCkgcmV0dXJuIFwiXCI7XG4gICAgdmFyIHJlcyA9IExaU3RyaW5nLl9jb21wcmVzcyhpbnB1dCwgNiwgZnVuY3Rpb24oYSl7cmV0dXJuIGtleVN0ckJhc2U2NC5jaGFyQXQoYSk7fSk7XG4gICAgc3dpdGNoIChyZXMubGVuZ3RoICUgNCkgeyAvLyBUbyBwcm9kdWNlIHZhbGlkIEJhc2U2NFxuICAgIGRlZmF1bHQ6IC8vIFdoZW4gY291bGQgdGhpcyBoYXBwZW4gP1xuICAgIGNhc2UgMCA6IHJldHVybiByZXM7XG4gICAgY2FzZSAxIDogcmV0dXJuIHJlcytcIj09PVwiO1xuICAgIGNhc2UgMiA6IHJldHVybiByZXMrXCI9PVwiO1xuICAgIGNhc2UgMyA6IHJldHVybiByZXMrXCI9XCI7XG4gICAgfVxuICB9LFxuXG4gIGRlY29tcHJlc3NGcm9tQmFzZTY0IDogZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgaWYgKGlucHV0ID09IG51bGwpIHJldHVybiBcIlwiO1xuICAgIGlmIChpbnB1dCA9PSBcIlwiKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gTFpTdHJpbmcuX2RlY29tcHJlc3MoaW5wdXQubGVuZ3RoLCAzMiwgZnVuY3Rpb24oaW5kZXgpIHsgcmV0dXJuIGdldEJhc2VWYWx1ZShrZXlTdHJCYXNlNjQsIGlucHV0LmNoYXJBdChpbmRleCkpOyB9KTtcbiAgfSxcblxuICBjb21wcmVzc1RvVVRGMTYgOiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQgPT0gbnVsbCkgcmV0dXJuIFwiXCI7XG4gICAgcmV0dXJuIExaU3RyaW5nLl9jb21wcmVzcyhpbnB1dCwgMTUsIGZ1bmN0aW9uKGEpe3JldHVybiBmKGErMzIpO30pICsgXCIgXCI7XG4gIH0sXG5cbiAgZGVjb21wcmVzc0Zyb21VVEYxNjogZnVuY3Rpb24gKGNvbXByZXNzZWQpIHtcbiAgICBpZiAoY29tcHJlc3NlZCA9PSBudWxsKSByZXR1cm4gXCJcIjtcbiAgICBpZiAoY29tcHJlc3NlZCA9PSBcIlwiKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gTFpTdHJpbmcuX2RlY29tcHJlc3MoY29tcHJlc3NlZC5sZW5ndGgsIDE2Mzg0LCBmdW5jdGlvbihpbmRleCkgeyByZXR1cm4gY29tcHJlc3NlZC5jaGFyQ29kZUF0KGluZGV4KSAtIDMyOyB9KTtcbiAgfSxcblxuICAvL2NvbXByZXNzIGludG8gdWludDhhcnJheSAoVUNTLTIgYmlnIGVuZGlhbiBmb3JtYXQpXG4gIGNvbXByZXNzVG9VaW50OEFycmF5OiBmdW5jdGlvbiAodW5jb21wcmVzc2VkKSB7XG4gICAgdmFyIGNvbXByZXNzZWQgPSBMWlN0cmluZy5jb21wcmVzcyh1bmNvbXByZXNzZWQpO1xuICAgIHZhciBidWY9bmV3IFVpbnQ4QXJyYXkoY29tcHJlc3NlZC5sZW5ndGgqMik7IC8vIDIgYnl0ZXMgcGVyIGNoYXJhY3RlclxuXG4gICAgZm9yICh2YXIgaT0wLCBUb3RhbExlbj1jb21wcmVzc2VkLmxlbmd0aDsgaTxUb3RhbExlbjsgaSsrKSB7XG4gICAgICB2YXIgY3VycmVudF92YWx1ZSA9IGNvbXByZXNzZWQuY2hhckNvZGVBdChpKTtcbiAgICAgIGJ1ZltpKjJdID0gY3VycmVudF92YWx1ZSA+Pj4gODtcbiAgICAgIGJ1ZltpKjIrMV0gPSBjdXJyZW50X3ZhbHVlICUgMjU2O1xuICAgIH1cbiAgICByZXR1cm4gYnVmO1xuICB9LFxuXG4gIC8vZGVjb21wcmVzcyBmcm9tIHVpbnQ4YXJyYXkgKFVDUy0yIGJpZyBlbmRpYW4gZm9ybWF0KVxuICBkZWNvbXByZXNzRnJvbVVpbnQ4QXJyYXk6ZnVuY3Rpb24gKGNvbXByZXNzZWQpIHtcbiAgICBpZiAoY29tcHJlc3NlZD09PW51bGwgfHwgY29tcHJlc3NlZD09PXVuZGVmaW5lZCl7XG4gICAgICAgIHJldHVybiBMWlN0cmluZy5kZWNvbXByZXNzKGNvbXByZXNzZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBidWY9bmV3IEFycmF5KGNvbXByZXNzZWQubGVuZ3RoLzIpOyAvLyAyIGJ5dGVzIHBlciBjaGFyYWN0ZXJcbiAgICAgICAgZm9yICh2YXIgaT0wLCBUb3RhbExlbj1idWYubGVuZ3RoOyBpPFRvdGFsTGVuOyBpKyspIHtcbiAgICAgICAgICBidWZbaV09Y29tcHJlc3NlZFtpKjJdKjI1Nitjb21wcmVzc2VkW2kqMisxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgYnVmLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChmKGMpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBMWlN0cmluZy5kZWNvbXByZXNzKHJlc3VsdC5qb2luKCcnKSk7XG5cbiAgICB9XG5cbiAgfSxcblxuXG4gIC8vY29tcHJlc3MgaW50byBhIHN0cmluZyB0aGF0IGlzIGFscmVhZHkgVVJJIGVuY29kZWRcbiAgY29tcHJlc3NUb0VuY29kZWRVUklDb21wb25lbnQ6IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIGlmIChpbnB1dCA9PSBudWxsKSByZXR1cm4gXCJcIjtcbiAgICByZXR1cm4gTFpTdHJpbmcuX2NvbXByZXNzKGlucHV0LCA2LCBmdW5jdGlvbihhKXtyZXR1cm4ga2V5U3RyVXJpU2FmZS5jaGFyQXQoYSk7fSk7XG4gIH0sXG5cbiAgLy9kZWNvbXByZXNzIGZyb20gYW4gb3V0cHV0IG9mIGNvbXByZXNzVG9FbmNvZGVkVVJJQ29tcG9uZW50XG4gIGRlY29tcHJlc3NGcm9tRW5jb2RlZFVSSUNvbXBvbmVudDpmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQgPT0gbnVsbCkgcmV0dXJuIFwiXCI7XG4gICAgaWYgKGlucHV0ID09IFwiXCIpIHJldHVybiBudWxsO1xuICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvIC9nLCBcIitcIik7XG4gICAgcmV0dXJuIExaU3RyaW5nLl9kZWNvbXByZXNzKGlucHV0Lmxlbmd0aCwgMzIsIGZ1bmN0aW9uKGluZGV4KSB7IHJldHVybiBnZXRCYXNlVmFsdWUoa2V5U3RyVXJpU2FmZSwgaW5wdXQuY2hhckF0KGluZGV4KSk7IH0pO1xuICB9LFxuXG4gIGNvbXByZXNzOiBmdW5jdGlvbiAodW5jb21wcmVzc2VkKSB7XG4gICAgcmV0dXJuIExaU3RyaW5nLl9jb21wcmVzcyh1bmNvbXByZXNzZWQsIDE2LCBmdW5jdGlvbihhKXtyZXR1cm4gZihhKTt9KTtcbiAgfSxcbiAgX2NvbXByZXNzOiBmdW5jdGlvbiAodW5jb21wcmVzc2VkLCBiaXRzUGVyQ2hhciwgZ2V0Q2hhckZyb21JbnQpIHtcbiAgICBpZiAodW5jb21wcmVzc2VkID09IG51bGwpIHJldHVybiBcIlwiO1xuICAgIHZhciBpLCB2YWx1ZSxcbiAgICAgICAgY29udGV4dF9kaWN0aW9uYXJ5PSB7fSxcbiAgICAgICAgY29udGV4dF9kaWN0aW9uYXJ5VG9DcmVhdGU9IHt9LFxuICAgICAgICBjb250ZXh0X2M9XCJcIixcbiAgICAgICAgY29udGV4dF93Yz1cIlwiLFxuICAgICAgICBjb250ZXh0X3c9XCJcIixcbiAgICAgICAgY29udGV4dF9lbmxhcmdlSW49IDIsIC8vIENvbXBlbnNhdGUgZm9yIHRoZSBmaXJzdCBlbnRyeSB3aGljaCBzaG91bGQgbm90IGNvdW50XG4gICAgICAgIGNvbnRleHRfZGljdFNpemU9IDMsXG4gICAgICAgIGNvbnRleHRfbnVtQml0cz0gMixcbiAgICAgICAgY29udGV4dF9kYXRhPVtdLFxuICAgICAgICBjb250ZXh0X2RhdGFfdmFsPTAsXG4gICAgICAgIGNvbnRleHRfZGF0YV9wb3NpdGlvbj0wLFxuICAgICAgICBpaTtcblxuICAgIGZvciAoaWkgPSAwOyBpaSA8IHVuY29tcHJlc3NlZC5sZW5ndGg7IGlpICs9IDEpIHtcbiAgICAgIGNvbnRleHRfYyA9IHVuY29tcHJlc3NlZC5jaGFyQXQoaWkpO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY29udGV4dF9kaWN0aW9uYXJ5LGNvbnRleHRfYykpIHtcbiAgICAgICAgY29udGV4dF9kaWN0aW9uYXJ5W2NvbnRleHRfY10gPSBjb250ZXh0X2RpY3RTaXplKys7XG4gICAgICAgIGNvbnRleHRfZGljdGlvbmFyeVRvQ3JlYXRlW2NvbnRleHRfY10gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0X3djID0gY29udGV4dF93ICsgY29udGV4dF9jO1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjb250ZXh0X2RpY3Rpb25hcnksY29udGV4dF93YykpIHtcbiAgICAgICAgY29udGV4dF93ID0gY29udGV4dF93YztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY29udGV4dF9kaWN0aW9uYXJ5VG9DcmVhdGUsY29udGV4dF93KSkge1xuICAgICAgICAgIGlmIChjb250ZXh0X3cuY2hhckNvZGVBdCgwKTwyNTYpIHtcbiAgICAgICAgICAgIGZvciAoaT0wIDsgaTxjb250ZXh0X251bUJpdHMgOyBpKyspIHtcbiAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3ZhbCA9IChjb250ZXh0X2RhdGFfdmFsIDw8IDEpO1xuICAgICAgICAgICAgICBpZiAoY29udGV4dF9kYXRhX3Bvc2l0aW9uID09IGJpdHNQZXJDaGFyLTEpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24gPSAwO1xuICAgICAgICAgICAgICAgIGNvbnRleHRfZGF0YS5wdXNoKGdldENoYXJGcm9tSW50KGNvbnRleHRfZGF0YV92YWwpKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfdmFsID0gMDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24rKztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWUgPSBjb250ZXh0X3cuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgICAgIGZvciAoaT0wIDsgaTw4IDsgaSsrKSB7XG4gICAgICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAoY29udGV4dF9kYXRhX3ZhbCA8PCAxKSB8ICh2YWx1ZSYxKTtcbiAgICAgICAgICAgICAgaWYgKGNvbnRleHRfZGF0YV9wb3NpdGlvbiA9PSBiaXRzUGVyQ2hhci0xKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3Bvc2l0aW9uID0gMDtcbiAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGEucHVzaChnZXRDaGFyRnJvbUludChjb250ZXh0X2RhdGFfdmFsKSk7XG4gICAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3ZhbCA9IDA7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3Bvc2l0aW9uKys7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSA+PiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IDE7XG4gICAgICAgICAgICBmb3IgKGk9MCA7IGk8Y29udGV4dF9udW1CaXRzIDsgaSsrKSB7XG4gICAgICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAoY29udGV4dF9kYXRhX3ZhbCA8PCAxKSB8IHZhbHVlO1xuICAgICAgICAgICAgICBpZiAoY29udGV4dF9kYXRhX3Bvc2l0aW9uID09Yml0c1BlckNoYXItMSkge1xuICAgICAgICAgICAgICAgIGNvbnRleHRfZGF0YV9wb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgY29udGV4dF9kYXRhLnB1c2goZ2V0Q2hhckZyb21JbnQoY29udGV4dF9kYXRhX3ZhbCkpO1xuICAgICAgICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAwO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRleHRfZGF0YV9wb3NpdGlvbisrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZhbHVlID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlID0gY29udGV4dF93LmNoYXJDb2RlQXQoMCk7XG4gICAgICAgICAgICBmb3IgKGk9MCA7IGk8MTYgOyBpKyspIHtcbiAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3ZhbCA9IChjb250ZXh0X2RhdGFfdmFsIDw8IDEpIHwgKHZhbHVlJjEpO1xuICAgICAgICAgICAgICBpZiAoY29udGV4dF9kYXRhX3Bvc2l0aW9uID09IGJpdHNQZXJDaGFyLTEpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24gPSAwO1xuICAgICAgICAgICAgICAgIGNvbnRleHRfZGF0YS5wdXNoKGdldENoYXJGcm9tSW50KGNvbnRleHRfZGF0YV92YWwpKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfdmFsID0gMDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24rKztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlID4+IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnRleHRfZW5sYXJnZUluLS07XG4gICAgICAgICAgaWYgKGNvbnRleHRfZW5sYXJnZUluID09IDApIHtcbiAgICAgICAgICAgIGNvbnRleHRfZW5sYXJnZUluID0gTWF0aC5wb3coMiwgY29udGV4dF9udW1CaXRzKTtcbiAgICAgICAgICAgIGNvbnRleHRfbnVtQml0cysrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkZWxldGUgY29udGV4dF9kaWN0aW9uYXJ5VG9DcmVhdGVbY29udGV4dF93XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZSA9IGNvbnRleHRfZGljdGlvbmFyeVtjb250ZXh0X3ddO1xuICAgICAgICAgIGZvciAoaT0wIDsgaTxjb250ZXh0X251bUJpdHMgOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAoY29udGV4dF9kYXRhX3ZhbCA8PCAxKSB8ICh2YWx1ZSYxKTtcbiAgICAgICAgICAgIGlmIChjb250ZXh0X2RhdGFfcG9zaXRpb24gPT0gYml0c1BlckNoYXItMSkge1xuICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24gPSAwO1xuICAgICAgICAgICAgICBjb250ZXh0X2RhdGEucHVzaChnZXRDaGFyRnJvbUludChjb250ZXh0X2RhdGFfdmFsKSk7XG4gICAgICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3Bvc2l0aW9uKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlID4+IDE7XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0X2VubGFyZ2VJbi0tO1xuICAgICAgICBpZiAoY29udGV4dF9lbmxhcmdlSW4gPT0gMCkge1xuICAgICAgICAgIGNvbnRleHRfZW5sYXJnZUluID0gTWF0aC5wb3coMiwgY29udGV4dF9udW1CaXRzKTtcbiAgICAgICAgICBjb250ZXh0X251bUJpdHMrKztcbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgd2MgdG8gdGhlIGRpY3Rpb25hcnkuXG4gICAgICAgIGNvbnRleHRfZGljdGlvbmFyeVtjb250ZXh0X3djXSA9IGNvbnRleHRfZGljdFNpemUrKztcbiAgICAgICAgY29udGV4dF93ID0gU3RyaW5nKGNvbnRleHRfYyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gT3V0cHV0IHRoZSBjb2RlIGZvciB3LlxuICAgIGlmIChjb250ZXh0X3cgIT09IFwiXCIpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY29udGV4dF9kaWN0aW9uYXJ5VG9DcmVhdGUsY29udGV4dF93KSkge1xuICAgICAgICBpZiAoY29udGV4dF93LmNoYXJDb2RlQXQoMCk8MjU2KSB7XG4gICAgICAgICAgZm9yIChpPTAgOyBpPGNvbnRleHRfbnVtQml0cyA7IGkrKykge1xuICAgICAgICAgICAgY29udGV4dF9kYXRhX3ZhbCA9IChjb250ZXh0X2RhdGFfdmFsIDw8IDEpO1xuICAgICAgICAgICAgaWYgKGNvbnRleHRfZGF0YV9wb3NpdGlvbiA9PSBiaXRzUGVyQ2hhci0xKSB7XG4gICAgICAgICAgICAgIGNvbnRleHRfZGF0YV9wb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICAgIGNvbnRleHRfZGF0YS5wdXNoKGdldENoYXJGcm9tSW50KGNvbnRleHRfZGF0YV92YWwpKTtcbiAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3ZhbCA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdmFsdWUgPSBjb250ZXh0X3cuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgICBmb3IgKGk9MCA7IGk8OCA7IGkrKykge1xuICAgICAgICAgICAgY29udGV4dF9kYXRhX3ZhbCA9IChjb250ZXh0X2RhdGFfdmFsIDw8IDEpIHwgKHZhbHVlJjEpO1xuICAgICAgICAgICAgaWYgKGNvbnRleHRfZGF0YV9wb3NpdGlvbiA9PSBiaXRzUGVyQ2hhci0xKSB7XG4gICAgICAgICAgICAgIGNvbnRleHRfZGF0YV9wb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICAgIGNvbnRleHRfZGF0YS5wdXNoKGdldENoYXJGcm9tSW50KGNvbnRleHRfZGF0YV92YWwpKTtcbiAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3ZhbCA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgPj4gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWUgPSAxO1xuICAgICAgICAgIGZvciAoaT0wIDsgaTxjb250ZXh0X251bUJpdHMgOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAoY29udGV4dF9kYXRhX3ZhbCA8PCAxKSB8IHZhbHVlO1xuICAgICAgICAgICAgaWYgKGNvbnRleHRfZGF0YV9wb3NpdGlvbiA9PSBiaXRzUGVyQ2hhci0xKSB7XG4gICAgICAgICAgICAgIGNvbnRleHRfZGF0YV9wb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICAgIGNvbnRleHRfZGF0YS5wdXNoKGdldENoYXJGcm9tSW50KGNvbnRleHRfZGF0YV92YWwpKTtcbiAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3ZhbCA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFsdWUgPSBjb250ZXh0X3cuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgICBmb3IgKGk9MCA7IGk8MTYgOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAoY29udGV4dF9kYXRhX3ZhbCA8PCAxKSB8ICh2YWx1ZSYxKTtcbiAgICAgICAgICAgIGlmIChjb250ZXh0X2RhdGFfcG9zaXRpb24gPT0gYml0c1BlckNoYXItMSkge1xuICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24gPSAwO1xuICAgICAgICAgICAgICBjb250ZXh0X2RhdGEucHVzaChnZXRDaGFyRnJvbUludChjb250ZXh0X2RhdGFfdmFsKSk7XG4gICAgICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3Bvc2l0aW9uKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlID4+IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnRleHRfZW5sYXJnZUluLS07XG4gICAgICAgIGlmIChjb250ZXh0X2VubGFyZ2VJbiA9PSAwKSB7XG4gICAgICAgICAgY29udGV4dF9lbmxhcmdlSW4gPSBNYXRoLnBvdygyLCBjb250ZXh0X251bUJpdHMpO1xuICAgICAgICAgIGNvbnRleHRfbnVtQml0cysrO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBjb250ZXh0X2RpY3Rpb25hcnlUb0NyZWF0ZVtjb250ZXh0X3ddO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSBjb250ZXh0X2RpY3Rpb25hcnlbY29udGV4dF93XTtcbiAgICAgICAgZm9yIChpPTAgOyBpPGNvbnRleHRfbnVtQml0cyA7IGkrKykge1xuICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAoY29udGV4dF9kYXRhX3ZhbCA8PCAxKSB8ICh2YWx1ZSYxKTtcbiAgICAgICAgICBpZiAoY29udGV4dF9kYXRhX3Bvc2l0aW9uID09IGJpdHNQZXJDaGFyLTEpIHtcbiAgICAgICAgICAgIGNvbnRleHRfZGF0YV9wb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICBjb250ZXh0X2RhdGEucHVzaChnZXRDaGFyRnJvbUludChjb250ZXh0X2RhdGFfdmFsKSk7XG4gICAgICAgICAgICBjb250ZXh0X2RhdGFfdmFsID0gMDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGV4dF9kYXRhX3Bvc2l0aW9uKys7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhbHVlID0gdmFsdWUgPj4gMTtcbiAgICAgICAgfVxuXG5cbiAgICAgIH1cbiAgICAgIGNvbnRleHRfZW5sYXJnZUluLS07XG4gICAgICBpZiAoY29udGV4dF9lbmxhcmdlSW4gPT0gMCkge1xuICAgICAgICBjb250ZXh0X2VubGFyZ2VJbiA9IE1hdGgucG93KDIsIGNvbnRleHRfbnVtQml0cyk7XG4gICAgICAgIGNvbnRleHRfbnVtQml0cysrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1hcmsgdGhlIGVuZCBvZiB0aGUgc3RyZWFtXG4gICAgdmFsdWUgPSAyO1xuICAgIGZvciAoaT0wIDsgaTxjb250ZXh0X251bUJpdHMgOyBpKyspIHtcbiAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAoY29udGV4dF9kYXRhX3ZhbCA8PCAxKSB8ICh2YWx1ZSYxKTtcbiAgICAgIGlmIChjb250ZXh0X2RhdGFfcG9zaXRpb24gPT0gYml0c1BlckNoYXItMSkge1xuICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24gPSAwO1xuICAgICAgICBjb250ZXh0X2RhdGEucHVzaChnZXRDaGFyRnJvbUludChjb250ZXh0X2RhdGFfdmFsKSk7XG4gICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dF9kYXRhX3Bvc2l0aW9uKys7XG4gICAgICB9XG4gICAgICB2YWx1ZSA9IHZhbHVlID4+IDE7XG4gICAgfVxuXG4gICAgLy8gRmx1c2ggdGhlIGxhc3QgY2hhclxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBjb250ZXh0X2RhdGFfdmFsID0gKGNvbnRleHRfZGF0YV92YWwgPDwgMSk7XG4gICAgICBpZiAoY29udGV4dF9kYXRhX3Bvc2l0aW9uID09IGJpdHNQZXJDaGFyLTEpIHtcbiAgICAgICAgY29udGV4dF9kYXRhLnB1c2goZ2V0Q2hhckZyb21JbnQoY29udGV4dF9kYXRhX3ZhbCkpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGVsc2UgY29udGV4dF9kYXRhX3Bvc2l0aW9uKys7XG4gICAgfVxuICAgIHJldHVybiBjb250ZXh0X2RhdGEuam9pbignJyk7XG4gIH0sXG5cbiAgZGVjb21wcmVzczogZnVuY3Rpb24gKGNvbXByZXNzZWQpIHtcbiAgICBpZiAoY29tcHJlc3NlZCA9PSBudWxsKSByZXR1cm4gXCJcIjtcbiAgICBpZiAoY29tcHJlc3NlZCA9PSBcIlwiKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gTFpTdHJpbmcuX2RlY29tcHJlc3MoY29tcHJlc3NlZC5sZW5ndGgsIDMyNzY4LCBmdW5jdGlvbihpbmRleCkgeyByZXR1cm4gY29tcHJlc3NlZC5jaGFyQ29kZUF0KGluZGV4KTsgfSk7XG4gIH0sXG5cbiAgX2RlY29tcHJlc3M6IGZ1bmN0aW9uIChsZW5ndGgsIHJlc2V0VmFsdWUsIGdldE5leHRWYWx1ZSkge1xuICAgIHZhciBkaWN0aW9uYXJ5ID0gW10sXG4gICAgICAgIG5leHQsXG4gICAgICAgIGVubGFyZ2VJbiA9IDQsXG4gICAgICAgIGRpY3RTaXplID0gNCxcbiAgICAgICAgbnVtQml0cyA9IDMsXG4gICAgICAgIGVudHJ5ID0gXCJcIixcbiAgICAgICAgcmVzdWx0ID0gW10sXG4gICAgICAgIGksXG4gICAgICAgIHcsXG4gICAgICAgIGJpdHMsIHJlc2IsIG1heHBvd2VyLCBwb3dlcixcbiAgICAgICAgYyxcbiAgICAgICAgZGF0YSA9IHt2YWw6Z2V0TmV4dFZhbHVlKDApLCBwb3NpdGlvbjpyZXNldFZhbHVlLCBpbmRleDoxfTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcbiAgICAgIGRpY3Rpb25hcnlbaV0gPSBpO1xuICAgIH1cblxuICAgIGJpdHMgPSAwO1xuICAgIG1heHBvd2VyID0gTWF0aC5wb3coMiwyKTtcbiAgICBwb3dlcj0xO1xuICAgIHdoaWxlIChwb3dlciE9bWF4cG93ZXIpIHtcbiAgICAgIHJlc2IgPSBkYXRhLnZhbCAmIGRhdGEucG9zaXRpb247XG4gICAgICBkYXRhLnBvc2l0aW9uID4+PSAxO1xuICAgICAgaWYgKGRhdGEucG9zaXRpb24gPT0gMCkge1xuICAgICAgICBkYXRhLnBvc2l0aW9uID0gcmVzZXRWYWx1ZTtcbiAgICAgICAgZGF0YS52YWwgPSBnZXROZXh0VmFsdWUoZGF0YS5pbmRleCsrKTtcbiAgICAgIH1cbiAgICAgIGJpdHMgfD0gKHJlc2I+MCA/IDEgOiAwKSAqIHBvd2VyO1xuICAgICAgcG93ZXIgPDw9IDE7XG4gICAgfVxuXG4gICAgc3dpdGNoIChuZXh0ID0gYml0cykge1xuICAgICAgY2FzZSAwOlxuICAgICAgICAgIGJpdHMgPSAwO1xuICAgICAgICAgIG1heHBvd2VyID0gTWF0aC5wb3coMiw4KTtcbiAgICAgICAgICBwb3dlcj0xO1xuICAgICAgICAgIHdoaWxlIChwb3dlciE9bWF4cG93ZXIpIHtcbiAgICAgICAgICAgIHJlc2IgPSBkYXRhLnZhbCAmIGRhdGEucG9zaXRpb247XG4gICAgICAgICAgICBkYXRhLnBvc2l0aW9uID4+PSAxO1xuICAgICAgICAgICAgaWYgKGRhdGEucG9zaXRpb24gPT0gMCkge1xuICAgICAgICAgICAgICBkYXRhLnBvc2l0aW9uID0gcmVzZXRWYWx1ZTtcbiAgICAgICAgICAgICAgZGF0YS52YWwgPSBnZXROZXh0VmFsdWUoZGF0YS5pbmRleCsrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJpdHMgfD0gKHJlc2I+MCA/IDEgOiAwKSAqIHBvd2VyO1xuICAgICAgICAgICAgcG93ZXIgPDw9IDE7XG4gICAgICAgICAgfVxuICAgICAgICBjID0gZihiaXRzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgICAgYml0cyA9IDA7XG4gICAgICAgICAgbWF4cG93ZXIgPSBNYXRoLnBvdygyLDE2KTtcbiAgICAgICAgICBwb3dlcj0xO1xuICAgICAgICAgIHdoaWxlIChwb3dlciE9bWF4cG93ZXIpIHtcbiAgICAgICAgICAgIHJlc2IgPSBkYXRhLnZhbCAmIGRhdGEucG9zaXRpb247XG4gICAgICAgICAgICBkYXRhLnBvc2l0aW9uID4+PSAxO1xuICAgICAgICAgICAgaWYgKGRhdGEucG9zaXRpb24gPT0gMCkge1xuICAgICAgICAgICAgICBkYXRhLnBvc2l0aW9uID0gcmVzZXRWYWx1ZTtcbiAgICAgICAgICAgICAgZGF0YS52YWwgPSBnZXROZXh0VmFsdWUoZGF0YS5pbmRleCsrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJpdHMgfD0gKHJlc2I+MCA/IDEgOiAwKSAqIHBvd2VyO1xuICAgICAgICAgICAgcG93ZXIgPDw9IDE7XG4gICAgICAgICAgfVxuICAgICAgICBjID0gZihiaXRzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBkaWN0aW9uYXJ5WzNdID0gYztcbiAgICB3ID0gYztcbiAgICByZXN1bHQucHVzaChjKTtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgaWYgKGRhdGEuaW5kZXggPiBsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICB9XG5cbiAgICAgIGJpdHMgPSAwO1xuICAgICAgbWF4cG93ZXIgPSBNYXRoLnBvdygyLG51bUJpdHMpO1xuICAgICAgcG93ZXI9MTtcbiAgICAgIHdoaWxlIChwb3dlciE9bWF4cG93ZXIpIHtcbiAgICAgICAgcmVzYiA9IGRhdGEudmFsICYgZGF0YS5wb3NpdGlvbjtcbiAgICAgICAgZGF0YS5wb3NpdGlvbiA+Pj0gMTtcbiAgICAgICAgaWYgKGRhdGEucG9zaXRpb24gPT0gMCkge1xuICAgICAgICAgIGRhdGEucG9zaXRpb24gPSByZXNldFZhbHVlO1xuICAgICAgICAgIGRhdGEudmFsID0gZ2V0TmV4dFZhbHVlKGRhdGEuaW5kZXgrKyk7XG4gICAgICAgIH1cbiAgICAgICAgYml0cyB8PSAocmVzYj4wID8gMSA6IDApICogcG93ZXI7XG4gICAgICAgIHBvd2VyIDw8PSAxO1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKGMgPSBiaXRzKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICBiaXRzID0gMDtcbiAgICAgICAgICBtYXhwb3dlciA9IE1hdGgucG93KDIsOCk7XG4gICAgICAgICAgcG93ZXI9MTtcbiAgICAgICAgICB3aGlsZSAocG93ZXIhPW1heHBvd2VyKSB7XG4gICAgICAgICAgICByZXNiID0gZGF0YS52YWwgJiBkYXRhLnBvc2l0aW9uO1xuICAgICAgICAgICAgZGF0YS5wb3NpdGlvbiA+Pj0gMTtcbiAgICAgICAgICAgIGlmIChkYXRhLnBvc2l0aW9uID09IDApIHtcbiAgICAgICAgICAgICAgZGF0YS5wb3NpdGlvbiA9IHJlc2V0VmFsdWU7XG4gICAgICAgICAgICAgIGRhdGEudmFsID0gZ2V0TmV4dFZhbHVlKGRhdGEuaW5kZXgrKyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiaXRzIHw9IChyZXNiPjAgPyAxIDogMCkgKiBwb3dlcjtcbiAgICAgICAgICAgIHBvd2VyIDw8PSAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpY3Rpb25hcnlbZGljdFNpemUrK10gPSBmKGJpdHMpO1xuICAgICAgICAgIGMgPSBkaWN0U2l6ZS0xO1xuICAgICAgICAgIGVubGFyZ2VJbi0tO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgYml0cyA9IDA7XG4gICAgICAgICAgbWF4cG93ZXIgPSBNYXRoLnBvdygyLDE2KTtcbiAgICAgICAgICBwb3dlcj0xO1xuICAgICAgICAgIHdoaWxlIChwb3dlciE9bWF4cG93ZXIpIHtcbiAgICAgICAgICAgIHJlc2IgPSBkYXRhLnZhbCAmIGRhdGEucG9zaXRpb247XG4gICAgICAgICAgICBkYXRhLnBvc2l0aW9uID4+PSAxO1xuICAgICAgICAgICAgaWYgKGRhdGEucG9zaXRpb24gPT0gMCkge1xuICAgICAgICAgICAgICBkYXRhLnBvc2l0aW9uID0gcmVzZXRWYWx1ZTtcbiAgICAgICAgICAgICAgZGF0YS52YWwgPSBnZXROZXh0VmFsdWUoZGF0YS5pbmRleCsrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJpdHMgfD0gKHJlc2I+MCA/IDEgOiAwKSAqIHBvd2VyO1xuICAgICAgICAgICAgcG93ZXIgPDw9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRpY3Rpb25hcnlbZGljdFNpemUrK10gPSBmKGJpdHMpO1xuICAgICAgICAgIGMgPSBkaWN0U2l6ZS0xO1xuICAgICAgICAgIGVubGFyZ2VJbi0tO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5qb2luKCcnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVubGFyZ2VJbiA9PSAwKSB7XG4gICAgICAgIGVubGFyZ2VJbiA9IE1hdGgucG93KDIsIG51bUJpdHMpO1xuICAgICAgICBudW1CaXRzKys7XG4gICAgICB9XG5cbiAgICAgIGlmIChkaWN0aW9uYXJ5W2NdKSB7XG4gICAgICAgIGVudHJ5ID0gZGljdGlvbmFyeVtjXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjID09PSBkaWN0U2l6ZSkge1xuICAgICAgICAgIGVudHJ5ID0gdyArIHcuY2hhckF0KDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaChlbnRyeSk7XG5cbiAgICAgIC8vIEFkZCB3K2VudHJ5WzBdIHRvIHRoZSBkaWN0aW9uYXJ5LlxuICAgICAgZGljdGlvbmFyeVtkaWN0U2l6ZSsrXSA9IHcgKyBlbnRyeS5jaGFyQXQoMCk7XG4gICAgICBlbmxhcmdlSW4tLTtcblxuICAgICAgdyA9IGVudHJ5O1xuXG4gICAgICBpZiAoZW5sYXJnZUluID09IDApIHtcbiAgICAgICAgZW5sYXJnZUluID0gTWF0aC5wb3coMiwgbnVtQml0cyk7XG4gICAgICAgIG51bUJpdHMrKztcbiAgICAgIH1cblxuICAgIH1cbiAgfVxufTtcbiAgcmV0dXJuIExaU3RyaW5nO1xufSkoKTtcblxuaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gTFpTdHJpbmc7IH0pO1xufSBlbHNlIGlmKCB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUgIT0gbnVsbCApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBMWlN0cmluZ1xufSBlbHNlIGlmKCB0eXBlb2YgYW5ndWxhciAhPT0gJ3VuZGVmaW5lZCcgJiYgYW5ndWxhciAhPSBudWxsICkge1xuICBhbmd1bGFyLm1vZHVsZSgnTFpTdHJpbmcnLCBbXSlcbiAgLmZhY3RvcnkoJ0xaU3RyaW5nJywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBMWlN0cmluZztcbiAgfSk7XG59XG4iXX0=
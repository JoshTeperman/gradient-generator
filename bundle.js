(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const jscolor = require('jscolor')
module.exports = function (n) { return n * 111 }
// Using Browserify to add npm require() functionality to browser
// To bundle app.js file, run browserify app.js > bundle.js

const COLORS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
let gradientMemory = []


  // events -->
const eventListeners = () => {
  console.log('adding event listeners')
  const clickRandomGradientEvent = () => {
    const button = document.querySelector('#random-gradient-button').addEventListener('click', () => {
      setNewGradientBackground(randomHexoColor(), randomHexoColor());
    })
  }

  const copyGradientEvent = () => {
    const clickTarget = document.querySelector('#gradient-string')
    clickTarget.addEventListener('click', copyText())
  }

  const clickPreviousGradientEvent = () => {
    const button = document.querySelector('#previous-gradient-button')
    button.addEventListener('click', () => {
      // show previous gradient
    })
  }

  const clickBookmarkedGradientEvent = () => {
    const button = document.querySelector('#bookmark-gradient-button');
    const bookmarks = document.querySelector('#bookmarks')
    button.addEventListener('click', (event) => {
      const currentGradient = document.body.style.background
      const bookmarksArray = document.querySelectorAll('.bookmark')
  
      if (!Array.from(bookmarksArray).find(bookmark => bookmark.style.background = currentGradient)) {
        const newBookmark = document.createElement('li')
        newBookmark.className = "bookmark"
        newBookmark.style.background = currentGradient
        bookmarks.appendChild(newBookmark)  
        bookmarks.style.display = 'block'
      }
    })
  }

  clickRandomGradientEvent();
  copyGradientEvent();
  clickBookmarkedGradientEvent();

}

// logic -->

const setNewGradientBackground = (color1, color2) => {
  const newGradient = createGradientString(color1, color2) 
  document.querySelector('body').style = `background: ${newGradient}`
  updateGradientMemory(newGradient);
  updateColorPicker(document.querySelector('#color1'), color1);
  updateColorPicker(document.querySelector('#color2'), color2);
  updateResult(newGradient);
}

const randNum = () => {
  return Math.floor(Math.random() * COLORS.length)
}

const createGradientString = (color1, color2) => {
  return `linear-gradient(${color1}, ${color2})`
}

const randomHexoColor = () => {
  const color = []
  for (i = 0; i < 6; i++) {
    color.push(COLORS[randNum()])
  }
  return '#' + color.join("")
}

const updateGradientMemory = (gradientString) => {
  if (localStorage.gradientMemory) {
    gradientMemory = JSON.parse(localStorage.gradientMemory)
  }

  if (!gradientMemory.includes(gradientString)) {
    gradientMemory.push(gradientString);
    localStorage.setItem('gradientMemory', JSON.stringify(gradientMemory));
  }
}

const updateColorPicker = (colorPicker, color) => {
  colorPicker.value = color
}

const updateResult = (gradient) => {
  document.querySelector('#gradient-string').value = `background: ${gradient}`
}

const copyText = () => {
  const copyText = document.querySelector('#gradient-string');
  // copyText.select();
  // document.execCommand('copy');
  // console.log(`${copytText}`)
}

const run = () => {
  setNewGradientBackground(randomHexoColor(), randomHexoColor());
}

run();
eventListeners();

/*
access last gradient in memory: 
let storageData = JSON.parse(localStorage.gradientMemory)
newBookmark.style.background = `${storageData[storageData.length - 1]}`

*/

},{"jscolor":6}],2:[function(require,module,exports){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.colorNames = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var colorNames = exports.colorNames = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "00ffff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000000",
    blanchedalmond: "ffebcd",
    blue: "0000ff",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "00ffff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "ff00ff",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "778899",
    lightslategrey: "778899",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "00ff00",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "ff00ff",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "ff0000",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "ffffff",
    whitesmoke: "f5f5f5",
    yellow: "ffff00",
    yellowgreen: "9acd32"
  };

  var nameLookup = exports.nameLookup = Object.keys(colorNames).reduce(function (lookup, name) {
    var hex = colorNames[name];
    lookup[hex] = name;
    return lookup;
  }, {});
});
},{}],3:[function(require,module,exports){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.colorRegex = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var CSS_INT = "[-\\+]?\\d+%?";
  var CSS_NUM = "[-\\+]?\\d*\\.\\d+%?";
  var CSS_UNIT = "(?:" + CSS_NUM + ")|(?:" + CSS_INT + ")";
  var MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
  var MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";

  exports.default = {
    rgb: new RegExp("rgb" + MATCH3),
    rgba: new RegExp("rgba" + MATCH4),
    hsl: new RegExp("hsl" + MATCH3),
    hsla: new RegExp("hsla" + MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
});
},{}],4:[function(require,module,exports){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.colorUtils = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.hslToRGB = hslToRGB;
  exports.rgbToHSL = rgbToHSL;
  exports.ensureAlpha = ensureAlpha;
  exports.ensureHue = ensureHue;
  exports.ensureValue = ensureValue;
  exports.ensureHSL = ensureHSL;
  exports.ensureRGB = ensureRGB;
  function hslToRGB(h, s, l) {
    h /= 360;
    s /= 100;
    l /= 100;
    var r, g, b;
    if (s == 0) {
      r = g = b = l;
    } else {
      var hueToRGB = function hueToRGB(p, q, t) {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };

      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      r = hueToRGB(p, q, h + 1 / 3);
      g = hueToRGB(p, q, h);
      b = hueToRGB(p, q, h - 1 / 3);
    }
    return { r: r * 255, g: g * 255, b: b * 255 };
  }

  function rgbToHSL(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = void 0,
        s = void 0,
        l = (max + min) / 2;
    if (max == min) {
      h = s = 0;
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }
    return { h: h * 360, s: s * 100, l: l * 100 };
  }

  function ensureAlpha(a) {
    a = parseFloat(a);
    if (isNaN(a)) return 1;
    return Math.max(0, Math.min(1, a));
  }

  function ensureHue(h) {
    h = parseInt(h);
    if (isNaN(h)) return 0;
    var hue = h % 360;
    return hue < 0 ? 360 + hue : hue;
  }

  function ensureValue(v, max) {
    if (typeof v === "string" && v.indexOf("%") > -1) {
      v = parseInt(v) / 100 * max;
    } else {
      v = parseInt(v);
    }
    if (isNaN(v)) return 0;
    return Math.max(0, Math.min(max, v));
  }

  function ensureHSL(h, s, l) {
    return {
      h: ensureHue(h),
      s: ensureValue(s, 100),
      l: ensureValue(l, 100)
    };
  }

  function ensureRGB(r, g, b) {
    return {
      r: ensureValue(r, 255),
      g: ensureValue(g, 255),
      b: ensureValue(b, 255)
    };
  }
});
},{}],5:[function(require,module,exports){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./color-regex", "./color-names", "./color-utils"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./color-regex"), require("./color-names"), require("./color-utils"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.colorRegex, global.colorNames, global.colorUtils);
    global.color = mod.exports;
  }
})(this, function (exports, _colorRegex, _colorNames, _colorUtils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _colorRegex2 = _interopRequireDefault(_colorRegex);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var RGB = "rgb";
  var HSL = "hsl";
  var HEX = "hex";

  function exists() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return args.length > 0 && args.every(function (arg) {
      return arg !== null && arg !== undefined;
    });
  }

  var Color = function () {
    function Color(color) {
      _classCallCheck(this, Color);

      this.state = {
        r: 0,
        g: 0,
        b: 0,
        h: null,
        s: null,
        l: null,
        a: 1
      };
      if (color) {
        this.from(color);
      }
    }

    _createClass(Color, [{
      key: "setRGB",
      value: function setRGB(_ref) {
        var r = _ref.r,
            g = _ref.g,
            b = _ref.b;

        this.state.r = r;
        this.state.g = g;
        this.state.b = b;
        this.state.h = null;
        this.state.s = null;
        this.state.l = null;
      }
    }, {
      key: "setHSL",
      value: function setHSL(_ref2) {
        var h = _ref2.h,
            s = _ref2.s,
            l = _ref2.l;

        this.state.r = null;
        this.state.g = null;
        this.state.b = null;
        this.state.h = h;
        this.state.s = s;
        this.state.l = l;
      }
    }, {
      key: "getRGB",
      value: function getRGB() {
        var _state = this.state,
            r = _state.r,
            g = _state.g,
            b = _state.b,
            h = _state.h,
            s = _state.s,
            l = _state.l;

        if (!exists(r, g, b)) {
          var rgb = (0, _colorUtils.hslToRGB)(h, s, l);
          this.state.r = rgb.r;
          this.state.g = rgb.g;
          this.state.b = rgb.b;
        }
        return {
          r: this.state.r,
          g: this.state.g,
          b: this.state.b
        };
      }
    }, {
      key: "getHSL",
      value: function getHSL() {
        var _state2 = this.state,
            r = _state2.r,
            g = _state2.g,
            b = _state2.b,
            h = _state2.h,
            s = _state2.s,
            l = _state2.l;

        if (!exists(h, s, l)) {
          var hsl = (0, _colorUtils.rgbToHSL)(r, g, b);
          this.state.h = hsl.h;
          this.state.s = hsl.s;
          this.state.l = hsl.l;
        }
        return {
          h: this.state.h,
          s: this.state.s,
          l: this.state.l
        };
      }
    }, {
      key: "from",
      value: function from(color) {
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        if (!color) {
          throw new Error("No color provided");
        } else if (typeof color === "string") {
          this.fromString(color, type);
        } else if (typeof color === "number") {
          this.fromNumber(color, type);
        } else if (Array.isArray(color)) {
          this.fromArray(color, type);
        } else {
          this.fromObject(color, type);
        }
      }
    }, {
      key: "fromString",
      value: function fromString(color) {
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        if (typeof color !== "string") return;

        color = color.replace(/^\s+/, "").replace(/\s+$/, "").toLowerCase();

        if (_colorNames.colorNames[color]) {
          color = _colorNames.colorNames[color];
        } else if (color === "transparent") {
          this.state.a = 0;
          return;
        }

        var match = void 0;
        if (match = _colorRegex2.default.rgb.exec(color)) {
          this.setRGB((0, _colorUtils.ensureRGB)(match[1], match[2], match[3]));
        } else if (match = _colorRegex2.default.rgba.exec(color)) {
          this.setRGB((0, _colorUtils.ensureRGB)(match[1], match[2], match[3]));
          this.state.a = (0, _colorUtils.ensureAlpha)(match[4]);
        } else if (match = _colorRegex2.default.hsl.exec(color)) {
          this.setHSL((0, _colorUtils.ensureHSL)(match[1], match[2], match[3]));
        } else if (match = _colorRegex2.default.hsla.exec(color)) {
          this.setHSL((0, _colorUtils.ensureHSL)(match[1], match[2], match[3]));
          this.state.a = (0, _colorUtils.ensureAlpha)(match[4]);
        } else if (match = _colorRegex2.default.hex6.exec(color)) {
          var rgb = match.map(function (v) {
            return parseInt(v, 16);
          });
          this.setRGB((0, _colorUtils.ensureRGB)(rgb[1], rgb[2], rgb[3]));
        } else if (match = _colorRegex2.default.hex3.exec(color)) {
          var _rgb = match.map(function (v) {
            return parseInt(v + "" + v, 16);
          });
          this.setRGB((0, _colorUtils.ensureRGB)(_rgb[1], _rgb[2], _rgb[3]));
        }
      }
    }, {
      key: "fromNumber",
      value: function fromNumber(num) {
        if (typeof num !== "number") return;
        var match = void 0;
        var color = "" + num;
        if (match = _colorRegex2.default.hex6.exec(color)) {
          var rgb = match.map(function (v) {
            return parseInt(v, 16);
          });
          this.setRGB((0, _colorUtils.ensureRGB)(rgb[1], rgb[2], rgb[3]));
        } else if (match = _colorRegex2.default.hex3.exec(color)) {
          var _rgb2 = match.map(function (v) {
            return parseInt(v + "" + v, 16);
          });
          this.setRGB((0, _colorUtils.ensureRGB)(_rgb2[1], _rgb2[2], _rgb2[3]));
        }
      }
    }, {
      key: "fromObject",
      value: function fromObject(obj) {
        if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) !== "object") return;
        if (exists(obj.r, obj.g, obj.b)) {
          this.setRGB((0, _colorUtils.ensureRGB)(obj.r, obj.g, obj.b));
        } else if (exists(obj.h, obj.s, obj.l)) {
          this.setHSL((0, _colorUtils.ensureHSL)(obj.h, obj.s, obj.l));
        }
        if (exists(obj.a)) {
          this.state.a = (0, _colorUtils.ensureAlpha)(obj.a);
        }
      }
    }, {
      key: "fromArray",
      value: function fromArray(arr) {
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : RGB;

        if (!Array.isArray(arr)) return;
        if (exists(arr[0], arr[1], arr[2])) {
          if (type === HSL) {
            this.setHSL((0, _colorUtils.ensureHSL)(arr[0], arr[1], arr[2]));
          } else {
            this.setRGB((0, _colorUtils.ensureRGB)(arr[0], arr[1], arr[2]));
          }
        }
        if (exists(arr[3])) {
          this.state.a = (0, _colorUtils.ensureAlpha)(arr[3]);
        }
      }
    }, {
      key: "hue",
      get: function get() {
        var _getHSL = this.getHSL(),
            h = _getHSL.h;

        return Math.round(h);
      },
      set: function set(h) {
        var _getHSL2 = this.getHSL(),
            s = _getHSL2.s,
            l = _getHSL2.l;

        h = (0, _colorUtils.ensureHue)(h);
        this.setHSL({ h: h, s: s, l: l });
      }
    }, {
      key: "saturation",
      get: function get() {
        var _getHSL3 = this.getHSL(),
            s = _getHSL3.s;

        return Math.round(s);
      },
      set: function set(s) {
        var _getHSL4 = this.getHSL(),
            h = _getHSL4.h,
            l = _getHSL4.l;

        s = (0, _colorUtils.ensureValue)(s, 100);
        this.setHSL({ h: h, s: s, l: l });
      }
    }, {
      key: "lightness",
      get: function get() {
        var _getHSL5 = this.getHSL(),
            l = _getHSL5.l;

        return Math.round(l);
      },
      set: function set(l) {
        var _getHSL6 = this.getHSL(),
            h = _getHSL6.h,
            s = _getHSL6.s;

        l = (0, _colorUtils.ensureValue)(l, 100);
        this.setHSL({ h: h, s: s, l: l });
      }
    }, {
      key: "red",
      get: function get() {
        var _getRGB = this.getRGB(),
            r = _getRGB.r;

        return Math.round(r);
      },
      set: function set(r) {
        var _getRGB2 = this.getRGB(),
            g = _getRGB2.g,
            b = _getRGB2.b;

        r = (0, _colorUtils.ensureValue)(r, 255);
        this.setRGB({ r: r, g: g, b: b });
      }
    }, {
      key: "green",
      get: function get() {
        var _getRGB3 = this.getRGB(),
            g = _getRGB3.g;

        return Math.round(g);
      },
      set: function set(g) {
        var _getRGB4 = this.getRGB(),
            r = _getRGB4.r,
            b = _getRGB4.b;

        g = (0, _colorUtils.ensureValue)(g, 255);
        this.setRGB({ r: r, g: g, b: b });
      }
    }, {
      key: "blue",
      get: function get() {
        var _getRGB5 = this.getRGB(),
            b = _getRGB5.b;

        return Math.round(b);
      },
      set: function set(b) {
        var _getRGB6 = this.getRGB(),
            r = _getRGB6.r,
            g = _getRGB6.g;

        b = (0, _colorUtils.ensureValue)(b, 255);
        this.setRGB({ r: r, g: g, b: b });
      }
    }, {
      key: "alpha",
      get: function get() {
        return this.state.a;
      },
      set: function set(a) {
        this.state.a = (0, _colorUtils.ensureAlpha)(a);
      }
    }, {
      key: "rgb",
      get: function get() {
        var rgb = Object.values(this.getRGB()).map(function (v) {
          return Math.round(v);
        }).join(",");
        return "rgb(" + rgb + ")";
      },
      set: function set(rgb) {
        this.from(rgb, RGB);
      }
    }, {
      key: "rgba",
      get: function get() {
        var rgb = Object.values(this.getRGB()).map(function (v) {
          return Math.round(v);
        }).join(",");
        return "rgba(" + rgb + "," + this.state.a + ")";
      },
      set: function set(rgba) {
        this.from(rgba, RGB);
      }
    }, {
      key: "hsl",
      get: function get() {
        var hsl = Object.values(this.getHSL()).map(function (v) {
          return Math.round(v);
        }).map(function (v, i) {
          return i > 0 ? v + "%" : v;
        }).join(",");
        return "hsl(" + hsl + ")";
      },
      set: function set(hsl) {
        this.from(hsl, HSL);
      }
    }, {
      key: "hsla",
      get: function get() {
        var hsl = Object.values(this.getHSL()).map(function (v) {
          return Math.round(v);
        }).map(function (v, i) {
          return i > 0 ? v + "%" : v;
        }).join(",");
        return "hsla(" + hsl + "," + this.state.a + ")";
      },
      set: function set(hsla) {
        this.from(hsla, HSL);
      }
    }, {
      key: "hex",
      get: function get() {
        var hex = Object.values(this.getRGB()).map(function (v) {
          return Math.round(v);
        }).map(function (v) {
          return v.toString(16);
        }).map(function (v) {
          return v.length === 2 ? v : "0" + v;
        }).join("");
        return "#" + hex;
      },
      set: function set(hex) {
        this.from(hex);
      }
    }, {
      key: "name",
      get: function get() {
        var hex = Object.values(this.getRGB()).map(function (v) {
          return Math.round(v);
        }).map(function (v) {
          return v.toString(16);
        }).map(function (v) {
          return v.length === 2 ? v : "0" + v;
        }).join("");
        return _colorNames.nameLookup[hex] || false;
      },
      set: function set(name) {
        this.fromString(name);
      }
    }, {
      key: "yiq",
      get: function get() {
        var hex = this.hex;

        var r = parseInt(hex.substr(1, 2), 16);
        var g = parseInt(hex.substr(3, 2), 16);
        var b = parseInt(hex.substr(5, 2), 16);
        return (r * 299 + g * 587 + b * 114) / 1000;
      }
    }, {
      key: "h",
      get: function get() {
        return this.hue;
      },
      set: function set(h) {
        this.hue = h;
      }
    }, {
      key: "s",
      get: function get() {
        return this.saturation;
      },
      set: function set(s) {
        this.saturation = s;
      }
    }, {
      key: "l",
      get: function get() {
        return this.lightness;
      },
      set: function set(l) {
        this.lightness = l;
      }
    }, {
      key: "r",
      get: function get() {
        return this.red;
      },
      set: function set(r) {
        this.red = r;
      }
    }, {
      key: "g",
      get: function get() {
        return this.green;
      },
      set: function set(g) {
        this.green = g;
      }
    }, {
      key: "b",
      get: function get() {
        return this.blue;
      },
      set: function set(b) {
        this.blue = b;
      }
    }, {
      key: "a",
      get: function get() {
        return this.alpha;
      },
      set: function set(a) {
        this.alpha = a;
      }
    }]);

    return Color;
  }();

  exports.default = Color;
});
},{"./color-names":2,"./color-regex":3,"./color-utils":4}],6:[function(require,module,exports){
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./color"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./color"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.color);
    global.index = mod.exports;
  }
})(this, function (exports, _color) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _color2 = _interopRequireDefault(_color);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _color2.default;
});
},{"./color":5}]},{},[1]);

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/@superset-ui/plugin-chart-word-cloud/esm/chart/WordCloud.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@superset-ui/plugin-chart-word-cloud/esm/chart/WordCloud.js ***!
  \**********************************************************************************/
/*! exports provided: ROTATION, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROTATION", function() { return ROTATION; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3_cloud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-cloud */ "./node_modules/d3-cloud/index.js");
/* harmony import */ var d3_cloud__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3_cloud__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var encodable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! encodable */ "./node_modules/encodable/esm/encoders/createEncoderFactory.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@superset-ui/core/esm/utils/random.js");
/* harmony import */ var _superset_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @superset-ui/core */ "./node_modules/@emotion/react/dist/emotion-element-4fbd89c5.browser.esm.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");






const ROTATION = {
  flat: () => 0,
  // this calculates a random rotation between -90 and 90 degrees.
  random: () => Math.floor(Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["seedRandom"])() * 6 - 3) * 30,
  square: () => Math.floor(Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_4__["seedRandom"])() * 2) * 90
};
const defaultProps = {
  encoding: {},
  rotation: 'flat'
};
const SCALE_FACTOR_STEP = 0.5;
const MAX_SCALE_FACTOR = 3; // Percentage of top results that will always be displayed.
// Needed to avoid clutter when shrinking a chart with many records.

const TOP_RESULTS_PERCENTAGE = 0.1;

class WordCloud extends react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent {
  // Cannot name it isMounted because of conflict
  // with React's component function name
  constructor(props) {
    super(props);
    this.isComponentMounted = false;
    this.wordCloudEncoderFactory = Object(encodable__WEBPACK_IMPORTED_MODULE_3__["default"])({
      channelTypes: {
        color: 'Color',
        fontFamily: 'Category',
        fontSize: 'Numeric',
        fontWeight: 'Category',
        text: 'Text'
      },
      defaultEncoding: {
        color: {
          value: 'black'
        },
        fontFamily: {
          value: this.props.theme.typography.families.sansSerif
        },
        fontSize: {
          value: 20
        },
        fontWeight: {
          value: 'bold'
        },
        text: {
          value: ''
        }
      }
    });
    this.createEncoder = this.wordCloudEncoderFactory.createSelector();
    this.state = {
      words: [],
      scaleFactor: 1
    };
    this.setWords = this.setWords.bind(this);
  }

  componentDidMount() {
    this.isComponentMounted = true;
    this.update();
  }

  componentDidUpdate(prevProps) {
    const {
      data,
      encoding,
      width,
      height,
      rotation
    } = this.props;

    if (prevProps.data !== data || prevProps.encoding !== encoding || prevProps.width !== width || prevProps.height !== height || prevProps.rotation !== rotation) {
      this.update();
    }
  }

  componentWillUnmount() {
    this.isComponentMounted = false;
  }

  setWords(words) {
    if (this.isComponentMounted) {
      this.setState({
        words
      });
    }
  }

  update() {
    const {
      data,
      encoding
    } = this.props;
    const encoder = this.createEncoder(encoding);
    encoder.setDomainFromDataset(data);
    const sortedData = [...data].sort((a, b) => encoder.channels.fontSize.encodeDatum(b, 0) - encoder.channels.fontSize.encodeDatum(a, 0));
    const topResultsCount = Math.max(sortedData.length * TOP_RESULTS_PERCENTAGE, 10);
    const topResults = sortedData.slice(0, topResultsCount); // Ensure top results are always included in the final word cloud by scaling chart down if needed

    this.generateCloud(encoder, 1, words => topResults.every(d => words.find(({
      text
    }) => encoder.channels.text.getValueFromDatum(d) === text)));
  }

  generateCloud(encoder, scaleFactor, isValid) {
    const {
      data,
      width,
      height,
      rotation
    } = this.props;
    d3_cloud__WEBPACK_IMPORTED_MODULE_2___default()().size([width * scaleFactor, height * scaleFactor]) // clone the data because cloudLayout mutates input
    .words(data.map(d => ({ ...d
    }))).padding(5).rotate(ROTATION[rotation] || ROTATION.flat).text(d => encoder.channels.text.getValueFromDatum(d)).font(d => encoder.channels.fontFamily.encodeDatum(d, this.props.theme.typography.families.sansSerif)).fontWeight(d => encoder.channels.fontWeight.encodeDatum(d, 'normal')).fontSize(d => encoder.channels.fontSize.encodeDatum(d, 0)).on('end', words => {
      if (isValid(words) || scaleFactor > MAX_SCALE_FACTOR) {
        if (this.isComponentMounted) {
          this.setState({
            words,
            scaleFactor
          });
        }
      } else {
        this.generateCloud(encoder, scaleFactor + SCALE_FACTOR_STEP, isValid);
      }
    }).start();
  }

  render() {
    const {
      scaleFactor
    } = this.state;
    const {
      width,
      height,
      encoding
    } = this.props;
    const {
      words
    } = this.state;
    const encoder = this.createEncoder(encoding);
    encoder.channels.color.setDomainFromDataset(words);
    const viewBoxWidth = width * scaleFactor;
    const viewBoxHeight = height * scaleFactor;
    return Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("svg", {
      width: width,
      height: height,
      viewBox: `-${viewBoxWidth / 2} -${viewBoxHeight / 2} ${viewBoxWidth} ${viewBoxHeight}`
    }, Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("g", null, words.map(w => Object(_emotion_react__WEBPACK_IMPORTED_MODULE_6__["jsx"])("text", {
      key: w.text,
      fontSize: `${w.size}px`,
      fontWeight: w.weight,
      fontFamily: w.font,
      fill: encoder.channels.color.encodeDatum(w, ''),
      textAnchor: "middle",
      transform: `translate(${w.x}, ${w.y}) rotate(${w.rotate})`
    }, w.text))));
  }

}

WordCloud.propTypes = {
  rotation: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any,
  data: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array.isRequired,
  height: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired,
  width: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired
};
WordCloud.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (Object(_superset_ui_core__WEBPACK_IMPORTED_MODULE_5__["b"])(WordCloud));

/***/ }),

/***/ "./node_modules/d3-cloud/index.js":
/*!****************************************!*\
  !*** ./node_modules/d3-cloud/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Word cloud layout by Jason Davies, https://www.jasondavies.com/wordcloud/
// Algorithm due to Jonathan Feinberg, http://static.mrfeinberg.com/bv_ch03.pdf

var dispatch = __webpack_require__(/*! d3-dispatch */ "./node_modules/d3-dispatch/src/index.js").dispatch;

var cloudRadians = Math.PI / 180,
    cw = 1 << 11 >> 5,
    ch = 1 << 11;

module.exports = function() {
  var size = [256, 256],
      text = cloudText,
      font = cloudFont,
      fontSize = cloudFontSize,
      fontStyle = cloudFontNormal,
      fontWeight = cloudFontNormal,
      rotate = cloudRotate,
      padding = cloudPadding,
      spiral = archimedeanSpiral,
      words = [],
      timeInterval = Infinity,
      event = dispatch("word", "end"),
      timer = null,
      random = Math.random,
      cloud = {},
      canvas = cloudCanvas;

  cloud.canvas = function(_) {
    return arguments.length ? (canvas = functor(_), cloud) : canvas;
  };

  cloud.start = function() {
    var contextAndRatio = getContext(canvas()),
        board = zeroArray((size[0] >> 5) * size[1]),
        bounds = null,
        n = words.length,
        i = -1,
        tags = [],
        data = words.map(function(d, i) {
          d.text = text.call(this, d, i);
          d.font = font.call(this, d, i);
          d.style = fontStyle.call(this, d, i);
          d.weight = fontWeight.call(this, d, i);
          d.rotate = rotate.call(this, d, i);
          d.size = ~~fontSize.call(this, d, i);
          d.padding = padding.call(this, d, i);
          return d;
        }).sort(function(a, b) { return b.size - a.size; });

    if (timer) clearInterval(timer);
    timer = setInterval(step, 0);
    step();

    return cloud;

    function step() {
      var start = Date.now();
      while (Date.now() - start < timeInterval && ++i < n && timer) {
        var d = data[i];
        d.x = (size[0] * (random() + .5)) >> 1;
        d.y = (size[1] * (random() + .5)) >> 1;
        cloudSprite(contextAndRatio, d, data, i);
        if (d.hasText && place(board, d, bounds)) {
          tags.push(d);
          event.call("word", cloud, d);
          if (bounds) cloudBounds(bounds, d);
          else bounds = [{x: d.x + d.x0, y: d.y + d.y0}, {x: d.x + d.x1, y: d.y + d.y1}];
          // Temporary hack
          d.x -= size[0] >> 1;
          d.y -= size[1] >> 1;
        }
      }
      if (i >= n) {
        cloud.stop();
        event.call("end", cloud, tags, bounds);
      }
    }
  }

  cloud.stop = function() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    return cloud;
  };

  function getContext(canvas) {
    canvas.width = canvas.height = 1;
    var ratio = Math.sqrt(canvas.getContext("2d").getImageData(0, 0, 1, 1).data.length >> 2);
    canvas.width = (cw << 5) / ratio;
    canvas.height = ch / ratio;

    var context = canvas.getContext("2d");
    context.fillStyle = context.strokeStyle = "red";
    context.textAlign = "center";

    return {context: context, ratio: ratio};
  }

  function place(board, tag, bounds) {
    var perimeter = [{x: 0, y: 0}, {x: size[0], y: size[1]}],
        startX = tag.x,
        startY = tag.y,
        maxDelta = Math.sqrt(size[0] * size[0] + size[1] * size[1]),
        s = spiral(size),
        dt = random() < .5 ? 1 : -1,
        t = -dt,
        dxdy,
        dx,
        dy;

    while (dxdy = s(t += dt)) {
      dx = ~~dxdy[0];
      dy = ~~dxdy[1];

      if (Math.min(Math.abs(dx), Math.abs(dy)) >= maxDelta) break;

      tag.x = startX + dx;
      tag.y = startY + dy;

      if (tag.x + tag.x0 < 0 || tag.y + tag.y0 < 0 ||
          tag.x + tag.x1 > size[0] || tag.y + tag.y1 > size[1]) continue;
      // TODO only check for collisions within current bounds.
      if (!bounds || !cloudCollide(tag, board, size[0])) {
        if (!bounds || collideRects(tag, bounds)) {
          var sprite = tag.sprite,
              w = tag.width >> 5,
              sw = size[0] >> 5,
              lx = tag.x - (w << 4),
              sx = lx & 0x7f,
              msx = 32 - sx,
              h = tag.y1 - tag.y0,
              x = (tag.y + tag.y0) * sw + (lx >> 5),
              last;
          for (var j = 0; j < h; j++) {
            last = 0;
            for (var i = 0; i <= w; i++) {
              board[x + i] |= (last << msx) | (i < w ? (last = sprite[j * w + i]) >>> sx : 0);
            }
            x += sw;
          }
          delete tag.sprite;
          return true;
        }
      }
    }
    return false;
  }

  cloud.timeInterval = function(_) {
    return arguments.length ? (timeInterval = _ == null ? Infinity : _, cloud) : timeInterval;
  };

  cloud.words = function(_) {
    return arguments.length ? (words = _, cloud) : words;
  };

  cloud.size = function(_) {
    return arguments.length ? (size = [+_[0], +_[1]], cloud) : size;
  };

  cloud.font = function(_) {
    return arguments.length ? (font = functor(_), cloud) : font;
  };

  cloud.fontStyle = function(_) {
    return arguments.length ? (fontStyle = functor(_), cloud) : fontStyle;
  };

  cloud.fontWeight = function(_) {
    return arguments.length ? (fontWeight = functor(_), cloud) : fontWeight;
  };

  cloud.rotate = function(_) {
    return arguments.length ? (rotate = functor(_), cloud) : rotate;
  };

  cloud.text = function(_) {
    return arguments.length ? (text = functor(_), cloud) : text;
  };

  cloud.spiral = function(_) {
    return arguments.length ? (spiral = spirals[_] || _, cloud) : spiral;
  };

  cloud.fontSize = function(_) {
    return arguments.length ? (fontSize = functor(_), cloud) : fontSize;
  };

  cloud.padding = function(_) {
    return arguments.length ? (padding = functor(_), cloud) : padding;
  };

  cloud.random = function(_) {
    return arguments.length ? (random = _, cloud) : random;
  };

  cloud.on = function() {
    var value = event.on.apply(event, arguments);
    return value === event ? cloud : value;
  };

  return cloud;
};

function cloudText(d) {
  return d.text;
}

function cloudFont() {
  return "serif";
}

function cloudFontNormal() {
  return "normal";
}

function cloudFontSize(d) {
  return Math.sqrt(d.value);
}

function cloudRotate() {
  return (~~(Math.random() * 6) - 3) * 30;
}

function cloudPadding() {
  return 1;
}

// Fetches a monochrome sprite bitmap for the specified text.
// Load in batches for speed.
function cloudSprite(contextAndRatio, d, data, di) {
  if (d.sprite) return;
  var c = contextAndRatio.context,
      ratio = contextAndRatio.ratio;

  c.clearRect(0, 0, (cw << 5) / ratio, ch / ratio);
  var x = 0,
      y = 0,
      maxh = 0,
      n = data.length;
  --di;
  while (++di < n) {
    d = data[di];
    c.save();
    c.font = d.style + " " + d.weight + " " + ~~((d.size + 1) / ratio) + "px " + d.font;
    var w = c.measureText(d.text + "m").width * ratio,
        h = d.size << 1;
    if (d.rotate) {
      var sr = Math.sin(d.rotate * cloudRadians),
          cr = Math.cos(d.rotate * cloudRadians),
          wcr = w * cr,
          wsr = w * sr,
          hcr = h * cr,
          hsr = h * sr;
      w = (Math.max(Math.abs(wcr + hsr), Math.abs(wcr - hsr)) + 0x1f) >> 5 << 5;
      h = ~~Math.max(Math.abs(wsr + hcr), Math.abs(wsr - hcr));
    } else {
      w = (w + 0x1f) >> 5 << 5;
    }
    if (h > maxh) maxh = h;
    if (x + w >= (cw << 5)) {
      x = 0;
      y += maxh;
      maxh = 0;
    }
    if (y + h >= ch) break;
    c.translate((x + (w >> 1)) / ratio, (y + (h >> 1)) / ratio);
    if (d.rotate) c.rotate(d.rotate * cloudRadians);
    c.fillText(d.text, 0, 0);
    if (d.padding) c.lineWidth = 2 * d.padding, c.strokeText(d.text, 0, 0);
    c.restore();
    d.width = w;
    d.height = h;
    d.xoff = x;
    d.yoff = y;
    d.x1 = w >> 1;
    d.y1 = h >> 1;
    d.x0 = -d.x1;
    d.y0 = -d.y1;
    d.hasText = true;
    x += w;
  }
  var pixels = c.getImageData(0, 0, (cw << 5) / ratio, ch / ratio).data,
      sprite = [];
  while (--di >= 0) {
    d = data[di];
    if (!d.hasText) continue;
    var w = d.width,
        w32 = w >> 5,
        h = d.y1 - d.y0;
    // Zero the buffer
    for (var i = 0; i < h * w32; i++) sprite[i] = 0;
    x = d.xoff;
    if (x == null) return;
    y = d.yoff;
    var seen = 0,
        seenRow = -1;
    for (var j = 0; j < h; j++) {
      for (var i = 0; i < w; i++) {
        var k = w32 * j + (i >> 5),
            m = pixels[((y + j) * (cw << 5) + (x + i)) << 2] ? 1 << (31 - (i % 32)) : 0;
        sprite[k] |= m;
        seen |= m;
      }
      if (seen) seenRow = j;
      else {
        d.y0++;
        h--;
        j--;
        y++;
      }
    }
    d.y1 = d.y0 + seenRow;
    d.sprite = sprite.slice(0, (d.y1 - d.y0) * w32);
  }
}

// Use mask-based collision detection.
function cloudCollide(tag, board, sw) {
  sw >>= 5;
  var sprite = tag.sprite,
      w = tag.width >> 5,
      lx = tag.x - (w << 4),
      sx = lx & 0x7f,
      msx = 32 - sx,
      h = tag.y1 - tag.y0,
      x = (tag.y + tag.y0) * sw + (lx >> 5),
      last;
  for (var j = 0; j < h; j++) {
    last = 0;
    for (var i = 0; i <= w; i++) {
      if (((last << msx) | (i < w ? (last = sprite[j * w + i]) >>> sx : 0))
          & board[x + i]) return true;
    }
    x += sw;
  }
  return false;
}

function cloudBounds(bounds, d) {
  var b0 = bounds[0],
      b1 = bounds[1];
  if (d.x + d.x0 < b0.x) b0.x = d.x + d.x0;
  if (d.y + d.y0 < b0.y) b0.y = d.y + d.y0;
  if (d.x + d.x1 > b1.x) b1.x = d.x + d.x1;
  if (d.y + d.y1 > b1.y) b1.y = d.y + d.y1;
}

function collideRects(a, b) {
  return a.x + a.x1 > b[0].x && a.x + a.x0 < b[1].x && a.y + a.y1 > b[0].y && a.y + a.y0 < b[1].y;
}

function archimedeanSpiral(size) {
  var e = size[0] / size[1];
  return function(t) {
    return [e * (t *= .1) * Math.cos(t), t * Math.sin(t)];
  };
}

function rectangularSpiral(size) {
  var dy = 4,
      dx = dy * size[0] / size[1],
      x = 0,
      y = 0;
  return function(t) {
    var sign = t < 0 ? -1 : 1;
    // See triangular numbers: T_n = n * (n + 1) / 2.
    switch ((Math.sqrt(1 + 4 * sign * t) - sign) & 3) {
      case 0:  x += dx; break;
      case 1:  y += dy; break;
      case 2:  x -= dx; break;
      default: y -= dy; break;
    }
    return [x, y];
  };
}

// TODO reuse arrays?
function zeroArray(n) {
  var a = [],
      i = -1;
  while (++i < n) a[i] = 0;
  return a;
}

function cloudCanvas() {
  return document.createElement("canvas");
}

function functor(d) {
  return typeof d === "function" ? d : function() { return d; };
}

var spirals = {
  archimedean: archimedeanSpiral,
  rectangular: rectangularSpiral
};


/***/ }),

/***/ "./node_modules/d3-dispatch/src/dispatch.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-dispatch/src/dispatch.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var noop = {value: function() {}};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _) || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

/* harmony default export */ __webpack_exports__["default"] = (dispatch);


/***/ }),

/***/ "./node_modules/d3-dispatch/src/index.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-dispatch/src/index.js ***!
  \***********************************************/
/*! exports provided: dispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dispatch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dispatch.js */ "./node_modules/d3-dispatch/src/dispatch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return _dispatch_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./node_modules/encodable/esm/encoders/ChannelEncoder.js":
/*!***************************************************************!*\
  !*** ./node_modules/encodable/esm/encoders/ChannelEncoder.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChannelEncoder; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/encodable/node_modules/d3-array/src/extent.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./node_modules/encodable/esm/types/scale/ScaleType.js");
/* harmony import */ var _typeGuards_ChannelDef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../typeGuards/ChannelDef */ "./node_modules/encodable/esm/typeGuards/ChannelDef.js");
/* harmony import */ var _typeGuards_Channel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../typeGuards/Channel */ "./node_modules/encodable/esm/typeGuards/Channel.js");
/* harmony import */ var _ChannelEncoderAxis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ChannelEncoderAxis */ "./node_modules/encodable/esm/encoders/ChannelEncoderAxis.js");
/* harmony import */ var _parsers_createGetterFromChannelDef__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parsers/createGetterFromChannelDef */ "./node_modules/encodable/esm/parsers/createGetterFromChannelDef.js");
/* harmony import */ var _fillers_completeChannelDef__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fillers/completeChannelDef */ "./node_modules/encodable/esm/fillers/completeChannelDef.js");
/* harmony import */ var _parsers_scale_createScale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../parsers/scale/createScale */ "./node_modules/encodable/esm/parsers/scale/createScale.js");
/* harmony import */ var _utils_identity__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/identity */ "./node_modules/encodable/esm/utils/identity.js");
/* harmony import */ var _parsers_scale_applyDomain__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../parsers/scale/applyDomain */ "./node_modules/encodable/esm/parsers/scale/applyDomain.js");
/* harmony import */ var _parsers_scale_applyRange__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../parsers/scale/applyRange */ "./node_modules/encodable/esm/parsers/scale/applyRange.js");
/* harmony import */ var _parsers_scale_applyZero__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../parsers/scale/applyZero */ "./node_modules/encodable/esm/parsers/scale/applyZero.js");
/* harmony import */ var _parsers_scale_applyNice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../parsers/scale/applyNice */ "./node_modules/encodable/esm/parsers/scale/applyNice.js");
/* harmony import */ var _typeGuards_CompleteChannelDef__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../typeGuards/CompleteChannelDef */ "./node_modules/encodable/esm/typeGuards/CompleteChannelDef.js");
/* harmony import */ var _parsers_format_fallbackFormatter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../parsers/format/fallbackFormatter */ "./node_modules/encodable/esm/parsers/format/fallbackFormatter.js");
/* harmony import */ var _parsers_format_createFormatter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../parsers/format/createFormatter */ "./node_modules/encodable/esm/parsers/format/createFormatter.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















class ChannelEncoder {
  constructor({
    name,
    channelType,
    definition: originalDefinition
  }) {
    _defineProperty(this, "name", void 0);

    _defineProperty(this, "channelType", void 0);

    _defineProperty(this, "originalDefinition", void 0);

    _defineProperty(this, "definition", void 0);

    _defineProperty(this, "scale", void 0);

    _defineProperty(this, "axis", void 0);

    _defineProperty(this, "getValue", void 0);

    _defineProperty(this, "encodeFunc", void 0);

    _defineProperty(this, "formatValue", void 0);

    _defineProperty(this, "encodeValue", (value, otherwise) => {
      if (typeof otherwise !== 'undefined' && (value === null || typeof value === 'undefined')) {
        return otherwise;
      } // eslint-disable-next-line @typescript-eslint/no-explicit-any


      return this.encodeFunc(value);
    });

    _defineProperty(this, "encodeDatum", (datum, otherwise) => typeof otherwise === 'undefined' ? this.encodeValue(this.getValueFromDatum(datum)) : this.encodeValue(this.getValueFromDatum(datum), otherwise));

    _defineProperty(this, "formatDatum", datum => this.formatValue(this.getValueFromDatum(datum)));

    _defineProperty(this, "getValueFromDatum", (datum, otherwise) => {
      const value = this.getValue(datum);
      return otherwise !== undefined && (value === null || value === undefined) ? otherwise : value;
    });

    _defineProperty(this, "getDomainFromDataset", data => {
      if (Object(_typeGuards_ChannelDef__WEBPACK_IMPORTED_MODULE_2__["isValueDef"])(this.definition)) {
        const {
          value
        } = this.definition;
        return [value];
      }

      const {
        type
      } = this.definition;

      if (type === 'nominal' || type === 'ordinal') {
        return Array.from(new Set(data.map(d => this.getValueFromDatum(d))));
      }

      if (type === 'quantitative') {
        // Quantile scale needs all items
        // because it treats domain as a discrete set of sample values
        // for computing the quantiles
        if (this.definition.scale && this.definition.scale.type === 'quantile') {
          return data.map(d => this.getValueFromDatum(d));
        }

        const extent = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["default"])(data, d => this.getValueFromDatum(d));
        return typeof extent[0] === 'undefined' ? [0, 1] : extent;
      }

      if (type === 'temporal') {
        const extent = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["default"])(data, d => this.getValueFromDatum(d));
        return typeof extent[0] === 'undefined' ? [0, 1] : extent;
      }

      return [];
    });

    this.name = name;
    this.channelType = channelType;
    this.originalDefinition = originalDefinition;
    this.definition = Object(_fillers_completeChannelDef__WEBPACK_IMPORTED_MODULE_6__["default"])(this.channelType, originalDefinition);
    this.getValue = Object(_parsers_createGetterFromChannelDef__WEBPACK_IMPORTED_MODULE_5__["default"])(this.definition);
    this.formatValue = Object(_typeGuards_ChannelDef__WEBPACK_IMPORTED_MODULE_2__["isFieldDef"])(this.definition) ? Object(_parsers_format_createFormatter__WEBPACK_IMPORTED_MODULE_15__["default"])(this.definition) : _parsers_format_fallbackFormatter__WEBPACK_IMPORTED_MODULE_14__["default"];

    if (this.definition.scale) {
      const scale = Object(_parsers_scale_createScale__WEBPACK_IMPORTED_MODULE_7__["default"])(this.definition.scale); // eslint-disable-next-line @typescript-eslint/no-explicit-any

      this.encodeFunc = value => scale(value);

      this.scale = scale;
    } else {
      const {
        definition
      } = this;
      this.encodeFunc = Object(_typeGuards_CompleteChannelDef__WEBPACK_IMPORTED_MODULE_13__["isCompleteValueDef"])(definition) ? () => definition.value : _utils_identity__WEBPACK_IMPORTED_MODULE_8__["default"];
    }

    if (this.definition.axis) {
      this.axis = new _ChannelEncoderAxis__WEBPACK_IMPORTED_MODULE_4__["default"](this);
    }
  }

  getDomain() {
    if (this.scale && 'domain' in this.scale) {
      return this.scale.domain();
    }

    return [];
  }

  setDomain(domain) {
    if (this.definition.scale !== false && this.scale && !this.hasCategoricalColorScale() && 'domain' in this.scale) {
      const config = this.definition.scale;
      Object(_parsers_scale_applyDomain__WEBPACK_IMPORTED_MODULE_9__["default"])(config, this.scale, domain);
      Object(_parsers_scale_applyRange__WEBPACK_IMPORTED_MODULE_10__["default"])(config, this.scale);
      Object(_parsers_scale_applyZero__WEBPACK_IMPORTED_MODULE_11__["default"])(config, this.scale);
      Object(_parsers_scale_applyNice__WEBPACK_IMPORTED_MODULE_12__["default"])(config, this.scale);
    }

    return this;
  }

  setDomainFromDataset(data) {
    return this.scale && 'domain' in this.scale ? this.setDomain(this.getDomainFromDataset(data)) : this;
  }

  getTitle() {
    return this.definition.title;
  }

  isGroupBy() {
    if (Object(_typeGuards_ChannelDef__WEBPACK_IMPORTED_MODULE_2__["isTypedFieldDef"])(this.definition)) {
      const {
        type
      } = this.definition;
      return this.channelType === 'Category' || this.channelType === 'Text' || this.channelType === 'Color' && (type === 'nominal' || type === 'ordinal') || Object(_typeGuards_Channel__WEBPACK_IMPORTED_MODULE_3__["isXOrY"])(this.channelType) && (type === 'nominal' || type === 'ordinal');
    }

    return false;
  }

  isX() {
    return Object(_typeGuards_Channel__WEBPACK_IMPORTED_MODULE_3__["isX"])(this.channelType);
  }

  isXOrY() {
    return Object(_typeGuards_Channel__WEBPACK_IMPORTED_MODULE_3__["isXOrY"])(this.channelType);
  }

  isY() {
    return Object(_typeGuards_Channel__WEBPACK_IMPORTED_MODULE_3__["isY"])(this.channelType);
  }

  hasCategoricalColorScale() {
    const config = this.definition.scale; // Scale type is ordinal with not given range
    // (may have optional scheme)
    // will become a categorical scale
    // of named color scheme.
    // A color scale from named color scheme may be shared among multiple components
    // in the same namespace by default, so changing its domain affect all components.
    // (Sounds like a bad idea.)
    // This function is currently only being used to check
    // whether to apply domain from dataset or not.
    // An ordinal scale with user-specified color scheme as range array
    // will return false from this function and be excluded from it.

    return this.scale && config && config.type === _types__WEBPACK_IMPORTED_MODULE_1__["ScaleType"].ORDINAL && typeof config.range === 'undefined';
  }

  hasLegend() {
    return this.definition.legend !== false;
  }

  hasValueDefinition() {
    return Object(_typeGuards_CompleteChannelDef__WEBPACK_IMPORTED_MODULE_13__["isCompleteValueDef"])(this.definition);
  }

  hasFieldDefinition() {
    return Object(_typeGuards_CompleteChannelDef__WEBPACK_IMPORTED_MODULE_13__["isCompleteFieldDef"])(this.definition);
  }

}

/***/ }),

/***/ "./node_modules/encodable/esm/encoders/ChannelEncoderAxis.js":
/*!*******************************************************************!*\
  !*** ./node_modules/encodable/esm/encoders/ChannelEncoderAxis.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChannelEncoderAxis; });
/* harmony import */ var _parsers_parseDateTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parsers/parseDateTime */ "./node_modules/encodable/esm/parsers/parseDateTime.js");
/* harmony import */ var _utils_inferElementTypeFromUnionOfArrayTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/inferElementTypeFromUnionOfArrayTypes */ "./node_modules/encodable/esm/utils/inferElementTypeFromUnionOfArrayTypes.js");
/* harmony import */ var _typeGuards_DateTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../typeGuards/DateTime */ "./node_modules/encodable/esm/typeGuards/DateTime.js");
/* harmony import */ var _parsers_format_createFormatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parsers/format/createFormatter */ "./node_modules/encodable/esm/parsers/format/createFormatter.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class ChannelEncoderAxis {
  constructor(channelEncoder) {
    _defineProperty(this, "channelEncoder", void 0);

    _defineProperty(this, "config", void 0);

    _defineProperty(this, "formatValue", void 0);

    this.channelEncoder = channelEncoder;
    this.config = channelEncoder.definition.axis;
    this.formatValue = Object(_parsers_format_createFormatter__WEBPACK_IMPORTED_MODULE_3__["default"])(this.config);
  }

  getTitle() {
    return this.config.title;
  }

  hasTitle() {
    const {
      title
    } = this.config;
    return title !== null && typeof title !== 'undefined' && title !== '';
  }

  getTickLabels() {
    const {
      tickCount,
      values
    } = this.config;

    if (typeof values !== 'undefined') {
      return Object(_utils_inferElementTypeFromUnionOfArrayTypes__WEBPACK_IMPORTED_MODULE_1__["default"])(values).map(v => this.formatValue(Object(_typeGuards_DateTime__WEBPACK_IMPORTED_MODULE_2__["isDateTime"])(v) ? Object(_parsers_parseDateTime__WEBPACK_IMPORTED_MODULE_0__["default"])(v) : v));
    }

    const {
      scale
    } = this.channelEncoder;

    if (scale && 'domain' in scale) {
      const ticks = 'ticks' in scale ? scale.ticks(tickCount) : scale.domain();
      return ticks.map(this.formatValue);
    }

    return [];
  }

}

/***/ }),

/***/ "./node_modules/encodable/esm/encoders/Encoder.js":
/*!********************************************************!*\
  !*** ./node_modules/encodable/esm/encoders/Encoder.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Encoder; });
/* harmony import */ var _typeGuards_ChannelDef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../typeGuards/ChannelDef */ "./node_modules/encodable/esm/typeGuards/ChannelDef.js");
/* harmony import */ var _typeGuards_Base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../typeGuards/Base */ "./node_modules/encodable/esm/typeGuards/Base.js");
/* harmony import */ var _ChannelEncoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChannelEncoder */ "./node_modules/encodable/esm/encoders/ChannelEncoder.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Encoder {
  constructor({
    channelTypes,
    encoding
  }) {
    _defineProperty(this, "encoding", void 0);

    _defineProperty(this, "channelTypes", void 0);

    _defineProperty(this, "channels", void 0);

    _defineProperty(this, "legends", void 0);

    this.channelTypes = channelTypes;
    this.encoding = encoding;
    const channelNames = this.getChannelNames(); // Create channel encoders

    const channels = {};
    channelNames.forEach(name => {
      const channelEncoding = encoding[name];

      if (Array.isArray(channelEncoding)) {
        const definitions = channelEncoding;
        channels[name] = definitions.map((definition, i) => new _ChannelEncoder__WEBPACK_IMPORTED_MODULE_2__["default"]({
          channelType: channelTypes[name],
          definition,
          name: name + "[" + i + "]"
        }));
      } else {
        const definition = channelEncoding;
        channels[name] = new _ChannelEncoder__WEBPACK_IMPORTED_MODULE_2__["default"]({
          channelType: channelTypes[name],
          definition,
          name: name
        });
      }
    });
    this.channels = channels; // Group the channels that use the same field together
    // so they can share the same legend.

    this.legends = {};
    channelNames.map(name => this.channels[name]).forEach(c => {
      if (Object(_typeGuards_Base__WEBPACK_IMPORTED_MODULE_1__["isNotArray"])(c) && c.hasLegend() && Object(_typeGuards_ChannelDef__WEBPACK_IMPORTED_MODULE_0__["isTypedFieldDef"])(c.definition)) {
        const {
          field
        } = c.definition;
        const channelEncoder = c;

        if (this.legends[field]) {
          this.legends[field].push(channelEncoder);
        } else {
          this.legends[field] = [channelEncoder];
        }
      }
    });
  }

  getChannelNames() {
    return Object.keys(this.channelTypes);
  }

  getChannelEncoders() {
    return this.getChannelNames().flatMap(name => this.channels[name]);
  }

  getGroupBys() {
    const fields = this.getChannelEncoders().filter(c => c.isGroupBy()).map(c => c.definition.field);
    return Array.from(new Set(fields));
  }

  createLegendItemsFactory(field) {
    const channelEncoders = this.getChannelEncoders().filter(e => Object(_typeGuards_Base__WEBPACK_IMPORTED_MODULE_1__["isNotArray"])(e) && Object(_typeGuards_ChannelDef__WEBPACK_IMPORTED_MODULE_0__["isValueDef"])(e.definition)).flat().concat(this.legends[field]);
    return domain => domain.map(input => ({
      input,
      output: channelEncoders.reduce((prev, curr) => {
        const map = prev;
        map[curr.name] = curr.encodeValue(input);
        return map;
      }, {})
    }));
  }

  getLegendInformation(data = []) {
    return Object.keys(this.legends) // for each field that was encoded
    .map(field => {
      // get all the channels that use this field
      const channelEncoders = this.legends[field];
      const firstEncoder = channelEncoders[0];
      const definition = firstEncoder.definition;
      const createLegendItems = this.createLegendItemsFactory(field);

      if (definition.type === 'nominal') {
        return {
          channelEncoders,
          createLegendItems,
          field,
          items: createLegendItems(firstEncoder.getDomainFromDataset(data)),
          type: definition.type
        };
      }

      return {
        channelEncoders,
        createLegendItems,
        field,
        type: definition.type
      };
    });
  }

  setDomainFromDataset(data) {
    this.getChannelEncoders().forEach(channelEncoder => {
      channelEncoder.setDomainFromDataset(data);
    });
    return this;
  }

  hasLegend() {
    return Object.keys(this.legends).length > 0;
  }

}

/***/ }),

/***/ "./node_modules/encodable/esm/encoders/createEncoderFactory.js":
/*!*********************************************************************!*\
  !*** ./node_modules/encodable/esm/encoders/createEncoderFactory.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createEncoderFactory; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/es/index.js");
/* harmony import */ var _Encoder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Encoder */ "./node_modules/encodable/esm/encoders/Encoder.js");
/* harmony import */ var _utils_mergeEncoding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/mergeEncoding */ "./node_modules/encodable/esm/utils/mergeEncoding.js");



function createEncoderFactory(params) {
  const {
    channelTypes
  } = params;
  const completeEncoding = 'defaultEncoding' in params ? encoding => Object(_utils_mergeEncoding__WEBPACK_IMPORTED_MODULE_2__["default"])(params.defaultEncoding, encoding) : params.completeEncoding;

  const create = (encoding = {}) => new _Encoder__WEBPACK_IMPORTED_MODULE_1__["default"]({
    channelTypes,
    encoding: completeEncoding(encoding)
  });

  return {
    channelTypes,
    create,
    createSelector: () => Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(encoding => encoding, create),
    DEFAULT_ENCODING: completeEncoding({})
  };
}

/***/ }),

/***/ "./node_modules/encodable/esm/fillers/completeAxisConfig.js":
/*!******************************************************************!*\
  !*** ./node_modules/encodable/esm/fillers/completeAxisConfig.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return completeAxisConfig; });
/* harmony import */ var _utils_isEnabled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/isEnabled */ "./node_modules/encodable/esm/utils/isEnabled.js");
/* harmony import */ var _typeGuards_Channel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../typeGuards/Channel */ "./node_modules/encodable/esm/typeGuards/Channel.js");
/* harmony import */ var _typeGuards_ChannelDef__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../typeGuards/ChannelDef */ "./node_modules/encodable/esm/typeGuards/ChannelDef.js");
/* harmony import */ var _expandLabelOverlapStrategy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expandLabelOverlapStrategy */ "./node_modules/encodable/esm/fillers/expandLabelOverlapStrategy.js");
/* harmony import */ var _parsers_scale_scaleCategories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parsers/scale/scaleCategories */ "./node_modules/encodable/esm/parsers/scale/scaleCategories.js");






function isChannelDefWithAxisSupport(channelType, channelDef) {
  return Object(_typeGuards_ChannelDef__WEBPACK_IMPORTED_MODULE_2__["isTypedFieldDef"])(channelDef) && Object(_typeGuards_Channel__WEBPACK_IMPORTED_MODULE_1__["isXOrY"])(channelType);
}

function completeAxisConfig(channelType, channelDef) {
  if (isChannelDefWithAxisSupport(channelType, channelDef) && Object(_utils_isEnabled__WEBPACK_IMPORTED_MODULE_0__["default"])(channelDef.axis)) {
    const axis = channelDef.axis === true || typeof channelDef.axis === 'undefined' ? {} : channelDef.axis;
    const isXChannel = Object(_typeGuards_Channel__WEBPACK_IMPORTED_MODULE_1__["isX"])(channelType);
    const {
      format = channelDef.format,
      formatType = channelDef.formatType,
      formatInLocalTime = channelDef.formatInLocalTime,
      labelAngle = 0,
      labelFlush,
      labelOverlap,
      labelPadding = 4,
      orient = isXChannel ? 'bottom' : 'left',
      tickCount = 5,
      ticks = true,
      title = channelDef.title,
      titlePadding = 4
    } = axis;
    const output = { ...axis,
      format,
      formatType,
      labelAngle,
      labelFlush: typeof labelFlush === 'undefined' ? channelDef.scale && typeof channelDef.scale.type !== 'undefined' && _parsers_scale_scaleCategories__WEBPACK_IMPORTED_MODULE_4__["continuousToContinuousScaleTypesSet"].has(channelDef.scale.type) : labelFlush,
      labelOverlap: Object(_expandLabelOverlapStrategy__WEBPACK_IMPORTED_MODULE_3__["default"])(channelType, labelOverlap),
      labelPadding,
      orient,
      tickCount,
      ticks,
      title,
      titlePadding
    };

    if (typeof formatInLocalTime !== 'undefined') {
      output.formatInLocalTime = formatInLocalTime;
    }

    return output;
  }

  return false;
}

/***/ }),

/***/ "./node_modules/encodable/esm/fillers/completeChannelDef.js":
/*!******************************************************************!*\
  !*** ./node_modules/encodable/esm/fillers/completeChannelDef.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return completeChannelDef; });
/* harmony import */ var _typeGuards_ChannelDef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../typeGuards/ChannelDef */ "./node_modules/encodable/esm/typeGuards/ChannelDef.js");
/* harmony import */ var _completeAxisConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./completeAxisConfig */ "./node_modules/encodable/esm/fillers/completeAxisConfig.js");
/* harmony import */ var _completeFormatConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./completeFormatConfig */ "./node_modules/encodable/esm/fillers/completeFormatConfig.js");
/* harmony import */ var _completeLegendConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./completeLegendConfig */ "./node_modules/encodable/esm/fillers/completeLegendConfig.js");
/* harmony import */ var _completeScaleConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./completeScaleConfig */ "./node_modules/encodable/esm/fillers/completeScaleConfig.js");
/* harmony import */ var _inferFieldType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inferFieldType */ "./node_modules/encodable/esm/fillers/inferFieldType.js");






function completeChannelDef(channelType, channelDef) {
  var _channelDef$title;

  if (Object(_typeGuards_ChannelDef__WEBPACK_IMPORTED_MODULE_0__["isValueDef"])(channelDef)) {
    return { ...channelDef,
      axis: false,
      legend: false,
      scale: false,
      title: ''
    };
  } // Fill top-level properties


  const copy = { ...channelDef,
    title: Object(_typeGuards_ChannelDef__WEBPACK_IMPORTED_MODULE_0__["isFieldDef"])(channelDef) ? (_channelDef$title = channelDef.title) != null ? _channelDef$title : channelDef.field : '',
    type: Object(_typeGuards_ChannelDef__WEBPACK_IMPORTED_MODULE_0__["isTypedFieldDef"])(channelDef) ? channelDef.type : Object(_inferFieldType__WEBPACK_IMPORTED_MODULE_5__["default"])(channelType, channelDef.field)
  }; // Scale needs the top-level properties to be filled.

  const scale = Object(_completeScaleConfig__WEBPACK_IMPORTED_MODULE_4__["default"])(channelType, copy); // Format needs scale.

  const format = Object(_completeFormatConfig__WEBPACK_IMPORTED_MODULE_2__["default"])({ ...channelDef,
    scaleType: scale ? scale.type : undefined
  });
  const copy2 = { ...copy,
    ...format,
    scale
  }; // These need scale and format

  const axis = Object(_completeAxisConfig__WEBPACK_IMPORTED_MODULE_1__["default"])(channelType, copy2);
  const legend = Object(_completeLegendConfig__WEBPACK_IMPORTED_MODULE_3__["default"])(channelType, copy2);
  return { ...copy2,
    axis,
    legend
  };
}

/***/ }),

/***/ "./node_modules/encodable/esm/fillers/completeFormatConfig.js":
/*!********************************************************************!*\
  !*** ./node_modules/encodable/esm/fillers/completeFormatConfig.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return completeFormatConfig; });
function completeFormatConfig(config) {
  const {
    formatType,
    formatInLocalTime,
    format,
    type,
    scaleType
  } = config;
  let resolvedFormatType;

  if (typeof formatType !== 'undefined') {
    resolvedFormatType = formatType;
  } else if (type === 'quantitative') {
    resolvedFormatType = 'number';
  } else if (type === 'temporal' || scaleType === 'time' || scaleType === 'utc') {
    resolvedFormatType = 'time';
  } else if (typeof format !== 'undefined' && format.length > 0) {
    resolvedFormatType = 'number';
  }

  if (resolvedFormatType === 'time') {
    return {
      formatType: 'time',
      formatInLocalTime: formatInLocalTime || typeof formatInLocalTime === 'undefined' && scaleType === 'time',
      format
    };
  }

  return {
    formatType: resolvedFormatType,
    format
  };
}

/***/ }),

/***/ "./node_modules/encodable/esm/fillers/completeLegendConfig.js":
/*!********************************************************************!*\
  !*** ./node_modules/encodable/esm/fillers/completeLegendConfig.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return completeLegendConfig; });
/* harmony import */ var _typeGuards_Channel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../typeGuards/Channel */ "./node_modules/encodable/esm/typeGuards/Channel.js");

function completeLegendConfig(channelType, channelDef) {
  if ('legend' in channelDef && channelDef.legend !== undefined) {
    return channelDef.legend;
  }

  return Object(_typeGuards_Channel__WEBPACK_IMPORTED_MODULE_0__["isXOrY"])(channelType) || channelType === 'Text' ? false : {};
}

/***/ }),

/***/ "./node_modules/encodable/esm/fillers/completeScaleConfig.js":
/*!*******************************************************************!*\
  !*** ./node_modules/encodable/esm/fillers/completeScaleConfig.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return completeScaleConfig; });
/* harmony import */ var _inferScaleType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inferScaleType */ "./node_modules/encodable/esm/fillers/inferScaleType.js");
/* harmony import */ var _typeGuards_ChannelDef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../typeGuards/ChannelDef */ "./node_modules/encodable/esm/typeGuards/ChannelDef.js");
/* harmony import */ var _typeGuards_ScaleConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../typeGuards/ScaleConfig */ "./node_modules/encodable/esm/typeGuards/ScaleConfig.js");
/* harmony import */ var _utils_isEnabled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/isEnabled */ "./node_modules/encodable/esm/utils/isEnabled.js");
/* harmony import */ var _parsers_scale_scaleCategories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parsers/scale/scaleCategories */ "./node_modules/encodable/esm/parsers/scale/scaleCategories.js");





function completeScaleConfig(channelType, channelDef) {
  if (Object(_typeGuards_ChannelDef__WEBPACK_IMPORTED_MODULE_1__["isTypedFieldDef"])(channelDef) && Object(_utils_isEnabled__WEBPACK_IMPORTED_MODULE_3__["default"])(channelDef.scale)) {
    const {
      scale = {},
      type,
      bin
    } = channelDef;
    const {
      type: scaleType = Object(_inferScaleType__WEBPACK_IMPORTED_MODULE_0__["default"])(channelType, type, bin)
    } = scale;

    if (typeof scaleType === 'undefined') {
      return false;
    } // eslint-disable-next-line @typescript-eslint/consistent-type-assertions


    const filledScale = { ...scale,
      type: scaleType
    };

    if (Object(_typeGuards_ScaleConfig__WEBPACK_IMPORTED_MODULE_2__["isContinuousScaleConfig"])(filledScale)) {
      if (typeof filledScale.nice === 'undefined') {
        filledScale.nice = !_parsers_scale_scaleCategories__WEBPACK_IMPORTED_MODULE_4__["timeScaleTypesSet"].has(scaleType);
      }

      if (typeof filledScale.clamp === 'undefined') {
        filledScale.clamp = true;
      }
    }

    if (Object(_typeGuards_ScaleConfig__WEBPACK_IMPORTED_MODULE_2__["isScaleConfigWithZero"])(filledScale) && typeof filledScale.zero === 'undefined') {
      filledScale.zero = true;
    }

    return filledScale;
  }

  return false;
}

/***/ }),

/***/ "./node_modules/encodable/esm/fillers/expandLabelOverlapStrategy.js":
/*!**************************************************************************!*\
  !*** ./node_modules/encodable/esm/fillers/expandLabelOverlapStrategy.js ***!
  \**************************************************************************/
/*! exports provided: STRATEGY_FLAT, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STRATEGY_FLAT", function() { return STRATEGY_FLAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return expandLabelOverlapStrategy; });
/* harmony import */ var _typeGuards_Channel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../typeGuards/Channel */ "./node_modules/encodable/esm/typeGuards/Channel.js");

const STRATEGY_FLAT = {
  strategy: 'flat'
};
const STRATEGY_ROTATE = {
  labelAngle: 40,
  strategy: 'rotate'
};
function expandLabelOverlapStrategy(channelType, labelOverlap = 'auto') {
  let output;

  switch (labelOverlap) {
    case 'flat':
      output = STRATEGY_FLAT;
      break;

    case 'rotate':
      output = STRATEGY_ROTATE;
      break;

    case 'auto':
      output = Object(_typeGuards_Channel__WEBPACK_IMPORTED_MODULE_0__["isX"])(channelType) ? STRATEGY_ROTATE : STRATEGY_FLAT;
      break;

    default:
      output = labelOverlap;
      break;
  }

  return { ...output
  };
}

/***/ }),

/***/ "./node_modules/encodable/esm/fillers/inferFieldType.js":
/*!**************************************************************!*\
  !*** ./node_modules/encodable/esm/fillers/inferFieldType.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return inferFieldType; });
/* harmony import */ var _typeGuards_Channel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../typeGuards/Channel */ "./node_modules/encodable/esm/typeGuards/Channel.js");

const temporalFieldNames = new Set(['time', 'date', 'datetime', 'timestamp']);
function inferFieldType(channelType, field = '') {
  if (Object(_typeGuards_Channel__WEBPACK_IMPORTED_MODULE_0__["isXOrY"])(channelType) || channelType === 'Numeric') {
    return temporalFieldNames.has(field.toLowerCase()) ? 'temporal' : 'quantitative';
  }

  return 'nominal';
}

/***/ }),

/***/ "./node_modules/encodable/esm/fillers/inferScaleType.js":
/*!**************************************************************!*\
  !*** ./node_modules/encodable/esm/fillers/inferScaleType.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return inferScaleType; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./node_modules/encodable/esm/types/scale/ScaleType.js");

/**
 * Sometimes scale type is not specified but can be inferred
 * from other fields.
 * See https://vega.github.io/vega-lite/docs/scale.html
 * @param channelType type of the channel
 * @param fieldType type of the field
 * @param bin is value binned
 */

function inferScaleType(channelType, fieldType, bin = false) {
  if (fieldType === 'nominal' || fieldType === 'ordinal') {
    switch (channelType) {
      // For positional (x and y) ordinal and ordinal fields,
      // "point" is the default scale type for all marks
      // except bar and rect marks, which use "band" scales.
      // https://vega.github.io/vega-lite/docs/scale.html
      case 'XBand':
      case 'YBand':
        return _types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].BAND;

      case 'X':
      case 'Y':
      case 'Numeric':
        return _types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].POINT;

      case 'Color':
      case 'Category':
        return _types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].ORDINAL;

      default:
    }
  } else if (fieldType === 'quantitative') {
    switch (channelType) {
      case 'XBand':
      case 'YBand':
      case 'X':
      case 'Y':
      case 'Numeric':
        return _types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].LINEAR;

      case 'Color':
        return bin ? _types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].BIN_ORDINAL : _types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].LINEAR;

      default:
    }
  } else if (fieldType === 'temporal') {
    switch (channelType) {
      case 'XBand':
      case 'YBand':
      case 'X':
      case 'Y':
      case 'Numeric':
        return _types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].UTC;

      case 'Color':
        return _types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].LINEAR;

      default:
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/encodable/esm/parsers/createGetterFromChannelDef.js":
/*!**************************************************************************!*\
  !*** ./node_modules/encodable/esm/parsers/createGetterFromChannelDef.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createGetterFromChannelDef; });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.get */ "./node_modules/lodash.get/index.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _typeGuards_ChannelDef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../typeGuards/ChannelDef */ "./node_modules/encodable/esm/typeGuards/ChannelDef.js");


function createGetterFromChannelDef(definition) {
  if (Object(_typeGuards_ChannelDef__WEBPACK_IMPORTED_MODULE_1__["isValueDef"])(definition)) {
    return () => definition.value;
  }

  if (typeof definition.field !== 'undefined') {
    return x => lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(x, definition.field);
  }

  return () => undefined;
}

/***/ }),

/***/ "./node_modules/encodable/esm/parsers/dateTimeToTimestamp.js":
/*!*******************************************************************!*\
  !*** ./node_modules/encodable/esm/parsers/dateTimeToTimestamp.js ***!
  \*******************************************************************/
/*! exports provided: normalizeQuarter, normalizeMonth, normalizeDay, dateTimeParts, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeQuarter", function() { return normalizeQuarter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeMonth", function() { return normalizeMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeDay", function() { return normalizeDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateTimeParts", function() { return dateTimeParts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return dateTimeToTimestamp; });
/* harmony import */ var _utils_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/keys */ "./node_modules/encodable/esm/utils/keys.js");
// Modified from vega-lite version
// and remove unnecessary dependency

/* eslint-disable no-param-reassign */

/* eslint-disable no-negated-condition */

/**
 * Internal Object for defining datetime expressions.
 * This is an expression version of DateTime.
 * If both month and quarter are provided, month has higher precedence.
 * `day` cannot be combined with other date.
 */

function invalidTimeUnit(unitName, value) {
  return "Invalid " + unitName + ": " + String(value) + ".";
}
/*
 * A designated year that starts on Sunday.
 */


const SUNDAY_YEAR = 2006;
const MONTHS = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
const SHORT_MONTHS = MONTHS.map(m => m.slice(0, 3));
const DAYS = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const SHORT_DAYS = DAYS.map(d => d.slice(0, 3));

function isNumber(x) {
  return typeof x === 'number';
}
/**
 * Returns whether the passed in value is a valid number.
 */


function isNumeric(value) {
  if (isNumber(value)) {
    return true;
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any


  return !isNaN(value) && !isNaN(parseFloat(value));
}

function normalizeQuarter(q) {
  if (isNumeric(q)) {
    q = Number(q);
  }

  if (isNumber(q)) {
    if (q > 4) {
      // eslint-disable-next-line no-console
      console.warn(invalidTimeUnit('quarter', q));
    } // We accept 1-based quarter, so need to readjust to 0-based quarter


    return q - 1;
  } // Invalid quarter


  throw new Error(invalidTimeUnit('quarter', q));
}
function normalizeMonth(m) {
  if (isNumeric(m)) {
    m = Number(m);
  }

  if (isNumber(m)) {
    // We accept 1-based month, so need to readjust to 0-based month
    return m - 1;
  }

  const lowerM = m.toLowerCase();
  const monthIndex = MONTHS.indexOf(lowerM);

  if (monthIndex !== -1) {
    return monthIndex; // 0 for january, ...
  }

  const shortM = lowerM.slice(0, 3);
  const shortMonthIndex = SHORT_MONTHS.indexOf(shortM);

  if (shortMonthIndex !== -1) {
    return shortMonthIndex;
  } // Invalid month


  throw new Error(invalidTimeUnit('month', m));
}
function normalizeDay(d) {
  if (isNumeric(d)) {
    d = Number(d);
  }

  if (isNumber(d)) {
    // mod so that this can be both 0-based where 0 = sunday
    // and 1-based where 7=sunday
    return d % 7;
  }

  const lowerD = d.toLowerCase();
  const dayIndex = DAYS.indexOf(lowerD);

  if (dayIndex !== -1) {
    return dayIndex; // 0 for january, ...
  }

  const shortD = lowerD.slice(0, 3);
  const shortDayIndex = SHORT_DAYS.indexOf(shortD);

  if (shortDayIndex !== -1) {
    return shortDayIndex;
  } // Invalid day


  throw new Error(invalidTimeUnit('day', d));
}
/**
 * @param d the date.
 * @param normalize whether to normalize quarter, month, day. This should probably be true if d is a DateTime.
 * @returns array of date time parts [year, month, day, hours, minutes, seconds, milliseconds]
 */

function dateTimeParts(d, normalize) {
  const parts = [];

  if (normalize && d.day !== undefined) {
    if (Object(_utils_keys__WEBPACK_IMPORTED_MODULE_0__["default"])(d).length > 1) {
      d = { ...d
      };
      delete d.day;
    }
  }

  if (d.year !== undefined) {
    parts.push(d.year);
  } else if (d.day !== undefined) {
    // Set year to 2006 for working with day since January 1 2006 is a Sunday
    parts.push(SUNDAY_YEAR);
  } else {
    parts.push(0);
  }

  if (d.month !== undefined) {
    const month = normalize ? normalizeMonth(d.month) : d.month;
    parts.push(month);
  } else if (d.quarter !== undefined) {
    const quarter = normalize ? normalizeQuarter(d.quarter) : d.quarter;
    parts.push(isNumber(quarter) ? quarter * 3 : quarter + "*3");
  } else {
    parts.push(0); // months start at zero in JS
  }

  if (d.date !== undefined) {
    parts.push(d.date);
  } else if (d.day !== undefined) {
    // HACK: Day only works as a standalone unit
    // This is only correct because we always set year to 2006 for day
    const day = normalize ? normalizeDay(d.day) : d.day;
    parts.push(isNumber(day) ? day + 1 : day + "+1");
  } else {
    parts.push(1); // Date starts at 1 in JS
  }

  ['hours', 'minutes', 'seconds', 'milliseconds'].forEach(timeUnit => {
    const unit = d[timeUnit];
    parts.push(typeof unit === 'undefined' ? 0 : unit);
  });
  return parts;
}
/**
 * @param d the date time.
 * @returns the timestamp.
 */

function dateTimeToTimestamp(d) {
  const parts = dateTimeParts(d, true);

  if (d.utc) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return Number(new Date(Date.UTC(...parts)));
  } // eslint-disable-next-line @typescript-eslint/no-explicit-any


  return Number(new Date(...parts));
}

/***/ }),

/***/ "./node_modules/encodable/esm/parsers/domain/parseContinuousDomain.js":
/*!****************************************************************************!*\
  !*** ./node_modules/encodable/esm/parsers/domain/parseContinuousDomain.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseContinuousDomain; });
/* harmony import */ var _scale_scaleCategories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scale/scaleCategories */ "./node_modules/encodable/esm/parsers/scale/scaleCategories.js");

/**
 * Convert each element in the array into
 * - Date (for time scales)
 * - number (for other continuous scales)
 * @param domain
 * @param scaleType
 */

function parseContinuousDomain(domain, scaleType) {
  if (_scale_scaleCategories__WEBPACK_IMPORTED_MODULE_0__["timeScaleTypesSet"].has(scaleType)) {
    return domain.filter(d => typeof d !== 'boolean').map(d => typeof d === 'string' || typeof d === 'number' ? new Date(d) : d);
  }

  return domain.map(d => typeof d === 'string' || typeof d === 'boolean' ? Number(d) : d);
}

/***/ }),

/***/ "./node_modules/encodable/esm/parsers/domain/parseDiscreteDomain.js":
/*!**************************************************************************!*\
  !*** ./node_modules/encodable/esm/parsers/domain/parseDiscreteDomain.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseDiscreteDomain; });
/**
 * Discrete domains are converted into string[]
 * when using D3 scales
 * @param domain
 */
function parseDiscreteDomain(domain) {
  return domain.map(d => "" + d);
}

/***/ }),

/***/ "./node_modules/encodable/esm/parsers/format/createFormatter.js":
/*!**********************************************************************!*\
  !*** ./node_modules/encodable/esm/parsers/format/createFormatter.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createFormatter; });
/* harmony import */ var _fallbackFormatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fallbackFormatter */ "./node_modules/encodable/esm/parsers/format/fallbackFormatter.js");
/* harmony import */ var _options_Encodable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../options/Encodable */ "./node_modules/encodable/esm/options/Encodable.js");


function createFormatter({
  formatType,
  format,
  formatInLocalTime
}) {
  if (formatType === 'time') {
    const formatter = _options_Encodable__WEBPACK_IMPORTED_MODULE_1__["default"].resolveTimeFormat({
      format,
      formatInLocalTime
    });
    return value => formatter(value);
  }

  if (formatType === 'number' || typeof format !== 'undefined' && format.length > 0) {
    const formatter = _options_Encodable__WEBPACK_IMPORTED_MODULE_1__["default"].resolveNumberFormat(format);
    return value => formatter(value);
  }

  return _fallbackFormatter__WEBPACK_IMPORTED_MODULE_0__["default"];
}

/***/ }),

/***/ "./node_modules/encodable/esm/parsers/format/fallbackFormatter.js":
/*!************************************************************************!*\
  !*** ./node_modules/encodable/esm/parsers/format/fallbackFormatter.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fallbackFormatter; });
function fallbackFormatter(v) {
  return "" + v;
}

/***/ }),

/***/ "./node_modules/encodable/esm/parsers/parseDateTime.js":
/*!*************************************************************!*\
  !*** ./node_modules/encodable/esm/parsers/parseDateTime.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseDateTime; });
/* harmony import */ var _dateTimeToTimestamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dateTimeToTimestamp */ "./node_modules/encodable/esm/parsers/dateTimeToTimestamp.js");

function parseDateTime(dateTime) {
  if (typeof dateTime === 'number' || typeof dateTime === 'string') {
    return new Date(dateTime);
  }

  return new Date(Object(_dateTimeToTimestamp__WEBPACK_IMPORTED_MODULE_0__["default"])(dateTime));
}

/***/ }),

/***/ "./node_modules/encodable/esm/parsers/parseDateTimeIn.js":
/*!***************************************************************!*\
  !*** ./node_modules/encodable/esm/parsers/parseDateTimeIn.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseDateTimeIn; });
/* harmony import */ var _typeGuards_DateTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../typeGuards/DateTime */ "./node_modules/encodable/esm/typeGuards/DateTime.js");
/* harmony import */ var _parseDateTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parseDateTime */ "./node_modules/encodable/esm/parsers/parseDateTime.js");


/**
 * Only parse elements that are DateTime to Date.
 * Leave the rest alone.
 * @param array
 */

function parseDateTimeIn(array) {
  return array.map(d => !(d instanceof Date) && Object(_typeGuards_DateTime__WEBPACK_IMPORTED_MODULE_0__["isDateTime"])(d) ? Object(_parseDateTime__WEBPACK_IMPORTED_MODULE_1__["default"])(d) : d);
}

/***/ }),

/***/ "./node_modules/encodable/esm/parsers/scale/applyAlign.js":
/*!****************************************************************!*\
  !*** ./node_modules/encodable/esm/parsers/scale/applyAlign.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return applyAlign; });
function applyAlign(config, scale) {
  if ('align' in config && typeof config.align !== 'undefined' && 'align' in scale) {
    scale.align(config.align);
  }
}

/***/ }),

/***/ "./node_modules/encodable/esm/parsers/scale/applyBase.js":
/*!***************************************************************!*\
  !*** ./node_modules/encodable/esm/parsers/scale/applyBase.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return applyBase; });
function applyBase(config, scale) {
  if ('base' in config && typeof config.base !== 'undefined' && 'base' in scale) {
    scale.base(config.base);
  }
}

/***/ }),

/***/ "./node_modules/encodable/esm/parsers/scale/applyClamp.js":
/*!****************************************************************!*\
  !*** ./node_modules/encodable/esm/parsers/scale/applyClamp.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return applyClamp; });
function applyClamp(config, scale) {
  if ('clamp' in config && config.clamp === true && 'clamp' in scale) {
    scale.clamp(config.clamp);
  }
}

/***/ }),

/***/ "./node_modules/encodable/esm/parsers/scale/applyDomain.js":
/*!*****************************************************************!*\
  !*** ./node_modules/encodable/esm/parsers/scale/applyDomain.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return applyDomain; });
/* harmony import */ var _typeGuards_Scale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../typeGuards/Scale */ "./node_modules/encodable/esm/typeGuards/Scale.js");
/* harmony import */ var _typeGuards_ScaleConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../typeGuards/ScaleConfig */ "./node_modules/encodable/esm/typeGuards/ScaleConfig.js");
/* harmony import */ var _domain_parseContinuousDomain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domain/parseContinuousDomain */ "./node_modules/encodable/esm/parsers/domain/parseContinuousDomain.js");
/* harmony import */ var _domain_parseDiscreteDomain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domain/parseDiscreteDomain */ "./node_modules/encodable/esm/parsers/domain/parseDiscreteDomain.js");
/* harmony import */ var _utils_combineCategories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/combineCategories */ "./node_modules/encodable/esm/utils/combineCategories.js");
/* harmony import */ var _utils_combineContinuousDomains__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/combineContinuousDomains */ "./node_modules/encodable/esm/utils/combineContinuousDomains.js");
/* harmony import */ var _utils_removeUndefinedAndNull__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/removeUndefinedAndNull */ "./node_modules/encodable/esm/utils/removeUndefinedAndNull.js");
/* harmony import */ var _parseDateTimeIn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../parseDateTimeIn */ "./node_modules/encodable/esm/parsers/parseDateTimeIn.js");









function createOrderFunction(reverse) {
  return reverse ? array => array.concat().reverse() : array => array;
}

function isCompleteDomain(domain) {
  return domain.length !== 2 || domain[0] != null && domain[1] != null;
}

function applyDomain(config, scale,
/** domain from dataset */
dataDomain) {
  const {
    reverse,
    type
  } = config;
  const order = createOrderFunction(reverse);

  if (Object(_typeGuards_Scale__WEBPACK_IMPORTED_MODULE_0__["isContinuousScale"])(scale, type) && Object(_typeGuards_ScaleConfig__WEBPACK_IMPORTED_MODULE_1__["isContinuousScaleConfig"])(config) || Object(_typeGuards_Scale__WEBPACK_IMPORTED_MODULE_0__["isDiscretizingScale"])(scale, type) && Object(_typeGuards_ScaleConfig__WEBPACK_IMPORTED_MODULE_1__["isDiscretizingScaleConfig"])(config)) {
    // For continuous and discretizing scales
    if (config.domain) {
      // If config.domain is specified
      if (isCompleteDomain(config.domain)) {
        // If the config.domain is completed
        // ignores the dataDomain
        scale.domain(order(Object(_parseDateTimeIn__WEBPACK_IMPORTED_MODULE_7__["default"])(config.domain)));
      } else if (dataDomain) {
        // If it is incompleted, then try to combine
        // with the dataDomain
        scale.domain(order(Object(_utils_combineContinuousDomains__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_domain_parseContinuousDomain__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_parseDateTimeIn__WEBPACK_IMPORTED_MODULE_7__["default"])(config.domain), type), Object(_domain_parseContinuousDomain__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_utils_removeUndefinedAndNull__WEBPACK_IMPORTED_MODULE_6__["default"])(dataDomain), type))));
      }
    } else if (dataDomain) {
      // If no config.domain then just use the dataDomain if any
      scale.domain(order(Object(_domain_parseContinuousDomain__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_utils_removeUndefinedAndNull__WEBPACK_IMPORTED_MODULE_6__["default"])(dataDomain), type)));
    }
  } else if (Object(_typeGuards_Scale__WEBPACK_IMPORTED_MODULE_0__["isDiscreteScale"])(scale, type) && Object(_typeGuards_ScaleConfig__WEBPACK_IMPORTED_MODULE_1__["isDiscreteScaleConfig"])(config)) {
    // For discrete scales
    if (config.domain) {
      const fixedDomain = Object(_domain_parseDiscreteDomain__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_parseDateTimeIn__WEBPACK_IMPORTED_MODULE_7__["default"])(config.domain));
      scale.domain(order(dataDomain ? Object(_utils_combineCategories__WEBPACK_IMPORTED_MODULE_4__["default"])(fixedDomain, Object(_domain_parseDiscreteDomain__WEBPACK_IMPORTED_MODULE_3__["default"])(dataDomain)) : fixedDomain));
    } else if (dataDomain) {
      // If no config.domain then just use the dataDomain if any
      scale.domain(order(Object(_domain_parseDiscreteDomain__WEBPACK_IMPORTED_MODULE_3__["default"])(dataDomain)));
    }
  }
}

/***/ }),

/***/ "./node_modules/encodable/esm/parsers/scale/applyExponent.js":
/*!*******************************************************************!*\
  !*** ./node_modules/encodable/esm/parsers/scale/applyExponent.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return applyExponent; });
function applyExponent(config, scale) {
  if ('exponent' in config && typeof config.exponent !== 'undefined' && 'exponent' in scale) {
    scale.exponent(config.exponent);
  }
}

/***/ }),

/***/ "./node_modules/encodable/esm/parsers/scale/applyInterpolate.js":
/*!**********************************************************************!*\
  !*** ./node_modules/encodable/esm/parsers/scale/applyInterpolate.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return applyInterpolate; });
/* harmony import */ var _createColorInterpolator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createColorInterpolator */ "./node_modules/encodable/esm/parsers/scale/createColorInterpolator.js");

function applyInterpolate(config, scale) {
  if ('interpolate' in config && typeof config.interpolate !== 'undefined' && 'interpolate' in scale) {
    scale.interpolate(Object(_createColorInterpolator__WEBPACK_IMPORTED_MODULE_0__["default"])(config.interpolate));
  }
}

/***/ }),

/***/ "./node_modules/encodable/esm/parsers/scale/applyNice.js":
/*!***************************************************************!*\
  !*** ./node_modules/encodable/esm/parsers/scale/applyNice.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return applyNice; });
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-time */ "./node_modules/encodable/node_modules/d3-time/src/day.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-time */ "./node_modules/encodable/node_modules/d3-time/src/hour.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-time */ "./node_modules/encodable/node_modules/d3-time/src/minute.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-time */ "./node_modules/encodable/node_modules/d3-time/src/month.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-time */ "./node_modules/encodable/node_modules/d3-time/src/second.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-time */ "./node_modules/encodable/node_modules/d3-time/src/week.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-time */ "./node_modules/encodable/node_modules/d3-time/src/year.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3-time */ "./node_modules/encodable/node_modules/d3-time/src/utcDay.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! d3-time */ "./node_modules/encodable/node_modules/d3-time/src/utcHour.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! d3-time */ "./node_modules/encodable/node_modules/d3-time/src/utcMinute.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! d3-time */ "./node_modules/encodable/node_modules/d3-time/src/utcMonth.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! d3-time */ "./node_modules/encodable/node_modules/d3-time/src/utcWeek.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! d3-time */ "./node_modules/encodable/node_modules/d3-time/src/utcYear.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../types */ "./node_modules/encodable/esm/types/scale/ScaleType.js");


const localTimeIntervals = {
  day: d3_time__WEBPACK_IMPORTED_MODULE_0__["default"],
  hour: d3_time__WEBPACK_IMPORTED_MODULE_1__["default"],
  minute: d3_time__WEBPACK_IMPORTED_MODULE_2__["default"],
  month: d3_time__WEBPACK_IMPORTED_MODULE_3__["default"],
  second: d3_time__WEBPACK_IMPORTED_MODULE_4__["default"],
  week: d3_time__WEBPACK_IMPORTED_MODULE_5__["sunday"],
  year: d3_time__WEBPACK_IMPORTED_MODULE_6__["default"]
};
const utcIntervals = {
  day: d3_time__WEBPACK_IMPORTED_MODULE_7__["default"],
  hour: d3_time__WEBPACK_IMPORTED_MODULE_8__["default"],
  minute: d3_time__WEBPACK_IMPORTED_MODULE_9__["default"],
  month: d3_time__WEBPACK_IMPORTED_MODULE_10__["default"],
  second: d3_time__WEBPACK_IMPORTED_MODULE_4__["default"],
  week: d3_time__WEBPACK_IMPORTED_MODULE_11__["utcSunday"],
  year: d3_time__WEBPACK_IMPORTED_MODULE_12__["default"]
};
function applyNice(config, scale) {
  if ('nice' in config && typeof config.nice !== 'undefined' && 'nice' in scale) {
    const {
      nice
    } = config;

    if (typeof nice === 'boolean') {
      if (nice) {
        scale.nice();
      }
    } else if (typeof nice === 'number') {
      scale.nice(nice);
    } else {
      const timeScale = scale;
      const {
        type
      } = config;

      if (typeof nice === 'string') {
        timeScale.nice(type === _types__WEBPACK_IMPORTED_MODULE_13__["ScaleType"].UTC ? utcIntervals[nice] : localTimeIntervals[nice]);
      } else {
        const {
          interval,
          step
        } = nice;
        const parsedInterval = (type === _types__WEBPACK_IMPORTED_MODULE_13__["ScaleType"].UTC ? utcIntervals[interval] : localTimeIntervals[interval]).every(step);

        if (parsedInterval !== null) {
          timeScale.nice(parsedInterval);
        }
      }
    }
  }
}

/***/ }),

/***/ "./node_modules/encodable/esm/parsers/scale/applyPadding.js":
/*!******************************************************************!*\
  !*** ./node_modules/encodable/esm/parsers/scale/applyPadding.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return applyPadding; });
function applyPadding(config, scale) {
  if ('padding' in config && typeof config.padding !== 'undefined' && 'padding' in scale) {
    scale.padding(config.padding);
  }

  if ('paddingInner' in config && typeof config.paddingInner !== 'undefined' && 'paddingInner' in scale) {
    scale.paddingInner(config.paddingInner);
  }

  if ('paddingOuter' in config && typeof config.paddingOuter !== 'undefined' && 'paddingOuter' in scale) {
    scale.paddingOuter(config.paddingOuter);
  }
}

/***/ }),

/***/ "./node_modules/encodable/esm/parsers/scale/applyRange.js":
/*!****************************************************************!*\
  !*** ./node_modules/encodable/esm/parsers/scale/applyRange.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return applyRange; });
/* harmony import */ var _encodable_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @encodable/color */ "./node_modules/@encodable/color/esm/scheme/wrappers/wrapColorScheme.js");
/* harmony import */ var _options_Encodable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../options/Encodable */ "./node_modules/encodable/esm/options/Encodable.js");
/* harmony import */ var _typeGuards_ScaleConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../typeGuards/ScaleConfig */ "./node_modules/encodable/esm/typeGuards/ScaleConfig.js");
/* harmony import */ var _typeGuards_SchemeParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../typeGuards/SchemeParams */ "./node_modules/encodable/esm/typeGuards/SchemeParams.js");




function applyRange(config, scale) {
  const {
    range,
    domain
  } = config;

  if (typeof range === 'undefined') {
    if ('scheme' in config && typeof config.scheme !== 'undefined') {
      const {
        scheme
      } = config;
      let name;
      let count;

      if (Object(_typeGuards_ScaleConfig__WEBPACK_IMPORTED_MODULE_2__["isContinuousScaleConfig"])(config) && domain) {
        count = domain.length;
      }

      let extent;

      if (Object(_typeGuards_SchemeParams__WEBPACK_IMPORTED_MODULE_3__["isSchemeParams"])(scheme)) {
        name = scheme.name;

        if (scheme.count) {
          count = scheme.count;
        }

        extent = scheme.extent;
      } else {
        name = scheme;
      }

      const schemeObject = _options_Encodable__WEBPACK_IMPORTED_MODULE_1__["default"].resolveColorScheme({
        name,
        type: 'sequential'
      });

      if (typeof schemeObject !== 'undefined' && schemeObject.type === 'sequential') {
        const wrappedScheme = Object(_encodable_color__WEBPACK_IMPORTED_MODULE_0__["default"])(schemeObject);
        scale.range(wrappedScheme.getColors(count, extent));
      }
    }
  } else {
    // TODO: add type guard should fix this problem
    // @ts-ignore
    scale.range(range);
  }
}

/***/ }),

/***/ "./node_modules/encodable/esm/parsers/scale/applyRound.js":
/*!****************************************************************!*\
  !*** ./node_modules/encodable/esm/parsers/scale/applyRound.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return applyRound; });
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/encodable/node_modules/d3-interpolate/src/round.js");

function applyRound(config, scale) {
  if ('round' in config && config.round === true) {
    const roundableScale = scale;

    if ('round' in roundableScale) {
      roundableScale.round(config.round);
    } else {
      roundableScale.interpolate(d3_interpolate__WEBPACK_IMPORTED_MODULE_0__["default"]);
    }
  }
}

/***/ }),

/***/ "./node_modules/encodable/esm/parsers/scale/applyZero.js":
/*!***************************************************************!*\
  !*** ./node_modules/encodable/esm/parsers/scale/applyZero.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return applyZero; });
/* harmony import */ var _typeGuards_Scale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../typeGuards/Scale */ "./node_modules/encodable/esm/typeGuards/Scale.js");

function applyZero(config, scale) {
  if ('zero' in config && config.zero === true && Object(_typeGuards_Scale__WEBPACK_IMPORTED_MODULE_0__["isContinuousScale"])(scale, config.type)) {
    const domain = scale.domain();
    const [a, b] = domain;
    const isDescending = b < a;
    const [min, max] = isDescending ? [b, a] : [a, b];
    const domainWithZero = [Math.min(0, min), Math.max(0, max)];
    scale.domain(isDescending ? domainWithZero.reverse() : domainWithZero);
  }
}

/***/ }),

/***/ "./node_modules/encodable/esm/parsers/scale/createColorInterpolator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/encodable/esm/parsers/scale/createColorInterpolator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createColorInterpolator; });
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/encodable/node_modules/d3-interpolate/src/lab.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/encodable/node_modules/d3-interpolate/src/hcl.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/encodable/node_modules/d3-interpolate/src/hsl.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/encodable/node_modules/d3-interpolate/src/cubehelix.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/encodable/node_modules/d3-interpolate/src/rgb.js");

const interpolatorMap = {
  lab: d3_interpolate__WEBPACK_IMPORTED_MODULE_0__["default"],
  hcl: d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["default"],
  'hcl-long': d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["hclLong"],
  hsl: d3_interpolate__WEBPACK_IMPORTED_MODULE_2__["default"],
  'hsl-long': d3_interpolate__WEBPACK_IMPORTED_MODULE_2__["hslLong"],
  cubehelix: d3_interpolate__WEBPACK_IMPORTED_MODULE_3__["default"],
  'cubehelix-long': d3_interpolate__WEBPACK_IMPORTED_MODULE_3__["cubehelixLong"],
  rgb: d3_interpolate__WEBPACK_IMPORTED_MODULE_4__["default"]
};
function createColorInterpolator(interpolate) {
  switch (interpolate) {
    case 'lab':
    case 'hcl':
    case 'hcl-long':
    case 'hsl':
    case 'hsl-long':
    case 'cubehelix':
    case 'cubehelix-long':
    case 'rgb':
      return interpolatorMap[interpolate];

    default:
  }

  const {
    type,
    gamma
  } = interpolate;
  const interpolator = interpolatorMap[type];
  return typeof gamma === 'undefined' ? interpolator : interpolator.gamma(gamma);
}

/***/ }),

/***/ "./node_modules/encodable/esm/parsers/scale/createScale.js":
/*!*****************************************************************!*\
  !*** ./node_modules/encodable/esm/parsers/scale/createScale.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types */ "./node_modules/encodable/esm/types/scale/ScaleType.js");
/* harmony import */ var _createScaleFromScaleType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createScaleFromScaleType */ "./node_modules/encodable/esm/parsers/scale/createScaleFromScaleType.js");
/* harmony import */ var _updateScale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateScale */ "./node_modules/encodable/esm/parsers/scale/updateScale.js");
/* harmony import */ var _options_Encodable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../options/Encodable */ "./node_modules/encodable/esm/options/Encodable.js");
/* harmony import */ var _typeGuards_SchemeParams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../typeGuards/SchemeParams */ "./node_modules/encodable/esm/typeGuards/SchemeParams.js");
/* harmony import */ var _applyDomain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./applyDomain */ "./node_modules/encodable/esm/parsers/scale/applyDomain.js");







function createScale(config) {
  const {
    range
  } = config; // Handle categorical color scales
  // An ordinal scale without specified range
  // is assumed to be a color scale.

  if (config.type === _types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].ORDINAL && typeof range === 'undefined') {
    const scheme = 'scheme' in config ? config.scheme : undefined;
    const resolve = _options_Encodable__WEBPACK_IMPORTED_MODULE_3__["default"].getCategoricalColorScaleResolver();
    let colorScale;

    if (typeof scheme === 'undefined') {
      colorScale = resolve({});
    } else if (Object(_typeGuards_SchemeParams__WEBPACK_IMPORTED_MODULE_4__["isSchemeParams"])(scheme)) {
      colorScale = resolve(scheme);
    } else {
      colorScale = resolve({
        name: scheme
      });
    }

    const castedColorScale = colorScale;
    Object(_applyDomain__WEBPACK_IMPORTED_MODULE_5__["default"])(config, castedColorScale);
    return castedColorScale;
  }

  const scale = Object(_createScaleFromScaleType__WEBPACK_IMPORTED_MODULE_1__["default"])(config.type);
  return Object(_updateScale__WEBPACK_IMPORTED_MODULE_2__["default"])(scale, config);
}

/* harmony default export */ __webpack_exports__["default"] = (createScale);

/***/ }),

/***/ "./node_modules/encodable/esm/parsers/scale/createScaleFromScaleType.js":
/*!******************************************************************************!*\
  !*** ./node_modules/encodable/esm/parsers/scale/createScaleFromScaleType.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createScaleFromScaleType; });
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-scale */ "./node_modules/encodable/node_modules/d3-scale/src/linear.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-scale */ "./node_modules/encodable/node_modules/d3-scale/src/log.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-scale */ "./node_modules/encodable/node_modules/d3-scale/src/pow.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-scale */ "./node_modules/encodable/node_modules/d3-scale/src/time.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-scale */ "./node_modules/encodable/node_modules/d3-scale/src/utcTime.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-scale */ "./node_modules/encodable/node_modules/d3-scale/src/quantile.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-scale */ "./node_modules/encodable/node_modules/d3-scale/src/quantize.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3-scale */ "./node_modules/encodable/node_modules/d3-scale/src/threshold.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! d3-scale */ "./node_modules/encodable/node_modules/d3-scale/src/ordinal.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! d3-scale */ "./node_modules/encodable/node_modules/d3-scale/src/band.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! d3-scale */ "./node_modules/encodable/node_modules/d3-scale/src/symlog.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../types */ "./node_modules/encodable/esm/types/scale/ScaleType.js");


function createScaleFromScaleType(type) {
  switch (type) {
    case _types__WEBPACK_IMPORTED_MODULE_11__["ScaleType"].LINEAR:
      return Object(d3_scale__WEBPACK_IMPORTED_MODULE_0__["default"])();

    case _types__WEBPACK_IMPORTED_MODULE_11__["ScaleType"].LOG:
      return Object(d3_scale__WEBPACK_IMPORTED_MODULE_1__["default"])();

    case _types__WEBPACK_IMPORTED_MODULE_11__["ScaleType"].POW:
      return Object(d3_scale__WEBPACK_IMPORTED_MODULE_2__["default"])();

    case _types__WEBPACK_IMPORTED_MODULE_11__["ScaleType"].SQRT:
      return Object(d3_scale__WEBPACK_IMPORTED_MODULE_2__["sqrt"])();

    case _types__WEBPACK_IMPORTED_MODULE_11__["ScaleType"].TIME:
      return Object(d3_scale__WEBPACK_IMPORTED_MODULE_3__["default"])();

    case _types__WEBPACK_IMPORTED_MODULE_11__["ScaleType"].UTC:
      return Object(d3_scale__WEBPACK_IMPORTED_MODULE_4__["default"])();

    case _types__WEBPACK_IMPORTED_MODULE_11__["ScaleType"].QUANTILE:
      return Object(d3_scale__WEBPACK_IMPORTED_MODULE_5__["default"])();

    case _types__WEBPACK_IMPORTED_MODULE_11__["ScaleType"].QUANTIZE:
      return Object(d3_scale__WEBPACK_IMPORTED_MODULE_6__["default"])();

    case _types__WEBPACK_IMPORTED_MODULE_11__["ScaleType"].THRESHOLD:
      return Object(d3_scale__WEBPACK_IMPORTED_MODULE_7__["default"])();

    case _types__WEBPACK_IMPORTED_MODULE_11__["ScaleType"].ORDINAL:
      return Object(d3_scale__WEBPACK_IMPORTED_MODULE_8__["default"])();

    case _types__WEBPACK_IMPORTED_MODULE_11__["ScaleType"].POINT:
      return Object(d3_scale__WEBPACK_IMPORTED_MODULE_9__["point"])();

    case _types__WEBPACK_IMPORTED_MODULE_11__["ScaleType"].BAND:
      return Object(d3_scale__WEBPACK_IMPORTED_MODULE_9__["default"])();

    case _types__WEBPACK_IMPORTED_MODULE_11__["ScaleType"].SYMLOG:
      return Object(d3_scale__WEBPACK_IMPORTED_MODULE_10__["default"])();

    case _types__WEBPACK_IMPORTED_MODULE_11__["ScaleType"].BIN_ORDINAL:
      // TODO: Pending scale.bins implementation
      throw new Error("\"type = " + type + "\" is not supported yet.");

    default:
      return Object(d3_scale__WEBPACK_IMPORTED_MODULE_0__["default"])();
  }
}

/***/ }),

/***/ "./node_modules/encodable/esm/parsers/scale/isPropertySupportedByScaleType.js":
/*!************************************************************************************!*\
  !*** ./node_modules/encodable/esm/parsers/scale/isPropertySupportedByScaleType.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isPropertySupportedByScaleType; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types */ "./node_modules/encodable/esm/types/scale/ScaleType.js");
/* harmony import */ var _scaleCategories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scaleCategories */ "./node_modules/encodable/esm/parsers/scale/scaleCategories.js");


const pointOrBand = [_types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].POINT, _types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].BAND];
const pointOrBandSet = new Set(pointOrBand);
const exceptPointOrBand = _scaleCategories__WEBPACK_IMPORTED_MODULE_1__["allScaleTypes"].filter(type => !pointOrBandSet.has(type));
const exceptPointOrBandSet = new Set(exceptPointOrBand);
const continuousOrPointOrBandSet = new Set(_scaleCategories__WEBPACK_IMPORTED_MODULE_1__["continuousScaleTypes"].concat(pointOrBand));
const zeroSet = new Set(_scaleCategories__WEBPACK_IMPORTED_MODULE_1__["continuousDomainScaleTypes"]); // log scale cannot have zero value

zeroSet.delete(_types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].LOG); // zero is not meaningful for time

zeroSet.delete(_types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].TIME);
zeroSet.delete(_types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].UTC); // threshold requires custom domain so zero does not matter

zeroSet.delete(_types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].THRESHOLD); // quantile depends on distribution so zero does not matter

zeroSet.delete(_types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].QUANTILE);
const supportedScaleTypes = {
  align: pointOrBandSet,
  base: new Set([_types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].LOG]),
  clamp: _scaleCategories__WEBPACK_IMPORTED_MODULE_1__["continuousScaleTypesSet"],
  constant: new Set([_types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].SYMLOG]),
  domain: _scaleCategories__WEBPACK_IMPORTED_MODULE_1__["allScaleTypesSet"],
  exponent: new Set([_types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].POW]),
  interpolate: exceptPointOrBandSet,
  nice: new Set(_scaleCategories__WEBPACK_IMPORTED_MODULE_1__["continuousScaleTypes"].concat([_types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].QUANTIZE, _types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].THRESHOLD])),
  padding: continuousOrPointOrBandSet,
  paddingInner: new Set([_types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].BAND]),
  paddingOuter: pointOrBandSet,
  range: _scaleCategories__WEBPACK_IMPORTED_MODULE_1__["allScaleTypesSet"],
  reverse: _scaleCategories__WEBPACK_IMPORTED_MODULE_1__["allScaleTypesSet"],
  round: continuousOrPointOrBandSet,
  scheme: exceptPointOrBandSet,
  type: _scaleCategories__WEBPACK_IMPORTED_MODULE_1__["allScaleTypesSet"],
  unknown: new Set([_types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].ORDINAL]),
  zero: zeroSet
};
function isPropertySupportedByScaleType(property, scaleType) {
  return supportedScaleTypes[property].has(scaleType);
}

/***/ }),

/***/ "./node_modules/encodable/esm/parsers/scale/scaleCategories.js":
/*!*********************************************************************!*\
  !*** ./node_modules/encodable/esm/parsers/scale/scaleCategories.js ***!
  \*********************************************************************/
/*! exports provided: continuousToContinuousScaleTypes, continuousToContinuousScaleTypesSet, continuousToDiscreteScaleTypes, continuousToDiscreteScaleTypesSet, continuousDomainScaleTypes, continuousDomainScaleTypesSet, discreteDomainScaleTypes, discreteDomainScaleTypesSet, continuousScaleTypes, continuousScaleTypesSet, discreteScaleTypes, discreteScaleTypesSet, discretizingScaleTypes, discretizingScaleTypesSet, timeScaleTypes, timeScaleTypesSet, allScaleTypes, allScaleTypesSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "continuousToContinuousScaleTypes", function() { return continuousToContinuousScaleTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "continuousToContinuousScaleTypesSet", function() { return continuousToContinuousScaleTypesSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "continuousToDiscreteScaleTypes", function() { return continuousToDiscreteScaleTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "continuousToDiscreteScaleTypesSet", function() { return continuousToDiscreteScaleTypesSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "continuousDomainScaleTypes", function() { return continuousDomainScaleTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "continuousDomainScaleTypesSet", function() { return continuousDomainScaleTypesSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "discreteDomainScaleTypes", function() { return discreteDomainScaleTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "discreteDomainScaleTypesSet", function() { return discreteDomainScaleTypesSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "continuousScaleTypes", function() { return continuousScaleTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "continuousScaleTypesSet", function() { return continuousScaleTypesSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "discreteScaleTypes", function() { return discreteScaleTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "discreteScaleTypesSet", function() { return discreteScaleTypesSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "discretizingScaleTypes", function() { return discretizingScaleTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "discretizingScaleTypesSet", function() { return discretizingScaleTypesSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeScaleTypes", function() { return timeScaleTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeScaleTypesSet", function() { return timeScaleTypesSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allScaleTypes", function() { return allScaleTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allScaleTypesSet", function() { return allScaleTypesSet; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../types */ "./node_modules/encodable/esm/types/scale/ScaleType.js");
 // Grouped by domain and range

const continuousToContinuousScaleTypes = [_types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].LINEAR, _types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].POW, _types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].SQRT, _types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].SYMLOG, _types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].LOG, _types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].TIME, _types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].UTC];
const continuousToContinuousScaleTypesSet = new Set(continuousToContinuousScaleTypes);
const continuousToDiscreteScaleTypes = [_types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].QUANTILE, _types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].QUANTIZE, _types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].THRESHOLD];
const continuousToDiscreteScaleTypesSet = new Set(continuousToDiscreteScaleTypes); // Grouped by Domain

const continuousDomainScaleTypes = continuousToContinuousScaleTypes.concat(continuousToDiscreteScaleTypes);
const continuousDomainScaleTypesSet = new Set(continuousDomainScaleTypes);
const discreteDomainScaleTypes = [_types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].ORDINAL, _types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].BIN_ORDINAL, _types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].POINT, _types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].BAND];
const discreteDomainScaleTypesSet = new Set(discreteDomainScaleTypes); // Three broad categories

const continuousScaleTypes = continuousToContinuousScaleTypes;
const continuousScaleTypesSet = continuousToContinuousScaleTypesSet;
const discreteScaleTypes = [_types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].BAND, _types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].POINT, _types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].ORDINAL];
const discreteScaleTypesSet = new Set(discreteScaleTypes);
const discretizingScaleTypes = [_types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].BIN_ORDINAL, _types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].QUANTILE, _types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].QUANTIZE, _types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].THRESHOLD];
const discretizingScaleTypesSet = new Set(discretizingScaleTypes); // Others

const timeScaleTypes = [_types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].TIME, _types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].UTC];
const timeScaleTypesSet = new Set(timeScaleTypes);
const allScaleTypes = [_types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].LINEAR, _types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].LOG, _types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].POW, _types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].SQRT, _types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].SYMLOG, _types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].TIME, _types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].UTC, _types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].QUANTILE, _types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].QUANTIZE, _types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].THRESHOLD, _types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].BIN_ORDINAL, _types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].ORDINAL, _types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].POINT, _types__WEBPACK_IMPORTED_MODULE_0__["ScaleType"].BAND];
const allScaleTypesSet = new Set(allScaleTypes);

/***/ }),

/***/ "./node_modules/encodable/esm/parsers/scale/updateScale.js":
/*!*****************************************************************!*\
  !*** ./node_modules/encodable/esm/parsers/scale/updateScale.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return updateScale; });
/* harmony import */ var _applyAlign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applyAlign */ "./node_modules/encodable/esm/parsers/scale/applyAlign.js");
/* harmony import */ var _applyBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./applyBase */ "./node_modules/encodable/esm/parsers/scale/applyBase.js");
/* harmony import */ var _applyClamp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./applyClamp */ "./node_modules/encodable/esm/parsers/scale/applyClamp.js");
/* harmony import */ var _applyExponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./applyExponent */ "./node_modules/encodable/esm/parsers/scale/applyExponent.js");
/* harmony import */ var _applyNice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./applyNice */ "./node_modules/encodable/esm/parsers/scale/applyNice.js");
/* harmony import */ var _applyZero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./applyZero */ "./node_modules/encodable/esm/parsers/scale/applyZero.js");
/* harmony import */ var _applyInterpolate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./applyInterpolate */ "./node_modules/encodable/esm/parsers/scale/applyInterpolate.js");
/* harmony import */ var _applyRound__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./applyRound */ "./node_modules/encodable/esm/parsers/scale/applyRound.js");
/* harmony import */ var _applyDomain__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./applyDomain */ "./node_modules/encodable/esm/parsers/scale/applyDomain.js");
/* harmony import */ var _applyRange__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./applyRange */ "./node_modules/encodable/esm/parsers/scale/applyRange.js");
/* harmony import */ var _applyPadding__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./applyPadding */ "./node_modules/encodable/esm/parsers/scale/applyPadding.js");











function updateScale(scale, config) {
  // domain and range apply to all scales
  Object(_applyDomain__WEBPACK_IMPORTED_MODULE_8__["default"])(config, scale);
  Object(_applyRange__WEBPACK_IMPORTED_MODULE_9__["default"])(config, scale); // Sort other properties alphabetically.

  Object(_applyAlign__WEBPACK_IMPORTED_MODULE_0__["default"])(config, scale);
  Object(_applyBase__WEBPACK_IMPORTED_MODULE_1__["default"])(config, scale);
  Object(_applyClamp__WEBPACK_IMPORTED_MODULE_2__["default"])(config, scale);
  Object(_applyExponent__WEBPACK_IMPORTED_MODULE_3__["default"])(config, scale);
  Object(_applyInterpolate__WEBPACK_IMPORTED_MODULE_6__["default"])(config, scale); // Nice depends on domain.

  Object(_applyNice__WEBPACK_IMPORTED_MODULE_4__["default"])(config, scale);
  Object(_applyPadding__WEBPACK_IMPORTED_MODULE_10__["default"])(config, scale);
  Object(_applyRound__WEBPACK_IMPORTED_MODULE_7__["default"])(config, scale); // Zero depends on domain and nice.

  Object(_applyZero__WEBPACK_IMPORTED_MODULE_5__["default"])(config, scale);
  return scale;
}

/***/ }),

/***/ "./node_modules/encodable/esm/typeGuards/Base.js":
/*!*******************************************************!*\
  !*** ./node_modules/encodable/esm/typeGuards/Base.js ***!
  \*******************************************************/
/*! exports provided: isArray, isNotArray, isDefined, isEveryElementDefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNotArray", function() { return isNotArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return isDefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEveryElementDefined", function() { return isEveryElementDefined; });
function isArray(maybeArray) {
  return Array.isArray(maybeArray);
}
function isNotArray(maybeArray) {
  return !Array.isArray(maybeArray);
}
function isDefined(value) {
  return typeof value !== 'undefined' && value !== null;
}
function isEveryElementDefined(array) {
  return array.every(isDefined);
}

/***/ }),

/***/ "./node_modules/encodable/esm/typeGuards/Channel.js":
/*!**********************************************************!*\
  !*** ./node_modules/encodable/esm/typeGuards/Channel.js ***!
  \**********************************************************/
/*! exports provided: isX, isY, isXOrY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isX", function() { return isX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isY", function() { return isY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isXOrY", function() { return isXOrY; });
function isX(channelType) {
  return channelType === 'X' || channelType === 'XBand';
}
function isY(channelType) {
  return channelType === 'Y' || channelType === 'YBand';
}
function isXOrY(channelType) {
  return isX(channelType) || isY(channelType);
}

/***/ }),

/***/ "./node_modules/encodable/esm/typeGuards/ChannelDef.js":
/*!*************************************************************!*\
  !*** ./node_modules/encodable/esm/typeGuards/ChannelDef.js ***!
  \*************************************************************/
/*! exports provided: isValueDef, isNonValueDef, isFieldDef, isTypedFieldDef, isScaleFieldDef, isPositionFieldDef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValueDef", function() { return isValueDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNonValueDef", function() { return isNonValueDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFieldDef", function() { return isFieldDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTypedFieldDef", function() { return isTypedFieldDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScaleFieldDef", function() { return isScaleFieldDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPositionFieldDef", function() { return isPositionFieldDef; });
function isValueDef(channelDef) {
  return channelDef && 'value' in channelDef;
}
function isNonValueDef(channelDef) {
  return channelDef && !('value' in channelDef);
}
function isFieldDef(channelDef) {
  return channelDef && 'field' in channelDef && !!channelDef.field;
}
function isTypedFieldDef(channelDef) {
  return isFieldDef(channelDef) && 'type' in channelDef && !!channelDef.type;
}
function isScaleFieldDef(channelDef) {
  return isTypedFieldDef(channelDef) && 'scale' in channelDef;
}
function isPositionFieldDef(channelDef) {
  return isTypedFieldDef(channelDef) && 'axis' in channelDef;
}

/***/ }),

/***/ "./node_modules/encodable/esm/typeGuards/CompleteChannelDef.js":
/*!*********************************************************************!*\
  !*** ./node_modules/encodable/esm/typeGuards/CompleteChannelDef.js ***!
  \*********************************************************************/
/*! exports provided: isCompleteValueDef, isCompleteFieldDef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCompleteValueDef", function() { return isCompleteValueDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCompleteFieldDef", function() { return isCompleteFieldDef; });
function isCompleteValueDef(def) {
  return 'value' in def;
}
function isCompleteFieldDef(def) {
  return 'field' in def;
}

/***/ }),

/***/ "./node_modules/encodable/esm/typeGuards/DateTime.js":
/*!***********************************************************!*\
  !*** ./node_modules/encodable/esm/typeGuards/DateTime.js ***!
  \***********************************************************/
/*! exports provided: isDateTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDateTime", function() { return isDateTime; });
// eslint-disable-next-line import/prefer-default-export
function isDateTime(o) {
  return !!o && !(o instanceof Date) && typeof o !== 'string' && typeof o !== 'boolean' && typeof o !== 'number' && ('year' in o && o.year != null || 'quarter' in o && o.quarter != null || 'month' in o && o.month != null || 'date' in o && o.date != null || 'day' in o && o.day != null || 'hours' in o && o.hours != null || 'minutes' in o && o.minutes != null || 'seconds' in o && o.seconds != null || 'milliseconds' in o && o.milliseconds != null);
}

/***/ }),

/***/ "./node_modules/encodable/esm/typeGuards/Scale.js":
/*!********************************************************!*\
  !*** ./node_modules/encodable/esm/typeGuards/Scale.js ***!
  \********************************************************/
/*! exports provided: isContinuousScale, isDiscretizingScale, isDiscreteScale, isTimeScale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isContinuousScale", function() { return isContinuousScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDiscretizingScale", function() { return isDiscretizingScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDiscreteScale", function() { return isDiscreteScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTimeScale", function() { return isTimeScale; });
/* harmony import */ var _parsers_scale_scaleCategories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parsers/scale/scaleCategories */ "./node_modules/encodable/esm/parsers/scale/scaleCategories.js");

function isContinuousScale(scale, scaleType) {
  return scale && _parsers_scale_scaleCategories__WEBPACK_IMPORTED_MODULE_0__["continuousScaleTypesSet"].has(scaleType);
}
function isDiscretizingScale(scale, scaleType) {
  return scale && _parsers_scale_scaleCategories__WEBPACK_IMPORTED_MODULE_0__["discretizingScaleTypesSet"].has(scaleType);
}
function isDiscreteScale(scale, scaleType) {
  return scale && _parsers_scale_scaleCategories__WEBPACK_IMPORTED_MODULE_0__["discreteScaleTypesSet"].has(scaleType);
}
function isTimeScale(scale, scaleType) {
  return scale && _parsers_scale_scaleCategories__WEBPACK_IMPORTED_MODULE_0__["timeScaleTypesSet"].has(scaleType);
}

/***/ }),

/***/ "./node_modules/encodable/esm/typeGuards/ScaleConfig.js":
/*!**************************************************************!*\
  !*** ./node_modules/encodable/esm/typeGuards/ScaleConfig.js ***!
  \**************************************************************/
/*! exports provided: isContinuousScaleConfig, isDiscretizingScaleConfig, isDiscreteScaleConfig, isScaleConfigWithZero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isContinuousScaleConfig", function() { return isContinuousScaleConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDiscretizingScaleConfig", function() { return isDiscretizingScaleConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDiscreteScaleConfig", function() { return isDiscreteScaleConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScaleConfigWithZero", function() { return isScaleConfigWithZero; });
/* harmony import */ var _parsers_scale_isPropertySupportedByScaleType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../parsers/scale/isPropertySupportedByScaleType */ "./node_modules/encodable/esm/parsers/scale/isPropertySupportedByScaleType.js");
/* harmony import */ var _parsers_scale_scaleCategories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parsers/scale/scaleCategories */ "./node_modules/encodable/esm/parsers/scale/scaleCategories.js");


function isContinuousScaleConfig(config) {
  return _parsers_scale_scaleCategories__WEBPACK_IMPORTED_MODULE_1__["continuousScaleTypesSet"].has(config.type);
}
function isDiscretizingScaleConfig(config) {
  return _parsers_scale_scaleCategories__WEBPACK_IMPORTED_MODULE_1__["discretizingScaleTypesSet"].has(config.type);
}
function isDiscreteScaleConfig(config) {
  return _parsers_scale_scaleCategories__WEBPACK_IMPORTED_MODULE_1__["discreteScaleTypesSet"].has(config.type);
}
function isScaleConfigWithZero(config) {
  return Object(_parsers_scale_isPropertySupportedByScaleType__WEBPACK_IMPORTED_MODULE_0__["default"])('zero', config.type);
}

/***/ }),

/***/ "./node_modules/encodable/esm/typeGuards/SchemeParams.js":
/*!***************************************************************!*\
  !*** ./node_modules/encodable/esm/typeGuards/SchemeParams.js ***!
  \***************************************************************/
/*! exports provided: isSchemeParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSchemeParams", function() { return isSchemeParams; });
// eslint-disable-next-line import/prefer-default-export
function isSchemeParams(scheme) {
  return Object.prototype.toString.call(scheme) !== '[object String]';
}

/***/ }),

/***/ "./node_modules/encodable/esm/types/scale/ScaleType.js":
/*!*************************************************************!*\
  !*** ./node_modules/encodable/esm/types/scale/ScaleType.js ***!
  \*************************************************************/
/*! exports provided: ScaleType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScaleType", function() { return ScaleType; });
// Modified from vega-lite
// because vega-lite uses namespace which has issues with babel and typescript
const ScaleType = {
  // Continuous - Quantitative
  LINEAR: 'linear',
  LOG: 'log',
  POW: 'pow',
  SQRT: 'sqrt',
  SYMLOG: 'symlog',
  // Continuous - Time
  TIME: 'time',
  UTC: 'utc',
  // Discretizing scales
  QUANTILE: 'quantile',
  QUANTIZE: 'quantize',
  THRESHOLD: 'threshold',
  BIN_ORDINAL: 'bin-ordinal',
  // Discrete scales
  ORDINAL: 'ordinal',
  POINT: 'point',
  BAND: 'band'
};

/***/ }),

/***/ "./node_modules/encodable/esm/utils/combineCategories.js":
/*!***************************************************************!*\
  !*** ./node_modules/encodable/esm/utils/combineCategories.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return combineCategories; });
/**
 * Combine two arrays into a unique list
 * by keeping the order the fixedCategories
 * and append new categories at the end.
 * @param fixedCategories
 * @param inputCategories
 */
function combineCategories(fixedCategories, inputCategories = []) {
  if (fixedCategories.length === 0) {
    return inputCategories;
  }

  const fixedSet = new Set(fixedCategories);
  return fixedCategories.concat(inputCategories.filter(d => !fixedSet.has(d)));
}

/***/ }),

/***/ "./node_modules/encodable/esm/utils/combineContinuousDomains.js":
/*!**********************************************************************!*\
  !*** ./node_modules/encodable/esm/utils/combineContinuousDomains.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return combineContinuousDomains; });
/* harmony import */ var _typeGuards_Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../typeGuards/Base */ "./node_modules/encodable/esm/typeGuards/Base.js");

/**
 * Combine two continuous domain and ensure that the output
 * does not go beyond fixedDomain
 * @param bounds
 * @param dataDomain
 */

function combineContinuousDomains(bounds, dataDomain) {
  if (bounds.length > 0 && Object(_typeGuards_Base__WEBPACK_IMPORTED_MODULE_0__["isEveryElementDefined"])(bounds)) {
    return bounds;
  }

  if (bounds.length === 2 && dataDomain.length === 2 && bounds.filter(_typeGuards_Base__WEBPACK_IMPORTED_MODULE_0__["isDefined"]).length > 0) {
    const [boundMin, boundMax] = bounds;
    const [dataMin, dataMax] = dataDomain;
    let min = dataMin;

    if (Object(_typeGuards_Base__WEBPACK_IMPORTED_MODULE_0__["isDefined"])(boundMin)) {
      min = boundMin.valueOf() > dataMin.valueOf() ? boundMin : dataMin;
    }

    let max = dataMax;

    if (Object(_typeGuards_Base__WEBPACK_IMPORTED_MODULE_0__["isDefined"])(boundMax)) {
      max = boundMax.valueOf() < dataMax.valueOf() ? boundMax : dataMax;
    }

    return [min, max];
  }

  return dataDomain;
}

/***/ }),

/***/ "./node_modules/encodable/esm/utils/identity.js":
/*!******************************************************!*\
  !*** ./node_modules/encodable/esm/utils/identity.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return identity; });
function identity(x) {
  return x;
}

/***/ }),

/***/ "./node_modules/encodable/esm/utils/inferElementTypeFromUnionOfArrayTypes.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/encodable/esm/utils/inferElementTypeFromUnionOfArrayTypes.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return inferElementTypeFromUnionOfArrayTypes; });
/**
 * Type workaround for https://github.com/Microsoft/TypeScript/issues/7294#issuecomment-465794460
 * to avoid error "Cannot invoke an expression whose type lacks a call signature"
 * when using array.map
 */
function inferElementTypeFromUnionOfArrayTypes(array) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return array;
}

/***/ }),

/***/ "./node_modules/encodable/esm/utils/isDisabled.js":
/*!********************************************************!*\
  !*** ./node_modules/encodable/esm/utils/isDisabled.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isDisabled; });
function isDisabled(config) {
  return config === false || config === null;
}

/***/ }),

/***/ "./node_modules/encodable/esm/utils/isEnabled.js":
/*!*******************************************************!*\
  !*** ./node_modules/encodable/esm/utils/isEnabled.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isEnabled; });
/* harmony import */ var _isDisabled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isDisabled */ "./node_modules/encodable/esm/utils/isDisabled.js");

function isEnabled(config) {
  return !Object(_isDisabled__WEBPACK_IMPORTED_MODULE_0__["default"])(config);
}

/***/ }),

/***/ "./node_modules/encodable/esm/utils/keys.js":
/*!**************************************************!*\
  !*** ./node_modules/encodable/esm/utils/keys.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This is a stricter version of Object.keys but with better types.
 * See https://github.com/Microsoft/TypeScript/pull/12253#issuecomment-263132208
 */
const keys = Object.keys;
/* harmony default export */ __webpack_exports__["default"] = (keys);

/***/ }),

/***/ "./node_modules/encodable/esm/utils/mergeEncoding.js":
/*!***********************************************************!*\
  !*** ./node_modules/encodable/esm/utils/mergeEncoding.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mergeEncoding; });
function mergeEncoding(defaultEncoding, encoding) {
  return { ...defaultEncoding,
    ...encoding
  };
}

/***/ }),

/***/ "./node_modules/encodable/esm/utils/removeUndefinedAndNull.js":
/*!********************************************************************!*\
  !*** ./node_modules/encodable/esm/utils/removeUndefinedAndNull.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeUndefinedAndNull; });
function removeUndefinedAndNull(array) {
  return array.filter(x => typeof x !== 'undefined' && x !== null);
}

/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-array/src/ascending.js":
/*!***********************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-array/src/ascending.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
});


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-array/src/bisect.js":
/*!********************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-array/src/bisect.js ***!
  \********************************************************************/
/*! exports provided: bisectRight, bisectLeft, bisectCenter, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bisectRight", function() { return bisectRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bisectLeft", function() { return bisectLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bisectCenter", function() { return bisectCenter; });
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/encodable/node_modules/d3-array/src/ascending.js");
/* harmony import */ var _bisector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bisector.js */ "./node_modules/encodable/node_modules/d3-array/src/bisector.js");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./number.js */ "./node_modules/encodable/node_modules/d3-array/src/number.js");




const ascendingBisect = Object(_bisector_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
const bisectRight = ascendingBisect.right;
const bisectLeft = ascendingBisect.left;
const bisectCenter = Object(_bisector_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_number_js__WEBPACK_IMPORTED_MODULE_2__["default"]).center;
/* harmony default export */ __webpack_exports__["default"] = (bisectRight);


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-array/src/bisector.js":
/*!**********************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-array/src/bisector.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/encodable/node_modules/d3-array/src/ascending.js");


/* harmony default export */ __webpack_exports__["default"] = (function(f) {
  let delta = f;
  let compare = f;

  if (f.length === 1) {
    delta = (d, x) => f(d) - x;
    compare = ascendingComparator(f);
  }

  function left(a, x, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a.length;
    while (lo < hi) {
      const mid = (lo + hi) >>> 1;
      if (compare(a[mid], x) < 0) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  }

  function right(a, x, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a.length;
    while (lo < hi) {
      const mid = (lo + hi) >>> 1;
      if (compare(a[mid], x) > 0) hi = mid;
      else lo = mid + 1;
    }
    return lo;
  }

  function center(a, x, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a.length;
    const i = left(a, x, lo, hi - 1);
    return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
  }

  return {left, center, right};
});

function ascendingComparator(f) {
  return (d, x) => Object(_ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"])(f(d), x);
}


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-array/src/extent.js":
/*!********************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-array/src/extent.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  let min;
  let max;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null) {
        if (min === undefined) {
          if (value >= value) min = max = value;
        } else {
          if (min > value) min = value;
          if (max < value) max = value;
        }
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null) {
        if (min === undefined) {
          if (value >= value) min = max = value;
        } else {
          if (min > value) min = value;
          if (max < value) max = value;
        }
      }
    }
  }
  return [min, max];
});


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-array/src/max.js":
/*!*****************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-array/src/max.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return max; });
function max(values, valueof) {
  let max;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null
          && (max < value || (max === undefined && value >= value))) {
        max = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (max < value || (max === undefined && value >= value))) {
        max = value;
      }
    }
  }
  return max;
}


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-array/src/min.js":
/*!*****************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-array/src/min.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return min; });
function min(values, valueof) {
  let min;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null
          && (min > value || (min === undefined && value >= value))) {
        min = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (min > value || (min === undefined && value >= value))) {
        min = value;
      }
    }
  }
  return min;
}


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-array/src/number.js":
/*!********************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-array/src/number.js ***!
  \********************************************************************/
/*! exports provided: default, numbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x === null ? NaN : +x;
});

function* numbers(values, valueof) {
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        yield value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        yield value;
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-array/src/quantile.js":
/*!**********************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-array/src/quantile.js ***!
  \**********************************************************************/
/*! exports provided: default, quantileSorted */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quantile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantileSorted", function() { return quantileSorted; });
/* harmony import */ var _max_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./max.js */ "./node_modules/encodable/node_modules/d3-array/src/max.js");
/* harmony import */ var _min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./min.js */ "./node_modules/encodable/node_modules/d3-array/src/min.js");
/* harmony import */ var _quickselect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quickselect.js */ "./node_modules/encodable/node_modules/d3-array/src/quickselect.js");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./number.js */ "./node_modules/encodable/node_modules/d3-array/src/number.js");





function quantile(values, p, valueof) {
  values = Float64Array.from(Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["numbers"])(values, valueof));
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return Object(_min_js__WEBPACK_IMPORTED_MODULE_1__["default"])(values);
  if (p >= 1) return Object(_max_js__WEBPACK_IMPORTED_MODULE_0__["default"])(values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = Object(_max_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_quickselect_js__WEBPACK_IMPORTED_MODULE_2__["default"])(values, i0).subarray(0, i0 + 1)),
      value1 = Object(_min_js__WEBPACK_IMPORTED_MODULE_1__["default"])(values.subarray(i0 + 1));
  return value0 + (value1 - value0) * (i - i0);
}

function quantileSorted(values, p, valueof = _number_js__WEBPACK_IMPORTED_MODULE_3__["default"]) {
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
}


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-array/src/quickselect.js":
/*!*************************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-array/src/quickselect.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quickselect; });
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/encodable/node_modules/d3-array/src/ascending.js");


// Based on https://github.com/mourner/quickselect
// ISC license, Copyright 2018 Vladimir Agafonkin.
function quickselect(array, k, left = 0, right = array.length - 1, compare = _ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  while (right > left) {
    if (right - left > 600) {
      const n = right - left + 1;
      const m = k - left + 1;
      const z = Math.log(n);
      const s = 0.5 * Math.exp(2 * z / 3);
      const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
      const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
      const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
      quickselect(array, k, newLeft, newRight, compare);
    }

    const t = array[k];
    let i = left;
    let j = right;

    swap(array, left, k);
    if (compare(array[right], t) > 0) swap(array, left, right);

    while (i < j) {
      swap(array, i, j), ++i, --j;
      while (compare(array[i], t) < 0) ++i;
      while (compare(array[j], t) > 0) --j;
    }

    if (compare(array[left], t) === 0) swap(array, left, j);
    else ++j, swap(array, j, right);

    if (j <= k) left = j + 1;
    if (k <= j) right = j - 1;
  }
  return array;
}

function swap(array, i, j) {
  const t = array[i];
  array[i] = array[j];
  array[j] = t;
}


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-array/src/range.js":
/*!*******************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-array/src/range.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
});


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-array/src/ticks.js":
/*!*******************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-array/src/ticks.js ***!
  \*******************************************************************/
/*! exports provided: default, tickIncrement, tickStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickIncrement", function() { return tickIncrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickStep", function() { return tickStep; });
var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

/* harmony default export */ __webpack_exports__["default"] = (function(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    let r0 = Math.round(start / step), r1 = Math.round(stop / step);
    if (r0 * step < start) ++r0;
    if (r1 * step > stop) --r1;
    ticks = new Array(n = r1 - r0 + 1);
    while (++i < n) ticks[i] = (r0 + i) * step;
  } else {
    step = -step;
    let r0 = Math.round(start * step), r1 = Math.round(stop * step);
    if (r0 / step < start) ++r0;
    if (r1 / step > stop) --r1;
    ticks = new Array(n = r1 - r0 + 1);
    while (++i < n) ticks[i] = (r0 + i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
});

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-interpolate/src/array.js":
/*!*************************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-interpolate/src/array.js ***!
  \*************************************************************************/
/*! exports provided: default, genericArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genericArray", function() { return genericArray; });
/* harmony import */ var _value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value.js */ "./node_modules/encodable/node_modules/d3-interpolate/src/value.js");
/* harmony import */ var _numberArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./numberArray.js */ "./node_modules/encodable/node_modules/d3-interpolate/src/numberArray.js");



/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return (Object(_numberArray_js__WEBPACK_IMPORTED_MODULE_1__["isNumberArray"])(b) ? _numberArray_js__WEBPACK_IMPORTED_MODULE_1__["default"] : genericArray)(a, b);
});

function genericArray(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = Object(_value_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-interpolate/src/basis.js":
/*!*************************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-interpolate/src/basis.js ***!
  \*************************************************************************/
/*! exports provided: basis, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basis", function() { return basis; });
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ __webpack_exports__["default"] = (function(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-interpolate/src/basisClosed.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-interpolate/src/basisClosed.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basis.js */ "./node_modules/encodable/node_modules/d3-interpolate/src/basis.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return Object(_basis_js__WEBPACK_IMPORTED_MODULE_0__["basis"])((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-interpolate/src/color.js":
/*!*************************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-interpolate/src/color.js ***!
  \*************************************************************************/
/*! exports provided: hue, gamma, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hue", function() { return hue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gamma", function() { return gamma; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return nogamma; });
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ "./node_modules/encodable/node_modules/d3-interpolate/src/constant.js");


function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
}


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-interpolate/src/constant.js":
/*!****************************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-interpolate/src/constant.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (x => () => x);


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-interpolate/src/cubehelix.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-interpolate/src/cubehelix.js ***!
  \*****************************************************************************/
/*! exports provided: default, cubehelixLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubehelixLong", function() { return cubehelixLong; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ "./node_modules/encodable/node_modules/d3-interpolate/src/color.js");



function cubehelix(hue) {
  return (function cubehelixGamma(y) {
    y = +y;

    function cubehelix(start, end) {
      var h = hue((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["cubehelix"])(start)).h, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["cubehelix"])(end)).h),
          s = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.s, end.s),
          l = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.l, end.l),
          opacity = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
      return function(t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }

    cubehelix.gamma = cubehelixGamma;

    return cubehelix;
  })(1);
}

/* harmony default export */ __webpack_exports__["default"] = (cubehelix(_color_js__WEBPACK_IMPORTED_MODULE_1__["hue"]));
var cubehelixLong = cubehelix(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-interpolate/src/date.js":
/*!************************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-interpolate/src/date.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var d = new Date;
  return a = +a, b = +b, function(t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
});


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-interpolate/src/hcl.js":
/*!***********************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-interpolate/src/hcl.js ***!
  \***********************************************************************/
/*! exports provided: default, hclLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hclLong", function() { return hclLong; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ "./node_modules/encodable/node_modules/d3-interpolate/src/color.js");



function hcl(hue) {
  return function(start, end) {
    var h = hue((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hcl"])(start)).h, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hcl"])(end)).h),
        c = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.c, end.c),
        l = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.l, end.l),
        opacity = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.c = c(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* harmony default export */ __webpack_exports__["default"] = (hcl(_color_js__WEBPACK_IMPORTED_MODULE_1__["hue"]));
var hclLong = hcl(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-interpolate/src/hsl.js":
/*!***********************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-interpolate/src/hsl.js ***!
  \***********************************************************************/
/*! exports provided: default, hslLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslLong", function() { return hslLong; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ "./node_modules/encodable/node_modules/d3-interpolate/src/color.js");



function hsl(hue) {
  return function(start, end) {
    var h = hue((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hsl"])(start)).h, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hsl"])(end)).h),
        s = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.s, end.s),
        l = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.l, end.l),
        opacity = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.s = s(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* harmony default export */ __webpack_exports__["default"] = (hsl(_color_js__WEBPACK_IMPORTED_MODULE_1__["hue"]));
var hslLong = hsl(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-interpolate/src/lab.js":
/*!***********************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-interpolate/src/lab.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return lab; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ "./node_modules/encodable/node_modules/d3-interpolate/src/color.js");



function lab(start, end) {
  var l = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["lab"])(start)).l, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["lab"])(end)).l),
      a = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.a, end.a),
      b = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.b, end.b),
      opacity = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
  return function(t) {
    start.l = l(t);
    start.a = a(t);
    start.b = b(t);
    start.opacity = opacity(t);
    return start + "";
  };
}


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-interpolate/src/number.js":
/*!**************************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-interpolate/src/number.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
});


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-interpolate/src/numberArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-interpolate/src/numberArray.js ***!
  \*******************************************************************************/
/*! exports provided: default, isNumberArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumberArray", function() { return isNumberArray; });
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0,
      c = b.slice(),
      i;
  return function(t) {
    for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
});

function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-interpolate/src/object.js":
/*!**************************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-interpolate/src/object.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value.js */ "./node_modules/encodable/node_modules/d3-interpolate/src/value.js");


/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = Object(_value_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
});


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-interpolate/src/rgb.js":
/*!***********************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-interpolate/src/rgb.js ***!
  \***********************************************************************/
/*! exports provided: default, rgbBasis, rgbBasisClosed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbBasis", function() { return rgbBasis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbBasisClosed", function() { return rgbBasisClosed; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basis.js */ "./node_modules/encodable/node_modules/d3-interpolate/src/basis.js");
/* harmony import */ var _basisClosed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basisClosed.js */ "./node_modules/encodable/node_modules/d3-interpolate/src/basisClosed.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color.js */ "./node_modules/encodable/node_modules/d3-interpolate/src/color.js");





/* harmony default export */ __webpack_exports__["default"] = ((function rgbGamma(y) {
  var color = Object(_color_js__WEBPACK_IMPORTED_MODULE_3__["gamma"])(y);

  function rgb(start, end) {
    var r = color((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["rgb"])(start)).r, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["rgb"])(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = Object(_color_js__WEBPACK_IMPORTED_MODULE_3__["default"])(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["rgb"])(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(_basis_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
var rgbBasisClosed = rgbSpline(_basisClosed_js__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-interpolate/src/round.js":
/*!*************************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-interpolate/src/round.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return a = +a, b = +b, function(t) {
    return Math.round(a * (1 - t) + b * t);
  };
});


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-interpolate/src/string.js":
/*!**************************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-interpolate/src/string.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.js */ "./node_modules/encodable/node_modules/d3-interpolate/src/number.js");


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
});


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-interpolate/src/value.js":
/*!*************************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-interpolate/src/value.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var _rgb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rgb.js */ "./node_modules/encodable/node_modules/d3-interpolate/src/rgb.js");
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array.js */ "./node_modules/encodable/node_modules/d3-interpolate/src/array.js");
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date.js */ "./node_modules/encodable/node_modules/d3-interpolate/src/date.js");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number.js */ "./node_modules/encodable/node_modules/d3-interpolate/src/number.js");
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./object.js */ "./node_modules/encodable/node_modules/d3-interpolate/src/object.js");
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./string.js */ "./node_modules/encodable/node_modules/d3-interpolate/src/string.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constant.js */ "./node_modules/encodable/node_modules/d3-interpolate/src/constant.js");
/* harmony import */ var _numberArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./numberArray.js */ "./node_modules/encodable/node_modules/d3-interpolate/src/numberArray.js");










/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? Object(_constant_js__WEBPACK_IMPORTED_MODULE_7__["default"])(b)
      : (t === "number" ? _number_js__WEBPACK_IMPORTED_MODULE_4__["default"]
      : t === "string" ? ((c = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["color"])(b)) ? (b = c, _rgb_js__WEBPACK_IMPORTED_MODULE_1__["default"]) : _string_js__WEBPACK_IMPORTED_MODULE_6__["default"])
      : b instanceof d3_color__WEBPACK_IMPORTED_MODULE_0__["color"] ? _rgb_js__WEBPACK_IMPORTED_MODULE_1__["default"]
      : b instanceof Date ? _date_js__WEBPACK_IMPORTED_MODULE_3__["default"]
      : Object(_numberArray_js__WEBPACK_IMPORTED_MODULE_8__["isNumberArray"])(b) ? _numberArray_js__WEBPACK_IMPORTED_MODULE_8__["default"]
      : Array.isArray(b) ? _array_js__WEBPACK_IMPORTED_MODULE_2__["genericArray"]
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? _object_js__WEBPACK_IMPORTED_MODULE_5__["default"]
      : _number_js__WEBPACK_IMPORTED_MODULE_4__["default"])(a, b);
});


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-scale/src/band.js":
/*!******************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-scale/src/band.js ***!
  \******************************************************************/
/*! exports provided: default, point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return band; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/encodable/node_modules/d3-array/src/range.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init.js */ "./node_modules/encodable/node_modules/d3-scale/src/init.js");
/* harmony import */ var _ordinal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ordinal.js */ "./node_modules/encodable/node_modules/d3-scale/src/ordinal.js");




function band() {
  var scale = Object(_ordinal_js__WEBPACK_IMPORTED_MODULE_2__["default"])().unknown(undefined),
      domain = scale.domain,
      ordinalRange = scale.range,
      r0 = 0,
      r1 = 1,
      step,
      bandwidth,
      round = false,
      paddingInner = 0,
      paddingOuter = 0,
      align = 0.5;

  delete scale.unknown;

  function rescale() {
    var n = domain().length,
        reverse = r1 < r0,
        start = reverse ? r1 : r0,
        stop = reverse ? r0 : r1;
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["default"])(n).map(function(i) { return start + step * i; });
    return ordinalRange(reverse ? values.reverse() : values);
  }

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.range = function(_) {
    return arguments.length ? ([r0, r1] = _, r0 = +r0, r1 = +r1, rescale()) : [r0, r1];
  };

  scale.rangeRound = function(_) {
    return [r0, r1] = _, r0 = +r0, r1 = +r1, round = true, rescale();
  };

  scale.bandwidth = function() {
    return bandwidth;
  };

  scale.step = function() {
    return step;
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };

  scale.padding = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
  };

  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
  };

  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
  };

  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function() {
    return band(domain(), [r0, r1])
        .round(round)
        .paddingInner(paddingInner)
        .paddingOuter(paddingOuter)
        .align(align);
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_1__["initRange"].apply(rescale(), arguments);
}

function pointish(scale) {
  var copy = scale.copy;

  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;

  scale.copy = function() {
    return pointish(copy());
  };

  return scale;
}

function point() {
  return pointish(band.apply(null, arguments).paddingInner(1));
}


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-scale/src/constant.js":
/*!**********************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-scale/src/constant.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return constants; });
function constants(x) {
  return function() {
    return x;
  };
}


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-scale/src/continuous.js":
/*!************************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-scale/src/continuous.js ***!
  \************************************************************************/
/*! exports provided: identity, copy, transformer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformer", function() { return transformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return continuous; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/encodable/node_modules/d3-array/src/bisect.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/encodable/node_modules/d3-interpolate/src/value.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/encodable/node_modules/d3-interpolate/src/number.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/encodable/node_modules/d3-interpolate/src/round.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constant.js */ "./node_modules/encodable/node_modules/d3-scale/src/constant.js");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./number.js */ "./node_modules/encodable/node_modules/d3-scale/src/number.js");





var unit = [0, 1];

function identity(x) {
  return x;
}

function normalize(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : Object(_constant_js__WEBPACK_IMPORTED_MODULE_4__["default"])(isNaN(b) ? NaN : 0.5);
}

function clamper(a, b) {
  var t;
  if (a > b) t = a, a = b, b = t;
  return function(x) { return Math.max(a, Math.min(b, x)); };
}

// normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
function bimap(domain, range, interpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
  else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range, interpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate(range[i], range[i + 1]);
  }

  return function(x) {
    var i = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["default"])(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp())
      .unknown(source.unknown());
}

function transformer() {
  var domain = unit,
      range = unit,
      interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["default"],
      transform,
      untransform,
      unknown,
      clamp = identity,
      piecewise,
      output,
      input;

  function rescale() {
    var n = Math.min(domain.length, range.length);
    if (clamp !== identity) clamp = clamper(domain[0], domain[n - 1]);
    piecewise = n > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));
  }

  scale.invert = function(y) {
    return clamp(untransform((input || (input = piecewise(range, domain.map(transform), d3_interpolate__WEBPACK_IMPORTED_MODULE_2__["default"])))(y)));
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_, _number_js__WEBPACK_IMPORTED_MODULE_5__["default"]), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = Array.from(_), interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_3__["default"], rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? true : identity, rescale()) : clamp !== identity;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}

function continuous() {
  return transformer()(identity, identity);
}


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-scale/src/init.js":
/*!******************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-scale/src/init.js ***!
  \******************************************************************/
/*! exports provided: initRange, initInterpolator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initRange", function() { return initRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initInterpolator", function() { return initInterpolator; });
function initRange(domain, range) {
  switch (arguments.length) {
    case 0: break;
    case 1: this.range(domain); break;
    default: this.range(range).domain(domain); break;
  }
  return this;
}

function initInterpolator(domain, interpolator) {
  switch (arguments.length) {
    case 0: break;
    case 1: {
      if (typeof domain === "function") this.interpolator(domain);
      else this.range(domain);
      break;
    }
    default: {
      this.domain(domain);
      if (typeof interpolator === "function") this.interpolator(interpolator);
      else this.range(interpolator);
      break;
    }
  }
  return this;
}


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-scale/src/linear.js":
/*!********************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-scale/src/linear.js ***!
  \********************************************************************/
/*! exports provided: linearish, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linearish", function() { return linearish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return linear; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/encodable/node_modules/d3-array/src/ticks.js");
/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuous.js */ "./node_modules/encodable/node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ "./node_modules/encodable/node_modules/d3-scale/src/init.js");
/* harmony import */ var _tickFormat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tickFormat.js */ "./node_modules/encodable/node_modules/d3-scale/src/tickFormat.js");





function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["default"])(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    var d = domain();
    return Object(_tickFormat_js__WEBPACK_IMPORTED_MODULE_3__["default"])(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain();
    var i0 = 0;
    var i1 = d.length - 1;
    var start = d[i0];
    var stop = d[i1];
    var prestep;
    var step;
    var maxIter = 10;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }
    
    while (maxIter-- > 0) {
      step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickIncrement"])(start, stop, count);
      if (step === prestep) {
        d[i0] = start
        d[i1] = stop
        return domain(d);
      } else if (step > 0) {
        start = Math.floor(start / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start = Math.ceil(start * step) / step;
        stop = Math.floor(stop * step) / step;
      } else {
        break;
      }
      prestep = step;
    }

    return scale;
  };

  return scale;
}

function linear() {
  var scale = Object(_continuous_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

  scale.copy = function() {
    return Object(_continuous_js__WEBPACK_IMPORTED_MODULE_1__["copy"])(scale, linear());
  };

  _init_js__WEBPACK_IMPORTED_MODULE_2__["initRange"].apply(scale, arguments);

  return linearish(scale);
}


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-scale/src/log.js":
/*!*****************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-scale/src/log.js ***!
  \*****************************************************************/
/*! exports provided: loggish, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loggish", function() { return loggish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return log; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/encodable/node_modules/d3-array/src/ticks.js");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-format */ "./node_modules/d3-format/src/index.js");
/* harmony import */ var _nice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nice.js */ "./node_modules/encodable/node_modules/d3-scale/src/nice.js");
/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./continuous.js */ "./node_modules/encodable/node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./init.js */ "./node_modules/encodable/node_modules/d3-scale/src/init.js");






function transformLog(x) {
  return Math.log(x);
}

function transformExp(x) {
  return Math.exp(x);
}

function transformLogn(x) {
  return -Math.log(-x);
}

function transformExpn(x) {
  return -Math.exp(-x);
}

function pow10(x) {
  return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}

function powp(base) {
  return base === 10 ? pow10
      : base === Math.E ? Math.exp
      : function(x) { return Math.pow(base, x); };
}

function logp(base) {
  return base === Math.E ? Math.log
      : base === 10 && Math.log10
      || base === 2 && Math.log2
      || (base = Math.log(base), function(x) { return Math.log(x) / base; });
}

function reflect(f) {
  return function(x) {
    return -f(-x);
  };
}

function loggish(transform) {
  var scale = transform(transformLog, transformExp),
      domain = scale.domain,
      base = 10,
      logs,
      pows;

  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) {
      logs = reflect(logs), pows = reflect(pows);
      transform(transformLogn, transformExpn);
    } else {
      transform(transformLog, transformExp);
    }
    return scale;
  }

  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.ticks = function(count) {
    var d = domain(),
        u = d[0],
        v = d[d.length - 1],
        r;

    if (r = v < u) i = u, u = v, v = i;

    var i = logs(u),
        j = logs(v),
        p,
        k,
        t,
        n = count == null ? 10 : +count,
        z = [];

    if (!(base % 1) && j - i < n) {
      i = Math.floor(i), j = Math.ceil(j);
      if (u > 0) for (; i <= j; ++i) {
        for (k = 1, p = pows(i); k < base; ++k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      } else for (; i <= j; ++i) {
        for (k = base - 1, p = pows(i); k >= 1; --k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
      if (z.length * 2 < n) z = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["default"])(u, v, n);
    } else {
      z = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["default"])(i, j, Math.min(j - i, n)).map(pows);
    }

    return r ? z.reverse() : z;
  };

  scale.tickFormat = function(count, specifier) {
    if (specifier == null) specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function") specifier = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["format"])(specifier);
    if (count === Infinity) return specifier;
    if (count == null) count = 10;
    var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
    return function(d) {
      var i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5) i *= base;
      return i <= k ? specifier(d) : "";
    };
  };

  scale.nice = function() {
    return domain(Object(_nice_js__WEBPACK_IMPORTED_MODULE_2__["default"])(domain(), {
      floor: function(x) { return pows(Math.floor(logs(x))); },
      ceil: function(x) { return pows(Math.ceil(logs(x))); }
    }));
  };

  return scale;
}

function log() {
  var scale = loggish(Object(_continuous_js__WEBPACK_IMPORTED_MODULE_3__["transformer"])()).domain([1, 10]);

  scale.copy = function() {
    return Object(_continuous_js__WEBPACK_IMPORTED_MODULE_3__["copy"])(scale, log()).base(scale.base());
  };

  _init_js__WEBPACK_IMPORTED_MODULE_4__["initRange"].apply(scale, arguments);

  return scale;
}


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-scale/src/nice.js":
/*!******************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-scale/src/nice.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return nice; });
function nice(domain, interval) {
  domain = domain.slice();

  var i0 = 0,
      i1 = domain.length - 1,
      x0 = domain[i0],
      x1 = domain[i1],
      t;

  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }

  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
}


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-scale/src/number.js":
/*!********************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-scale/src/number.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return number; });
function number(x) {
  return +x;
}


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-scale/src/ordinal.js":
/*!*********************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-scale/src/ordinal.js ***!
  \*********************************************************************/
/*! exports provided: implicit, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "implicit", function() { return implicit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ordinal; });
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init.js */ "./node_modules/encodable/node_modules/d3-scale/src/init.js");


const implicit = Symbol("implicit");

function ordinal() {
  var index = new Map(),
      domain = [],
      range = [],
      unknown = implicit;

  function scale(d) {
    var key = d + "", i = index.get(key);
    if (!i) {
      if (unknown !== implicit) return unknown;
      index.set(key, i = domain.push(d));
    }
    return range[(i - 1) % range.length];
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = new Map();
    for (const value of _) {
      const key = value + "";
      if (index.has(key)) continue;
      index.set(key, domain.push(value));
    }
    return scale;
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), scale) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return ordinal(domain, range).unknown(unknown);
  };

  _init_js__WEBPACK_IMPORTED_MODULE_0__["initRange"].apply(scale, arguments);

  return scale;
}


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-scale/src/pow.js":
/*!*****************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-scale/src/pow.js ***!
  \*****************************************************************/
/*! exports provided: powish, default, sqrt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "powish", function() { return powish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrt", function() { return sqrt; });
/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear.js */ "./node_modules/encodable/node_modules/d3-scale/src/linear.js");
/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuous.js */ "./node_modules/encodable/node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ "./node_modules/encodable/node_modules/d3-scale/src/init.js");




function transformPow(exponent) {
  return function(x) {
    return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
  };
}

function transformSqrt(x) {
  return x < 0 ? -Math.sqrt(-x) : Math.sqrt(x);
}

function transformSquare(x) {
  return x < 0 ? -x * x : x * x;
}

function powish(transform) {
  var scale = transform(_continuous_js__WEBPACK_IMPORTED_MODULE_1__["identity"], _continuous_js__WEBPACK_IMPORTED_MODULE_1__["identity"]),
      exponent = 1;

  function rescale() {
    return exponent === 1 ? transform(_continuous_js__WEBPACK_IMPORTED_MODULE_1__["identity"], _continuous_js__WEBPACK_IMPORTED_MODULE_1__["identity"])
        : exponent === 0.5 ? transform(transformSqrt, transformSquare)
        : transform(transformPow(exponent), transformPow(1 / exponent));
  }

  scale.exponent = function(_) {
    return arguments.length ? (exponent = +_, rescale()) : exponent;
  };

  return Object(_linear_js__WEBPACK_IMPORTED_MODULE_0__["linearish"])(scale);
}

function pow() {
  var scale = powish(Object(_continuous_js__WEBPACK_IMPORTED_MODULE_1__["transformer"])());

  scale.copy = function() {
    return Object(_continuous_js__WEBPACK_IMPORTED_MODULE_1__["copy"])(scale, pow()).exponent(scale.exponent());
  };

  _init_js__WEBPACK_IMPORTED_MODULE_2__["initRange"].apply(scale, arguments);

  return scale;
}

function sqrt() {
  return pow.apply(null, arguments).exponent(0.5);
}


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-scale/src/quantile.js":
/*!**********************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-scale/src/quantile.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quantile; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/encodable/node_modules/d3-array/src/quantile.js");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-array */ "./node_modules/encodable/node_modules/d3-array/src/bisect.js");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-array */ "./node_modules/encodable/node_modules/d3-array/src/ascending.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./init.js */ "./node_modules/encodable/node_modules/d3-scale/src/init.js");



function quantile() {
  var domain = [],
      range = [],
      thresholds = [],
      unknown;

  function rescale() {
    var i = 0, n = Math.max(1, range.length);
    thresholds = new Array(n - 1);
    while (++i < n) thresholds[i - 1] = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["quantileSorted"])(domain, i / n);
    return scale;
  }

  function scale(x) {
    return isNaN(x = +x) ? unknown : range[Object(d3_array__WEBPACK_IMPORTED_MODULE_1__["default"])(thresholds, x)];
  }

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN] : [
      i > 0 ? thresholds[i - 1] : domain[0],
      i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
    ];
  };

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (let d of _) if (d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(d3_array__WEBPACK_IMPORTED_MODULE_2__["default"]);
    return rescale();
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.quantiles = function() {
    return thresholds.slice();
  };

  scale.copy = function() {
    return quantile()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_3__["initRange"].apply(scale, arguments);
}


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-scale/src/quantize.js":
/*!**********************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-scale/src/quantize.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quantize; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/encodable/node_modules/d3-array/src/bisect.js");
/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linear.js */ "./node_modules/encodable/node_modules/d3-scale/src/linear.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ "./node_modules/encodable/node_modules/d3-scale/src/init.js");




function quantize() {
  var x0 = 0,
      x1 = 1,
      n = 1,
      domain = [0.5],
      range = [0, 1],
      unknown;

  function scale(x) {
    return x <= x ? range[Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["default"])(domain, x, 0, n)] : unknown;
  }

  function rescale() {
    var i = -1;
    domain = new Array(n);
    while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
    return scale;
  }

  scale.domain = function(_) {
    return arguments.length ? ([x0, x1] = _, x0 = +x0, x1 = +x1, rescale()) : [x0, x1];
  };

  scale.range = function(_) {
    return arguments.length ? (n = (range = Array.from(_)).length - 1, rescale()) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN]
        : i < 1 ? [x0, domain[0]]
        : i >= n ? [domain[n - 1], x1]
        : [domain[i - 1], domain[i]];
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : scale;
  };

  scale.thresholds = function() {
    return domain.slice();
  };

  scale.copy = function() {
    return quantize()
        .domain([x0, x1])
        .range(range)
        .unknown(unknown);
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_2__["initRange"].apply(Object(_linear_js__WEBPACK_IMPORTED_MODULE_1__["linearish"])(scale), arguments);
}


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-scale/src/symlog.js":
/*!********************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-scale/src/symlog.js ***!
  \********************************************************************/
/*! exports provided: symlogish, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symlogish", function() { return symlogish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symlog; });
/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear.js */ "./node_modules/encodable/node_modules/d3-scale/src/linear.js");
/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuous.js */ "./node_modules/encodable/node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ "./node_modules/encodable/node_modules/d3-scale/src/init.js");




function transformSymlog(c) {
  return function(x) {
    return Math.sign(x) * Math.log1p(Math.abs(x / c));
  };
}

function transformSymexp(c) {
  return function(x) {
    return Math.sign(x) * Math.expm1(Math.abs(x)) * c;
  };
}

function symlogish(transform) {
  var c = 1, scale = transform(transformSymlog(c), transformSymexp(c));

  scale.constant = function(_) {
    return arguments.length ? transform(transformSymlog(c = +_), transformSymexp(c)) : c;
  };

  return Object(_linear_js__WEBPACK_IMPORTED_MODULE_0__["linearish"])(scale);
}

function symlog() {
  var scale = symlogish(Object(_continuous_js__WEBPACK_IMPORTED_MODULE_1__["transformer"])());

  scale.copy = function() {
    return Object(_continuous_js__WEBPACK_IMPORTED_MODULE_1__["copy"])(scale, symlog()).constant(scale.constant());
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_2__["initRange"].apply(scale, arguments);
}


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-scale/src/threshold.js":
/*!***********************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-scale/src/threshold.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return threshold; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/encodable/node_modules/d3-array/src/bisect.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init.js */ "./node_modules/encodable/node_modules/d3-scale/src/init.js");



function threshold() {
  var domain = [0.5],
      range = [0, 1],
      unknown,
      n = 1;

  function scale(x) {
    return x <= x ? range[Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["default"])(domain, x, 0, n)] : unknown;
  }

  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return [domain[i - 1], domain[i]];
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return threshold()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_1__["initRange"].apply(scale, arguments);
}


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-scale/src/tickFormat.js":
/*!************************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-scale/src/tickFormat.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tickFormat; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/encodable/node_modules/d3-array/src/ticks.js");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-format */ "./node_modules/d3-format/src/index.js");



function tickFormat(start, stop, count, specifier) {
  var step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickStep"])(start, stop, count),
      precision;
  specifier = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["formatSpecifier"])(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["precisionPrefix"])(step, value))) specifier.precision = precision;
      return Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["formatPrefix"])(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["precisionRound"])(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["precisionFixed"])(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["format"])(specifier);
}


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-scale/src/time.js":
/*!******************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-scale/src/time.js ***!
  \******************************************************************/
/*! exports provided: calendar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendar", function() { return calendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return time; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/encodable/node_modules/d3-array/src/bisector.js");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-array */ "./node_modules/encodable/node_modules/d3-array/src/ticks.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-time */ "./node_modules/encodable/node_modules/d3-time/src/year.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-time */ "./node_modules/encodable/node_modules/d3-time/src/month.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-time */ "./node_modules/encodable/node_modules/d3-time/src/week.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-time */ "./node_modules/encodable/node_modules/d3-time/src/day.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-time */ "./node_modules/encodable/node_modules/d3-time/src/hour.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3-time */ "./node_modules/encodable/node_modules/d3-time/src/minute.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! d3-time */ "./node_modules/encodable/node_modules/d3-time/src/second.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! d3-time */ "./node_modules/encodable/node_modules/d3-time/src/millisecond.js");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! d3-time-format */ "./node_modules/d3-time-format/src/defaultLocale.js");
/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./continuous.js */ "./node_modules/encodable/node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./init.js */ "./node_modules/encodable/node_modules/d3-scale/src/init.js");
/* harmony import */ var _nice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nice.js */ "./node_modules/encodable/node_modules/d3-scale/src/nice.js");







var durationSecond = 1000,
    durationMinute = durationSecond * 60,
    durationHour = durationMinute * 60,
    durationDay = durationHour * 24,
    durationWeek = durationDay * 7,
    durationMonth = durationDay * 30,
    durationYear = durationDay * 365;

function date(t) {
  return new Date(t);
}

function number(t) {
  return t instanceof Date ? +t : +new Date(+t);
}

function calendar(year, month, week, day, hour, minute, second, millisecond, format) {
  var scale = Object(_continuous_js__WEBPACK_IMPORTED_MODULE_11__["default"])(),
      invert = scale.invert,
      domain = scale.domain;

  var formatMillisecond = format(".%L"),
      formatSecond = format(":%S"),
      formatMinute = format("%I:%M"),
      formatHour = format("%I %p"),
      formatDay = format("%a %d"),
      formatWeek = format("%b %d"),
      formatMonth = format("%B"),
      formatYear = format("%Y");

  var tickIntervals = [
    [second,  1,      durationSecond],
    [second,  5,  5 * durationSecond],
    [second, 15, 15 * durationSecond],
    [second, 30, 30 * durationSecond],
    [minute,  1,      durationMinute],
    [minute,  5,  5 * durationMinute],
    [minute, 15, 15 * durationMinute],
    [minute, 30, 30 * durationMinute],
    [  hour,  1,      durationHour  ],
    [  hour,  3,  3 * durationHour  ],
    [  hour,  6,  6 * durationHour  ],
    [  hour, 12, 12 * durationHour  ],
    [   day,  1,      durationDay   ],
    [   day,  2,  2 * durationDay   ],
    [  week,  1,      durationWeek  ],
    [ month,  1,      durationMonth ],
    [ month,  3,  3 * durationMonth ],
    [  year,  1,      durationYear  ]
  ];

  function tickFormat(date) {
    return (second(date) < date ? formatMillisecond
        : minute(date) < date ? formatSecond
        : hour(date) < date ? formatMinute
        : day(date) < date ? formatHour
        : month(date) < date ? (week(date) < date ? formatDay : formatWeek)
        : year(date) < date ? formatMonth
        : formatYear)(date);
  }

  function tickInterval(interval, start, stop) {
    if (interval == null) interval = 10;

    // If a desired tick count is specified, pick a reasonable tick interval
    // based on the extent of the domain and a rough estimate of tick size.
    // Otherwise, assume interval is already a time interval and use it.
    if (typeof interval === "number") {
      var target = Math.abs(stop - start) / interval,
          i = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["default"])(function(i) { return i[2]; }).right(tickIntervals, target),
          step;
      if (i === tickIntervals.length) {
        step = Object(d3_array__WEBPACK_IMPORTED_MODULE_1__["tickStep"])(start / durationYear, stop / durationYear, interval);
        interval = year;
      } else if (i) {
        i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
        step = i[1];
        interval = i[0];
      } else {
        step = Math.max(Object(d3_array__WEBPACK_IMPORTED_MODULE_1__["tickStep"])(start, stop, interval), 1);
        interval = millisecond;
      }
      return interval.every(step);
    }

    return interval;
  }

  scale.invert = function(y) {
    return new Date(invert(y));
  };

  scale.domain = function(_) {
    return arguments.length ? domain(Array.from(_, number)) : domain().map(date);
  };

  scale.ticks = function(interval) {
    var d = domain(),
        t0 = d[0],
        t1 = d[d.length - 1],
        r = t1 < t0,
        t;
    if (r) t = t0, t0 = t1, t1 = t;
    t = tickInterval(interval, t0, t1);
    t = t ? t.range(t0, t1 + 1) : []; // inclusive stop
    return r ? t.reverse() : t;
  };

  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat : format(specifier);
  };

  scale.nice = function(interval) {
    var d = domain();
    return (interval = tickInterval(interval, d[0], d[d.length - 1]))
        ? domain(Object(_nice_js__WEBPACK_IMPORTED_MODULE_13__["default"])(d, interval))
        : scale;
  };

  scale.copy = function() {
    return Object(_continuous_js__WEBPACK_IMPORTED_MODULE_11__["copy"])(scale, calendar(year, month, week, day, hour, minute, second, millisecond, format));
  };

  return scale;
}

function time() {
  return _init_js__WEBPACK_IMPORTED_MODULE_12__["initRange"].apply(calendar(d3_time__WEBPACK_IMPORTED_MODULE_2__["default"], d3_time__WEBPACK_IMPORTED_MODULE_3__["default"], d3_time__WEBPACK_IMPORTED_MODULE_4__["sunday"], d3_time__WEBPACK_IMPORTED_MODULE_5__["default"], d3_time__WEBPACK_IMPORTED_MODULE_6__["default"], d3_time__WEBPACK_IMPORTED_MODULE_7__["default"], d3_time__WEBPACK_IMPORTED_MODULE_8__["default"], d3_time__WEBPACK_IMPORTED_MODULE_9__["default"], d3_time_format__WEBPACK_IMPORTED_MODULE_10__["timeFormat"]).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]), arguments);
}


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-scale/src/utcTime.js":
/*!*********************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-scale/src/utcTime.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return utcTime; });
/* harmony import */ var _time_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time.js */ "./node_modules/encodable/node_modules/d3-scale/src/time.js");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-time-format */ "./node_modules/d3-time-format/src/defaultLocale.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-time */ "./node_modules/encodable/node_modules/d3-time/src/utcYear.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-time */ "./node_modules/encodable/node_modules/d3-time/src/utcMonth.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-time */ "./node_modules/encodable/node_modules/d3-time/src/utcWeek.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-time */ "./node_modules/encodable/node_modules/d3-time/src/utcDay.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-time */ "./node_modules/encodable/node_modules/d3-time/src/utcHour.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3-time */ "./node_modules/encodable/node_modules/d3-time/src/utcMinute.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! d3-time */ "./node_modules/encodable/node_modules/d3-time/src/second.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! d3-time */ "./node_modules/encodable/node_modules/d3-time/src/millisecond.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./init.js */ "./node_modules/encodable/node_modules/d3-scale/src/init.js");





function utcTime() {
  return _init_js__WEBPACK_IMPORTED_MODULE_10__["initRange"].apply(Object(_time_js__WEBPACK_IMPORTED_MODULE_0__["calendar"])(d3_time__WEBPACK_IMPORTED_MODULE_2__["default"], d3_time__WEBPACK_IMPORTED_MODULE_3__["default"], d3_time__WEBPACK_IMPORTED_MODULE_4__["utcSunday"], d3_time__WEBPACK_IMPORTED_MODULE_5__["default"], d3_time__WEBPACK_IMPORTED_MODULE_6__["default"], d3_time__WEBPACK_IMPORTED_MODULE_7__["default"], d3_time__WEBPACK_IMPORTED_MODULE_8__["default"], d3_time__WEBPACK_IMPORTED_MODULE_9__["default"], d3_time_format__WEBPACK_IMPORTED_MODULE_1__["utcFormat"]).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]), arguments);
}


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-time/src/day.js":
/*!****************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-time/src/day.js ***!
  \****************************************************************/
/*! exports provided: default, days */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "days", function() { return days; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/encodable/node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/encodable/node_modules/d3-time/src/duration.js");



var day = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
  date => date.setHours(0, 0, 0, 0),
  (date, step) => date.setDate(date.getDate() + step),
  (start, end) => (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]) / _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationDay"],
  date => date.getDate() - 1
);

/* harmony default export */ __webpack_exports__["default"] = (day);
var days = day.range;


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-time/src/duration.js":
/*!*********************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-time/src/duration.js ***!
  \*********************************************************************/
/*! exports provided: durationSecond, durationMinute, durationHour, durationDay, durationWeek */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationSecond", function() { return durationSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationMinute", function() { return durationMinute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationHour", function() { return durationHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationDay", function() { return durationDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationWeek", function() { return durationWeek; });
var durationSecond = 1e3;
var durationMinute = 6e4;
var durationHour = 36e5;
var durationDay = 864e5;
var durationWeek = 6048e5;


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-time/src/hour.js":
/*!*****************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-time/src/hour.js ***!
  \*****************************************************************/
/*! exports provided: default, hours */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hours", function() { return hours; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/encodable/node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/encodable/node_modules/d3-time/src/duration.js");



var hour = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationSecond"] - date.getMinutes() * _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]);
}, function(date, step) {
  date.setTime(+date + step * _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationHour"]);
}, function(start, end) {
  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationHour"];
}, function(date) {
  return date.getHours();
});

/* harmony default export */ __webpack_exports__["default"] = (hour);
var hours = hour.range;


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-time/src/interval.js":
/*!*********************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-time/src/interval.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return newInterval; });
var t0 = new Date,
    t1 = new Date;

function newInterval(floori, offseti, count, field) {

  function interval(date) {
    return floori(date = arguments.length === 0 ? new Date : new Date(+date)), date;
  }

  interval.floor = function(date) {
    return floori(date = new Date(+date)), date;
  };

  interval.ceil = function(date) {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };

  interval.round = function(date) {
    var d0 = interval(date),
        d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.offset = function(date, step) {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };

  interval.range = function(start, stop, step) {
    var range = [], previous;
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
    do range.push(previous = new Date(+start)), offseti(start, step), floori(start);
    while (previous < start && start < stop);
    return range;
  };

  interval.filter = function(test) {
    return newInterval(function(date) {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, function(date, step) {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty
        } else while (--step >= 0) {
          while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty
        }
      }
    });
  };

  if (count) {
    interval.count = function(start, end) {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };

    interval.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null
          : !(step > 1) ? interval
          : interval.filter(field
              ? function(d) { return field(d) % step === 0; }
              : function(d) { return interval.count(0, d) % step === 0; });
    };
  }

  return interval;
}


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-time/src/millisecond.js":
/*!************************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-time/src/millisecond.js ***!
  \************************************************************************/
/*! exports provided: default, milliseconds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "milliseconds", function() { return milliseconds; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/encodable/node_modules/d3-time/src/interval.js");


var millisecond = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function() {
  // noop
}, function(date, step) {
  date.setTime(+date + step);
}, function(start, end) {
  return end - start;
});

// An optimized implementation for this simple case.
millisecond.every = function(k) {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
    date.setTime(Math.floor(date / k) * k);
  }, function(date, step) {
    date.setTime(+date + step * k);
  }, function(start, end) {
    return (end - start) / k;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (millisecond);
var milliseconds = millisecond.range;


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-time/src/minute.js":
/*!*******************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-time/src/minute.js ***!
  \*******************************************************************/
/*! exports provided: default, minutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minutes", function() { return minutes; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/encodable/node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/encodable/node_modules/d3-time/src/duration.js");



var minute = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationSecond"]);
}, function(date, step) {
  date.setTime(+date + step * _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]);
}, function(start, end) {
  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationMinute"];
}, function(date) {
  return date.getMinutes();
});

/* harmony default export */ __webpack_exports__["default"] = (minute);
var minutes = minute.range;


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-time/src/month.js":
/*!******************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-time/src/month.js ***!
  \******************************************************************/
/*! exports provided: default, months */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "months", function() { return months; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/encodable/node_modules/d3-time/src/interval.js");


var month = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setMonth(date.getMonth() + step);
}, function(start, end) {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, function(date) {
  return date.getMonth();
});

/* harmony default export */ __webpack_exports__["default"] = (month);
var months = month.range;


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-time/src/second.js":
/*!*******************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-time/src/second.js ***!
  \*******************************************************************/
/*! exports provided: default, seconds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seconds", function() { return seconds; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/encodable/node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/encodable/node_modules/d3-time/src/duration.js");



var second = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setTime(date - date.getMilliseconds());
}, function(date, step) {
  date.setTime(+date + step * _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationSecond"]);
}, function(start, end) {
  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationSecond"];
}, function(date) {
  return date.getUTCSeconds();
});

/* harmony default export */ __webpack_exports__["default"] = (second);
var seconds = second.range;


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-time/src/utcDay.js":
/*!*******************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-time/src/utcDay.js ***!
  \*******************************************************************/
/*! exports provided: default, utcDays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcDays", function() { return utcDays; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/encodable/node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/encodable/node_modules/d3-time/src/duration.js");



var utcDay = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCDate(date.getUTCDate() + step);
}, function(start, end) {
  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationDay"];
}, function(date) {
  return date.getUTCDate() - 1;
});

/* harmony default export */ __webpack_exports__["default"] = (utcDay);
var utcDays = utcDay.range;


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-time/src/utcHour.js":
/*!********************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-time/src/utcHour.js ***!
  \********************************************************************/
/*! exports provided: default, utcHours */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcHours", function() { return utcHours; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/encodable/node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/encodable/node_modules/d3-time/src/duration.js");



var utcHour = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setUTCMinutes(0, 0, 0);
}, function(date, step) {
  date.setTime(+date + step * _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationHour"]);
}, function(start, end) {
  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationHour"];
}, function(date) {
  return date.getUTCHours();
});

/* harmony default export */ __webpack_exports__["default"] = (utcHour);
var utcHours = utcHour.range;


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-time/src/utcMinute.js":
/*!**********************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-time/src/utcMinute.js ***!
  \**********************************************************************/
/*! exports provided: default, utcMinutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcMinutes", function() { return utcMinutes; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/encodable/node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/encodable/node_modules/d3-time/src/duration.js");



var utcMinute = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setUTCSeconds(0, 0);
}, function(date, step) {
  date.setTime(+date + step * _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]);
}, function(start, end) {
  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationMinute"];
}, function(date) {
  return date.getUTCMinutes();
});

/* harmony default export */ __webpack_exports__["default"] = (utcMinute);
var utcMinutes = utcMinute.range;


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-time/src/utcMonth.js":
/*!*********************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-time/src/utcMonth.js ***!
  \*********************************************************************/
/*! exports provided: default, utcMonths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcMonths", function() { return utcMonths; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/encodable/node_modules/d3-time/src/interval.js");


var utcMonth = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCMonth(date.getUTCMonth() + step);
}, function(start, end) {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, function(date) {
  return date.getUTCMonth();
});

/* harmony default export */ __webpack_exports__["default"] = (utcMonth);
var utcMonths = utcMonth.range;


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-time/src/utcWeek.js":
/*!********************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-time/src/utcWeek.js ***!
  \********************************************************************/
/*! exports provided: utcSunday, utcMonday, utcTuesday, utcWednesday, utcThursday, utcFriday, utcSaturday, utcSundays, utcMondays, utcTuesdays, utcWednesdays, utcThursdays, utcFridays, utcSaturdays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcSunday", function() { return utcSunday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcMonday", function() { return utcMonday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcTuesday", function() { return utcTuesday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcWednesday", function() { return utcWednesday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcThursday", function() { return utcThursday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcFriday", function() { return utcFriday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcSaturday", function() { return utcSaturday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcSundays", function() { return utcSundays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcMondays", function() { return utcMondays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcTuesdays", function() { return utcTuesdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcWednesdays", function() { return utcWednesdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcThursdays", function() { return utcThursdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcFridays", function() { return utcFridays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcSaturdays", function() { return utcSaturdays; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/encodable/node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/encodable/node_modules/d3-time/src/duration.js");



function utcWeekday(i) {
  return Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, function(start, end) {
    return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationWeek"];
  });
}

var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);

var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-time/src/utcYear.js":
/*!********************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-time/src/utcYear.js ***!
  \********************************************************************/
/*! exports provided: default, utcYears */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcYears", function() { return utcYears; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/encodable/node_modules/d3-time/src/interval.js");


var utcYear = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, function(start, end) {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, function(date) {
  return date.getUTCFullYear();
});

// An optimized implementation for this simple case.
utcYear.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step * k);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (utcYear);
var utcYears = utcYear.range;


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-time/src/week.js":
/*!*****************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-time/src/week.js ***!
  \*****************************************************************/
/*! exports provided: sunday, monday, tuesday, wednesday, thursday, friday, saturday, sundays, mondays, tuesdays, wednesdays, thursdays, fridays, saturdays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sunday", function() { return sunday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monday", function() { return monday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuesday", function() { return tuesday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wednesday", function() { return wednesday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thursday", function() { return thursday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "friday", function() { return friday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saturday", function() { return saturday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sundays", function() { return sundays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mondays", function() { return mondays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuesdays", function() { return tuesdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wednesdays", function() { return wednesdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thursdays", function() { return thursdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fridays", function() { return fridays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saturdays", function() { return saturdays; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/encodable/node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/encodable/node_modules/d3-time/src/duration.js");



function weekday(i) {
  return Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setDate(date.getDate() + step * 7);
  }, function(start, end) {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]) / _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationWeek"];
  });
}

var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);

var sundays = sunday.range;
var mondays = monday.range;
var tuesdays = tuesday.range;
var wednesdays = wednesday.range;
var thursdays = thursday.range;
var fridays = friday.range;
var saturdays = saturday.range;


/***/ }),

/***/ "./node_modules/encodable/node_modules/d3-time/src/year.js":
/*!*****************************************************************!*\
  !*** ./node_modules/encodable/node_modules/d3-time/src/year.js ***!
  \*****************************************************************/
/*! exports provided: default, years */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "years", function() { return years; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/encodable/node_modules/d3-time/src/interval.js");


var year = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setFullYear(date.getFullYear() + step);
}, function(start, end) {
  return end.getFullYear() - start.getFullYear();
}, function(date) {
  return date.getFullYear();
});

// An optimized implementation for this simple case.
year.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setFullYear(date.getFullYear() + step * k);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (year);
var years = year.range;


/***/ }),

/***/ "./node_modules/lodash.get/index.js":
/*!******************************************!*\
  !*** ./node_modules/lodash.get/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

}]);
//# sourceMappingURL=21.9ed865ea.chunk.js.map
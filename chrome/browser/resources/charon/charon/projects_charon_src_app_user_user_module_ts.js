(self["webpackChunkcharon"] = self["webpackChunkcharon"] || []).push([["projects_charon_src_app_user_user_module_ts"],{

/***/ 34101:
/*!*********************************************!*\
  !*** ./node_modules/dijkstrajs/dijkstra.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


/******************************************************************************
 * Created 2008-08-19.
 *
 * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
 *
 * Copyright (C) 2008
 *   Wyatt Baldwin <self@wyattbaldwin.com>
 *   All rights reserved
 *
 * Licensed under the MIT license.
 *
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *****************************************************************************/
var dijkstra = {
  single_source_shortest_paths: function(graph, s, d) {
    // Predecessor map for each node that has been encountered.
    // node ID => predecessor node ID
    var predecessors = {};

    // Costs of shortest paths from s to all nodes encountered.
    // node ID => cost
    var costs = {};
    costs[s] = 0;

    // Costs of shortest paths from s to all nodes encountered; differs from
    // `costs` in that it provides easy access to the node that currently has
    // the known shortest path from s.
    // XXX: Do we actually need both `costs` and `open`?
    var open = dijkstra.PriorityQueue.make();
    open.push(s, 0);

    var closest,
        u, v,
        cost_of_s_to_u,
        adjacent_nodes,
        cost_of_e,
        cost_of_s_to_u_plus_cost_of_e,
        cost_of_s_to_v,
        first_visit;
    while (!open.empty()) {
      // In the nodes remaining in graph that have a known cost from s,
      // find the node, u, that currently has the shortest path from s.
      closest = open.pop();
      u = closest.value;
      cost_of_s_to_u = closest.cost;

      // Get nodes adjacent to u...
      adjacent_nodes = graph[u] || {};

      // ...and explore the edges that connect u to those nodes, updating
      // the cost of the shortest paths to any or all of those nodes as
      // necessary. v is the node across the current edge from u.
      for (v in adjacent_nodes) {
        if (adjacent_nodes.hasOwnProperty(v)) {
          // Get the cost of the edge running from u to v.
          cost_of_e = adjacent_nodes[v];

          // Cost of s to u plus the cost of u to v across e--this is *a*
          // cost from s to v that may or may not be less than the current
          // known cost to v.
          cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;

          // If we haven't visited v yet OR if the current known cost from s to
          // v is greater than the new cost we just found (cost of s to u plus
          // cost of u to v across e), update v's cost in the cost list and
          // update v's predecessor in the predecessor list (it's now u).
          cost_of_s_to_v = costs[v];
          first_visit = (typeof costs[v] === 'undefined');
          if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
            costs[v] = cost_of_s_to_u_plus_cost_of_e;
            open.push(v, cost_of_s_to_u_plus_cost_of_e);
            predecessors[v] = u;
          }
        }
      }
    }

    if (typeof d !== 'undefined' && typeof costs[d] === 'undefined') {
      var msg = ['Could not find a path from ', s, ' to ', d, '.'].join('');
      throw new Error(msg);
    }

    return predecessors;
  },

  extract_shortest_path_from_predecessor_list: function(predecessors, d) {
    var nodes = [];
    var u = d;
    var predecessor;
    while (u) {
      nodes.push(u);
      predecessor = predecessors[u];
      u = predecessors[u];
    }
    nodes.reverse();
    return nodes;
  },

  find_path: function(graph, s, d) {
    var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
    return dijkstra.extract_shortest_path_from_predecessor_list(
      predecessors, d);
  },

  /**
   * A very naive priority queue implementation.
   */
  PriorityQueue: {
    make: function (opts) {
      var T = dijkstra.PriorityQueue,
          t = {},
          key;
      opts = opts || {};
      for (key in T) {
        if (T.hasOwnProperty(key)) {
          t[key] = T[key];
        }
      }
      t.queue = [];
      t.sorter = opts.sorter || T.default_sorter;
      return t;
    },

    default_sorter: function (a, b) {
      return a.cost - b.cost;
    },

    /**
     * Add a new item to the queue and ensure the highest priority element
     * is at the front of the queue.
     */
    push: function (value, cost) {
      var item = {value: value, cost: cost};
      this.queue.push(item);
      this.queue.sort(this.sorter);
    },

    /**
     * Return the highest priority element in the queue.
     */
    pop: function () {
      return this.queue.shift();
    },

    empty: function () {
      return this.queue.length === 0;
    }
  }
};


// node.js module exports
if (true) {
  module.exports = dijkstra;
}


/***/ }),

/***/ 84896:
/*!*******************************************!*\
  !*** ./node_modules/encode-utf8/index.js ***!
  \*******************************************/
/***/ ((module) => {

"use strict";


module.exports = function encodeUtf8 (input) {
  var result = []
  var size = input.length

  for (var index = 0; index < size; index++) {
    var point = input.charCodeAt(index)

    if (point >= 0xD800 && point <= 0xDBFF && size > index + 1) {
      var second = input.charCodeAt(index + 1)

      if (second >= 0xDC00 && second <= 0xDFFF) {
        // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        point = (point - 0xD800) * 0x400 + second - 0xDC00 + 0x10000
        index += 1
      }
    }

    // US-ASCII
    if (point < 0x80) {
      result.push(point)
      continue
    }

    // 2-byte UTF-8
    if (point < 0x800) {
      result.push((point >> 6) | 192)
      result.push((point & 63) | 128)
      continue
    }

    // 3-byte UTF-8
    if (point < 0xD800 || (point >= 0xE000 && point < 0x10000)) {
      result.push((point >> 12) | 224)
      result.push(((point >> 6) & 63) | 128)
      result.push((point & 63) | 128)
      continue
    }

    // 4-byte UTF-8
    if (point >= 0x10000 && point <= 0x10FFFF) {
      result.push((point >> 18) | 240)
      result.push(((point >> 12) & 63) | 128)
      result.push(((point >> 6) & 63) | 128)
      result.push((point & 63) | 128)
      continue
    }

    // Invalid character
    result.push(0xEF, 0xBF, 0xBD)
  }

  return new Uint8Array(result).buffer
}


/***/ }),

/***/ 17988:
/*!********************************************!*\
  !*** ./node_modules/qrcode/lib/browser.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


const canPromise = __webpack_require__(/*! ./can-promise */ 88969)

const QRCode = __webpack_require__(/*! ./core/qrcode */ 5666)
const CanvasRenderer = __webpack_require__(/*! ./renderer/canvas */ 71041)
const SvgRenderer = __webpack_require__(/*! ./renderer/svg-tag.js */ 59817)

function renderCanvas (renderFunc, canvas, text, opts, cb) {
  const args = [].slice.call(arguments, 1)
  const argsNum = args.length
  const isLastArgCb = typeof args[argsNum - 1] === 'function'

  if (!isLastArgCb && !canPromise()) {
    throw new Error('Callback required as last argument')
  }

  if (isLastArgCb) {
    if (argsNum < 2) {
      throw new Error('Too few arguments provided')
    }

    if (argsNum === 2) {
      cb = text
      text = canvas
      canvas = opts = undefined
    } else if (argsNum === 3) {
      if (canvas.getContext && typeof cb === 'undefined') {
        cb = opts
        opts = undefined
      } else {
        cb = opts
        opts = text
        text = canvas
        canvas = undefined
      }
    }
  } else {
    if (argsNum < 1) {
      throw new Error('Too few arguments provided')
    }

    if (argsNum === 1) {
      text = canvas
      canvas = opts = undefined
    } else if (argsNum === 2 && !canvas.getContext) {
      opts = text
      text = canvas
      canvas = undefined
    }

    return new Promise(function (resolve, reject) {
      try {
        const data = QRCode.create(text, opts)
        resolve(renderFunc(data, canvas, opts))
      } catch (e) {
        reject(e)
      }
    })
  }

  try {
    const data = QRCode.create(text, opts)
    cb(null, renderFunc(data, canvas, opts))
  } catch (e) {
    cb(e)
  }
}

exports.create = QRCode.create
exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render)
exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL)

// only svg for now.
exports.toString = renderCanvas.bind(null, function (data, _, opts) {
  return SvgRenderer.render(data, opts)
})


/***/ }),

/***/ 88969:
/*!************************************************!*\
  !*** ./node_modules/qrcode/lib/can-promise.js ***!
  \************************************************/
/***/ ((module) => {

// can-promise has a crash in some versions of react native that dont have
// standard global objects
// https://github.com/soldair/node-qrcode/issues/157

module.exports = function () {
  return typeof Promise === 'function' && Promise.prototype && Promise.prototype.then
}


/***/ }),

/***/ 51840:
/*!***********************************************************!*\
  !*** ./node_modules/qrcode/lib/core/alignment-pattern.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * Alignment pattern are fixed reference pattern in defined positions
 * in a matrix symbology, which enables the decode software to re-synchronise
 * the coordinate mapping of the image modules in the event of moderate amounts
 * of distortion of the image.
 *
 * Alignment patterns are present only in QR Code symbols of version 2 or larger
 * and their number depends on the symbol version.
 */

const getSymbolSize = (__webpack_require__(/*! ./utils */ 51052).getSymbolSize)

/**
 * Calculate the row/column coordinates of the center module of each alignment pattern
 * for the specified QR Code version.
 *
 * The alignment patterns are positioned symmetrically on either side of the diagonal
 * running from the top left corner of the symbol to the bottom right corner.
 *
 * Since positions are simmetrical only half of the coordinates are returned.
 * Each item of the array will represent in turn the x and y coordinate.
 * @see {@link getPositions}
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinate
 */
exports.getRowColCoords = function getRowColCoords (version) {
  if (version === 1) return []

  const posCount = Math.floor(version / 7) + 2
  const size = getSymbolSize(version)
  const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2
  const positions = [size - 7] // Last coord is always (size - 7)

  for (let i = 1; i < posCount - 1; i++) {
    positions[i] = positions[i - 1] - intervals
  }

  positions.push(6) // First coord is always 6

  return positions.reverse()
}

/**
 * Returns an array containing the positions of each alignment pattern.
 * Each array's element represent the center point of the pattern as (x, y) coordinates
 *
 * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
 * and filtering out the items that overlaps with finder pattern
 *
 * @example
 * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
 * The alignment patterns, therefore, are to be centered on (row, column)
 * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
 * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
 * and are not therefore used for alignment patterns.
 *
 * let pos = getPositions(7)
 * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
exports.getPositions = function getPositions (version) {
  const coords = []
  const pos = exports.getRowColCoords(version)
  const posLength = pos.length

  for (let i = 0; i < posLength; i++) {
    for (let j = 0; j < posLength; j++) {
      // Skip if position is occupied by finder patterns
      if ((i === 0 && j === 0) || // top-left
          (i === 0 && j === posLength - 1) || // bottom-left
          (i === posLength - 1 && j === 0)) { // top-right
        continue
      }

      coords.push([pos[i], pos[j]])
    }
  }

  return coords
}


/***/ }),

/***/ 70242:
/*!***********************************************************!*\
  !*** ./node_modules/qrcode/lib/core/alphanumeric-data.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Mode = __webpack_require__(/*! ./mode */ 63044)

/**
 * Array of characters available in alphanumeric mode
 *
 * As per QR Code specification, to each character
 * is assigned a value from 0 to 44 which in this case coincides
 * with the array index
 *
 * @type {Array}
 */
const ALPHA_NUM_CHARS = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  ' ', '$', '%', '*', '+', '-', '.', '/', ':'
]

function AlphanumericData (data) {
  this.mode = Mode.ALPHANUMERIC
  this.data = data
}

AlphanumericData.getBitsLength = function getBitsLength (length) {
  return 11 * Math.floor(length / 2) + 6 * (length % 2)
}

AlphanumericData.prototype.getLength = function getLength () {
  return this.data.length
}

AlphanumericData.prototype.getBitsLength = function getBitsLength () {
  return AlphanumericData.getBitsLength(this.data.length)
}

AlphanumericData.prototype.write = function write (bitBuffer) {
  let i

  // Input data characters are divided into groups of two characters
  // and encoded as 11-bit binary codes.
  for (i = 0; i + 2 <= this.data.length; i += 2) {
    // The character value of the first character is multiplied by 45
    let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45

    // The character value of the second digit is added to the product
    value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1])

    // The sum is then stored as 11-bit binary number
    bitBuffer.put(value, 11)
  }

  // If the number of input data characters is not a multiple of two,
  // the character value of the final character is encoded as a 6-bit binary number.
  if (this.data.length % 2) {
    bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6)
  }
}

module.exports = AlphanumericData


/***/ }),

/***/ 10987:
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/bit-buffer.js ***!
  \****************************************************/
/***/ ((module) => {

function BitBuffer () {
  this.buffer = []
  this.length = 0
}

BitBuffer.prototype = {

  get: function (index) {
    const bufIndex = Math.floor(index / 8)
    return ((this.buffer[bufIndex] >>> (7 - index % 8)) & 1) === 1
  },

  put: function (num, length) {
    for (let i = 0; i < length; i++) {
      this.putBit(((num >>> (length - i - 1)) & 1) === 1)
    }
  },

  getLengthInBits: function () {
    return this.length
  },

  putBit: function (bit) {
    const bufIndex = Math.floor(this.length / 8)
    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0)
    }

    if (bit) {
      this.buffer[bufIndex] |= (0x80 >>> (this.length % 8))
    }

    this.length++
  }
}

module.exports = BitBuffer


/***/ }),

/***/ 74988:
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/bit-matrix.js ***!
  \****************************************************/
/***/ ((module) => {

/**
 * Helper class to handle QR Code symbol modules
 *
 * @param {Number} size Symbol size
 */
function BitMatrix (size) {
  if (!size || size < 1) {
    throw new Error('BitMatrix size must be defined and greater than 0')
  }

  this.size = size
  this.data = new Uint8Array(size * size)
  this.reservedBit = new Uint8Array(size * size)
}

/**
 * Set bit value at specified location
 * If reserved flag is set, this bit will be ignored during masking process
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 * @param {Boolean} reserved
 */
BitMatrix.prototype.set = function (row, col, value, reserved) {
  const index = row * this.size + col
  this.data[index] = value
  if (reserved) this.reservedBit[index] = true
}

/**
 * Returns bit value at specified location
 *
 * @param  {Number}  row
 * @param  {Number}  col
 * @return {Boolean}
 */
BitMatrix.prototype.get = function (row, col) {
  return this.data[row * this.size + col]
}

/**
 * Applies xor operator at specified location
 * (used during masking process)
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 */
BitMatrix.prototype.xor = function (row, col, value) {
  this.data[row * this.size + col] ^= value
}

/**
 * Check if bit at specified location is reserved
 *
 * @param {Number}   row
 * @param {Number}   col
 * @return {Boolean}
 */
BitMatrix.prototype.isReserved = function (row, col) {
  return this.reservedBit[row * this.size + col]
}

module.exports = BitMatrix


/***/ }),

/***/ 80100:
/*!***************************************************!*\
  !*** ./node_modules/qrcode/lib/core/byte-data.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const encodeUtf8 = __webpack_require__(/*! encode-utf8 */ 84896)
const Mode = __webpack_require__(/*! ./mode */ 63044)

function ByteData (data) {
  this.mode = Mode.BYTE
  if (typeof (data) === 'string') {
    data = encodeUtf8(data)
  }
  this.data = new Uint8Array(data)
}

ByteData.getBitsLength = function getBitsLength (length) {
  return length * 8
}

ByteData.prototype.getLength = function getLength () {
  return this.data.length
}

ByteData.prototype.getBitsLength = function getBitsLength () {
  return ByteData.getBitsLength(this.data.length)
}

ByteData.prototype.write = function (bitBuffer) {
  for (let i = 0, l = this.data.length; i < l; i++) {
    bitBuffer.put(this.data[i], 8)
  }
}

module.exports = ByteData


/***/ }),

/***/ 99298:
/*!***************************************************************!*\
  !*** ./node_modules/qrcode/lib/core/error-correction-code.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const ECLevel = __webpack_require__(/*! ./error-correction-level */ 3145)

const EC_BLOCKS_TABLE = [
// L  M  Q  H
  1, 1, 1, 1,
  1, 1, 1, 1,
  1, 1, 2, 2,
  1, 2, 2, 4,
  1, 2, 4, 4,
  2, 4, 4, 4,
  2, 4, 6, 5,
  2, 4, 6, 6,
  2, 5, 8, 8,
  4, 5, 8, 8,
  4, 5, 8, 11,
  4, 8, 10, 11,
  4, 9, 12, 16,
  4, 9, 16, 16,
  6, 10, 12, 18,
  6, 10, 17, 16,
  6, 11, 16, 19,
  6, 13, 18, 21,
  7, 14, 21, 25,
  8, 16, 20, 25,
  8, 17, 23, 25,
  9, 17, 23, 34,
  9, 18, 25, 30,
  10, 20, 27, 32,
  12, 21, 29, 35,
  12, 23, 34, 37,
  12, 25, 34, 40,
  13, 26, 35, 42,
  14, 28, 38, 45,
  15, 29, 40, 48,
  16, 31, 43, 51,
  17, 33, 45, 54,
  18, 35, 48, 57,
  19, 37, 51, 60,
  19, 38, 53, 63,
  20, 40, 56, 66,
  21, 43, 59, 70,
  22, 45, 62, 74,
  24, 47, 65, 77,
  25, 49, 68, 81
]

const EC_CODEWORDS_TABLE = [
// L  M  Q  H
  7, 10, 13, 17,
  10, 16, 22, 28,
  15, 26, 36, 44,
  20, 36, 52, 64,
  26, 48, 72, 88,
  36, 64, 96, 112,
  40, 72, 108, 130,
  48, 88, 132, 156,
  60, 110, 160, 192,
  72, 130, 192, 224,
  80, 150, 224, 264,
  96, 176, 260, 308,
  104, 198, 288, 352,
  120, 216, 320, 384,
  132, 240, 360, 432,
  144, 280, 408, 480,
  168, 308, 448, 532,
  180, 338, 504, 588,
  196, 364, 546, 650,
  224, 416, 600, 700,
  224, 442, 644, 750,
  252, 476, 690, 816,
  270, 504, 750, 900,
  300, 560, 810, 960,
  312, 588, 870, 1050,
  336, 644, 952, 1110,
  360, 700, 1020, 1200,
  390, 728, 1050, 1260,
  420, 784, 1140, 1350,
  450, 812, 1200, 1440,
  480, 868, 1290, 1530,
  510, 924, 1350, 1620,
  540, 980, 1440, 1710,
  570, 1036, 1530, 1800,
  570, 1064, 1590, 1890,
  600, 1120, 1680, 1980,
  630, 1204, 1770, 2100,
  660, 1260, 1860, 2220,
  720, 1316, 1950, 2310,
  750, 1372, 2040, 2430
]

/**
 * Returns the number of error correction block that the QR Code should contain
 * for the specified version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction blocks
 */
exports.getBlocksCount = function getBlocksCount (version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel.L:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 0]
    case ECLevel.M:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 1]
    case ECLevel.Q:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 2]
    case ECLevel.H:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 3]
    default:
      return undefined
  }
}

/**
 * Returns the number of error correction codewords to use for the specified
 * version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction codewords
 */
exports.getTotalCodewordsCount = function getTotalCodewordsCount (version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel.L:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0]
    case ECLevel.M:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1]
    case ECLevel.Q:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2]
    case ECLevel.H:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3]
    default:
      return undefined
  }
}


/***/ }),

/***/ 3145:
/*!****************************************************************!*\
  !*** ./node_modules/qrcode/lib/core/error-correction-level.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

exports.L = { bit: 1 }
exports.M = { bit: 0 }
exports.Q = { bit: 3 }
exports.H = { bit: 2 }

function fromString (string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string')
  }

  const lcStr = string.toLowerCase()

  switch (lcStr) {
    case 'l':
    case 'low':
      return exports.L

    case 'm':
    case 'medium':
      return exports.M

    case 'q':
    case 'quartile':
      return exports.Q

    case 'h':
    case 'high':
      return exports.H

    default:
      throw new Error('Unknown EC Level: ' + string)
  }
}

exports.isValid = function isValid (level) {
  return level && typeof level.bit !== 'undefined' &&
    level.bit >= 0 && level.bit < 4
}

exports.from = function from (value, defaultValue) {
  if (exports.isValid(value)) {
    return value
  }

  try {
    return fromString(value)
  } catch (e) {
    return defaultValue
  }
}


/***/ }),

/***/ 28012:
/*!********************************************************!*\
  !*** ./node_modules/qrcode/lib/core/finder-pattern.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const getSymbolSize = (__webpack_require__(/*! ./utils */ 51052).getSymbolSize)
const FINDER_PATTERN_SIZE = 7

/**
 * Returns an array containing the positions of each finder pattern.
 * Each array's element represent the top-left point of the pattern as (x, y) coordinates
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
exports.getPositions = function getPositions (version) {
  const size = getSymbolSize(version)

  return [
    // top-left
    [0, 0],
    // top-right
    [size - FINDER_PATTERN_SIZE, 0],
    // bottom-left
    [0, size - FINDER_PATTERN_SIZE]
  ]
}


/***/ }),

/***/ 10290:
/*!*****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/format-info.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(/*! ./utils */ 51052)

const G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0)
const G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1)
const G15_BCH = Utils.getBCHDigit(G15)

/**
 * Returns format information with relative error correction bits
 *
 * The format information is a 15-bit sequence containing 5 data bits,
 * with 10 error correction bits calculated using the (15, 5) BCH code.
 *
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Number} mask                 Mask pattern
 * @return {Number}                      Encoded format information bits
 */
exports.getEncodedBits = function getEncodedBits (errorCorrectionLevel, mask) {
  const data = ((errorCorrectionLevel.bit << 3) | mask)
  let d = data << 10

  while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
    d ^= (G15 << (Utils.getBCHDigit(d) - G15_BCH))
  }

  // xor final data with mask pattern in order to ensure that
  // no combination of Error Correction Level and data mask pattern
  // will result in an all-zero data string
  return ((data << 10) | d) ^ G15_MASK
}


/***/ }),

/***/ 46044:
/*!******************************************************!*\
  !*** ./node_modules/qrcode/lib/core/galois-field.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

const EXP_TABLE = new Uint8Array(512)
const LOG_TABLE = new Uint8Array(256)
/**
 * Precompute the log and anti-log tables for faster computation later
 *
 * For each possible value in the galois field 2^8, we will pre-compute
 * the logarithm and anti-logarithm (exponential) of this value
 *
 * ref {@link https://en.wikiversity.org/wiki/Reed%E2%80%93Solomon_codes_for_coders#Introduction_to_mathematical_fields}
 */
;(function initTables () {
  let x = 1
  for (let i = 0; i < 255; i++) {
    EXP_TABLE[i] = x
    LOG_TABLE[x] = i

    x <<= 1 // multiply by 2

    // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
    // This means that when a number is 256 or larger, it should be XORed with 0x11D.
    if (x & 0x100) { // similar to x >= 256, but a lot faster (because 0x100 == 256)
      x ^= 0x11D
    }
  }

  // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
  // stay inside the bounds (because we will mainly use this table for the multiplication of
  // two GF numbers, no more).
  // @see {@link mul}
  for (let i = 255; i < 512; i++) {
    EXP_TABLE[i] = EXP_TABLE[i - 255]
  }
}())

/**
 * Returns log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
exports.log = function log (n) {
  if (n < 1) throw new Error('log(' + n + ')')
  return LOG_TABLE[n]
}

/**
 * Returns anti-log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
exports.exp = function exp (n) {
  return EXP_TABLE[n]
}

/**
 * Multiplies two number inside Galois Field
 *
 * @param  {Number} x
 * @param  {Number} y
 * @return {Number}
 */
exports.mul = function mul (x, y) {
  if (x === 0 || y === 0) return 0

  // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
  // @see {@link initTables}
  return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]]
}


/***/ }),

/***/ 57777:
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/kanji-data.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Mode = __webpack_require__(/*! ./mode */ 63044)
const Utils = __webpack_require__(/*! ./utils */ 51052)

function KanjiData (data) {
  this.mode = Mode.KANJI
  this.data = data
}

KanjiData.getBitsLength = function getBitsLength (length) {
  return length * 13
}

KanjiData.prototype.getLength = function getLength () {
  return this.data.length
}

KanjiData.prototype.getBitsLength = function getBitsLength () {
  return KanjiData.getBitsLength(this.data.length)
}

KanjiData.prototype.write = function (bitBuffer) {
  let i

  // In the Shift JIS system, Kanji characters are represented by a two byte combination.
  // These byte values are shifted from the JIS X 0208 values.
  // JIS X 0208 gives details of the shift coded representation.
  for (i = 0; i < this.data.length; i++) {
    let value = Utils.toSJIS(this.data[i])

    // For characters with Shift JIS values from 0x8140 to 0x9FFC:
    if (value >= 0x8140 && value <= 0x9FFC) {
      // Subtract 0x8140 from Shift JIS value
      value -= 0x8140

    // For characters with Shift JIS values from 0xE040 to 0xEBBF
    } else if (value >= 0xE040 && value <= 0xEBBF) {
      // Subtract 0xC140 from Shift JIS value
      value -= 0xC140
    } else {
      throw new Error(
        'Invalid SJIS character: ' + this.data[i] + '\n' +
        'Make sure your charset is UTF-8')
    }

    // Multiply most significant byte of result by 0xC0
    // and add least significant byte to product
    value = (((value >>> 8) & 0xff) * 0xC0) + (value & 0xff)

    // Convert result to a 13-bit binary string
    bitBuffer.put(value, 13)
  }
}

module.exports = KanjiData


/***/ }),

/***/ 28371:
/*!******************************************************!*\
  !*** ./node_modules/qrcode/lib/core/mask-pattern.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

/**
 * Data mask pattern reference
 * @type {Object}
 */
exports.Patterns = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7
}

/**
 * Weighted penalty scores for the undesirable features
 * @type {Object}
 */
const PenaltyScores = {
  N1: 3,
  N2: 3,
  N3: 40,
  N4: 10
}

/**
 * Check if mask pattern value is valid
 *
 * @param  {Number}  mask    Mask pattern
 * @return {Boolean}         true if valid, false otherwise
 */
exports.isValid = function isValid (mask) {
  return mask != null && mask !== '' && !isNaN(mask) && mask >= 0 && mask <= 7
}

/**
 * Returns mask pattern from a value.
 * If value is not valid, returns undefined
 *
 * @param  {Number|String} value        Mask pattern value
 * @return {Number}                     Valid mask pattern or undefined
 */
exports.from = function from (value) {
  return exports.isValid(value) ? parseInt(value, 10) : undefined
}

/**
* Find adjacent modules in row/column with the same color
* and assign a penalty value.
*
* Points: N1 + i
* i is the amount by which the number of adjacent modules of the same color exceeds 5
*/
exports.getPenaltyN1 = function getPenaltyN1 (data) {
  const size = data.size
  let points = 0
  let sameCountCol = 0
  let sameCountRow = 0
  let lastCol = null
  let lastRow = null

  for (let row = 0; row < size; row++) {
    sameCountCol = sameCountRow = 0
    lastCol = lastRow = null

    for (let col = 0; col < size; col++) {
      let module = data.get(row, col)
      if (module === lastCol) {
        sameCountCol++
      } else {
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5)
        lastCol = module
        sameCountCol = 1
      }

      module = data.get(col, row)
      if (module === lastRow) {
        sameCountRow++
      } else {
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5)
        lastRow = module
        sameCountRow = 1
      }
    }

    if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5)
    if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5)
  }

  return points
}

/**
 * Find 2x2 blocks with the same color and assign a penalty value
 *
 * Points: N2 * (m - 1) * (n - 1)
 */
exports.getPenaltyN2 = function getPenaltyN2 (data) {
  const size = data.size
  let points = 0

  for (let row = 0; row < size - 1; row++) {
    for (let col = 0; col < size - 1; col++) {
      const last = data.get(row, col) +
        data.get(row, col + 1) +
        data.get(row + 1, col) +
        data.get(row + 1, col + 1)

      if (last === 4 || last === 0) points++
    }
  }

  return points * PenaltyScores.N2
}

/**
 * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
 * preceded or followed by light area 4 modules wide
 *
 * Points: N3 * number of pattern found
 */
exports.getPenaltyN3 = function getPenaltyN3 (data) {
  const size = data.size
  let points = 0
  let bitsCol = 0
  let bitsRow = 0

  for (let row = 0; row < size; row++) {
    bitsCol = bitsRow = 0
    for (let col = 0; col < size; col++) {
      bitsCol = ((bitsCol << 1) & 0x7FF) | data.get(row, col)
      if (col >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D)) points++

      bitsRow = ((bitsRow << 1) & 0x7FF) | data.get(col, row)
      if (col >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D)) points++
    }
  }

  return points * PenaltyScores.N3
}

/**
 * Calculate proportion of dark modules in entire symbol
 *
 * Points: N4 * k
 *
 * k is the rating of the deviation of the proportion of dark modules
 * in the symbol from 50% in steps of 5%
 */
exports.getPenaltyN4 = function getPenaltyN4 (data) {
  let darkCount = 0
  const modulesCount = data.data.length

  for (let i = 0; i < modulesCount; i++) darkCount += data.data[i]

  const k = Math.abs(Math.ceil((darkCount * 100 / modulesCount) / 5) - 10)

  return k * PenaltyScores.N4
}

/**
 * Return mask value at given position
 *
 * @param  {Number} maskPattern Pattern reference value
 * @param  {Number} i           Row
 * @param  {Number} j           Column
 * @return {Boolean}            Mask value
 */
function getMaskAt (maskPattern, i, j) {
  switch (maskPattern) {
    case exports.Patterns.PATTERN000: return (i + j) % 2 === 0
    case exports.Patterns.PATTERN001: return i % 2 === 0
    case exports.Patterns.PATTERN010: return j % 3 === 0
    case exports.Patterns.PATTERN011: return (i + j) % 3 === 0
    case exports.Patterns.PATTERN100: return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0
    case exports.Patterns.PATTERN101: return (i * j) % 2 + (i * j) % 3 === 0
    case exports.Patterns.PATTERN110: return ((i * j) % 2 + (i * j) % 3) % 2 === 0
    case exports.Patterns.PATTERN111: return ((i * j) % 3 + (i + j) % 2) % 2 === 0

    default: throw new Error('bad maskPattern:' + maskPattern)
  }
}

/**
 * Apply a mask pattern to a BitMatrix
 *
 * @param  {Number}    pattern Pattern reference number
 * @param  {BitMatrix} data    BitMatrix data
 */
exports.applyMask = function applyMask (pattern, data) {
  const size = data.size

  for (let col = 0; col < size; col++) {
    for (let row = 0; row < size; row++) {
      if (data.isReserved(row, col)) continue
      data.xor(row, col, getMaskAt(pattern, row, col))
    }
  }
}

/**
 * Returns the best mask pattern for data
 *
 * @param  {BitMatrix} data
 * @return {Number} Mask pattern reference number
 */
exports.getBestMask = function getBestMask (data, setupFormatFunc) {
  const numPatterns = Object.keys(exports.Patterns).length
  let bestPattern = 0
  let lowerPenalty = Infinity

  for (let p = 0; p < numPatterns; p++) {
    setupFormatFunc(p)
    exports.applyMask(p, data)

    // Calculate penalty
    const penalty =
      exports.getPenaltyN1(data) +
      exports.getPenaltyN2(data) +
      exports.getPenaltyN3(data) +
      exports.getPenaltyN4(data)

    // Undo previously applied mask
    exports.applyMask(p, data)

    if (penalty < lowerPenalty) {
      lowerPenalty = penalty
      bestPattern = p
    }
  }

  return bestPattern
}


/***/ }),

/***/ 63044:
/*!**********************************************!*\
  !*** ./node_modules/qrcode/lib/core/mode.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const VersionCheck = __webpack_require__(/*! ./version-check */ 23822)
const Regex = __webpack_require__(/*! ./regex */ 82507)

/**
 * Numeric mode encodes data from the decimal digit set (0 - 9)
 * (byte values 30HEX to 39HEX).
 * Normally, 3 data characters are represented by 10 bits.
 *
 * @type {Object}
 */
exports.NUMERIC = {
  id: 'Numeric',
  bit: 1 << 0,
  ccBits: [10, 12, 14]
}

/**
 * Alphanumeric mode encodes data from a set of 45 characters,
 * i.e. 10 numeric digits (0 - 9),
 *      26 alphabetic characters (A - Z),
 *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
 * Normally, two input characters are represented by 11 bits.
 *
 * @type {Object}
 */
exports.ALPHANUMERIC = {
  id: 'Alphanumeric',
  bit: 1 << 1,
  ccBits: [9, 11, 13]
}

/**
 * In byte mode, data is encoded at 8 bits per character.
 *
 * @type {Object}
 */
exports.BYTE = {
  id: 'Byte',
  bit: 1 << 2,
  ccBits: [8, 16, 16]
}

/**
 * The Kanji mode efficiently encodes Kanji characters in accordance with
 * the Shift JIS system based on JIS X 0208.
 * The Shift JIS values are shifted from the JIS X 0208 values.
 * JIS X 0208 gives details of the shift coded representation.
 * Each two-byte character value is compacted to a 13-bit binary codeword.
 *
 * @type {Object}
 */
exports.KANJI = {
  id: 'Kanji',
  bit: 1 << 3,
  ccBits: [8, 10, 12]
}

/**
 * Mixed mode will contain a sequences of data in a combination of any of
 * the modes described above
 *
 * @type {Object}
 */
exports.MIXED = {
  bit: -1
}

/**
 * Returns the number of bits needed to store the data length
 * according to QR Code specifications.
 *
 * @param  {Mode}   mode    Data mode
 * @param  {Number} version QR Code version
 * @return {Number}         Number of bits
 */
exports.getCharCountIndicator = function getCharCountIndicator (mode, version) {
  if (!mode.ccBits) throw new Error('Invalid mode: ' + mode)

  if (!VersionCheck.isValid(version)) {
    throw new Error('Invalid version: ' + version)
  }

  if (version >= 1 && version < 10) return mode.ccBits[0]
  else if (version < 27) return mode.ccBits[1]
  return mode.ccBits[2]
}

/**
 * Returns the most efficient mode to store the specified data
 *
 * @param  {String} dataStr Input data string
 * @return {Mode}           Best mode
 */
exports.getBestModeForData = function getBestModeForData (dataStr) {
  if (Regex.testNumeric(dataStr)) return exports.NUMERIC
  else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC
  else if (Regex.testKanji(dataStr)) return exports.KANJI
  else return exports.BYTE
}

/**
 * Return mode name as string
 *
 * @param {Mode} mode Mode object
 * @returns {String}  Mode name
 */
exports.toString = function toString (mode) {
  if (mode && mode.id) return mode.id
  throw new Error('Invalid mode')
}

/**
 * Check if input param is a valid mode object
 *
 * @param   {Mode}    mode Mode object
 * @returns {Boolean} True if valid mode, false otherwise
 */
exports.isValid = function isValid (mode) {
  return mode && mode.bit && mode.ccBits
}

/**
 * Get mode object from its name
 *
 * @param   {String} string Mode name
 * @returns {Mode}          Mode object
 */
function fromString (string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string')
  }

  const lcStr = string.toLowerCase()

  switch (lcStr) {
    case 'numeric':
      return exports.NUMERIC
    case 'alphanumeric':
      return exports.ALPHANUMERIC
    case 'kanji':
      return exports.KANJI
    case 'byte':
      return exports.BYTE
    default:
      throw new Error('Unknown mode: ' + string)
  }
}

/**
 * Returns mode from a value.
 * If value is not a valid mode, returns defaultValue
 *
 * @param  {Mode|String} value        Encoding mode
 * @param  {Mode}        defaultValue Fallback value
 * @return {Mode}                     Encoding mode
 */
exports.from = function from (value, defaultValue) {
  if (exports.isValid(value)) {
    return value
  }

  try {
    return fromString(value)
  } catch (e) {
    return defaultValue
  }
}


/***/ }),

/***/ 99889:
/*!******************************************************!*\
  !*** ./node_modules/qrcode/lib/core/numeric-data.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Mode = __webpack_require__(/*! ./mode */ 63044)

function NumericData (data) {
  this.mode = Mode.NUMERIC
  this.data = data.toString()
}

NumericData.getBitsLength = function getBitsLength (length) {
  return 10 * Math.floor(length / 3) + ((length % 3) ? ((length % 3) * 3 + 1) : 0)
}

NumericData.prototype.getLength = function getLength () {
  return this.data.length
}

NumericData.prototype.getBitsLength = function getBitsLength () {
  return NumericData.getBitsLength(this.data.length)
}

NumericData.prototype.write = function write (bitBuffer) {
  let i, group, value

  // The input data string is divided into groups of three digits,
  // and each group is converted to its 10-bit binary equivalent.
  for (i = 0; i + 3 <= this.data.length; i += 3) {
    group = this.data.substr(i, 3)
    value = parseInt(group, 10)

    bitBuffer.put(value, 10)
  }

  // If the number of input digits is not an exact multiple of three,
  // the final one or two digits are converted to 4 or 7 bits respectively.
  const remainingNum = this.data.length - i
  if (remainingNum > 0) {
    group = this.data.substr(i)
    value = parseInt(group, 10)

    bitBuffer.put(value, remainingNum * 3 + 1)
  }
}

module.exports = NumericData


/***/ }),

/***/ 41035:
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/core/polynomial.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const GF = __webpack_require__(/*! ./galois-field */ 46044)

/**
 * Multiplies two polynomials inside Galois Field
 *
 * @param  {Uint8Array} p1 Polynomial
 * @param  {Uint8Array} p2 Polynomial
 * @return {Uint8Array}    Product of p1 and p2
 */
exports.mul = function mul (p1, p2) {
  const coeff = new Uint8Array(p1.length + p2.length - 1)

  for (let i = 0; i < p1.length; i++) {
    for (let j = 0; j < p2.length; j++) {
      coeff[i + j] ^= GF.mul(p1[i], p2[j])
    }
  }

  return coeff
}

/**
 * Calculate the remainder of polynomials division
 *
 * @param  {Uint8Array} divident Polynomial
 * @param  {Uint8Array} divisor  Polynomial
 * @return {Uint8Array}          Remainder
 */
exports.mod = function mod (divident, divisor) {
  let result = new Uint8Array(divident)

  while ((result.length - divisor.length) >= 0) {
    const coeff = result[0]

    for (let i = 0; i < divisor.length; i++) {
      result[i] ^= GF.mul(divisor[i], coeff)
    }

    // remove all zeros from buffer head
    let offset = 0
    while (offset < result.length && result[offset] === 0) offset++
    result = result.slice(offset)
  }

  return result
}

/**
 * Generate an irreducible generator polynomial of specified degree
 * (used by Reed-Solomon encoder)
 *
 * @param  {Number} degree Degree of the generator polynomial
 * @return {Uint8Array}    Buffer containing polynomial coefficients
 */
exports.generateECPolynomial = function generateECPolynomial (degree) {
  let poly = new Uint8Array([1])
  for (let i = 0; i < degree; i++) {
    poly = exports.mul(poly, new Uint8Array([1, GF.exp(i)]))
  }

  return poly
}


/***/ }),

/***/ 5666:
/*!************************************************!*\
  !*** ./node_modules/qrcode/lib/core/qrcode.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(/*! ./utils */ 51052)
const ECLevel = __webpack_require__(/*! ./error-correction-level */ 3145)
const BitBuffer = __webpack_require__(/*! ./bit-buffer */ 10987)
const BitMatrix = __webpack_require__(/*! ./bit-matrix */ 74988)
const AlignmentPattern = __webpack_require__(/*! ./alignment-pattern */ 51840)
const FinderPattern = __webpack_require__(/*! ./finder-pattern */ 28012)
const MaskPattern = __webpack_require__(/*! ./mask-pattern */ 28371)
const ECCode = __webpack_require__(/*! ./error-correction-code */ 99298)
const ReedSolomonEncoder = __webpack_require__(/*! ./reed-solomon-encoder */ 4284)
const Version = __webpack_require__(/*! ./version */ 84435)
const FormatInfo = __webpack_require__(/*! ./format-info */ 10290)
const Mode = __webpack_require__(/*! ./mode */ 63044)
const Segments = __webpack_require__(/*! ./segments */ 75414)

/**
 * QRCode for JavaScript
 *
 * modified by Ryan Day for nodejs support
 * Copyright (c) 2011 Ryan Day
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
*/

/**
 * Add finder patterns bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupFinderPattern (matrix, version) {
  const size = matrix.size
  const pos = FinderPattern.getPositions(version)

  for (let i = 0; i < pos.length; i++) {
    const row = pos[i][0]
    const col = pos[i][1]

    for (let r = -1; r <= 7; r++) {
      if (row + r <= -1 || size <= row + r) continue

      for (let c = -1; c <= 7; c++) {
        if (col + c <= -1 || size <= col + c) continue

        if ((r >= 0 && r <= 6 && (c === 0 || c === 6)) ||
          (c >= 0 && c <= 6 && (r === 0 || r === 6)) ||
          (r >= 2 && r <= 4 && c >= 2 && c <= 4)) {
          matrix.set(row + r, col + c, true, true)
        } else {
          matrix.set(row + r, col + c, false, true)
        }
      }
    }
  }
}

/**
 * Add timing pattern bits to matrix
 *
 * Note: this function must be called before {@link setupAlignmentPattern}
 *
 * @param  {BitMatrix} matrix Modules matrix
 */
function setupTimingPattern (matrix) {
  const size = matrix.size

  for (let r = 8; r < size - 8; r++) {
    const value = r % 2 === 0
    matrix.set(r, 6, value, true)
    matrix.set(6, r, value, true)
  }
}

/**
 * Add alignment patterns bits to matrix
 *
 * Note: this function must be called after {@link setupTimingPattern}
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupAlignmentPattern (matrix, version) {
  const pos = AlignmentPattern.getPositions(version)

  for (let i = 0; i < pos.length; i++) {
    const row = pos[i][0]
    const col = pos[i][1]

    for (let r = -2; r <= 2; r++) {
      for (let c = -2; c <= 2; c++) {
        if (r === -2 || r === 2 || c === -2 || c === 2 ||
          (r === 0 && c === 0)) {
          matrix.set(row + r, col + c, true, true)
        } else {
          matrix.set(row + r, col + c, false, true)
        }
      }
    }
  }
}

/**
 * Add version info bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupVersionInfo (matrix, version) {
  const size = matrix.size
  const bits = Version.getEncodedBits(version)
  let row, col, mod

  for (let i = 0; i < 18; i++) {
    row = Math.floor(i / 3)
    col = i % 3 + size - 8 - 3
    mod = ((bits >> i) & 1) === 1

    matrix.set(row, col, mod, true)
    matrix.set(col, row, mod, true)
  }
}

/**
 * Add format info bits to matrix
 *
 * @param  {BitMatrix} matrix               Modules matrix
 * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
 * @param  {Number}    maskPattern          Mask pattern reference value
 */
function setupFormatInfo (matrix, errorCorrectionLevel, maskPattern) {
  const size = matrix.size
  const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern)
  let i, mod

  for (i = 0; i < 15; i++) {
    mod = ((bits >> i) & 1) === 1

    // vertical
    if (i < 6) {
      matrix.set(i, 8, mod, true)
    } else if (i < 8) {
      matrix.set(i + 1, 8, mod, true)
    } else {
      matrix.set(size - 15 + i, 8, mod, true)
    }

    // horizontal
    if (i < 8) {
      matrix.set(8, size - i - 1, mod, true)
    } else if (i < 9) {
      matrix.set(8, 15 - i - 1 + 1, mod, true)
    } else {
      matrix.set(8, 15 - i - 1, mod, true)
    }
  }

  // fixed module
  matrix.set(size - 8, 8, 1, true)
}

/**
 * Add encoded data bits to matrix
 *
 * @param  {BitMatrix}  matrix Modules matrix
 * @param  {Uint8Array} data   Data codewords
 */
function setupData (matrix, data) {
  const size = matrix.size
  let inc = -1
  let row = size - 1
  let bitIndex = 7
  let byteIndex = 0

  for (let col = size - 1; col > 0; col -= 2) {
    if (col === 6) col--

    while (true) {
      for (let c = 0; c < 2; c++) {
        if (!matrix.isReserved(row, col - c)) {
          let dark = false

          if (byteIndex < data.length) {
            dark = (((data[byteIndex] >>> bitIndex) & 1) === 1)
          }

          matrix.set(row, col - c, dark)
          bitIndex--

          if (bitIndex === -1) {
            byteIndex++
            bitIndex = 7
          }
        }
      }

      row += inc

      if (row < 0 || size <= row) {
        row -= inc
        inc = -inc
        break
      }
    }
  }
}

/**
 * Create encoded codewords from data input
 *
 * @param  {Number}   version              QR Code version
 * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
 * @param  {ByteData} data                 Data input
 * @return {Uint8Array}                    Buffer containing encoded codewords
 */
function createData (version, errorCorrectionLevel, segments) {
  // Prepare data buffer
  const buffer = new BitBuffer()

  segments.forEach(function (data) {
    // prefix data with mode indicator (4 bits)
    buffer.put(data.mode.bit, 4)

    // Prefix data with character count indicator.
    // The character count indicator is a string of bits that represents the
    // number of characters that are being encoded.
    // The character count indicator must be placed after the mode indicator
    // and must be a certain number of bits long, depending on the QR version
    // and data mode
    // @see {@link Mode.getCharCountIndicator}.
    buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version))

    // add binary data sequence to buffer
    data.write(buffer)
  })

  // Calculate required number of bits
  const totalCodewords = Utils.getSymbolTotalCodewords(version)
  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)
  const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8

  // Add a terminator.
  // If the bit string is shorter than the total number of required bits,
  // a terminator of up to four 0s must be added to the right side of the string.
  // If the bit string is more than four bits shorter than the required number of bits,
  // add four 0s to the end.
  if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
    buffer.put(0, 4)
  }

  // If the bit string is fewer than four bits shorter, add only the number of 0s that
  // are needed to reach the required number of bits.

  // After adding the terminator, if the number of bits in the string is not a multiple of 8,
  // pad the string on the right with 0s to make the string's length a multiple of 8.
  while (buffer.getLengthInBits() % 8 !== 0) {
    buffer.putBit(0)
  }

  // Add pad bytes if the string is still shorter than the total number of required bits.
  // Extend the buffer to fill the data capacity of the symbol corresponding to
  // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
  // and 00010001 (0x11) alternately.
  const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8
  for (let i = 0; i < remainingByte; i++) {
    buffer.put(i % 2 ? 0x11 : 0xEC, 8)
  }

  return createCodewords(buffer, version, errorCorrectionLevel)
}

/**
 * Encode input data with Reed-Solomon and return codewords with
 * relative error correction bits
 *
 * @param  {BitBuffer} bitBuffer            Data to encode
 * @param  {Number}    version              QR Code version
 * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
 * @return {Uint8Array}                     Buffer containing encoded codewords
 */
function createCodewords (bitBuffer, version, errorCorrectionLevel) {
  // Total codewords for this QR code version (Data + Error correction)
  const totalCodewords = Utils.getSymbolTotalCodewords(version)

  // Total number of error correction codewords
  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)

  // Total number of data codewords
  const dataTotalCodewords = totalCodewords - ecTotalCodewords

  // Total number of blocks
  const ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel)

  // Calculate how many blocks each group should contain
  const blocksInGroup2 = totalCodewords % ecTotalBlocks
  const blocksInGroup1 = ecTotalBlocks - blocksInGroup2

  const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks)

  const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks)
  const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1

  // Number of EC codewords is the same for both groups
  const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1

  // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount
  const rs = new ReedSolomonEncoder(ecCount)

  let offset = 0
  const dcData = new Array(ecTotalBlocks)
  const ecData = new Array(ecTotalBlocks)
  let maxDataSize = 0
  const buffer = new Uint8Array(bitBuffer.buffer)

  // Divide the buffer into the required number of blocks
  for (let b = 0; b < ecTotalBlocks; b++) {
    const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2

    // extract a block of data from buffer
    dcData[b] = buffer.slice(offset, offset + dataSize)

    // Calculate EC codewords for this data block
    ecData[b] = rs.encode(dcData[b])

    offset += dataSize
    maxDataSize = Math.max(maxDataSize, dataSize)
  }

  // Create final data
  // Interleave the data and error correction codewords from each block
  const data = new Uint8Array(totalCodewords)
  let index = 0
  let i, r

  // Add data codewords
  for (i = 0; i < maxDataSize; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      if (i < dcData[r].length) {
        data[index++] = dcData[r][i]
      }
    }
  }

  // Apped EC codewords
  for (i = 0; i < ecCount; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      data[index++] = ecData[r][i]
    }
  }

  return data
}

/**
 * Build QR Code symbol
 *
 * @param  {String} data                 Input string
 * @param  {Number} version              QR Code version
 * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
 * @param  {MaskPattern} maskPattern     Mask pattern
 * @return {Object}                      Object containing symbol data
 */
function createSymbol (data, version, errorCorrectionLevel, maskPattern) {
  let segments

  if (Array.isArray(data)) {
    segments = Segments.fromArray(data)
  } else if (typeof data === 'string') {
    let estimatedVersion = version

    if (!estimatedVersion) {
      const rawSegments = Segments.rawSplit(data)

      // Estimate best version that can contain raw splitted segments
      estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel)
    }

    // Build optimized segments
    // If estimated version is undefined, try with the highest version
    segments = Segments.fromString(data, estimatedVersion || 40)
  } else {
    throw new Error('Invalid data')
  }

  // Get the min version that can contain data
  const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel)

  // If no version is found, data cannot be stored
  if (!bestVersion) {
    throw new Error('The amount of data is too big to be stored in a QR Code')
  }

  // If not specified, use min version as default
  if (!version) {
    version = bestVersion

  // Check if the specified version can contain the data
  } else if (version < bestVersion) {
    throw new Error('\n' +
      'The chosen QR Code version cannot contain this amount of data.\n' +
      'Minimum version required to store current data is: ' + bestVersion + '.\n'
    )
  }

  const dataBits = createData(version, errorCorrectionLevel, segments)

  // Allocate matrix buffer
  const moduleCount = Utils.getSymbolSize(version)
  const modules = new BitMatrix(moduleCount)

  // Add function modules
  setupFinderPattern(modules, version)
  setupTimingPattern(modules)
  setupAlignmentPattern(modules, version)

  // Add temporary dummy bits for format info just to set them as reserved.
  // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}
  // since the masking operation must be performed only on the encoding region.
  // These blocks will be replaced with correct values later in code.
  setupFormatInfo(modules, errorCorrectionLevel, 0)

  if (version >= 7) {
    setupVersionInfo(modules, version)
  }

  // Add data codewords
  setupData(modules, dataBits)

  if (isNaN(maskPattern)) {
    // Find best mask pattern
    maskPattern = MaskPattern.getBestMask(modules,
      setupFormatInfo.bind(null, modules, errorCorrectionLevel))
  }

  // Apply mask pattern
  MaskPattern.applyMask(maskPattern, modules)

  // Replace format info bits with correct values
  setupFormatInfo(modules, errorCorrectionLevel, maskPattern)

  return {
    modules: modules,
    version: version,
    errorCorrectionLevel: errorCorrectionLevel,
    maskPattern: maskPattern,
    segments: segments
  }
}

/**
 * QR Code
 *
 * @param {String | Array} data                 Input data
 * @param {Object} options                      Optional configurations
 * @param {Number} options.version              QR Code version
 * @param {String} options.errorCorrectionLevel Error correction level
 * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
 */
exports.create = function create (data, options) {
  if (typeof data === 'undefined' || data === '') {
    throw new Error('No input text')
  }

  let errorCorrectionLevel = ECLevel.M
  let version
  let mask

  if (typeof options !== 'undefined') {
    // Use higher error correction level as default
    errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M)
    version = Version.from(options.version)
    mask = MaskPattern.from(options.maskPattern)

    if (options.toSJISFunc) {
      Utils.setToSJISFunction(options.toSJISFunc)
    }
  }

  return createSymbol(data, version, errorCorrectionLevel, mask)
}


/***/ }),

/***/ 4284:
/*!**************************************************************!*\
  !*** ./node_modules/qrcode/lib/core/reed-solomon-encoder.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Polynomial = __webpack_require__(/*! ./polynomial */ 41035)

function ReedSolomonEncoder (degree) {
  this.genPoly = undefined
  this.degree = degree

  if (this.degree) this.initialize(this.degree)
}

/**
 * Initialize the encoder.
 * The input param should correspond to the number of error correction codewords.
 *
 * @param  {Number} degree
 */
ReedSolomonEncoder.prototype.initialize = function initialize (degree) {
  // create an irreducible generator polynomial
  this.degree = degree
  this.genPoly = Polynomial.generateECPolynomial(this.degree)
}

/**
 * Encodes a chunk of data
 *
 * @param  {Uint8Array} data Buffer containing input data
 * @return {Uint8Array}      Buffer containing encoded data
 */
ReedSolomonEncoder.prototype.encode = function encode (data) {
  if (!this.genPoly) {
    throw new Error('Encoder not initialized')
  }

  // Calculate EC for this data block
  // extends data size to data+genPoly size
  const paddedData = new Uint8Array(data.length + this.degree)
  paddedData.set(data)

  // The error correction codewords are the remainder after dividing the data codewords
  // by a generator polynomial
  const remainder = Polynomial.mod(paddedData, this.genPoly)

  // return EC data blocks (last n byte, where n is the degree of genPoly)
  // If coefficients number in remainder are less than genPoly degree,
  // pad with 0s to the left to reach the needed number of coefficients
  const start = this.degree - remainder.length
  if (start > 0) {
    const buff = new Uint8Array(this.degree)
    buff.set(remainder, start)

    return buff
  }

  return remainder
}

module.exports = ReedSolomonEncoder


/***/ }),

/***/ 82507:
/*!***********************************************!*\
  !*** ./node_modules/qrcode/lib/core/regex.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

const numeric = '[0-9]+'
const alphanumeric = '[A-Z $%*+\\-./:]+'
let kanji = '(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|' +
  '[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|' +
  '[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|' +
  '[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+'
kanji = kanji.replace(/u/g, '\\u')

const byte = '(?:(?![A-Z0-9 $%*+\\-./:]|' + kanji + ')(?:.|[\r\n]))+'

exports.KANJI = new RegExp(kanji, 'g')
exports.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g')
exports.BYTE = new RegExp(byte, 'g')
exports.NUMERIC = new RegExp(numeric, 'g')
exports.ALPHANUMERIC = new RegExp(alphanumeric, 'g')

const TEST_KANJI = new RegExp('^' + kanji + '$')
const TEST_NUMERIC = new RegExp('^' + numeric + '$')
const TEST_ALPHANUMERIC = new RegExp('^[A-Z0-9 $%*+\\-./:]+$')

exports.testKanji = function testKanji (str) {
  return TEST_KANJI.test(str)
}

exports.testNumeric = function testNumeric (str) {
  return TEST_NUMERIC.test(str)
}

exports.testAlphanumeric = function testAlphanumeric (str) {
  return TEST_ALPHANUMERIC.test(str)
}


/***/ }),

/***/ 75414:
/*!**************************************************!*\
  !*** ./node_modules/qrcode/lib/core/segments.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Mode = __webpack_require__(/*! ./mode */ 63044)
const NumericData = __webpack_require__(/*! ./numeric-data */ 99889)
const AlphanumericData = __webpack_require__(/*! ./alphanumeric-data */ 70242)
const ByteData = __webpack_require__(/*! ./byte-data */ 80100)
const KanjiData = __webpack_require__(/*! ./kanji-data */ 57777)
const Regex = __webpack_require__(/*! ./regex */ 82507)
const Utils = __webpack_require__(/*! ./utils */ 51052)
const dijkstra = __webpack_require__(/*! dijkstrajs */ 34101)

/**
 * Returns UTF8 byte length
 *
 * @param  {String} str Input string
 * @return {Number}     Number of byte
 */
function getStringByteLength (str) {
  return unescape(encodeURIComponent(str)).length
}

/**
 * Get a list of segments of the specified mode
 * from a string
 *
 * @param  {Mode}   mode Segment mode
 * @param  {String} str  String to process
 * @return {Array}       Array of object with segments data
 */
function getSegments (regex, mode, str) {
  const segments = []
  let result

  while ((result = regex.exec(str)) !== null) {
    segments.push({
      data: result[0],
      index: result.index,
      mode: mode,
      length: result[0].length
    })
  }

  return segments
}

/**
 * Extracts a series of segments with the appropriate
 * modes from a string
 *
 * @param  {String} dataStr Input string
 * @return {Array}          Array of object with segments data
 */
function getSegmentsFromString (dataStr) {
  const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr)
  const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr)
  let byteSegs
  let kanjiSegs

  if (Utils.isKanjiModeEnabled()) {
    byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr)
    kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr)
  } else {
    byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr)
    kanjiSegs = []
  }

  const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs)

  return segs
    .sort(function (s1, s2) {
      return s1.index - s2.index
    })
    .map(function (obj) {
      return {
        data: obj.data,
        mode: obj.mode,
        length: obj.length
      }
    })
}

/**
 * Returns how many bits are needed to encode a string of
 * specified length with the specified mode
 *
 * @param  {Number} length String length
 * @param  {Mode} mode     Segment mode
 * @return {Number}        Bit length
 */
function getSegmentBitsLength (length, mode) {
  switch (mode) {
    case Mode.NUMERIC:
      return NumericData.getBitsLength(length)
    case Mode.ALPHANUMERIC:
      return AlphanumericData.getBitsLength(length)
    case Mode.KANJI:
      return KanjiData.getBitsLength(length)
    case Mode.BYTE:
      return ByteData.getBitsLength(length)
  }
}

/**
 * Merges adjacent segments which have the same mode
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function mergeSegments (segs) {
  return segs.reduce(function (acc, curr) {
    const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null
    if (prevSeg && prevSeg.mode === curr.mode) {
      acc[acc.length - 1].data += curr.data
      return acc
    }

    acc.push(curr)
    return acc
  }, [])
}

/**
 * Generates a list of all possible nodes combination which
 * will be used to build a segments graph.
 *
 * Nodes are divided by groups. Each group will contain a list of all the modes
 * in which is possible to encode the given text.
 *
 * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
 * The group for '12345' will contain then 3 objects, one for each
 * possible encoding mode.
 *
 * Each node represents a possible segment.
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function buildNodes (segs) {
  const nodes = []
  for (let i = 0; i < segs.length; i++) {
    const seg = segs[i]

    switch (seg.mode) {
      case Mode.NUMERIC:
        nodes.push([seg,
          { data: seg.data, mode: Mode.ALPHANUMERIC, length: seg.length },
          { data: seg.data, mode: Mode.BYTE, length: seg.length }
        ])
        break
      case Mode.ALPHANUMERIC:
        nodes.push([seg,
          { data: seg.data, mode: Mode.BYTE, length: seg.length }
        ])
        break
      case Mode.KANJI:
        nodes.push([seg,
          { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
        ])
        break
      case Mode.BYTE:
        nodes.push([
          { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
        ])
    }
  }

  return nodes
}

/**
 * Builds a graph from a list of nodes.
 * All segments in each node group will be connected with all the segments of
 * the next group and so on.
 *
 * At each connection will be assigned a weight depending on the
 * segment's byte length.
 *
 * @param  {Array} nodes    Array of object with segments data
 * @param  {Number} version QR Code version
 * @return {Object}         Graph of all possible segments
 */
function buildGraph (nodes, version) {
  const table = {}
  const graph = { start: {} }
  let prevNodeIds = ['start']

  for (let i = 0; i < nodes.length; i++) {
    const nodeGroup = nodes[i]
    const currentNodeIds = []

    for (let j = 0; j < nodeGroup.length; j++) {
      const node = nodeGroup[j]
      const key = '' + i + j

      currentNodeIds.push(key)
      table[key] = { node: node, lastCount: 0 }
      graph[key] = {}

      for (let n = 0; n < prevNodeIds.length; n++) {
        const prevNodeId = prevNodeIds[n]

        if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
          graph[prevNodeId][key] =
            getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) -
            getSegmentBitsLength(table[prevNodeId].lastCount, node.mode)

          table[prevNodeId].lastCount += node.length
        } else {
          if (table[prevNodeId]) table[prevNodeId].lastCount = node.length

          graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) +
            4 + Mode.getCharCountIndicator(node.mode, version) // switch cost
        }
      }
    }

    prevNodeIds = currentNodeIds
  }

  for (let n = 0; n < prevNodeIds.length; n++) {
    graph[prevNodeIds[n]].end = 0
  }

  return { map: graph, table: table }
}

/**
 * Builds a segment from a specified data and mode.
 * If a mode is not specified, the more suitable will be used.
 *
 * @param  {String} data             Input data
 * @param  {Mode | String} modesHint Data mode
 * @return {Segment}                 Segment
 */
function buildSingleSegment (data, modesHint) {
  let mode
  const bestMode = Mode.getBestModeForData(data)

  mode = Mode.from(modesHint, bestMode)

  // Make sure data can be encoded
  if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
    throw new Error('"' + data + '"' +
      ' cannot be encoded with mode ' + Mode.toString(mode) +
      '.\n Suggested mode is: ' + Mode.toString(bestMode))
  }

  // Use Mode.BYTE if Kanji support is disabled
  if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
    mode = Mode.BYTE
  }

  switch (mode) {
    case Mode.NUMERIC:
      return new NumericData(data)

    case Mode.ALPHANUMERIC:
      return new AlphanumericData(data)

    case Mode.KANJI:
      return new KanjiData(data)

    case Mode.BYTE:
      return new ByteData(data)
  }
}

/**
 * Builds a list of segments from an array.
 * Array can contain Strings or Objects with segment's info.
 *
 * For each item which is a string, will be generated a segment with the given
 * string and the more appropriate encoding mode.
 *
 * For each item which is an object, will be generated a segment with the given
 * data and mode.
 * Objects must contain at least the property "data".
 * If property "mode" is not present, the more suitable mode will be used.
 *
 * @param  {Array} array Array of objects with segments data
 * @return {Array}       Array of Segments
 */
exports.fromArray = function fromArray (array) {
  return array.reduce(function (acc, seg) {
    if (typeof seg === 'string') {
      acc.push(buildSingleSegment(seg, null))
    } else if (seg.data) {
      acc.push(buildSingleSegment(seg.data, seg.mode))
    }

    return acc
  }, [])
}

/**
 * Builds an optimized sequence of segments from a string,
 * which will produce the shortest possible bitstream.
 *
 * @param  {String} data    Input string
 * @param  {Number} version QR Code version
 * @return {Array}          Array of segments
 */
exports.fromString = function fromString (data, version) {
  const segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled())

  const nodes = buildNodes(segs)
  const graph = buildGraph(nodes, version)
  const path = dijkstra.find_path(graph.map, 'start', 'end')

  const optimizedSegs = []
  for (let i = 1; i < path.length - 1; i++) {
    optimizedSegs.push(graph.table[path[i]].node)
  }

  return exports.fromArray(mergeSegments(optimizedSegs))
}

/**
 * Splits a string in various segments with the modes which
 * best represent their content.
 * The produced segments are far from being optimized.
 * The output of this function is only used to estimate a QR Code version
 * which may contain the data.
 *
 * @param  {string} data Input string
 * @return {Array}       Array of segments
 */
exports.rawSplit = function rawSplit (data) {
  return exports.fromArray(
    getSegmentsFromString(data, Utils.isKanjiModeEnabled())
  )
}


/***/ }),

/***/ 51052:
/*!***********************************************!*\
  !*** ./node_modules/qrcode/lib/core/utils.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {

let toSJISFunction
const CODEWORDS_COUNT = [
  0, // Not used
  26, 44, 70, 100, 134, 172, 196, 242, 292, 346,
  404, 466, 532, 581, 655, 733, 815, 901, 991, 1085,
  1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185,
  2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706
]

/**
 * Returns the QR Code size for the specified version
 *
 * @param  {Number} version QR Code version
 * @return {Number}         size of QR code
 */
exports.getSymbolSize = function getSymbolSize (version) {
  if (!version) throw new Error('"version" cannot be null or undefined')
  if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40')
  return version * 4 + 17
}

/**
 * Returns the total number of codewords used to store data and EC information.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Data length in bits
 */
exports.getSymbolTotalCodewords = function getSymbolTotalCodewords (version) {
  return CODEWORDS_COUNT[version]
}

/**
 * Encode data with Bose-Chaudhuri-Hocquenghem
 *
 * @param  {Number} data Value to encode
 * @return {Number}      Encoded value
 */
exports.getBCHDigit = function (data) {
  let digit = 0

  while (data !== 0) {
    digit++
    data >>>= 1
  }

  return digit
}

exports.setToSJISFunction = function setToSJISFunction (f) {
  if (typeof f !== 'function') {
    throw new Error('"toSJISFunc" is not a valid function.')
  }

  toSJISFunction = f
}

exports.isKanjiModeEnabled = function () {
  return typeof toSJISFunction !== 'undefined'
}

exports.toSJIS = function toSJIS (kanji) {
  return toSJISFunction(kanji)
}


/***/ }),

/***/ 23822:
/*!*******************************************************!*\
  !*** ./node_modules/qrcode/lib/core/version-check.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

/**
 * Check if QR Code version is valid
 *
 * @param  {Number}  version QR Code version
 * @return {Boolean}         true if valid version, false otherwise
 */
exports.isValid = function isValid (version) {
  return !isNaN(version) && version >= 1 && version <= 40
}


/***/ }),

/***/ 84435:
/*!*************************************************!*\
  !*** ./node_modules/qrcode/lib/core/version.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(/*! ./utils */ 51052)
const ECCode = __webpack_require__(/*! ./error-correction-code */ 99298)
const ECLevel = __webpack_require__(/*! ./error-correction-level */ 3145)
const Mode = __webpack_require__(/*! ./mode */ 63044)
const VersionCheck = __webpack_require__(/*! ./version-check */ 23822)

// Generator polynomial used to encode version information
const G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0)
const G18_BCH = Utils.getBCHDigit(G18)

function getBestVersionForDataLength (mode, length, errorCorrectionLevel) {
  for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
      return currentVersion
    }
  }

  return undefined
}

function getReservedBitsCount (mode, version) {
  // Character count indicator + mode indicator bits
  return Mode.getCharCountIndicator(mode, version) + 4
}

function getTotalBitsFromDataArray (segments, version) {
  let totalBits = 0

  segments.forEach(function (data) {
    const reservedBits = getReservedBitsCount(data.mode, version)
    totalBits += reservedBits + data.getBitsLength()
  })

  return totalBits
}

function getBestVersionForMixedData (segments, errorCorrectionLevel) {
  for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
    const length = getTotalBitsFromDataArray(segments, currentVersion)
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
      return currentVersion
    }
  }

  return undefined
}

/**
 * Returns version number from a value.
 * If value is not a valid version, returns defaultValue
 *
 * @param  {Number|String} value        QR Code version
 * @param  {Number}        defaultValue Fallback value
 * @return {Number}                     QR Code version number
 */
exports.from = function from (value, defaultValue) {
  if (VersionCheck.isValid(value)) {
    return parseInt(value, 10)
  }

  return defaultValue
}

/**
 * Returns how much data can be stored with the specified QR code version
 * and error correction level
 *
 * @param  {Number} version              QR Code version (1-40)
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Mode}   mode                 Data mode
 * @return {Number}                      Quantity of storable data
 */
exports.getCapacity = function getCapacity (version, errorCorrectionLevel, mode) {
  if (!VersionCheck.isValid(version)) {
    throw new Error('Invalid QR Code version')
  }

  // Use Byte mode as default
  if (typeof mode === 'undefined') mode = Mode.BYTE

  // Total codewords for this QR code version (Data + Error correction)
  const totalCodewords = Utils.getSymbolTotalCodewords(version)

  // Total number of error correction codewords
  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel)

  // Total number of data codewords
  const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8

  if (mode === Mode.MIXED) return dataTotalCodewordsBits

  const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version)

  // Return max number of storable codewords
  switch (mode) {
    case Mode.NUMERIC:
      return Math.floor((usableBits / 10) * 3)

    case Mode.ALPHANUMERIC:
      return Math.floor((usableBits / 11) * 2)

    case Mode.KANJI:
      return Math.floor(usableBits / 13)

    case Mode.BYTE:
    default:
      return Math.floor(usableBits / 8)
  }
}

/**
 * Returns the minimum version needed to contain the amount of data
 *
 * @param  {Segment} data                    Segment of data
 * @param  {Number} [errorCorrectionLevel=H] Error correction level
 * @param  {Mode} mode                       Data mode
 * @return {Number}                          QR Code version
 */
exports.getBestVersionForData = function getBestVersionForData (data, errorCorrectionLevel) {
  let seg

  const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M)

  if (Array.isArray(data)) {
    if (data.length > 1) {
      return getBestVersionForMixedData(data, ecl)
    }

    if (data.length === 0) {
      return 1
    }

    seg = data[0]
  } else {
    seg = data
  }

  return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl)
}

/**
 * Returns version information with relative error correction bits
 *
 * The version information is included in QR Code symbols of version 7 or larger.
 * It consists of an 18-bit sequence containing 6 data bits,
 * with 12 error correction bits calculated using the (18, 6) Golay code.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Encoded version info bits
 */
exports.getEncodedBits = function getEncodedBits (version) {
  if (!VersionCheck.isValid(version) || version < 7) {
    throw new Error('Invalid QR Code version')
  }

  let d = version << 12

  while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
    d ^= (G18 << (Utils.getBCHDigit(d) - G18_BCH))
  }

  return (version << 12) | d
}


/***/ }),

/***/ 71041:
/*!****************************************************!*\
  !*** ./node_modules/qrcode/lib/renderer/canvas.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(/*! ./utils */ 95056)

function clearCanvas (ctx, canvas, size) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  if (!canvas.style) canvas.style = {}
  canvas.height = size
  canvas.width = size
  canvas.style.height = size + 'px'
  canvas.style.width = size + 'px'
}

function getCanvasElement () {
  try {
    return document.createElement('canvas')
  } catch (e) {
    throw new Error('You need to specify a canvas element')
  }
}

exports.render = function render (qrData, canvas, options) {
  let opts = options
  let canvasEl = canvas

  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas
    canvas = undefined
  }

  if (!canvas) {
    canvasEl = getCanvasElement()
  }

  opts = Utils.getOptions(opts)
  const size = Utils.getImageWidth(qrData.modules.size, opts)

  const ctx = canvasEl.getContext('2d')
  const image = ctx.createImageData(size, size)
  Utils.qrToImageData(image.data, qrData, opts)

  clearCanvas(ctx, canvasEl, size)
  ctx.putImageData(image, 0, 0)

  return canvasEl
}

exports.renderToDataURL = function renderToDataURL (qrData, canvas, options) {
  let opts = options

  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas
    canvas = undefined
  }

  if (!opts) opts = {}

  const canvasEl = exports.render(qrData, canvas, opts)

  const type = opts.type || 'image/png'
  const rendererOpts = opts.rendererOpts || {}

  return canvasEl.toDataURL(type, rendererOpts.quality)
}


/***/ }),

/***/ 59817:
/*!*****************************************************!*\
  !*** ./node_modules/qrcode/lib/renderer/svg-tag.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

const Utils = __webpack_require__(/*! ./utils */ 95056)

function getColorAttrib (color, attrib) {
  const alpha = color.a / 255
  const str = attrib + '="' + color.hex + '"'

  return alpha < 1
    ? str + ' ' + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"'
    : str
}

function svgCmd (cmd, x, y) {
  let str = cmd + x
  if (typeof y !== 'undefined') str += ' ' + y

  return str
}

function qrToPath (data, size, margin) {
  let path = ''
  let moveBy = 0
  let newRow = false
  let lineLength = 0

  for (let i = 0; i < data.length; i++) {
    const col = Math.floor(i % size)
    const row = Math.floor(i / size)

    if (!col && !newRow) newRow = true

    if (data[i]) {
      lineLength++

      if (!(i > 0 && col > 0 && data[i - 1])) {
        path += newRow
          ? svgCmd('M', col + margin, 0.5 + row + margin)
          : svgCmd('m', moveBy, 0)

        moveBy = 0
        newRow = false
      }

      if (!(col + 1 < size && data[i + 1])) {
        path += svgCmd('h', lineLength)
        lineLength = 0
      }
    } else {
      moveBy++
    }
  }

  return path
}

exports.render = function render (qrData, options, cb) {
  const opts = Utils.getOptions(options)
  const size = qrData.modules.size
  const data = qrData.modules.data
  const qrcodesize = size + opts.margin * 2

  const bg = !opts.color.light.a
    ? ''
    : '<path ' + getColorAttrib(opts.color.light, 'fill') +
      ' d="M0 0h' + qrcodesize + 'v' + qrcodesize + 'H0z"/>'

  const path =
    '<path ' + getColorAttrib(opts.color.dark, 'stroke') +
    ' d="' + qrToPath(data, size, opts.margin) + '"/>'

  const viewBox = 'viewBox="' + '0 0 ' + qrcodesize + ' ' + qrcodesize + '"'

  const width = !opts.width ? '' : 'width="' + opts.width + '" height="' + opts.width + '" '

  const svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + '</svg>\n'

  if (typeof cb === 'function') {
    cb(null, svgTag)
  }

  return svgTag
}


/***/ }),

/***/ 95056:
/*!***************************************************!*\
  !*** ./node_modules/qrcode/lib/renderer/utils.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

function hex2rgba (hex) {
  if (typeof hex === 'number') {
    hex = hex.toString()
  }

  if (typeof hex !== 'string') {
    throw new Error('Color should be defined as hex string')
  }

  let hexCode = hex.slice().replace('#', '').split('')
  if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
    throw new Error('Invalid hex color: ' + hex)
  }

  // Convert from short to long form (fff -> ffffff)
  if (hexCode.length === 3 || hexCode.length === 4) {
    hexCode = Array.prototype.concat.apply([], hexCode.map(function (c) {
      return [c, c]
    }))
  }

  // Add default alpha value
  if (hexCode.length === 6) hexCode.push('F', 'F')

  const hexValue = parseInt(hexCode.join(''), 16)

  return {
    r: (hexValue >> 24) & 255,
    g: (hexValue >> 16) & 255,
    b: (hexValue >> 8) & 255,
    a: hexValue & 255,
    hex: '#' + hexCode.slice(0, 6).join('')
  }
}

exports.getOptions = function getOptions (options) {
  if (!options) options = {}
  if (!options.color) options.color = {}

  const margin = typeof options.margin === 'undefined' ||
    options.margin === null ||
    options.margin < 0
    ? 4
    : options.margin

  const width = options.width && options.width >= 21 ? options.width : undefined
  const scale = options.scale || 4

  return {
    width: width,
    scale: width ? 4 : scale,
    margin: margin,
    color: {
      dark: hex2rgba(options.color.dark || '#000000ff'),
      light: hex2rgba(options.color.light || '#ffffffff')
    },
    type: options.type,
    rendererOpts: options.rendererOpts || {}
  }
}

exports.getScale = function getScale (qrSize, opts) {
  return opts.width && opts.width >= qrSize + opts.margin * 2
    ? opts.width / (qrSize + opts.margin * 2)
    : opts.scale
}

exports.getImageWidth = function getImageWidth (qrSize, opts) {
  const scale = exports.getScale(qrSize, opts)
  return Math.floor((qrSize + opts.margin * 2) * scale)
}

exports.qrToImageData = function qrToImageData (imgData, qr, opts) {
  const size = qr.modules.size
  const data = qr.modules.data
  const scale = exports.getScale(size, opts)
  const symbolSize = Math.floor((size + opts.margin * 2) * scale)
  const scaledMargin = opts.margin * scale
  const palette = [opts.color.light, opts.color.dark]

  for (let i = 0; i < symbolSize; i++) {
    for (let j = 0; j < symbolSize; j++) {
      let posDst = (i * symbolSize + j) * 4
      let pxColor = opts.color.light

      if (i >= scaledMargin && j >= scaledMargin &&
        i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
        const iSrc = Math.floor((i - scaledMargin) / scale)
        const jSrc = Math.floor((j - scaledMargin) / scale)
        pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0]
      }

      imgData[posDst++] = pxColor.r
      imgData[posDst++] = pxColor.g
      imgData[posDst++] = pxColor.b
      imgData[posDst] = pxColor.a
    }
  }
}


/***/ }),

/***/ 8410:
/*!**********************************************************!*\
  !*** ./projects/charon/src/app/user/components/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestoreSeedDialogComponent": () => (/* reexport safe */ _restore_seed_dialog__WEBPACK_IMPORTED_MODULE_5__.RestoreSeedDialogComponent),
/* harmony export */   "USER_COMPONENTS": () => (/* binding */ USER_COMPONENTS)
/* harmony export */ });
/* harmony import */ var _lock_delay_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lock-delay-settings */ 52565);
/* harmony import */ var _qr_login_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./qr-login-dialog */ 54398);
/* harmony import */ var _referral_bonus_milestones__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./referral-bonus-milestones */ 83498);
/* harmony import */ var _referral_reward_milestones__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./referral-reward-milestones */ 40501);
/* harmony import */ var _referral_stats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./referral-stats */ 393);
/* harmony import */ var _restore_seed_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./restore-seed-dialog */ 50985);







const USER_COMPONENTS = [
    _lock_delay_settings__WEBPACK_IMPORTED_MODULE_0__.LockDelaySettingsComponent,
    _qr_login_dialog__WEBPACK_IMPORTED_MODULE_1__.QrLoginDialogComponent,
    _referral_bonus_milestones__WEBPACK_IMPORTED_MODULE_2__.ReferralBonusMilestonesComponent,
    _referral_reward_milestones__WEBPACK_IMPORTED_MODULE_3__.ReferralRewardMilestonesComponent,
    _referral_stats__WEBPACK_IMPORTED_MODULE_4__.ReferralStatsComponent,
    _restore_seed_dialog__WEBPACK_IMPORTED_MODULE_5__.RestoreSeedDialogComponent,
];


/***/ }),

/***/ 52565:
/*!******************************************************************************!*\
  !*** ./projects/charon/src/app/user/components/lock-delay-settings/index.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LockDelaySettingsComponent": () => (/* reexport safe */ _lock_delay_settings_component__WEBPACK_IMPORTED_MODULE_0__.LockDelaySettingsComponent)
/* harmony export */ });
/* harmony import */ var _lock_delay_settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lock-delay-settings.component */ 53994);



/***/ }),

/***/ 53994:
/*!******************************************************************************************************!*\
  !*** ./projects/charon/src/app/user/components/lock-delay-settings/lock-delay-settings.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LockDelaySettingsComponent": () => (/* binding */ LockDelaySettingsComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 39754);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 54366);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 53399);
/* harmony import */ var _shared_utils_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/utils/date */ 17969);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _core_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/auth */ 51519);
/* harmony import */ var _shared_services_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/settings */ 31922);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngneat/transloco */ 44812);
/* harmony import */ var _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../shared/directives/typeface/typeface.directive */ 31857);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 36180);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ 88111);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 52503);












function LockDelaySettingsComponent_ng_container_0_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    const translate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", translate_r1("select.values." + option_r4.i18nKey), " ");
} }
function LockDelaySettingsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LockDelaySettingsComponent_ng_container_0_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](9); return _r2.open(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-select", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function LockDelaySettingsComponent_ng_container_0_Template_mat_select_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r8.onLockDelayChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, LockDelaySettingsComponent_ng_container_0_mat_option_11_Template, 2, 2, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const translate_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", translate_r1("title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", translate_r1("subtitle"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", translate_r1("select.label"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disableOptionCentering", true)("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 6, ctx_r0.lockDelay$));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.options);
} }
class LockDelaySettingsComponent {
    constructor(authService, settingsService) {
        this.authService = authService;
        this.settingsService = settingsService;
        this.options = [
            {
                value: _shared_utils_date__WEBPACK_IMPORTED_MODULE_0__.ONE_MINUTE * 10,
                i18nKey: '10m',
            },
            {
                value: _shared_utils_date__WEBPACK_IMPORTED_MODULE_0__.ONE_HOUR,
                i18nKey: '1h',
            },
            {
                value: _shared_utils_date__WEBPACK_IMPORTED_MODULE_0__.ONE_HOUR * 24,
                i18nKey: '24h',
            },
            {
                value: _shared_utils_date__WEBPACK_IMPORTED_MODULE_0__.ONE_HOUR * 48,
                i18nKey: '48h',
            },
            {
                value: 0,
                i18nKey: 'never',
            },
        ];
    }
    ngOnInit() {
        this.lockDelay$ = this.authService.getActiveUser().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)((user) => !!user), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((user) => this.settingsService.getUserSettingsService(user.wallet.address).lock.getLockDelay()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((delay) => delay));
    }
    onLockDelayChange(delay) {
        const walletAddress = this.authService.getActiveUserInstant().wallet.address;
        this.settingsService.getUserSettingsService(walletAddress).lock.setLockDelay(delay);
    }
}
LockDelaySettingsComponent.ɵfac = function LockDelaySettingsComponent_Factory(t) { return new (t || LockDelaySettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_auth__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_settings__WEBPACK_IMPORTED_MODULE_2__.SettingsService)); };
LockDelaySettingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LockDelaySettingsComponent, selectors: [["app-lock-delay-settings"]], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], ["appTypeface", "paragraph", 1, "lock-delay-settings__title"], ["appTypeface", "caption", 1, "lock-delay-settings__subtitle"], [1, "lock-delay-settings__select__container", 3, "click"], ["appTypeface", "paragraph", 1, "lock-delay-settings__select__label"], ["appTypeface", "paragraph", 1, "lock-delay-settings__select", 3, "disableOptionCentering", "ngModel", "ngModelChange"], ["select", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function LockDelaySettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, LockDelaySettingsComponent_ng_container_0_Template, 12, 8, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("translocoRead", "user.lock_delay_settings");
    } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_8__.TranslocoDirective, _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_3__.TypefaceDirective, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_11__["ɵk"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_11__["ɵe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.lock-delay-settings__title[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.lock-delay-settings__subtitle[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  margin-top: 4px;\n}\n\n.lock-delay-settings__select__container[_ngcontent-%COMP%] {\n  background-color: var(--color-input-background);\n  border-radius: 12px;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  font-weight: 500;\n  justify-content: space-between;\n  padding: 16px;\n  width: 100%;\n}\n\n.lock-delay-settings__select__label[_ngcontent-%COMP%] {\n  color: var(--color-input-label);\n  display: flex;\n  justify-content: space-between;\n}\n\n  mat-select .mat-select-placeholder {\n  color: var(--color-input-placeholder);\n  font-weight: 400;\n}\n\n  mat-select .mat-select-value {\n  color: var(--color-main-text);\n}\n\n  mat-select .mat-select-arrow {\n  color: var(--color-input-icon);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2stZGVsYXktc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2hhcmVkXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0EsZUNDZTtBREZqQjs7QUFHQTtFQUNFLCtDQUFBO0VBQ0EsbUJDTmM7RURPZCxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSwrQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUFGOztBQUtJO0VBQ0UscUNBQUE7RUFDQSxnQkFBQTtBQUZOOztBQUtJO0VBQ0UsNkJBQUE7QUFITjs7QUFNSTtFQUNFLDhCQUFBO0FBSk4iLCJmaWxlIjoibG9jay1kZWxheS1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5sb2NrLWRlbGF5LXNldHRpbmdzX190aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmxvY2stZGVsYXktc2V0dGluZ3NfX3N1YnRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAkZ3JpZC1zdGVwICogMjtcclxuICBtYXJnaW4tdG9wOiAkZ3JpZC1oYWxmLXN0ZXA7XHJcbn1cclxuLmxvY2stZGVsYXktc2V0dGluZ3NfX3NlbGVjdF9fY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1pbnB1dC1iYWNrZ3JvdW5kKTtcclxuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6ICRncmlkLXN0ZXAgKiAyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubG9jay1kZWxheS1zZXR0aW5nc19fc2VsZWN0X19sYWJlbCB7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLWlucHV0LWxhYmVsKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuOjpuZy1kZWVwIHtcclxuICBtYXQtc2VsZWN0IHtcclxuICAgIC5tYXQtc2VsZWN0LXBsYWNlaG9sZGVyIHtcclxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWlucHV0LXBsYWNlaG9sZGVyKTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LXNlbGVjdC12YWx1ZSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluLXRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXQtc2VsZWN0LWFycm93IHtcclxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWlucHV0LWljb24pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAdXNlICdzYXNzOm1hdGgnO1xyXG5AaW1wb3J0ICdjb2xvcnMnO1xyXG5cclxuQGZ1bmN0aW9uIGhleFRvUkdCU3RyaW5nKCRoZXhDb2xvcikge1xyXG4gIEByZXR1cm4gJyN7cmVkKCRoZXhDb2xvcil9LCN7Z3JlZW4oJGhleENvbG9yKX0sI3tibHVlKCRoZXhDb2xvcil9JztcclxufVxyXG5cclxuJG1haW4tZm9udC1zaXplOiAxNnB4O1xyXG4kbWFpbi1mb250LWZhbWlseTogI3snSW50ZXIsIEFyaWFsLCBzYW5zLXNlcmlmJ307XHJcblxyXG4kYm9yZGVyLXJhZGl1czogMTJweDtcclxuXHJcbiRncmlkLXN0ZXA6IDhweDtcclxuJGdyaWQtaGFsZi1zdGVwOiBtYXRoLmRpdigkZ3JpZC1zdGVwLCAyKTtcclxuXHJcbiRwYWdlLXdpZHRoOiAxMjAwcHg7XHJcbiRwYWdlLXNpZGUtcGFkZGluZzogJGdyaWQtc3RlcCAqIDM7XHJcblxyXG4kY29sb3ItZm9udC1iYXNlOiAkY29sb3ItYmxhY2s7XHJcbiRjb2xvci1wcmltYXJ5OiAkY29sb3ItYmx1ZTtcclxuJGNvbG9yLW5lZ2F0aXZlOiAkY29sb3ItcmVkO1xyXG4kY29sb3ItbmV1dHJhbDogJGNvbG9yLWdyZXk7XHJcbiRjb2xvci1wb3NpdGl2ZTogJGNvbG9yLWdyZWVuO1xyXG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 54398:
/*!**************************************************************************!*\
  !*** ./projects/charon/src/app/user/components/qr-login-dialog/index.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrLoginDialogComponent": () => (/* reexport safe */ _qr_login_dialog_component__WEBPACK_IMPORTED_MODULE_0__.QrLoginDialogComponent)
/* harmony export */ });
/* harmony import */ var _qr_login_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./qr-login-dialog.component */ 10529);



/***/ }),

/***/ 10529:
/*!**********************************************************************************************!*\
  !*** ./projects/charon/src/app/user/components/qr-login-dialog/qr-login-dialog.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrLoginDialogComponent": () => (/* binding */ QrLoginDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _core_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/auth */ 51519);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/transloco */ 44812);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 39670);
/* harmony import */ var ng_qrcode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-qrcode */ 73541);
/* harmony import */ var _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../shared/directives/typeface/typeface.directive */ 31857);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../shared/components/button/button.component */ 4013);







function QrLoginDialogComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-dialog-content", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "qr-code", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div")(4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ol", 4)(7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-dialog-actions", 7)(18, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const translate_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r0.qrEncryptedSeed);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", translate_r1("title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", translate_r1("step1"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", translate_r1("step2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", translate_r1("step3"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", translate_r1("step3_hint"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx_r0.helpLink, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", translate_r1("help"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", translate_r1("close"), " ");
} }
const helpLink = 'https://support.decentr.net/article/62-how-to-login-using-qr-code';
class QrLoginDialogComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        const encryptedSeed = this.authService.getActiveUserInstant().encryptedSeed;
        this.qrEncryptedSeed = `decentr://login?encryptedSeed=${encryptedSeed}`;
        this.helpLink = helpLink;
    }
}
QrLoginDialogComponent.ɵfac = function QrLoginDialogComponent_Factory(t) { return new (t || QrLoginDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_auth__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
QrLoginDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: QrLoginDialogComponent, selectors: [["app-qr-login-dialog"]], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], [1, "qr-login-dialog__content"], ["centerImageSize", "50", "centerImageSrc", "./assets/images/logo/logo-icon.png", "errorCorrectionLevel", "L", "margin", "3", "size", "200", 3, "value"], ["appTypeface", "subheader", 1, "qr-login-dialog__content-title"], ["appTypeface", "paragraph", 1, "qr-login-dialog__content-steps"], ["appTypeface", "caption", 1, "qr-login-dialog__content-steps-hint"], ["target", "_blank", "appTypeface", "paragraph", 1, "qr-login-dialog__content-help", 3, "href"], [1, "qr-login-dialog__actions"], ["app-button", "", "color", "grey", "mat-dialog-close", "", 1, "qr-login-dialog__button"]], template: function QrLoginDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, QrLoginDialogComponent_ng_container_0_Template, 20, 9, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("translocoRead", "user.qr_login_dialog");
    } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_4__.TranslocoDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, ng_qrcode__WEBPACK_IMPORTED_MODULE_6__.QrCodeComponent, _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_1__.TypefaceDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogActions, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__.ButtonComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose], styles: ["[_nghost-%COMP%] {\n  display: block;\n  margin-top: 8px;\n  position: relative;\n}\n\n.qr-login-dialog__content[_ngcontent-%COMP%] {\n  column-gap: 24px;\n  display: flex;\n}\n\n.qr-login-dialog__content-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-bottom: 16px;\n}\n\n.qr-login-dialog__content-steps[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  list-style-type: decimal;\n  margin-bottom: 12px;\n  margin-left: 20px;\n}\n\n.qr-login-dialog__content-steps-hint[_ngcontent-%COMP%] {\n  color: var(--color-userpage-qr-login-steps-hint);\n  margin-top: 4px;\n}\n\n.qr-login-dialog__content-help[_ngcontent-%COMP%] {\n  color: var(--color-userpage-qr-login-steps-help);\n}\n\n.qr-login-dialog__actions[_ngcontent-%COMP%] {\n  column-gap: 12px;\n  justify-content: flex-end;\n  margin: 8px 0 0;\n  padding: 0;\n}\n\n.qr-login-dialog__button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInFyLWxvZ2luLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzaGFyZWRcXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxjQUFBO0VBQ0EsZUNPVTtFRE5WLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFGRjs7QUFLQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFNRTtFQUNFLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUhKOztBQU9BO0VBQ0UsZ0RBQUE7RUFDQSxlQUFBO0FBSkY7O0FBT0E7RUFDRSxnREFBQTtBQUpGOztBQU9BO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7QUFKRiIsImZpbGUiOiJxci1sb2dpbi1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdzYXNzOm1hdGgnO1xyXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi10b3A6ICRncmlkLXN0ZXA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucXItbG9naW4tZGlhbG9nX19jb250ZW50IHtcclxuICBjb2x1bW4tZ2FwOiAkZ3JpZC1zdGVwICogMztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ucXItbG9naW4tZGlhbG9nX19jb250ZW50LXRpdGxlIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi1ib3R0b206ICRncmlkLXN0ZXAgKiAyO1xyXG59XHJcblxyXG4ucXItbG9naW4tZGlhbG9nX19jb250ZW50LXN0ZXBzIHtcclxuICA+IGxpIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogZGVjaW1hbDtcclxuICAgIG1hcmdpbi1ib3R0b206ICRncmlkLXN0ZXAgKiAxLjU7XHJcbiAgICBtYXJnaW4tbGVmdDogJGdyaWQtc3RlcCAqIDIuNTtcclxuICB9XHJcbn1cclxuXHJcbi5xci1sb2dpbi1kaWFsb2dfX2NvbnRlbnQtc3RlcHMtaGludCB7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLXVzZXJwYWdlLXFyLWxvZ2luLXN0ZXBzLWhpbnQpO1xyXG4gIG1hcmdpbi10b3A6IG1hdGguZGl2KCRncmlkLXN0ZXAsIDIpO1xyXG59XHJcblxyXG4ucXItbG9naW4tZGlhbG9nX19jb250ZW50LWhlbHAge1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci11c2VycGFnZS1xci1sb2dpbi1zdGVwcy1oZWxwKTtcclxufVxyXG5cclxuLnFyLWxvZ2luLWRpYWxvZ19fYWN0aW9ucyB7XHJcbiAgY29sdW1uLWdhcDogJGdyaWQtc3RlcCAqIDEuNTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIG1hcmdpbjogJGdyaWQtc3RlcCAwIDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnFyLWxvZ2luLWRpYWxvZ19fYnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuIiwiQHVzZSAnc2FzczptYXRoJztcclxuQGltcG9ydCAnY29sb3JzJztcclxuXHJcbkBmdW5jdGlvbiBoZXhUb1JHQlN0cmluZygkaGV4Q29sb3IpIHtcclxuICBAcmV0dXJuICcje3JlZCgkaGV4Q29sb3IpfSwje2dyZWVuKCRoZXhDb2xvcil9LCN7Ymx1ZSgkaGV4Q29sb3IpfSc7XHJcbn1cclxuXHJcbiRtYWluLWZvbnQtc2l6ZTogMTZweDtcclxuJG1haW4tZm9udC1mYW1pbHk6ICN7J0ludGVyLCBBcmlhbCwgc2Fucy1zZXJpZid9O1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IDEycHg7XHJcblxyXG4kZ3JpZC1zdGVwOiA4cHg7XHJcbiRncmlkLWhhbGYtc3RlcDogbWF0aC5kaXYoJGdyaWQtc3RlcCwgMik7XHJcblxyXG4kcGFnZS13aWR0aDogMTIwMHB4O1xyXG4kcGFnZS1zaWRlLXBhZGRpbmc6ICRncmlkLXN0ZXAgKiAzO1xyXG5cclxuJGNvbG9yLWZvbnQtYmFzZTogJGNvbG9yLWJsYWNrO1xyXG4kY29sb3ItcHJpbWFyeTogJGNvbG9yLWJsdWU7XHJcbiRjb2xvci1uZWdhdGl2ZTogJGNvbG9yLXJlZDtcclxuJGNvbG9yLW5ldXRyYWw6ICRjb2xvci1ncmV5O1xyXG4kY29sb3ItcG9zaXRpdmU6ICRjb2xvci1ncmVlbjtcclxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 83498:
/*!************************************************************************************!*\
  !*** ./projects/charon/src/app/user/components/referral-bonus-milestones/index.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReferralBonusMilestonesComponent": () => (/* reexport safe */ _referral_bonus_milestones_component__WEBPACK_IMPORTED_MODULE_0__.ReferralBonusMilestonesComponent)
/* harmony export */ });
/* harmony import */ var _referral_bonus_milestones_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./referral-bonus-milestones.component */ 59639);



/***/ }),

/***/ 59639:
/*!******************************************************************************************************************!*\
  !*** ./projects/charon/src/app/user/components/referral-bonus-milestones/referral-bonus-milestones.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReferralBonusMilestonesComponent": () => (/* binding */ ReferralBonusMilestonesComponent)
/* harmony export */ });
/* harmony import */ var _shared_svg_icons_referral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/svg-icons/referral */ 52132);
/* harmony import */ var _shared_svg_icons_star__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/svg-icons/star */ 94723);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngneat/svg-icon */ 49366);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/transloco */ 44812);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../shared/directives/typeface/typeface.directive */ 31857);
/* harmony import */ var _shared_pipes_number_suffix_number_suffix_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../shared/pipes/number-suffix/number-suffix.pipe */ 86045);
/* harmony import */ var _shared_pipes_micro_value_micro_value_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../shared/pipes/micro-value/micro-value.pipe */ 30087);









function ReferralBonusMilestonesComponent_ng_container_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "svg-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 6)(3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "numberSuffix");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "microValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "svg-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const bonus_r3 = ctx.$implicit;
    const translate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("is-active", bonus_r3.count <= ctx_r2.referrals);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 5, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 7, bonus_r3.reward)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](translate_r1("dec_bonus"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", bonus_r3.count, " ");
} }
function ReferralBonusMilestonesComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ReferralBonusMilestonesComponent_ng_container_0_div_3_Template, 13, 9, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("width", ctx_r0.progress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r0.bonuses);
} }
class ReferralBonusMilestonesComponent {
    constructor(svgIconRegistry) {
        this.svgIconRegistry = svgIconRegistry;
    }
    get progress() {
        const divider = (this.bonuses || []).length - 1;
        const nextGoalIndex = (this.bonuses || [])
            .findIndex((bonus) => bonus.count > this.referrals);
        const potentialProgress = (nextGoalIndex === -1 ? 1 : (nextGoalIndex / divider)) * 100;
        return Math.max(potentialProgress, 0);
    }
    ngOnInit() {
        this.svgIconRegistry.register([
            _shared_svg_icons_referral__WEBPACK_IMPORTED_MODULE_0__.svgReferral,
            _shared_svg_icons_star__WEBPACK_IMPORTED_MODULE_1__.svgStar,
        ]);
    }
}
ReferralBonusMilestonesComponent.ɵfac = function ReferralBonusMilestonesComponent_Factory(t) { return new (t || ReferralBonusMilestonesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_6__.SvgIconRegistry)); };
ReferralBonusMilestonesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ReferralBonusMilestonesComponent, selectors: [["app-referral-bonus-milestones"]], inputs: { referrals: "referrals", bonuses: "bonuses" }, decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], [1, "referral-bonus-milestones__bar"], [1, "referral-bonus-milestones__bar__progress"], ["class", "referral-bonus-milestones__goal", 3, "is-active", 4, "ngFor", "ngForOf"], [1, "referral-bonus-milestones__goal"], ["key", "star", "fontSize", "66px", 1, "referral-bonus-milestones__goal__star"], [1, "referral-bonus-milestones__goal__label"], ["appTypeface", "paragraph", 1, "referral-bonus-milestones__goal__reward_value"], [1, "referral-bonus-milestones__goal__divider"], [1, "referral-bonus-milestones__goal__referral-count"], ["key", "referral", "fontSize", "10px"]], template: function ReferralBonusMilestonesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ReferralBonusMilestonesComponent_ng_container_0_Template, 4, 3, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("translocoRead", "user.referral_bonus_milestones");
    } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_7__.TranslocoDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_6__.SvgIconComponent, _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_2__.TypefaceDirective], pipes: [_shared_pipes_number_suffix_number_suffix_pipe__WEBPACK_IMPORTED_MODULE_3__.NumberSuffixPipe, _shared_pipes_micro_value_micro_value_pipe__WEBPACK_IMPORTED_MODULE_4__.MicroValuePipe], styles: ["[_nghost-%COMP%] {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n}\n\n.referral-bonus-milestones__bar[_ngcontent-%COMP%] {\n  border-bottom: 3px dashed var(--color-outlines);\n  left: 0;\n  right: 0;\n  position: absolute;\n}\n\n.referral-bonus-milestones__bar__progress[_ngcontent-%COMP%] {\n  border: inherit;\n  border-color: #03B15E;\n  position: absolute;\n}\n\n.referral-bonus-milestones__goal[_ngcontent-%COMP%] {\n  align-items: center;\n  color: var(--color-referral-bonus-milestones-goal);\n  display: flex;\n  font-size: 9px;\n  font-weight: 700;\n  justify-content: center;\n  line-height: 8px;\n  position: relative;\n  text-align: center;\n}\n\n.referral-bonus-milestones__goal.is-active[_ngcontent-%COMP%] {\n  color: var(--color-referral-bonus-milestones-goal-active);\n}\n\n.referral-bonus-milestones__goal.is-active[_ngcontent-%COMP%]   .referral-bonus-milestones__goal__star[_ngcontent-%COMP%] {\n  color: var(--color-referral-bonus-milestones-goal-active-star);\n}\n\n.referral-bonus-milestones__goal.is-active[_ngcontent-%COMP%]   .referral-bonus-milestones__goal__divider[_ngcontent-%COMP%] {\n  border-color: var(--color-referral-bonus-milestones-goal-active-divider-border);\n}\n\n.referral-bonus-milestones__goal__star[_ngcontent-%COMP%] {\n  color: var(--color-referral-bonus-milestones-goal-star);\n}\n\n.referral-bonus-milestones__goal__label[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n.referral-bonus-milestones__goal__reward_value[_ngcontent-%COMP%] {\n  line-height: 1.15;\n  text-transform: uppercase;\n}\n\n.referral-bonus-milestones__goal__divider[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--color-outlines);\n  margin: 2px 0;\n  min-width: 40px;\n}\n\n.referral-bonus-milestones__goal__referral-count[_ngcontent-%COMP%] {\n  align-items: center;\n  display: inline-flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZmVycmFsLWJvbnVzLW1pbGVzdG9uZXMuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2hhcmVkXFxzdHlsZXNcXGNvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQUZGOztBQUtBO0VBQ0UsK0NBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0VBQ0EscUJDZlk7RURnQlosa0JBQUE7QUFGRjs7QUFLQTtFQUNFLG1CQUFBO0VBQ0Esa0RBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFJRTtFQUNFLHlEQUFBO0FBRko7O0FBSUk7RUFDRSw4REFBQTtBQUZOOztBQUtJO0VBQ0UsK0VBQUE7QUFITjs7QUFRQTtFQUNFLHVEQUFBO0FBTEY7O0FBUUE7RUFDRSxrQkFBQTtBQUxGOztBQVFBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtBQUxGOztBQVFBO0VBQ0UsOENBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUxGOztBQVFBO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtBQUxGIiwiZmlsZSI6InJlZmVycmFsLWJvbnVzLW1pbGVzdG9uZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdzYXNzOm1hdGgnO1xyXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5cclxuOmhvc3Qge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucmVmZXJyYWwtYm9udXMtbWlsZXN0b25lc19fYmFyIHtcclxuICBib3JkZXItYm90dG9tOiAzcHggZGFzaGVkIHZhcigtLWNvbG9yLW91dGxpbmVzKTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLnJlZmVycmFsLWJvbnVzLW1pbGVzdG9uZXNfX2Jhcl9fcHJvZ3Jlc3Mge1xyXG4gIGJvcmRlcjogaW5oZXJpdDtcclxuICBib3JkZXItY29sb3I6ICRjb2xvci1wb3NpdGl2ZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5yZWZlcnJhbC1ib251cy1taWxlc3RvbmVzX19nb2FsIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1yZWZlcnJhbC1ib251cy1taWxlc3RvbmVzLWdvYWwpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC1zaXplOiA5cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogOHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICYuaXMtYWN0aXZlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1yZWZlcnJhbC1ib251cy1taWxlc3RvbmVzLWdvYWwtYWN0aXZlKTtcclxuXHJcbiAgICAucmVmZXJyYWwtYm9udXMtbWlsZXN0b25lc19fZ29hbF9fc3RhciB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1yZWZlcnJhbC1ib251cy1taWxlc3RvbmVzLWdvYWwtYWN0aXZlLXN0YXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC5yZWZlcnJhbC1ib251cy1taWxlc3RvbmVzX19nb2FsX19kaXZpZGVyIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1yZWZlcnJhbC1ib251cy1taWxlc3RvbmVzLWdvYWwtYWN0aXZlLWRpdmlkZXItYm9yZGVyKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5yZWZlcnJhbC1ib251cy1taWxlc3RvbmVzX19nb2FsX19zdGFyIHtcclxuICBjb2xvcjogdmFyKC0tY29sb3ItcmVmZXJyYWwtYm9udXMtbWlsZXN0b25lcy1nb2FsLXN0YXIpO1xyXG59XHJcblxyXG4ucmVmZXJyYWwtYm9udXMtbWlsZXN0b25lc19fZ29hbF9fbGFiZWwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLnJlZmVycmFsLWJvbnVzLW1pbGVzdG9uZXNfX2dvYWxfX3Jld2FyZF92YWx1ZSB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnJlZmVycmFsLWJvbnVzLW1pbGVzdG9uZXNfX2dvYWxfX2RpdmlkZXIge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1vdXRsaW5lcyk7XHJcbiAgbWFyZ2luOiBtYXRoLmRpdigkZ3JpZC1zdGVwLCA0KSAwO1xyXG4gIG1pbi13aWR0aDogNDBweDtcclxufVxyXG5cclxuLnJlZmVycmFsLWJvbnVzLW1pbGVzdG9uZXNfX2dvYWxfX3JlZmVycmFsLWNvdW50IHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcbiIsIiRjb2xvci1ibHVlOiAjNEY4MEZGO1xyXG4kY29sb3ItYmx1ZS1uaWdodDogIzY5OTNGRjtcclxuJGNvbG9yLWJsdWUtaG92ZXI6ICMyQjVERTA7XHJcbiRjb2xvci1ibHVlLW5pZ2h0LWhvdmVyOiAjNTg3RUUwO1xyXG4kY29sb3ItZ3JlZW46ICMwM0IxNUU7XHJcbiRjb2xvci1ncmVlbi1uaWdodDogIzQwQzk4ODtcclxuJGNvbG9yLXJlZDogI0ZBNTQ1NDtcclxuJGNvbG9yLXJlZC1uaWdodDogI0ZGNzA3MDtcclxuXHJcbiRjb2xvci1ibGFjazogIzFDMUQyNjtcclxuJGNvbG9yLWRhcmstZ3JleTogIzQ5NEE1MjtcclxuJGNvbG9yLWRhcmstZ3JleS1uaWdodDogI0QyRDJENDtcclxuJGNvbG9yLWdyZXk6ICM5MjkyOTc7XHJcbiRjb2xvci1ncmV5LW5pZ2h0OiAjODk4QThFO1xyXG4kY29sb3ItbGlnaHQtZ3JleTogI0I2QjdCQTtcclxuJGNvbG9yLWxpZ2h0LWdyZXktbmlnaHQ6ICM1MzUzNUE7XHJcbiRjb2xvci1vdXRsaW5lczogI0VERURFRTtcclxuJGNvbG9yLW91dGxpbmVzLW5pZ2h0OiAjMkUyRjM3O1xyXG4kY29sb3ItYmFja2dyb3VuZDogI0Y2RjZGNztcclxuJGNvbG9yLWJhY2tncm91bmQtbmlnaHQ6ICMyNTI2MkY7XHJcbiRjb2xvci13aGl0ZTogI0ZGRkZGRjtcclxuXHJcbiRjb2xvci1vcmFuZ2U6ICNGRjhDMDQ7XHJcbiRjb2xvci1vcmFuZ2UtbmlnaHQ6ICNGRkE0Mzg7XHJcbiRjb2xvci15ZWxsb3c6ICNGOEQ3MkE7XHJcbiRjb2xvci15ZWxsb3ctbmlnaHQ6ICNGOERGNUM7XHJcbiRjb2xvci1saWdodC1ibHVlOiAjNzNEMUY5O1xyXG4kY29sb3ItbGlnaHQtYmx1ZS1uaWdodDogI0E0REZGOTtcclxuJGNvbG9yLXZpb2xldDogIzlGNjVGRDtcclxuJGNvbG9yLXZpb2xldC1uaWdodDogI0JFOThGRDtcclxuJGNvbG9yLXBpbms6ICNFODdDQzk7XHJcbiRjb2xvci1waW5rLW5pZ2h0OiAjRThBOUQ2O1xyXG4kY29sb3ItbWludDogIzNFRENEMztcclxuJGNvbG9yLW1pbnQtbmlnaHQ6ICM4MERDRDY7XHJcbiRjb2xvci1wdXJwbGU6ICNBOTU0QTA7XHJcbiRjb2xvci1wdXJwbGUtbmlnaHQ6ICNDMjg4QkM7XHJcblxyXG4vLyBleHRyYSBjb2xvciB2YXJzXHJcbiRjb2xvci1pbnB1dC1iYWNrZ3JvdW5kLW5pZ2h0OiAjMjgyODMyO1xyXG4kY29sb3ItY2FyZC1iYWNrZ3JvdW5kLW5pZ2h0OiAjMjgyODMyO1xyXG4kY29sb3Itc2tlbGV0b24tYmFja2dyb3VuZDogI0VGRjFGNjtcclxuJGNvbG9yLXNrZWxldG9uLWJhY2tncm91bmQtYW5pbWF0aW9uOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsaHNsYSgwLDAlLDEwMCUsMCkscmdiKDI1NSAyNTUgMjU1IC8gNjAlKSxoc2xhKDAsMCUsMTAwJSwwKSk7XHJcbiRjb2xvci1za2VsZXRvbi1iYWNrZ3JvdW5kLWFuaW1hdGlvbi1uaWdodDogbGluZWFyLWdyYWRpZW50KDkwZGVnLHRyYW5zcGFyZW50LHJnYmEoMCwwLDAsLjIpLHRyYW5zcGFyZW50KTtcclxuXHJcbiRjb2xvci1wb3N0LWNhdGVnb3JpZXM6ICRjb2xvci1ibHVlICRjb2xvci1ncmVlbiAkY29sb3ItcmVkICRjb2xvci1vcmFuZ2UgJGNvbG9yLXllbGxvdyAkY29sb3ItbGlnaHQtYmx1ZSAkY29sb3ItdmlvbGV0ICRjb2xvci1waW5rICRjb2xvci1taW50O1xyXG4kY29sb3ItcG9zdC1jYXRlZ29yaWVzLW5pZ2h0OiAkY29sb3ItYmx1ZS1uaWdodCAkY29sb3ItZ3JlZW4tbmlnaHQgJGNvbG9yLXJlZC1uaWdodCAkY29sb3Itb3JhbmdlLW5pZ2h0ICRjb2xvci15ZWxsb3ctbmlnaHQgJGNvbG9yLWxpZ2h0LWJsdWUtbmlnaHQgJGNvbG9yLXZpb2xldC1uaWdodCAkY29sb3ItcGluay1uaWdodCAkY29sb3ItbWludC1uaWdodDtcclxuXHJcbkBtaXhpbiBwb3N0Q2F0ZWdvcnlDb2xvcigkcGFsZXR0ZSkge1xyXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggbGVuZ3RoKCRwYWxldHRlKSB7XHJcbiAgICAtLWNvbG9yLXBvc3QtY2F0ZWdvcnktI3skaX06ICN7bnRoKCRwYWxldHRlLCAkaSl9O1xyXG4gIH1cclxufVxyXG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 40501:
/*!*************************************************************************************!*\
  !*** ./projects/charon/src/app/user/components/referral-reward-milestones/index.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReferralRewardMilestonesComponent": () => (/* reexport safe */ _referral_reward_milestones_component__WEBPACK_IMPORTED_MODULE_0__.ReferralRewardMilestonesComponent)
/* harmony export */ });
/* harmony import */ var _referral_reward_milestones_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./referral-reward-milestones.component */ 4872);



/***/ }),

/***/ 4872:
/*!********************************************************************************************************************!*\
  !*** ./projects/charon/src/app/user/components/referral-reward-milestones/referral-reward-milestones.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReferralRewardMilestonesComponent": () => (/* binding */ ReferralRewardMilestonesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/transloco */ 44812);
/* harmony import */ var _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../shared/directives/typeface/typeface.directive */ 31857);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_pipes_micro_value_micro_value_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../shared/pipes/micro-value/micro-value.pipe */ 30087);





function ReferralRewardMilestonesComponent_ng_container_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "microValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const section_r4 = ctx.$implicit;
    const translate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", section_r4.width, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-active", section_r4 === ctx_r2.activeSection);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 6, section_r4.reward), " ", translate_r1("dec_rewards"), " ");
} }
function ReferralRewardMilestonesComponent_ng_container_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const section_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", section_r6.width, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", section_r6.to || "\u221E", " ");
} }
function ReferralRewardMilestonesComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ReferralRewardMilestonesComponent_ng_container_0_div_2_Template, 3, 8, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6)(8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ReferralRewardMilestonesComponent_ng_container_0_div_10_Template, 3, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.sections);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", ctx_r0.progress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("left", ctx_r0.progress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.referrals, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.sections);
} }
class ReferralRewardMilestonesComponent {
    constructor() {
        this.referrals = 0;
        this.rewards = [];
        this.progress = 0;
        this.infiniteSectionWidth = 18;
        this.sectionsAvailableSpace = 100 - this.infiniteSectionWidth;
    }
    ngOnChanges() {
        this.sections = this.generateSections(this.rewards);
        this.activeSection = this.sections
            .find((section) => section.to > this.referrals)
            || this.sections[this.sections.length - 1];
        this.progress = this.getProgress(this.sections, this.activeSection, this.referrals);
    }
    generateSections(rewardLevels) {
        if (!rewardLevels) {
            return [];
        }
        const maxCountTo = rewardLevels
            .slice()
            .reverse()
            .find((level) => level.to).to;
        return rewardLevels.map((level) => ({
            reward: level.reward,
            to: level.to,
            width: level.to
                ? (level.to - level.from + 1) / maxCountTo * this.sectionsAvailableSpace
                : this.infiniteSectionWidth,
        }));
    }
    getProgress(sections, activeSection, referrals) {
        if (!activeSection) {
            return 0;
        }
        if (!activeSection.to) {
            return 100 - this.infiniteSectionWidth / 2;
        }
        const maxCountTo = sections
            .slice()
            .reverse()
            .find((level) => level.to).to;
        return referrals / maxCountTo * this.sectionsAvailableSpace;
    }
}
ReferralRewardMilestonesComponent.ɵfac = function ReferralRewardMilestonesComponent_Factory(t) { return new (t || ReferralRewardMilestonesComponent)(); };
ReferralRewardMilestonesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ReferralRewardMilestonesComponent, selectors: [["app-referral-reward-milestones"]], inputs: { referrals: "referrals", rewards: "rewards" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], ["appTypeface", "caption", 1, "referral-bonus-milestones__header"], ["class", "referral-bonus-milestones__header-cell", 3, "is-active", "width", 4, "ngFor", "ngForOf"], [1, "referral-reward-milestones__bar"], [1, "referral-bonus-milestones__bar__progress"], ["appTypeface", "paragraph", 1, "referral-bonus-milestones__bar__progress-label"], ["appTypeface", "caption", 1, "referral-bonus-milestones__footer"], [1, "referral-bonus-milestones__footer-cell", "mod-start"], ["class", "referral-bonus-milestones__footer-cell", 3, "width", 4, "ngFor", "ngForOf"], [1, "referral-bonus-milestones__header-cell"], [1, "referral-bonus-milestones__footer-cell"], [1, "referral-bonus-milestones__footer-cell-label"]], template: function ReferralRewardMilestonesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ReferralRewardMilestonesComponent_ng_container_0_Template, 11, 7, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translocoRead", "user.referral_reward_milestones");
    } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_3__.TranslocoDirective, _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_0__.TypefaceDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], pipes: [_shared_pipes_micro_value_micro_value_pipe__WEBPACK_IMPORTED_MODULE_1__.MicroValuePipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.referral-bonus-milestones__header[_ngcontent-%COMP%], .referral-bonus-milestones__footer[_ngcontent-%COMP%] {\n  color: var(--color-referral-bonus-milestones);\n  display: flex;\n}\n\n.referral-bonus-milestones__header[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.referral-bonus-milestones__header-cell[_ngcontent-%COMP%] {\n  align-items: center;\n  display: inline-flex;\n  height: 32px;\n  justify-content: center;\n}\n\n.referral-bonus-milestones__header-cell[_ngcontent-%COMP%]    + .referral-bonus-milestones__header-cell[_ngcontent-%COMP%] {\n  border-left: 1px solid var(--color-outlines);\n}\n\n.referral-bonus-milestones__header-cell.is-active[_ngcontent-%COMP%] {\n  color: var(--color-referral-bonus-milestones-header-cell);\n  font-weight: 700;\n}\n\n.referral-bonus-milestones__footer[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.referral-bonus-milestones__footer-cell[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.referral-bonus-milestones__footer-cell[_ngcontent-%COMP%]:last-child   .referral-bonus-milestones__footer-cell-label[_ngcontent-%COMP%] {\n  transform: initial;\n}\n\n.referral-bonus-milestones__footer-cell.mod-start[_ngcontent-%COMP%] {\n  left: 0;\n  position: absolute;\n}\n\n.referral-bonus-milestones__footer-cell-label[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  transform: translateX(50%);\n}\n\n.referral-reward-milestones__bar[_ngcontent-%COMP%] {\n  align-items: center;\n  background-color: var(--color-outlines);\n  border-radius: 4px;\n  display: flex;\n  height: 8px;\n  margin: 8px 0 12px;\n  position: relative;\n}\n\n.referral-bonus-milestones__bar__progress[_ngcontent-%COMP%] {\n  background-color: var(--color-referral-bonus-milestones-bar-progress-background);\n  border-radius: inherit;\n  height: inherit;\n}\n\n.referral-bonus-milestones__bar__progress-label[_ngcontent-%COMP%] {\n  background-color: var(--color-referral-bonus-milestones-bar-progress-label);\n  border-radius: 12px;\n  color: var(--color-referral-bonus-milestones-bar-progress);\n  min-width: 32px;\n  padding: 4px;\n  position: absolute;\n  text-align: center;\n  transform: translateX(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZmVycmFsLXJld2FyZC1taWxlc3RvbmVzLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNoYXJlZFxcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7QUFERjs7QUFJQTs7RUFFRSw2Q0FBQTtFQUNBLGFBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBREY7O0FBR0U7RUFDRSw0Q0FBQTtBQURKOztBQUlFO0VBQ0UseURBQUE7RUFDQSxnQkFBQTtBQUZKOztBQU1BO0VBQ0Usa0JBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0FBSEY7O0FBTUk7RUFDRSxrQkFBQTtBQUpOOztBQVFFO0VBQ0UsT0FBQTtFQUNBLGtCQUFBO0FBTko7O0FBVUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwwQkFBQTtBQVBGOztBQVVBO0VBQ0UsbUJBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQy9DZTtFRGdEZixhQUFBO0VBQ0EsV0NsRFU7RURtRFYsa0JBQUE7RUFDQSxrQkFBQTtBQVBGOztBQVVBO0VBQ0UsZ0ZBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFQRjs7QUFVQTtFQUNFLDJFQUFBO0VBQ0EsbUJDakVjO0VEa0VkLDBEQUFBO0VBQ0EsZUFBQTtFQUNBLFlDakVlO0VEa0VmLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQVBGIiwiZmlsZSI6InJlZmVycmFsLXJld2FyZC1taWxlc3RvbmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFyaWFibGVzJztcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnJlZmVycmFsLWJvbnVzLW1pbGVzdG9uZXNfX2hlYWRlcixcclxuLnJlZmVycmFsLWJvbnVzLW1pbGVzdG9uZXNfX2Zvb3RlciB7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLXJlZmVycmFsLWJvbnVzLW1pbGVzdG9uZXMpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5yZWZlcnJhbC1ib251cy1taWxlc3RvbmVzX19oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnJlZmVycmFsLWJvbnVzLW1pbGVzdG9uZXNfX2hlYWRlci1jZWxsIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgJiArICYge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1vdXRsaW5lcyk7XHJcbiAgfVxyXG5cclxuICAmLmlzLWFjdGl2ZSB7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItcmVmZXJyYWwtYm9udXMtbWlsZXN0b25lcy1oZWFkZXItY2VsbCk7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxufVxyXG5cclxuLnJlZmVycmFsLWJvbnVzLW1pbGVzdG9uZXNfX2Zvb3RlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucmVmZXJyYWwtYm9udXMtbWlsZXN0b25lc19fZm9vdGVyLWNlbGwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIC5yZWZlcnJhbC1ib251cy1taWxlc3RvbmVzX19mb290ZXItY2VsbC1sYWJlbCB7XHJcbiAgICAgIHRyYW5zZm9ybTogaW5pdGlhbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYubW9kLXN0YXJ0IHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG59XHJcblxyXG4ucmVmZXJyYWwtYm9udXMtbWlsZXN0b25lc19fZm9vdGVyLWNlbGwtbGFiZWwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcclxufVxyXG5cclxuLnJlZmVycmFsLXJld2FyZC1taWxlc3RvbmVzX19iYXIge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itb3V0bGluZXMpO1xyXG4gIGJvcmRlci1yYWRpdXM6ICRncmlkLWhhbGYtc3RlcDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogJGdyaWQtc3RlcDtcclxuICBtYXJnaW46ICRncmlkLXN0ZXAgMCAkZ3JpZC1zdGVwICogMS41O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnJlZmVycmFsLWJvbnVzLW1pbGVzdG9uZXNfX2Jhcl9fcHJvZ3Jlc3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXJlZmVycmFsLWJvbnVzLW1pbGVzdG9uZXMtYmFyLXByb2dyZXNzLWJhY2tncm91bmQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgaGVpZ2h0OiBpbmhlcml0O1xyXG59XHJcblxyXG4ucmVmZXJyYWwtYm9udXMtbWlsZXN0b25lc19fYmFyX19wcm9ncmVzcy1sYWJlbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcmVmZXJyYWwtYm9udXMtbWlsZXN0b25lcy1iYXItcHJvZ3Jlc3MtbGFiZWwpO1xyXG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1yZWZlcnJhbC1ib251cy1taWxlc3RvbmVzLWJhci1wcm9ncmVzcyk7XHJcbiAgbWluLXdpZHRoOiAzMnB4O1xyXG4gIHBhZGRpbmc6ICRncmlkLWhhbGYtc3RlcDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxufVxyXG4iLCJAdXNlICdzYXNzOm1hdGgnO1xyXG5AaW1wb3J0ICdjb2xvcnMnO1xyXG5cclxuQGZ1bmN0aW9uIGhleFRvUkdCU3RyaW5nKCRoZXhDb2xvcikge1xyXG4gIEByZXR1cm4gJyN7cmVkKCRoZXhDb2xvcil9LCN7Z3JlZW4oJGhleENvbG9yKX0sI3tibHVlKCRoZXhDb2xvcil9JztcclxufVxyXG5cclxuJG1haW4tZm9udC1zaXplOiAxNnB4O1xyXG4kbWFpbi1mb250LWZhbWlseTogI3snSW50ZXIsIEFyaWFsLCBzYW5zLXNlcmlmJ307XHJcblxyXG4kYm9yZGVyLXJhZGl1czogMTJweDtcclxuXHJcbiRncmlkLXN0ZXA6IDhweDtcclxuJGdyaWQtaGFsZi1zdGVwOiBtYXRoLmRpdigkZ3JpZC1zdGVwLCAyKTtcclxuXHJcbiRwYWdlLXdpZHRoOiAxMjAwcHg7XHJcbiRwYWdlLXNpZGUtcGFkZGluZzogJGdyaWQtc3RlcCAqIDM7XHJcblxyXG4kY29sb3ItZm9udC1iYXNlOiAkY29sb3ItYmxhY2s7XHJcbiRjb2xvci1wcmltYXJ5OiAkY29sb3ItYmx1ZTtcclxuJGNvbG9yLW5lZ2F0aXZlOiAkY29sb3ItcmVkO1xyXG4kY29sb3ItbmV1dHJhbDogJGNvbG9yLWdyZXk7XHJcbiRjb2xvci1wb3NpdGl2ZTogJGNvbG9yLWdyZWVuO1xyXG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 393:
/*!*************************************************************************!*\
  !*** ./projects/charon/src/app/user/components/referral-stats/index.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReferralStatsComponent": () => (/* reexport safe */ _referral_stats_component__WEBPACK_IMPORTED_MODULE_0__.ReferralStatsComponent)
/* harmony export */ });
/* harmony import */ var _referral_stats_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./referral-stats.component */ 53224);



/***/ }),

/***/ 53224:
/*!********************************************************************************************!*\
  !*** ./projects/charon/src/app/user/components/referral-stats/referral-stats.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReferralStatsComponent": () => (/* binding */ ReferralStatsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 87554);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 31682);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 62640);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 53399);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 98067);
/* harmony import */ var _shared_analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/analytics */ 47471);
/* harmony import */ var _shared_svg_icons_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/svg-icons/link */ 40329);
/* harmony import */ var _shared_pipes_micro_value__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/pipes/micro-value */ 55219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _shared_services_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/configuration */ 1683);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services */ 88718);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngneat/svg-icon */ 49366);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngneat/transloco */ 44812);
/* harmony import */ var _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../shared/directives/typeface/typeface.directive */ 31857);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 36180);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ 88111);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ 52503);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../shared/components/button/button.component */ 4013);
/* harmony import */ var _shared_analytics_directives_analytics_click_event_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../shared/analytics/directives/analytics-click-event.directive */ 30229);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/cdk/clipboard */ 60425);
/* harmony import */ var _shared_directives_clipboard_copied_notification_clipboard_copied_notification_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../shared/directives/clipboard-copied-notification/clipboard-copied-notification.directive */ 87710);
/* harmony import */ var _referral_reward_milestones_referral_reward_milestones_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../referral-reward-milestones/referral-reward-milestones.component */ 4872);
/* harmony import */ var _referral_bonus_milestones_referral_bonus_milestones_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../referral-bonus-milestones/referral-bonus-milestones.component */ 59639);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-skeleton-loader */ 39752);
/* harmony import */ var _shared_pipes_number_format_number_format_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../shared/pipes/number-format/number-format.pipe */ 17667);

























function ReferralStatsComponent_ng_container_0_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    const translate_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", option_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", translate_r3("time_options." + option_r6), " ");
} }
const _c0 = function (a0) { return { reward: a0 }; };
const _c1 = function (a0) { return { received: a0 }; };
function ReferralStatsComponent_ng_container_0_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 16)(1, "div", 17)(2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 21)(8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "div", 23)(14, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](18, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](19, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "div", 25)(21, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](23, "numberFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](24, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](27, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](28, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const stats_r9 = ctx.ngIf;
    const translate_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", stats_r9.registered, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", translate_r3("stats.signed_up"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", stats_r9.installed, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", translate_r3("stats.installed"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", stats_r9.confirmed, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", translate_r3("stats.rewards"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("innerHTML", translate_r3("stats.reward_for_referral", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](24, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](19, 9, ctx_r8.rewardForReferral$))), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", translate_r3("stats.dec_received", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](26, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind3"](23, 11, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](24, 15, ctx_r8.decRewards$), null, true))), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ~", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind4"](27, 17, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](28, 22, ctx_r8.usdReceived$), "USD", "symbol", "1.4"), " ");
} }
const _c2 = function (a0) { return { uPDVToEarn: a0 }; };
const _c3 = function (a0) { return { days: a0 }; };
function ReferralStatsComponent_ng_container_0_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ReferralStatsComponent_ng_container_0_ng_container_7_div_1_Template, 29, 28, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "svg-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div")(15, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](19, "app-referral-reward-milestones", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](20, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](21, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](22, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "div")(24, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](28, "app-referral-bonus-milestones", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](29, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](30, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const translate_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 15, ctx_r5.stats$));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("innerHTML", translate_r3("steps", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](31, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 17, ctx_r5.uPDVToEarnByReferral$))), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](translate_r3("rewards_days", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](33, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](8, 19, ctx_r5.daysForReward$))));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("appAnalyticsClickEvent", ctx_r5.analyticsEvent.CopyReferralCode)("cdkCopyToClipboard", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](10, 21, ctx_r5.link$))("appClipboardCopiedNotification", "user.referral_stats.link_copied");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", translate_r3("copy_invite_link"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", translate_r3("reward_milestones.header"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", translate_r3("reward_milestones.subheader"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("referrals", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](20, 23, ctx_r5.referrals$))("rewards", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](21, 25, ctx_r5.senderRewards$));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", translate_r3("bonus_milestones.header"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", translate_r3("bonus_milestones.subheader"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("bonuses", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](29, 27, ctx_r5.senderBonuses$))("referrals", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](30, 29, ctx_r5.referrals$));
} }
function ReferralStatsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 2)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "mat-select", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function ReferralStatsComponent_ng_container_0_Template_mat_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r12.selectTime($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, ReferralStatsComponent_ng_container_0_mat_option_6_Template, 2, 2, "mat-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, ReferralStatsComponent_ng_container_0_ng_container_7_Template, 31, 35, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const translate_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](translate_r3("header"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 5, ctx_r0.selectedTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r0.timeOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](8, 7, ctx_r0.isLoaded$))("ngIfElse", _r1);
} }
const _c4 = function () { return { height: "300px" }; };
function ReferralStatsComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "ngx-skeleton-loader", 28);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("count", 1)("theme", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](2, _c4));
} }
class ReferralStatsComponent {
    constructor(configService, currencyService, microValuePipe, referralService, svgIconRegistry) {
        this.configService = configService;
        this.currencyService = currencyService;
        this.microValuePipe = microValuePipe;
        this.referralService = referralService;
        this.svgIconRegistry = svgIconRegistry;
        this.timeOptions = [
            'last30Days',
            'total',
        ];
        this.selectedTime = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject(this.timeOptions[0]);
        this.analyticsEvent = _shared_analytics__WEBPACK_IMPORTED_MODULE_0__.AnalyticsEvent;
    }
    ngOnInit() {
        this.svgIconRegistry.register([
            _shared_svg_icons_link__WEBPACK_IMPORTED_MODULE_1__.svgLink,
        ]);
        const config$ = this.referralService.getConfig().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.share)());
        this.uPDVToEarnByReferral$ = config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)((config) => +config.thresholdPDV * _shared_pipes_micro_value__WEBPACK_IMPORTED_MODULE_2__.MICRO_PDV_DIVISOR));
        this.daysForReward$ = config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)((config) => config.thresholdDays));
        this.link$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.combineLatest)([
            this.configService.getReferralUrl(),
            this.referralService.getCode(),
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(([referralUrl, code]) => `${referralUrl}/?referralCode=${code}`), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.shareReplay)(1));
        this.stats$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.combineLatest)([
            this.referralService.getStats(),
            this.selectedTime,
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(([timeStats, time]) => timeStats[time]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.shareReplay)(1));
        this.decRewards$ = this.stats$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)((stats) => this.microValuePipe.transform(stats.reward.amount)));
        this.usdReceived$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.combineLatest)([
            this.decRewards$,
            this.currencyService.getDecentrCoinRateForUsd(),
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(([decRewards, coinRate]) => decRewards * coinRate));
        this.rewardForReferral$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.combineLatest)([
            this.stats$,
            config$,
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(([stats, config]) => config.senderRewardLevels
            .slice()
            .reverse()
            .find((level) => (level.from - 1) <= stats.confirmed).reward), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(this.microValuePipe.transform));
        this.referrals$ = this.stats$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)((stats) => stats.confirmed));
        this.senderBonuses$ = config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(({ senderBonus }) => senderBonus));
        this.senderRewards$ = config$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(({ senderRewardLevels }) => senderRewardLevels));
        this.isLoaded$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.combineLatest)([
            config$,
            this.link$,
            this.stats$,
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(([...conditions]) => conditions.every(Boolean)));
    }
    selectTime(time) {
        this.selectedTime.next(time);
    }
}
ReferralStatsComponent.ɵfac = function ReferralStatsComponent_Factory(t) { return new (t || ReferralStatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_services_configuration__WEBPACK_IMPORTED_MODULE_3__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_4__.CurrencyService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_pipes_micro_value__WEBPACK_IMPORTED_MODULE_2__.MicroValuePipe), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_4__.ReferralService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_18__.SvgIconRegistry)); };
ReferralStatsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: ReferralStatsComponent, selectors: [["app-referral-stats"]], decls: 3, vars: 1, consts: [[4, "transloco", "translocoRead"], ["loading", ""], ["appTypeface", "subheader", 1, "referral-stats__block__header"], [1, "referral-stats__time-select", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [3, "value"], ["class", "referral-stats__stats-grid", "appTypeface", "paragraph", 4, "ngIf"], ["appTypeface", "paragraph", 1, "referral-stats__hints"], [3, "innerHTML"], ["app-button", "", "color", "grey", 1, "referral-stats__copy-link-button", 3, "appAnalyticsClickEvent", "cdkCopyToClipboard", "appClipboardCopiedNotification"], ["key", "link"], [1, "referral-stats__divider"], ["appTypeface", "paragraph", 1, "referral-stats__block__subheader"], [1, "referral-stats__reward-milestones", 3, "referrals", "rewards"], [1, "referral-stats__bonus-milestones", 3, "bonuses", "referrals"], ["appTypeface", "paragraph", 1, "referral-stats__stats-grid"], [1, "referral-stats__stats-grid__signed-up"], ["appTypeface", "header-3", 1, "referral-stats__stats-grid__value"], [1, "referral-stats__stats-grid__label"], [1, "referral-stats__stats-grid__divider", "mod-first"], [1, "referral-stats__stats-grid__installed"], [1, "referral-stats__stats-grid__divider", "mod-second"], [1, "referral-stats__stats-grid__rewards"], ["appTypeface", "caption", 1, "referral-stats__stats-grid__reward-for-referral", 3, "innerHTML"], ["appTypeface", "caption", 1, "referral-stats__stats-grid__received"], [1, "referral-stats__stats-grid__received-dec"], [1, "referral-stats__stats-grid__received-usd"], [3, "count", "theme"]], template: function ReferralStatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, ReferralStatsComponent_ng_container_0_Template, 9, 9, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ReferralStatsComponent_ng_template_1_Template, 1, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("translocoRead", "user.referral_stats");
    } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_19__.TranslocoDirective, _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_5__.TypefaceDirective, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgModel, _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_22__["ɵk"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_22__["ɵe"], _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__.ButtonComponent, _shared_analytics_directives_analytics_click_event_directive__WEBPACK_IMPORTED_MODULE_7__.AnalyticsClickEventDirective, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_25__.CdkCopyToClipboard, _shared_directives_clipboard_copied_notification_clipboard_copied_notification_directive__WEBPACK_IMPORTED_MODULE_8__.ClipboardCopiedNotificationDirective, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_18__.SvgIconComponent, _referral_reward_milestones_referral_reward_milestones_component__WEBPACK_IMPORTED_MODULE_9__.ReferralRewardMilestonesComponent, _referral_bonus_milestones_referral_bonus_milestones_component__WEBPACK_IMPORTED_MODULE_10__.ReferralBonusMilestonesComponent, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_26__.NgxSkeletonLoaderComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.AsyncPipe, _shared_pipes_number_format_number_format_pipe__WEBPACK_IMPORTED_MODULE_11__.NumberFormatPipe, _angular_common__WEBPACK_IMPORTED_MODULE_23__.CurrencyPipe], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 16px;\n}\n\n.referral-stats__block__header[_ngcontent-%COMP%] {\n  column-gap: 12px;\n  display: flex;\n  font-weight: 500;\n}\n\n.referral-stats__block__subheader[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.referral-stats__time-select[_ngcontent-%COMP%] {\n  max-width: 120px;\n}\n\n.referral-stats__time-select[_ngcontent-%COMP%]  .mat-select-value-text, .referral-stats__time-select[_ngcontent-%COMP%]  .mat-select-arrow {\n  color: var(--color-referral-stats-time-select);\n}\n\n.referral-stats__stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-areas: \"signed-up divider-1 installed divider-2 rewards\" \"reward-for-referral reward-for-referral reward-for-referral empty received\";\n  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr) auto minmax(0, 1fr);\n  grid-row-gap: 8px;\n  row-gap: 8px;\n}\n\n.referral-stats__stats-grid__divider[_ngcontent-%COMP%] {\n  background-color: var(--color-outlines);\n  height: 100%;\n  margin: 0 8px;\n  width: 2px;\n}\n\n.referral-stats__stats-grid__divider.mod-first[_ngcontent-%COMP%] {\n  grid-area: divider-1;\n}\n\n.referral-stats__stats-grid__divider.mod-second[_ngcontent-%COMP%] {\n  grid-area: divider-2;\n}\n\n.referral-stats__stats-grid__value[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.referral-stats__stats-grid__label[_ngcontent-%COMP%] {\n  color: var(--color-referral-stats-grid-label);\n}\n\n.referral-stats__stats-grid__signed-up[_ngcontent-%COMP%] {\n  grid-area: signed-up;\n  padding-right: 16px;\n}\n\n.referral-stats__stats-grid__installed[_ngcontent-%COMP%] {\n  grid-area: installed;\n  padding: 0 16px;\n}\n\n.referral-stats__stats-grid__rewards[_ngcontent-%COMP%] {\n  grid-area: rewards;\n  padding: 0 16px;\n}\n\n.referral-stats__stats-grid__reward-for-referral[_ngcontent-%COMP%] {\n  background: var(--color-referral-stats-grid-reward-for-referral-background);\n  border-radius: 12px;\n  color: var(--color-referral-stats-grid-reward-for-referral);\n  grid-area: reward-for-referral;\n  padding: 4px 64px;\n  text-align: center;\n}\n\n.referral-stats__stats-grid__received[_ngcontent-%COMP%] {\n  background: rgba(var(--color-referral-stats-grid-recieved), 0.08);\n  border-radius: 12px;\n  grid-area: received;\n  padding: 4px;\n  text-align: center;\n}\n\n.referral-stats__stats-grid__received-dec[_ngcontent-%COMP%] {\n  color: var(--color-referral-stats-grid-recieved-dec);\n}\n\n.referral-stats__stats-grid__received-usd[_ngcontent-%COMP%] {\n  color: var(--color-referral-stats-grid-recieved-usd);\n}\n\n.referral-stats__hints[_ngcontent-%COMP%] {\n  display: flex;\n  color: var(--color-referral-stats-grid-hints);\n  flex-direction: column;\n  row-gap: 8px;\n}\n\n.referral-stats__copy-link-button[_ngcontent-%COMP%] {\n  width: max-content;\n}\n\n.referral-stats__divider[_ngcontent-%COMP%] {\n  background-color: var(--color-outlines);\n  height: 8px;\n  margin: 8px -16px 0;\n}\n\n.referral-stats__reward-milestones[_ngcontent-%COMP%], .referral-stats__bonus-milestones[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZmVycmFsLXN0YXRzLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNoYXJlZFxcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBREY7O0FBS0E7RUFDRSxlQ0pVO0FERVo7O0FBS0E7RUFDRSxnQkFBQTtBQUZGOztBQUtJOztFQUVFLDhDQUFBO0FBSE47O0FBUUE7RUFDRSxhQUFBO0VBQ0EsbUpBQUE7RUFFQSw2RUFBQTtFQUNBLGlCQ3ZCVTtFRHVCVixZQ3ZCVTtBRGlCWjs7QUFTQTtFQUNFLHVDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FBTkY7O0FBUUU7RUFDRSxvQkFBQTtBQU5KOztBQVNFO0VBQ0Usb0JBQUE7QUFQSjs7QUFXQTtFQUNFLGdCQUFBO0FBUkY7O0FBV0E7RUFDRSw2Q0FBQTtBQVJGOztBQVdBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtBQVJGOztBQVdBO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0FBUkY7O0FBV0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFSRjs7QUFXQTtFQUNFLDJFQUFBO0VBQ0EsbUJDcEVjO0VEcUVkLDJEQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBUkY7O0FBV0E7RUFDRSxpRUFBQTtFQUNBLG1CQzdFYztFRDhFZCxtQkFBQTtFQUNBLFlDNUVlO0VENkVmLGtCQUFBO0FBUkY7O0FBV0E7RUFDRSxvREFBQTtBQVJGOztBQVdBO0VBQ0Usb0RBQUE7QUFSRjs7QUFXQTtFQUNFLGFBQUE7RUFDQSw2Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUM3RlU7QURxRlo7O0FBV0E7RUFDRSxrQkFBQTtBQVJGOztBQVdBO0VBQ0UsdUNBQUE7RUFDQSxXQ3RHVTtFRHVHVixtQkFBQTtBQVJGOztBQVdBOztFQUVFLGdCQUFBO0FBUkYiLCJmaWxlIjoicmVmZXJyYWwtc3RhdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICByb3ctZ2FwOiAkZ3JpZC1zdGVwICogMjtcclxufVxyXG5cclxuLnJlZmVycmFsLXN0YXRzX19ibG9ja19faGVhZGVyIHtcclxuICBjb2x1bW4tZ2FwOiAkZ3JpZC1zdGVwICogMS41O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuXHJcbi5yZWZlcnJhbC1zdGF0c19fYmxvY2tfX3N1YmhlYWRlciB7XHJcbiAgbWFyZ2luLXRvcDogJGdyaWQtc3RlcDtcclxufVxyXG5cclxuLnJlZmVycmFsLXN0YXRzX190aW1lLXNlbGVjdCB7XHJcbiAgbWF4LXdpZHRoOiAxMjBweDtcclxuXHJcbiAgJjo6bmctZGVlcCB7XHJcbiAgICAubWF0LXNlbGVjdC12YWx1ZS10ZXh0LFxyXG4gICAgLm1hdC1zZWxlY3QtYXJyb3cge1xyXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3ItcmVmZXJyYWwtc3RhdHMtdGltZS1zZWxlY3QpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnJlZmVycmFsLXN0YXRzX19zdGF0cy1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdzaWduZWQtdXAgZGl2aWRlci0xIGluc3RhbGxlZCBkaXZpZGVyLTIgcmV3YXJkcydcclxuICAgICAgICAgICAgICAgICAgICAgICAncmV3YXJkLWZvci1yZWZlcnJhbCByZXdhcmQtZm9yLXJlZmVycmFsIHJld2FyZC1mb3ItcmVmZXJyYWwgZW1wdHkgcmVjZWl2ZWQnO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDFmcikgYXV0byBtaW5tYXgoMCwgMWZyKSBhdXRvIG1pbm1heCgwLCAxZnIpO1xyXG4gIHJvdy1nYXA6ICRncmlkLXN0ZXA7XHJcbn1cclxuXHJcbi5yZWZlcnJhbC1zdGF0c19fc3RhdHMtZ3JpZF9fZGl2aWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itb3V0bGluZXMpO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDAgJGdyaWQtc3RlcDtcclxuICB3aWR0aDogMnB4O1xyXG5cclxuICAmLm1vZC1maXJzdCB7XHJcbiAgICBncmlkLWFyZWE6IGRpdmlkZXItMTtcclxuICB9XHJcblxyXG4gICYubW9kLXNlY29uZCB7XHJcbiAgICBncmlkLWFyZWE6IGRpdmlkZXItMjtcclxuICB9XHJcbn1cclxuXHJcbi5yZWZlcnJhbC1zdGF0c19fc3RhdHMtZ3JpZF9fdmFsdWUge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5yZWZlcnJhbC1zdGF0c19fc3RhdHMtZ3JpZF9fbGFiZWwge1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1yZWZlcnJhbC1zdGF0cy1ncmlkLWxhYmVsKTtcclxufVxyXG5cclxuLnJlZmVycmFsLXN0YXRzX19zdGF0cy1ncmlkX19zaWduZWQtdXAge1xyXG4gIGdyaWQtYXJlYTogc2lnbmVkLXVwO1xyXG4gIHBhZGRpbmctcmlnaHQ6ICRncmlkLXN0ZXAgKiAyO1xyXG59XHJcblxyXG4ucmVmZXJyYWwtc3RhdHNfX3N0YXRzLWdyaWRfX2luc3RhbGxlZCB7XHJcbiAgZ3JpZC1hcmVhOiBpbnN0YWxsZWQ7XHJcbiAgcGFkZGluZzogMCAkZ3JpZC1zdGVwICogMjtcclxufVxyXG5cclxuLnJlZmVycmFsLXN0YXRzX19zdGF0cy1ncmlkX19yZXdhcmRzIHtcclxuICBncmlkLWFyZWE6IHJld2FyZHM7XHJcbiAgcGFkZGluZzogMCAkZ3JpZC1zdGVwICogMjtcclxufVxyXG5cclxuLnJlZmVycmFsLXN0YXRzX19zdGF0cy1ncmlkX19yZXdhcmQtZm9yLXJlZmVycmFsIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1yZWZlcnJhbC1zdGF0cy1ncmlkLXJld2FyZC1mb3ItcmVmZXJyYWwtYmFja2dyb3VuZCk7XHJcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLXJlZmVycmFsLXN0YXRzLWdyaWQtcmV3YXJkLWZvci1yZWZlcnJhbCk7XHJcbiAgZ3JpZC1hcmVhOiByZXdhcmQtZm9yLXJlZmVycmFsO1xyXG4gIHBhZGRpbmc6ICRncmlkLWhhbGYtc3RlcCAkZ3JpZC1zdGVwICogODtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZWZlcnJhbC1zdGF0c19fc3RhdHMtZ3JpZF9fcmVjZWl2ZWQge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEodmFyKC0tY29sb3ItcmVmZXJyYWwtc3RhdHMtZ3JpZC1yZWNpZXZlZCksIC4wOCk7XHJcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgZ3JpZC1hcmVhOiByZWNlaXZlZDtcclxuICBwYWRkaW5nOiAkZ3JpZC1oYWxmLXN0ZXA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucmVmZXJyYWwtc3RhdHNfX3N0YXRzLWdyaWRfX3JlY2VpdmVkLWRlYyB7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLXJlZmVycmFsLXN0YXRzLWdyaWQtcmVjaWV2ZWQtZGVjKTtcclxufVxyXG5cclxuLnJlZmVycmFsLXN0YXRzX19zdGF0cy1ncmlkX19yZWNlaXZlZC11c2Qge1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1yZWZlcnJhbC1zdGF0cy1ncmlkLXJlY2lldmVkLXVzZCk7XHJcbn1cclxuXHJcbi5yZWZlcnJhbC1zdGF0c19faGludHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLXJlZmVycmFsLXN0YXRzLWdyaWQtaGludHMpO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcm93LWdhcDogJGdyaWQtc3RlcDtcclxufVxyXG5cclxuLnJlZmVycmFsLXN0YXRzX19jb3B5LWxpbmstYnV0dG9uIHtcclxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5yZWZlcnJhbC1zdGF0c19fZGl2aWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itb3V0bGluZXMpO1xyXG4gIGhlaWdodDogJGdyaWQtc3RlcDtcclxuICBtYXJnaW46ICRncmlkLXN0ZXAgKC0kZ3JpZC1zdGVwICogMikgMDtcclxufVxyXG5cclxuLnJlZmVycmFsLXN0YXRzX19yZXdhcmQtbWlsZXN0b25lcyxcclxuLnJlZmVycmFsLXN0YXRzX19ib251cy1taWxlc3RvbmVzIHtcclxuICBtYXJnaW4tdG9wOiAkZ3JpZC1zdGVwICogMjtcclxufVxyXG4iLCJAdXNlICdzYXNzOm1hdGgnO1xyXG5AaW1wb3J0ICdjb2xvcnMnO1xyXG5cclxuQGZ1bmN0aW9uIGhleFRvUkdCU3RyaW5nKCRoZXhDb2xvcikge1xyXG4gIEByZXR1cm4gJyN7cmVkKCRoZXhDb2xvcil9LCN7Z3JlZW4oJGhleENvbG9yKX0sI3tibHVlKCRoZXhDb2xvcil9JztcclxufVxyXG5cclxuJG1haW4tZm9udC1zaXplOiAxNnB4O1xyXG4kbWFpbi1mb250LWZhbWlseTogI3snSW50ZXIsIEFyaWFsLCBzYW5zLXNlcmlmJ307XHJcblxyXG4kYm9yZGVyLXJhZGl1czogMTJweDtcclxuXHJcbiRncmlkLXN0ZXA6IDhweDtcclxuJGdyaWQtaGFsZi1zdGVwOiBtYXRoLmRpdigkZ3JpZC1zdGVwLCAyKTtcclxuXHJcbiRwYWdlLXdpZHRoOiAxMjAwcHg7XHJcbiRwYWdlLXNpZGUtcGFkZGluZzogJGdyaWQtc3RlcCAqIDM7XHJcblxyXG4kY29sb3ItZm9udC1iYXNlOiAkY29sb3ItYmxhY2s7XHJcbiRjb2xvci1wcmltYXJ5OiAkY29sb3ItYmx1ZTtcclxuJGNvbG9yLW5lZ2F0aXZlOiAkY29sb3ItcmVkO1xyXG4kY29sb3ItbmV1dHJhbDogJGNvbG9yLWdyZXk7XHJcbiRjb2xvci1wb3NpdGl2ZTogJGNvbG9yLWdyZWVuO1xyXG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 50985:
/*!******************************************************************************!*\
  !*** ./projects/charon/src/app/user/components/restore-seed-dialog/index.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestoreSeedDialogComponent": () => (/* reexport safe */ _restore_seed_dialog_component__WEBPACK_IMPORTED_MODULE_0__.RestoreSeedDialogComponent)
/* harmony export */ });
/* harmony import */ var _restore_seed_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restore-seed-dialog.component */ 79457);



/***/ }),

/***/ 79457:
/*!******************************************************************************************************!*\
  !*** ./projects/charon/src/app/user/components/restore-seed-dialog/restore-seed-dialog.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RestoreSeedDialogComponent": () => (/* binding */ RestoreSeedDialogComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _ngneat_reactive_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngneat/reactive-forms */ 48075);
/* harmony import */ var _shared_components_form_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/components/form-error */ 1674);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _core_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/auth */ 51519);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngneat/transloco */ 44812);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 39670);
/* harmony import */ var _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../shared/directives/typeface/typeface.directive */ 31857);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ 88111);
/* harmony import */ var _shared_components_input_container_input_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../shared/components/input-container/input-container.component */ 29130);
/* harmony import */ var _shared_components_controls_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../shared/components/controls/input/input.component */ 49874);
/* harmony import */ var _shared_components_form_error_form_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../shared/components/form-error/form-error.component */ 61926);
/* harmony import */ var _shared_components_seed_seed_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../shared/components/seed/seed.component */ 80563);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../shared/components/button/button.component */ 4013);

















function RestoreSeedDialogComponent_ng_container_0_form_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function RestoreSeedDialogComponent_ng_container_0_form_4_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r5.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "app-input-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "app-input", 9)(3, "app-form-error", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const translate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("id", ctx_r2.formId)("formGroup", ctx_r2.passwordForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", "password")("placeholder", translate_r1("form.password.placeholder"))("formControlName", "password");
} }
function RestoreSeedDialogComponent_ng_container_0_app_seed_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-seed", 11);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r3.seedPhrase);
} }
function RestoreSeedDialogComponent_ng_container_0_button_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const translate_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("form", ctx_r4.formId);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", translate_r1("restore"), " ");
} }
function RestoreSeedDialogComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "header", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "mat-dialog-content", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, RestoreSeedDialogComponent_ng_container_0_form_4_Template, 4, 5, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, RestoreSeedDialogComponent_ng_container_0_app_seed_5_Template, 1, 1, "app-seed", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "mat-dialog-actions", 5)(7, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, RestoreSeedDialogComponent_ng_container_0_button_9_Template, 2, 2, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const translate_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", translate_r1("title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.seedPhrase);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.seedPhrase);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", translate_r1("close"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.seedPhrase);
} }
class RestoreSeedDialogComponent {
    constructor(authService, changeDetectorRef) {
        this.authService = authService;
        this.changeDetectorRef = changeDetectorRef;
        this.formId = 'RESTORE_SEED_DIALOG_FORM';
    }
    ngOnInit() {
        this.passwordForm = RestoreSeedDialogComponent.createForm();
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.passwordForm.valid) {
                return;
            }
            const password = this.passwordForm.getRawValue().password;
            const isPasswordValid = yield this.authService.validateCurrentUserPassword(password);
            if (!isPasswordValid) {
                return this.passwordForm.controls.password.setErrors({ invalid: true });
            }
            this.seedPhrase = this.authService.restoreSeedPhrase(password);
            this.changeDetectorRef.markForCheck();
        });
    }
    static createForm() {
        return new _ngneat_reactive_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
            password: new _ngneat_reactive_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required,
            ]),
        });
    }
}
RestoreSeedDialogComponent.ɵfac = function RestoreSeedDialogComponent_Factory(t) { return new (t || RestoreSeedDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core_auth__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef)); };
RestoreSeedDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: RestoreSeedDialogComponent, selectors: [["app-restore-seed-dialog"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([
            {
                provide: _shared_components_form_error__WEBPACK_IMPORTED_MODULE_0__.FORM_ERROR_TRANSLOCO_READ,
                useValue: 'user.restore_seed_dialog.form',
            },
        ])], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], ["mat-dialog-title", "", "appTypeface", "subheader", 1, "restore-seed-dialog__title"], ["appTypeface", "paragraph", 1, "restore-seed-dialog__content"], ["class", "restore-seed-dialog__form", 3, "id", "formGroup", "ngSubmit", 4, "ngIf"], ["class", "restore-seed-dialog__seed-field", 3, "value", 4, "ngIf"], [1, "restore-seed-dialog__actions"], ["app-button", "", "color", "grey", "mat-dialog-close", "", 1, "restore-seed-dialog__button"], ["class", "restore-seed-dialog__button", "app-button", "", "type", "submit", 4, "ngIf"], [1, "restore-seed-dialog__form", 3, "id", "formGroup", "ngSubmit"], [3, "type", "placeholder", "formControlName"], ["controlName", "password"], [1, "restore-seed-dialog__seed-field", 3, "value"], ["app-button", "", "type", "submit", 1, "restore-seed-dialog__button"]], template: function RestoreSeedDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, RestoreSeedDialogComponent_ng_container_0_Template, 10, 5, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("translocoRead", "user.restore_seed_dialog");
    } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_12__.TranslocoDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogTitle, _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_2__.TypefaceDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogContent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_15__["ɵa"], _shared_components_input_container_input_container_component__WEBPACK_IMPORTED_MODULE_3__.InputContainerComponent, _shared_components_controls_input_input_component__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_15__["ɵk"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_15__["ɵe"], _shared_components_form_error_form_error_component__WEBPACK_IMPORTED_MODULE_5__.FormErrorComponent, _shared_components_seed_seed_component__WEBPACK_IMPORTED_MODULE_6__.SeedComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogActions, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_7__.ButtonComponent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialogClose], styles: [".restore-seed-dialog__title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin: 0;\n}\n\n.restore-seed-dialog__content[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  padding: 0;\n}\n\n.restore-seed-dialog__restore-button[_ngcontent-%COMP%] {\n  height: 48px;\n}\n\n.restore-seed-dialog__seed-field[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  max-width: 500px;\n}\n\n.restore-seed-dialog__actions[_ngcontent-%COMP%] {\n  column-gap: 12px;\n  justify-content: flex-end;\n  margin: 8px 0 0;\n  padding: 0;\n}\n\n.restore-seed-dialog__button[_ngcontent-%COMP%] {\n  height: 48px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3RvcmUtc2VlZC1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2hhcmVkXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtBQURGOztBQU9BO0VBQ0UsWUFBQTtBQUpGOztBQU9BO0VBQ0Usa0JDUlU7RURTVixnQkFBQTtBQUpGOztBQU9BO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBSkY7O0FBT0E7RUFDRSxZQUFBO0FBSkYiLCJmaWxlIjoicmVzdG9yZS1zZWVkLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcblxyXG4ucmVzdG9yZS1zZWVkLWRpYWxvZ19fdGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ucmVzdG9yZS1zZWVkLWRpYWxvZ19fY29udGVudCB7XHJcbiAgbWFyZ2luOiAkZ3JpZC1zdGVwIDAgMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ucmVzdG9yZS1zZWVkLWRpYWxvZ19fZm9ybSB7XHJcbn1cclxuXHJcbi5yZXN0b3JlLXNlZWQtZGlhbG9nX19yZXN0b3JlLWJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG59XHJcblxyXG4ucmVzdG9yZS1zZWVkLWRpYWxvZ19fc2VlZC1maWVsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogJGdyaWQtc3RlcDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG4ucmVzdG9yZS1zZWVkLWRpYWxvZ19fYWN0aW9ucyB7XHJcbiAgY29sdW1uLWdhcDogJGdyaWQtc3RlcCAqIDEuNTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIG1hcmdpbjogJGdyaWQtc3RlcCAwIDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnJlc3RvcmUtc2VlZC1kaWFsb2dfX2J1dHRvbiB7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG59XHJcbiIsIkB1c2UgJ3Nhc3M6bWF0aCc7XHJcbkBpbXBvcnQgJ2NvbG9ycyc7XHJcblxyXG5AZnVuY3Rpb24gaGV4VG9SR0JTdHJpbmcoJGhleENvbG9yKSB7XHJcbiAgQHJldHVybiAnI3tyZWQoJGhleENvbG9yKX0sI3tncmVlbigkaGV4Q29sb3IpfSwje2JsdWUoJGhleENvbG9yKX0nO1xyXG59XHJcblxyXG4kbWFpbi1mb250LXNpemU6IDE2cHg7XHJcbiRtYWluLWZvbnQtZmFtaWx5OiAjeydJbnRlciwgQXJpYWwsIHNhbnMtc2VyaWYnfTtcclxuXHJcbiRib3JkZXItcmFkaXVzOiAxMnB4O1xyXG5cclxuJGdyaWQtc3RlcDogOHB4O1xyXG4kZ3JpZC1oYWxmLXN0ZXA6IG1hdGguZGl2KCRncmlkLXN0ZXAsIDIpO1xyXG5cclxuJHBhZ2Utd2lkdGg6IDEyMDBweDtcclxuJHBhZ2Utc2lkZS1wYWRkaW5nOiAkZ3JpZC1zdGVwICogMztcclxuXHJcbiRjb2xvci1mb250LWJhc2U6ICRjb2xvci1ibGFjaztcclxuJGNvbG9yLXByaW1hcnk6ICRjb2xvci1ibHVlO1xyXG4kY29sb3ItbmVnYXRpdmU6ICRjb2xvci1yZWQ7XHJcbiRjb2xvci1uZXV0cmFsOiAkY29sb3ItZ3JleTtcclxuJGNvbG9yLXBvc2l0aXZlOiAkY29sb3ItZ3JlZW47XHJcbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 75596:
/*!*********************************************************************************************!*\
  !*** ./projects/charon/src/app/user/pages/edit-profile-page/edit-profile-page.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePageComponent": () => (/* binding */ EditProfilePageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 7964);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 82426);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 94850);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngneat/until-destroy */ 10257);
/* harmony import */ var _shared_components_form_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/components/form-error */ 1674);
/* harmony import */ var _app_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app-route */ 4473);
/* harmony import */ var _edit_profile_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-profile-page.service */ 63232);
/* harmony import */ var _core_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/notifications */ 21796);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _core_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/auth */ 51519);
/* harmony import */ var _ngneat_reactive_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngneat/reactive-forms */ 48075);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services */ 88718);
/* harmony import */ var _shared_services_notification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/services/notification */ 86333);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngneat/transloco */ 44812);
/* harmony import */ var _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../shared/directives/typeface/typeface.directive */ 31857);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _shared_directives_submit_source_submit_source_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../shared/directives/submit-source/submit-source.directive */ 387);
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ 88111);
/* harmony import */ var _shared_components_profile_form_profile_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../shared/components/profile-form/profile-form.component */ 19268);
/* harmony import */ var _shared_components_password_password_validation_state_password_validation_state_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../shared/components/password/password-validation-state/password-validation-state.component */ 85984);
/* harmony import */ var _shared_components_input_container_input_container_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../shared/components/input-container/input-container.component */ 29130);
/* harmony import */ var _shared_components_controls_input_input_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../shared/components/controls/input/input.component */ 49874);
/* harmony import */ var _shared_components_form_error_form_error_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../shared/components/form-error/form-error.component */ 61926);
/* harmony import */ var _shared_components_password_password_form_password_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../shared/components/password/password-form/password-form.component */ 15205);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../shared/components/button/button.component */ 4013);



























const _c0 = function () { return { read: "core.profile_form" }; };
const _c1 = function () { return { read: "shared.password.validation_state", scope: "shared" }; };
const _c2 = function () { return ["../"]; };
function EditProfilePageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngSubmit", function EditProfilePageComponent_div_0_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r2.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](5, "app-profile-form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](8, "app-password-validation-state", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "div", 8)(10, "app-input-container", 9)(11, "app-input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](12, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](14, "app-form-error", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](15, "app-password-form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](16, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "div", 14)(18, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](20, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const translate_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", translate_r1("title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("translationsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](13, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", translate_r1("password.title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("password", ctx_r0.passwordControl.value)("translationsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](14, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("required", !!(ctx_r0.passwordControl == null ? null : ctx_r0.passwordControl.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", translate_r1("old_password.label"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("translationsConfig", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](15, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](16, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", translate_r1("back"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !ctx_r0.hasChanges);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", translate_r1("submit"), " ");
} }
let EditProfilePageComponent = class EditProfilePageComponent {
    constructor(activatedRoute, authService, formBuilder, spinnerService, notificationService, translocoService, editProfilePageService, userService, router) {
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.spinnerService = spinnerService;
        this.notificationService = notificationService;
        this.translocoService = translocoService;
        this.editProfilePageService = editProfilePageService;
        this.userService = userService;
        this.router = router;
        this.useContainerClass = true;
        this.appRoute = _app_route__WEBPACK_IMPORTED_MODULE_1__.AppRoute;
    }
    get passwordControl() {
        var _a;
        return (_a = this.form) === null || _a === void 0 ? void 0 : _a.get('password');
    }
    get hasChanges() {
        return this.profile
            && (!this.editProfilePageService.areProfilesIdentical(this.form.getRawValue().profile, this.profile)
                || !!this.form.getRawValue().password);
    }
    ngOnInit() {
        this.form = this.createForm();
        const wallet = this.authService.getActiveUserInstant().wallet;
        this.userService.getProfile(wallet.address, wallet.privateKey).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_17__.untilDestroyed)(this)).subscribe((profile) => {
            this.profile = profile;
            this.form.get('profile').patchValue(profile);
        });
    }
    onSubmit() {
        if (!this.form.valid) {
            return;
        }
        this.spinnerService.showSpinner();
        const formValue = this.form.getRawValue();
        this.editProfilePageService.editProfile(Object.assign(Object.assign({}, formValue.profile), { password: formValue.password, oldPassword: formValue.oldPassword })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.catchError)((error) => {
            var _a;
            switch ((_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.status) {
                case 429 /* TooManyRequests */:
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.throwError)(() => new _core_notifications__WEBPACK_IMPORTED_MODULE_3__.TranslatedError(this.translocoService.translate(`edit_profile_page.toastr.errors.${429 /* TooManyRequests */}`, null, 'user')));
                default:
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.throwError)(() => error);
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.finalize)(() => this.spinnerService.hideSpinner()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_17__.untilDestroyed)(this)).subscribe({
            next: () => {
                this.notificationService.success(this.translocoService.translate('edit_profile_page.toastr.successful_update', null, 'user'));
                this.router.navigate(['../'], {
                    relativeTo: this.activatedRoute,
                });
            },
            error: (error) => this.notificationService.error(error),
        });
    }
    createForm() {
        return this.formBuilder.group({
            profile: undefined,
            oldPassword: [
                '',
                [],
                [
                    this.editProfilePageService.createCurrentPasswordValidAsyncValidator(),
                ],
            ],
            password: '',
        });
    }
};
EditProfilePageComponent.ɵfac = function EditProfilePageComponent_Factory(t) { return new (t || EditProfilePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_auth__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ngneat_reactive_forms__WEBPACK_IMPORTED_MODULE_22__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_5__.SpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_shared_services_notification__WEBPACK_IMPORTED_MODULE_6__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_ngneat_transloco__WEBPACK_IMPORTED_MODULE_23__.TranslocoService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_edit_profile_page_service__WEBPACK_IMPORTED_MODULE_2__.EditProfilePageService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_5__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_21__.Router)); };
EditProfilePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({ type: EditProfilePageComponent, selectors: [["app-edit-profile-page"]], hostVars: 2, hostBindings: function EditProfilePageComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵclassProp"]("container", ctx.useContainerClass);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵProvidersFeature"]([
            _edit_profile_page_service__WEBPACK_IMPORTED_MODULE_2__.EditProfilePageService,
            {
                provide: _shared_components_form_error__WEBPACK_IMPORTED_MODULE_0__.FORM_ERROR_TRANSLOCO_READ,
                useValue: 'core.profile_form',
            },
        ])], decls: 1, vars: 1, consts: [["class", "edit-profile-page__card", 4, "transloco", "translocoRead"], [1, "edit-profile-page__card"], ["appTypeface", "subheader", 1, "edit-profile-page__title"], [1, "edit-profile-page__divider"], ["autocomplete", "off", "appSubmitSource", "", 3, "formGroup", "ngSubmit"], ["formControlName", "profile", 3, "translationsConfig"], ["appTypeface", "subheader", 1, "edit-profile-page__password-title"], [3, "password", "translationsConfig"], [1, "edit-profile-page__password-form"], [1, "password-form__old-password-container"], ["type", "password", "formControlName", "oldPassword", 3, "required"], ["ngProjectAs", "[label]", 5, ["", "label", ""]], ["controlName", "oldPassword", "i18nControlKey", "password"], ["formControlName", "password", 3, "translationsConfig"], [1, "edit-profile-page__actions-container"], ["app-button", "", "color", "grey", 1, "edit-profile-page__action-button", 3, "routerLink"], ["app-button", "", "type", "submit", 1, "edit-profile-page__action-button", 3, "disabled"]], template: function EditProfilePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](0, EditProfilePageComponent_div_0_Template, 22, 17, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("translocoRead", "user.edit_profile_page");
    } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_23__.TranslocoDirective, _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_7__.TypefaceDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__.NgControlStatusGroup, _shared_directives_submit_source_submit_source_directive__WEBPACK_IMPORTED_MODULE_8__.SubmitSourceDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormGroupDirective, _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_25__["ɵa"], _shared_components_profile_form_profile_form_component__WEBPACK_IMPORTED_MODULE_9__.ProfileFormComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormControlName, _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_25__["ɵk"], _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_25__["ɵe"], _shared_components_password_password_validation_state_password_validation_state_component__WEBPACK_IMPORTED_MODULE_10__.PasswordValidationStateComponent, _shared_components_input_container_input_container_component__WEBPACK_IMPORTED_MODULE_11__.InputContainerComponent, _shared_components_controls_input_input_component__WEBPACK_IMPORTED_MODULE_12__.InputComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.RequiredValidator, _shared_components_form_error_form_error_component__WEBPACK_IMPORTED_MODULE_13__.FormErrorComponent, _shared_components_password_password_form_password_form_component__WEBPACK_IMPORTED_MODULE_14__.PasswordFormComponent, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_15__.ButtonComponent, _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterLink], styles: ["[_nghost-%COMP%] {\n  display: block;\n  padding: 40px 0;\n}\n\n.edit-profile-page__card[_ngcontent-%COMP%] {\n  border: 2px solid var(--color-outlines);\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  margin: auto;\n  padding: 16px;\n  width: 792px;\n}\n\n.edit-profile-page__title[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.edit-profile-page__password-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-top: 40px;\n  margin-bottom: 16px;\n}\n\n.edit-profile-page__password-form[_ngcontent-%COMP%] {\n  column-gap: 16px;\n  display: flex;\n  margin-top: 8px;\n}\n\n.password-form__old-password-container[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: calc((100% - 8px * 4) / 3);\n}\n\n.edit-profile-page__divider[_ngcontent-%COMP%] {\n  background: var(--color-outlines);\n  flex-shrink: 0;\n  height: 2px;\n  margin: 16px -16px;\n}\n\n.edit-profile-page__actions-container[_ngcontent-%COMP%] {\n  column-gap: 16px;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.edit-profile-page__action-button[_ngcontent-%COMP%] {\n  width: 160px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtcHJvZmlsZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNoYXJlZFxcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBREY7O0FBSUE7RUFDRSx1Q0FBQTtFQUNBLG1CQ0NjO0VEQWQsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUNuQlU7QURrQlo7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsaUNBQUE7QUFERjs7QUFJQTtFQUNFLGlDQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7QUFERiIsImZpbGUiOiJlZGl0LXByb2ZpbGUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogJGdyaWQtc3RlcCAqIDUgMDtcclxufVxyXG5cclxuLmVkaXQtcHJvZmlsZS1wYWdlX19jYXJkIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1vdXRsaW5lcyk7XHJcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogJGdyaWQtc3RlcCAqIDI7XHJcbiAgd2lkdGg6IDc5MnB4O1xyXG59XHJcblxyXG4uZWRpdC1wcm9maWxlLXBhZ2VfX3RpdGxlIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uZWRpdC1wcm9maWxlLXBhZ2VfX3Bhc3N3b3JkLXRpdGxlIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi10b3A6ICRncmlkLXN0ZXAgKiA1O1xyXG4gIG1hcmdpbi1ib3R0b206ICRncmlkLXN0ZXAgKiAyO1xyXG59XHJcblxyXG4uZWRpdC1wcm9maWxlLXBhZ2VfX3Bhc3N3b3JkLWZvcm0ge1xyXG4gIGNvbHVtbi1nYXA6ICRncmlkLXN0ZXAgKiAyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLXRvcDogJGdyaWQtc3RlcDtcclxufVxyXG5cclxuLnBhc3N3b3JkLWZvcm1fX29sZC1wYXNzd29yZC1jb250YWluZXIge1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIHdpZHRoOiBjYWxjKCgxMDAlIC0gI3skZ3JpZC1zdGVwfSAqIDQpIC8gMyk7XHJcbn1cclxuXHJcbi5lZGl0LXByb2ZpbGUtcGFnZV9fZGl2aWRlciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itb3V0bGluZXMpO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIG1hcmdpbjogJGdyaWQtc3RlcCAqIDIgKC0kZ3JpZC1zdGVwICogMik7XHJcbn1cclxuXHJcbi5lZGl0LXByb2ZpbGUtcGFnZV9fYWN0aW9ucy1jb250YWluZXIge1xyXG4gIGNvbHVtbi1nYXA6ICRncmlkLXN0ZXAgKiAyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmVkaXQtcHJvZmlsZS1wYWdlX19hY3Rpb24tYnV0dG9uIHtcclxuICB3aWR0aDogMTYwcHg7XHJcbn1cclxuIiwiQHVzZSAnc2FzczptYXRoJztcclxuQGltcG9ydCAnY29sb3JzJztcclxuXHJcbkBmdW5jdGlvbiBoZXhUb1JHQlN0cmluZygkaGV4Q29sb3IpIHtcclxuICBAcmV0dXJuICcje3JlZCgkaGV4Q29sb3IpfSwje2dyZWVuKCRoZXhDb2xvcil9LCN7Ymx1ZSgkaGV4Q29sb3IpfSc7XHJcbn1cclxuXHJcbiRtYWluLWZvbnQtc2l6ZTogMTZweDtcclxuJG1haW4tZm9udC1mYW1pbHk6ICN7J0ludGVyLCBBcmlhbCwgc2Fucy1zZXJpZid9O1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IDEycHg7XHJcblxyXG4kZ3JpZC1zdGVwOiA4cHg7XHJcbiRncmlkLWhhbGYtc3RlcDogbWF0aC5kaXYoJGdyaWQtc3RlcCwgMik7XHJcblxyXG4kcGFnZS13aWR0aDogMTIwMHB4O1xyXG4kcGFnZS1zaWRlLXBhZGRpbmc6ICRncmlkLXN0ZXAgKiAzO1xyXG5cclxuJGNvbG9yLWZvbnQtYmFzZTogJGNvbG9yLWJsYWNrO1xyXG4kY29sb3ItcHJpbWFyeTogJGNvbG9yLWJsdWU7XHJcbiRjb2xvci1uZWdhdGl2ZTogJGNvbG9yLXJlZDtcclxuJGNvbG9yLW5ldXRyYWw6ICRjb2xvci1ncmV5O1xyXG4kY29sb3ItcG9zaXRpdmU6ICRjb2xvci1ncmVlbjtcclxuIl19 */"], changeDetection: 0 });
EditProfilePageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_17__.UntilDestroy)()
], EditProfilePageComponent);



/***/ }),

/***/ 63232:
/*!*******************************************************************************************!*\
  !*** ./projects/charon/src/app/user/pages/edit-profile-page/edit-profile-page.service.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePageService": () => (/* binding */ EditProfilePageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 75249);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 36566);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _core_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/auth */ 51519);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services */ 88718);






class EditProfilePageService {
    constructor(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }
    createCurrentPasswordValidAsyncValidator() {
        return (control) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            if (!control.value) {
                return null;
            }
            const validPassword = yield this.authService.validateCurrentUserPassword(control.value);
            return validPassword
                ? null
                : {
                    invalid: true,
                };
        });
    }
    editProfile(update) {
        const user = this.authService.getActiveUserInstant();
        const remoteUpdate = Object.assign(Object.assign({}, update), { password: undefined, oldPassword: undefined });
        return this.userService.getProfile(user.wallet.address, user.wallet.privateKey).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((oldProfile) => {
            return this.areProfilesIdentical(oldProfile, remoteUpdate)
                ? (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(void 0)
                : this.updateRemoteProfile(remoteUpdate);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.mergeMap)(() => this.authService.updateUser(user.id, update)));
    }
    updateRemoteProfile(update) {
        return this.userService.setProfile(update);
    }
    areProfilesIdentical(profileA, profileB) {
        return profileA.bio === profileB.bio
            && profileA.avatar === profileB.avatar
            && JSON.stringify(profileA.emails) === JSON.stringify(profileB.emails)
            && profileA.gender === profileB.gender
            && profileA.birthday === profileB.birthday
            && profileA.firstName === profileB.firstName
            && profileA.lastName === profileB.lastName;
    }
}
EditProfilePageService.ɵfac = function EditProfilePageService_Factory(t) { return new (t || EditProfilePageService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_core_auth__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_1__.UserService)); };
EditProfilePageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: EditProfilePageService, factory: EditProfilePageService.ɵfac });


/***/ }),

/***/ 95808:
/*!***********************************************************************!*\
  !*** ./projects/charon/src/app/user/pages/edit-profile-page/index.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePageComponent": () => (/* reexport safe */ _edit_profile_page_component__WEBPACK_IMPORTED_MODULE_0__.EditProfilePageComponent)
/* harmony export */ });
/* harmony import */ var _edit_profile_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-profile-page.component */ 75596);



/***/ }),

/***/ 37330:
/*!*****************************************************!*\
  !*** ./projects/charon/src/app/user/pages/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePageComponent": () => (/* reexport safe */ _edit_profile_page__WEBPACK_IMPORTED_MODULE_0__.EditProfilePageComponent),
/* harmony export */   "SettingsPageComponent": () => (/* reexport safe */ _settings_page__WEBPACK_IMPORTED_MODULE_1__.SettingsPageComponent),
/* harmony export */   "USER_PAGES": () => (/* binding */ USER_PAGES),
/* harmony export */   "UserMenuPageComponent": () => (/* reexport safe */ _user_menu_page__WEBPACK_IMPORTED_MODULE_2__.UserMenuPageComponent),
/* harmony export */   "UserPageComponent": () => (/* reexport safe */ _user_page__WEBPACK_IMPORTED_MODULE_3__.UserPageComponent)
/* harmony export */ });
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-profile-page */ 95808);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings-page */ 38928);
/* harmony import */ var _user_menu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-menu-page */ 77262);
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-page */ 98819);








const USER_PAGES = [
    _edit_profile_page__WEBPACK_IMPORTED_MODULE_0__.EditProfilePageComponent,
    _settings_page__WEBPACK_IMPORTED_MODULE_1__.SettingsPageComponent,
    _user_menu_page__WEBPACK_IMPORTED_MODULE_2__.UserMenuPageComponent,
    _user_page__WEBPACK_IMPORTED_MODULE_3__.UserPageComponent,
];


/***/ }),

/***/ 38928:
/*!*******************************************************************!*\
  !*** ./projects/charon/src/app/user/pages/settings-page/index.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageComponent": () => (/* reexport safe */ _settings_page_component__WEBPACK_IMPORTED_MODULE_0__.SettingsPageComponent)
/* harmony export */ });
/* harmony import */ var _settings_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-page.component */ 3898);



/***/ }),

/***/ 3898:
/*!*************************************************************************************!*\
  !*** ./projects/charon/src/app/user/pages/settings-page/settings-page.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageComponent": () => (/* binding */ SettingsPageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 31682);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 53399);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngneat/transloco */ 44812);
/* harmony import */ var _shared_components_button_back_button_back_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../shared/components/button-back/button-back.component */ 62414);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../shared/directives/typeface/typeface.directive */ 31857);
/* harmony import */ var _shared_components_pdv_types_settings_pdv_types_settings_pdv_types_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../shared/components/pdv-types-settings/pdv-types-settings/pdv-types-settings.component */ 30642);
/* harmony import */ var _components_lock_delay_settings_lock_delay_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/lock-delay-settings/lock-delay-settings.component */ 53994);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 48750);










const _c0 = function () { return ["../"]; };
function SettingsPageComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "div", 4)(6, "app-pdv-types-settings", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "app-lock-delay-settings", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const translate_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", translate_r1("title"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("translations", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 3, ctx_r0.translations$));
} }
class SettingsPageComponent {
    constructor(translocoService) {
        this.translocoService = translocoService;
        this.translations$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.combineLatest)([
            this.translocoService.selectTranslateObject('pdv_types_settings', null, 'shared'),
            this.translocoService.selectTranslateObject('pdv_types_toggle', null, 'shared'),
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(([pdvTypesSettings, pdvTypesToggle]) => (Object.assign(Object.assign({}, pdvTypesSettings), { types: pdvTypesToggle }))));
    }
}
SettingsPageComponent.ɵfac = function SettingsPageComponent_Factory(t) { return new (t || SettingsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngneat_transloco__WEBPACK_IMPORTED_MODULE_7__.TranslocoService)); };
SettingsPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SettingsPageComponent, selectors: [["app-settings-page"]], decls: 1, vars: 1, consts: [[4, "transloco", "translocoRead"], [1, "settings-page__header"], ["app-button-back", "", 3, "routerLink"], ["appTypeface", "subheader"], [1, "settings-page__divider"], [3, "translations"], [1, "settings-page__lock-delay-settings"]], template: function SettingsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, SettingsPageComponent_ng_container_0_Template, 9, 6, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("translocoRead", "user.settings_page");
    } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_7__.TranslocoDirective, _shared_components_button_back_button_back_component__WEBPACK_IMPORTED_MODULE_0__.ButtonBackComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_1__.TypefaceDirective, _shared_components_pdv_types_settings_pdv_types_settings_pdv_types_settings_component__WEBPACK_IMPORTED_MODULE_2__.PdvTypesSettingsComponent, _components_lock_delay_settings_lock_delay_settings_component__WEBPACK_IMPORTED_MODULE_3__.LockDelaySettingsComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.settings-page__header[_ngcontent-%COMP%] {\n  align-items: center;\n  column-gap: 16px;\n  display: flex;\n  font-weight: 500;\n}\n\n.settings-page__divider[_ngcontent-%COMP%] {\n  border-bottom: 2px solid var(--color-outlines);\n  margin: 16px -16px;\n}\n\n.settings-page__lock-delay-settings[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSw4Q0FBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtBQURGIiwiZmlsZSI6InNldHRpbmdzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uc2V0dGluZ3MtcGFnZV9faGVhZGVyIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbHVtbi1nYXA6ICRncmlkLXN0ZXAgKiAyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnNldHRpbmdzLXBhZ2VfX2RpdmlkZXIge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1jb2xvci1vdXRsaW5lcyk7XHJcbiAgbWFyZ2luOiAkZ3JpZC1zdGVwICogMiAoLSRncmlkLXN0ZXAgKiAyKTtcclxufVxyXG5cclxuLnNldHRpbmdzLXBhZ2VfX2xvY2stZGVsYXktc2V0dGluZ3Mge1xyXG4gIG1hcmdpbi10b3A6ICRncmlkLXN0ZXAgKiA1O1xyXG59XHJcbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 77262:
/*!********************************************************************!*\
  !*** ./projects/charon/src/app/user/pages/user-menu-page/index.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserMenuPageComponent": () => (/* reexport safe */ _user_menu_page_component__WEBPACK_IMPORTED_MODULE_0__.UserMenuPageComponent)
/* harmony export */ });
/* harmony import */ var _user_menu_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-menu-page.component */ 7213);



/***/ }),

/***/ 7213:
/*!***************************************************************************************!*\
  !*** ./projects/charon/src/app/user/pages/user-menu-page/user-menu-page.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserMenuPageComponent": () => (/* binding */ UserMenuPageComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs */ 5332);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 53399);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs/operators */ 54366);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs/operators */ 82426);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs/operators */ 7048);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! rxjs/operators */ 94850);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs/operators */ 36566);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! rxjs/operators */ 39754);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ngneat/transloco */ 44812);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ngneat/until-destroy */ 10257);
/* harmony import */ var _shared_svg_icons_delete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/svg-icons/delete */ 31919);
/* harmony import */ var _shared_svg_icons_edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/svg-icons/edit */ 78969);
/* harmony import */ var _shared_svg_icons_import_account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/svg-icons/import-account */ 13475);
/* harmony import */ var _shared_svg_icons_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/svg-icons/link */ 40329);
/* harmony import */ var _shared_svg_icons_lock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/svg-icons/lock */ 78859);
/* harmony import */ var _shared_svg_icons_moon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/svg-icons/moon */ 69011);
/* harmony import */ var _shared_svg_icons_refresh__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/svg-icons/refresh */ 13492);
/* harmony import */ var _shared_svg_icons_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/svg-icons/settings */ 64509);
/* harmony import */ var _shared_svg_icons_qr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/svg-icons/qr */ 45861);
/* harmony import */ var _components_qr_login_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/qr-login-dialog */ 54398);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components */ 8410);
/* harmony import */ var _user_route__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../user-route */ 10138);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _core_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/auth */ 51519);
/* harmony import */ var _shared_components_confirmation_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/components/confirmation-dialog */ 46274);
/* harmony import */ var _core_lock__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @core/lock */ 86126);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/dialog */ 39670);
/* harmony import */ var _shared_services_notification__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @shared/services/notification */ 86333);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @core/services */ 88718);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ngneat/svg-icon */ 49366);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../../shared/components/avatar/avatar.component */ 43191);
/* harmony import */ var _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../../shared/directives/typeface/typeface.directive */ 31857);
/* harmony import */ var _shared_components_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../../../shared/components/tooltip/tooltip.directive */ 31049);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../../shared/components/button/button.component */ 4013);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _shared_components_theme_theme_toggle_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../../../shared/components/theme/theme-toggle.component */ 58742);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ngx-skeleton-loader */ 39752);


































function UserMenuPageComponent_ng_container_0_div_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const translate_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("appTooltip", translate_r3("banned.tooltip"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", translate_r3("banned.label"), " ");
} }
function UserMenuPageComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "app-avatar", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "div")(3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](5, UserMenuPageComponent_ng_container_0_div_1_span_5_Template, 2, 2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const profile_r6 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("avatarUrl", profile_r6.avatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate2"](" ", profile_r6.firstName, " ", profile_r6.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", profile_r6.banned);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", profile_r6.bio, " ");
} }
function UserMenuPageComponent_ng_container_0_button_40_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function UserMenuPageComponent_ng_container_0_button_40_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](2); return ctx_r9.restoreSeedPhrase(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](1, "svg-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "div")(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const translate_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](translate_r3("restore_seed"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", translate_r3("restore_seed_hint"), " ");
} }
const _c0 = function (a1) { return ["./", a1]; };
function UserMenuPageComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, UserMenuPageComponent_ng_container_0_div_1_Template, 8, 5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "div", 3)(4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](5, "svg-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](9, "svg-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](12, "div", 3)(13, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](14, "svg-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](17, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](19, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function UserMenuPageComponent_ng_container_0_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return ctx_r12.lockAccount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](20, "svg-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](21, "div")(22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](24, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](26, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function UserMenuPageComponent_ng_container_0_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return ctx_r14.linkKeplr(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](27, "svg-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](28, "div")(29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](31, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](33, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function UserMenuPageComponent_ng_container_0_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return ctx_r15.linkDevice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](34, "svg-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](35, "div")(36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](38, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](40, UserMenuPageComponent_ng_container_0_button_40_Template, 7, 2, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](41, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](42, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function UserMenuPageComponent_ng_container_0_Template_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r13); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return ctx_r16.requestDeleteConfirmation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](43, "svg-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](44, "div")(45, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](47, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](49, "div", 3)(50, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](51, "svg-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](52, "div")(53, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](55, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](57, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](58, "app-theme-toggle");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const translate_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](2, 19, ctx_r0.profile$))("ngIfElse", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction1"](23, _c0, ctx_r0.userRoute.Edit));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](translate_r3("edit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction1"](25, _c0, ctx_r0.userRoute.Settings));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](translate_r3("settings"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](translate_r3("import"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", translate_r3("coming_soon"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](translate_r3("lock"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", translate_r3("lock_hint"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](translate_r3("link_keplr"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", translate_r3("link_keplr_hint"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](translate_r3("link_device"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", translate_r3("link_device_hint"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](41, 21, ctx_r0.canRestoreSeed$));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](translate_r3("delete"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", translate_r3("delete_hint"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate"](translate_r3("night_theme"));
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", translate_r3("night_theme_hint"), " ");
} }
const _c1 = function () { return { height: "80px" }; };
function UserMenuPageComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](0, "ngx-skeleton-loader", 27);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpureFunction0"](1, _c1));
} }
const keplrLink = 'https://keplr.decentr.net/?connect=true&chain=decentr';
let UserMenuPageComponent = class UserMenuPageComponent {
    constructor(translocoScope, authService, confirmationDialogService, lockService, matDialog, notificationService, spinnerService, translocoService, userService, svgIconRegistry) {
        this.translocoScope = translocoScope;
        this.authService = authService;
        this.confirmationDialogService = confirmationDialogService;
        this.lockService = lockService;
        this.matDialog = matDialog;
        this.notificationService = notificationService;
        this.spinnerService = spinnerService;
        this.translocoService = translocoService;
        this.userService = userService;
        this.userRoute = _user_route__WEBPACK_IMPORTED_MODULE_11__.UserRoute;
        svgIconRegistry.register([
            _shared_svg_icons_delete__WEBPACK_IMPORTED_MODULE_0__.svgDelete,
            _shared_svg_icons_edit__WEBPACK_IMPORTED_MODULE_1__.svgEdit,
            _shared_svg_icons_import_account__WEBPACK_IMPORTED_MODULE_2__.svgImportAccount,
            _shared_svg_icons_link__WEBPACK_IMPORTED_MODULE_3__.svgLink,
            _shared_svg_icons_lock__WEBPACK_IMPORTED_MODULE_4__.svgLock,
            _shared_svg_icons_moon__WEBPACK_IMPORTED_MODULE_5__.svgMoon,
            _shared_svg_icons_refresh__WEBPACK_IMPORTED_MODULE_6__.svgRefresh,
            _shared_svg_icons_settings__WEBPACK_IMPORTED_MODULE_7__.svgSettings,
            _shared_svg_icons_qr__WEBPACK_IMPORTED_MODULE_8__.svgQr,
        ]);
    }
    ngOnInit() {
        this.profile$ = this.authService.getActiveUser().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.map)((user) => user.wallet), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.switchMap)((wallet) => this.userService.getProfile(wallet.address, wallet.privateKey)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.catchError)(() => rxjs__WEBPACK_IMPORTED_MODULE_26__.EMPTY));
        this.canRestoreSeed$ = this.authService.getActiveUser().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.map)((user) => !!(user === null || user === void 0 ? void 0 : user.encryptedSeed)));
    }
    lockAccount() {
        this.lockService.lock();
    }
    deleteAccount() {
        this.spinnerService.showSpinner();
        const user = this.authService.getActiveUserInstant();
        const wallet = user.wallet;
        return this.userService.resetAccount(wallet.address).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.tap)(() => this.authService.removeUser(user.id)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.catchError)((error) => {
            this.notificationService.error(error);
            return rxjs__WEBPACK_IMPORTED_MODULE_26__.EMPTY;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.finalize)(() => this.spinnerService.hideSpinner()));
    }
    requestDeleteConfirmation() {
        this.translocoService.selectTranslateObject('user_menu_page.delete_confirmation', {}, this.translocoScope).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.map)((translations) => (Object.assign(Object.assign({}, translations), { cancel: {
                label: translations.cancel,
            }, confirm: {
                icon: _shared_svg_icons_delete__WEBPACK_IMPORTED_MODULE_0__.svgDelete.name,
                label: translations.confirm,
            }, alert: true }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.mergeMap)((config) => this.confirmationDialogService.open(config).afterClosed()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_30__.filter)((confirmed) => confirmed), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.mergeMap)(() => this.deleteAccount()), (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_31__.untilDestroyed)(this)).subscribe();
    }
    restoreSeedPhrase() {
        this.matDialog.open(_components__WEBPACK_IMPORTED_MODULE_10__.RestoreSeedDialogComponent);
    }
    linkDevice() {
        this.matDialog.open(_components_qr_login_dialog__WEBPACK_IMPORTED_MODULE_9__.QrLoginDialogComponent);
    }
    linkKeplr() {
        window.open(keplrLink, '_blank');
    }
};
UserMenuPageComponent.ɵfac = function UserMenuPageComponent_Factory(t) { return new (t || UserMenuPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_ngneat_transloco__WEBPACK_IMPORTED_MODULE_32__.TRANSLOCO_SCOPE), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_core_auth__WEBPACK_IMPORTED_MODULE_12__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_shared_components_confirmation_dialog__WEBPACK_IMPORTED_MODULE_13__.ConfirmationDialogService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_core_lock__WEBPACK_IMPORTED_MODULE_14__.LockService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_shared_services_notification__WEBPACK_IMPORTED_MODULE_15__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_16__.SpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_ngneat_transloco__WEBPACK_IMPORTED_MODULE_32__.TranslocoService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_16__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_34__.SvgIconRegistry)); };
UserMenuPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineComponent"]({ type: UserMenuPageComponent, selectors: [["app-user-menu-page"]], decls: 3, vars: 1, consts: [[4, "transloco", "translocoRead"], ["profileLoading", ""], ["class", "user-menu-page__profile", 4, "ngIf", "ngIfElse"], [1, "user-menu-page__menu-block"], ["app-button", "", "color", "grey", "appTypeface", "paragraph", 1, "user-menu-page__menu-block__button", 3, "routerLink"], ["key", "edit"], ["key", "settings"], ["app-button", "", "color", "grey", "disabled", "", "appTypeface", "paragraph", 1, "user-menu-page__menu-block__button"], ["key", "import-account"], ["appTypeface", "caption", 1, "user-menu-page__menu-block__coming-soon"], ["app-button", "", "color", "grey", "appTypeface", "paragraph", 1, "user-menu-page__menu-block__button", "mod-disable-align", 3, "click"], ["key", "lock"], ["appTypeface", "caption", 1, "user-menu-page__menu-block__button-hint"], ["key", "link"], ["key", "qr"], ["class", "user-menu-page__menu-block__button mod-disable-align", "app-button", "", "color", "grey", "appTypeface", "paragraph", 3, "click", 4, "ngIf"], ["key", "delete"], ["app-button", "", "color", "grey", "appTypeface", "paragraph", 1, "user-menu-page__menu-block__button", "mod-disable-align", "mode-cursor-default"], ["key", "moon"], [1, "user-menu-page__menu-block__theme-toggle"], [1, "user-menu-page__profile"], [1, "user-menu-page__profile__avatar", 3, "avatarUrl"], ["appTypeface", "header-4", 1, "user-menu-page__profile__title"], ["class", "user-menu-page__profile__ban-label", "appTypeface", "caption", 3, "appTooltip", 4, "ngIf"], ["appTypeface", "paragraph", 1, "user-menu-page__profile__bio"], ["appTypeface", "caption", 1, "user-menu-page__profile__ban-label", 3, "appTooltip"], ["key", "refresh"], [1, "user-menu-page__skeleton-loader", 3, "theme"]], template: function UserMenuPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](0, UserMenuPageComponent_ng_container_0_Template, 59, 27, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](1, UserMenuPageComponent_ng_template_1_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("translocoRead", "user.user_menu_page");
    } }, directives: [_ngneat_transloco__WEBPACK_IMPORTED_MODULE_32__.TranslocoDirective, _angular_common__WEBPACK_IMPORTED_MODULE_35__.NgIf, _shared_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_17__.AvatarComponent, _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_18__.TypefaceDirective, _shared_components_tooltip_tooltip_directive__WEBPACK_IMPORTED_MODULE_19__.TooltipDirective, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_20__.ButtonComponent, _angular_router__WEBPACK_IMPORTED_MODULE_36__.RouterLink, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_34__.SvgIconComponent, _shared_components_theme_theme_toggle_component__WEBPACK_IMPORTED_MODULE_21__.ThemeToggleComponent, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_37__.NgxSkeletonLoaderComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_35__.AsyncPipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.user-menu-page__profile[_ngcontent-%COMP%] {\n  column-gap: 24px;\n  display: flex;\n}\n\n.user-menu-page__profile__avatar[_ngcontent-%COMP%] {\n  height: 80px;\n  min-width: 80px;\n  width: 80px;\n}\n\n.user-menu-page__profile__title[_ngcontent-%COMP%] {\n  word-break: break-word;\n}\n\n.user-menu-page__profile__ban-label[_ngcontent-%COMP%] {\n  background: rgba(var(--color-userpage-profile-ban), 0.08);\n  border-radius: 12px;\n  color: rgb(var(--color-userpage-profile-ban));\n  padding: 4px 8px;\n  vertical-align: middle;\n}\n\n.user-menu-page__profile__bio[_ngcontent-%COMP%] {\n  color: var(--color-userpage-profile-bio);\n}\n\n.user-menu-page__menu-block[_ngcontent-%COMP%] {\n  background: var(--color-userpage-menu-block);\n  border-radius: 12px;\n  margin-top: 16px;\n  overflow: hidden;\n}\n\n.user-menu-page__menu-block__button[_ngcontent-%COMP%] {\n  border-radius: 0;\n  justify-content: flex-start;\n  width: 100%;\n}\n\n.user-menu-page__menu-block__button[_ngcontent-%COMP%]    + .user-menu-page__menu-block__button[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--color-outlines);\n}\n\n.user-menu-page__menu-block__button.mod-disable-align[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  text-align: start;\n}\n\n.user-menu-page__menu-block__button.mode-cursor-default[_ngcontent-%COMP%] {\n  cursor: default;\n}\n\n.user-menu-page__menu-block__button[disabled][_ngcontent-%COMP%] {\n  background: var(--color-userpage-menu-block-disabled-background);\n}\n\n.user-menu-page__menu-block__button-hint[_ngcontent-%COMP%] {\n  color: var(--color-userpage-menu-block-hint);\n  font-weight: normal;\n}\n\n.user-menu-page__menu-block__coming-soon[_ngcontent-%COMP%] {\n  color: var(--color-userpage-menu-block-coming-soon);\n  margin-left: auto;\n}\n\n.user-menu-page__menu-block__theme-toggle[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n\n.user-menu-page__skeleton-loader[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.user-menu-page__skeleton-loader[_ngcontent-%COMP%]  .loader {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItbWVudS1wYWdlLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNoYXJlZFxcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBREY7O0FBSUE7RUFDRSxzQkFBQTtBQURGOztBQUlBO0VBQ0UseURBQUE7RUFDQSxtQkNiYztFRGNkLDZDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQURGOztBQUlBO0VBQ0Usd0NBQUE7QUFERjs7QUFJQTtFQUNFLDRDQUFBO0VBQ0EsbUJDekJjO0VEMEJkLGdCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FBREY7O0FBR0U7RUFDRSwyQ0FBQTtBQURKOztBQUlFO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtBQUZKOztBQUtFO0VBQ0UsZUFBQTtBQUhKOztBQU1FO0VBQ0UsZ0VBQUE7QUFKSjs7QUFRQTtFQUNFLDRDQUFBO0VBQ0EsbUJBQUE7QUFMRjs7QUFRQTtFQUNFLG1EQUFBO0VBQ0EsaUJBQUE7QUFMRjs7QUFRQTtFQUNFLGlCQUFBO0FBTEY7O0FBUUE7RUFDRSxjQUFBO0FBTEY7O0FBT0U7RUFDRSxhQUFBO0FBTEoiLCJmaWxlIjoidXNlci1tZW51LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4udXNlci1tZW51LXBhZ2VfX3Byb2ZpbGUge1xyXG4gIGNvbHVtbi1nYXA6ICRncmlkLXN0ZXAgKiAzO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi51c2VyLW1lbnUtcGFnZV9fcHJvZmlsZV9fYXZhdGFyIHtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgbWluLXdpZHRoOiA4MHB4O1xyXG4gIHdpZHRoOiA4MHB4O1xyXG59XHJcblxyXG4udXNlci1tZW51LXBhZ2VfX3Byb2ZpbGVfX3RpdGxlIHtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG59XHJcblxyXG4udXNlci1tZW51LXBhZ2VfX3Byb2ZpbGVfX2Jhbi1sYWJlbCB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1jb2xvci11c2VycGFnZS1wcm9maWxlLWJhbiksIC4wOCk7XHJcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgY29sb3I6IHJnYih2YXIoLS1jb2xvci11c2VycGFnZS1wcm9maWxlLWJhbikpO1xyXG4gIHBhZGRpbmc6ICRncmlkLWhhbGYtc3RlcCAkZ3JpZC1zdGVwO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi51c2VyLW1lbnUtcGFnZV9fcHJvZmlsZV9fYmlvIHtcclxuICBjb2xvcjogdmFyKC0tY29sb3ItdXNlcnBhZ2UtcHJvZmlsZS1iaW8pO1xyXG59XHJcblxyXG4udXNlci1tZW51LXBhZ2VfX21lbnUtYmxvY2sge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXVzZXJwYWdlLW1lbnUtYmxvY2spO1xyXG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gIG1hcmdpbi10b3A6ICRncmlkLXN0ZXAgKiAyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi51c2VyLW1lbnUtcGFnZV9fbWVudS1ibG9ja19fYnV0dG9uIHtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJiArICYge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWNvbG9yLW91dGxpbmVzKTtcclxuICB9XHJcblxyXG4gICYubW9kLWRpc2FibGUtYWxpZ24ge1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICB9XHJcblxyXG4gICYubW9kZS1jdXJzb3ItZGVmYXVsdCB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgfVxyXG5cclxuICAmW2Rpc2FibGVkXSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci11c2VycGFnZS1tZW51LWJsb2NrLWRpc2FibGVkLWJhY2tncm91bmQpO1xyXG4gIH1cclxufVxyXG5cclxuLnVzZXItbWVudS1wYWdlX19tZW51LWJsb2NrX19idXR0b24taGludCB7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLXVzZXJwYWdlLW1lbnUtYmxvY2staGludCk7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLnVzZXItbWVudS1wYWdlX19tZW51LWJsb2NrX19jb21pbmctc29vbiB7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLXVzZXJwYWdlLW1lbnUtYmxvY2stY29taW5nLXNvb24pO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4udXNlci1tZW51LXBhZ2VfX21lbnUtYmxvY2tfX3RoZW1lLXRvZ2dsZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi51c2VyLW1lbnUtcGFnZV9fc2tlbGV0b24tbG9hZGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgJjo6bmctZGVlcCAubG9hZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG59XHJcbiIsIkB1c2UgJ3Nhc3M6bWF0aCc7XHJcbkBpbXBvcnQgJ2NvbG9ycyc7XHJcblxyXG5AZnVuY3Rpb24gaGV4VG9SR0JTdHJpbmcoJGhleENvbG9yKSB7XHJcbiAgQHJldHVybiAnI3tyZWQoJGhleENvbG9yKX0sI3tncmVlbigkaGV4Q29sb3IpfSwje2JsdWUoJGhleENvbG9yKX0nO1xyXG59XHJcblxyXG4kbWFpbi1mb250LXNpemU6IDE2cHg7XHJcbiRtYWluLWZvbnQtZmFtaWx5OiAjeydJbnRlciwgQXJpYWwsIHNhbnMtc2VyaWYnfTtcclxuXHJcbiRib3JkZXItcmFkaXVzOiAxMnB4O1xyXG5cclxuJGdyaWQtc3RlcDogOHB4O1xyXG4kZ3JpZC1oYWxmLXN0ZXA6IG1hdGguZGl2KCRncmlkLXN0ZXAsIDIpO1xyXG5cclxuJHBhZ2Utd2lkdGg6IDEyMDBweDtcclxuJHBhZ2Utc2lkZS1wYWRkaW5nOiAkZ3JpZC1zdGVwICogMztcclxuXHJcbiRjb2xvci1mb250LWJhc2U6ICRjb2xvci1ibGFjaztcclxuJGNvbG9yLXByaW1hcnk6ICRjb2xvci1ibHVlO1xyXG4kY29sb3ItbmVnYXRpdmU6ICRjb2xvci1yZWQ7XHJcbiRjb2xvci1uZXV0cmFsOiAkY29sb3ItZ3JleTtcclxuJGNvbG9yLXBvc2l0aXZlOiAkY29sb3ItZ3JlZW47XHJcbiJdfQ== */"], changeDetection: 0 });
UserMenuPageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_38__.__decorate)([
    (0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_31__.UntilDestroy)()
], UserMenuPageComponent);



/***/ }),

/***/ 98819:
/*!***************************************************************!*\
  !*** ./projects/charon/src/app/user/pages/user-page/index.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPageComponent": () => (/* reexport safe */ _user_page_component__WEBPACK_IMPORTED_MODULE_0__.UserPageComponent)
/* harmony export */ });
/* harmony import */ var _user_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-page.component */ 61589);



/***/ }),

/***/ 61589:
/*!*****************************************************************************!*\
  !*** ./projects/charon/src/app/user/pages/user-page/user-page.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPageComponent": () => (/* binding */ UserPageComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 53399);
/* harmony import */ var _shared_svg_icons_delegate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/svg-icons/delegate */ 22885);
/* harmony import */ var _shared_svg_icons_send__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/svg-icons/send */ 5507);
/* harmony import */ var _shared_svg_icons_wallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/svg-icons/wallet */ 94034);
/* harmony import */ var _shared_services_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/configuration */ 1683);
/* harmony import */ var _shared_utils_version__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/utils/version */ 19266);
/* harmony import */ var _core_layout_authorized_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/layout/authorized-layout */ 86084);
/* harmony import */ var _app_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../app-route */ 4473);
/* harmony import */ var _portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../portal */ 3451);
/* harmony import */ var _shared_svg_icons_squid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/svg-icons/squid */ 80229);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _core_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/auth */ 51519);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/services */ 88718);
/* harmony import */ var _shared_services_notification__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/services/notification */ 86333);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngneat/transloco */ 44812);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngneat/svg-icon */ 49366);
/* harmony import */ var _shared_components_slot_slot_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../shared/components/slot/slot.directive */ 85833);
/* harmony import */ var _shared_components_network_selector_network_selector_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../shared/components/network-selector/network-selector.component */ 91992);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../shared/directives/typeface/typeface.directive */ 31857);
/* harmony import */ var _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../shared/components/button/button.component */ 4013);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/cdk/clipboard */ 60425);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _shared_components_currency_symbol_component_currency_symbol_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../../shared/components/currency-symbol/component/currency-symbol.component */ 56693);
/* harmony import */ var _components_referral_stats_referral_stats_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/referral-stats/referral-stats.component */ 53224);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-skeleton-loader */ 39752);
/* harmony import */ var _shared_pipes_number_format_number_format_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../../shared/pipes/number-format/number-format.pipe */ 17667);
/* harmony import */ var _shared_pipes_micro_value_micro_value_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../../../shared/pipes/micro-value/micro-value.pipe */ 30087);




























function UserPageComponent_app_network_selector_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "app-network-selector");
} }
function UserPageComponent_ng_container_1_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](3, "numberFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](4, "microValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](5, "app-currency-symbol");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const decBalance_r7 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind3"](3, 1, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](4, 5, decBalance_r7), null, true), "\u00A0");
} }
function UserPageComponent_ng_container_1_app_referral_stats_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "app-referral-stats", 4);
} }
function UserPageComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](1, "div", 3)(2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](3, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](6, "div", 3)(7, "div", 4)(8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](10, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("cdkCopyToClipboardCopied", function UserPageComponent_ng_container_1_Template_button_cdkCopyToClipboardCopied_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return ctx_r8.onWalletAddressCopied(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](12, "svg-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](14, UserPageComponent_ng_container_1_ng_container_14_Template, 6, 7, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](15, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](16, "div", 10)(17, "a", 11)(18, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](19, "svg-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](21, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵlistener"]("click", function UserPageComponent_ng_container_1_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"](); return ctx_r10.openSquid(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](22, "svg-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementStart"](24, "a", 11)(25, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](26, "svg-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](28, UserPageComponent_ng_container_1_app_referral_stats_28_Template, 1, 0, "app-referral-stats", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipe"](29, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const translate_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate2"](" ", translate_r4("charon_version"), " ", ctx_r1.appVersion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", translate_r4("your_wallet"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("cdkCopyToClipboard", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](11, 13, ctx_r1.walletAddress$));
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", translate_r4("copy_wallet_address"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](15, 15, ctx_r1.decBalance$))("ngIfElse", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("routerLink", ctx_r1.transferRoute);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", translate_r4("send"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", translate_r4("topup"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("routerLink", ctx_r1.stakingRoute);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtextInterpolate1"](" ", translate_r4("delegate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpipeBind1"](29, 17, ctx_r1.showReferral$));
} }
const _c0 = function () { return { height: "68px" }; };
function UserPageComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵelement"](0, "ngx-skeleton-loader", 20);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵpureFunction0"](1, _c0));
} }
class UserPageComponent {
    constructor(authService, bankService, networkService, notificationService, userService, translocoService, svgIconRegistry) {
        this.authService = authService;
        this.bankService = bankService;
        this.networkService = networkService;
        this.notificationService = notificationService;
        this.userService = userService;
        this.translocoService = translocoService;
        this.appVersion = _shared_utils_version__WEBPACK_IMPORTED_MODULE_4__.APP_VERSION;
        this.transferRoute = ['/', _app_route__WEBPACK_IMPORTED_MODULE_6__.AppRoute.Portal, _portal__WEBPACK_IMPORTED_MODULE_7__.PortalRoute.Assets, _portal__WEBPACK_IMPORTED_MODULE_7__.PortalRoute.Transfer];
        this.stakingRoute = ['/', _app_route__WEBPACK_IMPORTED_MODULE_6__.AppRoute.Portal, _portal__WEBPACK_IMPORTED_MODULE_7__.PortalRoute.Staking];
        this.headerMetaSlot = _core_layout_authorized_layout__WEBPACK_IMPORTED_MODULE_5__.AUTHORIZED_LAYOUT_HEADER_META_SLOT;
        svgIconRegistry.register([
            _shared_svg_icons_delegate__WEBPACK_IMPORTED_MODULE_0__.svgDelegate,
            _shared_svg_icons_send__WEBPACK_IMPORTED_MODULE_1__.svgSend,
            _shared_svg_icons_wallet__WEBPACK_IMPORTED_MODULE_2__.svgWallet,
            _shared_svg_icons_squid__WEBPACK_IMPORTED_MODULE_8__.svgSquid,
        ]);
    }
    ngOnInit() {
        this.walletAddress$ = this.authService.getActiveUserAddress();
        this.decBalance$ = this.bankService.getDECBalance();
        this.showReferral$ = this.networkService.getActiveNetworkId().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.map)((networkId) => networkId === _shared_services_configuration__WEBPACK_IMPORTED_MODULE_3__.NetworkId.Mainnet));
    }
    openSquid() {
        window.open('https://topup.decentr.net', '_blank');
    }
    onWalletAddressCopied() {
        this.notificationService.success(this.translocoService.translate('user_page.wallet_address_copied', null, 'user'));
    }
}
UserPageComponent.ɵfac = function UserPageComponent_Factory(t) { return new (t || UserPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_core_auth__WEBPACK_IMPORTED_MODULE_9__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_10__.BankService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_10__.NetworkService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_shared_services_notification__WEBPACK_IMPORTED_MODULE_11__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_10__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_ngneat_transloco__WEBPACK_IMPORTED_MODULE_22__.TranslocoService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdirectiveInject"](_ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_23__.SvgIconRegistry)); };
UserPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineComponent"]({ type: UserPageComponent, selectors: [["app-user-page"]], hostVars: 1, hostBindings: function UserPageComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵattribute"]("version", ctx.appVersion);
    } }, decls: 4, vars: 2, consts: [[4, "appSlot"], [4, "transloco", "translocoRead"], ["balanceLoading", ""], [1, "user-page__section"], [1, "user-page__card"], ["appTypeface", "caption", 1, "user-page__card__app-version"], ["appTypeface", "subheader", 1, "user-page__wallet-card__title"], ["app-button", "", "color", "grey", "size", "xs", "appTypeface", "caption", 3, "cdkCopyToClipboard", "cdkCopyToClipboardCopied"], ["key", "wallet", "size", "xs"], [4, "ngIf", "ngIfElse"], [1, "user-page__wallet-card__actions"], [3, "routerLink"], ["app-button", ""], ["key", "send"], ["app-button", "", "color", "grey", 3, "click"], ["key", "squid"], ["app-button", "", "color", "grey"], ["key", "delegate"], ["class", "user-page__card", 4, "ngIf"], ["appTypeface", "header-3", 1, "user-page__wallet-card__balance"], [1, "user-page__skeleton-loader", 3, "theme"]], template: function UserPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](0, UserPageComponent_app_network_selector_0_Template, 1, 0, "app-network-selector", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](1, UserPageComponent_ng_container_1_Template, 30, 19, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplate"](2, UserPageComponent_ng_template_2_Template, 1, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("appSlot", ctx.headerMetaSlot);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵproperty"]("translocoRead", "user.user_page");
    } }, directives: [_shared_components_slot_slot_directive__WEBPACK_IMPORTED_MODULE_12__.SlotDirective, _shared_components_network_selector_network_selector_component__WEBPACK_IMPORTED_MODULE_13__.NetworkSelectorComponent, _ngneat_transloco__WEBPACK_IMPORTED_MODULE_22__.TranslocoDirective, _angular_router__WEBPACK_IMPORTED_MODULE_24__.RouterOutlet, _shared_directives_typeface_typeface_directive__WEBPACK_IMPORTED_MODULE_14__.TypefaceDirective, _shared_components_button_button_component__WEBPACK_IMPORTED_MODULE_15__.ButtonComponent, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_25__.CdkCopyToClipboard, _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_23__.SvgIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgIf, _shared_components_currency_symbol_component_currency_symbol_component__WEBPACK_IMPORTED_MODULE_16__.CurrencySymbolComponent, _angular_router__WEBPACK_IMPORTED_MODULE_24__.RouterLinkWithHref, _components_referral_stats_referral_stats_component__WEBPACK_IMPORTED_MODULE_17__.ReferralStatsComponent, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_27__.NgxSkeletonLoaderComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_26__.AsyncPipe, _shared_pipes_number_format_number_format_pipe__WEBPACK_IMPORTED_MODULE_18__.NumberFormatPipe, _shared_pipes_micro_value_micro_value_pipe__WEBPACK_IMPORTED_MODULE_19__.MicroValuePipe], styles: ["[_nghost-%COMP%] {\n  column-gap: 24px;\n  display: flex;\n  margin: 0 auto;\n  padding: 24px;\n  width: 1248px;\n}\n\n.user-page__section[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.user-page__card[_ngcontent-%COMP%] {\n  border: 2px solid var(--color-outlines);\n  border-radius: 12px;\n  height: min-content;\n  padding: 16px;\n}\n\n.user-page__card[_ngcontent-%COMP%]    + .user-page__card[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.user-page__card__app-version[_ngcontent-%COMP%] {\n  color: var(--color-userpage-app-version);\n  margin-top: 16px;\n  margin-left: 16px;\n}\n\n.user-page__wallet-card__title[_ngcontent-%COMP%] {\n  display: flex;\n  font-weight: 500;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n\n.user-page__wallet-card__balance[_ngcontent-%COMP%] {\n  display: flex;\n  font-weight: 500;\n}\n\n.user-page__wallet-card__actions[_ngcontent-%COMP%] {\n  column-gap: 16px;\n  display: flex;\n  margin-top: 24px;\n}\n\n.user-page__skeleton-loader[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.user-page__skeleton-loader[_ngcontent-%COMP%]  .loader {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcGFnZS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzaGFyZWRcXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsYUNVa0I7RURUbEIsYUFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtBQURGOztBQUlBO0VBQ0UsdUNBQUE7RUFDQSxtQkNOYztFRE9kLG1CQUFBO0VBQ0EsYUFBQTtBQURGOztBQUdFO0VBQ0UsZ0JBQUE7QUFESjs7QUFLQTtFQUNFLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUtBO0VBQ0UsY0FBQTtBQUZGOztBQUlFO0VBQ0UsYUFBQTtBQUZKIiwiZmlsZSI6InVzZXItcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcblxyXG46aG9zdCB7XHJcbiAgY29sdW1uLWdhcDogJGdyaWQtc3RlcCAqIDM7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAkcGFnZS1zaWRlLXBhZGRpbmc7XHJcbiAgd2lkdGg6ICRwYWdlLXdpZHRoICsgJHBhZ2Utc2lkZS1wYWRkaW5nICogMjtcclxufVxyXG5cclxuLnVzZXItcGFnZV9fc2VjdGlvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi51c2VyLXBhZ2VfX2NhcmQge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLW91dGxpbmVzKTtcclxuICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xyXG4gIHBhZGRpbmc6ICRncmlkLXN0ZXAgKiAyO1xyXG5cclxuICAmICsgJiB7XHJcbiAgICBtYXJnaW4tdG9wOiAkZ3JpZC1zdGVwICogMjtcclxuICB9XHJcbn1cclxuXHJcbi51c2VyLXBhZ2VfX2NhcmRfX2FwcC12ZXJzaW9uIHtcclxuICBjb2xvcjogdmFyKC0tY29sb3ItdXNlcnBhZ2UtYXBwLXZlcnNpb24pO1xyXG4gIG1hcmdpbi10b3A6ICRncmlkLXN0ZXAgKiAyO1xyXG4gIG1hcmdpbi1sZWZ0OiAkZ3JpZC1zdGVwICogMjtcclxufVxyXG5cclxuLnVzZXItcGFnZV9fd2FsbGV0LWNhcmRfX3RpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi1ib3R0b206ICRncmlkLXN0ZXAgKiAyO1xyXG59XHJcblxyXG4udXNlci1wYWdlX193YWxsZXQtY2FyZF9fYmFsYW5jZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4udXNlci1wYWdlX193YWxsZXQtY2FyZF9fYWN0aW9ucyB7XHJcbiAgY29sdW1uLWdhcDogJGdyaWQtc3RlcCAqIDI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiAkZ3JpZC1zdGVwICogMztcclxufVxyXG5cclxuLnVzZXItcGFnZV9fc2tlbGV0b24tbG9hZGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgJjo6bmctZGVlcCAubG9hZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG59XHJcbiIsIkB1c2UgJ3Nhc3M6bWF0aCc7XHJcbkBpbXBvcnQgJ2NvbG9ycyc7XHJcblxyXG5AZnVuY3Rpb24gaGV4VG9SR0JTdHJpbmcoJGhleENvbG9yKSB7XHJcbiAgQHJldHVybiAnI3tyZWQoJGhleENvbG9yKX0sI3tncmVlbigkaGV4Q29sb3IpfSwje2JsdWUoJGhleENvbG9yKX0nO1xyXG59XHJcblxyXG4kbWFpbi1mb250LXNpemU6IDE2cHg7XHJcbiRtYWluLWZvbnQtZmFtaWx5OiAjeydJbnRlciwgQXJpYWwsIHNhbnMtc2VyaWYnfTtcclxuXHJcbiRib3JkZXItcmFkaXVzOiAxMnB4O1xyXG5cclxuJGdyaWQtc3RlcDogOHB4O1xyXG4kZ3JpZC1oYWxmLXN0ZXA6IG1hdGguZGl2KCRncmlkLXN0ZXAsIDIpO1xyXG5cclxuJHBhZ2Utd2lkdGg6IDEyMDBweDtcclxuJHBhZ2Utc2lkZS1wYWRkaW5nOiAkZ3JpZC1zdGVwICogMztcclxuXHJcbiRjb2xvci1mb250LWJhc2U6ICRjb2xvci1ibGFjaztcclxuJGNvbG9yLXByaW1hcnk6ICRjb2xvci1ibHVlO1xyXG4kY29sb3ItbmVnYXRpdmU6ICRjb2xvci1yZWQ7XHJcbiRjb2xvci1uZXV0cmFsOiAkY29sb3ItZ3JleTtcclxuJGNvbG9yLXBvc2l0aXZlOiAkY29sb3ItZ3JlZW47XHJcbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 10138:
/*!****************************************************!*\
  !*** ./projects/charon/src/app/user/user-route.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRoute": () => (/* binding */ UserRoute)
/* harmony export */ });
var UserRoute;
(function (UserRoute) {
    UserRoute["Edit"] = "edit";
    UserRoute["Settings"] = "settings";
})(UserRoute || (UserRoute = {}));


/***/ }),

/***/ 48613:
/*!*************************************************************!*\
  !*** ./projects/charon/src/app/user/user-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserRoutingModule": () => (/* binding */ UserRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 73903);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages */ 37330);
/* harmony import */ var _user_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-route */ 10138);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 18259);





const ROUTES = [
    {
        path: '',
        component: _pages__WEBPACK_IMPORTED_MODULE_0__.UserPageComponent,
        children: [
            {
                path: '',
                component: _pages__WEBPACK_IMPORTED_MODULE_0__.UserMenuPageComponent,
            },
            {
                path: _user_route__WEBPACK_IMPORTED_MODULE_1__.UserRoute.Settings,
                component: _pages__WEBPACK_IMPORTED_MODULE_0__.SettingsPageComponent,
            },
        ],
    },
    {
        path: _user_route__WEBPACK_IMPORTED_MODULE_1__.UserRoute.Edit,
        component: _pages__WEBPACK_IMPORTED_MODULE_0__.EditProfilePageComponent,
    },
];
class UserRoutingModule {
}
UserRoutingModule.ɵfac = function UserRoutingModule_Factory(t) { return new (t || UserRoutingModule)(); };
UserRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: UserRoutingModule });
UserRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(ROUTES)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UserRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 72003:
/*!*****************************************************!*\
  !*** ./projects/charon/src/app/user/user.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserModule": () => (/* binding */ UserModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/cdk/clipboard */ 60425);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/forms */ 36410);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/dialog */ 39670);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/select */ 36180);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ngx-skeleton-loader */ 39752);
/* harmony import */ var ng_qrcode__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ng-qrcode */ 73541);
/* harmony import */ var _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @rxweb/reactive-form-validators */ 88111);
/* harmony import */ var _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @ngneat/svg-icon */ 49366);
/* harmony import */ var _ngneat_transloco__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @ngneat/transloco */ 44812);
/* harmony import */ var _shared_analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/analytics */ 47471);
/* harmony import */ var _shared_components_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/components/avatar */ 5066);
/* harmony import */ var _shared_components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/button */ 29149);
/* harmony import */ var _shared_components_button_back__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/components/button-back */ 43158);
/* harmony import */ var _shared_directives_clipboard_copied_notification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/directives/clipboard-copied-notification */ 5701);
/* harmony import */ var _shared_components_confirmation_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/components/confirmation-dialog */ 46274);
/* harmony import */ var _shared_components_currency_symbol__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/components/currency-symbol */ 54411);
/* harmony import */ var _shared_components_form_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/components/form-error */ 1674);
/* harmony import */ var _shared_components_input_container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/components/input-container */ 10401);
/* harmony import */ var _shared_components_controls__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/components/controls */ 41253);
/* harmony import */ var _shared_components_margin_label__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/components/margin-label */ 54912);
/* harmony import */ var _shared_pipes_micro_value__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/pipes/micro-value */ 55219);
/* harmony import */ var _shared_components_network_selector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shared/components/network-selector */ 76505);
/* harmony import */ var _shared_pipes_number_format__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/pipes/number-format */ 68259);
/* harmony import */ var _shared_pipes_number_suffix__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @shared/pipes/number-suffix */ 73559);
/* harmony import */ var _shared_components_password__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @shared/components/password */ 35197);
/* harmony import */ var _shared_components_pdv_type_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @shared/components/pdv-type-icon */ 43504);
/* harmony import */ var _shared_components_pdv_types_settings__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @shared/components/pdv-types-settings */ 5989);
/* harmony import */ var _shared_components_profile_form__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @shared/components/profile-form */ 36092);
/* harmony import */ var _shared_components_seed__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @shared/components/seed */ 2147);
/* harmony import */ var _shared_components_slot__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @shared/components/slot */ 83836);
/* harmony import */ var _shared_directives_submit_source__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @shared/directives/submit-source */ 71019);
/* harmony import */ var _shared_components_theme__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @shared/components/theme */ 36020);
/* harmony import */ var _shared_components_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @shared/components/tooltip */ 93227);
/* harmony import */ var _shared_directives_typeface__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @shared/directives/typeface */ 2703);
/* harmony import */ var _core_navigation__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @core/navigation */ 12089);
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./user-routing.module */ 48613);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _components_lock_delay_settings_lock_delay_settings_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/lock-delay-settings/lock-delay-settings.component */ 53994);
/* harmony import */ var _components_qr_login_dialog_qr_login_dialog_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/qr-login-dialog/qr-login-dialog.component */ 10529);
/* harmony import */ var _components_referral_bonus_milestones_referral_bonus_milestones_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/referral-bonus-milestones/referral-bonus-milestones.component */ 59639);
/* harmony import */ var _components_referral_reward_milestones_referral_reward_milestones_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/referral-reward-milestones/referral-reward-milestones.component */ 4872);
/* harmony import */ var _components_referral_stats_referral_stats_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/referral-stats/referral-stats.component */ 53224);
/* harmony import */ var _components_restore_seed_dialog_restore_seed_dialog_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/restore-seed-dialog/restore-seed-dialog.component */ 79457);
/* harmony import */ var _pages_edit_profile_page_edit_profile_page_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/edit-profile-page/edit-profile-page.component */ 75596);
/* harmony import */ var _pages_settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/settings-page/settings-page.component */ 3898);
/* harmony import */ var _pages_user_menu_page_user_menu_page_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/user-menu-page/user-menu-page.component */ 7213);
/* harmony import */ var _pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/user-page/user-page.component */ 61589);
















































class UserModule {
}
UserModule.ɵfac = function UserModule_Factory(t) { return new (t || UserModule)(); };
UserModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdefineNgModule"]({ type: UserModule });
UserModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _ngneat_transloco__WEBPACK_IMPORTED_MODULE_38__.TRANSLOCO_SCOPE,
            useValue: 'user',
        },
    ], imports: [[
            _shared_analytics__WEBPACK_IMPORTED_MODULE_0__.AnalyticsModule,
            _shared_components_avatar__WEBPACK_IMPORTED_MODULE_1__.AvatarModule,
            _shared_components_button__WEBPACK_IMPORTED_MODULE_2__.ButtonModule,
            _shared_components_button_back__WEBPACK_IMPORTED_MODULE_3__.ButtonBackModule,
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_39__.ClipboardModule,
            _shared_directives_clipboard_copied_notification__WEBPACK_IMPORTED_MODULE_4__.ClipboardCopiedNotificationModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_40__.CommonModule,
            _shared_components_confirmation_dialog__WEBPACK_IMPORTED_MODULE_5__.ConfirmationDialogModule,
            _shared_components_currency_symbol__WEBPACK_IMPORTED_MODULE_6__.CurrencySymbolModule,
            _shared_components_form_error__WEBPACK_IMPORTED_MODULE_7__.FormErrorModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_41__.FormsModule,
            _shared_components_input_container__WEBPACK_IMPORTED_MODULE_8__.InputContainerModule,
            _shared_components_controls__WEBPACK_IMPORTED_MODULE_9__.InputModule,
            _shared_components_margin_label__WEBPACK_IMPORTED_MODULE_10__.MarginLabelModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_42__.MatDialogModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_43__.MatSelectModule,
            _shared_pipes_micro_value__WEBPACK_IMPORTED_MODULE_11__.MicroValueModule,
            _core_navigation__WEBPACK_IMPORTED_MODULE_25__.NavigationModule,
            _shared_components_network_selector__WEBPACK_IMPORTED_MODULE_12__.NetworkSelectorModule,
            ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_44__.NgxSkeletonLoaderModule,
            _shared_pipes_number_format__WEBPACK_IMPORTED_MODULE_13__.NumberFormatModule,
            _shared_pipes_number_suffix__WEBPACK_IMPORTED_MODULE_14__.NumberSuffixModule,
            _shared_components_password__WEBPACK_IMPORTED_MODULE_15__.PasswordModule,
            _shared_components_pdv_type_icon__WEBPACK_IMPORTED_MODULE_16__.PdvTypeIconModule,
            _shared_components_pdv_types_settings__WEBPACK_IMPORTED_MODULE_17__.PdvTypesSettingsModule,
            _shared_components_profile_form__WEBPACK_IMPORTED_MODULE_18__.ProfileFormModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_41__.ReactiveFormsModule,
            ng_qrcode__WEBPACK_IMPORTED_MODULE_45__.QrCodeModule,
            _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_46__.RxReactiveFormsModule,
            _shared_components_seed__WEBPACK_IMPORTED_MODULE_19__.SeedModule,
            _shared_components_slot__WEBPACK_IMPORTED_MODULE_20__.SlotModule,
            _shared_directives_submit_source__WEBPACK_IMPORTED_MODULE_21__.SubmitSourceModule,
            _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_47__.SvgIconsModule,
            _shared_components_theme__WEBPACK_IMPORTED_MODULE_22__.ThemeModule,
            _shared_components_tooltip__WEBPACK_IMPORTED_MODULE_23__.TooltipModule,
            _ngneat_transloco__WEBPACK_IMPORTED_MODULE_38__.TranslocoModule,
            _shared_directives_typeface__WEBPACK_IMPORTED_MODULE_24__.TypefaceModule,
            _user_routing_module__WEBPACK_IMPORTED_MODULE_26__.UserRoutingModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_37__["ɵɵsetNgModuleScope"](UserModule, { declarations: [_components_lock_delay_settings_lock_delay_settings_component__WEBPACK_IMPORTED_MODULE_27__.LockDelaySettingsComponent, _components_qr_login_dialog_qr_login_dialog_component__WEBPACK_IMPORTED_MODULE_28__.QrLoginDialogComponent, _components_referral_bonus_milestones_referral_bonus_milestones_component__WEBPACK_IMPORTED_MODULE_29__.ReferralBonusMilestonesComponent, _components_referral_reward_milestones_referral_reward_milestones_component__WEBPACK_IMPORTED_MODULE_30__.ReferralRewardMilestonesComponent, _components_referral_stats_referral_stats_component__WEBPACK_IMPORTED_MODULE_31__.ReferralStatsComponent, _components_restore_seed_dialog_restore_seed_dialog_component__WEBPACK_IMPORTED_MODULE_32__.RestoreSeedDialogComponent, _pages_edit_profile_page_edit_profile_page_component__WEBPACK_IMPORTED_MODULE_33__.EditProfilePageComponent, _pages_settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_34__.SettingsPageComponent, _pages_user_menu_page_user_menu_page_component__WEBPACK_IMPORTED_MODULE_35__.UserMenuPageComponent, _pages_user_page_user_page_component__WEBPACK_IMPORTED_MODULE_36__.UserPageComponent], imports: [_shared_analytics__WEBPACK_IMPORTED_MODULE_0__.AnalyticsModule,
        _shared_components_avatar__WEBPACK_IMPORTED_MODULE_1__.AvatarModule,
        _shared_components_button__WEBPACK_IMPORTED_MODULE_2__.ButtonModule,
        _shared_components_button_back__WEBPACK_IMPORTED_MODULE_3__.ButtonBackModule,
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_39__.ClipboardModule,
        _shared_directives_clipboard_copied_notification__WEBPACK_IMPORTED_MODULE_4__.ClipboardCopiedNotificationModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_40__.CommonModule,
        _shared_components_confirmation_dialog__WEBPACK_IMPORTED_MODULE_5__.ConfirmationDialogModule,
        _shared_components_currency_symbol__WEBPACK_IMPORTED_MODULE_6__.CurrencySymbolModule,
        _shared_components_form_error__WEBPACK_IMPORTED_MODULE_7__.FormErrorModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_41__.FormsModule,
        _shared_components_input_container__WEBPACK_IMPORTED_MODULE_8__.InputContainerModule,
        _shared_components_controls__WEBPACK_IMPORTED_MODULE_9__.InputModule,
        _shared_components_margin_label__WEBPACK_IMPORTED_MODULE_10__.MarginLabelModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_42__.MatDialogModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_43__.MatSelectModule,
        _shared_pipes_micro_value__WEBPACK_IMPORTED_MODULE_11__.MicroValueModule,
        _core_navigation__WEBPACK_IMPORTED_MODULE_25__.NavigationModule,
        _shared_components_network_selector__WEBPACK_IMPORTED_MODULE_12__.NetworkSelectorModule,
        ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_44__.NgxSkeletonLoaderModule,
        _shared_pipes_number_format__WEBPACK_IMPORTED_MODULE_13__.NumberFormatModule,
        _shared_pipes_number_suffix__WEBPACK_IMPORTED_MODULE_14__.NumberSuffixModule,
        _shared_components_password__WEBPACK_IMPORTED_MODULE_15__.PasswordModule,
        _shared_components_pdv_type_icon__WEBPACK_IMPORTED_MODULE_16__.PdvTypeIconModule,
        _shared_components_pdv_types_settings__WEBPACK_IMPORTED_MODULE_17__.PdvTypesSettingsModule,
        _shared_components_profile_form__WEBPACK_IMPORTED_MODULE_18__.ProfileFormModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_41__.ReactiveFormsModule,
        ng_qrcode__WEBPACK_IMPORTED_MODULE_45__.QrCodeModule,
        _rxweb_reactive_form_validators__WEBPACK_IMPORTED_MODULE_46__.RxReactiveFormsModule,
        _shared_components_seed__WEBPACK_IMPORTED_MODULE_19__.SeedModule,
        _shared_components_slot__WEBPACK_IMPORTED_MODULE_20__.SlotModule,
        _shared_directives_submit_source__WEBPACK_IMPORTED_MODULE_21__.SubmitSourceModule,
        _ngneat_svg_icon__WEBPACK_IMPORTED_MODULE_47__.SvgIconsModule,
        _shared_components_theme__WEBPACK_IMPORTED_MODULE_22__.ThemeModule,
        _shared_components_tooltip__WEBPACK_IMPORTED_MODULE_23__.TooltipModule,
        _ngneat_transloco__WEBPACK_IMPORTED_MODULE_38__.TranslocoModule,
        _shared_directives_typeface__WEBPACK_IMPORTED_MODULE_24__.TypefaceModule,
        _user_routing_module__WEBPACK_IMPORTED_MODULE_26__.UserRoutingModule] }); })();


/***/ }),

/***/ 73559:
/*!*********************************************!*\
  !*** ./shared/pipes/number-suffix/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumberSuffixModule": () => (/* reexport safe */ _number_suffix_module__WEBPACK_IMPORTED_MODULE_0__.NumberSuffixModule)
/* harmony export */ });
/* harmony import */ var _number_suffix_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number-suffix.module */ 26588);



/***/ }),

/***/ 26588:
/*!************************************************************!*\
  !*** ./shared/pipes/number-suffix/number-suffix.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumberSuffixModule": () => (/* binding */ NumberSuffixModule)
/* harmony export */ });
/* harmony import */ var _number_suffix_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number-suffix.pipe */ 86045);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 18259);


class NumberSuffixModule {
}
NumberSuffixModule.ɵfac = function NumberSuffixModule_Factory(t) { return new (t || NumberSuffixModule)(); };
NumberSuffixModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NumberSuffixModule });
NumberSuffixModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NumberSuffixModule, { declarations: [_number_suffix_pipe__WEBPACK_IMPORTED_MODULE_0__.NumberSuffixPipe], exports: [_number_suffix_pipe__WEBPACK_IMPORTED_MODULE_0__.NumberSuffixPipe] }); })();


/***/ }),

/***/ 86045:
/*!**********************************************************!*\
  !*** ./shared/pipes/number-suffix/number-suffix.pipe.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumberSuffixPipe": () => (/* binding */ NumberSuffixPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 48750);


class NumberSuffixPipe {
    constructor(decimalPipe) {
        this.decimalPipe = decimalPipe;
    }
    transform(input, digitsInfo = null) {
        const suffixes = ['k', 'M', 'G', 'T', 'P', 'E'];
        if (Number.isNaN(input)) {
            return '';
        }
        if (input < 1000) {
            return String(input);
        }
        const exp = Math.floor(Math.log(input) / Math.log(1000));
        return this.decimalPipe.transform((input / Math.pow(1000, exp)), digitsInfo).replace(/,/g, '') + suffixes[exp - 1];
    }
}
NumberSuffixPipe.ɵfac = function NumberSuffixPipe_Factory(t) { return new (t || NumberSuffixPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe, 16)); };
NumberSuffixPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "numberSuffix", type: NumberSuffixPipe, pure: true });


/***/ }),

/***/ 22885:
/*!**************************************!*\
  !*** ./shared/svg-icons/delegate.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgDelegate": () => (/* binding */ svgDelegate)
/* harmony export */ });
const svgDelegate = {
    data: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 3C6.895 3 6 3.895 6 5V12C6 13.105 6.895 14 8 14H11V17C11 18.0931 11.9069 19 13 19H20C21.0931 19 22 18.0931 22 17V10C22 8.90694 21.0931 8 20 8H17V5C17 3.895 16.105 3 15 3H8ZM17 10H20V17H13V14H15C16.105 14 17 13.105 17 12V10ZM2 14V18C2 19.0931 2.90694 20 4 20H7V22L10 19L7 16V18H4V14H2Z" fill="currentColor"/></svg>`,
    name: 'delegate'
};


/***/ }),

/***/ 69011:
/*!**********************************!*\
  !*** ./shared/svg-icons/moon.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgMoon": () => (/* binding */ svgMoon)
/* harmony export */ });
const svgMoon = {
    data: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 11.54 20.96 11.08 20.9 10.64C19.92 12.01 18.32 12.9 16.5 12.9C13.52 12.9 11.1 10.48 11.1 7.5C11.1 5.69 11.99 4.08 13.36 3.1C12.92 3.04 12.46 3 12 3Z" fill="currentColor"/></svg>`,
    name: 'moon'
};


/***/ }),

/***/ 45861:
/*!********************************!*\
  !*** ./shared/svg-icons/qr.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgQr": () => (/* binding */ svgQr)
/* harmony export */ });
const svgQr = {
    data: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5 11H9C10.1 11 11 10.1 11 9V5C11 3.9 10.1 3 9 3H5C3.9 3 3 3.9 3 5V9C3 10.1 3.9 11 5 11ZM5 5H9V9H5V5ZM5 21H9C10.1 21 11 20.1 11 19V15C11 13.9 10.1 13 9 13H5C3.9 13 3 13.9 3 15V19C3 20.1 3.9 21 5 21ZM5 15H9V19H5V15ZM13 9V5C13 3.9 13.9 3 15 3H19C20.1 3 21 3.9 21 5V9C21 10.1 20.1 11 19 11H15C13.9 11 13 10.1 13 9ZM15 9H19V5H15V9ZM21 20.5V19.5C21 19.22 20.78 19 20.5 19H19.5C19.22 19 19 19.22 19 19.5V20.5C19 20.78 19.22 21 19.5 21H20.5C20.78 21 21 20.78 21 20.5ZM13 14.5V13.5C13 13.22 13.22 13 13.5 13H14.5C14.78 13 15 13.22 15 13.5V14.5C15 14.78 14.78 15 14.5 15H13.5C13.22 15 13 14.78 13 14.5ZM16.5 15H15.5C15.22 15 15 15.22 15 15.5V16.5C15 16.78 15.22 17 15.5 17H16.5C16.78 17 17 16.78 17 16.5V15.5C17 15.22 16.78 15 16.5 15ZM13 18.5V17.5C13 17.22 13.22 17 13.5 17H14.5C14.78 17 15 17.22 15 17.5V18.5C15 18.78 14.78 19 14.5 19H13.5C13.22 19 13 18.78 13 18.5ZM15.5 21H16.5C16.78 21 17 20.78 17 20.5V19.5C17 19.22 16.78 19 16.5 19H15.5C15.22 19 15 19.22 15 19.5V20.5C15 20.78 15.22 21 15.5 21ZM18.5 19H17.5C17.22 19 17 18.78 17 18.5V17.5C17 17.22 17.22 17 17.5 17H18.5C18.78 17 19 17.22 19 17.5V18.5C19 18.78 18.78 19 18.5 19ZM18.5 13H17.5C17.22 13 17 13.22 17 13.5V14.5C17 14.78 17.22 15 17.5 15H18.5C18.78 15 19 14.78 19 14.5V13.5C19 13.22 18.78 13 18.5 13ZM20.5 17H19.5C19.22 17 19 16.78 19 16.5V15.5C19 15.22 19.22 15 19.5 15H20.5C20.78 15 21 15.22 21 15.5V16.5C21 16.78 20.78 17 20.5 17Z" fill="currentColor"/></svg>`,
    name: 'qr'
};


/***/ }),

/***/ 13492:
/*!*************************************!*\
  !*** ./shared/svg-icons/refresh.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgRefresh": () => (/* binding */ svgRefresh)
/* harmony export */ });
const svgRefresh = {
    data: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_702:2016" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="2" y="3" width="20" height="19"><path d="M18 10H22V3H2V22H11.0107V18.9427H13.0022V22H17.0607L14.8242 18.4102L16.5195 17.3477L19.4289 22H22V17.9896L17.7891 15.9414L18.6641 14.1406L22 15.7547V12H18V10Z" fill="white"/></mask><g mask="url(#mask0_702:2016)"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" fill="currentColor"/></g><path d="M14 10H21V3L14 10Z" fill="currentColor"/></svg>`,
    name: 'refresh'
};


/***/ }),

/***/ 64509:
/*!**************************************!*\
  !*** ./shared/svg-icons/settings.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgSettings": () => (/* binding */ svgSettings)
/* harmony export */ });
const svgSettings = {
    data: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.4308 12.98C19.4708 12.66 19.5008 12.34 19.5008 12C19.5008 11.66 19.4708 11.34 19.4308 11.02L21.5408 9.37C21.7308 9.22 21.7808 8.95 21.6608 8.73L19.6608 5.27C19.5708 5.11 19.4008 5.02 19.2208 5.02C19.1608 5.02 19.1008 5.03 19.0508 5.05L16.5608 6.05C16.0408 5.65 15.4808 5.32 14.8708 5.07L14.4908 2.42C14.4608 2.18 14.2508 2 14.0008 2H10.0008C9.75082 2 9.54082 2.18 9.51082 2.42L9.13082 5.07C8.52082 5.32 7.96082 5.66 7.44082 6.05L4.95082 5.05C4.89082 5.03 4.83082 5.02 4.77082 5.02C4.60082 5.02 4.43082 5.11 4.34082 5.27L2.34082 8.73C2.21082 8.95 2.27082 9.22 2.46082 9.37L4.57082 11.02C4.53082 11.34 4.50082 11.67 4.50082 12C4.50082 12.33 4.53082 12.66 4.57082 12.98L2.46082 14.63C2.27082 14.78 2.22082 15.05 2.34082 15.27L4.34082 18.73C4.43082 18.89 4.60082 18.98 4.78082 18.98C4.84082 18.98 4.90082 18.97 4.95082 18.95L7.44082 17.95C7.96082 18.35 8.52082 18.68 9.13082 18.93L9.51082 21.58C9.54082 21.82 9.75082 22 10.0008 22H14.0008C14.2508 22 14.4608 21.82 14.4908 21.58L14.8708 18.93C15.4808 18.68 16.0408 18.34 16.5608 17.95L19.0508 18.95C19.1108 18.97 19.1708 18.98 19.2308 18.98C19.4008 18.98 19.5708 18.89 19.6608 18.73L21.6608 15.27C21.7808 15.05 21.7308 14.78 21.5408 14.63L19.4308 12.98ZM17.4508 11.27C17.4908 11.58 17.5008 11.79 17.5008 12C17.5008 12.21 17.4808 12.43 17.4508 12.73L17.3108 13.86L18.2008 14.56L19.2808 15.4L18.5808 16.61L17.3108 16.1L16.2708 15.68L15.3708 16.36C14.9408 16.68 14.5308 16.92 14.1208 17.09L13.0608 17.52L12.9008 18.65L12.7008 20H11.3008L11.1108 18.65L10.9508 17.52L9.89082 17.09C9.46082 16.91 9.06082 16.68 8.66082 16.38L7.75082 15.68L6.69082 16.11L5.42082 16.62L4.72082 15.41L5.80082 14.57L6.69082 13.87L6.55082 12.74C6.52082 12.43 6.50082 12.2 6.50082 12C6.50082 11.8 6.52082 11.57 6.55082 11.27L6.69082 10.14L5.80082 9.44L4.72082 8.6L5.42082 7.39L6.69082 7.9L7.73082 8.32L8.63082 7.64C9.06082 7.32 9.47082 7.08 9.88082 6.91L10.9408 6.48L11.1008 5.35L11.3008 4H12.6908L12.8808 5.35L13.0408 6.48L14.1008 6.91C14.5308 7.09 14.9308 7.32 15.3308 7.62L16.2408 8.32L17.3008 7.89L18.5708 7.38L19.2708 8.59L18.2008 9.44L17.3108 10.14L17.4508 11.27ZM12.0008 8C9.79082 8 8.00082 9.79 8.00082 12C8.00082 14.21 9.79082 16 12.0008 16C14.2108 16 16.0008 14.21 16.0008 12C16.0008 9.79 14.2108 8 12.0008 8ZM12.0008 14C10.9008 14 10.0008 13.1 10.0008 12C10.0008 10.9 10.9008 10 12.0008 10C13.1008 10 14.0008 10.9 14.0008 12C14.0008 13.1 13.1008 14 12.0008 14Z" fill="currentColor"/></svg>`,
    name: 'settings'
};


/***/ }),

/***/ 80229:
/*!***********************************!*\
  !*** ./shared/svg-icons/squid.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgSquid": () => (/* binding */ svgSquid)
/* harmony export */ });
const svgSquid = {
    data: `<?xml version="1.0" encoding="utf-8"?><!--Generator: Adobe Illustrator 26.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)--><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500" xml:space="preserve"><path d="M497.22,212.65l-0.05-0.32l-1.38,0.05c0,0-0.03,0.42-0.04,0.46l-0.46,0.02c-0.6,7.76-1.87,15.13-3.77,21.9\tc-4.66,16.67-12.47,33.51-21.98,47.42c-10.52,15.4-22.77,26.81-35.43,33c-7.9,3.87-15.73,6.71-23.27,8.44\tc-5.85,1.32-11.62,1.98-17.13,1.98c-19.1,0-36.6-8.04-50.62-23.24c-21.67-23.51-34.22-63.92-31.23-100.57\tc1.04-12.82,3.09-24.75,5.07-36.28c4.21-24.48,7.84-45.62,1.05-67.72c-3.64-11.84-11.33-21.02-21.67-25.86\tc-7.04-3.3-14.39-4.97-21.86-4.97c-24.01,0-43.82,16.91-53.48,31.39c-14.75,22.11-22.1,49.95-20.15,76.37\tc1.82,24.73,10.39,41.03,23.25,63.1c6.45,11.06,13.17,20.83,19.11,29.46c10.04,14.6,18.71,27.21,22.99,41.04\tc5.93,19.17,1.81,28.39-0.24,31.47c-2.53,3.8-6.59,5.99-12.08,6.51c-0.7,0.07-1.39,0.1-2.06,0.1c-16.76,0-17.08-22.88-17.27-36.56\tl0-0.31c-0.01-0.9-0.03-1.76-0.04-2.58c-0.57-26.79-10.86-42.8-23.9-63.08c-8.18-12.72-17.45-27.13-25.59-46.76\tc-13.02-31.36-16.29-61.61-9.71-89.9c0.23-1.01,0.48-2.02,0.74-3.04c7.99-31.49,27.74-71.82,76.42-85.11\tc9.22-2.52,18.69-3.8,28.14-3.8c28.62,0,53.55,11.78,68.39,32.31c12.01,16.61,18.2,35.44,18.94,57.56\tc0.18,5.26,0.04,10.77-0.41,16.38c-1.05,12.65-3.73,26.52-8.18,42.39c-9,32.08-11.18,59.26-6.47,80.77\tc3.61,16.5,11.5,29.07,21.64,34.48c8.22,4.38,16.98,6.6,26.03,6.6c23.12,0,44.18-14.75,54.8-29.36c16.7-22.98,25.5-63.5,24.06-87.87\tc-0.53-8.94-1.29-16.51-2.34-23.21l-0.03-0.1l-0.02-0.05c-19.76-42.73-51.1-78.95-90.63-104.74C345.81,13.99,298.65,0,250,0\tC183.22,0,120.44,26,73.22,73.22C26.01,120.44,0,183.22,0,250c0,19.41,2.24,38.77,6.67,57.56l0.08,0.33l1.39-0.2\tc0,0-0.02-0.41-0.03-0.44l0.46-0.07c-0.86-14.88,0.49-29.21,3.91-41.44c4.66-16.66,12.47-33.51,21.98-47.42\tc10.52-15.39,22.77-26.81,35.43-33c7.84-3.84,15.63-6.67,23.14-8.41c5.9-1.34,11.72-2.01,17.28-2.01c19.1,0,36.61,8.03,50.62,23.23\tc21.67,23.5,34.22,63.92,31.23,100.58c-1.04,12.83-3.09,24.75-5.08,36.28c-4.21,24.48-7.84,45.62-1.05,67.72\tc3.63,11.84,11.33,21.02,21.67,25.86c7.04,3.3,14.39,4.97,21.86,4.97c24.01,0,43.82-16.91,53.48-31.4\tc14.75-22.11,22.1-49.95,20.15-76.37c-1.82-24.72-10.39-41.03-23.25-63.1c-6.43-11.03-13.16-20.82-19.1-29.46\tc-10.04-14.6-18.71-27.21-22.99-41.05c-5.93-19.17-1.81-28.39,0.23-31.46c2.53-3.8,6.59-5.99,12.08-6.51c0.7-0.07,1.4-0.1,2.06-0.1\tc16.76,0,17.08,22.86,17.27,36.51l0.01,0.39c0.01,0.89,0.03,1.73,0.04,2.54c0.57,26.79,10.86,42.8,23.9,63.08\tc8.18,12.72,17.45,27.14,25.59,46.76c12.61,30.36,16.07,59.71,10.3,87.23c-0.16,0.76-0.33,1.52-0.5,2.28\tc-7.64,32.86-27.25,74.9-77.26,88.56c-9.22,2.52-18.69,3.79-28.14,3.8c-28.62,0-53.55-11.78-68.39-32.31\tc-12.01-16.61-18.2-35.44-18.94-57.56c-0.11-3.21-0.1-6.53,0.02-9.85c0.58-14.4,3.39-30.4,8.58-48.92\tc9-32.08,11.18-59.26,6.47-80.77c-3.61-16.51-11.5-29.07-21.64-34.48c-8.22-4.38-16.97-6.6-26.03-6.6\tc-23.11,0-44.18,14.75-54.8,29.36c-16.7,22.98-25.5,63.5-24.06,87.87c0.89,15.14,2.43,26.27,5.01,36.14l0.03,0.08l0.02,0.04\tC73.38,449.5,157.81,500,250,500c66.78,0,129.56-26,176.78-73.22C474,379.56,500,316.78,500,250\tC500,237.52,499.07,224.95,497.22,212.65z"/></svg>`,
    name: 'squid'
};


/***/ }),

/***/ 94723:
/*!**********************************!*\
  !*** ./shared/svg-icons/star.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "svgStar": () => (/* binding */ svgStar)
/* harmony export */ });
const svgStar = {
    data: `<svg viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33 0L36.7905 4.20844L41.541 1.12445L44.1131 6.17054L49.5 4.42116L50.6784 9.96102L56.3345 9.66548L56.039 15.3216L61.5788 16.5L59.8295 21.8869L64.8755 24.459L61.7916 29.2095L66 33L61.7916 36.7905L64.8755 41.541L59.8295 44.1131L61.5788 49.5L56.039 50.6784L56.3345 56.3345L50.6784 56.039L49.5 61.5788L44.1131 59.8295L41.541 64.8755L36.7905 61.7916L33 66L29.2095 61.7916L24.459 64.8755L21.8869 59.8295L16.5 61.5788L15.3216 56.039L9.66548 56.3345L9.96102 50.6784L4.42116 49.5L6.17054 44.1131L1.12445 41.541L4.20844 36.7905L0 33L4.20844 29.2095L1.12445 24.459L6.17054 21.8869L4.42116 16.5L9.96102 15.3216L9.66548 9.66548L15.3216 9.96102L16.5 4.42116L21.8869 6.17054L24.459 1.12445L29.2095 4.20844L33 0Z" fill="currentColor"/></svg>`,
    name: 'star'
};


/***/ }),

/***/ 73541:
/*!*******************************************************!*\
  !*** ./node_modules/ng-qrcode/fesm2015/ng-qrcode.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrCodeComponent": () => (/* binding */ QrCodeComponent),
/* harmony export */   "QrCodeDirective": () => (/* binding */ QrCodeDirective),
/* harmony export */   "QrCodeModule": () => (/* binding */ QrCodeModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 18259);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 48750);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qrcode */ 17988);







function QrCodeComponent_canvas_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "canvas", 1);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("qrCode", ctx_r0.value)("qrCodeErrorCorrectionLevel", ctx_r0.errorCorrectionLevel)("qrCodeCenterImageSrc", ctx_r0.centerImageSrc)("qrCodeCenterImageWidth", ctx_r0.centerImageSize)("qrCodeCenterImageHeight", ctx_r0.centerImageSize)("qrCodeMargin", ctx_r0.margin)("width", ctx_r0.size)("height", ctx_r0.size)("darkColor", ctx_r0.darkColor)("lightColor", ctx_r0.lightColor);
  }
}

const validColorRegex = /^#(?:[0-9a-fA-F]{3,4}){1,2}$/;

class QrCodeDirective {
  constructor(viewContainerRef) {
    this.viewContainerRef = viewContainerRef; // eslint-disable-next-line @angular-eslint/no-input-rename

    this.errorCorrectionLevel = QrCodeDirective.DEFAULT_ERROR_CORRECTION_LEVEL;
    this.darkColor = "#000000FF";
    this.lightColor = "#FFFFFFFF"; // eslint-disable-next-line @angular-eslint/no-input-rename

    this.margin = 16;
  }

  ngOnChanges() {
    var _a, _b;

    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
      if (!this.value) {
        return;
      }

      if (this.version && this.version > 40) {
        console.warn("[qrCode] max version is 40, clamping");
        this.version = 40;
      } else if (this.version && this.version < 1) {
        console.warn("[qrCode] min version is 1, clamping");
        this.version = 1;
      } else if (this.version !== undefined && isNaN(this.version)) {
        console.warn("[qrCode] version should be set to a number, defaulting to auto");
        this.version = undefined;
      }

      const canvas = this.viewContainerRef.element.nativeElement;

      if (!canvas) {
        // native element not available on server side rendering
        return;
      }

      const context = canvas.getContext("2d");

      if (context) {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      }

      const errorCorrectionLevel = (_a = this.errorCorrectionLevel) !== null && _a !== void 0 ? _a : QrCodeDirective.DEFAULT_ERROR_CORRECTION_LEVEL;
      const dark = validColorRegex.test(this.darkColor) ? this.darkColor : undefined;
      const light = validColorRegex.test(this.lightColor) ? this.lightColor : undefined;

      if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.isDevMode)()) {
        if (!dark && this.darkColor) {
          console.error("[ng-qrcode] darkColor set to invalid value, must be RGBA hex color string, eg: #3050A1FF");
        }

        if (!light && this.lightColor) {
          console.error("[ng-qrcode] lightColor set to invalid value, must be RGBA hex color string, eg: #3050A130");
        }
      }

      yield qrcode__WEBPACK_IMPORTED_MODULE_0__.toCanvas(canvas, this.value, {
        version: this.version,
        errorCorrectionLevel,
        width: this.width,
        margin: this.margin,
        color: {
          dark,
          light
        }
      });
      const centerImageSrc = this.centerImageSrc;
      const centerImageWidth = getIntOrDefault(this.centerImageWidth, QrCodeDirective.DEFAULT_CENTER_IMAGE_SIZE);
      const centerImageHeight = getIntOrDefault(this.centerImageHeight, QrCodeDirective.DEFAULT_CENTER_IMAGE_SIZE);

      if (centerImageSrc && context) {
        if (!this.centerImage) {
          this.centerImage = new Image(centerImageWidth, centerImageHeight);
        }

        if (centerImageSrc !== ((_b = this.centerImage) === null || _b === void 0 ? void 0 : _b.src)) {
          this.centerImage.src = centerImageSrc;
        }

        if (centerImageWidth !== this.centerImage.width) {
          this.centerImage.width = centerImageWidth;
        }

        if (centerImageHeight !== this.centerImage.height) {
          this.centerImage.height = centerImageHeight;
        }

        const centerImage = this.centerImage;

        centerImage.onload = () => {
          context.drawImage(centerImage, canvas.width / 2 - centerImageWidth / 2, canvas.height / 2 - centerImageHeight / 2, centerImageWidth, centerImageHeight);
        };
      }
    });
  }

}

QrCodeDirective.DEFAULT_ERROR_CORRECTION_LEVEL = "M";
QrCodeDirective.DEFAULT_CENTER_IMAGE_SIZE = 40;

QrCodeDirective.ɵfac = function QrCodeDirective_Factory(t) {
  return new (t || QrCodeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef));
};

QrCodeDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: QrCodeDirective,
  selectors: [["canvas", "qrCode", ""]],
  inputs: {
    value: ["qrCode", "value"],
    version: ["qrCodeVersion", "version"],
    errorCorrectionLevel: ["qrCodeErrorCorrectionLevel", "errorCorrectionLevel"],
    width: "width",
    height: "height",
    darkColor: "darkColor",
    lightColor: "lightColor",
    centerImageSrc: ["qrCodeCenterImageSrc", "centerImageSrc"],
    centerImageWidth: ["qrCodeCenterImageWidth", "centerImageWidth"],
    centerImageHeight: ["qrCodeCenterImageHeight", "centerImageHeight"],
    margin: ["qrCodeMargin", "margin"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QrCodeDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: `canvas[qrCode]`
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef
    }];
  }, {
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ["qrCode"]
    }],
    version: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ["qrCodeVersion"]
    }],
    errorCorrectionLevel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ["qrCodeErrorCorrectionLevel"]
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    height: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    darkColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    lightColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    centerImageSrc: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ["qrCodeCenterImageSrc"]
    }],
    centerImageWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ["qrCodeCenterImageWidth"]
    }],
    centerImageHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ["qrCodeCenterImageHeight"]
    }],
    margin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
      args: ["qrCodeMargin"]
    }]
  });
})();

function getIntOrDefault(value, defaultValue) {
  if (value === undefined || value === "") {
    return defaultValue;
  }

  if (typeof value === "string") {
    return parseInt(value, 10);
  }

  return value;
}

class QrCodeComponent {}

QrCodeComponent.ɵfac = function QrCodeComponent_Factory(t) {
  return new (t || QrCodeComponent)();
};

QrCodeComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: QrCodeComponent,
  selectors: [["qr-code"]],
  inputs: {
    value: "value",
    size: "size",
    darkColor: "darkColor",
    lightColor: "lightColor",
    errorCorrectionLevel: "errorCorrectionLevel",
    centerImageSrc: "centerImageSrc",
    centerImageSize: "centerImageSize",
    margin: "margin"
  },
  decls: 1,
  vars: 1,
  consts: [[3, "qrCode", "qrCodeErrorCorrectionLevel", "qrCodeCenterImageSrc", "qrCodeCenterImageWidth", "qrCodeCenterImageHeight", "qrCodeMargin", "width", "height", "darkColor", "lightColor", 4, "ngIf"], [3, "qrCode", "qrCodeErrorCorrectionLevel", "qrCodeCenterImageSrc", "qrCodeCenterImageWidth", "qrCodeCenterImageHeight", "qrCodeMargin", "width", "height", "darkColor", "lightColor"]],
  template: function QrCodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, QrCodeComponent_canvas_0_Template, 1, 10, "canvas", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.value);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, QrCodeDirective],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QrCodeComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: "qr-code",
      template: `
    <canvas *ngIf="value"
            [qrCode]="value"
            [qrCodeErrorCorrectionLevel]="errorCorrectionLevel"
            [qrCodeCenterImageSrc]="centerImageSrc"
            [qrCodeCenterImageWidth]="centerImageSize"
            [qrCodeCenterImageHeight]="centerImageSize"
            [qrCodeMargin]="margin"
            [width]="size"
            [height]="size"
            [darkColor]="darkColor"
            [lightColor]="lightColor"
    >
    </canvas>
  `,
      styles: []
    }]
  }], null, {
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    darkColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    lightColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    errorCorrectionLevel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    centerImageSrc: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    centerImageSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    margin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();

class QrCodeModule {}

QrCodeModule.ɵfac = function QrCodeModule_Factory(t) {
  return new (t || QrCodeModule)();
};

QrCodeModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: QrCodeModule
});
QrCodeModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QrCodeModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      declarations: [QrCodeComponent, QrCodeDirective],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
      exports: [QrCodeComponent, QrCodeDirective]
    }]
  }], null, null);
})();
/*
 * Public API Surface of ng-qrcode
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=projects_charon_src_app_user_user_module_ts.js.map
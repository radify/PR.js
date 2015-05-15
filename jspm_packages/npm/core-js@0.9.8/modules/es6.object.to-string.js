/* */ 
'use strict';
var $ = require("./$"),
    cof = require("./$.cof"),
    src = String({}.toString),
    tmp = {};
function toString() {
  return '[object ' + cof.classof(this) + ']';
}
toString.toString = function() {
  return src;
};
tmp[require("./$.wks")('toStringTag')] = 'z';
if ($.FW && cof(tmp) != 'z')
  $.hide(Object.prototype, 'toString', toString);

/**
 * Smart.js 作用:方便,统一我们项目开发. 包含功能:Smart属性,测试方法,ajax,cookie,快速排序,chart
 * 
 * 地址:https://github.com/chen1185280999/Smart.js
 * 
 */

$(function() {

	var _Smart = window.Smart;

	// cookie
	// base编码
	var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	var base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
			-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
			-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62,
			-1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1,
			-1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
			15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1,
			26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
			43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

	var Smart = function() {
		return new Smart.fn.init();
	};

	Smart.fn = Smart.prototype = {

		// Smart : core_version,

		// summary : summary,

		constructor : Smart,

		init : function() {
			return this;
		},

		selector : "",

		length : 0,

	};

	Smart.fn.init.prototype = Smart.fn;

	Smart.extend = Smart.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone, target = arguments[0]
				|| {}, i = 1, length = arguments.length, deep = false;

		// Handle a deep copy situation
		if (typeof target === "boolean") {
			deep = target;
			target = arguments[1] || {};
			// skip the boolean and the target
			i = 2;
		}

		// Handle case when target is a string or something (possible in
		// deep
		// copy)
		if (typeof target !== "object" && !jQuery.isFunction(target)) {
			target = {};
		}

		// extend jQuery itself if only one argument is passed
		if (length === i) {
			target = this;
			--i;
		}

		for (; i < length; i++) {
			// Only deal with non-null/undefined values
			if ((options = arguments[i]) != null) {
				// Extend the base object
				for (name in options) {
					src = target[name];
					copy = options[name];

					// Prevent never-ending loop
					if (target === copy) {
						continue;
					}

					// Recurse if we're merging plain
					// objects or arrays
					if (deep
							&& copy
							&& (jQuery.isPlainObject(copy) || (copyIsArray = jQuery
									.isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && jQuery.isArray(src) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject(src) ? src : {};
						}

						// Never move original objects,
						// clone them
						target[name] = jQuery.extend(deep, clone, copy);

						// Don't bring in undefined
						// values
					} else if (copy !== undefined) {
						target[name] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	// test function
	// Smart.textAlert("要弹的东西"); Smart.console("要打印的东西");
	// Wait the line, remove the notes
	Smart.extend({
		aler1t : function(value) {
			alert(value);
		},
		console : function(value) {
			console.log(value);
		}
	});

	//16进制转换
	Smart.extend({
		encode_16 : function(s) {
			return s.replace(/[\d\D]/g, function($) {
				return ("000" + $.charCodeAt(0).toString(16)).slice(-4);
			});
		},
		decode_16 : function(s) {
			return s.replace(/.{4}/g, function($) {
				return String.fromCharCode(parseInt($, 16));
			});
		}
	});

	// MD5加密32位,小写
	var hexcase = 0;
	var b64pad = "";
	var chrsz = 8;

	Smart.extend({
		MD5encode : function(s) {
			return binl2hex(core_md5(str2binl(s), s.length * chrsz));
		}
	});

	function b64_md5(s) {
		return binl2b64(core_md5(str2binl(s), s.length * chrsz));
	}
	function str_md5(s) {
		return binl2str(core_md5(str2binl(s), s.length * chrsz));
	}
	function hex_hmac_md5(key, data) {
		return binl2hex(core_hmac_md5(key, data));
	}
	function b64_hmac_md5(key, data) {
		return binl2b64(core_hmac_md5(key, data));
	}
	function str_hmac_md5(key, data) {
		return binl2str(core_hmac_md5(key, data));
	}

	function core_md5(x, len) {
		/* append padding */
		x[len >> 5] |= 0x80 << ((len) % 32);
		x[(((len + 64) >>> 9) << 4) + 14] = len;

		var a = 1732584193;
		var b = -271733879;
		var c = -1732584194;
		var d = 271733878;

		for (var i = 0; i < x.length; i += 16) {
			var olda = a;
			var oldb = b;
			var oldc = c;
			var oldd = d;

			a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
			d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
			c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
			b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
			a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
			d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
			c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
			b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
			a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
			d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
			c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
			b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
			a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
			d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
			c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
			b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);

			a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
			d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
			c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
			b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
			a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
			d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
			c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
			b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
			a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
			d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
			c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
			b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
			a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
			d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
			c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
			b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

			a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
			d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
			c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
			b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
			a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
			d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
			c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
			b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
			a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
			d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
			c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
			b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
			a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
			d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
			c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
			b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);

			a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
			d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
			c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
			b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
			a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
			d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
			c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
			b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
			a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
			d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
			c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
			b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
			a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
			d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
			c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
			b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);

			a = safe_add(a, olda);
			b = safe_add(b, oldb);
			c = safe_add(c, oldc);
			d = safe_add(d, oldd);
		}
		return Array(a, b, c, d);

	}

	function md5_cmn(q, a, b, x, s, t) {
		return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
	}
	function md5_ff(a, b, c, d, x, s, t) {
		return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
	}
	function md5_gg(a, b, c, d, x, s, t) {
		return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
	}
	function md5_hh(a, b, c, d, x, s, t) {
		return md5_cmn(b ^ c ^ d, a, b, x, s, t);
	}
	function md5_ii(a, b, c, d, x, s, t) {
		return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
	}

	function core_hmac_md5(key, data) {
		var bkey = str2binl(key);
		if (bkey.length > 16)
			bkey = core_md5(bkey, key.length * chrsz);

		var ipad = Array(16), opad = Array(16);
		for (var i = 0; i < 16; i++) {
			ipad[i] = bkey[i] ^ 0x36363636;
			opad[i] = bkey[i] ^ 0x5C5C5C5C;
		}

		var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length
				* chrsz);
		return core_md5(opad.concat(hash), 512 + 128);
	}

	function safe_add(x, y) {
		var lsw = (x & 0xFFFF) + (y & 0xFFFF);
		var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
		return (msw << 16) | (lsw & 0xFFFF);
	}

	function bit_rol(num, cnt) {
		return (num << cnt) | (num >>> (32 - cnt));
	}

	function str2binl(str) { //
		var bin = Array();
		var mask = (1 << chrsz) - 1;
		for (var i = 0; i < str.length * chrsz; i += chrsz)
			bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (i % 32);
		return bin;
	}

	function binl2str(bin) {
		var str = "";
		var mask = (1 << chrsz) - 1;
		for (var i = 0; i < bin.length * 32; i += chrsz)
			str += String.fromCharCode((bin[i >> 5] >>> (i % 32)) & mask);
		return str;
	}

	function binl2hex(binarray) {
		var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
		var str = "";
		for (var i = 0; i < binarray.length * 4; i++) {
			str += hex_tab
					.charAt((binarray[i >> 2] >> ((i % 4) * 8 + 4)) & 0xF)
					+ hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8)) & 0xF);
		}
		return str;
	}

	function binl2b64(binarray) {
		var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
		var str = "";
		for (var i = 0; i < binarray.length * 4; i += 3) {
			var triplet = (((binarray[i >> 2] >> 8 * (i % 4)) & 0xFF) << 16)
					| (((binarray[i + 1 >> 2] >> 8 * ((i + 1) % 4)) & 0xFF) << 8)
					| ((binarray[i + 2 >> 2] >> 8 * ((i + 2) % 4)) & 0xFF);
			for (var j = 0; j < 4; j++) {
				if (i * 8 + j * 6 > binarray.length * 32)
					str += b64pad;
				else
					str += tab.charAt((triplet >> 6 * (3 - j)) & 0x3F);
			}
		}
		return str;
	}

	// 正则表达式验证
	Smart
			.extend({
				isPhone : function(phone) {
					if ((/^(13[0-9]|14[5|7]|15[^4,,\\D]|(17[6-8])|18[0-9])\d{8}$/.test(phone))
							&& (phone.length == 11)) {
						return true;
					} else {
						return false;
					}
				},
				isIDcard : function(IDcard) {
					if ((/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/
							.test(IDcard))
							&& (IDcard.length == 18)) {
						return true;
					} else {
						return false;
					}
				},
				isPassword : function(password) {
					if ((/^[0-9A-Za-z]{6,12}$/.test(password))) {
						return true;
					} else {
						return false;
					}
				},
				isEmail : function(email) {
					if ((/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
							.test(email))) {
						return true;
					} else {
						return false;
					}
				}

			})

	Smart.extend({
		/**
		 * url url; data obj success function eg:post("url",send,function(data){
		 * alert(data); })
		 */
		post : function(url, data, success) {
			// data
			if ((typeof (data) != "object") || (jQuery.isEmptyObject(data))) {
				Smart.console(url + "对应的参数格式错误");
			}
			var json_data = JSON.stringify(data);
			$.ajax({
				type : "post",
				url : url,
				data : json_data,
				contentType : "application/json",
				dataType : "json",
				success : success,
				error : function() {
					Smart.console("请求服务器出错!请检查网络连接");
				}
			});
		},
		get : function(url, success) {
			// var json_data = JSON.stringify(data);
			$.ajax({
				type : "get",
				url : url,
				success : success,
				error : function() {
					Smart.console("请求服务器出错!请检查网络连接");
				}
			});
		}
	});

	// cookie
	// delete,select.
	Smart.extend({
		/**
		 * base64
		 * 
		 * @param {Object}
		 *            str
		 */
		base64encode : function(str) {
			var out, i, len;
			var c1, c2, c3;
			len = str.length;
			i = 0;
			out = "";
			while (i < len) {
				c1 = str.charCodeAt(i++) & 0xff;
				if (i == len) {
					out += base64EncodeChars.charAt(c1 >> 2);
					out += base64EncodeChars.charAt((c1 & 0x3) << 4);
					out += "==";
					break;
				}
				c2 = str.charCodeAt(i++);
				if (i == len) {
					out += base64EncodeChars.charAt(c1 >> 2);
					out += base64EncodeChars.charAt(((c1 & 0x3) << 4)
							| ((c2 & 0xF0) >> 4));
					out += base64EncodeChars.charAt((c2 & 0xF) << 2);
					out += "=";
					break;
				}
				c3 = str.charCodeAt(i++);
				out += base64EncodeChars.charAt(c1 >> 2);
				out += base64EncodeChars.charAt(((c1 & 0x3) << 4)
						| ((c2 & 0xF0) >> 4));
				out += base64EncodeChars.charAt(((c2 & 0xF) << 2)
						| ((c3 & 0xC0) >> 6));
				out += base64EncodeChars.charAt(c3 & 0x3F);
			}
			return out;
		},
		/**
		 * base64
		 * 
		 * @param {Object}
		 *            str
		 */
		base64decode : function(str) {
			var c1, c2, c3, c4;
			var i, len, out;
			len = str.length;
			i = 0;
			out = "";
			while (i < len) {
				/* c1 */
				do {
					c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
				} while (i < len && c1 == -1);
				if (c1 == -1)
					break;
				/* c2 */
				do {
					c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
				} while (i < len && c2 == -1);
				if (c2 == -1)
					break;
				out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
				/* c3 */
				do {
					c3 = str.charCodeAt(i++) & 0xff;
					if (c3 == 61)
						return out;
					c3 = base64DecodeChars[c3];
				} while (i < len && c3 == -1);
				if (c3 == -1)
					break;
				out += String.fromCharCode(((c2 & 0XF) << 4)
						| ((c3 & 0x3C) >> 2));
				/* c4 */
				do {
					c4 = str.charCodeAt(i++) & 0xff;
					if (c4 == 61)
						return out;
					c4 = base64DecodeChars[c4];
				} while (i < len && c4 == -1);
				if (c4 == -1)
					break;
				out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
			}
			return out;
		},

		/**
		 * utf16->utf8
		 * 
		 * @param {Object}
		 *            str
		 */
		utf16to8 : function(str) {
			var out, i, len, c;
			out = "";
			len = str.length;
			for (i = 0; i < len; i++) {
				c = str.charCodeAt(i);
				if ((c >= 0x0001) && (c <= 0x007F)) {
					out += str.charAt(i);
				} else if (c > 0x07FF) {
					out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
					out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
					out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
				} else {
					out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
					out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
				}
			}
			return out;
		},
		/**
		 * utf8转utf16
		 * 
		 * @param {Object}
		 *            str
		 */
		utf8to16 : function(str) {
			var out, i, len, c;
			var char2, char3;
			out = "";
			len = str.length;
			i = 0;
			while (i < len) {
				c = str.charCodeAt(i++);
				switch (c >> 4) {
				case 0:
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
					// 0xxxxxxx
					out += str.charAt(i - 1);
					break;
				case 12:
				case 13:
					// 110x xxxx 10xx xxxx
					char2 = str.charCodeAt(i++);
					out += String.fromCharCode(((c & 0x1F) << 6)
							| (char2 & 0x3F));
					break;
				case 14:
					// 1110 xxxx10xx xxxx10xx xxxx
					char2 = str.charCodeAt(i++);
					char3 = str.charCodeAt(i++);
					out += String.fromCharCode(((c & 0x0F) << 12)
							| ((char2 & 0x3F) << 6) | ((char3 & 0x3F) << 0));
					break;
				}
			}
			return out;
		},

		// cookie
		// get
		getCookie : function(objName) {
			var arrStr = document.cookie.split("; ");
			for (var i = 0; i < arrStr.length; i++) {
				var temp = arrStr[i].split("=");
				if (temp[0] == objName) {
					var value = Smart.utf8to16(Smart.base64decode(temp[1]));
					return Url.decode(value);
				}
			}
		},

		// set
		setCookie : function(key, value) {
			var d = new Date();
			d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
			var expires = "expires=" + d.toUTCString();
			// url
			var value_1 = Url.encode(value);
			var value_2 = Smart.utf8to16(Smart.base64encode(value_1));
			document.cookie = key + "=" + value_2 + "; " + expires + ";path=/";
		},
		// set_longtime
		setCookieLongTime : function(key, value) {
			var d = new Date();
			d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
			var expires = "expires=" + d.toUTCString();
			// url
			var value_1 = Url.encode(value);
			var value_2 = Smart.utf8to16(Smart.base64encode(value_1));
			document.cookie = key + "=" + value_2 + "; " + expires + ";path=/";
		},
		// 改名
		deleteCookie : function(key) {
			// var date = new Date();
			// date.setTime(date.getTime() - 10000);
			// document.cookie = key + "=vv;expires=" + date.toGMTString() +
			// ";path=/ChinaDriveTrainingNetwork";

			var date = new Date();
			date.setTime(date.getTime() - 10000);
			document.cookie = key + "=a;expires=" + date.toGMTString()
					+ ";path=/";

		}
	});

	var Url = {
		// public method for url encoding
		encode : function(string) {
			return escape(this._utf8_encode(string));
		},

		// public method for url decoding
		decode : function(string) {
			return this._utf8_decode(unescape(string));
		},

		// private method for UTF-8 encoding
		_utf8_encode : function(string) {
			string = string.replace(/\r\n/g, "\n");
			var utftext = "";

			for (var n = 0; n < string.length; n++) {

				var c = string.charCodeAt(n);

				if (c < 128) {
					utftext += String.fromCharCode(c);
				} else if ((c > 127) && (c < 2048)) {
					utftext += String.fromCharCode((c >> 6) | 192);
					utftext += String.fromCharCode((c & 63) | 128);
				} else {
					utftext += String.fromCharCode((c >> 12) | 224);
					utftext += String.fromCharCode(((c >> 6) & 63) | 128);
					utftext += String.fromCharCode((c & 63) | 128);
				}

			}

			return utftext;
		},

		// private method for UTF-8 decoding
		_utf8_decode : function(utftext) {
			var string = "";
			var i = 0;
			var c = c1 = c2 = 0;

			while (i < utftext.length) {

				c = utftext.charCodeAt(i);

				if (c < 128) {
					string += String.fromCharCode(c);
					i++;
				} else if ((c > 191) && (c < 224)) {
					c2 = utftext.charCodeAt(i + 1);
					string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
					i += 2;
				} else {
					c2 = utftext.charCodeAt(i + 1);
					c3 = utftext.charCodeAt(i + 2);
					string += String.fromCharCode(((c & 15) << 12)
							| ((c2 & 63) << 6) | (c3 & 63));
					i += 3;
				}
			}
			return string;
		}

	};
	// cookie结束

	// ------------------------js快速排序法
	Smart.extend({
		/**
		 * 对一个jsonArray对象进行排序,以其中的某个key为标准 这个key目前支持阿拉伯数字排序.
		 * 
		 * @param {jsonArray}
		 *            jsonArray jsonArray对象
		 * @param {String}
		 *            key
		 */
		quickSort : function(jsonArray, key) {
			if (jsonArray.length <= 1)
				return jsonArray;
			var jsonArray0 = jsonArray[0];
			var pivot = jsonArray.splice(0, 1)[0].key;
			var left = [];
			var right = [];
			// 遍历
			for (var i = 0; i < jsonArray.length; i++) {
				if (jsonArray[i].key < pivot) {
					left.push(jsonArray[i]);
				} else {
					right.push(jsonArray[i]);
				}
			}
			return Smart.quickSort(left).concat(jsonArray0,
					Smart.quickSort(right));
		},

		/**
		 * 对一个单纯的数组进行排序
		 * 
		 * @param {Array}
		 *            array
		 * 
		 */
		quickSortArray : function(array) {
			if (array <= 1)
				return array;
			var pivot = array.splice(0, 1)[0];
			var left = [];
			var right = [];
			for (var i = 0; i < array.length; i++) {
				if (array[i] < pivot) {
					left.push(array[i]);
				} else {
					right.push(array[i]);
				}
			}
			return Smart.quickSortArray(left).concat([ pivot ],
					Smart.quickSortArray(right));

		}

	});

	// -------------------------chart的方法,具体调用的是echarts
	Smart.extend({
		/**
		 * 折线图的实现 折线图对象 myChart 放置表格div的id divID 折线图的左侧大标题 title1 折线图的左侧小标题
		 * title2 y轴单位 titleY {value} 次/分 折线图的标题(具体是那个硬件的) name x轴的数组 xArray
		 * y轴的数组 yArray 类型 type
		 */
		lineChart : function(myChart, divID, title1, title2, titleY, name,
				xArray, yArray) {
			// 路径配置
			require.config({
				paths : {
					echarts : 'http://echarts.baidu.com/build/source'
				}
			});
			require([ 'echarts', 'echarts/chart/line', 'echarts/chart/bar' ],
					function(ec) {
						myChart = ec.init(document.getElementById(divID));
						var option = {
							title : {
								text : title1,
								subtext : title2
							},
							tooltip : {
								trigger : 'axis'
							},
							legend : {
								data : [ _chose_hardware ]
							},
							// 工具栏
							toolbox : {
								show : true,
								feature : {
									mark : {
										show : true
									},
									magicType : {
										show : true,
										type : [ 'line', 'bar' ]
									},
									restore : {
										show : true
									},
									saveAsImage : {
										show : true
									},
									dataZoom : {
										show : true,
										title : {
											// 放大
											dataZoom : '区域缩放',
											// 还原
											dataZoomReset : '区域缩放后退'
										}
									},
								}
							},
							dataZoom : {
								show : true,
								realtime : true,
								height : 35,
								start : 0,
								end : 100
							},

							xAxis : [ {
								type : 'category',
								boundaryGap : false,
								// 动态改变数组的长度
								data : xArray
							} ],
							yAxis : [ {
								type : 'value',
								axisLabel : {
									formatter : titleY
								}
							} ],
							series : [ {
								name : chose, // _chose_hardware,
								type : type,
								data : yArray
							} ]
						};
						// 为echarts对象加载数据
						myChart.setOption(option);
					});
		},

		/**
		 * 用于动态更新折线图的方法 折线图对象 chatr 折线图的标题(具体是那个硬件的) name 新的数据 data 类型 type
		 */
		update : function(myChart, name, data, type) {
			myChart.setSeries([ {
				name : name,
				type : type,
				data : data,
			} ], false);
		}

	})

	window.Smart = Smart;

});

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/faq/faq.js":
/*!***************************************!*\
  !*** ./src/blocks/modules/faq/faq.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  $('.faq-item__header').on('click', function () {
    $(this).parent().toggleClass("faq-show");
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/features/features.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/features/features.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");

$(document).ready(function () {
  function resizeScrenn() {
    if ($(window).width() < 991 && $(".slider-features").length == 0) {
      $(".features-wrap").removeClass("features-wrap").addClass("swiper-wrapper features-wrap").wrap("<div class='slider-features'></div>");
      $(".feature").addClass("swiper-slide");
      $(".slider-features").append("<div class='feature-slider__pagination'></div>");
      var sliderFeatures = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.slider-features', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30,
        pagination: {
          el: '.feature-slider__pagination'
        },
        breakpoints: {
          420: {
            slidesPerView: 2,
            spaceBetween: 15,
            slidesPerGroup: 2
          },
          576: {
            slidesPerView: 'auto',
            spaceBetween: 40,
            slidesPerGroup: 1
          },
          992: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 0
          }
        }
      });

      if ($(window).width() < 480 && $(".slider-features").length == 0) {
        $(".slider-features").addClass("swiper-container");
      }
    }
  }

  resizeScrenn();
  $(window).resize(function () {
    resizeScrenn();
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  $(".js-call-modal").click(function (e) {
    e.preventDefault();
    var needModalId = $(this).attr("data-modal-id");
    $("body").addClass("overflow-hidden");
    $(".modal").addClass("modal-is-visible");
    $('[data-id="' + needModalId + '"]').addClass("modal-is-visible");
    $(".modal__body").height($(window).height());
  });
  $(".modal__overlay, .modal__close").click(function (e) {
    $(".modal-is-visible").removeClass("modal-is-visible");
    $("body").removeClass("overflow-hidden");
  });
  $(".js-form-button").click(function () {
    var emailInputVal = $(this).parent().find(".js-form-input").val();
    localStorage.setItem('userEmail', emailInputVal);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/how-it-works/how-it-works.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/how-it-works/how-it-works.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");

$(document).ready(function () {
  var ty = $(".steps");

  function resizeScrenn2() {
    if ($(window).width() < 992 && $(".slider-steps").length == 0) {
      $(".steps").removeClass("steps").addClass("swiper-wrapper steps").wrap("<div class='slider-steps swiper-container'></div>");
      $(".step").addClass("swiper-slide");
      $(".slider-steps").append("<div class='steps-slider__pagination'></div>");
      $(".slider-steps").append("<div class='steps-slider__next slider-button-next'></div>");
      $(".slider-steps").append("<div class='steps-slider__prev slider-button-prev'></div>");
      var sliderSteps = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.slider-steps', {
        slidesPerView: 1,
        autoHeight: true,
        pagination: {
          el: '.steps-slider__pagination'
        },
        navigation: {
          nextEl: '.steps-slider__next',
          prevEl: '.steps-slider__prev'
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 32,
            autoHeight: false
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1110: {
            spaceBetween: 50
          }
        }
      });
    } else {}
  }

  resizeScrenn2();
  $(window).resize(function () {
    resizeScrenn2();
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/intro/intro.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/intro/intro.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/product/product.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/product/product.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, jQuery) {/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");

"use strict";

$(document).ready(function () {
  var gallery = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.product-gallery', {
    pagination: {
      el: '.product-gallery__pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.product-gallery__next',
      prevEl: '.product-gallery__prev'
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    }
  });
  $(".product-variations__item").on('click', function () {
    $(this).parent().find(".product-variations__active").removeClass("product-variations__active");
    $(this).toggleClass("product-variations__active");

    if (gallery.realIndex > 0) {
      gallery.slideTo(0, 400, false);
    }

    var activeAttrValue = $(this).find(".product-variations__image").attr("data-value");
    var activeAttrImg = $(this).find(".product-variations__image").attr("data-img");
    $(this).parent().prev().find(".product-variations__data-value").html(": " + activeAttrValue);
    $(".product-gallery__slide.swiper-slide-active").find("img").attr("src", activeAttrImg);
    localStorage.setItem('productAttrValue', activeAttrValue);
    localStorage.setItem('productAttrImage', activeAttrImg);
  });
  $('.quantity').each(function () {
    var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.js-quantity_up'),
        btnDown = spinner.find('.js-quantity_down'),
        min = input.attr('min'),
        max = input.attr('max');
    btnUp.click(function () {
      var oldValue = parseFloat(input.val());

      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }

      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
    btnDown.click(function () {
      var oldValue = parseFloat(input.val());

      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }

      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/reviews/reviews.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/reviews/reviews.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");

$(document).ready(function () {
  var reviewImageWrap = $(".reviews__item.review .review__image");
  var reviewsCount = $(".reviews__item.review").length;
  var reviewsOnPage = 7;
  $(".reviews__list .reviews__item.review").each(function (index) {
    var review = $(this);
    var reviewImages = review.find(".review-image");
    var reviewImagesCount = reviewImages.length;
    review.attr("data-num", index);

    if (reviewImagesCount > 1) {
      review.find(".review__image").append("<div class='review-image__count'>" + reviewImagesCount + "</div>");
    }

    if (reviewImagesCount == 0) {
      review.addClass("js-without-image");
    }

    if (index > reviewsOnPage) {
      $(this).addClass("js-hide-review");
    }
  });
  $("#review-load").click(function (e) {
    e.preventDefault();
    $(this).removeClass().addClass("button button-loading").text("Loading");
    setTimeout(function () {
      $(".js-hide-review").each(function (index) {
        if (index == 0) {
          $(this).before("<div class='clearline'></div>");
        }

        if (index < reviewsOnPage + 1) {
          $(this).removeClass("js-hide-review");
        }
      });
      $("#review-load").removeClass().addClass("button button-blue").text("Show more");
      var hideReviewsCount = $(".js-hide-review").length;

      if (hideReviewsCount == 0) {
        $("#review-load").remove();
      }
    }, 1200);
  });
  reviewImageWrap.click(function () {
    var review = $(this).parent(".review__inner");
    var reviewImages = review.find(".review-image");
    var reviewAuthor = review.find(".review__author");
    var reviewRating = review.find(".review__rating");
    var reviewText = review.find(".review__text");
    review.parent().addClass("js-opened");
    $("body").addClass("overflow-hidden");
    $("body").append("" + "<div id='modal-review' class='modal modal-is-visible modal-loading'>" + "<div class='modal__body review-modal'>" + "<div class='modal__close'></div>" + "<div class='modal__L'>" + "<div class='review-modal__gallery'>" + $(this).html() + "</div>" + "</div>" + "<div class='modal__R'>" + "<div class='review-modal__rating'>" + reviewRating.html() + "</div>" + "<div class='review-modal__author'>" + reviewAuthor.html() + "</div>" + "<div class='review-modal__text'>" + reviewText.html() + "</div>" + "</div>" + "</div>" + "<div class='modal__overlay'></div>" + "");
    $(".review-modal").height($(window).height());
    var imageMaxHeight = $(window).height() / 1.6;
    $(".review-modal img").css("maxHeight", imageMaxHeight + "px");
    $(".modal__R").css("maxHeight", $(window).height() - imageMaxHeight + "px");

    if (reviewImages.length > 1) {
      $(".review-modal__gallery").wrap("<div class='review-modal__swiper swiper-container'></div>");
      $(".review-modal__gallery").addClass("swiper-wrapper");
      $(".review-modal__gallery .review-image").wrap("<div class='review-modal__gallery-slide swiper-slide'></div>");
      $(".review-modal__swiper").append("<div class='review-gallery__next swiper-button-next'/>");
      $(".review-modal__swiper").append("<div class='review-gallery__next swiper-button-next'/>");
      $(".review-modal__swiper").append("<div class='review-gallery__prev swiper-button-prev'/>");
      $(".review-modal__swiper").append("<div class='review-gallery__pag swiper-pagination'/>");
      var reviewGallery = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.review-modal__swiper', {
        navigation: {
          nextEl: '.review-gallery__next',
          prevEl: '.review-gallery__prev'
        },
        pagination: {
          el: '.review-gallery__pag',
          clickable: true
        }
      });
    }

    setTimeout(function () {
      $(".modal").removeClass("modal-loading");
    }, 1000);
    $(".modal__overlay, .modal__close").click(function () {
      $("#modal-review").remove();
      $(".js-opened").removeClass("js-opened");
      $(".overflow-hidden").removeClass("overflow-hidden");
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_intro_intro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/intro/intro */ "./src/blocks/modules/intro/intro.js");
/* harmony import */ var _modules_intro_intro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_intro_intro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_features_features__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/features/features */ "./src/blocks/modules/features/features.js");
/* harmony import */ var _modules_product_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/product/product */ "./src/blocks/modules/product/product.js");
/* harmony import */ var _modules_how_it_works_how_it_works__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/how-it-works/how-it-works */ "./src/blocks/modules/how-it-works/how-it-works.js");
/* harmony import */ var _modules_reviews_reviews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/reviews/reviews */ "./src/blocks/modules/reviews/reviews.js");
/* harmony import */ var _modules_faq_faq__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/faq/faq */ "./src/blocks/modules/faq/faq.js");
/* harmony import */ var _modules_faq_faq__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_faq_faq__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_7__);









/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_2__);




/***/ })

/******/ });
//# sourceMappingURL=main.js.map
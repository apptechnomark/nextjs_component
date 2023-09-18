exports.id = 11;
exports.ids = [11];
exports.modules = {

/***/ 2874:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1522, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 125, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7844, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 8782, 23))

/***/ }),

/***/ 9890:
/***/ (() => {



/***/ }),

/***/ 3597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_BaseLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(8421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/react-icons/ai/index.esm.js
var index_esm = __webpack_require__(9722);
// EXTERNAL MODULE: ./node_modules/react-icons/bi/index.esm.js
var bi_index_esm = __webpack_require__(5228);
// EXTERNAL MODULE: ./node_modules/react-icons/go/index.esm.js
var go_index_esm = __webpack_require__(6725);
// EXTERNAL MODULE: ./node_modules/react-icons/rx/index.esm.js
var rx_index_esm = __webpack_require__(2175);
// EXTERNAL MODULE: ./node_modules/react-icons/bs/index.esm.js
var bs_index_esm = __webpack_require__(5484);
// EXTERNAL MODULE: ./node_modules/react-icons/tb/index.esm.js
var tb_index_esm = __webpack_require__(9130);
// EXTERNAL MODULE: ./node_modules/react-icons/gr/index.esm.js
var gr_index_esm = __webpack_require__(4696);
// EXTERNAL MODULE: ./node_modules/react-icons/io/index.esm.js
var io_index_esm = __webpack_require__(5780);
// EXTERNAL MODULE: ./node_modules/react-icons/tfi/index.esm.js
var tfi_index_esm = __webpack_require__(2537);
// EXTERNAL MODULE: ./node_modules/react-icons/im/index.esm.js
var im_index_esm = __webpack_require__(6142);
// EXTERNAL MODULE: ./node_modules/react-icons/si/index.esm.js
var si_index_esm = __webpack_require__(9266);
// EXTERNAL MODULE: ./node_modules/react-icons/md/index.esm.js
var md_index_esm = __webpack_require__(4348);
// EXTERNAL MODULE: ./node_modules/react-icons/lia/index.esm.js
var lia_index_esm = __webpack_require__(327);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9483);
;// CONCATENATED MODULE: ./src/components/Sidebar.js


















const sidebarItems = [
    {
        name: "Accordion",
        href: "/",
        icon: tfi_index_esm/* TfiLayoutAccordionMerged */.By9
    },
    {
        name: "Alert",
        href: "/Alert",
        icon: go_index_esm/* GoAlert */.QdF
    },
    {
        name: "Avatar",
        href: "/Avatar",
        icon: rx_index_esm/* RxAvatar */.Rq5
    },
    {
        name: "Badge",
        href: "/Badge",
        icon: lia_index_esm/* LiaIdBadgeSolid */.riy
    },
    {
        name: "Breadcrumb",
        href: "/Breadcrumb",
        icon: si_index_esm/* SiProgress */.l8T
    },
    {
        name: "Button",
        href: "/Button",
        icon: rx_index_esm/* RxButton */.kQB
    },
    {
        name: "Card",
        href: "/Card",
        icon: bs_index_esm/* BsCardHeading */.HL
    },
    {
        name: "Checkbox",
        href: "/Checkbox",
        icon: go_index_esm/* GoCheckbox */.rWl
    },
    {
        name: "Close Button",
        href: "/Closebutton",
        icon: index_esm/* AiOutlineCloseCircle */.SV5
    },
    {
        name: "Color Picker",
        href: "/Colorpicker",
        icon: bs_index_esm/* BsPalette */.tPK
    },
    {
        name: "Country Select Dropdown",
        href: "/CountrySelect",
        icon: bs_index_esm/* BsPalette */.tPK
    },
    {
        name: "DataTable",
        href: "/Datatable",
        icon: bs_index_esm/* BsTable */.VEC
    },
    {
        name: "Date Picker",
        href: "/Datepicker",
        icon: bs_index_esm/* BsCalendarDate */.KvO
    },
    {
        name: "File Uploader",
        href: "/Fileuploader",
        icon: bs_index_esm/* BsUpload */.eMk
    },
    {
        name: "Input Mask",
        href: "/Inputmask",
        icon: bi_index_esm/* BiMask */.OCt
    },
    {
        name: "Loader",
        href: "/Loader",
        icon: index_esm/* AiOutlineLoading3Quarters */.Z7b
    },
    {
        name: "Menu Icon",
        href: "/MenuIcon",
        icon: index_esm/* AiOutlineLoading3Quarters */.Z7b
    },
    {
        name: "Modal",
        href: "/Modal",
        icon: tb_index_esm/* TbBoxMultiple */.cYf
    },
    {
        name: "Navigation Bar",
        href: "/NavigationBar",
        icon: tb_index_esm/* TbBoxMultiple */.cYf
    },
    {
        name: "Pagination",
        href: "/Pagination",
        icon: im_index_esm/* ImPageBreak */.ns
    },
    {
        name: "Password",
        href: "/Password",
        icon: md_index_esm/* MdPassword */.EmA
    },
    {
        name: "Progress Bar",
        href: "/Progressbar",
        icon: bs_index_esm/* BsSegmentedNav */.M$7
    },
    {
        name: "Progress Bar Steps",
        href: "/Progressstep",
        icon: bs_index_esm/* BsBarChartSteps */.t1_
    },
    // {
    //   name: "Radio",
    //   href: "/Radio",
    //   icon: MdPassword,
    // },
    {
        name: "Rating",
        href: "/Rating",
        icon: md_index_esm/* MdOutlineStarRate */.pBi
    },
    {
        name: "Select Dropdown",
        href: "/Selectdropdown",
        icon: rx_index_esm/* RxDropdownMenu */.JTz
    },
    {
        name: "Speed Dial",
        href: "/Speeddial",
        icon: bi_index_esm/* BiDialpad */.GzP
    },
    {
        name: "Spinner",
        href: "/Spinner",
        icon: im_index_esm/* ImSpinner9 */.j8h
    },
    {
        name: "Switch",
        href: "/Switch",
        icon: bi_index_esm/* BiToggleLeft */.zYV
    },
    {
        name: "Tab Bar",
        href: "/Tab",
        icon: tfi_index_esm/* TfiLayoutTabWindow */.A_h
    },
    {
        name: "Table",
        href: "/Table",
        icon: bs_index_esm/* BsTable */.VEC
    },
    {
        name: "Tel",
        href: "/Tel",
        icon: bs_index_esm/* BsTelephonePlus */.UZE
    },
    {
        name: "Text area",
        href: "/Textarea",
        icon: bs_index_esm/* BsCursorText */._$$
    },
    {
        name: "Text Field",
        href: "/Textfield",
        icon: md_index_esm/* MdTextFields */.BAW
    },
    {
        name: "Time Picker",
        href: "/Timepicker",
        icon: io_index_esm/* IoMdTime */.xps
    },
    {
        name: "Toast",
        href: "/Toast",
        icon: gr_index_esm/* GrToast */.eYX
    },
    {
        name: "Tooltip",
        href: "/Tooltip",
        icon: tb_index_esm/* TbTooltip */.sZy
    },
    {
        name: "Typography",
        href: "/Typography",
        icon: go_index_esm/* GoTypography */.ikj
    }
];
const Sidebar = ()=>{
    const [isCollapsed, setCollapse] = (0,react_.useState)(false);
    const pathname = (0,navigation.usePathname)();
    const toggleSidebarcollapse = ()=>{
        setCollapse((prevState)=>!prevState);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "sidebar__wrapper",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "btn",
                onClick: toggleSidebarcollapse,
                children: isCollapsed ? /*#__PURE__*/ jsx_runtime_.jsx(md_index_esm/* MdKeyboardArrowRight */.AeI, {}) : /*#__PURE__*/ jsx_runtime_.jsx(md_index_esm/* MdKeyboardArrowLeft */.sG8, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("aside", {
                className: "sidebar",
                "data-collapse": isCollapsed,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "sidebar__top",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                width: 80,
                                height: 80,
                                className: "sidebar__logo",
                                src: "/logo.jpeg",
                                alt: "logo"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "sidebar__logo-name",
                                children: "Tms Libraries"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "sidebar__list",
                        children: sidebarItems.map(({ name, href, icon: Icon })=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "sidebar__item",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                    className: `sidebar__link ${pathname === href ? "sidebar__link--active" : ""}`,
                                    href: href,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "sidebar__icon",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Icon, {})
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "sidebar__name",
                                            children: name
                                        })
                                    ]
                                })
                            }, name);
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Sidebar = (Sidebar);

;// CONCATENATED MODULE: ./src/components/BaseLayout.js


const BaseLayout = ({ children })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "layout",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Sidebar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "layout__main-content h-full overflow-scroll",
                children: children
            })
        ]
    });
};
/* harmony default export */ const components_BaseLayout = (BaseLayout);


/***/ }),

/***/ 4232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9077);
/* harmony import */ var next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5553);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_1__);



const metadata = {
    title: "TMS Libraries",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            className: (next_font_google_target_css_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_2___default().className),
            suppressHydrationWarning: true,
            children: children
        })
    });
}


/***/ }),

/***/ 2819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3180);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5553:
/***/ (() => {



/***/ })

};
;
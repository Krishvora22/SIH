"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/patients/route";
exports.ids = ["app/api/patients/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:buffer");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fpatients%2Froute&page=%2Fapi%2Fpatients%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpatients%2Froute.ts&appDir=C%3A%5CUsers%5Ckrish%5COneDrive%5CSIH%5Cbackend%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ckrish%5COneDrive%5CSIH%5Cbackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fpatients%2Froute&page=%2Fapi%2Fpatients%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpatients%2Froute.ts&appDir=C%3A%5CUsers%5Ckrish%5COneDrive%5CSIH%5Cbackend%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ckrish%5COneDrive%5CSIH%5Cbackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_krish_OneDrive_SIH_backend_app_api_patients_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/patients/route.ts */ \"(rsc)/./app/api/patients/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/patients/route\",\n        pathname: \"/api/patients\",\n        filename: \"route\",\n        bundlePath: \"app/api/patients/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\krish\\\\OneDrive\\\\SIH\\\\backend\\\\app\\\\api\\\\patients\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_krish_OneDrive_SIH_backend_app_api_patients_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/patients/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZwYXRpZW50cyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcGF0aWVudHMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZwYXRpZW50cyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNrcmlzaCU1Q09uZURyaXZlJTVDU0lIJTVDYmFja2VuZCU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDa3Jpc2glNUNPbmVEcml2ZSU1Q1NJSCU1Q2JhY2tlbmQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ3NCO0FBQ25HO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVkaWNhbC1iYWNrZW5kLz9lNDk1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGtyaXNoXFxcXE9uZURyaXZlXFxcXFNJSFxcXFxiYWNrZW5kXFxcXGFwcFxcXFxhcGlcXFxccGF0aWVudHNcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3BhdGllbnRzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcGF0aWVudHNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3BhdGllbnRzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxca3Jpc2hcXFxcT25lRHJpdmVcXFxcU0lIXFxcXGJhY2tlbmRcXFxcYXBwXFxcXGFwaVxcXFxwYXRpZW50c1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvcGF0aWVudHMvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fpatients%2Froute&page=%2Fapi%2Fpatients%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpatients%2Froute.ts&appDir=C%3A%5CUsers%5Ckrish%5COneDrive%5CSIH%5Cbackend%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ckrish%5COneDrive%5CSIH%5Cbackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/patients/route.ts":
/*!***********************************!*\
  !*** ./app/api/patients/route.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   OPTIONS: () => (/* binding */ OPTIONS)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.ts\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.ts\");\n\n\n\nconst CORS_HEADERS = {\n    \"Access-Control-Allow-Origin\": \"*\",\n    \"Access-Control-Allow-Headers\": \"Content-Type, Authorization\",\n    \"Access-Control-Allow-Methods\": \"GET, OPTIONS\"\n};\nfunction OPTIONS() {\n    return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(null, {\n        status: 204,\n        headers: CORS_HEADERS\n    });\n}\nasync function GET(req) {\n    try {\n        // Only allow doctors to fetch all patients\n        const auth = req.headers.get(\"authorization\");\n        if (!auth) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Unauthorized\"\n        }, {\n            status: 401,\n            headers: CORS_HEADERS\n        });\n        const token = auth.split(\" \")[1];\n        const payload = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_2__.verifyJwt)(token);\n        if (payload.role !== \"DOCTOR\") {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Forbidden\"\n            }, {\n                status: 403,\n                headers: CORS_HEADERS\n            });\n        }\n        const patients = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.patient.findMany({\n            include: {\n                user: {\n                    select: {\n                        email: true\n                    }\n                }\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            patients\n        }, {\n            status: 200,\n            headers: CORS_HEADERS\n        });\n    } catch (e) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: e?.message || \"Internal server error\"\n        }, {\n            status: 500,\n            headers: CORS_HEADERS\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3BhdGllbnRzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdEO0FBQ2xCO0FBQ0M7QUFFdkMsTUFBTUcsZUFBZTtJQUNuQiwrQkFBK0I7SUFDL0IsZ0NBQWdDO0lBQ2hDLGdDQUFnQztBQUNsQztBQUVPLFNBQVNDO0lBQ2QsT0FBTyxJQUFJSixxREFBWUEsQ0FBQyxNQUFNO1FBQUVLLFFBQVE7UUFBS0MsU0FBU0g7SUFBYTtBQUNyRTtBQUVPLGVBQWVJLElBQUlDLEdBQWdCO0lBQ3hDLElBQUk7UUFDRiwyQ0FBMkM7UUFDM0MsTUFBTUMsT0FBT0QsSUFBSUYsT0FBTyxDQUFDSSxHQUFHLENBQUM7UUFDN0IsSUFBSSxDQUFDRCxNQUFNLE9BQU9ULHFEQUFZQSxDQUFDVyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFlLEdBQUc7WUFBRVAsUUFBUTtZQUFLQyxTQUFTSDtRQUFhO1FBQ3BHLE1BQU1VLFFBQVFKLEtBQUtLLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNoQyxNQUFNQyxVQUFVLE1BQU1iLG9EQUFTQSxDQUFDVztRQUNoQyxJQUFJRSxRQUFRQyxJQUFJLEtBQUssVUFBVTtZQUM3QixPQUFPaEIscURBQVlBLENBQUNXLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUFZLEdBQUc7Z0JBQUVQLFFBQVE7Z0JBQUtDLFNBQVNIO1lBQWE7UUFDeEY7UUFDQSxNQUFNYyxXQUFXLE1BQU1oQiwrQ0FBTUEsQ0FBQ2lCLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDO1lBQzdDQyxTQUFTO2dCQUFFQyxNQUFNO29CQUFFQyxRQUFRO3dCQUFFQyxPQUFPO29CQUFLO2dCQUFFO1lBQUU7UUFDL0M7UUFDQSxPQUFPdkIscURBQVlBLENBQUNXLElBQUksQ0FBQztZQUFFTTtRQUFTLEdBQUc7WUFBRVosUUFBUTtZQUFLQyxTQUFTSDtRQUFhO0lBQzlFLEVBQUUsT0FBT3FCLEdBQVE7UUFDZixPQUFPeEIscURBQVlBLENBQUNXLElBQUksQ0FBQztZQUFFQyxPQUFPWSxHQUFHQyxXQUFXO1FBQXdCLEdBQUc7WUFBRXBCLFFBQVE7WUFBS0MsU0FBU0g7UUFBYTtJQUNsSDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVkaWNhbC1iYWNrZW5kLy4vYXBwL2FwaS9wYXRpZW50cy9yb3V0ZS50cz83NjYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSc7XHJcbmltcG9ydCB7IHZlcmlmeUp3dCB9IGZyb20gJ0AvbGliL2F1dGgnO1xyXG5cclxuY29uc3QgQ09SU19IRUFERVJTID0ge1xyXG4gICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiAnKicsXHJcbiAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMnOiAnQ29udGVudC1UeXBlLCBBdXRob3JpemF0aW9uJyxcclxuICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcyc6ICdHRVQsIE9QVElPTlMnXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gT1BUSU9OUygpIHtcclxuICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShudWxsLCB7IHN0YXR1czogMjA0LCBoZWFkZXJzOiBDT1JTX0hFQURFUlMgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxOiBOZXh0UmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBPbmx5IGFsbG93IGRvY3RvcnMgdG8gZmV0Y2ggYWxsIHBhdGllbnRzXHJcbiAgICBjb25zdCBhdXRoID0gcmVxLmhlYWRlcnMuZ2V0KCdhdXRob3JpemF0aW9uJyk7XHJcbiAgICBpZiAoIWF1dGgpIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnVW5hdXRob3JpemVkJyB9LCB7IHN0YXR1czogNDAxLCBoZWFkZXJzOiBDT1JTX0hFQURFUlMgfSk7XHJcbiAgICBjb25zdCB0b2tlbiA9IGF1dGguc3BsaXQoJyAnKVsxXTtcclxuICAgIGNvbnN0IHBheWxvYWQgPSBhd2FpdCB2ZXJpZnlKd3QodG9rZW4pO1xyXG4gICAgaWYgKHBheWxvYWQucm9sZSAhPT0gJ0RPQ1RPUicpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdGb3JiaWRkZW4nIH0sIHsgc3RhdHVzOiA0MDMsIGhlYWRlcnM6IENPUlNfSEVBREVSUyB9KTtcclxuICAgIH1cclxuICAgIGNvbnN0IHBhdGllbnRzID0gYXdhaXQgcHJpc21hLnBhdGllbnQuZmluZE1hbnkoe1xyXG4gICAgICBpbmNsdWRlOiB7IHVzZXI6IHsgc2VsZWN0OiB7IGVtYWlsOiB0cnVlIH0gfSB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHBhdGllbnRzIH0sIHsgc3RhdHVzOiAyMDAsIGhlYWRlcnM6IENPUlNfSEVBREVSUyB9KTtcclxuICB9IGNhdGNoIChlOiBhbnkpIHtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBlPy5tZXNzYWdlIHx8ICdJbnRlcm5hbCBzZXJ2ZXIgZXJyb3InIH0sIHsgc3RhdHVzOiA1MDAsIGhlYWRlcnM6IENPUlNfSEVBREVSUyB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsInByaXNtYSIsInZlcmlmeUp3dCIsIkNPUlNfSEVBREVSUyIsIk9QVElPTlMiLCJzdGF0dXMiLCJoZWFkZXJzIiwiR0VUIiwicmVxIiwiYXV0aCIsImdldCIsImpzb24iLCJlcnJvciIsInRva2VuIiwic3BsaXQiLCJwYXlsb2FkIiwicm9sZSIsInBhdGllbnRzIiwicGF0aWVudCIsImZpbmRNYW55IiwiaW5jbHVkZSIsInVzZXIiLCJzZWxlY3QiLCJlbWFpbCIsImUiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/patients/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   comparePassword: () => (/* binding */ comparePassword),\n/* harmony export */   hashPassword: () => (/* binding */ hashPassword),\n/* harmony export */   signJwt: () => (/* binding */ signJwt),\n/* harmony export */   verifyJwt: () => (/* binding */ verifyJwt)\n/* harmony export */ });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/jose/dist/node/esm/jwt/sign.js\");\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/jose/dist/node/esm/jwt/verify.js\");\n\n\nconst encoder = new TextEncoder();\nasync function hashPassword(password) {\n    const salt = await bcryptjs__WEBPACK_IMPORTED_MODULE_0___default().genSalt(10);\n    return bcryptjs__WEBPACK_IMPORTED_MODULE_0___default().hash(password, salt);\n}\nasync function comparePassword(password, hash) {\n    return bcryptjs__WEBPACK_IMPORTED_MODULE_0___default().compare(password, hash);\n}\nasync function signJwt(payload) {\n    const secret = process.env.JWT_SECRET;\n    if (!secret) throw new Error(\"JWT_SECRET not set\");\n    return new jose__WEBPACK_IMPORTED_MODULE_1__.SignJWT(payload).setProtectedHeader({\n        alg: \"HS256\"\n    }).setIssuedAt().setExpirationTime(\"7d\").sign(encoder.encode(secret));\n}\nasync function verifyJwt(token) {\n    const secret = process.env.JWT_SECRET;\n    if (!secret) throw new Error(\"JWT_SECRET not set\");\n    const { payload } = await (0,jose__WEBPACK_IMPORTED_MODULE_2__.jwtVerify)(token, encoder.encode(secret));\n    return payload;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4QjtBQUNZO0FBRTFDLE1BQU1HLFVBQVUsSUFBSUM7QUFFYixlQUFlQyxhQUFhQyxRQUFnQjtJQUNqRCxNQUFNQyxPQUFPLE1BQU1QLHVEQUFjLENBQUM7SUFDbEMsT0FBT0Esb0RBQVcsQ0FBQ00sVUFBVUM7QUFDL0I7QUFFTyxlQUFlRyxnQkFBZ0JKLFFBQWdCLEVBQUVHLElBQVk7SUFDbEUsT0FBT1QsdURBQWMsQ0FBQ00sVUFBVUc7QUFDbEM7QUFPTyxlQUFlRyxRQUFRQyxPQUFtQjtJQUMvQyxNQUFNQyxTQUFTQyxRQUFRQyxHQUFHLENBQUNDLFVBQVU7SUFDckMsSUFBSSxDQUFDSCxRQUFRLE1BQU0sSUFBSUksTUFBTTtJQUM3QixPQUFPLElBQUlqQix5Q0FBT0EsQ0FBQ1ksU0FDaEJNLGtCQUFrQixDQUFDO1FBQUVDLEtBQUs7SUFBUSxHQUNsQ0MsV0FBVyxHQUNYQyxpQkFBaUIsQ0FBQyxNQUNsQkMsSUFBSSxDQUFDcEIsUUFBUXFCLE1BQU0sQ0FBQ1Y7QUFDekI7QUFFTyxlQUFlVyxVQUFVQyxLQUFhO0lBQzNDLE1BQU1aLFNBQVNDLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtJQUNyQyxJQUFJLENBQUNILFFBQVEsTUFBTSxJQUFJSSxNQUFNO0lBQzdCLE1BQU0sRUFBRUwsT0FBTyxFQUFFLEdBQUcsTUFBTVgsK0NBQVNBLENBQUN3QixPQUFPdkIsUUFBUXFCLE1BQU0sQ0FBQ1Y7SUFDMUQsT0FBT0Q7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL21lZGljYWwtYmFja2VuZC8uL2xpYi9hdXRoLnRzP2JmN2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcyc7XG5pbXBvcnQgeyBTaWduSldULCBqd3RWZXJpZnkgfSBmcm9tICdqb3NlJztcblxuY29uc3QgZW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFzaFBhc3N3b3JkKHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgY29uc3Qgc2FsdCA9IGF3YWl0IGJjcnlwdC5nZW5TYWx0KDEwKTtcbiAgcmV0dXJuIGJjcnlwdC5oYXNoKHBhc3N3b3JkLCBzYWx0KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbXBhcmVQYXNzd29yZChwYXNzd29yZDogc3RyaW5nLCBoYXNoOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCBoYXNoKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBKd3RQYXlsb2FkIHtcbiAgdXNlcklkOiBzdHJpbmc7XG4gIHJvbGU6ICdQQVRJRU5UJyB8ICdET0NUT1InIHwgJ1BST1ZJREVSJztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ25Kd3QocGF5bG9hZDogSnd0UGF5bG9hZCkge1xuICBjb25zdCBzZWNyZXQgPSBwcm9jZXNzLmVudi5KV1RfU0VDUkVUO1xuICBpZiAoIXNlY3JldCkgdGhyb3cgbmV3IEVycm9yKCdKV1RfU0VDUkVUIG5vdCBzZXQnKTtcbiAgcmV0dXJuIG5ldyBTaWduSldUKHBheWxvYWQgYXMgYW55KVxuICAgIC5zZXRQcm90ZWN0ZWRIZWFkZXIoeyBhbGc6ICdIUzI1NicgfSlcbiAgICAuc2V0SXNzdWVkQXQoKVxuICAgIC5zZXRFeHBpcmF0aW9uVGltZSgnN2QnKVxuICAgIC5zaWduKGVuY29kZXIuZW5jb2RlKHNlY3JldCkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5Snd0KHRva2VuOiBzdHJpbmcpOiBQcm9taXNlPEp3dFBheWxvYWQ+IHtcbiAgY29uc3Qgc2VjcmV0ID0gcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVDtcbiAgaWYgKCFzZWNyZXQpIHRocm93IG5ldyBFcnJvcignSldUX1NFQ1JFVCBub3Qgc2V0Jyk7XG4gIGNvbnN0IHsgcGF5bG9hZCB9ID0gYXdhaXQgand0VmVyaWZ5KHRva2VuLCBlbmNvZGVyLmVuY29kZShzZWNyZXQpKTtcbiAgcmV0dXJuIHBheWxvYWQgYXMgdW5rbm93biBhcyBKd3RQYXlsb2FkO1xufVxuIl0sIm5hbWVzIjpbImJjcnlwdCIsIlNpZ25KV1QiLCJqd3RWZXJpZnkiLCJlbmNvZGVyIiwiVGV4dEVuY29kZXIiLCJoYXNoUGFzc3dvcmQiLCJwYXNzd29yZCIsInNhbHQiLCJnZW5TYWx0IiwiaGFzaCIsImNvbXBhcmVQYXNzd29yZCIsImNvbXBhcmUiLCJzaWduSnd0IiwicGF5bG9hZCIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwiRXJyb3IiLCJzZXRQcm90ZWN0ZWRIZWFkZXIiLCJhbGciLCJzZXRJc3N1ZWRBdCIsInNldEV4cGlyYXRpb25UaW1lIiwic2lnbiIsImVuY29kZSIsInZlcmlmeUp3dCIsInRva2VuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxNQUFNQyxrQkFBa0JDO0FBRWpCLE1BQU1DLFNBQVNGLGdCQUFnQkUsTUFBTSxJQUFJLElBQUlILHdEQUFZQSxHQUFHO0FBRW5FLElBQUlJLElBQXlCLEVBQWNILGdCQUFnQkUsTUFBTSxHQUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL21lZGljYWwtYmFja2VuZC8uL2xpYi9wcmlzbWEudHM/OTgyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbFRoaXMgYXMgdW5rbm93biBhcyB7IHByaXNtYTogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkIH07XG5cbmV4cG9ydCBjb25zdCBwcmlzbWEgPSBnbG9iYWxGb3JQcmlzbWEucHJpc21hID8/IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPSBwcmlzbWE7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiZ2xvYmFsRm9yUHJpc21hIiwiZ2xvYmFsVGhpcyIsInByaXNtYSIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/bcryptjs","vendor-chunks/jose"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fpatients%2Froute&page=%2Fapi%2Fpatients%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpatients%2Froute.ts&appDir=C%3A%5CUsers%5Ckrish%5COneDrive%5CSIH%5Cbackend%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ckrish%5COneDrive%5CSIH%5Cbackend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();
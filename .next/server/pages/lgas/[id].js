(function() {
var exports = {};
exports.id = 595;
exports.ids = [595];
exports.modules = {

/***/ 7182:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ LGA; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: external "next/router"
var router_namespaceObject = require("next/router");;
;// CONCATENATED MODULE: external "react-chartjs-2"
var external_react_chartjs_2_namespaceObject = require("react-chartjs-2");;
;// CONCATENATED MODULE: ./components/Utlis.js
const CHART_COLORS = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)'
};
;// CONCATENATED MODULE: external "chartjs-plugin-datalabels"
var external_chartjs_plugin_datalabels_namespaceObject = require("chartjs-plugin-datalabels");;
var external_chartjs_plugin_datalabels_default = /*#__PURE__*/__webpack_require__.n(external_chartjs_plugin_datalabels_namespaceObject);
;// CONCATENATED MODULE: ./components/Population.js






function Population() {
  external_react_chartjs_2_namespaceObject.Chart.register((external_chartjs_plugin_datalabels_default()));
  const population = [30313, 32736, 35226, 36486, 37439, 38124];
  const households = [11755, 13041, 14177, 14826, 15372, 15810];
  const labels = ['2016', '2021', '2026', '2031', '2036', '2041'];
  const chartData = {
    labels: labels,
    datasets: [{
      label: 'Total Households',
      data: households,
      backgroundColor: CHART_COLORS.blue
    }, {
      label: 'Total Population',
      data: population,
      backgroundColor: CHART_COLORS.purple
    }]
  };
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
      children: "Population Projections"
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_chartjs_2_namespaceObject.Bar, {
      data: chartData,
      options: {
        plugins: {
          legend: {
            display: true
          },
          title: {
            display: true,
            padding: 10,
            text: 'Total population projections — Armidale Regional LGA'
          },
          datalabels: {
            display: true,
            color: 'black',
            anchor: 'end',
            align: 'top',
            clamp: true
          }
        }
      }
    })]
  });
}

/* harmony default export */ var components_Population = (Population);
;// CONCATENATED MODULE: external "next/dynamic"
var dynamic_namespaceObject = require("next/dynamic");;
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_namespaceObject);
;// CONCATENATED MODULE: external "path"
var external_path_namespaceObject = require("path");;
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: external "fs"
var external_fs_namespaceObject = require("fs");;
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: ./pages/lgas/[id].js








function LGA({
  lga,
  geo
}) {
  const router = (0,router_namespaceObject.useRouter)();
  const {
    id
  } = router.query;
  const LGAmap = dynamic_default()(() => __webpack_require__.e(/* import() */ 529).then(__webpack_require__.bind(__webpack_require__, 5529)), {
    loading: () => /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "A map is loading"
    }),
    ssr: false,
    loadableGenerated: {
      webpack: () => [/*require.resolve*/(5529)],
      modules: ["lgas\\[id].js -> " + '../../components/LGAmap']
    }
  } // This line is important. It's what prevents server-side render
  );
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: "Armidale Regional council data"
    }), /*#__PURE__*/jsx_runtime_.jsx(LGAmap, {
      geo: geo
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Population, {})]
  });
}
async function getStaticProps({
  params
}) {
  // const req = await fetch(`data/${params.id}.json`);
  // const data = await req.json();
  const dataFilePath = external_path_default().join(process.cwd(), "public/data", "armidale.json");
  const lgaFp = external_path_default().join(process.cwd(), "public/data", "Armidal_Regional_LGAgeo.json"); //console.log(dataFilePath);     // will be YourProject/jsonFiles/data.json

  const fileContents = external_fs_default().readFileSync(dataFilePath, "utf8");
  const lgaFile = external_fs_default().readFileSync(lgaFp, "utf8");
  const data = JSON.parse(fileContents);
  const lgaData = JSON.parse(lgaFile);
  return {
    props: {
      lga: data,
      geo: lgaData
    }
  };
}
async function getStaticPaths() {
  // const req = await fetch(`http://localhost:3000/lgas.json`);
  // const req = await fetch(`data/lgas.json`);
  // const data = await req.json();
  const dataFilePath = external_path_default().join(process.cwd(), "public/data", "lgas.json"); //console.log(dataFilePath);     // will be YourProject/jsonFiles/data.json

  const fileContents = external_fs_default().readFileSync(dataFilePath, "utf8");
  const data = JSON.parse(fileContents);
  const paths = data.map(lga => {
    return {
      params: {
        id: lga
      }
    };
  });
  return {
    paths,
    fallback: false
  };
}

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 6656:
/***/ (function(module) {

"use strict";
module.exports = require("react-leaflet");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(7182));
module.exports = __webpack_exports__;

})();
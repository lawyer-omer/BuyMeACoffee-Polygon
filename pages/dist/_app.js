"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
require("../styles/Globals.css");
var next_seo_1 = require("next-seo");
function MyApp(_a) {
    var Component = _a.Component, pageProps = _a.pageProps;
    return (React.createElement(React.Fragment, null,
        React.createElement(next_seo_1.NextSeo, { title: "Buy me a coffee", titleTemplate: "Buy me a coffee", defaultTitle: "Buy me a coffee", description: "Omer's buy me a coffee on Polygon", canonical: "https://twitter.com/nftlernet", openGraph: {
                url: "https://twitter.com/nftlernet",
                title: "Buy me a coffee",
                description: "Omer's buy me a coffee on Polygon",
                images: [
                    {
                        url: "/og-image.png",
                        width: 800,
                        height: 420,
                        alt: "Buy me a coffee"
                    },
                ]
            }, twitter: {
                handle: "@nftlernet",
                site: "@nftlernet",
                cardType: "summary_large_image"
            } }),
        React.createElement(Component, __assign({}, pageProps))));
}
exports["default"] = MyApp;

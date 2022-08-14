"use strict";
exports.__esModule = true;
var head_1 = require("next/head");
var image_1 = require("next/image");
var link_1 = require("next/link");
var react_hot_toast_1 = require("react-hot-toast");
var components_1 = require("../components");
var Home = function () {
    return (React.createElement("div", { className: "relative flex min-h-screen w-screen flex-col-reverse items-center bg-darkBlue p-10 sm:flex-row sm:justify-evenly sm:p-20" },
        React.createElement(head_1["default"], null,
            React.createElement("link", { rel: "icon", href: "/icon.svg" })),
        React.createElement(react_hot_toast_1.Toaster, null),
        React.createElement("div", { className: "absolute top-5 flex items-center justify-center" },
            React.createElement(link_1["default"], { href: "/sponsors" },
                React.createElement("a", { className: "text-2xl text-accent hover:underline" }, "Past coffee senders"))),
        React.createElement("div", { className: "absolute bottom-0 mt-10 h-28 w-screen rounded-b-lg bg-darkerBlue sm:h-40" }),
        React.createElement("div", { className: "mt-20 mb-12 sm:-mb-24 sm:mt-0" },
            React.createElement(image_1["default"], { src: "/Illustration.svg", alt: "logo", width: 500, height: 430, objectFit: "contain" })),
        React.createElement("div", { className: "flex w-screen flex-col items-center sm:h-auto sm:w-auto sm:items-start" },
            React.createElement("div", { className: "relative h-16 w-60" },
                React.createElement(image_1["default"], { src: "/logo.svg", alt: "logo", layout: "fill", objectFit: "contain" })),
            React.createElement(components_1.CheckoutCard, null))));
};
exports["default"] = Home;

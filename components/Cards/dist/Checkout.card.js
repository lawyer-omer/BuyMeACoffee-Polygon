"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("@headlessui/react");
var react_2 = require("react");
var truncateAddress_1 = require("../../utils/truncateAddress");
var BuyMeACoffee_json_1 = require("../../utils/BuyMeACoffee.json");
var ethers_1 = require("ethers");
var react_hot_toast_1 = require("react-hot-toast");
var CheckoutCard = function () {
    var _a, _b, _c;
    var _d = react_2.useState(""), currentAccount = _d[0], setCurrentAccount = _d[1];
    var _e = react_2.useState(1), amount = _e[0], setAmount = _e[1];
    var _f = react_2.useState(false), showModal = _f[0], setShowModal = _f[1];
    var _g = react_2.useState(""), name = _g[0], setName = _g[1];
    var _h = react_2.useState(""), message = _h[0], setMessage = _h[1];
    var contractAddress = "0x72E5455B60E365670c0d429Df978B753346522d9";
    var contractABI = BuyMeACoffee_json_1["default"].abi;
    var _j = react_2.useState(false), isPolygon = _j[0], setIsPolygon = _j[1];
    var _k = react_2.useState(false), loading = _k[0], setLoading = _k[1];
    var onNameChange = function (event) {
        setName(event.target.value);
    };
    var onMessageChange = function (event) {
        setMessage(event.target.value);
    };
    var closeModal = function () {
        setShowModal(false);
    };
    var openModal = function () {
        setShowModal(true);
    };
    var buyCoffee = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var ethereum, provider, signer, buyMeACoffee, coffeeTxn, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    setLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, 6, 7]);
                    ethereum = window.ethereum;
                    if (!ethereum) return [3 /*break*/, 4];
                    provider = new ethers_1.ethers.providers.Web3Provider(ethereum, "any");
                    signer = provider.getSigner();
                    buyMeACoffee = new ethers_1.ethers.Contract(contractAddress, contractABI, signer);
                    return [4 /*yield*/, buyMeACoffee.buyCoffee(name ? name : "anon", message ? message : "Enjoy your coffee!", { value: ethers_1.ethers.utils.parseEther("" + 1 * amount) })];
                case 2:
                    coffeeTxn = _a.sent();
                    return [4 /*yield*/, coffeeTxn.wait()];
                case 3:
                    _a.sent();
                    setName("");
                    setMessage("");
                    closeModal();
                    react_hot_toast_1["default"].success("Coffee purchased successfully! Thank you :)");
                    _a.label = 4;
                case 4: return [3 /*break*/, 7];
                case 5:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 7];
                case 6:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    }); };
    var defaultAmounts = [1, 2, 5];
    var connectWallet = function () { return __awaiter(void 0, void 0, void 0, function () {
        var ethereum, accounts, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    ethereum = window.ethereum;
                    return [4 /*yield*/, ethereum.request({
                            method: "eth_requestAccounts"
                        })];
                case 1:
                    accounts = _a.sent();
                    setCurrentAccount(accounts[0]);
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    if (typeof window !== "undefined") {
        react_2.useEffect(function () {
            var _a;
            if (((_a = window === null || window === void 0 ? void 0 : window.ethereum) === null || _a === void 0 ? void 0 : _a.networkVersion) === "137") {
                setIsPolygon(true);
            }
        }, [(_a = window === null || window === void 0 ? void 0 : window.ethereum) === null || _a === void 0 ? void 0 : _a.networkVersion]);
    }
    return (React.createElement("div", { className: "z-50 mt-10 flex w-[90vw] flex-col items-center space-y-5 rounded-md bg-darkerBlue p-10 px-5 shadow-xl sm:w-[436px] sm:px-10" },
        React.createElement(react_1.Transition, { appear: true, show: showModal, as: react_2.Fragment },
            React.createElement(react_1.Dialog, { as: "div", className: "fixed inset-0 z-50", onClose: closeModal },
                React.createElement("div", { className: "min-h-screen px-4 text-center backdrop-blur-sm" },
                    React.createElement(react_1.Transition.Child, { as: react_2.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0" },
                        React.createElement(react_1.Dialog.Overlay, { className: "fixed inset-0" })),
                    React.createElement("span", { className: "inline-block h-screen align-middle", "aria-hidden": "true" }, "\u200B"),
                    React.createElement(react_1.Transition.Child, { as: react_2.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0 scale-95", enterTo: "opacity-100 scale-100", leaveFrom: "opacity-0 scale-95", leaveTo: "opacity-100 scale-100" },
                        React.createElement("div", { className: "my-8 inline-block w-full max-w-md transform overflow-hidden rounded-xl bg-darkerBlue p-6 text-left align-middle shadow-xl transition-all" },
                            React.createElement(react_1.Dialog.Title, { as: "h3", className: "my-2 text-lg font-medium leading-6 text-white" }, "Buy me a coffee"),
                            React.createElement("form", { onSubmit: buyCoffee },
                                React.createElement("input", { className: "mt-4 w-full rounded-xl bg-white/10 bg-opacity-10 p-4 text-white outline-none backdrop-blur-2xl backdrop-filter focus-visible:ring-blue-500", placeholder: "Name", onChange: onNameChange }),
                                React.createElement("input", { className: "mt-4 w-full rounded-xl bg-white/10 bg-opacity-10 p-4 text-white outline-none backdrop-blur-2xl backdrop-filter focus-visible:ring-blue-500", placeholder: "Message", onChange: onMessageChange }),
                                React.createElement("div", { className: "mt-4" },
                                    React.createElement("button", { type: "submit", className: "inline-flex justify-center rounded-xl border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2" }, loading ? (React.createElement("div", { style: { borderTopColor: "transparent" }, className: "inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-darkerBlue group-hover:border-accent", role: "status" })) : (React.createElement("span", null, "Buy \u2615"))))))),
                    " "))),
        React.createElement("h2", { className: "font-ClashDisplay text-2xl font-semibold text-accent" }, "Love what I do? Feel free to support me with a donation!"),
        React.createElement("div", { className: "group flex w-full items-center rounded-lg bg-[#E9F9FA]/30 text-white focus:outline-none" },
            React.createElement("p", { className: "rounded-l-lg bg-[#E7EAEA]/80 px-4 py-3 text-lg uppercase text-black opacity-80 transition duration-200 group-hover:opacity-100" }, "\u2615"),
            React.createElement("input", { type: "number", value: amount ? amount : "", className: "w-full rounded-lg bg-transparent px-4 py-3 text-white opacity-80 transition duration-200 focus:outline-none group-hover:opacity-100", placeholder: "Enter Amount", onChange: function (e) { return setAmount(parseInt(e.target.value)); } })),
        React.createElement("div", { className: "flex w-full items-center space-x-2" }, defaultAmounts.map(function (buttonAmount) { return (React.createElement("button", { className: (amount === buttonAmount ? "bg-accent" : "bg-[#E7EAEA]/80") + "  rounded-full px-6 py-3 opacity-90 transition duration-200 hover:opacity-100", onClick: function () { return setAmount(buttonAmount); }, key: buttonAmount },
            "\u2615 ",
            buttonAmount)); })),
        React.createElement("p", { className: "text-[#E3E3E3]" }, "1 coffee = 1 matic"),
        React.createElement("button", { onClick: function () {
                currentAccount
                    ? navigator.clipboard.writeText(currentAccount)
                    : connectWallet();
            }, className: "group mt-4 flex w-full items-center justify-center rounded-lg border-2 border-accent bg-accent px-6 py-3 text-xl font-semibold transition duration-200 hover:border-accent hover:bg-transparent hover:text-accent" }, currentAccount ? (React.createElement("span", null, isPolygon
            ? truncateAddress_1.truncateAddress(currentAccount)
            : "Please switch network to polygon")) : (React.createElement("span", null, "Connect Wallet"))),
        React.createElement("button", { disabled: !currentAccount || ((_b = window === null || window === void 0 ? void 0 : window.ethereum) === null || _b === void 0 ? void 0 : _b.networkVersion) !== "137", onClick: openModal, role: "link", className: "group mt-4 flex w-full items-center justify-center rounded-lg border-2 border-accent bg-transparent px-6 py-3 text-xl font-semibold text-accent transition duration-200 hover:border-accent hover:bg-accent hover:text-black\n        " + (!currentAccount ||
                (((_c = window === null || window === void 0 ? void 0 : window.ethereum) === null || _c === void 0 ? void 0 : _c.networkVersion) !== "137" &&
                    "cursor-not-allowed opacity-50")) }, loading ? (React.createElement("div", { style: { borderTopColor: "transparent" }, className: "inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-darkerBlue group-hover:border-accent", role: "status" })) : (React.createElement("span", null, "Buy me a coffee")))));
};
exports["default"] = CheckoutCard;

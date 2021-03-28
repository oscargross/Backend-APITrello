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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCheckList = exports.readCheckList = exports.updateCheckList = exports.createCheckList = void 0;
var boom_1 = __importDefault(require("@hapi/boom"));
var checkList = __importStar(require("../services/checkListService"));
var checksUtils_1 = require("../utils/checksUtils");
var cardUtils_1 = require("../utils/cardUtils");
var createCheckList = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var nameCard, info;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                nameCard = req.query.nameCard;
                info = req.body;
                console.log(nameCard);
                return [4 /*yield*/, cardUtils_1.findField({ nameField: nameCard, field: 'cards' })
                        .then(function (card) {
                        var idCard = card.id;
                        // console.log(card);
                        var fields = __assign(__assign({}, info), { idCard: idCard });
                        // console.log(fields);
                        return checkList.createCheckList(fields)
                            .then(function (result) { return res.status(201).json(result); });
                    }).catch(function (error) {
                        return error.statusCode ? res.status(error.statusCode).json(error) :
                            res.status(400).json(boom_1.default.notFound('Parameter not found').output.payload);
                    })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.createCheckList = createCheckList;
var updateCheckList = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var nameCheckList, nameCard, info;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                nameCheckList = (_a = req.query, _a.nameCheckList), nameCard = _a.nameCard;
                info = req.body;
                return [4 /*yield*/, cardUtils_1.findField({ nameField: nameCard, field: 'cards' })
                        .then(function (card) { return __awaiter(void 0, void 0, void 0, function () {
                        var idCard;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    idCard = card.id;
                                    return [4 /*yield*/, checksUtils_1.findFieldCheck({
                                            nameField: nameCheckList,
                                            fieldFather: 'cards',
                                            idfieldFather: idCard,
                                            fieldSearched: 'checklists'
                                        })
                                            .then(function (checkListFound) {
                                            var checkListId = checkListFound.id;
                                            return checkList.updateCheckList(checkListId, info)
                                                .then(function (result) { return res.status(200).json(result); });
                                        })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }).catch(function (error) {
                        return error.statusCode ? res.status(error.statusCode).json(error) :
                            res.status(400).json(boom_1.default.notFound('Parameter not found').output.payload);
                    })];
            case 1:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.updateCheckList = updateCheckList;
var readCheckList = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var nameCard, nameCheckList;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                nameCard = (_a = req.query, _a.nameCard), nameCheckList = _a.nameCheckList;
                return [4 /*yield*/, cardUtils_1.findField({ nameField: nameCard, field: 'cards' })
                        .then(function (card) { return __awaiter(void 0, void 0, void 0, function () {
                        var idCard;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    idCard = card.id;
                                    return [4 /*yield*/, checksUtils_1.findFieldCheck({
                                            nameField: nameCheckList,
                                            fieldFather: 'cards',
                                            idfieldFather: idCard,
                                            fieldSearched: 'checklists'
                                        }).then(function (result) { return res.status(200).json(result); })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })
                        .catch(function (error) {
                        return error.statusCode ? res.status(error.statusCode).json(error) :
                            res.status(400).json(boom_1.default.notFound('Parameter not found').output.payload);
                    })];
            case 1:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.readCheckList = readCheckList;
var deleteCheckList = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var nameCheckList, nameCard;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                nameCheckList = (_a = req.query, _a.nameCheckList), nameCard = _a.nameCard;
                return [4 /*yield*/, cardUtils_1.findField({ nameField: nameCard, field: 'cards' })
                        .then(function (card) { return __awaiter(void 0, void 0, void 0, function () {
                        var idCard;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    idCard = card.id;
                                    return [4 /*yield*/, checksUtils_1.findFieldCheck({
                                            nameField: nameCheckList,
                                            fieldFather: 'cards',
                                            idfieldFather: idCard,
                                            fieldSearched: 'checklists'
                                        })
                                            .then(function (checkListFound) {
                                            var checkListId = checkListFound.id;
                                            return checkList.deleteCheckList(checkListId)
                                                .then(function (result) { return res.status(200).json(result); });
                                        })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }).catch(function (error) {
                        return error.statusCode ? res.status(error.statusCode).json(error) :
                            res.status(400).json(boom_1.default.notFound('Parameter not found').output.payload);
                    })];
            case 1:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.deleteCheckList = deleteCheckList;

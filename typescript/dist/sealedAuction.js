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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SealedAuction = void 0;
var SealedAuction = /** @class */ (function () {
    function SealedAuction(io) {
        this.users = [];
        this.bids = [];
        this.io = io;
    }
    SealedAuction.prototype.start_auction = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, highBid, winner, currentUser, bid, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.io.out("Enter the name of the first user, or blank to end")];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, this.io.read()];
                    case 2:
                        user = _b.sent();
                        this.users.push(user);
                        _b.label = 3;
                    case 3:
                        if (!true) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.io.out(user)];
                    case 4:
                        _b.sent();
                        return [4 /*yield*/, this.io.out("Enter the name of the next user, or blank to end")];
                    case 5:
                        _b.sent();
                        return [4 /*yield*/, this.io.read()];
                    case 6:
                        user = _b.sent();
                        if (!user || user === "") {
                            return [3 /*break*/, 7];
                        }
                        this.users.push(user);
                        return [3 /*break*/, 3];
                    case 7:
                        highBid = 0;
                        winner = 'Nobody';
                        _b.label = 8;
                    case 8:
                        if (!true) return [3 /*break*/, 11];
                        if (this.users.length === 0) {
                            return [3 /*break*/, 11];
                        }
                        currentUser = this.users[0];
                        return [4 /*yield*/, this.io.out(currentUser + ", enter a bid (0 to pass):")];
                    case 9:
                        _b.sent();
                        this.users.shift();
                        _a = parseInt;
                        return [4 /*yield*/, this.io.read()];
                    case 10:
                        bid = _a.apply(void 0, [_b.sent()]);
                        this.bids.push(bid);
                        if (bid > highBid) {
                            highBid = bid;
                            winner = currentUser;
                        }
                        return [3 /*break*/, 8];
                    case 11: return [4 /*yield*/, this.io.out("Winner is " + winner + " with a bid of " + highBid)];
                    case 12:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return SealedAuction;
}());
exports.SealedAuction = SealedAuction;
//# sourceMappingURL=sealedAuction.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewRoutes = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("../dependencies");
exports.reviewRoutes = express_1.default.Router();
exports.reviewRoutes.post('/create', dependencies_1.createReviewController.run.bind(dependencies_1.createReviewController));
exports.reviewRoutes.get('/list', dependencies_1.listReviewController.listAllReviews.bind(dependencies_1.listReviewController));
//# sourceMappingURL=reviewRouter.js.map
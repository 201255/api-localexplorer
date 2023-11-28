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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReviewController = void 0;
const review_1 = require("../../domain/entities/review");
class CreateReviewController {
    constructor(createReviewCase) {
        this.createReviewCase = createReviewCase;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("controller");
            try {
                let message = req.body.message;
                let userId = req.body.userId;
                let restaurantId = Number(req.query.restaurantId);
                let createReview = yield this.createReviewCase.run(message, userId, restaurantId);
                if (createReview instanceof Error) {
                    return res.status(409).send({
                        status: "error",
                        message: createReview.message
                    });
                }
                if (createReview instanceof review_1.review) {
                    return res.status(201).send({
                        status: "succes",
                        data: {
                            message: createReview.message,
                            userId: createReview.userId,
                            restaurantId: createReview.restaurantId
                        }
                    });
                }
                else {
                    return res.status(500).send({
                        status: "error",
                        message: "An unexpected error occurred while create the review."
                    });
                }
            }
            catch (error) {
                return null;
            }
        });
    }
}
exports.CreateReviewController = CreateReviewController;
//# sourceMappingURL=createController.js.map
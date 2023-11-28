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
exports.ReviewsController = void 0;
class ReviewsController {
    constructor(listAllReviewUseCase) {
        this.listAllReviewUseCase = listAllReviewUseCase;
    }
    listAllReviews(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let restaurantId = Number(req.query.restaurantId);
                if (isNaN(restaurantId)) {
                    return res.status(400).send({
                        status: "Error",
                        message: "restaurantId must be a number"
                    });
                }
                let restaurantRes = yield this.listAllReviewUseCase.run(restaurantId);
                if (restaurantRes instanceof Error) {
                    return res.status(500).send({
                        status: "Error",
                        message: restaurantRes.message
                    });
                }
                if (Array.isArray(restaurantRes) && restaurantRes.length > 0) {
                    return res.status(200).send({
                        status: "success",
                        data: restaurantRes
                    });
                }
                else {
                    return res.status(404).send({
                        status: "Not Found",
                        message: "No reviews found for the specified restaurantId"
                    });
                }
            }
            catch (error) {
                console.error("Unhandled error:", error);
                return res.status(500).send({
                    status: "Error",
                    message: "An unexpected error occurred"
                });
            }
        });
    }
}
exports.ReviewsController = ReviewsController;
//# sourceMappingURL=listReviewController.js.map
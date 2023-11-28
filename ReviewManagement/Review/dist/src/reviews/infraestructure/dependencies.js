"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listReviewController = exports.listReviewUseCase = exports.createReviewController = exports.createReviewUseCase = exports.mysqlReviewRepository = void 0;
const mysqlReviewRepository_1 = require("./repositories/mysqlReviewRepository");
const createReviewUseCase_1 = require("../application/usecase/createReviewUseCase");
const createController_1 = require("./controllers/createController");
const listAllReviewUseCase_1 = require("../application/usecase/listAllReviewUseCase");
const listReviewController_1 = require("./controllers/listReviewController");
exports.mysqlReviewRepository = new mysqlReviewRepository_1.MysqlReviewRepository();
exports.createReviewUseCase = new createReviewUseCase_1.CreateReviewUseCase(exports.mysqlReviewRepository);
exports.createReviewController = new createController_1.CreateReviewController(exports.createReviewUseCase);
exports.listReviewUseCase = new listAllReviewUseCase_1.ListAllReviewUseCase(exports.mysqlReviewRepository);
exports.listReviewController = new listReviewController_1.ReviewsController(exports.listReviewUseCase);
//# sourceMappingURL=dependencies.js.map
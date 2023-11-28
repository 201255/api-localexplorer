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
exports.MysqlReviewRepository = void 0;
const connection_1 = require("../../../../database/connection");
const review_1 = require("../../domain/entities/review");
class MysqlReviewRepository {
    createReview(message, userId, restaurantId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let sql = "INSERT INTO reviews(message,userId,restaurantId) VALUES (?,?,?)";
                const params = [message, userId, restaurantId];
                console.log(sql);
                console.log(params);
                const [result] = yield (0, connection_1.query)(sql, params);
                console.log(result);
                return new review_1.review(message, userId, restaurantId, null);
            }
            catch (error) {
                console.error("Error adding review:", error);
                return error;
            }
        });
    }
    listAllReviews(restaurantId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = `
          SELECT 
            r.id, 
            r.message, 
            r.userId, 
            JSON_OBJECT('name', u.name) as userInfo 
          FROM 
            reviews r 
          INNER JOIN 
            users u ON r.userId = u.uuid
          WHERE
            r.restaurantId = ?; 
        `;
                const params = [restaurantId];
                const [rows] = yield (0, connection_1.query)(sql, params);
                return rows.map((row) => ({
                    id: row.id,
                    message: row.message,
                    userId: row.userId,
                    userInfo: row.userInfo
                }));
            }
            catch (error) {
                console.error('Error al listar revisiones:', error.message);
                throw new Error('Error al listar revisiones');
            }
        });
    }
}
exports.MysqlReviewRepository = MysqlReviewRepository;
//# sourceMappingURL=mysqlReviewRepository.js.map
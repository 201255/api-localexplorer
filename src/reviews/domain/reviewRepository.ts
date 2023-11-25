import { review } from "./review";

export interface IReviewRepository {
    createReview(
        // id: number,
        message: string,
        userId: string,
    ): Promise<review | null | string | Error>;

    listAllReviews(): Promise<review[]>;
}
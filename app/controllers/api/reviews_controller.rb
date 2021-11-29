class Api::ReviewsController < ApplicationController

    def create
        @review = Review.new(review_params)
        if @review.save
            render :show
        else
             render json: @review.errors.full_messages, status: 401
        end
    end

    def destroy
        
    end

    def index
    end

    def show
    end

    private
    def review_params
        params.require(:review).permit(:user_id, :product_id, :rating, :comment, :headline)

    end
end

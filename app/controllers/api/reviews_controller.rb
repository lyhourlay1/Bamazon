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
        @review = Review.find(params[:id])
        if @review.destroy
            render :show
        else
             render json: @review.errors.full_messages, status: 401
        end
    end

    def index
        @reviews = Review.where(product_id: params[:product_id])
        render :index
    end

    def show
        @review = Review.find(params[:id])
    end

    def update
       @review = Review.find(params[:id])
        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    
    end


    private
    def review_params
        params.require(:review).permit(:user_id, :product_id, :rating, :comment, :headline)
    end
end

class Api::ProductsController < ApplicationController

    def create
        @product = Product.new(product_params)
        if @product.save
            render :show
        else
            render json: @product.errors.full_messages, status: 401
        end
    end

    def index
        @products = Product.all
        render :index
    end

    def show
        @product = Product.find(params[:id])
    end

    def product_params
        params.require(:product).permit(:product_name, :description, :price, :quantity, :seller_name, :category, :unit)
    end


end

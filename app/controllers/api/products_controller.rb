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

    def search
        
        query = params[:query].split(" ")
        @products=[]
        query.each do |keyWord|
            Product.all.each do |product|
                if product.product_name.includes?(keyWord) && !@products.include?(product)
                    @products.push(product)
                end
            end
        end
        if @products.length > 0
            render :index
        else
            render json: ["Sorry, we did not find any results for #{query}, try another search"], status: 404
        end
    end

    def product_params
        params.require(:product).permit(:product_name, :description, :price, :quantity, :seller_name, :category, :unit)
    end


end

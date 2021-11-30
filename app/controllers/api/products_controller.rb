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
        if query.length <1
            @products = Product.all
        else
            firstWord = query[0]
            @products=  Product.where("product_name ilike ? or 
                category ilike ? or description ilike ? or seller_name ilike ?", 
                "%#{firstWord}%",  "%#{firstWord}%",  "%#{firstWord}%", "%#{firstWord}%")
            query[1..-1].each do |keyWord|
                @products = @products.or(Product.where("product_name ilike ? or 
                category ilike ? or description ilike ? or seller_name ilike ?", 
                "%#{keyWord}%",  "%#{keyWord}%",  "%#{keyWord}%", "%#{keyWord}%"))
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

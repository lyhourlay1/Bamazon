class Api::CartsController < ApplicationController

    def create
        cart_params[:user_id] != "" ? @cart = Cart.new(cart_params) : @cart = Cart.new()
        if @cart.save
            render :show
        else
            render json: @cart.errors.full_messages, status: 401
        end
    end

    def show
        
        userId = current_user.id
        @cart = Cart.find_by(user_id: userId)
        
    end

    def cart_params
        params.require(:cart).permit(:user_id)
    end

end

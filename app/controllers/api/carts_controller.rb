class Api::CartsController < ApplicationController

    def create
        cart_params[:user_id] != "" ? @cart = Cart.new(cart_params) : @cart = Cart.new()
        if @user.save
            render :show
        else
            render json: @cart.errors.full_messages, status: 401
        end
    end

    def show
        @cart = Cart.find_by(user_id: current_user.id)
        render :show
    end

    def cart_params
        params.require(:cart).permit(:user_id)
    end

end

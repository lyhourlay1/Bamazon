class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            @cart = Cart.new(user_id: @user.id)
            @cart.save
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def destroy
        @current_user = current_user
        if @current_user
            @current_user.delete
        else
            render json: @user.errors.full_messages, status: 401
        end
    end
    
    private
    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
    
end

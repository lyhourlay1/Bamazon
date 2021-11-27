class Api::OrdersController < ApplicationController
    def index
        user_id = current_user.id
        @orders = Order.where(`cart_id = #{user_id}`)
    end

    def show
        @order = Post.find(params[:id])
    end

    def create
        @order = Order.new(order_params)
        if @order.save
            render :show
        else
            render json: @order.errors.full_messages, status: 422
        end
    end

    def update
        @order = Order.find(params[:id])
        if @order.update(order_params)
            render :show
        else
            render json: @order.errors.full_messages, status: 422
        end
    end

    def destroy 
        @order = Order.find(params[:id])
        if @order.destroy
            render :show
        else
            render json: @order.errors.full_messages, status: 422
        end
    end


    private
    def order_params
        params.require(:order).permit(:product_id, :cart_id, :quantity)
    end


end

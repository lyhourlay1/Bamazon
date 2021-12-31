class Api::OrdersController < ApplicationController
    def index
        cartId = Cart.find_by(user_id: current_user.id)
        @orders = Order.where(cart_id: cartId)
        @products = []
        @orders.each do |ele|
            @products.push(Product.find_by(id: ele.product_id))

        end
        

        # hash.each do |key, value|
        #     @orders.push(value)
        # end
        
    end

    def show
        @order = Order.find(params[:id])
        @product = Product.find(@order.product_id)
    end

    def create
        cartId = Cart.find_by(user_id: current_user.id)
        order = Order.new(order_params)
        oldOrder= Order.where(product_id: order.product_id, cart_id: cartId)
        
        if oldOrder.length!=0
            order = addOrder(order)
            @order = Order.find(oldOrder[0].id)
            if @order.update(quantity: order.quantity)
                @product = Product.find(@order.product_id)
                render :show
            else
                render json: @order.errors.full_messages, status: 422
            end
        else
            @order = order
            if @order.save
                @product = Product.find(@order.product_id)
                render :show
            else
                render json: @order.errors.full_messages, status: 422
            end
        end
        
    end

    def addOrder(newOrder)
        cartId = Cart.find_by(user_id: current_user.id)
        orders =Order.where(product_id: newOrder.product_id, cart_id: cartId)
        # orders = Order.where(`product_id=#{newOrder.product_id} AND cart_id = #{cartId}`)
        orders[0].quantity += newOrder.quantity
        return orders[0]
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
        @orders = Order.where(id: params[:id])
        
        if @orders.destroy_all
            # render :show
            @orders = Order.all
            @products = []
            @orders.each do |ele|
                @products.push(Product.find_by(id: ele.product_id))
            end            
            render :index
        else
            render json: @order.errors.full_messages, status: 422
        end
    end


    private
    def order_params
        params.require(:order).permit(:product_id, :cart_id, :quantity, :product_name)
    end


end

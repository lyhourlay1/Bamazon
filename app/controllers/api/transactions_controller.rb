class Api::TransactionsController < ApplicationController

    def create
        @transaction = Transaction.new(transaction_params)
        if @transaction.save
            render :show
        else
            render json: @transaction.errors.full_messages, status: 401
        end
    end

    def index
        user = current_user
        @transactions = Transaction.where(user_id: user.id)
        @products = []

        @transactions.each do |ele|
                @products.push(Product.find_by(id: ele.product_id))
            end  
        render :index
    end


    private
    def transaction_params
        params.require(:transaction).permit(:user_id, :product_id, :product_name, :quantity)
    end

end

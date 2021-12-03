json.extract! @order, :id, :cart_id, :product_id, :quantity, :product_name
json.photoUrls @product.photos.map {|file| url_for(file)}
json.price @product.price
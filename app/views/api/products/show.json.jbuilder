json.extract! @product, :id, :product_name, :description, :price, :quantity, :seller_name, :category, :unit
json.photoUrls @product.photos.map {|file| url_for(file)}


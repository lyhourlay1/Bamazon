json.extract! @transaction, :id, :user_id, :product_id, :product_name, :quantity
json.photoUrls @products[index].photos.map {|file| url_for(file)}

post '/cars' do
	@car = Vehicle.new()
	@car.model = params[:models]
	@car.make = params[:makes]
	@car.year = params[:years]
	@car.user_id = session[:user_id]
  @car.style_id = params[:style_id]
	@car.save!
	redirect '/users/profile'
end

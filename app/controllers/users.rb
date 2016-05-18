# Register
get '/users/new' do
	erb :'users/new'
end

post '/users' do
	@user = User.new(params[:user])
	@user.save!
	redirect '/login'
end

# Login
get '/login' do
	erb :login
end

post '/login' do
 if User.authenticate(params[:email], params[:password])
    user = User.find_by(email: params[:email])
    session[:user_id] = user.id
    redirect '/users/profile'
  else
    redirect '/login'
  end
end

# Logout
get '/logout' do
	session.clear
	redirect '/'
end

# Profile
get '/users/profile' do
	@user = User.find(session[:user_id])
	erb :'users/show'
end





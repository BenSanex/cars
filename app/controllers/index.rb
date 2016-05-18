get '/' do
	erb :index
end

post '/cars' do
	p params
end
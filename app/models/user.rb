class User < ActiveRecord::Base
	has_many :vehicles

	def password
    @password ||= BCrypt::Password.new(hash_pass)
  end

  def password=(new_password)
    @password = BCrypt::Password.create(new_password)
    self.hash_pass = @password
  end

  def self.authenticate(email, og_password)
    @user = User.find_by(email: email)
    @user.hashed_password == og_password
  end

end

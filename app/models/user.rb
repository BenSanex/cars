class User < ActiveRecord::Base
	has_many :cars

  validates :hashed_password, {presence: true}
  validates :username, {presence: true, uniqueness: true}

	def password
    @password ||= BCrypt::Password.new(hashed_password)
  end

  def password=(new_password)
    @password = BCrypt::Password.create(new_password)
    self.hashed_password = @password
  end

  def self.authenticate(email, og_password)
    @user = User.find_by(email: email)
    @user.hashed_password == og_password
  end

end

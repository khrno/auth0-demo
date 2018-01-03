class UsersController < ApplicationController
  before_action :load_users, only: :index

  def initialize
    super
    @active = 'users'
  end

  def index
  end

  private

  def load_users
    @users = User.all
  end
end

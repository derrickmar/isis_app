class StaticPagesController < ApplicationController
  def home
  	@lead = Lead.new
  	@email = Email.new
  end
end
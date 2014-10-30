class StaticPagesController < ApplicationController
  def home
  	@lead = Lead.new
  	@email = Email.new
  end

  def vip_apply
  	@lead = Lead.new
  end
end
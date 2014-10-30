class LeadsController < ApplicationController
  def create
  	@lead = Lead.new(lead_params)
  	if @lead.save
  		flash[:success] = "Thank you " + @lead.first_name  + ". We'll be contacting you soon!"
  		redirect_to root_path
  		# render "static_pages/home"
  	else
  		# flash[:error] = "FAILED"
  		flash[:error] = @lead.errors.full_messages
  		redirect_to root_path
  	end
  end

  def vip_create
  	puts 'IN VIP_CREATE'
  	@lead = Lead.new(lead_params)
  	if @lead.save
  		flash[:success] = "Thank you " + @lead.first_name  + ". We'll be contacting you soon!"
  		redirect_to vip_application_path
  		# render "static_pages/home"
  	else
  		# flash[:error] = "FAILED"
  		flash[:error] = @lead.errors.full_messages
  		redirect_to vip_application_path
  	end
  end

  private

	def lead_params
		params.require(:lead).permit(:first_name, :last_name, :email, :phone, :role, :additional_comments, :portfolio, :why_eluci)
	end
end

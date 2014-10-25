class EmailsController < ApplicationController
  def create
  	@email = Email.new(email_params)
  	@email.save
  	redirect_to root_path
  	# if @email.save
  	# 	flash[:success] = "Thank you " + @lead.first_name  + ". We'll inform you when we launch!"
  	# 	redirect_to root_path
  	# else
  	# 	flash[:error] = @email.errors.full_messages
  	# 	redirect_to root_path
  	# end
  end

  private

	def email_params
		params.require(:email).permit(:name)
	end
end

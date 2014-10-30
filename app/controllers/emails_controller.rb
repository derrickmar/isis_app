class EmailsController < ApplicationController
  def create
  	@email = Email.create(email_params)
    @errors = @email.errors.full_messages
    respond_to do |format|
        format.js
    end
  end

  private

	def email_params
		params.require(:email).permit(:email)
	end
end

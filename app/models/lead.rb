class Lead < ActiveRecord::Base
	validates :first_name,  presence: true
	validates :last_name,  presence: true
	validates :phone, format: { with: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/ }
	# validates_format_of :phone,  with: /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/, allow_blank: true
	VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
	validates :email, presence: true, length: { maximum: 255 },
	format: { with: VALID_EMAIL_REGEX }, uniqueness: true
end


# url: { action: 'create', controller: "leads" }, html: { class: "form-horizontal", role: 'form' }
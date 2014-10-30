class ChangeNameToEmail < ActiveRecord::Migration
	def change
		rename_column :emails, :name, :email
	end
end

class AddPortfolioAndWhyEluciAndUpdateColumnsToLeads < ActiveRecord::Migration
  def change
  	add_column :leads, :portfolio, :string
  	add_column :leads, :why_eluci, :text
  	rename_column :leads, :focus, :role
  	rename_column :leads, :notes, :additional_comments
  end
end

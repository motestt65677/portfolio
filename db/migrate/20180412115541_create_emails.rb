class CreateEmails < ActiveRecord::Migration[5.1]
  def change
    create_table :emails do |t|
      t.string :name
      t.string :email
      t.string :message
      t.timestamps
    end
  end
end

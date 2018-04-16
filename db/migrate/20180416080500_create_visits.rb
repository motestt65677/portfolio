class CreateVisits < ActiveRecord::Migration[5.1]
  def change
    create_table :visits do |t|
      t.string :url
      t.string :location
      t.string :description
      t.timestamps
    end
  end
end

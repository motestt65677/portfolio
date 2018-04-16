class AddControllerAndActionToTrack < ActiveRecord::Migration[5.1]
  def change
    add_column :visits, :controller, :string
    add_column :visits, :action, :string
  end
end

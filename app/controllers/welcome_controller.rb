class WelcomeController < ApplicationController
  def index
  end
  def email
    email = Email.new(email: params[:email], name: params[:name], message: params[:message])
    if email.save
      MyMailer.costumer_email(email.email, email.name, email.message).deliver_now
      flash[:success] = "Your message has been received. A confirmation letter has been sent to your email. David will get back to you soon."
      redirect_to "/"
    else
      flash[:notice] = "Something went wrong. Your message did not deliver. Please try again or email directly to chengshair@gmail.com"
      redirect_to "/"
    end
  end
  def track
    visit = Visit.new(url: request.original_url, controller: params[:controller], action: params[:action], description: params[:track])
    visit.save
  end
  def visit_log
    @visits = Visit.all
  end
end

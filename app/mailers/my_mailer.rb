class MyMailer < ApplicationMailer
  default from: "chengshair@gmail.com"

  def costumer_email(email, name, content)
    @name = name
    @content = content
    @email = email
    mail(to: email, subject: 'Thank You For Your Message')
  end

  def my_email(name, email, content)
    
  end
end

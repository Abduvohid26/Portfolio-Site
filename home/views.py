from django.shortcuts import render, redirect
from .models import About, Experience, Projects, Contact
import requests 
from django.contrib import messages



def index(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')
        Contact.objects.create(name=name, email=email, subject=subject, message=message)
        telegram_bot_token = '7784958688:AAGaddPRQdKudiz88XVWex9DuiNGecYeX5k'
        telegram_chat_id = '5700964012'
        telegram_api_url = f'https://api.telegram.org/bot{telegram_bot_token}/sendMessage'
        message_text = f"Yangi fikr:\nIsmi: {name}\n Email: {email}\n Subject: {subject} \n Fikr: {message}"

        data = {
            'chat_id': telegram_chat_id,
            'text': message_text,
        }
        requests.post(telegram_api_url, data=data)
        messages.success(request, "Xabaringiz muvafaqiyatli yuborildi")
        return redirect('/#contact')

    
    about = About.objects.all()
    experience = Experience.objects.all()
    projects = Projects.objects.all()
    success_message = request.GET.get('success', False)

    context = {
        'success_message': success_message,
        'about_item': about.first(), 
        'experiences': experience, 
        'projects': projects
        }
    
    return render(request, template_name='index.html', context=context)



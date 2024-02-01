from django.shortcuts import render, redirect
# from .models import Church


def login(request):
    if request.method == "POST":
        return redirect("home")
    else:
        return render(request, "login.html")


def register(request):
    if request.method == "POST":
        return redirect("login")
    else:
        return render(request, "register.html")


def home(request):
    return render(request, "home.html")


def about(request):
    return render(request, "about.html")


def contact(request):
    return render(request, "contact.html")


def sunday(request):
    return render(request, "sunday.html")


def sermons(request):
    return render(request, "sermons.html")


def roles(request):
    return render(request, "roles.html")


def services(request):
    return render(request, "services.html")


def events(request):
    return render(request, "events.html")


def consultations(request):
    return render(request, "consultations.html")

from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
# from .models import *


def log_in(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")

        context = {}
        user = authenticate(request, username=username, password=password)
        if user is None:
            context["error"] = "Invalid username or password"
            return render(request, "login.html", context)

        login(request, user)
        return redirect("home")
    else:
        return render(request, "login.html")


def register(request):
    if request.method == "POST":
        firstname = request.POST.get("firstname")
        lastname = request.POST.get("lastname")
        username = request.POST.get("username")
        password = request.POST.get("password")
        con_password = request.POST.get("con_password")
        if password != con_password:
            return render(request, "register.html", {"error": "Passwords do not match"})
        # check if username exists in the database
        if User.objects.filter(username=username).exists():
            return render(request, "register.html", {"error": "Username already exists"})
        # create user
        User.objects.create_user(username=username, password=password,
                                 first_name=firstname, last_name=lastname)

        return redirect("log_in")
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

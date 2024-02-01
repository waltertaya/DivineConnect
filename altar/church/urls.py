from django.urls import path
from . import views


urlpatterns = [
    path("", views.login, name="login"),
    path("register/", views.register, name="register"),
    path("home/", views.home, name="home"),
    path("about/", views.about, name="about"),
    path("contact/", views.contact, name="contact"),
    path("services/", views.services, name="services"),
    path("events/", views.events, name="events"),
    path("sunday/", views.sunday, name="sunday"),
    path("roles/", views.roles, name="roles"),
    path("consultations/", views.consultations, name="consultations"),
    path("sermons/", views.sermons, name="sermons"),
]

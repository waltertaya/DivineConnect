from django.urls import path
from . import views


urlpatterns = [
    path("", views.log_in, name="log_in"),
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
    path("giving/", views.giving, name="giving"),
    path('api/sunday/', views.sundayData, name='sunday_data_api'),
    path('api/events/', views.eventsData, name='events_data_api'),
]

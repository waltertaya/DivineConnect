from django.contrib import admin
from .models import Member, Role, Consultation, SundaySchedule, Sermon, Event

admin.site.register(Member)
admin.site.register(Role)
admin.site.register(Consultation)
admin.site.register(SundaySchedule)
admin.site.register(Sermon)
admin.site.register(Event)

from django.contrib import admin
from .models import Member, Role, Consultation, SundaySchedule, Sermon, Event


class MemberAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone_number')
    search_fields = ('name', 'email', 'phone_number')
    list_filter = ('name', 'email', 'phone_number')


admin.site.register(Member, MemberAdmin)
admin.site.register(Role)
admin.site.register(Consultation)
admin.site.register(SundaySchedule)
admin.site.register(Sermon)
admin.site.register(Event)

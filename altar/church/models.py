from django.db import models


class Member(models.Model):
    member_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15, unique=True)

    def __str__(self):
        return self.name


class Role(models.Model):
    role_id = models.AutoField(primary_key=True)
    member = models.ForeignKey(Member, on_delete=models.CASCADE)
    roles = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.member.name} - {self.roles}"


class Consultation(models.Model):
    consult_id = models.AutoField(primary_key=True)
    member = models.ForeignKey(Member, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    email = models.EmailField()
    message = models.TextField()

    def __str__(self):
        return self.name


class SundaySchedule(models.Model):
    schedule_id = models.AutoField(primary_key=True)
    time = models.DateTimeField()
    schedules = models.TextField()

    def __str__(self):
        return f"{self.time} - {self.schedules}"


class Sermon(models.Model):
    sermon_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255)
    video_link = models.URLField()
    date = models.DateField()
    content = models.TextField()

    def __str__(self):
        return self.title


class Event(models.Model):
    event_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255)
    date = models.DateField()
    image = models.ImageField(upload_to='event_images/')
    content = models.TextField()

    def __str__(self):
        return self.title

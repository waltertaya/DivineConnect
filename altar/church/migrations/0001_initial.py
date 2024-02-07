# Generated by Django 4.2.7 on 2024-02-07 06:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Event",
            fields=[
                ("event_id", models.AutoField(primary_key=True, serialize=False)),
                ("title", models.CharField(max_length=255)),
                ("date", models.DateField()),
                ("image", models.ImageField(upload_to="event_images/")),
                ("content", models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name="Member",
            fields=[
                ("member_id", models.AutoField(primary_key=True, serialize=False)),
                ("name", models.CharField(max_length=255)),
                ("email", models.EmailField(max_length=254, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name="Sermon",
            fields=[
                ("sermon_id", models.AutoField(primary_key=True, serialize=False)),
                ("title", models.CharField(max_length=255)),
                ("video_link", models.URLField()),
                ("date", models.DateField()),
                ("content", models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name="SundaySchedule",
            fields=[
                ("schedule_id", models.AutoField(primary_key=True, serialize=False)),
                ("time", models.DateTimeField()),
                ("schedules", models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name="Role",
            fields=[
                ("role_id", models.AutoField(primary_key=True, serialize=False)),
                ("roles", models.CharField(max_length=255)),
                (
                    "member",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="church.member"
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Consultation",
            fields=[
                ("consult_id", models.AutoField(primary_key=True, serialize=False)),
                ("name", models.CharField(max_length=255)),
                ("email", models.EmailField(max_length=254)),
                ("message", models.TextField()),
                (
                    "member",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="church.member"
                    ),
                ),
            ],
        ),
    ]

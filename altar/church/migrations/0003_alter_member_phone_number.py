# Generated by Django 4.2.7 on 2024-02-07 07:16

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("church", "0002_member_phone_number"),
    ]

    operations = [
        migrations.AlterField(
            model_name="member",
            name="phone_number",
            field=models.CharField(max_length=15, unique=True),
        ),
    ]

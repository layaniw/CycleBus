# Generated by Django 4.0.2 on 2022-04-08 19:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bus', '0020_alter_attendance_attendance_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='routeindex',
            name='is_join_location',
            field=models.BooleanField(default=False),
        ),
    ]

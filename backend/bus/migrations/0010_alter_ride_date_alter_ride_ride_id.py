# Generated by Django 4.0.2 on 2022-03-16 00:02

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('bus', '0009_rename_marshal_id_ride_marshal_bus_default_marshal'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ride',
            name='date',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='ride',
            name='ride_id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]

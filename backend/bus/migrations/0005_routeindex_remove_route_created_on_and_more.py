# Generated by Django 4.0.2 on 2022-03-09 08:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('bus', '0004_delete_registration'),
    ]

    operations = [
        migrations.CreateModel(
            name='RouteIndex',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('index', models.IntegerField()),
                ('location', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='bus.location')),
            ],
        ),
        migrations.RemoveField(
            model_name='route',
            name='created_on',
        ),
        migrations.RemoveField(
            model_name='route',
            name='last_updated',
        ),
        migrations.RemoveField(
            model_name='route',
            name='route',
        ),
        migrations.AddField(
            model_name='route',
            name='locations',
            field=models.ManyToManyField(related_name='route_locations', through='bus.RouteIndex', to='bus.Location'),
        ),
        migrations.AddField(
            model_name='routeindex',
            name='route',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='bus.route'),
        ),
    ]

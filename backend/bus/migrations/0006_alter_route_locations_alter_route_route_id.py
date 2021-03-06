# Generated by Django 4.0.2 on 2022-03-09 10:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bus', '0005_routeindex_remove_route_created_on_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='route',
            name='locations',
            field=models.ManyToManyField(related_name='route_locations', through='bus.RouteIndex', to='bus.Location', verbose_name='route_locations'),
        ),
        migrations.AlterField(
            model_name='route',
            name='route_id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]

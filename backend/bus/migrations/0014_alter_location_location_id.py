# Generated by Django 4.0.2 on 2022-04-02 21:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bus', '0013_route_is_default'),
    ]

    operations = [
        migrations.AlterField(
            model_name='location',
            name='location_id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]

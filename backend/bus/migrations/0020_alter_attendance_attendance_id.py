# Generated by Django 4.0.2 on 2022-04-08 18:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bus', '0019_alter_attendance_join_geo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='attendance',
            name='attendance_id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]

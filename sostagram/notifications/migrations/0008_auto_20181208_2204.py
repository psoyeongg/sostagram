# Generated by Django 2.0.9 on 2018-12-08 13:04

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('notifications', '0007_auto_20181208_2203'),
    ]

    operations = [
        migrations.AlterField(
            model_name='notification',
            name='image',
            field=models.ForeignKey(blank=True, default=django.utils.timezone.now, on_delete=django.db.models.deletion.CASCADE, to='images.Image'),
            preserve_default=False,
        ),
    ]

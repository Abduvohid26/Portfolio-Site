# Generated by Django 5.1.4 on 2024-12-18 04:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0003_alter_about_experience'),
    ]

    operations = [
        migrations.AddField(
            model_name='experience',
            name='body',
            field=models.TextField(default=1),
            preserve_default=False,
        ),
    ]

# Generated by Django 5.1.4 on 2024-12-18 04:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0005_alter_experience_working_time'),
    ]

    operations = [
        migrations.AddField(
            model_name='projects',
            name='link',
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
    ]
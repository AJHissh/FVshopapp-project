# Generated by Django 3.1.1 on 2021-08-03 17:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0002_product_images'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='digital',
            field=models.BooleanField(default=True),
        ),
    ]

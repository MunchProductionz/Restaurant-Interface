# Generated by Django 4.2.7 on 2023-11-09 00:11

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(choices=[('Pizza', 'Pizza'), ('Pasta', 'Pasta'), ('Hamburger', 'Hamburger')], max_length=10)),
                ('item_price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('amount', models.PositiveIntegerField()),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('order_id', models.AutoField(primary_key=True, serialize=False)),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('customer_name', models.CharField(max_length=100)),
                ('order_price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('status', models.CharField(choices=[('New', 'New'), ('In progress', 'In progress'), ('Completed', 'Completed'), ('Cancelled', 'Cancelled')], max_length=12)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('items', models.ManyToManyField(related_name='orders', to='base.item')),
            ],
        ),
        migrations.CreateModel(
            name='BusinessDay',
            fields=[
                ('date', models.DateTimeField(primary_key=True, serialize=False)),
                ('week', models.IntegerField()),
                ('day_of_the_week', models.CharField(max_length=9)),
                ('opening_hour', models.TimeField()),
                ('closing_hour', models.TimeField()),
                ('number_of_hours', models.DecimalField(decimal_places=2, max_digits=5)),
                ('number_of_orders', models.PositiveIntegerField()),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('orders', models.ManyToManyField(related_name='business_days', to='base.order')),
            ],
        ),
    ]
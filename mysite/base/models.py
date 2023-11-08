from django.db import models

# Create your models here.

class Item(models.Model):
    ITEM_TYPES = (
        ('Pizza', 'Pizza'),
        ('Pasta', 'Pasta'),
        ('Hamburger', 'Hamburger'),
    )
    type = models.CharField(max_length=10, choices=ITEM_TYPES)
    
    item_price = models.DecimalField(max_digits=10, decimal_places=2)
    amount = models.PositiveIntegerField()
    created = models.DateTimeField(auto_now_add=True)
    
class Order(models.Model):
    order_id = models.AutoField(primary_key=True)
    date = models.DateField(auto_now_add=True)          
    customer_name = models.CharField(max_length=100)
    items = models.ManyToManyField('Item', related_name='orders')
    order_price = models.DecimalField(max_digits=10, decimal_places=2)
    
    STATUS_CHOICES = (
        ('New', 'New'),
        ('In progress', 'In progress'),
        ('Completed', 'Completed'),
        ('Cancelled', 'Cancelled'),
    )
    status = models.CharField(max_length=12, choices=STATUS_CHOICES)
    
    created = models.DateTimeField(auto_now_add=True)
    
class BusinessDay(models.Model):
    date = models.DateField(primary_key=True)
    week = models.IntegerField()
    day_of_the_week = models.CharField(max_length=9)
    opening_hour = models.TimeField()
    closing_hour = models.TimeField()
    number_of_hours = models.DecimalField(max_digits=5, decimal_places=2)
    orders = models.ManyToManyField('Order', related_name='business_days')                     
    number_of_orders = models.PositiveIntegerField()        
    created = models.DateTimeField(auto_now_add=True)
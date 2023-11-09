from rest_framework import serializers
from base.models import BusinessDay, Order, Item

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    items = ItemSerializer(many=True)
    class Meta:
        model = Order
        fields = '__all__'
        
class BusinessDaySerializer(serializers.ModelSerializer):
    orders = OrderSerializer(many=True)
    class Meta:
        model = BusinessDay
        fields = '__all__'
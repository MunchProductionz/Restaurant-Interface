from rest_framework.response import Response
from rest_framework.decorators import api_view
from base.models import BusinessDay, Order, Item
from .serializers import BusinessDaySerializer, OrderSerializer, ItemSerializer

@api_view(['GET'])
def getApiOverview(request):
    api_urls = {
        'Detail BusinessDay': 'getBusinessDay/<str:date>/',
        'List BusinessDays': 'getBusinessDaysRange/<str:start_date>/<str:end_date>/',
        'Detail Order': 'getOrders/<str:date>/',
        'List Orders': 'getOrdersRange/<str:start_date>/<str:end_date>/',
        'Create BusinessDay': 'addBusinessDay/',
        'Create Order': 'addOrder/<str:date>/',
        'Update BusinessDay': 'updateBusinessDay/<str:date>/',
        'Update Order': 'updateOrder/<str:date>/<str:order_id>/',
        'Delete BusinessDay': 'deleteBusinessDay/<str:date>/',
        'Delete Order': 'deleteOrder/<str:date>/<str:order_id>/',
    }
    return Response(api_urls)

@api_view(['GET'])
def getBusinessDay(request, date):
    business_day = BusinessDay.objects.get(date=date)
    serializer = BusinessDaySerializer(business_day, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getBusinessDaysRange(request, start_date, end_date):
    business_days = BusinessDay.objects.filter(date__range=[start_date, end_date])
    serializer = BusinessDaySerializer(business_days, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getOrders(request, date):
    orders = Order.objects.filter(date=date)                # Fix
    serializer = OrderSerializer(orders, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getOrdersRange(request, start_date, end_date):
    orders = Order.objects.filter(date__range=[start_date, end_date])
    serializer = OrderSerializer(orders, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def addBusinessDay(request):
    serializer = BusinessDaySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
def addOrder(request, date):
    serializer = OrderSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['PUT'])
def updateBusinessDay(request, date):
    business_day = BusinessDay.objects.get(date=date)
    serializer = BusinessDaySerializer(instance=business_day, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['PUT'])
def updateOrder(request, date, order_id):
    order = Order.objects.get(date=date, order_id=order_id)
    serializer = OrderSerializer(instance=order, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def deleteBusinessDay(request, date):
    business_day = BusinessDay.objects.get(date=date)
    business_day.delete()
    return Response('BusinessDay successfully deleted!')

@api_view(['DELETE'])
def deleteOrder(request, date, order_id):
    order = Order.objects.get(date=date, order_id=order_id)
    order.delete()
    return Response('Order successfully deleted!')
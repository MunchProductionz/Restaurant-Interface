from django.urls import path
from . import views

urlpatterns = [
    path('', views.getApiOverview, name="api-overview"),
    path('getBusinessDay/<str:date>/', views.getBusinessDay, name="business-day"),
    path('getBusinessDaysRange/<str:start_date>/<str:end_date>/', views.getBusinessDaysRange, name="business-days-range"),
    path('getOrders/<str:date>/', views.getOrders, name="orders"),
    path('getOrdersRange/<str:start_date>/<str:end_date>/', views.getOrdersRange, name="orders-range"),
    path('addBusinessDay/', views.addBusinessDay, name="business-day-add"),
    path('addOrder/<str:date>/', views.addOrder, name="order-add"),
    path('updateBusinessDay/<str:date>/', views.updateBusinessDay, name='business-day-update'),
    path('updateOrder/<str:date>/<str:order_id>/', views.updateOrder, name="order-update"),
    path('deleteBusinessDay/<str:date>/', views.deleteBusinessDay, name="business-day-delete"),
    path('deleteOrder/<str:date>/<str:order_id>/', views.deleteOrder, name="order-delete")
]
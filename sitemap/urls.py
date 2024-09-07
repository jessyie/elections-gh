from django.urls import path
from . import views


urlpatterns = [
    path('', views.map, name='map'),
    path('my_routing/', views.my_routing, name='my_routing'),
    path('update_charts/', views.update_charts, name='update_charts'),
    path('selectCensus', views.selectCensus, name='selectCensus'),
    path('selectElectoral1', views.selectElectoral1, name='selectElectoral1'),
    #path('selectElectoral2', views.selectElectoral2, name='selectElectoral2'),
       
]
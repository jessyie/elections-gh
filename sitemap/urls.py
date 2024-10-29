from django.urls import path
# RT
#from django.urls import path, re_path
from . import views
from . import consumers


urlpatterns = [
    path('', views.map, name='map'),
    path('my_routing/', views.my_routing, name='my_routing'),
    path('update_charts', views.update_charts, name='update_charts'),
    path('selectCensus', views.selectCensus, name='selectCensus'),
    path('selectElectoral1', views.selectElectoral1, name='selectElectoral1'),
    # RT
    #re_path(r'ws/data-updates/$', consumers.DataUpdateConsumer.as_asgi()),
    
       
]
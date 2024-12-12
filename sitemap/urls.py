
from django.urls import path
from . import views


urlpatterns = [
    # path('timsoro_signup/',views.SignupPage,name='signup'),
    # path('',views.LoginPage,name='login'),
    # # #path('home/',views.HomePage,name='home'),
    # path('logout/',views.LogoutPage,name='logout'),
    path('', views.map, name='map'),
    path('my_routing/', views.my_routing, name='my_routing'),
    path('update_charts', views.update_charts, name='update_charts'),
    path('selectCensus', views.selectCensus, name='selectCensus'),
    path('selectElectoral1', views.selectElectoral1, name='selectElectoral1'), 
    ]
# chat/urls.py
from django.conf.urls import url

from . import views

urlpatterns = [
    # url(r'^$', views.index, name='index'),
    url(r'^$', views.indexTempChat),
    url(r'test/', views.test),

    url(r'ChingLing/', views.GetChingLingData),
    url(r'NanYing/', views.GetNanYingData),
]

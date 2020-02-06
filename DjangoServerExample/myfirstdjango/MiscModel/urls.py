from django.conf.urls import url

from . import views

urlpatterns = [
    # url(r'^$', views.index, name='index'),
    url(r'DOY2DAY/(?P<year>[0-9]{4})/(?P<doy>[0-9]{3})', views.DOY2DAY),
    url(r'DAY2DOY/(?P<year>[0-9]{4})/(?P<month>[0-9]{2})/(?P<day>[0-9]{2})', views.DAY2DOY),
    url(r'Countdown', views.Countdown),
    url(r'testtest', views.testtest),
    url(r'STGGame', views.STGGame),
]

from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter

#from . import views
from .views import HomeView, TodoViewSet

router = DefaultRouter()
router.register(r'todo', TodoViewSet)

urlpatterns = [
    # url(r'^$', views.index, name='index'),
    url(r'^$', HomeView.as_view()),
    url(r'^', include(router.urls)), 
]

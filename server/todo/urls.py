from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken.views import obtain_auth_token

#from . import views
from .views import HomeView, TodoViewSet, UserViewSet

router = DefaultRouter()
router.register(r'todos', TodoViewSet)
router.register(r'users', UserViewSet)

urlpatterns = [
    # url(r'^$', views.index, name='index'),
    url(r'^api/', include(router.urls)), 
    url(r'^obtain-auth-token/$', obtain_auth_token),
    url(r'^', HomeView.as_view()),
]

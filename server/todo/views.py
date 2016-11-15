from django.shortcuts import render
from django.views.generic import TemplateView
from django.contrib.auth.models import User
from rest_framework import viewsets, response, permissions
from .models import Todo
from .serializers import TodoSerializer, UserSerializer

def index(request):
    return render(request, 'index.html')

class HomeView(TemplateView):
    template_name = 'index.html'

class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def retrieve(self, request, pk=None):
	if pk == 'i':
	    return response.Response(UserSerializer(request.user,
		context={'request': request}).data)
	return super(UserViewSet, self).retrieve(request, pk)

from django.shortcuts import render
from django.views.generic import TemplateView
from rest_framework import viewsets
from .models import Todo
from .serializers import TodoSerializer

def index(request):
    return render(request, 'index.html')

class HomeView(TemplateView):
    template_name = 'index.html'

class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

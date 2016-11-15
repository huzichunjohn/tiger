from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Todo

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ('id', 'title', 'completed')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
	model = User
	fields = ('username',)

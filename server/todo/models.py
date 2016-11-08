from __future__ import unicode_literals

from django.db import models

class Todo(models.Model):
    name = models.CharField(max_length=50)
    completed = models.BooleanField(default=False)

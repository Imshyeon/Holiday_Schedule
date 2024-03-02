from django.db import models
from django.utils import timezone
from django.conf import settings
from django.contrib.auth.models import User

class Schedule(models.Model):
    title = models.CharField(max_length=128)
    category = models.CharField(max_length=100)
    place = models.CharField(max_length=128)
    startDate = models.DateTimeField()
    endDate = models.DateTimeField()
    cover_image = models.ImageField(upload_to='image/schedule_covers/', blank=True, null=True)
    content = models.TextField()

    def __str__(self):
        return self.title

class Profile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    image = models.ImageField(upload_to='image/profile_images/', blank=True, null=True)
    name = models.CharField(max_length=60, default='이름') 
    email = models.EmailField()
    information = models.TextField()

    def __str__(self):
        return self.user.username + "'s Profile"
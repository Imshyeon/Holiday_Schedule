from django.shortcuts import render
from rest_framework import viewsets
from .models import Schedule,Profile
from .serializers import ScheduleSerializer, ProfileSerializer

class ScheduleViewSet(viewsets.ModelViewSet):
    queryset = Schedule.objects.all()
    serializer_class = ScheduleSerializer

class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
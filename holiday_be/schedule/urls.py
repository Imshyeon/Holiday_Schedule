from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ScheduleViewSet, ProfileViewSet, LoginAPIView

router = DefaultRouter()
router.register(r'schedule', ScheduleViewSet)
router.register(r'user',ProfileViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api/', include('dj_rest_auth.urls')),
    path('api/registration/', include('dj_rest_auth.registration.urls')),
]
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ScheduleViewSet, ProfileViewSet
from dj_rest_auth.jwt_auth import get_refresh_view
from dj_rest_auth.registration.views import RegisterView
from dj_rest_auth.views import UserDetailsView, LogoutView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)

router = DefaultRouter()
router.register(r'schedule', ScheduleViewSet)
router.register(r'user',ProfileViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path("api/register/", RegisterView.as_view(), name="rest_register"),
    path("api/login/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/logout/", LogoutView.as_view(), name="rest_logout"),
    path("api/user/", UserDetailsView.as_view(), name="rest_user_details"),
    path("api/token/verify/", TokenVerifyView.as_view(), name="token_verify"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]

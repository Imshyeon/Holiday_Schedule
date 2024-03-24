from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ScheduleViewSet, ProfileViewSet
from dj_rest_auth.jwt_auth import get_refresh_view
from dj_rest_auth.registration.views import RegisterView
from dj_rest_auth.views import LoginView, LogoutView, UserDetailsView
from django.urls import path
from rest_framework_simplejwt.views import TokenVerifyView

router = DefaultRouter()
router.register(r'schedule', ScheduleViewSet)
router.register(r'user',ProfileViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path("api/register/", RegisterView.as_view(), name="rest_register"),
    path("api/login/", LoginView.as_view(), name="rest_login"),
    path("api/logout/", LogoutView.as_view(), name="rest_logout"),
    path("api/user/", UserDetailsView.as_view(), name="rest_user_details"),
    path("api/token/verify/", TokenVerifyView.as_view(), name="token_verify"),
    path("api/token/refresh/", get_refresh_view().as_view(), name="token_refresh"),
]

# urlpatterns = [
#     path('', include(router.urls)),
#     path('api/', include('dj_rest_auth.urls')),
#     path('api/registration/', include('dj_rest_auth.registration.urls')),
# ]
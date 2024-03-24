# signals.py
from django.db.models.signals import post_save
from django.dispatch import receiver
from allauth.account.signals import user_signed_up
from .models import Profile
from django.contrib.auth.models import User

@receiver(post_save, sender=User)
def save_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance, name=instance.username, email=instance.email)
    instance.profile.save()

@receiver(user_signed_up)
def create_profile_for_new_user(sender, request, user, **kwargs):
    if not Profile.objects.filter(user=user).exists():
        profile_data = {
            'user': user,
            'name': user.username,  # 사용자의 이름을 사용합니다.
            'email': user.email,  # 사용자의 이메일 주소를 사용합니다.
        }
        Profile.objects.create(**profile_data)

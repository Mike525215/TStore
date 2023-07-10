from django.urls import path
from .views import *
from .models import *

urlpatterns = [
    path('sneakers/', SneakersAPIView.as_view()),
    path('sneakers/<int:pk>/', ItemAPIView.as_view()),
    path('cart/', CartAPIView.as_view()),
    path("all_users/", UsersAPIView.as_view())
]
from django.urls import path
from .views import *
from .models import *

urlpatterns = [
    path('sneakers/', SneakersAPIView.as_view()),
    path('sneakers/<int:pk>/', ItemAPIView.as_view())
]
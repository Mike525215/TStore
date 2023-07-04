from django.shortcuts import render
from rest_framework.generics import ListAPIView
from .serializers import *
from .models import *

class SneakersList(ListAPIView):
    queryset = Sneakers.objects.all()
    serializer_class = SneakersSerializer


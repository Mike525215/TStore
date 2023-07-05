from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework import filters
from .serializers import *
from .models import *

class SneakersAPIView(ListAPIView):
    queryset = Sneakers.objects.all()
    serializer_class = SneakersSerializer
    # permission_classes = [IsAuthenticatedOrReadOnly]
    filter_backends = [filters.SearchFilter]
    search_fields = ["title"]

class ItemAPIView(RetrieveAPIView):
    queryset = Sneakers.objects.all()
    serializer_class = SneakersSerializer

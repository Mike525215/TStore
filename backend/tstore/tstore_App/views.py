from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView, ListCreateAPIView
from django_filters.rest_framework import DjangoFilterBackend, OrderingFilter
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework import filters
from .serializers import *
from .models import *

class SneakersAPIView(ListAPIView):
    queryset = Sneakers.objects.all()
    serializer_class = SneakersSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    filter_backends = [filters.SearchFilter]
    search_fields = ["title"]
    filterset_fields = ['category']


class ItemAPIView(RetrieveAPIView):
    queryset = Sneakers.objects.all()
    serializer_class = SneakersSerializer

class UsersAPIView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class CartAPIView(ListCreateAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['user']
from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView, ListCreateAPIView, RetrieveDestroyAPIView
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework import filters
from .serializers import *
from .models import *

class SneakersAPIView(ListAPIView):
    queryset = Sneakers.objects.all()
    serializer_class = SneakersSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    search_fields = ["title"]
    filterset_fields = ["category"]
    ordering_fields = ["price"]

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

class CartDestroyAPIView(RetrieveDestroyAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer


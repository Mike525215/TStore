from rest_framework.serializers import ModelSerializer, StringRelatedField, PrimaryKeyRelatedField
from .models import *

class SneakersSerializer(ModelSerializer):
    class Meta:
        model = Sneakers
        fields = ["id", "title", "price", "description", "image", "in_stock", "category"]

class CartSerializer(ModelSerializer):
    class Meta:
        model = Cart
        fields = ["id", "sneakers", "user"]

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username"]
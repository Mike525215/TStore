from rest_framework.serializers import ModelSerializer
from .models import *

class SneakersSerializer(ModelSerializer):
    class Meta:
        model = Sneakers
        fields = "__all__"
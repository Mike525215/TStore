from django.db import models

class Sneakers(models.Model):
    title = models.CharField(max_length=100)
    price = models.FloatField(blank=True)
    description = models.CharField(max_length=100)
    image = models.URLField(blank=True)
    in_stock = models.BooleanField(blank=True)




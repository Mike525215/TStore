from django.db import models

class Sneakers(models.Model):
    title = models.CharField(max_length=100)
    price = models.FloatField(blank=True)
    description = models.CharField(max_length=100)
    image = models.URLField(blank=True)
    in_stock = models.BooleanField(blank=True)
    category = models.ForeignKey('Categories', on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Sneakers"
        verbose_name_plural = "Sneakers"

class Categories(models.Model):
    name = models.CharField(max_length=40)

    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Categories"





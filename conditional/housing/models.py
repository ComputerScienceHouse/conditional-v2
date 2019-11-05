from django.db import models

class OnFloorStatusAssigned(models.Model):
    uid = models.CharField(max_length=32, null=False, primary_key=True)
    onfloor_granted = models.DateField(null=False, auto_now_add=True)


class InHousingQueue(models.Model):
    uid = models.CharField(max_length=32, null=False, primary_key=True)

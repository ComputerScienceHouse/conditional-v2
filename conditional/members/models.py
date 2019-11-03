from django.db import models


class FreshmanAccount(models.Model):
    __tablename__ = 'freshman_accounts'
    name = models.CharField(max_length=64, null=False)
    eval_date = models.DateField(null=False, auto_now_add=True)
    onfloor_status = models.BooleanField()
    room_number = models.CharField(max_length=25)
    rit_username = models.CharField(max_length=10, null=True)

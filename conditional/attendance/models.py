from django.db import models

from members.models import FreshmanAccount


class Directorship(models.Model):
    name = models.CharField(max_length=32, null=False)
    active = models.BooleanField(default=True)


class DirectorshipMeeting(models.Model):
    directorship = models.ForeignKey(Directorship, on_delete=models.CASCADE, null=False)
    timestamp = models.DateField(null=False, auto_now_add=True)
    approved = models.BooleanField(null=False)
    active = models.BooleanField()


class MemberDirectorshipAttendance(models.Model):
    uid = models.CharField(max_length=32, null=False)
    meeting_id = models.ForeignKey(DirectorshipMeeting, on_delete=models.CASCADE, null=False)


class FreshmanDirectorshipAttendance(models.Model):
    fid = models.ForeignKey(FreshmanAccount, on_delete=models.CASCADE, null=False)
    meeting_id = models.ForeignKey(DirectorshipMeeting, on_delete=models.CASCADE, null=False)

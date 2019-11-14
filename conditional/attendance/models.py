from django.db import models

from attendance.serializers import create_serializer
from members.models import FreshmanAccount


attendance_status_choices = [('Attended', 'Attended'), ('Excused', 'Excused'), ('Absent', 'Absent')]


@create_serializer
class Directorship(models.Model):
    name = models.CharField(max_length=32, null=False, unique=True)
    active = models.BooleanField(default=True)
    ad_hoc = models.BooleanField()


@create_serializer
class DirectorshipMeeting(models.Model):
    directorship = models.ForeignKey(Directorship, on_delete=models.CASCADE, null=False)
    timestamp = models.DateField(null=False, auto_now_add=True)
    approved = models.BooleanField(null=False)
    active = models.BooleanField()


@create_serializer
class MemberDirectorshipAttendance(models.Model):
    uid = models.CharField(max_length=32, null=False)
    meeting_id = models.ForeignKey(DirectorshipMeeting, on_delete=models.CASCADE, null=False)


@create_serializer
class FreshmanDirectorshipAttendance(models.Model):
    fid = models.ForeignKey(FreshmanAccount, on_delete=models.CASCADE, null=False)
    meeting_id = models.ForeignKey(DirectorshipMeeting, on_delete=models.CASCADE, null=False)


@create_serializer
class TechnicalSeminar(models.Model):
    name = models.CharField(max_length=128, null=False, unique=True)
    timestamp = models.DateField(null=False, auto_now_add=True)
    approved = models.BooleanField(null=False)
    active = models.BooleanField()


@create_serializer
class MemberSeminarAttendance(models.Model):
    uid = models.CharField(max_length=32, null=False)
    seminar_id = models.ForeignKey(TechnicalSeminar, on_delete=models.CASCADE, null=False)


@create_serializer
class FreshmanSeminarAttendance(models.Model):
    fid = models.ForeignKey(FreshmanAccount, on_delete=models.CASCADE, null=False)
    seminar_id = models.ForeignKey(TechnicalSeminar, on_delete=models.CASCADE, null=False)


@create_serializer
class HouseMeeting(models.Model):
    date = models.DateField(null=False, auto_now_add=True)
    active = models.BooleanField(null=False)


@create_serializer
class MemberHouseMeetingAttendance(models.Model):
    uid = models.CharField(max_length=32, null=False)
    meeting_id = models.ForeignKey(HouseMeeting, on_delete=models.CASCADE, null=False)
    excuse = models.TextField()
    attendance_status = models.CharField(max_length=32, choices=attendance_status_choices)


@create_serializer
class FreshmanHouseMeetingAttendance(models.Model):
    fid = models.ForeignKey(FreshmanAccount, on_delete=models.CASCADE, null=False)
    meeting_id = models.ForeignKey(HouseMeeting, on_delete=models.CASCADE, null=False)
    excuse = models.TextField()
    attendance_status = models.CharField(max_length=32, choices=attendance_status_choices)

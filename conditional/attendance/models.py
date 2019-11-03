from django.db import models

from members.models import FreshmanAccount


class Committee(models.Model):
    __tablename__ = 'committees'
    name = models.CharField(max_length=32, null=False)
    active = models.BooleanField(default=True)


class CommitteeMeeting(models.Model):
    __tablename__ = 'committee_meetings'
    committee = models.ForeignKey(Committee, on_delete=models.CASCADE, null=False)
    timestamp = models.DateField(null=False, auto_now_add=True)
    approved = models.BooleanField(null=False)
    active = models.BooleanField()


class MemberCommitteeAttendance(models.Model):
    __tablename__ = 'member_committee_attendance'
    uid = models.CharField(max_length=32, null=False)
    meeting_id = models.ForeignKey(CommitteeMeeting, on_delete=models.CASCADE, null=False)


class FreshmanCommitteeAttendance(models.Model):
    __tablename__ = 'freshman_committee_attendance'
    fid = models.ForeignKey(FreshmanAccount, on_delete=models.CASCADE, null=False)
    meeting_id = models.ForeignKey(CommitteeMeeting, on_delete=models.CASCADE, null=False)

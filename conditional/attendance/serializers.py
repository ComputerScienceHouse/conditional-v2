from rest_framework import serializers
from attendance.models import Directorship, DirectorshipMeeting, MemberDirectorshipAttendance


class DirectorshipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Directorship
        fields = '__all__'


class DirectorshipMeetingSerializer(serializers.ModelSerializer):
    class Meta:
        model = DirectorshipMeeting
        fields = '__all__'


class MemberDirectorshipAttendanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = MemberDirectorshipAttendance
        fields = '__all__'

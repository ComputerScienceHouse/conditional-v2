from rest_framework import serializers
from attendance.models import Directorship, DirectorshipMeeting, MemberDirectorshipAttendance, FreshmanDirectorshipAttendance, TechnicalSeminar, MemberSeminarAttendance, FreshmanSeminarAttendance


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


class FreshmanDirectorshipAttendanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = FreshmanDirectorshipAttendance
        fields = '__all__'


class TechnicalSeminarSerializer(serializers.ModelSerializer):
    class Meta:
        model = TechnicalSeminar
        fields = '__all__'


class MemberSeminarAttendanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = MemberSeminarAttendance
        fields = '__all__'


class FreshmanSeminarAttendanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = FreshmanSeminarAttendance
        fields = '__all__'

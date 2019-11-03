from rest_framework import serializers
from attendance.models import Committee


class CommitteeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Committee
        fields = '__all__'

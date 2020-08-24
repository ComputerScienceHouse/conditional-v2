from rest_framework import serializers
from members.models import MemberAccount


class MemberAccountSerializer(serializers.Serializer):
    uid = serializers.CharField(max_length=32)

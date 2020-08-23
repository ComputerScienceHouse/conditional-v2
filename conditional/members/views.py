from django.shortcuts import render
from member.serializers import MemberAccountSerializer

class MemberListView(viewsets.ViewSet):
    serializer_class = serializers.MemberAccountSerializer
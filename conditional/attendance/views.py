from rest_framework import generics
from attendance.models import Committee
from attendance.serializers import CommitteeSerializer

# Create your views here.
class CommitteeListCreate(generics.ListCreateAPIView):
    queryset = Committee.objects.all()
    serializer_class = CommitteeSerializer
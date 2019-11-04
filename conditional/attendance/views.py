from attendance.models import Directorship, DirectorshipMeeting
from attendance.serializers import DirectorshipSerializer, DirectorshipMeetingSerializer
from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView


class DirectorshipListView(ListAPIView):
    queryset = Directorship.objects.all()
    serializer_class = DirectorshipSerializer


class DirectorshipActiveListView(ListAPIView):
    queryset = Directorship.objects.filter(active=True)
    serializer_class = DirectorshipSerializer


class DirectorshipCreate(CreateAPIView):
    queryset = Directorship.objects.all()
    serializer_class = DirectorshipSerializer


class DirectorshipView(RetrieveUpdateDestroyAPIView):
    queryset = Directorship.objects.all()
    serializer_class = DirectorshipSerializer


class DirectorshipMeetingCreate(CreateAPIView):
    queryset = DirectorshipMeeting.objects.all()
    serializer_class = DirectorshipMeetingSerializer


class DirectorshipMeetingView(RetrieveUpdateDestroyAPIView):
    queryset = DirectorshipMeeting.objects.all()
    serializer_class = DirectorshipMeetingSerializer

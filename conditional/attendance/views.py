from attendance.models import Directorship, DirectorshipSerializer, DirectorshipMeeting, DirectorshipMeetingSerializer # pylint: disable=E0611
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

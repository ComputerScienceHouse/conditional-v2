from django.urls import path
from . import views

urlpatterns = [
    path('directorships', views.DirectorshipListView.as_view()),
    path('directorships/active', views.DirectorshipActiveListView.as_view()),
    path('directorship/<int:pk>', views.DirectorshipView.as_view()),
    path('directorship', views.DirectorshipCreate.as_view()),
    path('directorship/meeting/<int:pk>', views.DirectorshipMeetingView.as_view()),
    path('directorship/meeting', views.DirectorshipMeetingCreate.as_view()),

]

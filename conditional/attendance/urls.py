from django.urls import path
from . import views

urlpatterns = [
    path('', views.CommitteeListCreate.as_view()),
]

from django.urls import path
from . import views

urlpatterns = [
    path('springevals', views.SpringEvalView.as_view()),
]

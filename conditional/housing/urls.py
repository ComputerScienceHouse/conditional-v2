from django.urls import path
from . import views

urlpatterns = [
    path('api/housing/', views.LeadListCreate.as_view()),
]

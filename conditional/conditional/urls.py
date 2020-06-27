"""conditional URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import include, re_path
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

SchemaView = get_schema_view(
    openapi.Info(
        title='Conditional API',
        default_version='v2',
        description='Test description',
        contact=openapi.Contact(email='contact@snippets.local'),
        license=openapi.License(name='Mozilla Public License 2.0'),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    re_path(r'^api/docs(?P<format>\.json|\.yaml)$', SchemaView.without_ui(cache_timeout=0), name='schema-json'),
    re_path(r'^api/docs/?$', SchemaView.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),

    re_path(r'^api/attendance/?', include('attendance.urls')),
    re_path(r'^api/evaluations/?', include('evaluations.urls')),

    # Make sure this is the last pattern listed
    re_path(r'/?', include('frontend.urls')),
]

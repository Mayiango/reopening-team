# file: api/urls.py
from django.urls import path
from . import views
urlpatterns = [
    path('', views.ListState.as_view()),
    path('<int:pk>/', views.DetailState.as_view()),
    # url(r'^auth$', drf_views.obtain_auth_token, name='auth'),
]

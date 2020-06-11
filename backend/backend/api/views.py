from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import State
from .serializers import StateSerializer
# Create your views here.


class ListState(generics.ListCreateAPIView):
    queryset = State.objects.all()
    serializer_class = StateSerializer

class DetailState(generics.RetrieveUpdateDestroyAPIView):
    queryset = State.objects.all()
    serializer_class = StateSerializer

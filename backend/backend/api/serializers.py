from rest_framework import serializers
from .models import State

class StateSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'name',
            'description',
        )
        model = State

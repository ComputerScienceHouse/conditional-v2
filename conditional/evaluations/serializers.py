from rest_framework import serializers
from evaluations.models import SpringEval


class SpringEvalSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpringEval
        fields = '__all__'

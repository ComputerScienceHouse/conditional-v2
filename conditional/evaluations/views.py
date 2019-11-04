from evaluations.models import SpringEval
from evaluations.serializers import SpringEvalSerializer
from rest_framework.generics import RetrieveUpdateDestroyAPIView


class SpringEvalView(RetrieveUpdateDestroyAPIView):
    queryset = SpringEval.objects.all()
    serializer_class = SpringEvalSerializer
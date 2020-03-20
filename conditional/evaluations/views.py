from evaluations.models import SpringEval, SpringEvalSerializer
from rest_framework.generics import RetrieveUpdateDestroyAPIView


class SpringEvalView(RetrieveUpdateDestroyAPIView):
    queryset = SpringEval.objects.all()
    serializer_class = SpringEvalSerializer

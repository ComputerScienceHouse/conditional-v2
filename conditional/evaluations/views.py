from evaluations.models import SpringEval, SpringEvalSerializer # pylint: disable=E0611
from rest_framework.generics import RetrieveUpdateDestroyAPIView


class SpringEvalView(RetrieveUpdateDestroyAPIView):
    queryset = SpringEval.objects.all()
    serializer_class = SpringEvalSerializer

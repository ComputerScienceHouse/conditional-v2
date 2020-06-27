from rest_framework.generics import RetrieveUpdateDestroyAPIView

from evaluations.models import SpringEval, SpringEvalSerializer # pylint: disable=E0611


class SpringEvalView(RetrieveUpdateDestroyAPIView):
    queryset = SpringEval.objects.all()
    serializer_class = SpringEvalSerializer

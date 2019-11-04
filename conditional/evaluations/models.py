from django.db import models


def eval_results_choices():
    return [('Pending', 'Pending'), ('Passed', 'Passed'), ('Failed', 'Failed')]


class FreshmanEvalData(models.Model):
    uid = models.CharField(max_length=32, null=False)
    freshman_project = models.CharField(max_length=32, choices=eval_results_choices(), null=True)
    eval_date = models.DateField(null=False)
    social_events = models.TextField()
    other_notes = models.TextField()
    freshman_eval_result = models.CharField(max_length=32, choices=eval_results_choices(), null=False)
    active = models.BooleanField()


class SpringEval(models.Model):
    uid = models.CharField(max_length=32, null=False)
    active = models.BooleanField(null=False)
    date_created = models.DateField(null=False, auto_now_add=True)
    status = models.CharField(max_length=32, choices=eval_results_choices(), null=False)


class Conditional(models.Model):
    uid = models.CharField(max_length=32, null=False)
    description = models.CharField(max_length=512, null=False)
    date_created = models.DateField(null=False, auto_now_add=True)
    date_due = models.DateField(null=False)
    active = models.BooleanField(null=False)
    status = models.CharField(max_length=32, choices=eval_results_choices(), null=False)
    s_evaluation = models.ForeignKey(FreshmanEvalData, models.CASCADE)
    i_evaluation = models.ForeignKey(SpringEval, models.CASCADE)

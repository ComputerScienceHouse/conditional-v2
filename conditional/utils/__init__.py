from sys import modules

from rest_framework import serializers


def create_serializer(model_cls):
    """
    Generate a Serializer class for the provided class and add it to this module
    """

    this_module = modules[model_cls.__module__]

    class Meta:
        model = model_cls
        fields = '__all__'

    new_name = model_cls.__name__ + 'Serializer'
    new_class = type(new_name, (serializers.ModelSerializer, ), {'Meta': Meta})
    setattr(this_module, new_name, new_class)

    return model_cls

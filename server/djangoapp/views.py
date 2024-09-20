import json
import logging
import requests
from django.http import JsonResponse


# Create your views here.
def test_connection(request):
    try:
        return JsonResponse({"message": "Connection successful"}, status=200)
    except:
        return JsonResponse({"message": "Error occured"}, status=500)




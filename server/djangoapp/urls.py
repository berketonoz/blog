from django.urls import path
from . import views

APP_NAME = 'djangoapp'
urlpatterns = [
    # paths for bulk load
    path(route='health/', view=views.test_connection, name='health'),

]
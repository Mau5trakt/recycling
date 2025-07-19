from django.urls import path, re_path
from core import views

urlpatterns = [
    path('', views.IndexTemplateView.as_view(), name='index'),

]
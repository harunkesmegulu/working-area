from django.urls import path

from rest_framework import routers

from .views import CarView

router = routers.DefaultRouter()
router.register('car', CarView)

urlpatterns = [
]

urlpatterns += router.urls

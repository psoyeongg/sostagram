from django.urls import path
from . import views

app_name = "images"
urlpatterns = [
    path("", view=views.Feed.as_view(), name="feed"),
    path("<int:image_id>/like/", view=views.LikeImage.as_view(), name="like_image")
]




# /images/3/like/

# 0. create the url and the view (done)
# 1. take the id from the url (done)
# 2. we want to find an image with the id
# 3. we want to create a like for that image
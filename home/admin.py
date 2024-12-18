from django.contrib import admin
from .models import About, Experience, Projects, Contact

admin.site.register([About, Experience, Projects, Contact])
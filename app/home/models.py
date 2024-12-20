from django.db import models




class About(models.Model):
    title = models.CharField(max_length=255)
    body = models.TextField()
    experience = models.FloatField()
    projects_compeleted = models.IntegerField()
    sv = models.FileField(upload_to='resume-files/')

    def __str__(self):
        return self.title
    


class Experience(models.Model):
    title = models.CharField(max_length=255)
    comp_title = models.CharField(max_length=255)
    working_time = models.CharField(max_length=100)
    body = models.TextField()
    def __str__(self):
        return self.title


class Projects(models.Model):
    title = models.CharField(max_length=255)
    body = models.TextField()
    image = models.ImageField(upload_to='project-images/')
    used_tech = models.CharField(max_length=255)
    link = models.CharField(max_length=255)

    def __str__(self):
        return self.title
    


class Contact(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    subject = models.CharField(max_length=255)
    message = models.TextField()

    def __str__(self):
        return self.name
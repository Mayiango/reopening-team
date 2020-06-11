from django.db import models

# Create your models here.
class State(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()

    def __str__(self):
        """A string representation of the model."""
        return self.name

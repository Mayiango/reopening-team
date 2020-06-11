from django.test import TestCase
from .models import State
# Create your tests here.
class StateModelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        State.objects.create(name='first state')
        State.objects.create(description='a description here')

    def test_title_content(self):
        state = State.objects.get(id=1)
        expected_object_name = f'{state.name}'
        self.assertEquals(expected_object_name, 'let\'s go Texans')

    def test_description_content(self):
        state = State.objects.get(id=2)
        expected_object_name = f'{state.description}'
        self.assertEquals(expected_object_name, 'a description here')

from django.views.generic import TemplateView
from django.utils import timezone
# Create your views here.

class IndexTemplateView(TemplateView):

    template_name = 'core/index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["date"] = timezone.now()

        return context


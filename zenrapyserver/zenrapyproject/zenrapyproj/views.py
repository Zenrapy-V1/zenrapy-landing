from django.shortcuts import render #going to allow us render template files


def index(request):
    return render (request, 'index.html')

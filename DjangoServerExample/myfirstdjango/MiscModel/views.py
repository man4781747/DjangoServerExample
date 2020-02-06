from django.shortcuts import render
from django.http import JsonResponse
import datetime
# Create your views here.

def DOY2DAY(request, year, doy):
    Date = datetime.datetime(int(year), 1, 1) + datetime.timedelta(int(doy) - 1)
    return JsonResponse(
        {
            'Year': Date.year,
            'Month': Date.month,
            'Day': Date.day,
        }
    )


def DAY2DOY(request, year, month, day):
    Date = (datetime.date(int(year),int(month), int(day)) - datetime.date(int(year), 1, 1)).days + 1

    return JsonResponse(
        {
            'Year': year,
            'Doy': Date,
        }
    )

def Countdown(request):
    starttime = datetime.datetime.now()
    d1 = datetime.datetime(2019, 12, 1)
    d2 = d1-starttime
    return JsonResponse(
        {
            'Days': d2.days,
            'Seconds' : d2.seconds
        }
    )


def testtest(request):
    return render(request, 'CountDown.html', {})

def STGGame(request):
    return render(request, 'STGGame.html', {})

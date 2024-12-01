1. Open four(4) anaconda powershell prompt all as administrator

2. Then activate your conda environment e.g conda activate myenv
NOTE: use "conda env list" to see your available env if you don't remember your environment name 

3. Navigate to your project directory after activating your env
Example: cd [then the project directory]

* Steps 1 to 3 should be applied to all four opened anaconda powershell prompt.

Anaconda Powershell 1: RUNNING THE APP
a. Use "python manage.py runserver" to run the app
b. Then open the app in 'icognito mode' on any webrowser with the url: localhost:8000
NOTE: icognito mode helps prevent stale caching

-- THIS IS FOR THE REALTIME UPDATE --
 
Anaconda Powershell 2: RUNNING THE WEBSOCKET
a. Use "daphne -p 8001 geospatialproject.asgi:application"

Anaconda Powershell 3: RUNNING CELERY BEAT
a. Use "celery -A geospatialproject beat -l info"

Anaconda Powershell 3: RUNNING CELERY WORKER
a. Use "celery -A geospatialproject worker --pool=solo -l info"

NOTE: the realtime update only works when the 'last_update' table is updated
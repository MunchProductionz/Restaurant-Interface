# Django-Webapp

## Conda environment

Create a conda environment using:

- `conda create --name <env name>`

Activate/deactivate the conda environment using:

- `conda activate <env name>`
- `conda deactivate`


### Packages
Using the following packages:

- `pip==23.3`
- `Python==3.12.0`
- `Django==4.2.7`
- `djangorestframework` 

Install pip using:

- `conda install pip`

Install the required packages using:

- `pip install -r requirements.txt`


## Initial setup
Intial django project was setup up using:

- `django-admin startproject <env name>`

Initial django apps were setup using:

- `django-admin startapp <app name>`

Enter the outer `<env name>` directory and run the server using:

- `py manage.py runserver`

Follow this guide for more information regarding the use of specific ports:

- (Setup Django Project)[https://docs.djangoproject.com/en/4.2/intro/tutorial01/]


### Relevant commands
After making models in an app, make migrations using:

- `py manage.py makemigrations`
- `py manage.py migrate`

Open a shell terminal to communicate with the data using:

- `py manage.py shell`


## Resources
Relevant resources:

- (Django YT Series)[https://www.youtube.com/watch?v=SIyxjRJ8VNY&list=PLsyeobzWxl7r2ukVgTqIQcl-1T0C2mzau]
- (Django YT REST API)[https://www.youtube.com/watch?v=cJveiktaOSQ]
- (Django YT REST Serializers & CRUD)[https://www.youtube.com/watch?v=TmsD8QExZ84]
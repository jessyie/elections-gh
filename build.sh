#!/bin/bash

# Initialize conda
eval "$(conda shell.bash hook)"

# Create or update the environment from environment.yml
conda env update -f environment.yml

# Activate the environment
conda activate mydjangoP

# Run Django migrations
python manage.py migrate

# Install any additional pip packages from requirements.txt if needed
# pip install -r requirements.txt

# Collect static files (if applicable)
python manage.py collectstatic --noinput

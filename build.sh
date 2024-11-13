#!/bin/bash

# Step 1: Install Miniconda
echo "Installing Miniconda..."
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O miniconda.sh
bash miniconda.sh -b -p $HOME/miniconda
export PATH="$HOME/miniconda/bin:$PATH"

# Step 2: Initialize Conda and create the environment
source $HOME/miniconda/bin/activate
conda init bash

# Step 3: Create or update Conda environment without prefix
echo "Creating Conda environment..."
conda env create -f environment.yml || conda env update -f environment.yml

# Step 4: Activate the environment
source activate mydjangoP

# Step 5: Install any additional pip packages
pip install -r requirements.txt

# Step 6: Run Django migrations and collect static files
echo "Running migrations and collecting static files..."
python manage.py migrate
python manage.py collectstatic --noinput

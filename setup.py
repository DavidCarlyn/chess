from setuptools import setup, find_packages

# Required libraries
REQUIRED_DEPENDENCIES = []

# Optional libraries for non-essential tasks
EXTRA_DEPENDENCIES = []

setup(
    name="Chess",
    version="0.0.1",
    packages=find_packages(where="src/chess"),
    install_requires=REQUIRED_DEPENDENCIES,
    extras_requires=EXTRA_DEPENDENCIES,
)

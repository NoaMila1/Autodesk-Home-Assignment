Hello and welcome to Noa Mila's Autodesk home assignment.

You can access the live API on Heroku at: https://autodesk-home-assignment-f100761812f1.herokuapp.com/

API Documentation
Here are the available endpoints and how to use them:

GET /GetAutoDeskYouTubeVideo: This endpoint returns 10 videos with the word "Autodesk" as the topic. The endpoint returns the topic, video duration, and views.
GET /Health: This endpoint returns a health check of your service with OS name, platform version, memory, and CPU usage.
In case of an error indicating a 404 error from Google's APIs, check "https://developers.google.com/youtube/v3/docs" to see Google's breaking changes.

Running Locally with Docker
To run this service locally with Docker, follow these steps:

Install Docker on your machine if you haven't already. You can download it from https://www.docker.com/products/docker-desktop.
Clone this repository to your local machine, link: https://github.com/NoaMila1/Autodesk-Home-Assignment.
Navigate to the directory of the cloned repository.
Build the Docker image by running docker build -t 'your-image-name' . Note: Don't forget the dot (.) at the end — painful experience :)
Run the Docker container by running docker run -p 3000:3000 your-image-name.
The service should now be running at http://localhost:3000.
Please note that you'll need to replace your-image-name with the actual name of your Docker image.